webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=template&id=de507ce4":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/AnnotationPage.vue?vue&type=template&id=de507ce4 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"columns is-desktop\"\n};\nvar _hoisted_2 = {\n  class: \"column\"\n};\nvar _hoisted_3 = {\n  class: \"panel\"\n};\nvar _hoisted_4 = {\n  class: \"panel-heading\"\n};\nvar _hoisted_5 = {\n  class: \"panel-block\"\n};\nvar _hoisted_6 = {\n  id: \"editor\"\n};\nvar _hoisted_7 = {\n  class: \"panel-block is-justify-content-space-between\"\n};\nvar _hoisted_8 = {\n  class: \"field is-grouped is-pulled-left\"\n};\nvar _hoisted_9 = {\n  class: \"control\"\n};\nvar _hoisted_10 = {\n  class: \"icon is-small\"\n};\n\nvar _hoisted_11 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", null, \"Reset\", -1\n/* HOISTED */\n);\n\nvar _hoisted_12 = {\n  class: \"control\"\n};\nvar _hoisted_13 = {\n  class: \"icon is-small\"\n};\n\nvar _hoisted_14 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", null, \"Save\", -1\n/* HOISTED */\n);\n\nvar _hoisted_15 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", {\n  class: \"is-pulled-right\"\n}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"input\", {\n  id: \"switchRoundedSuccess\",\n  type: \"checkbox\",\n  name: \"switchRoundedSuccess\",\n  class: \"switch is-rounded is-success\"\n}), /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"label\", {\n  for: \"switchRoundedSuccess\"\n}, \"Completed\")], -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache) {\n  var _component_font_awesome_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"font-awesome-icon\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"p\", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"strong\", null, \"Tag \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(_ctx.title), 1\n  /* TEXT */\n  )]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_6, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])(_ctx.tm.tokens, function (t) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveDynamicComponent\"])(t.type === 'token' ? 'Token' : 'TokenBlock'), {\n      id: 't' + t.start,\n      token: t,\n      key: t.start,\n      backgroundColor: t.backgroundColor,\n      isCurrent: t.id === _ctx.currentBlock.id,\n      onRemoveBlock: _ctx.onRemoveBlock\n    }, null, 8\n    /* PROPS */\n    , [\"id\", \"token\", \"backgroundColor\", \"isCurrent\", \"onRemoveBlock\"]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"div\", _hoisted_8, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"p\", _hoisted_9, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"button\", {\n    class: \"button is-danger is-outlined\",\n    onClick: _cache[1] || (_cache[1] = function () {\n      return _ctx.resetBlocks && _ctx.resetBlocks.apply(_ctx, arguments);\n    })\n  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", _hoisted_10, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_font_awesome_icon, {\n    icon: \"undo\"\n  })]), _hoisted_11])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"p\", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"button\", {\n    class: \"button is-link\",\n    onClick: _cache[2] || (_cache[2] = function () {\n      return _ctx.saveTags && _ctx.saveTags.apply(_ctx, arguments);\n    })\n  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_font_awesome_icon, {\n    icon: \"check\"\n  })]), _hoisted_14])])]), _hoisted_15])])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGU1MDdjZTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/ZWUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLWRlc2t0b3BcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgPHN0cm9uZz5UYWcge3t0aXRsZX19PC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJsb2NrXCI+XG4gICAgICAgICAgPGRpdiBpZD1cImVkaXRvclwiPlxuICAgICAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgICAgICA6aXM9XCJ0LnR5cGUgPT09ICd0b2tlbicgPyAnVG9rZW4nIDogJ1Rva2VuQmxvY2snXCJcbiAgICAgICAgICAgICAgOmlkPVwiJ3QnICsgdC5zdGFydFwiXG4gICAgICAgICAgICAgIHYtZm9yPVwidCBpbiB0bS50b2tlbnNcIlxuICAgICAgICAgICAgICA6dG9rZW49XCJ0XCJcbiAgICAgICAgICAgICAgOmtleT1cInQuc3RhcnRcIlxuICAgICAgICAgICAgICA6YmFja2dyb3VuZENvbG9yPVwidC5iYWNrZ3JvdW5kQ29sb3JcIlxuICAgICAgICAgICAgICA6aXNDdXJyZW50PVwidC5pZCA9PT0gY3VycmVudEJsb2NrLmlkXCJcbiAgICAgICAgICAgICAgQHJlbW92ZS1ibG9jaz1cIm9uUmVtb3ZlQmxvY2tcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ibG9jayBpcy1qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZCBpcy1ncm91cGVkIGlzLXB1bGxlZC1sZWZ0XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1kYW5nZXIgaXMtb3V0bGluZWRcIiBAY2xpY2s9XCJyZXNldEJsb2Nrc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIGljb249XCJ1bmRvXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+UmVzZXQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtbGlua1wiIEBjbGljaz1cInNhdmVUYWdzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICA8Zm9udC1hd2Vzb21lLWljb24gaWNvbj1cImNoZWNrXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+U2F2ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXMtcHVsbGVkLXJpZ2h0XCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJzd2l0Y2hSb3VuZGVkU3VjY2Vzc1wiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJzd2l0Y2hSb3VuZGVkU3VjY2Vzc1wiIGNsYXNzPVwic3dpdGNoIGlzLXJvdW5kZWQgaXMtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInN3aXRjaFJvdW5kZWRTdWNjZXNzXCI+Q29tcGxldGVkPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgICAgICAgICAgICAgICAgLy8gPCEtLTxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPi0tPlxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcE11dGF0aW9ucyB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJidWxtYS10b2FzdFwiXG5pbXBvcnQgXCJidWxtYS1zd2l0Y2hcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCIuLi9heGlvc1wiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL1Rva2VuXCI7XG5pbXBvcnQgVG9rZW5CbG9jayBmcm9tIFwiLi9Ub2tlbkJsb2NrXCI7XG5pbXBvcnQgVG9rZW5NYW5hZ2VyIGZyb20gXCIuL3Rva2VuLW1hbmFnZXJcIjtcbmltcG9ydCBFeHBvcnQgZnJvbSBcIi4vRXhwb3J0LnZ1ZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJBbm5vdGF0aW9uUGFnZVwiLFxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG06IHt9LFxuICAgICAgY3VycmVudFNlbnRlbmNlOiB7fSxcbiAgICB9O1xuICB9LFxuICBwcm9wczogWyd0aXRsZScsJ29sZHRtJ10sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBUb2tlbixcbiAgICBUb2tlbkJsb2NrLFxuICAgIEV4cG9ydCxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBTdGF0ZShbXCJpbnB1dFNlbnRlbmNlc1wiLCBcImNsYXNzZXNcIiwgXCJhbm5vdGF0aW9uc1wiLCBcImN1cnJlbnRDbGFzc1wiLCBcImN1cnJlbnRCbG9ja1wiLCBcInVuc2F2ZWRXb3JrXCJdKSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBpbnB1dFNlbnRlbmNlcygpIHtcbiAgICAgIHRoaXMudG9rZW5pemVDdXJyZW50U2VudGVuY2UoKTtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLm9sZHRtLmxlbmd0aClcbiAgICBpZih0aGlzLm9sZHRtLmxlbmd0aCkge1xuICAgICAgdGhpcy50bSA9IG5ldyBUb2tlbk1hbmFnZXIoW10sSlNPTi5wYXJzZSh0aGlzLm9sZHRtKSlcbiAgICB9IGVsc2UgeyBcbiAgICAgIHRoaXMudG9rZW5pemVDdXJyZW50U2VudGVuY2UoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLnNlbGVjdFRva2Vucyk7XG4gICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4gKHRoaXMudW5zYXZlZFdvcmsgPyB0cnVlIDogbnVsbCk7XG5cbiAgfSxcbiAgYmVmb3JlVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLnNlbGVjdFRva2Vucyk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBNdXRhdGlvbnMoW1wic2V0Q3VycmVudEJsb2NrXCIsIFwic2V0VW5zYXZlZFdvcmtcIl0pLFxuICAgIHRva2VuaXplQ3VycmVudFNlbnRlbmNlKCkge1xuICAgICAgdGhpcy5jdXJyZW50U2VudGVuY2UgPSB0aGlzLmlucHV0U2VudGVuY2VzWzBdO1xuXG4gICAgICBsZXQgd29yZHMgPSB0aGlzLmN1cnJlbnRTZW50ZW5jZVtcInRleHRcIl0uc3BsaXQoXCIgXCIpO1xuICAgICAgbGV0IHRva2VucyA9IFtdO1xuICAgICAgbGV0IGxhc3RfaW5kZXggPSAwO1xuICAgICAgZm9yKGxldCBpPTA7IGk8d29yZHMubGVuZ3RoOyBpKz0xKXtcbiAgICAgICAgICBsZXQgdG9rZW4gPSBbXTtcbiAgICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLmN1cnJlbnRTZW50ZW5jZVtcInRleHRcIl0uaW5kZXhPZih3b3Jkc1tpXSxsYXN0X2luZGV4KTtcbiAgICAgICAgICBsZXQgZW5kID0gc3RhcnQrd29yZHNbaV0ubGVuZ3RoOyBcbiAgICAgICAgICB0b2tlbi5wdXNoKHN0YXJ0KTtcbiAgICAgICAgICB0b2tlbi5wdXNoKGVuZCk7XG4gICAgICAgICAgdG9rZW4ucHVzaCh3b3Jkc1tpXSk7XG5cbiAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG5cbiAgICAgICAgICBsYXN0X2luZGV4ID0gZW5kO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRtID0gbmV3IFRva2VuTWFuYWdlcih0b2tlbnMpO1xuICAgIH0sXG4gICAgc2VsZWN0VG9rZW5zKCkge1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmNsYXNzZXMpO1xuICAgICAgbGV0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmdldFNlbGVjdGlvbigpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHNlbGVjdGlvbi5hbmNob3JPZmZzZXQgPT09IHNlbGVjdGlvbi5mb2N1c09mZnNldCAmJlxuICAgICAgICBzZWxlY3Rpb24uYW5jaG9yTm9kZSA9PT0gc2VsZWN0aW9uLmZvY3VzTm9kZVxuICAgICAgKVxuICAgICAgICByZXR1cm47XG4gICAgICBsZXQgc3RhcnRJZHgsIGVuZElkeDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0YXJ0SWR4ID0gcGFyc2VJbnQoXG4gICAgICAgICAgc2VsZWN0aW9uLmFuY2hvck5vZGUucGFyZW50RWxlbWVudC5pZC5yZXBsYWNlKFwidFwiLCBcIlwiKVxuICAgICAgICApO1xuICAgICAgICBlbmRJZHggPSBwYXJzZUludChcbiAgICAgICAgICBzZWxlY3Rpb24uZm9jdXNOb2RlLnBhcmVudEVsZW1lbnQuaWQucmVwbGFjZShcInRcIiwgXCJcIilcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCB0ZXh0IHdlcmUgbm90IHRva2Vuc1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IGNiID0gdGhpcy50bS5hZGROZXdCbG9jayhzdGFydElkeCwgZW5kSWR4LCB0aGlzLmN1cnJlbnRDbGFzcyk7XG4gICAgICBpZihjYikge1xuICAgICAgICB0aGlzLnNldEN1cnJlbnRCbG9jayhjYik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicylcbiAgICAgIH1cbiAgICAgIHNlbGVjdGlvbi5lbXB0eSgpO1xuICAgICAgdGhpcy5zZXRVbnNhdmVkV29yayh0cnVlKTtcbiAgICB9LFxuICAgIG9uUmVtb3ZlQmxvY2soZGF0YSkge1xuICAgICAgdGhpcy50bS5yZW1vdmVCbG9jayhkYXRhLnN0YXJ0LGRhdGEuZW5kKTtcbiAgICAgIHRoaXMuc2V0Q3VycmVudEJsb2NrKG5ldyBPYmplY3QoKSk7XG4gICAgICB0aGlzLnNldFVuc2F2ZWRXb3JrKHRydWUpO1xuICAgIH0sXG4gICAgcmVzZXRCbG9ja3MoKSB7XG4gICAgICBpZihjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc2V0IEFMTCB0aGUgYW5ub3RhdGlvbnM/IFRoZSB1bnNhdmVkIHdvcmsgd2lsbCBiZSBsb3N0XCIpKVxuICAgICAgdGhpcy50bS5yZXNldEJsb2NrcygpO1xuICAgICAgdGhpcy5zZXRVbnNhdmVkV29yayh0cnVlKTtcbiAgICB9LFxuICAgIHNhdmVUYWdzKCkge1xuICAgICAgLy9yZXRyaWV2ZSBDU1JGX1RPS0VOXG4gICAgICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xuICAgICAgbGV0IGNvb2tpZVZhbHVlID0gbnVsbDtcbiAgICAgIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9PSAnJykge1xuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgY29va2llID0gY29va2llc1tpXS50cmltKCk7XG4gICAgICAgICAgICAgIC8vIERvZXMgdGhpcyBjb29raWUgc3RyaW5nIGJlZ2luIHdpdGggdGhlIG5hbWUgd2Ugd2FudD9cbiAgICAgICAgICAgICAgaWYgKGNvb2tpZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggKyAxKSA9PT0gKG5hbWUgKyAnPScpKSB7XG4gICAgICAgICAgICAgICAgICBjb29raWVWYWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKG5hbWUubGVuZ3RoICsgMSkpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb2tpZVZhbHVlO1xuICAgICAgfVxuICAgICAgY29uc3QgY3NyZnRva2VuID0gZ2V0Q29va2llKCdjc3JmdG9rZW4nKTsgXG4gICAgICBjb25zdCB0YWdnaW5nX2lkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1ldGFbbmFtZT0naWQtdGFnZ2luZyddXCIpLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXG4gICAgICAgICAgXCIvYXBpL3VwZGF0ZS9cIit0YWdnaW5nX2lkLCBcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLnRtKSxcbiAgICAgICAgICB7ICBcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgXCJYLUNTUkZUb2tlblwiOiBjc3JmdG9rZW4sXG4gICAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAvLyBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIlxuICAgICAgICAgIH19XG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgdG9hc3Qoe1xuICAgICAgICAgICAgbWVzc2FnZTonQW5ub3RhdGlvbnMgc2F2ZWQnLFxuICAgICAgICAgICAgdHlwZTonaXMtc3VjY2VzcycsXG4gICAgICAgICAgICBkaXNtaXNzaWJsZTondHJ1ZScsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6J3RydWUnLFxuICAgICAgICAgICAgZHVyYXRpb246MjAwMCxcbiAgICAgICAgICAgIHBvc2l0aW9uOidib3R0b20tcmlnaHQnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhpcy5zZXRVbnNhdmVkV29yayhmYWxzZSlcbiAgICAgICAgKVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4jZWRpdG9yIHtcbiAgcGFkZGluZzogMC4ycmVtO1xufVxuLnJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6MTAwcHg7XG4gIG1hcmdpbi1yaWdodDowcHg7XG59XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBOzs7QUFDQTs7O0FBQ0E7OztBQUNBOzs7QUFHQTs7O0FBQ0E7OztBQWFBOzs7QUFDQTs7O0FBQ0E7OztBQUVBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTs7O0FBRUE7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUdBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBRkE7QUFDQTs7OztBQXpDQTtBQUlBO0FBQUE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBOztBQURBO0FBU0E7O0FBVEE7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBSEE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFIQTtBQUFBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=template&id=de507ce4\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/Export.vue?vue&type=template&id=0f128038":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/Token.vue?vue&type=template&id=1195fd0e":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/TokenBlock.vue?vue&type=template&id=10f65e44":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/AnnotationPage.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/zerbi/Documents/III_anno/tesi/sentag/ui/src/components/AnnotationPage.vue: Unterminated string constant (97:20)\\n\\n\\u001b[0m \\u001b[90m  95 | \\u001b[39m      \\u001b[36mif\\u001b[39m(cb) {\\u001b[0m\\n\\u001b[0m \\u001b[90m  96 | \\u001b[39m        \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39msetCurrentBlock(cb)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  97 | \\u001b[39m        console\\u001b[33m.\\u001b[39mlog(\\u001b[32m\\\"s)\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m     | \\u001b[39m                    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  98 | \\u001b[39m      }\\u001b[0m\\n\\u001b[0m \\u001b[90m  99 | \\u001b[39m      selection\\u001b[33m.\\u001b[39mempty()\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 100 | \\u001b[39m      \\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39msetUnsavedWork(\\u001b[36mtrue\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Object._raise (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:790:17)\\n    at Object.raiseWithData (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:783:17)\\n    at Object.raise (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:777:17)\\n    at Object.readString (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:8724:20)\\n    at Object.getTokenFromCode (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:8361:14)\\n    at Object.getTokenFromCode (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:4791:18)\\n    at Object.nextToken (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:7888:12)\\n    at Object.next (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:7813:10)\\n    at Object.parseCoverCallAndAsyncArrowHead (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:10188:10)\\n    at Object.parseSubscript (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:10139:19)\\n    at Object.parseSubscripts (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:10111:19)\\n    at Object.parseExprSubscripts (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:10100:17)\\n    at Object.parseUpdate (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:10074:21)\\n    at Object.parseMaybeUnary (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:10063:17)\\n    at Object.parseExprOps (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:9933:23)\\n    at Object.parseMaybeConditional (/home/zerbi/Documents/III_anno/tesi/sentag/ui/node_modules/@babel/parser/lib/index.js:9907:23)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Bbm5vdGF0aW9uUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/AnnotationPage.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/Export.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/Token.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/TokenBlock.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/Token.vue?vue&type=style&index=0&id=1195fd0e&lang=scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/TokenBlock.vue?vue&type=style&index=0&id=10f65e44&lang=scss":
false,

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/Token.vue?vue&type=style&index=0&id=1195fd0e&lang=scss":
false,

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/TokenBlock.vue?vue&type=style&index=0&id=10f65e44&lang=scss":
false,

/***/ "./src/axios.js":
false,

/***/ "./src/components/Export.vue":
false,

/***/ "./src/components/Export.vue?vue&type=script&lang=js":
false,

/***/ "./src/components/Export.vue?vue&type=template&id=0f128038":
false,

/***/ "./src/components/Token.vue":
false,

/***/ "./src/components/Token.vue?vue&type=script&lang=js":
false,

/***/ "./src/components/Token.vue?vue&type=style&index=0&id=1195fd0e&lang=scss":
false,

/***/ "./src/components/Token.vue?vue&type=template&id=1195fd0e":
false,

/***/ "./src/components/TokenBlock.vue":
false,

/***/ "./src/components/TokenBlock.vue?vue&type=script&lang=js":
false,

/***/ "./src/components/TokenBlock.vue?vue&type=style&index=0&id=10f65e44&lang=scss":
false,

/***/ "./src/components/TokenBlock.vue?vue&type=template&id=10f65e44":
false,

/***/ "./src/components/token-manager.js":
false

})