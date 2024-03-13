import{o as u,c as m,b as l,r as f,n as _}from"./vue.esm-bundler-30d75a0c.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";function y(e){return{all:e=e||new Map,on:function(n,a){var t=e.get(n);t?t.push(a):e.set(n,[a])},off:function(n,a){var t=e.get(n);t&&(a?t.splice(t.indexOf(a)>>>0,1):e.set(n,[]))},emit:function(n,a){var t=e.get(n);t&&t.slice().map(function(o){o(a)}),(t=e.get("*"))&&t.slice().map(function(o){o(n,a)})}}}const h=y();function P(){return h}const d={compatConfig:{COMPONENT_V_MODEL:!1},props:{id:{type:String},checked:{type:Boolean},emitName:{type:String}},setup(e){const n=P();return{updateValue:()=>{n.emit(e.emitName,e.id)}}}},x=["for"],k=["id"],C={class:"w-100 ids--type-display-small"};function v(e,n,a,t,o,N){return u(),m("label",{class:_(["ids__pill ids--radius-full d-flex align-items-center justify-content-center caf-px-8",{"ids__pill--checked":a.checked}]),for:`radio_${a.id}`},[l("input",{class:"hide",type:"radio",name:"pills",id:`radio_${a.id}`,onInput:n[0]||(n[0]=(...p)=>t.updateValue&&t.updateValue(...p))},null,40,k),l("span",C,[f(e.$slots,"default")])],10,x)}const V=g(d,[["render",v]]);d.__docgenInfo={exportName:"default",displayName:"Pill",description:"",tags:{},props:[{name:"id",type:{name:"string"}},{name:"checked",type:{name:"boolean"}},{name:"emitName",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/Pill/Pill.vue"]};const E={title:"Components"},s={args:{checked:!1},argTypes:{default:{control:"text",description:"Slot content",defaultValue:"Pill name"},checked:{control:{type:"radio"},defaultValue:!1,options:[!0,!1]}},render:e=>({components:{PillComponent:V},setup(){return{args:e}},template:`
      <div style="display: flex; justify-content: center; width: 300px; margin: 0 auto;">
        <PillComponent v-bind="args">{{ args.default }}</PillComponent>
      </div>`})};var i,r,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    checked: false
  },
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Pill name'
    },
    checked: {
      control: {
        type: 'radio'
      },
      defaultValue: false,
      options: [true, false]
    }
  },
  render: args => ({
    components: {
      PillComponent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; justify-content: center; width: 300px; margin: 0 auto;">
        <PillComponent v-bind="args">{{ args.default }}</PillComponent>
      </div>\`
  })
}`,...(c=(r=s.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const O=["Pill"];export{s as Pill,O as __namedExportsOrder,E as default};
