var _a, _b, _c;
import { T as TileComponent } from "./Tile-8f4a1375.js";
import "./get-586119b3.js";
import "./_commonjsHelpers-ca272635.js";
import "./Icons-43684b48.js";
import "./vue.esm-bundler-e926ae62.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const Tile_stories = {
  title: "Components"
};
const Tile = {
  args: {
    icon: "insert_chart",
    title: "Engagement Metrics",
    subtitle: "Comprehensive real-time reporting",
    link: "/"
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
      TileComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<TileComponent v-bind="args" />'
  })
};
Tile.parameters = {
  ...Tile.parameters,
  docs: {
    ...(_a = Tile.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    icon: 'insert_chart',
    title: 'Engagement Metrics',
    subtitle: 'Comprehensive real-time reporting',
    link: '/'
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
      TileComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<TileComponent v-bind="args" />'
  })
}`,
      ...(_c = (_b = Tile.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Tile"];
export {
  Tile,
  __namedExportsOrder,
  Tile_stories as default
};
