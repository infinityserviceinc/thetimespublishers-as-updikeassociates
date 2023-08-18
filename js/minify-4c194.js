/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat ? function (e) {
      return t.flat.call(e)
    } : function (e) {
      return t.concat.apply([], e)
    },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    },
    x = function (e) {
      return null != e && e === e.window
    },
    E = C.document,
    c = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

  function b(e, t, n) {
    var r, i, o = (n = n || E).createElement("script");
    if (o.text = e, t)
      for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o)
  }

  function w(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
  }
  var f = "3.6.0",
    S = function (e, t) {
      return new S.fn.init(e, t)
    };

  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }
  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function () {
      return s.call(this)
    },
    get: function (e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function (e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function (e) {
      return S.each(this, e)
    },
    map: function (n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e)
      }))
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq(-1)
    },
    even: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2
      }))
    },
    odd: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2
      }))
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : [])
    },
    end: function () {
      return this.prevObject || this.constructor()
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e, t, n, r, i, o, a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
      if (null != (e = arguments[s]))
        for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e)
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    globalEval: function (e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n)
    },
    each: function (e, t) {
      var n, r = 0;
      if (p(e)) {
        for (n = e.length; r < n; r++)
          if (!1 === t.call(e[r], r, e[r])) break
      } else
        for (r in e)
          if (!1 === t.call(e[r], r, e[r])) break;
      return e
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : i.call(t, e, n)
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r
    },
    map: function (e, t, n) {
      var r, i, o = 0,
        a = [];
      if (p(e))
        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
      else
        for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a)
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase()
  });
  var d = function (n) {
    var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (e[n] === t) return n;
        return -1
      },
      R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
      F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      },
      oe = function () {
        T()
      },
      ae = be(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t))
        } : function (e, t) {
          var n = e.length,
            r = 0;
          while (e[n++] = t[r++]);
          e.length = n - 1
        }
      }
    }

    function se(t, e, n, r) {
      var i, o, a, s, u, l, c, f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t)))
          if (i = u[1]) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
          } if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",")
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n
          } catch (e) {
            N(t, !0)
          } finally {
            s === S && e.removeAttribute("id")
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r)
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
      }
    }

    function le(e) {
      return e[S] = !0, e
    }

    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t
    }

    function pe(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n)
        while (n = n.nextSibling)
          if (n === t) return -1;
      return e ? 1 : -1
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t
      }
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n
      }
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
      }
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n, r = a([], e.length, o),
            i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
        })
      })
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e
    }
    for (e in d = se.support = {}, i = se.isXML = function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || n && n.nodeName || "HTML")
      }, T = se.setDocument = function (e) {
        var t, n, r = e ? e.ownerDocument || e : p;
        return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
          return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
        }), d.attributes = ce(function (e) {
          return e.className = "i", !e.getAttribute("className")
        }), d.getElementsByTagName = ce(function (e) {
          return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
        }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
          return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
        }), d.getById ? (b.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            return e.getAttribute("id") === t
          }
        }, b.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && E) {
            var n = t.getElementById(e);
            return n ? [n] : []
          }
        }) : (b.filter.ID = function (e) {
          var n = e.replace(te, ne);
          return function (e) {
            var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
            return t && t.value === n
          }
        }, b.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && E) {
            var n, r, i, o = t.getElementById(e);
            if (o) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
              i = t.getElementsByName(e), r = 0;
              while (o = i[r++])
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
            }
            return []
          }
        }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
          return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
        } : function (e, t) {
          var n, r = [],
            i = 0,
            o = t.getElementsByTagName(e);
          if ("*" === e) {
            while (n = o[i++]) 1 === n.nodeType && r.push(n);
            return r
          }
          return o
        }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
          if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
        }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
          var t;
          a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
        }), ce(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = C.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
        })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
          d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
        }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
        } : function (e, t) {
          if (t)
            while (t = t.parentNode)
              if (t === e) return !0;
          return !1
        }, j = t ? function (e, t) {
          if (e === t) return l = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
        } : function (e, t) {
          if (e === t) return l = !0, 0;
          var n, r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
          if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
          if (i === o) return pe(e, t);
          n = e;
          while (n = n.parentNode) a.unshift(n);
          n = t;
          while (n = n.parentNode) s.unshift(n);
          while (a[r] === s[r]) r++;
          return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
        }), C
      }, se.matches = function (e, t) {
        return se(e, null, null, t)
      }, se.matchesSelector = function (e, t) {
        if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
          var n = c.call(e, t);
          if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
        } catch (e) {
          N(t, !0)
        }
        return 0 < se(t, C, null, [e]).length
      }, se.contains = function (e, t) {
        return (e.ownerDocument || e) != C && T(e), y(e, t)
      }, se.attr = function (e, t) {
        (e.ownerDocument || e) != C && T(e);
        var n = b.attrHandle[t.toLowerCase()],
          r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
        return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }, se.escape = function (e) {
        return (e + "").replace(re, ie)
      }, se.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, se.uniqueSort = function (e) {
        var t, n = [],
          r = 0,
          i = 0;
        if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
          while (t = e[i++]) t === e[i] && (r = n.push(i));
          while (r--) e.splice(n[r], 1)
        }
        return u = null, e
      }, o = se.getText = function (e) {
        var t, n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
          } else if (3 === i || 4 === i) return e.nodeValue
        } else
          while (t = e[r++]) n += o(t);
        return n
      }, (b = se.selectors = {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function (e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
          },
          PSEUDO: function (e) {
            var t, n = !e[6] && e[2];
            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e ? function () {
              return !0
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
              return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v ? function (e) {
              return !!e.parentNode
            } : function (e, t, n) {
              var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;
              if (c) {
                if (y) {
                  while (l) {
                    a = e;
                    while (a = a[l])
                      if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                    u = l = "only" === h && !u && "nextSibling"
                  }
                  return !0
                }
                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                  d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                  while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                    if (1 === a.nodeType && ++d && a === e) {
                      i[h] = [k, s, d];
                      break
                    }
                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                  while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                return (d -= v) === g || d % g == 0 && 0 <= d / g
              }
            }
          },
          PSEUDO: function (e, o) {
            var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
            return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
              var n, r = a(e, o),
                i = r.length;
              while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
            }) : function (e) {
              return a(e, 0, t)
            }) : a
          }
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S] ? le(function (e, t, n, r) {
              var i, o = s(e, null, r, []),
                a = e.length;
              while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
            }) : function (e, t, n) {
              return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
            }
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length
            }
          }),
          contains: le(function (t) {
            return t = t.replace(te, ne),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t)
              }
          }),
          lang: le(function (n) {
            return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
              function (e) {
                var t;
                do {
                  if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1
              }
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id
          },
          root: function (e) {
            return e === a
          },
          focus: function (e) {
            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function (e) {
            return !b.pseudos.empty(e)
          },
          header: function (e) {
            return J.test(e.nodeName)
          },
          input: function (e) {
            return Q.test(e.nodeName)
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function (e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: ve(function () {
            return [0]
          }),
          last: ve(function (e, t) {
            return [t - 1]
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
            return e
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
            return e
          })
        }
      }).pseudos.nth = b.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) b.pseudos[e] = de(e);
    for (e in {
        submit: !0,
        reset: !0
      }) b.pseudos[e] = he(e);

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r
    }

    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u])
          if (1 === e.nodeType || f) return s(e, t, n);
        return !1
      } : function (e, t, n) {
        var r, i, o, a = [k, p];
        if (n) {
          while (e = e[u])
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0
        } else
          while (e = e[u])
            if (1 === e.nodeType || f)
              if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
              else {
                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                if ((i[c] = a)[2] = s(e, t, n)) return !0
              } return !1
      }
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--)
          if (!i[r](e, t, n)) return !1;
        return !0
      } : i[0]
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i, o, a, s = [],
          u = [],
          l = t.length,
          c = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
            return n
          }(h || "*", n.nodeType ? [n] : n, []),
          f = !d || !e && h ? c : Te(c, s, d, n, r),
          p = g ? y || (e ? d : l || v) ? [] : t : f;
        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;
          while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;
              while (o--)(a = p[o]) && i.push(f[o] = a);
              y(null, p = [], i, r)
            }
            o = p.length;
            while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
      })
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
          return e === i
        }, a, !0), l = be(function (e) {
          return -1 < P(i, e)
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r
        }]; s < r; s++)
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++)
              if (b.relative[e[n].type]) break;
            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
          }
          c.push(t)
        } return we(c)
    }
    return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
      var n, r, i, o, a, s, u, l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
            value: n,
            type: r[0].replace($, " ")
          }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break
      }
      return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
    }, f = se.compile = function (e, t) {
      var n, v, y, m, x, r, i = [],
        o = [],
        a = A[e + " "];
      if (!a) {
        t || (t = h(e)), n = t.length;
        while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
          var o, a, s, u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = k += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);
              while (s = v[a++])
                if (s(o, t || C, n)) {
                  r.push(o);
                  break
                } i && (k = h)
            }
            m && ((o = !s && o) && u--, e && c.push(o))
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u)
                while (l--) c[l] || f[l] || (f[l] = q.call(r));
              f = Te(f)
            }
            H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
          }
          return i && (k = h, w = p), c
        }, m ? le(r) : r))).selector = e
      }
      return a
    }, g = se.select = function (e, t, n, r) {
      var i, o, a, s, u, l = "function" == typeof e && e,
        c = !r && h(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        i = G.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break
          }
        }
      }
      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
    }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), ce(function (e) {
      return null == e.getAttribute("disabled")
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), se
  }(C);
  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e)
        } return r
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    },
    k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r
    }) : S.filter(n, e, r)
  }
  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, S.fn.extend({
    find: function (e) {
      var t, n, r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++)
          if (S.contains(i[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
      return 1 < r ? S.uniqueSort(n) : n
    },
    filter: function (e) {
      return this.pushStack(j(this, e || [], !1))
    },
    not: function (e) {
      return this.pushStack(j(this, e || [], !0))
    },
    is: function (e) {
      return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
    }
  });
  var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || D, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this
      }
      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
  }).prototype = S.fn, D = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
    H = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++)
          if (S.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n, r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
              o.push(n);
              break
            } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
    },
    index: function (e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), S.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function (e) {
      return h(e, "parentNode")
    },
    parentsUntil: function (e, t, n) {
      return h(e, "parentNode", n)
    },
    next: function (e) {
      return O(e, "nextSibling")
    },
    prev: function (e) {
      return O(e, "previousSibling")
    },
    nextAll: function (e) {
      return h(e, "nextSibling")
    },
    prevAll: function (e) {
      return h(e, "previousSibling")
    },
    nextUntil: function (e, t, n) {
      return h(e, "nextSibling", n)
    },
    prevUntil: function (e, t, n) {
      return h(e, "previousSibling", n)
    },
    siblings: function (e) {
      return T((e.parentNode || {}).firstChild, e)
    },
    children: function (e) {
      return T(e.firstChild)
    },
    contents: function (e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
    }
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e
  }

  function M(e) {
    throw e
  }

  function I(e, t, n, r) {
    var i;
    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0
    }), n) : S.extend({}, r);
    var i, t, o, a, s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
      },
      f = {
        add: function () {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            S.each(e, function (e, t) {
              m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
            })
          }(arguments), t && !i && c()), this
        },
        remove: function () {
          return S.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
          }), this
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length
        },
        empty: function () {
          return s && (s = []), this
        },
        disable: function () {
          return a = u = [], s = t = "", this
        },
        disabled: function () {
          return !s
        },
        lock: function () {
          return a = u = [], t || i || (s = t = ""), this
        },
        locked: function () {
          return !!a
        },
        fireWith: function (e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
        },
        fire: function () {
          return f.fireWith(this, arguments), this
        },
        fired: function () {
          return !!o
        }
      };
    return f
  }, S.extend({
    Deferred: function (e) {
      var o = [
          ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
          ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
        ],
        i = "pending",
        a = {
          state: function () {
            return i
          },
          always: function () {
            return s.done(arguments).fail(arguments), this
          },
          "catch": function (e) {
            return a.then(null, e)
          },
          pipe: function () {
            var i = arguments;
            return S.Deferred(function (r) {
              S.each(o, function (e, t) {
                var n = m(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                })
              }), i = null
            }).promise()
          },
          then: function (t, n, r) {
            var u = 0;

            function l(i, o, a, s) {
              return function () {
                var n = this,
                  r = arguments,
                  e = function () {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                    }
                  },
                  t = s ? e : function () {
                    try {
                      e()
                    } catch (e) {
                      S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                    }
                  };
                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
              }
            }
            return S.Deferred(function (e) {
              o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
            }).promise()
          },
          promise: function (e) {
            return null != e ? S.extend(e, a) : a
          }
        },
        s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
          r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
        }, s[t[0] + "With"] = n.fireWith
      }), a.promise(s), e && e.call(s, s), s
    },
    when: function (e) {
      var n = arguments.length,
        t = n,
        r = Array(t),
        i = s.call(arguments),
        o = S.Deferred(),
        a = function (t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
          }
        };
      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
      while (t--) I(i[t], a(t), o.reject);
      return o.promise()
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e
    })
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
  }
  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e)
    }), this
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
      else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
          return l.call(S(e), n)
        })), t))
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase()
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U)
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function G() {
    this.expando = S.expando + G.uid++
  }
  G.uid = 1, G.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function (e, t, n) {
      var r, i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;
      else
        for (r in t) i[X(r)] = t[r];
      return i
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function (e, t) {
      var n, r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
          while (n--) delete r[t[n]]
        }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t)
    }
  };
  var Y = new G,
    Q = new G,
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
        } catch (e) {}
        Q.set(e, t, n)
      } else n = void 0;
    return n
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e)
    },
    data: function (e, t, n) {
      return Q.access(e, t, n)
    },
    removeData: function (e, t) {
      Q.remove(e, t)
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n)
    },
    _removeData: function (e, t) {
      Y.remove(e, t)
    }
  }), S.fn.extend({
    data: function (n, e) {
      var t, r, i, o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          Y.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" == typeof n ? this.each(function () {
        Q.set(this, n)
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e)
        })
      }, null, e, 1 < arguments.length, null, !0)
    },
    removeData: function (e) {
      return this.each(function () {
        Q.remove(this, e)
      })
    }
  }), S.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = S.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = S._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t)
      }, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n])
        })
      })
    }
  }), S.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
      })
    },
    dequeue: function (e) {
      return this.each(function () {
        S.dequeue(this, e)
      })
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", [])
    },
    promise: function (e, t) {
      var n, r = 1,
        i = S.Deferred(),
        o = this,
        a = this.length,
        s = function () {
          --r || i.resolveWith(o, [o])
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t)
    }
  });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e)
    },
    oe = {
      composed: !0
    };
  re.getRootNode && (ie = function (e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
  });
  var ae = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
  };

  function se(e, t, n, r) {
    var i, o, a = 20,
      s = r ? function () {
        return r.cur()
      } : function () {
        return S.css(e, t, "")
      },
      u = s(),
      l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, S.style(e, t, c + l), n = n || []
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
  }
  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e
  }
  S.fn.extend({
    show: function () {
      return le(this, !0)
    },
    hide: function () {
      return le(this)
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide()
      })
    }
  });
  var ce, fe, pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
  }
  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++])
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
      c = 0;
      while (o = a[c++]) he.test(o.type || "") && n.push(o)
    }
    return f
  }
  var be = /^([^.]*)(?:\.(.+)|)/;

  function we() {
    return !0
  }

  function Te() {
    return !1
  }

  function Ce(e, t) {
    return e === function () {
      try {
        return E.activeElement
      } catch (e) {}
    }() == ("focus" === t)
  }

  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
      return e
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
    else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return S().off(e), a.apply(this, arguments)
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n)
    })
  }

  function Se(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function (e) {
        var t, n, r = Y.get(this, i);
        if (1 & e.isTrigger && this[i]) {
          if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
          else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation())
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
  }
  S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
        }), l = (e = (e || "").match(P) || [""]).length;
        while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && S.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
      }
    },
    remove: function (e, t, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
            while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
          } else
            for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events")
      }
    },
    dispatch: function (e) {
      var t, n, r, i, o, a, s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result
      }
    },
    handlers: function (e, t) {
      var n, r, i, o, a, s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({
              elem: l,
              handlers: o
            })
          } return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[t]
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          })
        }
      })
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
        },
        trigger: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
        },
        _default: function (e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Te,
    isPropagationStopped: Te,
    isImmediatePropagationStopped: Te,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function () {
        return Se(this, e, Ce), !1
      },
      trigger: function () {
        return Se(this, e), !0
      },
      _default: function () {
        return !0
      },
      delegateType: t
    }
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function (e) {
        var t, n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
      }
    }
  }), S.fn.extend({
    on: function (e, t, n, r) {
      return Ee(this, e, t, n, r)
    },
    one: function (e, t, n, r) {
      return Ee(this, e, t, n, r, 1)
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
        S.event.remove(this, e, n, t)
      })
    }
  });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function je(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
  }

  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function qe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in Y.remove(t, "handle events"), s)
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
    }
  }

  function He(n, r, i, o) {
    r = g(r);
    var e, t, a, s, u, l, c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
    });
    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(Ne, ""), u, l))
    }
    return n
  }

  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e
    },
    clone: function (e, t, n) {
      var r, i, o, a, s, u, l, c = e.cloneNode(!0),
        f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
        else Le(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events)
              for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0
          }
          n[Q.expando] && (n[Q.expando] = void 0)
        }
    }
  }), S.fn.extend({
    detach: function (e) {
      return Oe(this, e, !0)
    },
    remove: function (e) {
      return Oe(this, e)
    },
    text: function (e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function () {
      return He(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
      })
    },
    prepend: function () {
      return He(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = je(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function () {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function () {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      return this
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t)
      })
    },
    html: function (e) {
      return $(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function () {
      var n = [];
      return He(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
      }, n)
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      return this.pushStack(n)
    }
  });
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = C), t.getComputedStyle(e)
    },
    Me = function (e, t, n) {
      var r, i, o = {};
      for (i in t) o[i] = e.style[i], e.style[i] = t[i];
      for (i in r = n.call(e), t) e.style[i] = o[i];
      return r
    },
    Ie = new RegExp(ne.join("|"), "i");

  function We(e, t, n) {
    var r, i, o, a, s = e.style;
    return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }! function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
      }
    }

    function t(e) {
      return Math.round(parseFloat(e))
    }
    var n, r, i, o, a, s, u = E.createElement("div"),
      l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function () {
        return e(), r
      },
      pixelBoxStyles: function () {
        return e(), o
      },
      pixelPosition: function () {
        return e(), n
      },
      reliableMarginLeft: function () {
        return e(), s
      },
      scrollboxSize: function () {
        return e(), i
      },
      reliableTrDimensions: function () {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
      }
    }))
  }();
  var Be = ["Webkit", "Moz", "ms"],
    $e = E.createElement("div").style,
    _e = {};

  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return t || (e in $e ? e : _e[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = Be.length;
      while (n--)
        if ((e = Be[n] + t) in $e) return e
    }(e) || e)
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ge = {
      letterSpacing: "0",
      fontWeight: "400"
    };

  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }

  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
  }

  function Je(e, t, n) {
    var r = Re(e),
      i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = We(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto"
    }
    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
  }

  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i)
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = X(t),
          u = Xe.test(t),
          l = e.style;
        if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
      }
    },
    css: function (e, t, n, r) {
      var i, o, a, s = X(t);
      return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function (e, t, n) {
        if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {
          return Je(e, u, n)
        })
      },
      set: function (e, t, n) {
        var r, i = Re(e),
          o = !y.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
          s = n ? Qe(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
      }
    }
  }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left
    })) + "px"
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        return n
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Ye)
  }), S.fn.extend({
    css: function (e, t) {
      return $(this, function (e, t, n) {
        var r, i, o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
          return o
        }
        return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
      }, e, t, 1 < arguments.length)
    }
  }), ((S.Tween = Ke).prototype = {
    constructor: Ke,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
    },
    cur: function () {
      var e = Ke.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
    },
    run: function (e) {
      var t, n = Ke.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
    }
  }).init.prototype = Ke.prototype, (Ke.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      },
      set: function (e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }).scrollTop = Ke.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, S.easing = {
    linear: function (e) {
      return e
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, S.fx = Ke.prototype.init, S.fx.step = {};
  var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;

  function ot() {
    et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick())
  }

  function at() {
    return C.setTimeout(function () {
      Ze = void 0
    }), Ze = Date.now()
  }

  function st(e, t) {
    var n, r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function ut(e, t, n) {
    for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function lt(o, e, t) {
    var n, a, r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem
      }),
      u = function () {
        if (a) return !1;
        for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, {
          specialEasing: {},
          easing: S.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
        }
      }),
      c = l.props;
    for (! function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
            for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
          else t[r] = i
      }(c, l.opts.specialEasing); r < i; r++)
      if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l
  }
  S.Animation = S.extend(lt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n
      }]
    },
    tweener: function (e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
    },
    prefilters: [function (e, t, n) {
      var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        v = Y.get(e, "fxshow");
      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
          a.unqueued || s()
        }), a.unqueued++, p.always(function () {
          p.always(function () {
            a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
          })
        })), t)
        if (i = t[r], rt.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0
          }
          d[r] = v && v[r] || S.style(e, r)
        } if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
        for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
            h.display = l
          }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
          })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
        })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
    }],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
    }, r
  }, S.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function (t, e, n, r) {
      var i = S.isEmptyObject(t),
        o = S.speed(e, n, r),
        a = function () {
          var e = lt(this, S.extend({}, t), o);
          (i || Y.get(this, "finish")) && e.stop(!0)
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
    },
    stop: function (i, e, o) {
      var a = function (e) {
        var t = e.stop;
        delete e.stop, t(o)
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
          t = null != i && i + "queueHooks",
          n = S.timers,
          r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);
        else
          for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || S.dequeue(this, i)
      })
    },
    finish: function (a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e, t = Y.get(this),
          n = t[a + "queue"],
          r = t[a + "queueHooks"],
          i = S.timers,
          o = n ? n.length : 0;
        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];
    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
    }
  }), S.each({
    slideDown: st("show"),
    slideUp: st("hide"),
    slideToggle: st("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n)
    }
  }), S.timers = [], S.fx.tick = function () {
    var e, t = 0,
      n = S.timers;
    for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || S.fx.stop(), Ze = void 0
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start()
  }, S.fx.interval = 13, S.fx.start = function () {
    et || (et = !0, ot())
  }, S.fx.stop = function () {
    et = null
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);
      t.stop = function () {
        C.clearTimeout(n)
      }
    })
  }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
  var ct, ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e)
      })
    }
  }), S.extend({
    attr: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n, r = 0,
        i = t && t.match(P);
      if (i && 1 === e.nodeType)
        while (n = i[r++]) e.removeAttribute(n)
    }
  }), ct = {
    set: function (e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = ft[t] || S.find.attr;
    ft[t] = function (e, t, n) {
      var r, i, o = t.toLowerCase();
      return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r
    }
  });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;

  function ht(e) {
    return (e.match(P) || []).join(" ")
  }

  function gt(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function vt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e]
      })
    }
  }), S.extend({
    prop: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this
  }), S.fn.extend({
    addClass: function (t) {
      var e, n, r, i, o, a, s, u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, gt(this)))
      });
      if ((e = vt(t)).length)
        while (n = this[u++])
          if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
            a = 0;
            while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (s = ht(r)) && n.setAttribute("class", s)
          } return this
    },
    removeClass: function (t) {
      var e, n, r, i, o, a, s, u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, gt(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = vt(t)).length)
        while (n = this[u++])
          if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
            a = 0;
            while (o = e[a++])
              while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
            i !== (s = ht(r)) && n.setAttribute("class", s)
          } return this
    },
    toggleClass: function (i, t) {
      var o = typeof i,
        a = "string" === o || Array.isArray(i);
      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, gt(this), t), t)
      }) : this.each(function () {
        var e, t, n, r;
        if (a) {
          t = 0, n = S(this), r = vt(i);
          while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
        } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
      })
    },
    hasClass: function (e) {
      var t, n, r = 0;
      t = " " + e + " ";
      while (n = this[r++])
        if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
      return !1
    }
  });
  var yt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r, e, i, t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + ""
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : ht(S.text(e))
        }
      },
      select: {
        get: function (e) {
          var t, n, r, i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++)
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t)
            } return s
        },
        set: function (e, t) {
          var n, r, i = e.options,
            o = S.makeArray(t),
            a = i.length;
          while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), y.focusin = "onfocusin" in C;
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation()
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i, o, a, s, u, l, c, f, p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event, n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t)
    }
  }), S.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this)
      })
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0)
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function (e) {
      S.event.simulate(r, e.target, S.event.fix(e))
    };
    S.event.special[r] = {
      setup: function () {
        var e = this.ownerDocument || this.document || this,
          t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
      },
      teardown: function () {
        var e = this.ownerDocument || this.document || this,
          t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
      }
    }
  });
  var bt = C.location,
    wt = {
      guid: Date.now()
    },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = (new C.DOMParser).parseFromString(e, "text/xml")
    } catch (e) {}
    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
      return e.textContent
    }).join("\n") : e)), t
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;

  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
    });
    else if (r || "object" !== w(e)) i(n, e);
    else
      for (t in e) At(n + "[" + t + "]", e[t], r, i)
  }
  S.param = function (e, t) {
    var n, r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value)
    });
    else
      for (n in e) At(n, e[n], t, i);
    return r.join("&")
  }, S.fn.extend({
    serialize: function () {
      return S.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Et, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(Et, "\r\n")
        }
      }).get()
    }
  });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = "*/".concat("*"),
    Mt = E.createElement("a");

  function It(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n, r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
    }
  }

  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
      }), r
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*")
  }

  function Ft(e, t) {
    var n, r, i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e
  }
  Mt.href = bt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: bt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Rt,
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
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
    },
    ajaxPrefilter: It(Ot),
    ajaxTransport: It(Pt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
        y = v.context || v,
        m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
        x = S.Deferred(),
        b = S.Callbacks("once memory"),
        w = v.statusCode || {},
        a = {},
        s = {},
        u = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
              }
              t = n[e.toLowerCase() + " "]
            }
            return null == t ? null : t.join(", ")
          },
          getAllResponseHeaders: function () {
            return h ? p : null
          },
          setRequestHeader: function (e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
          },
          overrideMimeType: function (e) {
            return null == h && (v.mimeType = e), this
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (h) T.always(e[T.status]);
              else
                for (t in e) w[t] = [w[t], e[t]];
            return this
          },
          abort: function (e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this
          }
        };
      if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
        } catch (e) {
          v.crossDomain = !0
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout")
        }, v.timeout));
        try {
          h = !1, c.send(a, l)
        } catch (e) {
          if (h) throw e;
          l(-1, e)
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i, o, a, s, u, l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r, i, o, a, s = e.contents,
            u = e.dataTypes;
          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r)
            for (i in s)
              if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break
              } if (u[0] in n) o = u[0];
          else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break
              }
              a || (a = i)
            }
            o = o || a
          }
          if (o) return o !== u[0] && u.unshift(o), n[o]
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
          if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
              if ("*" === o) o = u;
              else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
              for (i in l)
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break
                } if (!0 !== a)
              if (a && e["throws"]) t = a(t);
              else try {
                t = a(t)
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                }
              }
          }
          return {
            state: "success",
            data: t
          }
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
      }
      return T
    },
    getJSON: function (e, t, n) {
      return S.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return S.get(e, void 0, t, "script")
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e))
    }
  }), S.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function () {}
      },
      dataFilter: function (e) {
        S.globalEval(e, t, n)
      }
    })
  }, S.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e
      }).append(this)), this
    },
    wrapInner: function (n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e))
      }) : this.each(function () {
        var e = S(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n)
      })
    },
    wrap: function (t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t)
      })
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes)
      }), this
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e)
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest
    } catch (e) {}
  };
  var Bt = {
      0: 200,
      1223: 204
    },
    $t = S.ajaxSettings.xhr();
  y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {
    var o, a;
    if (y.cors || $t && !i.crossDomain) return {
      send: function (e, t) {
        var n, r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
          for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
        o = function (e) {
          return function () {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()))
          }
        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            o && a()
          })
        }, o = o("abort");
        try {
          r.send(i.hasContent && i.data || null)
        } catch (e) {
          if (o) throw e
        }
      },
      abort: function () {
        o && o()
      }
    }
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return S.globalEval(e), e
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), S.ajaxTransport("script", function (n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", i = function (e) {
          r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
        }), E.head.appendChild(r[0])
      },
      abort: function () {
        i && i()
      }
    }
  });
  var _t, zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return this[e] = !0, e
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0]
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0
    }), "script"
  }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o
  }, S.fn.load = function (e, t, n) {
    var r, i, o, a = this,
      s = e.indexOf(" ");
    return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem
    }).length
  }, S.offset = {
    setOffset: function (e, t, n) {
      var r, i, o, a, s, u, l = S.css(e, "position"),
        c = S(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
    }
  }, S.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e)
      });
      var e, n, r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0
    },
    position: function () {
      if (this[0]) {
        var e, t, n, r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
        else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === S.css(e, "position")) e = e.offsetParent;
        return e || re
      })
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;
    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
      }, t, e, arguments.length)
    }
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
      if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
    })
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
        }, s, n ? e : void 0, n)
      }
    })
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), S.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
      return this.off(e, null, t)
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    },
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
  });
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
      return e.apply(t || this, r.concat(s.call(arguments)))
    }).guid = e.guid = e.guid || S.guid++, i
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0)
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Xt, "")
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S
  });
  var Vt = C.jQuery,
    Gt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
