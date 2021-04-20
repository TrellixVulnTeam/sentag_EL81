webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/AnnotationPage.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ \"./node_modules/core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../axios */ \"./src/axios.js\");\n/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Token */ \"./src/components/Token.vue\");\n/* harmony import */ var _TokenBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TokenBlock */ \"./src/components/TokenBlock.vue\");\n/* harmony import */ var _AnnotationSidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AnnotationSidebar */ \"./src/components/AnnotationSidebar.vue\");\n/* harmony import */ var _ClassesBlock_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ClassesBlock.vue */ \"./src/components/ClassesBlock.vue\");\n/* harmony import */ var _token_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./token-manager */ \"./src/components/token-manager.js\");\n/* harmony import */ var _Export_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Export.vue */ \"./src/components/Export.vue\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"AnnotationPage\",\n  data: function data() {\n    return {\n      tm: new _token_manager__WEBPACK_IMPORTED_MODULE_11__[\"default\"]([]),\n      currentSentence: {},\n      currentIndex: 0,\n      redone: \"\"\n    };\n  },\n  components: {\n    Token: _Token__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    TokenBlock: _TokenBlock__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    AnnotationSidebar: _AnnotationSidebar__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    ClassesBlock: _ClassesBlock_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    Export: _Export_vue__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n  },\n  computed: Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__[\"mapState\"])([\"inputSentences\", \"classes\", \"annotations\", \"currentClass\"])),\n  watch: {\n    inputSentences: function inputSentences() {\n      this.currentIndex = 0;\n      this.tokenizeCurrentSentence();\n    }\n  },\n  created: function created() {\n    if (this.inputSentences.length) {\n      this.tokenizeCurrentSentence();\n    }\n\n    document.addEventListener(\"mouseup\", this.selectTokens);\n  },\n  beforeUnmount: function beforeUnmount() {\n    document.removeEventListener(\"mouseup\", this.selectTokens);\n  },\n  methods: {\n    tokenizeCurrentSentence: function tokenizeCurrentSentence() {\n      if (this.currentIndex >= this.inputSentences.length) {\n        // TODO show completed message\n        alert(\"You have completed all the sentences\");\n        return;\n      }\n\n      this.currentSentence = this.inputSentences[this.currentIndex];\n      var words = this.currentSentence[\"text\"].split(\" \");\n      var tokens = [];\n      var last_index = 0;\n\n      for (var i = 0; i < words.length; i += 1) {\n        var token = [];\n        var start = this.currentSentence[\"text\"].indexOf(words[i], last_index);\n        var end = start + words[i].length;\n        token.push(start);\n        token.push(end);\n        token.push(words[i]);\n        tokens.push(token);\n        last_index = end;\n      }\n\n      this.tm = new _token_manager__WEBPACK_IMPORTED_MODULE_11__[\"default\"](tokens); //for each annotation in this.$store.annotations\n      //    this.tm.addNewBlock(annotation.startIdx, annotation.endIdx, annotation.class);\n    },\n    selectTokens: function selectTokens() {\n      var selection = document.getSelection();\n      if (selection.anchorOffset === selection.focusOffset && selection.anchorNode === selection.focusNode) return;\n      var startIdx, endIdx;\n\n      try {\n        startIdx = parseInt(selection.anchorNode.parentElement.id.replace(\"t\", \"\"));\n        endIdx = parseInt(selection.focusNode.parentElement.id.replace(\"t\", \"\"));\n      } catch (e) {\n        console.log(\"selected text were not tokens\");\n        return;\n      }\n\n      if (!this.classes.length && selection.anchorNode) {\n        alert(\"There are no Tags available. Kindly add some Tags before tagging.\");\n        selection.empty();\n        return;\n      }\n\n      this.tm.addNewBlock(startIdx, endIdx, this.currentClass);\n      selection.empty();\n    },\n    onRemoveBlock: function onRemoveBlock(blockStart) {\n      this.tm.removeBlock(blockStart);\n    },\n    resetBlocks: function resetBlocks() {\n      this.tm.resetBlocks();\n    },\n    skipCurrentSentence: function skipCurrentSentence() {\n      this.currentIndex++;\n      this.tokenizeCurrentSentence();\n    },\n    saveTags: function saveTags() {\n      var _this = this;\n\n      _axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"/detokenize/\", {\n        tokens: this.tm.words\n      }).then(function (res) {\n        _this.$store.commit(\"addAnnotation\", [res.data.text, {\n          entities: _this.tm.exportAsAnnotation()\n        }]);\n\n        _this.currentIndex++;\n\n        _this.tokenizeCurrentSentence();\n      }).catch(function (e) {\n        console.log(e);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/ZWUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLWRlc2t0b3BcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLW9uZS1maWZ0aFwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBtLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICA8Y2xhc3Nlcy1ibG9jayAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJsb2NrXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImVkaXRvclwiPlxuICAgICAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgICAgICA6aXM9XCJ0LnR5cGUgPT09ICd0b2tlbicgPyAnVG9rZW4nIDogJ1Rva2VuQmxvY2snXCJcbiAgICAgICAgICAgICAgOmlkPVwiJ3QnICsgdC5zdGFydFwiXG4gICAgICAgICAgICAgIHYtZm9yPVwidCBpbiB0bS50b2tlbnNcIlxuICAgICAgICAgICAgICA6dG9rZW49XCJ0XCJcbiAgICAgICAgICAgICAgOmtleT1cInQuc3RhcnRcIlxuICAgICAgICAgICAgICA6YmFja2dyb3VuZENvbG9yPVwidC5iYWNrZ3JvdW5kQ29sb3JcIlxuICAgICAgICAgICAgICBAcmVtb3ZlLWJsb2NrPVwib25SZW1vdmVCbG9ja1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJsb2NrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWdyb3VwZWRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWRhbmdlciBpcy1vdXRsaW5lZFwiIEBjbGljaz1cInJlc2V0QmxvY2tzXCI+XG4gICAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cInNraXBDdXJyZW50U2VudGVuY2VcIj5Ta2lwPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1saW5rXCIgQGNsaWNrPVwic2F2ZVRhZ3NcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZXhwb3J0Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vYXhpb3NcIjtcbmltcG9ydCBUb2tlbiBmcm9tIFwiLi9Ub2tlblwiO1xuaW1wb3J0IFRva2VuQmxvY2sgZnJvbSBcIi4vVG9rZW5CbG9ja1wiO1xuaW1wb3J0IEFubm90YXRpb25TaWRlYmFyIGZyb20gXCIuL0Fubm90YXRpb25TaWRlYmFyXCI7XG5pbXBvcnQgQ2xhc3Nlc0Jsb2NrIGZyb20gXCIuL0NsYXNzZXNCbG9jay52dWVcIjtcbmltcG9ydCBUb2tlbk1hbmFnZXIgZnJvbSBcIi4vdG9rZW4tbWFuYWdlclwiO1xuaW1wb3J0IEV4cG9ydCBmcm9tIFwiLi9FeHBvcnQudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJBbm5vdGF0aW9uUGFnZVwiLFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG06IG5ldyBUb2tlbk1hbmFnZXIoW10pLFxuICAgICAgY3VycmVudFNlbnRlbmNlOiB7fSxcbiAgICAgIGN1cnJlbnRJbmRleDogMCxcbiAgICAgIHJlZG9uZTogXCJcIixcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgVG9rZW4sXG4gICAgVG9rZW5CbG9jayxcbiAgICBBbm5vdGF0aW9uU2lkZWJhcixcbiAgICBDbGFzc2VzQmxvY2ssXG4gICAgRXhwb3J0LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcFN0YXRlKFtcImlucHV0U2VudGVuY2VzXCIsIFwiY2xhc3Nlc1wiLCBcImFubm90YXRpb25zXCIsIFwiY3VycmVudENsYXNzXCJdKSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBpbnB1dFNlbnRlbmNlcygpIHtcbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgIHRoaXMudG9rZW5pemVDdXJyZW50U2VudGVuY2UoKTtcbiAgICB9XG5cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICBpZiAodGhpcy5pbnB1dFNlbnRlbmNlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudG9rZW5pemVDdXJyZW50U2VudGVuY2UoKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5zZWxlY3RUb2tlbnMpO1xuICB9LFxuICBiZWZvcmVVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuc2VsZWN0VG9rZW5zKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRva2VuaXplQ3VycmVudFNlbnRlbmNlKCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMuaW5wdXRTZW50ZW5jZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIFRPRE8gc2hvdyBjb21wbGV0ZWQgbWVzc2FnZVxuICAgICAgICBhbGVydChcIllvdSBoYXZlIGNvbXBsZXRlZCBhbGwgdGhlIHNlbnRlbmNlc1wiKVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRTZW50ZW5jZSA9IHRoaXMuaW5wdXRTZW50ZW5jZXNbdGhpcy5jdXJyZW50SW5kZXhdO1xuXG4gICAgICB2YXIgd29yZHMgPSB0aGlzLmN1cnJlbnRTZW50ZW5jZVtcInRleHRcIl0uc3BsaXQoXCIgXCIpO1xuICAgICAgdmFyIHRva2VucyA9IFtdO1xuICAgICAgdmFyIGxhc3RfaW5kZXggPSAwO1xuICAgICAgZm9yKHZhciBpPTA7IGk8d29yZHMubGVuZ3RoOyBpKz0xKXtcbiAgICAgICAgICB2YXIgdG9rZW4gPSBbXTtcbiAgICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmN1cnJlbnRTZW50ZW5jZVtcInRleHRcIl0uaW5kZXhPZih3b3Jkc1tpXSxsYXN0X2luZGV4KTtcbiAgICAgICAgICB2YXIgZW5kID0gc3RhcnQrd29yZHNbaV0ubGVuZ3RoOyBcbiAgICAgICAgICB0b2tlbi5wdXNoKHN0YXJ0KTtcbiAgICAgICAgICB0b2tlbi5wdXNoKGVuZCk7XG4gICAgICAgICAgdG9rZW4ucHVzaCh3b3Jkc1tpXSk7XG5cbiAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG5cbiAgICAgICAgICBsYXN0X2luZGV4ID0gZW5kO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRtID0gbmV3IFRva2VuTWFuYWdlcih0b2tlbnMpO1xuXG4gICAgICAvL2ZvciBlYWNoIGFubm90YXRpb24gaW4gdGhpcy4kc3RvcmUuYW5ub3RhdGlvbnNcbiAgICAgIC8vICAgIHRoaXMudG0uYWRkTmV3QmxvY2soYW5ub3RhdGlvbi5zdGFydElkeCwgYW5ub3RhdGlvbi5lbmRJZHgsIGFubm90YXRpb24uY2xhc3MpO1xuICAgIH0sXG4gICAgc2VsZWN0VG9rZW5zKCkge1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQgPT09IHNlbGVjdGlvbi5mb2N1c09mZnNldCAmJlxuICAgICAgICBzZWxlY3Rpb24uYW5jaG9yTm9kZSA9PT0gc2VsZWN0aW9uLmZvY3VzTm9kZVxuICAgICAgKVxuICAgICAgICByZXR1cm47XG4gICAgICBsZXQgc3RhcnRJZHgsIGVuZElkeDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0YXJ0SWR4ID0gcGFyc2VJbnQoXG4gICAgICAgICAgc2VsZWN0aW9uLmFuY2hvck5vZGUucGFyZW50RWxlbWVudC5pZC5yZXBsYWNlKFwidFwiLCBcIlwiKVxuICAgICAgICApO1xuICAgICAgICBlbmRJZHggPSBwYXJzZUludChcbiAgICAgICAgICBzZWxlY3Rpb24uZm9jdXNOb2RlLnBhcmVudEVsZW1lbnQuaWQucmVwbGFjZShcInRcIiwgXCJcIilcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCB0ZXh0IHdlcmUgbm90IHRva2Vuc1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuY2xhc3Nlcy5sZW5ndGggJiYgc2VsZWN0aW9uLmFuY2hvck5vZGUpIHtcbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgXCJUaGVyZSBhcmUgbm8gVGFncyBhdmFpbGFibGUuIEtpbmRseSBhZGQgc29tZSBUYWdzIGJlZm9yZSB0YWdnaW5nLlwiXG4gICAgICAgICk7XG4gICAgICAgIHNlbGVjdGlvbi5lbXB0eSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG0uYWRkTmV3QmxvY2soc3RhcnRJZHgsIGVuZElkeCwgdGhpcy5jdXJyZW50Q2xhc3MpO1xuICAgICAgc2VsZWN0aW9uLmVtcHR5KCk7XG4gICAgfSxcbiAgICBvblJlbW92ZUJsb2NrKGJsb2NrU3RhcnQpIHtcbiAgICAgIHRoaXMudG0ucmVtb3ZlQmxvY2soYmxvY2tTdGFydCk7XG4gICAgfSxcbiAgICByZXNldEJsb2NrcygpIHtcbiAgICAgIHRoaXMudG0ucmVzZXRCbG9ja3MoKTtcbiAgICB9LFxuICAgIHNraXBDdXJyZW50U2VudGVuY2UoKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICAgICAgdGhpcy50b2tlbml6ZUN1cnJlbnRTZW50ZW5jZSgpO1xuICAgIH0sXG4gICAgc2F2ZVRhZ3MoKSB7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcIi9kZXRva2VuaXplL1wiLCB7IHRva2VuczogdGhpcy50bS53b3JkcyB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwiYWRkQW5ub3RhdGlvblwiLCBbXG4gICAgICAgICAgICByZXMuZGF0YS50ZXh0LFxuICAgICAgICAgICAgeyBlbnRpdGllczogdGhpcy50bS5leHBvcnRBc0Fubm90YXRpb24oKSB9LFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgICAgICAgdGhpcy50b2tlbml6ZUN1cnJlbnRTZW50ZW5jZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4jZWRpdG9yIHtcbiAgcGFkZGluZzogMC4ycmVtO1xufVxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF0RkE7QUFwQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=script&lang=js\n");

/***/ })

})