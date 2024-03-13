import{k as h,l as E,c as a,b as s,n as u,d as o,t as p,g as W,h as z,m as L,p as q,q as N,f,o as n}from"./vue.esm-bundler-30d75a0c.js";import{g as _}from"./get-b82f916e.js";import{B as A}from"./BaseCard1-71b41ae2.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";import"./Avatar-391cb565.js";import"./Badge-bdc443f9.js";const I={components:{BaseCard1:A},props:{opts:{type:Object}},setup(i){const l=h(null),e=h(0);return _(i.opts,"tracking.viewEvent")&&i.opts.tracking.viewEvent(),E(()=>{setTimeout(()=>{e.value=l.value.offsetHeight},500)}),{get:_,mainContainer:l,fullBleedImgContainerHeight:e}}},O={class:"container ids--type-body ids__marketing-hero__main"},R={class:"row align-items-center"},j=["innerHTML"],P=["innerHTML"],V=["innerHTML"],U=["href"],K=["href"],Q=s("i",{class:"fa fa-arrow-right caf-ml-1"},null,-1),G={key:0,class:"ids__marketing-hero__container col-md-4 caf-mt-8 caf-mt-md-0"},J=["src","alt"],X={key:1},Y={key:0,class:"ids__marketing-hero__container-fluid container-fluid caf-pt-8 caf-pt-md-0 hidden-md-down"},Z=s("div",{class:"col-md-7 empty-column h-100"},null,-1);function $(i,l,e,t,te,ne){return n(),a("div",{ref:"mainContainer",class:u(["ids__marketing-hero container-fluid",`ids__marketing--${e.opts.theme} ${t.get(e.opts,"content.class","caf-pt-20 caf-pb-20 caf-pt-md-30 caf-pb-md-30")}`]),style:f(t.get(e.opts,"content.style"))},[s("div",O,[s("div",R,[s("div",{class:u({"col-md-8":!t.get(e.opts,"visible.fullWidth")})},[t.get(e.opts,"content.eyebrow")?(n(),a("p",{key:0,class:"ids__marketing-eyebrow ids--type-overline-big caf-mb-3 caf-mb-md-3",innerHTML:i.$sanitize(e.opts.content.eyebrow)},null,8,j)):o("",!0),t.get(e.opts,"content.title")?(n(),a("h1",{key:1,class:"ids__marketing-title ids--type-marketing-xxxl-expressive caf-mb-3",innerHTML:i.$sanitize(e.opts.content.title)},null,8,P)):o("",!0),t.get(e.opts,"content.subtitle")?(n(),a("p",{key:2,class:"ids__marketing-subtitle ids--type-paragraph-big caf-mb-7",innerHTML:i.$sanitize(e.opts.content.subtitle)},null,8,V)):o("",!0),t.get(e.opts,"content.cta")?(n(),a("a",{key:3,class:u(["btn btn-primary btn-marketing caf-mr-8 caf-mb-8 caf-mb-md-0",e.opts.content.cta.class]),href:e.opts.content.cta.url,onClick:l[0]||(l[0]=w=>t.get(e.opts.tracking,"clickEvent")&&e.opts.tracking.clickEvent(w))},p(e.opts.content.cta.label),11,U)):o("",!0),t.get(e.opts,"content.link")?(n(),a("a",{key:4,class:"ids__marketing-link ids--type-button-big d-block d-md-inline text-uppercase",href:e.opts.content.link.url},[W(p(e.opts.content.link.label)+" ",1),Q],8,K)):o("",!0)],2),!t.get(e.opts,"visible.fullWidth")&&!t.get(e.opts,"visible.fullBleedImg")?(n(),a("div",G,[t.get(e.opts,"content.container.image")?(n(),a("img",{key:0,src:e.opts.content.container.image.src,alt:e.opts.content.container.image.alt,width:"100",height:"100"},null,8,J)):o("",!0),t.get(e.opts,"content.container.card")?(n(),a("div",X,[(n(),z(N(e.opts.content.container.card.component),L(q(e.opts.content.container.card)),null,16))])):o("",!0)])):o("",!0)])]),!t.get(e.opts,"visible.fullWidth")&&t.get(e.opts,"visible.fullBleedImg")&&t.get(e.opts,"content.container.image")?(n(),a("div",Y,[s("div",{class:"row align-items-center",style:f({height:`${t.fullBleedImgContainerHeight}px`})},[Z,s("div",{class:"col-md-5 h-100",style:f(`background: ${i.isMobile?"":`${e.opts.content.container.image.position?e.opts.content.container.image.position:"left center"} / cover`} url(${e.opts.content.container.image.src}) no-repeat; background-size: ${e.opts.content.container.image.size?e.opts.content.container.image.size:"cover"}`)},null,4)],4)])):o("",!0)],6)}const ee=D(I,[["render",$]]);I.__docgenInfo={exportName:"default",displayName:"Hero",description:"",tags:{},props:[{name:"opts",type:{name:"object"}}],sourceFiles:["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/Hero/Hero.vue"]};const c={theme:"light",content:{class:"ids--color-bg-base-decorative-surface-2 caf-pt-20 caf-pb-20 caf-pt-md-30 caf-pb-md-30",background:"url(https://via.placeholder.com/940x618) no-repeat center / cover",cta:{label:"Label",url:"/"},eyebrow:"SIT AMET MORBI QUAM MASSA",link:{label:"Label",url:"/"},subtitle:"Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.",title:"Enim gravida sollicitudin aliquam.",container:{card:{component:"BaseCard1",overline:"Overline",bgImg:"https://via.placeholder.com/600x600",title:"Centering on Racial Equity in Charlottesville and other really long extra long text",truncateTitle:!1,url:"/blog/centering-on-racial-equity-in-charlottesville/",username:"Latesha Kelly"}}},visible:{fullWidth:!1}},me={title:"Blocks/Marketing/Hero",component:ee,args:{opts:c}},r={},m={args:{opts:{...c,content:{...c.content,container:{image:{src:"https://via.placeholder.com/150/0000FF/FFFFFF/?text=Test",alt:"Some image info"}}},visible:{fullWidth:!1,fullBleedImg:!0}}}},d={args:{opts:{...c,content:{...c.content,container:{image:{src:"https://via.placeholder.com/150/0000FF/FFFFFF/?text=Test",alt:"Some image info"}}},visible:{fullWidth:!1}}}},g={args:{opts:{...c,content:{...c.content,class:"",background:"url(https://via.placeholder.com/940x618) no-repeat center / cover",container:null},visible:{fullWidth:!1}}}};var b,v,k;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(k=(v=r.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var y,F,C;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    opts: {
      ...opts,
      content: {
        ...opts.content,
        container: {
          image: {
            src: 'https://via.placeholder.com/150/0000FF/FFFFFF/?text=Test',
            alt: 'Some image info'
          }
        }
      },
      visible: {
        fullWidth: false,
        fullBleedImg: true
      }
    }
  }
}`,...(C=(F=m.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var B,x,H;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    opts: {
      ...opts,
      content: {
        ...opts.content,
        container: {
          image: {
            src: 'https://via.placeholder.com/150/0000FF/FFFFFF/?text=Test',
            alt: 'Some image info'
          }
        }
      },
      visible: {
        fullWidth: false
      }
    }
  }
}`,...(H=(x=d.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var T,M,S;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    opts: {
      ...opts,
      content: {
        ...opts.content,
        class: '',
        background: 'url(https://via.placeholder.com/940x618) no-repeat center / cover',
        container: null
      },
      visible: {
        fullWidth: false
      }
    }
  }
}`,...(S=(M=g.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};const de=["Default","FullBleed","ImageContainer","EmptyContainer"];export{r as Default,g as EmptyContainer,m as FullBleed,d as ImageContainer,de as __namedExportsOrder,me as default};
