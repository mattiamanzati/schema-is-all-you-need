import{d as c,o as s,e as n,s as l,f as r,t as a,_ as d}from"./index-CgvNfaMP.js";const u=["innerHTML"],m=["textContent"],f=["textContent"],k=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const o=p;return(e,t)=>e.noteHtml?(s(),n("div",{key:0,class:l(["prose overflow-auto outline-none",o.class]),onClick:t[0]||(t[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,u)):e.note?(s(),n("div",{key:1,class:l(["prose overflow-auto outline-none",o.class]),onClick:t[1]||(t[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,m)],2)):(s(),n("div",{key:2,class:l(["prose overflow-auto outline-none opacity-50 italic",o.class]),onClick:t[2]||(t[2]=i=>e.$emit("click"))},[r("p",{textContent:a(o.placeholder||"No notes.")},null,8,f)],2))}}),y=d(k,[["__file","/Users/mattiamanzati/Desktop/durable-workflows-with-effect-cluster/node_modules/.pnpm/@slidev+client@0.47.5_postcss@8.4.35_typescript@5.3.3_vite@5.1.4/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{y as N};
