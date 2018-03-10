var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// example of simple includes for js
/*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
    "use strict";
    "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};function p(a, b) {
        b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
    }var q = "3.0.0",
        r = function r(a, b) {
        return new r.fn.init(a, b);
    },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function v(a, b) {
        return b.toUpperCase();
    };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
            return f.call(this);
        }, get: function get(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : f.call(this);
        }, pushStack: function pushStack(a) {
            var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
        }, each: function each(a) {
            return r.each(this, a);
        }, map: function map(a) {
            return this.pushStack(r.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        }, slice: function slice() {
            return this.pushStack(f.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor();
        }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
        var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (a = arguments[h])) for (b in a) {
                c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            }
        }return g;
    }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
            throw new Error(a);
        }, noop: function noop() {}, isFunction: function isFunction(a) {
            return "function" === r.type(a);
        }, isArray: Array.isArray, isWindow: function isWindow(a) {
            return null != a && a === a.window;
        }, isNumeric: function isNumeric(a) {
            var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        }, isPlainObject: function isPlainObject(a) {
            var b, c;return a && "[object Object]" === k.call(a) ? (b = e(a)) ? (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n) : !0 : !1;
        }, isEmptyObject: function isEmptyObject(a) {
            var b;for (b in a) {
                return !1;
            }return !0;
        }, type: function type(a) {
            return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
        }, globalEval: function globalEval(a) {
            p(a);
        }, camelCase: function camelCase(a) {
            return a.replace(t, "ms-").replace(u, v);
        }, nodeName: function nodeName(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        }, each: function each(a, b) {
            var c,
                d = 0;if (w(a)) {
                for (c = a.length; c > d; d++) {
                    if (b.call(a[d], d, a[d]) === !1) break;
                }
            } else for (d in a) {
                if (b.call(a[d], d, a[d]) === !1) break;
            }return a;
        }, trim: function trim(a) {
            return null == a ? "" : (a + "").replace(s, "");
        }, makeArray: function makeArray(a, b) {
            var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
        }, inArray: function inArray(a, b, c) {
            return null == b ? -1 : i.call(b, a, c);
        }, merge: function merge(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
                a[e++] = b[d];
            }return a.length = e, a;
        }, grep: function grep(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f]);
            }return e;
        }, map: function map(a, b, c) {
            var d,
                e,
                f = 0,
                h = [];if (w(a)) for (d = a.length; d > f; f++) {
                e = b(a[f], f, c), null != e && h.push(e);
            } else for (f in a) {
                e = b(a[f], f, c), null != e && h.push(e);
            }return g.apply([], h);
        }, guid: 1, proxy: function proxy(a, b) {
            var c, d, e;return "string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a) ? (d = f.call(arguments, 2), e = function e() {
                return a.apply(b || this, d.concat(f.call(arguments)));
            }, e.guid = a.guid = a.guid || r.guid++, e) : void 0;
        }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
    });function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);return "function" === c || r.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }var x = function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function B(a, b) {
            return a === b && (l = !0), 0;
        },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function I(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                if (a[c] === b) return c;
            }return -1;
        },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function aa(a, b, c) {
            var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            ca = function ca(a, b) {
            return b ? "\x00" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
        },
            da = function da() {
            m();
        },
            ea = ta(function (a) {
            return a.disabled === !0;
        }, { dir: "parentNode", next: "legend" });try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
        } catch (fa) {
            G = { apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b));
                } : function (a, b) {
                    var c = a.length,
                        d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
                } };
        }function ga(a, b, d, e) {
            var f,
                h,
                j,
                k,
                l,
                o,
                r,
                s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
                    if (9 === w) {
                        if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
                    } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
                } else {
                    if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
                }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
                            o[h] = "#" + k + " " + sa(o[h]);
                        }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
                    }if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d;
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id");
                    }
                }
            }return i(a.replace(P, "$1"), b, d, e);
        }function ha() {
            var a = [];function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }return b;
        }function ia(a) {
            return a[u] = !0, a;
        }function ja(a) {
            var b = n.createElement("fieldset");try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }function ka(a, b) {
            var c = a.split("|"),
                e = c.length;while (e--) {
                d.attrHandle[c[e]] = b;
            }
        }function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
                if (c === b) return -1;
            }return a ? 1 : -1;
        }function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
            };
        }function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
            };
        }function oa(a) {
            return function (b) {
                return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ea(b)) !== a);
            };
        }function pa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e,
                        f = a([], c.length, b),
                        g = f.length;while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                    }
                });
            });
        }function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
        }, m = ga.setDocument = function (a) {
            var b,
                e,
                g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);return c ? [c] : [];
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(_, aa);return function (a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(_, aa);return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function (a, b) {
                var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c);
                    }return d;
                }return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function (a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b) while (b = b.parentNode) {
                    if (b === a) return !0;
                }return !1;
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b) return l = !0, 0;var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
                    g.unshift(c);
                }c = b;while (c = c.parentNode) {
                    h.unshift(c);
                }while (g[d] === h[d]) {
                    d++;
                }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            }, n) : n;
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}return ga(b, n, null, [a]).length > 0;
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.escape = function (a) {
            return (a + "").replace(ba, ca);
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function (a) {
            var b,
                d = [],
                e = 0,
                f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f));
                }while (e--) {
                    a.splice(d[e], 1);
                }
            }return k = null, a;
        }, e = ga.getText = function (a) {
            var b,
                c = "",
                d = 0,
                f = a.nodeType;if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a);
                    }
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) {
                c += e(b);
            }return c;
        }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                }, CHILD: function CHILD(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
                }, PSEUDO: function PSEUDO(a) {
                    var b,
                        c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                } }, filter: { TAG: function TAG(a) {
                    var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                }, CLASS: function CLASS(a) {
                    var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                }, CHILD: function CHILD(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;if (q) {
                            if (f) {
                                while (p) {
                                    m = b;while (m = m[p]) {
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    }o = p = "only" === a && !o && "nextSibling";
                                }return !0;
                            }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];break;
                                    }
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            }return t -= e, t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                }, PSEUDO: function PSEUDO(a, b) {
                    var c,
                        e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d,
                            f = e(a, b),
                            g = f.length;while (g--) {
                            d = I(a, f[g]), a[d] = !(c[d] = f[g]);
                        }
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                } }, pseudos: { not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
                        var f,
                            g = d(a, null, e, []),
                            h = a.length;while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f));
                        }
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0;
                    };
                }), contains: ia(function (a) {
                    return a = a.replace(_, aa), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }), lang: ia(function (a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
                        var c;do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
                    };
                }), target: function target(b) {
                    var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
                }, root: function root(a) {
                    return a === o;
                }, focus: function focus(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
                }, selected: function selected(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                }, empty: function empty(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) return !1;
                    }return !0;
                }, parent: function parent(a) {
                    return !d.pseudos.empty(a);
                }, header: function header(a) {
                    return X.test(a.nodeName);
                }, input: function input(a) {
                    return W.test(a.nodeName);
                }, button: function button(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
                }, text: function text(a) {
                    var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                }, first: pa(function () {
                    return [0];
                }), last: pa(function (a, b) {
                    return [b - 1];
                }), eq: pa(function (a, b, c) {
                    return [0 > c ? c + b : c];
                }), even: pa(function (a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), odd: pa(function (a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), lt: pa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d);
                    }return a;
                }), gt: pa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d);
                    }return a;
                }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
            d.pseudos[b] = ma(b);
        }for (b in { submit: !0, reset: !0 }) {
            d.pseudos[b] = na(b);
        }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
            var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
                    !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                }if (!c) break;
            }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };function sa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value;
            }return d;
        }function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;return b.first ? function (b, c, e) {
                while (b = b[d]) {
                    if (1 === b.nodeType || g) return a(b, c, e);
                }
            } : function (b, c, i) {
                var j,
                    k,
                    l,
                    m = [w, h];if (i) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                    }
                } else while (b = b[d]) {
                    if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
                        if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
                    }
                }
            };
        }function ua(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;while (e--) {
                    if (!a[e](b, c, d)) return !1;
                }return !0;
            } : a[0];
        }function va(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                ga(a, b[d], c);
            }return c;
        }function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            }return g;
        }function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
                var j,
                    k,
                    l,
                    m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                }if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;while (k--) {
                                (l = r[k]) && j.push(q[k] = l);
                            }e(null, r = [], j, i);
                        }k = r.length;while (k--) {
                            (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                        }
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
            });
        }function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
                return a === b;
            }, h, !0), l = ta(function (a) {
                return I(b, a) > -1;
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
            }]; f > i; i++) {
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) break;
                        }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, e > i && ya(a.slice(i, e)), f > e && ya(a = a.slice(e)), f > e && sa(a));
                    }m.push(c);
                }
            }return ua(m);
        }function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function f(_f, g, h, i, k) {
                var l,
                    o,
                    q,
                    r = 0,
                    s = "0",
                    t = _f && [],
                    u = [],
                    v = j,
                    x = _f || e && d.find.TAG("*", k),
                    y = w += null == v ? 1 : Math.random() || .1,
                    z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
                            if (q(l, g || n, h)) {
                                i.push(l);break;
                            }
                        }k && (w = y);
                    }c && ((l = !q && l) && r--, _f && t.push(l));
                }if (r += s, c && s !== r) {
                    o = 0;while (q = b[o++]) {
                        q(t, u, g, h);
                    }if (_f) {
                        if (r > 0) while (s--) {
                            t[s] || u[s] || (u[s] = E.call(i));
                        }u = wa(u);
                    }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
                }return k && (w = y, j = v), t;
            };return c ? ia(f) : f;
        }return h = ga.compile = function (a, b) {
            var c,
                d = [],
                e = [],
                f = A[a + " "];if (!f) {
                b || (b = g(a)), c = b.length;while (c--) {
                    f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                }f = A(a, za(e, d)), f.selector = a;
            }return f;
        }, i = ga.select = function (a, b, e, f) {
            var i,
                j,
                k,
                l,
                m,
                n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }i = V.needsContext.test(a) ? 0 : j.length;while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && sa(j), !a) return G.apply(e, f), e;break;
                    }
                }
            }return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function (a) {
            return null == a.getAttribute("disabled");
        }) || ka(J, function (a, b, c) {
            var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
        var d = [],
            e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
            if (1 === a.nodeType) {
                if (e && r(a).is(c)) break;d.push(a);
            }
        }return d;
    },
        z = function z(a, b) {
        for (var c = []; a; a = a.nextSibling) {
            1 === a.nodeType && a !== b && c.push(a);
        }return c;
    },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
        if (r.isFunction(b)) return r.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c;
        });if (b.nodeType) return r.grep(a, function (a) {
            return a === b !== c;
        });if ("string" == typeof b) {
            if (C.test(b)) return r.filter(b, a, c);b = r.filter(b, a);
        }return r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType;
        });
    }r.filter = function (a, b, c) {
        var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
            return 1 === a.nodeType;
        }));
    }, r.fn.extend({ find: function find(a) {
            var b,
                c,
                d = this.length,
                e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
                for (b = 0; d > b; b++) {
                    if (r.contains(e[b], this)) return !0;
                }
            }));for (c = this.pushStack([]), b = 0; d > b; b++) {
                r.find(a, e[b], c);
            }return d > 1 ? r.uniqueSort(c) : c;
        }, filter: function filter(a) {
            return this.pushStack(D(this, a || [], !1));
        }, not: function not(a) {
            return this.pushStack(D(this, a || [], !0));
        }, is: function is(a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
        } });var E,
        F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function (a, b, c) {
        var e, f;if (!a) return this;if (c = c || E, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
                if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) {
                    r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                }return this;
            }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
        }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
    };G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
        I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
            var b = r(a, this),
                c = b.length;return this.filter(function () {
                for (var a = 0; c > a; a++) {
                    if (r.contains(this, b[a])) return !0;
                }
            });
        }, closest: function closest(a, b) {
            var c,
                d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);if (!A.test(a)) for (; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                        f.push(c);break;
                    }
                }
            }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
        }, index: function index(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
        }, addBack: function addBack(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        } });function J(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) {}return a;
    }r.each({ parent: function parent(a) {
            var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
        }, parents: function parents(a) {
            return y(a, "parentNode");
        }, parentsUntil: function parentsUntil(a, b, c) {
            return y(a, "parentNode", c);
        }, next: function next(a) {
            return J(a, "nextSibling");
        }, prev: function prev(a) {
            return J(a, "previousSibling");
        }, nextAll: function nextAll(a) {
            return y(a, "nextSibling");
        }, prevAll: function prevAll(a) {
            return y(a, "previousSibling");
        }, nextUntil: function nextUntil(a, b, c) {
            return y(a, "nextSibling", c);
        }, prevUntil: function prevUntil(a, b, c) {
            return y(a, "previousSibling", c);
        }, siblings: function siblings(a) {
            return z((a.parentNode || {}).firstChild, a);
        }, children: function children(a) {
            return z(a.firstChild);
        }, contents: function contents(a) {
            return a.contentDocument || r.merge([], a.childNodes);
        } }, function (a, b) {
        r.fn[a] = function (c, d) {
            var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
        };
    });var K = /\S+/g;function L(a) {
        var b = {};return r.each(a.match(K) || [], function (a, c) {
            b[c] = !0;
        }), b;
    }r.Callbacks = function (a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = -1,
            i = function i() {
            for (e = a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();while (++h < f.length) {
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
                }
            }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
        },
            j = { add: function add() {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    r.each(b, function (b, c) {
                        r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
                    });
                }(arguments), c && !b && i()), this;
            }, remove: function remove() {
                return r.each(arguments, function (a, b) {
                    var c;while ((c = r.inArray(b, f, c)) > -1) {
                        f.splice(c, 1), h >= c && h--;
                    }
                }), this;
            }, has: function has(a) {
                return a ? r.inArray(a, f) > -1 : f.length > 0;
            }, empty: function empty() {
                return f && (f = []), this;
            }, disable: function disable() {
                return e = g = [], f = c = "", this;
            }, disabled: function disabled() {
                return !f;
            }, lock: function lock() {
                return e = g = [], c || b || (f = c = ""), this;
            }, locked: function locked() {
                return !!e;
            }, fireWith: function fireWith(a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
            }, fire: function fire() {
                return j.fireWith(this, arguments), this;
            }, fired: function fired() {
                return !!d;
            } };return j;
    };function M(a) {
        return a;
    }function N(a) {
        throw a;
    }function O(a, b, c) {
        var d;try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
        } catch (a) {
            c.call(void 0, a);
        }
    }r.extend({ Deferred: function Deferred(b) {
            var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
                d = "pending",
                e = { state: function state() {
                    return d;
                }, always: function always() {
                    return f.done(arguments).fail(arguments), this;
                }, "catch": function _catch(a) {
                    return e.then(null, a);
                }, pipe: function pipe() {
                    var a = arguments;return r.Deferred(function (b) {
                        r.each(c, function (c, d) {
                            var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
                            });
                        }), a = null;
                    }).promise();
                }, then: function then(b, d, e) {
                    var f = 0;function g(b, c, d, e) {
                        return function () {
                            var h = this,
                                i = arguments,
                                j = function j() {
                                var a, j;if (!(f > b)) {
                                    if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                                }
                            },
                                k = e ? j : function () {
                                try {
                                    j();
                                } catch (a) {
                                    r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
                                }
                            };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
                        };
                    }return r.Deferred(function (a) {
                        c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
                    }).promise();
                }, promise: function promise(a) {
                    return null != a ? r.extend(a, e) : e;
                } },
                f = {};return r.each(c, function (a, b) {
                var g = b[2],
                    h = b[5];e[b[1]] = g.add, h && g.add(function () {
                    d = h;
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
                }, f[b[0] + "With"] = g.fireWith;
            }), e.promise(f), b && b.call(f, f), f;
        }, when: function when(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function h(a) {
                return function (c) {
                    d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
                };
            };if (1 >= b && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
                O(e[c], h(c), g.reject);
            }return g.promise();
        } });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    };var Q = r.Deferred();r.fn.ready = function (a) {
        return Q.then(a), this;
    }, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
            a ? r.readyWait++ : r.ready(!0);
        }, ready: function ready(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
        } }), r.ready.then = Q.then;function R() {
        d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
    }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;if ("object" === r.type(c)) {
            e = !0;for (h in c) {
                S(a, b, h, c[h], !0, f, g);
            }
        } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
            return j.call(r(a), c);
        })), b)) for (; i > h; h++) {
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
        T = function T(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };function U() {
        this.expando = r.expando + U.uid++;
    }U.uid = 1, U.prototype = { cache: function cache(a) {
            var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
        }, set: function set(a, b, c) {
            var d,
                e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
                e[r.camelCase(d)] = b[d];
            }return e;
        }, get: function get(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
        }, access: function access(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
        }, remove: function remove(a, b) {
            var c,
                d = a[this.expando];if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) {
                        delete d[b[c]];
                    }
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        }, hasData: function hasData(a) {
            var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
        } };var V = new U(),
        W = new U(),
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;function Z(a, b, c) {
        var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : X.test(c) ? JSON.parse(c) : c;
            } catch (e) {}W.set(a, b, c);
        } else c = void 0;return c;
    }r.extend({ hasData: function hasData(a) {
            return W.hasData(a) || V.hasData(a);
        }, data: function data(a, b, c) {
            return W.access(a, b, c);
        }, removeData: function removeData(a, b) {
            W.remove(a, b);
        }, _data: function _data(a, b, c) {
            return V.access(a, b, c);
        }, _removeData: function _removeData(a, b) {
            V.remove(a, b);
        } }), r.fn.extend({ data: function data(a, b) {
            var c,
                d,
                e,
                f = this[0],
                g = f && f.attributes;if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), Z(f, d, e[d])));
                    }V.set(f, "hasDataAttrs", !0);
                }return e;
            }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
                W.set(this, a);
            }) : S(this, function (b) {
                var c;if (f && void 0 === b) {
                    if (c = W.get(f, a), void 0 !== c) return c;if (c = Z(f, a), void 0 !== c) return c;
                } else this.each(function () {
                    W.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        }, removeData: function removeData(a) {
            return this.each(function () {
                W.remove(this, a);
            });
        } }), r.extend({ queue: function queue(a, b, c) {
            var d;return a ? (b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []) : void 0;
        }, dequeue: function dequeue(a, b) {
            b = b || "fx";var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function g() {
                r.dequeue(a, b);
            };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        }, _queueHooks: function _queueHooks(a, b) {
            var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
                    V.remove(a, [b + "queue", c]);
                }) });
        } }), r.fn.extend({ queue: function queue(a, b) {
            var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
            });
        }, dequeue: function dequeue(a) {
            return this.each(function () {
                r.dequeue(this, a);
            });
        }, clearQueue: function clearQueue(a) {
            return this.queue(a || "fx", []);
        }, promise: function promise(a, b) {
            var c,
                d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function h() {
                --d || e.resolveWith(f, [f]);
            };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
                c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            }return h(), e.promise(b);
        } });var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _ = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        aa = ["Top", "Right", "Bottom", "Left"],
        ba = function ba(a, b) {
        return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
    },
        ca = function ca(a, b, c, d) {
        var e,
            f,
            g = {};for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f];
        }e = c.apply(a, d || []);for (f in b) {
            a.style[f] = g[f];
        }return e;
    };function da(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d ? function () {
            return d.cur();
        } : function () {
            return r.css(a, b, "");
        },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && _.exec(r.css(a, b));if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;do {
                f = f || ".5", k /= f, r.style(a, b, k + j);
            } while (f !== (f = h() / i) && 1 !== f && --g);
        }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
    }var ea = {};function fa(a) {
        var b,
            c = a.ownerDocument,
            d = a.nodeName,
            e = ea[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ea[d] = e, e);
    }function ga(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++) {
            d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ba(d) && (e[f] = fa(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
        }for (f = 0; g > f; f++) {
            null != e[f] && (a[f].style.display = e[f]);
        }return a;
    }r.fn.extend({ show: function show() {
            return ga(this, !0);
        }, hide: function hide() {
            return ga(this);
        }, toggle: function toggle(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                ba(this) ? r(this).show() : r(this).hide();
            });
        } });var ha = /^(?:checkbox|radio)$/i,
        ia = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ja = /^$|\/(?:java|ecma)script/i,
        ka = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ka.optgroup = ka.option, ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead, ka.th = ka.td;function la(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
    }function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
            V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
        }
    }var na = /<|&#?\w+;/;function oa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; o > n; n++) {
            if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (na.test(f)) {
                g = g || l.appendChild(b.createElement("div")), h = (ia.exec(f) || ["", ""])[1].toLowerCase(), i = ka[h] || ka._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
                    g = g.lastChild;
                }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
            } else m.push(b.createTextNode(f));
        }l.textContent = "", n = 0;while (f = m[n++]) {
            if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = la(l.appendChild(f), "script"), j && ma(g), c) {
                k = 0;while (f = g[k++]) {
                    ja.test(f.type || "") && c.push(f);
                }
            }
        }return l;
    }!function () {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();var pa = d.documentElement,
        qa = /^key/,
        ra = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        sa = /^([^.]*)(?:\.(.+)|)/;function ta() {
        return !0;
    }function ua() {
        return !1;
    }function va() {
        try {
            return d.activeElement;
        } catch (a) {}
    }function wa(a, b, c, d, e, f) {
        var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
            "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
                wa(a, h, c, d, b[h], f);
            }return a;
        }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ua;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
            return r().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
            r.event.add(this, b, e, d, c);
        });
    }r.event = { global: {}, add: function add(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = V.get(a);if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(pa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(K) || [""], j = b.length;while (j--) {
                    h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
                }
            }
        }, remove: function remove(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;while (j--) {
                    if (h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
                            k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
                    } else for (n in i) {
                        r.event.remove(a, n + b[j], c, d, !0);
                    }
                }r.isEmptyObject(i) && V.remove(a, "handle events");
            }
        }, dispatch: function dispatch(a) {
            var b = r.event.fix(a),
                c,
                d,
                e,
                f,
                g,
                h,
                i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
                i[c] = arguments[c];
            }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
                        b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
                    }
                }return k.postDispatch && k.postDispatch.call(this, b), b.result;
            }
        }, handlers: function handlers(a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
                if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                    for (d = [], c = 0; h > c; c++) {
                        f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? r(e, this).index(i) > -1 : r.find(e, this, null, [i]).length), d[e] && d.push(f);
                    }d.length && g.push({ elem: i, handlers: d });
                }
            }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
        }, addProp: function addProp(a, b) {
            Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
                    return this.originalEvent ? b(this.originalEvent) : void 0;
                } : function () {
                    return this.originalEvent ? this.originalEvent[a] : void 0;
                }, set: function set(b) {
                    Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
                } });
        }, fix: function fix(a) {
            return a[r.expando] ? a : new r.Event(a);
        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                    return this !== va() && this.focus ? (this.focus(), !1) : void 0;
                }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                    return this === va() && this.blur ? (this.blur(), !1) : void 0;
                }, delegateType: "focusout" }, click: { trigger: function trigger() {
                    return "checkbox" === this.type && this.click && r.nodeName(this, "input") ? (this.click(), !1) : void 0;
                }, _default: function _default(a) {
                    return r.nodeName(a.target, "a");
                } }, beforeunload: { postDispatch: function postDispatch(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                } } } }, r.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, r.Event = function (a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ta : ua, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
    }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: ua, isPropagationStopped: ua, isImmediatePropagationStopped: ua, isSimulated: !1, preventDefault: function preventDefault() {
            var a = this.originalEvent;this.isDefaultPrevented = ta, a && !this.isSimulated && a.preventDefault();
        }, stopPropagation: function stopPropagation() {
            var a = this.originalEvent;this.isPropagationStopped = ta, a && !this.isSimulated && a.stopPropagation();
        }, stopImmediatePropagation: function stopImmediatePropagation() {
            var a = this.originalEvent;this.isImmediatePropagationStopped = ta, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
        } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
            var b = a.button;return null == a.which && qa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ra.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
        } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
        r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
                var c,
                    d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            } };
    }), r.fn.extend({ on: function on(a, b, c, d) {
            return wa(this, a, b, c, d);
        }, one: function one(a, b, c, d) {
            return wa(this, a, b, c, d, 1);
        }, off: function off(a, b, c) {
            var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
                for (e in a) {
                    this.off(e, b, a[e]);
                }return this;
            }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ua), this.each(function () {
                r.event.remove(this, a, c, b);
            });
        } });var xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ya = /<script|<style|<link/i,
        za = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Aa = /^true\/(.*)/,
        Ba = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
    }function Da(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }function Ea(a) {
        var b = Aa.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }function Fa(a, b) {
        var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};for (e in j) {
                    for (c = 0, d = j[e].length; d > c; c++) {
                        r.event.add(b, e, j[e][c]);
                    }
                }
            }W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
        }
    }function Ga(a, b) {
        var c = b.nodeName.toLowerCase();"input" === c && ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }function Ha(a, b, c, d) {
        b = g.apply([], b);var e,
            f,
            h,
            i,
            j,
            k,
            l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && za.test(q)) return a.each(function (e) {
            var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
        });if (m && (e = oa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(la(e, "script"), Da), i = h.length; m > l; l++) {
                j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, la(j, "script"))), c.call(a[l], j, l);
            }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ea), l = 0; i > l; l++) {
                j = h[l], ja.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ba, ""), k));
            }
        }return a;
    }function Ia(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
            c || 1 !== d.nodeType || r.cleanData(la(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && ma(la(d, "script")), d.parentNode.removeChild(d));
        }return a;
    }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
            return a.replace(xa, "<$1></$2>");
        }, clone: function clone(a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = la(h), f = la(a), d = 0, e = f.length; e > d; d++) {
                Ga(f[d], g[d]);
            }if (b) if (c) for (f = f || la(a), g = g || la(h), d = 0, e = f.length; e > d; d++) {
                Fa(f[d], g[d]);
            } else Fa(a, h);return g = la(h, "script"), g.length > 0 && ma(g, !i && la(a, "script")), h;
        }, cleanData: function cleanData(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events) for (d in b.events) {
                            e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        }c[V.expando] = void 0;
                    }c[W.expando] && (c[W.expando] = void 0);
                }
            }
        } }), r.fn.extend({ detach: function detach(a) {
            return Ia(this, a, !0);
        }, remove: function remove(a) {
            return Ia(this, a);
        }, text: function text(a) {
            return S(this, function (a) {
                return void 0 === a ? r.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        }, append: function append() {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);b.appendChild(a);
                }
            });
        }, prepend: function prepend() {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);b.insertBefore(a, b.firstChild);
                }
            });
        }, before: function before() {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        }, after: function after() {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        }, empty: function empty() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && (r.cleanData(la(a, !1)), a.textContent = "");
            }return this;
        }, clone: function clone(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return r.clone(this, a, b);
            });
        }, html: function html(a) {
            return S(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !ya.test(a) && !ka[(ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (r.cleanData(la(b, !1)), b.innerHTML = a);
                        }b = 0;
                    } catch (e) {}
                }b && this.empty().append(a);
            }, null, a, arguments.length);
        }, replaceWith: function replaceWith() {
            var a = [];return Ha(this, arguments, function (b) {
                var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(la(this)), c && c.replaceChild(b, this));
            }, a);
        } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
        r.fn[a] = function (a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; f >= g; g++) {
                c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            }return this.pushStack(d);
        };
    });var Ja = /^margin/,
        Ka = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        La = function La(b) {
        var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
    };!function () {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", pa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, pa.removeChild(h), i = null;
            }
        }var c,
            e,
            f,
            g,
            h = d.createElement("div"),
            i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
                return b(), c;
            }, boxSizingReliable: function boxSizingReliable() {
                return b(), e;
            }, pixelMarginRight: function pixelMarginRight() {
                return b(), f;
            }, reliableMarginLeft: function reliableMarginLeft() {
                return b(), g;
            } }));
    }();function Ma(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;return c = c || La(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ka.test(g) && Ja.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }function Na(a, b) {
        return { get: function get() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            } };
    }var Oa = /^(none|table(?!-c[ea]).+)/,
        Pa = { position: "absolute", visibility: "hidden", display: "block" },
        Qa = { letterSpacing: "0", fontWeight: "400" },
        Ra = ["Webkit", "Moz", "ms"],
        Sa = d.createElement("div").style;function Ta(a) {
        if (a in Sa) return a;var b = a[0].toUpperCase() + a.slice(1),
            c = Ra.length;while (c--) {
            if (a = Ra[c] + b, a in Sa) return a;
        }
    }function Ua(a, b, c) {
        var d = _.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }function Va(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += r.css(a, c + aa[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + aa[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + aa[f] + "Width", !0, e))) : (g += r.css(a, "padding" + aa[f], !0, e), "padding" !== c && (g += r.css(a, "border" + aa[f] + "Width", !0, e)));
        }return g;
    }function Wa(a, b, c) {
        var d,
            e = !0,
            f = La(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f);if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), 0 >= d || null == d) {
            if (d = Ma(a, b, f), (0 > d || null == d) && (d = a.style[b]), Ka.test(d)) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
        }return d + Va(a, b, c || (g ? "border" : "content"), e, f) + "px";
    }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
                    if (b) {
                        var c = Ma(a, "opacity");return "" === c ? "1" : c;
                    }
                } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = r.camelCase(b),
                    i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = _.exec(c)) && e[1] && (c = da(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        }, css: function css(a, b, c, d) {
            var e,
                f,
                g,
                h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Ma(a, b, d)), "normal" === e && b in Qa && (e = Qa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
        } }), r.each(["height", "width"], function (a, b) {
        r.cssHooks[b] = { get: function get(a, c, d) {
                return c ? !Oa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Wa(a, b, d) : ca(a, Pa, function () {
                    return Wa(a, b, d);
                }) : void 0;
            }, set: function set(a, c, d) {
                var e,
                    f = d && La(a),
                    g = d && Va(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = _.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ua(a, c, g);
            } };
    }), r.cssHooks.marginLeft = Na(o.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(Ma(a, "marginLeft")) || a.getBoundingClientRect().left - ca(a, { marginLeft: 0 }, function () {
            return a.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
        r.cssHooks[a + b] = { expand: function expand(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + aa[d] + b] = f[d] || f[d - 2] || f[0];
                }return e;
            } }, Ja.test(a) || (r.cssHooks[a + b].set = Ua);
    }), r.fn.extend({ css: function css(a, b) {
            return S(this, function (a, b, c) {
                var d,
                    e,
                    f = {},
                    g = 0;if (r.isArray(b)) {
                    for (d = La(a), e = b.length; e > g; g++) {
                        f[b[g]] = r.css(a, b[g], !1, d);
                    }return f;
                }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
            }, a, b, arguments.length > 1);
        } });function Xa(a, b, c, d, e) {
        return new Xa.prototype.init(a, b, c, d, e);
    }r.Tween = Xa, Xa.prototype = { constructor: Xa, init: function init(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
        }, cur: function cur() {
            var a = Xa.propHooks[this.prop];return a && a.get ? a.get(this) : Xa.propHooks._default.get(this);
        }, run: function run(a) {
            var b,
                c = Xa.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Xa.propHooks._default.set(this), this;
        } }, Xa.prototype.init.prototype = Xa.prototype, Xa.propHooks = { _default: { get: function get(a) {
                var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
            }, set: function set(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
            } } }, Xa.propHooks.scrollTop = Xa.propHooks.scrollLeft = { set: function set(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        } }, r.easing = { linear: function linear(a) {
            return a;
        }, swing: function swing(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }, _default: "swing" }, r.fx = Xa.prototype.init, r.fx.step = {};var Ya,
        Za,
        $a = /^(?:toggle|show|hide)$/,
        _a = /queueHooks$/;function ab() {
        Za && (a.requestAnimationFrame(ab), r.fx.tick());
    }function bb() {
        return a.setTimeout(function () {
            Ya = void 0;
        }), Ya = r.now();
    }function cb(a, b) {
        var c,
            d = 0,
            e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
            c = aa[d], e["margin" + c] = e["padding" + c] = a;
        }return b && (e.opacity = e.width = a), e;
    }function db(a, b, c) {
        for (var d, e = (gb.tweeners[b] || []).concat(gb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) return d;
        }
    }function eb(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ba(a),
            q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
            g.unqueued || h();
        }), g.unqueued++, m.always(function () {
            m.always(function () {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
            });
        }));for (d in b) {
            if (e = b[d], $a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
                }n[d] = q && q[d] || r.style(a, d);
            }
        }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ga([a], !0), j = a.style.display || j, k = r.css(a, "display"), ga([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
                o.display = j;
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
            })), i = !1;for (d in n) {
                i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ga([a], !0), m.done(function () {
                    p || ga([a]), V.remove(a, "fxshow");for (d in n) {
                        r.style(a, d, n[d]);
                    }
                })), i = db(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
            }
        }
    }function fb(a, b) {
        var c, d, e, f, g;for (c in a) {
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e);
                }
            } else b[d] = e;
        }
    }function gb(a, b, c) {
        var d,
            e,
            f = 0,
            g = gb.prefilters.length,
            h = r.Deferred().always(function () {
            delete i.elem;
        }),
            i = function i() {
            if (e) return !1;for (var b = Ya || bb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                j.tweens[g].run(f);
            }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
        },
            j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Ya || bb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
            }, stop: function stop(b) {
                var c = 0,
                    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
                    j.tweens[c].run(1);
                }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
            } }),
            k = j.props;for (fb(k, j.opts.specialEasing); g > f; f++) {
            if (d = gb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        }return r.map(k, db, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }r.Animation = r.extend(gb, { tweeners: { "*": [function (a, b) {
                var c = this.createTween(a, b);return da(c.elem, a, _.exec(b), c), c;
            }] }, tweener: function tweener(a, b) {
            r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; e > d; d++) {
                c = a[d], gb.tweeners[c] = gb.tweeners[c] || [], gb.tweeners[c].unshift(b);
            }
        }, prefilters: [eb], prefilter: function prefilter(a, b) {
            b ? gb.prefilters.unshift(a) : gb.prefilters.push(a);
        } }), r.speed = function (a, b, c) {
        var e = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : e.duration = "number" == typeof e.duration ? e.duration : e.duration in r.fx.speeds ? r.fx.speeds[e.duration] : r.fx.speeds._default, null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
            r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
        }, e;
    }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
            return this.filter(ba).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
        }, animate: function animate(a, b, c, d) {
            var e = r.isEmptyObject(a),
                f = r.speed(b, c, d),
                g = function g() {
                var b = gb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
            };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        }, stop: function stop(a, b, c) {
            var d = function d(a) {
                var b = a.stop;delete a.stop, b(c);
            };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = r.timers,
                    g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
                    g[e] && g[e].stop && _a.test(e) && d(g[e]);
                }for (e = f.length; e--;) {
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                }!b && c || r.dequeue(this, a);
            });
        }, finish: function finish(a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b,
                    c = V.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = r.timers,
                    g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                }for (b = 0; g > b; b++) {
                    d[b] && d[b].finish && d[b].finish.call(this);
                }delete c.finish;
            });
        } }), r.each(["toggle", "show", "hide"], function (a, b) {
        var c = r.fn[b];r.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(cb(b, !0), a, d, e);
        };
    }), r.each({ slideDown: cb("show"), slideUp: cb("hide"), slideToggle: cb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
        r.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), r.timers = [], r.fx.tick = function () {
        var a,
            b = 0,
            c = r.timers;for (Ya = r.now(); b < c.length; b++) {
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        }c.length || r.fx.stop(), Ya = void 0;
    }, r.fx.timer = function (a) {
        r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
    }, r.fx.interval = 13, r.fx.start = function () {
        Za || (Za = a.requestAnimationFrame ? a.requestAnimationFrame(ab) : a.setInterval(r.fx.tick, r.fx.interval));
    }, r.fx.stop = function () {
        a.cancelAnimationFrame ? a.cancelAnimationFrame(Za) : a.clearInterval(Za), Za = null;
    }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
        return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);d.stop = function () {
                a.clearTimeout(e);
            };
        });
    }, function () {
        var a = d.createElement("input"),
            b = d.createElement("select"),
            c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
    }();var hb,
        ib = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
            return S(this, r.attr, a, b, arguments.length > 1);
        }, removeAttr: function removeAttr(a) {
            return this.each(function () {
                r.removeAttr(this, a);
            });
        } }), r.extend({ attr: function attr(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? hb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
        }, attrHooks: { type: { set: function set(a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                } } }, removeAttr: function removeAttr(a, b) {
            var c,
                d = 0,
                e = b && b.match(K);if (e && 1 === a.nodeType) while (c = e[d++]) {
                a.removeAttribute(c);
            }
        } }), hb = { set: function set(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
        } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ib[b] || r.find.attr;ib[b] = function (a, b, d) {
            var e,
                f,
                g = b.toLowerCase();return d || (f = ib[g], ib[g] = e, e = null != c(a, b, d) ? g : null, ib[g] = f), e;
        };
    });var jb = /^(?:input|select|textarea|button)$/i,
        kb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
            return S(this, r.prop, a, b, arguments.length > 1);
        }, removeProp: function removeProp(a) {
            return this.each(function () {
                delete this[r.propFix[a] || a];
            });
        } }), r.extend({ prop: function prop(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        }, propHooks: { tabIndex: { get: function get(a) {
                    var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : jb.test(a.nodeName) || kb.test(a.nodeName) && a.href ? 0 : -1;
                } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
            var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
        }, set: function set(a) {
            var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        r.propFix[this.toLowerCase()] = this;
    });var lb = /[\t\r\n\f]/g;function mb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }r.fn.extend({ addClass: function addClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;if (r.isFunction(a)) return this.each(function (b) {
                r(this).addClass(a.call(this, b, mb(this)));
            });if ("string" == typeof a && a) {
                b = a.match(K) || [];while (c = this[i++]) {
                    if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                        g = 0;while (f = b[g++]) {
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        }h = r.trim(d), e !== h && c.setAttribute("class", h);
                    }
                }
            }return this;
        }, removeClass: function removeClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;if (r.isFunction(a)) return this.each(function (b) {
                r(this).removeClass(a.call(this, b, mb(this)));
            });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
                b = a.match(K) || [];while (c = this[i++]) {
                    if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                        g = 0;while (f = b[g++]) {
                            while (d.indexOf(" " + f + " ") > -1) {
                                d = d.replace(" " + f + " ", " ");
                            }
                        }h = r.trim(d), e !== h && c.setAttribute("class", h);
                    }
                }
            }return this;
        }, toggleClass: function toggleClass(a, b) {
            var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
                r(this).toggleClass(a.call(this, c, mb(this), b), b);
            }) : this.each(function () {
                var b, d, e, f;if ("string" === c) {
                    d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    }
                } else void 0 !== a && "boolean" !== c || (b = mb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
            });
        }, hasClass: function hasClass(a) {
            var b,
                c,
                d = 0;b = " " + a + " ";while (c = this[d++]) {
                if (1 === c.nodeType && (" " + mb(c) + " ").replace(lb, " ").indexOf(b) > -1) return !0;
            }return !1;
        } });var nb = /\r/g,
        ob = /[\x20\t\r\n\f]+/g;r.fn.extend({ val: function val(a) {
            var b,
                c,
                d,
                e = this[0];{
                if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
                    var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
                        return null == a ? "" : a + "";
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c);
            }
        } }), r.extend({ valHooks: { option: { get: function get(a) {
                    var b = r.find.attr(a, "value");return null != b ? b : r.trim(r.text(a)).replace(ob, " ");
                } }, select: { get: function get(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), f) return b;g.push(b);
                        }
                    }return g;
                }, set: function set(a, b) {
                    var c,
                        d,
                        e = a.options,
                        f = r.makeArray(b),
                        g = e.length;while (g--) {
                        d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    }return c || (a.selectedIndex = -1), f;
                } } } }), r.each(["radio", "checkbox"], function () {
        r.valHooks[this] = { set: function set(a, b) {
                return r.isArray(b) ? a.checked = r.inArray(r(a).val(), b) > -1 : void 0;
            } }, o.checkOn || (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
            var g,
                h,
                i,
                j,
                k,
                m,
                n,
                o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
                        o.push(h), i = h;
                    }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
                }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
                    b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
            }
        }, simulate: function simulate(a, b, c) {
            var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
        } }), r.fn.extend({ trigger: function trigger(a, b) {
            return this.each(function () {
                r.event.trigger(a, b, this);
            });
        }, triggerHandler: function triggerHandler(a, b) {
            var c = this[0];return c ? r.event.trigger(a, b, c, !0) : void 0;
        } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        r.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), r.fn.extend({ hover: function hover(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function c(a) {
            r.event.simulate(b, a.target, r.event.fix(a));
        };r.event.special[b] = { setup: function setup() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
            }, teardown: function teardown() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
            } };
    });var qb = a.location,
        rb = r.now(),
        sb = /\?/;r.parseXML = function (b) {
        var c;if (!b || "string" != typeof b) return null;try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
    };var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
        var e;if (r.isArray(b)) r.each(b, function (b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
        });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
            xb(a + "[" + e + "]", b[e], c, d);
        }
    }r.param = function (a, b) {
        var c,
            d = [],
            e = function e(a, b) {
            var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
        };if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
            e(this.name, this.value);
        });else for (c in a) {
            xb(c, a[c], b, e);
        }return d.join("&");
    }, r.fn.extend({ serialize: function serialize() {
            return r.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ha.test(a));
            }).map(function (a, b) {
                var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
                    return { name: b.name, value: a.replace(ub, "\r\n") };
                }) : { name: b.name, value: c.replace(ub, "\r\n") };
            }).get();
        } });var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");var d,
                e = 0,
                f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) {
                "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
            }
        };
    }function Kb(a, b, c, d) {
        var e = {},
            f = a === Gb;function g(h) {
            var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }return g(b.dataTypes[0]) || !e["*"] && g("*");
    }function Lb(a, b) {
        var c,
            d,
            e = r.ajaxSettings.flatOptions || {};for (c in b) {
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        }return d && r.extend(!0, a, d), a;
    }function Mb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;while ("*" === i[0]) {
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        }if (d) for (e in h) {
            if (h[e] && h[e].test(d)) {
                i.unshift(e);break;
            }
        }if (i[0] in c) f = i[0];else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;break;
                }g || (g = e);
            }f = f || g;
        }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }function Nb(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
            j[g.toLowerCase()] = a.converters[g];
        }f = k.shift();while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
                    }
                }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
                    b = g(b);
                } catch (l) {
                    return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                }
            }
        }return { state: "success", data: b };
    }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
        }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
            "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
                    var b;if (k) {
                        if (!h) {
                            h = {};while (b = Bb.exec(g)) {
                                h[b[1].toLowerCase()] = b[2];
                            }
                        }b = h[a.toLowerCase()];
                    }return null == b ? null : b;
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                    return k ? g : null;
                }, setRequestHeader: function setRequestHeader(a, b) {
                    return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
                }, overrideMimeType: function overrideMimeType(a) {
                    return null == k && (o.mimeType = a), this;
                }, statusCode: function statusCode(a) {
                    var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
                        u[b] = [u[b], a[b]];
                    }return this;
                }, abort: function abort(a) {
                    var b = a || x;return e && e.abort(b), A(0, b), this;
                } };if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
                } catch (z) {
                    o.crossDomain = !0;
                }
            }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, ""), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
                y.setRequestHeader(m, o.headers[m]);
            }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                    y.abort("timeout");
                }, o.timeout));try {
                    k = !1, e.send(v, A);
                } catch (z) {
                    if (k) throw z;A(-1, z);
                }
            } else A(-1, "No Transport");function A(b, c, d, h) {
                var j,
                    m,
                    n,
                    v,
                    w,
                    x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", 0 > b && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
            }return y;
        }, getJSON: function getJSON(a, b, c) {
            return r.get(a, b, c, "json");
        }, getScript: function getScript(a, b) {
            return r.get(a, void 0, b, "script");
        } }), r.each(["get", "post"], function (a, b) {
        r[b] = function (a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
        };
    }), r._evalUrl = function (a) {
        return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
    }, r.fn.extend({ wrapAll: function wrapAll(a) {
            var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;while (a.firstElementChild) {
                    a = a.firstElementChild;
                }return a;
            }).append(this)), this;
        }, wrapInner: function wrapInner(a) {
            return r.isFunction(a) ? this.each(function (b) {
                r(this).wrapInner(a.call(this, b));
            }) : this.each(function () {
                var b = r(this),
                    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
            });
        }, wrap: function wrap(a) {
            var b = r.isFunction(a);return this.each(function (c) {
                r(this).wrapAll(b ? a.call(this, c) : a);
            });
        }, unwrap: function unwrap(a) {
            return this.parent(a).not("body").each(function () {
                r(this).replaceWith(this.childNodes);
            }), this;
        } }), r.expr.pseudos.hidden = function (a) {
        return !r.expr.pseudos.visible(a);
    }, r.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }, r.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    };var Ob = { 0: 200, 1223: 204 },
        Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
        var _c, d;return o.cors || Pb && !b.crossDomain ? { send: function send(e, f) {
                var g,
                    h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
                    h[g] = b.xhrFields[g];
                }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
                    h.setRequestHeader(g, e[g]);
                }_c = function c(a) {
                    return function () {
                        _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
                    };
                }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        _c && d();
                    });
                }, _c = _c("abort");try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (_c) throw i;
                }
            }, abort: function abort() {
                _c && _c();
            } } : void 0;
    }), r.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1);
    }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
                return r.globalEval(a), a;
            } } }), r.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), r.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, _c2;return { send: function send(e, f) {
                    b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
                        b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
                    }), d.head.appendChild(b[0]);
                }, abort: function abort() {
                    _c2 && _c2();
                } };
        }
    });var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
        } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
            f,
            g,
            h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
    }), o.createHTMLDocument = function () {
        var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
    }(), r.parseHTML = function (a, b, c) {
        if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = oa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
    }, r.fn.load = function (a, b, c) {
        var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");return h > -1 && (d = r.trim(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a]);
            });
        }), this;
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        r.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), r.expr.pseudos.animated = function (a) {
        return r.grep(r.timers, function (b) {
            return a === b.elem;
        }).length;
    };function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }r.offset = { setOffset: function setOffset(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = r.css(a, "position"),
                l = r(a),
                m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        } }, r.fn.extend({ offset: function offset(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                r.offset.setOffset(this, a, b);
            });var b,
                c,
                d,
                e,
                f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
        }, position: function position() {
            if (this[0]) {
                var a,
                    b,
                    c = this[0],
                    d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
                    a = a.offsetParent;
                }return a || pa;
            });
        } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
        var c = "pageYOffset" === b;r.fn[a] = function (d) {
            return S(this, function (a, d, e) {
                var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a, d, arguments.length);
        };
    }), r.each(["top", "left"], function (a, b) {
        r.cssHooks[b] = Na(o.pixelPosition, function (a, c) {
            return c ? (c = Ma(a, b), Ka.test(c) ? r(a).position()[b] + "px" : c) : void 0;
        });
    }), r.each({ Height: "height", Width: "width" }, function (a, b) {
        r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
            r.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
                    var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
                }, b, g ? e : void 0, g);
            };
        });
    }), r.fn.extend({ bind: function bind(a, b, c) {
            return this.on(a, null, b, c);
        }, unbind: function unbind(a, b) {
            return this.off(a, null, b);
        }, delegate: function delegate(a, b, c, d) {
            return this.on(b, a, c, d);
        }, undelegate: function undelegate(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return r;
    });var Tb = a.jQuery,
        Ub = a.$;return r.noConflict = function (b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
    }, b || (a.jQuery = a.$ = r), r;
});
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
            this._handlers[c] = a.proxy(this[c], this);
        }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)), a.each(e.Workers, a.proxy(function (b, c) {
            this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)), this.setup(), this.initialize();
    }e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function run() {
            this._width = this.$element.width();
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            a.current = this._items && this._items[this.relative(this._current)];
        } }, { filter: ["items", "settings"], run: function run() {
            this.$stage.children(".cloned").remove();
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };!c && this.$stage.children().css(e), a.css = e;
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];for (a.items = { merge: !1, width: b }; d--;) {
                c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            }this._widths = f;
        } }, { filter: ["items", "settings"], run: function run() {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";for (g /= 2; g--;) {
                b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            }this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
        } }, { filter: ["width", "items", "settings"], run: function run() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) {
                d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            }this._coordinates = f;
        } }, { filter: ["width", "items", "settings"], run: function run() {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };this.$stage.css(c);
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();if (c && a.items.merge) for (; b--;) {
                a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            } else c && (a.css.width = a.items.width, d.css(a.css));
        } }, { filter: ["items"], run: function run() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
        } }, { filter: ["position"], run: function run() {
            this.animate(this.coordinates(this._current));
        } }, { filter: ["width", "position", "items", "settings"], run: function run() {
            var a,
                b,
                c,
                d,
                e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];for (c = 0, d = this._coordinates.length; c < d; c++) {
                a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            }this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"));
        } }], e.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b);
        }this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
    }, e.prototype.setup = function () {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;c ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } });
    }, e.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", { content: b });return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data;
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
            return this[a];
        }, this._invalidated), e = {}; b < c;) {
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        }this._invalidated = {}, !this.is("valid") && this.enter("valid");
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {case e.Width.Inner:case e.Width.Outer:
                return this._width;default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin;}
    }, e.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    }, e.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
    }, e.prototype.registerEventHandlers = function () {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1;
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
    }, e.prototype.onDragStart = function (b) {
        var d = null;3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
        }, this)));
    }, e.prototype.onDragMove = function (a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x));
    }, e.prototype.onDragEnd = function (b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1;
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
    }, e.prototype.closest = function (b, c) {
        var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates();return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1;
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d;
    }, e.prototype.animate = function (b) {
        var c = this.speed() > 0;this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" });
    }, e.prototype.is = function (a) {
        return this._states.current[a] && this._states.current[a] > 0;
    }, e.prototype.current = function (a) {
        if (a === d) return this._current;if (0 === this._items.length) return d;if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", { property: { name: "position", value: a } });b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
        }return this._current;
    }, e.prototype.invalidate = function (b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
            return b;
        });
    }, e.prototype.reset = function (a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
    }, e.prototype.normalize = function (a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a;
    }, e.prototype.relative = function (a) {
        return a -= this._clones.length / 2, this.normalize(a, !0);
    }, e.prototype.maximum = function (a) {
        var b,
            c,
            d,
            e = this.settings,
            f = this._coordinates.length;if (e.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d));) {}f = b + 1;
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2;
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function f(a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
        };return b === d ? a.map(this._clones, function (a, b) {
            return f(b);
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
        });
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed;
    }, e.prototype.coordinates = function (b) {
        var c,
            e = 1,
            f = b - 1;return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b);
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c));
    }, e.prototype.duration = function (a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
    }, e.prototype.to = function (a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update();
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a);
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a);
    }, e.prototype.onTransitionEnd = function (a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;this.leave("animating"), this.trigger("translated");
    }, e.prototype.viewport = function () {
        var d;return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d;
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType;
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
    }, e.prototype.add = function (b, c) {
        var e = this.relative(this._current);c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c });
    }, e.prototype.remove = function (a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a }));
    }, e.prototype.preloadAutoWidthImages = function (b) {
        b.each(a.proxy(function (b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function (a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
        }, this));
    }, e.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));for (var d in this._plugins) {
            this._plugins[d].destroy();
        }this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;switch (b) {case "<":
                return d ? a > c : a < c;case ">":
                return d ? a < c : a > c;case ">=":
                return d ? a <= c : a >= c;case "<=":
                return d ? a >= c : a <= c;}
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
    }, e.prototype.trigger = function (b, c, d, f, g) {
        var h = { item: { count: this._items.length, index: this.current() } },
            i = a.camelCase(a.grep(["on", b, d], function (a) {
            return a;
        }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
        }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
    }, e.prototype.enter = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
        }, this));
    }, e.prototype.leave = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b]--;
        }, this));
    }, e.prototype.register = function (b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;a.event.special[b.name]._default = function (a) {
                    return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                }, a.event.special[b.name].owl = !0;
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d;
        }, this)));
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0;
        }, this));
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b];
        }, this));
    }, e.prototype.pointer = function (a) {
        var c = { x: null, y: null };return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
    }, e.prototype.isNumeric = function (a) {
        return !isNaN(parseFloat(a));
    }, e.prototype.difference = function (a, b) {
        return { x: a.x - b.x, y: a.y - b.y };
    }, a.fn.owlCarousel = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);return this.each(function () {
            var d = a(this),
                f = d.data("owl.carousel");f || (f = new e(this, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                }, f));
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
        });
    }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoRefresh && this.watch();
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
    }, e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
    }, e.prototype.destroy = function () {
        var a, c;b.clearInterval(this._interval);for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (c in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[c] && (this[c] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
                    this.load(b);
                }, this); f++ < e;) {
                    this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
                }
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };e.Defaults = { lazyLoad: !1 }, e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e,
                f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
            }, this)).attr("src", g) : (e = new Image(), e.onload = a.proxy(function () {
                f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
            }, this), e.src = g);
        }, this)), this._loaded.push(d.get(0)));
    }, e.prototype.destroy = function () {
        var a, b;for (a in this.handlers) {
            this._core.$element.off(a, this.handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && this.update();
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update();
            }, this), "loaded.owl.lazy": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function () {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;a.each(d, function (b, c) {
            e.push(a(c).height());
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
    }, e.prototype.destroy = function () {
        var a, b;for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
            }, this), "resize.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop();
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                }
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a);
        }, this));
    };e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function (a, b) {
        var c = function () {
            return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
        }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");if (!g) throw new Error("Missing video URL.");if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else if (d[3].indexOf("vimeo") > -1) c = "vimeo";else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");c = "vzaar";
        }d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
    }, e.prototype.thumbnail = function (b, c) {
        var d,
            e,
            f,
            g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function l(a) {
            e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e);
        };if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;"youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function success(a) {
                f = a[0].thumbnail_large, l(f);
            } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function success(a) {
                f = a.framegrab_url, l(f);
            } });
    }, e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
    }, e.prototype.play = function (b) {
        var c,
            d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"));
    }, e.prototype.isInFullScreen = function () {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;return b && a(b).parent().hasClass("owl-video-frame");
    }, e.prototype.destroy = function () {
        var a, b;this._core.$element.off("click.owl.video");for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                a.namespace && (this.swapping = "translated" == a.type);
            }, this), "translate.owl.carousel": a.proxy(function (a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
            }, this) }, this.core.$element.on(this.handlers);
    };e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function () {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);var b,
                c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
    }, e.prototype.destroy = function () {
        var a, b;for (a in this.handlers) {
            this.core.$element.off(a, this.handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoplay && this.play();
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                a.namespace && this.play(b, c);
            }, this), "stop.owl.autoplay": a.proxy(function (a) {
                a.namespace && this.stop();
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
            }, this), "touchstart.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this), "touchend.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play();
            }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
    };e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype.play = function (a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
    }, e.prototype._getNextTimeout = function (d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed);
        }, this), d || this._core.settings.autoplayTimeout);
    }, e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
    }, e.prototype.stop = function () {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
    }, e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
    }, e.prototype.destroy = function () {
        var a, b;this.stop();for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function e(b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function (b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
            }, this), "added.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
            }, this), "remove.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && this.draw();
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
    };e.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function () {
        var b,
            c = this._core.settings;this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.prev(c.navSpeed);
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.next(c.navSpeed);
        }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();b.preventDefault(), this.to(d, c.dotsSpeed);
        }, this));for (b in this._overrides) {
            this._core[b] = a.proxy(this[b], this);
        }
    }, e.prototype.destroy = function () {
        var a, b, c, d;for (a in this._handlers) {
            this.$element.off(a, this._handlers[a]);
        }for (b in this._controls) {
            this._controls[b].remove();
        }for (d in this.overides) {
            this._core[d] = this._overrides[d];
        }for (c in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[c] && (this[c] = null);
        }
    }, e.prototype.update = function () {
        var a,
            b,
            c,
            d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
                if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break;b = 0, ++c;
            }b += this._core.mergers(this._core.relative(a));
        }
    }, e.prototype.draw = function () {
        var b,
            c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
    }, e.prototype.onTrigger = function (b) {
        var c = this._core.settings;b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) };
    }, e.prototype.current = function () {
        var b = this._core.relative(this._core.current());return a.grep(this._pages, a.proxy(function (a, c) {
            return a.start <= b && a.end >= b;
        }, this)).pop();
    }, e.prototype.getPosition = function (b) {
        var c,
            d,
            e = this._core.settings;return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
    }, e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
    }, e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
    }, e.prototype.to = function (b, c, d) {
        var e;!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function e(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function (c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if (!c) return;this._hashes[c] = b.content;
                }
            }, this), "changed.owl.carousel": a.proxy(function (c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function (a, b) {
                        return a === d ? b : null;
                    }).join();if (!e || b.location.hash.slice(1) === e) return;b.location.hash = e;
                }
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
        }, this));
    };e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function () {
        var c, d;a(b).off("hashchange.owl.navigation");for (c in this._handlers) {
            this._core.$element.off(c, this._handlers[c]);
        }for (d in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[d] && (this[d] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
            if (g[b] !== d) return e = !c || b, !1;
        }), e;
    }function f(a) {
        return e(a, !0);
    }var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        j = { csstransforms: function csstransforms() {
            return !!e("transform");
        }, csstransforms3d: function csstransforms3d() {
            return !!e("perspective");
        }, csstransitions: function csstransitions() {
            return !!e("transition");
        }, cssanimations: function cssanimations() {
            return !!e("animation");
        } };j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : window.jQuery || window.Zepto);
}(function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function t() {},
        u = !!window.jQuery,
        v = a(window),
        w = function w(a, c) {
        b.ev.on(o + a + p, c);
    },
        x = function x(b, c, d, e) {
        var f = document.createElement("div");return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
    },
        y = function y(c, d) {
        b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
        z = function z(c) {
        return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn;
    },
        A = function A() {
        a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
    },
        B = function B() {
        var a = document.createElement("p").style,
            b = ["ms", "O", "Moz", "Webkit"];if (void 0 !== a.transition) return !0;for (; b.length;) {
            if (b.pop() + "Transition" in a) return !0;
        }return !1;
    };t.prototype = { constructor: t, init: function init() {
            var c = navigator.appVersion;b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
        }, open: function open(c) {
            var e;if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;var g,
                    h = c.items;for (e = 0; e < h.length; e++) {
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;break;
                    }
                }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;if (b.isOpen) return void b.updateItemHTML();b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
                b.close();
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close();
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));var i = a.magnificPopup.modules;for (e = 0; e < i.length; e++) {
                var j = i[e];j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b);
            }y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
                27 === a.keyCode && b.close();
            }), v.on("resize" + p, function () {
                b.updateSize();
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);var k = b.wH = v.height(),
                n = {};if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();o && (n.marginRight = o);
            }b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");var r = b.st.mainClass;return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c;
        }, close: function close() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
                b._close();
            }, b.st.removalDelay)) : b._close());
        }, _close: function _close() {
            y(h);var c = r + " " + q + " ";if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = { marginRight: "" };b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
            }d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
        }, updateSize: function updateSize(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;b.wrap.css("height", d), b.wH = d;
            } else b.wH = a || v.height();b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
        }, updateItemHTML: function updateItemHTML() {
            var c = b.items[b.index];b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));var d = c.type;if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0;
            }e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange");
        }, appendContent: function appendContent(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content);
        }, parseEl: function parseEl(c) {
            var d,
                e = b.items[c];if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++) {
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];break;
                    }
                }e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
            }return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c];
        }, addGroup: function addGroup(a, c) {
            var d = function d(_d) {
                _d.mfpEl = this, b._openClick(_d, a, c);
            };c || (c = {});var e = "click.magnificPopup";c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));
        }, _openClick: function _openClick(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;if (g) if (a.isFunction(g)) {
                    if (!g.call(b)) return !0;
                } else if (v.width() < g) return !0;c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
            }
        }, updateStatus: function updateStatus(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);var e = { status: a, text: d };y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation();
                }), b.container.addClass("mfp-s-" + a), c = a;
            }
        }, _checkIfClose: function _checkIfClose(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;if (d && e) return !0;if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0;
                } else if (e && a.contains(document, c)) return !0;return !1;
            }
        }, _addClassToMFP: function _addClassToMFP(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a);
        }, _removeClassFromMFP: function _removeClassFromMFP(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
        }, _hasScrollBar: function _hasScrollBar(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
        }, _setFocus: function _setFocus() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
        }, _onFocusIn: function _onFocusIn(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
        }, _parseMarkup: function _parseMarkup(b, c, d) {
            var e;d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
                if (void 0 === d || d === !1) return !0;if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);if (f.length > 0) {
                        var g = e[1];"replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d);
                    }
                } else b.find(p + "-" + c).html(d);
            });
        }, _getScrollbarSize: function _getScrollbarSize() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
            }return b.scrollbarSize;
        } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function open(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
        }, close: function close() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close();
        }, registerModule: function registerModule(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
        }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, a.fn.magnificPopup = function (c) {
        A();var d = a(this);if ("string" == typeof c) {
            if ("open" === c) {
                var e,
                    f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f);
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        } else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);return d;
    };var C,
        D,
        E,
        F = "inline",
        G = function G() {
        E && (D.after(E.addClass(C)).detach(), E = null);
    };a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
                b.types.push(F), w(h + "." + F, function () {
                    G();
                });
            }, getInline: function getInline(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);if (f.length) {
                        var g = f[0].parentNode;g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready");
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");return c.inlineElement = f, f;
                }return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
            } } });var H,
        I = "ajax",
        J = function J() {
        H && a(document.body).removeClass(H);
    },
        K = function K() {
        J(), b.req && b.req.abort();
    };a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
            }, getAjax: function getAjax(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");var d = a.extend({ url: c.src, success: function success(d, e, f) {
                        var g = { data: d, xhr: f };y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
                            b.wrap.addClass(q);
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
                    }, error: function error() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
                    } }, b.st.ajax.settings);return b.req = a.ajax(d), "";
            } } });var L,
        M = function M(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;var d = b.st.image.titleSrc;if (d) {
            if (a.isFunction(d)) return d.call(b, c);if (c.el) return c.el.attr(d) || "";
        }return "";
    };a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
                var c = b.st.image,
                    d = ".image";b.types.push("image"), w(m + d, function () {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
                }), w(h + d, function () {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
            }, resizeImage: function resizeImage() {
                var a = b.currItem;if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
                }
            }, _onImageHasSize: function _onImageHasSize(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1));
            }, findImageSize: function findImageSize(a) {
                var c = 0,
                    d = a.img[0],
                    e = function e(f) {
                    L && clearInterval(L), L = setInterval(function () {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
                    }, f);
                };e(1);
            }, getImage: function getImage(c, d) {
                var e = 0,
                    f = function f() {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
                },
                    g = function g() {
                    c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
                },
                    h = b.st.image,
                    i = d.find(".mfp-img");if (i.length) {
                    var j = document.createElement("img");j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
                }return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d);
            } } });var N,
        O = function O() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
    };a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(a) {
                return a.is("img") ? a : a.find("img");
            } }, proto: { initZoom: function initZoom() {
                var a,
                    c = b.st.zoom,
                    d = ".zoom";if (c.enabled && b.supportsTransition) {
                    var e,
                        f,
                        g = c.duration,
                        j = function j(a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            d = "all " + c.duration / 1e3 + "s " + c.easing,
                            e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                            f = "transition";return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
                    },
                        k = function k() {
                        b.content.css("visibility", "visible");
                    };w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                                f.css(b._getOffset(!0)), e = setTimeout(function () {
                                    k(), setTimeout(function () {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded");
                                    }, 16);
                                }, g);
                            }, 16);
                        }
                    }), w(i + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;f = j(a);
                            }f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                                f.css(b._getOffset());
                            }, 16);
                        }
                    }), w(h + d, function () {
                        b._allowZoom() && (k(), f && f.remove(), a = null);
                    });
                }
            }, _allowZoom: function _allowZoom() {
                return "image" === b.currItem.type;
            }, _getItemToZoom: function _getItemToZoom() {
                return b.currItem.hasSize ? b.currItem.img : !1;
            }, _getOffset: function _getOffset(c) {
                var d;d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);e.top -= a(window).scrollTop() - f;var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
            } } });var P = "iframe",
        Q = "//about:blank",
        R = function R(a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
        }
    };a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
                b.types.push(P), w("BeforeChange", function (a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0));
                }), w(h + "." + P, function () {
                    R();
                });
            }, getIframe: function getIframe(c, d) {
                var e = c.src,
                    f = b.st.iframe;a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
                });var g = {};return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
            } } });var S = function S(a) {
        var c = b.items.length;return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
        T = function T(a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
                        return b.items.length > 1 ? (b.next(), !1) : void 0;
                    }), d.on("keydown" + e, function (a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                    });
                }), w("UpdateStatus" + e, function (a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
                }), w(l + e, function (a, d, e, f) {
                    var g = b.items.length;e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
                }), w("BuildControls" + e, function () {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);e.click(function () {
                            b.prev();
                        }), f.click(function () {
                            b.next();
                        }), b.container.append(e.add(f));
                    }
                }), w(n + e, function () {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
                        b.preloadNearbyImages(), b._preloadTimeout = null;
                    }, 16);
                }), void w(h + e, function () {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null;
                })) : !1;
            }, next: function next() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();
            }, prev: function prev() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();
            }, goTo: function goTo(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML();
            }, preloadNearbyImages: function preloadNearbyImages() {
                var a,
                    c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);for (a = 1; a <= (b.direction ? e : d); a++) {
                    b._preloadItem(b.index + a);
                }for (a = 1; a <= (b.direction ? d : e); a++) {
                    b._preloadItem(b.index - a);
                }
            }, _preloadItem: function _preloadItem(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                        d.hasSize = !0;
                    }).on("error.mfploader", function () {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
                    }).attr("src", d.src)), d.preloaded = !0;
                }
            } } });var U = "retina";a.magnificPopup.registerModule(U, { options: { replaceSrc: function replaceSrc(a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a;
                });
            }, ratio: 1 }, proto: { initRetina: function initRetina() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
                        b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" });
                    }), w("ElementParse." + U, function (b, d) {
                        d.src = a.replaceSrc(d, c);
                    }));
                }
            } } }), A();
});
/*!
 * Materialize v0.100.2 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
    }return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e;
    };
}();"undefined" == typeof jQuery && ("function" == typeof require ? jQuery = $ = require("jquery") : jQuery = $), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return t(e);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? exports = t(require("jquery")) : t(jQuery);
}(function (t) {
    function e(t) {
        var e = 7.5625,
            i = 2.75;return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375;
    }t.easing.jswing = t.easing.swing;var i = Math.pow,
        n = Math.sqrt,
        o = Math.sin,
        a = Math.cos,
        r = Math.PI,
        s = 1.70158,
        l = 1.525 * s,
        c = 2 * r / 3,
        u = 2 * r / 4.5;t.extend(t.easing, { def: "easeOutQuad", swing: function swing(e) {
            return t.easing[t.easing.def](e);
        }, easeInQuad: function easeInQuad(t) {
            return t * t;
        }, easeOutQuad: function easeOutQuad(t) {
            return 1 - (1 - t) * (1 - t);
        }, easeInOutQuad: function easeInOutQuad(t) {
            return t < .5 ? 2 * t * t : 1 - i(-2 * t + 2, 2) / 2;
        }, easeInCubic: function easeInCubic(t) {
            return t * t * t;
        }, easeOutCubic: function easeOutCubic(t) {
            return 1 - i(1 - t, 3);
        }, easeInOutCubic: function easeInOutCubic(t) {
            return t < .5 ? 4 * t * t * t : 1 - i(-2 * t + 2, 3) / 2;
        }, easeInQuart: function easeInQuart(t) {
            return t * t * t * t;
        }, easeOutQuart: function easeOutQuart(t) {
            return 1 - i(1 - t, 4);
        }, easeInOutQuart: function easeInOutQuart(t) {
            return t < .5 ? 8 * t * t * t * t : 1 - i(-2 * t + 2, 4) / 2;
        }, easeInQuint: function easeInQuint(t) {
            return t * t * t * t * t;
        }, easeOutQuint: function easeOutQuint(t) {
            return 1 - i(1 - t, 5);
        }, easeInOutQuint: function easeInOutQuint(t) {
            return t < .5 ? 16 * t * t * t * t * t : 1 - i(-2 * t + 2, 5) / 2;
        }, easeInSine: function easeInSine(t) {
            return 1 - a(t * r / 2);
        }, easeOutSine: function easeOutSine(t) {
            return o(t * r / 2);
        }, easeInOutSine: function easeInOutSine(t) {
            return -(a(r * t) - 1) / 2;
        }, easeInExpo: function easeInExpo(t) {
            return 0 === t ? 0 : i(2, 10 * t - 10);
        }, easeOutExpo: function easeOutExpo(t) {
            return 1 === t ? 1 : 1 - i(2, -10 * t);
        }, easeInOutExpo: function easeInOutExpo(t) {
            return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? i(2, 20 * t - 10) / 2 : (2 - i(2, -20 * t + 10)) / 2;
        }, easeInCirc: function easeInCirc(t) {
            return 1 - n(1 - i(t, 2));
        }, easeOutCirc: function easeOutCirc(t) {
            return n(1 - i(t - 1, 2));
        }, easeInOutCirc: function easeInOutCirc(t) {
            return t < .5 ? (1 - n(1 - i(2 * t, 2))) / 2 : (n(1 - i(-2 * t + 2, 2)) + 1) / 2;
        }, easeInElastic: function easeInElastic(t) {
            return 0 === t ? 0 : 1 === t ? 1 : -i(2, 10 * t - 10) * o((10 * t - 10.75) * c);
        }, easeOutElastic: function easeOutElastic(t) {
            return 0 === t ? 0 : 1 === t ? 1 : i(2, -10 * t) * o((10 * t - .75) * c) + 1;
        }, easeInOutElastic: function easeInOutElastic(t) {
            return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? -i(2, 20 * t - 10) * o((20 * t - 11.125) * u) / 2 : i(2, -20 * t + 10) * o((20 * t - 11.125) * u) / 2 + 1;
        }, easeInBack: function easeInBack(t) {
            return 2.70158 * t * t * t - s * t * t;
        }, easeOutBack: function easeOutBack(t) {
            return 1 + 2.70158 * i(t - 1, 3) + s * i(t - 1, 2);
        }, easeInOutBack: function easeInOutBack(t) {
            return t < .5 ? i(2 * t, 2) * (7.189819 * t - l) / 2 : (i(2 * t - 2, 2) * ((l + 1) * (2 * t - 2) + l) + 2) / 2;
        }, easeInBounce: function easeInBounce(t) {
            return 1 - e(1 - t);
        }, easeOutBounce: e, easeInOutBounce: function easeInOutBounce(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : (1 + e(2 * t - 1)) / 2;
        } });
}), jQuery.extend(jQuery.easing, { easeInOutMaterial: function easeInOutMaterial(t, e, i, n, o) {
        return (e /= o / 2) < 1 ? n / 2 * e * e + i : n / 4 * ((e -= 2) * e * e + 2) + i;
    } }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function (t) {
    function e(t) {
        var e = t.length,
            n = i.type(t);return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
    }if (!t.jQuery) {
        var i = function i(t, e) {
            return new i.fn.init(t, e);
        };i.isWindow = function (t) {
            return null != t && t == t.window;
        }, i.type = function (t) {
            return null == t ? t + "" : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || "function" == typeof t ? o[r.call(t)] || "object" : typeof t === "undefined" ? "undefined" : _typeof(t);
        }, i.isArray = Array.isArray || function (t) {
            return "array" === i.type(t);
        }, i.isPlainObject = function (t) {
            var e;if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;try {
                if (t.constructor && !a.call(t, "constructor") && !a.call(t.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (t) {
                return !1;
            }for (e in t) {}return void 0 === e || a.call(t, e);
        }, i.each = function (t, i, n) {
            var o = 0,
                a = t.length,
                r = e(t);if (n) {
                if (r) for (; a > o && !1 !== i.apply(t[o], n); o++) {} else for (o in t) {
                    if (!1 === i.apply(t[o], n)) break;
                }
            } else if (r) for (; a > o && !1 !== i.call(t[o], o, t[o]); o++) {} else for (o in t) {
                if (!1 === i.call(t[o], o, t[o])) break;
            }return t;
        }, i.data = function (t, e, o) {
            if (void 0 === o) {
                var a = (r = t[i.expando]) && n[r];if (void 0 === e) return a;if (a && e in a) return a[e];
            } else if (void 0 !== e) {
                var r = t[i.expando] || (t[i.expando] = ++i.uuid);return n[r] = n[r] || {}, n[r][e] = o, o;
            }
        }, i.removeData = function (t, e) {
            var o = t[i.expando],
                a = o && n[o];a && i.each(e, function (t, e) {
                delete a[e];
            });
        }, i.extend = function () {
            var t,
                e,
                n,
                o,
                a,
                r,
                s = arguments[0] || {},
                l = 1,
                c = arguments.length,
                u = !1;for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != (typeof s === "undefined" ? "undefined" : _typeof(s)) && "function" !== i.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++) {
                if (null != (a = arguments[l])) for (o in a) {
                    t = s[o], s !== (n = a[o]) && (u && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, r = t && i.isArray(t) ? t : []) : r = t && i.isPlainObject(t) ? t : {}, s[o] = i.extend(u, r, n)) : void 0 !== n && (s[o] = n));
                }
            }return s;
        }, i.queue = function (t, n, o) {
            if (t) {
                n = (n || "fx") + "queue";var a = i.data(t, n);return o ? (!a || i.isArray(o) ? a = i.data(t, n, function (t, i) {
                    var n = i || [];return null != t && (e(Object(t)) ? function (t, e) {
                        for (var i = +e.length, n = 0, o = t.length; i > n;) {
                            t[o++] = e[n++];
                        }if (i !== i) for (; void 0 !== e[n];) {
                            t[o++] = e[n++];
                        }t.length = o;
                    }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n;
                }(o)) : a.push(o), a) : a || [];
            }
        }, i.dequeue = function (t, e) {
            i.each(t.nodeType ? [t] : t, function (t, n) {
                e = e || "fx";var o = i.queue(n, e),
                    a = o.shift();"inprogress" === a && (a = o.shift()), a && ("fx" === e && o.unshift("inprogress"), a.call(n, function () {
                    i.dequeue(n, e);
                }));
            });
        }, i.fn = i.prototype = { init: function init(t) {
                if (t.nodeType) return this[0] = t, this;throw new Error("Not a DOM node.");
            }, offset: function offset() {
                var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };return { top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
            }, position: function position() {
                function t() {
                    for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) {
                        t = t.offsetParent;
                    }return t || document;
                }var e = this[0],
                    t = t.apply(e),
                    n = this.offset(),
                    o = /^(?:body|html)$/i.test(t.nodeName) ? { top: 0, left: 0 } : i(t).offset();return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (o.top += parseFloat(t.style.borderTopWidth) || 0, o.left += parseFloat(t.style.borderLeftWidth) || 0), { top: n.top - o.top, left: n.left - o.left };
            } };var n = {};i.expando = "velocity" + new Date().getTime(), i.uuid = 0;for (var o = {}, a = o.hasOwnProperty, r = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) {
            o["[object " + s[l] + "]"] = s[l].toLowerCase();
        }i.fn.init.prototype = i.fn, t.Velocity = { Utilities: i };
    }
}(window), function (t) {
    "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t();
}(function () {
    return function (t, e, i, n) {
        function o(t) {
            for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
                var o = t[e];o && n.push(o);
            }return n;
        }function a(t) {
            return v.isWrapped(t) ? t = [].slice.call(t) : v.isNode(t) && (t = [t]), t;
        }function r(t) {
            var e = p.data(t, "velocity");return null === e ? n : e;
        }function s(t) {
            return function (e) {
                return Math.round(e * t) * (1 / t);
            };
        }function l(t, i, n, o) {
            function a(t, e) {
                return 1 - 3 * e + 3 * t;
            }function r(t, e) {
                return 3 * e - 6 * t;
            }function s(t) {
                return 3 * t;
            }function l(t, e, i) {
                return ((a(e, i) * t + r(e, i)) * t + s(e)) * t;
            }function c(t, e, i) {
                return 3 * a(e, i) * t * t + 2 * r(e, i) * t + s(e);
            }function u(e, i) {
                for (var o = 0; v > o; ++o) {
                    var a = c(i, t, n);if (0 === a) return i;i -= (l(i, t, n) - e) / a;
                }return i;
            }function d() {
                for (var e = 0; b > e; ++e) {
                    C[e] = l(e * w, t, n);
                }
            }function p(e, i, o) {
                var a,
                    r,
                    s = 0;do {
                    (a = l(r = i + (o - i) / 2, t, n) - e) > 0 ? o = r : i = r;
                } while (Math.abs(a) > g && ++s < y);return r;
            }function h(e) {
                for (var i = 0, o = 1, a = b - 1; o != a && C[o] <= e; ++o) {
                    i += w;
                }var r = i + (e - C[--o]) / (C[o + 1] - C[o]) * w,
                    s = c(r, t, n);return s >= m ? u(e, r) : 0 == s ? r : p(e, i, i + w);
            }function f() {
                T = !0, (t != i || n != o) && d();
            }var v = 4,
                m = .001,
                g = 1e-7,
                y = 10,
                b = 11,
                w = 1 / (b - 1),
                k = "Float32Array" in e;if (4 !== arguments.length) return !1;for (var x = 0; 4 > x; ++x) {
                if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
            }t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);var C = k ? new Float32Array(b) : new Array(b),
                T = !1,
                S = function S(e) {
                return T || f(), t === i && n === o ? e : 0 === e ? 0 : 1 === e ? 1 : l(h(e), i, o);
            };S.getControlPoints = function () {
                return [{ x: t, y: i }, { x: n, y: o }];
            };var P = "generateBezier(" + [t, i, n, o] + ")";return S.toString = function () {
                return P;
            }, S;
        }function c(t, e) {
            var i = t;return v.isString(t) ? b.Easings[t] || (i = !1) : i = v.isArray(t) && 1 === t.length ? s.apply(null, t) : v.isArray(t) && 2 === t.length ? w.apply(null, t.concat([e])) : !(!v.isArray(t) || 4 !== t.length) && l.apply(null, t), !1 === i && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y), i;
        }function u(t) {
            if (t) {
                var e = new Date().getTime(),
                    i = b.State.calls.length;i > 1e4 && (b.State.calls = o(b.State.calls));for (var a = 0; i > a; a++) {
                    if (b.State.calls[a]) {
                        var s = b.State.calls[a],
                            l = s[0],
                            c = s[2],
                            h = s[3],
                            f = !!h,
                            m = null;h || (h = b.State.calls[a][3] = e - 16);for (var g = Math.min((e - h) / c.duration, 1), y = 0, w = l.length; w > y; y++) {
                            var x = l[y],
                                T = x.element;if (r(T)) {
                                var S = !1;if (c.display !== n && null !== c.display && "none" !== c.display) {
                                    if ("flex" === c.display) {
                                        var P = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];p.each(P, function (t, e) {
                                            k.setPropertyValue(T, "display", e);
                                        });
                                    }k.setPropertyValue(T, "display", c.display);
                                }c.visibility !== n && "hidden" !== c.visibility && k.setPropertyValue(T, "visibility", c.visibility);for (var A in x) {
                                    if ("element" !== A) {
                                        var O,
                                            E = x[A],
                                            _ = v.isString(E.easing) ? b.Easings[E.easing] : E.easing;if (1 === g) O = E.endValue;else {
                                            var M = E.endValue - E.startValue;if (O = E.startValue + M * _(g, c, M), !f && O === E.currentValue) continue;
                                        }if (E.currentValue = O, "tween" === A) m = O;else {
                                            if (k.Hooks.registered[A]) {
                                                var I = k.Hooks.getRoot(A),
                                                    D = r(T).rootPropertyValueCache[I];D && (E.rootPropertyValue = D);
                                            }var q = k.setPropertyValue(T, A, E.currentValue + (0 === parseFloat(O) ? "" : E.unitType), E.rootPropertyValue, E.scrollData);k.Hooks.registered[A] && (r(T).rootPropertyValueCache[I] = k.Normalizations.registered[I] ? k.Normalizations.registered[I]("extract", null, q[1]) : q[1]), "transform" === q[0] && (S = !0);
                                        }
                                    }
                                }c.mobileHA && r(T).transformCache.translate3d === n && (r(T).transformCache.translate3d = "(0px, 0px, 0px)", S = !0), S && k.flushTransformCache(T);
                            }
                        }c.display !== n && "none" !== c.display && (b.State.calls[a][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (b.State.calls[a][2].visibility = !1), c.progress && c.progress.call(s[1], s[1], g, Math.max(0, h + c.duration - e), h, m), 1 === g && d(a);
                    }
                }
            }b.State.isTicking && C(u);
        }function d(t, e) {
            if (!b.State.calls[t]) return !1;for (var i = b.State.calls[t][0], o = b.State.calls[t][1], a = b.State.calls[t][2], s = b.State.calls[t][4], l = !1, c = 0, u = i.length; u > c; c++) {
                var d = i[c].element;if (e || a.loop || ("none" === a.display && k.setPropertyValue(d, "display", a.display), "hidden" === a.visibility && k.setPropertyValue(d, "visibility", a.visibility)), !0 !== a.loop && (p.queue(d)[1] === n || !/\.velocityQueueEntryFlag/i.test(p.queue(d)[1])) && r(d)) {
                    r(d).isAnimating = !1, r(d).rootPropertyValueCache = {};var h = !1;p.each(k.Lists.transforms3D, function (t, e) {
                        var i = /^scale/.test(e) ? 1 : 0,
                            o = r(d).transformCache[e];r(d).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (h = !0, delete r(d).transformCache[e]);
                    }), a.mobileHA && (h = !0, delete r(d).transformCache.translate3d), h && k.flushTransformCache(d), k.Values.removeClass(d, "velocity-animating");
                }if (!e && a.complete && !a.loop && c === u - 1) try {
                    a.complete.call(o, o);
                } catch (t) {
                    setTimeout(function () {
                        throw t;
                    }, 1);
                }s && !0 !== a.loop && s(o), r(d) && !0 === a.loop && !e && (p.each(r(d).tweensContainer, function (t, e) {
                    /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100);
                }), b(d, "reverse", { loop: !0, delay: a.delay })), !1 !== a.queue && p.dequeue(d, a.queue);
            }b.State.calls[t] = !1;for (var f = 0, v = b.State.calls.length; v > f; f++) {
                if (!1 !== b.State.calls[f]) {
                    l = !0;break;
                }
            }!1 === l && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = []);
        }var p,
            h = function () {
            if (i.documentMode) return i.documentMode;for (var t = 7; t > 4; t--) {
                var e = i.createElement("div");if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", e.getElementsByTagName("span").length) return e = null, t;
            }return n;
        }(),
            f = function () {
            var t = 0;return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function (e) {
                var i,
                    n = new Date().getTime();return i = Math.max(0, 16 - (n - t)), t = n + i, setTimeout(function () {
                    e(n + i);
                }, i);
            };
        }(),
            v = { isString: function isString(t) {
                return "string" == typeof t;
            }, isArray: Array.isArray || function (t) {
                return "[object Array]" === Object.prototype.toString.call(t);
            }, isFunction: function isFunction(t) {
                return "[object Function]" === Object.prototype.toString.call(t);
            }, isNode: function isNode(t) {
                return t && t.nodeType;
            }, isNodeList: function isNodeList(t) {
                return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == _typeof(t[0]) && t[0].nodeType > 0);
            }, isWrapped: function isWrapped(t) {
                return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t));
            }, isSVG: function isSVG(t) {
                return e.SVGElement && t instanceof e.SVGElement;
            }, isEmptyObject: function isEmptyObject(t) {
                for (var e in t) {
                    return !1;
                }return !0;
            } },
            m = !1;if (t.fn && t.fn.jquery ? (p = t, m = !0) : p = e.Velocity.Utilities, 8 >= h && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");{
            if (!(7 >= h)) {
                var g = 400,
                    y = "swing",
                    b = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: e.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: i.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: p, Redirects: {}, Easings: {}, Promise: e.Promise, defaults: { queue: "", duration: g, easing: y, begin: n, complete: n, progress: n, display: n, visibility: n, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function init(t) {
                        p.data(t, "velocity", { isSVG: v.isSVG(t), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
                    }, hook: null, mock: !1, version: { major: 1, minor: 2, patch: 2 }, debug: !1 };e.pageYOffset !== n ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");var w = function () {
                    function t(t) {
                        return -t.tension * t.x - t.friction * t.v;
                    }function e(e, i, n) {
                        var o = { x: e.x + n.dx * i, v: e.v + n.dv * i, tension: e.tension, friction: e.friction };return { dx: o.v, dv: t(o) };
                    }function i(i, n) {
                        var o = { dx: i.v, dv: t(i) },
                            a = e(i, .5 * n, o),
                            r = e(i, .5 * n, a),
                            s = e(i, n, r),
                            l = 1 / 6 * (o.dx + 2 * (a.dx + r.dx) + s.dx),
                            c = 1 / 6 * (o.dv + 2 * (a.dv + r.dv) + s.dv);return i.x = i.x + l * n, i.v = i.v + c * n, i;
                    }return function t(e, n, o) {
                        var a,
                            r,
                            s,
                            l = { x: -1, v: 0, tension: null, friction: null },
                            c = [0],
                            u = 0;for (e = parseFloat(e) || 500, n = parseFloat(n) || 20, o = o || null, l.tension = e, l.friction = n, (a = null !== o) ? (u = t(e, n), r = u / o * .016) : r = .016; s = i(s || l, r), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;) {}return a ? function (t) {
                            return c[t * (c.length - 1) | 0];
                        } : u;
                    };
                }();b.Easings = { linear: function linear(t) {
                        return t;
                    }, swing: function swing(t) {
                        return .5 - Math.cos(t * Math.PI) / 2;
                    }, spring: function spring(t) {
                        return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t);
                    } }, p.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (t, e) {
                    b.Easings[e[0]] = l.apply(null, e[1]);
                });var k = b.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function register() {
                            for (a = 0; a < k.Lists.colors.length; a++) {
                                var t = "color" === k.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";k.Hooks.templates[k.Lists.colors[a]] = ["Red Green Blue Alpha", t];
                            }var e, i, n;if (h) for (e in k.Hooks.templates) {
                                n = (i = k.Hooks.templates[e])[0].split(" ");var o = i[1].match(k.RegEx.valueSplit);"Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), k.Hooks.templates[e] = [n.join(" "), o.join(" ")]);
                            }for (e in k.Hooks.templates) {
                                n = (i = k.Hooks.templates[e])[0].split(" ");for (var a in n) {
                                    var r = e + n[a],
                                        s = a;k.Hooks.registered[r] = [e, s];
                                }
                            }
                        }, getRoot: function getRoot(t) {
                            var e = k.Hooks.registered[t];return e ? e[0] : t;
                        }, cleanRootPropertyValue: function cleanRootPropertyValue(t, e) {
                            return k.RegEx.valueUnwrap.test(e) && (e = e.match(k.RegEx.valueUnwrap)[1]), k.Values.isCSSNullValue(e) && (e = k.Hooks.templates[t][1]), e;
                        }, extractValue: function extractValue(t, e) {
                            var i = k.Hooks.registered[t];if (i) {
                                var n = i[0],
                                    o = i[1];return (e = k.Hooks.cleanRootPropertyValue(n, e)).toString().match(k.RegEx.valueSplit)[o];
                            }return e;
                        }, injectValue: function injectValue(t, e, i) {
                            var n = k.Hooks.registered[t];if (n) {
                                var o,
                                    a = n[0],
                                    r = n[1];return i = k.Hooks.cleanRootPropertyValue(a, i), o = i.toString().match(k.RegEx.valueSplit), o[r] = e, o.join(" ");
                            }return i;
                        } }, Normalizations: { registered: { clip: function clip(t, e, i) {
                                switch (t) {case "name":
                                        return "clip";case "extract":
                                        var n;return k.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(k.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;case "inject":
                                        return "rect(" + i + ")";}
                            }, blur: function blur(t, e, i) {
                                switch (t) {case "name":
                                        return b.State.isFirefox ? "filter" : "-webkit-filter";case "extract":
                                        var n = parseFloat(i);if (!n && 0 !== n) {
                                            var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);n = o ? o[1] : 0;
                                        }return n;case "inject":
                                        return parseFloat(i) ? "blur(" + i + ")" : "none";}
                            }, opacity: function opacity(t, e, i) {
                                if (8 >= h) switch (t) {case "name":
                                        return "filter";case "extract":
                                        var n = i.toString().match(/alpha\(opacity=(.*)\)/i);return i = n ? n[1] / 100 : 1;case "inject":
                                        return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")";} else switch (t) {case "name":
                                        return "opacity";case "extract":case "inject":
                                        return i;}
                            } }, register: function register() {
                            9 >= h || b.State.isGingerbread || (k.Lists.transformsBase = k.Lists.transformsBase.concat(k.Lists.transforms3D));for (t = 0; t < k.Lists.transformsBase.length; t++) {
                                !function () {
                                    var e = k.Lists.transformsBase[t];k.Normalizations.registered[e] = function (t, i, o) {
                                        switch (t) {case "name":
                                                return "transform";case "extract":
                                                return r(i) === n || r(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : r(i).transformCache[e].replace(/[()]/g, "");case "inject":
                                                var a = !1;switch (e.substr(0, e.length - 1)) {case "translate":
                                                        a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;case "scal":case "scale":
                                                        b.State.isAndroid && r(i).transformCache[e] === n && 1 > o && (o = 1), a = !/(\d)$/i.test(o);break;case "skew":
                                                        a = !/(deg|\d)$/i.test(o);break;case "rotate":
                                                        a = !/(deg|\d)$/i.test(o);}return a || (r(i).transformCache[e] = "(" + o + ")"), r(i).transformCache[e];}
                                    };
                                }();
                            }for (var t = 0; t < k.Lists.colors.length; t++) {
                                !function () {
                                    var e = k.Lists.colors[t];k.Normalizations.registered[e] = function (t, i, o) {
                                        switch (t) {case "name":
                                                return e;case "extract":
                                                var a;if (k.RegEx.wrappedValueAlreadyExtracted.test(o)) a = o;else {
                                                    var r,
                                                        s = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };/^[A-z]+$/i.test(o) ? r = s[o] !== n ? s[o] : s.black : k.RegEx.isHex.test(o) ? r = "rgb(" + k.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (r = s.black), a = (r || o).toString().match(k.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                                }return 8 >= h || 3 !== a.split(" ").length || (a += " 1"), a;case "inject":
                                                return 8 >= h ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= h ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";}
                                    };
                                }();
                            }
                        } }, Names: { camelCase: function camelCase(t) {
                            return t.replace(/-(\w)/g, function (t, e) {
                                return e.toUpperCase();
                            });
                        }, SVGAttribute: function SVGAttribute(t) {
                            var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return (h || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t);
                        }, prefixCheck: function prefixCheck(t) {
                            if (b.State.prefixMatches[t]) return [b.State.prefixMatches[t], !0];for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
                                var o;if (o = 0 === i ? t : e[i] + t.replace(/^\w/, function (t) {
                                    return t.toUpperCase();
                                }), v.isString(b.State.prefixElement.style[o])) return b.State.prefixMatches[t] = o, [o, !0];
                            }return [t, !1];
                        } }, Values: { hexToRgb: function hexToRgb(t) {
                            var e,
                                i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                                n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return t = t.replace(i, function (t, e, i, n) {
                                return e + e + i + i + n + n;
                            }), e = n.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0];
                        }, isCSSNullValue: function isCSSNullValue(t) {
                            return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t);
                        }, getUnitType: function getUnitType(t) {
                            return (/^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                            );
                        }, getDisplayType: function getDisplayType(t) {
                            var e = t && t.tagName.toString().toLowerCase();return (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                            );
                        }, addClass: function addClass(t, e) {
                            t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e;
                        }, removeClass: function removeClass(t, e) {
                            t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                        } }, getPropertyValue: function getPropertyValue(t, i, o, a) {
                        function s(t, i) {
                            function o() {
                                c && k.setPropertyValue(t, "display", "none");
                            }var l = 0;if (8 >= h) l = p.css(t, i);else {
                                var c = !1;if (/^(width|height)$/.test(i) && 0 === k.getPropertyValue(t, "display") && (c = !0, k.setPropertyValue(t, "display", k.Values.getDisplayType(t))), !a) {
                                    if ("height" === i && "border-box" !== k.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                        var u = t.offsetHeight - (parseFloat(k.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(k.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(k.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(k.getPropertyValue(t, "paddingBottom")) || 0);return o(), u;
                                    }if ("width" === i && "border-box" !== k.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                        var d = t.offsetWidth - (parseFloat(k.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(k.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(k.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(k.getPropertyValue(t, "paddingRight")) || 0);return o(), d;
                                    }
                                }var f;f = r(t) === n ? e.getComputedStyle(t, null) : r(t).computedStyle ? r(t).computedStyle : r(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), ("" === (l = 9 === h && "filter" === i ? f.getPropertyValue(i) : f[i]) || null === l) && (l = t.style[i]), o();
                            }if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                                var v = s(t, "position");("fixed" === v || "absolute" === v && /top|left/i.test(i)) && (l = p(t).position()[i] + "px");
                            }return l;
                        }var l;if (k.Hooks.registered[i]) {
                            var c = i,
                                u = k.Hooks.getRoot(c);o === n && (o = k.getPropertyValue(t, k.Names.prefixCheck(u)[0])), k.Normalizations.registered[u] && (o = k.Normalizations.registered[u]("extract", t, o)), l = k.Hooks.extractValue(c, o);
                        } else if (k.Normalizations.registered[i]) {
                            var d, f;"transform" !== (d = k.Normalizations.registered[i]("name", t)) && (f = s(t, k.Names.prefixCheck(d)[0]), k.Values.isCSSNullValue(f) && k.Hooks.templates[i] && (f = k.Hooks.templates[i][1])), l = k.Normalizations.registered[i]("extract", t, f);
                        }if (!/^[\d-]/.test(l)) if (r(t) && r(t).isSVG && k.Names.SVGAttribute(i)) {
                            if (/^(height|width)$/i.test(i)) try {
                                l = t.getBBox()[i];
                            } catch (t) {
                                l = 0;
                            } else l = t.getAttribute(i);
                        } else l = s(t, k.Names.prefixCheck(i)[0]);return k.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + i + ": " + l), l;
                    }, setPropertyValue: function setPropertyValue(t, i, n, o, a) {
                        var s = i;if ("scroll" === i) a.container ? a.container["scroll" + a.direction] = n : "Left" === a.direction ? e.scrollTo(n, a.alternateValue) : e.scrollTo(a.alternateValue, n);else if (k.Normalizations.registered[i] && "transform" === k.Normalizations.registered[i]("name", t)) k.Normalizations.registered[i]("inject", t, n), s = "transform", n = r(t).transformCache[i];else {
                            if (k.Hooks.registered[i]) {
                                var l = i,
                                    c = k.Hooks.getRoot(i);o = o || k.getPropertyValue(t, c), n = k.Hooks.injectValue(l, n, o), i = c;
                            }if (k.Normalizations.registered[i] && (n = k.Normalizations.registered[i]("inject", t, n), i = k.Normalizations.registered[i]("name", t)), s = k.Names.prefixCheck(i)[0], 8 >= h) try {
                                t.style[s] = n;
                            } catch (t) {
                                b.debug && console.log("Browser does not support [" + n + "] for [" + s + "]");
                            } else r(t) && r(t).isSVG && k.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[s] = n;b.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n);
                        }return [s, n];
                    }, flushTransformCache: function flushTransformCache(t) {
                        function e(e) {
                            return parseFloat(k.getPropertyValue(t, e));
                        }var i = "";if ((h || b.State.isAndroid && !b.State.isChrome) && r(t).isSVG) {
                            var n = { translate: [e("translateX"), e("translateY")], skewX: [e("skewX")], skewY: [e("skewY")], scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")], rotate: [e("rotateZ"), 0, 0] };p.each(r(t).transformCache, function (t) {
                                /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t]);
                            });
                        } else {
                            var o, a;p.each(r(t).transformCache, function (e) {
                                return o = r(t).transformCache[e], "transformPerspective" === e ? (a = o, !0) : (9 === h && "rotateZ" === e && (e = "rotate"), void (i += e + o + " "));
                            }), a && (i = "perspective" + a + " " + i);
                        }k.setPropertyValue(t, "transform", i);
                    } };k.Hooks.register(), k.Normalizations.register(), b.hook = function (t, e, i) {
                    var o = n;return t = a(t), p.each(t, function (t, a) {
                        if (r(a) === n && b.init(a), i === n) o === n && (o = b.CSS.getPropertyValue(a, e));else {
                            var s = b.CSS.setPropertyValue(a, e, i);"transform" === s[0] && b.CSS.flushTransformCache(a), o = s;
                        }
                    }), o;
                };var x = function x() {
                    function t() {
                        return s ? P.promise || null : l;
                    }function o() {
                        function t(t) {
                            function d(t, e) {
                                var i = n,
                                    o = n,
                                    r = n;return v.isArray(t) ? (i = t[0], !v.isArray(t[1]) && /^[\d-]/.test(t[1]) || v.isFunction(t[1]) || k.RegEx.isHex.test(t[1]) ? r = t[1] : (v.isString(t[1]) && !k.RegEx.isHex.test(t[1]) || v.isArray(t[1])) && (o = e ? t[1] : c(t[1], s.duration), t[2] !== n && (r = t[2]))) : i = t, e || (o = o || s.easing), v.isFunction(i) && (i = i.call(a, T, C)), v.isFunction(r) && (r = r.call(a, T, C)), [i || 0, o, r];
                            }function h(t, e) {
                                var i, n;return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (t) {
                                    return i = t, "";
                                }), i || (i = k.Values.getUnitType(t)), [n, i];
                            }if (s.begin && 0 === T) try {
                                s.begin.call(f, f);
                            } catch (t) {
                                setTimeout(function () {
                                    throw t;
                                }, 1);
                            }if ("scroll" === A) {
                                var g,
                                    w,
                                    x,
                                    S = /^x$/i.test(s.axis) ? "Left" : "Top",
                                    O = parseFloat(s.offset) || 0;s.container ? v.isWrapped(s.container) || v.isNode(s.container) ? (s.container = s.container[0] || s.container, g = s.container["scroll" + S], x = g + p(a).position()[S.toLowerCase()] + O) : s.container = null : (g = b.State.scrollAnchor[b.State["scrollProperty" + S]], w = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], x = p(a).offset()[S.toLowerCase()] + O), l = { scroll: { rootPropertyValue: !1, startValue: g, currentValue: g, endValue: x, unitType: "", easing: s.easing, scrollData: { container: s.container, direction: S, alternateValue: w } }, element: a }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, a);
                            } else if ("reverse" === A) {
                                if (!r(a).tweensContainer) return void p.dequeue(a, s.queue);"none" === r(a).opts.display && (r(a).opts.display = "auto"), "hidden" === r(a).opts.visibility && (r(a).opts.visibility = "visible"), r(a).opts.loop = !1, r(a).opts.begin = null, r(a).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = p.extend({}, r(a).opts, s);M = p.extend(!0, {}, r(a).tweensContainer);for (var E in M) {
                                    if ("element" !== E) {
                                        var _ = M[E].startValue;M[E].startValue = M[E].currentValue = M[E].endValue, M[E].endValue = _, v.isEmptyObject(y) || (M[E].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + E + "): " + JSON.stringify(M[E]), a);
                                    }
                                }l = M;
                            } else if ("start" === A) {
                                var M;r(a).tweensContainer && !0 === r(a).isAnimating && (M = r(a).tweensContainer), p.each(m, function (t, e) {
                                    if (RegExp("^" + k.Lists.colors.join("$|^") + "$").test(t)) {
                                        var i = d(e, !0),
                                            o = i[0],
                                            a = i[1],
                                            r = i[2];if (k.RegEx.isHex.test(o)) {
                                            for (var s = ["Red", "Green", "Blue"], l = k.Values.hexToRgb(o), c = r ? k.Values.hexToRgb(r) : n, u = 0; u < s.length; u++) {
                                                var p = [l[u]];a && p.push(a), c !== n && p.push(c[u]), m[t + s[u]] = p;
                                            }delete m[t];
                                        }
                                    }
                                });for (var q in m) {
                                    var z = d(m[q]),
                                        V = z[0],
                                        H = z[1],
                                        L = z[2];q = k.Names.camelCase(q);var j = k.Hooks.getRoot(q),
                                        $ = !1;if (r(a).isSVG || "tween" === j || !1 !== k.Names.prefixCheck(j)[1] || k.Normalizations.registered[j] !== n) {
                                        (s.display !== n && null !== s.display && "none" !== s.display || s.visibility !== n && "hidden" !== s.visibility) && /opacity|filter/.test(q) && !L && 0 !== V && (L = 0), s._cacheValues && M && M[q] ? (L === n && (L = M[q].endValue + M[q].unitType), $ = r(a).rootPropertyValueCache[j]) : k.Hooks.registered[q] ? L === n ? ($ = k.getPropertyValue(a, j), L = k.getPropertyValue(a, q, $)) : $ = k.Hooks.templates[j][1] : L === n && (L = k.getPropertyValue(a, q));var N,
                                            W,
                                            F,
                                            Q = !1;if (N = h(q, L), L = N[0], F = N[1], N = h(q, V), V = N[0].replace(/^([+-\/*])=/, function (t, e) {
                                            return Q = e, "";
                                        }), W = N[1], L = parseFloat(L) || 0, V = parseFloat(V) || 0, "%" === W && (/^(fontSize|lineHeight)$/.test(q) ? (V /= 100, W = "em") : /^scale/.test(q) ? (V /= 100, W = "") : /(Red|Green|Blue)$/i.test(q) && (V = V / 100 * 255, W = "")), /[\/*]/.test(Q)) W = F;else if (F !== W && 0 !== L) if (0 === V) W = F;else {
                                            o = o || function () {
                                                var t = { myParent: a.parentNode || i.body, position: k.getPropertyValue(a, "position"), fontSize: k.getPropertyValue(a, "fontSize") },
                                                    n = t.position === I.lastPosition && t.myParent === I.lastParent,
                                                    o = t.fontSize === I.lastFontSize;I.lastParent = t.myParent, I.lastPosition = t.position, I.lastFontSize = t.fontSize;var s = 100,
                                                    l = {};if (o && n) l.emToPx = I.lastEmToPx, l.percentToPxWidth = I.lastPercentToPxWidth, l.percentToPxHeight = I.lastPercentToPxHeight;else {
                                                    var c = r(a).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");b.init(c), t.myParent.appendChild(c), p.each(["overflow", "overflowX", "overflowY"], function (t, e) {
                                                        b.CSS.setPropertyValue(c, e, "hidden");
                                                    }), b.CSS.setPropertyValue(c, "position", t.position), b.CSS.setPropertyValue(c, "fontSize", t.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (t, e) {
                                                        b.CSS.setPropertyValue(c, e, s + "%");
                                                    }), b.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(k.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(k.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = I.lastEmToPx = (parseFloat(k.getPropertyValue(c, "paddingLeft")) || 1) / s, t.myParent.removeChild(c);
                                                }return null === I.remToPx && (I.remToPx = parseFloat(k.getPropertyValue(i.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(e.innerWidth) / 100, I.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = I.remToPx, l.vwToPx = I.vwToPx, l.vhToPx = I.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l;
                                            }();var X = /margin|padding|left|right|width|text|word|letter/i.test(q) || /X$/.test(q) || "x" === q ? "x" : "y";switch (F) {case "%":
                                                    L *= "x" === X ? o.percentToPxWidth : o.percentToPxHeight;break;case "px":
                                                    break;default:
                                                    L *= o[F + "ToPx"];}switch (W) {case "%":
                                                    L *= 1 / ("x" === X ? o.percentToPxWidth : o.percentToPxHeight);break;case "px":
                                                    break;default:
                                                    L *= 1 / o[W + "ToPx"];}
                                        }switch (Q) {case "+":
                                                V = L + V;break;case "-":
                                                V = L - V;break;case "*":
                                                V *= L;break;case "/":
                                                V = L / V;}l[q] = { rootPropertyValue: $, startValue: L, currentValue: L, endValue: V, unitType: W, easing: H }, b.debug && console.log("tweensContainer (" + q + "): " + JSON.stringify(l[q]), a);
                                    } else b.debug && console.log("Skipping [" + j + "] due to a lack of browser support.");
                                }l.element = a;
                            }l.element && (k.Values.addClass(a, "velocity-animating"), D.push(l), "" === s.queue && (r(a).tweensContainer = l, r(a).opts = s), r(a).isAnimating = !0, T === C - 1 ? (b.State.calls.push([D, f, s, null, P.resolver]), !1 === b.State.isTicking && (b.State.isTicking = !0, u())) : T++);
                        }var o,
                            a = this,
                            s = p.extend({}, b.defaults, y),
                            l = {};switch (r(a) === n && b.init(a), parseFloat(s.delay) && !1 !== s.queue && p.queue(a, s.queue, function (t) {
                            b.velocityQueueEntryFlag = !0, r(a).delayTimer = { setTimeout: setTimeout(t, parseFloat(s.delay)), next: t };
                        }), s.duration.toString().toLowerCase()) {case "fast":
                                s.duration = 200;break;case "normal":
                                s.duration = g;break;case "slow":
                                s.duration = 600;break;default:
                                s.duration = parseFloat(s.duration) || 1;}!1 !== b.mock && (!0 === b.mock ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = c(s.easing, s.duration), s.begin && !v.isFunction(s.begin) && (s.begin = null), s.progress && !v.isFunction(s.progress) && (s.progress = null), s.complete && !v.isFunction(s.complete) && (s.complete = null), s.display !== n && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(a))), s.visibility !== n && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, !1 === s.queue ? s.delay ? setTimeout(t, s.delay) : t() : p.queue(a, s.queue, function (e, i) {
                            return !0 === i ? (P.promise && P.resolver(f), !0) : (b.velocityQueueEntryFlag = !0, void t(e));
                        }), "" !== s.queue && "fx" !== s.queue || "inprogress" === p.queue(a)[0] || p.dequeue(a);
                    }var s,
                        l,
                        h,
                        f,
                        m,
                        y,
                        w = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || v.isString(arguments[0].properties));if (v.isWrapped(this) ? (s = !1, h = 0, f = this, l = this) : (s = !0, h = 1, f = w ? arguments[0].elements || arguments[0].e : arguments[0]), f = a(f)) {
                        w ? (m = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (m = arguments[h], y = arguments[h + 1]);var C = f.length,
                            T = 0;if (!/^(stop|finish)$/i.test(m) && !p.isPlainObject(y)) {
                            y = {};for (var S = h + 1; S < arguments.length; S++) {
                                v.isArray(arguments[S]) || !/^(fast|normal|slow)$/i.test(arguments[S]) && !/^\d/.test(arguments[S]) ? v.isString(arguments[S]) || v.isArray(arguments[S]) ? y.easing = arguments[S] : v.isFunction(arguments[S]) && (y.complete = arguments[S]) : y.duration = arguments[S];
                            }
                        }var P = { promise: null, resolver: null, rejecter: null };s && b.Promise && (P.promise = new b.Promise(function (t, e) {
                            P.resolver = t, P.rejecter = e;
                        }));var A;switch (m) {case "scroll":
                                A = "scroll";break;case "reverse":
                                A = "reverse";break;case "finish":case "stop":
                                p.each(f, function (t, e) {
                                    r(e) && r(e).delayTimer && (clearTimeout(r(e).delayTimer.setTimeout), r(e).delayTimer.next && r(e).delayTimer.next(), delete r(e).delayTimer);
                                });var O = [];return p.each(b.State.calls, function (t, e) {
                                    e && p.each(e[1], function (i, o) {
                                        var a = y === n ? "" : y;return !0 !== a && e[2].queue !== a && (y !== n || !1 !== e[2].queue) || void p.each(f, function (i, n) {
                                            n === o && ((!0 === y || v.isString(y)) && (p.each(p.queue(n, v.isString(y) ? y : ""), function (t, e) {
                                                v.isFunction(e) && e(null, !0);
                                            }), p.queue(n, v.isString(y) ? y : "", [])), "stop" === m ? (r(n) && r(n).tweensContainer && !1 !== a && p.each(r(n).tweensContainer, function (t, e) {
                                                e.endValue = e.currentValue;
                                            }), O.push(t)) : "finish" === m && (e[2].duration = 1));
                                        });
                                    });
                                }), "stop" === m && (p.each(O, function (t, e) {
                                    d(e, !0);
                                }), P.promise && P.resolver(f)), t();default:
                                if (!p.isPlainObject(m) || v.isEmptyObject(m)) {
                                    if (v.isString(m) && b.Redirects[m]) {
                                        var E = (z = p.extend({}, y)).duration,
                                            _ = z.delay || 0;return !0 === z.backwards && (f = p.extend(!0, [], f).reverse()), p.each(f, function (t, e) {
                                            parseFloat(z.stagger) ? z.delay = _ + parseFloat(z.stagger) * t : v.isFunction(z.stagger) && (z.delay = _ + z.stagger.call(e, t, C)), z.drag && (z.duration = parseFloat(E) || (/^(callout|transition)/.test(m) ? 1e3 : g), z.duration = Math.max(z.duration * (z.backwards ? 1 - t / C : (t + 1) / C), .75 * z.duration, 200)), b.Redirects[m].call(e, e, z || {}, t, C, f, P.promise ? P : n);
                                        }), t();
                                    }var M = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";return P.promise ? P.rejecter(new Error(M)) : console.log(M), t();
                                }A = "start";}var I = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
                            D = [];p.each(f, function (t, e) {
                            v.isNode(e) && o.call(e);
                        });var q,
                            z = p.extend({}, b.defaults, y);if (z.loop = parseInt(z.loop), q = 2 * z.loop - 1, z.loop) for (var V = 0; q > V; V++) {
                            var H = { delay: z.delay, progress: z.progress };V === q - 1 && (H.display = z.display, H.visibility = z.visibility, H.complete = z.complete), x(f, "reverse", H);
                        }return t();
                    }
                };(b = p.extend(x, b)).animate = x;var C = e.requestAnimationFrame || f;return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function () {
                    i.hidden ? (C = function C(t) {
                        return setTimeout(function () {
                            t(!0);
                        }, 16);
                    }, u()) : C = e.requestAnimationFrame || f;
                }), t.Velocity = b, t !== e && (t.fn.velocity = x, t.fn.velocity.defaults = b.defaults), p.each(["Down", "Up"], function (t, e) {
                    b.Redirects["slide" + e] = function (t, i, o, a, r, s) {
                        var l = p.extend({}, i),
                            c = l.begin,
                            u = l.complete,
                            d = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
                            h = {};l.display === n && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function () {
                            c && c.call(r, r);for (var i in d) {
                                h[i] = t.style[i];var n = b.CSS.getPropertyValue(t, i);d[i] = "Down" === e ? [n, 0] : [0, n];
                            }h.overflow = t.style.overflow, t.style.overflow = "hidden";
                        }, l.complete = function () {
                            for (var e in h) {
                                t.style[e] = h[e];
                            }u && u.call(r, r), s && s.resolver(r);
                        }, b(t, d, l);
                    };
                }), p.each(["In", "Out"], function (t, e) {
                    b.Redirects["fade" + e] = function (t, i, o, a, r, s) {
                        var l = p.extend({}, i),
                            c = { opacity: "In" === e ? 1 : 0 },
                            u = l.complete;l.complete = o !== a - 1 ? l.begin = null : function () {
                            u && u.call(r, r), s && s.resolver(r);
                        }, l.display === n && (l.display = "In" === e ? "auto" : "none"), b(this, c, l);
                    };
                }), b;
            }jQuery.fn.velocity = jQuery.fn.animate;
        }
    }(window.jQuery || window.Zepto || window, window, document);
})), function (t, e, i, n) {
    "use strict";
    function o(t, e, i) {
        return setTimeout(u(t, i), e);
    }function a(t, e, i) {
        return !!Array.isArray(t) && (r(t, i[e], i), !0);
    }function r(t, e, i) {
        var o;if (t) if (t.forEach) t.forEach(e, i);else if (t.length !== n) for (o = 0; o < t.length;) {
            e.call(i, t[o], o, t), o++;
        } else for (o in t) {
            t.hasOwnProperty(o) && e.call(i, t[o], o, t);
        }
    }function s(t, e, i) {
        for (var o = Object.keys(e), a = 0; a < o.length;) {
            (!i || i && t[o[a]] === n) && (t[o[a]] = e[o[a]]), a++;
        }return t;
    }function l(t, e) {
        return s(t, e, !0);
    }function c(t, e, i) {
        var n,
            o = e.prototype;(n = t.prototype = Object.create(o)).constructor = t, n._super = o, i && s(n, i);
    }function u(t, e) {
        return function () {
            return t.apply(e, arguments);
        };
    }function d(t, e) {
        return (typeof t === "undefined" ? "undefined" : _typeof(t)) == ut ? t.apply(e ? e[0] || n : n, e) : t;
    }function p(t, e) {
        return t === n ? e : t;
    }function h(t, e, i) {
        r(g(e), function (e) {
            t.addEventListener(e, i, !1);
        });
    }function f(t, e, i) {
        r(g(e), function (e) {
            t.removeEventListener(e, i, !1);
        });
    }function v(t, e) {
        for (; t;) {
            if (t == e) return !0;t = t.parentNode;
        }return !1;
    }function m(t, e) {
        return t.indexOf(e) > -1;
    }function g(t) {
        return t.trim().split(/\s+/g);
    }function y(t, e, i) {
        if (t.indexOf && !i) return t.indexOf(e);for (var n = 0; n < t.length;) {
            if (i && t[n][i] == e || !i && t[n] === e) return n;n++;
        }return -1;
    }function b(t) {
        return Array.prototype.slice.call(t, 0);
    }function w(t, e, i) {
        for (var n = [], o = [], a = 0; a < t.length;) {
            var r = e ? t[a][e] : t[a];y(o, r) < 0 && n.push(t[a]), o[a] = r, a++;
        }return i && (n = e ? n.sort(function (t, i) {
            return t[e] > i[e];
        }) : n.sort()), n;
    }function k(t, e) {
        for (var i, o, a = e[0].toUpperCase() + e.slice(1), r = 0; r < lt.length;) {
            if (i = lt[r], (o = i ? i + a : e) in t) return o;r++;
        }return n;
    }function x() {
        return ft++;
    }function C(t) {
        var e = t.ownerDocument;return e.defaultView || e.parentWindow;
    }function T(t, e) {
        var i = this;this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
            d(t.options.enable, [t]) && i.handler(e);
        }, this.init();
    }function S(t) {
        var e = t.options.inputClass;return new (e || (gt ? j : yt ? W : mt ? Q : L))(t, P);
    }function P(t, e, i) {
        var n = i.pointers.length,
            o = i.changedPointers.length,
            a = e & xt && 0 == n - o,
            r = e & (Tt | St) && 0 == n - o;i.isFirst = !!a, i.isFinal = !!r, a && (t.session = {}), i.eventType = e, A(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i;
    }function A(t, e) {
        var i = t.session,
            n = e.pointers,
            o = n.length;i.firstInput || (i.firstInput = _(e)), o > 1 && !i.firstMultiple ? i.firstMultiple = _(e) : 1 === o && (i.firstMultiple = !1);var a = i.firstInput,
            r = i.firstMultiple,
            s = r ? r.center : a.center,
            l = e.center = M(n);e.timeStamp = ht(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = z(s, l), e.distance = q(s, l), O(i, e), e.offsetDirection = D(e.deltaX, e.deltaY), e.scale = r ? H(r.pointers, n) : 1, e.rotation = r ? V(r.pointers, n) : 0, E(i, e);var c = t.element;v(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c;
    }function O(t, e) {
        var i = e.center,
            n = t.offsetDelta || {},
            o = t.prevDelta || {},
            a = t.prevInput || {};(e.eventType === xt || a.eventType === Tt) && (o = t.prevDelta = { x: a.deltaX || 0, y: a.deltaY || 0 }, n = t.offsetDelta = { x: i.x, y: i.y }), e.deltaX = o.x + (i.x - n.x), e.deltaY = o.y + (i.y - n.y);
    }function E(t, e) {
        var i,
            o,
            a,
            r,
            s = t.lastInterval || e,
            l = e.timeStamp - s.timeStamp;if (e.eventType != St && (l > kt || s.velocity === n)) {
            var c = s.deltaX - e.deltaX,
                u = s.deltaY - e.deltaY,
                d = I(l, c, u);o = d.x, a = d.y, i = pt(d.x) > pt(d.y) ? d.x : d.y, r = D(c, u), t.lastInterval = e;
        } else i = s.velocity, o = s.velocityX, a = s.velocityY, r = s.direction;e.velocity = i, e.velocityX = o, e.velocityY = a, e.direction = r;
    }function _(t) {
        for (var e = [], i = 0; i < t.pointers.length;) {
            e[i] = { clientX: dt(t.pointers[i].clientX), clientY: dt(t.pointers[i].clientY) }, i++;
        }return { timeStamp: ht(), pointers: e, center: M(e), deltaX: t.deltaX, deltaY: t.deltaY };
    }function M(t) {
        var e = t.length;if (1 === e) return { x: dt(t[0].clientX), y: dt(t[0].clientY) };for (var i = 0, n = 0, o = 0; e > o;) {
            i += t[o].clientX, n += t[o].clientY, o++;
        }return { x: dt(i / e), y: dt(n / e) };
    }function I(t, e, i) {
        return { x: e / t || 0, y: i / t || 0 };
    }function D(t, e) {
        return t === e ? Pt : pt(t) >= pt(e) ? t > 0 ? At : Ot : e > 0 ? Et : _t;
    }function q(t, e, i) {
        i || (i = qt);var n = e[i[0]] - t[i[0]],
            o = e[i[1]] - t[i[1]];return Math.sqrt(n * n + o * o);
    }function z(t, e, i) {
        i || (i = qt);var n = e[i[0]] - t[i[0]],
            o = e[i[1]] - t[i[1]];return 180 * Math.atan2(o, n) / Math.PI;
    }function V(t, e) {
        return z(e[1], e[0], zt) - z(t[1], t[0], zt);
    }function H(t, e) {
        return q(e[0], e[1], zt) / q(t[0], t[1], zt);
    }function L() {
        this.evEl = Ht, this.evWin = Lt, this.allow = !0, this.pressed = !1, T.apply(this, arguments);
    }function j() {
        this.evEl = Nt, this.evWin = Wt, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }function $() {
        this.evTarget = Qt, this.evWin = Xt, this.started = !1, T.apply(this, arguments);
    }function N(t, e) {
        var i = b(t.touches),
            n = b(t.changedTouches);return e & (Tt | St) && (i = w(i.concat(n), "identifier", !0)), [i, n];
    }function W() {
        this.evTarget = Yt, this.targetIds = {}, T.apply(this, arguments);
    }function F(t, e) {
        var i = b(t.touches),
            n = this.targetIds;if (e & (xt | Ct) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];var o,
            a,
            r = b(t.changedTouches),
            s = [],
            l = this.target;if (a = i.filter(function (t) {
            return v(t.target, l);
        }), e === xt) for (o = 0; o < a.length;) {
            n[a[o].identifier] = !0, o++;
        }for (o = 0; o < r.length;) {
            n[r[o].identifier] && s.push(r[o]), e & (Tt | St) && delete n[r[o].identifier], o++;
        }return s.length ? [w(a.concat(s), "identifier", !0), s] : void 0;
    }function Q() {
        T.apply(this, arguments);var t = u(this.handler, this);this.touch = new W(this.manager, t), this.mouse = new L(this.manager, t);
    }function X(t, e) {
        this.manager = t, this.set(e);
    }function R(t) {
        if (m(t, Kt)) return Kt;var e = m(t, te),
            i = m(t, ee);return e && i ? te + " " + ee : e || i ? e ? te : ee : m(t, Jt) ? Jt : Zt;
    }function Y(t) {
        this.id = x(), this.manager = null, this.options = l(t || {}, this.defaults), this.options.enable = p(this.options.enable, !0), this.state = ie, this.simultaneous = {}, this.requireFail = [];
    }function B(t) {
        return t & se ? "cancel" : t & ae ? "end" : t & oe ? "move" : t & ne ? "start" : "";
    }function U(t) {
        return t == _t ? "down" : t == Et ? "up" : t == At ? "left" : t == Ot ? "right" : "";
    }function G(t, e) {
        var i = e.manager;return i ? i.get(t) : t;
    }function Z() {
        Y.apply(this, arguments);
    }function J() {
        Z.apply(this, arguments), this.pX = null, this.pY = null;
    }function K() {
        Z.apply(this, arguments);
    }function tt() {
        Y.apply(this, arguments), this._timer = null, this._input = null;
    }function et() {
        Z.apply(this, arguments);
    }function it() {
        Z.apply(this, arguments);
    }function nt() {
        Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }function ot(t, e) {
        return e = e || {}, e.recognizers = p(e.recognizers, ot.defaults.preset), new at(t, e);
    }function at(t, e) {
        e = e || {}, this.options = l(e, ot.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = S(this), this.touchAction = new X(this, this.options.touchAction), rt(this, !0), r(e.recognizers, function (t) {
            var e = this.add(new t[0](t[1]));t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
        }, this);
    }function rt(t, e) {
        var i = t.element;r(t.options.cssProps, function (t, n) {
            i.style[k(i.style, n)] = e ? t : "";
        });
    }function st(t, i) {
        var n = e.createEvent("Event");n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n);
    }var lt = ["", "webkit", "moz", "MS", "ms", "o"],
        ct = e.createElement("div"),
        ut = "function",
        dt = Math.round,
        pt = Math.abs,
        ht = Date.now,
        ft = 1,
        vt = /mobile|tablet|ip(ad|hone|od)|android/i,
        mt = "ontouchstart" in t,
        gt = k(t, "PointerEvent") !== n,
        yt = mt && vt.test(navigator.userAgent),
        bt = "touch",
        wt = "mouse",
        kt = 25,
        xt = 1,
        Ct = 2,
        Tt = 4,
        St = 8,
        Pt = 1,
        At = 2,
        Ot = 4,
        Et = 8,
        _t = 16,
        Mt = At | Ot,
        It = Et | _t,
        Dt = Mt | It,
        qt = ["x", "y"],
        zt = ["clientX", "clientY"];T.prototype = { handler: function handler() {}, init: function init() {
            this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(C(this.element), this.evWin, this.domHandler);
        }, destroy: function destroy() {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(C(this.element), this.evWin, this.domHandler);
        } };var Vt = { mousedown: xt, mousemove: Ct, mouseup: Tt },
        Ht = "mousedown",
        Lt = "mousemove mouseup";c(L, T, { handler: function handler(t) {
            var e = Vt[t.type];e & xt && 0 === t.button && (this.pressed = !0), e & Ct && 1 !== t.which && (e = Tt), this.pressed && this.allow && (e & Tt && (this.pressed = !1), this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: wt, srcEvent: t }));
        } });var jt = { pointerdown: xt, pointermove: Ct, pointerup: Tt, pointercancel: St, pointerout: St },
        $t = { 2: bt, 3: "pen", 4: wt, 5: "kinect" },
        Nt = "pointerdown",
        Wt = "pointermove pointerup pointercancel";t.MSPointerEvent && (Nt = "MSPointerDown", Wt = "MSPointerMove MSPointerUp MSPointerCancel"), c(j, T, { handler: function handler(t) {
            var e = this.store,
                i = !1,
                n = t.type.toLowerCase().replace("ms", ""),
                o = jt[n],
                a = $t[t.pointerType] || t.pointerType,
                r = a == bt,
                s = y(e, t.pointerId, "pointerId");o & xt && (0 === t.button || r) ? 0 > s && (e.push(t), s = e.length - 1) : o & (Tt | St) && (i = !0), 0 > s || (e[s] = t, this.callback(this.manager, o, { pointers: e, changedPointers: [t], pointerType: a, srcEvent: t }), i && e.splice(s, 1));
        } });var Ft = { touchstart: xt, touchmove: Ct, touchend: Tt, touchcancel: St },
        Qt = "touchstart",
        Xt = "touchstart touchmove touchend touchcancel";c($, T, { handler: function handler(t) {
            var e = Ft[t.type];if (e === xt && (this.started = !0), this.started) {
                var i = N.call(this, t, e);e & (Tt | St) && 0 == i[0].length - i[1].length && (this.started = !1), this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: bt, srcEvent: t });
            }
        } });var Rt = { touchstart: xt, touchmove: Ct, touchend: Tt, touchcancel: St },
        Yt = "touchstart touchmove touchend touchcancel";c(W, T, { handler: function handler(t) {
            var e = Rt[t.type],
                i = F.call(this, t, e);i && this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: bt, srcEvent: t });
        } }), c(Q, T, { handler: function handler(t, e, i) {
            var n = i.pointerType == bt,
                o = i.pointerType == wt;if (n) this.mouse.allow = !1;else if (o && !this.mouse.allow) return;e & (Tt | St) && (this.mouse.allow = !0), this.callback(t, e, i);
        }, destroy: function destroy() {
            this.touch.destroy(), this.mouse.destroy();
        } });var Bt = k(ct.style, "touchAction"),
        Ut = Bt !== n,
        Gt = "compute",
        Zt = "auto",
        Jt = "manipulation",
        Kt = "none",
        te = "pan-x",
        ee = "pan-y";X.prototype = { set: function set(t) {
            t == Gt && (t = this.compute()), Ut && (this.manager.element.style[Bt] = t), this.actions = t.toLowerCase().trim();
        }, update: function update() {
            this.set(this.manager.options.touchAction);
        }, compute: function compute() {
            var t = [];return r(this.manager.recognizers, function (e) {
                d(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
            }), R(t.join(" "));
        }, preventDefaults: function preventDefaults(t) {
            if (!Ut) {
                var e = t.srcEvent,
                    i = t.offsetDirection;if (this.manager.session.prevented) return void e.preventDefault();var n = this.actions,
                    o = m(n, Kt),
                    a = m(n, ee),
                    r = m(n, te);return o || a && i & Mt || r && i & It ? this.preventSrc(e) : void 0;
            }
        }, preventSrc: function preventSrc(t) {
            this.manager.session.prevented = !0, t.preventDefault();
        } };var ie = 1,
        ne = 2,
        oe = 4,
        ae = 8,
        re = ae,
        se = 16;Y.prototype = { defaults: {}, set: function set(t) {
            return s(this.options, t), this.manager && this.manager.touchAction.update(), this;
        }, recognizeWith: function recognizeWith(t) {
            if (a(t, "recognizeWith", this)) return this;var e = this.simultaneous;return t = G(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this;
        }, dropRecognizeWith: function dropRecognizeWith(t) {
            return a(t, "dropRecognizeWith", this) ? this : (t = G(t, this), delete this.simultaneous[t.id], this);
        }, requireFailure: function requireFailure(t) {
            if (a(t, "requireFailure", this)) return this;var e = this.requireFail;return t = G(t, this), -1 === y(e, t) && (e.push(t), t.requireFailure(this)), this;
        }, dropRequireFailure: function dropRequireFailure(t) {
            if (a(t, "dropRequireFailure", this)) return this;t = G(t, this);var e = y(this.requireFail, t);return e > -1 && this.requireFail.splice(e, 1), this;
        }, hasRequireFailures: function hasRequireFailures() {
            return this.requireFail.length > 0;
        }, canRecognizeWith: function canRecognizeWith(t) {
            return !!this.simultaneous[t.id];
        }, emit: function emit(t) {
            function e(e) {
                i.manager.emit(i.options.event + (e ? B(n) : ""), t);
            }var i = this,
                n = this.state;ae > n && e(!0), e(), n >= ae && e(!0);
        }, tryEmit: function tryEmit(t) {
            return this.canEmit() ? this.emit(t) : void (this.state = 32);
        }, canEmit: function canEmit() {
            for (var t = 0; t < this.requireFail.length;) {
                if (!(this.requireFail[t].state & (32 | ie))) return !1;t++;
            }return !0;
        }, recognize: function recognize(t) {
            var e = s({}, t);return d(this.options.enable, [this, e]) ? (this.state & (re | se | 32) && (this.state = ie), this.state = this.process(e), void (this.state & (ne | oe | ae | se) && this.tryEmit(e))) : (this.reset(), void (this.state = 32));
        }, process: function process() {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, c(Z, Y, { defaults: { pointers: 1 }, attrTest: function attrTest(t) {
            var e = this.options.pointers;return 0 === e || t.pointers.length === e;
        }, process: function process(t) {
            var e = this.state,
                i = t.eventType,
                n = e & (ne | oe),
                o = this.attrTest(t);return n && (i & St || !o) ? e | se : n || o ? i & Tt ? e | ae : e & ne ? e | oe : ne : 32;
        } }), c(J, Z, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Dt }, getTouchAction: function getTouchAction() {
            var t = this.options.direction,
                e = [];return t & Mt && e.push(ee), t & It && e.push(te), e;
        }, directionTest: function directionTest(t) {
            var e = this.options,
                i = !0,
                n = t.distance,
                o = t.direction,
                a = t.deltaX,
                r = t.deltaY;return o & e.direction || (e.direction & Mt ? (o = 0 === a ? Pt : 0 > a ? At : Ot, i = a != this.pX, n = Math.abs(t.deltaX)) : (o = 0 === r ? Pt : 0 > r ? Et : _t, i = r != this.pY, n = Math.abs(t.deltaY))), t.direction = o, i && n > e.threshold && o & e.direction;
        }, attrTest: function attrTest(t) {
            return Z.prototype.attrTest.call(this, t) && (this.state & ne || !(this.state & ne) && this.directionTest(t));
        }, emit: function emit(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;var e = U(t.direction);e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t);
        } }), c(K, Z, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
            return [Kt];
        }, attrTest: function attrTest(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ne);
        }, emit: function emit(t) {
            if (this._super.emit.call(this, t), 1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";this.manager.emit(this.options.event + e, t);
            }
        } }), c(tt, Y, { defaults: { event: "press", pointers: 1, time: 500, threshold: 5 }, getTouchAction: function getTouchAction() {
            return [Zt];
        }, process: function process(t) {
            var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                a = t.deltaTime > e.time;if (this._input = t, !n || !i || t.eventType & (Tt | St) && !a) this.reset();else if (t.eventType & xt) this.reset(), this._timer = o(function () {
                this.state = re, this.tryEmit();
            }, e.time, this);else if (t.eventType & Tt) return re;return 32;
        }, reset: function reset() {
            clearTimeout(this._timer);
        }, emit: function emit(t) {
            this.state === re && (t && t.eventType & Tt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = ht(), this.manager.emit(this.options.event, this._input)));
        } }), c(et, Z, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
            return [Kt];
        }, attrTest: function attrTest(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ne);
        } }), c(it, Z, { defaults: { event: "swipe", threshold: 10, velocity: .65, direction: Mt | It, pointers: 1 }, getTouchAction: function getTouchAction() {
            return J.prototype.getTouchAction.call(this);
        }, attrTest: function attrTest(t) {
            var e,
                i = this.options.direction;return i & (Mt | It) ? e = t.velocity : i & Mt ? e = t.velocityX : i & It && (e = t.velocityY), this._super.attrTest.call(this, t) && i & t.direction && t.distance > this.options.threshold && pt(e) > this.options.velocity && t.eventType & Tt;
        }, emit: function emit(t) {
            var e = U(t.direction);e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
        } }), c(nt, Y, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 2, posThreshold: 10 }, getTouchAction: function getTouchAction() {
            return [Jt];
        }, process: function process(t) {
            var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                a = t.deltaTime < e.time;if (this.reset(), t.eventType & xt && 0 === this.count) return this.failTimeout();if (n && a && i) {
                if (t.eventType != Tt) return this.failTimeout();var r = !this.pTime || t.timeStamp - this.pTime < e.interval,
                    s = !this.pCenter || q(this.pCenter, t.center) < e.posThreshold;if (this.pTime = t.timeStamp, this.pCenter = t.center, s && r ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = o(function () {
                    this.state = re, this.tryEmit();
                }, e.interval, this), ne) : re;
            }return 32;
        }, failTimeout: function failTimeout() {
            return this._timer = o(function () {
                this.state = 32;
            }, this.options.interval, this), 32;
        }, reset: function reset() {
            clearTimeout(this._timer);
        }, emit: function emit() {
            this.state == re && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
        } }), ot.VERSION = "2.0.4", ot.defaults = { domEvents: !1, touchAction: Gt, enable: !0, inputTarget: null, inputClass: null, preset: [[et, { enable: !1 }], [K, { enable: !1 }, ["rotate"]], [it, { direction: Mt }], [J, { direction: Mt }, ["swipe"]], [nt], [nt, { event: "doubletap", taps: 2 }, ["tap"]], [tt]], cssProps: { userSelect: "default", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };at.prototype = { set: function set(t) {
            return s(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
        }, stop: function stop(t) {
            this.session.stopped = t ? 2 : 1;
        }, recognize: function recognize(t) {
            var e = this.session;if (!e.stopped) {
                this.touchAction.preventDefaults(t);var i,
                    n = this.recognizers,
                    o = e.curRecognizer;(!o || o && o.state & re) && (o = e.curRecognizer = null);for (var a = 0; a < n.length;) {
                    i = n[a], 2 === e.stopped || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t), !o && i.state & (ne | oe | ae) && (o = e.curRecognizer = i), a++;
                }
            }
        }, get: function get(t) {
            if (t instanceof Y) return t;for (var e = this.recognizers, i = 0; i < e.length; i++) {
                if (e[i].options.event == t) return e[i];
            }return null;
        }, add: function add(t) {
            if (a(t, "add", this)) return this;var e = this.get(t.options.event);return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t;
        }, remove: function remove(t) {
            if (a(t, "remove", this)) return this;var e = this.recognizers;return t = this.get(t), e.splice(y(e, t), 1), this.touchAction.update(), this;
        }, on: function on(t, e) {
            var i = this.handlers;return r(g(t), function (t) {
                i[t] = i[t] || [], i[t].push(e);
            }), this;
        }, off: function off(t, e) {
            var i = this.handlers;return r(g(t), function (t) {
                e ? i[t].splice(y(i[t], e), 1) : delete i[t];
            }), this;
        }, emit: function emit(t, e) {
            this.options.domEvents && st(t, e);var i = this.handlers[t] && this.handlers[t].slice();if (i && i.length) {
                e.type = t, e.preventDefault = function () {
                    e.srcEvent.preventDefault();
                };for (var n = 0; n < i.length;) {
                    i[n](e), n++;
                }
            }
        }, destroy: function destroy() {
            this.element && rt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
        } }, s(ot, { INPUT_START: xt, INPUT_MOVE: Ct, INPUT_END: Tt, INPUT_CANCEL: St, STATE_POSSIBLE: ie, STATE_BEGAN: ne, STATE_CHANGED: oe, STATE_ENDED: ae, STATE_RECOGNIZED: re, STATE_CANCELLED: se, STATE_FAILED: 32, DIRECTION_NONE: Pt, DIRECTION_LEFT: At, DIRECTION_RIGHT: Ot, DIRECTION_UP: Et, DIRECTION_DOWN: _t, DIRECTION_HORIZONTAL: Mt, DIRECTION_VERTICAL: It, DIRECTION_ALL: Dt, Manager: at, Input: T, TouchAction: X, TouchInput: W, MouseInput: L, PointerEventInput: j, TouchMouseInput: Q, SingleTouchInput: $, Recognizer: Y, AttrRecognizer: Z, Tap: nt, Pan: J, Swipe: it, Pinch: K, Rotate: et, Press: tt, on: h, off: f, each: r, merge: l, extend: s, inherit: c, bindFn: u, prefixed: k }), (typeof define === "undefined" ? "undefined" : _typeof(define)) == ut && define.amd ? define(function () {
        return ot;
    }) : "undefined" != typeof module && module.exports ? module.exports = ot : t.Hammer = ot;
}(window, document), function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer);
}(function (t, e) {
    function i(i, n) {
        var o = t(i);o.data("hammer") || o.data("hammer", new e(o[0], n));
    }t.fn.hammer = function (t) {
        return this.each(function () {
            i(this, t);
        });
    }, e.Manager.prototype.emit = function (e) {
        return function (i, n) {
            e.call(this, i, n), t(this.element).trigger({ type: i, gesture: n });
        };
    }(e.Manager.prototype.emit);
}), function (t) {
    t.Package ? Materialize = {} : t.Materialize = {};
}(window), "undefined" == typeof exports || exports.nodeType || ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = Materialize), exports.default = Materialize), function (t) {
    for (var e = 0, i = ["webkit", "moz"], n = t.requestAnimationFrame, o = t.cancelAnimationFrame, a = i.length; --a >= 0 && !n;) {
        n = t[i[a] + "RequestAnimationFrame"], o = t[i[a] + "CancelRequestAnimationFrame"];
    }n && o || (n = function n(t) {
        var i = +Date.now(),
            n = Math.max(e + 16, i);return setTimeout(function () {
            t(e = n);
        }, n - i);
    }, o = clearTimeout), t.requestAnimationFrame = n, t.cancelAnimationFrame = o;
}(window), Materialize.objectSelectorString = function (t) {
    return ((t.prop("tagName") || "") + (t.attr("id") || "") + (t.attr("class") || "")).replace(/\s/g, "");
}, Materialize.guid = function () {
    function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }return function () {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
    };
}(), Materialize.escapeHash = function (t) {
    return t.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
}, Materialize.elementOrParentIsFixed = function (t) {
    var e = $(t),
        i = !1;return e.add(e.parents()).each(function () {
        if ("fixed" === $(this).css("position")) return i = !0, !1;
    }), i;
};var getTime = Date.now || function () {
    return new Date().getTime();
};Materialize.throttle = function (t, e, i) {
    var n,
        o,
        a,
        r = null,
        s = 0;i || (i = {});var l = function l() {
        s = !1 === i.leading ? 0 : getTime(), r = null, a = t.apply(n, o), n = o = null;
    };return function () {
        var c = getTime();s || !1 !== i.leading || (s = c);var u = e - (c - s);return n = this, o = arguments, u <= 0 ? (clearTimeout(r), r = null, s = c, a = t.apply(n, o), n = o = null) : r || !1 === i.trailing || (r = setTimeout(l, u)), a;
    };
};var Vel;Vel = jQuery ? jQuery.Velocity : $ ? $.Velocity : Velocity, Materialize.Vel = Vel || Velocity, function (t) {
    t.fn.collapsible = function (e, i) {
        var n = { accordion: void 0, onOpen: void 0, onClose: void 0 },
            o = e;return e = t.extend(n, e), this.each(function () {
            function n(e) {
                p = d.find("> li > .collapsible-header"), e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
                        t(this).css("height", "");
                    } }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
                        t(this).css("height", "");
                    } }), p.not(e).removeClass("active").parent().removeClass("active"), p.not(e).parent().children(".collapsible-body").stop(!0, !1).each(function () {
                    t(this).is(":visible") && t(this).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
                            t(this).css("height", ""), s(t(this).siblings(".collapsible-header"));
                        } });
                });
            }function a(e) {
                e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
                        t(this).css("height", "");
                    } }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function complete() {
                        t(this).css("height", "");
                    } });
            }function r(t, i) {
                i || t.toggleClass("active"), e.accordion || "accordion" === h || void 0 === h ? n(t) : a(t), s(t);
            }function s(t) {
                t.hasClass("active") ? "function" == typeof e.onOpen && e.onOpen.call(this, t.parent()) : "function" == typeof e.onClose && e.onClose.call(this, t.parent());
            }function l(t) {
                return c(t).length > 0;
            }function c(t) {
                return t.closest("li > .collapsible-header");
            }function u() {
                d.off("click.collapse", "> li > .collapsible-header");
            }var d = t(this),
                p = t(this).find("> li > .collapsible-header"),
                h = d.data("collapsible");if ("destroy" !== o) {
                if (i >= 0 && i < p.length) {
                    var f = p.eq(i);f.length && ("open" === o || "close" === o && f.hasClass("active")) && r(f);
                } else u(), d.on("click.collapse", "> li > .collapsible-header", function (e) {
                    var i = t(e.target);l(i) && (i = c(i)), r(i);
                }), e.accordion || "accordion" === h || void 0 === h ? r(p.filter(".active").first(), !0) : p.filter(".active").each(function () {
                    r(t(this), !0);
                });
            } else u();
        });
    }, t(document).ready(function () {
        t(".collapsible").collapsible();
    });
}(jQuery), function (t) {
    t.fn.scrollTo = function (e) {
        return t(this).scrollTop(t(this).scrollTop() - t(this).offset().top + t(e).offset().top), this;
    }, t.fn.dropdown = function (e) {
        var i = { inDuration: 300, outDuration: 225, constrainWidth: !0, hover: !1, gutter: 0, belowOrigin: !1, alignment: "left", stopPropagation: !1 };return "open" === e ? (this.each(function () {
            t(this).trigger("open");
        }), !1) : "close" === e ? (this.each(function () {
            t(this).trigger("close");
        }), !1) : void this.each(function () {
            function n() {
                void 0 !== r.data("induration") && (s.inDuration = r.data("induration")), void 0 !== r.data("outduration") && (s.outDuration = r.data("outduration")), void 0 !== r.data("constrainwidth") && (s.constrainWidth = r.data("constrainwidth")), void 0 !== r.data("hover") && (s.hover = r.data("hover")), void 0 !== r.data("gutter") && (s.gutter = r.data("gutter")), void 0 !== r.data("beloworigin") && (s.belowOrigin = r.data("beloworigin")), void 0 !== r.data("alignment") && (s.alignment = r.data("alignment")), void 0 !== r.data("stoppropagation") && (s.stopPropagation = r.data("stoppropagation"));
            }function o(e) {
                "focus" === e && (l = !0), n(), c.addClass("active"), r.addClass("active");var i = r[0].getBoundingClientRect().width;!0 === s.constrainWidth ? c.css("width", i) : c.css("white-space", "nowrap");var o = window.innerHeight,
                    u = r.innerHeight(),
                    d = r.offset().left,
                    p = r.offset().top - t(window).scrollTop(),
                    h = s.alignment,
                    f = 0,
                    v = 0,
                    m = 0;!0 === s.belowOrigin && (m = u);var g = 0,
                    y = 0,
                    b = r.parent();if (b.is("body") || (b[0].scrollHeight > b[0].clientHeight && (g = b[0].scrollTop), b[0].scrollWidth > b[0].clientWidth && (y = b[0].scrollLeft)), d + c.innerWidth() > t(window).width() ? h = "right" : d - c.innerWidth() + r.innerWidth() < 0 && (h = "left"), p + c.innerHeight() > o) if (p + u - c.innerHeight() < 0) {
                    var w = o - p - m;c.css("max-height", w);
                } else m || (m += u), m -= c.innerHeight();"left" === h ? (f = s.gutter, v = r.position().left + f) : "right" === h && (c.stop(!0, !0).css({ opacity: 0, left: 0 }), v = r.position().left + i - c.width() + (f = -s.gutter)), c.css({ position: "absolute", top: r.position().top + m + g, left: v + y }), c.slideDown({ queue: !1, duration: s.inDuration, easing: "easeOutCubic", complete: function complete() {
                        t(this).css("height", "");
                    } }).animate({ opacity: 1 }, { queue: !1, duration: s.inDuration, easing: "easeOutSine" }), setTimeout(function () {
                    t(document).on("click." + c.attr("id"), function (e) {
                        a(), t(document).off("click." + c.attr("id"));
                    });
                }, 0);
            }function a() {
                l = !1, c.fadeOut(s.outDuration), c.removeClass("active"), r.removeClass("active"), t(document).off("click." + c.attr("id")), setTimeout(function () {
                    c.css("max-height", "");
                }, s.outDuration);
            }var r = t(this),
                s = t.extend({}, i, e),
                l = !1,
                c = t("#" + r.attr("data-activates"));if (n(), r.after(c), s.hover) {
                var u = !1;r.off("click." + r.attr("id")), r.on("mouseenter", function (t) {
                    !1 === u && (o(), u = !0);
                }), r.on("mouseleave", function (e) {
                    var i = e.toElement || e.relatedTarget;t(i).closest(".dropdown-content").is(c) || (c.stop(!0, !0), a(), u = !1);
                }), c.on("mouseleave", function (e) {
                    var i = e.toElement || e.relatedTarget;t(i).closest(".dropdown-button").is(r) || (c.stop(!0, !0), a(), u = !1);
                });
            } else r.off("click." + r.attr("id")), r.on("click." + r.attr("id"), function (e) {
                l || (r[0] != e.currentTarget || r.hasClass("active") || 0 !== t(e.target).closest(".dropdown-content").length ? r.hasClass("active") && (a(), t(document).off("click." + c.attr("id"))) : (e.preventDefault(), s.stopPropagation && e.stopPropagation(), o("click")));
            });r.on("open", function (t, e) {
                o(e);
            }), r.on("close", a);
        });
    }, t(document).ready(function () {
        t(".dropdown-button").dropdown();
    });
}(jQuery), function (t, e) {
    "use strict";
    var i = { opacity: .5, inDuration: 250, outDuration: 250, ready: void 0, complete: void 0, dismissible: !0, startingTop: "4%", endingTop: "10%" },
        n = function () {
        function n(e, i) {
            _classCallCheck(this, n), e[0].M_Modal && e[0].M_Modal.destroy(), this.$el = e, this.options = t.extend({}, n.defaults, i), this.isOpen = !1, this.$el[0].M_Modal = this, this.id = e.attr("id"), this.openingTrigger = void 0, this.$overlay = t('<div class="modal-overlay"></div>'), n._increment++, n._count++, this.$overlay[0].style.zIndex = 1e3 + 2 * n._increment, this.$el[0].style.zIndex = 1e3 + 2 * n._increment + 1, this.setupEventHandlers();
        }return _createClass(n, [{ key: "getInstance", value: function value() {
                return this;
            } }, { key: "destroy", value: function value() {
                this.removeEventHandlers(), this.$el[0].removeAttribute("style"), this.$overlay[0].parentNode && this.$overlay[0].parentNode.removeChild(this.$overlay[0]), this.$el[0].M_Modal = void 0, n._count--;
            } }, { key: "setupEventHandlers", value: function value() {
                this.handleOverlayClickBound = this.handleOverlayClick.bind(this), this.handleModalCloseClickBound = this.handleModalCloseClick.bind(this), 1 === n._count && document.body.addEventListener("click", this.handleTriggerClick), this.$overlay[0].addEventListener("click", this.handleOverlayClickBound), this.$el[0].addEventListener("click", this.handleModalCloseClickBound);
            } }, { key: "removeEventHandlers", value: function value() {
                0 === n._count && document.body.removeEventListener("click", this.handleTriggerClick), this.$overlay[0].removeEventListener("click", this.handleOverlayClickBound), this.$el[0].removeEventListener("click", this.handleModalCloseClickBound);
            } }, { key: "handleTriggerClick", value: function value(e) {
                var i = t(e.target).closest(".modal-trigger");if (e.target && i.length) {
                    var n = i[0].getAttribute("href");n = n ? n.slice(1) : i[0].getAttribute("data-target");var o = document.getElementById(n).M_Modal;o && o.open(i), e.preventDefault();
                }
            } }, { key: "handleOverlayClick", value: function value() {
                this.options.dismissible && this.close();
            } }, { key: "handleModalCloseClick", value: function value(e) {
                var i = t(e.target).closest(".modal-close");e.target && i.length && this.close();
            } }, { key: "handleKeydown", value: function value(t) {
                27 === t.keyCode && this.options.dismissible && this.close();
            } }, { key: "animateIn", value: function value() {
                var i = this;t.extend(this.$el[0].style, { display: "block", opacity: 0 }), t.extend(this.$overlay[0].style, { display: "block", opacity: 0 }), e(this.$overlay[0], { opacity: this.options.opacity }, { duration: this.options.inDuration, queue: !1, ease: "easeOutCubic" });var n = { duration: this.options.inDuration, queue: !1, ease: "easeOutCubic", complete: function complete() {
                        "function" == typeof i.options.ready && i.options.ready.call(i, i.$el, i.openingTrigger);
                    } };this.$el[0].classList.contains("bottom-sheet") ? e(this.$el[0], { bottom: 0, opacity: 1 }, n) : (e.hook(this.$el[0], "scaleX", .7), this.$el[0].style.top = this.options.startingTop, e(this.$el[0], { top: this.options.endingTop, opacity: 1, scaleX: 1 }, n));
            } }, { key: "animateOut", value: function value() {
                var t = this;e(this.$overlay[0], { opacity: 0 }, { duration: this.options.outDuration, queue: !1, ease: "easeOutQuart" });var i = { duration: this.options.outDuration, queue: !1, ease: "easeOutCubic", complete: function complete() {
                        t.$el[0].style.display = "none", "function" == typeof t.options.complete && t.options.complete.call(t, t.$el), t.$overlay[0].parentNode.removeChild(t.$overlay[0]);
                    } };this.$el[0].classList.contains("bottom-sheet") ? e(this.$el[0], { bottom: "-100%", opacity: 0 }, i) : e(this.$el[0], { top: this.options.startingTop, opacity: 0, scaleX: .7 }, i);
            } }, { key: "open", value: function value(t) {
                if (!this.isOpen) {
                    this.isOpen = !0;var e = document.body;return e.style.overflow = "hidden", this.$el[0].classList.add("open"), e.appendChild(this.$overlay[0]), this.openingTrigger = t || void 0, this.options.dismissible && (this.handleKeydownBound = this.handleKeydown.bind(this), document.addEventListener("keydown", this.handleKeydownBound)), this.animateIn(), this;
                }
            } }, { key: "close", value: function value() {
                if (this.isOpen) return this.isOpen = !1, this.$el[0].classList.remove("open"), document.body.style.overflow = "", this.options.dismissible && document.removeEventListener("keydown", this.handleKeydownBound), this.animateOut(), this;
            } }], [{ key: "init", value: function value(e, i) {
                var o = [];return e.each(function () {
                    o.push(new n(t(this), i));
                }), o;
            } }, { key: "defaults", get: function get() {
                return i;
            } }]), n;
    }();n._increment = 0, n._count = 0, Materialize.Modal = n, t.fn.modal = function (e) {
        return n.prototype[e] ? "get" === e.slice(0, 3) ? this.first()[0].M_Modal[e]() : this.each(function () {
            this.M_Modal[e]();
        }) : "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && e ? void t.error("Method " + e + " does not exist on jQuery.modal") : (n.init(this, arguments[0]), this);
    };
}(jQuery, Materialize.Vel), function (t) {
    t.fn.materialbox = function () {
        return this.each(function () {
            function e() {
                a = !1;var e = s.parent(".material-placeholder"),
                    n = (window.innerWidth, window.innerHeight, s.data("width")),
                    l = s.data("height");s.velocity("stop", !0), t("#materialbox-overlay").velocity("stop", !0), t(".materialbox-caption").velocity("stop", !0), t(window).off("scroll.materialbox"), t(document).off("keyup.materialbox"), t(window).off("resize.materialbox"), t("#materialbox-overlay").velocity({ opacity: 0 }, { duration: r, queue: !1, easing: "easeOutQuad", complete: function complete() {
                        o = !1, t(this).remove();
                    } }), s.velocity({ width: n, height: l, left: 0, top: 0 }, { duration: r, queue: !1, easing: "easeOutQuad", complete: function complete() {
                        e.css({ height: "", width: "", position: "", top: "", left: "" }), s.removeAttr("style"), s.attr("style", c), s.removeClass("active"), a = !0, i && i.css("overflow", "");
                    } }), t(".materialbox-caption").velocity({ opacity: 0 }, { duration: r, queue: !1, easing: "easeOutQuad", complete: function complete() {
                        t(this).remove();
                    } });
            }if (!t(this).hasClass("initialized")) {
                t(this).addClass("initialized");var i,
                    n,
                    o = !1,
                    a = !0,
                    r = 200,
                    s = t(this),
                    l = t("<div></div>").addClass("material-placeholder"),
                    c = s.attr("style");s.wrap(l), s.on("click", function () {
                    var r = s.parent(".material-placeholder"),
                        l = window.innerWidth,
                        c = window.innerHeight,
                        u = s.width(),
                        d = s.height();if (!1 === a) return e(), !1;if (o && !0 === a) return e(), !1;a = !1, s.addClass("active"), o = !0, r.css({ width: r[0].getBoundingClientRect().width, height: r[0].getBoundingClientRect().height, position: "relative", top: 0, left: 0 }), i = void 0, n = r[0].parentNode;for (; null !== n && !t(n).is(document);) {
                        var p = t(n);"visible" !== p.css("overflow") && (p.css("overflow", "visible"), i = void 0 === i ? p : i.add(p)), n = n.parentNode;
                    }s.css({ position: "absolute", "z-index": 1e3, "will-change": "left, top, width, height" }).data("width", u).data("height", d);var h = t('<div id="materialbox-overlay"></div>').css({ opacity: 0 }).click(function () {
                        !0 === a && e();
                    });s.before(h);var f = h[0].getBoundingClientRect();if (h.css({ width: l, height: c, left: -1 * f.left, top: -1 * f.top }), h.velocity({ opacity: 1 }, { duration: 275, queue: !1, easing: "easeOutQuad" }), "" !== s.data("caption")) {
                        var v = t('<div class="materialbox-caption"></div>');v.text(s.data("caption")), t("body").append(v), v.css({ display: "inline" }), v.velocity({ opacity: 1 }, { duration: 275, queue: !1, easing: "easeOutQuad" });
                    }var m = 0,
                        g = 0;u / l > d / c ? (m = .9 * l, g = .9 * l * (d / u)) : (m = .9 * c * (u / d), g = .9 * c), s.hasClass("responsive-img") ? s.velocity({ "max-width": m, width: u }, { duration: 0, queue: !1, complete: function complete() {
                            s.css({ left: 0, top: 0 }).velocity({ height: g, width: m, left: t(document).scrollLeft() + l / 2 - s.parent(".material-placeholder").offset().left - m / 2, top: t(document).scrollTop() + c / 2 - s.parent(".material-placeholder").offset().top - g / 2 }, { duration: 275, queue: !1, easing: "easeOutQuad", complete: function complete() {
                                    a = !0;
                                } });
                        } }) : s.css("left", 0).css("top", 0).velocity({ height: g, width: m, left: t(document).scrollLeft() + l / 2 - s.parent(".material-placeholder").offset().left - m / 2, top: t(document).scrollTop() + c / 2 - s.parent(".material-placeholder").offset().top - g / 2 }, { duration: 275, queue: !1, easing: "easeOutQuad", complete: function complete() {
                            a = !0;
                        } }), t(window).on("scroll.materialbox", function () {
                        o && e();
                    }), t(window).on("resize.materialbox", function () {
                        o && e();
                    }), t(document).on("keyup.materialbox", function (t) {
                        27 === t.keyCode && !0 === a && o && e();
                    });
                });
            }
        });
    }, t(document).ready(function () {
        t(".materialboxed").materialbox();
    });
}(jQuery), function (t) {
    t.fn.parallax = function () {
        var e = t(window).width();return this.each(function (i) {
            function n(i) {
                var n;n = e < 601 ? o.height() > 0 ? o.height() : o.children("img").height() : o.height() > 0 ? o.height() : 500;var a = o.children("img").first(),
                    r = a.height() - n,
                    s = o.offset().top + n,
                    l = o.offset().top,
                    c = t(window).scrollTop(),
                    u = window.innerHeight,
                    d = (c + u - l) / (n + u),
                    p = Math.round(r * d);i && a.css("display", "block"), s > c && l < c + u && a.css("transform", "translate3D(-50%," + p + "px, 0)");
            }var o = t(this);o.addClass("parallax"), o.children("img").one("load", function () {
                n(!0);
            }).each(function () {
                this.complete && t(this).trigger("load");
            }), t(window).scroll(function () {
                e = t(window).width(), n(!1);
            }), t(window).resize(function () {
                e = t(window).width(), n(!1);
            });
        });
    };
}(jQuery), function (t) {
    var e = { init: function init(e) {
            var i = { onShow: null, swipeable: !1, responsiveThreshold: 1 / 0 };e = t.extend(i, e);var n = Materialize.objectSelectorString(t(this));return this.each(function (i) {
                var o,
                    a,
                    r,
                    s,
                    l,
                    c = n + i,
                    u = t(this),
                    d = t(window).width(),
                    p = u.find("li.tab a"),
                    h = u.width(),
                    f = t(),
                    v = Math.max(h, u[0].scrollWidth) / p.length,
                    m = 0,
                    g = 0,
                    y = !1,
                    b = function b(t) {
                    return Math.ceil(h - t.position().left - t[0].getBoundingClientRect().width - u.scrollLeft());
                },
                    w = function w(t) {
                    return Math.floor(t.position().left + u.scrollLeft());
                },
                    k = function k(t) {
                    m - t >= 0 ? (s.velocity({ right: b(o) }, { duration: 300, queue: !1, easing: "easeOutQuad" }), s.velocity({ left: w(o) }, { duration: 300, queue: !1, easing: "easeOutQuad", delay: 90 })) : (s.velocity({ left: w(o) }, { duration: 300, queue: !1, easing: "easeOutQuad" }), s.velocity({ right: b(o) }, { duration: 300, queue: !1, easing: "easeOutQuad", delay: 90 }));
                };e.swipeable && d > e.responsiveThreshold && (e.swipeable = !1), 0 === (o = t(p.filter('[href="' + location.hash + '"]'))).length && (o = t(this).find("li.tab a.active").first()), 0 === o.length && (o = t(this).find("li.tab a").first()), o.addClass("active"), (m = p.index(o)) < 0 && (m = 0), void 0 !== o[0] && (a = t(o[0].hash)).addClass("active"), u.find(".indicator").length || u.append('<li class="indicator"></li>'), s = u.find(".indicator"), u.append(s), u.is(":visible") && setTimeout(function () {
                    s.css({ right: b(o) }), s.css({ left: w(o) });
                }, 0), t(window).off("resize.tabs-" + c).on("resize.tabs-" + c, function () {
                    h = u.width(), v = Math.max(h, u[0].scrollWidth) / p.length, m < 0 && (m = 0), 0 !== v && 0 !== h && (s.css({ right: b(o) }), s.css({ left: w(o) }));
                }), e.swipeable ? (p.each(function () {
                    var e = t(Materialize.escapeHash(this.hash));e.addClass("carousel-item"), f = f.add(e);
                }), r = f.wrapAll('<div class="tabs-content carousel"></div>'), f.css("display", ""), t(".tabs-content.carousel").carousel({ fullWidth: !0, noWrap: !0, onCycleTo: function onCycleTo(t) {
                        if (!y) {
                            var i = m;m = r.index(t), o.removeClass("active"), (o = p.eq(m)).addClass("active"), k(i), "function" == typeof e.onShow && e.onShow.call(u[0], a);
                        }
                    } })) : p.not(o).each(function () {
                    t(Materialize.escapeHash(this.hash)).hide();
                }), u.off("click.tabs").on("click.tabs", "a", function (i) {
                    if (t(this).parent().hasClass("disabled")) i.preventDefault();else if (!t(this).attr("target")) {
                        y = !0, h = u.width(), v = Math.max(h, u[0].scrollWidth) / p.length, o.removeClass("active");var n = a;o = t(this), a = t(Materialize.escapeHash(this.hash)), p = u.find("li.tab a");o.position();o.addClass("active"), g = m, (m = p.index(t(this))) < 0 && (m = 0), e.swipeable ? f.length && f.carousel("set", m, function () {
                            "function" == typeof e.onShow && e.onShow.call(u[0], a);
                        }) : (void 0 !== a && (a.show(), a.addClass("active"), "function" == typeof e.onShow && e.onShow.call(this, a)), void 0 === n || n.is(a) || (n.hide(), n.removeClass("active"))), l = setTimeout(function () {
                            y = !1;
                        }, 300), k(g), i.preventDefault();
                    }
                });
            });
        }, select_tab: function select_tab(t) {
            this.find('a[href="#' + t + '"]').trigger("click");
        } };t.fn.tabs = function (i) {
        return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof i === "undefined" ? "undefined" : _typeof(i)) && i ? void t.error("Method " + i + " does not exist on jQuery.tabs") : e.init.apply(this, arguments);
    }, t(document).ready(function () {
        t("ul.tabs").tabs();
    });
}(jQuery), function (t) {
    t.fn.tooltip = function (i) {
        var n = { delay: 350, tooltip: "", position: "bottom", html: !1 };return "remove" === i ? (this.each(function () {
            t("#" + t(this).attr("data-tooltip-id")).remove(), t(this).removeAttr("data-tooltip-id"), t(this).off("mouseenter.tooltip mouseleave.tooltip");
        }), !1) : (i = t.extend(n, i), this.each(function () {
            var n = Materialize.guid(),
                o = t(this);o.attr("data-tooltip-id") && t("#" + o.attr("data-tooltip-id")).remove(), o.attr("data-tooltip-id", n);var a,
                r,
                s,
                l,
                c,
                u,
                d = function d() {
                a = o.attr("data-html") ? "true" === o.attr("data-html") : i.html, r = o.attr("data-delay"), r = void 0 === r || "" === r ? i.delay : r, s = o.attr("data-position"), s = void 0 === s || "" === s ? i.position : s, l = o.attr("data-tooltip"), l = void 0 === l || "" === l ? i.tooltip : l;
            };d();c = function () {
                var e = t('<div class="material-tooltip"></div>');return l = a ? t("<span></span>").html(l) : t("<span></span>").text(l), e.append(l).appendTo(t("body")).attr("id", n), (u = t('<div class="backdrop"></div>')).appendTo(e), e;
            }(), o.off("mouseenter.tooltip mouseleave.tooltip");var p,
                h = !1;o.on({ "mouseenter.tooltip": function mouseenterTooltip(t) {
                    p = setTimeout(function () {
                        d(), h = !0, c.velocity("stop"), u.velocity("stop"), c.css({ visibility: "visible", left: "0px", top: "0px" });var t,
                            i,
                            n,
                            a = o.outerWidth(),
                            r = o.outerHeight(),
                            l = c.outerHeight(),
                            p = c.outerWidth(),
                            f = "0px",
                            v = "0px",
                            m = u[0].offsetWidth,
                            g = u[0].offsetHeight,
                            y = 8,
                            b = 8,
                            w = 0;"top" === s ? (t = o.offset().top - l - 5, i = o.offset().left + a / 2 - p / 2, n = e(i, t, p, l), f = "-10px", u.css({ bottom: 0, left: 0, borderRadius: "14px 14px 0 0", transformOrigin: "50% 100%", marginTop: l, marginLeft: p / 2 - m / 2 })) : "left" === s ? (t = o.offset().top + r / 2 - l / 2, i = o.offset().left - p - 5, n = e(i, t, p, l), v = "-10px", u.css({ top: "-7px", right: 0, width: "14px", height: "14px", borderRadius: "14px 0 0 14px", transformOrigin: "95% 50%", marginTop: l / 2, marginLeft: p })) : "right" === s ? (t = o.offset().top + r / 2 - l / 2, i = o.offset().left + a + 5, n = e(i, t, p, l), v = "+10px", u.css({ top: "-7px", left: 0, width: "14px", height: "14px", borderRadius: "0 14px 14px 0", transformOrigin: "5% 50%", marginTop: l / 2, marginLeft: "0px" })) : (t = o.offset().top + o.outerHeight() + 5, i = o.offset().left + a / 2 - p / 2, n = e(i, t, p, l), f = "+10px", u.css({ top: 0, left: 0, marginLeft: p / 2 - m / 2 })), c.css({ top: n.y, left: n.x }), y = Math.SQRT2 * p / parseInt(m), b = Math.SQRT2 * l / parseInt(g), w = Math.max(y, b), c.velocity({ translateY: f, translateX: v }, { duration: 350, queue: !1 }).velocity({ opacity: 1 }, { duration: 300, delay: 50, queue: !1 }), u.css({ visibility: "visible" }).velocity({ opacity: 1 }, { duration: 55, delay: 0, queue: !1 }).velocity({ scaleX: w, scaleY: w }, { duration: 300, delay: 0, queue: !1, easing: "easeInOutQuad" });
                    }, r);
                }, "mouseleave.tooltip": function mouseleaveTooltip() {
                    h = !1, clearTimeout(p), setTimeout(function () {
                        !0 !== h && (c.velocity({ opacity: 0, translateY: 0, translateX: 0 }, { duration: 225, queue: !1 }), u.velocity({ opacity: 0, scaleX: 1, scaleY: 1 }, { duration: 225, queue: !1, complete: function complete() {
                                u.css({ visibility: "hidden" }), c.css({ visibility: "hidden" }), h = !1;
                            } }));
                    }, 225);
                } });
        }));
    };var e = function e(_e, i, n, o) {
        var a = _e,
            r = i;return a < 0 ? a = 4 : a + n > window.innerWidth && (a -= a + n - window.innerWidth), r < 0 ? r = 4 : r + o > window.innerHeight + t(window).scrollTop && (r -= r + o - window.innerHeight), { x: a, y: r };
    };t(document).ready(function () {
        t(".tooltipped").tooltip();
    });
}(jQuery), function (t) {
    "use strict";
    function e(t) {
        return null !== t && t === t.window;
    }function i(t) {
        return e(t) ? t : 9 === t.nodeType && t.defaultView;
    }function n(t) {
        var e,
            n,
            o = { top: 0, left: 0 },
            a = t && t.ownerDocument;return e = a.documentElement, void 0 !== t.getBoundingClientRect && (o = t.getBoundingClientRect()), n = i(a), { top: o.top + n.pageYOffset - e.clientTop, left: o.left + n.pageXOffset - e.clientLeft };
    }function o(t) {
        var e = "";for (var i in t) {
            t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
        }return e;
    }function a(t) {
        if (!1 === u.allowEvent(t)) return null;for (var e = null, i = t.target || t.srcElement; null !== i.parentNode;) {
            if (!(i instanceof SVGElement) && -1 !== i.className.indexOf("waves-effect")) {
                e = i;break;
            }i = i.parentNode;
        }return e;
    }function r(e) {
        var i = a(e);null !== i && (c.show(e, i), "ontouchstart" in t && (i.addEventListener("touchend", c.hide, !1), i.addEventListener("touchcancel", c.hide, !1)), i.addEventListener("mouseup", c.hide, !1), i.addEventListener("mouseleave", c.hide, !1), i.addEventListener("dragend", c.hide, !1));
    }var s = s || {},
        l = document.querySelectorAll.bind(document),
        c = { duration: 750, show: function show(t, e) {
            if (2 === t.button) return !1;var i = e || this,
                a = document.createElement("div");a.className = "waves-ripple", i.appendChild(a);var r = n(i),
                s = t.pageY - r.top,
                l = t.pageX - r.left,
                u = "scale(" + i.clientWidth / 100 * 10 + ")";"touches" in t && (s = t.touches[0].pageY - r.top, l = t.touches[0].pageX - r.left), a.setAttribute("data-hold", Date.now()), a.setAttribute("data-scale", u), a.setAttribute("data-x", l), a.setAttribute("data-y", s);var d = { top: s + "px", left: l + "px" };a.className = a.className + " waves-notransition", a.setAttribute("style", o(d)), a.className = a.className.replace("waves-notransition", ""), d["-webkit-transform"] = u, d["-moz-transform"] = u, d["-ms-transform"] = u, d["-o-transform"] = u, d.transform = u, d.opacity = "1", d["-webkit-transition-duration"] = c.duration + "ms", d["-moz-transition-duration"] = c.duration + "ms", d["-o-transition-duration"] = c.duration + "ms", d["transition-duration"] = c.duration + "ms", d["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", a.setAttribute("style", o(d));
        }, hide: function hide(t) {
            u.touchup(t);var e = this,
                i = (e.clientWidth, null),
                n = e.getElementsByClassName("waves-ripple");if (!(n.length > 0)) return !1;var a = (i = n[n.length - 1]).getAttribute("data-x"),
                r = i.getAttribute("data-y"),
                s = i.getAttribute("data-scale"),
                l = 350 - (Date.now() - Number(i.getAttribute("data-hold")));l < 0 && (l = 0), setTimeout(function () {
                var t = { top: r + "px", left: a + "px", opacity: "0", "-webkit-transition-duration": c.duration + "ms", "-moz-transition-duration": c.duration + "ms", "-o-transition-duration": c.duration + "ms", "transition-duration": c.duration + "ms", "-webkit-transform": s, "-moz-transform": s, "-ms-transform": s, "-o-transform": s, transform: s };i.setAttribute("style", o(t)), setTimeout(function () {
                    try {
                        e.removeChild(i);
                    } catch (t) {
                        return !1;
                    }
                }, c.duration);
            }, l);
        }, wrapInput: function wrapInput(t) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e];if ("input" === i.tagName.toLowerCase()) {
                    var n = i.parentNode;if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect")) continue;var o = document.createElement("i");o.className = i.className + " waves-input-wrapper";var a = i.getAttribute("style");a || (a = ""), o.setAttribute("style", a), i.className = "waves-button-input", i.removeAttribute("style"), n.replaceChild(o, i), o.appendChild(i);
                }
            }
        } },
        u = { touches: 0, allowEvent: function allowEvent(t) {
            var e = !0;return "touchstart" === t.type ? u.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function () {
                u.touches > 0 && (u.touches -= 1);
            }, 500) : "mousedown" === t.type && u.touches > 0 && (e = !1), e;
        }, touchup: function touchup(t) {
            u.allowEvent(t);
        } };s.displayEffect = function (e) {
        "duration" in (e = e || {}) && (c.duration = e.duration), c.wrapInput(l(".waves-effect")), "ontouchstart" in t && document.body.addEventListener("touchstart", r, !1), document.body.addEventListener("mousedown", r, !1);
    }, s.attach = function (e) {
        "input" === e.tagName.toLowerCase() && (c.wrapInput([e]), e = e.parentNode), "ontouchstart" in t && e.addEventListener("touchstart", r, !1), e.addEventListener("mousedown", r, !1);
    }, t.Waves = s, document.addEventListener("DOMContentLoaded", function () {
        s.displayEffect();
    }, !1);
}(window), function (t, e) {
    "use strict";
    var i = { displayLength: 1 / 0, inDuration: 300, outDuration: 375, className: void 0, completeCallback: void 0, activationPercent: .8 },
        n = function () {
        function n(e, i, o, a) {
            if (_classCallCheck(this, n), e) {
                this.options = { displayLength: i, className: o, completeCallback: a }, this.options = t.extend({}, n.defaults, this.options), this.message = e, this.panning = !1, this.timeRemaining = this.options.displayLength, 0 === n._toasts.length && n._createContainer(), n._toasts.push(this);var r = this.createToast();r.M_Toast = this, this.el = r, this._animateIn(), this.setTimer();
            }
        }return _createClass(n, [{ key: "createToast", value: function value() {
                var e = document.createElement("div");if (e.classList.add("toast"), this.options.className) {
                    var i = this.options.className.split(" "),
                        o = void 0,
                        a = void 0;for (o = 0, a = i.length; o < a; o++) {
                        e.classList.add(i[o]);
                    }
                }return ("object" == (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) ? this.message instanceof HTMLElement : this.message && "object" == _typeof(this.message) && null !== this.message && 1 === this.message.nodeType && "string" == typeof this.message.nodeName) ? e.appendChild(this.message) : this.message instanceof jQuery ? t(e).append(this.message) : e.innerHTML = this.message, n._container.appendChild(e), e;
            } }, { key: "_animateIn", value: function value() {
                e(this.el, { top: 0, opacity: 1 }, { duration: 300, easing: "easeOutCubic", queue: !1 });
            } }, { key: "setTimer", value: function value() {
                var t = this;this.timeRemaining !== 1 / 0 && (this.counterInterval = setInterval(function () {
                    t.panning || (t.timeRemaining -= 20), t.timeRemaining <= 0 && t.remove();
                }, 20));
            } }, { key: "remove", value: function value() {
                var t = this;window.clearInterval(this.counterInterval);var i = this.el.offsetWidth * this.options.activationPercent;this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s", this.el.style.transform = "translateX(" + i + "px)", this.el.style.opacity = 0), e(this.el, { opacity: 0, marginTop: "-40px" }, { duration: this.options.outDuration, easing: "easeOutExpo", queue: !1, complete: function complete() {
                        "function" == typeof t.options.completeCallback && t.options.completeCallback(), t.el.parentNode.removeChild(t.el), n._toasts.splice(n._toasts.indexOf(t), 1), 0 === n._toasts.length && n._removeContainer();
                    } });
            } }], [{ key: "_createContainer", value: function value() {
                var t = document.createElement("div");t.setAttribute("id", "toast-container"), t.addEventListener("touchstart", n._onDragStart), t.addEventListener("touchmove", n._onDragMove), t.addEventListener("touchend", n._onDragEnd), t.addEventListener("mousedown", n._onDragStart), document.addEventListener("mousemove", n._onDragMove), document.addEventListener("mouseup", n._onDragEnd), document.body.appendChild(t), n._container = t;
            } }, { key: "_removeContainer", value: function value() {
                document.removeEventListener("mousemove", n._onDragMove), document.removeEventListener("mouseup", n._onDragEnd), n._container.parentNode.removeChild(n._container), n._container = null;
            } }, { key: "_onDragStart", value: function value(e) {
                if (e.target && t(e.target).closest(".toast").length) {
                    var i = t(e.target).closest(".toast")[0].M_Toast;i.panning = !0, n._draggedToast = i, i.el.classList.add("panning"), i.el.style.transition = "", i.startingXPos = n._xPos(e), i.time = Date.now(), i.xPos = n._xPos(e);
                }
            } }, { key: "_onDragMove", value: function value(t) {
                if (n._draggedToast) {
                    t.preventDefault();var e = n._draggedToast;e.deltaX = Math.abs(e.xPos - n._xPos(t)), e.xPos = n._xPos(t), e.velocityX = e.deltaX / (Date.now() - e.time), e.time = Date.now();var i = e.xPos - e.startingXPos,
                        o = e.el.offsetWidth * e.options.activationPercent;e.el.style.transform = "translateX(" + i + "px)", e.el.style.opacity = 1 - Math.abs(i / o);
                }
            } }, { key: "_onDragEnd", value: function value(t) {
                if (n._draggedToast) {
                    var e = n._draggedToast;e.panning = !1, e.el.classList.remove("panning");var i = e.xPos - e.startingXPos,
                        o = e.el.offsetWidth * e.options.activationPercent;Math.abs(i) > o || e.velocityX > 1 ? (e.wasSwiped = !0, e.remove()) : (e.el.style.transition = "transform .2s, opacity .2s", e.el.style.transform = "", e.el.style.opacity = ""), n._draggedToast = null;
                }
            } }, { key: "_xPos", value: function value(t) {
                return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX;
            } }, { key: "removeAll", value: function value() {
                for (var t in n._toasts) {
                    n._toasts[t].remove();
                }
            } }, { key: "defaults", get: function get() {
                return i;
            } }]), n;
    }();n._toasts = [], n._container = null, n._draggedToast = null, Materialize.Toast = n, Materialize.toast = function (t, e, i, o) {
        return new n(t, e, i, o);
    };
}(jQuery, Materialize.Vel), function (t) {
    var e = { init: function init(e) {
            var i = { menuWidth: 300, edge: "left", closeOnClick: !1, draggable: !0, onOpen: null, onClose: null };e = t.extend(i, e), t(this).each(function () {
                var i = t(this),
                    n = i.attr("data-activates"),
                    o = t("#" + n);300 != e.menuWidth && o.css("width", e.menuWidth);var a = t('.drag-target[data-sidenav="' + n + '"]');e.draggable ? (a.length && a.remove(), a = t('<div class="drag-target"></div>').attr("data-sidenav", n), t("body").append(a)) : a = t(), "left" == e.edge ? (o.css("transform", "translateX(-100%)"), a.css({ left: 0 })) : (o.addClass("right-aligned").css("transform", "translateX(100%)"), a.css({ right: 0 })), o.hasClass("fixed") && window.innerWidth > 992 && o.css("transform", "translateX(0)"), o.hasClass("fixed") && t(window).resize(function () {
                    window.innerWidth > 992 ? 0 !== t("#sidenav-overlay").length && l ? r(!0) : o.css("transform", "translateX(0%)") : !1 === l && ("left" === e.edge ? o.css("transform", "translateX(-100%)") : o.css("transform", "translateX(100%)"));
                }), !0 === e.closeOnClick && o.on("click.itemclick", "a:not(.collapsible-header)", function () {
                    window.innerWidth > 992 && o.hasClass("fixed") || r();
                });var r = function r(i) {
                    s = !1, l = !1, t("body").css({ overflow: "", width: "" }), t("#sidenav-overlay").velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
                            t(this).remove();
                        } }), "left" === e.edge ? (a.css({ width: "", right: "", left: "0" }), o.velocity({ translateX: "-100%" }, { duration: 200, queue: !1, easing: "easeOutCubic", complete: function complete() {
                            !0 === i && (o.removeAttr("style"), o.css("width", e.menuWidth));
                        } })) : (a.css({ width: "", right: "0", left: "" }), o.velocity({ translateX: "100%" }, { duration: 200, queue: !1, easing: "easeOutCubic", complete: function complete() {
                            !0 === i && (o.removeAttr("style"), o.css("width", e.menuWidth));
                        } })), "function" == typeof e.onClose && e.onClose.call(this, o);
                },
                    s = !1,
                    l = !1;e.draggable && (a.on("click", function () {
                    l && r();
                }), a.hammer({ prevent_default: !1 }).on("pan", function (i) {
                    if ("touch" == i.gesture.pointerType) {
                        i.gesture.direction;var n = i.gesture.center.x,
                            a = i.gesture.center.y;i.gesture.velocityX;if (0 === n && 0 === a) return;var s = t("body"),
                            c = t("#sidenav-overlay"),
                            u = s.innerWidth();if (s.css("overflow", "hidden"), s.width(u), 0 === c.length && ((c = t('<div id="sidenav-overlay"></div>')).css("opacity", 0).click(function () {
                            r();
                        }), "function" == typeof e.onOpen && e.onOpen.call(this, o), t("body").append(c)), "left" === e.edge && (n > e.menuWidth ? n = e.menuWidth : n < 0 && (n = 0)), "left" === e.edge) n < e.menuWidth / 2 ? l = !1 : n >= e.menuWidth / 2 && (l = !0), o.css("transform", "translateX(" + (n - e.menuWidth) + "px)");else {
                            n < window.innerWidth - e.menuWidth / 2 ? l = !0 : n >= window.innerWidth - e.menuWidth / 2 && (l = !1);var d = n - e.menuWidth / 2;d < 0 && (d = 0), o.css("transform", "translateX(" + d + "px)");
                        }var p;"left" === e.edge ? (p = n / e.menuWidth, c.velocity({ opacity: p }, { duration: 10, queue: !1, easing: "easeOutQuad" })) : (p = Math.abs((n - window.innerWidth) / e.menuWidth), c.velocity({ opacity: p }, { duration: 10, queue: !1, easing: "easeOutQuad" }));
                    }
                }).on("panend", function (i) {
                    if ("touch" == i.gesture.pointerType) {
                        var n = t("#sidenav-overlay"),
                            r = i.gesture.velocityX,
                            c = i.gesture.center.x,
                            u = c - e.menuWidth,
                            d = c - e.menuWidth / 2;u > 0 && (u = 0), d < 0 && (d = 0), s = !1, "left" === e.edge ? l && r <= .3 || r < -.5 ? (0 !== u && o.velocity({ translateX: [0, u] }, { duration: 300, queue: !1, easing: "easeOutQuad" }), n.velocity({ opacity: 1 }, { duration: 50, queue: !1, easing: "easeOutQuad" }), a.css({ width: "50%", right: 0, left: "" }), l = !0) : (!l || r > .3) && (t("body").css({ overflow: "", width: "" }), o.velocity({ translateX: [-1 * e.menuWidth - 10, u] }, { duration: 200, queue: !1, easing: "easeOutQuad" }), n.velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
                                "function" == typeof e.onClose && e.onClose.call(this, o), t(this).remove();
                            } }), a.css({ width: "10px", right: "", left: 0 })) : l && r >= -.3 || r > .5 ? (0 !== d && o.velocity({ translateX: [0, d] }, { duration: 300, queue: !1, easing: "easeOutQuad" }), n.velocity({ opacity: 1 }, { duration: 50, queue: !1, easing: "easeOutQuad" }), a.css({ width: "50%", right: "", left: 0 }), l = !0) : (!l || r < -.3) && (t("body").css({ overflow: "", width: "" }), o.velocity({ translateX: [e.menuWidth + 10, d] }, { duration: 200, queue: !1, easing: "easeOutQuad" }), n.velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
                                "function" == typeof e.onClose && e.onClose.call(this, o), t(this).remove();
                            } }), a.css({ width: "10px", right: 0, left: "" }));
                    }
                })), i.off("click.sidenav").on("click.sidenav", function () {
                    if (!0 === l) l = !1, s = !1, r();else {
                        var i = t("body"),
                            n = t('<div id="sidenav-overlay"></div>'),
                            c = i.innerWidth();i.css("overflow", "hidden"), i.width(c), t("body").append(a), "left" === e.edge ? (a.css({ width: "50%", right: 0, left: "" }), o.velocity({ translateX: [0, -1 * e.menuWidth] }, { duration: 300, queue: !1, easing: "easeOutQuad" })) : (a.css({ width: "50%", right: "", left: 0 }), o.velocity({ translateX: [0, e.menuWidth] }, { duration: 300, queue: !1, easing: "easeOutQuad" })), n.css("opacity", 0).click(function () {
                            l = !1, s = !1, r(), n.velocity({ opacity: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function complete() {
                                    t(this).remove();
                                } });
                        }), t("body").append(n), n.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function complete() {
                                l = !0, s = !1;
                            } }), "function" == typeof e.onOpen && e.onOpen.call(this, o);
                    }return !1;
                });
            });
        }, destroy: function destroy() {
            var e = t("#sidenav-overlay"),
                i = t('.drag-target[data-sidenav="' + t(this).attr("data-activates") + '"]');e.trigger("click"), i.remove(), t(this).off("click"), e.remove();
        }, show: function show() {
            this.trigger("click");
        }, hide: function hide() {
            t("#sidenav-overlay").trigger("click");
        } };t.fn.sideNav = function (i) {
        return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof i === "undefined" ? "undefined" : _typeof(i)) && i ? void t.error("Method " + i + " does not exist on jQuery.sideNav") : e.init.apply(this, arguments);
    };
}(jQuery), function (t) {
    function e(e, i, n, o) {
        var r = t();return t.each(a, function (t, a) {
            if (a.height() > 0) {
                var s = a.offset().top,
                    l = a.offset().left,
                    c = l + a.width(),
                    u = s + a.height();!(l > i || c < o || s > n || u < e) && r.push(a);
            }
        }), r;
    }function i(i) {
        ++l;var n = o.scrollTop(),
            a = o.scrollLeft(),
            s = a + o.width(),
            u = n + o.height(),
            d = e(n + c.top + i || 200, s + c.right, u + c.bottom, a + c.left);t.each(d, function (t, e) {
            "number" != typeof e.data("scrollSpy:ticks") && e.triggerHandler("scrollSpy:enter"), e.data("scrollSpy:ticks", l);
        }), t.each(r, function (t, e) {
            var i = e.data("scrollSpy:ticks");"number" == typeof i && i !== l && (e.triggerHandler("scrollSpy:exit"), e.data("scrollSpy:ticks", null));
        }), r = d;
    }function n() {
        o.trigger("scrollSpy:winSize");
    }var o = t(window),
        a = [],
        r = [],
        s = !1,
        l = 0,
        c = { top: 0, right: 0, bottom: 0, left: 0 };t.scrollSpy = function (e, n) {
        var r = { throttle: 100, scrollOffset: 200, activeClass: "active", getActiveElement: function getActiveElement(t) {
                return 'a[href="#' + t + '"]';
            } };n = t.extend(r, n);var l = [];(e = t(e)).each(function (e, i) {
            a.push(t(i)), t(i).data("scrollSpy:id", e), t('a[href="#' + t(i).attr("id") + '"]').click(function (e) {
                e.preventDefault();var i = t(Materialize.escapeHash(this.hash)).offset().top + 1;t("html, body").animate({ scrollTop: i - n.scrollOffset }, { duration: 400, queue: !1, easing: "easeOutCubic" });
            });
        }), c.top = n.offsetTop || 0, c.right = n.offsetRight || 0, c.bottom = n.offsetBottom || 0, c.left = n.offsetLeft || 0;var u = Materialize.throttle(function () {
            i(n.scrollOffset);
        }, n.throttle || 100),
            d = function d() {
            t(document).ready(u);
        };return s || (o.on("scroll", d), o.on("resize", d), s = !0), setTimeout(d, 0), e.on("scrollSpy:enter", function () {
            l = t.grep(l, function (t) {
                return 0 != t.height();
            });var e = t(this);l[0] ? (t(n.getActiveElement(l[0].attr("id"))).removeClass(n.activeClass), e.data("scrollSpy:id") < l[0].data("scrollSpy:id") ? l.unshift(t(this)) : l.push(t(this))) : l.push(t(this)), t(n.getActiveElement(l[0].attr("id"))).addClass(n.activeClass);
        }), e.on("scrollSpy:exit", function () {
            if ((l = t.grep(l, function (t) {
                return 0 != t.height();
            }))[0]) {
                t(n.getActiveElement(l[0].attr("id"))).removeClass(n.activeClass);var e = t(this);(l = t.grep(l, function (t) {
                    return t.attr("id") != e.attr("id");
                }))[0] && t(n.getActiveElement(l[0].attr("id"))).addClass(n.activeClass);
            }
        }), e;
    }, t.winSizeSpy = function (e) {
        return t.winSizeSpy = function () {
            return o;
        }, e = e || { throttle: 100 }, o.on("resize", Materialize.throttle(n, e.throttle || 100));
    }, t.fn.scrollSpy = function (e) {
        return t.scrollSpy(t(this), e);
    };
}(jQuery), function (t) {
    t(document).ready(function () {
        function e(e) {
            var i = e.css("font-family"),
                o = e.css("font-size"),
                a = e.css("line-height"),
                r = e.css("padding");o && n.css("font-size", o), i && n.css("font-family", i), a && n.css("line-height", a), r && n.css("padding", r), e.data("original-height") || e.data("original-height", e.height()), "off" === e.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text(e.val() + "\n");var s = n.html().replace(/\n/g, "<br>");n.html(s), e.is(":visible") ? n.css("width", e.width()) : n.css("width", t(window).width() / 2), e.data("original-height") <= n.height() ? e.css("height", n.height()) : e.val().length < e.data("previous-length") && e.css("height", e.data("original-height")), e.data("previous-length", e.val().length);
        }Materialize.updateTextFields = function () {
            t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function (e, i) {
                var n = t(this);t(i).val().length > 0 || t(i).is(":focus") || i.autofocus || void 0 !== n.attr("placeholder") ? n.siblings("label").addClass("active") : t(i)[0].validity ? n.siblings("label").toggleClass("active", !0 === t(i)[0].validity.badInput) : n.siblings("label").removeClass("active");
            });
        };var i = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";t(document).on("change", i, function () {
            0 === t(this).val().length && void 0 === t(this).attr("placeholder") || t(this).siblings("label").addClass("active"), validate_field(t(this));
        }), t(document).ready(function () {
            Materialize.updateTextFields();
        }), t(document).on("reset", function (e) {
            var n = t(e.target);n.is("form") && (n.find(i).removeClass("valid").removeClass("invalid"), n.find(i).each(function () {
                "" === t(this).attr("value") && t(this).siblings("label").removeClass("active");
            }), n.find("select.initialized").each(function () {
                var t = n.find("option[selected]").text();n.siblings("input.select-dropdown").val(t);
            }));
        }), t(document).on("focus", i, function () {
            t(this).siblings("label, .prefix").addClass("active");
        }), t(document).on("blur", i, function () {
            var e = t(this),
                i = ".prefix";0 === e.val().length && !0 !== e[0].validity.badInput && void 0 === e.attr("placeholder") && (i += ", label"), e.siblings(i).removeClass("active"), validate_field(e);
        }), window.validate_field = function (t) {
            var e = void 0 !== t.attr("data-length"),
                i = parseInt(t.attr("data-length")),
                n = t.val().length;0 !== t.val().length || !1 !== t[0].validity.badInput || t.is(":required") ? t.hasClass("validate") && (t.is(":valid") && e && n <= i || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid"))) : t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid"));
        };t(document).on("keyup.radio", "input[type=radio], input[type=checkbox]", function (e) {
            if (9 === e.which) return t(this).addClass("tabbed"), void t(this).one("blur", function (e) {
                t(this).removeClass("tabbed");
            });
        });var n = t(".hiddendiv").first();n.length || (n = t('<div class="hiddendiv common"></div>'), t("body").append(n));t(".materialize-textarea").each(function () {
            var e = t(this);e.data("original-height", e.height()), e.data("previous-length", e.val().length);
        }), t("body").on("keyup keydown autoresize", ".materialize-textarea", function () {
            e(t(this));
        }), t(document).on("change", '.file-field input[type="file"]', function () {
            for (var e = t(this).closest(".file-field").find("input.file-path"), i = t(this)[0].files, n = [], o = 0; o < i.length; o++) {
                n.push(i[o].name);
            }e.val(n.join(", ")), e.trigger("change");
        });var o = "input[type=range]",
            a = !1;t(o).each(function () {
            var e = t('<span class="thumb"><span class="value"></span></span>');t(this).after(e);
        });var r = function r(t) {
            var e = -7 + parseInt(t.parent().css("padding-left")) + "px";t.velocity({ height: "30px", width: "30px", top: "-30px", marginLeft: e }, { duration: 300, easing: "easeOutExpo" });
        },
            s = function s(t) {
            var e = t.width() - 15,
                i = parseFloat(t.attr("max")),
                n = parseFloat(t.attr("min"));return (parseFloat(t.val()) - n) / (i - n) * e;
        };t(document).on("change", o, function (e) {
            var i = t(this).siblings(".thumb");i.find(".value").html(t(this).val()), i.hasClass("active") || r(i);var n = s(t(this));i.addClass("active").css("left", n);
        }), t(document).on("mousedown touchstart", o, function (e) {
            var i = t(this).siblings(".thumb");if (i.length <= 0 && (i = t('<span class="thumb"><span class="value"></span></span>'), t(this).after(i)), i.find(".value").html(t(this).val()), a = !0, t(this).addClass("active"), i.hasClass("active") || r(i), "input" !== e.type) {
                var n = s(t(this));i.addClass("active").css("left", n);
            }
        }), t(document).on("mouseup touchend", ".range-field", function () {
            a = !1, t(this).removeClass("active");
        }), t(document).on("input mousemove touchmove", ".range-field", function (e) {
            var i = t(this).children(".thumb"),
                n = t(this).find(o);if (a) {
                i.hasClass("active") || r(i);var l = s(n);i.addClass("active").css("left", l), i.find(".value").html(i.siblings(o).val());
            }
        }), t(document).on("mouseout touchleave", ".range-field", function () {
            if (!a) {
                var e = t(this).children(".thumb"),
                    i = 7 + parseInt(t(this).css("padding-left")) + "px";e.hasClass("active") && e.velocity({ height: "0", width: "0", top: "10px", marginLeft: i }, { duration: 100 }), e.removeClass("active");
            }
        }), t.fn.autocomplete = function (e) {
            var i = { data: {}, limit: 1 / 0, onAutocomplete: null, minLength: 1 };return e = t.extend(i, e), this.each(function () {
                var i,
                    n = t(this),
                    o = e.data,
                    a = 0,
                    r = -1,
                    s = n.closest(".input-field");if (t.isEmptyObject(o)) n.off("keyup.autocomplete focus.autocomplete");else {
                    var l,
                        c = t('<ul class="autocomplete-content dropdown-content"></ul>');s.length ? (l = s.children(".autocomplete-content.dropdown-content").first()).length || s.append(c) : (l = n.next(".autocomplete-content.dropdown-content")).length || n.after(c), l.length && (c = l);var u = function u(t, e) {
                        var i = e.find("img"),
                            n = e.text().toLowerCase().indexOf("" + t.toLowerCase()),
                            o = n + t.length - 1,
                            a = e.text().slice(0, n),
                            r = e.text().slice(n, o + 1),
                            s = e.text().slice(o + 1);e.html("<span>" + a + "<span class='highlight'>" + r + "</span>" + s + "</span>"), i.length && e.prepend(i);
                    },
                        d = function d() {
                        r = -1, c.find(".active").removeClass("active");
                    },
                        p = function p() {
                        c.empty(), d(), i = void 0;
                    };n.off("blur.autocomplete").on("blur.autocomplete", function () {
                        p();
                    }), n.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete", function (r) {
                        a = 0;var s = n.val().toLowerCase();if (13 !== r.which && 38 !== r.which && 40 !== r.which) {
                            if (i !== s && (p(), s.length >= e.minLength)) for (var l in o) {
                                if (o.hasOwnProperty(l) && -1 !== l.toLowerCase().indexOf(s)) {
                                    if (a >= e.limit) break;var d = t("<li></li>");o[l] ? d.append('<img src="' + o[l] + '" class="right circle"><span>' + l + "</span>") : d.append("<span>" + l + "</span>"), c.append(d), u(s, d), a++;
                                }
                            }i = s;
                        }
                    }), n.off("keydown.autocomplete").on("keydown.autocomplete", function (t) {
                        var e,
                            i = t.which,
                            n = c.children("li").length,
                            o = c.children(".active").first();13 === i && r >= 0 ? (e = c.children("li").eq(r)).length && (e.trigger("mousedown.autocomplete"), t.preventDefault()) : 38 !== i && 40 !== i || (t.preventDefault(), 38 === i && r > 0 && r--, 40 === i && r < n - 1 && r++, o.removeClass("active"), r >= 0 && c.children("li").eq(r).addClass("active"));
                    }), c.off("mousedown.autocomplete touchstart.autocomplete").on("mousedown.autocomplete touchstart.autocomplete", "li", function () {
                        var i = t(this).text().trim();n.val(i), n.trigger("change"), p(), "function" == typeof e.onAutocomplete && e.onAutocomplete.call(this, i);
                    });
                }
            });
        };
    }), t.fn.material_select = function (e) {
        function i(t, e, i) {
            var o = t.indexOf(e),
                a = -1 === o;return a ? t.push(e) : t.splice(o, 1), i.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(e).toggleClass("active"), i.find("option").eq(e).prop("selected", a), n(t, i), a;
        }function n(t, e) {
            for (var i = "", n = 0, o = t.length; n < o; n++) {
                var a = e.find("option").eq(t[n]).text();i += 0 === n ? a : ", " + a;
            }"" === i && (i = e.find("option:disabled").eq(0).text()), e.siblings("input.select-dropdown").val(i);
        }t(this).each(function () {
            var n = t(this);if (!n.hasClass("browser-default")) {
                var o = !!n.attr("multiple"),
                    a = n.attr("data-select-id");if (a && (n.parent().find("span.caret").remove(), n.parent().find("input").remove(), n.unwrap(), t("ul#select-options-" + a).remove()), "destroy" === e) return n.removeAttr("data-select-id").removeClass("initialized"), void t(window).off("click.select");var r = Materialize.guid();n.attr("data-select-id", r);var s = t('<div class="select-wrapper"></div>');s.addClass(n.attr("class")), n.is(":disabled") && s.addClass("disabled");var l = t('<ul id="select-options-' + r + '" class="dropdown-content select-dropdown ' + (o ? "multiple-select-dropdown" : "") + '"></ul>'),
                    c = n.children("option, optgroup"),
                    u = [],
                    d = !1,
                    p = n.find("option:selected").html() || n.find("option:first").html() || "",
                    h = function h(e, i, n) {
                    var a = i.is(":disabled") ? "disabled " : "",
                        r = "optgroup-option" === n ? "optgroup-option " : "",
                        s = o ? '<input type="checkbox"' + a + "/><label></label>" : "",
                        c = i.data("icon"),
                        u = i.attr("class");if (c) {
                        var d = "";return u && (d = ' class="' + u + '"'), l.append(t('<li class="' + a + r + '"><img alt="" src="' + c + '"' + d + "><span>" + s + i.html() + "</span></li>")), !0;
                    }l.append(t('<li class="' + a + r + '"><span>' + s + i.html() + "</span></li>"));
                };c.length && c.each(function () {
                    if (t(this).is("option")) o ? h(0, t(this), "multiple") : h(0, t(this));else if (t(this).is("optgroup")) {
                        var e = t(this).children("option");l.append(t('<li class="optgroup"><span>' + t(this).attr("label") + "</span></li>")), e.each(function () {
                            h(0, t(this), "optgroup-option");
                        });
                    }
                }), l.find("li:not(.optgroup)").each(function (a) {
                    t(this).click(function (r) {
                        if (!t(this).hasClass("disabled") && !t(this).hasClass("optgroup")) {
                            var s = !0;o ? (t('input[type="checkbox"]', this).prop("checked", function (t, e) {
                                return !e;
                            }), s = i(u, a, n), m.trigger("focus")) : (l.find("li").removeClass("active"), t(this).toggleClass("active"), m.val(t(this).text())), g(l, t(this)), n.find("option").eq(a).prop("selected", s), n.trigger("change"), void 0 !== e && e();
                        }r.stopPropagation();
                    });
                }), n.wrap(s);var f = t('<span class="caret">&#9660;</span>'),
                    v = p.replace(/"/g, "&quot;"),
                    m = t('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + r + '" value="' + v + '"/>');n.before(m), m.before(f), m.after(l), n.is(":disabled") || m.dropdown({ hover: !1 }), n.attr("tabindex") && t(m[0]).attr("tabindex", n.attr("tabindex")), n.addClass("initialized"), m.on({ focus: function focus() {
                        if (t("ul.select-dropdown").not(l[0]).is(":visible") && (t("input.select-dropdown").trigger("close"), t(window).off("click.select")), !l.is(":visible")) {
                            t(this).trigger("open", ["focus"]);var e = t(this).val();o && e.indexOf(",") >= 0 && (e = e.split(",")[0]);var i = l.find("li").filter(function () {
                                return t(this).text().toLowerCase() === e.toLowerCase();
                            })[0];g(l, i, !0), t(window).off("click.select").on("click.select", function () {
                                o && (d || m.trigger("close")), t(window).off("click.select");
                            });
                        }
                    }, click: function click(t) {
                        t.stopPropagation();
                    } }), m.on("blur", function () {
                    o || (t(this).trigger("close"), t(window).off("click.select")), l.find("li.selected").removeClass("selected");
                }), l.hover(function () {
                    d = !0;
                }, function () {
                    d = !1;
                }), o && n.find("option:selected:not(:disabled)").each(function () {
                    var t = this.index;i(u, t, n), l.find("li:not(.optgroup)").eq(t).find(":checkbox").prop("checked", !0);
                });var g = function g(e, i, n) {
                    if (i) {
                        e.find("li.selected").removeClass("selected");var a = t(i);a.addClass("selected"), o && !n || l.scrollTo(a);
                    }
                },
                    y = [];m.on("keydown", function (e) {
                    if (9 != e.which) {
                        if (40 != e.which || l.is(":visible")) {
                            if (13 != e.which || l.is(":visible")) {
                                e.preventDefault();var i = String.fromCharCode(e.which).toLowerCase(),
                                    n = [9, 13, 27, 38, 40];if (i && -1 === n.indexOf(e.which)) {
                                    y.push(i);var a = y.join(""),
                                        r = l.find("li").filter(function () {
                                        return 0 === t(this).text().toLowerCase().indexOf(a);
                                    })[0];r && g(l, r);
                                }if (13 == e.which) {
                                    var s = l.find("li.selected:not(.disabled)")[0];s && (t(s).trigger("click"), o || m.trigger("close"));
                                }40 == e.which && (r = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], g(l, r)), 27 == e.which && m.trigger("close"), 38 == e.which && (r = l.find("li.selected").prev("li:not(.disabled)")[0]) && g(l, r), setTimeout(function () {
                                    y = [];
                                }, 1e3);
                            }
                        } else m.trigger("open");
                    } else m.trigger("close");
                });
            }
        });
    };
}(jQuery), function (t) {
    var e = { init: function init(e) {
            var i = { indicators: !0, height: 400, transition: 500, interval: 6e3 };return e = t.extend(i, e), this.each(function () {
                function i(t, e) {
                    t.hasClass("center-align") ? t.velocity({ opacity: 0, translateY: -100 }, { duration: e, queue: !1 }) : t.hasClass("right-align") ? t.velocity({ opacity: 0, translateX: 100 }, { duration: e, queue: !1 }) : t.hasClass("left-align") && t.velocity({ opacity: 0, translateX: -100 }, { duration: e, queue: !1 });
                }function n(t) {
                    t >= c.length ? t = 0 : t < 0 && (t = c.length - 1), (u = l.find(".active").index()) != t && (o = c.eq(u), $caption = o.find(".caption"), o.removeClass("active"), o.velocity({ opacity: 0 }, { duration: e.transition, queue: !1, easing: "easeOutQuad", complete: function complete() {
                            c.not(".active").velocity({ opacity: 0, translateX: 0, translateY: 0 }, { duration: 0, queue: !1 });
                        } }), i($caption, e.transition), e.indicators && a.eq(u).removeClass("active"), c.eq(t).velocity({ opacity: 1 }, { duration: e.transition, queue: !1, easing: "easeOutQuad" }), c.eq(t).find(".caption").velocity({ opacity: 1, translateX: 0, translateY: 0 }, { duration: e.transition, delay: e.transition, queue: !1, easing: "easeOutQuad" }), c.eq(t).addClass("active"), e.indicators && a.eq(t).addClass("active"));
                }var o,
                    a,
                    r,
                    s = t(this),
                    l = s.find("ul.slides").first(),
                    c = l.find("> li"),
                    u = l.find(".active").index();-1 != u && (o = c.eq(u)), s.hasClass("fullscreen") || (e.indicators ? s.height(e.height + 40) : s.height(e.height), l.height(e.height)), c.find(".caption").each(function () {
                    i(t(this), 0);
                }), c.find("img").each(function () {
                    var e = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";t(this).attr("src") !== e && (t(this).css("background-image", 'url("' + t(this).attr("src") + '")'), t(this).attr("src", e));
                }), e.indicators && (a = t('<ul class="indicators"></ul>'), c.each(function (i) {
                    var o = t('<li class="indicator-item"></li>');o.click(function () {
                        n(l.parent().find(t(this)).index()), clearInterval(r), r = setInterval(function () {
                            u = l.find(".active").index(), c.length == u + 1 ? u = 0 : u += 1, n(u);
                        }, e.transition + e.interval);
                    }), a.append(o);
                }), s.append(a), a = s.find("ul.indicators").find("li.indicator-item")), o ? o.show() : (c.first().addClass("active").velocity({ opacity: 1 }, { duration: e.transition, queue: !1, easing: "easeOutQuad" }), u = 0, o = c.eq(u), e.indicators && a.eq(u).addClass("active")), o.find("img").each(function () {
                    o.find(".caption").velocity({ opacity: 1, translateX: 0, translateY: 0 }, { duration: e.transition, queue: !1, easing: "easeOutQuad" });
                }), r = setInterval(function () {
                    n((u = l.find(".active").index()) + 1);
                }, e.transition + e.interval);var d = !1,
                    p = !1,
                    h = !1;s.hammer({ prevent_default: !1 }).on("pan", function (t) {
                    if ("touch" === t.gesture.pointerType) {
                        clearInterval(r);var e = t.gesture.direction,
                            i = t.gesture.deltaX,
                            n = t.gesture.velocityX,
                            o = t.gesture.velocityY;$curr_slide = l.find(".active"), Math.abs(n) > Math.abs(o) && $curr_slide.velocity({ translateX: i }, { duration: 50, queue: !1, easing: "easeOutQuad" }), 4 === e && (i > s.innerWidth() / 2 || n < -.65) ? h = !0 : 2 === e && (i < -1 * s.innerWidth() / 2 || n > .65) && (p = !0);var a;p && (0 === (a = $curr_slide.next()).length && (a = c.first()), a.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad" })), h && (0 === (a = $curr_slide.prev()).length && (a = c.last()), a.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad" }));
                    }
                }).on("panend", function (t) {
                    "touch" === t.gesture.pointerType && ($curr_slide = l.find(".active"), d = !1, curr_index = l.find(".active").index(), !h && !p || c.length <= 1 ? $curr_slide.velocity({ translateX: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad" }) : p ? (n(curr_index + 1), $curr_slide.velocity({ translateX: -1 * s.innerWidth() }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function complete() {
                            $curr_slide.velocity({ opacity: 0, translateX: 0 }, { duration: 0, queue: !1 });
                        } })) : h && (n(curr_index - 1), $curr_slide.velocity({ translateX: s.innerWidth() }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function complete() {
                            $curr_slide.velocity({ opacity: 0, translateX: 0 }, { duration: 0, queue: !1 });
                        } })), p = !1, h = !1, clearInterval(r), r = setInterval(function () {
                        u = l.find(".active").index(), c.length == u + 1 ? u = 0 : u += 1, n(u);
                    }, e.transition + e.interval));
                }), s.on("sliderPause", function () {
                    clearInterval(r);
                }), s.on("sliderStart", function () {
                    clearInterval(r), r = setInterval(function () {
                        u = l.find(".active").index(), c.length == u + 1 ? u = 0 : u += 1, n(u);
                    }, e.transition + e.interval);
                }), s.on("sliderNext", function () {
                    n((u = l.find(".active").index()) + 1);
                }), s.on("sliderPrev", function () {
                    n((u = l.find(".active").index()) - 1);
                });
            });
        }, pause: function pause() {
            t(this).trigger("sliderPause");
        }, start: function start() {
            t(this).trigger("sliderStart");
        }, next: function next() {
            t(this).trigger("sliderNext");
        }, prev: function prev() {
            t(this).trigger("sliderPrev");
        } };t.fn.slider = function (i) {
        return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof i === "undefined" ? "undefined" : _typeof(i)) && i ? void t.error("Method " + i + " does not exist on jQuery.tooltip") : e.init.apply(this, arguments);
    };
}(jQuery), function (t) {
    t(document).ready(function () {
        t(document).on("click.card", ".card", function (e) {
            if (t(this).find("> .card-reveal").length) {
                var i = t(e.target).closest(".card");void 0 === i.data("initialOverflow") && i.data("initialOverflow", void 0 === i.css("overflow") ? "" : i.css("overflow")), t(e.target).is(t(".card-reveal .card-title")) || t(e.target).is(t(".card-reveal .card-title i")) ? t(this).find(".card-reveal").velocity({ translateY: 0 }, { duration: 225, queue: !1, easing: "easeInOutQuad", complete: function complete() {
                        t(this).css({ display: "none" }), i.css("overflow", i.data("initialOverflow"));
                    } }) : (t(e.target).is(t(".card .activator")) || t(e.target).is(t(".card .activator i"))) && (i.css("overflow", "hidden"), t(this).find(".card-reveal").css({ display: "block" }).velocity("stop", !1).velocity({ translateY: "-100%" }, { duration: 300, queue: !1, easing: "easeInOutQuad" }));
            }
        });
    });
}(jQuery), function (t) {
    var e = { data: [], placeholder: "", secondaryPlaceholder: "", autocompleteOptions: {} };t(document).ready(function () {
        t(document).on("click", ".chip .close", function (e) {
            t(this).closest(".chips").attr("data-initialized") || t(this).closest(".chip").remove();
        });
    }), t.fn.material_chip = function (i) {
        var n = this;if (this.$el = t(this), this.$document = t(document), this.SELS = { CHIPS: ".chips", CHIP: ".chip", INPUT: "input", DELETE: ".material-icons", SELECTED_CHIP: ".selected" }, "data" === i) return this.$el.data("chips");var o = t.extend({}, e, i);n.hasAutocomplete = !t.isEmptyObject(o.autocompleteOptions.data), this.init = function () {
            var e = 0;n.$el.each(function () {
                var i = t(this),
                    a = Materialize.guid();n.chipId = a, o.data && o.data instanceof Array || (o.data = []), i.data("chips", o.data), i.attr("data-index", e), i.attr("data-initialized", !0), i.hasClass(n.SELS.CHIPS) || i.addClass("chips"), n.chips(i, a), e++;
            });
        }, this.handleEvents = function () {
            var e = n.SELS;n.$document.off("click.chips-focus", e.CHIPS).on("click.chips-focus", e.CHIPS, function (i) {
                t(i.target).find(e.INPUT).focus();
            }), n.$document.off("click.chips-select", e.CHIP).on("click.chips-select", e.CHIP, function (i) {
                var o = t(i.target);if (o.length) {
                    var a = o.hasClass("selected"),
                        r = o.closest(e.CHIPS);t(e.CHIP).removeClass("selected"), a || n.selectChip(o.index(), r);
                }
            }), n.$document.off("keydown.chips").on("keydown.chips", function (i) {
                if (!t(i.target).is("input, textarea")) {
                    var o,
                        a = n.$document.find(e.CHIP + e.SELECTED_CHIP),
                        r = a.closest(e.CHIPS),
                        s = a.siblings(e.CHIP).length;if (a.length) if (8 === i.which || 46 === i.which) {
                        i.preventDefault(), o = a.index(), n.deleteChip(o, r);var l = null;o + 1 < s ? l = o : o !== s && o + 1 !== s || (l = s - 1), l < 0 && (l = null), null !== l && n.selectChip(l, r), s || r.find("input").focus();
                    } else if (37 === i.which) {
                        if ((o = a.index() - 1) < 0) return;t(e.CHIP).removeClass("selected"), n.selectChip(o, r);
                    } else if (39 === i.which) {
                        if (o = a.index() + 1, t(e.CHIP).removeClass("selected"), o > s) return void r.find("input").focus();n.selectChip(o, r);
                    }
                }
            }), n.$document.off("focusin.chips", e.CHIPS + " " + e.INPUT).on("focusin.chips", e.CHIPS + " " + e.INPUT, function (i) {
                var n = t(i.target).closest(e.CHIPS);n.addClass("focus"), n.siblings("label, .prefix").addClass("active"), t(e.CHIP).removeClass("selected");
            }), n.$document.off("focusout.chips", e.CHIPS + " " + e.INPUT).on("focusout.chips", e.CHIPS + " " + e.INPUT, function (i) {
                var n = t(i.target).closest(e.CHIPS);n.removeClass("focus"), void 0 !== n.data("chips") && n.data("chips").length || n.siblings("label").removeClass("active"), n.siblings(".prefix").removeClass("active");
            }), n.$document.off("keydown.chips-add", e.CHIPS + " " + e.INPUT).on("keydown.chips-add", e.CHIPS + " " + e.INPUT, function (i) {
                var o = t(i.target),
                    a = o.closest(e.CHIPS),
                    r = a.children(e.CHIP).length;if (13 === i.which) {
                    if (n.hasAutocomplete && a.find(".autocomplete-content.dropdown-content").length && a.find(".autocomplete-content.dropdown-content").children().length) return;return i.preventDefault(), n.addChip({ tag: o.val() }, a), void o.val("");
                }if ((8 === i.keyCode || 37 === i.keyCode) && "" === o.val() && r) return i.preventDefault(), n.selectChip(r - 1, a), void o.blur();
            }), n.$document.off("click.chips-delete", e.CHIPS + " " + e.DELETE).on("click.chips-delete", e.CHIPS + " " + e.DELETE, function (i) {
                var o = t(i.target),
                    a = o.closest(e.CHIPS),
                    r = o.closest(e.CHIP);i.stopPropagation(), n.deleteChip(r.index(), a), a.find("input").focus();
            });
        }, this.chips = function (e, i) {
            e.empty(), e.data("chips").forEach(function (t) {
                e.append(n.renderChip(t));
            }), e.append(t('<input id="' + i + '" class="input" placeholder="">')), n.setPlaceholder(e);var a = e.next("label");a.length && (a.attr("for", i), void 0 !== e.data("chips") && e.data("chips").length && a.addClass("active"));var r = t("#" + i);n.hasAutocomplete && (o.autocompleteOptions.onAutocomplete = function (t) {
                n.addChip({ tag: t }, e), r.val(""), r.focus();
            }, r.autocomplete(o.autocompleteOptions));
        }, this.renderChip = function (e) {
            if (e.tag) {
                var i = t('<div class="chip"></div>');return i.text(e.tag), e.image && i.prepend(t("<img />").attr("src", e.image)), i.append(t('<i class="material-icons close">close</i>')), i;
            }
        }, this.setPlaceholder = function (t) {
            void 0 !== t.data("chips") && !t.data("chips").length && o.placeholder ? t.find("input").prop("placeholder", o.placeholder) : (void 0 === t.data("chips") || t.data("chips").length) && o.secondaryPlaceholder && t.find("input").prop("placeholder", o.secondaryPlaceholder);
        }, this.isValid = function (t, e) {
            for (var i = t.data("chips"), n = !1, o = 0; o < i.length; o++) {
                if (i[o].tag === e.tag) return void (n = !0);
            }return "" !== e.tag && !n;
        }, this.addChip = function (t, e) {
            if (n.isValid(e, t)) {
                for (var i = n.renderChip(t), o = [], a = e.data("chips"), r = 0; r < a.length; r++) {
                    o.push(a[r]);
                }o.push(t), e.data("chips", o), i.insertBefore(e.find("input")), e.trigger("chip.add", t), n.setPlaceholder(e);
            }
        }, this.deleteChip = function (t, e) {
            var i = e.data("chips")[t];e.find(".chip").eq(t).remove();for (var o = [], a = e.data("chips"), r = 0; r < a.length; r++) {
                r !== t && o.push(a[r]);
            }e.data("chips", o), e.trigger("chip.delete", i), n.setPlaceholder(e);
        }, this.selectChip = function (t, e) {
            var i = e.find(".chip").eq(t);i && !1 === i.hasClass("selected") && (i.addClass("selected"), e.trigger("chip.select", e.data("chips")[t]));
        }, this.getChipsElement = function (t, e) {
            return e.eq(t);
        }, this.init(), this.handleEvents();
    };
}(jQuery), function (t) {
    t.fn.pushpin = function (e) {
        var i = { top: 0, bottom: 1 / 0, offset: 0 };return "remove" === e ? (this.each(function () {
            (id = t(this).data("pushpin-id")) && (t(window).off("scroll." + id), t(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"));
        }), !1) : (e = t.extend(i, e), $index = 0, this.each(function () {
            function i(t) {
                t.removeClass("pin-top"), t.removeClass("pinned"), t.removeClass("pin-bottom");
            }function n(n, o) {
                n.each(function () {
                    e.top <= o && e.bottom >= o && !t(this).hasClass("pinned") && (i(t(this)), t(this).css("top", e.offset), t(this).addClass("pinned")), o < e.top && !t(this).hasClass("pin-top") && (i(t(this)), t(this).css("top", 0), t(this).addClass("pin-top")), o > e.bottom && !t(this).hasClass("pin-bottom") && (i(t(this)), t(this).addClass("pin-bottom"), t(this).css("top", e.bottom - r));
                });
            }var o = Materialize.guid(),
                a = t(this),
                r = t(this).offset().top;t(this).data("pushpin-id", o), n(a, t(window).scrollTop()), t(window).on("scroll." + o, function () {
                var i = t(window).scrollTop() + e.offset;n(a, i);
            });
        }));
    };
}(jQuery), function (t) {
    t(document).ready(function () {
        t.fn.reverse = [].reverse, t(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function (i) {
            var n = t(this);e(n);
        }), t(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function (e) {
            var n = t(this);i(n);
        }), t(document).on("click.fabClickToggle", ".fixed-action-btn.click-to-toggle > a", function (n) {
            var o = t(this).parent();o.hasClass("active") ? i(o) : e(o);
        }), t(document).on("click.fabToolbar", ".fixed-action-btn.toolbar > a", function (e) {
            var i = t(this).parent();n(i);
        });
    }), t.fn.extend({ openFAB: function openFAB() {
            e(t(this));
        }, closeFAB: function closeFAB() {
            i(t(this));
        }, openToolbar: function openToolbar() {
            n(t(this));
        }, closeToolbar: function closeToolbar() {
            o(t(this));
        } });var e = function e(_e2) {
        var i = _e2;if (!1 === i.hasClass("active")) {
            var n, o;!0 === i.hasClass("horizontal") ? o = 40 : n = 40, i.addClass("active"), i.find("ul .btn-floating").velocity({ scaleY: ".4", scaleX: ".4", translateY: n + "px", translateX: o + "px" }, { duration: 0 });var a = 0;i.find("ul .btn-floating").reverse().each(function () {
                t(this).velocity({ opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: "0" }, { duration: 80, delay: a }), a += 40;
            });
        }
    },
        i = function i(t) {
        var e,
            i,
            n = t;!0 === n.hasClass("horizontal") ? i = 40 : e = 40, n.removeClass("active");n.find("ul .btn-floating").velocity("stop", !0), n.find("ul .btn-floating").velocity({ opacity: "0", scaleX: ".4", scaleY: ".4", translateY: e + "px", translateX: i + "px" }, { duration: 80 });
    },
        n = function n(e) {
        if ("true" !== e.attr("data-open")) {
            var i,
                n,
                a,
                r = window.innerWidth,
                s = window.innerHeight,
                l = e[0].getBoundingClientRect(),
                c = e.find("> a").first(),
                u = e.find("> ul").first(),
                d = t('<div class="fab-backdrop"></div>'),
                p = c.css("background-color");c.append(d), i = l.left - r / 2 + l.width / 2, n = s - l.bottom, a = r / d.width(), e.attr("data-origin-bottom", l.bottom), e.attr("data-origin-left", l.left), e.attr("data-origin-width", l.width), e.addClass("active"), e.attr("data-open", !0), e.css({ "text-align": "center", width: "100%", bottom: 0, left: 0, transform: "translateX(" + i + "px)", transition: "none" }), c.css({ transform: "translateY(" + -n + "px)", transition: "none" }), d.css({ "background-color": p }), setTimeout(function () {
                e.css({ transform: "", transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s" }), c.css({ overflow: "visible", transform: "", transition: "transform .2s" }), setTimeout(function () {
                    e.css({ overflow: "hidden", "background-color": p }), d.css({ transform: "scale(" + a + ")", transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)" }), u.find("> li > a").css({ opacity: 1 }), t(window).on("scroll.fabToolbarClose", function () {
                        o(e), t(window).off("scroll.fabToolbarClose"), t(document).off("click.fabToolbarClose");
                    }), t(document).on("click.fabToolbarClose", function (i) {
                        t(i.target).closest(u).length || (o(e), t(window).off("scroll.fabToolbarClose"), t(document).off("click.fabToolbarClose"));
                    });
                }, 100);
            }, 0);
        }
    },
        o = function o(t) {
        if ("true" === t.attr("data-open")) {
            var e,
                i,
                n = window.innerWidth,
                o = window.innerHeight,
                a = t.attr("data-origin-width"),
                r = t.attr("data-origin-bottom"),
                s = t.attr("data-origin-left"),
                l = t.find("> .btn-floating").first(),
                c = t.find("> ul").first(),
                u = t.find(".fab-backdrop"),
                d = l.css("background-color");e = s - n / 2 + a / 2, i = o - r, n / u.width(), t.removeClass("active"), t.attr("data-open", !1), t.css({ "background-color": "transparent", transition: "none" }), l.css({ transition: "none" }), u.css({ transform: "scale(0)", "background-color": d }), c.find("> li > a").css({ opacity: "" }), setTimeout(function () {
                u.remove(), t.css({ "text-align": "", width: "", bottom: "", left: "", overflow: "", "background-color": "", transform: "translate3d(" + -e + "px,0,0)" }), l.css({ overflow: "", transform: "translate3d(0," + i + "px,0)" }), setTimeout(function () {
                    t.css({ transform: "translate3d(0,0,0)", transition: "transform .2s" }), l.css({ transform: "translate3d(0,0,0)", transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)" });
                }, 20);
            }, 200);
        }
    };
}(jQuery), function (t) {
    Materialize.fadeInImage = function (e) {
        var i;if ("string" == typeof e) i = t(e);else {
            if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) return;i = e;
        }i.css({ opacity: 0 }), t(i).velocity({ opacity: 1 }, { duration: 650, queue: !1, easing: "easeOutSine" }), t(i).velocity({ opacity: 1 }, { duration: 1300, queue: !1, easing: "swing", step: function step(e, i) {
                i.start = 100;var n = e / 100,
                    o = 150 - (100 - e) / 1.75;o < 100 && (o = 100), e >= 0 && t(this).css({ "-webkit-filter": "grayscale(" + n + ")brightness(" + o + "%)", filter: "grayscale(" + n + ")brightness(" + o + "%)" });
            } });
    }, Materialize.showStaggeredList = function (e) {
        var i;if ("string" == typeof e) i = t(e);else {
            if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) return;i = e;
        }var n = 0;i.find("li").velocity({ translateX: "-100px" }, { duration: 0 }), i.find("li").each(function () {
            t(this).velocity({ opacity: "1", translateX: "0" }, { duration: 800, delay: n, easing: [60, 10] }), n += 120;
        });
    }, t(document).ready(function () {
        var e = !1,
            i = !1;t(".dismissable").each(function () {
            t(this).hammer({ prevent_default: !1 }).on("pan", function (n) {
                if ("touch" === n.gesture.pointerType) {
                    var o = t(this),
                        a = n.gesture.direction,
                        r = n.gesture.deltaX,
                        s = n.gesture.velocityX;o.velocity({ translateX: r }, { duration: 50, queue: !1, easing: "easeOutQuad" }), 4 === a && (r > o.innerWidth() / 2 || s < -.75) && (e = !0), 2 === a && (r < -1 * o.innerWidth() / 2 || s > .75) && (i = !0);
                }
            }).on("panend", function (n) {
                if (Math.abs(n.gesture.deltaX) < t(this).innerWidth() / 2 && (i = !1, e = !1), "touch" === n.gesture.pointerType) {
                    var o = t(this);if (e || i) {
                        var a;a = e ? o.innerWidth() : -1 * o.innerWidth(), o.velocity({ translateX: a }, { duration: 100, queue: !1, easing: "easeOutQuad", complete: function complete() {
                                o.css("border", "none"), o.velocity({ height: 0, padding: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function complete() {
                                        o.remove();
                                    } });
                            } });
                    } else o.velocity({ translateX: 0 }, { duration: 100, queue: !1, easing: "easeOutQuad" });e = !1, i = !1;
                }
            });
        });
    });
}(jQuery), function (t) {
    var e = !1;Materialize.scrollFire = function (t) {
        var i = function i() {
            for (var e = window.pageYOffset + window.innerHeight, i = 0; i < t.length; i++) {
                var n = t[i],
                    o = n.selector,
                    a = n.offset,
                    r = n.callback,
                    s = document.querySelector(o);null !== s && e > s.getBoundingClientRect().top + window.pageYOffset + a && !0 !== n.done && ("function" == typeof r ? r.call(this, s) : "string" == typeof r && new Function(r)(s), n.done = !0);
            }
        },
            n = Materialize.throttle(function () {
            i();
        }, t.throttle || 100);e || (window.addEventListener("scroll", n), window.addEventListener("resize", n), e = !0), setTimeout(n, 0);
    };
}(jQuery), function (t) {
    Materialize.Picker = t(jQuery);
}(function (t) {
    function e(a, s, u, d) {
        function p() {
            return e._.node("div", e._.node("div", e._.node("div", e._.node("div", T.component.nodes(b.open), k.box), k.wrap), k.frame), k.holder);
        }function h() {
            x.data(s, T).addClass(k.input).attr("tabindex", -1).val(x.data("value") ? T.get("select", w.format) : a.value), w.editable || x.on("focus." + b.id + " click." + b.id, function (t) {
                t.preventDefault(), T.$root.eq(0).focus();
            }).on("keydown." + b.id, m), o(a, { haspopup: !0, expanded: !1, readonly: !1, owns: a.id + "_root" });
        }function f() {
            T.$root.on({ keydown: m, focusin: function focusin(t) {
                    T.$root.removeClass(k.focused), t.stopPropagation();
                }, "mousedown click": function mousedownClick(e) {
                    var i = e.target;i != T.$root.children()[0] && (e.stopPropagation(), "mousedown" != e.type || t(i).is("input, select, textarea, button, option") || (e.preventDefault(), T.$root.eq(0).focus()));
                } }).on({ focus: function focus() {
                    x.addClass(k.target);
                }, blur: function blur() {
                    x.removeClass(k.target);
                } }).on("focus.toOpen", g).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
                var e = t(this),
                    i = e.data(),
                    n = e.hasClass(k.navDisabled) || e.hasClass(k.disabled),
                    o = r();o = o && (o.type || o.href) && o, (n || o && !t.contains(T.$root[0], o)) && T.$root.eq(0).focus(), !n && i.nav ? T.set("highlight", T.component.item.highlight, { nav: i.nav }) : !n && "pick" in i ? (T.set("select", i.pick), w.closeOnSelect && T.close(!0)) : i.clear ? (T.clear(), w.closeOnSelect && T.close(!0)) : i.close && T.close(!0);
            }), o(T.$root[0], "hidden", !0);
        }function v() {
            var e;!0 === w.hiddenName ? (e = a.name, a.name = "") : e = (e = ["string" == typeof w.hiddenPrefix ? w.hiddenPrefix : "", "string" == typeof w.hiddenSuffix ? w.hiddenSuffix : "_submit"])[0] + a.name + e[1], T._hidden = t('<input type=hidden name="' + e + '"' + (x.data("value") || a.value ? ' value="' + T.get("select", w.formatSubmit) + '"' : "") + ">")[0], x.on("change." + b.id, function () {
                T._hidden.value = a.value ? T.get("select", w.formatSubmit) : "";
            }), w.container ? t(w.container).append(T._hidden) : x.before(T._hidden);
        }function m(t) {
            var e = t.keyCode,
                i = /^(8|46)$/.test(e);if (27 == e) return T.close(), !1;(32 == e || i || !b.open && T.component.key[e]) && (t.preventDefault(), t.stopPropagation(), i ? T.clear().close() : T.open());
        }function g(t) {
            t.stopPropagation(), "focus" == t.type && T.$root.addClass(k.focused), T.open();
        }if (!a) return e;var y = !1,
            b = { id: a.id || "P" + Math.abs(~~(Math.random() * new Date())) },
            w = u ? t.extend(!0, {}, u.defaults, d) : d || {},
            k = t.extend({}, e.klasses(), w.klass),
            x = t(a),
            C = function C() {
            return this.start();
        },
            T = C.prototype = { constructor: C, $node: x, start: function start() {
                return b && b.start ? T : (b.methods = {}, b.start = !0, b.open = !1, b.type = a.type, a.autofocus = a == r(), a.readOnly = !w.editable, a.id = a.id || b.id, "text" != a.type && (a.type = "text"), T.component = new u(T, w), T.$root = t(e._.node("div", p(), k.picker, 'id="' + a.id + '_root" tabindex="0"')), f(), w.formatSubmit && v(), h(), w.container ? t(w.container).append(T.$root) : x.before(T.$root), T.on({ start: T.component.onStart, render: T.component.onRender, stop: T.component.onStop, open: T.component.onOpen, close: T.component.onClose, set: T.component.onSet }).on({ start: w.onStart, render: w.onRender, stop: w.onStop, open: w.onOpen, close: w.onClose, set: w.onSet }), y = i(T.$root.children()[0]), a.autofocus && T.open(), T.trigger("start").trigger("render"));
            }, render: function render(t) {
                return t ? T.$root.html(p()) : T.$root.find("." + k.box).html(T.component.nodes(b.open)), T.trigger("render");
            }, stop: function stop() {
                return b.start ? (T.close(), T._hidden && T._hidden.parentNode.removeChild(T._hidden), T.$root.remove(), x.removeClass(k.input).removeData(s), setTimeout(function () {
                    x.off("." + b.id);
                }, 0), a.type = b.type, a.readOnly = !1, T.trigger("stop"), b.methods = {}, b.start = !1, T) : T;
            }, open: function open(i) {
                return b.open ? T : (x.addClass(k.active), o(a, "expanded", !0), setTimeout(function () {
                    T.$root.addClass(k.opened), o(T.$root[0], "hidden", !1);
                }, 0), !1 !== i && (b.open = !0, y && c.css("overflow", "hidden").css("padding-right", "+=" + n()), T.$root.eq(0).focus(), l.on("click." + b.id + " focusin." + b.id, function (t) {
                    var e = t.target;e != a && e != document && 3 != t.which && T.close(e === T.$root.children()[0]);
                }).on("keydown." + b.id, function (i) {
                    var n = i.keyCode,
                        o = T.component.key[n],
                        a = i.target;27 == n ? T.close(!0) : a != T.$root[0] || !o && 13 != n ? t.contains(T.$root[0], a) && 13 == n && (i.preventDefault(), a.click()) : (i.preventDefault(), o ? e._.trigger(T.component.key.go, T, [e._.trigger(o)]) : T.$root.find("." + k.highlighted).hasClass(k.disabled) || (T.set("select", T.component.item.highlight), w.closeOnSelect && T.close(!0)));
                })), T.trigger("open"));
            }, close: function close(t) {
                return t && (T.$root.off("focus.toOpen").eq(0).focus(), setTimeout(function () {
                    T.$root.on("focus.toOpen", g);
                }, 0)), x.removeClass(k.active), o(a, "expanded", !1), setTimeout(function () {
                    T.$root.removeClass(k.opened + " " + k.focused), o(T.$root[0], "hidden", !0);
                }, 0), b.open ? (b.open = !1, y && c.css("overflow", "").css("padding-right", "-=" + n()), l.off("." + b.id), T.trigger("close")) : T;
            }, clear: function clear(t) {
                return T.set("clear", null, t);
            }, set: function set(e, i, n) {
                var o,
                    a,
                    r = t.isPlainObject(e),
                    s = r ? e : {};if (n = r && t.isPlainObject(i) ? i : n || {}, e) {
                    r || (s[e] = i);for (o in s) {
                        a = s[o], o in T.component.item && (void 0 === a && (a = null), T.component.set(o, a, n)), "select" != o && "clear" != o || x.val("clear" == o ? "" : T.get(o, w.format)).trigger("change");
                    }T.render();
                }return n.muted ? T : T.trigger("set", s);
            }, get: function get(t, i) {
                if (t = t || "value", null != b[t]) return b[t];if ("valueSubmit" == t) {
                    if (T._hidden) return T._hidden.value;t = "value";
                }if ("value" == t) return a.value;if (t in T.component.item) {
                    if ("string" == typeof i) {
                        var n = T.component.get(t);return n ? e._.trigger(T.component.formats.toString, T.component, [i, n]) : "";
                    }return T.component.get(t);
                }
            }, on: function on(e, i, n) {
                var o,
                    a,
                    r = t.isPlainObject(e),
                    s = r ? e : {};if (e) {
                    r || (s[e] = i);for (o in s) {
                        a = s[o], n && (o = "_" + o), b.methods[o] = b.methods[o] || [], b.methods[o].push(a);
                    }
                }return T;
            }, off: function off() {
                var t,
                    e,
                    i = arguments;for (t = 0, namesCount = i.length; t < namesCount; t += 1) {
                    (e = i[t]) in b.methods && delete b.methods[e];
                }return T;
            }, trigger: function trigger(t, i) {
                var n = function n(t) {
                    var n = b.methods[t];n && n.map(function (t) {
                        e._.trigger(t, T, [i]);
                    });
                };return n("_" + t), n(t), T;
            } };return new C();
    }function i(t) {
        var e;return t.currentStyle ? e = t.currentStyle.position : window.getComputedStyle && (e = getComputedStyle(t).position), "fixed" == e;
    }function n() {
        if (c.height() <= s.height()) return 0;var e = t('<div style="visibility:hidden;width:100px" />').appendTo("body"),
            i = e[0].offsetWidth;e.css("overflow", "scroll");var n = t('<div style="width:100%" />').appendTo(e)[0].offsetWidth;return e.remove(), i - n;
    }function o(e, i, n) {
        if (t.isPlainObject(i)) for (var o in i) {
            a(e, o, i[o]);
        } else a(e, i, n);
    }function a(t, e, i) {
        t.setAttribute(("role" == e ? "" : "aria-") + e, i);
    }function r() {
        try {
            return document.activeElement;
        } catch (t) {}
    }var s = t(window),
        l = t(document),
        c = t(document.documentElement);return e.klasses = function (t) {
        return t = t || "picker", { picker: t, opened: t + "--opened", focused: t + "--focused", input: t + "__input", active: t + "__input--active", target: t + "__input--target", holder: t + "__holder", frame: t + "__frame", wrap: t + "__wrap", box: t + "__box" };
    }, e._ = { group: function group(t) {
            for (var i, n = "", o = e._.trigger(t.min, t); o <= e._.trigger(t.max, t, [o]); o += t.i) {
                i = e._.trigger(t.item, t, [o]), n += e._.node(t.node, i[0], i[1], i[2]);
            }return n;
        }, node: function node(e, i, n, o) {
            return i ? (i = t.isArray(i) ? i.join("") : i, n = n ? ' class="' + n + '"' : "", o = o ? " " + o : "", "<" + e + n + o + ">" + i + "</" + e + ">") : "";
        }, lead: function lead(t) {
            return (t < 10 ? "0" : "") + t;
        }, trigger: function trigger(t, e, i) {
            return "function" == typeof t ? t.apply(e, i || []) : t;
        }, digits: function digits(t) {
            return (/\d/.test(t[1]) ? 2 : 1
            );
        }, isDate: function isDate(t) {
            return {}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate());
        }, isInteger: function isInteger(t) {
            return {}.toString.call(t).indexOf("Number") > -1 && t % 1 == 0;
        }, ariaAttr: function ariaAttr(e, i) {
            t.isPlainObject(e) || (e = { attribute: i }), i = "";for (var n in e) {
                var o = ("role" == n ? "" : "aria-") + n;i += null == e[n] ? "" : o + '="' + e[n] + '"';
            }return i;
        } }, e.extend = function (i, n) {
        t.fn[i] = function (o, a) {
            var r = this.data(i);return "picker" == o ? r : r && "string" == typeof o ? e._.trigger(r[o], r, [a]) : this.each(function () {
                t(this).data(i) || new e(this, i, n, o);
            });
        }, t.fn[i].defaults = n.defaults;
    }, e;
}), function (t) {
    t(Materialize.Picker, jQuery);
}(function (t, e) {
    function i(t, e) {
        var i = this,
            n = t.$node[0],
            o = n.value,
            a = t.$node.data("value"),
            r = a || o,
            s = a ? e.formatSubmit : e.format,
            l = function l() {
            return n.currentStyle ? "rtl" == n.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction;
        };i.settings = e, i.$node = t.$node, i.queue = { min: "measure create", max: "measure create", now: "now create", select: "parse create validate", highlight: "parse navigate create validate", view: "parse create validate viewset", disable: "deactivate", enable: "activate" }, i.item = {}, i.item.clear = null, i.item.disable = (e.disable || []).slice(0), i.item.enable = -function (t) {
            return !0 === t[0] ? t.shift() : -1;
        }(i.item.disable), i.set("min", e.min).set("max", e.max).set("now"), r ? i.set("select", r, { format: s }) : i.set("select", null).set("highlight", i.item.now), i.key = { 40: 7, 38: -7, 39: function _() {
                return l() ? -1 : 1;
            }, 37: function _() {
                return l() ? 1 : -1;
            }, go: function go(t) {
                var e = i.item.highlight,
                    n = new Date(e.year, e.month, e.date + t);i.set("highlight", n, { interval: t }), this.render();
            } }, t.on("render", function () {
            t.$root.find("." + e.klass.selectMonth).on("change", function () {
                var i = this.value;i && (t.set("highlight", [t.get("view").year, i, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus"));
            }), t.$root.find("." + e.klass.selectYear).on("change", function () {
                var i = this.value;i && (t.set("highlight", [i, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus"));
            });
        }, 1).on("open", function () {
            var n = "";i.disabled(i.get("now")) && (n = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + n + ", select").attr("disabled", !1);
        }, 1).on("close", function () {
            t.$root.find("button, select").attr("disabled", !0);
        }, 1);
    }var n = t._;i.prototype.set = function (t, e, i) {
        var n = this,
            o = n.item;return null === e ? ("clear" == t && (t = "select"), o[t] = e, n) : (o["enable" == t ? "disable" : "flip" == t ? "enable" : t] = n.queue[t].split(" ").map(function (o) {
            return e = n[o](t, e, i);
        }).pop(), "select" == t ? n.set("highlight", o.select, i) : "highlight" == t ? n.set("view", o.highlight, i) : t.match(/^(flip|min|max|disable|enable)$/) && (o.select && n.disabled(o.select) && n.set("select", o.select, i), o.highlight && n.disabled(o.highlight) && n.set("highlight", o.highlight, i)), n);
    }, i.prototype.get = function (t) {
        return this.item[t];
    }, i.prototype.create = function (t, i, o) {
        var a,
            r = this;return i = void 0 === i ? t : i, i == -1 / 0 || i == 1 / 0 ? a = i : e.isPlainObject(i) && n.isInteger(i.pick) ? i = i.obj : e.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = n.isDate(i) ? i : r.create().obj) : i = n.isInteger(i) || n.isDate(i) ? r.normalize(new Date(i), o) : r.now(t, i, o), { year: a || i.getFullYear(), month: a || i.getMonth(), date: a || i.getDate(), day: a || i.getDay(), obj: a || i, pick: a || i.getTime() };
    }, i.prototype.createRange = function (t, i) {
        var o = this,
            a = function a(t) {
            return !0 === t || e.isArray(t) || n.isDate(t) ? o.create(t) : t;
        };return n.isInteger(t) || (t = a(t)), n.isInteger(i) || (i = a(i)), n.isInteger(t) && e.isPlainObject(i) ? t = [i.year, i.month, i.date + t] : n.isInteger(i) && e.isPlainObject(t) && (i = [t.year, t.month, t.date + i]), { from: a(t), to: a(i) };
    }, i.prototype.withinRange = function (t, e) {
        return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick;
    }, i.prototype.overlapRanges = function (t, e) {
        var i = this;return t = i.createRange(t.from, t.to), e = i.createRange(e.from, e.to), i.withinRange(t, e.from) || i.withinRange(t, e.to) || i.withinRange(e, t.from) || i.withinRange(e, t.to);
    }, i.prototype.now = function (t, e, i) {
        return e = new Date(), i && i.rel && e.setDate(e.getDate() + i.rel), this.normalize(e, i);
    }, i.prototype.navigate = function (t, i, n) {
        var o,
            a,
            r,
            s,
            l = e.isArray(i),
            c = e.isPlainObject(i),
            u = this.item.view;if (l || c) {
            for (c ? (a = i.year, r = i.month, s = i.date) : (a = +i[0], r = +i[1], s = +i[2]), n && n.nav && u && u.month !== r && (a = u.year, r = u.month), a = (o = new Date(a, r + (n && n.nav ? n.nav : 0), 1)).getFullYear(), r = o.getMonth(); new Date(a, r, s).getMonth() !== r;) {
                s -= 1;
            }i = [a, r, s];
        }return i;
    }, i.prototype.normalize = function (t) {
        return t.setHours(0, 0, 0, 0), t;
    }, i.prototype.measure = function (t, e) {
        var i = this;return e ? "string" == typeof e ? e = i.parse(t, e) : n.isInteger(e) && (e = i.now(t, e, { rel: e })) : e = "min" == t ? -1 / 0 : 1 / 0, e;
    }, i.prototype.viewset = function (t, e) {
        return this.create([e.year, e.month, 1]);
    }, i.prototype.validate = function (t, i, o) {
        var a,
            r,
            s,
            l,
            c = this,
            u = i,
            d = o && o.interval ? o.interval : 1,
            p = -1 === c.item.enable,
            h = c.item.min,
            f = c.item.max,
            v = p && c.item.disable.filter(function (t) {
            if (e.isArray(t)) {
                var o = c.create(t).pick;o < i.pick ? a = !0 : o > i.pick && (r = !0);
            }return n.isInteger(t);
        }).length;if ((!o || !o.nav) && (!p && c.disabled(i) || p && c.disabled(i) && (v || a || r) || !p && (i.pick <= h.pick || i.pick >= f.pick))) for (p && !v && (!r && d > 0 || !a && d < 0) && (d *= -1); c.disabled(i) && (Math.abs(d) > 1 && (i.month < u.month || i.month > u.month) && (i = u, d = d > 0 ? 1 : -1), i.pick <= h.pick ? (s = !0, d = 1, i = c.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : -1)])) : i.pick >= f.pick && (l = !0, d = -1, i = c.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : 1)])), !s || !l);) {
            i = c.create([i.year, i.month, i.date + d]);
        }return i;
    }, i.prototype.disabled = function (t) {
        var i = this,
            o = i.item.disable.filter(function (o) {
            return n.isInteger(o) ? t.day === (i.settings.firstDay ? o : o - 1) % 7 : e.isArray(o) || n.isDate(o) ? t.pick === i.create(o).pick : e.isPlainObject(o) ? i.withinRange(o, t) : void 0;
        });return o = o.length && !o.filter(function (t) {
            return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted;
        }).length, -1 === i.item.enable ? !o : o || t.pick < i.item.min.pick || t.pick > i.item.max.pick;
    }, i.prototype.parse = function (t, e, i) {
        var o = this,
            a = {};return e && "string" == typeof e ? (i && i.format || ((i = i || {}).format = o.settings.format), o.formats.toArray(i.format).map(function (t) {
            var i = o.formats[t],
                r = i ? n.trigger(i, o, [e, a]) : t.replace(/^!/, "").length;i && (a[t] = e.substr(0, r)), e = e.substr(r);
        }), [a.yyyy || a.yy, +(a.mm || a.m) - 1, a.dd || a.d]) : e;
    }, i.prototype.formats = function () {
        function t(t, e, i) {
            var n = t.match(/\w+/)[0];return i.mm || i.m || (i.m = e.indexOf(n) + 1), n.length;
        }function e(t) {
            return t.match(/\w+/)[0].length;
        }return { d: function d(t, e) {
                return t ? n.digits(t) : e.date;
            }, dd: function dd(t, e) {
                return t ? 2 : n.lead(e.date);
            }, ddd: function ddd(t, i) {
                return t ? e(t) : this.settings.weekdaysShort[i.day];
            }, dddd: function dddd(t, i) {
                return t ? e(t) : this.settings.weekdaysFull[i.day];
            }, m: function m(t, e) {
                return t ? n.digits(t) : e.month + 1;
            }, mm: function mm(t, e) {
                return t ? 2 : n.lead(e.month + 1);
            }, mmm: function mmm(e, i) {
                var n = this.settings.monthsShort;return e ? t(e, n, i) : n[i.month];
            }, mmmm: function mmmm(e, i) {
                var n = this.settings.monthsFull;return e ? t(e, n, i) : n[i.month];
            }, yy: function yy(t, e) {
                return t ? 2 : ("" + e.year).slice(2);
            }, yyyy: function yyyy(t, e) {
                return t ? 4 : e.year;
            }, toArray: function toArray(t) {
                return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
            }, toString: function toString(t, e) {
                var i = this;return i.formats.toArray(t).map(function (t) {
                    return n.trigger(i.formats[t], i, [0, e]) || t.replace(/^!/, "");
                }).join("");
            } };
    }(), i.prototype.isDateExact = function (t, i) {
        var o = this;return n.isInteger(t) && n.isInteger(i) || "boolean" == typeof t && "boolean" == typeof i ? t === i : (n.isDate(t) || e.isArray(t)) && (n.isDate(i) || e.isArray(i)) ? o.create(t).pick === o.create(i).pick : !(!e.isPlainObject(t) || !e.isPlainObject(i)) && o.isDateExact(t.from, i.from) && o.isDateExact(t.to, i.to);
    }, i.prototype.isDateOverlap = function (t, i) {
        var o = this,
            a = o.settings.firstDay ? 1 : 0;return n.isInteger(t) && (n.isDate(i) || e.isArray(i)) ? (t = t % 7 + a) === o.create(i).day + 1 : n.isInteger(i) && (n.isDate(t) || e.isArray(t)) ? (i = i % 7 + a) === o.create(t).day + 1 : !(!e.isPlainObject(t) || !e.isPlainObject(i)) && o.overlapRanges(t, i);
    }, i.prototype.flipEnable = function (t) {
        var e = this.item;e.enable = t || (-1 == e.enable ? 1 : -1);
    }, i.prototype.deactivate = function (t, i) {
        var o = this,
            a = o.item.disable.slice(0);return "flip" == i ? o.flipEnable() : !1 === i ? (o.flipEnable(1), a = []) : !0 === i ? (o.flipEnable(-1), a = []) : i.map(function (t) {
            for (var i, r = 0; r < a.length; r += 1) {
                if (o.isDateExact(t, a[r])) {
                    i = !0;break;
                }
            }i || (n.isInteger(t) || n.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && a.push(t);
        }), a;
    }, i.prototype.activate = function (t, i) {
        var o = this,
            a = o.item.disable,
            r = a.length;return "flip" == i ? o.flipEnable() : !0 === i ? (o.flipEnable(1), a = []) : !1 === i ? (o.flipEnable(-1), a = []) : i.map(function (t) {
            var i, s, l, c;for (l = 0; l < r; l += 1) {
                if (s = a[l], o.isDateExact(s, t)) {
                    i = a[l] = null, c = !0;break;
                }if (o.isDateOverlap(s, t)) {
                    e.isPlainObject(t) ? (t.inverted = !0, i = t) : e.isArray(t) ? (i = t)[3] || i.push("inverted") : n.isDate(t) && (i = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);break;
                }
            }if (i) for (l = 0; l < r; l += 1) {
                if (o.isDateExact(a[l], t)) {
                    a[l] = null;break;
                }
            }if (c) for (l = 0; l < r; l += 1) {
                if (o.isDateOverlap(a[l], t)) {
                    a[l] = null;break;
                }
            }i && a.push(i);
        }), a.filter(function (t) {
            return null != t;
        });
    }, i.prototype.nodes = function (t) {
        var e = this,
            i = e.settings,
            o = e.item,
            a = o.now,
            r = o.select,
            s = o.highlight,
            l = o.view,
            c = o.disable,
            u = o.min,
            d = o.max,
            p = function (t, e) {
            return i.firstDay && (t.push(t.shift()), e.push(e.shift())), n.node("thead", n.node("tr", n.group({ min: 0, max: 6, i: 1, node: "th", item: function item(n) {
                    return [t[n], i.klass.weekdays, 'scope=col title="' + e[n] + '"'];
                } })));
        }((i.showWeekdaysFull ? i.weekdaysFull : i.weekdaysLetter).slice(0), i.weekdaysFull.slice(0)),
            h = function h(t) {
            return n.node("div", " ", i.klass["nav" + (t ? "Next" : "Prev")] + (t && l.year >= d.year && l.month >= d.month || !t && l.year <= u.year && l.month <= u.month ? " " + i.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + n.ariaAttr({ role: "button", controls: e.$node[0].id + "_table" }) + ' title="' + (t ? i.labelMonthNext : i.labelMonthPrev) + '"');
        },
            f = function f(o) {
            var a = i.showMonthsShort ? i.monthsShort : i.monthsFull;return "short_months" == o && (a = i.monthsShort), i.selectMonths && void 0 == o ? n.node("select", n.group({ min: 0, max: 11, i: 1, node: "option", item: function item(t) {
                    return [a[t], 0, "value=" + t + (l.month == t ? " selected" : "") + (l.year == u.year && t < u.month || l.year == d.year && t > d.month ? " disabled" : "")];
                } }), i.klass.selectMonth + " browser-default", (t ? "" : "disabled") + " " + n.ariaAttr({ controls: e.$node[0].id + "_table" }) + ' title="' + i.labelMonthSelect + '"') : "short_months" == o ? null != r ? a[r.month] : a[l.month] : n.node("div", a[l.month], i.klass.month);
        },
            v = function v(o) {
            var a = l.year,
                s = !0 === i.selectYears ? 5 : ~~(i.selectYears / 2);if (s) {
                var c = u.year,
                    p = d.year,
                    h = a - s,
                    f = a + s;if (c > h && (f += c - h, h = c), p < f) {
                    var v = h - c,
                        m = f - p;h -= v > m ? m : v, f = p;
                }if (i.selectYears && void 0 == o) return n.node("select", n.group({ min: h, max: f, i: 1, node: "option", item: function item(t) {
                        return [t, 0, "value=" + t + (a == t ? " selected" : "")];
                    } }), i.klass.selectYear + " browser-default", (t ? "" : "disabled") + " " + n.ariaAttr({ controls: e.$node[0].id + "_table" }) + ' title="' + i.labelYearSelect + '"');
            }return "raw" === o && null != r ? n.node("div", r.year) : n.node("div", a, i.klass.year);
        };return createDayLabel = function createDayLabel() {
            return null != r ? r.date : a.date;
        }, createWeekdayLabel = function createWeekdayLabel() {
            var t;return t = null != r ? r.day : a.day, i.weekdaysShort[t];
        }, n.node("div", n.node("div", v("raw"), i.klass.year_display) + n.node("span", createWeekdayLabel() + ", ", "picker__weekday-display") + n.node("span", f("short_months") + " ", i.klass.month_display) + n.node("span", createDayLabel(), i.klass.day_display), i.klass.date_display) + n.node("div", n.node("div", n.node("div", (i.selectYears, f() + v() + h() + h(1)), i.klass.header) + n.node("table", p + n.node("tbody", n.group({ min: 0, max: 5, i: 1, node: "tr", item: function item(t) {
                var o = i.firstDay && 0 === e.create([l.year, l.month, 1]).day ? -7 : 0;return [n.group({ min: 7 * t - l.day + o + 1, max: function max() {
                        return this.min + 7 - 1;
                    }, i: 1, node: "td", item: function item(t) {
                        t = e.create([l.year, l.month, t + (i.firstDay ? 1 : 0)]);var o = r && r.pick == t.pick,
                            p = s && s.pick == t.pick,
                            h = c && e.disabled(t) || t.pick < u.pick || t.pick > d.pick,
                            f = n.trigger(e.formats.toString, e, [i.format, t]);return [n.node("div", t.date, function (e) {
                            return e.push(l.month == t.month ? i.klass.infocus : i.klass.outfocus), a.pick == t.pick && e.push(i.klass.now), o && e.push(i.klass.selected), p && e.push(i.klass.highlighted), h && e.push(i.klass.disabled), e.join(" ");
                        }([i.klass.day]), "data-pick=" + t.pick + " " + n.ariaAttr({ role: "gridcell", label: f, selected: !(!o || e.$node.val() !== f) || null, activedescendant: !!p || null, disabled: !!h || null }) + " " + (h ? "" : 'tabindex="0"')), "", n.ariaAttr({ role: "presentation" })];
                    } })];
            } })), i.klass.table, 'id="' + e.$node[0].id + '_table" ' + n.ariaAttr({ role: "grid", controls: e.$node[0].id, readonly: !0 })), i.klass.calendar_container) + n.node("div", n.node("button", i.today, "btn-flat picker__today waves-effect", "type=button data-pick=" + a.pick + (t && !e.disabled(a) ? "" : " disabled") + " " + n.ariaAttr({ controls: e.$node[0].id })) + n.node("button", i.clear, "btn-flat picker__clear waves-effect", "type=button data-clear=1" + (t ? "" : " disabled") + " " + n.ariaAttr({ controls: e.$node[0].id })) + n.node("button", i.close, "btn-flat picker__close waves-effect", "type=button data-close=true " + (t ? "" : " disabled") + " " + n.ariaAttr({ controls: e.$node[0].id })), i.klass.footer), "picker__container__wrapper");
    }, i.defaults = function (t) {
        return { labelMonthNext: "Next month", labelMonthPrev: "Previous month", labelMonthSelect: "Select a month", labelYearSelect: "Select a year", monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"], today: "Today", clear: "Clear", close: "Ok", closeOnSelect: !1, format: "d mmmm, yyyy", klass: { table: t + "table", header: t + "header", date_display: t + "date-display", day_display: t + "day-display", month_display: t + "month-display", year_display: t + "year-display", calendar_container: t + "calendar-container", navPrev: t + "nav--prev", navNext: t + "nav--next", navDisabled: t + "nav--disabled", month: t + "month", year: t + "year", selectMonth: t + "select--month", selectYear: t + "select--year", weekdays: t + "weekday", day: t + "day", disabled: t + "day--disabled", selected: t + "day--selected", highlighted: t + "day--highlighted", now: t + "day--today", infocus: t + "day--infocus", outfocus: t + "day--outfocus", footer: t + "footer", buttonClear: t + "button--clear", buttonToday: t + "button--today", buttonClose: t + "button--close" } };
    }(t.klasses().picker + "__"), t.extend("pickadate", i);
}), function (t) {
    function e(t) {
        return document.createElementNS(l, t);
    }function i(t) {
        return (t < 10 ? "0" : "") + t;
    }function n(t) {
        var e = ++m + "";return t ? t + e : e;
    }function o(o, r) {
        function l(t, e) {
            var i = d.offset(),
                n = /^touch/.test(t.type),
                o = i.left + g,
                a = i.top + g,
                l = (n ? t.originalEvent.touches[0] : t).pageX - o,
                c = (n ? t.originalEvent.touches[0] : t).pageY - a,
                u = Math.sqrt(l * l + c * c),
                p = !1;if (!e || !(u < y - w || u > y + w)) {
                t.preventDefault();var v = setTimeout(function () {
                    E.popover.addClass("clockpicker-moving");
                }, 200);E.setHand(l, c, !e, !0), s.off(h).on(h, function (t) {
                    t.preventDefault();var e = /^touch/.test(t.type),
                        i = (e ? t.originalEvent.touches[0] : t).pageX - o,
                        n = (e ? t.originalEvent.touches[0] : t).pageY - a;(p || i !== l || n !== c) && (p = !0, E.setHand(i, n, !1, !0));
                }), s.off(f).on(f, function (t) {
                    s.off(f), t.preventDefault();var i = /^touch/.test(t.type),
                        n = (i ? t.originalEvent.changedTouches[0] : t).pageX - o,
                        u = (i ? t.originalEvent.changedTouches[0] : t).pageY - a;(e || p) && n === l && u === c && E.setHand(n, u), "hours" === E.currentView ? E.toggleView("minutes", x / 2) : r.autoclose && (E.minutesView.addClass("clockpicker-dial-out"), setTimeout(function () {
                        E.done();
                    }, x / 2)), d.prepend(z), clearTimeout(v), E.popover.removeClass("clockpicker-moving"), s.off(h);
                });
            }
        }var u = t(C),
            d = u.find(".clockpicker-plate"),
            v = u.find(".picker__holder"),
            m = u.find(".clockpicker-hours"),
            T = u.find(".clockpicker-minutes"),
            S = u.find(".clockpicker-am-pm-block"),
            P = "INPUT" === o.prop("tagName"),
            A = P ? o : o.find("input"),
            O = t("label[for=" + A.attr("id") + "]"),
            E = this;this.id = n("cp"), this.element = o, this.holder = v, this.options = r, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = P, this.input = A, this.label = O, this.popover = u, this.plate = d, this.hoursView = m, this.minutesView = T, this.amPmBlock = S, this.spanHours = u.find(".clockpicker-span-hours"), this.spanMinutes = u.find(".clockpicker-span-minutes"), this.spanAmPm = u.find(".clockpicker-span-am-pm"), this.footer = u.find(".picker__footer"), this.amOrPm = "PM", r.twelvehour && (r.ampmclickable ? (this.spanAmPm.empty(), t('<div id="click-am">AM</div>').on("click", function () {
            E.spanAmPm.children("#click-am").addClass("text-primary"), E.spanAmPm.children("#click-pm").removeClass("text-primary"), E.amOrPm = "AM";
        }).appendTo(this.spanAmPm), t('<div id="click-pm">PM</div>').on("click", function () {
            E.spanAmPm.children("#click-pm").addClass("text-primary"), E.spanAmPm.children("#click-am").removeClass("text-primary"), E.amOrPm = "PM";
        }).appendTo(this.spanAmPm)) : (this.spanAmPm.empty(), t('<div id="click-am">AM</div>').appendTo(this.spanAmPm), t('<div id="click-pm">PM</div>').appendTo(this.spanAmPm))), t('<button type="button" class="btn-flat picker__clear" tabindex="' + (r.twelvehour ? "3" : "1") + '">' + r.cleartext + "</button>").click(t.proxy(this.clear, this)).appendTo(this.footer), t('<button type="button" class="btn-flat picker__close" tabindex="' + (r.twelvehour ? "3" : "1") + '">' + r.canceltext + "</button>").click(t.proxy(this.hide, this)).appendTo(this.footer), t('<button type="button" class="btn-flat picker__close" tabindex="' + (r.twelvehour ? "3" : "1") + '">' + r.donetext + "</button>").click(t.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(t.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(t.proxy(this.toggleView, this, "minutes")), A.on("focus.clockpicker click.clockpicker", t.proxy(this.show, this));var _,
            M,
            I,
            D,
            q = t('<div class="clockpicker-tick"></div>');if (r.twelvehour) for (_ = 1; _ < 13; _ += 1) {
            M = q.clone(), I = _ / 6 * Math.PI, D = y, M.css({ left: g + Math.sin(I) * D - w, top: g - Math.cos(I) * D - w }), M.html(0 === _ ? "00" : _), m.append(M), M.on(p, l);
        } else for (_ = 0; _ < 24; _ += 1) {
            M = q.clone(), I = _ / 6 * Math.PI, D = _ > 0 && _ < 13 ? b : y, M.css({ left: g + Math.sin(I) * D - w, top: g - Math.cos(I) * D - w }), M.html(0 === _ ? "00" : _), m.append(M), M.on(p, l);
        }for (_ = 0; _ < 60; _ += 5) {
            M = q.clone(), I = _ / 30 * Math.PI, M.css({ left: g + Math.sin(I) * y - w, top: g - Math.cos(I) * y - w }), M.html(i(_)), T.append(M), M.on(p, l);
        }if (d.on(p, function (e) {
            0 === t(e.target).closest(".clockpicker-tick").length && l(e, !0);
        }), c) {
            var z = u.find(".clockpicker-canvas"),
                V = e("svg");V.setAttribute("class", "clockpicker-svg"), V.setAttribute("width", k), V.setAttribute("height", k);var H = e("g");H.setAttribute("transform", "translate(" + g + "," + g + ")");var L = e("circle");L.setAttribute("class", "clockpicker-canvas-bearing"), L.setAttribute("cx", 0), L.setAttribute("cy", 0), L.setAttribute("r", 4);var j = e("line");j.setAttribute("x1", 0), j.setAttribute("y1", 0);var $ = e("circle");$.setAttribute("class", "clockpicker-canvas-bg"), $.setAttribute("r", w), H.appendChild(j), H.appendChild($), H.appendChild(L), V.appendChild(H), z.append(V), this.hand = j, this.bg = $, this.bearing = L, this.g = H, this.canvas = z;
        }a(this.options.init);
    }function a(t) {
        t && "function" == typeof t && t();
    }var r = t(window),
        s = t(document),
        l = "http://www.w3.org/2000/svg",
        c = "SVGAngle" in window && function () {
        var t,
            e = document.createElement("div");return e.innerHTML = "<svg/>", t = (e.firstChild && e.firstChild.namespaceURI) == l, e.innerHTML = "", t;
    }(),
        u = function () {
        var t = document.createElement("div").style;return "transition" in t || "WebkitTransition" in t || "MozTransition" in t || "msTransition" in t || "OTransition" in t;
    }(),
        d = "ontouchstart" in window,
        p = "mousedown" + (d ? " touchstart" : ""),
        h = "mousemove.clockpicker" + (d ? " touchmove.clockpicker" : ""),
        f = "mouseup.clockpicker" + (d ? " touchend.clockpicker" : ""),
        v = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
        m = 0,
        g = 135,
        y = 105,
        b = 70,
        w = 20,
        k = 2 * g,
        x = u ? 350 : 1,
        C = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__container__wrapper">', '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");o.DEFAULTS = { default: "", fromnow: 0, donetext: "Ok", cleartext: "Clear", canceltext: "Cancel", autoclose: !1, ampmclickable: !0, darktheme: !1, twelvehour: !0, vibrate: !0 }, o.prototype.toggle = function () {
        this[this.isShown ? "hide" : "show"]();
    }, o.prototype.locate = function () {
        var t = this.element,
            e = this.popover;t.offset(), t.outerWidth(), t.outerHeight(), this.options.align;e.show();
    }, o.prototype.show = function (e) {
        if (!this.isShown) {
            a(this.options.beforeShow), t(":input").each(function () {
                t(this).attr("tabindex", -1);
            });var n = this;this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), t(document.body).css("overflow", "hidden");var o = ((this.input.prop("value") || this.options.default || "") + "").split(":");if (this.options.twelvehour && void 0 !== o[1] && (o[1].indexOf("AM") > 0 ? this.amOrPm = "AM" : this.amOrPm = "PM", o[1] = o[1].replace("AM", "").replace("PM", "")), "now" === o[0]) {
                var l = new Date(+new Date() + this.options.fromnow);o = [l.getHours(), l.getMinutes()], this.options.twelvehour && (this.amOrPm = o[0] >= 12 && o[0] < 24 ? "PM" : "AM");
            }if (this.hours = +o[0] || 0, this.minutes = +o[1] || 0, this.spanHours.html(this.hours), this.spanMinutes.html(i(this.minutes)), !this.isAppended) {
                var c = document.querySelector(this.options.container);this.options.container && c ? c.appendChild(this.popover[0]) : this.popover.insertAfter(this.input), this.options.twelvehour && ("PM" === this.amOrPm ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.spanAmPm.children("#click-am").addClass("text-primary"), this.spanAmPm.children("#click-pm").removeClass("text-primary"))), r.on("resize.clockpicker" + this.id, function () {
                    n.isShown && n.locate();
                }), this.isAppended = !0;
            }this.toggleView("hours"), this.locate(), this.isShown = !0, s.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function (e) {
                var i = t(e.target);0 === i.closest(n.popover.find(".picker__wrap")).length && 0 === i.closest(n.input).length && n.hide();
            }), s.on("keyup.clockpicker." + this.id, function (t) {
                27 === t.keyCode && n.hide();
            }), a(this.options.afterShow);
        }
    }, o.prototype.hide = function () {
        a(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), t(document.body).css("overflow", "visible"), this.isShown = !1, t(":input").each(function (e) {
            t(this).attr("tabindex", e + 1);
        }), s.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), s.off("keyup.clockpicker." + this.id), this.popover.hide(), a(this.options.afterHide);
    }, o.prototype.toggleView = function (e, i) {
        var n = !1;"minutes" === e && "visible" === t(this.hoursView).css("visibility") && (a(this.options.beforeHourSelect), n = !0);var o = "hours" === e,
            r = o ? this.hoursView : this.minutesView,
            s = o ? this.minutesView : this.hoursView;this.currentView = e, this.spanHours.toggleClass("text-primary", o), this.spanMinutes.toggleClass("text-primary", !o), s.addClass("clockpicker-dial-out"), r.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(i), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
            s.css("visibility", "hidden");
        }, x), n && a(this.options.afterHourSelect);
    }, o.prototype.resetClock = function (t) {
        var e = this.currentView,
            i = this[e],
            n = "hours" === e,
            o = i * (Math.PI / (n ? 6 : 30)),
            a = n && i > 0 && i < 13 ? b : y,
            r = Math.sin(o) * a,
            s = -Math.cos(o) * a,
            l = this;c && t ? (l.canvas.addClass("clockpicker-canvas-out"), setTimeout(function () {
            l.canvas.removeClass("clockpicker-canvas-out"), l.setHand(r, s);
        }, t)) : this.setHand(r, s);
    }, o.prototype.setHand = function (e, n, o, a) {
        var r,
            s = Math.atan2(e, -n),
            l = "hours" === this.currentView,
            u = Math.PI / (l || o ? 6 : 30),
            d = Math.sqrt(e * e + n * n),
            p = this.options,
            h = l && d < (y + b) / 2,
            f = h ? b : y;if (p.twelvehour && (f = y), s < 0 && (s = 2 * Math.PI + s), r = Math.round(s / u), s = r * u, p.twelvehour ? l ? 0 === r && (r = 12) : (o && (r *= 5), 60 === r && (r = 0)) : l ? (12 === r && (r = 0), r = h ? 0 === r ? 12 : r : 0 === r ? 0 : r + 12) : (o && (r *= 5), 60 === r && (r = 0)), this[this.currentView] !== r && v && this.options.vibrate && (this.vibrateTimer || (navigator[v](10), this.vibrateTimer = setTimeout(t.proxy(function () {
            this.vibrateTimer = null;
        }, this), 100))), this[this.currentView] = r, l ? this.spanHours.html(r) : this.spanMinutes.html(i(r)), c) {
            var m = Math.sin(s) * (f - w),
                g = -Math.cos(s) * (f - w),
                k = Math.sin(s) * f,
                x = -Math.cos(s) * f;this.hand.setAttribute("x2", m), this.hand.setAttribute("y2", g), this.bg.setAttribute("cx", k), this.bg.setAttribute("cy", x);
        } else this[l ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function () {
            var e = t(this);e.toggleClass("active", r === +e.html());
        });
    }, o.prototype.done = function () {
        a(this.options.beforeDone), this.hide(), this.label.addClass("active");var t = this.input.prop("value"),
            e = i(this.hours) + ":" + i(this.minutes);this.options.twelvehour && (e += this.amOrPm), this.input.prop("value", e), e !== t && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), a(this.options.afterDone);
    }, o.prototype.clear = function () {
        this.hide(), this.label.removeClass("active");var t = this.input.prop("value");this.input.prop("value", ""), "" !== t && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur");
    }, o.prototype.remove = function () {
        this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (r.off("resize.clockpicker" + this.id), this.popover.remove());
    }, t.fn.pickatime = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);return this.each(function () {
            var n = t(this),
                a = n.data("clockpicker");if (a) "function" == typeof a[e] && a[e].apply(a, i);else {
                var r = t.extend({}, o.DEFAULTS, n.data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e);n.data("clockpicker", new o(n, r));
            }
        });
    };
}(jQuery), function (t) {
    function e() {
        var e = +t(this).attr("data-length"),
            i = +t(this).val().length,
            n = i <= e;t(this).parent().find('span[class="character-counter"]').html(i + "/" + e), o(n, t(this));
    }function i(e) {
        var i = e.parent().find('span[class="character-counter"]');i.length || (i = t("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), e.parent().append(i));
    }function n() {
        t(this).parent().find('span[class="character-counter"]').html("");
    }function o(t, e) {
        var i = e.hasClass("invalid");t && i ? e.removeClass("invalid") : t || i || (e.removeClass("valid"), e.addClass("invalid"));
    }t.fn.characterCounter = function () {
        return this.each(function () {
            var o = t(this);o.parent().find('span[class="character-counter"]').length || void 0 !== o.attr("data-length") && (o.on("input", e), o.on("focus", e), o.on("blur", n), i(o));
        });
    }, t(document).ready(function () {
        t("input, textarea").characterCounter();
    });
}(jQuery), function (t) {
    var e = { init: function init(e) {
            var i = { duration: 200, dist: -100, shift: 0, padding: 0, fullWidth: !1, indicators: !1, noWrap: !1, onCycleTo: null };e = t.extend(i, e);var n = Materialize.objectSelectorString(t(this));return this.each(function (i) {
                function o(t) {
                    return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX;
                }function a(t) {
                    return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY;
                }function r(t) {
                    return t >= C ? t % C : t < 0 ? r(C + t % C) : t;
                }function s(i) {
                    E = !0, j.hasClass("scrolling") || j.addClass("scrolling"), null != H && window.clearTimeout(H), H = window.setTimeout(function () {
                        E = !1, j.removeClass("scrolling");
                    }, e.duration);var n,
                        o,
                        a,
                        s,
                        l,
                        c,
                        u,
                        d = w;if (b = "number" == typeof i ? i : b, w = Math.floor((b + x / 2) / x), a = b - w * x, s = a < 0 ? 1 : -1, l = -s * a * 2 / x, o = C >> 1, e.fullWidth ? u = "translateX(0)" : (u = "translateX(" + (j[0].clientWidth - m) / 2 + "px) ", u += "translateY(" + (j[0].clientHeight - g) / 2 + "px)"), N) {
                        var p = w % C,
                            h = V.find(".indicator-item.active");h.index() !== p && (h.removeClass("active"), V.find(".indicator-item").eq(p).addClass("active"));
                    }for ((!W || w >= 0 && w < C) && (c = v[r(w)], t(c).hasClass("active") || (j.find(".carousel-item").removeClass("active"), t(c).addClass("active")), c.style[_] = u + " translateX(" + -a / 2 + "px) translateX(" + s * e.shift * l * n + "px) translateZ(" + e.dist * l + "px)", c.style.zIndex = 0, e.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * l, c.style.opacity = tweenedOpacity, c.style.display = "block"), n = 1; n <= o; ++n) {
                        e.fullWidth ? (zTranslation = e.dist, tweenedOpacity = n === o && a < 0 ? 1 - l : 1) : (zTranslation = e.dist * (2 * n + l * s), tweenedOpacity = 1 - .2 * (2 * n + l * s)), (!W || w + n < C) && ((c = v[r(w + n)]).style[_] = u + " translateX(" + (e.shift + (x * n - a) / 2) + "px) translateZ(" + zTranslation + "px)", c.style.zIndex = -n, c.style.opacity = tweenedOpacity, c.style.display = "block"), e.fullWidth ? (zTranslation = e.dist, tweenedOpacity = n === o && a > 0 ? 1 - l : 1) : (zTranslation = e.dist * (2 * n - l * s), tweenedOpacity = 1 - .2 * (2 * n - l * s)), (!W || w - n >= 0) && ((c = v[r(w - n)]).style[_] = u + " translateX(" + (-e.shift + (-x * n - a) / 2) + "px) translateZ(" + zTranslation + "px)", c.style.zIndex = -n, c.style.opacity = tweenedOpacity, c.style.display = "block");
                    }if ((!W || w >= 0 && w < C) && ((c = v[r(w)]).style[_] = u + " translateX(" + -a / 2 + "px) translateX(" + s * e.shift * l + "px) translateZ(" + e.dist * l + "px)", c.style.zIndex = 0, e.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * l, c.style.opacity = tweenedOpacity, c.style.display = "block"), d !== w && "function" == typeof e.onCycleTo) {
                        var f = j.find(".carousel-item").eq(r(w));e.onCycleTo.call(this, f, q);
                    }"function" == typeof L && (L.call(this, f, q), L = null);
                }function l() {
                    var t, e, i;e = (t = Date.now()) - I, I = t, i = b - M, M = b, O = .8 * (1e3 * i / (1 + e)) + .2 * O;
                }function c() {
                    var t, i;P && (t = Date.now() - I, (i = P * Math.exp(-t / e.duration)) > 2 || i < -2 ? (s(A - i), requestAnimationFrame(c)) : s(A));
                }function u(i) {
                    if (q) return i.preventDefault(), i.stopPropagation(), !1;if (!e.fullWidth) {
                        var n = t(i.target).closest(".carousel-item").index();0 !== r(w) - n && (i.preventDefault(), i.stopPropagation()), d(n);
                    }
                }function d(t) {
                    var e = w % C - t;W || (e < 0 ? Math.abs(e + C) < Math.abs(e) && (e += C) : e > 0 && Math.abs(e - C) < e && (e -= C)), e < 0 ? j.trigger("carouselNext", [Math.abs(e)]) : e > 0 && j.trigger("carouselPrev", [e]);
                }function p(e) {
                    "mousedown" === e.type && t(e.target).is("img") && e.preventDefault(), k = !0, q = !1, z = !1, T = o(e), S = a(e), O = P = 0, M = b, I = Date.now(), clearInterval(D), D = setInterval(l, 100);
                }function h(t) {
                    var e, i;if (k) if (e = o(t), y = a(t), i = T - e, Math.abs(S - y) < 30 && !z) (i > 2 || i < -2) && (q = !0, T = e, s(b + i));else {
                        if (q) return t.preventDefault(), t.stopPropagation(), !1;z = !0;
                    }if (q) return t.preventDefault(), t.stopPropagation(), !1;
                }function f(t) {
                    if (k) return k = !1, clearInterval(D), A = b, (O > 10 || O < -10) && (A = b + (P = .9 * O)), A = Math.round(A / x) * x, W && (A >= x * (C - 1) ? A = x * (C - 1) : A < 0 && (A = 0)), P = A - b, I = Date.now(), requestAnimationFrame(c), q && (t.preventDefault(), t.stopPropagation()), !1;
                }var v,
                    m,
                    g,
                    b,
                    w,
                    k,
                    x,
                    C,
                    T,
                    S,
                    P,
                    A,
                    O,
                    E,
                    _,
                    M,
                    I,
                    D,
                    q,
                    z,
                    V = t('<ul class="indicators"></ul>'),
                    H = null,
                    L = null,
                    j = t(this),
                    $ = j.find(".carousel-item").length > 1,
                    N = (j.attr("data-indicators") || e.indicators) && $,
                    W = j.attr("data-no-wrap") || e.noWrap || !$,
                    F = j.attr("data-namespace") || n + i;j.attr("data-namespace", F);var Q = function Q(e) {
                    var i = j.find(".carousel-item.active").length ? j.find(".carousel-item.active").first() : j.find(".carousel-item").first(),
                        n = i.find("img").first();if (n.length) {
                        if (n[0].complete) {
                            if (n.height() > 0) j.css("height", n.height());else {
                                var o = n[0].naturalWidth,
                                    a = n[0].naturalHeight,
                                    r = j.width() / o * a;j.css("height", r);
                            }
                        } else n.on("load", function () {
                            j.css("height", t(this).height());
                        });
                    } else if (!e) {
                        var s = i.height();j.css("height", s);
                    }
                };if (e.fullWidth && (e.dist = 0, Q(), N && j.find(".carousel-fixed-item").addClass("with-indicators")), j.hasClass("initialized")) return t(window).trigger("resize"), j.trigger("carouselNext", [1e-6]), !0;j.addClass("initialized"), k = !1, b = A = 0, v = [], m = j.find(".carousel-item").first().innerWidth(), g = j.find(".carousel-item").first().innerHeight(), x = 2 * m + e.padding, j.find(".carousel-item").each(function (e) {
                    if (v.push(t(this)[0]), N) {
                        var i = t('<li class="indicator-item"></li>');0 === e && i.addClass("active"), i.click(function (e) {
                            e.stopPropagation(), d(t(this).index());
                        }), V.append(i);
                    }
                }), N && j.append(V), C = v.length, _ = "transform", ["webkit", "Moz", "O", "ms"].every(function (t) {
                    var e = t + "Transform";return void 0 === document.body.style[e] || (_ = e, !1);
                });var X = Materialize.throttle(function () {
                    if (e.fullWidth) {
                        m = j.find(".carousel-item").first().innerWidth();j.find(".carousel-item.active").height();x = 2 * m + e.padding, A = b = 2 * w * m, Q(!0);
                    } else s();
                }, 200);t(window).off("resize.carousel-" + F).on("resize.carousel-" + F, X), void 0 !== window.ontouchstart && (j.on("touchstart.carousel", p), j.on("touchmove.carousel", h), j.on("touchend.carousel", f)), j.on("mousedown.carousel", p), j.on("mousemove.carousel", h), j.on("mouseup.carousel", f), j.on("mouseleave.carousel", f), j.on("click.carousel", u), s(b), t(this).on("carouselNext", function (t, e, i) {
                    void 0 === e && (e = 1), "function" == typeof i && (L = i), A = x * Math.round(b / x) + x * e, b !== A && (P = A - b, I = Date.now(), requestAnimationFrame(c));
                }), t(this).on("carouselPrev", function (t, e, i) {
                    void 0 === e && (e = 1), "function" == typeof i && (L = i), A = x * Math.round(b / x) - x * e, b !== A && (P = A - b, I = Date.now(), requestAnimationFrame(c));
                }), t(this).on("carouselSet", function (t, e, i) {
                    void 0 === e && (e = 0), "function" == typeof i && (L = i), d(e);
                });
            });
        }, next: function next(e, i) {
            t(this).trigger("carouselNext", [e, i]);
        }, prev: function prev(e, i) {
            t(this).trigger("carouselPrev", [e, i]);
        }, set: function set(e, i) {
            t(this).trigger("carouselSet", [e, i]);
        }, destroy: function destroy() {
            var e = t(this).attr("data-namespace");t(this).removeAttr("data-namespace"), t(this).removeClass("initialized"), t(this).find(".indicators").remove(), t(this).off("carouselNext carouselPrev carouselSet"), t(window).off("resize.carousel-" + e), void 0 !== window.ontouchstart && t(this).off("touchstart.carousel touchmove.carousel touchend.carousel"), t(this).off("mousedown.carousel mousemove.carousel mouseup.carousel mouseleave.carousel click.carousel");
        } };t.fn.carousel = function (i) {
        return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof i === "undefined" ? "undefined" : _typeof(i)) && i ? void t.error("Method " + i + " does not exist on jQuery.carousel") : e.init.apply(this, arguments);
    };
}(jQuery), function (t) {
    var e = { init: function init(e) {
            return this.each(function () {
                var i = t("#" + t(this).attr("data-activates")),
                    n = (t("body"), t(this)),
                    o = n.parent(".tap-target-wrapper"),
                    a = o.find(".tap-target-wave"),
                    r = o.find(".tap-target-origin"),
                    s = n.find(".tap-target-content");o.length || (o = n.wrap(t('<div class="tap-target-wrapper"></div>')).parent()), s.length || (s = t('<div class="tap-target-content"></div>'), n.append(s)), a.length || (a = t('<div class="tap-target-wave"></div>'), r.length || ((r = i.clone(!0, !0)).addClass("tap-target-origin"), r.removeAttr("id"), r.removeAttr("style"), a.append(r)), o.append(a));var l = function l() {
                    o.is(".open") && (o.removeClass("open"), r.off("click.tapTarget"), t(document).off("click.tapTarget"), t(window).off("resize.tapTarget"));
                },
                    c = function c() {
                    var e = "fixed" === i.css("position");if (!e) for (var r = i.parents(), l = 0; l < r.length && !(e = "fixed" == t(r[l]).css("position")); l++) {}var c = i.outerWidth(),
                        u = i.outerHeight(),
                        d = e ? i.offset().top - t(document).scrollTop() : i.offset().top,
                        p = e ? i.offset().left - t(document).scrollLeft() : i.offset().left,
                        h = t(window).width(),
                        f = t(window).height(),
                        v = h / 2,
                        m = f / 2,
                        g = p <= v,
                        y = p > v,
                        b = d <= m,
                        w = d > m,
                        k = p >= .25 * h && p <= .75 * h,
                        x = n.outerWidth(),
                        C = n.outerHeight(),
                        T = d + u / 2 - C / 2,
                        S = p + c / 2 - x / 2,
                        P = e ? "fixed" : "absolute",
                        A = k ? x : x / 2 + c,
                        O = C / 2,
                        E = b ? C / 2 : 0,
                        _ = g && !k ? x / 2 - c : 0,
                        M = c,
                        I = w ? "bottom" : "top",
                        D = 2 * c,
                        q = D,
                        z = C / 2 - q / 2,
                        V = x / 2 - D / 2,
                        H = {};H.top = b ? T : "", H.right = y ? h - S - x : "", H.bottom = w ? f - T - C : "", H.left = g ? S : "", H.position = P, o.css(H), s.css({ width: A, height: O, top: E, right: 0, bottom: 0, left: _, padding: M, verticalAlign: I }), a.css({ top: z, left: V, width: D, height: q });
                };"open" == e && (c(), o.is(".open") || (o.addClass("open"), setTimeout(function () {
                    r.off("click.tapTarget").on("click.tapTarget", function (t) {
                        l(), r.off("click.tapTarget");
                    }), t(document).off("click.tapTarget").on("click.tapTarget", function (e) {
                        l(), t(document).off("click.tapTarget");
                    });var e = Materialize.throttle(function () {
                        c();
                    }, 200);t(window).off("resize.tapTarget").on("resize.tapTarget", e);
                }, 0))), "close" == e && l();
            });
        }, open: function open() {}, close: function close() {} };t.fn.tapTarget = function (i) {
        if (e[i] || "object" == (typeof i === "undefined" ? "undefined" : _typeof(i))) return e.init.apply(this, arguments);t.error("Method " + i + " does not exist on jQuery.tap-target");
    };
}(jQuery);
/*!
 * Isotope PACKAGED v3.0.5
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

!function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n,
                s = "$()." + i + '("' + e + '")';return t.each(function (t, u) {
                var h = a.data(u, i);if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);var d = h[e];if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");var l = d.apply(h, o);n = void 0 === n ? l : n;
            }), void 0 !== n ? n : t;
        }function h(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n));
            });
        }a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);return u(this, t, e);
            }return h(this, t), this;
        }, o(a));
    }function o(t) {
        !t || t && t.bridget || (t.bridget = i);
    }var n = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function () {} : function (t) {
        s.error(t);
    };return o(e || t.jQuery), i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function () {
    function t() {}var e = t.prototype;return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                o = i[t] = i[t] || [];return o.indexOf(e) == -1 && o.push(e), this;
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);var i = this._onceEvents = this._onceEvents || {},
                o = i[t] = i[t] || {};return o[e] = !0, this;
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];if (i && i.length) {
            var o = i.indexOf(e);return o != -1 && i.splice(o, 1), this;
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];if (i && i.length) {
            i = i.slice(0), e = e || [];for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n],
                    r = o && o[s];r && (this.off(t, s), delete o[s]), s.apply(this, e);
            }return this;
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents;
    }, t;
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
        return e();
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
    "use strict";
    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);return i && e;
    }function e() {}function i() {
        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < h; e++) {
            var i = u[e];t[i] = 0;
        }return t;
    }function o(t) {
        var e = getComputedStyle(t);return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
    }function n() {
        if (!d) {
            d = !0;var e = document.createElement("div");e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";var i = document.body || document.documentElement;i.appendChild(e);var n = o(e);s.isBoxSizeOuter = r = 200 == t(n.width), i.removeChild(e);
        }
    }function s(e) {
        if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.nodeType) {
            var s = o(e);if ("none" == s.display) return i();var a = {};a.width = e.offsetWidth, a.height = e.offsetHeight;for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l],
                    c = s[f],
                    m = parseFloat(c);a[f] = isNaN(m) ? 0 : m;
            }var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                I = a.borderTopWidth + a.borderBottomWidth,
                z = d && r,
                x = t(s.width);x !== !1 && (a.width = x + (z ? 0 : p + _));var S = t(s.height);return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a;
        }
    }var r,
        a = "undefined" == typeof console ? e : function (t) {
        console.error(t);
    },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1;return s;
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;if (t.matches) return "matches";if (t.matchesSelector) return "matchesSelector";for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i],
                n = o + "MatchesSelector";if (t[n]) return n;
        }
    }();return function (e, i) {
        return e[t](i);
    };
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function (t, e) {
    var i = {};i.extend = function (t, e) {
        for (var i in e) {
            t[i] = e[i];
        }return t;
    }, i.modulo = function (t, e) {
        return (t % e + e) % e;
    }, i.makeArray = function (t) {
        var e = [];if (Array.isArray(t)) e = t;else if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.length) for (var i = 0; i < t.length; i++) {
            e.push(t[i]);
        } else e.push(t);return e;
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);i != -1 && t.splice(i, 1);
    }, i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body;) {
            if (t = t.parentNode, e(t, i)) return t;
        }
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;this[e] && this[e](t);
    }, i.filterFindElements = function (t, o) {
        t = i.makeArray(t);var n = [];return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);e(t, o) && n.push(t);for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) {
                    n.push(i[s]);
                }
            }
        }), n;
    }, i.debounceMethod = function (t, e, i) {
        var o = t.prototype[e],
            n = e + "Timeout";t.prototype[e] = function () {
            var t = this[n];t && clearTimeout(t);var e = arguments,
                s = this;this[n] = setTimeout(function () {
                o.apply(s, e), delete s[n];
            }, i || 100);
        };
    }, i.docReady = function (t) {
        var e = document.readyState;"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
        }).toLowerCase();
    };var o = t.console;return i.htmlInit = function (e, n) {
        i.docReady(function () {
            var s = i.toDashed(n),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options",
                l = t.jQuery;h.forEach(function (t) {
                var i,
                    s = t.getAttribute(r) || t.getAttribute(d);try {
                    i = s && JSON.parse(s);
                } catch (a) {
                    return void (o && o.error("Error parsing " + r + " on " + t.className + ": " + a));
                }var u = new e(t, i);l && l.data(t, n, u);
            });
        });
    }, i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function (t, e) {
    "use strict";
    function i(t) {
        for (var e in t) {
            return !1;
        }return e = null, !0;
    }function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create());
    }function n(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase();
        });
    }var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
        h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
        d = o.prototype = Object.create(t.prototype);d.constructor = o, d._create = function () {
        this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" });
    }, d.handleEvent = function (t) {
        var e = "on" + t.type;this[e] && this[e](t);
    }, d.getSize = function () {
        this.size = e(this.element);
    }, d.css = function (t) {
        var e = this.element.style;for (var i in t) {
            var o = h[i] || i;e[o] = t[i];
        }
    }, d.getPosition = function () {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"],
            n = t[i ? "top" : "bottom"],
            s = this.layout.size,
            r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
            a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a;
    }, d.layoutPosition = function () {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[n];e[s] = this.getXValue(a), e[r] = "";var u = o ? "paddingTop" : "paddingBottom",
            h = o ? "top" : "bottom",
            d = o ? "bottom" : "top",
            l = this.position.y + t[u];e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]);
    }, d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
    }, d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
    }, d._transitionTo = function (t, e) {
        this.getPosition();var i = this.position.x,
            o = this.position.y,
            n = parseInt(t, 10),
            s = parseInt(e, 10),
            r = n === this.position.x && s === this.position.y;if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();var a = t - i,
            u = e - o,
            h = {};h.transform = this.getTranslate(a, u), this.transition({ to: h, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
    }, d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop");return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
    }, d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
        this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10);
    }, d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);for (var e in t.onTransitionEnd) {
            t.onTransitionEnd[e].call(this);
        }
    }, d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);var e = this._transn;for (var i in t.onTransitionEnd) {
            e.onEnd[i] = t.onTransitionEnd[i];
        }for (i in t.to) {
            e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        }if (t.from) {
            this.css(t.from);var o = this.element.offsetHeight;o = null;
        }this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
    };var l = "opacity," + n(a);d.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1);
        }
    }, d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
    }, d.onotransitionend = function (t) {
        this.ontransitionend(t);
    };var f = { "-webkit-transform": "transform" };d.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn,
                o = f[t.propertyName] || t.propertyName;if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                var n = e.onEnd[o];n.call(this), delete e.onEnd[o];
            }this.emitEvent("transitionEnd", [this]);
        }
    }, d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1;
    }, d._removeStyles = function (t) {
        var e = {};for (var i in t) {
            e[i] = "";
        }this.css(e);
    };var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };return d.removeTransitionStyles = function () {
        this.css(c);
    }, d.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
    }, d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
    }, d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem();
        }), void this.hide()) : void this.removeElem();
    }, d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
    }, d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
    }, d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];if (e.opacity) return "opacity";for (var i in e) {
            return i;
        }
    }, d.hide = function () {
        this.isHidden = !0, this.css({ display: "" });var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
    }, d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
    }, d.destroy = function () {
        this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
    }, o;
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
        return e(t, i, o, n, s);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
        var i = o.getQueryElement(t);if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);var n = ++l;this.element.outlayerGUID = n, f[n] = this, this._create();var s = this._getOption("initLayout");s && this.layout();
    }function r(t) {
        function e() {
            t.apply(this, arguments);
        }return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
    }function a(t) {
        if ("number" == typeof t) return t;var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            o = e && e[2];if (!i.length) return 0;i = parseFloat(i);var n = m[o] || 1;return i * n;
    }var u = t.console,
        h = t.jQuery,
        d = function d() {},
        l = 0,
        f = {};s.namespace = "outlayer", s.Item = n, s.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };var c = s.prototype;o.extend(c, e.prototype), c.option = function (t) {
        o.extend(this.options, t);
    }, c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
    }, s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, c._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);var t = this._getOption("resize");t && this.bindResize();
    }, c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
    }, c._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n],
                r = new i(s, this);o.push(r);
        }return o;
    }, c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
    }, c.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element;
        });
    }, c.layout = function () {
        this._resetLayout(), this._manageStamps();var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;this.layoutItems(this.items, e), this._isLayoutInited = !0;
    }, c._init = c.layout, c._resetLayout = function () {
        this.getSize();
    }, c.getSize = function () {
        this.size = i(this.element);
    }, c._getMeasurement = function (t, e) {
        var o,
            n = this.options[t];n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0;
    }, c.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
    }, c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored;
        });
    }, c._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];t.forEach(function (t) {
                var o = this._getItemLayoutPosition(t);o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o);
            }, this), this._processLayoutQueue(i);
        }
    }, c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
    }, c._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
        }, this);
    }, c.updateStagger = function () {
        var t = this.options.stagger;return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
    }, c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
    }, c._postLayout = function () {
        this.resizeContainer();
    }, c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");if (t) {
            var e = this._getContainerSize();e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
        }
    }, c._emitCompleteOnItems = function (t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e]);
        }function o() {
            r++, r == s && i();
        }var n = this,
            s = e.length;if (!e || !s) return void i();var r = 0;e.forEach(function (e) {
            e.once(t, o);
        });
    }, c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) {
            var n = h.Event(e);n.type = t, this.$element.trigger(n, i);
        } else this.$element.trigger(t, i);
    }, c.ignore = function (t) {
        var e = this.getItem(t);e && (e.isIgnored = !0);
    }, c.unignore = function (t) {
        var e = this.getItem(t);e && delete e.isIgnored;
    }, c.stamp = function (t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
    }, c.unstamp = function (t) {
        t = this._find(t), t && t.forEach(function (t) {
            o.removeFrom(this.stamps, t), this.unignore(t);
        }, this);
    }, c._find = function (t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t);
    }, c._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
    }, c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
            e = this.size;this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) };
    }, c._manageStamp = d, c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
            o = this._boundingRect,
            n = i(t),
            s = { left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom };return s;
    }, c.handleEvent = o.handleEvent, c.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0;
    }, c.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1;
    }, c.onresize = function () {
        this.resize();
    }, o.debounceMethod(s, "onresize", 100), c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
    }, c.needsResizeLayout = function () {
        var t = i(this.element),
            e = this.size && t;return e && t.innerWidth !== this.size.innerWidth;
    }, c.addItems = function (t) {
        var e = this._itemize(t);return e.length && (this.items = this.items.concat(e)), e;
    }, c.appended = function (t) {
        var e = this.addItems(t);e.length && (this.layoutItems(e, !0), this.reveal(e));
    }, c.prepended = function (t) {
        var e = this._itemize(t);if (e.length) {
            var i = this.items.slice(0);this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
        }
    }, c.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal();
            });
        }
    }, c.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();t.forEach(function (t, i) {
                t.stagger(i * e), t.hide();
            });
        }
    }, c.revealItemElements = function (t) {
        var e = this.getItems(t);this.reveal(e);
    }, c.hideItemElements = function (t) {
        var e = this.getItems(t);this.hide(e);
    }, c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];if (i.element == t) return i;
        }
    }, c.getItems = function (t) {
        t = o.makeArray(t);var e = [];return t.forEach(function (t) {
            var i = this.getItem(t);i && e.push(i);
        }, this), e;
    }, c.remove = function (t) {
        var e = this.getItems(t);this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), o.removeFrom(this.items, t);
        }, this);
    }, c.destroy = function () {
        var t = this.element.style;t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy();
        }), this.unbindResize();var e = this.element.outlayerGUID;delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
    }, s.data = function (t) {
        t = o.getQueryElement(t);var e = t && t.outlayerGUID;return e && f[e];
    }, s.create = function (t, e) {
        var i = r(s);return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i;
    };var m = { ms: 1, s: 1e3 };return s.Item = n, s;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer));
}(window, function (t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments);
    }var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;i._create = function () {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {};
    }, i.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();var t = this.layout.options.getSortData,
                e = this.layout._sorters;for (var i in t) {
                var o = e[i];this.sortData[i] = o(this.element, this);
            }
        }
    };var n = i.destroy;return i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
    }, e;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
}(window, function (t, e) {
    "use strict";
    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size);
    }var o = i.prototype,
        n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];return n.forEach(function (t) {
        o[t] = function () {
            return e.prototype[t].apply(this.isotope, arguments);
        };
    }), o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;return i && e.innerHeight != this.isotope.size.innerHeight;
    }, o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
    }, o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
    }, o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
    }, o.getSegmentSize = function (t, e) {
        var i = t + e,
            o = "outer" + e;if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();this[i] = n && n[o] || this.isotope.size["inner" + e];
        }
    }, o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];return e && e.element && t(e.element);
    }, o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
    }, o.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size;
    }, i.modes = {}, i.create = function (t, e) {
        function n() {
            i.apply(this, arguments);
        }return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n;
    }, i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function (t, e) {
    var i = t.create("masonry");i.compatOptions.fitWidth = "isFitWidth";var o = i.prototype;return o._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];for (var t = 0; t < this.cols; t++) {
            this.colYs.push(0);
        }this.maxY = 0, this.horizontalColIndex = 0;
    }, o.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;this.columnWidth = i && e(i).outerWidth || this.containerWidth;
        }var o = this.columnWidth += this.gutter,
            n = this.containerWidth + this.gutter,
            s = n / o,
            r = o - n % o,
            a = r && r < 1 ? "round" : "floor";s = Math[a](s), this.cols = Math.max(s, 1);
    }, o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            o = e(i);this.containerWidth = o && o.innerWidth;
    }, o._getItemLayoutPosition = function (t) {
        t.getSize();var e = t.size.outerWidth % this.columnWidth,
            i = e && e < 1 ? "round" : "ceil",
            o = Math[i](t.size.outerWidth / this.columnWidth);o = Math.min(o, this.cols);for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = { x: this.columnWidth * s.col, y: s.y }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) {
            this.colYs[h] = a;
        }return r;
    }, o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);return { col: e.indexOf(i), y: i };
    }, o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
            e[o] = this._getColGroupY(o, t);
        }return e;
    }, o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];var i = this.colYs.slice(t, t + e);return Math.max.apply(Math, i);
    }, o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
            o = t > 1 && i + t > this.cols;i = o ? 0 : i;var n = e.size.outerWidth && e.size.outerHeight;return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, { col: i, y: this._getColGroupY(i, t) };
    }, o._manageStamp = function (t) {
        var i = e(t),
            o = this._getElementOffset(t),
            n = this._getOption("originLeft"),
            s = n ? o.left : o.right,
            r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);a = Math.max(0, a);var u = Math.floor(r / this.columnWidth);u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) {
            this.colYs[l] = Math.max(d, this.colYs[l]);
        }
    }, o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);var t = { height: this.maxY };return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
    }, o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
            t++;
        }return (this.cols - t) * this.columnWidth - this.gutter;
    }, o.needsResizeLayout = function () {
        var t = this.containerWidth;return this.getContainerWidth(), t != this.containerWidth;
    }, i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
}(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
        o = i.prototype,
        n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };for (var s in e.prototype) {
        n[s] || (o[s] = e.prototype[s]);
    }var r = o.measureColumns;o.measureColumns = function () {
        this.items = this.isotope.filteredItems, r.call(this);
    };var a = o._getOption;return o._getOption = function (t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
    }, i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;return i._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);var o = { x: this.x, y: this.y };return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o;
    }, i._getContainerSize = function () {
        return { height: this.maxY };
    }, e;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
        i = e.prototype;return i._resetLayout = function () {
        this.y = 0;
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;return this.y += t.size.outerHeight, { x: e, y: i };
    }, i._getContainerSize = function () {
        return { height: this.y };
    }, e;
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
}(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
        return function (i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n],
                    r = i.sortData[s],
                    a = o.sortData[s];if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1;return (r > a ? 1 : -1) * h;
                }
            }return 0;
        };
    }var u = t.jQuery,
        h = String.prototype.trim ? function (t) {
        return t.trim();
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "");
    },
        d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });d.Item = s, d.LayoutMode = r;var l = d.prototype;l._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];for (var t in r.modes) {
            this._initLayoutMode(t);
        }
    }, l.reloadItems = function () {
        this.itemGUID = 0, e.prototype.reloadItems.call(this);
    }, l._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];o.id = this.itemGUID++;
        }return this._updateItemsSortData(t), t;
    }, l._initLayoutMode = function (t) {
        var e = r.modes[t],
            i = this.options[t] || {};this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this);
    }, l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
    }, l._layout = function () {
        var t = this._getIsInstant();this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0;
    }, l.arrange = function (t) {
        this.option(t), this._getIsInstant();var e = this._filter(this.items);this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
    }, l._init = l.arrange, l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
    }, l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;return this._isInstant = e, e;
    }, l._bindArrangeComplete = function () {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }var e,
            i,
            o,
            n = this;this.once("layoutComplete", function () {
            e = !0, t();
        }), this.once("hideComplete", function () {
            i = !0, t();
        }), this.once("revealComplete", function () {
            o = !0, t();
        });
    }, l._filter = function (t) {
        var e = this.options.filter;e = e || "*";for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];if (!a.isIgnored) {
                var u = s(a);u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
            }
        }return { matches: i, needReveal: o, needHide: n };
    }, l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering ? function (e) {
            return u(e.element).is(t);
        } : "function" == typeof t ? function (e) {
            return t(e.element);
        } : function (e) {
            return o(e.element, t);
        };
    }, l.updateSortData = function (t) {
        var e;t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e);
    }, l._getSorters = function () {
        var t = this.options.getSortData;for (var e in t) {
            var i = t[e];this._sorters[e] = f(i);
        }
    }, l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];o.updateSortData();
        }
    };var f = function () {
        function t(t) {
            if ("string" != typeof t) return t;var i = h(t).split(" "),
                o = i[0],
                n = o.match(/^\[(.+)\]$/),
                s = n && n[1],
                r = e(s, o),
                a = d.sortDataParsers[i[1]];return t = a ? function (t) {
                return t && a(r(t));
            } : function (t) {
                return t && r(t);
            };
        }function e(t, e) {
            return t ? function (e) {
                return e.getAttribute(t);
            } : function (t) {
                var i = t.querySelector(e);return i && i.textContent;
            };
        }return t;
    }();d.sortDataParsers = { parseInt: function (_parseInt) {
            function parseInt(_x) {
                return _parseInt.apply(this, arguments);
            }

            parseInt.toString = function () {
                return _parseInt.toString();
            };

            return parseInt;
        }(function (t) {
            return parseInt(t, 10);
        }), parseFloat: function (_parseFloat) {
            function parseFloat(_x2) {
                return _parseFloat.apply(this, arguments);
            }

            parseFloat.toString = function () {
                return _parseFloat.toString();
            };

            return parseFloat;
        }(function (t) {
            return parseFloat(t);
        }) }, l._sort = function () {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));var e = a(this.sortHistory, this.options.sortAscending);this.filteredItems.sort(e);
        }
    }, l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++) {
            if (t[e] != this.sortHistory[e]) return !1;
        }return !0;
    }, l._mode = function () {
        var t = this.options.layoutMode,
            e = this.modes[t];if (!e) throw new Error("No layout mode: " + t);return e.options = this.options[t], e;
    }, l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
    }, l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
    }, l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
    }, l._getContainerSize = function () {
        return this._mode()._getContainerSize();
    }, l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
    }, l.appended = function (t) {
        var e = this.addItems(t);if (e.length) {
            var i = this._filterRevealAdded(e);this.filteredItems = this.filteredItems.concat(i);
        }
    }, l.prepended = function (t) {
        var e = this._itemize(t);if (e.length) {
            this._resetLayout(), this._manageStamps();var i = this._filterRevealAdded(e);this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items);
        }
    }, l._filterRevealAdded = function (t) {
        var e = this._filter(t);return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
    }, l.insert = function (t) {
        var e = this.addItems(t);if (e.length) {
            var i,
                o,
                n = e.length;for (i = 0; i < n; i++) {
                o = e[i], this.element.appendChild(o.element);
            }var s = this._filter(e).matches;for (i = 0; i < n; i++) {
                e[i].isLayoutInstant = !0;
            }for (this.arrange(), i = 0; i < n; i++) {
                delete e[i].isLayoutInstant;
            }this.reveal(s);
        }
    };var c = l.remove;return l.remove = function (t) {
        t = n.makeArray(t);var e = this.getItems(t);c.call(this, t);for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];n.removeFrom(this.filteredItems, s);
        }
    }, l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];e.sortData.random = Math.random();
        }this.options.sortBy = "random", this._sort(), this._layout();
    }, l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;this.options.transitionDuration = 0;var o = t.apply(this, e);return this.options.transitionDuration = i, o;
    }, l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
            return t.element;
        });
    }, d;
});

// header
(function () {
    var header = $('.js-header'),
        menu = header.find('.js-header-menu'),
        wrap = header.find('.js-header-wrap');

    menu.on('click', function (e) {
        e.preventDefault();
        header.toggleClass('open');
    });

    $(window).scroll(function () {
        if (header.hasClass('js-header-main')) {
            var scrollTop = $(this).scrollTop(),
                margin = 47;

            if (scrollTop > margin) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        }
    });
})();

// photos
(function () {
    var photos = $('.js-photos');
    if (photos.length) {
        $(window).scroll(function () {
            var wnd = $(this),
                scrollTop = wnd.scrollTop(),
                wndHeight = wnd.height(),
                photosTop = photos.offset().top;

            if (scrollTop >= photosTop - wndHeight / 2) {
                photos.addClass('visible');
            }
        });
    }
})();

// main bg
(function () {
    var main = $('.js-main');
    if (main.length) {
        var bg = main.find('.js-main-bg');

        $(window).scroll(function () {
            var wnd = $(this),
                scrollTop = wnd.scrollTop(),
                posTop = main.offset().top;

            if (scrollTop >= posTop && main.outerHeight() > scrollTop) {
                bg.css('transform', 'translate3d(0, ' + (scrollTop - posTop) / 2 + 'px, ' + (scrollTop - posTop) / 2 + 'px)');
            }
        });
    }
})();

// photos
(function () {
    var works = $('.js-works');
    if (works.length) {
        var items = works.find('.js-works-item'),
            close = works.find('.js-works-close'),
            scroll = works.find('.js-works-scroll');

        close.on('click', function (e) {
            e.preventDefault();
            $(this).parent().toggleClass('hide');
        });

        scroll.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(window).height() - 5
            }, 500);
        });

        $(window).scroll(function () {
            var wnd = $(this),
                scrollTop = wnd.scrollTop();

            items.each(function () {
                var item = $(this),
                    itemHeight = item.height(),
                    posTop = item.offset().top;

                if (scrollTop >= posTop) {
                    item.addClass('active');
                    item.find('.js-works-bg').css('transform', 'translate3d(0, ' + (scrollTop - posTop) / 8 + 'px, ' + (scrollTop - posTop) / 8 + 'px)');
                } else {
                    item.removeClass('active');
                }
            });
        });
    }
})();

// section toggle
(function () {
    var section = $('.js-section'),
        wrap = section.find('.js-section-wrap'),
        toggle = section.find('.js-section-toggle'),
        bg = section.find('.js-section-bg'),
        toggleSpan = toggle.find('span'),
        textHide = toggleSpan.data('text'),
        textShow = toggleSpan.text();
    scrollTop = 0;

    toggle.on('click', function (e) {
        e.preventDefault();

        if (!toggle.hasClass('active')) {
            toggle.addClass('active');
            toggleSpan.text(textHide);
            wrap.show();
            scrollTop = $(window).scrollTop();
            if (bg.length) {
                bg.hide();
            }
        } else {
            toggle.removeClass('active');
            toggleSpan.text(textShow);
            wrap.hide();
            $(window).scrollTop(scrollTop);
            if (bg.length) {
                bg.show();
            }
        }
    });
})();

// owl carousel arrows
var owlArrows = ["<svg class=\"icon icon-prev\">\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"img/sprite.svg#icon-prev\"></use>\n    </svg>", "<svg class=\"icon icon-next\">\n        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"img/sprite.svg#icon-next\"></use>\n    </svg>"];

// 
(function () {})();

// popup
(function () {
    var body = $('body'),
        popup;

    $('body').on('click touchstart', '[data-popup]', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var data = $(this).data('popup');
        popup = $(data);
        showPopup();

        var slider = popup.find('.js-popup-slider');
        if (slider.length) {
            if (!slider.hasClass('inited')) {
                slider.addClass('inited');

                var current = popup.find('.js-popup-current'),
                    all = popup.find('.js-popup-all'),
                    slides = slider.find('> div').length;

                current.text('1');
                all.text(slides);

                slider.owlCarousel({
                    items: 1,
                    nav: true,
                    dots: false,
                    navText: owlArrows,
                    smartSpeed: 400
                });

                slider.on('changed.owl.carousel', function (event) {
                    current.text(++event.item.index);
                });
            }
        }
    });

    $('.js-popup-close').on('click touchstart', function (e) {
        e.preventDefault();
        hidePopup();
    });

    $('body').on('click touchstart', '.js-outer', function () {
        if (popup != undefined) {
            hidePopup();
        }
    });

    $('.js-popup-wrap').on('click touchstart', function (e) {
        e.stopPropagation();
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) hidePopup();
    });

    function showPopup() {
        body.addClass('no-scroll');
        popup.addClass('open');
        setTimeout(function () {
            popup.addClass('visible');
        }, 100);
    }

    function hidePopup() {
        body.removeClass('no-scroll');
        popup.removeClass('visible');
        setTimeout(function () {
            popup.removeClass('open');
        }, 300);
    }
})();

// tabs
(function () {
    var tabs = $('.js-tabs');
    if (tabs.length) {
        tabs.each(function () {
            var _this = $(this),
                btn = _this.find('.js-tabs-btn'),
                item = _this.find('.js-tabs-item'),
                slider = _this.find('.js-tabs-slider');

            btn.on('click', function () {
                var _thisBtn = $(this),
                    index = _thisBtn.index(),
                    slider = item.eq(index).find('.js-tabs-slider');

                btn.removeClass('active');
                _thisBtn.addClass('active');

                item.hide();
                item.eq(index).fadeIn();

                if (slider.length) {
                    if (!slider.hasClass('inited')) {
                        slider.addClass('inited');
                        slider.trigger('refresh.owl.carousel');
                    }
                }
            });

            if (slider.length) {
                slider.each(function () {
                    $(this).owlCarousel({
                        items: 1,
                        nav: true,
                        dots: false,
                        navText: owlArrows,
                        smartSpeed: 400
                    });
                });
            }
        });
    }
})();

// gallery
(function () {
    // common
    $.extend(true, $.magnificPopup.defaults, {

        // Alt text on close button
        tClose: 'Stäng (Esc)',

        // Text that is displayed during loading. Can contain %curr% and %total% keys
        tLoading: 'Laddar...',

        gallery: {

            // Alt text on left arrow
            tPrev: 'Tidigare (Vänster piltangent)',

            // Alt text on right arrow
            tNext: 'Nästa (Höger piltangent)',

            // Markup for "1 of 7" counter
            tCounter: '%curr% av %total%'
        },

        image: {

            // Error message when image could not be loaded
            tError: '<a href="%url%">Bilden</a> kunde inte laddas.'
        },

        ajax: {

            // Error message when ajax request failed
            tError: '<a href="%url%">Innehållet</a> kan inte laddas.'
        }
    });

    // custom
    if ($.magnificPopup && document.querySelector('.js-gallery-item')) {

        $('.js-gallery-item').magnificPopup({

            type: 'image',

            removalDelay: 250,
            mainClass: 'mfp-fade',

            gallery: {
                enabled: true,
                preload: [0, 2]
            },

            image: {
                titleSrc: function titleSrc(item) {

                    var item = $(item.el),
                        title = item.data('title'),
                        url = item.data('url');

                    return '<a href="' + url + '">' + title + '</a>';
                }
            }

        });
    }
})();

// carousel
(function () {
    var carousel = $('.js-carousel');
    if (carousel.length) {
        carousel.each(function () {
            $(this).carousel({
                indicators: true
            });
        });
    }
})();

// slider css
(function () {
    var slider = $('.js-slider-css');
    if (slider.length) {
        var getMaxItemHeight = function getMaxItemHeight(content) {
            content.height('auto');
            setTimeout(function () {
                var maxHeight = Math.max.apply(null, content.map(function () {
                    return $(this).height();
                }).get());
                content.css('height', maxHeight);
            }, 500);
        };

        slider.each(function () {
            var _this = $(this),
                content = _this.find('.js-slider-content'),
                prev = _this.find('.js-slider-prev'),
                next = _this.find('.js-slider-next');

            getMaxItemHeight(content);

            $(window).resize(function () {
                getMaxItemHeight(content);
            });

            next.on('click', function (e) {
                e.preventDefault();
                var activeInput = _this.find('input[type="radio"]:checked'),
                    nextInput = activeInput.next('input');
                if (nextInput.length) {
                    activeInput.removeAttr('checked');
                    nextInput.attr('checked', true);
                }
                if (nextInput.next('input').length) {
                    prev.removeClass('disabled');
                } else {
                    next.addClass('disabled');
                }
            });

            prev.on('click', function (e) {
                e.preventDefault();
                var activeInput = _this.find('input[type="radio"]:checked'),
                    prevInput = activeInput.prev('input');
                if (prevInput.length) {
                    activeInput.removeAttr('checked');
                    prevInput.attr('checked', true);
                }
                if (prevInput.prev('input').length) {
                    next.removeClass('disabled');
                } else {
                    prev.addClass('disabled');
                }
            });
        });
    }
})();

// scroll animate
(function () {
    var anim = $('[data-animate]');
    if (anim.length) {
        var wnd = $(window),
            screenBlocks = [];

        anim.each(function () {
            var _this = $(this);

            wnd.scroll(function () {
                animateBlocks();
            });

            // animation for visble blocks
            var posTop = _this.offset().top,
                posScroll = wnd.scrollTop(),
                wndHeight = wnd.height();

            if (posScroll + wndHeight >= posTop) {
                screenBlocks.push(_this);
            };

            function animateBlocks() {
                var posTop = _this.offset().top,
                    posScroll = wnd.scrollTop(),
                    wndHeight = wnd.height(),
                    delay = 0,
                    delayTime = 200,
                    dataAnimate = _this.data('animate');

                if (dataAnimate != '') {
                    delay = (dataAnimate + 1) * delayTime;
                } else {
                    dataAnimate = 1;
                    delay = dataAnimate * delayTime;
                }

                setTimeout(function () {
                    if (posScroll + wndHeight >= posTop) {
                        _this.addClass('animated');

                        setTimeout(function () {
                            _this.addClass('done');
                        }, 1000);
                    };
                }, delay);
            }
        });

        setTimeout(function () {
            var count = 0;
            var intrvl = setInterval(function () {
                if (count < screenBlocks.length) {
                    screenBlocks[count].addClass('animated');
                    count++;
                } else {
                    clearInterval(intrvl);
                }
            }, 100);
        }, 400);
    }
})();

// feedback
(function () {
    $('.js-feedback-btn').on('click', function (e) {
        e.preventDefault();
        $('.js-feedback').toggleClass('active');
    });
})();

// prod
(function () {
    var prod = $('.js-prod');
    if (prod.length) {
        var link = prod.find('.js-prod-link'),
            pic = prod.find('.js-prod-pic'),
            type = prod.find('.js-prod-type'),
            content = prod.find('.js-prod-content');

        link.on('click', function (e) {
            e.preventDefault();
            var _this = $(this);
            link.removeClass('active');
            _this.addClass('active');
            pic.attr('src', _this.attr('href'));
        });

        type.on('click', function (e) {
            e.preventDefault();
            var _this = $(this);
            type.removeClass('active');
            _this.addClass('active');
            content.hide();
            content.eq(_this.index()).show();
        });
    }
})();

// grid
(function () {
    var grid = $('.js-grid-container');
    if (grid.length) {
        grid.isotope({
            // options
            itemSelector: '.js-grid-item'
        });

        var filter = $('.js-filter'),
            filterItem = filter.find('.js-filter-item');

        filterItem.on('click', function (e) {
            e.preventDefault();
            var _this = $(this),
                filterValue = _this.attr('data-filter');
            filterItem.removeClass('active');
            _this.addClass('active');
            grid.isotope({ filter: filterValue });

            $('html, body').animate({
                scrollTop: grid.offset().top - 120
            }, 500);
        });
    }
})();