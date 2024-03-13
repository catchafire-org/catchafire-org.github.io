import{g}from"./get-b82f916e.js";import{o as n,c as s,b as l,d as a,n as r,t as _,f as b}from"./vue.esm-bundler-30d75a0c.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";const u={props:{opts:{type:Object}},setup(){return{get:g}}},f={class:"container text-center ids--type-body"},p=["innerHTML"],k=["innerHTML"],v=["src","alt"],y={key:3,class:"embed-responsive embed-responsive-16by9 mx-auto caf-mb-12",style:{"max-width":"680px"}},B=["title","src"],x=["href"];function F(i,w,t,e,C,L){return n(),s("div",{class:r(["ids__marketing-featuredBig ids__marketing--light container-fluid",`ids__marketing--${t.opts.theme} ${e.get(t.opts,"content.class","caf-pt-20 caf-pb-20")}`]),style:b(e.get(t.opts,"content.style"))},[l("div",f,[e.get(t.opts,"content.title")?(n(),s("h2",{key:0,class:"ids__marketing-title ids--type-marketing-xl-expressive caf-mb-4",innerHTML:i.$sanitize(t.opts.content.title)},null,8,p)):a("",!0),e.get(t.opts,"content.subtitle")?(n(),s("p",{key:1,class:"ids__marketing-subtitle ids--type-paragraph-big caf-mb-12",innerHTML:i.$sanitize(t.opts.content.subtitle)},null,8,k)):a("",!0),e.get(t.opts,"content.image")?(n(),s("img",{key:2,class:"ids__marketing-image caf-mb-12",src:t.opts.content.image.src,alt:t.opts.content.image.alt,height:"100",width:"100"},null,8,v)):a("",!0),e.get(t.opts,"content.video")?(n(),s("div",y,[l("iframe",{id:"vmdis_video",title:t.opts.content.video.title,src:t.opts.content.video.src,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""},null,8,B)])):a("",!0),e.get(t.opts,"content.cta")?(n(),s("a",{key:4,class:r(["btn btn-primary btn-marketing caf-mr-8 caf-mb-8 caf-mb-md-0",(t.opts.theme!=="dark"&&t.opts.theme!=="blue"&&t.opts.content.cta.class,(t.opts.theme==="dark"||t.opts.theme==="blue")&&t.opts.content.cta.class,t.opts.content.cta.class)]),href:t.opts.content.cta.url},_(t.opts.content.cta.label),11,x)):a("",!0)])],6)}const q=h(u,[["render",F]]);u.__docgenInfo={exportName:"default",displayName:"FeaturedBig",description:"",tags:{},props:[{name:"opts",type:{name:"object"}}],sourceFiles:["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/FeaturedBig/FeaturedBig.vue"]};const H={title:"Blocks/Marketing"},o={args:{opts:{theme:"light",content:{image:{src:"https://via.placeholder.com/940x618",alt:"Alt text"},cta:{label:"Label",url:"/"},subtitle:"Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.",title:"Enim gravida sollicitudin aliquam."}}},render:i=>({components:{FeaturedBigComponent:q},setup(){return{args:i}},template:'<FeaturedBigComponent v-bind="args" />'})};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    opts: {
      theme: 'light',
      content: {
        image: {
          src: 'https://via.placeholder.com/940x618',
          alt: 'Alt text'
        },
        cta: {
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
      FeaturedBigComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<FeaturedBigComponent v-bind="args" />'
  })
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const T=["FeaturedBig"];export{o as FeaturedBig,T as __namedExportsOrder,H as default};
