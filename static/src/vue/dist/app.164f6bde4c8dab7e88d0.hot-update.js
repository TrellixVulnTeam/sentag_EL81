webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/AnnotationPage.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.url.js */ \"./node_modules/core-js/modules/web.url.js\");\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bulma-toast */ \"./node_modules/bulma-toast/dist/bulma-toast.min.js\");\n/* harmony import */ var bulma_toast__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bulma_toast__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../axios */ \"./src/axios.js\");\n/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Token */ \"./src/components/Token.vue\");\n/* harmony import */ var _TokenBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TokenBlock */ \"./src/components/TokenBlock.vue\");\n/* harmony import */ var _token_manager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./token-manager */ \"./src/components/token-manager.js\");\n/* harmony import */ var _Export_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Export.vue */ \"./src/components/Export.vue\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"AnnotationPage\",\n  data: function data() {\n    return {\n      tm: {},\n      currentSentence: {}\n    };\n  },\n  props: ['title', 'oldtm'],\n  components: {\n    Token: _Token__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n    TokenBlock: _TokenBlock__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n    Export: _Export_vue__WEBPACK_IMPORTED_MODULE_15__[\"default\"]\n  },\n  computed: Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__[\"mapState\"])([\"inputSentences\", \"classes\", \"annotations\", \"currentClass\", \"currentBlock\"])),\n  watch: {\n    inputSentences: function inputSentences() {\n      this.tokenizeCurrentSentence();\n    }\n  },\n  created: function created() {\n    //console.log(this.oldtm.length)\n    if (this.oldtm.length) {\n      this.tm = new _token_manager__WEBPACK_IMPORTED_MODULE_14__[\"default\"]([], JSON.parse(this.oldtm)); // this.$store.commit('setCurrentBlock',this.tm.tokens.filter((t)=>(t.type===\"token-block\"))[0]);\n    } else {\n      this.tokenizeCurrentSentence();\n    }\n\n    document.addEventListener(\"mouseup\", this.selectTokens);\n  },\n  beforeUnmount: function beforeUnmount() {\n    document.removeEventListener(\"mouseup\", this.selectTokens);\n  },\n  methods: Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_9__[\"mapMutations\"])([\"setCurrentBlock\"])), {}, {\n    tokenizeCurrentSentence: function tokenizeCurrentSentence() {\n      this.currentSentence = this.inputSentences[0];\n      var words = this.currentSentence[\"text\"].split(\" \");\n      var tokens = [];\n      var last_index = 0;\n\n      for (var i = 0; i < words.length; i += 1) {\n        var token = [];\n        var start = this.currentSentence[\"text\"].indexOf(words[i], last_index);\n        var end = start + words[i].length;\n        token.push(start);\n        token.push(end);\n        token.push(words[i]);\n        tokens.push(token);\n        last_index = end;\n      }\n\n      this.tm = new _token_manager__WEBPACK_IMPORTED_MODULE_14__[\"default\"](tokens); //for each annotation in this.$store.annotations\n      //    this.tm.addNewBlock(annotation.startIdx, annotation.endIdx, annotation.class);\n    },\n    selectTokens: function selectTokens() {\n      //console.log(this.classes);\n      var selection = document.getSelection();\n      if (selection.anchorOffset === selection.focusOffset && selection.anchorNode === selection.focusNode) return;\n      var startIdx, endIdx;\n\n      try {\n        startIdx = parseInt(selection.anchorNode.parentElement.id.replace(\"t\", \"\"));\n        endIdx = parseInt(selection.focusNode.parentElement.id.replace(\"t\", \"\"));\n      } catch (e) {\n        console.log(\"selected text were not tokens\");\n        return;\n      }\n\n      var cb = this.tm.addNewBlock(startIdx, endIdx, this.currentClass);\n\n      if (cb) {\n        this.$store.commit('setCurrentBlock', cb);\n      }\n\n      console.log(\"cb\"); //console.log(this.currentBlock)\n\n      selection.empty();\n    },\n    onRemoveBlock: function onRemoveBlock(data) {\n      this.tm.removeBlock(data.start, data.end); // this.setCurrentBlock(new Object());\n      // console.log(\"removed!!\")\n      // console.log(this.currentBlock)\n    },\n    resetBlocks: function resetBlocks() {\n      if (confirm(\"Are you sure you want to reset ALL the annotations? The unsaved work will be lost\")) this.tm.resetBlocks();\n    },\n    saveTags: function saveTags() {\n      var tmjson = JSON.stringify(this.tm);\n      console.log(tmjson); // ( PROOF OF WORK\n      // this.tm = new TokenManager({}, JSON.parse(tmjson));\n      // console.log(this.tm); )\n      //retrieve sentenza number\n\n      var url = new URL(location.href)['pathname'];\n      var numero_sentenza = url[url.length - 2]; //retrieve CSRF_TOKEN\n\n      function getCookie(name) {\n        var cookieValue = null;\n\n        if (document.cookie && document.cookie !== '') {\n          var cookies = document.cookie.split(';');\n\n          for (var i = 0; i < cookies.length; i++) {\n            var cookie = cookies[i].trim(); // Does this cookie string begin with the name we want?\n\n            if (cookie.substring(0, name.length + 1) === name + '=') {\n              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n              break;\n            }\n          }\n        }\n\n        return cookieValue;\n      }\n\n      var csrftoken = getCookie('csrftoken');\n      _axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].post(\"/api/update/\" + numero_sentenza, JSON.stringify(this.tm), {\n        headers: {\n          \"X-CSRFToken\": csrftoken,\n          \"content-type\": \"application/json\" // \"Access-Control-Allow-Origin\": \"*\"\n\n        }\n      }).then(Object(bulma_toast__WEBPACK_IMPORTED_MODULE_10__[\"toast\"])({\n        message: 'Annotations saved',\n        type: 'is-success',\n        dismissible: 'true',\n        pauseOnHover: 'true',\n        duration: 2000,\n        position: 'bottom-right'\n      })).catch(function (e) {\n        console.log(e);\n      });\n    }\n  })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/ZWUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLWRlc2t0b3BcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgPHN0cm9uZz5UYWdnYSB7e3RpdGxlfX08L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiZWRpdG9yXCI+XG4gICAgICAgICAgICA8Y29tcG9uZW50XG4gICAgICAgICAgICAgIDppcz1cInQudHlwZSA9PT0gJ3Rva2VuJyA/ICdUb2tlbicgOiAnVG9rZW5CbG9jaydcIlxuICAgICAgICAgICAgICA6aWQ9XCIndCcgKyB0LnN0YXJ0XCJcbiAgICAgICAgICAgICAgdi1mb3I9XCJ0IGluIHRtLnRva2Vuc1wiXG4gICAgICAgICAgICAgIDp0b2tlbj1cInRcIlxuICAgICAgICAgICAgICA6a2V5PVwidC5zdGFydFwiXG4gICAgICAgICAgICAgIDpiYWNrZ3JvdW5kQ29sb3I9XCJ0LmJhY2tncm91bmRDb2xvclwiXG4gICAgICAgICAgICAgIDppc0N1cnJlbnQ9XCJ0LmlkID09PSBjdXJyZW50QmxvY2suaWRcIlxuICAgICAgICAgICAgICBAcmVtb3ZlLWJsb2NrPVwic2V0Q3VycmVudEJsb2NrKHt9KVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJsb2NrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGlzLWdyb3VwZWRcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWRhbmdlciBpcy1vdXRsaW5lZFwiIEBjbGljaz1cInJlc2V0QmxvY2tzXCI+XG4gICAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1saW5rXCIgQGNsaWNrPVwic2F2ZVRhZ3NcIj5TYWx2YTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPGV4cG9ydC8+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBNdXRhdGlvbnMgfSBmcm9tIFwidnVleFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwiYnVsbWEtdG9hc3RcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi9heGlvc1wiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL1Rva2VuXCI7XG5pbXBvcnQgVG9rZW5CbG9jayBmcm9tIFwiLi9Ub2tlbkJsb2NrXCI7XG5pbXBvcnQgVG9rZW5NYW5hZ2VyIGZyb20gXCIuL3Rva2VuLW1hbmFnZXJcIjtcbmltcG9ydCBFeHBvcnQgZnJvbSBcIi4vRXhwb3J0LnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQW5ub3RhdGlvblBhZ2VcIixcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRtOiB7fSxcbiAgICAgIGN1cnJlbnRTZW50ZW5jZToge30sXG4gICAgfTtcbiAgfSxcbiAgcHJvcHM6IFsndGl0bGUnLCdvbGR0bSddLFxuICBjb21wb25lbnRzOiB7XG4gICAgVG9rZW4sXG4gICAgVG9rZW5CbG9jayxcbiAgICBFeHBvcnQsXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwU3RhdGUoW1wiaW5wdXRTZW50ZW5jZXNcIiwgXCJjbGFzc2VzXCIsIFwiYW5ub3RhdGlvbnNcIiwgXCJjdXJyZW50Q2xhc3NcIiwgXCJjdXJyZW50QmxvY2tcIl0pLFxuICB9LFxuICB3YXRjaDoge1xuICAgIGlucHV0U2VudGVuY2VzKCkge1xuICAgICAgdGhpcy50b2tlbml6ZUN1cnJlbnRTZW50ZW5jZSgpO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMub2xkdG0ubGVuZ3RoKVxuICAgIGlmKHRoaXMub2xkdG0ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRtID0gbmV3IFRva2VuTWFuYWdlcihbXSxKU09OLnBhcnNlKHRoaXMub2xkdG0pKVxuICAgICAgLy8gdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRDdXJyZW50QmxvY2snLHRoaXMudG0udG9rZW5zLmZpbHRlcigodCk9Pih0LnR5cGU9PT1cInRva2VuLWJsb2NrXCIpKVswXSk7XG4gICAgfSBlbHNlIHsgXG4gICAgICB0aGlzLnRva2VuaXplQ3VycmVudFNlbnRlbmNlKCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5zZWxlY3RUb2tlbnMpO1xuICB9LFxuICBiZWZvcmVVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuc2VsZWN0VG9rZW5zKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcE11dGF0aW9ucyhbXCJzZXRDdXJyZW50QmxvY2tcIl0pLFxuICAgIHRva2VuaXplQ3VycmVudFNlbnRlbmNlKCkge1xuICAgICAgdGhpcy5jdXJyZW50U2VudGVuY2UgPSB0aGlzLmlucHV0U2VudGVuY2VzWzBdO1xuXG4gICAgICBsZXQgd29yZHMgPSB0aGlzLmN1cnJlbnRTZW50ZW5jZVtcInRleHRcIl0uc3BsaXQoXCIgXCIpO1xuICAgICAgbGV0IHRva2VucyA9IFtdO1xuICAgICAgbGV0IGxhc3RfaW5kZXggPSAwO1xuICAgICAgZm9yKGxldCBpPTA7IGk8d29yZHMubGVuZ3RoOyBpKz0xKXtcbiAgICAgICAgICBsZXQgdG9rZW4gPSBbXTtcbiAgICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLmN1cnJlbnRTZW50ZW5jZVtcInRleHRcIl0uaW5kZXhPZih3b3Jkc1tpXSxsYXN0X2luZGV4KTtcbiAgICAgICAgICBsZXQgZW5kID0gc3RhcnQrd29yZHNbaV0ubGVuZ3RoOyBcbiAgICAgICAgICB0b2tlbi5wdXNoKHN0YXJ0KTtcbiAgICAgICAgICB0b2tlbi5wdXNoKGVuZCk7XG4gICAgICAgICAgdG9rZW4ucHVzaCh3b3Jkc1tpXSk7XG5cbiAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG5cbiAgICAgICAgICBsYXN0X2luZGV4ID0gZW5kO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRtID0gbmV3IFRva2VuTWFuYWdlcih0b2tlbnMpO1xuXG4gICAgICAvL2ZvciBlYWNoIGFubm90YXRpb24gaW4gdGhpcy4kc3RvcmUuYW5ub3RhdGlvbnNcbiAgICAgIC8vICAgIHRoaXMudG0uYWRkTmV3QmxvY2soYW5ub3RhdGlvbi5zdGFydElkeCwgYW5ub3RhdGlvbi5lbmRJZHgsIGFubm90YXRpb24uY2xhc3MpO1xuICAgIH0sXG4gICAgc2VsZWN0VG9rZW5zKCkge1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNsYXNzZXMpO1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQgPT09IHNlbGVjdGlvbi5mb2N1c09mZnNldCAmJlxuICAgICAgICBzZWxlY3Rpb24uYW5jaG9yTm9kZSA9PT0gc2VsZWN0aW9uLmZvY3VzTm9kZVxuICAgICAgKVxuICAgICAgICByZXR1cm47XG4gICAgICBsZXQgc3RhcnRJZHgsIGVuZElkeDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0YXJ0SWR4ID0gcGFyc2VJbnQoXG4gICAgICAgICAgc2VsZWN0aW9uLmFuY2hvck5vZGUucGFyZW50RWxlbWVudC5pZC5yZXBsYWNlKFwidFwiLCBcIlwiKVxuICAgICAgICApO1xuICAgICAgICBlbmRJZHggPSBwYXJzZUludChcbiAgICAgICAgICBzZWxlY3Rpb24uZm9jdXNOb2RlLnBhcmVudEVsZW1lbnQuaWQucmVwbGFjZShcInRcIiwgXCJcIilcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCB0ZXh0IHdlcmUgbm90IHRva2Vuc1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGNiID0gdGhpcy50bS5hZGROZXdCbG9jayhzdGFydElkeCwgZW5kSWR4LCB0aGlzLmN1cnJlbnRDbGFzcyk7XG4gICAgICBpZihjYikge1xuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldEN1cnJlbnRCbG9jaycsY2IpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJjYlwiKVxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRCbG9jaylcbiAgICAgIHNlbGVjdGlvbi5lbXB0eSgpO1xuICAgIH0sXG4gICAgb25SZW1vdmVCbG9jayhkYXRhKSB7XG4gICAgICB0aGlzLnRtLnJlbW92ZUJsb2NrKGRhdGEuc3RhcnQsZGF0YS5lbmQpO1xuICAgICAgLy8gdGhpcy5zZXRDdXJyZW50QmxvY2sobmV3IE9iamVjdCgpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVtb3ZlZCEhXCIpXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRCbG9jaylcbiAgICB9LFxuICAgIHJlc2V0QmxvY2tzKCkge1xuICAgICAgaWYoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZXNldCBBTEwgdGhlIGFubm90YXRpb25zPyBUaGUgdW5zYXZlZCB3b3JrIHdpbGwgYmUgbG9zdFwiKSlcbiAgICAgIHRoaXMudG0ucmVzZXRCbG9ja3MoKTtcbiAgICB9LFxuICAgIHNhdmVUYWdzKCkge1xuICAgICAgbGV0IHRtanNvbiA9IEpTT04uc3RyaW5naWZ5KHRoaXMudG0pO1xuICAgICAgY29uc29sZS5sb2codG1qc29uKTtcbiAgICAgIFxuICAgICAgLy8gKCBQUk9PRiBPRiBXT1JLXG4gICAgICAvLyB0aGlzLnRtID0gbmV3IFRva2VuTWFuYWdlcih7fSwgSlNPTi5wYXJzZSh0bWpzb24pKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudG0pOyApXG5cbiAgICAgIC8vcmV0cmlldmUgc2VudGVuemEgbnVtYmVyXG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpWydwYXRobmFtZSddO1xuICAgICAgY29uc3QgbnVtZXJvX3NlbnRlbnphID0gdXJsW3VybC5sZW5ndGgtMl1cblxuICAgICAgLy9yZXRyaWV2ZSBDU1JGX1RPS0VOXG4gICAgICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xuICAgICAgbGV0IGNvb2tpZVZhbHVlID0gbnVsbDtcbiAgICAgIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9PSAnJykge1xuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgY29va2llID0gY29va2llc1tpXS50cmltKCk7XG4gICAgICAgICAgICAgIC8vIERvZXMgdGhpcyBjb29raWUgc3RyaW5nIGJlZ2luIHdpdGggdGhlIG5hbWUgd2Ugd2FudD9cbiAgICAgICAgICAgICAgaWYgKGNvb2tpZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggKyAxKSA9PT0gKG5hbWUgKyAnPScpKSB7XG4gICAgICAgICAgICAgICAgICBjb29raWVWYWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKG5hbWUubGVuZ3RoICsgMSkpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb2tpZVZhbHVlO1xuICAgICAgfVxuICAgICAgY29uc3QgY3NyZnRva2VuID0gZ2V0Q29va2llKCdjc3JmdG9rZW4nKTsgXG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcbiAgICAgICAgICBcIi9hcGkvdXBkYXRlL1wiK251bWVyb19zZW50ZW56YSwgXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy50bSksXG4gICAgICAgICAgeyAgXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIFwiWC1DU1JGVG9rZW5cIjogY3NyZnRva2VuLFxuICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgLy8gXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCJcbiAgICAgICAgICB9fVxuICAgICAgICApXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIHRvYXN0KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6J0Fubm90YXRpb25zIHNhdmVkJyxcbiAgICAgICAgICAgIHR5cGU6J2lzLXN1Y2Nlc3MnLFxuICAgICAgICAgICAgZGlzbWlzc2libGU6J3RydWUnLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOid0cnVlJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOjIwMDAsXG4gICAgICAgICAgICBwb3NpdGlvbjonYm90dG9tLXJpZ2h0J1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuI2VkaXRvciB7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbn1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUF0SEE7QUFwQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=script&lang=js\n");

/***/ })

})