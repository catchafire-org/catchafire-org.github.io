var _a, _b, _c;
import { S as SectionDividerHeaderComponent } from "./SectionDividerHeader-4ad4086a.js";
import "./vue.esm-bundler-e926ae62.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const SectionDividerHeader_stories = {
  title: "Components"
};
const SectionDividerHeader = {
  args: {
    opts: {
      theme: "light"
    }
  },
  argTypes: {
    default: {
      control: "text",
      description: "Slot content",
      defaultValue: "Section Header"
    }
  },
  render: (args) => ({
    components: {
      SectionDividerHeaderComponent
    },
    setup() {
      return {
        args
      };
    },
    template: `
      <div style="width: 100%; margin: 0 auto;">
        <SectionDividerHeaderComponent v-bind="args">{{ args.default }}</SectionDividerHeaderComponent>
      </div>
    `
  })
};
SectionDividerHeader.parameters = {
  ...SectionDividerHeader.parameters,
  docs: {
    ...(_a = SectionDividerHeader.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    opts: {
      theme: 'light'
    }
  },
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Section Header'
    }
  },
  render: args => ({
    components: {
      SectionDividerHeaderComponent
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="width: 100%; margin: 0 auto;">
        <SectionDividerHeaderComponent v-bind="args">{{ args.default }}</SectionDividerHeaderComponent>
      </div>
    \`
  })
}`,
      ...(_c = (_b = SectionDividerHeader.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["SectionDividerHeader"];
export {
  SectionDividerHeader,
  __namedExportsOrder,
  SectionDividerHeader_stories as default
};
