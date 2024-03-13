import{o as l,c as i,r as c,n as p}from"./vue.esm-bundler-30d75a0c.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const s={props:{role:{type:String},category:{type:String},size:{type:String}}};function b(o,g,n,u,y,f){return l(),i("div",{href:"",class:p(["btn",{[n.role]:n.role,[n.category]:n.category,[n.size]:n.size}])},[c(o.$slots,"default")],2)}const d=m(s,[["render",b]]);s.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"role",type:{name:"string"}},{name:"category",type:{name:"string"}},{name:"size",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/Buttons/Button.vue"]};const h={title:"Components/Button"},t={args:{label:"Primary Action",role:"btn-primary",category:"btn",size:""},argTypes:{label:{control:"text"},role:{control:{type:"radio"},options:["btn-primary","btn-hollow-on-lc","btn-hollow-on-hc","btn-option"]},category:{control:{type:"radio"},options:["btn","btn-marketing"]},size:{control:{type:"radio"},options:["btn-sm","btn-md","btn-block"]}},render:o=>({components:{ButtonComponent:d},setup(){return{args:o}},template:'<ButtonComponent v-bind="args">{{ args.label }}</ButtonComponent>'})};var e,r,a;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    label: 'Primary Action',
    role: 'btn-primary',
    category: 'btn',
    size: ''
  },
  argTypes: {
    label: {
      control: 'text'
    },
    role: {
      control: {
        type: 'radio'
      },
      options: ['btn-primary', 'btn-hollow-on-lc', 'btn-hollow-on-hc', 'btn-option']
    },
    category: {
      control: {
        type: 'radio'
      },
      options: ['btn', 'btn-marketing']
    },
    size: {
      control: {
        type: 'radio'
      },
      options: ['btn-sm', 'btn-md', 'btn-block']
    }
  },
  render: args => ({
    components: {
      ButtonComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<ButtonComponent v-bind="args">{{ args.label }}</ButtonComponent>'
  })
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const z=["Button"];export{t as Button,z as __namedExportsOrder,h as default};
