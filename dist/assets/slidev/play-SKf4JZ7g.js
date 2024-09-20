const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-DNYgfJM_.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-j0zSwpXo.js","assets/modules/unplugin-icons-BnhuWysx.js","assets/modules/vue-BMF23GvP.js","assets/modules/shiki-Bv_t3e9G.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-CpEUUj9Y.js","assets/index-Bpsx5uKs.js","assets/index-mjNHdLhR.css","assets/slidev/useWakeLock-6X7HPeuN.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-B9Kskyya.js","assets/slidev/SlideContainer-ii8DGJ7q.js","assets/SlideContainer-DfTgke70.css","assets/slidev/SlideWrapper-M8r06exh.js","assets/SlideWrapper-BJs8vVMP.css","assets/slidev/context-DqSYJZpm.js","assets/useWakeLock-DK-5Alh3.css","assets/DrawingControls-C5T1oZL5.css"])))=>i.map(i=>d[i]);
import{d as g,R as D,o,c as d,B as e,b as _,e as l,f as B,i as C,g as n,a5 as N,C as E,k as S,A as P,a6 as $,X as y,l as m,F as M,h as R,t as A}from"../modules/vue-BMF23GvP.js";import{j as b,n as z,V as I,Z as h,$ as w,o as x,a0 as L,M as V,Y as T,a1 as W}from"../index-Bpsx5uKs.js";import{b as H,G as O,c as U,u as j,r as F,a as G,S as X,_ as Y,o as K}from"./useWakeLock-6X7HPeuN.js";import{S as Z}from"./SlideContainer-ii8DGJ7q.js";import{_ as q}from"./PrintStyle.vue_vue_type_script_setup_true_lang-zvSHm4p0.js";import{u as J}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-CpEUUj9Y.js";import{A as Q}from"../modules/unplugin-icons-BnhuWysx.js";import"../modules/shiki-Bv_t3e9G.js";import"./IconButton.vue_vue_type_script_setup_true_lang-B9Kskyya.js";import"./SlideWrapper-M8r06exh.js";import"./context-DqSYJZpm.js";const ee="/assets/logo-BYkHSa_O.png",te={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},oe=g({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(f,{emit:c}){const i=f,a=D(i,"modelValue",c);function r(){a.value=!1}return(p,t)=>(o(),d(N,null,[e(a)?(o(),_("div",te,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:t[0]||(t[0]=u=>r())}),l("div",{class:C(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[B(p.$slots,"default")],2)])):n("v-if",!0)],1024))}}),se={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ae=["innerHTML"],le=g({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(f,{emit:c}){const a=D(f,"modelValue",c),r=E(()=>typeof b.info=="string");return(p,t)=>(o(),d(oe,{modelValue:e(a),"onUpdate:modelValue":t[0]||(t[0]=u=>$(a)?a.value=u:null),class:"px-6 py-4"},{default:S(()=>[l("div",se,[r.value?(o(),_("div",{key:0,class:"mb-4",innerHTML:e(b).info},null,8,ae)):n("v-if",!0),t[1]||(t[1]=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:ee,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),P("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ne=g({__name:"Controls",setup(f){const{isEmbedded:c}=z(),i=!b.drawings.presenterOnly&&!c.value,s=y();i&&I(()=>import("./DrawingControls-DNYgfJM_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(p=>s.value=p.default);const a=y(),r=y();return(p,t)=>(o(),_(M,null,[e(i)&&s.value?(o(),d(e(s),{key:0})):n("v-if",!0),m(H),m(O),a.value?(o(),d(e(a),{key:1})):n("v-if",!0),r.value?(o(),d(e(r),{key:2,modelValue:e(h),"onUpdate:modelValue":t[0]||(t[0]=u=>$(h)?h.value=u:null)},null,8,["modelValue"])):n("v-if",!0),e(b).info?(o(),d(le,{key:3,modelValue:e(w),"onUpdate:modelValue":t[1]||(t[1]=u=>$(w)?w.value=u:null)},null,8,["modelValue"])):n("v-if",!0),m(U)],64))}}),ie={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},re=g({__name:"PresenterMouse",setup(f){return(c,i)=>{const s=Q;return e(x).cursor?(o(),_("div",ie,[m(s,{class:"absolute stroke-white dark:stroke-black",style:R({left:`${e(x).cursor.x}%`,top:`${e(x).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):n("v-if",!0)}}}),be=g({__name:"play",setup(f){const{next:c,prev:i,isPrintMode:s}=z(),{isDrawing:a}=J(),r=A();function p(k){var v;V.value||k.button===0&&((v=k.target)==null?void 0:v.id)==="slide-container"&&(k.pageX/window.innerWidth>.5?c():i())}j(r),F(),G();const t=E(()=>L.value||V.value),u=y();return(k,v)=>(o(),_(M,null,[e(s)?(o(),d(q,{key:0})):n("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:r,class:C(["grid",e(W)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(Z,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(s)?e(T).width.value:void 0,"is-main":"",onPointerdown:p,onContextmenu:e(K)},{default:S(()=>[m(X,{"render-context":"slide"}),m(re)]),controls:S(()=>[e(s)?n("v-if",!0):(o(),_("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[t.value?"!opacity-100 right-0":"opacity-0 p-2",e(a)?"pointer-events-none":""]])},[m(Y,{persist:t.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),u.value&&e(V)?(o(),d(e(u),{key:0,resize:!0})):n("v-if",!0)],2),e(s)?n("v-if",!0):(o(),d(ne,{key:1})),v[0]||(v[0]=l("div",{id:"twoslash-container"},null,-1))],64))}});export{be as default};
