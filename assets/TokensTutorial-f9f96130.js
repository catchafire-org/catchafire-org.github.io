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
const TokenTutorialVideo = "" + new URL("token-tutorial-b50d738d.mp4", import.meta.url).href;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Tokens/Tutorial"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "tokens-tutorial",
      children: "Tokens Tutorial"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "detailed-video",
      children: "Detailed video"
    }), "\n", jsxRuntimeExports.jsxs("video", {
      width: "auto",
      height: "340",
      controls: true,
      children: [jsxRuntimeExports.jsx("source", {
        src: TokenTutorialVideo,
        type: "video/mp4"
      }), jsxRuntimeExports.jsx(_components.p, {
        children: "Your browser does not support the video tag."
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "additional-notes",
      children: "Additional notes"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "At this time, the only Tokens we are concerned with are the Typeface, Color,\nand Border Radius tokens."
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "The Color Tokens encompass font colors, background colors,\nborder colors and anything else color related."
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "for-typefaces",
      children: "For Typefaces"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Please refer to the ", jsxRuntimeExports.jsx(_components.a, {
        href: "/story/tokens-typography-usage-page",
        children: "Typography (Usage)"
      }), " doc.\nAll of the Fonts styles are within ", jsxRuntimeExports.jsx(_components.code, {
        children: "_Fonts.scss"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "for-colors",
      children: "For Colors"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Please refer to the ", jsxRuntimeExports.jsx(_components.a, {
        href: "/story/tokens-colors-usage--page",
        children: "Colors (Usage)"
      }), " doc.\nAll of the Color styles are within ", jsxRuntimeExports.jsx(_components.code, {
        children: "_Colors.scss"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "for-border-radius",
      children: "For Border Radius"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Please refer to the ", jsxRuntimeExports.jsx(_components.a, {
        href: "/story/tokens-borders--page",
        children: "Borders"
      }), " doc."]
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
