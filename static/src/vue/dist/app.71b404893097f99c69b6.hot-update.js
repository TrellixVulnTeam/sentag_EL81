webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TokenBlock.vue?vue&type=template&id=10f65e44":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/TokenBlock.vue?vue&type=template&id=10f65e44 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"tag is-light is-info is-small\"\n};\nvar _hoisted_2 = {\n  style: {\n    color: 'blue'\n  }\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(\"mark\", {\n    class: [\"is-multiline is-rounded\", {\n      'current': $props.isCurrent\n    }],\n    style: {\n      backgroundColor: $props.backgroundColor\n    },\n    id: 'tb' + $props.token.start,\n    onClick: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withModifiers\"])(function ($event) {\n      return _ctx.setCurrentBlock($props.token);\n    }, [\"stop\"]))\n  }, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($props.token.tokens, function (t) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveDynamicComponent\"])(t.type === 'token' ? 'Token' : 'TokenBlock'), {\n      token: t,\n      key: t.start,\n      backgroundColor: t.backgroundColor,\n      isCurrent: t.id === _ctx.currentBlock.id,\n      onRemoveBlock: $options.removeBlock\n    }, null, 8\n    /* PROPS */\n    , [\"token\", \"backgroundColor\", \"isCurrent\", \"onRemoveBlock\"]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  )), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"strong\", _hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.token.label), 1\n  /* TEXT */\n  )]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"a\", {\n    class: \"tag delete is-small is-danger\",\n    onClick: _cache[1] || (_cache[1] = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withModifiers\"])(function ($event) {\n      _ctx.$emit('remove-block', {\n        start: $props.token.start,\n        end: $props.token.end\n      });\n    }, [\"stop\"]))\n  })])], 14\n  /* CLASS, STYLE, PROPS */\n  , [\"id\"]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9Ub2tlbkJsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMGY2NWU0NC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Rva2VuQmxvY2sudnVlPzFjNzIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8bWFyayBcbiAgICBjbGFzcz1cImlzLW11bHRpbGluZSBpcy1yb3VuZGVkXCJcbiAgICA6c3R5bGU9XCJ7YmFja2dyb3VuZENvbG9yOmJhY2tncm91bmRDb2xvcn1cIlxuICAgIDppZD1cIid0YicgKyB0b2tlbi5zdGFydFwiXG4gICAgOmNsYXNzPVwieyAnY3VycmVudCc6IGlzQ3VycmVudH1cIlxuICAgIEBjbGljay5zdG9wPVwic2V0Q3VycmVudEJsb2NrKHRva2VuKVwiXG4gICAgPlxuICAgICAgPGNvbXBvbmVudCBcbiAgICAgICAgdi1mb3I9XCJ0IGluIHRva2VuLnRva2Vuc1wiIFxuICAgICAgICA6aXM9XCJ0LnR5cGUgPT09ICd0b2tlbicgPyAnVG9rZW4nIDogJ1Rva2VuQmxvY2snXCJcbiAgICAgICAgOnRva2VuPVwidFwiIFxuICAgICAgICA6a2V5PVwidC5zdGFydFwiIFxuICAgICAgICA6YmFja2dyb3VuZENvbG9yPVwidC5iYWNrZ3JvdW5kQ29sb3JcIlxuICAgICAgICA6aXNDdXJyZW50PVwidC5pZCA9PT0gY3VycmVudEJsb2NrLmlkXCJcbiAgICAgICAgQHJlbW92ZS1ibG9jaz1cInJlbW92ZUJsb2NrXCJcbiAgICAgIC8+XG4gICAgPHNwYW4gY2xhc3M9XCJ0YWcgaXMtbGlnaHQgaXMtaW5mbyBpcy1zbWFsbFwiXG4gICAgPlxuICAgICAgPHNwYW4+PHN0cm9uZyA6c3R5bGU9XCJ7IGNvbG9yOiAnYmx1ZScgfVwiPnt7IHRva2VuLmxhYmVsIH19PC9zdHJvbmc+PC9zcGFuPlxuICAgICAgXG4gICAgICA8YSBjbGFzcz1cInRhZyBkZWxldGUgaXMtc21hbGwgaXMtZGFuZ2VyXCIgXG4gICAgICBAY2xpY2suc3RvcD1cIiRlbWl0KCdyZW1vdmUtYmxvY2snLCB7c3RhcnQ6dG9rZW4uc3RhcnQsIGVuZDp0b2tlbi5lbmR9KTsgXCI+XG4gICAgICA8L2E+XG4gICAgPC9zcGFuPlxuICA8L21hcms+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFRva2VuIGZyb20gXCIuL1Rva2VuXCI7XG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwTXV0YXRpb25zIH0gZnJvbSBcInZ1ZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlRva2VuQmxvY2tcIixcbiAgZW1pdHM6IFtcInJlbW92ZS1ibG9ja1wiXSxcbiAgZGF0YTpmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd0Nsb3NlOiBmYWxzZSxcbiAgICB9XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgdG9rZW46IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVyaWVkOiB0cnVlXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiBmYWxzZVxuICAgIH0sXG4gICAgaXNDdXJyZW50OntcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBTdGF0ZShbXCJjdXJyZW50QmxvY2tcIl0pLFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgVG9rZW5cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcE11dGF0aW9ucyhbXCJzZXRDdXJyZW50QmxvY2tcIl0pLFxuICAgIHJlbW92ZUJsb2NrOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB0aGlzLiRlbWl0KFwicmVtb3ZlLWJsb2NrXCIsZGF0YSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbm1hcmsge1xuICBwYWRkaW5nOiAwLjNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czo4cHg7XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiB2YXIoLS10YWcpO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JheTtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICB9XG59XG4uZGVsZXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5jdXJyZW50IHtcbiAgYm9yZGVyOiAzcHggc29saWQgeWVsbG93O1xufVxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBaUJBOzs7QUFFQTtBQUFBO0FBQUE7OztBQWxCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBbUJBO0FBakJBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOztBQUZBO0FBUUE7O0FBUkE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUF0QkE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/TokenBlock.vue?vue&type=template&id=10f65e44\n");

/***/ })

})