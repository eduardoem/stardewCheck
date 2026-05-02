const FISH = [
{ id:"sunfish", es:"Pez sol", en:"Sunfish" },
{ id:"catfish", es:"Pez gato", en:"Catfish" },
{ id:"shad", es:"Sábalo", en:"Shad" },
{ id:"sardine", es:"Sardina", en:"Sardine" },
{ id:"eel", es:"Anguila", en:"Eel" },
{ id:"tuna", es:"Atún", en:"Tuna" },
{ id:"angler", es:"Rape", en:"Angler" }
];

const app = {
lang: localStorage.getItem("lang") || "es",
progress: JSON.parse(localStorage.getItem("progress")||"{}"),

init(){
this.render();
},

render(){
const root = document.getElementById("app");

root.innerHTML = FISH.map(f=>`
<div class="row-fish ${this.progress[f.id]?'done':''}"
data-id="${f.id}"
data-search="${f.es} ${f.en}">

<input type="checkbox"
${this.progress[f.id]?'checked':''}
onchange="app.toggle('${f.id}',this.checked)">

<img src="https://stardewvalleywiki.com/mediawiki/images/${f.id}.png"
class="icon">

<span>${this.lang==="es"?f.es:f.en}</span>

</div>
`).join('');
},

toggle(id,val){
this.progress[id]=val;
localStorage.setItem("progress",JSON.stringify(this.progress));

const rows = document.querySelectorAll(`[data-id="${id}"]`);
rows.forEach(r=>{
r.classList.toggle("done",val);
r.querySelector("input").checked = val;
});
},

toggleLang(){
this.lang = this.lang==="es"?"en":"es";
localStorage.setItem("lang",this.lang);
this.render();
},

filter(){
const q = document.getElementById("search").value.toLowerCase();

document.querySelectorAll(".row-fish").forEach(r=>{
r.style.display = r.dataset.search.toLowerCase().includes(q)
? "flex" : "none";
});
}
};

function toggleTheme(){
const b=document.body;
b.setAttribute("data-bs-theme",
b.getAttribute("data-bs-theme")==="dark"?"light":"dark");
}

document.addEventListener("DOMContentLoaded",()=>app.init());
