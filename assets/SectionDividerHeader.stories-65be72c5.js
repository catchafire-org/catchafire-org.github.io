import{S as i}from"./SectionDividerHeader-8ac70e8f.js";import"./vue.esm-bundler-30d75a0c.js";import"./_plugin-vue_export-helper-c27b6911.js";const c={title:"Components"},e={args:{opts:{theme:"light"}},argTypes:{default:{control:"text",description:"Slot content",defaultValue:"Section Header"}},render:o=>({components:{SectionDividerHeaderComponent:i},setup(){return{args:o}},template:`
      <div style="width: 100%; margin: 0 auto;">
        <SectionDividerHeaderComponent v-bind="args">{{ args.default }}</SectionDividerHeaderComponent>
      </div>
    `})};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    opts: {
      theme: 'light'
    }
  },
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Section Header'
    }
  },
  render: args => ({
    components: {
      SectionDividerHeaderComponent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="width: 100%; margin: 0 auto;">
        <SectionDividerHeaderComponent v-bind="args">{{ args.default }}</SectionDividerHeaderComponent>
      </div>
    \`
  })
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const p=["SectionDividerHeader"];export{e as SectionDividerHeader,p as __namedExportsOrder,c as default};
