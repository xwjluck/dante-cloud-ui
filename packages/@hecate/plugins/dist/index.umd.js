!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("vue"),require("vuetify/lib/framework"),require("vue-i18n"),require("roboto-fontface/css/roboto/roboto-fontface.css"),require("@mdi/font/css/materialdesignicons.css"),require("material-design-icons-iconfont/dist/material-design-icons.css"),require("@hecate/utils"),require("vee-validate"),require("vee-validate/dist/rules"),require("vuedraggable")):"function"==typeof define&&define.amd?define(["exports","vue","vuetify/lib/framework","vue-i18n","roboto-fontface/css/roboto/roboto-fontface.css","@mdi/font/css/materialdesignicons.css","material-design-icons-iconfont/dist/material-design-icons.css","@hecate/utils","vee-validate","vee-validate/dist/rules","vuedraggable"],i):i((e="undefined"!=typeof globalThis?globalThis:e||self).main={},e.Vue,e.Vuetify,e.VueI18n,null,null,null,e.utils,e.VeeValidate,e.Rules,e.Draggable)}(this,(function(e,i,t,l,a,n,r,o,s,d,f){"use strict";function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function _(e){if(e&&e.__esModule)return e;var i=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var l=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,l.get?l:{enumerable:!0,get:function(){return e[t]}})}})),i.default=e,Object.freeze(i)}var c=u(i),g=u(t),m=u(l),b=_(d),v=u(f);c.default.use(g.default),c.default.use(m.default);var p=o.localize.en,h=o.localize.zh,y=new m.default({locale:"zh",messages:{zh:h,en:p}}),q=new g.default({lang:{t:function(e){for(var i=[],t=arguments.length-1;t-- >0;)i[t]=arguments[t+1];return y.t(e,i).toString()}}}),O={code:"zh_CN",messages:{alpha:"{_field_} 只能包含字母",alpha_dash:"{_field_} 只能包含字母数字字符、破折号和下划线",alpha_num:"{_field_}只能包含字母数字字符",alpha_spaces:"{_field_}只能包含字母字符和空格",between:"{_field_}必须在{min}与{max}之间",confirmed:"{_field_}不能和{target}匹配",digits:"{_field_}必须是数字，且精确到{length}位数",dimensions:"{_field_}必须在{width}像素与{height}像素之间",email:"{_field_} 不是一个有效的邮箱地址",excluded:"{_field_}不是一个有效值",ext:"{_field_}不是一个有效的文件",image:"{_field_}不是一张有效的图片",oneOf:"{_field_}不是一个有效值",integer:"{_field_}必须是整数",length:"{_field_}长度必须为{length}",max:"{_field_}不能超过{length}个字符",max_value:"{_field_}必须小于或等于{max}",mimes:"{_field_}不是一个有效的文件类型",min:"{_field_}必须至少有{length}个字符",min_value:"{_field_}必须大于或等于{min}",numeric:"{_field_}只能包含数字字符",regex:"{_field_}格式无效",required:"{_field_} 不能为空",required_if:"{_field_} 是必须的",size:"{_field_}必须小于{size}KB",double:"{_field_}字段必须为有效的小数"}},V=["dimensions","oneOf","required_if"];s.setInteractionMode("eager");var x=Object.keys(b).map((function(e){if(!V.includes(e)){var i=O.messages[e];return s.extend(e,Object.assign({},b[e],{message:i})),{name:o.library.lodash.startCase(e),type:e,message:i}}}));s.localize("zh_CN",O);var z={install:function(e){e.prototype.$rules=x,e.component("ValidationProvider",s.ValidationProvider),e.component("ValidationObserver",s.ValidationObserver)}},j={install:function(e){e.prototype.$lib=o.library,e.prototype.$notify=o.library._notify,e.component("draggable",v.default)}};e.HecatePlugins=j,e.VeeValidate=z,e.Vuetify=q,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map