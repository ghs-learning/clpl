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
  feed.innerHTML='<span class="eyebrow">Read · Reflect · Respond</span><h2>Staff discussion board</h2><p>Approved contributions will appear here for everyone to read. To respond, submit a contribution using the form above and mention the discussion number.</p><button type="button" class="button" id="refresh-discussions">Refresh discussions</button><p id="discussion-feed-status" role="status" aria-live="polite">Loading published contributions…</p><div id="discussion-feed"></div>';
  box.after(feed);
  const container=feed.querySelector('#discussion-feed');const status=feed.querySelector('#discussion-feed-status');const refresh=feed.querySelector('#refresh-discussions');
  async function loadDiscussions(){
   refresh.disabled=true;status.textContent='Loading published contributions…';
   try{
    const all=[];let next='https://api.github.com/repos/ghs-learning/clpl/issues?labels=clpl-approved&state=open&per_page=100&sort=created&direction=desc';
    for(let i=0;next&&i<10;i++){
     const response=await fetch(next,{headers:{Accept:'application/vnd.github+json'},cache:'no-store',credentials:'omit'});
     if(!response.ok)throw Error('Feed unavailable');
     const data=await response.json();if(!Array.isArray(data))throw Error('Invalid feed');all.push(...data);
     const link=response.headers.get('Link')||'';const match=link.match(/<([^>]+)>; rel="next"/);next=match&&match[1].startsWith('https://api.github.com/repos/ghs-learning/clpl/issues?')?match[1]:null;
    }
    const approved=all.filter(item=>!item.pull_request&&item.user?.login==='michaelmcc19671888-dev'&&item.labels?.some(label=>label.name==='clpl-approved'));
    const fragment=document.createDocumentFragment();
    for(const item of approved){
     const article=document.createElement('article');article.style.cssText='border:1px solid var(--line,#ddd);border-radius:14px;padding:20px;margin:18px 0;background:var(--card,#fff)';
     const title=document.createElement('h3');title.textContent='Discussion '+item.number+' · '+item.title;
     const date=document.createElement('p');date.className='small';const parsed=new Date(item.created_at);date.textContent='Published '+(Number.isNaN(parsed.getTime())?'':parsed.toLocaleDateString('en-GB'));
     const body=document.createElement('p');body.style.cssText='white-space:pre-wrap;overflow-wrap:anywhere';body.textContent=item.body||'';
     const reply=document.createElement('a');reply.href=formUrl;reply.target='_blank';reply.rel='noopener noreferrer';reply.className='button';reply.textContent='Respond to discussion '+item.number;
     article.append(title,date,body,reply);fragment.append(article);
    }
    container.replaceChildren(fragment);status.textContent=approved.length?approved.length+' published contribution'+(approved.length===1?'':'s')+'. Responses are reviewed before publication.':'No contributions have been published yet. Approved contributions are added during a separate website update. Pending and rejected submissions are not displayed.';
   }catch(error){status.textContent='The discussion board could not be refreshed. Please try again later. You can still submit a contribution using the form above.';}
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
