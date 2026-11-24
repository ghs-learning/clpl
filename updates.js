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
