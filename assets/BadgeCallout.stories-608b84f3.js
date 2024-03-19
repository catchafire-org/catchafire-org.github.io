var _a, _b, _c;
import { B as BadgeCallout$1 } from "./BadgeCallout-d242f8b0.js";
import "./vue.esm-bundler-e926ae62.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const BadgeCallout_stories = {
  title: "Components/Badges"
};
const BadgeCallout = {
  argTypes: {
    label: {
      control: "text"
    },
    size: {
      control: {
        type: "radio"
      },
      options: ["ids__badgeCallout--sizeL", "ids__badgeCallout--sizeM", "ids__badgeCallout--apply"]
    }
  },
  args: {
    label: "New",
    size: "ids__badgeCallout--sizeM"
  },
  render: (args) => ({
    components: {
      BadgeCalloutComponent: BadgeCallout$1
    },
    setup() {
      return {
        args
      };
    },
    template: '<BadgeCalloutComponent v-bind="args">{{ args.label }}</BadgeCalloutComponent>'
  })
};
BadgeCallout.parameters = {
  ...BadgeCallout.parameters,
  docs: {
    ...(_a = BadgeCallout.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  argTypes: {
    label: {
      control: 'text'
    },
    size: {
      control: {
        type: 'radio'
      },
      options: ['ids__badgeCallout--sizeL', 'ids__badgeCallout--sizeM', 'ids__badgeCallout--apply']
    }
  },
  args: {
    label: 'New',
    size: 'ids__badgeCallout--sizeM'
  },
  render: args => ({
    components: {
      BadgeCalloutComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<BadgeCalloutComponent v-bind="args">{{ args.label }}</BadgeCalloutComponent>'
  })
}`,
      ...(_c = (_b = BadgeCallout.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["BadgeCallout"];
export {
  BadgeCallout,
  __namedExportsOrder,
  BadgeCallout_stories as default
};
