webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/TokenBlock.vue?vue&type=template&id=10f65e44":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/TokenBlock.vue?vue&type=template&id=10f65e44 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nvar _hoisted_1 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(\" @click=\\\"setCurrentBlock(token)\\\" \");\n\nvar _hoisted_2 = {\n  class: \"tag is-light is-info is-small\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, [_hoisted_1, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"mark\", {\n    class: [\"is-multiline is-rounded\", {\n      'current': $props.isCurrent\n    }],\n    style: {\n      backgroundColor: $props.backgroundColor\n    },\n    id: 'tb' + $props.token.start\n  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($props.token.tokens, function (t) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveDynamicComponent\"])(t.type === 'token' ? 'Token' : 'TokenBlock'), {\n      token: t,\n      key: t.start,\n      backgroundColor: t.backgroundColor,\n      isCurrent: t.id === _ctx.currentBlock.id,\n      onRemoveBlock: $options.removeBlock\n    }, null, 8\n    /* PROPS */\n    , [\"token\", \"backgroundColor\", \"isCurrent\", \"onRemoveBlock\"]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  )), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"a\", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.token.label), 1\n  /* TEXT */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"a\", {\n    class: \"tag delete is-small is-danger\",\n    onClick: _cache[1] || (_cache[1] = function ($event) {\n      return _ctx.$emit('remove-block', {\n        start: $props.token.start,\n        end: $props.token.end\n      });\n    })\n  })])], 14\n  /* CLASS, STYLE, PROPS */\n  , [\"id\"])], 64\n  /* STABLE_FRAGMENT */\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2Uvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvQHZ1ZS9jbGktc2VydmljZS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Ub2tlbkJsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMGY2NWU0NC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rva2VuQmxvY2sudnVlPzFjNzIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIEBjbGljaz1cInNldEN1cnJlbnRCbG9jayh0b2tlbilcIlxuICA8bWFyayBcbiAgICBjbGFzcz1cImlzLW11bHRpbGluZSBpcy1yb3VuZGVkXCJcbiAgICA6c3R5bGU9XCJ7YmFja2dyb3VuZENvbG9yOmJhY2tncm91bmRDb2xvcn1cIlxuICAgIDppZD1cIid0YicgKyB0b2tlbi5zdGFydFwiXG4gICAgOmNsYXNzPVwieyAnY3VycmVudCc6IGlzQ3VycmVudH1cIlxuICAgID5cbiAgICAgIDxjb21wb25lbnQgXG4gICAgICAgIHYtZm9yPVwidCBpbiB0b2tlbi50b2tlbnNcIiBcbiAgICAgICAgOmlzPVwidC50eXBlID09PSAndG9rZW4nID8gJ1Rva2VuJyA6ICdUb2tlbkJsb2NrJ1wiXG4gICAgICAgIDp0b2tlbj1cInRcIiBcbiAgICAgICAgOmtleT1cInQuc3RhcnRcIiBcbiAgICAgICAgOmJhY2tncm91bmRDb2xvcj1cInQuYmFja2dyb3VuZENvbG9yXCJcbiAgICAgICAgOmlzQ3VycmVudD1cInQuaWQgPT09IGN1cnJlbnRCbG9jay5pZFwiXG4gICAgICAgIEByZW1vdmUtYmxvY2s9XCJyZW1vdmVCbG9ja1wiXG4gICAgICAvPlxuICAgIDxzcGFuIGNsYXNzPVwidGFnIGlzLWxpZ2h0IGlzLWluZm8gaXMtc21hbGxcIj5cbiAgICAgIDxhPnt7IHRva2VuLmxhYmVsIH19PC9hPlxuICAgICAgPGEgY2xhc3M9XCJ0YWcgZGVsZXRlIGlzLXNtYWxsIGlzLWRhbmdlclwiIEBjbGljaz1cIiRlbWl0KCdyZW1vdmUtYmxvY2snLCB7c3RhcnQ6dG9rZW4uc3RhcnQsIGVuZDp0b2tlbi5lbmR9KVwiPjwvYT5cbiAgICA8L3NwYW4+XG4gIDwvbWFyaz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vVG9rZW5cIjtcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBNdXRhdGlvbnMgfSBmcm9tIFwidnVleFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiVG9rZW5CbG9ja1wiLFxuICBlbWl0czogW1wicmVtb3ZlLWJsb2NrXCJdLFxuICBkYXRhOmZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93Q2xvc2U6IGZhbHNlLFxuICAgIH1cbiAgfSxcbiAgcHJvcHM6IHtcbiAgICB0b2tlbjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdXJpZWQ6IHRydWVcbiAgICB9LFxuICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgfSxcbiAgICBpc0N1cnJlbnQ6e1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcFN0YXRlKFtcImN1cnJlbnRCbG9ja1wiXSksXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBUb2tlblxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwTXV0YXRpb25zKFtcInNldEN1cnJlbnRCbG9ja1wiXSksXG4gICAgcmVtb3ZlQmxvY2s6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJyZW1vdmUtYmxvY2tcIixkYXRhKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxubWFyayB7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOjhweDtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IHZhcigtLXRhZyk7XG4gICAgcGFkZGluZzogMC4ycmVtO1xuICAgIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gIH1cbn1cbi5kZWxldGUge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmN1cnJlbnQge1xuICBib3JkZXI6IDRweCBzb2xpZCB5ZWxsb3c7XG59XG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtBQUNBOztBQWNBOzs7QUFmQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBZ0JBO0FBYkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBRkE7QUFRQTs7QUFSQTtBQVVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWpCQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/TokenBlock.vue?vue&type=template&id=10f65e44\n");

/***/ })

})