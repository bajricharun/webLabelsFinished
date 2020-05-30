/*! JsBarcode v3.11.0 | (c) Johan Lindell | MIT license */
!(function (t) {
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  var n = {};
  (e.m = t),
    (e.c = n),
    (e.i = function (t) {
      return t;
    }),
    (e.d = function (t, n, r) {
      e.o(t, n) ||
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ""),
    e((e.s = 20));
})([
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = function t(e, n) {
      r(this, t),
        (this.data = e),
        (this.text = n.text || e),
        (this.options = n);
    };
    e.default = o;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o,
      i = (e.SET_A = 0),
      u = (e.SET_B = 1),
      a = (e.SET_C = 2),
      f = ((e.SHIFT = 98), (e.START_A = 103)),
      c = (e.START_B = 104),
      s = (e.START_C = 105);
    (e.MODULO = 103),
      (e.STOP = 106),
      (e.FNC1 = 207),
      (e.SET_BY_CODE = ((o = {}), r(o, f, i), r(o, c, u), r(o, s, a), o)),
      (e.SWAP = { 101: i, 100: u, 99: a }),
      (e.A_START_CHAR = String.fromCharCode(208)),
      (e.B_START_CHAR = String.fromCharCode(209)),
      (e.C_START_CHAR = String.fromCharCode(210)),
      (e.A_CHARS = "[\0-_È-Ï]"),
      (e.B_CHARS = "[ -È-Ï]"),
      (e.C_CHARS = "(Ï*[0-9]{2}Ï*)"),
      (e.BARS = [
        11011001100,
        11001101100,
        11001100110,
        10010011e3,
        10010001100,
        10001001100,
        10011001e3,
        10011000100,
        10001100100,
        11001001e3,
        11001000100,
        11000100100,
        10110011100,
        10011011100,
        10011001110,
        10111001100,
        10011101100,
        10011100110,
        11001110010,
        11001011100,
        11001001110,
        11011100100,
        11001110100,
        11101101110,
        11101001100,
        11100101100,
        11100100110,
        11101100100,
        11100110100,
        11100110010,
        11011011e3,
        11011000110,
        11000110110,
        10100011e3,
        10001011e3,
        10001000110,
        10110001e3,
        10001101e3,
        10001100010,
        11010001e3,
        11000101e3,
        11000100010,
        10110111e3,
        10110001110,
        10001101110,
        10111011e3,
        10111000110,
        10001110110,
        11101110110,
        11010001110,
        11000101110,
        11011101e3,
        11011100010,
        11011101110,
        11101011e3,
        11101000110,
        11100010110,
        11101101e3,
        11101100010,
        11100011010,
        11101111010,
        11001000010,
        11110001010,
        1010011e4,
        10100001100,
        1001011e4,
        10010000110,
        10000101100,
        10000100110,
        1011001e4,
        10110000100,
        1001101e4,
        10011000010,
        10000110100,
        10000110010,
        11000010010,
        1100101e4,
        11110111010,
        11000010100,
        10001111010,
        10100111100,
        10010111100,
        10010011110,
        10111100100,
        10011110100,
        10011110010,
        11110100100,
        11110010100,
        11110010010,
        11011011110,
        11011110110,
        11110110110,
        10101111e3,
        10100011110,
        10001011110,
        10111101e3,
        10111100010,
        11110101e3,
        11110100010,
        10111011110,
        10111101110,
        11101011110,
        11110101110,
        11010000100,
        1101001e4,
        11010011100,
        1100011101011,
      ]);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    (e.SIDE_BIN = "101"),
      (e.MIDDLE_BIN = "01010"),
      (e.BINARIES = {
        L: [
          "0001101",
          "0011001",
          "0010011",
          "0111101",
          "0100011",
          "0110001",
          "0101111",
          "0111011",
          "0110111",
          "0001011",
        ],
        G: [
          "0100111",
          "0110011",
          "0011011",
          "0100001",
          "0011101",
          "0111001",
          "0000101",
          "0010001",
          "0001001",
          "0010111",
        ],
        R: [
          "1110010",
          "1100110",
          "1101100",
          "1000010",
          "1011100",
          "1001110",
          "1010000",
          "1000100",
          "1001000",
          "1110100",
        ],
        O: [
          "0001101",
          "0011001",
          "0010011",
          "0111101",
          "0100011",
          "0110001",
          "0101111",
          "0111011",
          "0110111",
          "0001011",
        ],
        E: [
          "0100111",
          "0110011",
          "0011011",
          "0100001",
          "0011101",
          "0111001",
          "0000101",
          "0010001",
          "0001001",
          "0010111",
        ],
      }),
      (e.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"]),
      (e.EAN5_STRUCTURE = [
        "GGLLL",
        "GLGLL",
        "GLLGL",
        "GLLLG",
        "LGGLL",
        "LLGGL",
        "LLLGG",
        "LGLGL",
        "LGLLG",
        "LLGLG",
      ]),
      (e.EAN13_STRUCTURE = [
        "LLLLLL",
        "LLGLGG",
        "LLGGLG",
        "LLGGGL",
        "LGLLGG",
        "LGGLLG",
        "LGGGLL",
        "LGLGLG",
        "LGLGGL",
        "LGGLGL",
      ]);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(2),
      o = function (t, e, n) {
        var o = t
          .split("")
          .map(function (t, n) {
            return r.BINARIES[e[n]];
          })
          .map(function (e, n) {
            return e ? e[t[n]] : "";
          });
        if (n) {
          var i = t.length - 1;
          o = o.map(function (t, e) {
            return e < i ? t + n : t;
          });
        }
        return o.join("");
      };
    e.default = o;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    function u(t, e) {
      for (var n = 0; n < e; n++) t = "0" + t;
      return t;
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      f = n(0),
      c = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(f),
      s = (function (t) {
        function e(t, n) {
          return (
            r(this, e),
            o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
          );
        }
        return (
          i(e, t),
          a(e, [
            {
              key: "encode",
              value: function () {
                for (var t = "110", e = 0; e < this.data.length; e++) {
                  var n = parseInt(this.data[e]),
                    r = n.toString(2);
                  r = u(r, 4 - r.length);
                  for (var o = 0; o < r.length; o++)
                    t += "0" == r[o] ? "100" : "110";
                }
                return (t += "1001"), { data: t, text: this.text };
              },
            },
            {
              key: "valid",
              value: function () {
                return -1 !== this.data.search(/^[0-9]+$/);
              },
            },
          ]),
          e
        );
      })(c.default);
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
        return t;
      };
    e.default = function (t, e) {
      return r({}, t, e);
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      a = n(0),
      f = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(a),
      c = n(1),
      s = (function (t) {
        function e(t, n) {
          r(this, e);
          var i = o(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(
              this,
              t.substring(1),
              n
            )
          );
          return (
            (i.bytes = t.split("").map(function (t) {
              return t.charCodeAt(0);
            })),
            i
          );
        }
        return (
          i(e, t),
          u(
            e,
            [
              {
                key: "valid",
                value: function () {
                  return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
                },
              },
              {
                key: "encode",
                value: function () {
                  var t = this.bytes,
                    n = t.shift() - 105,
                    r = c.SET_BY_CODE[n];
                  if (void 0 === r)
                    throw new RangeError(
                      "The encoding does not start with a start character."
                    );
                  !0 === this.shouldEncodeAsEan128() && t.unshift(c.FNC1);
                  var o = e.next(t, 1, r);
                  return {
                    text:
                      this.text === this.data
                        ? this.text.replace(/[^\x20-\x7E]/g, "")
                        : this.text,
                    data:
                      e.getBar(n) +
                      o.result +
                      e.getBar((o.checksum + n) % c.MODULO) +
                      e.getBar(c.STOP),
                  };
                },
              },
              {
                key: "shouldEncodeAsEan128",
                value: function () {
                  var t = this.options.ean128 || !1;
                  return (
                    "string" == typeof t && (t = "true" === t.toLowerCase()), t
                  );
                },
              },
            ],
            [
              {
                key: "getBar",
                value: function (t) {
                  return c.BARS[t] ? c.BARS[t].toString() : "";
                },
              },
              {
                key: "correctIndex",
                value: function (t, e) {
                  if (e === c.SET_A) {
                    var n = t.shift();
                    return n < 32 ? n + 64 : n - 32;
                  }
                  return e === c.SET_B
                    ? t.shift() - 32
                    : 10 * (t.shift() - 48) + t.shift() - 48;
                },
              },
              {
                key: "next",
                value: function (t, n, r) {
                  if (!t.length) return { result: "", checksum: 0 };
                  var o = void 0,
                    i = void 0;
                  if (t[0] >= 200) {
                    i = t.shift() - 105;
                    var u = c.SWAP[i];
                    void 0 !== u
                      ? (o = e.next(t, n + 1, u))
                      : ((r !== c.SET_A && r !== c.SET_B) ||
                          i !== c.SHIFT ||
                          (t[0] =
                            r === c.SET_A
                              ? t[0] > 95
                                ? t[0] - 96
                                : t[0]
                              : t[0] < 32
                              ? t[0] + 96
                              : t[0]),
                        (o = e.next(t, n + 1, r)));
                  } else (i = e.correctIndex(t, r)), (o = e.next(t, n + 1, r));
                  var a = e.getBar(i),
                    f = i * n;
                  return { result: a + o.result, checksum: f + o.checksum };
                },
              },
            ]
          ),
          e
        );
      })(f.default);
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      for (var e = 0, n = 0; n < t.length; n++) {
        var r = parseInt(t[n]);
        (n + t.length) % 2 == 0
          ? (e += r)
          : (e += ((2 * r) % 10) + Math.floor((2 * r) / 10));
      }
      return (10 - (e % 10)) % 10;
    }
    function o(t) {
      for (var e = 0, n = [2, 3, 4, 5, 6, 7], r = 0; r < t.length; r++) {
        e += n[r % n.length] * parseInt(t[t.length - 1 - r]);
      }
      return (11 - (e % 11)) % 11;
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.mod10 = r),
      (e.mod11 = o);
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = (function (t) {
        function e(t, n) {
          r(this, e);
          var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return (
            (i.name = "InvalidInputException"),
            (i.symbology = t),
            (i.input = n),
            (i.message =
              '"' + i.input + '" is not a valid input for ' + i.symbology),
            i
          );
        }
        return i(e, t), e;
      })(Error),
      a = (function (t) {
        function e() {
          r(this, e);
          var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return (
            (t.name = "InvalidElementException"),
            (t.message = "Not supported type to render on"),
            t
          );
        }
        return i(e, t), e;
      })(Error),
      f = (function (t) {
        function e() {
          r(this, e);
          var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
          return (
            (t.name = "NoElementException"),
            (t.message = "No element to render on."),
            t
          );
        }
        return i(e, t), e;
      })(Error);
    (e.InvalidInputException = u),
      (e.InvalidElementException = a),
      (e.NoElementException = f);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      var e = [
        "width",
        "height",
        "textMargin",
        "fontSize",
        "margin",
        "marginTop",
        "marginBottom",
        "marginLeft",
        "marginRight",
      ];
      for (var n in e)
        e.hasOwnProperty(n) &&
          ((n = e[n]), "string" == typeof t[n] && (t[n] = parseInt(t[n], 10)));
      return (
        "string" == typeof t.displayValue &&
          (t.displayValue = "false" != t.displayValue),
        t
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = {
      width: 2,
      height: 100,
      format: "auto",
      displayValue: !0,
      fontOptions: "",
      font: "monospace",
      text: void 0,
      textAlign: "center",
      textPosition: "bottom",
      textMargin: 2,
      fontSize: 20,
      background: "#ffffff",
      lineColor: "#000000",
      margin: 10,
      marginTop: void 0,
      marginBottom: void 0,
      marginLeft: void 0,
      marginRight: void 0,
      valid: function () {},
    };
    e.default = r;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function u(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      f = n(2),
      c = n(3),
      s = r(c),
      l = n(0),
      p = r(l),
      d = (function (t) {
        function e(t, n) {
          o(this, e);
          var r = i(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
          );
          return (
            (r.fontSize =
              !n.flat && n.fontSize > 10 * n.width ? 10 * n.width : n.fontSize),
            (r.guardHeight = n.height + r.fontSize / 2 + n.textMargin),
            r
          );
        }
        return (
          u(e, t),
          a(e, [
            {
              key: "encode",
              value: function () {
                return this.options.flat
                  ? this.encodeFlat()
                  : this.encodeGuarded();
              },
            },
            {
              key: "leftText",
              value: function (t, e) {
                return this.text.substr(t, e);
              },
            },
            {
              key: "leftEncode",
              value: function (t, e) {
                return (0, s.default)(t, e);
              },
            },
            {
              key: "rightText",
              value: function (t, e) {
                return this.text.substr(t, e);
              },
            },
            {
              key: "rightEncode",
              value: function (t, e) {
                return (0, s.default)(t, e);
              },
            },
            {
              key: "encodeGuarded",
              value: function () {
                var t = { fontSize: this.fontSize },
                  e = { height: this.guardHeight };
                return [
                  { data: f.SIDE_BIN, options: e },
                  {
                    data: this.leftEncode(),
                    text: this.leftText(),
                    options: t,
                  },
                  { data: f.MIDDLE_BIN, options: e },
                  {
                    data: this.rightEncode(),
                    text: this.rightText(),
                    options: t,
                  },
                  { data: f.SIDE_BIN, options: e },
                ];
              },
            },
            {
              key: "encodeFlat",
              value: function () {
                return {
                  data: [
                    f.SIDE_BIN,
                    this.leftEncode(),
                    f.MIDDLE_BIN,
                    this.rightEncode(),
                    f.SIDE_BIN,
                  ].join(""),
                  text: this.text,
                };
              },
            },
          ]),
          e
        );
      })(p.default);
    e.default = d;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function u(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    function a(t) {
      var e,
        n = 0;
      for (e = 1; e < 11; e += 2) n += parseInt(t[e]);
      for (e = 0; e < 11; e += 2) n += 3 * parseInt(t[e]);
      return (10 - (n % 10)) % 10;
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var f = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    })();
    e.checksum = a;
    var c = n(3),
      s = r(c),
      l = n(0),
      p = r(l),
      d = (function (t) {
        function e(t, n) {
          o(this, e), -1 !== t.search(/^[0-9]{11}$/) && (t += a(t));
          var r = i(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
          );
          return (
            (r.displayValue = n.displayValue),
            n.fontSize > 10 * n.width
              ? (r.fontSize = 10 * n.width)
              : (r.fontSize = n.fontSize),
            (r.guardHeight = n.height + r.fontSize / 2 + n.textMargin),
            r
          );
        }
        return (
          u(e, t),
          f(e, [
            {
              key: "valid",
              value: function () {
                return (
                  -1 !== this.data.search(/^[0-9]{12}$/) &&
                  this.data[11] == a(this.data)
                );
              },
            },
            {
              key: "encode",
              value: function () {
                return this.options.flat
                  ? this.flatEncoding()
                  : this.guardedEncoding();
              },
            },
            {
              key: "flatEncoding",
              value: function () {
                var t = "";
                return (
                  (t += "101"),
                  (t += (0, s.default)(this.data.substr(0, 6), "LLLLLL")),
                  (t += "01010"),
                  (t += (0, s.default)(this.data.substr(6, 6), "RRRRRR")),
                  (t += "101"),
                  { data: t, text: this.text }
                );
              },
            },
            {
              key: "guardedEncoding",
              value: function () {
                var t = [];
                return (
                  this.displayValue &&
                    t.push({
                      data: "00000000",
                      text: this.text.substr(0, 1),
                      options: { textAlign: "left", fontSize: this.fontSize },
                    }),
                  t.push({
                    data: "101" + (0, s.default)(this.data[0], "L"),
                    options: { height: this.guardHeight },
                  }),
                  t.push({
                    data: (0, s.default)(this.data.substr(1, 5), "LLLLL"),
                    text: this.text.substr(1, 5),
                    options: { fontSize: this.fontSize },
                  }),
                  t.push({
                    data: "01010",
                    options: { height: this.guardHeight },
                  }),
                  t.push({
                    data: (0, s.default)(this.data.substr(6, 5), "RRRRR"),
                    text: this.text.substr(6, 5),
                    options: { fontSize: this.fontSize },
                  }),
                  t.push({
                    data: (0, s.default)(this.data[11], "R") + "101",
                    options: { height: this.guardHeight },
                  }),
                  this.displayValue &&
                    t.push({
                      data: "00000000",
                      text: this.text.substr(11, 1),
                      options: { textAlign: "right", fontSize: this.fontSize },
                    }),
                  t
                );
              },
            },
          ]),
          e
        );
      })(p.default);
    e.default = d;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      a = n(36),
      f = n(0),
      c = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(f),
      s = (function (t) {
        function e() {
          return (
            r(this, e),
            o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
            )
          );
        }
        return (
          i(e, t),
          u(e, [
            {
              key: "valid",
              value: function () {
                return -1 !== this.data.search(/^([0-9]{2})+$/);
              },
            },
            {
              key: "encode",
              value: function () {
                var t = this,
                  e = this.data
                    .match(/.{2}/g)
                    .map(function (e) {
                      return t.encodePair(e);
                    })
                    .join("");
                return { data: a.START_BIN + e + a.END_BIN, text: this.text };
              },
            },
            {
              key: "encodePair",
              value: function (t) {
                var e = a.BINARIES[t[1]];
                return a.BINARIES[t[0]]
                  .split("")
                  .map(function (t, n) {
                    return (
                      ("1" === t ? "111" : "1") + ("1" === e[n] ? "000" : "0")
                    );
                  })
                  .join("");
              },
            },
          ]),
          e
        );
      })(c.default);
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      return (
        e.height +
        (e.displayValue && t.text.length > 0 ? e.fontSize + e.textMargin : 0) +
        e.marginTop +
        e.marginBottom
      );
    }
    function o(t, e, n) {
      if (n.displayValue && e < t) {
        if ("center" == n.textAlign) return Math.floor((t - e) / 2);
        if ("left" == n.textAlign) return 0;
        if ("right" == n.textAlign) return Math.floor(t - e);
      }
      return 0;
    }
    function i(t, e, n) {
      for (var i = 0; i < t.length; i++) {
        var u,
          a = t[i],
          c = (0, s.default)(e, a.options);
        u = c.displayValue ? f(a.text, c, n) : 0;
        var l = a.data.length * c.width;
        (a.width = Math.ceil(Math.max(u, l))),
          (a.height = r(a, c)),
          (a.barcodePadding = o(u, l, c));
      }
    }
    function u(t) {
      for (var e = 0, n = 0; n < t.length; n++) e += t[n].width;
      return e;
    }
    function a(t) {
      for (var e = 0, n = 0; n < t.length; n++)
        t[n].height > e && (e = t[n].height);
      return e;
    }
    function f(t, e, n) {
      var r;
      if (n) r = n;
      else {
        if ("undefined" == typeof document) return 0;
        r = document.createElement("canvas").getContext("2d");
      }
      return (
        (r.font = e.fontOptions + " " + e.fontSize + "px " + e.font),
        r.measureText(t).width
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getTotalWidthOfEncodings = e.calculateEncodingAttributes = e.getBarcodePadding = e.getEncodingHeight = e.getMaximumHeightOfEncodings = void 0);
    var c = n(5),
      s = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(c);
    (e.getMaximumHeightOfEncodings = a),
      (e.getEncodingHeight = r),
      (e.getBarcodePadding = o),
      (e.calculateEncodingAttributes = i),
      (e.getTotalWidthOfEncodings = u);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(27),
      o = n(26),
      i = n(33),
      u = n(37),
      a = n(42),
      f = n(44),
      c = n(43),
      s = n(34);
    e.default = {
      CODE39: r.CODE39,
      CODE128: o.CODE128,
      CODE128A: o.CODE128A,
      CODE128B: o.CODE128B,
      CODE128C: o.CODE128C,
      EAN13: i.EAN13,
      EAN8: i.EAN8,
      EAN5: i.EAN5,
      EAN2: i.EAN2,
      UPC: i.UPC,
      UPCE: i.UPCE,
      ITF14: u.ITF14,
      ITF: u.ITF,
      MSI: a.MSI,
      MSI10: a.MSI10,
      MSI11: a.MSI11,
      MSI1010: a.MSI1010,
      MSI1110: a.MSI1110,
      pharmacode: f.pharmacode,
      codabar: c.codabar,
      GenericBarcode: s.GenericBarcode,
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      i = (function () {
        function t(e) {
          r(this, t), (this.api = e);
        }
        return (
          o(t, [
            {
              key: "handleCatch",
              value: function (t) {
                if ("InvalidInputException" !== t.name) throw t;
                if (this.api._options.valid === this.api._defaults.valid)
                  throw t.message;
                this.api._options.valid(!1), (this.api.render = function () {});
              },
            },
            {
              key: "wrapBarcodeCall",
              value: function (t) {
                try {
                  var e = t.apply(void 0, arguments);
                  return this.api._options.valid(!0), e;
                } catch (t) {
                  return this.handleCatch(t), this.api;
                }
              },
            },
          ]),
          t
        );
      })();
    e.default = i;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return (
        (t.marginTop = t.marginTop || t.margin),
        (t.marginBottom = t.marginBottom || t.margin),
        (t.marginRight = t.marginRight || t.margin),
        (t.marginLeft = t.marginLeft || t.margin),
        t
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t) {
      if ("string" == typeof t) return i(t);
      if (Array.isArray(t)) {
        for (var e = [], n = 0; n < t.length; n++) e.push(o(t[n]));
        return e;
      }
      if (
        "undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLImageElement
      )
        return u(t);
      if (
        (t && "svg" === t.nodeName) ||
        ("undefined" != typeof SVGElement && t instanceof SVGElement)
      )
        return {
          element: t,
          options: (0, c.default)(t),
          renderer: l.default.SVGRenderer,
        };
      if (
        "undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLCanvasElement
      )
        return {
          element: t,
          options: (0, c.default)(t),
          renderer: l.default.CanvasRenderer,
        };
      if (t && t.getContext)
        return { element: t, renderer: l.default.CanvasRenderer };
      if (t && "object" === (void 0 === t ? "undefined" : a(t)) && !t.nodeName)
        return { element: t, renderer: l.default.ObjectRenderer };
      throw new p.InvalidElementException();
    }
    function i(t) {
      var e = document.querySelectorAll(t);
      if (0 !== e.length) {
        for (var n = [], r = 0; r < e.length; r++) n.push(o(e[r]));
        return n;
      }
    }
    function u(t) {
      var e = document.createElement("canvas");
      return {
        element: e,
        options: (0, c.default)(t),
        renderer: l.default.CanvasRenderer,
        afterRender: function () {
          t.setAttribute("src", e.toDataURL());
        },
      };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      f = n(45),
      c = r(f),
      s = n(47),
      l = r(s),
      p = n(8);
    e.default = o;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      function e(t) {
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e(t[r]);
        else (t.text = t.text || ""), (t.data = t.data || ""), n.push(t);
      }
      var n = [];
      return e(t), n;
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e, n) {
      t = "" + t;
      var r = new e(t, n);
      if (!r.valid()) throw new E.InvalidInputException(r.constructor.name, t);
      var o = r.encode();
      o = (0, p.default)(o);
      for (var i = 0; i < o.length; i++)
        o[i].options = (0, s.default)(n, o[i].options);
      return o;
    }
    function i() {
      return f.default.CODE128 ? "CODE128" : Object.keys(f.default)[0];
    }
    function u(t, e, n) {
      e = (0, p.default)(e);
      for (var r = 0; r < e.length; r++)
        (e[r].options = (0, s.default)(n, e[r].options)),
          (0, h.default)(e[r].options);
      (0, h.default)(n),
        new (0, t.renderer)(t.element, e, n).render(),
        t.afterRender && t.afterRender();
    }
    var a = n(15),
      f = r(a),
      c = n(5),
      s = r(c),
      l = n(19),
      p = r(l),
      d = n(17),
      h = r(d),
      y = n(18),
      b = r(y),
      _ = n(9),
      v = r(_),
      g = n(16),
      O = r(g),
      E = n(8),
      w = n(10),
      m = r(w),
      j = function () {},
      x = function (t, e, n) {
        var r = new j();
        if (void 0 === t) throw Error("No element to render on was provided.");
        return (
          (r._renderProperties = (0, b.default)(t)),
          (r._encodings = []),
          (r._options = m.default),
          (r._errorHandler = new O.default(r)),
          void 0 !== e &&
            ((n = n || {}),
            n.format || (n.format = i()),
            r.options(n)[n.format](e, n).render()),
          r
        );
      };
    x.getModule = function (t) {
      return f.default[t];
    };
    for (var P in f.default)
      f.default.hasOwnProperty(P) &&
        (function (t, e) {
          j.prototype[e] = j.prototype[e.toUpperCase()] = j.prototype[
            e.toLowerCase()
          ] = function (n, r) {
            var i = this;
            return i._errorHandler.wrapBarcodeCall(function () {
              r.text = void 0 === r.text ? void 0 : "" + r.text;
              var u = (0, s.default)(i._options, r);
              u = (0, v.default)(u);
              var a = t[e],
                f = o(n, a, u);
              return i._encodings.push(f), i;
            });
          };
        })(f.default, P);
    (j.prototype.options = function (t) {
      return (this._options = (0, s.default)(this._options, t)), this;
    }),
      (j.prototype.blank = function (t) {
        var e = new Array(t + 1).join("0");
        return this._encodings.push({ data: e }), this;
      }),
      (j.prototype.init = function () {
        if (this._renderProperties) {
          Array.isArray(this._renderProperties) ||
            (this._renderProperties = [this._renderProperties]);
          var t;
          for (var e in this._renderProperties) {
            t = this._renderProperties[e];
            var n = (0, s.default)(this._options, t.options);
            "auto" == n.format && (n.format = i()),
              this._errorHandler.wrapBarcodeCall(function () {
                var e = n.value,
                  r = f.default[n.format.toUpperCase()],
                  i = o(e, r, n);
                u(t, i, n);
              });
          }
        }
      }),
      (j.prototype.render = function () {
        if (!this._renderProperties) throw new E.NoElementException();
        if (Array.isArray(this._renderProperties))
          for (var t = 0; t < this._renderProperties.length; t++)
            u(this._renderProperties[t], this._encodings, this._options);
        else u(this._renderProperties, this._encodings, this._options);
        return this;
      }),
      (j.prototype._defaults = m.default),
      "undefined" != typeof window && (window.JsBarcode = x),
      "undefined" != typeof jQuery &&
        (jQuery.fn.JsBarcode = function (t, e) {
          var n = [];
          return (
            jQuery(this).each(function () {
              n.push(this);
            }),
            x(n, t, e)
          );
        }),
      (t.exports = x);
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      a = n(6),
      f = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(a),
      c = n(1),
      s = (function (t) {
        function e(t, n) {
          return (
            r(this, e),
            o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(
                this,
                c.A_START_CHAR + t,
                n
              )
            )
          );
        }
        return (
          i(e, t),
          u(e, [
            {
              key: "valid",
              value: function () {
                return new RegExp("^" + c.A_CHARS + "+$").test(this.data);
              },
            },
          ]),
          e
        );
      })(f.default);
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      a = n(6),
      f = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(a),
      c = n(1),
      s = (function (t) {
        function e(t, n) {
          return (
            r(this, e),
            o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(
                this,
                c.B_START_CHAR + t,
                n
              )
            )
          );
        }
        return (
          i(e, t),
          u(e, [
            {
              key: "valid",
              value: function () {
                return new RegExp("^" + c.B_CHARS + "+$").test(this.data);
              },
            },
          ]),
          e
        );
      })(f.default);
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      a = n(6),
      f = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(a),
      c = n(1),
      s = (function (t) {
        function e(t, n) {
          return (
            r(this, e),
            o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(
                this,
                c.C_START_CHAR + t,
                n
              )
            )
          );
        }
        return (
          i(e, t),
          u(e, [
            {
              key: "valid",
              value: function () {
                return new RegExp("^" + c.C_CHARS + "+$").test(this.data);
              },
            },
          ]),
          e
        );
      })(f.default);
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function u(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = n(6),
      f = r(a),
      c = n(25),
      s = r(c),
      l = (function (t) {
        function e(t, n) {
          if ((o(this, e), /^[\x00-\x7F\xC8-\xD3]+$/.test(t)))
            var r = i(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(
                this,
                (0, s.default)(t),
                n
              )
            );
          else
            var r = i(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
            );
          return i(r);
        }
        return u(e, t), e;
      })(f.default);
    e.default = l;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      var n = e ? i.A_CHARS : i.B_CHARS,
        u = t.match(new RegExp("^(" + n + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
      if (u)
        return u[1] + String.fromCharCode(204) + o(t.substring(u[1].length));
      var a = t.match(new RegExp("^" + n + "+"))[0];
      return a.length === t.length
        ? t
        : a + String.fromCharCode(e ? 205 : 206) + r(t.substring(a.length), !e);
    }
    function o(t) {
      var e = f(t),
        n = e.length;
      if (n === t.length) return t;
      t = t.substring(n);
      var o = u(t) >= a(t);
      return e + String.fromCharCode(o ? 206 : 205) + r(t, o);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(1),
      u = function (t) {
        return t.match(new RegExp("^" + i.A_CHARS + "*"))[0].length;
      },
      a = function (t) {
        return t.match(new RegExp("^" + i.B_CHARS + "*"))[0].length;
      },
      f = function (t) {
        return t.match(new RegExp("^" + i.C_CHARS + "*"))[0];
      };
    e.default = function (t) {
      var e = void 0;
      if (f(t).length >= 2) e = i.C_START_CHAR + o(t);
      else {
        var n = u(t) > a(t);
        e = (n ? i.A_START_CHAR : i.B_START_CHAR) + r(t, n);
      }
      return e.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, function (t, e) {
        return String.fromCharCode(203) + e;
      });
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.CODE128C = e.CODE128B = e.CODE128A = e.CODE128 = void 0);
    var o = n(24),
      i = r(o),
      u = n(21),
      a = r(u),
      f = n(22),
      c = r(f),
      s = n(23),
      l = r(s);
    (e.CODE128 = i.default),
      (e.CODE128A = a.default),
      (e.CODE128B = c.default),
      (e.CODE128C = l.default);
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    function u(t) {
      return a(c(t));
    }
    function a(t) {
      return b[t].toString(2);
    }
    function f(t) {
      return y[t];
    }
    function c(t) {
      return y.indexOf(t);
    }
    function s(t) {
      for (var e = 0, n = 0; n < t.length; n++) e += c(t[n]);
      return (e %= 43);
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.CODE39 = void 0);
    var l = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      p = n(0),
      d = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(p),
      h = (function (t) {
        function e(t, n) {
          return (
            r(this, e),
            (t = t.toUpperCase()),
            n.mod43 && (t += f(s(t))),
            o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
          );
        }
        return (
          i(e, t),
          l(e, [
            {
              key: "encode",
              value: function () {
                for (var t = u("*"), e = 0; e < this.data.length; e++)
                  t += u(this.data[e]) + "0";
                return (t += u("*")), { data: t, text: this.text };
              },
            },
            {
              key: "valid",
              value: function () {
                return -1 !== this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/);
              },
            },
          ]),
          e
        );
      })(d.default),
      y = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "-",
        ".",
        " ",
        "$",
        "/",
        "+",
        "%",
        "*",
      ],
      b = [
        20957,
        29783,
        23639,
        30485,
        20951,
        29813,
        23669,
        20855,
        29789,
        23645,
        29975,
        23831,
        30533,
        22295,
        30149,
        24005,
        21623,
        29981,
        23837,
        22301,
        30023,
        23879,
        30545,
        22343,
        30161,
        24017,
        21959,
        30065,
        23921,
        22385,
        29015,
        18263,
        29141,
        17879,
        29045,
        18293,
        17783,
        29021,
        18269,
        17477,
        17489,
        17681,
        20753,
        35770,
      ];
    e.CODE39 = h;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      a = function t(e, n, r) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(e);
          return null === i ? void 0 : t(i, n, r);
        }
        if ("value" in o) return o.value;
        var u = o.get;
        if (void 0 !== u) return u.call(r);
      },
      f = n(2),
      c = n(11),
      s = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(c),
      l = function (t) {
        return (
          (10 -
            (t
              .substr(0, 12)
              .split("")
              .map(function (t) {
                return +t;
              })
              .reduce(function (t, e, n) {
                return n % 2 ? t + 3 * e : t + e;
              }, 0) %
              10)) %
          10
        );
      },
      p = (function (t) {
        function e(t, n) {
          r(this, e), -1 !== t.search(/^[0-9]{12}$/) && (t += l(t));
          var i = o(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
          );
          return (i.lastChar = n.lastChar), i;
        }
        return (
          i(e, t),
          u(e, [
            {
              key: "valid",
              value: function () {
                return (
                  -1 !== this.data.search(/^[0-9]{13}$/) &&
                  +this.data[12] === l(this.data)
                );
              },
            },
            {
              key: "leftText",
              value: function () {
                return a(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "leftText",
                  this
                ).call(this, 1, 6);
              },
            },
            {
              key: "leftEncode",
              value: function () {
                var t = this.data.substr(1, 6),
                  n = f.EAN13_STRUCTURE[this.data[0]];
                return a(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "leftEncode",
                  this
                ).call(this, t, n);
              },
            },
            {
              key: "rightText",
              value: function () {
                return a(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "rightText",
                  this
                ).call(this, 7, 6);
              },
            },
            {
              key: "rightEncode",
              value: function () {
                var t = this.data.substr(7, 6);
                return a(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "rightEncode",
                  this
                ).call(this, t, "RRRRRR");
              },
            },
            {
              key: "encodeGuarded",
              value: function () {
                var t = a(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "encodeGuarded",
                  this
                ).call(this);
                return (
                  this.options.displayValue &&
                    (t.unshift({
                      data: "000000000000",
                      text: this.text.substr(0, 1),
                      options: { textAlign: "left", fontSize: this.fontSize },
                    }),
                    this.options.lastChar &&
                      (t.push({ data: "00" }),
                      t.push({
                        data: "00000",
                        text: this.options.lastChar,
                        options: { fontSize: this.fontSize },
                      }))),
                  t
                );
              },
            },
          ]),
          e
        );
      })(s.default);
    e.default = p;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function u(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      f = n(2),
      c = n(3),
      s = r(c),
      l = n(0),
      p = r(l),
      d = (function (t) {
        function e(t, n) {
          return (
            o(this, e),
            i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
          );
        }
        return (
          u(e, t),
          a(e, [
            {
              key: "valid",
              value: function () {
                return -1 !== this.data.search(/^[0-9]{2}$/);
              },
            },
            {
              key: "encode",
              value: function () {
                var t = f.EAN2_STRUCTURE[parseInt(this.data) % 4];
                return {
                  data: "1011" + (0, s.default)(this.data, t, "01"),
                  text: this.text,
                };
              },
            },
          ]),
          e
        );
      })(p.default);
    e.default = d;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function u(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      f = n(2),
      c = n(3),
      s = r(c),
      l = n(0),
      p = r(l),
      d = function (t) {
        return (
          t
            .split("")
            .map(function (t) {
              return +t;
            })
            .reduce(function (t, e, n) {
              return n % 2 ? t + 9 * e : t + 3 * e;
            }, 0) % 10
        );
      },
      h = (function (t) {
        function e(t, n) {
          return (
            o(this, e),
            i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
          );
        }
        return (
          u(e, t),
          a(e, [
            {
              key: "valid",
              value: function () {
                return -1 !== this.data.search(/^[0-9]{5}$/);
              },
            },
            {
              key: "encode",
              value: function () {
                var t = f.EAN5_STRUCTURE[d(this.data)];
                return {
                  data: "1011" + (0, s.default)(this.data, t, "01"),
                  text: this.text,
                };
              },
            },
          ]),
          e
        );
      })(p.default);
    e.default = h;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      a = function t(e, n, r) {
        null === e && (e = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(e, n);
        if (void 0 === o) {
          var i = Object.getPrototypeOf(e);
          return null === i ? void 0 : t(i, n, r);
        }
        if ("value" in o) return o.value;
        var u = o.get;
        if (void 0 !== u) return u.call(r);
      },
      f = n(11),
      c = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(f),
      s = function (t) {
        return (
          (10 -
            (t
              .substr(0, 7)
              .split("")
              .map(function (t) {
                return +t;
              })
              .reduce(function (t, e, n) {
                return n % 2 ? t + e : t + 3 * e;
              }, 0) %
              10)) %
          10
        );
      },
      l = (function (t) {
        function e(t, n) {
          return (
            r(this, e),
            -1 !== t.search(/^[0-9]{7}$/) && (t += s(t)),
            o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
          );
        }
        return (
          i(e, t),
          u(e, [
            {
              key: "valid",
              value: function () {
                return (
                  -1 !== this.data.search(/^[0-9]{8}$/) &&
                  +this.data[7] === s(this.data)
                );
              },
            },
            {
              key: "leftText",
              value: function () {
                return a(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "leftText",
                  this
                ).call(this, 0, 4);
              },
            },
            {
              key: "leftEncode",
              value: function () {
                var t = this.data.substr(0, 4);
                return a(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "leftEncode",
                  this
                ).call(this, t, "LLLL");
              },
            },
            {
              key: "rightText",
              value: function () {
                return a(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "rightText",
                  this
                ).call(this, 4, 4);
              },
            },
            {
              key: "rightEncode",
              value: function () {
                var t = this.data.substr(4, 4);
                return a(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "rightEncode",
                  this
                ).call(this, t, "RRRR");
              },
            },
          ]),
          e
        );
      })(c.default);
    e.default = l;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function i(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function u(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    function a(t, e) {
      for (
        var n = parseInt(t[t.length - 1]), r = h[n], o = "", i = 0, u = 0;
        u < r.length;
        u++
      ) {
        var a = r[u];
        o += "X" === a ? t[i++] : a;
      }
      return "" + (o = "" + e + o) + (0, d.checksum)(o);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var f = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      c = n(3),
      s = r(c),
      l = n(0),
      p = r(l),
      d = n(12),
      h = [
        "XX00000XXX",
        "XX10000XXX",
        "XX20000XXX",
        "XXX00000XX",
        "XXXX00000X",
        "XXXXX00005",
        "XXXXX00006",
        "XXXXX00007",
        "XXXXX00008",
        "XXXXX00009",
      ],
      y = [
        ["EEEOOO", "OOOEEE"],
        ["EEOEOO", "OOEOEE"],
        ["EEOOEO", "OOEEOE"],
        ["EEOOOE", "OOEEEO"],
        ["EOEEOO", "OEOOEE"],
        ["EOOEEO", "OEEOOE"],
        ["EOOOEE", "OEEEOO"],
        ["EOEOEO", "OEOEOE"],
        ["EOEOOE", "OEOEEO"],
        ["EOOEOE", "OEEOEO"],
      ],
      b = (function (t) {
        function e(t, n) {
          o(this, e);
          var r = i(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
          );
          if (((r.isValid = !1), -1 !== t.search(/^[0-9]{6}$/)))
            (r.middleDigits = t),
              (r.upcA = a(t, "0")),
              (r.text =
                n.text || "" + r.upcA[0] + t + r.upcA[r.upcA.length - 1]),
              (r.isValid = !0);
          else {
            if (-1 === t.search(/^[01][0-9]{7}$/)) return i(r);
            if (
              ((r.middleDigits = t.substring(1, t.length - 1)),
              (r.upcA = a(r.middleDigits, t[0])),
              r.upcA[r.upcA.length - 1] !== t[t.length - 1])
            )
              return i(r);
            r.isValid = !0;
          }
          return (
            (r.displayValue = n.displayValue),
            n.fontSize > 10 * n.width
              ? (r.fontSize = 10 * n.width)
              : (r.fontSize = n.fontSize),
            (r.guardHeight = n.height + r.fontSize / 2 + n.textMargin),
            r
          );
        }
        return (
          u(e, t),
          f(e, [
            {
              key: "valid",
              value: function () {
                return this.isValid;
              },
            },
            {
              key: "encode",
              value: function () {
                return this.options.flat
                  ? this.flatEncoding()
                  : this.guardedEncoding();
              },
            },
            {
              key: "flatEncoding",
              value: function () {
                var t = "";
                return (
                  (t += "101"),
                  (t += this.encodeMiddleDigits()),
                  (t += "010101"),
                  { data: t, text: this.text }
                );
              },
            },
            {
              key: "guardedEncoding",
              value: function () {
                var t = [];
                return (
                  this.displayValue &&
                    t.push({
                      data: "00000000",
                      text: this.text[0],
                      options: { textAlign: "left", fontSize: this.fontSize },
                    }),
                  t.push({
                    data: "101",
                    options: { height: this.guardHeight },
                  }),
                  t.push({
                    data: this.encodeMiddleDigits(),
                    text: this.text.substring(1, 7),
                    options: { fontSize: this.fontSize },
                  }),
                  t.push({
                    data: "010101",
                    options: { height: this.guardHeight },
                  }),
                  this.displayValue &&
                    t.push({
                      data: "00000000",
                      text: this.text[7],
                      options: { textAlign: "right", fontSize: this.fontSize },
                    }),
                  t
                );
              },
            },
            {
              key: "encodeMiddleDigits",
              value: function () {
                var t = this.upcA[0],
                  e = this.upcA[this.upcA.length - 1],
                  n = y[parseInt(e)][parseInt(t)];
                return (0, s.default)(this.middleDigits, n);
              },
            },
          ]),
          e
        );
      })(p.default);
    e.default = b;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.UPCE = e.UPC = e.EAN2 = e.EAN5 = e.EAN8 = e.EAN13 = void 0);
    var o = n(28),
      i = r(o),
      u = n(31),
      a = r(u),
      f = n(30),
      c = r(f),
      s = n(29),
      l = r(s),
      p = n(12),
      d = r(p),
      h = n(32),
      y = r(h);
    (e.EAN13 = i.default),
      (e.EAN8 = a.default),
      (e.EAN5 = c.default),
      (e.EAN2 = l.default),
      (e.UPC = d.default),
      (e.UPCE = y.default);
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.GenericBarcode = void 0);
    var u = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      a = n(0),
      f = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(a),
      c = (function (t) {
        function e(t, n) {
          return (
            r(this, e),
            o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
          );
        }
        return (
          i(e, t),
          u(e, [
            {
              key: "encode",
              value: function () {
                return {
                  data: "10101010101010101010101010101010101010101",
                  text: this.text,
                };
              },
            },
            {
              key: "valid",
              value: function () {
                return !0;
              },
            },
          ]),
          e
        );
      })(f.default);
    e.GenericBarcode = c;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      a = n(13),
      f = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(a),
      c = function (t) {
        var e = t
          .substr(0, 13)
          .split("")
          .map(function (t) {
            return parseInt(t, 10);
          })
          .reduce(function (t, e, n) {
            return t + e * (3 - (n % 2) * 2);
          }, 0);
        return 10 * Math.ceil(e / 10) - e;
      },
      s = (function (t) {
        function e(t, n) {
          return (
            r(this, e),
            -1 !== t.search(/^[0-9]{13}$/) && (t += c(t)),
            o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
          );
        }
        return (
          i(e, t),
          u(e, [
            {
              key: "valid",
              value: function () {
                return (
                  -1 !== this.data.search(/^[0-9]{14}$/) &&
                  +this.data[13] === c(this.data)
                );
              },
            },
          ]),
          e
        );
      })(f.default);
    e.default = s;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    (e.START_BIN = "1010"),
      (e.END_BIN = "11101"),
      (e.BINARIES = [
        "00110",
        "10001",
        "01001",
        "11000",
        "00101",
        "10100",
        "01100",
        "00011",
        "10010",
        "01010",
      ]);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ITF14 = e.ITF = void 0);
    var o = n(13),
      i = r(o),
      u = n(35),
      a = r(u);
    (e.ITF = i.default), (e.ITF14 = a.default);
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = n(4),
      a = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(u),
      f = n(7),
      c = (function (t) {
        function e(t, n) {
          return (
            r(this, e),
            o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(
                this,
                t + (0, f.mod10)(t),
                n
              )
            )
          );
        }
        return i(e, t), e;
      })(a.default);
    e.default = c;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = n(4),
      a = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(u),
      f = n(7),
      c = (function (t) {
        function e(t, n) {
          return (
            r(this, e),
            (t += (0, f.mod10)(t)),
            (t += (0, f.mod10)(t)),
            o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
          );
        }
        return i(e, t), e;
      })(a.default);
    e.default = c;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = n(4),
      a = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(u),
      f = n(7),
      c = (function (t) {
        function e(t, n) {
          return (
            r(this, e),
            o(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(
                this,
                t + (0, f.mod11)(t),
                n
              )
            )
          );
        }
        return i(e, t), e;
      })(a.default);
    e.default = c;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var u = n(4),
      a = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(u),
      f = n(7),
      c = (function (t) {
        function e(t, n) {
          return (
            r(this, e),
            (t += (0, f.mod11)(t)),
            (t += (0, f.mod10)(t)),
            o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
          );
        }
        return i(e, t), e;
      })(a.default);
    e.default = c;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.MSI1110 = e.MSI1010 = e.MSI11 = e.MSI10 = e.MSI = void 0);
    var o = n(4),
      i = r(o),
      u = n(38),
      a = r(u),
      f = n(40),
      c = r(f),
      s = n(39),
      l = r(s),
      p = n(41),
      d = r(p);
    (e.MSI = i.default),
      (e.MSI10 = a.default),
      (e.MSI11 = c.default),
      (e.MSI1010 = l.default),
      (e.MSI1110 = d.default);
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.codabar = void 0);
    var u = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      a = n(0),
      f = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(a),
      c = (function (t) {
        function e(t, n) {
          r(this, e),
            0 === t.search(/^[0-9\-\$\:\.\+\/]+$/) && (t = "A" + t + "A");
          var i = o(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(
              this,
              t.toUpperCase(),
              n
            )
          );
          return (i.text = i.options.text || i.text.replace(/[A-D]/g, "")), i;
        }
        return (
          i(e, t),
          u(e, [
            {
              key: "valid",
              value: function () {
                return (
                  -1 !== this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/)
                );
              },
            },
            {
              key: "encode",
              value: function () {
                for (
                  var t = [], e = this.getEncodings(), n = 0;
                  n < this.data.length;
                  n++
                )
                  t.push(e[this.data.charAt(n)]),
                    n !== this.data.length - 1 && t.push("0");
                return { text: this.text, data: t.join("") };
              },
            },
            {
              key: "getEncodings",
              value: function () {
                return {
                  0: "101010011",
                  1: "101011001",
                  2: "101001011",
                  3: "110010101",
                  4: "101101001",
                  5: "110101001",
                  6: "100101011",
                  7: "100101101",
                  8: "100110101",
                  9: "110100101",
                  "-": "101001101",
                  $: "101100101",
                  ":": "1101011011",
                  "/": "1101101011",
                  ".": "1101101101",
                  "+": "101100110011",
                  A: "1011001001",
                  B: "1001001011",
                  C: "1010010011",
                  D: "1010011001",
                };
              },
            },
          ]),
          e
        );
      })(f.default);
    e.codabar = c;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function i(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.pharmacode = void 0);
    var u = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      a = n(0),
      f = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(a),
      c = (function (t) {
        function e(t, n) {
          r(this, e);
          var i = o(
            this,
            (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
          );
          return (i.number = parseInt(t, 10)), i;
        }
        return (
          i(e, t),
          u(e, [
            {
              key: "encode",
              value: function () {
                for (var t = this.number, e = ""; !isNaN(t) && 0 != t; )
                  t % 2 == 0
                    ? ((e = "11100" + e), (t = (t - 2) / 2))
                    : ((e = "100" + e), (t = (t - 1) / 2));
                return (e = e.slice(0, -2)), { data: e, text: this.text };
              },
            },
            {
              key: "valid",
              value: function () {
                return this.number >= 3 && this.number <= 131070;
              },
            },
          ]),
          e
        );
      })(f.default);
    e.pharmacode = c;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function o(t) {
      var e = {};
      for (var n in f.default)
        f.default.hasOwnProperty(n) &&
          (t.hasAttribute("jsbarcode-" + n.toLowerCase()) &&
            (e[n] = t.getAttribute("jsbarcode-" + n.toLowerCase())),
          t.hasAttribute("data-" + n.toLowerCase()) &&
            (e[n] = t.getAttribute("data-" + n.toLowerCase())));
      return (
        (e.value =
          t.getAttribute("jsbarcode-value") || t.getAttribute("data-value")),
        (e = (0, u.default)(e))
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(9),
      u = r(i),
      a = n(10),
      f = r(a);
    e.default = o;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      i = n(5),
      u = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i),
      a = n(14),
      f = (function () {
        function t(e, n, o) {
          r(this, t),
            (this.canvas = e),
            (this.encodings = n),
            (this.options = o);
        }
        return (
          o(t, [
            {
              key: "render",
              value: function () {
                if (!this.canvas.getContext)
                  throw new Error("The browser does not support canvas.");
                this.prepareCanvas();
                for (var t = 0; t < this.encodings.length; t++) {
                  var e = (0, u.default)(
                    this.options,
                    this.encodings[t].options
                  );
                  this.drawCanvasBarcode(e, this.encodings[t]),
                    this.drawCanvasText(e, this.encodings[t]),
                    this.moveCanvasDrawing(this.encodings[t]);
                }
                this.restoreCanvas();
              },
            },
            {
              key: "prepareCanvas",
              value: function () {
                var t = this.canvas.getContext("2d");
                t.save(),
                  (0, a.calculateEncodingAttributes)(
                    this.encodings,
                    this.options,
                    t
                  );
                var e = (0, a.getTotalWidthOfEncodings)(this.encodings),
                  n = (0, a.getMaximumHeightOfEncodings)(this.encodings);
                (this.canvas.width =
                  e + this.options.marginLeft + this.options.marginRight),
                  (this.canvas.height = n),
                  t.clearRect(0, 0, this.canvas.width, this.canvas.height),
                  this.options.background &&
                    ((t.fillStyle = this.options.background),
                    t.fillRect(0, 0, this.canvas.width, this.canvas.height)),
                  t.translate(this.options.marginLeft, 0);
              },
            },
            {
              key: "drawCanvasBarcode",
              value: function (t, e) {
                var n,
                  r = this.canvas.getContext("2d"),
                  o = e.data;
                (n =
                  "top" == t.textPosition
                    ? t.marginTop + t.fontSize + t.textMargin
                    : t.marginTop),
                  (r.fillStyle = t.lineColor);
                for (var i = 0; i < o.length; i++) {
                  var u = i * t.width + e.barcodePadding;
                  "1" === o[i]
                    ? r.fillRect(u, n, t.width, t.height)
                    : o[i] && r.fillRect(u, n, t.width, t.height * o[i]);
                }
              },
            },
            {
              key: "drawCanvasText",
              value: function (t, e) {
                var n = this.canvas.getContext("2d"),
                  r = t.fontOptions + " " + t.fontSize + "px " + t.font;
                if (t.displayValue) {
                  var o, i;
                  (i =
                    "top" == t.textPosition
                      ? t.marginTop + t.fontSize - t.textMargin
                      : t.height + t.textMargin + t.marginTop + t.fontSize),
                    (n.font = r),
                    "left" == t.textAlign || e.barcodePadding > 0
                      ? ((o = 0), (n.textAlign = "left"))
                      : "right" == t.textAlign
                      ? ((o = e.width - 1), (n.textAlign = "right"))
                      : ((o = e.width / 2), (n.textAlign = "center")),
                    n.fillText(e.text, o, i);
                }
              },
            },
            {
              key: "moveCanvasDrawing",
              value: function (t) {
                this.canvas.getContext("2d").translate(t.width, 0);
              },
            },
            {
              key: "restoreCanvas",
              value: function () {
                this.canvas.getContext("2d").restore();
              },
            },
          ]),
          t
        );
      })();
    e.default = f;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = n(46),
      i = r(o),
      u = n(49),
      a = r(u),
      f = n(48),
      c = r(f);
    e.default = {
      CanvasRenderer: i.default,
      SVGRenderer: a.default,
      ObjectRenderer: c.default,
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      i = (function () {
        function t(e, n, o) {
          r(this, t),
            (this.object = e),
            (this.encodings = n),
            (this.options = o);
        }
        return (
          o(t, [
            {
              key: "render",
              value: function () {
                this.object.encodings = this.encodings;
              },
            },
          ]),
          t
        );
      })();
    e.default = i;
  },
  function (t, e, n) {
    "use strict";
    function r(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })(),
      i = n(5),
      u = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i),
      a = n(14),
      f = "http://www.w3.org/2000/svg",
      c = (function () {
        function t(e, n, o) {
          r(this, t),
            (this.svg = e),
            (this.encodings = n),
            (this.options = o),
            (this.document = o.xmlDocument || document);
        }
        return (
          o(t, [
            {
              key: "render",
              value: function () {
                var t = this.options.marginLeft;
                this.prepareSVG();
                for (var e = 0; e < this.encodings.length; e++) {
                  var n = this.encodings[e],
                    r = (0, u.default)(this.options, n.options),
                    o = this.createGroup(t, r.marginTop, this.svg);
                  this.setGroupOptions(o, r),
                    this.drawSvgBarcode(o, r, n),
                    this.drawSVGText(o, r, n),
                    (t += n.width);
                }
              },
            },
            {
              key: "prepareSVG",
              value: function () {
                for (; this.svg.firstChild; )
                  this.svg.removeChild(this.svg.firstChild);
                (0, a.calculateEncodingAttributes)(
                  this.encodings,
                  this.options
                );
                var t = (0, a.getTotalWidthOfEncodings)(this.encodings),
                  e = (0, a.getMaximumHeightOfEncodings)(this.encodings),
                  n = t + this.options.marginLeft + this.options.marginRight;
                this.setSvgAttributes(n, e),
                  this.options.background &&
                    this.drawRect(0, 0, n, e, this.svg).setAttribute(
                      "style",
                      "fill:" + this.options.background + ";"
                    );
              },
            },
            {
              key: "drawSvgBarcode",
              value: function (t, e, n) {
                var r,
                  o = n.data;
                r = "top" == e.textPosition ? e.fontSize + e.textMargin : 0;
                for (var i = 0, u = 0, a = 0; a < o.length; a++)
                  (u = a * e.width + n.barcodePadding),
                    "1" === o[a]
                      ? i++
                      : i > 0 &&
                        (this.drawRect(
                          u - e.width * i,
                          r,
                          e.width * i,
                          e.height,
                          t
                        ),
                        (i = 0));
                i > 0 &&
                  this.drawRect(
                    u - e.width * (i - 1),
                    r,
                    e.width * i,
                    e.height,
                    t
                  );
              },
            },
            {
              key: "drawSVGText",
              value: function (t, e, n) {
                var r = this.document.createElementNS(f, "text");
                if (e.displayValue) {
                  var o, i;
                  r.setAttribute(
                    "style",
                    "font:" + e.fontOptions + " " + e.fontSize + "px " + e.font
                  ),
                    (i =
                      "top" == e.textPosition
                        ? e.fontSize - e.textMargin
                        : e.height + e.textMargin + e.fontSize),
                    "left" == e.textAlign || n.barcodePadding > 0
                      ? ((o = 0), r.setAttribute("text-anchor", "start"))
                      : "right" == e.textAlign
                      ? ((o = n.width - 1),
                        r.setAttribute("text-anchor", "end"))
                      : ((o = n.width / 2),
                        r.setAttribute("text-anchor", "middle")),
                    r.setAttribute("x", o),
                    r.setAttribute("y", i),
                    r.appendChild(this.document.createTextNode(n.text)),
                    t.appendChild(r);
                }
              },
            },
            {
              key: "setSvgAttributes",
              value: function (t, e) {
                var n = this.svg;
                n.setAttribute("width", t + "px"),
                  n.setAttribute("height", e + "px"),
                  n.setAttribute("x", "0px"),
                  n.setAttribute("y", "0px"),
                  n.setAttribute("viewBox", "0 0 " + t + " " + e),
                  n.setAttribute("xmlns", f),
                  n.setAttribute("version", "1.1"),
                  n.setAttribute("style", "transform: translate(0,0)");
              },
            },
            {
              key: "createGroup",
              value: function (t, e, n) {
                var r = this.document.createElementNS(f, "g");
                return (
                  r.setAttribute(
                    "transform",
                    "translate(" + t + ", " + e + ")"
                  ),
                  n.appendChild(r),
                  r
                );
              },
            },
            {
              key: "setGroupOptions",
              value: function (t, e) {
                t.setAttribute("style", "fill:" + e.lineColor + ";");
              },
            },
            {
              key: "drawRect",
              value: function (t, e, n, r, o) {
                var i = this.document.createElementNS(f, "rect");
                return (
                  i.setAttribute("x", t),
                  i.setAttribute("y", e),
                  i.setAttribute("width", n),
                  i.setAttribute("height", r),
                  o.appendChild(i),
                  i
                );
              },
            },
          ]),
          t
        );
      })();
    e.default = c;
  },
]);

