var _a, _b, _c;
import { g as get } from "./get-586119b3.js";
import { T as TileComponent } from "./Tile-8f4a1375.js";
import { S as SectionDividerHeaderComponent } from "./SectionDividerHeader-4ad4086a.js";
import { a as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, h as createBlock, w as withCtx, t as toDisplayString, d as createCommentVNode, F as Fragment, j as renderList, n as normalizeClass, e as createVNode, f as normalizeStyle } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./_commonjsHelpers-ca272635.js";
import "./Icons-43684b48.js";
const _sfc_main = {
  components: {
    SectionDividerHeader: SectionDividerHeaderComponent,
    Tile: TileComponent
  },
  props: {
    isMobile: {
      type: Boolean
    },
    opts: {
      type: Object
    }
  },
  computed: {
    borderColor() {
      return this.opts.theme !== this.THEME.LIGHT && this.opts.theme !== this.THEME.GRAY ? "ids--color-border-base-text-on-interactive" : "";
    }
  },
  setup() {
    const THEME = {
      LIGHT: "light",
      GRAY: "gray"
    };
    return {
      get,
      THEME
    };
  }
};
const _hoisted_1 = { class: "container ids--type-body ids__marketing-tiles-body" };
const _hoisted_2 = { class: "ids__marketing-tiles-title" };
const _hoisted_3 = {
  key: 1,
  class: "row caf-px-md-1"
};
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = {
  key: 3,
  class: "caf-mt-5 text-center"
};
const _hoisted_6 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SectionDividerHeader = resolveComponent("SectionDividerHeader");
  const _component_Tile = resolveComponent("Tile");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ids__marketing-tiles ids__marketing--light container-fluid", `ids__marketing--${$props.opts.theme} ${$setup.get(
      $props.opts,
      "content.class",
      "caf-pt-20 caf-pb-20"
    )}`]),
    style: normalizeStyle($setup.get($props.opts, "content.style"))
  }, [
    createBaseVNode("div", _hoisted_1, [
      $setup.get($props.opts, "content.title") ? (openBlock(), createBlock(_component_SectionDividerHeader, {
        key: 0,
        class: "caf-mb-4",
        borderColor: $options.borderColor
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, toDisplayString($props.opts.content.title), 1)
        ]),
        _: 1
      }, 8, ["borderColor"])) : createCommentVNode("", true),
      $setup.get($props.opts, "content.tiles", []).length ? (openBlock(), createElementBlock("div", _hoisted_3, [
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
              link: tile.link,
              tracking: tile.tracking
            }, null, 8, ["icon", "iconClassName", "title", "subtitle", "link", "tracking"])
          ], 2);
        }), 128))
      ])) : createCommentVNode("", true),
      $setup.get($props.opts, "content.subtitle") ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: "ids__marketing-tiles-subtitle ids--type-display-medium caf-mt-8 text-center",
        innerHTML: _ctx.$sanitize($props.opts.content.subtitle)
      }, null, 8, _hoisted_4)) : createCommentVNode("", true),
      $setup.get($props.opts, "content.cta") ? (openBlock(), createElementBlock("div", _hoisted_5, [
        $setup.get($props.opts, "content.cta") ? (openBlock(), createElementBlock("a", {
          key: 0,
          class: normalizeClass([
            "btn btn-marketing caf-mb-8 caf-mb-md-0",
            ({
              "btn-secondary": $props.opts.theme !== "dark" && $props.opts.theme !== "blue" && !$props.opts.content.cta.class,
              "btn-hollow-on-hc": ($props.opts.theme === "dark" || $props.opts.theme === "blue") && !$props.opts.content.cta.class
            }, $props.opts.content.cta.class)
          ]),
          href: $props.opts.content.cta.url,
          onClick: _cache[0] || (_cache[0] = (e) => $setup.get($props.opts.tracking, "clickEvent") && $props.opts.tracking.clickEvent(e))
        }, toDisplayString($props.opts.content.cta.label), 11, _hoisted_6)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ])
  ], 6);
}
const TilesComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Tiles", "description": "", "tags": {}, "props": [{ "name": "isMobile", "type": { "name": "boolean" } }, { "name": "opts", "type": { "name": "object" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/Tiles/Tiles.vue"] };
const Tiles_stories = {
  title: "Blocks/Marketing"
};
const Tiles = {
  args: {
    opts: {
      theme: "blue",
      content: {
        cta: {
          label: "Learn More",
          url: "/howitworks/companies"
        },
        tiles: [{
          title: "Nonprofit Orgs",
          subtitle: "Boost your programming capacity",
          link: "/howitworks/nonprofits"
        }, {
          title: "Volunteers",
          subtitle: "Leverage your time and talent",
          link: "/howitworks/volunteers"
        }, {
          title: "Funders",
          subtitle: "Reimagine your grantmaking",
          link: "/howitworks/foundations"
        }],
        title: "Over a decade of expertise",
        subtitle: "Interested in corporate philanthropy?"
      }
    }
  },
  render: (args) => ({
    components: {
      TilesComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<TilesComponent v-bind="args" />'
  })
};
Tiles.parameters = {
  ...Tiles.parameters,
  docs: {
    ...(_a = Tiles.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    opts: {
      theme: 'blue',
      content: {
        cta: {
          label: 'Learn More',
          url: '/howitworks/companies'
        },
        tiles: [{
          title: 'Nonprofit Orgs',
          subtitle: 'Boost your programming capacity',
          link: '/howitworks/nonprofits'
        }, {
          title: 'Volunteers',
          subtitle: 'Leverage your time and talent',
          link: '/howitworks/volunteers'
        }, {
          title: 'Funders',
          subtitle: 'Reimagine your grantmaking',
          link: '/howitworks/foundations'
        }],
        title: 'Over a decade of expertise',
        subtitle: 'Interested in corporate philanthropy?'
      }
    }
  },
  render: args => ({
    components: {
      TilesComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<TilesComponent v-bind="args" />'
  })
}`,
      ...(_c = (_b = Tiles.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Tiles"];
export {
  Tiles,
  __namedExportsOrder,
  Tiles_stories as default
};
