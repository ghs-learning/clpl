(()=>{
 'use strict';
 const ids=['uTc8KD4hxPvcRH3h','FrFjrVh5cRP0bEkk','RNTi4TfBYLcPGUs2','y2QxItK4edIhQ0bg','28IAwtSzj1Lu3jMj','NwkDqWpK1Pon4k92','CYu2olvTVheiQWv4','XLUbbhhQkdrqAD0C','BaDLdjNJGtPeNBxL','XjqDRL2m7NIjns73','AIT1pDqfwAACAtKb','GyxsPN2HuEAwPpLU','oJB7JXqbbWhJAFs3','6SqAqghGlC3wXL2B','LIZNwpNdqOi2G17J','jRHGokN0YBaanR07','NCxYMs4MCpQDYev9','q9V3khE4hrtEzH7L','WcrTABAfye5CNbX3','ZPuHLuKTRMo5qVCT','M82jlYRTnRf9mDJU','q3Y9rQZmfBaWZ2D7'];
 const style=document.createElement('style');
 style.textContent='.hub-coming-soon{display:inline-block;padding:8px 10px;font-size:14px;font-weight:600;color:inherit;cursor:default}.hub-coming-soon em{font-style:normal;font-size:.85em;border:1px solid currentColor;border-radius:20px;padding:2px 8px;margin-left:5px}nav .hub-coming-soon{color:white}.bulletin-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:14px}.bulletin-list a{display:block;border:1px solid var(--line,#ddd);border-radius:10px;padding:16px;background:#fff;text-decoration:none}.bulletin-list a:hover{box-shadow:0 3px 12px #0002}.bulletin-list strong,.bulletin-list small{display:block}.bulletin-list small{color:#52616a;margin-top:5px}';
 document.head.append(style);
 window.openDigitalPedagogyHub=()=>{};
 function pauseLinks(){
  document.querySelectorAll('[data-open-digital-hub],[onclick*="openDigitalPedagogyHub"],a[href*="/digital-pedagogy/"]').forEach(el=>{
   const label=document.createElement('span');label.className='hub-coming-soon';label.setAttribute('aria-disabled','true');label.innerHTML='Digital Pedagogy Hub <em>Coming soon</em>';el.replaceWith(label);
  });
 }
 pauseLinks();
 const archive=document.querySelector('[data-page="archive"]');
 if(archive&&!document.getElementById('previous-bulletins')){
  const block=document.createElement('section');block.className='panel';block.id='previous-bulletins';
  block.innerHTML='<span class="eyebrow">Previous editions</span><h2>CLPL bulletin archive</h2><p>Revisit earlier professional learning, ideas and resources in the original Microsoft Sway bulletins.</p><p class="small">22 editions, listed in the order supplied. Open a bulletin to see its original title and date. Links open in a new tab; any Microsoft access restrictions still apply.</p><div class="bulletin-list">'+ids.map((id,i)=>'<a href="https://sway.cloud.microsoft/'+id+'?ref=Link&amp;loc=mysways" target="_blank" rel="noopener noreferrer"><strong>CLPL bulletin '+String(i+1).padStart(2,'0')+'</strong><small>Open original Microsoft Sway · new tab</small></a>').join('')+'</div>';
  const intro=archive.querySelector('.note');if(intro)intro.after(block);else archive.append(block);
 }
 new MutationObserver(pauseLinks).observe(document.body,{childList:true,subtree:true});
})();

