let a=new Date()
let h=a.getHours()
let m=a.getMinutes()
let s=a.getSeconds()
let d=a.getDate()
console.log(h,m,s,d);

let div=document.querySelector(".clock");
div.childNodes="c1";
div.style.color="black";
let hours=document.querySelector("#h1");
let min=document.querySelector("#m1");
let sec=document.querySelector("#s1");
let date=document.querySelector("#d1");
hours.innerText=h;
min.innerText=m;
sec.innerText=s;
date.innerText=d;

