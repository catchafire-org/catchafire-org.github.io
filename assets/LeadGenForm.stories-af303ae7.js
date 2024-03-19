var _a, _b, _c;
import { k as ref, s as reactive, a as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, d as createCommentVNode, u as withModifiers, n as normalizeClass, F as Fragment, j as renderList, v as withDirectives, x as vModelText, y as vModelSelect, t as toDisplayString, e as createVNode, w as withCtx, g as createTextVNode, f as normalizeStyle } from "./vue.esm-bundler-e926ae62.js";
import { g as get } from "./get-586119b3.js";
import { I as Icons } from "./Icons-43684b48.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./_commonjsHelpers-ca272635.js";
const _sfc_main = {
  props: {
    opts: {
      type: Object
    }
  },
  components: {
    Icons
  },
  setup(props) {
    const wrapper = ref(null);
    const form = reactive({ fields: get(props.opts, "content.form", []) });
    const current_site = window.__INITDATA__.current_site;
    function _fieldErrors() {
      form.fields = form.fields.map((field) => {
        if (field.required) {
          return {
            ...field,
            error: get(field.validation, "match") ? !field.validation.match.test(field.value) : field.value === ""
          };
        }
        return {
          ...field,
          error: false
        };
      });
      const error = form.fields.find((field) => field.error);
      return error;
    }
    function _convertFields() {
      return Object.fromEntries(
        form.fields.map((field) => [field.name, field.value])
      );
    }
    function submitForm() {
      if (_fieldErrors()) {
        return;
      }
      get(props.opts, "store.submit") && props.opts.store.submit(_convertFields());
      get(props.opts, "tracking.clickEvent") && props.opts.tracking.clickEvent();
    }
    return {
      get,
      wrapper,
      form,
      current_site,
      submitForm
    };
  }
};
const _hoisted_1 = { class: "container text-center ids--type-body" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = { class: "row" };
const _hoisted_5 = ["placeholder", "onUpdate:modelValue"];
const _hoisted_6 = ["onUpdate:modelValue", "title"];
const _hoisted_7 = {
  value: "",
  disabled: "",
  selected: ""
};
const _hoisted_8 = ["value"];
const _hoisted_9 = ["placeholder", "onUpdate:modelValue"];
const _hoisted_10 = { key: 3 };
const _hoisted_11 = {
  key: 0,
  class: "col-md-6"
};
const _hoisted_12 = ["placeholder", "onUpdate:modelValue"];
const _hoisted_13 = ["onUpdate:modelValue", "title"];
const _hoisted_14 = {
  value: "",
  disabled: "",
  selected: ""
};
const _hoisted_15 = ["value"];
const _hoisted_16 = ["placeholder", "onUpdate:modelValue"];
const _hoisted_17 = { key: 3 };
const _hoisted_18 = {
  key: 1,
  class: "container text-center ids__marketing-leadGenForm-success ids__marketing-title caf-mt-20"
};
const _hoisted_19 = ["innerHTML"];
const _hoisted_20 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icons = resolveComponent("Icons");
  return openBlock(), createElementBlock("div", {
    ref: "wrapper",
    class: normalizeClass(["ids__marketing-leadGenForm ids__marketing--light container-fluid", `ids__marketing--${$props.opts.theme} ${$setup.get(
      $props.opts,
      "content.class",
      "caf-pt-20 caf-pb-20"
    )}`]),
    style: normalizeStyle($setup.get($props.opts, "content.style"))
  }, [
    createBaseVNode("div", _hoisted_1, [
      $setup.get($props.opts, "content.title") ? (openBlock(), createElementBlock("h2", {
        key: 0,
        class: "ids__marketing-title ids--type-marketing-xl-expressive caf-mb-4",
        innerHTML: _ctx.$sanitize($props.opts.content.title)
      }, null, 8, _hoisted_2)) : createCommentVNode("", true),
      $setup.get($props.opts, "content.subtitle") && !$setup.get($props.opts.store, "isSubmitted.value") ? (openBlock(), createElementBlock("p", {
        key: 1,
        class: "ids__marketing-subtitle ids--type-paragraph-big caf-mx-5 caf-mb-9",
        innerHTML: _ctx.$sanitize($props.opts.content.subtitle)
      }, null, 8, _hoisted_3)) : createCommentVNode("", true)
    ]),
    !$setup.get($props.opts.store, "isSubmitted.value") ? (openBlock(), createElementBlock("form", {
      key: 0,
      class: "container text-center ids--type-body",
      onSubmit: _cache[0] || (_cache[0] = withModifiers((...args) => $setup.submitForm && $setup.submitForm(...args), ["prevent"]))
    }, [
      createBaseVNode("div", _hoisted_4, [
        createBaseVNode("div", {
          class: normalizeClass(["col-md-6", {
            "col-md-12 d-flex flex-column flex-md-row": !$props.opts.visible.allFields
          }])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.form.fields.slice(0, 3), (field, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: normalizeClass(["ids__marketing-leadGenForm-inputContainer", { error: field.error }])
            }, [
              field.type === "input" ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                type: "text",
                class: normalizeClass(["caf-mb-6", { "caf-mr-md-5": !$props.opts.visible.allFields && index === 0 }]),
                placeholder: field.placeholder,
                "onUpdate:modelValue": ($event) => field.value = $event
              }, null, 10, _hoisted_5)), [
                [vModelText, field.value]
              ]) : createCommentVNode("", true),
              field.type === "select" ? withDirectives((openBlock(), createElementBlock("select", {
                key: 1,
                class: "caf-mb-6",
                "onUpdate:modelValue": ($event) => field.value = $event,
                title: field.title
              }, [
                createBaseVNode("option", _hoisted_7, toDisplayString(field.options[0].label), 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(field.options.splice(1), (item, key) => {
                  return openBlock(), createElementBlock("option", {
                    value: item.value,
                    key
                  }, toDisplayString(item.label), 9, _hoisted_8);
                }), 128))
              ], 8, _hoisted_6)), [
                [vModelSelect, field.value]
              ]) : createCommentVNode("", true),
              field.type === "textarea" ? withDirectives((openBlock(), createElementBlock("textarea", {
                key: 2,
                class: "ids__marketing-leadGenForm-message form-control",
                placeholder: field.placeholder,
                "onUpdate:modelValue": ($event) => field.value = $event
              }, null, 8, _hoisted_9)), [
                [vModelText, field.value]
              ]) : createCommentVNode("", true),
              field.error ? (openBlock(), createElementBlock("small", _hoisted_10, toDisplayString($setup.get(field, "validation.errorMsg", "Field cannot be empty")), 1)) : createCommentVNode("", true)
            ], 2);
          }), 128))
        ], 2),
        $props.opts.visible.allFields ? (openBlock(), createElementBlock("div", _hoisted_11, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.form.fields.slice(3, 5), (field, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: normalizeClass(["ids__marketing-leadGenForm-inputContainer", { error: field.error }])
            }, [
              field.type === "input" ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                type: "text",
                class: normalizeClass(["form-control caf-mb-6", { "caf-mr-md-5": !$props.opts.visible.allFields && index === 0 }]),
                placeholder: field.placeholder,
                "onUpdate:modelValue": ($event) => field.value = $event
              }, null, 10, _hoisted_12)), [
                [vModelText, field.value]
              ]) : createCommentVNode("", true),
              field.type === "select" ? withDirectives((openBlock(), createElementBlock("select", {
                key: 1,
                class: "form-control caf-mb-6",
                "onUpdate:modelValue": ($event) => field.value = $event,
                title: field.title
              }, [
                createBaseVNode("option", _hoisted_14, toDisplayString(field.options[0].label), 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(field.options.slice(
                  1,
                  field.options.length
                ), (item, key) => {
                  return openBlock(), createElementBlock("option", {
                    value: item.value,
                    key
                  }, toDisplayString(item.label), 9, _hoisted_15);
                }), 128))
              ], 8, _hoisted_13)), [
                [vModelSelect, field.value]
              ]) : createCommentVNode("", true),
              field.type === "textarea" ? withDirectives((openBlock(), createElementBlock("textarea", {
                key: 2,
                class: "ids__marketing-leadGenForm-message form-control",
                placeholder: field.placeholder,
                "onUpdate:modelValue": ($event) => field.value = $event
              }, null, 8, _hoisted_16)), [
                [vModelText, field.value]
              ]) : createCommentVNode("", true),
              field.error ? (openBlock(), createElementBlock("small", _hoisted_17, toDisplayString($setup.get(field, "validation.errorMsg", "Field cannot be empty")), 1)) : createCommentVNode("", true)
            ], 2);
          }), 128))
        ])) : createCommentVNode("", true)
      ]),
      $setup.get($props.opts, "content.cta") ? (openBlock(), createElementBlock("button", {
        key: 0,
        class: normalizeClass(["ids__marketing-leadGenForm-submit btn btn-primary btn-marketing caf-mt-9", $props.opts.content.cta.class]),
        type: "submit"
      }, toDisplayString($props.opts.content.cta.label), 3)) : createCommentVNode("", true)
    ], 32)) : (openBlock(), createElementBlock("div", _hoisted_18, [
      createVNode(_component_Icons, {
        size: "Sm",
        class: "caf-mr-2",
        "aria-hidden": "true"
      }, {
        default: withCtx(() => [
          createTextVNode(" check_circle ")
        ]),
        _: 1
      }),
      $setup.get($props.opts, "content.confirmation") ? (openBlock(), createElementBlock("p", {
        key: 0,
        innerHTML: _ctx.$sanitize($props.opts.content.confirmation)
      }, null, 8, _hoisted_19)) : (openBlock(), createElementBlock("span", _hoisted_20, " Thank you for your interest in partnering with " + toDisplayString($setup.current_site.name) + "! A member of our team will be in touch shortly. ", 1))
    ]))
  ], 6);
}
const LeadGenFormComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__docgenInfo = { "exportName": "default", "displayName": "LeadGenForm", "description": "", "tags": {}, "props": [{ "name": "opts", "type": { "name": "object" } }], "sourceFiles": ["/Users/naeemsmith/Work/catchafire/django_caf/frontend/src/_Blocks/Marketing/LeadGenForm/LeadGenForm.vue"] };
const LeadGenForm_stories = {
  title: "Blocks/Marketing"
};
const LeadGenForm = {
  args: {
    opts: {
      theme: "light",
      content: {
        cta: {
          label: "Request a demo",
          url: "/"
        },
        form: [{
          type: "input",
          name: "name",
          placeholder: "Name",
          value: "",
          required: true
        }, {
          type: "input",
          name: "company_name",
          placeholder: "Organization Name",
          value: "",
          required: true
        }, {
          type: "input",
          name: "email",
          placeholder: "Email",
          value: "",
          validation: {
            match: "",
            errorMsg: "Please enter a valid email"
          },
          required: true
        }, {
          type: "select",
          name: "company_type",
          options: [{
            label: "What are you interested in?"
          }, {
            label: "Option 1",
            value: 1
          }, {
            label: "Option 2",
            value: 2
          }, {
            label: "Option 3",
            value: 3
          }],
          value: "",
          required: true,
          title: "What are you interested in?"
        }, {
          type: "textarea",
          name: "registration_comment",
          placeholder: "Message",
          value: ""
        }],
        subtitle: "You can equip nonprofits in your community with high-quality operational support that delivers immediate impact and long-term resiliency. Contact us to learn more.",
        successText: "Thank you for your interest in partnering with Catchafire! A member of our team will be in touch shortly.",
        title: "Partner with us"
      },
      visible: {
        allFields: true
      },
      store: {
        submit: () => {
        },
        isSubmitting: () => {
        },
        isSubmitted: () => {
        }
      }
    }
  },
  render: (args) => ({
    components: {
      LeadGenFormComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<LeadGenFormComponent v-bind="args" />'
  })
};
LeadGenForm.parameters = {
  ...LeadGenForm.parameters,
  docs: {
    ...(_a = LeadGenForm.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    opts: {
      theme: 'light',
      content: {
        cta: {
          label: 'Request a demo',
          url: '/'
        },
        form: [{
          type: 'input',
          name: 'name',
          placeholder: 'Name',
          value: '',
          required: true
        }, {
          type: 'input',
          name: 'company_name',
          placeholder: 'Organization Name',
          value: '',
          required: true
        }, {
          type: 'input',
          name: 'email',
          placeholder: 'Email',
          value: '',
          validation: {
            match: '',
            errorMsg: 'Please enter a valid email'
          },
          required: true
        }, {
          type: 'select',
          name: 'company_type',
          options: [{
            label: 'What are you interested in?'
          }, {
            label: 'Option 1',
            value: 1
          }, {
            label: 'Option 2',
            value: 2
          }, {
            label: 'Option 3',
            value: 3
          }],
          value: '',
          required: true,
          title: 'What are you interested in?'
        }, {
          type: 'textarea',
          name: 'registration_comment',
          placeholder: 'Message',
          value: ''
        }],
        subtitle: 'You can equip nonprofits in your community with high-quality operational support that delivers immediate impact and long-term resiliency. Contact us to learn more.',
        successText: 'Thank you for your interest in partnering with Catchafire! A member of our team will be in touch shortly.',
        title: 'Partner with us'
      },
      visible: {
        allFields: true
      },
      store: {
        submit: () => {},
        isSubmitting: () => {},
        isSubmitted: () => {}
      }
    }
  },
  render: args => ({
    components: {
      LeadGenFormComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<LeadGenFormComponent v-bind="args" />'
  })
}`,
      ...(_c = (_b = LeadGenForm.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["LeadGenForm"];
export {
  LeadGenForm,
  __namedExportsOrder,
  LeadGenForm_stories as default
};
