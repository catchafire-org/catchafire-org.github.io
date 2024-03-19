var _a, _b, _c;
import { B as BadgeCallout } from "./BadgeCallout-d242f8b0.js";
import { g as get } from "./get-586119b3.js";
import { a as resolveComponent, o as openBlock, c as createElementBlock, h as createBlock, w as withCtx, g as createTextVNode, t as toDisplayString, d as createCommentVNode, b as createBaseVNode, n as normalizeClass, z as createStaticVNode } from "./vue.esm-bundler-e926ae62.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./_commonjsHelpers-ca272635.js";
const _sfc_main = {
  components: {
    BadgeCallout
  },
  props: {
    opts: {
      type: Object
    },
    isMobile: {
      type: Boolean
    }
  },
  setup(props) {
    get(props.opts, "tracking.viewEvent") && props.opts.tracking.viewEvent();
    return { get };
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = ["src", "alt"];
const _hoisted_3 = {
  key: 1,
  width: "100",
  height: "100",
  viewBox: "0 0 100 100",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<circle opacity=".1" cx="43.657" cy="43.657" r="43.657" transform="matrix(-1 0 0 1 93.997 11.188)" fill="#324A9B"></circle><mask id="pw94f0qnzb" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="6" y="0" width="89" height="100"><path d="M6.683 55.35c0 24.111 19.546 43.657 43.657 43.657 24.111 0 43.657-19.546 43.657-43.657 0-24.11 7.259-54.544-43.657-54.544C7.304 4.032 6.683 31.24 6.683 55.35z" fill="url(#hi5aepzh5a)"></path></mask><g mask="url(#pw94f0qnzb)"><path fill-rule="evenodd" clip-rule="evenodd" d="m70.426 22.023.8 2.632 5.33-2.054-.805-2.55-5.325 1.972z" fill="#AB7B6C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M75.412 21.716c2.412-2.037 2.307-8.286 2.292-9.159-.014-.872.04-5.051-.563-6.093-.604-1.043-2.519-2.85-4.329-2.817-1.81.033-2.052 3.04-2.912 7.24-.86 4.198-1.174 3.374-2.191 1.58-1.017-1.795-2.112-3.332-2.838-2.314-.725 1.018 1.114 4.388 1.15 6.576.025 1.459 1.009 3.046 2.952 4.763 2.684 1.507 4.83 1.581 6.439.224z" fill="#AB7B6C"></path><path d="M51.934 66.568c-5.889 0-10.662-4.773-10.662-10.661s4.773-10.662 10.662-10.662c5.888 0 10.66 4.774 10.66 10.662 0 5.888-4.773 10.66-10.66 10.66z" fill="#EAEAEA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.509 62.5c4.19-2.943 9.334-12.04 14.162-15.41 4.474 6.513 13.181 9.415 17.885 5.388 4.703-4.026-2.073-20.082-4.917-28.85 1.434-.463 5.95-1.175 6.227-1.175 8.449 15.362 18.577 36.61 5.537 43.315C72.64 70.787 56.932 74.5 43.509 62.5z" fill="#FFF7F7"></path><path d="M44.98 34.584H37.1v11.125h7.88V34.584z" fill="#AB7B6C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.14 45.245h21.73l1.49.476 1.021-.476h8.553c5.632 0 10.197 4.566 10.197 10.198v48.863c0 .639-.518 1.157-1.157 1.157H21.173a1.157 1.157 0 0 1-1.155-1.08l-3.763-56.051a2.892 2.892 0 0 1 2.886-3.087z" fill="url(#4karc6t03c)"></path><path d="M51.007 16.274c0-5.504-4.462-9.965-9.966-9.965s-9.966 4.462-9.966 9.965v10.662c0 5.504 4.462 9.966 9.966 9.966s9.966-4.462 9.966-9.966V16.274z" fill="#AB7B6C"></path><path d="M31.075 23.46a1.854 1.854 0 1 0 0-3.71 1.854 1.854 0 0 0 0 3.71z" fill="#AB7B6C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M44.98 45.245c0-2.238-1.781-3.714-4.014-3.714-2.232 0-3.865 1.476-3.865 3.714h7.88z" fill="#AB7B6C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.54 52.1c4.953.98 12.871 1.817 19.552 8.684-9.46 27.55-3.01 53.129 3.458 66.072-1.781.532-3.473.858-4.87 1.115-15.283-17.437-24.59-45.967-18.14-75.87z" fill="#FFF7F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M48.689 5.382v10.197H36.637a2.781 2.781 0 0 0-2.781 2.781v.813c0 .32-.26.578-.579.578h-2.194a.578.578 0 0 1-.566-.463l-1.43-6.997a5.099 5.099 0 0 1 4.768-6.91H48.69z" fill="#5B2D19"></path><path d="M17.632 66.568c-5.888 0-10.662-4.773-10.662-10.661s4.774-10.662 10.662-10.662c5.888 0 10.661 4.774 10.661 10.662 0 5.888-4.773 10.66-10.661 10.66z" fill="#FFF7F7"></path><path d="M46.835 17.897a8.344 8.344 0 1 0 0-16.687 8.344 8.344 0 0 0 0 16.687z" fill="#5B2D19"></path></g><defs><linearGradient id="hi5aepzh5a" x1="92.504" y1="66.668" x2="8.175" y2="44.033" gradientUnits="userSpaceOnUse"><stop stop-color="#324A9B"></stop><stop offset="1" stop-color="#5379FA"></stop></linearGradient><linearGradient id="4karc6t03c" x1="39.19" y1="45.245" x2="39.19" y2="105.463" gradientUnits="userSpaceOnUse"><stop stop-color="#C2C2C2"></stop><stop offset="1" stop-color="#EAEAEA"></stop></linearGradient></defs>', 4);
const _hoisted_8 = [
  _hoisted_4
];
const _hoisted_9 = { class: "ids__calloutBanner-content" };
const _hoisted_10 = { class: "caf-pb-1 mb-0" };
const _hoisted_11 = {
  key: 0,
  class: "ids--type-lineheight-sm caf-mb-5 caf-mb-md-0"
};
const _hoisted_12 = { key: 0 };
const _hoisted_13 = ["href"];
const _hoisted_14 = { key: 1 };
const _hoisted_15 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BadgeCallout = resolveComponent("BadgeCallout");
  return openBlock(), createElementBlock("section", {
    role: "banner",
    class: normalizeClass(["ids__calloutBanner caf-p-10 caf-py-md-6 caf-pr-md-8 caf-pl-md-6 d-flex align-items-center caf-position-relative", { "flex-column text-center": $props.isMobile }])
  }, [
    $setup.get($props.opts, "content.badge") ? (openBlock(), createBlock(_component_BadgeCallout, {
      key: 0,
      class: "ids--color-bg-marketing-text-vibrant",
      style: { "position": "absolute", "left": "20px", "top": "-12px" }
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.opts.content.badge), 1)
      ]),
      _: 1
    })) : createCommentVNode("", true),
    createBaseVNode("div", {
      class: normalizeClass(["ids__calloutBanner-image caf-mb-5 caf-mb-md-0 caf-mr-md-6", { "text-center": $props.isMobile }])
    }, [
      $setup.get($props.opts, "content.image") ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("img", {
          class: "ids__marketing-image caf-mb-0",
          src: $props.opts.content.image.src,
          alt: $props.opts.content.image.alt,
          height: "100",
          width: "100"
        }, null, 8, _hoisted_2)
      ])) : (openBlock(), createElementBlock("svg", _hoisted_3, _hoisted_8))
    ], 2),
    createBaseVNode("div", _hoisted_9, [
      createBaseVNode("h1", _hoisted_10, toDisplayString($props.opts.content.title), 1),
      $setup.get($props.opts, "content.subtitle") ? (openBlock(), createElementBlock("p", _hoisted_11, toDisplayString($props.opts.content.subtitle), 1)) : createCommentVNode("", true)
    ]),
    createBaseVNode("div", {
      class: normalizeClass(["ids__calloutBanner-buttons", { "ml-auto": !$props.isMobile }])
    }, [
      $setup.get($props.opts, "content.cta") ? (openBlock(), createElementBlock("div", _hoisted_12, [
        createBaseVNode("a", {
          class: "btn btn-primary btn-md btn-block caf-mb-2",
          href: $props.opts.content.cta.url,
          onClick: _cache[0] || (_cache[0] = (e) => $setup.get($props.opts.tracking, "clickPrimaryCTAEvent") && $props.opts.tracking.clickPrimaryCTAEvent(e))
        }, toDisplayString($props.opts.content.cta.label), 9, _hoisted_13)
      ])) : createCommentVNode("", true),
      $setup.get($props.opts, "content.secondaryCta") ? (openBlock(), createElementBlock("div", _hoisted_14, [
        createBaseVNode("a", {
          class: "btn btn-hollow-on-lc btn-md btn-block caf-mb-0",
          href: $props.opts.content.secondaryCta.url,
          target: "_blank",
          onClick: _cache[1] || (_cache[1] = (e) => $setup.get($props.opts.tracking, "clickSecondaryCTAEvent") && $props.opts.tracking.clickSecondaryCTAEvent(e))
        }, toDisplayString($props.opts.content.secondaryCta.label), 9, _hoisted_15)
      ])) : createCommentVNode("", true)
    ], 2)
  ], 2);
}
const CalloutBannerComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "CalloutBanner", "description": "", "tags": {}, "props": [{ "name": "opts", "type": { "name": "object" } }, { "name": "isMobile", "type": { "name": "boolean" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/Banners/CalloutBanner/CalloutBanner.vue"] };
const CalloutBanner_stories = {
  title: "Components/Banners"
};
const CalloutBanner = {
  args: {
    isMobile: false,
    opts: {
      content: {
        badge: "New",
        title: "Want to volunteer with your colleagues?",
        subtitle: 'Group volunteering is available on Catchafire! You and up to 7 teammates can apply to any listing marked "Good for Groups."',
        cta: {
          label: "See Group Listings",
          url: "/volunteer"
        },
        secondaryCta: {
          label: "Learn More",
          url: "/"
        }
      },
      tracking: {
        viewEvent: () => {
        },
        clickPrimaryCTAEvent: () => {
        },
        clickSecondaryCTAEvent: () => {
        }
      }
    }
  },
  render: (args) => ({
    components: {
      CalloutBannerComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<CalloutBannerComponent v-bind="args" />'
  })
};
CalloutBanner.parameters = {
  ...CalloutBanner.parameters,
  docs: {
    ...(_a = CalloutBanner.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    isMobile: false,
    opts: {
      content: {
        badge: 'New',
        title: 'Want to volunteer with your colleagues?',
        subtitle: 'Group volunteering is available on Catchafire! You and up to 7 teammates can apply to any listing marked "Good for Groups."',
        cta: {
          label: 'See Group Listings',
          url: '/volunteer'
        },
        secondaryCta: {
          label: 'Learn More',
          url: '/'
        }
      },
      tracking: {
        viewEvent: () => {},
        clickPrimaryCTAEvent: () => {},
        clickSecondaryCTAEvent: () => {}
      }
    }
  },
  render: args => ({
    components: {
      CalloutBannerComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<CalloutBannerComponent v-bind="args" />'
  })
}`,
      ...(_c = (_b = CalloutBanner.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["CalloutBanner"];
export {
  CalloutBanner,
  __namedExportsOrder,
  CalloutBanner_stories as default
};
