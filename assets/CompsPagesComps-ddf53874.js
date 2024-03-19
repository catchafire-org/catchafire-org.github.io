import { j as jsxRuntimeExports } from "./jsx-runtime-2adeca77.js";
import { u as useMDXComponents } from "./index-be3ad3a0.js";
import "./chunk-HLWAVYOI-954d167c.js";
import { M as Meta } from "./index-3a0ba8e4.js";
/* empty css               */import "./iframe-2f763193.js";
import "../sb-preview/runtime.js";
import "./_commonjsHelpers-ca272635.js";
import "./index-26c70190.js";
import "./get-586119b3.js";
import "./index-1063ddb4.js";
import "./index-eeefe080.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Docs/Components/Pages vs Components"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "pages-vs-components",
      children: "Pages vs Components"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Components are the building blocks of the Vue app. With the upgrade to Vue 3, we\nare now able to take advantage of the more declarative syntax of Vue 3's\n", jsxRuntimeExports.jsx(_components.a, {
        href: "https://v3.vuejs.org/guide/composition-api-introduction.html",
        rel: "nofollow",
        children: jsxRuntimeExports.jsx(_components.strong, {
          children: "composition API"
        })
      }), ".\nAll new pages and components should use the composition API.\nExisting pages and components should be refactored to use the composition\nAPI when the opportunity arises."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "View the composition API cheatsheet: https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf"
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "vue-pages-container-components",
      children: "Vue Pages (Container components)"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Vue pages are basically large Vue components that are composed of smaller\ncomponents."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Vue pages are not concerned with how things look but only with fetching data from an\nAPI, interacting with the Vuex Store, and passing props down to child components."
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "vue-components-presentational-components",
      children: "Vue Components (Presentational components)"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: 'In contrast to Vue pages, Vue components are considered as "dumb components" because\nthey do nothing but render themselves according to the props that are passed to it\nfrom the parent.'
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "A Vue component can also be composed of and pass props to smaller child components,\nbut it should never fetch data or interact with the Vuex Store."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "If a Vue component needs to fetch/update data or global state, it needs to send a request\nto the Vue page that holds it."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["The concept behind this interaction of Vue pages and Vue components is referred to as\n", jsxRuntimeExports.jsx(_components.a, {
        href: "https://medium.com/quick-code/vue-communication-patterns-an-intro-to-props-down-and-events-up-pattern-d53340d2c94",
        rel: "nofollow",
        children: jsxRuntimeExports.jsx(_components.strong, {
          children: "Props down, Events Up"
        })
      }), "."]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsxs("div", {
      class: "propsUpDown",
      children: [jsxRuntimeExports.jsx("div", {
        class: "component parent",
        children: jsxRuntimeExports.jsx("code", {
          children: '<ChildComponent :prop1="value1" :prop2="value2" />'
        })
      }), jsxRuntimeExports.jsx("div", {
        class: "connector"
      }), jsxRuntimeExports.jsx("div", {
        class: "component child",
        children: jsxRuntimeExports.jsx("code", {
          children: '$emitter.emit("do-something")'
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "code-example",
      children: "Code example"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "_Modules/Projects/Projects.vue"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "This page component handles fetching and storing data, but doesn't concern itself\nwith how child components are rendered. It simply passes props down to the child,\nallowing the child to render itself accordingly. This component also listens for\nrequests from the child component to manipulate data, and handle routing."
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-html",
        children: "<template>\n  <BaseCard1\n    :project=\"project\"\n  >\n  ></BaseCard1>\n</template>\n\n<script>\n  import { inject } from 'vue'\n  export default {\n    // alot of code is assumed and excluded to simplify this example\n    setup(props) {\n      const emitter = inject('emitter');   // Inject `emitter`\n      emitter.on('favorite-project', (projectId) => {   // *Listen* for event\n        favoriteProject(projectId)\n      });\n\n      const project = ref({\n        id: 1,\n        title: 'Example Project',\n        favorite: false\n      })\n\n      const favoriteProject = async (projectId) => {\n        await fetch(save_to_favorites_api_endpoint, projectId)\n        project.value = {\n          ...project.value,\n          favorite: true\n        }\n      }\n\n      return {\n        favoriteProject,\n        project\n      }\n    }\n  }\n<\/script>\n\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "_Components/BaseCard1/BaseCard1.vue"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: 'This component is "dumb" and presentational only. It takes in props from the parent, and\nsends the click request up to the parent to handle.'
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "It is ok for presentational components to have state, but that state is specific only to that\ncomponent and any of its own child components that receive the state as props."
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-html",
        children: `<template>
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

`
      })
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
