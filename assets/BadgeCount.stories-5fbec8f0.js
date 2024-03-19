var _a, _b, _c;
import { o as openBlock, c as createElementBlock, r as renderSlot, n as normalizeClass } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: {
    size: {
      type: String
    },
    variant: {
      type: String
    },
    status: {
      type: String
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    href: "",
    class: normalizeClass(["ids__badgeCount", { [$props.size]: $props.size, [$props.variant]: $props.variant, [$props.status]: $props.status }])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const BadgeCountComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "BadgeCount", "description": "", "tags": {}, "props": [{ "name": "size", "type": { "name": "string" } }, { "name": "variant", "type": { "name": "string" } }, { "name": "status", "type": { "name": "string" } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/BadgeCount/BadgeCount.vue"] };
const BadgeCount_stories = {
  title: "Components/Badges"
};
const BadgeCount = {
  argTypes: {
    label: {
      control: "number"
    },
    size: {
      control: {
        type: "radio"
      },
      options: ["ids__badgeCount--sizeM", "ids__badgeCount--sizeS"]
    },
    variant: {
      control: {
        type: "radio"
      },
      options: ["ids__badgeCount--regular", "ids__badgeCount--system"]
    },
    status: {
      control: {
        type: "radio"
      },
      options: ["ids__badgeCount--inactive", "ids__badgeCount--active", "ids__badgeCount--disabled"]
    }
  },
  args: {
    label: "13",
    size: "ids__badgeCount--sizeM",
    variant: "ids__badgeCount--regular",
    status: "ids__badgeCount--inactive"
  },
  render: (args) => ({
    components: {
      BadgeCountComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<BadgeCountComponent v-bind="args">{{ args.label }}</BadgeCountComponent>'
  })
};
BadgeCount.parameters = {
  ...BadgeCount.parameters,
  docs: {
    ...(_a = BadgeCount.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  argTypes: {
    label: {
      control: 'number'
    },
    size: {
      control: {
        type: 'radio'
      },
      options: ['ids__badgeCount--sizeM', 'ids__badgeCount--sizeS']
    },
    variant: {
      control: {
        type: 'radio'
      },
      options: ['ids__badgeCount--regular', 'ids__badgeCount--system']
    },
    status: {
      control: {
        type: 'radio'
      },
      options: ['ids__badgeCount--inactive', 'ids__badgeCount--active', 'ids__badgeCount--disabled']
    }
  },
  args: {
    label: '13',
    size: 'ids__badgeCount--sizeM',
    variant: 'ids__badgeCount--regular',
    status: 'ids__badgeCount--inactive'
  },
  render: args => ({
    components: {
      BadgeCountComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<BadgeCountComponent v-bind="args">{{ args.label }}</BadgeCountComponent>'
  })
}`,
      ...(_c = (_b = BadgeCount.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["BadgeCount"];
export {
  BadgeCount,
  __namedExportsOrder,
  BadgeCount_stories as default
};
