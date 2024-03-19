var _a, _b, _c;
import { o as openBlock, c as createElementBlock, r as renderSlot, n as normalizeClass } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: {
    role: {
      type: String
    },
    category: {
      type: String
    },
    size: {
      type: String
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    href: "",
    class: normalizeClass(["btn", { [$props.role]: $props.role, [$props.category]: $props.category, [$props.size]: $props.size }])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const ButtonComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Button", "description": "", "tags": {}, "props": [{ "name": "role", "type": { "name": "string" } }, { "name": "category", "type": { "name": "string" } }, { "name": "size", "type": { "name": "string" } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/Buttons/Button.vue"] };
const Button_stories = {
  title: "Components/Button"
};
const Button = {
  args: {
    label: "Primary Action",
    role: "btn-primary",
    category: "btn",
    size: ""
  },
  argTypes: {
    label: {
      control: "text"
    },
    role: {
      control: {
        type: "radio"
      },
      options: ["btn-primary", "btn-hollow-on-lc", "btn-hollow-on-hc", "btn-option"]
    },
    category: {
      control: {
        type: "radio"
      },
      options: ["btn", "btn-marketing"]
    },
    size: {
      control: {
        type: "radio"
      },
      options: ["btn-sm", "btn-md", "btn-block"]
    }
  },
  render: (args) => ({
    components: {
      ButtonComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<ButtonComponent v-bind="args">{{ args.label }}</ButtonComponent>'
  })
};
Button.parameters = {
  ...Button.parameters,
  docs: {
    ...(_a = Button.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    label: 'Primary Action',
    role: 'btn-primary',
    category: 'btn',
    size: ''
  },
  argTypes: {
    label: {
      control: 'text'
    },
    role: {
      control: {
        type: 'radio'
      },
      options: ['btn-primary', 'btn-hollow-on-lc', 'btn-hollow-on-hc', 'btn-option']
    },
    category: {
      control: {
        type: 'radio'
      },
      options: ['btn', 'btn-marketing']
    },
    size: {
      control: {
        type: 'radio'
      },
      options: ['btn-sm', 'btn-md', 'btn-block']
    }
  },
  render: args => ({
    components: {
      ButtonComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<ButtonComponent v-bind="args">{{ args.label }}</ButtonComponent>'
  })
}`,
      ...(_c = (_b = Button.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Button"];
export {
  Button,
  __namedExportsOrder,
  Button_stories as default
};
