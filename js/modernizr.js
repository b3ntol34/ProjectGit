window.Modernizr = function (f, e, v) {
    function p(b, a) {
        return typeof b === a
    }
    function x(b, a) {
        for (var d in b) {
            var m = b[d];
            if (!~ ("" + m).indexOf("-") && k[m] !== v) return a == "pfx" ? m : !0
        }
        return !1
    }
    function o(b, a, d) {
        var m = b.charAt(0).toUpperCase() + b.slice(1),
            c = (b + " " + y.join(m + " ") + m).split(" ");
        if (p(a, "string") || p(a, "undefined")) a = x(c, a);
        else {
            c = (b + " " + z.join(m + " ") + m).split(" ");
            a: {
                var b = c,
                    e;
                for (e in b) if (m = a[b[e]], m !== v) {
                    a = d === !1 ? b[e] : p(m, "function") ? m.bind(d || a) : m;
                    break a
                }
                a = !1
            }
        }
        return a
    }
    function K() {
        g.input = function (b) {
            for (var a = 0, d = b.length; a < d; a++) A[b[a]] = b[a] in i;
            return A.list && (A.list = !! e.createElement("datalist") && !! f.HTMLDataListElement), A
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        g.inputtypes = function (b) {
            for (var a = 0, d, m, c, g = b.length; a < g; a++) i.setAttribute("type", m = b[a]), d = i.type !== "text", d && (i.value = r, i.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(m) && i.style.WebkitAppearance !== v ? (s.appendChild(i), c = e.defaultView, d = c.getComputedStyle && c.getComputedStyle(i,
            null).WebkitAppearance !== "textfield" && i.offsetHeight !== 0, s.removeChild(i)) : /^(search|tel)$/.test(m) || (/^(url|email)$/.test(m) ? d = i.checkValidity && i.checkValidity() === !1 : d = i.value != r)), J[b[a]] = !! d;
            return J
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var g = {}, s = e.documentElement,
        c = e.createElement("modernizr"),
        k = c.style,
        i = e.createElement("input"),
        r = ":)",
        t = {}.toString,
        w = " -webkit- -moz- -o- -ms- ".split(" "),
        y = "Webkit Moz O ms".split(" "),
        z = "webkit moz o ms".split(" "),
        c = {}, J = {}, A = {}, C = [],
        D = C.slice,
        E, u = function (b, a, d, m) {
            var c, g, f, j = e.createElement("div"),
                q = e.body,
                l = q ? q : e.createElement("body");
            if (parseInt(d, 10)) for (; d--;) f = e.createElement("div"), f.id = m ? m[d] : "modernizr" + (d + 1), j.appendChild(f);
            return c = ['&#173;<style id="smodernizr">', b, "</style>"].join(""), j.id = "modernizr", (q ? j : l).innerHTML += c, l.appendChild(j), q || (l.style.background = "", s.appendChild(l)), g = a(j, b), q ? j.parentNode.removeChild(j) : l.parentNode.removeChild(l), !! g
        }, F = function () {
            var b = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return function (a, d) {
                d = d || e.createElement(b[a] || "div");
                a = "on" + a;
                var m = a in d;
                return m || (d.setAttribute || (d = e.createElement("div")), d.setAttribute && d.removeAttribute && (d.setAttribute(a, ""), m = p(d[a], "function"), p(d[a], "undefined") || (d[a] = v), d.removeAttribute(a))), m
            }
        }(),
        n = {}.hasOwnProperty,
        B;
    !p(n, "undefined") && !p(n.call, "undefined") ? B = function (b, a) {
        return n.call(b, a)
    } : B = function (b, a) {
        return a in b && p(b.constructor.prototype[a], "undefined")
    };
    Function.prototype.bind || (Function.prototype.bind = function (b) {
        var a = this;
        if (typeof a != "function") throw new TypeError;
        var d = D.call(arguments, 1),
            m = function () {
                if (this instanceof m) {
                    var c = function () {};
                    c.prototype = a.prototype;
                    var c = new c,
                        e = a.apply(c, d.concat(D.call(arguments)));
                    return Object(e) === e ? e : c
                }
                return a.apply(b, d.concat(D.call(arguments)))
            };
        return m
    });
    c.flexbox = function () {
        return o("flexWrap")
    };
    c.canvas = function () {
        var b = e.createElement("canvas");
        return !!b.getContext && !! b.getContext("2d")
    };
    c.canvastext = function () {
        return !!g.canvas && !! p(e.createElement("canvas").getContext("2d").fillText, "function")
    };
    c.webgl = function () {
        return !!f.WebGLRenderingContext
    };
    c.touch = function () {
        var b;
        return "ontouchstart" in f || f.DocumentTouch && e instanceof DocumentTouch ? b = !0 : u(["@media (", w.join("touch-enabled),("), "modernizr){#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
            b = a.offsetTop === 9
        }), b
    };
    c.geolocation = function () {
        return "geolocation" in navigator
    };
    c.postmessage = function () {
        return !!f.postMessage
    };
    c.websqldatabase = function () {
        return !!f.openDatabase
    };
    c.indexedDB = function () {
        return !!o("indexedDB", f)
    };
    c.hashchange = function () {
        return F("hashchange", f) && (e.documentMode === v || e.documentMode > 7)
    };
    c.history = function () {
        return !!f.history && !! history.pushState
    };
    c.draganddrop = function () {
        var b = e.createElement("div");
        return "draggable" in b || "ondragstart" in b && "ondrop" in b
    };
    c.websockets = function () {
        return "WebSocket" in f || "MozWebSocket" in f
    };
    c.rgba = function () {
        k.cssText = "background-color:rgba(150,255,150,.5)";
        return !!~ ("" + k.backgroundColor).indexOf("rgba")
    };
    c.hsla = function () {
        k.cssText = "background-color:hsla(120,40%,100%,.5)";
        return !!~ ("" + k.backgroundColor).indexOf("rgba") || !! ~ ("" + k.backgroundColor).indexOf("hsla")
    };
    c.multiplebgs = function () {
        k.cssText = "background:url(https://),url(https://),red url(https://)";
        return /(url\s*\(.*?){3}/.test(k.background)
    };
    c.backgroundsize = function () {
        return o("backgroundSize")
    };
    c.borderimage = function () {
        return o("borderImage")
    };
    c.borderradius = function () {
        return o("borderRadius")
    };
    c.boxshadow = function () {
        return o("boxShadow")
    };
    c.textshadow = function () {
        return e.createElement("div").style.textShadow === ""
    };
    c.opacity = function () {
        var b = w.join("opacity:.55;") + "";
        k.cssText = b;
        return /^0.55$/.test(k.opacity)
    };
    c.cssanimations = function () {
        return o("animationName")
    };
    c.csscolumns = function () {
        return o("columnCount")
    };
    c.cssgradients = function () {
        var b = ("background-image:" + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:") + w.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, - 17);
        k.cssText = b;
        return !!~ ("" + k.backgroundImage).indexOf("gradient")
    };
    c.cssreflections = function () {
        return o("boxReflect")
    };
    c.csstransforms = function () {
        return !!o("transform")
    };
    c.csstransforms3d = function () {
        var b = !! o("perspective");
        return b && "webkitPerspective" in s.style && u("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (a) {
            b = a.offsetLeft === 9 && a.offsetHeight === 3
        }), b
    };
    c.csstransitions = function () {
        return o("transition")
    };
    c.fontface = function () {
        var b;
        return u('@font-face {font-family:"font";src:url("https://")}', function (a, d) {
            var c = e.getElementById("smodernizr"),
                c = (c = c.sheet || c.styleSheet) ? c.cssRules && c.cssRules[0] ? c.cssRules[0].cssText : c.cssText || "" : "";
            b = /src/i.test(c) && c.indexOf(d.split(" ")[0]) === 0
        }), b
    };
    c.generatedcontent = function () {
        var b;
        return u(['#modernizr:after{content:"', r, '";visibility:hidden}'].join(""), function (a) {
            b = a.offsetHeight >= 1
        }), b
    };
    c.video = function () {
        var b = e.createElement("video"),
            a = !1;
        try {
            if (a = !! b.canPlayType) a = new Boolean(a),
            a.ogg = b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), a.h264 = b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), a.webm = b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (d) {}
        return a
    };
    c.audio = function () {
        var b = e.createElement("audio"),
            a = !1;
        try {
            if (a = !! b.canPlayType) a = new Boolean(a), a.ogg = b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), a.mp3 = b.canPlayType("audio/mpeg;").replace(/^no$/, ""), a.wav = b.canPlayType('audio/wav; codecs="1"').replace(/^no$/,
                ""), a.m4a = (b.canPlayType("audio/x-m4a;") || b.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (d) {}
        return a
    };
    c.localstorage = function () {
        try {
            return localStorage.setItem("modernizr", "modernizr"), localStorage.removeItem("modernizr"), !0
        } catch (b) {
            return !1
        }
    };
    c.sessionstorage = function () {
        try {
            return sessionStorage.setItem("modernizr", "modernizr"), sessionStorage.removeItem("modernizr"), !0
        } catch (b) {
            return !1
        }
    };
    c.webworkers = function () {
        return !!f.Worker
    };
    c.applicationcache = function () {
        return !!f.applicationCache
    };
    c.svg = function () {
        return !!e.createElementNS && !! e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
    };
    c.inlinesvg = function () {
        var b = e.createElement("div");
        return b.innerHTML = "<svg/>", (b.firstChild && b.firstChild.namespaceURI) == "http://www.w3.org/2000/svg"
    };
    c.smil = function () {
        return !!e.createElementNS && /SVGAnimate/.test(t.call(e.createElementNS("http://www.w3.org/2000/svg", "animate")))
    };
    c.svgclippaths = function () {
        return !!e.createElementNS && /SVGClipPath/.test(t.call(e.createElementNS("http://www.w3.org/2000/svg",
            "clipPath")))
    };
    for (var G in c) B(c, G) && (E = G.toLowerCase(), g[E] = c[G](), C.push((g[E] ? "" : "no-") + E));
    g.input || K();
    g.addTest = function (b, a) {
        if (typeof b == "object") for (var d in b) B(b, d) && g.addTest(d, b[d]);
        else {
            b = b.toLowerCase();
            if (g[b] !== v) return g;
            a = typeof a == "function" ? a() : a;
            s.className += " " + (a ? "" : "no-") + b;
            g[b] = a
        }
        return g
    };
    k.cssText = "";
    return c = i = null,
    function (b, a) {
        function d() {
            var a = k.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function c(a) {
            var b = h[a[o]];
            return b || (b = {}, H++, a[o] = H, h[H] = b), b
        }
        function e(b,
        d, h) {
            d || (d = a);
            if (I) return d.createElement(b);
            h || (h = c(d));
            var g;
            return h.cache[b] ? g = h.cache[b].cloneNode() : l.test(b) ? g = (h.cache[b] = h.createElem(b)).cloneNode() : g = h.createElem(b), g.canHaveChildren && !q.test(b) ? h.frag.appendChild(g) : g
        }
        function g(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag());
            a.createElement = function (d) {
                return k.shivMethods ? e(d, a, b) : b.createElem(d)
            };
            a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/\w+/g, function (a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(k, b.frag)
        }
        function f(b) {
            b || (b = a);
            var d = c(b);
            if (k.shivCSS && !i && !d.hasCSS) {
                var e, h = b;
                e = h.createElement("p");
                h = h.getElementsByTagName("head")[0] || h.documentElement;
                e = (e.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>", h.insertBefore(e.lastChild, h.firstChild));
                d.hasCSS = !! e
            }
            return I || g(b, d), b
        }
        var j = b.html5 || {}, q = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            l = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
            i, o = "_html5shiv",
            H = 0,
            h = {}, I;
        (function () {
            try {
                var b = a.createElement("a");
                b.innerHTML = "<xyz></xyz>";
                i = "hidden" in b;
                I = b.childNodes.length == 1 || function () {
                    a.createElement("a");
                    var b = a.createDocumentFragment();
                    return typeof b.cloneNode ==
                        "undefined" || typeof b.createDocumentFragment == "undefined" || typeof b.createElement == "undefined"
                }()
            } catch (d) {
                i = !0, I = !0
            }
        })();
        var k = {
            elements: j.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: j.shivCSS !== !1,
            supportsUnknownElements: I,
            shivMethods: j.shivMethods !== !1,
            type: "default",
            shivDocument: f,
            createElement: e,
            createDocumentFragment: function (b, e) {
                b || (b = a);
                if (I) return b.createDocumentFragment();
                for (var e = e || c(b), h = e.frag.cloneNode(), g = 0, l = d(), j = l.length; g < j; g++) h.createElement(l[g]);
                return h
            }
        };
        b.html5 = k;
        f(a)
    }(this, e), g._version = "2.6.1", g._prefixes = w, g._domPrefixes = z, g._cssomPrefixes = y, g.mq = function (b) {
        var a = f.matchMedia || f.msMatchMedia;
        if (a) return a(b).matches;
        var d;
        return u("@media " + b + " { #modernizr { position: absolute; } }", function (a) {
            d = (f.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle).position == "absolute"
        }), d
    }, g.hasEvent = F, g.testProp = function (b) {
        return x([b])
    }, g.testAllProps = o, g.testStyles = u, g.prefixed = function (b, a, d) {
        return a ? o(b, a, d) : o(b, "pfx")
    }, s.className = s.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + C.join(" ")), g
}(this, this.document);
(function (f, e, v) {
    function p(a) {
        return "[object Function]" == w.call(a)
    }
    function x(a) {
        return "string" == typeof a
    }
    function o() {}
    function K(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function g() {
        var a = y.shift();
        z = 1;
        a ? a.t ? r(function () {
            ("c" == a.t ? b.injectCss : b.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), g()) : z = 0
    }
    function s(a, d, c, f, i, o, j) {
        function q(b) {
            if (!k && K(l.readyState) && (H.r = k = 1, !z && g(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && r(function () {
                    C.removeChild(l)
                }, 50);
                for (var c in n[d]) n[d].hasOwnProperty(c) && n[d][c].onload()
            }
        }
        var j = j || b.errorTimeout,
            l = e.createElement(a),
            k = 0,
            p = 0,
            H = {
                t: c,
                s: d,
                e: i,
                a: o,
                x: j
            };
        1 === n[d] && (p = 1, n[d] = []);
        "object" == a ? l.data = d : (l.src = d, l.type = a);
        l.width = l.height = "0";
        l.onerror = l.onload = l.onreadystatechange = function () {
            q.call(this, p)
        };
        y.splice(f, 0, H);
        "img" != a && (p || 2 === n[d] ? (C.insertBefore(l, A ? null : t), r(q, j)) : n[d].push(l))
    }
    function c(a, b, c, e, f) {
        return z = 0, b = b || "j", x(a) ? s("c" == b ? E : D, a, b, this.i++, c, e, f) : (y.splice(this.i++, 0, a), 1 == y.length && g()), this
    }
    function k() {
        var a = b;
        return a.loader = {
            load: c,
            i: 0
        }, a
    }
    var i = e.documentElement,
        r = f.setTimeout,
        t = e.getElementsByTagName("script")[0],
        w = {}.toString,
        y = [],
        z = 0,
        J = "MozAppearance" in i.style,
        A = J && !! e.createRange().compareNode,
        C = A ? i : t.parentNode,
        i = f.opera && "[object Opera]" == w.call(f.opera),
        i = !! e.attachEvent && !i,
        D = J ? "object" : i ? "script" : "img",
        E = i ? "script" : D,
        u = Array.isArray || function (a) {
            return "[object Array]" == w.call(a)
        }, F = [],
        n = {}, B = {
            timeout: function (a, b) {
                return b.length && (a.timeout = b[0]), a
            }
        }, G, b;
    b = function (a) {
        function c(b) {
            var b = b.split("!"),
                a = F.length,
                d = b.pop(),
                e = b.length,
                d = {
                    url: d,
                    origUrl: d,
                    prefixes: b
                }, g, h, f;
            for (h = 0; h < e; h++) f = b[h].split("="), (g = B[f.shift()]) && (d = g(d, f));
            for (h = 0; h < a; h++) d = F[h](d);
            return d
        }
        function e(b, a, g, f, i) {
            var h = c(b),
                j = h.autoCallback;
            h.url.split(".").pop().split("?").shift();
            h.bypass || (a && (a = p(a) ? a : a[b] || a[f] || a[b.split("/").pop().split("?")[0]]), h.instead ? h.instead(b, a, g, f, i) : (n[h.url] ? h.noexec = !0 : n[h.url] = 1, g.load(h.url, h.forceCSS || !h.forceJS && "css" == h.url.split(".").pop().split("?").shift() ? "c" : v, h.noexec, h.attrs, h.timeout), (p(a) || p(j)) && g.load(function () {
                k();
                a && a(h.origUrl, i, f);
                j && j(h.origUrl, i, f);
                n[h.url] = 2
            })))
        }
        function g(a, b) {
            function d(a, g) {
                if (a) if (x(a)) g || (h = function () {
                    var a = [].slice.call(arguments);
                    i.apply(this, a);
                    j()
                }), e(a, h, b, 0, c);
                else {
                    if (Object(a) === a) for (n in k = function () {
                        var b = 0,
                            d;
                        for (d in a) a.hasOwnProperty(d) && b++;
                        return b
                    }(), a) a.hasOwnProperty(n) && (!g && !--k && (p(h) ? h = function () {
                        var a = [].slice.call(arguments);
                        i.apply(this, a);
                        j()
                    } : h[n] = function (a) {
                        return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this,
                            b);
                            j()
                        }
                    }(i[n])), e(a[n], h, b, n, c))
                } else !g && j()
            }
            var c = !! a.test,
                f = a.load || a.both,
                h = a.callback || o,
                i = h,
                j = a.complete || o,
                k, n;
            d(c ? a.yep : a.nope, !! f);
            f && d(f)
        }
        var f, i, j = this.yepnope.loader;
        if (x(a)) e(a, 0, j, 0);
        else if (u(a)) for (f = 0; f < a.length; f++) i = a[f], x(i) ? e(i, 0, j, 0) : u(i) ? b(i) : Object(i) === i && g(i, j);
        else Object(a) === a && g(a, j)
    };
    b.addPrefix = function (a, b) {
        B[a] = b
    };
    b.addFilter = function (a) {
        F.push(a)
    };
    b.errorTimeout = 1E4;
    null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded",
    G = function () {
        e.removeEventListener("DOMContentLoaded", G, 0);
        e.readyState = "complete"
    }, 0));
    f.yepnope = k();
    f.yepnope.executeStack = g;
    f.yepnope.injectJs = function (a, d, c, f, i, k) {
        var j = e.createElement("script"),
            n, l, f = f || b.errorTimeout;
        j.src = a;
        for (l in c) j.setAttribute(l, c[l]);
        d = k ? g : d || o;
        j.onreadystatechange = j.onload = function () {
            !n && K(j.readyState) && (n = 1, d(), j.onload = j.onreadystatechange = null)
        };
        r(function () {
            n || (n = 1, d(1))
        }, f);
        i ? j.onload() : t.parentNode.insertBefore(j, t)
    };
    f.yepnope.injectCss = function (a, b, c, f, i, k) {
        var f = e.createElement("link"),
            j, b = k ? g : b || o;
        f.href = a;
        f.rel = "stylesheet";
        f.type = "text/css";
        for (j in c) f.setAttribute(j, c[j]);
        i || (t.parentNode.insertBefore(f, t), r(b, 0))
    }
})(this, document);
Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};