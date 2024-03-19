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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Docs/Components/Reactivity"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "reactivity",
      children: "Reactivity"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Vue updates the DOM through a process called ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://v3.vuejs.org/guide/reactivity.html",
        rel: "nofollow",
        children: jsxRuntimeExports.jsx(_components.strong, {
          children: "Reactivity"
        })
      }), ":"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Vue reads the template tag's content (html) and creates a virtual DOM,\nwhich is basically a tree node representation of the real DOM."
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Whenever any state or props gets updated in a component, the virtual DOM is updated to reflect this change."
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "The virtual DOM is then compared to the real DOM. If they are different, then Vue will\nrerender parts of the real DOM to match the virtual DOM."
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "This is Reactivity in Vue. It is important to know about Reactivity because unnecessary\nrerendering or continuously rerendering can have an affect on browser performance."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "code-example",
      children: "Code example"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-html",
        children: `<template>
  <div>
    <button @click="changeStatus()">Run</button>
    {status}
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    // alot of code is assumed and excluded to simplify this example
    setup(props) {
      const status = ref('Stopped') // state
      const changeStatus = () => {
        status.value = 'Running' // when this is changed, Reactivity is started.
      }

      return {
        changeStatus
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
