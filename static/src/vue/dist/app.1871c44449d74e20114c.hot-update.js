webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/LoadTextFile.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/LoadTextFile.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"LoadTextFile\",\n  emits: [\"file-loaded\"],\n  methods: Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapMutations\"])([\"setInputSentences\"])), {}, {\n    onFileSelected: function onFileSelected(e) {\n      var _this = this;\n\n      var files = e.target.files;\n      if (!files.length) return;\n      var reader = new FileReader();\n      reader.addEventListener(\"load\", function (event) {\n        _this.setInputSentences(event.target.result);\n\n        _this.$emit(\"file-loaded\");\n      });\n      console.log(event);\n      reader.readAsText(files[0]);\n    }\n  })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Mb2FkVGV4dEZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZFRleHRGaWxlLnZ1ZT8wZDE5Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgPGRpdiBjbGFzcz1cImZpbGUgaXMtY2VudGVyZWQgaXMtcHJpbWFyeSBoYXMtbmFtZSBpcy1ib3hlZCBteS00XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJmaWxlLWxhYmVsXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzPVwiZmlsZS1pbnB1dFwiXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIG5hbWU9XCJ0ZXh0ZmlsZVwiXG4gICAgICAgICAgYWNjZXB0PVwiLnR4dFwiXG4gICAgICAgICAgQGNoYW5nZT1cIm9uRmlsZVNlbGVjdGVkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxlLWN0YVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsZS1pY29uXCI+XG4gICAgICAgICAgICA8Zm9udC1hd2Vzb21lLWljb24gaWNvbj1cImZpbGUtYWx0XCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxlLWxhYmVsXCI+XG4gICAgICAgICAgICBTZWxlY3QgZmlsZSB0byBzdGFydCBhbm5vdGF0aW5nXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBNdXRhdGlvbnMgfSBmcm9tIFwidnVleFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTG9hZFRleHRGaWxlXCIsXG4gIGVtaXRzOiBbXCJmaWxlLWxvYWRlZFwiXSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcE11dGF0aW9ucyhbXCJzZXRJbnB1dFNlbnRlbmNlc1wiXSksXG4gICAgb25GaWxlU2VsZWN0ZWQoZSkge1xuICAgICAgbGV0IGZpbGVzID0gZS50YXJnZXQuZmlsZXM7XG4gICAgICBpZiAoIWZpbGVzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRJbnB1dFNlbnRlbmNlcyhldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgdGhpcy4kZW1pdChcImZpbGUtbG9hZGVkXCIpO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlc1swXSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6Ijs7OztBQXlCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/LoadTextFile.vue?vue&type=script&lang=js\n");

/***/ })

})