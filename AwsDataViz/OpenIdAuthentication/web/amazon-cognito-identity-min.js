/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 * 
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 * 
 *     http://aws.amazon.com/asl/
 * 
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License. 
 */

// this page was predominantly auto-generated, therefore it does not have many code sections that warrant commenting
! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AmazonCognitoIdentity = e() : t.AmazonCognitoIdentity = e() }("undefined" != typeof self ? self : this, function() {
    return function(t) {
        function e(r) { if (n[r]) return n[r].exports; var i = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports } var n = {}; return e.m = t, e.c = n, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r }) }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 16) }([function(t, e, n) {! function(n, r) { t.exports = e = r() }(0, function() { var t = t || function(t, e) { var n = Object.create || function() {
                        function t() {} return function(e) { var n; return t.prototype = e, n = new t, t.prototype = null, n } }(),
                    r = {},
                    i = r.lib = {},
                    o = i.Base = function() { return { extend: function(t) { var e = n(this); return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() { e.$super.init.apply(this, arguments) }), e.init.prototype = e, e.$super = this, e }, create: function() { var t = this.extend(); return t.init.apply(t, arguments), t }, init: function() {}, mixIn: function(t) { for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                                t.hasOwnProperty("toString") && (this.toString = t.toString) }, clone: function() { return this.init.prototype.extend(this) } } }(),
                    s = i.WordArray = o.extend({ init: function(t, e) { t = this.words = t || [], this.sigBytes = void 0 != e ? e : 4 * t.length }, toString: function(t) { return (t || u).stringify(this) }, concat: function(t) { var e = this.words,
                                n = t.words,
                                r = this.sigBytes,
                                i = t.sigBytes; if (this.clamp(), r % 4)
                                for (var o = 0; o < i; o++) { var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                    e[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8 } else
                                    for (var o = 0; o < i; o += 4) e[r + o >>> 2] = n[o >>> 2]; return this.sigBytes += i, this }, clamp: function() { var e = this.words,
                                n = this.sigBytes;
                            e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, e.length = t.ceil(n / 4) }, clone: function() { var t = o.clone.call(this); return t.words = this.words.slice(0), t }, random: function(e) { for (var n, r = [], i = 0; i < e; i += 4) { var o = function(e) { var e = e,
                                        n = 987654321,
                                        r = 4294967295; return function() { n = 36969 * (65535 & n) + (n >> 16) & r, e = 18e3 * (65535 & e) + (e >> 16) & r; var i = (n << 16) + e & r; return i /= 4294967296, (i += .5) * (t.random() > .5 ? 1 : -1) } }(4294967296 * (n || t.random()));
                                n = 987654071 * o(), r.push(4294967296 * o() | 0) } return new s.init(r, e) } }),
                    a = r.enc = {},
                    u = a.Hex = { stringify: function(t) { for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) { var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16)) } return r.join("") }, parse: function(t) { for (var e = t.length, n = [], r = 0; r < e; r += 2) n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4; return new s.init(n, e / 2) } },
                    c = a.Latin1 = { stringify: function(t) { for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) { var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                r.push(String.fromCharCode(o)) } return r.join("") }, parse: function(t) { for (var e = t.length, n = [], r = 0; r < e; r++) n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8; return new s.init(n, e) } },
                    h = a.Utf8 = { stringify: function(t) { try { return decodeURIComponent(escape(c.stringify(t))) } catch (t) { throw new Error("Malformed UTF-8 data") } }, parse: function(t) { return c.parse(unescape(encodeURIComponent(t))) } },
                    f = i.BufferedBlockAlgorithm = o.extend({ reset: function() { this._data = new s.init, this._nDataBytes = 0 }, _append: function(t) { "string" == typeof t && (t = h.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes }, _process: function(e) { var n = this._data,
                                r = n.words,
                                i = n.sigBytes,
                                o = this.blockSize,
                                a = 4 * o,
                                u = i / a;
                            u = e ? t.ceil(u) : t.max((0 | u) - this._minBufferSize, 0); var c = u * o,
                                h = t.min(4 * c, i); if (c) { for (var f = 0; f < c; f += o) this._doProcessBlock(r, f); var l = r.splice(0, c);
                                n.sigBytes -= h } return new s.init(l, h) }, clone: function() { var t = o.clone.call(this); return t._data = this._data.clone(), t }, _minBufferSize: 0 }),
                    l = (i.Hasher = f.extend({ cfg: o.extend(), init: function(t) { this.cfg = this.cfg.extend(t), this.reset() }, reset: function() { f.reset.call(this), this._doReset() }, update: function(t) { return this._append(t), this._process(), this }, finalize: function(t) { return t && this._append(t), this._doFinalize() }, blockSize: 16, _createHelper: function(t) { return function(e, n) { return new t.init(n).finalize(e) } }, _createHmacHelper: function(t) { return function(e, n) { return new l.HMAC.init(t, n).finalize(e) } } }), r.algo = {}); return r }(Math); return t }) }, function(t, e, n) {
        "use strict";
        (function(t) {
            function r() { return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

            function i(t, e) { if (r() < e) throw new RangeError("Invalid typed array length"); return o.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = o.prototype) : (null === t && (t = new o(e)), t.length = e), t }

            function o(t, e, n) { if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(t, e, n); if ("number" == typeof t) { if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string"); return c(this, t) } return s(this, t, e, n) }

            function s(t, e, n, r) { if ("number" == typeof e) throw new TypeError('"value" argument must not be a number'); return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? l(t, e, n, r) : "string" == typeof e ? h(t, e, n) : p(t, e) }

            function a(t) { if ("number" != typeof t) throw new TypeError('"size" argument must be a number'); if (t < 0) throw new RangeError('"size" argument must not be negative') }

            function u(t, e, n, r) { return a(e), e <= 0 ? i(t, e) : void 0 !== n ? "string" == typeof r ? i(t, e).fill(n, r) : i(t, e).fill(n) : i(t, e) }

            function c(t, e) { if (a(e), t = i(t, e < 0 ? 0 : 0 | g(e)), !o.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < e; ++n) t[n] = 0; return t }

            function h(t, e, n) { if ("string" == typeof n && "" !== n || (n = "utf8"), !o.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding'); var r = 0 | y(e, n);
                t = i(t, r); var s = t.write(e, n); return s !== r && (t = t.slice(0, s)), t }

            function f(t, e) { var n = e.length < 0 ? 0 : 0 | g(e.length);
                t = i(t, n); for (var r = 0; r < n; r += 1) t[r] = 255 & e[r]; return t }

            function l(t, e, n, r) { if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds"); if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds"); return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), o.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = o.prototype) : t = f(t, e), t }

            function p(t, e) { if (o.isBuffer(e)) { var n = 0 | g(e.length); return t = i(t, n), 0 === t.length ? t : (e.copy(t, 0, 0, n), t) } if (e) { if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || G(e.length) ? i(t, 0) : f(t, e); if ("Buffer" === e.type && Q(e.data)) return f(t, e.data) } throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }

            function g(t) { if (t >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes"); return 0 | t }

            function d(t) { return +t != t && (t = 0), o.alloc(+t) }

            function y(t, e) { if (o.isBuffer(t)) return t.length; if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength; "string" != typeof t && (t = "" + t); var n = t.length; if (0 === n) return 0; for (var r = !1;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return Y(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return J(t).length;
                    default:
                        if (r) return Y(t).length;
                        e = ("" + e).toLowerCase(), r = !0 } }

            function v(t, e, n) { var r = !1; if ((void 0 === e || e < 0) && (e = 0), e > this.length) return ""; if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return ""; if (n >>>= 0, e >>>= 0, n <= e) return ""; for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return B(this, e, n);
                    case "utf8":
                    case "utf-8":
                        return R(this, e, n);
                    case "ascii":
                        return _(this, e, n);
                    case "latin1":
                    case "binary":
                        return b(this, e, n);
                    case "base64":
                        return I(this, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return k(this, e, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), r = !0 } }

            function S(t, e, n) { var r = t[e];
                t[e] = t[n], t[n] = r }

            function m(t, e, n, r, i) { if (0 === t.length) return -1; if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) { if (i) return -1;
                    n = t.length - 1 } else if (n < 0) { if (!i) return -1;
                    n = 0 } if ("string" == typeof e && (e = o.from(e, r)), o.isBuffer(e)) return 0 === e.length ? -1 : A(t, e, n, r, i); if ("number" == typeof e) return e &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : A(t, [e], n, r, i); throw new TypeError("val must be string, number or Buffer") }

            function A(t, e, n, r, i) {
                function o(t, e) { return 1 === s ? t[e] : t.readUInt16BE(e * s) } var s = 1,
                    a = t.length,
                    u = e.length; if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) { if (t.length < 2 || e.length < 2) return -1;
                    s = 2, a /= 2, u /= 2, n /= 2 } var c; if (i) { var h = -1; for (c = n; c < a; c++)
                        if (o(t, c) === o(e, -1 === h ? 0 : c - h)) { if (-1 === h && (h = c), c - h + 1 === u) return h * s } else -1 !== h && (c -= c - h), h = -1 } else
                    for (n + u > a && (n = a - u), c = n; c >= 0; c--) { for (var f = !0, l = 0; l < u; l++)
                            if (o(t, c + l) !== o(e, l)) { f = !1; break }
                        if (f) return c }
                return -1 }

            function w(t, e, n, r) { n = Number(n) || 0; var i = t.length - n;
                r ? (r = Number(r)) > i && (r = i) : r = i; var o = e.length; if (o % 2 != 0) throw new TypeError("Invalid hex string");
                r > o / 2 && (r = o / 2); for (var s = 0; s < r; ++s) { var a = parseInt(e.substr(2 * s, 2), 16); if (isNaN(a)) return s;
                    t[n + s] = a } return s }

            function C(t, e, n, r) { return z(Y(e, t.length - n), t, n, r) }

            function U(t, e, n, r) { return z(W(e), t, n, r) }

            function E(t, e, n, r) { return U(t, e, n, r) }

            function T(t, e, n, r) { return z(J(e), t, n, r) }

            function D(t, e, n, r) { return z(j(e, t.length - n), t, n, r) }

            function I(t, e, n) { return 0 === e && n === t.length ? Z.fromByteArray(t) : Z.fromByteArray(t.slice(e, n)) }

            function R(t, e, n) { n = Math.min(t.length, n); for (var r = [], i = e; i < n;) { var o = t[i],
                        s = null,
                        a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1; if (i + a <= n) { var u, c, h, f; switch (a) {
                            case 1:
                                o < 128 && (s = o); break;
                            case 2:
                                u = t[i + 1], 128 == (192 & u) && (f = (31 & o) << 6 | 63 & u) > 127 && (s = f); break;
                            case 3:
                                u = t[i + 1], c = t[i + 2], 128 == (192 & u) && 128 == (192 & c) && (f = (15 & o) << 12 | (63 & u) << 6 | 63 & c) > 2047 && (f < 55296 || f > 57343) && (s = f); break;
                            case 4:
                                u = t[i + 1], c = t[i + 2], h = t[i + 3], 128 == (192 & u) && 128 == (192 & c) && 128 == (192 & h) && (f = (15 & o) << 18 | (63 & u) << 12 | (63 & c) << 6 | 63 & h) > 65535 && f < 1114112 && (s = f) } }
                    null === s ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, r.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), r.push(s), i += a } return P(r) }

            function P(t) { var e = t.length; if (e <= $) return String.fromCharCode.apply(String, t); for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += $)); return n }

            function _(t, e, n) { var r = "";
                n = Math.min(t.length, n); for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]); return r }

            function b(t, e, n) { var r = "";
                n = Math.min(t.length, n); for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]); return r }

            function B(t, e, n) { var r = t.length;
                (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r); for (var i = "", o = e; o < n; ++o) i += H(t[o]); return i }

            function k(t, e, n) { for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]); return i }

            function F(t, e, n) { if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint"); if (t + e > n) throw new RangeError("Trying to access beyond buffer length") }

            function x(t, e, n, r, i, s) { if (!o.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (e > i || e < s) throw new RangeError('"value" argument is out of bounds'); if (n + r > t.length) throw new RangeError("Index out of range") }

            function M(t, e, n, r) { e < 0 && (e = 65535 + e + 1); for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i) }

            function O(t, e, n, r) { e < 0 && (e = 4294967295 + e + 1); for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255 }

            function N(t, e, n, r, i, o) { if (n + r > t.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

            function V(t, e, n, r, i) { return i || N(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), X.write(t, e, n, r, 23, 4), n + 4 }

            function K(t, e, n, r, i) { return i || N(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), X.write(t, e, n, r, 52, 8), n + 8 }

            function q(t) { if (t = L(t).replace(tt, ""), t.length < 2) return ""; for (; t.length % 4 != 0;) t += "="; return t }

            function L(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }

            function H(t) { return t < 16 ? "0" + t.toString(16) : t.toString(16) }

            function Y(t, e) { e = e || 1 / 0; for (var n, r = t.length, i = null, o = [], s = 0; s < r; ++s) { if ((n = t.charCodeAt(s)) > 55295 && n < 57344) { if (!i) { if (n > 56319) {
                                (e -= 3) > -1 && o.push(239, 191, 189); continue } if (s + 1 === r) {
                                (e -= 3) > -1 && o.push(239, 191, 189); continue }
                            i = n; continue } if (n < 56320) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = n; continue }
                        n = 65536 + (i - 55296 << 10 | n - 56320) } else i && (e -= 3) > -1 && o.push(239, 191, 189); if (i = null, n < 128) { if ((e -= 1) < 0) break;
                        o.push(n) } else if (n < 2048) { if ((e -= 2) < 0) break;
                        o.push(n >> 6 | 192, 63 & n | 128) } else if (n < 65536) { if ((e -= 3) < 0) break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128) } else { if (!(n < 1114112)) throw new Error("Invalid code point"); if ((e -= 4) < 0) break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128) } } return o }

            function W(t) { for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n)); return e }

            function j(t, e) { for (var n, r, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = t.charCodeAt(s), r = n >> 8, i = n % 256, o.push(i), o.push(r); return o }

            function J(t) { return Z.toByteArray(q(t)) }

            function z(t, e, n, r) { for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i]; return i }

            function G(t) { return t !== t }
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */
            var Z = n(19),
                X = n(20),
                Q = n(21);
            e.Buffer = o, e.SlowBuffer = d, e.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() { try { var t = new Uint8Array(1); return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength } catch (t) { return !1 } }(), e.kMaxLength = r(), o.poolSize = 8192, o._augment = function(t) { return t.__proto__ = o.prototype, t }, o.from = function(t, e, n) { return s(null, t, e, n) }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, { value: null, configurable: !0 })), o.alloc = function(t, e, n) { return u(null, t, e, n) }, o.allocUnsafe = function(t) { return c(null, t) }, o.allocUnsafeSlow = function(t) { return c(null, t) }, o.isBuffer = function(t) { return !(null == t || !t._isBuffer) }, o.compare = function(t, e) { if (!o.isBuffer(t) || !o.isBuffer(e)) throw new TypeError("Arguments must be Buffers"); if (t === e) return 0; for (var n = t.length, r = e.length, i = 0, s = Math.min(n, r); i < s; ++i)
                    if (t[i] !== e[i]) { n = t[i], r = e[i]; break }
                return n < r ? -1 : r < n ? 1 : 0 }, o.isEncoding = function(t) { switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1 } }, o.concat = function(t, e) { if (!Q(t)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === t.length) return o.alloc(0); var n; if (void 0 === e)
                    for (e = 0, n = 0; n < t.length; ++n) e += t[n].length; var r = o.allocUnsafe(e),
                    i = 0; for (n = 0; n < t.length; ++n) { var s = t[n]; if (!o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(r, i), i += s.length } return r }, o.byteLength = y, o.prototype._isBuffer = !0, o.prototype.swap16 = function() { var t = this.length; if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var e = 0; e < t; e += 2) S(this, e, e + 1); return this }, o.prototype.swap32 = function() { var t = this.length; if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var e = 0; e < t; e += 4) S(this, e, e + 3), S(this, e + 1, e + 2); return this }, o.prototype.swap64 = function() { var t = this.length; if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var e = 0; e < t; e += 8) S(this, e, e + 7), S(this, e + 1, e + 6), S(this, e + 2, e + 5), S(this, e + 3, e + 4); return this }, o.prototype.toString = function() { var t = 0 | this.length; return 0 === t ? "" : 0 === arguments.length ? R(this, 0, t) : v.apply(this, arguments) }, o.prototype.equals = function(t) { if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); return this === t || 0 === o.compare(this, t) }, o.prototype.inspect = function() { var t = "",
                    n = e.INSPECT_MAX_BYTES; return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">" }, o.prototype.compare = function(t, e, n, r, i) { if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index"); if (r >= i && e >= n) return 0; if (r >= i) return -1; if (e >= n) return 1; if (e >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === t) return 0; for (var s = i - r, a = n - e, u = Math.min(s, a), c = this.slice(r, i), h = t.slice(e, n), f = 0; f < u; ++f)
                    if (c[f] !== h[f]) { s = c[f], a = h[f]; break }
                return s < a ? -1 : a < s ? 1 : 0 }, o.prototype.includes = function(t, e, n) { return -1 !== this.indexOf(t, e, n) }, o.prototype.indexOf = function(t, e, n) { return m(this, t, e, n, !0) }, o.prototype.lastIndexOf = function(t, e, n) { return m(this, t, e, n, !1) }, o.prototype.write = function(t, e, n, r) { if (void 0 === e) r = "utf8", n = this.length, e = 0;
                else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                else { if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0) } var i = this.length - e; if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8"); for (var o = !1;;) switch (r) {
                    case "hex":
                        return w(this, t, e, n);
                    case "utf8":
                    case "utf-8":
                        return C(this, t, e, n);
                    case "ascii":
                        return U(this, t, e, n);
                    case "latin1":
                    case "binary":
                        return E(this, t, e, n);
                    case "base64":
                        return T(this, t, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return D(this, t, e, n);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), o = !0 } }, o.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };
            var $ = 4096;
            o.prototype.slice = function(t, e) { var n = this.length;
                t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t); var r; if (o.TYPED_ARRAY_SUPPORT) r = this.subarray(t, e), r.__proto__ = o.prototype;
                else { var i = e - t;
                    r = new o(i, void 0); for (var s = 0; s < i; ++s) r[s] = this[s + t] } return r }, o.prototype.readUIntLE = function(t, e, n) { t |= 0, e |= 0, n || F(t, e, this.length); for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i; return r }, o.prototype.readUIntBE = function(t, e, n) { t |= 0, e |= 0, n || F(t, e, this.length); for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) r += this[t + --e] * i; return r }, o.prototype.readUInt8 = function(t, e) { return e || F(t, 1, this.length), this[t] }, o.prototype.readUInt16LE = function(t, e) { return e || F(t, 2, this.length), this[t] | this[t + 1] << 8 }, o.prototype.readUInt16BE = function(t, e) { return e || F(t, 2, this.length), this[t] << 8 | this[t + 1] }, o.prototype.readUInt32LE = function(t, e) { return e || F(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3] }, o.prototype.readUInt32BE = function(t, e) { return e || F(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]) }, o.prototype.readIntLE = function(t, e, n) { t |= 0, e |= 0, n || F(t, e, this.length); for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i; return i *= 128, r >= i && (r -= Math.pow(2, 8 * e)), r }, o.prototype.readIntBE = function(t, e, n) { t |= 0, e |= 0, n || F(t, e, this.length); for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i; return i *= 128, o >= i && (o -= Math.pow(2, 8 * e)), o }, o.prototype.readInt8 = function(t, e) { return e || F(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t] }, o.prototype.readInt16LE = function(t, e) { e || F(t, 2, this.length); var n = this[t] | this[t + 1] << 8; return 32768 & n ? 4294901760 | n : n }, o.prototype.readInt16BE = function(t, e) { e || F(t, 2, this.length); var n = this[t + 1] | this[t] << 8; return 32768 & n ? 4294901760 | n : n }, o.prototype.readInt32LE = function(t, e) { return e || F(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24 }, o.prototype.readInt32BE = function(t, e) { return e || F(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3] }, o.prototype.readFloatLE = function(t, e) { return e || F(t, 4, this.length), X.read(this, t, !0, 23, 4) }, o.prototype.readFloatBE = function(t, e) { return e || F(t, 4, this.length), X.read(this, t, !1, 23, 4) }, o.prototype.readDoubleLE = function(t, e) { return e || F(t, 8, this.length), X.read(this, t, !0, 52, 8) }, o.prototype.readDoubleBE = function(t, e) { return e || F(t, 8, this.length), X.read(this, t, !1, 52, 8) }, o.prototype.writeUIntLE = function(t, e, n, r) { if (t = +t, e |= 0, n |= 0, !r) { x(this, t, e, n, Math.pow(2, 8 * n) - 1, 0) } var i = 1,
                    o = 0; for (this[e] = 255 & t; ++o < n && (i *= 256);) this[e + o] = t / i & 255; return e + n }, o.prototype.writeUIntBE = function(t, e, n, r) { if (t = +t, e |= 0, n |= 0, !r) { x(this, t, e, n, Math.pow(2, 8 * n) - 1, 0) } var i = n - 1,
                    o = 1; for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255; return e + n }, o.prototype.writeUInt8 = function(t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1 }, o.prototype.writeUInt16LE = function(t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2 }, o.prototype.writeUInt16BE = function(t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2 }, o.prototype.writeUInt32LE = function(t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : O(this, t, e, !0), e + 4 }, o.prototype.writeUInt32BE = function(t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : O(this, t, e, !1), e + 4 }, o.prototype.writeIntLE = function(t, e, n, r) { if (t = +t, e |= 0, !r) { var i = Math.pow(2, 8 * n - 1);
                    x(this, t, e, n, i - 1, -i) } var o = 0,
                    s = 1,
                    a = 0; for (this[e] = 255 & t; ++o < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255; return e + n }, o.prototype.writeIntBE = function(t, e, n, r) { if (t = +t, e |= 0, !r) { var i = Math.pow(2, 8 * n - 1);
                    x(this, t, e, n, i - 1, -i) } var o = n - 1,
                    s = 1,
                    a = 0; for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255; return e + n }, o.prototype.writeInt8 = function(t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1 }, o.prototype.writeInt16LE = function(t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2 }, o.prototype.writeInt16BE = function(t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2 }, o.prototype.writeInt32LE = function(t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : O(this, t, e, !0), e + 4 }, o.prototype.writeInt32BE = function(t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : O(this, t, e, !1), e + 4 }, o.prototype.writeFloatLE = function(t, e, n) { return V(this, t, e, !0, n) }, o.prototype.writeFloatBE = function(t, e, n) { return V(this, t, e, !1, n) }, o.prototype.writeDoubleLE = function(t, e, n) { return K(this, t, e, !0, n) }, o.prototype.writeDoubleBE = function(t, e, n) { return K(this, t, e, !1, n) }, o.prototype.copy = function(t, e, n, r) { if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0; if (0 === t.length || 0 === this.length) return 0; if (e < 0) throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds"); if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n); var i, s = r - n; if (this === t && n < e && e < r)
                    for (i = s - 1; i >= 0; --i) t[i + e] = this[i + n];
                else if (s < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < s; ++i) t[i + e] = this[i + n];
                else Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e); return s }, o.prototype.fill = function(t, e, n, r) { if ("string" == typeof t) { if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) { var i = t.charCodeAt(0);
                        i < 256 && (t = i) } if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string"); if ("string" == typeof r && !o.isEncoding(r)) throw new TypeError("Unknown encoding: " + r) } else "number" == typeof t && (t &= 255); if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index"); if (n <= e) return this;
                e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0); var s; if ("number" == typeof t)
                    for (s = e; s < n; ++s) this[s] = t;
                else { var a = o.isBuffer(t) ? t : Y(new o(t, r).toString()),
                        u = a.length; for (s = 0; s < n - e; ++s) this[s + e] = a[s % u] } return this };
            var tt = /[^+\/0-9A-Za-z-_]/g
        }).call(e, n(18))
    }, function(t, e, n) { "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } var i = n(1),
            o = (n.n(i), n(0)),
            s = n.n(o),
            a = n(3),
            u = (n.n(a), n(4)),
            c = n.n(u),
            h = n(5),
            f = n.n(h),
            l = n(6),
            p = function(t) { return i.Buffer.from(s.a.lib.WordArray.random(t).toString(), "hex") },
            g = "FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF",
            d = function() {
                function t(e) { r(this, t), this.N = new l.a(g, 16), this.g = new l.a("2", 16), this.k = new l.a(this.hexHash("00" + this.N.toString(16) + "0" + this.g.toString(16)), 16), this.smallAValue = this.generateRandomSmallA(), this.getLargeAValue(function() {}), this.infoBits = i.Buffer.from("Caldera Derived Key", "utf8"), this.poolName = e } return t.prototype.getSmallAValue = function() { return this.smallAValue }, t.prototype.getLargeAValue = function(t) { var e = this;
                    this.largeAValue ? t(null, this.largeAValue) : this.calculateA(this.smallAValue, function(n, r) { n && t(n, null), e.largeAValue = r, t(null, e.largeAValue) }) }, t.prototype.generateRandomSmallA = function() { var t = p(128).toString("hex"); return new l.a(t, 16).mod(this.N) }, t.prototype.generateRandomString = function() { return p(40).toString("base64") }, t.prototype.getRandomPassword = function() { return this.randomPassword }, t.prototype.getSaltDevices = function() { return this.SaltToHashDevices }, t.prototype.getVerifierDevices = function() { return this.verifierDevices }, t.prototype.generateHashDevice = function(t, e, n) { var r = this;
                    this.randomPassword = this.generateRandomString(); var i = "" + t + e + ":" + this.randomPassword,
                        o = this.hash(i),
                        s = p(16).toString("hex");
                    this.SaltToHashDevices = this.padHex(new l.a(s, 16)), this.g.modPow(new l.a(this.hexHash(this.SaltToHashDevices + o), 16), this.N, function(t, e) { t && n(t, null), r.verifierDevices = r.padHex(e), n(null, null) }) }, t.prototype.calculateA = function(t, e) { var n = this;
                    this.g.modPow(t, this.N, function(t, r) { t && e(t, null), r.mod(n.N).equals(l.a.ZERO) && e(new Error("Illegal paramater. A mod N cannot be 0."), null), e(null, r) }) }, t.prototype.calculateU = function(t, e) { return this.UHexHash = this.hexHash(this.padHex(t) + this.padHex(e)), new l.a(this.UHexHash, 16) }, t.prototype.hash = function(t) { var e = t instanceof i.Buffer ? s.a.lib.WordArray.create(t) : t,
                        n = c()(e).toString(); return new Array(64 - n.length).join("0") + n }, t.prototype.hexHash = function(t) { return this.hash(i.Buffer.from(t, "hex")) }, t.prototype.computehkdf = function(t, e) { var n = s.a.lib.WordArray.create(i.Buffer.concat([this.infoBits, i.Buffer.from(String.fromCharCode(1), "utf8")])),
                        r = t instanceof i.Buffer ? s.a.lib.WordArray.create(t) : t,
                        o = e instanceof i.Buffer ? s.a.lib.WordArray.create(e) : e,
                        a = f()(r, o),
                        u = f()(n, a); return i.Buffer.from(u.toString(), "hex").slice(0, 16) }, t.prototype.getPasswordAuthenticationKey = function(t, e, n, r, o) { var s = this; if (n.mod(this.N).equals(l.a.ZERO)) throw new Error("B cannot be zero."); if (this.UValue = this.calculateU(this.largeAValue, n), this.UValue.equals(l.a.ZERO)) throw new Error("U cannot be zero."); var a = "" + this.poolName + t + ":" + e,
                        u = this.hash(a),
                        c = new l.a(this.hexHash(this.padHex(r) + u), 16);
                    this.calculateS(c, n, function(t, e) { t && o(t, null); var n = s.computehkdf(i.Buffer.from(s.padHex(e), "hex"), i.Buffer.from(s.padHex(s.UValue.toString(16)), "hex"));
                        o(null, n) }) }, t.prototype.calculateS = function(t, e, n) { var r = this;
                    this.g.modPow(t, this.N, function(i, o) { i && n(i, null), e.subtract(r.k.multiply(o)).modPow(r.smallAValue.add(r.UValue.multiply(t)), r.N, function(t, e) { t && n(t, null), n(null, e.mod(r.N)) }) }) }, t.prototype.getNewPasswordRequiredChallengeUserAttributePrefix = function() { return "userAttributes." }, t.prototype.padHex = function(t) { var e = t.toString(16); return e.length % 2 == 1 ? e = "0" + e : -1 !== "89ABCDEFabcdef".indexOf(e[0]) && (e = "00" + e), e }, t }();
        e.a = d }, function(t, e, n) {! function(r, i) { t.exports = e = i(n(0)) }(0, function(t) { return function() { if ("function" == typeof ArrayBuffer) { var e = t,
                        n = e.lib,
                        r = n.WordArray,
                        i = r.init;
                    (r.init = function(t) { if (t instanceof ArrayBuffer && (t = new Uint8Array(t)), (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), t instanceof Uint8Array) { for (var e = t.byteLength, n = [], r = 0; r < e; r++) n[r >>> 2] |= t[r] << 24 - r % 4 * 8;
                            i.call(this, n, e) } else i.apply(this, arguments) }).prototype = r } }(), t.lib.WordArray }) }, function(t, e, n) {! function(r, i) { t.exports = e = i(n(0)) }(0, function(t) { return function(e) { var n = t,
                    r = n.lib,
                    i = r.WordArray,
                    o = r.Hasher,
                    s = n.algo,
                    a = [],
                    u = [];! function() {
                    function t(t) { return 4294967296 * (t - (0 | t)) | 0 } for (var n = 2, r = 0; r < 64;)(function(t) { for (var n = e.sqrt(t), r = 2; r <= n; r++)
                            if (!(t % r)) return !1;
                        return !0 })(n) && (r < 8 && (a[r] = t(e.pow(n, .5))), u[r] = t(e.pow(n, 1 / 3)), r++), n++ }(); var c = [],
                    h = s.SHA256 = o.extend({ _doReset: function() { this._hash = new i.init(a.slice(0)) }, _doProcessBlock: function(t, e) { for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], a = n[4], h = n[5], f = n[6], l = n[7], p = 0; p < 64; p++) { if (p < 16) c[p] = 0 | t[e + p];
                                else { var g = c[p - 15],
                                        d = (g << 25 | g >>> 7) ^ (g << 14 | g >>> 18) ^ g >>> 3,
                                        y = c[p - 2],
                                        v = (y << 15 | y >>> 17) ^ (y << 13 | y >>> 19) ^ y >>> 10;
                                    c[p] = d + c[p - 7] + v + c[p - 16] } var S = a & h ^ ~a & f,
                                    m = r & i ^ r & o ^ i & o,
                                    A = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                                    w = (a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25),
                                    C = l + w + S + u[p] + c[p],
                                    U = A + m;
                                l = f, f = h, h = a, a = s + C | 0, s = o, o = i, i = r, r = C + U | 0 }
                            n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, n[4] = n[4] + a | 0, n[5] = n[5] + h | 0, n[6] = n[6] + f | 0, n[7] = n[7] + l | 0 }, _doFinalize: function() { var t = this._data,
                                n = t.words,
                                r = 8 * this._nDataBytes,
                                i = 8 * t.sigBytes; return n[i >>> 5] |= 128 << 24 - i % 32, n[14 + (i + 64 >>> 9 << 4)] = e.floor(r / 4294967296), n[15 + (i + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * n.length, this._process(), this._hash }, clone: function() { var t = o.clone.call(this); return t._hash = this._hash.clone(), t } });
                n.SHA256 = o._createHelper(h), n.HmacSHA256 = o._createHmacHelper(h) }(Math), t.SHA256 }) }, function(t, e, n) {! function(r, i, o) { t.exports = e = i(n(0), n(4), n(22)) }(0, function(t) { return t.HmacSHA256 }) }, function(t, e, n) { "use strict";

        function r(t, e) { null != t && this.fromString(t, e) }

        function i() { return new r(null) }

        function o(t, e, n, r, i, o) { for (; --o >= 0;) { var s = e * this[t++] + n[r] + i;
                i = Math.floor(s / 67108864), n[r++] = 67108863 & s } return i }

        function s(t, e, n, r, i, o) { for (var s = 32767 & e, a = e >> 15; --o >= 0;) { var u = 32767 & this[t],
                    c = this[t++] >> 15,
                    h = a * u + c * s;
                u = s * u + ((32767 & h) << 15) + n[r] + (1073741823 & i), i = (u >>> 30) + (h >>> 15) + a * c + (i >>> 30), n[r++] = 1073741823 & u } return i }

        function a(t, e, n, r, i, o) { for (var s = 16383 & e, a = e >> 14; --o >= 0;) { var u = 16383 & this[t],
                    c = this[t++] >> 14,
                    h = a * u + c * s;
                u = s * u + ((16383 & h) << 14) + n[r] + i, i = (u >> 28) + (h >> 14) + a * c, n[r++] = 268435455 & u } return i }

        function u(t) { return z.charAt(t) }

        function c(t, e) { var n = G[t.charCodeAt(e)]; return null == n ? -1 : n }

        function h(t) { for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
            t.t = this.t, t.s = this.s }

        function f(t) { this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0 }

        function l(t) { var e = i(); return e.fromInt(t), e }

        function p(t, e) { var n; if (16 == e) n = 4;
            else if (8 == e) n = 3;
            else if (2 == e) n = 1;
            else if (32 == e) n = 5;
            else { if (4 != e) throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
                n = 2 }
            this.t = 0, this.s = 0; for (var i = t.length, o = !1, s = 0; --i >= 0;) { var a = c(t, i);
                a < 0 ? "-" == t.charAt(i) && (o = !0) : (o = !1, 0 == s ? this[this.t++] = a : s + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, (s += n) >= this.DB && (s -= this.DB)) }
            this.clamp(), o && r.ZERO.subTo(this, this) }

        function g() { for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t }

        function d(t) { if (this.s < 0) return "-" + this.negate().toString(); var e; if (16 == t) e = 4;
            else if (8 == t) e = 3;
            else if (2 == t) e = 1;
            else if (32 == t) e = 5;
            else { if (4 != t) throw new Error("Only radix 2, 4, 8, 16, 32 are supported");
                e = 2 } var n, r = (1 << e) - 1,
                i = !1,
                o = "",
                s = this.t,
                a = this.DB - s * this.DB % e; if (s-- > 0)
                for (a < this.DB && (n = this[s] >> a) > 0 && (i = !0, o = u(n)); s >= 0;) a < e ? (n = (this[s] & (1 << a) - 1) << e - a, n |= this[--s] >> (a += this.DB - e)) : (n = this[s] >> (a -= e) & r, a <= 0 && (a += this.DB, --s)), n > 0 && (i = !0), i && (o += u(n)); return i ? o : "0" }

        function y() { var t = i(); return r.ZERO.subTo(this, t), t }

        function v() { return this.s < 0 ? this.negate() : this }

        function S(t) { var e = this.s - t.s; if (0 != e) return e; var n = this.t; if (0 != (e = n - t.t)) return this.s < 0 ? -e : e; for (; --n >= 0;)
                if (0 != (e = this[n] - t[n])) return e;
            return 0 }

        function m(t) { var e, n = 1; return 0 != (e = t >>> 16) && (t = e, n += 16), 0 != (e = t >> 8) && (t = e, n += 8), 0 != (e = t >> 4) && (t = e, n += 4), 0 != (e = t >> 2) && (t = e, n += 2), 0 != (e = t >> 1) && (t = e, n += 1), n }

        function A() { return this.t <= 0 ? 0 : this.DB * (this.t - 1) + m(this[this.t - 1] ^ this.s & this.DM) }

        function w(t, e) { var n; for (n = this.t - 1; n >= 0; --n) e[n + t] = this[n]; for (n = t - 1; n >= 0; --n) e[n] = 0;
            e.t = this.t + t, e.s = this.s }

        function C(t, e) { for (var n = t; n < this.t; ++n) e[n - t] = this[n];
            e.t = Math.max(this.t - t, 0), e.s = this.s }

        function U(t, e) { var n, r = t % this.DB,
                i = this.DB - r,
                o = (1 << i) - 1,
                s = Math.floor(t / this.DB),
                a = this.s << r & this.DM; for (n = this.t - 1; n >= 0; --n) e[n + s + 1] = this[n] >> i | a, a = (this[n] & o) << r; for (n = s - 1; n >= 0; --n) e[n] = 0;
            e[s] = a, e.t = this.t + s + 1, e.s = this.s, e.clamp() }

        function E(t, e) { e.s = this.s; var n = Math.floor(t / this.DB); if (n >= this.t) return void(e.t = 0); var r = t % this.DB,
                i = this.DB - r,
                o = (1 << r) - 1;
            e[0] = this[n] >> r; for (var s = n + 1; s < this.t; ++s) e[s - n - 1] |= (this[s] & o) << i, e[s - n] = this[s] >> r;
            r > 0 && (e[this.t - n - 1] |= (this.s & o) << i), e.t = this.t - n, e.clamp() }

        function T(t, e) { for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i;) r += this[n] - t[n], e[n++] = r & this.DM, r >>= this.DB; if (t.t < this.t) { for (r -= t.s; n < this.t;) r += this[n], e[n++] = r & this.DM, r >>= this.DB;
                r += this.s } else { for (r += this.s; n < t.t;) r -= t[n], e[n++] = r & this.DM, r >>= this.DB;
                r -= t.s }
            e.s = r < 0 ? -1 : 0, r < -1 ? e[n++] = this.DV + r : r > 0 && (e[n++] = r), e.t = n, e.clamp() }

        function D(t, e) { var n = this.abs(),
                i = t.abs(),
                o = n.t; for (e.t = o + i.t; --o >= 0;) e[o] = 0; for (o = 0; o < i.t; ++o) e[o + n.t] = n.am(0, i[o], e, o, 0, n.t);
            e.s = 0, e.clamp(), this.s != t.s && r.ZERO.subTo(e, e) }

        function I(t) { for (var e = this.abs(), n = t.t = 2 * e.t; --n >= 0;) t[n] = 0; for (n = 0; n < e.t - 1; ++n) { var r = e.am(n, e[n], t, 2 * n, 0, 1);
                (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, r, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV, t[n + e.t + 1] = 1) }
            t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)), t.s = 0, t.clamp() }

        function R(t, e, n) { var o = t.abs(); if (!(o.t <= 0)) { var s = this.abs(); if (s.t < o.t) return null != e && e.fromInt(0), void(null != n && this.copyTo(n));
                null == n && (n = i()); var a = i(),
                    u = this.s,
                    c = t.s,
                    h = this.DB - m(o[o.t - 1]);
                h > 0 ? (o.lShiftTo(h, a), s.lShiftTo(h, n)) : (o.copyTo(a), s.copyTo(n)); var f = a.t,
                    l = a[f - 1]; if (0 != l) { var p = l * (1 << this.F1) + (f > 1 ? a[f - 2] >> this.F2 : 0),
                        g = this.FV / p,
                        d = (1 << this.F1) / p,
                        y = 1 << this.F2,
                        v = n.t,
                        S = v - f,
                        A = null == e ? i() : e; for (a.dlShiftTo(S, A), n.compareTo(A) >= 0 && (n[n.t++] = 1, n.subTo(A, n)), r.ONE.dlShiftTo(f, A), A.subTo(a, a); a.t < f;) a[a.t++] = 0; for (; --S >= 0;) { var w = n[--v] == l ? this.DM : Math.floor(n[v] * g + (n[v - 1] + y) * d); if ((n[v] += a.am(0, w, n, S, 0, f)) < w)
                            for (a.dlShiftTo(S, A), n.subTo(A, n); n[v] < --w;) n.subTo(A, n) }
                    null != e && (n.drShiftTo(f, e), u != c && r.ZERO.subTo(e, e)), n.t = f, n.clamp(), h > 0 && n.rShiftTo(h, n), u < 0 && r.ZERO.subTo(n, n) } } }

        function P(t) { var e = i(); return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(r.ZERO) > 0 && t.subTo(e, e), e }

        function _() { if (this.t < 1) return 0; var t = this[0]; if (0 == (1 & t)) return 0; var e = 3 & t; return e = e * (2 - (15 & t) * e) & 15, e = e * (2 - (255 & t) * e) & 255, e = e * (2 - ((65535 & t) * e & 65535)) & 65535, e = e * (2 - t * e % this.DV) % this.DV, e > 0 ? this.DV - e : -e }

        function b(t) { return 0 == this.compareTo(t) }

        function B(t, e) { for (var n = 0, r = 0, i = Math.min(t.t, this.t); n < i;) r += this[n] + t[n], e[n++] = r & this.DM, r >>= this.DB; if (t.t < this.t) { for (r += t.s; n < this.t;) r += this[n], e[n++] = r & this.DM, r >>= this.DB;
                r += this.s } else { for (r += this.s; n < t.t;) r += t[n], e[n++] = r & this.DM, r >>= this.DB;
                r += t.s }
            e.s = r < 0 ? -1 : 0, r > 0 ? e[n++] = r : r < -1 && (e[n++] = this.DV + r), e.t = n, e.clamp() }

        function k(t) { var e = i(); return this.addTo(t, e), e }

        function F(t) { var e = i(); return this.subTo(t, e), e }

        function x(t) { var e = i(); return this.multiplyTo(t, e), e }

        function M(t) { var e = i(); return this.divRemTo(t, e, null), e }

        function O(t) { this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t }

        function N(t) { var e = i(); return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(r.ZERO) > 0 && this.m.subTo(e, e), e }

        function V(t) { var e = i(); return t.copyTo(e), this.reduce(e), e }

        function K(t) { for (; t.t <= this.mt2;) t[t.t++] = 0; for (var e = 0; e < this.m.t; ++e) { var n = 32767 & t[e],
                    r = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM; for (n = e + this.m.t, t[n] += this.m.am(0, r, t, e, 0, this.m.t); t[n] >= t.DV;) t[n] -= t.DV, t[++n]++ }
            t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t) }

        function q(t, e) { t.squareTo(e), this.reduce(e) }

        function L(t, e, n) { t.multiplyTo(e, n), this.reduce(n) }

        function H(t, e, n) { var r, o = t.bitLength(),
                s = l(1),
                a = new O(e); if (o <= 0) return s;
            r = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6; var u = new Array,
                c = 3,
                h = r - 1,
                f = (1 << r) - 1; if (u[1] = a.convert(this), r > 1) { var p = i(); for (a.sqrTo(u[1], p); c <= f;) u[c] = i(), a.mulTo(p, u[c - 2], u[c]), c += 2 } var g, d, y = t.t - 1,
                v = !0,
                S = i(); for (o = m(t[y]) - 1; y >= 0;) { for (o >= h ? g = t[y] >> o - h & f : (g = (t[y] & (1 << o + 1) - 1) << h - o, y > 0 && (g |= t[y - 1] >> this.DB + o - h)), c = r; 0 == (1 & g);) g >>= 1, --c; if ((o -= c) < 0 && (o += this.DB, --y), v) u[g].copyTo(s), v = !1;
                else { for (; c > 1;) a.sqrTo(s, S), a.sqrTo(S, s), c -= 2;
                    c > 0 ? a.sqrTo(s, S) : (d = s, s = S, S = d), a.mulTo(S, u[g], s) } for (; y >= 0 && 0 == (t[y] & 1 << o);) a.sqrTo(s, S), d = s, s = S, S = d, --o < 0 && (o = this.DB - 1, --y) } var A = a.revert(s); return n(null, A), A }
        e.a = r; var Y, W = "undefined" != typeof navigator;
        W && "Microsoft Internet Explorer" == navigator.appName ? (r.prototype.am = s, Y = 30) : W && "Netscape" != navigator.appName ? (r.prototype.am = o, Y = 26) : (r.prototype.am = a, Y = 28), r.prototype.DB = Y, r.prototype.DM = (1 << Y) - 1, r.prototype.DV = 1 << Y;
        r.prototype.FV = Math.pow(2, 52), r.prototype.F1 = 52 - Y, r.prototype.F2 = 2 * Y - 52; var j, J, z = "0123456789abcdefghijklmnopqrstuvwxyz",
            G = new Array; for (j = "0".charCodeAt(0), J = 0; J <= 9; ++J) G[j++] = J; for (j = "a".charCodeAt(0), J = 10; J < 36; ++J) G[j++] = J; for (j = "A".charCodeAt(0), J = 10; J < 36; ++J) G[j++] = J;
        O.prototype.convert = N, O.prototype.revert = V, O.prototype.reduce = K, O.prototype.mulTo = L, O.prototype.sqrTo = q, r.prototype.copyTo = h, r.prototype.fromInt = f, r.prototype.fromString = p, r.prototype.clamp = g, r.prototype.dlShiftTo = w, r.prototype.drShiftTo = C, r.prototype.lShiftTo = U, r.prototype.rShiftTo = E, r.prototype.subTo = T, r.prototype.multiplyTo = D, r.prototype.squareTo = I, r.prototype.divRemTo = R, r.prototype.invDigit = _, r.prototype.addTo = B, r.prototype.toString = d, r.prototype.negate = y, r.prototype.abs = v, r.prototype.compareTo = S, r.prototype.bitLength = A, r.prototype.mod = P, r.prototype.equals = b, r.prototype.add = k, r.prototype.subtract = F, r.prototype.multiply = x, r.prototype.divide = M, r.prototype.modPow = H, r.ZERO = l(0), r.ONE = l(1) }, function(t, e, n) { "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) } var s = n(8),
            a = function(t) {
                function e() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = n.AccessToken; return r(this, e), i(this, t.call(this, o || "")) } return o(e, t), e }(s.a);
        e.a = a }, function(t, e, n) { "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } var i = n(1),
            o = (n.n(i), function() {
                function t(e) { r(this, t), this.jwtToken = e || "", this.payload = this.decodePayload() } return t.prototype.getJwtToken = function() { return this.jwtToken }, t.prototype.getExpiration = function() { return this.payload.exp }, t.prototype.getIssuedAt = function() { return this.payload.iat }, t.prototype.decodePayload = function() { var t = this.jwtToken.split(".")[1]; try { return JSON.parse(i.Buffer.from(t, "base64").toString("utf8")) } catch (t) { return {} } }, t }());
        e.a = o }, function(t, e, n) { "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) } var s = n(8),
            a = function(t) {
                function e() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = n.IdToken; return r(this, e), i(this, t.call(this, o || "")) } return o(e, t), e }(s.a);
        e.a = a }, function(t, e, n) {
        "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        /*!
         * Copyright 2016 Amazon.com,
         * Inc. or its affiliates. All Rights Reserved.
         *
         * Licensed under the Amazon Software License (the "License").
         * You may not use this file except in compliance with the
         * License. A copy of the License is located at
         *
         *     http://aws.amazon.com/asl/
         *
         * or in the "license" file accompanying this file. This file is
         * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
         * CONDITIONS OF ANY KIND, express or implied. See the License
         * for the specific language governing permissions and
         * limitations under the License.
         */
        var i = function() {
            function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.RefreshToken;
                r(this, t), this.token = n || "" } return t.prototype.getToken = function() { return this.token }, t }();
        e.a = i
    }, function(t, e, n) { "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } var i = n(1),
            o = (n.n(i), n(0)),
            s = n.n(o),
            a = n(3),
            u = (n.n(a), n(23)),
            c = n.n(u),
            h = n(5),
            f = n.n(h),
            l = n(6),
            p = n(2),
            g = n(7),
            d = n(9),
            y = n(10),
            v = n(12),
            S = n(13),
            m = n(14),
            A = n(15),
            w = function() {
                function t(e) { if (r(this, t), null == e || null == e.Username || null == e.Pool) throw new Error("Username and pool information are required.");
                    this.username = e.Username || "", this.pool = e.Pool, this.Session = null, this.client = e.Pool.client, this.signInUserSession = null, this.authenticationFlowType = "USER_SRP_AUTH", this.storage = e.Storage || (new A.a).getStorage(), this.keyPrefix = "CognitoIdentityServiceProvider." + this.pool.getClientId(), this.userDataKey = this.keyPrefix + "." + this.username + ".userData" } return t.prototype.setSignInUserSession = function(t) { this.clearCachedUserData(), this.signInUserSession = t, this.cacheTokens() }, t.prototype.getSignInUserSession = function() { return this.signInUserSession }, t.prototype.getUsername = function() { return this.username }, t.prototype.getAuthenticationFlowType = function() { return this.authenticationFlowType }, t.prototype.setAuthenticationFlowType = function(t) { this.authenticationFlowType = t }, t.prototype.initiateAuth = function(t, e) { var n = this,
                        r = t.getAuthParameters();
                    r.USERNAME = this.username; var i = { AuthFlow: "CUSTOM_AUTH", ClientId: this.pool.getClientId(), AuthParameters: r, ClientMetadata: t.getValidationData() };
                    this.getUserContextData() && (i.UserContextData = this.getUserContextData()), this.client.request("InitiateAuth", i, function(t, r) { if (t) return e.onFailure(t); var i = r.ChallengeName,
                            o = r.ChallengeParameters; return "CUSTOM_CHALLENGE" === i ? (n.Session = r.Session, e.customChallenge(o)) : (n.signInUserSession = n.getCognitoUserSession(r.AuthenticationResult), n.cacheTokens(), e.onSuccess(n.signInUserSession)) }) }, t.prototype.authenticateUser = function(t, e) { return "USER_PASSWORD_AUTH" === this.authenticationFlowType ? this.authenticateUserPlainUsernamePassword(t, e) : "USER_SRP_AUTH" === this.authenticationFlowType || "CUSTOM_AUTH" === this.authenticationFlowType ? this.authenticateUserDefaultAuth(t, e) : e.onFailure(new Error("Authentication flow type is invalid.")) }, t.prototype.authenticateUserDefaultAuth = function(t, e) { var n = this,
                        r = new p.a(this.pool.getUserPoolId().split("_")[1]),
                        o = new S.a,
                        a = void 0,
                        u = void 0,
                        h = {};
                    null != this.deviceKey && (h.DEVICE_KEY = this.deviceKey), h.USERNAME = this.username, r.getLargeAValue(function(p, g) { p && e.onFailure(p), h.SRP_A = g.toString(16), "CUSTOM_AUTH" === n.authenticationFlowType && (h.CHALLENGE_NAME = "SRP_A"); var d = { AuthFlow: n.authenticationFlowType, ClientId: n.pool.getClientId(), AuthParameters: h, ClientMetadata: t.getValidationData() };
                        n.getUserContextData(n.username) && (d.UserContextData = n.getUserContextData(n.username)), n.client.request("InitiateAuth", d, function(h, p) { if (h) return e.onFailure(h); var g = p.ChallengeParameters;
                            n.username = g.USER_ID_FOR_SRP, a = new l.a(g.SRP_B, 16), u = new l.a(g.SALT, 16), n.getCachedDeviceKeyAndPassword(), r.getPasswordAuthenticationKey(n.username, t.getPassword(), a, u, function(t, a) { t && e.onFailure(t); var u = o.getNowString(),
                                    h = s.a.lib.WordArray.create(i.Buffer.concat([i.Buffer.from(n.pool.getUserPoolId().split("_")[1], "utf8"), i.Buffer.from(n.username, "utf8"), i.Buffer.from(g.SECRET_BLOCK, "base64"), i.Buffer.from(u, "utf8")])),
                                    l = s.a.lib.WordArray.create(a),
                                    d = c.a.stringify(f()(h, l)),
                                    y = {};
                                y.USERNAME = n.username, y.PASSWORD_CLAIM_SECRET_BLOCK = g.SECRET_BLOCK, y.TIMESTAMP = u, y.PASSWORD_CLAIM_SIGNATURE = d, null != n.deviceKey && (y.DEVICE_KEY = n.deviceKey); var v = { ChallengeName: "PASSWORD_VERIFIER", ClientId: n.pool.getClientId(), ChallengeResponses: y, Session: p.Session };
                                n.getUserContextData() && (v.UserContextData = n.getUserContextData()),
                                    function t(e, r) { return n.client.request("RespondToAuthChallenge", e, function(i, o) { return i && "ResourceNotFoundException" === i.code && -1 !== i.message.toLowerCase().indexOf("device") ? (y.DEVICE_KEY = null, n.deviceKey = null, n.randomPassword = null, n.deviceGroupKey = null, n.clearCachedDeviceKeyAndPassword(), t(e, r)) : r(i, o) }) }(v, function(t, i) { return t ? e.onFailure(t) : n.authenticateUserInternal(i, r, e) }) }) }) }) }, t.prototype.authenticateUserPlainUsernamePassword = function(t, e) { var n = this,
                        r = {}; if (r.USERNAME = this.username, r.PASSWORD = t.getPassword(), !r.PASSWORD) return void e.onFailure(new Error("PASSWORD parameter is required")); var i = new p.a(this.pool.getUserPoolId().split("_")[1]);
                    this.getCachedDeviceKeyAndPassword(), null != this.deviceKey && (r.DEVICE_KEY = this.deviceKey); var o = { AuthFlow: "USER_PASSWORD_AUTH", ClientId: this.pool.getClientId(), AuthParameters: r, ClientMetadata: t.getValidationData() };
                    this.getUserContextData(this.username) && (o.UserContextData = this.getUserContextData(this.username)), this.client.request("InitiateAuth", o, function(t, r) { return t ? e.onFailure(t) : n.authenticateUserInternal(r, i, e) }) }, t.prototype.authenticateUserInternal = function(t, e, n) { var r = this,
                        o = t.ChallengeName,
                        s = t.ChallengeParameters; if ("SMS_MFA" === o) return this.Session = t.Session, n.mfaRequired(o, s); if ("SELECT_MFA_TYPE" === o) return this.Session = t.Session, n.selectMFAType(o, s); if ("MFA_SETUP" === o) return this.Session = t.Session, n.mfaSetup(o, s); if ("SOFTWARE_TOKEN_MFA" === o) return this.Session = t.Session, n.totpRequired(o, s); if ("CUSTOM_CHALLENGE" === o) return this.Session = t.Session, n.customChallenge(s); if ("NEW_PASSWORD_REQUIRED" === o) { this.Session = t.Session; var a = null,
                            u = null,
                            c = [],
                            h = e.getNewPasswordRequiredChallengeUserAttributePrefix(); if (s && (a = JSON.parse(t.ChallengeParameters.userAttributes), u = JSON.parse(t.ChallengeParameters.requiredAttributes)), u)
                            for (var f = 0; f < u.length; f++) c[f] = u[f].substr(h.length); return n.newPasswordRequired(a, c) } if ("DEVICE_SRP_AUTH" === o) return void this.getDeviceResponse(n);
                    this.signInUserSession = this.getCognitoUserSession(t.AuthenticationResult), this.challengeName = o, this.cacheTokens(); var l = t.AuthenticationResult.NewDeviceMetadata; if (null == l) return n.onSuccess(this.signInUserSession);
                    e.generateHashDevice(t.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, t.AuthenticationResult.NewDeviceMetadata.DeviceKey, function(o) { if (o) return n.onFailure(o); var s = { Salt: i.Buffer.from(e.getSaltDevices(), "hex").toString("base64"), PasswordVerifier: i.Buffer.from(e.getVerifierDevices(), "hex").toString("base64") };
                        r.verifierDevices = s.PasswordVerifier, r.deviceGroupKey = l.DeviceGroupKey, r.randomPassword = e.getRandomPassword(), r.client.request("ConfirmDevice", { DeviceKey: l.DeviceKey, AccessToken: r.signInUserSession.getAccessToken().getJwtToken(), DeviceSecretVerifierConfig: s, DeviceName: navigator.userAgent }, function(e, i) { return e ? n.onFailure(e) : (r.deviceKey = t.AuthenticationResult.NewDeviceMetadata.DeviceKey, r.cacheDeviceKeyAndPassword(), !0 === i.UserConfirmationNecessary ? n.onSuccess(r.signInUserSession, i.UserConfirmationNecessary) : n.onSuccess(r.signInUserSession)) }) }) }, t.prototype.completeNewPasswordChallenge = function(t, e, n) { var r = this; if (!t) return n.onFailure(new Error("New password is required.")); var i = new p.a(this.pool.getUserPoolId().split("_")[1]),
                        o = i.getNewPasswordRequiredChallengeUserAttributePrefix(),
                        s = {};
                    e && Object.keys(e).forEach(function(t) { s[o + t] = e[t] }), s.NEW_PASSWORD = t, s.USERNAME = this.username; var a = { ChallengeName: "NEW_PASSWORD_REQUIRED", ClientId: this.pool.getClientId(), ChallengeResponses: s, Session: this.Session };
                    this.getUserContextData() && (a.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", a, function(t, e) { return t ? n.onFailure(t) : r.authenticateUserInternal(e, i, n) }) }, t.prototype.getDeviceResponse = function(t) { var e = this,
                        n = new p.a(this.deviceGroupKey),
                        r = new S.a,
                        o = {};
                    o.USERNAME = this.username, o.DEVICE_KEY = this.deviceKey, n.getLargeAValue(function(a, u) { a && t.onFailure(a), o.SRP_A = u.toString(16); var h = { ChallengeName: "DEVICE_SRP_AUTH", ClientId: e.pool.getClientId(), ChallengeResponses: o };
                        e.getUserContextData() && (h.UserContextData = e.getUserContextData()), e.client.request("RespondToAuthChallenge", h, function(o, a) { if (o) return t.onFailure(o); var u = a.ChallengeParameters,
                                h = new l.a(u.SRP_B, 16),
                                p = new l.a(u.SALT, 16);
                            n.getPasswordAuthenticationKey(e.deviceKey, e.randomPassword, h, p, function(n, o) { if (n) return t.onFailure(n); var h = r.getNowString(),
                                    l = s.a.lib.WordArray.create(i.Buffer.concat([i.Buffer.from(e.deviceGroupKey, "utf8"), i.Buffer.from(e.deviceKey, "utf8"), i.Buffer.from(u.SECRET_BLOCK, "base64"), i.Buffer.from(h, "utf8")])),
                                    p = s.a.lib.WordArray.create(o),
                                    g = c.a.stringify(f()(l, p)),
                                    d = {};
                                d.USERNAME = e.username, d.PASSWORD_CLAIM_SECRET_BLOCK = u.SECRET_BLOCK, d.TIMESTAMP = h, d.PASSWORD_CLAIM_SIGNATURE = g, d.DEVICE_KEY = e.deviceKey; var y = { ChallengeName: "DEVICE_PASSWORD_VERIFIER", ClientId: e.pool.getClientId(), ChallengeResponses: d, Session: a.Session };
                                e.getUserContextData() && (y.UserContextData = e.getUserContextData()), e.client.request("RespondToAuthChallenge", y, function(n, r) { return n ? t.onFailure(n) : (e.signInUserSession = e.getCognitoUserSession(r.AuthenticationResult), e.cacheTokens(), t.onSuccess(e.signInUserSession)) }) }) }) }) }, t.prototype.confirmRegistration = function(t, e, n) { var r = { ClientId: this.pool.getClientId(), ConfirmationCode: t, Username: this.username, ForceAliasCreation: e };
                    this.getUserContextData() && (r.UserContextData = this.getUserContextData()), this.client.request("ConfirmSignUp", r, function(t) { return t ? n(t, null) : n(null, "SUCCESS") }) }, t.prototype.sendCustomChallengeAnswer = function(t, e) { var n = this,
                        r = {};
                    r.USERNAME = this.username, r.ANSWER = t; var i = new p.a(this.pool.getUserPoolId().split("_")[1]);
                    this.getCachedDeviceKeyAndPassword(), null != this.deviceKey && (r.DEVICE_KEY = this.deviceKey); var o = { ChallengeName: "CUSTOM_CHALLENGE", ChallengeResponses: r, ClientId: this.pool.getClientId(), Session: this.Session };
                    this.getUserContextData() && (o.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", o, function(t, r) { return t ? e.onFailure(t) : n.authenticateUserInternal(r, i, e) }) }, t.prototype.sendMFACode = function(t, e, n) { var r = this,
                        o = {};
                    o.USERNAME = this.username, o.SMS_MFA_CODE = t; var s = n || "SMS_MFA"; "SOFTWARE_TOKEN_MFA" === s && (o.SOFTWARE_TOKEN_MFA_CODE = t), null != this.deviceKey && (o.DEVICE_KEY = this.deviceKey); var a = { ChallengeName: s, ChallengeResponses: o, ClientId: this.pool.getClientId(), Session: this.Session };
                    this.getUserContextData() && (a.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", a, function(t, n) { if (t) return e.onFailure(t); if ("DEVICE_SRP_AUTH" === n.ChallengeName) return void r.getDeviceResponse(e); if (r.signInUserSession = r.getCognitoUserSession(n.AuthenticationResult), r.cacheTokens(), null == n.AuthenticationResult.NewDeviceMetadata) return e.onSuccess(r.signInUserSession); var o = new p.a(r.pool.getUserPoolId().split("_")[1]);
                        o.generateHashDevice(n.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, n.AuthenticationResult.NewDeviceMetadata.DeviceKey, function(t) { if (t) return e.onFailure(t); var s = { Salt: i.Buffer.from(o.getSaltDevices(), "hex").toString("base64"), PasswordVerifier: i.Buffer.from(o.getVerifierDevices(), "hex").toString("base64") };
                            r.verifierDevices = s.PasswordVerifier, r.deviceGroupKey = n.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey, r.randomPassword = o.getRandomPassword(), r.client.request("ConfirmDevice", { DeviceKey: n.AuthenticationResult.NewDeviceMetadata.DeviceKey, AccessToken: r.signInUserSession.getAccessToken().getJwtToken(), DeviceSecretVerifierConfig: s, DeviceName: navigator.userAgent }, function(t, i) { return t ? e.onFailure(t) : (r.deviceKey = n.AuthenticationResult.NewDeviceMetadata.DeviceKey, r.cacheDeviceKeyAndPassword(), !0 === i.UserConfirmationNecessary ? e.onSuccess(r.signInUserSession, i.UserConfirmationNecessary) : e.onSuccess(r.signInUserSession)) }) }) }) }, t.prototype.changePassword = function(t, e, n) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return n(new Error("User is not authenticated"), null);
                    this.client.request("ChangePassword", { PreviousPassword: t, ProposedPassword: e, AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, function(t) { return t ? n(t, null) : n(null, "SUCCESS") }) }, t.prototype.enableMFA = function(t) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return t(new Error("User is not authenticated"), null); var e = [],
                        n = { DeliveryMedium: "SMS", AttributeName: "phone_number" };
                    e.push(n), this.client.request("SetUserSettings", { MFAOptions: e, AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, function(e) { return e ? t(e, null) : t(null, "SUCCESS") }) }, t.prototype.setUserMfaPreference = function(t, e, n) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return n(new Error("User is not authenticated"), null);
                    this.client.request("SetUserMFAPreference", { SMSMfaSettings: t, SoftwareTokenMfaSettings: e, AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, function(t) { return t ? n(t, null) : n(null, "SUCCESS") }) }, t.prototype.disableMFA = function(t) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return t(new Error("User is not authenticated"), null); var e = [];
                    this.client.request("SetUserSettings", { MFAOptions: e, AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, function(e) { return e ? t(e, null) : t(null, "SUCCESS") }) }, t.prototype.deleteUser = function(t) { var e = this; if (null == this.signInUserSession || !this.signInUserSession.isValid()) return t(new Error("User is not authenticated"), null);
                    this.client.request("DeleteUser", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, function(n) { return n ? t(n, null) : (e.clearCachedUser(), t(null, "SUCCESS")) }) }, t.prototype.updateAttributes = function(t, e) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e(new Error("User is not authenticated"), null);
                    this.client.request("UpdateUserAttributes", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), UserAttributes: t }, function(t) { return t ? e(t, null) : e(null, "SUCCESS") }) }, t.prototype.getUserAttributes = function(t) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return t(new Error("User is not authenticated"), null);
                    this.client.request("GetUser", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, function(e, n) { if (e) return t(e, null); for (var r = [], i = 0; i < n.UserAttributes.length; i++) { var o = { Name: n.UserAttributes[i].Name, Value: n.UserAttributes[i].Value },
                                s = new m.a(o);
                            r.push(s) } return t(null, r) }) }, t.prototype.getMFAOptions = function(t) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return t(new Error("User is not authenticated"), null);
                    this.client.request("GetUser", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, function(e, n) { return e ? t(e, null) : t(null, n.MFAOptions) }) }, t.prototype.getUserData = function(t, e) { var n = this; if (null == this.signInUserSession || !this.signInUserSession.isValid()) return this.clearCachedUserData(), t(new Error("User is not authenticated"), null); var r = !!e && e.bypassCache,
                        i = this.storage.getItem(this.userDataKey); if (!i || r) this.client.request("GetUser", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, function(e, r) { if (e) return t(e, null);
                        n.cacheUserData(r); var i = n.signInUserSession.getRefreshToken(); if (!i || !i.getToken()) return t(null, r);
                        n.refreshSession(i, function(e, n) { return e ? t(e, null) : t(null, r) }) });
                    else try { return t(null, JSON.parse(i)) } catch (e) { return this.clearCachedUserData(), t(e, null) } }, t.prototype.deleteAttributes = function(t, e) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e(new Error("User is not authenticated"), null);
                    this.client.request("DeleteUserAttributes", { UserAttributeNames: t, AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, function(t) { return t ? e(t, null) : e(null, "SUCCESS") }) }, t.prototype.resendConfirmationCode = function(t) { var e = { ClientId: this.pool.getClientId(), Username: this.username };
                    this.client.request("ResendConfirmationCode", e, function(e, n) { return e ? t(e, null) : t(null, n) }) }, t.prototype.getSession = function(t) { if (null == this.username) return t(new Error("Username is null. Cannot retrieve a new session"), null); if (null != this.signInUserSession && this.signInUserSession.isValid()) return t(null, this.signInUserSession); var e = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username,
                        n = e + ".idToken",
                        r = e + ".accessToken",
                        i = e + ".refreshToken",
                        o = e + ".clockDrift"; if (this.storage.getItem(n)) { var s = new d.a({ IdToken: this.storage.getItem(n) }),
                            a = new g.a({ AccessToken: this.storage.getItem(r) }),
                            u = new y.a({ RefreshToken: this.storage.getItem(i) }),
                            c = parseInt(this.storage.getItem(o), 0) || 0,
                            h = { IdToken: s, AccessToken: a, RefreshToken: u, ClockDrift: c },
                            f = new v.a(h); if (f.isValid()) return this.signInUserSession = f, t(null, this.signInUserSession); if (!u.getToken()) return t(new Error("Cannot retrieve a new session. Please authenticate."), null);
                        this.refreshSession(u, t) } else t(new Error("Local storage is missing an ID Token, Please authenticate"), null) }, t.prototype.refreshSession = function(t, e) { var n = this,
                        r = {};
                    r.REFRESH_TOKEN = t.getToken(); var i = "CognitoIdentityServiceProvider." + this.pool.getClientId(),
                        o = i + ".LastAuthUser"; if (this.storage.getItem(o)) { this.username = this.storage.getItem(o); var s = i + "." + this.username + ".deviceKey";
                        this.deviceKey = this.storage.getItem(s), r.DEVICE_KEY = this.deviceKey } var a = { ClientId: this.pool.getClientId(), AuthFlow: "REFRESH_TOKEN_AUTH", AuthParameters: r };
                    this.getUserContextData() && (a.UserContextData = this.getUserContextData()), this.client.request("InitiateAuth", a, function(r, i) { if (r) return "NotAuthorizedException" === r.code && n.clearCachedUser(), e(r, null); if (i) { var o = i.AuthenticationResult; return Object.prototype.hasOwnProperty.call(o, "RefreshToken") || (o.RefreshToken = t.getToken()), n.signInUserSession = n.getCognitoUserSession(o), n.cacheTokens(), e(null, n.signInUserSession) } }) }, t.prototype.cacheTokens = function() { var t = "CognitoIdentityServiceProvider." + this.pool.getClientId(),
                        e = t + "." + this.username + ".idToken",
                        n = t + "." + this.username + ".accessToken",
                        r = t + "." + this.username + ".refreshToken",
                        i = t + "." + this.username + ".clockDrift",
                        o = t + ".LastAuthUser";
                    this.storage.setItem(e, this.signInUserSession.getIdToken().getJwtToken()), this.storage.setItem(n, this.signInUserSession.getAccessToken().getJwtToken()), this.storage.setItem(r, this.signInUserSession.getRefreshToken().getToken()), this.storage.setItem(i, "" + this.signInUserSession.getClockDrift()), this.storage.setItem(o, this.username) }, t.prototype.cacheUserData = function(t) { this.storage.setItem(this.userDataKey, JSON.stringify(t)) }, t.prototype.clearCachedUserData = function() { this.storage.removeItem(this.userDataKey) }, t.prototype.clearCachedUser = function() { this.clearCachedTokens(), this.clearCachedUserData() }, t.prototype.cacheDeviceKeyAndPassword = function() { var t = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username,
                        e = t + ".deviceKey",
                        n = t + ".randomPasswordKey",
                        r = t + ".deviceGroupKey";
                    this.storage.setItem(e, this.deviceKey), this.storage.setItem(n, this.randomPassword), this.storage.setItem(r, this.deviceGroupKey) }, t.prototype.getCachedDeviceKeyAndPassword = function() { var t = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username,
                        e = t + ".deviceKey",
                        n = t + ".randomPasswordKey",
                        r = t + ".deviceGroupKey";
                    this.storage.getItem(e) && (this.deviceKey = this.storage.getItem(e), this.randomPassword = this.storage.getItem(n), this.deviceGroupKey = this.storage.getItem(r)) }, t.prototype.clearCachedDeviceKeyAndPassword = function() { var t = "CognitoIdentityServiceProvider." + this.pool.getClientId() + "." + this.username,
                        e = t + ".deviceKey",
                        n = t + ".randomPasswordKey",
                        r = t + ".deviceGroupKey";
                    this.storage.removeItem(e), this.storage.removeItem(n), this.storage.removeItem(r) }, t.prototype.clearCachedTokens = function() { var t = "CognitoIdentityServiceProvider." + this.pool.getClientId(),
                        e = t + "." + this.username + ".idToken",
                        n = t + "." + this.username + ".accessToken",
                        r = t + "." + this.username + ".refreshToken",
                        i = t + ".LastAuthUser",
                        o = t + "." + this.username + ".clockDrift";
                    this.storage.removeItem(e), this.storage.removeItem(n), this.storage.removeItem(r), this.storage.removeItem(i), this.storage.removeItem(o) }, t.prototype.getCognitoUserSession = function(t) { var e = new d.a(t),
                        n = new g.a(t),
                        r = new y.a(t),
                        i = { IdToken: e, AccessToken: n, RefreshToken: r }; return new v.a(i) }, t.prototype.forgotPassword = function(t) { var e = { ClientId: this.pool.getClientId(), Username: this.username };
                    this.getUserContextData() && (e.UserContextData = this.getUserContextData()), this.client.request("ForgotPassword", e, function(e, n) { return e ? t.onFailure(e) : "function" == typeof t.inputVerificationCode ? t.inputVerificationCode(n) : t.onSuccess(n) }) }, t.prototype.confirmPassword = function(t, e, n) { var r = { ClientId: this.pool.getClientId(), Username: this.username, ConfirmationCode: t, Password: e };
                    this.getUserContextData() && (r.UserContextData = this.getUserContextData()), this.client.request("ConfirmForgotPassword", r, function(t) { return t ? n.onFailure(t) : n.onSuccess() }) }, t.prototype.getAttributeVerificationCode = function(t, e) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e.onFailure(new Error("User is not authenticated"));
                    this.client.request("GetUserAttributeVerificationCode", { AttributeName: t, AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, function(t, n) { return t ? e.onFailure(t) : "function" == typeof e.inputVerificationCode ? e.inputVerificationCode(n) : e.onSuccess() }) }, t.prototype.verifyAttribute = function(t, e, n) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return n.onFailure(new Error("User is not authenticated"));
                    this.client.request("VerifyUserAttribute", { AttributeName: t, Code: e, AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, function(t) { return t ? n.onFailure(t) : n.onSuccess("SUCCESS") }) }, t.prototype.getDevice = function(t) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return t.onFailure(new Error("User is not authenticated"));
                    this.client.request("GetDevice", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), DeviceKey: this.deviceKey }, function(e, n) { return e ? t.onFailure(e) : t.onSuccess(n) }) }, t.prototype.forgetSpecificDevice = function(t, e) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return e.onFailure(new Error("User is not authenticated"));
                    this.client.request("ForgetDevice", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), DeviceKey: t }, function(t) { return t ? e.onFailure(t) : e.onSuccess("SUCCESS") }) }, t.prototype.forgetDevice = function(t) { var e = this;
                    this.forgetSpecificDevice(this.deviceKey, { onFailure: t.onFailure, onSuccess: function(n) { return e.deviceKey = null, e.deviceGroupKey = null, e.randomPassword = null, e.clearCachedDeviceKeyAndPassword(), t.onSuccess(n) } }) }, t.prototype.setDeviceStatusRemembered = function(t) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return t.onFailure(new Error("User is not authenticated"));
                    this.client.request("UpdateDeviceStatus", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), DeviceKey: this.deviceKey, DeviceRememberedStatus: "remembered" }, function(e) { return e ? t.onFailure(e) : t.onSuccess("SUCCESS") }) }, t.prototype.setDeviceStatusNotRemembered = function(t) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return t.onFailure(new Error("User is not authenticated"));
                    this.client.request("UpdateDeviceStatus", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), DeviceKey: this.deviceKey, DeviceRememberedStatus: "not_remembered" }, function(e) { return e ? t.onFailure(e) : t.onSuccess("SUCCESS") }) }, t.prototype.listDevices = function(t, e, n) { if (null == this.signInUserSession || !this.signInUserSession.isValid()) return n.onFailure(new Error("User is not authenticated"));
                    this.client.request("ListDevices", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), Limit: t, PaginationToken: e }, function(t, e) { return t ? n.onFailure(t) : n.onSuccess(e) }) }, t.prototype.globalSignOut = function(t) { var e = this; if (null == this.signInUserSession || !this.signInUserSession.isValid()) return t.onFailure(new Error("User is not authenticated"));
                    this.client.request("GlobalSignOut", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, function(n) { return n ? t.onFailure(n) : (e.clearCachedUser(), t.onSuccess("SUCCESS")) }) }, t.prototype.signOut = function() { this.signInUserSession = null, this.clearCachedUser() }, t.prototype.sendMFASelectionAnswer = function(t, e) { var n = this,
                        r = {};
                    r.USERNAME = this.username, r.ANSWER = t; var i = { ChallengeName: "SELECT_MFA_TYPE", ChallengeResponses: r, ClientId: this.pool.getClientId(), Session: this.Session };
                    this.getUserContextData() && (i.UserContextData = this.getUserContextData()), this.client.request("RespondToAuthChallenge", i, function(r, i) { return r ? e.onFailure(r) : (n.Session = i.Session, "SMS_MFA" === t ? e.mfaRequired(i.challengeName, i.challengeParameters) : "SOFTWARE_TOKEN_MFA" === t ? e.totpRequired(i.challengeName, i.challengeParameters) : void 0) }) }, t.prototype.getUserContextData = function() { return this.pool.getUserContextData(this.username) }, t.prototype.associateSoftwareToken = function(t) { var e = this;
                    null != this.signInUserSession && this.signInUserSession.isValid() ? this.client.request("AssociateSoftwareToken", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken() }, function(e, n) { return e ? t.onFailure(e) : t.associateSecretCode(n.SecretCode) }) : this.client.request("AssociateSoftwareToken", { Session: this.Session }, function(n, r) { return n ? t.onFailure(n) : (e.Session = r.Session, t.associateSecretCode(r.SecretCode)) }) }, t.prototype.verifySoftwareToken = function(t, e, n) { var r = this;
                    null != this.signInUserSession && this.signInUserSession.isValid() ? this.client.request("VerifySoftwareToken", { AccessToken: this.signInUserSession.getAccessToken().getJwtToken(), UserCode: t, FriendlyDeviceName: e }, function(t, e) { return t ? n.onFailure(t) : n.onSuccess(e) }) : this.client.request("VerifySoftwareToken", { Session: this.Session, UserCode: t, FriendlyDeviceName: e }, function(t, e) { if (t) return n.onFailure(t);
                        r.Session = e.Session; var i = {};
                        i.USERNAME = r.username; var o = { ChallengeName: "MFA_SETUP", ClientId: r.pool.getClientId(), ChallengeResponses: i, Session: r.Session };
                        r.getUserContextData() && (o.UserContextData = r.getUserContextData()), r.client.request("RespondToAuthChallenge", o, function(t, e) { return t ? n.onFailure(t) : (r.signInUserSession = r.getCognitoUserSession(e.AuthenticationResult), r.cacheTokens(), n.onSuccess(r.signInUserSession)) }) }) }, t }();
        e.a = w }, function(t, e, n) {
        "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        /*!
         * Copyright 2016 Amazon.com,
         * Inc. or its affiliates. All Rights Reserved.
         *
         * Licensed under the Amazon Software License (the "License").
         * You may not use this file except in compliance with the
         * License. A copy of the License is located at
         *
         *     http://aws.amazon.com/asl/
         *
         * or in the "license" file accompanying this file. This file is
         * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
         * CONDITIONS OF ANY KIND, express or implied. See the License
         * for the specific language governing permissions and
         * limitations under the License.
         */
        var i = function() {
            function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.IdToken,
                    i = e.RefreshToken,
                    o = e.AccessToken,
                    s = e.ClockDrift; if (r(this, t), null == o || null == n) throw new Error("Id token and Access Token must be present.");
                this.idToken = n, this.refreshToken = i, this.accessToken = o, this.clockDrift = void 0 === s ? this.calculateClockDrift() : s } return t.prototype.getIdToken = function() { return this.idToken }, t.prototype.getRefreshToken = function() { return this.refreshToken }, t.prototype.getAccessToken = function() { return this.accessToken }, t.prototype.getClockDrift = function() { return this.clockDrift }, t.prototype.calculateClockDrift = function() { return Math.floor(new Date / 1e3) - Math.min(this.accessToken.getIssuedAt(), this.idToken.getIssuedAt()) }, t.prototype.isValid = function() { var t = Math.floor(new Date / 1e3),
                    e = t - this.clockDrift; return e < this.accessToken.getExpiration() && e < this.idToken.getExpiration() }, t }();
        e.a = i
    }, function(t, e, n) {
        "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        /*!
         * Copyright 2016 Amazon.com,
         * Inc. or its affiliates. All Rights Reserved.
         *
         * Licensed under the Amazon Software License (the "License").
         * You may not use this file except in compliance with the
         * License. A copy of the License is located at
         *
         *     http://aws.amazon.com/asl/
         *
         * or in the "license" file accompanying this file. This file is
         * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
         * CONDITIONS OF ANY KIND, express or implied. See the License
         * for the specific language governing permissions and
         * limitations under the License.
         */
        var i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            o = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            s = function() {
                function t() { r(this, t) } return t.prototype.getNowString = function() { var t = new Date,
                        e = o[t.getUTCDay()],
                        n = i[t.getUTCMonth()],
                        r = t.getUTCDate(),
                        s = t.getUTCHours();
                    s < 10 && (s = "0" + s); var a = t.getUTCMinutes();
                    a < 10 && (a = "0" + a); var u = t.getUTCSeconds(); return u < 10 && (u = "0" + u), e + " " + n + " " + r + " " + s + ":" + a + ":" + u + " UTC " + t.getUTCFullYear() }, t }();
        e.a = s
    }, function(t, e, n) {
        "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        /*!
         * Copyright 2016 Amazon.com,
         * Inc. or its affiliates. All Rights Reserved.
         *
         * Licensed under the Amazon Software License (the "License").
         * You may not use this file except in compliance with the
         * License. A copy of the License is located at
         *
         *     http://aws.amazon.com/asl/
         *
         * or in the "license" file accompanying this file. This file is
         * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
         * CONDITIONS OF ANY KIND, express or implied. See the License
         * for the specific language governing permissions and
         * limitations under the License.
         */
        var i = function() {
            function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.Name,
                    i = e.Value;
                r(this, t), this.Name = n || "", this.Value = i || "" } return t.prototype.getValue = function() { return this.Value }, t.prototype.setValue = function(t) { return this.Value = t, this }, t.prototype.getName = function() { return this.Name }, t.prototype.setName = function(t) { return this.Name = t, this }, t.prototype.toString = function() { return JSON.stringify(this) }, t.prototype.toJSON = function() { return { Name: this.Name, Value: this.Value } }, t }();
        e.a = i
    }, function(t, e, n) {
        "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        /*!
         * Copyright 2016 Amazon.com,
         * Inc. or its affiliates. All Rights Reserved.
         *
         * Licensed under the Amazon Software License (the "License").
         * You may not use this file except in compliance with the
         * License. A copy of the License is located at
         *
         *     http://aws.amazon.com/asl/
         *
         * or in the "license" file accompanying this file. This file is
         * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
         * CONDITIONS OF ANY KIND, express or implied. See the License
         * for the specific language governing permissions and
         * limitations under the License.
         */
        var i = {},
            o = function() {
                function t() { r(this, t) } return t.setItem = function(t, e) { return i[t] = e, i[t] }, t.getItem = function(t) { return Object.prototype.hasOwnProperty.call(i, t) ? i[t] : void 0 }, t.removeItem = function(t) { return delete i[t] }, t.clear = function() { return i = {} }, t }(),
            s = function() {
                function t() { r(this, t); try { this.storageWindow = window.localStorage, this.storageWindow.setItem("aws.cognito.test-ls", 1), this.storageWindow.removeItem("aws.cognito.test-ls") } catch (t) { this.storageWindow = o } } return t.prototype.getStorage = function() { return this.storageWindow }, t }();
        e.a = s
    }, function(t, e, n) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(17);
        n.d(e, "AuthenticationDetails", function() { return r.a }); var i = n(2);
        n.d(e, "AuthenticationHelper", function() { return i.a }); var o = n(7);
        n.d(e, "CognitoAccessToken", function() { return o.a }); var s = n(9);
        n.d(e, "CognitoIdToken", function() { return s.a }); var a = n(10);
        n.d(e, "CognitoRefreshToken", function() { return a.a }); var u = n(11);
        n.d(e, "CognitoUser", function() { return u.a }); var c = n(14);
        n.d(e, "CognitoUserAttribute", function() { return c.a }); var h = n(24);
        n.d(e, "CognitoUserPool", function() { return h.a }); var f = n(12);
        n.d(e, "CognitoUserSession", function() { return f.a }); var l = n(27);
        n.d(e, "CookieStorage", function() { return l.a }); var p = n(13);
        n.d(e, "DateHelper", function() { return p.a }) }, function(t, e, n) {
        "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        /*!
         * Copyright 2016 Amazon.com,
         * Inc. or its affiliates. All Rights Reserved.
         *
         * Licensed under the Amazon Software License (the "License").
         * You may not use this file except in compliance with the
         * License. A copy of the License is located at
         *
         *     http://aws.amazon.com/asl/
         *
         * or in the "license" file accompanying this file. This file is
         * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
         * CONDITIONS OF ANY KIND, express or implied. See the License
         * for the specific language governing permissions and
         * limitations under the License.
         */
        var i = function() {
            function t(e) { r(this, t); var n = e || {},
                    i = n.ValidationData,
                    o = n.Username,
                    s = n.Password,
                    a = n.AuthParameters;
                this.validationData = i || {}, this.authParameters = a || {}, this.username = o, this.password = s } return t.prototype.getUsername = function() { return this.username }, t.prototype.getPassword = function() { return this.password }, t.prototype.getValidationData = function() { return this.validationData }, t.prototype.getAuthParameters = function() { return this.authParameters }, t }();
        e.a = i
    }, function(t, e) { var n;
        n = function() { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (n = window) }
        t.exports = n }, function(t, e, n) { "use strict";

        function r(t) { var e = t.length; if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var n = t.indexOf("="); return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4] }

        function i(t) { var e = r(t),
                n = e[0],
                i = e[1]; return 3 * (n + i) / 4 - i }

        function o(t, e, n) { return 3 * (e + n) / 4 - n }

        function s(t) { for (var e, n = r(t), i = n[0], s = n[1], a = new l(o(t, i, s)), u = 0, c = s > 0 ? i - 4 : i, h = 0; h < c; h += 4) e = f[t.charCodeAt(h)] << 18 | f[t.charCodeAt(h + 1)] << 12 | f[t.charCodeAt(h + 2)] << 6 | f[t.charCodeAt(h + 3)], a[u++] = e >> 16 & 255, a[u++] = e >> 8 & 255, a[u++] = 255 & e; return 2 === s && (e = f[t.charCodeAt(h)] << 2 | f[t.charCodeAt(h + 1)] >> 4, a[u++] = 255 & e), 1 === s && (e = f[t.charCodeAt(h)] << 10 | f[t.charCodeAt(h + 1)] << 4 | f[t.charCodeAt(h + 2)] >> 2, a[u++] = e >> 8 & 255, a[u++] = 255 & e), a }

        function a(t) { return h[t >> 18 & 63] + h[t >> 12 & 63] + h[t >> 6 & 63] + h[63 & t] }

        function u(t, e, n) { for (var r, i = [], o = e; o < n; o += 3) r = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), i.push(a(r)); return i.join("") }

        function c(t) { for (var e, n = t.length, r = n % 3, i = [], o = 0, s = n - r; o < s; o += 16383) i.push(u(t, o, o + 16383 > s ? s : o + 16383)); return 1 === r ? (e = t[n - 1], i.push(h[e >> 2] + h[e << 4 & 63] + "==")) : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], i.push(h[e >> 10] + h[e >> 4 & 63] + h[e << 2 & 63] + "=")), i.join("") }
        e.byteLength = i, e.toByteArray = s, e.fromByteArray = c; for (var h = [], f = [], l = "undefined" != typeof Uint8Array ? Uint8Array : Array, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", g = 0, d = p.length; g < d; ++g) h[g] = p[g], f[p.charCodeAt(g)] = g;
        f["-".charCodeAt(0)] = 62, f["_".charCodeAt(0)] = 63 }, function(t, e) { e.read = function(t, e, n, r, i) { var o, s, a = 8 * i - r - 1,
                u = (1 << a) - 1,
                c = u >> 1,
                h = -7,
                f = n ? i - 1 : 0,
                l = n ? -1 : 1,
                p = t[e + f]; for (f += l, o = p & (1 << -h) - 1, p >>= -h, h += a; h > 0; o = 256 * o + t[e + f], f += l, h -= 8); for (s = o & (1 << -h) - 1, o >>= -h, h += r; h > 0; s = 256 * s + t[e + f], f += l, h -= 8); if (0 === o) o = 1 - c;
            else { if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                s += Math.pow(2, r), o -= c } return (p ? -1 : 1) * s * Math.pow(2, o - r) }, e.write = function(t, e, n, r, i, o) { var s, a, u, c = 8 * o - i - 1,
                h = (1 << c) - 1,
                f = h >> 1,
                l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = r ? 0 : o - 1,
                g = r ? 1 : -1,
                d = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0; for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = h) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), e += s + f >= 1 ? l / u : l * Math.pow(2, 1 - f), e * u >= 2 && (s++, u /= 2), s + f >= h ? (a = 0, s = h) : s + f >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; t[n + p] = 255 & a, p += g, a /= 256, i -= 8); for (s = s << i | a, c += i; c > 0; t[n + p] = 255 & s, p += g, s /= 256, c -= 8);
            t[n + p - g] |= 128 * d } }, function(t, e) { var n = {}.toString;
        t.exports = Array.isArray || function(t) { return "[object Array]" == n.call(t) } }, function(t, e, n) {! function(r, i) { t.exports = e = i(n(0)) }(0, function(t) {! function() { var e = t,
                    n = e.lib,
                    r = n.Base,
                    i = e.enc,
                    o = i.Utf8,
                    s = e.algo;
                s.HMAC = r.extend({ init: function(t, e) { t = this._hasher = new t.init, "string" == typeof e && (e = o.parse(e)); var n = t.blockSize,
                            r = 4 * n;
                        e.sigBytes > r && (e = t.finalize(e)), e.clamp(); for (var i = this._oKey = e.clone(), s = this._iKey = e.clone(), a = i.words, u = s.words, c = 0; c < n; c++) a[c] ^= 1549556828, u[c] ^= 909522486;
                        i.sigBytes = s.sigBytes = r, this.reset() }, reset: function() { var t = this._hasher;
                        t.reset(), t.update(this._iKey) }, update: function(t) { return this._hasher.update(t), this }, finalize: function(t) { var e = this._hasher,
                            n = e.finalize(t); return e.reset(), e.finalize(this._oKey.clone().concat(n)) } }) }() }) }, function(t, e, n) {! function(r, i) { t.exports = e = i(n(0)) }(0, function(t) { return function() {
                function e(t, e, n) { for (var r = [], o = 0, s = 0; s < e; s++)
                        if (s % 4) { var a = n[t.charCodeAt(s - 1)] << s % 4 * 2,
                                u = n[t.charCodeAt(s)] >>> 6 - s % 4 * 2;
                            r[o >>> 2] |= (a | u) << 24 - o % 4 * 8, o++ }
                    return i.create(r, o) } var n = t,
                    r = n.lib,
                    i = r.WordArray,
                    o = n.enc;
                o.Base64 = { stringify: function(t) { var e = t.words,
                            n = t.sigBytes,
                            r = this._map;
                        t.clamp(); for (var i = [], o = 0; o < n; o += 3)
                            for (var s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255, a = e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, u = e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, c = s << 16 | a << 8 | u, h = 0; h < 4 && o + .75 * h < n; h++) i.push(r.charAt(c >>> 6 * (3 - h) & 63)); var f = r.charAt(64); if (f)
                            for (; i.length % 4;) i.push(f); return i.join("") }, parse: function(t) { var n = t.length,
                            r = this._map,
                            i = this._reverseMap; if (!i) { i = this._reverseMap = []; for (var o = 0; o < r.length; o++) i[r.charCodeAt(o)] = o } var s = r.charAt(64); if (s) { var a = t.indexOf(s); - 1 !== a && (n = a) } return e(t, n, i) }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" } }(), t.enc.Base64 }) }, function(t, e, n) { "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } var i = n(25),
            o = n(11),
            s = n(15),
            a = function() {
                function t(e) { r(this, t); var n = e || {},
                        o = n.UserPoolId,
                        a = n.ClientId,
                        u = n.endpoint,
                        c = n.AdvancedSecurityDataCollectionFlag; if (!o || !a) throw new Error("Both UserPoolId and ClientId are required."); if (!/^[\w-]+_.+$/.test(o)) throw new Error("Invalid UserPoolId format."); var h = o.split("_")[0];
                    this.userPoolId = o, this.clientId = a, this.client = new i.a(h, u), this.advancedSecurityDataCollectionFlag = !1 !== c, this.storage = e.Storage || (new s.a).getStorage() } return t.prototype.getUserPoolId = function() { return this.userPoolId }, t.prototype.getClientId = function() { return this.clientId }, t.prototype.signUp = function(t, e, n, r, i) { var s = this,
                        a = { ClientId: this.clientId, Username: t, Password: e, UserAttributes: n, ValidationData: r };
                    this.getUserContextData(t) && (a.UserContextData = this.getUserContextData(t)), this.client.request("SignUp", a, function(e, n) { if (e) return i(e, null); var r = { Username: t, Pool: s, Storage: s.storage },
                            a = { user: new o.a(r), userConfirmed: n.UserConfirmed, userSub: n.UserSub, codeDeliveryDetails: n.CodeDeliveryDetails }; return i(null, a) }) }, t.prototype.getCurrentUser = function() { var t = "CognitoIdentityServiceProvider." + this.clientId + ".LastAuthUser",
                        e = this.storage.getItem(t); if (e) { var n = { Username: e, Pool: this, Storage: this.storage }; return new o.a(n) } return null }, t.prototype.getUserContextData = function(t) { if ("undefined" != typeof AmazonCognitoAdvancedSecurityData) { var e = AmazonCognitoAdvancedSecurityData; if (this.advancedSecurityDataCollectionFlag) { var n = e.getData(t, this.userPoolId, this.clientId); if (n) { return { EncodedData: n } } } return {} } }, t }();
        e.a = a }, function(t, e, n) { "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } var i = n(26),
            o = function() {
                function t(e, n) { r(this, t), this.endpoint = n || "https://cognito-idp." + e + ".amazonaws.com/", this.userAgent = i.a.prototype.userAgent || "aws-amplify/0.1.x js" } return t.prototype.request = function(t, e, n) { var r = { "Content-Type": "application/x-amz-json-1.1", "X-Amz-Target": "AWSCognitoIdentityProviderService." + t, "X-Amz-User-Agent": this.userAgent },
                        i = { headers: r, method: "POST", mode: "cors", cache: "no-cache", body: JSON.stringify(e) },
                        o = void 0,
                        s = void 0;
                    fetch(this.endpoint, i).then(function(t) { return o = t, t }, function(t) { if (t instanceof TypeError) throw new Error("Network error"); throw t }).then(function(t) { return t.json().catch(function() { return {} }) }).then(function(t) { if (o.ok) return n(null, t);
                        s = t; var e = (t.__type || t.code).split("#").pop(),
                            r = { code: e, name: e, message: t.message || t.Message || null }; return n(r) }).catch(function(t) { if (!(o && o.headers && o.headers.get("x-amzn-errortype"))) { if (t instanceof Error && "Network error" === t.message) { var e = { code: "NetworkError", name: t.name, message: t.message }; return n(e) } return n(t) } try { var r = o.headers.get("x-amzn-errortype").split(":")[0],
                                i = { code: r, name: r, statusCode: o.status, message: o.status ? o.status.toString() : null }; return n(i) } catch (e) { return n(t) } }) }, t }();
        e.a = o }, function(t, e, n) { "use strict";

        function r() {}
        e.a = r, r.prototype.userAgent = "aws-amplify/0.1.x js" }, function(t, e, n) { "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } var i = n(28),
            o = (n.n(i), function() {
                function t(e) { if (r(this, t), !e.domain) throw new Error("The domain of cookieStorage can not be undefined.");
                    this.domain = e.domain, e.path ? this.path = e.path : this.path = "/", Object.prototype.hasOwnProperty.call(e, "expires") ? this.expires = e.expires : this.expires = 365, Object.prototype.hasOwnProperty.call(e, "secure") ? this.secure = e.secure : this.secure = !0 } return t.prototype.setItem = function(t, e) { return i.set(t, e, { path: this.path, expires: this.expires, domain: this.domain, secure: this.secure }), i.get(t) }, t.prototype.getItem = function(t) { return i.get(t) }, t.prototype.removeItem = function(t) { return i.remove(t, { path: this.path, domain: this.domain, secure: this.secure }) }, t.prototype.clear = function() { var t = i.get(),
                        e = void 0; for (e = 0; e < t.length; ++e) i.remove(t[e]); return {} }, t }());
        e.a = o }, function(t, e, n) { var r, i;! function(o) { var s = !1; if (r = o, void 0 !== (i = "function" == typeof r ? r.call(e, n, e, t) : r) && (t.exports = i), s = !0, t.exports = o(), s = !0, !s) { var a = window.Cookies,
                    u = window.Cookies = o();
                u.noConflict = function() { return window.Cookies = a, u } } }(function() {
            function t() { for (var t = 0, e = {}; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) e[r] = n[r] } return e }

            function e(n) {
                function r(e, i, o) { var s; if ("undefined" != typeof document) { if (arguments.length > 1) { if (o = t({ path: "/" }, r.defaults, o), "number" == typeof o.expires) { var a = new Date;
                                a.setMilliseconds(a.getMilliseconds() + 864e5 * o.expires), o.expires = a }
                            o.expires = o.expires ? o.expires.toUTCString() : ""; try { s = JSON.stringify(i), /^[\{\[]/.test(s) && (i = s) } catch (t) {}
                            i = n.write ? n.write(i, e) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)), e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), e = e.replace(/[\(\)]/g, escape); var u = ""; for (var c in o) o[c] && (u += "; " + c, !0 !== o[c] && (u += "=" + o[c])); return document.cookie = e + "=" + i + u }
                        e || (s = {}); for (var h = document.cookie ? document.cookie.split("; ") : [], f = /(%[0-9A-Z]{2})+/g, l = 0; l < h.length; l++) { var p = h[l].split("="),
                                g = p.slice(1).join("=");
                            this.json || '"' !== g.charAt(0) || (g = g.slice(1, -1)); try { var d = p[0].replace(f, decodeURIComponent); if (g = n.read ? n.read(g, d) : n(g, d) || g.replace(f, decodeURIComponent), this.json) try { g = JSON.parse(g) } catch (t) {}
                                if (e === d) { s = g; break }
                                e || (s[d] = g) } catch (t) {} } return s } } return r.set = r, r.get = function(t) { return r.call(r, t) }, r.getJSON = function() { return r.apply({ json: !0 }, [].slice.call(arguments)) }, r.defaults = {}, r.remove = function(e, n) { r(e, "", t(n, { expires: -1 })) }, r.withConverter = e, r } return e(function() {}) }) }])
});
