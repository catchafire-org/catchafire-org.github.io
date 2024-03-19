var _a, _b, _c;
import { g as get } from "./get-586119b3.js";
import { o as openBlock, c as createElementBlock, b as createBaseVNode, n as normalizeClass, d as createCommentVNode, F as Fragment, j as renderList, g as createTextVNode, t as toDisplayString, f as normalizeStyle } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./_commonjsHelpers-ca272635.js";
const _sfc_main = {
  props: {
    opts: {
      type: Object
    },
    isMobile: {
      type: Boolean
    }
  },
  setup() {
    return { get };
  }
};
const _hoisted_1 = { class: "container ids--type-body" };
const _hoisted_2 = { class: "col-md-7" };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = { class: "caf-mb-8" };
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = {
  key: 1,
  class: "ids__marketing-bullets ids--type-paragraph-small"
};
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = { class: "caf-mb-7 caf-mb-md-0" };
const _hoisted_10 = ["href"];
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", { class: "fa fa-arrow-right caf-ml-1" }, null, -1);
const _hoisted_12 = ["href"];
const _hoisted_13 = ["href"];
const _hoisted_14 = ["src", "alt"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ids__marketing-featuredSideBySide ids__marketing--light container-fluid", `ids__marketing--${$props.opts.theme} ${$setup.get(
      $props.opts,
      "content.class",
      "caf-pt-20 caf-pb-20"
    )}`]),
    style: normalizeStyle($setup.get($props.opts, "content.style"))
  }, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", {
        class: normalizeClass(["row align-items-md-center", {
          "flex-column-reverse flex-md-row-reverse": $props.opts.visible.imgFirst && !$props.isMobile
        }])
      }, [
        createBaseVNode("div", _hoisted_2, [
          $setup.get($props.opts, "content.eyebrow") ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: "ids__marketing-eyebrow ids--type-marketing-overline-big text-uppercase caf-mb-4",
            innerHTML: _ctx.$sanitize($props.opts.content.eyebrow)
          }, null, 8, _hoisted_3)) : createCommentVNode("", true),
          $setup.get($props.opts, "content.title") ? (openBlock(), createElementBlock("h2", {
            key: 1,
            class: "ids__marketing-title ids--type-marketing-xl-expressive caf-mb-4",
            innerHTML: _ctx.$sanitize($props.opts.content.title)
          }, null, 8, _hoisted_4)) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_5, [
            $setup.get($props.opts, "content.subtitle") ? (openBlock(), createElementBlock("p", {
              key: 0,
              class: normalizeClass(["ids__marketing-subtitle ids--type-paragraph-big", { "caf-mb-6": $setup.get($props.opts, "content.bullets") }]),
              innerHTML: _ctx.$sanitize($props.opts.content.subtitle)
            }, null, 10, _hoisted_6)) : createCommentVNode("", true),
            $setup.get($props.opts, "content.bullets") ? (openBlock(), createElementBlock("ul", _hoisted_7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($props.opts.content.bullets, (item, key) => {
                return openBlock(), createElementBlock("li", {
                  key,
                  innerHTML: item
                }, null, 8, _hoisted_8);
              }), 128))
            ])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_9, [
            $setup.get($props.opts, "content.link") && !$setup.get($props.opts, "content.cta") ? (openBlock(), createElementBlock("a", {
              key: 0,
              class: "ids__marketing-link ids--type-button-big d-block d-md-inline text-uppercase",
              href: $props.opts.content.link.url
            }, [
              createTextVNode(toDisplayString($props.opts.content.link.label) + " ", 1),
              _hoisted_11
            ], 8, _hoisted_10)) : createCommentVNode("", true),
            $setup.get($props.opts, "content.cta") && !$setup.get($props.opts, "content.link") ? (openBlock(), createElementBlock("a", {
              key: 1,
              class: normalizeClass([
                "btn btn-marketing caf-mr-5 caf-mb-5 caf-mb-md-0",
                ({
                  "btn-secondary": $props.opts.theme !== "dark" && $props.opts.theme !== "blue" && !$props.opts.content.cta.class,
                  "btn-hollow-on-hc": ($props.opts.theme === "dark" || $props.opts.theme === "blue") && !$props.opts.content.cta.class
                }, $props.opts.content.cta.class)
              ]),
              href: $props.opts.content.cta.url
            }, toDisplayString($props.opts.content.cta.label), 11, _hoisted_12)) : createCommentVNode("", true),
            $setup.get($props.opts, "content.secondaryCta") && !$setup.get($props.opts, "content.link") ? (openBlock(), createElementBlock("a", {
              key: 2,
              class: normalizeClass([
                "btn btn-marketing caf-mb-5 caf-mb-md-0",
                ($props.opts.content.secondaryCta.class, {
                  "btn-secondary": $props.opts.theme !== "dark" && $props.opts.theme !== "blue" && !$props.opts.content.secondaryCta.class,
                  "btn-hollow-on-hc": ($props.opts.theme === "dark" || $props.opts.theme === "blue") && !$props.opts.content.secondaryCta.class
                })
              ]),
              href: $props.opts.content.secondaryCta.url
            }, toDisplayString($props.opts.content.secondaryCta.label), 11, _hoisted_13)) : createCommentVNode("", true)
          ])
        ]),
        $setup.get($props.opts, "content.image") ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["col-md-5", {
            "text-right": !$props.opts.visible.imgFirst && !$props.isMobile,
            "text-center": $props.isMobile
          }])
        }, [
          createBaseVNode("img", {
            class: "ids__marketing-image caf-mb-0",
            src: $props.opts.content.image.src,
            alt: $props.opts.content.image.alt,
            height: "100",
            width: "100"
          }, null, 8, _hoisted_14)
        ], 2)) : createCommentVNode("", true)
      ], 2)
    ])
  ], 6);
}
const FeaturedSideBySideComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "FeaturedSideBySide", "description": "", "tags": {}, "props": [{ "name": "opts", "type": { "name": "object" } }, { "name": "isMobile", "type": { "name": "boolean" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/FeaturedSideBySide/FeaturedSideBySide.vue"] };
const FeaturedSideBySide_stories = {
  title: "Blocks/Marketing"
};
const FeaturedSideBySide = {
  args: {
    opts: {
      theme: "light",
      content: {
        bullets: ["Sed ac nunc, eget msa, cursus.", "Sed ac nunc, eget msa, cursus.", "Sed ac nunc, eget msa, cursus."],
        cta: {
          label: "Primary Button",
          url: "/"
        },
        secondaryCta: {
          label: "Secondary Button",
          url: "/"
        },
        eyebrow: "SIT AMET MORBI QUAM MASSA",
        image: {
          src: "https://via.placeholder.com/940x618",
          alt: "Alt text"
        },
        subtitle: "Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.",
        title: "Enim gravida sollicitudin aliquam."
      },
      visible: {
        imgFirst: false
      }
    }
  },
  render: (args) => ({
    components: {
      FeaturedSideBySideComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<FeaturedSideBySideComponent v-bind="args" />'
  })
};
FeaturedSideBySide.parameters = {
  ...FeaturedSideBySide.parameters,
  docs: {
    ...(_a = FeaturedSideBySide.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    opts: {
      theme: 'light',
      content: {
        bullets: ['Sed ac nunc, eget msa, cursus.', 'Sed ac nunc, eget msa, cursus.', 'Sed ac nunc, eget msa, cursus.'],
        cta: {
          label: 'Primary Button',
          url: '/'
        },
        secondaryCta: {
          label: 'Secondary Button',
          url: '/'
        },
        eyebrow: 'SIT AMET MORBI QUAM MASSA',
        image: {
          src: 'https://via.placeholder.com/940x618',
          alt: 'Alt text'
        },
        subtitle: 'Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.',
        title: 'Enim gravida sollicitudin aliquam.'
      },
      visible: {
        imgFirst: false
      }
    }
  },
  render: args => ({
    components: {
      FeaturedSideBySideComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<FeaturedSideBySideComponent v-bind="args" />'
  })
}`,
      ...(_c = (_b = FeaturedSideBySide.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["FeaturedSideBySide"];
export {
  FeaturedSideBySide,
  __namedExportsOrder,
  FeaturedSideBySide_stories as default
};
