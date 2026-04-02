let x=document.getElementById("demo");
x.innerHTML=" ";
let y=document.getElementsByClassName("demo");
y[0].innerHTML=" ";
let z=document.getElementsByTagName("p");
z[0].innerHTML=" ";
//query selector
let a=document.querySelector("#demo");
a.innerHTML=" ";
let b=document.querySelector(".demo");
b.innerHTML=" ";
let c=document.querySelector("p");
c.innerHTML=" ";
//query selector can select only one element but get element by can select multiple element and query selector all can select multiple element
let d=document.querySelectorAll(".demo");
d[0].innerHTML=" ";
//get attribute
let e=document.getElementById("demo").getAttribute("id");
let f=document.getElementById("demo").setAttribute("class","democlass");
//create an element
let g=document.createElement("h2");
let par=document.getElementsByTagName("body");
par[0].append(g);
//camelCase
//mouse event
//<button onclick="onClick()">onClick</button>
//<button onmouseover="onMouseover">onMouseover</button>
//<button onmousedown="onMousedown()">onMousedown</button>
//onmouseup,onmousemove,onmouseout,onmouseenter,onmouseleave,onkeyup,onkeydown,onfocus,onblub,onsubmit,onchange
//window event onload,onunload,onresize.