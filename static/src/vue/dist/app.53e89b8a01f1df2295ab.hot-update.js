webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=template&id=de507ce4":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/AnnotationPage.vue?vue&type=template&id=de507ce4 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"columns is-desktop\"\n};\nvar _hoisted_2 = {\n  class: \"column\"\n};\nvar _hoisted_3 = {\n  class: \"panel\"\n};\nvar _hoisted_4 = {\n  class: \"panel-heading\"\n};\nvar _hoisted_5 = {\n  class: \"panel-block\"\n};\nvar _hoisted_6 = {\n  id: \"editor\"\n};\nvar _hoisted_7 = {\n  class: \"panel-block\"\n};\nvar _hoisted_8 = {\n  class: \"field is-grouped\"\n};\nvar _hoisted_9 = {\n  class: \"control\"\n};\nvar _hoisted_10 = {\n  class: \"icon is-small\"\n};\n\nvar _hoisted_11 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", null, \"Reset\", -1\n/* HOISTED */\n);\n\nvar _hoisted_12 = {\n  class: \"control\"\n};\nvar _hoisted_13 = {\n  class: \"icon is-small\"\n};\n\nvar _hoisted_14 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", null, \"Save\", -1\n/* HOISTED */\n);\n\nvar _hoisted_15 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"p\", {\n  class: \"control\"\n}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\")], -1\n/* HOISTED */\n);\n\nvar _hoisted_16 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n  class: \"field\"\n}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"input\", {\n  id: \"switchRoundedDefault\",\n  type: \"checkbox\",\n  name: \"switchRoundedDefault\",\n  class: \"switch is-rounded\",\n  checked: \"checked\"\n}), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"label\", {\n  for: \"switchRoundedDefault\"\n}, \"Mark as completed\")], -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_font_awesome_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"font-awesome-icon\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"p\", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"strong\", null, \"Tag \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.title), 1\n  /* TEXT */\n  )]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_6, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])(_ctx.tm.tokens, function (t) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveDynamicComponent\"])(t.type === 'token' ? 'Token' : 'TokenBlock'), {\n      id: 't' + t.start,\n      token: t,\n      key: t.start,\n      backgroundColor: t.backgroundColor,\n      isCurrent: t.id === _ctx.currentBlock.id,\n      onRemoveBlock: $options.onRemoveBlock\n    }, null, 8\n    /* PROPS */\n    , [\"id\", \"token\", \"backgroundColor\", \"isCurrent\", \"onRemoveBlock\"]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_8, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"p\", _hoisted_9, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"button\", {\n    class: \"button is-danger is-outlined\",\n    onClick: _cache[1] || (_cache[1] = function () {\n      return $options.resetBlocks && $options.resetBlocks.apply($options, arguments);\n    })\n  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_font_awesome_icon, {\n    icon: \"undo\"\n  })]), _hoisted_11])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"p\", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"button\", {\n    class: \"button is-link\",\n    onClick: _cache[2] || (_cache[2] = function () {\n      return $options.saveTags && $options.saveTags.apply($options, arguments);\n    })\n  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_font_awesome_icon, {\n    icon: \"check\"\n  })]), _hoisted_14])]), _hoisted_15, _hoisted_16])])])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGU1MDdjZTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/ZWUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLWRlc2t0b3BcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgPHN0cm9uZz5UYWcge3t0aXRsZX19PC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJsb2NrXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImVkaXRvclwiPlxuICAgICAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgICAgICA6aXM9XCJ0LnR5cGUgPT09ICd0b2tlbicgPyAnVG9rZW4nIDogJ1Rva2VuQmxvY2snXCJcbiAgICAgICAgICAgICAgOmlkPVwiJ3QnICsgdC5zdGFydFwiXG4gICAgICAgICAgICAgIHYtZm9yPVwidCBpbiB0bS50b2tlbnNcIlxuICAgICAgICAgICAgICA6dG9rZW49XCJ0XCJcbiAgICAgICAgICAgICAgOmtleT1cInQuc3RhcnRcIlxuICAgICAgICAgICAgICA6YmFja2dyb3VuZENvbG9yPVwidC5iYWNrZ3JvdW5kQ29sb3JcIlxuICAgICAgICAgICAgICA6aXNDdXJyZW50PVwidC5pZCA9PT0gY3VycmVudEJsb2NrLmlkXCJcbiAgICAgICAgICAgICAgQHJlbW92ZS1ibG9jaz1cIm9uUmVtb3ZlQmxvY2tcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ncm91cGVkXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1kYW5nZXIgaXMtb3V0bGluZWRcIiBAY2xpY2s9XCJyZXNldEJsb2Nrc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIGljb249XCJ1bmRvXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+UmVzZXQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtbGlua1wiIEBjbGljaz1cInNhdmVUYWdzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICA8Zm9udC1hd2Vzb21lLWljb24gaWNvbj1cImNoZWNrXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+U2F2ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gIDxpbnB1dCBpZD1cInN3aXRjaFJvdW5kZWREZWZhdWx0XCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInN3aXRjaFJvdW5kZWREZWZhdWx0XCIgY2xhc3M9XCJzd2l0Y2ggaXMtcm91bmRlZFwiIGNoZWNrZWQ9XCJjaGVja2VkXCI+XG4gIDxsYWJlbCBmb3I9XCJzd2l0Y2hSb3VuZGVkRGVmYXVsdFwiPk1hcmsgYXMgY29tcGxldGVkPC9sYWJlbD5cbjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAvLyA8IS0tPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+LS0+XG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwTXV0YXRpb25zIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcImJ1bG1hLXRvYXN0XCJcbmltcG9ydCBcImJ1bG1hLXN3aXRjaFwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uL2F4aW9zXCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vVG9rZW5cIjtcbmltcG9ydCBUb2tlbkJsb2NrIGZyb20gXCIuL1Rva2VuQmxvY2tcIjtcbmltcG9ydCBUb2tlbk1hbmFnZXIgZnJvbSBcIi4vdG9rZW4tbWFuYWdlclwiO1xuaW1wb3J0IEV4cG9ydCBmcm9tIFwiLi9FeHBvcnQudnVlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkFubm90YXRpb25QYWdlXCIsXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0bToge30sXG4gICAgICBjdXJyZW50U2VudGVuY2U6IHt9LFxuICAgIH07XG4gIH0sXG4gIHByb3BzOiBbJ3RpdGxlJywnb2xkdG0nXSxcbiAgY29tcG9uZW50czoge1xuICAgIFRva2VuLFxuICAgIFRva2VuQmxvY2ssXG4gICAgRXhwb3J0LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcFN0YXRlKFtcImlucHV0U2VudGVuY2VzXCIsIFwiY2xhc3Nlc1wiLCBcImFubm90YXRpb25zXCIsIFwiY3VycmVudENsYXNzXCIsIFwiY3VycmVudEJsb2NrXCIsIFwidW5zYXZlZFdvcmtcIl0pLFxuICB9LFxuICB3YXRjaDoge1xuICAgIGlucHV0U2VudGVuY2VzKCkge1xuICAgICAgdGhpcy50b2tlbml6ZUN1cnJlbnRTZW50ZW5jZSgpO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMub2xkdG0ubGVuZ3RoKVxuICAgIGlmKHRoaXMub2xkdG0ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRtID0gbmV3IFRva2VuTWFuYWdlcihbXSxKU09OLnBhcnNlKHRoaXMub2xkdG0pKVxuICAgIH0gZWxzZSB7IFxuICAgICAgdGhpcy50b2tlbml6ZUN1cnJlbnRTZW50ZW5jZSgpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuc2VsZWN0VG9rZW5zKTtcbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKSA9PiAodGhpcy51bnNhdmVkV29yayA/IHRydWUgOiBudWxsKTtcblxuICB9LFxuICBiZWZvcmVVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuc2VsZWN0VG9rZW5zKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcE11dGF0aW9ucyhbXCJzZXRDdXJyZW50QmxvY2tcIiwgXCJzZXRVbnNhdmVkV29ya1wiXSksXG4gICAgdG9rZW5pemVDdXJyZW50U2VudGVuY2UoKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTZW50ZW5jZSA9IHRoaXMuaW5wdXRTZW50ZW5jZXNbMF07XG5cbiAgICAgIGxldCB3b3JkcyA9IHRoaXMuY3VycmVudFNlbnRlbmNlW1widGV4dFwiXS5zcGxpdChcIiBcIik7XG4gICAgICBsZXQgdG9rZW5zID0gW107XG4gICAgICBsZXQgbGFzdF9pbmRleCA9IDA7XG4gICAgICBmb3IobGV0IGk9MDsgaTx3b3Jkcy5sZW5ndGg7IGkrPTEpe1xuICAgICAgICAgIGxldCB0b2tlbiA9IFtdO1xuICAgICAgICAgIGxldCBzdGFydCA9IHRoaXMuY3VycmVudFNlbnRlbmNlW1widGV4dFwiXS5pbmRleE9mKHdvcmRzW2ldLGxhc3RfaW5kZXgpO1xuICAgICAgICAgIGxldCBlbmQgPSBzdGFydCt3b3Jkc1tpXS5sZW5ndGg7IFxuICAgICAgICAgIHRva2VuLnB1c2goc3RhcnQpO1xuICAgICAgICAgIHRva2VuLnB1c2goZW5kKTtcbiAgICAgICAgICB0b2tlbi5wdXNoKHdvcmRzW2ldKTtcblxuICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcblxuICAgICAgICAgIGxhc3RfaW5kZXggPSBlbmQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudG0gPSBuZXcgVG9rZW5NYW5hZ2VyKHRva2Vucyk7XG4gICAgfSxcbiAgICBzZWxlY3RUb2tlbnMoKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuY2xhc3Nlcyk7XG4gICAgICBsZXQgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgc2VsZWN0aW9uLmFuY2hvck9mZnNldCA9PT0gc2VsZWN0aW9uLmZvY3VzT2Zmc2V0ICYmXG4gICAgICAgIHNlbGVjdGlvbi5hbmNob3JOb2RlID09PSBzZWxlY3Rpb24uZm9jdXNOb2RlXG4gICAgICApXG4gICAgICAgIHJldHVybjtcbiAgICAgIGxldCBzdGFydElkeCwgZW5kSWR4O1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RhcnRJZHggPSBwYXJzZUludChcbiAgICAgICAgICBzZWxlY3Rpb24uYW5jaG9yTm9kZS5wYXJlbnRFbGVtZW50LmlkLnJlcGxhY2UoXCJ0XCIsIFwiXCIpXG4gICAgICAgICk7XG4gICAgICAgIGVuZElkeCA9IHBhcnNlSW50KFxuICAgICAgICAgIHNlbGVjdGlvbi5mb2N1c05vZGUucGFyZW50RWxlbWVudC5pZC5yZXBsYWNlKFwidFwiLCBcIlwiKVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkIHRleHQgd2VyZSBub3QgdG9rZW5zXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgY2IgPSB0aGlzLnRtLmFkZE5ld0Jsb2NrKHN0YXJ0SWR4LCBlbmRJZHgsIHRoaXMuY3VycmVudENsYXNzKTtcbiAgICAgIGlmKGNiKSB7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudEJsb2NrKGNiKTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdGlvbi5lbXB0eSgpO1xuICAgICAgdGhpcy5zZXRVbnNhdmVkV29yayh0cnVlKTtcbiAgICB9LFxuICAgIG9uUmVtb3ZlQmxvY2soZGF0YSkge1xuICAgICAgdGhpcy50bS5yZW1vdmVCbG9jayhkYXRhLnN0YXJ0LGRhdGEuZW5kKTtcbiAgICAgIHRoaXMuc2V0Q3VycmVudEJsb2NrKG5ldyBPYmplY3QoKSk7XG4gICAgICB0aGlzLnNldFVuc2F2ZWRXb3JrKHRydWUpO1xuICAgIH0sXG4gICAgcmVzZXRCbG9ja3MoKSB7XG4gICAgICBpZihjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc2V0IEFMTCB0aGUgYW5ub3RhdGlvbnM/IFRoZSB1bnNhdmVkIHdvcmsgd2lsbCBiZSBsb3N0XCIpKVxuICAgICAgdGhpcy50bS5yZXNldEJsb2NrcygpO1xuICAgICAgdGhpcy5zZXRVbnNhdmVkV29yayh0cnVlKTtcbiAgICB9LFxuICAgIHNhdmVUYWdzKCkge1xuICAgICAgLy9yZXRyaWV2ZSBDU1JGX1RPS0VOXG4gICAgICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xuICAgICAgbGV0IGNvb2tpZVZhbHVlID0gbnVsbDtcbiAgICAgIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9PSAnJykge1xuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgY29va2llID0gY29va2llc1tpXS50cmltKCk7XG4gICAgICAgICAgICAgIC8vIERvZXMgdGhpcyBjb29raWUgc3RyaW5nIGJlZ2luIHdpdGggdGhlIG5hbWUgd2Ugd2FudD9cbiAgICAgICAgICAgICAgaWYgKGNvb2tpZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggKyAxKSA9PT0gKG5hbWUgKyAnPScpKSB7XG4gICAgICAgICAgICAgICAgICBjb29raWVWYWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKG5hbWUubGVuZ3RoICsgMSkpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb2tpZVZhbHVlO1xuICAgICAgfVxuICAgICAgY29uc3QgY3NyZnRva2VuID0gZ2V0Q29va2llKCdjc3JmdG9rZW4nKTsgXG4gICAgICBjb25zdCB0YWdnaW5nX2lkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1ldGFbbmFtZT0naWQtdGFnZ2luZyddXCIpLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXG4gICAgICAgICAgXCIvYXBpL3VwZGF0ZS9cIit0YWdnaW5nX2lkLCBcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnRtKSxcbiAgICAgICAgICB7ICBcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXCJYLUNTUkZUb2tlblwiOiBjc3JmdG9rZW4sXG4gICAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAvLyBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIlxuICAgICAgICAgIH19XG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgdG9hc3Qoe1xuICAgICAgICAgICAgbWVzc2FnZTonQW5ub3RhdGlvbnMgc2F2ZWQnLFxuICAgICAgICAgICAgdHlwZTonaXMtc3VjY2VzcycsXG4gICAgICAgICAgICBkaXNtaXNzaWJsZTondHJ1ZScsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6J3RydWUnLFxuICAgICAgICAgICAgZHVyYXRpb246MjAwMCxcbiAgICAgICAgICAgIHBvc2l0aW9uOidib3R0b20tcmlnaHQnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhpcy5zZXRVbnNhdmVkV29yayhmYWxzZSlcbiAgICAgICAgKVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4jZWRpdG9yIHtcbiAgcGFkZGluZzogMC4ycmVtO1xufVxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7O0FBQ0E7OztBQUNBOzs7QUFDQTs7O0FBR0E7OztBQUNBOzs7QUFhQTs7O0FBQ0E7OztBQUNBOzs7QUFFQTs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7OztBQUVBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTs7QUFGQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFGQTtBQUNBOzs7O0FBMUNBO0FBSUE7QUFBQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7O0FBREE7QUFTQTs7QUFUQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFIQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUhBO0FBQUE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=template&id=de507ce4\n");

/***/ })

})