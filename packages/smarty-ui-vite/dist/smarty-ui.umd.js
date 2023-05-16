!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).SmartyUI={},e.Vue)}(this,(function(e,n){"use strict";const t=n.defineComponent({name:"MyButton",render:()=>n.h("button",null,"my button")});const o=((e,n)=>{const t=e.__vccOpts||e;for(const[o,l]of n)t[o]=l;return t})({name:"SFCButton"},[["render",function(e,t,o,l,u,r){return n.openBlock(),n.createElementBlock("button",null,"SFC button")}]]),l=n.defineComponent({name:"JSXButton",render:()=>n.createVNode("button",null,[n.createTextVNode("JSX button")])}),u={size:{type:String,default:"medium"},color:{type:String,default:"blue"},round:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},icon:{type:String,default:""}},r=n.defineComponent({name:"SButton",props:u,setup(e,{slots:t}){var o;console.log("html",null==(o=document.querySelector("#app"))?void 0:o.innerHTML);const l={small:{x:"2",y:"1",text:"sm"},medium:{x:"3",y:"1.5",text:"base"},large:{x:"4",y:"2",text:"lg"}};return()=>n.createVNode("button",{class:`\n            py-${l[e.size].y}\n            px-${l[e.size].x}\n            ${e.round?"rounded-full":"rounded-lg"}\n            bg-${e.color}-${e.plain?"100":"500"}\n            hover:bg-${e.color}-400\n            border-${e.color}-${e.plain,"500"}\n            cursor-pointer\n            border-solid\n            text-${e.plain?e.color+"-500":"white-500"}\n            text-${l[e.size].text}\n            hover:text-white\n            transition duration-300 ease-in-out transform hover:scale-105\n            mx-1\n        `},[""!==e.icon?n.createVNode("i",{class:`i-ic-baseline-${e.icon} p-3`},null):"",t.default?t.default():""])}}),i={install(e){e.component(t.name,t),e.component(o.name,o),e.component(l.name,l),e.component(r.name,r)}};e.JSXButton=l,e.MyButton=t,e.SButton=r,e.SFCButton=o,e.default=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
//# sourceMappingURL=smarty-ui.umd.js.map