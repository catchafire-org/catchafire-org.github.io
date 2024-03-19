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
      id: "theme-primitives",
      children: "Theme Primitives"
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Brand-Navy",
        subtitle: "--color-brand-navy-",
        colors: {
          800: "#0E162F",
          700: "#1B2A58",
          600: "#394876",
          500: "#616A85",
          400: "#868A97",
          300: "#A8ACBB",
          200: "#C1C5D0",
          100: "#D7DAE4",
          50: "#E9EDF3"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Brand-Yellow",
        subtitle: "--color-brand-yellow-",
        colors: {
          800: "#846B00",
          700: "#AC930D",
          600: "#D0B41F",
          500: "#EBCA0A",
          400: "#FFDE11",
          300: "#FFEB33",
          200: "#FFF096",
          100: "#FFF7C3",
          50: "#FFFCE7"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Brand-Red",
        subtitle: "--color-brand-red-",
        colors: {
          800: "#970201",
          700: "#B01005",
          600: "#C11802",
          500: "#D02910",
          400: "#E43D24",
          300: "#F46C55",
          200: "#F19E91",
          100: "#F8CEC8",
          50: "#FCECE9"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Brand-Blue",
        subtitle: "--color-brand-blue-",
        colors: {
          800: "#0E1630",
          700: "#071644",
          600: "#142C7D",
          500: "#324A9B",
          400: "#5068B9",
          300: "#778BD0",
          200: "#ACB8E1",
          100: "#DFE5F6",
          50: "#EBEDF5"
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "global-primitives",
      children: "Global Primitives"
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Neutrals",
        subtitle: "--color-neutral-",
        colors: {
          "lc (low contrast)": "#FFFFFF",
          "hc (high contrast)": "#1F1F1F"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Gray",
        subtitle: "--color-gray-",
        colors: {
          800: "#333333",
          700: "#484848",
          600: "#646464",
          500: "#868686",
          400: "#A3A3A3",
          300: "#C2C2C2",
          200: "#D9D9D9",
          100: "#EAEAEA",
          50: "#F8F8F8"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Emerald",
        subtitle: "--color-emerald-",
        colors: {
          800: "#08740A",
          700: "#269228",
          600: "#3AA63C",
          500: "#58C45A",
          400: "#73D775",
          300: "#8EE590",
          200: "#ACF1AB",
          100: "#C6F5C8",
          50: "#DCFADC"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Scarlet",
        subtitle: "--color-scarlet-",
        colors: {
          800: "#8E0000",
          700: "#AC0000",
          600: "#CA0F1C",
          500: "#DA3737",
          400: "#E85454",
          300: "#FC8078",
          200: "#F7A199",
          100: "#F5C0B7",
          50: "#FFDED5"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Pacific",
        subtitle: "--color-pacific-",
        colors: {
          800: "#001E8E",
          700: "#003CAC",
          600: "#0F5ACA",
          500: "#236EDE",
          400: "#418CFC",
          300: "#64AAFF",
          200: "#82C8FF",
          100: "#AAE4FF",
          50: "#C5F0FB"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Carrot",
        subtitle: "--color-carrot-",
        colors: {
          800: "#8F3600",
          700: "#AD5400",
          600: "#C16800",
          500: "#DF8600",
          400: "#F39A14",
          300: "#FFAE28",
          200: "#F6BE41",
          100: "#FFD178",
          50: "#FFE2AA"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Lemon",
        subtitle: "--color-lemon-",
        colors: {
          800: "#805C00",
          700: "#A88400",
          600: "#D0AC00",
          500: "#EECA04",
          400: "#F9D816",
          300: "#FFEA6D",
          200: "#FFEE87",
          100: "#FFFCAA",
          50: "#FCFCC1"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Ocean",
        subtitle: "--color-ocean-",
        colors: {
          800: "#004D4D",
          700: "#006B6B",
          600: "#009D9D",
          500: "#0AC5C5",
          400: "#3BD9D9",
          300: "#90E3DE",
          200: "#9EEBE6",
          100: "#C2F2F1",
          50: "#E7FEFE"
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
