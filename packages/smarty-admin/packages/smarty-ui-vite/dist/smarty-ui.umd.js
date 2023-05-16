!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SmartyUI={},e.Vue)}(this,(function(e,t){"use strict";const n=t.defineComponent({name:"MyButton",render:()=>t.h("button",null,"my button")});const o=((e,t)=>{const n=e.__vccOpts||e;for(const[o,u]of t)n[o]=u;return n})({name:"SFCButton"},[["render",function(e,n,o,u,l,r){return t.openBlock(),t.createElementBlock("button",null,"SFC button")}]]),u=t.defineComponent({name:"JSXButton",render:()=>t.createVNode("button",null,[t.createTextVNode("JSX button")])}),l={size:{type:String,default:"medium"},color:{type:String,default:"blue"},round:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},icon:{type:String,default:""}},r=t.defineComponent({name:"SButton",props:l,setup(e,{slots:n}){const o={small:{x:"2",y:"1",text:"sm"},medium:{x:"3",y:"1.5",text:"base"},large:{x:"4",y:"2",text:"lg"}};return()=>t.createVNode("button",{class:`\n            py-${o[e.size].y}\n            px-${o[e.size].x}\n            ${e.round?"rounded-full":"rounded-lg"}\n            bg-${e.color}-${e.plain?"100":"500"}\n            hover:bg-${e.color}-400\n            border-${e.color}-${e.plain,"500"}\n            cursor-pointer\n            border-solid\n            text-${e.plain?e.color+"-500":"white-500"}\n            text-${o[e.size].text}\n            hover:text-white\n            transition duration-300 ease-in-out transform hover:scale-105\n            mx-1\n        `},[""!==e.icon?t.createVNode("i",{class:`i-ic-baseline-${e.icon} p-3`},null):"",n.default?n.default():""])}}),i={install(e){e.component(n.name,n),e.component(o.name,o),e.component(u.name,u),e.component(r.name,r)}};e.JSXButton=u,e.MyButton=n,e.SButton=r,e.SFCButton=o,e.default=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
//# sourceMappingURL=smarty-ui.umd.js.map