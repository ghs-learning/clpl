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
  const box=document.createElement('section');box.className='panel';box.id='suggest-discussion';
  box.innerHTML='<span class="eyebrow">Choose · Question · Explore</span><h2>What should we discuss?</h2><p>Put forward a topic, ask a question or share an idea that colleagues could explore together.</p><form id="discussion-proposal"><p><label for="discussion-topic"><strong>Choose a topic</strong></label><br><select id="discussion-topic" style="max-width:100%;padding:10px">'+topics.map(t=>'<option>'+t+'</option>').join('')+'</select></p><p><label for="discussion-question"><strong>Your question or discussion idea</strong></label><br><textarea id="discussion-question" required maxlength="2500" rows="5" style="width:100%;font:inherit;padding:12px" placeholder="For example: Which questioning routines help quieter pupils share their thinking?"></textarea></p><p><label for="discussion-name">Your display name (optional)</label><br><input id="discussion-name" maxlength="80" style="max-width:100%;padding:10px"></p><p class="small">Keep contributions professional. Please do not include pupil names or confidential information. Only contributions approved by Mr McCarron should be published.</p><button type="submit" class="button">Prepare an email proposal</button><p id="proposal-status" role="status"></p></form><div class="note"><strong>Interim email route:</strong> this opens a draft in your email app addressed to Mr McCarron. You must send the email yourself. It does not post a comment or save a shared discussion. The Microsoft approval queue, automatic notification emails and public discussion feed are not connected yet.</div>';
  page.querySelector('h2')?.after(box);
  document.getElementById('discussion-proposal').addEventListener('submit',e=>{
   e.preventDefault();const topic=document.getElementById('discussion-topic').value;const question=document.getElementById('discussion-question').value.trim();if(!question)return;
   const name=document.getElementById('discussion-name').value.trim();
   const body='CLPL discussion proposal\n\nTopic: '+topic+'\nDisplay name: '+(name||'Not supplied')+'\n\nQuestion or idea:\n'+question+'\n\nPlease review this proposal before any public publication.';
   location.href='mailto:mmccarron@govanhigh.glasgow.sch.uk?subject='+encodeURIComponent('CLPL discussion proposal: '+topic)+'&body='+encodeURIComponent(body);
   document.getElementById('proposal-status').textContent='An email draft has been requested. Review it and select Send in your email app. Nothing has been posted to the website.';
  });
 }
})();
