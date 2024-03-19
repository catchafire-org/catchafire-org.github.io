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
      title: "Docs/Components/Controlled vs Uncontrolled"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "controlled-vs-uncontrolled",
      children: "Controlled vs Uncontrolled"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "Controlled components"
      }), " are components that are within the Vue context.\nThis means that when the user interacts with these components (click, hover, etc),\nand state or props are updated, Vue will start its ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://v3.vuejs.org/guide/reactivity.html",
        rel: "nofollow",
        children: jsxRuntimeExports.jsx(_components.strong, {
          children: "Reactivity"
        })
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["An ", jsxRuntimeExports.jsx(_components.strong, {
        children: "uncontrolled component"
      }), " is not within the Vue context. It doesn't have state associated\nwith it, so when the user interacts with it, Reactivity will not be started."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "For example, say we had an input field that does something after the user enters data.\nTake a look at how a controlled and uncontrolled component will behave."
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "controlled-example",
      children: "Controlled example"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Here, the DOM gets rerendered on each keypress."
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-html",
        children: `<template>
  <div>
    <!-- Reactivity will run on every keypress -->
    <input @keypress="search()" v-model="searchInput" />
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup(props) {
      const searchInput = ref('') // state. We are reference a state value.
      // alot of code is assumed and excluded to simplify this example
      const search = () => {
        console.log(searchInput)
      }

      return {
        search
      }
    }
  }
<\/script>

`
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "uncontrolled-example",
      children: "Uncontrolled example"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Here, the DOM will never get updated."
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-html",
        children: `<template>
  <div>
    <!-- Reactivity will NOT be run on every keypress -->
    <input @keypress="search()" ref="searchInput" />
  </div>
</template>

<script>
  import { ref, watchEffect } from 'vue'
  export default {
    // alot of code is assumed and excluded to simplify this example
    setup(props) {
      const searchInput = ref('') // not state, but called in a similar way. This time we are reference a DOM element.
      const search = () => {
        console.log(searchInput)
      }

      watchEffect(() => {
        // here we get notified that searchInput has updated, but Reactivity is not started.
        console.log(searchInput.value)
      },
      {
        flush: 'post'
      })

      return {
        search
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
