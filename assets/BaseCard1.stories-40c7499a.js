var _a, _b, _c;
import { B as BaseCard1Component } from "./BaseCard1-a20c6b32.js";
import "./Avatar-e8bb1088.js";
import "./vue.esm-bundler-e926ae62.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./Badge-717a7a7e.js";
const BaseCard1_stories = {
  title: "Components/Cards",
  component: BaseCard1Component
};
const BaseCard1 = {
  args: {
    avatar: "https://media.vanityfair.com/photos/5b46274a6520f70b78e5cfe5/5:3/w_1440,h_864,c_limit/The-Rock-2020-Potential-Run.jpg",
    badge: "Badge",
    bgImg: "https://media.gettyimages.com/photos/rooftop-celebration-picture-id614509184?s=2048x2048",
    date: "Apr 3, 2021",
    initials: "TR",
    overline: "Overline text",
    tag: "Tag",
    title: "Test blog 1",
    url: "/",
    username: "The Rock"
  },
  render: (args) => ({
    components: {
      BaseCard1Component
    },
    setup() {
      return {
        args
      };
    },
    template: '<div style="width: 300px"><BaseCard1Component v-bind="args" /></div>'
  })
};
BaseCard1.parameters = {
  ...BaseCard1.parameters,
  docs: {
    ...(_a = BaseCard1.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    avatar: 'https://media.vanityfair.com/photos/5b46274a6520f70b78e5cfe5/5:3/w_1440,h_864,c_limit/The-Rock-2020-Potential-Run.jpg',
    badge: 'Badge',
    bgImg: 'https://media.gettyimages.com/photos/rooftop-celebration-picture-id614509184?s=2048x2048',
    date: 'Apr 3, 2021',
    initials: 'TR',
    overline: 'Overline text',
    tag: 'Tag',
    title: 'Test blog 1',
    url: '/',
    username: 'The Rock'
  },
  render: args => ({
    components: {
      BaseCard1Component
    },
    setup() {
      return {
        args
      };
    },
    template: '<div style="width: 300px"><BaseCard1Component v-bind="args" /></div>'
  })
}`,
      ...(_c = (_b = BaseCard1.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["BaseCard1"];
export {
  BaseCard1,
  __namedExportsOrder,
  BaseCard1_stories as default
};
