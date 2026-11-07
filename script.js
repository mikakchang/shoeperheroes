// Mobile menu
const burger=document.querySelector('.burger'),menu=document.getElementById('menu');
burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
menu.addEventListener('click',e=>{if(e.target.tagName==='A'){menu.classList.remove('open');burger.setAttribute('aria-expanded',false)}});
document.getElementById('yr').textContent=new Date().getFullYear();
// Hide broken images so the labelled placeholder tile shows instead
document.querySelectorAll('.ph img').forEach(i=>{const h=()=>i.style.display='none';i.addEventListener('error',h);if(i.complete&&!i.naturalWidth)h()});
// Prefill preorder message
document.querySelector('[data-product]').addEventListener('click',e=>{
  const t=document.querySelector('[data-form=contact] textarea');
  if(!t.value)t.value='I would like to preorder: '+e.currentTarget.dataset.product+'\nSize (S/M/L): \nColor: ';
});
// Forms (Formspree-compatible: replace the form IDs in index.html)
document.querySelectorAll('form[data-form]').forEach(f=>f.addEventListener('submit',async e=>{
  e.preventDefault();const m=f.querySelector('.msg');
  if(f.action.includes('YOUR_')){m.textContent='Form not connected yet (see README).';return}
  try{const r=await fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});
    if(!r.ok)throw 0;f.reset();m.textContent='Thanks for submitting!'}
  catch{m.textContent='Something went wrong. Please try again.'}
}));
