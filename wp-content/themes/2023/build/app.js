(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      (function(global, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
          };
        } else {
          factory(global);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i in preservedScriptAttributes) {
              val = node[i] || node.getAttribute && node.getAttribute(i);
              if (val) {
                script.setAttribute(i, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.6.4", jQuery2 = function(selector, context) {
          return new jQuery2.fn.init(selector, context);
        };
        jQuery2.fn = jQuery2.prototype = {
          jquery: version,
          constructor: jQuery2,
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          pushStack: function(elems) {
            var ret = jQuery2.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          each: function(callback) {
            return jQuery2.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery2.map(this, function(elem, i) {
              return callback.call(elem, i, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery2.grep(this, function(_elem, i) {
              return (i + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery2.grep(this, function(_elem, i) {
              return i % 2;
            }));
          },
          eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery2.extend = jQuery2.fn.extend = function() {
          var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i === length) {
            target = this;
            i--;
          }
          for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
              for (name in options) {
                copy = options[name];
                if (name === "__proto__" || target === copy) {
                  continue;
                }
                if (deep && copy && (jQuery2.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery2.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery2.extend(deep, clone, copy);
                } else if (copy !== void 0) {
                  target[name] = copy;
                }
              }
            }
          }
          return target;
        };
        jQuery2.extend({
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i < length; i++) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            } else {
              for (i in obj) {
                if (callback.call(obj[i], i, obj[i]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery2.merge(
                  ret,
                  typeof arr2 === "string" ? [arr2] : arr2
                );
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i);
          },
          merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for (; j < len; j++) {
              first[i++] = second[j];
            }
            first.length = i;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            for (; i < length; i++) {
              callbackInverse = !callback(elems[i], i);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
              }
            }
            return matches;
          },
          map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i < length; i++) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i in elems) {
                value = callback(elems[i], i, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          guid: 1,
          support
        });
        if (typeof Symbol === "function") {
          jQuery2.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery2.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        var Sizzle = function(window3) {
          var i, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) {
              hasDuplicate = true;
            }
            return 0;
          }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push2 = arr2.push, slice2 = arr2.slice, indexOf2 = function(list, elem) {
            var i2 = 0, len = list.length;
            for (; i2 < len; i2++) {
              if (list[i2] === elem) {
                return i2;
              }
            }
            return -1;
          }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace2 = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace2 + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace2 + "*(" + identifier + ")(?:" + whitespace2 + "*([*^$|!~]?=)" + whitespace2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace2 + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace2 + "+", "g"), rtrim2 = new RegExp("^" + whitespace2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace2 + "+$", "g"), rcomma = new RegExp("^" + whitespace2 + "*," + whitespace2 + "*"), rleadingCombinator = new RegExp("^" + whitespace2 + "*([>+~]|" + whitespace2 + ")" + whitespace2 + "*"), rdescend = new RegExp(whitespace2 + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace2 + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace2 + "*(?:([+-]|)" + whitespace2 + "*(\\d+)|))" + whitespace2 + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            "needsContext": new RegExp("^" + whitespace2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace2 + "*((?:-\\d)?\\d*)" + whitespace2 + "*\\)|)(?=[^-]|$)", "i")
          }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace2 + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
          }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
            if (asCodePoint) {
              if (ch === "\0") {
                return "\uFFFD";
              }
              return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
            }
            return "\\" + ch;
          }, unloadHandler = function() {
            setDocument();
          }, inDisabledFieldset = addCombinator(
            function(elem) {
              return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
            },
            { dir: "parentNode", next: "legend" }
          );
          try {
            push2.apply(
              arr2 = slice2.call(preferredDoc.childNodes),
              preferredDoc.childNodes
            );
            arr2[preferredDoc.childNodes.length].nodeType;
          } catch (e) {
            push2 = {
              apply: arr2.length ? function(target, els) {
                pushNative.apply(target, slice2.call(els));
              } : function(target, els) {
                var j = target.length, i2 = 0;
                while (target[j++] = els[i2++]) {
                }
                target.length = j - 1;
              }
            };
          }
          function Sizzle2(selector, context, results, seed) {
            var m, i2, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
            results = results || [];
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
              return results;
            }
            if (!seed) {
              setDocument(context);
              context = context || document3;
              if (documentIsHTML) {
                if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                  if (m = match[1]) {
                    if (nodeType === 9) {
                      if (elem = context.getElementById(m)) {
                        if (elem.id === m) {
                          results.push(elem);
                          return results;
                        }
                      } else {
                        return results;
                      }
                    } else {
                      if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                        results.push(elem);
                        return results;
                      }
                    }
                  } else if (match[2]) {
                    push2.apply(results, context.getElementsByTagName(selector));
                    return results;
                  } else if ((m = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                    push2.apply(results, context.getElementsByClassName(m));
                    return results;
                  }
                }
                if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                  newSelector = selector;
                  newContext = context;
                  if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                    if (newContext !== context || !support2.scope) {
                      if (nid = context.getAttribute("id")) {
                        nid = nid.replace(rcssescape, fcssescape);
                      } else {
                        context.setAttribute("id", nid = expando);
                      }
                    }
                    groups = tokenize(selector);
                    i2 = groups.length;
                    while (i2--) {
                      groups[i2] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i2]);
                    }
                    newSelector = groups.join(",");
                  }
                  try {
                    push2.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    );
                    return results;
                  } catch (qsaError) {
                    nonnativeSelectorCache(selector, true);
                  } finally {
                    if (nid === expando) {
                      context.removeAttribute("id");
                    }
                  }
                }
              }
            }
            return select(selector.replace(rtrim2, "$1"), context, results, seed);
          }
          function createCache() {
            var keys = [];
            function cache(key, value) {
              if (keys.push(key + " ") > Expr.cacheLength) {
                delete cache[keys.shift()];
              }
              return cache[key + " "] = value;
            }
            return cache;
          }
          function markFunction(fn) {
            fn[expando] = true;
            return fn;
          }
          function assert(fn) {
            var el = document3.createElement("fieldset");
            try {
              return !!fn(el);
            } catch (e) {
              return false;
            } finally {
              if (el.parentNode) {
                el.parentNode.removeChild(el);
              }
              el = null;
            }
          }
          function addHandle(attrs, handler) {
            var arr3 = attrs.split("|"), i2 = arr3.length;
            while (i2--) {
              Expr.attrHandle[arr3[i2]] = handler;
            }
          }
          function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
            if (diff) {
              return diff;
            }
            if (cur) {
              while (cur = cur.nextSibling) {
                if (cur === b) {
                  return -1;
                }
              }
            }
            return a ? 1 : -1;
          }
          function createInputPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return name === "input" && elem.type === type;
            };
          }
          function createButtonPseudo(type) {
            return function(elem) {
              var name = elem.nodeName.toLowerCase();
              return (name === "input" || name === "button") && elem.type === type;
            };
          }
          function createDisabledPseudo(disabled) {
            return function(elem) {
              if ("form" in elem) {
                if (elem.parentNode && elem.disabled === false) {
                  if ("label" in elem) {
                    if ("label" in elem.parentNode) {
                      return elem.parentNode.disabled === disabled;
                    } else {
                      return elem.disabled === disabled;
                    }
                  }
                  return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                }
                return elem.disabled === disabled;
              } else if ("label" in elem) {
                return elem.disabled === disabled;
              }
              return false;
            };
          }
          function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
              argument = +argument;
              return markFunction(function(seed, matches2) {
                var j, matchIndexes = fn([], seed.length, argument), i2 = matchIndexes.length;
                while (i2--) {
                  if (seed[j = matchIndexes[i2]]) {
                    seed[j] = !(matches2[j] = seed[j]);
                  }
                }
              });
            });
          }
          function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
          }
          support2 = Sizzle2.support = {};
          isXML = Sizzle2.isXML = function(elem) {
            var namespace = elem && elem.namespaceURI, docElem2 = elem && (elem.ownerDocument || elem).documentElement;
            return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
          };
          setDocument = Sizzle2.setDocument = function(node) {
            var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
              return document3;
            }
            document3 = doc;
            docElem = document3.documentElement;
            documentIsHTML = !isXML(document3);
            if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
              if (subWindow.addEventListener) {
                subWindow.addEventListener("unload", unloadHandler, false);
              } else if (subWindow.attachEvent) {
                subWindow.attachEvent("onunload", unloadHandler);
              }
            }
            support2.scope = assert(function(el) {
              docElem.appendChild(el).appendChild(document3.createElement("div"));
              return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
            });
            support2.cssHas = assert(function() {
              try {
                document3.querySelector(":has(*,:jqfake)");
                return false;
              } catch (e) {
                return true;
              }
            });
            support2.attributes = assert(function(el) {
              el.className = "i";
              return !el.getAttribute("className");
            });
            support2.getElementsByTagName = assert(function(el) {
              el.appendChild(document3.createComment(""));
              return !el.getElementsByTagName("*").length;
            });
            support2.getElementsByClassName = rnative.test(document3.getElementsByClassName);
            support2.getById = assert(function(el) {
              docElem.appendChild(el).id = expando;
              return !document3.getElementsByName || !document3.getElementsByName(expando).length;
            });
            if (support2.getById) {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  return elem.getAttribute("id") === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var elem = context.getElementById(id);
                  return elem ? [elem] : [];
                }
              };
            } else {
              Expr.filter["ID"] = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                  var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                  return node2 && node2.value === attrId;
                };
              };
              Expr.find["ID"] = function(id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                  var node2, i2, elems, elem = context.getElementById(id);
                  if (elem) {
                    node2 = elem.getAttributeNode("id");
                    if (node2 && node2.value === id) {
                      return [elem];
                    }
                    elems = context.getElementsByName(id);
                    i2 = 0;
                    while (elem = elems[i2++]) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id) {
                        return [elem];
                      }
                    }
                  }
                  return [];
                }
              };
            }
            Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
              if (typeof context.getElementsByTagName !== "undefined") {
                return context.getElementsByTagName(tag);
              } else if (support2.qsa) {
                return context.querySelectorAll(tag);
              }
            } : function(tag, context) {
              var elem, tmp = [], i2 = 0, results = context.getElementsByTagName(tag);
              if (tag === "*") {
                while (elem = results[i2++]) {
                  if (elem.nodeType === 1) {
                    tmp.push(elem);
                  }
                }
                return tmp;
              }
              return results;
            };
            Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
              if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                return context.getElementsByClassName(className);
              }
            };
            rbuggyMatches = [];
            rbuggyQSA = [];
            if (support2.qsa = rnative.test(document3.querySelectorAll)) {
              assert(function(el) {
                var input;
                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                if (el.querySelectorAll("[msallowcapture^='']").length) {
                  rbuggyQSA.push("[*^$]=" + whitespace2 + `*(?:''|"")`);
                }
                if (!el.querySelectorAll("[selected]").length) {
                  rbuggyQSA.push("\\[" + whitespace2 + "*(?:value|" + booleans + ")");
                }
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                  rbuggyQSA.push("~=");
                }
                input = document3.createElement("input");
                input.setAttribute("name", "");
                el.appendChild(input);
                if (!el.querySelectorAll("[name='']").length) {
                  rbuggyQSA.push("\\[" + whitespace2 + "*name" + whitespace2 + "*=" + whitespace2 + `*(?:''|"")`);
                }
                if (!el.querySelectorAll(":checked").length) {
                  rbuggyQSA.push(":checked");
                }
                if (!el.querySelectorAll("a#" + expando + "+*").length) {
                  rbuggyQSA.push(".#.+[+~]");
                }
                el.querySelectorAll("\\\f");
                rbuggyQSA.push("[\\r\\n\\f]");
              });
              assert(function(el) {
                el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var input = document3.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");
                if (el.querySelectorAll("[name=d]").length) {
                  rbuggyQSA.push("name" + whitespace2 + "*[*^$|!~]?=");
                }
                if (el.querySelectorAll(":enabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                docElem.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) {
                  rbuggyQSA.push(":enabled", ":disabled");
                }
                el.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:");
              });
            }
            if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
              assert(function(el) {
                support2.disconnectedMatch = matches.call(el, "*");
                matches.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
              });
            }
            if (!support2.cssHas) {
              rbuggyQSA.push(":has");
            }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            hasCompare = rnative.test(docElem.compareDocumentPosition);
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
              var adown = a.nodeType === 9 && a.documentElement || a, bup = b && b.parentNode;
              return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
              if (b) {
                while (b = b.parentNode) {
                  if (b === a) {
                    return true;
                  }
                }
              }
              return false;
            };
            sortOrder = hasCompare ? function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
              if (compare) {
                return compare;
              }
              compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
              if (compare & 1 || !support2.sortDetached && b.compareDocumentPosition(a) === compare) {
                if (a == document3 || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
                  return -1;
                }
                if (b == document3 || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
                  return 1;
                }
                return sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              }
              return compare & 4 ? -1 : 1;
            } : function(a, b) {
              if (a === b) {
                hasDuplicate = true;
                return 0;
              }
              var cur, i2 = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
              if (!aup || !bup) {
                return a == document3 ? -1 : b == document3 ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a) - indexOf2(sortInput, b) : 0;
              } else if (aup === bup) {
                return siblingCheck(a, b);
              }
              cur = a;
              while (cur = cur.parentNode) {
                ap.unshift(cur);
              }
              cur = b;
              while (cur = cur.parentNode) {
                bp.unshift(cur);
              }
              while (ap[i2] === bp[i2]) {
                i2++;
              }
              return i2 ? siblingCheck(ap[i2], bp[i2]) : ap[i2] == preferredDoc ? -1 : bp[i2] == preferredDoc ? 1 : 0;
            };
            return document3;
          };
          Sizzle2.matches = function(expr, elements) {
            return Sizzle2(expr, null, null, elements);
          };
          Sizzle2.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
              try {
                var ret = matches.call(elem, expr);
                if (ret || support2.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
                  return ret;
                }
              } catch (e) {
                nonnativeSelectorCache(expr, true);
              }
            }
            return Sizzle2(expr, document3, null, [elem]).length > 0;
          };
          Sizzle2.contains = function(context, elem) {
            if ((context.ownerDocument || context) != document3) {
              setDocument(context);
            }
            return contains(context, elem);
          };
          Sizzle2.attr = function(elem, name) {
            if ((elem.ownerDocument || elem) != document3) {
              setDocument(elem);
            }
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          };
          Sizzle2.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
          };
          Sizzle2.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          };
          Sizzle2.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i2 = 0;
            hasDuplicate = !support2.detectDuplicates;
            sortInput = !support2.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
              while (elem = results[i2++]) {
                if (elem === results[i2]) {
                  j = duplicates.push(i2);
                }
              }
              while (j--) {
                results.splice(duplicates[j], 1);
              }
            }
            sortInput = null;
            return results;
          };
          getText = Sizzle2.getText = function(elem) {
            var node, ret = "", i2 = 0, nodeType = elem.nodeType;
            if (!nodeType) {
              while (node = elem[i2++]) {
                ret += getText(node);
              }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
              if (typeof elem.textContent === "string") {
                return elem.textContent;
              } else {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  ret += getText(elem);
                }
              }
            } else if (nodeType === 3 || nodeType === 4) {
              return elem.nodeValue;
            }
            return ret;
          };
          Expr = Sizzle2.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: true },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: true },
              "~": { dir: "previousSibling" }
            },
            preFilter: {
              "ATTR": function(match) {
                match[1] = match[1].replace(runescape, funescape);
                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                if (match[2] === "~=") {
                  match[3] = " " + match[3] + " ";
                }
                return match.slice(0, 4);
              },
              "CHILD": function(match) {
                match[1] = match[1].toLowerCase();
                if (match[1].slice(0, 3) === "nth") {
                  if (!match[3]) {
                    Sizzle2.error(match[0]);
                  }
                  match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                  match[5] = +(match[7] + match[8] || match[3] === "odd");
                } else if (match[3]) {
                  Sizzle2.error(match[0]);
                }
                return match;
              },
              "PSEUDO": function(match) {
                var excess, unquoted = !match[6] && match[2];
                if (matchExpr["CHILD"].test(match[0])) {
                  return null;
                }
                if (match[3]) {
                  match[2] = match[4] || match[5] || "";
                } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                  match[0] = match[0].slice(0, excess);
                  match[2] = unquoted.slice(0, excess);
                }
                return match.slice(0, 3);
              }
            },
            filter: {
              "TAG": function(nodeNameSelector) {
                var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ? function() {
                  return true;
                } : function(elem) {
                  return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
                };
              },
              "CLASS": function(className) {
                var pattern = classCache[className + " "];
                return pattern || (pattern = new RegExp("(^|" + whitespace2 + ")" + className + "(" + whitespace2 + "|$)")) && classCache(
                  className,
                  function(elem) {
                    return pattern.test(
                      typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                    );
                  }
                );
              },
              "ATTR": function(name, operator, check) {
                return function(elem) {
                  var result = Sizzle2.attr(elem, name);
                  if (result == null) {
                    return operator === "!=";
                  }
                  if (!operator) {
                    return true;
                  }
                  result += "";
                  return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                };
              },
              "CHILD": function(type, what, _argument, first, last) {
                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                return first === 1 && last === 0 ? function(elem) {
                  return !!elem.parentNode;
                } : function(elem, _context, xml) {
                  var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                  if (parent) {
                    if (simple) {
                      while (dir2) {
                        node = elem;
                        while (node = node[dir2]) {
                          if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                            return false;
                          }
                        }
                        start = dir2 = type === "only" && !start && "nextSibling";
                      }
                      return true;
                    }
                    start = [forward ? parent.firstChild : parent.lastChild];
                    if (forward && useCache) {
                      node = parent;
                      outerCache = node[expando] || (node[expando] = {});
                      uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                      cache = uniqueCache[type] || [];
                      nodeIndex = cache[0] === dirruns && cache[1];
                      diff = nodeIndex && cache[2];
                      node = nodeIndex && parent.childNodes[nodeIndex];
                      while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                        if (node.nodeType === 1 && ++diff && node === elem) {
                          uniqueCache[type] = [dirruns, nodeIndex, diff];
                          break;
                        }
                      }
                    } else {
                      if (useCache) {
                        node = elem;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex;
                      }
                      if (diff === false) {
                        while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                          if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                            if (useCache) {
                              outerCache = node[expando] || (node[expando] = {});
                              uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                              uniqueCache[type] = [dirruns, diff];
                            }
                            if (node === elem) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    diff -= last;
                    return diff === first || diff % first === 0 && diff / first >= 0;
                  }
                };
              },
              "PSEUDO": function(pseudo, argument) {
                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
                if (fn[expando]) {
                  return fn(argument);
                }
                if (fn.length > 1) {
                  args = [pseudo, pseudo, "", argument];
                  return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                    var idx, matched = fn(seed, argument), i2 = matched.length;
                    while (i2--) {
                      idx = indexOf2(seed, matched[i2]);
                      seed[idx] = !(matches2[idx] = matched[i2]);
                    }
                  }) : function(elem) {
                    return fn(elem, 0, args);
                  };
                }
                return fn;
              }
            },
            pseudos: {
              "not": markFunction(function(selector) {
                var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
                return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                  var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                  while (i2--) {
                    if (elem = unmatched[i2]) {
                      seed[i2] = !(matches2[i2] = elem);
                    }
                  }
                }) : function(elem, _context, xml) {
                  input[0] = elem;
                  matcher(input, null, xml, results);
                  input[0] = null;
                  return !results.pop();
                };
              }),
              "has": markFunction(function(selector) {
                return function(elem) {
                  return Sizzle2(selector, elem).length > 0;
                };
              }),
              "contains": markFunction(function(text) {
                text = text.replace(runescape, funescape);
                return function(elem) {
                  return (elem.textContent || getText(elem)).indexOf(text) > -1;
                };
              }),
              "lang": markFunction(function(lang) {
                if (!ridentifier.test(lang || "")) {
                  Sizzle2.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function(elem) {
                  var elemLang;
                  do {
                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                      elemLang = elemLang.toLowerCase();
                      return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                    }
                  } while ((elem = elem.parentNode) && elem.nodeType === 1);
                  return false;
                };
              }),
              "target": function(elem) {
                var hash = window3.location && window3.location.hash;
                return hash && hash.slice(1) === elem.id;
              },
              "root": function(elem) {
                return elem === docElem;
              },
              "focus": function(elem) {
                return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
              },
              "enabled": createDisabledPseudo(false),
              "disabled": createDisabledPseudo(true),
              "checked": function(elem) {
                var nodeName2 = elem.nodeName.toLowerCase();
                return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
              },
              "selected": function(elem) {
                if (elem.parentNode) {
                  elem.parentNode.selectedIndex;
                }
                return elem.selected === true;
              },
              "empty": function(elem) {
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                  if (elem.nodeType < 6) {
                    return false;
                  }
                }
                return true;
              },
              "parent": function(elem) {
                return !Expr.pseudos["empty"](elem);
              },
              "header": function(elem) {
                return rheader.test(elem.nodeName);
              },
              "input": function(elem) {
                return rinputs.test(elem.nodeName);
              },
              "button": function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button";
              },
              "text": function(elem) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
              },
              "first": createPositionalPseudo(function() {
                return [0];
              }),
              "last": createPositionalPseudo(function(_matchIndexes, length) {
                return [length - 1];
              }),
              "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
              }),
              "even": createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 0;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "odd": createPositionalPseudo(function(matchIndexes, length) {
                var i2 = 1;
                for (; i2 < length; i2 += 2) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument > length ? length : argument;
                for (; --i2 >= 0; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              }),
              "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                var i2 = argument < 0 ? argument + length : argument;
                for (; ++i2 < length; ) {
                  matchIndexes.push(i2);
                }
                return matchIndexes;
              })
            }
          };
          Expr.pseudos["nth"] = Expr.pseudos["eq"];
          for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
            Expr.pseudos[i] = createInputPseudo(i);
          }
          for (i in { submit: true, reset: true }) {
            Expr.pseudos[i] = createButtonPseudo(i);
          }
          function setFilters() {
          }
          setFilters.prototype = Expr.filters = Expr.pseudos;
          Expr.setFilters = new setFilters();
          tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) {
              return parseOnly ? 0 : cached.slice(0);
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
              if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                  soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push(tokens = []);
              }
              matched = false;
              if (match = rleadingCombinator.exec(soFar)) {
                matched = match.shift();
                tokens.push({
                  value: matched,
                  type: match[0].replace(rtrim2, " ")
                });
                soFar = soFar.slice(matched.length);
              }
              for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    type,
                    matches: match
                  });
                  soFar = soFar.slice(matched.length);
                }
              }
              if (!matched) {
                break;
              }
            }
            return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : tokenCache(selector, groups).slice(0);
          };
          function toSelector(tokens) {
            var i2 = 0, len = tokens.length, selector = "";
            for (; i2 < len; i2++) {
              selector += tokens[i2].value;
            }
            return selector;
          }
          function addCombinator(matcher, combinator, base) {
            var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? function(elem, context, xml) {
              while (elem = elem[dir2]) {
                if (elem.nodeType === 1 || checkNonElements) {
                  return matcher(elem, context, xml);
                }
              }
              return false;
            } : function(elem, context, xml) {
              var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
              if (xml) {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    if (matcher(elem, context, xml)) {
                      return true;
                    }
                  }
                }
              } else {
                while (elem = elem[dir2]) {
                  if (elem.nodeType === 1 || checkNonElements) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                    if (skip && skip === elem.nodeName.toLowerCase()) {
                      elem = elem[dir2] || elem;
                    } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                      return newCache[2] = oldCache[2];
                    } else {
                      uniqueCache[key] = newCache;
                      if (newCache[2] = matcher(elem, context, xml)) {
                        return true;
                      }
                    }
                  }
                }
              }
              return false;
            };
          }
          function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
              var i2 = matchers.length;
              while (i2--) {
                if (!matchers[i2](elem, context, xml)) {
                  return false;
                }
              }
              return true;
            } : matchers[0];
          }
          function multipleContexts(selector, contexts, results) {
            var i2 = 0, len = contexts.length;
            for (; i2 < len; i2++) {
              Sizzle2(selector, contexts[i2], results);
            }
            return results;
          }
          function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
            for (; i2 < len; i2++) {
              if (elem = unmatched[i2]) {
                if (!filter || filter(elem, context, xml)) {
                  newUnmatched.push(elem);
                  if (mapped) {
                    map.push(i2);
                  }
                }
              }
            }
            return newUnmatched;
          }
          function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
              postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
              postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function(seed, results, context, xml) {
              var temp, i2, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                selector || "*",
                context.nodeType ? [context] : context,
                []
              ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
              if (matcher) {
                matcher(matcherIn, matcherOut, context, xml);
              }
              if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);
                i2 = temp.length;
                while (i2--) {
                  if (elem = temp[i2]) {
                    matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                  }
                }
              }
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    temp = [];
                    i2 = matcherOut.length;
                    while (i2--) {
                      if (elem = matcherOut[i2]) {
                        temp.push(matcherIn[i2] = elem);
                      }
                    }
                    postFinder(null, matcherOut = [], temp, xml);
                  }
                  i2 = matcherOut.length;
                  while (i2--) {
                    if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i2]) > -1) {
                      seed[temp] = !(results[temp] = elem);
                    }
                  }
                }
              } else {
                matcherOut = condense(
                  matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                );
                if (postFinder) {
                  postFinder(null, results, matcherOut, xml);
                } else {
                  push2.apply(results, matcherOut);
                }
              }
            });
          }
          function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
              return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
              return indexOf2(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [function(elem, context, xml) {
              var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
              checkContext = null;
              return ret;
            }];
            for (; i2 < len; i2++) {
              if (matcher = Expr.relative[tokens[i2].type]) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
              } else {
                matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                if (matcher[expando]) {
                  j = ++i2;
                  for (; j < len; j++) {
                    if (Expr.relative[tokens[j].type]) {
                      break;
                    }
                  }
                  return setMatcher(
                    i2 > 1 && elementMatcher(matchers),
                    i2 > 1 && toSelector(
                      tokens.slice(0, i2 - 1).concat({ value: tokens[i2 - 2].type === " " ? "*" : "" })
                    ).replace(rtrim2, "$1"),
                    matcher,
                    i2 < j && matcherFromTokens(tokens.slice(i2, j)),
                    j < len && matcherFromTokens(tokens = tokens.slice(j)),
                    j < len && toSelector(tokens)
                  );
                }
                matchers.push(matcher);
              }
            }
            return elementMatcher(matchers);
          }
          function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
              var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
              if (outermost) {
                outermostContext = context == document3 || context || outermost;
              }
              for (; i2 !== len && (elem = elems[i2]) != null; i2++) {
                if (byElement && elem) {
                  j = 0;
                  if (!context && elem.ownerDocument != document3) {
                    setDocument(elem);
                    xml = !documentIsHTML;
                  }
                  while (matcher = elementMatchers[j++]) {
                    if (matcher(elem, context || document3, xml)) {
                      results.push(elem);
                      break;
                    }
                  }
                  if (outermost) {
                    dirruns = dirrunsUnique;
                  }
                }
                if (bySet) {
                  if (elem = !matcher && elem) {
                    matchedCount--;
                  }
                  if (seed) {
                    unmatched.push(elem);
                  }
                }
              }
              matchedCount += i2;
              if (bySet && i2 !== matchedCount) {
                j = 0;
                while (matcher = setMatchers[j++]) {
                  matcher(unmatched, setMatched, context, xml);
                }
                if (seed) {
                  if (matchedCount > 0) {
                    while (i2--) {
                      if (!(unmatched[i2] || setMatched[i2])) {
                        setMatched[i2] = pop.call(results);
                      }
                    }
                  }
                  setMatched = condense(setMatched);
                }
                push2.apply(results, setMatched);
                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                  Sizzle2.uniqueSort(results);
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                outermostContext = contextBackup;
              }
              return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
          }
          compile = Sizzle2.compile = function(selector, match) {
            var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
              if (!match) {
                match = tokenize(selector);
              }
              i2 = match.length;
              while (i2--) {
                cached = matcherFromTokens(match[i2]);
                if (cached[expando]) {
                  setMatchers.push(cached);
                } else {
                  elementMatchers.push(cached);
                }
              }
              cached = compilerCache(
                selector,
                matcherFromGroupMatchers(elementMatchers, setMatchers)
              );
              cached.selector = selector;
            }
            return cached;
          };
          select = Sizzle2.select = function(selector, context, results, seed) {
            var i2, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            if (match.length === 1) {
              tokens = match[0] = match[0].slice(0);
              if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                if (!context) {
                  return results;
                } else if (compiled) {
                  context = context.parentNode;
                }
                selector = selector.slice(tokens.shift().value.length);
              }
              i2 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
              while (i2--) {
                token = tokens[i2];
                if (Expr.relative[type = token.type]) {
                  break;
                }
                if (find = Expr.find[type]) {
                  if (seed = find(
                    token.matches[0].replace(runescape, funescape),
                    rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                  )) {
                    tokens.splice(i2, 1);
                    selector = seed.length && toSelector(tokens);
                    if (!selector) {
                      push2.apply(results, seed);
                      return results;
                    }
                    break;
                  }
                }
              }
            }
            (compiled || compile(selector, match))(
              seed,
              context,
              !documentIsHTML,
              results,
              !context || rsibling.test(selector) && testContext(context.parentNode) || context
            );
            return results;
          };
          support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
          support2.detectDuplicates = !!hasDuplicate;
          setDocument();
          support2.sortDetached = assert(function(el) {
            return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
          });
          if (!assert(function(el) {
            el.innerHTML = "<a href='#'></a>";
            return el.firstChild.getAttribute("href") === "#";
          })) {
            addHandle("type|href|height|width", function(elem, name, isXML2) {
              if (!isXML2) {
                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
              }
            });
          }
          if (!support2.attributes || !assert(function(el) {
            el.innerHTML = "<input/>";
            el.firstChild.setAttribute("value", "");
            return el.firstChild.getAttribute("value") === "";
          })) {
            addHandle("value", function(elem, _name, isXML2) {
              if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
                return elem.defaultValue;
              }
            });
          }
          if (!assert(function(el) {
            return el.getAttribute("disabled") == null;
          })) {
            addHandle(booleans, function(elem, name, isXML2) {
              var val;
              if (!isXML2) {
                return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
              }
            });
          }
          return Sizzle2;
        }(window2);
        jQuery2.find = Sizzle;
        jQuery2.expr = Sizzle.selectors;
        jQuery2.expr[":"] = jQuery2.expr.pseudos;
        jQuery2.uniqueSort = jQuery2.unique = Sizzle.uniqueSort;
        jQuery2.text = Sizzle.getText;
        jQuery2.isXMLDoc = Sizzle.isXML;
        jQuery2.contains = Sizzle.contains;
        jQuery2.escapeSelector = Sizzle.escape;
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery2(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n, elem) {
          var matched = [];
          for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
              matched.push(n);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery2.expr.match.needsContext;
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery2.grep(elements, function(elem, i) {
              return !!qualifier.call(elem, i, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery2.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery2.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery2.filter(qualifier, elements, not);
        }
        jQuery2.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery2.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery2.find.matches(expr, jQuery2.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery2.fn.extend({
          find: function(selector) {
            var i, ret, len = this.length, self = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery2(selector).filter(function() {
                for (i = 0; i < len; i++) {
                  if (jQuery2.contains(self[i], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i = 0; i < len; i++) {
              jQuery2.find(selector, self[i], ret);
            }
            return len > 1 ? jQuery2.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(
              this,
              typeof selector === "string" && rneedsContext.test(selector) ? jQuery2(selector) : selector || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init2 = jQuery2.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery2 ? context[0] : context;
                jQuery2.merge(this, jQuery2.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  true
                ));
                if (rsingleTag.test(match[1]) && jQuery2.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : selector(jQuery2);
          }
          return jQuery2.makeArray(selector, this);
        };
        init2.prototype = jQuery2.fn;
        rootjQuery = jQuery2(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery2.fn.extend({
          has: function(target) {
            var targets = jQuery2(target, this), l = targets.length;
            return this.filter(function() {
              var i = 0;
              for (; i < l; i++) {
                if (jQuery2.contains(this, targets[i])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery2(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery2.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery2.uniqueSort(matched) : matched);
          },
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery2(elem), this[0]);
            }
            return indexOf.call(
              this,
              elem.jquery ? elem[0] : elem
            );
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery2.uniqueSort(
                jQuery2.merge(this.get(), jQuery2(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery2.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery2.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery2.fn[name] = function(until, selector) {
            var matched = jQuery2.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery2.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery2.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery2.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery2.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery2.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self = {
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery2.each(args, function(_, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            remove: function() {
              jQuery2.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery2.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            has: function(fn) {
              return fn ? jQuery2.inArray(fn, list) > -1 : list.length > 0;
            },
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            fire: function() {
              self.fireWith(this, arguments);
              return this;
            },
            fired: function() {
              return !!fired;
            }
          };
          return self;
        };
        function Identity(v) {
          return v;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery2.extend({
          Deferred: function(func) {
            var tuples = [
              [
                "notify",
                "progress",
                jQuery2.Callbacks("memory"),
                jQuery2.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery2.Callbacks("once memory"),
                jQuery2.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery2.Callbacks("once memory"),
                jQuery2.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              pipe: function() {
                var fns = arguments;
                return jQuery2.Deferred(function(newDefer) {
                  jQuery2.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special)
                          );
                        } else {
                          maxDepth++;
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special),
                            resolve(
                              maxDepth,
                              deferred2,
                              Identity,
                              deferred2.notifyWith
                            )
                          );
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e) {
                        if (jQuery2.Deferred.exceptionHook) {
                          jQuery2.Deferred.exceptionHook(
                            e,
                            process.stackTrace
                          );
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process();
                    } else {
                      if (jQuery2.Deferred.getStackHook) {
                        process.stackTrace = jQuery2.Deferred.getStackHook();
                      }
                      window2.setTimeout(process);
                    }
                  };
                }
                return jQuery2.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  );
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onFulfilled) ? onFulfilled : Identity
                    )
                  );
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              promise: function(obj) {
                return obj != null ? jQuery2.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery2.each(tuples, function(i, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(
                  function() {
                    state = stateString;
                  },
                  tuples[3 - i][2].disable,
                  tuples[3 - i][3].disable,
                  tuples[0][2].lock,
                  tuples[0][3].lock
                );
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          when: function(singleValue) {
            var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery2.Deferred(), updateFunc = function(i2) {
              return function(value) {
                resolveContexts[i2] = this;
                resolveValues[i2] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  primary.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                primary.done(updateFunc(i)).resolve,
                primary.reject,
                !remaining
              );
              if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
                return primary.then();
              }
            }
            while (i--) {
              adoptValue(resolveValues[i], updateFunc(i), primary.reject);
            }
            return primary.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery2.Deferred.exceptionHook = function(error, stack) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
          }
        };
        jQuery2.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery2.Deferred();
        jQuery2.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery2.readyException(error);
          });
          return this;
        };
        jQuery2.extend({
          isReady: false,
          readyWait: 1,
          ready: function(wait) {
            if (wait === true ? --jQuery2.readyWait : jQuery2.isReady) {
              return;
            }
            jQuery2.isReady = true;
            if (wait !== true && --jQuery2.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery2]);
          }
        });
        jQuery2.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery2.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery2.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
              access(elems, fn, i, key[i], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery2(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i < len; i++) {
                fn(
                  elems[i],
                  key,
                  raw ? value : value.call(elems[i], i, fn(elems[i], key))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery2.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i = key.length;
              while (i--) {
                delete cache[key[i]];
              }
            }
            if (key === void 0 || jQuery2.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery2.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery2.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery2.fn.extend({
          data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i = attrs.length;
                  while (i--) {
                    if (attrs[i]) {
                      name = attrs[i].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery2.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery2.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery2.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery2._queueHooks(elem, type), next = function() {
              jQuery2.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery2.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery2.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery2.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery2.queue(this, type, data);
              jQuery2._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery2.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery2.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery2.Deferred(), elements = this, i = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i--) {
              tmp = dataPriv.get(elements[i], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery2.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery2.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery2.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery2.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery2.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery2.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery2.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery2.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery2.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery2.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery2.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery2(this).show();
              } else {
                jQuery2(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery2.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i = 0, l = elems.length;
          for (; i < l; i++) {
            dataPriv.set(
              elems[i],
              "globalEval",
              !refElements || dataPriv.get(refElements[i], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
          for (; i < l; i++) {
            elem = elems[i];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery2.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery2.htmlPrefilter(elem) + wrap[2];
                j = wrap[0];
                while (j--) {
                  tmp = tmp.lastChild;
                }
                jQuery2.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i = 0;
          while (elem = nodes[i++]) {
            if (selection && jQuery2.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j = 0;
              while (elem = tmp[j++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function expectSync(elem, type) {
          return elem === safeActiveElement() === (type === "focus");
        }
        function safeActiveElement() {
          try {
            return document2.activeElement;
          } catch (err) {
          }
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery2().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery2.guid++);
          }
          return elem.each(function() {
            jQuery2.event.add(this, types, fn, data, selector);
          });
        }
        jQuery2.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery2.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery2.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e) {
                return typeof jQuery2 !== "undefined" && jQuery2.event.triggered !== e.type ? jQuery2.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery2.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery2.event.special[type] || {};
              handleObj = jQuery2.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery2.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery2.event.global[type] = true;
            }
          },
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
              tmp = rtypenamespace.exec(types[t]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery2.event.remove(elem, type + types[t], handler, selector, true);
                }
                continue;
              }
              special = jQuery2.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j = handlers.length;
              while (j--) {
                handleObj = handlers[j];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery2.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery2.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery2.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery2.event.special[event.type] || {};
            args[0] = event;
            for (i = 1; i < arguments.length; i++) {
              args[i] = arguments[i];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery2.event.handlers.call(this, event, handlers);
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j = 0;
              while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery2.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i = 0; i < delegateCount; i++) {
                    handleObj = handlers[i];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery2(sel, this).index(cur) > -1 : jQuery2.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery2.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery2.expando] ? originalEvent : new jQuery2.Event(originalEvent);
          },
          special: {
            load: {
              noBubble: true
            },
            click: {
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", returnTrue);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, expectSync2) {
          if (!expectSync2) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery2.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery2.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var notAsync, result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved.length) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  notAsync = expectSync2(this, type);
                  this[type]();
                  result = dataPriv.get(this, type);
                  if (saved !== result || notAsync) {
                    dataPriv.set(this, type, false);
                  } else {
                    result = {};
                  }
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result && result.value;
                  }
                } else if ((jQuery2.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved.length) {
                dataPriv.set(this, type, {
                  value: jQuery2.event.trigger(
                    jQuery2.extend(saved[0], jQuery2.Event.prototype),
                    saved.slice(1),
                    this
                  )
                });
                event.stopImmediatePropagation();
              }
            }
          });
        }
        jQuery2.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery2.Event = function(src, props) {
          if (!(this instanceof jQuery2.Event)) {
            return new jQuery2.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery2.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery2.expando] = true;
        };
        jQuery2.Event.prototype = {
          constructor: jQuery2.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) {
              e.preventDefault();
            }
          },
          stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) {
              e.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery2.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: true
        }, jQuery2.event.addProp);
        jQuery2.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          jQuery2.event.special[type] = {
            setup: function() {
              leverageNative(this, type, expectSync);
              return false;
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            _default: function(event) {
              return dataPriv.get(event.target, type);
            },
            delegateType
          };
        });
        jQuery2.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery2.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery2.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery2.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery2(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery2.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery2(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i, l, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i = 0, l = events[type].length; i < l; i++) {
                  jQuery2.event.add(dest, type, events[type][i]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery2.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self.html());
              }
              domManip(self, args, callback, ignored);
            });
          }
          if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery2.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i < l; i++) {
                node = fragment;
                if (i !== iNoClone) {
                  node = jQuery2.clone(node, true, true);
                  if (hasScripts) {
                    jQuery2.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i], node, i);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery2.map(scripts, restoreScript);
                for (i = 0; i < hasScripts; i++) {
                  node = scripts[i];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery2.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery2._evalUrl && !node.noModule) {
                        jQuery2._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery2.filter(selector, elem) : elem, i = 0;
          for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
              jQuery2.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery2.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery2.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i = 0, l = srcElements.length; i < l; i++) {
                fixInput(srcElements[i], destElements[i]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i = 0, l = srcElements.length; i < l; i++) {
                  cloneCopyEvent(srcElements[i], destElements[i]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery2.event.special, i = 0;
            for (; (elem = elems[i]) !== void 0; i++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery2.event.remove(elem, type);
                      } else {
                        jQuery2.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery2.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery2.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i = 0;
            for (; (elem = this[i]) != null; i++) {
              if (elem.nodeType === 1) {
                jQuery2.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery2.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i = 0, l = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery2.htmlPrefilter(value2);
                try {
                  for (; i < l; i++) {
                    elem = this[i] || {};
                    if (elem.nodeType === 1) {
                      jQuery2.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery2.inArray(this, ignored) < 0) {
                jQuery2.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery2.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery2.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery2(selector), last = insert.length - 1, i = 0;
            for (; i <= last; i++) {
              elems = i === last ? this : this.clone(true);
              jQuery2(insert[i])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var rcustomProp = /^--/;
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        var whitespace = "[\\x20\\t\\r\\n\\f]";
        var rtrimCSS = new RegExp(
          "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
          "g"
        );
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery2.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                tr.style.cssText = "border:1px solid";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                trChild.style.display = "block";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (isCustomProp && ret) {
              ret = ret.replace(rtrimCSS, "$1") || void 0;
            }
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery2.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? ret + "" : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
          while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery2.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i < 4; i += 2) {
            if (box === "margin") {
              delta += jQuery2.css(elem, box + cssExpand[i], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
              if (box !== "padding") {
                delta += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              } else {
                extra += jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery2.css(elem, "padding" + cssExpand[i], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery2.css(elem, "border" + cssExpand[i] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
            )) || 0;
          }
          return delta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery2.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
            isBorderBox = jQuery2.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            val
          ) + "px";
        }
        jQuery2.extend({
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "gridArea": true,
            "gridColumn": true,
            "gridColumnEnd": true,
            "gridColumnStart": true,
            "gridRow": true,
            "gridRowEnd": true,
            "gridRowStart": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
          },
          cssProps: {},
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery2.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery2.cssHooks[name] || jQuery2.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery2.each(["height", "width"], function(_i, dimension) {
          jQuery2.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery2.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery2.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                );
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery2.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery2.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
            }
          }
        );
        jQuery2.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery2.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i < 4; i++) {
                expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery2.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery2.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i < len; i++) {
                  map[name2[i]] = jQuery2.css(elem, name2[i], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery2.style(elem, name2, value2) : jQuery2.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery2.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery2.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery2.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery2.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery2.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery2.fx.step[tween.prop]) {
                jQuery2.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery2.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery2.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery2.easing = {
          linear: function(p) {
            return p;
          },
          swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery2.fx = Tween.prototype.init;
        jQuery2.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery2.fx.interval);
            }
            jQuery2.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery2._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery2.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery2.style(elem, prop);
            }
          }
          propTween = !jQuery2.isEmptyObject(props);
          if (!propTween && jQuery2.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery2.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery2.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery2.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery2.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery2.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery2.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery2.extend({}, properties),
            opts: jQuery2.extend(true, {
              specialEasing: {},
              easing: jQuery2.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery2.Tween(
                elem,
                animation.opts,
                prop,
                end,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery2._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery2.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery2.fx.timer(
            jQuery2.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation;
        }
        jQuery2.Animation = jQuery2.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery2.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery2.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery2.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery2.fx.speeds) {
                opt.duration = jQuery2.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery2.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery2.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery2.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery2.isEmptyObject(prop), optall = jQuery2.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery2.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery2.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery2.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery2.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery2.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery2.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery2.fn[name];
          jQuery2.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery2.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery2.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery2.timers = [];
        jQuery2.fx.tick = function() {
          var timer, i = 0, timers = jQuery2.timers;
          fxNow = Date.now();
          for (; i < timers.length; i++) {
            timer = timers[i];
            if (!timer() && timers[i] === timer) {
              timers.splice(i--, 1);
            }
          }
          if (!timers.length) {
            jQuery2.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery2.fx.timer = function(timer) {
          jQuery2.timers.push(timer);
          jQuery2.fx.start();
        };
        jQuery2.fx.interval = 13;
        jQuery2.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery2.fx.stop = function() {
          inProgress = null;
        };
        jQuery2.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        };
        jQuery2.fn.delay = function(time, type) {
          time = jQuery2.fx ? jQuery2.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery2.expr.attrHandle;
        jQuery2.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery2.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery2.removeAttr(this, name);
            });
          }
        });
        jQuery2.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery2.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
              hooks = jQuery2.attrHooks[name.toLowerCase()] || (jQuery2.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery2.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery2.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery2.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery2.each(jQuery2.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery2.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery2.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery2.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery2.propFix[name] || name];
            });
          }
        });
        jQuery2.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery2.isXMLDoc(elem)) {
              name = jQuery2.propFix[name] || name;
              hooks = jQuery2.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery2.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery2.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery2.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery2.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery2.fn.extend({
          addClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery2(this).addClass(value.call(this, j, getClass(this)));
              });
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    if (cur.indexOf(" " + className + " ") < 0) {
                      cur += className + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          removeClass: function(value) {
            var classNames, cur, curValue, className, i, finalValue;
            if (isFunction(value)) {
              return this.each(function(j) {
                jQuery2(this).removeClass(value.call(this, j, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classNames = classesToArray(value);
            if (classNames.length) {
              return this.each(function() {
                curValue = getClass(this);
                cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  for (i = 0; i < classNames.length; i++) {
                    className = classNames[i];
                    while (cur.indexOf(" " + className + " ") > -1) {
                      cur = cur.replace(" " + className + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    this.setAttribute("class", finalValue);
                  }
                }
              });
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (isFunction(value)) {
              return this.each(function(i2) {
                jQuery2(this).toggleClass(
                  value.call(this, i2, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            classNames = classesToArray(value);
            return this.each(function() {
              if (isValidValue) {
                self = jQuery2(this);
                for (i = 0; i < classNames.length; i++) {
                  className = classNames[i];
                  if (self.hasClass(className)) {
                    self.removeClass(className);
                  } else {
                    self.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                  );
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i = 0;
            className = " " + selector + " ";
            while (elem = this[i++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery2.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery2.valHooks[elem.type] || jQuery2.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i, jQuery2(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery2.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery2.valHooks[this.type] || jQuery2.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery2.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery2.find.attr(elem, "value");
                return val != null ? val : stripAndCollapse(jQuery2.text(elem));
              }
            },
            select: {
              get: function(elem) {
                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                if (index < 0) {
                  i = max;
                } else {
                  i = one ? index : 0;
                }
                for (; i < max; i++) {
                  option = options[i];
                  if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery2(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery2.makeArray(value), i = options.length;
                while (i--) {
                  option = options[i];
                  if (option.selected = jQuery2.inArray(jQuery2.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery2.each(["radio", "checkbox"], function() {
          jQuery2.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery2.inArray(jQuery2(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery2.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        support.focusin = "onfocusin" in window2;
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
          e.stopPropagation();
        };
        jQuery2.extend(jQuery2.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery2.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery2.expando] ? event : new jQuery2.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery2.makeArray(data, [event]);
            special = jQuery2.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery2.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery2.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          simulate: function(type, elem, event) {
            var e = jQuery2.extend(
              new jQuery2.Event(),
              event,
              {
                type,
                isSimulated: true
              }
            );
            jQuery2.event.trigger(e, null, elem);
          }
        });
        jQuery2.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery2.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery2.event.trigger(type, data, elem, true);
            }
          }
        });
        if (!support.focusin) {
          jQuery2.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
            var handler = function(event) {
              jQuery2.event.simulate(fix, event.target, jQuery2.event.fix(event));
            };
            jQuery2.event.special[fix] = {
              setup: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                if (!attaches) {
                  doc.addEventListener(orig, handler, true);
                }
                dataPriv.access(doc, fix, (attaches || 0) + 1);
              },
              teardown: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                if (!attaches) {
                  doc.removeEventListener(orig, handler, true);
                  dataPriv.remove(doc, fix);
                } else {
                  dataPriv.access(doc, fix, attaches);
                }
              }
            };
          });
        }
        var location = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery2.parseXML = function(data) {
          var xml, parserErrorElem;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e) {
          }
          parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
          if (!xml || parserErrorElem) {
            jQuery2.error("Invalid XML: " + (parserErrorElem ? jQuery2.map(parserErrorElem.childNodes, function(el) {
              return el.textContent;
            }).join("\n") : data));
          }
          return xml;
        };
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery2.each(obj, function(i, v) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v);
              } else {
                buildParams(
                  prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                  v,
                  traditional,
                  add
                );
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery2.param = function(a, traditional) {
          var prefix, s = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a == null) {
            return "";
          }
          if (Array.isArray(a) || a.jquery && !jQuery2.isPlainObject(a)) {
            jQuery2.each(a, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a) {
              buildParams(prefix, a[prefix], traditional, add);
            }
          }
          return s.join("&");
        };
        jQuery2.fn.extend({
          serialize: function() {
            return jQuery2.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery2.prop(this, "elements");
              return elements ? jQuery2.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery2(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery2(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery2.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery2.each(structure[dataType] || [], function(_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery2.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery2.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s.converters) {
              converters[conv.toLowerCase()] = s.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s.responseFields[current]) {
              jqXHR[s.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s.dataFilter) {
              response = s.dataFilter(response, s.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e) {
                      return {
                        state: "parsererror",
                        error: conv ? e : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery2.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            converters: {
              "* text": String,
              "text html": true,
              "text json": JSON.parse,
              "text xml": jQuery2.parseXML
            },
            flatOptions: {
              url: true,
              context: true
            }
          },
          ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery2.ajaxSettings), settings) : ajaxExtend(jQuery2.ajaxSettings, target);
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i, uncached, s = jQuery2.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery2(callbackContext) : jQuery2.event, deferred = jQuery2.Deferred(), completeDeferred = jQuery2.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s.mimeType = type;
                }
                return this;
              },
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            s.type = options.method || options.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s.url;
                urlAnchor.href = urlAnchor.href;
                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e) {
                s.crossDomain = true;
              }
            }
            if (s.data && s.processData && typeof s.data !== "string") {
              s.data = jQuery2.param(s.data, s.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery2.event && s.global;
            if (fireGlobals && jQuery2.active++ === 0) {
              jQuery2.event.trigger("ajaxStart");
            }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, "");
            if (!s.hasContent) {
              uncached = s.url.slice(cacheURL.length);
              if (s.data && (s.processData || typeof s.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                delete s.data;
              }
              if (s.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s.url = cacheURL + uncached;
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s.data = s.data.replace(r20, "+");
            }
            if (s.ifModified) {
              if (jQuery2.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery2.lastModified[cacheURL]);
              }
              if (jQuery2.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery2.etag[cacheURL]);
              }
            }
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]
            );
            for (i in s.headers) {
              jqXHR.setRequestHeader(i, s.headers[i]);
            }
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s.async && s.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e) {
                if (completed2) {
                  throw e;
                }
                done(-1, e);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
              }
              if (!isSuccess && jQuery2.inArray("script", s.dataTypes) > -1 && jQuery2.inArray("json", s.dataTypes) < 0) {
                s.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery2.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery2.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s, isSuccess ? success : error]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                if (!--jQuery2.active) {
                  jQuery2.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery2.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery2.get(url, void 0, callback, "script");
          }
        });
        jQuery2.each(["get", "post"], function(_i, method) {
          jQuery2[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery2.ajax(jQuery2.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery2.isPlainObject(url) && url));
          };
        });
        jQuery2.ajaxPrefilter(function(s) {
          var i;
          for (i in s.headers) {
            if (i.toLowerCase() === "content-type") {
              s.contentType = s.headers[i] || "";
            }
          }
        });
        jQuery2._evalUrl = function(url, options, doc) {
          return jQuery2.ajax({
            url,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery2.globalEval(response, options, doc);
            }
          });
        };
        jQuery2.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery2(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i) {
                jQuery2(this).wrapInner(html.call(this, i));
              });
            }
            return this.each(function() {
              var self = jQuery2(this), contents = self.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i) {
              jQuery2(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery2(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery2.expr.pseudos.hidden = function(elem) {
          return !jQuery2.expr.pseudos.visible(elem);
        };
        jQuery2.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery2.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e) {
          }
        };
        var xhrSuccessStatus = {
          0: 200,
          1223: 204
        }, xhrSupported = jQuery2.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery2.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i, xhr = options.xhr();
                xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                );
                if (options.xhrFields) {
                  for (i in options.xhrFields) {
                    xhr[i] = options.xhrFields[i];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i in headers) {
                  xhr.setRequestHeader(i, headers[i]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(
                            xhr.status,
                            xhr.statusText
                          );
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr.status] || xhr.status,
                          xhr.statusText,
                          (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                          xhr.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                  if (callback) {
                    throw e;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery2.ajaxPrefilter(function(s) {
          if (s.crossDomain) {
            s.contents.script = false;
          }
        });
        jQuery2.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery2.globalEval(text);
              return text;
            }
          }
        });
        jQuery2.ajaxPrefilter("script", function(s) {
          if (s.cache === void 0) {
            s.cache = false;
          }
          if (s.crossDomain) {
            s.type = "GET";
          }
        });
        jQuery2.ajaxTransport("script", function(s) {
          if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
              send: function(_, complete) {
                script = jQuery2("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery2.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery2.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery2.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
          if (jsonProp || s.dataTypes[0] === "jsonp") {
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            if (jsonProp) {
              s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
              s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }
            s.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery2.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery2(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s[callbackName]) {
                s.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery2.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery2(scripts).remove();
          }
          return jQuery2.merge([], parsed.childNodes);
        };
        jQuery2.fn.load = function(url, params, callback) {
          var selector, type, response, self = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self.length > 0) {
            jQuery2.ajax({
              url,
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self.html(selector ? jQuery2("<div>").append(jQuery2.parseHTML(responseText)).find(selector) : responseText);
            }).always(callback && function(jqXHR, status) {
              self.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery2.expr.pseudos.animated = function(elem) {
          return jQuery2.grep(jQuery2.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery2.offset = {
          setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery2.css(elem, "position"), curElem = jQuery2(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery2.css(elem, "top");
            curCSSLeft = jQuery2.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i, jQuery2.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              curElem.css(props);
            }
          }
        };
        jQuery2.fn.extend({
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i) {
                jQuery2.offset.setOffset(this, options, i);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery2.css(elem, "position") === "fixed") {
              offset = elem.getBoundingClientRect();
            } else {
              offset = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery2.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery2(offsetParent).offset();
                parentOffset.top += jQuery2.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery2.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset.top - parentOffset.top - jQuery2.css(elem, "marginTop", true),
              left: offset.left - parentOffset.left - jQuery2.css(elem, "marginLeft", true)
            };
          },
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery2.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery2.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = "pageYOffset" === prop;
          jQuery2.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top ? val2 : win.pageXOffset,
                  top ? val2 : win.pageYOffset
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery2.each(["top", "left"], function(_i, prop) {
          jQuery2.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery2(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery2.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery2.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
          }, function(defaultExtra, funcName) {
            jQuery2.fn[funcName] = function(margin, value) {
              var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
              return access(this, function(elem, type2, value2) {
                var doc;
                if (isWindow(elem)) {
                  return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                }
                if (elem.nodeType === 9) {
                  doc = elem.documentElement;
                  return Math.max(
                    elem.body["scroll" + name],
                    doc["scroll" + name],
                    elem.body["offset" + name],
                    doc["offset" + name],
                    doc["client" + name]
                  );
                }
                return value2 === void 0 ? jQuery2.css(elem, type2, extra) : jQuery2.style(elem, type2, value2, extra);
              }, type, chainable ? margin : void 0, chainable);
            };
          });
        });
        jQuery2.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery2.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery2.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
          }
        });
        jQuery2.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i, name) {
            jQuery2.fn[name] = function(data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        jQuery2.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery2.guid++;
          return proxy;
        };
        jQuery2.holdReady = function(hold) {
          if (hold) {
            jQuery2.readyWait++;
          } else {
            jQuery2.ready(true);
          }
        };
        jQuery2.isArray = Array.isArray;
        jQuery2.parseJSON = JSON.parse;
        jQuery2.nodeName = nodeName;
        jQuery2.isFunction = isFunction;
        jQuery2.isWindow = isWindow;
        jQuery2.camelCase = camelCase;
        jQuery2.type = toType;
        jQuery2.now = Date.now;
        jQuery2.isNumeric = function(obj) {
          var type = jQuery2.type(obj);
          return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
        };
        jQuery2.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "$1");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery2;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery2.noConflict = function(deep) {
          if (window2.$ === jQuery2) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery2) {
            window2.jQuery = _jQuery;
          }
          return jQuery2;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery2;
        }
        return jQuery2;
      });
    }
  });

  // node_modules/slick-carousel/slick/slick.js
  var require_slick = __commonJS({
    "node_modules/slick-carousel/slick/slick.js"(exports, module) {
      (function(factory) {
        "use strict";
        if (typeof define === "function" && define.amd) {
          define(["jquery"], factory);
        } else if (typeof exports !== "undefined") {
          module.exports = factory(require_jquery());
        } else {
          factory(jQuery);
        }
      })(function($20) {
        "use strict";
        var Slick = window.Slick || {};
        Slick = function() {
          var instanceUid = 0;
          function Slick2(element, settings) {
            var _ = this, dataSettings;
            _.defaults = {
              accessibility: true,
              adaptiveHeight: false,
              appendArrows: $20(element),
              appendDots: $20(element),
              arrows: true,
              asNavFor: null,
              prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
              nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
              autoplay: false,
              autoplaySpeed: 3e3,
              centerMode: false,
              centerPadding: "50px",
              cssEase: "ease",
              customPaging: function(slider, i) {
                return $20('<button type="button" />').text(i + 1);
              },
              dots: false,
              dotsClass: "slick-dots",
              draggable: true,
              easing: "linear",
              edgeFriction: 0.35,
              fade: false,
              focusOnSelect: false,
              focusOnChange: false,
              infinite: true,
              initialSlide: 0,
              lazyLoad: "ondemand",
              mobileFirst: false,
              pauseOnHover: true,
              pauseOnFocus: true,
              pauseOnDotsHover: false,
              respondTo: "window",
              responsive: null,
              rows: 1,
              rtl: false,
              slide: "",
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              swipe: true,
              swipeToSlide: false,
              touchMove: true,
              touchThreshold: 5,
              useCSS: true,
              useTransform: true,
              variableWidth: false,
              vertical: false,
              verticalSwiping: false,
              waitForAnimate: true,
              zIndex: 1e3
            };
            _.initials = {
              animating: false,
              dragging: false,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              scrolling: false,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: false,
              slideOffset: 0,
              swipeLeft: null,
              swiping: false,
              $list: null,
              touchObject: {},
              transformsEnabled: false,
              unslicked: false
            };
            $20.extend(_, _.initials);
            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = "hidden";
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $20(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = "visibilitychange";
            _.windowWidth = 0;
            _.windowTimer = null;
            dataSettings = $20(element).data("slick") || {};
            _.options = $20.extend({}, _.defaults, settings, dataSettings);
            _.currentSlide = _.options.initialSlide;
            _.originalSettings = _.options;
            if (typeof document.mozHidden !== "undefined") {
              _.hidden = "mozHidden";
              _.visibilityChange = "mozvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
              _.hidden = "webkitHidden";
              _.visibilityChange = "webkitvisibilitychange";
            }
            _.autoPlay = $20.proxy(_.autoPlay, _);
            _.autoPlayClear = $20.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $20.proxy(_.autoPlayIterator, _);
            _.changeSlide = $20.proxy(_.changeSlide, _);
            _.clickHandler = $20.proxy(_.clickHandler, _);
            _.selectHandler = $20.proxy(_.selectHandler, _);
            _.setPosition = $20.proxy(_.setPosition, _);
            _.swipeHandler = $20.proxy(_.swipeHandler, _);
            _.dragHandler = $20.proxy(_.dragHandler, _);
            _.keyHandler = $20.proxy(_.keyHandler, _);
            _.instanceUid = instanceUid++;
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            _.registerBreakpoints();
            _.init(true);
          }
          return Slick2;
        }();
        Slick.prototype.activateADA = function() {
          var _ = this;
          _.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
          }).find("a, input, button, select").attr({
            "tabindex": "0"
          });
        };
        Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
          var _ = this;
          if (typeof index === "boolean") {
            addBefore = index;
            index = null;
          } else if (index < 0 || index >= _.slideCount) {
            return false;
          }
          _.unload();
          if (typeof index === "number") {
            if (index === 0 && _.$slides.length === 0) {
              $20(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
              $20(markup).insertBefore(_.$slides.eq(index));
            } else {
              $20(markup).insertAfter(_.$slides.eq(index));
            }
          } else {
            if (addBefore === true) {
              $20(markup).prependTo(_.$slideTrack);
            } else {
              $20(markup).appendTo(_.$slideTrack);
            }
          }
          _.$slides = _.$slideTrack.children(this.options.slide);
          _.$slideTrack.children(this.options.slide).detach();
          _.$slideTrack.append(_.$slides);
          _.$slides.each(function(index2, element) {
            $20(element).attr("data-slick-index", index2);
          });
          _.$slidesCache = _.$slides;
          _.reinit();
        };
        Slick.prototype.animateHeight = function() {
          var _ = this;
          if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
              height: targetHeight
            }, _.options.speed);
          }
        };
        Slick.prototype.animateSlide = function(targetLeft, callback) {
          var animProps = {}, _ = this;
          _.animateHeight();
          if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
          }
          if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
              _.$slideTrack.animate({
                left: targetLeft
              }, _.options.speed, _.options.easing, callback);
            } else {
              _.$slideTrack.animate({
                top: targetLeft
              }, _.options.speed, _.options.easing, callback);
            }
          } else {
            if (_.cssTransitions === false) {
              if (_.options.rtl === true) {
                _.currentLeft = -_.currentLeft;
              }
              $20({
                animStart: _.currentLeft
              }).animate({
                animStart: targetLeft
              }, {
                duration: _.options.speed,
                easing: _.options.easing,
                step: function(now) {
                  now = Math.ceil(now);
                  if (_.options.vertical === false) {
                    animProps[_.animType] = "translate(" + now + "px, 0px)";
                    _.$slideTrack.css(animProps);
                  } else {
                    animProps[_.animType] = "translate(0px," + now + "px)";
                    _.$slideTrack.css(animProps);
                  }
                },
                complete: function() {
                  if (callback) {
                    callback.call();
                  }
                }
              });
            } else {
              _.applyTransition();
              targetLeft = Math.ceil(targetLeft);
              if (_.options.vertical === false) {
                animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)";
              } else {
                animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)";
              }
              _.$slideTrack.css(animProps);
              if (callback) {
                setTimeout(function() {
                  _.disableTransition();
                  callback.call();
                }, _.options.speed);
              }
            }
          }
        };
        Slick.prototype.getNavTarget = function() {
          var _ = this, asNavFor = _.options.asNavFor;
          if (asNavFor && asNavFor !== null) {
            asNavFor = $20(asNavFor).not(_.$slider);
          }
          return asNavFor;
        };
        Slick.prototype.asNavFor = function(index) {
          var _ = this, asNavFor = _.getNavTarget();
          if (asNavFor !== null && typeof asNavFor === "object") {
            asNavFor.each(function() {
              var target = $20(this).slick("getSlick");
              if (!target.unslicked) {
                target.slideHandler(index, true);
              }
            });
          }
        };
        Slick.prototype.applyTransition = function(slide) {
          var _ = this, transition = {};
          if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + " " + _.options.speed + "ms " + _.options.cssEase;
          } else {
            transition[_.transitionType] = "opacity " + _.options.speed + "ms " + _.options.cssEase;
          }
          if (_.options.fade === false) {
            _.$slideTrack.css(transition);
          } else {
            _.$slides.eq(slide).css(transition);
          }
        };
        Slick.prototype.autoPlay = function() {
          var _ = this;
          _.autoPlayClear();
          if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
          }
        };
        Slick.prototype.autoPlayClear = function() {
          var _ = this;
          if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
          }
        };
        Slick.prototype.autoPlayIterator = function() {
          var _ = this, slideTo = _.currentSlide + _.options.slidesToScroll;
          if (!_.paused && !_.interrupted && !_.focussed) {
            if (_.options.infinite === false) {
              if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                _.direction = 0;
              } else if (_.direction === 0) {
                slideTo = _.currentSlide - _.options.slidesToScroll;
                if (_.currentSlide - 1 === 0) {
                  _.direction = 1;
                }
              }
            }
            _.slideHandler(slideTo);
          }
        };
        Slick.prototype.buildArrows = function() {
          var _ = this;
          if (_.options.arrows === true) {
            _.$prevArrow = $20(_.options.prevArrow).addClass("slick-arrow");
            _.$nextArrow = $20(_.options.nextArrow).addClass("slick-arrow");
            if (_.slideCount > _.options.slidesToShow) {
              _.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
              _.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
              if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.prependTo(_.options.appendArrows);
              }
              if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.appendTo(_.options.appendArrows);
              }
              if (_.options.infinite !== true) {
                _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
              }
            } else {
              _.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                "tabindex": "-1"
              });
            }
          }
        };
        Slick.prototype.buildDots = function() {
          var _ = this, i, dot;
          if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$slider.addClass("slick-dotted");
            dot = $20("<ul />").addClass(_.options.dotsClass);
            for (i = 0; i <= _.getDotCount(); i += 1) {
              dot.append($20("<li />").append(_.options.customPaging.call(this, _, i)));
            }
            _.$dots = dot.appendTo(_.options.appendDots);
            _.$dots.find("li").first().addClass("slick-active");
          }
        };
        Slick.prototype.buildOut = function() {
          var _ = this;
          _.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
          _.slideCount = _.$slides.length;
          _.$slides.each(function(index, element) {
            $20(element).attr("data-slick-index", index).data("originalStyling", $20(element).attr("style") || "");
          });
          _.$slider.addClass("slick-slider");
          _.$slideTrack = _.slideCount === 0 ? $20('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
          _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>'
          ).parent();
          _.$slideTrack.css("opacity", 0);
          if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
          }
          $20("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading");
          _.setupInfinite();
          _.buildArrows();
          _.buildDots();
          _.updateDots();
          _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);
          if (_.options.draggable === true) {
            _.$list.addClass("draggable");
          }
        };
        Slick.prototype.buildRows = function() {
          var _ = this, a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;
          newSlides = document.createDocumentFragment();
          originalSlides = _.$slider.children();
          if (_.options.rows > 0) {
            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
              originalSlides.length / slidesPerSection
            );
            for (a = 0; a < numOfSlides; a++) {
              var slide = document.createElement("div");
              for (b = 0; b < _.options.rows; b++) {
                var row = document.createElement("div");
                for (c = 0; c < _.options.slidesPerRow; c++) {
                  var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                  if (originalSlides.get(target)) {
                    row.appendChild(originalSlides.get(target));
                  }
                }
                slide.appendChild(row);
              }
              newSlides.appendChild(slide);
            }
            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({
              "width": 100 / _.options.slidesPerRow + "%",
              "display": "inline-block"
            });
          }
        };
        Slick.prototype.checkResponsive = function(initial, forceUpdate) {
          var _ = this, breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
          var sliderWidth = _.$slider.width();
          var windowWidth = window.innerWidth || $20(window).width();
          if (_.respondTo === "window") {
            respondToWidth = windowWidth;
          } else if (_.respondTo === "slider") {
            respondToWidth = sliderWidth;
          } else if (_.respondTo === "min") {
            respondToWidth = Math.min(windowWidth, sliderWidth);
          }
          if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
            targetBreakpoint = null;
            for (breakpoint in _.breakpoints) {
              if (_.breakpoints.hasOwnProperty(breakpoint)) {
                if (_.originalSettings.mobileFirst === false) {
                  if (respondToWidth < _.breakpoints[breakpoint]) {
                    targetBreakpoint = _.breakpoints[breakpoint];
                  }
                } else {
                  if (respondToWidth > _.breakpoints[breakpoint]) {
                    targetBreakpoint = _.breakpoints[breakpoint];
                  }
                }
              }
            }
            if (targetBreakpoint !== null) {
              if (_.activeBreakpoint !== null) {
                if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                  _.activeBreakpoint = targetBreakpoint;
                  if (_.breakpointSettings[targetBreakpoint] === "unslick") {
                    _.unslick(targetBreakpoint);
                  } else {
                    _.options = $20.extend(
                      {},
                      _.originalSettings,
                      _.breakpointSettings[targetBreakpoint]
                    );
                    if (initial === true) {
                      _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                  }
                  triggerBreakpoint = targetBreakpoint;
                }
              } else {
                _.activeBreakpoint = targetBreakpoint;
                if (_.breakpointSettings[targetBreakpoint] === "unslick") {
                  _.unslick(targetBreakpoint);
                } else {
                  _.options = $20.extend(
                    {},
                    _.originalSettings,
                    _.breakpointSettings[targetBreakpoint]
                  );
                  if (initial === true) {
                    _.currentSlide = _.options.initialSlide;
                  }
                  _.refresh(initial);
                }
                triggerBreakpoint = targetBreakpoint;
              }
            } else {
              if (_.activeBreakpoint !== null) {
                _.activeBreakpoint = null;
                _.options = _.originalSettings;
                if (initial === true) {
                  _.currentSlide = _.options.initialSlide;
                }
                _.refresh(initial);
                triggerBreakpoint = targetBreakpoint;
              }
            }
            if (!initial && triggerBreakpoint !== false) {
              _.$slider.trigger("breakpoint", [_, triggerBreakpoint]);
            }
          }
        };
        Slick.prototype.changeSlide = function(event, dontAnimate) {
          var _ = this, $target = $20(event.currentTarget), indexOffset, slideOffset, unevenOffset;
          if ($target.is("a")) {
            event.preventDefault();
          }
          if (!$target.is("li")) {
            $target = $target.closest("li");
          }
          unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
          indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
          switch (event.data.message) {
            case "previous":
              slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
              if (_.slideCount > _.options.slidesToShow) {
                _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
              }
              break;
            case "next":
              slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
              if (_.slideCount > _.options.slidesToShow) {
                _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
              }
              break;
            case "index":
              var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
              _.slideHandler(_.checkNavigable(index), false, dontAnimate);
              $target.children().trigger("focus");
              break;
            default:
              return;
          }
        };
        Slick.prototype.checkNavigable = function(index) {
          var _ = this, navigables, prevNavigable;
          navigables = _.getNavigableIndexes();
          prevNavigable = 0;
          if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
          } else {
            for (var n in navigables) {
              if (index < navigables[n]) {
                index = prevNavigable;
                break;
              }
              prevNavigable = navigables[n];
            }
          }
          return index;
        };
        Slick.prototype.cleanUpEvents = function() {
          var _ = this;
          if (_.options.dots && _.$dots !== null) {
            $20("li", _.$dots).off("click.slick", _.changeSlide).off("mouseenter.slick", $20.proxy(_.interrupt, _, true)).off("mouseleave.slick", $20.proxy(_.interrupt, _, false));
            if (_.options.accessibility === true) {
              _.$dots.off("keydown.slick", _.keyHandler);
            }
          }
          _.$slider.off("focus.slick blur.slick");
          if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide);
            _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide);
            if (_.options.accessibility === true) {
              _.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler);
              _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler);
            }
          }
          _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler);
          _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler);
          _.$list.off("touchend.slick mouseup.slick", _.swipeHandler);
          _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler);
          _.$list.off("click.slick", _.clickHandler);
          $20(document).off(_.visibilityChange, _.visibility);
          _.cleanUpSlideEvents();
          if (_.options.accessibility === true) {
            _.$list.off("keydown.slick", _.keyHandler);
          }
          if (_.options.focusOnSelect === true) {
            $20(_.$slideTrack).children().off("click.slick", _.selectHandler);
          }
          $20(window).off("orientationchange.slick.slick-" + _.instanceUid, _.orientationChange);
          $20(window).off("resize.slick.slick-" + _.instanceUid, _.resize);
          $20("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault);
          $20(window).off("load.slick.slick-" + _.instanceUid, _.setPosition);
        };
        Slick.prototype.cleanUpSlideEvents = function() {
          var _ = this;
          _.$list.off("mouseenter.slick", $20.proxy(_.interrupt, _, true));
          _.$list.off("mouseleave.slick", $20.proxy(_.interrupt, _, false));
        };
        Slick.prototype.cleanUpRows = function() {
          var _ = this, originalSlides;
          if (_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr("style");
            _.$slider.empty().append(originalSlides);
          }
        };
        Slick.prototype.clickHandler = function(event) {
          var _ = this;
          if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
          }
        };
        Slick.prototype.destroy = function(refresh) {
          var _ = this;
          _.autoPlayClear();
          _.touchObject = {};
          _.cleanUpEvents();
          $20(".slick-cloned", _.$slider).detach();
          if (_.$dots) {
            _.$dots.remove();
          }
          if (_.$prevArrow && _.$prevArrow.length) {
            _.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
            if (_.htmlExpr.test(_.options.prevArrow)) {
              _.$prevArrow.remove();
            }
          }
          if (_.$nextArrow && _.$nextArrow.length) {
            _.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
            if (_.htmlExpr.test(_.options.nextArrow)) {
              _.$nextArrow.remove();
            }
          }
          if (_.$slides) {
            _.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
              $20(this).attr("style", $20(this).data("originalStyling"));
            });
            _.$slideTrack.children(this.options.slide).detach();
            _.$slideTrack.detach();
            _.$list.detach();
            _.$slider.append(_.$slides);
          }
          _.cleanUpRows();
          _.$slider.removeClass("slick-slider");
          _.$slider.removeClass("slick-initialized");
          _.$slider.removeClass("slick-dotted");
          _.unslicked = true;
          if (!refresh) {
            _.$slider.trigger("destroy", [_]);
          }
        };
        Slick.prototype.disableTransition = function(slide) {
          var _ = this, transition = {};
          transition[_.transitionType] = "";
          if (_.options.fade === false) {
            _.$slideTrack.css(transition);
          } else {
            _.$slides.eq(slide).css(transition);
          }
        };
        Slick.prototype.fadeSlide = function(slideIndex, callback) {
          var _ = this;
          if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).css({
              zIndex: _.options.zIndex
            });
            _.$slides.eq(slideIndex).animate({
              opacity: 1
            }, _.options.speed, _.options.easing, callback);
          } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({
              opacity: 1,
              zIndex: _.options.zIndex
            });
            if (callback) {
              setTimeout(function() {
                _.disableTransition(slideIndex);
                callback.call();
              }, _.options.speed);
            }
          }
        };
        Slick.prototype.fadeSlideOut = function(slideIndex) {
          var _ = this;
          if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).animate({
              opacity: 0,
              zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
          } else {
            _.applyTransition(slideIndex);
            _.$slides.eq(slideIndex).css({
              opacity: 0,
              zIndex: _.options.zIndex - 2
            });
          }
        };
        Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
          var _ = this;
          if (filter !== null) {
            _.$slidesCache = _.$slides;
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
            _.reinit();
          }
        };
        Slick.prototype.focusHandler = function() {
          var _ = this;
          _.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(event) {
            event.stopImmediatePropagation();
            var $sf = $20(this);
            setTimeout(function() {
              if (_.options.pauseOnFocus) {
                _.focussed = $sf.is(":focus");
                _.autoPlay();
              }
            }, 0);
          });
        };
        Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
          var _ = this;
          return _.currentSlide;
        };
        Slick.prototype.getDotCount = function() {
          var _ = this;
          var breakPoint = 0;
          var counter = 0;
          var pagerQty = 0;
          if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
              ++pagerQty;
            } else {
              while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
              }
            }
          } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
          } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
          } else {
            while (breakPoint < _.slideCount) {
              ++pagerQty;
              breakPoint = counter + _.options.slidesToScroll;
              counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
          }
          return pagerQty - 1;
        };
        Slick.prototype.getLeft = function(slideIndex) {
          var _ = this, targetLeft, verticalHeight, verticalOffset = 0, targetSlide, coef;
          _.slideOffset = 0;
          verticalHeight = _.$slides.first().outerHeight(true);
          if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
              _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
              coef = -1;
              if (_.options.vertical === true && _.options.centerMode === true) {
                if (_.options.slidesToShow === 2) {
                  coef = -1.5;
                } else if (_.options.slidesToShow === 1) {
                  coef = -2;
                }
              }
              verticalOffset = verticalHeight * _.options.slidesToShow * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
              if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                if (slideIndex > _.slideCount) {
                  _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                  verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                } else {
                  _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                  verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                }
              }
            }
          } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
              _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
              verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
            }
          }
          if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
          }
          if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
          } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
          } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
          }
          if (_.options.vertical === false) {
            targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
          } else {
            targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
          }
          if (_.options.variableWidth === true) {
            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
              targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
            } else {
              targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow);
            }
            if (_.options.rtl === true) {
              if (targetSlide[0]) {
                targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
              } else {
                targetLeft = 0;
              }
            } else {
              targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }
            if (_.options.centerMode === true) {
              if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex);
              } else {
                targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow + 1);
              }
              if (_.options.rtl === true) {
                if (targetSlide[0]) {
                  targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                  targetLeft = 0;
                }
              } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
              }
              targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
          }
          return targetLeft;
        };
        Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
          var _ = this;
          return _.options[option];
        };
        Slick.prototype.getNavigableIndexes = function() {
          var _ = this, breakPoint = 0, counter = 0, indexes = [], max;
          if (_.options.infinite === false) {
            max = _.slideCount;
          } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
          }
          while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
          }
          return indexes;
        };
        Slick.prototype.getSlick = function() {
          return this;
        };
        Slick.prototype.getSlideCount = function() {
          var _ = this, slidesTraversed, swipedSlide, centerOffset;
          centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
          if (_.options.swipeToSlide === true) {
            _.$slideTrack.find(".slick-slide").each(function(index, slide) {
              if (slide.offsetLeft - centerOffset + $20(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                swipedSlide = slide;
                return false;
              }
            });
            slidesTraversed = Math.abs($20(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1;
            return slidesTraversed;
          } else {
            return _.options.slidesToScroll;
          }
        };
        Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
          var _ = this;
          _.changeSlide({
            data: {
              message: "index",
              index: parseInt(slide)
            }
          }, dontAnimate);
        };
        Slick.prototype.init = function(creation) {
          var _ = this;
          if (!$20(_.$slider).hasClass("slick-initialized")) {
            $20(_.$slider).addClass("slick-initialized");
            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
          }
          if (creation) {
            _.$slider.trigger("init", [_]);
          }
          if (_.options.accessibility === true) {
            _.initADA();
          }
          if (_.options.autoplay) {
            _.paused = false;
            _.autoPlay();
          }
        };
        Slick.prototype.initADA = function() {
          var _ = this, numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow), tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
            return val >= 0 && val < _.slideCount;
          });
          _.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            "tabindex": "-1"
          }).find("a, input, button, select").attr({
            "tabindex": "-1"
          });
          if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function(i2) {
              var slideControlIndex = tabControlIndexes.indexOf(i2);
              $20(this).attr({
                "role": "tabpanel",
                "id": "slick-slide" + _.instanceUid + i2,
                "tabindex": -1
              });
              if (slideControlIndex !== -1) {
                var ariaButtonControl = "slick-slide-control" + _.instanceUid + slideControlIndex;
                if ($20("#" + ariaButtonControl).length) {
                  $20(this).attr({
                    "aria-describedby": ariaButtonControl
                  });
                }
              }
            });
            _.$dots.attr("role", "tablist").find("li").each(function(i2) {
              var mappedSlideIndex = tabControlIndexes[i2];
              $20(this).attr({
                "role": "presentation"
              });
              $20(this).find("button").first().attr({
                "role": "tab",
                "id": "slick-slide-control" + _.instanceUid + i2,
                "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex,
                "aria-label": i2 + 1 + " of " + numDotGroups,
                "aria-selected": null,
                "tabindex": "-1"
              });
            }).eq(_.currentSlide).find("button").attr({
              "aria-selected": "true",
              "tabindex": "0"
            }).end();
          }
          for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
            if (_.options.focusOnChange) {
              _.$slides.eq(i).attr({ "tabindex": "0" });
            } else {
              _.$slides.eq(i).removeAttr("tabindex");
            }
          }
          _.activateADA();
        };
        Slick.prototype.initArrowEvents = function() {
          var _ = this;
          if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off("click.slick").on("click.slick", {
              message: "previous"
            }, _.changeSlide);
            _.$nextArrow.off("click.slick").on("click.slick", {
              message: "next"
            }, _.changeSlide);
            if (_.options.accessibility === true) {
              _.$prevArrow.on("keydown.slick", _.keyHandler);
              _.$nextArrow.on("keydown.slick", _.keyHandler);
            }
          }
        };
        Slick.prototype.initDotEvents = function() {
          var _ = this;
          if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $20("li", _.$dots).on("click.slick", {
              message: "index"
            }, _.changeSlide);
            if (_.options.accessibility === true) {
              _.$dots.on("keydown.slick", _.keyHandler);
            }
          }
          if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
            $20("li", _.$dots).on("mouseenter.slick", $20.proxy(_.interrupt, _, true)).on("mouseleave.slick", $20.proxy(_.interrupt, _, false));
          }
        };
        Slick.prototype.initSlideEvents = function() {
          var _ = this;
          if (_.options.pauseOnHover) {
            _.$list.on("mouseenter.slick", $20.proxy(_.interrupt, _, true));
            _.$list.on("mouseleave.slick", $20.proxy(_.interrupt, _, false));
          }
        };
        Slick.prototype.initializeEvents = function() {
          var _ = this;
          _.initArrowEvents();
          _.initDotEvents();
          _.initSlideEvents();
          _.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
          }, _.swipeHandler);
          _.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
          }, _.swipeHandler);
          _.$list.on("touchend.slick mouseup.slick", {
            action: "end"
          }, _.swipeHandler);
          _.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
          }, _.swipeHandler);
          _.$list.on("click.slick", _.clickHandler);
          $20(document).on(_.visibilityChange, $20.proxy(_.visibility, _));
          if (_.options.accessibility === true) {
            _.$list.on("keydown.slick", _.keyHandler);
          }
          if (_.options.focusOnSelect === true) {
            $20(_.$slideTrack).children().on("click.slick", _.selectHandler);
          }
          $20(window).on("orientationchange.slick.slick-" + _.instanceUid, $20.proxy(_.orientationChange, _));
          $20(window).on("resize.slick.slick-" + _.instanceUid, $20.proxy(_.resize, _));
          $20("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault);
          $20(window).on("load.slick.slick-" + _.instanceUid, _.setPosition);
          $20(_.setPosition);
        };
        Slick.prototype.initUI = function() {
          var _ = this;
          if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.show();
            _.$nextArrow.show();
          }
          if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.show();
          }
        };
        Slick.prototype.keyHandler = function(event) {
          var _ = this;
          if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
              _.changeSlide({
                data: {
                  message: _.options.rtl === true ? "next" : "previous"
                }
              });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
              _.changeSlide({
                data: {
                  message: _.options.rtl === true ? "previous" : "next"
                }
              });
            }
          }
        };
        Slick.prototype.lazyLoad = function() {
          var _ = this, loadRange, cloneRange, rangeStart, rangeEnd;
          function loadImages(imagesScope) {
            $20("img[data-lazy]", imagesScope).each(function() {
              var image = $20(this), imageSource = $20(this).attr("data-lazy"), imageSrcSet = $20(this).attr("data-srcset"), imageSizes = $20(this).attr("data-sizes") || _.$slider.attr("data-sizes"), imageToLoad = document.createElement("img");
              imageToLoad.onload = function() {
                image.animate({ opacity: 0 }, 100, function() {
                  if (imageSrcSet) {
                    image.attr("srcset", imageSrcSet);
                    if (imageSizes) {
                      image.attr("sizes", imageSizes);
                    }
                  }
                  image.attr("src", imageSource).animate({ opacity: 1 }, 200, function() {
                    image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                  });
                  _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
                });
              };
              imageToLoad.onerror = function() {
                image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
              };
              imageToLoad.src = imageSource;
            });
          }
          if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
              rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
              rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
              rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
              rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
          } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
              if (rangeStart > 0)
                rangeStart--;
              if (rangeEnd <= _.slideCount)
                rangeEnd++;
            }
          }
          loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd);
          if (_.options.lazyLoad === "anticipated") {
            var prevSlide = rangeStart - 1, nextSlide = rangeEnd, $slides = _.$slider.find(".slick-slide");
            for (var i = 0; i < _.options.slidesToScroll; i++) {
              if (prevSlide < 0)
                prevSlide = _.slideCount - 1;
              loadRange = loadRange.add($slides.eq(prevSlide));
              loadRange = loadRange.add($slides.eq(nextSlide));
              prevSlide--;
              nextSlide++;
            }
          }
          loadImages(loadRange);
          if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find(".slick-slide");
            loadImages(cloneRange);
          } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
          } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find(".slick-cloned").slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
          }
        };
        Slick.prototype.loadSlider = function() {
          var _ = this;
          _.setPosition();
          _.$slideTrack.css({
            opacity: 1
          });
          _.$slider.removeClass("slick-loading");
          _.initUI();
          if (_.options.lazyLoad === "progressive") {
            _.progressiveLazyLoad();
          }
        };
        Slick.prototype.next = Slick.prototype.slickNext = function() {
          var _ = this;
          _.changeSlide({
            data: {
              message: "next"
            }
          });
        };
        Slick.prototype.orientationChange = function() {
          var _ = this;
          _.checkResponsive();
          _.setPosition();
        };
        Slick.prototype.pause = Slick.prototype.slickPause = function() {
          var _ = this;
          _.autoPlayClear();
          _.paused = true;
        };
        Slick.prototype.play = Slick.prototype.slickPlay = function() {
          var _ = this;
          _.autoPlay();
          _.options.autoplay = true;
          _.paused = false;
          _.focussed = false;
          _.interrupted = false;
        };
        Slick.prototype.postSlide = function(index) {
          var _ = this;
          if (!_.unslicked) {
            _.$slider.trigger("afterChange", [_, index]);
            _.animating = false;
            if (_.slideCount > _.options.slidesToShow) {
              _.setPosition();
            }
            _.swipeLeft = null;
            if (_.options.autoplay) {
              _.autoPlay();
            }
            if (_.options.accessibility === true) {
              _.initADA();
              if (_.options.focusOnChange) {
                var $currentSlide = $20(_.$slides.get(_.currentSlide));
                $currentSlide.attr("tabindex", 0).focus();
              }
            }
          }
        };
        Slick.prototype.prev = Slick.prototype.slickPrev = function() {
          var _ = this;
          _.changeSlide({
            data: {
              message: "previous"
            }
          });
        };
        Slick.prototype.preventDefault = function(event) {
          event.preventDefault();
        };
        Slick.prototype.progressiveLazyLoad = function(tryCount) {
          tryCount = tryCount || 1;
          var _ = this, $imgsToLoad = $20("img[data-lazy]", _.$slider), image, imageSource, imageSrcSet, imageSizes, imageToLoad;
          if ($imgsToLoad.length) {
            image = $imgsToLoad.first();
            imageSource = image.attr("data-lazy");
            imageSrcSet = image.attr("data-srcset");
            imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes");
            imageToLoad = document.createElement("img");
            imageToLoad.onload = function() {
              if (imageSrcSet) {
                image.attr("srcset", imageSrcSet);
                if (imageSizes) {
                  image.attr("sizes", imageSizes);
                }
              }
              image.attr("src", imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
              if (_.options.adaptiveHeight === true) {
                _.setPosition();
              }
              _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
              _.progressiveLazyLoad();
            };
            imageToLoad.onerror = function() {
              if (tryCount < 3) {
                setTimeout(function() {
                  _.progressiveLazyLoad(tryCount + 1);
                }, 500);
              } else {
                image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
                _.progressiveLazyLoad();
              }
            };
            imageToLoad.src = imageSource;
          } else {
            _.$slider.trigger("allImagesLoaded", [_]);
          }
        };
        Slick.prototype.refresh = function(initializing) {
          var _ = this, currentSlide, lastVisibleIndex;
          lastVisibleIndex = _.slideCount - _.options.slidesToShow;
          if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
            _.currentSlide = lastVisibleIndex;
          }
          if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
          }
          currentSlide = _.currentSlide;
          _.destroy(true);
          $20.extend(_, _.initials, { currentSlide });
          _.init();
          if (!initializing) {
            _.changeSlide({
              data: {
                message: "index",
                index: currentSlide
              }
            }, false);
          }
        };
        Slick.prototype.registerBreakpoints = function() {
          var _ = this, breakpoint, currentBreakpoint, l, responsiveSettings = _.options.responsive || null;
          if ($20.type(responsiveSettings) === "array" && responsiveSettings.length) {
            _.respondTo = _.options.respondTo || "window";
            for (breakpoint in responsiveSettings) {
              l = _.breakpoints.length - 1;
              if (responsiveSettings.hasOwnProperty(breakpoint)) {
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
                while (l >= 0) {
                  if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                    _.breakpoints.splice(l, 1);
                  }
                  l--;
                }
                _.breakpoints.push(currentBreakpoint);
                _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
              }
            }
            _.breakpoints.sort(function(a, b) {
              return _.options.mobileFirst ? a - b : b - a;
            });
          }
        };
        Slick.prototype.reinit = function() {
          var _ = this;
          _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide");
          _.slideCount = _.$slides.length;
          if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
          }
          if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
          }
          _.registerBreakpoints();
          _.setProps();
          _.setupInfinite();
          _.buildArrows();
          _.updateArrows();
          _.initArrowEvents();
          _.buildDots();
          _.updateDots();
          _.initDotEvents();
          _.cleanUpSlideEvents();
          _.initSlideEvents();
          _.checkResponsive(false, true);
          if (_.options.focusOnSelect === true) {
            $20(_.$slideTrack).children().on("click.slick", _.selectHandler);
          }
          _.setSlideClasses(typeof _.currentSlide === "number" ? _.currentSlide : 0);
          _.setPosition();
          _.focusHandler();
          _.paused = !_.options.autoplay;
          _.autoPlay();
          _.$slider.trigger("reInit", [_]);
        };
        Slick.prototype.resize = function() {
          var _ = this;
          if ($20(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
              _.windowWidth = $20(window).width();
              _.checkResponsive();
              if (!_.unslicked) {
                _.setPosition();
              }
            }, 50);
          }
        };
        Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
          var _ = this;
          if (typeof index === "boolean") {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
          } else {
            index = removeBefore === true ? --index : index;
          }
          if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
          }
          _.unload();
          if (removeAll === true) {
            _.$slideTrack.children().remove();
          } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
          }
          _.$slides = _.$slideTrack.children(this.options.slide);
          _.$slideTrack.children(this.options.slide).detach();
          _.$slideTrack.append(_.$slides);
          _.$slidesCache = _.$slides;
          _.reinit();
        };
        Slick.prototype.setCSS = function(position) {
          var _ = this, positionProps = {}, x, y;
          if (_.options.rtl === true) {
            position = -position;
          }
          x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px";
          y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px";
          positionProps[_.positionProp] = position;
          if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
          } else {
            positionProps = {};
            if (_.cssTransitions === false) {
              positionProps[_.animType] = "translate(" + x + ", " + y + ")";
              _.$slideTrack.css(positionProps);
            } else {
              positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)";
              _.$slideTrack.css(positionProps);
            }
          }
        };
        Slick.prototype.setDimensions = function() {
          var _ = this;
          if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
              _.$list.css({
                padding: "0px " + _.options.centerPadding
              });
            }
          } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
              _.$list.css({
                padding: _.options.centerPadding + " 0px"
              });
            }
          }
          _.listWidth = _.$list.width();
          _.listHeight = _.$list.height();
          if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length));
          } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5e3 * _.slideCount);
          } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children(".slick-slide").length));
          }
          var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
          if (_.options.variableWidth === false)
            _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset);
        };
        Slick.prototype.setFade = function() {
          var _ = this, targetLeft;
          _.$slides.each(function(index, element) {
            targetLeft = _.slideWidth * index * -1;
            if (_.options.rtl === true) {
              $20(element).css({
                position: "relative",
                right: targetLeft,
                top: 0,
                zIndex: _.options.zIndex - 2,
                opacity: 0
              });
            } else {
              $20(element).css({
                position: "relative",
                left: targetLeft,
                top: 0,
                zIndex: _.options.zIndex - 2,
                opacity: 0
              });
            }
          });
          _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
          });
        };
        Slick.prototype.setHeight = function() {
          var _ = this;
          if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css("height", targetHeight);
          }
        };
        Slick.prototype.setOption = Slick.prototype.slickSetOption = function() {
          var _ = this, l, item, option, value, refresh = false, type;
          if ($20.type(arguments[0]) === "object") {
            option = arguments[0];
            refresh = arguments[1];
            type = "multiple";
          } else if ($20.type(arguments[0]) === "string") {
            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];
            if (arguments[0] === "responsive" && $20.type(arguments[1]) === "array") {
              type = "responsive";
            } else if (typeof arguments[1] !== "undefined") {
              type = "single";
            }
          }
          if (type === "single") {
            _.options[option] = value;
          } else if (type === "multiple") {
            $20.each(option, function(opt, val) {
              _.options[opt] = val;
            });
          } else if (type === "responsive") {
            for (item in value) {
              if ($20.type(_.options.responsive) !== "array") {
                _.options.responsive = [value[item]];
              } else {
                l = _.options.responsive.length - 1;
                while (l >= 0) {
                  if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
                    _.options.responsive.splice(l, 1);
                  }
                  l--;
                }
                _.options.responsive.push(value[item]);
              }
            }
          }
          if (refresh) {
            _.unload();
            _.reinit();
          }
        };
        Slick.prototype.setPosition = function() {
          var _ = this;
          _.setDimensions();
          _.setHeight();
          if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
          } else {
            _.setFade();
          }
          _.$slider.trigger("setPosition", [_]);
        };
        Slick.prototype.setProps = function() {
          var _ = this, bodyStyle = document.body.style;
          _.positionProp = _.options.vertical === true ? "top" : "left";
          if (_.positionProp === "top") {
            _.$slider.addClass("slick-vertical");
          } else {
            _.$slider.removeClass("slick-vertical");
          }
          if (bodyStyle.WebkitTransition !== void 0 || bodyStyle.MozTransition !== void 0 || bodyStyle.msTransition !== void 0) {
            if (_.options.useCSS === true) {
              _.cssTransitions = true;
            }
          }
          if (_.options.fade) {
            if (typeof _.options.zIndex === "number") {
              if (_.options.zIndex < 3) {
                _.options.zIndex = 3;
              }
            } else {
              _.options.zIndex = _.defaults.zIndex;
            }
          }
          if (bodyStyle.OTransform !== void 0) {
            _.animType = "OTransform";
            _.transformType = "-o-transform";
            _.transitionType = "OTransition";
            if (bodyStyle.perspectiveProperty === void 0 && bodyStyle.webkitPerspective === void 0)
              _.animType = false;
          }
          if (bodyStyle.MozTransform !== void 0) {
            _.animType = "MozTransform";
            _.transformType = "-moz-transform";
            _.transitionType = "MozTransition";
            if (bodyStyle.perspectiveProperty === void 0 && bodyStyle.MozPerspective === void 0)
              _.animType = false;
          }
          if (bodyStyle.webkitTransform !== void 0) {
            _.animType = "webkitTransform";
            _.transformType = "-webkit-transform";
            _.transitionType = "webkitTransition";
            if (bodyStyle.perspectiveProperty === void 0 && bodyStyle.webkitPerspective === void 0)
              _.animType = false;
          }
          if (bodyStyle.msTransform !== void 0) {
            _.animType = "msTransform";
            _.transformType = "-ms-transform";
            _.transitionType = "msTransition";
            if (bodyStyle.msTransform === void 0)
              _.animType = false;
          }
          if (bodyStyle.transform !== void 0 && _.animType !== false) {
            _.animType = "transform";
            _.transformType = "transform";
            _.transitionType = "transition";
          }
          _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
        };
        Slick.prototype.setSlideClasses = function(index) {
          var _ = this, centerOffset, allSlides, indexOffset, remainder;
          allSlides = _.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
          _.$slides.eq(index).addClass("slick-current");
          if (_.options.centerMode === true) {
            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
            centerOffset = Math.floor(_.options.slidesToShow / 2);
            if (_.options.infinite === true) {
              if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
                _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass("slick-active").attr("aria-hidden", "false");
              } else {
                indexOffset = _.options.slidesToShow + index;
                allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass("slick-active").attr("aria-hidden", "false");
              }
              if (index === 0) {
                allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center");
              } else if (index === _.slideCount - 1) {
                allSlides.eq(_.options.slidesToShow).addClass("slick-center");
              }
            }
            _.$slides.eq(index).addClass("slick-center");
          } else {
            if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
              _.$slides.slice(index, index + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false");
            } else if (allSlides.length <= _.options.slidesToShow) {
              allSlides.addClass("slick-active").attr("aria-hidden", "false");
            } else {
              remainder = _.slideCount % _.options.slidesToShow;
              indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;
              if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
                allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass("slick-active").attr("aria-hidden", "false");
              } else {
                allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false");
              }
            }
          }
          if (_.options.lazyLoad === "ondemand" || _.options.lazyLoad === "anticipated") {
            _.lazyLoad();
          }
        };
        Slick.prototype.setupInfinite = function() {
          var _ = this, i, slideIndex, infiniteCount;
          if (_.options.fade === true) {
            _.options.centerMode = false;
          }
          if (_.options.infinite === true && _.options.fade === false) {
            slideIndex = null;
            if (_.slideCount > _.options.slidesToShow) {
              if (_.options.centerMode === true) {
                infiniteCount = _.options.slidesToShow + 1;
              } else {
                infiniteCount = _.options.slidesToShow;
              }
              for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                slideIndex = i - 1;
                $20(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned");
              }
              for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                slideIndex = i;
                $20(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned");
              }
              _.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                $20(this).attr("id", "");
              });
            }
          }
        };
        Slick.prototype.interrupt = function(toggle) {
          var _ = this;
          if (!toggle) {
            _.autoPlay();
          }
          _.interrupted = toggle;
        };
        Slick.prototype.selectHandler = function(event) {
          var _ = this;
          var targetElement = $20(event.target).is(".slick-slide") ? $20(event.target) : $20(event.target).parents(".slick-slide");
          var index = parseInt(targetElement.attr("data-slick-index"));
          if (!index)
            index = 0;
          if (_.slideCount <= _.options.slidesToShow) {
            _.slideHandler(index, false, true);
            return;
          }
          _.slideHandler(index);
        };
        Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
          var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null, _ = this, navTarget;
          sync = sync || false;
          if (_.animating === true && _.options.waitForAnimate === true) {
            return;
          }
          if (_.options.fade === true && _.currentSlide === index) {
            return;
          }
          if (sync === false) {
            _.asNavFor(index);
          }
          targetSlide = index;
          targetLeft = _.getLeft(targetSlide);
          slideLeft = _.getLeft(_.currentSlide);
          _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
          if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
              targetSlide = _.currentSlide;
              if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                _.animateSlide(slideLeft, function() {
                  _.postSlide(targetSlide);
                });
              } else {
                _.postSlide(targetSlide);
              }
            }
            return;
          } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
            if (_.options.fade === false) {
              targetSlide = _.currentSlide;
              if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                _.animateSlide(slideLeft, function() {
                  _.postSlide(targetSlide);
                });
              } else {
                _.postSlide(targetSlide);
              }
            }
            return;
          }
          if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
          }
          if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
              animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
            } else {
              animSlide = _.slideCount + targetSlide;
            }
          } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
              animSlide = 0;
            } else {
              animSlide = targetSlide - _.slideCount;
            }
          } else {
            animSlide = targetSlide;
          }
          _.animating = true;
          _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]);
          oldSlide = _.currentSlide;
          _.currentSlide = animSlide;
          _.setSlideClasses(_.currentSlide);
          if (_.options.asNavFor) {
            navTarget = _.getNavTarget();
            navTarget = navTarget.slick("getSlick");
            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
              navTarget.setSlideClasses(_.currentSlide);
            }
          }
          _.updateDots();
          _.updateArrows();
          if (_.options.fade === true) {
            if (dontAnimate !== true) {
              _.fadeSlideOut(oldSlide);
              _.fadeSlide(animSlide, function() {
                _.postSlide(animSlide);
              });
            } else {
              _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
          }
          if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
              _.postSlide(animSlide);
            });
          } else {
            _.postSlide(animSlide);
          }
        };
        Slick.prototype.startLoad = function() {
          var _ = this;
          if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.hide();
            _.$nextArrow.hide();
          }
          if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.hide();
          }
          _.$slider.addClass("slick-loading");
        };
        Slick.prototype.swipeDirection = function() {
          var xDist, yDist, r, swipeAngle, _ = this;
          xDist = _.touchObject.startX - _.touchObject.curX;
          yDist = _.touchObject.startY - _.touchObject.curY;
          r = Math.atan2(yDist, xDist);
          swipeAngle = Math.round(r * 180 / Math.PI);
          if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
          }
          if (swipeAngle <= 45 && swipeAngle >= 0) {
            return _.options.rtl === false ? "left" : "right";
          }
          if (swipeAngle <= 360 && swipeAngle >= 315) {
            return _.options.rtl === false ? "left" : "right";
          }
          if (swipeAngle >= 135 && swipeAngle <= 225) {
            return _.options.rtl === false ? "right" : "left";
          }
          if (_.options.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
              return "down";
            } else {
              return "up";
            }
          }
          return "vertical";
        };
        Slick.prototype.swipeEnd = function(event) {
          var _ = this, slideCount, direction;
          _.dragging = false;
          _.swiping = false;
          if (_.scrolling) {
            _.scrolling = false;
            return false;
          }
          _.interrupted = false;
          _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;
          if (_.touchObject.curX === void 0) {
            return false;
          }
          if (_.touchObject.edgeHit === true) {
            _.$slider.trigger("edge", [_, _.swipeDirection()]);
          }
          if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
            direction = _.swipeDirection();
            switch (direction) {
              case "left":
              case "down":
                slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                _.currentDirection = 0;
                break;
              case "right":
              case "up":
                slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                _.currentDirection = 1;
                break;
              default:
            }
            if (direction != "vertical") {
              _.slideHandler(slideCount);
              _.touchObject = {};
              _.$slider.trigger("swipe", [_, direction]);
            }
          } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
              _.slideHandler(_.currentSlide);
              _.touchObject = {};
            }
          }
        };
        Slick.prototype.swipeHandler = function(event) {
          var _ = this;
          if (_.options.swipe === false || "ontouchend" in document && _.options.swipe === false) {
            return;
          } else if (_.options.draggable === false && event.type.indexOf("mouse") !== -1) {
            return;
          }
          _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== void 0 ? event.originalEvent.touches.length : 1;
          _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
          if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
          }
          switch (event.data.action) {
            case "start":
              _.swipeStart(event);
              break;
            case "move":
              _.swipeMove(event);
              break;
            case "end":
              _.swipeEnd(event);
              break;
          }
        };
        Slick.prototype.swipeMove = function(event) {
          var _ = this, edgeWasHit = false, curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;
          touches = event.originalEvent !== void 0 ? event.originalEvent.touches : null;
          if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
          }
          curLeft = _.getLeft(_.currentSlide);
          _.touchObject.curX = touches !== void 0 ? touches[0].pageX : event.clientX;
          _.touchObject.curY = touches !== void 0 ? touches[0].pageY : event.clientY;
          _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)
          ));
          verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)
          ));
          if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
          }
          if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
          }
          swipeDirection = _.swipeDirection();
          if (event.originalEvent !== void 0 && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
          }
          positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
          if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
          }
          swipeLength = _.touchObject.swipeLength;
          _.touchObject.edgeHit = false;
          if (_.options.infinite === false) {
            if (_.currentSlide === 0 && swipeDirection === "right" || _.currentSlide >= _.getDotCount() && swipeDirection === "left") {
              swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
              _.touchObject.edgeHit = true;
            }
          }
          if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
          } else {
            _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
          }
          if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
          }
          if (_.options.fade === true || _.options.touchMove === false) {
            return false;
          }
          if (_.animating === true) {
            _.swipeLeft = null;
            return false;
          }
          _.setCSS(_.swipeLeft);
        };
        Slick.prototype.swipeStart = function(event) {
          var _ = this, touches;
          _.interrupted = true;
          if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
          }
          if (event.originalEvent !== void 0 && event.originalEvent.touches !== void 0) {
            touches = event.originalEvent.touches[0];
          }
          _.touchObject.startX = _.touchObject.curX = touches !== void 0 ? touches.pageX : event.clientX;
          _.touchObject.startY = _.touchObject.curY = touches !== void 0 ? touches.pageY : event.clientY;
          _.dragging = true;
        };
        Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
          var _ = this;
          if (_.$slidesCache !== null) {
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.appendTo(_.$slideTrack);
            _.reinit();
          }
        };
        Slick.prototype.unload = function() {
          var _ = this;
          $20(".slick-cloned", _.$slider).remove();
          if (_.$dots) {
            _.$dots.remove();
          }
          if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
          }
          if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
          }
          _.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
        };
        Slick.prototype.unslick = function(fromBreakpoint) {
          var _ = this;
          _.$slider.trigger("unslick", [_, fromBreakpoint]);
          _.destroy();
        };
        Slick.prototype.updateArrows = function() {
          var _ = this, centerOffset;
          centerOffset = Math.floor(_.options.slidesToShow / 2);
          if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
            _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
            _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
            if (_.currentSlide === 0) {
              _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
              _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
              _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
              _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
              _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
              _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
            }
          }
        };
        Slick.prototype.updateDots = function() {
          var _ = this;
          if (_.$dots !== null) {
            _.$dots.find("li").removeClass("slick-active").end();
            _.$dots.find("li").eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass("slick-active");
          }
        };
        Slick.prototype.visibility = function() {
          var _ = this;
          if (_.options.autoplay) {
            if (document[_.hidden]) {
              _.interrupted = true;
            } else {
              _.interrupted = false;
            }
          }
        };
        $20.fn.slick = function() {
          var _ = this, opt = arguments[0], args = Array.prototype.slice.call(arguments, 1), l = _.length, i, ret;
          for (i = 0; i < l; i++) {
            if (typeof opt == "object" || typeof opt == "undefined")
              _[i].slick = new Slick(_[i], opt);
            else
              ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != "undefined")
              return ret;
          }
          return _;
        };
      });
    }
  });

  // scripts/app.js
  var import_jquery19 = __toESM(require_jquery());

  // scripts/_foundation.js
  var import_jquery17 = __toESM(require_jquery());

  // node_modules/foundation-sites/js/foundation.core.js
  var import_jquery3 = __toESM(require_jquery());

  // node_modules/foundation-sites/js/foundation.core.utils.js
  var import_jquery = __toESM(require_jquery());
  function rtl() {
    return (0, import_jquery.default)("html").attr("dir") === "rtl";
  }
  function GetYoDigits(length = 6, namespace) {
    let str = "";
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    const charsLength = chars.length;
    for (let i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * charsLength)];
    }
    return namespace ? `${str}-${namespace}` : str;
  }
  function RegExpEscape(str) {
    return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  function transitionend($elem) {
    var transitions = {
      "transition": "transitionend",
      "WebkitTransition": "webkitTransitionEnd",
      "MozTransition": "transitionend",
      "OTransition": "otransitionend"
    };
    var elem = document.createElement("div"), end;
    for (let transition in transitions) {
      if (typeof elem.style[transition] !== "undefined") {
        end = transitions[transition];
      }
    }
    if (end) {
      return end;
    } else {
      setTimeout(function() {
        $elem.triggerHandler("transitionend", [$elem]);
      }, 1);
      return "transitionend";
    }
  }
  function onLoad($elem, handler) {
    const didLoad = document.readyState === "complete";
    const eventType = (didLoad ? "_didLoad" : "load") + ".zf.util.onLoad";
    const cb = () => $elem.triggerHandler(eventType);
    if ($elem) {
      if (handler)
        $elem.one(eventType, handler);
      if (didLoad)
        setTimeout(cb);
      else
        (0, import_jquery.default)(window).one("load", cb);
    }
    return eventType;
  }

  // node_modules/foundation-sites/js/foundation.util.mediaQuery.js
  var import_jquery2 = __toESM(require_jquery());
  window.matchMedia || (window.matchMedia = function() {
    "use strict";
    var styleMedia = window.styleMedia || window.media;
    if (!styleMedia) {
      var style = document.createElement("style"), script = document.getElementsByTagName("script")[0], info = null;
      style.type = "text/css";
      style.id = "matchmediajs-test";
      if (!script) {
        document.head.appendChild(style);
      } else {
        script.parentNode.insertBefore(style, script);
      }
      info = "getComputedStyle" in window && window.getComputedStyle(style, null) || style.currentStyle;
      styleMedia = {
        matchMedium: function(media) {
          var text = "@media " + media + "{ #matchmediajs-test { width: 1px; } }";
          if (style.styleSheet) {
            style.styleSheet.cssText = text;
          } else {
            style.textContent = text;
          }
          return info.width === "1px";
        }
      };
    }
    return function(media) {
      return {
        matches: styleMedia.matchMedium(media || "all"),
        media: media || "all"
      };
    };
  }());
  var MediaQuery = {
    queries: [],
    current: "",
    _init() {
      if (this.isInitialized === true) {
        return this;
      } else {
        this.isInitialized = true;
      }
      var self = this;
      var $meta = (0, import_jquery2.default)("meta.foundation-mq");
      if (!$meta.length) {
        (0, import_jquery2.default)('<meta class="foundation-mq" name="foundation-mq" content>').appendTo(document.head);
      }
      var extractedStyles = (0, import_jquery2.default)(".foundation-mq").css("font-family");
      var namedQueries;
      namedQueries = parseStyleToObject(extractedStyles);
      self.queries = [];
      for (var key in namedQueries) {
        if (namedQueries.hasOwnProperty(key)) {
          self.queries.push({
            name: key,
            value: `only screen and (min-width: ${namedQueries[key]})`
          });
        }
      }
      this.current = this._getCurrentSize();
      this._watcher();
    },
    _reInit() {
      this.isInitialized = false;
      this._init();
    },
    atLeast(size) {
      var query = this.get(size);
      if (query) {
        return window.matchMedia(query).matches;
      }
      return false;
    },
    only(size) {
      return size === this._getCurrentSize();
    },
    upTo(size) {
      const nextSize = this.next(size);
      if (nextSize) {
        return !this.atLeast(nextSize);
      }
      return true;
    },
    is(size) {
      const parts = size.trim().split(" ").filter((p) => !!p.length);
      const [bpSize, bpModifier = ""] = parts;
      if (bpModifier === "only") {
        return this.only(bpSize);
      }
      if (!bpModifier || bpModifier === "up") {
        return this.atLeast(bpSize);
      }
      if (bpModifier === "down") {
        return this.upTo(bpSize);
      }
      throw new Error(`
      Invalid breakpoint passed to MediaQuery.is().
      Expected a breakpoint name formatted like "<size> <modifier>", got "${size}".
    `);
    },
    get(size) {
      for (var i in this.queries) {
        if (this.queries.hasOwnProperty(i)) {
          var query = this.queries[i];
          if (size === query.name)
            return query.value;
        }
      }
      return null;
    },
    next(size) {
      const queryIndex = this.queries.findIndex((q) => this._getQueryName(q) === size);
      if (queryIndex === -1) {
        throw new Error(`
        Unknown breakpoint "${size}" passed to MediaQuery.next().
        Ensure it is present in your Sass "$breakpoints" setting.
      `);
      }
      const nextQuery = this.queries[queryIndex + 1];
      return nextQuery ? nextQuery.name : null;
    },
    _getQueryName(value) {
      if (typeof value === "string")
        return value;
      if (typeof value === "object")
        return value.name;
      throw new TypeError(`
      Invalid value passed to MediaQuery._getQueryName().
      Expected a breakpoint name (String) or a breakpoint query (Object), got "${value}" (${typeof value})
    `);
    },
    _getCurrentSize() {
      var matched;
      for (var i = 0; i < this.queries.length; i++) {
        var query = this.queries[i];
        if (window.matchMedia(query.value).matches) {
          matched = query;
        }
      }
      return matched && this._getQueryName(matched);
    },
    _watcher() {
      (0, import_jquery2.default)(window).on("resize.zf.trigger", () => {
        var newSize = this._getCurrentSize(), currentSize = this.current;
        if (newSize !== currentSize) {
          this.current = newSize;
          (0, import_jquery2.default)(window).trigger("changed.zf.mediaquery", [newSize, currentSize]);
        }
      });
    }
  };
  function parseStyleToObject(str) {
    var styleObject = {};
    if (typeof str !== "string") {
      return styleObject;
    }
    str = str.trim().slice(1, -1);
    if (!str) {
      return styleObject;
    }
    styleObject = str.split("&").reduce(function(ret, param) {
      var parts = param.replace(/\+/g, " ").split("=");
      var key = parts[0];
      var val = parts[1];
      key = decodeURIComponent(key);
      val = typeof val === "undefined" ? null : decodeURIComponent(val);
      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }
      return ret;
    }, {});
    return styleObject;
  }

  // node_modules/foundation-sites/js/foundation.core.js
  var FOUNDATION_VERSION = "6.7.5";
  var Foundation = {
    version: FOUNDATION_VERSION,
    _plugins: {},
    _uuids: [],
    plugin: function(plugin, name) {
      var className = name || functionName(plugin);
      var attrName = hyphenate(className);
      this._plugins[attrName] = this[className] = plugin;
    },
    registerPlugin: function(plugin, name) {
      var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
      plugin.uuid = GetYoDigits(6, pluginName);
      if (!plugin.$element.attr(`data-${pluginName}`)) {
        plugin.$element.attr(`data-${pluginName}`, plugin.uuid);
      }
      if (!plugin.$element.data("zfPlugin")) {
        plugin.$element.data("zfPlugin", plugin);
      }
      plugin.$element.trigger(`init.zf.${pluginName}`);
      this._uuids.push(plugin.uuid);
      return;
    },
    unregisterPlugin: function(plugin) {
      var pluginName = hyphenate(functionName(plugin.$element.data("zfPlugin").constructor));
      this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
      plugin.$element.removeAttr(`data-${pluginName}`).removeData("zfPlugin").trigger(`destroyed.zf.${pluginName}`);
      for (var prop in plugin) {
        if (typeof plugin[prop] === "function") {
          plugin[prop] = null;
        }
      }
      return;
    },
    reInit: function(plugins) {
      var isJQ = plugins instanceof import_jquery3.default;
      try {
        if (isJQ) {
          plugins.each(function() {
            (0, import_jquery3.default)(this).data("zfPlugin")._init();
          });
        } else {
          var type = typeof plugins, _this = this, fns = {
            "object": function(plgs) {
              plgs.forEach(function(p) {
                p = hyphenate(p);
                (0, import_jquery3.default)("[data-" + p + "]").foundation("_init");
              });
            },
            "string": function() {
              plugins = hyphenate(plugins);
              (0, import_jquery3.default)("[data-" + plugins + "]").foundation("_init");
            },
            "undefined": function() {
              this.object(Object.keys(_this._plugins));
            }
          };
          fns[type](plugins);
        }
      } catch (err) {
        console.error(err);
      } finally {
        return plugins;
      }
    },
    reflow: function(elem, plugins) {
      if (typeof plugins === "undefined") {
        plugins = Object.keys(this._plugins);
      } else if (typeof plugins === "string") {
        plugins = [plugins];
      }
      var _this = this;
      import_jquery3.default.each(plugins, function(i, name) {
        var plugin = _this._plugins[name];
        var $elem = (0, import_jquery3.default)(elem).find("[data-" + name + "]").addBack("[data-" + name + "]").filter(function() {
          return typeof (0, import_jquery3.default)(this).data("zfPlugin") === "undefined";
        });
        $elem.each(function() {
          var $el = (0, import_jquery3.default)(this), opts = { reflow: true };
          if ($el.attr("data-options")) {
            $el.attr("data-options").split(";").forEach(function(option) {
              var opt = option.split(":").map(function(el) {
                return el.trim();
              });
              if (opt[0])
                opts[opt[0]] = parseValue(opt[1]);
            });
          }
          try {
            $el.data("zfPlugin", new plugin((0, import_jquery3.default)(this), opts));
          } catch (er) {
            console.error(er);
          } finally {
            return;
          }
        });
      });
    },
    getFnName: functionName,
    addToJquery: function() {
      var foundation = function(method) {
        var type = typeof method, $noJS = (0, import_jquery3.default)(".no-js");
        if ($noJS.length) {
          $noJS.removeClass("no-js");
        }
        if (type === "undefined") {
          MediaQuery._init();
          Foundation.reflow(this);
        } else if (type === "string") {
          var args = Array.prototype.slice.call(arguments, 1);
          var plugClass = this.data("zfPlugin");
          if (typeof plugClass !== "undefined" && typeof plugClass[method] !== "undefined") {
            if (this.length === 1) {
              plugClass[method].apply(plugClass, args);
            } else {
              this.each(function(i, el) {
                plugClass[method].apply((0, import_jquery3.default)(el).data("zfPlugin"), args);
              });
            }
          } else {
            throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : "this element") + ".");
          }
        } else {
          throw new TypeError(`We're sorry, ${type} is not a valid parameter. You must use a string representing the method you wish to invoke.`);
        }
        return this;
      };
      import_jquery3.default.fn.foundation = foundation;
      return import_jquery3.default;
    }
  };
  Foundation.util = {
    throttle: function(func, delay) {
      var timer = null;
      return function() {
        var context = this, args = arguments;
        if (timer === null) {
          timer = setTimeout(function() {
            func.apply(context, args);
            timer = null;
          }, delay);
        }
      };
    }
  };
  window.Foundation = Foundation;
  (function() {
    if (!Date.now || !window.Date.now)
      window.Date.now = Date.now = function() {
        return new Date().getTime();
      };
    var vendors = ["webkit", "moz"];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
      var vp = vendors[i];
      window.requestAnimationFrame = window[vp + "RequestAnimationFrame"];
      window.cancelAnimationFrame = window[vp + "CancelAnimationFrame"] || window[vp + "CancelRequestAnimationFrame"];
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var lastTime = 0;
      window.requestAnimationFrame = function(callback) {
        var now = Date.now();
        var nextTime = Math.max(lastTime + 16, now);
        return setTimeout(
          function() {
            callback(lastTime = nextTime);
          },
          nextTime - now
        );
      };
      window.cancelAnimationFrame = clearTimeout;
    }
    if (!window.performance || !window.performance.now) {
      window.performance = {
        start: Date.now(),
        now: function() {
          return Date.now() - this.start;
        }
      };
    }
  })();
  if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
      if (typeof this !== "function") {
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
      }
      var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function() {
      }, fBound = function() {
        return fToBind.apply(
          this instanceof fNOP ? this : oThis,
          aArgs.concat(Array.prototype.slice.call(arguments))
        );
      };
      if (this.prototype) {
        fNOP.prototype = this.prototype;
      }
      fBound.prototype = new fNOP();
      return fBound;
    };
  }
  function functionName(fn) {
    if (typeof Function.prototype.name === "undefined") {
      var funcNameRegex = /function\s([^(]{1,})\(/;
      var results = funcNameRegex.exec(fn.toString());
      return results && results.length > 1 ? results[1].trim() : "";
    } else if (typeof fn.prototype === "undefined") {
      return fn.constructor.name;
    } else {
      return fn.prototype.constructor.name;
    }
  }
  function parseValue(str) {
    if ("true" === str)
      return true;
    else if ("false" === str)
      return false;
    else if (!isNaN(str * 1))
      return parseFloat(str);
    return str;
  }
  function hyphenate(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }

  // node_modules/foundation-sites/js/foundation.util.box.js
  var Box = {
    ImNotTouchingYou,
    OverlapArea,
    GetDimensions,
    GetExplicitOffsets
  };
  function ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {
    return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;
  }
  function OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {
    var eleDims = GetDimensions(element), topOver, bottomOver, leftOver, rightOver;
    if (parent) {
      var parDims = GetDimensions(parent);
      bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);
      topOver = eleDims.offset.top - parDims.offset.top;
      leftOver = eleDims.offset.left - parDims.offset.left;
      rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);
    } else {
      bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);
      topOver = eleDims.offset.top - eleDims.windowDims.offset.top;
      leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;
      rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);
    }
    bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);
    topOver = Math.min(topOver, 0);
    leftOver = Math.min(leftOver, 0);
    rightOver = Math.min(rightOver, 0);
    if (lrOnly) {
      return leftOver + rightOver;
    }
    if (tbOnly) {
      return topOver + bottomOver;
    }
    return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);
  }
  function GetDimensions(elem) {
    elem = elem.length ? elem[0] : elem;
    if (elem === window || elem === document) {
      throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    var rect = elem.getBoundingClientRect(), parRect = elem.parentNode.getBoundingClientRect(), winRect = document.body.getBoundingClientRect(), winY = window.pageYOffset, winX = window.pageXOffset;
    return {
      width: rect.width,
      height: rect.height,
      offset: {
        top: rect.top + winY,
        left: rect.left + winX
      },
      parentDims: {
        width: parRect.width,
        height: parRect.height,
        offset: {
          top: parRect.top + winY,
          left: parRect.left + winX
        }
      },
      windowDims: {
        width: winRect.width,
        height: winRect.height,
        offset: {
          top: winY,
          left: winX
        }
      }
    };
  }
  function GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {
    var $eleDims = GetDimensions(element), $anchorDims = anchor ? GetDimensions(anchor) : null;
    var topVal, leftVal;
    if ($anchorDims !== null) {
      switch (position) {
        case "top":
          topVal = $anchorDims.offset.top - ($eleDims.height + vOffset);
          break;
        case "bottom":
          topVal = $anchorDims.offset.top + $anchorDims.height + vOffset;
          break;
        case "left":
          leftVal = $anchorDims.offset.left - ($eleDims.width + hOffset);
          break;
        case "right":
          leftVal = $anchorDims.offset.left + $anchorDims.width + hOffset;
          break;
      }
      switch (position) {
        case "top":
        case "bottom":
          switch (alignment) {
            case "left":
              leftVal = $anchorDims.offset.left + hOffset;
              break;
            case "right":
              leftVal = $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset;
              break;
            case "center":
              leftVal = isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2 + hOffset;
              break;
          }
          break;
        case "right":
        case "left":
          switch (alignment) {
            case "bottom":
              topVal = $anchorDims.offset.top - vOffset + $anchorDims.height - $eleDims.height;
              break;
            case "top":
              topVal = $anchorDims.offset.top + vOffset;
              break;
            case "center":
              topVal = $anchorDims.offset.top + vOffset + $anchorDims.height / 2 - $eleDims.height / 2;
              break;
          }
          break;
      }
    }
    return { top: topVal, left: leftVal };
  }

  // node_modules/foundation-sites/js/foundation.util.imageLoader.js
  var import_jquery4 = __toESM(require_jquery());
  function onImagesLoaded(images, callback) {
    var unloaded = images.length;
    if (unloaded === 0) {
      callback();
    }
    images.each(function() {
      if (this.complete && typeof this.naturalWidth !== "undefined") {
        singleImageLoaded();
      } else {
        var image = new Image();
        var events = "load.zf.images error.zf.images";
        (0, import_jquery4.default)(image).one(events, function me() {
          (0, import_jquery4.default)(this).off(events, me);
          singleImageLoaded();
        });
        image.src = (0, import_jquery4.default)(this).attr("src");
      }
    });
    function singleImageLoaded() {
      unloaded--;
      if (unloaded === 0) {
        callback();
      }
    }
  }

  // node_modules/foundation-sites/js/foundation.util.keyboard.js
  var import_jquery5 = __toESM(require_jquery());
  var keyCodes = {
    9: "TAB",
    13: "ENTER",
    27: "ESCAPE",
    32: "SPACE",
    35: "END",
    36: "HOME",
    37: "ARROW_LEFT",
    38: "ARROW_UP",
    39: "ARROW_RIGHT",
    40: "ARROW_DOWN"
  };
  var commands = {};
  function findFocusable($element) {
    if (!$element) {
      return false;
    }
    return $element.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
      if (!(0, import_jquery5.default)(this).is(":visible") || (0, import_jquery5.default)(this).attr("tabindex") < 0) {
        return false;
      }
      return true;
    }).sort(function(a, b) {
      if ((0, import_jquery5.default)(a).attr("tabindex") === (0, import_jquery5.default)(b).attr("tabindex")) {
        return 0;
      }
      let aTabIndex = parseInt((0, import_jquery5.default)(a).attr("tabindex"), 10), bTabIndex = parseInt((0, import_jquery5.default)(b).attr("tabindex"), 10);
      if (typeof (0, import_jquery5.default)(a).attr("tabindex") === "undefined" && bTabIndex > 0) {
        return 1;
      }
      if (typeof (0, import_jquery5.default)(b).attr("tabindex") === "undefined" && aTabIndex > 0) {
        return -1;
      }
      if (aTabIndex === 0 && bTabIndex > 0) {
        return 1;
      }
      if (bTabIndex === 0 && aTabIndex > 0) {
        return -1;
      }
      if (aTabIndex < bTabIndex) {
        return -1;
      }
      if (aTabIndex > bTabIndex) {
        return 1;
      }
    });
  }
  function parseKey(event) {
    var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
    key = key.replace(/\W+/, "");
    if (event.shiftKey)
      key = `SHIFT_${key}`;
    if (event.ctrlKey)
      key = `CTRL_${key}`;
    if (event.altKey)
      key = `ALT_${key}`;
    key = key.replace(/_$/, "");
    return key;
  }
  var Keyboard = {
    keys: getKeyCodes(keyCodes),
    parseKey,
    handleKey(event, component, functions) {
      var commandList = commands[component], keyCode = this.parseKey(event), cmds, command, fn;
      if (!commandList)
        return console.warn("Component not defined!");
      if (event.zfIsKeyHandled === true)
        return;
      if (typeof commandList.ltr === "undefined") {
        cmds = commandList;
      } else {
        if (rtl())
          cmds = import_jquery5.default.extend({}, commandList.ltr, commandList.rtl);
        else
          cmds = import_jquery5.default.extend({}, commandList.rtl, commandList.ltr);
      }
      command = cmds[keyCode];
      fn = functions[command];
      if (fn && typeof fn === "function") {
        var returnValue = fn.apply();
        event.zfIsKeyHandled = true;
        if (functions.handled || typeof functions.handled === "function") {
          functions.handled(returnValue);
        }
      } else {
        if (functions.unhandled || typeof functions.unhandled === "function") {
          functions.unhandled();
        }
      }
    },
    findFocusable,
    register(componentName, cmds) {
      commands[componentName] = cmds;
    },
    trapFocus($element) {
      var $focusable = findFocusable($element), $firstFocusable = $focusable.eq(0), $lastFocusable = $focusable.eq(-1);
      $element.on("keydown.zf.trapfocus", function(event) {
        if (event.target === $lastFocusable[0] && parseKey(event) === "TAB") {
          event.preventDefault();
          $firstFocusable.focus();
        } else if (event.target === $firstFocusable[0] && parseKey(event) === "SHIFT_TAB") {
          event.preventDefault();
          $lastFocusable.focus();
        }
      });
    },
    releaseFocus($element) {
      $element.off("keydown.zf.trapfocus");
    }
  };
  function getKeyCodes(kcs) {
    var k = {};
    for (var kc in kcs) {
      if (kcs.hasOwnProperty(kc))
        k[kcs[kc]] = kcs[kc];
    }
    return k;
  }

  // node_modules/foundation-sites/js/foundation.util.motion.js
  var import_jquery6 = __toESM(require_jquery());
  var initClasses = ["mui-enter", "mui-leave"];
  var activeClasses = ["mui-enter-active", "mui-leave-active"];
  var Motion = {
    animateIn: function(element, animation, cb) {
      animate(true, element, animation, cb);
    },
    animateOut: function(element, animation, cb) {
      animate(false, element, animation, cb);
    }
  };
  function Move(duration, elem, fn) {
    var anim, prog, start = null;
    if (duration === 0) {
      fn.apply(elem);
      elem.trigger("finished.zf.animate", [elem]).triggerHandler("finished.zf.animate", [elem]);
      return;
    }
    function move(ts) {
      if (!start)
        start = ts;
      prog = ts - start;
      fn.apply(elem);
      if (prog < duration) {
        anim = window.requestAnimationFrame(move, elem);
      } else {
        window.cancelAnimationFrame(anim);
        elem.trigger("finished.zf.animate", [elem]).triggerHandler("finished.zf.animate", [elem]);
      }
    }
    anim = window.requestAnimationFrame(move);
  }
  function animate(isIn, element, animation, cb) {
    element = (0, import_jquery6.default)(element).eq(0);
    if (!element.length)
      return;
    var initClass = isIn ? initClasses[0] : initClasses[1];
    var activeClass = isIn ? activeClasses[0] : activeClasses[1];
    reset();
    element.addClass(animation).css("transition", "none");
    requestAnimationFrame(() => {
      element.addClass(initClass);
      if (isIn)
        element.show();
    });
    requestAnimationFrame(() => {
      element[0].offsetWidth;
      element.css("transition", "").addClass(activeClass);
    });
    element.one(transitionend(element), finish);
    function finish() {
      if (!isIn)
        element.hide();
      reset();
      if (cb)
        cb.apply(element);
    }
    function reset() {
      element[0].style.transitionDuration = 0;
      element.removeClass(`${initClass} ${activeClass} ${animation}`);
    }
  }

  // node_modules/foundation-sites/js/foundation.util.nest.js
  var import_jquery7 = __toESM(require_jquery());
  var Nest = {
    Feather(menu, type = "zf") {
      menu.attr("role", "menubar");
      menu.find("a").attr({ "role": "menuitem" });
      var items = menu.find("li").attr({ "role": "none" }), subMenuClass = `is-${type}-submenu`, subItemClass = `${subMenuClass}-item`, hasSubClass = `is-${type}-submenu-parent`, applyAria = type !== "accordion";
      items.each(function() {
        var $item = (0, import_jquery7.default)(this), $sub = $item.children("ul");
        if ($sub.length) {
          $item.addClass(hasSubClass);
          if (applyAria) {
            const firstItem = $item.children("a:first");
            firstItem.attr({
              "aria-haspopup": true,
              "aria-label": firstItem.attr("aria-label") || firstItem.text()
            });
            if (type === "drilldown") {
              $item.attr({ "aria-expanded": false });
            }
          }
          $sub.addClass(`submenu ${subMenuClass}`).attr({
            "data-submenu": "",
            "role": "menubar"
          });
          if (type === "drilldown") {
            $sub.attr({ "aria-hidden": true });
          }
        }
        if ($item.parent("[data-submenu]").length) {
          $item.addClass(`is-submenu-item ${subItemClass}`);
        }
      });
      return;
    },
    Burn(menu, type) {
      var subMenuClass = `is-${type}-submenu`, subItemClass = `${subMenuClass}-item`, hasSubClass = `is-${type}-submenu-parent`;
      menu.find(">li, > li > ul, .menu, .menu > li, [data-submenu] > li").removeClass(`${subMenuClass} ${subItemClass} ${hasSubClass} is-submenu-item submenu is-active`).removeAttr("data-submenu").css("display", "");
    }
  };

  // node_modules/foundation-sites/js/foundation.util.timer.js
  function Timer(elem, options, cb) {
    var _this = this, duration = options.duration, nameSpace = Object.keys(elem.data())[0] || "timer", remain = -1, start, timer;
    this.isPaused = false;
    this.restart = function() {
      remain = -1;
      clearTimeout(timer);
      this.start();
    };
    this.start = function() {
      this.isPaused = false;
      clearTimeout(timer);
      remain = remain <= 0 ? duration : remain;
      elem.data("paused", false);
      start = Date.now();
      timer = setTimeout(function() {
        if (options.infinite) {
          _this.restart();
        }
        if (cb && typeof cb === "function") {
          cb();
        }
      }, remain);
      elem.trigger(`timerstart.zf.${nameSpace}`);
    };
    this.pause = function() {
      this.isPaused = true;
      clearTimeout(timer);
      elem.data("paused", true);
      var end = Date.now();
      remain = remain - (end - start);
      elem.trigger(`timerpaused.zf.${nameSpace}`);
    };
  }

  // node_modules/foundation-sites/js/foundation.util.touch.js
  var import_jquery8 = __toESM(require_jquery());
  var Touch = {};
  var startPosX;
  var startTime;
  var elapsedTime;
  var startEvent;
  var isMoving = false;
  var didMoved = false;
  function onTouchEnd(e) {
    this.removeEventListener("touchmove", onTouchMove);
    this.removeEventListener("touchend", onTouchEnd);
    if (!didMoved) {
      var tapEvent = import_jquery8.default.Event("tap", startEvent || e);
      (0, import_jquery8.default)(this).trigger(tapEvent);
    }
    startEvent = null;
    isMoving = false;
    didMoved = false;
  }
  function onTouchMove(e) {
    if (true === import_jquery8.default.spotSwipe.preventDefault) {
      e.preventDefault();
    }
    if (isMoving) {
      var x = e.touches[0].pageX;
      var dx = startPosX - x;
      var dir;
      didMoved = true;
      elapsedTime = new Date().getTime() - startTime;
      if (Math.abs(dx) >= import_jquery8.default.spotSwipe.moveThreshold && elapsedTime <= import_jquery8.default.spotSwipe.timeThreshold) {
        dir = dx > 0 ? "left" : "right";
      }
      if (dir) {
        e.preventDefault();
        onTouchEnd.apply(this, arguments);
        (0, import_jquery8.default)(this).trigger(import_jquery8.default.Event("swipe", Object.assign({}, e)), dir).trigger(import_jquery8.default.Event(`swipe${dir}`, Object.assign({}, e)));
      }
    }
  }
  function onTouchStart(e) {
    if (e.touches.length === 1) {
      startPosX = e.touches[0].pageX;
      startEvent = e;
      isMoving = true;
      didMoved = false;
      startTime = new Date().getTime();
      this.addEventListener("touchmove", onTouchMove, { passive: true === import_jquery8.default.spotSwipe.preventDefault });
      this.addEventListener("touchend", onTouchEnd, false);
    }
  }
  function init() {
    this.addEventListener && this.addEventListener("touchstart", onTouchStart, { passive: true });
  }
  var SpotSwipe = class {
    constructor() {
      this.version = "1.0.0";
      this.enabled = "ontouchstart" in document.documentElement;
      this.preventDefault = false;
      this.moveThreshold = 75;
      this.timeThreshold = 200;
      this._init();
    }
    _init() {
      import_jquery8.default.event.special.swipe = { setup: init };
      import_jquery8.default.event.special.tap = { setup: init };
      import_jquery8.default.each(["left", "up", "down", "right"], function() {
        import_jquery8.default.event.special[`swipe${this}`] = { setup: function() {
          (0, import_jquery8.default)(this).on("swipe", import_jquery8.default.noop);
        } };
      });
    }
  };
  Touch.setupSpotSwipe = function() {
    import_jquery8.default.spotSwipe = new SpotSwipe(import_jquery8.default);
  };
  Touch.setupTouchHandler = function() {
    import_jquery8.default.fn.addTouch = function() {
      this.each(function(i, el) {
        (0, import_jquery8.default)(el).bind("touchstart touchmove touchend touchcancel", function(event) {
          handleTouch(event);
        });
      });
      var handleTouch = function(event) {
        var touches = event.changedTouches, first = touches[0], eventTypes = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup"
        }, type = eventTypes[event.type], simulatedEvent;
        if ("MouseEvent" in window && typeof window.MouseEvent === "function") {
          simulatedEvent = new window.MouseEvent(type, {
            "bubbles": true,
            "cancelable": true,
            "screenX": first.screenX,
            "screenY": first.screenY,
            "clientX": first.clientX,
            "clientY": first.clientY
          });
        } else {
          simulatedEvent = document.createEvent("MouseEvent");
          simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0, null);
        }
        first.target.dispatchEvent(simulatedEvent);
      };
    };
  };
  Touch.init = function() {
    if (typeof import_jquery8.default.spotSwipe === "undefined") {
      Touch.setupSpotSwipe(import_jquery8.default);
      Touch.setupTouchHandler(import_jquery8.default);
    }
  };

  // node_modules/foundation-sites/js/foundation.util.triggers.js
  var import_jquery9 = __toESM(require_jquery());
  var MutationObserver = function() {
    var prefixes = ["WebKit", "Moz", "O", "Ms", ""];
    for (var i = 0; i < prefixes.length; i++) {
      if (`${prefixes[i]}MutationObserver` in window) {
        return window[`${prefixes[i]}MutationObserver`];
      }
    }
    return false;
  }();
  var triggers = (el, type) => {
    el.data(type).split(" ").forEach((id) => {
      (0, import_jquery9.default)(`#${id}`)[type === "close" ? "trigger" : "triggerHandler"](`${type}.zf.trigger`, [el]);
    });
  };
  var Triggers = {
    Listeners: {
      Basic: {},
      Global: {}
    },
    Initializers: {}
  };
  Triggers.Listeners.Basic = {
    openListener: function() {
      triggers((0, import_jquery9.default)(this), "open");
    },
    closeListener: function() {
      let id = (0, import_jquery9.default)(this).data("close");
      if (id) {
        triggers((0, import_jquery9.default)(this), "close");
      } else {
        (0, import_jquery9.default)(this).trigger("close.zf.trigger");
      }
    },
    toggleListener: function() {
      let id = (0, import_jquery9.default)(this).data("toggle");
      if (id) {
        triggers((0, import_jquery9.default)(this), "toggle");
      } else {
        (0, import_jquery9.default)(this).trigger("toggle.zf.trigger");
      }
    },
    closeableListener: function(e) {
      let animation = (0, import_jquery9.default)(this).data("closable");
      e.stopPropagation();
      if (animation !== "") {
        Motion.animateOut((0, import_jquery9.default)(this), animation, function() {
          (0, import_jquery9.default)(this).trigger("closed.zf");
        });
      } else {
        (0, import_jquery9.default)(this).fadeOut().trigger("closed.zf");
      }
    },
    toggleFocusListener: function() {
      let id = (0, import_jquery9.default)(this).data("toggle-focus");
      (0, import_jquery9.default)(`#${id}`).triggerHandler("toggle.zf.trigger", [(0, import_jquery9.default)(this)]);
    }
  };
  Triggers.Initializers.addOpenListener = ($elem) => {
    $elem.off("click.zf.trigger", Triggers.Listeners.Basic.openListener);
    $elem.on("click.zf.trigger", "[data-open]", Triggers.Listeners.Basic.openListener);
  };
  Triggers.Initializers.addCloseListener = ($elem) => {
    $elem.off("click.zf.trigger", Triggers.Listeners.Basic.closeListener);
    $elem.on("click.zf.trigger", "[data-close]", Triggers.Listeners.Basic.closeListener);
  };
  Triggers.Initializers.addToggleListener = ($elem) => {
    $elem.off("click.zf.trigger", Triggers.Listeners.Basic.toggleListener);
    $elem.on("click.zf.trigger", "[data-toggle]", Triggers.Listeners.Basic.toggleListener);
  };
  Triggers.Initializers.addCloseableListener = ($elem) => {
    $elem.off("close.zf.trigger", Triggers.Listeners.Basic.closeableListener);
    $elem.on("close.zf.trigger", "[data-closeable], [data-closable]", Triggers.Listeners.Basic.closeableListener);
  };
  Triggers.Initializers.addToggleFocusListener = ($elem) => {
    $elem.off("focus.zf.trigger blur.zf.trigger", Triggers.Listeners.Basic.toggleFocusListener);
    $elem.on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", Triggers.Listeners.Basic.toggleFocusListener);
  };
  Triggers.Listeners.Global = {
    resizeListener: function($nodes) {
      if (!MutationObserver) {
        $nodes.each(function() {
          (0, import_jquery9.default)(this).triggerHandler("resizeme.zf.trigger");
        });
      }
      $nodes.attr("data-events", "resize");
    },
    scrollListener: function($nodes) {
      if (!MutationObserver) {
        $nodes.each(function() {
          (0, import_jquery9.default)(this).triggerHandler("scrollme.zf.trigger");
        });
      }
      $nodes.attr("data-events", "scroll");
    },
    closeMeListener: function(e, pluginId) {
      let plugin = e.namespace.split(".")[0];
      let plugins = (0, import_jquery9.default)(`[data-${plugin}]`).not(`[data-yeti-box="${pluginId}"]`);
      plugins.each(function() {
        let _this = (0, import_jquery9.default)(this);
        _this.triggerHandler("close.zf.trigger", [_this]);
      });
    }
  };
  Triggers.Initializers.addClosemeListener = function(pluginName) {
    var yetiBoxes = (0, import_jquery9.default)("[data-yeti-box]"), plugNames = ["dropdown", "tooltip", "reveal"];
    if (pluginName) {
      if (typeof pluginName === "string") {
        plugNames.push(pluginName);
      } else if (typeof pluginName === "object" && typeof pluginName[0] === "string") {
        plugNames = plugNames.concat(pluginName);
      } else {
        console.error("Plugin names must be strings");
      }
    }
    if (yetiBoxes.length) {
      let listeners = plugNames.map((name) => {
        return `closeme.zf.${name}`;
      }).join(" ");
      (0, import_jquery9.default)(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
    }
  };
  function debounceGlobalListener(debounce, trigger, listener) {
    let timer, args = Array.prototype.slice.call(arguments, 3);
    (0, import_jquery9.default)(window).on(trigger, function() {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        listener.apply(null, args);
      }, debounce || 10);
    });
  }
  Triggers.Initializers.addResizeListener = function(debounce) {
    let $nodes = (0, import_jquery9.default)("[data-resize]");
    if ($nodes.length) {
      debounceGlobalListener(debounce, "resize.zf.trigger", Triggers.Listeners.Global.resizeListener, $nodes);
    }
  };
  Triggers.Initializers.addScrollListener = function(debounce) {
    let $nodes = (0, import_jquery9.default)("[data-scroll]");
    if ($nodes.length) {
      debounceGlobalListener(debounce, "scroll.zf.trigger", Triggers.Listeners.Global.scrollListener, $nodes);
    }
  };
  Triggers.Initializers.addMutationEventsListener = function($elem) {
    if (!MutationObserver) {
      return false;
    }
    let $nodes = $elem.find("[data-resize], [data-scroll], [data-mutate]");
    var listeningElementsMutation = function(mutationRecordsList) {
      var $target = (0, import_jquery9.default)(mutationRecordsList[0].target);
      switch (mutationRecordsList[0].type) {
        case "attributes":
          if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
            $target.triggerHandler("scrollme.zf.trigger", [$target, window.pageYOffset]);
          }
          if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
            $target.triggerHandler("resizeme.zf.trigger", [$target]);
          }
          if (mutationRecordsList[0].attributeName === "style") {
            $target.closest("[data-mutate]").attr("data-events", "mutate");
            $target.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [$target.closest("[data-mutate]")]);
          }
          break;
        case "childList":
          $target.closest("[data-mutate]").attr("data-events", "mutate");
          $target.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [$target.closest("[data-mutate]")]);
          break;
        default:
          return false;
      }
    };
    if ($nodes.length) {
      for (var i = 0; i <= $nodes.length - 1; i++) {
        var elementObserver = new MutationObserver(listeningElementsMutation);
        elementObserver.observe($nodes[i], { attributes: true, childList: true, characterData: false, subtree: true, attributeFilter: ["data-events", "style"] });
      }
    }
  };
  Triggers.Initializers.addSimpleListeners = function() {
    let $document = (0, import_jquery9.default)(document);
    Triggers.Initializers.addOpenListener($document);
    Triggers.Initializers.addCloseListener($document);
    Triggers.Initializers.addToggleListener($document);
    Triggers.Initializers.addCloseableListener($document);
    Triggers.Initializers.addToggleFocusListener($document);
  };
  Triggers.Initializers.addGlobalListeners = function() {
    let $document = (0, import_jquery9.default)(document);
    Triggers.Initializers.addMutationEventsListener($document);
    Triggers.Initializers.addResizeListener(250);
    Triggers.Initializers.addScrollListener();
    Triggers.Initializers.addClosemeListener();
  };
  Triggers.init = function(__, Foundation2) {
    onLoad((0, import_jquery9.default)(window), function() {
      if (import_jquery9.default.triggersInitialized !== true) {
        Triggers.Initializers.addSimpleListeners();
        Triggers.Initializers.addGlobalListeners();
        import_jquery9.default.triggersInitialized = true;
      }
    });
    if (Foundation2) {
      Foundation2.Triggers = Triggers;
      Foundation2.IHearYou = Triggers.Initializers.addGlobalListeners;
    }
  };

  // node_modules/foundation-sites/js/foundation.accordion.js
  var import_jquery10 = __toESM(require_jquery());

  // node_modules/foundation-sites/js/foundation.core.plugin.js
  var Plugin = class {
    constructor(element, options) {
      this._setup(element, options);
      var pluginName = getPluginName(this);
      this.uuid = GetYoDigits(6, pluginName);
      if (!this.$element.attr(`data-${pluginName}`)) {
        this.$element.attr(`data-${pluginName}`, this.uuid);
      }
      if (!this.$element.data("zfPlugin")) {
        this.$element.data("zfPlugin", this);
      }
      this.$element.trigger(`init.zf.${pluginName}`);
    }
    destroy() {
      this._destroy();
      var pluginName = getPluginName(this);
      this.$element.removeAttr(`data-${pluginName}`).removeData("zfPlugin").trigger(`destroyed.zf.${pluginName}`);
      for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
          this[prop] = null;
        }
      }
    }
  };
  function hyphenate2(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function getPluginName(obj) {
    return hyphenate2(obj.className);
  }

  // node_modules/foundation-sites/js/foundation.accordion.js
  var Accordion = class extends Plugin {
    _setup(element, options) {
      this.$element = element;
      this.options = import_jquery10.default.extend({}, Accordion.defaults, this.$element.data(), options);
      this.className = "Accordion";
      this._init();
      Keyboard.register("Accordion", {
        "ENTER": "toggle",
        "SPACE": "toggle",
        "ARROW_DOWN": "next",
        "ARROW_UP": "previous",
        "HOME": "first",
        "END": "last"
      });
    }
    _init() {
      this._isInitializing = true;
      this.$tabs = this.$element.children("[data-accordion-item]");
      this.$tabs.each(function(idx, el) {
        var $el = (0, import_jquery10.default)(el), $content = $el.children("[data-tab-content]"), id = $content[0].id || GetYoDigits(6, "accordion"), linkId = el.id ? `${el.id}-label` : `${id}-label`;
        $el.find("a:first").attr({
          "aria-controls": id,
          "id": linkId,
          "aria-expanded": false
        });
        $content.attr({ "role": "region", "aria-labelledby": linkId, "aria-hidden": true, "id": id });
      });
      var $initActive = this.$element.find(".is-active").children("[data-tab-content]");
      if ($initActive.length) {
        this._initialAnchor = $initActive.prev("a").attr("href");
        this._openSingleTab($initActive);
      }
      this._checkDeepLink = () => {
        var anchor = window.location.hash;
        if (!anchor.length) {
          if (this._isInitializing)
            return;
          if (this._initialAnchor)
            anchor = this._initialAnchor;
        }
        var $anchor = anchor && (0, import_jquery10.default)(anchor);
        var $link = anchor && this.$element.find(`[href$="${anchor}"]`);
        var isOwnAnchor = !!($anchor.length && $link.length);
        if (isOwnAnchor) {
          if ($anchor && $link && $link.length) {
            if (!$link.parent("[data-accordion-item]").hasClass("is-active")) {
              this._openSingleTab($anchor);
            }
          } else {
            this._closeAllTabs();
          }
          if (this.options.deepLinkSmudge) {
            onLoad((0, import_jquery10.default)(window), () => {
              var offset = this.$element.offset();
              (0, import_jquery10.default)("html, body").animate({ scrollTop: offset.top - this.options.deepLinkSmudgeOffset }, this.options.deepLinkSmudgeDelay);
            });
          }
          this.$element.trigger("deeplink.zf.accordion", [$link, $anchor]);
        }
      };
      if (this.options.deepLink) {
        this._checkDeepLink();
      }
      this._events();
      this._isInitializing = false;
    }
    _events() {
      var _this = this;
      this.$tabs.each(function() {
        var $elem = (0, import_jquery10.default)(this);
        var $tabContent = $elem.children("[data-tab-content]");
        if ($tabContent.length) {
          $elem.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(e) {
            e.preventDefault();
            _this.toggle($tabContent);
          }).on("keydown.zf.accordion", function(e) {
            Keyboard.handleKey(e, "Accordion", {
              toggle: function() {
                _this.toggle($tabContent);
              },
              next: function() {
                var $a = $elem.next().find("a").focus();
                if (!_this.options.multiExpand) {
                  $a.trigger("click.zf.accordion");
                }
              },
              previous: function() {
                var $a = $elem.prev().find("a").focus();
                if (!_this.options.multiExpand) {
                  $a.trigger("click.zf.accordion");
                }
              },
              first: function() {
                var $a = _this.$tabs.first().find(".accordion-title").focus();
                if (!_this.options.multiExpand) {
                  $a.trigger("click.zf.accordion");
                }
              },
              last: function() {
                var $a = _this.$tabs.last().find(".accordion-title").focus();
                if (!_this.options.multiExpand) {
                  $a.trigger("click.zf.accordion");
                }
              },
              handled: function() {
                e.preventDefault();
              }
            });
          });
        }
      });
      if (this.options.deepLink) {
        (0, import_jquery10.default)(window).on("hashchange", this._checkDeepLink);
      }
    }
    toggle($target) {
      if ($target.closest("[data-accordion]").is("[disabled]")) {
        console.info("Cannot toggle an accordion that is disabled.");
        return;
      }
      if ($target.parent().hasClass("is-active")) {
        this.up($target);
      } else {
        this.down($target);
      }
      if (this.options.deepLink) {
        var anchor = $target.prev("a").attr("href");
        if (this.options.updateHistory) {
          history.pushState({}, "", anchor);
        } else {
          history.replaceState({}, "", anchor);
        }
      }
    }
    down($target) {
      if ($target.closest("[data-accordion]").is("[disabled]")) {
        console.info("Cannot call down on an accordion that is disabled.");
        return;
      }
      if (this.options.multiExpand)
        this._openTab($target);
      else
        this._openSingleTab($target);
    }
    up($target) {
      if (this.$element.is("[disabled]")) {
        console.info("Cannot call up on an accordion that is disabled.");
        return;
      }
      const $targetItem = $target.parent();
      if (!$targetItem.hasClass("is-active"))
        return;
      const $othersItems = $targetItem.siblings();
      if (!this.options.allowAllClosed && !$othersItems.hasClass("is-active"))
        return;
      this._closeTab($target);
    }
    _openSingleTab($target) {
      const $activeContents = this.$element.children(".is-active").children("[data-tab-content]");
      if ($activeContents.length) {
        this._closeTab($activeContents.not($target));
      }
      this._openTab($target);
    }
    _openTab($target) {
      const $targetItem = $target.parent();
      const targetContentId = $target.attr("aria-labelledby");
      $target.attr("aria-hidden", false);
      $targetItem.addClass("is-active");
      (0, import_jquery10.default)(`#${targetContentId}`).attr({
        "aria-expanded": true
      });
      $target.finish().slideDown(this.options.slideSpeed, () => {
        this.$element.trigger("down.zf.accordion", [$target]);
      });
    }
    _closeTab($target) {
      const $targetItem = $target.parent();
      const targetContentId = $target.attr("aria-labelledby");
      $target.attr("aria-hidden", true);
      $targetItem.removeClass("is-active");
      (0, import_jquery10.default)(`#${targetContentId}`).attr({
        "aria-expanded": false
      });
      $target.finish().slideUp(this.options.slideSpeed, () => {
        this.$element.trigger("up.zf.accordion", [$target]);
      });
    }
    _closeAllTabs() {
      var $activeTabs = this.$element.children(".is-active").children("[data-tab-content]");
      if ($activeTabs.length) {
        this._closeTab($activeTabs);
      }
    }
    _destroy() {
      this.$element.find("[data-tab-content]").stop(true).slideUp(0).css("display", "");
      this.$element.find("a").off(".zf.accordion");
      if (this.options.deepLink) {
        (0, import_jquery10.default)(window).off("hashchange", this._checkDeepLink);
      }
    }
  };
  Accordion.defaults = {
    slideSpeed: 250,
    multiExpand: false,
    allowAllClosed: false,
    deepLink: false,
    deepLinkSmudge: false,
    deepLinkSmudgeDelay: 300,
    deepLinkSmudgeOffset: 0,
    updateHistory: false
  };

  // node_modules/foundation-sites/js/foundation.equalizer.js
  var import_jquery11 = __toESM(require_jquery());
  var Equalizer = class extends Plugin {
    _setup(element, options) {
      this.$element = element;
      this.options = import_jquery11.default.extend({}, Equalizer.defaults, this.$element.data(), options);
      this.className = "Equalizer";
      this._init();
    }
    _init() {
      var eqId = this.$element.attr("data-equalizer") || "";
      var $watched = this.$element.find(`[data-equalizer-watch="${eqId}"]`);
      MediaQuery._init();
      this.$watched = $watched.length ? $watched : this.$element.find("[data-equalizer-watch]");
      this.$element.attr("data-resize", eqId || GetYoDigits(6, "eq"));
      this.$element.attr("data-mutate", eqId || GetYoDigits(6, "eq"));
      this.hasNested = this.$element.find("[data-equalizer]").length > 0;
      this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0;
      this.isOn = false;
      this._bindHandler = {
        onResizeMeBound: this._onResizeMe.bind(this),
        onPostEqualizedBound: this._onPostEqualized.bind(this)
      };
      var imgs = this.$element.find("img");
      var tooSmall;
      if (this.options.equalizeOn) {
        tooSmall = this._checkMQ();
        (0, import_jquery11.default)(window).on("changed.zf.mediaquery", this._checkMQ.bind(this));
      } else {
        this._events();
      }
      if (typeof tooSmall !== "undefined" && tooSmall === false || typeof tooSmall === "undefined") {
        if (imgs.length) {
          onImagesLoaded(imgs, this._reflow.bind(this));
        } else {
          this._reflow();
        }
      }
    }
    _pauseEvents() {
      this.isOn = false;
      this.$element.off({
        ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
        "resizeme.zf.trigger": this._bindHandler.onResizeMeBound,
        "mutateme.zf.trigger": this._bindHandler.onResizeMeBound
      });
    }
    _onResizeMe() {
      this._reflow();
    }
    _onPostEqualized(e) {
      if (e.target !== this.$element[0]) {
        this._reflow();
      }
    }
    _events() {
      this._pauseEvents();
      if (this.hasNested) {
        this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound);
      } else {
        this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound);
        this.$element.on("mutateme.zf.trigger", this._bindHandler.onResizeMeBound);
      }
      this.isOn = true;
    }
    _checkMQ() {
      var tooSmall = !MediaQuery.is(this.options.equalizeOn);
      if (tooSmall) {
        if (this.isOn) {
          this._pauseEvents();
          this.$watched.css("height", "auto");
        }
      } else {
        if (!this.isOn) {
          this._events();
        }
      }
      return tooSmall;
    }
    _killswitch() {
      return;
    }
    _reflow() {
      if (!this.options.equalizeOnStack) {
        if (this._isStacked()) {
          this.$watched.css("height", "auto");
          return false;
        }
      }
      if (this.options.equalizeByRow) {
        this.getHeightsByRow(this.applyHeightByRow.bind(this));
      } else {
        this.getHeights(this.applyHeight.bind(this));
      }
    }
    _isStacked() {
      if (!this.$watched[0] || !this.$watched[1]) {
        return true;
      }
      return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
    }
    getHeights(cb) {
      var heights = [];
      for (var i = 0, len = this.$watched.length; i < len; i++) {
        this.$watched[i].style.height = "auto";
        heights.push(this.$watched[i].offsetHeight);
      }
      cb(heights);
    }
    getHeightsByRow(cb) {
      var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0, groups = [], group = 0;
      groups[group] = [];
      for (var i = 0, len = this.$watched.length; i < len; i++) {
        this.$watched[i].style.height = "auto";
        var elOffsetTop = (0, import_jquery11.default)(this.$watched[i]).offset().top;
        if (elOffsetTop !== lastElTopOffset) {
          group++;
          groups[group] = [];
          lastElTopOffset = elOffsetTop;
        }
        groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);
      }
      for (var j = 0, ln = groups.length; j < ln; j++) {
        var heights = (0, import_jquery11.default)(groups[j]).map(function() {
          return this[1];
        }).get();
        var max = Math.max.apply(null, heights);
        groups[j].push(max);
      }
      cb(groups);
    }
    applyHeight(heights) {
      var max = Math.max.apply(null, heights);
      this.$element.trigger("preequalized.zf.equalizer");
      this.$watched.css("height", max);
      this.$element.trigger("postequalized.zf.equalizer");
    }
    applyHeightByRow(groups) {
      this.$element.trigger("preequalized.zf.equalizer");
      for (var i = 0, len = groups.length; i < len; i++) {
        var groupsILength = groups[i].length, max = groups[i][groupsILength - 1];
        if (groupsILength <= 2) {
          (0, import_jquery11.default)(groups[i][0][0]).css({ "height": "auto" });
          continue;
        }
        this.$element.trigger("preequalizedrow.zf.equalizer");
        for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {
          (0, import_jquery11.default)(groups[i][j][0]).css({ "height": max });
        }
        this.$element.trigger("postequalizedrow.zf.equalizer");
      }
      this.$element.trigger("postequalized.zf.equalizer");
    }
    _destroy() {
      this._pauseEvents();
      this.$watched.css("height", "auto");
    }
  };
  Equalizer.defaults = {
    equalizeOnStack: false,
    equalizeByRow: false,
    equalizeOn: ""
  };

  // node_modules/foundation-sites/js/foundation.interchange.js
  var import_jquery12 = __toESM(require_jquery());
  var Interchange = class extends Plugin {
    _setup(element, options) {
      this.$element = element;
      this.options = import_jquery12.default.extend({}, Interchange.defaults, this.$element.data(), options);
      this.rules = [];
      this.currentPath = "";
      this.className = "Interchange";
      Triggers.init(import_jquery12.default);
      this._init();
      this._events();
    }
    _init() {
      MediaQuery._init();
      var id = this.$element[0].id || GetYoDigits(6, "interchange");
      this.$element.attr({
        "data-resize": id,
        "id": id
      });
      this._parseOptions();
      this._addBreakpoints();
      this._generateRules();
      this._reflow();
    }
    _events() {
      this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", () => this._reflow());
    }
    _reflow() {
      var match;
      for (var i in this.rules) {
        if (this.rules.hasOwnProperty(i)) {
          var rule = this.rules[i];
          if (window.matchMedia(rule.query).matches) {
            match = rule;
          }
        }
      }
      if (match) {
        this.replace(match.path);
      }
    }
    _parseOptions() {
      var types = ["auto", "src", "background", "html"];
      if (typeof this.options.type === "undefined")
        this.options.type = "auto";
      else if (types.indexOf(this.options.type) === -1) {
        console.warn(`Warning: invalid value "${this.options.type}" for Interchange option "type"`);
        this.options.type = "auto";
      }
    }
    _addBreakpoints() {
      for (var i in MediaQuery.queries) {
        if (MediaQuery.queries.hasOwnProperty(i)) {
          var query = MediaQuery.queries[i];
          Interchange.SPECIAL_QUERIES[query.name] = query.value;
        }
      }
    }
    _generateRules() {
      var rulesList = [];
      var rules;
      if (this.options.rules) {
        rules = this.options.rules;
      } else {
        rules = this.$element.data("interchange");
      }
      rules = typeof rules === "string" ? rules.match(/\[.*?, .*?\]/g) : rules;
      for (var i in rules) {
        if (rules.hasOwnProperty(i)) {
          var rule = rules[i].slice(1, -1).split(", ");
          var path = rule.slice(0, -1).join("");
          var query = rule[rule.length - 1];
          if (Interchange.SPECIAL_QUERIES[query]) {
            query = Interchange.SPECIAL_QUERIES[query];
          }
          rulesList.push({
            path,
            query
          });
        }
      }
      this.rules = rulesList;
    }
    replace(path) {
      if (this.currentPath === path)
        return;
      var trigger = "replaced.zf.interchange";
      var type = this.options.type;
      if (type === "auto") {
        if (this.$element[0].nodeName === "IMG")
          type = "src";
        else if (path.match(/\.(gif|jpe?g|png|svg|tiff)([?#].*)?/i))
          type = "background";
        else
          type = "html";
      }
      if (type === "src") {
        this.$element.attr("src", path).on("load", () => {
          this.currentPath = path;
        }).trigger(trigger);
      } else if (type === "background") {
        path = path.replace(/\(/g, "%28").replace(/\)/g, "%29");
        this.$element.css({ "background-image": "url(" + path + ")" }).trigger(trigger);
      } else if (type === "html") {
        import_jquery12.default.get(path, (response) => {
          this.$element.html(response).trigger(trigger);
          (0, import_jquery12.default)(response).foundation();
          this.currentPath = path;
        });
      }
    }
    _destroy() {
      this.$element.off("resizeme.zf.trigger");
    }
  };
  Interchange.defaults = {
    rules: null,
    type: "auto"
  };
  Interchange.SPECIAL_QUERIES = {
    "landscape": "screen and (orientation: landscape)",
    "portrait": "screen and (orientation: portrait)",
    "retina": "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
  };

  // node_modules/foundation-sites/js/foundation.offcanvas.js
  var import_jquery13 = __toESM(require_jquery());
  var OffCanvas = class extends Plugin {
    _setup(element, options) {
      this.className = "OffCanvas";
      this.$element = element;
      this.options = import_jquery13.default.extend({}, OffCanvas.defaults, this.$element.data(), options);
      this.contentClasses = { base: [], reveal: [] };
      this.$lastTrigger = (0, import_jquery13.default)();
      this.$triggers = (0, import_jquery13.default)();
      this.position = "left";
      this.$content = (0, import_jquery13.default)();
      this.nested = !!this.options.nested;
      this.$sticky = (0, import_jquery13.default)();
      this.isInCanvas = false;
      (0, import_jquery13.default)(["push", "overlap"]).each((index, val) => {
        this.contentClasses.base.push("has-transition-" + val);
      });
      (0, import_jquery13.default)(["left", "right", "top", "bottom"]).each((index, val) => {
        this.contentClasses.base.push("has-position-" + val);
        this.contentClasses.reveal.push("has-reveal-" + val);
      });
      Triggers.init(import_jquery13.default);
      MediaQuery._init();
      this._init();
      this._events();
      Keyboard.register("OffCanvas", {
        "ESCAPE": "close"
      });
    }
    _init() {
      var id = this.$element.attr("id");
      this.$element.attr("aria-hidden", "true");
      if (this.options.contentId) {
        this.$content = (0, import_jquery13.default)("#" + this.options.contentId);
      } else if (this.$element.siblings("[data-off-canvas-content]").length) {
        this.$content = this.$element.siblings("[data-off-canvas-content]").first();
      } else {
        this.$content = this.$element.closest("[data-off-canvas-content]").first();
      }
      if (!this.options.contentId) {
        this.nested = this.$element.siblings("[data-off-canvas-content]").length === 0;
      } else if (this.options.contentId && this.options.nested === null) {
        console.warn("Remember to use the nested option if using the content ID option!");
      }
      if (this.nested === true) {
        this.options.transition = "overlap";
        this.$element.removeClass("is-transition-push");
      }
      this.$element.addClass(`is-transition-${this.options.transition} is-closed`);
      this.$triggers = (0, import_jquery13.default)(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr("aria-expanded", "false").attr("aria-controls", id);
      this.position = this.$element.is(".position-left, .position-top, .position-right, .position-bottom") ? this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1] : this.position;
      if (this.options.contentOverlay === true) {
        var overlay = document.createElement("div");
        var overlayPosition = (0, import_jquery13.default)(this.$element).css("position") === "fixed" ? "is-overlay-fixed" : "is-overlay-absolute";
        overlay.setAttribute("class", "js-off-canvas-overlay " + overlayPosition);
        this.$overlay = (0, import_jquery13.default)(overlay);
        if (overlayPosition === "is-overlay-fixed") {
          (0, import_jquery13.default)(this.$overlay).insertAfter(this.$element);
        } else {
          this.$content.append(this.$overlay);
        }
      }
      var revealOnRegExp = new RegExp(RegExpEscape(this.options.revealClass) + "([^\\s]+)", "g");
      var revealOnClass = revealOnRegExp.exec(this.$element[0].className);
      if (revealOnClass) {
        this.options.isRevealed = true;
        this.options.revealOn = this.options.revealOn || revealOnClass[1];
      }
      if (this.options.isRevealed === true && this.options.revealOn) {
        this.$element.first().addClass(`${this.options.revealClass}${this.options.revealOn}`);
        this._setMQChecker();
      }
      if (this.options.transitionTime) {
        this.$element.css("transition-duration", this.options.transitionTime);
      }
      this.$sticky = this.$content.find("[data-off-canvas-sticky]");
      if (this.$sticky.length > 0 && this.options.transition === "push") {
        this.options.contentScroll = false;
      }
      let inCanvasFor = this.$element.attr("class").match(/\bin-canvas-for-(\w+)/);
      if (inCanvasFor && inCanvasFor.length === 2) {
        this.options.inCanvasOn = inCanvasFor[1];
      } else if (this.options.inCanvasOn) {
        this.$element.addClass(`in-canvas-for-${this.options.inCanvasOn}`);
      }
      if (this.options.inCanvasOn) {
        this._checkInCanvas();
      }
      this._removeContentClasses();
    }
    _events() {
      this.$element.off(".zf.trigger .zf.offCanvas").on({
        "open.zf.trigger": this.open.bind(this),
        "close.zf.trigger": this.close.bind(this),
        "toggle.zf.trigger": this.toggle.bind(this),
        "keydown.zf.offCanvas": this._handleKeyboard.bind(this)
      });
      if (this.options.closeOnClick === true) {
        var $target = this.options.contentOverlay ? this.$overlay : this.$content;
        $target.on({ "click.zf.offCanvas": this.close.bind(this) });
      }
      if (this.options.inCanvasOn) {
        (0, import_jquery13.default)(window).on("changed.zf.mediaquery", () => {
          this._checkInCanvas();
        });
      }
    }
    _setMQChecker() {
      var _this = this;
      this.onLoadListener = onLoad((0, import_jquery13.default)(window), function() {
        if (MediaQuery.atLeast(_this.options.revealOn)) {
          _this.reveal(true);
        }
      });
      (0, import_jquery13.default)(window).on("changed.zf.mediaquery", function() {
        if (MediaQuery.atLeast(_this.options.revealOn)) {
          _this.reveal(true);
        } else {
          _this.reveal(false);
        }
      });
    }
    _checkInCanvas() {
      this.isInCanvas = MediaQuery.atLeast(this.options.inCanvasOn);
      if (this.isInCanvas === true) {
        this.close();
      }
    }
    _removeContentClasses(hasReveal) {
      if (typeof hasReveal !== "boolean") {
        this.$content.removeClass(this.contentClasses.base.join(" "));
      } else if (hasReveal === false) {
        this.$content.removeClass(`has-reveal-${this.position}`);
      }
    }
    _addContentClasses(hasReveal) {
      this._removeContentClasses(hasReveal);
      if (typeof hasReveal !== "boolean") {
        this.$content.addClass(`has-transition-${this.options.transition} has-position-${this.position}`);
      } else if (hasReveal === true) {
        this.$content.addClass(`has-reveal-${this.position}`);
      }
    }
    _fixStickyElements() {
      this.$sticky.each((_, el) => {
        const $el = (0, import_jquery13.default)(el);
        if ($el.css("position") === "fixed") {
          let topVal = parseInt($el.css("top"), 10);
          $el.data("offCanvasSticky", { top: topVal });
          let absoluteTopVal = (0, import_jquery13.default)(document).scrollTop() + topVal;
          $el.css({ top: `${absoluteTopVal}px`, width: "100%", transition: "none" });
        }
      });
    }
    _unfixStickyElements() {
      this.$sticky.each((_, el) => {
        const $el = (0, import_jquery13.default)(el);
        let stickyData = $el.data("offCanvasSticky");
        if (typeof stickyData === "object") {
          $el.css({ top: `${stickyData.top}px`, width: "", transition: "" });
          $el.data("offCanvasSticky", "");
        }
      });
    }
    reveal(isRevealed) {
      if (isRevealed) {
        this.close();
        this.isRevealed = true;
        this.$element.attr("aria-hidden", "false");
        this.$element.off("open.zf.trigger toggle.zf.trigger");
        this.$element.removeClass("is-closed");
      } else {
        this.isRevealed = false;
        this.$element.attr("aria-hidden", "true");
        this.$element.off("open.zf.trigger toggle.zf.trigger").on({
          "open.zf.trigger": this.open.bind(this),
          "toggle.zf.trigger": this.toggle.bind(this)
        });
        this.$element.addClass("is-closed");
      }
      this._addContentClasses(isRevealed);
    }
    _stopScrolling() {
      return false;
    }
    _recordScrollable(event) {
      const elem = this;
      elem.lastY = event.touches[0].pageY;
    }
    _preventDefaultAtEdges(event) {
      const elem = this;
      const _this = event.data;
      const delta = elem.lastY - event.touches[0].pageY;
      elem.lastY = event.touches[0].pageY;
      if (!_this._canScroll(delta, elem)) {
        event.preventDefault();
      }
    }
    _scrollboxTouchMoved(event) {
      const elem = this;
      const _this = event.data;
      const parent = elem.closest("[data-off-canvas], [data-off-canvas-scrollbox-outer]");
      const delta = elem.lastY - event.touches[0].pageY;
      parent.lastY = elem.lastY = event.touches[0].pageY;
      event.stopPropagation();
      if (!_this._canScroll(delta, elem)) {
        if (!_this._canScroll(delta, parent)) {
          event.preventDefault();
        } else {
          parent.scrollTop += delta;
        }
      }
    }
    _canScroll(delta, elem) {
      const up = delta < 0;
      const down = delta > 0;
      const allowUp = elem.scrollTop > 0;
      const allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
      return up && allowUp || down && allowDown;
    }
    open(event, trigger) {
      if (this.$element.hasClass("is-open") || this.isRevealed || this.isInCanvas) {
        return;
      }
      var _this = this;
      if (trigger) {
        this.$lastTrigger = trigger;
      }
      if (this.options.forceTo === "top") {
        window.scrollTo(0, 0);
      } else if (this.options.forceTo === "bottom") {
        window.scrollTo(0, document.body.scrollHeight);
      }
      if (this.options.transitionTime && this.options.transition !== "overlap") {
        this.$element.siblings("[data-off-canvas-content]").css("transition-duration", this.options.transitionTime);
      } else {
        this.$element.siblings("[data-off-canvas-content]").css("transition-duration", "");
      }
      this.$element.addClass("is-open").removeClass("is-closed");
      this.$triggers.attr("aria-expanded", "true");
      this.$element.attr("aria-hidden", "false");
      this.$content.addClass("is-open-" + this.position);
      if (this.options.contentScroll === false) {
        (0, import_jquery13.default)("body").addClass("is-off-canvas-open").on("touchmove", this._stopScrolling);
        this.$element.on("touchstart", this._recordScrollable);
        this.$element.on("touchmove", this, this._preventDefaultAtEdges);
        this.$element.on("touchstart", "[data-off-canvas-scrollbox]", this._recordScrollable);
        this.$element.on("touchmove", "[data-off-canvas-scrollbox]", this, this._scrollboxTouchMoved);
      }
      if (this.options.contentOverlay === true) {
        this.$overlay.addClass("is-visible");
      }
      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
        this.$overlay.addClass("is-closable");
      }
      if (this.options.autoFocus === true) {
        this.$element.one(transitionend(this.$element), function() {
          if (!_this.$element.hasClass("is-open")) {
            return;
          }
          var canvasFocus = _this.$element.find("[data-autofocus]");
          if (canvasFocus.length) {
            canvasFocus.eq(0).focus();
          } else {
            _this.$element.find("a, button").eq(0).focus();
          }
        });
      }
      if (this.options.trapFocus === true) {
        this.$content.attr("tabindex", "-1");
        Keyboard.trapFocus(this.$element);
      }
      if (this.options.transition === "push") {
        this._fixStickyElements();
      }
      this._addContentClasses();
      this.$element.trigger("opened.zf.offCanvas");
      this.$element.one(transitionend(this.$element), () => {
        this.$element.trigger("openedEnd.zf.offCanvas");
      });
    }
    close() {
      if (!this.$element.hasClass("is-open") || this.isRevealed) {
        return;
      }
      this.$element.trigger("close.zf.offCanvas");
      this.$element.removeClass("is-open");
      this.$element.attr("aria-hidden", "true");
      this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom");
      if (this.options.contentOverlay === true) {
        this.$overlay.removeClass("is-visible");
      }
      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
        this.$overlay.removeClass("is-closable");
      }
      this.$triggers.attr("aria-expanded", "false");
      this.$element.one(transitionend(this.$element), () => {
        this.$element.addClass("is-closed");
        this._removeContentClasses();
        if (this.options.transition === "push") {
          this._unfixStickyElements();
        }
        if (this.options.contentScroll === false) {
          (0, import_jquery13.default)("body").removeClass("is-off-canvas-open").off("touchmove", this._stopScrolling);
          this.$element.off("touchstart", this._recordScrollable);
          this.$element.off("touchmove", this._preventDefaultAtEdges);
          this.$element.off("touchstart", "[data-off-canvas-scrollbox]", this._recordScrollable);
          this.$element.off("touchmove", "[data-off-canvas-scrollbox]", this._scrollboxTouchMoved);
        }
        if (this.options.trapFocus === true) {
          this.$content.removeAttr("tabindex");
          Keyboard.releaseFocus(this.$element);
        }
        this.$element.trigger("closed.zf.offCanvas");
      });
    }
    toggle(event, trigger) {
      if (this.$element.hasClass("is-open")) {
        this.close(event, trigger);
      } else {
        this.open(event, trigger);
      }
    }
    _handleKeyboard(e) {
      Keyboard.handleKey(e, "OffCanvas", {
        close: () => {
          this.close();
          this.$lastTrigger.focus();
          return true;
        },
        handled: () => {
          e.preventDefault();
        }
      });
    }
    _destroy() {
      this.close();
      this.$element.off(".zf.trigger .zf.offCanvas");
      this.$overlay.off(".zf.offCanvas");
      if (this.onLoadListener)
        (0, import_jquery13.default)(window).off(this.onLoadListener);
    }
  };
  OffCanvas.defaults = {
    closeOnClick: true,
    contentOverlay: true,
    contentId: null,
    nested: null,
    contentScroll: true,
    transitionTime: null,
    transition: "push",
    forceTo: null,
    isRevealed: false,
    revealOn: null,
    inCanvasOn: null,
    autoFocus: true,
    revealClass: "reveal-for-",
    trapFocus: false
  };

  // node_modules/foundation-sites/js/foundation.reveal.js
  var import_jquery14 = __toESM(require_jquery());
  var Reveal = class extends Plugin {
    _setup(element, options) {
      this.$element = element;
      this.options = import_jquery14.default.extend({}, Reveal.defaults, this.$element.data(), options);
      this.className = "Reveal";
      this._init();
      Touch.init(import_jquery14.default);
      Triggers.init(import_jquery14.default);
      Keyboard.register("Reveal", {
        "ESCAPE": "close"
      });
    }
    _init() {
      MediaQuery._init();
      this.id = this.$element.attr("id");
      this.isActive = false;
      this.cached = { mq: MediaQuery.current };
      this.$anchor = (0, import_jquery14.default)(`[data-open="${this.id}"]`).length ? (0, import_jquery14.default)(`[data-open="${this.id}"]`) : (0, import_jquery14.default)(`[data-toggle="${this.id}"]`);
      this.$anchor.attr({
        "aria-controls": this.id,
        "aria-haspopup": "dialog",
        "tabindex": 0
      });
      if (this.options.fullScreen || this.$element.hasClass("full")) {
        this.options.fullScreen = true;
        this.options.overlay = false;
      }
      if (this.options.overlay && !this.$overlay) {
        this.$overlay = this._makeOverlay(this.id);
      }
      this.$element.attr({
        "role": "dialog",
        "aria-hidden": true,
        "data-yeti-box": this.id,
        "data-resize": this.id
      });
      if (this.$overlay) {
        this.$element.detach().appendTo(this.$overlay);
      } else {
        this.$element.detach().appendTo((0, import_jquery14.default)(this.options.appendTo));
        this.$element.addClass("without-overlay");
      }
      this._events();
      if (this.options.deepLink && window.location.hash === `#${this.id}`) {
        this.onLoadListener = onLoad((0, import_jquery14.default)(window), () => this.open());
      }
    }
    _makeOverlay() {
      var additionalOverlayClasses = "";
      if (this.options.additionalOverlayClasses) {
        additionalOverlayClasses = " " + this.options.additionalOverlayClasses;
      }
      return (0, import_jquery14.default)("<div></div>").addClass("reveal-overlay" + additionalOverlayClasses).appendTo(this.options.appendTo);
    }
    _updatePosition() {
      var width = this.$element.outerWidth();
      var outerWidth = (0, import_jquery14.default)(window).width();
      var height = this.$element.outerHeight();
      var outerHeight = (0, import_jquery14.default)(window).height();
      var left, top = null;
      if (this.options.hOffset === "auto") {
        left = parseInt((outerWidth - width) / 2, 10);
      } else {
        left = parseInt(this.options.hOffset, 10);
      }
      if (this.options.vOffset === "auto") {
        if (height > outerHeight) {
          top = parseInt(Math.min(100, outerHeight / 10), 10);
        } else {
          top = parseInt((outerHeight - height) / 4, 10);
        }
      } else if (this.options.vOffset !== null) {
        top = parseInt(this.options.vOffset, 10);
      }
      if (top !== null) {
        this.$element.css({ top: top + "px" });
      }
      if (!this.$overlay || this.options.hOffset !== "auto") {
        this.$element.css({ left: left + "px" });
        this.$element.css({ margin: "0px" });
      }
    }
    _events() {
      var _this = this;
      this.$element.on({
        "open.zf.trigger": this.open.bind(this),
        "close.zf.trigger": (event, $element) => {
          if (event.target === _this.$element[0] || (0, import_jquery14.default)(event.target).parents("[data-closable]")[0] === $element) {
            return this.close.apply(this);
          }
        },
        "toggle.zf.trigger": this.toggle.bind(this),
        "resizeme.zf.trigger": function() {
          _this._updatePosition();
        }
      });
      if (this.options.closeOnClick && this.options.overlay) {
        this.$overlay.off(".zf.reveal").on("click.zf.dropdown tap.zf.dropdown", function(e) {
          if (e.target === _this.$element[0] || import_jquery14.default.contains(_this.$element[0], e.target) || !import_jquery14.default.contains(document, e.target)) {
            return;
          }
          _this.close();
        });
      }
      if (this.options.deepLink) {
        (0, import_jquery14.default)(window).on(`hashchange.zf.reveal:${this.id}`, this._handleState.bind(this));
      }
    }
    _handleState() {
      if (window.location.hash === "#" + this.id && !this.isActive) {
        this.open();
      } else {
        this.close();
      }
    }
    _disableScroll(scrollTop) {
      scrollTop = scrollTop || (0, import_jquery14.default)(window).scrollTop();
      if ((0, import_jquery14.default)(document).height() > (0, import_jquery14.default)(window).height()) {
        (0, import_jquery14.default)("html").css("top", -scrollTop);
      }
    }
    _enableScroll(scrollTop) {
      scrollTop = scrollTop || parseInt((0, import_jquery14.default)("html").css("top"), 10);
      if ((0, import_jquery14.default)(document).height() > (0, import_jquery14.default)(window).height()) {
        (0, import_jquery14.default)("html").css("top", "");
        (0, import_jquery14.default)(window).scrollTop(-scrollTop);
      }
    }
    open() {
      const hash = `#${this.id}`;
      if (this.options.deepLink && window.location.hash !== hash) {
        if (window.history.pushState) {
          if (this.options.updateHistory) {
            window.history.pushState({}, "", hash);
          } else {
            window.history.replaceState({}, "", hash);
          }
        } else {
          window.location.hash = hash;
        }
      }
      this.$activeAnchor = (0, import_jquery14.default)(document.activeElement).is(this.$anchor) ? (0, import_jquery14.default)(document.activeElement) : this.$anchor;
      this.isActive = true;
      this.$element.css({ "visibility": "hidden" }).show().scrollTop(0);
      if (this.options.overlay) {
        this.$overlay.css({ "visibility": "hidden" }).show();
      }
      this._updatePosition();
      this.$element.hide().css({ "visibility": "" });
      if (this.$overlay) {
        this.$overlay.css({ "visibility": "" }).hide();
        if (this.$element.hasClass("fast")) {
          this.$overlay.addClass("fast");
        } else if (this.$element.hasClass("slow")) {
          this.$overlay.addClass("slow");
        }
      }
      if (!this.options.multipleOpened) {
        this.$element.trigger("closeme.zf.reveal", this.id);
      }
      if ((0, import_jquery14.default)(".reveal:visible").length === 0) {
        this._disableScroll();
      }
      var _this = this;
      if (this.options.animationIn) {
        let afterAnimation = function() {
          _this.$element.attr({
            "aria-hidden": false,
            "tabindex": -1
          }).focus();
          _this._addGlobalClasses();
          Keyboard.trapFocus(_this.$element);
        };
        if (this.options.overlay) {
          Motion.animateIn(this.$overlay, "fade-in");
        }
        Motion.animateIn(this.$element, this.options.animationIn, () => {
          if (this.$element) {
            this.focusableElements = Keyboard.findFocusable(this.$element);
            afterAnimation();
          }
        });
      } else {
        if (this.options.overlay) {
          this.$overlay.show(0);
        }
        this.$element.show(this.options.showDelay);
      }
      this.$element.attr({
        "aria-hidden": false,
        "tabindex": -1
      }).focus();
      Keyboard.trapFocus(this.$element);
      this._addGlobalClasses();
      this._addGlobalListeners();
      this.$element.trigger("open.zf.reveal");
    }
    _addGlobalClasses() {
      const updateScrollbarClass = () => {
        (0, import_jquery14.default)("html").toggleClass("zf-has-scroll", !!((0, import_jquery14.default)(document).height() > (0, import_jquery14.default)(window).height()));
      };
      this.$element.on("resizeme.zf.trigger.revealScrollbarListener", () => updateScrollbarClass());
      updateScrollbarClass();
      (0, import_jquery14.default)("html").addClass("is-reveal-open");
    }
    _removeGlobalClasses() {
      this.$element.off("resizeme.zf.trigger.revealScrollbarListener");
      (0, import_jquery14.default)("html").removeClass("is-reveal-open");
      (0, import_jquery14.default)("html").removeClass("zf-has-scroll");
    }
    _addGlobalListeners() {
      var _this = this;
      if (!this.$element) {
        return;
      }
      this.focusableElements = Keyboard.findFocusable(this.$element);
      if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
        (0, import_jquery14.default)("body").on("click.zf.dropdown tap.zf.dropdown", function(e) {
          if (e.target === _this.$element[0] || import_jquery14.default.contains(_this.$element[0], e.target) || !import_jquery14.default.contains(document, e.target)) {
            return;
          }
          _this.close();
        });
      }
      if (this.options.closeOnEsc) {
        (0, import_jquery14.default)(window).on("keydown.zf.reveal", function(e) {
          Keyboard.handleKey(e, "Reveal", {
            close: function() {
              if (_this.options.closeOnEsc) {
                _this.close();
              }
            }
          });
        });
      }
    }
    close() {
      if (!this.isActive || !this.$element.is(":visible")) {
        return false;
      }
      var _this = this;
      if (this.options.animationOut) {
        if (this.options.overlay) {
          Motion.animateOut(this.$overlay, "fade-out");
        }
        Motion.animateOut(this.$element, this.options.animationOut, finishUp);
      } else {
        this.$element.hide(this.options.hideDelay);
        if (this.options.overlay) {
          this.$overlay.hide(0, finishUp);
        } else {
          finishUp();
        }
      }
      if (this.options.closeOnEsc) {
        (0, import_jquery14.default)(window).off("keydown.zf.reveal");
      }
      if (!this.options.overlay && this.options.closeOnClick) {
        (0, import_jquery14.default)("body").off("click.zf.dropdown tap.zf.dropdown");
      }
      this.$element.off("keydown.zf.reveal");
      function finishUp() {
        var scrollTop = parseInt((0, import_jquery14.default)("html").css("top"), 10);
        if ((0, import_jquery14.default)(".reveal:visible").length === 0) {
          _this._removeGlobalClasses();
        }
        Keyboard.releaseFocus(_this.$element);
        _this.$element.attr("aria-hidden", true);
        if ((0, import_jquery14.default)(".reveal:visible").length === 0) {
          _this._enableScroll(scrollTop);
        }
        _this.$element.trigger("closed.zf.reveal");
      }
      if (this.options.resetOnClose) {
        this.$element.html(this.$element.html());
      }
      this.isActive = false;
      if (_this.options.deepLink && window.location.hash === `#${this.id}`) {
        if (window.history.replaceState) {
          const urlWithoutHash = window.location.pathname + window.location.search;
          if (this.options.updateHistory) {
            window.history.pushState({}, "", urlWithoutHash);
          } else {
            window.history.replaceState("", document.title, urlWithoutHash);
          }
        } else {
          window.location.hash = "";
        }
      }
      this.$activeAnchor.focus();
    }
    toggle() {
      if (this.isActive) {
        this.close();
      } else {
        this.open();
      }
    }
    _destroy() {
      if (this.options.overlay) {
        this.$element.appendTo((0, import_jquery14.default)(this.options.appendTo));
        this.$overlay.hide().off().remove();
      }
      this.$element.hide().off();
      this.$anchor.off(".zf");
      (0, import_jquery14.default)(window).off(`.zf.reveal:${this.id}`);
      if (this.onLoadListener)
        (0, import_jquery14.default)(window).off(this.onLoadListener);
      if ((0, import_jquery14.default)(".reveal:visible").length === 0) {
        this._removeGlobalClasses();
      }
    }
  };
  Reveal.defaults = {
    animationIn: "",
    animationOut: "",
    showDelay: 0,
    hideDelay: 0,
    closeOnClick: true,
    closeOnEsc: true,
    multipleOpened: false,
    vOffset: "auto",
    hOffset: "auto",
    fullScreen: false,
    overlay: true,
    resetOnClose: false,
    deepLink: false,
    updateHistory: false,
    appendTo: "body",
    additionalOverlayClasses: ""
  };

  // node_modules/foundation-sites/js/foundation.smoothScroll.js
  var import_jquery15 = __toESM(require_jquery());
  var SmoothScroll = class extends Plugin {
    _setup(element, options) {
      this.$element = element;
      this.options = import_jquery15.default.extend({}, SmoothScroll.defaults, this.$element.data(), options);
      this.className = "SmoothScroll";
      this._init();
    }
    _init() {
      const id = this.$element[0].id || GetYoDigits(6, "smooth-scroll");
      this.$element.attr({ id });
      this._events();
    }
    _events() {
      this._linkClickListener = this._handleLinkClick.bind(this);
      this.$element.on("click.zf.smoothScroll", this._linkClickListener);
      this.$element.on("click.zf.smoothScroll", 'a[href^="#"]', this._linkClickListener);
    }
    _handleLinkClick(e) {
      if (!(0, import_jquery15.default)(e.currentTarget).is('a[href^="#"]'))
        return;
      const arrival = e.currentTarget.getAttribute("href");
      this._inTransition = true;
      SmoothScroll.scrollToLoc(arrival, this.options, () => {
        this._inTransition = false;
      });
      e.preventDefault();
    }
    static scrollToLoc(loc, options = SmoothScroll.defaults, callback) {
      const $loc = (0, import_jquery15.default)(loc);
      if (!$loc.length)
        return false;
      var scrollPos = Math.round($loc.offset().top - options.threshold / 2 - options.offset);
      (0, import_jquery15.default)("html, body").stop(true).animate(
        { scrollTop: scrollPos },
        options.animationDuration,
        options.animationEasing,
        () => {
          if (typeof callback === "function") {
            callback();
          }
        }
      );
    }
    _destroy() {
      this.$element.off("click.zf.smoothScroll", this._linkClickListener);
      this.$element.off("click.zf.smoothScroll", 'a[href^="#"]', this._linkClickListener);
    }
  };
  SmoothScroll.defaults = {
    animationDuration: 500,
    animationEasing: "linear",
    threshold: 50,
    offset: 0
  };

  // node_modules/foundation-sites/js/foundation.toggler.js
  var import_jquery16 = __toESM(require_jquery());
  var Toggler = class extends Plugin {
    _setup(element, options) {
      this.$element = element;
      this.options = import_jquery16.default.extend({}, Toggler.defaults, element.data(), options);
      this.className = "";
      this.className = "Toggler";
      Triggers.init(import_jquery16.default);
      this._init();
      this._events();
    }
    _init() {
      var id = this.$element[0].id, $triggers = (0, import_jquery16.default)(`[data-open~="${id}"], [data-close~="${id}"], [data-toggle~="${id}"]`);
      var input;
      if (this.options.animate) {
        input = this.options.animate.split(" ");
        this.animationIn = input[0];
        this.animationOut = input[1] || null;
        $triggers.attr("aria-expanded", !this.$element.is(":hidden"));
      } else {
        input = this.options.toggler;
        if (typeof input !== "string" || !input.length) {
          throw new Error(`The 'toggler' option containing the target class is required, got "${input}"`);
        }
        this.className = input[0] === "." ? input.slice(1) : input;
        $triggers.attr("aria-expanded", this.$element.hasClass(this.className));
      }
      $triggers.each((index, trigger) => {
        const $trigger = (0, import_jquery16.default)(trigger);
        const controls = $trigger.attr("aria-controls") || "";
        const containsId = new RegExp(`\\b${RegExpEscape(id)}\\b`).test(controls);
        if (!containsId)
          $trigger.attr("aria-controls", controls ? `${controls} ${id}` : id);
      });
    }
    _events() {
      this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this));
    }
    toggle() {
      this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]();
    }
    _toggleClass() {
      this.$element.toggleClass(this.className);
      var isOn = this.$element.hasClass(this.className);
      if (isOn) {
        this.$element.trigger("on.zf.toggler");
      } else {
        this.$element.trigger("off.zf.toggler");
      }
      this._updateARIA(isOn);
      this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger");
    }
    _toggleAnimate() {
      var _this = this;
      if (this.$element.is(":hidden")) {
        Motion.animateIn(this.$element, this.animationIn, function() {
          _this._updateARIA(true);
          this.trigger("on.zf.toggler");
          this.find("[data-mutate]").trigger("mutateme.zf.trigger");
        });
      } else {
        Motion.animateOut(this.$element, this.animationOut, function() {
          _this._updateARIA(false);
          this.trigger("off.zf.toggler");
          this.find("[data-mutate]").trigger("mutateme.zf.trigger");
        });
      }
    }
    _updateARIA(isOn) {
      var id = this.$element[0].id;
      (0, import_jquery16.default)(`[data-open="${id}"], [data-close="${id}"], [data-toggle="${id}"]`).attr({
        "aria-expanded": isOn ? true : false
      });
    }
    _destroy() {
      this.$element.off(".zf.toggler");
    }
  };
  Toggler.defaults = {
    toggler: void 0,
    animate: false
  };

  // scripts/_foundation.js
  Foundation.addToJquery(import_jquery17.default);
  Foundation.rtl = rtl;
  Foundation.GetYoDigits = GetYoDigits;
  Foundation.transitionend = transitionend;
  Foundation.RegExpEscape = RegExpEscape;
  Foundation.onLoad = onLoad;
  Foundation.Box = Box;
  Foundation.onImagesLoaded = onImagesLoaded;
  Foundation.Keyboard = Keyboard;
  Foundation.MediaQuery = MediaQuery;
  Foundation.Motion = Motion;
  Foundation.Move = Move;
  Foundation.Nest = Nest;
  Foundation.Timer = Timer;
  Touch.init(import_jquery17.default);
  Triggers.init(import_jquery17.default, Foundation);
  MediaQuery._init();
  Foundation.plugin(Accordion, "Accordion");
  Foundation.plugin(Equalizer, "Equalizer");
  Foundation.plugin(Interchange, "Interchange");
  Foundation.plugin(OffCanvas, "OffCanvas");
  Foundation.plugin(Reveal, "Reveal");
  Foundation.plugin(SmoothScroll, "SmoothScroll");

  // scripts/_slickjs.js
  var import_jquery18 = __toESM(require_jquery());
  var import_slick_carousel = __toESM(require_slick());
  if (typeof import_jquery18.default.fn.slick == "function") {
    (0, import_jquery18.default)(".js-slick").slick({
      mobileFirst: true,
      arrows: true,
      dots: false,
      infinite: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  // scripts/app.js
  (0, import_jquery19.default)(document).foundation();
  (0, import_jquery19.default)(".box-slider").slick({
    arrows: false,
    dots: true,
    dotsClass: "slick-dots",
    adaptiveHeight: true
  });
  (0, import_jquery19.default)(".search-button").on("click", function(e) {
    e.preventDefault();
    (0, import_jquery19.default)(".search-container").animate({
      top: "0"
    });
  });
  (0, import_jquery19.default)(".close").on("click", function() {
    (0, import_jquery19.default)(".search-container").animate({
      top: "-100vh"
    });
  });
})();
/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */
