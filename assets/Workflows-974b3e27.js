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
const FDLC = "" + new URL("fdlc-db9cdaf0.png", import.meta.url).href;
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Docs/Workflows & Lifecycle"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "workflows",
      children: "Workflows"
    }), "\n", jsxRuntimeExports.jsx("table", {
      id: "workflow",
      children: jsxRuntimeExports.jsxs("tr", {
        children: [jsxRuntimeExports.jsxs("td", {
          children: [jsxRuntimeExports.jsx(_components.p, {
            children: "Pages"
          }), jsxRuntimeExports.jsxs("ul", {
            children: [jsxRuntimeExports.jsxs("li", {
              children: ["create new folder under ", jsxRuntimeExports.jsx("code", {
                children: "_Modules"
              })]
            }), jsxRuntimeExports.jsxs("li", {
              children: [jsxRuntimeExports.jsx(_components.p, {
                children: "create entry point files"
              }), jsxRuntimeExports.jsx("div", {
                class: "codeSample page",
                children: jsxRuntimeExports.jsxs(_components.ul, {
                  children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["Index.vue ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["_Index.scss ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["Index.spec.js ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n"]
                })
              })]
            }), jsxRuntimeExports.jsxs("li", {
              children: [jsxRuntimeExports.jsx(_components.p, {
                children: "create subpages and associated files"
              }), jsxRuntimeExports.jsx("div", {
                class: "codeSample page",
                children: jsxRuntimeExports.jsxs(_components.ul, {
                  children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["ExPage1.vue ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["_ExPage1.scss ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["ExPage1.spec.js ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n"]
                })
              })]
            }), jsxRuntimeExports.jsxs("li", {
              children: [jsxRuntimeExports.jsx(_components.p, {
                children: "create store, and router as needed"
              }), jsxRuntimeExports.jsx("div", {
                class: "codeSample page",
                children: jsxRuntimeExports.jsxs(_components.ul, {
                  children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["Router.js ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["Store.js ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n"]
                })
              })]
            })]
          })]
        }), jsxRuntimeExports.jsxs("td", {
          children: [jsxRuntimeExports.jsx(_components.p, {
            children: "Components"
          }), jsxRuntimeExports.jsxs("ul", {
            children: [jsxRuntimeExports.jsxs("li", {
              children: ["create new folder under ", jsxRuntimeExports.jsx("code", {
                children: "_Components"
              })]
            }), jsxRuntimeExports.jsxs("li", {
              children: [jsxRuntimeExports.jsx(_components.p, {
                children: "create files"
              }), jsxRuntimeExports.jsx("div", {
                class: "codeSample component",
                children: jsxRuntimeExports.jsxs(_components.ul, {
                  children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["ExComp.vue ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["_ExComp.scss ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["ExComp.stories.mdx ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["ExComp.spec.js (opt) ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n"]
                })
              })]
            }), jsxRuntimeExports.jsxs("li", {
              children: [jsxRuntimeExports.jsx(_components.p, {
                children: "run storybook"
              }), jsxRuntimeExports.jsx("div", {
                class: "codeSample component",
                children: jsxRuntimeExports.jsxs(_components.ul, {
                  children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["$ cd frontend ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n", jsxRuntimeExports.jsx(_components.li, {
                    children: "$ yarn storybook"
                  }), "\n"]
                })
              })]
            })]
          })]
        }), jsxRuntimeExports.jsxs("td", {
          children: [jsxRuntimeExports.jsx(_components.p, {
            children: "Tests"
          }), jsxRuntimeExports.jsxs("ul", {
            children: [jsxRuntimeExports.jsxs("li", {
              children: [jsxRuntimeExports.jsxs(_components.p, {
                children: ["⚠️ In progress ", jsxRuntimeExports.jsx("br", {}), "\ncreate component snapshots"]
              }), jsxRuntimeExports.jsx("div", {
                class: "codeSample test",
                children: jsxRuntimeExports.jsx(_components.p, {
                  children: "$ docker-compose exec vue npm test storybook.test.js"
                })
              })]
            }), jsxRuntimeExports.jsxs("li", {
              children: [jsxRuntimeExports.jsxs(_components.p, {
                children: ["create and run ", jsxRuntimeExports.jsx("br", {}), " page unit tests"]
              }), jsxRuntimeExports.jsx("div", {
                class: "codeSample test",
                children: jsxRuntimeExports.jsx(_components.p, {
                  children: "$ docker-compose exec vue npm run test"
                })
              })]
            })]
          })]
        }), jsxRuntimeExports.jsxs("td", {
          children: [jsxRuntimeExports.jsx(_components.p, {
            children: "Builds & Deploys"
          }), jsxRuntimeExports.jsxs("ul", {
            children: [jsxRuntimeExports.jsxs("li", {
              children: [jsxRuntimeExports.jsx(_components.p, {
                children: "build stories"
              }), jsxRuntimeExports.jsx("div", {
                class: "codeSample build",
                children: jsxRuntimeExports.jsxs(_components.ul, {
                  children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["$ cd frontend ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n", jsxRuntimeExports.jsx(_components.li, {
                    children: "$ yarn build-storybook"
                  }), "\n"]
                })
              })]
            }), jsxRuntimeExports.jsxs("li", {
              children: [jsxRuntimeExports.jsx(_components.p, {
                children: "deploy stories"
              }), jsxRuntimeExports.jsx("div", {
                class: "codeSample build",
                children: jsxRuntimeExports.jsxs(_components.ul, {
                  children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["$ yarn deploy-storybook ", jsxRuntimeExports.jsx("br", {})]
                  }), "\n", jsxRuntimeExports.jsxs(_components.li, {
                    children: ["\n", jsxRuntimeExports.jsx("a", {
                      href: "https://catchafire-org.github.io/",
                      target: "_blank",
                      children: "https://catchafire-org.github.io/"
                    }), "\n"]
                  }), "\n"]
                })
              })]
            }), jsxRuntimeExports.jsxs("li", {
              children: [jsxRuntimeExports.jsxs(_components.p, {
                children: ["build components ", jsxRuntimeExports.jsx("br", {}), " and pages"]
              }), jsxRuntimeExports.jsx("div", {
                class: "codeSample build",
                children: jsxRuntimeExports.jsxs(_components.ul, {
                  children: ["\n", jsxRuntimeExports.jsx(_components.li, {
                    children: "$ docker-compose exec vue npm run build"
                  }), "\n"]
                })
              })]
            }), jsxRuntimeExports.jsxs("li", {
              children: ["commit and push from the ", jsxRuntimeExports.jsx("code", {
                children: "django_caf"
              }), " directory"]
            })]
          })]
        })]
      })
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "component-development-lifecycle",
      children: "Component Development Lifecycle"
    }), "\n", jsxRuntimeExports.jsx("img", {
      src: FDLC,
      alt: "Component dev lifecycle"
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
