webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/AnnotationPage.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bulma-toast */ \"./node_modules/bulma-toast/dist/bulma-toast.min.js\");\n/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var bulma_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bulma-switch */ \"./node_modules/bulma-switch/dist/css/bulma-switch.min.css\");\n/* harmony import */ var bulma_switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bulma_switch__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../axios */ \"./src/axios.js\");\n/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Token */ \"./src/components/Token.vue\");\n/* harmony import */ var _TokenBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TokenBlock */ \"./src/components/TokenBlock.vue\");\n/* harmony import */ var _token_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./token-manager */ \"./src/components/token-manager.js\");\n/* harmony import */ var _Export_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Export.vue */ \"./src/components/Export.vue\");\n\n\n\n\n\n// <!--<i class=\"fas fa-check\"></i>-->\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"AnnotationPage\",\n  data: function data() {\n    return {\n      tm: {},\n      currentSentence: {}\n    };\n  },\n  props: ['title', 'oldtm'],\n  components: {\n    Token: _Token__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    TokenBlock: _TokenBlock__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    Export: _Export_vue__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n  },\n  computed: Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__[\"mapState\"])([\"inputSentences\", \"classes\", \"annotations\", \"currentClass\", \"currentBlock\", \"unsavedWork\"])),\n  watch: {\n    inputSentences: function inputSentences() {\n      this.tokenizeCurrentSentence();\n    }\n  },\n  created: function created() {\n    var _this = this;\n\n    //console.log(this.oldtm.length)\n    if (this.oldtm.length) {\n      this.tm = new _token_manager__WEBPACK_IMPORTED_MODULE_11__[\"default\"]([], JSON.parse(this.oldtm));\n    } else {\n      this.tokenizeCurrentSentence();\n    }\n\n    document.addEventListener(\"mouseup\", this.selectTokens);\n\n    window.onbeforeunload = function () {\n      return _this.unsavedWork ? true : null;\n    };\n  },\n  beforeUnmount: function beforeUnmount() {\n    document.removeEventListener(\"mouseup\", this.selectTokens);\n  },\n  methods: Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__[\"mapMutations\"])([\"setCurrentBlock\", \"setUnsavedWork\"])), {}, {\n    tokenizeCurrentSentence: function tokenizeCurrentSentence() {\n      this.currentSentence = this.inputSentences[0];\n      var words = this.currentSentence[\"text\"].split(\" \");\n      var tokens = [];\n      var last_index = 0;\n\n      for (var i = 0; i < words.length; i += 1) {\n        var token = [];\n        var start = this.currentSentence[\"text\"].indexOf(words[i], last_index);\n        var end = start + words[i].length;\n        token.push(start);\n        token.push(end);\n        token.push(words[i]);\n        tokens.push(token);\n        last_index = end;\n      }\n\n      this.tm = new _token_manager__WEBPACK_IMPORTED_MODULE_11__[\"default\"](tokens);\n    },\n    selectTokens: function selectTokens() {\n      //console.log(this.classes);\n      var selection = document.getSelection();\n      if (selection.anchorOffset === selection.focusOffset && selection.anchorNode === selection.focusNode) return;\n      var startIdx, endIdx;\n\n      try {\n        startIdx = parseInt(selection.anchorNode.parentElement.id.replace(\"t\", \"\"));\n        endIdx = parseInt(selection.focusNode.parentElement.id.replace(\"t\", \"\"));\n      } catch (e) {\n        console.log(\"selected text were not tokens\");\n        return;\n      }\n\n      var cb = this.tm.addNewBlock(startIdx, endIdx, this.currentClass);\n\n      if (cb) {\n        this.setCurrentBlock(cb);\n        console.log(\"s\");\n        console.log(cb);\n        console.log({\n          startIdx: startIdx,\n          endIdx: endIdx\n        });\n      }\n\n      selection.empty();\n      this.setUnsavedWork(true);\n    },\n    onRemoveBlock: function onRemoveBlock(data) {\n      this.tm.removeBlock(data.start, data.end);\n      this.setCurrentBlock(new Object());\n      this.setUnsavedWork(true);\n    },\n    resetBlocks: function resetBlocks() {\n      if (confirm(\"Are you sure you want to reset ALL the annotations? The unsaved work will be lost\")) this.tm.resetBlocks();\n      this.setUnsavedWork(true);\n    },\n    saveTags: function saveTags() {\n      //retrieve CSRF_TOKEN\n      function getCookie(name) {\n        var cookieValue = null;\n\n        if (document.cookie && document.cookie !== '') {\n          var cookies = document.cookie.split(';');\n\n          for (var i = 0; i < cookies.length; i++) {\n            var cookie = cookies[i].trim(); // Does this cookie string begin with the name we want?\n\n            if (cookie.substring(0, name.length + 1) === name + '=') {\n              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n              break;\n            }\n          }\n        }\n\n        return cookieValue;\n      }\n\n      var csrftoken = getCookie('csrftoken');\n      var tagging_id = document.querySelector(\"meta[name='id-tagging']\").getAttribute('content');\n      _axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"/api/update/\" + tagging_id, JSON.stringify(this.tm), {\n        headers: {\n          \"X-CSRFToken\": csrftoken,\n          \"content-type\": \"application/json\" // \"Access-Control-Allow-Origin\": \"*\"\n\n        }\n      }).then(Object(bulma_toast__WEBPACK_IMPORTED_MODULE_6__[\"toast\"])({\n        message: 'Annotations saved',\n        type: 'is-success',\n        dismissible: 'true',\n        pauseOnHover: 'true',\n        duration: 2000,\n        position: 'bottom-right'\n      }), this.setUnsavedWork(false)).catch(function (e) {\n        console.log(e);\n      });\n    }\n  })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/ZWUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLWRlc2t0b3BcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgPHN0cm9uZz5UYWcge3t0aXRsZX19PC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJsb2NrXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImVkaXRvclwiPlxuICAgICAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgICAgICA6aXM9XCJ0LnR5cGUgPT09ICd0b2tlbicgPyAnVG9rZW4nIDogJ1Rva2VuQmxvY2snXCJcbiAgICAgICAgICAgICAgOmlkPVwiJ3QnICsgdC5zdGFydFwiXG4gICAgICAgICAgICAgIHYtZm9yPVwidCBpbiB0bS50b2tlbnNcIlxuICAgICAgICAgICAgICA6dG9rZW49XCJ0XCJcbiAgICAgICAgICAgICAgOmtleT1cInQuc3RhcnRcIlxuICAgICAgICAgICAgICA6YmFja2dyb3VuZENvbG9yPVwidC5iYWNrZ3JvdW5kQ29sb3JcIlxuICAgICAgICAgICAgICA6aXNDdXJyZW50PVwidC5pZCA9PT0gY3VycmVudEJsb2NrLmlkXCJcbiAgICAgICAgICAgICAgQHJlbW92ZS1ibG9jaz1cIm9uUmVtb3ZlQmxvY2tcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ibG9jayBpcy1qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ncm91cGVkIGlzLXB1bGxlZC1sZWZ0XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1kYW5nZXIgaXMtb3V0bGluZWRcIiBAY2xpY2s9XCJyZXNldEJsb2Nrc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIGljb249XCJ1bmRvXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+UmVzZXQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtbGlua1wiIEBjbGljaz1cInNhdmVUYWdzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICA8Zm9udC1hd2Vzb21lLWljb24gaWNvbj1cImNoZWNrXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+U2F2ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXMtcHVsbGVkLXJpZ2h0XCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJzd2l0Y2hSb3VuZGVkU3VjY2Vzc1wiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJzd2l0Y2hSb3VuZGVkU3VjY2Vzc1wiIGNsYXNzPVwic3dpdGNoIGlzLXJvdW5kZWQgaXMtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN3aXRjaFJvdW5kZWRTdWNjZXNzXCI+Q29tcGxldGVkPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgICAgICAgICAgICAgICAgLy8gPCEtLTxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPi0tPlxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcE11dGF0aW9ucyB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJidWxtYS10b2FzdFwiXG5pbXBvcnQgXCJidWxtYS1zd2l0Y2hcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi9heGlvc1wiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL1Rva2VuXCI7XG5pbXBvcnQgVG9rZW5CbG9jayBmcm9tIFwiLi9Ub2tlbkJsb2NrXCI7XG5pbXBvcnQgVG9rZW5NYW5hZ2VyIGZyb20gXCIuL3Rva2VuLW1hbmFnZXJcIjtcbmltcG9ydCBFeHBvcnQgZnJvbSBcIi4vRXhwb3J0LnZ1ZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJBbm5vdGF0aW9uUGFnZVwiLFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG06IHt9LFxuICAgICAgY3VycmVudFNlbnRlbmNlOiB7fSxcbiAgICB9O1xuICB9LFxuICBwcm9wczogWyd0aXRsZScsJ29sZHRtJ10sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBUb2tlbixcbiAgICBUb2tlbkJsb2NrLFxuICAgIEV4cG9ydCxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBTdGF0ZShbXCJpbnB1dFNlbnRlbmNlc1wiLCBcImNsYXNzZXNcIiwgXCJhbm5vdGF0aW9uc1wiLCBcImN1cnJlbnRDbGFzc1wiLCBcImN1cnJlbnRCbG9ja1wiLCBcInVuc2F2ZWRXb3JrXCJdKSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBpbnB1dFNlbnRlbmNlcygpIHtcbiAgICAgIHRoaXMudG9rZW5pemVDdXJyZW50U2VudGVuY2UoKTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLm9sZHRtLmxlbmd0aClcbiAgICBpZih0aGlzLm9sZHRtLmxlbmd0aCkge1xuICAgICAgdGhpcy50bSA9IG5ldyBUb2tlbk1hbmFnZXIoW10sSlNPTi5wYXJzZSh0aGlzLm9sZHRtKSlcbiAgICB9IGVsc2UgeyBcbiAgICAgIHRoaXMudG9rZW5pemVDdXJyZW50U2VudGVuY2UoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLnNlbGVjdFRva2Vucyk7XG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4gKHRoaXMudW5zYXZlZFdvcmsgPyB0cnVlIDogbnVsbCk7XG5cbiAgfSxcbiAgYmVmb3JlVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLnNlbGVjdFRva2Vucyk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBNdXRhdGlvbnMoW1wic2V0Q3VycmVudEJsb2NrXCIsIFwic2V0VW5zYXZlZFdvcmtcIl0pLFxuICAgIHRva2VuaXplQ3VycmVudFNlbnRlbmNlKCkge1xuICAgICAgdGhpcy5jdXJyZW50U2VudGVuY2UgPSB0aGlzLmlucHV0U2VudGVuY2VzWzBdO1xuXG4gICAgICBsZXQgd29yZHMgPSB0aGlzLmN1cnJlbnRTZW50ZW5jZVtcInRleHRcIl0uc3BsaXQoXCIgXCIpO1xuICAgICAgbGV0IHRva2VucyA9IFtdO1xuICAgICAgbGV0IGxhc3RfaW5kZXggPSAwO1xuICAgICAgZm9yKGxldCBpPTA7IGk8d29yZHMubGVuZ3RoOyBpKz0xKXtcbiAgICAgICAgICBsZXQgdG9rZW4gPSBbXTtcbiAgICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLmN1cnJlbnRTZW50ZW5jZVtcInRleHRcIl0uaW5kZXhPZih3b3Jkc1tpXSxsYXN0X2luZGV4KTtcbiAgICAgICAgICBsZXQgZW5kID0gc3RhcnQrd29yZHNbaV0ubGVuZ3RoOyBcbiAgICAgICAgICB0b2tlbi5wdXNoKHN0YXJ0KTtcbiAgICAgICAgICB0b2tlbi5wdXNoKGVuZCk7XG4gICAgICAgICAgdG9rZW4ucHVzaCh3b3Jkc1tpXSk7XG5cbiAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG5cbiAgICAgICAgICBsYXN0X2luZGV4ID0gZW5kO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRtID0gbmV3IFRva2VuTWFuYWdlcih0b2tlbnMpO1xuICAgIH0sXG4gICAgc2VsZWN0VG9rZW5zKCkge1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNsYXNzZXMpO1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQgPT09IHNlbGVjdGlvbi5mb2N1c09mZnNldCAmJlxuICAgICAgICBzZWxlY3Rpb24uYW5jaG9yTm9kZSA9PT0gc2VsZWN0aW9uLmZvY3VzTm9kZVxuICAgICAgKVxuICAgICAgICByZXR1cm47XG4gICAgICBsZXQgc3RhcnRJZHgsIGVuZElkeDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0YXJ0SWR4ID0gcGFyc2VJbnQoXG4gICAgICAgICAgc2VsZWN0aW9uLmFuY2hvck5vZGUucGFyZW50RWxlbWVudC5pZC5yZXBsYWNlKFwidFwiLCBcIlwiKVxuICAgICAgICApO1xuICAgICAgICBlbmRJZHggPSBwYXJzZUludChcbiAgICAgICAgICBzZWxlY3Rpb24uZm9jdXNOb2RlLnBhcmVudEVsZW1lbnQuaWQucmVwbGFjZShcInRcIiwgXCJcIilcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCB0ZXh0IHdlcmUgbm90IHRva2Vuc1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGNiID0gdGhpcy50bS5hZGROZXdCbG9jayhzdGFydElkeCwgZW5kSWR4LCB0aGlzLmN1cnJlbnRDbGFzcyk7XG4gICAgICBpZihjYikge1xuICAgICAgICB0aGlzLnNldEN1cnJlbnRCbG9jayhjYik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic1wiKVxuICAgICAgICBjb25zb2xlLmxvZyhjYilcbiAgICAgICAgY29uc29sZS5sb2coe3N0YXJ0SWR4LGVuZElkeH0pXG4gICAgICB9XG4gICAgICBzZWxlY3Rpb24uZW1wdHkoKTtcbiAgICAgIHRoaXMuc2V0VW5zYXZlZFdvcmsodHJ1ZSk7XG4gICAgfSxcbiAgICBvblJlbW92ZUJsb2NrKGRhdGEpIHtcbiAgICAgIHRoaXMudG0ucmVtb3ZlQmxvY2soZGF0YS5zdGFydCxkYXRhLmVuZCk7XG4gICAgICB0aGlzLnNldEN1cnJlbnRCbG9jayhuZXcgT2JqZWN0KCkpO1xuICAgICAgdGhpcy5zZXRVbnNhdmVkV29yayh0cnVlKTtcbiAgICB9LFxuICAgIHJlc2V0QmxvY2tzKCkge1xuICAgICAgaWYoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZXNldCBBTEwgdGhlIGFubm90YXRpb25zPyBUaGUgdW5zYXZlZCB3b3JrIHdpbGwgYmUgbG9zdFwiKSlcbiAgICAgIHRoaXMudG0ucmVzZXRCbG9ja3MoKTtcbiAgICAgIHRoaXMuc2V0VW5zYXZlZFdvcmsodHJ1ZSk7XG4gICAgfSxcbiAgICBzYXZlVGFncygpIHtcbiAgICAgIC8vcmV0cmlldmUgQ1NSRl9UT0tFTlxuICAgICAgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcbiAgICAgIGxldCBjb29raWVWYWx1ZSA9IG51bGw7XG4gICAgICBpZiAoZG9jdW1lbnQuY29va2llICYmIGRvY3VtZW50LmNvb2tpZSAhPT0gJycpIHtcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvb2tpZSA9IGNvb2tpZXNbaV0udHJpbSgpO1xuICAgICAgICAgICAgICAvLyBEb2VzIHRoaXMgY29va2llIHN0cmluZyBiZWdpbiB3aXRoIHRoZSBuYW1lIHdlIHdhbnQ/XG4gICAgICAgICAgICAgIGlmIChjb29raWUuc3Vic3RyaW5nKDAsIG5hbWUubGVuZ3RoICsgMSkgPT09IChuYW1lICsgJz0nKSkge1xuICAgICAgICAgICAgICAgICAgY29va2llVmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhuYW1lLmxlbmd0aCArIDEpKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29raWVWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNzcmZ0b2tlbiA9IGdldENvb2tpZSgnY3NyZnRva2VuJyk7IFxuICAgICAgY29uc3QgdGFnZ2luZ19pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9J2lkLXRhZ2dpbmcnXVwiKS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFxuICAgICAgICAgIFwiL2FwaS91cGRhdGUvXCIrdGFnZ2luZ19pZCwgXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy50bSksXG4gICAgICAgICAgeyAgXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIFwiWC1DU1JGVG9rZW5cIjogY3NyZnRva2VuLFxuICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgLy8gXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCJcbiAgICAgICAgICB9fVxuICAgICAgICApXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIHRvYXN0KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6J0Fubm90YXRpb25zIHNhdmVkJyxcbiAgICAgICAgICAgIHR5cGU6J2lzLXN1Y2Nlc3MnLFxuICAgICAgICAgICAgZGlzbWlzc2libGU6J3RydWUnLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOid0cnVlJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOjIwMDAsXG4gICAgICAgICAgICBwb3NpdGlvbjonYm90dG9tLXJpZ2h0J1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRoaXMuc2V0VW5zYXZlZFdvcmsoZmFsc2UpXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuI2VkaXRvciB7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbn1cbi5yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OjEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6MHB4O1xufVxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBNUdBO0FBckNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=script&lang=js\n");

/***/ })

})