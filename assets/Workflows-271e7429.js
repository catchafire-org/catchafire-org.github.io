import{j as s}from"./jsx-runtime-af4e3356.js";import{u as r}from"./index-ed03f49f.js";import"./chunk-HLWAVYOI-3355a6c0.js";import{M as i}from"./index-bb9a2ab0.js";/* empty css             */import"./iframe-2145c842.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-11d98b33.js";import"./get-b82f916e.js";import"./index-6c0bc028.js";import"./index-356e4a49.js";const c=""+new URL("fdlc-db9cdaf0.png",import.meta.url).href;function l(n){const e={h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...r(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(i,{title:"Docs/Workflows & Lifecycle"}),`
`,s.jsx(e.h1,{id:"workflows",children:"Workflows"}),`
`,s.jsx("table",{id:"workflow",children:s.jsxs("tr",{children:[s.jsxs("td",{children:[s.jsx(e.p,{children:"Pages"}),s.jsxs("ul",{children:[s.jsxs("li",{children:["create new folder under ",s.jsx("code",{children:"_Modules"})]}),s.jsxs("li",{children:[s.jsx(e.p,{children:"create entry point files"}),s.jsx("div",{class:"codeSample page",children:s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Index.vue ",s.jsx("br",{})]}),`
`,s.jsxs(e.li,{children:["_Index.scss ",s.jsx("br",{})]}),`
`,s.jsxs(e.li,{children:["Index.spec.js ",s.jsx("br",{})]}),`
`]})})]}),s.jsxs("li",{children:[s.jsx(e.p,{children:"create subpages and associated files"}),s.jsx("div",{class:"codeSample page",children:s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["ExPage1.vue ",s.jsx("br",{})]}),`
`,s.jsxs(e.li,{children:["_ExPage1.scss ",s.jsx("br",{})]}),`
`,s.jsxs(e.li,{children:["ExPage1.spec.js ",s.jsx("br",{})]}),`
`]})})]}),s.jsxs("li",{children:[s.jsx(e.p,{children:"create store, and router as needed"}),s.jsx("div",{class:"codeSample page",children:s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Router.js ",s.jsx("br",{})]}),`
`,s.jsxs(e.li,{children:["Store.js ",s.jsx("br",{})]}),`
`]})})]})]})]}),s.jsxs("td",{children:[s.jsx(e.p,{children:"Components"}),s.jsxs("ul",{children:[s.jsxs("li",{children:["create new folder under ",s.jsx("code",{children:"_Components"})]}),s.jsxs("li",{children:[s.jsx(e.p,{children:"create files"}),s.jsx("div",{class:"codeSample component",children:s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["ExComp.vue ",s.jsx("br",{})]}),`
`,s.jsxs(e.li,{children:["_ExComp.scss ",s.jsx("br",{})]}),`
`,s.jsxs(e.li,{children:["ExComp.stories.mdx ",s.jsx("br",{})]}),`
`,s.jsxs(e.li,{children:["ExComp.spec.js (opt) ",s.jsx("br",{})]}),`
`]})})]}),s.jsxs("li",{children:[s.jsx(e.p,{children:"run storybook"}),s.jsx("div",{class:"codeSample component",children:s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["$ cd frontend ",s.jsx("br",{})]}),`
`,s.jsx(e.li,{children:"$ yarn storybook"}),`
`]})})]})]})]}),s.jsxs("td",{children:[s.jsx(e.p,{children:"Tests"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsxs(e.p,{children:["⚠️ In progress ",s.jsx("br",{}),`
create component snapshots`]}),s.jsx("div",{class:"codeSample test",children:s.jsx(e.p,{children:"$ docker-compose exec vue npm test storybook.test.js"})})]}),s.jsxs("li",{children:[s.jsxs(e.p,{children:["create and run ",s.jsx("br",{})," page unit tests"]}),s.jsx("div",{class:"codeSample test",children:s.jsx(e.p,{children:"$ docker-compose exec vue npm run test"})})]})]})]}),s.jsxs("td",{children:[s.jsx(e.p,{children:"Builds & Deploys"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx(e.p,{children:"build stories"}),s.jsx("div",{class:"codeSample build",children:s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["$ cd frontend ",s.jsx("br",{})]}),`
`,s.jsx(e.li,{children:"$ yarn build-storybook"}),`
`]})})]}),s.jsxs("li",{children:[s.jsx(e.p,{children:"deploy stories"}),s.jsx("div",{class:"codeSample build",children:s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["$ yarn deploy-storybook ",s.jsx("br",{})]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx("a",{href:"https://catchafire-org.github.io/",target:"_blank",children:"https://catchafire-org.github.io/"}),`
`]}),`
`]})})]}),s.jsxs("li",{children:[s.jsxs(e.p,{children:["build components ",s.jsx("br",{})," and pages"]}),s.jsx("div",{class:"codeSample build",children:s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"$ docker-compose exec vue npm run build"}),`
`]})})]}),s.jsxs("li",{children:["commit and push from the ",s.jsx("code",{children:"django_caf"})," directory"]})]})]})]})}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h2,{id:"component-development-lifecycle",children:"Component Development Lifecycle"}),`
`,s.jsx("img",{src:c,alt:"Component dev lifecycle"})]})}function g(n={}){const{wrapper:e}={...r(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(l,{...n})}):l(n)}export{g as default};
