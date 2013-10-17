function aa() {
  return function(a) {
    return a
  }
}
function g(a) {
  return function() {
    return this[a]
  }
}
function p(a) {
  return function() {
    return a
  }
}
var q, s = this;
function ba(a) {
  a = a.split(".");
  for(var b = s, c;c = a.shift();) {
    if(null != b[c]) {
      b = b[c]
    }else {
      return null
    }
  }
  return b
}
function ca() {
}
function t(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function da(a) {
  return"array" == t(a)
}
function ea(a) {
  var b = t(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function u(a) {
  return"string" == typeof a
}
function fa(a) {
  return"function" == t(a)
}
function ga(a) {
  var b = typeof a;
  return"object" == b && null != a || "function" == b
}
function ha(a) {
  return a[ia] || (a[ia] = ++ka)
}
var ia = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ma(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function v(a, b, c) {
  v = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return v.apply(null, arguments)
}
function na(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var oa = Date.now || function() {
  return+new Date
};
function pa(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ka = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function qa(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, qa) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
pa(qa, Error);
qa.prototype.name = "CustomError";
function ra(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$");
    a = a.replace(/\%s/, d)
  }
  return a
}
function sa(a) {
  if(!ta.test(a)) {
    return a
  }
  -1 != a.indexOf("\x26") && (a = a.replace(ua, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(wa, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(xa, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(ya, "\x26quot;"));
  return a
}
var ua = /&/g, wa = /</g, xa = />/g, ya = /\"/g, ta = /[&<>\"]/;
function za(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;function Aa(a, b) {
  b.unshift(a);
  qa.call(this, ra.apply(null, b));
  b.shift();
  this.mg = a
}
pa(Aa, qa);
Aa.prototype.name = "AssertionError";
function Ba(a, b) {
  throw new Aa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var Ca = Array.prototype, Da = Ca.indexOf ? function(a, b, c) {
  return Ca.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(u(a)) {
    return u(b) && 1 == b.length ? a.indexOf(b, c) : -1
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ea = Ca.forEach ? function(a, b, c) {
  Ca.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
}, Fa = Ca.filter ? function(a, b, c) {
  return Ca.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, h = u(a) ? a.split("") : a, k = 0;k < d;k++) {
    if(k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (e[f++] = l)
    }
  }
  return e
}, Ga = Ca.some ? function(a, b, c) {
  return Ca.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && b.call(c, e[f], f, a)) {
      return!0
    }
  }
  return!1
};
function Ha(a, b) {
  var c = Da(a, b);
  0 <= c && Ca.splice.call(a, c, 1)
}
function Ia(a) {
  return Ca.concat.apply(Ca, arguments)
}
function Ja(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
;function Ka(a, b) {
  for(var c in a) {
    b.call(void 0, a[c], c, a)
  }
}
function La(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ma(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Na = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Oa(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < Na.length;f++) {
      c = Na[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function Pa(a, b) {
  null != a && this.append.apply(this, arguments)
}
Pa.prototype.hb = "";
Pa.prototype.set = function(a) {
  this.hb = "" + a
};
Pa.prototype.append = function(a, b, c) {
  this.hb += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.hb += arguments[d]
    }
  }
  return this
};
Pa.prototype.toString = g("hb");
var w = {}, Qa;
function Ra() {
  return Sa([w.$f, !0, w.af, !0, w.Rd, !1, w.gg, !1])
}
function x(a) {
  return null != a && !1 !== a
}
function Ta(a) {
  return x(a) ? !1 : !0
}
function z(a, b) {
  return a[t(null == b ? null : b)] ? !0 : a._ ? !0 : w.n ? !1 : null
}
function Ua(a) {
  return null == a ? null : a.constructor
}
function A(a, b) {
  var c = Ua(b), c = x(x(c) ? c.cc : c) ? c.bc : t(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function Va(a) {
  var b = a.bc;
  return x(b) ? b : "" + B(a)
}
function Wa(a) {
  return Array.prototype.slice.call(arguments)
}
var Ya = {}, Za = {};
function $a(a) {
  if(a ? a.L : a) {
    return a.L(a)
  }
  var b;
  b = $a[t(null == a ? null : a)];
  if(!b && (b = $a._, !b)) {
    throw A("ICounted.-count", a);
  }
  return b.call(null, a)
}
function ab(a) {
  if(a ? a.T : a) {
    return a.T(a)
  }
  var b;
  b = ab[t(null == a ? null : a)];
  if(!b && (b = ab._, !b)) {
    throw A("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a)
}
var bb = {};
function cb(a, b) {
  if(a ? a.R : a) {
    return a.R(a, b)
  }
  var c;
  c = cb[t(null == a ? null : a)];
  if(!c && (c = cb._, !c)) {
    throw A("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var db = {}, D = function() {
  function a(a, b, c) {
    if(a ? a.U : a) {
      return a.U(a, b, c)
    }
    var h;
    h = D[t(null == a ? null : a)];
    if(!h && (h = D._, !h)) {
      throw A("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.N : a) {
      return a.N(a, b)
    }
    var c;
    c = D[t(null == a ? null : a)];
    if(!c && (c = D._, !c)) {
      throw A("IIndexed.-nth", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}(), eb = {};
function E(a) {
  if(a ? a.Z : a) {
    return a.Z(a)
  }
  var b;
  b = E[t(null == a ? null : a)];
  if(!b && (b = E._, !b)) {
    throw A("ISeq.-first", a);
  }
  return b.call(null, a)
}
function F(a) {
  if(a ? a.aa : a) {
    return a.aa(a)
  }
  var b;
  b = F[t(null == a ? null : a)];
  if(!b && (b = F._, !b)) {
    throw A("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var fb = {}, gb = function() {
  function a(a, b, c) {
    if(a ? a.W : a) {
      return a.W(a, b, c)
    }
    var h;
    h = gb[t(null == a ? null : a)];
    if(!h && (h = gb._, !h)) {
      throw A("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.ea : a) {
      return a.ea(a, b)
    }
    var c;
    c = gb[t(null == a ? null : a)];
    if(!c && (c = gb._, !c)) {
      throw A("ILookup.-lookup", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}();
function hb(a, b, c) {
  if(a ? a.za : a) {
    return a.za(a, b, c)
  }
  var d;
  d = hb[t(null == a ? null : a)];
  if(!d && (d = hb._, !d)) {
    throw A("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var ib = {}, jb = {};
function kb(a) {
  if(a ? a.Gd : a) {
    return a.Gd(a)
  }
  var b;
  b = kb[t(null == a ? null : a)];
  if(!b && (b = kb._, !b)) {
    throw A("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function lb(a) {
  if(a ? a.Hd : a) {
    return a.Hd(a)
  }
  var b;
  b = lb[t(null == a ? null : a)];
  if(!b && (b = lb._, !b)) {
    throw A("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var mb = {};
function nb(a, b, c) {
  if(a ? a.Uc : a) {
    return a.Uc(a, b, c)
  }
  var d;
  d = nb[t(null == a ? null : a)];
  if(!d && (d = nb._, !d)) {
    throw A("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function ob(a) {
  if(a ? a.Fc : a) {
    return a.Fc(a)
  }
  var b;
  b = ob[t(null == a ? null : a)];
  if(!b && (b = ob._, !b)) {
    throw A("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var pb = {};
function qb(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  b = qb[t(null == a ? null : a)];
  if(!b && (b = qb._, !b)) {
    throw A("IMeta.-meta", a);
  }
  return b.call(null, a)
}
var rb = {};
function sb(a, b) {
  if(a ? a.P : a) {
    return a.P(a, b)
  }
  var c;
  c = sb[t(null == a ? null : a)];
  if(!c && (c = sb._, !c)) {
    throw A("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var tb = {}, ub = function() {
  function a(a, b, c) {
    if(a ? a.Y : a) {
      return a.Y(a, b, c)
    }
    var h;
    h = ub[t(null == a ? null : a)];
    if(!h && (h = ub._, !h)) {
      throw A("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.X : a) {
      return a.X(a, b)
    }
    var c;
    c = ub[t(null == a ? null : a)];
    if(!c && (c = ub._, !c)) {
      throw A("IReduce.-reduce", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}();
function vb(a, b) {
  if(a ? a.G : a) {
    return a.G(a, b)
  }
  var c;
  c = vb[t(null == a ? null : a)];
  if(!c && (c = vb._, !c)) {
    throw A("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function wb(a) {
  if(a ? a.M : a) {
    return a.M(a)
  }
  var b;
  b = wb[t(null == a ? null : a)];
  if(!b && (b = wb._, !b)) {
    throw A("IHash.-hash", a);
  }
  return b.call(null, a)
}
var xb = {};
function yb(a) {
  if(a ? a.A : a) {
    return a.A(a)
  }
  var b;
  b = yb[t(null == a ? null : a)];
  if(!b && (b = yb._, !b)) {
    throw A("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var zb = {};
function H(a, b) {
  if(a ? a.Jd : a) {
    return a.Jd(0, b)
  }
  var c;
  c = H[t(null == a ? null : a)];
  if(!c && (c = H._, !c)) {
    throw A("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
function Ab(a) {
  if(a ? a.Se : a) {
    return null
  }
  var b;
  b = Ab[t(null == a ? null : a)];
  if(!b && (b = Ab._, !b)) {
    throw A("IWriter.-flush", a);
  }
  return b.call(null, a)
}
var Bb = {};
function Cb(a, b, c) {
  if(a ? a.D : a) {
    return a.D(a, b, c)
  }
  var d;
  d = Cb[t(null == a ? null : a)];
  if(!d && (d = Cb._, !d)) {
    throw A("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function Db(a, b, c) {
  if(a ? a.Id : a) {
    return a.Id(a, b, c)
  }
  var d;
  d = Db[t(null == a ? null : a)];
  if(!d && (d = Db._, !d)) {
    throw A("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c)
}
function Eb(a) {
  if(a ? a.Zb : a) {
    return a.Zb(a)
  }
  var b;
  b = Eb[t(null == a ? null : a)];
  if(!b && (b = Eb._, !b)) {
    throw A("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function Fb(a, b) {
  if(a ? a.Cb : a) {
    return a.Cb(a, b)
  }
  var c;
  c = Fb[t(null == a ? null : a)];
  if(!c && (c = Fb._, !c)) {
    throw A("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function Gb(a) {
  if(a ? a.$b : a) {
    return a.$b(a)
  }
  var b;
  b = Gb[t(null == a ? null : a)];
  if(!b && (b = Gb._, !b)) {
    throw A("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function Hb(a, b, c) {
  if(a ? a.jb : a) {
    return a.jb(a, b, c)
  }
  var d;
  d = Hb[t(null == a ? null : a)];
  if(!d && (d = Hb._, !d)) {
    throw A("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function Ib(a) {
  if(a ? a.Bd : a) {
    return a.Bd()
  }
  var b;
  b = Ib[t(null == a ? null : a)];
  if(!b && (b = Ib._, !b)) {
    throw A("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function Jb(a) {
  if(a ? a.Ec : a) {
    return a.Ec(a)
  }
  var b;
  b = Jb[t(null == a ? null : a)];
  if(!b && (b = Jb._, !b)) {
    throw A("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function Kb(a) {
  if(a ? a.Yb : a) {
    return a.Yb(a)
  }
  var b;
  b = Kb[t(null == a ? null : a)];
  if(!b && (b = Kb._, !b)) {
    throw A("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function Lb(a) {
  this.zf = a;
  this.p = 0;
  this.e = 1073741824
}
Lb.prototype.Jd = function(a, b) {
  return this.zf.append(b)
};
Lb.prototype.Se = p(null);
function Mb(a) {
  var b = new Pa, c = new Lb(b);
  a.D(a, c, Ra());
  Ab(c);
  return"" + B(b)
}
function I(a, b, c, d, e) {
  this.ab = a;
  this.name = b;
  this.eb = c;
  this.Xa = d;
  this.fb = e;
  this.e = 2154168321;
  this.p = 4096
}
q = I.prototype;
q.D = function(a, b) {
  return H(b, this.eb)
};
q.M = function(a) {
  var b = this.Xa;
  return null != b ? b : this.Xa = a = Nb.a ? Nb.a(J.c ? J.c(a.ab) : J.call(null, a.ab), J.c ? J.c(a.name) : J.call(null, a.name)) : Nb.call(null, J.c ? J.c(a.ab) : J.call(null, a.ab), J.c ? J.c(a.name) : J.call(null, a.name))
};
q.P = function(a, b) {
  return new I(this.ab, this.name, this.eb, this.Xa, b)
};
q.O = g("fb");
q.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return gb.d(c, this, null);
      case 3:
        return gb.d(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  return b instanceof I ? this.eb === b.eb : !1
};
q.toString = g("eb");
function K(a) {
  if(null == a) {
    return null
  }
  var b;
  b = a ? ((b = a.e & 8388608) ? b : a.Wf) ? !0 : !1 : !1;
  if(b) {
    return a.A(a)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Ob(a, 0)
  }
  if(z(xb, a)) {
    return yb(a)
  }
  if(w.n) {
    throw Error([B(a), B("is not ISeqable")].join(""));
  }
  return null
}
function L(a) {
  if(null == a) {
    return null
  }
  var b;
  b = a ? ((b = a.e & 64) ? b : a.Bb) ? !0 : !1 : !1;
  if(b) {
    return a.Z(a)
  }
  a = K(a);
  return null == a ? null : E(a)
}
function M(a) {
  if(null != a) {
    var b;
    b = a ? ((b = a.e & 64) ? b : a.Bb) ? !0 : !1 : !1;
    if(b) {
      return a.aa(a)
    }
    a = K(a);
    return null != a ? F(a) : N
  }
  return N
}
function O(a) {
  if(null == a) {
    a = null
  }else {
    var b;
    b = a ? ((b = a.e & 128) ? b : a.Vf) ? !0 : !1 : !1;
    a = b ? a.ma(a) : K(M(a))
  }
  return a
}
var Pb = function() {
  function a(a, b) {
    var c = a === b;
    return c ? c : vb(a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = P(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(x(b.a(a, d))) {
          if(O(e)) {
            a = d, d = L(e), e = O(e)
          }else {
            return b.a(d, L(e))
          }
        }else {
          return!1
        }
      }
    }
    a.s = 2;
    a.m = function(a) {
      var b = L(a);
      a = O(a);
      var d = L(a);
      a = M(a);
      return c(b, d, a)
    };
    a.g = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, P(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 2;
  b.m = c.m;
  b.c = p(!0);
  b.a = a;
  b.g = c.g;
  return b
}();
wb["null"] = p(0);
Za["null"] = !0;
$a["null"] = p(0);
vb["null"] = function(a, b) {
  return null == b
};
rb["null"] = !0;
sb["null"] = p(null);
pb["null"] = !0;
qb["null"] = p(null);
ab["null"] = p(null);
ib["null"] = !0;
Date.prototype.G = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
wb.number = function(a) {
  return Math.floor(a) % 2147483647
};
vb.number = function(a, b) {
  return a === b
};
wb["boolean"] = function(a) {
  return!0 === a ? 1 : 0
};
pb["function"] = !0;
qb["function"] = p(null);
Ya["function"] = !0;
wb._ = function(a) {
  return ha(a)
};
var Qb = function() {
  function a(a, b, c, d) {
    for(var l = $a(a);;) {
      if(d < l) {
        c = b.a ? b.a(c, D.a(a, d)) : b.call(null, c, D.a(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = $a(a), l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, D.a(a, l)) : b.call(null, c, D.a(a, l)), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = $a(a);
    if(0 === c) {
      return b.o ? b.o() : b.call(null)
    }
    for(var d = D.a(a, 0), l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, D.a(a, l)) : b.call(null, d, D.a(a, l)), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.d = b;
  d.l = a;
  return d
}(), Rb = function() {
  function a(a, b, c, d) {
    for(var l = a.length;;) {
      if(d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = a.length, l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if(0 === a.length) {
      return b.o ? b.o() : b.call(null)
    }
    for(var d = a[0], l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.d = b;
  d.l = a;
  return d
}();
function Sb(a) {
  if(a) {
    var b = a.e & 2;
    a = (b ? b : a.Le) ? !0 : a.e ? !1 : z(Za, a)
  }else {
    a = z(Za, a)
  }
  return a
}
function Tb(a) {
  if(a) {
    var b = a.e & 16;
    a = (b ? b : a.Fd) ? !0 : a.e ? !1 : z(db, a)
  }else {
    a = z(db, a)
  }
  return a
}
function Ob(a, b) {
  this.b = a;
  this.j = b;
  this.p = 0;
  this.e = 166199550
}
q = Ob.prototype;
q.M = function(a) {
  return Vb.c ? Vb.c(a) : Vb.call(null, a)
};
q.ma = function() {
  return this.j + 1 < this.b.length ? new Ob(this.b, this.j + 1) : null
};
q.R = function(a, b) {
  return Q.a ? Q.a(b, a) : Q.call(null, b, a)
};
q.toString = function() {
  return Mb(this)
};
q.X = function(a, b) {
  return Rb.l(this.b, b, this.b[this.j], this.j + 1)
};
q.Y = function(a, b, c) {
  return Rb.l(this.b, b, c, this.j)
};
q.A = aa();
q.L = function() {
  return this.b.length - this.j
};
q.Z = function() {
  return this.b[this.j]
};
q.aa = function() {
  return this.j + 1 < this.b.length ? new Ob(this.b, this.j + 1) : Wb.o ? Wb.o() : Wb.call(null)
};
q.G = function(a, b) {
  return Xb.a ? Xb.a(a, b) : Xb.call(null, a, b)
};
q.N = function(a, b) {
  var c = b + this.j;
  return c < this.b.length ? this.b[c] : null
};
q.U = function(a, b, c) {
  a = b + this.j;
  return a < this.b.length ? this.b[a] : c
};
q.T = function() {
  return N
};
var Yb = function() {
  function a(a, b) {
    return b < a.length ? new Ob(a, b) : null
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}(), P = function() {
  function a(a, b) {
    return Yb.a(a, b)
  }
  function b(a) {
    return Yb.a(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
vb._ = function(a, b) {
  return a === b
};
var Zb = function() {
  function a(a, b) {
    return null != a ? cb(a, b) : Wb.c ? Wb.c(b) : Wb.call(null, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = P(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(x(e)) {
          a = b.a(a, d), d = L(e), e = O(e)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.s = 2;
    a.m = function(a) {
      var b = L(a);
      a = O(a);
      var d = L(a);
      a = M(a);
      return c(b, d, a)
    };
    a.g = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, P(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 2;
  b.m = c.m;
  b.a = a;
  b.g = c.g;
  return b
}();
function R(a) {
  if(null != a) {
    var b;
    b = a ? ((b = a.e & 2) ? b : a.Le) ? !0 : !1 : !1;
    if(b) {
      a = a.L(a)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(z(Za, a)) {
            a = $a(a)
          }else {
            if(w.n) {
              a: {
                a = K(a);
                for(b = 0;;) {
                  if(Sb(a)) {
                    a = b + $a(a);
                    break a
                  }
                  a = O(a);
                  b += 1
                }
                a = void 0
              }
            }else {
              a = null
            }
          }
        }
      }
    }
  }else {
    a = 0
  }
  return a
}
var $b = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return K(a) ? L(a) : c
      }
      if(Tb(a)) {
        return D.d(a, b, c)
      }
      if(K(a)) {
        a = O(a), b -= 1
      }else {
        return w.n ? c : null
      }
    }
  }
  function b(a, b) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === b) {
        if(K(a)) {
          return L(a)
        }
        throw Error("Index out of bounds");
      }
      if(Tb(a)) {
        return D.a(a, b)
      }
      if(K(a)) {
        var c = O(a), h = b - 1;
        a = c;
        b = h
      }else {
        if(w.n) {
          throw Error("Index out of bounds");
        }
        return null
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}(), ac = function() {
  function a(a, b, c) {
    if(null != a) {
      if(function() {
        var b;
        b = a ? ((b = a.e & 16) ? b : a.Fd) ? !0 : !1 : !1;
        return b
      }()) {
        return a.U(a, Math.floor(b), c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(z(db, a)) {
        return D.a(a, b)
      }
      if(w.n) {
        if(function() {
          var b;
          b = a ? ((b = a.e & 64) ? b : a.Bb) ? !0 : a.e ? !1 : z(eb, a) : z(eb, a);
          return b
        }()) {
          return $b.d(a, Math.floor(b), c)
        }
        throw Error([B("nth not supported on this type "), B(Va(Ua(a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(function() {
      var b;
      b = a ? ((b = a.e & 16) ? b : a.Fd) ? !0 : !1 : !1;
      return b
    }()) {
      return a.N(a, Math.floor(b))
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(z(db, a)) {
      return D.a(a, b)
    }
    if(w.n) {
      if(function() {
        var b;
        b = a ? ((b = a.e & 64) ? b : a.Bb) ? !0 : a.e ? !1 : z(eb, a) : z(eb, a);
        return b
      }()) {
        return $b.a(a, Math.floor(b))
      }
      throw Error([B("nth not supported on this type "), B(Va(Ua(a)))].join(""));
    }
    return null
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}(), bc = function() {
  function a(a, b, c) {
    if(null != a) {
      var h;
      h = a ? ((h = a.e & 256) ? h : a.Tc) ? !0 : !1 : !1;
      a = h ? a.W(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : z(fb, a) ? gb.d(a, b, c) : w.n ? c : null
    }else {
      a = c
    }
    return a
  }
  function b(a, b) {
    var c;
    null == a ? c = null : (c = a ? ((c = a.e & 256) ? c : a.Tc) ? !0 : !1 : !1, c = c ? a.ea(a, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : z(fb, a) ? gb.a(a, b) : null);
    return c
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}(), dc = function() {
  function a(a, b, c) {
    return null != a ? hb(a, b, c) : cc.a ? cc.a(b, c) : cc.call(null, b, c)
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = P(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m)
    }
    function c(a, d, e, l) {
      for(;;) {
        if(a = b.d(a, d, e), x(l)) {
          d = L(l), e = L(O(l)), l = O(O(l))
        }else {
          return a
        }
      }
    }
    a.s = 3;
    a.m = function(a) {
      var b = L(a);
      a = O(a);
      var d = L(a);
      a = O(a);
      var l = L(a);
      a = M(a);
      return c(b, d, l, a)
    };
    a.g = c;
    return a
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.g(b, e, f, P(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 3;
  b.m = c.m;
  b.d = a;
  b.g = c.g;
  return b
}();
function ec(a) {
  var b = fa(a);
  return b ? b : a ? x(x(null) ? null : a.Ke) ? !0 : a.Wc ? !1 : z(Ya, a) : z(Ya, a)
}
var hc = function fc(b, c) {
  return function() {
    var c = ec(b);
    c && (c = b ? ((c = b.e & 262144) ? c : b.Zf) ? !0 : b.e ? !1 : z(rb, b) : z(rb, b), c = !c);
    return c
  }() ? fc(function() {
    "undefined" === typeof Qa && (Qa = {}, Qa = function(b, c, f, h) {
      this.h = b;
      this.ed = c;
      this.Gf = f;
      this.pf = h;
      this.p = 0;
      this.e = 393217
    }, Qa.cc = !0, Qa.bc = "cljs.core/t11999", Qa.Vc = function(b, c) {
      return H(c, "cljs.core/t11999")
    }, Qa.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k)
      }
      function c(b, d) {
        return gc.a ? gc.a(b.ed, d) : gc.call(null, b.ed, d)
      }
      b.s = 1;
      b.m = function(b) {
        var d = L(b);
        b = M(b);
        return c(d, b)
      };
      b.g = c;
      return b
    }(), Qa.prototype.apply = function(b, c) {
      b = this;
      return b.call.apply(b, [b].concat(c.slice()))
    }, Qa.prototype.Ke = !0, Qa.prototype.O = g("pf"), Qa.prototype.P = function(b, c) {
      return new Qa(this.h, this.ed, this.Gf, c)
    });
    return new Qa(c, b, fc, null)
  }(), c) : sb(b, c)
};
function ic(a) {
  var b;
  b = a ? ((b = a.e & 131072) ? b : a.Qe) ? !0 : a.e ? !1 : z(pb, a) : z(pb, a);
  return b ? qb(a) : null
}
var jc = {}, kc = 0, J = function() {
  function a(a, b) {
    var c = u(a);
    (c ? b : c) ? (255 < kc && (jc = {}, kc = 0), c = jc[a], "number" !== typeof c && (c = za(a), jc[a] = c, kc += 1)) : c = wb(a);
    return c
  }
  function b(a) {
    return c.a(a, !0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
function lc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.e & 8;
      a = (b ? b : a.Qf) ? !0 : a.e ? !1 : z(bb, a)
    }else {
      a = z(bb, a)
    }
  }
  return a
}
function mc(a) {
  if(a) {
    var b = a.e & 16777216;
    a = (b ? b : a.Xf) ? !0 : a.e ? !1 : z(zb, a)
  }else {
    a = z(zb, a)
  }
  return a
}
function nc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.e & 1024;
      a = (b ? b : a.Tf) ? !0 : a.e ? !1 : z(ib, a)
    }else {
      a = z(ib, a)
    }
  }
  return a
}
function oc(a) {
  if(a) {
    var b = a.e & 16384;
    a = (b ? b : a.Yf) ? !0 : a.e ? !1 : z(mb, a)
  }else {
    a = z(mb, a)
  }
  return a
}
function pc(a) {
  if(a) {
    var b = a.p & 512;
    a = (b ? b : a.Pf) ? !0 : !1
  }else {
    a = !1
  }
  return a
}
function qc(a) {
  var b = [];
  Ka(a, function(a, d) {
    return b.push(d)
  });
  return b
}
function rc(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
function sc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.e & 64;
      a = (b ? b : a.Bb) ? !0 : a.e ? !1 : z(eb, a)
    }else {
      a = z(eb, a)
    }
  }
  return a
}
function tc(a) {
  return x(a) ? !0 : !1
}
function uc(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(Ua(a) === Ua(b)) {
    var c;
    c = a ? ((c = a.p & 2048) ? c : a.Dd) ? !0 : !1 : !1;
    return c ? a.Ed(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  if(w.n) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var vc = function() {
  function a(a, b, c, h) {
    for(;;) {
      var k = uc(ac.a(a, h), ac.a(b, h)), l = 0 === k;
      if(l ? h + 1 < c : l) {
        h += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var f = R(a), h = R(b);
    return f < h ? -1 : f > h ? 1 : w.n ? c.l(a, b, f, 0) : null
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.l = a;
  return c
}(), yc = function() {
  function a(a, b, c) {
    for(c = K(c);;) {
      if(c) {
        b = a.a ? a.a(b, L(c)) : a.call(null, b, L(c)), c = O(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = K(b);
    return c ? xc.d ? xc.d(a, L(c), O(c)) : xc.call(null, a, L(c), O(c)) : a.o ? a.o() : a.call(null)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}(), xc = function() {
  function a(a, b, c) {
    var h;
    h = c ? ((h = c.e & 524288) ? h : c.Re) ? !0 : !1 : !1;
    return h ? c.Y(c, a, b) : c instanceof Array ? Rb.d(c, a, b) : "string" === typeof c ? Rb.d(c, a, b) : z(tb, c) ? ub.d(c, a, b) : w.n ? yc.d(a, b, c) : null
  }
  function b(a, b) {
    var c;
    c = b ? ((c = b.e & 524288) ? c : b.Re) ? !0 : !1 : !1;
    return c ? b.X(b, a) : b instanceof Array ? Rb.a(b, a) : "string" === typeof b ? Rb.a(b, a) : z(tb, b) ? ub.a(b, a) : w.n ? yc.a(a, b) : null
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}();
function zc(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(null, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(null, a)
}
function Ac(a) {
  return zc((a - a % 2) / 2)
}
var Bc = function() {
  function a(a) {
    return a * c.o()
  }
  function b() {
    return Math.random.o ? Math.random.o() : Math.random.call(null)
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = b;
  c.c = a;
  return c
}();
function Cc(a) {
  return zc(Bc.c(a))
}
function Dc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var B = function() {
  function a(a) {
    return null == a ? "" : a.toString()
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(x(c)) {
            var d = a.append(b.c(L(c))), e = O(c);
            a = d;
            c = e
          }else {
            return a.toString()
          }
        }
      }.call(null, new Pa(b.c(a)), d)
    }
    a.s = 1;
    a.m = function(a) {
      var b = L(a);
      a = M(a);
      return c(b, a)
    };
    a.g = c;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, P(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 1;
  b.m = c.m;
  b.o = p("");
  b.c = a;
  b.g = c.g;
  return b
}();
function Xb(a, b) {
  return tc(mc(b) ? function() {
    for(var c = K(a), d = K(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(Pb.a(L(c), L(d))) {
        c = O(c), d = O(d)
      }else {
        return w.n ? !1 : null
      }
    }
  }() : null)
}
function Nb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Vb(a) {
  return xc.d(function(a, c) {
    return Nb(a, J.a(c, !1))
  }, J.a(L(a), !1), O(a))
}
function Ec(a) {
  var b = 0;
  for(a = K(a);;) {
    if(a) {
      var c = L(a), b = (b + (J.c(Fc.c ? Fc.c(c) : Fc.call(null, c)) ^ J.c(Gc.c ? Gc.c(c) : Gc.call(null, c)))) % 4503599627370496;
      a = O(a)
    }else {
      return b
    }
  }
}
function Hc(a, b, c, d, e) {
  this.h = a;
  this.Gb = b;
  this.Ha = c;
  this.count = d;
  this.k = e;
  this.p = 0;
  this.e = 65937646
}
q = Hc.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Vb(a)
};
q.ma = function() {
  return 1 === this.count ? null : this.Ha
};
q.R = function(a, b) {
  return new Hc(this.h, b, a, this.count + 1, null)
};
q.toString = function() {
  return Mb(this)
};
q.X = function(a, b) {
  return yc.a(b, a)
};
q.Y = function(a, b, c) {
  return yc.d(b, c, a)
};
q.A = aa();
q.L = g("count");
q.Z = g("Gb");
q.aa = function() {
  return 1 === this.count ? N : this.Ha
};
q.G = function(a, b) {
  return Xb(a, b)
};
q.P = function(a, b) {
  return new Hc(b, this.Gb, this.Ha, this.count, this.k)
};
q.O = g("h");
q.T = function() {
  return N
};
function Ic(a) {
  this.h = a;
  this.p = 0;
  this.e = 65937614
}
q = Ic.prototype;
q.M = p(0);
q.ma = p(null);
q.R = function(a, b) {
  return new Hc(this.h, b, null, 1, null)
};
q.toString = function() {
  return Mb(this)
};
q.X = function(a, b) {
  return yc.a(b, a)
};
q.Y = function(a, b, c) {
  return yc.d(b, c, a)
};
q.A = p(null);
q.L = p(0);
q.Z = p(null);
q.aa = function() {
  return N
};
q.G = function(a, b) {
  return Xb(a, b)
};
q.P = function(a, b) {
  return new Ic(b)
};
q.O = g("h");
q.T = aa();
var N = new Ic(null), Wb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(a instanceof Ob) {
      b = a.b
    }else {
      a: {
        for(b = [];;) {
          if(null != a) {
            b.push(a.Z(a)), a = a.ma(a)
          }else {
            break a
          }
        }
        b = void 0
      }
    }
    a = b.length;
    for(var e = N;;) {
      if(0 < a) {
        var f = a - 1, e = e.R(e, b[a - 1]);
        a = f
      }else {
        return e
      }
    }
  }
  a.s = 0;
  a.m = function(a) {
    a = K(a);
    return b(a)
  };
  a.g = b;
  return a
}();
function Jc(a, b, c, d) {
  this.h = a;
  this.Gb = b;
  this.Ha = c;
  this.k = d;
  this.p = 0;
  this.e = 65929452
}
q = Jc.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Vb(a)
};
q.ma = function() {
  return null == this.Ha ? null : yb(this.Ha)
};
q.R = function(a, b) {
  return new Jc(null, b, a, this.k)
};
q.toString = function() {
  return Mb(this)
};
q.X = function(a, b) {
  return yc.a(b, a)
};
q.Y = function(a, b, c) {
  return yc.d(b, c, a)
};
q.A = aa();
q.Z = g("Gb");
q.aa = function() {
  return null == this.Ha ? N : this.Ha
};
q.G = function(a, b) {
  return Xb(a, b)
};
q.P = function(a, b) {
  return new Jc(b, this.Gb, this.Ha, this.k)
};
q.O = g("h");
q.T = function() {
  return hc(N, this.h)
};
function Q(a, b) {
  var c = null == b;
  c || (c = b ? ((c = b.e & 64) ? c : b.Bb) ? !0 : !1 : !1);
  return c ? new Jc(null, a, b, null) : new Jc(null, a, K(b), null)
}
wb.string = function(a) {
  return za(a)
};
function T(a, b, c, d) {
  this.ab = a;
  this.name = b;
  this.Pa = c;
  this.Xa = d;
  this.e = 2153775105;
  this.p = 4096
}
q = T.prototype;
q.D = function(a, b) {
  return H(b, [B(":"), B(this.Pa)].join(""))
};
q.M = function() {
  null == this.Xa && (this.Xa = Nb(J.c(this.ab), J.c(this.name)) + 2654435769);
  return this.Xa
};
q.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        null == c ? e = null : (e = c ? ((e = c.e & 256) ? e : c.Tc) ? !0 : c.e ? !1 : z(fb, c) : z(fb, c), e = e ? gb.d(c, this, null) : null);
        return e;
      case 3:
        return null == c ? e = d : (e = c ? ((e = c.e & 256) ? e : c.Tc) ? !0 : c.e ? !1 : z(fb, c) : z(fb, c), e = e ? gb.d(c, this, d) : d), e
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  return b instanceof T ? this.Pa === b.Pa : !1
};
q.toString = function() {
  return[B(":"), B(this.Pa)].join("")
};
function Kc(a, b) {
  var c;
  c = a === b ? !0 : ((c = a instanceof T) ? b instanceof T : c) ? a.Pa === b.Pa : !1;
  return c
}
var Mc = function() {
  function a(a, b) {
    return new T(a, b, [B(x(a) ? [B(a), B("/")].join("") : null), B(b)].join(""), null)
  }
  function b(a) {
    return a instanceof T ? a : a instanceof I ? new T(null, Lc.c ? Lc.c(a) : Lc.call(null, a), Lc.c ? Lc.c(a) : Lc.call(null, a), null) : w.n ? new T(null, a, a, null) : null
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
function Nc(a, b, c, d) {
  this.h = a;
  this.pb = b;
  this.u = c;
  this.k = d;
  this.p = 0;
  this.e = 32374988
}
q = Nc.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Vb(a)
};
q.ma = function(a) {
  a.A(a);
  return null == this.u ? null : this.u.ma(this.u)
};
q.R = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return Mb(this)
};
function Oc(a) {
  null != a.pb && (a.u = a.pb.o ? a.pb.o() : a.pb.call(null), a.pb = null);
  return a.u
}
q.X = function(a, b) {
  return yc.a(b, a)
};
q.Y = function(a, b, c) {
  return yc.d(b, c, a)
};
q.A = function(a) {
  Oc(a);
  if(null == this.u) {
    return null
  }
  for(a = this.u;;) {
    if(a instanceof Nc) {
      a = Oc(a)
    }else {
      return this.u = a, null == this.u ? null : this.u.A(this.u)
    }
  }
};
q.Z = function(a) {
  a.A(a);
  return null == this.u ? null : this.u.Z(this.u)
};
q.aa = function(a) {
  a.A(a);
  return null != this.u ? this.u.aa(this.u) : N
};
q.G = function(a, b) {
  return Xb(a, b)
};
q.P = function(a, b) {
  return new Nc(b, this.pb, this.u, this.k)
};
q.O = g("h");
q.T = function() {
  return hc(N, this.h)
};
function Pc(a, b) {
  this.Q = a;
  this.end = b;
  this.p = 0;
  this.e = 2
}
Pc.prototype.L = g("end");
Pc.prototype.add = function(a) {
  this.Q[this.end] = a;
  return this.end += 1
};
Pc.prototype.la = function() {
  var a = new Qc(this.Q, 0, this.end);
  this.Q = null;
  return a
};
function Qc(a, b, c) {
  this.b = a;
  this.C = b;
  this.end = c;
  this.p = 0;
  this.e = 524306
}
q = Qc.prototype;
q.X = function(a, b) {
  return Rb.l(this.b, b, this.b[this.C], this.C + 1)
};
q.Y = function(a, b, c) {
  return Rb.l(this.b, b, c, this.C)
};
q.Bd = function() {
  if(this.C === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Qc(this.b, this.C + 1, this.end)
};
q.N = function(a, b) {
  return this.b[this.C + b]
};
q.U = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.C : a) ? this.b[this.C + b] : c
};
q.L = function() {
  return this.end - this.C
};
var Rc = function() {
  function a(a, b, c) {
    return new Qc(a, b, c)
  }
  function b(a, b) {
    return new Qc(a, b, a.length)
  }
  function c(a) {
    return new Qc(a, 0, a.length)
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.a = b;
  d.d = a;
  return d
}();
function Sc(a, b, c, d) {
  this.la = a;
  this.wa = b;
  this.h = c;
  this.k = d;
  this.e = 31850732;
  this.p = 1536
}
q = Sc.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Vb(a)
};
q.ma = function() {
  if(1 < $a(this.la)) {
    return new Sc(Ib(this.la), this.wa, this.h, null)
  }
  var a = yb(this.wa);
  return null == a ? null : a
};
q.R = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return Mb(this)
};
q.A = aa();
q.Z = function() {
  return D.a(this.la, 0)
};
q.aa = function() {
  return 1 < $a(this.la) ? new Sc(Ib(this.la), this.wa, this.h, null) : null == this.wa ? N : this.wa
};
q.Cd = function() {
  return null == this.wa ? null : this.wa
};
q.G = function(a, b) {
  return Xb(a, b)
};
q.P = function(a, b) {
  return new Sc(this.la, this.wa, b, this.k)
};
q.O = g("h");
q.T = function() {
  return hc(N, this.h)
};
q.Ec = g("la");
q.Yb = function() {
  return null == this.wa ? N : this.wa
};
function Tc(a, b) {
  return 0 === $a(a) ? b : new Sc(a, b, null, null)
}
function Uc(a) {
  for(var b = [];;) {
    if(K(a)) {
      b.push(L(a)), a = O(a)
    }else {
      return b
    }
  }
}
function Vc(a, b) {
  if(Sb(a)) {
    return R(a)
  }
  for(var c = a, d = b, e = 0;;) {
    var f;
    f = (f = 0 < d) ? K(c) : f;
    if(x(f)) {
      c = O(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var Xc = function Wc(b) {
  return null == b ? null : null == O(b) ? K(L(b)) : w.n ? Q(L(b), Wc(O(b))) : null
}, Yc = function() {
  function a(a, b, c, d) {
    return Q(a, Q(b, Q(c, d)))
  }
  function b(a, b, c) {
    return Q(a, Q(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var r = null;
      4 < arguments.length && (r = P(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, r)
    }
    function b(a, c, d, e, f) {
      return Q(a, Q(c, Q(d, Q(e, Xc(f)))))
    }
    a.s = 4;
    a.m = function(a) {
      var c = L(a);
      a = O(a);
      var d = L(a);
      a = O(a);
      var e = L(a);
      a = O(a);
      var n = L(a);
      a = M(a);
      return b(c, d, e, n, a)
    };
    a.g = b;
    return a
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return K(c);
      case 2:
        return Q(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        return d.g(c, f, h, k, P(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.s = 4;
  c.m = d.m;
  c.c = function(a) {
    return K(a)
  };
  c.a = function(a, b) {
    return Q(a, b)
  };
  c.d = b;
  c.l = a;
  c.g = d.g;
  return c
}();
function Zc(a, b, c) {
  var d = K(c);
  if(0 === b) {
    return a.o ? a.o() : a.call(null)
  }
  c = E(d);
  var e = F(d);
  if(1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(null, c)
  }
  var d = E(e), f = F(e);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d)
  }
  var e = E(f), h = F(f);
  if(3 === b) {
    return a.d ? a.d(c, d, e) : a.d ? a.d(c, d, e) : a.call(null, c, d, e)
  }
  var f = E(h), k = F(h);
  if(4 === b) {
    return a.l ? a.l(c, d, e, f) : a.l ? a.l(c, d, e, f) : a.call(null, c, d, e, f)
  }
  h = E(k);
  k = F(k);
  if(5 === b) {
    return a.S ? a.S(c, d, e, f, h) : a.S ? a.S(c, d, e, f, h) : a.call(null, c, d, e, f, h)
  }
  a = E(k);
  var l = F(k);
  if(6 === b) {
    return a.sa ? a.sa(c, d, e, f, h, a) : a.sa ? a.sa(c, d, e, f, h, a) : a.call(null, c, d, e, f, h, a)
  }
  var k = E(l), m = F(l);
  if(7 === b) {
    return a.ib ? a.ib(c, d, e, f, h, a, k) : a.ib ? a.ib(c, d, e, f, h, a, k) : a.call(null, c, d, e, f, h, a, k)
  }
  var l = E(m), n = F(m);
  if(8 === b) {
    return a.Rc ? a.Rc(c, d, e, f, h, a, k, l) : a.Rc ? a.Rc(c, d, e, f, h, a, k, l) : a.call(null, c, d, e, f, h, a, k, l)
  }
  var m = E(n), r = F(n);
  if(9 === b) {
    return a.Sc ? a.Sc(c, d, e, f, h, a, k, l, m) : a.Sc ? a.Sc(c, d, e, f, h, a, k, l, m) : a.call(null, c, d, e, f, h, a, k, l, m)
  }
  var n = E(r), y = F(r);
  if(10 === b) {
    return a.Gc ? a.Gc(c, d, e, f, h, a, k, l, m, n) : a.Gc ? a.Gc(c, d, e, f, h, a, k, l, m, n) : a.call(null, c, d, e, f, h, a, k, l, m, n)
  }
  var r = E(y), G = F(y);
  if(11 === b) {
    return a.Hc ? a.Hc(c, d, e, f, h, a, k, l, m, n, r) : a.Hc ? a.Hc(c, d, e, f, h, a, k, l, m, n, r) : a.call(null, c, d, e, f, h, a, k, l, m, n, r)
  }
  var y = E(G), C = F(G);
  if(12 === b) {
    return a.Ic ? a.Ic(c, d, e, f, h, a, k, l, m, n, r, y) : a.Ic ? a.Ic(c, d, e, f, h, a, k, l, m, n, r, y) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y)
  }
  var G = E(C), S = F(C);
  if(13 === b) {
    return a.Jc ? a.Jc(c, d, e, f, h, a, k, l, m, n, r, y, G) : a.Jc ? a.Jc(c, d, e, f, h, a, k, l, m, n, r, y, G) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G)
  }
  var C = E(S), Z = F(S);
  if(14 === b) {
    return a.Kc ? a.Kc(c, d, e, f, h, a, k, l, m, n, r, y, G, C) : a.Kc ? a.Kc(c, d, e, f, h, a, k, l, m, n, r, y, G, C) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G, C)
  }
  var S = E(Z), ja = F(Z);
  if(15 === b) {
    return a.Lc ? a.Lc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S) : a.Lc ? a.Lc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G, C, S)
  }
  var Z = E(ja), va = F(ja);
  if(16 === b) {
    return a.Mc ? a.Mc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z) : a.Mc ? a.Mc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z)
  }
  var ja = E(va), Xa = F(va);
  if(17 === b) {
    return a.Nc ? a.Nc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z, ja) : a.Nc ? a.Nc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z, ja) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z, ja)
  }
  var va = E(Xa), wc = F(Xa);
  if(18 === b) {
    return a.Oc ? a.Oc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z, ja, va) : a.Oc ? a.Oc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z, ja, va) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z, ja, va)
  }
  Xa = E(wc);
  wc = F(wc);
  if(19 === b) {
    return a.Pc ? a.Pc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z, ja, va, Xa) : a.Pc ? a.Pc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z, ja, va, Xa) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z, ja, va, Xa)
  }
  var Ub = E(wc);
  F(wc);
  if(20 === b) {
    return a.Qc ? a.Qc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z, ja, va, Xa, Ub) : a.Qc ? a.Qc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z, ja, va, Xa, Ub) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Z, ja, va, Xa, Ub)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var gc = function() {
  function a(a, b, c, d, e) {
    b = Yc.l(b, c, d, e);
    c = a.s;
    return a.m ? (d = Vc(b, c + 1), d <= c ? Zc(a, d, b) : a.m(b)) : a.apply(a, Uc(b))
  }
  function b(a, b, c, d) {
    b = Yc.d(b, c, d);
    c = a.s;
    return a.m ? (d = Vc(b, c + 1), d <= c ? Zc(a, d, b) : a.m(b)) : a.apply(a, Uc(b))
  }
  function c(a, b, c) {
    b = Yc.a(b, c);
    c = a.s;
    if(a.m) {
      var d = Vc(b, c + 1);
      return d <= c ? Zc(a, d, b) : a.m(b)
    }
    return a.apply(a, Uc(b))
  }
  function d(a, b) {
    var c = a.s;
    if(a.m) {
      var d = Vc(b, c + 1);
      return d <= c ? Zc(a, d, b) : a.m(b)
    }
    return a.apply(a, Uc(b))
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, G) {
      var C = null;
      5 < arguments.length && (C = P(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, C)
    }
    function b(a, c, d, e, f, h) {
      c = Q(c, Q(d, Q(e, Q(f, Xc(h)))));
      d = a.s;
      return a.m ? (e = Vc(c, d + 1), e <= d ? Zc(a, e, c) : a.m(c)) : a.apply(a, Uc(c))
    }
    a.s = 5;
    a.m = function(a) {
      var c = L(a);
      a = O(a);
      var d = L(a);
      a = O(a);
      var e = L(a);
      a = O(a);
      var f = L(a);
      a = O(a);
      var h = L(a);
      a = M(a);
      return b(c, d, e, f, h, a)
    };
    a.g = b;
    return a
  }(), e = function(e, k, l, m, n, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, n);
      default:
        return f.g(e, k, l, m, n, P(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.s = 5;
  e.m = f.m;
  e.a = d;
  e.d = c;
  e.l = b;
  e.S = a;
  e.g = f.g;
  return e
}();
function $c(a, b) {
  for(;;) {
    if(null == K(b)) {
      return!0
    }
    if(x(a.c ? a.c(L(b)) : a.call(null, L(b)))) {
      var c = a, d = O(b);
      a = c;
      b = d
    }else {
      return w.n ? !1 : null
    }
  }
}
function ad(a) {
  for(var b = bd;;) {
    if(K(a)) {
      var c = b.c ? b.c(L(a)) : b.call(null, L(a));
      if(x(c)) {
        return c
      }
      a = O(a)
    }else {
      return null
    }
  }
}
function bd(a) {
  return a
}
function cd(a) {
  return function() {
    function b(b) {
      0 < arguments.length && P(Array.prototype.slice.call(arguments, 0), 0);
      return a
    }
    b.s = 0;
    b.m = function(b) {
      K(b);
      return a
    };
    b.g = function() {
      return a
    };
    return b
  }()
}
var dd = function() {
  function a(a, b, c, e) {
    return new Nc(null, function() {
      var m = K(b), n = K(c), r = K(e);
      return(m ? n ? r : n : m) ? Q(a.d ? a.d(L(m), L(n), L(r)) : a.call(null, L(m), L(n), L(r)), d.l(a, M(m), M(n), M(r))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new Nc(null, function() {
      var e = K(b), m = K(c);
      return(e ? m : e) ? Q(a.a ? a.a(L(e), L(m)) : a.call(null, L(e), L(m)), d.d(a, M(e), M(m))) : null
    }, null, null)
  }
  function c(a, b) {
    return new Nc(null, function() {
      var c = K(b);
      if(c) {
        if(pc(c)) {
          for(var e = Jb(c), m = R(e), n = new Pc(Array(m), 0), r = 0;;) {
            if(r < m) {
              var y = a.c ? a.c(D.a(e, r)) : a.call(null, D.a(e, r));
              n.add(y);
              r += 1
            }else {
              break
            }
          }
          return Tc(n.la(), d.a(a, Kb(c)))
        }
        return Q(a.c ? a.c(L(c)) : a.call(null, L(c)), d.a(a, M(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var y = null;
      4 < arguments.length && (y = P(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, y)
    }
    function b(a, c, e, f, h) {
      return d.a(function(b) {
        return gc.a(a, b)
      }, function G(a) {
        return new Nc(null, function() {
          var b = d.a(K, a);
          return $c(bd, b) ? Q(d.a(L, b), G(d.a(M, b))) : null
        }, null, null)
      }(Zb.g(h, f, P([e, c], 0))))
    }
    a.s = 4;
    a.m = function(a) {
      var c = L(a);
      a = O(a);
      var d = L(a);
      a = O(a);
      var e = L(a);
      a = O(a);
      var f = L(a);
      a = M(a);
      return b(c, d, e, f, a)
    };
    a.g = b;
    return a
  }(), d = function(d, h, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.g(d, h, k, l, P(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.s = 4;
  d.m = e.m;
  d.a = c;
  d.d = b;
  d.l = a;
  d.g = e.g;
  return d
}();
function ed(a, b) {
  var c;
  null != a ? (c = a ? ((c = a.p & 4) ? c : a.Rf) ? !0 : !1 : !1, c ? (c = xc.d(Fb, Eb(a), b), c = Gb(c)) : c = xc.d(cb, a, b)) : c = xc.d(Zb, N, b);
  return c
}
function fd(a, b) {
  this.r = a;
  this.b = b
}
function gd(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function hd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new fd(a, Array(32));
    d.b[0] = c;
    c = d;
    b -= 5
  }
}
var jd = function id(b, c, d, e) {
  var f = new fd(d.r, d.b.slice()), h = b.f - 1 >>> c & 31;
  5 === c ? f.b[h] = e : (d = d.b[h], b = null != d ? id(b, c - 5, d, e) : hd(null, c - 5, e), f.b[h] = b);
  return f
};
function kd(a, b) {
  throw Error([B("No item "), B(a), B(" in vector of length "), B(b)].join(""));
}
function ld(a, b) {
  var c = 0 <= b;
  if(c ? b < a.f : c) {
    if(b >= gd(a)) {
      return a.t
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.b[b >>> d & 31], d = e
      }else {
        return c.b
      }
    }
  }else {
    return kd(b, a.f)
  }
}
var nd = function md(b, c, d, e, f) {
  var h = new fd(d.r, d.b.slice());
  if(0 === c) {
    h.b[e & 31] = f
  }else {
    var k = e >>> c & 31;
    b = md(b, c - 5, d.b[k], e, f);
    h.b[k] = b
  }
  return h
};
function od(a, b, c, d, e, f) {
  this.h = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.t = e;
  this.k = f;
  this.p = 4;
  this.e = 167668511
}
q = od.prototype;
q.Zb = function() {
  return new pd(this.f, this.shift, qd.c ? qd.c(this.root) : qd.call(null, this.root), rd.c ? rd.c(this.t) : rd.call(null, this.t))
};
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Vb(a)
};
q.ea = function(a, b) {
  return a.U(a, b, null)
};
q.W = function(a, b, c) {
  return a.U(a, b, c)
};
q.za = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.f : d) {
    return gd(a) <= b ? (a = this.t.slice(), a[b & 31] = c, new od(this.h, this.f, this.shift, this.root, a, null)) : new od(this.h, this.f, this.shift, nd(a, this.shift, this.root, b, c), this.t, null)
  }
  if(b === this.f) {
    return a.R(a, c)
  }
  if(w.n) {
    throw Error([B("Index "), B(b), B(" out of bounds  [0,"), B(this.f), B("]")].join(""));
  }
  return null
};
q.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(this, c);
      case 3:
        return this.U(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.R = function(a, b) {
  if(32 > this.f - gd(a)) {
    var c = this.t.slice();
    c.push(b);
    return new od(this.h, this.f + 1, this.shift, this.root, c, null)
  }
  var d = this.f >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new fd(null, Array(32));
    d.b[0] = this.root;
    var e = hd(null, this.shift, new fd(null, this.t));
    d.b[1] = e
  }else {
    d = jd(a, this.shift, this.root, new fd(null, this.t))
  }
  return new od(this.h, this.f + 1, c, d, [b], null)
};
q.Gd = function(a) {
  return a.N(a, 0)
};
q.Hd = function(a) {
  return a.N(a, 1)
};
q.toString = function() {
  return Mb(this)
};
q.X = function(a, b) {
  return Qb.a(a, b)
};
q.Y = function(a, b, c) {
  return Qb.d(a, b, c)
};
q.A = function(a) {
  return 0 === this.f ? null : 32 > this.f ? P.c(this.t) : w.n ? U.d ? U.d(a, 0, 0) : U.call(null, a, 0, 0) : null
};
q.L = g("f");
q.Uc = function(a, b, c) {
  return a.za(a, b, c)
};
q.G = function(a, b) {
  return Xb(a, b)
};
q.P = function(a, b) {
  return new od(b, this.f, this.shift, this.root, this.t, this.k)
};
q.O = g("h");
q.N = function(a, b) {
  return ld(a, b)[b & 31]
};
q.U = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.f : d) ? a.N(a, b) : c
};
q.T = function() {
  return hc(sd, this.h)
};
var td = new fd(null, Array(32)), sd = new od(null, 0, 5, td, [], 0);
function ud(a) {
  var b = a.length;
  if(32 > b) {
    return new od(null, b, 5, td, a, null)
  }
  for(var c = a.slice(0, 32), d = 32, e = Eb(new od(null, 32, 5, td, c, null));;) {
    if(d < b) {
      c = d + 1, e = Fb(e, a[d]), d = c
    }else {
      return Gb(e)
    }
  }
}
function vd(a) {
  return Gb(xc.d(Fb, Eb(sd), a))
}
function wd(a, b, c, d, e, f) {
  this.K = a;
  this.ja = b;
  this.j = c;
  this.C = d;
  this.h = e;
  this.k = f;
  this.e = 32243948;
  this.p = 1536
}
q = wd.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Vb(a)
};
q.ma = function(a) {
  return this.C + 1 < this.ja.length ? (a = U.l ? U.l(this.K, this.ja, this.j, this.C + 1) : U.call(null, this.K, this.ja, this.j, this.C + 1), null == a ? null : a) : a.Cd(a)
};
q.R = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return Mb(this)
};
q.X = function(a, b) {
  return Qb.a(xd.d ? xd.d(this.K, this.j + this.C, R(this.K)) : xd.call(null, this.K, this.j + this.C, R(this.K)), b)
};
q.Y = function(a, b, c) {
  return Qb.d(xd.d ? xd.d(this.K, this.j + this.C, R(this.K)) : xd.call(null, this.K, this.j + this.C, R(this.K)), b, c)
};
q.A = aa();
q.Z = function() {
  return this.ja[this.C]
};
q.aa = function(a) {
  return this.C + 1 < this.ja.length ? (a = U.l ? U.l(this.K, this.ja, this.j, this.C + 1) : U.call(null, this.K, this.ja, this.j, this.C + 1), null == a ? N : a) : a.Yb(a)
};
q.Cd = function() {
  var a = this.ja.length, a = this.j + a < $a(this.K) ? U.d ? U.d(this.K, this.j + a, 0) : U.call(null, this.K, this.j + a, 0) : null;
  return null == a ? null : a
};
q.G = function(a, b) {
  return Xb(a, b)
};
q.P = function(a, b) {
  return U.S ? U.S(this.K, this.ja, this.j, this.C, b) : U.call(null, this.K, this.ja, this.j, this.C, b)
};
q.T = function() {
  return hc(sd, this.h)
};
q.Ec = function() {
  return Rc.a(this.ja, this.C)
};
q.Yb = function() {
  var a = this.ja.length, a = this.j + a < $a(this.K) ? U.d ? U.d(this.K, this.j + a, 0) : U.call(null, this.K, this.j + a, 0) : null;
  return null == a ? N : a
};
var U = function() {
  function a(a, b, c, d, l) {
    return new wd(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new wd(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new wd(a, ld(a, b), b, c, null, null)
  }
  var d = null, d = function(d, f, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, k);
      case 5:
        return a.call(this, d, f, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.l = b;
  d.S = a;
  return d
}();
function yd(a, b, c, d, e) {
  this.h = a;
  this.ya = b;
  this.start = c;
  this.end = d;
  this.k = e;
  this.p = 0;
  this.e = 32400159
}
q = yd.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Vb(a)
};
q.ea = function(a, b) {
  return a.U(a, b, null)
};
q.W = function(a, b, c) {
  return a.U(a, b, c)
};
q.za = function(a, b, c) {
  var d = this, e = d.start + b;
  return zd.S ? zd.S(d.h, dc.d(d.ya, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : zd.call(null, d.h, dc.d(d.ya, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
q.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(this, c);
      case 3:
        return this.U(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.R = function(a, b) {
  return zd.S ? zd.S(this.h, nb(this.ya, this.end, b), this.start, this.end + 1, null) : zd.call(null, this.h, nb(this.ya, this.end, b), this.start, this.end + 1, null)
};
q.toString = function() {
  return Mb(this)
};
q.X = function(a, b) {
  return Qb.a(a, b)
};
q.Y = function(a, b, c) {
  return Qb.d(a, b, c)
};
q.A = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : Q(D.a(a.ya, d), new Nc(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
q.L = function() {
  return this.end - this.start
};
q.Uc = function(a, b, c) {
  return a.za(a, b, c)
};
q.G = function(a, b) {
  return Xb(a, b)
};
q.P = function(a, b) {
  return zd.S ? zd.S(b, this.ya, this.start, this.end, this.k) : zd.call(null, b, this.ya, this.start, this.end, this.k)
};
q.O = g("h");
q.N = function(a, b) {
  var c = 0 > b;
  return(c ? c : this.end <= this.start + b) ? kd(b, this.end - this.start) : D.a(this.ya, this.start + b)
};
q.U = function(a, b, c) {
  return((a = 0 > b) ? a : this.end <= this.start + b) ? c : D.d(this.ya, this.start + b, c)
};
q.T = function() {
  return hc(sd, this.h)
};
function zd(a, b, c, d, e) {
  for(;;) {
    if(b instanceof yd) {
      var f = b.start + c, h = b.start + d;
      b = b.ya;
      c = f;
      d = h
    }else {
      var k = R(b);
      if(function() {
        var a = 0 > c;
        return a || (a = 0 > d) ? a : (a = c > k) ? a : d > k
      }()) {
        throw Error("Index out of bounds");
      }
      return new yd(a, b, c, d, e)
    }
  }
}
var xd = function() {
  function a(a, b, c) {
    return zd(null, a, b, c, null)
  }
  function b(a, b) {
    return c.d(a, b, R(a))
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c
}();
function qd(a) {
  return new fd({}, a.b.slice())
}
function rd(a) {
  var b = Array(32);
  rc(a, 0, b, 0, a.length);
  return b
}
var Bd = function Ad(b, c, d, e) {
  d = b.root.r === d.r ? d : new fd(b.root.r, d.b.slice());
  var f = b.f - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var h = d.b[f];
    b = null != h ? Ad(b, c - 5, h, e) : hd(b.root.r, c - 5, e)
  }
  d.b[f] = b;
  return d
};
function pd(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.t = d;
  this.e = 275;
  this.p = 88
}
q = pd.prototype;
q.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ea(this, c);
      case 3:
        return this.W(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.ea = function(a, b) {
  return a.U(a, b, null)
};
q.W = function(a, b, c) {
  return a.U(a, b, c)
};
q.N = function(a, b) {
  if(this.root.r) {
    return ld(a, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
q.U = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.f : d) ? a.N(a, b) : c
};
q.L = function() {
  if(this.root.r) {
    return this.f
  }
  throw Error("count after persistent!");
};
function Cd(a, b, c, d) {
  if(a.root.r) {
    if(function() {
      var b = 0 <= c;
      return b ? c < a.f : b
    }()) {
      if(gd(b) <= c) {
        a.t[c & 31] = d
      }else {
        var e = function h(b, e) {
          var m = a.root.r === e.r ? e : new fd(a.root.r, e.b.slice());
          if(0 === b) {
            m.b[c & 31] = d
          }else {
            var n = c >>> b & 31, r = h(b - 5, m.b[n]);
            m.b[n] = r
          }
          return m
        }.call(null, a.shift, a.root);
        a.root = e
      }
      return b
    }
    if(c === a.f) {
      return b.Cb(b, d)
    }
    if(w.n) {
      throw Error([B("Index "), B(c), B(" out of bounds for TransientVector of length"), B(a.f)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
}
q.jb = function(a, b, c) {
  return Cd(a, a, b, c)
};
q.Cb = function(a, b) {
  if(this.root.r) {
    if(32 > this.f - gd(a)) {
      this.t[this.f & 31] = b
    }else {
      var c = new fd(this.root.r, this.t), d = Array(32);
      d[0] = b;
      this.t = d;
      if(this.f >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = hd(this.root.r, this.shift, c);
        this.root = new fd(this.root.r, d);
        this.shift = e
      }else {
        this.root = Bd(a, this.shift, this.root, c)
      }
    }
    this.f += 1;
    return a
  }
  throw Error("conj! after persistent!");
};
q.$b = function(a) {
  if(this.root.r) {
    this.root.r = null;
    a = this.f - gd(a);
    var b = Array(a);
    rc(this.t, 0, b, 0, a);
    return new od(null, this.f, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function Dd() {
  this.p = 0;
  this.e = 2097152
}
Dd.prototype.G = p(!1);
var Ed = new Dd;
function Fd(a, b) {
  return tc(nc(b) ? R(a) === R(b) ? $c(bd, dd.a(function(a) {
    return Pb.a(bc.d(b, L(a), Ed), L(O(a)))
  }, a)) : null : null)
}
function Gd(a, b) {
  var c = a.b;
  if(b instanceof T) {
    a: {
      for(var d = c.length, e = b.Pa, f = 0;;) {
        if(d <= f) {
          c = -1;
          break a
        }
        var h = c[f], k = h instanceof T;
        if(k ? e === h.Pa : k) {
          c = f;
          break a
        }
        if(w.n) {
          f += 2
        }else {
          c = null;
          break a
        }
      }
      c = void 0
    }
  }else {
    if((d = u(b)) ? d : "number" === typeof b) {
      a: {
        d = c.length;
        for(e = 0;;) {
          if(d <= e) {
            c = -1;
            break a
          }
          if(b === c[e]) {
            c = e;
            break a
          }
          if(w.n) {
            e += 2
          }else {
            c = null;
            break a
          }
        }
        c = void 0
      }
    }else {
      if(b instanceof I) {
        a: {
          d = c.length;
          e = b.eb;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            h = c[f];
            if((k = h instanceof I) ? e === h.eb : k) {
              c = f;
              break a
            }
            if(w.n) {
              f += 2
            }else {
              c = null;
              break a
            }
          }
          c = void 0
        }
      }else {
        if(null == b) {
          a: {
            d = c.length;
            for(e = 0;;) {
              if(d <= e) {
                c = -1;
                break a
              }
              if(null == c[e]) {
                c = e;
                break a
              }
              if(w.n) {
                e += 2
              }else {
                c = null;
                break a
              }
            }
            c = void 0
          }
        }else {
          if(w.n) {
            a: {
              d = c.length;
              for(e = 0;;) {
                if(d <= e) {
                  c = -1;
                  break a
                }
                if(Pb.a(b, c[e])) {
                  c = e;
                  break a
                }
                if(w.n) {
                  e += 2
                }else {
                  c = null;
                  break a
                }
              }
              c = void 0
            }
          }else {
            c = null
          }
        }
      }
    }
  }
  return c
}
function Hd(a, b, c) {
  this.b = a;
  this.j = b;
  this.fb = c;
  this.p = 0;
  this.e = 32374990
}
q = Hd.prototype;
q.M = function(a) {
  return Vb(a)
};
q.ma = function() {
  return this.j < this.b.length - 2 ? new Hd(this.b, this.j + 2, this.fb) : null
};
q.R = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return Mb(this)
};
q.X = function(a, b) {
  return yc.a(b, a)
};
q.Y = function(a, b, c) {
  return yc.d(b, c, a)
};
q.A = aa();
q.L = function() {
  return(this.b.length - this.j) / 2
};
q.Z = function() {
  return ud([this.b[this.j], this.b[this.j + 1]])
};
q.aa = function() {
  return this.j < this.b.length - 2 ? new Hd(this.b, this.j + 2, this.fb) : N
};
q.G = function(a, b) {
  return Xb(a, b)
};
q.P = function(a, b) {
  return new Hd(this.b, this.j, b)
};
q.O = g("fb");
q.T = function() {
  return hc(N, this.fb)
};
function Id(a, b, c, d) {
  this.h = a;
  this.f = b;
  this.b = c;
  this.k = d;
  this.p = 4;
  this.e = 16123663
}
q = Id.prototype;
q.Zb = function() {
  return new Jd({}, this.b.length, this.b.slice())
};
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Ec(a)
};
q.ea = function(a, b) {
  return a.W(a, b, null)
};
q.W = function(a, b, c) {
  a = Gd(a, b);
  return-1 === a ? c : this.b[a + 1]
};
q.za = function(a, b, c) {
  var d = Gd(a, b);
  if(-1 === d) {
    if(this.f < Kd) {
      d = a.b;
      a = d.length;
      for(var e = Array(a + 2), f = 0;;) {
        if(f < a) {
          e[f] = d[f], f += 1
        }else {
          break
        }
      }
      e[a] = b;
      e[a + 1] = c;
      return new Id(this.h, this.f + 1, e, null)
    }
    return sb(hb(ed(Ld, a), b, c), this.h)
  }
  return c === this.b[d + 1] ? a : w.n ? (b = this.b.slice(), b[d + 1] = c, new Id(this.h, this.f, b, null)) : null
};
q.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ea(this, c);
      case 3:
        return this.W(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.R = function(a, b) {
  return oc(b) ? a.za(a, D.a(b, 0), D.a(b, 1)) : xc.d(cb, a, b)
};
q.toString = function() {
  return Mb(this)
};
q.A = function() {
  return 0 <= this.b.length - 2 ? new Hd(this.b, 0, null) : null
};
q.L = g("f");
q.G = function(a, b) {
  return Fd(a, b)
};
q.P = function(a, b) {
  return new Id(b, this.f, this.b, this.k)
};
q.O = g("h");
q.T = function() {
  return sb(Md, this.h)
};
var Md = new Id(null, 0, [], null), Kd = 8;
function Sa(a) {
  return new Id(null, a.length / 2, a, null)
}
function Jd(a, b, c) {
  this.mb = a;
  this.$a = b;
  this.b = c;
  this.p = 56;
  this.e = 258
}
q = Jd.prototype;
q.jb = function(a, b, c) {
  if(x(this.mb)) {
    var d = Gd(a, b);
    if(-1 === d) {
      if(this.$a + 2 <= 2 * Kd) {
        return this.$a += 2, this.b.push(b), this.b.push(c), a
      }
      a = Nd.a ? Nd.a(this.$a, this.b) : Nd.call(null, this.$a, this.b);
      return Hb(a, b, c)
    }
    c !== this.b[d + 1] && (this.b[d + 1] = c);
    return a
  }
  throw Error("assoc! after persistent!");
};
q.Cb = function(a, b) {
  if(x(this.mb)) {
    var c;
    c = b ? ((c = b.e & 2048) ? c : b.Pe) ? !0 : b.e ? !1 : z(jb, b) : z(jb, b);
    if(c) {
      return a.jb(a, Fc.c ? Fc.c(b) : Fc.call(null, b), Gc.c ? Gc.c(b) : Gc.call(null, b))
    }
    c = K(b);
    for(var d = a;;) {
      var e = L(c);
      if(x(e)) {
        c = O(c), d = d.jb(d, Fc.c ? Fc.c(e) : Fc.call(null, e), Gc.c ? Gc.c(e) : Gc.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
q.$b = function() {
  if(x(this.mb)) {
    return this.mb = !1, new Id(null, Ac(this.$a), this.b, null)
  }
  throw Error("persistent! called twice");
};
q.ea = function(a, b) {
  return a.W(a, b, null)
};
q.W = function(a, b, c) {
  if(x(this.mb)) {
    return a = Gd(a, b), -1 === a ? c : this.b[a + 1]
  }
  throw Error("lookup after persistent!");
};
q.L = function() {
  if(x(this.mb)) {
    return Ac(this.$a)
  }
  throw Error("count after persistent!");
};
function Nd(a, b) {
  for(var c = Eb(Ld), d = 0;;) {
    if(d < a) {
      c = Hb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Od() {
  this.J = !1
}
function Pd(a, b) {
  return a === b ? !0 : Kc(a, b) ? !0 : w.n ? Pb.a(a, b) : null
}
var Qd = function() {
  function a(a, b, c, h, k) {
    a = a.slice();
    a[b] = c;
    a[h] = k;
    return a
  }
  function b(a, b, c) {
    a = a.slice();
    a[b] = c;
    return a
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.S = a;
  return c
}(), Rd = function() {
  function a(a, b, c, h, k, l) {
    a = a.nb(b);
    a.b[c] = h;
    a.b[k] = l;
    return a
  }
  function b(a, b, c, h) {
    a = a.nb(b);
    a.b[c] = h;
    return a
  }
  var c = null, c = function(c, e, f, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.sa = a;
  return c
}();
function Sd(a, b, c) {
  this.r = a;
  this.I = b;
  this.b = c
}
q = Sd.prototype;
q.oa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Dc(this.I & h - 1);
  if(0 === (this.I & h)) {
    var l = Dc(this.I);
    if(2 * l < this.b.length) {
      a = this.nb(a);
      b = a.b;
      f.J = !0;
      a: {
        for(c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.I |= h;
      return a
    }
    if(16 <= l) {
      k = Array(32);
      k[c >>> b & 31] = Td.oa(a, b + 5, c, d, e, f);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.I >>> d & 1) && (k[d] = null != this.b[e] ? Td.oa(a, b + 5, J.c(this.b[e]), this.b[e], this.b[e + 1], f) : this.b[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new Ud(a, l + 1, k)
    }
    return w.n ? (b = Array(2 * (l + 4)), rc(this.b, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, rc(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.J = !0, a = this.nb(a), a.b = b, a.I |= h, a) : null
  }
  l = this.b[2 * k];
  h = this.b[2 * k + 1];
  return null == l ? (l = h.oa(a, b + 5, c, d, e, f), l === h ? this : Rd.l(this, a, 2 * k + 1, l)) : Pd(d, l) ? e === h ? this : Rd.l(this, a, 2 * k + 1, e) : w.n ? (f.J = !0, Rd.sa(this, a, 2 * k, null, 2 * k + 1, Vd.ib ? Vd.ib(a, b + 5, l, h, c, d, e) : Vd.call(null, a, b + 5, l, h, c, d, e))) : null
};
q.Kb = function() {
  return Wd.c ? Wd.c(this.b) : Wd.call(null, this.b)
};
q.nb = function(a) {
  if(a === this.r) {
    return this
  }
  var b = Dc(this.I), c = Array(0 > b ? 4 : 2 * (b + 1));
  rc(this.b, 0, c, 0, 2 * b);
  return new Sd(a, this.I, c)
};
q.na = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Dc(this.I & f - 1);
  if(0 === (this.I & f)) {
    var k = Dc(this.I);
    if(16 <= k) {
      h = Array(32);
      h[b >>> a & 31] = Td.na(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.I >>> c & 1) && (h[c] = null != this.b[d] ? Td.na(a + 5, J.c(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Ud(null, k + 1, h)
    }
    a = Array(2 * (k + 1));
    rc(this.b, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    rc(this.b, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.J = !0;
    return new Sd(null, this.I | f, a)
  }
  k = this.b[2 * h];
  f = this.b[2 * h + 1];
  return null == k ? (k = f.na(a + 5, b, c, d, e), k === f ? this : new Sd(null, this.I, Qd.d(this.b, 2 * h + 1, k))) : Pd(c, k) ? d === f ? this : new Sd(null, this.I, Qd.d(this.b, 2 * h + 1, d)) : w.n ? (e.J = !0, new Sd(null, this.I, Qd.S(this.b, 2 * h, null, 2 * h + 1, Vd.sa ? Vd.sa(a + 5, k, f, b, c, d) : Vd.call(null, a + 5, k, f, b, c, d)))) : null
};
q.Za = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.I & e)) {
    return d
  }
  var f = Dc(this.I & e - 1), e = this.b[2 * f], f = this.b[2 * f + 1];
  return null == e ? f.Za(a + 5, b, c, d) : Pd(c, e) ? f : w.n ? d : null
};
var Td = new Sd(null, 0, []);
function Ud(a, b, c) {
  this.r = a;
  this.f = b;
  this.b = c
}
q = Ud.prototype;
q.oa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.b[h];
  if(null == k) {
    return a = Rd.l(this, a, h, Td.oa(a, b + 5, c, d, e, f)), a.f += 1, a
  }
  b = k.oa(a, b + 5, c, d, e, f);
  return b === k ? this : Rd.l(this, a, h, b)
};
q.Kb = function() {
  return Xd.c ? Xd.c(this.b) : Xd.call(null, this.b)
};
q.nb = function(a) {
  return a === this.r ? this : new Ud(a, this.f, this.b.slice())
};
q.na = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.b[f];
  if(null == h) {
    return new Ud(null, this.f + 1, Qd.d(this.b, f, Td.na(a + 5, b, c, d, e)))
  }
  a = h.na(a + 5, b, c, d, e);
  return a === h ? this : new Ud(null, this.f, Qd.d(this.b, f, a))
};
q.Za = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.Za(a + 5, b, c, d) : d
};
function Yd(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(Pd(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Zd(a, b, c, d) {
  this.r = a;
  this.Ma = b;
  this.f = c;
  this.b = d
}
q = Zd.prototype;
q.oa = function(a, b, c, d, e, f) {
  if(c === this.Ma) {
    b = Yd(this.b, this.f, d);
    if(-1 === b) {
      if(this.b.length > 2 * this.f) {
        return a = Rd.sa(this, a, 2 * this.f, d, 2 * this.f + 1, e), f.J = !0, a.f += 1, a
      }
      c = this.b.length;
      b = Array(c + 2);
      rc(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.J = !0;
      f = this.f + 1;
      a === this.r ? (this.b = b, this.f = f, a = this) : a = new Zd(this.r, this.Ma, f, b);
      return a
    }
    return this.b[b + 1] === e ? this : Rd.l(this, a, b + 1, e)
  }
  return(new Sd(a, 1 << (this.Ma >>> b & 31), [null, this, null, null])).oa(a, b, c, d, e, f)
};
q.Kb = function() {
  return Wd.c ? Wd.c(this.b) : Wd.call(null, this.b)
};
q.nb = function(a) {
  if(a === this.r) {
    return this
  }
  var b = Array(2 * (this.f + 1));
  rc(this.b, 0, b, 0, 2 * this.f);
  return new Zd(a, this.Ma, this.f, b)
};
q.na = function(a, b, c, d, e) {
  return b === this.Ma ? (a = Yd(this.b, this.f, c), -1 === a ? (a = this.b.length, b = Array(a + 2), rc(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.J = !0, new Zd(null, this.Ma, this.f + 1, b)) : Pb.a(this.b[a], d) ? this : new Zd(null, this.Ma, this.f, Qd.d(this.b, a + 1, d))) : (new Sd(null, 1 << (this.Ma >>> a & 31), [null, this])).na(a, b, c, d, e)
};
q.Za = function(a, b, c, d) {
  a = Yd(this.b, this.f, c);
  return 0 > a ? d : Pd(c, this.b[a]) ? this.b[a + 1] : w.n ? d : null
};
var Vd = function() {
  function a(a, b, c, h, k, l, m) {
    var n = J.c(c);
    if(n === k) {
      return new Zd(null, n, 2, [c, h, l, m])
    }
    var r = new Od;
    return Td.oa(a, b, n, c, h, r).oa(a, b, k, l, m, r)
  }
  function b(a, b, c, h, k, l) {
    var m = J.c(b);
    if(m === h) {
      return new Zd(null, m, 2, [b, c, k, l])
    }
    var n = new Od;
    return Td.na(a, m, b, c, n).na(a, h, k, l, n)
  }
  var c = null, c = function(c, e, f, h, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, m)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.sa = b;
  c.ib = a;
  return c
}();
function $d(a, b, c, d, e) {
  this.h = a;
  this.pa = b;
  this.j = c;
  this.u = d;
  this.k = e;
  this.p = 0;
  this.e = 32374860
}
q = $d.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Vb(a)
};
q.R = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return Mb(this)
};
q.X = function(a, b) {
  return yc.a(b, a)
};
q.Y = function(a, b, c) {
  return yc.d(b, c, a)
};
q.A = aa();
q.Z = function() {
  return null == this.u ? ud([this.pa[this.j], this.pa[this.j + 1]]) : L(this.u)
};
q.aa = function() {
  return null == this.u ? Wd.d ? Wd.d(this.pa, this.j + 2, null) : Wd.call(null, this.pa, this.j + 2, null) : Wd.d ? Wd.d(this.pa, this.j, O(this.u)) : Wd.call(null, this.pa, this.j, O(this.u))
};
q.G = function(a, b) {
  return Xb(a, b)
};
q.P = function(a, b) {
  return new $d(b, this.pa, this.j, this.u, this.k)
};
q.O = g("h");
q.T = function() {
  return hc(N, this.h)
};
var Wd = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new $d(null, a, b, null, null)
          }
          var h = a[b + 1];
          if(x(h) && (h = h.Kb(), x(h))) {
            return new $d(null, a, b + 2, h, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new $d(null, a, b, c, null)
    }
  }
  function b(a) {
    return c.d(a, 0, null)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.d = a;
  return c
}();
function ae(a, b, c, d, e) {
  this.h = a;
  this.pa = b;
  this.j = c;
  this.u = d;
  this.k = e;
  this.p = 0;
  this.e = 32374860
}
q = ae.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Vb(a)
};
q.R = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return Mb(this)
};
q.X = function(a, b) {
  return yc.a(b, a)
};
q.Y = function(a, b, c) {
  return yc.d(b, c, a)
};
q.A = aa();
q.Z = function() {
  return L(this.u)
};
q.aa = function() {
  return Xd.l ? Xd.l(null, this.pa, this.j, O(this.u)) : Xd.call(null, null, this.pa, this.j, O(this.u))
};
q.G = function(a, b) {
  return Xb(a, b)
};
q.P = function(a, b) {
  return new ae(b, this.pa, this.j, this.u, this.k)
};
q.O = g("h");
q.T = function() {
  return hc(N, this.h)
};
var Xd = function() {
  function a(a, b, c, h) {
    if(null == h) {
      for(h = b.length;;) {
        if(c < h) {
          var k = b[c];
          if(x(k) && (k = k.Kb(), x(k))) {
            return new ae(a, b, c + 1, k, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new ae(a, b, c, h, null)
    }
  }
  function b(a) {
    return c.l(null, a, 0, null)
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.l = a;
  return c
}();
function be(a, b, c, d, e, f) {
  this.h = a;
  this.f = b;
  this.root = c;
  this.ca = d;
  this.ia = e;
  this.k = f;
  this.p = 4;
  this.e = 16123663
}
q = be.prototype;
q.Zb = function() {
  return new ce({}, this.root, this.f, this.ca, this.ia)
};
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Ec(a)
};
q.ea = function(a, b) {
  return a.W(a, b, null)
};
q.W = function(a, b, c) {
  return null == b ? this.ca ? this.ia : c : null == this.root ? c : w.n ? this.root.Za(0, J.c(b), b, c) : null
};
q.za = function(a, b, c) {
  if(null == b) {
    var d = this.ca;
    return(d ? c === this.ia : d) ? a : new be(this.h, this.ca ? this.f : this.f + 1, this.root, !0, c, null)
  }
  d = new Od;
  c = (null == this.root ? Td : this.root).na(0, J.c(b), b, c, d);
  return c === this.root ? a : new be(this.h, d.J ? this.f + 1 : this.f, c, this.ca, this.ia, null)
};
q.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ea(this, c);
      case 3:
        return this.W(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.R = function(a, b) {
  return oc(b) ? a.za(a, D.a(b, 0), D.a(b, 1)) : xc.d(cb, a, b)
};
q.toString = function() {
  return Mb(this)
};
q.A = function() {
  if(0 < this.f) {
    var a = null != this.root ? this.root.Kb() : null;
    return this.ca ? Q(ud([null, this.ia]), a) : a
  }
  return null
};
q.L = g("f");
q.G = function(a, b) {
  return Fd(a, b)
};
q.P = function(a, b) {
  return new be(b, this.f, this.root, this.ca, this.ia, this.k)
};
q.O = g("h");
q.T = function() {
  return sb(Ld, this.h)
};
var Ld = new be(null, 0, null, !1, null, 0);
function ce(a, b, c, d, e) {
  this.r = a;
  this.root = b;
  this.count = c;
  this.ca = d;
  this.ia = e;
  this.p = 56;
  this.e = 258
}
q = ce.prototype;
q.jb = function(a, b, c) {
  return de(a, b, c)
};
q.Cb = function(a, b) {
  var c;
  a: {
    if(a.r) {
      c = b ? ((c = b.e & 2048) ? c : b.Pe) ? !0 : b.e ? !1 : z(jb, b) : z(jb, b);
      if(c) {
        c = de(a, Fc.c ? Fc.c(b) : Fc.call(null, b), Gc.c ? Gc.c(b) : Gc.call(null, b));
        break a
      }
      c = K(b);
      for(var d = a;;) {
        var e = L(c);
        if(x(e)) {
          c = O(c), d = de(d, Fc.c ? Fc.c(e) : Fc.call(null, e), Gc.c ? Gc.c(e) : Gc.call(null, e))
        }else {
          c = d;
          break a
        }
      }
    }else {
      throw Error("conj! after persistent");
    }
    c = void 0
  }
  return c
};
q.$b = function(a) {
  if(a.r) {
    a.r = null, a = new be(null, a.count, a.root, a.ca, a.ia, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
q.ea = function(a, b) {
  return null == b ? this.ca ? this.ia : null : null == this.root ? null : this.root.Za(0, J.c(b), b)
};
q.W = function(a, b, c) {
  return null == b ? this.ca ? this.ia : c : null == this.root ? c : this.root.Za(0, J.c(b), b, c)
};
q.L = function() {
  if(this.r) {
    return this.count
  }
  throw Error("count after persistent!");
};
function de(a, b, c) {
  if(a.r) {
    if(null == b) {
      a.ia !== c && (a.ia = c), a.ca || (a.count += 1, a.ca = !0)
    }else {
      var d = new Od;
      b = (null == a.root ? Td : a.root).oa(a.r, 0, J.c(b), b, c, d);
      b !== a.root && (a.root = b);
      d.J && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var cc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = K(a), e = Eb(Ld);;) {
      if(b) {
        a = O(O(b));
        var f = L(b), b = L(O(b)), e = Hb(e, f, b), b = a
      }else {
        return Gb(e)
      }
    }
  }
  a.s = 0;
  a.m = function(a) {
    a = K(a);
    return b(a)
  };
  a.g = b;
  return a
}(), ee = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return new Id(null, Ac(R(a)), gc.a(Wa, a), null)
  }
  a.s = 0;
  a.m = function(a) {
    a = K(a);
    return b(a)
  };
  a.g = b;
  return a
}();
function Fc(a) {
  return kb(a)
}
function Gc(a) {
  return lb(a)
}
var fe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return x(ad(a)) ? xc.a(function(a, b) {
      return Zb.a(x(a) ? a : Md, b)
    }, a) : null
  }
  a.s = 0;
  a.m = function(a) {
    a = K(a);
    return b(a)
  };
  a.g = b;
  return a
}();
function Lc(a) {
  var b;
  b = a ? ((b = a.p & 4096) ? b : a.Uf) ? !0 : !1 : !1;
  if(b) {
    return a.name
  }
  if("string" === typeof a) {
    return a
  }
  throw Error([B("Doesn't support name: "), B(a)].join(""));
}
function ge(a, b, c, d, e) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.k = e;
  this.p = 0;
  this.e = 32375006
}
q = ge.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Vb(a)
};
q.ma = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new ge(this.h, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new ge(this.h, this.start + this.step, this.end, this.step, null) : null
};
q.R = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return Mb(this)
};
q.X = function(a, b) {
  return Qb.a(a, b)
};
q.Y = function(a, b, c) {
  return Qb.d(a, b, c)
};
q.A = function(a) {
  return 0 < this.step ? this.start < this.end ? a : null : this.start > this.end ? a : null
};
q.L = function(a) {
  return Ta(a.A(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
q.Z = g("start");
q.aa = function(a) {
  return null != a.A(a) ? new ge(this.h, this.start + this.step, this.end, this.step, null) : N
};
q.G = function(a, b) {
  return Xb(a, b)
};
q.P = function(a, b) {
  return new ge(b, this.start, this.end, this.step, this.k)
};
q.O = g("h");
q.N = function(a, b) {
  if(b < a.L(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  throw Error("Index out of bounds");
};
q.U = function(a, b, c) {
  c = b < a.L(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
q.T = function() {
  return hc(N, this.h)
};
var he = function() {
  function a(a, b, c) {
    return new ge(null, a, b, c, null)
  }
  function b(a, b) {
    return e.d(a, b, 1)
  }
  function c(a) {
    return e.d(0, a, 1)
  }
  function d() {
    return e.d(0, Number.MAX_VALUE, 1)
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, h);
      case 3:
        return a.call(this, e, h, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.o = d;
  e.c = c;
  e.a = b;
  e.d = a;
  return e
}(), ie = function() {
  function a(a, b) {
    for(;;) {
      var c = K(b);
      if(x(c ? 0 < a : c)) {
        var c = a - 1, h = O(b);
        a = c;
        b = h
      }else {
        return null
      }
    }
  }
  function b(a) {
    for(;;) {
      if(K(a)) {
        a = O(a)
      }else {
        return null
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}(), je = function() {
  function a(a, b) {
    ie.a(a, b);
    return b
  }
  function b(a) {
    ie.c(a);
    return a
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c
}();
function V(a, b, c, d, e, f, h) {
  H(a, c);
  K(h) && (b.d ? b.d(L(h), a, f) : b.call(null, L(h), a, f));
  c = K(O(h));
  h = null;
  for(var k = 0, l = 0;;) {
    if(l < k) {
      var m = h.N(h, l);
      H(a, d);
      b.d ? b.d(m, a, f) : b.call(null, m, a, f);
      l += 1
    }else {
      if(c = K(c)) {
        h = c, pc(h) ? (c = Jb(h), l = Kb(h), h = c, k = R(c), c = l) : (c = L(h), H(a, d), b.d ? b.d(c, a, f) : b.call(null, c, a, f), c = O(h), h = null, k = 0), l = 0
      }else {
        break
      }
    }
  }
  return H(a, e)
}
var ke = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = P(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = K(b), f = null, h = 0, k = 0;;) {
      if(k < h) {
        var l = f.N(f, k);
        H(a, l);
        k += 1
      }else {
        if(e = K(e)) {
          f = e, pc(f) ? (e = Jb(f), h = Kb(f), f = e, l = R(e), e = h, h = l) : (l = L(f), H(a, l), e = O(f), f = null, h = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.s = 1;
  a.m = function(a) {
    var d = L(a);
    a = M(a);
    return b(d, a)
  };
  a.g = b;
  return a
}(), le = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function me(a) {
  return[B('"'), B(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return le[a]
  })), B('"')].join("")
}
var W = function ne(b, c, d) {
  if(null == b) {
    return H(c, "nil")
  }
  if(void 0 === b) {
    return H(c, "#\x3cundefined\x3e")
  }
  if(w.n) {
    x(function() {
      var c = bc.a(d, w.Rd);
      return x(c) ? (c = b ? ((c = b.e & 131072) ? c : b.Qe) ? !0 : b.e ? !1 : z(pb, b) : z(pb, b), x(c) ? ic(b) : c) : c
    }()) && (H(c, "^"), ne(ic(b), c, d), H(c, " "));
    if(null == b) {
      return H(c, "nil")
    }
    if(b.cc) {
      return b.Vc(b, c, d)
    }
    if(function() {
      var c;
      c = b ? ((c = b.e & 2147483648) ? c : b.V) ? !0 : !1 : !1;
      return c
    }()) {
      return b.D(b, c, d)
    }
    if(function() {
      var c = Ua(b) === Boolean;
      return c ? c : "number" === typeof b
    }()) {
      return H(c, "" + B(b))
    }
    if(b instanceof Array) {
      return V(c, ne, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if(u(b)) {
      return x(w.af.call(null, d)) ? H(c, me(b)) : H(c, b)
    }
    if(ec(b)) {
      return ke.g(c, P(["#\x3c", "" + B(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + B(b);;) {
          if(R(d) < c) {
            d = [B("0"), B(d)].join("")
          }else {
            return d
          }
        }
      };
      return ke.g(c, P(['#inst "', "" + B(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return x(b instanceof RegExp) ? ke.g(c, P(['#"', b.source, '"'], 0)) : function() {
      var c;
      c = b ? ((c = b.e & 2147483648) ? c : b.V) ? !0 : b.e ? !1 : z(Bb, b) : z(Bb, b);
      return c
    }() ? Cb(b, c, d) : w.n ? ke.g(c, P(["#\x3c", "" + B(b), "\x3e"], 0)) : null
  }
  return null
}, oe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = Ra(), e = null == a;
    if(e ? e : Ta(K(a))) {
      b = ""
    }else {
      var e = B, f = new Pa, h = new Lb(f);
      a: {
        W(L(a), h, b);
        a = K(O(a));
        for(var k = null, l = 0, m = 0;;) {
          if(m < l) {
            var n = k.N(k, m);
            H(h, " ");
            W(n, h, b);
            m += 1
          }else {
            if(a = K(a)) {
              k = a, pc(k) ? (a = Jb(k), l = Kb(k), k = a, n = R(a), a = l, l = n) : (n = L(k), H(h, " "), W(n, h, b), a = O(k), k = null, l = 0), m = 0
            }else {
              break a
            }
          }
        }
      }
      Ab(h);
      b = "" + e(f)
    }
    return b
  }
  a.s = 0;
  a.m = function(a) {
    a = K(a);
    return b(a)
  };
  a.g = b;
  return a
}();
Ob.prototype.V = !0;
Ob.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
yd.prototype.V = !0;
yd.prototype.D = function(a, b, c) {
  return V(b, W, "[", " ", "]", c, a)
};
Sc.prototype.V = !0;
Sc.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
Id.prototype.V = !0;
Id.prototype.D = function(a, b, c) {
  return V(b, function(a) {
    return V(b, W, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Nc.prototype.V = !0;
Nc.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
$d.prototype.V = !0;
$d.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
wd.prototype.V = !0;
wd.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
be.prototype.V = !0;
be.prototype.D = function(a, b, c) {
  return V(b, function(a) {
    return V(b, W, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
od.prototype.V = !0;
od.prototype.D = function(a, b, c) {
  return V(b, W, "[", " ", "]", c, a)
};
Hc.prototype.V = !0;
Hc.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
Hd.prototype.V = !0;
Hd.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
Ic.prototype.V = !0;
Ic.prototype.D = function(a, b) {
  return H(b, "()")
};
Jc.prototype.V = !0;
Jc.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
ge.prototype.V = !0;
ge.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
ae.prototype.V = !0;
ae.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
od.prototype.Dd = !0;
od.prototype.Ed = function(a, b) {
  return vc.a(a, b)
};
yd.prototype.Dd = !0;
yd.prototype.Ed = function(a, b) {
  return vc.a(a, b)
};
function pe(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.Ef = c;
  this.Ff = d;
  this.e = 2153938944;
  this.p = 2
}
q = pe.prototype;
q.M = function(a) {
  return ha(a)
};
q.Id = function(a, b, c) {
  for(var d = K(this.Ff), e = null, f = 0, h = 0;;) {
    if(h < f) {
      var k = e.N(e, h), l = ac.d(k, 0, null), k = ac.d(k, 1, null);
      k.l ? k.l(l, a, b, c) : k.call(null, l, a, b, c);
      h += 1
    }else {
      if(d = K(d)) {
        pc(d) ? (e = Jb(d), d = Kb(d), l = e, f = R(e), e = l) : (e = L(d), l = ac.d(e, 0, null), k = ac.d(e, 1, null), k.l ? k.l(l, a, b, c) : k.call(null, l, a, b, c), d = O(d), e = null, f = 0), h = 0
      }else {
        return null
      }
    }
  }
};
q.D = function(a, b, c) {
  H(b, "#\x3cAtom: ");
  W(this.state, b, c);
  return H(b, "\x3e")
};
q.O = g("h");
q.Fc = g("state");
q.G = function(a, b) {
  return a === b
};
var qe = function() {
  function a(a) {
    return new pe(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d = sc(c) ? gc.a(cc, c) : c, e = bc.a(d, w.ig), d = bc.a(d, w.Rd);
      return new pe(a, d, e, null)
    }
    a.s = 1;
    a.m = function(a) {
      var c = L(a);
      a = M(a);
      return b(c, a)
    };
    a.g = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, P(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 1;
  b.m = c.m;
  b.c = a;
  b.g = c.g;
  return b
}();
function re(a, b) {
  var c = a.Ef;
  if(x(c) && !x(c.c ? c.c(b) : c.call(null, b))) {
    throw Error([B("Assert failed: "), B("Validator rejected reference state"), B("\n"), B(oe.g(P([Wb(new I(null, "validate", "validate", 1233162959, null), new I(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  Db(a, c, b);
  return b
}
var se = function() {
  function a(a, b, c, d, e) {
    return re(a, b.l ? b.l(a.state, c, d, e) : b.call(null, a.state, c, d, e))
  }
  function b(a, b, c, d) {
    return re(a, b.d ? b.d(a.state, c, d) : b.call(null, a.state, c, d))
  }
  function c(a, b, c) {
    return re(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c))
  }
  function d(a, b) {
    return re(a, b.c ? b.c(a.state) : b.call(null, a.state))
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, G) {
      var C = null;
      5 < arguments.length && (C = P(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, C)
    }
    function b(a, c, d, e, f, h) {
      return re(a, gc.g(c, a.state, d, e, f, P([h], 0)))
    }
    a.s = 5;
    a.m = function(a) {
      var c = L(a);
      a = O(a);
      var d = L(a);
      a = O(a);
      var e = L(a);
      a = O(a);
      var f = L(a);
      a = O(a);
      var h = L(a);
      a = M(a);
      return b(c, d, e, f, h, a)
    };
    a.g = b;
    return a
  }(), e = function(e, k, l, m, n, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, n);
      default:
        return f.g(e, k, l, m, n, P(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.s = 5;
  e.m = f.m;
  e.a = d;
  e.d = c;
  e.l = b;
  e.S = a;
  e.g = f.g;
  return e
}(), te = {};
function ue(a) {
  if(a ? a.Oe : a) {
    return a.Oe(a)
  }
  var b;
  b = ue[t(null == a ? null : a)];
  if(!b && (b = ue._, !b)) {
    throw A("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a)
}
function ve(a) {
  return(a ? x(x(null) ? null : a.Ne) || (a.Wc ? 0 : z(te, a)) : z(te, a)) ? ue(a) : function() {
    var b = "string" === typeof a;
    return b || (b = "number" === typeof a) ? b : (b = a instanceof T) ? b : a instanceof I
  }() ? we.c ? we.c(a) : we.call(null, a) : oe.g(P([a], 0))
}
var we = function xe(b) {
  if(null == b) {
    return null
  }
  if(b ? x(x(null) ? null : b.Ne) || (b.Wc ? 0 : z(te, b)) : z(te, b)) {
    return ue(b)
  }
  if(b instanceof T) {
    return Lc(b)
  }
  if(b instanceof I) {
    return"" + B(b)
  }
  if(nc(b)) {
    var c = {};
    b = K(b);
    for(var d = null, e = 0, f = 0;;) {
      if(f < e) {
        var h = d.N(d, f), k = ac.d(h, 0, null), h = ac.d(h, 1, null);
        c[ve(k)] = xe(h);
        f += 1
      }else {
        if(b = K(b)) {
          pc(b) ? (e = Jb(b), b = Kb(b), d = e, e = R(e)) : (e = L(b), d = ac.d(e, 0, null), e = ac.d(e, 1, null), c[ve(d)] = xe(e), b = O(b), d = null, e = 0), f = 0
        }else {
          break
        }
      }
    }
    return c
  }
  return lc(b) ? gc.a(Wa, dd.a(xe, b)) : w.n ? b : null
}, ye = {};
function ze(a, b) {
  if(a ? a.Me : a) {
    return a.Me(a, b)
  }
  var c;
  c = ze[t(null == a ? null : a)];
  if(!c && (c = ze._, !c)) {
    throw A("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b)
}
var Ae = function() {
  function a(a) {
    return b.g(a, P([Sa([w.$e, !1])], 0))
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      if(a ? x(x(null) ? null : a.Sf) || (a.Wc ? 0 : z(ye, a)) : z(ye, a)) {
        return ze(a, gc.a(ee, c))
      }
      if(K(c)) {
        var d = sc(c) ? gc.a(cc, c) : c, e = bc.a(d, w.$e);
        return function(a, b, c, d) {
          return function C(e) {
            return sc(e) ? je.c(dd.a(C, e)) : lc(e) ? ed(ab(e), dd.a(C, e)) : e instanceof Array ? vd(dd.a(C, e)) : Ua(e) === Object ? ed(Md, function() {
              return function(a, b, c, d) {
                return function Ub(f) {
                  return new Nc(null, function(a, b, c, d) {
                    return function() {
                      for(;;) {
                        var a = K(f);
                        if(a) {
                          if(pc(a)) {
                            var b = Jb(a), c = R(b), h = new Pc(Array(c), 0);
                            a: {
                              for(var k = 0;;) {
                                if(k < c) {
                                  var l = D.a(b, k), l = ud([d.c ? d.c(l) : d.call(null, l), C(e[l])]);
                                  h.add(l);
                                  k += 1
                                }else {
                                  b = !0;
                                  break a
                                }
                              }
                              b = void 0
                            }
                            return b ? Tc(h.la(), Ub(Kb(a))) : Tc(h.la(), null)
                          }
                          h = L(a);
                          return Q(ud([d.c ? d.c(h) : d.call(null, h), C(e[h])]), Ub(M(a)))
                        }
                        return null
                      }
                    }
                  }(a, b, c, d), null, null)
                }
              }(a, b, c, d)(qc(e))
            }()) : w.n ? e : null
          }
        }(c, d, e, x(e) ? Mc : B)(a)
      }
      return null
    }
    a.s = 1;
    a.m = function(a) {
      var c = L(a);
      a = M(a);
      return b(c, a)
    };
    a.g = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, P(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 1;
  b.m = c.m;
  b.c = a;
  b.g = c.g;
  return b
}(), Bc = function() {
  function a(a) {
    return(Math.random.o ? Math.random.o() : Math.random.call(null)) * a
  }
  function b() {
    return c.c(1)
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = b;
  c.c = a;
  return c
}(), Cc = function(a) {
  return Math.floor.c ? Math.floor.c((Math.random.o ? Math.random.o() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.o ? Math.random.o() : Math.random.call(null)) * a)
};
var Be, Ce, De, Ee;
function Fe() {
  return s.navigator ? s.navigator.userAgent : null
}
Ee = De = Ce = Be = !1;
var Ge;
if(Ge = Fe()) {
  var He = s.navigator;
  Be = 0 == Ge.indexOf("Opera");
  Ce = !Be && -1 != Ge.indexOf("MSIE");
  De = !Be && -1 != Ge.indexOf("WebKit");
  Ee = !Be && !De && "Gecko" == He.product
}
var Ie = Be, X = Ce, Je = Ee, Ke = De, Le = s.navigator, Me = -1 != (Le && Le.platform || "").indexOf("Mac");
function Ne() {
  var a = s.document;
  return a ? a.documentMode : void 0
}
var Oe;
a: {
  var Pe = "", Qe;
  if(Ie && s.opera) {
    var Re = s.opera.version, Pe = "function" == typeof Re ? Re() : Re
  }else {
    if(Je ? Qe = /rv\:([^\);]+)(\)|;)/ : X ? Qe = /MSIE\s+([^\);]+)(\)|;)/ : Ke && (Qe = /WebKit\/(\S+)/), Qe) {
      var Se = Qe.exec(Fe()), Pe = Se ? Se[1] : ""
    }
  }
  if(X) {
    var Te = Ne();
    if(Te > parseFloat(Pe)) {
      Oe = String(Te);
      break a
    }
  }
  Oe = Pe
}
var Ue = {};
function Ve(a) {
  var b;
  if(!(b = Ue[a])) {
    b = 0;
    for(var c = String(Oe).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], r = m.exec(k) || ["", "", ""];
        if(0 == n[0].length && 0 == r[0].length) {
          break
        }
        b = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == r[2].length) ? -1 : (0 == n[2].length) > (0 == r[2].length) ? 1 : 0) || (n[2] < r[2] ? -1 : n[2] > r[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Ue[a] = 0 <= b
  }
  return b
}
var We = s.document, Xe = We && X ? Ne() || ("CSS1Compat" == We.compatMode ? parseInt(Oe, 10) : 5) : void 0;
function Ye() {
  0 != Ze && (this.jg = Error().stack, $e[ha(this)] = this)
}
var Ze = 0, $e = {};
Ye.prototype.lb = !1;
Ye.prototype.Zc = function() {
  if(!this.lb && (this.lb = !0, this.B(), 0 != Ze)) {
    var a = ha(this);
    delete $e[a]
  }
};
Ye.prototype.B = function() {
  if(this.qe) {
    for(;this.qe.length;) {
      this.qe.shift()()
    }
  }
};
function af(a) {
  a && "function" == typeof a.Zc && a.Zc()
}
;var bf = !X || X && 9 <= Xe, cf = X && !Ve("9");
!Ke || Ve("528");
Je && Ve("1.9b") || X && Ve("8") || Ie && Ve("9.5") || Ke && Ve("528");
Je && !Ve("8") || X && Ve("9");
function df(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
q = df.prototype;
q.B = function() {
};
q.Zc = function() {
};
q.wb = !1;
q.defaultPrevented = !1;
q.sc = !0;
q.preventDefault = function() {
  this.defaultPrevented = !0;
  this.sc = !1
};
function ef(a) {
  ef[" "](a);
  return a
}
ef[" "] = ca;
function ff(a, b) {
  try {
    return ef(a[b]), !0
  }catch(c) {
  }
  return!1
}
;function gf(a, b) {
  a && this.jc(a, b)
}
pa(gf, df);
q = gf.prototype;
q.target = null;
q.relatedTarget = null;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = !1;
q.altKey = !1;
q.shiftKey = !1;
q.metaKey = !1;
q.uf = !1;
q.hc = null;
q.jc = function(a, b) {
  var c = this.type = a.type;
  df.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  d ? Je && (ff(d, "nodeName") || (d = null)) : "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  this.relatedTarget = d;
  this.offsetX = Ke || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = Ke || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.uf = Me ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.hc = a;
  a.defaultPrevented && this.preventDefault();
  delete this.wb
};
q.preventDefault = function() {
  gf.ka.preventDefault.call(this);
  var a = this.hc;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, cf) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
q.B = function() {
};
var hf = 0;
function jf() {
}
q = jf.prototype;
q.key = 0;
q.cb = !1;
q.Xb = !1;
q.jc = function(a, b, c, d, e, f) {
  if(fa(a)) {
    this.ge = !0
  }else {
    if(a && a.handleEvent && fa(a.handleEvent)) {
      this.ge = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.Ra = a;
  this.te = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.rb = f;
  this.Xb = !1;
  this.key = ++hf;
  this.cb = !1
};
q.handleEvent = function(a) {
  return this.ge ? this.Ra.call(this.rb || this.src, a) : this.Ra.handleEvent.call(this.Ra, a)
};
var kf = {}, lf = {}, mf = {}, nf = {};
function of(a, b, c, d, e) {
  if(da(b)) {
    for(var f = 0;f < b.length;f++) {
      of(a, b[f], c, d, e)
    }
    return null
  }
  a = pf(a, b, c, !1, d, e);
  b = a.key;
  kf[b] = a;
  return b
}
function pf(a, b, c, d, e, f) {
  if(!b) {
    throw Error("Invalid event type");
  }
  e = !!e;
  var h = lf;
  b in h || (h[b] = {v:0, ba:0});
  h = h[b];
  e in h || (h[e] = {v:0, ba:0}, h.v++);
  var h = h[e], k = ha(a), l;
  h.ba++;
  if(h[k]) {
    l = h[k];
    for(var m = 0;m < l.length;m++) {
      if(h = l[m], h.Ra == c && h.rb == f) {
        if(h.cb) {
          break
        }
        d || (l[m].Xb = !1);
        return l[m]
      }
    }
  }else {
    l = h[k] = [], h.v++
  }
  m = qf();
  h = new jf;
  h.jc(c, m, a, b, e, f);
  h.Xb = d;
  m.src = a;
  m.Ra = h;
  l.push(h);
  mf[k] || (mf[k] = []);
  mf[k].push(h);
  a.addEventListener ? a != s && a.Vd || a.addEventListener(b, m, e) : a.attachEvent(b in nf ? nf[b] : nf[b] = "on" + b, m);
  return h
}
function qf() {
  var a = rf, b = bf ? function(c) {
    return a.call(b.src, b.Ra, c)
  } : function(c) {
    c = a.call(b.src, b.Ra, c);
    if(!c) {
      return c
    }
  };
  return b
}
function sf(a, b, c, d, e) {
  if(da(b)) {
    for(var f = 0;f < b.length;f++) {
      sf(a, b[f], c, d, e)
    }
    return null
  }
  a = pf(a, b, c, !0, d, e);
  b = a.key;
  kf[b] = a;
  return b
}
function tf(a, b, c, d, e) {
  if(da(b)) {
    for(var f = 0;f < b.length;f++) {
      tf(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = lf;
      if(b in f && (f = f[b], d in f && (f = f[d], a = ha(a), f[a]))) {
        a = f[a];
        break a
      }
      a = null
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].Ra == c && a[f].capture == d && a[f].rb == e) {
          uf(a[f].key);
          break
        }
      }
    }
  }
}
function uf(a) {
  var b = kf[a];
  if(!b || b.cb) {
    return!1
  }
  var c = b.src, d = b.type, e = b.te, f = b.capture;
  c.removeEventListener ? c != s && c.Vd || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in nf ? nf[d] : nf[d] = "on" + d, e);
  c = ha(c);
  mf[c] && (e = mf[c], Ha(e, b), 0 == e.length && delete mf[c]);
  b.cb = !0;
  if(b = lf[d][f][c]) {
    b.me = !0, vf(d, f, c, b)
  }
  delete kf[a];
  return!0
}
function vf(a, b, c, d) {
  if(!d.kc && d.me) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].cb ? d[e].te.src = null : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.me = !1;
    0 == f && (delete lf[a][b][c], lf[a][b].v--, 0 == lf[a][b].v && (delete lf[a][b], lf[a].v--), 0 == lf[a].v && delete lf[a])
  }
}
function wf(a) {
  var b = 0;
  if(null != a) {
    if(a = ha(a), mf[a]) {
      a = mf[a];
      for(var c = a.length - 1;0 <= c;c--) {
        uf(a[c].key), b++
      }
    }
  }else {
    Ka(kf, function(a, c) {
      uf(c);
      b++
    })
  }
}
function xf(a, b, c, d, e) {
  var f = 1;
  b = ha(b);
  if(a[b]) {
    var h = --a.ba, k = a[b];
    k.kc ? k.kc++ : k.kc = 1;
    try {
      for(var l = k.length, m = 0;m < l;m++) {
        var n = k[m];
        n && !n.cb && (f &= !1 !== yf(n, e))
      }
    }finally {
      a.ba = Math.max(h, a.ba), k.kc--, vf(c, d, b, k)
    }
  }
  return Boolean(f)
}
function yf(a, b) {
  a.Xb && uf(a.key);
  return a.handleEvent(b)
}
function rf(a, b) {
  if(a.cb) {
    return!0
  }
  var c = a.type, d = lf;
  if(!(c in d)) {
    return!0
  }
  var d = d[c], e, f;
  if(!bf) {
    e = b || ba("window.event");
    var h = !0 in d, k = !1 in d;
    if(h) {
      if(0 > e.keyCode || void 0 != e.returnValue) {
        return!0
      }
      a: {
        var l = !1;
        if(0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a
          }catch(m) {
            l = !0
          }
        }
        if(l || void 0 == e.returnValue) {
          e.returnValue = !0
        }
      }
    }
    l = new gf;
    l.jc(e, this);
    e = !0;
    try {
      if(h) {
        for(var n = [], r = l.currentTarget;r;r = r.parentNode) {
          n.push(r)
        }
        f = d[!0];
        f.ba = f.v;
        for(var y = n.length - 1;!l.wb && 0 <= y && f.ba;y--) {
          l.currentTarget = n[y], e &= xf(f, n[y], c, !0, l)
        }
        if(k) {
          for(f = d[!1], f.ba = f.v, y = 0;!l.wb && y < n.length && f.ba;y++) {
            l.currentTarget = n[y], e &= xf(f, n[y], c, !1, l)
          }
        }
      }else {
        e = yf(a, l)
      }
    }finally {
      n && (n.length = 0)
    }
    return e
  }
  c = new gf(b, this);
  return e = yf(a, c)
}
;function zf() {
  Ye.call(this)
}
pa(zf, Ye);
q = zf.prototype;
q.Vd = !0;
q.gd = null;
q.addEventListener = function(a, b, c, d) {
  of(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  tf(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = lf;
  if(b in c) {
    if(u(a)) {
      a = new df(a, this)
    }else {
      if(a instanceof df) {
        a.target = a.target || this
      }else {
        var d = a;
        a = new df(b, this);
        Oa(a, d)
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, f;
    if(b) {
      e = [];
      for(f = this;f;f = f.gd) {
        e.push(f)
      }
      f = c[!0];
      f.ba = f.v;
      for(var h = e.length - 1;!a.wb && 0 <= h && f.ba;h--) {
        a.currentTarget = e[h], d &= xf(f, e[h], a.type, !0, a) && !1 != a.sc
      }
    }
    if(!1 in c) {
      if(f = c[!1], f.ba = f.v, b) {
        for(h = 0;!a.wb && h < e.length && f.ba;h++) {
          a.currentTarget = e[h], d &= xf(f, e[h], a.type, !1, a) && !1 != a.sc
        }
      }else {
        for(e = this;!a.wb && e && f.ba;e = e.gd) {
          a.currentTarget = e, d &= xf(f, e, a.type, !1, a) && !1 != a.sc
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
q.B = function() {
  zf.ka.B.call(this);
  wf(this);
  this.gd = null
};
function Af(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
function Bf(a) {
  var b = [];
  Cf(new Df, a, b);
  return b.join("")
}
function Df() {
  this.rc = void 0
}
function Cf(a, b, c) {
  switch(typeof b) {
    case "string":
      Ef(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if(null == b) {
        c.push("null");
        break
      }
      if(da(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", f = 0;f < d;f++) {
          c.push(e), e = b[f], Cf(a, a.rc ? a.rc.call(b, String(f), e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Ef(f, c), c.push(":"), Cf(a, a.rc ? a.rc.call(b, f, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof b);
  }
}
var Ff = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Gf = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Ef(a, b) {
  b.push('"', a.replace(Gf, function(a) {
    if(a in Ff) {
      return Ff[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Ff[a] = e + b.toString(16)
  }), '"')
}
;function Hf(a) {
  if("function" == typeof a.Ba) {
    return a.Ba()
  }
  if(u(a)) {
    return a.split("")
  }
  if(ea(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return La(a)
}
function If(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ea(a) || u(a)) {
      Ea(a, b, c)
    }else {
      var d;
      if("function" == typeof a.qb) {
        d = a.qb()
      }else {
        if("function" != typeof a.Ba) {
          if(ea(a) || u(a)) {
            d = [];
            for(var e = a.length, f = 0;f < e;f++) {
              d.push(f)
            }
          }else {
            d = Ma(a)
          }
        }else {
          d = void 0
        }
      }
      for(var e = Hf(a), f = e.length, h = 0;h < f;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
;function Jf(a, b) {
  this.Da = {};
  this.F = [];
  var c = arguments.length;
  if(1 < c) {
    if(c % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof Jf ? (c = a.qb(), d = a.Ba()) : (c = Ma(a), d = La(a));
      for(var e = 0;e < c.length;e++) {
        this.set(c[e], d[e])
      }
    }
  }
}
q = Jf.prototype;
q.v = 0;
q.Be = 0;
q.Ba = function() {
  Kf(this);
  for(var a = [], b = 0;b < this.F.length;b++) {
    a.push(this.Da[this.F[b]])
  }
  return a
};
q.qb = function() {
  Kf(this);
  return this.F.concat()
};
q.Db = function(a) {
  return Lf(this.Da, a)
};
q.remove = function(a) {
  return Lf(this.Da, a) ? (delete this.Da[a], this.v--, this.Be++, this.F.length > 2 * this.v && Kf(this), !0) : !1
};
function Kf(a) {
  if(a.v != a.F.length) {
    for(var b = 0, c = 0;b < a.F.length;) {
      var d = a.F[b];
      Lf(a.Da, d) && (a.F[c++] = d);
      b++
    }
    a.F.length = c
  }
  if(a.v != a.F.length) {
    for(var e = {}, c = b = 0;b < a.F.length;) {
      d = a.F[b], Lf(e, d) || (a.F[c++] = d, e[d] = 1), b++
    }
    a.F.length = c
  }
}
q.get = function(a, b) {
  return Lf(this.Da, a) ? this.Da[a] : b
};
q.set = function(a, b) {
  Lf(this.Da, a) || (this.v++, this.F.push(a), this.Be++);
  this.Da[a] = b
};
q.dc = function() {
  return new Jf(this)
};
function Lf(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;var Mf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Nf(a) {
  var b = a.match(Mf);
  a = b[1];
  var c = b[2], d = b[3], b = b[4], e = "";
  a && (e += a + ":");
  d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
  return e
}
;function Of(a, b) {
  var c;
  if(a instanceof Of) {
    this.ga = void 0 !== b ? b : a.ga, Pf(this, a.xb), c = a.vc, Qf(this), this.vc = c, c = a.Fb, Qf(this), this.Fb = c, Rf(this, a.pc), c = a.mc, Qf(this), this.mc = c, Sf(this, a.Ga.dc()), c = a.ic, Qf(this), this.ic = c
  }else {
    if(a && (c = String(a).match(Mf))) {
      this.ga = !!b;
      Pf(this, c[1] || "", !0);
      var d = c[2] || "";
      Qf(this);
      this.vc = d ? decodeURIComponent(d) : "";
      d = c[3] || "";
      Qf(this);
      this.Fb = d ? decodeURIComponent(d) : "";
      Rf(this, c[4]);
      d = c[5] || "";
      Qf(this);
      this.mc = d ? decodeURIComponent(d) : "";
      Sf(this, c[6] || "", !0);
      c = c[7] || "";
      Qf(this);
      this.ic = c ? decodeURIComponent(c) : ""
    }else {
      this.ga = !!b, this.Ga = new Tf(null, 0, this.ga)
    }
  }
}
q = Of.prototype;
q.xb = "";
q.vc = "";
q.Fb = "";
q.pc = null;
q.mc = "";
q.ic = "";
q.of = !1;
q.ga = !1;
q.toString = function() {
  var a = [], b = this.xb;
  b && a.push(Uf(b, Vf), ":");
  if(b = this.Fb) {
    a.push("//");
    var c = this.vc;
    c && a.push(Uf(c, Vf), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.pc;
    null != b && a.push(":", String(b))
  }
  if(b = this.mc) {
    this.Fb && "/" != b.charAt(0) && a.push("/"), a.push(Uf(b, "/" == b.charAt(0) ? Wf : Xf))
  }
  (b = this.Ga.toString()) && a.push("?", b);
  (b = this.ic) && a.push("#", Uf(b, Yf));
  return a.join("")
};
q.dc = function() {
  return new Of(this)
};
function Pf(a, b, c) {
  Qf(a);
  a.xb = c ? b ? decodeURIComponent(b) : "" : b;
  a.xb && (a.xb = a.xb.replace(/:$/, ""))
}
function Rf(a, b) {
  Qf(a);
  if(b) {
    b = Number(b);
    if(isNaN(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.pc = b
  }else {
    a.pc = null
  }
}
function Sf(a, b, c) {
  Qf(a);
  b instanceof Tf ? (a.Ga = b, a.Ga.nd(a.ga)) : (c || (b = Uf(b, Zf)), a.Ga = new Tf(b, 0, a.ga))
}
function Qf(a) {
  if(a.of) {
    throw Error("Tried to modify a read-only Uri");
  }
}
q.nd = function(a) {
  this.ga = a;
  this.Ga && this.Ga.nd(a);
  return this
};
function Uf(a, b) {
  return u(a) ? encodeURI(a).replace(b, $f) : null
}
function $f(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Vf = /[#\/\?@]/g, Xf = /[\#\?:]/g, Wf = /[\#\?]/g, Zf = /[\#\?@]/g, Yf = /#/g;
function Tf(a, b, c) {
  this.fa = a || null;
  this.ga = !!c
}
function ag(a) {
  if(!a.H && (a.H = new Jf, a.v = 0, a.fa)) {
    for(var b = a.fa.split("\x26"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("\x3d"), e = null, f = null;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = bg(a, e);
      a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
  }
}
q = Tf.prototype;
q.H = null;
q.v = null;
q.add = function(a, b) {
  ag(this);
  this.fa = null;
  a = bg(this, a);
  var c = this.H.get(a);
  c || this.H.set(a, c = []);
  c.push(b);
  this.v++;
  return this
};
q.remove = function(a) {
  ag(this);
  a = bg(this, a);
  return this.H.Db(a) ? (this.fa = null, this.v -= this.H.get(a).length, this.H.remove(a)) : !1
};
q.Db = function(a) {
  ag(this);
  a = bg(this, a);
  return this.H.Db(a)
};
q.qb = function() {
  ag(this);
  for(var a = this.H.Ba(), b = this.H.qb(), c = [], d = 0;d < b.length;d++) {
    for(var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d])
    }
  }
  return c
};
q.Ba = function(a) {
  ag(this);
  var b = [];
  if(a) {
    this.Db(a) && (b = Ia(b, this.H.get(bg(this, a))))
  }else {
    a = this.H.Ba();
    for(var c = 0;c < a.length;c++) {
      b = Ia(b, a[c])
    }
  }
  return b
};
q.set = function(a, b) {
  ag(this);
  this.fa = null;
  a = bg(this, a);
  this.Db(a) && (this.v -= this.H.get(a).length);
  this.H.set(a, [b]);
  this.v++;
  return this
};
q.get = function(a, b) {
  var c = a ? this.Ba(a) : [];
  return 0 < c.length ? String(c[0]) : b
};
q.toString = function() {
  if(this.fa) {
    return this.fa
  }
  if(!this.H) {
    return""
  }
  for(var a = [], b = this.H.qb(), c = 0;c < b.length;c++) {
    for(var d = b[c], e = encodeURIComponent(String(d)), d = this.Ba(d), f = 0;f < d.length;f++) {
      var h = e;
      "" !== d[f] && (h += "\x3d" + encodeURIComponent(String(d[f])));
      a.push(h)
    }
  }
  return this.fa = a.join("\x26")
};
q.dc = function() {
  var a = new Tf;
  a.fa = this.fa;
  this.H && (a.H = this.H.dc(), a.v = this.v);
  return a
};
function bg(a, b) {
  var c = String(b);
  a.ga && (c = c.toLowerCase());
  return c
}
q.nd = function(a) {
  a && !this.ga && (ag(this), this.fa = null, If(this.H, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.fa = null, this.H.set(bg(this, d), Ja(a)), this.v += a.length))
  }, this));
  this.ga = a
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function cg(a, b) {
  this.Ia = [];
  this.pe = a;
  this.Wd = b || null
}
q = cg.prototype;
q.ua = !1;
q.Hb = !1;
q.Bc = !1;
q.Fe = !1;
q.od = !1;
q.Wb = 0;
q.cancel = function(a) {
  if(this.ua) {
    this.Ob instanceof cg && this.Ob.cancel()
  }else {
    if(this.qa) {
      var b = this.qa;
      delete this.qa;
      a ? b.cancel(a) : (b.Wb--, 0 >= b.Wb && b.cancel())
    }
    this.pe ? this.pe.call(this.Wd, this) : this.od = !0;
    this.ua || this.Yd(new dg(this))
  }
};
q.Td = function(a, b) {
  this.Bc = !1;
  eg(this, a, b)
};
function eg(a, b, c) {
  a.ua = !0;
  a.Ob = c;
  a.Hb = !b;
  fg(a)
}
function gg(a) {
  if(a.ua) {
    if(!a.od) {
      throw new hg(a);
    }
    a.od = !1
  }
}
q.ra = function(a) {
  gg(this);
  eg(this, !0, a)
};
q.Yd = function(a) {
  gg(this);
  eg(this, !1, a)
};
function ig(a, b, c, d) {
  a.Ia.push([b, c, d]);
  a.ua && fg(a)
}
function jg(a, b) {
  var c = v(b.He, b);
  ig(a, c, null, void 0)
}
q.He = function(a) {
  var b = new cg;
  ig(this, b.ra, b.Yd, b);
  a && (b.qa = this, this.Wb++);
  return b
};
function kg(a) {
  return Ga(a.Ia, function(a) {
    return fa(a[1])
  })
}
function fg(a) {
  a.rd && (a.ua && kg(a)) && (s.clearTimeout(a.rd), delete a.rd);
  a.qa && (a.qa.Wb--, delete a.qa);
  for(var b = a.Ob, c = !1, d = !1;a.Ia.length && !a.Bc;) {
    var e = a.Ia.shift(), f = e[0], h = e[1], e = e[2];
    if(f = a.Hb ? h : f) {
      try {
        var k = f.call(e || a.Wd, b);
        void 0 !== k && (a.Hb = a.Hb && (k == b || k instanceof Error), a.Ob = b = k);
        b instanceof cg && (d = !0, a.Bc = !0)
      }catch(l) {
        b = l, a.Hb = !0, kg(a) || (c = !0)
      }
    }
  }
  a.Ob = b;
  d && (ig(b, v(a.Td, a, !0), v(a.Td, a, !1)), b.Fe = !0);
  c && (a.rd = s.setTimeout(function() {
    throw b;
  }, 0))
}
function hg(a) {
  qa.call(this);
  this.ef = a
}
pa(hg, qa);
hg.prototype.message = "Deferred has already fired";
hg.prototype.name = "AlreadyCalledError";
function dg(a) {
  qa.call(this);
  this.ef = a
}
pa(dg, qa);
dg.prototype.message = "Deferred was cancelled";
dg.prototype.name = "CancelledError";
function lg(a, b) {
  Ye.call(this);
  this.tb = a || 1;
  this.Rb = b || s;
  this.Cc = v(this.Df, this);
  this.ad = oa()
}
pa(lg, zf);
q = lg.prototype;
q.enabled = !1;
q.Ja = null;
q.Df = function() {
  if(this.enabled) {
    var a = oa() - this.ad;
    0 < a && a < 0.8 * this.tb ? this.Ja = this.Rb.setTimeout(this.Cc, this.tb - a) : (this.dispatchEvent(mg), this.enabled && (this.Ja = this.Rb.setTimeout(this.Cc, this.tb), this.ad = oa()))
  }
};
q.start = function() {
  this.enabled = !0;
  this.Ja || (this.Ja = this.Rb.setTimeout(this.Cc, this.tb), this.ad = oa())
};
q.stop = function() {
  this.enabled = !1;
  this.Ja && (this.Rb.clearTimeout(this.Ja), this.Ja = null)
};
q.B = function() {
  lg.ka.B.call(this);
  this.stop();
  delete this.Rb
};
var mg = "tick";
function ng(a, b) {
  if(!fa(a)) {
    if(a && "function" == typeof a.handleEvent) {
      a = v(a.handleEvent, a)
    }else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : s.setTimeout(a, b || 0)
}
;function og(a, b, c) {
  Ye.call(this);
  this.bd = a;
  this.tb = b || 0;
  this.Ib = c;
  this.Ie = v(this.hf, this)
}
pa(og, Ye);
q = og.prototype;
q.Jb = 0;
q.B = function() {
  og.ka.B.call(this);
  this.stop();
  delete this.bd;
  delete this.Ib
};
q.start = function(a) {
  this.stop();
  this.Jb = ng(this.Ie, void 0 !== a ? a : this.tb)
};
q.stop = function() {
  this.fe() && s.clearTimeout(this.Jb);
  this.Jb = 0
};
q.fe = function() {
  return 0 != this.Jb
};
q.hf = function() {
  this.Jb = 0;
  this.bd && this.bd.call(this.Ib)
};
var pg, qg = !Je && !X || X && X && 9 <= Xe || Je && Ve("1.9.1");
X && Ve("9");
function rg(a) {
  return a ? new sg(9 == a.nodeType ? a : a.ownerDocument || a.document) : pg || (pg = new sg)
}
function tg(a, b, c) {
  function d(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(var e = 1;e < c.length;e++) {
    var f = c[e];
    !ea(f) || ga(f) && 0 < f.nodeType ? d(f) : Ea(ug(f) ? Ja(f) : f, d)
  }
}
function vg(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function ug(a) {
  if(a && "number" == typeof a.length) {
    if(ga(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(fa(a)) {
      return"function" == typeof a.item
    }
  }
  return!1
}
function sg(a) {
  this.Eb = a || s.document || document
}
q = sg.prototype;
q.createElement = function(a) {
  return this.Eb.createElement(a)
};
q.createTextNode = function(a) {
  return this.Eb.createTextNode(String(a))
};
q.w = function() {
  return this.Eb.parentWindow || this.Eb.defaultView
};
q.appendChild = function(a, b) {
  a.appendChild(b)
};
q.append = function(a, b) {
  tg(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
};
q.ce = function(a) {
  return qg && void 0 != a.children ? a.children : Fa(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
function wg(a) {
  Ye.call(this);
  this.Ib = a;
  this.F = []
}
pa(wg, Ye);
var xg = [];
function yg(a, b, c, d, e, f) {
  if(da(c)) {
    for(var h = 0;h < c.length;h++) {
      yg(a, b, c[h], d, e, f)
    }
  }else {
    b = sf(b, c, d || a, e, f || a.Ib || a), a.F.push(b)
  }
}
wg.prototype.B = function() {
  wg.ka.B.call(this);
  Ea(this.F, uf);
  this.F.length = 0
};
wg.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function zg(a) {
  return Ag(a || arguments.callee.caller, [])
}
function Ag(a, b) {
  var c = [];
  if(0 <= Da(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Bg(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = String(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = Bg(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Ag(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Bg(a) {
  if(Cg[a]) {
    return Cg[a]
  }
  a = String(a);
  if(!Cg[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Cg[a] = b ? b[1] : "[Anonymous]"
  }
  return Cg[a]
}
var Cg = {};
function Dg(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Dg.prototype.Af = 0;
Dg.prototype.$d = null;
Dg.prototype.Zd = null;
var Eg = 0;
Dg.prototype.reset = function(a, b, c, d, e) {
  this.Af = "number" == typeof e ? e : Eg++;
  this.pg = d || oa();
  this.Lb = a;
  this.sf = b;
  this.lg = c;
  delete this.$d;
  delete this.Zd
};
Dg.prototype.Ae = function(a) {
  this.Lb = a
};
function Fg(a) {
  this.le = a
}
Fg.prototype.qa = null;
Fg.prototype.Lb = null;
Fg.prototype.Dc = null;
Fg.prototype.de = null;
function Gg(a, b) {
  this.name = a;
  this.value = b
}
Gg.prototype.toString = g("name");
var Hg = new Gg("SEVERE", 1E3), Ig = new Gg("WARNING", 900), Jg = new Gg("INFO", 800), Kg = new Gg("CONFIG", 700), Lg = new Gg("FINE", 500), Mg = new Gg("FINEST", 300);
q = Fg.prototype;
q.getName = g("le");
q.getParent = g("qa");
q.ce = function() {
  this.Dc || (this.Dc = {});
  return this.Dc
};
q.Ae = function(a) {
  this.Lb = a
};
function Ng(a) {
  if(a.Lb) {
    return a.Lb
  }
  if(a.qa) {
    return Ng(a.qa)
  }
  Ba("Root logger has no level set.");
  return null
}
q.log = function(a, b, c) {
  if(a.value >= Ng(this).value) {
    for(a = this.lf(a, b, c), b = "log:" + a.sf, s.console && (s.console.timeStamp ? s.console.timeStamp(b) : s.console.markTimeline && s.console.markTimeline(b)), s.msWriteProfilerMark && s.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if(c.de) {
        for(var e = 0, f = void 0;f = c.de[e];e++) {
          f(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.lf = function(a, b, c) {
  var d = new Dg(a, String(b), this.le);
  if(c) {
    d.$d = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var h;
      var k = ba("window.location.href");
      if(u(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"}
      }else {
        var l, m, n = !1;
        try {
          l = c.lineNumber || c.kg || "Not available"
        }catch(r) {
          l = "Not available", n = !0
        }
        try {
          m = c.fileName || c.filename || c.sourceURL || s.$googDebugFname || k
        }catch(y) {
          m = "Not available", n = !0
        }
        h = !n && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:l, fileName:m, stack:c.stack || "Not available"}
      }
      e = "Message: " + sa(h.message) + '\nUrl: \x3ca href\x3d"view-source:' + h.fileName + '" target\x3d"_new"\x3e' + h.fileName + "\x3c/a\x3e\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + sa(h.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + sa(zg(f) + "-\x3e ")
    }catch(G) {
      e = "Exception trying to expose exception! You win, we lose. " + G
    }
    d.Zd = e
  }
  return d
};
q.info = function(a, b) {
  this.log(Jg, a, b)
};
function Og(a) {
  Y.log(Lg, a, void 0)
}
function Pg(a) {
  Y.log(Mg, a, void 0)
}
var Qg = {}, Rg = null;
function Sg(a) {
  Rg || (Rg = new Fg(""), Qg[""] = Rg, Rg.Ae(Kg));
  var b;
  if(!(b = Qg[a])) {
    b = new Fg(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Sg(a.substr(0, c));
    c.ce()[d] = b;
    b.qa = c;
    Qg[a] = b
  }
  return b
}
;function Tg() {
  Ye.call(this);
  this.md = {}
}
pa(Tg, Ye);
Tg.prototype.cd = Sg("goog.messaging.AbstractChannel");
Tg.prototype.ta = function(a) {
  a && a()
};
Tg.prototype.va = p(!0);
Tg.prototype.B = function() {
  Tg.ka.B.call(this);
  delete this.cd;
  delete this.md;
  delete this.Xd
};
var Ug = {1:"NativeMessagingTransport", 2:"FrameElementMethodTransport", 3:"IframeRelayTransport", 4:"IframePollingTransport", 5:"FlashTransport", 6:"NixTransport"}, $ = {sd:"cn", Ce:"at", Ee:"rat", Ub:"pu", La:"ifrid", Ab:"tp", wc:"lru", Tb:"pru", Va:"lpu", Wa:"ppu", yc:"ph", xc:"osh", zc:"role", De:"nativeProtocolVersion"}, Vg = [$.Ub, $.wc, $.Tb, $.Va, $.Wa], Wg = {};
function Xg(a) {
  for(var b = Yg, c = b.length, d = "";0 < a--;) {
    d += b.charAt(Math.floor(Math.random() * c))
  }
  return d
}
var Yg = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", Y = Sg("goog.net.xpc");
function Zg(a) {
  Ye.call(this);
  this.Aa = a || rg()
}
pa(Zg, Ye);
Zg.prototype.yb = 0;
Zg.prototype.w = function() {
  return this.Aa.w()
};
Zg.prototype.getName = function() {
  return Ug[this.yb] || ""
};
function $g(a, b) {
  Zg.call(this, b);
  this.i = a;
  this.Nb = [];
  this.ff = v(this.gf, this)
}
pa($g, Zg);
q = $g.prototype;
q.yb = 2;
q.kd = !1;
q.Ja = 0;
q.ta = function() {
  0 == ah(this.i) ? (this.Ca = this.i.sb, this.Ca.XPC_toOuter = v(this.ee, this)) : this.xd()
};
q.xd = function() {
  var a = !0;
  try {
    this.Ca || (this.Ca = this.w().frameElement), this.Ca && this.Ca.XPC_toOuter && (this.fd = this.Ca.XPC_toOuter, this.Ca.XPC_toOuter.XPC_toInner = v(this.ee, this), a = !1, this.send("tp", "SETUP_ACK"), this.i.Ea())
  }catch(b) {
    Y.log(Hg, "exception caught while attempting setup: " + b, void 0)
  }
  a && (this.wd || (this.wd = v(this.xd, this)), this.w().setTimeout(this.wd, 100))
};
q.qd = function(a) {
  if(0 != ah(this.i) || this.i.va() || "SETUP_ACK" != a) {
    throw Error("Got unexpected transport message.");
  }
  this.fd = this.Ca.XPC_toOuter.XPC_toInner;
  this.i.Ea()
};
q.ee = function(a, b) {
  this.kd || 0 != this.Nb.length ? (this.Nb.push({Cf:a, jd:b}), 1 == this.Nb.length && (this.Ja = this.w().setTimeout(this.ff, 1))) : this.i.Ka(a, b)
};
q.gf = function() {
  for(;this.Nb.length;) {
    var a = this.Nb.shift();
    this.i.Ka(a.Cf, a.jd)
  }
};
q.send = function(a, b) {
  this.kd = !0;
  this.fd(a, b);
  this.kd = !1
};
q.B = function() {
  $g.ka.B.call(this);
  this.Ca = this.fd = null
};
function bh(a, b) {
  Zg.call(this, b);
  this.i = a;
  this.Pb = this.i.q[$.Wa];
  this.yf = this.i.q[$.Va];
  this.tc = []
}
var ch, dh;
pa(bh, Zg);
q = bh.prototype;
q.vf = 5;
q.yb = 4;
q.Ia = 0;
q.zb = !1;
q.Ya = !1;
q.xe = null;
function eh(a) {
  return"googlexpc_" + a.i.name + "_msg"
}
function fh(a) {
  return"googlexpc_" + a.i.name + "_ack"
}
function gh(a) {
  try {
    if(!a.lb && hh(a.i)) {
      return a.i.Fa.frames || {}
    }
  }catch(b) {
    Og("error retrieving peer frames")
  }
  return{}
}
q.ta = function() {
  if(!this.lb && hh(this.i)) {
    Og("transport connect called");
    if(!this.Ya) {
      Og("initializing...");
      var a = eh(this);
      this.vb = ih(this, a);
      this.dd = this.w().frames[a];
      a = fh(this);
      this.gb = ih(this, a);
      this.Ac = this.w().frames[a];
      this.Ya = !0
    }
    if(jh(this, eh(this)) && jh(this, fh(this))) {
      Og("foreign frames present"), this.ie = new kh(this, gh(this)[eh(this)], v(this.xf, this)), this.td = new kh(this, gh(this)[fh(this)], v(this.wf, this)), this.Ad()
    }else {
      Pg("foreign frames not (yet) present");
      if(1 == ah(this.i)) {
        this.xe || 0 < this.vf-- || (Pg("Inner peer reconnect triggered."), this.i.name = Xg(10), Pg("switching channels: " + this.i.name), lh(this), this.Ya = !1, this.xe = ih(this, "googlexpc_reconnect_" + this.i.name))
      }else {
        if(0 == ah(this.i)) {
          Pg("outerPeerReconnect called");
          for(var a = gh(this), b = a.length, c = 0;c < b;c++) {
            var d;
            try {
              a[c] && a[c].name && (d = a[c].name)
            }catch(e) {
            }
            if(d) {
              var f = d.split("_");
              if(3 == f.length && "googlexpc" == f[0] && "reconnect" == f[1]) {
                this.i.name = f[2];
                lh(this);
                this.Ya = !1;
                break
              }
            }
          }
        }
      }
      this.w().setTimeout(v(this.ta, this), 100)
    }
  }
};
function ih(a, b) {
  Pg("constructing sender frame: " + b);
  var c;
  c = document.createElement("iframe");
  var d = c.style;
  d.position = "absolute";
  d.top = "-10px";
  d.left = "10px";
  d.width = "1px";
  d.height = "1px";
  c.id = c.name = b;
  c.src = a.Pb + "#INITIAL";
  a.w().document.body.appendChild(c);
  return c
}
function lh(a) {
  Pg("deconstructSenderFrames called");
  a.vb && (a.vb.parentNode.removeChild(a.vb), a.vb = null, a.dd = null);
  a.gb && (a.gb.parentNode.removeChild(a.gb), a.gb = null, a.Ac = null)
}
function jh(a, b) {
  Pg("checking for receive frame: " + b);
  try {
    var c = gh(a)[b];
    if(!c || 0 != c.location.href.indexOf(a.yf)) {
      return!1
    }
  }catch(d) {
    return!1
  }
  return!0
}
q.Ad = function() {
  var a = gh(this);
  a[fh(this)] && a[eh(this)] ? (this.je = new mh(this.Pb, this.dd), this.Vb = new mh(this.Pb, this.Ac), Og("local frames ready"), this.w().setTimeout(v(function() {
    this.je.send("SETUP");
    this.zb = this.og = !0;
    Og("SETUP sent")
  }, this), 100)) : (this.zd || (this.zd = v(this.Ad, this)), this.w().setTimeout(this.zd, 100), Og("local frames not (yet) present"))
};
function nh(a) {
  if(a.ld && a.ve) {
    if(a.i.Ea(), a.kb) {
      Og("delivering queued messages (" + a.kb.length + ")");
      for(var b = 0, c;b < a.kb.length;b++) {
        c = a.kb[b], a.i.Ka(c.Bf, c.jd)
      }
      delete a.kb
    }
  }else {
    Pg("checking if connected: ack sent:" + a.ld + ", ack rcvd: " + a.ve)
  }
}
q.xf = function(a) {
  Pg("msg received: " + a);
  if("SETUP" == a) {
    this.Vb && (this.Vb.send("SETUP_ACK"), Pg("SETUP_ACK sent"), this.ld = !0, nh(this))
  }else {
    if(this.i.va() || this.ld) {
      var b = a.indexOf("|"), c = a.substring(0, b);
      a = a.substring(b + 1);
      b = c.indexOf(",");
      if(-1 == b) {
        var d;
        this.Vb.send("ACK:" + c);
        oh(this, a)
      }else {
        d = c.substring(0, b), this.Vb.send("ACK:" + d), c = c.substring(b + 1).split("/"), b = parseInt(c[0], 10), c = parseInt(c[1], 10), 1 == b && (this.hd = []), this.hd.push(a), b == c && (oh(this, this.hd.join("")), delete this.hd)
      }
    }else {
      Y.log(Ig, "received msg, but channel is not connected", void 0)
    }
  }
};
q.wf = function(a) {
  Pg("ack received: " + a);
  "SETUP_ACK" == a ? (this.zb = !1, this.ve = !0, nh(this)) : this.i.va() ? this.zb ? parseInt(a.split(":")[1], 10) == this.Ia ? (this.zb = !1, ph(this)) : Y.log(Ig, "got ack with wrong sequence", void 0) : Y.log(Ig, "got unexpected ack", void 0) : Y.log(Ig, "received ack, but channel not connected", void 0)
};
function ph(a) {
  if(!a.zb && a.tc.length) {
    var b = a.tc.shift();
    ++a.Ia;
    a.je.send(a.Ia + b);
    Pg("msg sent: " + a.Ia + b);
    a.zb = !0
  }
}
function oh(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), c = b.substring(c + 1);
  a.i.va() ? a.i.Ka(d, c) : ((a.kb || (a.kb = [])).push({Bf:d, jd:c}), Pg("queued delivery"))
}
q.Sb = 3800;
q.send = function(a, b) {
  var c = a + ":" + b;
  if(!X || b.length <= this.Sb) {
    this.tc.push("|" + c)
  }else {
    for(var d = b.length, e = Math.ceil(d / this.Sb), f = 0, h = 1;f < d;) {
      this.tc.push("," + h + "/" + e + "|" + c.substr(f, this.Sb)), h++, f += this.Sb
    }
  }
  ph(this)
};
q.B = function() {
  bh.ka.B.call(this);
  var a = qh;
  Ha(a, this.ie);
  Ha(a, this.td);
  this.ie = this.td = null;
  vg(this.vb);
  vg(this.gb);
  this.dd = this.Ac = this.vb = this.gb = null
};
var qh = [], rh = v(function() {
  var a = qh, b, c = !1;
  try {
    for(var d = 0;b = a[d];d++) {
      var e;
      if(!(e = c)) {
        var f = b, h = f.ue.location.href;
        if(h != f.Ud) {
          f.Ud = h;
          var k = h.split("#")[1];
          k && (k = k.substr(1), f.Je(decodeURIComponent(k)));
          e = !0
        }else {
          e = !1
        }
      }
      c = e
    }
  }catch(l) {
    if(Y.info("receive_() failed: " + l), b = b.$.i, Y.info("Transport Error"), b.close(), !a.length) {
      return
    }
  }
  a = oa();
  c && (ch = a);
  dh = window.setTimeout(rh, 1E3 > a - ch ? 10 : 100)
}, bh);
function sh() {
  Og("starting receive-timer");
  ch = oa();
  dh && window.clearTimeout(dh);
  dh = window.setTimeout(rh, 10)
}
function mh(a, b) {
  this.Pb = a;
  this.ze = b;
  this.Yc = 0
}
mh.prototype.send = function(a) {
  this.Yc = ++this.Yc % 2;
  a = this.Pb + "#" + this.Yc + encodeURIComponent(a);
  try {
    Ke ? this.ze.location.href = a : this.ze.location.replace(a)
  }catch(b) {
    Y.log(Hg, "sending failed", b)
  }
  sh()
};
function kh(a, b, c) {
  this.$ = a;
  this.ue = b;
  this.Je = c;
  this.Ud = this.ue.location.href.split("#")[0] + "#INITIAL";
  qh.push(this);
  sh()
}
;function th(a, b) {
  Zg.call(this, b);
  this.i = a;
  this.tf = this.i.q[$.Tb];
  this.se = this.i.q[$.La];
  Ke && uh()
}
pa(th, Zg);
if(Ke) {
  var vh = [], wh = 0, uh = function() {
    wh || (wh = window.setTimeout(function() {
      xh()
    }, 1E3))
  }, xh = function(a) {
    var b = oa();
    for(a = a || 3E3;vh.length && b - vh[0].timestamp >= a;) {
      var c = vh.shift().nf;
      vg(c);
      Pg("iframe removed")
    }
    wh = window.setTimeout(yh, 1E3)
  }, yh = function() {
    xh()
  }
}
var zh = {};
q = th.prototype;
q.yb = 3;
q.ta = function() {
  this.w().xpcRelay || (this.w().xpcRelay = Ah);
  this.send("tp", "SETUP")
};
function Ah(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), e = b.substr(c + 1);
  if(X && -1 != (c = d.indexOf("|"))) {
    var f = d.substr(0, c), d = d.substr(c + 1), c = d.indexOf("+"), h = d.substr(0, c), c = parseInt(d.substr(c + 1), 10), k = zh[h];
    k || (k = zh[h] = {be:[], we:0, ae:0});
    -1 != d.indexOf("++") && (k.ae = c + 1);
    k.be[c] = e;
    k.we++;
    if(k.we != k.ae) {
      return
    }
    e = k.be.join("");
    delete zh[h]
  }else {
    var f = d
  }
  Wg[a].Ka(f, decodeURIComponent(e))
}
q.qd = function(a) {
  "SETUP" == a ? (this.send("tp", "SETUP_ACK"), this.i.Ea()) : "SETUP_ACK" == a && this.i.Ea()
};
q.send = function(a, b) {
  var c = encodeURIComponent(b), d = c.length;
  if(X && 1800 < d) {
    for(var e = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ oa()).toString(36), f = 0, h = 0;f < d;h++) {
      var k = c.substr(f, 1800), f = f + 1800;
      Bh(this, a, k, e + (f >= d ? "++" : "+") + h)
    }
  }else {
    Bh(this, a, c)
  }
};
function Bh(a, b, c, d) {
  if(X) {
    var e = a.w().document.createElement("div");
    e.innerHTML = '\x3ciframe onload\x3d"this.xpcOnload()"\x3e\x3c/iframe\x3e';
    e = e.childNodes[0];
    e.xpcOnload = Ch
  }else {
    e = a.w().document.createElement("iframe"), Ke ? vh.push({timestamp:oa(), nf:e}) : of(e, "load", Ch)
  }
  var f = e.style;
  f.visibility = "hidden";
  f.width = e.style.height = "0px";
  f.position = "absolute";
  f = a.tf;
  f += "#" + a.i.name;
  a.se && (f += "," + a.se);
  f += "|" + b;
  d && (f += "|" + d);
  f += ":" + c;
  e.src = f;
  a.w().document.body.appendChild(e);
  Pg("msg sent: " + f)
}
function Ch() {
  Pg("iframe-load");
  vg(this);
  this.qg = null
}
q.B = function() {
  th.ka.B.call(this);
  Ke && xh(0)
};
function Dh(a, b, c, d, e) {
  Zg.call(this, c);
  this.i = a;
  this.bb = e || 2;
  this.re = b || "*";
  this.$c = new wg(this);
  this.Mb = new lg(100, this.w());
  this.lc = !!d;
  this.Ta = new cg;
  this.Ua = new cg;
  this.Na = new cg;
  this.jf = Xg(10);
  this.nc = null;
  this.lc ? 1 == ah(this.i) ? jg(this.Na, this.Ta) : jg(this.Na, this.Ua) : (jg(this.Na, this.Ta), 2 == this.bb && jg(this.Na, this.Ua));
  ig(this.Na, this.ne, null, this);
  this.Na.ra(!0);
  a = this.$c;
  b = this.Mb;
  c = this.he;
  d = mg;
  da(d) || (xg[0] = d, d = xg);
  for(e = 0;e < d.length;e++) {
    var f = of(b, d[e], c || a, !1, a.Ib || a);
    a.F.push(f)
  }
  Y.info("NativeMessagingTransport created.  protocolVersion\x3d" + this.bb + ", oneSidedHandshake\x3d" + this.lc + ", role\x3d" + ah(this.i))
}
pa(Dh, Zg);
Dh.prototype.da = null;
Dh.prototype.Ya = !1;
Dh.prototype.yb = 1;
var Eh = {};
function Fh(a) {
  var b = a.hc.data;
  if(!u(b)) {
    return!1
  }
  var c = b.indexOf("|"), d = b.indexOf(":");
  if(-1 == c || -1 == d) {
    return!1
  }
  var e = b.substring(0, c), c = b.substring(c + 1, d), b = b.substring(d + 1);
  Og("messageReceived: channel\x3d" + e + ", service\x3d" + c + ", payload\x3d" + b);
  if(d = Wg[e]) {
    return d.Ka(c, b, a.hc.origin), !0
  }
  a = Gh(b)[0];
  for(var f in Wg) {
    if(d = Wg[f], 1 == ah(d) && !d.va() && "tp" == c && ("SETUP" == a || "SETUP_NTPV2" == a)) {
      return Og("changing channel name to " + e), d.name = e, delete Wg[f], Wg[e] = d, d.Ka(c, b), !0
    }
  }
  Y.info('channel name mismatch; message ignored"');
  return!1
}
q = Dh.prototype;
q.qd = function(a) {
  var b = Gh(a);
  a = b[1];
  switch(b[0]) {
    case "SETUP_ACK":
      Hh(this, 1);
      this.Ta.ua || this.Ta.ra(!0);
      break;
    case "SETUP_ACK_NTPV2":
      2 == this.bb && (Hh(this, 2), this.Ta.ua || this.Ta.ra(!0));
      break;
    case "SETUP":
      Hh(this, 1);
      Ih(this, 1);
      break;
    case "SETUP_NTPV2":
      2 == this.bb && (b = this.da, Hh(this, 2), Ih(this, 2), 1 != b && null == this.nc || this.nc == a || (Y.info("Sending SETUP and changing peer ID to: " + a), Jh(this)), this.nc = a)
  }
};
function Jh(a) {
  if(2 == a.bb && (null == a.da || 2 == a.da)) {
    var b;
    b = "SETUP_NTPV2," + a.jf;
    a.send("tp", b)
  }
  null != a.da && 1 != a.da || a.send("tp", "SETUP")
}
function Ih(a, b) {
  if(2 != a.bb || null != a.da && 2 != a.da || 2 != b) {
    if(null != a.da && 1 != a.da || 1 != b) {
      return
    }
    a.send("tp", "SETUP_ACK")
  }else {
    a.send("tp", "SETUP_ACK_NTPV2")
  }
  a.Ua.ua || a.Ua.ra(!0)
}
function Hh(a, b) {
  b > a.da && (a.da = b);
  1 == a.da && (a.Ua.ua || a.lc || a.Ua.ra(!0), a.nc = null)
}
q.ta = function() {
  var a = this.w(), b = ha(a), c = Eh[b];
  "number" == typeof c || (c = 0);
  0 == c && of(a.postMessage ? a : a.document, "message", Fh, !1, Dh);
  Eh[b] = c + 1;
  this.Ya = !0;
  this.he()
};
q.he = function() {
  var a = 0 == ah(this.i);
  this.lc && a || this.i.va() || this.lb ? this.Mb.stop() : (this.Mb.start(), Jh(this))
};
q.send = function(a, b) {
  var c = this.i.Fa;
  c ? (this.send = function(a, b) {
    var f = this, h = this.i.name;
    this.uc = ng(function() {
      f.uc = 0;
      try {
        var k = c.postMessage ? c : c.document;
        k.postMessage ? (k.postMessage(h + "|" + a + ":" + b, f.re), Og("send(): service\x3d" + a + " payload\x3d" + b + " to hostname\x3d" + f.re)) : Y.log(Ig, "Peer window had no postMessage function.", void 0)
      }catch(l) {
        Y.log(Ig, "Error performing postMessage, ignoring.", l)
      }
    }, 0)
  }, this.send(a, b)) : Og("send(): window not ready")
};
q.ne = function() {
  this.i.Ea(1 == this.bb || 1 == this.da ? 200 : void 0)
};
q.B = function() {
  if(this.Ya) {
    var a = this.w(), b = ha(a), c = Eh[b];
    Eh[b] = c - 1;
    1 == c && tf(a.postMessage ? a : a.document, "message", Fh, !1, Dh)
  }
  this.uc && (s.clearTimeout(this.uc), this.uc = 0);
  af(this.$c);
  delete this.$c;
  af(this.Mb);
  delete this.Mb;
  this.Ta.cancel();
  delete this.Ta;
  this.Ua.cancel();
  delete this.Ua;
  this.Na.cancel();
  delete this.Na;
  delete this.send;
  Dh.ka.B.call(this)
};
function Gh(a) {
  a = a.split(",");
  a[1] = a[1] || null;
  return a
}
;function Kh(a, b) {
  Zg.call(this, b);
  this.i = a;
  this.yd = a[$.Ce] || "";
  this.ye = a[$.Ee] || "";
  var c = this.w();
  if(!c.nix_setup_complete) {
    var d = "Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport \x3d transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth \x3d auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken \x3d m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport." + Lh + "(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport." + 
    Mh + "(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap \x3d New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper \x3d wrap\nEnd Function";
    try {
      c.execScript(d, "vbscript"), c.nix_setup_complete = !0
    }catch(e) {
      Y.log(Hg, "exception caught while attempting global setup: " + e, void 0)
    }
  }
  this[Lh] = this.mf;
  this[Mh] = this.df
}
pa(Kh, Zg);
var Lh = "GCXPC____NIXJS_handle_message", Mh = "GCXPC____NIXJS_create_channel";
q = Kh.prototype;
q.yb = 6;
q.ub = !1;
q.Sa = null;
q.ta = function() {
  0 == ah(this.i) ? this.vd() : this.ud()
};
q.vd = function() {
  if(!this.ub) {
    var a = this.i.sb;
    try {
      a.contentWindow.opener = (0,this.w().GCXPC____NIXVBS_get_wrapper)(this, this.yd), this.ub = !0
    }catch(b) {
      Y.log(Hg, "exception caught while attempting setup: " + b, void 0)
    }
    this.ub || this.w().setTimeout(v(this.vd, this), 100)
  }
};
q.ud = function() {
  if(!this.ub) {
    try {
      var a = this.w().opener;
      if(a && "GCXPC____NIXVBS_container" in a) {
        this.Sa = a;
        if(this.Sa.GetAuthToken() != this.ye) {
          Y.log(Hg, "Invalid auth token from other party", void 0);
          return
        }
        this.Sa.CreateChannel((0,this.w().GCXPC____NIXVBS_get_wrapper)(this, this.yd));
        this.ub = !0;
        this.i.Ea()
      }
    }catch(b) {
      Y.log(Hg, "exception caught while attempting setup: " + b, void 0);
      return
    }
    this.ub || this.w().setTimeout(v(this.ud, this), 100)
  }
};
q.df = function(a) {
  "unknown" == typeof a && "GCXPC____NIXVBS_container" in a || Y.log(Hg, "Invalid NIX channel given to createChannel_", void 0);
  this.Sa = a;
  this.Sa.GetAuthToken() != this.ye ? Y.log(Hg, "Invalid auth token from other party", void 0) : this.i.Ea()
};
q.mf = function(a, b) {
  this.w().setTimeout(v(function() {
    this.i.Ka(a, b)
  }, this), 1)
};
q.send = function(a, b) {
  "unknown" !== typeof this.Sa && Y.log(Hg, "NIX channel not connected", void 0);
  this.Sa.SendMessage(a, b)
};
q.B = function() {
  Kh.ka.B.call(this);
  this.Sa = null
};
function Nh(a, b) {
  Tg.call(this);
  for(var c = 0, d;d = Vg[c];c++) {
    if(d in a && !/^https?:\/\//.test(a[d])) {
      throw Error("URI " + a[d] + " is invalid for field " + d);
    }
  }
  this.q = a;
  this.name = this.q[$.sd] || Xg(10);
  this.Aa = b || rg();
  this.ec = [];
  this.oc = new wg(this);
  a[$.Va] = a[$.Va] || Nf(this.Aa.w().location.href) + "/robots.txt";
  a[$.Wa] = a[$.Wa] || Nf(a[$.Ub] || "") + "/robots.txt";
  Wg[this.name] = this;
  of(window, "unload", Oh);
  Y.info("CrossPageChannel created: " + this.name)
}
pa(Nh, Tg);
var Ph = /^%*tp$/, Qh = /^%+tp$/;
q = Nh.prototype;
q.Oa = null;
q.xa = null;
q.$ = null;
q.pd = 1;
q.va = function() {
  return 2 == this.pd
};
q.Fa = null;
q.sb = null;
function hh(a) {
  try {
    return!!a.Fa && !Boolean(a.Fa.closed)
  }catch(b) {
    return!1
  }
}
function Rh(a, b, c) {
  Y.info("createPeerIframe()");
  var d = a.q[$.La];
  d || (d = a.q[$.La] = "xpcpeer" + Xg(4));
  var e = rg(b).createElement("IFRAME");
  e.id = e.name = d;
  c ? c(e) : e.style.width = e.style.height = "100%";
  Sh(a);
  a.xa = new cg(void 0, a);
  var f = Th(a);
  yg(a.oc, e, "load", a.xa.ra, !1, a.xa);
  Je || Ke ? window.setTimeout(v(function() {
    b.appendChild(e);
    e.src = f.toString();
    Y.info("peer iframe created (" + d + ")")
  }, a), 1) : (e.src = f.toString(), b.appendChild(e), Y.info("peer iframe created (" + d + ")"))
}
function Sh(a) {
  a.xa && (a.xa.cancel(), a.xa = null);
  a.ec.length = 0;
  a = a.oc;
  Ea(a.F, uf);
  a.F.length = 0
}
function Th(a) {
  var b = a.q[$.Ub];
  u(b) && (b = a.q[$.Ub] = new Of(b));
  var c = {};
  c[$.sd] = a.name;
  c[$.Ab] = a.q[$.Ab];
  c[$.xc] = a.q[$.xc];
  a.q[$.wc] && (c[$.Tb] = a.q[$.wc]);
  a.q[$.Va] && (c[$.Wa] = a.q[$.Va]);
  a.q[$.Wa] && (c[$.Va] = a.q[$.Wa]);
  (a = a.q[$.zc]) && (c[$.zc] = 1 == a ? 0 : 1);
  a = b;
  c = Bf(c);
  Qf(a);
  a.Ga.set("xpc", c);
  return b
}
q.ta = function(a) {
  this.Xc = a || ca;
  this.xa ? ig(this.xa, this.Sd, null, void 0) : this.Sd()
};
q.Sd = function() {
  Y.info("continueConnection_()");
  this.xa = null;
  this.q[$.La] && (this.sb = u(this.q[$.La]) ? this.Aa.Eb.getElementById(this.q[$.La]) : this.q[$.La]);
  if(this.sb) {
    var a = this.sb.contentWindow;
    a || (a = window.frames[this.q[$.La]]);
    this.Fa = a
  }
  if(!this.Fa) {
    if(window == window.top) {
      throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
    }
    this.Fa = window.parent
  }
  if(!this.$) {
    if(!this.q[$.Ab]) {
      var a = this.q, b = $.Ab, c;
      if(fa(document.postMessage) || fa(window.postMessage) || X && window.postMessage) {
        c = 1
      }else {
        if(Je) {
          c = 2
        }else {
          if(X && this.q[$.Tb]) {
            c = 3
          }else {
            var d;
            if(d = X) {
              d = !1;
              try {
                c = window.opener, window.opener = {}, d = ff(window, "opener"), window.opener = c
              }catch(e) {
              }
            }
            c = d ? 6 : 4
          }
        }
      }
      a[b] = c
    }
    switch(this.q[$.Ab]) {
      case 1:
        this.$ = new Dh(this, this.q[$.yc], this.Aa, !!this.q[$.xc], this.q[$.De] || 2);
        break;
      case 6:
        this.$ = new Kh(this, this.Aa);
        break;
      case 2:
        this.$ = new $g(this, this.Aa);
        break;
      case 3:
        this.$ = new th(this, this.Aa);
        break;
      case 4:
        this.$ = new bh(this, this.Aa)
    }
    if(this.$) {
      Y.info("Transport created: " + this.$.getName())
    }else {
      throw Error("CrossPageChannel: No suitable transport found!");
    }
  }
  for(this.$.ta();0 < this.ec.length;) {
    this.ec.shift()()
  }
};
q.close = function() {
  Sh(this);
  this.pd = 3;
  af(this.$);
  this.Xc = this.$ = null;
  af(this.Oa);
  this.Oa = null;
  Y.info('Channel "' + this.name + '" closed')
};
q.Ea = function(a) {
  this.va() || this.Oa && this.Oa.fe() || (this.pd = 2, Y.info('Channel "' + this.name + '" connected'), af(this.Oa), a ? (this.Oa = new og(this.Xc, a), this.Oa.start()) : (this.Oa = null, this.Xc()))
};
q.ne = Nh.prototype.Ea;
q.send = function(a, b) {
  this.va() ? hh(this) ? (ga(b) && (b = Bf(b)), this.$.send(Uh(a), b)) : (Y.log(Hg, "Peer has disappeared.", void 0), this.close()) : Y.log(Hg, "Can't send. Channel not connected.", void 0)
};
q.Ka = function(a, b, c) {
  if(this.xa) {
    this.ec.push(v(this.Ka, this, a, b, c))
  }else {
    var d = this.q[$.yc];
    if(/^[\s\xa0]*$/.test(null == c ? "" : String(c)) || /^[\s\xa0]*$/.test(null == d ? "" : String(d)) || c == this.q[$.yc]) {
      if(this.lb) {
        Y.log(Ig, "CrossPageChannel::xpcDeliver(): Disposed.", void 0)
      }else {
        if(a && "tp" != a) {
          if(this.va()) {
            if(a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = Qh.test(a) ? a.substring(1) : a, c = this.md[a], c || (this.Xd ? c = {ra:na(this.Xd, a), oe:ga(b)} : (this.cd.log(Ig, 'Unknown service name "' + a + '"', void 0), c = null)), c) {
              var e;
              a: {
                if((d = c.oe) && u(b)) {
                  try {
                    e = Af(b);
                    break a
                  }catch(f) {
                    this.cd.log(Ig, "Expected JSON payload for " + a + ', was "' + b + '"', void 0);
                    e = null;
                    break a
                  }
                }else {
                  if(!d && !u(b)) {
                    e = Bf(b);
                    break a
                  }
                }
                e = b
              }
              null != e && c.ra(e)
            }
          }else {
            Y.info("CrossPageChannel::xpcDeliver(): Not connected.")
          }
        }else {
          this.$.qd(b)
        }
      }
    }else {
      Y.log(Ig, 'Message received from unapproved origin "' + c + '" - rejected.', void 0)
    }
  }
};
function Uh(a) {
  Ph.test(a) && (a = "%" + a);
  return a.replace(/[%:|]/g, encodeURIComponent)
}
function ah(a) {
  var b = a.q[$.zc];
  return b ? b : window.parent == a.Fa ? 1 : 0
}
q.B = function() {
  this.close();
  this.sb = this.Fa = null;
  delete Wg[this.name];
  af(this.oc);
  delete this.oc;
  Nh.ka.B.call(this)
};
function Oh() {
  for(var a in Wg) {
    af(Wg[a])
  }
}
;Sg("goog.net.XhrIo");
ed(Md, dd.a(function(a) {
  var b = ac.d(a, 0, null);
  a = ac.d(a, 1, null);
  return ud([Mc.c(b.toLowerCase()), a])
}, fe.g(P([Ae.c({If:"complete", Of:"success", Jf:"error", Hf:"abort", Mf:"ready", Nf:"readystatechange", TIMEOUT:"timeout", Kf:"incrementaldata", Lf:"progress"})], 0))));
var Vh = function() {
  function a(a, b, c, d) {
    if(a ? a.Nd : a) {
      return a.Nd(a, b, c, d)
    }
    var e;
    e = Vh[t(null == a ? null : a)];
    if(!e && (e = Vh._, !e)) {
      throw A("IConnection.connect", a);
    }
    return e.call(null, a, b, c, d)
  }
  function b(a, b, c) {
    if(a ? a.Md : a) {
      return a.Md(a, b, c)
    }
    var d;
    d = Vh[t(null == a ? null : a)];
    if(!d && (d = Vh._, !d)) {
      throw A("IConnection.connect", a);
    }
    return d.call(null, a, b, c)
  }
  function c(a, b) {
    if(a ? a.Ld : a) {
      return a.Ld(a, b)
    }
    var c;
    c = Vh[t(null == a ? null : a)];
    if(!c && (c = Vh._, !c)) {
      throw A("IConnection.connect", a);
    }
    return c.call(null, a, b)
  }
  function d(a) {
    if(a ? a.Kd : a) {
      return a.Kd(a)
    }
    var b;
    b = Vh[t(null == a ? null : a)];
    if(!b && (b = Vh._, !b)) {
      throw A("IConnection.connect", a);
    }
    return b.call(null, a)
  }
  var e = null, e = function(e, h, k, l) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
      case 3:
        return b.call(this, e, h, k);
      case 4:
        return a.call(this, e, h, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.c = d;
  e.a = c;
  e.d = b;
  e.l = a;
  return e
}(), Wh = function() {
  function a(a, b, c, d, e, f) {
    if(a ? a.Ze : a) {
      return a.Ze(a, b, c, d, e, f)
    }
    var y;
    y = Wh[t(null == a ? null : a)];
    if(!y && (y = Wh._, !y)) {
      throw A("IConnection.transmit", a);
    }
    return y.call(null, a, b, c, d, e, f)
  }
  function b(a, b, c, d, e) {
    if(a ? a.Ye : a) {
      return a.Ye(a, b, c, d, e)
    }
    var f;
    f = Wh[t(null == a ? null : a)];
    if(!f && (f = Wh._, !f)) {
      throw A("IConnection.transmit", a);
    }
    return f.call(null, a, b, c, d, e)
  }
  function c(a, b, c, d) {
    if(a ? a.Xe : a) {
      return a.Xe(a, b, c, d)
    }
    var e;
    e = Wh[t(null == a ? null : a)];
    if(!e && (e = Wh._, !e)) {
      throw A("IConnection.transmit", a);
    }
    return e.call(null, a, b, c, d)
  }
  function d(a, b, c) {
    if(a ? a.Od : a) {
      return a.Od(a, b, c)
    }
    var d;
    d = Wh[t(null == a ? null : a)];
    if(!d && (d = Wh._, !d)) {
      throw A("IConnection.transmit", a);
    }
    return d.call(null, a, b, c)
  }
  function e(a, b) {
    if(a ? a.We : a) {
      return a.We(a, b)
    }
    var c;
    c = Wh[t(null == a ? null : a)];
    if(!c && (c = Wh._, !c)) {
      throw A("IConnection.transmit", a);
    }
    return c.call(null, a, b)
  }
  var f = null, f = function(f, k, l, m, n, r) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, k);
      case 3:
        return d.call(this, f, k, l);
      case 4:
        return c.call(this, f, k, l, m);
      case 5:
        return b.call(this, f, k, l, m, n);
      case 6:
        return a.call(this, f, k, l, m, n, r)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = e;
  f.d = d;
  f.l = c;
  f.S = b;
  f.sa = a;
  return f
}(), Xh = ed(Md, dd.a(function(a) {
  var b = ac.d(a, 0, null);
  a = ac.d(a, 1, null);
  return ud([Mc.c(b.toLowerCase()), a])
}, Ae.c($))), Yh = function() {
  function a(a, b, c, h) {
    if(a ? a.Qd : a) {
      return a.Qd(a, b, c, h)
    }
    var k;
    k = Yh[t(null == a ? null : a)];
    if(!k && (k = Yh._, !k)) {
      throw A("ICrossPageChannel.register-service", a);
    }
    return k.call(null, a, b, c, h)
  }
  function b(a, b, c) {
    if(a ? a.Pd : a) {
      return a.Pd(a, b, c)
    }
    var h;
    h = Yh[t(null == a ? null : a)];
    if(!h && (h = Yh._, !h)) {
      throw A("ICrossPageChannel.register-service", a);
    }
    return h.call(null, a, b, c)
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.l = a;
  return c
}();
q = Nh.prototype;
q.Kd = function(a) {
  return Vh.a(a, null)
};
q.Ld = function(a, b) {
  return a.ta(b)
};
q.Md = function(a, b, c) {
  return Vh.l(a, b, c, document.body)
};
q.Nd = function(a, b, c, d) {
  Rh(a, d, c);
  return a.ta(b)
};
q.Od = function(a, b, c) {
  return a.send(Lc(b), c)
};
q.Pd = function(a, b, c) {
  return Yh.l(a, b, c, !1)
};
q.Qd = function(a, b, c, d) {
  b = Lc(b);
  a.md[b] = {ra:c, oe:!!d}
};
var Zh = function() {
  function a(a) {
    return new Nh(xc.d(function(a, b) {
      var c = ac.d(b, 0, null), d = ac.d(b, 1, null), c = bc.a(Xh, c);
      x(c) && (a[c] = d);
      return a
    }, {}, a))
  }
  function b() {
    var a;
    a = (new Of(window.location.href)).Ga.get("xpc");
    return x(a) ? new Nh(Af(a)) : null
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = b;
  c.c = a;
  return c
}();
var $h = qe.c(null);
function ai(a) {
  var b = function() {
    try {
      return Sa([w.bf, w.dg, w.cf, "" + B(eval(a))])
    }catch(b) {
      if(b instanceof Error) {
        return Sa([w.bf, w.cg, w.cf, oe.g(P([b], 0)), w.bg, x(b.hasOwnProperty("stack")) ? b.stack : "No stacktrace available."])
      }
      if(w.n) {
        throw b;
      }
      return null
    }
  }();
  return oe.g(P([b], 0))
}
qe.c(0);
(function(a) {
  var b = Zh.c(Sa([w.hg, a]));
  se.a($h, cd(b));
  Yh.d(b, w.eg, function(a) {
    return Wh.d(b, w.fg, ai(a))
  });
  return Vh.d(b, cd(null), function(a) {
    return a.style.display = "none"
  })
})("http://localhost:9000/repl");
function bi(a) {
  if(a ? a.ac : a) {
    return a.ac()
  }
  var b;
  b = bi[t(null == a ? null : a)];
  if(!b && (b = bi._, !b)) {
    throw A("Channel.close!", a);
  }
  return b.call(null, a)
}
function ci(a) {
  if(a ? a.Te : a) {
    return!0
  }
  var b;
  b = ci[t(null == a ? null : a)];
  if(!b && (b = ci._, !b)) {
    throw A("Handler.active?", a);
  }
  return b.call(null, a)
}
;var di, fi = function ei(b) {
  "undefined" === typeof di && (di = {}, di = function(b, d, e) {
    this.ob = b;
    this.kf = d;
    this.rf = e;
    this.p = 0;
    this.e = 393216
  }, di.cc = !0, di.bc = "cljs.core.async.impl.ioc-helpers/t14752", di.Vc = function(b, d) {
    return H(d, "cljs.core.async.impl.ioc-helpers/t14752")
  }, di.prototype.Te = p(!0), di.prototype.O = g("rf"), di.prototype.P = function(b, d) {
    return new di(this.ob, this.kf, d)
  });
  return new di(b, ei, null)
};
function gi(a) {
  try {
    return a[0].call(null, a)
  }catch(b) {
    if(b instanceof Object) {
      throw a[4].ac(), b;
    }
    if(w.n) {
      throw b;
    }
    return null
  }
}
function hi(a, b) {
  var c = b.Ue(fi(function(b) {
    a[2] = b;
    a[1] = 4;
    return gi(a)
  }));
  return x(c) ? (a[2] = ob(c), a[1] = 4, w.ag) : null
}
function ii(a, b) {
  var c = a[4];
  null != b && c.Ve(b, fi(p(null)));
  c.ac();
  return c
}
;function ji(a, b, c, d, e) {
  for(var f = 0;;) {
    if(f < e) {
      c[d + f] = a[b + f], f += 1
    }else {
      break
    }
  }
}
function ki(a, b, c, d) {
  this.head = a;
  this.t = b;
  this.length = c;
  this.b = d
}
ki.prototype.pop = function() {
  if(0 === this.length) {
    return null
  }
  var a = this.b[this.t];
  this.b[this.t] = null;
  this.t = (this.t + 1) % this.b.length;
  this.length -= 1;
  return a
};
ki.prototype.unshift = function(a) {
  this.b[this.head] = a;
  this.head = (this.head + 1) % this.b.length;
  this.length += 1;
  return null
};
function li(a, b) {
  if(a.length + 1 === a.b.length) {
    var c = Array(2 * a.b.length);
    a.t < a.head ? (ji(a.b, a.t, c, 0, a.length), a.t = 0, a.head = a.length, a.b = c) : a.t > a.head ? (ji(a.b, a.t, c, 0, a.b.length - a.t), ji(a.b, 0, c, a.b.length - a.t, a.head), a.t = 0, a.head = a.length, a.b = c) : a.t === a.head && (a.t = 0, a.head = 0, a.b = c)
  }
  a.unshift(b)
}
function mi(a, b) {
  for(var c = a.length, d = 0;;) {
    if(d < c) {
      var e = a.pop();
      (b.c ? b.c(e) : b.call(null, e)) && a.unshift(e);
      d += 1
    }else {
      break
    }
  }
}
function ni(a) {
  if(!(0 < a)) {
    throw Error([B("Assert failed: "), B("Can't create a ring buffer of size 0"), B("\n"), B(oe.g(P([Wb(new I(null, "\x3e", "\x3e", -1640531465, null), new I(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new ki(0, 0, 0, Array(a))
}
function oi(a, b) {
  this.Q = a;
  this.ke = b;
  this.p = 0;
  this.e = 2
}
oi.prototype.L = function() {
  return this.Q.length
};
function pi(a, b, c) {
  if(!Ta(b.Q.length === b.ke)) {
    throw Error([B("Assert failed: "), B("Can't add to a full buffer"), B("\n"), B(oe.g(P([Wb(new I(null, "not", "not", -1640422260, null), Wb(new I("impl", "full?", "impl/full?", -1337857039, null), new I(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  a.Q.unshift(c)
}
;var qi = null, ri = ni(32), si = !1, ti = !1;
function ui() {
  si = !0;
  ti = !1;
  for(var a = 0;;) {
    var b = ri.pop();
    if(null != b && (b.o ? b.o() : b.call(null), 1024 > a)) {
      a += 1;
      continue
    }
    break
  }
  si = !1;
  return 0 < ri.length ? vi.o ? vi.o() : vi.call(null) : null
}
"undefined" !== typeof MessageChannel && (qi = new MessageChannel, qi.port1.onmessage = function() {
  return ui()
});
function vi() {
  var a = ti;
  if(x(x(a) ? si : a)) {
    return null
  }
  ti = !0;
  return"undefined" !== typeof MessageChannel ? qi.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(ui) : w.n ? setTimeout(ui, 0) : null
}
function wi(a) {
  li(ri, a);
  vi()
}
;var xi, zi = function yi(b) {
  "undefined" === typeof xi && (xi = {}, xi = function(b, d, e) {
    this.J = b;
    this.Ge = d;
    this.qf = e;
    this.p = 0;
    this.e = 425984
  }, xi.cc = !0, xi.bc = "cljs.core.async.impl.channels/t14741", xi.Vc = function(b, d) {
    return H(d, "cljs.core.async.impl.channels/t14741")
  }, xi.prototype.Fc = g("J"), xi.prototype.O = g("qf"), xi.prototype.P = function(b, d) {
    return new xi(this.J, this.Ge, d)
  });
  return new xi(b, yi, null)
};
function Ai(a, b) {
  this.rb = a;
  this.J = b
}
function Bi(a) {
  return ci(a.rb)
}
function Ci(a, b, c, d, e, f) {
  this.Qb = a;
  this.gc = b;
  this.qc = c;
  this.fc = d;
  this.Q = e;
  this.closed = f
}
Ci.prototype.ac = function() {
  if(!this.closed) {
    for(this.closed = !0;;) {
      var a = this.Qb.pop();
      if(null != a) {
        wi(function(a) {
          return function() {
            return a.c ? a.c(null) : a.call(null, null)
          }
        }(a.ob, a))
      }else {
        break
      }
    }
  }
  return null
};
Ci.prototype.Ue = function(a) {
  var b = null != this.Q;
  if(b ? 0 < R(this.Q) : b) {
    return zi(this.Q.Q.pop())
  }
  for(;;) {
    b = this.qc.pop();
    if(null != b) {
      return a = b.J, wi(b.rb.ob), zi(a)
    }
    if(this.closed) {
      return zi(null)
    }
    64 < this.gc ? (this.gc = 0, mi(this.Qb, ci)) : this.gc += 1;
    if(!(1024 > this.Qb.length)) {
      throw Error([B("Assert failed: "), B([B("No more than "), B(1024), B(" pending takes are allowed on a single channel.")].join("")), B("\n"), B(oe.g(P([Wb(new I(null, "\x3c", "\x3c", -1640531467, null), Wb(new I(null, ".-length", ".-length", 1395928862, null), new I(null, "takes", "takes", -1530407291, null)), new I("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
    }
    li(this.Qb, a);
    return null
  }
};
Ci.prototype.Ve = function(a, b) {
  var c = this;
  if(null == a) {
    throw Error([B("Assert failed: "), B("Can't put nil in on a channel"), B("\n"), B(oe.g(P([Wb(new I(null, "not", "not", -1640422260, null), Wb(new I(null, "nil?", "nil?", -1637150201, null), new I(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  var d = c.closed;
  if(d && d) {
    zi(null)
  }else {
    for(;;) {
      d = c.Qb.pop();
      if(null != d) {
        var e = b.ob;
        wi(function(b) {
          return function() {
            return b.c ? b.c(a) : b.call(null, a)
          }
        }(d.ob, e, d))
      }else {
        if(function() {
          var a = null == c.Q;
          return a ? a : c.Q.Q.length === c.Q.ke
        }()) {
          64 < c.fc ? (c.fc = 0, mi(c.qc, Bi)) : c.fc += 1;
          if(!(1024 > c.qc.length)) {
            throw Error([B("Assert failed: "), B([B("No more than "), B(1024), B(" pending puts are allowed on a single channel."), B(" Consider using a windowed buffer.")].join("")), B("\n"), B(oe.g(P([Wb(new I(null, "\x3c", "\x3c", -1640531467, null), Wb(new I(null, ".-length", ".-length", 1395928862, null), new I(null, "puts", "puts", -1637078787, null)), new I("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
          }
          li(c.qc, new Ai(b, a));
          break
        }
        e = b.ob;
        pi(c.Q, c.Q, a)
      }
      zi(null);
      break
    }
  }
};
function Di(a) {
  return new Ci(ni(32), 0, ni(32), 0, a, null)
}
;var Ei = function() {
  function a(a) {
    for(;;) {
      var b = 0.5 > Math.random();
      if(b ? 15 > a : b) {
        a += 1
      }else {
        return a
      }
    }
  }
  function b() {
    return c.c(0)
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = b;
  c.c = a;
  return c
}();
function Fi(a, b, c) {
  this.key = a;
  this.J = b;
  this.forward = c;
  this.p = 0;
  this.e = 2155872256
}
Fi.prototype.D = function(a, b, c) {
  return V(b, W, "[", " ", "]", c, a)
};
Fi.prototype.A = function() {
  return Wb.g(P([this.key, this.J], 0))
};
var Gi = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for(var h = 0;;) {
      if(h < c.length) {
        c[h] = null, h += 1
      }else {
        break
      }
    }
    return new Fi(a, b, c)
  }
  function b(a) {
    return c.d(null, null, a)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.d = a;
  return c
}(), Hi = function() {
  function a(a, b, c, h) {
    for(;;) {
      if(0 > c) {
        return a
      }
      a: {
        for(;;) {
          var k = a.forward[c];
          if(x(k)) {
            if(k.key < b) {
              a = k
            }else {
              break a
            }
          }else {
            break a
          }
        }
        a = void 0
      }
      null != h && (h[c] = a);
      c -= 1
    }
  }
  function b(a, b, f) {
    return c.l(a, b, f, null)
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, h)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.l = a;
  return c
}();
function Ii(a, b) {
  this.Qa = a;
  this.ha = b;
  this.p = 0;
  this.e = 2155872256
}
Ii.prototype.D = function(a, b, c) {
  return V(b, function(a) {
    return V(b, W, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Ii.prototype.A = function() {
  var a = function c(a) {
    return new Nc(null, function() {
      return null == a ? null : Q(ud([a.key, a.J]), c(a.forward[0]))
    }, null, null)
  };
  return a.c ? a.c(this.Qa.forward[0]) : a.call(null, this.Qa.forward[0])
};
Ii.prototype.put = function(a, b) {
  var c = Array(15), d = Hi.l(this.Qa, a, this.ha, c).forward[0], e = null != d;
  if(e ? d.key === a : e) {
    return d.J = b
  }
  d = Ei.o();
  if(d > this.ha) {
    for(e = this.ha + 1;;) {
      if(e <= d + 1) {
        c[e] = this.Qa, e += 1
      }else {
        break
      }
    }
    this.ha = d
  }
  for(d = Gi.d(a, b, Array(d));;) {
    return 0 <= this.ha ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null
  }
};
Ii.prototype.remove = function(a) {
  var b = this, c = Array(15), d = Hi.l(b.Qa, a, b.ha, c).forward[0];
  if(function() {
    var b = null != d;
    return b ? d.key === a : b
  }()) {
    for(var e = 0;;) {
      if(e <= b.ha) {
        var f = c[e].forward;
        f[e] === d && (f[e] = d.forward[e]);
        e += 1
      }else {
        break
      }
    }
    for(;;) {
      if(function() {
        var a = 0 < b.ha;
        return a ? null == b.Qa.forward[b.ha] : a
      }()) {
        b.ha -= 1
      }else {
        return null
      }
    }
  }else {
    return null
  }
};
function Ji(a) {
  for(var b = Ki, c = b.Qa, d = b.ha;;) {
    if(0 > d) {
      return c === b.Qa ? null : c
    }
    var e;
    a: {
      for(e = c;;) {
        e = e.forward[d];
        if(null == e) {
          e = null;
          break a
        }
        if(e.key >= a) {
          break a
        }
      }
      e = void 0
    }
    null != e ? (d -= 1, c = e) : d -= 1
  }
}
var Ki = new Ii(Gi.c(0), 0);
function Li() {
  var a = (new Date).valueOf() + 50, b = Ji(a), b = x(x(b) ? b.key < a + 10 : b) ? b.J : null;
  if(x(b)) {
    return b
  }
  var c = Di(null);
  Ki.put(a, c);
  setTimeout(function() {
    Ki.remove(a);
    return bi(c)
  }, 50);
  return c
}
;var Mi = function() {
  function a(a) {
    a = Pb.a(a, 0) ? null : a;
    return Di("number" === typeof a ? new oi(ni(a), a) : a)
  }
  function b() {
    return c.c(null)
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = b;
  c.c = a;
  return c
}();
var Ni = new T(null, "r", "r"), Oi = new T(null, "recur", "recur"), Pi = new T(null, "heading", "heading"), Qi = new T(null, "coords", "coords"), Ri = new T(null, "else", "else"), Si = new T(null, "delta", "delta"), Ti = new T(null, "id", "id");
function Ui() {
  return Sa([Qi, ud([Cc(1E3), Cc(1E3)])])
}
function Vi(a) {
  return Sa([Si, 50 * 0.05 * Bc.o(), Ni, 1, Pi, 0, Ti, a])
}
function Wi(a) {
  return 1E3 < a ? a - 1E3 : 0 > a ? a - 1E3 : Ri ? a : null
}
function Xi(a, b) {
  var c = sc(a) ? gc.a(cc, a) : a, d = bc.a(c, Si), c = sc(b) ? gc.a(cc, b) : b, e = bc.a(c, Qi), e = dd.a(Wi, dd.a(function(a) {
    return d + a
  }, e));
  return dc.d(c, Qi, e)
}
function Yi() {
  initWorld(1E3);
  var a = Mi.c(1);
  wi(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for(;;) {
              var e = a(c);
              if(!Kc(e, Oi)) {
                return e
              }
            }
          }
          function c() {
            var a = Array(9);
            a[0] = h;
            a[1] = 1;
            return a
          }
          var h = null, h = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a)
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          h.o = c;
          h.c = b;
          return h
        }()
      }(function(a) {
        var b = a[1];
        if(4 === b) {
          var c = a[5], b = a[6], h = a[2], c = dd.d(Xi, b, c);
          a[7] = h;
          a[5] = c;
          a[6] = b;
          a[2] = null;
          a[1] = 2;
          return Oi
        }
        return 3 === b ? (b = a[2], ii(a, b)) : 2 === b ? (c = a[5], b = drawBirds(we(dd.a(we, c))), h = Li(), a[8] = b, hi(a, h)) : 1 === b ? (b = he.c(20), b = dd.a(Vi, b), b = vd(b), h = dd.a(Ui, b), a[5] = h, a[6] = b, a[2] = null, a[1] = 2, Oi) : null
      })
    }(), c = function() {
      var c = b.o ? b.o() : b.call(null);
      c[4] = a;
      return c
    }();
    return gi(c)
  });
  return a
}
jQuery(document).ng(function() {
  return Yi()
});
