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
    em: "em",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Docs/Tests"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "testing-components",
      children: "Testing Components"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Vue pages are composed of smaller presentational (dumb) components. Testing\npresentational components is very trivial and mostly concerned with layout changes.\nIn most cases, it is sufficient to only apply snapshot tests to presentational components,\nwhile in all cases, Vue pages should only have unit tests."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Note: snapshot and unit tests are both run inside of Docker"
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "testing-vue-components---️-in-progress",
      children: ["Testing Vue components - ", jsxRuntimeExports.jsx(_components.em, {
        children: jsxRuntimeExports.jsx(_components.strong, {
          children: "⚠️ In progress"
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Do the following to run snapshot tests:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["open terminal to ", jsxRuntimeExports.jsx(_components.code, {
          children: "django_caf"
        }), " directory"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["$ ", jsxRuntimeExports.jsx(_components.code, {
          children: "docker-compose exec vue npm test storybook.test.js"
        })]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["if you have to update a test, delete ", jsxRuntimeExports.jsx(_components.code, {
          children: "storybook.test.js.snap"
        }), " from ", jsxRuntimeExports.jsx(_components.code, {
          children: "frontend/__snapshots__"
        }), " and rerun snapshots"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "testing-vue-pages",
      children: "Testing Vue pages"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["create a ", jsxRuntimeExports.jsx(_components.code, {
          children: ".spec.js"
        }), " file within the same directory as the ", jsxRuntimeExports.jsx(_components.code, {
          children: ".vue"
        }), " file. (usually in ", jsxRuntimeExports.jsx(_components.code, {
          children: "_Modules"
        }), ")"]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "add your tests. See examples below."
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["$ ", jsxRuntimeExports.jsx(_components.code, {
          children: "docker-compose exec vue npm run test"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Coming soon"
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
