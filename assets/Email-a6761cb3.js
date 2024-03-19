import { j as jsxRuntimeExports } from "./jsx-runtime-2adeca77.js";
import { u as useMDXComponents } from "./index-be3ad3a0.js";
import "./chunk-HLWAVYOI-954d167c.js";
import { M as Meta, C as ColorPalette, d as ColorItem, e as Source2 } from "./index-3a0ba8e4.js";
/* empty css               *//* empty css                 */import "./iframe-2f763193.js";
import "../sb-preview/runtime.js";
import "./_commonjsHelpers-ca272635.js";
import "./index-26c70190.js";
import "./get-586119b3.js";
import "./index-1063ddb4.js";
import "./index-eeefe080.js";
const _Email = "";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h4: "h4",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx("link", {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }), "\n", jsxRuntimeExports.jsx("link", {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: true
    }), "\n", jsxRuntimeExports.jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",
      rel: "stylesheet"
    }), "\n", jsxRuntimeExports.jsx(Meta, {
      title: "Tokens/Email"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "email-design-with-mjml",
      children: "Email design with MJML"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "MJML is a markup language used to develop responsive, cross-platform/client emails with ease. Its syntax makes it easy to understand, removing all need for manually written table-based layouts and inline CSS rules, and simplifying it with the use of components and simple class names."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["It is recommended to read the ", jsxRuntimeExports.jsx("a", {
        href: "https://documentation.mjml.io/",
        target: "_blank",
        children: "official documentation of MJML"
      }), " to get familiar with the syntax, specially the section dedicated to ", jsxRuntimeExports.jsx("a", {
        href: "https://documentation.mjml.io/#standard-body-components",
        target: "_blank",
        children: "standard body components"
      }), ", as those are the elements most used in our templates."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Our email files can be found in the ", jsxRuntimeExports.jsx(_components.code, {
        children: "/frontend/email"
      }), " folder. The base header, footer, and styling files are found in the ", jsxRuntimeExports.jsx(_components.code, {
        children: "/includes"
      }), " folder. The snippets in this folder are shared across all templates and editing them will result in changes to every email."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "typeface",
      children: "Typeface"
    }), "\n", jsxRuntimeExports.jsxs("table", {
      children: [jsxRuntimeExports.jsx("thead", {
        children: jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("th", {
            children: "Family"
          }), jsxRuntimeExports.jsx("th", {
            children: "Description"
          }), jsxRuntimeExports.jsx("th", {
            children: "Weights available"
          })]
        })
      }), jsxRuntimeExports.jsx("tbody", {
        children: jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            width: "25%",
            children: jsxRuntimeExports.jsx("div", {
              style: {
                fontFamily: "Inter",
                fontSize: "30px"
              },
              children: "Inter"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: [jsxRuntimeExports.jsx("a", {
                href: "https://fonts.google.com/specimen/Inter",
                target: "_blank",
                children: "Inter"
              }), " is our only typeface for email design. It's a sans-serif webfont provided by Google Fonts, and it's our unique typeface for headlines, body copy, buttons, and any other component. It relies on Helvetica and Arial as a fallback in case the font file can't be retrieved, or the email client doesn't support webfonts."]
            })
          }), jsxRuntimeExports.jsx("td", {
            width: "25%",
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["400 (Regular)", jsxRuntimeExports.jsx("br", {}), "\n600 (Semibold)", jsxRuntimeExports.jsx("br", {}), "\n700 (Bold)"]
            })
          })]
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "color-tokens",
      children: "Color tokens"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Colors here DO NOT work as variables or are available through class names. For email application, the colors are set independently in its own stylesheet dedicated to email design only (", jsxRuntimeExports.jsx(_components.code, {
        children: "email-styles.mjml"
      }), "). Since they're imported by default with each component, there's no need to use token names when editing emails. The color names shown here are for reference only."]
    }), "\n", jsxRuntimeExports.jsxs(ColorPalette, {
      children: [jsxRuntimeExports.jsx(ColorItem, {
        title: "Full Palette",
        colors: {
          "Raisin": "#292525",
          "Moonstone": "#1f96e0",
          "White": "#ffffff",
          "Alabaster": "#f4f2e6",
          "Cultured": "#f8f7f3"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Surface",
        colors: {
          "color-surface-dark": "#292525",
          "color-surface-light": "#ffffff",
          "color-surface-alabaster": "#f4f2e6"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Text",
        colors: {
          "color-text-default": "#292525",
          "color-text-on-dark": "#f8f7f3"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Decorative",
        colors: {
          "color-decorative-icon-dark": "#292525",
          "color-decorative-icon-light": "#f8f7f3"
        }
      }), jsxRuntimeExports.jsx(ColorItem, {
        title: "Action",
        colors: {
          "color-primary": "#1f96e0",
          "color-secondary": "#292525",
          "color-affiliation": "#ffffff"
        }
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "typography-tokens",
      children: "Typography tokens"
    }), "\n", jsxRuntimeExports.jsxs("table", {
      children: [jsxRuntimeExports.jsx("thead", {
        children: jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("th", {
            children: "Token"
          }), jsxRuntimeExports.jsx("th", {
            children: "MJML or CSS class"
          }), jsxRuntimeExports.jsx("th", {
            children: "Size"
          }), jsxRuntimeExports.jsx("th", {
            children: "Weight"
          }), jsxRuntimeExports.jsx("th", {
            children: "Lineheight"
          }), jsxRuntimeExports.jsx("th", {
            children: "Padding"
          })]
        })
      }), jsxRuntimeExports.jsxs("tbody", {
        children: [jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            style: {
              backgroundColor: "#292525",
              color: "#f8f8f8"
            },
            children: jsxRuntimeExports.jsx("div", {
              class: "idsmail--header1",
              children: "Header 1"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("code", {
              children: "idsmail--header1"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "48px"
          }), jsxRuntimeExports.jsx("td", {
            children: "600"
          }), jsxRuntimeExports.jsx("td", {
            children: "1.3"
          }), jsxRuntimeExports.jsx("td", {
            children: "—"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            style: {
              backgroundColor: "#292525",
              color: "#f8f8f8"
            },
            children: jsxRuntimeExports.jsx("div", {
              class: "idsmail--header2",
              children: "Header 2"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("code", {
              children: "idsmail--header2"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "30px"
          }), jsxRuntimeExports.jsx("td", {
            children: "700"
          }), jsxRuntimeExports.jsx("td", {
            children: "1.3"
          }), jsxRuntimeExports.jsx("td", {
            children: "—"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            style: {
              backgroundColor: "#292525",
              color: "#f8f8f8"
            },
            children: jsxRuntimeExports.jsx("div", {
              class: "idsmail--header3",
              children: "Header 3"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("code", {
              children: "idsmail--header3"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "24px"
          }), jsxRuntimeExports.jsx("td", {
            children: "700"
          }), jsxRuntimeExports.jsx("td", {
            children: "1.3"
          }), jsxRuntimeExports.jsx("td", {
            children: "—"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            style: {
              backgroundColor: "#292525",
              color: "#f8f8f8"
            },
            children: jsxRuntimeExports.jsx("div", {
              class: "idsmail--header4",
              children: "Header 4"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("code", {
              children: "idsmail--header4"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "18px"
          }), jsxRuntimeExports.jsx("td", {
            children: "700"
          }), jsxRuntimeExports.jsx("td", {
            children: "1.4"
          }), jsxRuntimeExports.jsx("td", {
            children: "—"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            style: {
              backgroundColor: "#292525",
              color: "#f8f8f8"
            },
            children: jsxRuntimeExports.jsx("div", {
              children: "Body (Default)"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "—"
          }), jsxRuntimeExports.jsx("td", {
            children: "18px"
          }), jsxRuntimeExports.jsx("td", {
            children: "400"
          }), jsxRuntimeExports.jsx("td", {
            children: "1.4"
          }), jsxRuntimeExports.jsx("td", {
            children: "—"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            style: {
              backgroundColor: "#292525",
              color: "#f8f8f8"
            },
            children: jsxRuntimeExports.jsx("div", {
              class: "idsmail--bold",
              children: "Any element in bold"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("code", {
              children: "idsmail--bold"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "18px"
          }), jsxRuntimeExports.jsx("td", {
            children: "700"
          }), jsxRuntimeExports.jsx("td", {
            children: "1.4"
          }), jsxRuntimeExports.jsx("td", {
            children: "—"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            style: {
              backgroundColor: "#292525",
              color: "#f8f8f8"
            },
            children: jsxRuntimeExports.jsx("div", {
              class: "idsmail--link",
              children: "Hyperlink"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("code", {
              children: "idsmail--link"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "18px"
          }), jsxRuntimeExports.jsx("td", {
            children: "700"
          }), jsxRuntimeExports.jsx("td", {
            children: "1.4"
          }), jsxRuntimeExports.jsx("td", {
            children: "—"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            style: {
              backgroundColor: "#292525",
              color: "#f8f8f8"
            },
            children: jsxRuntimeExports.jsx("div", {
              class: "idsmail--small",
              children: "Small"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("code", {
              children: "idsmail--small"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "14px"
          }), jsxRuntimeExports.jsx("td", {
            children: "400"
          }), jsxRuntimeExports.jsx("td", {
            children: "1.4"
          }), jsxRuntimeExports.jsx("td", {
            children: "—"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            style: {
              backgroundColor: "#292525",
              color: "#f8f8f8"
            },
            children: jsxRuntimeExports.jsx("div", {
              class: "idsmail--label",
              children: "Label"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("code", {
              children: "idsmail--label"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "12px"
          }), jsxRuntimeExports.jsx("td", {
            children: "400"
          }), jsxRuntimeExports.jsx("td", {
            children: "1.4"
          }), jsxRuntimeExports.jsx("td", {
            children: "—"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            style: {
              backgroundColor: "#292525",
              color: "#f8f8f8"
            },
            children: jsxRuntimeExports.jsx("div", {
              class: "idsmail--testimonial",
              children: "Testimonial"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("code", {
              children: "idsmail--testimonial"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "24px"
          }), jsxRuntimeExports.jsx("td", {
            children: "700"
          }), jsxRuntimeExports.jsx("td", {
            children: "1.4"
          }), jsxRuntimeExports.jsx("td", {
            children: "—"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            style: {
              backgroundColor: "#292525",
              color: "#f8f8f8"
            },
            children: jsxRuntimeExports.jsx("div", {
              class: "idsmail--btn",
              children: "Button Primary"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("code", {
              children: "idsmail--btn"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "18px"
          }), jsxRuntimeExports.jsx("td", {
            children: "700"
          }), jsxRuntimeExports.jsx("td", {
            children: "1.4"
          }), jsxRuntimeExports.jsx("td", {
            children: "15px 35px"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            style: {
              backgroundColor: "#292525",
              color: "#f8f8f8"
            },
            children: jsxRuntimeExports.jsx("div", {
              class: "idsmail--btn-secondary",
              children: "Button Secondary"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("code", {
              children: "idsmail--btn-secondary"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "18px"
          }), jsxRuntimeExports.jsx("td", {
            children: "700"
          }), jsxRuntimeExports.jsx("td", {
            children: "1.4"
          }), jsxRuntimeExports.jsx("td", {
            children: "15px 35px"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("div", {
              class: "idsmail--btn-affiliation",
              children: "Button Affiliation"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("code", {
              children: "idsmail--btn-affiliation"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "18px"
          }), jsxRuntimeExports.jsx("td", {
            children: "700"
          }), jsxRuntimeExports.jsx("td", {
            children: "1.4"
          }), jsxRuntimeExports.jsx("td", {
            children: "15px 35px"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("div", {
              class: "idsmail--btn-header",
              children: "Button Header"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsx("code", {
              children: "idsmail--btn-header"
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "16px"
          }), jsxRuntimeExports.jsx("td", {
            children: "700"
          }), jsxRuntimeExports.jsx("td", {
            children: "1.4"
          }), jsxRuntimeExports.jsx("td", {
            children: "10px 20px"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsxs("div", {
      children: [jsxRuntimeExports.jsx("h4", {
        children: "Notes:"
      }), jsxRuntimeExports.jsxs("ul", {
        children: [jsxRuntimeExports.jsx("li", {
          children: 'If a token is not specified, it will inherit all properties from the "body" token. This is the initial styling for every component.'
        }), jsxRuntimeExports.jsxs("li", {
          children: [jsxRuntimeExports.jsx("span", {
            class: "idsmail--label",
            children: "LABEL"
          }), " tags should always be in uppercase characters. Although it has a rule in CSS to force it (", jsxRuntimeExports.jsx("code", {
            children: "text-transform: uppercase;"
          }), ") it's still recommended to write the content itself in uppercase letters too."]
        }), jsxRuntimeExports.jsxs("li", {
          children: [jsxRuntimeExports.jsx("code", {
            children: ".idsmail--link"
          }), " and ", jsxRuntimeExports.jsx("code", {
            children: ".idsmail--bold"
          }), ' are inline styling elements, and should be used differently. This is explained later in "MJML class names and CSS class names"']
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "components",
      children: "Components"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "As part of our new design language, we're implementing styling for MJML built-in components as well as new custom components speficic for our emails. In all cases, they have to use our custom class names."
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "headings-and-paragraphs",
      children: "Headings and paragraphs"
    }), "\n", jsxRuntimeExports.jsxs("div", {
      style: {
        backgroundColor: "#292525",
        padding: "30px",
        maxWidth: "600px"
      },
      children: [jsxRuntimeExports.jsx("div", {
        class: "idsmail--header1",
        style: {
          color: "#f8f8f8"
        },
        children: "Header 1"
      }), jsxRuntimeExports.jsx("div", {
        class: "idsmail--header2",
        style: {
          color: "#f8f8f8"
        },
        children: "Header 2"
      }), jsxRuntimeExports.jsx("div", {
        class: "idsmail--header3",
        style: {
          color: "#f8f8f8",
          marginBottom: "20px"
        },
        children: "Header 3"
      }), jsxRuntimeExports.jsx("div", {
        style: {
          color: "#f8f8f8",
          marginBottom: "20px"
        },
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum, orci vel suscipit placerat, urna nisl porttitor dolor, bibendum elementum."
      }), jsxRuntimeExports.jsx("div", {
        class: "idsmail--small",
        style: {
          color: "#f8f8f8"
        },
        children: "Ut tincidunt leo aliquam arcu euismod, quis consequat leo congue. Proin id urna id odio posuere dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus."
      })]
    }), "\n", jsxRuntimeExports.jsx(Source2, {
      language: "html",
      dark: true,
      code: `
<mj-text mj-class="idsmail--header1">Header 1</mj-text>
<mj-text mj-class="idsmail--header2">Header 2</mj-text>
<mj-text mj-class="idsmail--header3">Header 3</mj-text>
<mj-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</mj-text>
<mj-text class="idsmail--small">Ut tincidunt leo aliquam arcu eui...</mj-text>
  `
    }), "\n", jsxRuntimeExports.jsx("hr", {}), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "buttons",
      children: "Buttons"
    }), "\n", jsxRuntimeExports.jsxs("div", {
      style: {
        backgroundColor: "#292525",
        padding: "30px",
        maxWidth: "600px"
      },
      children: [jsxRuntimeExports.jsx("div", {
        class: "idsmail--btn",
        style: {
          marginBottom: "20px"
        },
        children: "Button Primary"
      }), jsxRuntimeExports.jsx("br", {}), jsxRuntimeExports.jsx("div", {
        class: "idsmail--btn-secondary",
        children: "Button Secondary"
      })]
    }), "\n", jsxRuntimeExports.jsx(Source2, {
      language: "html",
      dark: true,
      code: `
<mj-button mj-class="idsmail--btn">Button Primary</mj-button>
<mj-button mj-class="idsmail--btn-secondary">Button Secondary</mj-button>
  `
    }), "\n", jsxRuntimeExports.jsx("hr", {}), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "icons",
      children: "Icons"
    }), "\n", jsxRuntimeExports.jsx("div", {
      style: {
        backgroundColor: "#292525",
        padding: "30px",
        maxWidth: "600px"
      },
      children: jsxRuntimeExports.jsx("img", {
        class: "idsmail--icon",
        src: "https://p91.f3.n0.cdn.getcloudapp.com/items/8Luq22D7/fc1fd1d3-1859-4d69-a1a6-c418f261a684.png?source=viewer&v=51174c47d95da5a9a0382a234b7f801d"
      })
    }), "\n", jsxRuntimeExports.jsx(Source2, {
      language: "html",
      dark: true,
      code: `
<mj-image mj-class="idsmail--icon" src="images/icon.png" />
  `
    }), "\n", jsxRuntimeExports.jsx("hr", {}), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "avatar",
      children: "Avatar"
    }), "\n", jsxRuntimeExports.jsxs("div", {
      style: {
        backgroundColor: "#292525",
        padding: "30px",
        maxWidth: "600px"
      },
      children: [jsxRuntimeExports.jsx("img", {
        class: "idsmail--avatar",
        src: "https://this-person-does-not-exist.com/img/avatar-11842daaa027c03d164ed7be3fa0f969.jpg"
      }), jsxRuntimeExports.jsx("div", {
        class: "idsmail--header4",
        style: {
          color: "#f8f8f8",
          paddingBottom: "0"
        },
        children: jsxRuntimeExports.jsx(_components.p, {
          children: "Adriana J."
        })
      }), jsxRuntimeExports.jsx("div", {
        style: {
          color: "#f8f8f8"
        },
        children: jsxRuntimeExports.jsx(_components.p, {
          children: "Marketing Specialist"
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(Source2, {
      language: "html",
      dark: true,
      code: `
<mj-image mj-class="idsmail--avatar" src="images/avatar.png" />
<mj-text mj-class="idsmail--header4" padding-bottom="0px">
  Adriana J.
</mj-text>
<mj-text>
  Marketing Specialist
</mj-text>
  `
    }), "\n", jsxRuntimeExports.jsx("hr", {}), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "project-card",
      children: "Project card"
    }), "\n", jsxRuntimeExports.jsxs("div", {
      style: {
        backgroundColor: "#292525",
        padding: "30px",
        maxWidth: "600px"
      },
      children: [jsxRuntimeExports.jsx("div", {
        class: "idsmail--card-caption",
        children: jsxRuntimeExports.jsx(_components.p, {
          children: "Project or Call"
        })
      }), jsxRuntimeExports.jsx("div", {
        class: "idsmail--card-title idsmail--link",
        children: jsxRuntimeExports.jsx(_components.p, {
          children: "Project Name"
        })
      }), jsxRuntimeExports.jsx("div", {
        class: "idsmail--card-data",
        children: jsxRuntimeExports.jsx(_components.p, {
          children: "for Organization Name"
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(Source2, {
      language: "html",
      dark: true,
      code: `
<mj-section>
  <mj-column mj-class="idsmail--card-wrapper">
    <mj-text mj-class="idsmail--card-caption">
      {{callOrProject}}
    </mj-text>
    <mj-text mj-class="idsmail--card-title">
      <a class="idsmail--link" href="{{projectUrl}}">{{projectTitle}}</a>
    </mj-text>
    <mj-text mj-class="idsmail--card-data">
      for {{orgName}}
    </mj-text>
  </mj-column>
</mj-section>
  `
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Note: Projects cards need to be in a ", jsxRuntimeExports.jsx(_components.code, {
        children: "mj-section"
      }), " on its own, and the ", jsxRuntimeExports.jsx(_components.code, {
        children: "mj-column"
      }), " requires the ", jsxRuntimeExports.jsx(_components.code, {
        children: "idsmail--card-wrapper"
      }), " class name."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "mjml-class-names-and-css-class-names",
      children: "MJML class names and CSS class names"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Some components in our MJML templates require the usage of ", jsxRuntimeExports.jsx("a", {
        href: "https://documentation.mjml.io/#mj-attributes",
        target: "_blank",
        children: "MJML class names"
      }), ". MJML class names (", jsxRuntimeExports.jsx(_components.code, {
        children: "mj-class"
      }), ") apply only to MJML components like text blocks (", jsxRuntimeExports.jsx(_components.code, {
        children: "<mj-text>"
      }), "), images (", jsxRuntimeExports.jsx(_components.code, {
        children: "<mj-image>"
      }), "), or buttons (", jsxRuntimeExports.jsx(_components.code, {
        children: "<mj-button>"
      }), "), but they can't be used in inline html elements like ", jsxRuntimeExports.jsx(_components.code, {
        children: "<a>"
      }), " or ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), " tags. MJML class names are special for email use as they not only apply regular CSS styling but also layout-oriented settings, like full-width capabilities, vertical alignment, table settings, and more. Here's an example of a regular MJML class name for one of our components:"]
    }), "\n", jsxRuntimeExports.jsx(Source2, {
      language: "html",
      dark: true,
      code: `
<mj-button mj-class="idsmail--btn">Button Primary</mj-button>
  `
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["In this example, ", jsxRuntimeExports.jsx(_components.code, {
        children: 'mj-class="idsmail--btn"'
      }), " looks like a regular CSS class name, as it's used to define the rounded shape, margins, background color and text color of the button; but it also defines its ", jsxRuntimeExports.jsx(_components.code, {
        children: "inner-padding"
      }), `, which is not a regular CSS property. There is also an option to set the "outter padding", which creates an offset effect on the button. This is not a property we use, but it's another example on why `, jsxRuntimeExports.jsx(_components.code, {
        children: "mj-class"
      }), " differs from regular CSS class names."]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "We still need to use regular CSS class names in inline elements."
    }), "\n", jsxRuntimeExports.jsx(Source2, {
      language: "html",
      dark: true,
      code: `
<mj-text>Remember to <a class="idsmail--link">add this to your calendar</a>.</mj-text>
  `
    }), "\n", jsxRuntimeExports.jsx(Source2, {
      language: "html",
      dark: true,
      code: `
<mj-text>You've been invited to join <span class="idsmail--bold">The Seven Sounds</span> organization.</mj-text>
  `
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["You can always find more examples and component blocks already created in our email templates, specially in the ", jsxRuntimeExports.jsx(_components.code, {
        children: "email/base-example-full.mjml"
      }), " template."]
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
