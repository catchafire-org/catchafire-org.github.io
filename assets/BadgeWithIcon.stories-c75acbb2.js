import{I as l}from"./Icons-4e045f61.js";import{a as d,o as t,c as g,h as p,w as u,g as C,t as f,n as a,d as _,r as h}from"./vue.esm-bundler-30d75a0c.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const i={components:{Icons:l},props:{badgeClassName:{type:String},icon:{type:String},iconClassName:{type:String}},setup(){return{}}};function B(o,N,e,W,b,y){const m=d("Icons");return t(),g("div",{class:a(["ids__badgeWithIcon",e.badgeClassName])},[e.icon?(t(),p(m,{key:0,class:a(["caf-mr-1",e.iconClassName]),size:"Sm"},{default:u(()=>[C(f(e.icon),1)]),_:1},8,["class"])):_("",!0),h(o.$slots,"default")],2)}const x=I(i,[["render",B]]);i.__docgenInfo={exportName:"default",displayName:"BadgeWithIcon",description:"",tags:{},props:[{name:"badgeClassName",type:{name:"string"}},{name:"icon",type:{name:"string"}},{name:"iconClassName",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/BadgeWithIcon/BadgeWithIcon.vue"]};const T={title:"Components/Badges"},n={argTypes:{label:{control:"text"},badgeClassName:{control:"text"},icon:{control:"text"},iconClassName:{control:"text"}},args:{icon:"groups",label:"Good for groups"},render:o=>({components:{BadgeWithIconComponent:x},setup(){return{args:o}},template:'<BadgeWithIconComponent v-bind="args">{{ args.default }}</BadgeWithIconComponent>'})};var s,r,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  argTypes: {
    label: {
      control: 'text'
    },
    badgeClassName: {
      control: 'text'
    },
    icon: {
      control: 'text'
    },
    iconClassName: {
      control: 'text'
    }
  },
  args: {
    icon: 'groups',
    label: 'Good for groups'
  },
  render: args => ({
    components: {
      BadgeWithIconComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<BadgeWithIconComponent v-bind="args">{{ args.default }}</BadgeWithIconComponent>'
  })
}`,...(c=(r=n.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const w=["BadgeWithIcon"];export{n as BadgeWithIcon,w as __namedExportsOrder,T as default};
