import{j as a,L as c,O as p,F as f,B as v,R as g,a as i,b,c as N}from"./vendor.dcc926b1.js";const x=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function u(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(r){if(r.ep)return;r.ep=!0;const t=u(r);fetch(r.href,t)}};x();var y="/assets/Logo.5b710a25.svg";const e=a.exports.jsx,n=a.exports.jsxs,o=a.exports.Fragment;function R(){return n(o,{children:[n("div",{className:"navWrapper",children:[e("img",{src:y}),n("ul",{children:[e("li",{children:e(c,{to:"/",children:"About"})}),e("li",{children:e(c,{to:"/projects",children:"Projects"})}),e("li",{children:e(c,{to:"/resumee",children:"Resumee"})}),e("li",{className:"contactBtn",children:e(c,{to:"/contact",children:"Contact"})})]})]}),e(p,{})]})}function C(){return e("div",{className:"footer",children:"Carl Keinath \xA9 2022"})}function j(){return n(o,{children:[n("div",{className:"header",children:[e("div",{className:"name",children:"Carl Keinath"}),e("div",{className:"title",children:"Student & Web-Developer"})]}),n("div",{className:"meText",children:[e("p",{children:"Hallo,"}),"ich studiere Wirtschaftsinformatik im 8. Semester an der Universit\xE4t Stuttgart. ",e("br",{}),"Besonderes Interesse haben die Themen Web-Development & die Blockchain-Technologie bei mir geweckt.",e("br",{}),e("br",{})]})]})}function A(){return n(o,{children:[e("h1",{children:"Portfolio"}),e("div",{className:"content",children:e("div",{className:"inProgess",children:"In progress..."})})]})}var h="/assets/cv.e290c865.png";function L(){return n(o,{children:[e("h1",{children:"Resumee"}),e("div",{className:"bounding-box",children:e("img",{className:"cv",onClick:()=>{console.log("download"),f.exports.saveAs(h,"Carl_Keinath.png")},src:h})})]})}function O(){return n(o,{children:[e("h1",{children:"Contact"}),n("div",{className:"meText",children:["Carl Keinath",e("br",{}),"Seelilienweg 5, 73275 Ohmden",e("br",{}),e("p",{children:"carl.keinath@gmail.com"})]})]})}function w(){return e(v,{children:n("div",{className:"App",children:[e("div",{className:"main",children:e(g,{children:n(i,{path:"/",element:e(R,{}),children:[e(i,{index:!0,element:e(j,{})}),e(i,{path:"projects",element:e(A,{})}),e(i,{path:"resumee",element:e(L,{})}),e(i,{path:"contact",element:e(O,{})}),e(i,{path:"*",element:n("main",{style:{padding:"1rem"},children:[e("p",{children:"There's nothing here!"}),e("a",{href:"/",children:"Return Home"})]})})]})})}),e(C,{})]})})}b.render(e(N.StrictMode,{children:e(w,{})}),document.getElementById("root"));
