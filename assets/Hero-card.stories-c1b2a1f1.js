var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { k as ref, l as onMounted, c as createElementBlock, b as createBaseVNode, n as normalizeClass, d as createCommentVNode, t as toDisplayString, g as createTextVNode, h as createBlock, m as normalizeProps, p as guardReactiveProps, q as resolveDynamicComponent, f as normalizeStyle, o as openBlock } from "./vue.esm-bundler-e926ae62.js";
import { g as get } from "./get-586119b3.js";
import { B as BaseCard1Component } from "./BaseCard1-a20c6b32.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./_commonjsHelpers-ca272635.js";
import "./Avatar-e8bb1088.js";
import "./Badge-717a7a7e.js";
const _sfc_main = {
  components: {
    BaseCard1: BaseCard1Component
  },
  props: {
    opts: {
      type: Object
    }
  },
  setup(props) {
    const mainContainer = ref(null);
    const fullBleedImgContainerHeight = ref(0);
    get(props.opts, "tracking.viewEvent") && props.opts.tracking.viewEvent();
    onMounted(() => {
      setTimeout(() => {
        fullBleedImgContainerHeight.value = mainContainer.value.offsetHeight;
      }, 500);
    });
    return {
      get,
      mainContainer,
      fullBleedImgContainerHeight
    };
  }
};
const _hoisted_1 = { class: "container ids--type-body ids__marketing-hero__main" };
const _hoisted_2 = { class: "row align-items-center" };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = ["href"];
const _hoisted_7 = ["href"];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("i", { class: "fa fa-arrow-right caf-ml-1" }, null, -1);
const _hoisted_9 = {
  key: 0,
  class: "ids__marketing-hero__container col-md-4 caf-mt-8 caf-mt-md-0"
};
const _hoisted_10 = ["src", "alt"];
const _hoisted_11 = { key: 1 };
const _hoisted_12 = {
  key: 0,
  class: "ids__marketing-hero__container-fluid container-fluid caf-pt-8 caf-pt-md-0 hidden-md-down"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "col-md-7 empty-column h-100" }, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "mainContainer",
    class: normalizeClass(["ids__marketing-hero container-fluid", `ids__marketing--${$props.opts.theme} ${$setup.get(
      $props.opts,
      "content.class",
      "caf-pt-20 caf-pb-20 caf-pt-md-30 caf-pb-md-30"
    )}`]),
    style: normalizeStyle($setup.get($props.opts, "content.style"))
  }, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", {
          class: normalizeClass({ "col-md-8": !$setup.get($props.opts, "visible.fullWidth") })
        }, [
          $setup.get($props.opts, "content.eyebrow") ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: "ids__marketing-eyebrow ids--type-overline-big caf-mb-3 caf-mb-md-3",
            innerHTML: _ctx.$sanitize($props.opts.content.eyebrow)
          }, null, 8, _hoisted_3)) : createCommentVNode("", true),
          $setup.get($props.opts, "content.title") ? (openBlock(), createElementBlock("h1", {
            key: 1,
            class: "ids__marketing-title ids--type-marketing-xxxl-expressive caf-mb-3",
            innerHTML: _ctx.$sanitize($props.opts.content.title)
          }, null, 8, _hoisted_4)) : createCommentVNode("", true),
          $setup.get($props.opts, "content.subtitle") ? (openBlock(), createElementBlock("p", {
            key: 2,
            class: "ids__marketing-subtitle ids--type-paragraph-big caf-mb-7",
            innerHTML: _ctx.$sanitize($props.opts.content.subtitle)
          }, null, 8, _hoisted_5)) : createCommentVNode("", true),
          $setup.get($props.opts, "content.cta") ? (openBlock(), createElementBlock("a", {
            key: 3,
            class: normalizeClass(["btn btn-primary btn-marketing caf-mr-8 caf-mb-8 caf-mb-md-0", $props.opts.content.cta.class]),
            href: $props.opts.content.cta.url,
            onClick: _cache[0] || (_cache[0] = (e) => $setup.get($props.opts.tracking, "clickEvent") && $props.opts.tracking.clickEvent(e))
          }, toDisplayString($props.opts.content.cta.label), 11, _hoisted_6)) : createCommentVNode("", true),
          $setup.get($props.opts, "content.link") ? (openBlock(), createElementBlock("a", {
            key: 4,
            class: "ids__marketing-link ids--type-button-big d-block d-md-inline text-uppercase",
            href: $props.opts.content.link.url
          }, [
            createTextVNode(toDisplayString($props.opts.content.link.label) + " ", 1),
            _hoisted_8
          ], 8, _hoisted_7)) : createCommentVNode("", true)
        ], 2),
        !$setup.get($props.opts, "visible.fullWidth") && !$setup.get($props.opts, "visible.fullBleedImg") ? (openBlock(), createElementBlock("div", _hoisted_9, [
          $setup.get($props.opts, "content.container.image") ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: $props.opts.content.container.image.src,
            alt: $props.opts.content.container.image.alt,
            width: "100",
            height: "100"
          }, null, 8, _hoisted_10)) : createCommentVNode("", true),
          $setup.get($props.opts, "content.container.card") ? (openBlock(), createElementBlock("div", _hoisted_11, [
            (openBlock(), createBlock(resolveDynamicComponent($props.opts.content.container.card.component), normalizeProps(guardReactiveProps($props.opts.content.container.card)), null, 16))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ])
    ]),
    !$setup.get($props.opts, "visible.fullWidth") && $setup.get($props.opts, "visible.fullBleedImg") && $setup.get($props.opts, "content.container.image") ? (openBlock(), createElementBlock("div", _hoisted_12, [
      createBaseVNode("div", {
        class: "row align-items-center",
        style: normalizeStyle({ height: `${$setup.fullBleedImgContainerHeight}px` })
      }, [
        _hoisted_13,
        createBaseVNode("div", {
          class: "col-md-5 h-100",
          style: normalizeStyle(`background: ${_ctx.isMobile ? "" : `${$props.opts.content.container.image.position ? $props.opts.content.container.image.position : "left center"} / cover`} url(${$props.opts.content.container.image.src}) no-repeat; background-size: ${$props.opts.content.container.image.size ? $props.opts.content.container.image.size : "cover"}`)
        }, null, 4)
      ], 4)
    ])) : createCommentVNode("", true)
  ], 6);
}
const HeroComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Hero", "description": "", "tags": {}, "props": [{ "name": "opts", "type": { "name": "object" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/Hero/Hero.vue"] };
const opts = {
  theme: "light",
  content: {
    class: "ids--color-bg-base-decorative-surface-2 caf-pt-20 caf-pb-20 caf-pt-md-30 caf-pb-md-30",
    background: "url(https://via.placeholder.com/940x618) no-repeat center / cover",
    cta: {
      label: "Label",
      url: "/"
    },
    eyebrow: "SIT AMET MORBI QUAM MASSA",
    link: {
      label: "Label",
      url: "/"
    },
    subtitle: "Penatibus non sagittis, integer elit sed tristique. Nulla leo risus lectus ligula netus sagittis tristique quisque dui. Risus lorem convallis nunc sed posuere dignissim magna aenean.",
    title: "Enim gravida sollicitudin aliquam.",
    container: {
      card: {
        component: "BaseCard1",
        overline: "Overline",
        bgImg: "https://via.placeholder.com/600x600",
        title: "Centering on Racial Equity in Charlottesville and other really long extra long text",
        truncateTitle: false,
        url: "/blog/centering-on-racial-equity-in-charlottesville/",
        username: "Latesha Kelly"
      }
    }
  },
  visible: {
    fullWidth: false
  }
};
const HeroCard_stories = {
  title: "Blocks/Marketing/Hero",
  component: HeroComponent,
  args: {
    opts
  }
};
const Default = {};
const FullBleed = {
  args: {
    opts: {
      ...opts,
      content: {
        ...opts.content,
        container: {
          image: {
            src: "https://via.placeholder.com/150/0000FF/FFFFFF/?text=Test",
            alt: "Some image info"
          }
        }
      },
      visible: {
        fullWidth: false,
        fullBleedImg: true
      }
    }
  }
};
const ImageContainer = {
  args: {
    opts: {
      ...opts,
      content: {
        ...opts.content,
        container: {
          image: {
            src: "https://via.placeholder.com/150/0000FF/FFFFFF/?text=Test",
            alt: "Some image info"
          }
        }
      },
      visible: {
        fullWidth: false
      }
    }
  }
};
const EmptyContainer = {
  args: {
    opts: {
      ...opts,
      content: {
        ...opts.content,
        class: "",
        background: "url(https://via.placeholder.com/940x618) no-repeat center / cover",
        container: null
      },
      visible: {
        fullWidth: false
      }
    }
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{}",
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
FullBleed.parameters = {
  ...FullBleed.parameters,
  docs: {
    ...(_d = FullBleed.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    opts: {\n      ...opts,\n      content: {\n        ...opts.content,\n        container: {\n          image: {\n            src: 'https://via.placeholder.com/150/0000FF/FFFFFF/?text=Test',\n            alt: 'Some image info'\n          }\n        }\n      },\n      visible: {\n        fullWidth: false,\n        fullBleedImg: true\n      }\n    }\n  }\n}",
      ...(_f = (_e = FullBleed.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
ImageContainer.parameters = {
  ...ImageContainer.parameters,
  docs: {
    ...(_g = ImageContainer.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    opts: {\n      ...opts,\n      content: {\n        ...opts.content,\n        container: {\n          image: {\n            src: 'https://via.placeholder.com/150/0000FF/FFFFFF/?text=Test',\n            alt: 'Some image info'\n          }\n        }\n      },\n      visible: {\n        fullWidth: false\n      }\n    }\n  }\n}",
      ...(_i = (_h = ImageContainer.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
EmptyContainer.parameters = {
  ...EmptyContainer.parameters,
  docs: {
    ...(_j = EmptyContainer.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    opts: {\n      ...opts,\n      content: {\n        ...opts.content,\n        class: '',\n        background: 'url(https://via.placeholder.com/940x618) no-repeat center / cover',\n        container: null\n      },\n      visible: {\n        fullWidth: false\n      }\n    }\n  }\n}",
      ...(_l = (_k = EmptyContainer.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Default", "FullBleed", "ImageContainer", "EmptyContainer"];
export {
  Default,
  EmptyContainer,
  FullBleed,
  ImageContainer,
  __namedExportsOrder,
  HeroCard_stories as default
};
