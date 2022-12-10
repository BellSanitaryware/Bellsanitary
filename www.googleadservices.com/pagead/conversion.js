(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var aa;

    function ba(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        ha = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        l = {},
        ia = {};

    function r(a, b) {
        var c = ia[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function t(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in l ? f = l : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ha && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(l, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0, ia[d] = ha ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    t("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, l.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ja(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ja(a) {
        a = {
            next: a
        };
        a[r(l.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }
    var ka = ha && "function" == typeof r(Object, "assign") ? r(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    t("Object.assign", function(a) {
        return a || ka
    }, "es6");

    function la(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    t("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = la(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");

    function ma(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[r(l.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    t("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ma(this, function(b) {
                return b
            })
        }
    }, "es6");
    t("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    t("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    t("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ma(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    t("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    t("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || r(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    t("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== la(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var v = this || self;

    function na(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.ca = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.W = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function oa(a) {
        return a
    };

    function x(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    };

    function z(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, z);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    na(z, Error);
    z.prototype.name = "CustomError";

    function pa(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        z.call(this, c + a[d])
    }
    na(pa, z);
    pa.prototype.name = "AssertionError";

    function A(a, b) {
        this.h = a === qa && b || "";
        this.H = ra
    }
    A.prototype.j = !0;
    A.prototype.g = function() {
        return this.h
    };

    function sa(a) {
        return a instanceof A && a.constructor === A && a.H === ra ? a.h : "type_error:Const"
    }
    var ra = {},
        qa = {};

    function ta(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var ua = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        va = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function wa(a) {
        if (!xa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ba, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ca, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Da, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ea, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Fa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ga, "&#0;"));
        return a
    }
    var Ba = /&/g,
        Ca = /</g,
        Da = />/g,
        Ea = /"/g,
        Fa = /'/g,
        Ga = /\x00/g,
        xa = /[\x00&<>"']/;

    function Ha(a) {
        var b;
        a: {
            if (b = v.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function Ia(a) {
        Ia[" "](a);
        return a
    }
    Ia[" "] = function() {};
    var Ja = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Ka;

    function La() {
        if (void 0 === Ka) {
            var a = null,
                b = v.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: oa,
                        createScript: oa,
                        createScriptURL: oa
                    })
                } catch (c) {
                    v.console && v.console.error(c.message)
                }
                Ka = a
            } else Ka = a
        }
        return Ka
    };

    function C(a, b) {
        this.h = b === Ma ? a : ""
    }
    C.prototype.toString = function() {
        return this.h + ""
    };
    C.prototype.j = !0;
    C.prototype.g = function() {
        return this.h.toString()
    };

    function Na(a) {
        return a instanceof C && a.constructor === C ? a.h : "type_error:TrustedResourceUrl"
    }
    var Oa = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Ma = {};

    function Pa(a) {
        var b = La();
        a = b ? b.createScriptURL(a) : a;
        return new C(a, Ma)
    }

    function Qa(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function D(a, b) {
        this.h = b === Ra ? a : ""
    }
    D.prototype.toString = function() {
        return this.h.toString()
    };
    D.prototype.j = !0;
    D.prototype.g = function() {
        return this.h.toString()
    };

    function Sa(a) {
        return a instanceof D && a.constructor === D ? a.h : "type_error:SafeUrl"
    }
    var Ta = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Ua = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Va(a) {
        if (a instanceof D) return a;
        a = "object" == typeof a && a.j ? a.g() : String(a);
        Ua.test(a) ? a = new D(a, Ra) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Ta) ? new D(a, Ra) : null);
        return a
    }
    var Ra = {},
        Wa = new D("about:invalid#zClosurez", Ra);
    var Xa = {};

    function F(a, b) {
        this.h = b === Xa ? a : "";
        this.j = !0
    }
    F.prototype.g = function() {
        return this.h
    };
    F.prototype.toString = function() {
        return this.h.toString()
    };
    var Ya = new F("", Xa);

    function Za(a) {
        if (a instanceof D) return 'url("' + Sa(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof A) a = sa(a);
        else {
            a = String(a);
            var b = a.replace($a, "$1").replace($a, "$1").replace(ab, "url");
            if (bb.test(b)) {
                if (b = !cb.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && db(a)
                }
                a = b ? eb(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new pa("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function db(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    var bb = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        ab = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        $a = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        cb = /\/\*/;

    function eb(a) {
        return a.replace(ab, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                f = h;
                return k
            });
            b = (Va(d) || Wa).g();
            return c + f + b + f + e
        })
    };
    var fb = {};

    function G(a, b) {
        this.h = b === fb ? a : "";
        this.j = !0
    }
    G.prototype.g = function() {
        return this.h.toString()
    };
    G.prototype.toString = function() {
        return this.h.toString()
    };

    function I(a) {
        return a instanceof G && a.constructor === G ? a.h : "type_error:SafeHtml"
    }

    function gb(a) {
        return a instanceof G ? a : J(wa("object" == typeof a && a.j ? a.g() : String(a)))
    }

    function hb(a) {
        function b(e) {
            Array.isArray(e) ? e.forEach(b) : (e = gb(e), d.push(I(e).toString()))
        }
        var c = gb(ib),
            d = [];
        a.forEach(b);
        return J(d.join(I(c).toString()))
    }

    function jb(a) {
        return hb(Array.prototype.slice.call(arguments))
    }

    function J(a) {
        var b = La();
        a = b ? b.createHTML(a) : a;
        return new G(a, fb)
    }
    var kb = /^[a-zA-Z0-9-]+$/,
        lb = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        mb = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        ib = new G(v.trustedTypes && v.trustedTypes.emptyHTML || "", fb);
    var nb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function ob(a) {
        var b = a.match(nb);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function pb(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var qb = /#|$/;

    function rb(a, b) {
        var c = a.search(qb),
            d = pb(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
    var sb = /[?&]($|#)/;

    function K(a, b, c) {
        for (var d = a.search(qb), e = 0, f, g = []; 0 <= (f = pb(a, e, b, d));) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
        g.push(a.slice(e));
        a = g.join("").replace(sb, "$1");
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        (b += c) ? (c = a.indexOf("#"), 0 > c && (c = a.length), d = a.indexOf("?"), 0 > d || d > c ? (d = c, e = "") : e = a.substring(d + 1, c), c = [a.slice(0, d), e, a.slice(c)], a = c[1], c[1] = b ? a ? a + "&" + b : b : a, b = c[0] + (c[1] ? "?" + c[1] : "") + c[2]) : b = a;
        return b
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function tb(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function ub(a, b) {
        a.write(I(b))
    };

    function vb() {
        if (!l.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            l.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function wb(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var yb = ta(function() {
            return va(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], xb) || 1E-4 > Math.random()
        }),
        zb = ta(function() {
            return Ha("MSIE")
        });

    function xb(a) {
        return Ha(a)
    }

    function L(a) {
        return /^true$/.test(a)
    }

    function Ab(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var Bb = x("0.20"),
        Cb = x("0.002"),
        Db = x("0.0"),
        Eb = x("0.00"),
        Fb = x("0.00"),
        Gb = L("false"),
        Hb = L("true"),
        Ib = L("true"),
        Jb = L("true"),
        Kb = L("true");
    var Lb = null;

    function Mb() {
        if (null === Lb) {
            Lb = "";
            try {
                var a = "";
                try {
                    a = v.top.location.hash
                } catch (c) {
                    a = v.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Lb = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Lb
    }

    function M(a, b, c) {
        var d = P;
        if (c ? d.g.hasOwnProperty(c) && "" == d.g[c] : 1) {
            var e;
            e = (e = Mb()) ? (e = e.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? e[0] : null : null;
            if (e) a = e;
            else a: {
                if (!zb() && !yb() && (e = Math.random(), e < b)) {
                    e = vb();
                    a = a[Math.floor(e * a.length)];
                    break a
                }
                a = null
            }
            a && "" != a && (c ? d.g.hasOwnProperty(c) && (d.g[c] = a) : d.h[a] = !0)
        }
    }

    function Q(a) {
        var b = P;
        return b.g.hasOwnProperty(a) ? b.g[a] : ""
    }

    function Nb() {
        var a = P,
            b = [];
        wb(a.h, function(c, d) {
            b.push(d)
        });
        wb(a.g, function(c) {
            "" != c && b.push(c)
        });
        return b
    };
    var Ob = {
            M: 2,
            U: 13,
            T: 14,
            P: 16,
            O: 17,
            N: 18,
            L: 19,
            V: 20
        },
        P = null;

    function Pb() {
        return !!P && ("466465926" == Q(20) || "466465925" == Q(20))
    }

    function Qb() {
        return !!P && "592230571" == Q(16)
    };

    function Rb(a) {
        var b = void 0 === b ? v : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };

    function R(a) {
        var b = "v";
        if (a.v && a.hasOwnProperty(b)) return a.v;
        b = new a;
        return a.v = b
    };
    var Sb = {
        R: 0,
        I: 1,
        S: 2,
        K: 3,
        J: 4
    };

    function Tb() {
        this.g = {}
    }

    function Ub(a, b, c) {
        "number" === typeof c && 0 < c && (a.g[b] = Math.round(c))
    }

    function Vb(a) {
        var b = R(Tb);
        var c = void 0 === c ? v : c;
        c = c.performance;
        Ub(b, a, c && c.now ? c.now() : null)
    }

    function Wb() {
        function a() {
            return Ub(b, 0, Rb("loadEventStart") - Rb("navigationStart"))
        }
        var b = R(Tb);
        0 != Rb("loadEventStart") ? a() : window.addEventListener("load", a)
    }

    function Xb() {
        var a = R(Tb);
        return r(Object, "values").call(Object, Sb).map(function(b) {
            return [b, a.g[b] || 0]
        })
    };
    var Yb = L("false");
    var Zb = {};

    function $b(a) {
        Zb.TAGGING = Zb.TAGGING || [];
        Zb.TAGGING[a] = !0
    };
    var ac = Array.isArray;

    function bc(a, b) {
        if (a && ac(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function cc(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    };
    var S = window,
        T = document;

    function dc(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null, b())
        })
    }

    function ec(a, b, c) {
        var d = T.createElement("script");
        d.type = "text/javascript";
        d.async = !0;
        a = Pa(a);
        d.src = Na(a);
        tb(d);
        dc(d, b);
        c ? c.appendChild(d) : (b = T.getElementsByTagName("script")[0] || T.body || T.head, b.parentNode.insertBefore(d, b))
    }

    function fc(a, b, c) {
        var d = !1;
        c || (c = T.createElement("iframe"), d = !0);
        d && (d = T.body && T.body.lastChild || T.body || T.head, d.parentNode.insertBefore(c, d));
        dc(c, b);
        void 0 !== a && (c.src = a)
    };

    function gc() {
        var a = void 0 === a ? document : a;
        var b;
        return !(null == (b = a.featurePolicy) || !(aa = b.allowedFeatures(), r(aa, "includes")).call(aa, "attribution-reporting"))
    };

    function hc(a, b, c) {
        a = ic(a, !0);
        if (a[b]) return !1;
        a[b] = [];
        a[b][0] = c;
        return !0
    }

    function ic(a, b) {
        var c = a.GooglebQhCsO;
        c || (c = {}, b && (a.GooglebQhCsO = c));
        return c
    };
    var jc = {},
        kc = null;

    function lc(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        a = 4;
        void 0 === a && (a = 0);
        if (!kc)
            for (kc = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                jc[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === kc[h] && (kc[h] = g)
                }
            }
        a = jc[a];
        c = Array(Math.floor(b.length / 3));
        d = a[64] || "";
        for (e = f = 0; f < b.length - 2; f += 3) {
            var k = b[f],
                m = b[f + 1];
            h = b[f + 2];
            g = a[k >> 2];
            k = a[(k &
                3) << 4 | m >> 4];
            m = a[(m & 15) << 2 | h >> 6];
            h = a[h & 63];
            c[e++] = g + k + m + h
        }
        g = 0;
        h = d;
        switch (b.length - f) {
            case 2:
                g = b[f + 1], h = a[(g & 15) << 2] || d;
            case 1:
                b = b[f], c[e] = a[b >> 2] + a[(b & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };

    function nc(a, b, c, d) {
        var e = rb(c, "fmt");
        if (d) {
            var f = rb(c, "random"),
                g = rb(c, "label") || "";
            if (!f) return !1;
            f = lc(decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")));
            if (!hc(a, f, d)) return !1
        }
        e && 4 != e && (c = K(c, "rfmt", e));
        c = K(c, "fmt", 4);
        ec(c, function() {
            a.google_noFurtherRedirects && d && d.call && (a.google_noFurtherRedirects = null, d())
        }, b.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var oc = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);

    function pc() {
        var a = {};
        this.g = function() {
            var b = oc.g,
                c = oc.defaultValue;
            return null != a[b] ? a[b] : c
        }
    };
    var qc = [];

    function U() {
        var a = {};
        var b = S.google_tag_data;
        S.google_tag_data = void 0 === b ? a : b;
        a = S.google_tag_data;
        a.ics || (a.ics = {
            entries: {},
            set: rc,
            update: sc,
            addListener: tc,
            notifyListeners: uc,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function rc(a, b, c, d, e, f) {
        var g = U();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries;
            g = h[a] || {};
            var k = g.region;
            c = c && "string" === typeof c ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || c === e || (c === d ? k !== e : !c && !k)) {
                e = !!(f && 0 < f && void 0 === g.update);
                var m = {
                    region: c,
                    initial: "granted" === b,
                    update: g.update,
                    quiet: e
                };
                if ("" !== d || !1 !== g.initial) h[a] = m;
                e && S.setTimeout(function() {
                    h[a] === m && m.quiet && (m.quiet = !1, vc(a),
                        uc(), $b(2))
                }, f)
            }
        }
    }

    function sc(a, b) {
        var c = U();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = wc(c, a),
                e = c.entries;
            e = e[a] = e[a] || {};
            e.update = "granted" === b;
            b = wc(c, a);
            e.quiet ? (e.quiet = !1, vc(a)) : b !== d && vc(a)
        }
    }

    function tc(a, b) {
        qc.push({
            s: a,
            D: b
        })
    }

    function vc(a) {
        for (var b = 0; b < qc.length; ++b) {
            var c = qc[b];
            ac(c.s) && -1 !== c.s.indexOf(a) && (c.C = !0)
        }
    }

    function uc(a, b) {
        for (var c = 0; c < qc.length; ++c) {
            var d = qc[c];
            if (d.C) {
                d.C = !1;
                try {
                    d.D({
                        X: a,
                        Y: b
                    })
                } catch (e) {}
            }
        }
    }

    function wc(a, b) {
        a = a.entries[b] || {};
        return void 0 !== a.update ? a.update : a.initial
    }

    function xc(a) {
        var b = U();
        b.accessedAny = !0;
        return wc(b, a)
    }

    function yc(a) {
        var b = U();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }

    function zc() {
        if (!R(pc).g()) return !1;
        var a = U();
        a.accessedAny = !0;
        return a.active
    }

    function Ac(a, b) {
        U().addListener(a, b)
    }

    function Bc(a) {
        function b() {
            for (var e = 0; e < c.length; e++)
                if (!yc(c[e])) return !0;
            return !1
        }
        var c = ["ad_storage"];
        if (b()) {
            var d = !1;
            Ac(c, function(e) {
                d || b() || (d = !0, a(e))
            })
        } else a({})
    }

    function Cc(a) {
        function b() {
            for (var e = [], f = 0; f < c.length; f++) {
                var g = c[f];
                !1 === xc(g) || d[g] || (e.push(g), d[g] = !0)
            }
            return e
        }
        var c = ["ad_storage"],
            d = {};
        b().length !== c.length && Ac(c, function(e) {
            var f = b();
            0 < f.length && (e.s = f, a(e))
        })
    };

    function Dc(a, b, c, d) {
        if (Ec(d)) {
            d = [];
            b = String(b || Fc()).split(";");
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("="),
                    g = f[0].replace(/^\s*|\s*$/g, "");
                g && g == a && ((f = f.slice(1).join("=").replace(/^\s*|\s*$/g, "")) && c && (f = decodeURIComponent(f)), d.push(f))
            }
            a = d
        } else a = [];
        return a
    }

    function Gc(a, b, c, d) {
        var e = Fc(),
            f = window;
        "null" !== f.origin && (f.document.cookie = a);
        a = Fc();
        return e != a || void 0 != c && 0 <= Dc(b, a, !1, d).indexOf(c)
    }

    function Hc(a, b, c) {
        function d(n, p, E) {
            if (null == E) return delete g[p], n;
            g[p] = E;
            return n + "; " + p + "=" + E
        }

        function e(n, p) {
            if (null == p) return delete g[p], n;
            g[p] = !0;
            return n + "; " + p
        }
        if (Ec(c.l)) {
            if (void 0 == b) var f = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else c.encode && (b = encodeURIComponent(b)), b = Ic(b), f = a + "=" + b;
            var g = {};
            f = d(f, "path", c.path);
            if (c.expires instanceof Date) var h = c.expires.toUTCString();
            else null != c.expires && (h = c.expires);
            f = d(f, "expires", h);
            f = d(f, "max-age", c.Z);
            f = d(f, "samesite", c.aa);
            c.ba &&
                (f = e(f, "secure"));
            if ((h = c.domain) && "auto" === h.toLowerCase()) {
                h = Jc();
                for (var k = 0; k < h.length; ++k) {
                    var m = "none" !== h[k] ? h[k] : void 0,
                        q = d(f, "domain", m);
                    q = e(q, c.flags);
                    if (!Kc(m, c.path) && Gc(q, a, b, c.l)) break
                }
            } else h && "none" !== h.toLowerCase() && (f = d(f, "domain", h)), f = e(f, c.flags), Kc(h, c.path) || Gc(f, a, b, c.l)
        }
    }

    function Lc(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        Hc(a, b, c)
    }

    function Ic(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
    var Mc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Nc = /(^|\.)doubleclick\.net$/i;

    function Kc(a, b) {
        return Nc.test(window.document.location.hostname) || "/" === b && Mc.test(a)
    }

    function Fc() {
        return "null" !== window.origin ? window.document.cookie : ""
    }

    function Jc() {
        var a = [],
            b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (c = b.length - 2; 0 <= c; c--) a.push(b.slice(c).join("."));
        b = window.document.location.hostname;
        Nc.test(b) || Mc.test(b) || a.push("none");
        return a
    }

    function Ec(a) {
        if (!R(pc).g() || !a || !zc()) return !0;
        if (!yc(a)) return !1;
        a = xc(a);
        return null == a ? !0 : !!a
    };

    function Oc(a, b) {
        var c, d = Number(null != a.B ? a.B : void 0);
        0 !== d && (c = new Date((b || (new Date(Date.now())).getTime()) + 1E3 * (d || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !0,
            expires: c,
            l: void 0
        }
    };

    function Pc(a) {
        var b = [],
            c = T.cookie.split(";");
        a = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].match(a);
            e && b.push({
                A: e[1],
                value: e[2],
                timestamp: Number(e[2].split(".")[1]) || 0
            })
        }
        b.sort(function(f, g) {
            return g.timestamp - f.timestamp
        });
        return b
    }

    function Qc(a, b) {
        a = Pc(a);
        var c = {};
        if (!a || !a.length) return c;
        for (var d = 0; d < a.length; d++) {
            var e = a[d].value.split(".");
            if (!("1" !== e[0] || b && 3 > e.length || !b && 3 !== e.length) && Number(e[1])) {
                c[a[d].A] || (c[a[d].A] = []);
                var f = {
                    version: e[0],
                    timestamp: 1E3 * Number(e[1]),
                    i: e[2]
                };
                b && 3 < e.length && (f.labels = e.slice(3));
                c[a[d].A].push(f)
            }
        }
        return c
    };
    var Rc = /:[0-9]+$/;

    function Sc(a, b) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split("=");
            if (decodeURIComponent(d[0]).replace(/\+/g, " ") === b) return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g, " ")
        }
    }

    function Tc(a, b) {
        var c = "query";
        var d = (d = a.protocol) ? d.replace(":", "").toLowerCase() : "";
        c && (c = String(c).toLowerCase());
        switch (c) {
            case "url_no_fragment":
                b = "";
                a && a.href && (b = a.href.indexOf("#"), b = 0 > b ? a.href : a.href.substr(0, b));
                a = b;
                break;
            case "protocol":
                a = d;
                break;
            case "host":
                a = a.hostname.replace(Rc, "").toLowerCase();
                break;
            case "port":
                a = String(Number(a.port) || ("http" === d ? 80 : "https" === d ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || $b(1);
                a = "/" === a.pathname.charAt(0) ? a.pathname : "/" + a.pathname;
                a = a.split("/");
                0 <= [].indexOf(a[a.length - 1]) && (a[a.length - 1] = "");
                a = a.join("/");
                break;
            case "query":
                a = a.search.replace("?", "");
                b && (a = Sc(a, b));
                break;
            case "extension":
                a = a.pathname.split(".");
                a = 1 < a.length ? a[a.length - 1] : "";
                a = a.split("/")[0];
                break;
            case "fragment":
                a = a.hash.replace("#", "");
                break;
            default:
                a = a && a.href
        }
        return a
    };
    var Uc = {};
    var Vc = /^\w+$/,
        Wc = /^[\w-]+$/,
        Xc = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        };

    function V() {
        if (!R(pc).g() || !zc()) return !0;
        var a = xc("ad_storage");
        return null == a ? !0 : !!a
    }

    function Yc(a, b) {
        yc("ad_storage") ? V() ? a() : Cc(a) : b ? $b(3) : Bc(function() {
            Yc(a, !0)
        })
    }

    function Zc(a) {
        return $c(a).map(function(b) {
            return b.i
        })
    }

    function $c(a) {
        var b = [];
        if ("null" === S.origin || !T.cookie) return b;
        a = Dc(a, T.cookie, void 0, "ad_storage");
        if (!a || 0 == a.length) return b;
        for (var c = {}, d = 0; d < a.length; c = {
                m: c.m
            }, d++) {
            var e = ad(a[d]);
            if (null != e) {
                var f = e;
                e = f.version;
                c.m = f.i;
                var g = f.timestamp;
                f = f.labels;
                var h = bc(b, function(k) {
                    return function(m) {
                        return m.i === k.m
                    }
                }(c));
                h ? (h.timestamp = Math.max(h.timestamp, g), h.labels = bd(h.labels, f || [])) : b.push({
                    version: e,
                    i: c.m,
                    timestamp: g,
                    labels: f
                })
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return cd(b)
    }

    function bd(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (a = 0; a < b.length; a++) c[b[a]] || d.push(b[a]);
        return d
    }

    function dd(a) {
        return a && "string" == typeof a && a.match(Vc) ? a : "_gcl"
    }

    function ed() {
        var a = S.location.href,
            b = T.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || $b(1), c = "/" + c);
        a = b.hostname.replace(Rc, "");
        var d = {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: a,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        };
        b = Tc(d, "gclid");
        c = Tc(d, "gclsrc");
        a = Tc(d, "wbraid");
        var e = Tc(d, "dclid");
        b && c && a || (d = d.hash.replace("#", ""), b = b || Sc(d, "gclid"), c = c || Sc(d, "gclsrc"), a = a || Sc(d, "wbraid"));
        return fd(b, c, e, a)
    }

    function fd(a, b, c, d) {
        function e(g, h) {
            f[h] || (f[h] = []);
            f[h].push(g)
        }
        var f = {};
        f.gclid = a;
        f.gclsrc = b;
        f.dclid = c;
        void 0 !== d && Wc.test(d) && (f.gbraid = d, e(d, "gb"));
        if (void 0 !== a && a.match(Wc)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return f
    }

    function gd() {
        var a = {},
            b = ed();
        Yc(function() {
            hd(b, !1, a)
        })
    }

    function hd(a, b, c, d, e) {
        function f(n) {
            n = ["GCL", q, n];
            0 < e.length && n.push(e.join("."));
            return n.join(".")
        }

        function g(n, p) {
            if (n = id(n, h)) Lc(n, p, k), m = !0
        }
        c = c || {};
        e = e || [];
        var h = dd(c.prefix);
        d = d || (new Date(Date.now())).getTime();
        var k = Oc(c, d);
        k.l = "ad_storage";
        var m = !1,
            q = Math.round(d / 1E3);
        a.aw && g("aw", f(a.aw[0]));
        a.dc && g("dc", f(a.dc[0]));
        a.gf && g("gf", f(a.gf[0]));
        a.ha && g("ha", f(a.ha[0]));
        a.gp && g("gp", f(a.gp[0]));
        if ((void 0 == Uc.enable_gbraid_cookie_write ? 0 : Uc.enable_gbraid_cookie_write) && !m && a.gb) {
            a = a.gb[0];
            d =
                id("gb", h);
            c = !1;
            if (!b)
                for (b = $c(d), d = 0; d < b.length; d++) b[d].i === a && b[d].labels && 0 < b[d].labels.length && (c = !0);
            c || g("gb", f(a))
        }
    }

    function id(a, b) {
        a = Xc[a];
        if (void 0 !== a) return b + a
    }

    function jd(a) {
        return 0 !== kd(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    }

    function ad(a) {
        a = kd(a.split("."));
        return 0 === a.length ? null : {
            version: a[0],
            i: a[2],
            timestamp: 1E3 * (Number(a[1]) || 0),
            labels: a.slice(3)
        }
    }

    function kd(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Wc.test(a[2]) ? [] : a
    }

    function cd(a) {
        return a.filter(function(b) {
            return Wc.test(b.i)
        })
    }

    function ld() {
        var a = ["aw"],
            b = {};
        if ("null" !== S.origin) {
            for (var c = dd(b.prefix), d = {}, e = 0; e < a.length; e++) Xc[a[e]] && (d[a[e]] = Xc[a[e]]);
            Yc(function() {
                cc(d, function(f, g) {
                    g = Dc(c + g, T.cookie, void 0, "ad_storage");
                    g.sort(function(q, n) {
                        return jd(n) - jd(q)
                    });
                    if (g.length) {
                        var h = g[0];
                        g = jd(h);
                        var k = 0 !== kd(h.split(".")).length ? h.split(".").slice(3) : [],
                            m = {};
                        h = 0 !== kd(h.split(".")).length ? h.split(".")[2] : void 0;
                        m[f] = [h];
                        hd(m, !0, b, g, k)
                    }
                })
            })
        }
    }

    function md(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!V()) return e;
        var f = $c(a);
        if (!f.length) return e;
        for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d) return e;
        1 !== e[0] && (d = f[0], f = f[0].timestamp, b = [d.version, Math.round(f / 1E3), d.i].concat(d.labels || [], [b]).join("."), c = Oc(c, f), c.l = "ad_storage", Lc(a, b, c));
        return e
    }

    function nd(a, b) {
        b = dd(b);
        a = id(a, b);
        if (!a) return 0;
        a = $c(a);
        for (var c = b = 0; c < a.length; c++) b = Math.max(b, a[c].timestamp);
        return b
    }

    function od(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var pd = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        qd = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        rd = /^\d+\.fls\.doubleclick\.net$/,
        sd = /;gac=([^;?]+)/,
        td = /;gacgb=([^;?]+)/,
        ud = /;gclaw=([^;?]+)/,
        vd = /;gclgb=([^;?]+)/;

    function wd(a, b, c) {
        if (rd.test(a.location.host)) return (b = a.location.href.match(c)) && 2 == b.length && b[1].match(pd) ? decodeURIComponent(b[1]) : "";
        a = [];
        for (var d in b) {
            c = [];
            for (var e = b[d], f = 0; f < e.length; f++) c.push(e[f].i);
            a.push(d + ":" + c.join(","))
        }
        return 0 < a.length ? a.join(";") : ""
    }

    function xd(a, b, c, d) {
        var e = V() ? Qc("_gac_gb", !0) : {},
            f = [],
            g = !1,
            h;
        for (h in e) {
            var k = md("_gac_gb_" + h, b, c, d);
            g = g || 0 !== k.length && k.some(function(m) {
                return 1 === m
            });
            f.push(h + ":" + k.join(","))
        }
        return {
            G: g ? f.join(";") : "",
            F: wd(a, e, td)
        }
    }

    function yd(a, b, c, d) {
        if (rd.test(a.location.host)) {
            if ((a = a.location.href.match(d)) && 2 == a.length && a[1].match(qd)) return [{
                i: a[1]
            }]
        } else return $c((b || "_gcl") + c);
        return []
    }

    function zd(a, b) {
        return yd(a, b, "_aw", ud).map(function(c) {
            return c.i
        }).join(".")
    }

    function Ad(a, b) {
        return yd(a, b, "_gb", vd).map(function(c) {
            return c.i
        }).join(".")
    }

    function Bd(a) {
        0 !== Zc("_gcl_aw").length || a && 0 !== Zc(a + "_aw").length || (gd(), ld())
    }

    function Cd(a, b, c) {
        a = md((b && b.prefix || "_gcl") + "_gb", a, b, c);
        return 0 === a.length || a.every(function(d) {
            return 0 === d
        }) ? "" : a.join(".")
    };

    function Dd() {
        if ("function" === typeof S.__uspapi) {
            var a = "";
            try {
                S.__uspapi("getUSPData", 1, function(b, c) {
                    c && b && (b = b.uspString) && RegExp("^[\\da-zA-Z-]{1,20}$").test(b) && (a = b)
                })
            } catch (b) {}
            return a
        }
    };
    var Ed = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Fd(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function Gd(a) {
        a = a.google_tag_data;
        if (null != a && a.uach) {
            a = a.uach;
            var b = r(Object, "assign").call(Object, {}, a);
            a.fullVersionList && (b.fullVersionList = a.fullVersionList.slice(0));
            a = b
        } else a = null;
        return a
    }

    function Hd(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function Id() {
        var a = window;
        if (Hd(a)) {
            var b = Fd(a);
            b.uach_promise || (a = a.navigator.userAgentData.getHighEntropyValues(Ed).then(function(c) {
                null != b.uach || (b.uach = c);
                return c
            }), b.uach_promise = a)
        }
    };
    var Jd = /^[a-zA-Z0-9_]+$/,
        Kd = !1,
        Ld = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" "),
        Md = ["google_conversion_first_time", "google_conversion_snippets"];

    function W(a) {
        return null != a ? encodeURIComponent(String(a)) : ""
    }

    function Nd(a) {
        if (null != a) {
            a = String(a).substring(0, 512);
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        }
        return ""
    }

    function X(a, b) {
        b = W(b);
        return "" != b && (a = W(a), "" != a) ? "&".concat(a, "=", b) : ""
    }

    function Od(a) {
        var b = typeof a;
        return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function Pd(a) {
        if (!a || "object" != typeof a || "function" == typeof a.join) return "";
        var b = [],
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (d && "function" === typeof d.join) {
                    for (var e = [], f = 0; f < d.length; ++f) {
                        var g = Od(d[f]);
                        null != g && e.push(g)
                    }
                    d = 0 == e.length ? null : e.join(",")
                } else d = Od(d);
                (e = Od(c)) && null != d && b.push(e + "=" + d)
            }
        return b.join(";")
    }

    function Qd(a) {
        return "number" != typeof a && "string" != typeof a ? "" : W(a.toString())
    }

    function Rd(a, b) {
        if (b.google_read_gcl_cookie_opt_out || b.google_remarketing_only || b.google_conversion_domain && (!b.google_gcl_cookie_prefix || !/^_ycl/.test(b.google_gcl_cookie_prefix))) return "";
        var c = "";
        var d = b.google_gcl_cookie_prefix && "_gcl" !== b.google_gcl_cookie_prefix && Jd.test(b.google_gcl_cookie_prefix) ? b.google_gcl_cookie_prefix : "";
        var e = {};
        b.google_gcl_cookie_domain && (e.domain = b.google_gcl_cookie_domain);
        b.google_gcl_cookie_flags && (e.flags = b.google_gcl_cookie_flags);
        null != b.google_gcl_cookie_max_age_seconds &&
            (e.B = b.google_gcl_cookie_max_age_seconds);
        b.google_gcl_cookie_path && (e.path = b.google_gcl_cookie_path);
        d && (e.prefix = d);
        if (Sd(b) && b.u) var f = void 0 === b.o;
        else rd.test(a.location.host) ? f = !(ud.test(a.location.href) || sd.test(a.location.href)) : (f = Math.max(nd("aw", d), od(V() ? Qc() : {})), f = Math.max(nd("gb", d), od(V() ? Qc("_gac_gb", !0) : {})) > f);
        if (f) {
            if (void 0 !== b.o) return b.o;
            c = Ad(a, d || void 0);
            f = b.google_conversion_label;
            var g = Cd(f, e, b.u);
            c = X("gclgb", c) + (g ? X("mcov", g) : "");
            if (d) return b.o = c;
            d = xd(a, f, e, b.u);
            a = d.F;
            d = d.G;
            c += (a ? X("gacgb", a) : "") + (d ? X("gacmcov", d) : "");
            return b.o = c
        }
        if (d) return b = zd(a, d), X("gclaw", b);
        (b = zd(a)) && (c = X("gclaw", b));
        b = wd(a, V() ? Qc() : {}, sd);
        return c + (b ? X("gac", b) : "")
    }

    function Td(a) {
        function b(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        }
        a = a ? a.title : "";
        if (void 0 == a || "" == a) return "";
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c));) c--;
        return "&tiba=" + a.substr(0, c)
    }

    function Ud(a, b, c, d, e) {
        var f = "https://",
            g = "landing" === d.google_conversion_type ? "/extclk" : "/";
        switch (e) {
            default: return "";
            case 2:
                    case 3:
                    var h = "googleads.g.doubleclick.net/";
                var k = "pagead/viewthroughconversion/";
                break;
            case 1:
                    h = "www.google.com/";k = "pagead/1p-conversion/";
                break;
            case 6:
                    h = "www.google.com/";k = "ccm/conversion/";
                break;
            case 0:
                    h = d.google_conversion_domain || "www.googleadservices.com/";k = "pagead/conversion/";
                break;
            case 5:
                    h = d.google_conversion_domain || "www.googleadservices.com/";k = "ccm/conversion/";
                break;
            case 4:
                    h = (h = d.google_gtm_experiments) && h.apcm ? "www.google.com" : h && h.capiorig ? d.google_conversion_id + ".privacysandbox.googleadservices.com" : "www.google.com/";k = "pagead/privacysandbox/conversion/";
                break;
            case 7:
                    h = "googleads.g.doubleclick.net/",
                k = "td/rul/"
        }
        Gb && d.google_transport_url && (h = d.google_transport_url);
        "/" !== h[h.length - 1] && (h += "/");
        if (0 === h.indexOf("http://") || 0 === h.indexOf("https://")) f = "";
        f = [f, h, k, W(d.google_conversion_id), g, "?random=", W(d.google_conversion_time)].join("");
        g = X("cv", d.google_conversion_js_version);
        h = X("fst", d.google_conversion_first_time);
        k = X("num", d.google_conversion_snippets);
        var m = X("fmt", d.google_conversion_format),
            q = d.google_remarketing_only ? X("userId", d.google_user_id) : "";
        var n = d.google_tag_for_child_directed_treatment;
        n = null == n || 0 !== n && 1 !== n ? "" : X("tfcd", n);
        var p = d.google_tag_for_under_age_of_consent;
        p = null == p || 0 !== p && 1 !== p ? "" : X("tfua", p);
        var E = d.google_allow_ad_personalization_signals;
        E = !1 === E ? X("npa", 1) : !0 === E ? X("npa", 0) : "";
        var ya = d.google_restricted_data_processing;
        ya = Ib ? !0 === ya ? X("rdp",
            1) : !1 === ya ? X("rdp", 0) : "" : "";
        var fe = X("value", d.google_conversion_value),
            ge = X("currency_code", d.google_conversion_currency),
            he = X("label", d.google_conversion_label),
            ie = X("oid", d.google_conversion_order_id),
            je = X("bg", d.google_conversion_color);
        a: {
            var y = d.google_conversion_language;
            if (null != y) {
                y = y.toString();
                if (2 == y.length) {
                    y = X("hl", y);
                    break a
                }
                if (5 == y.length) {
                    y = X("hl", y.substring(0, 2)) + X("gl", y.substring(3, 5));
                    break a
                }
            }
            y = ""
        }
        var ke = X("guid", "ON"),
            le = !d.google_conversion_domain && "GooglemKTybQhCsO" in v &&
            "function" == typeof v.GooglemKTybQhCsO ? X("resp", "GooglemKTybQhCsO") : "",
            me = X("disvt", d.google_disable_viewthrough),
            ne = X("eid", Nb().join());
        var fa = d.google_conversion_date;
        var w = [];
        if (a) {
            var H = a.screen;
            H && (w.push(X("u_h", H.height)), w.push(X("u_w", H.width)), w.push(X("u_ah", H.availHeight)), w.push(X("u_aw", H.availWidth)), w.push(X("u_cd", H.colorDepth)));
            a.history && w.push(X("u_his", a.history.length))
        }
        fa && "function" == typeof fa.getTimezoneOffset && w.push(X("u_tz", -fa.getTimezoneOffset()));
        b && ("function" == typeof b.javaEnabled &&
            w.push(X("u_java", b.javaEnabled())), b.plugins && w.push(X("u_nplug", b.plugins.length)), b.mimeTypes && w.push(X("u_nmime", b.mimeTypes.length)));
        fa = w.join("");
        w = X("gtm", d.google_gtm);
        b = b && b.sendBeacon ? X("sendb", "1") : "";
        H = Vd();
        var pe = X("ig", /googleadservices\.com/.test("www.googleadservices.com") ? 1 : 0);
        var N = Pd(d.google_custom_params);
        var za = Pd();
        N = N.concat(0 < N.length && 0 < za.length ? ";" : "", za);
        N = "" == N ? "" : "&".concat("data=", encodeURIComponent(N));
        za = Rd(c, d);
        var mc = d.google_conversion_page_url,
            qe = d.google_conversion_referrer_url,
            Aa = "";
        if (c) {
            if (a.top == a) var u = 0;
            else {
                var O = a.location.ancestorOrigins;
                if (O) u = O[O.length - 1] == a.location.origin ? 1 : 2;
                else {
                    O = a.top;
                    try {
                        var B;
                        if (B = !!O && null != O.location.href) c: {
                            try {
                                Ia(O.foo);
                                B = !0;
                                break c
                            } catch (re) {}
                            B = !1
                        }
                        u = B
                    } catch (re) {
                        u = !1
                    }
                    u = u ? 1 : 2
                }
            }
            B = mc ? mc : 1 == u ? a.top.location.href : a.location.href;
            Aa += X("frm", u);
            Aa += X("url", Nd(B));
            Aa += X("ref", Nd(qe || c.referrer))
        }
        a = [g, h, k, m, q, n, p, E, ya, fe, ge, he, ie, je, y, ke, le, me, ne, fa, w, b, H, pe, N, za, Aa, Td(c), Wd(d.google_additional_params), Wd(d.google_remarketing_only ? {} : d.google_additional_conversion_params),
            "&hn=" + W("www.googleadservices.com"), Xd(a), Yd(a)
        ].join("");
        c = Mb();
        a += 0 < c.length ? "&debug_experiment_id=" + c : "";
        if (!d.google_remarketing_only && !d.google_conversion_domain) {
            c = [X("mid", d.google_conversion_merchant_id), X("fcntr", d.google_basket_feed_country), X("flng", d.google_basket_feed_language), X("dscnt", d.google_basket_discount), X("bttype", d.google_basket_transaction_type)].join("");
            if (d)
                if (u = d.google_conversion_items) {
                    B = [];
                    g = 0;
                    for (h = u.length; g < h; g++) k = u[g], m = [], k && (m.push(Qd(k.value)), m.push(Qd(k.quantity)),
                        m.push(Qd(k.item_id)), m.push(Qd(k.start_date)), m.push(Qd(k.end_date)), B.push("(" + m.join("*") + ")"));
                    u = 0 < B.length ? "&item=" + B.join("") : ""
                } else u = "";
            else u = "";
            c = [a, c, u].join("");
            a = 4E3 < c.length ? [a, X("item", "elngth")].join("") : c
        }
        f += a;
        1 === e || 6 === e ? f += [X("gcp", 1), X("sscte", 1), X("ct_cookie_present", 1)].join("") : 3 == e && (f += X("gcp", 1), f += X("ct_cookie_present", 1));
        Hb && (e = Dd(), void 0 !== e && (f += X("us_privacy", e || "error")));
        Sd(d) && (f = d.u ? f + X("gbcov", 1) : f + X("gbcov", 0));
        return f
    }

    function Zd(a, b, c, d, e, f, g) {
        return '<iframe name="' + a + '"' + (g ? ' id="' + g + '"' : "") + ' title="' + b + '" width="' + d + '" height="' + e + '"' + (c ? ' src="' + c + '"' : "") + ' frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true"' + (f ? ' style="display:none"' : "") + ' scrolling="no"></iframe>'
    }

    function $d(a) {
        return {
            ar: 1,
            bg: 1,
            cs: 1,
            da: 1,
            de: 1,
            el: 1,
            en_AU: 1,
            en_US: 1,
            en_GB: 1,
            es: 1,
            et: 1,
            fi: 1,
            fr: 1,
            hi: 1,
            hr: 1,
            hu: 1,
            id: 1,
            is: 1,
            it: 1,
            iw: 1,
            ja: 1,
            ko: 1,
            lt: 1,
            nl: 1,
            no: 1,
            pl: 1,
            pt_BR: 1,
            pt_PT: 1,
            ro: 1,
            ru: 1,
            sk: 1,
            sl: 1,
            sr: 1,
            sv: 1,
            th: 1,
            tl: 1,
            tr: 1,
            vi: 1,
            zh_CN: 1,
            zh_TW: 1
        }[a] ? a + ".html": "en_US.html"
    }

    function ae(a, b, c, d) {
        function e(h, k, m, q) {
            return '<img height="' + m + '" width="' + k + '" border="0" alt="" src="' + h + '"' + (q ? ' style="display:none"' : "") + " />"
        }
        Qb() && Vb(2);
        var f = "";
        d.google_remarketing_only && d.google_enable_display_cookie_match && !Yb && (P && M(["376635470", "376635471"], Bb, 2), f = d.google_remarketing_only && d.google_enable_display_cookie_match && !Yb && P && "376635471" == Q(2) ? Zd("google_cookie_match_frame", "Google cookie match frame", "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE", 1, 1, !0, null) : "");
        d.google_remarketing_only &&
            !d.google_conversion_domain && P && M(["759238990", "759238991"], Fb, 13);
        !d.google_remarketing_only || d.google_conversion_domain || P && ("759248991" == Q(14) || "759248990" == Q(14)) || P && M(["759248990", "759248991"], Eb, 14);
        !1 !== d.google_conversion_linker && Bd(d.google_gcl_cookie_prefix);
        b = Ud(a, b, c, d, d.google_remarketing_only ? 2 : 0);
        if (0 == d.google_conversion_format && null == d.google_conversion_domain) return '<a href="https://services.google.com/sitestats/' + ($d(d.google_conversion_language) + "?cid=" + W(d.google_conversion_id)) +
            '" target="_blank">' + e(b, 135, 27, !1) + "</a>" + f;
        if (void 0 !== d.google_conversion_snippets && 1 < d.google_conversion_snippets || 3 == d.google_conversion_format) {
            var g = b;
            null == d.google_conversion_domain && (g = 3 == d.google_conversion_format ? b : K(b, "fmt", 3));
            return be(a, c, d, g) ? f : e(g, 1, 1, !0) + f
        }
        g = null;
        !d.google_conversion_domain && be(a, c, d, b) && (g = "goog_conv_iframe", b = "");
        return Zd("google_conversion_frame", "Google conversion frame", b, 2 == d.google_conversion_format ? 200 : 300, 2 == d.google_conversion_format ? 26 : 13, !1, g) + f
    }

    function be(a, b, c, d) {
        if (c.google_conversion_domain) return !1;
        try {
            return nc(a, b, d, null)
        } catch (e) {
            return !1
        }
    }

    function ce(a) {
        if ("landing" === a.google_conversion_type || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough) return !1;
        a.google_conversion_date = new Date;
        a.google_conversion_time = a.google_conversion_date.getTime();
        a.google_conversion_snippets = "number" === typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ? a.google_conversion_snippets + 1 : 1;
        void 0 === a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time);
        a.google_conversion_js_version =
            "9";
        0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 3);
        !1 !== a.google_enable_display_cookie_match && (a.google_enable_display_cookie_match = !0);
        return !0
    }

    function de(a) {
        for (var b = 0; b < Ld.length; b++) a[Ld[b]] = null
    }

    function ee(a) {
        for (var b = {}, c = 0; c < Ld.length; c++) b[Ld[c]] = a[Ld[c]];
        for (c = 0; c < Md.length; c++) b[Md[c]] = a[Md[c]];
        return b
    }

    function Vd() {
        var a = "";
        Qb() && (a = Xb().map(function(b) {
            return b.join("-")
        }).join("_"));
        return X("li", a)
    }

    function Xd(a) {
        if (!Jb || !a.__gsaExp || !a.__gsaExp.id) return "";
        a = a.__gsaExp.id;
        if ("function" !== typeof a) return "";
        try {
            var b = Number(a());
            return isNaN(b) ? "" : X("gsaexp", b)
        } catch (c) {
            return ""
        }
    }

    function Yd(a) {
        function b(d, e) {
            null != e && c.push(d + "=" + encodeURIComponent(e))
        }
        if (!Pb()) return "";
        a = Gd(a);
        if (!a) return "";
        var c = [];
        b("&uaa", a.architecture);
        b("&uab", a.bitness);
        b("&uam", a.model);
        b("&uap", a.platform);
        b("&uapv", a.platformVersion);
        null != a.wow64 && b("&uaw", a.wow64 ? "1" : "0");
        a.fullVersionList && b("&uafvl", a.fullVersionList.map(function(d) {
            return encodeURIComponent(d.brand || "") + ";" + encodeURIComponent(d.version || "")
        }).join("|"));
        return c.join("")
    }

    function Wd(a) {
        if (!a) return "";
        var b = "",
            c;
        for (c in a) a.hasOwnProperty(c) && (b += X(c, a[c]));
        return b
    }

    function Sd(a) {
        return (a = a.google_gtm_experiments) && a.gbcov ? !0 : !1
    }

    function oe(a, b) {
        var c;
        if (c = !b.google_remarketing_only)
            if (b.google_transport_url || !P || "375603261" != Q(19) && "375603260" != Q(19)) c = !1;
            else {
                b: {
                    if (!Kd && !gc()) {
                        if (c = r("www.googleadservices.com", "endsWith").call("www.googleadservices.com", "google.com") ? "" : "Aztnbi8n1mx+fiNBvCifn6XCZv+TIzPcAuIDgq7i8sAG5PMj9ZN7lufengcGK3nHLCS5JfXzwgDSY+MDBQHuWAoAAACKeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2ODA2NTI3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", a.head) {
                            var d = Ab("META");
                            a.head.appendChild(d);
                            d.httpEquiv = "origin-trial";
                            d.content = c;
                            a = d
                        } else a = null;
                        if (!a) {
                            a = !1;
                            break b
                        }
                        Kd = !0
                    }
                    a = gc()
                }
                c = a
            }
        c && (a = b.google_additional_conversion_params || {}, c = b.google_gtm_experiments,
            a.capi = c && c.apcm ? "2" : "1", b.google_additional_conversion_params = a)
    };
    var se = !1,
        te = document.currentScript && document.currentScript.src || "";

    function ue(a, b, c) {
        try {
            if (!se && (se = !0, !c.google_gtm)) {
                var d = void 0,
                    e = void 0,
                    f = rb(a.location.href, "gtm_debug");
                ve(f) && (d = 2);
                d || 0 !== b.referrer.indexOf("https://tagassistant.google.com/") || (d = 3);
                !d && 0 <= ua(b.cookie.split("; "), "__TAG_ASSISTANT=x") && (d = 4);
                d || (e = b.documentElement.getAttribute("data-tag-assistant-present"), ve(e) && (d = 5));
                if (d) {
                    var g = "AW-" + (c.google_conversion_id || "");
                    if (!a["google.tagmanager.debugui2.queue"]) {
                        a["google.tagmanager.debugui2.queue"] = [];
                        var h = Pa(sa(new A(qa, "https://www.googletagmanager.com/debug/bootstrap")));
                        c = {
                            id: g,
                            src: "LEGACY",
                            cond: d
                        };
                        var k = Oa.exec(Na(h).toString()),
                            m = k[3] || "";
                        var q = Pa(k[1] + Qa("?", k[2] || "", c) + Qa("#", m));
                        var n = Ab("SCRIPT", b);
                        n.src = Na(q);
                        tb(n);
                        var p = b.getElementsByTagName("script")[0];
                        p && p.parentNode && p.parentNode.insertBefore(n, p)
                    }
                    a["google.tagmanager.debugui2.queue"].push({
                        messageType: "LEGACY_CONTAINER_STARTING",
                        data: {
                            id: g,
                            scriptSource: te
                        }
                    })
                }
            }
        } catch (E) {}
    }

    function ve(a) {
        if (null == a || 0 === a.length) return !1;
        a = Number(a);
        var b = Date.now();
        return a < b + 3E5 && a > b - 9E5
    };

    function we(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function xe(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function ye(a, b) {
        if (3 == we(b)) return !1;
        a();
        return !0
    }

    function ze(a, b) {
        if (!ye(a, b)) {
            var c = !1,
                d = xe(b),
                e = function() {
                    !c && ye(a, b) && (c = !0, b.removeEventListener && b.removeEventListener(d, e, !1))
                };
            d && b.addEventListener && b.addEventListener(d, e, !1)
        }
    };

    function Ae(a) {
        var b = r(Object, "assign").call(Object, {}, a);
        a = a.id;
        b = (delete b.id, b);
        if (r(Object, "keys").call(Object, b).length) throw Error("Invalid attribute(s): " + r(Object, "keys").call(Object, b));
        a = {
            id: a
        };
        if (!kb.test("span")) throw Error("");
        if ("SPAN" in mb) throw Error("");
        b = void 0;
        var c = "";
        if (a)
            for (k in a)
                if (Object.prototype.hasOwnProperty.call(a, k)) {
                    if (!kb.test(k)) throw Error("");
                    var d = a[k];
                    if (null != d) {
                        var e = void 0;
                        var f = k;
                        if (d instanceof A) d = sa(d);
                        else if ("style" == f.toLowerCase()) {
                            var g = typeof d;
                            g = "object" == g && null != d || "function" == g;
                            if (!g) throw Error("");
                            if (!(d instanceof F)) {
                                g = "";
                                for (e in d)
                                    if (Object.prototype.hasOwnProperty.call(d, e)) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test(e)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + e);
                                        var h = d[e];
                                        null != h && (h = Array.isArray(h) ? h.map(Za).join(" ") : Za(h), g += e + ":" + h + ";")
                                    }
                                d = g ? new F(g, Xa) : Ya
                            }
                            d = d instanceof F && d.constructor === F ? d.h : "type_error:SafeStyle"
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in lb)
                                if (d instanceof C) d = Na(d).toString();
                                else if (d instanceof D) d = Sa(d);
                            else if ("string" === typeof d) d = (Va(d) || Wa).g();
                            else throw Error("");
                        }
                        d.j && (d = d.g());
                        e = f + '="' + wa(String(d)) + '"';
                        c += " " + e
                    }
                }
        var k = "<span" + c;
        null == b ? b = [] : Array.isArray(b) || (b = [b]);
        !0 === Ja.span ? k += ">" : (b = jb(b), k += ">" + I(b).toString() + "</span>");
        return J(k)
    };
    P = new function() {
        var a = [];
        var b = 0,
            c;
        for (c in Ob) a[b++] = Ob[c];
        a = void 0 === a ? [] : a;
        this.h = {};
        this.g = {};
        for (b = 0; b < a.length; ++b) this.g[a[b]] = ""
    };
    M(["466465925", "466465926"], Db, 20);
    Pb() && Id();
    P && M(["592230570", "592230571"], Cb, 16);
    Qb() && (Vb(1), Wb());

    function Be(a, b, c) {
        function d(m, q) {
            var n = new Image;
            n.onload = m;
            n.src = q
        }

        function e() {
            --f;
            if (0 >= f) {
                var m = ic(a, !1),
                    q = m[b];
                q && (delete m[b], (m = q[0]) && m.call && m())
            }
        }
        var f = c.length + 1;
        if (2 == c.length) {
            var g = c[0],
                h = c[1];
            0 <= pb(g, 0, "rmt_tld", g.search(qb)) && 0 <= pb(g, 0, "ipr", g.search(qb)) && !h.match(nb)[6] && (h += ob(g), c[1] = K(h, "rmt_tld", "1"))
        }
        for (g = 0; g < c.length; g++) {
            h = c[g];
            var k = rb(h, "fmt");
            switch (parseInt(k, 10)) {
                case 1:
                case 2:
                    (k = a.document.getElementById("goog_conv_iframe")) && !k.src ? fc(h, e, k) : d(e, h);
                    break;
                case 4:
                    nc(a,
                        a.document, h, e);
                    break;
                case 5:
                    if (a.navigator && a.navigator.sendBeacon)
                        if (a.navigator.sendBeacon(h, "")) {
                            e();
                            break
                        } else h = K(h, "sendb", 2);
                    h = K(h, "fmt", 3);
                default:
                    d(e, h)
            }
        }
        e()
    }
    var Ce = ["GooglemKTybQhCsO"],
        Y = v;
    Ce[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + Ce[0]);
    for (var Z; Ce.length && (Z = Ce.shift());) Ce.length || void 0 === Be ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = Be;
    (function(a, b, c) {
        if (a) {
            ue(a, c, a);
            try {
                if (ce(a)) {
                    var d = ee(a);
                    P && M(["375603260", "375603261"], Kb ? 1 : 0, 19);
                    if (3 == we(c)) {
                        var e = "google_conversion_" + Math.floor(1E9 * Math.random());
                        ub(c, Ae({
                            id: e
                        }));
                        ze(function() {
                                try {
                                    oe(c, d);
                                    var f = c.getElementById(e);
                                    if (f) {
                                        var g = J(ae(a, b, c, d));
                                        if (void 0 !== f.tagName) {
                                            if ("script" === f.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
                                            if ("style" === f.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
                                        }
                                        f.innerHTML = I(g)
                                    }
                                } catch (h) {}
                            },
                            c)
                    } else oe(c, d), ub(c, J(ae(a, b, c, d)))
                }
            } catch (f) {}
            de(a)
        }
    })(window, navigator, document);
}).call(this);