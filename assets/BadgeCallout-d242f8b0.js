import { o as openBlock, c as createElementBlock, r as renderSlot, n as normalizeClass } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: {
    size: {
      type: String
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    href: "",
    class: normalizeClass(["ids__badgeCallout", { [$props.size]: $props.size }])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const BadgeCallout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "BadgeCallout", "description": "", "tags": {}, "props": [{ "name": "size", "type": { "name": "string" } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/BadgeCallout/BadgeCallout.vue"] };
export {
  BadgeCallout as B
};
