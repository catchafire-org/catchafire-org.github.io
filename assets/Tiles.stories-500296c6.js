import{g as v}from"./get-b82f916e.js";import{T}from"./Tile-a490406f.js";import{S as w}from"./SectionDividerHeader-8ac70e8f.js";import{a as m,o,c as s,b as d,h as C,w as x,t as u,d as i,F as E,j as H,n as l,e as M,f as N}from"./vue.esm-bundler-30d75a0c.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";import"./Icons-4e045f61.js";const b={components:{SectionDividerHeader:w,Tile:T},props:{isMobile:{type:Boolean},opts:{type:Object}},computed:{borderColor(){return this.opts.theme!==this.THEME.LIGHT&&this.opts.theme!==this.THEME.GRAY?"ids--color-border-base-text-on-interactive":""}},setup(){return{get:v,THEME:{LIGHT:"light",GRAY:"gray"}}}},L={class:"container ids--type-body ids__marketing-tiles-body"},S={class:"ids__marketing-tiles-title"},O={key:1,class:"row caf-px-md-1"},D=["innerHTML"],F={key:3,class:"caf-mt-5 text-center"},I=["href"];function V(a,c,t,e,G,h){const _=m("SectionDividerHeader"),f=m("Tile");return o(),s("div",{class:l(["ids__marketing-tiles ids__marketing--light container-fluid",`ids__marketing--${t.opts.theme} ${e.get(t.opts,"content.class","caf-pt-20 caf-pb-20")}`]),style:N(e.get(t.opts,"content.style"))},[d("div",L,[e.get(t.opts,"content.title")?(o(),C(_,{key:0,class:"caf-mb-4",borderColor:h.borderColor},{default:x(()=>[d("div",S,u(t.opts.content.title),1)]),_:1},8,["borderColor"])):i("",!0),e.get(t.opts,"content.tiles",[]).length?(o(),s("div",O,[(o(!0),s(E,null,H(t.opts.content.tiles,(n,y)=>(o(),s("div",{key:y,class:l(["caf-mb-4 caf-mb-md-0 caf-px-md-2",`col-md-${12/t.opts.content.tiles.length}`])},[M(f,{icon:n.icon,iconClassName:n.iconClassName,title:n.title,subtitle:n.subtitle,link:n.link,tracking:n.tracking},null,8,["icon","iconClassName","title","subtitle","link","tracking"])],2))),128))])):i("",!0),e.get(t.opts,"content.subtitle")?(o(),s("div",{key:2,class:"ids__marketing-tiles-subtitle ids--type-display-medium caf-mt-8 text-center",innerHTML:a.$sanitize(t.opts.content.subtitle)},null,8,D)):i("",!0),e.get(t.opts,"content.cta")?(o(),s("div",F,[e.get(t.opts,"content.cta")?(o(),s("a",{key:0,class:l(["btn btn-marketing caf-mb-8 caf-mb-md-0",(t.opts.theme!=="dark"&&t.opts.theme!=="blue"&&t.opts.content.cta.class,(t.opts.theme==="dark"||t.opts.theme==="blue")&&t.opts.content.cta.class,t.opts.content.cta.class)]),href:t.opts.content.cta.url,onClick:c[0]||(c[0]=n=>e.get(t.opts.tracking,"clickEvent")&&t.opts.tracking.clickEvent(n))},u(t.opts.content.cta.label),11,I)):i("",!0)])):i("",!0)])],6)}const j=B(b,[["render",V]]);b.__docgenInfo={exportName:"default",displayName:"Tiles",description:"",tags:{},props:[{name:"isMobile",type:{name:"boolean"}},{name:"opts",type:{name:"object"}}],sourceFiles:["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/Tiles/Tiles.vue"]};const J={title:"Blocks/Marketing"},r={args:{opts:{theme:"blue",content:{cta:{label:"Learn More",url:"/howitworks/companies"},tiles:[{title:"Nonprofit Orgs",subtitle:"Boost your programming capacity",link:"/howitworks/nonprofits"},{title:"Volunteers",subtitle:"Leverage your time and talent",link:"/howitworks/volunteers"},{title:"Funders",subtitle:"Reimagine your grantmaking",link:"/howitworks/foundations"}],title:"Over a decade of expertise",subtitle:"Interested in corporate philanthropy?"}}},render:a=>({components:{TilesComponent:j},setup(){return{args:a}},template:'<TilesComponent v-bind="args" />'})};var g,k,p;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    opts: {
      theme: 'blue',
      content: {
        cta: {
          label: 'Learn More',
          url: '/howitworks/companies'
        },
        tiles: [{
          title: 'Nonprofit Orgs',
          subtitle: 'Boost your programming capacity',
          link: '/howitworks/nonprofits'
        }, {
          title: 'Volunteers',
          subtitle: 'Leverage your time and talent',
          link: '/howitworks/volunteers'
        }, {
          title: 'Funders',
          subtitle: 'Reimagine your grantmaking',
          link: '/howitworks/foundations'
        }],
        title: 'Over a decade of expertise',
        subtitle: 'Interested in corporate philanthropy?'
      }
    }
  },
  render: args => ({
    components: {
      TilesComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<TilesComponent v-bind="args" />'
  })
}`,...(p=(k=r.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};const K=["Tiles"];export{r as Tiles,K as __namedExportsOrder,J as default};
