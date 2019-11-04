"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "/dist", n(n.s = 0);
}([function (e, t, n) {
  "use strict";

  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  n.r(t);

  var o = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.employers = 0 != t.length ? t : ["Alex", "", "ludmila", "Viktor", "", "oleg", "iNna", "Ivan", "Alex", "Olga", " Ann"], this.employers = this.employers.filter(function (e) {
        return e.length > 0;
      }).map(function (e) {
        return e.toLocaleLowerCase().trim();
      });
    }

    var t, n, o;
    return t = e, (n = [{
      key: "getNames",
      value: function value() {
        return this.employers;
      }
    }, {
      key: "display",
      value: function value() {
        console.log("Employers Names: ", this.employers);
      }
    }]) && r(t.prototype, n), o && r(t, o), e;
  }();

  function i(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) {
          n[t] = e[t];
        }

        return n;
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }

  function a(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  var u = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [4e4, 5e3, 30400, 12e3],
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ["SRL", "PLO", "J&K"],
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ["RusAuto", "SBO"],
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.cash = t, this.eu = n, this.rus = r, this.other = o;
    }

    var t, n, r;
    return t = e, (n = [{
      key: "addSponsor",
      value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.length > 0 && (this.other.push(e), !0);
      }
    }, {
      key: "calcCash",
      value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.cash,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return e.forEach(function (e) {
          t += e;
        }), t;
      }
    }, {
      key: "getAllSponsors",
      value: function value() {
        return [].concat(i(this.eu), i(this.rus), i(this.other));
      }
    }]) && a(t.prototype, n), r && a(t, r), e;
  }();

  function l(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) {
          n[t] = e[t];
        }

        return n;
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }

  function s(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
          ;
        }
      } catch (e) {
        o = !0, i = e;
      } finally {
        try {
          r || null == u["return"] || u["return"]();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }();
  }

  function c(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  var f = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.owner,
          r = void 0 === n ? "" : n,
          o = t.director,
          i = void 0 === o ? "Victor" : o,
          a = t.cash,
          u = void 0 === a ? 0 : a,
          l = t.emp,
          s = void 0 === l ? [] : l,
          c = t.sponsors,
          f = void 0 === c ? [] : c;
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.owner = r, this.director = i, this.cash = u, this.emp = s, this.sponsors = f;
    }

    var t, n, r;
    return t = e, (n = [{
      key: "show",
      value: function value() {
        var e,
            t = s(this.sponsors, 1)[0];
        console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers:").concat(this.emp)), console.log("And we have a sponsors: "), (e = console).log.apply(e, l(this.sponsors)), console.log("Note. Be careful with ".concat(t, ". It's a huge risk."));
      }
    }]) && c(t.prototype, n), r && c(t, r), e;
  }(),
      h = new o(),
      p = new u();

  p.addSponsor("unexpected sponsor"), new f({
    owner: "Sam",
    cash: p.calcCash(),
    emp: h.getNames(),
    sponsors: p.getAllSponsors()
  }).show();
}]);