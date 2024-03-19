var _a, _b, _c;
import { i as computed, o as openBlock, c as createElementBlock, b as createBaseVNode, n as normalizeClass, d as createCommentVNode, g as createTextVNode, t as toDisplayString, F as Fragment, j as renderList, f as normalizeStyle } from "./vue.esm-bundler-e926ae62.js";
import { g as get } from "./get-586119b3.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./_commonjsHelpers-ca272635.js";
const _sfc_main = {
  props: {
    opts: {
      type: Object
    }
  },
  setup(props) {
    const bulletsPerRow = computed(
      () => get(props, "opts.visible.bulletsPerRow", 3)
    );
    return {
      get,
      bulletsPerRow
    };
  }
};
const _hoisted_1 = { class: "container text-center ids--type-body" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_5 = { key: 2 };
const _hoisted_6 = { class: "d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center caf-pl-md-15 caf-pr-md-0 caf-pl-10 caf-pr-10 caf-ml-10 caf-ml-md-0" };
const _hoisted_7 = ["href"];
const _hoisted_8 = ["src", "alt"];
const _hoisted_9 = ["src", "alt"];
const _hoisted_10 = {
  key: 3,
  class: "row ids__marketing-bullets text-left"
};
const _hoisted_11 = {
  key: 0,
  class: "col-md-6 caf-px-3 caf-pl-md-30"
};
const _hoisted_12 = { class: "caf-mb-0 ids--type-paragraph-small ids__marketing-bullets" };
const _hoisted_13 = ["innerHTML"];
const _hoisted_14 = {
  key: 1,
  class: "col-md-6 caf-px-3 caf-pl-md-10"
};
const _hoisted_15 = { class: "caf-mb-0 ids--type-paragraph-small ids__marketing-bullets" };
const _hoisted_16 = ["innerHTML"];
const _hoisted_17 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ids__marketing-dynamicParagraph ids__marketing--light container-fluid", `ids__marketing--${$props.opts.theme} ${$setup.get(
      $props.opts,
      "content.class",
      "caf-pt-20 caf-pb-20"
    )}`]),
    style: normalizeStyle($setup.get($props.opts, "content.style"))
  }, [
    createBaseVNode("div", _hoisted_1, [
      $setup.get($props.opts, "content.title") ? (openBlock(), createElementBlock("h2", {
        key: 0,
        class: normalizeClass(["ids__marketing-title ids--type-marketing-xl-expressive caf-mb-4", { "caf-mb-8": !$setup.get($props.opts, "content.subtitle") }]),
        innerHTML: _ctx.$sanitize($props.opts.content.title)
      }, null, 10, _hoisted_2)) : createCommentVNode("", true),
      $setup.get($props.opts, "content.subtitle") ? (openBlock(), createElementBlock("p", {
        key: 1,
        class: normalizeClass(["ids__marketing-subtitle ids--type-paragraph-big", {
          "caf-mb-0": !$setup.get($props.opts, "content.logos") && !$setup.get($props.opts, "content.bullets"),
          "caf-mb-9": $setup.get($props.opts, "content.logos") || $setup.get($props.opts, "content.bullets")
        }])
      }, [
        createTextVNode(toDisplayString($props.opts.content.subtitle) + " ", 1),
        !$setup.get($props.opts, "visible.shortText") && $setup.get($props.opts, "content.subtitleExtra") ? (openBlock(), createElementBlock("span", _hoisted_3, [
          _hoisted_4,
          createTextVNode(" " + toDisplayString($props.opts.content.subtitleExtra), 1)
        ])) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true),
      $setup.get($props.opts, "content.logos") ? (openBlock(), createElementBlock("div", _hoisted_5, [
        createBaseVNode("div", _hoisted_6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.opts.content.logos, (logo, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              class: "ids__marketing-logo caf-mb-10 caf-mr-10"
            }, [
              logo.link ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: logo.link,
                target: "_blank"
              }, [
                createBaseVNode("img", {
                  src: logo.src,
                  alt: logo.alt,
                  style: normalizeStyle(logo.style),
                  height: "50"
                }, null, 12, _hoisted_8)
              ], 8, _hoisted_7)) : (openBlock(), createElementBlock("img", {
                key: 1,
                src: logo.src,
                alt: logo.alt,
                style: normalizeStyle(logo.style),
                height: "50"
              }, null, 12, _hoisted_9))
            ]);
          }), 128))
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_10, [
        $setup.get($props.opts, "content.bullets") ? (openBlock(), createElementBlock("div", _hoisted_11, [
          createBaseVNode("ul", _hoisted_12, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.opts.content.bullets.slice(
              0,
              $setup.bulletsPerRow
            ), (item, key) => {
              return openBlock(), createElementBlock("li", {
                key,
                class: "caf-mb-3",
                innerHTML: item
              }, null, 8, _hoisted_13);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        $setup.get($props.opts, "content.bullets") ? (openBlock(), createElementBlock("div", _hoisted_14, [
          createBaseVNode("ul", _hoisted_15, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.opts.content.bullets.slice(
              $setup.bulletsPerRow,
              $setup.bulletsPerRow * 2
            ), (item, key) => {
              return openBlock(), createElementBlock("li", {
                key,
                class: "caf-mb-3",
                innerHTML: item
              }, null, 8, _hoisted_16);
            }), 128))
          ])
        ])) : createCommentVNode("", true)
      ])),
      $setup.get($props.opts, "content.cta") ? (openBlock(), createElementBlock("a", {
        key: 4,
        class: normalizeClass([
          "btn btn-primary btn-marketing caf-mt-9 caf-mt-md-12",
          ({
            "btn-secondary": $props.opts.theme !== "dark" && $props.opts.theme !== "blue" && !$props.opts.content.cta.class,
            "btn-hollow-on-hc": ($props.opts.theme === "dark" || $props.opts.theme === "blue") && !$props.opts.content.cta.class
          }, $props.opts.content.cta.class)
        ]),
        href: $props.opts.content.cta.url,
        onClick: _cache[0] || (_cache[0] = (e) => $setup.get($props.opts.tracking, "clickEvent") && $props.opts.tracking.clickEvent(e))
      }, toDisplayString($props.opts.content.cta.label), 11, _hoisted_17)) : createCommentVNode("", true)
    ])
  ], 6);
}
const DynamicParagraphComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "DynamicParagraph", "description": "", "tags": {}, "props": [{ "name": "opts", "type": { "name": "object" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/DynamicParagraph/DynamicParagraph.vue"] };
const DynamicParagraph_stories = {
  title: "Blocks/Marketing"
};
const DynamicParagraph = {
  args: {
    opts: {
      theme: "light",
      content: {
        title: "Usher in a new era of philanthropy",
        subtitle: `Many leaders of color create nonprofits as an instrument to serve and support their communities. When you provide, your foundation gains actionable insights on the unique needs of BIPOC-led and serving nonprofits.`
      },
      visible: {
        shortText: false
      }
    }
  },
  render: (args) => ({
    components: {
      DynamicParagraphComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<DynamicParagraphComponent v-bind="args" />'
  })
};
DynamicParagraph.parameters = {
  ...DynamicParagraph.parameters,
  docs: {
    ...(_a = DynamicParagraph.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    opts: {\n      theme: 'light',\n      content: {\n        title: 'Usher in a new era of philanthropy',\n        subtitle: `Many leaders of color create nonprofits as an instrument to serve and support their communities. When you provide, your foundation gains actionable insights on the unique needs of BIPOC-led and serving nonprofits.`\n      },\n      visible: {\n        shortText: false\n      }\n    }\n  },\n  render: args => ({\n    components: {\n      DynamicParagraphComponent\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: '<DynamicParagraphComponent v-bind=\"args\" />'\n  })\n}",
      ...(_c = (_b = DynamicParagraph.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["DynamicParagraph"];
export {
  DynamicParagraph,
  __namedExportsOrder,
  DynamicParagraph_stories as default
};
