!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue"),require("tslib"),require("vue-property-decorator"),require("vue-runtime-helpers/dist/normalize-component.mjs")):"function"==typeof define&&define.amd?define(["exports","vue","tslib","vue-property-decorator","vue-runtime-helpers/dist/normalize-component.mjs"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).main={},e.Vue,e.tslib,e.vuePropertyDecorator,e.__vue_normalize__)}(this,(function(e,t,o,n,r){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=i(r),d=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.handleClick=function(){},t}(n.Vue);o.__decorate([n.Prop({type:Boolean,default:!1}),o.__metadata("design:type",Boolean)],d.prototype,"icon",void 0),o.__decorate([n.Prop({type:Boolean,default:!1}),o.__metadata("design:type",Boolean)],d.prototype,"disabled",void 0),o.__decorate([n.Prop(String),o.__metadata("design:type",String)],d.prototype,"color",void 0),o.__decorate([n.Prop(String),o.__metadata("design:type",String)],d.prototype,"iconName",void 0),o.__decorate([n.Prop(String),o.__metadata("design:type",String)],d.prototype,"tooltip",void 0),o.__decorate([n.Prop(String),o.__metadata("design:type",String)],d.prototype,"text",void 0),o.__decorate([n.Prop(String),o.__metadata("design:type",String)],d.prototype,"href",void 0),o.__decorate([n.Emit("click"),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[]),o.__metadata("design:returntype",void 0)],d.prototype,"handleClick",null);var p=d=o.__decorate([n.Component],d),c=a.default({render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[e.icon?o("v-btn",e._g({attrs:{color:e.color,icon:e.icon,href:e.href,disabled:e.disabled},on:{click:function(t){return e.handleClick()}}},n),[o("v-icon",[e._v(e._s(e.iconName))])],1):o("v-btn",e._g({attrs:{color:e.color,href:e.href,disabled:e.disabled},on:{click:function(t){return e.handleClick()}}},n),[e._v("\n            "+e._s(e.text)+"\n        ")])]}}])},[e._v(" "),o("span",[e._v(e._s(e.tooltip))])])},staticRenderFns:[]},undefined,p,undefined,false,undefined,!1,void 0,void 0,void 0),_={install:function(e){e.component("HButton",c)}};e.HButtonComponent=_,e.default=c,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map