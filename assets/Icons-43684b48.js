import { o as openBlock, c as createElementBlock, b as createBaseVNode, r as renderSlot, n as normalizeClass } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: {
    size: {
      type: String
      //Sm, Lg
    },
    className: {
      type: String,
      default: "material-icons"
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ids__icons", $props.size === "Sm" ? "ids__icons--small" : "ids__icons--large"])
  }, [
    createBaseVNode("span", {
      class: normalizeClass(["ids__icons__icon", $props.className])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 2);
}
const Icons = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Icons", "description": "", "tags": {}, "props": [{ "name": "size", "type": { "name": "string" } }, { "name": "className", "type": { "name": "string" }, "defaultValue": { "func": false, "value": "'material-icons'" } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/Icons/Icons.vue"] };
export {
  Icons as I
};
