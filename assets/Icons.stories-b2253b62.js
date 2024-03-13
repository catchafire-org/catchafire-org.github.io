import{I as s}from"./Icons-4e045f61.js";import"./vue.esm-bundler-30d75a0c.js";import"./_plugin-vue_export-helper-c27b6911.js";const c={title:"Components"},n={args:{size:"Lg"},argTypes:{default:{control:"text",description:"Slot content",defaultValue:"face"},size:{control:{type:"radio"},defaultValue:"Lg",options:["Sm","Lg"]},className:{control:{type:"radio"},default:"material-icons",options:["material-icons","material-icons-outlined","material-icons-sharp","material-symbols-outlined","material-symbols-rounded"]}},render:a=>({components:{IconsComponent:s},setup(){return{args:a}},template:'<IconsComponent v-bind="args">{{ args.default }}</IconsComponent>'})};var o,e,t;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    size: 'Lg'
  },
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'face'
    },
    size: {
      control: {
        type: 'radio'
      },
      defaultValue: 'Lg',
      options: ['Sm', 'Lg']
    },
    className: {
      control: {
        type: 'radio'
      },
      default: 'material-icons',
      options: ['material-icons', 'material-icons-outlined', 'material-icons-sharp', 'material-symbols-outlined', 'material-symbols-rounded']
    }
  },
  render: args => ({
    components: {
      IconsComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<IconsComponent v-bind="args">{{ args.default }}</IconsComponent>'
  })
}`,...(t=(e=n.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const m=["Icons"];export{n as Icons,m as __namedExportsOrder,c as default};
