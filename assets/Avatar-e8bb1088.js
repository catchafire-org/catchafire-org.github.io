import { o as openBlock, c as createElementBlock, t as toDisplayString, n as normalizeClass } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: {
    img: {
      type: String,
      required: true
    },
    initials: {
      type: String
    },
    size: {
      type: String,
      default: "Sm"
      // Sm, Md, Lg
    },
    username: {
      type: String,
      required: true
    }
  },
  computed: {
    pixels() {
      const pixelSizes = {
        Sm: 32,
        Md: 52,
        Lg: 102
      };
      return pixelSizes[this.size];
    }
  }
};
const _hoisted_1 = ["src", "width", "height", "alt"];
const _hoisted_2 = {
  key: 1,
  class: "ids__avatar-initials"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ids__avatar", { [$props.size]: $props.size }])
  }, [
    $props.img ? (openBlock(), createElementBlock("img", {
      key: 0,
      src: $props.img,
      width: $options.pixels,
      height: $options.pixels,
      alt: `${$props.username} avatar image`
    }, null, 8, _hoisted_1)) : (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString($props.initials), 1))
  ], 2);
}
const AvatarComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Avatar", "description": "", "tags": {}, "props": [{ "name": "img", "type": { "name": "string" }, "required": true }, { "name": "initials", "type": { "name": "string" } }, { "name": "size", "type": { "name": "string" }, "defaultValue": { "func": false, "value": "'Sm'" } }, { "name": "username", "type": { "name": "string" }, "required": true }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/Avatar/Avatar.vue"] };
export {
  AvatarComponent as A
};
