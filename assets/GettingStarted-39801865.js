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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Docs/Getting Started"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "getting-started",
      children: "Getting Started"
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "In development, Storybook is meant to run in isolation from the main app.\nIt is therefore simpler and practical to install and run it outside of Docker."
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["$ ", jsxRuntimeExports.jsx(_components.code, {
          children: "cd frontend"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["$ ", jsxRuntimeExports.jsx(_components.code, {
          children: "yarn install"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["(optionally) install ", jsxRuntimeExports.jsx(_components.a, {
          href: "https://marketplace.visualstudio.com/items?itemName=silvenon.mdx",
          rel: "nofollow",
          children: jsxRuntimeExports.jsx(_components.strong, {
            children: "MDX VScode extension"
          })
        }), " to get code highlighting"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "running-storybook",
      children: "Running Storybook"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: jsxRuntimeExports.jsx(_components.code, {
          children: "yarn storybook"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Go to http://localhost:6006/ in browser"
      }), "\n"]
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
