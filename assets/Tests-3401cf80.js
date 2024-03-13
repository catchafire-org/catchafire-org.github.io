import{j as e}from"./jsx-runtime-af4e3356.js";import{u as o}from"./index-ed03f49f.js";import"./chunk-HLWAVYOI-3355a6c0.js";import{M as i}from"./index-bb9a2ab0.js";/* empty css             */import"./iframe-2145c842.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-11d98b33.js";import"./get-b82f916e.js";import"./index-6c0bc028.js";import"./index-356e4a49.js";function t(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Tests"}),`
`,e.jsx(n.h1,{id:"testing-components",children:"Testing Components"}),`
`,e.jsx(n.p,{children:`Vue pages are composed of smaller presentational (dumb) components. Testing
presentational components is very trivial and mostly concerned with layout changes.
In most cases, it is sufficient to only apply snapshot tests to presentational components,
while in all cases, Vue pages should only have unit tests.`}),`
`,e.jsx(n.p,{children:"Note: snapshot and unit tests are both run inside of Docker"}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.h2,{id:"testing-vue-components---️-in-progress",children:["Testing Vue components - ",e.jsx(n.em,{children:e.jsx(n.strong,{children:"⚠️ In progress"})})]}),`
`,e.jsx(n.p,{children:"Do the following to run snapshot tests:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["open terminal to ",e.jsx(n.code,{children:"django_caf"})," directory"]}),`
`,e.jsxs(n.li,{children:["$ ",e.jsx(n.code,{children:"docker-compose exec vue npm test storybook.test.js"})]}),`
`,e.jsxs(n.li,{children:["if you have to update a test, delete ",e.jsx(n.code,{children:"storybook.test.js.snap"})," from ",e.jsx(n.code,{children:"frontend/__snapshots__"})," and rerun snapshots"]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"testing-vue-pages",children:"Testing Vue pages"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["create a ",e.jsx(n.code,{children:".spec.js"})," file within the same directory as the ",e.jsx(n.code,{children:".vue"})," file. (usually in ",e.jsx(n.code,{children:"_Modules"}),")"]}),`
`,e.jsx(n.li,{children:"add your tests. See examples below."}),`
`,e.jsxs(n.li,{children:["$ ",e.jsx(n.code,{children:"docker-compose exec vue npm run test"})]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:"Coming soon"})]})}function f(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{f as default};