(()=>{
 const root='https://ghs-learning.github.io/clpl/';
 const survey='https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=oyzTzM4Wj0KVQTctawUZKVLnjtvOIV5FoiT5ZNCp0HNUMVpZOU5TRE9INUhVT0tWVU1EVUEzTEdTOC4u&origin=QRCode';
 const topics=['Differentiation and inclusive practice','Pace and challenge','Questioning and pupil thinking','Feedback and assessment','Literacy across learning','Digital pedagogy','Staff wellbeing','Other topic or question'];
 const feedback=document.querySelector('[data-page="feedback"]');
 if(feedback){
  feedback.querySelector('.twocol')?.remove();
  const panel=document.createElement('section');panel.className='panel';panel.id='annual-clpl-survey';
  panel.innerHTML='<span class="eyebrow">Your views shape our offer</span><h2>Annual CLPL Professional Learning Survey</h2><p>Share your views to help shape our CLPL offer for the session ahead.</p><p><strong>Career-Long Professional Learning (CLPL) Survey · Session 2026–27</strong></p><div style="display:flex;gap:28px;flex-wrap:wrap;align-items:center"><a href="'+survey+'" target="_blank" rel="noopener noreferrer"><img src="'+root+'annual-clpl-survey-qr.png" alt="QR code for the annual CLPL Professional Learning Survey, session 2026–27" style="width:min(280px,100%);height:auto;background:#fff"></a><div><p>Scan the QR code with another device, or open the survey directly on this device.</p><a class="button" href="'+survey+'" target="_blank" rel="noopener noreferrer">Open annual CLPL survey</a></div></div><p class="small">Survey responses go to the existing Microsoft survey. They are separate from public discussion comments.</p>';
  feedback.append(panel);
  const invite=document.createElement('section');invite.className='panel';invite.innerHTML='<h3>Suggest a topic or ask a question</h3><p>Choose a learning theme, share a question or suggest an area for future professional dialogue.</p><a class="button" href="#conversations">Open Staff Conversations</a>';feedback.append(invite);
 }
 const page=document.querySelector('[data-page="conversations"]');
 if(page){
  const formUrl='https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=oyzTzM4Wj0KVQTctawUZKVLnjtvOIV5FoiT5ZNCp0HNURExYVDI0UEVDREhHVFAwUExENjZaSkE3Ti4u';
  const box=document.createElement('section');box.className='panel';box.id='suggest-discussion';
  box.innerHTML='<span class="eyebrow">Choose · Question · Explore</span><h2>What should we discuss?</h2><p>Choose a professional learning topic, ask a question or share an idea. Use the secure Microsoft form below; you do not need access to the school List.</p><p><a class="button" href="'+formUrl+'" target="_blank" rel="noopener noreferrer">Suggest a topic or contribute</a></p><details><summary style="cursor:pointer;font-weight:700;padding:12px 0">Open the submission form on this page</summary><iframe title="Submit a CLPL discussion topic, question or contribution" src="'+formUrl+'&amp;embed=true" loading="lazy" style="width:100%;height:980px;border:1px solid #ccc;border-radius:12px;background:white"></iframe></details><div class="note"><strong>Reviewed before publication.</strong> Your contribution goes to Mr McCarron’s moderation queue. He receives an approval request and a school email alert. Your chosen display name and text may be published after approval. Do not include pupil names or confidential information. Display names are self-selected, not verified identities.</div><p class="small">Publication is manual. Approval records Mr McCarron’s decision; a separate website update is needed before an approved contribution appears here. This form is separate from the annual CLPL survey.</p>';
  page.querySelector('h2')?.after(box);
  const feed=document.createElement('section');feed.className='panel';feed.id='approved-conversations';
  feed.innerHTML='<span class="eyebrow">Read · Reflect · Respond</span><h2>Staff discussion board</h2><p>Approved contributions will appear here for everyone to read. Use the Respond button below a discussion to open its separate reply form. The discussion reference is already filled in; add your response and, if you wish, your name. Replies are reviewed before publication.</p><button type="button" class="button" id="refresh-discussions">Refresh discussions</button><p id="discussion-feed-status" role="status" aria-live="polite">Loading published contributions…</p><div id="discussion-feed"></div>';
  box.after(feed);
  const container=feed.querySelector('#discussion-feed');const status=feed.querySelector('#discussion-feed-status');const refresh=feed.querySelector('#refresh-discussions');
  const publishedSnapshot=[{"number": 2, "title": "Other topic or question", "created_at": "2026-11-25T12:00:00Z", "body": "Public display name: Staff contributor\n\nWhat are the ethical implications from using AI in teaching? (environmental impact, sensitive information, misinformation etc.)"}, {"number": 1, "title": "Pace and challenge", "created_at": "2026-11-24T21:15:00Z", "body": "Public display name: Staff contributor\n\nWhat do you think is the best top tip for teachers to ensure an appropriate pace is established early on in a lesson?"}];
  function renderDiscussions(approved){
    const fragment=document.createDocumentFragment();
    for(const item of approved){
     const article=document.createElement('article');article.style.cssText='border:1px solid var(--line,#ddd);border-radius:14px;padding:20px;margin:18px 0;background:var(--card,#fff)';
     const title=document.createElement('h3');title.textContent='Discussion '+item.number+' · '+item.title;
     const date=document.createElement('p');date.className='small';const parsed=new Date(item.created_at);date.textContent='Published '+(Number.isNaN(parsed.getTime())?'':parsed.toLocaleDateString('en-GB'));
     const body=document.createElement('p');body.style.cssText='white-space:pre-wrap;overflow-wrap:anywhere';body.textContent=item.body||'';
     const reply=document.createElement('a');reply.href='https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=oyzTzM4Wj0KVQTctawUZKVLnjtvOIV5FoiT5ZNCp0HNUQ1g1UTZFUlg5MkxTSFBRU1g3UjNFQVJQSi4u&r1fdd9ef7421d44a99083fcd818d67284='+encodeURIComponent('Discussion '+item.number+' · '+item.title);reply.target='_blank';reply.rel='noopener noreferrer';reply.className='button';reply.textContent='Respond to discussion '+item.number;
     article.append(title,date,body,reply);fragment.append(article);
    }
    container.replaceChildren(fragment);status.textContent=approved.length?approved.length+' published contribution'+(approved.length===1?'':'s')+'. Responses are reviewed before publication.':'No contributions have been published yet. Approved contributions are added during a separate website update. Pending and rejected submissions are not displayed.';
  }
  renderDiscussions(publishedSnapshot);
  async function loadDiscussions(){
   refresh.disabled=true;status.textContent='Showing published contributions. Checking for updates…';
   try{
    const all=[];let next='https://api.github.com/repos/ghs-learning/clpl/issues?labels=clpl-approved&state=open&per_page=100&sort=created&direction=desc';
    for(let i=0;next&&i<10;i++){
     const response=await fetch(next,{headers:{Accept:'application/vnd.github+json'},cache:'no-store',credentials:'omit',signal:AbortSignal.timeout(8000)});
     if(!response.ok)throw Error('Feed unavailable');
     const data=await response.json();if(!Array.isArray(data))throw Error('Invalid feed');all.push(...data);
     const link=response.headers.get('Link')||'';const match=link.match(/<([^>]+)>; rel="next"/);next=match&&match[1].startsWith('https://api.github.com/repos/ghs-learning/clpl/issues?')?match[1]:null;
    }
    const approved=all.filter(item=>!item.pull_request&&item.user?.login==='michaelmcc19671888-dev'&&item.labels?.some(label=>label.name==='clpl-approved'));
    renderDiscussions(approved);
   }catch(error){status.textContent='Showing the '+container.querySelectorAll('article').length+' saved published contributions. Live updates are unavailable; you can still read and respond below.';}
   finally{refresh.disabled=false;}
  }
  refresh.addEventListener('click',loadDiscussions);loadDiscussions();
 }
})();

