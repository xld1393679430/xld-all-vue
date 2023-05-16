import { defineComponent, PropType } from "vue";
import "uno.css";

export type IColor = "red" | "yellow" | "blue";

const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  icon: String
};

export default defineComponent({
  name: "TsxButton",
  props,
  setup(props, { slots }) {
    console.log(props);

    return () => (
      <button
        class={`
            py-2
            px-4
            shadow-md
            text-white
            bg-${props.color}-500
            border-none
            rounded-lg
            font-semibold
            cursor-pointer
            hover:bg-${props.color}-700
        `}
      >
        {props.icon ? <i class={`i-ic-baseline-${props.icon} p-2`}></i> : null}
        {slots?.default ? slots?.default() : "默认"}
      </button>
    );
  },
});
