import{g as m}from"./get-b82f916e.js";import{o as a,c as s,b as d,n as c,d as l,t as g,f as _}from"./vue.esm-bundler-30d75a0c.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";const f={props:{opts:{type:Object}},setup(n){return m(n.opts,"tracking.viewEvent")&&n.opts.tracking.viewEvent(),{get:m}}},y={class:"container text-center ids--type-body"},p=["innerHTML"],h=["innerHTML"],v={class:"d-flex flex-column flex-md-row justify-content-center"},S=["href"],E=["href"];function q(n,i,t,e,L,M){return a(),s("div",{class:c(["ids__marketing-simpleCta ids__marketing--light container-fluid",`ids__marketing--${t.opts.theme} ${e.get(t.opts,"content.class","caf-pt-20 caf-pb-20")}`]),style:_(e.get(t.opts,"content.style"))},[d("div",y,[e.get(t.opts,"content.title")?(a(),s("h2",{key:0,class:c(["ids__marketing-title ids--type-marketing-xl-expressive",{"caf-mb-4":e.get(t.opts,"content.subtitle"),"caf-mb-9":!e.get(t.opts,"content.subtitle")}]),innerHTML:n.$sanitize(t.opts.content.title)},null,10,p)):l("",!0),e.get(t.opts,"content.subtitle")?(a(),s("p",{key:1,class:"ids__marketing-subtitle ids--type-paragraph-big caf-mb-9",innerHTML:n.$sanitize(t.opts.content.subtitle)},null,8,h)):l("",!0),d("div",v,[e.get(t.opts,"content.cta")?(a(),s("a",{key:0,class:c(["btn btn-primary btn-marketing caf-mr-md-8 caf-mb-8 caf-mb-md-0",t.opts.content.cta.class]),href:t.opts.content.cta.url,onClick:i[0]||(i[0]=o=>e.get(t.opts.content.cta.tracking,"clickEvent")&&t.opts.content.cta.tracking.clickEvent(o)||e.get(t.opts.tracking,"clickEvent")&&t.opts.tracking.clickEvent(o))},g(t.opts.content.cta.label),11,S)):l("",!0),e.get(t.opts,"content.secondaryCta")?(a(),s("a",{key:1,class:c(["btn btn-marketing caf-mr-md-8 caf-mb-8 caf-mb-md-0",(t.opts.content.secondaryCta.class,{"btn-secondary":t.opts.theme!=="dark"&&t.opts.theme!=="blue"&&!t.opts.content.secondaryCta.class,"btn-hollow-on-hc":(t.opts.theme==="dark"||t.opts.theme==="blue")&&!t.opts.content.secondaryCta.class})]),href:t.opts.content.secondaryCta.url,onClick:i[1]||(i[1]=o=>e.get(t.opts.content.secondaryCta.tracking,"clickEvent")&&t.opts.content.secondaryCta.tracking.clickEvent(o))},g(t.opts.content.secondaryCta.label),11,E)):l("",!0)])])],6)}const x=C(f,[["render",q]]);f.__docgenInfo={exportName:"default",displayName:"SimpleCta",description:"",tags:{},props:[{name:"opts",type:{name:"object"}}],sourceFiles:["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/SimpleCta/SimpleCta.vue"]};const z={title:"Blocks/Marketing"},r={args:{opts:{theme:"light",content:{cta:{label:"Label",url:"/"},secondaryCta:{label:"Label",url:"/"},subtitle:"Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.",title:"Enim gravida sollicitudin aliquam."}}},render:n=>({components:{SimpleCtaComponent:x},setup(){return{args:n}},template:'<SimpleCtaComponent v-bind="args" />'})};var u,b,k;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    opts: {
      theme: 'light',
      content: {
        cta: {
          label: 'Label',
          url: '/'
        },
        secondaryCta: {
          label: 'Label',
          url: '/'
        },
        subtitle: 'Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.',
        title: 'Enim gravida sollicitudin aliquam.'
      }
    }
  },
  render: args => ({
    components: {
      SimpleCtaComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<SimpleCtaComponent v-bind="args" />'
  })
}`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const H=["SimpleCta"];export{r as SimpleCta,H as __namedExportsOrder,z as default};
