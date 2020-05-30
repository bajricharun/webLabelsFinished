!(function (t) {
  function e(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = {
      i: r,
      l: !1,
      exports: {},
    });
    return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
  }
  var n = {};
  return (
    (e.m = t),
    (e.c = n),
    (e.i = function (t) {
      return t;
    }),
    (e.d = function (t, e, n) {
      Object.defineProperty(t, e, {
        configurable: !1,
        enumerable: !0,
        get: n,
      });
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t["default"];
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
    e((e.s = 39))
  );
})([
  function (t, e) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var r = (function () {
      function t() {
        n(this, t),
          (this.startBin = "101"),
          (this.endBin = "101"),
          (this.middleBin = "01010"),
          (this.Lbinary = [
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
          ]),
          (this.Gbinary = [
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
          ]),
          (this.Rbinary = [
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
          ]);
      }
      return (
        (t.prototype.encode = function (t, e, n) {
          var r = "";
          n = n || "";
          for (var i = 0; i < t.length; i++)
            "L" == e[i]
              ? (r += this.Lbinary[t[i]])
              : "G" == e[i]
              ? (r += this.Gbinary[t[i]])
              : "R" == e[i] && (r += this.Rbinary[t[i]]),
              i < t.length - 1 && (r += n);
          return r;
        }),
        t
      );
    })();
    e["default"] = r;
  },
  function (t, e) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
      for (var n = 0; n < e; n++) t = "0" + t;
      return t;
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var i = (function () {
      function t(e) {
        n(this, t), (this.string = e);
      }
      return (
        (t.prototype.encode = function () {
          for (var t = "110", e = 0; e < this.string.length; e++) {
            var n = parseInt(this.string[e]),
              i = n.toString(2);
            i = r(i, 4 - i.length);
            for (var o = 0; o < i.length; o++) t += "0" == i[o] ? "100" : "110";
          }
          return (
            (t += "1001"),
            {
              data: t,
              text: this.string,
            }
          );
        }),
        (t.prototype.valid = function () {
          return this.string.search(/^[0-9]+$/) !== -1;
        }),
        t
      );
    })();
    e["default"] = i;
  },
  function (t, e) {
    "use strict";
    function n(t, e) {
      var n,
        r = {};
      for (n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
      for (n in e)
        e.hasOwnProperty(n) && "undefined" != typeof e[n] && (r[n] = e[n]);
      return r;
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e["default"] = n);
  },
  function (t, e) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var r = (function () {
      function t(e) {
        n(this, t), (this.bytes = []);
        for (var r = 0; r < e.length; ++r) this.bytes.push(e.charCodeAt(r));
        (this.string = e.substring(1)),
          (this.encodings = [
            740,
            644,
            638,
            176,
            164,
            100,
            224,
            220,
            124,
            608,
            604,
            572,
            436,
            244,
            230,
            484,
            260,
            254,
            650,
            628,
            614,
            764,
            652,
            902,
            868,
            836,
            830,
            892,
            844,
            842,
            752,
            734,
            590,
            304,
            112,
            94,
            416,
            128,
            122,
            672,
            576,
            570,
            464,
            422,
            134,
            496,
            478,
            142,
            910,
            678,
            582,
            768,
            762,
            774,
            880,
            862,
            814,
            896,
            890,
            818,
            914,
            602,
            930,
            328,
            292,
            200,
            158,
            68,
            62,
            424,
            412,
            232,
            218,
            76,
            74,
            554,
            616,
            978,
            556,
            146,
            340,
            212,
            182,
            508,
            268,
            266,
            956,
            940,
            938,
            758,
            782,
            974,
            400,
            310,
            118,
            512,
            506,
            960,
            954,
            502,
            518,
            886,
            966,
            668,
            680,
            692,
            5379,
          ]);
      }
      return (
        (t.prototype.encode = function () {
          var t,
            e = this.bytes,
            n = e.shift() - 105;
          return (
            103 === n
              ? (t = this.nextA(e, 1))
              : 104 === n
              ? (t = this.nextB(e, 1))
              : 105 === n && (t = this.nextC(e, 1)),
            {
              text: this.string.replace(/[^\x20-\x7E]/g, ""),
              data:
                this.getEncoding(n) +
                t.result +
                this.getEncoding((t.checksum + n) % 103) +
                this.getEncoding(106),
            }
          );
        }),
        (t.prototype.getEncoding = function (t) {
          return this.encodings[t] ? (this.encodings[t] + 1e3).toString(2) : "";
        }),
        (t.prototype.valid = function () {
          return this.string.search(/^[\x00-\x7F\xC8-\xD3]+$/) !== -1;
        }),
        (t.prototype.nextA = function (t, e) {
          if (t.length <= 0)
            return {
              result: "",
              checksum: 0,
            };
          var n, r;
          if (t[0] >= 200)
            (r = t[0] - 105),
              t.shift(),
              99 === r
                ? (n = this.nextC(t, e + 1))
                : 100 === r
                ? (n = this.nextB(t, e + 1))
                : 98 === r
                ? ((t[0] = t[0] > 95 ? t[0] - 96 : t[0]),
                  (n = this.nextA(t, e + 1)))
                : (n = this.nextA(t, e + 1));
          else {
            var i = t[0];
            (r = i < 32 ? i + 64 : i - 32),
              t.shift(),
              (n = this.nextA(t, e + 1));
          }
          var o = this.getEncoding(r),
            s = r * e;
          return {
            result: o + n.result,
            checksum: s + n.checksum,
          };
        }),
        (t.prototype.nextB = function (t, e) {
          if (t.length <= 0)
            return {
              result: "",
              checksum: 0,
            };
          var n, r;
          t[0] >= 200
            ? ((r = t[0] - 105),
              t.shift(),
              99 === r
                ? (n = this.nextC(t, e + 1))
                : 101 === r
                ? (n = this.nextA(t, e + 1))
                : 98 === r
                ? ((t[0] = t[0] < 32 ? t[0] + 96 : t[0]),
                  (n = this.nextB(t, e + 1)))
                : (n = this.nextB(t, e + 1)))
            : ((r = t[0] - 32), t.shift(), (n = this.nextB(t, e + 1)));
          var i = this.getEncoding(r),
            o = r * e;
          return {
            result: i + n.result,
            checksum: o + n.checksum,
          };
        }),
        (t.prototype.nextC = function (t, e) {
          if (t.length <= 0)
            return {
              result: "",
              checksum: 0,
            };
          var n, r;
          t[0] >= 200
            ? ((r = t[0] - 105),
              t.shift(),
              (n =
                100 === r
                  ? this.nextB(t, e + 1)
                  : 101 === r
                  ? this.nextA(t, e + 1)
                  : this.nextC(t, e + 1)))
            : ((r = 10 * (t[0] - 48) + t[1] - 48),
              t.shift(),
              t.shift(),
              (n = this.nextC(t, e + 1)));
          var i = this.getEncoding(r),
            o = r * e;
          return {
            result: i + n.result,
            checksum: o + n.checksum,
          };
        }),
        t
      );
    })();
    e["default"] = r;
  },
  function (t, e) {
    "use strict";
    function n(t) {
      for (var e = 0, n = 0; n < t.length; n++) {
        var r = parseInt(t[n]);
        e +=
          (n + t.length) % 2 === 0
            ? r
            : ((2 * r) % 10) + Math.floor((2 * r) / 10);
      }
      return (10 - (e % 10)) % 10;
    }
    function r(t) {
      for (var e = 0, n = [2, 3, 4, 5, 6, 7], r = 0; r < t.length; r++) {
        var i = parseInt(t[t.length - 1 - r]);
        e += n[r % n.length] * i;
      }
      return (11 - (e % 11)) % 11;
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.mod10 = n),
      (e.mod11 = r);
  },
  function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var n = {
      width: 2,
      height: 100,
      format: "auto",
      displayValue: !0,
      fontOptions: "",
      font: "monospace",
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
    e["default"] = n;
  },
  function (t, e) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(t, e) {
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
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var o = (function (t) {
        function e(i, o) {
          n(this, e);
          var s = r(this, t.call(this));
          return (
            (s.name = "InvalidInputException"),
            (s.symbology = i),
            (s.input = o),
            (s.message =
              '"' + s.input + '" is not a valid input for ' + s.symbology),
            s
          );
        }
        return i(e, t), e;
      })(Error),
      s = (function (t) {
        function e() {
          n(this, e);
          var i = r(this, t.call(this));
          return (
            (i.name = "InvalidElementException"),
            (i.message = "Not supported type to render on"),
            i
          );
        }
        return i(e, t), e;
      })(Error),
      a = (function (t) {
        function e() {
          n(this, e);
          var i = r(this, t.call(this));
          return (
            (i.name = "NoElementException"),
            (i.message = "No element to render on."),
            i
          );
        }
        return i(e, t), e;
      })(Error);
    (e.InvalidInputException = o),
      (e.InvalidElementException = s),
      (e.NoElementException = a);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
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
    function s(t, e, n) {
      for (var r = 0; r < t.length; r++) {
        var s = t[r],
          a = (0, h["default"])(e, s.options),
          u = c(s.text, a, n),
          f = s.data.length * a.width;
        (s.width = Math.ceil(Math.max(u, f))),
          (s.height = i(s, a)),
          (s.barcodePadding = o(u, f, a));
      }
    }
    function a(t) {
      for (var e = 0, n = 0; n < t.length; n++) e += t[n].width;
      return e;
    }
    function u(t) {
      for (var e = 0, n = 0; n < t.length; n++)
        t[n].height > e && (e = t[n].height);
      return e;
    }
    function c(t, e, n) {
      var r;
      (r =
        "undefined" == typeof n
          ? document.createElement("canvas").getContext("2d")
          : n),
        (r.font = e.fontOptions + " " + e.fontSize + "px " + e.font);
      var i = r.measureText(t).width;
      return i;
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.getTotalWidthOfEncodings = e.calculateEncodingAttributes = e.getBarcodePadding = e.getEncodingHeight = e.getMaximumHeightOfEncodings = void 0);
    var f = n(2),
      h = r(f);
    (e.getMaximumHeightOfEncodings = u),
      (e.getEncodingHeight = i),
      (e.getBarcodePadding = o),
      (e.calculateEncodingAttributes = s),
      (e.getTotalWidthOfEncodings = a);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var r = n(18),
      i = n(17),
      o = n(24),
      s = n(27),
      a = n(26),
      u = n(32),
      c = n(33),
      f = n(25);
    e["default"] = {
      CODE39: r.CODE39,
      CODE128: i.CODE128,
      CODE128A: i.CODE128A,
      CODE128B: i.CODE128B,
      CODE128C: i.CODE128C,
      EAN13: o.EAN13,
      EAN8: o.EAN8,
      EAN5: o.EAN5,
      EAN2: o.EAN2,
      UPC: o.UPC,
      ITF14: s.ITF14,
      ITF: a.ITF,
      MSI: u.MSI,
      MSI10: u.MSI10,
      MSI11: u.MSI11,
      MSI1010: u.MSI1010,
      MSI1110: u.MSI1110,
      pharmacode: c.pharmacode,
      GenericBarcode: f.GenericBarcode,
    };
  },
  function (t, e) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var r = (function () {
      function t(e) {
        n(this, t), (this.api = e);
      }
      return (
        (t.prototype.handleCatch = function (t) {
          if ("InvalidInputException" !== t.name) throw t;
          if (this.api._options.valid === this.api._defaults.valid)
            throw t.message;
          this.api._options.valid(!1), (this.api.render = function () {});
        }),
        (t.prototype.wrapBarcodeCall = function (t) {
          try {
            var e = t.apply(void 0, arguments);
            return this.api._options.valid(!0), e;
          } catch (n) {
            return this.handleCatch(n), this.api;
          }
        }),
        t
      );
    })();
    e["default"] = r;
  },
  function (t, e) {
    "use strict";
    function n(t) {
      return (
        (t.marginTop = t.marginTop || t.margin),
        (t.marginBottom = t.marginBottom || t.margin),
        (t.marginRight = t.marginRight || t.margin),
        (t.marginLeft = t.marginLeft || t.margin),
        t
      );
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e["default"] = n);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t) {
      if ("string" == typeof t) return o(t);
      if (Array.isArray(t)) {
        for (var e = [], n = 0; n < t.length; n++) e.push(i(t[n]));
        return e;
      }
      if (
        "undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLImageElement
      )
        return s(t);
      if ("undefined" != typeof SVGElement && t instanceof SVGElement)
        return {
          element: t,
          options: (0, u["default"])(t),
          renderer: (0, c.getRendererClass)("svg"),
        };
      if (
        "undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLCanvasElement
      )
        return {
          element: t,
          options: (0, u["default"])(t),
          renderer: (0, c.getRendererClass)("canvas"),
        };
      if (t.getContext)
        return {
          element: t,
          renderer: (0, c.getRendererClass)("canvas"),
        };
      throw new f.InvalidElementException();
    }
    function o(t) {
      var e = document.querySelectorAll(t);
      if (0 === e.length) throw new f.NoElementException();
      for (var n = [], r = 0; r < e.length; r++) n.push(i(e[r]));
      return n;
    }
    function s(t) {
      var e = document.createElement("canvas");
      return {
        element: e,
        options: (0, u["default"])(t),
        renderer: (0, c.getRendererClass)("canvas"),
        afterRender: function () {
          t.setAttribute("src", e.toDataURL());
        },
      };
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a = n(34),
      u = r(a),
      c = n(37),
      f = n(6);
    e["default"] = i;
  },
  function (t, e) {
    "use strict";
    function n(t) {
      function e(t) {
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e(t[r]);
        else (t.text = t.text || ""), (t.data = t.data || ""), n.push(t);
      }
      var n = [];
      return e(t), n;
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e["default"] = n);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
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
    function s(t, e) {
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
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a = n(3),
      u = r(a),
      c = (function (t) {
        function e(n) {
          return (
            i(this, e), o(this, t.call(this, String.fromCharCode(208) + n))
          );
        }
        return (
          s(e, t),
          (e.prototype.valid = function () {
            return this.string.search(/^[\x00-\x5F\xC8-\xCF]+$/) !== -1;
          }),
          e
        );
      })(u["default"]);
    e["default"] = c;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
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
    function s(t, e) {
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
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a = n(3),
      u = r(a),
      c = (function (t) {
        function e(n) {
          return (
            i(this, e), o(this, t.call(this, String.fromCharCode(209) + n))
          );
        }
        return (
          s(e, t),
          (e.prototype.valid = function () {
            return this.string.search(/^[\x20-\x7F\xC8-\xCF]+$/) !== -1;
          }),
          e
        );
      })(u["default"]);
    e["default"] = c;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
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
    function s(t, e) {
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
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a = n(3),
      u = r(a),
      c = (function (t) {
        function e(n) {
          return (
            i(this, e), o(this, t.call(this, String.fromCharCode(210) + n))
          );
        }
        return (
          s(e, t),
          (e.prototype.valid = function () {
            return this.string.search(/^(\xCF*[0-9]{2}\xCF*)+$/) !== -1;
          }),
          e
        );
      })(u["default"]);
    e["default"] = c;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
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
    function s(t, e) {
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
        n = t.match(/^[\x00-\x5F\xC8-\xCF]*/)[0].length,
        r = t.match(/^[\x20-\x7F\xC8-\xCF]*/)[0].length,
        i = t.match(/^(\xCF*[0-9]{2}\xCF*)*/)[0].length;
      return (
        (e =
          i >= 2
            ? String.fromCharCode(210) + f(t)
            : n > r
            ? String.fromCharCode(208) + u(t)
            : String.fromCharCode(209) + c(t)),
        (e = e.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, function (t, e) {
          return String.fromCharCode(203) + e;
        }))
      );
    }
    function u(t) {
      var e = t.match(/^([\x00-\x5F\xC8-\xCF]+?)(([0-9]{2}){2,})([^0-9]|$)/);
      if (e)
        return e[1] + String.fromCharCode(204) + f(t.substring(e[1].length));
      var n = t.match(/^[\x00-\x5F\xC8-\xCF]+/);
      return n[0].length === t.length
        ? t
        : n[0] + String.fromCharCode(205) + c(t.substring(n[0].length));
    }
    function c(t) {
      var e = t.match(/^([\x20-\x7F\xC8-\xCF]+?)(([0-9]{2}){2,})([^0-9]|$)/);
      if (e)
        return e[1] + String.fromCharCode(204) + f(t.substring(e[1].length));
      var n = t.match(/^[\x20-\x7F\xC8-\xCF]+/);
      return n[0].length === t.length
        ? t
        : n[0] + String.fromCharCode(206) + u(t.substring(n[0].length));
    }
    function f(t) {
      var e = t.match(/^(\xCF*[0-9]{2}\xCF*)+/)[0],
        n = e.length;
      if (n === t.length) return t;
      t = t.substring(n);
      var r = t.match(/^[\x00-\x5F\xC8-\xCF]*/)[0].length,
        i = t.match(/^[\x20-\x7F\xC8-\xCF]*/)[0].length;
      return r >= i
        ? e + String.fromCharCode(206) + u(t)
        : e + String.fromCharCode(205) + c(t);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var h = n(3),
      l = r(h),
      d = (function (t) {
        function e(n) {
          if ((i(this, e), n.search(/^[\x00-\x7F\xC8-\xD3]+$/) !== -1))
            var r = o(this, t.call(this, a(n)));
          else var r = o(this, t.call(this, n));
          return o(r);
        }
        return s(e, t), e;
      })(l["default"]);
    e["default"] = d;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.CODE128C = e.CODE128B = e.CODE128A = e.CODE128 = void 0);
    var i = n(16),
      o = r(i),
      s = n(13),
      a = r(s),
      u = n(14),
      c = r(u),
      f = n(15),
      h = r(f);
    (e.CODE128 = o["default"]),
      (e.CODE128A = a["default"]),
      (e.CODE128B = c["default"]),
      (e.CODE128C = h["default"]);
  },
  function (t, e) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var r = (function () {
      function t(e, r) {
        n(this, t),
          (this.string = e.toUpperCase()),
          (this.mod43Enabled = r.mod43 || !1),
          (this.characters = [
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
          ]),
          (this.encodings = [
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
          ]);
      }
      return (
        (t.prototype.getEncoding = function (t) {
          return this.getBinary(this.characterValue(t));
        }),
        (t.prototype.getBinary = function (t) {
          return this.encodings[t].toString(2);
        }),
        (t.prototype.getCharacter = function (t) {
          return this.characters[t];
        }),
        (t.prototype.characterValue = function (t) {
          return this.characters.indexOf(t);
        }),
        (t.prototype.encode = function () {
          for (
            var t = this.string, e = this.getEncoding("*"), n = 0;
            n < this.string.length;
            n++
          )
            e += this.getEncoding(this.string[n]) + "0";
          if (this.mod43Enabled) {
            for (var r = 0, i = 0; i < this.string.length; i++)
              r += this.characterValue(this.string[i]);
            (r %= 43),
              (e += this.getBinary(r) + "0"),
              (t += this.getCharacter(r));
          }
          return (
            (e += this.getEncoding("*")),
            {
              data: e,
              text: t,
            }
          );
        }),
        (t.prototype.valid = function () {
          return this.string.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
        }),
        t
      );
    })();
    e.CODE39 = r;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var o = n(0),
      s = r(o),
      a = (function () {
        function t(e, n) {
          i(this, t),
            e.search(/^[0-9]{12}$/) !== -1
              ? (this.string = e + this.checksum(e))
              : (this.string = e),
            (this.displayValue = n.displayValue),
            (this.structure = [
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
            ]),
            n.fontSize > 10 * n.width
              ? (this.fontSize = 10 * n.width)
              : (this.fontSize = n.fontSize),
            (this.guardHeight = n.height + this.fontSize / 2 + n.textMargin),
            (this.lastChar = n.lastChar);
        }
        return (
          (t.prototype.valid = function () {
            return (
              this.string.search(/^[0-9]{13}$/) !== -1 &&
              this.string[12] == this.checksum(this.string)
            );
          }),
          (t.prototype.encode = function () {
            var t = new s["default"](),
              e = [],
              n = this.structure[this.string[0]],
              r = this.string.substr(1, 6),
              i = this.string.substr(7, 6);
            return (
              this.displayValue &&
                e.push({
                  data: "000000000000",
                  text: this.string[0],
                  options: {
                    textAlign: "left",
                    fontSize: this.fontSize,
                  },
                }),
              e.push({
                data: "101",
                options: {
                  height: this.guardHeight,
                },
              }),
              e.push({
                data: t.encode(r, n),
                text: r,
                options: {
                  fontSize: this.fontSize,
                },
              }),
              e.push({
                data: "01010",
                options: {
                  height: this.guardHeight,
                },
              }),
              e.push({
                data: t.encode(i, "RRRRRR"),
                text: i,
                options: {
                  fontSize: this.fontSize,
                },
              }),
              e.push({
                data: "101",
                options: {
                  height: this.guardHeight,
                },
              }),
              this.lastChar &&
                this.displayValue &&
                (e.push({
                  data: "00",
                }),
                e.push({
                  data: "00000",
                  text: this.lastChar,
                  options: {
                    fontSize: this.fontSize,
                  },
                })),
              e
            );
          }),
          (t.prototype.checksum = function (t) {
            var e,
              n = 0;
            for (e = 0; e < 12; e += 2) n += parseInt(t[e]);
            for (e = 1; e < 12; e += 2) n += 3 * parseInt(t[e]);
            return (10 - (n % 10)) % 10;
          }),
          t
        );
      })();
    e["default"] = a;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var o = n(0),
      s = r(o),
      a = (function () {
        function t(e) {
          i(this, t),
            (this.string = e),
            (this.structure = ["LL", "LG", "GL", "GG"]);
        }
        return (
          (t.prototype.valid = function () {
            return this.string.search(/^[0-9]{2}$/) !== -1;
          }),
          (t.prototype.encode = function () {
            var t = new s["default"](),
              e = this.structure[parseInt(this.string) % 4],
              n = "1011";
            return (
              (n += t.encode(this.string, e, "01")),
              {
                data: n,
                text: this.string,
              }
            );
          }),
          t
        );
      })();
    e["default"] = a;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var o = n(0),
      s = r(o),
      a = (function () {
        function t(e) {
          i(this, t),
            (this.string = e),
            (this.structure = [
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
            ]);
        }
        return (
          (t.prototype.valid = function () {
            return this.string.search(/^[0-9]{5}$/) !== -1;
          }),
          (t.prototype.encode = function () {
            var t = new s["default"](),
              e = this.checksum(),
              n = "1011";
            return (
              (n += t.encode(this.string, this.structure[e], "01")),
              {
                data: n,
                text: this.string,
              }
            );
          }),
          (t.prototype.checksum = function () {
            var t = 0;
            return (
              (t += 3 * parseInt(this.string[0])),
              (t += 9 * parseInt(this.string[1])),
              (t += 3 * parseInt(this.string[2])),
              (t += 9 * parseInt(this.string[3])),
              (t += 3 * parseInt(this.string[4])),
              t % 10
            );
          }),
          t
        );
      })();
    e["default"] = a;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var o = n(0),
      s = r(o),
      a = (function () {
        function t(e) {
          i(this, t),
            e.search(/^[0-9]{7}$/) !== -1
              ? (this.string = e + this.checksum(e))
              : (this.string = e);
        }
        return (
          (t.prototype.valid = function () {
            return (
              this.string.search(/^[0-9]{8}$/) !== -1 &&
              this.string[7] == this.checksum(this.string)
            );
          }),
          (t.prototype.encode = function () {
            var t = new s["default"](),
              e = "",
              n = this.string.substr(0, 4),
              r = this.string.substr(4, 4);
            return (
              (e += t.startBin),
              (e += t.encode(n, "LLLL")),
              (e += t.middleBin),
              (e += t.encode(r, "RRRR")),
              (e += t.endBin),
              {
                data: e,
                text: this.string,
              }
            );
          }),
          (t.prototype.checksum = function (t) {
            var e,
              n = 0;
            for (e = 0; e < 7; e += 2) n += 3 * parseInt(t[e]);
            for (e = 1; e < 7; e += 2) n += parseInt(t[e]);
            return (10 - (n % 10)) % 10;
          }),
          t
        );
      })();
    e["default"] = a;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var o = n(0),
      s = r(o),
      a = (function () {
        function t(e, n) {
          i(this, t),
            e.search(/^[0-9]{11}$/) !== -1
              ? (this.string = e + this.checksum(e))
              : (this.string = e),
            (this.displayValue = n.displayValue),
            n.fontSize > 10 * n.width
              ? (this.fontSize = 10 * n.width)
              : (this.fontSize = n.fontSize),
            (this.guardHeight = n.height + this.fontSize / 2 + n.textMargin);
        }
        return (
          (t.prototype.valid = function () {
            return (
              this.string.search(/^[0-9]{12}$/) !== -1 &&
              this.string[11] == this.checksum(this.string)
            );
          }),
          (t.prototype.encode = function () {
            var t = new s["default"](),
              e = [];
            return (
              this.displayValue &&
                e.push({
                  data: "00000000",
                  text: this.string[0],
                  options: {
                    textAlign: "left",
                    fontSize: this.fontSize,
                  },
                }),
              e.push({
                data: "101" + t.encode(this.string[0], "L"),
                options: {
                  height: this.guardHeight,
                },
              }),
              e.push({
                data: t.encode(this.string.substr(1, 5), "LLLLL"),
                text: this.string.substr(1, 5),
                options: {
                  fontSize: this.fontSize,
                },
              }),
              e.push({
                data: "01010",
                options: {
                  height: this.guardHeight,
                },
              }),
              e.push({
                data: t.encode(this.string.substr(6, 5), "RRRRR"),
                text: this.string.substr(6, 5),
                options: {
                  fontSize: this.fontSize,
                },
              }),
              e.push({
                data: t.encode(this.string[11], "R") + "101",
                options: {
                  height: this.guardHeight,
                },
              }),
              this.displayValue &&
                e.push({
                  data: "00000000",
                  text: this.string[11],
                  options: {
                    textAlign: "right",
                    fontSize: this.fontSize,
                  },
                }),
              e
            );
          }),
          (t.prototype.checksum = function (t) {
            var e,
              n = 0;
            for (e = 1; e < 11; e += 2) n += parseInt(t[e]);
            for (e = 0; e < 11; e += 2) n += 3 * parseInt(t[e]);
            return (10 - (n % 10)) % 10;
          }),
          t
        );
      })();
    e["default"] = a;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.UPC = e.EAN2 = e.EAN5 = e.EAN8 = e.EAN13 = void 0);
    var i = n(19),
      o = r(i),
      s = n(22),
      a = r(s),
      u = n(21),
      c = r(u),
      f = n(20),
      h = r(f),
      l = n(23),
      d = r(l);
    (e.EAN13 = o["default"]),
      (e.EAN8 = a["default"]),
      (e.EAN5 = c["default"]),
      (e.EAN2 = h["default"]),
      (e.UPC = d["default"]);
  },
  function (t, e) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var r = (function () {
      function t(e) {
        n(this, t), (this.string = e);
      }
      return (
        (t.prototype.encode = function () {
          return {
            data: "10101010101010101010101010101010101010101",
            text: this.string,
          };
        }),
        (t.prototype.valid = function () {
          return !0;
        }),
        t
      );
    })();
    e.GenericBarcode = r;
  },
  function (t, e) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var r = (function () {
      function t(e) {
        n(this, t),
          (this.string = e),
          (this.binaryRepresentation = {
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
          });
      }
      return (
        (t.prototype.valid = function () {
          return this.string.search(/^([0-9]{2})+$/) !== -1;
        }),
        (t.prototype.encode = function () {
          for (var t = "1010", e = 0; e < this.string.length; e += 2)
            t += this.calculatePair(this.string.substr(e, 2));
          return (
            (t += "11101"),
            {
              data: t,
              text: this.string,
            }
          );
        }),
        (t.prototype.calculatePair = function (t) {
          for (
            var e = "",
              n = this.binaryRepresentation[t[0]],
              r = this.binaryRepresentation[t[1]],
              i = 0;
            i < 5;
            i++
          )
            (e += "1" == n[i] ? "111" : "1"), (e += "1" == r[i] ? "000" : "0");
          return e;
        }),
        t
      );
    })();
    e.ITF = r;
  },
  function (t, e) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var r = (function () {
      function t(e) {
        n(this, t),
          (this.string = e),
          e.search(/^[0-9]{13}$/) !== -1 && (this.string += this.checksum(e)),
          (this.binaryRepresentation = {
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
          });
      }
      return (
        (t.prototype.valid = function () {
          return (
            this.string.search(/^[0-9]{14}$/) !== -1 &&
            this.string[13] == this.checksum()
          );
        }),
        (t.prototype.encode = function () {
          for (var t = "1010", e = 0; e < 14; e += 2)
            t += this.calculatePair(this.string.substr(e, 2));
          return (
            (t += "11101"),
            {
              data: t,
              text: this.string,
            }
          );
        }),
        (t.prototype.calculatePair = function (t) {
          for (
            var e = "",
              n = this.binaryRepresentation[t[0]],
              r = this.binaryRepresentation[t[1]],
              i = 0;
            i < 5;
            i++
          )
            (e += "1" == n[i] ? "111" : "1"), (e += "1" == r[i] ? "000" : "0");
          return e;
        }),
        (t.prototype.checksum = function () {
          for (var t = 0, e = 0; e < 13; e++)
            t += parseInt(this.string[e]) * (3 - (e % 2) * 2);
          return 10 * Math.ceil(t / 10) - t;
        }),
        t
      );
    })();
    e.ITF14 = r;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
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
    function s(t, e) {
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
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a = n(1),
      u = r(a),
      c = n(4),
      f = (function (t) {
        function e(n) {
          i(this, e);
          var r = o(this, t.call(this, n));
          return (r.string += (0, c.mod10)(r.string)), r;
        }
        return s(e, t), e;
      })(u["default"]);
    e["default"] = f;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
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
    function s(t, e) {
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
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a = n(1),
      u = r(a),
      c = n(4),
      f = (function (t) {
        function e(n) {
          i(this, e);
          var r = o(this, t.call(this, n));
          return (
            (r.string += (0, c.mod10)(r.string)),
            (r.string += (0, c.mod10)(r.string)),
            r
          );
        }
        return s(e, t), e;
      })(u["default"]);
    e["default"] = f;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
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
    function s(t, e) {
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
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a = n(1),
      u = r(a),
      c = n(4),
      f = (function (t) {
        function e(n) {
          i(this, e);
          var r = o(this, t.call(this, n));
          return (r.string += (0, c.mod11)(r.string)), r;
        }
        return s(e, t), e;
      })(u["default"]);
    e["default"] = f;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
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
    function s(t, e) {
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
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var a = n(1),
      u = r(a),
      c = n(4),
      f = (function (t) {
        function e(n) {
          i(this, e);
          var r = o(this, t.call(this, n));
          return (
            (r.string += (0, c.mod11)(r.string)),
            (r.string += (0, c.mod10)(r.string)),
            r
          );
        }
        return s(e, t), e;
      })(u["default"]);
    e["default"] = f;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.MSI1110 = e.MSI1010 = e.MSI11 = e.MSI10 = e.MSI = void 0);
    var i = n(1),
      o = r(i),
      s = n(28),
      a = r(s),
      u = n(30),
      c = r(u),
      f = n(29),
      h = r(f),
      l = n(31),
      d = r(l);
    (e.MSI = o["default"]),
      (e.MSI10 = a["default"]),
      (e.MSI11 = c["default"]),
      (e.MSI1010 = h["default"]),
      (e.MSI1110 = d["default"]);
  },
  function (t, e) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var r = (function () {
      function t(e) {
        n(this, t), (this.number = parseInt(e, 10));
      }
      return (
        (t.prototype.encode = function () {
          for (var t = this.number, e = ""; !isNaN(t) && 0 != t; )
            t % 2 === 0
              ? ((e = "11100" + e), (t = (t - 2) / 2))
              : ((e = "100" + e), (t = (t - 1) / 2));
          return (
            (e = e.slice(0, -2)),
            {
              data: e,
              text: this.number + "",
            }
          );
        }),
        (t.prototype.valid = function () {
          return this.number >= 3 && this.number <= 131070;
        }),
        t
      );
    })();
    e.pharmacode = r;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t) {
      var e = {};
      for (var n in u["default"])
        u["default"].hasOwnProperty(n) &&
          (t.hasAttribute("jsbarcode-" + n.toLowerCase()) &&
            (e[n] = t.getAttribute("jsbarcode-" + n.toLowerCase())),
          t.hasAttribute("data-" + n.toLowerCase()) &&
            (e[n] = t.getAttribute("data-" + n.toLowerCase())));
      return (
        (e.value =
          t.getAttribute("jsbarcode-value") || t.getAttribute("data-value")),
        (e = (0, s["default"])(e))
      );
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var o = n(35),
      s = r(o),
      a = n(5),
      u = r(a);
    e["default"] = i;
  },
  function (t, e) {
    "use strict";
    function n(t) {
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
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e["default"] = n);
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var o = n(2),
      s = r(o),
      a = n(7),
      u = (function () {
        function t(e, n, r) {
          i(this, t),
            (this.canvas = e),
            (this.encodings = n),
            (this.options = r);
        }
        return (
          (t.prototype.render = function () {
            if (!this.canvas.getContext)
              throw new Error("The browser does not support canvas.");
            this.prepareCanvas();
            for (var t = 0; t < this.encodings.length; t++) {
              var e = (0, s["default"])(
                this.options,
                this.encodings[t].options
              );
              this.drawCanvasBarcode(e, this.encodings[t]),
                this.drawCanvasText(e, this.encodings[t]),
                this.moveCanvasDrawing(this.encodings[t]);
            }
            this.restoreCanvas();
          }),
          (t.prototype.prepareCanvas = function () {
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
          }),
          (t.prototype.drawCanvasBarcode = function (t, e) {
            var n,
              r = this.canvas.getContext("2d"),
              i = e.data;
            (n =
              "top" == t.textPosition
                ? t.marginTop + t.fontSize + t.textMargin
                : t.marginTop),
              (r.fillStyle = t.lineColor);
            for (var o = 0; o < i.length; o++) {
              var s = o * t.width + e.barcodePadding;
              "1" === i[o]
                ? r.fillRect(s, n, t.width, t.height)
                : i[o] && r.fillRect(s, n, t.width, t.height * i[o]);
            }
          }),
          (t.prototype.drawCanvasText = function (t, e) {
            var n = this.canvas.getContext("2d"),
              r = t.fontOptions + " " + t.fontSize + "px " + t.font;
            if (t.displayValue) {
              var i, o;
              (o =
                "top" == t.textPosition
                  ? t.marginTop + t.fontSize - t.textMargin
                  : t.height + t.textMargin + t.marginTop + t.fontSize),
                (n.font = r),
                "left" == t.textAlign || e.barcodePadding > 0
                  ? ((i = 0), (n.textAlign = "left"))
                  : "right" == t.textAlign
                  ? ((i = e.width - 1), (n.textAlign = "right"))
                  : ((i = e.width / 2), (n.textAlign = "center")),
                n.fillText(e.text, i, o);
            }
          }),
          (t.prototype.moveCanvasDrawing = function (t) {
            var e = this.canvas.getContext("2d");
            e.translate(t.width, 0);
          }),
          (t.prototype.restoreCanvas = function () {
            var t = this.canvas.getContext("2d");
            t.restore();
          }),
          t
        );
      })();
    e["default"] = u;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t) {
      switch (t) {
        case "canvas":
          return s["default"];
        case "svg":
          return u["default"];
        default:
          throw new Error("Invalid rederer");
      }
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    }),
      (e.getRendererClass = void 0);
    var o = n(36),
      s = r(o),
      a = n(38),
      u = r(a);
    e.getRendererClass = i;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e, n) {
      var r = document.createElementNS(h, "g");
      return (
        r.setAttribute("transform", "translate(" + t + ", " + e + ")"),
        n.appendChild(r),
        r
      );
    }
    function s(t, e) {
      t.setAttribute("style", "fill:" + e.lineColor + ";");
    }
    function a(t, e, n, r, i) {
      var o = document.createElementNS(h, "rect");
      o.setAttribute("x", t),
        o.setAttribute("y", e),
        o.setAttribute("width", n),
        o.setAttribute("height", r),
        i.appendChild(o);
    }
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
    var u = n(2),
      c = r(u),
      f = n(7),
      h = "http://www.w3.org/2000/svg",
      l = (function () {
        function t(e, n, r) {
          i(this, t), (this.svg = e), (this.encodings = n), (this.options = r);
        }
        return (
          (t.prototype.render = function () {
            var t = this.options.marginLeft;
            this.prepareSVG();
            for (var e = 0; e < this.encodings.length; e++) {
              var n = this.encodings[e],
                r = (0, c["default"])(this.options, n.options),
                i = o(t, r.marginTop, this.svg);
              s(i, r),
                this.drawSvgBarcode(i, r, n),
                this.drawSVGText(i, r, n),
                (t += n.width);
            }
          }),
          (t.prototype.prepareSVG = function () {
            for (; this.svg.firstChild; )
              this.svg.removeChild(this.svg.firstChild);
            (0, f.calculateEncodingAttributes)(this.encodings, this.options);
            var t = (0, f.getTotalWidthOfEncodings)(this.encodings),
              e = (0, f.getMaximumHeightOfEncodings)(this.encodings),
              n = t + this.options.marginLeft + this.options.marginRight;
            this.setSvgAttributes(n, e);
          }),
          (t.prototype.drawSvgBarcode = function (t, e, n) {
            var r,
              i = n.data;
            r = "top" == e.textPosition ? e.fontSize + e.textMargin : 0;
            for (var o = 0, s = 0, u = 0; u < i.length; u++)
              (s = u * e.width + n.barcodePadding),
                "1" === i[u]
                  ? o++
                  : o > 0 &&
                    (a(s - e.width * o, r, e.width * o, e.height, t), (o = 0));
            o > 0 && a(s - e.width * (o - 1), r, e.width * o, e.height, t);
          }),
          (t.prototype.drawSVGText = function (t, e, n) {
            var r = document.createElementNS(h, "text");
            if (e.displayValue) {
              var i, o;
              r.setAttribute(
                "style",
                "font:" + e.fontOptions + " " + e.fontSize + "px " + e.font
              ),
                (o =
                  "top" == e.textPosition
                    ? e.fontSize - e.textMargin
                    : e.height + e.textMargin + e.fontSize),
                "left" == e.textAlign || n.barcodePadding > 0
                  ? ((i = 0), r.setAttribute("text-anchor", "start"))
                  : "right" == e.textAlign
                  ? ((i = n.width - 1), r.setAttribute("text-anchor", "end"))
                  : ((i = n.width / 2),
                    r.setAttribute("text-anchor", "middle")),
                r.setAttribute("x", i),
                r.setAttribute("y", o),
                r.appendChild(document.createTextNode(n.text)),
                t.appendChild(r);
            }
          }),
          (t.prototype.setSvgAttributes = function (t, e) {
            var n = this.svg;
            n.setAttribute("width", t + "px"),
              n.setAttribute("height", e + "px"),
              n.setAttribute("x", "0px"),
              n.setAttribute("y", "0px"),
              n.setAttribute("viewBox", "0 0 " + t + " " + e),
              n.setAttribute("xmlns", h),
              n.setAttribute("version", "1.1"),
              (n.style.transform = "translate(0,0)"),
              this.options.background &&
                (n.style.background = this.options.background);
          }),
          t
        );
      })();
    e["default"] = l;
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      return t && t.__esModule
        ? t
        : {
            default: t,
          };
    }
    function i(t, e) {
      C.prototype[e] = C.prototype[e.toUpperCase()] = C.prototype[
        e.toLowerCase()
      ] = function (n, r) {
        var i = this;
        return i._errorHandler.wrapBarcodeCall(function () {
          var s = (0, h["default"])(i._options, r),
            a = t[e],
            u = o(n, a, s);
          return i._encodings.push(u), i;
        });
      };
    }
    function o(t, e, n) {
      t = "" + t;
      var r = new e(t, n);
      if (!r.valid()) throw new x.InvalidInputException(r.constructor.name, t);
      var i = r.encode();
      i = (0, d["default"])(i);
      for (var o = 0; o < i.length; o++)
        i[o].options = (0, h["default"])(n, i[o].options);
      return i;
    }
    function s() {
      return c["default"].CODE128 ? "CODE128" : Object.keys(c["default"])[0];
    }
    function a(t, e, n) {
      e = (0, d["default"])(e);
      for (var r = 0; r < e.length; r++)
        (e[r].options = (0, h["default"])(n, e[r].options)),
          (0, g["default"])(e[r].options);
      (0, g["default"])(n);
      var i = t.renderer,
        o = new i(t.element, e, n);
      o.render(), t.afterRender && t.afterRender();
    }
    var u = n(8),
      c = r(u),
      f = n(2),
      h = r(f),
      l = n(12),
      d = r(l),
      p = n(10),
      g = r(p),
      y = n(11),
      v = r(y),
      b = n(9),
      m = r(b),
      x = n(6),
      _ = n(5),
      w = r(_),
      C = function () {},
      E = function (t, e, n) {
        var r = new C();
        if ("undefined" == typeof t)
          throw Error("No element to render on was provided.");
        return (
          (r._renderProperties = (0, v["default"])(t)),
          (r._encodings = []),
          (r._options = w["default"]),
          (r._errorHandler = new m["default"](r)),
          "undefined" != typeof e &&
            ((n = n || {}),
            n.format || (n.format = s()),
            r.options(n)[n.format](e, n).render()),
          r
        );
      };
    E.getModule = function (t) {
      return c["default"][t];
    };
    for (var O in c["default"])
      c["default"].hasOwnProperty(O) && i(c["default"], O);
    (C.prototype.options = function (t) {
      return (this._options = (0, h["default"])(this._options, t)), this;
    }),
      (C.prototype.blank = function (t) {
        var e = "0".repeat(t);
        return (
          this._encodings.push({
            data: e,
          }),
          this
        );
      }),
      (C.prototype.init = function () {
        Array.isArray(this._renderProperties) ||
          (this._renderProperties = [this._renderProperties]);
        var t;
        for (var e in this._renderProperties) {
          t = this._renderProperties[e];
          var n = (0, h["default"])(this._options, t.options);
          "auto" == n.format && (n.format = s());
          var r = n.value,
            i = c["default"][n.format.toUpperCase()],
            u = o(r, i, n);
          a(t, u, n);
        }
      }),
      (C.prototype.render = function () {
        if (Array.isArray(this._renderProperties))
          for (var t in this._renderProperties)
            a(this._renderProperties[t], this._encodings, this._options);
        else a(this._renderProperties, this._encodings, this._options);
        return this;
      }),
      (C.prototype._defaults = w["default"]),
      "undefined" != typeof window && (window.JsBarcode = E),
      "undefined" != typeof jQuery &&
        (jQuery.fn.JsBarcode = function (t, e) {
          var n = [];
          return (
            jQuery(this).each(function () {
              n.push(this);
            }),
            E(n, t, e)
          );
        }),
      (t.exports = E);
  },
]);
