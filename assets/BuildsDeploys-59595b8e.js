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
const Build = "" + new URL("build-b327f5a4.png", import.meta.url).href;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h5: "h5",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Docs/Builds & Deploys"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "builds--deploys",
      children: "Builds & Deploys"
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "building-components",
      children: "Building components"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Vue components are built to the ", jsxRuntimeExports.jsx(_components.code, {
        children: "assets/frontend"
      }), " directory within Docker.\nA gulp script then combines everything in ", jsxRuntimeExports.jsx(_components.code, {
        children: "assets"
      }), " into bundled files."]
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["$ ", jsxRuntimeExports.jsx(_components.code, {
          children: "docker-compose exec vue npm run build"
        })]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "commit and push"
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "building-stories",
      children: "Building stories"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Storybook is built in isolation from the main app, so in order to simplify things, we run the build\ncommands outside of Docker."
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["change path in terminal to the ", jsxRuntimeExports.jsx(_components.code, {
          children: "frontend"
        }), " directory"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Follow these steps if this is the first time deploying. Skip if not first time:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Send a request to the Frontend team requesting to be added to the following with read/write privileges:", "\n", jsxRuntimeExports.jsxs(_components.ul, {
          children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
            children: ["the github org: ", jsxRuntimeExports.jsx(_components.code, {
              children: "catchafire-org"
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.li, {
            children: ["the github repo: ", jsxRuntimeExports.jsx(_components.code, {
              children: "catchafire-org.github.io"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Accept the invitations"
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: jsxRuntimeExports.jsx(_components.em, {
          children: jsxRuntimeExports.jsxs(_components.strong, {
            children: ["❗IMPORTANT: make sure you're in the ", jsxRuntimeExports.jsx(_components.code, {
              children: "frontend"
            }), " directory"]
          })
        })
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Generate a ", jsxRuntimeExports.jsx(_components.a, {
          href: "https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token",
          rel: "nofollow",
          children: jsxRuntimeExports.jsx(_components.strong, {
            children: "personal access token"
          })
        }), ", and make sure to select ALL scopes"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Continue on to next steps:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["$ ", jsxRuntimeExports.jsx(_components.code, {
          children: "yarn build-storybook"
        }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
          children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
            children: ["stories are built to ", jsxRuntimeExports.jsx(_components.code, {
              children: "frontend/storybook-static"
            }), ". If you face any issues building,\nyou can remove this folder and rebuild."]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["$ ", jsxRuntimeExports.jsx(_components.code, {
          children: "yarn deploy-storybook"
        }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
          children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
            children: [jsxRuntimeExports.jsx(_components.strong, {
              children: "NOTE:"
            }), " if you get a permission error, then regenerate another personal access token, and make sure ALL scopes are selected."]
          }), "\n", jsxRuntimeExports.jsxs(_components.li, {
            children: [jsxRuntimeExports.jsx(_components.strong, {
              children: "NOTE:"
            }), " if you get prompted for a username and password, make sure the password is your access token"]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["View ", jsxRuntimeExports.jsx(_components.code, {
          children: "https://catchafire-org.github.io/"
        })]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h5, {
      id: "note-there-may-be-an-update-delay-in-the-live-site-for-the-following-reasons",
      children: "Note: There may be an update delay in the live site for the following reasons:"
    }), "\n", jsxRuntimeExports.jsxs(_components.ol, {
      children: ["\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Build Time: GitHub will run a jekyll build on its end, which can take some time."
      }), "\n", jsxRuntimeExports.jsx(_components.li, {
        children: "Caching: GitHub Pages sets a max-age of 10 minutes, which means your browser will not check for updates 10 minutes since the last retrieval of the page."
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "You can follow the build at https://github.com/catchafire-org/catchafire-org.github.io/actions"
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "builds-overview",
      children: "Builds Overview"
    }), "\n", jsxRuntimeExports.jsx("img", {
      src: Build,
      alt: "Builds overview"
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
