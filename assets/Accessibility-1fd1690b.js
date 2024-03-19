import { j as jsxRuntimeExports } from "./jsx-runtime-2adeca77.js";
import { u as useMDXComponents } from "./index-be3ad3a0.js";
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
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Docs/Accessibility"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "accessibility",
      children: "Accessibility"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "https://www.notion.so/catchafire/UX-Accessibility-Annotations-b756eb80715849e38b95384ebbe67c83"
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "key-areas",
      children: "Key Areas"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.strong, {
        children: "Note: Using native elements in place of ‘custom’ elements will always lead to better accessibility by default."
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Many of the areas of focus in the ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.notion.so/catchafire/UX-Accessibility-Annotations-b756eb80715849e38b95384ebbe67c83",
        rel: "nofollow",
        children: jsxRuntimeExports.jsx(_components.strong, {
          children: "Notion doc"
        })
      }), " fall into one of the following:"]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "wcag-operable",
      children: "WCAG: Operable"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "form-elements",
      children: "Form Elements"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Form elements should be focusable and interactive with keyboard as well as mouse.\nUsing proper HTML markup will ensure this is likely already possible, but we would want to check all important forms for this functionality.\n", jsxRuntimeExports.jsx(_components.a, {
        href: "https://docs.google.com/document/d/11TTItsqNer83Ugzfw3R4y8O9vnIUf-EnBuQmZBElKec/edit#heading=h.v0fgzl492n0k",
        rel: "nofollow",
        children: jsxRuntimeExports.jsx(_components.strong, {
          children: "Notes about “Understandable” markup below"
        })
      })]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "links-vs-buttons",
      children: "Links vs Buttons"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Using semantic markup is always preferred over manually defining a “role”. For example, an anchor tag ", jsxRuntimeExports.jsx(_components.code, {
        children: "<a>"
      }), " or ", jsxRuntimeExports.jsx(_components.code, {
        children: "<button>"
      }), " is always preferred over another element (", jsxRuntimeExports.jsx(_components.code, {
        children: "<div>"
      }), ") with an onclick handler."]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "buttons",
      children: "Buttons"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Buttons are clickable actions on the page. For example, downloading a file, form submitting or log out. ", jsxRuntimeExports.jsx(_components.code, {
        children: "<button></button>"
      }), " preferred over ", jsxRuntimeExports.jsx(_components.code, {
        children: '<div role="button"></div>'
      }), " and ", jsxRuntimeExports.jsx(_components.code, {
        children: '<a href role="button"></a>'
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "links",
      children: "Links"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Links are usually text links that move you away from the current page you are on.\nhttps://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Providing a role can be used to better explain the content of the link\nEx. (a link in a list of items):\n", jsxRuntimeExports.jsx(_components.code, {
        children: "<a href=”http://google.com” role=”menuitem”>Google.com</a>"
      }), "\nScreen readers handle links slightly differently than they do buttons. All links and buttons are tabbable (with proper ", jsxRuntimeExports.jsx(_components.code, {
        children: "tabindex"
      }), " attributes applied), but pressing ", jsxRuntimeExports.jsx(_components.code, {
        children: "Space"
      }), " or ", jsxRuntimeExports.jsx(_components.code, {
        children: "Enter"
      }), " triggers a button, whereas links are only triggered with an ", jsxRuntimeExports.jsx(_components.code, {
        children: "Enter"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "annotation-examples",
      children: "Annotation examples"
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "aria-role-link",
      children: "Aria role: link"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "<a href=”http://google.com”>Link text</a>"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Note: the ", jsxRuntimeExports.jsx(_components.code, {
        children: "href"
      }), " is important to pick up native support with no additional attributes for interactivity."]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "aria-role-button",
      children: "Aria role: button"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: "<button type=”button”>Click here to signup</button>"
      })
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Note: https://w3c.github.io/aria/#button Prefer the native ", jsxRuntimeExports.jsx(_components.code, {
        children: "<button>"
      }), " instead of defining a ", jsxRuntimeExports.jsx(_components.code, {
        children: 'role="button"'
      }), " because you may then need to provide additional attributes which can become unwieldy depending on the complexity of the interactions expected. Ex. ", jsxRuntimeExports.jsx(_components.code, {
        children: "<div role=”button” aria-disabled=”true”>Disabled button</div>"
      })]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "wcag-understandable",
      children: "WCAG: Understandable"
    }), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "landmarks",
      children: "Landmarks"
    }), "\n", jsxRuntimeExports.jsxs(_components.ul, {
      children: ["\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Articles https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article", "\n", jsxRuntimeExports.jsxs(_components.ul, {
          children: ["\n", jsxRuntimeExports.jsx(_components.li, {
            children: "Represents a self-contained composition in a document. Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content"
          }), "\n", jsxRuntimeExports.jsxs(_components.li, {
            children: [jsxRuntimeExports.jsx(_components.code, {
              children: "<article></article>"
            }), " preferred over ", jsxRuntimeExports.jsx(_components.code, {
              children: '<div role="article"></div>'
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Aside https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside", "\n", jsxRuntimeExports.jsxs(_components.ul, {
          children: ["\n", jsxRuntimeExports.jsx(_components.li, {
            children: "A supporting section that relates to the main content. Usually on the right or left of the page"
          }), "\n", jsxRuntimeExports.jsxs(_components.li, {
            children: [jsxRuntimeExports.jsx(_components.code, {
              children: "<aside></aside>"
            }), " preferred over ", jsxRuntimeExports.jsx(_components.code, {
              children: '<div role="complementary"></div>'
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Main https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main", "\n", jsxRuntimeExports.jsxs(_components.ul, {
          children: ["\n", jsxRuntimeExports.jsx(_components.li, {
            children: "A main landmark identifies the primary content of the page."
          }), "\n", jsxRuntimeExports.jsxs(_components.li, {
            children: [jsxRuntimeExports.jsx(_components.code, {
              children: "<main></main>"
            }), " preferred over ", jsxRuntimeExports.jsx(_components.code, {
              children: '<div role="main"></div>'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.li, {
            children: ["Used in conjunction with ", jsxRuntimeExports.jsx(_components.a, {
              href: "https://css-tricks.com/how-to-create-a-skip-to-content-link/",
              rel: "nofollow",
              children: jsxRuntimeExports.jsx(_components.strong, {
                children: "“Skip” linking"
              })
            }), " https://www.w3.org/TR/WCAG21/#bypass-blocks"]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Nav https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav", "\n", jsxRuntimeExports.jsxs(_components.ul, {
          children: ["\n", jsxRuntimeExports.jsx(_components.li, {
            children: "A list of links that are intended to navigate the site or the page"
          }), "\n", jsxRuntimeExports.jsxs(_components.li, {
            children: [jsxRuntimeExports.jsx(_components.code, {
              children: "<nav></nav>"
            }), " preferred over ", jsxRuntimeExports.jsx(_components.code, {
              children: '<div role="navigation"></div>'
            })]
          }), "\n", jsxRuntimeExports.jsxs(_components.li, {
            children: ["To the point above, the navigation should be skippable with a ", jsxRuntimeExports.jsx(_components.a, {
              href: "https://css-tricks.com/how-to-create-a-skip-to-content-link/",
              rel: "nofollow",
              children: jsxRuntimeExports.jsx(_components.strong, {
                children: "Skip link"
              })
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Banner https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header", "\n", jsxRuntimeExports.jsxs(_components.ul, {
          children: ["\n", jsxRuntimeExports.jsx(_components.li, {
            children: "A banner usually appears at the top of the page and typically spans the full width."
          }), "\n", jsxRuntimeExports.jsxs(_components.li, {
            children: [jsxRuntimeExports.jsx(_components.code, {
              children: "<header></header>"
            }), " preferred over ", jsxRuntimeExports.jsx(_components.code, {
              children: '<div role="banner"></div>'
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxRuntimeExports.jsxs(_components.li, {
        children: ["Section https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section", "\n", jsxRuntimeExports.jsxs(_components.ul, {
          children: ["\n", jsxRuntimeExports.jsx(_components.li, {
            children: "A area that doesn't have a more specific semantic element to represent it"
          }), "\n", jsxRuntimeExports.jsxs(_components.li, {
            children: [jsxRuntimeExports.jsx(_components.code, {
              children: "<section></section>"
            }), " preferred over ", jsxRuntimeExports.jsx(_components.code, {
              children: '<div role="contentinfo"></div>'
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "content-order-tab-order",
      children: "Content order (Tab order)"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Tab order is for users who have difficulty navigating a web page with a mouse. So instead they use their keyboard."
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Indicating tab orders allows users to navigate the site with intention and logical purpose."
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "annotation-example",
      children: "Annotation example"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: 'tabindex="-1"'
      }), " means the element should not be considered in the tab order\n", jsxRuntimeExports.jsx(_components.code, {
        children: 'tabindex="0"'
      }), " is typically the default if a non-standard element (", jsxRuntimeExports.jsx(_components.code, {
        children: "<div>"
      }), ", ", jsxRuntimeExports.jsx(_components.code, {
        children: "<span>"
      }), ", etc) should be focusable with the tab key. Tab order will be top to bottom in this example."]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "alt-text-for-graphics",
      children: "Alt text for graphics"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "The text alternative should convey the meaning or content that is displayed visually, which typically isn’t a literal description of the image."
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "annotation-examples-1",
      children: "Annotation examples"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: '<img src="yellow_sunflower.jpg" alt="Photo of a yellow sunflower"/>'
      }), "\n", jsxRuntimeExports.jsx(_components.code, {
        children: '<img src="background_pattern.png" alt=""/>'
      }), "\n(if the image or graphic is decorative and not essential to the page content)"]
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h3, {
      id: "form-elements-1",
      children: "Form Elements"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Provide labels to identify all form controls. This allows users to understand the required data for the form element.\n", jsxRuntimeExports.jsx(_components.a, {
        href: "https://www.w3.org/WAI/tutorials/forms/labels/",
        rel: "nofollow",
        children: jsxRuntimeExports.jsx(_components.strong, {
          children: "Read More"
        })
      })]
    }), "\n", jsxRuntimeExports.jsx(_components.h4, {
      id: "annotation-examples-2",
      children: "Annotation examples"
    }), "\n", jsxRuntimeExports.jsx(_components.h5, {
      id: "aria-role-input",
      children: "Aria role: input"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-html",
        children: '<input type="text" name="search" aria-label="Search">\n\n<label for="firstname">First name:</label>\n<input type="text" name="firstname" id="firstname">\n\n<input type="text" name="search" aria-labelledby="searchbutton">\n<button id="searchbutton" type="submit">Search</button>\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h5, {
      id: "aria-role-checkbox",
      children: "Aria role: checkbox"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: jsxRuntimeExports.jsx(_components.code, {
        children: '<input type="checkbox" name="occupations" aria-label="Teacher">'
      })
    }), "\n", jsxRuntimeExports.jsx("br", {}), "\n", jsxRuntimeExports.jsx(_components.h5, {
      id: "grouping-related-checkboxes-screen-readers-will-make-a-distinction-when-reading-back-the-content-of-the-page",
      children: "Grouping related checkboxes (screen readers will make a distinction when reading back the content of the page)"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-html",
        children: '<fieldset>\n  <legend>I want to receive</legend>\n  <div>\n    <input type="checkbox" name="newsletter" id="check_1">\n    <label for="check_1">The weekly newsletter</label>\n  </div>\n  <div>\n    <input type="checkbox" name="newsletter" id="check_2">\n    <label for="check_2">Offers from the company</label>\n  </div>\n</fieldset>\n'
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
