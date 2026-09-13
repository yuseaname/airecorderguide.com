<?php
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

// Same-site check: reject cross-origin POSTs when Origin/Referer is present and foreign
$host = 'airecorderguide.com';
$originHost = parse_url($_SERVER['HTTP_ORIGIN'] ?? '', PHP_URL_HOST);
$refererHost = parse_url($_SERVER['HTTP_REFERER'] ?? '', PHP_URL_HOST);
if ($originHost !== null && strcasecmp($originHost, $host) !== 0) {
    http_response_code(403);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => false, 'error' => 'Cross-origin submissions are not accepted.']);
    exit;
}
if ($originHost === null && $refererHost !== null && strcasecmp($refererHost, $host) !== 0) {
    http_response_code(403);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => false, 'error' => 'Cross-site submissions are not accepted.']);
    exit;
}

// Per-IP sliding-window rate limit (cookie-free; survives session rotation): 3 per 10 min
$rateFile = sys_get_temp_dir() . '/airecg-contact-' . hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown') . '.json';
$now = time();
$rate = ['window' => $now, 'count' => 0];
if (is_file($rateFile)) {
    $decoded = json_decode((string)file_get_contents($rateFile), true);
    if (is_array($decoded) && isset($decoded['window'], $decoded['count'])) $rate = $decoded;
}
if ($now - (int)$rate['window'] > 600) { $rate['window'] = $now; $rate['count'] = 0; }
$rate['count']++;
@file_put_contents($rateFile, json_encode($rate), LOCK_EX);
if ($rate['count'] > 3) {
    http_response_code(429);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => false, 'error' => 'Too many messages. Please wait 10 minutes and try again.']);
    exit;
}

// Never leak PHP errors to responses
ini_set('display_errors', '0');
error_reporting(0);

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$isJson = stripos($contentType, 'application/json') !== false;
if ($isJson) {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    if (!is_array($data)) $data = [];
} else {
    $data = $_POST;
}

// Honeypot: hidden field must be empty (bots fill it)
if (!empty($data['website'])) {
    http_response_code(400);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => false, 'error' => 'Message rejected.']);
    exit;
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$topic = trim((string)($data['topic'] ?? 'general'));
$message = trim((string)($data['message'] ?? ''));
$allowedTopics = ['general', 'correction', 'tip', 'partnership', 'press'];

function fail_response($message, $isJson, $status = 400) {
    http_response_code($status);
    if ($isJson) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => false, 'error' => $message]);
    } else {
        header('Content-Type: text/html; charset=utf-8');
        echo '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/assets/site.css"><title>Message not sent</title></head><body><main class="mx-auto max-w-xl px-4 py-20"><h1 class="font-display text-3xl font-semibold">Message not sent</h1><p class="mt-4 text-muted-foreground">'.htmlspecialchars($message).'</p><p class="mt-6"><a class="text-primary underline" href="/contact/">Return to the contact page</a> or email <a class="text-primary underline" href="mailto:hello@airecorderguide.com">hello@airecorderguide.com</a>.</p></main></body></html>';
    }
    exit;
}


if (mb_strlen($name) < 2 || mb_strlen($name) > 120) fail_response('Please tell us your name.', $isJson);
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 200) fail_response('Please provide a valid email address.', $isJson);
if (!in_array($topic, $allowedTopics, true)) $topic = 'general';
if (mb_strlen($message) < 20 || mb_strlen($message) > 5000) fail_response('Please write between 20 and 5,000 characters.', $isJson);

$safeName = str_replace(["\r", "\n"], ' ', $name);
$safeEmail = str_replace(["\r", "\n"], '', $email);
$to = 'hello@airecorderguide.com';
$subject = '[AI Recorder Guide] ' . ucfirst($topic) . ' from ' . $safeName;
$body = "Name: {$safeName}\nEmail: {$safeEmail}\nTopic: {$topic}\n\nMessage:\n{$message}\n";
$headers = [
    'From: AI Recorder Guide <no-reply@airecorderguide.com>',
    'Reply-To: ' . $safeEmail,
    'Content-Type: text/plain; charset=UTF-8'
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));
if (!$sent) fail_response('We could not send your message. Please email hello@airecorderguide.com directly.', $isJson, 500);

if ($isJson) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => true]);
} else {
    header('Location: /contact/?sent=1', true, 303);
}
