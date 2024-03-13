import{o as c,c as u,r as d,n as i}from"./vue.esm-bundler-30d75a0c.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const n={props:{status:String}};function p(s,m,e,j,S,P){return c(),u("div",{class:i({[e.status]:e.status})},[d(s.$slots,"default")],2)}const l=_(n,[["render",p]]);n.__docgenInfo={exportName:"default",displayName:"ProjectStatus",description:"",tags:{},props:[{name:"status",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/ProjectStatus/ProjectStatus.vue"]};const C={title:"Components"},t={args:{label:"Project status",status:"ids__ProjectStatus--draft"},argTypes:{status:{control:{type:"radio"},options:["ids__ProjectStatus--draft","ids__ProjectStatus--sent","ids__ProjectStatus--completed","ids__ProjectStatus--inprogress","ids__ProjectStatus--live","ids__ProjectStatus--cancelled"]}},render:s=>({components:{ProjectStatusComponent:l},setup(){return{args:s}},template:'<ProjectStatusComponent v-bind="args">{{ args.label }}</ProjectStatusComponent>'})};var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'Project status',
    status: 'ids__ProjectStatus--draft'
  },
  argTypes: {
    status: {
      control: {
        type: 'radio'
      },
      options: ['ids__ProjectStatus--draft', 'ids__ProjectStatus--sent', 'ids__ProjectStatus--completed', 'ids__ProjectStatus--inprogress', 'ids__ProjectStatus--live', 'ids__ProjectStatus--cancelled']
    }
  },
  render: args => ({
    components: {
      ProjectStatusComponent
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ProjectStatusComponent v-bind="args">{{ args.label }}</ProjectStatusComponent>\`
  })
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const b=["ProjectStatus"];export{t as ProjectStatus,b as __namedExportsOrder,C as default};