(()=>{
 const section=document.querySelector('[data-page="nibbles"] .term-block.current');
 if(!section)return;
 const sessions=[
  {match:'Probationers and NQTs only',title:'Interview Preparation for Probationers',presenter:'Gordon Reid',blurb:'Thinking about your first teaching interview? Pick up a few practical pointers on preparing examples, sharing your strengths and approaching the conversation with confidence.'},
  {match:'Promoted Post',title:'Interview Preparation for Promoted Posts',presenter:'Scott McHendry',blurb:'Considering your next career step? Explore some useful starting points for presenting your experience, talking about your impact and preparing for a promoted-post interview.'},
  {match:'Creating a Subject Hub for Learners',title:'Creating and Editing a Subject Hub',presenter:'Michael McCarron',blurb:'Curious about creating a hub for your subject? See how a few simple steps can bring learning resources together, and discover how easy it can be to make changes as your hub grows.'},
  {match:'Using AI to Save Time and Improve Teaching Resources',title:'Using AI to Save Time and Improve Teaching Resources',presenter:'Andrew McCondichie',blurb:'Explore a few practical ways AI could ease everyday preparation and help develop teaching resources. Leave with ideas to try, with your professional judgement guiding the final result.'},
  {match:'Checking for Understanding: Simple Strategies That Work',title:'Checking for Understanding: Simple Strategies That Work',presenter:'TBC',blurb:'How do we know what pupils have understood? Explore a few quick, practical ways to check learning, spot uncertainty and decide what to do next.'},
  {match:'Organising an International Trip or Overnight Excursion',title:'Organising an International Trip or Overnight Excursion',presenter:'Charlotte Berry and Michael Shaw',blurb:'Thinking about taking learning beyond the classroom? Hear a few useful pointers on getting started with an international trip or overnight excursion, and the planning that helps turn an idea into a memorable experience.'}
 ];
 for(const card of section.querySelectorAll('.nibble-card')){
  const session=sessions.find(item=>card.textContent.includes(item.match));
  if(session){
   card.querySelector('h3').textContent=session.title;
   card.querySelector('.card-body > p:not(.presenter-line):not(.session-meta)').textContent=session.blurb;
   card.querySelector('.presenter-line b').textContent='Delivered by: '+session.presenter;
  }
  const meta=card.querySelector('.session-meta');if(meta)meta.textContent='Date: TBC • 12.45–1.00 pm • 15 minutes • Venue: TBC';
 }
 const note=section.querySelector('.term-sequence');if(note)note.innerHTML='<b>Make time for a Nibble:</b> all sessions run from 12.45 to 1.00 pm. Dates and venues will be confirmed. Each 15-minute session offers a short introduction and a few practical ideas to take away.';
 const intro=section.querySelector('.term-intro > p');if(intro)intro.textContent='Career development, digital practice and practical ideas from colleagues — short sessions to spark your thinking. All sessions run from 12.45 to 1.00 pm; dates to be confirmed.';
})();

