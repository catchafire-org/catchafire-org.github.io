import { o as openBlock, c as createElementBlock, b as createBaseVNode, n as normalizeClass, r as renderSlot } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: {
    borderColor: {
      type: String
    }
  }
};
const _hoisted_1 = { class: "ids__marketing-sectionDividerHeader" };
const _hoisted_2 = { class: "ids--type-title ids__marketing-sectionDividerHeader-title caf-mx-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", {
      class: normalizeClass(["ids__marketing-sectionDividerHeader-border", $props.borderColor])
    }, null, 2),
    createBaseVNode("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ]),
    createBaseVNode("div", {
      class: normalizeClass(["ids__marketing-sectionDividerHeader-border", $props.borderColor])
    }, null, 2)
  ]);
}
const SectionDividerHeaderComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "SectionDividerHeader", "description": "", "tags": {}, "props": [{ "name": "borderColor", "type": { "name": "string" } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/SectionDividerHeader/SectionDividerHeader.vue"] };
export {
  SectionDividerHeaderComponent as S
};
