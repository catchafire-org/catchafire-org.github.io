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
const Code = "" + new URL("code-brackets-9ef6443e.svg", import.meta.url).href;
const Colors = "" + new URL("colors-ac9401f3.svg", import.meta.url).href;
const Repo = "" + new URL("repo-fb4ece47.svg", import.meta.url).href;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h4: "h4",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Docs/Introduction"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "catchafires-frontend-library",
      children: "Catchafire's Frontend Library"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "first-what-is-ignite",
      children: "First, what is Ignite?🔥"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Ignite is our new UX/Design and Frontend ecosystem that encompasses:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: jsxRuntimeExports.jsx(_components.a, {
          href: "https://www.figma.com/files/project/710897/%F0%9F%A7%A9-Ignite---Design-System?fuid=451379491737607013",
          rel: "nofollow",
          children: "Figma"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: jsxRuntimeExports.jsx(_components.a, {
          href: "https://app.zeplin.io/styleguide/6217980035ee176804dcfa89",
          rel: "nofollow",
          children: "Zeplin"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: jsxRuntimeExports.jsx(_components.a, {
          href: "https://zeroheight.com/87168ebd2/p/138598-welcome-to-ignite",
          rel: "nofollow",
          children: "Zero Height"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Storybook (you're currently using it 😁)"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Vue 3 components, syntax and architecture"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "storybook",
      children: "Storybook"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Catchafire's Frontend Library is a Storybook instance, that is part of the new\nIgnite system.\nIt uses the ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://github.com/ComponentDriven/csf",
        rel: "nofollow",
        children: jsxRuntimeExports.jsx(_components.strong, {
          children: "component story\nformat"
        })
      }), " to help Catchafire\nfrontend engineers build and test UI components in isolation from the\nmain app's business logic, data, and context. This makes it easy to develop\nhard-to-reach states, and save these UI states as ", jsxRuntimeExports.jsx(_components.strong, {
        children: "stories"
      }), " to revisit\nduring development, testing, or QA."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Components are built with a ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://componentdriven.org",
        rel: "nofollow",
        children: jsxRuntimeExports.jsx(_components.strong, {
          children: "component-driven"
        })
      }), "\nprocess, allowing for reusability, scalability, and ease of maintenance. These\ncomponents are then available for all engineers to compose full pages within\nthe main Catchafire app, while reducing development time and maintaining conformity\nacross the codebase."]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "questions-comments-and-concerns",
      children: "Questions, Comments, and Concerns?"
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "reach-out-to-someone-from-the-frontend-team-on-slack",
      children: "Reach out to someone from the Frontend team on Slack:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "Josh"
        }), ": Testing (unit, integration, snapshot) and Accessibility (screenreaders, standards)"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "Naeem"
        }), ": Vue 3 (syntax, file structure, Vue Router, Vuex)"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: [jsxRuntimeExports.jsx(_components.strong, {
          children: "Ronald"
        }), ": Styling (SASS, Bootstrap layouts, utility classes, colors, fonts)"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "quick-links",
      children: "Quick links"
    }), "\n", jsxRuntimeExports.jsxs("div", {
      className: "link-list",
      children: [jsxRuntimeExports.jsxs("a", {
        className: "link-item",
        href: "https://catchafire-org.github.io/",
        target: "_blank",
        children: [jsxRuntimeExports.jsx("img", {
          src: Code,
          alt: "code"
        }), jsxRuntimeExports.jsx("span", {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: [jsxRuntimeExports.jsx("strong", {
              children: "GitHub page"
            }), "\nView Storybook on Github Pages"]
          })
        })]
      }), jsxRuntimeExports.jsxs("a", {
        className: "link-item",
        href: "https://zeroheight.com/87168ebd2/p/01441a-catchafire-design-system",
        target: "_blank",
        children: [jsxRuntimeExports.jsx("img", {
          src: Colors,
          alt: "colors"
        }), jsxRuntimeExports.jsx("span", {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: [jsxRuntimeExports.jsx("strong", {
              children: "Design System"
            }), "\nView Catchafire's Design System on Zeroheight"]
          })
        })]
      }), jsxRuntimeExports.jsxs("a", {
        className: "link-item",
        href: "https://v3.vuejs.org/guide/composition-api-introduction.html",
        target: "_blank",
        children: [jsxRuntimeExports.jsx("img", {
          src: Repo,
          alt: "repo"
        }), jsxRuntimeExports.jsx("span", {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: [jsxRuntimeExports.jsx("strong", {
              children: "Vue 3 documentation"
            }), "\nLearn how to use the Vue 3 composition API"]
          })
        })]
      }), jsxRuntimeExports.jsxs("a", {
        className: "link-item",
        href: "https://storybook.js.org/docs/vue/writing-docs/mdx",
        target: "_blank",
        children: [jsxRuntimeExports.jsx("img", {
          src: Repo,
          alt: "repo"
        }), jsxRuntimeExports.jsx("span", {
          children: jsxRuntimeExports.jsxs(_components.p, {
            children: [jsxRuntimeExports.jsx("strong", {
              children: "Storybook MDX documentation"
            }), "\nLearn how to write stories in MDX"]
          })
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
  MDXContent as default
};
