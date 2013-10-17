function ba() {
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
function ca(a) {
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
function da() {
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
function ea(a) {
  return"array" == t(a)
}
function fa(a) {
  var b = t(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function u(a) {
  return"string" == typeof a
}
function ga(a) {
  return"function" == t(a)
}
function ha(a) {
  var b = typeof a;
  return"object" == b && null != a || "function" == b
}
function ia(a) {
  return a[ja] || (a[ja] = ++ka)
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
function ma(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function na(a, b, c) {
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
function w(a, b, c) {
  w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
  return w.apply(null, arguments)
}
function oa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var pa = Date.now || function() {
  return+new Date
};
function qa(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ka = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function ra(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, ra) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
qa(ra, Error);
ra.prototype.name = "CustomError";
function sa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$");
    a = a.replace(/\%s/, d)
  }
  return a
}
function ta(a) {
  if(!ua.test(a)) {
    return a
  }
  -1 != a.indexOf("\x26") && (a = a.replace(va, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(xa, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(ya, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(za, "\x26quot;"));
  return a
}
var va = /&/g, xa = /</g, ya = />/g, za = /\"/g, ua = /[&<>\"]/;
function Aa(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;function Ba(a, b) {
  b.unshift(a);
  ra.call(this, sa.apply(null, b));
  b.shift();
  this.mg = a
}
qa(Ba, ra);
Ba.prototype.name = "AssertionError";
function Ca(a, b) {
  throw new Ba("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var Da = Array.prototype, Ea = Da.indexOf ? function(a, b, c) {
  return Da.indexOf.call(a, b, c)
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
}, Fa = Da.forEach ? function(a, b, c) {
  Da.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
}, Ga = Da.filter ? function(a, b, c) {
  return Da.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, h = u(a) ? a.split("") : a, k = 0;k < d;k++) {
    if(k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (e[f++] = l)
    }
  }
  return e
}, Ha = Da.some ? function(a, b, c) {
  return Da.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && b.call(c, e[f], f, a)) {
      return!0
    }
  }
  return!1
};
function Ia(a, b) {
  var c = Ea(a, b);
  0 <= c && Da.splice.call(a, c, 1)
}
function Ja(a) {
  return Da.concat.apply(Da, arguments)
}
function Ka(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
;function La(a, b) {
  for(var c in a) {
    b.call(void 0, a[c], c, a)
  }
}
function Ma(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Na(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Oa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Pa(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < Oa.length;f++) {
      c = Oa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function Qa(a, b) {
  null != a && this.append.apply(this, arguments)
}
Qa.prototype.hb = "";
Qa.prototype.set = function(a) {
  this.hb = "" + a
};
Qa.prototype.append = function(a, b, c) {
  this.hb += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.hb += arguments[d]
    }
  }
  return this
};
Qa.prototype.toString = g("hb");
var x = {}, Ra;
function Sa() {
  return Ta([x.$f, !0, x.af, !0, x.Rd, !1, x.gg, !1])
}
function y(a) {
  return null != a && !1 !== a
}
function Ua(a) {
  return y(a) ? !1 : !0
}
function z(a, b) {
  return a[t(null == b ? null : b)] ? !0 : a._ ? !0 : x.p ? !1 : null
}
function Va(a) {
  return null == a ? null : a.constructor
}
function A(a, b) {
  var c = Va(b), c = y(y(c) ? c.cc : c) ? c.bc : t(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function Wa(a) {
  var b = a.bc;
  return y(b) ? b : "" + B(a)
}
function Xa(a) {
  return Array.prototype.slice.call(arguments)
}
var Ya = {}, $a = {};
function ab(a) {
  if(a ? a.M : a) {
    return a.M(a)
  }
  var b;
  b = ab[t(null == a ? null : a)];
  if(!b && (b = ab._, !b)) {
    throw A("ICounted.-count", a);
  }
  return b.call(null, a)
}
function bb(a) {
  if(a ? a.T : a) {
    return a.T(a)
  }
  var b;
  b = bb[t(null == a ? null : a)];
  if(!b && (b = bb._, !b)) {
    throw A("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a)
}
var cb = {};
function db(a, b) {
  if(a ? a.S : a) {
    return a.S(a, b)
  }
  var c;
  c = db[t(null == a ? null : a)];
  if(!c && (c = db._, !c)) {
    throw A("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var eb = {}, D = function() {
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
    if(a ? a.O : a) {
      return a.O(a, b)
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
}(), fb = {};
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
var gb = {}, hb = function() {
  function a(a, b, c) {
    if(a ? a.W : a) {
      return a.W(a, b, c)
    }
    var h;
    h = hb[t(null == a ? null : a)];
    if(!h && (h = hb._, !h)) {
      throw A("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.ea : a) {
      return a.ea(a, b)
    }
    var c;
    c = hb[t(null == a ? null : a)];
    if(!c && (c = hb._, !c)) {
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
function ib(a, b, c) {
  if(a ? a.za : a) {
    return a.za(a, b, c)
  }
  var d;
  d = ib[t(null == a ? null : a)];
  if(!d && (d = ib._, !d)) {
    throw A("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var jb = {}, kb = {};
function lb(a) {
  if(a ? a.Gd : a) {
    return a.Gd(a)
  }
  var b;
  b = lb[t(null == a ? null : a)];
  if(!b && (b = lb._, !b)) {
    throw A("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function mb(a) {
  if(a ? a.Hd : a) {
    return a.Hd(a)
  }
  var b;
  b = mb[t(null == a ? null : a)];
  if(!b && (b = mb._, !b)) {
    throw A("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var nb = {};
function ob(a, b, c) {
  if(a ? a.Uc : a) {
    return a.Uc(a, b, c)
  }
  var d;
  d = ob[t(null == a ? null : a)];
  if(!d && (d = ob._, !d)) {
    throw A("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function pb(a) {
  if(a ? a.Fc : a) {
    return a.Fc(a)
  }
  var b;
  b = pb[t(null == a ? null : a)];
  if(!b && (b = pb._, !b)) {
    throw A("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var qb = {};
function rb(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var b;
  b = rb[t(null == a ? null : a)];
  if(!b && (b = rb._, !b)) {
    throw A("IMeta.-meta", a);
  }
  return b.call(null, a)
}
var sb = {};
function tb(a, b) {
  if(a ? a.Q : a) {
    return a.Q(a, b)
  }
  var c;
  c = tb[t(null == a ? null : a)];
  if(!c && (c = tb._, !c)) {
    throw A("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var ub = {}, vb = function() {
  function a(a, b, c) {
    if(a ? a.Y : a) {
      return a.Y(a, b, c)
    }
    var h;
    h = vb[t(null == a ? null : a)];
    if(!h && (h = vb._, !h)) {
      throw A("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.X : a) {
      return a.X(a, b)
    }
    var c;
    c = vb[t(null == a ? null : a)];
    if(!c && (c = vb._, !c)) {
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
function wb(a, b) {
  if(a ? a.H : a) {
    return a.H(a, b)
  }
  var c;
  c = wb[t(null == a ? null : a)];
  if(!c && (c = wb._, !c)) {
    throw A("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function xb(a) {
  if(a ? a.N : a) {
    return a.N(a)
  }
  var b;
  b = xb[t(null == a ? null : a)];
  if(!b && (b = xb._, !b)) {
    throw A("IHash.-hash", a);
  }
  return b.call(null, a)
}
var yb = {};
function zb(a) {
  if(a ? a.A : a) {
    return a.A(a)
  }
  var b;
  b = zb[t(null == a ? null : a)];
  if(!b && (b = zb._, !b)) {
    throw A("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var Ab = {};
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
function Bb(a) {
  if(a ? a.Se : a) {
    return null
  }
  var b;
  b = Bb[t(null == a ? null : a)];
  if(!b && (b = Bb._, !b)) {
    throw A("IWriter.-flush", a);
  }
  return b.call(null, a)
}
var Cb = {};
function Db(a, b, c) {
  if(a ? a.F : a) {
    return a.F(a, b, c)
  }
  var d;
  d = Db[t(null == a ? null : a)];
  if(!d && (d = Db._, !d)) {
    throw A("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function Eb(a, b, c) {
  if(a ? a.Id : a) {
    return a.Id(a, b, c)
  }
  var d;
  d = Eb[t(null == a ? null : a)];
  if(!d && (d = Eb._, !d)) {
    throw A("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c)
}
function Fb(a) {
  if(a ? a.Zb : a) {
    return a.Zb(a)
  }
  var b;
  b = Fb[t(null == a ? null : a)];
  if(!b && (b = Fb._, !b)) {
    throw A("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function Gb(a, b) {
  if(a ? a.Cb : a) {
    return a.Cb(a, b)
  }
  var c;
  c = Gb[t(null == a ? null : a)];
  if(!c && (c = Gb._, !c)) {
    throw A("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function Hb(a) {
  if(a ? a.$b : a) {
    return a.$b(a)
  }
  var b;
  b = Hb[t(null == a ? null : a)];
  if(!b && (b = Hb._, !b)) {
    throw A("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function Ib(a, b, c) {
  if(a ? a.jb : a) {
    return a.jb(a, b, c)
  }
  var d;
  d = Ib[t(null == a ? null : a)];
  if(!d && (d = Ib._, !d)) {
    throw A("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function Jb(a) {
  if(a ? a.Bd : a) {
    return a.Bd()
  }
  var b;
  b = Jb[t(null == a ? null : a)];
  if(!b && (b = Jb._, !b)) {
    throw A("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function Kb(a) {
  if(a ? a.Ec : a) {
    return a.Ec(a)
  }
  var b;
  b = Kb[t(null == a ? null : a)];
  if(!b && (b = Kb._, !b)) {
    throw A("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function Lb(a) {
  if(a ? a.Yb : a) {
    return a.Yb(a)
  }
  var b;
  b = Lb[t(null == a ? null : a)];
  if(!b && (b = Lb._, !b)) {
    throw A("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function Mb(a) {
  this.zf = a;
  this.q = 0;
  this.f = 1073741824
}
Mb.prototype.Jd = function(a, b) {
  return this.zf.append(b)
};
Mb.prototype.Se = p(null);
function Nb(a) {
  var b = new Qa, c = new Mb(b);
  a.F(a, c, Sa());
  Bb(c);
  return"" + B(b)
}
function I(a, b, c, d, e) {
  this.ab = a;
  this.name = b;
  this.eb = c;
  this.Xa = d;
  this.fb = e;
  this.f = 2154168321;
  this.q = 4096
}
q = I.prototype;
q.F = function(a, b) {
  return H(b, this.eb)
};
q.N = function(a) {
  var b = this.Xa;
  return null != b ? b : this.Xa = a = Ob.a ? Ob.a(J.b ? J.b(a.ab) : J.call(null, a.ab), J.b ? J.b(a.name) : J.call(null, a.name)) : Ob.call(null, J.b ? J.b(a.ab) : J.call(null, a.ab), J.b ? J.b(a.name) : J.call(null, a.name))
};
q.Q = function(a, b) {
  return new I(this.ab, this.name, this.eb, this.Xa, b)
};
q.P = g("fb");
q.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return hb.d(c, this, null);
      case 3:
        return hb.d(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.H = function(a, b) {
  return b instanceof I ? this.eb === b.eb : !1
};
q.toString = g("eb");
function K(a) {
  if(null == a) {
    return null
  }
  var b;
  b = a ? ((b = a.f & 8388608) ? b : a.Wf) ? !0 : !1 : !1;
  if(b) {
    return a.A(a)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Pb(a, 0)
  }
  if(z(yb, a)) {
    return zb(a)
  }
  if(x.p) {
    throw Error([B(a), B("is not ISeqable")].join(""));
  }
  return null
}
function L(a) {
  if(null == a) {
    return null
  }
  var b;
  b = a ? ((b = a.f & 64) ? b : a.Bb) ? !0 : !1 : !1;
  if(b) {
    return a.Z(a)
  }
  a = K(a);
  return null == a ? null : E(a)
}
function M(a) {
  if(null != a) {
    var b;
    b = a ? ((b = a.f & 64) ? b : a.Bb) ? !0 : !1 : !1;
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
    b = a ? ((b = a.f & 128) ? b : a.Vf) ? !0 : !1 : !1;
    a = b ? a.ma(a) : K(M(a))
  }
  return a
}
var Qb = function() {
  function a(a, b) {
    var c = a === b;
    return c ? c : wb(a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = P(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(y(b.a(a, d))) {
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
    a.o = 2;
    a.h = function(a) {
      var b = L(a);
      a = O(a);
      var d = L(a);
      a = M(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, P(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.h = c.h;
  b.b = p(!0);
  b.a = a;
  b.e = c.e;
  return b
}();
xb["null"] = p(0);
$a["null"] = !0;
ab["null"] = p(0);
wb["null"] = function(a, b) {
  return null == b
};
sb["null"] = !0;
tb["null"] = p(null);
qb["null"] = !0;
rb["null"] = p(null);
bb["null"] = p(null);
jb["null"] = !0;
Date.prototype.H = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
xb.number = function(a) {
  return Math.floor(a) % 2147483647
};
wb.number = function(a, b) {
  return a === b
};
xb["boolean"] = function(a) {
  return!0 === a ? 1 : 0
};
qb["function"] = !0;
rb["function"] = p(null);
Ya["function"] = !0;
xb._ = function(a) {
  return ia(a)
};
var Rb = function() {
  function a(a, b, c, d) {
    for(var l = ab(a);;) {
      if(d < l) {
        c = b.a ? b.a(c, D.a(a, d)) : b.call(null, c, D.a(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = ab(a), l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, D.a(a, l)) : b.call(null, c, D.a(a, l)), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = ab(a);
    if(0 === c) {
      return b.j ? b.j() : b.call(null)
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
  d.n = a;
  return d
}(), Sb = function() {
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
      return b.j ? b.j() : b.call(null)
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
  d.n = a;
  return d
}();
function Tb(a) {
  if(a) {
    var b = a.f & 2;
    a = (b ? b : a.Le) ? !0 : a.f ? !1 : z($a, a)
  }else {
    a = z($a, a)
  }
  return a
}
function Ub(a) {
  if(a) {
    var b = a.f & 16;
    a = (b ? b : a.Fd) ? !0 : a.f ? !1 : z(eb, a)
  }else {
    a = z(eb, a)
  }
  return a
}
function Pb(a, b) {
  this.c = a;
  this.l = b;
  this.q = 0;
  this.f = 166199550
}
q = Pb.prototype;
q.N = function(a) {
  return Vb.b ? Vb.b(a) : Vb.call(null, a)
};
q.ma = function() {
  return this.l + 1 < this.c.length ? new Pb(this.c, this.l + 1) : null
};
q.S = function(a, b) {
  return Q.a ? Q.a(b, a) : Q.call(null, b, a)
};
q.toString = function() {
  return Nb(this)
};
q.X = function(a, b) {
  return Sb.n(this.c, b, this.c[this.l], this.l + 1)
};
q.Y = function(a, b, c) {
  return Sb.n(this.c, b, c, this.l)
};
q.A = ba();
q.M = function() {
  return this.c.length - this.l
};
q.Z = function() {
  return this.c[this.l]
};
q.aa = function() {
  return this.l + 1 < this.c.length ? new Pb(this.c, this.l + 1) : Wb.j ? Wb.j() : Wb.call(null)
};
q.H = function(a, b) {
  return Yb.a ? Yb.a(a, b) : Yb.call(null, a, b)
};
q.O = function(a, b) {
  var c = b + this.l;
  return c < this.c.length ? this.c[c] : null
};
q.U = function(a, b, c) {
  a = b + this.l;
  return a < this.c.length ? this.c[a] : c
};
q.T = function() {
  return N
};
var Zb = function() {
  function a(a, b) {
    return b < a.length ? new Pb(a, b) : null
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
  c.b = b;
  c.a = a;
  return c
}(), P = function() {
  function a(a, b) {
    return Zb.a(a, b)
  }
  function b(a) {
    return Zb.a(a, 0)
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
  c.b = b;
  c.a = a;
  return c
}();
wb._ = function(a, b) {
  return a === b
};
var $b = function() {
  function a(a, b) {
    return null != a ? db(a, b) : Wb.b ? Wb.b(b) : Wb.call(null, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = P(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(y(e)) {
          a = b.a(a, d), d = L(e), e = O(e)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.o = 2;
    a.h = function(a) {
      var b = L(a);
      a = O(a);
      var d = L(a);
      a = M(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, P(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b
}();
function R(a) {
  if(null != a) {
    var b;
    b = a ? ((b = a.f & 2) ? b : a.Le) ? !0 : !1 : !1;
    if(b) {
      a = a.M(a)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(z($a, a)) {
            a = ab(a)
          }else {
            if(x.p) {
              a: {
                a = K(a);
                for(b = 0;;) {
                  if(Tb(a)) {
                    a = b + ab(a);
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
var ac = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return K(a) ? L(a) : c
      }
      if(Ub(a)) {
        return D.d(a, b, c)
      }
      if(K(a)) {
        a = O(a), b -= 1
      }else {
        return x.p ? c : null
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
      if(Ub(a)) {
        return D.a(a, b)
      }
      if(K(a)) {
        var c = O(a), h = b - 1;
        a = c;
        b = h
      }else {
        if(x.p) {
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
}(), bc = function() {
  function a(a, b, c) {
    if(null != a) {
      if(function() {
        var b;
        b = a ? ((b = a.f & 16) ? b : a.Fd) ? !0 : !1 : !1;
        return b
      }()) {
        return a.U(a, Math.floor(b), c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(z(eb, a)) {
        return D.a(a, b)
      }
      if(x.p) {
        if(function() {
          var b;
          b = a ? ((b = a.f & 64) ? b : a.Bb) ? !0 : a.f ? !1 : z(fb, a) : z(fb, a);
          return b
        }()) {
          return ac.d(a, Math.floor(b), c)
        }
        throw Error([B("nth not supported on this type "), B(Wa(Va(a)))].join(""));
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
      b = a ? ((b = a.f & 16) ? b : a.Fd) ? !0 : !1 : !1;
      return b
    }()) {
      return a.O(a, Math.floor(b))
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(z(eb, a)) {
      return D.a(a, b)
    }
    if(x.p) {
      if(function() {
        var b;
        b = a ? ((b = a.f & 64) ? b : a.Bb) ? !0 : a.f ? !1 : z(fb, a) : z(fb, a);
        return b
      }()) {
        return ac.a(a, Math.floor(b))
      }
      throw Error([B("nth not supported on this type "), B(Wa(Va(a)))].join(""));
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
}(), cc = function() {
  function a(a, b, c) {
    if(null != a) {
      var h;
      h = a ? ((h = a.f & 256) ? h : a.Tc) ? !0 : !1 : !1;
      a = h ? a.W(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : z(gb, a) ? hb.d(a, b, c) : x.p ? c : null
    }else {
      a = c
    }
    return a
  }
  function b(a, b) {
    var c;
    null == a ? c = null : (c = a ? ((c = a.f & 256) ? c : a.Tc) ? !0 : !1 : !1, c = c ? a.ea(a, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : z(gb, a) ? hb.a(a, b) : null);
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
}(), ec = function() {
  function a(a, b, c) {
    return null != a ? ib(a, b, c) : dc.a ? dc.a(b, c) : dc.call(null, b, c)
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = P(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m)
    }
    function c(a, d, e, l) {
      for(;;) {
        if(a = b.d(a, d, e), y(l)) {
          d = L(l), e = L(O(l)), l = O(O(l))
        }else {
          return a
        }
      }
    }
    a.o = 3;
    a.h = function(a) {
      var b = L(a);
      a = O(a);
      var d = L(a);
      a = O(a);
      var l = L(a);
      a = M(a);
      return c(b, d, l, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, P(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 3;
  b.h = c.h;
  b.d = a;
  b.e = c.e;
  return b
}();
function fc(a) {
  var b = ga(a);
  return b ? b : a ? y(y(null) ? null : a.Ke) ? !0 : a.Wc ? !1 : z(Ya, a) : z(Ya, a)
}
var hc = function gc(b, c) {
  return function() {
    var c = fc(b);
    c && (c = b ? ((c = b.f & 262144) ? c : b.Zf) ? !0 : b.f ? !1 : z(sb, b) : z(sb, b), c = !c);
    return c
  }() ? gc(function() {
    "undefined" === typeof Ra && (Ra = {}, Ra = function(b, c, f, h) {
      this.i = b;
      this.ed = c;
      this.Gf = f;
      this.pf = h;
      this.q = 0;
      this.f = 393217
    }, Ra.cc = !0, Ra.bc = "cljs.core/t11999", Ra.Vc = function(b, c) {
      return H(c, "cljs.core/t11999")
    }, Ra.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k)
      }
      function c(b, d) {
        return T.a ? T.a(b.ed, d) : T.call(null, b.ed, d)
      }
      b.o = 1;
      b.h = function(b) {
        var d = L(b);
        b = M(b);
        return c(d, b)
      };
      b.e = c;
      return b
    }(), Ra.prototype.apply = function(b, c) {
      b = this;
      return b.call.apply(b, [b].concat(c.slice()))
    }, Ra.prototype.Ke = !0, Ra.prototype.P = g("pf"), Ra.prototype.Q = function(b, c) {
      return new Ra(this.i, this.ed, this.Gf, c)
    });
    return new Ra(c, b, gc, null)
  }(), c) : tb(b, c)
};
function ic(a) {
  var b;
  b = a ? ((b = a.f & 131072) ? b : a.Qe) ? !0 : a.f ? !1 : z(qb, a) : z(qb, a);
  return b ? rb(a) : null
}
var jc = {}, kc = 0, J = function() {
  function a(a, b) {
    var c = u(a);
    (c ? b : c) ? (255 < kc && (jc = {}, kc = 0), c = jc[a], "number" !== typeof c && (c = Aa(a), jc[a] = c, kc += 1)) : c = xb(a);
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
  c.b = b;
  c.a = a;
  return c
}();
function lc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.f & 8;
      a = (b ? b : a.Qf) ? !0 : a.f ? !1 : z(cb, a)
    }else {
      a = z(cb, a)
    }
  }
  return a
}
function mc(a) {
  if(a) {
    var b = a.f & 16777216;
    a = (b ? b : a.Xf) ? !0 : a.f ? !1 : z(Ab, a)
  }else {
    a = z(Ab, a)
  }
  return a
}
function nc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.f & 1024;
      a = (b ? b : a.Tf) ? !0 : a.f ? !1 : z(jb, a)
    }else {
      a = z(jb, a)
    }
  }
  return a
}
function oc(a) {
  if(a) {
    var b = a.f & 16384;
    a = (b ? b : a.Yf) ? !0 : a.f ? !1 : z(nb, a)
  }else {
    a = z(nb, a)
  }
  return a
}
function pc(a) {
  if(a) {
    var b = a.q & 512;
    a = (b ? b : a.Pf) ? !0 : !1
  }else {
    a = !1
  }
  return a
}
function qc(a) {
  var b = [];
  La(a, function(a, d) {
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
      var b = a.f & 64;
      a = (b ? b : a.Bb) ? !0 : a.f ? !1 : z(fb, a)
    }else {
      a = z(fb, a)
    }
  }
  return a
}
function tc(a) {
  return y(a) ? !0 : !1
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
  if(Va(a) === Va(b)) {
    var c;
    c = a ? ((c = a.q & 2048) ? c : a.Dd) ? !0 : !1 : !1;
    return c ? a.Ed(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  if(x.p) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var vc = function() {
  function a(a, b, c, h) {
    for(;;) {
      var k = uc(bc.a(a, h), bc.a(b, h)), l = 0 === k;
      if(l ? h + 1 < c : l) {
        h += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var f = R(a), h = R(b);
    return f < h ? -1 : f > h ? 1 : x.p ? c.n(a, b, f, 0) : null
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
  c.n = a;
  return c
}(), wc = function() {
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
    return c ? U.d ? U.d(a, L(c), O(c)) : U.call(null, a, L(c), O(c)) : a.j ? a.j() : a.call(null)
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
}(), U = function() {
  function a(a, b, c) {
    var h;
    h = c ? ((h = c.f & 524288) ? h : c.Re) ? !0 : !1 : !1;
    return h ? c.Y(c, a, b) : c instanceof Array ? Sb.d(c, a, b) : "string" === typeof c ? Sb.d(c, a, b) : z(ub, c) ? vb.d(c, a, b) : x.p ? wc.d(a, b, c) : null
  }
  function b(a, b) {
    var c;
    c = b ? ((c = b.f & 524288) ? c : b.Re) ? !0 : !1 : !1;
    return c ? b.X(b, a) : b instanceof Array ? Sb.a(b, a) : "string" === typeof b ? Sb.a(b, a) : z(ub, b) ? vb.a(b, a) : x.p ? wc.a(a, b) : null
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
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k)
    }
    function d(b, c, d) {
      return U.d(a, b + c, d)
    }
    b.o = 2;
    b.h = function(a) {
      var b = L(a);
      a = O(a);
      var c = L(a);
      a = M(a);
      return d(b, c, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.e(a, d, P(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.o = 2;
  a.h = b.h;
  a.j = p(0);
  a.b = ba();
  a.a = function(a, b) {
    return a + b
  };
  a.e = b.e;
  return a
}();
function yc(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a)
}
function zc(a) {
  return yc((a - a % 2) / 2)
}
var Bc = function() {
  function a(a) {
    return a * c.j()
  }
  function b() {
    return Math.random.j ? Math.random.j() : Math.random.call(null)
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
  c.j = b;
  c.b = a;
  return c
}();
function Cc(a) {
  return yc(Bc.b(a))
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
          if(y(c)) {
            var d = a.append(b.b(L(c))), e = O(c);
            a = d;
            c = e
          }else {
            return a.toString()
          }
        }
      }.call(null, new Qa(b.b(a)), d)
    }
    a.o = 1;
    a.h = function(a) {
      var b = L(a);
      a = M(a);
      return c(b, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, P(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 1;
  b.h = c.h;
  b.j = p("");
  b.b = a;
  b.e = c.e;
  return b
}();
function Yb(a, b) {
  return tc(mc(b) ? function() {
    for(var c = K(a), d = K(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(Qb.a(L(c), L(d))) {
        c = O(c), d = O(d)
      }else {
        return x.p ? !1 : null
      }
    }
  }() : null)
}
function Ob(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Vb(a) {
  return U.d(function(a, c) {
    return Ob(a, J.a(c, !1))
  }, J.a(L(a), !1), O(a))
}
function Ec(a) {
  var b = 0;
  for(a = K(a);;) {
    if(a) {
      var c = L(a), b = (b + (J.b(Fc.b ? Fc.b(c) : Fc.call(null, c)) ^ J.b(Gc.b ? Gc.b(c) : Gc.call(null, c)))) % 4503599627370496;
      a = O(a)
    }else {
      return b
    }
  }
}
function Hc(a, b, c, d, e) {
  this.i = a;
  this.Gb = b;
  this.Ha = c;
  this.count = d;
  this.m = e;
  this.q = 0;
  this.f = 65937646
}
q = Hc.prototype;
q.N = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Vb(a)
};
q.ma = function() {
  return 1 === this.count ? null : this.Ha
};
q.S = function(a, b) {
  return new Hc(this.i, b, a, this.count + 1, null)
};
q.toString = function() {
  return Nb(this)
};
q.X = function(a, b) {
  return wc.a(b, a)
};
q.Y = function(a, b, c) {
  return wc.d(b, c, a)
};
q.A = ba();
q.M = g("count");
q.Z = g("Gb");
q.aa = function() {
  return 1 === this.count ? N : this.Ha
};
q.H = function(a, b) {
  return Yb(a, b)
};
q.Q = function(a, b) {
  return new Hc(b, this.Gb, this.Ha, this.count, this.m)
};
q.P = g("i");
q.T = function() {
  return N
};
function Ic(a) {
  this.i = a;
  this.q = 0;
  this.f = 65937614
}
q = Ic.prototype;
q.N = p(0);
q.ma = p(null);
q.S = function(a, b) {
  return new Hc(this.i, b, null, 1, null)
};
q.toString = function() {
  return Nb(this)
};
q.X = function(a, b) {
  return wc.a(b, a)
};
q.Y = function(a, b, c) {
  return wc.d(b, c, a)
};
q.A = p(null);
q.M = p(0);
q.Z = p(null);
q.aa = function() {
  return N
};
q.H = function(a, b) {
  return Yb(a, b)
};
q.Q = function(a, b) {
  return new Ic(b)
};
q.P = g("i");
q.T = ba();
var N = new Ic(null), Wb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(a instanceof Pb) {
      b = a.c
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
        var f = a - 1, e = e.S(e, b[a - 1]);
        a = f
      }else {
        return e
      }
    }
  }
  a.o = 0;
  a.h = function(a) {
    a = K(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function Jc(a, b, c, d) {
  this.i = a;
  this.Gb = b;
  this.Ha = c;
  this.m = d;
  this.q = 0;
  this.f = 65929452
}
q = Jc.prototype;
q.N = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Vb(a)
};
q.ma = function() {
  return null == this.Ha ? null : zb(this.Ha)
};
q.S = function(a, b) {
  return new Jc(null, b, a, this.m)
};
q.toString = function() {
  return Nb(this)
};
q.X = function(a, b) {
  return wc.a(b, a)
};
q.Y = function(a, b, c) {
  return wc.d(b, c, a)
};
q.A = ba();
q.Z = g("Gb");
q.aa = function() {
  return null == this.Ha ? N : this.Ha
};
q.H = function(a, b) {
  return Yb(a, b)
};
q.Q = function(a, b) {
  return new Jc(b, this.Gb, this.Ha, this.m)
};
q.P = g("i");
q.T = function() {
  return hc(N, this.i)
};
function Q(a, b) {
  var c = null == b;
  c || (c = b ? ((c = b.f & 64) ? c : b.Bb) ? !0 : !1 : !1);
  return c ? new Jc(null, a, b, null) : new Jc(null, a, K(b), null)
}
xb.string = function(a) {
  return Aa(a)
};
function V(a, b, c, d) {
  this.ab = a;
  this.name = b;
  this.Pa = c;
  this.Xa = d;
  this.f = 2153775105;
  this.q = 4096
}
q = V.prototype;
q.F = function(a, b) {
  return H(b, [B(":"), B(this.Pa)].join(""))
};
q.N = function() {
  null == this.Xa && (this.Xa = Ob(J.b(this.ab), J.b(this.name)) + 2654435769);
  return this.Xa
};
q.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        null == c ? e = null : (e = c ? ((e = c.f & 256) ? e : c.Tc) ? !0 : c.f ? !1 : z(gb, c) : z(gb, c), e = e ? hb.d(c, this, null) : null);
        return e;
      case 3:
        return null == c ? e = d : (e = c ? ((e = c.f & 256) ? e : c.Tc) ? !0 : c.f ? !1 : z(gb, c) : z(gb, c), e = e ? hb.d(c, this, d) : d), e
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.H = function(a, b) {
  return b instanceof V ? this.Pa === b.Pa : !1
};
q.toString = function() {
  return[B(":"), B(this.Pa)].join("")
};
function Kc(a, b) {
  var c;
  c = a === b ? !0 : ((c = a instanceof V) ? b instanceof V : c) ? a.Pa === b.Pa : !1;
  return c
}
var Mc = function() {
  function a(a, b) {
    return new V(a, b, [B(y(a) ? [B(a), B("/")].join("") : null), B(b)].join(""), null)
  }
  function b(a) {
    return a instanceof V ? a : a instanceof I ? new V(null, Lc.b ? Lc.b(a) : Lc.call(null, a), Lc.b ? Lc.b(a) : Lc.call(null, a), null) : x.p ? new V(null, a, a, null) : null
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
  c.b = b;
  c.a = a;
  return c
}();
function Nc(a, b, c, d) {
  this.i = a;
  this.pb = b;
  this.u = c;
  this.m = d;
  this.q = 0;
  this.f = 32374988
}
q = Nc.prototype;
q.N = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Vb(a)
};
q.ma = function(a) {
  a.A(a);
  return null == this.u ? null : this.u.ma(this.u)
};
q.S = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return Nb(this)
};
function Oc(a) {
  null != a.pb && (a.u = a.pb.j ? a.pb.j() : a.pb.call(null), a.pb = null);
  return a.u
}
q.X = function(a, b) {
  return wc.a(b, a)
};
q.Y = function(a, b, c) {
  return wc.d(b, c, a)
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
q.H = function(a, b) {
  return Yb(a, b)
};
q.Q = function(a, b) {
  return new Nc(b, this.pb, this.u, this.m)
};
q.P = g("i");
q.T = function() {
  return hc(N, this.i)
};
function Pc(a, b) {
  this.R = a;
  this.end = b;
  this.q = 0;
  this.f = 2
}
Pc.prototype.M = g("end");
Pc.prototype.add = function(a) {
  this.R[this.end] = a;
  return this.end += 1
};
Pc.prototype.la = function() {
  var a = new Qc(this.R, 0, this.end);
  this.R = null;
  return a
};
function Qc(a, b, c) {
  this.c = a;
  this.D = b;
  this.end = c;
  this.q = 0;
  this.f = 524306
}
q = Qc.prototype;
q.X = function(a, b) {
  return Sb.n(this.c, b, this.c[this.D], this.D + 1)
};
q.Y = function(a, b, c) {
  return Sb.n(this.c, b, c, this.D)
};
q.Bd = function() {
  if(this.D === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Qc(this.c, this.D + 1, this.end)
};
q.O = function(a, b) {
  return this.c[this.D + b]
};
q.U = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.D : a) ? this.c[this.D + b] : c
};
q.M = function() {
  return this.end - this.D
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
  d.b = c;
  d.a = b;
  d.d = a;
  return d
}();
function Sc(a, b, c, d) {
  this.la = a;
  this.wa = b;
  this.i = c;
  this.m = d;
  this.f = 31850732;
  this.q = 1536
}
q = Sc.prototype;
q.N = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Vb(a)
};
q.ma = function() {
  if(1 < ab(this.la)) {
    return new Sc(Jb(this.la), this.wa, this.i, null)
  }
  var a = zb(this.wa);
  return null == a ? null : a
};
q.S = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return Nb(this)
};
q.A = ba();
q.Z = function() {
  return D.a(this.la, 0)
};
q.aa = function() {
  return 1 < ab(this.la) ? new Sc(Jb(this.la), this.wa, this.i, null) : null == this.wa ? N : this.wa
};
q.Cd = function() {
  return null == this.wa ? null : this.wa
};
q.H = function(a, b) {
  return Yb(a, b)
};
q.Q = function(a, b) {
  return new Sc(this.la, this.wa, b, this.m)
};
q.P = g("i");
q.T = function() {
  return hc(N, this.i)
};
q.Ec = g("la");
q.Yb = function() {
  return null == this.wa ? N : this.wa
};
function Tc(a, b) {
  return 0 === ab(a) ? b : new Sc(a, b, null, null)
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
  if(Tb(a)) {
    return R(a)
  }
  for(var c = a, d = b, e = 0;;) {
    var f;
    f = (f = 0 < d) ? K(c) : f;
    if(y(f)) {
      c = O(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var Xc = function Wc(b) {
  return null == b ? null : null == O(b) ? K(L(b)) : x.p ? Q(L(b), Wc(O(b))) : null
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
    a.o = 4;
    a.h = function(a) {
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
    a.e = b;
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
        return d.e(c, f, h, k, P(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.o = 4;
  c.h = d.h;
  c.b = function(a) {
    return K(a)
  };
  c.a = function(a, b) {
    return Q(a, b)
  };
  c.d = b;
  c.n = a;
  c.e = d.e;
  return c
}();
function Zc(a, b, c) {
  var d = K(c);
  if(0 === b) {
    return a.j ? a.j() : a.call(null)
  }
  c = E(d);
  var e = F(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c)
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
    return a.n ? a.n(c, d, e, f) : a.n ? a.n(c, d, e, f) : a.call(null, c, d, e, f)
  }
  h = E(k);
  k = F(k);
  if(5 === b) {
    return a.C ? a.C(c, d, e, f, h) : a.C ? a.C(c, d, e, f, h) : a.call(null, c, d, e, f, h)
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
  var n = E(r), v = F(r);
  if(10 === b) {
    return a.Gc ? a.Gc(c, d, e, f, h, a, k, l, m, n) : a.Gc ? a.Gc(c, d, e, f, h, a, k, l, m, n) : a.call(null, c, d, e, f, h, a, k, l, m, n)
  }
  var r = E(v), G = F(v);
  if(11 === b) {
    return a.Hc ? a.Hc(c, d, e, f, h, a, k, l, m, n, r) : a.Hc ? a.Hc(c, d, e, f, h, a, k, l, m, n, r) : a.call(null, c, d, e, f, h, a, k, l, m, n, r)
  }
  var v = E(G), C = F(G);
  if(12 === b) {
    return a.Ic ? a.Ic(c, d, e, f, h, a, k, l, m, n, r, v) : a.Ic ? a.Ic(c, d, e, f, h, a, k, l, m, n, r, v) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, v)
  }
  var G = E(C), S = F(C);
  if(13 === b) {
    return a.Jc ? a.Jc(c, d, e, f, h, a, k, l, m, n, r, v, G) : a.Jc ? a.Jc(c, d, e, f, h, a, k, l, m, n, r, v, G) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, v, G)
  }
  var C = E(S), aa = F(S);
  if(14 === b) {
    return a.Kc ? a.Kc(c, d, e, f, h, a, k, l, m, n, r, v, G, C) : a.Kc ? a.Kc(c, d, e, f, h, a, k, l, m, n, r, v, G, C) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, v, G, C)
  }
  var S = E(aa), la = F(aa);
  if(15 === b) {
    return a.Lc ? a.Lc(c, d, e, f, h, a, k, l, m, n, r, v, G, C, S) : a.Lc ? a.Lc(c, d, e, f, h, a, k, l, m, n, r, v, G, C, S) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, v, G, C, S)
  }
  var aa = E(la), wa = F(la);
  if(16 === b) {
    return a.Mc ? a.Mc(c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa) : a.Mc ? a.Mc(c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa)
  }
  var la = E(wa), Za = F(wa);
  if(17 === b) {
    return a.Nc ? a.Nc(c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa, la) : a.Nc ? a.Nc(c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa, la) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa, la)
  }
  var wa = E(Za), Ac = F(Za);
  if(18 === b) {
    return a.Oc ? a.Oc(c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa, la, wa) : a.Oc ? a.Oc(c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa, la, wa) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa, la, wa)
  }
  Za = E(Ac);
  Ac = F(Ac);
  if(19 === b) {
    return a.Pc ? a.Pc(c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa, la, wa, Za) : a.Pc ? a.Pc(c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa, la, wa, Za) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa, la, wa, Za)
  }
  var Xb = E(Ac);
  F(Ac);
  if(20 === b) {
    return a.Qc ? a.Qc(c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa, la, wa, Za, Xb) : a.Qc ? a.Qc(c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa, la, wa, Za, Xb) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, v, G, C, S, aa, la, wa, Za, Xb)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var T = function() {
  function a(a, b, c, d, e) {
    b = Yc.n(b, c, d, e);
    c = a.o;
    return a.h ? (d = Vc(b, c + 1), d <= c ? Zc(a, d, b) : a.h(b)) : a.apply(a, Uc(b))
  }
  function b(a, b, c, d) {
    b = Yc.d(b, c, d);
    c = a.o;
    return a.h ? (d = Vc(b, c + 1), d <= c ? Zc(a, d, b) : a.h(b)) : a.apply(a, Uc(b))
  }
  function c(a, b, c) {
    b = Yc.a(b, c);
    c = a.o;
    if(a.h) {
      var d = Vc(b, c + 1);
      return d <= c ? Zc(a, d, b) : a.h(b)
    }
    return a.apply(a, Uc(b))
  }
  function d(a, b) {
    var c = a.o;
    if(a.h) {
      var d = Vc(b, c + 1);
      return d <= c ? Zc(a, d, b) : a.h(b)
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
      d = a.o;
      return a.h ? (e = Vc(c, d + 1), e <= d ? Zc(a, e, c) : a.h(c)) : a.apply(a, Uc(c))
    }
    a.o = 5;
    a.h = function(a) {
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
    a.e = b;
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
        return f.e(e, k, l, m, n, P(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.o = 5;
  e.h = f.h;
  e.a = d;
  e.d = c;
  e.n = b;
  e.C = a;
  e.e = f.e;
  return e
}();
function $c(a, b) {
  for(;;) {
    if(null == K(b)) {
      return!0
    }
    if(y(a.b ? a.b(L(b)) : a.call(null, L(b)))) {
      var c = a, d = O(b);
      a = c;
      b = d
    }else {
      return x.p ? !1 : null
    }
  }
}
function ad(a) {
  for(var b = bd;;) {
    if(K(a)) {
      var c = b.b ? b.b(L(a)) : b.call(null, L(a));
      if(y(c)) {
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
    b.o = 0;
    b.h = function(b) {
      K(b);
      return a
    };
    b.e = function() {
      return a
    };
    return b
  }()
}
var dd = function() {
  function a(a, b, c, e) {
    return new Nc(null, function() {
      var m = K(b), n = K(c), r = K(e);
      return(m ? n ? r : n : m) ? Q(a.d ? a.d(L(m), L(n), L(r)) : a.call(null, L(m), L(n), L(r)), d.n(a, M(m), M(n), M(r))) : null
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
          for(var e = Kb(c), m = R(e), n = new Pc(Array(m), 0), r = 0;;) {
            if(r < m) {
              var v = a.b ? a.b(D.a(e, r)) : a.call(null, D.a(e, r));
              n.add(v);
              r += 1
            }else {
              break
            }
          }
          return Tc(n.la(), d.a(a, Lb(c)))
        }
        return Q(a.b ? a.b(L(c)) : a.call(null, L(c)), d.a(a, M(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var v = null;
      4 < arguments.length && (v = P(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, v)
    }
    function b(a, c, e, f, h) {
      return d.a(function(b) {
        return T.a(a, b)
      }, function G(a) {
        return new Nc(null, function() {
          var b = d.a(K, a);
          return $c(bd, b) ? Q(d.a(L, b), G(d.a(M, b))) : null
        }, null, null)
      }($b.e(h, f, P([e, c], 0))))
    }
    a.o = 4;
    a.h = function(a) {
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
    a.e = b;
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
        return e.e(d, h, k, l, P(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.o = 4;
  d.h = e.h;
  d.a = c;
  d.d = b;
  d.n = a;
  d.e = e.e;
  return d
}();
function ed(a, b) {
  var c;
  null != a ? (c = a ? ((c = a.q & 4) ? c : a.Rf) ? !0 : !1 : !1, c ? (c = U.d(Gb, Fb(a), b), c = Hb(c)) : c = U.d(db, a, b)) : c = U.d($b, N, b);
  return c
}
function fd(a, b) {
  this.s = a;
  this.c = b
}
function gd(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function hd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new fd(a, Array(32));
    d.c[0] = c;
    c = d;
    b -= 5
  }
}
var jd = function id(b, c, d, e) {
  var f = new fd(d.s, d.c.slice()), h = b.g - 1 >>> c & 31;
  5 === c ? f.c[h] = e : (d = d.c[h], b = null != d ? id(b, c - 5, d, e) : hd(null, c - 5, e), f.c[h] = b);
  return f
};
function kd(a, b) {
  throw Error([B("No item "), B(a), B(" in vector of length "), B(b)].join(""));
}
function ld(a, b) {
  var c = 0 <= b;
  if(c ? b < a.g : c) {
    if(b >= gd(a)) {
      return a.t
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.c[b >>> d & 31], d = e
      }else {
        return c.c
      }
    }
  }else {
    return kd(b, a.g)
  }
}
var nd = function md(b, c, d, e, f) {
  var h = new fd(d.s, d.c.slice());
  if(0 === c) {
    h.c[e & 31] = f
  }else {
    var k = e >>> c & 31;
    b = md(b, c - 5, d.c[k], e, f);
    h.c[k] = b
  }
  return h
};
function od(a, b, c, d, e, f) {
  this.i = a;
  this.g = b;
  this.shift = c;
  this.root = d;
  this.t = e;
  this.m = f;
  this.q = 4;
  this.f = 167668511
}
q = od.prototype;
q.Zb = function() {
  return new pd(this.g, this.shift, qd.b ? qd.b(this.root) : qd.call(null, this.root), rd.b ? rd.b(this.t) : rd.call(null, this.t))
};
q.N = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Vb(a)
};
q.ea = function(a, b) {
  return a.U(a, b, null)
};
q.W = function(a, b, c) {
  return a.U(a, b, c)
};
q.za = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.g : d) {
    return gd(a) <= b ? (a = this.t.slice(), a[b & 31] = c, new od(this.i, this.g, this.shift, this.root, a, null)) : new od(this.i, this.g, this.shift, nd(a, this.shift, this.root, b, c), this.t, null)
  }
  if(b === this.g) {
    return a.S(a, c)
  }
  if(x.p) {
    throw Error([B("Index "), B(b), B(" out of bounds  [0,"), B(this.g), B("]")].join(""));
  }
  return null
};
q.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(this, c);
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
q.S = function(a, b) {
  if(32 > this.g - gd(a)) {
    var c = this.t.slice();
    c.push(b);
    return new od(this.i, this.g + 1, this.shift, this.root, c, null)
  }
  var d = this.g >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new fd(null, Array(32));
    d.c[0] = this.root;
    var e = hd(null, this.shift, new fd(null, this.t));
    d.c[1] = e
  }else {
    d = jd(a, this.shift, this.root, new fd(null, this.t))
  }
  return new od(this.i, this.g + 1, c, d, [b], null)
};
q.Gd = function(a) {
  return a.O(a, 0)
};
q.Hd = function(a) {
  return a.O(a, 1)
};
q.toString = function() {
  return Nb(this)
};
q.X = function(a, b) {
  return Rb.a(a, b)
};
q.Y = function(a, b, c) {
  return Rb.d(a, b, c)
};
q.A = function(a) {
  return 0 === this.g ? null : 32 > this.g ? P.b(this.t) : x.p ? sd.d ? sd.d(a, 0, 0) : sd.call(null, a, 0, 0) : null
};
q.M = g("g");
q.Uc = function(a, b, c) {
  return a.za(a, b, c)
};
q.H = function(a, b) {
  return Yb(a, b)
};
q.Q = function(a, b) {
  return new od(b, this.g, this.shift, this.root, this.t, this.m)
};
q.P = g("i");
q.O = function(a, b) {
  return ld(a, b)[b & 31]
};
q.U = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.O(a, b) : c
};
q.T = function() {
  return hc(td, this.i)
};
var ud = new fd(null, Array(32)), td = new od(null, 0, 5, ud, [], 0);
function vd(a) {
  var b = a.length;
  if(32 > b) {
    return new od(null, b, 5, ud, a, null)
  }
  for(var c = a.slice(0, 32), d = 32, e = Fb(new od(null, 32, 5, ud, c, null));;) {
    if(d < b) {
      c = d + 1, e = Gb(e, a[d]), d = c
    }else {
      return Hb(e)
    }
  }
}
function wd(a) {
  return Hb(U.d(Gb, Fb(td), a))
}
var xd = function() {
  function a(a) {
    var c = null;
    0 < arguments.length && (c = P(Array.prototype.slice.call(arguments, 0), 0));
    return wd(c)
  }
  a.o = 0;
  a.h = function(a) {
    a = K(a);
    return wd(a)
  };
  a.e = function(a) {
    return wd(a)
  };
  return a
}();
function yd(a, b, c, d, e, f) {
  this.L = a;
  this.ja = b;
  this.l = c;
  this.D = d;
  this.i = e;
  this.m = f;
  this.f = 32243948;
  this.q = 1536
}
q = yd.prototype;
q.N = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Vb(a)
};
q.ma = function(a) {
  return this.D + 1 < this.ja.length ? (a = sd.n ? sd.n(this.L, this.ja, this.l, this.D + 1) : sd.call(null, this.L, this.ja, this.l, this.D + 1), null == a ? null : a) : a.Cd(a)
};
q.S = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return Nb(this)
};
q.X = function(a, b) {
  return Rb.a(zd.d ? zd.d(this.L, this.l + this.D, R(this.L)) : zd.call(null, this.L, this.l + this.D, R(this.L)), b)
};
q.Y = function(a, b, c) {
  return Rb.d(zd.d ? zd.d(this.L, this.l + this.D, R(this.L)) : zd.call(null, this.L, this.l + this.D, R(this.L)), b, c)
};
q.A = ba();
q.Z = function() {
  return this.ja[this.D]
};
q.aa = function(a) {
  return this.D + 1 < this.ja.length ? (a = sd.n ? sd.n(this.L, this.ja, this.l, this.D + 1) : sd.call(null, this.L, this.ja, this.l, this.D + 1), null == a ? N : a) : a.Yb(a)
};
q.Cd = function() {
  var a = this.ja.length, a = this.l + a < ab(this.L) ? sd.d ? sd.d(this.L, this.l + a, 0) : sd.call(null, this.L, this.l + a, 0) : null;
  return null == a ? null : a
};
q.H = function(a, b) {
  return Yb(a, b)
};
q.Q = function(a, b) {
  return sd.C ? sd.C(this.L, this.ja, this.l, this.D, b) : sd.call(null, this.L, this.ja, this.l, this.D, b)
};
q.T = function() {
  return hc(td, this.i)
};
q.Ec = function() {
  return Rc.a(this.ja, this.D)
};
q.Yb = function() {
  var a = this.ja.length, a = this.l + a < ab(this.L) ? sd.d ? sd.d(this.L, this.l + a, 0) : sd.call(null, this.L, this.l + a, 0) : null;
  return null == a ? N : a
};
var sd = function() {
  function a(a, b, c, d, l) {
    return new yd(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new yd(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new yd(a, ld(a, b), b, c, null, null)
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
  d.n = b;
  d.C = a;
  return d
}();
function Ad(a, b, c, d, e) {
  this.i = a;
  this.ya = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.q = 0;
  this.f = 32400159
}
q = Ad.prototype;
q.N = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Vb(a)
};
q.ea = function(a, b) {
  return a.U(a, b, null)
};
q.W = function(a, b, c) {
  return a.U(a, b, c)
};
q.za = function(a, b, c) {
  var d = this, e = d.start + b;
  return Bd.C ? Bd.C(d.i, ec.d(d.ya, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : Bd.call(null, d.i, ec.d(d.ya, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
q.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.O(this, c);
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
q.S = function(a, b) {
  return Bd.C ? Bd.C(this.i, ob(this.ya, this.end, b), this.start, this.end + 1, null) : Bd.call(null, this.i, ob(this.ya, this.end, b), this.start, this.end + 1, null)
};
q.toString = function() {
  return Nb(this)
};
q.X = function(a, b) {
  return Rb.a(a, b)
};
q.Y = function(a, b, c) {
  return Rb.d(a, b, c)
};
q.A = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : Q(D.a(a.ya, d), new Nc(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
q.M = function() {
  return this.end - this.start
};
q.Uc = function(a, b, c) {
  return a.za(a, b, c)
};
q.H = function(a, b) {
  return Yb(a, b)
};
q.Q = function(a, b) {
  return Bd.C ? Bd.C(b, this.ya, this.start, this.end, this.m) : Bd.call(null, b, this.ya, this.start, this.end, this.m)
};
q.P = g("i");
q.O = function(a, b) {
  var c = 0 > b;
  return(c ? c : this.end <= this.start + b) ? kd(b, this.end - this.start) : D.a(this.ya, this.start + b)
};
q.U = function(a, b, c) {
  return((a = 0 > b) ? a : this.end <= this.start + b) ? c : D.d(this.ya, this.start + b, c)
};
q.T = function() {
  return hc(td, this.i)
};
function Bd(a, b, c, d, e) {
  for(;;) {
    if(b instanceof Ad) {
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
      return new Ad(a, b, c, d, e)
    }
  }
}
var zd = function() {
  function a(a, b, c) {
    return Bd(null, a, b, c, null)
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
  return new fd({}, a.c.slice())
}
function rd(a) {
  var b = Array(32);
  rc(a, 0, b, 0, a.length);
  return b
}
var Dd = function Cd(b, c, d, e) {
  d = b.root.s === d.s ? d : new fd(b.root.s, d.c.slice());
  var f = b.g - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var h = d.c[f];
    b = null != h ? Cd(b, c - 5, h, e) : hd(b.root.s, c - 5, e)
  }
  d.c[f] = b;
  return d
};
function pd(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.t = d;
  this.f = 275;
  this.q = 88
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
q.O = function(a, b) {
  if(this.root.s) {
    return ld(a, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
q.U = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.O(a, b) : c
};
q.M = function() {
  if(this.root.s) {
    return this.g
  }
  throw Error("count after persistent!");
};
function Ed(a, b, c, d) {
  if(a.root.s) {
    if(function() {
      var b = 0 <= c;
      return b ? c < a.g : b
    }()) {
      if(gd(b) <= c) {
        a.t[c & 31] = d
      }else {
        var e = function h(b, e) {
          var m = a.root.s === e.s ? e : new fd(a.root.s, e.c.slice());
          if(0 === b) {
            m.c[c & 31] = d
          }else {
            var n = c >>> b & 31, r = h(b - 5, m.c[n]);
            m.c[n] = r
          }
          return m
        }.call(null, a.shift, a.root);
        a.root = e
      }
      return b
    }
    if(c === a.g) {
      return b.Cb(b, d)
    }
    if(x.p) {
      throw Error([B("Index "), B(c), B(" out of bounds for TransientVector of length"), B(a.g)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
}
q.jb = function(a, b, c) {
  return Ed(a, a, b, c)
};
q.Cb = function(a, b) {
  if(this.root.s) {
    if(32 > this.g - gd(a)) {
      this.t[this.g & 31] = b
    }else {
      var c = new fd(this.root.s, this.t), d = Array(32);
      d[0] = b;
      this.t = d;
      if(this.g >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = hd(this.root.s, this.shift, c);
        this.root = new fd(this.root.s, d);
        this.shift = e
      }else {
        this.root = Dd(a, this.shift, this.root, c)
      }
    }
    this.g += 1;
    return a
  }
  throw Error("conj! after persistent!");
};
q.$b = function(a) {
  if(this.root.s) {
    this.root.s = null;
    a = this.g - gd(a);
    var b = Array(a);
    rc(this.t, 0, b, 0, a);
    return new od(null, this.g, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function Fd() {
  this.q = 0;
  this.f = 2097152
}
Fd.prototype.H = p(!1);
var Gd = new Fd;
function Hd(a, b) {
  return tc(nc(b) ? R(a) === R(b) ? $c(bd, dd.a(function(a) {
    return Qb.a(cc.d(b, L(a), Gd), L(O(a)))
  }, a)) : null : null)
}
function Id(a, b) {
  var c = a.c;
  if(b instanceof V) {
    a: {
      for(var d = c.length, e = b.Pa, f = 0;;) {
        if(d <= f) {
          c = -1;
          break a
        }
        var h = c[f], k = h instanceof V;
        if(k ? e === h.Pa : k) {
          c = f;
          break a
        }
        if(x.p) {
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
          if(x.p) {
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
            if(x.p) {
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
              if(x.p) {
                e += 2
              }else {
                c = null;
                break a
              }
            }
            c = void 0
          }
        }else {
          if(x.p) {
            a: {
              d = c.length;
              for(e = 0;;) {
                if(d <= e) {
                  c = -1;
                  break a
                }
                if(Qb.a(b, c[e])) {
                  c = e;
                  break a
                }
                if(x.p) {
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
function Jd(a, b, c) {
  this.c = a;
  this.l = b;
  this.fb = c;
  this.q = 0;
  this.f = 32374990
}
q = Jd.prototype;
q.N = function(a) {
  return Vb(a)
};
q.ma = function() {
  return this.l < this.c.length - 2 ? new Jd(this.c, this.l + 2, this.fb) : null
};
q.S = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return Nb(this)
};
q.X = function(a, b) {
  return wc.a(b, a)
};
q.Y = function(a, b, c) {
  return wc.d(b, c, a)
};
q.A = ba();
q.M = function() {
  return(this.c.length - this.l) / 2
};
q.Z = function() {
  return vd([this.c[this.l], this.c[this.l + 1]])
};
q.aa = function() {
  return this.l < this.c.length - 2 ? new Jd(this.c, this.l + 2, this.fb) : N
};
q.H = function(a, b) {
  return Yb(a, b)
};
q.Q = function(a, b) {
  return new Jd(this.c, this.l, b)
};
q.P = g("fb");
q.T = function() {
  return hc(N, this.fb)
};
function Kd(a, b, c, d) {
  this.i = a;
  this.g = b;
  this.c = c;
  this.m = d;
  this.q = 4;
  this.f = 16123663
}
q = Kd.prototype;
q.Zb = function() {
  return new Ld({}, this.c.length, this.c.slice())
};
q.N = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Ec(a)
};
q.ea = function(a, b) {
  return a.W(a, b, null)
};
q.W = function(a, b, c) {
  a = Id(a, b);
  return-1 === a ? c : this.c[a + 1]
};
q.za = function(a, b, c) {
  var d = Id(a, b);
  if(-1 === d) {
    if(this.g < Md) {
      d = a.c;
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
      return new Kd(this.i, this.g + 1, e, null)
    }
    return tb(ib(ed(Nd, a), b, c), this.i)
  }
  return c === this.c[d + 1] ? a : x.p ? (b = this.c.slice(), b[d + 1] = c, new Kd(this.i, this.g, b, null)) : null
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
q.S = function(a, b) {
  return oc(b) ? a.za(a, D.a(b, 0), D.a(b, 1)) : U.d(db, a, b)
};
q.toString = function() {
  return Nb(this)
};
q.A = function() {
  return 0 <= this.c.length - 2 ? new Jd(this.c, 0, null) : null
};
q.M = g("g");
q.H = function(a, b) {
  return Hd(a, b)
};
q.Q = function(a, b) {
  return new Kd(b, this.g, this.c, this.m)
};
q.P = g("i");
q.T = function() {
  return tb(Od, this.i)
};
var Od = new Kd(null, 0, [], null), Md = 8;
function Ta(a) {
  return new Kd(null, a.length / 2, a, null)
}
function Ld(a, b, c) {
  this.mb = a;
  this.$a = b;
  this.c = c;
  this.q = 56;
  this.f = 258
}
q = Ld.prototype;
q.jb = function(a, b, c) {
  if(y(this.mb)) {
    var d = Id(a, b);
    if(-1 === d) {
      if(this.$a + 2 <= 2 * Md) {
        return this.$a += 2, this.c.push(b), this.c.push(c), a
      }
      a = Pd.a ? Pd.a(this.$a, this.c) : Pd.call(null, this.$a, this.c);
      return Ib(a, b, c)
    }
    c !== this.c[d + 1] && (this.c[d + 1] = c);
    return a
  }
  throw Error("assoc! after persistent!");
};
q.Cb = function(a, b) {
  if(y(this.mb)) {
    var c;
    c = b ? ((c = b.f & 2048) ? c : b.Pe) ? !0 : b.f ? !1 : z(kb, b) : z(kb, b);
    if(c) {
      return a.jb(a, Fc.b ? Fc.b(b) : Fc.call(null, b), Gc.b ? Gc.b(b) : Gc.call(null, b))
    }
    c = K(b);
    for(var d = a;;) {
      var e = L(c);
      if(y(e)) {
        c = O(c), d = d.jb(d, Fc.b ? Fc.b(e) : Fc.call(null, e), Gc.b ? Gc.b(e) : Gc.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
q.$b = function() {
  if(y(this.mb)) {
    return this.mb = !1, new Kd(null, zc(this.$a), this.c, null)
  }
  throw Error("persistent! called twice");
};
q.ea = function(a, b) {
  return a.W(a, b, null)
};
q.W = function(a, b, c) {
  if(y(this.mb)) {
    return a = Id(a, b), -1 === a ? c : this.c[a + 1]
  }
  throw Error("lookup after persistent!");
};
q.M = function() {
  if(y(this.mb)) {
    return zc(this.$a)
  }
  throw Error("count after persistent!");
};
function Pd(a, b) {
  for(var c = Fb(Nd), d = 0;;) {
    if(d < a) {
      c = Ib(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Qd() {
  this.K = !1
}
function Rd(a, b) {
  return a === b ? !0 : Kc(a, b) ? !0 : x.p ? Qb.a(a, b) : null
}
var Sd = function() {
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
  c.C = a;
  return c
}(), Td = function() {
  function a(a, b, c, h, k, l) {
    a = a.nb(b);
    a.c[c] = h;
    a.c[k] = l;
    return a
  }
  function b(a, b, c, h) {
    a = a.nb(b);
    a.c[c] = h;
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
  c.n = b;
  c.sa = a;
  return c
}();
function Ud(a, b, c) {
  this.s = a;
  this.J = b;
  this.c = c
}
q = Ud.prototype;
q.oa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Dc(this.J & h - 1);
  if(0 === (this.J & h)) {
    var l = Dc(this.J);
    if(2 * l < this.c.length) {
      a = this.nb(a);
      b = a.c;
      f.K = !0;
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
      a.J |= h;
      return a
    }
    if(16 <= l) {
      k = Array(32);
      k[c >>> b & 31] = Vd.oa(a, b + 5, c, d, e, f);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.J >>> d & 1) && (k[d] = null != this.c[e] ? Vd.oa(a, b + 5, J.b(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new Wd(a, l + 1, k)
    }
    return x.p ? (b = Array(2 * (l + 4)), rc(this.c, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, rc(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.K = !0, a = this.nb(a), a.c = b, a.J |= h, a) : null
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  return null == l ? (l = h.oa(a, b + 5, c, d, e, f), l === h ? this : Td.n(this, a, 2 * k + 1, l)) : Rd(d, l) ? e === h ? this : Td.n(this, a, 2 * k + 1, e) : x.p ? (f.K = !0, Td.sa(this, a, 2 * k, null, 2 * k + 1, Xd.ib ? Xd.ib(a, b + 5, l, h, c, d, e) : Xd.call(null, a, b + 5, l, h, c, d, e))) : null
};
q.Kb = function() {
  return Yd.b ? Yd.b(this.c) : Yd.call(null, this.c)
};
q.nb = function(a) {
  if(a === this.s) {
    return this
  }
  var b = Dc(this.J), c = Array(0 > b ? 4 : 2 * (b + 1));
  rc(this.c, 0, c, 0, 2 * b);
  return new Ud(a, this.J, c)
};
q.na = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Dc(this.J & f - 1);
  if(0 === (this.J & f)) {
    var k = Dc(this.J);
    if(16 <= k) {
      h = Array(32);
      h[b >>> a & 31] = Vd.na(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.J >>> c & 1) && (h[c] = null != this.c[d] ? Vd.na(a + 5, J.b(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Wd(null, k + 1, h)
    }
    a = Array(2 * (k + 1));
    rc(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    rc(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.K = !0;
    return new Ud(null, this.J | f, a)
  }
  k = this.c[2 * h];
  f = this.c[2 * h + 1];
  return null == k ? (k = f.na(a + 5, b, c, d, e), k === f ? this : new Ud(null, this.J, Sd.d(this.c, 2 * h + 1, k))) : Rd(c, k) ? d === f ? this : new Ud(null, this.J, Sd.d(this.c, 2 * h + 1, d)) : x.p ? (e.K = !0, new Ud(null, this.J, Sd.C(this.c, 2 * h, null, 2 * h + 1, Xd.sa ? Xd.sa(a + 5, k, f, b, c, d) : Xd.call(null, a + 5, k, f, b, c, d)))) : null
};
q.Za = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.J & e)) {
    return d
  }
  var f = Dc(this.J & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.Za(a + 5, b, c, d) : Rd(c, e) ? f : x.p ? d : null
};
var Vd = new Ud(null, 0, []);
function Wd(a, b, c) {
  this.s = a;
  this.g = b;
  this.c = c
}
q = Wd.prototype;
q.oa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.c[h];
  if(null == k) {
    return a = Td.n(this, a, h, Vd.oa(a, b + 5, c, d, e, f)), a.g += 1, a
  }
  b = k.oa(a, b + 5, c, d, e, f);
  return b === k ? this : Td.n(this, a, h, b)
};
q.Kb = function() {
  return Zd.b ? Zd.b(this.c) : Zd.call(null, this.c)
};
q.nb = function(a) {
  return a === this.s ? this : new Wd(a, this.g, this.c.slice())
};
q.na = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.c[f];
  if(null == h) {
    return new Wd(null, this.g + 1, Sd.d(this.c, f, Vd.na(a + 5, b, c, d, e)))
  }
  a = h.na(a + 5, b, c, d, e);
  return a === h ? this : new Wd(null, this.g, Sd.d(this.c, f, a))
};
q.Za = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.Za(a + 5, b, c, d) : d
};
function $d(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(Rd(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function ae(a, b, c, d) {
  this.s = a;
  this.Ma = b;
  this.g = c;
  this.c = d
}
q = ae.prototype;
q.oa = function(a, b, c, d, e, f) {
  if(c === this.Ma) {
    b = $d(this.c, this.g, d);
    if(-1 === b) {
      if(this.c.length > 2 * this.g) {
        return a = Td.sa(this, a, 2 * this.g, d, 2 * this.g + 1, e), f.K = !0, a.g += 1, a
      }
      c = this.c.length;
      b = Array(c + 2);
      rc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.K = !0;
      f = this.g + 1;
      a === this.s ? (this.c = b, this.g = f, a = this) : a = new ae(this.s, this.Ma, f, b);
      return a
    }
    return this.c[b + 1] === e ? this : Td.n(this, a, b + 1, e)
  }
  return(new Ud(a, 1 << (this.Ma >>> b & 31), [null, this, null, null])).oa(a, b, c, d, e, f)
};
q.Kb = function() {
  return Yd.b ? Yd.b(this.c) : Yd.call(null, this.c)
};
q.nb = function(a) {
  if(a === this.s) {
    return this
  }
  var b = Array(2 * (this.g + 1));
  rc(this.c, 0, b, 0, 2 * this.g);
  return new ae(a, this.Ma, this.g, b)
};
q.na = function(a, b, c, d, e) {
  return b === this.Ma ? (a = $d(this.c, this.g, c), -1 === a ? (a = this.c.length, b = Array(a + 2), rc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.K = !0, new ae(null, this.Ma, this.g + 1, b)) : Qb.a(this.c[a], d) ? this : new ae(null, this.Ma, this.g, Sd.d(this.c, a + 1, d))) : (new Ud(null, 1 << (this.Ma >>> a & 31), [null, this])).na(a, b, c, d, e)
};
q.Za = function(a, b, c, d) {
  a = $d(this.c, this.g, c);
  return 0 > a ? d : Rd(c, this.c[a]) ? this.c[a + 1] : x.p ? d : null
};
var Xd = function() {
  function a(a, b, c, h, k, l, m) {
    var n = J.b(c);
    if(n === k) {
      return new ae(null, n, 2, [c, h, l, m])
    }
    var r = new Qd;
    return Vd.oa(a, b, n, c, h, r).oa(a, b, k, l, m, r)
  }
  function b(a, b, c, h, k, l) {
    var m = J.b(b);
    if(m === h) {
      return new ae(null, m, 2, [b, c, k, l])
    }
    var n = new Qd;
    return Vd.na(a, m, b, c, n).na(a, h, k, l, n)
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
function be(a, b, c, d, e) {
  this.i = a;
  this.pa = b;
  this.l = c;
  this.u = d;
  this.m = e;
  this.q = 0;
  this.f = 32374860
}
q = be.prototype;
q.N = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Vb(a)
};
q.S = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return Nb(this)
};
q.X = function(a, b) {
  return wc.a(b, a)
};
q.Y = function(a, b, c) {
  return wc.d(b, c, a)
};
q.A = ba();
q.Z = function() {
  return null == this.u ? vd([this.pa[this.l], this.pa[this.l + 1]]) : L(this.u)
};
q.aa = function() {
  return null == this.u ? Yd.d ? Yd.d(this.pa, this.l + 2, null) : Yd.call(null, this.pa, this.l + 2, null) : Yd.d ? Yd.d(this.pa, this.l, O(this.u)) : Yd.call(null, this.pa, this.l, O(this.u))
};
q.H = function(a, b) {
  return Yb(a, b)
};
q.Q = function(a, b) {
  return new be(b, this.pa, this.l, this.u, this.m)
};
q.P = g("i");
q.T = function() {
  return hc(N, this.i)
};
var Yd = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new be(null, a, b, null, null)
          }
          var h = a[b + 1];
          if(y(h) && (h = h.Kb(), y(h))) {
            return new be(null, a, b + 2, h, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new be(null, a, b, c, null)
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
  c.b = b;
  c.d = a;
  return c
}();
function ce(a, b, c, d, e) {
  this.i = a;
  this.pa = b;
  this.l = c;
  this.u = d;
  this.m = e;
  this.q = 0;
  this.f = 32374860
}
q = ce.prototype;
q.N = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Vb(a)
};
q.S = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return Nb(this)
};
q.X = function(a, b) {
  return wc.a(b, a)
};
q.Y = function(a, b, c) {
  return wc.d(b, c, a)
};
q.A = ba();
q.Z = function() {
  return L(this.u)
};
q.aa = function() {
  return Zd.n ? Zd.n(null, this.pa, this.l, O(this.u)) : Zd.call(null, null, this.pa, this.l, O(this.u))
};
q.H = function(a, b) {
  return Yb(a, b)
};
q.Q = function(a, b) {
  return new ce(b, this.pa, this.l, this.u, this.m)
};
q.P = g("i");
q.T = function() {
  return hc(N, this.i)
};
var Zd = function() {
  function a(a, b, c, h) {
    if(null == h) {
      for(h = b.length;;) {
        if(c < h) {
          var k = b[c];
          if(y(k) && (k = k.Kb(), y(k))) {
            return new ce(a, b, c + 1, k, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new ce(a, b, c, h, null)
    }
  }
  function b(a) {
    return c.n(null, a, 0, null)
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
  c.b = b;
  c.n = a;
  return c
}();
function de(a, b, c, d, e, f) {
  this.i = a;
  this.g = b;
  this.root = c;
  this.ca = d;
  this.ia = e;
  this.m = f;
  this.q = 4;
  this.f = 16123663
}
q = de.prototype;
q.Zb = function() {
  return new ee({}, this.root, this.g, this.ca, this.ia)
};
q.N = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Ec(a)
};
q.ea = function(a, b) {
  return a.W(a, b, null)
};
q.W = function(a, b, c) {
  return null == b ? this.ca ? this.ia : c : null == this.root ? c : x.p ? this.root.Za(0, J.b(b), b, c) : null
};
q.za = function(a, b, c) {
  if(null == b) {
    var d = this.ca;
    return(d ? c === this.ia : d) ? a : new de(this.i, this.ca ? this.g : this.g + 1, this.root, !0, c, null)
  }
  d = new Qd;
  c = (null == this.root ? Vd : this.root).na(0, J.b(b), b, c, d);
  return c === this.root ? a : new de(this.i, d.K ? this.g + 1 : this.g, c, this.ca, this.ia, null)
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
q.S = function(a, b) {
  return oc(b) ? a.za(a, D.a(b, 0), D.a(b, 1)) : U.d(db, a, b)
};
q.toString = function() {
  return Nb(this)
};
q.A = function() {
  if(0 < this.g) {
    var a = null != this.root ? this.root.Kb() : null;
    return this.ca ? Q(vd([null, this.ia]), a) : a
  }
  return null
};
q.M = g("g");
q.H = function(a, b) {
  return Hd(a, b)
};
q.Q = function(a, b) {
  return new de(b, this.g, this.root, this.ca, this.ia, this.m)
};
q.P = g("i");
q.T = function() {
  return tb(Nd, this.i)
};
var Nd = new de(null, 0, null, !1, null, 0);
function ee(a, b, c, d, e) {
  this.s = a;
  this.root = b;
  this.count = c;
  this.ca = d;
  this.ia = e;
  this.q = 56;
  this.f = 258
}
q = ee.prototype;
q.jb = function(a, b, c) {
  return fe(a, b, c)
};
q.Cb = function(a, b) {
  var c;
  a: {
    if(a.s) {
      c = b ? ((c = b.f & 2048) ? c : b.Pe) ? !0 : b.f ? !1 : z(kb, b) : z(kb, b);
      if(c) {
        c = fe(a, Fc.b ? Fc.b(b) : Fc.call(null, b), Gc.b ? Gc.b(b) : Gc.call(null, b));
        break a
      }
      c = K(b);
      for(var d = a;;) {
        var e = L(c);
        if(y(e)) {
          c = O(c), d = fe(d, Fc.b ? Fc.b(e) : Fc.call(null, e), Gc.b ? Gc.b(e) : Gc.call(null, e))
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
  if(a.s) {
    a.s = null, a = new de(null, a.count, a.root, a.ca, a.ia, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
q.ea = function(a, b) {
  return null == b ? this.ca ? this.ia : null : null == this.root ? null : this.root.Za(0, J.b(b), b)
};
q.W = function(a, b, c) {
  return null == b ? this.ca ? this.ia : c : null == this.root ? c : this.root.Za(0, J.b(b), b, c)
};
q.M = function() {
  if(this.s) {
    return this.count
  }
  throw Error("count after persistent!");
};
function fe(a, b, c) {
  if(a.s) {
    if(null == b) {
      a.ia !== c && (a.ia = c), a.ca || (a.count += 1, a.ca = !0)
    }else {
      var d = new Qd;
      b = (null == a.root ? Vd : a.root).oa(a.s, 0, J.b(b), b, c, d);
      b !== a.root && (a.root = b);
      d.K && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var dc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = K(a), e = Fb(Nd);;) {
      if(b) {
        a = O(O(b));
        var f = L(b), b = L(O(b)), e = Ib(e, f, b), b = a
      }else {
        return Hb(e)
      }
    }
  }
  a.o = 0;
  a.h = function(a) {
    a = K(a);
    return b(a)
  };
  a.e = b;
  return a
}(), ge = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return new Kd(null, zc(R(a)), T.a(Xa, a), null)
  }
  a.o = 0;
  a.h = function(a) {
    a = K(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function Fc(a) {
  return lb(a)
}
function Gc(a) {
  return mb(a)
}
var he = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return y(ad(a)) ? U.a(function(a, b) {
      return $b.a(y(a) ? a : Od, b)
    }, a) : null
  }
  a.o = 0;
  a.h = function(a) {
    a = K(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function Lc(a) {
  var b;
  b = a ? ((b = a.q & 4096) ? b : a.Uf) ? !0 : !1 : !1;
  if(b) {
    return a.name
  }
  if("string" === typeof a) {
    return a
  }
  throw Error([B("Doesn't support name: "), B(a)].join(""));
}
function ie(a, b, c, d, e) {
  this.i = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = e;
  this.q = 0;
  this.f = 32375006
}
q = ie.prototype;
q.N = function(a) {
  var b = this.m;
  return null != b ? b : this.m = a = Vb(a)
};
q.ma = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new ie(this.i, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new ie(this.i, this.start + this.step, this.end, this.step, null) : null
};
q.S = function(a, b) {
  return Q(b, a)
};
q.toString = function() {
  return Nb(this)
};
q.X = function(a, b) {
  return Rb.a(a, b)
};
q.Y = function(a, b, c) {
  return Rb.d(a, b, c)
};
q.A = function(a) {
  return 0 < this.step ? this.start < this.end ? a : null : this.start > this.end ? a : null
};
q.M = function(a) {
  return Ua(a.A(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
q.Z = g("start");
q.aa = function(a) {
  return null != a.A(a) ? new ie(this.i, this.start + this.step, this.end, this.step, null) : N
};
q.H = function(a, b) {
  return Yb(a, b)
};
q.Q = function(a, b) {
  return new ie(b, this.start, this.end, this.step, this.m)
};
q.P = g("i");
q.O = function(a, b) {
  if(b < a.M(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  throw Error("Index out of bounds");
};
q.U = function(a, b, c) {
  c = b < a.M(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
q.T = function() {
  return hc(N, this.i)
};
var je = function() {
  function a(a, b, c) {
    return new ie(null, a, b, c, null)
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
  e.j = d;
  e.b = c;
  e.a = b;
  e.d = a;
  return e
}(), ke = function() {
  function a(a, b, c) {
    return function() {
      var d = null, e = function() {
        function d(a, b, c, f) {
          var h = null;
          3 < arguments.length && (h = P(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, h)
        }
        function e(d, l, m, n) {
          return xd.e(P([T.C(a, d, l, m, n), T.C(b, d, l, m, n), T.C(c, d, l, m, n)], 0))
        }
        d.o = 3;
        d.h = function(a) {
          var b = L(a);
          a = O(a);
          var c = L(a);
          a = O(a);
          var d = L(a);
          a = M(a);
          return e(b, c, d, a)
        };
        d.e = e;
        return d
      }(), d = function(d, l, v, G) {
        switch(arguments.length) {
          case 0:
            return xd.e(P([a.j ? a.j() : a.call(null), b.j ? b.j() : b.call(null), c.j ? c.j() : c.call(null)], 0));
          case 1:
            return xd.e(P([a.b ? a.b(d) : a.call(null, d), b.b ? b.b(d) : b.call(null, d), c.b ? c.b(d) : c.call(null, d)], 0));
          case 2:
            return xd.e(P([a.a ? a.a(d, l) : a.call(null, d, l), b.a ? b.a(d, l) : b.call(null, d, l), c.a ? c.a(d, l) : c.call(null, d, l)], 0));
          case 3:
            return xd.e(P([a.d ? a.d(d, l, v) : a.call(null, d, l, v), b.d ? b.d(d, l, v) : b.call(null, d, l, v), c.d ? c.d(d, l, v) : c.call(null, d, l, v)], 0));
          default:
            return e.e(d, l, v, P(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.o = 3;
      d.h = e.h;
      return d
    }()
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, f) {
          var h = null;
          3 < arguments.length && (h = P(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, h)
        }
        function d(c, e, k, l) {
          return xd.e(P([T.C(a, c, e, k, l), T.C(b, c, e, k, l)], 0))
        }
        c.o = 3;
        c.h = function(a) {
          var b = L(a);
          a = O(a);
          var c = L(a);
          a = O(a);
          var e = L(a);
          a = M(a);
          return d(b, c, e, a)
        };
        c.e = d;
        return c
      }(), c = function(c, e, k, v) {
        switch(arguments.length) {
          case 0:
            return xd.e(P([a.j ? a.j() : a.call(null), b.j ? b.j() : b.call(null)], 0));
          case 1:
            return xd.e(P([a.b ? a.b(c) : a.call(null, c), b.b ? b.b(c) : b.call(null, c)], 0));
          case 2:
            return xd.e(P([a.a ? a.a(c, e) : a.call(null, c, e), b.a ? b.a(c, e) : b.call(null, c, e)], 0));
          case 3:
            return xd.e(P([a.d ? a.d(c, e, k) : a.call(null, c, e, k), b.d ? b.d(c, e, k) : b.call(null, c, e, k)], 0));
          default:
            return d.e(c, e, k, P(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.o = 3;
      c.h = d.h;
      return c
    }()
  }
  function c(a) {
    return function() {
      var b = null, c = function() {
        function b(a, d, e, f) {
          var h = null;
          3 < arguments.length && (h = P(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, d, e, h)
        }
        function c(b, d, e, h) {
          return xd.e(P([T.C(a, b, d, e, h)], 0))
        }
        b.o = 3;
        b.h = function(a) {
          var b = L(a);
          a = O(a);
          var d = L(a);
          a = O(a);
          var e = L(a);
          a = M(a);
          return c(b, d, e, a)
        };
        b.e = c;
        return b
      }(), b = function(b, d, e, h) {
        switch(arguments.length) {
          case 0:
            return xd.e(P([a.j ? a.j() : a.call(null)], 0));
          case 1:
            return xd.e(P([a.b ? a.b(b) : a.call(null, b)], 0));
          case 2:
            return xd.e(P([a.a ? a.a(b, d) : a.call(null, b, d)], 0));
          case 3:
            return xd.e(P([a.d ? a.d(b, d, e) : a.call(null, b, d, e)], 0));
          default:
            return c.e(b, d, e, P(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      b.o = 3;
      b.h = c.h;
      return b
    }()
  }
  var d = null, e = function() {
    function a(c, d, e, f) {
      var r = null;
      3 < arguments.length && (r = P(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, r)
    }
    function b(a, c, d, e) {
      var f = Yc.n(a, c, d, e);
      return function() {
        function a(b, c, d) {
          return U.d(function(a, e) {
            return $b.a(a, e.d ? e.d(b, c, d) : e.call(null, b, c, d))
          }, td, f)
        }
        function b(a, c) {
          return U.d(function(b, d) {
            return $b.a(b, d.a ? d.a(a, c) : d.call(null, a, c))
          }, td, f)
        }
        function c(a) {
          return U.d(function(b, c) {
            return $b.a(b, c.b ? c.b(a) : c.call(null, a))
          }, td, f)
        }
        function d() {
          return U.d(function(a, b) {
            return $b.a(a, b.j ? b.j() : b.call(null))
          }, td, f)
        }
        var e = null, h = function() {
          function a(c, d, e, f) {
            var h = null;
            3 < arguments.length && (h = P(Array.prototype.slice.call(arguments, 3), 0));
            return b.call(this, c, d, e, h)
          }
          function b(a, c, d, e) {
            return U.d(function(b, f) {
              return $b.a(b, T.C(f, a, c, d, e))
            }, td, f)
          }
          a.o = 3;
          a.h = function(a) {
            var c = L(a);
            a = O(a);
            var d = L(a);
            a = O(a);
            var e = L(a);
            a = M(a);
            return b(c, d, e, a)
          };
          a.e = b;
          return a
        }(), e = function(e, f, k, l) {
          switch(arguments.length) {
            case 0:
              return d.call(this);
            case 1:
              return c.call(this, e);
            case 2:
              return b.call(this, e, f);
            case 3:
              return a.call(this, e, f, k);
            default:
              return h.e(e, f, k, P(arguments, 3))
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        e.o = 3;
        e.h = h.h;
        return e
      }()
    }
    a.o = 3;
    a.h = function(a) {
      var c = L(a);
      a = O(a);
      var d = L(a);
      a = O(a);
      var e = L(a);
      a = M(a);
      return b(c, d, e, a)
    };
    a.e = b;
    return a
  }(), d = function(d, h, k, l) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, h);
      case 3:
        return a.call(this, d, h, k);
      default:
        return e.e(d, h, k, P(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.o = 3;
  d.h = e.h;
  d.b = c;
  d.a = b;
  d.d = a;
  d.e = e.e;
  return d
}(), le = function() {
  function a(a, b) {
    for(;;) {
      var c = K(b);
      if(y(c ? 0 < a : c)) {
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
  c.b = b;
  c.a = a;
  return c
}(), me = function() {
  function a(a, b) {
    le.a(a, b);
    return b
  }
  function b(a) {
    le.b(a);
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
  c.b = b;
  c.a = a;
  return c
}();
function W(a, b, c, d, e, f, h) {
  H(a, c);
  K(h) && (b.d ? b.d(L(h), a, f) : b.call(null, L(h), a, f));
  c = K(O(h));
  h = null;
  for(var k = 0, l = 0;;) {
    if(l < k) {
      var m = h.O(h, l);
      H(a, d);
      b.d ? b.d(m, a, f) : b.call(null, m, a, f);
      l += 1
    }else {
      if(c = K(c)) {
        h = c, pc(h) ? (c = Kb(h), l = Lb(h), h = c, k = R(c), c = l) : (c = L(h), H(a, d), b.d ? b.d(c, a, f) : b.call(null, c, a, f), c = O(h), h = null, k = 0), l = 0
      }else {
        break
      }
    }
  }
  return H(a, e)
}
var ne = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = P(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = K(b), f = null, h = 0, k = 0;;) {
      if(k < h) {
        var l = f.O(f, k);
        H(a, l);
        k += 1
      }else {
        if(e = K(e)) {
          f = e, pc(f) ? (e = Kb(f), h = Lb(f), f = e, l = R(e), e = h, h = l) : (l = L(f), H(a, l), e = O(f), f = null, h = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.o = 1;
  a.h = function(a) {
    var d = L(a);
    a = M(a);
    return b(d, a)
  };
  a.e = b;
  return a
}(), oe = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function pe(a) {
  return[B('"'), B(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return oe[a]
  })), B('"')].join("")
}
var X = function qe(b, c, d) {
  if(null == b) {
    return H(c, "nil")
  }
  if(void 0 === b) {
    return H(c, "#\x3cundefined\x3e")
  }
  if(x.p) {
    y(function() {
      var c = cc.a(d, x.Rd);
      return y(c) ? (c = b ? ((c = b.f & 131072) ? c : b.Qe) ? !0 : b.f ? !1 : z(qb, b) : z(qb, b), y(c) ? ic(b) : c) : c
    }()) && (H(c, "^"), qe(ic(b), c, d), H(c, " "));
    if(null == b) {
      return H(c, "nil")
    }
    if(b.cc) {
      return b.Vc(b, c, d)
    }
    if(function() {
      var c;
      c = b ? ((c = b.f & 2147483648) ? c : b.V) ? !0 : !1 : !1;
      return c
    }()) {
      return b.F(b, c, d)
    }
    if(function() {
      var c = Va(b) === Boolean;
      return c ? c : "number" === typeof b
    }()) {
      return H(c, "" + B(b))
    }
    if(b instanceof Array) {
      return W(c, qe, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if(u(b)) {
      return y(x.af.call(null, d)) ? H(c, pe(b)) : H(c, b)
    }
    if(fc(b)) {
      return ne.e(c, P(["#\x3c", "" + B(b), "\x3e"], 0))
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
      return ne.e(c, P(['#inst "', "" + B(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return y(b instanceof RegExp) ? ne.e(c, P(['#"', b.source, '"'], 0)) : function() {
      var c;
      c = b ? ((c = b.f & 2147483648) ? c : b.V) ? !0 : b.f ? !1 : z(Cb, b) : z(Cb, b);
      return c
    }() ? Db(b, c, d) : x.p ? ne.e(c, P(["#\x3c", "" + B(b), "\x3e"], 0)) : null
  }
  return null
}, re = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = Sa(), e = null == a;
    if(e ? e : Ua(K(a))) {
      b = ""
    }else {
      var e = B, f = new Qa, h = new Mb(f);
      a: {
        X(L(a), h, b);
        a = K(O(a));
        for(var k = null, l = 0, m = 0;;) {
          if(m < l) {
            var n = k.O(k, m);
            H(h, " ");
            X(n, h, b);
            m += 1
          }else {
            if(a = K(a)) {
              k = a, pc(k) ? (a = Kb(k), l = Lb(k), k = a, n = R(a), a = l, l = n) : (n = L(k), H(h, " "), X(n, h, b), a = O(k), k = null, l = 0), m = 0
            }else {
              break a
            }
          }
        }
      }
      Bb(h);
      b = "" + e(f)
    }
    return b
  }
  a.o = 0;
  a.h = function(a) {
    a = K(a);
    return b(a)
  };
  a.e = b;
  return a
}();
Pb.prototype.V = !0;
Pb.prototype.F = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
Ad.prototype.V = !0;
Ad.prototype.F = function(a, b, c) {
  return W(b, X, "[", " ", "]", c, a)
};
Sc.prototype.V = !0;
Sc.prototype.F = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
Kd.prototype.V = !0;
Kd.prototype.F = function(a, b, c) {
  return W(b, function(a) {
    return W(b, X, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Nc.prototype.V = !0;
Nc.prototype.F = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
be.prototype.V = !0;
be.prototype.F = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
yd.prototype.V = !0;
yd.prototype.F = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
de.prototype.V = !0;
de.prototype.F = function(a, b, c) {
  return W(b, function(a) {
    return W(b, X, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
od.prototype.V = !0;
od.prototype.F = function(a, b, c) {
  return W(b, X, "[", " ", "]", c, a)
};
Hc.prototype.V = !0;
Hc.prototype.F = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
Jd.prototype.V = !0;
Jd.prototype.F = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
Ic.prototype.V = !0;
Ic.prototype.F = function(a, b) {
  return H(b, "()")
};
Jc.prototype.V = !0;
Jc.prototype.F = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
ie.prototype.V = !0;
ie.prototype.F = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
ce.prototype.V = !0;
ce.prototype.F = function(a, b, c) {
  return W(b, X, "(", " ", ")", c, a)
};
od.prototype.Dd = !0;
od.prototype.Ed = function(a, b) {
  return vc.a(a, b)
};
Ad.prototype.Dd = !0;
Ad.prototype.Ed = function(a, b) {
  return vc.a(a, b)
};
function se(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.Ef = c;
  this.Ff = d;
  this.f = 2153938944;
  this.q = 2
}
q = se.prototype;
q.N = function(a) {
  return ia(a)
};
q.Id = function(a, b, c) {
  for(var d = K(this.Ff), e = null, f = 0, h = 0;;) {
    if(h < f) {
      var k = e.O(e, h), l = bc.d(k, 0, null), k = bc.d(k, 1, null);
      k.n ? k.n(l, a, b, c) : k.call(null, l, a, b, c);
      h += 1
    }else {
      if(d = K(d)) {
        pc(d) ? (e = Kb(d), d = Lb(d), l = e, f = R(e), e = l) : (e = L(d), l = bc.d(e, 0, null), k = bc.d(e, 1, null), k.n ? k.n(l, a, b, c) : k.call(null, l, a, b, c), d = O(d), e = null, f = 0), h = 0
      }else {
        return null
      }
    }
  }
};
q.F = function(a, b, c) {
  H(b, "#\x3cAtom: ");
  X(this.state, b, c);
  return H(b, "\x3e")
};
q.P = g("i");
q.Fc = g("state");
q.H = function(a, b) {
  return a === b
};
var te = function() {
  function a(a) {
    return new se(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d = sc(c) ? T.a(dc, c) : c, e = cc.a(d, x.ig), d = cc.a(d, x.Rd);
      return new se(a, d, e, null)
    }
    a.o = 1;
    a.h = function(a) {
      var c = L(a);
      a = M(a);
      return b(c, a)
    };
    a.e = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, P(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 1;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b
}();
function ue(a, b) {
  var c = a.Ef;
  if(y(c) && !y(c.b ? c.b(b) : c.call(null, b))) {
    throw Error([B("Assert failed: "), B("Validator rejected reference state"), B("\n"), B(re.e(P([Wb(new I(null, "validate", "validate", 1233162959, null), new I(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  Eb(a, c, b);
  return b
}
var ve = function() {
  function a(a, b, c, d, e) {
    return ue(a, b.n ? b.n(a.state, c, d, e) : b.call(null, a.state, c, d, e))
  }
  function b(a, b, c, d) {
    return ue(a, b.d ? b.d(a.state, c, d) : b.call(null, a.state, c, d))
  }
  function c(a, b, c) {
    return ue(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c))
  }
  function d(a, b) {
    return ue(a, b.b ? b.b(a.state) : b.call(null, a.state))
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, G) {
      var C = null;
      5 < arguments.length && (C = P(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, C)
    }
    function b(a, c, d, e, f, h) {
      return ue(a, T.e(c, a.state, d, e, f, P([h], 0)))
    }
    a.o = 5;
    a.h = function(a) {
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
    a.e = b;
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
        return f.e(e, k, l, m, n, P(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.o = 5;
  e.h = f.h;
  e.a = d;
  e.d = c;
  e.n = b;
  e.C = a;
  e.e = f.e;
  return e
}(), we = {};
function xe(a) {
  if(a ? a.Oe : a) {
    return a.Oe(a)
  }
  var b;
  b = xe[t(null == a ? null : a)];
  if(!b && (b = xe._, !b)) {
    throw A("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a)
}
function ye(a) {
  return(a ? y(y(null) ? null : a.Ne) || (a.Wc ? 0 : z(we, a)) : z(we, a)) ? xe(a) : function() {
    var b = "string" === typeof a;
    return b || (b = "number" === typeof a) ? b : (b = a instanceof V) ? b : a instanceof I
  }() ? ze.b ? ze.b(a) : ze.call(null, a) : re.e(P([a], 0))
}
var ze = function Ae(b) {
  if(null == b) {
    return null
  }
  if(b ? y(y(null) ? null : b.Ne) || (b.Wc ? 0 : z(we, b)) : z(we, b)) {
    return xe(b)
  }
  if(b instanceof V) {
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
        var h = d.O(d, f), k = bc.d(h, 0, null), h = bc.d(h, 1, null);
        c[ye(k)] = Ae(h);
        f += 1
      }else {
        if(b = K(b)) {
          pc(b) ? (e = Kb(b), b = Lb(b), d = e, e = R(e)) : (e = L(b), d = bc.d(e, 0, null), e = bc.d(e, 1, null), c[ye(d)] = Ae(e), b = O(b), d = null, e = 0), f = 0
        }else {
          break
        }
      }
    }
    return c
  }
  return lc(b) ? T.a(Xa, dd.a(Ae, b)) : x.p ? b : null
}, Be = {};
function Ce(a, b) {
  if(a ? a.Me : a) {
    return a.Me(a, b)
  }
  var c;
  c = Ce[t(null == a ? null : a)];
  if(!c && (c = Ce._, !c)) {
    throw A("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b)
}
var De = function() {
  function a(a) {
    return b.e(a, P([Ta([x.$e, !1])], 0))
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      if(a ? y(y(null) ? null : a.Sf) || (a.Wc ? 0 : z(Be, a)) : z(Be, a)) {
        return Ce(a, T.a(ge, c))
      }
      if(K(c)) {
        var d = sc(c) ? T.a(dc, c) : c, e = cc.a(d, x.$e);
        return function(a, b, c, d) {
          return function C(e) {
            return sc(e) ? me.b(dd.a(C, e)) : lc(e) ? ed(bb(e), dd.a(C, e)) : e instanceof Array ? wd(dd.a(C, e)) : Va(e) === Object ? ed(Od, function() {
              return function(a, b, c, d) {
                return function Xb(f) {
                  return new Nc(null, function(a, b, c, d) {
                    return function() {
                      for(;;) {
                        var a = K(f);
                        if(a) {
                          if(pc(a)) {
                            var b = Kb(a), c = R(b), h = new Pc(Array(c), 0);
                            a: {
                              for(var k = 0;;) {
                                if(k < c) {
                                  var l = D.a(b, k), l = vd([d.b ? d.b(l) : d.call(null, l), C(e[l])]);
                                  h.add(l);
                                  k += 1
                                }else {
                                  b = !0;
                                  break a
                                }
                              }
                              b = void 0
                            }
                            return b ? Tc(h.la(), Xb(Lb(a))) : Tc(h.la(), null)
                          }
                          h = L(a);
                          return Q(vd([d.b ? d.b(h) : d.call(null, h), C(e[h])]), Xb(M(a)))
                        }
                        return null
                      }
                    }
                  }(a, b, c, d), null, null)
                }
              }(a, b, c, d)(qc(e))
            }()) : x.p ? e : null
          }
        }(c, d, e, y(e) ? Mc : B)(a)
      }
      return null
    }
    a.o = 1;
    a.h = function(a) {
      var c = L(a);
      a = M(a);
      return b(c, a)
    };
    a.e = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, P(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 1;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b
}(), Bc = function() {
  function a(a) {
    return(Math.random.j ? Math.random.j() : Math.random.call(null)) * a
  }
  function b() {
    return c.b(1)
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
  c.j = b;
  c.b = a;
  return c
}(), Cc = function(a) {
  return Math.floor.b ? Math.floor.b((Math.random.j ? Math.random.j() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.j ? Math.random.j() : Math.random.call(null)) * a)
};
var Ee, Fe, Ge, He;
function Ie() {
  return s.navigator ? s.navigator.userAgent : null
}
He = Ge = Fe = Ee = !1;
var Je;
if(Je = Ie()) {
  var Ke = s.navigator;
  Ee = 0 == Je.indexOf("Opera");
  Fe = !Ee && -1 != Je.indexOf("MSIE");
  Ge = !Ee && -1 != Je.indexOf("WebKit");
  He = !Ee && !Ge && "Gecko" == Ke.product
}
var Le = Ee, Y = Fe, Me = He, Ne = Ge, Oe = s.navigator, Pe = -1 != (Oe && Oe.platform || "").indexOf("Mac");
function Qe() {
  var a = s.document;
  return a ? a.documentMode : void 0
}
var Re;
a: {
  var Se = "", Te;
  if(Le && s.opera) {
    var Ue = s.opera.version, Se = "function" == typeof Ue ? Ue() : Ue
  }else {
    if(Me ? Te = /rv\:([^\);]+)(\)|;)/ : Y ? Te = /MSIE\s+([^\);]+)(\)|;)/ : Ne && (Te = /WebKit\/(\S+)/), Te) {
      var Ve = Te.exec(Ie()), Se = Ve ? Ve[1] : ""
    }
  }
  if(Y) {
    var We = Qe();
    if(We > parseFloat(Se)) {
      Re = String(We);
      break a
    }
  }
  Re = Se
}
var Xe = {};
function Ye(a) {
  var b;
  if(!(b = Xe[a])) {
    b = 0;
    for(var c = String(Re).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], r = m.exec(k) || ["", "", ""];
        if(0 == n[0].length && 0 == r[0].length) {
          break
        }
        b = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == r[2].length) ? -1 : (0 == n[2].length) > (0 == r[2].length) ? 1 : 0) || (n[2] < r[2] ? -1 : n[2] > r[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Xe[a] = 0 <= b
  }
  return b
}
var Ze = s.document, $e = Ze && Y ? Qe() || ("CSS1Compat" == Ze.compatMode ? parseInt(Re, 10) : 5) : void 0;
function af() {
  0 != bf && (this.jg = Error().stack, cf[ia(this)] = this)
}
var bf = 0, cf = {};
af.prototype.lb = !1;
af.prototype.Zc = function() {
  if(!this.lb && (this.lb = !0, this.B(), 0 != bf)) {
    var a = ia(this);
    delete cf[a]
  }
};
af.prototype.B = function() {
  if(this.qe) {
    for(;this.qe.length;) {
      this.qe.shift()()
    }
  }
};
function df(a) {
  a && "function" == typeof a.Zc && a.Zc()
}
;var ef = !Y || Y && 9 <= $e, ff = Y && !Ye("9");
!Ne || Ye("528");
Me && Ye("1.9b") || Y && Ye("8") || Le && Ye("9.5") || Ne && Ye("528");
Me && !Ye("8") || Y && Ye("9");
function gf(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
q = gf.prototype;
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
function hf(a) {
  hf[" "](a);
  return a
}
hf[" "] = da;
function jf(a, b) {
  try {
    return hf(a[b]), !0
  }catch(c) {
  }
  return!1
}
;function kf(a, b) {
  a && this.jc(a, b)
}
qa(kf, gf);
q = kf.prototype;
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
  gf.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  d ? Me && (jf(d, "nodeName") || (d = null)) : "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  this.relatedTarget = d;
  this.offsetX = Ne || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = Ne || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  this.uf = Pe ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.hc = a;
  a.defaultPrevented && this.preventDefault();
  delete this.wb
};
q.preventDefault = function() {
  kf.ka.preventDefault.call(this);
  var a = this.hc;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, ff) {
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
var lf = 0;
function mf() {
}
q = mf.prototype;
q.key = 0;
q.cb = !1;
q.Xb = !1;
q.jc = function(a, b, c, d, e, f) {
  if(ga(a)) {
    this.ge = !0
  }else {
    if(a && a.handleEvent && ga(a.handleEvent)) {
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
  this.key = ++lf;
  this.cb = !1
};
q.handleEvent = function(a) {
  return this.ge ? this.Ra.call(this.rb || this.src, a) : this.Ra.handleEvent.call(this.Ra, a)
};
var nf = {}, of = {}, pf = {}, qf = {};
function rf(a, b, c, d, e) {
  if(ea(b)) {
    for(var f = 0;f < b.length;f++) {
      rf(a, b[f], c, d, e)
    }
    return null
  }
  a = sf(a, b, c, !1, d, e);
  b = a.key;
  nf[b] = a;
  return b
}
function sf(a, b, c, d, e, f) {
  if(!b) {
    throw Error("Invalid event type");
  }
  e = !!e;
  var h = of;
  b in h || (h[b] = {v:0, ba:0});
  h = h[b];
  e in h || (h[e] = {v:0, ba:0}, h.v++);
  var h = h[e], k = ia(a), l;
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
  m = tf();
  h = new mf;
  h.jc(c, m, a, b, e, f);
  h.Xb = d;
  m.src = a;
  m.Ra = h;
  l.push(h);
  pf[k] || (pf[k] = []);
  pf[k].push(h);
  a.addEventListener ? a != s && a.Vd || a.addEventListener(b, m, e) : a.attachEvent(b in qf ? qf[b] : qf[b] = "on" + b, m);
  return h
}
function tf() {
  var a = uf, b = ef ? function(c) {
    return a.call(b.src, b.Ra, c)
  } : function(c) {
    c = a.call(b.src, b.Ra, c);
    if(!c) {
      return c
    }
  };
  return b
}
function vf(a, b, c, d, e) {
  if(ea(b)) {
    for(var f = 0;f < b.length;f++) {
      vf(a, b[f], c, d, e)
    }
    return null
  }
  a = sf(a, b, c, !0, d, e);
  b = a.key;
  nf[b] = a;
  return b
}
function wf(a, b, c, d, e) {
  if(ea(b)) {
    for(var f = 0;f < b.length;f++) {
      wf(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = of;
      if(b in f && (f = f[b], d in f && (f = f[d], a = ia(a), f[a]))) {
        a = f[a];
        break a
      }
      a = null
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].Ra == c && a[f].capture == d && a[f].rb == e) {
          xf(a[f].key);
          break
        }
      }
    }
  }
}
function xf(a) {
  var b = nf[a];
  if(!b || b.cb) {
    return!1
  }
  var c = b.src, d = b.type, e = b.te, f = b.capture;
  c.removeEventListener ? c != s && c.Vd || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in qf ? qf[d] : qf[d] = "on" + d, e);
  c = ia(c);
  pf[c] && (e = pf[c], Ia(e, b), 0 == e.length && delete pf[c]);
  b.cb = !0;
  if(b = of[d][f][c]) {
    b.me = !0, yf(d, f, c, b)
  }
  delete nf[a];
  return!0
}
function yf(a, b, c, d) {
  if(!d.kc && d.me) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].cb ? d[e].te.src = null : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.me = !1;
    0 == f && (delete of[a][b][c], of[a][b].v--, 0 == of[a][b].v && (delete of[a][b], of[a].v--), 0 == of[a].v && delete of[a])
  }
}
function zf(a) {
  var b = 0;
  if(null != a) {
    if(a = ia(a), pf[a]) {
      a = pf[a];
      for(var c = a.length - 1;0 <= c;c--) {
        xf(a[c].key), b++
      }
    }
  }else {
    La(nf, function(a, c) {
      xf(c);
      b++
    })
  }
}
function Af(a, b, c, d, e) {
  var f = 1;
  b = ia(b);
  if(a[b]) {
    var h = --a.ba, k = a[b];
    k.kc ? k.kc++ : k.kc = 1;
    try {
      for(var l = k.length, m = 0;m < l;m++) {
        var n = k[m];
        n && !n.cb && (f &= !1 !== Bf(n, e))
      }
    }finally {
      a.ba = Math.max(h, a.ba), k.kc--, yf(c, d, b, k)
    }
  }
  return Boolean(f)
}
function Bf(a, b) {
  a.Xb && xf(a.key);
  return a.handleEvent(b)
}
function uf(a, b) {
  if(a.cb) {
    return!0
  }
  var c = a.type, d = of;
  if(!(c in d)) {
    return!0
  }
  var d = d[c], e, f;
  if(!ef) {
    e = b || ca("window.event");
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
    l = new kf;
    l.jc(e, this);
    e = !0;
    try {
      if(h) {
        for(var n = [], r = l.currentTarget;r;r = r.parentNode) {
          n.push(r)
        }
        f = d[!0];
        f.ba = f.v;
        for(var v = n.length - 1;!l.wb && 0 <= v && f.ba;v--) {
          l.currentTarget = n[v], e &= Af(f, n[v], c, !0, l)
        }
        if(k) {
          for(f = d[!1], f.ba = f.v, v = 0;!l.wb && v < n.length && f.ba;v++) {
            l.currentTarget = n[v], e &= Af(f, n[v], c, !1, l)
          }
        }
      }else {
        e = Bf(a, l)
      }
    }finally {
      n && (n.length = 0)
    }
    return e
  }
  c = new kf(b, this);
  return e = Bf(a, c)
}
;function Cf() {
  af.call(this)
}
qa(Cf, af);
q = Cf.prototype;
q.Vd = !0;
q.gd = null;
q.addEventListener = function(a, b, c, d) {
  rf(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  wf(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = of;
  if(b in c) {
    if(u(a)) {
      a = new gf(a, this)
    }else {
      if(a instanceof gf) {
        a.target = a.target || this
      }else {
        var d = a;
        a = new gf(b, this);
        Pa(a, d)
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
        a.currentTarget = e[h], d &= Af(f, e[h], a.type, !0, a) && !1 != a.sc
      }
    }
    if(!1 in c) {
      if(f = c[!1], f.ba = f.v, b) {
        for(h = 0;!a.wb && h < e.length && f.ba;h++) {
          a.currentTarget = e[h], d &= Af(f, e[h], a.type, !1, a) && !1 != a.sc
        }
      }else {
        for(e = this;!a.wb && e && f.ba;e = e.gd) {
          a.currentTarget = e, d &= Af(f, e, a.type, !1, a) && !1 != a.sc
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
  Cf.ka.B.call(this);
  zf(this);
  this.gd = null
};
function Df(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
function Ef(a) {
  var b = [];
  Ff(new Gf, a, b);
  return b.join("")
}
function Gf() {
  this.rc = void 0
}
function Ff(a, b, c) {
  switch(typeof b) {
    case "string":
      Hf(b, c);
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
      if(ea(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", f = 0;f < d;f++) {
          c.push(e), e = b[f], Ff(a, a.rc ? a.rc.call(b, String(f), e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Hf(f, c), c.push(":"), Ff(a, a.rc ? a.rc.call(b, f, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof b);
  }
}
var If = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Jf = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Hf(a, b) {
  b.push('"', a.replace(Jf, function(a) {
    if(a in If) {
      return If[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return If[a] = e + b.toString(16)
  }), '"')
}
;function Kf(a) {
  if("function" == typeof a.Ba) {
    return a.Ba()
  }
  if(u(a)) {
    return a.split("")
  }
  if(fa(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Ma(a)
}
function Lf(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(fa(a) || u(a)) {
      Fa(a, b, c)
    }else {
      var d;
      if("function" == typeof a.qb) {
        d = a.qb()
      }else {
        if("function" != typeof a.Ba) {
          if(fa(a) || u(a)) {
            d = [];
            for(var e = a.length, f = 0;f < e;f++) {
              d.push(f)
            }
          }else {
            d = Na(a)
          }
        }else {
          d = void 0
        }
      }
      for(var e = Kf(a), f = e.length, h = 0;h < f;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
;function Mf(a, b) {
  this.Da = {};
  this.G = [];
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
      a instanceof Mf ? (c = a.qb(), d = a.Ba()) : (c = Na(a), d = Ma(a));
      for(var e = 0;e < c.length;e++) {
        this.set(c[e], d[e])
      }
    }
  }
}
q = Mf.prototype;
q.v = 0;
q.Be = 0;
q.Ba = function() {
  Nf(this);
  for(var a = [], b = 0;b < this.G.length;b++) {
    a.push(this.Da[this.G[b]])
  }
  return a
};
q.qb = function() {
  Nf(this);
  return this.G.concat()
};
q.Db = function(a) {
  return Of(this.Da, a)
};
q.remove = function(a) {
  return Of(this.Da, a) ? (delete this.Da[a], this.v--, this.Be++, this.G.length > 2 * this.v && Nf(this), !0) : !1
};
function Nf(a) {
  if(a.v != a.G.length) {
    for(var b = 0, c = 0;b < a.G.length;) {
      var d = a.G[b];
      Of(a.Da, d) && (a.G[c++] = d);
      b++
    }
    a.G.length = c
  }
  if(a.v != a.G.length) {
    for(var e = {}, c = b = 0;b < a.G.length;) {
      d = a.G[b], Of(e, d) || (a.G[c++] = d, e[d] = 1), b++
    }
    a.G.length = c
  }
}
q.get = function(a, b) {
  return Of(this.Da, a) ? this.Da[a] : b
};
q.set = function(a, b) {
  Of(this.Da, a) || (this.v++, this.G.push(a), this.Be++);
  this.Da[a] = b
};
q.dc = function() {
  return new Mf(this)
};
function Of(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;var Pf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Qf(a) {
  var b = a.match(Pf);
  a = b[1];
  var c = b[2], d = b[3], b = b[4], e = "";
  a && (e += a + ":");
  d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
  return e
}
;function Rf(a, b) {
  var c;
  if(a instanceof Rf) {
    this.ga = void 0 !== b ? b : a.ga, Sf(this, a.xb), c = a.vc, Tf(this), this.vc = c, c = a.Fb, Tf(this), this.Fb = c, Uf(this, a.pc), c = a.mc, Tf(this), this.mc = c, Vf(this, a.Ga.dc()), c = a.ic, Tf(this), this.ic = c
  }else {
    if(a && (c = String(a).match(Pf))) {
      this.ga = !!b;
      Sf(this, c[1] || "", !0);
      var d = c[2] || "";
      Tf(this);
      this.vc = d ? decodeURIComponent(d) : "";
      d = c[3] || "";
      Tf(this);
      this.Fb = d ? decodeURIComponent(d) : "";
      Uf(this, c[4]);
      d = c[5] || "";
      Tf(this);
      this.mc = d ? decodeURIComponent(d) : "";
      Vf(this, c[6] || "", !0);
      c = c[7] || "";
      Tf(this);
      this.ic = c ? decodeURIComponent(c) : ""
    }else {
      this.ga = !!b, this.Ga = new Wf(null, 0, this.ga)
    }
  }
}
q = Rf.prototype;
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
  b && a.push(Xf(b, Yf), ":");
  if(b = this.Fb) {
    a.push("//");
    var c = this.vc;
    c && a.push(Xf(c, Yf), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.pc;
    null != b && a.push(":", String(b))
  }
  if(b = this.mc) {
    this.Fb && "/" != b.charAt(0) && a.push("/"), a.push(Xf(b, "/" == b.charAt(0) ? Zf : $f))
  }
  (b = this.Ga.toString()) && a.push("?", b);
  (b = this.ic) && a.push("#", Xf(b, ag));
  return a.join("")
};
q.dc = function() {
  return new Rf(this)
};
function Sf(a, b, c) {
  Tf(a);
  a.xb = c ? b ? decodeURIComponent(b) : "" : b;
  a.xb && (a.xb = a.xb.replace(/:$/, ""))
}
function Uf(a, b) {
  Tf(a);
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
function Vf(a, b, c) {
  Tf(a);
  b instanceof Wf ? (a.Ga = b, a.Ga.nd(a.ga)) : (c || (b = Xf(b, bg)), a.Ga = new Wf(b, 0, a.ga))
}
function Tf(a) {
  if(a.of) {
    throw Error("Tried to modify a read-only Uri");
  }
}
q.nd = function(a) {
  this.ga = a;
  this.Ga && this.Ga.nd(a);
  return this
};
function Xf(a, b) {
  return u(a) ? encodeURI(a).replace(b, cg) : null
}
function cg(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Yf = /[#\/\?@]/g, $f = /[\#\?:]/g, Zf = /[\#\?]/g, bg = /[\#\?@]/g, ag = /#/g;
function Wf(a, b, c) {
  this.fa = a || null;
  this.ga = !!c
}
function dg(a) {
  if(!a.I && (a.I = new Mf, a.v = 0, a.fa)) {
    for(var b = a.fa.split("\x26"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("\x3d"), e = null, f = null;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = eg(a, e);
      a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
  }
}
q = Wf.prototype;
q.I = null;
q.v = null;
q.add = function(a, b) {
  dg(this);
  this.fa = null;
  a = eg(this, a);
  var c = this.I.get(a);
  c || this.I.set(a, c = []);
  c.push(b);
  this.v++;
  return this
};
q.remove = function(a) {
  dg(this);
  a = eg(this, a);
  return this.I.Db(a) ? (this.fa = null, this.v -= this.I.get(a).length, this.I.remove(a)) : !1
};
q.Db = function(a) {
  dg(this);
  a = eg(this, a);
  return this.I.Db(a)
};
q.qb = function() {
  dg(this);
  for(var a = this.I.Ba(), b = this.I.qb(), c = [], d = 0;d < b.length;d++) {
    for(var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d])
    }
  }
  return c
};
q.Ba = function(a) {
  dg(this);
  var b = [];
  if(a) {
    this.Db(a) && (b = Ja(b, this.I.get(eg(this, a))))
  }else {
    a = this.I.Ba();
    for(var c = 0;c < a.length;c++) {
      b = Ja(b, a[c])
    }
  }
  return b
};
q.set = function(a, b) {
  dg(this);
  this.fa = null;
  a = eg(this, a);
  this.Db(a) && (this.v -= this.I.get(a).length);
  this.I.set(a, [b]);
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
  if(!this.I) {
    return""
  }
  for(var a = [], b = this.I.qb(), c = 0;c < b.length;c++) {
    for(var d = b[c], e = encodeURIComponent(String(d)), d = this.Ba(d), f = 0;f < d.length;f++) {
      var h = e;
      "" !== d[f] && (h += "\x3d" + encodeURIComponent(String(d[f])));
      a.push(h)
    }
  }
  return this.fa = a.join("\x26")
};
q.dc = function() {
  var a = new Wf;
  a.fa = this.fa;
  this.I && (a.I = this.I.dc(), a.v = this.v);
  return a
};
function eg(a, b) {
  var c = String(b);
  a.ga && (c = c.toLowerCase());
  return c
}
q.nd = function(a) {
  a && !this.ga && (dg(this), this.fa = null, Lf(this.I, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.fa = null, this.I.set(eg(this, d), Ka(a)), this.v += a.length))
  }, this));
  this.ga = a
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function fg(a, b) {
  this.Ia = [];
  this.pe = a;
  this.Wd = b || null
}
q = fg.prototype;
q.ua = !1;
q.Hb = !1;
q.Bc = !1;
q.Fe = !1;
q.od = !1;
q.Wb = 0;
q.cancel = function(a) {
  if(this.ua) {
    this.Ob instanceof fg && this.Ob.cancel()
  }else {
    if(this.qa) {
      var b = this.qa;
      delete this.qa;
      a ? b.cancel(a) : (b.Wb--, 0 >= b.Wb && b.cancel())
    }
    this.pe ? this.pe.call(this.Wd, this) : this.od = !0;
    this.ua || this.Yd(new gg(this))
  }
};
q.Td = function(a, b) {
  this.Bc = !1;
  hg(this, a, b)
};
function hg(a, b, c) {
  a.ua = !0;
  a.Ob = c;
  a.Hb = !b;
  ig(a)
}
function jg(a) {
  if(a.ua) {
    if(!a.od) {
      throw new kg(a);
    }
    a.od = !1
  }
}
q.ra = function(a) {
  jg(this);
  hg(this, !0, a)
};
q.Yd = function(a) {
  jg(this);
  hg(this, !1, a)
};
function lg(a, b, c, d) {
  a.Ia.push([b, c, d]);
  a.ua && ig(a)
}
function mg(a, b) {
  var c = w(b.He, b);
  lg(a, c, null, void 0)
}
q.He = function(a) {
  var b = new fg;
  lg(this, b.ra, b.Yd, b);
  a && (b.qa = this, this.Wb++);
  return b
};
function ng(a) {
  return Ha(a.Ia, function(a) {
    return ga(a[1])
  })
}
function ig(a) {
  a.rd && (a.ua && ng(a)) && (s.clearTimeout(a.rd), delete a.rd);
  a.qa && (a.qa.Wb--, delete a.qa);
  for(var b = a.Ob, c = !1, d = !1;a.Ia.length && !a.Bc;) {
    var e = a.Ia.shift(), f = e[0], h = e[1], e = e[2];
    if(f = a.Hb ? h : f) {
      try {
        var k = f.call(e || a.Wd, b);
        void 0 !== k && (a.Hb = a.Hb && (k == b || k instanceof Error), a.Ob = b = k);
        b instanceof fg && (d = !0, a.Bc = !0)
      }catch(l) {
        b = l, a.Hb = !0, ng(a) || (c = !0)
      }
    }
  }
  a.Ob = b;
  d && (lg(b, w(a.Td, a, !0), w(a.Td, a, !1)), b.Fe = !0);
  c && (a.rd = s.setTimeout(function() {
    throw b;
  }, 0))
}
function kg(a) {
  ra.call(this);
  this.ef = a
}
qa(kg, ra);
kg.prototype.message = "Deferred has already fired";
kg.prototype.name = "AlreadyCalledError";
function gg(a) {
  ra.call(this);
  this.ef = a
}
qa(gg, ra);
gg.prototype.message = "Deferred was cancelled";
gg.prototype.name = "CancelledError";
function og(a, b) {
  af.call(this);
  this.tb = a || 1;
  this.Rb = b || s;
  this.Cc = w(this.Df, this);
  this.ad = pa()
}
qa(og, Cf);
q = og.prototype;
q.enabled = !1;
q.Ja = null;
q.Df = function() {
  if(this.enabled) {
    var a = pa() - this.ad;
    0 < a && a < 0.8 * this.tb ? this.Ja = this.Rb.setTimeout(this.Cc, this.tb - a) : (this.dispatchEvent(pg), this.enabled && (this.Ja = this.Rb.setTimeout(this.Cc, this.tb), this.ad = pa()))
  }
};
q.start = function() {
  this.enabled = !0;
  this.Ja || (this.Ja = this.Rb.setTimeout(this.Cc, this.tb), this.ad = pa())
};
q.stop = function() {
  this.enabled = !1;
  this.Ja && (this.Rb.clearTimeout(this.Ja), this.Ja = null)
};
q.B = function() {
  og.ka.B.call(this);
  this.stop();
  delete this.Rb
};
var pg = "tick";
function qg(a, b) {
  if(!ga(a)) {
    if(a && "function" == typeof a.handleEvent) {
      a = w(a.handleEvent, a)
    }else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : s.setTimeout(a, b || 0)
}
;function rg(a, b, c) {
  af.call(this);
  this.bd = a;
  this.tb = b || 0;
  this.Ib = c;
  this.Ie = w(this.hf, this)
}
qa(rg, af);
q = rg.prototype;
q.Jb = 0;
q.B = function() {
  rg.ka.B.call(this);
  this.stop();
  delete this.bd;
  delete this.Ib
};
q.start = function(a) {
  this.stop();
  this.Jb = qg(this.Ie, void 0 !== a ? a : this.tb)
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
var sg, tg = !Me && !Y || Y && Y && 9 <= $e || Me && Ye("1.9.1");
Y && Ye("9");
function ug(a) {
  return a ? new vg(9 == a.nodeType ? a : a.ownerDocument || a.document) : sg || (sg = new vg)
}
function wg(a, b, c) {
  function d(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(var e = 1;e < c.length;e++) {
    var f = c[e];
    !fa(f) || ha(f) && 0 < f.nodeType ? d(f) : Fa(xg(f) ? Ka(f) : f, d)
  }
}
function yg(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function xg(a) {
  if(a && "number" == typeof a.length) {
    if(ha(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(ga(a)) {
      return"function" == typeof a.item
    }
  }
  return!1
}
function vg(a) {
  this.Eb = a || s.document || document
}
q = vg.prototype;
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
  wg(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
};
q.ce = function(a) {
  return tg && void 0 != a.children ? a.children : Ga(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
function zg(a) {
  af.call(this);
  this.Ib = a;
  this.G = []
}
qa(zg, af);
var Ag = [];
function Bg(a, b, c, d, e, f) {
  if(ea(c)) {
    for(var h = 0;h < c.length;h++) {
      Bg(a, b, c[h], d, e, f)
    }
  }else {
    b = vf(b, c, d || a, e, f || a.Ib || a), a.G.push(b)
  }
}
zg.prototype.B = function() {
  zg.ka.B.call(this);
  Fa(this.G, xf);
  this.G.length = 0
};
zg.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Cg(a) {
  return Dg(a || arguments.callee.caller, [])
}
function Dg(a, b) {
  var c = [];
  if(0 <= Ea(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Eg(a) + "(");
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
            f = (f = Eg(f)) ? f : "[fn]";
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
        c.push(Dg(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Eg(a) {
  if(Fg[a]) {
    return Fg[a]
  }
  a = String(a);
  if(!Fg[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Fg[a] = b ? b[1] : "[Anonymous]"
  }
  return Fg[a]
}
var Fg = {};
function Gg(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Gg.prototype.Af = 0;
Gg.prototype.$d = null;
Gg.prototype.Zd = null;
var Hg = 0;
Gg.prototype.reset = function(a, b, c, d, e) {
  this.Af = "number" == typeof e ? e : Hg++;
  this.pg = d || pa();
  this.Lb = a;
  this.sf = b;
  this.lg = c;
  delete this.$d;
  delete this.Zd
};
Gg.prototype.Ae = function(a) {
  this.Lb = a
};
function Ig(a) {
  this.le = a
}
Ig.prototype.qa = null;
Ig.prototype.Lb = null;
Ig.prototype.Dc = null;
Ig.prototype.de = null;
function Jg(a, b) {
  this.name = a;
  this.value = b
}
Jg.prototype.toString = g("name");
var Kg = new Jg("SEVERE", 1E3), Lg = new Jg("WARNING", 900), Mg = new Jg("INFO", 800), Ng = new Jg("CONFIG", 700), Og = new Jg("FINE", 500), Pg = new Jg("FINEST", 300);
q = Ig.prototype;
q.getName = g("le");
q.getParent = g("qa");
q.ce = function() {
  this.Dc || (this.Dc = {});
  return this.Dc
};
q.Ae = function(a) {
  this.Lb = a
};
function Qg(a) {
  if(a.Lb) {
    return a.Lb
  }
  if(a.qa) {
    return Qg(a.qa)
  }
  Ca("Root logger has no level set.");
  return null
}
q.log = function(a, b, c) {
  if(a.value >= Qg(this).value) {
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
  var d = new Gg(a, String(b), this.le);
  if(c) {
    d.$d = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var h;
      var k = ca("window.location.href");
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
        }catch(v) {
          m = "Not available", n = !0
        }
        h = !n && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:l, fileName:m, stack:c.stack || "Not available"}
      }
      e = "Message: " + ta(h.message) + '\nUrl: \x3ca href\x3d"view-source:' + h.fileName + '" target\x3d"_new"\x3e' + h.fileName + "\x3c/a\x3e\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + ta(h.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + ta(Cg(f) + "-\x3e ")
    }catch(G) {
      e = "Exception trying to expose exception! You win, we lose. " + G
    }
    d.Zd = e
  }
  return d
};
q.info = function(a, b) {
  this.log(Mg, a, b)
};
function Rg(a) {
  Z.log(Og, a, void 0)
}
function Sg(a) {
  Z.log(Pg, a, void 0)
}
var Tg = {}, Ug = null;
function Vg(a) {
  Ug || (Ug = new Ig(""), Tg[""] = Ug, Ug.Ae(Ng));
  var b;
  if(!(b = Tg[a])) {
    b = new Ig(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Vg(a.substr(0, c));
    c.ce()[d] = b;
    b.qa = c;
    Tg[a] = b
  }
  return b
}
;function Wg() {
  af.call(this);
  this.md = {}
}
qa(Wg, af);
Wg.prototype.cd = Vg("goog.messaging.AbstractChannel");
Wg.prototype.ta = function(a) {
  a && a()
};
Wg.prototype.va = p(!0);
Wg.prototype.B = function() {
  Wg.ka.B.call(this);
  delete this.cd;
  delete this.md;
  delete this.Xd
};
var Xg = {1:"NativeMessagingTransport", 2:"FrameElementMethodTransport", 3:"IframeRelayTransport", 4:"IframePollingTransport", 5:"FlashTransport", 6:"NixTransport"}, $ = {sd:"cn", Ce:"at", Ee:"rat", Ub:"pu", La:"ifrid", Ab:"tp", wc:"lru", Tb:"pru", Va:"lpu", Wa:"ppu", yc:"ph", xc:"osh", zc:"role", De:"nativeProtocolVersion"}, Yg = [$.Ub, $.wc, $.Tb, $.Va, $.Wa], Zg = {};
function $g(a) {
  for(var b = ah, c = b.length, d = "";0 < a--;) {
    d += b.charAt(Math.floor(Math.random() * c))
  }
  return d
}
var ah = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", Z = Vg("goog.net.xpc");
function bh(a) {
  af.call(this);
  this.Aa = a || ug()
}
qa(bh, af);
bh.prototype.yb = 0;
bh.prototype.w = function() {
  return this.Aa.w()
};
bh.prototype.getName = function() {
  return Xg[this.yb] || ""
};
function ch(a, b) {
  bh.call(this, b);
  this.k = a;
  this.Nb = [];
  this.ff = w(this.gf, this)
}
qa(ch, bh);
q = ch.prototype;
q.yb = 2;
q.kd = !1;
q.Ja = 0;
q.ta = function() {
  0 == dh(this.k) ? (this.Ca = this.k.sb, this.Ca.XPC_toOuter = w(this.ee, this)) : this.xd()
};
q.xd = function() {
  var a = !0;
  try {
    this.Ca || (this.Ca = this.w().frameElement), this.Ca && this.Ca.XPC_toOuter && (this.fd = this.Ca.XPC_toOuter, this.Ca.XPC_toOuter.XPC_toInner = w(this.ee, this), a = !1, this.send("tp", "SETUP_ACK"), this.k.Ea())
  }catch(b) {
    Z.log(Kg, "exception caught while attempting setup: " + b, void 0)
  }
  a && (this.wd || (this.wd = w(this.xd, this)), this.w().setTimeout(this.wd, 100))
};
q.qd = function(a) {
  if(0 != dh(this.k) || this.k.va() || "SETUP_ACK" != a) {
    throw Error("Got unexpected transport message.");
  }
  this.fd = this.Ca.XPC_toOuter.XPC_toInner;
  this.k.Ea()
};
q.ee = function(a, b) {
  this.kd || 0 != this.Nb.length ? (this.Nb.push({Cf:a, jd:b}), 1 == this.Nb.length && (this.Ja = this.w().setTimeout(this.ff, 1))) : this.k.Ka(a, b)
};
q.gf = function() {
  for(;this.Nb.length;) {
    var a = this.Nb.shift();
    this.k.Ka(a.Cf, a.jd)
  }
};
q.send = function(a, b) {
  this.kd = !0;
  this.fd(a, b);
  this.kd = !1
};
q.B = function() {
  ch.ka.B.call(this);
  this.Ca = this.fd = null
};
function eh(a, b) {
  bh.call(this, b);
  this.k = a;
  this.Pb = this.k.r[$.Wa];
  this.yf = this.k.r[$.Va];
  this.tc = []
}
var fh, gh;
qa(eh, bh);
q = eh.prototype;
q.vf = 5;
q.yb = 4;
q.Ia = 0;
q.zb = !1;
q.Ya = !1;
q.xe = null;
function hh(a) {
  return"googlexpc_" + a.k.name + "_msg"
}
function ih(a) {
  return"googlexpc_" + a.k.name + "_ack"
}
function jh(a) {
  try {
    if(!a.lb && kh(a.k)) {
      return a.k.Fa.frames || {}
    }
  }catch(b) {
    Rg("error retrieving peer frames")
  }
  return{}
}
q.ta = function() {
  if(!this.lb && kh(this.k)) {
    Rg("transport connect called");
    if(!this.Ya) {
      Rg("initializing...");
      var a = hh(this);
      this.vb = lh(this, a);
      this.dd = this.w().frames[a];
      a = ih(this);
      this.gb = lh(this, a);
      this.Ac = this.w().frames[a];
      this.Ya = !0
    }
    if(mh(this, hh(this)) && mh(this, ih(this))) {
      Rg("foreign frames present"), this.ie = new nh(this, jh(this)[hh(this)], w(this.xf, this)), this.td = new nh(this, jh(this)[ih(this)], w(this.wf, this)), this.Ad()
    }else {
      Sg("foreign frames not (yet) present");
      if(1 == dh(this.k)) {
        this.xe || 0 < this.vf-- || (Sg("Inner peer reconnect triggered."), this.k.name = $g(10), Sg("switching channels: " + this.k.name), oh(this), this.Ya = !1, this.xe = lh(this, "googlexpc_reconnect_" + this.k.name))
      }else {
        if(0 == dh(this.k)) {
          Sg("outerPeerReconnect called");
          for(var a = jh(this), b = a.length, c = 0;c < b;c++) {
            var d;
            try {
              a[c] && a[c].name && (d = a[c].name)
            }catch(e) {
            }
            if(d) {
              var f = d.split("_");
              if(3 == f.length && "googlexpc" == f[0] && "reconnect" == f[1]) {
                this.k.name = f[2];
                oh(this);
                this.Ya = !1;
                break
              }
            }
          }
        }
      }
      this.w().setTimeout(w(this.ta, this), 100)
    }
  }
};
function lh(a, b) {
  Sg("constructing sender frame: " + b);
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
function oh(a) {
  Sg("deconstructSenderFrames called");
  a.vb && (a.vb.parentNode.removeChild(a.vb), a.vb = null, a.dd = null);
  a.gb && (a.gb.parentNode.removeChild(a.gb), a.gb = null, a.Ac = null)
}
function mh(a, b) {
  Sg("checking for receive frame: " + b);
  try {
    var c = jh(a)[b];
    if(!c || 0 != c.location.href.indexOf(a.yf)) {
      return!1
    }
  }catch(d) {
    return!1
  }
  return!0
}
q.Ad = function() {
  var a = jh(this);
  a[ih(this)] && a[hh(this)] ? (this.je = new ph(this.Pb, this.dd), this.Vb = new ph(this.Pb, this.Ac), Rg("local frames ready"), this.w().setTimeout(w(function() {
    this.je.send("SETUP");
    this.zb = this.og = !0;
    Rg("SETUP sent")
  }, this), 100)) : (this.zd || (this.zd = w(this.Ad, this)), this.w().setTimeout(this.zd, 100), Rg("local frames not (yet) present"))
};
function qh(a) {
  if(a.ld && a.ve) {
    if(a.k.Ea(), a.kb) {
      Rg("delivering queued messages (" + a.kb.length + ")");
      for(var b = 0, c;b < a.kb.length;b++) {
        c = a.kb[b], a.k.Ka(c.Bf, c.jd)
      }
      delete a.kb
    }
  }else {
    Sg("checking if connected: ack sent:" + a.ld + ", ack rcvd: " + a.ve)
  }
}
q.xf = function(a) {
  Sg("msg received: " + a);
  if("SETUP" == a) {
    this.Vb && (this.Vb.send("SETUP_ACK"), Sg("SETUP_ACK sent"), this.ld = !0, qh(this))
  }else {
    if(this.k.va() || this.ld) {
      var b = a.indexOf("|"), c = a.substring(0, b);
      a = a.substring(b + 1);
      b = c.indexOf(",");
      if(-1 == b) {
        var d;
        this.Vb.send("ACK:" + c);
        rh(this, a)
      }else {
        d = c.substring(0, b), this.Vb.send("ACK:" + d), c = c.substring(b + 1).split("/"), b = parseInt(c[0], 10), c = parseInt(c[1], 10), 1 == b && (this.hd = []), this.hd.push(a), b == c && (rh(this, this.hd.join("")), delete this.hd)
      }
    }else {
      Z.log(Lg, "received msg, but channel is not connected", void 0)
    }
  }
};
q.wf = function(a) {
  Sg("ack received: " + a);
  "SETUP_ACK" == a ? (this.zb = !1, this.ve = !0, qh(this)) : this.k.va() ? this.zb ? parseInt(a.split(":")[1], 10) == this.Ia ? (this.zb = !1, sh(this)) : Z.log(Lg, "got ack with wrong sequence", void 0) : Z.log(Lg, "got unexpected ack", void 0) : Z.log(Lg, "received ack, but channel not connected", void 0)
};
function sh(a) {
  if(!a.zb && a.tc.length) {
    var b = a.tc.shift();
    ++a.Ia;
    a.je.send(a.Ia + b);
    Sg("msg sent: " + a.Ia + b);
    a.zb = !0
  }
}
function rh(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), c = b.substring(c + 1);
  a.k.va() ? a.k.Ka(d, c) : ((a.kb || (a.kb = [])).push({Bf:d, jd:c}), Sg("queued delivery"))
}
q.Sb = 3800;
q.send = function(a, b) {
  var c = a + ":" + b;
  if(!Y || b.length <= this.Sb) {
    this.tc.push("|" + c)
  }else {
    for(var d = b.length, e = Math.ceil(d / this.Sb), f = 0, h = 1;f < d;) {
      this.tc.push("," + h + "/" + e + "|" + c.substr(f, this.Sb)), h++, f += this.Sb
    }
  }
  sh(this)
};
q.B = function() {
  eh.ka.B.call(this);
  var a = th;
  Ia(a, this.ie);
  Ia(a, this.td);
  this.ie = this.td = null;
  yg(this.vb);
  yg(this.gb);
  this.dd = this.Ac = this.vb = this.gb = null
};
var th = [], uh = w(function() {
  var a = th, b, c = !1;
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
    if(Z.info("receive_() failed: " + l), b = b.$.k, Z.info("Transport Error"), b.close(), !a.length) {
      return
    }
  }
  a = pa();
  c && (fh = a);
  gh = window.setTimeout(uh, 1E3 > a - fh ? 10 : 100)
}, eh);
function vh() {
  Rg("starting receive-timer");
  fh = pa();
  gh && window.clearTimeout(gh);
  gh = window.setTimeout(uh, 10)
}
function ph(a, b) {
  this.Pb = a;
  this.ze = b;
  this.Yc = 0
}
ph.prototype.send = function(a) {
  this.Yc = ++this.Yc % 2;
  a = this.Pb + "#" + this.Yc + encodeURIComponent(a);
  try {
    Ne ? this.ze.location.href = a : this.ze.location.replace(a)
  }catch(b) {
    Z.log(Kg, "sending failed", b)
  }
  vh()
};
function nh(a, b, c) {
  this.$ = a;
  this.ue = b;
  this.Je = c;
  this.Ud = this.ue.location.href.split("#")[0] + "#INITIAL";
  th.push(this);
  vh()
}
;function wh(a, b) {
  bh.call(this, b);
  this.k = a;
  this.tf = this.k.r[$.Tb];
  this.se = this.k.r[$.La];
  Ne && xh()
}
qa(wh, bh);
if(Ne) {
  var yh = [], zh = 0, xh = function() {
    zh || (zh = window.setTimeout(function() {
      Ah()
    }, 1E3))
  }, Ah = function(a) {
    var b = pa();
    for(a = a || 3E3;yh.length && b - yh[0].timestamp >= a;) {
      var c = yh.shift().nf;
      yg(c);
      Sg("iframe removed")
    }
    zh = window.setTimeout(Bh, 1E3)
  }, Bh = function() {
    Ah()
  }
}
var Ch = {};
q = wh.prototype;
q.yb = 3;
q.ta = function() {
  this.w().xpcRelay || (this.w().xpcRelay = Dh);
  this.send("tp", "SETUP")
};
function Dh(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), e = b.substr(c + 1);
  if(Y && -1 != (c = d.indexOf("|"))) {
    var f = d.substr(0, c), d = d.substr(c + 1), c = d.indexOf("+"), h = d.substr(0, c), c = parseInt(d.substr(c + 1), 10), k = Ch[h];
    k || (k = Ch[h] = {be:[], we:0, ae:0});
    -1 != d.indexOf("++") && (k.ae = c + 1);
    k.be[c] = e;
    k.we++;
    if(k.we != k.ae) {
      return
    }
    e = k.be.join("");
    delete Ch[h]
  }else {
    var f = d
  }
  Zg[a].Ka(f, decodeURIComponent(e))
}
q.qd = function(a) {
  "SETUP" == a ? (this.send("tp", "SETUP_ACK"), this.k.Ea()) : "SETUP_ACK" == a && this.k.Ea()
};
q.send = function(a, b) {
  var c = encodeURIComponent(b), d = c.length;
  if(Y && 1800 < d) {
    for(var e = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ pa()).toString(36), f = 0, h = 0;f < d;h++) {
      var k = c.substr(f, 1800), f = f + 1800;
      Eh(this, a, k, e + (f >= d ? "++" : "+") + h)
    }
  }else {
    Eh(this, a, c)
  }
};
function Eh(a, b, c, d) {
  if(Y) {
    var e = a.w().document.createElement("div");
    e.innerHTML = '\x3ciframe onload\x3d"this.xpcOnload()"\x3e\x3c/iframe\x3e';
    e = e.childNodes[0];
    e.xpcOnload = Fh
  }else {
    e = a.w().document.createElement("iframe"), Ne ? yh.push({timestamp:pa(), nf:e}) : rf(e, "load", Fh)
  }
  var f = e.style;
  f.visibility = "hidden";
  f.width = e.style.height = "0px";
  f.position = "absolute";
  f = a.tf;
  f += "#" + a.k.name;
  a.se && (f += "," + a.se);
  f += "|" + b;
  d && (f += "|" + d);
  f += ":" + c;
  e.src = f;
  a.w().document.body.appendChild(e);
  Sg("msg sent: " + f)
}
function Fh() {
  Sg("iframe-load");
  yg(this);
  this.qg = null
}
q.B = function() {
  wh.ka.B.call(this);
  Ne && Ah(0)
};
function Gh(a, b, c, d, e) {
  bh.call(this, c);
  this.k = a;
  this.bb = e || 2;
  this.re = b || "*";
  this.$c = new zg(this);
  this.Mb = new og(100, this.w());
  this.lc = !!d;
  this.Ta = new fg;
  this.Ua = new fg;
  this.Na = new fg;
  this.jf = $g(10);
  this.nc = null;
  this.lc ? 1 == dh(this.k) ? mg(this.Na, this.Ta) : mg(this.Na, this.Ua) : (mg(this.Na, this.Ta), 2 == this.bb && mg(this.Na, this.Ua));
  lg(this.Na, this.ne, null, this);
  this.Na.ra(!0);
  a = this.$c;
  b = this.Mb;
  c = this.he;
  d = pg;
  ea(d) || (Ag[0] = d, d = Ag);
  for(e = 0;e < d.length;e++) {
    var f = rf(b, d[e], c || a, !1, a.Ib || a);
    a.G.push(f)
  }
  Z.info("NativeMessagingTransport created.  protocolVersion\x3d" + this.bb + ", oneSidedHandshake\x3d" + this.lc + ", role\x3d" + dh(this.k))
}
qa(Gh, bh);
Gh.prototype.da = null;
Gh.prototype.Ya = !1;
Gh.prototype.yb = 1;
var Hh = {};
function Ih(a) {
  var b = a.hc.data;
  if(!u(b)) {
    return!1
  }
  var c = b.indexOf("|"), d = b.indexOf(":");
  if(-1 == c || -1 == d) {
    return!1
  }
  var e = b.substring(0, c), c = b.substring(c + 1, d), b = b.substring(d + 1);
  Rg("messageReceived: channel\x3d" + e + ", service\x3d" + c + ", payload\x3d" + b);
  if(d = Zg[e]) {
    return d.Ka(c, b, a.hc.origin), !0
  }
  a = Jh(b)[0];
  for(var f in Zg) {
    if(d = Zg[f], 1 == dh(d) && !d.va() && "tp" == c && ("SETUP" == a || "SETUP_NTPV2" == a)) {
      return Rg("changing channel name to " + e), d.name = e, delete Zg[f], Zg[e] = d, d.Ka(c, b), !0
    }
  }
  Z.info('channel name mismatch; message ignored"');
  return!1
}
q = Gh.prototype;
q.qd = function(a) {
  var b = Jh(a);
  a = b[1];
  switch(b[0]) {
    case "SETUP_ACK":
      Kh(this, 1);
      this.Ta.ua || this.Ta.ra(!0);
      break;
    case "SETUP_ACK_NTPV2":
      2 == this.bb && (Kh(this, 2), this.Ta.ua || this.Ta.ra(!0));
      break;
    case "SETUP":
      Kh(this, 1);
      Lh(this, 1);
      break;
    case "SETUP_NTPV2":
      2 == this.bb && (b = this.da, Kh(this, 2), Lh(this, 2), 1 != b && null == this.nc || this.nc == a || (Z.info("Sending SETUP and changing peer ID to: " + a), Mh(this)), this.nc = a)
  }
};
function Mh(a) {
  if(2 == a.bb && (null == a.da || 2 == a.da)) {
    var b;
    b = "SETUP_NTPV2," + a.jf;
    a.send("tp", b)
  }
  null != a.da && 1 != a.da || a.send("tp", "SETUP")
}
function Lh(a, b) {
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
function Kh(a, b) {
  b > a.da && (a.da = b);
  1 == a.da && (a.Ua.ua || a.lc || a.Ua.ra(!0), a.nc = null)
}
q.ta = function() {
  var a = this.w(), b = ia(a), c = Hh[b];
  "number" == typeof c || (c = 0);
  0 == c && rf(a.postMessage ? a : a.document, "message", Ih, !1, Gh);
  Hh[b] = c + 1;
  this.Ya = !0;
  this.he()
};
q.he = function() {
  var a = 0 == dh(this.k);
  this.lc && a || this.k.va() || this.lb ? this.Mb.stop() : (this.Mb.start(), Mh(this))
};
q.send = function(a, b) {
  var c = this.k.Fa;
  c ? (this.send = function(a, b) {
    var f = this, h = this.k.name;
    this.uc = qg(function() {
      f.uc = 0;
      try {
        var k = c.postMessage ? c : c.document;
        k.postMessage ? (k.postMessage(h + "|" + a + ":" + b, f.re), Rg("send(): service\x3d" + a + " payload\x3d" + b + " to hostname\x3d" + f.re)) : Z.log(Lg, "Peer window had no postMessage function.", void 0)
      }catch(l) {
        Z.log(Lg, "Error performing postMessage, ignoring.", l)
      }
    }, 0)
  }, this.send(a, b)) : Rg("send(): window not ready")
};
q.ne = function() {
  this.k.Ea(1 == this.bb || 1 == this.da ? 200 : void 0)
};
q.B = function() {
  if(this.Ya) {
    var a = this.w(), b = ia(a), c = Hh[b];
    Hh[b] = c - 1;
    1 == c && wf(a.postMessage ? a : a.document, "message", Ih, !1, Gh)
  }
  this.uc && (s.clearTimeout(this.uc), this.uc = 0);
  df(this.$c);
  delete this.$c;
  df(this.Mb);
  delete this.Mb;
  this.Ta.cancel();
  delete this.Ta;
  this.Ua.cancel();
  delete this.Ua;
  this.Na.cancel();
  delete this.Na;
  delete this.send;
  Gh.ka.B.call(this)
};
function Jh(a) {
  a = a.split(",");
  a[1] = a[1] || null;
  return a
}
;function Nh(a, b) {
  bh.call(this, b);
  this.k = a;
  this.yd = a[$.Ce] || "";
  this.ye = a[$.Ee] || "";
  var c = this.w();
  if(!c.nix_setup_complete) {
    var d = "Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport \x3d transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth \x3d auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken \x3d m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport." + Oh + "(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport." + 
    Ph + "(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap \x3d New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper \x3d wrap\nEnd Function";
    try {
      c.execScript(d, "vbscript"), c.nix_setup_complete = !0
    }catch(e) {
      Z.log(Kg, "exception caught while attempting global setup: " + e, void 0)
    }
  }
  this[Oh] = this.mf;
  this[Ph] = this.df
}
qa(Nh, bh);
var Oh = "GCXPC____NIXJS_handle_message", Ph = "GCXPC____NIXJS_create_channel";
q = Nh.prototype;
q.yb = 6;
q.ub = !1;
q.Sa = null;
q.ta = function() {
  0 == dh(this.k) ? this.vd() : this.ud()
};
q.vd = function() {
  if(!this.ub) {
    var a = this.k.sb;
    try {
      a.contentWindow.opener = (0,this.w().GCXPC____NIXVBS_get_wrapper)(this, this.yd), this.ub = !0
    }catch(b) {
      Z.log(Kg, "exception caught while attempting setup: " + b, void 0)
    }
    this.ub || this.w().setTimeout(w(this.vd, this), 100)
  }
};
q.ud = function() {
  if(!this.ub) {
    try {
      var a = this.w().opener;
      if(a && "GCXPC____NIXVBS_container" in a) {
        this.Sa = a;
        if(this.Sa.GetAuthToken() != this.ye) {
          Z.log(Kg, "Invalid auth token from other party", void 0);
          return
        }
        this.Sa.CreateChannel((0,this.w().GCXPC____NIXVBS_get_wrapper)(this, this.yd));
        this.ub = !0;
        this.k.Ea()
      }
    }catch(b) {
      Z.log(Kg, "exception caught while attempting setup: " + b, void 0);
      return
    }
    this.ub || this.w().setTimeout(w(this.ud, this), 100)
  }
};
q.df = function(a) {
  "unknown" == typeof a && "GCXPC____NIXVBS_container" in a || Z.log(Kg, "Invalid NIX channel given to createChannel_", void 0);
  this.Sa = a;
  this.Sa.GetAuthToken() != this.ye ? Z.log(Kg, "Invalid auth token from other party", void 0) : this.k.Ea()
};
q.mf = function(a, b) {
  this.w().setTimeout(w(function() {
    this.k.Ka(a, b)
  }, this), 1)
};
q.send = function(a, b) {
  "unknown" !== typeof this.Sa && Z.log(Kg, "NIX channel not connected", void 0);
  this.Sa.SendMessage(a, b)
};
q.B = function() {
  Nh.ka.B.call(this);
  this.Sa = null
};
function Qh(a, b) {
  Wg.call(this);
  for(var c = 0, d;d = Yg[c];c++) {
    if(d in a && !/^https?:\/\//.test(a[d])) {
      throw Error("URI " + a[d] + " is invalid for field " + d);
    }
  }
  this.r = a;
  this.name = this.r[$.sd] || $g(10);
  this.Aa = b || ug();
  this.ec = [];
  this.oc = new zg(this);
  a[$.Va] = a[$.Va] || Qf(this.Aa.w().location.href) + "/robots.txt";
  a[$.Wa] = a[$.Wa] || Qf(a[$.Ub] || "") + "/robots.txt";
  Zg[this.name] = this;
  rf(window, "unload", Rh);
  Z.info("CrossPageChannel created: " + this.name)
}
qa(Qh, Wg);
var Sh = /^%*tp$/, Th = /^%+tp$/;
q = Qh.prototype;
q.Oa = null;
q.xa = null;
q.$ = null;
q.pd = 1;
q.va = function() {
  return 2 == this.pd
};
q.Fa = null;
q.sb = null;
function kh(a) {
  try {
    return!!a.Fa && !Boolean(a.Fa.closed)
  }catch(b) {
    return!1
  }
}
function Uh(a, b, c) {
  Z.info("createPeerIframe()");
  var d = a.r[$.La];
  d || (d = a.r[$.La] = "xpcpeer" + $g(4));
  var e = ug(b).createElement("IFRAME");
  e.id = e.name = d;
  c ? c(e) : e.style.width = e.style.height = "100%";
  Vh(a);
  a.xa = new fg(void 0, a);
  var f = Wh(a);
  Bg(a.oc, e, "load", a.xa.ra, !1, a.xa);
  Me || Ne ? window.setTimeout(w(function() {
    b.appendChild(e);
    e.src = f.toString();
    Z.info("peer iframe created (" + d + ")")
  }, a), 1) : (e.src = f.toString(), b.appendChild(e), Z.info("peer iframe created (" + d + ")"))
}
function Vh(a) {
  a.xa && (a.xa.cancel(), a.xa = null);
  a.ec.length = 0;
  a = a.oc;
  Fa(a.G, xf);
  a.G.length = 0
}
function Wh(a) {
  var b = a.r[$.Ub];
  u(b) && (b = a.r[$.Ub] = new Rf(b));
  var c = {};
  c[$.sd] = a.name;
  c[$.Ab] = a.r[$.Ab];
  c[$.xc] = a.r[$.xc];
  a.r[$.wc] && (c[$.Tb] = a.r[$.wc]);
  a.r[$.Va] && (c[$.Wa] = a.r[$.Va]);
  a.r[$.Wa] && (c[$.Va] = a.r[$.Wa]);
  (a = a.r[$.zc]) && (c[$.zc] = 1 == a ? 0 : 1);
  a = b;
  c = Ef(c);
  Tf(a);
  a.Ga.set("xpc", c);
  return b
}
q.ta = function(a) {
  this.Xc = a || da;
  this.xa ? lg(this.xa, this.Sd, null, void 0) : this.Sd()
};
q.Sd = function() {
  Z.info("continueConnection_()");
  this.xa = null;
  this.r[$.La] && (this.sb = u(this.r[$.La]) ? this.Aa.Eb.getElementById(this.r[$.La]) : this.r[$.La]);
  if(this.sb) {
    var a = this.sb.contentWindow;
    a || (a = window.frames[this.r[$.La]]);
    this.Fa = a
  }
  if(!this.Fa) {
    if(window == window.top) {
      throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
    }
    this.Fa = window.parent
  }
  if(!this.$) {
    if(!this.r[$.Ab]) {
      var a = this.r, b = $.Ab, c;
      if(ga(document.postMessage) || ga(window.postMessage) || Y && window.postMessage) {
        c = 1
      }else {
        if(Me) {
          c = 2
        }else {
          if(Y && this.r[$.Tb]) {
            c = 3
          }else {
            var d;
            if(d = Y) {
              d = !1;
              try {
                c = window.opener, window.opener = {}, d = jf(window, "opener"), window.opener = c
              }catch(e) {
              }
            }
            c = d ? 6 : 4
          }
        }
      }
      a[b] = c
    }
    switch(this.r[$.Ab]) {
      case 1:
        this.$ = new Gh(this, this.r[$.yc], this.Aa, !!this.r[$.xc], this.r[$.De] || 2);
        break;
      case 6:
        this.$ = new Nh(this, this.Aa);
        break;
      case 2:
        this.$ = new ch(this, this.Aa);
        break;
      case 3:
        this.$ = new wh(this, this.Aa);
        break;
      case 4:
        this.$ = new eh(this, this.Aa)
    }
    if(this.$) {
      Z.info("Transport created: " + this.$.getName())
    }else {
      throw Error("CrossPageChannel: No suitable transport found!");
    }
  }
  for(this.$.ta();0 < this.ec.length;) {
    this.ec.shift()()
  }
};
q.close = function() {
  Vh(this);
  this.pd = 3;
  df(this.$);
  this.Xc = this.$ = null;
  df(this.Oa);
  this.Oa = null;
  Z.info('Channel "' + this.name + '" closed')
};
q.Ea = function(a) {
  this.va() || this.Oa && this.Oa.fe() || (this.pd = 2, Z.info('Channel "' + this.name + '" connected'), df(this.Oa), a ? (this.Oa = new rg(this.Xc, a), this.Oa.start()) : (this.Oa = null, this.Xc()))
};
q.ne = Qh.prototype.Ea;
q.send = function(a, b) {
  this.va() ? kh(this) ? (ha(b) && (b = Ef(b)), this.$.send(Xh(a), b)) : (Z.log(Kg, "Peer has disappeared.", void 0), this.close()) : Z.log(Kg, "Can't send. Channel not connected.", void 0)
};
q.Ka = function(a, b, c) {
  if(this.xa) {
    this.ec.push(w(this.Ka, this, a, b, c))
  }else {
    var d = this.r[$.yc];
    if(/^[\s\xa0]*$/.test(null == c ? "" : String(c)) || /^[\s\xa0]*$/.test(null == d ? "" : String(d)) || c == this.r[$.yc]) {
      if(this.lb) {
        Z.log(Lg, "CrossPageChannel::xpcDeliver(): Disposed.", void 0)
      }else {
        if(a && "tp" != a) {
          if(this.va()) {
            if(a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = Th.test(a) ? a.substring(1) : a, c = this.md[a], c || (this.Xd ? c = {ra:oa(this.Xd, a), oe:ha(b)} : (this.cd.log(Lg, 'Unknown service name "' + a + '"', void 0), c = null)), c) {
              var e;
              a: {
                if((d = c.oe) && u(b)) {
                  try {
                    e = Df(b);
                    break a
                  }catch(f) {
                    this.cd.log(Lg, "Expected JSON payload for " + a + ', was "' + b + '"', void 0);
                    e = null;
                    break a
                  }
                }else {
                  if(!d && !u(b)) {
                    e = Ef(b);
                    break a
                  }
                }
                e = b
              }
              null != e && c.ra(e)
            }
          }else {
            Z.info("CrossPageChannel::xpcDeliver(): Not connected.")
          }
        }else {
          this.$.qd(b)
        }
      }
    }else {
      Z.log(Lg, 'Message received from unapproved origin "' + c + '" - rejected.', void 0)
    }
  }
};
function Xh(a) {
  Sh.test(a) && (a = "%" + a);
  return a.replace(/[%:|]/g, encodeURIComponent)
}
function dh(a) {
  var b = a.r[$.zc];
  return b ? b : window.parent == a.Fa ? 1 : 0
}
q.B = function() {
  this.close();
  this.sb = this.Fa = null;
  delete Zg[this.name];
  df(this.oc);
  delete this.oc;
  Qh.ka.B.call(this)
};
function Rh() {
  for(var a in Zg) {
    df(Zg[a])
  }
}
;Vg("goog.net.XhrIo");
ed(Od, dd.a(function(a) {
  var b = bc.d(a, 0, null);
  a = bc.d(a, 1, null);
  return vd([Mc.b(b.toLowerCase()), a])
}, he.e(P([De.b({If:"complete", Of:"success", Jf:"error", Hf:"abort", Mf:"ready", Nf:"readystatechange", TIMEOUT:"timeout", Kf:"incrementaldata", Lf:"progress"})], 0))));
var Yh = function() {
  function a(a, b, c, d) {
    if(a ? a.Nd : a) {
      return a.Nd(a, b, c, d)
    }
    var e;
    e = Yh[t(null == a ? null : a)];
    if(!e && (e = Yh._, !e)) {
      throw A("IConnection.connect", a);
    }
    return e.call(null, a, b, c, d)
  }
  function b(a, b, c) {
    if(a ? a.Md : a) {
      return a.Md(a, b, c)
    }
    var d;
    d = Yh[t(null == a ? null : a)];
    if(!d && (d = Yh._, !d)) {
      throw A("IConnection.connect", a);
    }
    return d.call(null, a, b, c)
  }
  function c(a, b) {
    if(a ? a.Ld : a) {
      return a.Ld(a, b)
    }
    var c;
    c = Yh[t(null == a ? null : a)];
    if(!c && (c = Yh._, !c)) {
      throw A("IConnection.connect", a);
    }
    return c.call(null, a, b)
  }
  function d(a) {
    if(a ? a.Kd : a) {
      return a.Kd(a)
    }
    var b;
    b = Yh[t(null == a ? null : a)];
    if(!b && (b = Yh._, !b)) {
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
  e.b = d;
  e.a = c;
  e.d = b;
  e.n = a;
  return e
}(), Zh = function() {
  function a(a, b, c, d, e, f) {
    if(a ? a.Ze : a) {
      return a.Ze(a, b, c, d, e, f)
    }
    var v;
    v = Zh[t(null == a ? null : a)];
    if(!v && (v = Zh._, !v)) {
      throw A("IConnection.transmit", a);
    }
    return v.call(null, a, b, c, d, e, f)
  }
  function b(a, b, c, d, e) {
    if(a ? a.Ye : a) {
      return a.Ye(a, b, c, d, e)
    }
    var f;
    f = Zh[t(null == a ? null : a)];
    if(!f && (f = Zh._, !f)) {
      throw A("IConnection.transmit", a);
    }
    return f.call(null, a, b, c, d, e)
  }
  function c(a, b, c, d) {
    if(a ? a.Xe : a) {
      return a.Xe(a, b, c, d)
    }
    var e;
    e = Zh[t(null == a ? null : a)];
    if(!e && (e = Zh._, !e)) {
      throw A("IConnection.transmit", a);
    }
    return e.call(null, a, b, c, d)
  }
  function d(a, b, c) {
    if(a ? a.Od : a) {
      return a.Od(a, b, c)
    }
    var d;
    d = Zh[t(null == a ? null : a)];
    if(!d && (d = Zh._, !d)) {
      throw A("IConnection.transmit", a);
    }
    return d.call(null, a, b, c)
  }
  function e(a, b) {
    if(a ? a.We : a) {
      return a.We(a, b)
    }
    var c;
    c = Zh[t(null == a ? null : a)];
    if(!c && (c = Zh._, !c)) {
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
  f.n = c;
  f.C = b;
  f.sa = a;
  return f
}(), $h = ed(Od, dd.a(function(a) {
  var b = bc.d(a, 0, null);
  a = bc.d(a, 1, null);
  return vd([Mc.b(b.toLowerCase()), a])
}, De.b($))), ai = function() {
  function a(a, b, c, h) {
    if(a ? a.Qd : a) {
      return a.Qd(a, b, c, h)
    }
    var k;
    k = ai[t(null == a ? null : a)];
    if(!k && (k = ai._, !k)) {
      throw A("ICrossPageChannel.register-service", a);
    }
    return k.call(null, a, b, c, h)
  }
  function b(a, b, c) {
    if(a ? a.Pd : a) {
      return a.Pd(a, b, c)
    }
    var h;
    h = ai[t(null == a ? null : a)];
    if(!h && (h = ai._, !h)) {
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
  c.n = a;
  return c
}();
q = Qh.prototype;
q.Kd = function(a) {
  return Yh.a(a, null)
};
q.Ld = function(a, b) {
  return a.ta(b)
};
q.Md = function(a, b, c) {
  return Yh.n(a, b, c, document.body)
};
q.Nd = function(a, b, c, d) {
  Uh(a, d, c);
  return a.ta(b)
};
q.Od = function(a, b, c) {
  return a.send(Lc(b), c)
};
q.Pd = function(a, b, c) {
  return ai.n(a, b, c, !1)
};
q.Qd = function(a, b, c, d) {
  b = Lc(b);
  a.md[b] = {ra:c, oe:!!d}
};
var bi = function() {
  function a(a) {
    return new Qh(U.d(function(a, b) {
      var c = bc.d(b, 0, null), d = bc.d(b, 1, null), c = cc.a($h, c);
      y(c) && (a[c] = d);
      return a
    }, {}, a))
  }
  function b() {
    var a;
    a = (new Rf(window.location.href)).Ga.get("xpc");
    return y(a) ? new Qh(Df(a)) : null
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
  c.j = b;
  c.b = a;
  return c
}();
var ci = te.b(null);
function di(a) {
  var b = function() {
    try {
      return Ta([x.bf, x.dg, x.cf, "" + B(eval(a))])
    }catch(b) {
      if(b instanceof Error) {
        return Ta([x.bf, x.cg, x.cf, re.e(P([b], 0)), x.bg, y(b.hasOwnProperty("stack")) ? b.stack : "No stacktrace available."])
      }
      if(x.p) {
        throw b;
      }
      return null
    }
  }();
  return re.e(P([b], 0))
}
te.b(0);
(function(a) {
  var b = bi.b(Ta([x.hg, a]));
  ve.a(ci, cd(b));
  ai.d(b, x.eg, function(a) {
    return Zh.d(b, x.fg, di(a))
  });
  return Yh.d(b, cd(null), function(a) {
    return a.style.display = "none"
  })
})("http://localhost:9000/repl");
function ei(a) {
  if(a ? a.ac : a) {
    return a.ac()
  }
  var b;
  b = ei[t(null == a ? null : a)];
  if(!b && (b = ei._, !b)) {
    throw A("Channel.close!", a);
  }
  return b.call(null, a)
}
function fi(a) {
  if(a ? a.Te : a) {
    return!0
  }
  var b;
  b = fi[t(null == a ? null : a)];
  if(!b && (b = fi._, !b)) {
    throw A("Handler.active?", a);
  }
  return b.call(null, a)
}
;var gi, ii = function hi(b) {
  "undefined" === typeof gi && (gi = {}, gi = function(b, d, e) {
    this.ob = b;
    this.kf = d;
    this.rf = e;
    this.q = 0;
    this.f = 393216
  }, gi.cc = !0, gi.bc = "cljs.core.async.impl.ioc-helpers/t14752", gi.Vc = function(b, d) {
    return H(d, "cljs.core.async.impl.ioc-helpers/t14752")
  }, gi.prototype.Te = p(!0), gi.prototype.P = g("rf"), gi.prototype.Q = function(b, d) {
    return new gi(this.ob, this.kf, d)
  });
  return new gi(b, hi, null)
};
function ji(a) {
  try {
    return a[0].call(null, a)
  }catch(b) {
    if(b instanceof Object) {
      throw a[4].ac(), b;
    }
    if(x.p) {
      throw b;
    }
    return null
  }
}
function ki(a, b) {
  var c = b.Ue(ii(function(b) {
    a[2] = b;
    a[1] = 4;
    return ji(a)
  }));
  return y(c) ? (a[2] = pb(c), a[1] = 4, x.ag) : null
}
function li(a, b) {
  var c = a[4];
  null != b && c.Ve(b, ii(p(null)));
  c.ac();
  return c
}
;function mi(a, b, c, d, e) {
  for(var f = 0;;) {
    if(f < e) {
      c[d + f] = a[b + f], f += 1
    }else {
      break
    }
  }
}
function ni(a, b, c, d) {
  this.head = a;
  this.t = b;
  this.length = c;
  this.c = d
}
ni.prototype.pop = function() {
  if(0 === this.length) {
    return null
  }
  var a = this.c[this.t];
  this.c[this.t] = null;
  this.t = (this.t + 1) % this.c.length;
  this.length -= 1;
  return a
};
ni.prototype.unshift = function(a) {
  this.c[this.head] = a;
  this.head = (this.head + 1) % this.c.length;
  this.length += 1;
  return null
};
function oi(a, b) {
  if(a.length + 1 === a.c.length) {
    var c = Array(2 * a.c.length);
    a.t < a.head ? (mi(a.c, a.t, c, 0, a.length), a.t = 0, a.head = a.length, a.c = c) : a.t > a.head ? (mi(a.c, a.t, c, 0, a.c.length - a.t), mi(a.c, 0, c, a.c.length - a.t, a.head), a.t = 0, a.head = a.length, a.c = c) : a.t === a.head && (a.t = 0, a.head = 0, a.c = c)
  }
  a.unshift(b)
}
function pi(a, b) {
  for(var c = a.length, d = 0;;) {
    if(d < c) {
      var e = a.pop();
      (b.b ? b.b(e) : b.call(null, e)) && a.unshift(e);
      d += 1
    }else {
      break
    }
  }
}
function qi(a) {
  if(!(0 < a)) {
    throw Error([B("Assert failed: "), B("Can't create a ring buffer of size 0"), B("\n"), B(re.e(P([Wb(new I(null, "\x3e", "\x3e", -1640531465, null), new I(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new ni(0, 0, 0, Array(a))
}
function ri(a, b) {
  this.R = a;
  this.ke = b;
  this.q = 0;
  this.f = 2
}
ri.prototype.M = function() {
  return this.R.length
};
function si(a, b, c) {
  if(!Ua(b.R.length === b.ke)) {
    throw Error([B("Assert failed: "), B("Can't add to a full buffer"), B("\n"), B(re.e(P([Wb(new I(null, "not", "not", -1640422260, null), Wb(new I("impl", "full?", "impl/full?", -1337857039, null), new I(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  a.R.unshift(c)
}
;var ti = null, ui = qi(32), vi = !1, wi = !1;
function xi() {
  vi = !0;
  wi = !1;
  for(var a = 0;;) {
    var b = ui.pop();
    if(null != b && (b.j ? b.j() : b.call(null), 1024 > a)) {
      a += 1;
      continue
    }
    break
  }
  vi = !1;
  return 0 < ui.length ? yi.j ? yi.j() : yi.call(null) : null
}
"undefined" !== typeof MessageChannel && (ti = new MessageChannel, ti.port1.onmessage = function() {
  return xi()
});
function yi() {
  var a = wi;
  if(y(y(a) ? vi : a)) {
    return null
  }
  wi = !0;
  return"undefined" !== typeof MessageChannel ? ti.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(xi) : x.p ? setTimeout(xi, 0) : null
}
function zi(a) {
  oi(ui, a);
  yi()
}
;var Ai, Ci = function Bi(b) {
  "undefined" === typeof Ai && (Ai = {}, Ai = function(b, d, e) {
    this.K = b;
    this.Ge = d;
    this.qf = e;
    this.q = 0;
    this.f = 425984
  }, Ai.cc = !0, Ai.bc = "cljs.core.async.impl.channels/t14741", Ai.Vc = function(b, d) {
    return H(d, "cljs.core.async.impl.channels/t14741")
  }, Ai.prototype.Fc = g("K"), Ai.prototype.P = g("qf"), Ai.prototype.Q = function(b, d) {
    return new Ai(this.K, this.Ge, d)
  });
  return new Ai(b, Bi, null)
};
function Di(a, b) {
  this.rb = a;
  this.K = b
}
function Ei(a) {
  return fi(a.rb)
}
function Fi(a, b, c, d, e, f) {
  this.Qb = a;
  this.gc = b;
  this.qc = c;
  this.fc = d;
  this.R = e;
  this.closed = f
}
Fi.prototype.ac = function() {
  if(!this.closed) {
    for(this.closed = !0;;) {
      var a = this.Qb.pop();
      if(null != a) {
        zi(function(a) {
          return function() {
            return a.b ? a.b(null) : a.call(null, null)
          }
        }(a.ob, a))
      }else {
        break
      }
    }
  }
  return null
};
Fi.prototype.Ue = function(a) {
  var b = null != this.R;
  if(b ? 0 < R(this.R) : b) {
    return Ci(this.R.R.pop())
  }
  for(;;) {
    b = this.qc.pop();
    if(null != b) {
      return a = b.K, zi(b.rb.ob), Ci(a)
    }
    if(this.closed) {
      return Ci(null)
    }
    64 < this.gc ? (this.gc = 0, pi(this.Qb, fi)) : this.gc += 1;
    if(!(1024 > this.Qb.length)) {
      throw Error([B("Assert failed: "), B([B("No more than "), B(1024), B(" pending takes are allowed on a single channel.")].join("")), B("\n"), B(re.e(P([Wb(new I(null, "\x3c", "\x3c", -1640531467, null), Wb(new I(null, ".-length", ".-length", 1395928862, null), new I(null, "takes", "takes", -1530407291, null)), new I("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
    }
    oi(this.Qb, a);
    return null
  }
};
Fi.prototype.Ve = function(a, b) {
  var c = this;
  if(null == a) {
    throw Error([B("Assert failed: "), B("Can't put nil in on a channel"), B("\n"), B(re.e(P([Wb(new I(null, "not", "not", -1640422260, null), Wb(new I(null, "nil?", "nil?", -1637150201, null), new I(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  var d = c.closed;
  if(d && d) {
    Ci(null)
  }else {
    for(;;) {
      d = c.Qb.pop();
      if(null != d) {
        var e = b.ob;
        zi(function(b) {
          return function() {
            return b.b ? b.b(a) : b.call(null, a)
          }
        }(d.ob, e, d))
      }else {
        if(function() {
          var a = null == c.R;
          return a ? a : c.R.R.length === c.R.ke
        }()) {
          64 < c.fc ? (c.fc = 0, pi(c.qc, Ei)) : c.fc += 1;
          if(!(1024 > c.qc.length)) {
            throw Error([B("Assert failed: "), B([B("No more than "), B(1024), B(" pending puts are allowed on a single channel."), B(" Consider using a windowed buffer.")].join("")), B("\n"), B(re.e(P([Wb(new I(null, "\x3c", "\x3c", -1640531467, null), Wb(new I(null, ".-length", ".-length", 1395928862, null), new I(null, "puts", "puts", -1637078787, null)), new I("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
          }
          oi(c.qc, new Di(b, a));
          break
        }
        e = b.ob;
        si(c.R, c.R, a)
      }
      Ci(null);
      break
    }
  }
};
function Gi(a) {
  return new Fi(qi(32), 0, qi(32), 0, a, null)
}
;var Hi = function() {
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
    return c.b(0)
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
  c.j = b;
  c.b = a;
  return c
}();
function Ii(a, b, c) {
  this.key = a;
  this.K = b;
  this.forward = c;
  this.q = 0;
  this.f = 2155872256
}
Ii.prototype.F = function(a, b, c) {
  return W(b, X, "[", " ", "]", c, a)
};
Ii.prototype.A = function() {
  return Wb.e(P([this.key, this.K], 0))
};
var Ji = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for(var h = 0;;) {
      if(h < c.length) {
        c[h] = null, h += 1
      }else {
        break
      }
    }
    return new Ii(a, b, c)
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
  c.b = b;
  c.d = a;
  return c
}(), Ki = function() {
  function a(a, b, c, h) {
    for(;;) {
      if(0 > c) {
        return a
      }
      a: {
        for(;;) {
          var k = a.forward[c];
          if(y(k)) {
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
    return c.n(a, b, f, null)
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
  c.n = a;
  return c
}();
function Li(a, b) {
  this.Qa = a;
  this.ha = b;
  this.q = 0;
  this.f = 2155872256
}
Li.prototype.F = function(a, b, c) {
  return W(b, function(a) {
    return W(b, X, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Li.prototype.A = function() {
  var a = function c(a) {
    return new Nc(null, function() {
      return null == a ? null : Q(vd([a.key, a.K]), c(a.forward[0]))
    }, null, null)
  };
  return a.b ? a.b(this.Qa.forward[0]) : a.call(null, this.Qa.forward[0])
};
Li.prototype.put = function(a, b) {
  var c = Array(15), d = Ki.n(this.Qa, a, this.ha, c).forward[0], e = null != d;
  if(e ? d.key === a : e) {
    return d.K = b
  }
  d = Hi.j();
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
  for(d = Ji.d(a, b, Array(d));;) {
    return 0 <= this.ha ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null
  }
};
Li.prototype.remove = function(a) {
  var b = this, c = Array(15), d = Ki.n(b.Qa, a, b.ha, c).forward[0];
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
function Mi(a) {
  for(var b = Ni, c = b.Qa, d = b.ha;;) {
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
var Ni = new Li(Ji.b(0), 0);
function Oi() {
  var a = (new Date).valueOf() + 50, b = Mi(a), b = y(y(b) ? b.key < a + 10 : b) ? b.K : null;
  if(y(b)) {
    return b
  }
  var c = Gi(null);
  Ni.put(a, c);
  setTimeout(function() {
    Ni.remove(a);
    return ei(c)
  }, 50);
  return c
}
;var Pi = function() {
  function a(a) {
    a = Qb.a(a, 0) ? null : a;
    return Gi("number" === typeof a ? new ri(qi(a), a) : a)
  }
  function b() {
    return c.b(null)
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
  c.j = b;
  c.b = a;
  return c
}();
var Qi = new V(null, "r", "r"), Ri = new V(null, "recur", "recur"), Si = new V(null, "heading", "heading"), Ti = new V(null, "coords", "coords"), Ui = new V(null, "else", "else"), Vi = new V(null, "delta", "delta"), Wi = new V(null, "id", "id");
function Xi() {
  return Ta([Si, 2 * Bc.j() * Math.PI, Ti, vd([Cc(1E3), Cc(1E3)])])
}
function Yi(a) {
  return Ta([Vi, 50 * (0.05 + 0.1 * Bc.j()), Si, 2 * Bc.j() * Math.PI, Qi, 1, Wi, a])
}
function Zi(a) {
  return 1E3 < a ? a - 1E3 : 0 > a ? a - 1E3 : Ui ? a : null
}
var $i = ke.a(Math.sin, Math.cos);
function aj(a, b) {
  var c = sc(a) ? T.a(dc, a) : a, d = cc.a(c, Si), e = cc.a(c, Vi), c = sc(b) ? T.a(dc, b) : b, f = cc.a(c, Ti), d = dd.a(function(a) {
    return e * a
  }, $i.b ? $i.b(d) : $i.call(null, d)), d = dd.a(Zi, dd.d(xc, d, f));
  return ec.d(c, Ti, d)
}
function bj() {
  initWorld(1E3);
  var a = Pi.b(1);
  zi(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for(;;) {
              var e = a(c);
              if(!Kc(e, Ri)) {
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
          h.j = c;
          h.b = b;
          return h
        }()
      }(function(a) {
        var b = a[1];
        if(4 === b) {
          var b = a[5], c = a[6], h = a[2], c = dd.d(aj, b, c);
          a[7] = h;
          a[5] = b;
          a[6] = c;
          a[2] = null;
          a[1] = 2;
          return Ri
        }
        return 3 === b ? (b = a[2], li(a, b)) : 2 === b ? (b = a[5], c = a[6], b = dd.d(he, c, b), b = drawBirds(ze(dd.a(ze, b))), h = Oi(), a[8] = b, ki(a, h)) : 1 === b ? (b = je.b(100), b = dd.a(Yi, b), b = wd(b), h = dd.a(Xi, b), a[5] = b, a[6] = h, a[2] = null, a[1] = 2, Ri) : null
      })
    }(), c = function() {
      var c = b.j ? b.j() : b.call(null);
      c[4] = a;
      return c
    }();
    return ji(c)
  });
  return a
}
jQuery(document).ng(function() {
  return bj()
});
