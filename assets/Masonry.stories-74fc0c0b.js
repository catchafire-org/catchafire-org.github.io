var _a, _b, _c;
import { g as get } from "./get-586119b3.js";
import { D as defineComponent, E as toRefs, k as ref, l as onMounted, G as onBeforeUnmount, A as watch, o as openBlock, c as createElementBlock, F as Fragment, j as renderList, f as normalizeStyle, H as unref, r as renderSlot, g as createTextVNode, t as toDisplayString, I as nextTick, a as resolveComponent, d as createCommentVNode, e as createVNode, w as withCtx, b as createBaseVNode, n as normalizeClass } from "./vue.esm-bundler-e926ae62.js";
import { I as Icons } from "./Icons-43684b48.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./_commonjsHelpers-ca272635.js";
const H = ["data-index"], J = /* @__PURE__ */ defineComponent({
  __name: "masonry-wall",
  props: {
    columnWidth: { default: 400 },
    items: {},
    gap: { default: 0 },
    rtl: { type: Boolean, default: false },
    ssrColumns: { default: 0 },
    scrollContainer: { default: null },
    minColumns: {},
    maxColumns: {},
    keyMapper: { type: Function, default: (o, c, _, r) => r }
  },
  emits: ["redraw", "redrawSkip"],
  setup(o, { emit: c }) {
    const _ = o, {
      columnWidth: r,
      items: u,
      gap: f,
      rtl: k,
      ssrColumns: g,
      scrollContainer: C,
      minColumns: y,
      maxColumns: w,
      keyMapper: E
    } = toRefs(_), d = ref([]), p = ref();
    function x(t, e, n, l) {
      const a = B(n);
      return l + e + a <= t ? x(
        t,
        e,
        n + 1,
        l + e + a
      ) : n;
    }
    function B(t) {
      const e = Array.isArray(r.value) ? r.value : [r.value];
      return e[t % e.length];
    }
    function b() {
      const t = x(
        p.value.getBoundingClientRect().width,
        f.value,
        0,
        // Needs to be offset my negative gap to prevent gap counts being off by one
        -f.value
      ), e = Y(F(t));
      return e > 0 ? e : 1;
    }
    function F(t) {
      const e = w == null ? void 0 : w.value;
      return e && t > e ? e : t;
    }
    function Y(t) {
      const e = y == null ? void 0 : y.value;
      return e && t < e ? e : t;
    }
    function M(t) {
      return [...new Array(t)].map(() => []);
    }
    if (g.value > 0) {
      const t = M(g.value);
      u.value.forEach(
        (e, n) => t[n % g.value].push(n)
      ), d.value = t;
    }
    async function T(t) {
      if (t >= u.value.length)
        return;
      await nextTick();
      const e = [...p.value.children];
      k.value && e.reverse();
      const n = e.reduce(
        (l, a) => a.getBoundingClientRect().height < l.getBoundingClientRect().height ? a : l
      );
      d.value[+n.dataset.index].push(t), await T(t + 1);
    }
    async function h(t = false) {
      if (d.value.length === b() && !t) {
        c("redrawSkip");
        return;
      }
      d.value = M(b());
      const e = C == null ? void 0 : C.value, n = e ? e.scrollTop : window.scrollY;
      await T(0), e ? e.scrollBy({ top: n - e.scrollTop }) : window.scrollTo({ top: n }), c("redraw");
    }
    const s = typeof ResizeObserver > "u" ? void 0 : new ResizeObserver(() => h());
    return onMounted(() => {
      h(), s == null || s.observe(p.value);
    }), onBeforeUnmount(() => s == null ? void 0 : s.unobserve(p.value)), watch([u, k], () => h(true)), watch([r, f, y, w], () => h()), (t, e) => (openBlock(), createElementBlock("div", {
      ref_key: "wall",
      ref: p,
      class: "masonry-wall",
      style: normalizeStyle({ display: "flex", gap: `${unref(f)}px` })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(d.value, (n, l) => (openBlock(), createElementBlock("div", {
        key: l,
        class: "masonry-column",
        "data-index": l,
        style: normalizeStyle({
          display: "flex",
          "flex-basis": `${B(l)}px`,
          "flex-direction": "column",
          "flex-grow": 1,
          gap: `${unref(f)}px`,
          height: ["-webkit-max-content", "-moz-max-content", "max-content"],
          "min-width": 0
        })
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(n, (a, R) => (openBlock(), createElementBlock("div", {
          key: unref(E)(unref(u)[a], l, R, a),
          class: "masonry-item"
        }, [
          renderSlot(t.$slots, "default", {
            item: unref(u)[a],
            column: l,
            row: R,
            index: a
          }, () => [
            createTextVNode(toDisplayString(unref(u)[a]), 1)
          ])
        ]))), 128))
      ], 12, H))), 128))
    ], 4));
  }
}), P = /* @__PURE__ */ (() => {
  const o = J;
  return o.install = (c) => {
    c.component("MasonryWall", o);
  }, o;
})();
const _sfc_main = {
  components: {
    Icons,
    MasonryWall: P
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
    const mobileItems = get(props.opts, "content.masonry.items").slice(0, 3);
    get(props.opts, "tracking.viewEvent") && props.opts.tracking.viewEvent();
    return { mobileItems, get };
  }
};
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = { class: "ids__masonry-card caf-p-5 caf-mb-0 ids--border-all-base-stroke-default" };
const _hoisted_3 = {
  key: 0,
  class: "masonry-item-rating caf-mb-3 d-inline-flex align-items-center"
};
const _hoisted_4 = {
  key: 0,
  class: "ids__masonry-rating-stars ids--color-type-marketing-decorative-icon-vibrant d-flex"
};
const _hoisted_5 = {
  key: 1,
  class: "ids--type-subtitle ids--type-lineheight-sm masonry-item-rating-nps"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "ids--type-display-small" }, "“", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { class: "ids--type-display-small" }, "”", -1);
