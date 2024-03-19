var _a, _b, _c;
import { o as openBlock, c as createElementBlock, b as createBaseVNode, r as renderSlot } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
const _hoisted_1 = { class: "ids__fileAttachment" };
const _hoisted_2 = {
  class: "ids__fileAttachment--name",
  href: "",
  target: "_blank"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "ids__fileAttachment--actions" }, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "ids__fileAttachment--actions-item",
    href: ""
  }, "Edit"),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "ids__fileAttachment--actions-item",
    href: ""
  }, "Remove")
], -1);
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("a", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ]),
    _hoisted_3
  ]);
}
const FileAttachmentComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "displayName": "FileAttachment", "description": "", "tags": {}, "slots": [{ "name": "default" }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/FileAttachment/FileAttachment.vue"] };
const FileAttachment_stories = {
  title: "Components"
};
const FileAttachment = {
  args: {
    label: "Filename.pdf"
  },
  render: (args) => ({
    components: {
      FileAttachmentComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<FileAttachmentComponent v-bind="args">{{ args.label }}</FileAttachmentComponent>'
  })
};
FileAttachment.parameters = {
  ...FileAttachment.parameters,
  docs: {
    ...(_a = FileAttachment.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    label: 'Filename.pdf'
  },
  render: args => ({
    components: {
      FileAttachmentComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<FileAttachmentComponent v-bind="args">{{ args.label }}</FileAttachmentComponent>'
  })
}`,
      ...(_c = (_b = FileAttachment.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["FileAttachment"];
export {
  FileAttachment,
  __namedExportsOrder,
  FileAttachment_stories as default
};
