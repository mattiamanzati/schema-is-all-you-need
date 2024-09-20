import{f as V,g as q,y as G,z as H}from"../modules/unplugin-icons-BnhuWysx.js";import{d as M,o as n,c,i as P,B as e,t as N,C as b,N as $,X as J,J as j,W as K,a1 as O,a2 as X,b as k,e as t,l as o,k as g,h as z,g as A,x as Q,F as U}from"../modules/vue-BMF23GvP.js";import{n as Y,l as Z,J as ee,t as te,o as se,K as oe,q as ne,L as ae,M as re,N as ie,O as le,P as ce,_ as ue}from"../index-Bpsx5uKs.js";import{r as me,u as de,a as pe,S as _e,_ as fe,G as xe,b as ve,c as ke,o as ge}from"./useWakeLock-6X7HPeuN.js";import{S as ye}from"./SlideWrapper-M8r06exh.js";import{a as be,S as F}from"./SlideContainer-ii8DGJ7q.js";import{_ as Ce}from"./NoteDisplay.vue_vue_type_style_index_0_lang-CGSDjZU5.js";import{_ as he}from"./DrawingControls.vue_vue_type_style_index_0_lang-j0zSwpXo.js";import{_ as B}from"./IconButton.vue_vue_type_script_setup_true_lang-B9Kskyya.js";import{C as Se}from"./ClicksSlider-B0sPIb0D.js";import{u as we}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-CpEUUj9Y.js";import"../modules/shiki-Bv_t3e9G.js";import"./context-DqSYJZpm.js";const Ne=M({__name:"NoteStatic",props:{no:{},class:{},clicksContext:{}},setup(C){const l=C,{info:i}=be(l.no);return(u,p)=>{var _,f;return n(),c(Ce,{class:P(l.class),note:(_=e(i))==null?void 0:_.note,"note-html":(f=e(i))==null?void 0:f.noteHTML,"clicks-context":u.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),$e={class:"bg-main h-full slidev-presenter"},ze={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Fe={key:1,class:"h-full flex justify-center items-center"},Be={key:0,class:"grid-section note of-auto"},Me={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Pe={class:"border-t border-main py-1 px-2 text-sm"},De={class:"grid-section bottom flex"},Ee={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Le={class:"progress-bar"},Re=M({__name:"presenter",setup(C){const l=N();me(),de(l),pe();const{clicksContext:i,currentSlideNo:u,currentSlideRoute:p,hasNext:_,nextRoute:f,slides:D,getPrimaryClicks:E,total:L}=Y(),{isDrawing:R}=we();Z({title:`Presenter - ${ne}`}),N(!1);const{timer:T,resetTimer:h}=ee(),W=b(()=>D.value.map(v=>te(v))),a=b(()=>i.value.current<i.value.total?[p.value,i.value.current+1]:_.value?[f.value,0]:null),x=b(()=>a.value&&W.value[a.value[0].no-1]);$(a,()=>{x.value&&a.value&&(x.value.current=a.value[1])},{immediate:!0});const S=J();return j(()=>{const v=l.value.querySelector("#slide-content"),s=K(O()),y=X();$(()=>{if(!y.value||R.value||!oe.value)return;const r=v.getBoundingClientRect(),m=(s.x-r.left)/r.width*100,d=(s.y-r.top)/r.height*100;if(!(m<0||m>100||d<0||d>100))return{x:m,y:d}},r=>{se.cursor=r})}),(v,s)=>{var w;const y=V,r=q,m=G,d=H;return n(),k(U,null,[t("div",$e,[t("div",{class:P(["grid-container",`layout${e(ae)}`])},[t("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col"},[o(F,{key:"main",class:"p-2 lg:p-4 flex-auto","is-main":"",onContextmenu:e(ge)},{default:g(()=>[o(_e,{"render-context":"presenter"})]),_:1},8,["onContextmenu"]),(n(),c(Se,{key:(w=e(p))==null?void 0:w.no,"clicks-context":e(E)(e(p)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),s[3]||(s[3]=t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1))],512),t("div",ze,[a.value&&x.value?(n(),c(F,{key:"next"},{default:g(()=>[(n(),c(ye,{key:a.value[0].no,"clicks-context":x.value,route:a.value[0],"render-context":"previewNext"},null,8,["clicks-context","route"]))]),_:1})):(n(),k("div",Fe,s[4]||(s[4]=[t("div",{class:"text-gray-500"}," End of the presentation ",-1)]))),s[5]||(s[5]=t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1))]),S.value&&e(re)?(n(),k("div",Be,[o(e(S))])):(n(),k("div",Me,[(n(),c(Ne,{key:`static-${e(u)}`,no:e(u),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:z({fontSize:`${e(ie)}em`}),"clicks-context":e(i)},null,8,["no","style","clicks-context"])),t("div",Pe,[o(B,{title:"Increase font size",onClick:e(le)},{default:g(()=>[o(y)]),_:1},8,["onClick"]),o(B,{title:"Decrease font size",onClick:e(ce)},{default:g(()=>[o(r)]),_:1},8,["onClick"]),A("v-if",!0)])])),t("div",De,[o(fe,{persist:!0}),s[6]||(s[6]=t("div",{"flex-auto":""},null,-1)),t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:s[2]||(s[2]=(...I)=>e(h)&&e(h)(...I))},[o(m,{class:"absolute"}),o(d,{class:"absolute opacity-0"})]),t("div",Ee,Q(e(T)),1)]),(n(),c(he,{key:2}))],2),t("div",Le,[t("div",{class:"progress h-3px bg-primary transition-all",style:z({width:`${(e(u)-1)/(e(L)-1)*100+1}%`})},null,4)])]),o(xe),o(ve),o(ke)],64)}}}),Qe=ue(Re,[["__scopeId","data-v-cf19cd0c"]]);export{Qe as default};
