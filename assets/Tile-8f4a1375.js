import { g as get } from "./get-586119b3.js";
import { I as Icons } from "./Icons-43684b48.js";
import { a as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, h as createBlock, w as withCtx, g as createTextVNode, t as toDisplayString, d as createCommentVNode, e as createVNode } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  components: {
    Icons
  },
  props: {
    icon: {
      type: String
    },
    iconClassName: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    link: {
      type: String,
      required: true
    },
    tracking: {
      type: Object
    }
  },
  setup() {
    return {
      get
    };
  }
};
const _hoisted_1 = ["href"];
const _hoisted_2 = { class: "ids__tile__container" };
const _hoisted_3 = { class: "ids__tile__content-container" };
const _hoisted_4 = {
  key: 0,
  class: "ids--type-display-small ids--color-type-base-text-default mb-0"
};
const _hoisted_5 = {
  key: 1,
  class: "ids--type-subtitle ids--color-type-base-text-subdued caf-mt-2"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icons = resolveComponent("Icons");
  return openBlock(), createElementBlock("a", {
    href: $props.link,
    class: "ids__tile justify-content-between caf-py-6 caf-pl-6 caf-pr-5",
    onClick: _cache[0] || (_cache[0] = ($event) => $setup.get($props.tracking, "clickEvent") && $props.tracking.clickEvent())
  }, [
    createBaseVNode("div", _hoisted_2, [
      $props.icon ? (openBlock(), createBlock(_component_Icons, {
        key: 0,
        class: "caf-mr-3 ids__tile__icon",
        className: $props.iconClassName
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString($props.icon), 1)
        ]),
        _: 1
      }, 8, ["className"])) : createCommentVNode("", true),
      createBaseVNode("div", _hoisted_3, [
        $props.title ? (openBlock(), createElementBlock("h5", _hoisted_4, toDisplayString($props.title), 1)) : createCommentVNode("", true),
        $props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_5, toDisplayString($props.subtitle), 1)) : createCommentVNode("", true)
      ])
    ]),
    createVNode(_component_Icons, {
      size: "Sm",
      class: "ml-auto ids--color-type-base-icon-default text-right caf-ml-3"
    }, {
      default: withCtx(() => [
        createTextVNode(" arrow_forward_ios ")
      ]),
      _: 1
    })
  ], 8, _hoisted_1);
}
const TileComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Tile", "description": "", "tags": {}, "props": [{ "name": "icon", "type": { "name": "string" } }, { "name": "iconClassName", "type": { "name": "string" } }, { "name": "title", "type": { "name": "string" }, "required": true }, { "name": "subtitle", "type": { "name": "string" } }, { "name": "link", "type": { "name": "string" }, "required": true }, { "name": "tracking", "type": { "name": "object" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/Tile/Tile.vue"] };
export {
  TileComponent as T
};
