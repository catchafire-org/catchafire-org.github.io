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
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Docs/Stories"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "stories",
      children: "Stories"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Ignite is built using Storybook, which uses the ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://github.com/ComponentDriven/csf",
        rel: "nofollow",
        children: jsxRuntimeExports.jsx(_components.strong, {
          children: "component story\nformat"
        })
      }), ". Luckily for us, the latest\nversion of Storybook (6.4 at the time of this writing), supports adding stories directly\nto MDX documentation. This greatly simplifies how stories are written, and reduces\nthe learning curve to create and maintain stories."]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["add a ", jsxRuntimeExports.jsx(_components.code, {
          children: ".stories.mdx"
        }), " file to the same directory as the cooresponding ", jsxRuntimeExports.jsx(_components.code, {
          children: ".vue"
        }), " file."]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["$ ", jsxRuntimeExports.jsx(_components.code, {
          children: "cd frontend"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["$ ", jsxRuntimeExports.jsx(_components.code, {
          children: "yarn storybook"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["easily mix html, css, js, and markdown together to create your story. See examples ", jsxRuntimeExports.jsx(_components.a, {
          href: "https://storybook.js.org/docs/vue/writing-docs/mdx",
          rel: "nofollow",
          children: jsxRuntimeExports.jsx(_components.strong, {
            children: "here"
          })
        }), "."]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["When looking at code examples, make sure to click on the ", jsxRuntimeExports.jsx(_components.code, {
        children: "Vue MDX-3"
      }), " tab."]
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
