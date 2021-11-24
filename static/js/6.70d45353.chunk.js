(this["webpackJsonpthe-bedtime-project"]=this["webpackJsonpthe-bedtime-project"]||[]).push([[6],{135:function(e,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return d}));var a=t(9),c=t(1),r=(t(92),t(17)),i=t(16),l=t(81),n=t(82),o=t(76),j=t(0);function d(){var e=[{title:"Mrs. Blue Sky",link:"/read/bedtime-stories/mrs-blue-sky",field_author:"C. A. Moonbloom",backgroundColor:"#133061"},{title:"The Lady and the Frog",link:"read/bedtime-stories/the-lady-and-the-frog",field_author:"Daniel Stigmon",backgroundColor:"#dab656"}],s=Object(c.useState)([]),t=Object(a.a)(s,2),d=t[0],b=t[1],O=Object(c.useState)([]),m=Object(a.a)(O,2),h=m[0],u=m[1];return Object(c.useEffect)((function(){fetch("https://drupal.bedtimeproject.dev/rest/views/stories/read").then((function(e){return e.json()})).then((function(e){return b(e)})),fetch("https://drupal.bedtimeproject.dev/rest/views/tales/read").then((function(e){return e.json()})).then((function(e){return u(e)})),e.length>3&&console.error("Too Many Bedtime Stories on Shelf 1")}),[]),Object(j.jsxs)(r.a,{children:[Object(j.jsx)(i.a,{title:"Read"}),Object(j.jsx)(l.a,{pageTitle:"Read",scrollable:!0,drawerHref:"/read/quips",drawerLabel:"Quips",books1:e.map((function(e,s){return Object(j.jsx)(n.a,{link:e.link,story:e,backgroundColor:e.backgroundColor},s)})),shelf1Link:"/read/bedtime-stories",shelf1Label:"Bedtime Stories",books2:d.map((function(e,s){var t=Object(o.a)(e.title);return Object(j.jsx)(n.a,{link:"/read/stories/".concat(t),story:e},s)})),shelf2Link:"/read/stories",shelf2Label:"Stories",books3:h.map((function(e,s){var t=Object(o.a)(e.title);return Object(j.jsx)(n.a,{link:"/read/tales/".concat(t),story:e},s)})),shelf3Link:"/read/tales",shelf3Label:"Tales"})]})}},70:function(e,s,t){"use strict";function a(e){if("string"===typeof e){var s=e;return"#"===s.slice(0,1)&&(s=s.slice(1)),3===s.length&&(s=s.split("").map((function(e){return e+e})).join("")),(299*parseInt(s.substr(0,2),16)+587*parseInt(s.substr(2,2),16)+114*parseInt(s.substr(4,2),16))/1e3>=128?"black":"white"}}t.d(s,"a",(function(){return a}))},71:function(e,s,t){},72:function(e,s,t){},73:function(e,s,t){},74:function(e,s,t){},75:function(e,s,t){},76:function(e,s,t){"use strict";function a(e){return e.replaceAll(".","").replaceAll("-","").replaceAll("(","").replaceAll(")","").replaceAll("  "," ").replaceAll(" ","-").toLowerCase()}t.d(s,"a",(function(){return a}))},81:function(e,s,t){"use strict";t.d(s,"a",(function(){return O}));var a=t(9),c=t(1),r=(t(71),t(72),t(21)),i=t(20),l=t(0);function n(e){var s=e.right,t=e.weather,a=void 0===t?"rain":t;return Object(l.jsx)("div",{className:"RainyWindow-Container ".concat(s?"Right":""),children:Object(l.jsxs)("div",{className:"frame",children:[Object(l.jsxs)("div",{className:"outside",children:[Object(l.jsx)(r.a,{minimal:!0,right:s}),"rain"==a&&Object(l.jsxs)("div",{className:"rain",children:[Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"}),Object(l.jsx)("div",{className:"drop"})]}),"snow"==a&&Object(l.jsx)(i.a,{})]}),Object(l.jsx)("div",{className:"window top"}),Object(l.jsx)("div",{className:"window bottom"}),Object(l.jsx)("div",{className:"sill",children:s&&Object(l.jsxs)("div",{className:"items",children:[Object(l.jsxs)("div",{className:"planter",children:[Object(l.jsx)("div",{className:"leaf"}),Object(l.jsx)("div",{className:"leaf"}),Object(l.jsx)("div",{className:"leaf"})]}),Object(l.jsxs)("div",{className:"books",children:[Object(l.jsx)("div",{className:"book"}),Object(l.jsx)("div",{className:"book"}),Object(l.jsx)("div",{className:"book"})]})]})})]})})}var o=t(6);t(73);function j(e){var s=e.link,t=e.title;return Object(l.jsx)("div",{className:"ShelfLabel-Container",children:Object(l.jsx)(o.b,{to:s,children:t})})}t(74);function d(e){var s=e.label,t=e.href;return Object(l.jsxs)("div",{className:"Drawers-wrap",children:[Object(l.jsx)("h2",{children:s}),Object(l.jsxs)("ul",{className:"drawers",children:[Object(l.jsx)(o.b,{className:"drawer",to:t,"aria-label":"Navigates to "+s,children:Object(l.jsx)("span",{className:"handle"})}),Object(l.jsx)(o.b,{className:"drawer",to:t,"aria-label":"Navigates to "+s,children:Object(l.jsx)("span",{className:"handle"})}),Object(l.jsx)(o.b,{className:"drawer third",to:t,"aria-label":"Navigates to "+s,children:Object(l.jsx)("span",{className:"handle"})})]})]})}var b=t(19);function O(e){var s=e.books1,t=e.books2,r=e.books3,i=e.pageTitle,o=e.drawerHref,O=e.drawerLabel,m=e.shelf1Link,h=e.shelf1Label,u=e.shelf2Link,x=e.shelf2Label,v=e.shelf3Link,f=e.shelf3Label,p=Object(c.useState)("rain"),N=Object(a.a)(p,2),k=N[0],w=N[1];return Object(c.useEffect)((function(){w(Object(b.a)())}),[]),Object(l.jsxs)("div",{className:"Bookshelf-Container",children:[Object(l.jsx)("div",{className:"RainyWindowLeft RainyWindow",children:Object(l.jsx)(n,{weather:k})}),Object(l.jsxs)("div",{className:"BooksContainer",children:[i&&Object(l.jsx)("h1",{className:"Bookshelf-Page-Title",children:i.toUpperCase()}),h&&Object(l.jsx)(j,{title:h,link:m}),Object(l.jsxs)("div",{className:"Row",children:[s,Object(l.jsx)("div",{className:"Shelf"})]}),x&&Object(l.jsx)(j,{title:x,link:u}),Object(l.jsxs)("div",{className:"Row",children:[t,Object(l.jsx)("div",{className:"Shelf"})]}),f&&Object(l.jsx)(j,{title:f,link:v}),Object(l.jsxs)("div",{className:"Row",children:[r,Object(l.jsx)("div",{className:"Shelf"})]}),o&&Object(l.jsx)(d,{href:o,label:O})]}),Object(l.jsx)("div",{className:"RainyWindowRight RainyWindow",children:Object(l.jsx)(n,{right:!0,weather:k})})]})}},82:function(e,s,t){"use strict";t.d(s,"a",(function(){return l}));t(1),t(75);var a=t(6);var c=t(70),r=t(0),i=["green","maroon","purple"];function l(e){var s,t=e.link,l=e.story,n=e.backgroundColor,o=n||(s=i)[Math.floor(Math.random()*s.length)];return Object(r.jsxs)(a.b,{className:"BookLink-Container",style:{backgroundColor:o},to:t,children:[Object(r.jsx)("div",{className:"TitleContainer",children:Object(r.jsx)("strong",{style:{color:Object(c.a)(o)},children:l.title})}),Object(r.jsx)("div",{style:{color:Object(c.a)(o)},children:l.field_author})]})}},92:function(e,s,t){}}]);
//# sourceMappingURL=6.70d45353.chunk.js.map