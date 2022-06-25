(window.webpackJsonp=window.webpackJsonp||[]).push([["SysEmployeeContent"],{"32e7":function(e,t,l){"use strict";l.r(t);var i,a=l("50da"),o=l("2e90"),d=l("e719"),r=l("3617"),n=l("600f"),m=l("402f");let c=class extends m.e{get title(){return this.operation===m.i.CREATE?"添加人员信息":"编辑人员信息"}created(){super.created()}getBaseService(){return this.sysEmployeeService}checkEmployeeName(){let e=this.editedItem.employeeName;e&&this.sysEmployeeService.fetchByEmployeeName(e).then(e=>{let t=e.data;if(t&&t.employeeId){this.$refs.observer.setErrors({employeeName:["该人员已存在"]})}})}};Object(a.a)([d.Inject,Object(a.b)("design:type","function"==typeof(i=void 0!==n.j&&n.j)?i:Object)],c.prototype,"sysEmployeeService",void 0),c=Object(a.a)([Object(o.a)({components:{HContentPanel:r.e,HTableItemEditor:r.r,HDictionarySelect:r.h}})],c);var s=c,u=l("ba34"),p=l("eb4c"),b=l.n(p),y=l("81fa"),f=Object(u.a)(s,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("h-content-panel",{attrs:{title:e.title,overlay:e.overlay}},[l("validation-observer",{ref:"observer"},[l("h-table-item-editor",{attrs:{overlay:e.overlay,column:""},on:{submit:function(t){return e.saveOrUpdate()}},scopedSlots:e._u([{key:"primary",fn:function(){return[l("validation-provider",{attrs:{vid:"employeeName",name:"人员姓名",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[l("v-text-field",{attrs:{outlined:"",clearable:"",label:"人员姓名 * ",placeholder:"人员姓名","error-messages":i,required:""},on:{blur:e.checkEmployeeName},model:{value:e.editedItem.employeeName,callback:function(t){e.$set(e.editedItem,"employeeName",t)},expression:"editedItem.employeeName"}})]}}])}),l("v-text-field",{attrs:{outlined:"",clearable:"",label:"人员编号",placeholder:"请输入人员编号"},model:{value:e.editedItem.employeeNo,callback:function(t){e.$set(e.editedItem,"employeeNo",t)},expression:"editedItem.employeeNo"}}),l("h-dictionary-select",{attrs:{dictionary:"gender",label:"性别"},model:{value:e.editedItem.gender,callback:function(t){e.$set(e.editedItem,"gender",t)},expression:"editedItem.gender"}}),l("h-dictionary-select",{attrs:{dictionary:"identity",label:"身份"},model:{value:e.editedItem.identity,callback:function(t){e.$set(e.editedItem,"identity",t)},expression:"editedItem.identity"}}),l("v-text-field",{attrs:{outlined:"",clearable:"",label:"电子邮件",placeholder:"请输入电子邮件"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}}),l("v-text-field",{attrs:{outlined:"",clearable:"",label:"PKI电子邮件",placeholder:"请输入PKI电子邮件"},model:{value:e.editedItem.pkiEmail,callback:function(t){e.$set(e.editedItem,"pkiEmail",t)},expression:"editedItem.pkiEmail"}}),l("v-text-field",{attrs:{outlined:"",clearable:"",label:"手机号码",placeholder:"请输入手机号码"},model:{value:e.editedItem.mobilePhoneNumber,callback:function(t){e.$set(e.editedItem,"mobilePhoneNumber",t)},expression:"editedItem.mobilePhoneNumber"}}),l("v-text-field",{attrs:{outlined:"",clearable:"",label:"办公电话",placeholder:"请输入办公电话"},model:{value:e.editedItem.officePhoneNumber,callback:function(t){e.$set(e.editedItem,"officePhoneNumber",t)},expression:"editedItem.officePhoneNumber"}})]},proxy:!0}]),model:{value:e.editedItem,callback:function(t){e.editedItem=t},expression:"editedItem"}})],1)],1)}),[],!1,null,null,null);t.default=f.exports;b()(f,{VTextField:y.a})}}]);