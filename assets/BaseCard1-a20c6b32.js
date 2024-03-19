import { A as AvatarComponent } from "./Avatar-e8bb1088.js";
import { B as BadgeComponent } from "./Badge-717a7a7e.js";
import { a as resolveComponent, c as createElementBlock, b as createBaseVNode, t as toDisplayString, d as createCommentVNode, e as createVNode, w as withCtx, f as normalizeStyle, n as normalizeClass, o as openBlock, g as createTextVNode } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  components: {
    Avatar: AvatarComponent,
    Badge: BadgeComponent
  },
  props: {
    avatar: {
      type: String
    },
    badge: {
      type: String,
      required: true
    },
    bgImg: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    initials: {
      type: String,
      required: true
    },
    overline: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    target: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    truncate: {
      type: Boolean,
      default: true
    }
  }
};
const _hoisted_1 = ["href", "target"];
const _hoisted_2 = {
  key: 0,
  class: "ids__baseCard1-tag"
};
const _hoisted_3 = {
  key: 1,
  class: "ids__baseCard1-badge"
};
const _hoisted_4 = { class: "ids__baseCard1-body" };
const _hoisted_5 = {
  key: 0,
  class: "ids__baseCard1-overline"
};
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = {
  key: 1,
  class: "ids__baseCard1-date"
};
const _hoisted_8 = {
  key: 0,
  class: "ids__baseCard1-footer"
};
const _hoisted_9 = { class: "ids__baseCard1-avatar" };
const _hoisted_10 = { class: "ids__baseCard1-username" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  const _component_Avatar = resolveComponent("Avatar");
  return openBlock(), createElementBlock("a", {
    class: "ids__baseCard1 caf-mb-5",
    href: $props.url,
    target: $props.target
  }, [
    createBaseVNode("div", {
      class: "ids__baseCard1-header",
      style: normalizeStyle({ background: `url(${$props.bgImg})` })
    }, [
      $props.tag ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString($props.tag), 1)) : createCommentVNode("", true),
      $props.badge ? (openBlock(), createElementBlock("div", _hoisted_3, [
        createVNode(_component_Badge, null, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($props.badge), 1)
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true)
    ], 4),
    createBaseVNode("div", _hoisted_4, [
      $props.overline ? (openBlock(), createElementBlock("p", _hoisted_5, toDisplayString($props.overline), 1)) : createCommentVNode("", true),
      createBaseVNode("h5", {
        class: normalizeClass(["ids__baseCard1-title", {
          "ignore-truncate": !$props.truncate
        }]),
        innerHTML: _ctx.$sanitize($props.title)
      }, null, 10, _hoisted_6),
      $props.date ? (openBlock(), createElementBlock("p", _hoisted_7, toDisplayString($props.date), 1)) : createCommentVNode("", true)
    ]),
    $props.avatar ? (openBlock(), createElementBlock("div", _hoisted_8, [
      createBaseVNode("div", _hoisted_9, [
        createVNode(_component_Avatar, {
          img: $props.avatar,
          size: "Sm",
          username: $props.username,
          initials: $props.initials
        }, null, 8, ["img", "username", "initials"]),
        createBaseVNode("div", _hoisted_10, toDisplayString($props.username), 1)
      ])
    ])) : createCommentVNode("", true)
  ], 8, _hoisted_1);
}
const BaseCard1Component = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "BaseCard1", "description": "", "tags": {}, "props": [{ "name": "avatar", "type": { "name": "string" } }, { "name": "badge", "type": { "name": "string" }, "required": true }, { "name": "bgImg", "type": { "name": "string" }, "required": true }, { "name": "date", "type": { "name": "string" }, "required": true }, { "name": "initials", "type": { "name": "string" }, "required": true }, { "name": "overline", "type": { "name": "string" }, "required": true }, { "name": "tag", "type": { "name": "string" }, "required": true }, { "name": "target", "type": { "name": "string" } }, { "name": "title", "type": { "name": "string" }, "required": true }, { "name": "url", "type": { "name": "string" }, "required": true }, { "name": "username", "type": { "name": "string" }, "required": true }, { "name": "truncate", "type": { "name": "boolean" }, "defaultValue": { "func": false, "value": "true" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/Cards/BaseCard1/BaseCard1.vue"] };
export {
  BaseCard1Component as B
};
