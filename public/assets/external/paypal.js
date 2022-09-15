/*! For license information please see output.js.LICENSE.txt */
!(function (e, n) {
    for (var t in n) e[t] = n[t];
})(
    window,
    (function (e) {
        var n = {};
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = (n[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
        }
        return (
            (t.m = e),
                (t.c = n),
                (t.d = function (e, n, r) {
                    t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
                }),
                (t.r = function (e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
                }),
                (t.t = function (e, n) {
                    if ((1 & n && (e = t(e)), 8 & n)) return e;
                    if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if ((t.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e))
                        for (var o in e)
                            t.d(
                                r,
                                o,
                                function (n) {
                                    return e[n];
                                }.bind(null, o)
                            );
                    return r;
                }),
                (t.n = function (e) {
                    var n =
                        e && e.__esModule
                            ? function () {
                                return e.default;
                            }
                            : function () {
                                return e;
                            };
                    return t.d(n, "a", n), n;
                }),
                (t.o = function (e, n) {
                    return {}.hasOwnProperty.call(e, n);
                }),
                (t.p = ""),
                t((t.s = 14))
        );
    })([
        function (e, n, t) {
            "use strict";
            e.exports = function (e) {
                var n = [];
                return (
                    (n.toString = function () {
                        return this.map(function (n) {
                            var t = (function (e, n) {
                                var t,
                                    r,
                                    o = e[1] || "",
                                    i = e[3];
                                if (!i) return o;
                                if (n && "function" == typeof btoa) {
                                    var a = ((t = btoa(unescape(encodeURIComponent(JSON.stringify(i))))), (r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t)), "/*# ".concat(r, " */")),
                                        u = i.sources.map(function (e) {
                                            return "/*# sourceURL=".concat(i.sourceRoot || "").concat(e, " */");
                                        });
                                    return [o].concat(u).concat([a]).join("\n");
                                }
                                return [o].join("\n");
                            })(n, e);
                            return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
                        }).join("");
                    }),
                        (n.i = function (e, t, r) {
                            "string" == typeof e && (e = [[null, e, ""]]);
                            var o = {};
                            if (r)
                                for (var i = 0; i < this.length; i++) {
                                    var a = this[i][0];
                                    null != a && (o[a] = !0);
                                }
                            for (var u = 0; u < e.length; u++) {
                                var l = [].concat(e[u]);
                                (r && o[l[0]]) || (t && (l[2] = l[2] ? "".concat(t, " and ").concat(l[2]) : t), n.push(l));
                            }
                        }),
                        n
                );
            };
        },
        function (e, n, t) {
            "use strict";
            var r = {};
            function o(e) {
                e.forEach(function (e) {
                    if (--r[e] <= 0) {
                        var n = document.getElementById(e);
                        n && n.parentNode.removeChild(n);
                    }
                });
            }
            e.exports = function (e, n) {
                for (var t, i = void 0 === n ? {} : n, a = i.replace, u = void 0 !== a && a, l = i.prepend, c = void 0 !== l && l, s = i.prefix, d = void 0 === s ? "s" : s, f = [], p = 0; p < e.length; p++) {
                    var h = e[p],
                        m = h[1],
                        g = h[2],
                        y = h[3],
                        v = "" + d + h[0] + "-" + p;
                    if ((f.push(v), !r[v] || u)) {
                        r[v] = 1;
                        var w = document.getElementById(v),
                            b = !1;
                        w || ((b = !0), (w = document.createElement("style")).setAttribute("type", "text/css"), (w.id = v), g && w.setAttribute("media", g));
                        var C = m;
                        y &&
                        "function" == typeof btoa &&
                        ((C +=
                            "\n/*# sourceMappingURL=data:application/json;base64," +
                            ((t = JSON.stringify(y)),
                            btoa(
                                encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function (e, n) {
                                    return String.fromCharCode("0x" + n);
                                })
                            ) + "*/")),
                            (C += "\n/*# sourceURL=" + y.file + "?" + v + "*/")),
                            "textContent" in w ? (w.textContent = C) : (w.styleSheet.cssText = C),
                        b && (c ? document.head.insertBefore(w, document.head.childNodes[0]) : document.head.appendChild(w));
                    } else r[v]++;
                }
                return o.bind(null, f);
            };
        },
        function (e, n, t) {
            var r = t(9),
                o = t(1),
                i = "string" == typeof r ? [[e.i, r, ""]] : r;
            ((n = e.exports = r.locals || {})._getContent = function () {
                return i;
            }),
                (n._getCss = function () {
                    return "" + r;
                }),
                (n._insertCss = function (e) {
                    return o(i, e);
                });
        },
        function (e, n, t) {
            var r = t(10),
                o = t(1),
                i = "string" == typeof r ? [[e.i, r, ""]] : r;
            ((n = e.exports = r.locals || {})._getContent = function () {
                return i;
            }),
                (n._getCss = function () {
                    return "" + r;
                }),
                (n._insertCss = function (e) {
                    return o(i, e);
                });
        },
        function (e, n, t) {
            var r = t(8),
                o = t(1),
                i = "string" == typeof r ? [[e.i, r, ""]] : r;
            ((n = e.exports = r.locals || {})._getContent = function () {
                return i;
            }),
                (n._getCss = function () {
                    return "" + r;
                }),
                (n._insertCss = function (e) {
                    return o(i, e);
                });
        },
        function (e, n, t) {
            var r = t(11),
                o = t(1),
                i = "string" == typeof r ? [[e.i, r, ""]] : r;
            ((n = e.exports = r.locals || {})._getContent = function () {
                return i;
            }),
                (n._getCss = function () {
                    return "" + r;
                }),
                (n._insertCss = function (e) {
                    return o(i, e);
                });
        },
        function (e, n, t) {
            var r = t(12),
                o = t(1),
                i = "string" == typeof r ? [[e.i, r, ""]] : r;
            ((n = e.exports = r.locals || {})._getContent = function () {
                return i;
            }),
                (n._getCss = function () {
                    return "" + r;
                }),
                (n._insertCss = function (e) {
                    return o(i, e);
                });
        },
        function (e, n, t) {
            var r = t(13),
                o = t(1),
                i = "string" == typeof r ? [[e.i, r, ""]] : r;
            ((n = e.exports = r.locals || {})._getContent = function () {
                return i;
            }),
                (n._getCss = function () {
                    return "" + r;
                }),
                (n._insertCss = function (e) {
                    return o(i, e);
                });
        },
        function (e, n, t) {
            (n = t(0)(!1)).push([
                e.i,
                ".placeholder[data-v-45d99f68]{display:inline-block;color:rgba(0,0,0,0);background:#fff;opacity:.15;border-radius:2px;animation:1s loading-placeholder-data-v-45d99f68 ease-in-out infinite;position:relative;top:10%;height:80%}.placeholder.color-black[data-v-45d99f68]{background:#000}.placeholder.color-white[data-v-45d99f68]{background:#fff}@keyframes loading-placeholder-data-v-45d99f68{0%{opacity:.15}50%{opacity:.3}100%{opacity:.15}}",
                "",
            ]),
                (e.exports = n);
        },
        function (e, n, t) {
            (n = t(0)(!1)).push([
                e.i,
                ".wallet-label[data-v-c0b7cb6d]{display:block;height:100%;text-align:center}.wallet-label *[data-v-c0b7cb6d]{display:inline-block;vertical-align:middle;height:100%}.wallet-label .divider[data-v-c0b7cb6d]{margin:0 5px;opacity:.2}.wallet-label .paypal-wordmark[data-v-c0b7cb6d]{display:none}.wallet-label .card-art[data-v-c0b7cb6d]{border-radius:3px}.wallet-label .label[data-v-c0b7cb6d]{max-width:40%}.wallet-label .label .limit[data-v-c0b7cb6d]{display:block;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 249px){.wallet-label .paypal-mark[data-v-c0b7cb6d],.wallet-label .paypal-wordmark[data-v-c0b7cb6d]{display:inline-block}.wallet-label .label[data-v-c0b7cb6d],.wallet-label .divider[data-v-c0b7cb6d],.wallet-label .card-art[data-v-c0b7cb6d],.wallet-label .pay-label[data-v-c0b7cb6d],.wallet-label .logo[data-v-c0b7cb6d]{display:none}}.wallet-label-new[data-v-c0b7cb6d]{display:flex;height:100%;width:100%;text-align:left}.wallet-label-new *[data-v-c0b7cb6d]{display:inline-block;vertical-align:top;height:100%}.wallet-label-new .paypal-wordmark[data-v-c0b7cb6d]{display:none}.wallet-label-new .card-art[data-v-c0b7cb6d]{border-radius:3px}.wallet-label-new .logo[data-v-c0b7cb6d]{margin-left:auto}@media only screen and (max-width: 150px){.wallet-label-new[data-v-c0b7cb6d]{text-align:center;display:inline-block}.wallet-label-new .logo[data-v-c0b7cb6d]{display:none}.wallet-label-new .pay-label[data-v-c0b7cb6d]{display:none}}",
                "",
            ]),
                (e.exports = n);
        },
        function (e, n, t) {
            (n = t(0)(!1)).push([
                e.i,
                ".app-label[data-v-2b6020ba]{margin-left:.25rem}.wallet-label-venmo[data-v-2b6020ba]{height:100%;width:100%;text-align:center}.wallet-label-venmo .divider[data-v-2b6020ba]{margin:0 5px;opacity:.2}.wallet-label-venmo *[data-v-2b6020ba]{display:inline-block;vertical-align:top;height:100%}.wallet-label-venmo .logo[data-v-2b6020ba]{margin-left:auto}.wallet-label-venmo .label[data-v-2b6020ba]{max-width:40%}.wallet-label-venmo .label .limit[data-v-2b6020ba]{display:block;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width: 150px){.wallet-label-venmo[data-v-2b6020ba]{text-align:center;display:inline-block}.wallet-label-venmo .logo[data-v-2b6020ba]{display:none}}",
                "",
            ]),
                (e.exports = n);
        },
        function (e, n, t) {
            (n = t(0)(!1)).push([e.i, ".paypal-mark .paypal-logo-applepay[data-v-1d3522d7]{height:30px}", ""]), (e.exports = n);
        },
        function (e, n, t) {
            (n = t(0)(!1)).push([e.i, "", ""]), (e.exports = n);
        },
        function (e, n, t) {
            (n = t(0)(!1)).push([
                e.i,
                ".menu-button[data-v-4bd3ab29]{position:relative;display:inline-block;margin-left:2px;cursor:pointer}.menu-button[data-v-4bd3ab29]:focus{outline:none;box-shadow:0 0 0 2px rgba(50,50,50,.9) inset}.menu-button img[data-v-4bd3ab29]{height:30%;width:30%;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%)}",
                "",
            ]),
                (e.exports = n);
        },
        function (e, n, t) {
            "use strict";
            t.r(n);
            var r = {};
            t.r(r),
                t.d(r, "FUNDING", function () {
                    return ct;
                }),
                t.d(r, "getCorrelationID", function () {
                    return gt;
                }),
                t.d(r, "setup", function () {
                    return fr;
                });
            var o = {};
            t.r(o),
                t.d(o, "Promise", function () {
                    return R;
                }),
                t.d(o, "TYPES", function () {
                    return uo;
                }),
                t.d(o, "ProxyWindow", function () {
                    return Ir;
                }),
                t.d(o, "setup", function () {
                    return io;
                }),
                t.d(o, "destroy", function () {
                    return ao;
                }),
                t.d(o, "serializeMessage", function () {
                    return no;
                }),
                t.d(o, "deserializeMessage", function () {
                    return to;
                }),
                t.d(o, "createProxyWindow", function () {
                    return ro;
                }),
                t.d(o, "toProxyWindow", function () {
                    return oo;
                }),
                t.d(o, "on", function () {
                    return $r;
                }),
                t.d(o, "once", function () {
                    return Qr;
                }),
                t.d(o, "send", function () {
                    return eo;
                }),
                t.d(o, "markWindowKnown", function () {
                    return Or;
                }),
                t.d(o, "cleanUpWindow", function () {
                    return lo;
                }),
                t.d(o, "bridge", function () {});
            var i = {};
            t.r(i),
                t.d(i, "Buttons", function () {
                    return bl;
                }),
                t.d(i, "Checkout", function () {
                    return Cl;
                }),
                t.d(i, "CardForm", function () {
                    return El;
                }),
                t.d(i, "PaymentFields", function () {
                    return Ll;
                }),
                t.d(i, "Menu", function () {
                    return xl;
                }),
                t.d(i, "Modal", function () {
                    return Ol;
                }),
                t.d(i, "Installments", function () {
                    return Pl;
                }),
                t.d(i, "QRCode", function () {
                    return Sl;
                }),
                t.d(i, "ButtonsTemplate", function () {
                    return Tl;
                }),
                t.d(i, "PopupOpenError", function () {
                    return Nl;
                }),
                t.d(i, "allowIframe", function () {
                    return Al;
                }),
                t.d(i, "forceIframe", function () {
                    return kl;
                }),
                t.d(i, "destroyAll", function () {
                    return _l;
                }),
                t.d(i, "setup", function () {
                    return Rl;
                }),
                t.d(i, "destroy", function () {
                    return Ml;
                });
            var a = {};
            t.r(a),
                t.d(a, "ThreeDomainSecure", function () {
                    return Il;
                }),
                t.d(a, "postRobot", function () {
                    return Dl;
                });
            var u = {};
            function l(e, n) {
                if (null == e) return {};
                var t,
                    r,
                    o = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n.indexOf((t = i[r])) >= 0 || (o[t] = e[t]);
                return o;
            }
            t.r(u),
                t.d(u, "setup", function () {
                    return Bl;
                });
            var c = {
                926: {
                    device: "iPhone 12/13 Pro Max",
                    textSizeHeights: [752, 748, 744, 738],
                    textSizeHeightsNoTabs: [860, 858, 856, 854],
                    zoomHeight: { 1.15: [752, 747, 744, 738], 1.25: [753, 748, 744, 738], 1.5: [752, 749, 744, 738], 1.75: [753, 747, 744, 739], 2: [752, 748, 744], 2.5: [753, 748], 3: [753, 744] },
                    maybeSafari: { 2: [738], 2.5: [745, 738], 3: [747, 738] },
                },
                896: {
                    device: "iPhone XS Max, iPhone 11 Pro Max, iPhone XR, iPhone 11",
                    textSizeHeights: [721, 717, 713, 707],
                    textSizeHeightsNoTabs: [829, 827, 825, 823],
                    zoomHeight: { 1.15: [721, 716, 713, 707], 1.25: [721, 718, 713, 708], 1.5: [722, 717, 713], 1.75: [721, 718, 712, 707], 2: [722, 718, 714, 708], 2.5: [720, 718, 713, 708], 3: [720, 717, 708] },
                    maybeSafari: { 1.5: [707], 3: [714] },
                },
                844: {
                    device: "iPhone 12, iPhone 12 Pro",
                    textSizeHeights: [670, 666, 662, 656],
                    textSizeHeightsNoTabs: [778, 776, 774, 772],
                    zoomHeight: { 1.15: [670, 666, 662], 1.25: [670, 666, 663, 656], 1.5: [671, 666, 662], 1.75: [670, 667, 662, 656], 2: [670, 666, 662], 2.5: [670, 663], 3: [669, 666, 663, 657] },
                    maybeSafari: { 1.15: [656], 1.5: [656], 2: [656], 2.5: [665, 655], 3: [663] },
                },
                812: {
                    device: "iPhone X, iPhone XS, iPhone 11 Pro, iPhone 12 Mini",
                    textSizeHeights: [641, 637, 633, 627],
                    textSizeHeightsNoTabs: [749, 747, 745, 743],
                    zoomHeight: { 1.15: [641, 637, 633, 627], 1.25: [641, 638, 633, 628], 1.5: [641, 638, 633, 627], 1.75: [641, 637, 634], 2: [642, 638, 634, 628], 2.5: [640, 638, 633, 628], 3: [642, 633] },
                    maybeSafari: { 1.75: [627], 3: [636, 627] },
                },
                736: {
                    device: "iPhone 6 Plus, iPhone 6S Plus, iPhone 7 Plus, iPhone 8 Plus",
                    textSizeHeights: [628, 624, 620, 614],
                    textSizeHeightsNoTabs: [736, 734, 732, 730],
                    zoomHeight: { 1.15: [628, 624, 620, 614], 1.25: [628, 624, 620, 614], 1.5: [629, 624, 620], 1.75: [628, 625, 620, 614], 2: [628, 624, 620], 2.5: [628, 625, 620, 615], 3: [627, 624, 615] },
                    maybeSafari: { 1.5: [614], 2: [614], 3: [621] },
                },
                667: {
                    device: "iPhone 6, iPhone 6S, iPhone 7, iPhone 8,  iPhone SE2",
                    textSizeHeights: [559, 555, 551, 545],
                    textSizeHeightsNoTabs: [667, 665, 663, 661],
                    zoomHeight: { 1.15: [559, 555, 551, 545], 1.25: [559, 555, 551, 545], 1.5: [560, 555, 551], 1.75: [558, 555, 551], 2: [560, 556, 552, 546], 2.5: [560, 555, 550], 3: [558, 555, 546] },
                    maybeSafari: { 1.5: [545], 1.75: [544], 2.5: [545], 3: [552] },
                },
            };
            function s() {
                return window.navigator.mockUserAgent || window.navigator.userAgent;
            }
            var d = /ip(a|ro)d|silk|xoom|playbook|tablet|kindle|Nexus 7|GT-P10|SC-01C|SHW-M180S|SM-T320|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook|FOLIO|MB511.*RUTEM|Mac OS.*Silk/i;
            function f(e) {
                return void 0 === e && (e = s()), !!e.match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i);
            }
            function p() {
                return !0 === window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches;
            }
            function h(e) {
                return void 0 === e && (e = s()), /Opera Mini/i.test(e);
            }
            function m(e) {
                return void 0 === e && (e = s()), /Android/.test(e);
            }
            function g(e) {
                return void 0 === e && (e = s()), /iPhone|iPod|iPad/.test(e);
            }
            function y(e) {
                return void 0 === e && (e = s()), /iPhone.*OS.*(1)?(?:(1)[0-4]| [0-9])_/.test(e);
            }
            function v(e) {
                return (
                    void 0 === e && (e = s()),
                        !(
                            (function (e) {
                                return (
                                    void 0 === e && (e = s()),
                                    !!g(e) &&
                                    (!!(function (e) {
                                            return void 0 === e && (e = s()), /\bGSA\b/.test(e);
                                        })(e) ||
                                        /.+AppleWebKit(?!.*Safari)|.*WKWebView/.test(e))
                                );
                            })(e) ||
                            (function (e) {
                                return void 0 === e && (e = s()), !!m(e) && /Version\/[\d.]+/.test(e) && !h(e);
                            })(e) ||
                            h(e) ||
                            (function (e) {
                                return void 0 === e && (e = s()), /FxiOS/i.test(e);
                            })(e) ||
                            (function (e) {
                                return void 0 === e && (e = s()), /EdgiOS/i.test(e);
                            })(e) ||
                            (function (e) {
                                return void 0 === e && (e = s()), /FBAN/.test(e) || /FBAV/.test(e);
                            })(e) ||
                            (function (e) {
                                return void 0 === e && (e = s()), /QQBrowser/.test(e);
                            })(e) ||
                            ("undefined" != typeof process && process.versions && process.versions.electron) ||
                            ((n = s()), /Macintosh.*AppleWebKit(?!.*Safari)/i.test(n)) ||
                            p()
                        )
                );
                var n;
            }
            function w(e) {
                return void 0 === e && (e = s()), /Chrome|Chromium|CriOS/.test(e) && !/SamsungBrowser|Silk|EdgA/.test(e);
            }
            function b(e) {
                return void 0 === e && (e = s()), /Safari/.test(e) && !w(e) && !/Silk|FxiOS|EdgiOS/.test(e);
            }
            function C() {
                try {
                    if (window.ApplePaySession && window.ApplePaySession.supportsVersion(3) && window.ApplePaySession.canMakePayments()) return !0;
                } catch (e) {
                    return !1;
                }
                return !1;
            }
            function E(e, n) {
                return (E =
                    Object.setPrototypeOf ||
                    function (e, n) {
                        return (e.__proto__ = n), e;
                    })(e, n);
            }
            function L(e, n) {
                (e.prototype = Object.create(n.prototype)), (e.prototype.constructor = e), E(e, n);
            }
            function x() {
                return (x =
                    Object.assign ||
                    function (e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) ({}.hasOwnProperty.call(t, r) && (e[r] = t[r]));
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function O(e) {
                try {
                    if (!e) return !1;
                    if ("undefined" != typeof Promise && e instanceof Promise) return !0;
                    if ("undefined" != typeof window && "function" == typeof window.Window && e instanceof window.Window) return !1;
                    if ("undefined" != typeof window && "function" == typeof window.constructor && e instanceof window.constructor) return !1;
                    var n = {}.toString;
                    if (n) {
                        var t = n.call(e);
                        if ("[object Window]" === t || "[object global]" === t || "[object DOMWindow]" === t) return !1;
                    }
                    if ("function" == typeof e.then) return !0;
                } catch (e) {
                    return !1;
                }
                return !1;
            }
            var P,
                S = [],
                T = [],
                N = 0;
            function A() {
                if (!N && P) {
                    var e = P;
                    (P = null), e.resolve();
                }
            }
            function k() {
                N += 1;
            }
            function _() {
                (N -= 1), A();
            }
            var R = (function () {
                function e(e) {
                    var n = this;
                    if (
                        ((this.resolved = void 0),
                            (this.rejected = void 0),
                            (this.errorHandled = void 0),
                            (this.value = void 0),
                            (this.error = void 0),
                            (this.handlers = void 0),
                            (this.dispatching = void 0),
                            (this.stack = void 0),
                            (this.resolved = !1),
                            (this.rejected = !1),
                            (this.errorHandled = !1),
                            (this.handlers = []),
                            e)
                    ) {
                        var t,
                            r,
                            o = !1,
                            i = !1,
                            a = !1;
                        k();
                        try {
                            e(
                                function (e) {
                                    a ? n.resolve(e) : ((o = !0), (t = e));
                                },
                                function (e) {
                                    a ? n.reject(e) : ((i = !0), (r = e));
                                }
                            );
                        } catch (e) {
                            return _(), void this.reject(e);
                        }
                        _(), (a = !0), o ? this.resolve(t) : i && this.reject(r);
                    }
                }
                var n = e.prototype;
                return (
                    (n.resolve = function (e) {
                        if (this.resolved || this.rejected) return this;
                        if (O(e)) throw new Error("Can not resolve promise with another promise");
                        return (this.resolved = !0), (this.value = e), this.dispatch(), this;
                    }),
                        (n.reject = function (e) {
                            var n = this;
                            if (this.resolved || this.rejected) return this;
                            if (O(e)) throw new Error("Can not reject promise with another promise");
                            if (!e) {
                                var t = e && "function" == typeof e.toString ? e.toString() : {}.toString.call(e);
                                e = new Error("Expected reject to be called with Error, got " + t);
                            }
                            return (
                                (this.rejected = !0),
                                    (this.error = e),
                                this.errorHandled ||
                                setTimeout(function () {
                                    n.errorHandled ||
                                    (function (e, n) {
                                        if (-1 === S.indexOf(e)) {
                                            S.push(e),
                                                setTimeout(function () {
                                                    throw e;
                                                }, 1);
                                            for (var t = 0; t < T.length; t++) T[t](e, n);
                                        }
                                    })(e, n);
                                }, 1),
                                    this.dispatch(),
                                    this
                            );
                        }),
                        (n.asyncReject = function (e) {
                            return (this.errorHandled = !0), this.reject(e), this;
                        }),
                        (n.dispatch = function () {
                            var n = this.resolved,
                                t = this.rejected,
                                r = this.handlers;
                            if (!this.dispatching && (n || t)) {
                                (this.dispatching = !0), k();
                                for (
                                    var o = function (e, n) {
                                            return e.then(
                                                function (e) {
                                                    n.resolve(e);
                                                },
                                                function (e) {
                                                    n.reject(e);
                                                }
                                            );
                                        },
                                        i = 0;
                                    i < r.length;
                                    i++
                                ) {
                                    var a = r[i],
                                        u = a.onSuccess,
                                        l = a.onError,
                                        c = a.promise,
                                        s = void 0;
                                    if (n)
                                        try {
                                            s = u ? u(this.value) : this.value;
                                        } catch (e) {
                                            c.reject(e);
                                            continue;
                                        }
                                    else if (t) {
                                        if (!l) {
                                            c.reject(this.error);
                                            continue;
                                        }
                                        try {
                                            s = l(this.error);
                                        } catch (e) {
                                            c.reject(e);
                                            continue;
                                        }
                                    }
                                    if (s instanceof e && (s.resolved || s.rejected)) {
                                        var d = s;
                                        d.resolved ? c.resolve(d.value) : c.reject(d.error), (d.errorHandled = !0);
                                    } else O(s) ? (s instanceof e && (s.resolved || s.rejected) ? (s.resolved ? c.resolve(s.value) : c.reject(s.error)) : o(s, c)) : c.resolve(s);
                                }
                                (r.length = 0), (this.dispatching = !1), _();
                            }
                        }),
                        (n.then = function (n, t) {
                            if (n && "function" != typeof n && !n.call) throw new Error("Promise.then expected a function for success handler");
                            if (t && "function" != typeof t && !t.call) throw new Error("Promise.then expected a function for error handler");
                            var r = new e();
                            return this.handlers.push({ promise: r, onSuccess: n, onError: t }), (this.errorHandled = !0), this.dispatch(), r;
                        }),
                        (n.catch = function (e) {
                            return this.then(void 0, e);
                        }),
                        (n.finally = function (n) {
                            if (n && "function" != typeof n && !n.call) throw new Error("Promise.finally expected a function");
                            return this.then(
                                function (t) {
                                    return e.try(n).then(function () {
                                        return t;
                                    });
                                },
                                function (t) {
                                    return e.try(n).then(function () {
                                        throw t;
                                    });
                                }
                            );
                        }),
                        (n.timeout = function (e, n) {
                            var t = this;
                            if (this.resolved || this.rejected) return this;
                            var r = setTimeout(function () {
                                t.resolved || t.rejected || t.reject(n || new Error("Promise timed out after " + e + "ms"));
                            }, e);
                            return this.then(function (e) {
                                return clearTimeout(r), e;
                            });
                        }),
                        (n.toPromise = function () {
                            if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                            return Promise.resolve(this);
                        }),
                        (n.lazy = function () {
                            return (this.errorHandled = !0), this;
                        }),
                        (e.resolve = function (n) {
                            return n instanceof e
                                ? n
                                : O(n)
                                    ? new e(function (e, t) {
                                        return n.then(e, t);
                                    })
                                    : new e().resolve(n);
                        }),
                        (e.reject = function (n) {
                            return new e().reject(n);
                        }),
                        (e.asyncReject = function (n) {
                            return new e().asyncReject(n);
                        }),
                        (e.all = function (n) {
                            var t = new e(),
                                r = n.length,
                                o = [].slice();
                            if (!r) return t.resolve(o), t;
                            for (
                                var i = function (e, n, i) {
                                        return n.then(
                                            function (n) {
                                                (o[e] = n), 0 == (r -= 1) && t.resolve(o);
                                            },
                                            function (e) {
                                                i.reject(e);
                                            }
                                        );
                                    },
                                    a = 0;
                                a < n.length;
                                a++
                            ) {
                                var u = n[a];
                                if (u instanceof e) {
                                    if (u.resolved) {
                                        (o[a] = u.value), (r -= 1);
                                        continue;
                                    }
                                } else if (!O(u)) {
                                    (o[a] = u), (r -= 1);
                                    continue;
                                }
                                i(a, e.resolve(u), t);
                            }
                            return 0 === r && t.resolve(o), t;
                        }),
                        (e.hash = function (n) {
                            var t = {},
                                r = [],
                                o = function (e) {
                                    if (n.hasOwnProperty(e)) {
                                        var o = n[e];
                                        O(o)
                                            ? r.push(
                                                o.then(function (n) {
                                                    t[e] = n;
                                                })
                                            )
                                            : (t[e] = o);
                                    }
                                };
                            for (var i in n) o(i);
                            return e.all(r).then(function () {
                                return t;
                            });
                        }),
                        (e.map = function (n, t) {
                            return e.all(n.map(t));
                        }),
                        (e.onPossiblyUnhandledException = function (e) {
                            return (function (e) {
                                return (
                                    T.push(e),
                                        {
                                            cancel: function () {
                                                T.splice(T.indexOf(e), 1);
                                            },
                                        }
                                );
                            })(e);
                        }),
                        (e.try = function (n, t, r) {
                            if (n && "function" != typeof n && !n.call) throw new Error("Promise.try expected a function");
                            var o;
                            k();
                            try {
                                o = n.apply(t, r || []);
                            } catch (n) {
                                return _(), e.reject(n);
                            }
                            return _(), e.resolve(o);
                        }),
                        (e.delay = function (n) {
                            return new e(function (e) {
                                setTimeout(e, n);
                            });
                        }),
                        (e.isPromise = function (n) {
                            return !!(n && n instanceof e) || O(n);
                        }),
                        (e.flush = function () {
                            return (n = P = P || new e()), A(), n;
                            var n;
                        }),
                        e
                );
            })();
            function M(e) {
                return "[object RegExp]" === {}.toString.call(e);
            }
            var F = { IFRAME: "iframe", POPUP: "popup" },
                I = "Call was rejected by callee.\r\n";
            function D(e) {
                return void 0 === e && (e = window), e.location.protocol;
            }
            function B(e) {
                if ((void 0 === e && (e = window), e.mockDomain)) {
                    var n = e.mockDomain.split("//")[0];
                    if (n) return n;
                }
                return D(e);
            }
            function j(e) {
                return void 0 === e && (e = window), "about:" === B(e);
            }
            function H(e) {
                if ((void 0 === e && (e = window), e))
                    try {
                        if (e.parent && e.parent !== e) return e.parent;
                    } catch (e) {}
            }
            function q(e) {
                if ((void 0 === e && (e = window), e && !H(e)))
                    try {
                        return e.opener;
                    } catch (e) {}
            }
            function W(e) {
                try {
                    return !0;
                } catch (e) {}
                return !1;
            }
            function U(e) {
                void 0 === e && (e = window);
                var n = e.location;
                if (!n) throw new Error("Can not read window location");
                var t = D(e);
                if (!t) throw new Error("Can not read window protocol");
                if ("file:" === t) return "file://";
                if ("about:" === t) {
                    var r = H(e);
                    return r && W() ? U(r) : "about://";
                }
                var o = n.host;
                if (!o) throw new Error("Can not read window host");
                return t + "//" + o;
            }
            function z(e) {
                void 0 === e && (e = window);
                var n = U(e);
                return n && e.mockDomain && 0 === e.mockDomain.indexOf("mock:") ? e.mockDomain : n;
            }
            function Z(e) {
                if (
                    !(function (e) {
                        try {
                            if (e === window) return !0;
                        } catch (e) {}
                        try {
                            var n = Object.getOwnPropertyDescriptor(e, "location");
                            if (n && !1 === n.enumerable) return !1;
                        } catch (e) {}
                        try {
                            if (j(e) && W()) return !0;
                        } catch (e) {}
                        try {
                            if (
                                (function (e) {
                                    return void 0 === e && (e = window), "mock:" === B(e);
                                })(e) &&
                                W()
                            )
                                return !0;
                        } catch (e) {}
                        try {
                            if (U(e) === U(window)) return !0;
                        } catch (e) {}
                        return !1;
                    })(e)
                )
                    return !1;
                try {
                    if (e === window) return !0;
                    if (j(e) && W()) return !0;
                    if (z(window) === z(e)) return !0;
                } catch (e) {}
                return !1;
            }
            function G(e) {
                if (!Z(e)) throw new Error("Expected window to be same domain");
                return e;
            }
            function V(e, n) {
                if (!e || !n) return !1;
                var t = H(n);
                return t
                    ? t === e
                    : -1 !==
                    (function (e) {
                        var n = [];
                        try {
                            for (; e.parent !== e; ) n.push(e.parent), (e = e.parent);
                        } catch (e) {}
                        return n;
                    })(n).indexOf(e);
            }
            function Y(e) {
                var n,
                    t,
                    r = [];
                try {
                    n = e.frames;
                } catch (t) {
                    n = e;
                }
                try {
                    t = n.length;
                } catch (e) {}
                if (0 === t) return r;
                if (t) {
                    for (var o = 0; o < t; o++) {
                        var i = void 0;
                        try {
                            i = n[o];
                        } catch (e) {
                            continue;
                        }
                        r.push(i);
                    }
                    return r;
                }
                for (var a = 0; a < 100; a++) {
                    var u = void 0;
                    try {
                        u = n[a];
                    } catch (e) {
                        return r;
                    }
                    if (!u) return r;
                    r.push(u);
                }
                return r;
            }
            function K(e) {
                for (var n = [], t = 0, r = Y(e); t < r.length; t++) {
                    var o = r[t];
                    n.push(o);
                    for (var i = 0, a = K(o); i < a.length; i++) n.push(a[i]);
                }
                return n;
            }
            function J(e) {
                void 0 === e && (e = window);
                try {
                    if (e.top) return e.top;
                } catch (e) {}
                if (H(e) === e) return e;
                try {
                    if (V(window, e) && window.top) return window.top;
                } catch (e) {}
                try {
                    if (V(e, window) && window.top) return window.top;
                } catch (e) {}
                for (var n = 0, t = K(e); n < t.length; n++) {
                    var r = t[n];
                    try {
                        if (r.top) return r.top;
                    } catch (e) {}
                    if (H(r) === r) return r;
                }
            }
            function X(e) {
                var n = J(e);
                if (!n) throw new Error("Can not determine top window");
                var t = [].concat(K(n), [n]);
                return -1 === t.indexOf(e) && (t = [].concat(t, [e], K(e))), t;
            }
            var $ = [],
                Q = [];
            function ee(e, n) {
                void 0 === n && (n = !0);
                try {
                    if (e === window) return !1;
                } catch (e) {
                    return !0;
                }
                try {
                    if (!e) return !0;
                } catch (e) {
                    return !0;
                }
                try {
                    if (e.closed) return !0;
                } catch (e) {
                    return !e || e.message !== I;
                }
                if (n && Z(e))
                    try {
                        if (e.mockclosed) return !0;
                    } catch (e) {}
                try {
                    if (!e.parent || !e.top) return !0;
                } catch (e) {}
                var t = (function (e, n) {
                    for (var t = 0; t < e.length; t++)
                        try {
                            if (e[t] === n) return t;
                        } catch (e) {}
                    return -1;
                })($, e);
                if (-1 !== t) {
                    var r = Q[t];
                    if (
                        r &&
                        (function (e) {
                            if (!e.contentWindow) return !0;
                            if (!e.parentNode) return !0;
                            var n = e.ownerDocument;
                            if (n && n.documentElement && !n.documentElement.contains(e)) {
                                for (var t = e; t.parentNode && t.parentNode !== t; ) t = t.parentNode;
                                if (!t.host || !n.documentElement.contains(t.host)) return !0;
                            }
                            return !1;
                        })(r)
                    )
                        return !0;
                }
                return !1;
            }
            function ne(e, n) {
                for (var t = Y(e), r = 0; r < t.length; r++) {
                    var o = t[r];
                    try {
                        if (Z(o) && o.name === n && -1 !== t.indexOf(o)) return o;
                    } catch (e) {}
                }
                try {
                    if (-1 !== t.indexOf(e.frames[n])) return e.frames[n];
                } catch (e) {}
                try {
                    if (-1 !== t.indexOf(e[n])) return e[n];
                } catch (e) {}
            }
            function te(e) {
                return void 0 === e && (e = window), q((e = e || window)) || H(e) || void 0;
            }
            function re(e, n) {
                for (var t = 0; t < e.length; t++) for (var r = e[t], o = 0; o < n.length; o++) if (r === n[o]) return !0;
                return !1;
            }
            function oe(e) {
                void 0 === e && (e = window);
                for (var n = 0, t = e; t; ) (t = H(t)) && (n += 1);
                return n;
            }
            function ie(e, n) {
                var t = J(e) || e,
                    r = J(n) || n;
                try {
                    if (t && r) return t === r;
                } catch (e) {}
                var o = X(e),
                    i = X(n);
                if (re(o, i)) return !0;
                var a = q(t),
                    u = q(r);
                return (a && re(X(a), i)) || (u && re(X(u), o)), !1;
            }
            function ae(e, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof n) return "*" === e || n === e;
                    if (M(n)) return !1;
                    if (Array.isArray(n)) return !1;
                }
                return M(e)
                    ? M(n)
                        ? e.toString() === n.toString()
                        : !Array.isArray(n) && Boolean(n.match(e))
                    : !!Array.isArray(e) &&
                    (Array.isArray(n)
                        ? JSON.stringify(e) === JSON.stringify(n)
                        : !M(n) &&
                        e.some(function (e) {
                            return ae(e, n);
                        }));
            }
            function ue(e) {
                return e.match(/^(https?|mock|file):\/\//) ? e.split("/").slice(0, 3).join("/") : z();
            }
            function le(e, n, t, r) {
                var o;
                return (
                    void 0 === t && (t = 1e3),
                    void 0 === r && (r = 1 / 0),
                        (function i() {
                            if (ee(e)) return o && clearTimeout(o), n();
                            r <= 0 ? clearTimeout(o) : ((r -= t), (o = setTimeout(i, t)));
                        })(),
                        {
                            cancel: function () {
                                o && clearTimeout(o);
                            },
                        }
                );
            }
            function ce(e) {
                try {
                    if (e === window) return !0;
                } catch (e) {
                    if (e && e.message === I) return !0;
                }
                try {
                    if ("[object Window]" === {}.toString.call(e)) return !0;
                } catch (e) {
                    if (e && e.message === I) return !0;
                }
                try {
                    if (window.Window && e instanceof window.Window) return !0;
                } catch (e) {
                    if (e && e.message === I) return !0;
                }
                try {
                    if (e && e.self === e) return !0;
                } catch (e) {
                    if (e && e.message === I) return !0;
                }
                try {
                    if (e && e.parent === e) return !0;
                } catch (e) {
                    if (e && e.message === I) return !0;
                }
                try {
                    if (e && e.top === e) return !0;
                } catch (e) {
                    if (e && e.message === I) return !0;
                }
                try {
                    if (e && "__unlikely_value__" === e.__cross_domain_utils_window_check__) return !1;
                } catch (e) {
                    return !0;
                }
                try {
                    if ("postMessage" in e && "self" in e && "location" in e) return !0;
                } catch (e) {}
                return !1;
            }
            function se(e) {
                if (Z(e)) return G(e).frameElement;
                for (var n = 0, t = document.querySelectorAll("iframe"); n < t.length; n++) {
                    var r = t[n];
                    if (r && r.contentWindow && r.contentWindow === e) return r;
                }
            }
            function de(e) {
                if (
                    (function (e) {
                        return void 0 === e && (e = window), Boolean(H(e));
                    })(e)
                ) {
                    var n = se(e);
                    if (n && n.parentElement) return void n.parentElement.removeChild(n);
                }
                try {
                    e.close();
                } catch (e) {}
            }
            function fe(e, n) {
                for (var t = 0; t < e.length; t++)
                    try {
                        if (e[t] === n) return t;
                    } catch (e) {}
                return -1;
            }
            var pe,
                he = (function () {
                    function e() {
                        if (
                            ((this.name = void 0),
                                (this.weakmap = void 0),
                                (this.keys = void 0),
                                (this.values = void 0),
                                (this.name = "__weakmap_" + ((1e9 * Math.random()) >>> 0) + "__"),
                                (function () {
                                    if ("undefined" == typeof WeakMap) return !1;
                                    if (void 0 === Object.freeze) return !1;
                                    try {
                                        var e = new WeakMap(),
                                            n = {};
                                        return Object.freeze(n), e.set(n, "__testvalue__"), "__testvalue__" === e.get(n);
                                    } catch (e) {
                                        return !1;
                                    }
                                })())
                        )
                            try {
                                this.weakmap = new WeakMap();
                            } catch (e) {}
                        (this.keys = []), (this.values = []);
                    }
                    var n = e.prototype;
                    return (
                        (n._cleanupClosedWindows = function () {
                            for (var e = this.weakmap, n = this.keys, t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (ce(r) && ee(r)) {
                                    if (e)
                                        try {
                                            e.delete(r);
                                        } catch (e) {}
                                    n.splice(t, 1), this.values.splice(t, 1), (t -= 1);
                                }
                            }
                        }),
                            (n.isSafeToReadWrite = function (e) {
                                return !ce(e);
                            }),
                            (n.set = function (e, n) {
                                if (!e) throw new Error("WeakMap expected key");
                                var t = this.weakmap;
                                if (t)
                                    try {
                                        t.set(e, n);
                                    } catch (e) {
                                        delete this.weakmap;
                                    }
                                if (this.isSafeToReadWrite(e))
                                    try {
                                        var r = this.name,
                                            o = e[r];
                                        return void (o && o[0] === e ? (o[1] = n) : Object.defineProperty(e, r, { value: [e, n], writable: !0 }));
                                    } catch (e) {}
                                this._cleanupClosedWindows();
                                var i = this.keys,
                                    a = this.values,
                                    u = fe(i, e);
                                -1 === u ? (i.push(e), a.push(n)) : (a[u] = n);
                            }),
                            (n.get = function (e) {
                                if (!e) throw new Error("WeakMap expected key");
                                var n = this.weakmap;
                                if (n)
                                    try {
                                        if (n.has(e)) return n.get(e);
                                    } catch (e) {
                                        delete this.weakmap;
                                    }
                                if (this.isSafeToReadWrite(e))
                                    try {
                                        var t = e[this.name];
                                        return t && t[0] === e ? t[1] : void 0;
                                    } catch (e) {}
                                this._cleanupClosedWindows();
                                var r = fe(this.keys, e);
                                if (-1 !== r) return this.values[r];
                            }),
                            (n.delete = function (e) {
                                if (!e) throw new Error("WeakMap expected key");
                                var n = this.weakmap;
                                if (n)
                                    try {
                                        n.delete(e);
                                    } catch (e) {
                                        delete this.weakmap;
                                    }
                                if (this.isSafeToReadWrite(e))
                                    try {
                                        var t = e[this.name];
                                        t && t[0] === e && (t[0] = t[1] = void 0);
                                    } catch (e) {}
                                this._cleanupClosedWindows();
                                var r = this.keys,
                                    o = fe(r, e);
                                -1 !== o && (r.splice(o, 1), this.values.splice(o, 1));
                            }),
                            (n.has = function (e) {
                                if (!e) throw new Error("WeakMap expected key");
                                var n = this.weakmap;
                                if (n)
                                    try {
                                        if (n.has(e)) return !0;
                                    } catch (e) {
                                        delete this.weakmap;
                                    }
                                if (this.isSafeToReadWrite(e))
                                    try {
                                        var t = e[this.name];
                                        return !(!t || t[0] !== e);
                                    } catch (e) {}
                                return this._cleanupClosedWindows(), -1 !== fe(this.keys, e);
                            }),
                            (n.getOrSet = function (e, n) {
                                if (this.has(e)) return this.get(e);
                                var t = n();
                                return this.set(e, t), t;
                            }),
                            e
                    );
                })();
            function me(e) {
                return (me = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
            }
            function ge() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            }
            function ye(e, n, t) {
                return (ye = ge()
                    ? Reflect.construct
                    : function (e, n, t) {
                        var r = [null];
                        r.push.apply(r, n);
                        var o = new (Function.bind.apply(e, r))();
                        return t && E(o, t.prototype), o;
                    }).apply(null, arguments);
            }
            function ve(e) {
                var n = "function" == typeof Map ? new Map() : void 0;
                return (ve = function (e) {
                    if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== n) {
                        if (n.has(e)) return n.get(e);
                        n.set(e, t);
                    }
                    function t() {
                        return ye(e, arguments, me(this).constructor);
                    }
                    return (t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), E(t, e);
                })(e);
            }
            function we(e) {
                var n = !1;
                try {
                    (e instanceof window.Element || (null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument)) && (n = !0);
                } catch (e) {}
                return n;
            }
            function be(e) {
                return e.name || e.__name__ || e.displayName || "anonymous";
            }
            function Ce(e, n) {
                try {
                    delete e.name, (e.name = n);
                } catch (e) {}
                return (e.__name__ = e.displayName = n), e;
            }
            function Ee(e) {
                if ("function" == typeof btoa)
                    return btoa(
                        encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, n) {
                            return String.fromCharCode(parseInt(n, 16));
                        })
                    ).replace(/[=]/g, "");
                if ("undefined" != typeof Buffer) return Buffer.from(e, "utf8").toString("base64").replace(/[=]/g, "");
                throw new Error("Can not find window.btoa or Buffer");
            }
            function Le(e) {
                if ("function" == typeof atob)
                    return decodeURIComponent(
                        [].map
                            .call(atob(e), function (e) {
                                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                            })
                            .join("")
                    );
                if ("undefined" != typeof Buffer) return Buffer.from(e, "base64").toString("utf8");
                throw new Error("Can not find window.atob or Buffer");
            }
            function xe() {
                var e = "0123456789abcdef";
                return (
                    "uid_" +
                    "xxxxxxxxxx".replace(/./g, function () {
                        return e.charAt(Math.floor(Math.random() * e.length));
                    }) +
                    "_" +
                    Ee(new Date().toISOString().slice(11, 19).replace("T", "."))
                        .replace(/[^a-zA-Z0-9]/g, "")
                        .toLowerCase()
                );
            }
            function Oe() {
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw new Error("No global found");
            }
            function Pe(e) {
                try {
                    return JSON.stringify([].slice.call(e), function (e, n) {
                        return "function" == typeof n
                            ? "memoize[" +
                            (function (e) {
                                if (((pe = pe || new he()), null == e || ("object" != typeof e && "function" != typeof e))) throw new Error("Invalid object");
                                var n = pe.get(e);
                                return n || ((n = typeof e + ":" + xe()), pe.set(e, n)), n;
                            })(n) +
                            "]"
                            : we(n)
                                ? {}
                                : n;
                    });
                } catch (e) {
                    throw new Error("Arguments not serializable -- can not be used to memoize");
                }
            }
            function Se() {
                return {};
            }
            var Te = 0,
                Ne = 0;
            function Ae(e, n) {
                void 0 === n && (n = {});
                var t,
                    r,
                    o = n.thisNamespace,
                    i = void 0 !== o && o,
                    a = n.time,
                    u = Te;
                Te += 1;
                var l = function () {
                    for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l];
                    var c, s;
                    u < Ne && ((t = null), (r = null), (u = Te), (Te += 1)), (c = i ? (r = r || new he()).getOrSet(this, Se) : (t = t || {}));
                    try {
                        s = Pe(o);
                    } catch (n) {
                        return e.apply(this, arguments);
                    }
                    var d = c[s];
                    if ((d && a && Date.now() - d.time < a && (delete c[s], (d = null)), d)) return d.value;
                    var f = Date.now(),
                        p = e.apply(this, arguments);
                    return (c[s] = { time: f, value: p }), p;
                };
                return (
                    (l.reset = function () {
                        (t = null), (r = null);
                    }),
                        Ce(l, (n.name || be(e)) + "::memoized")
                );
            }
            function ke(e) {
                var n = {};
                function t() {
                    for (var t = arguments, r = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                    var u = Pe(i);
                    return (
                        n.hasOwnProperty(u) ||
                        (n[u] = R.try(function () {
                            return e.apply(r, t);
                        }).finally(function () {
                            delete n[u];
                        })),
                            n[u]
                    );
                }
                return (
                    (t.reset = function () {
                        n = {};
                    }),
                        Ce(t, be(e) + "::promiseMemoized")
                );
            }
            function _e(e, n, t) {
                void 0 === t && (t = []);
                var r = (e.__inline_memoize_cache__ = e.__inline_memoize_cache__ || {}),
                    o = Pe(t);
                return r.hasOwnProperty(o) ? r[o] : (r[o] = n.apply(void 0, t));
            }
            function Re() {}
            function Me(e) {
                var n = !1;
                return Ce(function () {
                    if (!n) return (n = !0), e.apply(this, arguments);
                }, be(e) + "::once");
            }
            function Fe(e, n) {
                if ((void 0 === n && (n = 1), n >= 3)) return "stringifyError stack overflow";
                try {
                    if (!e) return "<unknown error: " + {}.toString.call(e) + ">";
                    if ("string" == typeof e) return e;
                    if (e instanceof Error) {
                        var t = e && e.stack,
                            r = e && e.message;
                        if (t && r) return -1 !== t.indexOf(r) ? t : r + "\n" + t;
                        if (t) return t;
                        if (r) return r;
                    }
                    return e && e.toString && "function" == typeof e.toString ? e.toString() : {}.toString.call(e);
                } catch (e) {
                    return "Error while stringifying error: " + Fe(e, n + 1);
                }
            }
            function Ie(e) {
                var n = "<unknown error: " + {}.toString.call(e) + ">";
                return e ? (e instanceof Error ? e.message || n : ("string" == typeof e.message && e.message) || n) : n;
            }
            function De(e) {
                return "string" == typeof e ? e : e && e.toString && "function" == typeof e.toString ? e.toString() : {}.toString.call(e);
            }
            function Be(e, n) {
                if (!n) return e;
                if (Object.assign) return Object.assign(e, n);
                for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
                return e;
            }
            function je(e) {
                if (Object.values) return Object.values(e);
                var n = [];
                for (var t in e) e.hasOwnProperty(t) && n.push(e[t]);
                return n;
            }
            function He(e, n) {
                return Math.round((e * n) / 100);
            }
            function qe() {
                return Math.max.apply(Math, arguments);
            }
            function We(e, n) {
                var t = e % n;
                return t ? e - t + n : e;
            }
            function Ue(e) {
                return "data:image/svg+xml;base64," + Ee(e);
            }
            function ze(e, n) {
                void 0 === n && (n = Boolean);
                var t = {};
                for (var r in e) e.hasOwnProperty(r) && n(e[r], r) && (t[r] = e[r]);
                return t;
            }
            function Ze(e) {
                return e;
            }
            function Ge(e, n) {
                var t;
                return (
                    (function r() {
                        t = setTimeout(function () {
                            e(), r();
                        }, n);
                    })(),
                        {
                            cancel: function () {
                                clearTimeout(t);
                            },
                        }
                );
            }
            function Ve() {
                var e = {},
                    n = {},
                    t = {
                        on: function (e, t) {
                            var r = (n[e] = n[e] || []);
                            r.push(t);
                            var o = !1;
                            return {
                                cancel: function () {
                                    o || ((o = !0), r.splice(r.indexOf(t), 1));
                                },
                            };
                        },
                        once: function (e, n) {
                            var r = t.on(e, function () {
                                r.cancel(), n();
                            });
                            return r;
                        },
                        trigger: function (e) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                            var i = n[e],
                                a = [];
                            if (i)
                                for (
                                    var u = function (e) {
                                            var n = i[e];
                                            a.push(
                                                R.try(function () {
                                                    return n.apply(void 0, r);
                                                })
                                            );
                                        },
                                        l = 0;
                                    l < i.length;
                                    l++
                                )
                                    u(l);
                            return R.all(a).then(Re);
                        },
                        triggerOnce: function (n) {
                            if (e[n]) return R.resolve();
                            e[n] = !0;
                            for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
                            return t.trigger.apply(t, [n].concat(o));
                        },
                        reset: function () {
                            n = {};
                        },
                    };
                return t;
            }
            function Ye(e) {
                return e.replace(/-([a-z])/g, function (e) {
                    return e[1].toUpperCase();
                });
            }
            function Ke(e) {
                return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
            }
            function Je(e, n, t) {
                if (Array.isArray(e)) {
                    if ("number" != typeof n) throw new TypeError("Array key must be number");
                } else if ("object" == typeof e && null !== e && "string" != typeof n) throw new TypeError("Object key must be string");
                Object.defineProperty(e, n, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        delete e[n];
                        var r = t();
                        return (e[n] = r), r;
                    },
                    set: function (t) {
                        delete e[n], (e[n] = t);
                    },
                });
            }
            function Xe(e) {
                return [].slice.call(e);
            }
            function $e(e) {
                return "object" == typeof (n = e) && null !== n && "[object Object]" === {}.toString.call(e);
                var n;
            }
            function Qe(e) {
                if (!$e(e)) return !1;
                var n = e.constructor;
                if ("function" != typeof n) return !1;
                var t = n.prototype;
                return !!$e(t) && !!t.hasOwnProperty("isPrototypeOf");
            }
            function en(e, n, t) {
                if ((void 0 === t && (t = ""), Array.isArray(e))) {
                    for (
                        var r = e.length,
                            o = [],
                            i = function (r) {
                                Je(o, r, function () {
                                    var o = t ? t + "." + r : "" + r,
                                        i = n(e[r], r, o);
                                    return (Qe(i) || Array.isArray(i)) && (i = en(i, n, o)), i;
                                });
                            },
                            a = 0;
                        a < r;
                        a++
                    )
                        i(a);
                    return o;
                }
                if (Qe(e)) {
                    var u = {},
                        l = function (r) {
                            if (!e.hasOwnProperty(r)) return "continue";
                            Je(u, r, function () {
                                var o = t ? t + "." + r : "" + r,
                                    i = n(e[r], r, o);
                                return (Qe(i) || Array.isArray(i)) && (i = en(i, n, o)), i;
                            });
                        };
                    for (var c in e) l(c);
                    return u;
                }
                throw new Error("Pass an object or array");
            }
            function nn(e) {
                return null != e;
            }
            function tn(e) {
                return "[object RegExp]" === {}.toString.call(e);
            }
            function rn(e, n, t) {
                if (e.hasOwnProperty(n)) return e[n];
                var r = t();
                return (e[n] = r), r;
            }
            function on(e) {
                var n,
                    t = [],
                    r = !1,
                    o = {
                        set: function (n, t) {
                            return (
                                r ||
                                ((e[n] = t),
                                    o.register(function () {
                                        delete e[n];
                                    })),
                                    t
                            );
                        },
                        register: function (e) {
                            var o = Me(function () {
                                return e(n);
                            });
                            return (
                                r ? e(n) : t.push(o),
                                    {
                                        cancel: function () {
                                            var e = t.indexOf(o);
                                            -1 !== e && t.splice(e, 1);
                                        },
                                    }
                            );
                        },
                        all: function (e) {
                            n = e;
                            var o = [];
                            for (r = !0; t.length; ) {
                                var i = t.shift();
                                o.push(i());
                            }
                            return R.all(o).then(Re);
                        },
                    };
                return o;
            }
            function an(e, n) {
                if (null == n) throw new Error("Expected " + e + " to be present");
                return n;
            }
            (Ae.clear = function () {
                Ne = Te;
            }),
                Ae(je);
            var un = (function (e) {
                function n(n) {
                    var t;
                    return (
                        ((t = e.call(this, n) || this).name = t.constructor.name),
                            "function" == typeof Error.captureStackTrace
                                ? Error.captureStackTrace(
                                    (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(t),
                                    t.constructor
                                )
                                : (t.stack = new Error(n).stack),
                            t
                    );
                }
                return L(n, e), n;
            })(ve(Error));
            function ln() {
                var e = document.body;
                if (!e) throw new Error("Body element not found");
                return e;
            }
            function cn() {
                return Boolean(document.body) && "complete" === document.readyState;
            }
            function sn() {
                return Boolean(document.body) && "interactive" === document.readyState;
            }
            function dn(e) {
                return encodeURIComponent(e);
            }
            function fn() {
                return _e(fn, function () {
                    return new R(function (e) {
                        cn() && e(),
                            window.addEventListener("load", function () {
                                return e();
                            });
                    });
                });
            }
            function pn(e) {
                return _e(
                    pn,
                    function () {
                        var n = {};
                        if (!e) return n;
                        if (-1 === e.indexOf("=")) return n;
                        for (var t = 0, r = e.split("&"); t < r.length; t++) {
                            var o = r[t];
                            (o = o.split("="))[0] && o[1] && (n[decodeURIComponent(o[0])] = decodeURIComponent(o[1]));
                        }
                        return n;
                    },
                    [e]
                );
            }
            function hn(e, n) {
                return (
                    void 0 === n && (n = {}),
                        n && Object.keys(n).length
                            ? (void 0 === (t = x({}, pn(e), n)) && (t = {}),
                                Object.keys(t)
                                    .filter(function (e) {
                                        return "string" == typeof t[e] || "boolean" == typeof t[e];
                                    })
                                    .map(function (e) {
                                        var n = t[e];
                                        if ("string" != typeof n && "boolean" != typeof n) throw new TypeError("Invalid type for query");
                                        return dn(e) + "=" + dn(n.toString());
                                    })
                                    .join("&"))
                            : e
                );
                var t;
            }
            function mn(e, n) {
                var t,
                    r,
                    o = n.query || {},
                    i = n.hash || {},
                    a = e.split("#");
                r = a[1];
                var u = (t = a[0]).split("?");
                t = u[0];
                var l = hn(u[1], o),
                    c = hn(r, i);
                return l && (t = t + "?" + l), c && (t = t + "#" + c), t;
            }
            function gn() {
                return _e(gn, function () {
                    var e = window.performance;
                    if (e && e.now && e.timing && e.timing.connectEnd && e.timing.navigationStart && Math.abs(e.now() - Date.now()) > 1e3 && e.now() - (e.timing.connectEnd - e.timing.navigationStart) > 0) return e;
                });
            }
            function yn() {
                return "undefined" != typeof window && void 0 !== window.location;
            }
            function vn() {
                return _e(vn, function () {
                    try {
                        if ("undefined" == typeof window) return !1;
                        if (window.localStorage) {
                            var e = Math.random().toString();
                            window.localStorage.setItem("__test__localStorage__", e);
                            var n = window.localStorage.getItem("__test__localStorage__");
                            if ((window.localStorage.removeItem("__test__localStorage__"), e === n)) return !0;
                        }
                    } catch (e) {}
                    return !1;
                });
            }
            function wn() {
                var e = window.navigator,
                    n = e.languages ? [].concat(e.languages) : [];
                return (
                    e.language && n.push(e.language),
                    e.userLanguage && n.push(e.userLanguage),
                        n
                            .map(function (e) {
                                if (e && e.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
                                    var n = e.split(/[-_]/);
                                    return { country: n[1], lang: n[0] };
                                }
                                return e && e.match(/^[a-z]{2}$/) ? { lang: e } : null;
                            })
                            .filter(Boolean)
                );
            }
            function bn(e, n) {
                e.appendChild(n);
            }
            function Cn(e, n) {
                return void 0 === n && (n = document), we(e) ? e : "string" == typeof e ? n.querySelector(e) : void 0;
            }
            function En(e, n) {
                void 0 === n && (n = document);
                var t = Cn(e, n);
                if (t) return t;
                throw new Error("Can not find element: " + De(e));
            }
            function Ln(e) {
                return new R(function (n, t) {
                    var r = De(e),
                        o = Cn(e);
                    if (o) return n(o);
                    if (cn()) return t(new Error("Document is ready and element " + r + " does not exist"));
                    var i = setInterval(function () {
                        return (o = Cn(e)) ? (n(o), void clearInterval(i)) : cn() ? (clearInterval(i), t(new Error("Document is ready and element " + r + " does not exist"))) : void 0;
                    }, 10);
                });
            }
            Ae(function () {
                return new R(function (e) {
                    if (cn() || sn()) return e();
                    var n = setInterval(function () {
                        if (cn() || sn()) return clearInterval(n), e();
                    }, 10);
                });
            });
            var xn,
                On = (function (e) {
                    function n() {
                        return e.apply(this, arguments) || this;
                    }
                    return L(n, e), n;
                })(un);
            function Pn(e, n) {
                var t = (n = n || {}).closeOnUnload,
                    r = void 0 === t ? 1 : t,
                    o = n.name,
                    i = void 0 === o ? "" : o,
                    a = n.width,
                    u = n.height,
                    l = 0,
                    c = 0;
                a && (window.outerWidth ? (c = Math.round((window.outerWidth - a) / 2) + window.screenX) : window.screen.width && (c = Math.round((window.screen.width - a) / 2))),
                u && (window.outerHeight ? (l = Math.round((window.outerHeight - u) / 2) + window.screenY) : window.screen.height && (l = Math.round((window.screen.height - u) / 2))),
                    delete n.closeOnUnload,
                    delete n.name,
                a && u && (n = x({ top: l, left: c, width: a, height: u, status: 1, toolbar: 0, menubar: 0, resizable: 1, scrollbars: 1 }, n));
                var s,
                    d,
                    f = Object.keys(n)
                        .map(function (e) {
                            if (null != n[e]) return e + "=" + De(n[e]);
                        })
                        .filter(Boolean)
                        .join(",");
                try {
                    s = window.open(e, i, f);
                } catch (d) {
                    throw new On("Can not open popup window - " + (d.stack || d.message));
                }
                if (ee(s)) throw new On("Can not open popup window - blocked");
                return (
                    r &&
                    window.addEventListener("unload", function () {
                        return s.close();
                    }),
                        s
                );
            }
            function Sn(e, n) {
                var t = n.tagName.toLowerCase();
                if ("html" !== t) throw new Error("Expected element to be html, got " + t);
                for (var r = e.document.documentElement, o = 0, i = Xe(r.children); o < i.length; o++) r.removeChild(i[o]);
                for (var a = 0, u = Xe(n.children); a < u.length; a++) r.appendChild(u[a]);
            }
            function Tn(e) {
                if ((xn = xn || new he()).has(e)) {
                    var n = xn.get(e);
                    if (n) return n;
                }
                var t = new R(function (n, t) {
                    e.addEventListener("load", function () {
                        (function (e) {
                            if (
                                ((function () {
                                    for (var e = 0; e < $.length; e++) {
                                        var n = !1;
                                        try {
                                            n = $[e].closed;
                                        } catch (e) {}
                                        n && (Q.splice(e, 1), $.splice(e, 1));
                                    }
                                })(),
                                e && e.contentWindow)
                            )
                                try {
                                    $.push(e.contentWindow), Q.push(e);
                                } catch (e) {}
                        })(e),
                            n(e);
                    }),
                        e.addEventListener("error", function (r) {
                            e.contentWindow ? n(e) : t(r);
                        });
                });
                return xn.set(e, t), t;
            }
            function Nn(e) {
                return Tn(e).then(function (e) {
                    if (!e.contentWindow) throw new Error("Could not find window in iframe");
                    return e.contentWindow;
                });
            }
            function An(e, n) {
                void 0 === e && (e = {});
                var t = e.style || {},
                    r = (function (e, n, t) {
                        void 0 === e && (e = "div"), void 0 === n && (n = {}), (e = e.toLowerCase());
                        var r,
                            o,
                            i,
                            a = document.createElement(e);
                        if ((n.style && Be(a.style, n.style), n.class && (a.className = n.class.join(" ")), n.id && a.setAttribute("id", n.id), n.attributes))
                            for (var u = 0, l = Object.keys(n.attributes); u < l.length; u++) {
                                var c = l[u];
                                a.setAttribute(c, n.attributes[c]);
                            }
                        if ((n.styleSheet && ((r = a), (o = n.styleSheet), void 0 === i && (i = window.document), r.styleSheet ? (r.styleSheet.cssText = o) : r.appendChild(i.createTextNode(o))), n.html)) {
                            if ("iframe" === e) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
                            a.innerHTML = n.html;
                        }
                        return a;
                    })("iframe", { attributes: x({ allowTransparency: "true" }, e.attributes || {}), style: x({ backgroundColor: "transparent", border: "none" }, t), html: e.html, class: e.class }),
                    o = window.navigator.userAgent.match(/MSIE|Edge/i);
                return r.hasAttribute("id") || r.setAttribute("id", xe()), Tn(r), n && En(n).appendChild(r), (e.url || o) && r.setAttribute("src", e.url || "about:blank"), r;
            }
            function kn(e, n, t) {
                return (
                    e.addEventListener(n, t),
                        {
                            cancel: function () {
                                e.removeEventListener(n, t);
                            },
                        }
                );
            }
            function _n(e, n, t) {
                t = Me(t);
                for (var r = 0; r < n.length; r++) e.addEventListener(n[r], t);
                return {
                    cancel: Me(function () {
                        for (var r = 0; r < n.length; r++) e.removeEventListener(n[r], t);
                    }),
                };
            }
            var Rn = ["webkit", "moz", "ms", "o"],
                Mn = ["animationstart", "webkitAnimationStart", "oAnimationStart", "MSAnimationStart"],
                Fn = ["animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd"];
            function In(e, n, t, r) {
                return (
                    void 0 === r && (r = 1e3),
                        new R(function (o, i) {
                            var a = En(e);
                            if (!a) return o();
                            var u,
                                l,
                                c,
                                s,
                                d = !1;
                            function f() {
                                clearTimeout(u), clearTimeout(l), c.cancel(), s.cancel();
                            }
                            (c = _n(a, Mn, function (e) {
                                e.target === a &&
                                e.animationName === n &&
                                (clearTimeout(u),
                                    e.stopPropagation(),
                                    c.cancel(),
                                    (d = !0),
                                    (l = setTimeout(function () {
                                        f(), o();
                                    }, r)));
                            })),
                                (s = _n(a, Fn, function (e) {
                                    if (e.target === a && e.animationName === n) return f(), "string" == typeof e.animationName && e.animationName !== n ? i("Expected animation name to be " + n + ", found " + e.animationName) : o();
                                })),
                                (function (e, n, t) {
                                    e.style[n] = t;
                                    for (var r = Ke(n), o = 0; o < Rn.length; o++) e.style["" + Rn[o] + r] = t;
                                })(a, "animationName", n),
                                (u = setTimeout(function () {
                                    if (!d) return f(), o();
                                }, 200)),
                            t && t(f);
                        })
                );
            }
            function Dn(e) {
                e.style.setProperty("display", "");
            }
            function Bn(e) {
                e.style.setProperty("display", "none", "important");
            }
            function jn(e) {
                e && e.parentNode && e.parentNode.removeChild(e);
            }
            function Hn(e) {
                return !(e && e.parentNode && e.ownerDocument && e.ownerDocument.documentElement && e.ownerDocument.documentElement.contains(e));
            }
            function qn(e, n, t) {
                var r = void 0 === t ? {} : t,
                    o = r.width,
                    i = void 0 === o || o,
                    a = r.height,
                    u = void 0 === a || a,
                    l = r.interval,
                    c = void 0 === l ? 100 : l,
                    s = r.win,
                    d = void 0 === s ? window : s,
                    f = e.offsetWidth,
                    p = e.offsetHeight,
                    h = !1;
                n({ width: f, height: p });
                var m,
                    g,
                    y = function () {
                        if (
                            !h &&
                            (function (e) {
                                return Boolean(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                            })(e)
                        ) {
                            var t = e.offsetWidth,
                                r = e.offsetHeight;
                            ((i && t !== f) || (u && r !== p)) && n({ width: t, height: r }), (f = t), (p = r);
                        }
                    };
                return (
                    d.addEventListener("resize", y),
                        void 0 !== d.ResizeObserver
                            ? ((m = new d.ResizeObserver(y)).observe(e), (g = Ge(y, 10 * c)))
                            : void 0 !== d.MutationObserver
                                ? ((m = new d.MutationObserver(y)).observe(e, { attributes: !0, childList: !0, subtree: !0, characterData: !1 }), (g = Ge(y, 10 * c)))
                                : (g = Ge(y, c)),
                        {
                            cancel: function () {
                                (h = !0), m.disconnect(), window.removeEventListener("resize", y), g.cancel();
                            },
                        }
                );
            }
            function Wn(e) {
                for (; e.parentNode; ) e = e.parentNode;
                return "[object ShadowRoot]" === e.toString();
            }
            var Un = "undefined" != typeof document ? document.currentScript : null,
                zn = Ae(function () {
                    if (Un) return Un;
                    if (
                        (Un = (function () {
                            try {
                                var e = (function () {
                                        try {
                                            throw new Error("_");
                                        } catch (e) {
                                            return e.stack || "";
                                        }
                                    })(),
                                    n = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(e),
                                    t = n && n[1];
                                if (!t) return;
                                for (var r = 0, o = [].slice.call(document.getElementsByTagName("script")).reverse(); r < o.length; r++) {
                                    var i = o[r];
                                    if (i.src && i.src === t) return i;
                                }
                            } catch (e) {}
                        })())
                    )
                        return Un;
                    throw new Error("Can not determine current script");
                }),
                Zn = xe(),
                Gn = Ae(function () {
                    var e;
                    try {
                        e = zn();
                    } catch (e) {
                        return Zn;
                    }
                    var n = e.getAttribute("data-uid");
                    if (n && "string" == typeof n) return n;
                    if ((n = e.getAttribute("data-uid-auto")) && "string" == typeof n) return n;
                    if (e.src) {
                        var t = (function (e) {
                            for (var n = "", t = 0; t < e.length; t++) {
                                var r = e[t].charCodeAt(0) * t;
                                e[t + 1] && (r += e[t + 1].charCodeAt(0) * (t - 1)), (n += String.fromCharCode(97 + (Math.abs(r) % 26)));
                            }
                            return n;
                        })(JSON.stringify({ src: e.src, dataset: e.dataset }));
                        n = "uid_" + t.slice(t.length - 30);
                    } else n = xe();
                    return e.setAttribute("data-uid-auto", n), n;
                });
            function Vn(e) {
                var n = e.name,
                    t = e.lifetime,
                    r = void 0 === t ? 12e5 : t;
                return _e(
                    Vn,
                    function () {
                        var e,
                            t = "__" + n + "_storage__",
                            o = xe();
                        function i(n) {
                            var r,
                                i = vn();
                            if ((e && (r = e), !r && i)) {
                                var a = window.localStorage.getItem(t);
                                a && (r = JSON.parse(a));
                            }
                            r || (r = Oe()[t]), r || (r = { id: o }), r.id || (r.id = o), (e = r);
                            var u = n(r);
                            return i ? window.localStorage.setItem(t, JSON.stringify(r)) : (Oe()[t] = r), (e = null), u;
                        }
                        function a() {
                            return i(function (e) {
                                return e.id;
                            });
                        }
                        function u(e) {
                            return i(function (n) {
                                var t = n.__session__,
                                    o = Date.now();
                                return t && o - t.created > r && (t = null), t || (t = { guid: xe(), created: o }), (n.__session__ = t), e(t);
                            });
                        }
                        return {
                            getState: i,
                            getID: a,
                            isStateFresh: function () {
                                return a() === o;
                            },
                            getSessionState: function (e) {
                                return u(function (n) {
                                    return (n.state = n.state || {}), e(n.state);
                                });
                            },
                            getSessionID: function () {
                                return u(function (e) {
                                    return e.guid;
                                });
                            },
                        };
                    },
                    [{ name: n, lifetime: r }]
                );
            }
            function Yn() {
                return Vn({ name: "belter_experiment" });
            }
            function Kn(e) {
                return Yn().getSessionState(function (n) {
                    return (n.loggedBeacons = n.loggedBeacons || []), -1 === n.loggedBeacons.indexOf(e) && (n.loggedBeacons.push(e), !0);
                });
            }
            function Jn(e) {
                return Math.floor(Math.random() * e);
            }
            var Xn = [];
            function $n(e) {
                var n = e.url,
                    t = e.method,
                    r = void 0 === t ? "get" : t,
                    o = e.headers,
                    i = void 0 === o ? {} : o,
                    a = e.json,
                    u = e.data,
                    l = e.body,
                    c = e.win,
                    s = void 0 === c ? window : c,
                    d = e.timeout,
                    f = void 0 === d ? 0 : d;
                return new R(function (e, t) {
                    if ((a && u) || (a && l) || (u && a)) throw new Error("Only options.json or options.data or options.body should be passed");
                    for (var o = {}, c = 0, d = Object.keys(i); c < d.length; c++) {
                        var p = d[c];
                        o[p.toLowerCase()] = i[p];
                    }
                    a ? (o["content-type"] = o["content-type"] || "application/json") : (u || l) && (o["content-type"] = o["content-type"] || "application/x-www-form-urlencoded; charset=utf-8"), (o.accept = o.accept || "application/json");
                    for (var h = 0; h < Xn.length; h++)
                        for (var m = (0, Xn[h])(), g = 0, y = Object.keys(m); g < y.length; g++) {
                            var v = y[g];
                            o[v.toLowerCase()] = m[v];
                        }
                    var w = new s.XMLHttpRequest();
                    for (var b in (w.addEventListener(
                        "load",
                        function () {
                            var o = (function (e) {
                                void 0 === e && (e = "");
                                for (var n = {}, t = 0, r = e.trim().split("\n"); t < r.length; t++) {
                                    var o = r[t].split(":"),
                                        i = o[0],
                                        a = o.slice(1);
                                    n[i.toLowerCase()] = a.join(":").trim();
                                }
                                return n;
                            })(this.getAllResponseHeaders());
                            if (!this.status) return t(new Error("Request to " + r.toLowerCase() + " " + n + " failed: no response status code."));
                            var i = o["content-type"],
                                a = i && (0 === i.indexOf("application/json") || 0 === i.indexOf("text/json")),
                                u = this.responseText;
                            try {
                                u = JSON.parse(u);
                            } catch (e) {
                                if (a) return t(new Error("Invalid json: " + this.responseText + "."));
                            }
                            return e({ status: this.status, headers: o, body: u });
                        },
                        !1
                    ),
                        w.addEventListener(
                            "error",
                            function (e) {
                                t(new Error("Request to " + r.toLowerCase() + " " + n + " failed: " + e.toString() + "."));
                            },
                            !1
                        ),
                        w.open(r, n, !0),
                        o))
                        o.hasOwnProperty(b) && w.setRequestHeader(b, o[b]);
                    a
                        ? (l = JSON.stringify(a))
                        : u &&
                        (l = Object.keys(u)
                            .map(function (e) {
                                return encodeURIComponent(e) + "=" + (u ? encodeURIComponent(u[e]) : "");
                            })
                            .join("&")),
                        (w.timeout = f),
                        (w.ontimeout = function () {
                            t(new Error("Request to " + r.toLowerCase() + " " + n + " has timed out"));
                        }),
                        w.send(l);
                });
            }
            function Qn(e) {
                return "string" == typeof e && /^[0-9]+%$/.test(e);
            }
            function et(e) {
                if ("number" == typeof e) return e;
                var n = e.match(/^([0-9]+)(px|%)$/);
                if (!n) throw new Error("Could not match css value from " + e);
                return parseInt(n[1], 10);
            }
            function nt(e) {
                return et(e) + "px";
            }
            function tt(e) {
                return "number" == typeof e ? nt(e) : Qn(e) ? e : nt(e);
            }
            function rt(e, n) {
                if ("number" == typeof e) return e;
                if (Qn(e))
                    return (function (e, n) {
                        return parseInt((e * et(n)) / 100, 10);
                    })(n, e);
                if ("string" == typeof (t = e) && /^[0-9]+px$/.test(t)) return et(e);
                var t;
                throw new Error("Can not normalize dimension: " + e);
            }
            var ot = {
                    AD: "AD",
                    AE: "AE",
                    AG: "AG",
                    AI: "AI",
                    AL: "AL",
                    AM: "AM",
                    AN: "AN",
                    AO: "AO",
                    AR: "AR",
                    AT: "AT",
                    AU: "AU",
                    AW: "AW",
                    AZ: "AZ",
                    BA: "BA",
                    BB: "BB",
                    BE: "BE",
                    BF: "BF",
                    BG: "BG",
                    BH: "BH",
                    BI: "BI",
                    BJ: "BJ",
                    BM: "BM",
                    BN: "BN",
                    BO: "BO",
                    BR: "BR",
                    BS: "BS",
                    BT: "BT",
                    BW: "BW",
                    BY: "BY",
                    BZ: "BZ",
                    CA: "CA",
                    CD: "CD",
                    CG: "CG",
                    CH: "CH",
                    CI: "CI",
                    CK: "CK",
                    CL: "CL",
                    CM: "CM",
                    CN: "CN",
                    CO: "CO",
                    CR: "CR",
                    CV: "CV",
                    CY: "CY",
                    CZ: "CZ",
                    DE: "DE",
                    DJ: "DJ",
                    DK: "DK",
                    DM: "DM",
                    DO: "DO",
                    DZ: "DZ",
                    EC: "EC",
                    EE: "EE",
                    EG: "EG",
                    ER: "ER",
                    ES: "ES",
                    ET: "ET",
                    FI: "FI",
                    FJ: "FJ",
                    FK: "FK",
                    FM: "FM",
                    FO: "FO",
                    FR: "FR",
                    GA: "GA",
                    GB: "GB",
                    GD: "GD",
                    GE: "GE",
                    GF: "GF",
                    GI: "GI",
                    GL: "GL",
                    GM: "GM",
                    GN: "GN",
                    GP: "GP",
                    GR: "GR",
                    GT: "GT",
                    GW: "GW",
                    GY: "GY",
                    HK: "HK",
                    HN: "HN",
                    HR: "HR",
                    HU: "HU",
                    ID: "ID",
                    IE: "IE",
                    IL: "IL",
                    IN: "IN",
                    IS: "IS",
                    IT: "IT",
                    JM: "JM",
                    JO: "JO",
                    JP: "JP",
                    KE: "KE",
                    KG: "KG",
                    KH: "KH",
                    KI: "KI",
                    KM: "KM",
                    KN: "KN",
                    KR: "KR",
                    KW: "KW",
                    KY: "KY",
                    KZ: "KZ",
                    LA: "LA",
                    LC: "LC",
                    LI: "LI",
                    LK: "LK",
                    LS: "LS",
                    LT: "LT",
                    LU: "LU",
                    LV: "LV",
                    MA: "MA",
                    MC: "MC",
                    MD: "MD",
                    ME: "ME",
                    MG: "MG",
                    MH: "MH",
                    MK: "MK",
                    ML: "ML",
                    MN: "MN",
                    MQ: "MQ",
                    MR: "MR",
                    MS: "MS",
                    MT: "MT",
                    MU: "MU",
                    MV: "MV",
                    MW: "MW",
                    MX: "MX",
                    MY: "MY",
                    MZ: "MZ",
                    NA: "NA",
                    NC: "NC",
                    NE: "NE",
                    NF: "NF",
                    NG: "NG",
                    NI: "NI",
                    NL: "NL",
                    NO: "NO",
                    NP: "NP",
                    NR: "NR",
                    NU: "NU",
                    NZ: "NZ",
                    OM: "OM",
                    PA: "PA",
                    PE: "PE",
                    PF: "PF",
                    PG: "PG",
                    PH: "PH",
                    PL: "PL",
                    PM: "PM",
                    PN: "PN",
                    PT: "PT",
                    PW: "PW",
                    PY: "PY",
                    QA: "QA",
                    RE: "RE",
                    RO: "RO",
                    RS: "RS",
                    RU: "RU",
                    RW: "RW",
                    SA: "SA",
                    SB: "SB",
                    SC: "SC",
                    SE: "SE",
                    SG: "SG",
                    SH: "SH",
                    SI: "SI",
                    SJ: "SJ",
                    SK: "SK",
                    SL: "SL",
                    SM: "SM",
                    SN: "SN",
                    SO: "SO",
                    SR: "SR",
                    ST: "ST",
                    SV: "SV",
                    SZ: "SZ",
                    TC: "TC",
                    TD: "TD",
                    TG: "TG",
                    TH: "TH",
                    TJ: "TJ",
                    TM: "TM",
                    TN: "TN",
                    TO: "TO",
                    TR: "TR",
                    TT: "TT",
                    TV: "TV",
                    TW: "TW",
                    TZ: "TZ",
                    UA: "UA",
                    UG: "UG",
                    US: "US",
                    UY: "UY",
                    VA: "VA",
                    VC: "VC",
                    VE: "VE",
                    VG: "VG",
                    VN: "VN",
                    VU: "VU",
                    WF: "WF",
                    WS: "WS",
                    YE: "YE",
                    YT: "YT",
                    ZA: "ZA",
                    ZM: "ZM",
                    ZW: "ZW",
                },
                it = {
                    AR: "ar",
                    BG: "bg",
                    CS: "cs",
                    DA: "da",
                    DE: "de",
                    EL: "el",
                    EN: "en",
                    ES: "es",
                    ET: "et",
                    FI: "fi",
                    FR: "fr",
                    HE: "he",
                    HU: "hu",
                    ID: "id",
                    IT: "it",
                    JA: "ja",
                    KO: "ko",
                    LT: "lt",
                    LV: "lv",
                    MS: "ms",
                    NL: "nl",
                    NO: "no",
                    PL: "pl",
                    PT: "pt",
                    RO: "ro",
                    RU: "ru",
                    SI: "si",
                    SK: "sk",
                    SL: "sl",
                    SQ: "sq",
                    SV: "sv",
                    TH: "th",
                    TL: "tl",
                    TR: "tr",
                    VI: "vi",
                    ZH: "zh",
                    ZH_HANT: "zh_Hant",
                },
                at = {
                    AD: [it.EN, it.FR, it.ES, it.ZH],
                    AE: [it.EN, it.FR, it.ES, it.ZH, it.AR],
                    AG: [it.EN, it.FR, it.ES, it.ZH],
                    AI: [it.EN, it.FR, it.ES, it.ZH],
                    AL: [it.SQ, it.EN],
                    AM: [it.EN, it.FR, it.ES, it.ZH],
                    AN: [it.EN, it.FR, it.ES, it.ZH],
                    AO: [it.EN, it.FR, it.ES, it.ZH],
                    AR: [it.ES, it.EN],
                    AT: [it.DE, it.EN],
                    AU: [it.EN],
                    AW: [it.EN, it.FR, it.ES, it.ZH],
                    AZ: [it.EN, it.FR, it.ES, it.ZH],
                    BA: [it.EN],
                    BB: [it.EN, it.FR, it.ES, it.ZH],
                    BE: [it.EN, it.NL, it.FR],
                    BF: [it.FR, it.EN, it.ES, it.ZH],
                    BG: [it.BG, it.EN],
                    BH: [it.AR, it.EN, it.FR, it.ES, it.ZH],
                    BI: [it.FR, it.EN, it.ES, it.ZH],
                    BJ: [it.FR, it.EN, it.ES, it.ZH],
                    BM: [it.EN, it.FR, it.ES, it.ZH],
                    BN: [it.MS, it.EN],
                    BO: [it.ES, it.EN, it.FR, it.ZH],
                    BR: [it.PT, it.EN],
                    BS: [it.EN, it.FR, it.ES, it.ZH],
                    BT: [it.EN],
                    BW: [it.EN, it.FR, it.ES, it.ZH],
                    BY: [it.EN],
                    BZ: [it.EN, it.ES, it.FR, it.ZH],
                    CA: [it.EN, it.FR],
                    CD: [it.FR, it.EN, it.ES, it.ZH],
                    CG: [it.EN, it.FR, it.ES, it.ZH],
                    CH: [it.DE, it.FR, it.EN],
                    CI: [it.FR, it.EN],
                    CK: [it.EN, it.FR, it.ES, it.ZH],
                    CL: [it.ES, it.EN, it.FR, it.ZH],
                    CM: [it.FR, it.EN],
                    CN: [it.ZH],
                    CO: [it.ES, it.EN, it.FR, it.ZH],
                    CR: [it.ES, it.EN, it.FR, it.ZH],
                    CV: [it.EN, it.FR, it.ES, it.ZH],
                    CY: [it.EN],
                    CZ: [it.CS, it.EN],
                    DE: [it.DE, it.EN],
                    DJ: [it.FR, it.EN, it.ES, it.ZH],
                    DK: [it.DA, it.EN],
                    DM: [it.EN, it.FR, it.ES, it.ZH],
                    DO: [it.ES, it.EN, it.FR, it.ZH],
                    DZ: [it.AR, it.EN, it.FR, it.ES, it.ZH],
                    EC: [it.ES, it.EN, it.FR, it.ZH],
                    EE: [it.ET, it.EN, it.RU],
                    EG: [it.AR, it.EN, it.FR, it.ES, it.ZH],
                    ER: [it.EN, it.FR, it.ES, it.ZH],
                    ES: [it.ES, it.EN],
                    ET: [it.EN, it.FR, it.ES, it.ZH],
                    FI: [it.FI, it.EN],
                    FJ: [it.EN, it.FR, it.ES, it.ZH],
                    FK: [it.EN, it.FR, it.ES, it.ZH],
                    FM: [it.EN],
                    FO: [it.DA, it.EN, it.FR, it.ES, it.ZH],
                    FR: [it.FR, it.EN],
                    GA: [it.FR, it.EN, it.ES, it.ZH],
                    GB: [it.EN],
                    GD: [it.EN, it.FR, it.ES, it.ZH],
                    GE: [it.EN, it.FR, it.ES, it.ZH],
                    GF: [it.EN, it.FR, it.ES, it.ZH],
                    GI: [it.EN, it.FR, it.ES, it.ZH],
                    GL: [it.DA, it.EN, it.FR, it.ES, it.ZH],
                    GM: [it.EN, it.FR, it.ES, it.ZH],
                    GN: [it.FR, it.EN, it.ES, it.ZH],
                    GP: [it.EN, it.FR, it.ES, it.ZH],
                    GR: [it.EL, it.EN],
                    GT: [it.ES, it.EN, it.FR, it.ZH],
                    GW: [it.EN, it.FR, it.ES, it.ZH],
                    GY: [it.EN, it.FR, it.ES, it.ZH],
                    HK: [it.EN, it.ZH_HANT, it.ZH],
                    HN: [it.ES, it.EN, it.FR, it.ZH],
                    HR: [it.EN],
                    HU: [it.HU, it.EN],
                    ID: [it.ID, it.EN],
                    IE: [it.EN, it.FR, it.ES, it.ZH],
                    IL: [it.HE, it.EN],
                    IN: [it.EN],
                    IS: [it.EN],
                    IT: [it.IT, it.EN],
                    JM: [it.EN, it.ES, it.FR, it.ZH],
                    JO: [it.AR, it.EN, it.FR, it.ES, it.ZH],
                    JP: [it.JA, it.EN],
                    KE: [it.EN, it.FR, it.ES, it.ZH],
                    KG: [it.EN, it.FR, it.ES, it.ZH],
                    KH: [it.EN],
                    KI: [it.EN, it.FR, it.ES, it.ZH],
                    KM: [it.FR, it.EN, it.ES, it.ZH],
                    KN: [it.EN, it.FR, it.ES, it.ZH],
                    KR: [it.KO, it.EN],
                    KW: [it.AR, it.EN, it.FR, it.ES, it.ZH],
                    KY: [it.EN, it.FR, it.ES, it.ZH],
                    KZ: [it.EN, it.FR, it.ES, it.ZH],
                    LA: [it.EN],
                    LC: [it.EN, it.FR, it.ES, it.ZH],
                    LI: [it.EN, it.FR, it.ES, it.ZH],
                    LK: [it.SI, it.EN],
                    LS: [it.EN, it.FR, it.ES, it.ZH],
                    LT: [it.LT, it.EN, it.RU, it.ZH],
                    LU: [it.EN, it.DE, it.FR, it.ES, it.ZH],
                    LV: [it.LV, it.EN, it.RU],
                    MA: [it.AR, it.EN, it.FR, it.ES, it.ZH],
                    MC: [it.FR, it.EN],
                    MD: [it.EN],
                    ME: [it.EN],
                    MG: [it.EN, it.FR, it.ES, it.ZH],
                    MH: [it.EN, it.FR, it.ES, it.ZH],
                    MK: [it.EN],
                    ML: [it.FR, it.EN, it.ES, it.ZH],
                    MN: [it.EN],
                    MQ: [it.EN, it.FR, it.ES, it.ZH],
                    MR: [it.EN, it.FR, it.ES, it.ZH],
                    MS: [it.EN, it.FR, it.ES, it.ZH],
                    MT: [it.EN],
                    MU: [it.EN, it.FR, it.ES, it.ZH],
                    MV: [it.EN],
                    MW: [it.EN, it.FR, it.ES, it.ZH],
                    MX: [it.ES, it.EN],
                    MY: [it.MS, it.EN],
                    MZ: [it.EN, it.FR, it.ES, it.ZH],
                    NA: [it.EN, it.FR, it.ES, it.ZH],
                    NC: [it.EN, it.FR, it.ES, it.ZH],
                    NE: [it.FR, it.EN, it.ES, it.ZH],
                    NF: [it.EN, it.FR, it.ES, it.ZH],
                    NG: [it.EN],
                    NI: [it.ES, it.EN, it.FR, it.ZH],
                    NL: [it.NL, it.EN],
                    NO: [it.NO, it.EN],
                    NP: [it.EN],
                    NR: [it.EN, it.FR, it.ES, it.ZH],
                    NU: [it.EN, it.FR, it.ES, it.ZH],
                    NZ: [it.EN, it.FR, it.ES, it.ZH],
                    OM: [it.AR, it.EN, it.FR, it.ES, it.ZH],
                    PA: [it.ES, it.EN, it.FR, it.ZH],
                    PE: [it.ES, it.EN, it.FR, it.ZH],
                    PF: [it.EN, it.FR, it.ES, it.ZH],
                    PG: [it.EN, it.FR, it.ES, it.ZH],
                    PH: [it.TL, it.EN],
                    PL: [it.PL, it.EN],
                    PM: [it.EN, it.FR, it.ES, it.ZH],
                    PN: [it.EN, it.FR, it.ES, it.ZH],
                    PT: [it.PT, it.EN],
                    PW: [it.EN, it.FR, it.ES, it.ZH],
                    PY: [it.ES, it.EN],
                    QA: [it.EN, it.FR, it.ES, it.ZH, it.AR],
                    RE: [it.EN, it.FR, it.ES, it.ZH],
                    RO: [it.RO, it.EN],
                    RS: [it.EN, it.FR, it.ES, it.ZH],
                    RU: [it.RU, it.EN],
                    RW: [it.FR, it.EN, it.ES, it.ZH],
                    SA: [it.AR, it.EN, it.FR, it.ES, it.ZH],
                    SB: [it.EN, it.FR, it.ES, it.ZH],
                    SC: [it.FR, it.EN, it.ES, it.ZH],
                    SE: [it.SV, it.EN],
                    SG: [it.EN],
                    SH: [it.EN, it.FR, it.ES, it.ZH],
                    SI: [it.SL, it.EN],
                    SJ: [it.EN, it.FR, it.ES, it.ZH],
                    SK: [it.SK, it.EN],
                    SL: [it.EN, it.FR, it.ES, it.ZH],
                    SM: [it.EN, it.FR, it.ES, it.ZH],
                    SN: [it.FR, it.EN, it.ES, it.ZH],
                    SO: [it.EN, it.FR, it.ES, it.ZH],
                    SR: [it.EN, it.FR, it.ES, it.ZH],
                    ST: [it.EN, it.FR, it.ES, it.ZH],
                    SV: [it.ES, it.EN, it.FR, it.ZH],
                    SZ: [it.EN, it.FR, it.ES, it.ZH],
                    TC: [it.EN, it.FR, it.ES, it.ZH],
                    TD: [it.FR, it.EN, it.ES, it.ZH],
                    TG: [it.FR, it.EN, it.ES, it.ZH],
                    TH: [it.TH, it.EN],
                    TJ: [it.EN, it.FR, it.ES, it.ZH],
                    TM: [it.EN, it.FR, it.ES, it.ZH],
                    TN: [it.AR, it.EN, it.FR, it.ES, it.ZH],
                    TO: [it.EN],
                    TR: [it.TR, it.EN],
                    TT: [it.EN, it.FR, it.ES, it.ZH],
                    TV: [it.EN, it.FR, it.ES, it.ZH],
                    TW: [it.ZH_HANT, it.ZH, it.EN],
                    TZ: [it.EN, it.FR, it.ES, it.ZH],
                    UA: [it.EN, it.RU, it.FR, it.ES, it.ZH],
                    UG: [it.EN, it.FR, it.ES, it.ZH],
                    US: [it.EN, it.FR, it.ES, it.ZH],
                    UY: [it.ES, it.EN, it.FR, it.ZH],
                    VA: [it.EN, it.FR, it.ES, it.ZH],
                    VC: [it.EN, it.FR, it.ES, it.ZH],
                    VE: [it.ES, it.EN, it.FR, it.ZH],
                    VG: [it.EN, it.FR, it.ES, it.ZH],
                    VN: [it.VI, it.EN],
                    VU: [it.EN, it.FR, it.ES, it.ZH],
                    WF: [it.EN, it.FR, it.ES, it.ZH],
                    WS: [it.EN],
                    YE: [it.AR, it.EN, it.FR, it.ES, it.ZH],
                    YT: [it.EN, it.FR, it.ES, it.ZH],
                    ZA: [it.EN, it.FR, it.ES, it.ZH],
                    ZM: [it.EN, it.FR, it.ES, it.ZH],
                    ZW: [it.EN],
                },
                ut = { HOME: "home", PRODUCT: "product", CART: "cart", CHECKOUT: "checkout", PRODUCT_LISTING: "product-listing", SEARCH_RESULTS: "search-results", PRODUCT_DETAILS: "product-details", MINI_CART: "mini-cart" },
                lt = { LOCAL: "local", STAGE: "stage", SANDBOX: "sandbox", PRODUCTION: "production", TEST: "test" },
                ct = {
                    PAYPAL: "paypal",
                    VENMO: "venmo",
                    APPLEPAY: "applepay",
                    ITAU: "itau",
                    CREDIT: "credit",
                    PAYLATER: "paylater",
                    CARD: "card",
                    IDEAL: "ideal",
                    SEPA: "sepa",
                    BANCONTACT: "bancontact",
                    GIROPAY: "giropay",
                    SOFORT: "sofort",
                    EPS: "eps",
                    MYBANK: "mybank",
                    P24: "p24",
                    VERKKOPANKKI: "verkkopankki",
                    PAYU: "payu",
                    BLIK: "blik",
                    TRUSTLY: "trustly",
                    ZIMPLER: "zimpler",
                    MAXIMA: "maxima",
                    OXXO: "oxxo",
                    BOLETO: "boleto",
                    BOLETOBANCARIO: "boletobancario",
                    WECHATPAY: "wechatpay",
                    MERCADOPAGO: "mercadopago",
                    MULTIBANCO: "multibanco",
                },
                st = { DESKTOP: "desktop", MOBILE: "mobile" },
                dt = [ct.IDEAL, ct.BANCONTACT, ct.GIROPAY, ct.SOFORT, ct.EPS, ct.MYBANK, ct.P24, ct.PAYU, ct.BLIK, ct.TRUSTLY, ct.ZIMPLER, ct.MAXIMA, ct.OXXO, ct.BOLETO, ct.BOLETOBANCARIO, ct.WECHATPAY, ct.MERCADOPAGO, ct.MULTIBANCO];
            function ft() {
                return "sandbox";
            }
            function pt() {}
            function ht() {}
            function mt() {
                return "5.0.332";
            }
            function gt() {
                return "f5312700fa979";
            }
            function yt() {
                return !1;
            }
            function vt() {
                return ["buttons"];
            }
            function wt() {
                return Object({
                    paypal: Object({ eligible: !0, vaultable: !0 }),
                    paylater: Object({ eligible: !0, products: Object({ payIn3: Object({ eligible: !1, variant: null }), payIn4: Object({ eligible: !1, variant: null }), paylater: Object({ eligible: !0, variant: null }) }) }),
                    card: Object({
                        eligible: !0,
                        branded: !1,
                        installments: !1,
                        vendors: Object({
                            visa: Object({ eligible: !0, vaultable: !0 }),
                            mastercard: Object({ eligible: !0, vaultable: !0 }),
                            amex: Object({ eligible: !0, vaultable: !0 }),
                            discover: Object({ eligible: !0, vaultable: !0 }),
                            hiper: Object({ eligible: !1, vaultable: !1 }),
                            elo: Object({ eligible: !1, vaultable: !0 }),
                            jcb: Object({ eligible: !1, vaultable: !0 }),
                        }),
                        guestEnabled: !1,
                    }),
                    venmo: Object({ eligible: !0 }),
                    itau: Object({ eligible: !1 }),
                    credit: Object({ eligible: !1 }),
                    applepay: Object({ eligible: !1 }),
                    sepa: Object({ eligible: !1 }),
                    ideal: Object({ eligible: !1 }),
                    bancontact: Object({ eligible: !1 }),
                    giropay: Object({ eligible: !1 }),
                    eps: Object({ eligible: !1 }),
                    sofort: Object({ eligible: !1 }),
                    mybank: Object({ eligible: !1 }),
                    p24: Object({ eligible: !1 }),
                    zimpler: Object({ eligible: !1 }),
                    wechatpay: Object({ eligible: !1 }),
                    payu: Object({ eligible: !1 }),
                    blik: Object({ eligible: !1 }),
                    trustly: Object({ eligible: !1 }),
                    oxxo: Object({ eligible: !1 }),
                    maxima: Object({ eligible: !1 }),
                    boleto: Object({ eligible: !1 }),
                    boletobancario: Object({ eligible: !1 }),
                    mercadopago: Object({ eligible: !1 }),
                    multibanco: Object({ eligible: !1 }),
                });
            }
            function bt() {
                return f() ? st.MOBILE : st.DESKTOP;
            }
            var Ct = "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R",
                Et = { sandbox: Ct, sb: Ct, test: Ct },
                Lt = Ae(function () {
                    try {
                        return zn();
                    } catch (e) {
                        throw new Error('PayPal Payments SDK script not found on page! Expected to find <script src="https://www.sandbox.paypal.com/sdk/js">\n\n' + Fe(e));
                    }
                }),
                xt = Ae(function () {
                    for (var e = {}, n = 0, t = Lt().attributes; n < t.length; n++) {
                        var r = t[n];
                        0 === r.name.indexOf("data-") && (e[r.name] = r.value);
                    }
                    return (e["data-uid"] = Gn()), e;
                });
            function Ot(e, n) {
                return xt()[e] || n;
            }
            var Pt = function (e, n) {
                return pn(Lt().src.split("?")[1] || "")[e] || n;
            };
            function St(e, n) {
                return "true" === Pt(e, n ? n.toString() : "false");
            }
            function Tt() {
                var e = Pt("client-id");
                if (!e) throw new Error("Expected client-id parameter in sdk url");
                return Et[e] ? Et[e] : e;
            }
            function Nt() {
                var e = Pt("merchant-id");
                if ("*" === e) {
                    var n = Ot("data-merchant-id");
                    if (!n) throw new Error("Must pass data-merchant-id when merchant-id=* passed in url");
                    var t = n.split(",");
                    if (t.length <= 1) throw new Error("Must pass multiple merchant ids to data-merchant-id. If passing a single id, pass merchant-id=XYZ in url");
                    if (
                        t.some(function (e, n) {
                            return t && t.indexOf(e) !== n;
                        })
                    )
                        throw new Error("Duplicates data-merchant-id. Must pass unique merchant ids to data-merchant-id.");
                    return t;
                }
                return e ? e.split(",") : [];
            }
            function At() {
                return Pt("intent", "capture");
            }
            function kt() {
                return St("commit", (At(), !0));
            }
            function _t() {
                return St("vault", !1);
            }
            function Rt() {
                return Pt("currency", "USD");
            }
            function Mt() {
                var e = Pt("enable-funding");
                return e ? e.split(",") : [];
            }
            function Ft() {
                var e = Pt("disable-funding");
                return e ? e.split(",") : [];
            }
            function It() {
                var e = Pt("disable-card");
                return e ? e.split(",") : [];
            }
            function Dt() {
                return Pt("buyer-country");
            }
            function Bt() {
                return Ot("data-namespace") || "paypal";
            }
            function jt() {
                var e = Ot("data-amount");
                if (e && !e.match(/^\d+\.\d\d$/)) throw new Error("Invalid amount: " + e);
                return e;
            }
            function Ht() {
                return Ot("data-user-id-token");
            }
            function qt() {
                var e = Ot("data-client-token");
                if (e) return JSON.parse(Le(e)).paypal.accessToken;
            }
            function Wt() {
                return Ot("data-partner-attribution-id");
            }
            function Ut() {
                return "true" === Ot("data-popups-disabled");
            }
            function zt() {
                var e = Pt("locale");
                if (e)
                    return (function (e) {
                        var n = e.split("_"),
                            t = n[0],
                            r = n[1];
                        t = it[t.toUpperCase()];
                        var o = at[(r = ot[r])];
                        return o && -1 !== o.indexOf(it.ZH_HANT) && t === it.ZH && (t = it.ZH_HANT), { lang: t, country: r };
                    })(e);
                for (
                    var n = function (e, n) {
                            var t = n[e],
                                r = t.country,
                                o = t.lang;
                            if (((r = r && ot[r]), (o = o && it[o.toUpperCase()]), r && o && at[r] && -1 !== at[r].indexOf(o))) return { v: { country: r, lang: o } };
                            if (o) {
                                var i = Object.keys(at).filter(function (e) {
                                    return at[e].some(function (e) {
                                        return e === o;
                                    });
                                });
                                if (1 === i.length) return { v: { country: i[0], lang: o } };
                            }
                        },
                        t = 0,
                        r = wn();
                    t < r.length;
                    t++
                ) {
                    var o = n(t, r);
                    if ("object" == typeof o) return o.v;
                }
                for (var i = 0, a = wn(); i < a.length; i++) {
                    var u = a[i].country;
                    if (at.hasOwnProperty(u)) return { country: u, lang: at[u][0] };
                }
                return { lang: it.EN, country: ot.US };
            }
            function Zt() {
                return Ot("data-csp-nonce") || "";
            }
            function Gt() {
                return xt().hasOwnProperty("data-enable-3ds");
            }
            function Vt() {
                return Ot("data-user-experience-flow");
            }
            function Yt(e) {
                var n = (function (e, n) {
                    if ("object" != typeof e || null === e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, "string");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == typeof n ? n : String(n);
            }
            var Kt = ["warn", "error"],
                Jt = ["error", "warn", "info", "debug"],
                Xt = function (e) {
                    var n = e.win,
                        t = void 0 === n ? window : n,
                        r = e.url,
                        o = e.data,
                        i = e.useBlob,
                        a = void 0 === i || i;
                    try {
                        var u = JSON.stringify(o);
                        if (!t.navigator.sendBeacon) throw new Error("No sendBeacon available");
                        if (a) {
                            var l = new Blob([u], { type: "application/json" });
                            return t.navigator.sendBeacon(r, l);
                        }
                        return t.navigator.sendBeacon(r, u);
                    } catch (e) {
                        return !1;
                    }
                },
                $t = function (e, n) {
                    for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
                };
            function Qt() {
                return "sandbox" === lt.LOCAL ? /.*loca.*/ : /\.paypal\.(com|cn)(:\d+)?$/;
            }
            function er() {
                return Boolean(z().match(Qt()));
            }
            var nr = Ae(function () {
                    return (function (e) {
                        var n = e.url,
                            t = e.prefix,
                            r = e.logLevel,
                            o = void 0 === r ? "warn" : r,
                            i = e.transport,
                            a =
                                void 0 === i
                                    ? (function (e) {
                                        void 0 === e && (e = window);
                                        var n = Z(e) ? G(e) : window;
                                        return function (e) {
                                            var t = e.url,
                                                r = e.method,
                                                o = e.headers,
                                                i = e.json,
                                                a = e.enableSendBeacon,
                                                u = void 0 !== a && a;
                                            return R.try(function () {
                                                var e = !1;
                                                return (
                                                    (function (e) {
                                                        var n = e.headers,
                                                            t = e.enableSendBeacon,
                                                            r = n && Object.keys(n).length;
                                                        return !!(window && window.navigator.sendBeacon && !r && t && window.Blob);
                                                    })({ headers: o, enableSendBeacon: u }) &&
                                                    (e = (function (e) {
                                                        return "https://api2.amplitude.com/2/httpapi" === e;
                                                    })(t)
                                                        ? Xt({ win: n, url: t, data: i, useBlob: !1 })
                                                        : Xt({ win: n, url: t, data: i, useBlob: !0 })),
                                                    e || $n({ win: n, url: t, method: r, headers: o, json: i })
                                                );
                                            }).then(Re);
                                        };
                                    })()
                                    : i,
                            u = e.amplitudeApiKey,
                            l = e.flushInterval,
                            c = void 0 === l ? 6e4 : l,
                            s = e.enableSendBeacon,
                            d = void 0 !== s && s,
                            f = [],
                            p = [],
                            h = [],
                            m = [],
                            g = [],
                            y = [];
                        function v(e, n, t) {
                            if (yn() && window.console && window.console.log && !(Jt.indexOf(e) > Jt.indexOf(o))) {
                                var r = [n];
                                r.push(t), (t.error || t.warning) && r.push("\n\n", t.error || t.warning);
                                try {
                                    window.console[e] && window.console[e].apply ? window.console[e].apply(window.console, r) : window.console.log && window.console.log.apply && window.console.log.apply(window.console, r);
                                } catch (e) {}
                            }
                        }
                        function w() {
                            return R.try(function () {
                                if (yn() && "file:" !== window.location.protocol && (f.length || p.length)) {
                                    for (var e = {}, t = 0; t < m.length; t++) $t(e, (0, m[t])(e));
                                    for (var r, o = {}, i = 0; i < y.length; i++) $t(o, (0, y[i])(o));
                                    return (
                                        n && (r = a({ method: "POST", url: n, headers: o, json: { events: f, meta: e, tracking: p }, enableSendBeacon: d }).catch(Re)),
                                        u &&
                                        a({
                                            method: "POST",
                                            url: "https://api2.amplitude.com/2/httpapi",
                                            headers: {},
                                            json: {
                                                api_key: u,
                                                events: p.map(function (e) {
                                                    return x({ event_type: e.transition_name || "event", event_properties: e }, e);
                                                }),
                                            },
                                            enableSendBeacon: d,
                                        }).catch(Re),
                                            (f = []),
                                            (p = []),
                                            R.resolve(r).then(Re)
                                    );
                                }
                            });
                        }
                        var b,
                            C,
                            E,
                            L,
                            O =
                                (void 0 === C && (C = 50),
                                    Ce(function () {
                                        L && clearTimeout(L);
                                        var e = (E = E || new R());
                                        return (
                                            (L = setTimeout(function () {
                                                (E = null),
                                                    (L = null),
                                                    R.try(b).then(
                                                        function (n) {
                                                            e.resolve(n);
                                                        },
                                                        function (n) {
                                                            e.reject(n);
                                                        }
                                                    );
                                            }, C)),
                                                e
                                        );
                                    }, be((b = w)) + "::promiseDebounced"));
                        function P(e, n, r) {
                            if ((void 0 === r && (r = {}), !yn())) return T;
                            t && (n = t + "_" + n);
                            for (var o = x({}, ze(r), { timestamp: Date.now().toString() }), i = 0; i < h.length; i++) $t(o, (0, h[i])(o));
                            return (
                                (function (e, n, t) {
                                    f.push({ level: e, event: n, payload: t }), -1 !== Kt.indexOf(e) && O();
                                })(e, n, o),
                                    v(e, n, o),
                                    T
                            );
                        }
                        function S(e, n) {
                            return e.push(n), T;
                        }
                        yn() && Ge(O, c),
                        "object" == typeof window &&
                        (window.addEventListener("beforeunload", function () {
                            w();
                        }),
                            window.addEventListener("unload", function () {
                                w();
                            }),
                            window.addEventListener("pagehide", function () {
                                w();
                            }));
                        var T = {
                            debug: function (e, n) {
                                return P("debug", e, n);
                            },
                            info: function (e, n) {
                                return P("info", e, n);
                            },
                            warn: function (e, n) {
                                return P("warn", e, n);
                            },
                            error: function (e, n) {
                                return P("error", e, n);
                            },
                            track: function (e) {
                                if ((void 0 === e && (e = {}), !yn())) return T;
                                for (var n = ze(e), t = 0; t < g.length; t++) $t(n, (0, g[t])(n));
                                return v("debug", "track", n), p.push(n), T;
                            },
                            flush: O,
                            immediateFlush: w,
                            addPayloadBuilder: function (e) {
                                return S(h, e);
                            },
                            addMetaBuilder: function (e) {
                                return S(m, e);
                            },
                            addTrackingBuilder: function (e) {
                                return S(g, e);
                            },
                            addHeaderBuilder: function (e) {
                                return S(y, e);
                            },
                            setTransport: function (e) {
                                return (a = e), T;
                            },
                            configure: function (e) {
                                return (
                                    e.url && (n = e.url),
                                    e.prefix && (t = e.prefix),
                                    e.logLevel && (o = e.logLevel),
                                    e.transport && (a = e.transport),
                                    e.amplitudeApiKey && (u = e.amplitudeApiKey),
                                    e.flushInterval && (c = e.flushInterval),
                                    e.enableSendBeacon && (d = e.enableSendBeacon),
                                        T
                                );
                            },
                        };
                        return T;
                    })({ url: ((e = "/xoplatform/logger/api/logger"), void 0 === e && (e = ""), "https://www.sandbox.paypal.com" + e) });
                    var e;
                }),
                tr = ["data-amount", "data-merchant-id", "data-partner-attribution-id", "data-popups-disabled", "data-enable-3ds", "data-sdk-integration-source", "data-client-metadata-id", "data-uid", "data-csp-nonce"];
            function rr() {
                for (
                    var e = (function () {
                            var e = Lt().getAttribute("src");
                            if (!e) throw new Error("Can not find src for sdk script");
                            return e;
                        })(),
                        n = xt(),
                        t = {},
                        r = 0,
                        o = Object.keys(n);
                    r < o.length;
                    r++
                ) {
                    var i = o[r];
                    -1 !== tr.indexOf(i) && (t[i] = n[i]);
                }
                return Ee(JSON.stringify({ url: e, attrs: t })).replace(/\=+$/, "");
            }
            function or(e, n, t) {
                var r = t || nr();
                return (function (e) {
                    var n,
                        t = e.name,
                        r = e.sample,
                        o = void 0 === r ? 50 : r,
                        i = e.logTreatment,
                        a = void 0 === i ? Re : i,
                        u = e.logCheckpoint,
                        l = void 0 === u ? Re : u,
                        c = e.sticky,
                        s =
                            void 0 === c || c
                                ? (function (e) {
                                    return Yn().getState(function (n) {
                                        return (n.throttlePercentiles = n.throttlePercentiles || {}), (n.throttlePercentiles[e] = n.throttlePercentiles[e] || Jn(100)), n.throttlePercentiles[e];
                                    });
                                })(t)
                                : Jn(100),
                        d = t + "_" + (n = s < o ? "test" : o >= 50 || (o <= s && s < 2 * o) ? "control" : "throttle"),
                        f = !1,
                        p = !1;
                    try {
                        window.localStorage && window.localStorage.getItem(t) && (p = !0);
                    } catch (e) {}
                    var h = {
                        isEnabled: function () {
                            return "test" === n || p;
                        },
                        isDisabled: function () {
                            return "test" !== n && !p;
                        },
                        getTreatment: function () {
                            return d;
                        },
                        log: function (e, n) {
                            return (
                                void 0 === n && (n = {}),
                                    f
                                        ? (Kn(d + "_" + JSON.stringify(n)) && a({ name: t, treatment: d, payload: n, throttle: s }),
                                        Kn(d + "_" + e + "_" + JSON.stringify(n)) && l({ name: t, treatment: d, checkpoint: e, payload: n, throttle: s }),
                                            h)
                                        : h
                            );
                        },
                        logStart: function (e) {
                            return void 0 === e && (e = {}), (f = !0), h.log("start", e);
                        },
                        logComplete: function (e) {
                            return void 0 === e && (e = {}), h.log("complete", e);
                        },
                    };
                    return h;
                })({
                    name: e,
                    sample: n,
                    logTreatment: function (n) {
                        var t,
                            o = n.treatment,
                            i = n.payload,
                            a = x((((t = {}).state_name = "PXP_CHECK"), (t.transition_name = "process_pxp_check"), (t.pxp_exp_id = e), (t.pxp_trtmnt_id = o), t), i);
                        r.track(a), r.flush();
                    },
                    logCheckpoint: function (n) {
                        var t = n.treatment,
                            o = n.checkpoint,
                            i = n.payload;
                        -1 !== t.indexOf(e) ? r.info(t + "_" + o, i) : r.info(e + "_" + t + "_" + o, i), r.flush();
                    },
                });
            }
            function ir() {
                return Vn({ name: Bt() });
            }
            function ar() {
                return ir().getSessionID();
            }
            function ur(e) {
                return ir().getState(e);
            }
            function lr() {
                return ir().getID();
            }
            function cr(e) {
                return ir().getSessionState(e);
            }
            function sr() {
                return Ot("data-client-metadata-id");
            }
            Ae(function (e) {
                nr().info("rest_api_create_access_token");
                var n,
                    t = Ee(e + ":");
                return $n({
                    method: "post",
                    url:
                        ((n = "/v1/oauth2/token"),
                        void 0 === n && (n = ""),
                        ("undefined" != typeof window && void 0 !== window.location && "https://www.sandbox.paypal.com" === z() ? "https://www.sandbox.paypal.com" : "https://cors.api.sandbox.paypal.com") + n),
                    headers: { Authorization: "Basic " + t },
                    data: { grant_type: "client_credentials" },
                }).then(function (n) {
                    var t = n.body;
                    if (t && "invalid_client" === t.error) throw new Error("Auth Api invalid client id: " + e + ":\n\n" + JSON.stringify(t, null, 4));
                    if (!t || !t.access_token) throw new Error("Auth Api response error:\n\n" + JSON.stringify(t, null, 4));
                    return t.access_token;
                });
            });
            var dr = Ae(Ve);
            function fr() {
                var e;
                Lt(),
                    (e = nr()),
                    Date.now(),
                    e.addPayloadBuilder(function () {
                        return { referer: window.location.host, uid: ar(), env: "sandbox" };
                    }),
                    e.addTrackingBuilder(function () {
                        var e,
                            n = zt(),
                            t = n.lang,
                            r = n.country,
                            o = Nt();
                        return (
                            ((e = {}).feed_name = "payments_sdk"),
                                (e.serverside_data_source = "checkout"),
                                (e.client_id = Tt()),
                                (e.seller_id = o && o.toString()),
                                (e.page_session_id = ar()),
                                (e.referer_url = window.location.host),
                                (e.locale = t + "_" + r),
                                (e.integration_identifier = Tt()),
                                (e.bn_code = Wt()),
                                (e.pp_placement = (function () {
                                    var e = Ot("data-page-type", "");
                                    if (-1 === je(ut).indexOf(e.toLowerCase()) && e.length) throw new Error("Invalid page type, '" + e + "'");
                                    return e.toLowerCase();
                                })()),
                                (e.sdk_name = "payments_sdk"),
                                (e.sdk_version = "5.0.332"),
                                (e.user_agent = window.navigator && window.navigator.userAgent),
                                (e.user_action = kt() ? "commit" : "continue"),
                                (e.context_correlation_id = "f5312700fa979"),
                                (e.sdk_integration_source = Ot("data-sdk-integration-source")),
                                e
                        );
                    }),
                    R.onPossiblyUnhandledException(function (n) {
                        var t;
                        e.track((((t = {}).ext_error_code = "payments_sdk_error"), (t.ext_error_desc = Ie(n)), t)), e.error("unhandled_error", { err: Fe(n) }), e.flush().catch(Re);
                    }),
                    fn().then(function () {
                        var n,
                            t,
                            r = Lt(),
                            o = (function (e) {
                                var n = gn();
                                if (n && "function" == typeof n.getEntries)
                                    for (var t = n.getEntries(), r = 0; r < t.length; r++) {
                                        var o = t[r];
                                        if (o && o.name && 0 === o.name.indexOf(e) && "number" == typeof o.duration) return Math.floor(o.duration);
                                    }
                            })(r.src);
                        t = 0 === o ? "sdk_client_cache_hit" : "number" == typeof o ? "sdk_client_cache_miss" : "sdk_client_cache_unknown";
                        var i = er() && window.xprops;
                        e
                            .info("setup_sandbox")
                            .info("setup_sandbox_" + "5.0.332".replace(/\./g, "_"))
                            .info("sdk_" + (i ? "paypal" : "non_paypal") + "_domain_script_uid_" + (r.hasAttribute("data-uid") ? "present" : "missing"))
                            .info(t)
                            .track(((n = {}), (n.transition_name = "process_js_sdk_init_client"), (n.sdk_load_time = "number" == typeof o ? o.toString() : void 0), (n.sdk_cache = t), n))
                            .flush(),
                        (function () {
                            if (window.document.documentMode)
                                try {
                                    var e = window.status;
                                    return (window.status = "testIntranetMode"), "testIntranetMode" === window.status && ((window.status = e), !0);
                                } catch (e) {
                                    return !1;
                                }
                            return !1;
                        })() && e.warn("ie_intranet_mode");
                    });
            }
            function pr() {
                return "__post_robot_11_0_0___" + Gn();
            }
            function hr(e) {
                void 0 === e && (e = window);
                var n = pr();
                return e !== window ? e[n] : (e[n] = e[n] || {});
            }
            var mr = function () {
                return {};
            };
            function gr(e, n) {
                return (
                    void 0 === e && (e = "store"),
                    void 0 === n && (n = mr),
                        rn(hr(), e, function () {
                            var e = n();
                            return {
                                has: function (n) {
                                    return e.hasOwnProperty(n);
                                },
                                get: function (n, t) {
                                    return e.hasOwnProperty(n) ? e[n] : t;
                                },
                                set: function (n, t) {
                                    return (e[n] = t), t;
                                },
                                del: function (n) {
                                    delete e[n];
                                },
                                getOrSet: function (n, t) {
                                    return rn(e, n, t);
                                },
                                reset: function () {
                                    e = n();
                                },
                                keys: function () {
                                    return Object.keys(e);
                                },
                            };
                        })
                );
            }
            var yr,
                vr = function () {};
            function wr() {
                var e = hr();
                return (e.WINDOW_WILDCARD = e.WINDOW_WILDCARD || new vr()), e.WINDOW_WILDCARD;
            }
            function br(e, n) {
                return (
                    void 0 === e && (e = "store"),
                    void 0 === n && (n = mr),
                        gr("windowStore").getOrSet(e, function () {
                            var t = new he(),
                                r = function (e) {
                                    return t.getOrSet(e, n);
                                };
                            return {
                                has: function (n) {
                                    return r(n).hasOwnProperty(e);
                                },
                                get: function (n, t) {
                                    var o = r(n);
                                    return o.hasOwnProperty(e) ? o[e] : t;
                                },
                                set: function (n, t) {
                                    return (r(n)[e] = t), t;
                                },
                                del: function (n) {
                                    delete r(n)[e];
                                },
                                getOrSet: function (n, t) {
                                    return rn(r(n), e, t);
                                },
                            };
                        })
                );
            }
            function Cr() {
                return gr("instance").getOrSet("instanceID", xe);
            }
            function Er(e, n) {
                var t = n.domain,
                    r = br("helloPromises"),
                    o = r.get(e);
                o && o.resolve({ domain: t });
                var i = R.resolve({ domain: t });
                return r.set(e, i), i;
            }
            function Lr(e, n) {
                return (0, n.send)(e, "postrobot_hello", { instanceID: Cr() }, { domain: "*", timeout: -1 }).then(function (n) {
                    var t = n.origin,
                        r = n.data.instanceID;
                    return Er(e, { domain: t }), { win: e, domain: t, instanceID: r };
                });
            }
            function xr(e, n) {
                var t = n.send;
                return br("windowInstanceIDPromises").getOrSet(e, function () {
                    return Lr(e, { send: t }).then(function (e) {
                        return e.instanceID;
                    });
                });
            }
            function Or(e) {
                br("knownWindows").set(e, !0);
            }
            function Pr(e) {
                return "object" == typeof e && null !== e && "string" == typeof e.__type__;
            }
            function Sr(e) {
                return void 0 === e
                    ? "undefined"
                    : null === e
                        ? "null"
                        : Array.isArray(e)
                            ? "array"
                            : "function" == typeof e
                                ? "function"
                                : "object" == typeof e
                                    ? e instanceof Error
                                        ? "error"
                                        : "function" == typeof e.then
                                            ? "promise"
                                            : "[object RegExp]" === {}.toString.call(e)
                                                ? "regex"
                                                : "[object Date]" === {}.toString.call(e)
                                                    ? "date"
                                                    : "object"
                                    : "string" == typeof e
                                        ? "string"
                                        : "number" == typeof e
                                            ? "number"
                                            : "boolean" == typeof e
                                                ? "boolean"
                                                : void 0;
            }
            function Tr(e, n) {
                return { __type__: e, __val__: n };
            }
            var Nr,
                Ar =
                    (((yr = {}).function = function () {}),
                        (yr.error = function (e) {
                            return Tr("error", { message: e.message, stack: e.stack, code: e.code, data: e.data });
                        }),
                        (yr.promise = function () {}),
                        (yr.regex = function (e) {
                            return Tr("regex", e.source);
                        }),
                        (yr.date = function (e) {
                            return Tr("date", e.toJSON());
                        }),
                        (yr.array = function (e) {
                            return e;
                        }),
                        (yr.object = function (e) {
                            return e;
                        }),
                        (yr.string = function (e) {
                            return e;
                        }),
                        (yr.number = function (e) {
                            return e;
                        }),
                        (yr.boolean = function (e) {
                            return e;
                        }),
                        (yr.null = function (e) {
                            return e;
                        }),
                        (yr[void 0] = function (e) {
                            return Tr("undefined", e);
                        }),
                        yr),
                kr = {},
                _r =
                    (((Nr = {}).function = function () {
                        throw new Error("Function serialization is not implemented; nothing to deserialize");
                    }),
                        (Nr.error = function (e) {
                            var n = e.stack,
                                t = e.code,
                                r = e.data,
                                o = new Error(e.message);
                            return (o.code = t), r && (o.data = r), (o.stack = n + "\n\n" + o.stack), o;
                        }),
                        (Nr.promise = function () {
                            throw new Error("Promise serialization is not implemented; nothing to deserialize");
                        }),
                        (Nr.regex = function (e) {
                            return new RegExp(e);
                        }),
                        (Nr.date = function (e) {
                            return new Date(e);
                        }),
                        (Nr.array = function (e) {
                            return e;
                        }),
                        (Nr.object = function (e) {
                            return e;
                        }),
                        (Nr.string = function (e) {
                            return e;
                        }),
                        (Nr.number = function (e) {
                            return e;
                        }),
                        (Nr.boolean = function (e) {
                            return e;
                        }),
                        (Nr.null = function (e) {
                            return e;
                        }),
                        (Nr[void 0] = function () {}),
                        Nr),
                Rr = {};
            function Mr() {
                for (var e = gr("idToProxyWindow"), n = 0, t = e.keys(); n < t.length; n++) {
                    var r = t[n];
                    e.get(r).shouldClean() && e.del(r);
                }
            }
            function Fr(e, n) {
                var t = n.send,
                    r = n.id,
                    o = void 0 === r ? xe() : r,
                    i = e.then(function (e) {
                        if (Z(e)) return G(e).name;
                    }),
                    a = e.then(function (e) {
                        if (ee(e)) throw new Error("Window is closed, can not determine type");
                        return q(e) ? F.POPUP : F.IFRAME;
                    });
                i.catch(Re), a.catch(Re);
                var u = function () {
                    return e.then(function (e) {
                        if (!ee(e)) return Z(e) ? G(e).name : i;
                    });
                };
                return {
                    id: o,
                    getType: function () {
                        return a;
                    },
                    getInstanceID: ke(function () {
                        return e.then(function (e) {
                            return xr(e, { send: t });
                        });
                    }),
                    close: function () {
                        return e.then(de);
                    },
                    getName: u,
                    focus: function () {
                        return e.then(function (e) {
                            e.focus();
                        });
                    },
                    isClosed: function () {
                        return e.then(function (e) {
                            return ee(e);
                        });
                    },
                    setLocation: function (n, t) {
                        return (
                            void 0 === t && (t = {}),
                                e.then(function (e) {
                                    var r = window.location.protocol + "//" + window.location.host,
                                        o = t.method,
                                        i = void 0 === o ? "get" : o,
                                        a = t.body;
                                    if (0 === n.indexOf("/")) n = "" + r + n;
                                    else if (!n.match(/^https?:\/\//) && 0 !== n.indexOf(r)) throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(n));
                                    if ("post" === i)
                                        return u().then(function (e) {
                                            if (!e) throw new Error("Can not post to window without target name");
                                            !(function (e) {
                                                var n = e.url,
                                                    t = e.target,
                                                    r = e.body,
                                                    o = e.method,
                                                    i = void 0 === o ? "post" : o,
                                                    a = document.createElement("form");
                                                if ((a.setAttribute("target", t), a.setAttribute("method", i), a.setAttribute("action", n), (a.style.display = "none"), r))
                                                    for (var u = 0, l = Object.keys(r); u < l.length; u++) {
                                                        var c,
                                                            s = l[u],
                                                            d = document.createElement("input");
                                                        d.setAttribute("name", s), d.setAttribute("value", null == (c = r[s]) ? void 0 : c.toString()), a.appendChild(d);
                                                    }
                                                ln().appendChild(a), a.submit(), ln().removeChild(a);
                                            })({ url: n, target: e, method: i, body: a });
                                        });
                                    if ("get" !== i) throw new Error("Unsupported method: " + i);
                                    if (Z(e))
                                        try {
                                            if (e.location && "function" == typeof e.location.replace) return void e.location.replace(n);
                                        } catch (e) {}
                                    e.location = n;
                                })
                        );
                    },
                    setName: function (n) {
                        return e.then(function (e) {
                            var t = Z(e),
                                r = se(e);
                            if (!t) throw new Error("Can not set name for cross-domain window: " + n);
                            (G(e).name = n), r && r.setAttribute("name", n), (i = R.resolve(n));
                        });
                    },
                };
            }
            new R(function (e) {
                if (window.document && window.document.body) return e(window.document.body);
                var n = setInterval(function () {
                    if (window.document && window.document.body) return clearInterval(n), e(window.document.body);
                }, 10);
            });
            var Ir = (function () {
                function e(e) {
                    var n = e.send,
                        t = e.win,
                        r = e.serializedWindow;
                    (this.id = void 0),
                        (this.isProxyWindow = !0),
                        (this.serializedWindow = void 0),
                        (this.actualWindow = void 0),
                        (this.actualWindowPromise = void 0),
                        (this.send = void 0),
                        (this.name = void 0),
                        (this.actualWindowPromise = new R()),
                        (this.serializedWindow = r || Fr(this.actualWindowPromise, { send: n })),
                        gr("idToProxyWindow").set(this.getID(), this),
                    t && this.setWindow(t, { send: n });
                }
                var n = e.prototype;
                return (
                    (n.getID = function () {
                        return this.serializedWindow.id;
                    }),
                        (n.getType = function () {
                            return this.serializedWindow.getType();
                        }),
                        (n.isPopup = function () {
                            return this.getType().then(function (e) {
                                return e === F.POPUP;
                            });
                        }),
                        (n.setLocation = function (e, n) {
                            var t = this;
                            return this.serializedWindow.setLocation(e, n).then(function () {
                                return t;
                            });
                        }),
                        (n.getName = function () {
                            return this.serializedWindow.getName();
                        }),
                        (n.setName = function (e) {
                            var n = this;
                            return this.serializedWindow.setName(e).then(function () {
                                return n;
                            });
                        }),
                        (n.close = function () {
                            var e = this;
                            return this.serializedWindow.close().then(function () {
                                return e;
                            });
                        }),
                        (n.focus = function () {
                            var e = this,
                                n = this.isPopup(),
                                t = this.getName(),
                                r = R.hash({ isPopup: n, name: t }).then(function (e) {
                                    var n = e.name;
                                    e.isPopup && n && window.open("", n, "noopener");
                                }),
                                o = this.serializedWindow.focus();
                            return R.all([r, o]).then(function () {
                                return e;
                            });
                        }),
                        (n.isClosed = function () {
                            return this.serializedWindow.isClosed();
                        }),
                        (n.getWindow = function () {
                            return this.actualWindow;
                        }),
                        (n.setWindow = function (e, n) {
                            var t = n.send;
                            (this.actualWindow = e), this.actualWindowPromise.resolve(this.actualWindow), (this.serializedWindow = Fr(this.actualWindowPromise, { send: t, id: this.getID() })), br("winToProxyWindow").set(e, this);
                        }),
                        (n.awaitWindow = function () {
                            return this.actualWindowPromise;
                        }),
                        (n.matchWindow = function (e, n) {
                            var t = this,
                                r = n.send;
                            return R.try(function () {
                                return t.actualWindow
                                    ? e === t.actualWindow
                                    : R.hash({ proxyInstanceID: t.getInstanceID(), knownWindowInstanceID: xr(e, { send: r }) }).then(function (n) {
                                        var o = n.proxyInstanceID === n.knownWindowInstanceID;
                                        return o && t.setWindow(e, { send: r }), o;
                                    });
                            });
                        }),
                        (n.unwrap = function () {
                            return this.actualWindow || this;
                        }),
                        (n.getInstanceID = function () {
                            return this.serializedWindow.getInstanceID();
                        }),
                        (n.shouldClean = function () {
                            return Boolean(this.actualWindow && ee(this.actualWindow));
                        }),
                        (n.serialize = function () {
                            return this.serializedWindow;
                        }),
                        (e.unwrap = function (n) {
                            return e.isProxyWindow(n) ? n.unwrap() : n;
                        }),
                        (e.serialize = function (n, t) {
                            var r = t.send;
                            return Mr(), e.toProxyWindow(n, { send: r }).serialize();
                        }),
                        (e.deserialize = function (n, t) {
                            var r = t.send;
                            return Mr(), gr("idToProxyWindow").get(n.id) || new e({ serializedWindow: n, send: r });
                        }),
                        (e.isProxyWindow = function (e) {
                            return Boolean(e && !ce(e) && e.isProxyWindow);
                        }),
                        (e.toProxyWindow = function (n, t) {
                            var r = t.send;
                            if ((Mr(), e.isProxyWindow(n))) return n;
                            var o = n;
                            return br("winToProxyWindow").get(o) || new e({ win: o, send: r });
                        }),
                        e
                );
            })();
            function Dr(e, n, t, r, o) {
                var i = br("methodStore"),
                    a = gr("proxyWindowMethods");
                Ir.isProxyWindow(r)
                    ? a.set(e, { val: n, name: t, domain: o, source: r })
                    : (a.del(e),
                        (i.getOrSet(r, function () {
                            return {};
                        })[e] = { domain: o, name: t, val: n, source: r }));
            }
            function Br(e, n) {
                var t = br("methodStore"),
                    r = gr("proxyWindowMethods");
                return (
                    t.getOrSet(e, function () {
                        return {};
                    })[n] || r.get(n)
                );
            }
            function jr(e, n, t, r, o) {
                var i, a, u;
                (a = (i = { on: o.on, send: o.send }).on),
                    (u = i.send),
                    gr("builtinListeners").getOrSet("functionCalls", function () {
                        return a("postrobot_method", { domain: "*" }, function (e) {
                            var n = e.source,
                                t = e.origin,
                                r = e.data,
                                o = r.id,
                                i = r.name,
                                a = Br(n, o);
                            if (!a) throw new Error("Could not find method '" + i + "' with id: " + r.id + " in " + z(window));
                            var l = a.source,
                                c = a.domain,
                                s = a.val;
                            return R.try(function () {
                                if (!ae(c, t)) throw new Error("Method '" + r.name + "' domain " + JSON.stringify(tn(a.domain) ? a.domain.source : a.domain) + " does not match origin " + t + " in " + z(window));
                                if (Ir.isProxyWindow(l))
                                    return l.matchWindow(n, { send: u }).then(function (e) {
                                        if (!e) throw new Error("Method call '" + r.name + "' failed - proxy window does not match source in " + z(window));
                                    });
                            })
                                .then(
                                    function () {
                                        return s.apply({ source: n, origin: t }, r.args);
                                    },
                                    function (e) {
                                        return R.try(function () {
                                            if (s.onError) return s.onError(e);
                                        }).then(function () {
                                            var n;
                                            throw (
                                                (e.stack &&
                                                (e.stack =
                                                    "Remote call to " +
                                                    i +
                                                    "(" +
                                                    (void 0 === (n = r.args) && (n = []),
                                                    Xe(n)
                                                        .map(function (e) {
                                                            return "string" == typeof e
                                                                ? "'" + e + "'"
                                                                : void 0 === e
                                                                    ? "undefined"
                                                                    : null === e
                                                                        ? "null"
                                                                        : "boolean" == typeof e
                                                                            ? e.toString()
                                                                            : Array.isArray(e)
                                                                                ? "[ ... ]"
                                                                                : "object" == typeof e
                                                                                    ? "{ ... }"
                                                                                    : "function" == typeof e
                                                                                        ? "() => { ... }"
                                                                                        : "<" + typeof e + ">";
                                                        })
                                                        .join(", ") + ") failed\n\n") +
                                                    e.stack),
                                                    e)
                                            );
                                        });
                                    }
                                )
                                .then(function (e) {
                                    return { result: e, id: o, name: i };
                                });
                        });
                    });
                var l = t.__id__ || xe();
                e = Ir.unwrap(e);
                var c = t.__name__ || t.name || r;
                return (
                    "string" == typeof c && "function" == typeof c.indexOf && 0 === c.indexOf("anonymous::") && (c = c.replace("anonymous::", r + "::")),
                        Ir.isProxyWindow(e)
                            ? (Dr(l, t, c, e, n),
                                e.awaitWindow().then(function (e) {
                                    Dr(l, t, c, e, n);
                                }))
                            : Dr(l, t, c, e, n),
                        Tr("cross_domain_function", { id: l, name: c })
                );
            }
            function Hr(e, n, t, r) {
                var o,
                    i = r.on,
                    a = r.send;
                return (function (e, n) {
                    void 0 === n && (n = kr);
                    var t = JSON.stringify(e, function (e) {
                        var t = this[e];
                        if (Pr(this)) return t;
                        var r = Sr(t);
                        if (!r) return t;
                        var o = n[r] || Ar[r];
                        return o ? o(t, e) : t;
                    });
                    return void 0 === t ? "undefined" : t;
                })(
                    t,
                    (((o = {}).promise = function (t, r) {
                        return (function (e, n, t, r, o) {
                            return Tr("cross_domain_zalgo_promise", {
                                then: jr(
                                    e,
                                    n,
                                    function (e, n) {
                                        return t.then(e, n);
                                    },
                                    r,
                                    { on: o.on, send: o.send }
                                ),
                            });
                        })(e, n, t, r, { on: i, send: a });
                    }),
                        (o.function = function (t, r) {
                            return jr(e, n, t, r, { on: i, send: a });
                        }),
                        (o.object = function (e) {
                            return ce(e) || Ir.isProxyWindow(e) ? Tr("cross_domain_window", Ir.serialize(e, { send: a })) : e;
                        }),
                        o)
                );
            }
            function qr(e, n, t, r) {
                var o,
                    i = r.send;
                return (function (e, n) {
                    if ((void 0 === n && (n = Rr), "undefined" !== e))
                        return JSON.parse(e, function (e, t) {
                            if (Pr(this)) return t;
                            var r, o;
                            if ((Pr(t) ? ((r = t.__type__), (o = t.__val__)) : ((r = Sr(t)), (o = t)), !r)) return o;
                            var i = n[r] || _r[r];
                            return i ? i(o, e) : o;
                        });
                })(
                    t,
                    (((o = {}).cross_domain_zalgo_promise = function (e) {
                        return (function (e, n, t) {
                            return new R(t.then);
                        })(0, 0, e);
                    }),
                        (o.cross_domain_function = function (t) {
                            return (function (e, n, t, r) {
                                var o = t.id,
                                    i = t.name,
                                    a = r.send,
                                    u = function (t) {
                                        function r() {
                                            var u = arguments;
                                            return Ir.toProxyWindow(e, { send: a })
                                                .awaitWindow()
                                                .then(function (e) {
                                                    var l = Br(e, o);
                                                    if (l && l.val !== r) return l.val.apply({ source: window, origin: z() }, u);
                                                    var c = [].slice.call(u);
                                                    return t.fireAndForget
                                                        ? a(e, "postrobot_method", { id: o, name: i, args: c }, { domain: n, fireAndForget: !0 })
                                                        : a(e, "postrobot_method", { id: o, name: i, args: c }, { domain: n, fireAndForget: !1 }).then(function (e) {
                                                            return e.data.result;
                                                        });
                                                })
                                                .catch(function (e) {
                                                    throw e;
                                                });
                                        }
                                        return void 0 === t && (t = {}), (r.__name__ = i), (r.__origin__ = n), (r.__source__ = e), (r.__id__ = o), (r.origin = n), r;
                                    },
                                    l = u();
                                return (l.fireAndForget = u({ fireAndForget: !0 })), l;
                            })(e, n, t, { send: i });
                        }),
                        (o.cross_domain_window = function (e) {
                            return Ir.deserialize(e, { send: i });
                        }),
                        o)
                );
            }
            var Wr = {};
            function Ur(e, n, t, r) {
                var o = r.on,
                    i = r.send;
                return R.try(function () {
                    var r = br().getOrSet(e, function () {
                        return {};
                    });
                    return (
                        (r.buffer = r.buffer || []),
                            r.buffer.push(t),
                            (r.flush =
                                r.flush ||
                                R.flush().then(function () {
                                    if (ee(e)) throw new Error("Window is closed");
                                    var t,
                                        a,
                                        u = Hr(e, n, ((t = r.buffer || []), ((a = {})[pr()] = t), a), { on: o, send: i });
                                    delete r.buffer;
                                    for (var l = Object.keys(Wr), c = [], s = 0; s < l.length; s++) {
                                        var d = l[s];
                                        try {
                                            Wr[d](e, u, n);
                                        } catch (e) {
                                            c.push(e);
                                        }
                                    }
                                    if (c.length === l.length)
                                        throw new Error(
                                            "All post-robot messaging strategies failed:\n\n" +
                                            c
                                                .map(function (e, n) {
                                                    return n + ". " + Fe(e);
                                                })
                                                .join("\n\n")
                                        );
                                })),
                            r.flush.then(function () {
                                delete r.flush;
                            })
                    );
                }).then(Re);
            }
            function zr(e) {
                return gr("responseListeners").get(e);
            }
            function Zr(e) {
                gr("responseListeners").del(e);
            }
            function Gr(e) {
                return gr("erroredResponseListeners").has(e);
            }
            function Vr(e) {
                var n = e.name,
                    t = e.win,
                    r = e.domain,
                    o = br("requestListeners");
                if (("*" === t && (t = null), "*" === r && (r = null), !n)) throw new Error("Name required to get request listener");
                for (var i = 0, a = [t, wr()]; i < a.length; i++) {
                    var u = a[i];
                    if (u) {
                        var l = o.get(u);
                        if (l) {
                            var c = l[n];
                            if (c) {
                                if (r && "string" == typeof r) {
                                    if (c[r]) return c[r];
                                    if (c.__domain_regex__)
                                        for (var s = 0, d = c.__domain_regex__; s < d.length; s++) {
                                            var f = d[s],
                                                p = f.listener;
                                            if (ae(f.regex, r)) return p;
                                        }
                                }
                                if (c["*"]) return c["*"];
                            }
                        }
                    }
                }
            }
            function Yr(e, n, t, r) {
                var o = r.on,
                    i = r.send,
                    a = Vr({ name: t.name, win: e, domain: n }),
                    u = "postrobot_method" === t.name && t.data && "string" == typeof t.data.name ? t.data.name + "()" : t.name;
                function l(r, a, l) {
                    return R.flush().then(function () {
                        if (!t.fireAndForget && !ee(e))
                            try {
                                return Ur(e, n, { id: xe(), origin: z(window), type: "postrobot_message_response", hash: t.hash, name: t.name, ack: r, data: a, error: l }, { on: o, send: i });
                            } catch (e) {
                                throw new Error("Send response message failed for " + u + " in " + z() + "\n\n" + Fe(e));
                            }
                    });
                }
                return R.all([
                    R.flush().then(function () {
                        if (!t.fireAndForget && !ee(e))
                            try {
                                return Ur(e, n, { id: xe(), origin: z(window), type: "postrobot_message_ack", hash: t.hash, name: t.name }, { on: o, send: i });
                            } catch (e) {
                                throw new Error("Send ack message failed for " + u + " in " + z() + "\n\n" + Fe(e));
                            }
                    }),
                    R.try(function () {
                        if (!a) throw new Error("No handler found for post message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                        return a.handler({ source: e, origin: n, data: t.data });
                    }).then(
                        function (e) {
                            return l("success", e);
                        },
                        function (e) {
                            return l("error", null, e);
                        }
                    ),
                ])
                    .then(Re)
                    .catch(function (e) {
                        if (a && a.handleError) return a.handleError(e);
                        throw e;
                    });
            }
            function Kr(e, n, t) {
                if (!Gr(t.hash)) {
                    var r = zr(t.hash);
                    if (!r) throw new Error("No handler found for post message ack for message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    try {
                        if (!ae(r.domain, n)) throw new Error("Ack origin " + n + " does not match domain " + r.domain.toString());
                        if (e !== r.win) throw new Error("Ack source does not match registered window");
                    } catch (e) {
                        r.promise.reject(e);
                    }
                    r.ack = !0;
                }
            }
            function Jr(e, n, t) {
                if (!Gr(t.hash)) {
                    var r,
                        o = zr(t.hash);
                    if (!o) throw new Error("No handler found for post message response for message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!ae(o.domain, n)) throw new Error("Response origin " + n + " does not match domain " + ((r = o.domain), Array.isArray(r) ? "(" + r.join(" | ") + ")" : M(r) ? "RegExp(" + r.toString() + ")" : r.toString()));
                    if (e !== o.win) throw new Error("Response source does not match registered window");
                    Zr(t.hash), "error" === t.ack ? o.promise.reject(t.error) : "success" === t.ack && o.promise.resolve({ source: e, origin: n, data: t.data });
                }
            }
            function Xr(e, n) {
                var t = n.on,
                    r = n.send,
                    o = gr("receivedMessages");
                try {
                    if (!window || window.closed || !e.source) return;
                } catch (e) {
                    return;
                }
                var i = e.source,
                    a = e.origin,
                    u = (function (e, n, t, r) {
                        var o,
                            i = r.on,
                            a = r.send;
                        try {
                            o = qr(n, t, e, { on: i, send: a });
                        } catch (e) {
                            return;
                        }
                        if (o && "object" == typeof o && null !== o) {
                            var u = o[pr()];
                            if (Array.isArray(u)) return u;
                        }
                    })(e.data, i, a, { on: t, send: r });
                if (u) {
                    Or(i);
                    for (var l = 0; l < u.length; l++) {
                        var c = u[l];
                        if (o.has(c.id)) return;
                        if ((o.set(c.id, !0), ee(i) && !c.fireAndForget)) return;
                        0 === c.origin.indexOf("file:") && (a = "file://");
                        try {
                            "postrobot_message_request" === c.type ? Yr(i, a, c, { on: t, send: r }) : "postrobot_message_response" === c.type ? Jr(i, a, c) : "postrobot_message_ack" === c.type && Kr(i, a, c);
                        } catch (e) {
                            setTimeout(function () {
                                throw e;
                            }, 0);
                        }
                    }
                }
            }
            function $r(e, n, t) {
                if (!e) throw new Error("Expected name");
                if (("function" == typeof (n = n || {}) && ((t = n), (n = {})), !t)) throw new Error("Expected handler");
                var r = (function e(n, t) {
                    var r = n.name,
                        o = n.win,
                        i = n.domain,
                        a = br("requestListeners");
                    if (!r || "string" != typeof r) throw new Error("Name required to add request listener");
                    if (o && "*" !== o && Ir.isProxyWindow(o)) {
                        var u = o.awaitWindow().then(function (n) {
                            return e({ name: r, win: n, domain: i }, t);
                        });
                        return {
                            cancel: function () {
                                u.then(function (e) {
                                    return e.cancel();
                                }, Re);
                            },
                        };
                    }
                    var l = o;
                    if (Array.isArray(l)) {
                        for (var c = [], s = 0, d = l; s < d.length; s++) c.push(e({ name: r, domain: i, win: d[s] }, t));
                        return {
                            cancel: function () {
                                for (var e = 0; e < c.length; e++) c[e].cancel();
                            },
                        };
                    }
                    if (Array.isArray(i)) {
                        for (var f = [], p = 0, h = i; p < h.length; p++) f.push(e({ name: r, win: l, domain: h[p] }, t));
                        return {
                            cancel: function () {
                                for (var e = 0; e < f.length; e++) f[e].cancel();
                            },
                        };
                    }
                    var m = Vr({ name: r, win: l, domain: i });
                    (l && "*" !== l) || (l = wr());
                    var g = (i = i || "*").toString();
                    if (m)
                        throw l && i
                            ? new Error("Request listener already exists for " + r + " on domain " + i.toString() + " for " + (l === wr() ? "wildcard" : "specified") + " window")
                            : l
                                ? new Error("Request listener already exists for " + r + " for " + (l === wr() ? "wildcard" : "specified") + " window")
                                : i
                                    ? new Error("Request listener already exists for " + r + " on domain " + i.toString())
                                    : new Error("Request listener already exists for " + r);
                    var y,
                        v,
                        w = a.getOrSet(l, function () {
                            return {};
                        }),
                        b = rn(w, r, function () {
                            return {};
                        });
                    return (
                        tn(i)
                            ? (y = rn(b, "__domain_regex__", function () {
                                return [];
                            })).push((v = { regex: i, listener: t }))
                            : (b[g] = t),
                            {
                                cancel: function () {
                                    delete b[g], v && (y.splice(y.indexOf(v, 1)), y.length || delete b.__domain_regex__), Object.keys(b).length || delete w[r], l && !Object.keys(w).length && a.del(l);
                                },
                            }
                    );
                })(
                    { name: e, win: n.window, domain: n.domain || "*" },
                    {
                        handler: t || n.handler,
                        handleError:
                            n.errorHandler ||
                            function (e) {
                                throw e;
                            },
                    }
                );
                return {
                    cancel: function () {
                        r.cancel();
                    },
                };
            }
            function Qr(e, n, t) {
                "function" == typeof (n = n || {}) && ((t = n), (n = {}));
                var r,
                    o = new R();
                return (
                    (n.errorHandler = function (e) {
                        r.cancel(), o.reject(e);
                    }),
                        (r = $r(e, n, function (e) {
                            if ((r.cancel(), o.resolve(e), t)) return t(e);
                        })),
                        (o.cancel = r.cancel),
                        o
                );
            }
            (Wr.postrobot_post_message = function (e, n, t) {
                0 === t.indexOf("file:") && (t = "*"), e.postMessage(n, t);
            }),
                (Wr.postrobot_global = function (e, n) {
                    if (
                        !(function (e) {
                            return (e = e || window).navigator.mockUserAgent || e.navigator.userAgent;
                        })(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)
                    )
                        throw new Error("Global messaging not needed for browser");
                    if (!Z(e)) throw new Error("Post message through global disabled between different domain windows");
                    if (!1 !== ie(window, e)) throw new Error("Can only use global to communicate between two different windows, not between frames");
                    var t = hr(e);
                    if (!t) throw new Error("Can not find postRobot global on foreign window");
                    t.receiveMessage({ source: window, origin: z(), data: n });
                });
            var eo = function e(n, t, r, o) {
                var i = (o = o || {}).domain || "*",
                    a = o.timeout || -1,
                    u = o.timeout || 5e3,
                    l = o.fireAndForget || !1;
                return Ir.toProxyWindow(n, { send: e })
                    .awaitWindow()
                    .then(function (n) {
                        return R.try(function () {
                            if (
                                ((function (e, n, t) {
                                    if (!e) throw new Error("Expected name");
                                    if (t && "string" != typeof t && !Array.isArray(t) && !tn(t)) throw new TypeError("Can not send " + e + ". Expected domain " + JSON.stringify(t) + " to be a string, array, or regex");
                                    if (ee(n)) throw new Error("Can not send " + e + ". Target window is closed");
                                })(t, n, i),
                                    (function (e, n) {
                                        var t = te(n);
                                        if (t) return t === e;
                                        if (n === e) return !1;
                                        if (J(n) === n) return !1;
                                        for (var r = 0, o = Y(e); r < o.length; r++) if (o[r] === n) return !0;
                                        return !1;
                                    })(window, n))
                            )
                                return (function (e, n, t) {
                                    void 0 === n && (n = 5e3), void 0 === t && (t = "Window");
                                    var r = (function (e) {
                                        return br("helloPromises").getOrSet(e, function () {
                                            return new R();
                                        });
                                    })(e);
                                    return -1 !== n && (r = r.timeout(n, new Error(t + " did not load after " + n + "ms"))), r;
                                })(n, u);
                        })
                            .then(function (t) {
                                return (function (e, n, t, r) {
                                    var o = r.send;
                                    return R.try(function () {
                                        return "string" == typeof n
                                            ? n
                                            : R.try(function () {
                                                return (
                                                    t ||
                                                    Lr(e, { send: o }).then(function (e) {
                                                        return e.domain;
                                                    })
                                                );
                                            }).then(function (e) {
                                                if (!ae(n, n)) throw new Error("Domain " + De(n) + " does not match " + De(n));
                                                return e;
                                            });
                                    });
                                })(n, i, (void 0 === t ? {} : t).domain, { send: e });
                            })
                            .then(function (o) {
                                var i = o,
                                    u = "postrobot_method" === t && r && "string" == typeof r.name ? r.name + "()" : t,
                                    c = new R(),
                                    s = t + "_" + xe();
                                if (!l) {
                                    var d = { name: t, win: n, domain: i, promise: c };
                                    !(function (e, n) {
                                        gr("responseListeners").set(e, n);
                                    })(s, d);
                                    var f = br("requestPromises").getOrSet(n, function () {
                                        return [];
                                    });
                                    f.push(c),
                                        c.catch(function () {
                                            !(function (e) {
                                                gr("erroredResponseListeners").set(e, !0);
                                            })(s),
                                                Zr(s);
                                        });
                                    var p = (function (e) {
                                            return br("knownWindows").get(e, !1);
                                        })(n)
                                            ? 1e4
                                            : 2e3,
                                        h = a,
                                        m = p,
                                        g = h,
                                        y = Ge(function () {
                                            return ee(n)
                                                ? c.reject(new Error("Window closed for " + t + " before " + (d.ack ? "response" : "ack")))
                                                : d.cancelled
                                                    ? c.reject(new Error("Response listener was cancelled for " + t))
                                                    : ((m = Math.max(m - 500, 0)),
                                                    -1 !== g && (g = Math.max(g - 500, 0)),
                                                        d.ack || 0 !== m
                                                            ? 0 === g
                                                                ? c.reject(new Error("No response for postMessage " + u + " in " + z() + " in " + h + "ms"))
                                                                : void 0
                                                            : c.reject(new Error("No ack for postMessage " + u + " in " + z() + " in " + p + "ms")));
                                        }, 500);
                                    c.finally(function () {
                                        y.cancel(), f.splice(f.indexOf(c, 1));
                                    }).catch(Re);
                                }
                                return Ur(n, i, { id: xe(), origin: z(window), type: "postrobot_message_request", hash: s, name: t, data: r, fireAndForget: l }, { on: $r, send: e }).then(
                                    function () {
                                        return l ? c.resolve() : c;
                                    },
                                    function (e) {
                                        throw new Error("Send request message failed for " + u + " in " + z() + "\n\n" + Fe(e));
                                    }
                                );
                            });
                    });
            };
            function no(e, n, t) {
                return Hr(e, n, t, { on: $r, send: eo });
            }
            function to(e, n, t) {
                return qr(e, n, t, { on: $r, send: eo });
            }
            function ro(e) {
                return new Ir({ send: eo, win: e });
            }
            function oo(e) {
                return Ir.toProxyWindow(e, { send: eo });
            }
            function io() {
                var e, n, t;
                hr().initialized ||
                ((hr().initialized = !0),
                    (function (e) {
                        var n = e.on,
                            t = e.send,
                            r = hr();
                        r.receiveMessage =
                            r.receiveMessage ||
                            function (e) {
                                return Xr(e, { on: n, send: t });
                            };
                    })({ on: $r, send: eo }),
                    (n = (e = { on: $r, send: eo }).on),
                    (t = e.send),
                    gr().getOrSet("postMessageListener", function () {
                        return kn(window, "message", function (e) {
                            !(function (e, n) {
                                var t = n.on,
                                    r = n.send;
                                R.try(function () {
                                    var n = e.source || e.sourceElement,
                                        o = e.origin || (e.originalEvent && e.originalEvent.origin),
                                        i = e.data;
                                    if (("null" === o && (o = "file://"), n)) {
                                        if (!o) throw new Error("Post message did not have origin domain");
                                        Xr({ source: n, origin: o, data: i }, { on: t, send: r });
                                    }
                                });
                            })(e, { on: n, send: t });
                        });
                    }),
                    (function (e) {
                        var n = e.on,
                            t = e.send;
                        gr("builtinListeners").getOrSet("helloListener", function () {
                            var e = n("postrobot_hello", { domain: "*" }, function (e) {
                                    return Er(e.source, { domain: e.origin }), { instanceID: Cr() };
                                }),
                                r = te();
                            return r && Lr(r, { send: t }).catch(function (e) {}), e;
                        });
                    })({ on: $r, send: eo }));
            }
            function ao() {
                var e, n;
                !(function () {
                    for (var e = gr("responseListeners"), n = 0, t = e.keys(); n < t.length; n++) {
                        var r = t[n],
                            o = e.get(r);
                        o && (o.cancelled = !0), e.del(r);
                    }
                })(),
                (e = gr().get("postMessageListener")) && e.cancel(),
                    (n = pr()),
                    delete window[n];
            }
            var uo = !0;
            function lo(e) {
                for (var n = 0, t = br("requestPromises").get(e, []); n < t.length; n++) t[n].reject(new Error("Window " + (ee(e) ? "closed" : "cleaned up") + " before response")).catch(Re);
            }
            function co() {
                return "__zoid_10_1_0___" + Gn();
            }
            function so(e) {
                var n = co();
                if (!Z(e)) throw new Error("Can not get global for window on different domain");
                return e[n] || (e[n] = {}), e[n];
            }
            function fo(e, n) {
                try {
                    return n(so(e));
                } catch (e) {}
            }
            function po(e) {
                return {
                    get: function () {
                        var n = this;
                        return R.try(function () {
                            if (n.source && n.source !== window) throw new Error("Can not call get on proxy object from a remote window");
                            return e;
                        });
                    },
                };
            }
            function ho(e) {
                return Ee(JSON.stringify(e));
            }
            function mo(e) {
                var n = so(e);
                return (n.references = n.references || {}), n.references;
            }
            function go(e) {
                var n,
                    t,
                    r = e.data,
                    o = e.metaData,
                    i = e.sender,
                    a = e.receiver,
                    u = e.passByReference,
                    l = void 0 !== u && u,
                    c = e.basic,
                    s = void 0 !== c && c,
                    d = oo(a.win),
                    f = s ? JSON.stringify(r) : no(d, a.domain, r),
                    p = l
                        ? ((n = f), (t = xe()), (mo(window)[t] = n), { type: "uid", uid: t })
                        : (function (e) {
                            return { type: "raw", val: e };
                        })(f);
                return {
                    serializedData: ho({ sender: { domain: i.domain }, metaData: o, reference: p }),
                    cleanReference: function () {
                        var e, n;
                        (e = window), "uid" === (n = p).type && delete mo(e)[n.uid];
                    },
                };
            }
            function yo(e) {
                var n,
                    t,
                    r = e.sender,
                    o = e.basic,
                    i = void 0 !== o && o,
                    a = (function (e) {
                        return JSON.parse(Le(e));
                    })(e.data),
                    u = a.reference,
                    l = a.metaData;
                (n = "function" == typeof r.win ? r.win({ metaData: l }) : r.win), (t = "function" == typeof r.domain ? r.domain({ metaData: l }) : "string" == typeof r.domain ? r.domain : a.sender.domain);
                var c = (function (e, n) {
                    if ("raw" === n.type) return n.val;
                    if ("uid" === n.type) return mo(e)[n.uid];
                    throw new Error("Unsupported ref type: " + n.type);
                })(n, u);
                return { data: i ? JSON.parse(c) : to(n, t, c), metaData: l, sender: { win: n, domain: t }, reference: u };
            }
            io();
            var vo = F;
            function wo(e) {
                return "__zoid__" + e.name + "__" + e.serializedPayload + "__";
            }
            function bo(e) {
                if (!e) throw new Error("No window name");
                var n = e.split("__"),
                    t = n[1],
                    r = n[2],
                    o = n[3];
                if ("zoid" !== t) throw new Error("Window not rendered by zoid - got " + t);
                if (!r) throw new Error("Expected component name");
                if (!o) throw new Error("Expected serialized payload ref");
                return { name: r, serializedInitialPayload: o };
            }
            var Co = Ae(function (e) {
                var n = yo({
                    data: bo(e).serializedInitialPayload,
                    sender: {
                        win: function (e) {
                            return (function (e) {
                                if ("opener" === e.type) return an("opener", q(window));
                                if ("parent" === e.type && "number" == typeof e.distance)
                                    return an(
                                        "parent",
                                        ((n = window),
                                        void 0 === (t = e.distance) && (t = 1),
                                            (function (e, n) {
                                                void 0 === n && (n = 1);
                                                for (var t = e, r = 0; r < n; r++) {
                                                    if (!t) return;
                                                    t = H(t);
                                                }
                                                return t;
                                            })(n, oe(n) - t))
                                    );
                                var n, t;
                                if ("global" === e.type && e.uid && "string" == typeof e.uid) {
                                    var r = (function () {
                                        var n = e.uid,
                                            t = te(window);
                                        if (!t) throw new Error("Can not find ancestor window");
                                        for (var r = 0, o = X(t); r < o.length; r++) {
                                            var i = o[r];
                                            if (Z(i)) {
                                                var a = fo(i, function (e) {
                                                    return e.windows && e.windows[n];
                                                });
                                                if (a) return { v: a };
                                            }
                                        }
                                    })();
                                    if ("object" == typeof r) return r.v;
                                } else if ("name" === e.type) {
                                    var o = e.name;
                                    return an(
                                        "namedWindow",
                                        (function (e, n) {
                                            return (
                                                ne(e, n) ||
                                                (function e(n, t) {
                                                    var r = ne(n, t);
                                                    if (r) return r;
                                                    for (var o = 0, i = Y(n); o < i.length; o++) {
                                                        var a = e(i[o], t);
                                                        if (a) return a;
                                                    }
                                                })(J(e) || e, n)
                                            );
                                        })(an("ancestor", te(window)), o)
                                    );
                                }
                                throw new Error("Unable to find " + e.type + " parent component window");
                            })(e.metaData.windowRef);
                        },
                    },
                });
                return { parent: n.sender, payload: n.data, reference: n.reference };
            });
            function Eo() {
                return Co(window.name);
            }
            function Lo(e, n) {
                if ((void 0 === n && (n = window), e === H(n))) return { type: "parent", distance: oe(e) };
                if (e === q(n)) return { type: "opener" };
                if (Z(e) && (r = e) !== J(r)) {
                    var t = G(e).name;
                    if (t) return { type: "name", name: t };
                }
                var r;
            }
            function xo(e, n, t, r, o) {
                if (!e.hasOwnProperty(t)) return r;
                var i = e[t];
                return "function" == typeof i.childDecorate
                    ? i.childDecorate({
                        value: r,
                        uid: o.uid,
                        tag: o.tag,
                        close: o.close,
                        focus: o.focus,
                        onError: o.onError,
                        onProps: o.onProps,
                        resize: o.resize,
                        getParent: o.getParent,
                        getParentDomain: o.getParentDomain,
                        show: o.show,
                        hide: o.hide,
                        export: o.export,
                        getSiblings: o.getSiblings,
                    })
                    : r;
            }
            function Oo() {
                return R.try(function () {
                    window.focus();
                });
            }
            function Po() {
                return R.try(function () {
                    window.close();
                });
            }
            var So = function () {
                    return Re;
                },
                To = function (e) {
                    return Me(e.value);
                };
            function No(e, n, t) {
                for (var r = 0, o = Object.keys(x({}, e, n)); r < o.length; r++) {
                    var i = o[r];
                    t(i, n[i], e[i]);
                }
            }
            function Ao(e, n, t) {
                var r = {};
                return R.all(
                    (function (e, n, o) {
                        var i = [];
                        return (
                            No(e, n, function (e, n, o) {
                                var a = (function (e, n, o) {
                                    return R.resolve().then(function () {
                                        var i, a;
                                        if (null != o && n) {
                                            var u = ((i = {}), (i.get = n.queryParam), (i.post = n.bodyParam), i)[t],
                                                l = ((a = {}), (a.get = n.queryValue), (a.post = n.bodyValue), a)[t];
                                            if (u)
                                                return R.hash({
                                                    finalParam: R.try(function () {
                                                        return "function" == typeof u ? u({ value: o }) : "string" == typeof u ? u : e;
                                                    }),
                                                    finalValue: R.try(function () {
                                                        return "function" == typeof l && nn(o) ? l({ value: o }) : o;
                                                    }),
                                                }).then(function (t) {
                                                    var o,
                                                        i = t.finalParam,
                                                        a = t.finalValue;
                                                    if ("boolean" == typeof a) o = a.toString();
                                                    else if ("string" == typeof a) o = a.toString();
                                                    else if ("object" == typeof a && null !== a) {
                                                        if ("json" === n.serialization) o = JSON.stringify(a);
                                                        else if ("base64" === n.serialization) o = Ee(JSON.stringify(a));
                                                        else if ("dotify" === n.serialization || !n.serialization) {
                                                            o = (function e(n, t, r) {
                                                                for (var o in (void 0 === t && (t = ""), void 0 === r && (r = {}), (t = t ? t + "." : t), n))
                                                                    n.hasOwnProperty(o) &&
                                                                    null != n[o] &&
                                                                    "function" != typeof n[o] &&
                                                                    (n[o] &&
                                                                    Array.isArray(n[o]) &&
                                                                    n[o].length &&
                                                                    n[o].every(function (e) {
                                                                        return "object" != typeof e;
                                                                    })
                                                                        ? (r["" + t + o + "[]"] = n[o].join(","))
                                                                        : n[o] && "object" == typeof n[o]
                                                                            ? (r = e(n[o], "" + t + o, r))
                                                                            : (r["" + t + o] = n[o].toString()));
                                                                return r;
                                                            })(a, e);
                                                            for (var u = 0, l = Object.keys(o); u < l.length; u++) {
                                                                var c = l[u];
                                                                r[c] = o[c];
                                                            }
                                                            return;
                                                        }
                                                    } else "number" == typeof a && (o = a.toString());
                                                    r[i] = o;
                                                });
                                        }
                                    });
                                })(e, n, o);
                                i.push(a);
                            }),
                                i
                        );
                    })(n, e)
                ).then(function () {
                    return r;
                });
            }
            function ko(e) {
                var n,
                    t,
                    r,
                    o,
                    i,
                    a = e.uid,
                    u = e.options,
                    l = e.overrides,
                    c = void 0 === l ? {} : l,
                    s = e.parentWin,
                    d = void 0 === s ? window : s,
                    f = u.propsDef,
                    p = u.containerTemplate,
                    h = u.prerenderTemplate,
                    m = u.tag,
                    g = u.name,
                    y = u.attributes,
                    v = u.dimensions,
                    w = u.autoResize,
                    b = u.url,
                    C = u.domain,
                    E = u.exports,
                    L = new R(),
                    O = [],
                    P = on(),
                    S = {},
                    T = {},
                    N = { visible: !0 },
                    A = c.event ? c.event : Ve(),
                    k = c.props ? c.props : {},
                    _ = c.onError,
                    M = c.getProxyContainer,
                    F = c.show,
                    I = c.hide,
                    D = c.close,
                    B = c.renderContainer,
                    j = c.getProxyWindow,
                    H = c.setProxyWin,
                    q = c.openFrame,
                    W = c.openPrerenderFrame,
                    U = c.prerender,
                    V = c.open,
                    Y = c.openPrerender,
                    K = c.watchForUnload,
                    J = c.getInternalState,
                    X = c.setInternalState,
                    $ = function () {
                        return "function" == typeof v ? v({ props: k }) : v;
                    },
                    Q = function () {
                        return R.try(function () {
                            return c.resolveInitPromise ? c.resolveInitPromise() : L.resolve();
                        });
                    },
                    ne = function (e) {
                        return R.try(function () {
                            return c.rejectInitPromise ? c.rejectInitPromise(e) : L.reject(e);
                        });
                    },
                    re = function (e) {
                        for (var n = {}, t = 0, r = Object.keys(k); t < r.length; t++) {
                            var o = r[t],
                                i = f[o];
                            (i && !1 === i.sendToChild) || (i && i.sameDomain && !ae(e, z(window))) || (n[o] = k[o]);
                        }
                        return R.hash(n);
                    },
                    ce = function () {
                        return R.try(function () {
                            return J ? J() : N;
                        });
                    },
                    se = function (e) {
                        return R.try(function () {
                            return X ? X(e) : (N = x({}, N, e));
                        });
                    },
                    fe = function () {
                        return j
                            ? j()
                            : R.try(function () {
                                var e = k.window;
                                if (e) {
                                    var n = oo(e);
                                    return (
                                        P.register(function () {
                                            return e.close();
                                        }),
                                            n
                                    );
                                }
                                return new Ir({ send: eo });
                            });
                    },
                    pe = function (e) {
                        return H
                            ? H(e)
                            : R.try(function () {
                                n = e;
                            });
                    },
                    he = function () {
                        return F ? F() : R.hash({ setState: se({ visible: !0 }), showElement: t ? t.get().then(Dn) : null }).then(Re);
                    },
                    me = function () {
                        return I ? I() : R.hash({ setState: se({ visible: !1 }), showElement: t ? t.get().then(Bn) : null }).then(Re);
                    },
                    ge = function () {
                        return "function" == typeof b ? b({ props: k }) : b;
                    },
                    ye = function () {
                        return "function" == typeof y ? y({ props: k }) : y;
                    },
                    ve = function () {
                        return ue(ge());
                    },
                    we = function (e, n) {
                        var t = n.windowName;
                        return q
                            ? q(e, { windowName: t })
                            : R.try(function () {
                                if (e === vo.IFRAME) return po(An({ attributes: x({ name: t, title: g }, ye().iframe) }));
                            });
                    },
                    be = function (e) {
                        return W
                            ? W(e)
                            : R.try(function () {
                                if (e === vo.IFRAME) return po(An({ attributes: x({ name: "__zoid_prerender_frame__" + g + "_" + xe() + "__", title: "prerender__" + g }, ye().iframe) }));
                            });
                    },
                    Ce = function (e, n, t) {
                        return Y
                            ? Y(e, n, t)
                            : R.try(function () {
                                if (e === vo.IFRAME) {
                                    if (!t) throw new Error("Expected proxy frame to be passed");
                                    return t.get().then(function (e) {
                                        return (
                                            P.register(function () {
                                                return jn(e);
                                            }),
                                                Nn(e)
                                                    .then(function (e) {
                                                        return G(e);
                                                    })
                                                    .then(function (e) {
                                                        return oo(e);
                                                    })
                                        );
                                    });
                                }
                                if (e === vo.POPUP) return n;
                                throw new Error("No render context available for " + e);
                            });
                    },
                    Ee = function () {
                        return R.try(function () {
                            if (n) return R.all([A.trigger("zoid-focus"), n.focus()]).then(Re);
                        });
                    },
                    Le = function () {
                        var e = so(window);
                        return (
                            (e.windows = e.windows || {}),
                                (e.windows[a] = window),
                                P.register(function () {
                                    delete e.windows[a];
                                }),
                                a
                        );
                    },
                    Oe = function (e, n, t, r) {
                        if (n === z(window)) return { type: "global", uid: Le() };
                        if (e !== window) throw new Error("Can not construct cross-domain window reference for different target window");
                        if (k.window) {
                            var o = r.getWindow();
                            if (!o) throw new Error("Can not construct cross-domain window reference for lazy window prop");
                            if (te(o) !== window) throw new Error("Can not construct cross-domain window reference for window prop with different ancestor");
                        }
                        if (t === vo.POPUP) return { type: "opener" };
                        if (t === vo.IFRAME) return { type: "parent", distance: oe(window) };
                        throw new Error("Can not construct window reference for child");
                    },
                    Pe = function (e, n) {
                        return R.try(function () {
                            (o = e),
                                (r = n),
                                Q(),
                                P.register(function () {
                                    return n.close.fireAndForget().catch(Re);
                                });
                        });
                    },
                    Se = function (e) {
                        var n = e.width,
                            t = e.height;
                        return R.try(function () {
                            A.trigger("zoid-resize", { width: n, height: t });
                        });
                    },
                    Te = function (e) {
                        return R.try(function () {
                            return A.trigger("zoid-destroy");
                        })
                            .catch(Re)
                            .then(function () {
                                return P.all(e);
                            })
                            .then(function () {
                                L.asyncReject(e || new Error("Component destroyed"));
                            });
                    },
                    Ne = Ae(function (e) {
                        return R.try(function () {
                            if (D) {
                                if (ee(D.__source__)) return;
                                return D();
                            }
                            return R.try(function () {
                                return A.trigger("zoid-close");
                            }).then(function () {
                                return Te(e || new Error("Component closed"));
                            });
                        });
                    }),
                    ke = function (e, n) {
                        var t = n.proxyWin,
                            r = n.proxyFrame,
                            o = n.windowName;
                        return V
                            ? V(e, { proxyWin: t, proxyFrame: r, windowName: o })
                            : R.try(function () {
                                if (e === vo.IFRAME) {
                                    if (!r) throw new Error("Expected proxy frame to be passed");
                                    return r.get().then(function (e) {
                                        return Nn(e).then(function (n) {
                                            return (
                                                P.register(function () {
                                                    return jn(e);
                                                }),
                                                    P.register(function () {
                                                        return lo(n);
                                                    }),
                                                    n
                                            );
                                        });
                                    });
                                }
                                if (e === vo.POPUP) {
                                    var n = $(),
                                        t = n.width,
                                        i = void 0 === t ? "300px" : t,
                                        a = n.height,
                                        u = void 0 === a ? "150px" : a;
                                    (i = rt(i, window.outerWidth)), (u = rt(u, window.outerWidth));
                                    var l = Pn("", x({ name: o, width: i, height: u }, ye().popup));
                                    return (
                                        P.register(function () {
                                            return de(l);
                                        }),
                                            P.register(function () {
                                                return lo(l);
                                            }),
                                            l
                                    );
                                }
                                throw new Error("No render context available for " + e);
                            }).then(function (e) {
                                return (
                                    t.setWindow(e, { send: eo }),
                                        t.setName(o).then(function () {
                                            return t;
                                        })
                                );
                            });
                    },
                    _e = function () {
                        return R.try(function () {
                            var e = kn(
                                    window,
                                    "unload",
                                    Me(function () {
                                        Te(new Error("Window navigated away"));
                                    })
                                ),
                                n = le(d, Te, 3e3);
                            if ((P.register(n.cancel), P.register(e.cancel), K)) return K();
                        });
                    },
                    Ie = function (e) {
                        var n = !1;
                        return e
                            .isClosed()
                            .then(function (t) {
                                return t
                                    ? ((n = !0), Ne(new Error("Detected component window close")))
                                    : R.delay(200)
                                        .then(function () {
                                            return e.isClosed();
                                        })
                                        .then(function (e) {
                                            if (e) return (n = !0), Ne(new Error("Detected component window close"));
                                        });
                            })
                            .then(function () {
                                return n;
                            });
                    },
                    De = function (e) {
                        return _
                            ? _(e)
                            : R.try(function () {
                                if (-1 === O.indexOf(e)) return O.push(e), L.asyncReject(e), A.trigger("zoid-error", e);
                            });
                    },
                    je = new R(),
                    He = function (e) {
                        return R.try(function () {
                            je.resolve(e);
                        });
                    };
                Pe.onError = De;
                var qe = function (e, n) {
                        return e({ uid: a, container: n.container, context: n.context, doc: n.doc, frame: n.frame, prerenderFrame: n.prerenderFrame, focus: Ee, close: Ne, state: S, props: k, tag: m, dimensions: $(), event: A });
                    },
                    We = function (e, n) {
                        var t = n.context;
                        return U
                            ? U(e, { context: t })
                            : R.try(function () {
                                if (h) {
                                    A.trigger("zoid-prerender");
                                    var n = e.getWindow();
                                    if (
                                        n &&
                                        Z(n) &&
                                        (function (e) {
                                            try {
                                                if (!e.location.href) return !0;
                                                if ("about:blank" === e.location.href) return !0;
                                            } catch (e) {}
                                            return !1;
                                        })(n)
                                    ) {
                                        var r = (n = G(n)).document,
                                            o = qe(h, { context: t, doc: r });
                                        if (o) {
                                            if (o.ownerDocument !== r) throw new Error("Expected prerender template to have been created with document from child window");
                                            Sn(n, o);
                                            var i = w.width,
                                                a = void 0 !== i && i,
                                                u = w.height,
                                                l = void 0 !== u && u,
                                                c = w.element,
                                                s = void 0 === c ? "body" : c;
                                            if ((s = Cn(s, r)) && (a || l)) {
                                                var d = qn(
                                                    s,
                                                    function (e) {
                                                        Se({ width: a ? e.width : void 0, height: l ? e.height : void 0 });
                                                    },
                                                    { width: a, height: l, win: n }
                                                );
                                                A.on("zoid-rendered", d.cancel);
                                            }
                                            A.trigger("zoid-prerendered");
                                        }
                                    }
                                }
                            });
                    },
                    Ue = function (e, n) {
                        var r = n.proxyFrame,
                            o = n.proxyPrerenderFrame,
                            i = n.context,
                            a = n.rerender;
                        return B
                            ? B(e, { proxyFrame: r, proxyPrerenderFrame: o, context: i, rerender: a })
                            : R.hash({ container: e.get(), frame: r ? r.get() : null, prerenderFrame: o ? o.get() : null, internalState: ce() }).then(function (e) {
                                var n = e.container,
                                    r = e.internalState.visible,
                                    o = qe(p, { context: i, container: n, frame: e.frame, prerenderFrame: e.prerenderFrame, doc: document });
                                if (o) {
                                    r || Bn(o), bn(n, o);
                                    var u = (function (e, n) {
                                        n = Me(n);
                                        var t,
                                            r,
                                            o,
                                            i = !1,
                                            a = [],
                                            u = function () {
                                                i = !0;
                                                for (var e = 0; e < a.length; e++) a[e].disconnect();
                                                t && t.cancel(), o && o.removeEventListener("unload", l), r && jn(r);
                                            },
                                            l = function () {
                                                i || (n(), u());
                                            };
                                        if (Hn(e)) return l(), { cancel: u };
                                        if (window.MutationObserver)
                                            for (var c = e.parentElement; c; ) {
                                                var s = new window.MutationObserver(function () {
                                                    Hn(e) && l();
                                                });
                                                s.observe(c, { childList: !0 }), a.push(s), (c = c.parentElement);
                                            }
                                        return (
                                            (r = document.createElement("iframe")).setAttribute("name", "__detect_close_" + xe() + "__"),
                                                (r.style.display = "none"),
                                                Nn(r).then(function (e) {
                                                    (o = G(e)).addEventListener("unload", l);
                                                }),
                                                e.appendChild(r),
                                                (t = Ge(function () {
                                                    Hn(e) && l();
                                                }, 1e3)),
                                                { cancel: u }
                                        );
                                    })(o, function () {
                                        var e = new Error("Detected container element removed from DOM");
                                        return R.delay(1).then(function () {
                                            if (!Hn(o)) return P.all(e), a().then(Q, ne);
                                            Ne(e);
                                        });
                                    });
                                    return (
                                        P.register(function () {
                                            return u.cancel();
                                        }),
                                            P.register(function () {
                                                return jn(o);
                                            }),
                                            (t = po(o))
                                    );
                                }
                            });
                    },
                    ze = function () {
                        return { state: S, event: A, close: Ne, focus: Ee, resize: Se, onError: De, updateProps: Ye, show: he, hide: me };
                    },
                    Ze = function (e) {
                        void 0 === e && (e = {});
                        var n = i,
                            t = ze();
                        Be(T, e),
                            (function (e, n, t, r, o) {
                                var i = r.state,
                                    a = r.close,
                                    u = r.focus,
                                    l = r.event,
                                    c = r.onError;
                                No(t, e, function (e, r, s) {
                                    var d = !1,
                                        f = s;
                                    Object.defineProperty(n, e, {
                                        configurable: !0,
                                        enumerable: !0,
                                        get: function () {
                                            return d
                                                ? f
                                                : ((d = !0),
                                                    (function () {
                                                        if (!r) return f;
                                                        var d = r.alias;
                                                        if (
                                                            (d && !nn(s) && nn(t[d]) && (f = t[d]),
                                                            r.value && (f = r.value({ props: n, state: i, close: a, focus: u, event: l, onError: c, container: o })),
                                                            !r.default || nn(f) || nn(t[e]) || (f = r.default({ props: n, state: i, close: a, focus: u, event: l, onError: c, container: o })),
                                                                nn(f))
                                                        ) {
                                                            if ("array" === r.type ? !Array.isArray(f) : typeof f !== r.type) throw new TypeError("Prop is not of type " + r.type + ": " + e);
                                                        } else if (!1 !== r.required && !nn(t[e])) throw new Error('Expected prop "' + e + '" to be defined');
                                                        return nn(f) && r.decorate && (f = r.decorate({ value: f, props: n, state: i, close: a, focus: u, event: l, onError: c, container: o })), f;
                                                    })());
                                        },
                                    });
                                }),
                                    No(n, e, Re);
                            })(f, k, T, t, n);
                    },
                    Ye = function (e) {
                        return (
                            Ze(e),
                                L.then(function () {
                                    var e = r,
                                        t = n;
                                    if (e && t && o)
                                        return re(o).then(function (n) {
                                            return e.updateProps(n).catch(function (e) {
                                                return Ie(t).then(function (n) {
                                                    if (!n) throw e;
                                                });
                                            });
                                        });
                                })
                        );
                    },
                    Ke = function (e) {
                        return M
                            ? M(e)
                            : R.try(function () {
                                return Ln(e);
                            }).then(function (e) {
                                return (
                                    Wn(e) &&
                                    (e = (function e(n) {
                                        var t = (function (e) {
                                            var n = (function (e) {
                                                for (; e.parentNode; ) e = e.parentNode;
                                                if (Wn(e)) return e;
                                            })(e);
                                            if (n && n.host) return n.host;
                                        })(n);
                                        if (!t) throw new Error("Element is not in shadow dom");
                                        var r = "shadow-slot-" + xe(),
                                            o = document.createElement("slot");
                                        o.setAttribute("name", r), n.appendChild(o);
                                        var i = document.createElement("div");
                                        return i.setAttribute("slot", r), t.appendChild(i), Wn(t) ? e(i) : i;
                                    })(e)),
                                        (i = e),
                                        po(e)
                                );
                            });
                    };
                return {
                    init: function () {
                        A.on("zoid-render", function () {
                            return k.onRender();
                        }),
                            A.on("zoid-prerender", function () {
                                return k.onPrerender();
                            }),
                            A.on("zoid-display", function () {
                                return k.onDisplay();
                            }),
                            A.on("zoid-rendered", function () {
                                return k.onRendered();
                            }),
                            A.on("zoid-prerendered", function () {
                                return k.onPrerendered();
                            }),
                            A.on("zoid-close", function () {
                                return k.onClose();
                            }),
                            A.on("zoid-destroy", function () {
                                return k.onDestroy();
                            }),
                            A.on("zoid-resize", function () {
                                return k.onResize();
                            }),
                            A.on("zoid-focus", function () {
                                return k.onFocus();
                            }),
                            A.on("zoid-props", function (e) {
                                return k.onProps(e);
                            }),
                            A.on("zoid-error", function (e) {
                                return k && k.onError
                                    ? k.onError(e)
                                    : ne(e).then(function () {
                                        setTimeout(function () {
                                            throw e;
                                        }, 1);
                                    });
                            }),
                            P.register(A.reset);
                    },
                    render: function (e) {
                        var t = e.target,
                            r = e.container,
                            o = e.context,
                            i = e.rerender;
                        return R.try(function () {
                            var e = ve(),
                                l = C || ve();
                            !(function (e, n, t) {
                                if (e !== window) {
                                    if (!ie(window, e)) throw new Error("Can only renderTo an adjacent frame");
                                    var r = z();
                                    if (!ae(n, r) && !Z(e)) throw new Error("Can not render remotely to " + n.toString() + " - can only render to " + r);
                                    if (t && "string" != typeof t) throw new Error("Container passed to renderTo must be a string selector, got " + typeof t + " }");
                                }
                            })(t, l, r);
                            var c = R.try(function () {
                                    if (t !== window)
                                        return (function (e, n) {
                                            for (var t = {}, r = 0, o = Object.keys(k); r < o.length; r++) {
                                                var i = o[r],
                                                    u = f[i];
                                                u && u.allowDelegate && (t[i] = k[i]);
                                            }
                                            var l = eo(n, "zoid_delegate_" + g, { uid: a, overrides: { props: t, event: A, close: Ne, onError: De, getInternalState: ce, setInternalState: se, resolveInitPromise: Q, rejectInitPromise: ne } })
                                                .then(function (e) {
                                                    var t = e.data.parent;
                                                    return (
                                                        P.register(function (e) {
                                                            if (!ee(n)) return t.destroy(e);
                                                        }),
                                                            t.getDelegateOverrides()
                                                    );
                                                })
                                                .catch(function (e) {
                                                    throw new Error("Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" + Fe(e));
                                                });
                                            return (
                                                (M = function () {
                                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                                    return l.then(function (e) {
                                                        return e.getProxyContainer.apply(e, n);
                                                    });
                                                }),
                                                    (B = function () {
                                                        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                                        return l.then(function (e) {
                                                            return e.renderContainer.apply(e, n);
                                                        });
                                                    }),
                                                    (F = function () {
                                                        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                                        return l.then(function (e) {
                                                            return e.show.apply(e, n);
                                                        });
                                                    }),
                                                    (I = function () {
                                                        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                                        return l.then(function (e) {
                                                            return e.hide.apply(e, n);
                                                        });
                                                    }),
                                                    (K = function () {
                                                        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                                        return l.then(function (e) {
                                                            return e.watchForUnload.apply(e, n);
                                                        });
                                                    }),
                                                    e === vo.IFRAME
                                                        ? ((j = function () {
                                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                                            return l.then(function (e) {
                                                                return e.getProxyWindow.apply(e, n);
                                                            });
                                                        }),
                                                            (q = function () {
                                                                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                                                return l.then(function (e) {
                                                                    return e.openFrame.apply(e, n);
                                                                });
                                                            }),
                                                            (W = function () {
                                                                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                                                return l.then(function (e) {
                                                                    return e.openPrerenderFrame.apply(e, n);
                                                                });
                                                            }),
                                                            (U = function () {
                                                                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                                                return l.then(function (e) {
                                                                    return e.prerender.apply(e, n);
                                                                });
                                                            }),
                                                            (V = function () {
                                                                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                                                return l.then(function (e) {
                                                                    return e.open.apply(e, n);
                                                                });
                                                            }),
                                                            (Y = function () {
                                                                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                                                return l.then(function (e) {
                                                                    return e.openPrerender.apply(e, n);
                                                                });
                                                            }))
                                                        : e === vo.POPUP &&
                                                        (H = function () {
                                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                                            return l.then(function (e) {
                                                                return e.setProxyWin.apply(e, n);
                                                            });
                                                        }),
                                                    l
                                            );
                                        })(o, t);
                                }),
                                s = k.window,
                                d = _e(),
                                p = Ao(f, k, "post"),
                                h = A.trigger("zoid-render"),
                                y = Ke(r),
                                v = fe(),
                                w = y.then(function () {
                                    return Ze();
                                }),
                                b = w.then(function () {
                                    return Ao(f, k, "get").then(function (e) {
                                        return mn(
                                            (function (e) {
                                                if (0 !== ue(e).indexOf("mock:")) return e;
                                                throw new Error("Mock urls not supported out of test mode");
                                            })(ge()),
                                            { query: e }
                                        );
                                    });
                                }),
                                E = v.then(function (n) {
                                    return (function (e) {
                                        var n = void 0 === e ? {} : e,
                                            t = n.proxyWin,
                                            r = n.initialChildDomain,
                                            o = n.childDomainMatch,
                                            i = n.target,
                                            u = void 0 === i ? window : i,
                                            l = n.context;
                                        return (function (e) {
                                            var n = void 0 === e ? {} : e,
                                                t = n.proxyWin,
                                                r = n.childDomainMatch,
                                                o = n.context;
                                            return re(n.initialChildDomain).then(function (e) {
                                                return {
                                                    uid: a,
                                                    context: o,
                                                    tag: m,
                                                    childDomainMatch: r,
                                                    version: "10_1_0",
                                                    props: e,
                                                    exports:
                                                        ((n = t),
                                                            {
                                                                init: function (e) {
                                                                    return Pe(this.origin, e);
                                                                },
                                                                close: Ne,
                                                                checkClose: function () {
                                                                    return Ie(n);
                                                                },
                                                                resize: Se,
                                                                onError: De,
                                                                show: he,
                                                                hide: me,
                                                                export: He,
                                                            }),
                                                };
                                                var n;
                                            });
                                        })({ proxyWin: t, initialChildDomain: r, childDomainMatch: o, context: l }).then(function (e) {
                                            var n = go({ data: e, metaData: { windowRef: Oe(u, r, l, t) }, sender: { domain: z(window) }, receiver: { win: t, domain: o }, passByReference: r === z() }),
                                                i = n.serializedData;
                                            return P.register(n.cleanReference), i;
                                        });
                                    })({
                                        proxyWin: (r = { proxyWin: n, initialChildDomain: e, childDomainMatch: l, target: t, context: o }).proxyWin,
                                        initialChildDomain: r.initialChildDomain,
                                        childDomainMatch: r.childDomainMatch,
                                        target: r.target,
                                        context: r.context,
                                    }).then(function (e) {
                                        return wo({ name: g, serializedPayload: e });
                                    });
                                    var r;
                                }),
                                x = E.then(function (e) {
                                    return we(o, { windowName: e });
                                }),
                                O = be(o),
                                S = R.hash({ proxyContainer: y, proxyFrame: x, proxyPrerenderFrame: O })
                                    .then(function (e) {
                                        return Ue(e.proxyContainer, { context: o, proxyFrame: e.proxyFrame, proxyPrerenderFrame: e.proxyPrerenderFrame, rerender: i });
                                    })
                                    .then(function (e) {
                                        return e;
                                    }),
                                T = R.hash({ windowName: E, proxyFrame: x, proxyWin: v }).then(function (e) {
                                    var n = e.proxyWin;
                                    return s ? n : ke(o, { windowName: e.windowName, proxyWin: n, proxyFrame: e.proxyFrame });
                                }),
                                N = R.hash({ proxyWin: T, proxyPrerenderFrame: O }).then(function (e) {
                                    return Ce(o, e.proxyWin, e.proxyPrerenderFrame);
                                }),
                                _ = T.then(function (e) {
                                    return (n = e), pe(e);
                                }),
                                D = R.hash({ proxyPrerenderWin: N, state: _ }).then(function (e) {
                                    return We(e.proxyPrerenderWin, { context: o });
                                }),
                                G = R.hash({ proxyWin: T, windowName: E }).then(function (e) {
                                    if (s) return e.proxyWin.setName(e.windowName);
                                }),
                                J = R.hash({ body: p }).then(function (e) {
                                    return u.method ? u.method : Object.keys(e.body).length ? "post" : "get";
                                }),
                                X = R.hash({ proxyWin: T, windowUrl: b, body: p, method: J, windowName: G, prerender: D }).then(function (e) {
                                    return e.proxyWin.setLocation(e.windowUrl, { method: e.method, body: e.body });
                                }),
                                $ = T.then(function (e) {
                                    !(function e(n, t) {
                                        var r = !1;
                                        return (
                                            P.register(function () {
                                                r = !0;
                                            }),
                                                R.delay(2e3)
                                                    .then(function () {
                                                        return n.isClosed();
                                                    })
                                                    .then(function (o) {
                                                        if (!r) return o ? Ne(new Error("Detected " + t + " close")) : e(n, t);
                                                    })
                                        );
                                    })(e, o);
                                }),
                                te = R.hash({ container: S, prerender: D }).then(function () {
                                    return A.trigger("zoid-display");
                                }),
                                oe = T.then(function (e) {}),
                                le = X.then(function () {
                                    return R.try(function () {
                                        var e = k.timeout;
                                        if (e) return L.timeout(e, new Error("Loading component timed out after " + e + " milliseconds"));
                                    });
                                }),
                                de = L.then(function () {
                                    return A.trigger("zoid-rendered");
                                });
                            return R.hash({
                                initPromise: L,
                                buildUrlPromise: b,
                                onRenderPromise: h,
                                getProxyContainerPromise: y,
                                openFramePromise: x,
                                openPrerenderFramePromise: O,
                                renderContainerPromise: S,
                                openPromise: T,
                                openPrerenderPromise: N,
                                setStatePromise: _,
                                prerenderPromise: D,
                                loadUrlPromise: X,
                                buildWindowNamePromise: E,
                                setWindowNamePromise: G,
                                watchForClosePromise: $,
                                onDisplayPromise: te,
                                openBridgePromise: oe,
                                runTimeoutPromise: le,
                                onRenderedPromise: de,
                                delegatePromise: c,
                                watchForUnloadPromise: d,
                                finalSetPropsPromise: w,
                            });
                        })
                            .catch(function (e) {
                                return R.all([De(e), Te(e)]).then(
                                    function () {
                                        throw e;
                                    },
                                    function () {
                                        throw e;
                                    }
                                );
                            })
                            .then(Re);
                    },
                    destroy: Te,
                    getProps: function () {
                        return k;
                    },
                    setProps: Ze,
                    export: He,
                    getHelpers: ze,
                    getDelegateOverrides: function () {
                        return R.try(function () {
                            return {
                                getProxyContainer: Ke,
                                show: he,
                                hide: me,
                                renderContainer: Ue,
                                getProxyWindow: fe,
                                watchForUnload: _e,
                                openFrame: we,
                                openPrerenderFrame: be,
                                prerender: We,
                                open: ke,
                                openPrerender: Ce,
                                setProxyWin: pe,
                            };
                        });
                    },
                    getExports: function () {
                        return E({
                            getExports: function () {
                                return je;
                            },
                        });
                    },
                };
            }
            var _o = {
                    register: function (e, n, t, r) {
                        var o = r.React,
                            i = r.ReactDOM;
                        return (function (e) {
                            function n() {
                                return e.apply(this, arguments) || this;
                            }
                            L(n, e);
                            var r = n.prototype;
                            return (
                                (r.render = function () {
                                    return o.createElement("div", null);
                                }),
                                    (r.componentDidMount = function () {
                                        var e = i.findDOMNode(this),
                                            n = t(Be({}, this.props));
                                        n.render(e, vo.IFRAME), this.setState({ parent: n });
                                    }),
                                    (r.componentDidUpdate = function () {
                                        this.state && this.state.parent && this.state.parent.updateProps(Be({}, this.props)).catch(Re);
                                    }),
                                    n
                            );
                        })(o.Component);
                    },
                },
                Ro = {
                    register: function (e, n, t, r) {
                        return r.component(e, {
                            render: function (e) {
                                return e("div");
                            },
                            inheritAttrs: !1,
                            mounted: function () {
                                var e,
                                    n = this.$el;
                                (this.parent = t(
                                    x(
                                        {},
                                        ((e = this.$attrs),
                                            Object.keys(e).reduce(function (n, t) {
                                                var r = e[t];
                                                return "style-object" === t || "styleObject" === t ? ((n.style = r), (n.styleObject = r)) : t.includes("-") ? (n[Ye(t)] = r) : (n[t] = r), n;
                                            }, {}))
                                    )
                                )),
                                    this.parent.render(n, vo.IFRAME);
                            },
                            watch: {
                                $attrs: {
                                    handler: function () {
                                        this.parent && this.$attrs && this.parent.updateProps(x({}, this.$attrs)).catch(Re);
                                    },
                                    deep: !0,
                                },
                            },
                        });
                    },
                },
                Mo = {
                    register: function (e, n, t) {
                        return {
                            template: "<div></div>",
                            inheritAttrs: !1,
                            mounted: function () {
                                var e,
                                    n = this.$el;
                                (this.parent = t(
                                    x(
                                        {},
                                        ((e = this.$attrs),
                                            Object.keys(e).reduce(function (n, t) {
                                                var r = e[t];
                                                return "style-object" === t || "styleObject" === t ? ((n.style = r), (n.styleObject = r)) : t.includes("-") ? (n[Ye(t)] = r) : (n[t] = r), n;
                                            }, {}))
                                    )
                                )),
                                    this.parent.render(n, vo.IFRAME);
                            },
                            watch: {
                                $attrs: {
                                    handler: function () {
                                        this.parent && this.$attrs && this.parent.updateProps(x({}, this.$attrs)).catch(Re);
                                    },
                                    deep: !0,
                                },
                            },
                        };
                    },
                },
                Fo = {
                    register: function (e, n, t, r) {
                        return r.module(e, []).directive(Ye(e), function () {
                            for (var e = {}, r = 0, o = Object.keys(n); r < o.length; r++) e[o[r]] = "=";
                            return (
                                (e.props = "="),
                                    {
                                        scope: e,
                                        restrict: "E",
                                        controller: [
                                            "$scope",
                                            "$element",
                                            function (e, n) {
                                                function r() {
                                                    if ("$apply" !== e.$root.$$phase && "$digest" !== e.$root.$$phase)
                                                        try {
                                                            e.$apply();
                                                        } catch (e) {}
                                                }
                                                var o = function () {
                                                        return en(e.props, function (e) {
                                                            return "function" == typeof e
                                                                ? function () {
                                                                    var n = e.apply(this, arguments);
                                                                    return r(), n;
                                                                }
                                                                : e;
                                                        });
                                                    },
                                                    i = t(o());
                                                i.render(n[0], vo.IFRAME),
                                                    e.$watch(function () {
                                                        i.updateProps(o()).catch(Re);
                                                    });
                                            },
                                        ],
                                    }
                            );
                        });
                    },
                },
                Io = {
                    register: function (e, n, t, r) {
                        var o = r.Component,
                            i = r.NgModule,
                            a = r.ElementRef,
                            u = r.NgZone,
                            l = r.Inject,
                            c = (function () {
                                function e(e, n) {
                                    (this.elementRef = void 0),
                                        (this.internalProps = void 0),
                                        (this.parent = void 0),
                                        (this.props = void 0),
                                        (this.zone = void 0),
                                        (this._props = void 0),
                                        (this._props = {}),
                                        (this.elementRef = e),
                                        (this.zone = n);
                                }
                                var n = e.prototype;
                                return (
                                    (n.getProps = function () {
                                        var e = this;
                                        return en(x({}, this.internalProps, this.props), function (n) {
                                            if ("function" == typeof n) {
                                                var t = e.zone;
                                                return function () {
                                                    var e = arguments,
                                                        r = this;
                                                    return t.run(function () {
                                                        return n.apply(r, e);
                                                    });
                                                };
                                            }
                                            return n;
                                        });
                                    }),
                                        (n.ngOnInit = function () {
                                            var e = this.elementRef.nativeElement;
                                            (this.parent = t(this.getProps())), this.parent.render(e, vo.IFRAME);
                                        }),
                                        (n.ngDoCheck = function () {
                                            this.parent &&
                                            !(function (e, n) {
                                                var t = {};
                                                for (var r in e) if (e.hasOwnProperty(r) && ((t[r] = !0), e[r] !== n[r])) return !1;
                                                for (var o in n) if (!t[o]) return !1;
                                                return !0;
                                            })(this._props, this.props) &&
                                            ((this._props = x({}, this.props)), this.parent.updateProps(this.getProps()));
                                        }),
                                        e
                                );
                            })();
                        (c.annotations = void 0), (c.parameters = void 0), (c.parameters = [[new l(a)], [new l(u)]]), (c.annotations = [new o({ selector: e, template: "<div></div>", inputs: ["props"] })]);
                        var s = function () {};
                        return (s.annotations = void 0), (s.annotations = [new i({ declarations: [c], exports: [c] })]), s;
                    },
                };
            function Do(e) {
                var n = e.uid,
                    t = e.frame,
                    r = e.prerenderFrame,
                    o = e.doc,
                    i = e.props,
                    a = e.event,
                    u = e.dimensions,
                    l = u.width,
                    c = u.height;
                if (t && r) {
                    var s = o.createElement("div");
                    s.setAttribute("id", n);
                    var d = o.createElement("style");
                    return (
                        i.cspNonce && d.setAttribute("nonce", i.cspNonce),
                            d.appendChild(
                                o.createTextNode(
                                    "\n            #" +
                                    n +
                                    " {\n                display: inline-block;\n                position: relative;\n                width: " +
                                    l +
                                    ";\n                height: " +
                                    c +
                                    ";\n            }\n\n            #" +
                                    n +
                                    " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" +
                                    n +
                                    " > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #" +
                                    n +
                                    " > iframe.zoid-visible {\n                opacity: 1;\n        }\n        "
                                )
                            ),
                            s.appendChild(t),
                            s.appendChild(r),
                            s.appendChild(d),
                            r.classList.add("zoid-visible"),
                            t.classList.add("zoid-invisible"),
                            a.on("zoid-rendered", function () {
                                r.classList.remove("zoid-visible"),
                                    r.classList.add("zoid-invisible"),
                                    t.classList.remove("zoid-invisible"),
                                    t.classList.add("zoid-visible"),
                                    setTimeout(function () {
                                        jn(r);
                                    }, 1);
                            }),
                            a.on("zoid-resize", function (e) {
                                var n = e.width,
                                    t = e.height;
                                "number" == typeof n && (s.style.width = tt(n)), "number" == typeof t && (s.style.height = tt(t));
                            }),
                            s
                    );
                }
            }
            function Bo(e) {
                var n = e.doc,
                    t = e.props,
                    r = n.createElement("html"),
                    o = n.createElement("body"),
                    i = n.createElement("style"),
                    a = n.createElement("div");
                return (
                    a.classList.add("spinner"),
                    t.cspNonce && i.setAttribute("nonce", t.cspNonce),
                        r.appendChild(o),
                        o.appendChild(a),
                        o.appendChild(i),
                        i.appendChild(
                            n.createTextNode(
                                "\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        "
                            )
                        ),
                        r
                );
            }
            var jo = on(),
                Ho = on();
            function qo(e) {
                var n,
                    t,
                    r = (function (e) {
                        var n = e.tag,
                            t = e.url,
                            r = e.domain,
                            o = e.bridgeUrl,
                            i = e.props,
                            a = void 0 === i ? {} : i,
                            u = e.dimensions,
                            l = void 0 === u ? {} : u,
                            c = e.autoResize,
                            s = void 0 === c ? {} : c,
                            d = e.allowedParentDomains,
                            f = void 0 === d ? "*" : d,
                            p = e.attributes,
                            h = void 0 === p ? {} : p,
                            m = e.defaultContext,
                            g = void 0 === m ? vo.IFRAME : m,
                            y = e.containerTemplate,
                            v = void 0 === y ? Do : y,
                            w = e.prerenderTemplate,
                            b = void 0 === w ? Bo : w,
                            C = e.validate,
                            E = e.eligible,
                            L =
                                void 0 === E
                                    ? function () {
                                        return { eligible: !0 };
                                    }
                                    : E,
                            O = e.logger,
                            P = void 0 === O ? { info: Re } : O,
                            S = e.exports,
                            T = void 0 === S ? Re : S,
                            N = e.method,
                            A = e.children,
                            k =
                                void 0 === A
                                    ? function () {
                                        return {};
                                    }
                                    : A,
                            _ = n.replace(/-/g, "_"),
                            R = x(
                                {},
                                {
                                    window: {
                                        type: "object",
                                        sendToChild: !1,
                                        required: !1,
                                        allowDelegate: !0,
                                        validate: function (e) {
                                            var n = e.value;
                                            if (!ce(n) && !Ir.isProxyWindow(n)) throw new Error("Expected Window or ProxyWindow");
                                            if (ce(n)) {
                                                if (ee(n)) throw new Error("Window is closed");
                                                if (!Z(n)) throw new Error("Window is not same domain");
                                            }
                                        },
                                        decorate: function (e) {
                                            return oo(e.value);
                                        },
                                    },
                                    timeout: { type: "number", required: !1, sendToChild: !1 },
                                    cspNonce: { type: "string", required: !1 },
                                    onDisplay: { type: "function", required: !1, sendToChild: !1, allowDelegate: !0, default: So, decorate: To },
                                    onRendered: { type: "function", required: !1, sendToChild: !1, default: So, decorate: To },
                                    onRender: { type: "function", required: !1, sendToChild: !1, default: So, decorate: To },
                                    onPrerendered: { type: "function", required: !1, sendToChild: !1, default: So, decorate: To },
                                    onPrerender: { type: "function", required: !1, sendToChild: !1, default: So, decorate: To },
                                    onClose: { type: "function", required: !1, sendToChild: !1, allowDelegate: !0, default: So, decorate: To },
                                    onDestroy: { type: "function", required: !1, sendToChild: !1, allowDelegate: !0, default: So, decorate: To },
                                    onResize: { type: "function", required: !1, sendToChild: !1, allowDelegate: !0, default: So },
                                    onFocus: { type: "function", required: !1, sendToChild: !1, allowDelegate: !0, default: So },
                                    close: {
                                        type: "function",
                                        required: !1,
                                        sendToChild: !1,
                                        childDecorate: function (e) {
                                            return e.close;
                                        },
                                    },
                                    focus: {
                                        type: "function",
                                        required: !1,
                                        sendToChild: !1,
                                        childDecorate: function (e) {
                                            return e.focus;
                                        },
                                    },
                                    resize: {
                                        type: "function",
                                        required: !1,
                                        sendToChild: !1,
                                        childDecorate: function (e) {
                                            return e.resize;
                                        },
                                    },
                                    uid: {
                                        type: "string",
                                        required: !1,
                                        sendToChild: !1,
                                        childDecorate: function (e) {
                                            return e.uid;
                                        },
                                    },
                                    tag: {
                                        type: "string",
                                        required: !1,
                                        sendToChild: !1,
                                        childDecorate: function (e) {
                                            return e.tag;
                                        },
                                    },
                                    getParent: {
                                        type: "function",
                                        required: !1,
                                        sendToChild: !1,
                                        childDecorate: function (e) {
                                            return e.getParent;
                                        },
                                    },
                                    getParentDomain: {
                                        type: "function",
                                        required: !1,
                                        sendToChild: !1,
                                        childDecorate: function (e) {
                                            return e.getParentDomain;
                                        },
                                    },
                                    show: {
                                        type: "function",
                                        required: !1,
                                        sendToChild: !1,
                                        childDecorate: function (e) {
                                            return e.show;
                                        },
                                    },
                                    hide: {
                                        type: "function",
                                        required: !1,
                                        sendToChild: !1,
                                        childDecorate: function (e) {
                                            return e.hide;
                                        },
                                    },
                                    export: {
                                        type: "function",
                                        required: !1,
                                        sendToChild: !1,
                                        childDecorate: function (e) {
                                            return e.export;
                                        },
                                    },
                                    onError: {
                                        type: "function",
                                        required: !1,
                                        sendToChild: !1,
                                        childDecorate: function (e) {
                                            return e.onError;
                                        },
                                    },
                                    onProps: {
                                        type: "function",
                                        required: !1,
                                        sendToChild: !1,
                                        childDecorate: function (e) {
                                            return e.onProps;
                                        },
                                    },
                                    getSiblings: {
                                        type: "function",
                                        required: !1,
                                        sendToChild: !1,
                                        childDecorate: function (e) {
                                            return e.getSiblings;
                                        },
                                    },
                                },
                                a
                            );
                        if (!v) throw new Error("Container template required");
                        return {
                            name: _,
                            tag: n,
                            url: t,
                            domain: r,
                            bridgeUrl: o,
                            method: N,
                            propsDef: R,
                            dimensions: l,
                            autoResize: s,
                            allowedParentDomains: f,
                            attributes: h,
                            defaultContext: g,
                            containerTemplate: v,
                            prerenderTemplate: b,
                            validate: C,
                            logger: P,
                            eligible: L,
                            children: k,
                            exports:
                                "function" == typeof T
                                    ? T
                                    : function (e) {
                                        for (
                                            var n = e.getExports,
                                                t = {},
                                                r = function (e, r) {
                                                    var o = r[e],
                                                        i = T[o].type,
                                                        a = n().then(function (e) {
                                                            return e[o];
                                                        });
                                                    t[o] =
                                                        "function" === i
                                                            ? function () {
                                                                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                                                return a.then(function (e) {
                                                                    return e.apply(void 0, n);
                                                                });
                                                            }
                                                            : a;
                                                },
                                                o = 0,
                                                i = Object.keys(T);
                                            o < i.length;
                                            o++
                                        )
                                            r(o, i);
                                        return t;
                                    },
                        };
                    })(e),
                    o = r.name,
                    i = r.tag,
                    a = r.defaultContext,
                    u = r.propsDef,
                    l = r.eligible,
                    c = r.children,
                    s = so(window),
                    d = {},
                    f = [],
                    p = function () {
                        if (
                            (function (e) {
                                try {
                                    return bo(window.name).name === e;
                                } catch (e) {}
                                return !1;
                            })(o)
                        ) {
                            var e = Eo().payload;
                            if (e.tag === i && ae(e.childDomainMatch, z())) return !0;
                        }
                        return !1;
                    },
                    h = Ae(function () {
                        if (p()) {
                            if (window.xprops) throw (delete s.components[i], new Error("Can not register " + o + " as child - child already registered"));
                            var e = (function (e) {
                                var n,
                                    t = e.tag,
                                    r = e.propsDef,
                                    o = e.autoResize,
                                    i = e.allowedParentDomains,
                                    a = [],
                                    u = Eo(),
                                    l = u.parent,
                                    c = u.payload,
                                    s = l.win,
                                    d = l.domain,
                                    f = new R(),
                                    p = c.version,
                                    h = c.uid,
                                    m = c.exports,
                                    g = c.context,
                                    y = c.props;
                                if ("10_1_0" !== p) throw new Error("Parent window has zoid version " + p + ", child window has version 10_1_0");
                                var v = m.show,
                                    w = m.hide,
                                    b = m.close,
                                    C = m.onError,
                                    E = m.checkClose,
                                    L = m.export,
                                    x = m.resize,
                                    O = m.init,
                                    P = function () {
                                        return s;
                                    },
                                    S = function () {
                                        return d;
                                    },
                                    T = function (e) {
                                        return (
                                            a.push(e),
                                                {
                                                    cancel: function () {
                                                        a.splice(a.indexOf(e), 1);
                                                    },
                                                }
                                        );
                                    },
                                    N = function (e) {
                                        return x.fireAndForget({ width: e.width, height: e.height });
                                    },
                                    A = function (e) {
                                        return f.resolve(e), L(e);
                                    },
                                    k = function (e) {
                                        var r = (void 0 === e ? {} : e).anyParent,
                                            o = [],
                                            i = n.parent;
                                        if ((void 0 === r && (r = !i), !r && !i)) throw new Error("No parent found for " + t + " child");
                                        for (var a = 0, u = X(window); a < u.length; a++) {
                                            var l = u[a];
                                            if (Z(l)) {
                                                var c = G(l).xprops;
                                                if (c && P() === c.getParent()) {
                                                    var s = c.parent;
                                                    if (r || !i || (s && s.uid === i.uid)) {
                                                        var d = fo(l, function (e) {
                                                            return e.exports;
                                                        });
                                                        o.push({ props: c, exports: d });
                                                    }
                                                }
                                            }
                                        }
                                        return o;
                                    },
                                    _ = function (e, o, i) {
                                        void 0 === i && (i = !1);
                                        var u = (function (e, n, t, r, o, i) {
                                            void 0 === i && (i = !1);
                                            for (var a = {}, u = 0, l = Object.keys(t); u < l.length; u++) {
                                                var c = l[u],
                                                    s = n[c];
                                                if (!s || !s.sameDomain || (r === z(window) && Z(e))) {
                                                    var d = xo(n, 0, c, t[c], o);
                                                    (a[c] = d), s && s.alias && !a[s.alias] && (a[s.alias] = d);
                                                }
                                            }
                                            if (!i)
                                                for (var f = 0, p = Object.keys(n); f < p.length; f++) {
                                                    var h = p[f];
                                                    t.hasOwnProperty(h) || (a[h] = xo(n, 0, h, void 0, o));
                                                }
                                            return a;
                                        })(s, r, e, o, { tag: t, show: v, hide: w, close: b, focus: Oo, onError: C, resize: N, getSiblings: k, onProps: T, getParent: P, getParentDomain: S, uid: h, export: A }, i);
                                        n ? Be(n, u) : (n = u);
                                        for (var l = 0; l < a.length; l++) (0, a[l])(n);
                                    },
                                    M = function (e) {
                                        return R.try(function () {
                                            return _(e, d, !0);
                                        });
                                    };
                                return {
                                    init: function () {
                                        return R.try(function () {
                                            return (
                                                Z(s) &&
                                                (function (e) {
                                                    var n = e.componentName,
                                                        t = e.parentComponentWindow,
                                                        r = yo({ data: bo(window.name).serializedInitialPayload, sender: { win: t }, basic: !0 }),
                                                        o = r.sender;
                                                    if ("uid" === r.reference.type || "global" === r.metaData.windowRef.type) {
                                                        var i = go({ data: r.data, metaData: { windowRef: Lo(t) }, sender: { domain: o.domain }, receiver: { win: window, domain: z() }, basic: !0 });
                                                        window.name = wo({ name: n, serializedPayload: i.serializedData });
                                                    }
                                                })({ componentName: e.name, parentComponentWindow: s }),
                                                    (so(window).exports = e.exports({
                                                        getExports: function () {
                                                            return f;
                                                        },
                                                    })),
                                                    (function (e, n) {
                                                        if (!ae(e, n)) throw new Error("Can not be rendered by domain: " + n);
                                                    })(i, d),
                                                    Or(s),
                                                    window.addEventListener("beforeunload", function () {
                                                        E.fireAndForget();
                                                    }),
                                                    window.addEventListener("unload", function () {
                                                        E.fireAndForget();
                                                    }),
                                                    le(s, function () {
                                                        Po();
                                                    }),
                                                    O({ updateProps: M, close: Po })
                                            );
                                        })
                                            .then(function () {
                                                return ((e = o.width),
                                                    (n = void 0 !== e && e),
                                                    (t = o.height),
                                                    (r = void 0 !== t && t),
                                                    (i = o.element),
                                                    Ln(void 0 === i ? "body" : i)
                                                        .catch(Re)
                                                        .then(function (e) {
                                                            return { width: n, height: r, element: e };
                                                        })).then(function (e) {
                                                    var n = e.width,
                                                        t = e.height,
                                                        r = e.element;
                                                    r &&
                                                    (n || t) &&
                                                    g !== vo.POPUP &&
                                                    qn(
                                                        r,
                                                        function (e) {
                                                            N({ width: n ? e.width : void 0, height: t ? e.height : void 0 });
                                                        },
                                                        { width: n, height: t }
                                                    );
                                                });
                                                var e, n, t, r, i;
                                            })
                                            .catch(function (e) {
                                                C(e);
                                            });
                                    },
                                    getProps: function () {
                                        return n || (_(y, d), n);
                                    },
                                };
                            })(r);
                            return e.init(), e;
                        }
                    }),
                    m = function e(n) {
                        var t,
                            u = "zoid-" + i + "-" + xe(),
                            s = n || {},
                            d = l({ props: s }),
                            p = d.eligible,
                            h = d.reason,
                            m = s.onDestroy;
                        s.onDestroy = function () {
                            if ((t && p && f.splice(f.indexOf(t), 1), m)) return m.apply(void 0, arguments);
                        };
                        var g = ko({ uid: u, options: r });
                        g.init(),
                            p ? g.setProps(s) : s.onDestroy && s.onDestroy(),
                            jo.register(function (e) {
                                return g.destroy(e || new Error("zoid destroyed all components"));
                            });
                        var y = function (n) {
                                var t = (void 0 === n ? {} : n).decorate;
                                return e((void 0 === t ? Ze : t)(s));
                            },
                            v = function (e, n, r) {
                                return R.try(function () {
                                    if (!p) {
                                        var n = new Error(h || o + " component is not eligible");
                                        return g.destroy(n).then(function () {
                                            throw n;
                                        });
                                    }
                                    if (!ce(e)) throw new Error("Must pass window to renderTo");
                                    return (function (e, n) {
                                        return R.try(function () {
                                            if (e.window) return oo(e.window).getType();
                                            if (n) {
                                                if (n !== vo.IFRAME && n !== vo.POPUP) throw new Error("Unrecognized context: " + n);
                                                return n;
                                            }
                                            return a;
                                        });
                                    })(s, r);
                                })
                                    .then(function (o) {
                                        if (
                                            ((n = (function (e, n) {
                                                if (n) {
                                                    if ("string" != typeof n && !we(n)) throw new TypeError("Expected string or element selector to be passed");
                                                    return n;
                                                }
                                                if (e === vo.POPUP) return "body";
                                                throw new Error("Expected element to be passed to render iframe");
                                            })(o, n)),
                                            e !== window && "string" != typeof n)
                                        )
                                            throw new Error("Must pass string element when rendering to another window");
                                        return g.render({
                                            target: e,
                                            container: n,
                                            context: o,
                                            rerender: function () {
                                                var o = y();
                                                return Be(t, o), o.renderTo(e, n, r);
                                            },
                                        });
                                    })
                                    .catch(function (e) {
                                        return g.destroy(e).then(function () {
                                            throw e;
                                        });
                                    });
                            };
                        return (
                            (t = x(
                                {},
                                g.getExports(),
                                g.getHelpers(),
                                (function () {
                                    for (
                                        var e = c(),
                                            n = {},
                                            t = function (t, r) {
                                                var o = r[t],
                                                    i = e[o];
                                                n[o] = function (e) {
                                                    var n = g.getProps(),
                                                        t = x({}, e, { parent: { uid: u, props: n, export: g.export } });
                                                    return i(t);
                                                };
                                            },
                                            r = 0,
                                            o = Object.keys(e);
                                        r < o.length;
                                        r++
                                    )
                                        t(r, o);
                                    return n;
                                })(),
                                {
                                    isEligible: function () {
                                        return p;
                                    },
                                    clone: y,
                                    render: function (e, n) {
                                        return v(window, e, n);
                                    },
                                    renderTo: function (e, n, t) {
                                        return v(e, n, t);
                                    },
                                }
                            )),
                            p && f.push(t),
                                t
                        );
                    };
                if (
                    (h(),
                        (n = $r("zoid_allow_delegate_" + o, function () {
                            return !0;
                        })),
                        (t = $r("zoid_delegate_" + o, function (e) {
                            var n = e.data;
                            return { parent: ko({ uid: n.uid, options: r, overrides: n.overrides, parentWin: e.source }) };
                        })),
                        Ho.register(n.cancel),
                        Ho.register(t.cancel),
                        (s.components = s.components || {}),
                        s.components[i])
                )
                    throw new Error("Can not register multiple components with the same tag: " + i);
                return (
                    (s.components[i] = !0),
                        {
                            init: m,
                            instances: f,
                            driver: function (e, n) {
                                var t = { react: _o, angular: Fo, vue: Ro, vue3: Mo, angular2: Io };
                                if (!t[e]) throw new Error("Could not find driver for framework: " + e);
                                return d[e] || (d[e] = t[e].register(i, u, m, n)), d[e];
                            },
                            isChild: p,
                            canRenderTo: function (e) {
                                return eo(e, "zoid_allow_delegate_" + o)
                                    .then(function (e) {
                                        return e.data;
                                    })
                                    .catch(function () {
                                        return !1;
                                    });
                            },
                            registerChild: h,
                        }
                );
            }
            var Wo = function (e) {
                io();
                var n = qo(e),
                    t = function (e) {
                        return n.init(e);
                    };
                (t.driver = function (e, t) {
                    return n.driver(e, t);
                }),
                    (t.isChild = function () {
                        return n.isChild();
                    }),
                    (t.canRenderTo = function (e) {
                        return n.canRenderTo(e);
                    }),
                    (t.instances = n.instances);
                var r = n.registerChild();
                return r && (window.xprops = t.xprops = r.getProps()), t;
            };
            function Uo(e) {
                var n = jo.all(e);
                return (jo = on()), n;
            }
            var zo = Uo,
                Zo = (function (e) {
                    function n(n) {
                        var t;
                        return ((t = e.call(this, n) || this).code = void 0), (t.name = "ValidationError"), (t.code = "validation_error"), t;
                    }
                    return L(n, e), n;
                })(ve(Error));
            function Go() {
                if (!er()) throw new Error("Can only determine if iframe rendering is allowed on paypal domain");
                if (!v()) return !0;
                var e = window.xprops && window.xprops.getParent();
                return !(!e || !Z(e));
            }
            function Vo() {
                return window.xprops && window.xprops.sessionID ? window.xprops.sessionID : ar();
            }
            var Yo = {
                    get: function (e) {
                        return ur(function (n) {
                            return R.resolve(n[e]);
                        });
                    },
                    set: function (e, n) {
                        return ur(function (t) {
                            return (t[e] = n), R.resolve(n);
                        });
                    },
                },
                Ko = {
                    get: function (e) {
                        return cr(function (n) {
                            return R.resolve(n[e]);
                        });
                    },
                    set: function (e, n) {
                        return cr(function (t) {
                            return (t[e] = n), R.resolve(n);
                        });
                    },
                };
            function Jo(e) {
                if (window.performance) return performance.getEntriesByName(e.buttonSessionID + "_" + e.phase).pop().startTime;
                throw new Error("window.performance not supported");
            }
            var Xo = function (e) {
                window.performance && window.performance.mark && window.performance.mark(e.buttonSessionID + "_" + e.phase);
            };
            function $o(e, n) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var o = e[r].render(n);
                    if (o)
                        if (Array.isArray(o))
                            for (var i = 0; i < o.length; i++) {
                                var a = o[i];
                                a && t.push(a);
                            }
                        else t.push(o);
                }
                return t;
            }
            var Qo = (function () {
                    function e(e, n, t) {
                        (this.type = "element"), (this.name = void 0), (this.props = void 0), (this.children = void 0), (this.onRender = void 0), (this.name = e), (this.props = n || {}), (this.children = t);
                        var r = this.props.onRender;
                        "function" == typeof r && ((this.onRender = r), delete n.onRender);
                    }
                    var n = e.prototype;
                    return (
                        (n.render = function (e) {
                            var n = e(this);
                            return this.onRender && this.onRender(n), n;
                        }),
                            (n.renderChildren = function (e) {
                                return $o(this.children, e);
                            }),
                            e
                    );
                })(),
                ei = (function () {
                    function e(e) {
                        (this.type = "fragment"), (this.children = void 0), (this.children = e);
                    }
                    return (
                        (e.prototype.render = function (e) {
                            return $o(this.children, e);
                        }),
                            e
                    );
                })(),
                ni = (function () {
                    function e(e) {
                        (this.type = "text"), (this.text = void 0), (this.text = e);
                    }
                    return (
                        (e.prototype.render = function (e) {
                            return e(this);
                        }),
                            e
                    );
                })(),
                ti = (function () {
                    function e(e, n, t) {
                        (this.type = "component"), (this.component = void 0), (this.props = void 0), (this.children = void 0), (this.component = e), (this.props = n || {}), (this.children = t), (this.props.children = t);
                    }
                    var n = e.prototype;
                    return (
                        (n.renderComponent = function (e) {
                            var n = (function (e) {
                                var n = ri(Array.isArray(e) ? e : [e]);
                                return 1 === n.length ? n[0] : n.length > 1 ? new ei(n) : void 0;
                            })(this.component(this.props, this.children));
                            if (n) return n.render(e);
                        }),
                            (n.render = function (e) {
                                return e(this);
                            }),
                            (n.renderChildren = function (e) {
                                return $o(this.children, e);
                            }),
                            e
                    );
                })();
            function ri(e) {
                for (var n = [], t = 0; t < e.length; t++) {
                    var r = e[t];
                    if (r)
                        if ("string" == typeof r || "number" == typeof r) n.push(new ni(r.toString()));
                        else {
                            if ("boolean" == typeof r) continue;
                            if (Array.isArray(r)) for (var o = 0, i = ri(r); o < i.length; o++) n.push(i[o]);
                            else {
                                if (!r || ("element" !== r.type && "text" !== r.type && "component" !== r.type)) throw new TypeError("Unrecognized node type: " + typeof r);
                                n.push(r);
                            }
                        }
                }
                return n;
            }
            var oi,
                ii,
                ai,
                ui = function (e, n) {
                    for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), o = 2; o < t; o++) r[o - 2] = arguments[o];
                    if (((r = ri(r)), "string" == typeof e)) return new Qo(e, n, r);
                    if ("function" == typeof e) return new ti(e, n, r);
                    throw new TypeError("Expected jsx element to be a string or a function");
                },
                li = function (e, n) {
                    return n;
                },
                ci = (((oi = {}).svg = "http://www.w3.org/2000/svg"), oi),
                si = (((ii = {})["xlink:href"] = "http://www.w3.org/1999/xlink"), ii);
            function di(e, n) {
                return e.createTextNode(n.text);
            }
            function fi(e, n) {
                for (var t = n.props, r = 0, o = Object.keys(t); r < o.length; r++) {
                    var i = o[r],
                        a = t[i];
                    if (null != a && "el" !== i && "innerHTML" !== i)
                        if (i.match(/^on[A-Z][a-z]/) && "function" == typeof a) e.addEventListener(i.slice(2).toLowerCase(), a);
                        else if ("string" == typeof a || "number" == typeof a) {
                            var u = si[i];
                            u ? e.setAttributeNS(u, i, a.toString()) : e.setAttribute(i, a.toString());
                        } else "boolean" == typeof a && !0 === a && e.setAttribute(i, "");
                }
                "iframe" !== e.tagName.toLowerCase() ||
                t.id ||
                e.setAttribute(
                    "id",
                    "jsx-iframe-" +
                    "xxxxxxxxxx".replace(/./g, function () {
                        return "0123456789abcdef".charAt(Math.floor(Math.random() * "0123456789abcdef".length));
                    })
                );
            }
            var pi =
                (((ai = {}).iframe = function (e, n) {
                    var t = n.children[0];
                    if (1 !== n.children.length || !t || "element" !== t.type || "html" !== t.name) throw new Error("Expected only single html element node as child of iframe element");
                    e.addEventListener("load", function () {
                        var n = e.contentWindow;
                        if (!n) throw new Error("Expected frame to have contentWindow");
                        for (var r = n.document, o = r.documentElement; o.children && o.children.length; ) o.removeChild(o.children[0]);
                        for (var i = t.render(mi({ doc: r })); i.children.length; ) o.appendChild(i.children[0]);
                    });
                }),
                    (ai.script = function (e, n) {
                        var t = n.children[0];
                        if (1 !== n.children.length || !t || "text" !== t.type) throw new Error("Expected only single text node as child of script element");
                        e.text = t.text;
                    }),
                    (ai.default = function (e, n, t) {
                        for (var r = 0, o = n.renderChildren(t); r < o.length; r++) e.appendChild(o[r]);
                    }),
                    ai);
            function hi(e, n, t, r) {
                if (n.props.hasOwnProperty("innerHTML")) {
                    if (n.children.length) throw new Error("Expected no children to be passed when innerHTML prop is set");
                    var o = n.props.innerHTML;
                    if ("string" != typeof o) throw new TypeError("innerHTML prop must be string");
                    "script" === n.name
                        ? (e.text = o)
                        : ((e.innerHTML = o),
                            (function (e, n) {
                                void 0 === n && (n = window.document);
                                for (var t = 0, r = e.querySelectorAll("script"); t < r.length; t++) {
                                    var o = r[t],
                                        i = o.parentNode;
                                    if (i) {
                                        var a = n.createElement("script");
                                        (a.text = o.textContent), i.replaceChild(a, o);
                                    }
                                }
                            })(e, t));
                } else (pi[n.name] || pi.default)(e, n, r);
            }
            function mi(e) {
                void 0 === e && (e = {});
                var n = e.doc,
                    t = void 0 === n ? document : n;
                return function e(n) {
                    if ("component" === n.type) return n.renderComponent(e);
                    if ("text" === n.type) return di(t, n);
                    if ("element" === n.type) {
                        var r = ci[n.name.toLowerCase()];
                        if (r)
                            return (function e(n, r) {
                                if ("component" === n.type)
                                    return n.renderComponent(function (n) {
                                        return e(n, r);
                                    });
                                if ("text" === n.type) return di(t, n);
                                if ("element" === n.type) {
                                    var o = (function (e, n, t) {
                                        return e.createElementNS(t, n.name);
                                    })(t, n, r);
                                    return (
                                        fi(o, n),
                                            hi(o, n, t, function (n) {
                                                return e(n, r);
                                            }),
                                            o
                                    );
                                }
                                throw new TypeError("Unhandleable node");
                            })(n, r);
                        var o = (function (e, n) {
                            return n.props.el ? n.props.el : e.createElement(n.name);
                        })(t, n);
                        return fi(o, n), hi(o, n, t, e), o;
                    }
                    throw new TypeError("Unhandleable node");
                };
            }
            var gi = { br: !0 };
            function yi(e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;");
            }
            function vi(e) {
                var n = e.css,
                    t = e.nonce,
                    r = e.children;
                return ui(li, null, ui("style", { innerHTML: "string" == typeof n ? n : n._getCss(), nonce: t }), r);
            }
            var wi,
                bi,
                Ci = ["svg"],
                Ei = ["render", "name", "logoColor"],
                Li = ["render", "name"];
            function xi(e) {
                var n = e.svg,
                    t = l(e, Ci);
                if (!n) throw new TypeError("Expected svg prop");
                if (
                    "string" !=
                    typeof (n = n.render(function e(n) {
                        if ("component" === n.type) return [].concat(n.renderComponent(e)).join("");
                        if ("element" === n.type) {
                            var t =
                                ((o = n.props),
                                    (i = Object.keys(o).filter(function (e) {
                                        var n = o[e];
                                        return "innerHTML" !== e && ("string" == typeof n || "number" == typeof n || !0 === n);
                                    })).length
                                        ? " " +
                                        i
                                            .map(function (e) {
                                                var n = o[e];
                                                if (!0 === n) return "" + yi(e);
                                                if ("string" != typeof n && "number" != typeof n) throw new TypeError("Unexpected prop type: " + typeof n);
                                                return "" === n ? yi(e) : yi(e) + '="' + yi(n.toString()) + '"';
                                            })
                                            .join(" ")
                                        : "");
                            if (gi[n.name]) return "<" + n.name + t + " />";
                            var r = "string" == typeof n.props.innerHTML ? n.props.innerHTML : n.renderChildren(e).join("");
                            return "<" + n.name + t + ">" + r + "</" + n.name + ">";
                        }
                        var o, i;
                        if ("text" === n.type) return yi(n.text);
                        throw new TypeError("Unhandleable node: " + n.type);
                    }))
                )
                    throw new TypeError("Expected svg prop to be a string or jsx node");
                var r = x({ src: Ue(n) }, t);
                return ui("img", r);
            }
            function Oi(e) {
                var n = e.render,
                    t = e.name,
                    r = e.logoColor,
                    o = l(e, Ei);
                return ui(xi, x({}, o, { svg: n(), alt: "", class: "paypal-logo paypal-logo-" + t + " " + (r ? "paypal-logo-color-" + r : "") }));
            }
            function Pi(e) {
                var n = e.render,
                    t = e.name,
                    r = l(e, Li);
                return ui(xi, x({}, r, { svg: n(), alt: Ke(t), class: "paypal-logo-card paypal-logo-card-" + t }));
            }
            function Si(e, n, t) {
                var r;
                if ((t && (r = n[t]), r || (r = n.default), !r)) throw new Error("No " + (t || "default") + " logo available for " + e);
                return r;
            }
            ((wi = {}).default = { primary: "#ffffff", secondary: "#ffffff" }),
                (wi.white = { primary: "#ffffff", secondary: "#ffffff" }),
                (wi.black = { primary: "#000000", secondary: "#000000" }),
                ((bi = {}).default = { primary: "#005498", secondary: "#FFD800" }),
                (bi.white = { primary: "#ffffff", secondary: "#ffffff" }),
                (bi.black = { primary: "#005498", secondary: "#FFD800" });
            var Ti,
                Ni = ["logoColor"],
                Ai = (((Ti = {}).default = { primary: "#333030" }), (Ti.white = { primary: "#ffffff" }), (Ti.black = { primary: "#333030" }), Ti);
            function ki(e) {
                var n = void 0 === e ? {} : e,
                    t = n.logoColor,
                    r = l(n, Ni),
                    o = Si("bank", Ai, t).primary;
                return ui(
                    Oi,
                    x({}, r, {
                        name: "bank",
                        render: function () {
                            return ui(
                                "svg",
                                { width: "19px", height: "18px", viewBox: "0 0 19 18", xmlns: "http://www.w3.org/2000/svg" },
                                ui(
                                    "g",
                                    { transform: "matrix(0.755484, 0, 0, 0.755484, 0.58609, -0.136891)" },
                                    ui(
                                        "g",
                                        { transform: "translate(-3.000000, -3.000000)", fill: o },
                                        ui("path", {
                                            d:
                                                "M7.5,11.25 L4.375,11.25 C3.73824612,11.25 3.50927246,10.4091381 4.05811242,10.0862911 L14.0493373,4.20910003 C14.6361169,3.86393557 15.3638831,3.86393557 15.9506627,4.20910003 L25.9418876,10.0862911 C26.4907275,10.4091381 26.2617539,11.25 25.625,11.25 L22.5,11.25 L22.5,18.1459005 C22.5,18.4910785 22.220178,18.7709005 21.875,18.7709005 C21.529822,18.7709005 21.25,18.4910785 21.25,18.1459005 L21.25,10.625 C21.25,10.279822 21.529822,10 21.875,10 L23.3298073,10 L15.3168875,5.28651779 C15.1212944,5.17146298 14.8787056,5.17146298 14.6831125,5.2865178 L6.67019269,10 L16.875,10 C17.9105339,10 18.75,10.8394661 18.75,11.875 L18.75,18.1459005 C18.75,18.4910785 18.470178,18.7709005 18.125,18.7709005 C17.779822,18.7709005 17.5,18.4910785 17.5,18.1459005 L17.5,11.875 C17.5,11.5298221 17.2201779,11.25 16.875,11.25 L13.7537575,11.25 L13.7537575,20.9375 C13.7537575,21.110089 13.8936685,21.25 14.0662575,21.25 L23.125,21.25 C23.470178,21.25 23.75,21.529822 23.75,21.875 L23.75,22.4947548 L25.625,22.4947548 C25.970178,22.4947548 26.25,22.7745768 26.25,23.1197548 L26.25,25.625 C26.25,25.970178 25.970178,26.25 25.625,26.25 L4.375,26.25 C4.02982203,26.25 3.75,25.970178 3.75,25.625 L3.75,23.1197548 C3.75,22.7745768 4.02982203,22.4947548 4.375,22.4947548 L6.25,22.4947548 L6.25,21.875 C6.25,21.529822 6.52982203,21.25 6.875,21.25 L9.30555555,21.25 C9.65073352,21.25 9.93055555,21.529822 9.93055555,21.875 C9.93055555,22.220178 9.65073352,22.5 9.30555555,22.5 L7.5,22.5 L7.5,23.1197548 C7.5,23.4649327 7.22017797,23.7447548 6.875,23.7447548 L5,23.7447548 L5,25 L25,25 L25,23.7447548 L23.125,23.7447548 C22.779822,23.7447548 22.5,23.4649327 22.5,23.1197548 L22.5,22.5 L14.0662575,22.5 C13.2033125,22.5 12.5037575,21.800445 12.5037575,20.9375 L12.5037575,11.25 L8.75,11.25 L8.75,18.1622438 C8.75,18.5074217 8.47017797,18.7872438 8.125,18.7872438 C7.77982203,18.7872438 7.5,18.5074217 7.5,18.1622438 L7.5,11.25 Z",
                                        })
                                    )
                                )
                            );
                        },
                    })
                );
            }
            function _i(e) {
                var n = x({}, void 0 === e ? {} : e);
                return ui(
                    Pi,
                    x({}, n, {
                        name: "amex",
                        render: function () {
                            return ui(
                                "svg",
                                { width: "40", height: "24", viewBox: "0 0 40 24", preserveAspectRatio: "xMinYMin meet", xmlns: "http://www.w3.org/2000/svg" },
                                ui("path", { d: "M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z", fill: "rgb(20, 119, 190)" }),
                                ui("path", {
                                    d: "M6.26 12.32h2.313L7.415 9.66M27.353 9.977h-3.738v1.23h3.666v1.384h-3.675v1.385h3.821v1.005c.623-.77 1.33-1.466 2.025-2.235l.707-.77c-.934-1.004-1.87-2.08-2.804-3.075v1.077z",
                                    fill: "rgb(255, 255, 255)",
                                }),
                                ui("path", {
                                    d:
                                        "M38.25 7h-5.605l-1.328 1.4L30.072 7H16.984l-1.017 2.416L14.877 7h-9.58L1.25 16.5h4.826l.623-1.556h1.4l.623 1.556H29.99l1.327-1.483 1.328 1.483h5.605l-4.36-4.667L38.25 7zm-17.685 8.1h-1.557V9.883L16.673 15.1h-1.33L13.01 9.883l-.084 5.217H9.73l-.623-1.556h-3.27L5.132 15.1H3.42l2.884-6.772h2.42l2.645 6.233V8.33h2.646l2.107 4.51 1.868-4.51h2.575V15.1zm14.727 0h-2.024l-2.024-2.26-2.023 2.26H22.06V8.328H29.53l1.795 2.177 2.024-2.177h2.025L32.26 11.75l3.032 3.35z",
                                    fill: "rgb(255, 255, 255)",
                                })
                            );
                        },
                    })
                );
            }
            function Ri(e) {
                var n = x({}, void 0 === e ? {} : e);
                return ui(
                    Pi,
                    x({}, n, {
                        name: "discover",
                        render: function () {
                            return ui(
                                "svg",
                                { width: "40", height: "24", viewBox: "0 0 40 24", preserveAspectRatio: "xMinYMin meet", xmlns: "http://www.w3.org/2000/svg" },
                                ui("path", { d: "M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z", fill: "rgb(17, 49, 82)" }),
                                ui("path", {
                                    d:
                                        "M 5.498 13.349 C 5.16 13.654 4.722 13.787 4.028 13.787 L 3.738 13.787 L 3.738 10.141 L 4.028 10.141 C 4.722 10.141 5.143 10.265 5.498 10.587 C 5.868 10.917 6.093 11.431 6.093 11.959 C 6.093 12.489 5.869 13.019 5.498 13.349 Z M 4.243 9.206 L 2.666 9.206 L 2.666 14.721 L 4.236 14.721 C 5.069 14.721 5.671 14.524 6.199 14.084 C 6.829 13.564 7.199 12.779 7.199 11.968 C 7.199 10.34 5.985 9.206 4.243 9.206 Z M 7.696 14.721 L 8.77 14.721 L 8.77 9.207 L 7.696 9.207 M 11.393 11.323 C 10.748 11.083 10.559 10.926 10.559 10.628 C 10.559 10.281 10.897 10.018 11.359 10.018 C 11.681 10.018 11.946 10.15 12.226 10.464 L 12.788 9.727 C 12.326 9.322 11.773 9.115 11.17 9.115 C 10.195 9.115 9.452 9.793 9.452 10.695 C 9.452 11.455 9.798 11.845 10.807 12.208 C 11.227 12.356 11.442 12.455 11.55 12.522 C 11.765 12.662 11.872 12.862 11.872 13.092 C 11.872 13.54 11.518 13.872 11.038 13.872 C 10.528 13.872 10.114 13.614 9.868 13.136 L 9.173 13.806 C 9.668 14.532 10.263 14.856 11.08 14.856 C 12.196 14.856 12.98 14.111 12.98 13.044 C 12.98 12.168 12.617 11.771 11.395 11.324 Z M 13.316 11.968 C 13.316 13.588 14.586 14.845 16.223 14.845 C 16.685 14.845 17.081 14.755 17.57 14.525 L 17.57 13.258 C 17.14 13.688 16.76 13.862 16.273 13.862 C 15.191 13.862 14.423 13.077 14.423 11.962 C 14.423 10.902 15.215 10.067 16.223 10.067 C 16.735 10.067 17.123 10.25 17.57 10.687 L 17.57 9.421 C 17.098 9.181 16.71 9.081 16.248 9.081 C 14.621 9.081 13.316 10.364 13.316 11.968 Z M 26.088 12.911 L 24.62 9.206 L 23.446 9.206 L 25.783 14.862 L 26.361 14.862 L 28.741 9.207 L 27.576 9.207 M 29.226 14.721 L 32.272 14.721 L 32.272 13.787 L 30.299 13.787 L 30.299 12.299 L 32.199 12.299 L 32.199 11.365 L 30.299 11.365 L 30.299 10.141 L 32.272 10.141 L 32.272 9.206 L 29.226 9.206 M 34.373 11.745 L 34.059 11.745 L 34.059 10.075 L 34.389 10.075 C 35.059 10.075 35.423 10.355 35.423 10.893 C 35.423 11.447 35.059 11.745 34.373 11.745 Z M 36.528 10.835 C 36.528 9.802 35.818 9.207 34.578 9.207 L 32.986 9.207 L 32.986 14.721 L 34.059 14.721 L 34.059 12.506 L 34.199 12.506 L 35.686 14.721 L 37.006 14.721 L 35.273 12.398 C 36.083 12.233 36.528 11.678 36.528 10.835 Z",
                                    fill: "rgb(255, 255, 255)",
                                }),
                                ui(
                                    "g",
                                    { id: "MarkingBase_1_", transform: "matrix(0.089776, 0, 0, 0.089776, 2.192296, 5.72498)" },
                                    ui(
                                        "linearGradient",
                                        { id: "SVGID_1_", gradientUnits: "userSpaceOnUse", x1: "224.3917", y1: "44.1731", x2: "201.33", y2: "80.2807", gradientTransform: "matrix(1 0 0 -1 0 141.7323)" },
                                        ui("stop", { offset: "0", "stop-color": "#F89F21" }),
                                        ui("stop", { offset: "0.2502", "stop-color": "#F79A23" }),
                                        ui("stop", { offset: "0.5331", "stop-color": "#F78E22" }),
                                        ui("stop", { offset: "0.6196", "stop-color": "#F68721" }),
                                        ui("stop", { offset: "0.7232", "stop-color": "#F48220" }),
                                        ui("stop", { offset: "1", "stop-color": "#F27623" })
                                    ),
                                    ui("circle", { fill: "url(#SVGID_1_)", cx: "207.343", cy: "70.866", r: "33.307" }),
                                    ui(
                                        "linearGradient",
                                        { id: "SVGID_2_", gradientUnits: "userSpaceOnUse", x1: "220.7487", y1: "44.664", x2: "187.0436", y2: "110.5426", gradientTransform: "matrix(1 0 0 -1 0 141.7323)" },
                                        ui("stop", { offset: "0", "stop-color": "#F68721", "stop-opacity": "0" }),
                                        ui("stop", { offset: "0.3587", "stop-color": "#E27027", "stop-opacity": "0.2704" }),
                                        ui("stop", { offset: "0.703", "stop-color": "#D4612C", "stop-opacity": "0.5299" }),
                                        ui("stop", { offset: "0.9816", "stop-color": "#D15D2D", "stop-opacity": "0.74" })
                                    ),
                                    ui("circle", { opacity: "0.65", fill: "url(#SVGID_2_)", cx: "207.343", cy: "70.866", r: "33.307" })
                                ),
                                ui(
                                    "g",
                                    { id: "Orange_1_", "enable-background": "new    ", transform: "matrix(0.469224, 0, 0, 0.469224, 13.785085, 6.199149)" },
                                    ui("g", { id: "Orange" }, ui("g", null, ui("path", { d: "M13,38c20.1,0,40,0,40,0c1.7,0,3-1.3,3-3V18C56,18,51.2,31.8,13,38z", fill: "rgb(255, 129, 38)" })))
                                )
                            );
                        },
                    })
                );
            }
            function Mi(e) {
                var n = x({}, void 0 === e ? {} : e);
                return ui(
                    Pi,
                    x({}, n, {
                        name: "mastercard",
                        render: function () {
                            return ui(
                                "svg",
                                { width: "40", height: "24", viewBox: "0 0 40 24", preserveAspectRatio: "xMinYMin meet", xmlns: "http://www.w3.org/2000/svg" },
                                ui("path", { d: "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z", fill: "rgb(62, 57, 57)" }),
                                ui("path", { fill: "rgb(255, 95, 0)", d: "M 22.205 3.901 L 15.688 3.901 L 15.688 15.589 L 22.205 15.589" }),
                                ui("path", {
                                    d:
                                        "M 16.1 9.747 C 16.1 7.371 17.218 5.265 18.935 3.901 C 17.67 2.912 16.078 2.312 14.342 2.312 C 10.223 2.312 6.892 5.636 6.892 9.746 C 6.892 13.853 10.223 17.178 14.342 17.178 C 16.078 17.178 17.67 16.58 18.935 15.588 C 17.216 14.246 16.099 12.119 16.099 9.745 Z",
                                    fill: "rgb(235, 0, 27)",
                                }),
                                ui("path", {
                                    d:
                                        "M 30.996 9.747 C 30.996 13.854 27.663 17.179 23.547 17.179 C 21.81 17.179 20.216 16.581 18.954 15.589 C 20.691 14.227 21.788 12.12 21.788 9.746 C 21.788 7.37 20.671 5.264 18.954 3.9 C 20.216 2.911 21.81 2.311 23.547 2.311 C 27.663 2.311 30.996 5.657 30.996 9.745 Z",
                                    fill: "rgb(247, 158, 27)",
                                }),
                                ui("path", {
                                    d:
                                        "M 7.167 22.481 L 7.167 20.43 C 7.167 19.641 6.685 19.127 5.857 19.127 C 5.443 19.127 4.993 19.262 4.683 19.71 C 4.44 19.332 4.096 19.127 3.579 19.127 C 3.233 19.127 2.888 19.23 2.612 19.607 L 2.612 19.197 L 1.886 19.197 L 1.886 22.481 L 2.612 22.481 L 2.612 20.668 C 2.612 20.086 2.921 19.812 3.406 19.812 C 3.888 19.812 4.131 20.121 4.131 20.669 L 4.131 22.481 L 4.856 22.481 L 4.856 20.668 C 4.856 20.086 5.204 19.812 5.651 19.812 C 6.137 19.812 6.377 20.121 6.377 20.669 L 6.377 22.481 L 7.171 22.481 Z M 17.909 19.197 L 16.734 19.197 L 16.734 18.204 L 16.007 18.204 L 16.007 19.197 L 15.352 19.197 L 15.352 19.845 L 16.007 19.845 L 16.007 21.351 C 16.007 22.106 16.319 22.551 17.146 22.551 C 17.459 22.551 17.804 22.449 18.044 22.309 L 17.839 21.695 C 17.632 21.831 17.389 21.867 17.216 21.867 C 16.872 21.867 16.734 21.66 16.734 21.319 L 16.734 19.847 L 17.909 19.847 L 17.909 19.198 Z M 24.053 19.127 C 23.639 19.127 23.364 19.332 23.191 19.607 L 23.191 19.197 L 22.465 19.197 L 22.465 22.481 L 23.191 22.481 L 23.191 20.633 C 23.191 20.086 23.434 19.777 23.882 19.777 C 24.018 19.777 24.192 19.812 24.33 19.847 L 24.538 19.162 C 24.401 19.127 24.192 19.127 24.052 19.127 Z M 14.765 19.469 C 14.42 19.229 13.937 19.127 13.418 19.127 C 12.588 19.127 12.036 19.538 12.036 20.188 C 12.036 20.736 12.453 21.044 13.175 21.146 L 13.524 21.181 C 13.903 21.249 14.108 21.351 14.108 21.523 C 14.108 21.765 13.832 21.934 13.35 21.934 C 12.864 21.934 12.484 21.764 12.244 21.592 L 11.898 22.139 C 12.278 22.411 12.794 22.549 13.313 22.549 C 14.28 22.549 14.831 22.105 14.831 21.488 C 14.831 20.908 14.383 20.599 13.692 20.496 L 13.348 20.462 C 13.037 20.428 12.795 20.36 12.795 20.155 C 12.795 19.914 13.038 19.777 13.418 19.777 C 13.83 19.777 14.245 19.949 14.453 20.052 L 14.764 19.469 Z M 34.033 19.127 C 33.618 19.127 33.342 19.332 33.171 19.607 L 33.171 19.197 L 32.445 19.197 L 32.445 22.481 L 33.171 22.481 L 33.171 20.633 C 33.171 20.086 33.414 19.777 33.862 19.777 C 33.998 19.777 34.17 19.812 34.307 19.847 L 34.515 19.162 C 34.38 19.127 34.172 19.127 34.033 19.127 Z M 24.779 20.838 C 24.779 21.834 25.47 22.551 26.54 22.551 C 27.025 22.551 27.369 22.449 27.715 22.173 L 27.369 21.593 C 27.092 21.798 26.816 21.901 26.504 21.901 C 25.919 21.901 25.505 21.49 25.505 20.84 C 25.505 20.226 25.919 19.813 26.507 19.78 C 26.816 19.78 27.092 19.883 27.369 20.089 L 27.715 19.507 C 27.369 19.233 27.024 19.13 26.54 19.13 C 25.47 19.13 24.779 19.85 24.779 20.841 Z M 31.478 20.838 L 31.478 19.198 L 30.75 19.198 L 30.75 19.608 C 30.51 19.3 30.165 19.128 29.717 19.128 C 28.784 19.128 28.058 19.848 28.058 20.84 C 28.058 21.835 28.784 22.552 29.716 22.552 C 30.197 22.552 30.543 22.382 30.748 22.074 L 30.748 22.484 L 31.477 22.484 L 31.477 20.84 Z M 28.818 20.838 C 28.818 20.259 29.196 19.779 29.819 19.779 C 30.406 19.779 30.821 20.224 30.821 20.84 C 30.821 21.424 30.406 21.902 29.819 21.902 C 29.196 21.869 28.818 21.424 28.818 20.841 Z M 20.148 19.128 C 19.183 19.128 18.494 19.813 18.494 20.84 C 18.494 21.869 19.183 22.552 20.185 22.552 C 20.671 22.552 21.154 22.417 21.533 22.108 L 21.188 21.595 C 20.914 21.799 20.565 21.937 20.222 21.937 C 19.772 21.937 19.323 21.732 19.219 21.149 L 21.671 21.149 L 21.671 20.878 C 21.705 19.815 21.083 19.13 20.15 19.13 Z M 20.148 19.748 C 20.6 19.748 20.911 20.019 20.98 20.532 L 19.253 20.532 C 19.321 20.087 19.633 19.748 20.148 19.748 Z M 38.141 20.84 L 38.141 17.898 L 37.412 17.898 L 37.412 19.61 C 37.173 19.302 36.828 19.13 36.38 19.13 C 35.446 19.13 34.721 19.85 34.721 20.841 C 34.721 21.837 35.446 22.554 36.379 22.554 C 36.861 22.554 37.206 22.383 37.41 22.076 L 37.41 22.486 L 38.14 22.486 L 38.14 20.841 Z M 35.481 20.84 C 35.481 20.261 35.861 19.78 36.484 19.78 C 37.069 19.78 37.486 20.226 37.486 20.841 C 37.486 21.426 37.069 21.904 36.484 21.904 C 35.861 21.87 35.481 21.426 35.481 20.843 Z M 11.237 20.84 L 11.237 19.2 L 10.515 19.2 L 10.515 19.61 C 10.272 19.302 9.928 19.13 9.478 19.13 C 8.545 19.13 7.82 19.85 7.82 20.841 C 7.82 21.837 8.545 22.554 9.477 22.554 C 9.96 22.554 10.304 22.383 10.512 22.076 L 10.512 22.486 L 11.236 22.486 L 11.236 20.841 Z M 8.546 20.84 C 8.546 20.261 8.926 19.78 9.548 19.78 C 10.134 19.78 10.55 20.226 10.55 20.841 C 10.55 21.426 10.134 21.904 9.548 21.904 C 8.926 21.87 8.546 21.426 8.546 20.843 Z",
                                    fill: "rgb(255, 255, 255)",
                                })
                            );
                        },
                    })
                );
            }
            function Fi(e) {
                var n = x({}, void 0 === e ? {} : e);
                return ui(
                    Pi,
                    x({}, n, {
                        name: "visa",
                        render: function () {
                            return ui(
                                "svg",
                                { width: "40", height: "24", viewBox: "0 0 40 24", preserveAspectRatio: "xMinYMin meet", xmlns: "http://www.w3.org/2000/svg" },
                                ui("path", { d: "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z", fill: "rgb(33, 86, 154)" }),
                                ui("path", {
                                    d:
                                        "M19.596 7.885l-2.11 9.478H14.93l2.11-9.478h2.554zm10.743 6.12l1.343-3.56.773 3.56H30.34zm2.85 3.358h2.36l-2.063-9.478H31.31c-.492 0-.905.274-1.088.695l-3.832 8.783h2.682l.532-1.415h3.276l.31 1.415zm-6.667-3.094c.01-2.502-3.6-2.64-3.577-3.76.008-.338.345-.7 1.083-.793.365-.045 1.373-.08 2.517.425l.448-2.01c-.615-.214-1.405-.42-2.39-.42-2.523 0-4.3 1.288-4.313 3.133-.016 1.364 1.268 2.125 2.234 2.58.996.464 1.33.762 1.325 1.177-.006.636-.793.918-1.526.928-1.285.02-2.03-.333-2.623-.6l-.462 2.08c.598.262 1.7.49 2.84.502 2.682 0 4.437-1.273 4.445-3.243zM15.948 7.884l-4.138 9.478h-2.7L7.076 9.8c-.123-.466-.23-.637-.606-.834-.615-.32-1.63-.62-2.52-.806l.06-.275h4.345c.554 0 1.052.354 1.178.966l1.076 5.486 2.655-6.45h2.683z",
                                    fill: "rgb(255, 255, 255)",
                                })
                            );
                        },
                    })
                );
            }
            var Ii,
                Di,
                Bi,
                ji,
                Hi,
                qi,
                Wi,
                Ui = ["logoColor"],
                zi = (((Ii = {}).default = { primary: "#333030" }), (Ii.white = { primary: "#ffffff" }), (Ii.black = { primary: "#333030" }), Ii);
            function Zi(e) {
                var n = void 0 === e ? {} : e,
                    t = n.logoColor,
                    r = l(n, Ui),
                    o = Si("card", zi, t).primary;
                return ui(
                    Pi,
                    x({}, r, {
                        name: "",
                        render: function () {
                            return ui(
                                "svg",
                                { width: "24px", height: "18px", viewBox: "0 0 24 18", xmlns: "http://www.w3.org/2000/svg" },
                                ui(
                                    "g",
                                    { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
                                    ui(
                                        "g",
                                        { transform: "translate(-3.000000, -6.000000)", fill: o, "fill-rule": "nonzero" },
                                        ui("path", {
                                            d:
                                                "M8.27521338,12.5122653 C7.93003542,12.5122653 7.65021338,12.2324432 7.65021338,11.8872653 C7.65021338,11.5420873 7.93003542,11.2622653 8.27521338,11.2622653 L24.7879042,11.2622653 C25.5955939,11.2622653 26.25,11.9175905 26.25,12.7255368 L26.25,22.2867284 C26.25,23.0946748 25.5955939,23.75 24.7879042,23.75 L5.21231302,23.75 C4.40462325,23.75 3.75,23.0946748 3.75,22.2867397 L3.75,7.71327152 C3.75,6.90532518 4.40440608,6.25 5.21227212,6.25 L24.7880664,6.25552163 C25.5956079,6.25573147 26.25,6.91099507 26.25,7.71870362 L26.25,9.23577161 C26.25,9.58094958 25.9702675,9.86081168 25.6250895,9.86086112 C25.2799115,9.86091055 25.0000494,9.5811286 25,9.23595063 L24.9997827,7.71879313 C24.9997827,7.60083189 24.9046611,7.50555197 24.7877278,7.50552158 L5.21209583,7.49999998 C5.09515506,7.49999998 5,7.59528868 5,7.71326028 L5.00021718,22.2867284 C5.00021718,22.4047113 5.09537223,22.5 5.21231302,22.5 L24.7879042,22.5 C24.904845,22.5 25,22.4047113 25,22.2867284 L25,12.7255368 C25,12.607554 24.9048449,12.5122653 24.7879042,12.5122653 L8.27521338,12.5122653 Z",
                                            id: "Stroke-1",
                                        })
                                    )
                                )
                            );
                        },
                    })
                );
            }
            function Gi(e) {
                var n = x({}, e);
                return ui(
                    Oi,
                    x({}, n, {
                        name: "credit",
                        render: function () {
                            return ui(
                                "svg",
                                { width: "48px", height: "30px", viewBox: "0 0 48 30", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
                                ui(
                                    "defs",
                                    null,
                                    ui(
                                        "radialGradient",
                                        {
                                            cx: "21.8145957%",
                                            cy: "17.9147256%",
                                            fx: "21.8145957%",
                                            fy: "17.9147256%",
                                            r: "154.485751%",
                                            gradientTransform: "translate(0.218146,0.179147),scale(0.625000,1.000000),rotate(49.902048),scale(1.000000,1.092475),translate(-0.218146,-0.179147)",
                                            id: "radialGradient-1",
                                        },
                                        ui("stop", { "stop-color": "#FFFFFF", offset: "0%" }),
                                        ui("stop", { "stop-color": "#EFF0F4", offset: "100%" })
                                    )
                                ),
                                ui(
                                    "g",
                                    { id: "PPC-Card-art", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
                                    ui(
                                        "g",
                                        { id: "New-PPC-card-art---2", transform: "translate(-49.000000, -452.000000)" },
                                        ui(
                                            "g",
                                            { id: "Cards", transform: "translate(16.000000, 375.000000)" },
                                            ui(
                                                "g",
                                                { id: "PayPal-Credit-Card", transform: "translate(33.000000, 77.000000)" },
                                                ui("rect", { id: "Rectangle", stroke: "#EAECED", fill: "url(#radialGradient-1)", x: "0.5", y: "0.5", width: "47", height: "29", rx: "2" }),
                                                ui(
                                                    "g",
                                                    { id: "Logos/PayPal-Credit/paypal-credit-logo-monotone-transparent", transform: "translate(9.000000, 7.500000)", fill: "#003087", "fill-rule": "nonzero" },
                                                    ui(
                                                        "g",
                                                        { id: "paypal-credit-logo-monotone-transparent", transform: "translate(0.629340, 0.629340)" },
                                                        ui(
                                                            "g",
                                                            { id: "Group", transform: "translate(0.553819, 0.629340)" },
                                                            ui("path", {
                                                                d:
                                                                    "M17.8103299,6.32486979 L15.7335069,6.32486979 C15.6391059,6.32486979 15.5447049,6.41927083 15.5132378,6.51367188 L14.6006944,12.3350694 C14.6006944,12.3350694 14.6006944,12.3350694 14.6006944,12.3665365 C14.6006944,12.4294705 14.6636285,12.4924045 14.7265625,12.4924045 L16.8348524,12.4924045 C18.5340712,12.4924045 20.1703559,11.1393229 20.453559,9.40863715 C20.7052951,7.67795139 19.5095486,6.32486979 17.8103299,6.32486979 Z M18.7858073,9.37717014 C18.5970052,10.5729167 17.6844618,11.1078559 16.7404514,11.1078559 L16.3628472,11.1078559 L16.8977865,7.77235243 C16.8977865,7.7094184 16.9607205,7.67795139 17.0236545,7.67795139 L17.2753906,7.67795139 C18.3138021,7.67795139 18.9431424,8.27582465 18.7858073,9.37717014 Z",
                                                                id: "Shape",
                                                            }),
                                                            ui("path", {
                                                                d:
                                                                    "M13.0273437,7.67795139 L14.5377604,7.67795139 C14.6321615,7.67795139 14.7265625,7.58355035 14.7580295,7.48914931 L14.9153646,6.48220486 C14.9153646,6.48220486 14.9153646,6.45073785 14.9153646,6.45073785 C14.9153646,6.38780382 14.8524306,6.32486979 14.7894965,6.32486979 L11.6427951,6.32486979 C11.5483941,6.32486979 11.4539931,6.41927083 11.422526,6.51367188 L10.5099826,12.3036024 C10.5099826,12.3036024 10.5099826,12.3036024 10.5099826,12.3350694 C10.5099826,12.3980035 10.5729167,12.4609375 10.6358507,12.4609375 L13.7825521,12.4609375 C13.8769531,12.4609375 13.9713542,12.3665365 14.0028212,12.2721354 L14.1601562,11.265191 C14.1601562,11.265191 14.1601562,11.265191 14.1601562,11.233724 C14.1601562,11.1707899 14.0972222,11.1078559 14.0342882,11.1078559 L12.2721354,11.1078559 L12.3980035,10.2267795 C12.4294705,10.1323785 12.4924045,10.0379774 12.6182726,10.0379774 L14.0342882,10.0379774 C14.1286892,10.0379774 14.2230903,9.94357639 14.2545573,9.84917535 L14.4118924,8.8422309 C14.4118924,8.8422309 14.4118924,8.81076389 14.4118924,8.81076389 C14.4118924,8.74782986 14.3489583,8.68489583 14.2860243,8.68489583 L12.6497396,8.68489583 L12.7756076,7.83528646 C12.8385417,7.74088542 12.9329427,7.67795139 13.0273437,7.67795139 Z",
                                                                id: "Path",
                                                            }),
                                                            ui("path", {
                                                                d:
                                                                    "M22.8450521,6.32486979 L21.5863715,6.32486979 C21.4919705,6.32486979 21.3975694,6.41927083 21.3661024,6.51367188 L20.453559,12.3036024 C20.453559,12.3036024 20.453559,12.3350694 20.453559,12.3350694 C20.453559,12.3980035 20.5164931,12.4609375 20.5794271,12.4609375 L21.8381076,12.4609375 C21.9325087,12.4609375 22.0583767,12.3665365 22.0583767,12.2721354 L22.9709201,6.45073785 C22.9709201,6.45073785 22.9709201,6.45073785 22.9709201,6.41927083 C22.9709201,6.35633681 22.9394531,6.32486979 22.8450521,6.32486979 Z",
                                                                id: "Path",
                                                            }),
                                                            ui("path", {
                                                                d:
                                                                    "M8.55902778,6.32486979 L6.32486979,6.32486979 C6.23046875,6.32486979 6.16753472,6.38780382 6.13606771,6.48220486 L5.22352431,12.3350694 C5.22352431,12.3350694 5.22352431,12.3665365 5.22352431,12.3665365 C5.22352431,12.4294705 5.28645833,12.4924045 5.34939236,12.4924045 L6.63953993,12.4924045 C6.73394097,12.4924045 6.796875,12.4294705 6.82834201,12.3350694 L7.17447917,10.1323785 L7.20594618,10.1323785 L8.27582465,12.3980035 C8.30729167,12.4609375 8.37022569,12.4924045 8.43315972,12.4924045 L10.0694444,12.4924045 C10.1009115,12.4924045 10.1009115,12.4924045 10.1323785,12.4609375 C10.1953125,12.4294705 10.2267795,12.3350694 10.1638455,12.2721354 L8.74782986,9.94357639 C9.62890625,9.78624132 10.2267795,9.0625 10.3841146,8.21289062 C10.6043837,6.89127604 9.78624132,6.32486979 8.55902778,6.32486979 Z M8.71636285,8.30729167 C8.62196181,8.96809896 7.99262153,9.0625 7.48914931,9.0625 L7.33181424,9.0625 L7.55208333,7.64648437 C7.55208333,7.58355035 7.61501736,7.52061632 7.67795139,7.52061632 L7.89822049,7.52061632 C8.49609375,7.55208333 8.8422309,7.61501736 8.71636285,8.30729167 Z",
                                                                id: "Shape",
                                                            }),
                                                            ui("path", {
                                                                d:
                                                                    "M27.5651042,6.32486979 L23.6631944,6.32486979 C23.5687934,6.32486979 23.4743924,6.41927083 23.4429253,6.51367188 L23.2855903,7.52061632 C23.2855903,7.52061632 23.2855903,7.52061632 23.2855903,7.55208333 C23.2855903,7.61501736 23.3485243,7.67795139 23.4114583,7.67795139 L24.5757378,7.67795139 L23.8519965,12.3350694 C23.8519965,12.3350694 23.8519965,12.3665365 23.8519965,12.3665365 C23.8519965,12.4294705 23.9149306,12.4924045 23.9778646,12.4924045 L25.2365451,12.4924045 C25.3309462,12.4924045 25.4253472,12.3980035 25.4568142,12.3036024 L26.1805556,7.7094184 L27.3133681,7.7094184 C27.4077691,7.7094184 27.5021701,7.61501736 27.5336372,7.52061632 L27.6909722,6.51367188 C27.6909722,6.51367188 27.6909722,6.51367188 27.6909722,6.48220486 C27.6909722,6.35633681 27.6280382,6.32486979 27.5651042,6.32486979 Z",
                                                                id: "Path",
                                                            }),
                                                            ui("path", {
                                                                d:
                                                                    "M5.31792535,8.05555556 L5.53819444,6.67100694 C5.56966146,6.54513889 5.47526042,6.41927083 5.38085938,6.35633681 C5.00325521,6.23046875 4.59418403,6.13606771 4.18511285,6.13606771 C2.83203125,6.07313368 0.660807292,6.67100694 0.283203125,9.37717014 C0.157335069,10.3526476 0.56640625,12.5868056 3.20963542,12.5868056 C3.65017361,12.5868056 4.02777778,12.4924045 4.53125,12.3350694 C4.62565104,12.3036024 4.68858507,12.2406684 4.68858507,12.1777344 L4.90885417,10.7617188 C4.90885417,10.7302517 4.90885417,10.6987847 4.87738715,10.6673177 C4.84592014,10.6043837 4.7515191,10.6043837 4.68858507,10.6358507 C4.34244792,10.8875868 3.90190972,11.0449219 3.49283854,11.0449219 C2.4858941,11.0449219 1.95095486,10.3526476 2.07682292,9.37717014 C2.23415799,8.43315972 3.02083333,7.67795139 3.96484375,7.67795139 C4.37391493,7.67795139 4.78298611,7.83528646 5.06618924,8.11848958 C5.09765625,8.1499566 5.09765625,8.1499566 5.16059028,8.1499566 C5.22352431,8.18142361 5.28645833,8.11848958 5.31792535,8.05555556 Z",
                                                                id: "Path",
                                                            }),
                                                            ui("path", {
                                                                d:
                                                                    "M11.233724,3.99631076 C11.233724,3.99631076 11.233724,3.99631076 11.233724,3.99631076 L11.9574653,3.99631076 C12.0203993,3.99631076 12.0833333,3.96484375 12.0833333,3.90190972 L12.2406684,2.89496528 C12.2721354,2.80056424 12.3350694,2.73763021 12.4294705,2.73763021 L12.8700087,2.73763021 C13.7825521,2.73763021 14.3174913,2.29709201 14.4433594,1.41601562 C14.5062934,1.03841146 14.4433594,0.723741319 14.2860243,0.534939236 C14.0972222,0.283203125 13.7510851,0.188802083 13.2790799,0.188802083 L11.8945312,0.188802083 C11.8001302,0.188802083 11.7371962,0.251736111 11.7057292,0.346137153 L11.1393229,3.90190972 C11.1393229,3.93337674 11.1707899,3.99631076 11.233724,3.99631076 Z M12.5553385,1.00694444 C12.5553385,0.944010417 12.6182726,0.912543403 12.6497396,0.912543403 L12.7441406,0.912543403 C12.9958767,0.912543403 13.2161458,0.912543403 13.3420139,1.06987847 C13.4049479,1.16427951 13.4364149,1.29014757 13.4049479,1.44748264 C13.3420139,1.95095486 12.9644097,1.95095486 12.5868056,1.95095486 L12.3665365,1.95095486 L12.5553385,1.00694444 Z",
                                                                id: "Shape",
                                                            }),
                                                            ui("path", {
                                                                d:
                                                                    "M1.3530816,3.99631076 C1.3530816,3.99631076 1.3530816,3.99631076 1.3530816,3.99631076 L2.0453559,3.99631076 C2.13975694,3.99631076 2.23415799,3.93337674 2.23415799,3.83897569 L2.39149306,2.89496528 C2.42296007,2.80056424 2.4858941,2.73763021 2.58029514,2.73763021 L3.02083333,2.73763021 C3.93337674,2.73763021 4.46831597,2.29709201 4.59418403,1.41601562 C4.65711806,1.03841146 4.59418403,0.723741319 4.43684896,0.534939236 C4.24804687,0.314670139 3.90190972,0.188802083 3.42990451,0.188802083 L2.0453559,0.188802083 C1.95095486,0.188802083 1.88802083,0.251736111 1.85655382,0.346137153 L1.25868056,3.87044271 C1.25868056,3.93337674 1.29014757,3.99631076 1.3530816,3.99631076 Z M2.67469618,1.00694444 C2.67469618,0.944010417 2.73763021,0.912543403 2.76909722,0.912543403 L2.86349826,0.912543403 C3.11523437,0.912543403 3.33550347,0.912543403 3.46137153,1.06987847 C3.52430556,1.16427951 3.55577257,1.29014757 3.52430556,1.44748264 C3.46137153,1.95095486 3.08376736,1.95095486 2.70616319,1.95095486 L2.51736111,1.95095486 L2.67469618,1.00694444 Z",
                                                                id: "Shape",
                                                            }),
                                                            ui("path", {
                                                                d:
                                                                    "M4.65711806,3.71310764 C4.84592014,3.96484375 5.16059028,4.05924479 5.50672743,4.05924479 C5.85286458,4.05924479 6.16753472,3.93337674 6.41927083,3.68164063 L6.38780382,3.87044271 C6.38780382,3.93337674 6.41927083,3.99631076 6.48220486,3.99631076 C6.48220486,3.99631076 6.48220486,3.99631076 6.51367188,3.99631076 L7.11154514,3.99631076 C7.20594618,3.99631076 7.26888021,3.93337674 7.30034722,3.83897569 L7.64648437,1.57335069 C7.64648437,1.51041667 7.61501736,1.44748264 7.55208333,1.44748264 C7.55208333,1.44748264 7.52061632,1.44748264 7.52061632,1.44748264 L6.85980903,1.44748264 C6.796875,1.44748264 6.76540799,1.47894965 6.76540799,1.54188368 L6.73394097,1.73068576 L6.70247396,1.66775174 C6.54513889,1.44748264 6.23046875,1.38454861 5.91579861,1.38454861 C5.19205729,1.38454861 4.56271701,1.95095486 4.43684896,2.70616319 C4.34244792,3.05230035 4.43684896,3.42990451 4.65711806,3.71310764 Z M5.31792535,2.70616319 C5.38085938,2.32855903 5.69552951,2.07682292 6.07313368,2.07682292 C6.23046875,2.07682292 6.38780382,2.13975694 6.51367188,2.265625 C6.60807292,2.39149306 6.67100694,2.58029514 6.60807292,2.73763021 C6.54513889,3.11523437 6.23046875,3.3984375 5.85286458,3.36697049 C5.56966146,3.3984375 5.31792535,3.1781684 5.28645833,2.89496528 C5.28645833,2.83203125 5.28645833,2.76909722 5.31792535,2.70616319 Z",
                                                                id: "Shape",
                                                            }),
                                                            ui("path", {
                                                                d:
                                                                    "M14.5377604,3.71310764 C14.7265625,3.96484375 15.0412326,4.05924479 15.3873698,4.05924479 C15.7335069,4.05924479 16.0481771,3.93337674 16.2999132,3.68164062 L16.2684462,3.87044271 C16.2684462,3.93337674 16.2999132,3.99631076 16.3628472,3.99631076 C16.3628472,3.99631076 16.3628472,3.99631076 16.3943142,3.99631076 L16.9921875,3.99631076 C17.0865885,3.99631076 17.1495226,3.93337674 17.1809896,3.83897569 L17.5271267,1.57335069 C17.5271267,1.51041667 17.4956597,1.44748264 17.4327257,1.44748264 C17.4327257,1.44748264 17.4012587,1.44748264 17.4012587,1.44748264 L16.7404514,1.44748264 C16.6775174,1.44748264 16.6460503,1.47894965 16.6460503,1.54188368 L16.6145833,1.73068576 L16.5831163,1.66775174 C16.4257813,1.44748264 16.1111111,1.38454861 15.796441,1.38454861 C15.0726997,1.38454861 14.4433594,1.95095486 14.3174913,2.70616319 C14.2230903,3.05230035 14.3174913,3.42990451 14.5377604,3.71310764 Z M15.1671007,2.70616319 C15.2300347,2.32855903 15.5447049,2.07682292 15.922309,2.07682292 C16.0796441,2.07682292 16.2369792,2.13975694 16.3628472,2.265625 C16.4572483,2.39149306 16.5201823,2.58029514 16.4572483,2.73763021 C16.3943142,3.11523437 16.0796441,3.3984375 15.7020399,3.36697049 C15.5447049,3.36697049 15.3873698,3.30403646 15.2615017,3.1781684 C15.1671007,3.05230035 15.1356337,2.86349826 15.1671007,2.70616319 Z",
                                                                id: "Shape",
                                                            }),
                                                            ui("path", {
                                                                d:
                                                                    "M8.71636285,3.74457465 L8.02408854,4.72005208 C7.99262153,4.78298611 7.99262153,4.84592014 8.05555556,4.87738715 C8.08702257,4.90885417 8.08702257,4.90885417 8.11848958,4.90885417 L8.77929687,4.90885417 C8.8422309,4.90885417 8.90516493,4.87738715 8.93663194,4.81445312 L11.1393229,1.60481771 C11.1707899,1.54188368 11.1707899,1.47894965 11.1078559,1.44748264 C11.0763889,1.44748264 11.0763889,1.41601562 11.0449219,1.41601562 L10.3841146,1.41601562 C10.3211806,1.41601562 10.2582465,1.44748264 10.2267795,1.51041667 L9.31423611,2.86349826 L8.93663194,1.57335069 C8.90516493,1.47894965 8.8422309,1.44748264 8.74782986,1.44748264 L8.08702257,1.44748264 C8.02408854,1.44748264 7.96115451,1.51041667 7.96115451,1.57335069 C7.96115451,1.57335069 7.96115451,1.60481771 7.96115451,1.60481771 L8.71636285,3.74457465 Z",
                                                                id: "Path",
                                                            }),
                                                            ui("path", {
                                                                d:
                                                                    "M17.7159288,3.99631076 C17.7159288,3.99631076 17.7159288,3.99631076 17.7159288,3.99631076 L18.3138021,3.99631076 C18.4082031,3.99631076 18.4711372,3.93337674 18.5026042,3.83897569 L19.0690104,0.283203125 C19.0690104,0.220269097 19.0375434,0.157335069 18.9746094,0.157335069 C18.9746094,0.157335069 18.9746094,0.157335069 18.9431424,0.157335069 L18.3138021,0.157335069 C18.2508681,0.157335069 18.219401,0.188802083 18.187934,0.251736111 L17.6215278,3.87044271 C17.5900608,3.93337674 17.6529948,3.99631076 17.7159288,3.99631076 Z",
                                                                id: "Path",
                                                            })
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            );
                        },
                    })
                );
            }
            ((Di = {}).default = { primary: "#003087" }),
                (Di.blue = { primary: "#003087" }),
                (Di.white = { primary: "#ffffff" }),
                (Di.black = { primary: "#333030" }),
                ((Bi = {}).default = { primary: "#c8036f", secondary: "#71706f" }),
                (Bi.white = { primary: "#ffffff", secondary: "#ffffff" }),
                (Bi.black = { primary: "#71706F", secondary: "#C8036F" }),
                ((ji = {}).default = { primary: "#ED1C24", secondary: "#ffffff", tertiary: "#003a7d", quaternary: "#FFFFFF" }),
                (ji.white = { primary: "#FFFFFF", secondary: "#000000", tertiary: "#FFFFFF", quaternary: "#FFFFFF" }),
                (ji.black = { primary: "#ED1C24", secondary: "#FFFFFF", tertiary: "#003a7d", quaternary: "#FFFFFF" }),
                ((Hi = {}).default = { primary: "#000000", secondary: "#cd0067", tertiary: "#ffffff" }),
                (Hi.white = { primary: "#ffffff", secondary: "#ffffff", tertiary: "#ffffff" }),
                (Hi.black = { primary: "#000000", secondary: "#FFFFFF", tertiary: "#CD0067" }),
                ((qi = {}).default = { primary: "#00C0EE", secondary: "#1a4b67" }),
                (qi.white = { primary: "#ffffff", secondary: "#ffffff" }),
                (qi.black = { primary: "#1A4B67", secondary: "#00C0EE" }),
                ((Wi = {}).default = { primary: "#d03238", secondary: "#b3b1b1" }),
                (Wi.white = { primary: "#ffffff", secondary: "#ffffff" }),
                (Wi.black = { primary: "#d03238", secondary: "#b3b1b1" });
            var Vi,
                Yi,
                Ki = ["logoColor"],
                Ji = ["logoColor"],
                Xi =
                    (((Vi = {}).default = { primary: "#003087", secondary: "#009cde" }),
                        (Vi.blue = { primary: "#003087", secondary: "#009cde" }),
                        (Vi.white = { primary: "#ffffff", secondary: "#ffffff" }),
                        (Vi.black = { primary: "#333030", secondary: "#636363" }),
                        (Vi.monochrome = { primary: "#000000", secondary: "#000000" }),
                        Vi);
            function $i(e) {
                var n = e.logoColor,
                    t = void 0 === n ? "default" : n,
                    r = l(e, Ki),
                    o = Si("paypal", Xi, t),
                    i = o.primary,
                    a = o.secondary;
                return ui(
                    Oi,
                    x({}, r, {
                        name: "paypal",
                        alt: "PayPal",
                        role: "presentation",
                        logoColor: t,
                        render: function () {
                            return ui(
                                "svg",
                                { width: "101px", height: "32", viewBox: "0 0 101 32", preserveAspectRatio: "xMinYMin meet", xmlns: "http://www.w3.org/2000/svg" },
                                ui("path", {
                                    fill: i,
                                    d:
                                        "M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z",
                                }),
                                ui("path", {
                                    fill: i,
                                    d:
                                        "M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z",
                                }),
                                ui("path", {
                                    fill: i,
                                    d:
                                        "M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z",
                                }),
                                ui("path", {
                                    fill: a,
                                    d:
                                        "M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z",
                                }),
                                ui("path", {
                                    fill: a,
                                    d:
                                        "M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z",
                                }),
                                ui("path", {
                                    fill: a,
                                    d:
                                        "M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z",
                                })
                            );
                        },
                    })
                );
            }
            var Qi,
                ea,
                na =
                    (((Yi = {}).default = { primary: "#009cde", secondary: "#012169", tertiary: "#003087" }),
                        (Yi.blue = { primary: "#009cde", secondary: "#012169", tertiary: "#003087" }),
                        (Yi.white = { primary: "#ffffff", primaryOpacity: "0.7", secondary: "#ffffff", secondaryOpacity: "0.7", tertiary: "#ffffff" }),
                        (Yi.black = { primary: "#808080", secondary: "#000000", tertiary: "#1a1a1a" }),
                        Yi);
            function ta(e) {
                var n = e.logoColor,
                    t = void 0 === n ? "default" : n,
                    r = l(e, Ji),
                    o = Si("pp", na, t),
                    i = o.primary,
                    a = o.secondary,
                    u = o.tertiary,
                    c = o.primaryOpacity,
                    s = void 0 === c ? "1" : c,
                    d = o.secondaryOpacity,
                    f = void 0 === d ? "1" : d,
                    p = o.tertiaryOpacity,
                    h = void 0 === p ? "1" : p;
                return ui(
                    Oi,
                    x({}, r, {
                        name: "pp",
                        alt: "PP",
                        role: "presentation",
                        logoColor: t,
                        render: function () {
                            return ui(
                                "svg",
                                { width: "24", height: "32", viewBox: "0 0 24 32", preserveAspectRatio: "xMinYMin meet", xmlns: "http://www.w3.org/2000/svg" },
                                ui("path", {
                                    fill: i,
                                    opacity: s,
                                    d:
                                        "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 6.694 26.557 C 6.6 26.957 6.881 27.257 7.255 27.257 L 11.375 27.257 C 11.844 27.257 12.311 26.957 12.405 26.457 L 12.405 26.157 L 13.247 20.957 L 13.247 20.757 C 13.341 20.257 13.809 19.857 14.277 19.857 L 14.84 19.857 C 18.864 19.857 21.954 18.157 22.89 13.157 C 23.358 11.057 23.172 9.357 22.048 8.157 C 21.767 7.757 21.298 7.457 20.924 7.157 L 20.924 7.157",
                                }),
                                ui("path", {
                                    fill: a,
                                    opacity: f,
                                    d:
                                        "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 8.192 16.357 C 8.286 15.757 8.754 15.357 9.315 15.357 L 11.655 15.357 C 16.243 15.357 19.801 13.357 20.924 7.757 C 20.831 7.457 20.924 7.357 20.924 7.157",
                                }),
                                ui("path", {
                                    fill: u,
                                    opacity: h,
                                    d:
                                        "M 9.504 7.157 C 9.596 6.857 9.784 6.557 10.065 6.357 C 10.251 6.357 10.345 6.257 10.532 6.257 L 16.711 6.257 C 17.461 6.257 18.208 6.357 18.772 6.457 C 18.958 6.457 19.146 6.457 19.333 6.557 C 19.52 6.657 19.707 6.657 19.801 6.757 C 19.894 6.757 19.987 6.757 20.082 6.757 C 20.362 6.857 20.643 7.057 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.257 C 18.677 0.857 16.525 0.257 13.809 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.657 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 9.504 7.157 Z",
                                })
                            );
                        },
                    })
                );
            }
            function ra(e) {
                var n = x({}, e);
                return ui(
                    Oi,
                    x({}, n, {
                        name: "pp",
                        render: function () {
                            return ui(
                                "svg",
                                { width: "40px", height: "25px", viewBox: "0 0 40 25", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
                                ui("title", null, "Group 53"),
                                ui(
                                    "defs",
                                    null,
                                    ui(
                                        "radialGradient",
                                        {
                                            cx: "21.8145957%",
                                            cy: "17.9147256%",
                                            fx: "21.8145957%",
                                            fy: "17.9147256%",
                                            r: "154.485751%",
                                            gradientTransform: "translate(0.218146,0.179147),scale(0.625000,1.000000),rotate(49.902048),scale(1.000000,1.092475),translate(-0.218146,-0.179147)",
                                            id: "radialGradient-1",
                                        },
                                        ui("stop", { "stop-color": "#FFFFFF", offset: "0%" }),
                                        ui("stop", { "stop-color": "#EFF0F4", offset: "100%" })
                                    )
                                ),
                                ui(
                                    "g",
                                    { id: "Page-1", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
                                    ui(
                                        "g",
                                        { id: "Group-53", transform: "translate(0.410281, 0.000000)" },
                                        ui("rect", { id: "Rectangle", stroke: "#EAECED", fill: "url(#radialGradient-1)", x: "0.5", y: "0.5", width: "38", height: "23.375", rx: "2" }),
                                        ui(
                                            "g",
                                            { id: "Group", transform: "translate(10.968750, 4.875000)" },
                                            ui(
                                                "g",
                                                { id: "paypal-mark-color", transform: "translate(1.650391, 0.660156)" },
                                                ui("path", {
                                                    d:
                                                        "M11.1896484,3.696875 C11.3876953,2.57460938 11.1896484,1.78242188 10.5625,1.08925781 C9.93535156,0.330078125 8.7140625,0 7.1296875,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054687 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L3.06972656,14.1273438 C3.03671875,14.3583984 3.20175781,14.5234375 3.39980469,14.5234375 L5.74335937,14.5234375 C6.04042969,14.5234375 6.27148437,14.2923828 6.30449219,14.0613281 L6.3375,13.9623047 L6.76660156,11.1896484 L6.79960938,11.0576172 C6.83261719,10.7935547 7.09667969,10.5955078 7.36074219,10.5955078 L7.72382813,10.5955078 C10.0013672,10.5955078 11.7837891,9.67128906 12.3119141,6.99765625 C12.5429687,5.90839844 12.4109375,4.95117188 11.8498047,4.29101563 C11.6847656,3.99394531 11.4537109,3.82890625 11.1896484,3.696875",
                                                    id: "Fill-8",
                                                    fill: "#009CDE",
                                                }),
                                                ui("path", {
                                                    d:
                                                        "M11.1896484,3.696875 C11.3876953,2.57460937 11.1896484,1.78242188 10.5625,1.08925781 C9.93535156,0.330078125 8.7140625,0 7.1296875,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054688 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L3.9609375,8.48300781 L3.92792969,8.61503906 C3.99394531,8.28496094 4.29101562,8.05390625 4.58808594,8.05390625 L5.90839844,8.05390625 C8.51601562,8.05390625 10.5294922,6.99765625 11.1566406,3.9609375 C11.1566406,3.86191406 11.1896484,3.76289063 11.1896484,3.696875",
                                                    id: "Fill-9",
                                                    fill: "#012169",
                                                }),
                                                ui("path", {
                                                    d:
                                                        "M4.753125,3.696875 C4.78613281,3.49882813 4.88515625,3.36679688 5.08320312,3.26777344 C5.14921875,3.23476563 5.21523438,3.20175781 5.34726562,3.20175781 L8.87910156,3.20175781 C9.27519531,3.23476563 9.67128906,3.26777344 10.0673828,3.30078125 C10.1664062,3.30078125 10.2654297,3.33378906 10.3644531,3.36679688 C10.4634766,3.39980469 10.5625,3.39980469 10.6615234,3.4328125 C10.6945312,3.4328125 10.7275391,3.46582031 10.7935547,3.46582031 C10.9916016,3.53183594 11.1236328,3.56484375 11.2556641,3.696875 C11.4537109,2.57460937 11.2556641,1.78242187 10.6285156,1.08925781 C9.96835937,0.330078125 8.74707031,0 7.16269531,0 L2.67363281,0 C2.34355469,0 2.07949219,0.231054688 2.01347656,0.561132813 L0.13203125,12.4769531 C0.0990234375,12.7080078 0.2640625,12.9060547 0.495117187,12.9060547 L3.26777344,12.9060547 L4.753125,3.696875",
                                                    id: "Fill-10",
                                                    fill: "#003087",
                                                })
                                            )
                                        )
                                    )
                                )
                            );
                        },
                    })
                );
            }
            ((Qi = {}).default = { main: "#005DA0", card: "#AEB1BC" }),
                (Qi.white = { main: "#FFFFFF", card: "#FFFFFF" }),
                (Qi.black = { main: "#333030", card: "#333030" }),
                ((ea = {}).default = { primary: "#FFFFFF", secondary: "#EB6F93" }),
                (ea.white = { primary: "#FFFFFF", secondary: "#2C2E2F" }),
                (ea.black = { primary: "#FFFFFF", secondary: "#EB6F93" });
            var oa,
                ia,
                aa,
                ua,
                la,
                ca = ["logoColor"],
                sa = (((oa = {}).default = { primary: "#3D93CE" }), (oa.blue = { primary: "#3D93CE" }), (oa.white = { primary: "#ffffff" }), (oa.black = { primary: "#333030" }), oa);
            function da(e) {
                var n = e.logoColor,
                    t = void 0 === n ? "default" : n,
                    r = l(e, ca),
                    o = Si("sofort", sa, t).primary;
                return ui(
                    Oi,
                    x({}, r, {
                        name: "venmo",
                        logoColor: t,
                        render: function () {
                            return ui(
                                "svg",
                                { width: "101", height: "32", viewBox: "0 0 101 32", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMinYMin meet" },
                                ui(
                                    "g",
                                    { id: "Page-1", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
                                    ui(
                                        "g",
                                        { id: "Blue", fill: o },
                                        ui(
                                            "g",
                                            { id: "Logo", transform: "translate(0.000000, 6.000000)" },
                                            ui("path", {
                                                d:
                                                    "M16.6660484,0.18 C17.3466626,1.3390991 17.6535069,2.53297297 17.6535069,4.04108108 C17.6535069,8.85117117 13.671346,15.0998198 10.439346,19.4875676 L3.05725952,19.4875676 L0.0966314879,1.23315315 L6.56045675,0.60036036 L8.12578201,13.5895495 C9.58835986,11.1326126 11.3932543,7.27153153 11.3932543,4.6390991 C11.3932543,3.1981982 11.1538599,2.21675676 10.7797405,1.40864865 L16.6660484,0.18 Z M24.9071592,11.6938739 C24.9071592,13.8367568 26.062718,14.6774775 27.5946678,14.6774775 C29.2629152,14.6774775 30.860218,14.2571171 32.9363097,13.1691892 L32.154346,18.6445045 C30.6915934,19.3814414 28.4119291,19.8731532 26.1991903,19.8731532 C20.5863512,19.8731532 18.5775346,16.3632432 18.5775346,11.9753153 C18.5775346,6.28810811 21.8451817,0.249369369 28.5819516,0.249369369 C32.2909931,0.249369369 34.3649879,2.39207207 34.3649879,5.37567568 C34.3653374,10.1855856 28.3783789,11.6590991 24.9071592,11.6938739 Z M25.0434567,8.2181982 C26.2329152,8.2181982 29.2274429,7.65711712 29.2274429,5.90216216 C29.2274429,5.05945946 28.6495761,4.6390991 27.9686125,4.6390991 C26.7772318,4.6390991 25.2138287,6.11225225 25.0434567,8.2181982 Z M53.0187093,4.4636036 C53.0187093,5.16558559 52.9154377,6.18378378 52.8126903,6.84918919 L50.8730709,19.4873874 L44.5790934,19.4873874 L46.3483408,7.90216216 C46.381891,7.58792793 46.4849879,6.95531532 46.4849879,6.60432432 C46.4849879,5.76162162 45.9743962,5.55135135 45.3605329,5.55135135 C44.5451938,5.55135135 43.7279325,5.93711712 43.1836159,6.21873874 L41.1768962,19.4875676 L34.8474464,19.4875676 L37.7390519,0.565945946 L43.2171661,0.565945946 L43.2865381,2.07621622 C44.5789187,1.19873874 46.2807163,0.24972973 48.6952803,0.24972973 C51.8942543,0.249369369 53.0187093,1.93495495 53.0187093,4.4636036 Z M71.7037093,2.32072072 C73.5063322,0.988108108 75.2084792,0.249369369 77.5554187,0.249369369 C80.7872439,0.249369369 81.9113495,1.93495495 81.9113495,4.4636036 C81.9113495,5.16558559 81.8084273,6.18378378 81.7056799,6.84918919 L79.7683322,19.4873874 L73.4726073,19.4873874 L75.2755796,7.6572973 C75.3087803,7.34108108 75.3785017,6.95531532 75.3785017,6.71063063 C75.3785017,5.7618018 74.8677353,5.55135135 74.2540467,5.55135135 C73.4722578,5.55135135 72.6908183,5.90234234 72.1106799,6.21873874 L70.1043097,19.4875676 L63.8101574,19.4875676 L65.6131298,7.65747748 C65.6463304,7.34126126 65.713955,6.9554955 65.713955,6.71081081 C65.713955,5.76198198 65.2030138,5.55153153 64.5914221,5.55153153 C63.7743356,5.55153153 62.9588218,5.9372973 62.4145052,6.21891892 L60.4062128,19.4877477 L54.0788599,19.4877477 L56.9701159,0.566126126 L62.3813045,0.566126126 L62.551327,2.14576577 C63.8101574,1.1990991 65.5105571,0.25009009 67.7900467,0.25009009 C69.7637405,0.249369369 71.0559464,1.12702703 71.7037093,2.32072072 Z M83.55059,11.7998198 C83.55059,5.83279279 86.6120433,0.249369369 93.6558322,0.249369369 C98.9633997,0.249369369 100.903543,3.47981982 100.903543,7.93873874 C100.903543,13.8365766 97.8751159,19.9443243 90.6614792,19.9443243 C85.3196626,19.9443243 83.55059,16.3281081 83.55059,11.7998198 Z M94.4374464,7.83279279 C94.4374464,6.28810811 94.0628028,5.23495495 92.9409689,5.23495495 C90.4570329,5.23495495 89.9469654,9.76306306 89.9469654,12.0794595 C89.9469654,13.8367568 90.4238322,14.9243243 91.5453166,14.9243243 C93.8931298,14.9243243 94.4374464,10.149009 94.4374464,7.83279279 Z",
                                            })
                                        )
                                    )
                                )
                            );
                        },
                    })
                );
            }
            ((ia = {}).default = { primary: "#ffffff" }),
                (ia.blue = { primary: "#003087" }),
                (ia.white = { primary: "#ffffff" }),
                (ia.black = { primary: "#333030" }),
                ((aa = {}).default = { primary: "#1AAD19", secondary: "#4D4D4D" }),
                (aa.white = { primary: "#FFFFFF", secondary: "#FFFFFF" }),
                (aa.black = { primary: "#333030", secondary: "#333030" }),
                ((ua = {}).default = { primary: "#00A599" }),
                (ua.white = { primary: "#FFFFFF" }),
                (ua.black = { primary: "#00A599" }),
                ((la = {}).default = { primary: "#A6d71c", secondary: "#3C932A", tertiary: "#6CC62E", quaternary: "#278D30" }),
                (la.white = { primary: "#FFFFFF", secondary: "#FFFFFF", tertiary: "#000000", quaternary: "#FFFFFF" }),
                (la.black = { primary: "#333030", secondary: "#333030", tertiary: "#ffffff", quaternary: "#333030" });
            var fa,
                pa,
                ha,
                ma,
                ga,
                ya,
                va,
                wa,
                ba = ["logoColor"],
                Ca =
                    (((fa = {}).default = { primary: "#FFFFFF", secondary: "#CACCC8", tertiary: "#2D59A1", quaternary: "#1F3364", quinary: "#4E4E4E", senary: "#1B4482" }),
                        (fa.white = { primary: "#FFFFFF", secondary: "#CACCC8", tertiary: "#2D59A1", quaternary: "#1F3364", quinary: "#4E4E4E", senary: "#1B4482" }),
                        (fa.black = { primary: "#000000", secondary: "#000000", tertiary: "#FFFFFF", quaternary: "#FFFFFF", quinary: "#000000", senary: "#000000" }),
                        fa);
            function Ea(e) {
                var n,
                    t = e.context,
                    r = e.close,
                    o = e.focus,
                    i = e.event,
                    a = e.frame,
                    u = e.prerenderFrame,
                    l = e.content,
                    c = void 0 === l ? {} : l,
                    d = e.autoResize,
                    f = e.hideCloseButton,
                    p = e.nonce,
                    h = e.fullScreen,
                    m = void 0 !== h && h,
                    y = "paypal-overlay-" + xe(),
                    w = function (e) {
                        return function (n) {
                            i.on("zoid-display", function () {
                                return In(n, "show-" + e, Re);
                            }),
                                i.on("zoid-close", function () {
                                    return In(n, "hide-" + e, Re);
                                });
                        };
                    };
                return (
                    a &&
                    u &&
                    (a.classList.add("component-frame"),
                        u.classList.add("prerender-frame"),
                        u.classList.add("visible"),
                        a.classList.add("invisible"),
                        i.on("zoid-rendered", function () {
                            u.classList.remove("visible"),
                                u.classList.add("invisible"),
                                a.classList.remove("invisible"),
                                a.classList.add("visible"),
                                setTimeout(function () {
                                    jn(u);
                                }, 1);
                        }),
                        (n = ui(
                            "div",
                            {
                                class: "outlet",
                                onRender: function (e) {
                                    w("component")(e),
                                    d &&
                                    (function (e) {
                                        i.on("zoid-resize", function (n) {
                                            var t = n.width,
                                                r = n.height;
                                            "number" == typeof t && (e.style.width = tt(t)), "number" == typeof r && (e.style.height = tt(r));
                                        });
                                    })(e);
                                },
                            },
                            ui("node", { el: a }),
                            ui("node", { el: u })
                        ))),
                        ui(
                            "div",
                            { id: y, onRender: w("container"), class: "paypal-checkout-sandbox" },
                            ui(
                                "style",
                                { nonce: p },
                                (function (e) {
                                    var n = e.uid;
                                    return (
                                        "\n        #" +
                                        n +
                                        ".paypal-checkout-sandbox {\n            display: block;\n            position: fixed;\n            top: 0;\n            left: 0;\n\n            width: 100%;\n            height: 100%;\n            width: 100vw;\n            height: 100vh;\n            max-width: 100%;\n            max-height: 100%;\n            min-width: 100%;\n            min-height: 100%;\n\n            z-index: 2147483647;\n\n            animation-duration: 0.3s;\n            animation-iteration-count: 1;\n            animation-fill-mode: forwards !important;\n            opacity: 0;\n        }\n\n        #" +
                                        n +
                                        ".paypal-checkout-sandbox .paypal-checkout-sandbox-iframe {\n            display: block;\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        #" +
                                        n +
                                        ".paypal-checkout-sandbox .paypal-checkout-sandbox-iframe-full {\n            border: 0;\n            height: 100%;\n            width: 100vw;\n        }\n\n        @keyframes show-container {\n            from {\n                opacity: 0;\n            }\n\n            to {\n                opacity: 1;\n            }\n        }\n\n        @keyframes hide-container {\n            from {\n                opacity: 1;\n            }\n\n            50% {\n                opacity: 1;\n            }\n\n            to {\n                opacity: 0;\n            }\n        }\n    "
                                    );
                                })({ uid: y })
                            ),
                            ui(
                                "iframe",
                                { title: "PayPal Checkout Overlay", name: "__paypal_checkout_sandbox_" + y + "__", scrolling: "no", class: "paypal-checkout-sandbox-iframe" + (m ? "-full" : "") },
                                ui(
                                    "html",
                                    null,
                                    ui(
                                        "body",
                                        null,
                                        ui(
                                            "div",
                                            {
                                                id: y,
                                                onClick: function (e) {
                                                    var n;
                                                    e.preventDefault(),
                                                        e.stopPropagation(),
                                                    v() &&
                                                    (g()
                                                        ? window.alert("Please switch tabs to reactivate the PayPal window")
                                                        : (void 0 === n && (n = s()), /Firefox/i.test(n) ? window.alert('Don\'t see the popup window?\n\nSelect "Window" in your toolbar to find "Log in to your PayPal account"') : o()));
                                                },
                                                class: "paypal-overlay-context-" + t + " paypal-checkout-overlay",
                                            },
                                            !f &&
                                            ui("a", {
                                                href: "#",
                                                class: "paypal-checkout-close",
                                                onClick: function (e) {
                                                    e.preventDefault(), e.stopPropagation(), r();
                                                },
                                                "aria-label": "close",
                                                role: "button",
                                            }),
                                            !m &&
                                            ui(
                                                "div",
                                                { class: "paypal-checkout-modal" },
                                                ui("div", { class: "paypal-checkout-logo" }, ui(ta, { logoColor: "white" }), ui($i, { logoColor: "white" })),
                                                c.windowMessage && ui("div", { class: "paypal-checkout-message" }, c.windowMessage),
                                                c.continueMessage && ui("div", { class: "paypal-checkout-continue" }, ui("a", { onClick: o, href: "#" }, c.continueMessage)),
                                                ui("div", { class: "paypal-checkout-loader" }, ui("div", { class: "paypal-spinner" }))
                                            ),
                                            ui("div", { class: m ? "paypal-checkout-iframe-container-full" : "paypal-checkout-iframe-container" }, n),
                                            ui(
                                                "style",
                                                { nonce: p },
                                                (function (e) {
                                                    var n = e.uid;
                                                    return (
                                                        "\n        #" +
                                                        n +
                                                        " {\n            position: absolute;\n            z-index: 2147483647;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n\n            transform: translate3d(0, 0, 0);\n\n            background-color: black;\n            background-color: rgba(0, 0, 0, 0.8);\n            background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n\n            color: #fff;\n        }\n\n        #" +
                                                        n +
                                                        " a {\n            color: #fff;\n        }\n\n        #" +
                                                        n +
                                                        " .paypal-checkout-close:before,\n        #" +
                                                        n +
                                                        " .paypal-checkout-close:after {\n            background-color: #fff;\n        }\n\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.POPUP +
                                                        " {\n            cursor: pointer;\n        }\n\n        #" +
                                                        n +
                                                        " a {\n            text-decoration: none;\n        }\n\n        #" +
                                                        n +
                                                        ' .paypal-checkout-modal {\n            font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;\n            font-size: 14px;\n            text-align: center;\n\n            box-sizing: border-box;\n            max-width: 350px;\n            top: 50%;\n            left: 50%;\n            position: absolute;\n            transform: translateX(-50%) translateY(-50%);\n            cursor: pointer;\n            text-align: center;\n        }\n\n        #' +
                                                        n +
                                                        ".paypal-overlay-loading .paypal-checkout-message, #" +
                                                        n +
                                                        ".paypal-overlay-loading .paypal-checkout-continue {\n            display: none;\n        }\n\n        .paypal-checkout-loader {\n            display: none;\n        }\n\n        #" +
                                                        n +
                                                        ".paypal-overlay-loading .paypal-checkout-loader {\n            display: block;\n        }\n\n        #" +
                                                        n +
                                                        " .paypal-checkout-modal .paypal-checkout-logo {\n            cursor: pointer;\n            margin-bottom: 30px;\n            display: inline-block;\n        }\n\n        #" +
                                                        n +
                                                        " .paypal-checkout-modal .paypal-checkout-logo img {\n            height: 36px;\n        }\n\n        #" +
                                                        n +
                                                        " .paypal-checkout-modal .paypal-checkout-logo img.paypal-checkout-logo-pp {\n            margin-right: 10px;\n        }\n\n        #" +
                                                        n +
                                                        " .paypal-checkout-modal .paypal-checkout-message {\n            font-size: 15px;\n            line-height: 1.5;\n            padding: 10px 0;\n        }\n\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-message, #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-continue {\n            display: none;\n        }\n\n        #" +
                                                        n +
                                                        " .paypal-checkout-modal .paypal-checkout-continue {\n            font-size: 15px;\n            line-height: 1.35;\n            padding: 10px 0;\n            font-weight: bold;\n        }\n\n        #" +
                                                        n +
                                                        " .paypal-checkout-modal .paypal-checkout-continue a {\n            border-bottom: 1px solid white;\n        }\n\n        #" +
                                                        n +
                                                        " .paypal-checkout-close {\n            position: absolute;\n            right: 16px;\n            top: 16px;\n            width: 16px;\n            height: 16px;\n            opacity: 0.6;\n        }\n\n        #" +
                                                        n +
                                                        ".paypal-overlay-loading .paypal-checkout-close {\n            display: none;\n        }\n\n        #" +
                                                        n +
                                                        " .paypal-checkout-close:hover {\n            opacity: 1;\n        }\n\n        #" +
                                                        n +
                                                        " .paypal-checkout-close:before, .paypal-checkout-close:after {\n            position: absolute;\n            left: 8px;\n            content: ' ';\n            height: 16px;\n            width: 2px;\n        }\n\n        #" +
                                                        n +
                                                        " .paypal-checkout-close:before {\n            transform: rotate(45deg);\n        }\n\n        #" +
                                                        n +
                                                        " .paypal-checkout-close:after {\n            transform: rotate(-45deg);\n        }\n\n        #" +
                                                        n +
                                                        " .paypal-checkout-iframe-container {\n            display: none;\n        }\n\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-iframe-container,\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-iframe-container > .outlet,\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-iframe-container > .outlet > iframe {\n            max-height: 95vh;\n            max-width: 95vw;\n        }\n\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-iframe-container-full,\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-iframe-container-full > .outlet,\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-iframe-container-full > .outlet > iframe {\n            height: 100vh;\n            max-width: 100vw;\n            width: 100vw;\n        }\n\n        @media screen and (max-width: 470px) {\n            #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-iframe-container,\n            #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-iframe-container > .outlet,\n            #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-iframe-container > .outlet > iframe {\n                max-height: 85vh;\n            }\n            #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-iframe-container-full,\n            #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-iframe-container-full > .outlet,\n            #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-iframe-container-full > .outlet > iframe {\n                height: 100vh;\n            }\n        }\n\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-iframe-container {\n\n            display: block;\n\n            position: absolute;\n\n            top: 50%;\n            left: 50%;\n\n            min-width: 450px;\n\n            transform: translate(-50%, -50%);\n            transform: translate3d(-50%, -50%, 0);\n\n            border-radius: 10px;\n            overflow: hidden;\n        }\n\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .outlet {\n\n            position: relative;\n\n            transition: all 0.3s ease;\n            animation-duration: 0.3s;\n            animation-fill-mode: forwards !important;\n\n            min-width: 450px;\n            max-width: 450px;\n            width: 450px;\n            height: 535px;\n\n            background-color: white;\n\n            overflow: auto;\n\n            opacity: 0;\n            transform: scale3d(.3, .3, .3);\n\n            -webkit-overflow-scrolling: touch;\n        }\n\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .outlet > iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            transition: opacity .4s ease-in-out;\n        }\n\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .outlet > iframe.component-frame {\n            z-index: 100;\n        }\n\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .outlet > iframe.prerender-frame {\n            z-index: 200;\n        }\n\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .outlet > iframe.visible {\n            opacity: 1;\n            z-index: 200;\n        }\n\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .outlet > iframe.invisible {\n            opacity: 0;\n            z-index: 100;\n        }\n\n        @media screen and (max-width: 470px) {\n\n            #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .paypal-checkout-iframe-container,\n            #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .outlet {\n                min-width: 100%;\n                min-width: calc(100% - 20px);\n\n                max-width: 100%;\n                max-width: calc(100% - 20px);\n            }\n        }\n\n        #" +
                                                        n +
                                                        ".paypal-overlay-context-" +
                                                        vo.IFRAME +
                                                        " .outlet iframe {\n            width: 1px;\n            min-width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-component {\n            from {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n\n            to {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n        }\n\n        @keyframes hide-component {\n            from {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n\n            to {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n        }\n\n        .paypal-spinner {\n            height: 30px;\n            width: 30px;\n            display: inline-block;\n            box-sizing: content-box;\n            opacity: 1;\n            filter: alpha(opacity=100);\n            animation: rotation .7s infinite linear;\n            border-left: 8px solid rgba(0, 0, 0, .2);\n            border-right: 8px solid rgba(0, 0, 0, .2);\n            border-bottom: 8px solid rgba(0, 0, 0, .2);\n            border-top: 8px solid #fff;\n            border-radius: 100%\n        }\n\n        @keyframes rotation {\n            from {\n                transform: rotate(0deg)\n            }\n            to {\n                transform: rotate(359deg)\n            }\n        }\n    "
                                                    );
                                                })({ uid: y })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                );
            }
            ((pa = {}).default = { primary: "#4D4D4F", secondary: "#000000", tertiary: "#FF0000", quaternary: "#E83E49", quinary: "#FF00FF", senary: "#FFFFFF" }),
                (pa.white = { primary: "#FFFFFF", secondary: "#FFFFFF", tertiary: "#000000", quaternary: "#000000", quinary: "#000000", senary: "#000000" }),
                (pa.black = { primary: "#4D4D4F", secondary: "#000000", tertiary: "#FF0000", quaternary: "#E83E49", quinary: "#FF00FF", senary: "#FFFFFF" }),
                ((ha = {}).default = { primary: "#020202", secondary: "#64CC07" }),
                (ha.white = { primary: "#FFFFFF", secondary: "#FFFFFF" }),
                (ha.black = { primary: "#000000", secondary: "#000000" }),
                ((ma = {}).default = { primary: "#EC1D24", secondary: "#EDA42D", tertiary: "#FEFEFE" }),
                (ma.white = { primary: "#EC1D24", secondary: "#EDA42D", tertiary: "#FEFEFE" }),
                (ma.black = { primary: "#EC1D24", secondary: "#EDA42D", tertiary: "#FEFEFE" }),
                ((ga = {}).default = { primary: "#1A1919", secondary: "#FFFFFE" }),
                (ga.white = { primary: "#1A1919", secondary: "#FFFFFE" }),
                (ga.black = { primary: "#1A1919", secondary: "#FFFFFE" }),
                ((ya = {}).default = { primary: "#004A91", secondary: "#ED1921" }),
                (ya.white = { primary: "#004A91", secondary: "#ED1921" }),
                (ya.black = { primary: "#004A91", secondary: "#ED1921" }),
                ((va = {}).default = { primary: "#2D3277", secondary: "#FFFFFF", tertiary: "#009EE3", quaternary: "#009EE3" }),
                (va.white = { primary: "#FFFFFF", secondary: "#000000", tertiary: "#FFFFFF", quaternary: "#000000" }),
                (va.black = { primary: "#2D3277", secondary: "#FFFFFF", tertiary: "#009EE3", quaternary: "#009EE3" }),
                ((wa = {}).default = { primary: "#373535", secondary: "#1866AB" }),
                (wa.white = { primary: "#ffffff", secondary: "#ffffff" }),
                (wa.black = { primary: "#373535", secondary: "#1866AB" });
            function La() {
                return "https://www.sandbox.paypal.com/webapps/helios";
            }
            function xa() {
                return _e(xa, function () {
                    var e = Wo({
                        tag: "three-domain-secure",
                        url: La,
                        attributes: { iframe: { scrolling: "no" } },
                        containerTemplate: function (e) {
                            var n = e.doc,
                                t = e.props;
                            return ui(Ea, { context: e.context, close: e.close, focus: e.focus, event: e.event, frame: e.frame, prerenderFrame: e.prerenderFrame, content: t.content, nonce: t.nonce }).render(mi({ doc: n }));
                        },
                        props: {
                            action: {
                                type: "string",
                                queryParam: !0,
                                value: function () {
                                    return "verify";
                                },
                            },
                            xcomponent: {
                                type: "string",
                                queryParam: !0,
                                value: function () {
                                    return "1";
                                },
                            },
                            flow: {
                                type: "string",
                                queryParam: !0,
                                value: function () {
                                    return "3ds";
                                },
                            },
                            createOrder: {
                                type: "function",
                                queryParam: "cart_id",
                                queryValue: function (e) {
                                    return R.try(e.value);
                                },
                            },
                            clientID: { type: "string", value: Tt, queryParam: !0 },
                            onSuccess: {
                                type: "function",
                                alias: "onContingencyResult",
                                decorate: function (e) {
                                    var n = e.value,
                                        t = e.onError;
                                    return function (e, r) {
                                        return e || (r && !r.success) ? t(e) : n(!0);
                                    };
                                },
                            },
                            sdkMeta: { type: "string", queryParam: !0, sendToChild: !1, value: rr },
                            content: { type: "object", required: !1 },
                            userType: { type: "string", required: !1 },
                            nonce: { type: "string", default: Zt },
                        },
                    });
                    return e.isChild() && (window.xchild = { props: e.xprops, close: Re }), e;
                });
            }
            function Oa(e) {
                return ui(
                    "div",
                    { class: "preloader spinner" },
                    ui("style", {
                        nonce: e.nonce,
                        innerHTML:
                            "\n\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n\n    .spinner .spinWrap {\n        width: 200px;\n        height: 100px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        margin-top: -50px\n    }\n\n    .spinner .loader,\n    .spinner .spinnerImage {\n        height: 100px;\n        width: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        opacity: 1;\n        filter: alpha(opacity=100)\n    }\n\n    .spinner .spinnerImage {\n        margin: 28px 0 0 -25px;\n        background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n    }\n\n    .spinner .loader {\n        margin: 0 0 0 -55px;\n        background-color: transparent;\n        animation: rotation .7s infinite linear;\n        border-left: 5px solid #cbcbca;\n        border-right: 5px solid #cbcbca;\n        border-bottom: 5px solid #cbcbca;\n        border-top: 5px solid #2380be;\n        border-radius: 100%\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n",
                    }),
                    ui("div", { class: "spinWrap" }, ui("p", { class: "spinnerImage" }), ui("p", { class: "loader" }))
                );
            }
            function Pa(e, n) {
                var t = e.nonce;
                return ui("html", null, ui("head", null, ui("title", null, "PayPal"), ui("meta", { name: "viewport", content: "width=device-width, initial-scale=1" })), ui("body", null, ui(Oa, { nonce: t }), n));
            }
            var Sa = {
                ar: { windowMessage: "لا ترى متصفح PayPal الآمن؟ سنساعدك في إعادة فتح النافذة لاستكمال مشترياتك", continueMessage: "متابعة" },
                bg: { windowMessage: "Не виждате защитения браузър на PayPal? Ще ви помогнем да отворите отново прозореца, за да завършите покупката си", continueMessage: "Щракнете, за да продължите" },
                cs: { windowMessage: "Nezobrazuje se vám bezpečný prohlížeč PayPal? Pomůžeme vám okno znovu otevřít, abyste mohli nákup dokončit", continueMessage: "Pokračovat" },
                da: { windowMessage: "Kan du ikke se PayPals sikre browser? Vi hjælper dig med at genstarte vinduet, så du kan betale", continueMessage: "Fortsæt" },
                de: { windowMessage: "Sie sehen das sichere Browserfenster von PayPal nicht? Hier können Sie es wieder öffnen und Ihren Einkauf abschließen", continueMessage: "Weiter" },
                el: { windowMessage: "Δεν βλέπετε το ασφαλές πρόγραμμα περιήγησης PayPal; Θα σας βοηθήσουμε να επανεκκινήσετε το παράθυρο για να ολοκληρώσετε την αγορά σας", continueMessage: "Συνέχεια" },
                en: { windowMessage: "Don’t see the secure PayPal browser? We’ll help you re-launch the window to complete your purchase", continueMessage: "Click to Continue" },
                es: { windowMessage: "¿No ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra", continueMessage: "Continuar" },
                et: { windowMessage: "Kas te ei näe turvalist PayPali lehitsejat? Aitame teil ostu lõpuleviimiseks akna uuesti avada.", continueMessage: "Jätkamiseks klõpsake" },
                fi: { windowMessage: "Eikö suojattua PayPal-selainta näy? Autamme avaamaan ikkunan uudelleen oston viimeistelyä varten", continueMessage: "Jatka" },
                fr: { windowMessage: "Le navigateur sécurisé de PayPal n’apparaît pas ? Nous allons vous aider à rouvrir la fenêtre pour finaliser votre achat", continueMessage: "Continuer" },
                he: { windowMessage: "לא רואה את דפדפן PayPal המאובטח? נעזור לך לפתוח מחדש את החלון כדי להשלים את הקנייה שלך", continueMessage: "המשך" },
                hu: { windowMessage: "Nem látja a biztonságos PayPal-böngészőt? Segítünk újra betölteni az ablakot, hogy befejezhesse a vásárlást", continueMessage: "Folytatás" },
                id: { windowMessage: "Browser PayPal yang aman tidak terlihat? Kami akan membantu menampilkan ulang jendela untuk menyelesaikan pembayaran Anda", continueMessage: "Lanjutkan" },
                it: { windowMessage: "Non vedi la pagina sicura di PayPal? Ti aiuteremo a riaprire la finestra per completare l’acquisto", continueMessage: "Continua" },
                ja: { windowMessage: "セキュアなブラウザが表示されない場合は、ウィンドウを再起動して、支払いを完了できるようお手伝いいたします", continueMessage: "続行" },
                ko: { windowMessage: "보안 PayPal 브라우저가 보이지 않으신가요? 창을 다시 실행하여 결제를 완료할 수 있도록 도와드리겠습니다", continueMessage: "계속" },
                lt: { windowMessage: "Nematote saugios „PayPal“ naršyklės? Padėsime iš naujo paleisti langą, kad užbaigtumėte pirkimą", continueMessage: "Paspauskite, jei norite tęsti" },
                lv: { windowMessage: "Vai neredzat drošo PayPal pārlūkprogrammu? Mēs palīdzēsim jums atkārtoti palaist logu, lai pabeigtu pirkumu.", continueMessage: "Noklikšķiniet, lai turpinātu" },
                ms: { windowMessage: "Tidak melihat pelayar PayPal yang selamat? Kami akan membantu anda melancarkan semula tetingkap untuk melengkapkan pembelian anda", continueMessage: "Klik untuk Meneruskan" },
                no: { windowMessage: "Ser du ikke den sikre PayPal-nettleseren? Vi hjelper deg med å starte vinduet på nytt så du kan fullføre kjøpet", continueMessage: "Fortsett" },
                nl: { windowMessage: "Ziet u de beveiligde PayPal-browser niet? We helpen u het venster opnieuw te openen om uw aankoop te voltooien", continueMessage: "Doorgaan" },
                pl: { windowMessage: "Nie widzisz bezpiecznej przeglądarki PayPal? Pomożemy Ci ponownie uruchomić to okno w celu dokonania zakupu", continueMessage: "Kontynuuj" },
                pt: { windowMessage: "Não está vendo o navegador seguro do PayPal? Ajudaremos você a reabrir a janela para concluir a compra", continueMessage: "Continuar" },
                ro: { windowMessage: "Nu vezi browser-ul securizat PayPal? Te vom ajuta să lansezi din nou fereastra pentru a finaliza achiziția", continueMessage: "Dă clic pentru a continua" },
                ru: { windowMessage: "Не отображается безопасная страница PayPal в браузере? Мы поможем вам повторно загрузить окно, чтобы завершить покупку", continueMessage: "Продолжить" },
                si: { windowMessage: "ආරක්ෂිත PayPal බ්‍රව්සරය නොපෙනේ ද? ඔබේ මිල දී ගැනීම සම්පූර්ණ කිරීම සඳහා අපි ඔබට කවුළුව නැවත දියත් කිරීමට උපකාර කරන්නෙමු", continueMessage: "ඉදිරියට යාමට ක්ලික් කරන්න" },
                sk: { windowMessage: "Nezobrazuje sa vám zabezpečený prehliadač PayPal? Pomôžeme vám znova otvoriť okno, aby ste mohli nákup dokončiť", continueMessage: "Pokračovať" },
                sl: { windowMessage: "Ne vidite PayPalovega varnega brskalnika? Pomagali vam bomo ponovno zagnati okno za dokončanje nakupa", continueMessage: "Kliknite za nadaljevanje" },
                sq: { windowMessage: "Nuk e shikon shfletuesin e sigurt të PayPal? Do të të ndihmojmë të rihapësh dritaren për të përfunduar blerjen", continueMessage: "Kliko për të vazhduar" },
                sv: { windowMessage: "Ser du inte den säkra PayPal-webbläsaren? Vi hjälper dig att starta om fönstret för att slutföra ditt köp", continueMessage: "Fortsätt" },
                th: { windowMessage: "ถ้าคุณไม่เห็นเบราว์เซอร์ที่มีระบบความปลอดภัยของ PayPal เราจะช่วยคุณเปิดหน้าต่างอีกครั้งเพื่อชำระเงินให้เรียบร้อย", continueMessage: "ดำเนินการต่อ" },
                tl: { windowMessage: "Hindi nakikita ang secure na PayPal browser? Tutulungan ka naming i-launch ulit ang window para makumpleto ang pagbili mo.", continueMessage: "I-click para Magpatuloy" },
                tr: { windowMessage: "Güvenli PayPal tarayıcısını görmüyor musunuz? Alışverişinizi tamamlamak için pencereyi yeniden başlatmanıza yardımcı olacağız", continueMessage: "Devam" },
                vi: { windowMessage: "Bạn không thấy trình duyệt PayPal bảo mật? Chúng tôi sẽ giúp bạn mở lại cửa sổ để hoàn tất giao dịch mua hàng", continueMessage: "Nhấp để tiếp tục" },
                zh: { windowMessage: "没有找到安全的PayPal浏览器？我们将帮助您重启窗口以完成付款", continueMessage: "继续" },
                zh_Hant: { windowMessage: "看不到安全 PayPal 瀏覽器？我們會協助你重新啟動視窗，以完成購物程序", continueMessage: "按一下並繼續" },
            };
            function Ta() {
                return _e(Ta, function () {
                    var e = Wo({
                        tag: "paypal-checkout",
                        url: function () {
                            return "https://www.sandbox.paypal.com/checkoutnow";
                        },
                        attributes: { iframe: { scrolling: "yes" } },
                        defaultContext: v() ? vo.POPUP : vo.IFRAME,
                        domain: Qt(),
                        logger: nr(),
                        prerenderTemplate: function (e) {
                            var n = e.doc;
                            return ui(Pa, { nonce: e.props.nonce }).render(mi({ doc: n }));
                        },
                        containerTemplate: function (e) {
                            var n = e.doc,
                                t = e.props;
                            return ui(Ea, {
                                context: e.context,
                                close: e.close,
                                focus: e.focus,
                                event: e.event,
                                frame: e.frame,
                                prerenderFrame: e.prerenderFrame,
                                content: Sa[t.locale.lang],
                                nonce: t.nonce,
                                fullScreen: !0 === t.inlinexo,
                            }).render(mi({ doc: n }));
                        },
                        props: {
                            clientID: {
                                type: "string",
                                value: function () {
                                    return Tt();
                                },
                                queryParam: !0,
                            },
                            sessionID: { type: "string", value: Vo, queryParam: !0 },
                            buttonSessionID: { type: "string", queryParam: !0, required: !1 },
                            stickinessID: { type: "string", queryParam: !0, required: !1 },
                            env: { type: "string", queryParam: !0, value: ft },
                            sdkMeta: { type: "string", queryParam: !0, value: rr },
                            nonce: { type: "string", required: !1, value: Zt, allowDelegate: !0 },
                            createAuthCode: {
                                type: "function",
                                queryParam: "code",
                                required: !1,
                                queryValue: function (e) {
                                    return R.try(e.value);
                                },
                                decorate: function (e) {
                                    return Ae(e.value);
                                },
                            },
                            buyerCountry: { type: "string", queryParam: !0, required: !1, default: Dt },
                            locale: {
                                type: "object",
                                queryParam: "locale.x",
                                allowDelegate: !0,
                                queryValue: function (e) {
                                    var n = e.value;
                                    return n.lang + "_" + n.country;
                                },
                                value: zt,
                            },
                            createOrder: {
                                type: "function",
                                queryParam: "token",
                                alias: "payment",
                                queryValue: function (e) {
                                    return R.try(e.value);
                                },
                                decorate: function (e) {
                                    return Ae(e.value);
                                },
                            },
                            xcomponent: {
                                type: "string",
                                queryParam: !0,
                                value: function () {
                                    return "1";
                                },
                            },
                            version: { type: "string", queryParam: !0, value: mt },
                            commit: { type: "boolean", queryParam: !0, value: kt },
                            fundingSource: {
                                type: "string",
                                queryParam: !0,
                                default: function () {
                                    return ct.PAYPAL;
                                },
                            },
                            standaloneFundingSource: { type: "string", queryParam: !0, required: !1 },
                            branded: { type: "boolean", queryParam: !0, required: !1 },
                            enableFunding: { type: "array", queryParam: !0, required: !1 },
                            onApprove: { type: "function", alias: "onAuthorize" },
                            onComplete: { type: "function", required: !1 },
                            onShippingChange: { type: "function", required: !1 },
                            onShippingAddressChange: { type: "function", required: !1 },
                            onShippingOptionsChange: { type: "function", required: !1 },
                            clientMetadataID: { type: "string", required: !1, default: sr, queryParam: "client-metadata-id" },
                            onAuth: { type: "function", required: !1, sameDomain: !0 },
                            accessToken: { type: "string", required: !1 },
                            onCancel: { type: "function", required: !1 },
                            onFocused: {
                                type: "function",
                                value: function (e) {
                                    var n = e.event;
                                    return function (e) {
                                        return n.on("zoid-focus", e);
                                    };
                                },
                            },
                            test: {
                                type: "object",
                                default: function () {
                                    return window.__test__ || { action: "checkout" };
                                },
                            },
                            inlinexo: { type: "boolean", required: !1, queryParam: !0, allowDelegate: !0 },
                            smokeHash: { type: "string", required: !1, queryParam: !0 },
                        },
                        dimensions: function (e) {
                            var n = e.props;
                            return "object" == typeof n.dimensions ? { width: n.dimensions.width + "px", height: n.dimensions.height + "px" } : f() ? { width: "100%", height: "590px" } : { width: "500px", height: "590px" };
                        },
                    });
                    return (
                        e.isChild() &&
                        ((window.xchild = { props: e.xprops, show: Re, hide: Re }),
                            (function () {
                                try {
                                    if (!window.injector) return;
                                    var e = window.injector.get("$util");
                                    if (!e || !e.redirect) return;
                                    var n = e.redirect;
                                    e.redirect = function (e) {
                                        try {
                                            -1 !== e.indexOf("/ppcreditapply") && -1 !== e.indexOf("key=") && -1 === e.indexOf("sdkMeta") && (e += "&sdkMeta=" + rr());
                                        } catch (e) {}
                                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                                        return n.call.apply(n, [this, e].concat(r));
                                    };
                                } catch (e) {}
                            })()),
                            e
                    );
                });
            }
            var Na = [
                    ct.PAYPAL,
                    ct.VENMO,
                    ct.ITAU,
                    ct.CREDIT,
                    ct.PAYLATER,
                    ct.APPLEPAY,
                    ct.IDEAL,
                    ct.SEPA,
                    ct.BANCONTACT,
                    ct.GIROPAY,
                    ct.EPS,
                    ct.SOFORT,
                    ct.MYBANK,
                    ct.BLIK,
                    ct.P24,
                    ct.ZIMPLER,
                    ct.WECHATPAY,
                    ct.PAYU,
                    ct.VERKKOPANKKI,
                    ct.TRUSTLY,
                    ct.OXXO,
                    ct.BOLETO,
                    ct.BOLETOBANCARIO,
                    ct.MAXIMA,
                    ct.MERCADOPAGO,
                    ct.MULTIBANCO,
                    ct.CARD,
                ],
                Aa = [ct.PAYPAL, ct.ITAU],
                ka = function () {
                    return ur(function (e) {
                        return (
                            (e.funding = e.funding || {}),
                                Object.keys(e.funding).filter(function (n) {
                                    var t = e.funding[n];
                                    return !((t.expiry && Date.now() > t.expiry) || !e.funding[n].remembered);
                                })
                        );
                    });
                };
            function _a(e) {
                return -1 !== ka().indexOf(e);
            }
            var Ra,
                Ma,
                Fa,
                Ia,
                Da = function () {
                    for (var e = wt(), n = 0; n < Aa.length; n++) {
                        var t,
                            r = Aa[n];
                        if (_a(r)) {
                            var o = e[r];
                            o && (e = x({}, e, (((t = {})[r] = x({}, o, { eligible: !0, recommended: !0 })), t)));
                        }
                    }
                    return e;
                },
                Ba = { PAYPAL: "paypal", CHECKOUT: "checkout", BUYNOW: "buynow", PAY: "pay", INSTALLMENT: "installment", SUBSCRIBE: "subscribe", DONATE: "donate" },
                ja = { TINY: "tiny", SMALL: "small", MEDIUM: "medium", LARGE: "large", HUGE: "huge", RESPONSIVE: "responsive" },
                Ha = { HORIZONTAL: "horizontal", VERTICAL: "vertical" },
                qa = {
                    CONTAINER: "paypal-button-container",
                    BUTTON_ROW: "paypal-button-row",
                    BUTTON: "paypal-button",
                    BUTTON_LABEL: "paypal-button-label-container",
                    LOGO_PP: "paypal-logo-pp",
                    LABEL: "paypal-button-label",
                    COLOR: "paypal-button-color",
                    TEXT_COLOR: "paypal-button-text-color",
                    SHAPE: "paypal-button-shape",
                    LAYOUT: "paypal-button-layout",
                    NUMBER: "paypal-button-number",
                    ENV: "paypal-button-env",
                    WALLET: "paypal-button-wallet",
                    WALLET_MENU: "paypal-button-wallet-menu",
                    LOADING: "paypal-button-loading",
                    SPINNER: "paypal-button-spinner",
                    TAGLINE: "paypal-button-tagline",
                    POWERED_BY: "paypal-powered-by",
                    TEXT: "paypal-button-text",
                    SPACE: "paypal-button-space",
                    CARD: "paypal-button-card",
                    PERSONALIZATION_TEXT: "paypal-personalization-text",
                    VAULT_LABEL: "paypal-vault-label",
                    VAULT_HEADER: "paypal-vault-header",
                    SEPARATOR: "paypal-separator",
                    DOM_READY: "dom-ready",
                    HIDDEN: "hidden",
                    IMMEDIATE: "immediate",
                    CUSTOM: "custom",
                },
                Wa = t(4),
                Ua = t.n(Wa),
                za = ["optional", "className", "animate"];
            function Za(e, n) {
                var t = e.optional,
                    r = e.className,
                    o = void 0 === r ? [] : r,
                    i = e.animate,
                    a = l(e, za);
                return ui(
                    "span",
                    x(
                        {
                            class: [qa.TEXT]
                                .concat(o, [i || qa.IMMEDIATE])
                                .filter(Boolean)
                                .join(" "),
                            optional: t,
                        },
                        a,
                        { "data-v-45d99f68": "" }
                    ),
                    n
                );
            }
            function Ga() {
                return ui("span", { class: [qa.SPACE].join(" "), "data-v-45d99f68": "" }, " ");
            }
            function Va(e) {
                var n = e.chars,
                    t = e.color;
                return ui(vi, { css: Ua.a, "data-v-45d99f68": "" }, ui("div", { class: ["placeholder", "color-" + (void 0 === t ? "white" : t)].join(" "), "data-v-45d99f68": "" }, new Array(n).fill("x").join("")));
            }
            function Ya(e) {
                return e.logo;
            }
            var Ka = {
                enabled: !0,
                automatic: !0,
                layouts: [Ha.VERTICAL],
                platforms: [st.DESKTOP, st.MOBILE],
                flows: ["purchase"],
                colors: ["silver", "black", "white"],
                logoColors: ((Ra = {}), (Ra.black = "white"), Ra),
                shapes: ["rect", "pill"],
                textColors: ((Ma = {}), (Ma.default = "black"), (Ma.blue = "white"), (Ma.black = "white"), (Ma.darkblue = "white"), Ma),
                secondaryColors: ((Fa = {}), (Fa.default = "silver"), (Fa.black = "black"), (Fa.white = "white"), Fa),
                secondaryVaultColors: ((Ia = {}), (Ia.default = "silver"), (Ia.black = "black"), (Ia.white = "white"), Ia),
                Logo: function () {
                    throw new Error("Not implemented");
                },
                Label: Ya,
                showWalletMenu: function () {
                    return !0;
                },
            };
            function Ja(e) {
                var n = e.url;
                return ui(
                    li,
                    null,
                    ui("style", {
                        nonce: e.nonce,
                        innerHTML:
                            "\n                    .tracking-beacon {\n                        visibility: hidden;\n                        position: absolute;\n                        height: 1px;\n                        width: 1px;\n                    }\n                ",
                    }),
                    ui("img", { class: "tracking-beacon", src: n })
                );
            }
            var Xa = "\n    max-width: 0%;\n    opacity: 0;\n    overflow: hidden;\n",
                $a = "\n    max-width: 100%;\n    opacity: 1;\n",
                Qa = "\n    position: static;\n    visibility: visible;\n",
                eu =
                    "\n\n    ." +
                    qa.BUTTON +
                    " ." +
                    qa.TEXT +
                    " {\n        height: 100%;\n        \n    position: absolute;\n    visibility: hidden;\n\n    }\n\n    ." +
                    qa.BUTTON +
                    " ." +
                    qa.TEXT +
                    "." +
                    qa.IMMEDIATE +
                    ":not(." +
                    qa.PERSONALIZATION_TEXT +
                    "):not(." +
                    qa.HIDDEN +
                    ") {\n        " +
                    Qa +
                    "\n        " +
                    $a +
                    "\n    }\n\n    ." +
                    qa.BUTTON +
                    " ." +
                    qa.VAULT_LABEL +
                    " {\n        max-width: 60%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n    }\n\n    ." +
                    qa.DOM_READY +
                    " ." +
                    qa.BUTTON +
                    " ." +
                    qa.TEXT +
                    ":not(." +
                    qa.IMMEDIATE +
                    "):not(." +
                    qa.PERSONALIZATION_TEXT +
                    "):not(." +
                    qa.HIDDEN +
                    ") {\n        " +
                    Qa +
                    "\n        " +
                    Xa +
                    "\n        animation: show-text 1s 0s forwards;\n    }\n\n    @keyframes show-text {\n        0% { " +
                    Xa +
                    " }\n        100% { " +
                    $a +
                    " }\n    }\n",
                nu = t(2),
                tu = t.n(nu),
                ru = ["buttonDesignComponent"];
            function ou(e) {
                return ui($i, { logoColor: e.logoColor, "data-v-c0b7cb6d": "" });
            }
            function iu(e) {}
            function au(e) {
                return ui(li, { "data-v-c0b7cb6d": "" }, ui(Ya, x({}, e, { "data-v-c0b7cb6d": "" })), ui(iu, x({}, e, { "data-v-c0b7cb6d": "" })));
            }
            function uu(e) {
                var n = e.buttonDesignComponent,
                    t = l(e, ru),
                    r = ui(Ya, x({}, t, { "data-v-c0b7cb6d": "" })),
                    o = ui(iu, x({}, t, { "data-v-c0b7cb6d": "" }));
                return ui(li, { "data-v-c0b7cb6d": "" }, r, n, o);
            }
            function lu(e) {
                var n = e.logoColor,
                    t = e.instrument,
                    r = e.content,
                    o = e.commit,
                    i = e.vault,
                    a = e.textColor,
                    u = e.fundingSource;
                if (!t || t.type) {
                    var l, c, s;
                    (s = t && "boolean" == typeof t.branded ? t.branded : u === ct.PAYPAL || u === ct.CREDIT || u !== ct.CARD),
                    t &&
                    ("card" === t.type && t.label
                        ? ((l = t.logoUrl ? ui("img", { class: "card-art", src: t.logoUrl, "data-v-c0b7cb6d": "" }) : ui(Zi, { logoColor: n, "data-v-c0b7cb6d": "" })), (c = t.label.replace("••••", "••")))
                        : "bank" === t.type && t.label
                            ? ((l = t.logoUrl ? ui("img", { class: "card-art", src: t.logoUrl, "data-v-c0b7cb6d": "" }) : ui(ki, { logoColor: n, "data-v-c0b7cb6d": "" })), (c = t.label.replace("••••", "••")))
                            : "credit" === t.type
                                ? ((l = ui(Gi, { "data-v-c0b7cb6d": "" })), (c = r && r.credit))
                                : "balance" === t.type
                                    ? ((l = ui(ra, { "data-v-c0b7cb6d": "" })), (c = r && r.balance))
                                    : t.label && (c = t.label));
                    var d = Boolean(t && t.oneClick && o && !i),
                        f = {};
                    return (
                        d && (f["data-pay-now"] = !0),
                            ui(
                                vi,
                                { css: tu.a, "data-v-c0b7cb6d": "" },
                                ui(
                                    "div",
                                    x({ class: "wallet-label-new" }, f, { "data-v-c0b7cb6d": "" }),
                                    s ? ui("div", { class: "paypal-mark", "data-v-c0b7cb6d": "" }, ui(ta, { logoColor: n, "data-v-c0b7cb6d": "" }), ui(Ga, { "data-v-c0b7cb6d": "" })) : null,
                                    ui(
                                        "div",
                                        { class: "pay-label", optional: 2, "data-v-c0b7cb6d": "" },
                                        ui(Ga, { "data-v-c0b7cb6d": "" }),
                                        ui(Za, { "data-v-c0b7cb6d": "" }, t && r ? (d ? r.payNow : r.payWith) : ui(Va, { chars: 7, color: a, "data-v-c0b7cb6d": "" })),
                                        ui(Ga, { "data-v-c0b7cb6d": "" })
                                    ),
                                    ui("div", { class: "logo", optional: 1, "data-v-c0b7cb6d": "" }, t && l ? l : ui(Za, { "data-v-c0b7cb6d": "" }, ui(Va, { chars: 4, color: a, "data-v-c0b7cb6d": "" }))),
                                    ui("div", { class: "label", "data-v-c0b7cb6d": "" }, ui(Ga, { "data-v-c0b7cb6d": "" }), ui(Za, { "data-v-c0b7cb6d": "" }, t && c ? c : ui(Va, { chars: 6, color: a, "data-v-c0b7cb6d": "" })))
                                )
                            )
                    );
                }
            }
            function cu(e) {
                return null;
            }
            var su = t(3),
                du = t.n(su);
            function fu(e) {
                var n,
                    t = x({}, e),
                    r = t.instrument,
                    o = ui(da, { logoColor: t.logoColor, "data-v-2b6020ba": "" });
                return (
                    r && r.label && (n = r.label),
                        ui(
                            vi,
                            { css: du.a, "data-v-2b6020ba": "" },
                            ui(
                                "div",
                                { class: "wallet-label-venmo", "data-v-2b6020ba": "" },
                                ui("div", { class: "divider", "data-v-2b6020ba": "" }, "|"),
                                o && ui("div", { class: "logo", optional: !0, "data-v-2b6020ba": "" }, o, ui(Ga, { "data-v-2b6020ba": "" })),
                                n && ui("div", { class: "label", "data-v-2b6020ba": "" }, ui(Za, { className: ["limit"], "data-v-2b6020ba": "" }, n))
                            )
                        )
                );
            }
            t(5);
            var pu,
                hu,
                mu,
                gu = t(6),
                yu = t.n(gu);
            function vu(e) {
                var n,
                    t,
                    r,
                    o,
                    i,
                    a,
                    u,
                    l,
                    c,
                    s,
                    d,
                    f,
                    p,
                    h,
                    m,
                    g,
                    y,
                    v,
                    w,
                    b = e.paylater;
                return (
                    null != b && null != (n = b.products) && null != (t = n.paylater) && t.eligible && "DE" === (null == b || null == (r = b.products) || null == (o = r.paylater) ? void 0 : o.variant) && (w = "Später Bezahlen"),
                    null != b && null != (i = b.products) && null != (a = i.payIn3) && a.eligible && "ES" === (null == b || null == (u = b.products) || null == (l = u.payIn3) ? void 0 : l.variant) && (w = "Paga en 3 plazos"),
                    null != b && null != (c = b.products) && null != (s = c.payIn3) && s.eligible && "IT" === (null == b || null == (d = b.products) || null == (f = d.payIn3) ? void 0 : f.variant) && (w = "Paga in 3 rate"),
                    null != b && null != (p = b.products) && null != (h = p.payIn4) && h.eligible && (w = "Pay in 4"),
                    null != b && null != (m = b.products) && null != (g = m.payIn4) && g.eligible && "FR" === (null == b || null == (y = b.products) || null == (v = y.payIn4) ? void 0 : v.variant) && (w = "4X PayPal"),
                        w
                );
            }
            function wu() {
                return _e(wu, function () {
                    var e, n;
                    return (
                        ((e = {})[ct.PAYPAL] = x({}, Ka, {
                            flows: ["purchase", "billing_setup", "subscription_setup"],
                            layouts: [Ha.VERTICAL, Ha.HORIZONTAL],
                            colors: ["gold", "blue", "silver", "black", "white"],
                            logoColors: ((n = {}), (n.gold = "blue"), (n.silver = "blue"), (n.blue = "white"), (n.black = "white"), (n.white = "blue"), n),
                            labelText: "PayPal",
                            Logo: ou,
                            Label: au,
                            WalletLabel: lu,
                            Tag: cu,
                        })),
                            (e[ct.VENMO] = (function () {
                                var e, n;
                                return x({}, Ka, {
                                    shippingChange: !1,
                                    layouts: [Ha.HORIZONTAL, Ha.VERTICAL],
                                    eligible: function (e) {
                                        var n = e.experiment;
                                        return !n || !1 !== n.enableVenmo;
                                    },
                                    requires: function (e) {
                                        return e.platform === st.MOBILE ? { native: !0, popup: !0 } : {};
                                    },
                                    Logo: function (e) {
                                        return da({ logoColor: e.logoColor, optional: e.optional });
                                    },
                                    Label: function (e) {
                                        var n,
                                            t,
                                            r = x({}, e);
                                        return r.experiment && r.experiment.enableVenmoAppLabel
                                            ? ((t = ui(vi, { css: du.a, "data-v-2b6020ba": "" }, ui(da, { logoColor: (n = r).logoColor, "data-v-2b6020ba": "" }), ui(Za, { className: ["app-label"], "data-v-2b6020ba": "" }, "App"))),
                                                ui(Ya, x({}, n, { logo: t, "data-v-2b6020ba": "" })))
                                            : (function (e) {
                                                return ui(Ya, x({}, e, { "data-v-2b6020ba": "" }));
                                            })(r);
                                    },
                                    WalletLabel: function () {
                                        return fu.apply(void 0, arguments);
                                    },
                                    showWalletMenu: function () {
                                        return !1;
                                    },
                                    colors: ["blue", "silver", "black", "white"],
                                    logoColors: ((e = {}), (e.blue = "white"), (e.silver = "blue"), (e.black = "white"), (e.white = "blue"), e),
                                    secondaryColors: x({}, Ka.secondaryColors, ((n = {}), (n.gold = "blue"), (n.blue = "silver"), (n.silver = "blue"), n)),
                                });
                            })()),
                            (e[ct.APPLEPAY] = null),
                            (e[ct.ITAU] = null),
                            (e[ct.CREDIT] = null),
                            (e[ct.PAYLATER] = (function () {
                                var e, n;
                                return x({}, Ka, {
                                    layouts: [Ha.HORIZONTAL, Ha.VERTICAL],
                                    eligible: function (e) {
                                        var n = e.experiment;
                                        return !(n && n.disablePaylater && !e.fundingSource);
                                    },
                                    Label: function (e) {
                                        return e.logo;
                                    },
                                    Logo: function (e) {
                                        var n = e.fundingEligibility;
                                        return ui(
                                            vi,
                                            { css: yu.a, nonce: e.nonce, "data-v-1c11dff4": "" },
                                            ui(ta, { logoColor: e.logoColor, "data-v-1c11dff4": "" }),
                                            ui(Ga, { "data-v-1c11dff4": "" }),
                                            ui(Za, { "data-v-1c11dff4": "" }, vu(n) || "Pay Later")
                                        );
                                    },
                                    colors: ["white", "black", "gold", "blue", "silver"],
                                    secondaryColors: ((e = {}), (e.default = "white"), (e.gold = "gold"), (e.blue = "blue"), (e.silver = "silver"), (e.black = "black"), (e.white = "white"), e),
                                    logoColors: ((n = {}), (n.gold = "blue"), (n.silver = "blue"), (n.blue = "white"), (n.black = "white"), (n.white = "blue"), n),
                                    labelText: function (e) {
                                        var n = e.fundingEligibility;
                                        return (n && vu(n)) || ct.PAYPAL + " " + ct.PAYLATER;
                                    },
                                });
                            })()),
                            (e[ct.CARD] = (function () {
                                var e,
                                    n,
                                    t,
                                    r,
                                    o = (((r = {}).visa = { Label: Fi }), (r.amex = { Label: _i }), (r.mastercard = { Label: Mi }), (r.discover = { Label: Ri }), (r.jcb = null), (r.elo = null), (r.hiper = null), r),
                                    i = (((e = {})[ot.BR] = 5), e);
                                return x({}, Ka, {
                                    eligible: function (e) {
                                        var n = e.fundingSource,
                                            t = e.wallet,
                                            r = e.fundingEligibility.card,
                                            o = Boolean(-1 !== e.components.indexOf("hosted-fields")),
                                            i = Boolean(r && r.eligible),
                                            a = Boolean(r && r.branded),
                                            u = Boolean(t && t.card && t.card.instruments && t.card.instruments.length);
                                        return !(!i || (!a && !u && n !== ct.CARD && o));
                                    },
                                    flows: ["purchase", "billing_setup", "subscription_setup"],
                                    layouts: [Ha.VERTICAL],
                                    maxCards: i,
                                    vendors: o,
                                    colors: ["black", "white"],
                                    secondaryColors: x({}, Ka.secondaryColors, ((n = {}), (n.default = "black"), n)),
                                    logoColors: ((t = {}), (t.white = "black"), (t.default = "white"), t),
                                    labelText: function (e) {
                                        return ct.CARD;
                                    },
                                    Logo: function (e) {
                                        return ui(Zi, { logoColor: e.logoColor });
                                    },
                                    Label: function (e) {
                                        var n = e.logo,
                                            t = e.custom;
                                        if (t && t.label && t.label.length) {
                                            var r = { buy: "Buy", checkout: "Checkout", pay: "Pay", "buy now": "Buy Now", "pay now": "Pay Now", "checkout now": "Checkout Now", "proceed to checkout": "Proceed to checkout" },
                                                o = r.checkout,
                                                i = t.label.toLowerCase();
                                            return r[i] && (o = r[i]), ui(li, null, ui(Za, null, o), ui(Ga, null));
                                        }
                                        return ui(li, null, null, n, null);
                                    },
                                    WalletLabel: lu,
                                    showWalletMenu: function (e) {
                                        return !e.instrument.branded;
                                    },
                                });
                            })()),
                            (e[ct.IDEAL] = null),
                            (e[ct.SEPA] = null),
                            (e[ct.BANCONTACT] = null),
                            (e[ct.GIROPAY] = null),
                            (e[ct.SOFORT] = null),
                            (e[ct.EPS] = null),
                            (e[ct.MYBANK] = null),
                            (e[ct.P24] = null),
                            (e[ct.PAYU] = null),
                            (e[ct.VERKKOPANKKI] =
                                void 0 !==
                                Object({
                                    paypal: Object({ eligible: !0, vaultable: !0 }),
                                    paylater: Object({
                                        eligible: !0,
                                        products: Object({ payIn3: Object({ eligible: !1, variant: null }), payIn4: Object({ eligible: !1, variant: null }), paylater: Object({ eligible: !0, variant: null }) }),
                                    }),
                                    card: Object({
                                        eligible: !0,
                                        branded: !1,
                                        installments: !1,
                                        vendors: Object({
                                            visa: Object({ eligible: !0, vaultable: !0 }),
                                            mastercard: Object({ eligible: !0, vaultable: !0 }),
                                            amex: Object({ eligible: !0, vaultable: !0 }),
                                            discover: Object({ eligible: !0, vaultable: !0 }),
                                            hiper: Object({ eligible: !1, vaultable: !1 }),
                                            elo: Object({ eligible: !1, vaultable: !0 }),
                                            jcb: Object({ eligible: !1, vaultable: !0 }),
                                        }),
                                        guestEnabled: !1,
                                    }),
                                    venmo: Object({ eligible: !0 }),
                                    itau: Object({ eligible: !1 }),
                                    credit: Object({ eligible: !1 }),
                                    applepay: Object({ eligible: !1 }),
                                    sepa: Object({ eligible: !1 }),
                                    ideal: Object({ eligible: !1 }),
                                    bancontact: Object({ eligible: !1 }),
                                    giropay: Object({ eligible: !1 }),
                                    eps: Object({ eligible: !1 }),
                                    sofort: Object({ eligible: !1 }),
                                    mybank: Object({ eligible: !1 }),
                                    p24: Object({ eligible: !1 }),
                                    zimpler: Object({ eligible: !1 }),
                                    wechatpay: Object({ eligible: !1 }),
                                    payu: Object({ eligible: !1 }),
                                    blik: Object({ eligible: !1 }),
                                    trustly: Object({ eligible: !1 }),
                                    oxxo: Object({ eligible: !1 }),
                                    maxima: Object({ eligible: !1 }),
                                    boleto: Object({ eligible: !1 }),
                                    boletobancario: Object({ eligible: !1 }),
                                    mercadopago: Object({ eligible: !1 }),
                                    multibanco: Object({ eligible: !1 }),
                                }).verkkopankki &&
                                Object({
                                    paypal: Object({ eligible: !0, vaultable: !0 }),
                                    paylater: Object({ eligible: !0, products: Object({ payIn3: Object({ eligible: !1, variant: null }), payIn4: Object({ eligible: !1, variant: null }), paylater: Object({ eligible: !0, variant: null }) }) }),
                                    card: Object({
                                        eligible: !0,
                                        branded: !1,
                                        installments: !1,
                                        vendors: Object({
                                            visa: Object({ eligible: !0, vaultable: !0 }),
                                            mastercard: Object({ eligible: !0, vaultable: !0 }),
                                            amex: Object({ eligible: !0, vaultable: !0 }),
                                            discover: Object({ eligible: !0, vaultable: !0 }),
                                            hiper: Object({ eligible: !1, vaultable: !1 }),
                                            elo: Object({ eligible: !1, vaultable: !0 }),
                                            jcb: Object({ eligible: !1, vaultable: !0 }),
                                        }),
                                        guestEnabled: !1,
                                    }),
                                    venmo: Object({ eligible: !0 }),
                                    itau: Object({ eligible: !1 }),
                                    credit: Object({ eligible: !1 }),
                                    applepay: Object({ eligible: !1 }),
                                    sepa: Object({ eligible: !1 }),
                                    ideal: Object({ eligible: !1 }),
                                    bancontact: Object({ eligible: !1 }),
                                    giropay: Object({ eligible: !1 }),
                                    eps: Object({ eligible: !1 }),
                                    sofort: Object({ eligible: !1 }),
                                    mybank: Object({ eligible: !1 }),
                                    p24: Object({ eligible: !1 }),
                                    zimpler: Object({ eligible: !1 }),
                                    wechatpay: Object({ eligible: !1 }),
                                    payu: Object({ eligible: !1 }),
                                    blik: Object({ eligible: !1 }),
                                    trustly: Object({ eligible: !1 }),
                                    oxxo: Object({ eligible: !1 }),
                                    maxima: Object({ eligible: !1 }),
                                    boleto: Object({ eligible: !1 }),
                                    boletobancario: Object({ eligible: !1 }),
                                    mercadopago: Object({ eligible: !1 }),
                                    multibanco: Object({ eligible: !1 }),
                                }).verkkopankki.eligible
                                    ? x({}, Ka, {
                                        automatic: !1,
                                        layouts: [Ha.VERTICAL],
                                        shippingChange: !1,
                                        Logo: function (e) {
                                            return (function (e) {
                                                var n = e.logoColor,
                                                    t = void 0 === n ? "default" : n,
                                                    r = l(e, ba),
                                                    o = Si("verkkopankki", Ca, t),
                                                    i = o.primary,
                                                    a = o.secondary,
                                                    u = o.tertiary,
                                                    c = o.quaternary,
                                                    s = o.quinary,
                                                    d = o.senary;
                                                return ui(
                                                    Oi,
                                                    x({}, r, {
                                                        name: "verkkopankki",
                                                        logoColor: t,
                                                        render: function () {
                                                            return ui(
                                                                "svg",
                                                                { width: "83px", height: "32px", viewBox: "0 0 83 32", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
                                                                ui(
                                                                    "defs",
                                                                    null,
                                                                    ui("path", {
                                                                        d:
                                                                            "M6.75,0.0879407407 C3.0375,0.0879407407 0,2.96794074 0,6.48794074 L0,6.48794074 L0,24.5027556 C0,28.0227556 3.0375,30.9027556 6.75,30.9027556 L6.75,30.9027556 L25.75025,30.9027556 C29.4625,30.9027556 32.5,28.0227556 32.5,24.5027556 L32.5,24.5027556 L32.5,6.48794074 C32.5,2.96794074 29.4625,0.0879407407 25.75025,0.0879407407 L25.75025,0.0879407407 L6.75,0.0879407407 Z",
                                                                        id: "path-1",
                                                                    }),
                                                                    ui(
                                                                        "linearGradient",
                                                                        { x1: "80.3415915%", y1: "2.75555705%", x2: "19.6584085%", y2: "97.2445831%", id: "linearGradient-3" },
                                                                        ui("stop", { "stop-color": i, offset: "0%" }),
                                                                        ui("stop", { "stop-color": a, offset: "100%" })
                                                                    ),
                                                                    ui("path", {
                                                                        d:
                                                                            "M6.6155,0.206459259 C3.04575,0.206459259 0.125,2.97576296 0.125,6.36041481 L0.125,6.36041481 L0.125,23.6821333 C0.125,27.0670222 3.04575,29.8360889 6.6155,29.8360889 L6.6155,29.8360889 L24.8845,29.8360889 C28.45425,29.8360889 31.375,27.0670222 31.375,23.6821333 L31.375,23.6821333 L31.375,6.36041481 C31.375,2.97576296 28.45425,0.206459259 24.8845,0.206459259 L24.8845,0.206459259 L6.6155,0.206459259 Z",
                                                                        id: "path-4",
                                                                    }),
                                                                    ui(
                                                                        "linearGradient",
                                                                        { x1: "6.10096128%", y1: "89.4646408%", x2: "93.8990386%", y2: "10.5354941%", id: "linearGradient-6" },
                                                                        ui("stop", { "stop-color": i, offset: "0%" }),
                                                                        ui("stop", { "stop-color": a, offset: "100%" })
                                                                    ),
                                                                    ui("polygon", {
                                                                        id: "path-7",
                                                                        points:
                                                                            "6.5 0.206459259 6.5 10.8330667 0.125 10.8330667 0.125 19.129363 6.5 19.129363 6.5 29.8360889 15.25 29.8360889 15.25 19.129363 31.375 19.129363 31.375 10.8330667 15.25 10.8330667 15.25 0.206459259",
                                                                    }),
                                                                    ui(
                                                                        "linearGradient",
                                                                        { x1: "6.26612168%", y1: "82.243184%", x2: "78.1338463%", y2: "17.635184%", id: "linearGradient-9" },
                                                                        ui("stop", { "stop-color": u, offset: "0%" }),
                                                                        ui("stop", { "stop-color": c, offset: "100%" })
                                                                    ),
                                                                    ui("polygon", { id: "path-10", points: "0.106675 0.228266667 3.17249309 0.228266667 3.17249309 6.24822519 0.106675 6.24822519" }),
                                                                    ui("polygon", { id: "path-12", points: "0.2434 0.228266667 3.30921809 0.228266667 3.30921809 6.24822519 0.2434 6.24822519" }),
                                                                    ui("polygon", { id: "path-14", points: "0.0454 0.228266667 3.11102683 0.228266667 3.11102683 6.24822519 0.0454 6.24822519" }),
                                                                    ui("polygon", { id: "path-16", points: "0.181875 0.228266667 3.24775183 0.228266667 3.24775183 6.24822519 0.181875 6.24822519" }),
                                                                    ui("polygon", { id: "path-18", points: "0.1455 0.211057778 0.90525 0.211057778 0.90525 1.20969481 0.1455 1.20969481" }),
                                                                    ui("polygon", { id: "path-20", points: "0 31.762963 82.90525 31.762963 82.90525 0.228266667 0 0.228266667" })
                                                                ),
                                                                ui(
                                                                    "g",
                                                                    { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
                                                                    ui(
                                                                        "g",
                                                                        { transform: "translate(-219.000000, -536.000000)" },
                                                                        ui(
                                                                            "g",
                                                                            { transform: "translate(219.000000, 536.000000)" },
                                                                            ui(
                                                                                "g",
                                                                                { transform: "translate(0.000000, 0.482844)" },
                                                                                ui("mask", { fill: i }, ui("use", { href: "#path-1" })),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M6.75,0.0879407407 C3.0375,0.0879407407 0,2.96794074 0,6.48794074 L0,6.48794074 L0,24.5027556 C0,28.0227556 3.0375,30.9027556 6.75,30.9027556 L6.75,30.9027556 L25.75025,30.9027556 C29.4625,30.9027556 32.5,28.0227556 32.5,24.5027556 L32.5,24.5027556 L32.5,6.48794074 C32.5,2.96794074 29.4625,0.0879407407 25.75025,0.0879407407 L25.75025,0.0879407407 L6.75,0.0879407407 Z",
                                                                                    fill: "url(#linearGradient-3)",
                                                                                    mask: "url(#mask-2)",
                                                                                })
                                                                            ),
                                                                            ui(
                                                                                "g",
                                                                                { transform: "translate(0.500000, 0.956919)" },
                                                                                ui("mask", { fill: i }, ui("use", { href: "#path-4" })),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M6.6155,0.206459259 C3.04575,0.206459259 0.125,2.97576296 0.125,6.36041481 L0.125,6.36041481 L0.125,23.6821333 C0.125,27.0670222 3.04575,29.8360889 6.6155,29.8360889 L6.6155,29.8360889 L24.8845,29.8360889 C28.45425,29.8360889 31.375,27.0670222 31.375,23.6821333 L31.375,23.6821333 L31.375,6.36041481 C31.375,2.97576296 28.45425,0.206459259 24.8845,0.206459259 L24.8845,0.206459259 L6.6155,0.206459259 Z",
                                                                                    fill: "url(#linearGradient-6)",
                                                                                    mask: "url(#mask-5)",
                                                                                })
                                                                            ),
                                                                            ui(
                                                                                "g",
                                                                                { transform: "translate(0.500000, 0.956919)" },
                                                                                ui("mask", { id: "mask-8", fill: i }, ui("use", { href: "#path-7" })),
                                                                                ui("polygon", {
                                                                                    id: "Fill-7",
                                                                                    fill: "url(#linearGradient-9)",
                                                                                    mask: "url(#mask-8)",
                                                                                    points:
                                                                                        "6.5 0.206459259 6.5 10.8330667 0.125 10.8330667 0.125 19.129363 6.5 19.129363 6.5 29.8360889 15.25 29.8360889 15.25 19.129363 31.375 19.129363 31.375 10.8330667 15.25 10.8330667 15.25 0.206459259",
                                                                                })
                                                                            ),
                                                                            ui(
                                                                                "g",
                                                                                { transform: "translate(0.000000, 0.008770)" },
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M41.86625,0.448142222 L41.4055,0.448142222 C41.353,0.448142222 41.30625,0.480142222 41.2895,0.527312593 L39.593,5.31949037 L37.89675,0.527312593 C37.88,0.480142222 37.83325,0.448142222 37.7805,0.448142222 L37.312,0.448142222 C37.2725,0.448142222 37.2355,0.466157037 37.2125,0.496734815 C37.1895,0.527075556 37.1835,0.566186667 37.196,0.601505185 L39.18525,6.16926815 C39.202,6.21643852 39.24875,6.24820148 39.30125,6.24820148 L39.877,6.24820148 C39.9295,6.24820148 39.97625,6.21643852 39.993,6.16926815 L41.98225,0.601505185 C41.995,0.566186667 41.9887546,0.527075556 41.96575,0.496734815 C41.94275,0.466157037 41.90575,0.448142222 41.86625,0.448142222",
                                                                                    fill: s,
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M42.770925,3.87662222 C42.776925,3.51656296 42.812175,3.23591111 42.875675,3.04106667 C42.940925,2.84148148 43.045425,2.7058963 43.194675,2.62648889 C43.352175,2.54305185 43.589175,2.50085926 43.899175,2.50085926 C44.163925,2.50085926 44.371675,2.52764444 44.515675,2.58026667 C44.645425,2.62767407 44.736675,2.70684444 44.795175,2.82228148 C44.858175,2.94625185 44.890175,3.12853333 44.890175,3.3632 C44.890175,3.5634963 44.845925,3.69884444 44.758675,3.76616296 C44.663925,3.83964444 44.498675,3.87662222 44.267925,3.87662222 L42.770925,3.87662222 Z M45.209425,4.16983704 C45.430425,3.99845926 45.542675,3.72681481 45.542675,3.3632 C45.542675,3.01238519 45.483675,2.72865185 45.366925,2.52005926 C45.245425,2.30364444 45.058675,2.14767407 44.811175,2.05641481 C44.578175,1.97084444 44.271425,1.92722963 43.899175,1.92722963 C43.455925,1.92722963 43.099425,1.99312593 42.840175,2.12278519 C42.569425,2.25742222 42.372675,2.48995556 42.255175,2.81374815 C42.143675,3.12047407 42.087175,3.55306667 42.087175,4.09896296 C42.087175,4.64035556 42.140925,5.07105185 42.246925,5.37896296 C42.358175,5.70417778 42.548675,5.94168889 42.813175,6.08462222 C43.068925,6.22305185 43.426425,6.29345185 43.876175,6.29345185 C44.339425,6.29345185 44.832675,6.26500741 45.341925,6.2093037 C45.403675,6.20266667 45.450425,6.15312593 45.450425,6.09386667 L45.450425,5.82838519 C45.450425,5.76438519 45.395425,5.71223704 45.327925,5.71223704 L43.975925,5.71223704 C43.640425,5.71223704 43.385175,5.66767407 43.217675,5.57925926 C43.057675,5.49463704 42.949425,5.36260741 42.886925,5.17511111 C42.826425,4.99377778 42.790425,4.74014815 42.780175,4.41991111 L44.298675,4.41991111 C44.689925,4.41991111 44.996175,4.33576296 45.209425,4.16983704 L45.209425,4.16983704 Z",
                                                                                    fill: s,
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M48.8798,1.97755259 C48.7618,1.94413037 48.6158,1.92730074 48.4458,1.92730074 C48.1323,1.92730074 47.8433,2.00196741 47.58705,2.14893037 C47.40355,2.25441185 47.2248,2.39118222 47.0538,2.55734519 L46.97705,2.0716563 C46.96805,2.01476741 46.9163,1.97257481 46.8558,1.97257481 L46.52555,1.97257481 C46.4578,1.97257481 46.40305,2.02472296 46.40305,2.08896 L46.40305,6.1318637 C46.40305,6.19610074 46.4578,6.24824889 46.52555,6.24824889 L46.97105,6.24824889 C47.0388,6.24824889 47.09355,6.19610074 47.09355,6.1318637 L47.09355,3.20730074 C47.32605,2.99610074 47.5388,2.84178963 47.7263,2.74934519 C47.9178,2.65476741 48.1468,2.60712296 48.40705,2.60712296 C48.5178,2.60712296 48.65755,2.62181926 48.82255,2.65073778 C48.85805,2.65713778 48.8953,2.64789333 48.9233,2.62584889 C48.95105,2.60380444 48.96755,2.57109333 48.96755,2.53648593 L48.96755,2.08896 C48.96755,2.03752296 48.9318,1.99224889 48.8798,1.97755259",
                                                                                    fill: s,
                                                                                }),
                                                                                ui(
                                                                                    "g",
                                                                                    { transform: "translate(49.500000, 0.000000)" },
                                                                                    ui("mask", { id: "mask-11", fill: i }, ui("use", { href: "#path-10" })),
                                                                                    ui("path", {
                                                                                        d:
                                                                                            "M1.301675,3.9731437 L3.039925,2.16715852 C3.072675,2.13302519 3.080925,2.08395852 3.061425,2.04200296 C3.041925,2.00004741 2.997925,1.97278815 2.949425,1.97278815 L2.373425,1.97278815 C2.338925,1.97278815 2.306425,1.98629926 2.283175,2.01047704 L0.797175,3.54979556 L0.797175,0.344343704 C0.797175,0.280343704 0.742425,0.228195556 0.674675,0.228195556 L0.229175,0.228195556 C0.161425,0.228195556 0.106675,0.280343704 0.106675,0.344343704 L0.106675,6.13184 C0.106675,6.19607704 0.161425,6.24822519 0.229175,6.24822519 L0.674675,6.24822519 C0.742425,6.24822519 0.797175,6.19607704 0.797175,6.13184 L0.797175,4.41948444 L2.370925,6.20650667 C2.394175,6.23281778 2.428675,6.24822519 2.464925,6.24822519 L3.049925,6.24822519 C3.097675,6.24822519 3.140675,6.22191407 3.160925,6.18090667 C3.181175,6.14037333 3.174425,6.09178074 3.143925,6.05741037 L1.301675,3.9731437 Z",
                                                                                        fill: s,
                                                                                        mask: "url(#mask-11)",
                                                                                    })
                                                                                ),
                                                                                ui(
                                                                                    "g",
                                                                                    { transform: "translate(53.250000, 0.000000)" },
                                                                                    ui("mask", { id: "mask-13", fill: i }, ui("use", { href: "#path-12" })),
                                                                                    ui("path", {
                                                                                        d:
                                                                                            "M1.4384,3.9731437 L3.1764,2.16715852 C3.20915,2.13302519 3.2174,2.08395852 3.1979,2.04200296 C3.1784,2.00004741 3.1344,1.97278815 3.0859,1.97278815 L2.51015,1.97278815 C2.47565,1.97278815 2.44315,1.98629926 2.4199,2.01047704 L0.9339,3.54979556 L0.9339,0.344343704 C0.9339,0.280343704 0.87915,0.228195556 0.8114,0.228195556 L0.3659,0.228195556 C0.29815,0.228195556 0.2434,0.280343704 0.2434,0.344343704 L0.2434,6.13184 C0.2434,6.19607704 0.29815,6.24822519 0.3659,6.24822519 L0.8114,6.24822519 C0.87915,6.24822519 0.9339,6.19607704 0.9339,6.13184 L0.9339,4.41948444 L2.5074,6.20650667 C2.53065,6.23281778 2.56515,6.24822519 2.6014,6.24822519 L3.18665,6.24822519 C3.2344,6.24822519 3.2774,6.22191407 3.29765,6.18090667 C3.3179,6.14037333 3.31115,6.09178074 3.28065,6.05741037 L1.4384,3.9731437 Z",
                                                                                        fill: s,
                                                                                        mask: "url(#mask-13)",
                                                                                    })
                                                                                ),
                                                                                ui(
                                                                                    "g",
                                                                                    { transform: "translate(74.500000, 0.000000)" },
                                                                                    ui("mask", { id: "mask-15", fill: i }, ui("use", { href: "#path-14" })),
                                                                                    ui("path", {
                                                                                        d:
                                                                                            "M1.2404,3.9731437 L2.9784,2.16715852 C3.01115,2.13302519 3.0194,2.08395852 2.9999,2.04200296 C2.9804,2.00004741 2.9364,1.97278815 2.8879,1.97278815 L2.3119,1.97278815 C2.2774,1.97278815 2.2449,1.98629926 2.22165,2.01047704 L0.7359,3.54955852 L0.7359,0.344343704 C0.7359,0.280343704 0.68115,0.228195556 0.6134,0.228195556 L0.1679,0.228195556 C0.10015,0.228195556 0.0454,0.280343704 0.0454,0.344343704 L0.0454,6.13184 C0.0454,6.19607704 0.10015,6.24822519 0.1679,6.24822519 L0.6134,6.24822519 C0.68115,6.24822519 0.7359,6.19607704 0.7359,6.13184 L0.7359,4.41995852 L2.3094,6.20650667 C2.33265,6.23281778 2.36715,6.24822519 2.4034,6.24822519 L2.9884,6.24822519 C3.03615,6.24822519 3.07915,6.22191407 3.09965,6.18090667 C3.11965,6.14037333 3.1129,6.09178074 3.0824,6.05741037 L1.2404,3.9731437 Z",
                                                                                        fill: s,
                                                                                        mask: "url(#mask-15)",
                                                                                    })
                                                                                ),
                                                                                ui(
                                                                                    "g",
                                                                                    { transform: "translate(78.250000, 0.000000)" },
                                                                                    ui("mask", { id: "mask-17", fill: i }, ui("use", { href: "#path-16" })),
                                                                                    ui("path", {
                                                                                        d:
                                                                                            "M1.377125,3.9731437 L3.115125,2.16715852 C3.147875,2.13302519 3.156125,2.08395852 3.136625,2.04200296 C3.117125,2.00004741 3.073125,1.97278815 3.024625,1.97278815 L2.448625,1.97278815 C2.414125,1.97278815 2.381625,1.98629926 2.358375,2.01047704 L0.872375,3.54979556 L0.872375,0.344343704 C0.872375,0.280343704 0.817625,0.228195556 0.749875,0.228195556 L0.304375,0.228195556 C0.236625,0.228195556 0.181875,0.280343704 0.181875,0.344343704 L0.181875,6.13184 C0.181875,6.19607704 0.236625,6.24822519 0.304375,6.24822519 L0.749875,6.24822519 C0.817625,6.24822519 0.872375,6.19607704 0.872375,6.13184 L0.872375,4.41948444 L2.446125,6.20650667 C2.469375,6.23281778 2.503875,6.24822519 2.540125,6.24822519 L3.125125,6.24822519 C3.172875,6.24822519 3.215875,6.22191407 3.236375,6.18090667 C3.256375,6.14037333 3.249625,6.09178074 3.219125,6.05741037 L1.377125,3.9731437 Z",
                                                                                        fill: s,
                                                                                        mask: "url(#mask-17)",
                                                                                    })
                                                                                ),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M58.732575,5.68936296 C58.439825,5.68936296 58.209325,5.65238519 58.047825,5.57937778 C57.899325,5.51253333 57.782075,5.37078519 57.699325,5.15863704 C57.610075,4.9298963 57.564825,4.576 57.564825,4.10642963 C57.564825,3.63733333 57.610075,3.28201481 57.699325,3.05042963 C57.781825,2.83685926 57.898825,2.69534815 58.046575,2.63063704 C58.209075,2.55952593 58.439825,2.52373333 58.732575,2.52373333 C59.020325,2.52373333 59.250075,2.55952593 59.415075,2.63063704 C59.565825,2.69582222 59.685075,2.83757037 59.769575,3.05161481 C59.861575,3.28248889 59.907825,3.63733333 59.907825,4.10642963 C59.907825,4.57576296 59.861575,4.92942222 59.769825,5.15768889 C59.685075,5.37007407 59.565075,5.51205926 59.414325,5.57914074 C59.249825,5.65238519 59.020575,5.68936296 58.732575,5.68936296 M59.771825,2.10512593 C59.508075,1.98731852 59.158325,1.92734815 58.732575,1.92734815 C58.306325,1.92734815 57.958325,1.9858963 57.697825,2.1010963 C57.424575,2.22222222 57.215075,2.44835556 57.075325,2.77333333 C56.942075,3.08432593 56.874325,3.5328 56.874325,4.10642963 C56.874325,4.6701037 56.942075,5.11478519 57.075325,5.42814815 C57.214825,5.7554963 57.425075,5.98542222 57.700075,6.11128889 C57.964575,6.23217778 58.311575,6.29357037 58.732575,6.29357037 C59.158575,6.29357037 59.508575,6.23217778 59.772825,6.11128889 C60.048325,5.98518519 60.258325,5.75668148 60.397325,5.43217778 C60.530575,5.12118519 60.598575,4.67508148 60.598575,4.10642963 C60.598575,3.53848889 60.530575,3.09238519 60.397325,2.78068148 C60.258075,2.45617778 60.047825,2.22885926 59.771825,2.10512593",
                                                                                    fill: s,
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M64.20645,4.09908148 C64.20645,5.1693037 63.87745,5.68936296 63.19995,5.68936296 C62.8272,5.68936296 62.43195,5.5808 62.0247,5.36651852 L62.0247,2.85771852 C62.2282,2.75958519 62.4192,2.67922963 62.59295,2.61902222 C62.7757,2.5554963 62.97995,2.52373333 63.19995,2.52373333 C63.4832,2.52373333 63.7147,2.64557037 63.90745,2.89682963 C64.10595,3.15591111 64.20645,3.56077037 64.20645,4.09908148 M63.2997,1.92734815 C63.0547,1.92734815 62.78745,1.98115556 62.5057,2.08734815 C62.30445,2.16296296 62.12945,2.24284444 61.9832,2.32533333 L61.92195,2.06364444 C61.9097,2.01031111 61.8597,1.97262222 61.80245,1.97262222 L61.4567,1.97262222 C61.38895,1.97262222 61.3342,2.02477037 61.3342,2.08900741 L61.3342,7.9296 C61.3342,7.99383704 61.38895,8.04574815 61.4567,8.04574815 L61.9022,8.04574815 C61.96995,8.04574815 62.0247,7.99383704 62.0247,7.9296 L62.0247,5.96077037 C62.19345,6.04562963 62.3712,6.11721481 62.55545,6.17386667 C62.8122,6.25327407 63.0627,6.29357037 63.2997,6.29357037 C64.35945,6.29357037 64.8972,5.5552 64.8972,4.09908148 C64.8972,3.49985185 64.77145,2.98808889 64.52345,2.57754074 C64.2632,2.14613333 63.85145,1.92734815 63.2997,1.92734815",
                                                                                    fill: s,
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M67.38835,5.62915556 C66.91085,5.75265185 66.61485,5.74459259 66.3756,5.56325926 C66.2516,5.46915556 66.19135,5.31531852 66.19135,5.0925037 L66.19135,4.90311111 C66.19135,4.69973333 66.25035,4.54234074 66.37235,4.42216296 C66.4921,4.30364444 66.6886,4.23917037 66.95685,4.23016296 L68.2581,4.18204444 L68.2581,5.35348148 L67.9846,5.45042963 C67.8086,5.51253333 67.6081,5.5725037 67.38835,5.62915556 M67.4206,1.90435556 C66.95785,1.90435556 66.46885,1.93801481 65.96735,2.00414815 C65.90685,2.01220741 65.86185,2.06127407 65.86185,2.11911111 L65.86185,2.38459259 C65.86185,2.44882963 65.9166,2.50097778 65.98435,2.50097778 L67.26685,2.50097778 C67.6521,2.50097778 67.9166,2.56379259 68.05385,2.68847407 C68.18935,2.8114963 68.2581,3.00562963 68.2581,3.26447407 L68.2581,3.70962963 L66.8831,3.70962963 C66.4486,3.70962963 66.1066,3.81700741 65.86635,4.02915556 C65.62385,4.2432 65.50085,4.53475556 65.50085,4.89528889 L65.50085,5.16859259 C65.50085,5.51324444 65.61035,5.7901037 65.8256,5.99087407 C66.04035,6.19164444 66.3211,6.29357037 66.66035,6.29357037 C66.8921,6.29357037 67.14185,6.2546963 67.40285,6.17813333 C67.65735,6.10394074 67.88985,6.02168889 68.0931,5.93422222 C68.1851,5.89463704 68.2541,5.86405926 68.30635,5.83988148 L68.3676,6.15324444 C68.37835,6.208 68.42885,6.24805926 68.48785,6.24805926 L68.82585,6.24805926 C68.8936,6.24805926 68.94835,6.19614815 68.94835,6.13191111 L68.94835,3.24195556 C68.94835,2.79585185 68.8216,2.45712593 68.5716,2.23573333 C68.32385,2.016 67.93635,1.90435556 67.4206,1.90435556",
                                                                                    fill: s,
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M72.05925,1.90440296 C71.77425,1.90440296 71.48575,1.95702519 71.20125,2.0601363 C70.9805,2.14049185 70.7715,2.2393363 70.5785,2.35477333 L70.50425,2.06179556 C70.49125,2.00941037 70.44175,1.97266963 70.38525,1.97266963 L70.055,1.97266963 C69.9875,1.97266963 69.9325,2.02481778 69.9325,2.08881778 L69.9325,6.13195852 C69.9325,6.19595852 69.9875,6.24810667 70.055,6.24810667 L70.5005,6.24810667 C70.568,6.24810667 70.623,6.19595852 70.623,6.13195852 L70.623,2.91536593 C70.86175,2.78926222 71.07525,2.69515852 71.2585,2.63471407 C71.4525,2.57118815 71.6805,2.53895111 71.9365,2.53895111 C72.18875,2.53895111 72.3835,2.61646222 72.53225,2.77646222 C72.68475,2.94049185 72.75875,3.14481778 72.75875,3.40105481 L72.75875,6.13195852 C72.75875,6.19595852 72.81375,6.24810667 72.88125,6.24810667 L73.3265,6.24810667 C73.39425,6.24810667 73.44925,6.19595852 73.44925,6.13195852 L73.44925,3.3555437 C73.44925,2.9561363 73.33025,2.61243259 73.096,2.33462519 C72.855,2.04923259 72.506,1.90440296 72.05925,1.90440296",
                                                                                    fill: s,
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M82.751875,1.97269333 L82.306375,1.97269333 C82.238625,1.97269333 82.183875,2.02484148 82.183875,2.08884148 L82.183875,6.13198222 C82.183875,6.19598222 82.238625,6.24813037 82.306375,6.24813037 L82.751875,6.24813037 C82.819625,6.24813037 82.874375,6.19598222 82.874375,6.13198222 L82.874375,2.08884148 C82.874375,2.02484148 82.819625,1.97269333 82.751875,1.97269333",
                                                                                    fill: s,
                                                                                }),
                                                                                ui(
                                                                                    "g",
                                                                                    { transform: "translate(82.000000, 0.237037)" },
                                                                                    ui("mask", { id: "mask-19", fill: i }, ui("use", { href: "#path-18" })),
                                                                                    ui("path", {
                                                                                        d:
                                                                                            "M0.68275,0.211057778 L0.38325,0.211057778 C0.239,0.211057778 0.1455,0.301368889 0.1455,0.441220741 L0.1455,0.979531852 C0.1455,1.0617837 0.1805,1.11393185 0.21,1.14308741 C0.2405,1.17342815 0.29525,1.20969481 0.38325,1.20969481 L0.68275,1.20969481 C0.78525,1.20969481 0.90525,1.14925037 0.90525,0.979531852 L0.90525,0.441220741 C0.90525,0.271502222 0.78525,0.211057778 0.68275,0.211057778 L0.68275,0.211057778 Z",
                                                                                        fill: s,
                                                                                        mask: "url(#mask-19)",
                                                                                    })
                                                                                ),
                                                                                ui("polygon", {
                                                                                    fill: d,
                                                                                    points:
                                                                                        "54.410575 25.6368119 53.503075 25.6368119 51.980825 27.2138193 51.980825 23.8924563 51.290325 23.8924563 51.290325 29.9122489 51.980825 29.9122489 51.980825 28.0835081 53.591325 29.9122489 54.496075 29.9122489 52.485575 27.6371674",
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M38.2935,12.7641126 L40.91225,12.7261867 L40.91225,12.171283 L38.2935,12.133357 L38.2935,10.654957 C38.2935,10.4489719 38.344,10.2948978 38.4435,10.1967644 C38.5435,10.098157 38.68275,10.0505126 38.86975,10.0505126 L41.235,10.0505126 L41.235,9.48233481 L41.1185,9.47688296 C40.2725,9.43658667 39.47975,9.41596444 38.76225,9.41596444 C38.44075,9.41596444 38.16525,9.51149037 37.9435,9.69969778 C37.7175,9.89146074 37.603,10.1948681 37.603,10.6016237 L37.603,15.2160237 L38.2935,15.2160237 L38.2935,12.7641126 Z",
                                                                                    fill: d,
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M42.21085,10.3483733 C42.24135,10.3787141 42.2961,10.4145067 42.3836,10.4145067 L42.68335,10.4145067 C42.78585,10.4145067 42.9056,10.3540622 42.9056,10.1845807 L42.9056,9.64603259 C42.9056,9.47631407 42.78585,9.41586963 42.68335,9.41586963 L42.3836,9.41586963 C42.23935,9.41586963 42.1461,9.50618074 42.1461,9.64603259 L42.1461,10.1845807 C42.1461,10.2665956 42.1811,10.3189807 42.2106,10.3481363 L42.21085,10.3483733 Z",
                                                                                    fill: d,
                                                                                }),
                                                                                ui("mask", { id: "mask-21", fill: i }, ui("use", { href: "#path-20" })),
                                                                                ui("polygon", { fill: d, mask: "url(#mask-21)", points: "42.1845 15.2158815 42.875 15.2158815 42.875 10.9404444 42.1845 10.9404444" }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M47.4611,15.2159763 L47.4611,12.3236504 C47.4611,11.9240059 47.3421,11.5805393 47.10785,11.3027319 C46.86635,11.0171022 46.5176,10.8722726 46.07085,10.8722726 C45.78635,10.8722726 45.4976,10.9246578 45.21335,11.0280059 C44.9921,11.1083615 44.7831,11.2072059 44.59035,11.322643 L44.49335,10.9405393 L43.94435,10.9405393 L43.94435,15.2159763 L44.6346,15.2159763 L44.6346,11.8829985 C44.8736,11.7568948 45.08735,11.6627911 45.2701,11.6028207 C45.46435,11.5388207 45.6926,11.5068207 45.9481,11.5068207 C46.20035,11.5068207 46.39535,11.5843319 46.5441,11.7443319 C46.6966,11.9083615 46.7706,12.1126874 46.7706,12.3689244 L46.7706,15.2159763 L47.4611,15.2159763 Z",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M51.33365,15.2159763 L52.02415,15.2159763 L52.02415,12.3236504 C52.02415,11.9240059 51.90515,11.5805393 51.67115,11.3027319 C51.42965,11.0171022 51.0809,10.8722726 50.63415,10.8722726 C50.34915,10.8722726 50.06065,10.9246578 49.7764,11.0280059 C49.5554,11.1083615 49.3464,11.2072059 49.1534,11.322643 L49.05665,10.9405393 L48.50715,10.9405393 L48.50715,15.2159763 L49.1979,15.2159763 L49.1979,11.8829985 C49.4369,11.7568948 49.65065,11.6627911 49.83365,11.6028207 C50.02715,11.5388207 50.2554,11.5068207 50.5114,11.5068207 C50.76365,11.5068207 50.9584,11.5843319 51.10715,11.7443319 C51.25965,11.9083615 51.33365,12.1126874 51.33365,12.3689244 L51.33365,15.2159763 Z",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("polygon", { fill: d, mask: "url(#mask-21)", points: "53.07025 15.2158815 53.761 15.2158815 53.761 10.9404444 53.07025 10.9404444" }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M53.2697,10.4145778 L53.5692,10.4145778 C53.6717,10.4145778 53.7917,10.3541333 53.7917,10.1844148 L53.7917,9.6461037 C53.7917,9.47638519 53.6717,9.41594074 53.5692,9.41594074 L53.2697,9.41594074 C53.12545,9.41594074 53.03195,9.50625185 53.03195,9.6461037 L53.03195,10.1844148 C53.03195,10.2666667 53.06695,10.3190519 53.0967,10.3482074 C53.1272,10.3785481 53.1817,10.4145778 53.2697,10.4145778",
                                                                                    id: "Fill-52",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M55.15935,13.1527822 C55.3896,13.3137304 55.7216,13.3952711 56.1461,13.3952711 L56.6991,13.3952711 C56.9451,13.3952711 57.12785,13.4412563 57.24285,13.5318044 C57.3526,13.6180859 57.40585,13.7439526 57.40585,13.9165156 L57.40585,14.1137304 C57.40585,14.3467378 57.34735,14.4984415 57.23135,14.5638637 C57.0951,14.6409007 56.87735,14.6800119 56.5836,14.6800119 L54.82535,14.6800119 L54.82535,15.1588267 L54.9261,15.1761304 C55.0501,15.1972267 55.28985,15.2164267 55.65985,15.2346785 C56.0211,15.2522193 56.3111,15.2614637 56.52235,15.2614637 C56.99485,15.2614637 57.36685,15.1813452 57.6286,15.0234785 C57.90835,14.8549452 58.05035,14.5565156 58.05035,14.1362489 L58.05035,13.8785896 C58.05035,13.5313304 57.93135,13.2580267 57.6966,13.0662637 C57.46735,12.8790044 57.15235,12.7837156 56.76035,12.7837156 L56.19985,12.7837156 C55.9266,12.7837156 55.7246,12.7474489 55.59885,12.6751526 C55.49285,12.6147081 55.43935,12.4812563 55.43935,12.2781156 L55.43935,12.1034193 C55.43935,11.8753896 55.4986,11.717997 55.6161,11.6357452 C55.74485,11.54496 55.95435,11.4989748 56.2381,11.4989748 L57.8966,11.4989748 L57.8966,11.0111526 L57.7936,10.9952711 C57.6266,10.9696711 57.3876,10.9473896 57.08285,10.9293748 C56.77935,10.9118341 56.5161,10.9028267 56.29985,10.9028267 C55.78935,10.9028267 55.42085,10.9971674 55.17335,11.1910637 C54.92235,11.3880415 54.79485,11.6950044 54.79485,12.1034193 L54.79485,12.3082193 C54.79485,12.6998044 54.9176,12.9840119 55.15935,13.1527822",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M61.668375,12.3615763 L61.668375,15.2159763 L62.358875,15.2159763 L62.358875,12.3236504 C62.358875,11.9138133 62.238125,11.5672652 62.000375,11.2939615 C61.756875,11.0140207 61.409875,10.8722726 60.968875,10.8722726 C60.683875,10.8722726 60.394125,10.9246578 60.107625,11.0277689 C59.902625,11.1017244 59.709875,11.1910874 59.532625,11.2944356 L59.532625,9.1961837 L58.841875,9.1961837 L58.841875,15.2159763 L59.532625,15.2159763 L59.532625,11.8829985 C59.771625,11.7571319 59.985125,11.6630281 60.167875,11.6028207 C60.361625,11.5388207 60.590125,11.5068207 60.846125,11.5068207 C61.098375,11.5068207 61.293125,11.5843319 61.441625,11.7440948 C61.594125,11.9085985 61.668375,12.1105541 61.668375,12.3615763",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M41.2896,19.6944356 C41.2896,20.3666726 41.2346,20.874643 41.1261,21.2031763 C41.0241,21.5127467 40.8696,21.7208652 40.66735,21.821843 C40.45385,21.9285096 40.13585,21.9825541 39.72235,21.9825541 C39.2936,21.9825541 38.96785,21.9285096 38.7541,21.821843 C38.5526,21.7211022 38.40235,21.515117 38.3076,21.2093393 C38.20635,20.8829393 38.1551,20.3730726 38.1551,19.6944356 C38.1551,19.0020504 38.2151,18.4784356 38.33335,18.1380504 C38.44535,17.815443 38.6046,17.6018726 38.80685,17.5032652 C39.0211,17.3982578 39.3291,17.3453985 39.72235,17.3453985 C40.13585,17.3453985 40.4541,17.3982578 40.6686,17.5032652 C40.86985,17.6013985 41.02385,17.8116504 41.12585,18.1280948 C41.23435,18.4646874 41.2896,18.9916207 41.2896,19.6944356 M41.01035,16.9474133 C40.6946,16.7957096 40.26135,16.7184356 39.72235,16.7184356 C39.19885,16.7184356 38.77185,16.7957096 38.45385,16.9471763 C38.1241,17.1045689 37.87285,17.4070281 37.70635,17.8460207 C37.5461,18.2684207 37.46485,18.8904059 37.46485,19.6944356 C37.46485,20.4982281 37.54485,21.1149985 37.7026,21.527917 C37.86685,21.9579022 38.11535,22.2501689 38.44085,22.3971319 C38.75285,22.5379319 39.18385,22.609517 39.72235,22.609517 C40.2606,22.609517 40.6916,22.5379319 41.00385,22.3971319 C41.3296,22.2499319 41.57785,21.9576652 41.7421,21.527917 C41.89985,21.1149985 41.97985,20.4982281 41.97985,19.6944356 C41.97985,18.8863763 41.90135,18.263443 41.74635,17.8429393 C41.5851,17.406317 41.3376,17.1048059 41.01035,16.9474133",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M45.212575,18.2203733 C44.927325,18.2203733 44.638825,18.2729956 44.354825,18.3761067 C44.133575,18.4564622 43.924825,18.5553067 43.731825,18.6705067 L43.634825,18.28864 L43.085575,18.28864 L43.085575,22.564077 L43.776325,22.564077 L43.776325,19.2313363 C44.015325,19.1049956 44.228825,19.0108919 44.411825,18.9509215 C44.605575,18.8871585 44.833825,18.8549215 45.089825,18.8549215 C45.342325,18.8549215 45.536825,18.9324326 45.685575,19.0924326 C45.838075,19.2566993 45.912325,19.4610252 45.912325,19.7170252 L45.912325,22.564077 L46.602825,22.564077 L46.602825,19.6717511 C46.602825,19.2723437 46.483825,18.928877 46.249075,18.6508326 C46.007825,18.365203 45.658825,18.2203733 45.212575,18.2203733",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M50.09245,16.7641126 L49.79295,16.7641126 C49.64845,16.7641126 49.55495,16.8544237 49.55495,16.9942756 L49.55495,17.5325867 C49.55495,17.6143644 49.5897,17.6665126 49.61895,17.6959052 L49.61995,17.6968533 C49.65045,17.726957 49.70545,17.7627496 49.79295,17.7627496 L50.09245,17.7627496 C50.19495,17.7627496 50.31495,17.7023052 50.31495,17.5325867 L50.31495,16.9942756 C50.31495,16.824557 50.19495,16.7641126 50.09245,16.7641126",
                                                                                    id: "Fill-57",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("polygon", { fill: d, mask: "url(#mask-21)", points: "49.59325 22.5640296 50.284 22.5640296 50.284 18.2885926 49.59325 18.2885926" }),
                                                                                ui("polygon", { fill: d, mask: "url(#mask-21)", points: "47.71725 22.5640296 48.408 22.5640296 48.408 16.544 47.71725 16.544" }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M53.753575,18.2203733 C53.468325,18.2203733 53.179825,18.2729956 52.895825,18.3761067 C52.674575,18.4564622 52.465825,18.5553067 52.272825,18.6705067 L52.175825,18.28864 L51.626575,18.28864 L51.626575,22.564077 L52.317325,22.564077 L52.317325,19.2313363 C52.556325,19.1052326 52.769575,19.0111289 52.952575,18.9509215 C53.146325,18.8871585 53.374575,18.8549215 53.630825,18.8549215 C53.883075,18.8549215 54.077575,18.9324326 54.226325,19.0924326 C54.378825,19.2566993 54.453075,19.4610252 54.453075,19.7170252 L54.453075,22.564077 L55.143575,22.564077 L55.143575,19.6717511 C55.143575,19.2723437 55.024575,18.928877 54.790075,18.6508326 C54.548825,18.365203 54.200075,18.2203733 53.753575,18.2203733",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M58.651775,19.6791704 C58.651775,19.8792296 58.607525,20.0148148 58.520275,20.0821333 C58.425525,20.1556148 58.260275,20.1925926 58.029275,20.1925926 L56.532025,20.1925926 C56.538275,19.8330074 56.573525,19.5523556 56.637025,19.357037 C56.702275,19.1572148 56.806525,19.0218667 56.956025,18.9426963 C57.114025,18.8590222 57.351025,18.8168296 57.660775,18.8168296 C57.925525,18.8168296 58.133025,18.8436148 58.276775,18.896237 C58.406775,18.9438815 58.498025,19.0230519 58.556275,19.1382519 C58.619775,19.2629333 58.651775,19.4452148 58.651775,19.6791704 M59.103275,22.5252741 L59.211525,22.5134222 L59.211525,22.0282074 L57.737525,22.0282074 C57.401775,22.0282074 57.146525,21.9836444 56.979025,21.8952296 C56.818775,21.8106074 56.710775,21.6785778 56.648275,21.4913185 C56.588025,21.3095111 56.552275,21.0558815 56.541775,20.7361185 L58.060275,20.7361185 C58.451025,20.7361185 58.757525,20.6519704 58.970775,20.4858074 C59.191775,20.3146667 59.303775,20.0430222 59.303775,19.6791704 C59.303775,19.3285926 59.244775,19.0446222 59.128275,18.8360296 C59.007025,18.6196148 58.820275,18.4636444 58.572775,18.3723852 C58.339025,18.2868148 58.032275,18.2432 57.660775,18.2432 C57.217775,18.2432 56.861275,18.3090963 56.601275,18.4387556 C56.330525,18.5741037 56.133775,18.8064 56.016775,19.1294815 C55.905275,19.4359704 55.848525,19.868563 55.848525,20.4149333 C55.848525,20.9563259 55.902275,21.3867852 56.008275,21.6949333 C56.119775,22.0203852 56.310525,22.2578963 56.574525,22.4008296 C56.830275,22.5392593 57.188025,22.6094222 57.637525,22.6094222 C58.101025,22.6094222 58.594025,22.5809778 59.103275,22.5252741",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M38.2935,26.6307793 L38.2935,24.7392237 L39.707,24.7392237 C40.294,24.7392237 40.5675,25.0253274 40.5675,25.6392533 C40.5675,25.94432 40.489,26.1901274 40.334,26.3700385 C40.183,26.545683 39.993,26.6307793 39.753,26.6307793 L38.2935,26.6307793 Z M38.2935,27.2195793 L39.7685,27.2195793 C40.061,27.2195793 40.29575,27.3034904 40.4865,27.4755793 C40.6755,27.646483 40.76725,27.87712 40.76725,28.1805274 C40.76725,28.6060089 40.68275,28.8994607 40.51625,29.0528237 C40.349,29.2071348 40.09725,29.285357 39.7685,29.285357 L38.2935,29.285357 L38.2935,27.2195793 Z M40.63425,26.8919941 C40.76925,26.8064237 40.88875,26.6893274 40.99175,26.5416533 C41.158,26.3034311 41.2425,26.0023941 41.2425,25.6470756 C41.2425,24.6429867 40.71425,24.1124978 39.71475,24.1124978 L37.603,24.1124978 L37.603,29.91232 L39.77625,29.91232 C40.313,29.91232 40.7285,29.7857422 41.0115,29.5361422 C41.29725,29.2844089 41.44225,28.8513422 41.44225,28.2487941 C41.44225,27.8166756 41.327,27.4762904 41.0995,27.2380681 C40.95575,27.0873126 40.80025,26.9714015 40.63425,26.8919941 L40.63425,26.8919941 Z",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M44.049475,29.2935111 C43.567225,29.4170074 43.274725,29.4084741 43.036725,29.2276148 C42.912725,29.1337481 42.852725,28.9801481 42.852725,28.7568593 L42.852725,28.5674667 C42.852725,28.3636148 42.911725,28.2064593 43.033475,28.0862815 C43.152975,27.968 43.349475,27.9035259 43.617975,27.8945185 L44.919225,27.8464 L44.919225,29.017837 L44.645225,29.1145481 C44.471975,29.1759407 44.271725,29.2361481 44.049475,29.2935111 M44.081725,25.5687111 C43.617225,25.5687111 43.128225,25.6023704 42.628475,25.6685037 L42.522975,25.6827259 L42.522975,26.1653333 L43.927975,26.1653333 C44.313225,26.1653333 44.577975,26.2281481 44.714975,26.3528296 C44.850475,26.4758519 44.919225,26.6699852 44.919225,26.9288296 L44.919225,27.3739852 L43.544225,27.3739852 C43.109475,27.3739852 42.767475,27.4816 42.527475,27.6935111 C42.284975,27.9073185 42.161975,28.1988741 42.161975,28.5596444 L42.161975,28.8329481 C42.161975,29.1771259 42.271225,29.4537481 42.486475,29.6549926 C42.701475,29.856 42.982475,29.9579259 43.321475,29.9579259 C43.552225,29.9579259 43.801975,29.9190519 44.063975,29.8424889 C44.318475,29.7682963 44.550975,29.6860444 44.754475,29.5985778 C44.846475,29.5589926 44.915225,29.5281778 44.967475,29.504237 L45.047225,29.9121778 L45.609475,29.9121778 L45.609475,26.9063111 C45.609475,26.4602074 45.482725,26.1214815 45.232725,25.8998519 C44.984975,25.6801185 44.597725,25.5687111 44.081725,25.5687111",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M48.907625,25.5687585 C48.622625,25.5687585 48.334125,25.6213807 48.049875,25.7244919 C47.828875,25.8046104 47.620125,25.9034548 47.426875,26.0191289 L47.329875,25.6370252 L46.780625,25.6370252 L46.780625,29.9122252 L47.471375,29.9122252 L47.471375,26.5797215 C47.709125,26.4538548 47.922875,26.3597511 48.107125,26.2990696 C48.300125,26.2355437 48.528125,26.2033067 48.784875,26.2033067 C49.037125,26.2033067 49.231875,26.2808178 49.380625,26.4408178 C49.533125,26.6046104 49.607125,26.8089363 49.607125,27.0654104 L49.607125,29.9122252 L50.297625,29.9122252 L50.297625,27.0198993 C50.297625,26.6204919 50.178625,26.2772622 49.944375,25.9989807 C49.703375,25.7135881 49.354375,25.5687585 48.907625,25.5687585",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("polygon", { fill: d, mask: "url(#mask-21)", points: "55.21725 29.9121778 55.908 29.9121778 55.908 25.6369778 55.21725 25.6369778" }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M55.716225,24.1124978 L55.416725,24.1124978 C55.272475,24.1124978 55.178975,24.2028089 55.178975,24.3424237 L55.178975,24.8809719 C55.178975,24.9632237 55.213975,25.0153719 55.243475,25.0445274 C55.273975,25.0751052 55.328475,25.1108978 55.416725,25.1108978 L55.716225,25.1108978 C55.818725,25.1108978 55.938725,25.0506904 55.938725,24.8809719 L55.938725,24.3424237 C55.938725,24.1727052 55.818725,24.1124978 55.716225,24.1124978",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M59.166675,25.5687585 C58.881425,25.5687585 58.592925,25.6213807 58.308925,25.7244919 C58.087675,25.8048474 57.878675,25.9036919 57.685675,26.0191289 L57.588675,25.6370252 L57.039675,25.6370252 L57.039675,29.9122252 L57.730425,29.9122252 L57.730425,26.5797215 C57.967675,26.4540919 58.181175,26.3599881 58.365675,26.2990696 C58.559175,26.2355437 58.787175,26.2033067 59.043925,26.2033067 C59.296175,26.2033067 59.490675,26.2808178 59.639425,26.4408178 C59.791925,26.6046104 59.865925,26.8089363 59.865925,27.0654104 L59.865925,29.9122252 L60.556425,29.9122252 L60.556425,27.0198993 C60.556425,26.6204919 60.437425,26.2767881 60.203175,25.9989807 C59.962175,25.7135881 59.613175,25.5687585 59.166675,25.5687585",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                }),
                                                                                ui("path", {
                                                                                    d:
                                                                                        "M62.08805,30.3800889 C62.08805,30.1537185 62.16505,29.9894519 62.32305,29.8778074 C62.49205,29.7581037 62.6943,29.7000296 62.94105,29.7000296 L64.07005,29.7000296 C64.4113,29.7000296 64.65005,29.7550222 64.7798,29.8640593 C64.90705,29.9707259 64.9688,30.1274074 64.9688,30.342163 L64.9688,30.5166222 C64.9688,30.7420444 64.89005,30.9063111 64.7278,31.0179556 C64.55505,31.1367111 64.3028,31.1969185 63.97805,31.1969185 L62.98705,31.1969185 C62.6868,31.1969185 62.4558,31.1454815 62.30055,31.0433185 C62.1573,30.9489778 62.08805,30.7941926 62.08805,30.5697185 L62.08805,30.3800889 Z M64.54655,27.1184593 C64.54655,27.6655407 64.2463,27.9201185 63.60155,27.9201185 L63.13305,27.9201185 C62.5773,27.9201185 62.31855,27.6463407 62.31855,27.0577778 C62.31855,26.7550815 62.3953,26.5367704 62.5463,26.4087704 C62.7018,26.2772148 62.93555,26.2106074 63.24055,26.2106074 L63.6783,26.2106074 C64.27055,26.2106074 64.54655,26.4990815 64.54655,27.1184593 L64.54655,27.1184593 Z M65.62855,25.6293926 L63.3248,25.6293926 C61.9478,25.6293926 61.6588,26.3978667 61.6588,27.0426074 C61.6588,27.3180444 61.72155,27.5721481 61.8453,27.7980444 C61.9318,27.9552 62.05855,28.0865185 62.22355,28.1912889 C61.8153,28.3617185 61.72005,28.6679704 61.72005,28.9161481 C61.72005,29.0702222 61.76205,29.2079407 61.8443,29.3257481 C61.88505,29.3838222 61.9348,29.4359704 61.9928,29.4814815 C61.85355,29.561363 61.73455,29.6623407 61.6378,29.7825185 C61.4938,29.9614815 61.42055,30.1831111 61.42055,30.4407704 L61.42055,30.6379852 C61.42055,31.0037333 61.56005,31.2874667 61.8348,31.481837 C62.0983,31.6683852 62.45505,31.762963 62.89505,31.762963 L64.01605,31.762963 C64.52405,31.762963 64.92255,31.6532148 65.20005,31.4368 C65.4843,31.2146963 65.62855,30.8977778 65.62855,30.4938667 L65.62855,30.3118222 C65.62855,29.9185778 65.50005,29.6168296 65.24705,29.4153481 C64.99955,29.2183704 64.6218,29.1185778 64.1238,29.1185778 L62.6953,29.1185778 C62.59755,29.1185778 62.51655,29.0958222 62.4473,29.049363 C62.41205,29.0251852 62.36455,28.9796741 62.36455,28.8632889 C62.36455,28.6926222 62.4413,28.6312296 62.49905,28.5997037 C62.61005,28.5394963 62.78455,28.5089185 63.01805,28.5089185 L63.64755,28.5089185 C64.1883,28.5089185 64.58855,28.3761778 64.8368,28.1137778 C65.08205,27.8554074 65.2063,27.5358815 65.2063,27.1642074 C65.2063,26.918163 65.1723,26.7121778 65.1053,26.5521778 C65.03605,26.3872 64.95555,26.2665481 64.85905,26.1833481 C64.8503,26.1755259 64.8413,26.1677037 64.83205,26.1601185 L65.62855,26.1124741 L65.62855,25.6293926 Z",
                                                                                    fill: d,
                                                                                    mask: "url(#mask-21)",
                                                                                })
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            );
                                                        },
                                                    })
                                                );
                                            })({ logoColor: e.logoColor, optional: e.optional });
                                        },
                                    })
                                    : null),
                            (e[ct.BLIK] = null),
                            (e[ct.TRUSTLY] = null),
                            (e[ct.ZIMPLER] = null),
                            (e[ct.WECHATPAY] = null),
                            (e[ct.OXXO] = null),
                            (e[ct.BOLETO] = null),
                            (e[ct.BOLETOBANCARIO] = null),
                            (e[ct.MAXIMA] = null),
                            (e[ct.MERCADOPAGO] = null),
                            (e[ct.MULTIBANCO] = null),
                            e
                    );
                });
            }
            function bu(e, n) {
                var t = n.layout,
                    r = n.platform,
                    o = n.fundingSource,
                    i = n.fundingEligibility,
                    a = n.components,
                    u = n.onShippingChange,
                    l = n.onShippingAddressChange,
                    c = n.onShippingOptionsChange,
                    s = n.flow,
                    d = n.wallet,
                    f = n.applePaySupport,
                    p = n.supportsPopups,
                    h = n.supportedNativeBrowser,
                    m = n.experiment;
                if (!i[e] || !i[e].eligible) return !1;
                var g = wu()[e];
                if (!g) return !1;
                if (!g.enabled) return !1;
                if (!g.automatic && e !== o) return !1;
                if (g.eligible && !g.eligible({ components: a, experiment: m, fundingSource: o, fundingEligibility: i, layout: t, wallet: d })) return !1;
                if (t && g.layouts && -1 === g.layouts.indexOf(t) && (!o || t !== Ha.HORIZONTAL)) return !1;
                if (g.platforms && -1 === g.platforms.indexOf(r)) return !1;
                if (g.requires) {
                    var y = g.requires({ platform: r });
                    if (!0 === y.popup && !1 === p) return !1;
                    if (!0 === y.applepay && !1 === f) return !1;
                    if (!0 === y.native && !1 === h) return !1;
                }
                return !((!1 === g.shippingChange && (u || l || c)) || (g.flows && s && -1 === g.flows.indexOf(s)));
            }
            function Cu(e) {
                var n = e.fundingSource,
                    t = e.layout,
                    r = e.platform,
                    o = e.fundingEligibility,
                    i = e.components,
                    a = e.onShippingChange,
                    u = e.onShippingAddressChange,
                    l = e.onShippingOptionsChange,
                    c = e.flow,
                    s = e.wallet,
                    d = e.applePaySupport,
                    f = e.supportsPopups,
                    p = e.supportedNativeBrowser,
                    h = e.experiment;
                if (n) return [n];
                var m = Na.filter(function (e) {
                    return bu(e, {
                        layout: t,
                        platform: r,
                        fundingSource: n,
                        fundingEligibility: o,
                        components: i,
                        onShippingChange: a,
                        onShippingAddressChange: u,
                        onShippingOptionsChange: l,
                        flow: c,
                        wallet: s,
                        applePaySupport: d,
                        supportsPopups: f,
                        supportedNativeBrowser: p,
                        experiment: h,
                    });
                });
                return t === Ha.HORIZONTAL ? (m = m.slice(0, 2)) : t === Ha.VERTICAL && (m = m.slice(0, 6)), m;
            }
            var Eu = (((pu = {})[Ha.HORIZONTAL] = ja.SMALL), (pu[Ha.VERTICAL] = ja.MEDIUM), pu),
                Lu = (((hu = {})[Ha.HORIZONTAL] = ja.HUGE), (hu[Ha.VERTICAL] = ja.HUGE), hu),
                xu =
                    (((mu = {})[ja.TINY] = { defaultWidth: 75, defaultHeight: 25, minWidth: 75, maxWidth: 150, minHeight: 25, maxHeight: 30 }),
                        (mu[ja.SMALL] = { defaultWidth: 150, defaultHeight: 25, minWidth: 150, maxWidth: 200, minHeight: 25, maxHeight: 55 }),
                        (mu[ja.MEDIUM] = { defaultWidth: 250, defaultHeight: 35, minWidth: 200, maxWidth: 300, minHeight: 35, maxHeight: 55 }),
                        (mu[ja.LARGE] = { defaultWidth: 350, defaultHeight: 45, minWidth: 300, maxWidth: 500, minHeight: 30, maxHeight: 55 }),
                        (mu[ja.HUGE] = { defaultWidth: 500, defaultHeight: 55, minWidth: 500, maxWidth: 750, minHeight: 40, maxHeight: 55 }),
                        mu),
                Ou = { LOCALE: { country: ot.US, lang: it.EN }, COMMIT: !0, VAULT: !1, INTENT: "capture", ENV: lt.PRODUCTION, PLATFORM: st.DESKTOP };
            function Pu(e, n) {
                if (!n) throw new Error("Expected props.style to be set");
                var t = (e = e || {}).fundingSource,
                    r = wu(),
                    o = r[t || ct.PAYPAL] || r[ct.PAYPAL];
                if (!o) throw new Error("Expected " + (t || ct.PAYPAL) + " to be eligible");
                var i = n.label,
                    a = n.layout,
                    u = void 0 === a ? (t ? Ha.HORIZONTAL : o.layouts[0]) : a,
                    l = n.shape,
                    c = void 0 === l ? o.shapes[0] : l,
                    s = n.tagline,
                    d = void 0 === s ? u === Ha.HORIZONTAL && !t : s,
                    f = n.height,
                    p = n.period,
                    h = n.menuPlacement,
                    m = void 0 === h ? "below" : h,
                    g = n.custom;
                "false" === d && (d = !1);
                var y = n.color ? n.color : o.colors[0];
                if (-1 === je(Ha).indexOf(u)) throw new Error("Invalid layout: " + u);
                if (i && -1 === je(Ba).indexOf(i)) throw new Error("Invalid label: " + i);
                if (y && -1 === o.colors.indexOf(y)) throw new Error("Unexpected style.color for " + (t || ct.PAYPAL) + " button: " + y + ", expected " + o.colors.join(", "));
                if (c && -1 === o.shapes.indexOf(c)) throw new Error("Unexpected style.shape for " + (t || ct.PAYPAL) + " button: " + c + ", expected " + o.shapes.join(", "));
                if (void 0 !== f) {
                    if ("number" != typeof f) throw new TypeError("Expected style.height to be a number, got: " + f);
                    var v = [xu[ja.SMALL].minHeight, xu[ja.HUGE].maxHeight],
                        w = v[0],
                        b = v[1];
                    if (f < w || f > b) throw new Error("Expected style.height to be between " + w + "px and " + b + "px - got " + f + "px");
                }
                if (u === Ha.VERTICAL && d) throw new Error("style.tagline is not allowed for " + Ha.VERTICAL + " layout");
                if (g) {
                    if (g.label && "string" != typeof g.label) throw new Error("style.custom.label is expected to be a String.");
                    if (g.css && "object" != typeof g.css) throw new Error("style.custom.css is expected to be JSON.");
                    if (g.css && g.label && 0 === g.label.length) throw new Error("Expected style.custom.label to be used with style.custom.css");
                    g.label && g.label.length > 0 && !g.css && (g.css = { "background-color": "black", height: "48px", "margin-bottom": "15px" });
                }
                return { custom: g, label: i, layout: u, color: y, shape: c, tagline: d, height: f, period: p, menuPlacement: m };
            }
            var Su = je(ot),
                Tu = je(ct),
                Nu = je(lt),
                Au = je(st);
            function ku(e) {
                var n,
                    t = e.uid,
                    r = e.props,
                    o = e.tag,
                    i = e.context,
                    a = e.frame,
                    u = e.prerenderFrame,
                    l = e.doc,
                    c = e.container,
                    s = e.event;
                if (a && u) {
                    if (c && "button" === c.tagName.toLowerCase()) throw new Error("Do not render the PayPal button into a button element");
                    a.classList.add("component-frame"),
                        u.classList.add("prerender-frame"),
                        a.classList.add("invisible"),
                        u.classList.add("visible"),
                        s.on("zoid-rendered", function () {
                            u.classList.remove("visible"),
                                u.classList.add("invisible"),
                                a.classList.remove("invisible"),
                                a.classList.add("visible"),
                                setTimeout(function () {
                                    jn(u);
                                }, 1e3);
                        });
                    var d = r.style,
                        f = r.nonce,
                        p = d.label,
                        h = d.layout,
                        m = d.height,
                        g = d.menuPlacement,
                        y = Eu[h],
                        v = Lu[h];
                    if (m) {
                        var w = je(ja).filter(function (e) {
                            return xu[e] && m && xu[e].minHeight <= m && xu[e].maxHeight >= m;
                        });
                        w.sort(function (e, n) {
                            return xu[e].defaultWidth - xu[n].defaultWidth;
                        }),
                            (y = w[0]);
                    }
                    var b = ui(
                        "div",
                        x({ id: t, class: o + " " + o + "-context-" + i + " " + o + "-label-" + (p || "unknown") + " " + o + "-layout-" + h }, ((n = {}), (n["data-paypal-smart-button-version"] = "5.0.332"), n), {
                            onRender: function (e) {
                                s.on("zoid-resize", function (n) {
                                    var t = n.width,
                                        r = n.height;
                                    "number" == typeof t && (e.style.width = tt(t)), "number" == typeof r && (e.style.height = tt(r));
                                });
                            },
                        }),
                        ui(
                            "style",
                            { nonce: f },
                            "\n                    #" +
                            t +
                            " {\n                        position: relative;\n                        display: inline-block;\n                        width: 100%;\n                        min-height: " +
                            xu[y].minHeight +
                            "px;\n                        min-width: " +
                            xu[y].minWidth +
                            "px;\n                        max-width: " +
                            xu[v].maxWidth +
                            "px;\n                        font-size: 0;\n                    }\n\n                    #" +
                            t +
                            " > iframe {\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                    }\n\n                    #" +
                            t +
                            " > iframe.component-frame {\n                        z-index: 100;\n                    }\n\n                    #" +
                            t +
                            " > iframe.prerender-frame {\n                        transition: opacity .2s linear;\n                        z-index: 200;\n                    }\n\n                    #" +
                            t +
                            " > iframe.visible {\n                        opacity: 1;\n                    }\n\n                    #" +
                            t +
                            " > iframe.invisible {\n                        opacity: 0;\n                        pointer-events: none;\n                    }\n\n                    #" +
                            t +
                            " > .smart-menu {\n                        position: absolute;\n                        z-index: 300;\n                        " +
                            ("above" === g ? "bottom: 100%;" : "top: 0;") +
                            "\n                        left: 0;\n                        width: 100%;\n                    }\n                "
                        ),
                        ui("node", { el: a }),
                        ui("node", { el: u }),
                        ui("div", { id: "smart-menu", class: "smart-menu" }),
                        ui("div", { id: "installments-modal", class: "installments-modal" })
                    ).render(mi({ doc: l }));
                    return (
                        s.on("zoid-rendered", function () {
                            setTimeout(function () {
                                b.style.transition = "all 0.2s ease-in-out";
                            }, 1e3);
                        }),
                            b
                    );
                }
            }
            function _u() {
                return function () {
                    var e = "[optional]";
                    function n(e) {
                        return [].slice.call(e);
                    }
                    function t(e) {
                        return n(e).filter(function (e) {
                            return "style" !== e.tagName.toLowerCase();
                        });
                    }
                    function r(e, n) {
                        return t((n = n || document).querySelectorAll(e));
                    }
                    function o(e) {
                        e.classList.remove("hidden");
                    }
                    function i(e) {
                        return parseInt(e.getAttribute("optional") || 0, 10);
                    }
                    function a(e) {
                        return (function (e) {
                            for (var n = 0, t = 0; t < e.length; t++) n += e[t];
                            return n;
                        })(
                            e.map(function (e) {
                                return e.offsetWidth;
                            })
                        );
                    }
                    var u = (function (e) {
                        for (var n = [], t = 0; t < e.length; t++) {
                            var r = e[t];
                            -1 === n.indexOf(r) && n.push(r);
                        }
                        return n;
                    })(
                        r(e)
                            .map(function (e) {
                                return e.parentElement;
                            })
                            .filter(Boolean)
                    ).map(function (o) {
                        return {
                            optionalParent: o,
                            allChildren: t(o.children),
                            optionalChildren: n(r(e, o)).sort(function (e, n) {
                                return i(e) - i(n);
                            }),
                        };
                    });
                    function l() {
                        for (var e = 0; e < u.length; e++)
                            for (var n = u[e], t = n.optionalChildren, r = n.optionalParent.offsetWidth, i = a(n.allChildren) - a(t), l = 0; l < t.length; l++) {
                                var c = t[l];
                                (i += c.offsetWidth) > r ? c.classList.add("hidden") : o(c);
                            }
                    }
                    var c,
                        s,
                        d,
                        f = (function (e) {
                            var n = !1;
                            return function () {
                                n || ((n = !0), e.apply(void 0, arguments));
                            };
                        })(
                            ((c = function () {
                                window.addEventListener("resize", l), setTimeout(l), document.body && document.body.classList.add("dom-ready");
                            }),
                            void 0 === s && (s = 50),
                                function () {
                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                    clearTimeout(d),
                                        (d = setTimeout(function () {
                                            c.apply(void 0, n);
                                        }, s));
                                })
                        ),
                        p = function () {
                            l(), f();
                        };
                    l(), document.addEventListener("DOMContentLoaded", p), window.addEventListener("load", p), window.addEventListener("resize", p);
                };
            }
            function Ru(e) {
                return ui("script", { nonce: e.nonce, innerHTML: "(" + _u().toString() + ")()" });
            }
            function Mu(e) {
                var n = e.nonce,
                    t = e.buttonDesignScript,
                    r = "\n        const scriptFns = " + _u().toString() + ";\n        scriptFns();\n        function onDomLoad(){ " + t + " };\n        document.addEventListener('DOMContentLoaded', onDomLoad);\n    ";
                return ui("script", { nonce: n, innerHTML: "(function(){ " + r + "})()" });
            }
            var Fu =
                    "\n    html, body {\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        overflow: hidden;\n        text-align: left;\n    }\n\n    body {\n        display: inline-block;\n        vertical-align: top;\n        border-collapse: collapse;\n    }\n\n    * {\n        touch-callout: none;\n        user-select: none;\n        cursor: default;\n        box-sizing: border-box;\n    }\n\n    span {\n        display: inline-block;\n    }\n\n    ." +
                    qa.HIDDEN +
                    " {\n        position: absolute !important;\n        visibility: hidden !important;\n    }\n\n    ." +
                    qa.HIDDEN +
                    " * {\n        visibility: hidden !important;\n    }\n",
                Iu =
                    "\n\n    ." +
                    qa.CONTAINER +
                    ' {\n        display: block;\n        white-space: nowrap;\n        margin: 0;\n        background: 0;\n        border: 0;\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        text-transform: none;\n        font-weight: 500;\n        font-smoothing: antialiased;\n        z-index: 0;\n        font-size: 0;\n        width: 100%;\n        box-sizing: border-box;\n    }\n\n    .' +
                    qa.BUTTON +
                    " {\n        border: 1px solid transparent;\n        border-radius: 0 3px 3px 0;\n        position: relative;\n        width: 100%;\n        box-sizing: border-box;\n        border: none;\n        vertical-align: top;\n        cursor: pointer;\n        overflow: hidden;\n    }\n\n    ." +
                    qa.BUTTON +
                    " * {\n        cursor: pointer;\n    }\n\n    ." +
                    qa.CONTAINER +
                    "." +
                    qa.ENV +
                    "-" +
                    lt.TEST +
                    " ." +
                    qa.TEXT +
                    " {\n        font-family: Arial !important;\n        background: rgba(0, 0, 0, 0.5) !important;\n        color: transparent  !important;\n        text-shadow: none  !important;\n    }\n\n    ." +
                    qa.CARD +
                    " {\n        cursor: pointer;\n    }\n\n    .paypal-logo {\n        padding: 0;\n        display: inline-block;\n        background: none;\n        border: none;\n        width: auto;\n    }\n\n    ." +
                    qa.TEXT +
                    ", ." +
                    qa.SPACE +
                    " {\n        display: inline-block;\n        white-space: pre;\n        vertical-align: top;\n    }\n\n    ." +
                    qa.BUTTON +
                    " > ." +
                    qa.BUTTON_LABEL +
                    " {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n\n    ." +
                    qa.BUTTON +
                    " > ." +
                    qa.BUTTON_LABEL +
                    " * {\n        vertical-align: middle;\n        height: 100%;\n        text-align: left;\n    }\n\n    ." +
                    qa.TAGLINE +
                    " {\n        max-width: 100%;\n        font-size: initial;\n        font-weight: normal;\n        display: block;\n        text-align: center;\n        width: auto;\n    }\n\n    ." +
                    qa.BUTTON +
                    " ." +
                    qa.SPINNER +
                    " {\n        position: absolute;\n        height: 40px;\n        width: 40px;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        box-sizing: border-box;\n        border: 3px solid rgba(0, 0, 0, .2);\n        border-top-color: rgba(33, 128, 192, 0.8);\n        border-radius: 100%;\n        animation: " +
                    qa.SPINNER +
                    "-rotation .7s infinite linear;\n    }\n\n    @keyframes " +
                    qa.SPINNER +
                    "-rotation {\n        from {\n            transform: translateX(-50%) translateY(-50%) rotate(0deg);\n        }\n        to {\n            transform: translateX(-50%) translateY(-50%) rotate(359deg);\n        }\n    }\n\n    ." +
                    qa.BUTTON +
                    " ." +
                    qa.SPINNER +
                    " {\n        display: none !important;\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.LOADING +
                    " * {\n        display: none !important;\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.LOADING +
                    " ." +
                    qa.SPINNER +
                    " {\n        display: block !important;\n    }\n\n    ." +
                    qa.CONTAINER +
                    " ." +
                    qa.VAULT_HEADER +
                    " {\n        margin-top: 10px;\n    }\n\n    @media only screen and (max-width: 250px) {\n        .menu-button {\n            display: none;\n        }\n        ." +
                    qa.CONTAINER +
                    " ." +
                    qa.BUTTON_ROW +
                    "." +
                    qa.WALLET +
                    "." +
                    qa.WALLET_MENU +
                    " ." +
                    qa.BUTTON +
                    "  {\n            border-top-right-radius: 4px;\n            border-bottom-right-radius: 4px;\n            width: 100%;\n        }\n    }\n",
                Du =
                    "\n\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.TEXT_COLOR +
                    "-black {\n        color: #2C2E2F;\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.TEXT_COLOR +
                    "-white {\n        color: #fff;\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.TEXT_COLOR +
                    "-black ." +
                    qa.SPINNER +
                    " {\n        border: 3px solid rgba(100, 100, 100, .2);\n        border-top-color: rgba(33, 128, 192, 0.8);\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.TEXT_COLOR +
                    "-white ." +
                    qa.SPINNER +
                    " {\n        border: 3px solid rgba(200, 200, 200, 0.2);\n        border-top-color: rgba(255, 255, 255, .85);\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-gold,\n    ." +
                    qa.BUTTON_ROW +
                    "." +
                    qa.COLOR +
                    "-gold .menu-button {\n        background: #ffc439;\n    }\n\n    @media (hover:hover) {\n        ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-gold:hover {\n            filter: brightness(0.95);\n        }\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-gold:focus {\n        outline: none;\n    }\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-gold:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-blue,\n    ." +
                    qa.BUTTON_ROW +
                    "." +
                    qa.COLOR +
                    "-blue .menu-button {\n        background: #0070ba;\n    }\n\n    ." +
                    qa.BUTTON +
                    "[data-funding-source=" +
                    ct.VENMO +
                    "]." +
                    qa.COLOR +
                    "-blue {\n        background: #008CFF;\n    }\n\n    @media (hover:hover) {\n        ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-blue:hover {\n            filter: brightness(0.95);\n        }\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-blue:focus {\n        outline: none;\n    }\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-blue:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #0000a6;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #009cde;\n        pointer-events: none;\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-silver,\n    ." +
                    qa.BUTTON_ROW +
                    "." +
                    qa.COLOR +
                    "-silver .menu-button {\n        background: #eee;\n    }\n\n    @media (hover:hover) {\n        ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-silver:hover {\n            filter: brightness(0.95);\n        }\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-silver:focus {\n        outline: none;\n    }\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-silver:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-darkblue,\n    ." +
                    qa.BUTTON_ROW +
                    "." +
                    qa.COLOR +
                    "-darkblue .menu-button {\n        background: #003087;\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-darkblue:hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-darkblue:focus {\n        outline: none;\n    }\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-darkblue:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-black,\n    ." +
                    qa.BUTTON_ROW +
                    "." +
                    qa.COLOR +
                    "-black .menu-button {\n        background: #2C2E2F;\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-black:hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-black:focus {\n        outline: none;\n    }\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-black:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-white,\n    ." +
                    qa.BUTTON_ROW +
                    "." +
                    qa.COLOR +
                    "-white .menu-button {\n        background: #fff;\n        border: 1px solid #555;\n    }\n\n    @media (hover:hover) {\n        ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-white:hover {\n            filter: brightness(0.95);\n        }\n    }\n    \n\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-white:focus {\n        outline: none;\n    }\n    ." +
                    qa.BUTTON +
                    "." +
                    qa.COLOR +
                    "-white:focus::after {\n        content: '';\n        position: absolute;\n        top: 5px;\n        right: 5px;\n        bottom: 5px;\n        left: 5px;\n        border: 0.125rem solid #009cde;\n        border-radius: inherit;\n        box-shadow: 0 0 0 0.5rem #0000a6;\n        pointer-events: none;\n    }\n\n\n    ." +
                    qa.BUTTON +
                    " ." +
                    qa.CARD +
                    " {\n        position: relative;\n    }\n\n    ." +
                    qa.BUTTON +
                    " ." +
                    qa.CARD +
                    "::after {\n        content: '';\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    ." +
                    qa.BUTTON +
                    " ." +
                    qa.CARD +
                    ":hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
                    qa.BUTTON +
                    " ." +
                    qa.CARD +
                    ":focus {\n        outline: none;\n    }\n\n    ." +
                    qa.BUTTON +
                    " ." +
                    qa.CARD +
                    ":focus::after {\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n";
            function Bu(e) {
                var n = e.style,
                    t = e.nonce,
                    r = n.custom,
                    o = (function (e) {
                        var n = e.custom;
                        return (
                            "\n        " +
                            Fu +
                            "\n        " +
                            Iu +
                            "\n        " +
                            Du +
                            "\n        " +
                            eu +
                            "\n        " +
                            (function (e) {
                                var n = e.height,
                                    t = e.fundingEligibility;
                                return Object.keys(xu)
                                    .map(function (e) {
                                        var r,
                                            o,
                                            i,
                                            a,
                                            u,
                                            l,
                                            c = xu[e],
                                            s = n || c.defaultHeight,
                                            d = Math.max(Math.round(2.2 * s * (100 / 60)), 300),
                                            f = t.paylater,
                                            p =
                                                "DE" === (null == f || null == (r = f.products) || null == (o = r.paylater) ? void 0 : o.variant) ||
                                                "IT" === (null == f || null == (i = f.products) || null == (a = i.payIn3) ? void 0 : a.variant) ||
                                                "ES" === (null == f || null == (u = f.products) || null == (l = u.payIn3) ? void 0 : l.variant),
                                            h = p ? 32 : 36,
                                            m = qe(We(He(s, p ? 32 : 35) + 5, 2), 12),
                                            g = qe(We(He(s, 35) + 5, 2), 12);
                                        return (
                                            "\n            @media only screen and (min-width: " +
                                            c.minWidth +
                                            "px) {\n\n                ." +
                                            qa.CONTAINER +
                                            " {\n                    min-width: " +
                                            c.minWidth +
                                            "px;\n                    max-width: " +
                                            c.maxWidth +
                                            "px;\n                }\n\n                ." +
                                            qa.CONTAINER +
                                            " ." +
                                            qa.BUTTON_ROW +
                                            " ." +
                                            qa.TEXT +
                                            ", ." +
                                            qa.CONTAINER +
                                            " ." +
                                            qa.BUTTON_ROW +
                                            " ." +
                                            qa.SPACE +
                                            " {\n                    font-size: " +
                                            qe(He(s, 36), 10) +
                                            "px;\n                    margin-top: -" +
                                            He(qe(He(s, 36), 10), 10) +
                                            "px;\n                    line-height: " +
                                            g +
                                            "px;\n                }\n\n                ." +
                                            qa.CONTAINER +
                                            " ." +
                                            qa.BUTTON_ROW +
                                            " ." +
                                            qa.TEXT +
                                            " * {\n                    margin-top: " +
                                            He(qe(He(s, 36), 10), 10) +
                                            "px;\n                }\n\n                ." +
                                            qa.BUTTON_ROW +
                                            " {\n                    height: " +
                                            s +
                                            "px;\n                    vertical-align: top;\n                    min-height: " +
                                            (n || c.minHeight) +
                                            "px;\n                    max-height: " +
                                            (n || c.maxHeight) +
                                            "px;\n                }\n\n                ." +
                                            qa.BUTTON_ROW +
                                            "." +
                                            qa.LAYOUT +
                                            "-" +
                                            Ha.VERTICAL +
                                            " {\n                    margin-bottom: " +
                                            He(s, 30) +
                                            "px;\n                }\n\n                ." +
                                            qa.BUTTON_ROW +
                                            "." +
                                            qa.LAYOUT +
                                            "-" +
                                            Ha.VERTICAL +
                                            ":last-of-type {\n                    margin-bottom: 0;\n                }\n\n                ." +
                                            qa.BUTTON +
                                            " {\n                    display: inline-block;\n                    text-align: center;\n                    height: 100%;\n                }\n                \n                ." +
                                            qa.BUTTON +
                                            " ." +
                                            qa.SPINNER +
                                            " {\n                    height: " +
                                            He(s, 50) +
                                            "px;\n                    width: " +
                                            He(s, 50) +
                                            "px;\n                }\n\n                ." +
                                            qa.BUTTON +
                                            " > ." +
                                            qa.BUTTON_LABEL +
                                            " {\n                    margin: 0px 4vw;\n                    height: " +
                                            g +
                                            "px;\n                }\n\n                ." +
                                            qa.BUTTON +
                                            "[data-funding-source=" +
                                            ct.APPLEPAY +
                                            "] ." +
                                            qa.BUTTON_LABEL +
                                            " {\n                    height: " +
                                            (He(s, 80) + 5) +
                                            "px;\n                }\n\n                ." +
                                            qa.BUTTON +
                                            "[data-funding-source=" +
                                            ct.APPLEPAY +
                                            "] ." +
                                            qa.BUTTON_LABEL +
                                            " ." +
                                            qa.TEXT +
                                            " {\n                    line-height: " +
                                            (He(s, 80) + 5) +
                                            "px;\n                }\n\n                ." +
                                            qa.BUTTON +
                                            "[data-funding-source=" +
                                            ct.EPS +
                                            "] ." +
                                            qa.BUTTON_LABEL +
                                            ",\n                ." +
                                            qa.BUTTON +
                                            "[data-funding-source=" +
                                            ct.MYBANK +
                                            "] ." +
                                            qa.BUTTON_LABEL +
                                            " {\n                    height: " +
                                            (He(s, 50) + 5) +
                                            "px;\n                }\n\n                ." +
                                            qa.BUTTON +
                                            "[data-funding-source=" +
                                            ct.EPS +
                                            "] ." +
                                            qa.BUTTON_LABEL +
                                            " ." +
                                            qa.TEXT +
                                            ",\n                ." +
                                            qa.BUTTON +
                                            "[data-funding-source=" +
                                            ct.EPS +
                                            "] ." +
                                            qa.BUTTON_LABEL +
                                            " ." +
                                            qa.SPACE +
                                            ",\n                ." +
                                            qa.BUTTON +
                                            "[data-funding-source=" +
                                            ct.MYBANK +
                                            "] ." +
                                            qa.BUTTON_LABEL +
                                            " ." +
                                            qa.TEXT +
                                            ",\n                ." +
                                            qa.BUTTON +
                                            "[data-funding-source=" +
                                            ct.MYBANK +
                                            "] ." +
                                            qa.BUTTON_LABEL +
                                            " ." +
                                            qa.SPACE +
                                            " {\n                    line-height: " +
                                            (He(s, 50) + 5) +
                                            "px;\n                }\n\n                ." +
                                            qa.BUTTON +
                                            "." +
                                            qa.SHAPE +
                                            "-rect {\n                    border-radius: 4px;\n                }\n\n                ." +
                                            qa.BUTTON +
                                            "." +
                                            qa.SHAPE +
                                            "-pill {\n                    border-radius: " +
                                            Math.ceil(s / 2) +
                                            "px;\n                }\n\n                ." +
                                            qa.BUTTON_ROW +
                                            "." +
                                            qa.SHAPE +
                                            "-rect .menu-button {\n                    border-top-right-radius: 4px;\n                    border-bottom-right-radius: 4px;\n                }\n\n                ." +
                                            qa.BUTTON_ROW +
                                            "." +
                                            qa.SHAPE +
                                            "-pill .menu-button {\n                    border-top-right-radius: " +
                                            Math.ceil(s / 2) +
                                            "px;\n                    border-bottom-right-radius: " +
                                            Math.ceil(s / 2) +
                                            "px;\n                }\n                \n                ." +
                                            qa.TAGLINE +
                                            " ." +
                                            qa.TEXT +
                                            " {\n                    height: " +
                                            He(s, 50) +
                                            "px;\n                    line-height: " +
                                            He(s, 50) +
                                            "px;\n                }\n\n                ." +
                                            qa.CARD +
                                            " {\n                    display: inline-block;\n                    height: 100%;\n                }\n\n                ." +
                                            qa.BUTTON_ROW +
                                            "." +
                                            qa.WALLET +
                                            "." +
                                            qa.WALLET_MENU +
                                            " ." +
                                            qa.BUTTON +
                                            " {\n                    width: calc(100% - " +
                                            (s + 2) +
                                            "px);\n                    border-top-right-radius: 0px;\n                    border-bottom-right-radius: 0px;\n                }\n\n                .menu-button {\n                    height: " +
                                            s +
                                            "px;\n                    width: " +
                                            s +
                                            "px;\n                }\n            }\n\n            @media only screen and (min-width: " +
                                            c.minWidth +
                                            "px) and (max-width: 320px) {\n\n                ." +
                                            qa.CONTAINER +
                                            " ." +
                                            qa.BUTTON_ROW +
                                            " ." +
                                            qa.TEXT +
                                            ", ." +
                                            qa.CONTAINER +
                                            " ." +
                                            qa.BUTTON_ROW +
                                            " ." +
                                            qa.SPACE +
                                            " {\n                    font-size: " +
                                            qe(He(s, h), 10) +
                                            "px;\n                    margin-top: -" +
                                            He(qe(He(s, h), 10), 10) +
                                            "px;\n                    line-height: " +
                                            m +
                                            "px;\n                }\n\n\n                ." +
                                            qa.CONTAINER +
                                            " ." +
                                            qa.BUTTON_ROW +
                                            " ." +
                                            qa.TEXT +
                                            " * {\n                    margin-top: " +
                                            He(qe(He(s, h), 10), 10) +
                                            "px;\n                }\n\n                ." +
                                            qa.BUTTON +
                                            " > ." +
                                            qa.BUTTON_LABEL +
                                            " {\n                    margin: 0px 4vw;\n                    height: " +
                                            m +
                                            "px;\n                }\n            }\n\n            @media only screen and (min-width: " +
                                            c.minWidth +
                                            "px) and (max-width: " +
                                            d +
                                            "px) {\n\n                ." +
                                            qa.BUTTON_ROW +
                                            "." +
                                            qa.LAYOUT +
                                            "-" +
                                            Ha.HORIZONTAL +
                                            "." +
                                            qa.NUMBER +
                                            "-multiple." +
                                            qa.NUMBER +
                                            "-0 {\n                    width: 100%;\n                    margin-right: 0;\n                }\n\n                ." +
                                            qa.BUTTON_ROW +
                                            "." +
                                            qa.LAYOUT +
                                            "-" +
                                            Ha.HORIZONTAL +
                                            "." +
                                            qa.NUMBER +
                                            "-multiple." +
                                            qa.NUMBER +
                                            "-1 {\n                    display: none;\n                }\n\n                ." +
                                            qa.CONTAINER +
                                            "." +
                                            qa.LAYOUT +
                                            "-" +
                                            Ha.HORIZONTAL +
                                            "." +
                                            qa.NUMBER +
                                            "-multiple ." +
                                            qa.TAGLINE +
                                            " {\n                    display: none;\n                }\n            }\n\n            @media only screen and (min-width: " +
                                            qe(c.minWidth, d) +
                                            "px) {\n\n                ." +
                                            qa.BUTTON_ROW +
                                            "." +
                                            qa.LAYOUT +
                                            "-" +
                                            Ha.HORIZONTAL +
                                            "." +
                                            qa.NUMBER +
                                            "-multiple." +
                                            qa.NUMBER +
                                            "-0 {\n                    display: inline-block;\n                    width: calc(50% - " +
                                            He(s, 7) +
                                            "px);\n                    margin-right: " +
                                            2 * He(s, 7) +
                                            "px;\n                }\n\n                ." +
                                            qa.BUTTON_ROW +
                                            "." +
                                            qa.LAYOUT +
                                            "-" +
                                            Ha.HORIZONTAL +
                                            "." +
                                            qa.NUMBER +
                                            "-multiple." +
                                            qa.NUMBER +
                                            "-1 {\n                    display: inline-block;\n                    width: calc(50% - " +
                                            He(s, 7) +
                                            "px);\n                }\n\n                ." +
                                            qa.CONTAINER +
                                            "." +
                                            qa.WALLET +
                                            " ." +
                                            qa.BUTTON_ROW +
                                            "." +
                                            qa.WALLET +
                                            "." +
                                            qa.LAYOUT +
                                            "-" +
                                            Ha.HORIZONTAL +
                                            "." +
                                            qa.NUMBER +
                                            "-multiple {\n                    width: calc(60% - " +
                                            He(s, 7) +
                                            "px);\n                }\n\n                ." +
                                            qa.CONTAINER +
                                            "." +
                                            qa.WALLET +
                                            " ." +
                                            qa.BUTTON_ROW +
                                            ":not(." +
                                            qa.WALLET +
                                            ")." +
                                            qa.LAYOUT +
                                            "-" +
                                            Ha.HORIZONTAL +
                                            "." +
                                            qa.NUMBER +
                                            "-multiple {\n                    width: calc(40% - " +
                                            He(s, 7) +
                                            "px);\n                }\n\n                ." +
                                            qa.CONTAINER +
                                            "." +
                                            qa.LAYOUT +
                                            "-" +
                                            Ha.HORIZONTAL +
                                            "." +
                                            qa.NUMBER +
                                            "-multiple ." +
                                            qa.TAGLINE +
                                            " {\n                    display: block;\n                }\n            }\n\n        "
                                        );
                                    })
                                    .join("\n");
                            })({ height: e.height, fundingEligibility: e.fundingEligibility }) +
                            "\n        " +
                            (function (e) {
                                var n = (e.custom || {}).css;
                                if (!n) return "";
                                var t = "",
                                    r = "",
                                    o = Object.keys(n).reduce(function (e, o) {
                                        return (
                                            "height" === o ? (t = "\n                    height: " + n[o] + ";\n                    max-height: " + n[o] + ";\n            ") : -1 !== o.indexOf("margin") && (r = o + ": " + n[o] + ";"),
                                            e + (o + ": ") + n[o] + ";"
                                        );
                                    }, "");
                                return "." + qa.BUTTON + "." + qa.CUSTOM + " { " + o + " } ." + qa.BUTTON_ROW + "." + qa.CUSTOM + " { " + (t + r) + "}";
                            })({ custom: n }) +
                            "\n    "
                        );
                    })({ custom: void 0 === r ? { label: void 0, css: void 0 } : r, height: n.height, fundingEligibility: e.fundingEligibility });
                return ui("style", { nonce: t, innerHTML: o });
            }
            function ju() {
                return ui("div", { class: qa.SPINNER });
            }
            var Hu = ["color"];
            function qu(e) {
                var n = void 0 === e ? {} : e,
                    t = n.color,
                    r = void 0 === t ? "#848484" : t,
                    o = l(n, Hu);
                return ui(
                    Oi,
                    x({}, o, {
                        name: "chevron",
                        render: function () {
                            return ui(
                                "svg",
                                { width: "256", height: "158.18601989746094", viewBox: "-1.935 0.221 256 158.186", xmlns: "http://www.w3.org/2000/svg" },
                                ui("polygon", { points: "223.878 0.221 126.065 98.034 28.252 0.221 -1.935 30.407 126.065 158.407 254.065 30.407", transform: "matrix(1, 0, 0, 1, 0, 0)", fill: r })
                            );
                        },
                    })
                );
            }
            var Wu = t(7),
                Uu = t.n(Wu);
            function zu(e) {
                var n,
                    t = (void 0 === e ? {} : e).textColor,
                    r = void 0 === t ? "black" : t;
                return ui(vi, { css: Uu.a, "data-v-4bd3ab29": "" }, ui("div", x({}, (((n = {})["data-menu"] = !0), n), { tabindex: "0", class: "menu-button", "data-v-4bd3ab29": "" }), ui(qu, { color: r, "data-v-4bd3ab29": "" })));
            }
            function Zu(e) {
                var n,
                    t = e.fundingSource,
                    r = e.style,
                    o = e.multiple,
                    i = e.locale,
                    a = e.env,
                    u = e.fundingEligibility,
                    l = e.i,
                    c = e.nonce,
                    s = e.flow,
                    d = e.vault,
                    f = e.userIDToken,
                    p = e.personalization,
                    h = e.onClick,
                    m = void 0 === h ? Re : h,
                    g = e.content,
                    y = e.tagline,
                    v = e.commit,
                    w = e.experiment,
                    b = e.instrument,
                    C = r.custom,
                    E = r.layout,
                    L = r.shape,
                    O = "inline" === e.experience && C && C.label,
                    P = wu()[t];
                if (!P) throw new Error("Can not find funding config for " + t);
                var S = P.colors,
                    T = P.secondaryColors || {},
                    N = r.color,
                    A = void 0 === N ? S[0] : N,
                    k = r.period,
                    _ = r.label;
                o && l > 0 && (A = T[A] && S.indexOf(-1 !== T[A]) ? T[A] : -1 !== S.indexOf(T.default) ? T.default : S[0]);
                var R = P.logoColors,
                    M = P.textColors,
                    F = R[A] || R.default || "default",
                    I = M[A] || M.default || "default",
                    D = P.Label,
                    B = P.WalletLabel,
                    j = P.Logo,
                    H = P.showWalletMenu,
                    q = function (e, n) {
                        e.preventDefault(), e.stopPropagation(), m(e, x({ fundingSource: t }, n));
                    },
                    W = function (e, n) {
                        (13 !== e.keyCode && 32 !== e.keyCode) || q(e, n);
                    },
                    U = "function" == typeof P.labelText ? P.labelText({ content: g, fundingEligibility: u }) : P.labelText || t,
                    z = ui(j, { label: _, locale: i, logoColor: F, fundingEligibility: u, onClick: q, onKeyPress: W, nonce: c, experiment: w, env: a }),
                    Z = ui(D, {
                        i: l,
                        logo: z,
                        label: _,
                        nonce: c,
                        locale: i,
                        logoColor: F,
                        period: k,
                        layout: E,
                        multiple: o,
                        fundingEligibility: u,
                        onClick: q,
                        onKeyPress: W,
                        personalization: p,
                        tagline: y,
                        content: g,
                        custom: O ? C : void 0,
                        experiment: w,
                    }),
                    G = {},
                    V = G.buttonDesignContainerClass,
                    Y = void 0 === V ? "" : V,
                    K = G.buttonDesignComponent,
                    J = void 0 === K ? null : K;
                J &&
                (Z = ui(uu, {
                    i: l,
                    logo: z,
                    label: _,
                    nonce: c,
                    locale: i,
                    logoColor: F,
                    period: k,
                    layout: E,
                    multiple: o,
                    fundingEligibility: u,
                    onClick: q,
                    onKeyPress: W,
                    personalization: p,
                    tagline: y,
                    content: g,
                    buttonDesignComponent: J,
                }));
                var X = !1;
                B &&
                "purchase" === s &&
                (b || (f && (t === ct.PAYPAL || t === ct.VENMO))) &&
                ((Z = ui(B, { nonce: c, logoColor: F, instrument: b, locale: i, content: g, commit: v, experiment: w, vault: d, textColor: I, fundingSource: t })), (X = !0));
                var $ = X && b && H({ instrument: b });
                return ui(
                    "div",
                    {
                        class: [
                            qa.BUTTON_ROW,
                            O && t === ct.CARD ? qa.CUSTOM : "",
                            qa.NUMBER + "-" + l,
                            qa.LAYOUT + "-" + E,
                            qa.SHAPE + "-" + L,
                            qa.NUMBER + "-" + (o ? "multiple" : "single"),
                            qa.ENV + "-" + a,
                            qa.COLOR + "-" + A,
                            qa.TEXT_COLOR + "-" + I,
                            "paypal-logo-color-" + F,
                            "" + (X ? qa.WALLET : ""),
                            "" + ($ ? qa.WALLET_MENU : ""),
                            "" + Y,
                        ].join(" "),
                    },
                    ui(
                        "div",
                        x(
                            { role: "link" },
                            (((n = {})["data-button"] = !0),
                                (n["data-funding-source"] = t),
                                (n["data-payment-method-id"] = b ? b.tokenID : null),
                                (n["data-instrument-id"] = b ? b.instrumentID : null),
                                (n["data-instrument-type"] = b ? b.type : null),
                                n),
                            {
                                class: [
                                    qa.BUTTON,
                                    O && t === ct.CARD ? qa.CUSTOM : "",
                                    qa.NUMBER + "-" + l,
                                    qa.LAYOUT + "-" + E,
                                    qa.SHAPE + "-" + L,
                                    qa.NUMBER + "-" + (o ? "multiple" : "single"),
                                    qa.ENV + "-" + a,
                                    qa.COLOR + "-" + A,
                                    qa.TEXT_COLOR + "-" + I,
                                    "paypal-logo-color-" + F,
                                    "" + (X ? qa.WALLET : ""),
                                ].join(" "),
                                onClick: q,
                                onRender: function (e) {
                                    yn() &&
                                    we(e) &&
                                    (function (e) {
                                        var n = function n(t) {
                                            return e.removeEventListener("focus", n), t.preventDefault(), e.blur(), !1;
                                        };
                                        e.addEventListener("mousedown", function () {
                                            e.addEventListener("focus", n),
                                                setTimeout(function () {
                                                    e.removeEventListener("focus", n);
                                                }, 1);
                                        });
                                    })(e);
                                },
                                onKeyPress: W,
                                tabindex: "0",
                                "aria-label": U,
                            }
                        ),
                        ui("div", { class: qa.BUTTON_LABEL }, Z),
                        ui(ju, null)
                    ),
                    $ ? ui(zu, { textColor: I }) : null
                );
            }
            function Gu(e) {
                var n = e.fundingSource,
                    t = e.locale,
                    r = e.multiple,
                    o = e.nonce,
                    i = e.personalization,
                    a = wu()[n];
                if (!a) throw new Error("Can not get config for " + n);
                var u = a.Tag;
                if (u) {
                    var l = i && i.tagline;
                    return ui(
                        "div",
                        { class: qa.TAGLINE },
                        l ? ui(li, null, ui("span", null, l.Component ? ui(l.Component, null) : l.text), l.tracking && l.tracking.impression && ui(Ja, { url: l.tracking.impression, nonce: o })) : ui(u, { locale: t, multiple: r })
                    );
                }
            }
            var Vu,
                Yu =
                    "\n    ." +
                    qa.POWERED_BY +
                    ' {\n        text-align: center;\n        margin: 10px auto;\n        height: 14px;\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        font-size: 11px;\n        font-weight: normal;\n        font-style: italic;\n        font-stretch: normal;\n        color: #7b8388;\n        position: relative;\n        margin-right: 3px;\n        bottom: 3px;\n    }\n\n    .' +
                    qa.POWERED_BY +
                    " > ." +
                    qa.TEXT +
                    ",\n    ." +
                    qa.POWERED_BY +
                    " > .paypal-logo {\n        display: inline-block;\n        vertical-align: middle;\n        height: 16px;\n        line-height: 16px;\n        font-size: 11px;\n    }\n";
            function Ku(e) {
                return ui("div", { class: qa.POWERED_BY }, ui("style", { nonce: e.nonce, innerHTML: Yu }), ui(Za, null));
            }
            function Ju(e) {
                var n = e.wallet;
                if (
                    (t = { wallet: n, onShippingChange: e.onShippingChange, onShippingAddressChange: e.onShippingAddressChange, onShippingOptionsChange: e.onShippingOptionsChange }).wallet &&
                    !(t.onShippingChange || t.onShippingAddressChange || t.onShippingOptionsChange)
                ) {
                    var t,
                        r = n && n[e.fundingSource.toString()],
                        o = r && r.instruments;
                    if (o && o.length) return o[0];
                }
            }
            var Xu = (((Vu = {})[ct.CREDIT] = "credit"), Vu);
            function $u(e) {
                var n = e.onClick,
                    t = void 0 === n ? Re : n,
                    r = (function (e) {
                        if (!e) throw new Error("Expected props");
                        var n = e.clientID,
                            t = e.fundingSource,
                            r = e.style,
                            o = void 0 === r ? {} : r,
                            i = e.remembered,
                            a = void 0 === i ? [] : i,
                            u = e.locale,
                            l = void 0 === u ? Ou.LOCALE : u,
                            c = e.env,
                            s = void 0 === c ? Ou.ENV : c,
                            d = e.platform,
                            f = void 0 === d ? Ou.PLATFORM : d,
                            p = e.commit,
                            h = void 0 === p ? Ou.COMMIT : p,
                            m = e.fundingEligibility,
                            g = e.sessionID,
                            y = void 0 === g ? xe() : g,
                            v = e.buttonSessionID,
                            w = void 0 === v ? xe() : v,
                            b = e.components,
                            C = void 0 === b ? ["buttons"] : b,
                            E = e.nonce,
                            L = e.onShippingChange,
                            x = e.onShippingAddressChange,
                            O = e.onShippingOptionsChange,
                            P = e.personalization,
                            S = e.clientAccessToken,
                            T = e.content,
                            N = e.wallet,
                            A = e.flow,
                            k = void 0 === A ? "purchase" : A,
                            _ = e.experiment,
                            R = void 0 === _ ? {} : _,
                            M = e.vault,
                            F = e.userIDToken,
                            I = e.applePay,
                            D = e.applePaySupport,
                            B = void 0 !== D && D,
                            j = e.supportsPopups,
                            H = void 0 !== j && j,
                            q = e.supportedNativeBrowser,
                            W = void 0 !== q && q,
                            U = e.experience,
                            z = void 0 === U ? "" : U,
                            Z = l.country,
                            G = l.lang;
                        if (!Z || -1 === Su.indexOf(Z)) throw new Error("Expected valid country, got " + (Z || "undefined"));
                        if (!G || -1 === at[Z].indexOf(G)) throw new Error("Expected valid lang, got " + (G || "undefined"));
                        if (
                            a.some(function (e) {
                                return -1 === Tu.indexOf(e);
                            })
                        )
                            throw new Error("Expected valid funding sources, got " + JSON.stringify(a));
                        if (-1 === Nu.indexOf(s)) throw new Error("Expected valid env, got " + (s || "undefined"));
                        if (!m) throw new Error("Expected fundingEligibility");
                        if (-1 === Au.indexOf(f)) throw new Error("Expected valid platform, got " + (f || "undefined"));
                        if (t) {
                            if (-1 === Na.indexOf(t)) throw new Error("Invalid funding source: " + t);
                            if (
                                !bu(t, {
                                    platform: f,
                                    fundingSource: t,
                                    fundingEligibility: m,
                                    components: C,
                                    onShippingChange: L,
                                    onShippingAddressChange: x,
                                    onShippingOptionsChange: O,
                                    wallet: N,
                                    flow: k,
                                    applePaySupport: B,
                                    supportsPopups: H,
                                    supportedNativeBrowser: W,
                                })
                            )
                                throw new Error("Funding Source not eligible: " + t);
                        }
                        return {
                            clientID: n,
                            fundingSource: t,
                            style: (o = Pu(e, o)),
                            locale: l,
                            remembered: a,
                            env: s,
                            fundingEligibility: m,
                            platform: f,
                            clientAccessToken: S,
                            buttonSessionID: w,
                            commit: h,
                            sessionID: y,
                            nonce: E,
                            components: C,
                            onShippingChange: L,
                            onShippingAddressChange: x,
                            onShippingOptionsChange: O,
                            personalization: P,
                            content: T,
                            wallet: N,
                            flow: k,
                            experiment: R,
                            vault: M,
                            userIDToken: F,
                            applePay: I,
                            applePaySupport: B,
                            supportsPopups: H,
                            supportedNativeBrowser: W,
                            experience: z,
                        };
                    })(e),
                    o = r.wallet,
                    i = r.fundingSource,
                    a = r.style,
                    u = r.locale,
                    l = r.env,
                    c = r.fundingEligibility,
                    s = r.commit,
                    d = r.vault,
                    f = r.nonce,
                    p = r.onShippingChange,
                    h = r.onShippingAddressChange,
                    m = r.onShippingOptionsChange,
                    g = r.personalization,
                    y = r.userIDToken,
                    v = r.content,
                    w = r.flow,
                    b = r.experiment,
                    C = r.experience,
                    E = a.custom,
                    L = a.layout,
                    x = a.shape,
                    O = a.tagline,
                    P = "inline" === C && E && E.label && 0 !== E.label.length,
                    S = Cu({
                        fundingSource: i,
                        layout: L,
                        remembered: r.remembered,
                        platform: r.platform,
                        fundingEligibility: c,
                        components: r.components,
                        onShippingChange: p,
                        flow: w,
                        wallet: o,
                        applePaySupport: r.applePaySupport,
                        supportsPopups: r.supportsPopups,
                        supportedNativeBrowser: r.supportedNativeBrowser,
                        experiment: b,
                    }),
                    T = S.length > 1;
                if (!S.length) throw new Zo("No eligible funding fundingSources found to render buttons:\n\n" + JSON.stringify(c, null, 4));
                -1 !== S.indexOf(ct.CARD) &&
                (S = P
                    ? [ct.CARD].concat(
                        S.filter(function (e) {
                            return e !== ct.CARD;
                        })
                    )
                    : [].concat(
                        S.filter(function (e) {
                            return e !== ct.CARD;
                        }),
                        [ct.CARD]
                    ));
                var N = S.some(function (e) {
                        return dt.includes(e);
                    }),
                    A = (function (e) {
                        for (var n = e.wallet, t = e.layout, r = e.fundingSources, o = e.onShippingChange, i = e.onShippingAddressChange, a = e.onShippingOptionsChange, u = {}, l = 0; l < r.length; l++) {
                            var c = r[l],
                                s = Ju({ wallet: n, fundingSource: c, onShippingChange: o, onShippingAddressChange: i, onShippingOptionsChange: a });
                            s && (u[c] = s);
                        }
                        for (var d = 0, f = Object.keys(u); d < f.length; d++)
                            for (var p = f[d], h = 0, m = Object.keys(Xu); h < m.length; h++) {
                                var g = m[h];
                                p !== g && -1 !== r.indexOf(g) && u[p] && u[p].type === Xu[g] && delete u[p];
                            }
                        if (t === Ha.HORIZONTAL)
                            for (var y = !1, v = 0; v < r.length; v++) {
                                var w = r[v];
                                u[w] && (y ? delete u[w] : (y = !0));
                            }
                        return u;
                    })({ wallet: o, fundingSources: S, layout: L, onShippingChange: p, onShippingAddressChange: h, onShippingOptionsChange: m }),
                    k = "purchase" === w && (y || Object.keys(A).length),
                    _ = {}.buttonDesignScript,
                    R = void 0 === _ ? "" : _,
                    M = function (e) {
                        return P ? (0 === e ? S.length - 1 : e - 1) : e;
                    };
                return ui(
                    "div",
                    { class: [qa.CONTAINER, qa.LAYOUT + "-" + L, qa.SHAPE + "-" + x, qa.NUMBER + "-" + (T ? "multiple" : "single"), qa.ENV + "-" + l, "" + (k ? qa.WALLET : "")].join(" ") },
                    ui(Bu, { nonce: f, style: a, fundingEligibility: c }),
                    S.map(function (e, n) {
                        return ui(Zu, {
                            content: v,
                            i: M(n),
                            style: a,
                            merchantFundingSource: i,
                            fundingSource: e,
                            multiple: T,
                            env: l,
                            locale: u,
                            nonce: f,
                            fundingEligibility: c,
                            wallet: o,
                            onShippingChange: p,
                            onShippingAddressChange: h,
                            onShippingOptionsChange: m,
                            onClick: t,
                            userIDToken: y,
                            personalization: g,
                            tagline: O,
                            commit: s,
                            experiment: b,
                            flow: w,
                            vault: d,
                            instrument: A[e],
                            experience: C,
                        });
                    }),
                    O && L === Ha.HORIZONTAL && !i ? ui(Gu, { fundingSource: S[0], style: a, locale: u, multiple: T, nonce: f, personalization: g }) : null,
                    -1 !== S.indexOf(ct.CARD) ? ui("div", { id: "card-fields-container", class: "card-fields-container" }) : null,
                    N ? ui("div", { id: "payment-fields-container", className: "payment-fields-container" }) : null,
                    L !== Ha.VERTICAL || -1 === S.indexOf(ct.CARD) || P ? null : ui(Ku, { locale: u, nonce: f }),
                    R ? ui(Mu, { nonce: f, buttonDesignScript: R }) : ui(Ru, { nonce: f })
                );
            }
            function Qu(e) {
                var n,
                    t = e.nonce,
                    r = e.onRenderCheckout,
                    o = e.props;
                return ui(
                    "html",
                    null,
                    ui(
                        "body",
                        null,
                        ui(
                            $u,
                            x({}, o, {
                                onClick: function (e, i) {
                                    var a,
                                        u = i.fundingSource,
                                        l = i.card;
                                    if (
                                        (nr()
                                            .info("button_prerender_click")
                                            .track(
                                                ((a = {}),
                                                    (a.button_session_id = o.buttonSessionID),
                                                    (a.context_type = "button_session_id"),
                                                    (a.context_id = o.buttonSessionID),
                                                    (a.transition_name = "process_button_prerender_click"),
                                                    (a.selected_payment_method = u),
                                                    a)
                                            )
                                            .flush(),
                                        u === ct.VENMO || u === ct.APPLEPAY || (u === ct.CARD && "inline" === o.experience))
                                    );
                                    else if (v() && !o.merchantRequestedPopupsDisabled) {
                                        (n && !n.closed) || (n = G(Pn("", { width: 500, height: 590 })));
                                        var c = window.document,
                                            s = ui(Pa, { nonce: t }).render(mi({ doc: c }));
                                        Sn(n, s), r({ win: n, fundingSource: u, card: l });
                                    } else r({ fundingSource: u, card: l });
                                },
                            })
                        )
                    )
                );
            }
            var el = Me(function (e) {
                if ((void 0 === e && (e = "screenInformation"), window)) {
                    var n = window.innerHeight,
                        t = window.outerHeight,
                        r = Math.round((window.screen.width / window.innerWidth) * 100) / 100,
                        o = { computedHeight: Math.round(n * r), height: n, ios14: y(), outerHeight: t, scale: r, standAlone: p() };
                    nr().info(e, o);
                }
            });
            function nl(e) {
                return e.createBillingAgreement ? "billing_setup" : e.createSubscription ? "subscription_setup" : "purchase";
            }
            function tl() {
                return !(
                    "undefined" == typeof window ||
                    !v() ||
                    ((function (e) {
                        if ((void 0 === e && (e = s()), g(e))) {
                            var n = window.innerHeight,
                                t = Math.round((window.screen.width / window.innerWidth) * 100) / 100,
                                r = Math.round(n * t),
                                o = null;
                            if (y(e)) o = c[window.outerHeight];
                            else {
                                if (1 !== t) return !0;
                                o = c[window.outerHeight];
                            }
                            return !o || (t > 1 && o.zoomHeight && o.zoomHeight[t] ? -1 !== o.zoomHeight[t].indexOf(r) : -1 !== o.textSizeHeights.indexOf(r) || -1 !== o.textSizeHeightsNoTabs.indexOf(r));
                        }
                        return !1;
                    })()
                        ? (el("sfvcScreenInformation"), 1)
                        : (void 0 === e && (e = s()), d.test(e) || ((!g() || !b()) && (!m() || !w()))))
                );
                var e;
            }
            function rl() {
                var e = Mt(),
                    n = e && -1 !== e.indexOf(ct.VENMO),
                    t = wt(),
                    r = t && t[ct.VENMO] && t[ct.VENMO].eligible,
                    o = tl() && !n;
                if (r) {
                    if (!f()) return or("enable_venmo_desktop", 100);
                    if (o) return g() && b() ? or("enable_venmo_ios", 100) : m() && w() ? or("enable_venmo_android", 100) : void 0;
                }
            }
            function ol() {
                var e = rl(),
                    n = Mt(),
                    t = n && -1 !== n.indexOf(ct.VENMO),
                    r = tl(),
                    o = e && e.isEnabled();
                return f() ? { enableVenmo: Boolean((o || t) && r) } : { enableVenmo: Boolean(o) };
            }
            function il() {
                try {
                    if (!window.ApplePaySession) return;
                    var e = function (e) {
                        return x({}, e, {
                            errors: (e.errors || []).map(function (e) {
                                return new window.ApplePayError(e.code, e.contactField, e.message);
                            }),
                        });
                    };
                    return function (n, t) {
                        var r = new window.ApplePaySession(n, t),
                            o = {};
                        return (
                            (r.onvalidatemerchant = function (e) {
                                o.validatemerchant({ validationURL: e.validationURL });
                            }),
                                (r.onpaymentmethodselected = function (e) {
                                    o.paymentmethodselected({ paymentMethod: e.paymentMethod });
                                }),
                                (r.onshippingmethodselected = function (e) {
                                    o.shippingmethodselected({ shippingMethod: e.shippingMethod });
                                }),
                                (r.onshippingcontactselected = function (e) {
                                    o.shippingcontactselected({ shippingContact: e.shippingContact });
                                }),
                                (r.onpaymentauthorized = function (e) {
                                    o.paymentauthorized({ payment: e.payment });
                                }),
                                (r.oncancel = function () {
                                    o.oncancel();
                                }),
                                {
                                    addEventListener: function (e, n) {
                                        o[e] = n;
                                    },
                                    completeMerchantValidation: function (e) {
                                        r.completeMerchantValidation(e);
                                    },
                                    completePaymentMethodSelection: function (e) {
                                        r.completePaymentMethodSelection(e);
                                    },
                                    completeShippingMethodSelection: function (e) {
                                        r.completeShippingMethodSelection(e);
                                    },
                                    completeShippingContactSelection: function (n) {
                                        var t = e(n);
                                        r.completeShippingContactSelection(t);
                                    },
                                    completePayment: function (n) {
                                        var t = e(n);
                                        r.completePayment(t);
                                    },
                                    begin: function () {
                                        return r.begin();
                                    },
                                    abort: function () {
                                        return r.abort();
                                    },
                                }
                        );
                    };
                } catch (e) {
                    return;
                }
            }
            function al() {
                return x({}, ol(), ((e = "sandbox" === lt.LOCAL || "sandbox" === lt.TEST || "sandbox" === lt.STAGE), (n = !1), vn() && e && (n = window.localStorage.getItem("enable_venmo_app_label")), { enableVenmoAppLabel: n }));
                var e, n;
            }
            var ul = Ae(function () {
                var e = [];
                return Wo({
                    tag: "paypal-buttons",
                    url: function () {
                        return "https://www.sandbox.paypal.com/smart/buttons";
                    },
                    domain: Qt(),
                    autoResize: { width: !1, height: !0 },
                    containerTemplate: ku,
                    logger: nr(),
                    prerenderTemplate: function (e) {
                        var n,
                            t = e.state,
                            r = e.props,
                            o = e.doc,
                            i = e.event,
                            a = r.buttonSessionID;
                        return (
                            vn() ||
                            nr()
                                .info("localstorage_inaccessible_possible_private_browsing")
                                .track((((n = {}).button_session_id = a), (n.context_type = "button_session_id"), (n.context_id = a), (n.transition_name = "localstorage_inaccessible_possible_private_browsing"), n)),
                                i.on("zoid-prerendered", function () {
                                    Xo({ buttonSessionID: a, phase: "buttons-first-render-end" });
                                    try {
                                        var e,
                                            n = (function (e) {
                                                var n = (function () {
                                                        if (window.performance) {
                                                            var e = performance.now(),
                                                                n = new Date().getTime();
                                                            return window.performance.timeOrigin || window.performance.timing.navigationStart || n - e;
                                                        }
                                                        throw new Error("window.performance not supported");
                                                    })(),
                                                    t = Jo({ buttonSessionID: e, phase: "buttons-first-render" });
                                                return { comp: { "first-render": { start: n + t, tt: Jo({ buttonSessionID: e, phase: "buttons-first-render-end" }) - t } } };
                                            })(a),
                                            t =
                                                (((e = {}).state_name = "CPL_LATENCY_METRICS"),
                                                    (e.transition_name = "process_client_metrics"),
                                                    (e.context_id = a),
                                                    (e.page_name = "main:xo:paypal-components:smart-payment-buttons"),
                                                    (e.cpl_comp_metrics = JSON.stringify((null == n ? void 0 : n.comp) || {})),
                                                    e);
                                        nr().info("CPL_LATENCY_METRICS_FIRST_RENDER").track(t);
                                    } catch (e) {
                                        nr()
                                            .info("button_render_CPL_instrumentation_log_error")
                                            .track({ err: e.message || "CPL_LOG_PHASE_ERROR", details: e.details, stack: JSON.stringify(e.stack || e) });
                                    }
                                }),
                                ui(Qu, {
                                    nonce: r.nonce,
                                    props: r,
                                    onRenderCheckout: function (e) {
                                        t.prerenderDetails = { win: e.win, fundingSource: e.fundingSource, card: e.card };
                                    },
                                }).render(mi({ doc: o }))
                        );
                    },
                    attributes: { iframe: { allowpaymentrequest: "allowpaymentrequest", scrolling: "no", title: "PayPal" } },
                    eligible: function (n) {
                        var t,
                            r = n.props,
                            o = r.fundingSource,
                            i = r.onShippingChange,
                            a = r.onShippingAddressChange,
                            u = r.onShippingOptionsChange,
                            l = r.style,
                            c = void 0 === l ? {} : l,
                            s = r.fundingEligibility,
                            d = void 0 === s ? Da() : s,
                            f = r.supportsPopups,
                            p = void 0 === f ? v() : f,
                            h = r.supportedNativeBrowser,
                            m = void 0 === h ? tl() : h,
                            g = r.experiment,
                            y = void 0 === g ? al() : g,
                            w = nl({ createBillingAgreement: r.createBillingAgreement, createSubscription: r.createSubscription }),
                            b = !(null == d || null == (t = d.applepay) || !t.eligible) && C();
                        return o
                            ? (-1 === e.indexOf(o) && e.push(o),
                                bu(o, {
                                    layout: c.layout,
                                    platform: bt(),
                                    fundingSource: o,
                                    fundingEligibility: d,
                                    components: ["buttons"],
                                    onShippingChange: i,
                                    onShippingAddressChange: a,
                                    onShippingOptionsChange: u,
                                    flow: w,
                                    applePaySupport: b,
                                    supportsPopups: p,
                                    supportedNativeBrowser: m,
                                    experiment: y,
                                })
                                    ? { eligible: !0 }
                                    : { eligible: !1, reason: o + " is not eligible" })
                            : { eligible: !0 };
                    },
                    props: {
                        sdkVersion: { type: "string", queryParam: !0, sendToChild: !1, value: mt },
                        fundingSource: {
                            type: "string",
                            queryParam: !0,
                            required: !1,
                            validate: function (e) {
                                var n = e.props,
                                    t = n.fundingSource,
                                    r = n.onShippingChange,
                                    o = n.onShippingAddressChange,
                                    i = n.onShippingOptionsChange,
                                    a = n.style,
                                    u = void 0 === a ? {} : a,
                                    l = n.fundingEligibility,
                                    c = void 0 === l ? Da() : l,
                                    s = n.applePaySupport,
                                    d = n.supportsPopups,
                                    f = n.supportedNativeBrowser,
                                    p = nl({ createBillingAgreement: n.createBillingAgreement, createSubscription: n.createSubscription }),
                                    h = u.layout,
                                    m = bt();
                                if (
                                    t &&
                                    !bu(t, {
                                        layout: h,
                                        platform: m,
                                        fundingSource: t,
                                        fundingEligibility: c,
                                        components: ["buttons"],
                                        onShippingChange: r,
                                        onShippingAddressChange: o,
                                        onShippingOptionsChange: i,
                                        flow: p,
                                        applePaySupport: s,
                                        supportsPopups: d,
                                        supportedNativeBrowser: f,
                                    })
                                )
                                    throw new Error(t + " is not eligible");
                            },
                        },
                        style: {
                            type: "object",
                            queryParam: !0,
                            required: !1,
                            decorate: function (e) {
                                return Pu(e.props, e.value);
                            },
                            validate: function (e) {
                                var n = e.value;
                                Pu(e.props, void 0 === n ? {} : n);
                            },
                            default: function () {
                                return {};
                            },
                        },
                        storageState: {
                            type: "object",
                            value: function () {
                                return Yo;
                            },
                        },
                        sessionState: {
                            type: "object",
                            value: function () {
                                return Ko;
                            },
                        },
                        components: { type: "array", queryParam: !0, value: vt },
                        locale: { type: "object", queryParam: !0, value: zt },
                        sdkMeta: { type: "string", queryParam: !0, sendToChild: !1, value: rr },
                        createOrder: { type: "function", required: !1 },
                        createBillingAgreement: { type: "function", required: !1 },
                        createSubscription: { type: "function", required: !1 },
                        onApprove: { type: "function", required: !1 },
                        onComplete: { type: "function", required: !1 },
                        onShippingChange: {
                            type: "function",
                            required: !1,
                            queryParam: !0,
                            queryValue: function (e) {
                                return e.value ? "true" : "false";
                            },
                        },
                        onShippingAddressChange: { type: "function", required: !1 },
                        onShippingOptionsChange: { type: "function", required: !1 },
                        onCancel: { type: "function", required: !1 },
                        onClick: { type: "function", required: !1 },
                        getPrerenderDetails: {
                            type: "function",
                            value: function (e) {
                                var n = e.state;
                                return function () {
                                    return n.prerenderDetails;
                                };
                            },
                        },
                        getPopupBridge: {
                            type: "function",
                            required: !1,
                            value: function () {
                                return function () {
                                    if (window.popupBridge)
                                        return {
                                            nativeUrl: window.popupBridge.getReturnUrlPrefix(),
                                            start: function (e) {
                                                return new R(function (n, t) {
                                                    (window.popupBridge.onComplete = function (e, r) {
                                                        var o = r && r.queryItems ? r.queryItems : {};
                                                        return e ? t(e) : n(o);
                                                    }),
                                                        window.popupBridge.open(e);
                                                });
                                            },
                                        };
                                };
                            },
                        },
                        onInit: {
                            type: "function",
                            required: !1,
                            default: function () {
                                return Re;
                            },
                            decorate: function (e) {
                                var n = e.props,
                                    t = e.value,
                                    r = void 0 === t ? Re : t;
                                return (
                                    Xo({ buttonSessionID: n.buttonSessionID, phase: "buttons-first-render" }),
                                        function () {
                                            var e,
                                                t = rl();
                                            return t && t.logStart((((e = {}).button_session_id = n.buttonSessionID), e)), r.apply(void 0, arguments);
                                        }
                                );
                            },
                        },
                        getQueriedEligibleFunding: {
                            type: "function",
                            value: function () {
                                return function () {
                                    return e;
                                };
                            },
                        },
                        clientID: { type: "string", value: Tt, queryParam: !0 },
                        clientAccessToken: { type: "string", required: !1, queryParam: !0, value: qt },
                        partnerAttributionID: { type: "string", required: !1, value: Wt },
                        merchantRequestedPopupsDisabled: { type: "boolean", required: !1, value: Ut },
                        enableThreeDomainSecure: { type: "boolean", value: Gt },
                        sdkCorrelationID: { type: "string", required: !1, value: gt, queryParam: !0 },
                        storageID: { type: "string", value: lr, queryParam: !0 },
                        sessionID: { type: "string", value: Vo, queryParam: !0 },
                        buttonSessionID: { type: "string", value: xe, queryParam: !0 },
                        enableVault: { type: "boolean", required: !1, queryParam: !0 },
                        env: { type: "string", queryParam: !0, value: ft },
                        amount: { type: "string", required: !1, queryParam: !0, value: jt },
                        stageHost: { type: "string", value: pt, required: !1 },
                        buttonSize: {
                            type: "string",
                            required: !1,
                            value: function (e) {
                                return (function (e, n) {
                                    var t, r;
                                    if (n) {
                                        var o = 0;
                                        if ("string" == typeof n) {
                                            var i = document.querySelector(n);
                                            o = (null == i ? void 0 : i.offsetWidth) || 0;
                                        } else {
                                            var a;
                                            o = null == (a = En(n)) ? void 0 : a.offsetWidth;
                                        }
                                        var u = (null == e || null == (t = e.style) ? void 0 : t.layout) || Ha.HORIZONTAL,
                                            l = (null == e || null == (r = e.renderedButtons) ? void 0 : r.length) || 1,
                                            c = xu.tiny,
                                            s = xu.small,
                                            d = xu.medium,
                                            f = xu.large,
                                            p = xu.huge;
                                        if (o) {
                                            var h = Math.min(o, 750);
                                            if ((u === Ha.HORIZONTAL && 2 === l && (h = (h - 8) / 2), c.minWidth <= h && h <= c.maxWidth)) return ja.TINY;
                                            if (s.minWidth < h && h <= s.maxWidth) return ja.SMALL;
                                            if (d.minWidth < h && h <= d.maxWidth) return ja.MEDIUM;
                                            if (f.minWidth < h && h <= f.maxWidth) return ja.LARGE;
                                            if (p.minWidth < h) return ja.HUGE;
                                        }
                                    }
                                })(e.props, e.container);
                            },
                            queryParam: !0,
                        },
                        apiStageHost: { type: "string", value: ht, required: !1 },
                        fundingEligibility: { type: "object", default: Da, value: "sandbox" === lt.LOCAL ? void 0 : Da, queryParam: !0, serialization: "base64" },
                        platform: { type: "string", queryParam: !0, value: bt },
                        remembered: { type: "array", queryParam: !0, value: ka },
                        experiment: {
                            type: "object",
                            queryParam: !0,
                            value: function () {
                                return al();
                            },
                        },
                        paymentRequest: { type: "object", queryParam: !1, required: !1 },
                        flow: {
                            type: "string",
                            queryParam: !0,
                            value: function (e) {
                                var n = e.props;
                                return nl({ createBillingAgreement: n.createBillingAgreement, createSubscription: n.createSubscription });
                            },
                        },
                        remember: {
                            type: "function",
                            value: function () {
                                return function (e) {
                                    return (function (e, n) {
                                        void 0 === n && (n = {});
                                        var t = je(ct),
                                            r = n.cookie,
                                            o = void 0 === r || r,
                                            i = n.expiry;
                                        if (!e || !e.length) throw new Error("Pass array of funding sources");
                                        for (var a = 0; a < e.length; a++) {
                                            var u = e[a];
                                            if (-1 === t.indexOf(u)) throw new Error("Invalid funding source: " + u);
                                        }
                                        o &&
                                        !er() &&
                                        (function (e, n) {
                                            var t;
                                            void 0 === n && (n = {});
                                            var r = n.expiry,
                                                o = document.createElement("iframe");
                                            (o.style.display = "none"),
                                                o.setAttribute("sandbox", "allow-scripts"),
                                                o.setAttribute(
                                                    "src",
                                                    mn("https://www.sandbox.paypal.com/smart/funding/remember", {
                                                        query: ((t = {}), (t.domain = z()), (t["client-id"] = Tt()), (t.sdkMeta = rr()), (t["funding-sources"] = e.join(",")), (t.expiry = (r || "").toString()), t),
                                                    })
                                                );
                                            var i = document.body;
                                            if (!i) throw new Error("Can not find body");
                                            i.appendChild(o);
                                        })(e, { expiry: i }),
                                            ur(function (n) {
                                                n.funding = n.fundingConfig || {};
                                                for (var t = 0; t < e.length; t++) {
                                                    var r = e[t],
                                                        o = (n.funding[r] = n.funding[r] || {});
                                                    (o.remembered = !0), i && (o.expiry = Date.now() + 1e3 * i);
                                                }
                                            });
                                    })(e, { cookie: !1 });
                                };
                            },
                        },
                        currency: { type: "string", queryParam: !0, value: Rt },
                        intent: { type: "string", queryParam: !0, value: At },
                        buyerCountry: { type: "string", queryParam: !0, required: !1, value: Dt },
                        commit: { type: "boolean", queryParam: !0, value: kt },
                        vault: { type: "boolean", queryParam: !0, value: _t },
                        enableFunding: { type: "array", queryParam: !0, value: Mt },
                        disableFunding: { type: "array", queryParam: !0, value: Ft },
                        disableCard: { type: "array", queryParam: !0, value: It },
                        merchantID: { type: "array", queryParam: !0, value: Nt },
                        renderedButtons: {
                            type: "array",
                            queryParam: !0,
                            value: function (e) {
                                return (
                                    (t = (n = e.props).fundingSource),
                                        (r = n.onShippingChange),
                                        (o = n.onShippingAddressChange),
                                        (i = n.onShippingOptionsChange),
                                        (u = void 0 === (a = n.style) ? {} : a),
                                        (c = void 0 === (l = n.fundingEligibility) ? Da() : l),
                                        (d = void 0 === (s = n.experiment) ? ol() : s),
                                        (f = n.applePaySupport),
                                        (h = void 0 === (p = n.supportsPopups) ? v() : p),
                                        (g = void 0 === (m = n.supportedNativeBrowser) ? tl() : m),
                                        (y = nl({ createBillingAgreement: n.createBillingAgreement, createSubscription: n.createSubscription })),
                                        Cu({
                                            fundingSource: t,
                                            remembered: [],
                                            layout: u.layout,
                                            platform: bt(),
                                            fundingEligibility: c,
                                            components: ["buttons"],
                                            onShippingChange: r,
                                            onShippingAddressChange: o,
                                            onShippingOptionsChange: i,
                                            flow: y,
                                            applePaySupport: f,
                                            supportsPopups: h,
                                            supportedNativeBrowser: g,
                                            experiment: d,
                                        })
                                );
                                var n, t, r, o, i, a, u, l, c, s, d, f, p, h, m, g, y;
                            },
                        },
                        csp: {
                            type: "object",
                            required: !1,
                            value: function () {
                                return { nonce: Zt() };
                            },
                        },
                        nonce: { type: "string", default: Zt },
                        getPageUrl: {
                            type: "function",
                            value: function () {
                                return function () {
                                    return window.location.href;
                                };
                            },
                        },
                        userIDToken: { type: "string", default: Ht, required: !1, queryParam: "sandbox" !== lt.LOCAL && "sandbox" !== lt.STAGE, bodyParam: "sandbox" === lt.LOCAL || "sandbox" === lt.STAGE },
                        clientMetadataID: { type: "string", required: !1, default: sr, queryParam: !0 },
                        debug: { type: "boolean", value: yt, queryParam: !0 },
                        test: {
                            type: "object",
                            default: function () {
                                return { action: "checkout" };
                            },
                        },
                        wallet: {
                            type: "object",
                            required: !1,
                            default: function () {
                                return window.__TEST_WALLET__;
                            },
                        },
                        paymentMethodNonce: { type: "string", queryParam: !0, required: !1 },
                        paymentMethodToken: { type: "string", queryParam: !0, required: !1 },
                        branded: { type: "boolean", queryParam: !0, required: !1 },
                        applePaySupport: {
                            type: "boolean",
                            value: function (e) {
                                var n,
                                    t,
                                    r = e.props;
                                return !(null == r || null == (n = r.fundingEligibility) || null == (t = n.applepay) || !t.eligible) && C();
                            },
                            queryParam: !0,
                        },
                        supportsPopups: {
                            type: "boolean",
                            value: function () {
                                return v();
                            },
                            queryParam: !0,
                        },
                        supportedNativeBrowser: { type: "boolean", value: tl, queryParam: !0 },
                        userExperienceFlow: { type: "string", required: !1, value: Vt },
                        applePay: { type: "function", required: !1, value: il },
                        experience: {
                            queryParam: !0,
                            required: !1,
                            type: "string",
                            value: function (e) {
                                var n,
                                    t = e.props,
                                    r = t || {},
                                    o = r.commit,
                                    i = r.createBillingAgreement,
                                    a = r.currency,
                                    u = r.disableFunding,
                                    l = void 0 === u ? [] : u,
                                    c = r.fundingEligibility,
                                    s = r.onComplete,
                                    d = r.style,
                                    f = d.custom,
                                    p = void 0 === f ? {} : f,
                                    h = d.layout,
                                    m = r.vault;
                                if ("accelerated" === r.experience) return "inline";
                                var g = Object({ eligible: !0 }) || !1,
                                    y =
                                        g &&
                                        g.eligible &&
                                        (function (e) {
                                            var n,
                                                t = e.props,
                                                r = t.disableFunding,
                                                o = t.fundingEligibility,
                                                i = t.layout,
                                                a = t.vault;
                                            return (
                                                t.onComplete &&
                                                !0 === t.commit &&
                                                !t.createBillingAgreement &&
                                                "USD" === t.currency &&
                                                -1 === (null == r ? void 0 : r.indexOf(ct.CARD)) &&
                                                ((null == o || null == (n = o.card) ? void 0 : n.eligible) || !1) &&
                                                i === Ha.VERTICAL &&
                                                !1 === a
                                            );
                                        })({ props: { commit: o, createBillingAgreement: i, currency: a, custom: p, disableFunding: l, fundingEligibility: c, layout: h, onComplete: s, vault: m } });
                                return (
                                    nr()
                                        .info("isInlineXOEligible props", { props: JSON.stringify(t) })
                                        .info("isInlineXOEligible eligible", { eligible: String(y) })
                                        .track(((n = {}), (n.transition_name = "inline_xo_eligibility_" + String(y)), n))
                                        .flush(),
                                        y ? "inline" : ""
                                );
                            },
                        },
                        allowBillingPayments: {
                            type: "boolean",
                            queryParam: !0,
                            required: !1,
                            default: function () {
                                return !0;
                            },
                        },
                    },
                });
            });
            function ll() {
                return _e(ll, function () {
                    return Wo({
                        tag: "paypal-card-form",
                        url: function () {
                            return "https://www.sandbox.paypal.com/smart/card-fields";
                        },
                        dimensions: { height: "300px", width: "100%" },
                        attributes: { iframe: { allowpaymentrequest: "allowpaymentrequest", scrolling: "no" } },
                        autoResize: { height: !0, width: !1 },
                        props: {
                            sessionID: { type: "string", required: !1, default: Vo, queryParam: !0 },
                            createOrder: {
                                type: "function",
                                queryParam: "token",
                                alias: "payment",
                                queryValue: function (e) {
                                    return R.try(e.value);
                                },
                            },
                            buttonSessionID: { type: "string", queryParam: !0 },
                            clientMetadataID: { type: "string", required: !1, default: sr, queryParam: "client-metadata-id" },
                            commit: { type: "boolean", queryParam: !0, value: kt },
                            env: { type: "string", queryParam: !0, value: ft },
                            locale: {
                                type: "object",
                                queryParam: "locale.x",
                                allowDelegate: !0,
                                queryValue: function (e) {
                                    var n = e.value,
                                        t = n.lang;
                                    return (t = t === it.ZH_HANT ? it.ZH : t) + "_" + n.country;
                                },
                                value: zt,
                            },
                            onApprove: { type: "function", alias: "onAuthorize" },
                            onComplete: { type: "function", required: !1 },
                            onAuth: { type: "function", required: !1, sameDomain: !0 },
                            onCancel: { type: "function", required: !1 },
                            sdkMeta: { type: "string", queryParam: !0, value: rr },
                            style: { type: "object", required: !1, queryParam: !0 },
                            disableCard: {
                                type: "array",
                                queryParam: "disable-card",
                                allowDelegate: !0,
                                queryValue: function (e) {
                                    return e.value.join(",");
                                },
                                value: It,
                            },
                        },
                    });
                });
            }
            function cl(e) {
                return ui(
                    "html",
                    null,
                    ui(
                        "body",
                        null,
                        ui("style", {
                            nonce: e.nonce,
                            innerHTML:
                                "\n                        html, body {\n                            padding: 0;\n                            margin: 0;\n                            width: 100%;\n                            height: 100%;\n                            background: rgba(240,240,240,0.5);\n                        }\n\n                        body {\n                            position: relative;\n                            overflow: hidden;\n                        }\n                    ",
                        })
                    )
                );
            }
            function sl(e) {
                var n = e.uid,
                    t = e.frame,
                    r = e.prerenderFrame,
                    o = e.event,
                    i = e.nonce;
                if (!t || !r) throw new Error("Expected frame and prerenderframe");
                return (
                    t.classList.add("component-frame"),
                        r.classList.add("prerender-frame"),
                        t.classList.add("invisible"),
                        r.classList.add("visible"),
                        o.on("zoid-rendered", function () {
                            r.classList.remove("visible"),
                                r.classList.add("invisible"),
                                t.classList.remove("invisible"),
                                t.classList.add("visible"),
                                setTimeout(function () {
                                    jn(r);
                                }, 1e3);
                        }),
                        ui(
                            "div",
                            {
                                id: n,
                                onRender: function (e) {
                                    o.on("zoid-resize", function (n) {
                                        var t = n.width,
                                            r = n.height;
                                        "number" == typeof t && (e.style.width = tt(t)), "number" == typeof r && (e.style.height = tt(r));
                                    });
                                },
                            },
                            ui(
                                "style",
                                { nonce: i },
                                "\n                    #" +
                                n +
                                " {\n                        position: relative;\n                        display: inline-block;\n                        width: 100%;\n                        min-width: 250px;\n                        max-width: 100%;\n                        font-size: 0;\n                        height: 91px;\n                        min-height: 91px;\n                        transition: all 0.5s ease-in-out;\n                    }\n\n                    @media only screen and (min-width: 0px) {\n                        #" +
                                n +
                                " {\n                            min-height: 91px;\n                        }\n                    }\n\n                    @media only screen and (min-width: 600px) {\n                        #" +
                                n +
                                " {\n                            min-height: 91px;\n                        }\n                    }\n\n                    #" +
                                n +
                                " > iframe {\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                    }\n\n                    #" +
                                n +
                                " > iframe.component-frame {\n                        z-index: 100;\n                    }\n\n                    #" +
                                n +
                                " > iframe.prerender-frame {\n                        transition: opacity .2s linear;\n                        z-index: 200;\n                    }\n\n                    #" +
                                n +
                                " > iframe.visible {\n                        opacity: 1;\n                    }\n\n                    #" +
                                n +
                                " > iframe.invisible {\n                        opacity: 0;\n                        pointer-events: none;\n                    }\n                "
                            ),
                            ui("node", { el: t }),
                            ui("node", { el: r })
                        )
                );
            }
            function dl() {
                return _e(dl, function () {
                    return Wo({
                        tag: "paypal-fields",
                        url: function () {
                            return "https://www.sandbox.paypal.com/altpayfields";
                        },
                        domain: Qt(),
                        autoResize: { width: !1, height: !0, element: "body" },
                        dimensions: { width: "100%", height: "300px" },
                        logger: nr(),
                        containerTemplate: function (e) {
                            var n = e.doc;
                            return ui(sl, { uid: e.uid, frame: e.frame, prerenderFrame: e.prerenderFrame, event: e.event, nonce: e.props.nonce }).render(mi({ doc: n }));
                        },
                        prerenderTemplate: function (e) {
                            var n = e.doc;
                            return ui(cl, { nonce: e.props.nonce }).render(mi({ doc: n }));
                        },
                        attributes: { iframe: { scrolling: "no" } },
                        props: {
                            fields: {
                                type: "object",
                                queryParam: !0,
                                required: !1,
                                decorate: function (e) {
                                    return e.value;
                                },
                                default: function () {
                                    return {};
                                },
                            },
                            style: {
                                type: "object",
                                queryParam: !0,
                                required: !1,
                                decorate: function (e) {
                                    return e.value;
                                },
                                default: function () {
                                    return {};
                                },
                            },
                            sdkMeta: { type: "string", queryParam: !0, sendToChild: !1, value: rr },
                            clientID: { type: "string", queryParam: !0, value: Tt },
                            fundingSource: { type: "string", queryParam: !0, required: !0 },
                            correlationID: { type: "string", required: !1, value: gt },
                            sessionID: { type: "string", value: ar, queryParam: !0, required: !1 },
                            fieldsSessionID: { type: "string", value: xe, queryParam: !0 },
                            env: { type: "string", queryParam: !0, value: ft },
                            onInit: { type: "function", required: !1 },
                            onError: { type: "function", required: !1 },
                            onContinue: { type: "function", required: !1 },
                            onClose: { type: "function", required: !1 },
                            showActionButtons: { type: "boolean", queryParam: !0, required: !1 },
                            onFieldsClose: { type: "function", required: !1 },
                            buyerCountry: { type: "string", queryParam: !0, required: !1, default: Dt },
                            locale: {
                                type: "object",
                                queryParam: "locale.x",
                                allowDelegate: !0,
                                queryValue: function (e) {
                                    var n = e.value;
                                    return n.lang + "_" + n.country;
                                },
                                value: zt,
                            },
                            storageState: {
                                type: "object",
                                value: function () {
                                    return Yo;
                                },
                            },
                            sessionState: {
                                type: "object",
                                value: function () {
                                    return Ko;
                                },
                            },
                            partnerAttributionID: { type: "string", required: !1, value: Wt },
                        },
                    });
                });
            }
            function fl() {
                return _e(fl, function () {
                    return Wo({
                        tag: "paypal-menu",
                        url: function () {
                            return "https://www.sandbox.paypal.com/smart/menu";
                        },
                        domain: Qt(),
                        autoResize: { width: !1, height: !0 },
                        dimensions: { width: "100%", height: "150px" },
                        logger: nr(),
                        prerenderTemplate: function () {
                            return null;
                        },
                        attributes: { iframe: { scrolling: "no" } },
                        props: { sdkMeta: { type: "string", queryParam: !0, sendToChild: !1, value: rr }, clientID: { type: "string", queryParam: !0 } },
                    });
                });
            }
            function pl() {
                return _e(pl, function () {
                    return Wo({
                        tag: "paypal-installments",
                        url: function () {
                            return "https://www.sandbox.paypal.com/smart/installments";
                        },
                        domain: Qt(),
                        autoResize: { width: !1, height: !0 },
                        dimensions: { width: "100%", height: "100%" },
                        logger: nr(),
                        prerenderTemplate: function (e) {
                            var n = e.doc,
                                t = e.props.nonce || Zt();
                            return ui(Pa, { nonce: t }).render(mi({ doc: n }));
                        },
                        containerTemplate: function (e) {
                            var n = e.doc;
                            return ui(Ea, { context: e.context, close: e.close, focus: e.focus, event: e.event, frame: e.frame, prerenderFrame: e.prerenderFrame, autoResize: !0, hideCloseButton: !0, nonce: e.props.nonce }).render(
                                mi({ doc: n })
                            );
                        },
                        props: {
                            sdkMeta: { type: "string", queryParam: !0, sendToChild: !1, value: rr },
                            clientID: { type: "string", queryParam: !0 },
                            locale: { type: "object", queryParam: !0, value: zt },
                            nonce: { type: "string", default: Zt, required: !1 },
                        },
                    });
                });
            }
            function hl(e) {
                var n = e.uid,
                    t = e.frame,
                    r = e.prerenderFrame,
                    o = e.event,
                    i = e.cspNonce;
                if (!t || !r) throw new Error("Expected frame and prerenderframe");
                return (
                    t.classList.add("component-frame"),
                        r.classList.add("prerender-frame"),
                        t.classList.add("invisible"),
                        r.classList.add("visible"),
                        o.on("zoid-rendered", function () {
                            r.classList.remove("visible"),
                                r.classList.add("invisible"),
                                t.classList.remove("invisible"),
                                t.classList.add("visible"),
                                setTimeout(function () {
                                    jn(r);
                                }, 1);
                        }),
                        ui(
                            "div",
                            { id: n },
                            ui("style", {
                                nonce: i,
                                innerHTML:
                                    "\n            * {\n                box-sizing: border-box;\n            }\n\n            #" +
                                    n +
                                    " {\n                display: flex;\n                position: fixed;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                z-index: 20000;\n                align-items: center;\n                justify-content: center;\n                background-color: rgba(0, 0, 0, 0.4); \n            }\n            #" +
                                    n +
                                    " iframe {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n            #" +
                                    n +
                                    " > iframe.visible {\n                opacity: 1;\n            }\n            #" +
                                    n +
                                    " > iframe.invisible {\n                opacity: 0;\n                pointer-events: none;\n            }\n            #qrModal {\n                background: #2F3033;\n                box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);\n                border-radius: 16px;                        \n                width: 720px;\n                height: 612px;  \n                display: flex;\n                align-items: center;\n                justify-content: center;\n                flex-direction: column;\n                position: relative;\n            }     \n            ",
                            }),
                            ui("div", { id: "qrModal" }, ui("node", { el: t }), ui("node", { el: r }))
                        )
                );
            }
            function ml(e) {
                var n = e.frame,
                    t = e.prerenderFrame,
                    r = e.doc;
                if (n && t) return ui(hl, { uid: e.uid, cspNonce: e.props.cspNonce, event: e.event, frame: n, prerenderFrame: t }).render(mi({ doc: r }));
            }
            function gl(e) {
                var n = e.doc,
                    t = e.props,
                    r = e.close,
                    o = [
                        ui("style", {
                            nonce: t.cspNonce,
                            innerHTML:
                                "\n    #close {\n        position: absolute;\n        right: 16px;\n        top: 16px;\n        width: 16px;\n        height: 16px;\n        opacity: 0.6;\n        z-index: 100;\n    }\n    #close:hover {\n        opacity: 1;\n    }\n    #close:before, #close:after {\n        position: absolute;\n        left: 8px;\n        content: ' ';\n        height: 20px;\n        width: 2px;\n        background-color: #FFF;\n    }\n    #close:before {\n        transform: rotate(45deg);\n    }\n    #close:after {\n        transform: rotate(-45deg);\n    }  \n    ",
                        }),
                        ui("a", { href: "#", id: "close", "aria-label": "close", role: "button", onClick: r }),
                    ];
                return new Pa({ nonce: t.cspNonce }, o).render(mi({ doc: n }));
            }
            function yl() {
                return _e(yl, function () {
                    return Wo({
                        tag: "paypal-qr-modal",
                        url: function (e) {
                            return "https://www.sandbox.paypal.com/smart/qrcode?" + e.props.qrPath;
                        },
                        domain: Qt(),
                        dimensions: { width: "100%", height: "100%" },
                        logger: nr(),
                        prerenderTemplate: gl,
                        containerTemplate: ml,
                        autoResize: { width: !0, height: !0 },
                        attributes: { iframe: { scrolling: "no" } },
                        props: {
                            onEscapePath: { type: "function", required: !0 },
                            qrPath: { type: "string", queryParam: !0, required: !0 },
                            cspNonce: { type: "string", queryParam: !1, required: !1, value: Zt },
                            debug: { type: "boolean", value: yt, queryParam: !0, required: !1 },
                            state: { type: "string", queryParam: !1, required: !1 },
                            errorText: { type: "string", queryParam: !1, required: !1 },
                            sdkMeta: { type: "string", queryParam: !0, sendToChild: !1, value: rr },
                            env: { type: "string", queryParam: !0, required: !1, value: ft },
                            sessionID: { type: "string", queryParam: !0, required: !1, value: ar },
                            locale: { type: "object", queryParam: !0, required: !1, value: zt },
                            clientID: { type: "string", queryParam: !0, required: !1, value: Tt },
                            orderID: { type: "string", queryParam: !0, required: !1 },
                            sdkCorrelationID: { type: "string", required: !1, value: gt, queryParam: !0 },
                            buyerCountry: { type: "string", queryParam: !0, required: !1, value: Dt },
                            buttonSessionID: { type: "string", queryParam: !0, required: !1, value: xe },
                        },
                    });
                });
            }
            function vl() {
                return _e(vl, function () {
                    return Wo({
                        tag: "paypal-modal",
                        url: function () {
                            return "https://www.sandbox.paypal.com/smart/modal";
                        },
                        domain: Qt(),
                        dimensions: { width: "100%", height: "100%" },
                        logger: nr(),
                        containerTemplate: function (e) {
                            var n = e.frame,
                                t = e.prerenderFrame,
                                r = e.doc,
                                o = e.uid,
                                i = e.event;
                            if (n && t) {
                                var a = e.props.cspNonce;
                                return (
                                    t.classList.add("visible"),
                                        n.classList.add("invisible"),
                                        i.on("zoid-rendered", function () {
                                            t.classList.remove("visible"),
                                                t.classList.add("invisible"),
                                                n.classList.remove("invisible"),
                                                n.classList.add("visible"),
                                                setTimeout(function () {
                                                    jn(t);
                                                }, 1);
                                        }),
                                        ui(
                                            "div",
                                            {
                                                id: o,
                                                onRender: function (e) {
                                                    i.on("zoid-resize", function (n) {
                                                        var t = n.width,
                                                            r = n.height;
                                                        "number" == typeof t && (e.style.width = tt(t)), "number" == typeof r && (e.style.height = tt(r));
                                                    });
                                                },
                                            },
                                            ui("style", {
                                                nonce: a,
                                                innerHTML:
                                                    "\n                                #" +
                                                    o +
                                                    " {\n                                    display: block;\n                                    position: fixed;\n                                    width: 100%;\n                                    height: 100%;\n                                    top: 0;\n                                    left: 0;\n                                    z-index: 200000;\n                                }\n\n                                #" +
                                                    o +
                                                    " > iframe {\n                                    display: inline-block;\n                                    position: absolute;\n                                    width: 100%;\n                                    height: 100%;\n                                    top: 0;\n                                    left: 0;\n                                    transition: opacity .2s ease-in-out;\n                                }\n                                #" +
                                                    o +
                                                    " > iframe.invisible {\n                                    opacity: 0;\n                                }\n                                #" +
                                                    o +
                                                    " > iframe.visible {\n                                    opacity: 1;\n                                }\n                            ",
                                            }),
                                            ui("node", { el: n }),
                                            ui("node", { el: t })
                                        ).render(mi({ doc: r }))
                                );
                            }
                        },
                        prerenderTemplate: function () {
                            return null;
                        },
                        attributes: { iframe: { scrolling: "no" } },
                        props: {
                            sdkMeta: { type: "string", queryParam: !0, sendToChild: !1, value: rr },
                            clientID: { type: "string", queryParam: !0 },
                            orderID: { type: "string", queryParam: !0 },
                            customerID: { type: "string", queryParam: !0 },
                        },
                    });
                });
            }
            function wl(e) {
                if (er()) return e;
            }
            var bl = {
                    __get__: function () {
                        return ul();
                    },
                },
                Cl = {
                    __get__: function () {
                        return wl(Ta());
                    },
                },
                El = {
                    __get__: function () {
                        return wl(ll());
                    },
                },
                Ll = {
                    __get__: function () {
                        return wl(dl());
                    },
                },
                xl = {
                    __get__: function () {
                        return wl(fl());
                    },
                },
                Ol = {
                    __get__: function () {
                        return wl(vl());
                    },
                },
                Pl = {
                    __get__: function () {
                        return wl(pl());
                    },
                },
                Sl = {
                    __get__: function () {
                        return wl(yl());
                    },
                },
                Tl = {
                    __get__: function () {
                        return wl($u);
                    },
                },
                Nl = {
                    __get__: function () {
                        return wl(On);
                    },
                },
                Al = {
                    __get__: function () {
                        return wl(Go);
                    },
                },
                kl = {
                    __get__: function () {
                        return wl(Go);
                    },
                },
                _l = {
                    __get__: function () {
                        return wl(Uo);
                    },
                };
            function Rl() {
                ul(), Ta();
            }
            function Ml(e) {
                !(function (e) {
                    var n;
                    zo(), (n = co()), delete window[n], ao(), Ho.all(e);
                })(e);
            }
            function Fl(e) {
                if (er()) return e;
            }
            var Il = {
                    __get__: function () {
                        return Fl(xa());
                    },
                },
                Dl = {
                    __get__: function () {
                        return Fl(o);
                    },
                };
            function Bl() {
                (function (e, n) {
                    void 0 === e && (e = "sandbox"), void 0 === n && (n = !1);
                    try {
                        if (!("mock://www.paypal.com" === window.mockDomain || er() || (Pt("components") || "").toLowerCase().split(",").indexOf("shopping") >= 0)) {
                            if (e === lt.SANDBOX && !0 !== n) return;
                            var t = (function () {
                                    var e = Nt();
                                    if (e.length && "unknown" !== e[0]) return e[0];
                                })(),
                                r = Tt(),
                                o = window.location.hostname,
                                i = document.createElement("script"),
                                a = document.querySelector("head"),
                                u = (function (e, n, t, r) {
                                    var o = "https://www.sandbox.paypal.com/tagmanager/pptm.js?id=" + r + "&t=xo&v=5.0.332&source=payments_sdk";
                                    return n && (o += "&mrid=" + n), t && (o += "&client_id=" + t), Pt("components") && (o += "&comp=" + String(Pt("components"))), o + "&vault=" + String(_t());
                                })(0, t, r, o);
                            (i.src = u), (i.id = "xo-pptm"), (i.async = !0), a && a.appendChild(i);
                        }
                    } catch (e) {
                        !(function (e, n) {
                            try {
                                var t,
                                    r = nr();
                                r.track((((t = {}).ext_error_code = "paypal-muse-components"), (t.ext_error_desc = JSON.stringify({ name: e, error: Ie(n) })), t)), r.error(e, { err: Fe(n) }), r.flush().catch(Re);
                            } catch (n) {
                                var o,
                                    i = nr();
                                i.track((((o = {}).ext_error_code = "paypal-muse-components"), (o.ext_error_desc = "Error logging error event for " + e), o)), i.error("logger_error", { err: Fe(n) }), i.flush().catch(Re);
                            }
                        })("insertPPTM", e);
                    }
                })("sandbox", !1),
                    dr().on("button_render", function () {
                        (window.paypalDDL = window.paypalDDL || []),
                        0 ===
                        window.paypalDDL.filter(function (e) {
                            return "paypalButtonRender" === e.event;
                        }).length && window.paypalDDL.push({ event: "paypalButtonRender" });
                    });
            }
            !(function (e) {
                var n = Bt(),
                    t = window[n];
                if (t) {
                    if (!t.__internal_destroy__)
                        throw new Error(
                            "Attempted to load sdk version 5.0.332 on page, but window." +
                            n +
                            " at version " +
                            (t && t.version) +
                            ' already loaded.\n\nTo load this sdk alongside the existing version, please specify a different namespace in the script tag, e.g. <script src="https://www.paypal.com/sdk/js?client-id=CLIENT_ID" data-namespace="paypal_sdk"></script>, then use the paypal_sdk namespace in place of paypal in your code.'
                        );
                    t.__internal_destroy__(new Error("New SDK instance loaded, existing instance destroyed (" + n + " / 5.0.332)")), delete window[n];
                }
                (window[n] = window[n] || {}), (window[n].version = "5.0.332");
                for (
                    var r = [],
                        o = function (t) {
                            var o = e[t],
                                i = o.name,
                                a = o.requirer,
                                u = o.setupHandler;
                            try {
                                var c = a(),
                                    s = c[u],
                                    d = c.setup,
                                    f = c.destroy,
                                    p = l(c, [u, "setup", "destroy"].map(Yt));
                                s ? s() : d && d(), f && r.push(f);
                                for (var h = 0, m = Object.keys(p); h < m.length; h++) {
                                    var g = m[h],
                                        y = p[g];
                                    y && y.__get__ && (y = y.__get__()), y && (window[n][g] = y);
                                }
                            } catch (e) {
                                return (
                                    setTimeout(function () {
                                        throw new Error("Bootstrap Error for " + i + ":\n\n" + e.message + "\n\n" + e.stack);
                                    }, 1),
                                        "continue"
                                );
                            }
                        },
                        i = 0;
                    i < e.length;
                    i++
                )
                    o(i);
                Object.defineProperty(window[n], "__internal_destroy__", {
                    enumerable: !1,
                    value: function (e) {
                        void 0 === e && (e = new Error("SDK instance destroyed (" + n + " / 5.0.332)")),
                            r.forEach(function (n) {
                                return n(e);
                            }),
                            jn(Lt()),
                            delete window[n];
                    },
                });
            })([
                {
                    name: "__paypal-sdk-client__",
                    setupHandler: "setupClient",
                    requirer: function () {
                        return r;
                    },
                },
                {
                    name: "buttons",
                    setupHandler: "setupButtons",
                    requirer: function () {
                        return i;
                    },
                },
                {
                    name: "common",
                    setupHandler: null,
                    requirer: function () {
                        return a;
                    },
                },
                {
                    name: "muse",
                    setupHandler: null,
                    requirer: function () {
                        return u;
                    },
                },
            ]);
        },
    ])
);
