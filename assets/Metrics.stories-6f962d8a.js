import{i as v,c as n,b as o,n as r,d as i,F as h,j as p,t as N,f as C,o as s}from"./vue.esm-bundler-30d75a0c.js";import{g as m}from"./get-b82f916e.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";const T={props:{opts:{type:Object}},setup(a){const f=v(()=>m(a,"opts.content.firstMetrics",[]).length===5),e=v(()=>m(a,"opts.content.secondMetrics",[]).length===5);return{get:m,isFirstFiveCards:f,isSecondFiveCards:e}}},L={class:"container text-center ids--type-body"},x=["innerHTML"],H=["innerHTML"],K={key:2,class:"row justify-content-center"},w=["innerHTML"],j=["innerHTML"],z={key:3,class:"row justify-content-center caf-mt-5"},S=["innerHTML"],O=["innerHTML"],B=["href"];function D(a,f,e,t,E,V){return s(),n("div",{class:r(["ids__marketing-metrics ids__marketing--light container-fluid",`ids__marketing--${e.opts.theme} ${t.get(e.opts,"content.class","caf-pt-20 caf-pb-20")}`]),style:C(t.get(e.opts,"content.style"))},[o("div",L,[t.get(e.opts,"content.title")?(s(),n("h2",{key:0,class:r(["ids__marketing-title ids--type-marketing-xl-expressive caf-mb-4",{"caf-mb-12":!t.get(e.opts,"content.subtitle")}]),innerHTML:a.$sanitize(e.opts.content.title)},null,10,x)):i("",!0),t.get(e.opts,"content.subtitle")?(s(),n("p",{key:1,class:"ids__marketing-subtitle ids--type-paragraph-big caf-mb-12",innerHTML:a.$sanitize(e.opts.content.subtitle)},null,8,H)):i("",!0),t.get(e.opts,"content.firstMetrics")?(s(),n("div",K,[(s(!0),n(h,null,p(e.opts.content.firstMetrics,(c,u)=>(s(),n("div",{key:u,class:r(["d-flex",t.isFirstFiveCards?"col-custom":"col-md-3"])},[o("div",{class:r(["metric d-flex flex-column justify-content-center",c.class||`caf-py-10 caf-mb-5 caf-mb-md-0 ${t.isFirstFiveCards?"caf-px-5":""}`])},[o("h4",{class:r(["metric-value",t.isFirstFiveCards?"ids--type-display-large":"ids--type-display-xl"]),innerHTML:a.$sanitize(c.value)},null,10,w),o("p",{class:"metric-desc ids--type-caption",innerHTML:a.$sanitize(c.desc)},null,8,j)],2)],2))),128))])):i("",!0),t.get(e.opts,"content.secondMetrics")?(s(),n("div",z,[(s(!0),n(h,null,p(e.opts.content.secondMetrics,(c,u)=>(s(),n("div",{key:u,class:r(["d-flex",t.isSecondFiveCards?"col-custom":"col-md-3"])},[o("div",{class:r(["metric d-flex d-lg-block flex-column justify-content-center",c.class||`caf-py-10 caf-mb-5 ${t.isSecondFiveCards?"caf-px-5":""}`])},[o("h4",{class:r(["metric-value",t.isSecondFiveCards?"ids--type-display-large":"ids--type-display-xl"]),innerHTML:a.$sanitize(c.value)},null,10,S),o("p",{class:"metric-desc ids--type-caption",innerHTML:a.$sanitize(c.desc)},null,8,O)],2)],2))),128))])):i("",!0),t.get(e.opts,"content.cta")?(s(),n("a",{key:4,class:r(["btn btn-primary btn-marketing caf-mt-9",(e.opts.theme!=="dark"&&e.opts.theme!=="blue"&&e.opts.content.cta.class,(e.opts.theme==="dark"||e.opts.theme==="blue")&&e.opts.content.cta.class,e.opts.content.cta.class)]),href:e.opts.content.cta.url},N(e.opts.content.cta.label),11,B)):i("",!0)])],6)}const A=F(T,[["render",D]]);T.__docgenInfo={exportName:"default",displayName:"Metrics",description:"",tags:{},props:[{name:"opts",type:{name:"object"}}],sourceFiles:["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/Metrics/Metrics.vue"]};const G={title:"Blocks/Marketing/Metrics",component:A},l={args:{opts:{theme:"light",content:{firstMetrics:[{value:"10K+",desc:"Number of nonprofits <br /> matched"},{value:"49K+",desc:"Total matches"},{value:"1M+",desc:"Number of volunteer <br /> hours donated"}],secondMetrics:[{value:"$195M+",desc:"Total nonprofit <br /> savings"},{value:"9.5/10",desc:"Nonprofit users <br /> rate Catchafire"},{value:"5 days",desc:"Average match time <br /> for calls and projects"}],subtitle:"Our platform paves the way for instant, tangible impact.",title:"Delivering results with a proven track record"}}}},d={args:{opts:{theme:"light",content:{firstMetrics:[{value:"10K+",desc:"Number of nonprofits matched"},{value:"49K+",desc:"Total matches"},{value:"1M+",desc:"Number of volunteer hours donated"},{value:"$9M+",desc:"Total nonprofit savings"},{value:"9.5",desc:"Nonprofit users rate Catchafire"}],secondMetrics:[{value:"10K+",desc:"Number of nonprofits matched"},{value:"49K+",desc:"Total matches"},{value:"1M+",desc:"Number of volunteer hours donated"},{value:"$9M+",desc:"Total nonprofit saving"},{value:"9.5",desc:"Nonprofit users rate Catchafire"}],subtitle:"Our platform paves the way for instant, tangible impact.",title:"Delivering results with a proven track record",cta:{label:"Label",url:"/"}}}}};var b,g,M;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    opts: {
      theme: 'light',
      content: {
        firstMetrics: [{
          value: '10K+',
          desc: 'Number of nonprofits <br /> matched'
        }, {
          value: '49K+',
          desc: 'Total matches'
        }, {
          value: '1M+',
          desc: 'Number of volunteer <br /> hours donated'
        }],
        secondMetrics: [{
          value: '$195M+',
          desc: 'Total nonprofit <br /> savings'
        }, {
          value: '9.5/10',
          desc: 'Nonprofit users <br /> rate Catchafire'
        }, {
          value: '5 days',
          desc: 'Average match time <br /> for calls and projects'
        }],
        subtitle: 'Our platform paves the way for instant, tangible impact.',
        title: 'Delivering results with a proven track record'
      }
    }
  }
}`,...(M=(g=l.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var y,_,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    opts: {
      theme: 'light',
      content: {
        firstMetrics: [{
          value: '10K+',
          desc: 'Number of nonprofits matched'
        }, {
          value: '49K+',
          desc: 'Total matches'
        }, {
          value: '1M+',
          desc: 'Number of volunteer hours donated'
        }, {
          value: '$9M+',
          desc: 'Total nonprofit savings'
        }, {
          value: '9.5',
          desc: 'Nonprofit users rate Catchafire'
        }],
        secondMetrics: [{
          value: '10K+',
          desc: 'Number of nonprofits matched'
        }, {
          value: '49K+',
          desc: 'Total matches'
        }, {
          value: '1M+',
          desc: 'Number of volunteer hours donated'
        }, {
          value: '$9M+',
          desc: 'Total nonprofit saving'
        }, {
          value: '9.5',
          desc: 'Nonprofit users rate Catchafire'
        }],
        subtitle: 'Our platform paves the way for instant, tangible impact.',
        title: 'Delivering results with a proven track record',
        cta: {
          label: 'Label',
          url: '/'
        }
      }
    }
  }
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const J=["ThreeCards","FiveCards"];export{d as FiveCards,l as ThreeCards,J as __namedExportsOrder,G as default};
