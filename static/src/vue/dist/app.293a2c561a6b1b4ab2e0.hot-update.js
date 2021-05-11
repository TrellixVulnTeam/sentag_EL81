webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/AnnotationPage.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ \"./node_modules/core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.url */ \"./node_modules/core-js/modules/web.url.js\");\n/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../axios */ \"./src/axios.js\");\n/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Token */ \"./src/components/Token.vue\");\n/* harmony import */ var _TokenBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TokenBlock */ \"./src/components/TokenBlock.vue\");\n/* harmony import */ var _token_manager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./token-manager */ \"./src/components/token-manager.js\");\n/* harmony import */ var _Export_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Export.vue */ \"./src/components/Export.vue\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"AnnotationPage\",\n  data: function data() {\n    return {\n      tm: new _token_manager__WEBPACK_IMPORTED_MODULE_13__[\"default\"]([]),\n      currentSentence: {}\n    };\n  },\n  props: ['title'],\n  components: {\n    Token: _Token__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    TokenBlock: _TokenBlock__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n    Export: _Export_vue__WEBPACK_IMPORTED_MODULE_14__[\"default\"]\n  },\n  computed: Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__[\"mapState\"])([\"inputSentences\", \"classes\", \"annotations\", \"currentClass\"])),\n  watch: {\n    inputSentences: function inputSentences() {\n      this.tokenizeCurrentSentence();\n    }\n  },\n  created: function created() {\n    if (this.inputSentences.length) {\n      this.tokenizeCurrentSentence();\n    }\n\n    document.addEventListener(\"mouseup\", this.selectTokens);\n  },\n  beforeUnmount: function beforeUnmount() {\n    document.removeEventListener(\"mouseup\", this.selectTokens);\n  },\n  methods: {\n    tokenizeCurrentSentence: function tokenizeCurrentSentence() {\n      this.currentSentence = this.inputSentences[0];\n      var words = this.currentSentence[\"text\"].split(\" \");\n      var tokens = [];\n      var last_index = 0;\n\n      for (var i = 0; i < words.length; i += 1) {\n        var token = [];\n        var start = this.currentSentence[\"text\"].indexOf(words[i], last_index);\n        var end = start + words[i].length;\n        token.push(start);\n        token.push(end);\n        token.push(words[i]);\n        tokens.push(token);\n        last_index = end;\n      }\n\n      this.tm = new _token_manager__WEBPACK_IMPORTED_MODULE_13__[\"default\"](tokens); //for each annotation in this.$store.annotations\n      //    this.tm.addNewBlock(annotation.startIdx, annotation.endIdx, annotation.class);\n    },\n    selectTokens: function selectTokens() {\n      //console.log(this.classes);\n      var selection = document.getSelection();\n      if (selection.anchorOffset === selection.focusOffset && selection.anchorNode === selection.focusNode) return;\n      var startIdx, endIdx;\n\n      try {\n        startIdx = parseInt(selection.anchorNode.parentElement.id.replace(\"t\", \"\"));\n        endIdx = parseInt(selection.focusNode.parentElement.id.replace(\"t\", \"\"));\n      } catch (e) {\n        console.log(\"selected text were not tokens\");\n        return;\n      }\n\n      if (!this.classes.length && selection.anchorNode) {\n        alert(\"There are no Tags available. Kindly add some Tags before tagging.\");\n        selection.empty();\n        return;\n      }\n\n      this.tm.addNewBlock(startIdx, endIdx, this.currentClass);\n      selection.empty();\n    },\n    onRemoveBlock: function onRemoveBlock(data) {\n      this.tm.removeBlock(data.start, data.end);\n    },\n    resetBlocks: function resetBlocks() {\n      if (confirm(\"Are you sure you want to reset ALL the annotations? The unsaved work will be lost\")) this.tm.resetBlocks();\n    },\n    saveTags: function saveTags() {\n      var tmjson = JSON.stringify(this.tm);\n      console.log(tmjson); //PROOF OF WORK\n      // this.tm = new TokenManager({}, JSON.parse(tmjson));\n      // console.log(this.tm);\n\n      var url = new URL(location.href)['pathname'];\n      var numero_sentenza = url[url.length - 2];\n      _axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(\"/api/update/\" + numero_sentenza, JSON.stringify(this.tm), {\n        headers: {\n          \"X-CSRFToken\": CSRF_TOKEN,\n          \"content-type\": \"application/json\"\n        }\n      }).then().catch(function (e) {\n        console.log(e);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/ZWUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLWRlc2t0b3BcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgPHN0cm9uZz5UYWdnYSB7e3RpdGxlfX08L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiZWRpdG9yXCI+XG4gICAgICAgICAgICA8Y29tcG9uZW50XG4gICAgICAgICAgICAgIDppcz1cInQudHlwZSA9PT0gJ3Rva2VuJyA/ICdUb2tlbicgOiAnVG9rZW5CbG9jaydcIlxuICAgICAgICAgICAgICA6aWQ9XCIndCcgKyB0LnN0YXJ0XCJcbiAgICAgICAgICAgICAgdi1mb3I9XCJ0IGluIHRtLnRva2Vuc1wiXG4gICAgICAgICAgICAgIDp0b2tlbj1cInRcIlxuICAgICAgICAgICAgICA6a2V5PVwidC5zdGFydFwiXG4gICAgICAgICAgICAgIDpiYWNrZ3JvdW5kQ29sb3I9XCJ0LmJhY2tncm91bmRDb2xvclwiXG4gICAgICAgICAgICAgIEByZW1vdmUtYmxvY2s9XCJvblJlbW92ZUJsb2NrXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQgaXMtZ3JvdXBlZFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtZGFuZ2VyIGlzLW91dGxpbmVkXCIgQGNsaWNrPVwicmVzZXRCbG9ja3NcIj5cbiAgICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWxpbmtcIiBAY2xpY2s9XCJzYXZlVGFnc1wiPlNhbHZhPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8ZXhwb3J0Lz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tIFwidnVleFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi9heGlvc1wiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL1Rva2VuXCI7XG5pbXBvcnQgVG9rZW5CbG9jayBmcm9tIFwiLi9Ub2tlbkJsb2NrXCI7XG5pbXBvcnQgVG9rZW5NYW5hZ2VyIGZyb20gXCIuL3Rva2VuLW1hbmFnZXJcIjtcbmltcG9ydCBFeHBvcnQgZnJvbSBcIi4vRXhwb3J0LnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQW5ub3RhdGlvblBhZ2VcIixcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtOiBuZXcgVG9rZW5NYW5hZ2VyKFtdKSxcbiAgICAgIGN1cnJlbnRTZW50ZW5jZToge30sXG4gICAgfTtcbiAgfSxcbiAgcHJvcHM6IFsndGl0bGUnXSxcbiAgY29tcG9uZW50czoge1xuICAgIFRva2VuLFxuICAgIFRva2VuQmxvY2ssXG4gICAgRXhwb3J0LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcFN0YXRlKFtcImlucHV0U2VudGVuY2VzXCIsIFwiY2xhc3Nlc1wiLCBcImFubm90YXRpb25zXCIsIFwiY3VycmVudENsYXNzXCJdKSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBpbnB1dFNlbnRlbmNlcygpIHtcbiAgICAgIHRoaXMudG9rZW5pemVDdXJyZW50U2VudGVuY2UoKTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRTZW50ZW5jZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRva2VuaXplQ3VycmVudFNlbnRlbmNlKCk7XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuc2VsZWN0VG9rZW5zKTtcbiAgfSxcbiAgYmVmb3JlVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLnNlbGVjdFRva2Vucyk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0b2tlbml6ZUN1cnJlbnRTZW50ZW5jZSgpIHtcbiAgICAgIHRoaXMuY3VycmVudFNlbnRlbmNlID0gdGhpcy5pbnB1dFNlbnRlbmNlc1swXTtcblxuICAgICAgbGV0IHdvcmRzID0gdGhpcy5jdXJyZW50U2VudGVuY2VbXCJ0ZXh0XCJdLnNwbGl0KFwiIFwiKTtcbiAgICAgIGxldCB0b2tlbnMgPSBbXTtcbiAgICAgIGxldCBsYXN0X2luZGV4ID0gMDtcbiAgICAgIGZvcihsZXQgaT0wOyBpPHdvcmRzLmxlbmd0aDsgaSs9MSl7XG4gICAgICAgICAgbGV0IHRva2VuID0gW107XG4gICAgICAgICAgbGV0IHN0YXJ0ID0gdGhpcy5jdXJyZW50U2VudGVuY2VbXCJ0ZXh0XCJdLmluZGV4T2Yod29yZHNbaV0sbGFzdF9pbmRleCk7XG4gICAgICAgICAgbGV0IGVuZCA9IHN0YXJ0K3dvcmRzW2ldLmxlbmd0aDsgXG4gICAgICAgICAgdG9rZW4ucHVzaChzdGFydCk7XG4gICAgICAgICAgdG9rZW4ucHVzaChlbmQpO1xuICAgICAgICAgIHRva2VuLnB1c2god29yZHNbaV0pO1xuXG4gICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuXG4gICAgICAgICAgbGFzdF9pbmRleCA9IGVuZDtcbiAgICAgIH1cblxuICAgICAgdGhpcy50bSA9IG5ldyBUb2tlbk1hbmFnZXIodG9rZW5zKTtcblxuICAgICAgLy9mb3IgZWFjaCBhbm5vdGF0aW9uIGluIHRoaXMuJHN0b3JlLmFubm90YXRpb25zXG4gICAgICAvLyAgICB0aGlzLnRtLmFkZE5ld0Jsb2NrKGFubm90YXRpb24uc3RhcnRJZHgsIGFubm90YXRpb24uZW5kSWR4LCBhbm5vdGF0aW9uLmNsYXNzKTtcbiAgICB9LFxuICAgIHNlbGVjdFRva2VucygpIHtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5jbGFzc2VzKTtcbiAgICAgIGxldCBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcblxuICAgICAgaWYgKFxuICAgICAgICBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0ID09PSBzZWxlY3Rpb24uZm9jdXNPZmZzZXQgJiZcbiAgICAgICAgc2VsZWN0aW9uLmFuY2hvck5vZGUgPT09IHNlbGVjdGlvbi5mb2N1c05vZGVcbiAgICAgIClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbGV0IHN0YXJ0SWR4LCBlbmRJZHg7XG4gICAgICB0cnkge1xuICAgICAgICBzdGFydElkeCA9IHBhcnNlSW50KFxuICAgICAgICAgIHNlbGVjdGlvbi5hbmNob3JOb2RlLnBhcmVudEVsZW1lbnQuaWQucmVwbGFjZShcInRcIiwgXCJcIilcbiAgICAgICAgKTtcbiAgICAgICAgZW5kSWR4ID0gcGFyc2VJbnQoXG4gICAgICAgICAgc2VsZWN0aW9uLmZvY3VzTm9kZS5wYXJlbnRFbGVtZW50LmlkLnJlcGxhY2UoXCJ0XCIsIFwiXCIpXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgdGV4dCB3ZXJlIG5vdCB0b2tlbnNcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmNsYXNzZXMubGVuZ3RoICYmIHNlbGVjdGlvbi5hbmNob3JOb2RlKSB7XG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgIFwiVGhlcmUgYXJlIG5vIFRhZ3MgYXZhaWxhYmxlLiBLaW5kbHkgYWRkIHNvbWUgVGFncyBiZWZvcmUgdGFnZ2luZy5cIlxuICAgICAgICApO1xuICAgICAgICBzZWxlY3Rpb24uZW1wdHkoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRtLmFkZE5ld0Jsb2NrKHN0YXJ0SWR4LCBlbmRJZHgsIHRoaXMuY3VycmVudENsYXNzKTtcbiAgICAgIHNlbGVjdGlvbi5lbXB0eSgpO1xuICAgIH0sXG4gICAgb25SZW1vdmVCbG9jayhkYXRhKSB7XG4gICAgICB0aGlzLnRtLnJlbW92ZUJsb2NrKGRhdGEuc3RhcnQsZGF0YS5lbmQpO1xuICAgIH0sXG4gICAgcmVzZXRCbG9ja3MoKSB7XG4gICAgICBpZihjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc2V0IEFMTCB0aGUgYW5ub3RhdGlvbnM/IFRoZSB1bnNhdmVkIHdvcmsgd2lsbCBiZSBsb3N0XCIpKVxuICAgICAgdGhpcy50bS5yZXNldEJsb2NrcygpO1xuICAgIH0sXG4gICAgc2F2ZVRhZ3MoKSB7XG4gICAgICBsZXQgdG1qc29uID0gSlNPTi5zdHJpbmdpZnkodGhpcy50bSk7XG4gICAgICBjb25zb2xlLmxvZyh0bWpzb24pO1xuICAgICAgXG4gICAgICAvL1BST09GIE9GIFdPUktcbiAgICAgIC8vIHRoaXMudG0gPSBuZXcgVG9rZW5NYW5hZ2VyKHt9LCBKU09OLnBhcnNlKHRtanNvbikpO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy50bSk7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpWydwYXRobmFtZSddO1xuICAgICAgY29uc3QgbnVtZXJvX3NlbnRlbnphID0gdXJsW3VybC5sZW5ndGgtMl1cbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFxuICAgICAgICAgIFwiL2FwaS91cGRhdGUvXCIrbnVtZXJvX3NlbnRlbnphLCBcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnRtKSxcbiAgICAgICAgICB7ICBcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXCJYLUNTUkZUb2tlblwiOiBDU1JGX1RPS0VOLCBcbiAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICB9fVxuICAgICAgICApXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIC8vIChyZXMpID0+IHtcbiAgICAgICAgICAvLyB0aGlzLiRzdG9yZS5jb21taXQoXCJhZGRBbm5vdGF0aW9uXCIsIFtcbiAgICAgICAgICAvLyAgIHJlcy5kYXRhLnRleHQsXG4gICAgICAgICAgLy8gICB7IGVudGl0aWVzOiB0aGlzLnRtLmV4cG9ydEFzQW5ub3RhdGlvbigpIH0sXG4gICAgICAgICAgLy8gXSk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICApXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiNlZGl0b3Ige1xuICBwYWRkaW5nOiAwLjJyZW07XG59XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFlQTtBQUNBO0FBQ0E7QUEvRkE7QUEvQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=script&lang=js\n");

/***/ })

})