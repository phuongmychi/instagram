(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        "1TCz": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("kOwS"),
                i = n("ln6h"),
                r = n.n(i),
                a = n("0iUn"),
                s = n("MI3g"),
                c = n("a7VT"),
                l = n("sLSF"),
                u = n("Tit0"),
                p = n("MX0m"),
                h = n.n(p),
                f = n("q1tI"),
                d = n.n(f),
                g = n("8Kt/"),
                y = n.n(g),
                v = n("8Bbg"),
                m = n.n(v),
                b = n("iVi/");

            function w(e, t) {
                void 0 === t && (t = {});
                var n = function(e) {
                    if (e && "j" === e[0] && ":" === e[1]) return e.substr(2);
                    return e
                }(e);
                if (function(e, t) {
                        return "undefined" === typeof t && (t = !e || "{" !== e[0] && "[" !== e[0] && '"' !== e[0]), !t
                    }(n, t.doNotParse)) try {
                    return JSON.parse(n)
                } catch (o) {}
                return e
            }
            var k = n("Qetd"),
                x = function() {
                    function e(e, t) {
                        var n = this;
                        this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.cookies = function(e, t) {
                            return "string" === typeof e ? b.parse(e, t) : "object" === typeof e && null !== e ? e : {}
                        }(e, t), new Promise((function() {
                            n.HAS_DOCUMENT_COOKIE = "object" === typeof document && "string" === typeof document.cookie
                        })).catch((function() {}))
                    }
                    return e.prototype._updateBrowserValues = function(e) {
                        this.HAS_DOCUMENT_COOKIE && (this.cookies = b.parse(document.cookie, e))
                    }, e.prototype._emitChange = function(e) {
                        for (var t = 0; t < this.changeListeners.length; ++t) this.changeListeners[t](e)
                    }, e.prototype.get = function(e, t, n) {
                        return void 0 === t && (t = {}), this._updateBrowserValues(n), w(this.cookies[e], t)
                    }, e.prototype.getAll = function(e, t) {
                        void 0 === e && (e = {}), this._updateBrowserValues(t);
                        var n = {};
                        for (var o in this.cookies) n[o] = w(this.cookies[o], e);
                        return n
                    }, e.prototype.set = function(e, t, n) {
                        var o;
                        "object" === typeof t && (t = JSON.stringify(t)), this.cookies = k({}, this.cookies, ((o = {})[e] = t, o)), this.HAS_DOCUMENT_COOKIE && (document.cookie = b.serialize(e, t, n)), this._emitChange({
                            name: e,
                            value: t,
                            options: n
                        })
                    }, e.prototype.remove = function(e, t) {
                        var n = t = k({}, t, {
                            expires: new Date(1970, 1, 1, 0, 0, 1),
                            maxAge: 0
                        });
                        this.cookies = k({}, this.cookies), delete this.cookies[e], this.HAS_DOCUMENT_COOKIE && (document.cookie = b.serialize(e, "", n)), this._emitChange({
                            name: e,
                            value: void 0,
                            options: t
                        })
                    }, e.prototype.addChangeListener = function(e) {
                        this.changeListeners.push(e)
                    }, e.prototype.removeChangeListener = function(e) {
                        var t = this.changeListeners.indexOf(e);
                        t >= 0 && this.changeListeners.splice(t, 1)
                    }, e
                }(),
                O = n("9kay"),
                S = (n("ewTs"), n("WBbS")),
                C = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                };
            var E = {
                    type: "logger",
                    log: function(e) {
                        this.output("log", e)
                    },
                    warn: function(e) {
                        this.output("warn", e)
                    },
                    error: function(e) {
                        this.output("error", e)
                    },
                    output: function(e, t) {
                        var n;
                        console && console[e] && (n = console)[e].apply(n, function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n
                            }
                            return Array.from(e)
                        }(t))
                    }
                },
                j = new(function() {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.init(t, n)
                    }
                    return e.prototype.init = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.prefix = t.prefix || "i18next:", this.logger = e || E, this.options = t, this.debug = t.debug
                    }, e.prototype.setDebug = function(e) {
                        this.debug = e
                    }, e.prototype.log = function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "log", "", !0)
                    }, e.prototype.warn = function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "warn", "", !0)
                    }, e.prototype.error = function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "error", "")
                    }, e.prototype.deprecate = function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                    }, e.prototype.forward = function(e, t, n, o) {
                        return o && !this.debug ? null : ("string" === typeof e[0] && (e[0] = "" + n + this.prefix + " " + e[0]), this.logger[t](e))
                    }, e.prototype.create = function(t) {
                        return new e(this.logger, C({
                            prefix: this.prefix + ":" + t + ":"
                        }, this.options))
                    }, e
                }());
            var P = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.observers = {}
                }
                return e.prototype.on = function(e, t) {
                    var n = this;
                    return e.split(" ").forEach((function(e) {
                        n.observers[e] = n.observers[e] || [], n.observers[e].push(t)
                    })), this
                }, e.prototype.off = function(e, t) {
                    var n = this;
                    this.observers[e] && this.observers[e].forEach((function() {
                        if (t) {
                            var o = n.observers[e].indexOf(t);
                            o > -1 && n.observers[e].splice(o, 1)
                        } else delete n.observers[e]
                    }))
                }, e.prototype.emit = function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    if (this.observers[e]) {
                        var i = [].concat(this.observers[e]);
                        i.forEach((function(e) {
                            e.apply(void 0, n)
                        }))
                    }
                    if (this.observers["*"]) {
                        var r = [].concat(this.observers["*"]);
                        r.forEach((function(t) {
                            t.apply(t, [e].concat(n))
                        }))
                    }
                }, e
            }();

            function N(e) {
                return null == e ? "" : "" + e
            }

            function T(e, t, n) {
                function o(e) {
                    return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
                }

                function i() {
                    return !e || "string" === typeof e
                }
                for (var r = "string" !== typeof t ? [].concat(t) : t.split("."); r.length > 1;) {
                    if (i()) return {};
                    var a = o(r.shift());
                    !e[a] && n && (e[a] = new n), e = e[a]
                }
                return i() ? {} : {
                    obj: e,
                    k: o(r.shift())
                }
            }

            function L(e, t, n) {
                var o = T(e, t, Object);
                o.obj[o.k] = n
            }

            function R(e, t) {
                var n = T(e, t),
                    o = n.obj,
                    i = n.k;
                if (o) return o[i]
            }

            function I(e, t, n) {
                for (var o in t) o in e ? "string" === typeof e[o] || e[o] instanceof String || "string" === typeof t[o] || t[o] instanceof String ? n && (e[o] = t[o]) : I(e[o], t[o], n) : e[o] = t[o];
                return e
            }

            function A(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
            var _ = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };

            function M(e) {
                return "string" === typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                    return _[e]
                })) : e
            }
            var z = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            };

            function D(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function(e, t) {
                    for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
                        var i = n[o],
                            r = Object.getOwnPropertyDescriptor(t, i);
                        r && r.configurable && void 0 === e[i] && Object.defineProperty(e, i, r)
                    }
                }(e, t))
            }
            var U = function(e) {
                    function t(n) {
                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            ns: ["translation"],
                            defaultNS: "translation"
                        };
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var i = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                        }(this, e.call(this));
                        return i.data = n || {}, i.options = o, void 0 === i.options.keySeparator && (i.options.keySeparator = "."), i
                    }
                    return D(t, e), t.prototype.addNamespaces = function(e) {
                        this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                    }, t.prototype.removeNamespaces = function(e) {
                        var t = this.options.ns.indexOf(e);
                        t > -1 && this.options.ns.splice(t, 1)
                    }, t.prototype.getResource = function(e, t, n) {
                        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            i = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator,
                            r = [e, t];
                        return n && "string" !== typeof n && (r = r.concat(n)), n && "string" === typeof n && (r = r.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (r = e.split(".")), R(this.data, r)
                    }, t.prototype.addResource = function(e, t, n, o) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                silent: !1
                            },
                            r = this.options.keySeparator;
                        void 0 === r && (r = ".");
                        var a = [e, t];
                        n && (a = a.concat(r ? n.split(r) : n)), e.indexOf(".") > -1 && (o = t, t = (a = e.split("."))[1]), this.addNamespaces(t), L(this.data, a, o), i.silent || this.emit("added", e, t, n, o)
                    }, t.prototype.addResources = function(e, t, n) {
                        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                            silent: !1
                        };
                        for (var i in n) "string" === typeof n[i] && this.addResource(e, t, i, n[i], {
                            silent: !0
                        });
                        o.silent || this.emit("added", e, t, n)
                    }, t.prototype.addResourceBundle = function(e, t, n, o, i) {
                        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                silent: !1
                            },
                            a = [e, t];
                        e.indexOf(".") > -1 && (o = n, n = t, t = (a = e.split("."))[1]), this.addNamespaces(t);
                        var s = R(this.data, a) || {};
                        o ? I(s, n, i) : s = z({}, s, n), L(this.data, a, s), r.silent || this.emit("added", e, t, n)
                    }, t.prototype.removeResourceBundle = function(e, t) {
                        this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                    }, t.prototype.hasResourceBundle = function(e, t) {
                        return void 0 !== this.getResource(e, t)
                    }, t.prototype.getResourceBundle = function(e, t) {
                        return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? z({}, this.getResource(e, t)) : this.getResource(e, t)
                    }, t.prototype.getDataByLanguage = function(e) {
                        return this.data[e]
                    }, t.prototype.toJSON = function() {
                        return this.data
                    }, t
                }(P),
                H = {
                    processors: {},
                    addPostProcessor: function(e) {
                        this.processors[e.name] = e
                    },
                    handle: function(e, t, n, o, i) {
                        var r = this;
                        return e.forEach((function(e) {
                            r.processors[e] && (t = r.processors[e].process(t, n, o, i))
                        })), t
                    }
                },
                B = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                F = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };

            function V(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function(e, t) {
                    for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
                        var i = n[o],
                            r = Object.getOwnPropertyDescriptor(t, i);
                        r && r.configurable && void 0 === e[i] && Object.defineProperty(e, i, r)
                    }
                }(e, t))
            }
            var K = function(e) {
                function t(n) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i, r, a = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, e.call(this));
                    return i = n, r = a, ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat"].forEach((function(e) {
                        i[e] && (r[e] = i[e])
                    })), a.options = o, void 0 === a.options.keySeparator && (a.options.keySeparator = "."), a.logger = j.create("translator"), a
                }
                return V(t, e), t.prototype.changeLanguage = function(e) {
                    e && (this.language = e)
                }, t.prototype.exists = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            interpolation: {}
                        },
                        n = this.resolve(e, t);
                    return n && void 0 !== n.res
                }, t.prototype.extractFromKey = function(e, t) {
                    var n = t.nsSeparator || this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var o = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                        i = t.ns || this.options.defaultNS;
                    if (n && e.indexOf(n) > -1) {
                        var r = e.split(n);
                        (n !== o || n === o && this.options.ns.indexOf(r[0]) > -1) && (i = r.shift()), e = r.join(o)
                    }
                    return "string" === typeof i && (i = [i]), {
                        key: e,
                        namespaces: i
                    }
                }, t.prototype.translate = function(e, t) {
                    var n = this;
                    if ("object" !== ("undefined" === typeof t ? "undefined" : F(t)) && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), t || (t = {}), void 0 === e || null === e || "" === e) return "";
                    "number" === typeof e && (e = String(e)), "string" === typeof e && (e = [e]);
                    var o = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                        i = this.extractFromKey(e[e.length - 1], t),
                        r = i.key,
                        a = i.namespaces,
                        s = a[a.length - 1],
                        c = t.lng || this.language,
                        l = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (c && "cimode" === c.toLowerCase()) {
                        if (l) {
                            var u = t.nsSeparator || this.options.nsSeparator;
                            return s + u + r
                        }
                        return r
                    }
                    var p = this.resolve(e, t),
                        h = p && p.res,
                        f = p && p.usedKey || r,
                        d = Object.prototype.toString.apply(h),
                        g = ["[object Number]", "[object Function]", "[object RegExp]"],
                        y = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
                        v = !this.i18nFormat || this.i18nFormat.handleAsObject,
                        m = "string" !== typeof h && "boolean" !== typeof h && "number" !== typeof h;
                    if (v && h && m && g.indexOf(d) < 0 && (!y || "[object Array]" !== d)) {
                        if (!t.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, h, t) : "key '" + r + " (" + this.language + ")' returned an object instead of string.";
                        if (o) {
                            var b = "[object Array]" === d ? [] : {};
                            for (var w in h)
                                if (Object.prototype.hasOwnProperty.call(h, w)) {
                                    var k = "" + f + o + w;
                                    b[w] = this.translate(k, B({}, t, {
                                        joinArrays: !1,
                                        ns: a
                                    })), b[w] === k && (b[w] = h[w])
                                } h = b
                        }
                    } else if (v && y && "[object Array]" === d)(h = h.join(y)) && (h = this.extendTranslation(h, e, t));
                    else {
                        var x = !1,
                            O = !1;
                        if (!this.isValidLookup(h) && void 0 !== t.defaultValue) {
                            if (x = !0, void 0 !== t.count) {
                                var S = this.pluralResolver.getSuffix(c, t.count);
                                h = t["defaultValue" + S]
                            }
                            h || (h = t.defaultValue)
                        }
                        this.isValidLookup(h) || (O = !0, h = r);
                        var C = t.defaultValue && t.defaultValue !== h && this.options.updateMissing;
                        if (O || x || C) {
                            this.logger.log(C ? "updateKey" : "missingKey", c, s, r, C ? t.defaultValue : h);
                            var E = [],
                                j = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && j && j[0])
                                for (var P = 0; P < j.length; P++) E.push(j[P]);
                            else "all" === this.options.saveMissingTo ? E = this.languageUtils.toResolveHierarchy(t.lng || this.language) : E.push(t.lng || this.language);
                            var N = function(e, o) {
                                n.options.missingKeyHandler ? n.options.missingKeyHandler(e, s, o, C ? t.defaultValue : h, C, t) : n.backendConnector && n.backendConnector.saveMissing && n.backendConnector.saveMissing(e, s, o, C ? t.defaultValue : h, C, t), n.emit("missingKey", e, s, o, h)
                            };
                            if (this.options.saveMissing) {
                                var T = void 0 !== t.count && "string" !== typeof t.count;
                                this.options.saveMissingPlurals && T ? E.forEach((function(e) {
                                    n.pluralResolver.getPluralFormsOfKey(e, r).forEach((function(t) {
                                        return N([e], t)
                                    }))
                                })) : N(E, r)
                            }
                        }
                        h = this.extendTranslation(h, e, t, p), O && h === r && this.options.appendNamespaceToMissingKey && (h = s + ":" + r), O && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(h))
                    }
                    return h
                }, t.prototype.extendTranslation = function(e, t, n, o) {
                    var i = this;
                    if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, n, o.usedLng, o.usedNS, o.usedKey, {
                        resolved: o
                    });
                    else if (!n.skipInterpolation) {
                        n.interpolation && this.interpolator.init(B({}, n, {
                            interpolation: B({}, this.options.interpolation, n.interpolation)
                        }));
                        var r = n.replace && "string" !== typeof n.replace ? n.replace : n;
                        this.options.interpolation.defaultVariables && (r = B({}, this.options.interpolation.defaultVariables, r)), e = this.interpolator.interpolate(e, r, n.lng || this.language, n), !1 !== n.nest && (e = this.interpolator.nest(e, (function() {
                            return i.translate.apply(i, arguments)
                        }), n)), n.interpolation && this.interpolator.reset()
                    }
                    var a = n.postProcess || this.options.postProcess,
                        s = "string" === typeof a ? [a] : a;
                    return void 0 !== e && null !== e && s && s.length && !1 !== n.applyPostProcessor && (e = H.handle(s, e, t, n, this)), e
                }, t.prototype.resolve = function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = void 0,
                        i = void 0,
                        r = void 0,
                        a = void 0;
                    return "string" === typeof e && (e = [e]), e.forEach((function(e) {
                        if (!t.isValidLookup(o)) {
                            var s = t.extractFromKey(e, n),
                                c = s.key;
                            i = c;
                            var l = s.namespaces;
                            t.options.fallbackNS && (l = l.concat(t.options.fallbackNS));
                            var u = void 0 !== n.count && "string" !== typeof n.count,
                                p = void 0 !== n.context && "string" === typeof n.context && "" !== n.context,
                                h = n.lngs ? n.lngs : t.languageUtils.toResolveHierarchy(n.lng || t.language, n.fallbackLng);
                            l.forEach((function(e) {
                                t.isValidLookup(o) || (a = e, h.forEach((function(i) {
                                    if (!t.isValidLookup(o)) {
                                        r = i;
                                        var a = c,
                                            s = [a];
                                        if (t.i18nFormat && t.i18nFormat.addLookupKeys) t.i18nFormat.addLookupKeys(s, c, i, e, n);
                                        else {
                                            var l = void 0;
                                            u && (l = t.pluralResolver.getSuffix(i, n.count)), u && p && s.push(a + l), p && s.push(a += "" + t.options.contextSeparator + n.context), u && s.push(a += l)
                                        }
                                        for (var h = void 0; h = s.pop();) t.isValidLookup(o) || (o = t.getResource(i, e, h, n))
                                    }
                                })))
                            }))
                        }
                    })), {
                        res: o,
                        usedKey: i,
                        usedLng: r,
                        usedNS: a
                    }
                }, t.prototype.isValidLookup = function(e) {
                    return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
                }, t.prototype.getResource = function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, o) : this.resourceStore.getResource(e, t, n, o)
                }, t
            }(P);

            function G(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            var W = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.options = t, this.whitelist = this.options.whitelist || !1, this.logger = j.create("languageUtils")
                }
                return e.prototype.getScriptPartFromCode = function(e) {
                    if (!e || e.indexOf("-") < 0) return null;
                    var t = e.split("-");
                    return 2 === t.length ? null : (t.pop(), this.formatLanguageCode(t.join("-")))
                }, e.prototype.getLanguagePartFromCode = function(e) {
                    if (!e || e.indexOf("-") < 0) return e;
                    var t = e.split("-");
                    return this.formatLanguageCode(t[0])
                }, e.prototype.formatLanguageCode = function(e) {
                    if ("string" === typeof e && e.indexOf("-") > -1) {
                        var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                            n = e.split("-");
                        return this.options.lowerCaseLng ? n = n.map((function(e) {
                            return e.toLowerCase()
                        })) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = G(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = G(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = G(n[2].toLowerCase()))), n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }, e.prototype.isWhitelisted = function(e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (e = this.getLanguagePartFromCode(e)), !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(e) > -1
                }, e.prototype.getFallbackCodes = function(e, t) {
                    if (!e) return [];
                    if ("string" === typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
                    if (!t) return e.default || [];
                    var n = e[t];
                    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e.default), n || []
                }, e.prototype.toResolveHierarchy = function(e, t) {
                    var n = this,
                        o = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                        i = [],
                        r = function(e) {
                            e && (n.isWhitelisted(e) ? i.push(e) : n.logger.warn("rejecting non-whitelisted language code: " + e))
                        };
                    return "string" === typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && r(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e))) : "string" === typeof e && r(this.formatLanguageCode(e)), o.forEach((function(e) {
                        i.indexOf(e) < 0 && r(n.formatLanguageCode(e))
                    })), i
                }, e
            }();
            var q = [{
                    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
                    nr: [1, 2],
                    fc: 1
                }, {
                    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "he", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                    nr: [1, 2],
                    fc: 2
                }, {
                    lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                    nr: [1],
                    fc: 3
                }, {
                    lngs: ["be", "bs", "dz", "hr", "ru", "sr", "uk"],
                    nr: [1, 2, 5],
                    fc: 4
                }, {
                    lngs: ["ar"],
                    nr: [0, 1, 2, 3, 11, 100],
                    fc: 5
                }, {
                    lngs: ["cs", "sk"],
                    nr: [1, 2, 5],
                    fc: 6
                }, {
                    lngs: ["csb", "pl"],
                    nr: [1, 2, 5],
                    fc: 7
                }, {
                    lngs: ["cy"],
                    nr: [1, 2, 3, 8],
                    fc: 8
                }, {
                    lngs: ["fr"],
                    nr: [1, 2],
                    fc: 9
                }, {
                    lngs: ["ga"],
                    nr: [1, 2, 3, 7, 11],
                    fc: 10
                }, {
                    lngs: ["gd"],
                    nr: [1, 2, 3, 20],
                    fc: 11
                }, {
                    lngs: ["is"],
                    nr: [1, 2],
                    fc: 12
                }, {
                    lngs: ["jv"],
                    nr: [0, 1],
                    fc: 13
                }, {
                    lngs: ["kw"],
                    nr: [1, 2, 3, 4],
                    fc: 14
                }, {
                    lngs: ["lt"],
                    nr: [1, 2, 10],
                    fc: 15
                }, {
                    lngs: ["lv"],
                    nr: [1, 2, 0],
                    fc: 16
                }, {
                    lngs: ["mk"],
                    nr: [1, 2],
                    fc: 17
                }, {
                    lngs: ["mnk"],
                    nr: [0, 1, 2],
                    fc: 18
                }, {
                    lngs: ["mt"],
                    nr: [1, 2, 11, 20],
                    fc: 19
                }, {
                    lngs: ["or"],
                    nr: [2, 1],
                    fc: 2
                }, {
                    lngs: ["ro"],
                    nr: [1, 2, 20],
                    fc: 20
                }, {
                    lngs: ["sl"],
                    nr: [5, 1, 2, 3],
                    fc: 21
                }],
                J = {
                    1: function(e) {
                        return Number(e > 1)
                    },
                    2: function(e) {
                        return Number(1 != e)
                    },
                    3: function(e) {
                        return 0
                    },
                    4: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    5: function(e) {
                        return Number(0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
                    },
                    6: function(e) {
                        return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                    },
                    7: function(e) {
                        return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    8: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                    },
                    9: function(e) {
                        return Number(e >= 2)
                    },
                    10: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
                    },
                    11: function(e) {
                        return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
                    },
                    12: function(e) {
                        return Number(e % 10 != 1 || e % 100 == 11)
                    },
                    13: function(e) {
                        return Number(0 !== e)
                    },
                    14: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                    },
                    15: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    16: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
                    },
                    17: function(e) {
                        return Number(1 == e || e % 10 == 1 ? 0 : 1)
                    },
                    18: function(e) {
                        return Number(0 == e ? 0 : 1 == e ? 1 : 2)
                    },
                    19: function(e) {
                        return Number(1 == e ? 0 : 0 === e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
                    },
                    20: function(e) {
                        return Number(1 == e ? 0 : 0 === e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
                    },
                    21: function(e) {
                        return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                    },
                    22: function(e) {
                        return Number(1 === e ? 0 : 2 === e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                    }
                };
            var $ = function() {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.languageUtils = t, this.options = n, this.logger = j.create("pluralResolver"), this.rules = function() {
                            var e = {};
                            return q.forEach((function(t) {
                                t.lngs.forEach((function(n) {
                                    e[n] = {
                                        numbers: t.nr,
                                        plurals: J[t.fc]
                                    }
                                }))
                            })), e
                        }()
                    }
                    return e.prototype.addRule = function(e, t) {
                        this.rules[e] = t
                    }, e.prototype.getRule = function(e) {
                        return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                    }, e.prototype.needsPlural = function(e) {
                        var t = this.getRule(e);
                        return t && t.numbers.length > 1
                    }, e.prototype.getPluralFormsOfKey = function(e, t) {
                        var n = this,
                            o = [],
                            i = this.getRule(e);
                        return i ? (i.numbers.forEach((function(i) {
                            var r = n.getSuffix(e, i);
                            o.push("" + t + r)
                        })), o) : o
                    }, e.prototype.getSuffix = function(e, t) {
                        var n = this,
                            o = this.getRule(e);
                        if (o) {
                            var i = o.noAbs ? o.plurals(t) : o.plurals(Math.abs(t)),
                                r = o.numbers[i];
                            this.options.simplifyPluralSuffix && 2 === o.numbers.length && 1 === o.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = ""));
                            var a = function() {
                                return n.options.prepend && r.toString() ? n.options.prepend + r.toString() : r.toString()
                            };
                            return "v1" === this.options.compatibilityJSON ? 1 === r ? "" : "number" === typeof r ? "_plural_" + r.toString() : a() : "v2" === this.options.compatibilityJSON && 2 === o.numbers.length && 1 === o.numbers[0] ? a() : this.options.simplifyPluralSuffix && 2 === o.numbers.length && 1 === o.numbers[0] ? a() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString()
                        }
                        return this.logger.warn("no plural rule found for: " + e), ""
                    }, e
                }(),
                Y = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                };
            var X = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.logger = j.create("interpolator"), this.init(t, !0)
                    }
                    return e.prototype.init = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments[1];
                        t && (this.options = e, this.format = e.interpolation && e.interpolation.format || function(e) {
                            return e
                        }), e.interpolation || (e.interpolation = {
                            escapeValue: !0
                        });
                        var n = e.interpolation;
                        this.escape = void 0 !== n.escape ? n.escape : M, this.escapeValue = void 0 === n.escapeValue || n.escapeValue, this.useRawValueToEscape = void 0 !== n.useRawValueToEscape && n.useRawValueToEscape, this.prefix = n.prefix ? A(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? A(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? A(n.nestingPrefix) : n.nestingPrefixEscaped || A("$t("), this.nestingSuffix = n.nestingSuffix ? A(n.nestingSuffix) : n.nestingSuffixEscaped || A(")"), this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.resetRegExp()
                    }, e.prototype.reset = function() {
                        this.options && this.init(this.options)
                    }, e.prototype.resetRegExp = function() {
                        var e = this.prefix + "(.+?)" + this.suffix;
                        this.regexp = new RegExp(e, "g");
                        var t = "" + this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix;
                        this.regexpUnescape = new RegExp(t, "g");
                        var n = this.nestingPrefix + "(.+?)" + this.nestingSuffix;
                        this.nestingRegexp = new RegExp(n, "g")
                    }, e.prototype.interpolate = function(e, t, n, o) {
                        var i = this,
                            r = void 0,
                            a = void 0,
                            s = void 0;

                        function c(e) {
                            return e.replace(/\$/g, "$$$$")
                        }
                        var l = function(e) {
                            if (e.indexOf(i.formatSeparator) < 0) return R(t, e);
                            var o = e.split(i.formatSeparator),
                                r = o.shift().trim(),
                                a = o.join(i.formatSeparator).trim();
                            return i.format(R(t, r), a, n)
                        };
                        this.resetRegExp();
                        var u = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler;
                        for (s = 0;
                            (r = this.regexpUnescape.exec(e)) && (a = l(r[1].trim()), e = e.replace(r[0], a), this.regexpUnescape.lastIndex = 0, !(++s >= this.maxReplaces)););
                        for (s = 0; r = this.regexp.exec(e);) {
                            if (void 0 === (a = l(r[1].trim())))
                                if ("function" === typeof u) {
                                    var p = u(e, r);
                                    a = "string" === typeof p ? p : ""
                                } else this.logger.warn("missed to pass in variable " + r[1] + " for interpolating " + e), a = "";
                            else "string" === typeof a || this.useRawValueToEscape || (a = N(a));
                            if (a = this.escapeValue ? c(this.escape(a)) : c(a), e = e.replace(r[0], a), this.regexp.lastIndex = 0, ++s >= this.maxReplaces) break
                        }
                        return e
                    }, e.prototype.nest = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = void 0,
                            i = void 0,
                            r = Y({}, n);

                        function a(e, t) {
                            if (e.indexOf(",") < 0) return e;
                            var n = e.split(",");
                            e = n.shift();
                            var o = n.join(",");
                            o = (o = this.interpolate(o, r)).replace(/'/g, '"');
                            try {
                                r = JSON.parse(o), t && (r = Y({}, t, r))
                            } catch (i) {
                                this.logger.error("failed parsing options string in nesting for key " + e, i)
                            }
                            return e
                        }
                        for (r.applyPostProcessor = !1; o = this.nestingRegexp.exec(e);) {
                            if ((i = t(a.call(this, o[1].trim(), r), r)) && o[0] === e && "string" !== typeof i) return i;
                            "string" !== typeof i && (i = N(i)), i || (this.logger.warn("missed to resolve " + o[1] + " for nesting " + e), i = ""), e = e.replace(o[0], i), this.regexp.lastIndex = 0
                        }
                        return e
                    }, e
                }(),
                Z = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                Q = function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var n = [],
                            o = !0,
                            i = !1,
                            r = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                        } catch (c) {
                            i = !0, r = c
                        } finally {
                            try {
                                !o && s.return && s.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                };

            function ee(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function(e, t) {
                    for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
                        var i = n[o],
                            r = Object.getOwnPropertyDescriptor(t, i);
                        r && r.configurable && void 0 === e[i] && Object.defineProperty(e, i, r)
                    }
                }(e, t))
            }
            var te = function(e) {
                function t(n, o, i) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var a = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, e.call(this));
                    return a.backend = n, a.store = o, a.languageUtils = i.languageUtils, a.options = r, a.logger = j.create("backendConnector"), a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(i, r.backend, r), a
                }
                return ee(t, e), t.prototype.queueLoad = function(e, t, n, o) {
                    var i = this,
                        r = [],
                        a = [],
                        s = [],
                        c = [];
                    return e.forEach((function(e) {
                        var o = !0;
                        t.forEach((function(t) {
                            var s = e + "|" + t;
                            !n.reload && i.store.hasResourceBundle(e, t) ? i.state[s] = 2 : i.state[s] < 0 || (1 === i.state[s] ? a.indexOf(s) < 0 && a.push(s) : (i.state[s] = 1, o = !1, a.indexOf(s) < 0 && a.push(s), r.indexOf(s) < 0 && r.push(s), c.indexOf(t) < 0 && c.push(t)))
                        })), o || s.push(e)
                    })), (r.length || a.length) && this.queue.push({
                        pending: a,
                        loaded: {},
                        errors: [],
                        callback: o
                    }), {
                        toLoad: r,
                        pending: a,
                        toLoadLanguages: s,
                        toLoadNamespaces: c
                    }
                }, t.prototype.loaded = function(e, t, n) {
                    var o = e.split("|"),
                        i = Q(o, 2),
                        r = i[0],
                        a = i[1];
                    t && this.emit("failedLoading", r, a, t), n && this.store.addResourceBundle(r, a, n), this.state[e] = t ? -1 : 2;
                    var s = {};
                    this.queue.forEach((function(n) {
                        ! function(e, t, n, o) {
                            var i = T(e, t, Object),
                                r = i.obj,
                                a = i.k;
                            r[a] = r[a] || [], o && (r[a] = r[a].concat(n)), o || r[a].push(n)
                        }(n.loaded, [r], a),
                        function(e, t) {
                            for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), n = e.indexOf(t)
                        }(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function(e) {
                            s[e] || (s[e] = []), n.loaded[e].length && n.loaded[e].forEach((function(t) {
                                s[e].indexOf(t) < 0 && s[e].push(t)
                            }))
                        })), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                    })), this.emit("loaded", s), this.queue = this.queue.filter((function(e) {
                        return !e.done
                    }))
                }, t.prototype.read = function(e, t, n) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = this,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250,
                        a = arguments[5];
                    return e.length ? this.backend[n](e, t, (function(s, c) {
                        s && c && o < 5 ? setTimeout((function() {
                            i.read.call(i, e, t, n, o + 1, 2 * r, a)
                        }), r) : a(s, c)
                    })) : a(null, {})
                }, t.prototype.prepareLoading = function(e, t) {
                    var n = this,
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = arguments[3];
                    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
                    "string" === typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" === typeof t && (t = [t]);
                    var r = this.queueLoad(e, t, o, i);
                    if (!r.toLoad.length) return r.pending.length || i(), null;
                    r.toLoad.forEach((function(e) {
                        n.loadOne(e)
                    }))
                }, t.prototype.load = function(e, t, n) {
                    this.prepareLoading(e, t, {}, n)
                }, t.prototype.reload = function(e, t, n) {
                    this.prepareLoading(e, t, {
                        reload: !0
                    }, n)
                }, t.prototype.loadOne = function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        o = e.split("|"),
                        i = Q(o, 2),
                        r = i[0],
                        a = i[1];
                    this.read(r, a, "read", null, null, (function(o, i) {
                        o && t.logger.warn(n + "loading namespace " + a + " for language " + r + " failed", o), !o && i && t.logger.log(n + "loaded namespace " + a + " for language " + r, i), t.loaded(e, o, i)
                    }))
                }, t.prototype.saveMissing = function(e, t, n, o, i) {
                    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                    this.backend && this.backend.create && this.backend.create(e, t, n, o, null, Z({}, r, {
                        isUpdate: i
                    })), e && e[0] && this.store.addResource(e[0], t, n, o)
                }, t
            }(P);

            function ne(e) {
                return "string" === typeof e.ns && (e.ns = [e.ns]), "string" === typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e
            }
            var oe = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                ie = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                };

            function re(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== typeof t && "function" !== typeof t ? e : t
            }

            function ae(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : function(e, t) {
                    for (var n = Object.getOwnPropertyNames(t), o = 0; o < n.length; o++) {
                        var i = n[o],
                            r = Object.getOwnPropertyDescriptor(t, i);
                        r && r.configurable && void 0 === e[i] && Object.defineProperty(e, i, r)
                    }
                }(e, t))
            }

            function se() {}
            var ce = new(function(e) {
                    function t() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            o = arguments[1];
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var i = re(this, e.call(this));
                        if (i.options = ne(n), i.services = {}, i.logger = j, i.modules = {
                                external: []
                            }, o && !i.isInitialized && !n.isClone) {
                            var r;
                            if (!i.options.initImmediate) return r = i.init(n, o), re(i, r);
                            setTimeout((function() {
                                i.init(n, o)
                            }), 0)
                        }
                        return i
                    }
                    return ae(t, e), t.prototype.init = function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments[1];

                        function o(e) {
                            return e ? "function" === typeof e ? new e : e : null
                        }
                        if ("function" === typeof t && (n = t, t = {}), this.options = ie({}, {
                                debug: !1,
                                initImmediate: !0,
                                ns: ["translation"],
                                defaultNS: ["translation"],
                                fallbackLng: ["dev"],
                                fallbackNS: !1,
                                whitelist: !1,
                                nonExplicitWhitelist: !1,
                                load: "all",
                                preload: !1,
                                simplifyPluralSuffix: !0,
                                keySeparator: ".",
                                nsSeparator: ":",
                                pluralSeparator: "_",
                                contextSeparator: "_",
                                saveMissing: !1,
                                updateMissing: !1,
                                saveMissingTo: "fallback",
                                saveMissingPlurals: !0,
                                missingKeyHandler: !1,
                                missingInterpolationHandler: !1,
                                postProcess: !1,
                                returnNull: !0,
                                returnEmptyString: !0,
                                returnObjects: !1,
                                joinArrays: !1,
                                returnedObjectHandler: function() {},
                                parseMissingKeyHandler: !1,
                                appendNamespaceToMissingKey: !1,
                                appendNamespaceToCIMode: !1,
                                overloadTranslationOptionHandler: function(e) {
                                    var t = {};
                                    return e[1] && (t.defaultValue = e[1]), e[2] && (t.tDescription = e[2]), t
                                },
                                interpolation: {
                                    escapeValue: !0,
                                    format: function(e, t, n) {
                                        return e
                                    },
                                    prefix: "{{",
                                    suffix: "}}",
                                    formatSeparator: ",",
                                    unescapePrefix: "-",
                                    nestingPrefix: "$t(",
                                    nestingSuffix: ")",
                                    maxReplaces: 1e3
                                }
                            }, this.options, ne(t)), this.format = this.options.interpolation.format, n || (n = se), !this.options.isClone) {
                            this.modules.logger ? j.init(o(this.modules.logger), this.options) : j.init(null, this.options);
                            var i = new W(this.options);
                            this.store = new U(this.options.resources, this.options);
                            var r = this.services;
                            r.logger = j, r.resourceStore = this.store, r.languageUtils = i, r.pluralResolver = new $(i, {
                                prepend: this.options.pluralSeparator,
                                compatibilityJSON: this.options.compatibilityJSON,
                                simplifyPluralSuffix: this.options.simplifyPluralSuffix
                            }), r.interpolator = new X(this.options), r.backendConnector = new te(o(this.modules.backend), r.resourceStore, r, this.options), r.backendConnector.on("*", (function(t) {
                                for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                                e.emit.apply(e, [t].concat(o))
                            })), this.modules.languageDetector && (r.languageDetector = o(this.modules.languageDetector), r.languageDetector.init(r, this.options.detection, this.options)), this.modules.i18nFormat && (r.i18nFormat = o(this.modules.i18nFormat), r.i18nFormat.init && r.i18nFormat.init(this)), this.translator = new K(this.services, this.options), this.translator.on("*", (function(t) {
                                for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                                e.emit.apply(e, [t].concat(o))
                            })), this.modules.external.forEach((function(t) {
                                t.init && t.init(e)
                            }))
                        }
                        var a = ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                        a.forEach((function(t) {
                            e[t] = function() {
                                var n;
                                return (n = e.store)[t].apply(n, arguments)
                            }
                        }));
                        var s = function() {
                            e.changeLanguage(e.options.lng, (function(t, o) {
                                e.isInitialized = !0, e.logger.log("initialized", e.options), e.emit("initialized", e.options), n(t, o)
                            }))
                        };
                        return this.options.resources || !this.options.initImmediate ? s() : setTimeout(s, 0), this
                    }, t.prototype.loadResources = function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se;
                        if (this.options.resources) t(null);
                        else {
                            if (this.language && "cimode" === this.language.toLowerCase()) return t();
                            var n = [],
                                o = function(t) {
                                    t && e.services.languageUtils.toResolveHierarchy(t).forEach((function(e) {
                                        n.indexOf(e) < 0 && n.push(e)
                                    }))
                                };
                            if (this.language) o(this.language);
                            else {
                                var i = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                i.forEach((function(e) {
                                    return o(e)
                                }))
                            }
                            this.options.preload && this.options.preload.forEach((function(e) {
                                return o(e)
                            })), this.services.backendConnector.load(n, this.options.ns, t)
                        }
                    }, t.prototype.reloadResources = function(e, t, n) {
                        e || (e = this.languages), t || (t = this.options.ns), n || (n = function() {}), this.services.backendConnector.reload(e, t, n)
                    }, t.prototype.use = function(e) {
                        return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && H.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this
                    }, t.prototype.changeLanguage = function(e, t) {
                        var n = this,
                            o = function(e) {
                                e && (n.language = e, n.languages = n.services.languageUtils.toResolveHierarchy(e), n.translator.language || n.translator.changeLanguage(e), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(e)), n.loadResources((function(o) {
                                    ! function(e, o) {
                                        n.translator.changeLanguage(o), o && (n.emit("languageChanged", o), n.logger.log("languageChanged", o)), t && t(e, (function() {
                                            return n.t.apply(n, arguments)
                                        }))
                                    }(o, e)
                                }))
                            };
                        e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect())
                    }, t.prototype.getFixedT = function(e, t) {
                        var n = this,
                            o = function e(t, o) {
                                for (var i = arguments.length, r = Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) r[a - 2] = arguments[a];
                                var s = ie({}, o);
                                return "object" !== ("undefined" === typeof o ? "undefined" : oe(o)) && (s = n.options.overloadTranslationOptionHandler([t, o].concat(r))), s.lng = s.lng || e.lng, s.lngs = s.lngs || e.lngs, s.ns = s.ns || e.ns, n.t(t, s)
                            };
                        return "string" === typeof e ? o.lng = e : o.lngs = e, o.ns = t, o
                    }, t.prototype.t = function() {
                        var e;
                        return this.translator && (e = this.translator).translate.apply(e, arguments)
                    }, t.prototype.exists = function() {
                        var e;
                        return this.translator && (e = this.translator).exists.apply(e, arguments)
                    }, t.prototype.setDefaultNamespace = function(e) {
                        this.options.defaultNS = e
                    }, t.prototype.loadNamespaces = function(e, t) {
                        var n = this;
                        if (!this.options.ns) return t && t();
                        "string" === typeof e && (e = [e]), e.forEach((function(e) {
                            n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                        })), this.loadResources(t)
                    }, t.prototype.loadLanguages = function(e, t) {
                        "string" === typeof e && (e = [e]);
                        var n = this.options.preload || [],
                            o = e.filter((function(e) {
                                return n.indexOf(e) < 0
                            }));
                        if (!o.length) return t();
                        this.options.preload = n.concat(o), this.loadResources(t)
                    }, t.prototype.dir = function(e) {
                        if (e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !e) return "rtl";
                        return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr"
                    }, t.prototype.createInstance = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments[1];
                        return new t(e, n)
                    }, t.prototype.cloneInstance = function() {
                        var e = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : se,
                            i = ie({}, this.options, n, {
                                isClone: !0
                            }),
                            r = new t(i),
                            a = ["store", "services", "language"];
                        return a.forEach((function(t) {
                            r[t] = e[t]
                        })), r.translator = new K(r.services, r.options), r.translator.on("*", (function(e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                            r.emit.apply(r, [e].concat(n))
                        })), r.init(i, o), r.translator.options = r.options, r
                    }, t
                }(P)),
                le = ce,
                ue = (ce.changeLanguage.bind(ce), ce.cloneInstance.bind(ce), ce.createInstance.bind(ce), ce.dir.bind(ce), ce.exists.bind(ce), ce.getFixedT.bind(ce), ce.init.bind(ce), ce.loadLanguages.bind(ce), ce.loadNamespaces.bind(ce), ce.loadResources.bind(ce), ce.off.bind(ce), ce.on.bind(ce), ce.setDefaultNamespace.bind(ce), ce.t.bind(ce), ce.use.bind(ce), {
                    en: {
                        translation: {
                            title: "Tải hình ảnh Instagram Online | Download Hình ảnh Instagram",
                            description: "Download and save your favorite Videos and Photos from Instagram. You can download images, videos, profile photos, etc. and save easily.",
                            h1: "Tải xuống & Lưu trữ hình ảnh Instagram trực tuyến",
                            p1: "Chỉ cần dán link hoặc tên người dùng , bạn có thể tải xuống 1 cách dễ dàng",
                            download: "Tải xuống",
                            history: "Lịch sử",
                            emptyHistory: "Lịch sử tải xuống của bạn ở đây: ",
                            isPrivate: "Tài khoản này là riêng tư",
                            ccMessage: "Chúng tôi sử dụng",
                            home: "Trang chủ",
                            term: "Điều khoản sử dụng",
                            privacy: "Chính sách quyền riêng tư",
                            aria: {
                                input: "Dán link hình ảnh instagram hoặc username vào đây"
                            }
                        }
                    },
                    es: {
                        translation: {
                            title: "Download image ins",
                            description: "Descarga y guarda los Videos y Fotograf\xedas favoritas desde Instagram. Podr\xe1s bajar imagenes, videos, fotos de perfil, etc. y guardar f\xe1cilmente.",
                            h1: "Descarga y guarda los Videos, Fotos y \xc1lbumes de Instagram",
                            p1: "Simplemente pega el enlace o ingresa el nombre del usuario. Podr\xe1s bajar imagenes, videos, fotos de perfil, etc. y guardar f\xe1cilmente.",
                            download: "descargar",
                            history: "historial",
                            emptyHistory: "Aqu\xed aparecer\xe1 tu historial de descargas",
                            isPrivate: "Esta cuenta es privada",
                            ccMessage: "Usamos",
                            home: "Inicio",
                            contact: "Contacto",
                            privacy: "Pol\xedtica de Privacidad",
                            aria: {
                                input: "Pega el enlace de Instagram o buscar por nombre de usuario aqu\xed"
                            }
                        }
                    }
                }),
                pe = ["en", "es"],
                he = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en";
                    return le.init({
                        lng: e,
                        resources: ue,
                        interpolation: {
                            escapeValue: !1
                        }
                    })
                },
                fe = n("g8AO"),
                de = d.a.createElement,
                ge = function(e) {
                    var t = e.theme,
                        n = t.colors,
                        o = t.typography;
                    return de("header", {
                        className: h.a.dynamic([
                            ["4060759386", [n.gray, o.size.regular, o.weight.bold]]
                        ])
                    }, de("nav", {
                        className: h.a.dynamic([
                            ["4060759386", [n.gray, o.size.regular, o.weight.bold]]
                        ])
                    }, de("a", {
                        href: "/download-image-instagram.html",
                        className: h.a.dynamic([
                            ["4060759386", [n.gray, o.size.regular, o.weight.bold]]
                        ]) + " logo"
                    }, "Phuong My Chi Entertainment")), de(h.a, {
                        id: "4060759386",
                        dynamic: [n.gray, o.size.regular, o.weight.bold]
                    }, ["header.__jsx-style-dynamic-selector{padding:30px 20px 0 20px;margin:auto;max-width:900px;}", ".logo.__jsx-style-dynamic-selector{color:".concat(n.gray, ";font-size:").concat(o.size.regular, ";font-weight:").concat(o.weight.bold, ";-webkit-text-decoration:none;text-decoration:none;}"), "@media (min-width:1024px){header.__jsx-style-dynamic-selector{padding-bottom:30px;}}"]))
                },
                ye = function(e) {
                    return de(S.a.Consumer, null, (function(t) {
                        return de(ge, Object(o.a)({}, e, {
                            theme: t
                        }))
                    }))
                },
                ve = n("YFqc"),
                me = n.n(ve),
                be = d.a.createElement;

            function we(e) {
                return be("svg", Object(o.a)({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    fill:"#FC0C2D",
                    viewBox: "0 0 24 24"
                }, e), be("title", null, "Youtube Phuong My Chi"), be("path", {
                  d :"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                }))
            }
            var ke = d.a.createElement;

            function fb(e) {
                return be("svg", Object(o.a)({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 24,
                    height: 24,
                    fill :"#3C5A99",
                    viewBox: "0 0 24 24"
                }, e), be("title", null, "Facebook Phuong My Chi"), be("path", {
                  d : "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                }))
            }
            var ke = d.a.createElement;

            function xe(e) {
                return ke("svg", Object(o.a)({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 32,
                    height: 32,
                    fill:"#9D1CB7",
                    viewBox: "0 0 32 32"
                }, e), ke("title", null, "Instagram Phuong My Chi"), ke("path", {
                    d: "M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"
                }), ke("path", {
                    d: "M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"
                }), ke("path", {
                    d: "M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"
                }))
            }
            var Oe = d.a.createElement,
                Se = (new Date).getFullYear(),
                Ce = function(e) {
                    var t = e.theme,
                        n = t.colors,
                        o = t.typography,
                        i = e.t;
                    return Oe("footer", {
                        className: h.a.dynamic([
                            ["1455347606", [n.darkGray, o.size.small, n.gray, n.gray, n.darkGray, o.size.small]]
                        ])
                    }, Oe("nav", {
                        className: h.a.dynamic([
                            ["1455347606", [n.darkGray, o.size.small, n.gray, n.gray, n.darkGray, o.size.small]]
                        ]) + " navigation"
                    }, Oe("a", {
                        href: "/download-image-instagram.html",
                        className: h.a.dynamic([
                            ["1455347606", [n.darkGray, o.size.small, n.gray, n.gray, n.darkGray, o.size.small]]
                        ])
                    }, i("home")), Oe(me.a, {
                        href: "https://phuongmychi.github.io/privacy.html",
                    }, Oe("a", {
                      target: "_blank",
                        className: h.a.dynamic([
                            ["1455347606", [n.darkGray, o.size.small, n.gray, n.gray, n.darkGray, o.size.small]]
                        ])
                    }, i("privacy"))), Oe("a", {
                        href: "https://phuongmychi.github.io/instagram/term-use-instagram.html",
                        target: "_blank",
                        className: h.a.dynamic([
                            ["1455347606", [n.darkGray, o.size.small, n.gray, n.gray, n.darkGray, o.size.small]]
                        ])
                    }, i("term"))), Oe("ul", {
                        className: h.a.dynamic([
                            ["1455347606", [n.darkGray, o.size.small, n.gray, n.gray, n.darkGray, o.size.small]]
                        ]) + " social"
                    }, Oe("li", {
                        className: h.a.dynamic([
                            ["1455347606", [n.darkGray, o.size.small, n.gray, n.gray, n.darkGray, o.size.small]]
                        ])
                    }, Oe("a", {
                        href: "https://youtube.com/user/c7pmc",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: h.a.dynamic([
                            ["1455347606", [n.darkGray, o.size.small, n.gray, n.gray, n.darkGray, o.size.small]]
                        ]) + " youtube_phuongmychi"
                    }, Oe(we, {
                        width: 16,
                        height: 16
                    }))), Oe("li", {
                        className: h.a.dynamic([
                            ["1455347606", [n.darkGray, o.size.small, n.gray, n.gray, n.darkGray, o.size.small]]
                        ])
                    }, Oe("a", {
                        href: "https://fb.me/phuongmychi",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: h.a.dynamic([
                            ["1455347606", [n.darkGray, o.size.small, n.gray, n.gray, n.darkGray, o.size.small]]
                        ]) + " fb"
                    }, Oe(fb, {
                        width: 16,
                        height: 16
                    }))), Oe("li", {
                        className: h.a.dynamic([
                            ["1455347606", [n.darkGray, o.size.small, n.gray, n.gray, n.darkGray, o.size.small]]
                        ])
                    },
                    Oe("a", {
                        href: "https://www.instagram.com/phuongmychi/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: h.a.dynamic([
                            ["1455347606", [n.darkGray, o.size.small, n.gray, n.gray, n.darkGray, o.size.small]]
                        ]) + " instagram_phuongmychi"
                    }, Oe(xe, {
                        width: 16,
                        height: 16
                    })))), Oe("span", {
                        className: h.a.dynamic([
                            ["1455347606", [n.darkGray, o.size.small, n.gray, n.gray, n.darkGray, o.size.small]]
                        ]) + "copyright"
                    }, "Copyright \xa9 ", Se," Phuong My Chi Entertainment, All rights reserved"), Oe(h.a, {
                        id: "1455347606",
                        dynamic: [n.darkGray, o.size.small, n.gray, n.gray, n.darkGray, o.size.small]
                    }, ["footer.__jsx-style-dynamic-selector{padding:0 20px 30px 20px;text-align:center;margin-top:15%}", ".navigation.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".navigation.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:".concat(n.darkGray, ";font-size:").concat(o.size.small, ";margin:0 5px;-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}"), ".navigation.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{color:".concat(n.gray, ";}"), ".social.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;list-style-type:none;margin:30px 0 40px 0;padding:0;}", ".youtube_phuongmychi.__jsx-style-dynamic-selector,.instagram_phuongmychi.__jsx-style-dynamic-selector{fill:".concat(n.gray, ";margin:0 10px;color:blue;}"), ".copyright.__jsx-style-dynamic-selector{color:".concat(n.darkGray, ";font-size:10px").concat(o.size.small, ";}")]))
                },
                Ee = Object(O.b)()((function(e) {
                    return Oe(S.a.Consumer, null, (function(t) {
                        return Oe(Ce, Object(o.a)({}, e, {
                            theme: t
                        }))
                    }))
                })),
                je = d.a.createElement,
                Pe = function(e) {
                    function t() {
                        return Object(a.a)(this, t), Object(s.a)(this, Object(c.a)(t).apply(this, arguments))
                    }
                    return Object(u.a)(t, e), Object(l.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            n("kfWT");
                            var e = this.props.message;
                            window.cookieconsent.initialise({
                                container: this.container,
                                content: {
                                    message: e || "Chúng tôi sử dụng",
                                    dismiss: "Đồng ý",
                                    link: "cookies",
                                    href: "/cookie.html"
                                }
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.theme,
                                t = e.colors,
                                n = e.shadow,
                                o = e.typography;
                            return je("div", {
                                className: h.a.dynamic([
                                    ["1934670949", [n.cookieConsent, t.gray, o.size.small, t.gray, t.black, t.gray, t.black]]
                                ])
                            }, je(h.a, {
                                id: "1934670949",
                                dynamic: [n.cookieConsent, t.gray, o.size.small, t.gray, t.black, t.gray, t.black]
                            }, [".cc-window{background-color:white;border-radius:6px;bottom:0;box-shadow:".concat(n.cookieConsent, ";color:").concat(t.gray, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;font-size:").concat(o.size.small, ";-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;left:0;margin:20px;overflow:hidden;padding:20px;position:fixed;right:0;-webkit-transition:opacity 1s ease;transition:opacity 1s ease;z-index:9999;}"), "@media (min-width:768px){.cc-window{margin:20px auto;max-width:300px;}}", ".cc-invisible{opacity:0;}", ".cc-link{color:".concat(t.gray, ";-webkit-text-decoration:underline;text-decoration:underline;-webkit-transition:color 0.2s ease;transition:color 0.2s ease;}"), ".cc-link:hover{color:".concat(t.black, ";}"), ".cc-compliance{border-left:1px solid ".concat(t.gray, ";padding-left:20px;}"), ".cc-btn{cursor:pointer;outline:none;}", ".cc-btn:hover{color:".concat(t.black, ";-webkit-transition:color 0.2s ease;transition:color 0.2s ease;}")]))
                        }
                    }]), t
                }(f.PureComponent),
                Ne = function(e) {
                    return je(S.a.Consumer, null, (function(t) {
                        return je(Pe, Object(o.a)({}, e, {
                            theme: t
                        }))
                    }))
                };
            n.d(t, "default", (function() {
                return Re
            }));
            var Te = d.a.createElement,
                Le = Object(O.b)()((function(e) {
                    var t = e.children,
                        n = e.t;
                    return Te(S.a.Consumer, null, (function(e) {
                        var o = e.colors;
                        return Te(d.a.Fragment, null, Te(y.a, null, Te("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1",
                            className: h.a.dynamic([
                                ["2301534346", [o.black, o.white, o.black, o.white, o.gray, o.gray, o.gray]]
                            ])
                        }), Te("link", {
                            rel: "manifest",
                            href: "/manifest.json",
                            className: h.a.dynamic([
                                ["2301534346", [o.black, o.white, o.black, o.white, o.gray, o.gray, o.gray]]
                            ])
                        }), Te("link", {
                            rel: "shortcut icon",
                            href: "/icons/favicon.png",
                            className: h.a.dynamic([
                                ["2301534346", [o.black, o.white, o.black, o.white, o.gray, o.gray, o.gray]]
                            ])
                        }), Te("link", {
                            rel: "apple-touch-icon",
                            href: "/icons/homescreen-144x144.png",
                            className: h.a.dynamic([
                                ["2301534346", [o.black, o.white, o.black, o.white, o.gray, o.gray, o.gray]]
                            ])
                        }), Te("link", {
                            rel: "mask-icon",
                            href: "/icons/favicon.svg",
                            color: "#262626",
                            className: h.a.dynamic([
                                ["2301534346", [o.black, o.white, o.black, o.white, o.gray, o.gray, o.gray]]
                            ])
                        }), Te("meta", {
                            name: "theme-color",
                            content: o.gray,
                            className: h.a.dynamic([
                                ["2301534346", [o.black, o.white, o.black, o.white, o.gray, o.gray, o.gray]]
                            ])
                        }), Te("link", {
                            rel: "alternate",
                            href: "https://phuongmychi.github.io/",
                            hrefLang: "x-default",
                            className: h.a.dynamic([
                                ["2301534346", [o.black, o.white, o.black, o.white, o.gray, o.gray, o.gray]]
                            ])
                        }), Te("link", {
                            rel: "alternate",
                            href: "https://phuongmychi.github.io/?hl=en",
                            hrefLang: "en",
                            className: h.a.dynamic([
                                ["2301534346", [o.black, o.white, o.black, o.white, o.gray, o.gray, o.gray]]
                            ])
                        }), Te("link", {
                            rel: "alternate",
                            href: "https://phuongmychi.github.io/hl=es",
                            hrefLang: "es",
                            className: h.a.dynamic([
                                ["2301534346", [o.black, o.white, o.black, o.white, o.gray, o.gray, o.gray]]
                            ])
                        })), Te(ye, null), t, Te(Ee, null), Te(Ne, {
                            message: n("ccMessage")
                        }), Te(fe.a, null), Te(h.a, {
                            id: "2301534346",
                            dynamic: [o.black, o.white, o.black, o.white, o.gray, o.gray, o.gray]
                        }, ["::selection{background-color:".concat(o.black, ";color:").concat(o.white, ";}"), "::-moz-selection{background-color:".concat(o.black, ";color:").concat(o.white, ";}"), "*{-webkit-tap-highlight-color:transparent;}", "button{background-color:transparent;border:none;cursor:pointer;margin:0;outline:0;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", "#nprogress{pointer-events:none;}", "#nprogress .bar{background-color:".concat(o.gray, ";height:2px;left:0;position:fixed;top:0;width:100%;z-index:1031;}"), "#nprogress .peg{box-shadow:0 0 10px ".concat(o.gray, ",0 0 5px ").concat(o.gray, ";display:block;height:100%;opacity:1;position:absolute;right:0px;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);width:100px;}")]))
                    }))
                })),
                Re = function(e) {
                    function t(e) {
                        var n;
                        return Object(a.a)(this, t), (n = Object(s.a)(this, Object(c.a)(t).call(this, e))).i18n = he(e.lng), n
                    }
                    return Object(u.a)(t, e), Object(l.a)(t, null, [{
                        key: "getInitialProps",
                        value: function(e) {
                            var t, n, o, i, a, s, c;
                            return r.a.async((function(l) {
                                for (;;) switch (l.prev = l.next) {
                                    case 0:
                                        if (t = e.Component, n = e.ctx, o = {}, !t.getInitialProps) {
                                            l.next = 6;
                                            break
                                        }
                                        return l.next = 5, r.a.awrap(t.getInitialProps(n));
                                    case 5:
                                        o = l.sent;
                                    case 6:
                                        return i = n.req, a = n.query.hl, s = new x(i ? i.headers.cookie : void 0), c = pe.includes(a) && a || s.get("lng") || "en", l.abrupt("return", {
                                            pageProps: o,
                                            lng: c
                                        });
                                    case 10:
                                    case "end":
                                        return l.stop()
                                }
                            }))
                        }
                    }]), Object(l.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = new x,
                                t = this.props.lng;
                            e.set("lng", t, {
                                path: "/"
                            }), "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js"), window.addEventListener("beforeinstallprompt", (function(e) {
                                e.userChoice.then((function(e) {
                                    var t = e.outcome;
                                    Object(fe.b)("event", t, {
                                        event_category: "A2HS"
                                    })
                                }))
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.Component,
                                n = e.pageProps,
                                i = e.lng;
                            return Te(S.a.Provider, {
                                value: S.b
                            }, Te(O.a, {
                                i18n: this.i18n
                            }, Te(Le, null, Te(t, Object(o.a)({}, n, {
                                lng: i
                            })))))
                        }
                    }]), t
                }(m.a)
        },
        "8Bbg": function(e, t, n) {
            e.exports = n("B5Ud")
        },
        B5Ud: function(e, t, n) {
            "use strict";
            var o = n("/HRN"),
                i = n("WaGi"),
                r = n("ZDA2"),
                a = n("/+P4"),
                s = n("N9n2"),
                c = n("ln6h"),
                l = n("KI45");
            t.__esModule = !0, t.Container = function(e) {
                0;
                return e.children
            }, t.createUrl = v, t.default = void 0;
            var u = l(n("htGi")),
                p = l(n("+oT+")),
                h = l(n("q1tI")),
                f = n("g/15");

            function d(e) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = (0, p.default)(c.mark((function e(t) {
                    var n, o, i;
                    return c.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.Component, o = t.ctx, e.next = 3, (0, f.loadGetInitialProps)(n, o);
                            case 3:
                                return i = e.sent, e.abrupt("return", {
                                    pageProps: i
                                });
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            t.AppInitialProps = f.AppInitialProps, n("nOHt");
            var y = function(e) {
                function t() {
                    return o(this, t), r(this, a(t).apply(this, arguments))
                }
                return s(t, e), i(t, [{
                    key: "componentDidCatch",
                    value: function(e, t) {
                        throw e
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.router,
                            n = e.Component,
                            o = e.pageProps,
                            i = v(t);
                        return h.default.createElement(n, (0, u.default)({}, o, {
                            url: i
                        }))
                    }
                }]), t
            }(h.default.Component);

            function v(e) {
                var t = e.pathname,
                    n = e.asPath,
                    o = e.query;
                return {
                    get query() {
                        return o
                    },
                    get pathname() {
                        return t
                    },
                    get asPath() {
                        return n
                    },
                    back: function() {
                        e.back()
                    },
                    push: function(t, n) {
                        return e.push(t, n)
                    },
                    pushTo: function(t, n) {
                        var o = n ? t : "",
                            i = n || t;
                        return e.push(o, i)
                    },
                    replace: function(t, n) {
                        return e.replace(t, n)
                    },
                    replaceTo: function(t, n) {
                        var o = n ? t : "",
                            i = n || t;
                        return e.replace(o, i)
                    }
                }
            }
            t.default = y, y.origGetInitialProps = d, y.getInitialProps = d
        },
        GcxT: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("1TCz")
            }])
        },
        YFqc: function(e, t, n) {
            e.exports = n("cTJO")
        },
        cTJO: function(e, t, n) {
            "use strict";
            var o = n("/HRN"),
                i = n("WaGi"),
                r = n("ZDA2"),
                a = n("/+P4"),
                s = n("N9n2"),
                c = n("5Uuq"),
                l = n("KI45");
            t.__esModule = !0, t.default = void 0;
            var u, p = l(n("LX0d")),
                h = n("QmWs"),
                f = c(n("q1tI")),
                d = (l(n("17x9")), l(n("nOHt"))),
                g = (n("P5f7"), n("g/15"));

            function y(e) {
                return e && "object" === typeof e ? (0, g.formatWithValidation)(e) : e
            }
            var v = new p.default,
                m = window.IntersectionObserver;

            function b() {
                return u || (m ? u = new m((function(e) {
                    e.forEach((function(e) {
                        if (v.has(e.target)) {
                            var t = v.get(e.target);
                            (e.isIntersecting || e.intersectionRatio > 0) && (u.unobserve(e.target), v.delete(e.target), t())
                        }
                    }))
                }), {
                    rootMargin: "200px"
                }) : void 0)
            }
            var w = function(e) {
                function t(e) {
                    var n;
                    return o(this, t), (n = r(this, a(t).call(this, e))).p = void 0, n.cleanUpListeners = function() {}, n.formatUrls = function(e) {
                        var t = null,
                            n = null,
                            o = null;
                        return function(i, r) {
                            if (o && i === t && r === n) return o;
                            var a = e(i, r);
                            return t = i, n = r, o = a, a
                        }
                    }((function(e, t) {
                        return {
                            href: y(e),
                            as: t ? y(t) : t
                        }
                    })), n.linkClicked = function(e) {
                        var t = e.currentTarget,
                            o = t.nodeName,
                            i = t.target;
                        if ("A" !== o || !(i && "_self" !== i || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && 2 === e.nativeEvent.which)) {
                            var r = n.formatUrls(n.props.href, n.props.as),
                                a = r.href,
                                s = r.as;
                            if (function(e) {
                                    var t = (0, h.parse)(e, !1, !0),
                                        n = (0, h.parse)((0, g.getLocationOrigin)(), !1, !0);
                                    return !t.host || t.protocol === n.protocol && t.host === n.host
                                }(a)) {
                                var c = window.location.pathname;
                                a = (0, h.resolve)(c, a), s = s ? (0, h.resolve)(c, s) : a, e.preventDefault();
                                var l = n.props.scroll;
                                null == l && (l = s.indexOf("#") < 0), d.default[n.props.replace ? "replace" : "push"](a, s, {
                                    shallow: n.props.shallow
                                }).then((function(e) {
                                    e && l && (window.scrollTo(0, 0), document.body.focus())
                                }))
                            }
                        }
                    }, n.p = !1 !== e.prefetch, n
                }
                return s(t, e), i(t, [{
                    key: "componentWillUnmount",
                    value: function() {
                        this.cleanUpListeners()
                    }
                }, {
                    key: "handleRef",
                    value: function(e) {
                        var t = this;
                        this.p && m && e && e.tagName && (this.cleanUpListeners(), this.cleanUpListeners = function(e, t) {
                            var n = b();
                            return n ? (n.observe(e), v.set(e, t), function() {
                                try {
                                    n.unobserve(e)
                                } catch (t) {
                                    console.error(t)
                                }
                                v.delete(e)
                            }) : function() {}
                        }(e, (function() {
                            t.prefetch()
                        })))
                    }
                }, {
                    key: "prefetch",
                    value: function() {
                        if (this.p) {
                            var e = window.location.pathname,
                                t = this.formatUrls(this.props.href, this.props.as).href,
                                n = (0, h.resolve)(e, t);
                            d.default.prefetch(n)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props.children,
                            n = this.formatUrls(this.props.href, this.props.as),
                            o = n.href,
                            i = n.as;
                        "string" === typeof t && (t = f.default.createElement("a", null, t));
                        var r = f.Children.only(t),
                            a = {
                                ref: function(t) {
                                    e.handleRef(t), r && "object" === typeof r && r.ref && ("function" === typeof r.ref ? r.ref(t) : "object" === typeof r.ref && (r.ref.current = t))
                                },
                                onMouseEnter: function(t) {
                                    r.props && "function" === typeof r.props.onMouseEnter && r.props.onMouseEnter(t), e.prefetch()
                                },
                                onClick: function(t) {
                                    r.props && "function" === typeof r.props.onClick && r.props.onClick(t), t.defaultPrevented || e.linkClicked(t)
                                }
                            };
                        return !this.props.passHref && ("a" !== r.type || "href" in r.props) || (a.href = i || o), f.default.cloneElement(r, a)
                    }
                }]), t
            }(f.Component);
            w.propTypes = void 0;
            var k = w;
            t.default = k
        },
        "iVi/": function(e, t, n) {
            "use strict";
            t.parse = function(e, t) {
                if ("string" !== typeof e) throw new TypeError("argument str must be a string");
                for (var n = {}, i = t || {}, a = e.split(r), c = i.decode || o, l = 0; l < a.length; l++) {
                    var u = a[l],
                        p = u.indexOf("=");
                    if (!(p < 0)) {
                        var h = u.substr(0, p).trim(),
                            f = u.substr(++p, u.length).trim();
                        '"' == f[0] && (f = f.slice(1, -1)), void 0 == n[h] && (n[h] = s(f, c))
                    }
                }
                return n
            }, t.serialize = function(e, t, n) {
                var o = n || {},
                    r = o.encode || i;
                if ("function" !== typeof r) throw new TypeError("option encode is invalid");
                if (!a.test(e)) throw new TypeError("argument name is invalid");
                var s = r(t);
                if (s && !a.test(s)) throw new TypeError("argument val is invalid");
                var c = e + "=" + s;
                if (null != o.maxAge) {
                    var l = o.maxAge - 0;
                    if (isNaN(l)) throw new Error("maxAge should be a Number");
                    c += "; Max-Age=" + Math.floor(l)
                }
                if (o.domain) {
                    if (!a.test(o.domain)) throw new TypeError("option domain is invalid");
                    c += "; Domain=" + o.domain
                }
                if (o.path) {
                    if (!a.test(o.path)) throw new TypeError("option path is invalid");
                    c += "; Path=" + o.path
                }
                if (o.expires) {
                    if ("function" !== typeof o.expires.toUTCString) throw new TypeError("option expires is invalid");
                    c += "; Expires=" + o.expires.toUTCString()
                }
                o.httpOnly && (c += "; HttpOnly");
                o.secure && (c += "; Secure");
                if (o.sameSite) {
                    switch ("string" === typeof o.sameSite ? o.sameSite.toLowerCase() : o.sameSite) {
                        case !0:
                            c += "; SameSite=Strict";
                            break;
                        case "lax":
                            c += "; SameSite=Lax";
                            break;
                        case "strict":
                            c += "; SameSite=Strict";
                            break;
                        case "none":
                            c += "; SameSite=None";
                            break;
                        default:
                            throw new TypeError("option sameSite is invalid")
                    }
                }
                return c
            };
            var o = decodeURIComponent,
                i = encodeURIComponent,
                r = /; */,
                a = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

            function s(e, t) {
                try {
                    return t(e)
                } catch (n) {
                    return e
                }
            }
        },
        kfWT: function(e, t) {
            ! function(e) {
                if (!e.hasInitialised) {
                    var t = {
                        escapeRegExp: function(e) {
                            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                        },
                        hasClass: function(e, t) {
                            var n = " ";
                            return 1 === e.nodeType && (n + e.className + n).replace(/[\n\t]/g, n).indexOf(n + t + n) >= 0
                        },
                        addClass: function(e, t) {
                            e.className += " " + t
                        },
                        removeClass: function(e, t) {
                            var n = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
                            e.className = e.className.replace(n, "")
                        },
                        interpolateString: function(e, t) {
                            return e.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, (function(e) {
                                return t(arguments[1]) || ""
                            }))
                        },
                        getCookie: function(e) {
                            var t = ("; " + document.cookie).split("; " + e + "=");
                            return t.length < 2 ? void 0 : t.pop().split(";").shift()
                        },
                        setCookie: function(e, t, n, o, i, r) {
                            var a = new Date;
                            a.setHours(a.getHours() + 24 * (n || 365));
                            var s = [e + "=" + t, "expires=" + a.toUTCString(), "path=" + (i || "/")];
                            o && s.push("domain=" + o), r && s.push("secure"), document.cookie = s.join(";")
                        },
                        deepExtend: function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (n in e && this.isPlainObject(e[n]) && this.isPlainObject(t[n]) ? this.deepExtend(e[n], t[n]) : e[n] = t[n]);
                            return e
                        },
                        throttle: function(e, t) {
                            var n = !1;
                            return function() {
                                n || (e.apply(this, arguments), n = !0, setTimeout((function() {
                                    n = !1
                                }), t))
                            }
                        },
                        hash: function(e) {
                            var t, n, o = 0;
                            if (0 === e.length) return o;
                            for (t = 0, n = e.length; t < n; ++t) o = (o << 5) - o + e.charCodeAt(t), o |= 0;
                            return o
                        },
                        normaliseHex: function(e) {
                            return "#" == e[0] && (e = e.substr(1)), 3 == e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e
                        },
                        getContrast: function(e) {
                            return e = this.normaliseHex(e), (299 * parseInt(e.substr(0, 2), 16) + 587 * parseInt(e.substr(2, 2), 16) + 114 * parseInt(e.substr(4, 2), 16)) / 1e3 >= 128 ? "#000" : "#fff"
                        },
                        getLuminance: function(e) {
                            var t = parseInt(this.normaliseHex(e), 16),
                                n = 38 + (t >> 16),
                                o = 38 + (t >> 8 & 255),
                                i = 38 + (255 & t);
                            return "#" + (16777216 + 65536 * (n < 255 ? n < 1 ? 0 : n : 255) + 256 * (o < 255 ? o < 1 ? 0 : o : 255) + (i < 255 ? i < 1 ? 0 : i : 255)).toString(16).slice(1)
                        },
                        isMobile: function() {
                            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                        },
                        isPlainObject: function(e) {
                            return "object" == typeof e && null !== e && e.constructor == Object
                        },
                        traverseDOMPath: function(e, n) {
                            return e && e.parentNode ? t.hasClass(e, n) ? e : this.traverseDOMPath(e.parentNode, n) : null
                        }
                    };
                    e.status = {
                        deny: "deny",
                        allow: "allow",
                        dismiss: "dismiss"
                    }, e.transitionEnd = function() {
                        var e = document.createElement("div"),
                            t = {
                                t: "transitionend",
                                OT: "oTransitionEnd",
                                msT: "MSTransitionEnd",
                                MozT: "transitionend",
                                WebkitT: "webkitTransitionEnd"
                            };
                        for (var n in t)
                            if (t.hasOwnProperty(n) && void 0 !== e.style[n + "ransition"]) return t[n];
                        return ""
                    }(), e.hasTransition = !!e.transitionEnd;
                    var n = Object.keys(e.status).map(t.escapeRegExp);
                    e.customStyles = {}, e.Popup = function() {
                        var o = {
                            enabled: !0,
                            container: null,
                            cookie: {
                                name: "cookieconsent_status",
                                path: "/",
                                domain: "",
                                expiryDays: 365,
                                secure: !1
                            },
                            onPopupOpen: function() {},
                            onPopupClose: function() {},
                            onInitialise: function(e) {},
                            onStatusChange: function(e, t) {},
                            onRevokeChoice: function() {},
                            onNoCookieLaw: function(e, t) {},
                            content: {
                                header: "Cookies used on the website!",
                                message: "This website uses cookies to ensure you get the best experience on our website.",
                                dismiss: "Got it!",
                                allow: "Allow cookies",
                                deny: "Decline",
                                link: "Learn more",
                                href: "https://phuongmychi.github.io/cookie.html",
                                close: "&#x274c;",
                                target: "_blank",
                                policy: "Cookie Policy"
                            },
                            elements: {
                                header: '<span class="cc-header">{{header}}</span>&nbsp;',
                                message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
                                messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a> để đảm bảo bạn có được trải nghiệm tốt nhất trên trang web của chúng tôi</span>',
                                dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
                                allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
                                deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
                                link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
                                close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'
                            },
                            window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',
                            revokeBtn: '<div class="cc-revoke {{classes}}">{{policy}}</div>',
                            compliance: {
                                info: '<div class="cc-compliance">{{dismiss}}</div>',
                                "opt-in": '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',
                                "opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'
                            },
                            type: "info",
                            layouts: {
                                basic: "{{messagelink}}{{compliance}}",
                                "basic-close": "{{messagelink}}{{compliance}}{{close}}",
                                "basic-header": "{{header}}{{message}}{{link}}{{compliance}}"
                            },
                            layout: "basic",
                            position: "bottom",
                            theme: "block",
                            static: !1,
                            palette: null,
                            revokable: !1,
                            animateRevokable: !0,
                            showLink: !0,
                            dismissOnScroll: !1,
                            dismissOnTimeout: !1,
                            dismissOnWindowClick: !1,
                            ignoreClicksFrom: ["cc-revoke", "cc-btn"],
                            autoOpen: !0,
                            autoAttach: !0,
                            whitelistPage: [],
                            blacklistPage: [],
                            overrideHTML: null
                        };

                        function i() {
                            this.initialise.apply(this, arguments)
                        }

                        function r(e) {
                            this.openingTimeout = null, t.removeClass(e, "cc-invisible")
                        }

                        function a(t) {
                            t.style.display = "none", t.removeEventListener(e.transitionEnd, this.afterTransition), this.afterTransition = null
                        }

                        function s() {
                            var e = this.options.position.split("-"),
                                t = [];
                            return e.forEach((function(e) {
                                t.push("cc-" + e)
                            })), t
                        }

                        function c(o) {
                            var i = this.options,
                                r = document.createElement("div"),
                                a = i.container && 1 === i.container.nodeType ? i.container : document.body;
                            r.innerHTML = o;
                            var s = r.children[0];
                            return s.style.display = "none", t.hasClass(s, "cc-window") && e.hasTransition && t.addClass(s, "cc-invisible"), this.onButtonClick = function(o) {
                                var i = t.traverseDOMPath(o.target, "cc-btn") || o.target;
                                if (t.hasClass(i, "cc-btn")) {
                                    var r = i.className.match(new RegExp("\\bcc-(" + n.join("|") + ")\\b")),
                                        a = r && r[1] || !1;
                                    a && (this.setStatus(a), this.close(!0))
                                }
                                t.hasClass(i, "cc-close") && (this.setStatus(e.status.dismiss), this.close(!0)), t.hasClass(i, "cc-revoke") && this.revokeChoice()
                            }.bind(this), s.addEventListener("click", this.onButtonClick), i.autoAttach && (a.firstChild ? a.insertBefore(s, a.firstChild) : a.appendChild(s)), s
                        }

                        function l(e) {
                            return "000000" == (e = t.normaliseHex(e)) ? "#222" : t.getLuminance(e)
                        }

                        function u(e, t) {
                            for (var n = 0, o = e.length; n < o; ++n) {
                                var i = e[n];
                                if (i instanceof RegExp && i.test(t) || "string" == typeof i && i.length && i === t) return !0
                            }
                            return !1
                        }
                        return i.prototype.initialise = function(n) {
                            this.options && this.destroy(), t.deepExtend(this.options = {}, o), t.isPlainObject(n) && t.deepExtend(this.options, n),
                                function() {
                                    var t = this.options.onInitialise.bind(this);
                                    if (!window.navigator.cookieEnabled) return t(e.status.deny), !0;
                                    if (window.CookiesOK || window.navigator.CookiesOK) return t(e.status.allow), !0;
                                    var n = Object.keys(e.status),
                                        o = this.getStatus(),
                                        i = n.indexOf(o) >= 0;
                                    return i && t(o), i
                                }.call(this) && (this.options.enabled = !1), u(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1), u(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0);
                            var i = this.options.window.replace("{{classes}}", function() {
                                    var n = this.options,
                                        o = "top" == n.position || "bottom" == n.position ? "banner" : "floating";
                                    t.isMobile() && (o = "floating");
                                    var i = ["cc-" + o, "cc-type-" + n.type, "cc-theme-" + n.theme];
                                    return n.static && i.push("cc-static"), i.push.apply(i, s.call(this)),
                                        function(n) {
                                            var o = t.hash(JSON.stringify(n)),
                                                i = "cc-color-override-" + o,
                                                r = t.isPlainObject(n);
                                            return this.customStyleSelector = r ? i : null, r && function(n, o, i) {
                                                if (e.customStyles[n]) ++e.customStyles[n].references;
                                                else {
                                                    var r = {},
                                                        a = o.popup,
                                                        s = o.button,
                                                        c = o.highlight;
                                                    a && (a.text = a.text ? a.text : t.getContrast(a.background), a.link = a.link ? a.link : a.text, r[i + ".cc-window"] = ["color: " + a.text, "background-color: " + a.background], r[i + ".cc-revoke"] = ["color: " + a.text, "background-color: " + a.background], r[i + " .cc-link," + i + " .cc-link:active," + i + " .cc-link:visited"] = ["color: " + a.link], s && (s.text = s.text ? s.text : t.getContrast(s.background), s.border = s.border ? s.border : "transparent", r[i + " .cc-btn"] = ["color: " + s.text, "border-color: " + s.border, "background-color: " + s.background], s.padding && r[i + " .cc-btn"].push("padding: " + s.padding), "transparent" != s.background && (r[i + " .cc-btn:hover, " + i + " .cc-btn:focus"] = ["background-color: " + (s.hover || l(s.background))]), c ? (c.text = c.text ? c.text : t.getContrast(c.background), c.border = c.border ? c.border : "transparent", r[i + " .cc-highlight .cc-btn:first-child"] = ["color: " + c.text, "border-color: " + c.border, "background-color: " + c.background]) : r[i + " .cc-highlight .cc-btn:first-child"] = ["color: " + a.text]));
                                                    var u = document.createElement("style");
                                                    document.head.appendChild(u), e.customStyles[n] = {
                                                        references: 1,
                                                        element: u.sheet
                                                    };
                                                    var p = -1;
                                                    for (var h in r) r.hasOwnProperty(h) && u.sheet.insertRule(h + "{" + r[h].join(";") + "}", ++p)
                                                }
                                            }(o, n, "." + i), r
                                        }.call(this, this.options.palette), this.customStyleSelector && i.push(this.customStyleSelector), i
                                }.call(this).join(" ")).replace("{{children}}", function() {
                                    var e = {},
                                        n = this.options;
                                    n.showLink || (n.elements.link = "", n.elements.messagelink = n.elements.message), Object.keys(n.elements).forEach((function(o) {
                                        e[o] = t.interpolateString(n.elements[o], (function(e) {
                                            var t = n.content[e];
                                            return e && "string" == typeof t && t.length ? t : ""
                                        }))
                                    }));
                                    var o = n.compliance[n.type];
                                    o || (o = n.compliance.info), e.compliance = t.interpolateString(o, (function(t) {
                                        return e[t]
                                    }));
                                    var i = n.layouts[n.layout];
                                    return i || (i = n.layouts.basic), t.interpolateString(i, (function(t) {
                                        return e[t]
                                    }))
                                }.call(this)),
                                r = this.options.overrideHTML;
                            if ("string" == typeof r && r.length && (i = r), this.options.static) {
                                var a = c.call(this, '<div class="cc-grower">' + i + "</div>");
                                a.style.display = "", this.element = a.firstChild, this.element.style.display = "none", t.addClass(this.element, "cc-invisible")
                            } else this.element = c.call(this, i);
                            (function() {
                                var n = this.setStatus.bind(this),
                                    o = this.close.bind(this),
                                    i = this.options.dismissOnTimeout;
                                "number" == typeof i && i >= 0 && (this.dismissTimeout = window.setTimeout((function() {
                                    n(e.status.dismiss), o(!0)
                                }), Math.floor(i)));
                                var r = this.options.dismissOnScroll;
                                if ("number" == typeof r && r >= 0) {
                                    var a = function(t) {
                                        window.pageYOffset > Math.floor(r) && (n(e.status.dismiss), o(!0), window.removeEventListener("scroll", a), this.onWindowScroll = null)
                                    };
                                    this.options.enabled && (this.onWindowScroll = a, window.addEventListener("scroll", a))
                                }
                                var s = this.options.dismissOnWindowClick,
                                    c = this.options.ignoreClicksFrom;
                                if (s) {
                                    var l = function(i) {
                                        for (var r = !1, a = i.path.length, s = c.length, u = 0; u < a; u++)
                                            if (!r)
                                                for (var p = 0; p < s; p++) r || (r = t.hasClass(i.path[u], c[p]));
                                        r || (n(e.status.dismiss), o(!0), window.removeEventListener("click", l), window.removeEventListener("touchend", l), this.onWindowClick = null)
                                    }.bind(this);
                                    this.options.enabled && (this.onWindowClick = l, window.addEventListener("click", l), window.addEventListener("touchend", l))
                                }
                            }).call(this),
                                function() {
                                    if ("info" != this.options.type && (this.options.revokable = !0), t.isMobile() && (this.options.animateRevokable = !1), this.options.revokable) {
                                        var e = s.call(this);
                                        this.options.animateRevokable && e.push("cc-animate"), this.customStyleSelector && e.push(this.customStyleSelector);
                                        var n = this.options.revokeBtn.replace("{{classes}}", e.join(" ")).replace("{{policy}}", this.options.content.policy);
                                        this.revokeBtn = c.call(this, n);
                                        var o = this.revokeBtn;
                                        if (this.options.animateRevokable) {
                                            var i = t.throttle((function(e) {
                                                var n = !1,
                                                    i = window.innerHeight - 20;
                                                t.hasClass(o, "cc-top") && e.clientY < 20 && (n = !0), t.hasClass(o, "cc-bottom") && e.clientY > i && (n = !0), n ? t.hasClass(o, "cc-active") || t.addClass(o, "cc-active") : t.hasClass(o, "cc-active") && t.removeClass(o, "cc-active")
                                            }), 200);
                                            this.onMouseMove = i, window.addEventListener("mousemove", i)
                                        }
                                    }
                                }.call(this), this.options.autoOpen && this.autoOpen()
                        }, i.prototype.destroy = function() {
                            this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), this.onButtonClick = null), this.dismissTimeout && (clearTimeout(this.dismissTimeout), this.dismissTimeout = null), this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll), this.onWindowScroll = null), this.onWindowClick && (window.removeEventListener("click", this.onWindowClick), this.onWindowClick = null), this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove), this.onMouseMove = null), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn), this.revokeBtn = null,
                                function(n) {
                                    if (t.isPlainObject(n)) {
                                        var o = t.hash(JSON.stringify(n)),
                                            i = e.customStyles[o];
                                        if (i && !--i.references) {
                                            var r = i.element.ownerNode;
                                            r && r.parentNode && r.parentNode.removeChild(r), e.customStyles[o] = null
                                        }
                                    }
                                }(this.options.palette), this.options = null
                        }, i.prototype.open = function(t) {
                            if (this.element) return this.isOpen() || (e.hasTransition ? this.fadeIn() : this.element.style.display = "", this.options.revokable && this.toggleRevokeButton(), this.options.onPopupOpen.call(this)), this
                        }, i.prototype.close = function(t) {
                            if (this.element) return this.isOpen() && (e.hasTransition ? this.fadeOut() : this.element.style.display = "none", t && this.options.revokable && this.toggleRevokeButton(!0), this.options.onPopupClose.call(this)), this
                        }, i.prototype.fadeIn = function() {
                            var n = this.element;
                            if (e.hasTransition && n && (this.afterTransition && a.call(this, n), t.hasClass(n, "cc-invisible"))) {
                                if (n.style.display = "", this.options.static) {
                                    var o = this.element.clientHeight;
                                    this.element.parentNode.style.maxHeight = o + "px"
                                }
                                this.openingTimeout = setTimeout(r.bind(this, n), 20)
                            }
                        }, i.prototype.fadeOut = function() {
                            var n = this.element;
                            e.hasTransition && n && (this.openingTimeout && (clearTimeout(this.openingTimeout), r.bind(this, n)), t.hasClass(n, "cc-invisible") || (this.options.static && (this.element.parentNode.style.maxHeight = ""), this.afterTransition = a.bind(this, n), n.addEventListener(e.transitionEnd, this.afterTransition), t.addClass(n, "cc-invisible")))
                        }, i.prototype.isOpen = function() {
                            return this.element && "" == this.element.style.display && (!e.hasTransition || !t.hasClass(this.element, "cc-invisible"))
                        }, i.prototype.toggleRevokeButton = function(e) {
                            this.revokeBtn && (this.revokeBtn.style.display = e ? "" : "none")
                        }, i.prototype.revokeChoice = function(e) {
                            this.options.enabled = !0, this.clearStatus(), this.options.onRevokeChoice.call(this), e || this.autoOpen()
                        }, i.prototype.hasAnswered = function(t) {
                            return Object.keys(e.status).indexOf(this.getStatus()) >= 0
                        }, i.prototype.hasConsented = function(t) {
                            var n = this.getStatus();
                            return n == e.status.allow || n == e.status.dismiss
                        }, i.prototype.autoOpen = function(e) {
                            !this.hasAnswered() && this.options.enabled ? this.open() : this.hasAnswered() && this.options.revokable && this.toggleRevokeButton(!0)
                        }, i.prototype.setStatus = function(n) {
                            var o = this.options.cookie,
                                i = t.getCookie(o.name),
                                r = Object.keys(e.status).indexOf(i) >= 0;
                            Object.keys(e.status).indexOf(n) >= 0 ? (t.setCookie(o.name, n, o.expiryDays, o.domain, o.path, o.secure), this.options.onStatusChange.call(this, n, r)) : this.clearStatus()
                        }, i.prototype.getStatus = function() {
                            return t.getCookie(this.options.cookie.name)
                        }, i.prototype.clearStatus = function() {
                            var e = this.options.cookie;
                            t.setCookie(e.name, "", -1, e.domain, e.path)
                        }, i
                    }(), e.Location = function() {
                        var e = {
                            timeout: 5e3,
                            services: ["ipinfo"],
                            serviceDefinitions: {
                                ipinfo: function() {
                                    return {
                                        url: "//ipinfo.io",
                                        headers: ["Accept: application/json"],
                                        callback: function(e, t) {
                                            try {
                                                var n = JSON.parse(t);
                                                return n.error ? r(n) : {
                                                    code: n.country
                                                }
                                            } catch (e) {
                                                return r({
                                                    error: "Invalid response (" + e + ")"
                                                })
                                            }
                                        }
                                    }
                                },
                                ipinfodb: function(e) {
                                    return {
                                        url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",
                                        isScript: !0,
                                        callback: function(e, t) {
                                            try {
                                                var n = JSON.parse(t);
                                                return "ERROR" == n.statusCode ? r({
                                                    error: n.statusMessage
                                                }) : {
                                                    code: n.countryCode
                                                }
                                            } catch (e) {
                                                return r({
                                                    error: "Invalid response (" + e + ")"
                                                })
                                            }
                                        }
                                    }
                                },
                                maxmind: function() {
                                    return {
                                        url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
                                        isScript: !0,
                                        callback: function(e) {
                                            window.geoip2 ? geoip2.country((function(t) {
                                                try {
                                                    e({
                                                        code: t.country.iso_code
                                                    })
                                                } catch (t) {
                                                    e(r(t))
                                                }
                                            }), (function(t) {
                                                e(r(t))
                                            })) : e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))
                                        }
                                    }
                                }
                            }
                        };

                        function n(n) {
                            t.deepExtend(this.options = {}, e), t.isPlainObject(n) && t.deepExtend(this.options, n), this.currentServiceIndex = -1
                        }

                        function o(e, t, n) {
                            var o, i = document.createElement("script");
                            i.type = "text/" + (e.type || "javascript"), i.src = e.src || e, i.async = !1, i.onreadystatechange = i.onload = function() {
                                var e = i.readyState;
                                clearTimeout(o), t.done || e && !/loaded|complete/.test(e) || (t.done = !0, t(), i.onreadystatechange = i.onload = null)
                            }, document.body.appendChild(i), o = setTimeout((function() {
                                t.done = !0, t(), i.onreadystatechange = i.onload = null
                            }), n)
                        }

                        function i(e, t, n, o, i) {
                            var r = new(window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0");
                            if (r.open(o ? "POST" : "GET", e, 1), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Array.isArray(i))
                                for (var a = 0, s = i.length; a < s; ++a) {
                                    var c = i[a].split(":", 2);
                                    r.setRequestHeader(c[0].replace(/^\s+|\s+$/g, ""), c[1].replace(/^\s+|\s+$/g, ""))
                                }
                            "function" == typeof t && (r.onreadystatechange = function() {
                                r.readyState > 3 && t(r)
                            }), r.send(o)
                        }

                        function r(e) {
                            return new Error("Error [" + (e.code || "UNKNOWN") + "]: " + e.error)
                        }
                        return n.prototype.getNextService = function() {
                            var e;
                            do {
                                e = this.getServiceByIdx(++this.currentServiceIndex)
                            } while (this.currentServiceIndex < this.options.services.length && !e);
                            return e
                        }, n.prototype.getServiceByIdx = function(e) {
                            var n = this.options.services[e];
                            if ("function" == typeof n) {
                                var o = n();
                                return o.name && t.deepExtend(o, this.options.serviceDefinitions[o.name](o)), o
                            }
                            return "string" == typeof n ? this.options.serviceDefinitions[n]() : t.isPlainObject(n) ? this.options.serviceDefinitions[n.name](n) : null
                        }, n.prototype.locate = function(e, t) {
                            var n = this.getNextService();
                            n ? (this.callbackComplete = e, this.callbackError = t, this.runService(n, this.runNextServiceOnError.bind(this))) : t(new Error("No services to run"))
                        }, n.prototype.setupUrl = function(e) {
                            var t = this.getCurrentServiceOpts();
                            return e.url.replace(/\{(.*?)\}/g, (function(n, o) {
                                if ("callback" === o) {
                                    var i = "callback" + Date.now();
                                    return window[i] = function(t) {
                                        e.__JSONP_DATA = JSON.stringify(t)
                                    }, i
                                }
                                if (o in t.interpolateUrl) return t.interpolateUrl[o]
                            }))
                        }, n.prototype.runService = function(e, t) {
                            var n = this;
                            e && e.url && e.callback && (e.isScript ? o : i)(this.setupUrl(e), (function(o) {
                                var i = o ? o.responseText : "";
                                e.__JSONP_DATA && (i = e.__JSONP_DATA, delete e.__JSONP_DATA), n.runServiceCallback.call(n, t, e, i)
                            }), this.options.timeout, e.data, e.headers)
                        }, n.prototype.runServiceCallback = function(e, t, n) {
                            var o = this,
                                i = t.callback((function(t) {
                                    i || o.onServiceResult.call(o, e, t)
                                }), n);
                            i && this.onServiceResult.call(this, e, i)
                        }, n.prototype.onServiceResult = function(e, t) {
                            t instanceof Error || t && t.error ? e.call(this, t, null) : e.call(this, null, t)
                        }, n.prototype.runNextServiceOnError = function(e, t) {
                            if (e) {
                                this.logError(e);
                                var n = this.getNextService();
                                n ? this.runService(n, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed"))
                            } else this.completeService.call(this, this.callbackComplete, t)
                        }, n.prototype.getCurrentServiceOpts = function() {
                            var e = this.options.services[this.currentServiceIndex];
                            return "string" == typeof e ? {
                                name: e
                            } : "function" == typeof e ? e() : t.isPlainObject(e) ? e : {}
                        }, n.prototype.completeService = function(e, t) {
                            this.currentServiceIndex = -1, e && e(t)
                        }, n.prototype.logError = function(e) {
                            var t = this.currentServiceIndex,
                                n = this.getServiceByIdx(t);
                            console.warn("The service[" + t + "] (" + n.url + ") responded with the following error", e)
                        }, n
                    }(), e.Law = function() {
                        var e = {
                            regionalLaw: !0,
                            hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "ES", "SE", "GB", "UK", "GR", "EU"],
                            revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"],
                            explicitAction: ["HR", "IT", "ES"]
                        };

                        function n(e) {
                            this.initialise.apply(this, arguments)
                        }
                        return n.prototype.initialise = function(n) {
                            t.deepExtend(this.options = {}, e), t.isPlainObject(n) && t.deepExtend(this.options, n)
                        }, n.prototype.get = function(e) {
                            var t = this.options;
                            return {
                                hasLaw: t.hasLaw.indexOf(e) >= 0,
                                revokable: t.revokable.indexOf(e) >= 0,
                                explicitAction: t.explicitAction.indexOf(e) >= 0
                            }
                        }, n.prototype.applyLaw = function(e, t) {
                            var n = this.get(t);
                            return n.hasLaw || (e.enabled = !1, "function" == typeof e.onNoCookieLaw && e.onNoCookieLaw(t, n)), this.options.regionalLaw && (n.revokable && (e.revokable = !0), n.explicitAction && (e.dismissOnScroll = !1, e.dismissOnTimeout = !1)), e
                        }, n
                    }(), e.initialise = function(n, o, i) {
                        var r = new e.Law(n.law);
                        o || (o = function() {}), i || (i = function() {});
                        var a = Object.keys(e.status),
                            s = t.getCookie("cookieconsent_status");
                        a.indexOf(s) >= 0 ? o(new e.Popup(n)) : e.getCountryCode(n, (function(t) {
                            delete n.law, delete n.location, t.code && (n = r.applyLaw(n, t.code)), o(new e.Popup(n))
                        }), (function(t) {
                            delete n.law, delete n.location, i(t, new e.Popup(n))
                        }))
                    }, e.getCountryCode = function(t, n, o) {
                        t.law && t.law.countryCode ? n({
                            code: t.law.countryCode
                        }) : t.location ? new e.Location(t.location).locate((function(e) {
                            n(e || {})
                        }), o) : n({})
                    }, e.utils = t, e.hasInitialised = !0, window.cookieconsent = e
                }
            }(window.cookieconsent || {})
        }
    },
    [
        ["GcxT", 1, 0, 8]
    ]
]);
