var _a, _b, _c, _d, _e, _f;
import { g as get } from "./get-586119b3.js";
import { T as TileComponent } from "./Tile-8f4a1375.js";
import { I as Icons } from "./Icons-43684b48.js";
import { S as SectionDividerHeaderComponent } from "./SectionDividerHeader-4ad4086a.js";
import { a as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, e as createVNode, w as withCtx, g as createTextVNode, n as normalizeClass, d as createCommentVNode, t as toDisplayString, h as createBlock, F as Fragment, j as renderList, f as normalizeStyle } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./_commonjsHelpers-ca272635.js";
const _sfc_main = {
  components: {
    Icons,
    SectionDividerHeader: SectionDividerHeaderComponent,
    Tile: TileComponent
  },
  props: {
    opts: {
      type: Object
    }
  },
  setup() {
    const THEME = {
      LIGHT: "light"
    };
    return {
      get,
      THEME
    };
  }
};
const _hoisted_1 = { class: "container text-center ids--type-body caf-px-md-8" };
const _hoisted_2 = { class: "ids__marketing-emptyStateCard__icon__container caf-mb-5 d-flex justify-content-center" };
const _hoisted_3 = { class: "ids__marketing-emptyStateCard__icon" };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = { class: "row" };
const _hoisted_7 = ["href"];
const _hoisted_8 = {
  key: 1,
  class: "col-md-6 text-md-left caf-pl-md-1"
};
const _hoisted_9 = ["href"];
const _hoisted_10 = { class: "ids__marketing-tiles-title" };
const _hoisted_11 = {
  key: 3,
  class: "row caf-px-md-1"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icons = resolveComponent("Icons");
  const _component_SectionDividerHeader = resolveComponent("SectionDividerHeader");
  const _component_Tile = resolveComponent("Tile");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      "ids__marketing-emptyStateCard ids__marketing--light container-fluid",
      (`ids__marketing--${$props.opts.theme} ${$setup.get($props.opts, "content.class")}`, $setup.get($props.opts, "content.class") || "caf-pt-20 caf-pb-20")
    ]),
    style: normalizeStyle($setup.get($props.opts, "content.style"))
  }, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_Icons, {
            size: "Sm",
            className: "material-symbols-outlined"
          }, {
            default: withCtx(() => [
              createTextVNode(" temp_preferences_custom ")
            ]),
            _: 1
          })
        ])
      ]),
      $setup.get($props.opts, "content.title") ? (openBlock(), createElementBlock("h2", {
        key: 0,
        class: normalizeClass(["ids__marketing-title ids--type-display-medium caf-mb-2", { "caf-mb-5": !$setup.get($props.opts, "content.subtitle") }]),
        innerHTML: _ctx.$sanitize($props.opts.content.title)
      }, null, 10, _hoisted_4)) : createCommentVNode("", true),
      $setup.get($props.opts, "content.subtitle") ? (openBlock(), createElementBlock("p", {
        key: 1,
        class: normalizeClass(["ids__marketing-subtitle ids--type-title caf-mb-5", {
          "caf-mb-12": !$setup.get($props.opts, "content.cta") || !$setup.get($props.opts, "content.secondaryCta")
        }]),
        innerHTML: _ctx.$sanitize($props.opts.content.subtitle)
      }, null, 10, _hoisted_5)) : createCommentVNode("", true),
      createBaseVNode("div", _hoisted_6, [
        $setup.get($props.opts, "content.cta") ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["col-md-6", {
            "text-md-right caf-pr-md-1": $setup.get($props.opts, "content.secondaryCta")
          }])
        }, [
          createBaseVNode("a", {
            class: normalizeClass([
              "btn btn-selected caf-mb-md-0",
              ({
                "btn-secondary": $props.opts.theme !== "dark" && $props.opts.theme !== "blue" && !$props.opts.content.cta.class,
                "btn-tertiary": ($props.opts.theme === "dark" || $props.opts.theme === "blue") && !$props.opts.content.cta.class,
                "caf-mb-2": $setup.get($props.opts, "content.secondaryCta")
              }, $props.opts.content.cta.class)
            ]),
            href: $props.opts.content.cta.url
          }, toDisplayString($props.opts.content.cta.label), 11, _hoisted_7)
        ], 2)) : createCommentVNode("", true),
        $setup.get($props.opts, "content.secondaryCta") ? (openBlock(), createElementBlock("div", _hoisted_8, [
          createBaseVNode("a", {
            class: normalizeClass([
              "btn btn-secondary",
              ({
                "btn-secondary": $props.opts.theme !== "dark" && $props.opts.theme !== "blue" && !$props.opts.content.cta.class,
                "btn-tertiary": ($props.opts.theme === "dark" || $props.opts.theme === "blue") && !$props.opts.content.cta.class
              }, $props.opts.content.cta.class)
            ]),
            href: $props.opts.content.secondaryCta.url
          }, toDisplayString($props.opts.content.secondaryCta.label), 11, _hoisted_9)
        ])) : createCommentVNode("", true)
      ]),
      $setup.get($props.opts, "content.tilesHeader") ? (openBlock(), createBlock(_component_SectionDividerHeader, {
        key: 2,
        class: "caf-mt-12 caf-mb-4",
        borderColor: $props.opts.theme !== $setup.THEME.LIGHT ? "ids--color-border-base-text-on-interactive" : ""
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_10, toDisplayString($props.opts.content.tilesHeader), 1)
        ]),
        _: 1
      }, 8, ["borderColor"])) : createCommentVNode("", true),
      $setup.get($props.opts, "content.tiles", []).length ? (openBlock(), createElementBlock("div", _hoisted_11, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.opts.content.tiles, (tile, key) => {
          return openBlock(), createElementBlock("div", {
            key,
            class: normalizeClass(["caf-mb-4 caf-mb-md-0 caf-px-md-2", `col-md-${12 / $props.opts.content.tiles.length}`])
          }, [
            createVNode(_component_Tile, {
              icon: tile.icon,
              iconClassName: tile.iconClassName,
              title: tile.title,
              subtitle: tile.subtitle,
              link: tile.link
            }, null, 8, ["icon", "iconClassName", "title", "subtitle", "link"])
          ], 2);
        }), 128))
      ])) : createCommentVNode("", true)
    ])
  ], 6);
}
const EmptyStateCardComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "EmptyStateCard", "description": "", "tags": {}, "props": [{ "name": "opts", "type": { "name": "object" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/EmptyStateCard/EmptyStateCard.vue"] };
const EmptyStateCard_stories = {
  title: "Components/Empty State Card"
};
const TilesOff = {
  args: {
    opts: {
      theme: "light",
      content: {
        cta: {
          label: "Post a project",
          url: "/"
        },
        secondaryCta: {
          label: "Watch a seminar",
          url: "/"
        },
        subtitle: "Soon this page will showcase metrics and stories from your programs activity. Get started today by posting a project, joining one of our educational webinars, or speaking to our in-house advisors.",
        title: "Your program is new. Be one of the first to get started!"
      }
    }
  },
  render: (args) => ({
    components: {
      EmptyStateCardComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<EmptyStateCardComponent v-bind="args" />'
  })
};
const TilesOn = {
  args: {
    opts: {
      theme: "light",
      content: {
        cta: {
          label: "Post a project",
          url: "/"
        },
        secondaryCta: {
          label: "Watch a seminar",
          url: "/"
        },
        subtitle: "Soon this page will showcase metrics and stories from your programs activity. Get started today by posting a project, joining one of our educational webinars, or speaking to our in-house advisors.",
        title: "Your program is new. Be one of the first to get started!",
        tilesHeader: "Explore more program content here:",
        tiles: [{
          title: "Engagement Metrics",
          subtitle: "Comprehensive real-time reporting",
          link: "/",
          icon: "insert_chart",
          iconClassName: "material-symbols-outlined"
        }, {
          title: "Success Stories",
          subtitle: "Collaborations from the community",
          link: "/",
          icon: "handshake",
          iconClassName: "material-symbols-outlined"
        }]
      }
    }
  },
  render: (args) => ({
    components: {
      EmptyStateCardComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<EmptyStateCardComponent v-bind="args" />'
  })
};
TilesOff.parameters = {
  ...TilesOff.parameters,
  docs: {
    ...(_a = TilesOff.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    opts: {
      theme: 'light',
      content: {
        cta: {
          label: 'Post a project',
          url: '/'
        },
        secondaryCta: {
          label: 'Watch a seminar',
          url: '/'
        },
        subtitle: 'Soon this page will showcase metrics and stories from your programs activity. Get started today by posting a project, joining one of our educational webinars, or speaking to our in-house advisors.',
        title: 'Your program is new. Be one of the first to get started!'
      }
    }
  },
  render: args => ({
    components: {
      EmptyStateCardComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<EmptyStateCardComponent v-bind="args" />'
  })
}`,
      ...(_c = (_b = TilesOff.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
TilesOn.parameters = {
  ...TilesOn.parameters,
  docs: {
    ...(_d = TilesOn.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: `{
  args: {
    opts: {
      theme: 'light',
      content: {
        cta: {
          label: 'Post a project',
          url: '/'
        },
        secondaryCta: {
          label: 'Watch a seminar',
          url: '/'
        },
        subtitle: 'Soon this page will showcase metrics and stories from your programs activity. Get started today by posting a project, joining one of our educational webinars, or speaking to our in-house advisors.',
        title: 'Your program is new. Be one of the first to get started!',
        tilesHeader: 'Explore more program content here:',
        tiles: [{
          title: 'Engagement Metrics',
          subtitle: 'Comprehensive real-time reporting',
          link: '/',
          icon: 'insert_chart',
          iconClassName: 'material-symbols-outlined'
        }, {
          title: 'Success Stories',
          subtitle: 'Collaborations from the community',
          link: '/',
          icon: 'handshake',
          iconClassName: 'material-symbols-outlined'
        }]
      }
    }
  },
  render: args => ({
    components: {
      EmptyStateCardComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<EmptyStateCardComponent v-bind="args" />'
  })
}`,
      ...(_f = (_e = TilesOn.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["TilesOff", "TilesOn"];
export {
  TilesOff,
  TilesOn,
  __namedExportsOrder,
  EmptyStateCard_stories as default
};
