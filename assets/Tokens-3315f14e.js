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
    code: "code",
    h1: "h1",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Docs/Design Tokens"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "design-tokens",
      children: "Design Tokens"
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: 'As modules are the building blocks of an app, and pages are building blocks of a module,\nand components are the building blocks of a page, Design Tokens (simply "Tokens") are the\nbuilding blocks of a component. In other words, Tokens are the smallest anatomical element of\nthe UI, and usually encompasses styling for Spacing, Colors, Fonts, Borders, Shadows, and etc.'
    }), "\n", jsxRuntimeExports.jsxs("div", {
      class: "anatomy app",
      children: [jsxRuntimeExports.jsx(_components.p, {
        children: "App"
      }), jsxRuntimeExports.jsxs("div", {
        class: "anatomy modules",
        children: [jsxRuntimeExports.jsx(_components.p, {
          children: "Modules"
        }), jsxRuntimeExports.jsxs("div", {
          class: "anatomy pages",
          children: [jsxRuntimeExports.jsx(_components.p, {
            children: "Pages + Submodules"
          }), jsxRuntimeExports.jsxs("div", {
            class: "anatomy components",
            children: [jsxRuntimeExports.jsx(_components.p, {
              children: "Components"
            }), jsxRuntimeExports.jsx("div", {
              class: "anatomy tokens",
              children: jsxRuntimeExports.jsx(_components.p, {
                children: "Tokens"
              })
            })]
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Tokens are created under the ", jsxRuntimeExports.jsx(_components.code, {
        children: "_Tokens"
      }), " directory, and most often shared amongst many\npages and components. Tokens help to keep continuity of design within the app. Frontend engineers\nwork in strict coordination with Design to create Tokens. Any frivilous updates to\na Token without approval, review, and thorough testing, can cause issues in the layout of\nthe entire app."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "There should rarely if ever be a need for anyone outside of Frontend to create or update\nTokens. If such a situation arises because of a discrepancy in a mockup, then it should be\nbrought to the attention of Frontend or Design."
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
