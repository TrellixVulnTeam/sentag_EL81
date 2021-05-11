webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.url */ \"./node_modules/core-js/modules/web.url.js\");\n/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var _components_AnnotationPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AnnotationPage */ \"./src/components/AnnotationPage.vue\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/styles.scss */ \"./src/assets/styles.scss\");\n/* harmony import */ var _assets_styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"App\",\n  data: function data() {\n    return {\n      currentPage: \"annotator\",\n      title: \"\",\n      oldtm: \"\"\n    };\n  },\n  components: {\n    AnnotationPage: _components_AnnotationPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  methods: Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__[\"mapMutations\"])([\"setInputSentences\", \"addClass\"])),\n  created: function created() {\n    var _this = this;\n\n    //ottengo il numero sentenza dall'url\n    var url = new URL(location.href)['pathname'];\n    var numero_sentenza = url[url.length - 2];\n    axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(\"/api/\" + numero_sentenza).then(function (res) {\n      //la risposta contiene:\n      //le parole della sentenza\n      _this.setInputSentences(res.data['testo_iniziale']); //il titolo della sentenza\n\n\n      _this.title = res.data['nome']; //i tag da parsare, perché passati come xsd string\n\n      var xml = res.data['tags']; //console.log(xml)\n\n      var parser = new DOMParser();\n      var xmlDoc = parser.parseFromString(xml, \"text/xml\");\n      var elements = xmlDoc.evaluate(\"//xs:element\", xmlDoc, function (prefix) {\n        if (prefix === 'xs') {\n          return 'http://www.w3.org/2001/XMLSchema';\n        } else {\n          return null;\n        }\n      }, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);\n\n      for (var i = 1; i < elements.snapshotLength; i++) {\n        var element = elements.snapshotItem(i); //console.log(element);\n\n        var name = element.getAttribute('name'); //console.log(name);\n        //console.log('//xs:element[@name=\\''+name+'\\']/xs:complexType/xs:attribute')              \n\n        var attributes = xmlDoc.evaluate('//xs:element[@name=\\'' + name + '\\']/xs:complexType/xs:attribute', xmlDoc, function (prefix) {\n          if (prefix === 'xs') {\n            return 'http://www.w3.org/2001/XMLSchema';\n          } else {\n            return null;\n          }\n        }, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);\n\n        if (attributes.snapshotLength == 0) {\n          attributes = xmlDoc.evaluate('//xs:element[@name=\\'' + name + '\\']/xs:complexType/xs:simpleContent/xs:extension/xs:attribute', xmlDoc, function (prefix) {\n            if (prefix === 'xs') {\n              return 'http://www.w3.org/2001/XMLSchema';\n            } else {\n              return null;\n            }\n          }, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);\n        }\n\n        var attrs = [];\n\n        for (var _i = 0; _i < attributes.snapshotLength; _i++) {\n          var attribute = attributes.snapshotItem(_i);\n          var attr = attribute.getAttribute('name'); //console.log(attr);\n\n          attrs.push(attr);\n        }\n\n        _this.addClass([name, attrs]);\n\n        element.setAttribute('name', 'CONSUMED'); //console.log(\"\\n\");\n      }\n    }).catch(function (err) {\n      return alert(err);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzNkZmQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxBbm5vdGF0aW9uUGFnZSA6dGl0bGU9XCJ0aXRsZVwiIDpvbGR0bT1cIlwiLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFubm90YXRpb25QYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvQW5ub3RhdGlvblBhZ2VcIjtcbmltcG9ydCB7IG1hcE11dGF0aW9ucyB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkFwcFwiLFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFBhZ2U6IFwiYW5ub3RhdG9yXCIsXG4gICAgICB0aXRsZTogXCJcIixcbiAgICAgIG9sZHRtOiBcIlwiXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEFubm90YXRpb25QYWdlLFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwTXV0YXRpb25zKFtcInNldElucHV0U2VudGVuY2VzXCIsXCJhZGRDbGFzc1wiXSksXG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgLy9vdHRlbmdvIGlsIG51bWVybyBzZW50ZW56YSBkYWxsJ3VybFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZilbJ3BhdGhuYW1lJ107XG4gICAgY29uc3QgbnVtZXJvX3NlbnRlbnphID0gdXJsW3VybC5sZW5ndGgtMl1cbiAgICBheGlvc1xuICAgICAgICAuZ2V0KFwiL2FwaS9cIitudW1lcm9fc2VudGVuemEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAvL2xhIHJpc3Bvc3RhIGNvbnRpZW5lOlxuICAgICAgICAgIC8vbGUgcGFyb2xlIGRlbGxhIHNlbnRlbnphXG4gICAgICAgICAgdGhpcy5zZXRJbnB1dFNlbnRlbmNlcyhyZXMuZGF0YVsndGVzdG9faW5pemlhbGUnXSk7XG4gICAgICAgICAgLy9pbCB0aXRvbG8gZGVsbGEgc2VudGVuemFcbiAgICAgICAgICB0aGlzLnRpdGxlID0gcmVzLmRhdGFbJ25vbWUnXTtcblxuICAgICAgICAgIC8vaSB0YWcgZGEgcGFyc2FyZSwgcGVyY2jDqSBwYXNzYXRpIGNvbWUgeHNkIHN0cmluZ1xuICAgICAgICAgIGxldCB4bWwgPSByZXMuZGF0YVsndGFncyddXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh4bWwpXG4gICAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgICBsZXQgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWwsXCJ0ZXh0L3htbFwiKTtcbiAgICAgICAgICBsZXQgZWxlbWVudHMgPSB4bWxEb2MuZXZhbHVhdGUoXCIvL3hzOmVsZW1lbnRcIiwgeG1sRG9jLCBcbiAgICAgICAgICAgIGZ1bmN0aW9uKHByZWZpeCkgeyBcbiAgICAgICAgICAgICAgaWYgKHByZWZpeCA9PT0gJ3hzJykgeyBcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hJzsgXG4gICAgICAgICAgICAgIH0gZWxzZSB7IFxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyBcbiAgICAgICAgICAgICAgICB9fSxYUGF0aFJlc3VsdC5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRSxudWxsKTtcblxuICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBlbGVtZW50cy5zbmFwc2hvdExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzLnNuYXBzaG90SXRlbShpKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG5hbWUpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnLy94czplbGVtZW50W0BuYW1lPVxcJycrbmFtZSsnXFwnXS94czpjb21wbGV4VHlwZS94czphdHRyaWJ1dGUnKSAgICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IHhtbERvYy5ldmFsdWF0ZSgnLy94czplbGVtZW50W0BuYW1lPVxcJycrbmFtZSsnXFwnXS94czpjb21wbGV4VHlwZS94czphdHRyaWJ1dGUnLCB4bWxEb2MsIFxuICAgICAgICAgICAgZnVuY3Rpb24ocHJlZml4KSB7IFxuICAgICAgICAgICAgICBpZiAocHJlZml4ID09PSAneHMnKSB7IFxuICAgICAgICAgICAgICAgIHJldHVybiAnaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEnO1xuICAgICAgICAgICAgICB9IGVsc2UgeyBcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxYUGF0aFJlc3VsdC5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRSxudWxsKTtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnNuYXBzaG90TGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IHhtbERvYy5ldmFsdWF0ZSgnLy94czplbGVtZW50W0BuYW1lPVxcJycrbmFtZSsnXFwnXS94czpjb21wbGV4VHlwZS94czpzaW1wbGVDb250ZW50L3hzOmV4dGVuc2lvbi94czphdHRyaWJ1dGUnLCB4bWxEb2MsIFxuICAgICAgICAgICAgICBmdW5jdGlvbihwcmVmaXgpIHsgXG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCA9PT0gJ3hzJykgeyBcbiAgICAgICAgICAgICAgICAgIHJldHVybiAnaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEnOyBcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyBcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sWFBhdGhSZXN1bHQuT1JERVJFRF9OT0RFX1NOQVBTSE9UX1RZUEUsbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYXR0cnMgPSBbXVxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMuc25hcHNob3RMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gYXR0cmlidXRlcy5zbmFwc2hvdEl0ZW0oaSk7IFxuICAgICAgICAgICAgICBsZXQgYXR0ciA9IGF0dHJpYnV0ZS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhdHRyKTtcbiAgICAgICAgICAgICAgYXR0cnMucHVzaChhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoW25hbWUsYXR0cnNdKVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdDT05TVU1FRCcpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJcXG5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBhbGVydChlcnIpKTtcbiAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQS9FQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&bindings={}":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=template&id=7ba5bd90&bindings={} ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_AnnotationPage = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"AnnotationPage\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_AnnotationPage, {\n    title: _ctx.title,\n    oldtm: \"\"\n  }, null, 8\n  /* PROPS */\n  , [\"title\", \"oldtm\"])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCZiaW5kaW5ncz17fS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzNkZmQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxBbm5vdGF0aW9uUGFnZSA6dGl0bGU9XCJ0aXRsZVwiIDpvbGR0bT1cIlwiLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFubm90YXRpb25QYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvQW5ub3RhdGlvblBhZ2VcIjtcbmltcG9ydCB7IG1hcE11dGF0aW9ucyB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuaW1wb3J0IFwiLi9hc3NldHMvc3R5bGVzLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkFwcFwiLFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFBhZ2U6IFwiYW5ub3RhdG9yXCIsXG4gICAgICB0aXRsZTogXCJcIixcbiAgICAgIG9sZHRtOiBcIlwiXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEFubm90YXRpb25QYWdlLFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwTXV0YXRpb25zKFtcInNldElucHV0U2VudGVuY2VzXCIsXCJhZGRDbGFzc1wiXSksXG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgLy9vdHRlbmdvIGlsIG51bWVybyBzZW50ZW56YSBkYWxsJ3VybFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZilbJ3BhdGhuYW1lJ107XG4gICAgY29uc3QgbnVtZXJvX3NlbnRlbnphID0gdXJsW3VybC5sZW5ndGgtMl1cbiAgICBheGlvc1xuICAgICAgICAuZ2V0KFwiL2FwaS9cIitudW1lcm9fc2VudGVuemEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAvL2xhIHJpc3Bvc3RhIGNvbnRpZW5lOlxuICAgICAgICAgIC8vbGUgcGFyb2xlIGRlbGxhIHNlbnRlbnphXG4gICAgICAgICAgdGhpcy5zZXRJbnB1dFNlbnRlbmNlcyhyZXMuZGF0YVsndGVzdG9faW5pemlhbGUnXSk7XG4gICAgICAgICAgLy9pbCB0aXRvbG8gZGVsbGEgc2VudGVuemFcbiAgICAgICAgICB0aGlzLnRpdGxlID0gcmVzLmRhdGFbJ25vbWUnXTtcblxuICAgICAgICAgIC8vaSB0YWcgZGEgcGFyc2FyZSwgcGVyY2jDqSBwYXNzYXRpIGNvbWUgeHNkIHN0cmluZ1xuICAgICAgICAgIGxldCB4bWwgPSByZXMuZGF0YVsndGFncyddXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh4bWwpXG4gICAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgICBsZXQgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWwsXCJ0ZXh0L3htbFwiKTtcbiAgICAgICAgICBsZXQgZWxlbWVudHMgPSB4bWxEb2MuZXZhbHVhdGUoXCIvL3hzOmVsZW1lbnRcIiwgeG1sRG9jLCBcbiAgICAgICAgICAgIGZ1bmN0aW9uKHByZWZpeCkgeyBcbiAgICAgICAgICAgICAgaWYgKHByZWZpeCA9PT0gJ3hzJykgeyBcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hJzsgXG4gICAgICAgICAgICAgIH0gZWxzZSB7IFxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyBcbiAgICAgICAgICAgICAgICB9fSxYUGF0aFJlc3VsdC5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRSxudWxsKTtcblxuICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBlbGVtZW50cy5zbmFwc2hvdExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzLnNuYXBzaG90SXRlbShpKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG5hbWUpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnLy94czplbGVtZW50W0BuYW1lPVxcJycrbmFtZSsnXFwnXS94czpjb21wbGV4VHlwZS94czphdHRyaWJ1dGUnKSAgICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IHhtbERvYy5ldmFsdWF0ZSgnLy94czplbGVtZW50W0BuYW1lPVxcJycrbmFtZSsnXFwnXS94czpjb21wbGV4VHlwZS94czphdHRyaWJ1dGUnLCB4bWxEb2MsIFxuICAgICAgICAgICAgZnVuY3Rpb24ocHJlZml4KSB7IFxuICAgICAgICAgICAgICBpZiAocHJlZml4ID09PSAneHMnKSB7IFxuICAgICAgICAgICAgICAgIHJldHVybiAnaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEnO1xuICAgICAgICAgICAgICB9IGVsc2UgeyBcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxYUGF0aFJlc3VsdC5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRSxudWxsKTtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnNuYXBzaG90TGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IHhtbERvYy5ldmFsdWF0ZSgnLy94czplbGVtZW50W0BuYW1lPVxcJycrbmFtZSsnXFwnXS94czpjb21wbGV4VHlwZS94czpzaW1wbGVDb250ZW50L3hzOmV4dGVuc2lvbi94czphdHRyaWJ1dGUnLCB4bWxEb2MsIFxuICAgICAgICAgICAgICBmdW5jdGlvbihwcmVmaXgpIHsgXG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCA9PT0gJ3hzJykgeyBcbiAgICAgICAgICAgICAgICAgIHJldHVybiAnaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEnOyBcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyBcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sWFBhdGhSZXN1bHQuT1JERVJFRF9OT0RFX1NOQVBTSE9UX1RZUEUsbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYXR0cnMgPSBbXVxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMuc25hcHNob3RMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gYXR0cmlidXRlcy5zbmFwc2hvdEl0ZW0oaSk7IFxuICAgICAgICAgICAgICBsZXQgYXR0ciA9IGF0dHJpYnV0ZS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhdHRyKTtcbiAgICAgICAgICAgICAgYXR0cnMucHVzaChhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoW25hbWUsYXR0cnNdKVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdDT05TVU1FRCcpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJcXG5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBhbGVydChlcnIpKTtcbiAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFBQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&bindings={}\n");

/***/ })

})