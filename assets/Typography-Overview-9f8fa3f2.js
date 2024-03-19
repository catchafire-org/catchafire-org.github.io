import { j as jsxRuntimeExports } from "./jsx-runtime-2adeca77.js";
import { u as useMDXComponents } from "./index-be3ad3a0.js";
import "./chunk-HLWAVYOI-954d167c.js";
import { T as Typeset } from "./index-3a0ba8e4.js";
/* empty css               *//* empty css                 */import "./iframe-2f763193.js";
import "../sb-preview/runtime.js";
import "./_commonjsHelpers-ca272635.js";
import "./index-26c70190.js";
import "./get-586119b3.js";
import "./index-1063ddb4.js";
import "./index-eeefe080.js";
const typography = {
  type: {
    body: '"Proxima Nova"',
    headingmarketing: '"Museo Slab"'
  },
  weight: {
    regular: "400",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  size: {
    s1: 10,
    s2: 12,
    s3: 14,
    m1: 16,
    m2: 18,
    m3: 20,
    l1: 22,
    l2: 24,
    l3: 32,
    xl1: 48,
    xl2: 60,
    xl3: 72
  }
};
const SampleText = "Lorem ipsum dolor sit amet consectetur adipiscing.";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx("link", {
      rel: "stylesheet",
      href: "https://use.typekit.net/zbi1fyv.css"
    }), "\n", jsxRuntimeExports.jsx("link", {
      rel: "stylesheet",
      href: "https://use.typekit.net/pzp8mpb.css"
    }), "\n", "\n", "\n", "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "typography---overview",
      children: "Typography - Overview"
    }), "\n", jsxRuntimeExports.jsx("hr", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "typefaces",
      children: "Typefaces"
    }), "\n", jsxRuntimeExports.jsx("hr", {}), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "proxima-nova",
      children: "Proxima Nova"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Proxima Nova is our primary sans-serif font and should be used as our main typeface in headlines, body copy, and general web content."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "Preview:"
      }), " ", jsxRuntimeExports.jsx("br", {})]
    }), "\n", jsxRuntimeExports.jsx(Typeset, {
      fontSizes: [Number(typography.size.s3), Number(typography.size.m1), Number(typography.size.m2), Number(typography.size.m3)],
      fontWeight: typography.weight.regular,
      sampleText: SampleText,
      fontFamily: typography.type.body
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "museo-slab",
      children: "Museo Slab"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Museo Slab is our serif font, and it's used for headlines, titles, and marketing material."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.strong, {
        children: "Preview:"
      }), " ", jsxRuntimeExports.jsx("br", {})]
    }), "\n", jsxRuntimeExports.jsx(Typeset, {
      fontSizes: [Number(typography.size.s3), Number(typography.size.m1), Number(typography.size.m2), Number(typography.size.m3)],
      fontWeight: typography.weight.regular,
      sampleText: SampleText,
      fontFamily: typography.type.headingmarketing
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "sizing",
      children: "Sizing"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Sizes are divided in 4 scales:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Small: ", jsxRuntimeExports.jsx(_components.code, {
          children: "sm"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Medium: ", jsxRuntimeExports.jsx(_components.code, {
          children: "md"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Large: ", jsxRuntimeExports.jsx(_components.code, {
          children: "lg"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Extra large: ", jsxRuntimeExports.jsx(_components.code, {
          children: "xl"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["All font size tokens are automatically reduced by 1.125 in mobile views, except for ", jsxRuntimeExports.jsx(_components.code, {
        children: "sm"
      }), ", in which case they instead increase by 2px for readability purposes."]
    }), "\n", jsxRuntimeExports.jsxs("table", {
      children: [jsxRuntimeExports.jsx("thead", {
        children: jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("th", {
            children: "Scale"
          }), jsxRuntimeExports.jsx("th", {
            children: "Desktop font size"
          }), jsxRuntimeExports.jsx("th", {
            children: "Mobile font size"
          })]
        })
      }), jsxRuntimeExports.jsxs("tbody", {
        children: [jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "sm-1"
          }), jsxRuntimeExports.jsx("td", {
            children: "10px"
          }), jsxRuntimeExports.jsx("td", {
            children: "12px"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "sm-2"
          }), jsxRuntimeExports.jsx("td", {
            children: "12px"
          }), jsxRuntimeExports.jsx("td", {
            children: "14px"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "sm-3"
          }), jsxRuntimeExports.jsx("td", {
            children: "14px"
          }), jsxRuntimeExports.jsx("td", {
            children: "16px"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "md-1"
          }), jsxRuntimeExports.jsx("td", {
            children: "16px"
          }), jsxRuntimeExports.jsx("td", {
            children: "14.22px"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "md-2"
          }), jsxRuntimeExports.jsx("td", {
            children: "18px"
          }), jsxRuntimeExports.jsx("td", {
            children: "16px"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "md-3"
          }), jsxRuntimeExports.jsx("td", {
            children: "20px"
          }), jsxRuntimeExports.jsx("td", {
            children: "17.77px"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "lg-1"
          }), jsxRuntimeExports.jsx("td", {
            children: "22px"
          }), jsxRuntimeExports.jsx("td", {
            children: "19.55px"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "lg-2"
          }), jsxRuntimeExports.jsx("td", {
            children: "24px"
          }), jsxRuntimeExports.jsx("td", {
            children: "21.33px"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "lg-3"
          }), jsxRuntimeExports.jsx("td", {
            children: "32px"
          }), jsxRuntimeExports.jsx("td", {
            children: "28.44px"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "xl-1"
          }), jsxRuntimeExports.jsx("td", {
            children: "48px"
          }), jsxRuntimeExports.jsx("td", {
            children: "42.66px"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "xl-2"
          }), jsxRuntimeExports.jsx("td", {
            children: "60px"
          }), jsxRuntimeExports.jsx("td", {
            children: "53.33px"
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "xl-3"
          }), jsxRuntimeExports.jsx("td", {
            children: "72px"
          }), jsxRuntimeExports.jsx("td", {
            children: "64px"
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "properties",
      children: "Properties"
    }), "\n", jsxRuntimeExports.jsxs("table", {
      children: [jsxRuntimeExports.jsx("thead", {
        children: jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("th", {
            children: "Property"
          }), jsxRuntimeExports.jsx("th", {
            children: "Value"
          }), jsxRuntimeExports.jsx("th", {
            children: "Output"
          })]
        })
      }), jsxRuntimeExports.jsxs("tbody", {
        children: [jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "font-family"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["body", jsxRuntimeExports.jsx("br", {}), "\nheading", jsxRuntimeExports.jsx("br", {}), "\nheading-marketing"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["'proxima-nova', sans-serif", jsxRuntimeExports.jsx("br", {}), "\n'proxima-nova', sans-serif", jsxRuntimeExports.jsx("br", {}), "\n'museo-slab', serif"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "font-style"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["normal", jsxRuntimeExports.jsx("br", {}), "\nemphasis"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["normal", jsxRuntimeExports.jsx("br", {}), "\nitalic"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "font-weight"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["regular", jsxRuntimeExports.jsx("br", {}), "\nmedium", jsxRuntimeExports.jsx("br", {}), "\nsemibold", jsxRuntimeExports.jsx("br", {}), "\nbold"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["400", jsxRuntimeExports.jsx("br", {}), "\n500", jsxRuntimeExports.jsx("br", {}), "\n600", jsxRuntimeExports.jsx("br", {}), "\n700"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "letter-spacing"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["normal", jsxRuntimeExports.jsx("br", {}), "\nlg", jsxRuntimeExports.jsx("br", {}), "\nxl"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["0", jsxRuntimeExports.jsx("br", {}), "\n0.25px", jsxRuntimeExports.jsx("br", {}), "\n0.5px"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "line-height"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["normal", jsxRuntimeExports.jsx("br", {}), "\nsm"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["1.5", jsxRuntimeExports.jsx("br", {}), "\n1.2"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: "text-transform"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["no", jsxRuntimeExports.jsx("br", {}), "\ncp", jsxRuntimeExports.jsx("br", {}), "\nlw", jsxRuntimeExports.jsx("br", {}), "\nup"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["none", jsxRuntimeExports.jsx("br", {}), "\ncapitalize", jsxRuntimeExports.jsx("br", {}), "\nlowercase", jsxRuntimeExports.jsx("br", {}), "\nuppercase"]
            })
          })]
        })]
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
  SampleText,
  MDXContent as default,
  typography
};
