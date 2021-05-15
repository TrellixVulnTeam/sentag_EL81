webpackHotUpdate("app",{

/***/ "./src/components/token-manager.js":
/*!*****************************************!*\
  !*** ./src/components/token-manager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ \"./node_modules/core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.splice */ \"./node_modules/core-js/modules/es.array.splice.js\");\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var _home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar TokenManager = /*#__PURE__*/function () {\n  /**\n   *\n   * @param {Array} tokens\n   */\n  function TokenManager(tokens, oldTM) {\n    Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, TokenManager);\n\n    //manage the recreation from an old TM\n    if (arguments.length == 1) {\n      //new token manager\n      this.currentID = 0; //univocal identifier\n\n      this.tokens = tokens.map(function (t) {\n        return {\n          type: \"token\",\n          start: t[0],\n          end: t[1],\n          text: t[2]\n        };\n      });\n      this.words = tokens.map(function (t) {\n        return t[2];\n      });\n      this.initialTokens = this.tokens.slice(); //SHALLOW COPY\n    } else {\n      //in case an oldTM is available\n      this.currentID = oldTM.currentID;\n      this.tokens = oldTM.tokens;\n      this.words = oldTM.words;\n      this.initialTokens = oldTM.initialTokens;\n    }\n  }\n  /**\n   * Creates a new token block with the tokens whose starts match the input\n   * parameters\n   *\n   * @param {Number} start 'start' value of the token forming the start of the token block\n   * @param {Number} end 'start' value of the token forming the end of the token block\n   * @param {Number} _class the id of the class to highlight\n   */\n\n\n  Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(TokenManager, [{\n    key: \"addNewBlock\",\n    value: function addNewBlock(_start, _end, _class) {\n      var start = _end < _start ? _end : _start;\n      var end = _end > _start ? _end : _start; //console.log(start);\n      //console.log(end);\n\n      this.recursiveAddNewBlock(start, end, _class, this.tokens); //console.log(this.tokens)\n    }\n  }, {\n    key: \"recursiveAddNewBlock\",\n    value: function recursiveAddNewBlock(start, end, _class, _tokens) {\n      var selectedTokens = null; //livello 0: ci entra solo e sempre per _tokens=this.tokens\n\n      if (Array.isArray(_tokens)) {\n        selectedTokens = []; //pusha tutti i TOKEN e TOKEN-BLOCK di livello 0 selezionati in selectedTokens con chiamate ricorsive sui figli\n\n        var _iterator = Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_tokens),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var child = _step.value;\n            var selected = this.recursiveAddNewBlock(start, end, _class, child);\n            if (selected !== null) selectedTokens.push(selected);\n          } //se qualche TOKEN o TOKEN-BLOCK è stato selezionato -->\n\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        if (selectedTokens.length) {\n          //prendo start del primo token selezionato e trovo l'indice a cui corrisponde tra i _tokens\n          var first_token_start = selectedTokens[0].start;\n\n          var first_index = _tokens.map(function (t) {\n            return t.start;\n          }).indexOf(first_token_start); //costruisco nuovo TOKEN-BLOCK coi selectedTokens\n\n\n          var newTokenBlock = {\n            type: \"token-block\",\n            start: selectedTokens[0].start,\n            end: selectedTokens[selectedTokens.length - 1].end,\n            tokens: selectedTokens,\n            label: _class && _class.name ? _class.name : \"Unlabelled\",\n            classId: _class && _class.id ? _class.id : 0,\n            id: this.currentID,\n            attrs: {},\n            backgroundColor: _class && _class.color ? _class.color : null\n          };\n\n          var _iterator2 = Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_class.attributes),\n              _step2;\n\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              var key = _step2.value;\n              if (key === 'ID') newTokenBlock.attrs[key] = this.currentID.toString();\n              newTokenBlock.attrs[key] = \"\";\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n\n          console.log(newTokenBlock);\n          this.currentID += 1; //rimpiazzo ogni token selezionato col nuovo TOKEN-BLOCK (che li contiene)\n\n          _tokens.splice(first_index, selectedTokens.length, newTokenBlock);\n        }\n      } // selezione INTERO TOKEN-BLOCK, se è token-block non interamente selezionato entrerà nel 4o elseif\n      else if (_tokens.type === \"token-block\" && _tokens.start >= start && _tokens.end <= end) {\n          //console.log(_tokens.start + \" \" + _tokens.end + \" \" + start + \" \" + end)\n          if (start <= _tokens.start && end >= _tokens.end) return _tokens; //console.log(\"tokenblock\")\n        } // selezione TOKEN\n        else if (_tokens.type === \"token\" && _tokens.start >= start && _tokens.start <= end) {\n            //console.log(_tokens.start + \" \" + _tokens.end + \" \" + start + \" \" + end)\n            //console.log(\"token\")\n            return _tokens;\n          } // scansione TOKEN dentro un TOKEN-BLOCK non interamente selezionato\n          else if (Array.isArray(_tokens.tokens)) {\n              //è come al livello 0 ma applicato a _tokens.tokens\n              selectedTokens = [];\n\n              var _iterator3 = Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_tokens.tokens),\n                  _step3;\n\n              try {\n                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n                  var _child = _step3.value;\n\n                  var _selected = this.recursiveAddNewBlock(start, end, _class, _child);\n\n                  if (_selected !== null) selectedTokens.push(_selected);\n                }\n              } catch (err) {\n                _iterator3.e(err);\n              } finally {\n                _iterator3.f();\n              }\n\n              if (selectedTokens.length) {\n                var _first_token_start = selectedTokens[0].start;\n\n                var _first_index = _tokens.tokens.map(function (t) {\n                  return t.start;\n                }).indexOf(_first_token_start);\n\n                var _newTokenBlock = {\n                  type: \"token-block\",\n                  start: selectedTokens[0].start,\n                  end: selectedTokens[selectedTokens.length - 1].end,\n                  tokens: selectedTokens,\n                  label: _class && _class.name ? _class.name : \"Unlabelled\",\n                  classId: _class && _class.id ? _class.id : 0,\n                  id: this.currentID,\n                  backgroundColor: _class && _class.color ? _class.color : null\n                };\n                this.currentID += 1;\n\n                _tokens.tokens.splice(_first_index, selectedTokens.length, _newTokenBlock); //per evitare di far aggiungere TOKEN-BLOCK a livelli ricorsivi precedenti, comunico che i tokens sono stati\n                //trasformati in token-blocks settando selectedTokens a null\n\n\n                selectedTokens = null;\n              }\n            } //se selectedTokens = [] --> ritorna null (possibile con livelli successivi allo 0 se TOKEN-BLOCK senza TOKEN selezionati)\n\n\n      if (selectedTokens !== null && !selectedTokens.length) selectedTokens = null; // se TOKEN non selezionato --> return null \n      // se TOKEN-BLOCK non interamente selezionato e senza TOKEN interni selezionati\n      // il valore ritornato da livello 0 (this.tokens) viene ignorato\n\n      return selectedTokens;\n    }\n    /**\n     * Removes a token block and puts back all the tokens in their original position\n     * problema performance RISOLTO\n     *\n     * @param {Number} blockStart 'start' value of the token block to remove\n     * @param {Number} blockEnd 'end' value of the token block to remove\n     */\n\n  }, {\n    key: \"removeBlock\",\n    value: function removeBlock(blockStart, blockEnd) {\n      this.recursiveRemoveBlock(blockStart, blockEnd, this.tokens);\n    }\n  }, {\n    key: \"recursiveRemoveBlock\",\n    value: function recursiveRemoveBlock(blockStart, blockEnd, _tokens) {\n      var selectedBlock = null; // LIVELLO 0\n\n      if (Array.isArray(_tokens)) {\n        var _iterator4 = Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_tokens),\n            _step4;\n\n        try {\n          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n            var child = _step4.value;\n\n            if (child.type === \"token-block\") {\n              //per performance: verifico se sia un blocco da rimuovere o se ne contenga solo se è un TOKEN-BLOCK\n              var selected = this.recursiveRemoveBlock(blockStart, blockEnd, child);\n\n              if (selected !== null) {\n                selectedBlock = selected;\n                break; //mi fermo se ho indiviuato il token-block da rimuovere\n              }\n            }\n          } //se ho trovato a questo livello il BLOCK da rimuovere \n\n        } catch (err) {\n          _iterator4.e(err);\n        } finally {\n          _iterator4.f();\n        }\n\n        if (selectedBlock !== null) {\n          //ottengo inici per la rimozione\n          var block_start = selectedBlock.start;\n\n          var block_index = _tokens.map(function (t) {\n            return t.start;\n          }).indexOf(block_start); //mi salvo i TOKENS e TOKEN-BLOCK contenuti in modo da aggiungeri singolarmente\n\n\n          var tokens = selectedBlock.tokens; //rimuovo il token block\n\n          _tokens.splice(block_index, 1); //aggiungo i tokens interni, a livello 0 (quidni sovrascivo tranquillamente this.tokens, visto che _tokens è passato per valore)\n\n\n          this.tokens = _tokens.slice(0, block_index).concat(tokens, _tokens.slice(block_index)); //(per performance)\n          //ritorno null... verrà ignorato\n\n          selectedBlock = null;\n        }\n      } //rimozione di questo TOCKEN-BLOCK ad un certo livello innestato >0 --> ritorno il BLOCK così ai livelli richiamanti mi sostituiscono coi miei .tokens\n      else if (_tokens.type === \"token-block\" && _tokens.start === blockStart && _tokens.end === blockEnd) {\n          return _tokens;\n        } //se TOCKEN-BLOCK non è da rimuovere allora mi comporto ricorsivamente, come per LIVELLO 0 ma agendo sui .tokens\n        else if (Array.isArray(_tokens.tokens)) {\n            var _iterator5 = Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_tokens.tokens),\n                _step5;\n\n            try {\n              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n                var _child2 = _step5.value;\n\n                if (_child2.type === \"token-block\") {\n                  //(per performance)\n                  var _selected2 = this.recursiveRemoveBlock(blockStart, blockEnd, _child2);\n\n                  if (_selected2 !== null) {\n                    selectedBlock = _selected2;\n                    break;\n                  }\n                }\n              }\n            } catch (err) {\n              _iterator5.e(err);\n            } finally {\n              _iterator5.f();\n            }\n\n            if (selectedBlock !== null) {\n              var _block_start = selectedBlock.start;\n\n              var _block_index = _tokens.tokens.map(function (t) {\n                return t.start;\n              }).indexOf(_block_start);\n\n              var _tokens2 = selectedBlock.tokens; //rimuovo il token block\n\n              _tokens.tokens.splice(_block_index, 1); //aggiungo i tokens\n\n\n              _tokens.tokens = _tokens.tokens.slice(0, _block_index).concat(_tokens2, _tokens.tokens.slice(_block_index)); //(per performance)\n\n              selectedBlock = null;\n            }\n          } //LIVELLO 0 ritorna null\n      //LIVELLI innestati non da rimuovere ritornano null\n      //su TOCKEN non viene mai avviata la chiamata ricorsiva\n      //TOCKEN-BLOCK selezionati ritornano prima di questa riga, nel loro elseif\n      //è importante ritornare null in modo che funzionino i controlli su selected\n\n\n      return selectedBlock;\n    }\n    /**\n     * Removes all the tag blocks and leaves only tokens\n     */\n\n  }, {\n    key: \"resetBlocks\",\n    value: function resetBlocks() {\n      this.tokens = this.initialTokens.slice(); //SHALLOW COPY\n    }\n    /**\n     * Exports the tokens and the token blocks as annotations\n     */\n\n  }, {\n    key: \"exportAsAnnotation\",\n    value: function exportAsAnnotation() {\n      var entities = [];\n\n      for (var i = 0; i < this.tokens.length; i++) {\n        if (this.tokens[i].type === \"token-block\") {\n          var b = this.tokens[i];\n          entities.push([b.start, b.end, b.label]);\n        }\n      }\n\n      return entities;\n    }\n  }]);\n\n  return TokenManager;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenManager);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2tlbi1tYW5hZ2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9rZW4tbWFuYWdlci5qcz80N2E3Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRva2VuTWFuYWdlciB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSB0b2tlbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHRva2Vucywgb2xkVE0pIHsgLy9tYW5hZ2UgdGhlIHJlY3JlYXRpb24gZnJvbSBhbiBvbGQgVE1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB7IC8vbmV3IHRva2VuIG1hbmFnZXJcbiAgICAgIHRoaXMuY3VycmVudElEID0gMDsgLy91bml2b2NhbCBpZGVudGlmaWVyXG4gICAgICB0aGlzLnRva2VucyA9IHRva2Vucy5tYXAoKHQpID0+ICh7XG4gICAgICAgIHR5cGU6IFwidG9rZW5cIixcbiAgICAgICAgc3RhcnQ6IHRbMF0sXG4gICAgICAgIGVuZDogdFsxXSxcbiAgICAgICAgdGV4dDogdFsyXSxcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMud29yZHMgPSB0b2tlbnMubWFwKHQgPT4gdFsyXSk7XG4gICAgICB0aGlzLmluaXRpYWxUb2tlbnMgPSB0aGlzLnRva2Vucy5zbGljZSgpOyAvL1NIQUxMT1cgQ09QWVxuICAgIH1cbiAgICBlbHNlIHsgLy9pbiBjYXNlIGFuIG9sZFRNIGlzIGF2YWlsYWJsZVxuICAgICAgdGhpcy5jdXJyZW50SUQgPSBvbGRUTS5jdXJyZW50SUQ7XG4gICAgICB0aGlzLnRva2VucyA9IG9sZFRNLnRva2Vuc1xuICAgICAgdGhpcy53b3JkcyA9IG9sZFRNLndvcmRzO1xuICAgICAgdGhpcy5pbml0aWFsVG9rZW5zID0gb2xkVE0uaW5pdGlhbFRva2VucztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyB0b2tlbiBibG9jayB3aXRoIHRoZSB0b2tlbnMgd2hvc2Ugc3RhcnRzIG1hdGNoIHRoZSBpbnB1dFxuICAgKiBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCAnc3RhcnQnIHZhbHVlIG9mIHRoZSB0b2tlbiBmb3JtaW5nIHRoZSBzdGFydCBvZiB0aGUgdG9rZW4gYmxvY2tcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGVuZCAnc3RhcnQnIHZhbHVlIG9mIHRoZSB0b2tlbiBmb3JtaW5nIHRoZSBlbmQgb2YgdGhlIHRva2VuIGJsb2NrXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBfY2xhc3MgdGhlIGlkIG9mIHRoZSBjbGFzcyB0byBoaWdobGlnaHRcbiAgICovXG4gIGFkZE5ld0Jsb2NrKF9zdGFydCwgX2VuZCwgX2NsYXNzKSB7XG4gICAgbGV0IHN0YXJ0ID0gX2VuZCA8IF9zdGFydCA/IF9lbmQgOiBfc3RhcnQ7XG4gICAgbGV0IGVuZCA9IF9lbmQgPiBfc3RhcnQgPyBfZW5kIDogX3N0YXJ0O1xuICAgIC8vY29uc29sZS5sb2coc3RhcnQpO1xuICAgIC8vY29uc29sZS5sb2coZW5kKTtcbiAgICB0aGlzLnJlY3Vyc2l2ZUFkZE5ld0Jsb2NrKHN0YXJ0LCBlbmQsIF9jbGFzcywgdGhpcy50b2tlbnMpO1xuICAgIC8vY29uc29sZS5sb2codGhpcy50b2tlbnMpXG4gIH1cbiAgcmVjdXJzaXZlQWRkTmV3QmxvY2soc3RhcnQsIGVuZCwgX2NsYXNzLCBfdG9rZW5zKSB7XG4gICAgbGV0IHNlbGVjdGVkVG9rZW5zID0gbnVsbDtcblxuICAgIC8vbGl2ZWxsbyAwOiBjaSBlbnRyYSBzb2xvIGUgc2VtcHJlIHBlciBfdG9rZW5zPXRoaXMudG9rZW5zXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoX3Rva2VucykpIHtcbiAgICAgIHNlbGVjdGVkVG9rZW5zID0gW11cbiAgICAgIC8vcHVzaGEgdHV0dGkgaSBUT0tFTiBlIFRPS0VOLUJMT0NLIGRpIGxpdmVsbG8gMCBzZWxlemlvbmF0aSBpbiBzZWxlY3RlZFRva2VucyBjb24gY2hpYW1hdGUgcmljb3JzaXZlIHN1aSBmaWdsaVxuICAgICAgZm9yIChsZXQgY2hpbGQgb2YgX3Rva2Vucykge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnJlY3Vyc2l2ZUFkZE5ld0Jsb2NrKHN0YXJ0LCBlbmQsIF9jbGFzcywgY2hpbGQpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgIT09IG51bGwpXG4gICAgICAgIHNlbGVjdGVkVG9rZW5zLnB1c2goc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgICAgLy9zZSBxdWFsY2hlIFRPS0VOIG8gVE9LRU4tQkxPQ0sgw6ggc3RhdG8gc2VsZXppb25hdG8gLS0+XG4gICAgICBpZiAoc2VsZWN0ZWRUb2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIC8vcHJlbmRvIHN0YXJ0IGRlbCBwcmltbyB0b2tlbiBzZWxlemlvbmF0byBlIHRyb3ZvIGwnaW5kaWNlIGEgY3VpIGNvcnJpc3BvbmRlIHRyYSBpIF90b2tlbnNcbiAgICAgICAgbGV0IGZpcnN0X3Rva2VuX3N0YXJ0ID0gc2VsZWN0ZWRUb2tlbnNbMF0uc3RhcnQ7XG4gICAgICAgIGxldCBmaXJzdF9pbmRleCA9IF90b2tlbnMubWFwKHQgPT4gdC5zdGFydCkuaW5kZXhPZihmaXJzdF90b2tlbl9zdGFydCk7XG4gICAgICAgIFxuICAgICAgICAvL2Nvc3RydWlzY28gbnVvdm8gVE9LRU4tQkxPQ0sgY29pIHNlbGVjdGVkVG9rZW5zXG4gICAgICAgIGxldCBuZXdUb2tlbkJsb2NrID0ge1xuICAgICAgICAgIHR5cGU6IFwidG9rZW4tYmxvY2tcIixcbiAgICAgICAgICBzdGFydDogc2VsZWN0ZWRUb2tlbnNbMF0uc3RhcnQsXG4gICAgICAgICAgZW5kOiBzZWxlY3RlZFRva2Vuc1tzZWxlY3RlZFRva2Vucy5sZW5ndGggLSAxXS5lbmQsXG4gICAgICAgICAgdG9rZW5zOiBzZWxlY3RlZFRva2VucyxcbiAgICAgICAgICBsYWJlbDogX2NsYXNzICYmIF9jbGFzcy5uYW1lID8gX2NsYXNzLm5hbWUgOiBcIlVubGFiZWxsZWRcIixcbiAgICAgICAgICBjbGFzc0lkOiBfY2xhc3MgJiYgX2NsYXNzLmlkID8gX2NsYXNzLmlkIDogMCxcbiAgICAgICAgICBpZDp0aGlzLmN1cnJlbnRJRCxcbiAgICAgICAgICBhdHRyczp7fSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IF9jbGFzcyAmJiBfY2xhc3MuY29sb3IgPyBfY2xhc3MuY29sb3IgOiBudWxsLFxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIF9jbGFzcy5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ0lEJylcbiAgICAgICAgICAgIG5ld1Rva2VuQmxvY2suYXR0cnNba2V5XSA9IHRoaXMuY3VycmVudElELnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICBuZXdUb2tlbkJsb2NrLmF0dHJzW2tleV0gPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Rva2VuQmxvY2spXG4gICAgICAgIHRoaXMuY3VycmVudElEICs9IDE7XG4gICAgICAgIC8vcmltcGlhenpvIG9nbmkgdG9rZW4gc2VsZXppb25hdG8gY29sIG51b3ZvIFRPS0VOLUJMT0NLIChjaGUgbGkgY29udGllbmUpXG4gICAgICAgIF90b2tlbnMuc3BsaWNlKGZpcnN0X2luZGV4LCBzZWxlY3RlZFRva2Vucy5sZW5ndGgsIG5ld1Rva2VuQmxvY2spO1xuICAgICAgfVxuICAgIH0gXG4gICAgLy8gc2VsZXppb25lIElOVEVSTyBUT0tFTi1CTE9DSywgc2Ugw6ggdG9rZW4tYmxvY2sgbm9uIGludGVyYW1lbnRlIHNlbGV6aW9uYXRvIGVudHJlcsOgIG5lbCA0byBlbHNlaWZcbiAgICBlbHNlIGlmIChfdG9rZW5zLnR5cGUgPT09IFwidG9rZW4tYmxvY2tcIiAmJiBfdG9rZW5zLnN0YXJ0ID49IHN0YXJ0ICYmIF90b2tlbnMuZW5kIDw9IGVuZCkge1xuICAgICAgLy9jb25zb2xlLmxvZyhfdG9rZW5zLnN0YXJ0ICsgXCIgXCIgKyBfdG9rZW5zLmVuZCArIFwiIFwiICsgc3RhcnQgKyBcIiBcIiArIGVuZClcbiAgICAgIGlmIChzdGFydCA8PSBfdG9rZW5zLnN0YXJ0ICYmIGVuZCA+PSBfdG9rZW5zLmVuZClcbiAgICAgIHJldHVybiBfdG9rZW5zO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwidG9rZW5ibG9ja1wiKVxuICAgIH0gXG4gICAgLy8gc2VsZXppb25lIFRPS0VOXG4gICAgZWxzZSBpZiAoX3Rva2Vucy50eXBlID09PSBcInRva2VuXCIgJiYgX3Rva2Vucy5zdGFydCA+PSBzdGFydCAmJiBfdG9rZW5zLnN0YXJ0IDw9IGVuZCkge1xuICAgICAgLy9jb25zb2xlLmxvZyhfdG9rZW5zLnN0YXJ0ICsgXCIgXCIgKyBfdG9rZW5zLmVuZCArIFwiIFwiICsgc3RhcnQgKyBcIiBcIiArIGVuZClcbiAgICAgIC8vY29uc29sZS5sb2coXCJ0b2tlblwiKVxuICAgICAgcmV0dXJuIF90b2tlbnM7XG4gICAgfSBcbiAgICAvLyBzY2Fuc2lvbmUgVE9LRU4gZGVudHJvIHVuIFRPS0VOLUJMT0NLIG5vbiBpbnRlcmFtZW50ZSBzZWxlemlvbmF0b1xuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoX3Rva2Vucy50b2tlbnMpKSB7XG4gICAgICAvL8OoIGNvbWUgYWwgbGl2ZWxsbyAwIG1hIGFwcGxpY2F0byBhIF90b2tlbnMudG9rZW5zXG4gICAgICBzZWxlY3RlZFRva2VucyA9IFtdXG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBfdG9rZW5zLnRva2Vucykge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnJlY3Vyc2l2ZUFkZE5ld0Jsb2NrKHN0YXJ0LCBlbmQsIF9jbGFzcywgY2hpbGQpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgIT09IG51bGwpXG4gICAgICAgIHNlbGVjdGVkVG9rZW5zLnB1c2goc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdGVkVG9rZW5zLmxlbmd0aCkge1xuICAgICAgICBsZXQgZmlyc3RfdG9rZW5fc3RhcnQgPSBzZWxlY3RlZFRva2Vuc1swXS5zdGFydDtcbiAgICAgICAgbGV0IGZpcnN0X2luZGV4ID0gX3Rva2Vucy50b2tlbnMubWFwKHQgPT4gdC5zdGFydCkuaW5kZXhPZihmaXJzdF90b2tlbl9zdGFydCk7XG5cbiAgICAgICAgbGV0IG5ld1Rva2VuQmxvY2sgPSB7XG4gICAgICAgICAgdHlwZTogXCJ0b2tlbi1ibG9ja1wiLFxuICAgICAgICAgIHN0YXJ0OiBzZWxlY3RlZFRva2Vuc1swXS5zdGFydCxcbiAgICAgICAgICBlbmQ6IHNlbGVjdGVkVG9rZW5zW3NlbGVjdGVkVG9rZW5zLmxlbmd0aCAtIDFdLmVuZCxcbiAgICAgICAgICB0b2tlbnM6IHNlbGVjdGVkVG9rZW5zLFxuICAgICAgICAgIGxhYmVsOiBfY2xhc3MgJiYgX2NsYXNzLm5hbWUgPyBfY2xhc3MubmFtZSA6IFwiVW5sYWJlbGxlZFwiLFxuICAgICAgICAgIGNsYXNzSWQ6IF9jbGFzcyAmJiBfY2xhc3MuaWQgPyBfY2xhc3MuaWQgOiAwLFxuICAgICAgICAgIGlkOnRoaXMuY3VycmVudElELFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogX2NsYXNzICYmIF9jbGFzcy5jb2xvciA/IF9jbGFzcy5jb2xvciA6IG51bGwsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50SUQgKz0gMTtcbiAgICAgICAgX3Rva2Vucy50b2tlbnMuc3BsaWNlKGZpcnN0X2luZGV4LCBzZWxlY3RlZFRva2Vucy5sZW5ndGgsIG5ld1Rva2VuQmxvY2spO1xuICAgICAgICAvL3BlciBldml0YXJlIGRpIGZhciBhZ2dpdW5nZXJlIFRPS0VOLUJMT0NLIGEgbGl2ZWxsaSByaWNvcnNpdmkgcHJlY2VkZW50aSwgY29tdW5pY28gY2hlIGkgdG9rZW5zIHNvbm8gc3RhdGlcbiAgICAgICAgLy90cmFzZm9ybWF0aSBpbiB0b2tlbi1ibG9ja3Mgc2V0dGFuZG8gc2VsZWN0ZWRUb2tlbnMgYSBudWxsXG4gICAgICAgIHNlbGVjdGVkVG9rZW5zID0gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgICAvL3NlIHNlbGVjdGVkVG9rZW5zID0gW10gLS0+IHJpdG9ybmEgbnVsbCAocG9zc2liaWxlIGNvbiBsaXZlbGxpIHN1Y2Nlc3NpdmkgYWxsbyAwIHNlIFRPS0VOLUJMT0NLIHNlbnphIFRPS0VOIHNlbGV6aW9uYXRpKVxuICAgIGlmIChzZWxlY3RlZFRva2VucyAhPT0gbnVsbCAmJiAhc2VsZWN0ZWRUb2tlbnMubGVuZ3RoKVxuICAgIHNlbGVjdGVkVG9rZW5zID0gbnVsbFxuXG4gICAgLy8gc2UgVE9LRU4gbm9uIHNlbGV6aW9uYXRvIC0tPiByZXR1cm4gbnVsbCBcbiAgICAvLyBzZSBUT0tFTi1CTE9DSyBub24gaW50ZXJhbWVudGUgc2VsZXppb25hdG8gZSBzZW56YSBUT0tFTiBpbnRlcm5pIHNlbGV6aW9uYXRpXG4gICAgLy8gaWwgdmFsb3JlIHJpdG9ybmF0byBkYSBsaXZlbGxvIDAgKHRoaXMudG9rZW5zKSB2aWVuZSBpZ25vcmF0b1xuICAgIHJldHVybiBzZWxlY3RlZFRva2Vuc1xuICB9XG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgdG9rZW4gYmxvY2sgYW5kIHB1dHMgYmFjayBhbGwgdGhlIHRva2VucyBpbiB0aGVpciBvcmlnaW5hbCBwb3NpdGlvblxuICAgKiBwcm9ibGVtYSBwZXJmb3JtYW5jZSBSSVNPTFRPXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBibG9ja1N0YXJ0ICdzdGFydCcgdmFsdWUgb2YgdGhlIHRva2VuIGJsb2NrIHRvIHJlbW92ZVxuICAgKiBAcGFyYW0ge051bWJlcn0gYmxvY2tFbmQgJ2VuZCcgdmFsdWUgb2YgdGhlIHRva2VuIGJsb2NrIHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlQmxvY2soYmxvY2tTdGFydCwgYmxvY2tFbmQpIHtcbiAgICB0aGlzLnJlY3Vyc2l2ZVJlbW92ZUJsb2NrKGJsb2NrU3RhcnQsIGJsb2NrRW5kLCB0aGlzLnRva2VucylcbiAgfVxuICByZWN1cnNpdmVSZW1vdmVCbG9jayhibG9ja1N0YXJ0LCBibG9ja0VuZCwgX3Rva2Vucykge1xuICAgIGxldCBzZWxlY3RlZEJsb2NrID0gbnVsbDtcblxuICAgIC8vIExJVkVMTE8gMFxuICAgIGlmIChBcnJheS5pc0FycmF5KF90b2tlbnMpKSB7XG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBfdG9rZW5zKSB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcInRva2VuLWJsb2NrXCIpIHsgLy9wZXIgcGVyZm9ybWFuY2U6IHZlcmlmaWNvIHNlIHNpYSB1biBibG9jY28gZGEgcmltdW92ZXJlIG8gc2UgbmUgY29udGVuZ2Egc29sbyBzZSDDqCB1biBUT0tFTi1CTE9DS1xuICAgICAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMucmVjdXJzaXZlUmVtb3ZlQmxvY2soYmxvY2tTdGFydCwgYmxvY2tFbmQsIGNoaWxkKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvY2sgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgIGJyZWFrOyAvL21pIGZlcm1vIHNlIGhvIGluZGl2aXVhdG8gaWwgdG9rZW4tYmxvY2sgZGEgcmltdW92ZXJlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvL3NlIGhvIHRyb3ZhdG8gYSBxdWVzdG8gbGl2ZWxsbyBpbCBCTE9DSyBkYSByaW11b3ZlcmUgXG4gICAgICBpZiAoc2VsZWN0ZWRCbG9jayAhPT0gbnVsbCkge1xuICAgICAgICAvL290dGVuZ28gaW5pY2kgcGVyIGxhIHJpbW96aW9uZVxuICAgICAgICBsZXQgYmxvY2tfc3RhcnQgPSBzZWxlY3RlZEJsb2NrLnN0YXJ0O1xuICAgICAgICBsZXQgYmxvY2tfaW5kZXggPSBfdG9rZW5zLm1hcCh0ID0+IHQuc3RhcnQpLmluZGV4T2YoYmxvY2tfc3RhcnQpO1xuICAgICAgICAvL21pIHNhbHZvIGkgVE9LRU5TIGUgVE9LRU4tQkxPQ0sgY29udGVudXRpIGluIG1vZG8gZGEgYWdnaXVuZ2VyaSBzaW5nb2xhcm1lbnRlXG4gICAgICAgIGxldCB0b2tlbnMgPSBzZWxlY3RlZEJsb2NrLnRva2VucztcblxuICAgICAgICAvL3JpbXVvdm8gaWwgdG9rZW4gYmxvY2tcbiAgICAgICAgX3Rva2Vucy5zcGxpY2UoYmxvY2tfaW5kZXgsIDEpO1xuICAgICAgICAvL2FnZ2l1bmdvIGkgdG9rZW5zIGludGVybmksIGEgbGl2ZWxsbyAwIChxdWlkbmkgc292cmFzY2l2byB0cmFucXVpbGxhbWVudGUgdGhpcy50b2tlbnMsIHZpc3RvIGNoZSBfdG9rZW5zIMOoIHBhc3NhdG8gcGVyIHZhbG9yZSlcbiAgICAgICAgdGhpcy50b2tlbnMgPSBfdG9rZW5zLnNsaWNlKDAsIGJsb2NrX2luZGV4KS5jb25jYXQodG9rZW5zLCBfdG9rZW5zLnNsaWNlKGJsb2NrX2luZGV4KSk7IC8vKHBlciBwZXJmb3JtYW5jZSlcbiAgICAgICAgLy9yaXRvcm5vIG51bGwuLi4gdmVycsOgIGlnbm9yYXRvXG4gICAgICAgIHNlbGVjdGVkQmxvY2sgPSBudWxsO1xuICAgICAgfVxuICAgIH0gXG4gICAgLy9yaW1vemlvbmUgZGkgcXVlc3RvIFRPQ0tFTi1CTE9DSyBhZCB1biBjZXJ0byBsaXZlbGxvIGlubmVzdGF0byA+MCAtLT4gcml0b3JubyBpbCBCTE9DSyBjb3PDrCBhaSBsaXZlbGxpIHJpY2hpYW1hbnRpIG1pIHNvc3RpdHVpc2Nvbm8gY29pIG1pZWkgLnRva2Vuc1xuICAgIGVsc2UgaWYgKF90b2tlbnMudHlwZSA9PT0gXCJ0b2tlbi1ibG9ja1wiICYmIF90b2tlbnMuc3RhcnQgPT09IGJsb2NrU3RhcnQgJiYgX3Rva2Vucy5lbmQgPT09IGJsb2NrRW5kKSB7XG4gICAgICByZXR1cm4gX3Rva2VucztcbiAgICB9IFxuICAgIC8vc2UgVE9DS0VOLUJMT0NLIG5vbiDDqCBkYSByaW11b3ZlcmUgYWxsb3JhIG1pIGNvbXBvcnRvIHJpY29yc2l2YW1lbnRlLCBjb21lIHBlciBMSVZFTExPIDAgbWEgYWdlbmRvIHN1aSAudG9rZW5zXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShfdG9rZW5zLnRva2VucykpIHtcbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIF90b2tlbnMudG9rZW5zKSB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcInRva2VuLWJsb2NrXCIpIHsgLy8ocGVyIHBlcmZvcm1hbmNlKVxuICAgICAgICAgIGxldCBzZWxlY3RlZCA9IHRoaXMucmVjdXJzaXZlUmVtb3ZlQmxvY2soYmxvY2tTdGFydCwgYmxvY2tFbmQsIGNoaWxkKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkQmxvY2sgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdGVkQmxvY2sgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IGJsb2NrX3N0YXJ0ID0gc2VsZWN0ZWRCbG9jay5zdGFydDtcbiAgICAgICAgbGV0IGJsb2NrX2luZGV4ID0gX3Rva2Vucy50b2tlbnMubWFwKHQgPT4gdC5zdGFydCkuaW5kZXhPZihibG9ja19zdGFydCk7XG4gICAgICAgIGxldCB0b2tlbnMgPSBzZWxlY3RlZEJsb2NrLnRva2VucztcblxuICAgICAgICAvL3JpbXVvdm8gaWwgdG9rZW4gYmxvY2tcbiAgICAgICAgX3Rva2Vucy50b2tlbnMuc3BsaWNlKGJsb2NrX2luZGV4LCAxKTtcbiAgICAgICAgLy9hZ2dpdW5nbyBpIHRva2Vuc1xuICAgICAgICBfdG9rZW5zLnRva2VucyA9IF90b2tlbnMudG9rZW5zLnNsaWNlKDAsIGJsb2NrX2luZGV4KS5jb25jYXQodG9rZW5zLCBfdG9rZW5zLnRva2Vucy5zbGljZShibG9ja19pbmRleCkpOyAvLyhwZXIgcGVyZm9ybWFuY2UpXG4gICAgICAgIHNlbGVjdGVkQmxvY2sgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICAvL0xJVkVMTE8gMCByaXRvcm5hIG51bGxcbiAgICAvL0xJVkVMTEkgaW5uZXN0YXRpIG5vbiBkYSByaW11b3ZlcmUgcml0b3JuYW5vIG51bGxcbiAgICAvL3N1IFRPQ0tFTiBub24gdmllbmUgbWFpIGF2dmlhdGEgbGEgY2hpYW1hdGEgcmljb3JzaXZhXG4gICAgLy9UT0NLRU4tQkxPQ0sgc2VsZXppb25hdGkgcml0b3JuYW5vIHByaW1hIGRpIHF1ZXN0YSByaWdhLCBuZWwgbG9ybyBlbHNlaWZcbiAgICAvL8OoIGltcG9ydGFudGUgcml0b3JuYXJlIG51bGwgaW4gbW9kbyBjaGUgZnVuemlvbmlubyBpIGNvbnRyb2xsaSBzdSBzZWxlY3RlZFxuICAgIHJldHVybiBzZWxlY3RlZEJsb2NrXG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgdGhlIHRhZyBibG9ja3MgYW5kIGxlYXZlcyBvbmx5IHRva2Vuc1xuICAgKi9cbiAgcmVzZXRCbG9ja3MoKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0aGlzLmluaXRpYWxUb2tlbnMuc2xpY2UoKTsgLy9TSEFMTE9XIENPUFlcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnRzIHRoZSB0b2tlbnMgYW5kIHRoZSB0b2tlbiBibG9ja3MgYXMgYW5ub3RhdGlvbnNcbiAgICovXG4gIGV4cG9ydEFzQW5ub3RhdGlvbigpIHtcbiAgICBsZXQgZW50aXRpZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2tlbnNbaV0udHlwZSA9PT0gXCJ0b2tlbi1ibG9ja1wiKSB7XG4gICAgICAgIGxldCBiID0gdGhpcy50b2tlbnNbaV07XG4gICAgICAgIGVudGl0aWVzLnB1c2goW2Iuc3RhcnQsIGIuZW5kLCBiLmxhYmVsXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbnRpdGllcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2tlbk1hbmFnZXI7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFQQTtBQUFBO0FBQ0E7QUFEQTtBQWlCQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQ0E7QUF3Q0E7QUFDQTtBQUdBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUF6QkE7QUE0QkE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/token-manager.js\n");

/***/ })

})