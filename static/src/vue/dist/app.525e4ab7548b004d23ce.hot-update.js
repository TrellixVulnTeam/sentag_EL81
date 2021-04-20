webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/AnnotationPage.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../axios */ \"./src/axios.js\");\n/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Token */ \"./src/components/Token.vue\");\n/* harmony import */ var _TokenBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TokenBlock */ \"./src/components/TokenBlock.vue\");\n/* harmony import */ var _AnnotationSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnnotationSidebar */ \"./src/components/AnnotationSidebar.vue\");\n/* harmony import */ var _ClassesBlock_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ClassesBlock.vue */ \"./src/components/ClassesBlock.vue\");\n/* harmony import */ var _token_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token-manager */ \"./src/components/token-manager.js\");\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"AnnotationPage\",\n  data: function data() {\n    return {\n      tm: new _token_manager__WEBPACK_IMPORTED_MODULE_9__[\"default\"]([]),\n      currentSentence: {},\n      currentIndex: 0,\n      redone: \"\"\n    };\n  },\n  components: {\n    Token: _Token__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    TokenBlock: _TokenBlock__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    AnnotationSidebar: _AnnotationSidebar__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    ClassesBlock: _ClassesBlock_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  },\n  computed: Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__[\"mapState\"])([\"inputSentences\", \"classes\", \"annotations\", \"currentClass\"])),\n  watch: {\n    inputSentences: function inputSentences() {\n      this.currentIndex = 0;\n      this.tokenizeCurrentSentence();\n    }\n  },\n  created: function created() {\n    if (this.inputSentences.length) {\n      this.tokenizeCurrentSentence();\n    }\n\n    document.addEventListener(\"mouseup\", this.selectTokens);\n  },\n  beforeUnmount: function beforeUnmount() {\n    document.removeEventListener(\"mouseup\", this.selectTokens);\n  },\n  methods: {\n    tokenizeCurrentSentence: function tokenizeCurrentSentence() {\n      var _this = this;\n\n      if (this.currentIndex >= this.inputSentences.length) {\n        // TODO show completed message\n        alert(\"You have completed all the sentences\");\n        return;\n      }\n\n      this.currentSentence = this.inputSentences[this.currentIndex];\n      _axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/tokenize/\", {\n        text: this.currentSentence\n      }).then(function (res) {\n        _this.tm = new _token_manager__WEBPACK_IMPORTED_MODULE_9__[\"default\"](res.data.tokens); //for each annotation in this.$store.annotations\n        //    this.tm.addNewBlock(annotation.startIdx, annotation.endIdx, annotation.class);\n      }).catch(function (err) {\n        return alert(err);\n      });\n    },\n    selectTokens: function selectTokens() {\n      var selection = document.getSelection();\n      if (selection.anchorOffset === selection.focusOffset && selection.anchorNode === selection.focusNode) return;\n      var startIdx, endIdx;\n\n      try {\n        startIdx = parseInt(selection.anchorNode.parentElement.id.replace(\"t\", \"\"));\n        endIdx = parseInt(selection.focusNode.parentElement.id.replace(\"t\", \"\"));\n      } catch (e) {\n        console.log(\"selected text were not tokens\");\n        return;\n      }\n\n      if (!this.classes.length && selection.anchorNode) {\n        alert(\"There are no Tags available. Kindly add some Tags before tagging.\");\n        selection.empty();\n        return;\n      }\n\n      this.tm.addNewBlock(startIdx, endIdx, this.currentClass);\n      selection.empty();\n    },\n    onRemoveBlock: function onRemoveBlock(blockStart) {\n      this.tm.removeBlock(blockStart);\n    },\n    resetBlocks: function resetBlocks() {\n      this.tm.resetBlocks();\n    },\n    skipCurrentSentence: function skipCurrentSentence() {\n      this.currentIndex++;\n      this.tokenizeCurrentSentence();\n    },\n    saveTags: function saveTags() {\n      var _this2 = this;\n\n      _axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/detokenize/\", {\n        tokens: this.tm.words\n      }).then(function (res) {\n        _this2.$store.commit(\"addAnnotation\", [res.data.text, {\n          entities: _this2.tm.exportAsAnnotation()\n        }]);\n\n        _this2.currentIndex++;\n\n        _this2.tokenizeCurrentSentence();\n      }).catch(function (e) {\n        console.log(e);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/ZWUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLWRlc2t0b3BcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLW9uZS1maWZ0aFwiPlxuICAgICAgPEFubm90YXRpb25TaWRlYmFyIDpjdXJyZW50PVwiY3VycmVudFNlbnRlbmNlXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgbS00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgPGNsYXNzZXMtYmxvY2sgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJlZGl0b3JcIj5cbiAgICAgICAgICAgIDxjb21wb25lbnRcbiAgICAgICAgICAgICAgOmlzPVwidC50eXBlID09PSAndG9rZW4nID8gJ1Rva2VuJyA6ICdUb2tlbkJsb2NrJ1wiXG4gICAgICAgICAgICAgIDppZD1cIid0JyArIHQuc3RhcnRcIlxuICAgICAgICAgICAgICB2LWZvcj1cInQgaW4gdG0udG9rZW5zXCJcbiAgICAgICAgICAgICAgOnRva2VuPVwidFwiXG4gICAgICAgICAgICAgIDprZXk9XCJ0LnN0YXJ0XCJcbiAgICAgICAgICAgICAgOmJhY2tnb3VuZENvbG9yPVwidC5iYWNrZ3JvdW5kQ29sb3JcIlxuICAgICAgICAgICAgICBAcmVtb3ZlLWJsb2NrPVwib25SZW1vdmVCbG9ja1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJsb2NrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWdyb3VwZWRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWRhbmdlciBpcy1vdXRsaW5lZFwiIEBjbGljaz1cInJlc2V0QmxvY2tzXCI+XG4gICAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cInNraXBDdXJyZW50U2VudGVuY2VcIj5Ta2lwPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1saW5rXCIgQGNsaWNrPVwic2F2ZVRhZ3NcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uL2F4aW9zXCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vVG9rZW5cIjtcbmltcG9ydCBUb2tlbkJsb2NrIGZyb20gXCIuL1Rva2VuQmxvY2tcIjtcbmltcG9ydCBBbm5vdGF0aW9uU2lkZWJhciBmcm9tIFwiLi9Bbm5vdGF0aW9uU2lkZWJhclwiO1xuaW1wb3J0IENsYXNzZXNCbG9jayBmcm9tIFwiLi9DbGFzc2VzQmxvY2sudnVlXCI7XG5pbXBvcnQgVG9rZW5NYW5hZ2VyIGZyb20gXCIuL3Rva2VuLW1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkFubm90YXRpb25QYWdlXCIsXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bTogbmV3IFRva2VuTWFuYWdlcihbXSksXG4gICAgICBjdXJyZW50U2VudGVuY2U6IHt9LFxuICAgICAgY3VycmVudEluZGV4OiAwLFxuICAgICAgcmVkb25lOiBcIlwiLFxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBUb2tlbixcbiAgICBUb2tlbkJsb2NrLFxuICAgIEFubm90YXRpb25TaWRlYmFyLFxuICAgIENsYXNzZXNCbG9jayxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBTdGF0ZShbXCJpbnB1dFNlbnRlbmNlc1wiLCBcImNsYXNzZXNcIiwgXCJhbm5vdGF0aW9uc1wiLCBcImN1cnJlbnRDbGFzc1wiXSksXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgaW5wdXRTZW50ZW5jZXMoKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICB0aGlzLnRva2VuaXplQ3VycmVudFNlbnRlbmNlKCk7XG4gICAgfVxuXG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRTZW50ZW5jZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRva2VuaXplQ3VycmVudFNlbnRlbmNlKCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuc2VsZWN0VG9rZW5zKTtcbiAgfSxcbiAgYmVmb3JlVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLnNlbGVjdFRva2Vucyk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2tlbml6ZUN1cnJlbnRTZW50ZW5jZSgpIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+PSB0aGlzLmlucHV0U2VudGVuY2VzLmxlbmd0aCkge1xuICAgICAgICAvLyBUT0RPIHNob3cgY29tcGxldGVkIG1lc3NhZ2VcbiAgICAgICAgYWxlcnQoXCJZb3UgaGF2ZSBjb21wbGV0ZWQgYWxsIHRoZSBzZW50ZW5jZXNcIilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50U2VudGVuY2UgPSB0aGlzLmlucHV0U2VudGVuY2VzW3RoaXMuY3VycmVudEluZGV4XTtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiL3Rva2VuaXplL1wiLCB7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLmN1cnJlbnRTZW50ZW5jZVxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy50bSA9IG5ldyBUb2tlbk1hbmFnZXIocmVzLmRhdGEudG9rZW5zKTtcbiAgICAgICAgICAvL2ZvciBlYWNoIGFubm90YXRpb24gaW4gdGhpcy4kc3RvcmUuYW5ub3RhdGlvbnNcbiAgICAgICAgICAvLyAgICB0aGlzLnRtLmFkZE5ld0Jsb2NrKGFubm90YXRpb24uc3RhcnRJZHgsIGFubm90YXRpb24uZW5kSWR4LCBhbm5vdGF0aW9uLmNsYXNzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVycikpO1xuICAgIH0sXG4gICAgc2VsZWN0VG9rZW5zKCkge1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQgPT09IHNlbGVjdGlvbi5mb2N1c09mZnNldCAmJlxuICAgICAgICBzZWxlY3Rpb24uYW5jaG9yTm9kZSA9PT0gc2VsZWN0aW9uLmZvY3VzTm9kZVxuICAgICAgKVxuICAgICAgICByZXR1cm47XG4gICAgICBsZXQgc3RhcnRJZHgsIGVuZElkeDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0YXJ0SWR4ID0gcGFyc2VJbnQoXG4gICAgICAgICAgc2VsZWN0aW9uLmFuY2hvck5vZGUucGFyZW50RWxlbWVudC5pZC5yZXBsYWNlKFwidFwiLCBcIlwiKVxuICAgICAgICApO1xuICAgICAgICBlbmRJZHggPSBwYXJzZUludChcbiAgICAgICAgICBzZWxlY3Rpb24uZm9jdXNOb2RlLnBhcmVudEVsZW1lbnQuaWQucmVwbGFjZShcInRcIiwgXCJcIilcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCB0ZXh0IHdlcmUgbm90IHRva2Vuc1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuY2xhc3Nlcy5sZW5ndGggJiYgc2VsZWN0aW9uLmFuY2hvck5vZGUpIHtcbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgXCJUaGVyZSBhcmUgbm8gVGFncyBhdmFpbGFibGUuIEtpbmRseSBhZGQgc29tZSBUYWdzIGJlZm9yZSB0YWdnaW5nLlwiXG4gICAgICAgICk7XG4gICAgICAgIHNlbGVjdGlvbi5lbXB0eSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG0uYWRkTmV3QmxvY2soc3RhcnRJZHgsIGVuZElkeCwgdGhpcy5jdXJyZW50Q2xhc3MpO1xuICAgICAgc2VsZWN0aW9uLmVtcHR5KCk7XG4gICAgfSxcbiAgICBvblJlbW92ZUJsb2NrKGJsb2NrU3RhcnQpIHtcbiAgICAgIHRoaXMudG0ucmVtb3ZlQmxvY2soYmxvY2tTdGFydCk7XG4gICAgfSxcbiAgICByZXNldEJsb2NrcygpIHtcbiAgICAgIHRoaXMudG0ucmVzZXRCbG9ja3MoKTtcbiAgICB9LFxuICAgIHNraXBDdXJyZW50U2VudGVuY2UoKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICAgICAgdGhpcy50b2tlbml6ZUN1cnJlbnRTZW50ZW5jZSgpO1xuICAgIH0sXG4gICAgc2F2ZVRhZ3MoKSB7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcIi9kZXRva2VuaXplL1wiLCB7IHRva2VuczogdGhpcy50bS53b3JkcyB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwiYWRkQW5ub3RhdGlvblwiLCBbXG4gICAgICAgICAgICByZXMuZGF0YS50ZXh0LFxuICAgICAgICAgICAgeyBlbnRpdGllczogdGhpcy50bS5leHBvcnRBc0Fubm90YXRpb24oKSB9LFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgICAgICAgdGhpcy50b2tlbml6ZUN1cnJlbnRTZW50ZW5jZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4jZWRpdG9yIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUEzRUE7QUFuQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=script&lang=js\n");

/***/ })

})