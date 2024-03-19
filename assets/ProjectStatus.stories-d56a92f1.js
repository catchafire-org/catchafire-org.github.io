var _a, _b, _c;
import { o as openBlock, c as createElementBlock, r as renderSlot, n as normalizeClass } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: {
    status: String
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass({ [$props.status]: $props.status })
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const ProjectStatusComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "ProjectStatus", "description": "", "tags": {}, "props": [{ "name": "status", "type": { "name": "string" } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/ProjectStatus/ProjectStatus.vue"] };
const ProjectStatus_stories = {
  title: "Components"
};
const ProjectStatus = {
  args: {
    label: "Project status",
    status: "ids__ProjectStatus--draft"
  },
  argTypes: {
    status: {
      control: {
        type: "radio"
      },
      options: ["ids__ProjectStatus--draft", "ids__ProjectStatus--sent", "ids__ProjectStatus--completed", "ids__ProjectStatus--inprogress", "ids__ProjectStatus--live", "ids__ProjectStatus--cancelled"]
    }
  },
  render: (args) => ({
    components: {
      ProjectStatusComponent
    },
    setup() {
      return {
        args
      };
    },
    template: `<ProjectStatusComponent v-bind="args">{{ args.label }}</ProjectStatusComponent>`
  })
};
ProjectStatus.parameters = {
  ...ProjectStatus.parameters,
  docs: {
    ...(_a = ProjectStatus.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Project status',\n    status: 'ids__ProjectStatus--draft'\n  },\n  argTypes: {\n    status: {\n      control: {\n        type: 'radio'\n      },\n      options: ['ids__ProjectStatus--draft', 'ids__ProjectStatus--sent', 'ids__ProjectStatus--completed', 'ids__ProjectStatus--inprogress', 'ids__ProjectStatus--live', 'ids__ProjectStatus--cancelled']\n    }\n  },\n  render: args => ({\n    components: {\n      ProjectStatusComponent\n    },\n    setup() {\n      return {\n        args\n      };\n    },\n    template: `<ProjectStatusComponent v-bind=\"args\">{{ args.label }}</ProjectStatusComponent>`\n  })\n}",
      ...(_c = (_b = ProjectStatus.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["ProjectStatus"];
export {
  ProjectStatus,
  __namedExportsOrder,
  ProjectStatus_stories as default
};
