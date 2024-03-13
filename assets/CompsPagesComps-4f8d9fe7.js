import{j as e}from"./jsx-runtime-af4e3356.js";import{u as s}from"./index-ed03f49f.js";import"./chunk-HLWAVYOI-3355a6c0.js";import{M as r}from"./index-bb9a2ab0.js";/* empty css             */import"./iframe-2145c842.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-11d98b33.js";import"./get-b82f916e.js";import"./index-6c0bc028.js";import"./index-356e4a49.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Components/Pages vs Components"}),`
`,e.jsx(n.h1,{id:"pages-vs-components",children:"Pages vs Components"}),`
`,e.jsxs(n.p,{children:[`Components are the building blocks of the Vue app. With the upgrade to Vue 3, we
are now able to take advantage of the more declarative syntax of Vue 3's
`,e.jsx(n.a,{href:"https://v3.vuejs.org/guide/composition-api-introduction.html",rel:"nofollow",children:e.jsx(n.strong,{children:"composition API"})}),`.
All new pages and components should use the composition API.
Existing pages and components should be refactored to use the composition
API when the opportunity arises.`]}),`
`,e.jsx(n.p,{children:"View the composition API cheatsheet: https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"vue-pages-container-components",children:"Vue Pages (Container components)"}),`
`,e.jsx(n.p,{children:`Vue pages are basically large Vue components that are composed of smaller
components.`}),`
`,e.jsx(n.p,{children:`Vue pages are not concerned with how things look but only with fetching data from an
API, interacting with the Vuex Store, and passing props down to child components.`}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"vue-components-presentational-components",children:"Vue Components (Presentational components)"}),`
`,e.jsx(n.p,{children:`In contrast to Vue pages, Vue components are considered as "dumb components" because
they do nothing but render themselves according to the props that are passed to it
from the parent.`}),`
`,e.jsx(n.p,{children:`A Vue component can also be composed of and pass props to smaller child components,
but it should never fetch data or interact with the Vuex Store.`}),`
`,e.jsx(n.p,{children:`If a Vue component needs to fetch/update data or global state, it needs to send a request
to the Vue page that holds it.`}),`
`,e.jsxs(n.p,{children:[`The concept behind this interaction of Vue pages and Vue components is referred to as
`,e.jsx(n.a,{href:"https://medium.com/quick-code/vue-communication-patterns-an-intro-to-props-down-and-events-up-pattern-d53340d2c94",rel:"nofollow",children:e.jsx(n.strong,{children:"Props down, Events Up"})}),"."]}),`
`,e.jsx("br",{}),`
`,e.jsxs("div",{class:"propsUpDown",children:[e.jsx("div",{class:"component parent",children:e.jsx("code",{children:'<ChildComponent :prop1="value1" :prop2="value2" />'})}),e.jsx("div",{class:"connector"}),e.jsx("div",{class:"component child",children:e.jsx("code",{children:'$emitter.emit("do-something")'})})]}),`
`,e.jsx(n.h2,{id:"code-example",children:"Code example"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"_Modules/Projects/Projects.vue"})}),`
`,e.jsx(n.p,{children:`This page component handles fetching and storing data, but doesn't concern itself
with how child components are rendered. It simply passes props down to the child,
allowing the child to render itself accordingly. This component also listens for
requests from the child component to manipulate data, and handle routing.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template>
  <BaseCard1
    :project="project"
  >
  ></BaseCard1>
</template>

<script>
  import { inject } from 'vue'
  export default {
    // alot of code is assumed and excluded to simplify this example
    setup(props) {
      const emitter = inject('emitter');   // Inject \`emitter\`
      emitter.on('favorite-project', (projectId) => {   // *Listen* for event
        favoriteProject(projectId)
      });

      const project = ref({
        id: 1,
        title: 'Example Project',
        favorite: false
      })

      const favoriteProject = async (projectId) => {
        await fetch(save_to_favorites_api_endpoint, projectId)
        project.value = {
          ...project.value,
          favorite: true
        }
      }

      return {
        favoriteProject,
        project
      }
    }
  }
<\/script>

`})}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"_Components/BaseCard1/BaseCard1.vue"})}),`
`,e.jsx(n.p,{children:`This component is "dumb" and presentational only. It takes in props from the parent, and
sends the click request up to the parent to handle.`}),`
`,e.jsx(n.p,{children:`It is ok for presentational components to have state, but that state is specific only to that
component and any of its own child components that receive the state as props.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template>
  // use emitter to broadcast requests to any components (parent, child, sibling, unrelated)
  <div @click="$emitter.emit('favorite-project', project.id)">
    {{ project.title }}
  </div>
</template>

<script>
  export default {
    // alot of code is assumed and excluded to simplify this example
    props: {
      project: {
        type: Object
      }
    }
  }
<\/script>

`})})]})}function g(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{g as default};
