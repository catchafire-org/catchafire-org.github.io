import { j as jsxRuntimeExports } from "./jsx-runtime-2adeca77.js";
import { u as useMDXComponents } from "./index-be3ad3a0.js";
import "./chunk-HLWAVYOI-954d167c.js";
import "./index-3a0ba8e4.js";
/* empty css               *//* empty css                 */import "./iframe-2f763193.js";
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
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
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
    }), "\n", "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "typography----usage",
      children: "Typography -  Usage"
    }), "\n", jsxRuntimeExports.jsx("hr", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "sass-functions",
      children: "SASS functions"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Our SASS files include a simple and easy-to-remember way to apply the aforementioned properties as type tokens. This standardizes the process, clears clutter, and reduces the risk of errors. The functions work in the same way to define family, size, weight, and letter spacing. The following example illustrates the syntax."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.strong, {
        children: "Example:"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-scss",
        children: ".ids--type-body {\n  font-family: typefamily(body);\n  font-size: typescale(md,2);\n  font-weight: typeweight(medium);\n  letter-spacing: typespacing(xl);\n}\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "helper-classes",
      children: "Helper classes"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "The following class names are already created to simplify the usage of type tokens. They're not meant to be edited."
    }), "\n", jsxRuntimeExports.jsxs("table", {
      children: [jsxRuntimeExports.jsx("thead", {
        children: jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("th", {
            children: "Figma token name"
          }), jsxRuntimeExports.jsx("th", {
            children: "Helper class name"
          }), jsxRuntimeExports.jsx("th", {
            children: "Output"
          })]
        })
      }), jsxRuntimeExports.jsxs("tbody", {
        children: [jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/DisplayXXXLarge", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/DisplayXXXLarge"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-display-xxxl"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(heading-marketing);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(xl,3);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(bold);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(normal);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/DisplayXXLarge", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/DisplayXXLarge"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-display-xxl"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(heading-marketing);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(xl,2);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(bold);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(normal);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Display - X-Large", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Display - X-Large"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-display-xl"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(heading);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(xl,1);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(medium);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(normal);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Display - Large", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Display - Large"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-display-large"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(heading);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(lg,3);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(medium);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(lg);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Display - Medium", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Display - Medium"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-display-medium"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(heading);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(lg,2);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(medium);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(normal);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Display - Small", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Display - Small"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-display-small"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(heading);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(md,3);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(semibold);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(lg);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Blockquote", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Blockquote"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-blockquote"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(body);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(lg,1);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(medium);", jsxRuntimeExports.jsx("br", {}), "\nfont-style: var(--type-style-emphasis);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(normal);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Title", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Title"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-title"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(body);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(md,1);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(medium);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(normal);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Paragraph Big", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Paragraph Big"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-paragraph-big"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(body);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(lg,1);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(medium);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(xl);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Paragraph Small", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Paragraph Small"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-paragraph-small"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(body);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(md,2);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(medium);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(xl);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Body", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Body"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-body"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(body);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(md,2);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(medium);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(xl);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Subtitle", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Subtitle"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-subtitle"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(body);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(sm,3);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(semibold);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(normal);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Button Big", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Button Big"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-button-big"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(body);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(md,1);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(medium);", jsxRuntimeExports.jsx("br", {}), "\ntext-transform: uppercase;", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(xl);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Button", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Button"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-button"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(body);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(sm,2);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(medium);", jsxRuntimeExports.jsx("br", {}), "\ntext-transform: uppercase;", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(xl);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Caption", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Caption"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-caption"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(body);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(sm,2);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(semibold);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(lg);"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Overline", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Overline"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-overline"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(body);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(sm,1);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(medium);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(xl);", jsxRuntimeExports.jsx("br", {}), "\ntext-transform: uppercase;"]
            })
          })]
        }), jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["Large Screen/Overline Big", jsxRuntimeExports.jsx("br", {}), "\nSmall Screen/Overline Big"]
            })
          }), jsxRuntimeExports.jsx("td", {
            children: "ids--type-overline-big"
          }), jsxRuntimeExports.jsx("td", {
            children: jsxRuntimeExports.jsxs(_components.p, {
              children: ["font-family: typefamily(body);", jsxRuntimeExports.jsx("br", {}), "\nfont-size: typescale(md,2);", jsxRuntimeExports.jsx("br", {}), "\nfont-weight: typeweight(medium);", jsxRuntimeExports.jsx("br", {}), "\nletter-spacing: typespacing(xl);", jsxRuntimeExports.jsx("br", {}), "\ntext-transform: uppercase;"]
            })
          })]
        })]
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.strong, {
        children: "Example:"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-html",
        children: '<h2 class="ids--type-display-medium">This is a medium display title</h2>\n\n<div class="ids--type-caption">This is a caption</div>\n'
      })
    }), "\n", jsxRuntimeExports.jsx("hr", {}), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "important-note-on-responsive-features",
      children: "Important note on responsive features:"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Large and Small size fonts use the same class names that will auto-adjust to the screen size."
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["For example, ", jsxRuntimeExports.jsx(_components.code, {
        children: "Large Screen/Caption"
      }), " and  ", jsxRuntimeExports.jsx(_components.code, {
        children: "Small Screen/Caption"
      }), " will both use ", jsxRuntimeExports.jsx(_components.code, {
        children: "ids--type-caption"
      }), " class name. The browser determines which font size is used."]
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