jQuery.noConflict();; /*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
      return t(e, window)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
  }(function (s, n) {
    "use strict";

    function e(e) {
      return 0 <= function (e, t) {
        for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
          if (+o[i] < +n[i]) return 1;
          if (+n[i] < +o[i]) return -1
        }
        return 0
      }(s.fn.jquery, e)
    }
    s.migrateVersion = "3.3.2", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
    var r = {};

    function u(e) {
      var t = n.console;
      s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()))
    }

    function t(e, t, r, n) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n), r
        },
        set: function (e) {
          u(n), r = e
        }
      })
    }

    function o(e, t, r, n) {
      e[t] = function () {
        return u(n), r.apply(this, arguments)
      }
    }
    s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function () {
      r = {}, s.migrateWarnings.length = 0
    }, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
    var i, a, c, d = {},
      l = s.fn.init,
      p = s.find,
      f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in s.fn.init = function (e) {
        var t = Array.prototype.slice.call(arguments);
        return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), l.apply(this, t)
      }, s.fn.init.prototype = s.fn, s.find = function (t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && f.test(t)) try {
          n.document.querySelector(t)
        } catch (e) {
          t = t.replace(y, function (e, t, r, n) {
            return "[" + t + r + '"' + n + '"]'
          });
          try {
            n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
          } catch (e) {
            u("Attribute selector with '#' was not fixed: " + r[0])
          }
        }
        return p.apply(this, r)
      }, p) Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(s.fn, "size", function () {
      return this.length
    }, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(s, "parseJSON", function () {
      return JSON.parse.apply(null, arguments)
    }, "jQuery.parseJSON is deprecated; use JSON.parse"), o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && o(s, "trim", function (e) {
      return null == e ? "" : (e + "").replace(m, "")
    }, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (o(s, "nodeName", function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, "jQuery.nodeName is deprecated"), o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (o(s, "isNumeric", function (e) {
      var t = typeof e;
      return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
    }, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      d["[object " + t + "]"] = t.toLowerCase()
    }), o(s, "type", function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
    }, "jQuery.type is deprecated"), o(s, "isFunction", function (e) {
      return "function" == typeof e
    }, "jQuery.isFunction() is deprecated"), o(s, "isWindow", function (e) {
      return null != e && e === e.window
    }, "jQuery.isWindow() is deprecated")), s.ajax && (a = s.ajax, c = /(=)\?(?=&|$)|\?\?/, s.ajax = function () {
      var e = a.apply(this, arguments);
      return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
    }, e("4.0.0") || s.ajaxPrefilter("+json", function (e) {
      !1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
    }));
    var g = s.fn.removeAttr,
      h = s.fn.toggleClass,
      v = /\S+/g;

    function j(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase()
      })
    }
    s.fn.removeAttr = function (e) {
      var r = this;
      return s.each(e.match(v), function (e, t) {
        s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
      }), g.apply(this, arguments)
    };
    var Q, b = !(s.fn.toggleClass = function (t) {
        return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
          var e = this.getAttribute && this.getAttribute("class") || "";
          e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
        }))
      }),
      w = /^[a-z]/,
      x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap && s.each(["height", "width", "reliableMarginRight"], function (e, t) {
      var r = s.cssHooks[t] && s.cssHooks[t].get;
      r && (s.cssHooks[t].get = function () {
        var e;
        return b = !0, e = r.apply(this, arguments), b = !1, e
      })
    }), s.swap = function (e, t, r, n) {
      var o, i, a = {};
      for (i in b || u("jQuery.swap() is undocumented and deprecated"), t) a[i] = e.style[i], e.style[i] = t[i];
      for (i in o = r.apply(e, n || []), t) e.style[i] = a[i];
      return o
    }, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
      set: function () {
        return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
      }
    })), s.cssNumber || (s.cssNumber = {}), Q = s.fn.css, s.fn.css = function (e, t) {
      var r, n, o = this;
      return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function (e, t) {
        s.fn.css.call(o, e, t)
      }), this) : ("number" == typeof t && (r = j(e), n = r, w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
    };
    var A, k, S, M, N = s.data;
    s.data = function (e, t, r) {
      var n, o, i;
      if (t && "object" == typeof t && 2 === arguments.length) {
        for (i in n = s.hasData(e) && N.call(this, e), o = {}, t) i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i), n[i] = t[i]) : o[i] = t[i];
        return N.call(this, e, o), t
      }
      return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : N.apply(this, arguments)
    }, s.fx && (S = s.Tween.prototype.run, M = function (e) {
      return e
    }, s.Tween.prototype.run = function () {
      1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = M), S.apply(this, arguments)
    }, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return n.document.hidden || u(k), A
      },
      set: function (e) {
        u(k), A = e
      }
    }));
    var R = s.fn.load,
      H = s.event.add,
      C = s.event.fix;
    s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function (e) {
      var t, r = e.type,
        n = this.fixHooks[r],
        o = s.event.props;
      if (o.length) {
        u("jQuery.event.props are deprecated and removed: " + o.join());
        while (o.length) s.event.addProp(o.pop())
      }
      if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
        while (o.length) s.event.addProp(o.pop());
      return t = C.call(this, e), n && n.filter ? n.filter(t, e) : t
    }, s.event.add = function (e, t) {
      return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments)
    }, s.each(["load", "unload", "error"], function (e, t) {
      s.fn[t] = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
      }
    }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, r) {
      s.fn[r] = function (e, t) {
        return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
      }
    }), s(function () {
      s(n.document).triggerHandler("ready")
    }), s.event.special.ready = {
      setup: function () {
        this === n.document && u("'ready' event is deprecated")
      }
    }, s.fn.extend({
      bind: function (e, t, r) {
        return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r)
      },
      unbind: function (e, t) {
        return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
      },
      delegate: function (e, t, r, n) {
        return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n)
      },
      undelegate: function (e, t, r) {
        return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
      },
      hover: function (e, t) {
        return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
      }
    });

    function T(e) {
      var t = n.document.implementation.createHTMLDocument("");
      return t.body.innerHTML = e, t.body && t.body.innerHTML
    }

    function P(e) {
      var t = e.replace(O, "<$1></$2>");
      t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
    }
    var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      q = s.htmlPrefilter;
    s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.htmlPrefilter = function (e) {
        return P(e), e.replace(O, "<$1></$2>")
      }
    }, s.htmlPrefilter = function (e) {
      return P(e), q(e)
    };
    var D, _ = s.fn.offset;
    s.fn.offset = function () {
      var e = this[0];
      return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
    }, s.ajax && (D = s.param, s.param = function (e, t) {
      var r = s.ajaxSettings && s.ajaxSettings.traditional;
      return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
    });
    var E, F, J = s.fn.andSelf || s.fn.addBack;
    return s.fn.andSelf = function () {
      return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), J.apply(this, arguments)
    }, s.Deferred && (E = s.Deferred, F = [
      ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
      ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
      ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
    ], s.Deferred = function (e) {
      var i = E(),
        a = i.promise();
      return i.pipe = a.pipe = function () {
        var o = arguments;
        return u("deferred.pipe() is deprecated"), s.Deferred(function (n) {
          s.each(F, function (e, t) {
            var r = "function" == typeof o[e] && o[e];
            i[t[1]](function () {
              var e = r && r.apply(this, arguments);
              e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
            })
          }), o = null
        }).promise()
      }, e && e.call(i, i), i
    }, s.Deferred.exceptionHook = E.exceptionHook), s
  });

;;
window.Modernizr = function (a, b, c) {
  function w(a) {
    j.cssText = a
  }

  function x(a, b) {
    return w(m.join(a + ";") + (b || ""))
  }

  function y(a, b) {
    return typeof a === b
  }

  function z(a, b) {
    return !!~("" + a).indexOf(b)
  }

  function A(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c) return d === !1 ? a[e] : y(f, "function") ? f.bind(d || b) : f
    }
    return !1
  }
  var d = "2.8.3",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k, l = {}.toString,
    m = " -webkit- -moz- -o- -ms- ".split(" "),
    n = {},
    o = {},
    p = {},
    q = [],
    r = q.slice,
    s, t = function (a, c, d, e) {
      var f, i, j, k, l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
      if (parseInt(d, 10))
        while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
      return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
    },
    u = {}.hasOwnProperty,
    v;
  !y(u, "undefined") && !y(u.call, "undefined") ? v = function (a, b) {
    return u.call(a, b)
  } : v = function (a, b) {
    return b in a && y(a.constructor.prototype[b], "undefined")
  }, Function.prototype.bind || (Function.prototype.bind = function (b) {
    var c = this;
    if (typeof c != "function") throw new TypeError;
    var d = r.call(arguments, 1),
      e = function () {
        if (this instanceof e) {
          var a = function () {};
          a.prototype = c.prototype;
          var f = new a,
            g = c.apply(f, d.concat(r.call(arguments)));
          return Object(g) === g ? g : f
        }
        return c.apply(b, d.concat(r.call(arguments)))
      };
    return e
  }), n.touch = function () {
    var c;
    return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : t(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
      c = a.offsetTop === 9
    }), c
  };
  for (var B in n) v(n, B) && (s = B.toLowerCase(), e[s] = n[B](), q.push((e[s] ? "" : "no-") + s));
  return e.addTest = function (a, b) {
    if (typeof a == "object")
      for (var d in a) v(a, d) && e.addTest(d, a[d]);
    else {
      a = a.toLowerCase();
      if (e[a] !== c) return e;
      b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
    }
    return e
  }, w(""), i = k = null, e._version = d, e._prefixes = m, e.testStyles = t, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + q.join(" ") : ""), e
}(this, this.document);;
(function ($) {
  var selectors = [];
  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  };
  var $window = $(window);
  var $prior_appeared = [];

  function process() {
    check_lock = false;
    for (var index = 0, selectorsLength = selectors.length; index < selectorsLength; index++) {
      var $appeared = $(selectors[index]).filter(function () {
        return $(this).is(':appeared');
      });
      $appeared.trigger('appear', [$appeared]);
      if ($prior_appeared[index]) {
        var $disappeared = $prior_appeared[index].not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared[index] = $appeared;
    }
  };

  function add_selector(selector) {
    selectors.push(selector);
    $prior_appeared.push();
  }
  $.expr[':']['appeared'] = function (element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }
    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;
    if (top + $element.height() >= window_top && top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() && left + $element.width() >= window_left && left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  };
  $.fn.extend({
    appear: function (options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function () {
          if (check_lock) {
            return;
          }
          check_lock = true;
          setTimeout(process, opts.interval);
        };
        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }
      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      add_selector(selector);
      return $(selector);
    }
  });
  $.extend({
    force_appear: function () {
      if (check_binded) {
        process();
        return true;
      }
      return false;
    }
  });
})(function () {
  if (typeof module !== 'undefined') {
    return require('jquery');
  } else {
    return jQuery;
  }
}());;
/*!
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */
;
(function ($) {
  'use strict';
  $.fn.fitVids = function (options) {
    var settings = {
      customSelector: null,
      ignore: null
    };
    if (!document.getElementById('fit-vids-style')) {
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }
    if (options) {
      $.extend(settings, options);
    }
    return this.each(function () {
      var selectors = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', 'object', 'embed'];
      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }
      var ignoreList = '.fitvidsignore';
      if (settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }
      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object');
      $allVideos = $allVideos.not(ignoreList);
      $allVideos.each(function (count) {
        var $this = $(this);
        if ($this.parents(ignoreList).length > 0) {
          return;
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
          return;
        }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width')))) {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = (this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)))) ? parseInt($this.attr('height'), 10) : $this.height(),
          width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
          aspectRatio = height / width;
        if (!$this.attr('id')) {
          var videoID = 'fitvid' + count;
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + '%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
})(window.jQuery || window.Zepto);;
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (r, G, f, v) {
  var J = f("html"),
    n = f(r),
    p = f(G),
    b = f.fancybox = function () {
      b.open.apply(this, arguments)
    },
    I = navigator.userAgent.match(/msie/i),
    B = null,
    s = G.createTouch !== v,
    t = function (a) {
      return a && a.hasOwnProperty && a instanceof f
    },
    q = function (a) {
      return a && "string" === f.type(a)
    },
    E = function (a) {
      return q(a) && 0 < a.indexOf("%")
    },
    l = function (a, d) {
      var e = parseInt(a, 10) || 0;
      d && E(a) && (e *= b.getViewport()[d] / 100);
      return Math.ceil(e)
    },
    w = function (a, b) {
      return l(a, b) + "px"
    };
  f.extend(b, {
    version: "2.1.5",
    defaults: {
      padding: 15,
      margin: 20,
      width: 800,
      height: 600,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 9999,
      maxHeight: 9999,
      pixelRatio: 1,
      autoSize: !0,
      autoHeight: !1,
      autoWidth: !1,
      autoResize: !0,
      autoCenter: !s,
      fitToView: !0,
      aspectRatio: !1,
      topRatio: 0.5,
      leftRatio: 0.5,
      scrolling: "auto",
      wrapCSS: "",
      arrows: !0,
      closeBtn: !0,
      closeClick: !1,
      nextClick: !1,
      mouseWheel: !0,
      autoPlay: !1,
      playSpeed: 3E3,
      preload: 3,
      modal: !1,
      loop: !0,
      ajax: {
        dataType: "html",
        headers: {
          "X-fancyBox": !0
        }
      },
      iframe: {
        scrolling: "auto",
        preload: !0
      },
      swf: {
        wmode: "transparent",
        allowfullscreen: "true",
        allowscriptaccess: "always"
      },
      keys: {
        next: {
          13: "left",
          34: "up",
          39: "left",
          40: "up"
        },
        prev: {
          8: "right",
          33: "down",
          37: "right",
          38: "down"
        },
        close: [27],
        play: [32],
        toggle: [70]
      },
      direction: {
        next: "left",
        prev: "right"
      },
      scrollOutside: !0,
      index: 0,
      type: null,
      href: null,
      content: null,
      title: null,
      tpl: {
        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        image: '<img class="fancybox-image" src="{href}" alt="" />',
        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
          (I ? ' allowtransparency="true"' : "") + "></iframe>",
        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
      },
      openEffect: "fade",
      openSpeed: 250,
      openEasing: "swing",
      openOpacity: !0,
      openMethod: "zoomIn",
      closeEffect: "fade",
      closeSpeed: 250,
      closeEasing: "swing",
      closeOpacity: !0,
      closeMethod: "zoomOut",
      nextEffect: "elastic",
      nextSpeed: 250,
      nextEasing: "swing",
      nextMethod: "changeIn",
      prevEffect: "elastic",
      prevSpeed: 250,
      prevEasing: "swing",
      prevMethod: "changeOut",
      helpers: {
        overlay: !0,
        title: !0
      },
      onCancel: f.noop,
      beforeLoad: f.noop,
      afterLoad: f.noop,
      beforeShow: f.noop,
      afterShow: f.noop,
      beforeChange: f.noop,
      beforeClose: f.noop,
      afterClose: f.noop
    },
    group: {},
    opts: {},
    previous: null,
    coming: null,
    current: null,
    isActive: !1,
    isOpen: !1,
    isOpened: !1,
    wrap: null,
    skin: null,
    outer: null,
    inner: null,
    player: {
      timer: null,
      isActive: !1
    },
    ajaxLoad: null,
    imgPreload: null,
    transitions: {},
    helpers: {},
    open: function (a, d) {
      if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
        var k = {},
          g, h, j, m, l;
        "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
          href: c.data("fancybox-href") || c.attr("href"),
          title: c.data("fancybox-title") || c.attr("title"),
          isDom: !0,
          element: c
        }, f.metadata && f.extend(!0, k, c.metadata())) : k = c);
        g = d.href || k.href || (q(c) ? c : null);
        h = d.title !== v ? d.title : k.title || "";
        m = (j = d.content || k.content) ? "html" : d.type || k.type;
        !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
        q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
        j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g && k.isDom) && (m = "inline", j = c));
        f.extend(k, {
          href: g,
          type: m,
          content: j,
          title: h,
          selector: l
        });
        a[e] = k
      }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
    },
    cancel: function () {
      var a = b.coming;
      a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a))
    },
    close: function (a) {
      b.cancel();
      !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
    },
    play: function (a) {
      var d = function () {
          clearTimeout(b.player.timer)
        },
        e = function () {
          d();
          b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
        },
        c = function () {
          d();
          p.unbind(".player");
          b.player.isActive = !1;
          b.trigger("onPlayEnd")
        };
      if (!0 === a || !b.player.isActive && !1 !== a) {
        if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({
          "onCancel.player beforeClose.player": c,
          "onUpdate.player": e,
          "beforeLoad.player": d
        }), e(), b.trigger("onPlayStart")
      } else c()
    },
    next: function (a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
    },
    prev: function (a) {
      var d = b.current;
      d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
    },
    jumpto: function (a, d, e) {
      var c = b.current;
      c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)))
    },
    reposition: function (a, d) {
      var e = b.current,
        c = e ? e.wrap : null,
        k;
      c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
    },
    update: function (a) {
      var d = a && a.type,
        e = !d || "orientationchange" === d;
      e && (clearTimeout(B), B = null);
      b.isOpen && !B && (B = setTimeout(function () {
        var c = b.current;
        c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null)
      }, e && !s ? 0 : 300))
    },
    toggle: function (a) {
      b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
    },
    hideLoading: function () {
      p.unbind(".loading");
      f("#fancybox-loading").remove()
    },
    showLoading: function () {
      var a, d;
      b.hideLoading();
      a = f('<div id="fancybox-loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>').click(b.cancel).appendTo("body");
      p.bind("keydown.loading", function (a) {
        if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel()
      });
      b.defaults.fixed || (d = b.getViewport(), a.css({
        position: "absolute",
        top: 0.5 * d.h + d.y,
        left: 0.5 * d.w + d.x
      }))
    },
    getViewport: function () {
      var a = b.current && b.current.locked || !1,
        d = {
          x: n.scrollLeft(),
          y: n.scrollTop()
        };
      a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
      return d
    },
    unbindEvents: function () {
      b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
      p.unbind(".fb");
      n.unbind(".fb")
    },
    bindEvents: function () {
      var a = b.current,
        d;
      a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
        var c = e.which || e.keyCode,
          k = e.target || e.srcElement;
        if (27 === c && b.coming) return !1;
        !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function (d, k) {
          if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1;
          if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1
        })
      }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
        for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
        if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
          if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
          else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
          d.preventDefault()
        }
      }))
    },
    trigger: function (a, d) {
      var e, c = d || b.coming || b.current;
      if (c) {
        f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
        if (!1 === e) return !1;
        c.helpers && f.each(c.helpers, function (d, e) {
          if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
        });
        p.trigger(a)
      }
    },
    isImage: function (a) {
      return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
    },
    isSWF: function (a) {
      return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
    },
    _start: function (a) {
      var d = {},
        e, c;
      a = l(a);
      e = b.group[a] || null;
      if (!e) return !1;
      d = f.extend(!0, {}, b.opts, e);
      e = d.margin;
      c = d.padding;
      "number" === f.type(e) && (d.margin = [e, e, e, e]);
      "number" === f.type(c) && (d.padding = [c, c, c, c]);
      d.modal && f.extend(!0, d, {
        closeBtn: !1,
        closeClick: !1,
        nextClick: !1,
        arrows: !1,
        mouseWheel: !1,
        keys: null,
        helpers: {
          overlay: {
            closeClick: !1
          }
        }
      });
      d.autoSize && (d.autoWidth = d.autoHeight = !0);
      "auto" === d.width && (d.autoWidth = !0);
      "auto" === d.height && (d.autoHeight = !0);
      d.group = b.group;
      d.index = a;
      b.coming = d;
      if (!1 === b.trigger("beforeLoad")) b.coming = null;
      else {
        c = d.type;
        e = d.href;
        if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
        b.isActive = !0;
        if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
        "image" === c && (d.aspectRatio = !0);
        "iframe" === c && s && (d.scrolling = "scroll");
        d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
        f.extend(d, {
          skin: f(".fancybox-skin", d.wrap),
          outer: f(".fancybox-outer", d.wrap),
          inner: f(".fancybox-inner", d.wrap)
        });
        f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
          d.skin.css("padding" + b, w(d.padding[a]))
        });
        b.trigger("onReady");
        if ("inline" === c || "html" === c) {
          if (!d.content || !d.content.length) return b._error("content")
        } else if (!e) return b._error("href");
        "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
      }
    },
    _error: function (a) {
      f.extend(b.coming, {
        type: "html",
        autoWidth: !0,
        autoHeight: !0,
        minWidth: 0,
        minHeight: 0,
        scrolling: "no",
        hasError: a,
        content: b.coming.tpl.error
      });
      b._afterLoad()
    },
    _loadImage: function () {
      var a = b.imgPreload = new Image;
      a.onload = function () {
        this.onload = this.onerror = null;
        b.coming.width = this.width / b.opts.pixelRatio;
        b.coming.height = this.height / b.opts.pixelRatio;
        b._afterLoad()
      };
      a.onerror = function () {
        this.onload = this.onerror = null;
        b._error("image")
      };
      a.src = b.coming.href;
      !0 !== a.complete && b.showLoading()
    },
    _loadAjax: function () {
      var a = b.coming;
      b.showLoading();
      b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
        url: a.href,
        error: function (a, e) {
          b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
        },
        success: function (d, e) {
          "success" === e && (a.content = d, b._afterLoad())
        }
      }))
    },
    _loadIframe: function () {
      var a = b.coming,
        d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
      f(a.wrap).bind("onReset", function () {
        try {
          f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
        } catch (a) {}
      });
      a.iframe.preload && (b.showLoading(), d.one("load", function () {
        f(this).data("ready", 1);
        s || f(this).bind("load.fb", b.update);
        f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
        b._afterLoad()
      }));
      a.content = d.appendTo(a.inner);
      a.iframe.preload || b._afterLoad()
    },
    _preloadImages: function () {
      var a = b.group,
        d = b.current,
        e = a.length,
        c = d.preload ? Math.min(d.preload, e - 1) : 0,
        f, g;
      for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
    },
    _afterLoad: function () {
      var a = b.coming,
        d = b.current,
        e, c, k, g, h;
      b.hideLoading();
      if (a && !1 !== b.isActive)
        if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
        else {
          d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
          b.unbindEvents();
          e = a.content;
          c = a.type;
          k = a.scrolling;
          f.extend(b, {
            wrap: a.wrap,
            skin: a.skin,
            outer: a.outer,
            inner: a.inner,
            current: a,
            previous: d
          });
          g = a.href;
          switch (c) {
            case "inline":
            case "ajax":
            case "html":
              a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
                f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
              }));
              break;
            case "image":
              e = a.tpl.image.replace("{href}", g);
              break;
            case "swf":
              e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
                e += '<param name="' + a + '" value="' + b + '"></param>';
                h += " " + a + '="' + b + '"'
              }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
          }(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
          b.trigger("beforeShow");
          a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
          b._setDimension();
          b.reposition();
          b.isOpen = !1;
          b.coming = null;
          b.bindEvents();
          if (b.isOpened) {
            if (d.prevMethod) b.transitions[d.prevMethod]()
          } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
          b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
          b._preloadImages()
        }
    },
    _setDimension: function () {
      var a = b.getViewport(),
        d = 0,
        e = !1,
        c = !1,
        e = b.wrap,
        k = b.skin,
        g = b.inner,
        h = b.current,
        c = h.width,
        j = h.height,
        m = h.minWidth,
        u = h.minHeight,
        n = h.maxWidth,
        p = h.maxHeight,
        s = h.scrolling,
        q = h.scrollOutside ? h.scrollbarWidth : 0,
        x = h.margin,
        y = l(x[1] + x[3]),
        r = l(x[0] + x[2]),
        v, z, t, C, A, F, B, D, H;
      e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
      x = l(k.outerWidth(!0) - k.width());
      v = l(k.outerHeight(!0) - k.height());
      z = y + x;
      t = r + v;
      C = E(c) ? (a.w - z) * l(c) / 100 : c;
      A = E(j) ? (a.h - t) * l(j) / 100 : j;
      if ("iframe" === h.type) {
        if (H = h.content, h.autoHeight && 1 === H.data("ready")) try {
          H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0))
        } catch (G) {}
      } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
      c = l(C);
      j = l(A);
      D = C / A;
      m = l(E(m) ? l(m, "w") - z : m);
      n = l(E(n) ? l(n, "w") - z : n);
      u = l(E(u) ? l(u, "h") - t : u);
      p = l(E(p) ? l(p, "h") - t : p);
      F = n;
      B = p;
      h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
      z = a.w - y;
      r = a.h - r;
      h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
      if (h.fitToView)
        if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)
          for (;
            (a > z || y > r) && (c > m && j > u) && !(19 < d++);) j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
        else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
      q && ("auto" === s && j < A && c + x + q < z) && (c += q);
      g.width(c).height(j);
      e.width(c + x);
      a = e.width();
      y = e.height();
      e = (a > z || y > r) && c > m && j > u;
      c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
      f.extend(h, {
        dim: {
          width: w(a),
          height: w(y)
        },
        origWidth: C,
        origHeight: A,
        canShrink: e,
        canExpand: c,
        wPadding: x,
        hPadding: v,
        wrapSpace: y - k.outerHeight(!0),
        skinSpace: k.height() - j
      });
      !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
    },
    _getPosition: function (a) {
      var d = b.current,
        e = b.getViewport(),
        c = d.margin,
        f = b.wrap.width() + c[1] + c[3],
        g = b.wrap.height() + c[0] + c[2],
        c = {
          position: "absolute",
          top: c[0],
          left: c[3]
        };
      d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
      c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
      c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
      return c
    },
    _afterZoomIn: function () {
      var a = b.current;
      a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
        !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
      }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
        a.preventDefault();
        b.close()
      }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
    },
    _afterZoomOut: function (a) {
      a = a || b.current;
      f(".fancybox-wrap").trigger("onReset").remove();
      f.extend(b, {
        group: {},
        opts: {},
        router: !1,
        current: null,
        isActive: !1,
        isOpened: !1,
        isOpen: !1,
        isClosing: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null
      });
      b.trigger("afterClose", a)
    }
  });
  b.transitions = {
    getOrigPosition: function () {
      var a = b.current,
        d = a.element,
        e = a.orig,
        c = {},
        f = 50,
        g = 50,
        h = a.hPadding,
        j = a.wPadding,
        m = b.getViewport();
      !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
      t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
      if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
      return c = {
        top: w(c.top - h * a.topRatio),
        left: w(c.left - j * a.leftRatio),
        width: w(f + j),
        height: w(g + h)
      }
    },
    step: function (a, d) {
      var e, c, f = d.prop;
      c = b.current;
      var g = c.wrapSpace,
        h = c.skinSpace;
      if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e))
    },
    zoomIn: function () {
      var a = b.current,
        d = a.pos,
        e = a.openEffect,
        c = "elastic" === e,
        k = f.extend({
          opacity: 1
        }, d);
      delete k.position;
      c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
      b.wrap.css(d).animate(k, {
        duration: "none" === e ? 0 : a.openSpeed,
        easing: a.openEasing,
        step: c ? this.step : null,
        complete: b._afterZoomIn
      })
    },
    zoomOut: function () {
      var a = b.current,
        d = a.closeEffect,
        e = "elastic" === d,
        c = {
          opacity: 0.1
        };
      e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
      b.wrap.animate(c, {
        duration: "none" === d ? 0 : a.closeSpeed,
        easing: a.closeEasing,
        step: e ? this.step : null,
        complete: b._afterZoomOut
      })
    },
    changeIn: function () {
      var a = b.current,
        d = a.nextEffect,
        e = a.pos,
        c = {
          opacity: 1
        },
        f = b.direction,
        g;
      e.opacity = 0.1;
      "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));
      "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
        duration: a.nextSpeed,
        easing: a.nextEasing,
        complete: b._afterZoomIn
      })
    },
    changeOut: function () {
      var a = b.previous,
        d = a.prevEffect,
        e = {
          opacity: 0.1
        },
        c = b.direction;
      "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
      a.wrap.animate(e, {
        duration: "none" === d ? 0 : a.prevSpeed,
        easing: a.prevEasing,
        complete: function () {
          f(this).trigger("onReset").remove()
        }
      })
    }
  };
  b.helpers.overlay = {
    defaults: {
      closeClick: !0,
      speedOut: 200,
      showEarly: !0,
      css: {},
      locked: !s,
      fixed: !0
    },
    overlay: null,
    fixed: !1,
    el: f("html"),
    create: function (a) {
      a = f.extend({}, this.defaults, a);
      this.overlay && this.close();
      this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
      this.fixed = !1;
      a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
    },
    open: function (a) {
      var d = this;
      a = f.extend({}, this.defaults, a);
      this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
      this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
      a.closeClick && this.overlay.bind("click.overlay", function (a) {
        if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1
      });
      this.overlay.css(a.css).show()
    },
    close: function () {
      var a, b;
      n.unbind("resize.overlay");
      this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
      f(".fancybox-overlay").remove().hide();
      f.extend(this, {
        overlay: null,
        fixed: !1
      })
    },
    update: function () {
      var a = "100%",
        b;
      this.overlay.width(a).height("100%");
      I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
      this.overlay.width(a).height(p.height())
    },
    onReady: function (a, b) {
      var e = this.overlay;
      f(".fancybox-overlay").stop(!0, !0);
      e || this.create(a);
      a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
      !0 === a.showEarly && this.beforeShow.apply(this, arguments)
    },
    beforeShow: function (a, b) {
      var e, c;
      b.locked && (!1 !== this.margin && (f("*").filter(function () {
        return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
      }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
      this.open(a)
    },
    onUpdate: function () {
      this.fixed || this.update()
    },
    afterClose: function (a) {
      this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
    }
  };
  b.helpers.title = {
    defaults: {
      type: "float",
      position: "bottom"
    },
    beforeShow: function (a) {
      var d = b.current,
        e = d.title,
        c = a.type;
      f.isFunction(e) && (e = e.call(d.element, d));
      if (q(e) && "" !== f.trim(e)) {
        d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
        switch (c) {
          case "inside":
            c = b.skin;
            break;
          case "outside":
            c = b.wrap;
            break;
          case "over":
            c = b.inner;
            break;
          default:
            c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
        }
        d["top" === a.position ? "prependTo" : "appendTo"](c)
      }
    }
  };
  f.fn.fancybox = function (a) {
    var d, e = f(this),
      c = this.selector || "",
      k = function (g) {
        var h = f(this).blur(),
          j = d,
          k, l;
        !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
      };
    a = a || {};
    d = a.index || 0;
    !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
    this.filter("[data-fancybox-start=1]").trigger("click");
    return this
  };
  p.ready(function () {
    var a, d;
    f.scrollbarWidth === v && (f.scrollbarWidth = function () {
      var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
        b = a.children(),
        b = b.innerWidth() - b.height(99).innerWidth();
      a.remove();
      return b
    });
    if (f.support.fixedPosition === v) {
      a = f.support;
      d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
      var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
      d.remove();
      a.fixedPosition = e
    }
    f.extend(b.defaults, {
      scrollbarWidth: f.scrollbarWidth(),
      fixed: f.support.fixedPosition,
      parent: f("body")
    });
    a = f(r).width();
    J.addClass("fancybox-lock-test");
    d = f(r).width();
    J.removeClass("fancybox-lock-test");
    f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
  })
})(window, document, jQuery);;
/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *   http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function ($) {
  "use strict";
  var F = $.fancybox,
    format = function (url, rez, params) {
      params = params || '';
      if ($.type(params) === "object") {
        params = $.param(params, true);
      }
      $.each(rez, function (key, value) {
        url = url.replace('$' + key, value || '');
      });
      if (params.length) {
        url += (url.indexOf('?') > 0 ? '&' : '?') + params;
      }
      return url;
    };
  F.helpers.media = {
    defaults: {
      youtube: {
        matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
        params: {
          autoplay: 1,
          autohide: 1,
          fs: 1,
          rel: 0,
          hd: 1,
          wmode: 'opaque',
          enablejsapi: 1
        },
        type: 'iframe',
        url: '//www.youtube.com/embed/$3'
      },
      vimeo: {
        matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
        params: {
          autoplay: 1,
          hd: 1,
          show_title: 1,
          show_byline: 1,
          show_portrait: 0,
          fullscreen: 1
        },
        type: 'iframe',
        url: '//player.vimeo.com/video/$1'
      },
      metacafe: {
        matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
        params: {
          autoPlay: 'yes'
        },
        type: 'swf',
        url: function (rez, params, obj) {
          obj.swf.flashVars = 'playerVars=' + $.param(params, true);
          return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
        }
      },
      dailymotion: {
        matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
        params: {
          additionalInfos: 0,
          autoStart: 1
        },
        type: 'swf',
        url: '//www.dailymotion.com/swf/video/$1'
      },
      twitvid: {
        matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
        params: {
          autoplay: 0
        },
        type: 'iframe',
        url: '//www.twitvid.com/embed.php?guid=$1'
      },
      twitpic: {
        matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
        type: 'image',
        url: '//twitpic.com/show/full/$1/'
      },
      instagram: {
        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
        type: 'image',
        url: '//$1/p/$2/media/?size=l'
      },
      google_maps: {
        matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
        type: 'iframe',
        url: function (rez) {
          return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
        }
      }
    },
    beforeLoad: function (opts, obj) {
      var url = obj.href || '',
        type = false,
        what, item, rez, params;
      for (what in opts) {
        if (opts.hasOwnProperty(what)) {
          item = opts[what];
          rez = url.match(item.matcher);
          if (rez) {
            type = item.type;
            params = $.extend(true, {}, item.params, obj[what] || ($.isPlainObject(opts[what]) ? opts[what].params : null));
            url = $.type(item.url) === "function" ? item.url.call(this, rez, params, obj) : format(item.url, rez, params);
            break;
          }
        }
      }
      if (type) {
        obj.href = url;
        obj.type = type;
        obj.autoHeight = false;
      }
    }
  };
}(jQuery));;
/*!
  Non-Sucking Autogrow 1.1.6
  license: MIT
  author: Roman Pushkin
  https://github.com/ro31337/jquery.ns-autogrow
*/
(function () {
  var e;
  ! function (t, l) {
    return t.fn.autogrow = function (i) {
      if (null == i && (i = {}), null == i.horizontal && (i.horizontal = !0), null == i.vertical && (i.vertical = !0), null == i.debugx && (i.debugx = -1e4), null == i.debugy && (i.debugy = -1e4), null == i.debugcolor && (i.debugcolor = "yellow"), null == i.flickering && (i.flickering = !0), null == i.postGrowCallback && (i.postGrowCallback = function () {}), null == i.verticalScrollbarWidth && (i.verticalScrollbarWidth = e()), i.horizontal !== !1 || i.vertical !== !1) return this.filter("textarea").each(function () {
        var e, n, r, o, a, c, d;
        if (e = t(this), !e.data("autogrow-enabled")) return e.data("autogrow-enabled"), a = e.height(), c = e.width(), o = 1 * e.css("lineHeight") || 0, e.hasVerticalScrollBar = function () {
          return e[0].clientHeight < e[0].scrollHeight
        }, n = t('<div class="autogrow-shadow"></div>').css({
          position: "absolute",
          display: "inline-block",
          "background-color": i.debugcolor,
          top: i.debugy,
          left: i.debugx,
          "max-width": e.css("max-width"),
          padding: e.css("padding"),
          fontSize: e.css("fontSize"),
          fontFamily: e.css("fontFamily"),
          fontWeight: e.css("fontWeight"),
          lineHeight: e.css("lineHeight"),
          resize: "none",
          "word-wrap": "break-word"
        }).appendTo(document.body), i.horizontal === !1 ? n.css({
          width: e.width()
        }) : (r = e.css("font-size"), n.css("padding-right", "+=" + r), n.normalPaddingRight = n.css("padding-right")), d = function (t) {
          return function (l) {
            var r, d, s;
            return d = t.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n /g, "<br/>&nbsp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\n$/, "<br/>&nbsp;").replace(/\n/g, "<br/>").replace(/ {2,}/g, function (e) {
              return Array(e.length - 1).join("&nbsp;") + " "
            }), /(\n|\r)/.test(t.value) && (d += "<br />", i.flickering === !1 && (d += "<br />")), n.html(d), i.vertical === !0 && (r = Math.max(n.height() + o, a), e.height(r)), i.horizontal === !0 && (n.css("padding-right", n.normalPaddingRight), i.vertical === !1 && e.hasVerticalScrollBar() && n.css("padding-right", "+=" + i.verticalScrollbarWidth + "px"), s = Math.max(n.outerWidth(), c), e.width(s)), i.postGrowCallback(e)
          }
        }(this), e.change(d).keyup(d).keydown(d), t(l).resize(d), d()
      })
    }
  }(window.jQuery, window), e = function () {
    var e, t, l, i;
    return e = document.createElement("p"), e.style.width = "100%", e.style.height = "200px", t = document.createElement("div"), t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(e), document.body.appendChild(t), l = e.offsetWidth, t.style.overflow = "scroll", i = e.offsetWidth, l === i && (i = t.clientWidth), document.body.removeChild(t), l - i
  }
}).call(this);;
/*! odometer 0.4.6 */
(function () {
  var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G = [].slice;
  q = '<span class="odometer-value"></span>', n = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + q + "</span></span>", d = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + n + "</span></span>", g = '<span class="odometer-formatting-mark"></span>', c = "(,ddd).dd", h = /^\(?([^)]*)\)?(?:(.)(d+))?$/, i = 30, f = 2e3, a = 20, j = 2, e = .5, k = 1e3 / i, b = 1e3 / a, o = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", y = document.createElement("div").style, p = null != y.transition || null != y.webkitTransition || null != y.mozTransition || null != y.oTransition, w = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, l = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, s = function (a) {
    var b;
    return b = document.createElement("div"), b.innerHTML = a, b.children[0]
  }, v = function (a, b) {
    return a.className = a.className.replace(new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"), " ")
  }, r = function (a, b) {
    return v(a, b), a.className += " " + b
  }, z = function (a, b) {
    var c;
    return null != document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(b, !0, !0), a.dispatchEvent(c)) : void 0
  }, u = function () {
    var a, b;
    return null != (a = null != (b = window.performance) ? "function" == typeof b.now ? b.now() : void 0 : void 0) ? a : +new Date
  }, x = function (a, b) {
    return null == b && (b = 0), b ? (a *= Math.pow(10, b), a += .5, a = Math.floor(a), a /= Math.pow(10, b)) : Math.round(a)
  }, A = function (a) {
    return 0 > a ? Math.ceil(a) : Math.floor(a)
  }, t = function (a) {
    return a - x(a)
  }, C = !1, (B = function () {
    var a, b, c, d, e;
    if (!C && null != window.jQuery) {
      for (C = !0, d = ["html", "text"], e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(function (a) {
        var b;
        return b = window.jQuery.fn[a], window.jQuery.fn[a] = function (a) {
          var c;
          return null == a || null == (null != (c = this[0]) ? c.odometer : void 0) ? b.apply(this, arguments) : this[0].odometer.update(a)
        }
      }(a));
      return e
    }
  })(), setTimeout(B, 0), m = function () {
    function a(b) {
      var c, d, e, g, h, i, l, m, n, o, p = this;
      if (this.options = b, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
      this.el.odometer = this, m = a.options;
      for (d in m) g = m[d], null == this.options[d] && (this.options[d] = g);
      null == (h = this.options).duration && (h.duration = f), this.MAX_VALUES = this.options.duration / k / j | 0, this.resetFormat(), this.value = this.cleanValue(null != (n = this.options.value) ? n : ""), this.renderInside(), this.render();
      try {
        for (o = ["innerHTML", "innerText", "textContent"], i = 0, l = o.length; l > i; i++) e = o[i], null != this.el[e] && ! function (a) {
          return Object.defineProperty(p.el, a, {
            get: function () {
              var b;
              return "innerHTML" === a ? p.inside.outerHTML : null != (b = p.inside.innerText) ? b : p.inside.textContent
            },
            set: function (a) {
              return p.update(a)
            }
          })
        }(e)
      } catch (q) {
        c = q, this.watchForMutations()
      }
    }
    return a.prototype.renderInside = function () {
      return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
    }, a.prototype.watchForMutations = function () {
      var a, b = this;
      if (null != l) try {
        return null == this.observer && (this.observer = new l(function () {
          var a;
          return a = b.el.innerText, b.renderInside(), b.render(b.value), b.update(a)
        })), this.watchMutations = !0, this.startWatchingMutations()
      } catch (c) {
        a = c
      }
    }, a.prototype.startWatchingMutations = function () {
      return this.watchMutations ? this.observer.observe(this.el, {
        childList: !0
      }) : void 0
    }, a.prototype.stopWatchingMutations = function () {
      var a;
      return null != (a = this.observer) ? a.disconnect() : void 0
    }, a.prototype.cleanValue = function (a) {
      var b;
      return "string" == typeof a && (a = a.replace(null != (b = this.format.radix) ? b : ".", "<radix>"), a = a.replace(/[.,]/g, ""), a = a.replace("<radix>", "."), a = parseFloat(a, 10) || 0), x(a, this.format.precision)
    }, a.prototype.bindTransitionEnd = function () {
      var a, b, c, d, e, f, g = this;
      if (!this.transitionEndBound) {
        for (this.transitionEndBound = !0, b = !1, e = o.split(" "), f = [], c = 0, d = e.length; d > c; c++) a = e[c], f.push(this.el.addEventListener(a, function () {
          return b ? !0 : (b = !0, setTimeout(function () {
            return g.render(), b = !1, z(g.el, "odometerdone")
          }, 0), !0)
        }, !1));
        return f
      }
    }, a.prototype.resetFormat = function () {
      var a, b, d, e, f, g, i, j;
      if (a = null != (i = this.options.format) ? i : c, a || (a = "d"), d = h.exec(a), !d) throw new Error("Odometer: Unparsable digit format");
      return j = d.slice(1, 4), g = j[0], f = j[1], b = j[2], e = (null != b ? b.length : void 0) || 0, this.format = {
        repeating: g,
        radix: f,
        precision: e
      }
    }, a.prototype.render = function (a) {
      var b, c, d, e, f, g, h, i, j, k, l, m;
      for (null == a && (a = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", g = this.options.theme, b = this.el.className.split(" "), f = [], i = 0, k = b.length; k > i; i++) c = b[i], c.length && ((e = /^odometer-theme-(.+)$/.exec(c)) ? g = e[1] : /^odometer(-|$)/.test(c) || f.push(c));
      for (f.push("odometer"), p || f.push("odometer-no-transitions"), f.push(g ? "odometer-theme-" + g : "odometer-auto-theme"), this.el.className = f.join(" "), this.ribbons = {}, this.digits = [], h = !this.format.precision || !t(a) || !1, m = a.toString().split("").reverse(), j = 0, l = m.length; l > j; j++) d = m[j], "." === d && (h = !0), this.addDigit(d, h);
      return this.startWatchingMutations()
    }, a.prototype.update = function (a) {
      var b, c = this;
      return a = this.cleanValue(a), (b = a - this.value) ? (v(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), b > 0 ? r(this.el, "odometer-animating-up") : r(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(a), this.startWatchingMutations(), setTimeout(function () {
        return c.el.offsetHeight, r(c.el, "odometer-animating")
      }, 0), this.value = a) : void 0
    }, a.prototype.renderDigit = function () {
      return s(d)
    }, a.prototype.insertDigit = function (a, b) {
      return null != b ? this.inside.insertBefore(a, b) : this.inside.children.length ? this.inside.insertBefore(a, this.inside.children[0]) : this.inside.appendChild(a)
    }, a.prototype.addSpacer = function (a, b, c) {
      var d;
      return d = s(g), d.innerHTML = a, c && r(d, c), this.insertDigit(d, b)
    }, a.prototype.addDigit = function (a, b) {
      var c, d, e, f;
      if (null == b && (b = !0), "-" === a) return this.addSpacer(a, null, "odometer-negation-mark");
      if ("." === a) return this.addSpacer(null != (f = this.format.radix) ? f : ".", null, "odometer-radix-mark");
      if (b)
        for (e = !1;;) {
          if (!this.format.repeating.length) {
            if (e) throw new Error("Bad odometer format without digits");
            this.resetFormat(), e = !0
          }
          if (c = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === c) break;
          this.addSpacer(c)
        }
      return d = this.renderDigit(), d.querySelector(".odometer-value").innerHTML = a, this.digits.push(d), this.insertDigit(d)
    }, a.prototype.animate = function (a) {
      return p && "count" !== this.options.animation ? this.animateSlide(a) : this.animateCount(a)
    }, a.prototype.animateCount = function (a) {
      var c, d, e, f, g, h = this;
      if (d = +a - this.value) return f = e = u(), c = this.value, (g = function () {
        var i, j, k;
        return u() - f > h.options.duration ? (h.value = a, h.render(), void z(h.el, "odometerdone")) : (i = u() - e, i > b && (e = u(), k = i / h.options.duration, j = d * k, c += j, h.render(Math.round(c))), null != w ? w(g) : setTimeout(g, b))
      })()
    }, a.prototype.getDigitCount = function () {
      var a, b, c, d, e, f;
      for (d = 1 <= arguments.length ? G.call(arguments, 0) : [], a = e = 0, f = d.length; f > e; a = ++e) c = d[a], d[a] = Math.abs(c);
      return b = Math.max.apply(Math, d), Math.ceil(Math.log(b + 1) / Math.log(10))
    }, a.prototype.getFractionalDigitCount = function () {
      var a, b, c, d, e, f, g;
      for (e = 1 <= arguments.length ? G.call(arguments, 0) : [], b = /^\-?\d*\.(\d*?)0*$/, a = f = 0, g = e.length; g > f; a = ++f) d = e[a], e[a] = d.toString(), c = b.exec(e[a]), e[a] = null == c ? 0 : c[1].length;
      return Math.max.apply(Math, e)
    }, a.prototype.resetDigits = function () {
      return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
    }, a.prototype.animateSlide = function (a) {
      var b, c, d, f, g, h, i, j, k, l, m, n, o, p, q, s, t, u, v, w, x, y, z, B, C, D, E;
      if (s = this.value, j = this.getFractionalDigitCount(s, a), j && (a *= Math.pow(10, j), s *= Math.pow(10, j)), d = a - s) {
        for (this.bindTransitionEnd(), f = this.getDigitCount(s, a), g = [], b = 0, m = v = 0; f >= 0 ? f > v : v > f; m = f >= 0 ? ++v : --v) {
          if (t = A(s / Math.pow(10, f - m - 1)), i = A(a / Math.pow(10, f - m - 1)), h = i - t, Math.abs(h) > this.MAX_VALUES) {
            for (l = [], n = h / (this.MAX_VALUES + this.MAX_VALUES * b * e), c = t; h > 0 && i > c || 0 > h && c > i;) l.push(Math.round(c)), c += n;
            l[l.length - 1] !== i && l.push(i), b++
          } else l = function () {
            E = [];
            for (var a = t; i >= t ? i >= a : a >= i; i >= t ? a++ : a--) E.push(a);
            return E
          }.apply(this);
          for (m = w = 0, y = l.length; y > w; m = ++w) k = l[m], l[m] = Math.abs(k % 10);
          g.push(l)
        }
        for (this.resetDigits(), D = g.reverse(), m = x = 0, z = D.length; z > x; m = ++x)
          for (l = D[m], this.digits[m] || this.addDigit(" ", m >= j), null == (u = this.ribbons)[m] && (u[m] = this.digits[m].querySelector(".odometer-ribbon-inner")), this.ribbons[m].innerHTML = "", 0 > d && (l = l.reverse()), o = C = 0, B = l.length; B > C; o = ++C) k = l[o], q = document.createElement("div"), q.className = "odometer-value", q.innerHTML = k, this.ribbons[m].appendChild(q), o === l.length - 1 && r(q, "odometer-last-value"), 0 === o && r(q, "odometer-first-value");
        return 0 > t && this.addDigit("-"), p = this.inside.querySelector(".odometer-radix-mark"), null != p && p.parent.removeChild(p), j ? this.addSpacer(this.format.radix, this.digits[j - 1], "odometer-radix-mark") : void 0
      }
    }, a
  }(), m.options = null != (E = window.odometerOptions) ? E : {}, setTimeout(function () {
    var a, b, c, d, e;
    if (window.odometerOptions) {
      d = window.odometerOptions, e = [];
      for (a in d) b = d[a], e.push(null != (c = m.options)[a] ? (c = m.options)[a] : c[a] = b);
      return e
    }
  }, 0), m.init = function () {
    var a, b, c, d, e, f;
    if (null != document.querySelectorAll) {
      for (b = document.querySelectorAll(m.options.selector || ".odometer"), f = [], c = 0, d = b.length; d > c; c++) a = b[c], f.push(a.odometer = new m({
        el: a,
        value: null != (e = a.innerText) ? e : a.textContent
      }));
      return f
    }
  }, null != (null != (F = document.documentElement) ? F.doScroll : void 0) && null != document.createEventObject ? (D = document.onreadystatechange, document.onreadystatechange = function () {
    return "complete" === document.readyState && m.options.auto !== !1 && m.init(), null != D ? D.apply(this, arguments) : void 0
  }) : document.addEventListener("DOMContentLoaded", function () {
    return m.options.auto !== !1 ? m.init() : void 0
  }, !1), "function" == typeof define && define.amd ? define(["jquery"], function () {
    return m
  }) : typeof exports === !1 ? module.exports = m : window.Odometer = m
}).call(this);;
"use strict";
(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(['jquery', 'googlemaps!'], factory);
  } else {
    root.GMaps = factory();
  }
}(this, function () {
  /*!
   * GMaps.js v0.4.25
   * http://hpneo.github.com/gmaps/
   *
   * Copyright 2017, Gustavo Leon
   * Released under the MIT License.
   */
  var extend_object = function (obj, new_obj) {
    var name;
    if (obj === new_obj) {
      return obj;
    }
    for (name in new_obj) {
      if (new_obj[name] !== undefined) {
        obj[name] = new_obj[name];
      }
    }
    return obj;
  };
  var replace_object = function (obj, replace) {
    var name;
    if (obj === replace) {
      return obj;
    }
    for (name in replace) {
      if (obj[name] != undefined) {
        obj[name] = replace[name];
      }
    }
    return obj;
  };
  var array_map = function (array, callback) {
    var original_callback_params = Array.prototype.slice.call(arguments, 2),
      array_return = [],
      array_length = array.length,
      i;
    if (Array.prototype.map && array.map === Array.prototype.map) {
      array_return = Array.prototype.map.call(array, function (item) {
        var callback_params = original_callback_params.slice(0);
        callback_params.splice(0, 0, item);
        return callback.apply(this, callback_params);
      });
    } else {
      for (i = 0; i < array_length; i++) {
        callback_params = original_callback_params;
        callback_params.splice(0, 0, array[i]);
        array_return.push(callback.apply(this, callback_params));
      }
    }
    return array_return;
  };
  var array_flat = function (array) {
    var new_array = [],
      i;
    for (i = 0; i < array.length; i++) {
      new_array = new_array.concat(array[i]);
    }
    return new_array;
  };
  var coordsToLatLngs = function (coords, useGeoJSON) {
    var first_coord = coords[0],
      second_coord = coords[1];
    if (useGeoJSON) {
      first_coord = coords[1];
      second_coord = coords[0];
    }
    return new google.maps.LatLng(first_coord, second_coord);
  };
  var arrayToLatLng = function (coords, useGeoJSON) {
    var i;
    for (i = 0; i < coords.length; i++) {
      if (!(coords[i] instanceof google.maps.LatLng)) {
        if (coords[i].length > 0 && typeof (coords[i][0]) === "object") {
          coords[i] = arrayToLatLng(coords[i], useGeoJSON);
        } else {
          coords[i] = coordsToLatLngs(coords[i], useGeoJSON);
        }
      }
    }
    return coords;
  };
  var getElementsByClassName = function (class_name, context) {
    var element, _class = class_name.replace('.', '');
    if ('jQuery' in this && context) {
      element = $("." + _class, context)[0];
    } else {
      element = document.getElementsByClassName(_class)[0];
    }
    return element;
  };
  var getElementById = function (id, context) {
    var element, id = id.replace('#', '');
    if ('jQuery' in window && context) {
      element = $('#' + id, context)[0];
    } else {
      element = document.getElementById(id);
    };
    return element;
  };
  var findAbsolutePosition = function (obj) {
    var curleft = 0,
      curtop = 0;
    if (obj.getBoundingClientRect) {
      var rect = obj.getBoundingClientRect();
      var sx = -(window.scrollX ? window.scrollX : window.pageXOffset);
      var sy = -(window.scrollY ? window.scrollY : window.pageYOffset);
      return [(rect.left - sx), (rect.top - sy)];
    }
    if (obj.offsetParent) {
      do {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
    }
    return [curleft, curtop];
  };
  var GMaps = (function (global) {
    "use strict";
    var doc = document;
    var GMaps = function (options) {
      if (!(typeof window.google === 'object' && window.google.maps)) {
        if (typeof window.console === 'object' && window.console.error) {
          console.error('Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js.');
        }
        return function () {};
      }
      if (!this) return new GMaps(options);
      options.zoom = options.zoom || 15;
      options.mapType = options.mapType || 'roadmap';
      var valueOrDefault = function (value, defaultValue) {
        return value === undefined ? defaultValue : value;
      };
      var self = this,
        i, events_that_hide_context_menu = ['bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'projection_changed', 'resize', 'tilesloaded', 'zoom_changed'],
        events_that_doesnt_hide_context_menu = ['mousemove', 'mouseout', 'mouseover'],
        options_to_be_deleted = ['el', 'lat', 'lng', 'mapType', 'width', 'height', 'markerClusterer', 'enableNewStyle'],
        identifier = options.el || options.div,
        markerClustererFunction = options.markerClusterer,
        mapType = google.maps.MapTypeId[options.mapType.toUpperCase()],
        map_center = new google.maps.LatLng(options.lat, options.lng),
        zoomControl = valueOrDefault(options.zoomControl, true),
        zoomControlOpt = options.zoomControlOpt || {
          style: 'DEFAULT',
          position: 'TOP_LEFT'
        },
        zoomControlStyle = zoomControlOpt.style || 'DEFAULT',
        zoomControlPosition = zoomControlOpt.position || 'TOP_LEFT',
        panControl = valueOrDefault(options.panControl, true),
        mapTypeControl = valueOrDefault(options.mapTypeControl, true),
        scaleControl = valueOrDefault(options.scaleControl, true),
        streetViewControl = valueOrDefault(options.streetViewControl, true),
        overviewMapControl = valueOrDefault(overviewMapControl, true),
        map_options = {},
        map_base_options = {
          zoom: this.zoom,
          center: map_center,
          mapTypeId: mapType
        },
        map_controls_options = {
          panControl: panControl,
          zoomControl: zoomControl,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle[zoomControlStyle],
            position: google.maps.ControlPosition[zoomControlPosition]
          },
          mapTypeControl: mapTypeControl,
          scaleControl: scaleControl,
          streetViewControl: streetViewControl,
          overviewMapControl: overviewMapControl
        };
      if (typeof (options.el) === 'string' || typeof (options.div) === 'string') {
        if (identifier.indexOf("#") > -1) {
          this.el = getElementById(identifier, options.context);
        } else {
          this.el = getElementsByClassName.apply(this, [identifier, options.context]);
        }
      } else {
        this.el = identifier;
      }
      if (typeof (this.el) === 'undefined' || this.el === null) {
        throw 'No element defined.';
      }
      window.context_menu = window.context_menu || {};
      window.context_menu[self.el.id] = {};
      this.controls = [];
      this.overlays = [];
      this.layers = [];
      this.singleLayers = {};
      this.markers = [];
      this.polylines = [];
      this.routes = [];
      this.polygons = [];
      this.infoWindow = null;
      this.overlay_el = null;
      this.zoom = options.zoom;
      this.registered_events = {};
      this.el.style.width = options.width || this.el.scrollWidth || this.el.offsetWidth;
      this.el.style.height = options.height || this.el.scrollHeight || this.el.offsetHeight;
      google.maps.visualRefresh = options.enableNewStyle;
      for (i = 0; i < options_to_be_deleted.length; i++) {
        delete options[options_to_be_deleted[i]];
      }
      if (options.disableDefaultUI != true) {
        map_base_options = extend_object(map_base_options, map_controls_options);
      }
      map_options = extend_object(map_base_options, options);
      for (i = 0; i < events_that_hide_context_menu.length; i++) {
        delete map_options[events_that_hide_context_menu[i]];
      }
      for (i = 0; i < events_that_doesnt_hide_context_menu.length; i++) {
        delete map_options[events_that_doesnt_hide_context_menu[i]];
      }
      this.map = new google.maps.Map(this.el, map_options);
      if (markerClustererFunction) {
        this.markerClusterer = markerClustererFunction.apply(this, [this.map]);
      }
      var buildContextMenuHTML = function (control, e) {
        var html = '',
          options = window.context_menu[self.el.id][control];
        for (var i in options) {
          if (options.hasOwnProperty(i)) {
            var option = options[i];
            html += '<li><a id="' + control + '_' + i + '" href="#">' + option.title + '</a></li>';
          }
        }
        if (!getElementById('gmaps_context_menu')) return;
        var context_menu_element = getElementById('gmaps_context_menu');
        context_menu_element.innerHTML = html;
        var context_menu_items = context_menu_element.getElementsByTagName('a'),
          context_menu_items_count = context_menu_items.length,
          i;
        for (i = 0; i < context_menu_items_count; i++) {
          var context_menu_item = context_menu_items[i];
          var assign_menu_item_action = function (ev) {
            ev.preventDefault();
            options[this.id.replace(control + '_', '')].action.apply(self, [e]);
            self.hideContextMenu();
          };
          google.maps.event.clearListeners(context_menu_item, 'click');
          google.maps.event.addDomListenerOnce(context_menu_item, 'click', assign_menu_item_action, false);
        }
        var position = findAbsolutePosition.apply(this, [self.el]),
          left = position[0] + e.pixel.x - 15,
          top = position[1] + e.pixel.y - 15;
        context_menu_element.style.left = left + "px";
        context_menu_element.style.top = top + "px";
      };
      this.buildContextMenu = function (control, e) {
        if (control === 'marker') {
          e.pixel = {};
          var overlay = new google.maps.OverlayView();
          overlay.setMap(self.map);
          overlay.draw = function () {
            var projection = overlay.getProjection(),
              position = e.marker.getPosition();
            e.pixel = projection.fromLatLngToContainerPixel(position);
            buildContextMenuHTML(control, e);
          };
        } else {
          buildContextMenuHTML(control, e);
        }
        var context_menu_element = getElementById('gmaps_context_menu');
        setTimeout(function () {
          context_menu_element.style.display = 'block';
        }, 0);
      };
      this.setContextMenu = function (options) {
        window.context_menu[self.el.id][options.control] = {};
        var i, ul = doc.createElement('ul');
        for (i in options.options) {
          if (options.options.hasOwnProperty(i)) {
            var option = options.options[i];
            window.context_menu[self.el.id][options.control][option.name] = {
              title: option.title,
              action: option.action
            };
          }
        }
        ul.id = 'gmaps_context_menu';
        ul.style.display = 'none';
        ul.style.position = 'absolute';
        ul.style.minWidth = '100px';
        ul.style.background = 'white';
        ul.style.listStyle = 'none';
        ul.style.padding = '8px';
        ul.style.boxShadow = '2px 2px 6px #ccc';
        if (!getElementById('gmaps_context_menu')) {
          doc.body.appendChild(ul);
        }
        var context_menu_element = getElementById('gmaps_context_menu');
        google.maps.event.addDomListener(context_menu_element, 'mouseout', function (ev) {
          if (!ev.relatedTarget || !this.contains(ev.relatedTarget)) {
            window.setTimeout(function () {
              context_menu_element.style.display = 'none';
            }, 400);
          }
        }, false);
      };
      this.hideContextMenu = function () {
        var context_menu_element = getElementById('gmaps_context_menu');
        if (context_menu_element) {
          context_menu_element.style.display = 'none';
        }
      };
      var setupListener = function (object, name) {
        google.maps.event.addListener(object, name, function (e) {
          if (e == undefined) {
            e = this;
          }
          options[name].apply(this, [e]);
          self.hideContextMenu();
        });
      };
      google.maps.event.addListener(this.map, 'zoom_changed', this.hideContextMenu);
      for (var ev = 0; ev < events_that_hide_context_menu.length; ev++) {
        var name = events_that_hide_context_menu[ev];
        if (name in options) {
          setupListener(this.map, name);
        }
      }
      for (var ev = 0; ev < events_that_doesnt_hide_context_menu.length; ev++) {
        var name = events_that_doesnt_hide_context_menu[ev];
        if (name in options) {
          setupListener(this.map, name);
        }
      }
      google.maps.event.addListener(this.map, 'rightclick', function (e) {
        if (options.rightclick) {
          options.rightclick.apply(this, [e]);
        }
        if (window.context_menu[self.el.id]['map'] != undefined) {
          self.buildContextMenu('map', e);
        }
      });
      this.refresh = function () {
        google.maps.event.trigger(this.map, 'resize');
      };
      this.fitZoom = function () {
        var latLngs = [],
          markers_length = this.markers.length,
          i;
        for (i = 0; i < markers_length; i++) {
          if (typeof (this.markers[i].visible) === 'boolean' && this.markers[i].visible) {
            latLngs.push(this.markers[i].getPosition());
          }
        }
        this.fitLatLngBounds(latLngs);
      };
      this.fitLatLngBounds = function (latLngs) {
        var total = latLngs.length,
          bounds = new google.maps.LatLngBounds(),
          i;
        for (i = 0; i < total; i++) {
          bounds.extend(latLngs[i]);
        }
        this.map.fitBounds(bounds);
      };
      this.setCenter = function (lat, lng, callback) {
        this.map.panTo(new google.maps.LatLng(lat, lng));
        if (callback) {
          callback();
        }
      };
      this.getElement = function () {
        return this.el;
      };
      this.zoomIn = function (value) {
        value = value || 1;
        this.zoom = this.map.getZoom() + value;
        this.map.setZoom(this.zoom);
      };
      this.zoomOut = function (value) {
        value = value || 1;
        this.zoom = this.map.getZoom() - value;
        this.map.setZoom(this.zoom);
      };
      var native_methods = [],
        method;
      for (method in this.map) {
        if (typeof (this.map[method]) == 'function' && !this[method]) {
          native_methods.push(method);
        }
      }
      for (i = 0; i < native_methods.length; i++) {
        (function (gmaps, scope, method_name) {
          gmaps[method_name] = function () {
            return scope[method_name].apply(scope, arguments);
          };
        })(this, this.map, native_methods[i]);
      }
    };
    return GMaps;
  })(this);
  GMaps.prototype.createControl = function (options) {
    var control = document.createElement('div');
    control.style.cursor = 'pointer';
    if (options.disableDefaultStyles !== true) {
      control.style.fontFamily = 'Roboto, Arial, sans-serif';
      control.style.fontSize = '11px';
      control.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
    }
    for (var option in options.style) {
      control.style[option] = options.style[option];
    }
    if (options.id) {
      control.id = options.id;
    }
    if (options.title) {
      control.title = options.title;
    }
    if (options.classes) {
      control.className = options.classes;
    }
    if (options.content) {
      if (typeof options.content === 'string') {
        control.innerHTML = options.content;
      } else if (options.content instanceof HTMLElement) {
        control.appendChild(options.content);
      }
    }
    if (options.position) {
      control.position = google.maps.ControlPosition[options.position.toUpperCase()];
    }
    for (var ev in options.events) {
      (function (object, name) {
        google.maps.event.addDomListener(object, name, function () {
          options.events[name].apply(this, [this]);
        });
      })(control, ev);
    }
    control.index = 1;
    return control;
  };
  GMaps.prototype.addControl = function (options) {
    var control = this.createControl(options);
    this.controls.push(control);
    this.map.controls[control.position].push(control);
    return control;
  };
  GMaps.prototype.removeControl = function (control) {
    var position = null,
      i;
    for (i = 0; i < this.controls.length; i++) {
      if (this.controls[i] == control) {
        position = this.controls[i].position;
        this.controls.splice(i, 1);
      }
    }
    if (position) {
      for (i = 0; i < this.map.controls.length; i++) {
        var controlsForPosition = this.map.controls[control.position];
        if (controlsForPosition.getAt(i) == control) {
          controlsForPosition.removeAt(i);
          break;
        }
      }
    }
    return control;
  };
  GMaps.prototype.createMarker = function (options) {
    if (options.lat == undefined && options.lng == undefined && options.position == undefined) {
      throw 'No latitude or longitude defined.';
    }
    var self = this,
      details = options.details,
      fences = options.fences,
      outside = options.outside,
      base_options = {
        position: new google.maps.LatLng(options.lat, options.lng),
        map: null
      },
      marker_options = extend_object(base_options, options);
    delete marker_options.lat;
    delete marker_options.lng;
    delete marker_options.fences;
    delete marker_options.outside;
    var marker = new google.maps.Marker(marker_options);
    marker.fences = fences;
    if (options.infoWindow) {
      marker.infoWindow = new google.maps.InfoWindow(options.infoWindow);
      var info_window_events = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];
      for (var ev = 0; ev < info_window_events.length; ev++) {
        (function (object, name) {
          if (options.infoWindow[name]) {
            google.maps.event.addListener(object, name, function (e) {
              options.infoWindow[name].apply(this, [e]);
            });
          }
        })(marker.infoWindow, info_window_events[ev]);
      }
    }
    var marker_events = ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed'];
    var marker_events_with_mouse = ['dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mouseout', 'mouseover', 'mouseup'];
    for (var ev = 0; ev < marker_events.length; ev++) {
      (function (object, name) {
        if (options[name]) {
          google.maps.event.addListener(object, name, function () {
            options[name].apply(this, [this]);
          });
        }
      })(marker, marker_events[ev]);
    }
    for (var ev = 0; ev < marker_events_with_mouse.length; ev++) {
      (function (map, object, name) {
        if (options[name]) {
          google.maps.event.addListener(object, name, function (me) {
            if (!me.pixel) {
              me.pixel = map.getProjection().fromLatLngToPoint(me.latLng)
            }
            options[name].apply(this, [me]);
          });
        }
      })(this.map, marker, marker_events_with_mouse[ev]);
    }
    google.maps.event.addListener(marker, 'click', function () {
      this.details = details;
      if (options.click) {
        options.click.apply(this, [this]);
      }
      if (marker.infoWindow) {
        self.hideInfoWindows();
        marker.infoWindow.open(self.map, marker);
      }
    });
    google.maps.event.addListener(marker, 'rightclick', function (e) {
      e.marker = this;
      if (options.rightclick) {
        options.rightclick.apply(this, [e]);
      }
      if (window.context_menu[self.el.id]['marker'] != undefined) {
        self.buildContextMenu('marker', e);
      }
    });
    if (marker.fences) {
      google.maps.event.addListener(marker, 'dragend', function () {
        self.checkMarkerGeofence(marker, function (m, f) {
          outside(m, f);
        });
      });
    }
    return marker;
  };
  GMaps.prototype.addMarker = function (options) {
    var marker;
    if (options.hasOwnProperty('gm_accessors_')) {
      marker = options;
    } else {
      if ((options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) || options.position) {
        marker = this.createMarker(options);
      } else {
        throw 'No latitude or longitude defined.';
      }
    }
    marker.setMap(this.map);
    if (this.markerClusterer) {
      this.markerClusterer.addMarker(marker);
    }
    this.markers.push(marker);
    GMaps.fire('marker_added', marker, this);
    return marker;
  };
  GMaps.prototype.addMarkers = function (array) {
    for (var i = 0, marker; marker = array[i]; i++) {
      this.addMarker(marker);
    }
    return this.markers;
  };
  GMaps.prototype.hideInfoWindows = function () {
    for (var i = 0, marker; marker = this.markers[i]; i++) {
      if (marker.infoWindow) {
        marker.infoWindow.close();
      }
    }
  };
  GMaps.prototype.removeMarker = function (marker) {
    for (var i = 0; i < this.markers.length; i++) {
      if (this.markers[i] === marker) {
        this.markers[i].setMap(null);
        this.markers.splice(i, 1);
        if (this.markerClusterer) {
          this.markerClusterer.removeMarker(marker);
        }
        GMaps.fire('marker_removed', marker, this);
        break;
      }
    }
    return marker;
  };
  GMaps.prototype.removeMarkers = function (collection) {
    var new_markers = [];
    if (typeof collection == 'undefined') {
      for (var i = 0; i < this.markers.length; i++) {
        var marker = this.markers[i];
        marker.setMap(null);
        GMaps.fire('marker_removed', marker, this);
      }
      if (this.markerClusterer && this.markerClusterer.clearMarkers) {
        this.markerClusterer.clearMarkers();
      }
      this.markers = new_markers;
    } else {
      for (var i = 0; i < collection.length; i++) {
        var index = this.markers.indexOf(collection[i]);
        if (index > -1) {
          var marker = this.markers[index];
          marker.setMap(null);
          if (this.markerClusterer) {
            this.markerClusterer.removeMarker(marker);
          }
          GMaps.fire('marker_removed', marker, this);
        }
      }
      for (var i = 0; i < this.markers.length; i++) {
        var marker = this.markers[i];
        if (marker.getMap() != null) {
          new_markers.push(marker);
        }
      }
      this.markers = new_markers;
    }
  };
  GMaps.prototype.drawOverlay = function (options) {
    var overlay = new google.maps.OverlayView(),
      auto_show = true;
    overlay.setMap(this.map);
    if (options.auto_show != null) {
      auto_show = options.auto_show;
    }
    overlay.onAdd = function () {
      var el = document.createElement('div');
      el.style.borderStyle = "none";
      el.style.borderWidth = "0px";
      el.style.position = "absolute";
      el.style.zIndex = 100;
      el.innerHTML = options.content;
      overlay.el = el;
      if (!options.layer) {
        options.layer = 'overlayLayer';
      }
      var panes = this.getPanes(),
        overlayLayer = panes[options.layer],
        stop_overlay_events = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown'];
      overlayLayer.appendChild(el);
      for (var ev = 0; ev < stop_overlay_events.length; ev++) {
        (function (object, name) {
          google.maps.event.addDomListener(object, name, function (e) {
            if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && document.all) {
              e.cancelBubble = true;
              e.returnValue = false;
            } else {
              e.stopPropagation();
            }
          });
        })(el, stop_overlay_events[ev]);
      }
      if (options.click) {
        panes.overlayMouseTarget.appendChild(overlay.el);
        google.maps.event.addDomListener(overlay.el, 'click', function () {
          options.click.apply(overlay, [overlay]);
        });
      }
      google.maps.event.trigger(this, 'ready');
    };
    overlay.draw = function () {
      var projection = this.getProjection(),
        pixel = projection.fromLatLngToDivPixel(new google.maps.LatLng(options.lat, options.lng));
      options.horizontalOffset = options.horizontalOffset || 0;
      options.verticalOffset = options.verticalOffset || 0;
      var el = overlay.el,
        content = el.children[0],
        content_height = content.clientHeight,
        content_width = content.clientWidth;
      switch (options.verticalAlign) {
        case 'top':
          el.style.top = (pixel.y - content_height + options.verticalOffset) + 'px';
          break;
        default:
        case 'middle':
          el.style.top = (pixel.y - (content_height / 2) + options.verticalOffset) + 'px';
          break;
        case 'bottom':
          el.style.top = (pixel.y + options.verticalOffset) + 'px';
          break;
      }
      switch (options.horizontalAlign) {
        case 'left':
          el.style.left = (pixel.x - content_width + options.horizontalOffset) + 'px';
          break;
        default:
        case 'center':
          el.style.left = (pixel.x - (content_width / 2) + options.horizontalOffset) + 'px';
          break;
        case 'right':
          el.style.left = (pixel.x + options.horizontalOffset) + 'px';
          break;
      }
      el.style.display = auto_show ? 'block' : 'none';
      if (!auto_show) {
        options.show.apply(this, [el]);
      }
    };
    overlay.onRemove = function () {
      var el = overlay.el;
      if (options.remove) {
        options.remove.apply(this, [el]);
      } else {
        overlay.el.parentNode.removeChild(overlay.el);
        overlay.el = null;
      }
    };
    this.overlays.push(overlay);
    return overlay;
  };
  GMaps.prototype.removeOverlay = function (overlay) {
    for (var i = 0; i < this.overlays.length; i++) {
      if (this.overlays[i] === overlay) {
        this.overlays[i].setMap(null);
        this.overlays.splice(i, 1);
        break;
      }
    }
  };
  GMaps.prototype.removeOverlays = function () {
    for (var i = 0, item; item = this.overlays[i]; i++) {
      item.setMap(null);
    }
    this.overlays = [];
  };
  GMaps.prototype.drawPolyline = function (options) {
    var path = [],
      points = options.path;
    if (points.length) {
      if (points[0][0] === undefined) {
        path = points;
      } else {
        for (var i = 0, latlng; latlng = points[i]; i++) {
          path.push(new google.maps.LatLng(latlng[0], latlng[1]));
        }
      }
    }
    var polyline_options = {
      map: this.map,
      path: path,
      strokeColor: options.strokeColor,
      strokeOpacity: options.strokeOpacity,
      strokeWeight: options.strokeWeight,
      geodesic: options.geodesic,
      clickable: true,
      editable: false,
      visible: true
    };
    if (options.hasOwnProperty("clickable")) {
      polyline_options.clickable = options.clickable;
    }
    if (options.hasOwnProperty("editable")) {
      polyline_options.editable = options.editable;
    }
    if (options.hasOwnProperty("icons")) {
      polyline_options.icons = options.icons;
    }
    if (options.hasOwnProperty("zIndex")) {
      polyline_options.zIndex = options.zIndex;
    }
    var polyline = new google.maps.Polyline(polyline_options);
    var polyline_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];
    for (var ev = 0; ev < polyline_events.length; ev++) {
      (function (object, name) {
        if (options[name]) {
          google.maps.event.addListener(object, name, function (e) {
            options[name].apply(this, [e]);
          });
        }
      })(polyline, polyline_events[ev]);
    }
    this.polylines.push(polyline);
    GMaps.fire('polyline_added', polyline, this);
    return polyline;
  };
  GMaps.prototype.removePolyline = function (polyline) {
    for (var i = 0; i < this.polylines.length; i++) {
      if (this.polylines[i] === polyline) {
        this.polylines[i].setMap(null);
        this.polylines.splice(i, 1);
        GMaps.fire('polyline_removed', polyline, this);
        break;
      }
    }
  };
  GMaps.prototype.removePolylines = function () {
    for (var i = 0, item; item = this.polylines[i]; i++) {
      item.setMap(null);
    }
    this.polylines = [];
  };
  GMaps.prototype.drawCircle = function (options) {
    options = extend_object({
      map: this.map,
      center: new google.maps.LatLng(options.lat, options.lng)
    }, options);
    delete options.lat;
    delete options.lng;
    var polygon = new google.maps.Circle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];
    for (var ev = 0; ev < polygon_events.length; ev++) {
      (function (object, name) {
        if (options[name]) {
          google.maps.event.addListener(object, name, function (e) {
            options[name].apply(this, [e]);
          });
        }
      })(polygon, polygon_events[ev]);
    }
    this.polygons.push(polygon);
    return polygon;
  };
  GMaps.prototype.drawRectangle = function (options) {
    options = extend_object({
      map: this.map
    }, options);
    var latLngBounds = new google.maps.LatLngBounds(new google.maps.LatLng(options.bounds[0][0], options.bounds[0][1]), new google.maps.LatLng(options.bounds[1][0], options.bounds[1][1]));
    options.bounds = latLngBounds;
    var polygon = new google.maps.Rectangle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];
    for (var ev = 0; ev < polygon_events.length; ev++) {
      (function (object, name) {
        if (options[name]) {
          google.maps.event.addListener(object, name, function (e) {
            options[name].apply(this, [e]);
          });
        }
      })(polygon, polygon_events[ev]);
    }
    this.polygons.push(polygon);
    return polygon;
  };
  GMaps.prototype.drawPolygon = function (options) {
    var useGeoJSON = false;
    if (options.hasOwnProperty("useGeoJSON")) {
      useGeoJSON = options.useGeoJSON;
    }
    delete options.useGeoJSON;
    options = extend_object({
      map: this.map
    }, options);
    if (useGeoJSON == false) {
      options.paths = [options.paths.slice(0)];
    }
    if (options.paths.length > 0) {
      if (options.paths[0].length > 0) {
        options.paths = array_flat(array_map(options.paths, arrayToLatLng, useGeoJSON));
      }
    }
    var polygon = new google.maps.Polygon(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];
    for (var ev = 0; ev < polygon_events.length; ev++) {
      (function (object, name) {
        if (options[name]) {
          google.maps.event.addListener(object, name, function (e) {
            options[name].apply(this, [e]);
          });
        }
      })(polygon, polygon_events[ev]);
    }
    this.polygons.push(polygon);
    GMaps.fire('polygon_added', polygon, this);
    return polygon;
  };
  GMaps.prototype.removePolygon = function (polygon) {
    for (var i = 0; i < this.polygons.length; i++) {
      if (this.polygons[i] === polygon) {
        this.polygons[i].setMap(null);
        this.polygons.splice(i, 1);
        GMaps.fire('polygon_removed', polygon, this);
        break;
      }
    }
  };
  GMaps.prototype.removePolygons = function () {
    for (var i = 0, item; item = this.polygons[i]; i++) {
      item.setMap(null);
    }
    this.polygons = [];
  };
  GMaps.prototype.getFromFusionTables = function (options) {
    var events = options.events;
    delete options.events;
    var fusion_tables_options = options,
      layer = new google.maps.FusionTablesLayer(fusion_tables_options);
    for (var ev in events) {
      (function (object, name) {
        google.maps.event.addListener(object, name, function (e) {
          events[name].apply(this, [e]);
        });
      })(layer, ev);
    }
    this.layers.push(layer);
    return layer;
  };
  GMaps.prototype.loadFromFusionTables = function (options) {
    var layer = this.getFromFusionTables(options);
    layer.setMap(this.map);
    return layer;
  };
  GMaps.prototype.getFromKML = function (options) {
    var url = options.url,
      events = options.events;
    delete options.url;
    delete options.events;
    var kml_options = options,
      layer = new google.maps.KmlLayer(url, kml_options);
    for (var ev in events) {
      (function (object, name) {
        google.maps.event.addListener(object, name, function (e) {
          events[name].apply(this, [e]);
        });
      })(layer, ev);
    }
    this.layers.push(layer);
    return layer;
  };
  GMaps.prototype.loadFromKML = function (options) {
    var layer = this.getFromKML(options);
    layer.setMap(this.map);
    return layer;
  };
  GMaps.prototype.addLayer = function (layerName, options) {
    options = options || {};
    var layer;
    switch (layerName) {
      case 'weather':
        this.singleLayers.weather = layer = new google.maps.weather.WeatherLayer();
        break;
      case 'clouds':
        this.singleLayers.clouds = layer = new google.maps.weather.CloudLayer();
        break;
      case 'traffic':
        this.singleLayers.traffic = layer = new google.maps.TrafficLayer();
        break;
      case 'transit':
        this.singleLayers.transit = layer = new google.maps.TransitLayer();
        break;
      case 'bicycling':
        this.singleLayers.bicycling = layer = new google.maps.BicyclingLayer();
        break;
      case 'panoramio':
        this.singleLayers.panoramio = layer = new google.maps.panoramio.PanoramioLayer();
        layer.setTag(options.filter);
        delete options.filter;
        if (options.click) {
          google.maps.event.addListener(layer, 'click', function (event) {
            options.click(event);
            delete options.click;
          });
        }
        break;
      case 'places':
        this.singleLayers.places = layer = new google.maps.places.PlacesService(this.map);
        if (options.search || options.nearbySearch || options.radarSearch) {
          var placeSearchRequest = {
            bounds: options.bounds || null,
            keyword: options.keyword || null,
            location: options.location || null,
            name: options.name || null,
            radius: options.radius || null,
            rankBy: options.rankBy || null,
            types: options.types || null
          };
          if (options.radarSearch) {
            layer.radarSearch(placeSearchRequest, options.radarSearch);
          }
          if (options.search) {
            layer.search(placeSearchRequest, options.search);
          }
          if (options.nearbySearch) {
            layer.nearbySearch(placeSearchRequest, options.nearbySearch);
          }
        }
        if (options.textSearch) {
          var textSearchRequest = {
            bounds: options.bounds || null,
            location: options.location || null,
            query: options.query || null,
            radius: options.radius || null
          };
          layer.textSearch(textSearchRequest, options.textSearch);
        }
        break;
    }
    if (layer !== undefined) {
      if (typeof layer.setOptions == 'function') {
        layer.setOptions(options);
      }
      if (typeof layer.setMap == 'function') {
        layer.setMap(this.map);
      }
      return layer;
    }
  };
  GMaps.prototype.removeLayer = function (layer) {
    if (typeof (layer) == "string" && this.singleLayers[layer] !== undefined) {
      this.singleLayers[layer].setMap(null);
      delete this.singleLayers[layer];
    } else {
      for (var i = 0; i < this.layers.length; i++) {
        if (this.layers[i] === layer) {
          this.layers[i].setMap(null);
          this.layers.splice(i, 1);
          break;
        }
      }
    }
  };
  var travelMode, unitSystem;
  GMaps.prototype.getRoutes = function (options) {
    switch (options.travelMode) {
      case 'bicycling':
        travelMode = google.maps.TravelMode.BICYCLING;
        break;
      case 'transit':
        travelMode = google.maps.TravelMode.TRANSIT;
        break;
      case 'driving':
        travelMode = google.maps.TravelMode.DRIVING;
        break;
      default:
        travelMode = google.maps.TravelMode.WALKING;
        break;
    }
    if (options.unitSystem === 'imperial') {
      unitSystem = google.maps.UnitSystem.IMPERIAL;
    } else {
      unitSystem = google.maps.UnitSystem.METRIC;
    }
    var base_options = {
        avoidHighways: false,
        avoidTolls: false,
        optimizeWaypoints: false,
        waypoints: []
      },
      request_options = extend_object(base_options, options);
    request_options.origin = /string/.test(typeof options.origin) ? options.origin : new google.maps.LatLng(options.origin[0], options.origin[1]);
    request_options.destination = /string/.test(typeof options.destination) ? options.destination : new google.maps.LatLng(options.destination[0], options.destination[1]);
    request_options.travelMode = travelMode;
    request_options.unitSystem = unitSystem;
    delete request_options.callback;
    delete request_options.error;
    var self = this,
      routes = [],
      service = new google.maps.DirectionsService();
    service.route(request_options, function (result, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        for (var r in result.routes) {
          if (result.routes.hasOwnProperty(r)) {
            routes.push(result.routes[r]);
          }
        }
        if (options.callback) {
          options.callback(routes, result, status);
        }
      } else {
        if (options.error) {
          options.error(result, status);
        }
      }
    });
  };
  GMaps.prototype.removeRoutes = function () {
    this.routes.length = 0;
  };
  GMaps.prototype.getElevations = function (options) {
    options = extend_object({
      locations: [],
      path: false,
      samples: 256
    }, options);
    if (options.locations.length > 0) {
      if (options.locations[0].length > 0) {
        options.locations = array_flat(array_map([options.locations], arrayToLatLng, false));
      }
    }
    var callback = options.callback;
    delete options.callback;
    var service = new google.maps.ElevationService();
    if (!options.path) {
      delete options.path;
      delete options.samples;
      service.getElevationForLocations(options, function (result, status) {
        if (callback && typeof (callback) === "function") {
          callback(result, status);
        }
      });
    } else {
      var pathRequest = {
        path: options.locations,
        samples: options.samples
      };
      service.getElevationAlongPath(pathRequest, function (result, status) {
        if (callback && typeof (callback) === "function") {
          callback(result, status);
        }
      });
    }
  };
  GMaps.prototype.cleanRoute = GMaps.prototype.removePolylines;
  GMaps.prototype.renderRoute = function (options, renderOptions) {
    var self = this,
      panel = ((typeof renderOptions.panel === 'string') ? document.getElementById(renderOptions.panel.replace('#', '')) : renderOptions.panel),
      display;
    renderOptions.panel = panel;
    renderOptions = extend_object({
      map: this.map
    }, renderOptions);
    display = new google.maps.DirectionsRenderer(renderOptions);
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints: options.waypoints,
      unitSystem: options.unitSystem,
      error: options.error,
      avoidHighways: options.avoidHighways,
      avoidTolls: options.avoidTolls,
      optimizeWaypoints: options.optimizeWaypoints,
      callback: function (routes, response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          display.setDirections(response);
        }
      }
    });
  };
  GMaps.prototype.drawRoute = function (options) {
    var self = this;
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints: options.waypoints,
      unitSystem: options.unitSystem,
      error: options.error,
      avoidHighways: options.avoidHighways,
      avoidTolls: options.avoidTolls,
      optimizeWaypoints: options.optimizeWaypoints,
      callback: function (routes) {
        if (routes.length > 0) {
          var polyline_options = {
            path: routes[routes.length - 1].overview_path,
            strokeColor: options.strokeColor,
            strokeOpacity: options.strokeOpacity,
            strokeWeight: options.strokeWeight
          };
          if (options.hasOwnProperty("icons")) {
            polyline_options.icons = options.icons;
          }
          self.drawPolyline(polyline_options);
          if (options.callback) {
            options.callback(routes[routes.length - 1]);
          }
        }
      }
    });
  };
  GMaps.prototype.travelRoute = function (options) {
    if (options.origin && options.destination) {
      this.getRoutes({
        origin: options.origin,
        destination: options.destination,
        travelMode: options.travelMode,
        waypoints: options.waypoints,
        unitSystem: options.unitSystem,
        error: options.error,
        callback: function (e) {
          if (e.length > 0 && options.start) {
            options.start(e[e.length - 1]);
          }
          if (e.length > 0 && options.step) {
            var route = e[e.length - 1];
            if (route.legs.length > 0) {
              var steps = route.legs[0].steps;
              for (var i = 0, step; step = steps[i]; i++) {
                step.step_number = i;
                options.step(step, (route.legs[0].steps.length - 1));
              }
            }
          }
          if (e.length > 0 && options.end) {
            options.end(e[e.length - 1]);
          }
        }
      });
    } else if (options.route) {
      if (options.route.legs.length > 0) {
        var steps = options.route.legs[0].steps;
        for (var i = 0, step; step = steps[i]; i++) {
          step.step_number = i;
          options.step(step);
        }
      }
    }
  };
  GMaps.prototype.drawSteppedRoute = function (options) {
    var self = this;
    if (options.origin && options.destination) {
      this.getRoutes({
        origin: options.origin,
        destination: options.destination,
        travelMode: options.travelMode,
        waypoints: options.waypoints,
        error: options.error,
        callback: function (e) {
          if (e.length > 0 && options.start) {
            options.start(e[e.length - 1]);
          }
          if (e.length > 0 && options.step) {
            var route = e[e.length - 1];
            if (route.legs.length > 0) {
              var steps = route.legs[0].steps;
              for (var i = 0, step; step = steps[i]; i++) {
                step.step_number = i;
                var polyline_options = {
                  path: step.path,
                  strokeColor: options.strokeColor,
                  strokeOpacity: options.strokeOpacity,
                  strokeWeight: options.strokeWeight
                };
                if (options.hasOwnProperty("icons")) {
                  polyline_options.icons = options.icons;
                }
                self.drawPolyline(polyline_options);
                options.step(step, (route.legs[0].steps.length - 1));
              }
            }
          }
          if (e.length > 0 && options.end) {
            options.end(e[e.length - 1]);
          }
        }
      });
    } else if (options.route) {
      if (options.route.legs.length > 0) {
        var steps = options.route.legs[0].steps;
        for (var i = 0, step; step = steps[i]; i++) {
          step.step_number = i;
          var polyline_options = {
            path: step.path,
            strokeColor: options.strokeColor,
            strokeOpacity: options.strokeOpacity,
            strokeWeight: options.strokeWeight
          };
          if (options.hasOwnProperty("icons")) {
            polyline_options.icons = options.icons;
          }
          self.drawPolyline(polyline_options);
          options.step(step);
        }
      }
    }
  };
  GMaps.Route = function (options) {
    this.origin = options.origin;
    this.destination = options.destination;
    this.waypoints = options.waypoints;
    this.map = options.map;
    this.route = options.route;
    this.step_count = 0;
    this.steps = this.route.legs[0].steps;
    this.steps_length = this.steps.length;
    var polyline_options = {
      path: new google.maps.MVCArray(),
      strokeColor: options.strokeColor,
      strokeOpacity: options.strokeOpacity,
      strokeWeight: options.strokeWeight
    };
    if (options.hasOwnProperty("icons")) {
      polyline_options.icons = options.icons;
    }
    this.polyline = this.map.drawPolyline(polyline_options).getPath();
  };
  GMaps.Route.prototype.getRoute = function (options) {
    var self = this;
    this.map.getRoutes({
      origin: this.origin,
      destination: this.destination,
      travelMode: options.travelMode,
      waypoints: this.waypoints || [],
      error: options.error,
      callback: function () {
        self.route = e[0];
        if (options.callback) {
          options.callback.call(self);
        }
      }
    });
  };
  GMaps.Route.prototype.back = function () {
    if (this.step_count > 0) {
      this.step_count--;
      var path = this.route.legs[0].steps[this.step_count].path;
      for (var p in path) {
        if (path.hasOwnProperty(p)) {
          this.polyline.pop();
        }
      }
    }
  };
  GMaps.Route.prototype.forward = function () {
    if (this.step_count < this.steps_length) {
      var path = this.route.legs[0].steps[this.step_count].path;
      for (var p in path) {
        if (path.hasOwnProperty(p)) {
          this.polyline.push(path[p]);
        }
      }
      this.step_count++;
    }
  };
  GMaps.prototype.checkGeofence = function (lat, lng, fence) {
    return fence.containsLatLng(new google.maps.LatLng(lat, lng));
  };
  GMaps.prototype.checkMarkerGeofence = function (marker, outside_callback) {
    if (marker.fences) {
      for (var i = 0, fence; fence = marker.fences[i]; i++) {
        var pos = marker.getPosition();
        if (!this.checkGeofence(pos.lat(), pos.lng(), fence)) {
          outside_callback(marker, fence);
        }
      }
    }
  };
  GMaps.prototype.toImage = function (options) {
    var options = options || {},
      static_map_options = {};
    static_map_options['size'] = options['size'] || [this.el.clientWidth, this.el.clientHeight];
    static_map_options['lat'] = this.getCenter().lat();
    static_map_options['lng'] = this.getCenter().lng();
    if (this.markers.length > 0) {
      static_map_options['markers'] = [];
      for (var i = 0; i < this.markers.length; i++) {
        static_map_options['markers'].push({
          lat: this.markers[i].getPosition().lat(),
          lng: this.markers[i].getPosition().lng()
        });
      }
    }
    if (this.polylines.length > 0) {
      var polyline = this.polylines[0];
      static_map_options['polyline'] = {};
      static_map_options['polyline']['path'] = google.maps.geometry.encoding.encodePath(polyline.getPath());
      static_map_options['polyline']['strokeColor'] = polyline.strokeColor
      static_map_options['polyline']['strokeOpacity'] = polyline.strokeOpacity
      static_map_options['polyline']['strokeWeight'] = polyline.strokeWeight
    }
    return GMaps.staticMapURL(static_map_options);
  };
  GMaps.staticMapURL = function (options) {
    var parameters = [],
      data, static_root = (location.protocol === 'file:' ? 'http:' : location.protocol) + '//maps.googleapis.com/maps/api/staticmap';
    if (options.url) {
      static_root = options.url;
      delete options.url;
    }
    static_root += '?';
    var markers = options.markers;
    delete options.markers;
    if (!markers && options.marker) {
      markers = [options.marker];
      delete options.marker;
    }
    var styles = options.styles;
    delete options.styles;
    var polyline = options.polyline;
    delete options.polyline;
    if (options.center) {
      parameters.push('center=' + options.center);
      delete options.center;
    } else if (options.address) {
      parameters.push('center=' + options.address);
      delete options.address;
    } else if (options.lat) {
      parameters.push(['center=', options.lat, ',', options.lng].join(''));
      delete options.lat;
      delete options.lng;
    } else if (options.visible) {
      var visible = encodeURI(options.visible.join('|'));
      parameters.push('visible=' + visible);
    }
    var size = options.size;
    if (size) {
      if (size.join) {
        size = size.join('x');
      }
      delete options.size;
    } else {
      size = '630x300';
    }
    parameters.push('size=' + size);
    if (!options.zoom && options.zoom !== false) {
      options.zoom = 15;
    }
    var sensor = options.hasOwnProperty('sensor') ? !!options.sensor : true;
    delete options.sensor;
    parameters.push('sensor=' + sensor);
    for (var param in options) {
      if (options.hasOwnProperty(param)) {
        parameters.push(param + '=' + options[param]);
      }
    }
    if (markers) {
      var marker, loc;
      for (var i = 0; data = markers[i]; i++) {
        marker = [];
        if (data.size && data.size !== 'normal') {
          marker.push('size:' + data.size);
          delete data.size;
        } else if (data.icon) {
          marker.push('icon:' + encodeURI(data.icon));
          delete data.icon;
        }
        if (data.color) {
          marker.push('color:' + data.color.replace('#', '0x'));
          delete data.color;
        }
        if (data.label) {
          marker.push('label:' + data.label[0].toUpperCase());
          delete data.label;
        }
        loc = (data.address ? data.address : data.lat + ',' + data.lng);
        delete data.address;
        delete data.lat;
        delete data.lng;
        for (var param in data) {
          if (data.hasOwnProperty(param)) {
            marker.push(param + ':' + data[param]);
          }
        }
        if (marker.length || i === 0) {
          marker.push(loc);
          marker = marker.join('|');
          parameters.push('markers=' + encodeURI(marker));
        } else {
          marker = parameters.pop() + encodeURI('|' + loc);
          parameters.push(marker);
        }
      }
    }
    if (styles) {
      for (var i = 0; i < styles.length; i++) {
        var styleRule = [];
        if (styles[i].featureType) {
          styleRule.push('feature:' + styles[i].featureType.toLowerCase());
        }
        if (styles[i].elementType) {
          styleRule.push('element:' + styles[i].elementType.toLowerCase());
        }
        for (var j = 0; j < styles[i].stylers.length; j++) {
          for (var p in styles[i].stylers[j]) {
            var ruleArg = styles[i].stylers[j][p];
            if (p == 'hue' || p == 'color') {
              ruleArg = '0x' + ruleArg.substring(1);
            }
            styleRule.push(p + ':' + ruleArg);
          }
        }
        var rule = styleRule.join('|');
        if (rule != '') {
          parameters.push('style=' + rule);
        }
      }
    }

    function parseColor(color, opacity) {
      if (color[0] === '#') {
        color = color.replace('#', '0x');
        if (opacity) {
          opacity = parseFloat(opacity);
          opacity = Math.min(1, Math.max(opacity, 0));
          if (opacity === 0) {
            return '0x00000000';
          }
          opacity = (opacity * 255).toString(16);
          if (opacity.length === 1) {
            opacity += opacity;
          }
          color = color.slice(0, 8) + opacity;
        }
      }
      return color;
    }
    if (polyline) {
      data = polyline;
      polyline = [];
      if (data.strokeWeight) {
        polyline.push('weight:' + parseInt(data.strokeWeight, 10));
      }
      if (data.strokeColor) {
        var color = parseColor(data.strokeColor, data.strokeOpacity);
        polyline.push('color:' + color);
      }
      if (data.fillColor) {
        var fillcolor = parseColor(data.fillColor, data.fillOpacity);
        polyline.push('fillcolor:' + fillcolor);
      }
      var path = data.path;
      if (path.join) {
        for (var j = 0, pos; pos = path[j]; j++) {
          polyline.push(pos.join(','));
        }
      } else {
        polyline.push('enc:' + path);
      }
      polyline = polyline.join('|');
      parameters.push('path=' + encodeURI(polyline));
    }
    var dpi = window.devicePixelRatio || 1;
    parameters.push('scale=' + dpi);
    parameters = parameters.join('&');
    return static_root + parameters;
  };
  GMaps.prototype.addMapType = function (mapTypeId, options) {
    if (options.hasOwnProperty("getTileUrl") && typeof (options["getTileUrl"]) == "function") {
      options.tileSize = options.tileSize || new google.maps.Size(256, 256);
      var mapType = new google.maps.ImageMapType(options);
      this.map.mapTypes.set(mapTypeId, mapType);
    } else {
      throw "'getTileUrl' function required.";
    }
  };
  GMaps.prototype.addOverlayMapType = function (options) {
    if (options.hasOwnProperty("getTile") && typeof (options["getTile"]) == "function") {
      var overlayMapTypeIndex = options.index;
      delete options.index;
      this.map.overlayMapTypes.insertAt(overlayMapTypeIndex, options);
    } else {
      throw "'getTile' function required.";
    }
  };
  GMaps.prototype.removeOverlayMapType = function (overlayMapTypeIndex) {
    this.map.overlayMapTypes.removeAt(overlayMapTypeIndex);
  };
  GMaps.prototype.addStyle = function (options) {
    var styledMapType = new google.maps.StyledMapType(options.styles, {
      name: options.styledMapName
    });
    this.map.mapTypes.set(options.mapTypeId, styledMapType);
  };
  GMaps.prototype.setStyle = function (mapTypeId) {
    this.map.setMapTypeId(mapTypeId);
  };
  GMaps.prototype.createPanorama = function (streetview_options) {
    if (!streetview_options.hasOwnProperty('lat') || !streetview_options.hasOwnProperty('lng')) {
      streetview_options.lat = this.getCenter().lat();
      streetview_options.lng = this.getCenter().lng();
    }
    this.panorama = GMaps.createPanorama(streetview_options);
    this.map.setStreetView(this.panorama);
    return this.panorama;
  };
  GMaps.createPanorama = function (options) {
    var el = getElementById(options.el, options.context);
    options.position = new google.maps.LatLng(options.lat, options.lng);
    delete options.el;
    delete options.context;
    delete options.lat;
    delete options.lng;
    var streetview_events = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'],
      streetview_options = extend_object({
        visible: true
      }, options);
    for (var i = 0; i < streetview_events.length; i++) {
      delete streetview_options[streetview_events[i]];
    }
    var panorama = new google.maps.StreetViewPanorama(el, streetview_options);
    for (var i = 0; i < streetview_events.length; i++) {
      (function (object, name) {
        if (options[name]) {
          google.maps.event.addListener(object, name, function () {
            options[name].apply(this);
          });
        }
      })(panorama, streetview_events[i]);
    }
    return panorama;
  };
  GMaps.prototype.on = function (event_name, handler) {
    return GMaps.on(event_name, this, handler);
  };
  GMaps.prototype.off = function (event_name) {
    GMaps.off(event_name, this);
  };
  GMaps.prototype.once = function (event_name, handler) {
    return GMaps.once(event_name, this, handler);
  };
  GMaps.custom_events = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'geolocated', 'geolocation_failed'];
  GMaps.on = function (event_name, object, handler) {
    if (GMaps.custom_events.indexOf(event_name) == -1) {
      if (object instanceof GMaps) object = object.map;
      return google.maps.event.addListener(object, event_name, handler);
    } else {
      var registered_event = {
        handler: handler,
        eventName: event_name
      };
      object.registered_events[event_name] = object.registered_events[event_name] || [];
      object.registered_events[event_name].push(registered_event);
      return registered_event;
    }
  };
  GMaps.off = function (event_name, object) {
    if (GMaps.custom_events.indexOf(event_name) == -1) {
      if (object instanceof GMaps) object = object.map;
      google.maps.event.clearListeners(object, event_name);
    } else {
      object.registered_events[event_name] = [];
    }
  };
  GMaps.once = function (event_name, object, handler) {
    if (GMaps.custom_events.indexOf(event_name) == -1) {
      if (object instanceof GMaps) object = object.map;
      return google.maps.event.addListenerOnce(object, event_name, handler);
    }
  };
  GMaps.fire = function (event_name, object, scope) {
    if (GMaps.custom_events.indexOf(event_name) == -1) {
      google.maps.event.trigger(object, event_name, Array.prototype.slice.apply(arguments).slice(2));
    } else {
      if (event_name in scope.registered_events) {
        var firing_events = scope.registered_events[event_name];
        for (var i = 0; i < firing_events.length; i++) {
          (function (handler, scope, object) {
            handler.apply(scope, [object]);
          })(firing_events[i]['handler'], scope, object);
        }
      }
    }
  };
  GMaps.geolocate = function (options) {
    var complete_callback = options.always || options.complete;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        options.success(position);
        if (complete_callback) {
          complete_callback();
        }
      }, function (error) {
        options.error(error);
        if (complete_callback) {
          complete_callback();
        }
      }, options.options);
    } else {
      options.not_supported();
      if (complete_callback) {
        complete_callback();
      }
    }
  };
  GMaps.geocode = function (options) {
    this.geocoder = new google.maps.Geocoder();
    var callback = options.callback;
    if (options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) {
      options.latLng = new google.maps.LatLng(options.lat, options.lng);
    }
    delete options.lat;
    delete options.lng;
    delete options.callback;
    this.geocoder.geocode(options, function (results, status) {
      callback(results, status);
    });
  };
  if (typeof window.google === 'object' && window.google.maps) {
    if (!google.maps.Polygon.prototype.getBounds) {
      google.maps.Polygon.prototype.getBounds = function (latLng) {
        var bounds = new google.maps.LatLngBounds();
        var paths = this.getPaths();
        var path;
        for (var p = 0; p < paths.getLength(); p++) {
          path = paths.getAt(p);
          for (var i = 0; i < path.getLength(); i++) {
            bounds.extend(path.getAt(i));
          }
        }
        return bounds;
      };
    }
    if (!google.maps.Polygon.prototype.containsLatLng) {
      google.maps.Polygon.prototype.containsLatLng = function (latLng) {
        var bounds = this.getBounds();
        if (bounds !== null && !bounds.contains(latLng)) {
          return false;
        }
        var inPoly = false;
        var numPaths = this.getPaths().getLength();
        for (var p = 0; p < numPaths; p++) {
          var path = this.getPaths().getAt(p);
          var numPoints = path.getLength();
          var j = numPoints - 1;
          for (var i = 0; i < numPoints; i++) {
            var vertex1 = path.getAt(i);
            var vertex2 = path.getAt(j);
            if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng()) {
              if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
                inPoly = !inPoly;
              }
            }
            j = i;
          }
        }
        return inPoly;
      };
    }
    if (!google.maps.Circle.prototype.containsLatLng) {
      google.maps.Circle.prototype.containsLatLng = function (latLng) {
        if (google.maps.geometry) {
          return google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), latLng) <= this.getRadius();
        } else {
          return true;
        }
      };
    }
    google.maps.Rectangle.prototype.containsLatLng = function (latLng) {
      return this.getBounds().contains(latLng);
    };
    google.maps.LatLngBounds.prototype.containsLatLng = function (latLng) {
      return this.contains(latLng);
    };
    google.maps.Marker.prototype.setFences = function (fences) {
      this.fences = fences;
    };
    google.maps.Marker.prototype.addFence = function (fence) {
      this.fences.push(fence);
    };
    google.maps.Marker.prototype.getId = function () {
      return this['__gm_id'];
    };
  }
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement) {
      "use strict";
      if (this == null) {
        throw new TypeError();
      }
      var t = Object(this);
      var len = t.length >>> 0;
      if (len === 0) {
        return -1;
      }
      var n = 0;
      if (arguments.length > 1) {
        n = Number(arguments[1]);
        if (n != n) {
          n = 0;
        } else if (n != 0 && n != Infinity && n != -Infinity) {
          n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
      }
      if (n >= len) {
        return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
        if (k in t && t[k] === searchElement) {
          return k;
        }
      }
      return -1;
    }
  }
  return GMaps;
}));;
(function () {
  var defaultOptions = {
    frameRate: 150,
    animationTime: 400,
    stepSize: 100,
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
    accelerationDelta: 50,
    accelerationMax: 3,
    keyboardSupport: true,
    arrowScroll: 50,
    fixedBackground: true,
    excluded: ''
  };
  var options = defaultOptions;
  var isExcluded = false;
  var isFrame = false;
  var direction = {
    x: 0,
    y: 0
  };
  var initDone = false;
  var root = document.documentElement;
  var activeElement;
  var observer;
  var refreshSize;
  var deltaBuffer = [];
  var deltaBufferTimer;
  var isMac = /^Mac/.test(navigator.platform);
  var key = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    spacebar: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36
  };
  var arrowKeys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  };

  function initTest() {
    if (options.keyboardSupport) {
      addEvent('keydown', keydown);
    }
  }

  function init() {
    if (initDone || !document.body) return;
    initDone = true;
    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight;
    var scrollHeight = body.scrollHeight;
    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
    activeElement = body;
    initTest();
    if (top != self) {
      isFrame = true;
    } else if (isOldSafari && scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {
      var fullPageElem = document.createElement('div');
      fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' + 'top:0; left:0; right:0; height:' +
        root.scrollHeight + 'px';
      document.body.appendChild(fullPageElem);
      var pendingRefresh;
      refreshSize = function () {
        if (pendingRefresh) return;
        pendingRefresh = setTimeout(function () {
          if (isExcluded) return;
          fullPageElem.style.height = '0';
          fullPageElem.style.height = root.scrollHeight + 'px';
          pendingRefresh = null;
        }, 500);
      };
      setTimeout(refreshSize, 10);
      addEvent('resize', refreshSize);
      var config = {
        attributes: true,
        childList: true,
        characterData: false
      };
      observer = new MutationObserver(refreshSize);
      observer.observe(body, config);
      if (root.offsetHeight <= windowHeight) {
        var clearfix = document.createElement('div');
        clearfix.style.clear = 'both';
        body.appendChild(clearfix);
      }
    }
    if (!options.fixedBackground && !isExcluded) {
      body.style.backgroundAttachment = 'scroll';
      html.style.backgroundAttachment = 'scroll';
    }
  }

  function cleanup() {
    observer && observer.disconnect();
    removeEvent(wheelEvent, wheel);
    removeEvent('mousedown', mousedown);
    removeEvent('keydown', keydown);
    removeEvent('resize', refreshSize);
    removeEvent('load', init);
  }
  var que = [];
  var pending = false;
  var lastScroll = Date.now();

  function scrollArray(elem, left, top) {
    directionCheck(left, top);
    if (options.accelerationMax != 1) {
      var now = Date.now();
      var elapsed = now - lastScroll;
      if (elapsed < options.accelerationDelta) {
        var factor = (1 + (50 / elapsed)) / 2;
        if (factor > 1) {
          factor = Math.min(factor, options.accelerationMax);
          left *= factor;
          top *= factor;
        }
      }
      lastScroll = Date.now();
    }
    que.push({
      x: left,
      y: top,
      lastX: (left < 0) ? 0.99 : -0.99,
      lastY: (top < 0) ? 0.99 : -0.99,
      start: Date.now()
    });
    if (pending) {
      return;
    }
    var scrollRoot = getScrollRoot();
    var isWindowScroll = (elem === scrollRoot || elem === document.body);
    if (elem.$scrollBehavior == null && isScrollBehaviorSmooth(elem)) {
      elem.$scrollBehavior = elem.style.scrollBehavior;
      elem.style.scrollBehavior = 'auto';
    }
    var step = function (time) {
      var now = Date.now();
      var scrollX = 0;
      var scrollY = 0;
      for (var i = 0; i < que.length; i++) {
        var item = que[i];
        var elapsed = now - item.start;
        var finished = (elapsed >= options.animationTime);
        var position = (finished) ? 1 : elapsed / options.animationTime;
        if (options.pulseAlgorithm) {
          position = pulse(position);
        }
        var x = (item.x * position - item.lastX) >> 0;
        var y = (item.y * position - item.lastY) >> 0;
        scrollX += x;
        scrollY += y;
        item.lastX += x;
        item.lastY += y;
        if (finished) {
          que.splice(i, 1);
          i--;
        }
      }
      if (isWindowScroll) {
        window.scrollBy(scrollX, scrollY);
      } else {
        if (scrollX) elem.scrollLeft += scrollX;
        if (scrollY) elem.scrollTop += scrollY;
      }
      if (!left && !top) {
        que = [];
      }
      if (que.length) {
        requestFrame(step, elem, (1000 / options.frameRate + 1));
      } else {
        pending = false;
        if (elem.$scrollBehavior != null) {
          elem.style.scrollBehavior = elem.$scrollBehavior;
          elem.$scrollBehavior = null;
        }
      }
    };
    requestFrame(step, elem, 0);
    pending = true;
  }

  function wheel(event) {
    if (!initDone) {
      init();
    }
    var target = event.target;
    if (event.defaultPrevented || event.ctrlKey) {
      return true;
    }
    if (isNodeName(activeElement, 'embed') || (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) || isNodeName(activeElement, 'object') || target.shadowRoot) {
      return true;
    }
    var deltaX = -event.wheelDeltaX || event.deltaX || 0;
    var deltaY = -event.wheelDeltaY || event.deltaY || 0;
    if (isMac) {
      if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
        deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
      }
      if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
        deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
      }
    }
    if (!deltaX && !deltaY) {
      deltaY = -event.wheelDelta || 0;
    }
    if (event.deltaMode === 1) {
      deltaX *= 40;
      deltaY *= 40;
    }
    var overflowing = overflowingAncestor(target);
    if (!overflowing) {
      if (isFrame && isChrome) {
        Object.defineProperty(event, "target", {
          value: window.frameElement
        });
        return parent.wheel(event);
      }
      return true;
    }
    if (isTouchpad(deltaY)) {
      return true;
    }
    if (Math.abs(deltaX) > 1.2) {
      deltaX *= options.stepSize / 120;
    }
    if (Math.abs(deltaY) > 1.2) {
      deltaY *= options.stepSize / 120;
    }
    scrollArray(overflowing, deltaX, deltaY);
    event.preventDefault();
    scheduleClearCache();
  }

  function keydown(event) {
    var target = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey || (event.shiftKey && event.keyCode !== key.spacebar);
    if (!document.body.contains(activeElement)) {
      activeElement = document.activeElement;
    }
    var inputNodeNames = /^(textarea|select|embed|object)$/i;
    var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (event.defaultPrevented || inputNodeNames.test(target.nodeName) || isNodeName(target, 'input') && !buttonTypes.test(target.type) || isNodeName(activeElement, 'video') || isInsideYoutubeVideo(event) || target.isContentEditable || modifier) {
      return true;
    }
    if ((isNodeName(target, 'button') || isNodeName(target, 'input') && buttonTypes.test(target.type)) && event.keyCode === key.spacebar) {
      return true;
    }
    if (isNodeName(target, 'input') && target.type == 'radio' && arrowKeys[event.keyCode]) {
      return true;
    }
    var shift, x = 0,
      y = 0;
    var overflowing = overflowingAncestor(activeElement);
    if (!overflowing) {
      return (isFrame && isChrome) ? parent.keydown(event) : true;
    }
    var clientHeight = overflowing.clientHeight;
    if (overflowing == document.body) {
      clientHeight = window.innerHeight;
    }
    switch (event.keyCode) {
      case key.up:
        y = -options.arrowScroll;
        break;
      case key.down:
        y = options.arrowScroll;
        break;
      case key.spacebar:
        shift = event.shiftKey ? 1 : -1;
        y = -shift * clientHeight * 0.9;
        break;
      case key.pageup:
        y = -clientHeight * 0.9;
        break;
      case key.pagedown:
        y = clientHeight * 0.9;
        break;
      case key.home:
        if (overflowing == document.body && document.scrollingElement)
          overflowing = document.scrollingElement;
        y = -overflowing.scrollTop;
        break;
      case key.end:
        var scroll = overflowing.scrollHeight - overflowing.scrollTop;
        var scrollRemaining = scroll - clientHeight;
        y = (scrollRemaining > 0) ? scrollRemaining + 10 : 0;
        break;
      case key.left:
        x = -options.arrowScroll;
        break;
      case key.right:
        x = options.arrowScroll;
        break;
      default:
        return true;
    }
    scrollArray(overflowing, x, y);
    event.preventDefault();
    scheduleClearCache();
  }

  function mousedown(event) {
    activeElement = event.target;
  }
  var uniqueID = (function () {
    var i = 0;
    return function (el) {
      return el.uniqueID || (el.uniqueID = i++);
    };
  })();
  var cacheX = {};
  var cacheY = {};
  var clearCacheTimer;
  var smoothBehaviorForElement = {};

  function scheduleClearCache() {
    clearTimeout(clearCacheTimer);
    clearCacheTimer = setInterval(function () {
      cacheX = cacheY = smoothBehaviorForElement = {};
    }, 1 * 1000);
  }

  function setCache(elems, overflowing, x) {
    var cache = x ? cacheX : cacheY;
    for (var i = elems.length; i--;)
      cache[uniqueID(elems[i])] = overflowing;
    return overflowing;
  }

  function getCache(el, x) {
    return (x ? cacheX : cacheY)[uniqueID(el)];
  }

  function overflowingAncestor(el) {
    var elems = [];
    var body = document.body;
    var rootScrollHeight = root.scrollHeight;
    do {
      var cached = getCache(el, false);
      if (cached) {
        return setCache(elems, cached);
      }
      elems.push(el);
      if (rootScrollHeight === el.scrollHeight) {
        var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
        var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
        if (isFrame && isContentOverflowing(root) || !isFrame && isOverflowCSS) {
          return setCache(elems, getScrollRoot());
        }
      } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
        return setCache(elems, el);
      }
    } while ((el = el.parentElement));
  }

  function isContentOverflowing(el) {
    return (el.clientHeight + 10 < el.scrollHeight);
  }

  function overflowNotHidden(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow !== 'hidden');
  }

  function overflowAutoOrScroll(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow === 'scroll' || overflow === 'auto');
  }

  function isScrollBehaviorSmooth(el) {
    var id = uniqueID(el);
    if (smoothBehaviorForElement[id] == null) {
      var scrollBehavior = getComputedStyle(el, '')['scroll-behavior'];
      smoothBehaviorForElement[id] = ('smooth' == scrollBehavior);
    }
    return smoothBehaviorForElement[id];
  }

  function addEvent(type, fn, arg) {
    window.addEventListener(type, fn, arg || false);
  }

  function removeEvent(type, fn, arg) {
    window.removeEventListener(type, fn, arg || false);
  }

  function isNodeName(el, tag) {
    return el && (el.nodeName || '').toLowerCase() === tag.toLowerCase();
  }

  function directionCheck(x, y) {
    x = (x > 0) ? 1 : -1;
    y = (y > 0) ? 1 : -1;
    if (direction.x !== x || direction.y !== y) {
      direction.x = x;
      direction.y = y;
      que = [];
      lastScroll = 0;
    }
  }
  if (window.localStorage && localStorage.SS_deltaBuffer) {
    try {
      deltaBuffer = localStorage.SS_deltaBuffer.split(',');
    } catch (e) {}
  }

  function isTouchpad(deltaY) {
    if (!deltaY) return;
    if (!deltaBuffer.length) {
      deltaBuffer = [deltaY, deltaY, deltaY];
    }
    deltaY = Math.abs(deltaY);
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    deltaBufferTimer = setTimeout(function () {
      try {
        localStorage.SS_deltaBuffer = deltaBuffer.join(',');
      } catch (e) {}
    }, 1000);
    var dpiScaledWheelDelta = deltaY > 120 && allDeltasDivisableBy(deltaY);
    return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100) && !dpiScaledWheelDelta;
  }

  function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
  }

  function allDeltasDivisableBy(divisor) {
    return (isDivisible(deltaBuffer[0], divisor) && isDivisible(deltaBuffer[1], divisor) && isDivisible(deltaBuffer[2], divisor));
  }

  function isInsideYoutubeVideo(event) {
    var elem = event.target;
    var isControl = false;
    if (document.URL.indexOf('www.youtube.com/watch') != -1) {
      do {
        isControl = (elem.classList && elem.classList.contains('html5-video-controls'));
        if (isControl) break;
      } while ((elem = elem.parentNode));
    }
    return isControl;
  }
  var requestFrame = (function () {
    return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback, element, delay) {
      window.setTimeout(callback, delay || (1000 / 60));
    });
  })();
  var MutationObserver = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
  var getScrollRoot = (function () {
    var SCROLL_ROOT = document.scrollingElement;
    return function () {
      if (!SCROLL_ROOT) {
        var dummy = document.createElement('div');
        dummy.style.cssText = 'height:10000px;width:1px;';
        document.body.appendChild(dummy);
        var bodyScrollTop = document.body.scrollTop;
        var docElScrollTop = document.documentElement.scrollTop;
        window.scrollBy(0, 3);
        if (document.body.scrollTop != bodyScrollTop)
          (SCROLL_ROOT = document.body);
        else
          (SCROLL_ROOT = document.documentElement);
        window.scrollBy(0, -3);
        document.body.removeChild(dummy);
      }
      return SCROLL_ROOT;
    };
  })();

  function pulse_(x) {
    var val, start, expx;
    x = x * options.pulseScale;
    if (x < 1) {
      val = x - (1 - Math.exp(-x));
    } else {
      start = Math.exp(-1);
      x -= 1;
      expx = 1 - Math.exp(-x);
      val = start + (expx * (1 - start));
    }
    return val * options.pulseNormalize;
  }

  function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;
    if (options.pulseNormalize == 1) {
      options.pulseNormalize /= pulse_(1);
    }
    return pulse_(x);
  }
  var userAgent = window.navigator.userAgent;
  var isEdge = /Edge/.test(userAgent);
  var isChrome = /chrome/i.test(userAgent) && !isEdge;
  var isSafari = /safari/i.test(userAgent) && !isEdge;
  var isMobile = /mobile/i.test(userAgent);
  var isIEWin7 = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
  var isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
  var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;
  var supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function () {
        supportsPassive = true;
      }
    }));
  } catch (e) {}
  var wheelOpt = supportsPassive ? {
    passive: false
  } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
  if (wheelEvent && isEnabledForBrowser) {
    addEvent(wheelEvent, wheel, wheelOpt);
    addEvent('mousedown', mousedown);
    addEvent('load', init);
  }

  function SmoothScroll(optionsToSet) {
    for (var key in optionsToSet)
      if (defaultOptions.hasOwnProperty(key))
        options[key] = optionsToSet[key];
  }
  SmoothScroll.destroy = cleanup;
  if (window.SmoothScrollOptions)
    SmoothScroll(window.SmoothScrollOptions);
  if (typeof define === 'function' && define.amd)
    define(function () {
      return SmoothScroll;
    });
  else if ('object' == typeof exports)
    module.exports = SmoothScroll;
  else
    window.SmoothScroll = SmoothScroll;
})();;
! function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
  "use strict";
  var b = window.Slick || {};
  b = function () {
    function c(c, d) {
      var f, e = this;
      e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (b, c) {
          return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, e.initials = {
        animating: !1,
        dragging: !1,
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
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
    }
    var b = 0;
    return c
  }(), b.prototype.activateADA = function () {
    var a = this;
    a.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    })
  }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
    var e = this;
    if ("boolean" == typeof c) d = c, c = null;
    else if (0 > c || c >= e.slideCount) return !1;
    e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b)
    }), e.$slidesCache = e.$slides, e.reinit()
  }, b.prototype.animateHeight = function () {
    var a = this;
    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.animate({
        height: b
      }, a.options.speed)
    }
  }, b.prototype.animateSlide = function (b, c) {
    var d = {},
      e = this;
    e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
      left: b
    }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
      top: b
    }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
      animStart: e.currentLeft
    }).animate({
      animStart: b
    }, {
      duration: e.options.speed,
      easing: e.options.easing,
      step: function (a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
      },
      complete: function () {
        c && c.call()
      }
    })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
      e.disableTransition(), c.call()
    }, e.options.speed))
  }, b.prototype.getNavTarget = function () {
    var b = this,
      c = b.options.asNavFor;
    return c && null !== c && (c = a(c).not(b.$slider)), c
  }, b.prototype.asNavFor = function (b) {
    var c = this,
      d = c.getNavTarget();
    null !== d && "object" == typeof d && d.each(function () {
      var c = a(this).slick("getSlick");
      c.unslicked || c.slideHandler(b, !0)
    })
  }, b.prototype.applyTransition = function (a) {
    var b = this,
      c = {};
    b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
  }, b.prototype.autoPlay = function () {
    var a = this;
    a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
  }, b.prototype.autoPlayClear = function () {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer)
  }, b.prototype.autoPlayIterator = function () {
    var a = this,
      b = a.currentSlide + a.options.slidesToScroll;
    a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
  }, b.prototype.buildArrows = function () {
    var b = this;
    b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }))
  }, b.prototype.buildDots = function () {
    var c, d, b = this;
    if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
      b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
    }
  }, b.prototype.buildOut = function () {
    var b = this;
    b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
    }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
  }, b.prototype.buildRows = function () {
    var b, c, d, e, f, g, h, a = this;
    if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");
        for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");
          for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);
            g.get(k) && j.appendChild(g.get(k))
          }
          i.appendChild(j)
        }
        e.appendChild(i)
      }
      a.$slider.empty().append(e), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, b.prototype.checkResponsive = function (b, c) {
    var e, f, g, d = this,
      h = !1,
      i = d.$slider.width(),
      j = window.innerWidth || a(window).width();
    if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
      f = null;
      for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
      null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
    }
  }, b.prototype.changeSlide = function (b, c) {
    var f, g, h, d = this,
      e = a(b.currentTarget);
    switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
      case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
        break;
      case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
        break;
      case "index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
        d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
        break;
      default:
        return
    }
  }, b.prototype.checkNavigable = function (a) {
    var c, d, b = this;
    if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
    else
      for (var e in c) {
        if (a < c[e]) {
          a = d;
          break
        }
        d = c[e]
      }
    return a
  }, b.prototype.cleanUpEvents = function () {
    var b = this;
    b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
  }, b.prototype.cleanUpSlideEvents = function () {
    var b = this;
    b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
  }, b.prototype.cleanUpRows = function () {
    var b, a = this;
    a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
  }, b.prototype.clickHandler = function (a) {
    var b = this;
    b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
  }, b.prototype.destroy = function (b) {
    var c = this;
    c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      a(this).attr("style", a(this).data("originalStyling"))
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
  }, b.prototype.disableTransition = function (a) {
    var b = this,
      c = {};
    c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
  }, b.prototype.fadeSlide = function (a, b) {
    var c = this;
    c.cssTransitions === !1 ? (c.$slides.eq(a).css({
      zIndex: c.options.zIndex
    }), c.$slides.eq(a).animate({
      opacity: 1
    }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
      opacity: 1,
      zIndex: c.options.zIndex
    }), b && setTimeout(function () {
      c.disableTransition(a), b.call()
    }, c.options.speed))
  }, b.prototype.fadeSlideOut = function (a) {
    var b = this;
    b.cssTransitions === !1 ? b.$slides.eq(a).animate({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }))
  }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
    var b = this;
    null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
  }, b.prototype.focusHandler = function () {
    var b = this;
    b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
      c.stopImmediatePropagation();
      var d = a(this);
      setTimeout(function () {
        b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
      }, 0)
    })
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
    var a = this;
    return a.currentSlide
  }, b.prototype.getDotCount = function () {
    var a = this,
      b = 0,
      c = 0,
      d = 0;
    if (a.options.infinite === !0)
      for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    else if (a.options.centerMode === !0) d = a.slideCount;
    else if (a.options.asNavFor)
      for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
    return d - 1
  }, b.prototype.getLeft = function (a) {
    var c, d, f, b = this,
      e = 0;
    return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
  }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
    var b = this;
    return b.options[a]
  }, b.prototype.getNavigableIndexes = function () {
    var e, a = this,
      b = 0,
      c = 0,
      d = [];
    for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    return d
  }, b.prototype.getSlick = function () {
    return this
  }, b.prototype.getSlideCount = function () {
    var c, d, e, b = this;
    return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
  }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
    var c = this;
    c.changeSlide({
      data: {
        message: "index",
        index: parseInt(a)
      }
    }, b)
  }, b.prototype.init = function (b) {
    var c = this;
    a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
  }, b.prototype.initADA = function () {
    var b = this;
    b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
      a(this).attr({
        role: "option",
        "aria-describedby": "slick-slide" + b.instanceUid + c
      })
    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
      a(this).attr({
        role: "presentation",
        "aria-selected": "false",
        "aria-controls": "navigation" + b.instanceUid + c,
        id: "slick-slide" + b.instanceUid + c
      })
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
  }, b.prototype.initArrowEvents = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, a.changeSlide))
  }, b.prototype.initDotEvents = function () {
    var b = this;
    b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
      message: "index"
    }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
  }, b.prototype.initSlideEvents = function () {
    var b = this;
    b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
  }, b.prototype.initializeEvents = function () {
    var b = this;
    b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
  }, b.prototype.initUI = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
  }, b.prototype.keyHandler = function (a) {
    var b = this;
    a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
      data: {
        message: b.options.rtl === !0 ? "next" : "previous"
      }
    }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
      data: {
        message: b.options.rtl === !0 ? "previous" : "next"
      }
    }))
  }, b.prototype.lazyLoad = function () {
    function g(c) {
      a("img[data-lazy]", c).each(function () {
        var c = a(this),
          d = a(this).attr("data-lazy"),
          e = document.createElement("img");
        e.onload = function () {
          c.animate({
            opacity: 0
          }, 100, function () {
            c.attr("src", d).animate({
              opacity: 1
            }, 200, function () {
              c.removeAttr("data-lazy").removeClass("slick-loading")
            }), b.$slider.trigger("lazyLoaded", [b, c, d])
          })
        }, e.onerror = function () {
          c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
        }, e.src = d
      })
    }
    var c, d, e, f, b = this;
    b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
  }, b.prototype.loadSlider = function () {
    var a = this;
    a.setPosition(), a.$slideTrack.css({
      opacity: 1
    }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
  }, b.prototype.next = b.prototype.slickNext = function () {
    var a = this;
    a.changeSlide({
      data: {
        message: "next"
      }
    })
  }, b.prototype.orientationChange = function () {
    var a = this;
    a.checkResponsive(), a.setPosition()
  }, b.prototype.pause = b.prototype.slickPause = function () {
    var a = this;
    a.autoPlayClear(), a.paused = !0
  }, b.prototype.play = b.prototype.slickPlay = function () {
    var a = this;
    a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
  }, b.prototype.postSlide = function (a) {
    var b = this;
    b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
  }, b.prototype.prev = b.prototype.slickPrev = function () {
    var a = this;
    a.changeSlide({
      data: {
        message: "previous"
      }
    })
  }, b.prototype.preventDefault = function (a) {
    a.preventDefault()
  }, b.prototype.progressiveLazyLoad = function (b) {
    b = b || 1;
    var e, f, g, c = this,
      d = a("img[data-lazy]", c.$slider);
    d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
      e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
    }, g.onerror = function () {
      3 > b ? setTimeout(function () {
        c.progressiveLazyLoad(b + 1)
      }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
    }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
  }, b.prototype.refresh = function (b) {
    var d, e, c = this;
    e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
      currentSlide: d
    }), c.init(), b || c.changeSlide({
      data: {
        message: "index",
        index: d
      }
    }, !1)
  }, b.prototype.registerBreakpoints = function () {
    var c, d, e, b = this,
      f = b.options.responsive || null;
    if ("array" === a.type(f) && f.length) {
      b.respondTo = b.options.respondTo || "window";
      for (c in f)
        if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
          for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
          b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
        } b.breakpoints.sort(function (a, c) {
        return b.options.mobileFirst ? a - c : c - a
      })
    }
  }, b.prototype.reinit = function () {
    var b = this;
    b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
  }, b.prototype.resize = function () {
    var b = this;
    a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
    }, 50))
  }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
    var d = this;
    return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
  }, b.prototype.setCSS = function (a) {
    var d, e, b = this,
      c = {};
    b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
  }, b.prototype.setDimensions = function () {
    var a = this;
    a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
      padding: "0px " + a.options.centerPadding
    }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
      padding: a.options.centerPadding + " 0px"
    })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
    var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
    a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
  }, b.prototype.setFade = function () {
    var c, b = this;
    b.$slides.each(function (d, e) {
      c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
        position: "relative",
        right: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      }) : a(e).css({
        position: "relative",
        left: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      })
    }), b.$slides.eq(b.currentSlide).css({
      zIndex: b.options.zIndex - 1,
      opacity: 1
    })
  }, b.prototype.setHeight = function () {
    var a = this;
    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.css("height", b)
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function () {
    var c, d, e, f, h, b = this,
      g = !1;
    if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
    else if ("multiple" === h) a.each(e, function (a, c) {
      b.options[a] = c
    });
    else if ("responsive" === h)
      for (d in f)
        if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
        else {
          for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
          b.options.responsive.push(f[d])
        } g && (b.unload(), b.reinit())
  }, b.prototype.setPosition = function () {
    var a = this;
    a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
  }, b.prototype.setProps = function () {
    var a = this,
      b = document.body.style;
    a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
  }, b.prototype.setSlideClasses = function (a) {
    var c, d, e, f, b = this;
    d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
  }, b.prototype.setupInfinite = function () {
    var c, d, e, b = this;
    if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        a(this).attr("id", "")
      })
    }
  }, b.prototype.interrupt = function (a) {
    var b = this;
    a || b.autoPlay(), b.interrupted = a
  }, b.prototype.selectHandler = function (b) {
    var c = this,
      d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
      e = parseInt(d.attr("data-slick-index"));
    return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
  }, b.prototype.slideHandler = function (a, b, c) {
    var d, e, f, g, j, h = null,
      i = this;
    return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d)
    }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d)
    }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
      i.postSlide(e)
    })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function () {
      i.postSlide(e)
    }) : i.postSlide(e))))
  }, b.prototype.startLoad = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
  }, b.prototype.swipeDirection = function () {
    var a, b, c, d, e = this;
    return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
  }, b.prototype.swipeEnd = function (a) {
    var c, d, b = this;
    if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
    if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
      switch (d = b.swipeDirection()) {
        case "left":
        case "down":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
          break;
        case "right":
        case "up":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
      }
      "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
  }, b.prototype.swipeHandler = function (a) {
    var b = this;
    if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
      case "start":
        b.swipeStart(a);
        break;
      case "move":
        b.swipeMove(a);
        break;
      case "end":
        b.swipeEnd(a)
    }
  }, b.prototype.swipeMove = function (a) {
    var d, e, f, g, h, b = this;
    return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
  }, b.prototype.swipeStart = function (a) {
    var c, b = this;
    return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
    var a = this;
    null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
  }, b.prototype.unload = function () {
    var b = this;
    a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, b.prototype.unslick = function (a) {
    var b = this;
    b.$slider.trigger("unslick", [b, a]), b.destroy()
  }, b.prototype.updateArrows = function () {
    var b, a = this;
    b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, b.prototype.updateDots = function () {
    var a = this;
    null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
  }, b.prototype.visibility = function () {
    var a = this;
    a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
  }, a.fn.slick = function () {
    var f, g, a = this,
      c = arguments[0],
      d = Array.prototype.slice.call(arguments, 1),
      e = a.length;
    for (f = 0; e > f; f++)
      if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
    return a
  }
});;
var _extends = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
    }
    return t
  },
  _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
