var _a, _b, _c;
import { I as Icons$1 } from "./Icons-43684b48.js";
import "./vue.esm-bundler-e926ae62.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const Icons_stories = {
  title: "Components"
};
const Icons = {
  args: {
    size: "Lg"
  },
  argTypes: {
    default: {
      control: "text",
      description: "Slot content",
      defaultValue: "face"
    },
    size: {
      control: {
        type: "radio"
      },
      defaultValue: "Lg",
      options: ["Sm", "Lg"]
    },
    className: {
      control: {
        type: "radio"
      },
      default: "material-icons",
      options: ["material-icons", "material-icons-outlined", "material-icons-sharp", "material-symbols-outlined", "material-symbols-rounded"]
    }
  },
  render: (args) => ({
    components: {
      IconsComponent: Icons$1
    },
    setup() {
      return {
        args
      };
    },
    template: '<IconsComponent v-bind="args">{{ args.default }}</IconsComponent>'
  })
};
Icons.parameters = {
  ...Icons.parameters,
  docs: {
    ...(_a = Icons.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    size: 'Lg'
  },
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'face'
    },
    size: {
      control: {
        type: 'radio'
      },
      defaultValue: 'Lg',
      options: ['Sm', 'Lg']
    },
    className: {
      control: {
        type: 'radio'
      },
      default: 'material-icons',
      options: ['material-icons', 'material-icons-outlined', 'material-icons-sharp', 'material-symbols-outlined', 'material-symbols-rounded']
    }
  },
  render: args => ({
    components: {
      IconsComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<IconsComponent v-bind="args">{{ args.default }}</IconsComponent>'
  })
}`,
      ...(_c = (_b = Icons.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Icons"];
export {
  Icons,
  __namedExportsOrder,
  Icons_stories as default
};
