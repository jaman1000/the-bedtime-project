(this["webpackJsonpthe-bedtime-project"]=this["webpackJsonpthe-bedtime-project"]||[]).push([[13],{119:function(e,t,c){},137:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return i}));var a=c(1),n=(c(119),c(17)),s=c(68),o=c(16),r=c(79),u=c(0);function i(){return Object(a.useEffect)((function(){var e=document.querySelector("#the-game");function t(){for(var e=document.querySelectorAll("#the-game > button"),t=0;t<e.length;t++)e[t].classList.add("out");!function(){for(var e=Math.floor(8*Math.random())+5,t=0;t<e;t++){var c=Math.floor(25*Math.random())+1;a(document.querySelector("#a".concat(c))),n(document.querySelector("#a".concat(c)))}}(),document.querySelector("#js-moves").innerHTML=(0).toString()}function c(e){var c=e.target;"the-game"!==c.id&&(a(c),n(c),function(){var e=document.querySelector("#js-moves"),t=Number(e.innerHTML);e.innerHTML=String(t+1)}(),function(){for(var e=document.querySelectorAll("#the-game > button"),c=0;c<e.length;c++)if(!e[c].classList.contains("out"))return!1;var a=function(){var e=document.querySelector("#js-best"),t=document.querySelector("#js-moves"),c=Number(e.innerHTML),a=Number(t.innerHTML);if(a<c)return e.innerHTML=String(a),a;if(0===c)return e.innerHTML=String(a),a;return null}();null===a?window.alert("You Won!"):window.alert("You Won!\nNew High Score: ".concat(a,"\nCongratulations!"));t()}())}function a(e){e.classList.toggle("out")}function n(e){var t=parseInt(e.id.slice(1),10),c=t-1,n=t+1,s=t-5,o=t+5;switch(t){case 1:a(document.querySelector("#a".concat(n))),a(document.querySelector("#a".concat(o)));break;case 2:case 3:case 4:a(document.querySelector("#a".concat(c))),a(document.querySelector("#a".concat(n))),a(document.querySelector("#a".concat(o)));break;case 5:a(document.querySelector("#a".concat(c))),a(document.querySelector("#a".concat(o)));break;case 6:case 11:case 16:a(document.querySelector("#a".concat(s))),a(document.querySelector("#a".concat(n))),a(document.querySelector("#a".concat(o)));break;case 7:case 8:case 9:case 12:case 13:case 14:case 17:case 18:case 19:a(document.querySelector("#a".concat(s))),a(document.querySelector("#a".concat(n))),a(document.querySelector("#a".concat(c))),a(document.querySelector("#a".concat(o)));break;case 10:case 15:case 20:a(document.querySelector("#a".concat(s))),a(document.querySelector("#a".concat(c))),a(document.querySelector("#a".concat(o)));break;case 21:a(document.querySelector("#a".concat(s))),a(document.querySelector("#a".concat(n)));break;case 22:case 23:case 24:a(document.querySelector("#a".concat(s))),a(document.querySelector("#a".concat(c))),a(document.querySelector("#a".concat(n)));break;case 25:a(document.querySelector("#a".concat(s))),a(document.querySelector("#a".concat(c)))}}document.querySelector("header button").addEventListener("click",t),e.addEventListener("click",c),t()}),[]),Object(u.jsxs)(n.a,{headerDecoration:!1,children:[Object(u.jsx)(r.a,{}),Object(u.jsxs)("div",{className:"LightsOutContainer",children:[Object(u.jsx)(o.a,{title:"Lights Out"}),Object(u.jsxs)("header",{className:"Lights-Out-Header",children:[Object(u.jsx)(s.a,{children:"Lights Out"}),Object(u.jsxs)("p",{children:["There is one objective: ",Object(u.jsx)("i",{children:"turn all the lights out"}),"."]}),Object(u.jsx)("p",{children:"A white square indicates that the light is on, and a dark square indicates that the light is off."}),Object(u.jsx)("button",{type:"button",name:"reset-game",children:"Reset"}),Object(u.jsxs)("div",{id:"stats-box",children:[Object(u.jsxs)("div",{id:"move-counter",children:[Object(u.jsx)("p",{children:"Moves:"}),Object(u.jsx)("p",{id:"js-moves",children:"0"})]}),Object(u.jsxs)("div",{id:"best-moves",children:[Object(u.jsx)("p",{children:"Best:"}),Object(u.jsx)("p",{id:"js-best",children:"0"})]})]})]}),Object(u.jsxs)("div",{id:"the-game",children:[Object(u.jsx)("button",{id:"a1",className:"out"}),Object(u.jsx)("button",{id:"a2",className:"out"}),Object(u.jsx)("button",{id:"a3",className:"out"}),Object(u.jsx)("button",{id:"a4",className:"out"}),Object(u.jsx)("button",{id:"a5",className:"out"}),Object(u.jsx)("button",{id:"a6",className:"out"}),Object(u.jsx)("button",{id:"a7",className:"out"}),Object(u.jsx)("button",{id:"a8",className:"out"}),Object(u.jsx)("button",{id:"a9",className:"out"}),Object(u.jsx)("button",{id:"a10",className:"out"}),Object(u.jsx)("button",{id:"a11",className:"out"}),Object(u.jsx)("button",{id:"a12",className:"out"}),Object(u.jsx)("button",{id:"a13",className:"out"}),Object(u.jsx)("button",{id:"a14",className:"out"}),Object(u.jsx)("button",{id:"a15",className:"out"}),Object(u.jsx)("button",{id:"a16",className:"out"}),Object(u.jsx)("button",{id:"a17",className:"out"}),Object(u.jsx)("button",{id:"a18",className:"out"}),Object(u.jsx)("button",{id:"a19",className:"out"}),Object(u.jsx)("button",{id:"a20",className:"out"}),Object(u.jsx)("button",{id:"a21",className:"out"}),Object(u.jsx)("button",{id:"a22",className:"out"}),Object(u.jsx)("button",{id:"a23",className:"out"}),Object(u.jsx)("button",{id:"a24",className:"out"}),Object(u.jsx)("button",{id:"a25",className:"out"})]})]})]})}},68:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));c(1),c(69);var a=c(0);function n(e){var t=e.children;return Object(a.jsx)("div",{className:"PageTitle-Container",children:Object(a.jsx)("h1",{className:"PageTitle",children:t})})}},69:function(e,t,c){},79:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));c(1),c(80);var a=c(0);function n(e){var t=e.color,c=void 0===t?"#625ace":t;return Object(a.jsx)("div",{className:"Waves",style:{backgroundColor:c},children:Object(a.jsx)("div",{children:Object(a.jsxs)("svg",{className:"waves",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none",shapeRendering:"auto",children:[Object(a.jsx)("defs",{children:Object(a.jsx)("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})}),Object(a.jsxs)("g",{className:"parallax",children:[Object(a.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"rgba(255,255,255,0.7"}),Object(a.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.5)"}),Object(a.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.3)"}),Object(a.jsx)("use",{xlinkHref:"#gentle-wave",x:"48",y:"7",fill:"#fff"})]})]})})})}},80:function(e,t,c){}}]);
//# sourceMappingURL=13.5d180498.chunk.js.map