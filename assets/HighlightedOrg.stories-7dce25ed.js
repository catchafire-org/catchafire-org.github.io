var _a, _b, _c;
import { g as get } from "./get-586119b3.js";
import { I as Icons } from "./Icons-43684b48.js";
import { a as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, d as createCommentVNode, e as createVNode, w as withCtx, g as createTextVNode, F as Fragment, f as normalizeStyle } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./_commonjsHelpers-ca272635.js";
const _sfc_main = {
  components: {
    Icons
  },
  props: {
    opts: {
      type: Object
    }
  },
  setup() {
    return { get };
  }
};
const _hoisted_1 = { class: "row align-items-center" };
const _hoisted_2 = { class: "col" };
const _hoisted_3 = { class: "caf-px-6 caf-py-6 caf-pl-md-8 caf-pr-md-6 caf-py-md-8" };
const _hoisted_4 = { class: "d-flex align-items-center caf-mb-5 caf-mb-lg-0" };
const _hoisted_5 = ["href"];
const _hoisted_6 = ["src", "alt"];
const _hoisted_7 = {
  key: 1,
  class: "bg-color-gallery d-flex align-items-center justify-content-center rounded text-color-gray-dark",
  style: { "width": "100px", "height": "100px" }
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("i", { class: "fal fa-building fa-4x" }, null, -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = {
  key: 0,
  class: "ids--type-marketing-xl-expressive"
};
const _hoisted_11 = ["href"];
const _hoisted_12 = { class: "d-flex flex-row hidden-md-down" };
const _hoisted_13 = {
  key: 0,
  class: "ids--type-subtitle ids--color-type-base-text-default text-truncate caf-mr-3",
  style: { "max-width": "180px" }
};
const _hoisted_14 = {
  key: 1,
  class: "ids--type-subtitle ids--color-type-base-interactive-default caf-mr-3"
};
const _hoisted_15 = ["href"];
const _hoisted_16 = {
  key: 2,
  class: "ids--type-subtitle ids--color-type-base-text-default text-truncate",
  style: { "max-width": "280px" }
};
const _hoisted_17 = { class: "hidden-lg-up" };
const _hoisted_18 = {
  key: 0,
  class: "ids--type-subtitle ids--color-type-base-text-default text-truncate"
};
const _hoisted_19 = { class: "d-flex caf-mt-1" };
const _hoisted_20 = {
  key: 0,
  class: "flex-none ids--type-subtitle ids--color-type-base-interactive-default caf-mr-3"
};
const _hoisted_21 = ["href"];
const _hoisted_22 = {
  key: 1,
  class: "ids--type-subtitle ids--color-type-base-text-default text-truncate"
};
const _hoisted_23 = { class: "col aside-impact" };
const _hoisted_24 = { class: "caf-px-6 caf-pb-6 caf-pt-md-3 caf-pb-md-4" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "ids--base-stroke-default--bottom caf-mb-5 hidden-md-up" }, null, -1);
const _hoisted_26 = { class: "d-flex flex-row" };
const _hoisted_27 = { class: "caf-mr-6" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("label", { class: "ids--type-overline ids--color-type-base-text-subdued caf-mb-1" }, "Total Impact", -1);
const _hoisted_29 = { class: "ids--type-display-small ids--color-type-base-text-default" };
const _hoisted_30 = { class: "" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("label", { class: "ids--type-overline ids--color-type-base-text-subdued caf-mb-1" }, "Total Matches", -1);
const _hoisted_32 = { class: "ids--type-display-small ids--color-type-base-text-default" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icons = resolveComponent("Icons");
  return openBlock(), createElementBlock("div", {
    class: "ids__marketing-highLightedOrg ids__marketing--light featured-org-story ids--base-surface-default ids--base-stroke-subdued ids--radius-large caf-mb-2 caf-mb-md-0",
    style: normalizeStyle($setup.get($props.opts, "content.style"))
  }, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("a", {
              href: $props.opts.content.profile_url,
              class: "caf-mr-5"
            }, [
              $setup.get($props.opts, "content.logo") ? (openBlock(), createElementBlock("img", {
                key: 0,
                src: $props.opts.content.logo,
                alt: $props.opts.content.name,
                class: "rounded objectfit-scale",
                width: "80",
                height: "80",
                loading: "lazy"
              }, null, 8, _hoisted_6)) : (openBlock(), createElementBlock("div", _hoisted_7, _hoisted_9))
            ], 8, _hoisted_5),
            createBaseVNode("div", null, [
              $setup.get($props.opts, "content.name") ? (openBlock(), createElementBlock("h4", _hoisted_10, [
                createBaseVNode("a", {
                  class: "org-name ids--color-type-base-interactive-default",
                  href: $props.opts.content.profile_url
                }, toDisplayString($props.opts.content.name), 9, _hoisted_11)
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_12, [
                $setup.get($props.opts, "content.primary_cause") ? (openBlock(), createElementBlock("div", _hoisted_13, [
                  createVNode(_component_Icons, {
                    size: "Sm",
                    class: "fl-left ids--color-type-base-icon-default caf-mr-2",
                    "aria-hidden": "true"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" favorite ")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString($props.opts.content.primary_cause), 1)
                ])) : createCommentVNode("", true),
                $setup.get($props.opts, "content.website") ? (openBlock(), createElementBlock("div", _hoisted_14, [
                  createBaseVNode("a", {
                    class: "ids--type-subtitle-hyperlink",
                    href: $props.opts.content.website,
                    target: "_blank"
                  }, [
                    createVNode(_component_Icons, {
                      size: "Sm",
                      class: "fl-left ids--color-type-base-interactive-default caf-mr-2",
                      "aria-hidden": "true"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" language ")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" Website ")
                  ], 8, _hoisted_15)
                ])) : createCommentVNode("", true),
                $props.opts.content.city ? (openBlock(), createElementBlock("div", _hoisted_16, [
                  createVNode(_component_Icons, {
                    size: "Sm",
                    class: "fl-left ids--color-type-base-icon-default caf-mr-2",
                    "aria-hidden": "true"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" location_on ")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString($props.opts.content.city) + ", ", 1),
                  $props.opts.content.us_state ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString($props.opts.content.us_state) + ", ", 1)
                  ], 64)) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString($props.opts.content.country_display), 1)
                ])) : createCommentVNode("", true)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_17, [
            $setup.get($props.opts, "content.primary_cause") ? (openBlock(), createElementBlock("div", _hoisted_18, [
              createVNode(_component_Icons, {
                size: "Sm",
                class: "fl-left ids--color-type-base-icon-default caf-mr-2",
                "aria-hidden": "true"
              }, {
                default: withCtx(() => [
                  createTextVNode(" favorite ")
                ]),
                _: 1
              }),
              createTextVNode(" " + toDisplayString($props.opts.content.primary_cause), 1)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_19, [
              $setup.get($props.opts, "content.website") ? (openBlock(), createElementBlock("div", _hoisted_20, [
                createBaseVNode("a", {
                  class: "ids--type-subtitle-hyperlink",
                  href: $props.opts.content.website,
                  target: "_blank"
                }, [
                  createVNode(_component_Icons, {
                    size: "Sm",
                    class: "fl-left ids--color-type-base-interactive-default caf-mr-2",
                    "aria-hidden": "true"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" language ")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" Website ")
                ], 8, _hoisted_21)
              ])) : createCommentVNode("", true),
              $props.opts.content.city ? (openBlock(), createElementBlock("div", _hoisted_22, [
                createVNode(_component_Icons, {
                  size: "Sm",
                  class: "fl-left ids--color-type-base-icon-default caf-mr-1",
                  "aria-hidden": "true"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" location_on ")
                  ]),
                  _: 1
                }),
                createTextVNode(" " + toDisplayString($props.opts.content.city) + ", ", 1),
                $props.opts.content.us_state ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString($props.opts.content.us_state) + ", ", 1)
                ], 64)) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString($props.opts.content.country_display), 1)
              ])) : createCommentVNode("", true)
            ])
          ])
        ])
      ]),
      createBaseVNode("div", _hoisted_23, [
        createBaseVNode("div", _hoisted_24, [
          _hoisted_25,
          createBaseVNode("div", _hoisted_26, [
            createBaseVNode("div", _hoisted_27, [
              _hoisted_28,
              createBaseVNode("div", _hoisted_29, " $" + toDisplayString(_ctx.$filters.formatInteger($props.opts.content.total_impact)), 1)
            ]),
            createBaseVNode("div", _hoisted_30, [
              _hoisted_31,
              createBaseVNode("div", _hoisted_32, toDisplayString($props.opts.content.matched_projects), 1)
            ])
          ])
        ])
      ])
    ])
  ], 4);
}
const HighlightedOrgComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "HighlightedOrg", "description": "", "tags": {}, "props": [{ "name": "opts", "type": { "name": "object" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/HighlightedOrg/HighlightedOrg.vue"] };
const HighlightedOrg_stories = {
  title: "Blocks/Marketing"
};
const HighlightedOrg = {
  args: {
    opts: {
      theme: "light",
      content: {
        id: 15172,
        name: "Head and Neck Cancer Alliance",
        city: "Charleston",
        us_state: "SC",
        country_display: "USA",
        website: "http://google.com",
        profile_url: "https://catchafire.org/organizations/head-and-neck-cancer-alliance_15172/",
        logo: "https://catchafire.org/media/images/np_logos/de7ea4f6124d4c54a3521e71310840d9_175x175_cropped.jpg",
        primary_cause: "Health & Nutrition",
        total_impact: 30399,
        matched_projects: 9,
        projects: []
      }
    }
  },
  render: (args) => ({
    components: {
      HighlightedOrgComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<HighlightedOrgComponent v-bind="args" />'
  })
};
HighlightedOrg.parameters = {
  ...HighlightedOrg.parameters,
  docs: {
    ...(_a = HighlightedOrg.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    opts: {
      theme: 'light',
      content: {
        id: 15172,
        name: 'Head and Neck Cancer Alliance',
        city: 'Charleston',
        us_state: 'SC',
        country_display: 'USA',
        website: 'http://google.com',
        profile_url: 'https://catchafire.org/organizations/head-and-neck-cancer-alliance_15172/',
        logo: 'https://catchafire.org/media/images/np_logos/de7ea4f6124d4c54a3521e71310840d9_175x175_cropped.jpg',
        primary_cause: 'Health & Nutrition',
        total_impact: 30399,
        matched_projects: 9,
        projects: []
      }
    }
  },
  render: args => ({
    components: {
      HighlightedOrgComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<HighlightedOrgComponent v-bind="args" />'
  })
}`,
      ...(_c = (_b = HighlightedOrg.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["HighlightedOrg"];
export {
  HighlightedOrg,
  __namedExportsOrder,
  HighlightedOrg_stories as default
};