const _hoisted_8 = { key: 2 };
const _hoisted_9 = {
  key: 0,
  class: "ids--type-caption ids--type-lineheight-sm ids--color-type-base-text-subdued d-block caf-mb-0"
};
const _hoisted_10 = {
  key: 1,
  class: "text-center caf-mt-8"
};
const _hoisted_11 = ["href", "target"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icons = resolveComponent("Icons");
  const _component_MasonryWall = resolveComponent("MasonryWall");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["ids__masonry ids__masonry--light container-fluid grid caf-py-20 d-flex flex-column align-items-center", `ids__masonry--${$props.opts.theme}`]),
    style: normalizeStyle($setup.get($props.opts, "content.style"))
  }, [
    $setup.get($props.opts, "content.title") ? (openBlock(), createElementBlock("h2", {
      key: 0,
      class: "ids__masonry-title ids--type-marketing-xl-expressive text-center caf-mb-8",
      innerHTML: _ctx.$sanitize($props.opts.content.title)
    }, null, 8, _hoisted_1)) : createCommentVNode("", true),
    createVNode(_component_MasonryWall, {
      class: normalizeClass(["", { "caf-mt-8": !$props.opts.visible.title || !$props.opts.content.title }]),
      items: !!$props.isMobile ? $setup.mobileItems : $props.opts.content.masonry.items,
      "column-width": $props.opts.content.masonry.config.width,
      gap: $props.opts.content.masonry.config.padding
    }, {
      default: withCtx(({ item }) => [
        createBaseVNode("figure", _hoisted_2, [
          $props.opts.visible.ratings ? (openBlock(), createElementBlock("div", _hoisted_3, [
            $props.opts.visible.stars ? (openBlock(), createElementBlock("div", _hoisted_4, [
              createVNode(_component_Icons, {
                size: "Sm",
                class: "d-flex justify-content-center align-items-center"
              }, {
                default: withCtx(() => [
                  createTextVNode(" star ")
                ]),
                _: 1
              }),
              createVNode(_component_Icons, {
                size: "Sm",
                class: "d-flex justify-content-center align-items-center"
              }, {
                default: withCtx(() => [
                  createTextVNode(" star ")
                ]),
                _: 1
              }),
              createVNode(_component_Icons, {
                size: "Sm",
                class: "d-flex justify-content-center align-items-center"
              }, {
                default: withCtx(() => [
                  createTextVNode(" star ")
                ]),
                _: 1
              }),
              createVNode(_component_Icons, {
                size: "Sm",
                class: "d-flex justify-content-center align-items-center"
              }, {
                default: withCtx(() => [
                  createTextVNode(" star ")
                ]),
                _: 1
              }),
              createVNode(_component_Icons, {
                size: "Sm",
                class: "d-flex justify-content-center align-items-center"
              }, {
                default: withCtx(() => [
                  createTextVNode(" star ")
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            $props.opts.visible.nps_score ? (openBlock(), createElementBlock("div", _hoisted_5, toDisplayString(item.nps), 1)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          item.quote ? (openBlock(), createElementBlock("blockquote", {
            key: 1,
            class: normalizeClass(["ids--type-display-small ids--type-lineheight-sm", { "caf-mb-5": !!item.author, "caf-mb-0": !item.author }])
          }, [
            createBaseVNode("p", null, [
              _hoisted_6,
              createTextVNode(toDisplayString(item.quote), 1),
              _hoisted_7
            ])
          ], 2)) : createCommentVNode("", true),
          item.author ? (openBlock(), createElementBlock("figcaption", _hoisted_8, [
            createBaseVNode("span", {
              class: normalizeClass(["ids--type-subtitle ids--type-lineheight-sm d-block", {
                "caf-mb-1": item.company || item.title,
                "caf-mb-0": !item.company && !item.title
              }])
            }, toDisplayString(item.author), 3),
            item.company || item.title ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(item.company || item.title), 1)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ])
      ]),
      _: 1
    }, 8, ["class", "items", "column-width", "gap"]),
    $props.opts.visible.cta ? (openBlock(), createElementBlock("div", _hoisted_10, [
      createBaseVNode("a", {
        class: normalizeClass([
          "btn btn-marketing",
          ({
            "btn-secondary": $props.opts.theme !== "dark" && $props.opts.theme !== "blue" && $props.opts.theme !== "teal" && !$props.opts.content.cta.class,
            "btn-hollow-on-hc": ($props.opts.theme === "dark" || $props.opts.theme === "blue" || $props.opts.theme === "teal") && !$props.opts.content.cta.class
          }, $props.opts.content.cta.class)
        ]),
        href: $props.opts.content.cta.url,
        target: $setup.get($props.opts, "content.cta.target") || "_blank",
        onClick: _cache[0] || (_cache[0] = (e) => $setup.get($props.opts.tracking, "clickEvent") && $props.opts.tracking.clickEvent(e))
      }, toDisplayString($props.opts.content.cta.label), 11, _hoisted_11)
    ])) : createCommentVNode("", true)
  ], 6);
}
const MasonryComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "Masonry", "description": "", "tags": {}, "props": [{ "name": "opts", "type": { "name": "object" } }, { "name": "isMobile", "type": { "name": "boolean" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Components/Masonry/Masonry.vue"] };
const Masonry_stories = {
  title: "Components"
};
const Masonry = {
  args: {
    isMobile: false,
    opts: {
      theme: "dark",
      content: {
        title: "Orci mi tellus gravida",
        cta: {
          label: "Read Impact Stories",
          url: "http://catchafire.org/impact/stories"
        },
        masonry: {
          config: {
            width: 300,
            padding: 12
          },
          items: [{
            nps: 3,
            quote: "This was a first year pilot for our foundation.",
            author: "Brennan Gould",
            company: "Charlottesville Area Community Foundation"
          }, {
            nps: 4.5,
            quote: "This was a first year pilot for our foundation. We invested $150,000 and that money has saved nonprofits in our region over $2.5 million.",
            author: "Brennan Gould",
            company: "Charlottesville Area Community Foundation"
          }, {
            nps: 9,
            quote: "We invested $150,000 and that money has saved nonprofits in our region over $2.5 million.",
            author: "Brennan Gould",
            company: "Charlottesville Area Community Foundation"
          }, {
            nps: 1.5,
            quote: "This is a test quote which should NOT show up on a mobile view as the limit will be restricted to 3 to keep from having to scroll too far.",
            author: "Josh Harbaugh",
            company: "Catchafire"
          }]
        }
      },
      visible: {
        cta: true,
        ratings: true,
        title: true,
        stars: true,
        nps_score: true
      },
      store: {},
      tracking: {
        viewEvent: () => {
        }
      }
    }
  },
  render: (args) => ({
    components: {
      MasonryComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<MasonryComponent v-bind="args" />'
  })
};
Masonry.parameters = {
  ...Masonry.parameters,
  docs: {
    ...(_a = Masonry.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    isMobile: false,
    opts: {
      theme: 'dark',
      content: {
        title: 'Orci mi tellus gravida',
        cta: {
          label: 'Read Impact Stories',
          url: 'http://catchafire.org/impact/stories'
        },
        masonry: {
          config: {
            width: 300,
            padding: 12
          },
          items: [{
            nps: 3,
            quote: 'This was a first year pilot for our foundation.',
            author: 'Brennan Gould',
            company: 'Charlottesville Area Community Foundation'
          }, {
            nps: 4.5,
            quote: 'This was a first year pilot for our foundation. We invested $150,000 and that money has saved nonprofits in our region over $2.5 million.',
            author: 'Brennan Gould',
            company: 'Charlottesville Area Community Foundation'
          }, {
            nps: 9,
            quote: 'We invested $150,000 and that money has saved nonprofits in our region over $2.5 million.',
            author: 'Brennan Gould',
            company: 'Charlottesville Area Community Foundation'
          }, {
            nps: 1.5,
            quote: 'This is a test quote which should NOT show up on a mobile view as the limit will be restricted to 3 to keep from having to scroll too far.',
            author: 'Josh Harbaugh',
            company: 'Catchafire'
          }]
        }
      },
      visible: {
        cta: true,
        ratings: true,
        title: true,
        stars: true,
        nps_score: true
      },
      store: {},
      tracking: {
        viewEvent: () => {}
      }
    }
  },
  render: args => ({
    components: {
      MasonryComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<MasonryComponent v-bind="args" />'
  })
}`,
      ...(_c = (_b = Masonry.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["Masonry"];
export {
  Masonry,
  __namedExportsOrder,
  Masonry_stories as default
};
