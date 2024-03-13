import{g as y}from"./get-b82f916e.js";import{o as n,c as s,b as i,n as o,d as a,F as h,j as f,g as k,t as r,f as S}from"./vue.esm-bundler-30d75a0c.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";const g={props:{opts:{type:Object},isMobile:{type:Boolean}},setup(){return{get:y}}},B={class:"container ids--type-body"},M={class:"col-md-7"},F=["innerHTML"],x=["innerHTML"],C={class:"caf-mb-8"},T=["innerHTML"],w={key:1,class:"ids__marketing-bullets ids--type-paragraph-small"},q=["innerHTML"],A={class:"caf-mb-7 caf-mb-md-0"},L=["href"],H=i("i",{class:"fa fa-arrow-right caf-ml-1"},null,-1),N=["href"],E=["href"],p=["src","alt"];function z(c,j,e,t,O,P){return n(),s("div",{class:o(["ids__marketing-featuredSideBySide ids__marketing--light container-fluid",`ids__marketing--${e.opts.theme} ${t.get(e.opts,"content.class","caf-pt-20 caf-pb-20")}`]),style:S(t.get(e.opts,"content.style"))},[i("div",B,[i("div",{class:o(["row align-items-md-center",{"flex-column-reverse flex-md-row-reverse":e.opts.visible.imgFirst&&!e.isMobile}])},[i("div",M,[t.get(e.opts,"content.eyebrow")?(n(),s("p",{key:0,class:"ids__marketing-eyebrow ids--type-marketing-overline-big text-uppercase caf-mb-4",innerHTML:c.$sanitize(e.opts.content.eyebrow)},null,8,F)):a("",!0),t.get(e.opts,"content.title")?(n(),s("h2",{key:1,class:"ids__marketing-title ids--type-marketing-xl-expressive caf-mb-4",innerHTML:c.$sanitize(e.opts.content.title)},null,8,x)):a("",!0),i("div",C,[t.get(e.opts,"content.subtitle")?(n(),s("p",{key:0,class:o(["ids__marketing-subtitle ids--type-paragraph-big",{"caf-mb-6":t.get(e.opts,"content.bullets")}]),innerHTML:c.$sanitize(e.opts.content.subtitle)},null,10,T)):a("",!0),t.get(e.opts,"content.bullets")?(n(),s("ul",w,[(n(!0),s(h,null,f(e.opts.content.bullets,(b,_)=>(n(),s("li",{key:_,innerHTML:b},null,8,q))),128))])):a("",!0)]),i("div",A,[t.get(e.opts,"content.link")&&!t.get(e.opts,"content.cta")?(n(),s("a",{key:0,class:"ids__marketing-link ids--type-button-big d-block d-md-inline text-uppercase",href:e.opts.content.link.url},[k(r(e.opts.content.link.label)+" ",1),H],8,L)):a("",!0),t.get(e.opts,"content.cta")&&!t.get(e.opts,"content.link")?(n(),s("a",{key:1,class:o(["btn btn-marketing caf-mr-5 caf-mb-5 caf-mb-md-0",(e.opts.theme!=="dark"&&e.opts.theme!=="blue"&&e.opts.content.cta.class,(e.opts.theme==="dark"||e.opts.theme==="blue")&&e.opts.content.cta.class,e.opts.content.cta.class)]),href:e.opts.content.cta.url},r(e.opts.content.cta.label),11,N)):a("",!0),t.get(e.opts,"content.secondaryCta")&&!t.get(e.opts,"content.link")?(n(),s("a",{key:2,class:o(["btn btn-marketing caf-mb-5 caf-mb-md-0",(e.opts.content.secondaryCta.class,{"btn-secondary":e.opts.theme!=="dark"&&e.opts.theme!=="blue"&&!e.opts.content.secondaryCta.class,"btn-hollow-on-hc":(e.opts.theme==="dark"||e.opts.theme==="blue")&&!e.opts.content.secondaryCta.class})]),href:e.opts.content.secondaryCta.url},r(e.opts.content.secondaryCta.label),11,E)):a("",!0)])]),t.get(e.opts,"content.image")?(n(),s("div",{key:0,class:o(["col-md-5",{"text-right":!e.opts.visible.imgFirst&&!e.isMobile,"text-center":e.isMobile}])},[i("img",{class:"ids__marketing-image caf-mb-0",src:e.opts.content.image.src,alt:e.opts.content.image.alt,height:"100",width:"100"},null,8,p)],2)):a("",!0)],2)])],6)}const I=v(g,[["render",z]]);g.__docgenInfo={exportName:"default",displayName:"FeaturedSideBySide",description:"",tags:{},props:[{name:"opts",type:{name:"object"}},{name:"isMobile",type:{name:"boolean"}}],sourceFiles:["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/FeaturedSideBySide/FeaturedSideBySide.vue"]};const D={title:"Blocks/Marketing"},l={args:{opts:{theme:"light",content:{bullets:["Sed ac nunc, eget msa, cursus.","Sed ac nunc, eget msa, cursus.","Sed ac nunc, eget msa, cursus."],cta:{label:"Primary Button",url:"/"},secondaryCta:{label:"Secondary Button",url:"/"},eyebrow:"SIT AMET MORBI QUAM MASSA",image:{src:"https://via.placeholder.com/940x618",alt:"Alt text"},subtitle:"Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.",title:"Enim gravida sollicitudin aliquam."},visible:{imgFirst:!1}}},render:c=>({components:{FeaturedSideBySideComponent:I},setup(){return{args:c}},template:'<FeaturedSideBySideComponent v-bind="args" />'})};var d,m,u;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    opts: {
      theme: 'light',
      content: {
        bullets: ['Sed ac nunc, eget msa, cursus.', 'Sed ac nunc, eget msa, cursus.', 'Sed ac nunc, eget msa, cursus.'],
        cta: {
          label: 'Primary Button',
          url: '/'
        },
        secondaryCta: {
          label: 'Secondary Button',
          url: '/'
        },
        eyebrow: 'SIT AMET MORBI QUAM MASSA',
        image: {
          src: 'https://via.placeholder.com/940x618',
          alt: 'Alt text'
        },
        subtitle: 'Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.',
        title: 'Enim gravida sollicitudin aliquam.'
      },
      visible: {
        imgFirst: false
      }
    }
  },
  render: args => ({
    components: {
      FeaturedSideBySideComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<FeaturedSideBySideComponent v-bind="args" />'
  })
}`,...(u=(m=l.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const W=["FeaturedSideBySide"];export{l as FeaturedSideBySide,W as __namedExportsOrder,D as default};
