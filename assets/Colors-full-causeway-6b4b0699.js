import { j as jsxRuntimeExports } from "./jsx-runtime-2adeca77.js";
import { u as useMDXComponents } from "./index-be3ad3a0.js";
import "./chunk-HLWAVYOI-954d167c.js";
import { M as Meta, C as ColorPalette, d as ColorItem } from "./index-3a0ba8e4.js";
import "./iframe-2f763193.js";
import "../sb-preview/runtime.js";
import "./_commonjsHelpers-ca272635.js";
import "./index-26c70190.js";
import "./get-586119b3.js";
import "./index-1063ddb4.js";
import "./index-eeefe080.js";
const _ColorsCW = "";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Tokens/Colors"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
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
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "core",
      children: "Core"
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "base-surface",
        subtitle: "",
        colors: {
          "base-surface [white]": "#FFFFFF",
          "base-on-surface [black-800]": "#292525"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Primary",
        subtitle: "",
        colors: {
          "base-primary [blue-500]": "#1F96E0"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Secondary",
        subtitle: "",
        colors: {
          "base-secondary [black-600]": "#706565"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Interactive",
        subtitle: "For actionable elements",
        colors: {
          "base-interactive [blue-700]": "#0168B2"
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "system",
      children: "System"
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Critical",
        colors: {
          "base-system-critical [red-600]": "#D23A2F",
          "base-system-critical-light [red-100]": "#FFD0D0"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Warning",
        colors: {
          "base-system-warning [orange-500]": "#ED9E40",
          "base-system-warning-light [orange-100]": "#FFE4C3"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Success",
        colors: {
          "base-system-success [green-500]": "#59AB34",
          "base-system-success-light [green-100]": "#C4FCAB"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Highlight",
        colors: {
          "base-system-highlight [pink-800]": "#AF4799",
          "base-system-highlight-light [pink-100]": "#FFE2F8"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Alert",
        colors: {
          "base-system-alert [yellow-500]": "#E6EA23",
          "base-system-alert-light [yellow-100]": "#F9FAC8"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Completed",
        colors: {
          "": "",
          "base-system-completed-light [black-50]": "#F8F7F7"
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "surface",
      children: "Surface"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Refers to colors that affect surfaces of components, such as page, card, sheet, and modals."
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Default",
        colors: {
          "base-surface-default [white]": "#FFFFFF"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Subdued",
        colors: {
          "base-surface-subdued [white-100]": "#FAF9F3"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Hover",
        colors: {
          "base-surface-hover [white-300]": "#F4F2E6"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Disabled",
        colors: {
          "base-surface-disabled [white-50]": "#FBFAF7"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Pressed / Depressed",
        colors: {
          "base-surface-pressed [white-400]": "#ECE9D7",
          "base-surface-depressed [white-200]": "#F8F6EE"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Selected",
        colors: {
          "base-surface-selected-default [blue-700]": "#0168B2",
          "base-surface-selected-hover [blue-800]": "#005C9E",
          "base-surface-selected-disabled [blue-400]": "#AEA6A6"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Dark (HC)",
        colors: {
          "base-surface-hc [black-800]": "#292525",
          "base-surface-hc-hover [black-600]": "#706565"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Success",
        colors: {
          "base-surface-success-default [green-600]": "#3B8D16",
          "base-surface-success-hover [green-400]": "#77C952",
          "base-surface-success-pressed [green-800]": "#136500"
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Used to show depth & elevation behind top level surfaces."
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Default and High Contrast",
        colors: {
          "base-background-default [white-50]": "#FBFAF7",
          "base-background-hc [black-100]": "#EFECEC"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Hover",
        colors: {
          "base-background-hover [white-200]": "#F8F6EE",
          "base-background-hc-hover [black-200]": "#DFD9D9"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Pressed",
        colors: {
          "base-background-pressed [white-400]": "#ECE9D7",
          "base-background-hc-pressed [black-300]": "#C8C2C2"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Selected",
        colors: {
          "base-background-selected [white-300]": "#F4F2E6",
          "base-background-hc-selected [black-400]": "#AEA6A6"
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "text",
      children: "Text"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Colors used for text"
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Default",
        colors: {
          "base-text-default [black-800]": "#292525"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Subdued",
        colors: {
          "base-text-subdued [black-600]": "#706565"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Disabled",
        colors: {
          "base-text-disabled [black-300]": "#C8C2C2"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Critical",
        colors: {
          "base-text-critical [red-700]": "#B61B10"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Success",
        colors: {
          "base-text-success [green-800]": "#136500"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "On Primary / Secondary",
        colors: {
          "base-text-on-primary [white]": "#FFFFFF",
          "base-text-on-secondary [white]": "#FFFFFF"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "On Hollow / Interactive",
        colors: {
          "base-text-on-hollow [black-800]": "#292525",
          "base-text-on-interactive [white]": "#FFFFFF"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "On dark (HC) / Alert",
        colors: {
          "base-text-on-hc [white-50]": "#FBFAF7",
          "base-text-on-alert [black-800]": "#292525"
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "stroke",
      children: "Stroke"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Used for divider lines or borders on fields, cards etc."
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Default",
        colors: {
          "base-stroke-default [black-500]": "#908484",
          "base-stroke-subdued [black-300]": "#C8C2C2",
          "base-stroke-hover [black-400]": "#AEA6A6"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Critical",
        colors: {
          "base-stroke-critical [red-700]": "#B61B10",
          "base-stroke-critical-hover [red-400]": "#F87E76",
          "base-stroke-critical-disabled [red-200]": "#FFBAB6"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Active",
        colors: {
          "base-stroke-active [blue-500]": "#1F96E0",
          "base-stroke-active-subdued [blue-300]": "#75C5FE"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Success",
        colors: {
          "base-stroke-success [green-700]": "#1D6F00",
          "base-stroke-success-subdued [green-400]": "#77C952"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "On dark (HC)",
        colors: {
          "base-stroke-on-hc [white-100]": "#FAF9F3",
          "base-stroke-on-interactive [white]": "#FFFFFF"
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "interactive",
      children: "Interactive"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Text links, Icon links or anything that contains a link but its not a button"
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Default",
        colors: {
          "base-interactive-default [blue-700]": "#0168B2",
          "base-interactive-hover [blue-800]": "#005C9E",
          "base-interactive-disabled [blue-100]": "#C1E5FF"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Critical",
        colors: {
          "base-interactive-critical [red-700]": "#B61B10",
          "base-interactive-critical-hover [red-400]": "#F87E76",
          "base-interactive-critical-disabled [red-200]": "#FFBAB6"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "On dark (HC)",
        colors: {
          "base-interactive-on-hc-default [blue-50]": "#DCF0FF",
          "base-interactive-on-hc-hover [blue-200]": "#9BD5FF",
          "base-interactive-on-hc-disabled [black-100]": "#EFECEC"
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "actions",
      children: "Actions"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Used for action buttons or selection controls"
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Default",
        colors: {
          "base-actions-primary-default [blue-500]": "#1F96E0",
          "base-actions-primary-hover [blue-600]": "#007CC9",
          "base-actions-primary-disabled [blue-100]": "#C1E5FF"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Secondary",
        colors: {
          "base-actions-secondary-default [black-700]": "#514949",
          "base-actions-secondary-hover [black-800]": "#292525",
          "base-actions-secondary-disabled [black-200]": "#DFD9D9"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Critical",
        colors: {
          "base-actions-critical-default [red-600]": "#D23A2F",
          "base-actions-critical-hover [red-400]": "#F87E76",
          "base-actions-critical-disabled [red-100]": "#FFD0D0"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "On dark (HC)",
        colors: {
          "base-actions-action-on-hc-default [blue-200]": "#9BD5FF",
          "base-actions-action-on-hc-hover [blue-400]": "#56B1F3",
          "base-actions-action-on-hc-disabled [black-100]": "#EFECEC"
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "focused",
      children: "Focused"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "For use to highlight focus state of components with screenreaders or tabbing function."
    }), "\n", jsxRuntimeExports.jsx(ColorPalette, {
      children: jsxRuntimeExports.jsx(ColorItem, {
        title: "Default",
        colors: {
          "base-focus-default [blue-600]": "#007CC9"
        }
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "icons",
      children: "Icons"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Used for utility icons that are interactive in nature"
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Default",
        colors: {
          "base-icon-default [black-700]": "#514949",
          "base-icon-subdued [black-500]": "#908484"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        colors: {
          "base-icon-hover [black-800]": "#292525",
          "base-icon-disabled [black-200]": "#DFD9D9"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Status",
        colors: {
          "base-icon-critical [red-600]": "#D23A2F",
          "base-icon-warning [orange-500]": "#ED9E40"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        colors: {
          "base-icon-success [green-500]": "#59AB34",
          "base-icon-highlight [pink-500]": "#EB83D5"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "On...",
        colors: {
          "base-icon-on-primary [white]": "#FFFFFF",
          "base-icon-on-secondary [white]": "#FFFFFF"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        colors: {
          "base-icon-on-alert [black-700]": "#514949",
          "base-icon-on-interactive [white]": "#FFFFFF"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "On dark (HC)",
        colors: {
          "base-icon-on-hc [white-100]": "#FAF9F3",
          "": ""
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "decorative",
      children: "Decorative"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Used for banners or call outs anything that is not part of a core function or utility"
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Surface",
        colors: {
          "base-decorative-surface-1 [yellow-50]": "#FCFDDE",
          "base-decorative-surface-2 [blue-50]": "#DCF0FF",
          "base-decorative-surface-3 [pink-50]": "#FEEDFA"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Surface dark (HC)",
        colors: {
          "base-decorative-surface-hc-1 [yellow-800]": "#A7AA18",
          "base-decorative-surface-hc-2 [blue-700]": "#0168B2",
          "base-decorative-surface-hc-3 [pink-600]": "#D76FC1"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Icon",
        colors: {
          "base-decorative-icon-1 [yellow-600]": "#D4D81F",
          "base-decorative-icon-2 [blue-500]": "#1F96E0",
          "base-decorative-icon-3 [pink-500]": "#EB83D5"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Text",
        colors: {
          "base-decorative-text-1 [yellow-700]": "#BEC11B",
          "base-decorative-text-2 [blue-700]": "#0168B2",
          "base-decorative-text-3 [pink-700]": "#C35BAD"
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "drop-shadows-and-overlays",
      children: "Drop shadows and overlays"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Used for banners or call outs"
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Default",
        subtitle: "Based on black-800",
        colors: {
          "base-shadow-level-1": "rgba(41,37,37,0.3)",
          "base-shadow-level-2": "rgba(41,37,37,0.15)"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Overlay",
        subtitle: "Based on black-800",
        colors: {
          "base-shadow-overlay-dark": "rgba(51,51,51,0.5)",
          "base-shadow-overlay-darker": "rgba(51,51,51,0.7)"
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "marketing-colors",
      children: "Marketing Colors"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "decorative-1",
      children: "Decorative"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Used for backgrounds, icons or highlighted text on marketing pages"
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Surface",
        colors: {
          "marketing-decorative-surface-lc [white-100]": "#FFFFFF",
          "marketing-decorative-surface-vibrant-1 [blue-50]": "#DCF0FF",
          "marketing-decorative-surface-vibrant-2 [orange-50]": "#FFF1DF",
          "marketing-decorative-surface-hc [black-800]": "#292525"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Icon",
        colors: {
          "marketing-decorative-icon-lc [white-400]": "#ECE9D7",
          "marketing-decorative-icon-vibrant [orange-400]": "#F8B15E",
          "marketing-decorative-surface-icon-hc [black-600]": "#706565"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Text",
        colors: {
          "marketing-text-lc [white-100]": "#FAF9F3",
          "marketing-text-vibrant [orange-600]": "#DD8721",
          "marketing-text-hc [black-800]": "#292525"
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "text-1",
      children: "Text"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Used for marketing text like headers or body"
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Dark",
        colors: {
          "marketing-text-dark [black-800]": "#292525"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Subdued",
        colors: {
          "marketing-text-subdued [white-300]": "#F4F2E6"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Light",
        colors: {
          "marketing-text-light [white-100]": "#FAF9F3"
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "colors-usage",
      children: "Colors Usage"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Colors can be used as CSS variables or as class names for type, background, and borders.\nIn the mockups, colors will be displayed a ", jsxRuntimeExports.jsx(_components.code, {
        children: "#"
      }), " followed by ", jsxRuntimeExports.jsx(_components.code, {
        children: "/"
      }), " to separate words. However,\nin the code, the ", jsxRuntimeExports.jsx(_components.code, {
        children: "#"
      }), " is not used, and the ", jsxRuntimeExports.jsx(_components.code, {
        children: "/"
      }), " is replaced with ", jsxRuntimeExports.jsx(_components.code, {
        children: "-"
      }), "."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["For example, ", jsxRuntimeExports.jsx(_components.code, {
        children: "#base/text/default"
      }), " becomes ", jsxRuntimeExports.jsx(_components.code, {
        children: "base-text-default"
      }), " in the code."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "colors-as-css-variables",
      children: "Colors as CSS variables"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Use the SASS function ", jsxRuntimeExports.jsx(_components.code, {
        children: "color"
      }), " and pass in the color name:"]
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-css",
        children: ".myElement {\n  color(base-text-subdued)\n}\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "colors-as-class-names",
      children: "Colors as class names"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Font color example"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-html",
        children: '<div class="ids--color-type-base-text-on-alert">Test</div>\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Background color example"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-html",
        children: '<div class="ids--color-bg-base-background-hc">Test</div>\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Border color example"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-html",
        children: '<div class="ids--color-border-base-decorative-surface-2">Test</div>\n'
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
