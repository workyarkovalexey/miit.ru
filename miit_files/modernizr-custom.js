/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!function (e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function i(e) {
        var t = E.className, n = Modernizr._config.classPrefix || "";
        if (_ && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), _ ? E.className.baseVal = t : E.className = t)
    }

    function o(e, t) {
        if ("object" == typeof e) for (var n in e) w(e, n) && o(n, e[n]); else {
            e = e.toLowerCase();
            var r = e.split("."), a = Modernizr[r[0]];
            if (2 == r.length && (a = a[r[1]]), "undefined" != typeof a) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function a() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function s(e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function u(e) {
        return e.replace(/([A-Z])/g, function (e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function l(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function f() {
        var e = t.body;
        return e || (e = a(_ ? "svg" : "body"), e.fake = !0), e
    }

    function c(e, n, r, i) {
        var o, s, u, l, c = "modernizr", d = a("div"), p = f();
        if (parseInt(r, 10)) for (; r--;) u = a("div"), u.id = i ? i[r] : c + (r + 1), d.appendChild(u);
        return o = a("style"), o.type = "text/css", o.id = "s" + c, (p.fake ? p : d).appendChild(o), p.appendChild(d), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = E.style.overflow, E.style.overflow = "hidden", E.appendChild(p)), s = n(d, e), p.fake ? (p.parentNode.removeChild(p), E.style.overflow = l, E.offsetHeight) : d.parentNode.removeChild(d), !!s
    }

    function d(t, r) {
        var i = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; i--;) if (e.CSS.supports(u(t[i]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; i--;) o.push("(" + u(t[i]) + ":" + r + ")");
            return o = o.join(" or "), c("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function p(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function m(e, t, n) {
        var i;
        for (var o in e) if (e[o] in t) return n === !1 ? e[o] : (i = t[e[o]], r(i, "function") ? p(i, n || t) : i);
        return !1
    }

    function h(e, t, i, o) {
        function u() {
            c && (delete T.style, delete T.modElem)
        }

        if (o = r(o, "undefined") ? !1 : o, !r(i, "undefined")) {
            var f = d(e, i);
            if (!r(f, "undefined")) return f
        }
        for (var c, p, m, h, v, g = ["modernizr", "tspan", "samp"]; !T.style && g.length;) c = !0, T.modElem = a(g.shift()), T.style = T.modElem.style;
        for (m = e.length, p = 0; m > p; p++) if (h = e[p], v = T.style[h], l(h, "-") && (h = s(h)), T.style[h] !== n) {
            if (o || r(i, "undefined")) return u(), "pfx" == t ? h : !0;
            try {
                T.style[h] = i
            } catch (y) {
            }
            if (T.style[h] != v) return u(), "pfx" == t ? h : !0
        }
        return u(), !1
    }

    function v(e, t, n, i, o) {
        var a = e.charAt(0).toUpperCase() + e.slice(1), s = (e + " " + N.join(a + " ") + a).split(" ");
        return r(t, "string") || r(t, "undefined") ? h(s, t, i, o) : (s = (e + " " + x.join(a + " ") + a).split(" "), m(s, t, n))
    }

    function g(e, t, r) {
        return v(e, n, n, t, r)
    }

    var y = [], C = {
        _version: "3.3.1",
        _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
        _q: [],
        on: function (e, t) {
            var n = this;
            setTimeout(function () {
                t(n[e])
            }, 0)
        },
        addTest: function (e, t, n) {
            y.push({name: e, fn: t, options: n})
        },
        addAsyncTest: function (e) {
            y.push({name: null, fn: e})
        }
    }, Modernizr = function () {
    };
    Modernizr.prototype = C, Modernizr = new Modernizr;
    var S = C._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    C._prefixes = S;
    var E = t.documentElement, _ = "svg" === E.nodeName.toLowerCase();
    _ || !function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"), r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = C.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function i(e, t) {
            var n = C.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), C.elements = n + " " + e, l(t)
        }

        function o(e) {
            var t = y[e[v]];
            return t || (t = {}, g++, e[v] = g, y[g] = t), t
        }

        function a(e, n, r) {
            if (n || (n = t), c) return n.createElement(e);
            r || (r = o(n));
            var i;
            return i = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !i.canHaveChildren || m.test(e) || i.tagUrn ? i : r.frag.appendChild(i)
        }

        function s(e, n) {
            if (e || (e = t), c) return e.createDocumentFragment();
            n = n || o(e);
            for (var i = n.frag.cloneNode(), a = 0, s = r(), u = s.length; u > a; a++) i.createElement(s[a]);
            return i
        }

        function u(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return C.shivMethods ? a(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(C, t.frag)
        }

        function l(e) {
            e || (e = t);
            var r = o(e);
            return !C.shivCSS || f || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || u(e, r), e
        }

        var f, c, d = "3.7.3", p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            v = "_html5shiv", g = 0, y = {};
        !function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", f = "hidden" in e, c = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                f = !0, c = !0
            }
        }();
        var C = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: d,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: c,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: a,
            createDocumentFragment: s,
            addElements: i
        };
        e.html5 = C, l(t), "object" == typeof module && module.exports && (module.exports = C)
    }("undefined" != typeof e ? e : this, t);
    var b = "Moz O ms Webkit", x = C._config.usePrefixes ? b.toLowerCase().split(" ") : [];
    C._domPrefixes = x;
    var w;
    !function () {
        var e = {}.hasOwnProperty;
        w = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function (t, n) {
            return e.call(t, n)
        }
    }(), C._l = {}, C.on = function (e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, C._trigger = function (e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function () {
                var e, r;
                for (e = 0; e < n.length; e++) (r = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function () {
        C.addTest = o
    });
    var N = C._config.usePrefixes ? b.split(" ") : [];
    C._cssomPrefixes = N;
    var j = function (t) {
        var r, i = S.length, o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
        for (var a = 0; i > a; a++) {
            var s = S[a], u = s.toUpperCase() + "_" + r;
            if (u in o) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    C.atRule = j;
    var P = function () {
        function e(e, t) {
            var i;
            return e ? (t && "string" != typeof t || (t = a(t || "div")), e = "on" + e, i = e in t, !i && r && (t.setAttribute || (t = a("div")), t.setAttribute(e, ""), i = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), i) : !1
        }

        var r = !("onblur" in t.documentElement);
        return e
    }();
    C.hasEvent = P;
    var k = function (e, t) {
        var n = !1, r = a("div"), i = r.style;
        if (e in i) {
            var o = x.length;
            for (i[e] = t, n = i[e]; o-- && !n;) i[e] = "-" + x[o] + "-" + t, n = i[e]
        }
        return "" === n && (n = !1), n
    };
    C.prefixedCSSValue = k;
    var z = function () {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function (e) {
            var n = t(e);
            return n && n.matches || !1
        } : function (t) {
            var n = !1;
            return c("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }();
    C.mq = z;
    var F = (C.testStyles = c, {elem: a("modernizr")});
    Modernizr._q.push(function () {
        delete F.elem
    });
    var T = {style: F.elem.style};
    Modernizr._q.unshift(function () {
        delete T.style
    });
    C.testProp = function (e, t, r) {
        return h([e], n, t, r)
    };
    C.testAllProps = v;
    var M = C.prefixed = function (e, t, n) {
        return 0 === e.indexOf("@") ? j(e) : (-1 != e.indexOf("-") && (e = s(e)), t ? v(e, t, n) : v(e, "pfx"))
    };
    C.prefixedCSS = function (e) {
        var t = M(e);
        return t && u(t)
    };
    C.testAllProps = g
}(window, document);