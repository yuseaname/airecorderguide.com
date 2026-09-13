(()=>{
const DEVICES=[{"id":"plaud-note","brand":"PLAUD","name":"PLAUD Note","price":[129,159],"form":"card","free":300,"model":"free-tier","mode":"cloud","battery":"30 hrs continuous / up to 60 days standby [SPEC]","storage":"64 GB","apps":["iOS","Android","Web app"],"integrations":["Notion","ChatGPT (MCP server)","Zapier","Dropbox"],"bestFor":["Phone-call capture","Everyday meeting notes","Wallet-friendly carry"],"call":true,"tiers":[{"name":"Starter","priceAnnual":0,"minutesPerMonth":300,"note":"Included free with device"},{"name":"Pro","priceAnnual":99.99,"priceMonthly":17.99,"minutesPerMonth":1200,"note":"$8.33/mo billed annually"},{"name":"Unlimited","priceAnnual":239.99,"priceMonthly":29.99,"minutesPerMonth":"unlimited","note":"24 hrs/day cap; $19.99/mo billed annually"}]},{"id":"plaud-note-pro","brand":"PLAUD","name":"PLAUD Note Pro","price":189,"form":"card","free":300,"model":"free-tier","mode":"cloud","battery":"50 hrs continuous (500 mAh) [SPEC]","storage":"64 GB","apps":["iOS","Android","Web app"],"integrations":["Notion","ChatGPT (MCP server)","Zapier","Dropbox"],"bestFor":["Heavy daily users","Noisy rooms","Call-heavy workflows"],"call":true,"tiers":[{"name":"Starter","priceAnnual":0,"minutesPerMonth":300,"note":"Included free with device"},{"name":"Pro","priceAnnual":99.99,"priceMonthly":17.99,"minutesPerMonth":1200,"note":"$8.33/mo billed annually"},{"name":"Unlimited","priceAnnual":239.99,"priceMonthly":29.99,"minutesPerMonth":"unlimited","note":"24 hrs/day cap; $19.99/mo billed annually"}]},{"id":"plaud-notepin","brand":"PLAUD","name":"PLAUD NotePin","price":[99,159],"form":"wearable","free":300,"model":"free-tier","mode":"cloud","battery":"Up to 20 hrs continuous [SPEC]","storage":"64 GB","apps":["iOS","Android"],"integrations":["Notion","ChatGPT (MCP server)","Zapier"],"bestFor":["Hands-free capture","Discreet wear","All-day note-taking"],"call":"placement","tiers":[{"name":"Starter","priceAnnual":0,"minutesPerMonth":300,"note":"Included free with device"},{"name":"Pro","priceAnnual":99.99,"priceMonthly":17.99,"minutesPerMonth":1200,"note":"$8.33/mo billed annually"},{"name":"Unlimited","priceAnnual":239.99,"priceMonthly":29.99,"minutesPerMonth":"unlimited","note":"24 hrs/day cap; $19.99/mo billed annually"}]},{"id":"plaud-notepin-s","brand":"PLAUD","name":"PLAUD NotePin S","price":[159,189],"form":"wearable","free":300,"model":"free-tier","mode":"cloud","battery":"20 hrs continuous / 40 days standby, 320 mAh [SPEC]","storage":"64 GB","apps":["iOS","Android","New desktop meeting app [SPEC]"],"integrations":["Notion","ChatGPT (MCP server)","Zapier"],"bestFor":["Early adopters","Wearable-first users","Live highlighting"],"call":"placement","tiers":[{"name":"Starter","priceAnnual":0,"minutesPerMonth":300,"note":"Included free with device"},{"name":"Pro","priceAnnual":99.99,"priceMonthly":17.99,"minutesPerMonth":1200,"note":"$8.33/mo billed annually"},{"name":"Unlimited","priceAnnual":239.99,"priceMonthly":29.99,"minutesPerMonth":"unlimited","note":"24 hrs/day cap; $19.99/mo billed annually"}]},{"id":"pocket","brand":"HeyPocket","name":"Pocket","price":[129,199],"form":"card","free":"unlimited","model":"free-unlimited","mode":"cloud","battery":"4 days of active use [SPEC]","storage":"64 GB onboard + unlimited cloud [SPEC]","apps":["iOS","Android"],"integrations":["Standard export workflows"],"bestFor":["Subscription-averse buyers","Light budgets","Unlimited-minutes users"],"call":"placement","tiers":[{"name":"Standard","priceAnnual":0,"minutesPerMonth":"unlimited","note":"Included with device"},{"name":"Pro","priceMonthly":16.59,"priceAnnual":199,"minutesPerMonth":"unlimited","note":"Highest-accuracy model, speaker auto-naming, unlimited Ask Pocket; $199/yr billed annually"}]},{"id":"soundcore-work","brand":"Anker soundcore","name":"soundcore Work (D3200)","price":[90,159],"form":"coin","free":300,"model":"free-tier","mode":"hybrid","battery":"~8 hrs on-device / up to 32 hrs with charging case [REVIEW]","storage":"64 GB (≈250 hrs audio) [SPEC]","apps":["iOS","Android"],"integrations":["Standard export workflows"],"bestFor":["Ultra-compact wear","iPhone users (MFi-certified)","Budget shoppers"],"call":false,"tiers":[{"name":"Starter","priceAnnual":0,"minutesPerMonth":300,"note":"Included free with device"},{"name":"Pro","priceAnnual":99.99,"priceMonthly":15.99,"minutesPerMonth":1200},{"name":"Unlimited","priceAnnual":239.99,"minutesPerMonth":"unlimited"}]},{"id":"notta-memo","brand":"Notta","name":"Notta Memo","price":149,"form":"card","free":120,"model":"free-tier","mode":"cloud","battery":"30 hrs recording / 28-day standby [SPEC]","storage":"32 GB","apps":["iOS","Android","Web (Notta platform)"],"integrations":["Notion","Google Calendar","Salesforce","Zoom (via Notta platform)"],"bestFor":["Multilingual users","Translation workflows","Notta subscribers"],"call":true,"tiers":[{"name":"Free","priceAnnual":0,"minutesPerMonth":120},{"name":"Pro","priceAnnual":97.99,"priceMonthly":13.99,"minutesPerMonth":1800,"note":"$8.17/mo billed annually"},{"name":"Business","priceMonthly":16.67,"minutesPerMonth":"unlimited","note":"Per-seat pricing"}]},{"id":"fieldy-3","brand":"Fieldy","name":"Fieldy 3","price":[129,179],"form":"wearable","free":150,"model":"free-tier","mode":"cloud","battery":"","storage":"","apps":["iOS","Android"],"integrations":["Standard export workflows"],"bestFor":["Always-on memory","Continuous capture experiments"],"call":false,"tiers":[{"name":"Free","priceAnnual":0,"minutesPerMonth":150},{"name":"Paid","priceMonthly":9.99,"minutesPerMonth":0,"note":"Memberships from $9.99/mo"},{"name":"Unlimited","priceMonthly":15.99,"minutesPerMonth":"unlimited"}]},{"id":"hidock-p1","brand":"HiDock","name":"HiDock P1","price":169,"form":"card","free":"unlimited","model":"free-unlimited","mode":"cloud","battery":"","storage":"","apps":["iOS","Android","HiNotes web"],"integrations":["HiNotes ecosystem"],"bestFor":["No-subscription buyers","Call recording via earphones","Desktop meeting capture"],"call":true,"tiers":[{"name":"Included","priceAnnual":0,"minutesPerMonth":"unlimited","note":"Free with device"},{"name":"HiNotes Pro (optional)","priceMonthly":12.99,"minutesPerMonth":1200,"note":"Optional packs: $12.99/1,200 min; $99.99/12,000 min; Unlimited $199"}]},{"id":"iflytek-sr302-pro","brand":"iFLYTEK","name":"Smart Recorder SR302 Pro","price":[159,249],"form":"handheld","free":"unlimited","model":"offline-free","mode":"local","battery":"Up to 7 hrs continuous recording [SPEC]","storage":"32 GB (≈175 hrs)","apps":["Standalone device — no account required"],"integrations":["File transfer to PC"],"bestFor":["Privacy-first users","Confidential meetings","No-cloud policies"],"call":false,"tiers":[{"name":"Core transcription","priceAnnual":0,"minutesPerMonth":"unlimited","note":"Included — no subscription"}]},{"id":"omi","brand":"Based Hardware","name":"Omi","price":179,"form":"pendant","free":"unlimited","model":"free-tier","mode":"hybrid","battery":"10-14 hrs continuous, 150 mAh [SPEC]","storage":"","apps":["iOS","Android","Mac","Browser"],"integrations":["Open-source app/SDK ecosystem"],"bestFor":["Tinkerers","Open-source fans","Local-first privacy"],"call":false,"tiers":[{"name":"Basic","priceAnnual":0,"minutesPerMonth":"unlimited","note":"On-phone transcription unlimited; 300 cloud min/mo"},{"name":"Plus","priceMonthly":19,"priceAnnual":161.91,"minutesPerMonth":1500,"note":"Annual billing works out lower"},{"name":"Unlimited","priceMonthly":29,"priceAnnual":269.91,"minutesPerMonth":"unlimited","note":"Annual billing works out lower"}]},{"id":"ticnote","brand":"Mobvoi","name":"TicNote","price":[99,160],"form":"card","free":600,"model":"free-tier","mode":"cloud","battery":"~25 hrs continuous, 470 mAh [SPEC]","storage":"64 GB (≈434 hrs)","apps":["iOS","Android"],"integrations":["Live transcription","Shadow AI agent [SPEC]"],"bestFor":["Value hunters","Live transcription fans","Moderate-volume users"],"call":"placement","tiers":[{"name":"Free","priceAnnual":0,"minutesPerMonth":600},{"name":"Pro","priceAnnual":79,"priceMonthly":12.99,"minutesPerMonth":2100,"note":"$6.58/mo billed annually — best-value paid plan in the category"},{"name":"Business","priceMonthly":29.99,"minutesPerMonth":6600},{"name":"Unlimited","priceAnnual":239.99,"minutesPerMonth":"unlimited"}]},{"id":"wavenote","brand":"WaveNote","name":"WaveNote","price":[119,129],"form":"card","free":0,"model":"optional","mode":"cloud","battery":"42 hrs continuous [SPEC]","storage":"64 GB (≈480 hrs)","apps":["iOS","Android"],"integrations":["Standard export workflows"],"bestFor":["Budget buyers","Long recording days"],"call":"placement","tiers":[{"name":"AI transcription","priceAnnual":0,"minutesPerMonth":0,"note":"Pricing not published clearly — verify before buying"}]},{"id":"vibe-dot","brand":"Vibe","name":"Vibe Dot","price":[199,249],"form":"coin","free":"unlimited","model":"free-tier","mode":"cloud","battery":"30+ hrs [SPEC]","storage":"64 GB","apps":["iOS","Android"],"integrations":["Team/workspace features"],"bestFor":["Teams","Workplace deployment","Limitless Pendant refugees"],"call":false,"tiers":[{"name":"Core","priceAnnual":0,"minutesPerMonth":"unlimited","note":"Core features free"},{"name":"Pro","priceMonthly":9,"minutesPerMonth":"unlimited","note":"Per seat, billed annually"},{"name":"Max","priceMonthly":29,"minutesPerMonth":"unlimited"}]},{"id":"vocci-ring","brand":"Vocci","name":"Vocci Ring","price":[249,299],"form":"ring","free":0,"model":"trial-included","mode":"cloud","battery":"8 hrs non-stop + 3 extra charges in case [SPEC]","storage":"","apps":["iOS","Android"],"integrations":["ChatGPT","Claude [SPEC]"],"bestFor":["Maximum discretion","Ring-first users"],"call":false,"tiers":[{"name":"AI Pro","priceAnnual":0,"minutesPerMonth":0,"note":"3-month trial included; ongoing price TBA"}]},{"id":"bee","brand":"Amazon (Bee)","name":"Bee AI Wristband","price":49.99,"form":"wristband","free":"unlimited","model":"free-tier","mode":"cloud","battery":"","storage":"","apps":["iOS","Android"],"integrations":["Amazon ecosystem (evolving)"],"bestFor":["Cheapest entry point","Experimenters"],"call":false,"tiers":[{"name":"Core","priceAnnual":0,"minutesPerMonth":"unlimited","note":"Included post-acquisition per owner reports"}]}];
const TAG='airecgd-20';
const money=n=>'$'+Math.round(n).toLocaleString();
const price=d=>Array.isArray(d.price)?(d.price[0]===d.price[1]?'$'+d.price[0]:'$'+d.price[0]+'–$'+d.price[1]):'Check current price';
const amazon=q=>'https://www.amazon.com/s?k='+encodeURIComponent(q)+'&tag='+TAG;
function shell(title,dek,inner){return '<div class="tool-wrap"><p class="tool-kicker">Free tool · no signup</p><h1>'+title+'</h1><p class="tool-dek">'+dek+'</p><div class="tool-panel">'+inner+'</div><p class="tool-note">Product prices and subscription terms can change. Verify current terms before buying. Amazon links are paid links; as an Amazon Associate AI Recorder Guide earns from qualifying purchases.</p></div>'}
function optDevices(){return DEVICES.map(d=>'<option value="'+d.id+'">'+d.name+' · '+price(d)+'</option>').join('')}
function byId(id){return DEVICES.find(d=>d.id===id)}
function minAnnual(d){const p=(d.tiers||[]).map(t=>t.priceAnnual??((t.priceMonthly||0)*12)).filter(x=>x>0).sort((a,b)=>a-b);return p[0]||0}
function installFinder(main){
 main.innerHTML=shell('Find your AI recorder','Answer a few practical questions and get a shortlist from the devices tracked by AI Recorder Guide.','<form id="finder-form" class="tool-grid"><label>Primary use<select name="use"><option value="meetings">Meetings & work</option><option value="lectures">Lectures & classes</option><option value="interviews">Interviews</option><option value="calls">Phone calls</option><option value="memory">Personal notes</option></select></label><label>Monthly volume<select name="volume"><option value="light">Under 5 hours</option><option value="medium">5–20 hours</option><option value="heavy">20+ hours</option></select></label><label>Subscriptions<select name="subscription"><option value="never">Avoid subscriptions</option><option value="free">Free tier is okay</option><option value="ok">Paid plan is okay</option></select></label><label>Phone-call recording<select name="calls"><option value="no">Not needed</option><option value="sometimes">Sometimes</option><option value="yes">Essential</option></select></label><label>Privacy sensitivity<select name="privacy"><option value="low">Normal</option><option value="medium">Confidential work</option><option value="high">Highly sensitive</option></select></label><label>Preferred form<select name="form"><option value="any">No preference</option><option value="card">Card / phone-mounted</option><option value="wearable">Wearable</option></select></label><button class="tool-btn" type="submit">Show my matches</button></form><div id="finder-results"></div>');
 document.getElementById('finder-form').addEventListener('submit',e=>{e.preventDefault();const a=Object.fromEntries(new FormData(e.currentTarget));const scored=DEVICES.map(d=>{let s=0;const t=(d.bestFor||[]).join(' ').toLowerCase();if(t.includes(a.use==='calls'?'phone':a.use.replace(/s$/,'')))s+=20;if(a.subscription==='never'){if(d.free==='unlimited'||d.model==='free-unlimited'||d.model==='offline-free')s+=30;else s-=12}else if(a.subscription==='free'&&(d.free==='unlimited'||Number(d.free)>=300))s+=15;if(a.volume==='heavy'&&d.free==='unlimited')s+=15;if(a.calls==='yes')s+=d.call===true?25:d.call==='placement'?8:-20;if(a.privacy==='high')s+=d.mode==='local'?25:d.mode==='hybrid'?10:-15;if(a.form==='card')s+=d.form==='card'?15:-3;if(a.form==='wearable')s+=['wearable','coin','pendant','ring','wristband'].includes(d.form)?15:-3;return {d,s}}).sort((x,y)=>y.s-x.s).slice(0,3);document.getElementById('finder-results').innerHTML='<h2 class="tool-subhead">Your strongest matches</h2><div class="tool-cards">'+scored.map((x,i)=>'<article class="tool-card"><span class="tool-rank">#'+(i+1)+'</span><h3>'+x.d.name+'</h3><p>'+x.d.brand+' · '+price(x.d)+' · '+x.d.form+'</p><p>Free transcription: '+(x.d.free==='unlimited'?'Unlimited':(x.d.free||'Varies')+' min/mo')+'</p><a class="tool-btn" rel="sponsored nofollow noopener noreferrer" target="_blank" href="'+amazon(x.d.name+' AI voice recorder')+'">See '+x.d.name+' options on Amazon · Paid link</a><p class="tool-micro">Paid link · As an Amazon Associate we earn from qualifying purchases · <a href="/affiliate-disclosure/">How we are paid</a></p></article>').join('')+'</div>'});
}
function installCompare(main){main.innerHTML=shell('Compare AI recorders side by side','Choose up to three devices and compare practical ownership details.','<div class="tool-grid three"><label>Device 1<select id="cmp1">'+optDevices()+'</select></label><label>Device 2<select id="cmp2">'+optDevices()+'</select></label><label>Device 3<select id="cmp3">'+optDevices()+'</select></label></div><div id="compare-output"></div>');const ids=['cmp1','cmp2','cmp3'];if(DEVICES[1])document.getElementById('cmp2').value=DEVICES[1].id;if(DEVICES[2])document.getElementById('cmp3').value=DEVICES[2].id;const draw=()=>{const ds=ids.map(id=>byId(document.getElementById(id).value));const rows=[['Observed retail',d=>price(d)],['Form factor',d=>d.form],['Free minutes/mo',d=>d.free==='unlimited'?'Unlimited':d.free||'—'],['Transcription',d=>d.mode],['Phone calls',d=>d.call===true?'Yes':d.call==='placement'?'Placement only':'No'],['Battery',d=>d.battery||'—'],['Storage',d=>d.storage||'—'],['Cheapest paid plan/yr',d=>minAnnual(d)?money(minAnnual(d)):'None required']];document.getElementById('compare-output').innerHTML='<div class="tool-table-wrap"><table class="tool-table"><thead><tr><th>Feature</th>'+ds.map(d=>'<th>'+d.name+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr><th>'+r[0]+'</th>'+ds.map(d=>'<td>'+r[1](d)+'</td>').join('')+'</tr>').join('')+'<tr><th>Buy</th>'+ds.map(d=>'<td><a class="tool-link" rel="sponsored nofollow noopener noreferrer" target="_blank" href="'+amazon(d.name+' AI voice recorder')+'">See '+d.name+' options · Paid link</a><small class="tool-micro">Paid link · As an Amazon Associate we earn from qualifying purchases · <a href="/affiliate-disclosure/">How we are paid</a></small></td>').join('')+'</tr></tbody></table></div>'};ids.forEach(id=>document.getElementById(id).addEventListener('change',draw));draw()}
function installSub(main){main.innerHTML=shell('AI recorder subscription cost calculator','Estimate three-year ownership cost using observed hardware pricing and current researched plan structures.','<div class="tool-grid"><label>Device<select id="sub-device">'+optDevices()+'</select></label><label>Plan<select id="sub-plan"></select></label></div><div id="sub-result" class="tool-result"></div>');const dsel=document.getElementById('sub-device'),psel=document.getElementById('sub-plan');function plans(){const d=byId(dsel.value);psel.innerHTML='<option value="0">Free / included tier</option>'+d.tiers.filter(t=>(t.priceAnnual||t.priceMonthly||0)>0).map(t=>'<option value="'+(t.priceAnnual??((t.priceMonthly||0)*12))+'">'+t.name+' · '+money(t.priceAnnual??((t.priceMonthly||0)*12))+'/yr</option>').join('');calc()}function calc(){const d=byId(dsel.value);const hw=Array.isArray(d.price)?d.price[0]:0;const annual=Number(psel.value||0);const total=hw+annual*3;document.getElementById('sub-result').innerHTML='<strong>'+d.name+'</strong><span>Estimated 3-year cost</span><b>'+money(total)+'</b><small>Using '+money(hw)+' observed starting hardware price + '+money(annual)+'/yr selected plan.</small><a class="tool-btn" rel="sponsored nofollow noopener noreferrer" target="_blank" href="'+amazon(d.name+' AI voice recorder')+'">See '+d.name+' options on Amazon · Paid link</a><small class="tool-micro">Paid link · As an Amazon Associate we earn from qualifying purchases · <a href="/affiliate-disclosure/">How we are paid</a></small>'}dsel.addEventListener('change',plans);psel.addEventListener('change',calc);plans()}
function installMinutes(main){main.innerHTML=shell('Transcription minutes calculator','Estimate how many transcription minutes you need in an average month.','<form id="min-form" class="tool-grid"><label>Meetings per week<input name="meetings" type="number" min="0" value="5"></label><label>Minutes per meeting<input name="meetingMin" type="number" min="0" value="45"></label><label>Lectures/classes per week<input name="lectures" type="number" min="0" value="0"></label><label>Minutes per lecture<input name="lectureMin" type="number" min="0" value="60"></label><label>Other recording minutes/month<input name="other" type="number" min="0" value="120"></label><button class="tool-btn" type="submit">Calculate my monthly need</button></form><div id="min-result" class="tool-result"></div>');const f=document.getElementById('min-form');const calc=e=>{if(e)e.preventDefault();const x=Object.fromEntries(new FormData(f));const total=Math.round((+x.meetings*+x.meetingMin + +x.lectures*+x.lectureMin)*4.33 + +x.other);document.getElementById('min-result').innerHTML='<span>Estimated monthly transcription</span><b>'+total.toLocaleString()+' minutes</b><small>About '+(total/60).toFixed(1)+' hours/month. Compare this against each recorder\'s free tier before paying for a subscription.</small><a class="tool-link" href="/ai-recorder-subscriptions/">Compare subscription plans →</a>'};f.addEventListener('submit',calc);calc()}
function contactBanner(){if(location.pathname.startsWith('/contact')&&new URLSearchParams(location.search).get('sent')==='1'){const form=document.querySelector('form');if(form){const b=document.createElement('div');b.className='contact-success';b.textContent='Message sent — thank you. We will reply by email.';form.parentNode.insertBefore(b,form)}}}
function init(){const main=document.querySelector('main#main');if(!main)return;const p=location.pathname.replace(/\/$/,'')||'/';if(p==='/recorder-finder')installFinder(main);else if(p==='/compare-devices')installCompare(main);else if(p==='/subscription-cost-calculator')installSub(main);else if(p==='/transcription-minutes-calculator')installMinutes(main);contactBanner()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

/* ==== UX + analytics enhancements (audit 2026-09-02) ==== */
(function () {
  "use strict";
  if (window.__argEnhance) return; window.__argEnhance = true;

  /* Contact form: submit busy state */
  var cf = document.querySelector('form[action="/api/contact.php"]');
  if (cf) cf.addEventListener('submit', function () {
    var btn = cf.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
  });

  /* Topic radio group: sync visual state on the styled wrappers */
  var topicForm = document.querySelector('form[action="/api/contact.php"]');
  if (topicForm) {
    var radios = topicForm.querySelectorAll('input[name="topic"]');
    var sync = function () {
      radios.forEach(function (r) {
        var label = r.closest('label');
        if (!label) return;
        if (r.checked) {
          label.classList.add('border-primary/50', 'bg-primary/[0.06]');
          label.classList.remove('bg-card', 'hover:border-primary/30');
        } else {
          label.classList.remove('border-primary/50', 'bg-primary/[0.06]');
          label.classList.add('bg-card', 'hover:border-primary/30');
        }
      });
    };
    radios.forEach(function (r) { r.addEventListener('change', sync); });
    if (topicForm.querySelector('input[name="topic"]:checked')) sync();
    else if (radios[0]) { radios[0].checked = true; sync(); }
  }

  /* Analytics — privacy-first (no cookies, no PII).
     Payloads are enums/buckets only: no link_url, no link_text, no IDs.
     Activated 2026-09-06 — Rybbit Cloud (cookieless): script tag in each
     page <head>, sink bridges track() to window.rybbit.event(). Events
     before the async script loads are dropped (guarded). Privacy-policy
     analytics note added same date. */
  window.__analyticsSink = function (name, params) {
    if (window.rybbit && typeof window.rybbit.event === 'function') {
      try { window.rybbit.event(name, params || {}); } catch (e) {}
    }
  };
  function track(name, params) {
    try {
      var sink = window.__analyticsSink;
      if (typeof sink === 'function') sink(name, params || {});
      else if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
    } catch (e) {}
  }
  function isAffiliate(a) {
    if (!a) return false;
    var rel = (a.getAttribute('rel') || '').toLowerCase();
    var href = a.getAttribute('href') || '';
    return rel.indexOf('sponsored') !== -1 || /amazon\.[a-z.]+\/.*[?&]tag=airecgd-20/.test(href);
  }
  function pageId() {
    var p = location.pathname.replace(/\/+$/, '');
    return p === '' ? 'home' : p.split('/').pop();
  }
  function pageType() {
    var p = location.pathname;
    if (p === '/') return 'home';
    if (/^\/best-/.test(p)) return 'hub';
    if (/-review\/$/.test(p)) return 'review';
    if (/-vs-|card-vs-|ai-recorder-vs-phone-app/.test(p)) return 'vs';
    if (/^\/(recorder-finder|compare-devices|subscription-cost-calculator|transcription-minutes-calculator|ai-recorder-tco-study)\/$/.test(p)) return 'tool';
    if (/^\/(about|contact|affiliate-disclosure|editorial-policy|review-methodology|privacy-policy)\/?$/.test(p) || /404/.test(p)) return 'trust';
    return 'informational';
  }
  var KW_MAP = [['plaud note pro','plaud_note_pro'],['plaud notepin s','plaud_notepin_s'],['plaud note','plaud_note'],['ticnote','ticnote'],['hidock p1','hidock_p1'],['notta memo','notta_memo'],['soundcore work','soundcore_work'],['sr302','sr302_pro'],['omi','omi'],['pocket','pocket'],['vibe dot','vibe_dot'],['ai voice recorder','generic']];
  function keywordOf(href) {
    var m = /[?&]k=([^&]*)/.exec(href || '');
    if (!m) return 'unknown';
    var k = decodeURIComponent(m[1].replace(/\+/g, ' ')).toLowerCase();
    for (var i = 0; i < KW_MAP.length; i++) if (k.indexOf(KW_MAP[i][0]) !== -1) return KW_MAP[i][1];
    return 'other';
  }
  function sectionBucket(a) {
    if (a.closest('details[data-slot="accordion-item"]')) return 'faq';
    var sec = a.closest('section');
    var h = sec ? sec.querySelector('h2, h3') : null;
    var t = h ? (h.textContent || '').toLowerCase() : '';
    if (/verdict|short answer|short version|whole decision|trade-offs, plainly/.test(t)) return 'verdict';
    if (/who should|who each|pick by|who.it.s for/.test(t)) return 'who_should_buy';
    if (/pick|worth buying|budget|paths|devices|alternative/.test(t)) return 'picks';
    if (/faq|frequently/.test(t)) return 'faq';
    return t ? 'other' : 'pre_h2';
  }
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a') : null;
    if (!isAffiliate(a)) return;
    var all = Array.prototype.slice.call(document.querySelectorAll('a')).filter(isAffiliate);
    track('outbound_affiliate_click', {
      page_type: pageType(),
      page_id: pageId(),
      keyword: keywordOf(a.getAttribute('href')),
      position_slot: all.indexOf(a) + 1,
      section: sectionBucket(a)
    });
  }, { passive: true });
  var seenDepth = {};
  window.addEventListener('scroll', function () {
    var doc = document.documentElement;
    var pct = ((window.scrollY + window.innerHeight) / (doc.scrollHeight || 1)) * 100;
    [25, 50, 75, 90].forEach(function (m) {
      if (pct >= m && !seenDepth[m]) {
        seenDepth[m] = true;
        track('scroll_depth', { milestone: m, page_id: pageId(), page_type: pageType() });
      }
    });
  }, { passive: true });
  var t0 = Date.now();
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      var s = Math.round((Date.now() - t0) / 1000);
      var b = s < 5 ? 'lt5s' : s < 15 ? '5_15s' : s < 45 ? '15_45s' : s < 120 ? '45s_2m' : 'gt2m';
      track('engagement', { engagement_bucket: b, page_id: pageId(), page_type: pageType() });
    }
  });
  function toolEvent(tool, subtype) {
    track('tool_completion', { tool: tool, event_subtype: subtype, page_id: pageId() });
  }
  document.addEventListener('submit', function (e) {
    var id = e.target && e.target.id;
    if (id === 'finder-form') toolEvent('recorder_finder', 'finder_result');
    else if (id === 'min-form') toolEvent('minutes_calculator', 'calc_run');
    else if (e.target && e.target.getAttribute && e.target.getAttribute('action') === '/api/contact.php') {
      track('contact_submit', { page_id: pageId() });
    }
  }, { passive: true });
  document.addEventListener('change', function (e) {
    var id = e.target && e.target.id;
    if (id === 'sub-device' || id === 'sub-plan') toolEvent('subscription_calculator', 'calc_run');
    if (id === 'cmp1' || id === 'cmp2' || id === 'cmp3') toolEvent('compare_devices', 'compare_selection');
  });
})();
