import{B as r}from"./Badge-bdc443f9.js";import"./vue.esm-bundler-30d75a0c.js";import"./_plugin-vue_export-helper-c27b6911.js";const g={title:"Components/Badges"},e={argTypes:{default:{control:"text",description:"Slot content",defaultValue:"Badge"}},render:a=>({components:{BadgeComponent:r},setup(){return{args:a}},template:'<BadgeComponent v-bind="args">{{ args.default }}</BadgeComponent>'})};var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Badge'
    }
  },
  render: args => ({
    components: {
      BadgeComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<BadgeComponent v-bind="args">{{ args.default }}</BadgeComponent>'
  })
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const m=["Badge"];export{e as Badge,m as __namedExportsOrder,g as default};