! function (t, e) {
  "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.LazyLoad = e()
}(this, function () {
  "use strict";

  function t(t, e, n) {
    var o = e._settings;
    !n && i(t) || (C(o.callback_enter, t), R.indexOf(t.tagName) > -1 && (N(t, e), I(t, o.class_loading)), E(t, e), a(t), C(o.callback_set, t))
  }
  var e = {
      elements_selector: "img",
      container: document,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      load_delay: 0,
      callback_load: null,
      callback_error: null,
      callback_set: null,
      callback_enter: null,
      callback_finish: null,
      to_webp: !1
    },
    n = function (t) {
      return _extends({}, e, t)
    },
    o = function (t, e) {
      return t.getAttribute("data-" + e)
    },
    r = function (t, e, n) {
      var o = "data-" + e;
      null !== n ? t.setAttribute(o, n) : t.removeAttribute(o)
    },
    a = function (t) {
      return r(t, "was-processed", "true")
    },
    i = function (t) {
      return "true" === o(t, "was-processed")
    },
    s = function (t, e) {
      return r(t, "ll-timeout", e)
    },
    c = function (t) {
      return o(t, "ll-timeout")
    },
    l = function (t) {
      return t.filter(function (t) {
        return !i(t)
      })
    },
    u = function (t, e) {
      return t.filter(function (t) {
        return t !== e
      })
    },
    d = function (t, e) {
      var n, o = new t(e);
      try {
        n = new CustomEvent("LazyLoad::Initialized", {
          detail: {
            instance: o
          }
        })
      } catch (t) {
        (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
          instance: o
        })
      }
      window.dispatchEvent(n)
    },
    f = function (t, e) {
      return e ? t.replace(/\.(jpe?g|png)/gi, ".webp") : t
    },
    _ = "undefined" != typeof window,
    v = _ && !("onscroll" in window) || /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
    g = _ && "IntersectionObserver" in window,
    h = _ && "classList" in document.createElement("p"),
    b = _ && function () {
      var t = document.createElement("canvas");
      return !(!t.getContext || !t.getContext("2d")) && 0 === t.toDataURL("image/webp").indexOf("data:image/webp")
    }(),
    m = function (t, e, n, r) {
      for (var a, i = 0; a = t.children[i]; i += 1)
        if ("SOURCE" === a.tagName) {
          var s = o(a, n);
          p(a, e, s, r)
        }
    },
    p = function (t, e, n, o) {
      n && t.setAttribute(e, f(n, o))
    },
    y = function (t, e) {
      var n = b && e.to_webp,
        r = o(t, e.data_src),
        a = o(t, e.data_bg);
      if (r) {
        var i = f(r, n);
        t.style.backgroundImage = 'url("' + i + '")'
      }
      if (a) {
        var s = f(a, n);
        t.style.backgroundImage = s
      }
    },
    w = {
      IMG: function (t, e) {
        var n = b && e.to_webp,
          r = e.data_srcset,
          a = t.parentNode;
        a && "PICTURE" === a.tagName && m(a, "srcset", r, n);
        var i = o(t, e.data_sizes);
        p(t, "sizes", i);
        var s = o(t, r);
        p(t, "srcset", s, n);
        var c = o(t, e.data_src);
        p(t, "src", c, n)
      },
      IFRAME: function (t, e) {
        var n = o(t, e.data_src);
        p(t, "src", n)
      },
      VIDEO: function (t, e) {
        var n = e.data_src,
          r = o(t, n);
        m(t, "src", n), p(t, "src", r), t.load()
      }
    },
    E = function (t, e) {
      var n = e._settings,
        o = t.tagName,
        r = w[o];
      if (r) return r(t, n), e._updateLoadingCount(1), void(e._elements = u(e._elements, t));
      y(t, n)
    },
    I = function (t, e) {
      h ? t.classList.add(e) : t.className += (t.className ? " " : "") + e
    },
    L = function (t, e) {
      h ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
    },
    C = function (t, e) {
      t && t(e)
    },
    O = function (t, e, n) {
      t.addEventListener(e, n)
    },
    k = function (t, e, n) {
      t.removeEventListener(e, n)
    },
    x = function (t, e, n) {
      O(t, "load", e), O(t, "loadeddata", e), O(t, "error", n)
    },
    A = function (t, e, n) {
      k(t, "load", e), k(t, "loadeddata", e), k(t, "error", n)
    },
    z = function (t, e, n) {
      var o = n._settings,
        r = e ? o.class_loaded : o.class_error,
        a = e ? o.callback_load : o.callback_error,
        i = t.target;
      L(i, o.class_loading), I(i, r), C(a, i), n._updateLoadingCount(-1)
    },
    N = function (t, e) {
      var n = function n(r) {
          z(r, !0, e), A(t, n, o)
        },
        o = function o(r) {
          z(r, !1, e), A(t, n, o)
        };
      x(t, n, o)
    },
    R = ["IMG", "IFRAME", "VIDEO"],
    S = function (e, n, o) {
      t(e, o), n.unobserve(e)
    },
    M = function (t) {
      var e = c(t);
      e && (clearTimeout(e), s(t, null))
    },
    j = function (t, e, n) {
      var o = n._settings.load_delay,
        r = c(t);
      r || (r = setTimeout(function () {
        S(t, e, n), M(t)
      }, o), s(t, r))
    },
    D = function (t) {
      return t.isIntersecting || t.intersectionRatio > 0
    },
    T = function (t) {
      return {
        root: t.container === document ? null : t.container,
        rootMargin: t.thresholds || t.threshold + "px"
      }
    },
    U = function (t, e) {
      this._settings = n(t), this._setObserver(), this._loadingCount = 0, this.update(e)
    };
  return U.prototype = {
    _manageIntersection: function (t) {
      var e = this._observer,
        n = this._settings.load_delay,
        o = t.target;
      n ? D(t) ? j(o, e, this) : M(o) : D(t) && S(o, e, this)
    },
    _onIntersection: function (t) {
      t.forEach(this._manageIntersection.bind(this))
    },
    _setObserver: function () {
      g && (this._observer = new IntersectionObserver(this._onIntersection.bind(this), T(this._settings)))
    },
    _updateLoadingCount: function (t) {
      this._loadingCount += t, 0 === this._elements.length && 0 === this._loadingCount && C(this._settings.callback_finish)
    },
    update: function (t) {
      var e = this,
        n = this._settings,
        o = t || n.container.querySelectorAll(n.elements_selector);
      this._elements = l(Array.prototype.slice.call(o)), !v && this._observer ? this._elements.forEach(function (t) {
        e._observer.observe(t)
      }) : this.loadAll()
    },
    destroy: function () {
      var t = this;
      this._observer && (this._elements.forEach(function (e) {
        t._observer.unobserve(e)
      }), this._observer = null), this._elements = null, this._settings = null
    },
    load: function (e, n) {
      t(e, this, n)
    },
    loadAll: function () {
      var t = this;
      this._elements.forEach(function (e) {
        t.load(e)
      })
    }
  }, _ && function (t, e) {
    if (e)
      if (e.length)
        for (var n, o = 0; n = e[o]; o += 1) d(t, n);
      else d(t, e)
  }(U, window.lazyLoadOptions), U
});;
window.$ = jQuery;
var win = $(window);
var doc = $(document);
var urlHash = window.location.hash;
var animateOnLoad = function () {
  $('.animate-onload').each(function () {
    var wantProgress = $(this).hasClass('progress');
    var elements = $(this).find('.animate');
    elements.each(function (i) {
      var elem = $(this);
      var effect = elem.data('effect');
      if (effect == 'odometer') {
        setTimeout(function () {
          elem.each(function () {
            var t = $(this);
            var number = t.data('number');
            t.html(number);
          });
        }, 200);
      } else {
        if (wantProgress) {
          setTimeout(function () {
            elem.addClass('animated ' + effect);
          }, i * 300);
        } else {
          elem.addClass('animated ' + effect);
        }
      }
    });
  });
}
window.odometerOptions = {
  format: 'd'
}
var animateOnAppear = function () {
  $('.animate-onappear').each(function () {
    $(this).appear();
    var wantProgress = $(this).hasClass('progress');
    var elements = $(this).find('.animate');
    $(this).on('appear', function (event, $all_appeared_elements) {
      elements.each(function (i) {
        var elem = $(this);
        var effect = elem.data('effect');
        if (effect == 'odometer') {
          setTimeout(function () {
            elem.each(function () {
              var t = $(this);
              var number = t.data('number');
              t.html(number);
            });
          }, 200);
        } else {
          if (wantProgress) {
            setTimeout(function () {
              elem.addClass('animated ' + effect);
            }, i * 300);
          } else {
            elem.addClass('animated ' + effect);
          }
        }
      });
    });
  });
}
var callLightbox = function () {
  var fancyboxMargin = [30, 0, 30, 0];
  $('.lightbox-inline').fancybox({
    closeBtn: false,
    maxWidth: 900,
    padding: 0,
    margin: fancyboxMargin,
    helpers: {
      overlay: {
        css: {
          'background': 'rgba(5, 29, 56, 0.15)'
        },
        locked: false
      }
    }
  });
  $('.lightbox-video').fancybox({
    closeBtn: false,
    type: 'iframe',
    aspectRatio: 1,
    padding: 0,
    width: 1024,
    height: 576,
    margin: fancyboxMargin,
    helpers: {
      media: true,
      overlay: {
        css: {
          'background': 'rgba(5, 29, 56, 0.15)'
        },
        locked: false
      }
    }
  });
  $('.lightbox-iframe').fancybox({
    closeBtn: false,
    width: 1400,
    type: 'iframe',
    padding: 0,
    margin: fancyboxMargin,
    helpers: {
      overlay: {
        css: {
          'background': 'rgba(5, 29, 56, 0.15)'
        },
        locked: false
      }
    },
    beforeShow: function () {
      var hash = $(this.element).data("hash");
      if (hash) {
        console.log(hash);
        window.location.hash = $(this.element).data("hash");
      }
    },
    afterClose: function () {
      history.replaceState(null, null, ' ');
    }
  });
  if (urlHash) {
    var linkToClick = $('a[href$="' + urlHash.replace('#', '') + '/"]');
    if (linkToClick.length > 0) {
      linkToClick.click();
    }
  }
}
doc.ready(function () {
  animateOnLoad();
  animateOnAppear();
  var body = $('body');
  var y = win.scrollTop();
  if (y > 0) {
    body.addClass('fixed');
  } else {
    body.removeClass('fixed');
  }
  win.bind('scroll', function () {
    var y = $(this).scrollTop();
    if (y > 0) {
      body.addClass('fixed');
    } else {
      body.removeClass('fixed');
    }
  });
  $('.window-open').on('click', function (e) {
    e.preventDefault();
    window.open($(this).attr('href'), 'sharer', 'width=660,height=400');
  });
  $('.entry-content').fitVids();
  $('a.scrollto, .scrollto a').on('click', function (e) {
    if (this.hash.substr(1) != '' && $('#' + this.hash.substr(1)).length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $('#' + this.hash.substr(1)).offset().top - 70
      }, 600);
    }
  });
  $('.faq-row').each(function () {
    var row = $(this);
    var head = row.find('.head');
    var body = row.find('.body');
    head.on('click', function () {
      if (!row.hasClass('opened')) {
        row.parents('.faqs-cols').find('.faq-row').removeClass('opened');
        row.addClass('opened');
        $('html, body').animate({
          scrollTop: row.offset().top - $('#header').outerHeight()
        }, 600);
      } else {
        row.removeClass('opened');
      }
    })
  });
  $('.resources-row').each(function () {
    var row = $(this);
    var head = row.find('.head');
    var body = row.find('.body');
    head.on('click', function () {
      if (!row.hasClass('opened')) {
        row.parents('.resources-cols').find('.resources-row').removeClass('opened');
        row.addClass('opened');
        $('html, body').animate({
          scrollTop: row.offset().top - $('#header').outerHeight()
        }, 600);
      } else {
        row.removeClass('opened');
      }
    })
  });
  callLightbox();
  $('.custom-dropdown').each(function () {
    var dropdown = $(this);
    var value = dropdown.find('.dropdown-value');
    var values = dropdown.find('.dropdown-values');
    var hasJS = dropdown.hasClass('with-js');
    value.on('click', function (e) {
      e.stopPropagation();
      dropdown.toggleClass('active');
    });
    values.on('click', function (e) {
      e.stopPropagation();
    });
    if (hasJS) {
      values.find('a').on('click', function (e) {
        e.stopPropagation();
        var parent = $(this).parent();
        var index = parent.index();
        $('.custom-dropdown-row').hide();
        $('.custom-dropdown-row:eq(' + index + ')').fadeIn();
        value.find('strong').text($(this).text());
        dropdown.removeClass('active');
        $('.custom-dropdown-row:eq(' + index + ')').find('.alm-load-more-btn').click();
      });
    }
  });
  $('body, html').on('click', function () {
    $('.custom-dropdown').removeClass('active');
  });
  $('.tab-nav-wrap').each(function () {
    var wrap = $(this);
    var nav = wrap.find('.tab-nav');
    var rows = wrap.find('.tab-rows');
    nav.find('a').on('click', function () {
      var li = $(this).parent();
      if (!li.hasClass('selected')) {
        var index = li.index();
        li.siblings().removeClass('selected');
        li.addClass('selected');
        rows.find('.tab-row').hide();
        rows.find('.tab-row:eq(' + index + ')').fadeIn(function () {
          if ($(this).find('.testimonials-slideshow')) {
            $(this).find('.testimonials-slideshow').slick('setPosition');
          }
        });
      }
    });
    if (urlHash) {
      if (urlHash.includes('__')) {
        var res = urlHash.split('__');
        nav.find('[href="' + res[0] + '"]').click();
        rows.find('[href="' + urlHash + '"]').click();
      } else {
        nav.find('[href="' + urlHash + '"]').click();
      }
    }
  });
  $('.to-other-tab').on('click', function () {
    $('.tab-nav').find('[href="' + $(this).attr('href') + '"]').click();
  });
  if (urlHash && $('.custom-dropdown.with-js').length > 0) {
    if (urlHash.includes('__')) {
      $('.custom-dropdown.with-js').find('[href="' + urlHash + '"]').click();
    }
  }
  $('table:not(.table)').wrap('<div class="table-div"></div>');
  $('.logos-slideshow').slick({
    dots: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 800,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    }, {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }, {
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }, {
      breakpoint: 568,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }]
  });
  $('.testimonials-slideshow').slick({
    fade: true,
    dots: true,
    arrows: false,
    speed: 800
  });
  $('textarea').autogrow({
    vertical: true,
    horizontal: false
  });
  $('.touch .main-menu .level-0.menu-item-has-children > a').on('click', function (e) {
    var menuItem = $(this).parent();
    if (!menuItem.hasClass('clicked')) {
      e.preventDefault();
      $('#main-menu li').removeClass('clicked');
      menuItem.addClass('clicked');
    } else {
      menuItem.removeClass('clicked');
    }
  });
  var mobileNavToggle = $('#mobile-menu-toggle');
  var mobileNav = $('#mobile-menu');
  mobileNavToggle.on('click', function (e) {
    e.stopPropagation();
    mobileNavToggle.toggleClass('opened');
    mobileNav.toggleClass('opened');
    $('body').toggleClass('overflow-hidden');
  });
  $('body').on('click', function () {
    if (mobileNav.hasClass('opened')) {
      mobileNavToggle.click();
    }
  });
  mobileNav.find('li').on('click', function (e) {
    if ($(this).hasClass('menu-item-has-children')) {
      e.stopPropagation();
    }
  });
  mobileNav.find('.level-0.menu-item-has-children').on('click', function () {
    var itemWithChildren = $(this);
    var submenu = itemWithChildren.find('.sub-menu');
    itemWithChildren.toggleClass('opened');
    submenu.slideToggle(200);
  });
  win.on('resize', function () {
    if (mobileNav.hasClass('opened')) {
      mobileNavToggle.click();
      mobileNav.find('.level-0.menu-item-has-children:not(.no-link)').removeClass('opened');
      mobileNav.find('.level-0.menu-item-has-children:not(.no-link) .sub-menu').slideUp(200);
    }
  });
  var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
  });
  $('.form-field .file [type="file"]').on('change', function (e) {
    var label = $(this).parents('.file').find('label strong');
    label.text(e.target.files[0].name + ', ' + (e.target.files[0].size / 1024 / 1024).toFixed(2) + ' MB');
  });
  var timer = null;
  var timer2 = null;
  var self = $(".contact-form-button");
  var clicked = false;
  self.on("click", function () {
    if (clicked === false) {
      self.removeClass("filled");
      self.addClass("circle");
      self.html("");
      clicked = true;
      $(".contact-form-button-wrap svg").css("display", "block");
      $(".contact-form-button-wrap .circle_2").attr("class", "circle_2 fill_circle");
      timer = setInterval(function tick() {
        self.removeClass("circle");
        self.addClass("filled");
        $(".contact-form-button-wrap img").css("display", "block");
        $(".contact-form-button-wrap svg").css("display", "none");
        clearInterval(timer);
      }, 1500);
      timer2 = setInterval(function tick2() {
        self.removeClass("filled");
        self.removeClass("circle");
        self.html("Submit Form");
        $(".contact-form-button-wrap img").css("display", "none");
        clearInterval(timer2);
        clicked = false;
      }, 3000);
    }
  });
  $('#footer-menu-mobile .level-0.menu-item-has-children > a').on('click', function (e) {
    e.preventDefault();
    var t = $(this);
    var p = t.parent();
    p.siblings().removeClass('opened');
    p.toggleClass('opened');
  });
  $('.resources-expand-row').each(function () {
    var row = $(this);
    var head = row.find('.head');
    var body = row.find('.body');
    head.on('click', function () {
      if (!row.hasClass('opened')) {
        row.siblings().removeClass('opened');
        row.siblings().find('button').text('More Info');
        row.addClass('opened');
        head.find('button').text('Close');
        $('html, body').animate({
          scrollTop: row.offset().top - $('#header').outerHeight()
        }, 600);
      } else {
        row.removeClass('opened');
        head.find('button').text('More Info');
      }
    })
  });
});
window.almComplete = function (alm) {
  callLightbox();
};