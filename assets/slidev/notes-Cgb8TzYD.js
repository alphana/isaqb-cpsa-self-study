import{d as B,e as D,f as H,g as U}from"../modules/unplugin-icons-DuyCd3aB.js";import{d as E,t as y,H as I,D as u,I as L,o as _,b as V,e as o,h as C,A as l,l as s,k as p,c as b,x as w,F as j}from"../modules/vue-BKkxIjds.js";import{u as A,h as M,s as t,j as P,k as R,l as q}from"../index-BMTRcocV.js";import{_ as G,C as J}from"./NoteDisplay.vue_vue_type_style_index_0_lang-BzHHsm9U.js";import{_ as d}from"./IconButton.vue_vue_type_script_setup_true_lang-_Dj1qsJB.js";import"../modules/shiki-CH_0Kvl4.js";const K={class:"h-full pt-2 flex flex-col"},O={class:"flex-none border-t border-main",px3:"",py2:""},Q={class:"flex-none border-t border-main"},W={class:"flex gap-1 items-center px-6 py-3"},X={class:"p2 text-center"},ne=E({__name:"notes",setup(Y){A({title:`Notes - ${R}`});const{slides:z,total:f}=M(),{isFullscreen:m,toggle:S}=q,v=y(),n=I("slidev-notes-font-size",18),a=u(()=>{var e;return((e=t.lastUpdate)==null?void 0:e.type)==="viewer"?t.viewerPage:t.page}),x=u(()=>z.value.find(e=>e.no===a.value));L(a,()=>{var e;(e=v.value)==null||e.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function $(){n.value=n.value+1}function F(){n.value=n.value-1}const k=u(()=>{var i,r;const e=((i=t.lastUpdate)==null?void 0:i.type)==="viewer"?t.viewerClicks:t.clicks,c=((r=t.lastUpdate)==null?void 0:r.type)==="viewer"?t.viewerClicksTotal:t.clicksTotal;return P(y(e),void 0,c)});return(e,c)=>{var h,g;const i=H,r=U,N=B,T=D;return _(),V(j,null,[o("div",{class:"fixed top-0 left-0 h-3px bg-primary transition-all duration-500",style:C({width:`${(a.value-1)/(l(f)-1)*100+1}%`})},null,4),o("div",K,[o("div",{ref_key:"scroller",ref:v,class:"px-5 flex-auto h-full overflow-auto",style:C({fontSize:`${l(n)}px`})},[s(G,{note:(h=x.value)==null?void 0:h.meta.slide.note,"note-html":(g=x.value)==null?void 0:g.meta.slide.noteHTML,placeholder:`No notes for Slide ${a.value}.`,"clicks-context":k.value,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),o("div",O,[s(J,{"clicks-context":k.value,readonly:""},null,8,["clicks-context"])]),o("div",Q,[o("div",W,[s(d,{title:l(m)?"Close fullscreen":"Enter fullscreen",onClick:l(S)},{default:p(()=>[l(m)?(_(),b(i,{key:0})):(_(),b(r,{key:1}))]),_:1},8,["title","onClick"]),s(d,{title:"Increase font size",onClick:$},{default:p(()=>[s(N)]),_:1}),s(d,{title:"Decrease font size",onClick:F},{default:p(()=>[s(T)]),_:1}),c[0]||(c[0]=o("div",{class:"flex-auto"},null,-1)),o("div",X,w(a.value)+" / "+w(l(f)),1)])])])],64)}}});export{ne as default};
