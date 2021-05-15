webpackHotUpdate("app",{

/***/ "./src/components/token-manager.js":
/*!*****************************************!*\
  !*** ./src/components/token-manager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ \"./node_modules/core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.splice */ \"./node_modules/core-js/modules/es.array.splice.js\");\n/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var _home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\n\n\n\n\n\n\n\nvar TokenManager = /*#__PURE__*/function () {\n  /**\n   *\n   * @param {Array} tokens\n   */\n  function TokenManager(tokens, oldTM) {\n    Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, TokenManager);\n\n    //manage the recreation from an old TM\n    if (arguments.length == 1) {\n      //new token manager\n      this.currentID = 0; //univocal identifier\n\n      this.tokens = tokens.map(function (t) {\n        return {\n          type: \"token\",\n          start: t[0],\n          end: t[1],\n          text: t[2]\n        };\n      });\n      this.words = tokens.map(function (t) {\n        return t[2];\n      });\n      this.initialTokens = this.tokens.slice(); //SHALLOW COPY\n    } else {\n      //in case an oldTM is available\n      this.currentID = oldTM.currentID;\n      this.tokens = oldTM.tokens;\n      this.words = oldTM.words;\n      this.initialTokens = oldTM.initialTokens;\n    }\n  }\n  /**\n   * Creates a new token block with the tokens whose starts match the input\n   * parameters\n   *\n   * @param {Number} start 'start' value of the token forming the start of the token block\n   * @param {Number} end 'start' value of the token forming the end of the token block\n   * @param {Number} _class the id of the class to highlight\n   */\n\n\n  Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(TokenManager, [{\n    key: \"addNewBlock\",\n    value: function addNewBlock(_start, _end, _class) {\n      var start = _end < _start ? _end : _start;\n      var end = _end > _start ? _end : _start; //console.log(start);\n      //console.log(end);\n\n      this.recursiveAddNewBlock(start, end, _class, this.tokens); //console.log(this.tokens)\n    }\n  }, {\n    key: \"recursiveAddNewBlock\",\n    value: function recursiveAddNewBlock(start, end, _class, _tokens) {\n      var selectedTokens = null; //livello 0: ci entra solo e sempre per _tokens=this.tokens\n\n      if (Array.isArray(_tokens)) {\n        selectedTokens = []; //pusha tutti i TOKEN e TOKEN-BLOCK di livello 0 selezionati in selectedTokens con chiamate ricorsive sui figli\n\n        var _iterator = Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_tokens),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var child = _step.value;\n            var selected = this.recursiveAddNewBlock(start, end, _class, child);\n            if (selected !== null) selectedTokens.push(selected);\n          } //se qualche TOKEN o TOKEN-BLOCK è stato selezionato -->\n\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        if (selectedTokens.length) {\n          //prendo start del primo token selezionato e trovo l'indice a cui corrisponde tra i _tokens\n          var first_token_start = selectedTokens[0].start;\n\n          var first_index = _tokens.map(function (t) {\n            return t.start;\n          }).indexOf(first_token_start); //costruisco nuovo TOKEN-BLOCK coi selectedTokens\n\n\n          var newTokenBlock = {\n            type: \"token-block\",\n            start: selectedTokens[0].start,\n            end: selectedTokens[selectedTokens.length - 1].end,\n            tokens: selectedTokens,\n            label: _class && _class.name ? _class.name : \"Unlabelled\",\n            classId: _class && _class.id ? _class.id : 0,\n            id: this.currentID,\n            attrs: {},\n            backgroundColor: _class && _class.color ? _class.color : null\n          };\n\n          var _iterator2 = Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_class.attributes),\n              _step2;\n\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              var key = _step2.value;\n              newTokenBlock.attrs[key] = \"\";\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n\n          console.log(newTokenBlock);\n          this.currentID += 1; //rimpiazzo ogni token selezionato col nuovo TOKEN-BLOCK (che li contiene)\n\n          _tokens.splice(first_index, selectedTokens.length, newTokenBlock);\n        }\n      } // selezione INTERO TOKEN-BLOCK, se è token-block non interamente selezionato entrerà nel 4o elseif\n      else if (_tokens.type === \"token-block\" && _tokens.start >= start && _tokens.end <= end) {\n          //console.log(_tokens.start + \" \" + _tokens.end + \" \" + start + \" \" + end)\n          if (start <= _tokens.start && end >= _tokens.end) return _tokens; //console.log(\"tokenblock\")\n        } // selezione TOKEN\n        else if (_tokens.type === \"token\" && _tokens.start >= start && _tokens.start <= end) {\n            //console.log(_tokens.start + \" \" + _tokens.end + \" \" + start + \" \" + end)\n            //console.log(\"token\")\n            return _tokens;\n          } // scansione TOKEN dentro un TOKEN-BLOCK non interamente selezionato\n          else if (Array.isArray(_tokens.tokens)) {\n              //è come al livello 0 ma applicato a _tokens.tokens\n              selectedTokens = [];\n\n              var _iterator3 = Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_tokens.tokens),\n                  _step3;\n\n              try {\n                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n                  var _child = _step3.value;\n\n                  var _selected = this.recursiveAddNewBlock(start, end, _class, _child);\n\n                  if (_selected !== null) selectedTokens.push(_selected);\n                }\n              } catch (err) {\n                _iterator3.e(err);\n              } finally {\n                _iterator3.f();\n              }\n\n              if (selectedTokens.length) {\n                var _first_token_start = selectedTokens[0].start;\n\n                var _first_index = _tokens.tokens.map(function (t) {\n                  return t.start;\n                }).indexOf(_first_token_start);\n\n                var _newTokenBlock = {\n                  type: \"token-block\",\n                  start: selectedTokens[0].start,\n                  end: selectedTokens[selectedTokens.length - 1].end,\n                  tokens: selectedTokens,\n                  label: _class && _class.name ? _class.name : \"Unlabelled\",\n                  classId: _class && _class.id ? _class.id : 0,\n                  id: this.currentID,\n                  backgroundColor: _class && _class.color ? _class.color : null\n                };\n                this.currentID += 1;\n\n                _tokens.tokens.splice(_first_index, selectedTokens.length, _newTokenBlock); //per evitare di far aggiungere TOKEN-BLOCK a livelli ricorsivi precedenti, comunico che i tokens sono stati\n                //trasformati in token-blocks settando selectedTokens a null\n\n\n                selectedTokens = null;\n              }\n            } //se selectedTokens = [] --> ritorna null (possibile con livelli successivi allo 0 se TOKEN-BLOCK senza TOKEN selezionati)\n\n\n      if (selectedTokens !== null && !selectedTokens.length) selectedTokens = null; // se TOKEN non selezionato --> return null \n      // se TOKEN-BLOCK non interamente selezionato e senza TOKEN interni selezionati\n      // il valore ritornato da livello 0 (this.tokens) viene ignorato\n\n      return selectedTokens;\n    }\n    /**\n     * Removes a token block and puts back all the tokens in their original position\n     * problema performance RISOLTO\n     *\n     * @param {Number} blockStart 'start' value of the token block to remove\n     * @param {Number} blockEnd 'end' value of the token block to remove\n     */\n\n  }, {\n    key: \"removeBlock\",\n    value: function removeBlock(blockStart, blockEnd) {\n      this.recursiveRemoveBlock(blockStart, blockEnd, this.tokens);\n    }\n  }, {\n    key: \"recursiveRemoveBlock\",\n    value: function recursiveRemoveBlock(blockStart, blockEnd, _tokens) {\n      var selectedBlock = null; // LIVELLO 0\n\n      if (Array.isArray(_tokens)) {\n        var _iterator4 = Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_tokens),\n            _step4;\n\n        try {\n          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n            var child = _step4.value;\n\n            if (child.type === \"token-block\") {\n              //per performance: verifico se sia un blocco da rimuovere o se ne contenga solo se è un TOKEN-BLOCK\n              var selected = this.recursiveRemoveBlock(blockStart, blockEnd, child);\n\n              if (selected !== null) {\n                selectedBlock = selected;\n                break; //mi fermo se ho indiviuato il token-block da rimuovere\n              }\n            }\n          } //se ho trovato a questo livello il BLOCK da rimuovere \n\n        } catch (err) {\n          _iterator4.e(err);\n        } finally {\n          _iterator4.f();\n        }\n\n        if (selectedBlock !== null) {\n          //ottengo inici per la rimozione\n          var block_start = selectedBlock.start;\n\n          var block_index = _tokens.map(function (t) {\n            return t.start;\n          }).indexOf(block_start); //mi salvo i TOKENS e TOKEN-BLOCK contenuti in modo da aggiungeri singolarmente\n\n\n          var tokens = selectedBlock.tokens; //rimuovo il token block\n\n          _tokens.splice(block_index, 1); //aggiungo i tokens interni, a livello 0 (quidni sovrascivo tranquillamente this.tokens, visto che _tokens è passato per valore)\n\n\n          this.tokens = _tokens.slice(0, block_index).concat(tokens, _tokens.slice(block_index)); //(per performance)\n          //ritorno null... verrà ignorato\n\n          selectedBlock = null;\n        }\n      } //rimozione di questo TOCKEN-BLOCK ad un certo livello innestato >0 --> ritorno il BLOCK così ai livelli richiamanti mi sostituiscono coi miei .tokens\n      else if (_tokens.type === \"token-block\" && _tokens.start === blockStart && _tokens.end === blockEnd) {\n          return _tokens;\n        } //se TOCKEN-BLOCK non è da rimuovere allora mi comporto ricorsivamente, come per LIVELLO 0 ma agendo sui .tokens\n        else if (Array.isArray(_tokens.tokens)) {\n            var _iterator5 = Object(_home_zerbi_Documents_III_anno_tesi_sentag_ui_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_tokens.tokens),\n                _step5;\n\n            try {\n              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n                var _child2 = _step5.value;\n\n                if (_child2.type === \"token-block\") {\n                  //(per performance)\n                  var _selected2 = this.recursiveRemoveBlock(blockStart, blockEnd, _child2);\n\n                  if (_selected2 !== null) {\n                    selectedBlock = _selected2;\n                    break;\n                  }\n                }\n              }\n            } catch (err) {\n              _iterator5.e(err);\n            } finally {\n              _iterator5.f();\n            }\n\n            if (selectedBlock !== null) {\n              var _block_start = selectedBlock.start;\n\n              var _block_index = _tokens.tokens.map(function (t) {\n                return t.start;\n              }).indexOf(_block_start);\n\n              var _tokens2 = selectedBlock.tokens; //rimuovo il token block\n\n              _tokens.tokens.splice(_block_index, 1); //aggiungo i tokens\n\n\n              _tokens.tokens = _tokens.tokens.slice(0, _block_index).concat(_tokens2, _tokens.tokens.slice(_block_index)); //(per performance)\n\n              selectedBlock = null;\n            }\n          } //LIVELLO 0 ritorna null\n      //LIVELLI innestati non da rimuovere ritornano null\n      //su TOCKEN non viene mai avviata la chiamata ricorsiva\n      //TOCKEN-BLOCK selezionati ritornano prima di questa riga, nel loro elseif\n      //è importante ritornare null in modo che funzionino i controlli su selected\n\n\n      return selectedBlock;\n    }\n    /**\n     * Removes all the tag blocks and leaves only tokens\n     */\n\n  }, {\n    key: \"resetBlocks\",\n    value: function resetBlocks() {\n      this.tokens = this.initialTokens.slice(); //SHALLOW COPY\n    }\n    /**\n     * Exports the tokens and the token blocks as annotations\n     */\n\n  }, {\n    key: \"exportAsAnnotation\",\n    value: function exportAsAnnotation() {\n      var entities = [];\n\n      for (var i = 0; i < this.tokens.length; i++) {\n        if (this.tokens[i].type === \"token-block\") {\n          var b = this.tokens[i];\n          entities.push([b.start, b.end, b.label]);\n        }\n      }\n\n      return entities;\n    }\n  }]);\n\n  return TokenManager;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenManager);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2tlbi1tYW5hZ2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9rZW4tbWFuYWdlci5qcz80N2E3Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRva2VuTWFuYWdlciB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSB0b2tlbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHRva2Vucywgb2xkVE0pIHsgLy9tYW5hZ2UgdGhlIHJlY3JlYXRpb24gZnJvbSBhbiBvbGQgVE1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKSB7IC8vbmV3IHRva2VuIG1hbmFnZXJcbiAgICAgIHRoaXMuY3VycmVudElEID0gMDsgLy91bml2b2NhbCBpZGVudGlmaWVyXG4gICAgICB0aGlzLnRva2VucyA9IHRva2Vucy5tYXAoKHQpID0+ICh7XG4gICAgICAgIHR5cGU6IFwidG9rZW5cIixcbiAgICAgICAgc3RhcnQ6IHRbMF0sXG4gICAgICAgIGVuZDogdFsxXSxcbiAgICAgICAgdGV4dDogdFsyXSxcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMud29yZHMgPSB0b2tlbnMubWFwKHQgPT4gdFsyXSk7XG4gICAgICB0aGlzLmluaXRpYWxUb2tlbnMgPSB0aGlzLnRva2Vucy5zbGljZSgpOyAvL1NIQUxMT1cgQ09QWVxuICAgIH1cbiAgICBlbHNlIHsgLy9pbiBjYXNlIGFuIG9sZFRNIGlzIGF2YWlsYWJsZVxuICAgICAgdGhpcy5jdXJyZW50SUQgPSBvbGRUTS5jdXJyZW50SUQ7XG4gICAgICB0aGlzLnRva2VucyA9IG9sZFRNLnRva2Vuc1xuICAgICAgdGhpcy53b3JkcyA9IG9sZFRNLndvcmRzO1xuICAgICAgdGhpcy5pbml0aWFsVG9rZW5zID0gb2xkVE0uaW5pdGlhbFRva2VucztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyB0b2tlbiBibG9jayB3aXRoIHRoZSB0b2tlbnMgd2hvc2Ugc3RhcnRzIG1hdGNoIHRoZSBpbnB1dFxuICAgKiBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCAnc3RhcnQnIHZhbHVlIG9mIHRoZSB0b2tlbiBmb3JtaW5nIHRoZSBzdGFydCBvZiB0aGUgdG9rZW4gYmxvY2tcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGVuZCAnc3RhcnQnIHZhbHVlIG9mIHRoZSB0b2tlbiBmb3JtaW5nIHRoZSBlbmQgb2YgdGhlIHRva2VuIGJsb2NrXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBfY2xhc3MgdGhlIGlkIG9mIHRoZSBjbGFzcyB0byBoaWdobGlnaHRcbiAgICovXG4gIGFkZE5ld0Jsb2NrKF9zdGFydCwgX2VuZCwgX2NsYXNzKSB7XG4gICAgbGV0IHN0YXJ0ID0gX2VuZCA8IF9zdGFydCA/IF9lbmQgOiBfc3RhcnQ7XG4gICAgbGV0IGVuZCA9IF9lbmQgPiBfc3RhcnQgPyBfZW5kIDogX3N0YXJ0O1xuICAgIC8vY29uc29sZS5sb2coc3RhcnQpO1xuICAgIC8vY29uc29sZS5sb2coZW5kKTtcbiAgICB0aGlzLnJlY3Vyc2l2ZUFkZE5ld0Jsb2NrKHN0YXJ0LCBlbmQsIF9jbGFzcywgdGhpcy50b2tlbnMpO1xuICAgIC8vY29uc29sZS5sb2codGhpcy50b2tlbnMpXG4gIH1cbiAgcmVjdXJzaXZlQWRkTmV3QmxvY2soc3RhcnQsIGVuZCwgX2NsYXNzLCBfdG9rZW5zKSB7XG4gICAgbGV0IHNlbGVjdGVkVG9rZW5zID0gbnVsbDtcblxuICAgIC8vbGl2ZWxsbyAwOiBjaSBlbnRyYSBzb2xvIGUgc2VtcHJlIHBlciBfdG9rZW5zPXRoaXMudG9rZW5zXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoX3Rva2VucykpIHtcbiAgICAgIHNlbGVjdGVkVG9rZW5zID0gW11cbiAgICAgIC8vcHVzaGEgdHV0dGkgaSBUT0tFTiBlIFRPS0VOLUJMT0NLIGRpIGxpdmVsbG8gMCBzZWxlemlvbmF0aSBpbiBzZWxlY3RlZFRva2VucyBjb24gY2hpYW1hdGUgcmljb3JzaXZlIHN1aSBmaWdsaVxuICAgICAgZm9yIChsZXQgY2hpbGQgb2YgX3Rva2Vucykge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnJlY3Vyc2l2ZUFkZE5ld0Jsb2NrKHN0YXJ0LCBlbmQsIF9jbGFzcywgY2hpbGQpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgIT09IG51bGwpXG4gICAgICAgIHNlbGVjdGVkVG9rZW5zLnB1c2goc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgICAgLy9zZSBxdWFsY2hlIFRPS0VOIG8gVE9LRU4tQkxPQ0sgw6ggc3RhdG8gc2VsZXppb25hdG8gLS0+XG4gICAgICBpZiAoc2VsZWN0ZWRUb2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIC8vcHJlbmRvIHN0YXJ0IGRlbCBwcmltbyB0b2tlbiBzZWxlemlvbmF0byBlIHRyb3ZvIGwnaW5kaWNlIGEgY3VpIGNvcnJpc3BvbmRlIHRyYSBpIF90b2tlbnNcbiAgICAgICAgbGV0IGZpcnN0X3Rva2VuX3N0YXJ0ID0gc2VsZWN0ZWRUb2tlbnNbMF0uc3RhcnQ7XG4gICAgICAgIGxldCBmaXJzdF9pbmRleCA9IF90b2tlbnMubWFwKHQgPT4gdC5zdGFydCkuaW5kZXhPZihmaXJzdF90b2tlbl9zdGFydCk7XG4gICAgICAgIFxuICAgICAgICAvL2Nvc3RydWlzY28gbnVvdm8gVE9LRU4tQkxPQ0sgY29pIHNlbGVjdGVkVG9rZW5zXG4gICAgICAgIGxldCBuZXdUb2tlbkJsb2NrID0ge1xuICAgICAgICAgIHR5cGU6IFwidG9rZW4tYmxvY2tcIixcbiAgICAgICAgICBzdGFydDogc2VsZWN0ZWRUb2tlbnNbMF0uc3RhcnQsXG4gICAgICAgICAgZW5kOiBzZWxlY3RlZFRva2Vuc1tzZWxlY3RlZFRva2Vucy5sZW5ndGggLSAxXS5lbmQsXG4gICAgICAgICAgdG9rZW5zOiBzZWxlY3RlZFRva2VucyxcbiAgICAgICAgICBsYWJlbDogX2NsYXNzICYmIF9jbGFzcy5uYW1lID8gX2NsYXNzLm5hbWUgOiBcIlVubGFiZWxsZWRcIixcbiAgICAgICAgICBjbGFzc0lkOiBfY2xhc3MgJiYgX2NsYXNzLmlkID8gX2NsYXNzLmlkIDogMCxcbiAgICAgICAgICBpZDp0aGlzLmN1cnJlbnRJRCxcbiAgICAgICAgICBhdHRyczp7fSxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IF9jbGFzcyAmJiBfY2xhc3MuY29sb3IgPyBfY2xhc3MuY29sb3IgOiBudWxsLFxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIF9jbGFzcy5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgbmV3VG9rZW5CbG9jay5hdHRyc1trZXldID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUb2tlbkJsb2NrKVxuICAgICAgICB0aGlzLmN1cnJlbnRJRCArPSAxO1xuICAgICAgICAvL3JpbXBpYXp6byBvZ25pIHRva2VuIHNlbGV6aW9uYXRvIGNvbCBudW92byBUT0tFTi1CTE9DSyAoY2hlIGxpIGNvbnRpZW5lKVxuICAgICAgICBfdG9rZW5zLnNwbGljZShmaXJzdF9pbmRleCwgc2VsZWN0ZWRUb2tlbnMubGVuZ3RoLCBuZXdUb2tlbkJsb2NrKTtcbiAgICAgIH1cbiAgICB9IFxuICAgIC8vIHNlbGV6aW9uZSBJTlRFUk8gVE9LRU4tQkxPQ0ssIHNlIMOoIHRva2VuLWJsb2NrIG5vbiBpbnRlcmFtZW50ZSBzZWxlemlvbmF0byBlbnRyZXLDoCBuZWwgNG8gZWxzZWlmXG4gICAgZWxzZSBpZiAoX3Rva2Vucy50eXBlID09PSBcInRva2VuLWJsb2NrXCIgJiYgX3Rva2Vucy5zdGFydCA+PSBzdGFydCAmJiBfdG9rZW5zLmVuZCA8PSBlbmQpIHtcbiAgICAgIC8vY29uc29sZS5sb2coX3Rva2Vucy5zdGFydCArIFwiIFwiICsgX3Rva2Vucy5lbmQgKyBcIiBcIiArIHN0YXJ0ICsgXCIgXCIgKyBlbmQpXG4gICAgICBpZiAoc3RhcnQgPD0gX3Rva2Vucy5zdGFydCAmJiBlbmQgPj0gX3Rva2Vucy5lbmQpXG4gICAgICByZXR1cm4gX3Rva2VucztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInRva2VuYmxvY2tcIilcbiAgICB9IFxuICAgIC8vIHNlbGV6aW9uZSBUT0tFTlxuICAgIGVsc2UgaWYgKF90b2tlbnMudHlwZSA9PT0gXCJ0b2tlblwiICYmIF90b2tlbnMuc3RhcnQgPj0gc3RhcnQgJiYgX3Rva2Vucy5zdGFydCA8PSBlbmQpIHtcbiAgICAgIC8vY29uc29sZS5sb2coX3Rva2Vucy5zdGFydCArIFwiIFwiICsgX3Rva2Vucy5lbmQgKyBcIiBcIiArIHN0YXJ0ICsgXCIgXCIgKyBlbmQpXG4gICAgICAvL2NvbnNvbGUubG9nKFwidG9rZW5cIilcbiAgICAgIHJldHVybiBfdG9rZW5zO1xuICAgIH0gXG4gICAgLy8gc2NhbnNpb25lIFRPS0VOIGRlbnRybyB1biBUT0tFTi1CTE9DSyBub24gaW50ZXJhbWVudGUgc2VsZXppb25hdG9cbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KF90b2tlbnMudG9rZW5zKSkge1xuICAgICAgLy/DqCBjb21lIGFsIGxpdmVsbG8gMCBtYSBhcHBsaWNhdG8gYSBfdG9rZW5zLnRva2Vuc1xuICAgICAgc2VsZWN0ZWRUb2tlbnMgPSBbXVxuICAgICAgZm9yIChsZXQgY2hpbGQgb2YgX3Rva2Vucy50b2tlbnMpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gdGhpcy5yZWN1cnNpdmVBZGROZXdCbG9jayhzdGFydCwgZW5kLCBfY2xhc3MsIGNoaWxkKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkICE9PSBudWxsKVxuICAgICAgICBzZWxlY3RlZFRva2Vucy5wdXNoKHNlbGVjdGVkKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxlY3RlZFRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGZpcnN0X3Rva2VuX3N0YXJ0ID0gc2VsZWN0ZWRUb2tlbnNbMF0uc3RhcnQ7XG4gICAgICAgIGxldCBmaXJzdF9pbmRleCA9IF90b2tlbnMudG9rZW5zLm1hcCh0ID0+IHQuc3RhcnQpLmluZGV4T2YoZmlyc3RfdG9rZW5fc3RhcnQpO1xuXG4gICAgICAgIGxldCBuZXdUb2tlbkJsb2NrID0ge1xuICAgICAgICAgIHR5cGU6IFwidG9rZW4tYmxvY2tcIixcbiAgICAgICAgICBzdGFydDogc2VsZWN0ZWRUb2tlbnNbMF0uc3RhcnQsXG4gICAgICAgICAgZW5kOiBzZWxlY3RlZFRva2Vuc1tzZWxlY3RlZFRva2Vucy5sZW5ndGggLSAxXS5lbmQsXG4gICAgICAgICAgdG9rZW5zOiBzZWxlY3RlZFRva2VucyxcbiAgICAgICAgICBsYWJlbDogX2NsYXNzICYmIF9jbGFzcy5uYW1lID8gX2NsYXNzLm5hbWUgOiBcIlVubGFiZWxsZWRcIixcbiAgICAgICAgICBjbGFzc0lkOiBfY2xhc3MgJiYgX2NsYXNzLmlkID8gX2NsYXNzLmlkIDogMCxcbiAgICAgICAgICBpZDp0aGlzLmN1cnJlbnRJRCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IF9jbGFzcyAmJiBfY2xhc3MuY29sb3IgPyBfY2xhc3MuY29sb3IgOiBudWxsLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudElEICs9IDE7XG4gICAgICAgIF90b2tlbnMudG9rZW5zLnNwbGljZShmaXJzdF9pbmRleCwgc2VsZWN0ZWRUb2tlbnMubGVuZ3RoLCBuZXdUb2tlbkJsb2NrKTtcbiAgICAgICAgLy9wZXIgZXZpdGFyZSBkaSBmYXIgYWdnaXVuZ2VyZSBUT0tFTi1CTE9DSyBhIGxpdmVsbGkgcmljb3JzaXZpIHByZWNlZGVudGksIGNvbXVuaWNvIGNoZSBpIHRva2VucyBzb25vIHN0YXRpXG4gICAgICAgIC8vdHJhc2Zvcm1hdGkgaW4gdG9rZW4tYmxvY2tzIHNldHRhbmRvIHNlbGVjdGVkVG9rZW5zIGEgbnVsbFxuICAgICAgICBzZWxlY3RlZFRva2VucyA9IG51bGxcbiAgICAgIH1cbiAgICB9XG4gICAgLy9zZSBzZWxlY3RlZFRva2VucyA9IFtdIC0tPiByaXRvcm5hIG51bGwgKHBvc3NpYmlsZSBjb24gbGl2ZWxsaSBzdWNjZXNzaXZpIGFsbG8gMCBzZSBUT0tFTi1CTE9DSyBzZW56YSBUT0tFTiBzZWxlemlvbmF0aSlcbiAgICBpZiAoc2VsZWN0ZWRUb2tlbnMgIT09IG51bGwgJiYgIXNlbGVjdGVkVG9rZW5zLmxlbmd0aClcbiAgICBzZWxlY3RlZFRva2VucyA9IG51bGxcblxuICAgIC8vIHNlIFRPS0VOIG5vbiBzZWxlemlvbmF0byAtLT4gcmV0dXJuIG51bGwgXG4gICAgLy8gc2UgVE9LRU4tQkxPQ0sgbm9uIGludGVyYW1lbnRlIHNlbGV6aW9uYXRvIGUgc2VuemEgVE9LRU4gaW50ZXJuaSBzZWxlemlvbmF0aVxuICAgIC8vIGlsIHZhbG9yZSByaXRvcm5hdG8gZGEgbGl2ZWxsbyAwICh0aGlzLnRva2VucykgdmllbmUgaWdub3JhdG9cbiAgICByZXR1cm4gc2VsZWN0ZWRUb2tlbnNcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlcyBhIHRva2VuIGJsb2NrIGFuZCBwdXRzIGJhY2sgYWxsIHRoZSB0b2tlbnMgaW4gdGhlaXIgb3JpZ2luYWwgcG9zaXRpb25cbiAgICogcHJvYmxlbWEgcGVyZm9ybWFuY2UgUklTT0xUT1xuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gYmxvY2tTdGFydCAnc3RhcnQnIHZhbHVlIG9mIHRoZSB0b2tlbiBibG9jayB0byByZW1vdmVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGJsb2NrRW5kICdlbmQnIHZhbHVlIG9mIHRoZSB0b2tlbiBibG9jayB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUJsb2NrKGJsb2NrU3RhcnQsIGJsb2NrRW5kKSB7XG4gICAgdGhpcy5yZWN1cnNpdmVSZW1vdmVCbG9jayhibG9ja1N0YXJ0LCBibG9ja0VuZCwgdGhpcy50b2tlbnMpXG4gIH1cbiAgcmVjdXJzaXZlUmVtb3ZlQmxvY2soYmxvY2tTdGFydCwgYmxvY2tFbmQsIF90b2tlbnMpIHtcbiAgICBsZXQgc2VsZWN0ZWRCbG9jayA9IG51bGw7XG5cbiAgICAvLyBMSVZFTExPIDBcbiAgICBpZiAoQXJyYXkuaXNBcnJheShfdG9rZW5zKSkge1xuICAgICAgZm9yIChsZXQgY2hpbGQgb2YgX3Rva2Vucykge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJ0b2tlbi1ibG9ja1wiKSB7IC8vcGVyIHBlcmZvcm1hbmNlOiB2ZXJpZmljbyBzZSBzaWEgdW4gYmxvY2NvIGRhIHJpbXVvdmVyZSBvIHNlIG5lIGNvbnRlbmdhIHNvbG8gc2Ugw6ggdW4gVE9LRU4tQkxPQ0tcbiAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnJlY3Vyc2l2ZVJlbW92ZUJsb2NrKGJsb2NrU3RhcnQsIGJsb2NrRW5kLCBjaGlsZCk7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzZWxlY3RlZEJsb2NrID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICBicmVhazsgLy9taSBmZXJtbyBzZSBobyBpbmRpdml1YXRvIGlsIHRva2VuLWJsb2NrIGRhIHJpbXVvdmVyZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9zZSBobyB0cm92YXRvIGEgcXVlc3RvIGxpdmVsbG8gaWwgQkxPQ0sgZGEgcmltdW92ZXJlIFxuICAgICAgaWYgKHNlbGVjdGVkQmxvY2sgIT09IG51bGwpIHtcbiAgICAgICAgLy9vdHRlbmdvIGluaWNpIHBlciBsYSByaW1vemlvbmVcbiAgICAgICAgbGV0IGJsb2NrX3N0YXJ0ID0gc2VsZWN0ZWRCbG9jay5zdGFydDtcbiAgICAgICAgbGV0IGJsb2NrX2luZGV4ID0gX3Rva2Vucy5tYXAodCA9PiB0LnN0YXJ0KS5pbmRleE9mKGJsb2NrX3N0YXJ0KTtcbiAgICAgICAgLy9taSBzYWx2byBpIFRPS0VOUyBlIFRPS0VOLUJMT0NLIGNvbnRlbnV0aSBpbiBtb2RvIGRhIGFnZ2l1bmdlcmkgc2luZ29sYXJtZW50ZVxuICAgICAgICBsZXQgdG9rZW5zID0gc2VsZWN0ZWRCbG9jay50b2tlbnM7XG5cbiAgICAgICAgLy9yaW11b3ZvIGlsIHRva2VuIGJsb2NrXG4gICAgICAgIF90b2tlbnMuc3BsaWNlKGJsb2NrX2luZGV4LCAxKTtcbiAgICAgICAgLy9hZ2dpdW5nbyBpIHRva2VucyBpbnRlcm5pLCBhIGxpdmVsbG8gMCAocXVpZG5pIHNvdnJhc2Npdm8gdHJhbnF1aWxsYW1lbnRlIHRoaXMudG9rZW5zLCB2aXN0byBjaGUgX3Rva2VucyDDqCBwYXNzYXRvIHBlciB2YWxvcmUpXG4gICAgICAgIHRoaXMudG9rZW5zID0gX3Rva2Vucy5zbGljZSgwLCBibG9ja19pbmRleCkuY29uY2F0KHRva2VucywgX3Rva2Vucy5zbGljZShibG9ja19pbmRleCkpOyAvLyhwZXIgcGVyZm9ybWFuY2UpXG4gICAgICAgIC8vcml0b3JubyBudWxsLi4uIHZlcnLDoCBpZ25vcmF0b1xuICAgICAgICBzZWxlY3RlZEJsb2NrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IFxuICAgIC8vcmltb3ppb25lIGRpIHF1ZXN0byBUT0NLRU4tQkxPQ0sgYWQgdW4gY2VydG8gbGl2ZWxsbyBpbm5lc3RhdG8gPjAgLS0+IHJpdG9ybm8gaWwgQkxPQ0sgY29zw6wgYWkgbGl2ZWxsaSByaWNoaWFtYW50aSBtaSBzb3N0aXR1aXNjb25vIGNvaSBtaWVpIC50b2tlbnNcbiAgICBlbHNlIGlmIChfdG9rZW5zLnR5cGUgPT09IFwidG9rZW4tYmxvY2tcIiAmJiBfdG9rZW5zLnN0YXJ0ID09PSBibG9ja1N0YXJ0ICYmIF90b2tlbnMuZW5kID09PSBibG9ja0VuZCkge1xuICAgICAgcmV0dXJuIF90b2tlbnM7XG4gICAgfSBcbiAgICAvL3NlIFRPQ0tFTi1CTE9DSyBub24gw6ggZGEgcmltdW92ZXJlIGFsbG9yYSBtaSBjb21wb3J0byByaWNvcnNpdmFtZW50ZSwgY29tZSBwZXIgTElWRUxMTyAwIG1hIGFnZW5kbyBzdWkgLnRva2Vuc1xuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoX3Rva2Vucy50b2tlbnMpKSB7XG4gICAgICBmb3IgKGxldCBjaGlsZCBvZiBfdG9rZW5zLnRva2Vucykge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJ0b2tlbi1ibG9ja1wiKSB7IC8vKHBlciBwZXJmb3JtYW5jZSlcbiAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0aGlzLnJlY3Vyc2l2ZVJlbW92ZUJsb2NrKGJsb2NrU3RhcnQsIGJsb2NrRW5kLCBjaGlsZCk7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzZWxlY3RlZEJsb2NrID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzZWxlY3RlZEJsb2NrICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBibG9ja19zdGFydCA9IHNlbGVjdGVkQmxvY2suc3RhcnQ7XG4gICAgICAgIGxldCBibG9ja19pbmRleCA9IF90b2tlbnMudG9rZW5zLm1hcCh0ID0+IHQuc3RhcnQpLmluZGV4T2YoYmxvY2tfc3RhcnQpO1xuICAgICAgICBsZXQgdG9rZW5zID0gc2VsZWN0ZWRCbG9jay50b2tlbnM7XG5cbiAgICAgICAgLy9yaW11b3ZvIGlsIHRva2VuIGJsb2NrXG4gICAgICAgIF90b2tlbnMudG9rZW5zLnNwbGljZShibG9ja19pbmRleCwgMSk7XG4gICAgICAgIC8vYWdnaXVuZ28gaSB0b2tlbnNcbiAgICAgICAgX3Rva2Vucy50b2tlbnMgPSBfdG9rZW5zLnRva2Vucy5zbGljZSgwLCBibG9ja19pbmRleCkuY29uY2F0KHRva2VucywgX3Rva2Vucy50b2tlbnMuc2xpY2UoYmxvY2tfaW5kZXgpKTsgLy8ocGVyIHBlcmZvcm1hbmNlKVxuICAgICAgICBzZWxlY3RlZEJsb2NrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9MSVZFTExPIDAgcml0b3JuYSBudWxsXG4gICAgLy9MSVZFTExJIGlubmVzdGF0aSBub24gZGEgcmltdW92ZXJlIHJpdG9ybmFubyBudWxsXG4gICAgLy9zdSBUT0NLRU4gbm9uIHZpZW5lIG1haSBhdnZpYXRhIGxhIGNoaWFtYXRhIHJpY29yc2l2YVxuICAgIC8vVE9DS0VOLUJMT0NLIHNlbGV6aW9uYXRpIHJpdG9ybmFubyBwcmltYSBkaSBxdWVzdGEgcmlnYSwgbmVsIGxvcm8gZWxzZWlmXG4gICAgLy/DqCBpbXBvcnRhbnRlIHJpdG9ybmFyZSBudWxsIGluIG1vZG8gY2hlIGZ1bnppb25pbm8gaSBjb250cm9sbGkgc3Ugc2VsZWN0ZWRcbiAgICByZXR1cm4gc2VsZWN0ZWRCbG9ja1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIHRoZSB0YWcgYmxvY2tzIGFuZCBsZWF2ZXMgb25seSB0b2tlbnNcbiAgICovXG4gIHJlc2V0QmxvY2tzKCkge1xuICAgIHRoaXMudG9rZW5zID0gdGhpcy5pbml0aWFsVG9rZW5zLnNsaWNlKCk7IC8vU0hBTExPVyBDT1BZXG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0cyB0aGUgdG9rZW5zIGFuZCB0aGUgdG9rZW4gYmxvY2tzIGFzIGFubm90YXRpb25zXG4gICAqL1xuICBleHBvcnRBc0Fubm90YXRpb24oKSB7XG4gICAgbGV0IGVudGl0aWVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudG9rZW5zW2ldLnR5cGUgPT09IFwidG9rZW4tYmxvY2tcIikge1xuICAgICAgICBsZXQgYiA9IHRoaXMudG9rZW5zW2ldO1xuICAgICAgICBlbnRpdGllcy5wdXNoKFtiLnN0YXJ0LCBiLmVuZCwgYi5sYWJlbF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW50aXRpZXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9rZW5NYW5hZ2VyOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBUEE7QUFBQTtBQUNBO0FBREE7QUFpQkE7QUFBQTtBQUNBO0FBQ0E7QUFuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxDQTtBQXFDQTtBQUNBO0FBR0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXpCQTtBQTRCQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/token-manager.js\n");

/***/ })

})