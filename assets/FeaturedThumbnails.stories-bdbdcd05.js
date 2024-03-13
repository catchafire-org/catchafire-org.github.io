import{g}from"./get-b82f916e.js";import{o as e,c as n,b as r,d as i,n as c,F as p,j as _,t as M,f}from"./vue.esm-bundler-30d75a0c.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";const h={props:{isMobile:{type:Boolean},opts:{type:Object}},setup(){return{get:g}}},T={class:"container text-center ids--type-body"},y=["innerHTML"],k=["innerHTML"],v=["src","alt"],x=["innerHTML"],S=["href"];function I(s,B,t,a,O,q){return e(),n("div",{class:c(["ids__marketing-featuredThumbnails ids__marketing--light container-fluid",`ids__marketing--${t.opts.theme} ${a.get(t.opts,"content.class","caf-pt-20 caf-pb-20")}`]),style:f(a.get(t.opts,"content.style"))},[r("div",T,[a.get(t.opts,"content.title")?(e(),n("h2",{key:0,class:"ids__marketing-title ids--type-marketing-xl-expressive caf-mb-4",innerHTML:s.$sanitize(t.opts.content.title)},null,8,y)):i("",!0),a.get(t.opts,"content.subtitle")?(e(),n("p",{key:1,class:"ids__marketing-subtitle ids--type-paragraph-big caf-mb-12",innerHTML:s.$sanitize(t.opts.content.subtitle)},null,8,k)):i("",!0),a.get(t.opts,"content.thumbnails")?(e(),n("div",{key:2,class:c(["d-flex flex-column flex-md-row justify-content-center caf-ml-md-5",{largeImages:t.opts.visible.twoOnly&&!t.isMobile}])},[(e(!0),n(p,null,_(t.opts.visible.twoOnly?t.opts.content.thumbnails.slice(0,2):t.opts.content.thumbnails,(l,b)=>(e(),n("div",{key:b,class:"caf-mb-5 caf-mr-md-5"},[r("img",{class:"image caf-mb-5",src:l.src,alt:l.alt,height:"316",width:"300"},null,8,v),l.caption?(e(),n("p",{key:0,class:"ids__marketing-caption ids--type-caption text-left",innerHTML:s.$sanitize(l.caption)},null,8,x)):i("",!0)]))),128))],2)):i("",!0),a.get(t.opts,"content.cta")?(e(),n("a",{key:3,class:c(["btn btn-marketing caf-mt-7",(t.opts.theme!=="dark"&&t.opts.theme!=="blue"&&t.opts.content.cta.class,(t.opts.theme==="dark"||t.opts.theme==="blue")&&t.opts.content.cta.class,t.opts.content.cta.class)]),href:t.opts.content.cta.url},M(t.opts.content.cta.label),11,S)):i("",!0)])],6)}const F=A(h,[["render",I]]);h.__docgenInfo={exportName:"default",displayName:"FeaturedThumbnails",description:"",tags:{},props:[{name:"isMobile",type:{name:"boolean"}},{name:"opts",type:{name:"object"}}],sourceFiles:["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/FeaturedThumbnails/FeaturedThumbnails.vue"]};const U={title:"Blocks/Marketing"},o={args:{opts:{theme:"light",content:{cta:{label:"Label",url:"/"},subtitle:"Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.",title:"Enim gravida sollicitudin aliquam.",thumbnails:[{src:"https://via.placeholder.com/300x316",caption:"SIT AMET MORBI QUAM MASSA",alt:"Alt text"},{src:"https://via.placeholder.com/300x316",caption:"SIT AMET MORBI QUAM MASSA",alt:"Alt text"},{src:"https://via.placeholder.com/300x316",caption:"SIT AMET MORBI QUAM MASSA",alt:"Alt text"}]},visible:{twoOnly:!1}}},render:s=>({components:{FeaturedThumbnailsComponent:F},setup(){return{args:s}},template:'<FeaturedThumbnailsComponent v-bind="args" />'})};var u,m,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    opts: {
      theme: 'light',
      content: {
        cta: {
          label: 'Label',
          url: '/'
        },
        subtitle: 'Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.',
        title: 'Enim gravida sollicitudin aliquam.',
        thumbnails: [{
          src: 'https://via.placeholder.com/300x316',
          caption: 'SIT AMET MORBI QUAM MASSA',
          alt: 'Alt text'
        }, {
          src: 'https://via.placeholder.com/300x316',
          caption: 'SIT AMET MORBI QUAM MASSA',
          alt: 'Alt text'
        }, {
          src: 'https://via.placeholder.com/300x316',
          caption: 'SIT AMET MORBI QUAM MASSA',
          alt: 'Alt text'
        }]
      },
      visible: {
        twoOnly: false
      }
    }
  },
  render: args => ({
    components: {
      FeaturedThumbnailsComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<FeaturedThumbnailsComponent v-bind="args" />'
  })
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const C=["FeaturedThumbnails"];export{o as FeaturedThumbnails,C as __namedExportsOrder,U as default};
