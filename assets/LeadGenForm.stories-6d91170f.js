import{k as V,s as q,a as T,o as t,c as n,b as d,d as l,u as C,n as m,F as h,j as y,v as u,x as v,y as x,t as c,e as U,w as S,g as N,f as O}from"./vue.esm-bundler-30d75a0c.js";import{g as p}from"./get-b82f916e.js";import{I as z}from"./Icons-4e045f61.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";const M={props:{opts:{type:Object}},components:{Icons:z},setup(i){const _=V(null),a=q({fields:p(i.opts,"content.form",[])}),o=window.__INITDATA__.current_site;function f(){return a.fields=a.fields.map(s=>s.required?{...s,error:p(s.validation,"match")?!s.validation.match.test(s.value):s.value===""}:{...s,error:!1}),a.fields.find(s=>s.error)}function F(){return Object.fromEntries(a.fields.map(e=>[e.name,e.value]))}function g(){f()||(p(i.opts,"store.submit")&&i.opts.store.submit(F()),p(i.opts,"tracking.clickEvent")&&i.opts.tracking.clickEvent())}return{get:p,wrapper:_,form:a,current_site:o,submitForm:g}}},I={class:"container text-center ids--type-body"},H=["innerHTML"],j=["innerHTML"],A={class:"row"},B=["placeholder","onUpdate:modelValue"],W=["onUpdate:modelValue","title"],P={value:"",disabled:"",selected:""},D=["value"],R=["placeholder","onUpdate:modelValue"],Y={key:3},J={key:0,class:"col-md-6"},K=["placeholder","onUpdate:modelValue"],Q=["onUpdate:modelValue","title"],X={value:"",disabled:"",selected:""},Z=["value"],$=["placeholder","onUpdate:modelValue"],ee={key:3},te={key:1,class:"container text-center ids__marketing-leadGenForm-success ids__marketing-title caf-mt-20"},ne=["innerHTML"],ae={key:1};function oe(i,_,a,o,f,F){const g=T("Icons");return t(),n("div",{ref:"wrapper",class:m(["ids__marketing-leadGenForm ids__marketing--light container-fluid",`ids__marketing--${a.opts.theme} ${o.get(a.opts,"content.class","caf-pt-20 caf-pb-20")}`]),style:O(o.get(a.opts,"content.style"))},[d("div",I,[o.get(a.opts,"content.title")?(t(),n("h2",{key:0,class:"ids__marketing-title ids--type-marketing-xl-expressive caf-mb-4",innerHTML:i.$sanitize(a.opts.content.title)},null,8,H)):l("",!0),o.get(a.opts,"content.subtitle")&&!o.get(a.opts.store,"isSubmitted.value")?(t(),n("p",{key:1,class:"ids__marketing-subtitle ids--type-paragraph-big caf-mx-5 caf-mb-9",innerHTML:i.$sanitize(a.opts.content.subtitle)},null,8,j)):l("",!0)]),o.get(a.opts.store,"isSubmitted.value")?(t(),n("div",te,[U(g,{size:"Sm",class:"caf-mr-2","aria-hidden":"true"},{default:S(()=>[N(" check_circle ")]),_:1}),o.get(a.opts,"content.confirmation")?(t(),n("p",{key:0,innerHTML:i.$sanitize(a.opts.content.confirmation)},null,8,ne)):(t(),n("span",ae," Thank you for your interest in partnering with "+c(o.current_site.name)+"! A member of our team will be in touch shortly. ",1))])):(t(),n("form",{key:0,class:"container text-center ids--type-body",onSubmit:_[0]||(_[0]=C((...e)=>o.submitForm&&o.submitForm(...e),["prevent"]))},[d("div",A,[d("div",{class:m(["col-md-6",{"col-md-12 d-flex flex-column flex-md-row":!a.opts.visible.allFields}])},[(t(!0),n(h,null,y(o.form.fields.slice(0,3),(e,s)=>(t(),n("div",{key:s,class:m(["ids__marketing-leadGenForm-inputContainer",{error:e.error}])},[e.type==="input"?u((t(),n("input",{key:0,type:"text",class:m(["caf-mb-6",{"caf-mr-md-5":!a.opts.visible.allFields&&s===0}]),placeholder:e.placeholder,"onUpdate:modelValue":r=>e.value=r},null,10,B)),[[v,e.value]]):l("",!0),e.type==="select"?u((t(),n("select",{key:1,class:"caf-mb-6","onUpdate:modelValue":r=>e.value=r,title:e.title},[d("option",P,c(e.options[0].label),1),(t(!0),n(h,null,y(e.options.splice(1),(r,k)=>(t(),n("option",{value:r.value,key:k},c(r.label),9,D))),128))],8,W)),[[x,e.value]]):l("",!0),e.type==="textarea"?u((t(),n("textarea",{key:2,class:"ids__marketing-leadGenForm-message form-control",placeholder:e.placeholder,"onUpdate:modelValue":r=>e.value=r},null,8,R)),[[v,e.value]]):l("",!0),e.error?(t(),n("small",Y,c(o.get(e,"validation.errorMsg","Field cannot be empty")),1)):l("",!0)],2))),128))],2),a.opts.visible.allFields?(t(),n("div",J,[(t(!0),n(h,null,y(o.form.fields.slice(3,5),(e,s)=>(t(),n("div",{key:s,class:m(["ids__marketing-leadGenForm-inputContainer",{error:e.error}])},[e.type==="input"?u((t(),n("input",{key:0,type:"text",class:m(["form-control caf-mb-6",{"caf-mr-md-5":!a.opts.visible.allFields&&s===0}]),placeholder:e.placeholder,"onUpdate:modelValue":r=>e.value=r},null,10,K)),[[v,e.value]]):l("",!0),e.type==="select"?u((t(),n("select",{key:1,class:"form-control caf-mb-6","onUpdate:modelValue":r=>e.value=r,title:e.title},[d("option",X,c(e.options[0].label),1),(t(!0),n(h,null,y(e.options.slice(1,e.options.length),(r,k)=>(t(),n("option",{value:r.value,key:k},c(r.label),9,Z))),128))],8,Q)),[[x,e.value]]):l("",!0),e.type==="textarea"?u((t(),n("textarea",{key:2,class:"ids__marketing-leadGenForm-message form-control",placeholder:e.placeholder,"onUpdate:modelValue":r=>e.value=r},null,8,$)),[[v,e.value]]):l("",!0),e.error?(t(),n("small",ee,c(o.get(e,"validation.errorMsg","Field cannot be empty")),1)):l("",!0)],2))),128))])):l("",!0)]),o.get(a.opts,"content.cta")?(t(),n("button",{key:0,class:m(["ids__marketing-leadGenForm-submit btn btn-primary btn-marketing caf-mt-9",a.opts.content.cta.class]),type:"submit"},c(a.opts.content.cta.label),3)):l("",!0)],32))],6)}const re=E(M,[["render",oe]]);M.__docgenInfo={exportName:"default",displayName:"LeadGenForm",description:"",tags:{},props:[{name:"opts",type:{name:"object"}}],sourceFiles:["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/LeadGenForm/LeadGenForm.vue"]};const ue={title:"Blocks/Marketing"},b={args:{opts:{theme:"light",content:{cta:{label:"Request a demo",url:"/"},form:[{type:"input",name:"name",placeholder:"Name",value:"",required:!0},{type:"input",name:"company_name",placeholder:"Organization Name",value:"",required:!0},{type:"input",name:"email",placeholder:"Email",value:"",validation:{match:"",errorMsg:"Please enter a valid email"},required:!0},{type:"select",name:"company_type",options:[{label:"What are you interested in?"},{label:"Option 1",value:1},{label:"Option 2",value:2},{label:"Option 3",value:3}],value:"",required:!0,title:"What are you interested in?"},{type:"textarea",name:"registration_comment",placeholder:"Message",value:""}],subtitle:"You can equip nonprofits in your community with high-quality operational support that delivers immediate impact and long-term resiliency. Contact us to learn more.",successText:"Thank you for your interest in partnering with Catchafire! A member of our team will be in touch shortly.",title:"Partner with us"},visible:{allFields:!0},store:{submit:()=>{},isSubmitting:()=>{},isSubmitted:()=>{}}}},render:i=>({components:{LeadGenFormComponent:re},setup(){return{args:i}},template:'<LeadGenFormComponent v-bind="args" />'})};var w,G,L;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    opts: {
      theme: 'light',
      content: {
        cta: {
          label: 'Request a demo',
          url: '/'
        },
        form: [{
          type: 'input',
          name: 'name',
          placeholder: 'Name',
          value: '',
          required: true
        }, {
          type: 'input',
          name: 'company_name',
          placeholder: 'Organization Name',
          value: '',
          required: true
        }, {
          type: 'input',
          name: 'email',
          placeholder: 'Email',
          value: '',
          validation: {
            match: '',
            errorMsg: 'Please enter a valid email'
          },
          required: true
        }, {
          type: 'select',
          name: 'company_type',
          options: [{
            label: 'What are you interested in?'
          }, {
            label: 'Option 1',
            value: 1
          }, {
            label: 'Option 2',
            value: 2
          }, {
            label: 'Option 3',
            value: 3
          }],
          value: '',
          required: true,
          title: 'What are you interested in?'
        }, {
          type: 'textarea',
          name: 'registration_comment',
          placeholder: 'Message',
          value: ''
        }],
        subtitle: 'You can equip nonprofits in your community with high-quality operational support that delivers immediate impact and long-term resiliency. Contact us to learn more.',
        successText: 'Thank you for your interest in partnering with Catchafire! A member of our team will be in touch shortly.',
        title: 'Partner with us'
      },
      visible: {
        allFields: true
      },
      store: {
        submit: () => {},
        isSubmitting: () => {},
        isSubmitted: () => {}
      }
    }
  },
  render: args => ({
    components: {
      LeadGenFormComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<LeadGenFormComponent v-bind="args" />'
  })
}`,...(L=(G=b.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const de=["LeadGenForm"];export{b as LeadGenForm,de as __namedExportsOrder,ue as default};
