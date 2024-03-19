var _a, _b, _c;
import { o as openBlock, c as createElementBlock, b as createBaseVNode, r as renderSlot, n as normalizeClass } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
const emitter = mitt();
function useEmitter() {
  return emitter;
}
const _sfc_main = {
  compatConfig: {
    // https://github.com/vuejs/core/issues/6206
    COMPONENT_V_MODEL: false
  },
  props: {
    id: {
      type: String
    },
    checked: {
      type: Boolean
    },
    emitName: {
      type: String
    }
  },
  setup(props) {
    const emitter2 = useEmitter();
    const updateValue = () => {
      emitter2.emit(props.emitName, props.id);
    };
    return { updateValue };
  }
};
const _hoisted_1 = ["for"];
const _hoisted_2 = ["id"];
const _hoisted_3 = { class: "w-100 ids--type-display-small" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["ids__pill ids--radius-full d-flex align-items-center justify-content-center caf-px-8", { "ids__pill--checked": $props.checked }]),
    for: `radio_${$props.id}`
  }, [
    createBaseVNode("input", {
      class: "hide",
      type: "radio",
      name: "pills",
      id: `radio_${$props.id}`,
      onInput: _cache[0] || (_cache[0] = (...args) => $setup.updateValue && $setup.updateValue(...args))
    }, null, 40, _hoisted_2),
    createBaseVNode("span", _hoisted_3, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 10, _hoisted_1);
}
const PillComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Pill", "description": "", "tags": {}, "props": [{ "name": "id", "type": { "name": "string" } }, { "name": "checked", "type": { "name": "boolean" } }, { "name": "emitName", "type": { "name": "string" } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/Pill/Pill.vue"] };
const Pill_stories = {
  title: "Components"
};
const Pill = {
  args: {
    checked: false
  },
  argTypes: {
    default: {
      control: "text",
      description: "Slot content",
      defaultValue: "Pill name"
    },
    checked: {
      control: {
        type: "radio"
      },
      defaultValue: false,
      options: [true, false]
    }
  },
  render: (args) => ({
    components: {
      PillComponent
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="display: flex; justify-content: center; width: 300px; margin: 0 auto;">
        <PillComponent v-bind="args">{{ args.default }}</PillComponent>
      </div>`
  })
};
Pill.parameters = {
  ...Pill.parameters,
  docs: {
    ...(_a = Pill.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    checked: false
  },
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Pill name'
    },
    checked: {
      control: {
        type: 'radio'
      },
      defaultValue: false,
      options: [true, false]
    }
  },
  render: args => ({
    components: {
      PillComponent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; justify-content: center; width: 300px; margin: 0 auto;">
        <PillComponent v-bind="args">{{ args.default }}</PillComponent>
      </div>\`
  })
}`,
      ...(_c = (_b = Pill.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Pill"];
export {
  Pill,
  __namedExportsOrder,
  Pill_stories as default
};
