let container1, container2, timeout, docelem;

function addSmoke(){
if(docelem.style.getPropertyValue("--playing") == "running"){
spreadSmoke();
}
else{
console.log("paused");
}
timeout = setTimeout(addSmoke, random(180, 200));
}

function spreadSmoke(){
let p = new Point(
random(10, 130), 
random(-110, -10), 
random(20, 130), 
random(1, 100), 
random(-60, 70), "smoke-pre");

let q = new Point(
random(10, 130), 
random(-110, -10), 
random(40, 80), 
random(1, 100), 
random(-60, 70), "smoke-pre");

let r = new Point(
random(30, 90), 
random(-110, -10), 
random(40, 60), 
random(1, 90), 
random(-50, 50), "smoke-rest");

let s = new Point(
random(30, 90), 
random(-110, -10), 
random(20, 40), 
random(1, 90), 
random(-55, 55), "smoke-rest");

container1.appendChild(p.create());
container2.appendChild(q.create());
container3.appendChild(r.create());
container4.appendChild(s.create());
}

function random(min, max){
return int = min + Math.random() * (max - min), Math.round(int);
}

class Point{
constructor(cx, cy, sizemax, delay, shift, cls){
this.x = cx;
this.y = cy;
this.sizeMax = sizemax;
this.class = cls;
this.delay = delay;
this.shift = shift;
this.element;
}

create(){
let elem = document.createElement("div");
elem.className = this.class;
elem.style.setProperty("--x", this.x);
elem.style.setProperty("--y", this.y);
elem.style.setProperty("--d", this.delay);
elem.style.setProperty("--size", this.sizeMax);
elem.style.setProperty("--shift", this.shift);
elem.addEventListener("animationend", function(){
this.parentElement.removeChild(this);
});
this.element = elem;
return elem;
}
}

window.addEventListener("load", () => {
container1 = document.querySelector(".smoke-1-pre"),
container2 = document.querySelector(".smoke-2-pre"),
container3 = document.querySelector(".smoke-1-rest"),
container4 = document.querySelector(".smoke-2-rest"),
docelem = document.documentElement;

if(timeout) clearTimeout(timeout);
docelem.style.setProperty("--playing", "running");
addSmoke();
});

window.addEventListener("focus", () => {
if(docelem) docelem.style.setProperty("--playing", "running");
});

window.addEventListener("blur", () => {
if(docelem) docelem.style.setProperty("--playing", "paused");
});