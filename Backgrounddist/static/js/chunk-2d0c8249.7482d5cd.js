(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8249"],{"542f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticStyle:{margin:"20px 0"}},[a("CategorySelect",{attrs:{isShowTable:t.isShowTable},on:{getCategoryId:t.getCategoryId}})],1),a("el-card",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowTable,expression:"isShowTable"}]},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",disabled:0===t.categoryList.length},on:{click:t.addAttr}},[t._v("添加属性")]),a("el-table",{staticStyle:{width:"90%",margin:"20px auto 0"},attrs:{border:"",data:t.categoryList}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center"}}),a("el-table-column",{attrs:{prop:"attrName",label:"属性名称",width:"120",align:"center"}}),a("el-table-column",{attrs:{prop:"address",label:"属性值列表",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;e.$index;return t._l(n.attrValueList,(function(e,n){return a("el-tag",{key:e.id,staticStyle:{"margin-left":"20px"},attrs:{type:"success"}},[t._v(" "+t._s(e.valueName)+" ")])}))}}])}),a("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;e.$index;return[a("el-button",{attrs:{type:"warning",icon:"el-icon-edit",size:"mini"},on:{click:function(e){return t.updateAttr(n)}}},[t._v("修改")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(e){return t.deleteAttr(n)}}},[t._v("删除")])]}}])})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowTable,expression:"!isShowTable"}]},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.attrInfo}},[a("el-form-item",{attrs:{label:"属性名"}},[a("el-input",{attrs:{placeholder:"请输入属性名"},model:{value:t.attrInfo.attrName,callback:function(e){t.$set(t.attrInfo,"attrName",e)},expression:"attrInfo.attrName"}})],1)],1),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"small",disabled:!t.attrInfo.attrName},on:{click:t.addAttrValue}},[t._v("添加属性")]),a("el-button",{attrs:{icon:"el-icon-close",size:"small"},on:{click:function(e){t.isShowTable=!0}}},[t._v("取消添加")]),a("el-table",{staticStyle:{width:"80%",margin:"20px auto"},attrs:{border:"",data:t.attrInfo.attrValueList}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center"}}),a("el-table-column",{attrs:{label:"属性值名称"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row,r=e.$index;return[n.flag?a("el-input",{ref:r,attrs:{placeholder:"请输入属性值名称",size:"small"},on:{blur:function(e){return t.showInput(n)}},nativeOn:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;n.flag=!1}},model:{value:n.valueName,callback:function(e){t.$set(n,"valueName",e)},expression:"row.valueName"}}):t._e(),n.flag?t._e():a("span",{staticStyle:{display:"block",weight:"80px"},on:{click:function(e){return t.toEdit(n,r)}}},[t._v(t._s(n.valueName))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row,r=e.$index;return[a("el-popconfirm",{attrs:{title:"确定删除"+n.valueName+"吗?"},on:{onConfirm:function(e){return t.deleteAttrValue(r)}}},[a("el-button",{attrs:{slot:"reference",type:"danger",icon:"el-icon-delete",size:"mini"},slot:"reference"})],1)]}}])})],1),a("el-button",{attrs:{type:"primary",size:"small",disabled:0===t.attrInfo.attrValueList.length},on:{click:t.addOrUpadteAttr}},[t._v("确定")]),a("el-button",{attrs:{size:"small"},on:{click:function(e){t.isShowTable=!0}}},[t._v("取消")])],1)])],1)},r=[],l=a("c7eb"),i=a("1da1"),o=(a("d3b7"),a("159b"),a("498a"),a("a434"),a("4de4"),a("0644")),s=a.n(o),c=(a("2d7c"),{name:"Attr",data:function(){return{categoryId:{},categoryList:[],isShowTable:!0,attrInfo:{attrName:"",attrValueList:[],categoryId:0,categoryLevel:3}}},methods:{getCategoryId:function(t){var e=this;return Object(i["a"])(Object(l["a"])().mark((function a(){var n;return Object(l["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.categoryId=t,a.next=3,e.$API.attr.reqAttrInfoList(t);case 3:n=a.sent,200===n.code&&(e.categoryList=n.data);case 5:case"end":return a.stop()}}),a)})))()},addAttrValue:function(){var t=this;this.attrInfo.attrValueList.push({attrId:this.attrInfo.id||void 0,valueName:"",flag:!0}),this.$nextTick((function(){t.$refs[t.attrInfo.attrValueList.length-1].focuse()}))},addAttr:function(){this.isShowTable=!1,this.attrInfo={attrName:"",attrValueList:[],categoryId:this.categoryId.category3Id,categoryLevel:3}},updateAttr:function(t){var e=this;this.isShowTable=!1,this.attrInfo=s()(t),this.attrInfo.attrValueList.forEach((function(t){e.$set(t,"flag",flag)}))},showInput:function(t){if(""===t.valueName.trim())this.$message("请输入正确的值！");else{var e=this.attrInfo.attrValueList.some((function(e){if(t!=e)return t.valueName==e.valueName}));e?this.$message("请勿输入重复值！"):t.flag=!1}},toEdit:function(t,e){var a=this;t.flag=!0,this.$nextTick((function(){a.$refs[e].focus()}))},deleteAttrValue:function(t){this.attrInfo.attrValueList.splice(t,1)},addOrUpadteAttr:function(){var t=this;return Object(i["a"])(Object(l["a"])().mark((function e(){return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.attrInfo.attrValueList=t.attrInfo.attrValueList.filter((function(t){if(""!=t.valueName)return delete t.flag,!0})),e.prev=1,e.next=4,t.$API.attr.reqSaveAttrInfo(t.attrInfo);case 4:t.$message({type:"success",message:"保存成功"}),t.getCategoryId(t.categoryId),t.isShowTable=!0,e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}}),u=c,d=a("2877"),f=Object(d["a"])(u,n,r,!1,null,null,null);e["default"]=f.exports}}]);