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
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Docs/Files & Folders"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "files--folders",
      children: "Files & Folders"
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "naming-files",
      children: "Naming Files"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Files and folders should be named using title case (ie. ", jsxRuntimeExports.jsx(_components.code, {
        children: "ExampleComponent.vue"
      }), ") to\neasily discern Vue3 components and styling from the older Vue2 code."]
    }), "\n", jsxRuntimeExports.jsxs(_components.h4, {
      id: "top-level-folders-get-distinguished-further-with-an-_-prefix",
      children: ["Top-level folders get distinguished further with an ", jsxRuntimeExports.jsx(_components.code, {
        children: "_"
      }), " prefix:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "_Components"
        }), " - all Vue components (Presenational Components)"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "_Docs"
        }), " - all Ignite documentation"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "_Modules"
        }), " - all Vue Pages (Container Components) and associated module files (store, router, etc)"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "_Tokens"
        }), " contains all of the Design Tokens"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "structure",
      children: "Structure"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "modules--pages-structure",
      children: "Modules & Pages Structure"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Each module should have its own folder within ", jsxRuntimeExports.jsx(_components.code, {
        children: "_Modules"
      }), " which contains the following:"]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "Index.vue"
        }), " - entry page into the module"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "_Index.scss"
        }), " - entry page styling *** ❗NOTE: All CSS files must be SASS partials, and therefore must have the ", jsxRuntimeExports.jsx(_components.code, {
          children: "_"
        }), " prefix***"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "Index.spec.js"
        }), " - entry page unit testing"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "Router.js"
        }), " - module specific routes"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: "Store.js"
        }), " - module specific stores"]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "any other module specific code"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "any subpages associated with the Vue page and their respective styles and tests"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "example-module-structure",
      children: "Example module structure:"
    }), "\n", jsxRuntimeExports.jsx("table", {
      children: jsxRuntimeExports.jsxs(_components.p, {
        children: ["_Modules\n", jsxRuntimeExports.jsx("tr", {
          children: jsxRuntimeExports.jsxs("td", {
            children: [jsxRuntimeExports.jsx("strong", {
              children: "Projects"
            }), " folder"]
          })
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "Index.vue"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "_Index.scss"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "Index.spec.js"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "Route.js"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "Store.js"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "ProjectDetails.vue"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "_ProjectDetails.scss"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "ProjectDetails.spec.js"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "Wishlist.vue"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "_Wishlist.scss"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "Wishlist.spec.js"
          })]
        })]
      })
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "components-structure",
      children: "Components Structure"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Each Vue component should have its own folder which contains the following:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: ".vue"
        }), " - component's template and JS"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: ".scss"
        }), " - component's styling"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: ".stories.mdx"
        }), " - component's documentation, also used to create snapshots"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.code, {
          children: ".spec.js"
        }), " - optional unit testing, only for components that need it"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "example-component-structure",
      children: "Example component structure:"
    }), "\n", jsxRuntimeExports.jsx("table", {
      children: jsxRuntimeExports.jsxs(_components.p, {
        children: ["_Components\n", jsxRuntimeExports.jsx("tr", {
          children: jsxRuntimeExports.jsxs("td", {
            children: [jsxRuntimeExports.jsx("strong", {
              children: "Badge"
            }), " folder"]
          })
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "Badge.vue"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "_Badge.scss"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "Badge.stores.mdx"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "Badge.spec.js (optional)"
          })]
        })]
      })
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "grouping-structure",
      children: "Grouping Structure"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Components of the same type should be placed in their respective folders, and then those\nfolders should be placed in one parent folder. This keeps things tidy and organized. It\nalso allows for base styles to be easily associated with similar components."
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "example-grouping-structure",
      children: "Example grouping structure:"
    }), "\n", jsxRuntimeExports.jsx("table", {
      children: jsxRuntimeExports.jsxs(_components.p, {
        children: ["_Components\n", jsxRuntimeExports.jsx("tr", {
          children: jsxRuntimeExports.jsxs("td", {
            children: [jsxRuntimeExports.jsx("strong", {
              children: "Cards"
            }), " folder"]
          })
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "_Cards.scss"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsxs("td", {
            children: [jsxRuntimeExports.jsx("strong", {
              children: "BlogCard"
            }), " folder"]
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "_BlogCard.scss"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "BlogCard.stories.mdx"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "BlogCard.vue"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsxs("td", {
            children: [jsxRuntimeExports.jsx("strong", {
              children: "ProjectCard"
            }), " folder"]
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "_ProjectCard.scss"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "ProjectCard.stories.mdx"
          })]
        }), "\n", jsxRuntimeExports.jsxs("tr", {
          children: [jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {}), jsxRuntimeExports.jsx("td", {
            children: "ProjectCard.vue"
          })]
        })]
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: "BlogCard.vue"
      }), " and ", jsxRuntimeExports.jsx(_components.code, {
        children: "ProjectCard.vue"
      }), " will both import ", jsxRuntimeExports.jsx(_components.code, {
        children: "_Cards.scss"
      }), " and use the base styles\nfor cards."]
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
