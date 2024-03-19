import { j as jsxRuntimeExports } from "./jsx-runtime-2adeca77.js";
import { u as useMDXComponents } from "./index-be3ad3a0.js";
import "./chunk-HLWAVYOI-954d167c.js";
import { C as ColorPalette, d as ColorItem } from "./index-3a0ba8e4.js";
/* empty css                  */import "./iframe-2f763193.js";
import "../sb-preview/runtime.js";
import "./_commonjsHelpers-ca272635.js";
import "./index-26c70190.js";
import "./get-586119b3.js";
import "./index-1063ddb4.js";
import "./index-eeefe080.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: ["\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "colors",
      children: "Colors"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "primitives",
      children: "Primitives"
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Brand White",
        subtitle: "",
        colors: {
          800: "#9C9778",
          700: "#B6B191",
          600: "#D0CCB0",
          500: "#E0DCC6",
          400: "#ECE9D7",
          300: "#F4F2E6",
          200: "#F8F6EE",
          100: "#FAF9F3",
          50: "#FBFAF7"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Brand Black",
        subtitle: "",
        colors: {
          800: "#292525",
          700: "#514949",
          600: "#706565",
          500: "#908484",
          400: "#AEA6A6",
          300: "#C8C2C2",
          200: "#DFD9D9",
          100: "#EFECEC",
          50: "#F8F7F7"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Brand Yellow",
        subtitle: "",
        colors: {
          800: "#A7AA18",
          700: "#BEC11B",
          600: "#D4D81F",
          500: "#E6EA23",
          400: "#F0F26A",
          300: "#F4F68B",
          200: "#F8FAAC",
          100: "#F9FAC8",
          50: "#FCFDDE"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Brand Orange",
        subtitle: "",
        colors: {
          800: "#B76709",
          700: "#C7730F",
          600: "#DD8721",
          500: "#ED9E40",
          400: "#F8B15E",
          300: "#FFC47E",
          200: "#FFD4A0",
          100: "#FFE4C3",
          50: "#FFF1DF"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Brand Red",
        subtitle: "",
        colors: {
          800: "#A3170E",
          700: "#B61B10",
          600: "#D23A2F",
          500: "#EC5F55",
          400: "#F87E76",
          300: "#ff9E98",
          200: "#FFBAB6",
          100: "#FFD0D0",
          50: "#FFE4E4"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Brand Pink",
        subtitle: "",
        colors: {
          800: "#AF4799",
          700: "#C35BAD",
          600: "#D76FC1",
          500: "#EB83D5",
          400: "#F69FE3",
          300: "#FEBAEF",
          200: "#FFCFF4",
          100: "#FFE2F8",
          50: "#FEEDFA"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Brand Blue",
        subtitle: "",
        colors: {
          800: "#005C9E",
          700: "#0168B2",
          600: "#007CC9",
          500: "#1F96E0",
          400: "#56B1F3",
          300: "#75C5FE",
          200: "#9BD5FF",
          100: "#C1E5FF",
          50: "#DCF0FF"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Brand Green",
        subtitle: "",
        colors: {
          800: "#136500",
          700: "#1D6F00",
          600: "#3B8D16",
          500: "#59AB34",
          400: "#77C952",
          300: "#94E270",
          200: "#AAF488",
          100: "#C4FCAB",
          50: "#DCFDD1"
        }
      })]
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
