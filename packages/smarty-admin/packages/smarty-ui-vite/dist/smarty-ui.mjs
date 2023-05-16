import { defineComponent, h, openBlock, createElementBlock, createVNode, createTextVNode } from "vue";
const MyButton = defineComponent({
  name: "MyButton",
  render() {
    return h("button", null, "my button");
  }
});
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "SFCButton"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFC button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX button")]);
  }
});
const __uno = "";
const props = {
  size: {
    type: String,
    default: "medium"
  },
  color: {
    type: String,
    default: "blue"
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ""
  }
};
const SButton = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("button", {
      "class": `
            py-${size[props2.size].y}
            px-${size[props2.size].x}
            ${props2.round ? "rounded-full" : "rounded-lg"}
            bg-${props2.color}-${props2.plain ? "100" : "500"}
            hover:bg-${props2.color}-400
            border-${props2.color}-${props2.plain ? "500" : "500"}
            cursor-pointer
            border-solid
            text-${props2.plain ? props2.color + "-500" : "white-500"}
            text-${size[props2.size].text}
            hover:text-white
            transition duration-300 ease-in-out transform hover:scale-105
            mx-1
        `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SButton.name, SButton);
  }
};
export {
  JSXButton,
  MyButton,
  SButton,
  SFCButton,
  entry as default
};
//# sourceMappingURL=smarty-ui.mjs.map
