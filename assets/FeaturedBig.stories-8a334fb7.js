var _a, _b, _c;
import { g as get } from "./get-586119b3.js";
import { o as openBlock, c as createElementBlock, b as createBaseVNode, d as createCommentVNode, n as normalizeClass, t as toDisplayString, f as normalizeStyle } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./_commonjsHelpers-ca272635.js";
const _sfc_main = {
  props: {
    opts: {
      type: Object
    }
  },
  setup() {
    return { get };
  }
};
const _hoisted_1 = { class: "container text-center ids--type-body" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = ["src", "alt"];
const _hoisted_5 = {
  key: 3,
  class: "embed-responsive embed-responsive-16by9 mx-auto caf-mb-12",
  style: { "max-width": "680px" }
};
const _hoisted_6 = ["title", "src"];
const _hoisted_7 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ids__marketing-featuredBig ids__marketing--light container-fluid", `ids__marketing--${$props.opts.theme} ${$setup.get(
      $props.opts,
      "content.class",
      "caf-pt-20 caf-pb-20"
    )}`]),
    style: normalizeStyle($setup.get($props.opts, "content.style"))
  }, [
    createBaseVNode("div", _hoisted_1, [
      $setup.get($props.opts, "content.title") ? (openBlock(), createElementBlock("h2", {
        key: 0,
        class: "ids__marketing-title ids--type-marketing-xl-expressive caf-mb-4",
        innerHTML: _ctx.$sanitize($props.opts.content.title)
      }, null, 8, _hoisted_2)) : createCommentVNode("", true),
      $setup.get($props.opts, "content.subtitle") ? (openBlock(), createElementBlock("p", {
        key: 1,
        class: "ids__marketing-subtitle ids--type-paragraph-big caf-mb-12",
        innerHTML: _ctx.$sanitize($props.opts.content.subtitle)
      }, null, 8, _hoisted_3)) : createCommentVNode("", true),
      $setup.get($props.opts, "content.image") ? (openBlock(), createElementBlock("img", {
        key: 2,
        class: "ids__marketing-image caf-mb-12",
        src: $props.opts.content.image.src,
        alt: $props.opts.content.image.alt,
        height: "100",
        width: "100"
      }, null, 8, _hoisted_4)) : createCommentVNode("", true),
      $setup.get($props.opts, "content.video") ? (openBlock(), createElementBlock("div", _hoisted_5, [
        createBaseVNode("iframe", {
          id: "vmdis_video",
          title: $props.opts.content.video.title,
          src: $props.opts.content.video.src,
          frameborder: "0",
          webkitallowfullscreen: "",
          mozallowfullscreen: "",
          allowfullscreen: ""
        }, null, 8, _hoisted_6)
      ])) : createCommentVNode("", true),
      $setup.get($props.opts, "content.cta") ? (openBlock(), createElementBlock("a", {
        key: 4,
        class: normalizeClass([
          "btn btn-primary btn-marketing caf-mr-8 caf-mb-8 caf-mb-md-0",
          ({
            "btn-secondary": $props.opts.theme !== "dark" && $props.opts.theme !== "blue" && !$props.opts.content.cta.class,
            "btn-hollow-on-hc": ($props.opts.theme === "dark" || $props.opts.theme === "blue") && !$props.opts.content.cta.class
          }, $props.opts.content.cta.class)
        ]),
        href: $props.opts.content.cta.url
      }, toDisplayString($props.opts.content.cta.label), 11, _hoisted_7)) : createCommentVNode("", true)
    ])
  ], 6);
}
const FeaturedBigComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "FeaturedBig", "description": "", "tags": {}, "props": [{ "name": "opts", "type": { "name": "object" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/FeaturedBig/FeaturedBig.vue"] };
const FeaturedBig_stories = {
  title: "Blocks/Marketing"
};
const FeaturedBig = {
  args: {
    opts: {
      theme: "light",
      content: {
        image: {
          src: "https://via.placeholder.com/940x618",
          alt: "Alt text"
        },
        cta: {
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
      FeaturedBigComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<FeaturedBigComponent v-bind="args" />'
  })
};
FeaturedBig.parameters = {
  ...FeaturedBig.parameters,
  docs: {
    ...(_a = FeaturedBig.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    opts: {
      theme: 'light',
      content: {
        image: {
          src: 'https://via.placeholder.com/940x618',
          alt: 'Alt text'
        },
        cta: {
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
      FeaturedBigComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<FeaturedBigComponent v-bind="args" />'
  })
}`,
      ...(_c = (_b = FeaturedBig.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["FeaturedBig"];
export {
  FeaturedBig,
  __namedExportsOrder,
  FeaturedBig_stories as default
};