(()=>{
 const calendar=document.getElementById('professionalCalendar');if(!calendar)return;
 const additions=[
  ['2026-09-07','PDT 1 • School focus','Rights Respecting School','School-focused professional development: Rights Respecting School.'],
  ['2026-11-23','PDT 3 • School focus','School-focused PDT','Whole-school professional development.'],
  ['2027-02-08','PDT 6 • School focus','School-focused PDT','Whole-school professional development.'],
  ['2027-05-17','PDT 9 • School focus','School-focused PDT','Whole-school professional development.']
 ];
 for(const [date,tag,title,description] of additions){
  const event=document.createElement('div');event.className='event pl-event school-pdt-event';event.dataset.date=date;
  const time=document.createElement('time');time.dateTime=date;
  const body=document.createElement('div');const badge=document.createElement('span');badge.className='tag';badge.textContent=tag;
  const heading=document.createElement('h3');heading.textContent=title;const detail=document.createElement('p');detail.textContent=description;
  body.append(badge,heading,detail);event.append(time,body);calendar.append(event);
 }
 const numbers={'2026-10-26':2,'2026-12-07':4,'2027-01-11':5,'2027-03-01':7,'2027-04-26':8};
 for(const event of calendar.querySelectorAll('.pl-event')){
  const badge=event.querySelector('.tag');const n=numbers[event.dataset.date];
  if(n&&badge&&!event.classList.contains('inset-event'))badge.textContent='PDT '+n+' • OLJ focus';
  const time=event.querySelector('time');if(time){const date=new Date(event.dataset.date+'T00:00:00');time.textContent=date.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short',year:'numeric'});time.style.minWidth='120px';}
 }
 const events=[...calendar.querySelectorAll('.pl-event')].sort((a,b)=>a.dataset.date.localeCompare(b.dataset.date));events.forEach(event=>calendar.append(event));
 const page=document.querySelector('[data-page="calendar"]');
 const note=document.createElement('p');note.className='small';note.textContent='All nine PDTs and five INSET days checked against the GHS year planner for 2026–27. PDTs are labelled by school or OLJ focus. The existing OLJ celebration remains listed separately on 6 May.';
 calendar.before(note);
 const now=new Date();now.setHours(0,0,0,0);
 for(const event of events){event.classList.remove('past','next-event');if(new Date(event.dataset.date+'T00:00:00')<now)event.classList.add('past');}
 const next=events.find(event=>new Date(event.dataset.date+'T00:00:00')>=now);
 if(next){
  next.classList.add('next-event');const date=new Date(next.dataset.date+'T00:00:00');const days=Math.round((date-now)/86400000);
  const title=next.querySelector('h3').textContent;const tag=next.querySelector('.tag').textContent;const human=date.toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long'});
  const message=days===0?'Today: '+title+' • '+tag:days===1?'Tomorrow: '+title+' • '+tag:title+' is in '+days+' days • '+human;
  for(const id of ['plAlert','homePLAlert']){const alert=document.getElementById(id);if(!alert)continue;alert.replaceChildren();const lead=document.createElement('span');lead.className='alert-title';lead.textContent=days<=7?'Professional learning reminder':'Next professional learning';alert.append(lead,document.createTextNode(message));alert.classList.remove('imminent','upcoming');alert.classList.add(days<=7?'imminent':'upcoming');}
 }
})();

/* School-session editions: retain four terms together; update currentTerm as each edition launches. */
(()=>{
'use strict';
const sessions=[{id:'2026-27',label:'2026–27',status:'current',currentTerm:2}];
window.GHS_CLPL_SESSIONS=sessions;
const session=sessions[0], home=document.querySelector('[data-page="home"]'), archive=document.querySelector('[data-page="archive"]'), current=document.querySelector('[data-page="current"]');
if(!home||!archive)return;
const style=document.createElement('style');style.textContent=`
header .status{border-color:#187246;background:#e8f5ed;color:#14532d}.edition-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;margin:20px 0}.edition-card{background:#fff;border:1px solid #c8cfd0;border-top:5px solid #7b858b;padding:22px;border-radius:13px;display:flex;flex-direction:column;gap:10px}.edition-card h3{margin:0;font-size:25px}.edition-card p{margin:0}.edition-card .button{margin-top:auto;align-self:flex-start}.edition-live{background:#edf8f0;border-color:#187246;border-top-color:#187246}.edition-live .pill,.edition-live .button,.term-live-label{background:#187246!important;color:white!important}.term-live-label{display:inline-block;padding:7px 12px;border-radius:22px;font-weight:800;font-size:14px}.edition-note{border-left:5px solid #187246;background:#edf8f0;padding:18px 22px;border-radius:9px;margin:20px 0}.term-block.current{border-top-color:#187246}.edition-archive details{border:1px solid #c8cfd0;border-radius:10px;margin:14px 0;padding:18px}.edition-archive summary{cursor:pointer;font-weight:800;font-size:21px}.edition-archive details[data-edition-status="live"]{border:2px solid #187246;background:#edf8f0}.edition-archive details[data-edition-status="live"] summary{color:#14532d}.archive-chapters{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:18px 0}.archive-chapters a{display:block;border:1px solid #d5dbd7;border-radius:8px;padding:15px;background:white;color:#16232e;text-decoration:underline}.edition-archive [tabindex="-1"]:focus{outline:3px solid #187246;outline-offset:4px}@media(max-width:900px){.edition-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.edition-grid,.archive-chapters{grid-template-columns:1fr}}`;
document.head.append(style);
const header=document.querySelector('header .status');if(header)header.innerHTML='<b>CLPL HUB • '+session.label+'</b><br>Term 2 - live with ongoing updates';
const liveNote='<span class="term-live-label">Term 2 · LIVE</span><h2>Term 2 - live with ongoing updates</h2><p>Explore this term’s professional learning now. New contributions, resources and confirmed session dates will be added throughout the term. Term 1 remains available to revisit.</p>';
const hero=home.querySelector('.hero');if(hero){const note=document.createElement('section');note.className='edition-note';note.innerHTML=liveNote;hero.after(note)}
const oldEditions=[...home.querySelectorAll('.twocol')].find(el=>el.textContent.includes('Term 1 • archived and still useful'));
const overview=document.createElement('section');overview.id='session-editions';overview.innerHTML='<span class="eyebrow">Session '+session.label+'</span><h2>Four terms. One continuing learning journey.</h2><p>All four terms stay visible throughout the session. Green identifies the live edition; completed terms remain available in the archive.</p><div class="edition-grid">'+[1,2,3,4].map(term=>{
const live=term===session.currentTerm, past=term<session.currentTerm, label=live?'Live · ongoing updates':past?'Archived · available now':'Coming later this session';
return '<article class="edition-card '+(live?'edition-live':'')+'"><span class="pill">'+label+'</span><h3>Term '+term+'</h3><p>'+session.label+'</p><p>'+(live?'Open the current professional learning and return for updates.':past?'Revisit previous learning, resources and staff-led sessions.':'This edition will be populated as the session progresses.')+'</p><a class="button '+(live?'':'secondary')+'" href="'+(live?'#current':'#archive')+'" '+(live?'':'data-session-term="'+term+'"')+'>'+(live?'Explore live Term 2':past?'Open Term 1 archive':'View Term '+term+' status')+'</a></article>'}).join('')+'</div><p class="small">At the end of '+session.label+', all four terms will be retained together under that session in the archive. Each new session will have its own four-term collection.</p>';
if(oldEditions)oldEditions.replaceWith(overview);else home.append(overview);
home.querySelectorAll('.eyebrow').forEach(el=>{if(el.textContent.trim()==='Term 2 • Fresh content')el.textContent='Term 2 • LIVE • Ongoing updates'});
if(current){const intro=current.querySelector('.hero');if(intro){const p=intro.querySelector('p');if(p)p.textContent='Term 2 is live, with ongoing updates. Explore the learning areas below; Term 1 remains available in the session archive.';const badge=intro.querySelector('.eyebrow');if(badge)badge.textContent='LIVE · Term 2 · Ongoing updates'}}
// Link directly to retained Term 1 material, preserving its original resource and image controls.
const chapters=[];
document.querySelectorAll('.page').forEach(page=>{
if(['home','archive','current'].includes(page.dataset.page))return;
const children=[...page.children];let target=children.find(el=>/Term 1\s*(?:archive|•\s*Archive|•\s*2026)/i.test(el.textContent)&&!el.classList.contains('hero'));
if(!target&&page.dataset.page==='journey')target=page.querySelector('.term1-divider');
if(!target)return;
target.id=target.id||'term1-'+page.dataset.page;target.setAttribute('tabindex','-1');
const chapterNames={headteacher:'Headteacher Insight',digital:'Digital Pedagogy',nibbles:'Knowledgeable Nibbles',teacher:'Teacher’s Corner',inclusive:'Inclusive Practice',journey:'Our Learning Journey',wellbeing:'Staff Wellbeing',lgbt:'LGBT+ Inclusion',reading:'Professional Reading'};const label=chapterNames[page.dataset.page]||page.querySelector('h2')?.textContent.trim()||page.dataset.page;
chapters.push({page:page.dataset.page,target:target.id,label});
});
const existingNotice=[...archive.querySelectorAll('.notice')].find(el=>el.textContent.includes('Archive model:'));if(existingNotice)existingNotice.remove();
const oldHow=[...archive.querySelectorAll('h2,h3')].find(el=>el.textContent==='How the archive will work');if(oldHow){const parent=oldHow.parentElement;if(parent!==archive)parent.remove();else{let next=oldHow.nextElementSibling;if(next?.tagName==='UL')next.remove();oldHow.remove()}}
const records=document.createElement('section');records.className='panel edition-archive';records.id='session-archive';records.innerHTML='<span class="eyebrow">Browse by school session</span><h2>Session '+session.label+' · Terms 1–4</h2><p>Term 1 is archived and available now. Term 2 is live; Terms 3 and 4 are reserved for later in the session. When the session ends, all four term editions will stay together here.</p>'+[1,2,3,4].map(term=>'<details id="archive-'+session.id+'-term-'+term+'" data-edition-status="'+(term===2?'live':term===1?'archived':'planned')+'" '+(term===1?'open':'')+'><summary>Term '+term+' · '+(term===1?'Archived':term===2?'LIVE · ongoing updates':'Coming later')+'</summary>'+(term===1?'<p>Original Term 1 learning is retained in its subject sections. Choose a chapter to jump to its archived material.</p><div class="archive-chapters">'+chapters.map(c=>'<a href="#'+c.page+'" data-archive-target="'+c.target+'">'+c.label+' · Term 1 archive →</a>').join('')+'</div>':term===2?'<p>The current edition is available now and continues to grow throughout Term 2.</p><a class="button" href="#current">Open live Term 2</a>':'<p>Term '+term+' has not launched yet. Its resources will appear here when that edition is added.</p>')+'</details>').join('');
const firstGrid=archive.querySelector('.grid');if(firstGrid)firstGrid.before(records);else archive.prepend(records);
function scrollToTarget(id){requestAnimationFrame(()=>requestAnimationFrame(()=>{const el=document.getElementById(id);if(el){if(el.tagName==='DETAILS')el.open=true;el.scrollIntoView({block:'start'});el.focus({preventScroll:true})}}))}
document.addEventListener('click',event=>{const link=event.target.closest('a[data-session-term],a[data-archive-target]');if(!link)return;if(link.dataset.sessionTerm){const detail=document.getElementById('archive-'+session.id+'-term-'+link.dataset.sessionTerm);if(detail){detail.open=true;detail.tabIndex=-1;scrollToTarget(detail.id)}}else scrollToTarget(link.dataset.archiveTarget)});
})();

(()=>{
 const bulletins=document.getElementById('previous-bulletins');if(!bulletins)return;
 const dropdown=document.createElement('details');dropdown.className='panel pre-session-archive';dropdown.id='pre-session-2026-27';
 const heading=document.createElement('summary');heading.textContent='Pre Session 2026-27';heading.style.cssText='cursor:pointer;font-size:24px;font-weight:800;padding:6px 0';
 bulletins.before(dropdown);dropdown.append(heading,bulletins);
 bulletins.classList.remove('panel');bulletins.style.marginTop='18px';
 const label=bulletins.querySelector('.eyebrow');if(label)label.textContent='Earlier sessions';
})();

(()=>{
 const picture=document.querySelector('img[alt="Staff Conversations about Learning graphic"]');
 if(!picture)return;
 const svg=atob(picture.src.split(',')[1]).replace('<text x="100" y="390" font-size="66" font-weight="800">Staff Conversations about Learning</text>','<text x="100" y="370" font-size="62" font-weight="800">Staff Conversations</text><text x="100" y="442" font-size="62" font-weight="800">about Learning</text>').replace('y="455" font-size="31"','y="505" font-size="31"').replace('y="510" width="250"','y="560" width="250"');
 picture.src='data:image/svg+xml;base64,'+btoa(svg);
 picture.style.cssText='display:block;width:100%;height:auto;max-height:none;object-fit:contain;border-radius:16px';
})();
