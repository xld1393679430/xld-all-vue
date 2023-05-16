import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const colors = ["red", "yellow", "blue"];
const icons = ['search', 'edit']

const safelist = [
    ...colors.map((item) => `bg-${item}-500`), 
    ...colors.map((item) => `hover:bg-${item}-700`),
    ...icons.map((item) => `i-ic-baseline-${item}`), 
];

export default () => {
  return Unocss({
    safelist,
    presets: [
      presetUno(), 
      presetAttributify(), 
      presetIcons()],
  });
};
