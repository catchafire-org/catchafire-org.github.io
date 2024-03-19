var _a, _b, _c;
import { g as get } from "./get-586119b3.js";
import { o as openBlock, c as createElementBlock, b as createBaseVNode, n as normalizeClass, d as createCommentVNode, t as toDisplayString, f as normalizeStyle } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./_commonjsHelpers-ca272635.js";
const _sfc_main = {
  props: {
    opts: {
      type: Object
    }
  },
  setup(props) {
    get(props.opts, "tracking.viewEvent") && props.opts.tracking.viewEvent();
    return { get };
  }
};
const _hoisted_1 = { class: "container text-center ids--type-body" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = { class: "d-flex flex-column flex-md-row justify-content-center" };
const _hoisted_5 = ["href"];
const _hoisted_6 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ids__marketing-simpleCta ids__marketing--light container-fluid", `ids__marketing--${$props.opts.theme} ${$setup.get(
      $props.opts,
      "content.class",
      "caf-pt-20 caf-pb-20"
    )}`]),
    style: normalizeStyle($setup.get($props.opts, "content.style"))
  }, [
    createBaseVNode("div", _hoisted_1, [
      $setup.get($props.opts, "content.title") ? (openBlock(), createElementBlock("h2", {
        key: 0,
        class: normalizeClass(["ids__marketing-title ids--type-marketing-xl-expressive", {
          "caf-mb-4": $setup.get($props.opts, "content.subtitle"),
          "caf-mb-9": !$setup.get($props.opts, "content.subtitle")
        }]),
        innerHTML: _ctx.$sanitize($props.opts.content.title)
      }, null, 10, _hoisted_2)) : createCommentVNode("", true),
      $setup.get($props.opts, "content.subtitle") ? (openBlock(), createElementBlock("p", {
        key: 1,
        class: "ids__marketing-subtitle ids--type-paragraph-big caf-mb-9",
        innerHTML: _ctx.$sanitize($props.opts.content.subtitle)
      }, null, 8, _hoisted_3)) : createCommentVNode("", true),
      createBaseVNode("div", _hoisted_4, [
        $setup.get($props.opts, "content.cta") ? (openBlock(), createElementBlock("a", {
          key: 0,
          class: normalizeClass(["btn btn-primary btn-marketing caf-mr-md-8 caf-mb-8 caf-mb-md-0", $props.opts.content.cta.class]),
          href: $props.opts.content.cta.url,
          onClick: _cache[0] || (_cache[0] = (e) => $setup.get($props.opts.content.cta.tracking, "clickEvent") && $props.opts.content.cta.tracking.clickEvent(e) || $setup.get($props.opts.tracking, "clickEvent") && $props.opts.tracking.clickEvent(e))
        }, toDisplayString($props.opts.content.cta.label), 11, _hoisted_5)) : createCommentVNode("", true),
        $setup.get($props.opts, "content.secondaryCta") ? (openBlock(), createElementBlock("a", {
          key: 1,
          class: normalizeClass([
            "btn btn-marketing caf-mr-md-8 caf-mb-8 caf-mb-md-0",
            ($props.opts.content.secondaryCta.class, {
              "btn-secondary": $props.opts.theme !== "dark" && $props.opts.theme !== "blue" && !$props.opts.content.secondaryCta.class,
              "btn-hollow-on-hc": ($props.opts.theme === "dark" || $props.opts.theme === "blue") && !$props.opts.content.secondaryCta.class
            })
          ]),
          href: $props.opts.content.secondaryCta.url,
          onClick: _cache[1] || (_cache[1] = (e) => $setup.get($props.opts.content.secondaryCta.tracking, "clickEvent") && $props.opts.content.secondaryCta.tracking.clickEvent(e))
        }, toDisplayString($props.opts.content.secondaryCta.label), 11, _hoisted_6)) : createCommentVNode("", true)
      ])
    ])
  ], 6);
}
const SimpleCtaComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "SimpleCta", "description": "", "tags": {}, "props": [{ "name": "opts", "type": { "name": "object" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/SimpleCta/SimpleCta.vue"] };
const SimpleCta_stories = {
  title: "Blocks/Marketing"
};
const SimpleCta = {
  args: {
    opts: {
      theme: "light",
      content: {
        cta: {
          label: "Label",
          url: "/"
        },
        secondaryCta: {
          label: "Label",
          url: "/"
        },
        subtitle: "Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.",
        title: "Enim gravida sollicitudin aliquam."
      }
    }
  },
  render: (args) => ({
    components: {
      SimpleCtaComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<SimpleCtaComponent v-bind="args" />'
  })
};
SimpleCta.parameters = {
  ...SimpleCta.parameters,
  docs: {
    ...(_a = SimpleCta.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    opts: {
      theme: 'light',
      content: {
        cta: {
          label: 'Label',
          url: '/'
        },
        secondaryCta: {
          label: 'Label',
          url: '/'
        },
        subtitle: 'Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.',
        title: 'Enim gravida sollicitudin aliquam.'
      }
    }
  },
  render: args => ({
    components: {
      SimpleCtaComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<SimpleCtaComponent v-bind="args" />'
  })
}`,
      ...(_c = (_b = SimpleCta.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["SimpleCta"];
export {
  SimpleCta,
  __namedExportsOrder,
  SimpleCta_stories as default
};
