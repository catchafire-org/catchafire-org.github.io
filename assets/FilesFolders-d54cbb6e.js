import{j as s}from"./jsx-runtime-af4e3356.js";import{u as r}from"./index-ed03f49f.js";import"./chunk-HLWAVYOI-3355a6c0.js";import{M as t}from"./index-bb9a2ab0.js";/* empty css             */import"./iframe-2145c842.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-11d98b33.js";import"./get-b82f916e.js";import"./index-6c0bc028.js";import"./index-356e4a49.js";function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...r(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(t,{title:"Docs/Files & Folders"}),`
`,s.jsx(e.h1,{id:"files--folders",children:"Files & Folders"}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h2,{id:"naming-files",children:"Naming Files"}),`
`,s.jsxs(e.p,{children:["Files and folders should be named using title case (ie. ",s.jsx(e.code,{children:"ExampleComponent.vue"}),`) to
easily discern Vue3 components and styling from the older Vue2 code.`]}),`
`,s.jsxs(e.h4,{id:"top-level-folders-get-distinguished-further-with-an-_-prefix",children:["Top-level folders get distinguished further with an ",s.jsx(e.code,{children:"_"})," prefix:"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"_Components"})," - all Vue components (Presenational Components)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"_Docs"})," - all Ignite documentation"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"_Modules"})," - all Vue Pages (Container Components) and associated module files (store, router, etc)"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"_Tokens"})," contains all of the Design Tokens"]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h2,{id:"structure",children:"Structure"}),`
`,s.jsx(e.h3,{id:"modules--pages-structure",children:"Modules & Pages Structure"}),`
`,s.jsxs(e.p,{children:["Each module should have its own folder within ",s.jsx(e.code,{children:"_Modules"})," which contains the following:"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Index.vue"})," - entry page into the module"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"_Index.scss"})," - entry page styling *** ❗NOTE: All CSS files must be SASS partials, and therefore must have the ",s.jsx(e.code,{children:"_"})," prefix***"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Index.spec.js"})," - entry page unit testing"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Router.js"})," - module specific routes"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"Store.js"})," - module specific stores"]}),`
`,s.jsx(e.li,{children:"any other module specific code"}),`
`,s.jsx(e.li,{children:"any subpages associated with the Vue page and their respective styles and tests"}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h4,{id:"example-module-structure",children:"Example module structure:"}),`
`,s.jsx("table",{children:s.jsxs(e.p,{children:[`_Modules
`,s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("strong",{children:"Projects"})," folder"]})}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"Index.vue"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"_Index.scss"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"Index.spec.js"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"Route.js"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"Store.js"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"ProjectDetails.vue"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"_ProjectDetails.scss"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"ProjectDetails.spec.js"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"Wishlist.vue"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"_Wishlist.scss"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"Wishlist.spec.js"})]})]})}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"components-structure",children:"Components Structure"}),`
`,s.jsx(e.p,{children:"Each Vue component should have its own folder which contains the following:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:".vue"})," - component's template and JS"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:".scss"})," - component's styling"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:".stories.mdx"})," - component's documentation, also used to create snapshots"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:".spec.js"})," - optional unit testing, only for components that need it"]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h4,{id:"example-component-structure",children:"Example component structure:"}),`
`,s.jsx("table",{children:s.jsxs(e.p,{children:[`_Components
`,s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("strong",{children:"Badge"})," folder"]})}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"Badge.vue"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"_Badge.scss"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"Badge.stores.mdx"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"Badge.spec.js (optional)"})]})]})}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h3,{id:"grouping-structure",children:"Grouping Structure"}),`
`,s.jsx(e.p,{children:`Components of the same type should be placed in their respective folders, and then those
folders should be placed in one parent folder. This keeps things tidy and organized. It
also allows for base styles to be easily associated with similar components.`}),`
`,s.jsx("br",{}),`
`,s.jsx(e.h4,{id:"example-grouping-structure",children:"Example grouping structure:"}),`
`,s.jsx("table",{children:s.jsxs(e.p,{children:[`_Components
`,s.jsx("tr",{children:s.jsxs("td",{children:[s.jsx("strong",{children:"Cards"})," folder"]})}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{children:"_Cards.scss"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsxs("td",{children:[s.jsx("strong",{children:"BlogCard"})," folder"]})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{}),s.jsx("td",{children:"_BlogCard.scss"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{}),s.jsx("td",{children:"BlogCard.stories.mdx"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{}),s.jsx("td",{children:"BlogCard.vue"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsxs("td",{children:[s.jsx("strong",{children:"ProjectCard"})," folder"]})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{}),s.jsx("td",{children:"_ProjectCard.scss"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{}),s.jsx("td",{children:"ProjectCard.stories.mdx"})]}),`
`,s.jsxs("tr",{children:[s.jsx("td",{}),s.jsx("td",{}),s.jsx("td",{children:"ProjectCard.vue"})]})]})}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"BlogCard.vue"})," and ",s.jsx(e.code,{children:"ProjectCard.vue"})," will both import ",s.jsx(e.code,{children:"_Cards.scss"}),` and use the base styles
for cards.`]})]})}function f(n={}){const{wrapper:e}={...r(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(d,{...n})}):d(n)}export{f as default};
