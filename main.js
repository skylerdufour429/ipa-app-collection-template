import apps from '../apps.json';
const box=document.querySelector('#apps');
const search=document.querySelector('#search');
function render(q=''){
 box.innerHTML=apps.filter(a=>a.name.toLowerCase().includes(q.toLowerCase()))
 .map(a=>`<article><h2>${a.name}</h2><p>${a.project}</p></article>`).join('');
}
search.oninput=e=>render(e.target.value);
render();
