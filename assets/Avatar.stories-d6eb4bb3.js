var _a, _b, _c;
import { A as AvatarComponent } from "./Avatar-e8bb1088.js";
import "./vue.esm-bundler-e926ae62.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const Avatar_stories = {
  title: "Components"
};
const Avatar = {
  args: {
    img: "https://media.vanityfair.com/photos/5b46274a6520f70b78e5cfe5/5:3/w_1440,h_864,c_limit/The-Rock-2020-Potential-Run.jpg",
    size: "Sm",
    username: "The Rock"
  },
  argTypes: {
    size: {
      control: {
        type: "radio"
      },
      defaultValue: "Sm",
      options: ["Sm", "Md", "Lg"]
    }
  },
  render: (args) => ({
    components: {
      AvatarComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<AvatarComponent v-bind="args" />'
  })
};
Avatar.parameters = {
  ...Avatar.parameters,
  docs: {
    ...(_a = Avatar.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    img: 'https://media.vanityfair.com/photos/5b46274a6520f70b78e5cfe5/5:3/w_1440,h_864,c_limit/The-Rock-2020-Potential-Run.jpg',
    size: 'Sm',
    username: 'The Rock'
  },
  argTypes: {
    size: {
      control: {
        type: 'radio'
      },
      defaultValue: 'Sm',
      options: ['Sm', 'Md', 'Lg']
    }
  },
  render: args => ({
    components: {
      AvatarComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<AvatarComponent v-bind="args" />'
  })
}`,
      ...(_c = (_b = Avatar.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Avatar"];
export {
  Avatar,
  __namedExportsOrder,
  Avatar_stories as default
};
