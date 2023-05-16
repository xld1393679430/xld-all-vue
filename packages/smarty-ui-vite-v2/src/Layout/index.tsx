import { defineComponent } from "vue";
import TsxButton from "../button/tsxButton";

export default defineComponent({
  name: "Layout",
  render() {
    return (
      <div>
        <div>
          <TsxButton color='yellow'>11</TsxButton>
        </div>
        <div>
          <TsxButton icon="search">22</TsxButton>
        </div>
      </div>
    );
  },
});
