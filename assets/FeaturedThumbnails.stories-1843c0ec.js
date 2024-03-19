var _a, _b, _c;
import { g as get } from "./get-586119b3.js";
import { o as openBlock, c as createElementBlock, b as createBaseVNode, d as createCommentVNode, n as normalizeClass, F as Fragment, j as renderList, t as toDisplayString, f as normalizeStyle } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./_commonjsHelpers-ca272635.js";
const _sfc_main = {
  props: {
    isMobile: {
      type: Boolean
    },
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
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ids__marketing-featuredThumbnails ids__marketing--light container-fluid", `ids__marketing--${$props.opts.theme} ${$setup.get(
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
      $setup.get($props.opts, "content.thumbnails") ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass(["d-flex flex-column flex-md-row justify-content-center caf-ml-md-5", { largeImages: $props.opts.visible.twoOnly && !$props.isMobile }])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.opts.visible.twoOnly ? $props.opts.content.thumbnails.slice(0, 2) : $props.opts.content.thumbnails, (img, key) => {
          return openBlock(), createElementBlock("div", {
            key,
            class: "caf-mb-5 caf-mr-md-5"
          }, [
            createBaseVNode("img", {
              class: "image caf-mb-5",
              src: img.src,
              alt: img.alt,
              height: "316",
              width: "300"
            }, null, 8, _hoisted_4),
            img.caption ? (openBlock(), createElementBlock("p", {
              key: 0,
              class: "ids__marketing-caption ids--type-caption text-left",
              innerHTML: _ctx.$sanitize(img.caption)
            }, null, 8, _hoisted_5)) : createCommentVNode("", true)
          ]);
        }), 128))
      ], 2)) : createCommentVNode("", true),
      $setup.get($props.opts, "content.cta") ? (openBlock(), createElementBlock("a", {
        key: 3,
        class: normalizeClass([
          "btn btn-marketing caf-mt-7",
          ({
            "btn-secondary": $props.opts.theme !== "dark" && $props.opts.theme !== "blue" && !$props.opts.content.cta.class,
            "btn-hollow-on-hc": ($props.opts.theme === "dark" || $props.opts.theme === "blue") && !$props.opts.content.cta.class
          }, $props.opts.content.cta.class)
        ]),
        href: $props.opts.content.cta.url
      }, toDisplayString($props.opts.content.cta.label), 11, _hoisted_6)) : createCommentVNode("", true)
    ])
  ], 6);
}
const FeaturedThumbnailsComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "FeaturedThumbnails", "description": "", "tags": {}, "props": [{ "name": "isMobile", "type": { "name": "boolean" } }, { "name": "opts", "type": { "name": "object" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/FeaturedThumbnails/FeaturedThumbnails.vue"] };
const FeaturedThumbnails_stories = {
  title: "Blocks/Marketing"
};
const FeaturedThumbnails = {
  args: {
    opts: {
      theme: "light",
      content: {
        cta: {
          label: "Label",
          url: "/"
        },
        subtitle: "Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.",
        title: "Enim gravida sollicitudin aliquam.",
        thumbnails: [{
          src: "https://via.placeholder.com/300x316",
          caption: "SIT AMET MORBI QUAM MASSA",
          alt: "Alt text"
        }, {
          src: "https://via.placeholder.com/300x316",
          caption: "SIT AMET MORBI QUAM MASSA",
          alt: "Alt text"
        }, {
          src: "https://via.placeholder.com/300x316",
          caption: "SIT AMET MORBI QUAM MASSA",
          alt: "Alt text"
        }]
      },
      visible: {
        twoOnly: false
      }
    }
  },
  render: (args) => ({
    components: {
      FeaturedThumbnailsComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<FeaturedThumbnailsComponent v-bind="args" />'
  })
};
FeaturedThumbnails.parameters = {
  ...FeaturedThumbnails.parameters,
  docs: {
    ...(_a = FeaturedThumbnails.parameters) == null ? void 0 : _a.docs,
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
        subtitle: 'Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.',
        title: 'Enim gravida sollicitudin aliquam.',
        thumbnails: [{
          src: 'https://via.placeholder.com/300x316',
          caption: 'SIT AMET MORBI QUAM MASSA',
          alt: 'Alt text'
        }, {
          src: 'https://via.placeholder.com/300x316',
          caption: 'SIT AMET MORBI QUAM MASSA',
          alt: 'Alt text'
        }, {
          src: 'https://via.placeholder.com/300x316',
          caption: 'SIT AMET MORBI QUAM MASSA',
          alt: 'Alt text'
        }]
      },
      visible: {
        twoOnly: false
      }
    }
  },
  render: args => ({
    components: {
      FeaturedThumbnailsComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<FeaturedThumbnailsComponent v-bind="args" />'
  })
}`,
      ...(_c = (_b = FeaturedThumbnails.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["FeaturedThumbnails"];
export {
  FeaturedThumbnails,
  __namedExportsOrder,
  FeaturedThumbnails_stories as default
};
