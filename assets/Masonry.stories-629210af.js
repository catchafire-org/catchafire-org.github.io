import{g as E}from"./get-b82f916e.js";import{D as X,E as Z,k as G,l as $,G as ee,A as R,o as a,c as i,F as H,j as V,f as F,H as g,r as te,g as f,t as b,I as ne,a as J,d as p,e as v,w as _,b as w,n as M}from"./vue.esm-bundler-30d75a0c.js";import{I as oe}from"./Icons-4e045f61.js";import{_ as se}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";const ae=["data-index"],ie=X({__name:"masonry-wall",props:{columnWidth:{default:400},items:{},gap:{default:0},rtl:{type:Boolean,default:!1},ssrColumns:{default:0},scrollContainer:{default:null},minColumns:{},maxColumns:{},keyMapper:{type:Function,default:(s,d,e,l)=>l}},emits:["redraw","redrawSkip"],setup(s,{emit:d}){const e=s,{columnWidth:l,items:y,gap:h,rtl:m,ssrColumns:k,scrollContainer:o,minColumns:S,maxColumns:z,keyMapper:P}=Z(e),x=G([]),C=G();function W(n,t,r,c){const u=A(r);return c+t+u<=n?W(n,t,r+1,c+t+u):r}function A(n){const t=Array.isArray(l.value)?l.value:[l.value];return t[n%t.length]}function I(){const n=W(C.value.getBoundingClientRect().width,h.value,0,-h.value),t=Q(K(n));return t>0?t:1}function K(n){const t=z==null?void 0:z.value;return t&&n>t?t:n}function Q(n){const t=S==null?void 0:S.value;return t&&n<t?t:n}function j(n){return[...new Array(n)].map(()=>[])}if(k.value>0){const n=j(k.value);y.value.forEach((t,r)=>n[r%k.value].push(r)),x.value=n}async function N(n){if(n>=y.value.length)return;await ne();const t=[...C.value.children];m.value&&t.reverse();const r=t.reduce((c,u)=>u.getBoundingClientRect().height<c.getBoundingClientRect().height?u:c);x.value[+r.dataset.index].push(n),await N(n+1)}async function B(n=!1){if(x.value.length===I()&&!n){d("redrawSkip");return}x.value=j(I());const t=o==null?void 0:o.value,r=t?t.scrollTop:window.scrollY;await N(0),t?t.scrollBy({top:r-t.scrollTop}):window.scrollTo({top:r}),d("redraw")}const T=typeof ResizeObserver>"u"?void 0:new ResizeObserver(()=>B());return $(()=>{B(),T==null||T.observe(C.value)}),ee(()=>T==null?void 0:T.unobserve(C.value)),R([y,m],()=>B(!0)),R([l,h,S,z],()=>B()),(n,t)=>(a(),i("div",{ref_key:"wall",ref:C,class:"masonry-wall",style:F({display:"flex",gap:`${g(h)}px`})},[(a(!0),i(H,null,V(x.value,(r,c)=>(a(),i("div",{key:c,class:"masonry-column","data-index":c,style:F({display:"flex","flex-basis":`${A(c)}px`,"flex-direction":"column","flex-grow":1,gap:`${g(h)}px`,height:["-webkit-max-content","-moz-max-content","max-content"],"min-width":0})},[(a(!0),i(H,null,V(r,(u,O)=>(a(),i("div",{key:g(P)(g(y)[u],c,O,u),class:"masonry-item"},[te(n.$slots,"default",{item:g(y)[u],column:c,row:O,index:u},()=>[f(b(g(y)[u]),1)])]))),128))],12,ae))),128))],4))}}),re=(()=>{const s=ie;return s.install=d=>{d.component("MasonryWall",s)},s})(),Y={components:{Icons:oe,MasonryWall:re},props:{opts:{type:Object},isMobile:{type:Boolean}},setup(s){const d=E(s.opts,"content.masonry.items").slice(0,3);return E(s.opts,"tracking.viewEvent")&&s.opts.tracking.viewEvent(),{mobileItems:d,get:E}}},le=["innerHTML"],ce={class:"ids__masonry-card caf-p-5 caf-mb-0 ids--border-all-base-stroke-default"},ue={key:0,class:"masonry-item-rating caf-mb-3 d-inline-flex align-items-center"},de={key:0,class:"ids__masonry-rating-stars ids--color-type-marketing-decorative-icon-vibrant d-flex"},me={key:1,class:"ids--type-subtitle ids--type-lineheight-sm masonry-item-rating-nps"},pe=w("span",{class:"ids--type-display-small"},"“",-1),ye=w("span",{class:"ids--type-display-small"},"”",-1),fe={key:2},he={key:0,class:"ids--type-caption ids--type-lineheight-sm ids--color-type-base-text-subdued d-block caf-mb-0"},ge={key:1,class:"text-center caf-mt-8"},ve=["href","target"];function _e(s,d,e,l,y,h){const m=J("Icons"),k=J("MasonryWall");return a(),i("div",{class:M(["ids__masonry ids__masonry--light container-fluid grid caf-py-20 d-flex flex-column align-items-center",`ids__masonry--${e.opts.theme}`]),style:F(l.get(e.opts,"content.style"))},[l.get(e.opts,"content.title")?(a(),i("h2",{key:0,class:"ids__masonry-title ids--type-marketing-xl-expressive text-center caf-mb-8",innerHTML:s.$sanitize(e.opts.content.title)},null,8,le)):p("",!0),v(k,{class:M(["",{"caf-mt-8":!e.opts.visible.title||!e.opts.content.title}]),items:e.isMobile?l.mobileItems:e.opts.content.masonry.items,"column-width":e.opts.content.masonry.config.width,gap:e.opts.content.masonry.config.padding},{default:_(({item:o})=>[w("figure",ce,[e.opts.visible.ratings?(a(),i("div",ue,[e.opts.visible.stars?(a(),i("div",de,[v(m,{size:"Sm",class:"d-flex justify-content-center align-items-center"},{default:_(()=>[f(" star ")]),_:1}),v(m,{size:"Sm",class:"d-flex justify-content-center align-items-center"},{default:_(()=>[f(" star ")]),_:1}),v(m,{size:"Sm",class:"d-flex justify-content-center align-items-center"},{default:_(()=>[f(" star ")]),_:1}),v(m,{size:"Sm",class:"d-flex justify-content-center align-items-center"},{default:_(()=>[f(" star ")]),_:1}),v(m,{size:"Sm",class:"d-flex justify-content-center align-items-center"},{default:_(()=>[f(" star ")]),_:1})])):p("",!0),e.opts.visible.nps_score?(a(),i("div",me,b(o.nps),1)):p("",!0)])):p("",!0),o.quote?(a(),i("blockquote",{key:1,class:M(["ids--type-display-small ids--type-lineheight-sm",{"caf-mb-5":!!o.author,"caf-mb-0":!o.author}])},[w("p",null,[pe,f(b(o.quote),1),ye])],2)):p("",!0),o.author?(a(),i("figcaption",fe,[w("span",{class:M(["ids--type-subtitle ids--type-lineheight-sm d-block",{"caf-mb-1":o.company||o.title,"caf-mb-0":!o.company&&!o.title}])},b(o.author),3),o.company||o.title?(a(),i("span",he,b(o.company||o.title),1)):p("",!0)])):p("",!0)])]),_:1},8,["class","items","column-width","gap"]),e.opts.visible.cta?(a(),i("div",ge,[w("a",{class:M(["btn btn-marketing",(e.opts.theme!=="dark"&&e.opts.theme!=="blue"&&e.opts.theme!=="teal"&&e.opts.content.cta.class,(e.opts.theme==="dark"||e.opts.theme==="blue"||e.opts.theme==="teal")&&e.opts.content.cta.class,e.opts.content.cta.class)]),href:e.opts.content.cta.url,target:l.get(e.opts,"content.cta.target")||"_blank",onClick:d[0]||(d[0]=o=>l.get(e.opts.tracking,"clickEvent")&&e.opts.tracking.clickEvent(o))},b(e.opts.content.cta.label),11,ve)])):p("",!0)],6)}const be=se(Y,[["render",_e]]);Y.__docgenInfo={exportName:"default",displayName:"Masonry",description:"",tags:{},props:[{name:"opts",type:{name:"object"}},{name:"isMobile",type:{name:"boolean"}}],sourceFiles:["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/Masonry/Masonry.vue"]};const Be={title:"Components"},q={args:{isMobile:!1,opts:{theme:"dark",content:{title:"Orci mi tellus gravida",cta:{label:"Read Impact Stories",url:"http://catchafire.org/impact/stories"},masonry:{config:{width:300,padding:12},items:[{nps:3,quote:"This was a first year pilot for our foundation.",author:"Brennan Gould",company:"Charlottesville Area Community Foundation"},{nps:4.5,quote:"This was a first year pilot for our foundation. We invested $150,000 and that money has saved nonprofits in our region over $2.5 million.",author:"Brennan Gould",company:"Charlottesville Area Community Foundation"},{nps:9,quote:"We invested $150,000 and that money has saved nonprofits in our region over $2.5 million.",author:"Brennan Gould",company:"Charlottesville Area Community Foundation"},{nps:1.5,quote:"This is a test quote which should NOT show up on a mobile view as the limit will be restricted to 3 to keep from having to scroll too far.",author:"Josh Harbaugh",company:"Catchafire"}]}},visible:{cta:!0,ratings:!0,title:!0,stars:!0,nps_score:!0},store:{},tracking:{viewEvent:()=>{}}}},render:s=>({components:{MasonryComponent:be},setup(){return{args:s}},template:'<MasonryComponent v-bind="args" />'})};var L,D,U;q.parameters={...q.parameters,docs:{...(L=q.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isMobile: false,
    opts: {
      theme: 'dark',
      content: {
        title: 'Orci mi tellus gravida',
        cta: {
          label: 'Read Impact Stories',
          url: 'http://catchafire.org/impact/stories'
        },
        masonry: {
          config: {
            width: 300,
            padding: 12
          },
          items: [{
            nps: 3,
            quote: 'This was a first year pilot for our foundation.',
            author: 'Brennan Gould',
            company: 'Charlottesville Area Community Foundation'
          }, {
            nps: 4.5,
            quote: 'This was a first year pilot for our foundation. We invested $150,000 and that money has saved nonprofits in our region over $2.5 million.',
            author: 'Brennan Gould',
            company: 'Charlottesville Area Community Foundation'
          }, {
            nps: 9,
            quote: 'We invested $150,000 and that money has saved nonprofits in our region over $2.5 million.',
            author: 'Brennan Gould',
            company: 'Charlottesville Area Community Foundation'
          }, {
            nps: 1.5,
            quote: 'This is a test quote which should NOT show up on a mobile view as the limit will be restricted to 3 to keep from having to scroll too far.',
            author: 'Josh Harbaugh',
            company: 'Catchafire'
          }]
        }
      },
      visible: {
        cta: true,
        ratings: true,
        title: true,
        stars: true,
        nps_score: true
      },
      store: {},
      tracking: {
        viewEvent: () => {}
      }
    }
  },
  render: args => ({
    components: {
      MasonryComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<MasonryComponent v-bind="args" />'
  })
}`,...(U=(D=q.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};const Te=["Masonry"];export{q as Masonry,Te as __namedExportsOrder,Be as default};
