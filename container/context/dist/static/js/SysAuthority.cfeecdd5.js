(window.webpackJsonp=window.webpackJsonp||[]).push([["SysAuthority"],{3805:function(e,t,n){"use strict";n.r(t);var a,r=n("50da"),i=n("2e90"),s=n("e719"),o=n("3617"),u=n("600f"),l=n("402f");let c=class extends l.f{constructor(){super(...arguments),this.pageNumber=1,this.tableTitle="权限平台信息",this.columnSlots=["actions","status","reserved"],this.tableHeaders=[{text:"权限名称",align:"center",value:"authorityName"},{text:"权限代码",align:"center",value:"authorityCode"},{text:"权限类型",align:"center",value:"authorityType"},{text:"Request Method",align:"center",value:"requestMethod"},{text:"服务ID",align:"center",value:"serviceId"},{text:"保留数据",align:"center",value:"reserved"},{text:"状态",align:"center",value:"status"},{text:"操作",align:"center",value:"actions",sortable:!1}]}onPageNumberChanged(e){this.findItemsByPage(e)}pagination(e){this.pageNumber=e}mounted(){super.mounted()}getBaseService(){return this.sysAuthorityService}getItemKey(){return"authorityId"}getDomainName(){return"SysAuthority"}};Object(r.a)([s.Inject,Object(r.b)("design:type","function"==typeof(a=void 0!==u.g&&u.g)?a:Object)],c.prototype,"sysAuthorityService",void 0),Object(r.a)([Object(i.g)("pageNumber"),Object(r.b)("design:type",Function),Object(r.b)("design:paramtypes",[Number]),Object(r.b)("design:returntype",void 0)],c.prototype,"onPageNumberChanged",null),c=Object(r.a)([Object(i.a)({components:{HContainer:o.d,HActionButton:o.a,HTableItemChip:o.q,HTableItemStatus:o.s}})],c);var b=c,m=n("ba34"),d=n("eb4c"),g=n.n(d),p=n("bc77"),y=Object(m.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h-container",[n("h-table",{attrs:{"show-select":"","external-pagination":"","table-headers":e.tableHeaders,"table-items":e.tableItems,"page-size":e.pageSize,"total-items":e.totalItems,"total-pages":e.totalPages,"table-title":e.tableTitle,"table-loading":e.tableLoading,"skeleton-loading":e.skeletonLoading,"column-slots":e.columnSlots,"item-key":e.getItemKey()},on:{pagination:function(t){return e.pagination(t)}},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-btn",{staticClass:"mb-2 mr-2",attrs:{color:"primary",dark:""},on:{click:function(t){return e.createItem()}}},[e._v("添加权限")])]},proxy:!0},{key:"item.status",fn:function(e){var t=e.item;return[n("h-table-item-status",{attrs:{type:t.status}})]}},{key:"item.reserved",fn:function(e){var t=e.item;return[n("h-table-item-chip",{attrs:{status:t.reserved}})]}},{key:"item.actions",fn:function(t){var a=t.item;return[n("h-action-button",{attrs:{edit:"",remove:!a.reserved},on:{edit:function(t){return e.editItem(a)},remove:function(t){return e.deleteItem(a)}}})]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=y.exports;g()(y,{VBtn:p.a})}}]);