var _a, _b, _c;
import { B as BadgeComponent } from "./Badge-717a7a7e.js";
import "./vue.esm-bundler-e926ae62.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const Badge_stories = {
  title: "Components/Badges"
};
const Badge = {
  argTypes: {
    default: {
      control: "text",
      description: "Slot content",
      defaultValue: "Badge"
    }
  },
  render: (args) => ({
    components: {
      BadgeComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<BadgeComponent v-bind="args">{{ args.default }}</BadgeComponent>'
  })
};
Badge.parameters = {
  ...Badge.parameters,
  docs: {
    ...(_a = Badge.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Badge'
    }
  },
  render: args => ({
    components: {
      BadgeComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<BadgeComponent v-bind="args">{{ args.default }}</BadgeComponent>'
  })
}`,
      ...(_c = (_b = Badge.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Badge"];
export {
  Badge,
  __namedExportsOrder,
  Badge_stories as default
};