function CODE128(c, p) {
  function m() {
    return -1 == c.search(r) ? !1 : !0;
  }
  function a(q, g, e, a) {
    var k;
    k = "" + b(e);
    k += g(q);
    k += b(a(q, e));
    return k + "1100011101011";
  }
  function l(q) {
    for (var g = "", e = 0; e < q.length; e++) {
      var a;
      a: {
        for (a = 0; a < h.length; a++)
          if (h[a][0] == q[e]) {
            a = h[a][1];
            break a;
          }
        a = "";
      }
      g += a;
    }
    return g;
  }
  function d(a) {
    for (var g = "", e = 0; e < a.length; e += 2)
      g += b(parseInt(a.substr(e, 2)));
    return g;
  }
  function f(a, g) {
    for (var e = 0, k = 0; k < a.length; k++) {
      var b;
      a: {
        for (b = 0; b < h.length; b++)
          if (h[b][0] == a[k]) {
            b = h[b][2];
            break a;
          }
        b = 0;
      }
      e += b * (k + 1);
    }
    return (e + g) % 103;
  }
  function n(a, g) {
    for (var e = 0, k = 1, b = 0; b < a.length; b += 2)
      (e += parseInt(a.substr(b, 2)) * k), k++;
    return (e + g) % 103;
  }
  function b(a) {
    for (var b = 0; b < h.length; b++) if (h[b][2] == a) return h[b][1];
    return "";
  }
  p = p || "B";
  this.string128 = c + "";
  this.valid = m;
  this.encoded = function () {
    return m(c) ? k["code128" + p](c) : "";
  };
  var h = [
      [" ", "11011001100", 0],
      ["!", "11001101100", 1],
      ['"', "11001100110", 2],
      ["#", "10010011000", 3],
      ["$", "10010001100", 4],
      ["%", "10001001100", 5],
      ["&", "10011001000", 6],
      ["'", "10011000100", 7],
      ["(", "10001100100", 8],
      [")", "11001001000", 9],
      ["*", "11001000100", 10],
      ["+", "11000100100", 11],
      [",", "10110011100", 12],
      ["-", "10011011100", 13],
      [".", "10011001110", 14],
      ["/", "10111001100", 15],
      ["0", "10011101100", 16],
      ["1", "10011100110", 17],
      ["2", "11001110010", 18],
      ["3", "11001011100", 19],
      ["4", "11001001110", 20],
      ["5", "11011100100", 21],
      ["6", "11001110100", 22],
      ["7", "11101101110", 23],
      ["8", "11101001100", 24],
      ["9", "11100101100", 25],
      [":", "11100100110", 26],
      [";", "11101100100", 27],
      ["<", "11100110100", 28],
      ["=", "11100110010", 29],
      [">", "11011011000", 30],
      ["?", "11011000110", 31],
      ["@", "11000110110", 32],
      ["A", "10100011000", 33],
      ["B", "10001011000", 34],
      ["C", "10001000110", 35],
      ["D", "10110001000", 36],
      ["E", "10001101000", 37],
      ["F", "10001100010", 38],
      ["G", "11010001000", 39],
      ["H", "11000101000", 40],
      ["I", "11000100010", 41],
      ["J", "10110111000", 42],
      ["K", "10110001110", 43],
      ["L", "10001101110", 44],
      ["M", "10111011000", 45],
      ["N", "10111000110", 46],
      ["O", "10001110110", 47],
      ["P", "11101110110", 48],
      ["Q", "11010001110", 49],
      ["R", "11000101110", 50],
      ["S", "11011101000", 51],
      ["T", "11011100010", 52],
      ["U", "11011101110", 53],
      ["V", "11101011000", 54],
      ["W", "11101000110", 55],
      ["X", "11100010110", 56],
      ["Y", "11101101000", 57],
      ["Z", "11101100010", 58],
      ["[", "11100011010", 59],
      ["\\", "11101111010", 60],
      ["]", "11001000010", 61],
      ["^", "11110001010", 62],
      ["_", "10100110000", 63],
      ["`", "10100001100", 64],
      ["a", "10010110000", 65],
      ["b", "10010000110", 66],
      ["c", "10000101100", 67],
      ["d", "10000100110", 68],
      ["e", "10110010000", 69],
      ["f", "10110000100", 70],
      ["g", "10011010000", 71],
      ["h", "10011000010", 72],
      ["i", "10000110100", 73],
      ["j", "10000110010", 74],
      ["k", "11000010010", 75],
      ["l", "11001010000", 76],
      ["m", "11110111010", 77],
      ["n", "11000010100", 78],
      ["o", "10001111010", 79],
      ["p", "10100111100", 80],
      ["q", "10010111100", 81],
      ["r", "10010011110", 82],
      ["s", "10111100100", 83],
      ["t", "10011110100", 84],
      ["u", "10011110010", 85],
      ["v", "11110100100", 86],
      ["w", "11110010100", 87],
      ["x", "11110010010", 88],
      ["y", "11011011110", 89],
      ["z", "11011110110", 90],
      ["{", "11110110110", 91],
      ["|", "10101111000", 92],
      ["}", "10100011110", 93],
      ["~", "10001011110", 94],
      [String.fromCharCode(127), "10111101000", 95],
      [String.fromCharCode(128), "10111100010", 96],
      [String.fromCharCode(129), "11110101000", 97],
      [String.fromCharCode(130), "11110100010", 98],
      [String.fromCharCode(131), "10111011110", 99],
      [String.fromCharCode(132), "10111101110", 100],
      [String.fromCharCode(133), "11101011110", 101],
      [String.fromCharCode(134), "11110101110", 102],
      [String.fromCharCode(135), "11010000100", 103],
      [String.fromCharCode(136), "11010010000", 104],
      [String.fromCharCode(137), "11010011100", 105],
    ],
    r = /^[!-~ ]+$/,
    k = {
      code128B: function (b) {
        return a(b, l, 104, f);
      },
      code128C: function (b) {
        b = b.replace(/ /g, "");
        return a(b, d, 105, n);
      },
    };
}
function CODE128B(c) {
  return new CODE128(c, "B");
}
function CODE128C(c) {
  return new CODE128(c, "C");
}
function CODE39(c) {
  function p() {
    return -1 == c.search(a) ? !1 : !0;
  }
  var m = [
    [0, "0", "101000111011101"],
    [1, "1", "111010001010111"],
    [2, "2", "101110001010111"],
    [3, "3", "111011100010101"],
    [4, "4", "101000111010111"],
    [5, "5", "111010001110101"],
    [6, "6", "101110001110101"],
    [7, "7", "101000101110111"],
    [8, "8", "111010001011101"],
    [9, "9", "101110001011101"],
    [10, "A", "111010100010111"],
    [11, "B", "101110100010111"],
    [12, "C", "111011101000101"],
    [13, "D", "101011100010111"],
    [14, "E", "111010111000101"],
    [15, "F", "101110111000101"],
    [16, "G", "101010001110111"],
    [17, "H", "111010100011101"],
    [18, "I", "101110100011101"],
    [19, "J", "101011100011101"],
    [20, "K", "111010101000111"],
    [21, "L", "101110101000111"],
    [22, "M", "111011101010001"],
    [23, "N", "101011101000111"],
    [24, "O", "111010111010001"],
    [25, "P", "101110111010001"],
    [26, "Q", "101010111000111"],
    [27, "R", "111010101110001"],
    [28, "S", "101110101110001"],
    [29, "T", "101011101110001"],
    [30, "U", "111000101010111"],
    [31, "V", "100011101010111"],
    [32, "W", "111000111010101"],
    [33, "X", "100010111010111"],
    [34, "Y", "111000101110101"],
    [35, "Z", "100011101110101"],
    [36, "-", "100010101110111"],
    [37, ".", "111000101011101"],
    [38, " ", "100011101011101"],
    [39, "$", "100010001000101"],
    [40, "/", "100010001010001"],
    [41, "+", "100010100010001"],
    [42, "%", "101000100010001"],
  ];
  this.valid = p;
  this.encoded = function () {
    if (p(c)) {
      var a = c,
        a = a.toUpperCase(),
        d;
      d = "1000101110111010";
      for (var f = 0; f < a.length; f++) {
        var n;
        a: {
          for (n = 0; n < m.length; n++)
            if (m[n][1] == a[f]) {
              n = m[n][2];
              break a;
            }
          n = "";
        }
        d += n + "0";
      }
      return d + "1000101110111010";
    }
    return "";
  };
  var a = /^[0-9a-zA-Z\-\.\ \$\/\+\%]+$/;
}
function EAN(c) {
  function p(b, h) {
    for (var g = "", e = 0; e < b.length; e++)
      "L" == h[e]
        ? (g += a[b[e]])
        : "G" == h[e]
        ? (g += l[b[e]])
        : "R" == h[e] && (g += d[b[e]]);
    return g;
  }
  function m(a) {
    if (-1 == a.search(r)) return !1;
    for (var b = a[12], g = 0, e = 0; 12 > e; e += 2) g += parseInt(a[e]);
    for (e = 1; 12 > e; e += 2) g += 3 * parseInt(a[e]);
    return b == (10 - (g % 10)) % 10;
  }
  this.EANnumber = c + "";
  this.valid = function () {
    return m(this.EANnumber);
  };
  this.encoded = function () {
    if (m(this.EANnumber)) {
      var a = this.EANnumber,
        d = "",
        g = a[0],
        e = a.substr(1, 7),
        a = a.substr(7, 6),
        d = d + n,
        d = d + p(e, f[g]),
        d = d + h,
        d = d + p(a, "RRRRRR");
      return (d += b);
    }
    return "";
  };
  var a = {
      0: "0001101",
      1: "0011001",
      2: "0010011",
      3: "0111101",
      4: "0100011",
      5: "0110001",
      6: "0101111",
      7: "0111011",
      8: "0110111",
      9: "0001011",
    },
    l = {
      0: "0100111",
      1: "0110011",
      2: "0011011",
      3: "0100001",
      4: "0011101",
      5: "0111001",
      6: "0000101",
      7: "0010001",
      8: "0001001",
      9: "0010111",
    },
    d = {
      0: "1110010",
      1: "1100110",
      2: "1101100",
      3: "1000010",
      4: "1011100",
      5: "1001110",
      6: "1010000",
      7: "1000100",
      8: "1001000",
      9: "1110100",
    },
    f = {
      0: "LLLLLL",
      1: "LLGLGG",
      2: "LLGGLG",
      3: "LLGGGL",
      4: "LGLLGG",
      5: "LGGLLG",
      6: "LGGGLL",
      7: "LGLGLG",
      8: "LGLGGL",
      9: "LGGLGL",
    },
    n = "101",
    b = "101",
    h = "01010",
    r = /^[0-9]{13}$/;
}
function UPC(c) {
  this.ean = new EAN("0" + c);
  this.valid = function () {
    return this.ean.valid();
  };
  this.encoded = function () {
    return this.ean.encoded();
  };
}
function ITF(c) {
  this.ITFNumber = c + "";
  this.valid = function () {
    return -1 !== this.ITFNumber.search(l);
  };
  this.encoded = function () {
    if (-1 !== this.ITFNumber.search(l)) {
      var d = this.ITFNumber,
        f;
      f = "" + m;
      for (var n = 0; n < d.length; n += 2) {
        for (
          var b = d.substr(n, 2), h = "", c = p[b[0]], b = p[b[1]], k = 0;
          5 > k;
          k++
        )
          (h += "1" == c[k] ? "111" : "1"), (h += "1" == b[k] ? "000" : "0");
        f += h;
      }
      return (f += a);
    }
    return "";
  };
  var p = {
      0: "00110",
      1: "10001",
      2: "01001",
      3: "11000",
      4: "00101",
      5: "10100",
      6: "01100",
      7: "00011",
      8: "10010",
      9: "01010",
    },
    m = "1010",
    a = "11101",
    l = /^([0-9][0-9])+$/;
}
function ITF14(c) {
  function p(a) {
    for (var b = 0, d = 0; 13 > d; d++) b += parseInt(a[d]) * (3 - (d % 2) * 2);
    return 10 - (b % 10);
  }
  function m(a) {
    return -1 == a.search(f) ? !1 : 14 == a.length ? a[13] == p(a) : !0;
  }
  this.ITF14number = c + "";
  this.valid = function () {
    return m(this.ITF14number);
  };
  this.encoded = function () {
    if (m(this.ITF14number)) {
      var f = this.ITF14number,
        b = "";
      13 == f.length && (f += p(f));
      for (var b = b + l, h = 0; 14 > h; h += 2) {
        for (
          var c = f.substr(h, 2), k = "", q = a[c[0]], c = a[c[1]], g = 0;
          5 > g;
          g++
        )
          (k += "1" == q[g] ? "111" : "1"), (k += "1" == c[g] ? "000" : "0");
        b += k;
      }
      return (b += d);
    }
    return "";
  };
  var a = {
      0: "00110",
      1: "10001",
      2: "01001",
      3: "11000",
      4: "00101",
      5: "10100",
      6: "01100",
      7: "00011",
      8: "10010",
      9: "01010",
    },
    l = "1010",
    d = "11101",
    f = /^[0-9]{13,14}$/;
}
function pharmacode(c) {
  function p(c, a) {
    if (0 == c.length) return "";
    var l,
      d = !1,
      f;
    l = c.length - 1;
    for (f = 0; "0" == c[l] || 0 > l; ) f++, l--;
    0 == f
      ? ((l = a ? "001" : "00111"), (d = a))
      : ((l = "001".repeat(f - (a ? 1 : 0))), (l += "00111"));
    return p(c.substr(0, c.length - f - 1), d) + l;
  }
  this.number = parseInt(c);
  this.encoded = function () {
    return this.valid(this.number)
      ? p(this.number.toString(2), !0).substr(2)
      : "";
  };
  this.valid = function () {
    return 3 <= this.number && 131070 >= this.number;
  };
  String.prototype.repeat = function (c) {
    return Array(c + 1).join(this);
  };
}
(function (c) {
  JsBarcode = function (c, m, a, l) {
    a = (function (a, b) {
      var c = {},
        d;
      for (d in a) c[d] = a[d];
      for (d in b) c[d] = b[d];
      return c;
    })(JsBarcode.defaults, a);
    var d = c;
    window.jQuery && d instanceof jQuery && (d = c.get(0));
    d instanceof HTMLCanvasElement || (d = document.createElement("canvas"));
    if (!d.getContext) return c;
    var f = new window[a.format](m);
    if (!f.valid()) return l && l(!1), this;
    var f = f.encoded(),
      n = function (c) {
        var f, g;
        g = a.height;
        b.font = a.fontSize + "px " + a.font;
        b.textBaseline = "bottom";
        b.textBaseline = "top";
        "left" == a.textAlign
          ? ((f = a.quite), (b.textAlign = "left"))
          : "right" == a.textAlign
          ? ((f = d.width - a.quite), (b.textAlign = "right"))
          : ((f = d.width / 2), (b.textAlign = "center"));
        b.fillText(c, f, g);
      },
      b = d.getContext("2d");
    d.width = f.length * a.width + 2 * a.quite;
    d.height = a.height + (a.displayValue ? 1.3 * a.fontSize : 0);
    b.clearRect(0, 0, d.width, d.height);
    a.backgroundColor &&
      ((b.fillStyle = a.backgroundColor), b.fillRect(0, 0, d.width, d.height));
    b.fillStyle = a.lineColor;
    for (var h = 0; h < f.length; h++) {
      var r = h * a.width + a.quite;
      "1" == f[h] && b.fillRect(r, 0, a.width, a.height);
    }
    a.displayValue && n(m);
    uri = d.toDataURL("image/png");
    window.jQuery && c instanceof jQuery
      ? c.get(0) instanceof HTMLCanvasElement || c.attr("src", uri)
      : c instanceof HTMLCanvasElement || c.setAttribute("src", uri);
    l && l(!0);
  };
  JsBarcode.defaults = {
    width: 2,
    height: 100,
    quite: 10,
    format: "CODE128",
    displayValue: !1,
    font: "monospace",
    textAlign: "center",
    fontSize: 12,
    backgroundColor: "",
    lineColor: "#000",
  };
  window.jQuery &&
    (c.fn.JsBarcode = function (c, m, a) {
      JsBarcode(this, c, m, a);
      return this;
    });
})(window.jQuery);
