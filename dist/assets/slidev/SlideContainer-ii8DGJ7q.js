import{t as u,C as i,B as d,d as M,a3 as x,O as B,a4 as v,o as E,b as k,e as C,f,h}from"../modules/vue-BMF23GvP.js";import{Q as z,n as I,R as m,S as p,s as S,a as w,i as N,T as b,_ as j}from"../index-Bpsx5uKs.js";function D(a){var e;return{info:u(((e=z(a))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const c={};function Q(a){function e(t){return c[t]??(c[t]=D(t))}return{info:i({get(){return e(d(a)).info.value},set(t){e(d(a)).info.value=t}}),update:async(t,l)=>{const n=e(l??d(a)),s=await n.update(t);return s&&(n.info.value=s),s}}}const T=["id"],A=["id"],H=M({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1}},setup(a){const e=a,{isPrintMode:t}=I(),l=u(null),n=x(l),s=u(null),y=i(()=>e.width??n.width.value),_=i(()=>e.width?e.width/m.value:n.height.value),o=i(()=>p.value&&!t.value?+p.value:Math.min(y.value/S.value,_.value/w.value)),g=i(()=>({height:`${w.value}px`,width:`${S.value}px`,transform:`translate(-50%, -50%) scale(${o.value})`,"--slidev-slide-scale":o.value})),$=i(()=>e.width?{width:`${e.width}px`,height:`${e.width/m.value}px`}:{});return e.isMain&&B(i(()=>`:root { --slidev-slide-scale: ${o.value}; }`)),v(N,o),v(b,s),(r,L)=>(E(),k("div",{id:a.isMain?"slide-container":void 0,ref_key:"container",ref:l,class:"slidev-slide-container",style:h($.value)},[C("div",{id:a.isMain?"slide-content":void 0,ref_key:"slideElement",ref:s,class:"slidev-slide-content",style:h(g.value)},[f(r.$slots,"default",{},void 0,!0)],12,A),f(r.$slots,"controls",{},void 0,!0)],12,T))}}),R=j(H,[["__scopeId","data-v-25971432"]]);export{R as S,D as a,Q as u};