var _a, _b, _c;
import { I as Icons } from "./Icons-43684b48.js";
import { a as resolveComponent, o as openBlock, c as createElementBlock, h as createBlock, w as withCtx, g as createTextVNode, t as toDisplayString, n as normalizeClass, d as createCommentVNode, r as renderSlot } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  components: {
    Icons
  },
  props: {
    badgeClassName: {
      type: String
    },
    icon: {
      type: String
    },
    iconClassName: {
      type: String
    }
  },
  setup() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icons = resolveComponent("Icons");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ids__badgeWithIcon", $props.badgeClassName])
  }, [
    $props.icon ? (openBlock(), createBlock(_component_Icons, {
      key: 0,
      class: normalizeClass(["caf-mr-1", $props.iconClassName]),
      size: "Sm"
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.icon), 1)
      ]),
      _: 1
    }, 8, ["class"])) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const BadgeWithIconComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "BadgeWithIcon", "description": "", "tags": {}, "props": [{ "name": "badgeClassName", "type": { "name": "string" } }, { "name": "icon", "type": { "name": "string" } }, { "name": "iconClassName", "type": { "name": "string" } }], "slots": [{ "name": "default" }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/BadgeWithIcon/BadgeWithIcon.vue"] };
const BadgeWithIcon_stories = {
  title: "Components/Badges"
};
const BadgeWithIcon = {
  argTypes: {
    label: {
      control: "text"
    },
    badgeClassName: {
      control: "text"
    },
    icon: {
      control: "text"
    },
    iconClassName: {
      control: "text"
    }
  },
  args: {
    icon: "groups",
    label: "Good for groups"
  },
  render: (args) => ({
    components: {
      BadgeWithIconComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<BadgeWithIconComponent v-bind="args">{{ args.default }}</BadgeWithIconComponent>'
  })
};
BadgeWithIcon.parameters = {
  ...BadgeWithIcon.parameters,
  docs: {
    ...(_a = BadgeWithIcon.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  argTypes: {
    label: {
      control: 'text'
    },
    badgeClassName: {
      control: 'text'
    },
    icon: {
      control: 'text'
    },
    iconClassName: {
      control: 'text'
    }
  },
  args: {
    icon: 'groups',
    label: 'Good for groups'
  },
  render: args => ({
    components: {
      BadgeWithIconComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<BadgeWithIconComponent v-bind="args">{{ args.default }}</BadgeWithIconComponent>'
  })
}`,
      ...(_c = (_b = BadgeWithIcon.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["BadgeWithIcon"];
export {
  BadgeWithIcon,
  __namedExportsOrder,
  BadgeWithIcon_stories as default
};
