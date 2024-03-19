var _a, _b, _c, _d, _e, _f;
import { i as computed, c as createElementBlock, b as createBaseVNode, n as normalizeClass, d as createCommentVNode, F as Fragment, j as renderList, t as toDisplayString, f as normalizeStyle, o as openBlock } from "./vue.esm-bundler-e926ae62.js";
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
    const isFirstFiveCards = computed(
      () => get(props, "opts.content.firstMetrics", []).length === 5
    );
    const isSecondFiveCards = computed(
      () => get(props, "opts.content.secondMetrics", []).length === 5
    );
    return {
      get,
      isFirstFiveCards,
      isSecondFiveCards
    };
  }
};
const _hoisted_1 = { class: "container text-center ids--type-body" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = {
  key: 2,
  class: "row justify-content-center"
};
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = {
  key: 3,
  class: "row justify-content-center caf-mt-5"
};
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = ["innerHTML"];
const _hoisted_10 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ids__marketing-metrics ids__marketing--light container-fluid", `ids__marketing--${$props.opts.theme} ${$setup.get(
      $props.opts,
      "content.class",
      "caf-pt-20 caf-pb-20"
    )}`]),
    style: normalizeStyle($setup.get($props.opts, "content.style"))
  }, [
    createBaseVNode("div", _hoisted_1, [
      $setup.get($props.opts, "content.title") ? (openBlock(), createElementBlock("h2", {
        key: 0,
        class: normalizeClass(["ids__marketing-title ids--type-marketing-xl-expressive caf-mb-4", { "caf-mb-12": !$setup.get($props.opts, "content.subtitle") }]),
        innerHTML: _ctx.$sanitize($props.opts.content.title)
      }, null, 10, _hoisted_2)) : createCommentVNode("", true),
      $setup.get($props.opts, "content.subtitle") ? (openBlock(), createElementBlock("p", {
        key: 1,
        class: "ids__marketing-subtitle ids--type-paragraph-big caf-mb-12",
        innerHTML: _ctx.$sanitize($props.opts.content.subtitle)
      }, null, 8, _hoisted_3)) : createCommentVNode("", true),
      $setup.get($props.opts, "content.firstMetrics") ? (openBlock(), createElementBlock("div", _hoisted_4, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.opts.content.firstMetrics, (item, key) => {
          return openBlock(), createElementBlock("div", {
            key,
            class: normalizeClass(["d-flex", $setup.isFirstFiveCards ? "col-custom" : "col-md-3"])
          }, [
            createBaseVNode("div", {
              class: normalizeClass([
                "metric d-flex flex-column justify-content-center",
                item.class || `caf-py-10 caf-mb-5 caf-mb-md-0 ${$setup.isFirstFiveCards ? "caf-px-5" : ""}`
              ])
            }, [
              createBaseVNode("h4", {
                class: normalizeClass([
                  "metric-value",
                  $setup.isFirstFiveCards ? "ids--type-display-large" : "ids--type-display-xl"
                ]),
                innerHTML: _ctx.$sanitize(item.value)
              }, null, 10, _hoisted_5),
              createBaseVNode("p", {
                class: "metric-desc ids--type-caption",
                innerHTML: _ctx.$sanitize(item.desc)
              }, null, 8, _hoisted_6)
            ], 2)
          ], 2);
        }), 128))
      ])) : createCommentVNode("", true),
      $setup.get($props.opts, "content.secondMetrics") ? (openBlock(), createElementBlock("div", _hoisted_7, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.opts.content.secondMetrics, (item, key) => {
          return openBlock(), createElementBlock("div", {
            key,
            class: normalizeClass(["d-flex", $setup.isSecondFiveCards ? "col-custom" : "col-md-3"])
          }, [
            createBaseVNode("div", {
              class: normalizeClass([
                "metric d-flex d-lg-block flex-column justify-content-center",
                item.class || `caf-py-10 caf-mb-5 ${$setup.isSecondFiveCards ? "caf-px-5" : ""}`
              ])
            }, [
              createBaseVNode("h4", {
                class: normalizeClass([
                  "metric-value",
                  $setup.isSecondFiveCards ? "ids--type-display-large" : "ids--type-display-xl"
                ]),
                innerHTML: _ctx.$sanitize(item.value)
              }, null, 10, _hoisted_8),
              createBaseVNode("p", {
                class: "metric-desc ids--type-caption",
                innerHTML: _ctx.$sanitize(item.desc)
              }, null, 8, _hoisted_9)
            ], 2)
          ], 2);
        }), 128))
      ])) : createCommentVNode("", true),
      $setup.get($props.opts, "content.cta") ? (openBlock(), createElementBlock("a", {
        key: 4,
        class: normalizeClass([
          "btn btn-primary btn-marketing caf-mt-9",
          ({
            "btn-secondary": $props.opts.theme !== "dark" && $props.opts.theme !== "blue" && !$props.opts.content.cta.class,
            "btn-hollow-on-hc": ($props.opts.theme === "dark" || $props.opts.theme === "blue") && !$props.opts.content.cta.class
          }, $props.opts.content.cta.class)
        ]),
        href: $props.opts.content.cta.url
      }, toDisplayString($props.opts.content.cta.label), 11, _hoisted_10)) : createCommentVNode("", true)
    ])
  ], 6);
}
const MetricsComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Metrics", "description": "", "tags": {}, "props": [{ "name": "opts", "type": { "name": "object" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/Metrics/Metrics.vue"] };
const Metrics_stories = {
  title: "Blocks/Marketing/Metrics",
  component: MetricsComponent
};
const ThreeCards = {
  args: {
    opts: {
      theme: "light",
      content: {
        firstMetrics: [{
          value: "10K+",
          desc: "Number of nonprofits <br /> matched"
        }, {
          value: "49K+",
          desc: "Total matches"
        }, {
          value: "1M+",
          desc: "Number of volunteer <br /> hours donated"
        }],
        secondMetrics: [{
          value: "$195M+",
          desc: "Total nonprofit <br /> savings"
        }, {
          value: "9.5/10",
          desc: "Nonprofit users <br /> rate Catchafire"
        }, {
          value: "5 days",
          desc: "Average match time <br /> for calls and projects"
        }],
        subtitle: "Our platform paves the way for instant, tangible impact.",
        title: "Delivering results with a proven track record"
      }
    }
  }
};
const FiveCards = {
  args: {
    opts: {
      theme: "light",
      content: {
        firstMetrics: [{
          value: "10K+",
          desc: "Number of nonprofits matched"
        }, {
          value: "49K+",
          desc: "Total matches"
        }, {
          value: "1M+",
          desc: "Number of volunteer hours donated"
        }, {
          value: "$9M+",
          desc: "Total nonprofit savings"
        }, {
          value: "9.5",
          desc: "Nonprofit users rate Catchafire"
        }],
        secondMetrics: [{
          value: "10K+",
          desc: "Number of nonprofits matched"
        }, {
          value: "49K+",
          desc: "Total matches"
        }, {
          value: "1M+",
          desc: "Number of volunteer hours donated"
        }, {
          value: "$9M+",
          desc: "Total nonprofit saving"
        }, {
          value: "9.5",
          desc: "Nonprofit users rate Catchafire"
        }],
        subtitle: "Our platform paves the way for instant, tangible impact.",
        title: "Delivering results with a proven track record",
        cta: {
          label: "Label",
          url: "/"
        }
      }
    }
  }
};
ThreeCards.parameters = {
  ...ThreeCards.parameters,
  docs: {
    ...(_a = ThreeCards.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    opts: {\n      theme: 'light',\n      content: {\n        firstMetrics: [{\n          value: '10K+',\n          desc: 'Number of nonprofits <br /> matched'\n        }, {\n          value: '49K+',\n          desc: 'Total matches'\n        }, {\n          value: '1M+',\n          desc: 'Number of volunteer <br /> hours donated'\n        }],\n        secondMetrics: [{\n          value: '$195M+',\n          desc: 'Total nonprofit <br /> savings'\n        }, {\n          value: '9.5/10',\n          desc: 'Nonprofit users <br /> rate Catchafire'\n        }, {\n          value: '5 days',\n          desc: 'Average match time <br /> for calls and projects'\n        }],\n        subtitle: 'Our platform paves the way for instant, tangible impact.',\n        title: 'Delivering results with a proven track record'\n      }\n    }\n  }\n}",
      ...(_c = (_b = ThreeCards.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
FiveCards.parameters = {
  ...FiveCards.parameters,
  docs: {
    ...(_d = FiveCards.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    opts: {\n      theme: 'light',\n      content: {\n        firstMetrics: [{\n          value: '10K+',\n          desc: 'Number of nonprofits matched'\n        }, {\n          value: '49K+',\n          desc: 'Total matches'\n        }, {\n          value: '1M+',\n          desc: 'Number of volunteer hours donated'\n        }, {\n          value: '$9M+',\n          desc: 'Total nonprofit savings'\n        }, {\n          value: '9.5',\n          desc: 'Nonprofit users rate Catchafire'\n        }],\n        secondMetrics: [{\n          value: '10K+',\n          desc: 'Number of nonprofits matched'\n        }, {\n          value: '49K+',\n          desc: 'Total matches'\n        }, {\n          value: '1M+',\n          desc: 'Number of volunteer hours donated'\n        }, {\n          value: '$9M+',\n          desc: 'Total nonprofit saving'\n        }, {\n          value: '9.5',\n          desc: 'Nonprofit users rate Catchafire'\n        }],\n        subtitle: 'Our platform paves the way for instant, tangible impact.',\n        title: 'Delivering results with a proven track record',\n        cta: {\n          label: 'Label',\n          url: '/'\n        }\n      }\n    }\n  }\n}",
      ...(_f = (_e = FiveCards.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["ThreeCards", "FiveCards"];
export {
  FiveCards,
  ThreeCards,
  __namedExportsOrder,
  Metrics_stories as default
};
