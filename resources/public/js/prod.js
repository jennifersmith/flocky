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
function w(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.ka = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function pa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$");
    a = a.replace(/\%s/, d)
  }
  return a
}
function qa(a) {
  if(!ra.test(a)) {
    return a
  }
  -1 != a.indexOf("\x26") && (a = a.replace(sa, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(ua, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(va, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(wa, "\x26quot;"));
  return a
}
var sa = /&/g, ua = /</g, va = />/g, wa = /\"/g, ra = /[&<>\"]/;
function xa(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;function ya(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, ya) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
w(ya, Error);
ya.prototype.name = "CustomError";
function za(a, b) {
  b.unshift(a);
  ya.call(this, pa.apply(null, b));
  b.shift();
  this.mg = a
}
w(za, ya);
za.prototype.name = "AssertionError";
function Aa(a, b) {
  throw new za("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var Ba = Array.prototype, Ca = Ba.indexOf ? function(a, b, c) {
  return Ba.indexOf.call(a, b, c)
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
}, Da = Ba.forEach ? function(a, b, c) {
  Ba.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
}, Ea = Ba.filter ? function(a, b, c) {
  return Ba.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, h = u(a) ? a.split("") : a, k = 0;k < d;k++) {
    if(k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (e[f++] = l)
    }
  }
  return e
}, Fa = Ba.some ? function(a, b, c) {
  return Ba.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && b.call(c, e[f], f, a)) {
      return!0
    }
  }
  return!1
};
function Ga(a, b) {
  var c = Ca(a, b);
  0 <= c && Ba.splice.call(a, c, 1)
}
function Ha(a) {
  return Ba.concat.apply(Ba, arguments)
}
function Ia(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
;function Ja(a, b) {
  for(var c in a) {
    b.call(void 0, a[c], c, a)
  }
}
function Ka(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function La(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Ma = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Na(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < Ma.length;f++) {
      c = Ma[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function Oa(a, b) {
  null != a && this.append.apply(this, arguments)
}
Oa.prototype.hb = "";
Oa.prototype.set = function(a) {
  this.hb = "" + a
};
Oa.prototype.append = function(a, b, c) {
  this.hb += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.hb += arguments[d]
    }
  }
  return this
};
Oa.prototype.toString = g("hb");
var x = {}, Pa;
function Qa() {
  return Ra([x.$f, !0, x.af, !0, x.Rd, !1, x.gg, !1])
}
function z(a) {
  return null != a && !1 !== a
}
function Sa(a) {
  return z(a) ? !1 : !0
}
function A(a, b) {
  return a[t(null == b ? null : b)] ? !0 : a._ ? !0 : x.n ? !1 : null
}
function Ta(a) {
  return null == a ? null : a.constructor
}
function B(a, b) {
  var c = Ta(b), c = z(z(c) ? c.cc : c) ? c.bc : t(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function Ua(a) {
  var b = a.bc;
  return z(b) ? b : "" + D(a)
}
function Va(a) {
  return Array.prototype.slice.call(arguments)
}
var Xa = {}, Ya = {};
function Za(a) {
  if(a ? a.L : a) {
    return a.L(a)
  }
  var b;
  b = Za[t(null == a ? null : a)];
  if(!b && (b = Za._, !b)) {
    throw B("ICounted.-count", a);
  }
  return b.call(null, a)
}
function $a(a) {
  if(a ? a.T : a) {
    return a.T(a)
  }
  var b;
  b = $a[t(null == a ? null : a)];
  if(!b && (b = $a._, !b)) {
    throw B("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a)
}
var ab = {};
function bb(a, b) {
  if(a ? a.R : a) {
    return a.R(a, b)
  }
  var c;
  c = bb[t(null == a ? null : a)];
  if(!c && (c = bb._, !c)) {
    throw B("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var cb = {}, E = function() {
  function a(a, b, c) {
    if(a ? a.U : a) {
      return a.U(a, b, c)
    }
    var h;
    h = E[t(null == a ? null : a)];
    if(!h && (h = E._, !h)) {
      throw B("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.N : a) {
      return a.N(a, b)
    }
    var c;
    c = E[t(null == a ? null : a)];
    if(!c && (c = E._, !c)) {
      throw B("IIndexed.-nth", a);
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
}(), db = {};
function F(a) {
  if(a ? a.Z : a) {
    return a.Z(a)
  }
  var b;
  b = F[t(null == a ? null : a)];
  if(!b && (b = F._, !b)) {
    throw B("ISeq.-first", a);
  }
  return b.call(null, a)
}
function H(a) {
  if(a ? a.aa : a) {
    return a.aa(a)
  }
  var b;
  b = H[t(null == a ? null : a)];
  if(!b && (b = H._, !b)) {
    throw B("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var eb = {}, fb = function() {
  function a(a, b, c) {
    if(a ? a.W : a) {
      return a.W(a, b, c)
    }
    var h;
    h = fb[t(null == a ? null : a)];
    if(!h && (h = fb._, !h)) {
      throw B("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.ea : a) {
      return a.ea(a, b)
    }
    var c;
    c = fb[t(null == a ? null : a)];
    if(!c && (c = fb._, !c)) {
      throw B("ILookup.-lookup", a);
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
function gb(a, b, c) {
  if(a ? a.za : a) {
    return a.za(a, b, c)
  }
  var d;
  d = gb[t(null == a ? null : a)];
  if(!d && (d = gb._, !d)) {
    throw B("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var hb = {}, ib = {};
function jb(a) {
  if(a ? a.Gd : a) {
    return a.Gd(a)
  }
  var b;
  b = jb[t(null == a ? null : a)];
  if(!b && (b = jb._, !b)) {
    throw B("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function kb(a) {
  if(a ? a.Hd : a) {
    return a.Hd(a)
  }
  var b;
  b = kb[t(null == a ? null : a)];
  if(!b && (b = kb._, !b)) {
    throw B("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var lb = {};
function mb(a, b, c) {
  if(a ? a.Uc : a) {
    return a.Uc(a, b, c)
  }
  var d;
  d = mb[t(null == a ? null : a)];
  if(!d && (d = mb._, !d)) {
    throw B("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function nb(a) {
  if(a ? a.Fc : a) {
    return a.Fc(a)
  }
  var b;
  b = nb[t(null == a ? null : a)];
  if(!b && (b = nb._, !b)) {
    throw B("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var ob = {};
function pb(a) {
  if(a ? a.O : a) {
    return a.O(a)
  }
  var b;
  b = pb[t(null == a ? null : a)];
  if(!b && (b = pb._, !b)) {
    throw B("IMeta.-meta", a);
  }
  return b.call(null, a)
}
var qb = {};
function rb(a, b) {
  if(a ? a.P : a) {
    return a.P(a, b)
  }
  var c;
  c = rb[t(null == a ? null : a)];
  if(!c && (c = rb._, !c)) {
    throw B("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var sb = {}, tb = function() {
  function a(a, b, c) {
    if(a ? a.Y : a) {
      return a.Y(a, b, c)
    }
    var h;
    h = tb[t(null == a ? null : a)];
    if(!h && (h = tb._, !h)) {
      throw B("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.X : a) {
      return a.X(a, b)
    }
    var c;
    c = tb[t(null == a ? null : a)];
    if(!c && (c = tb._, !c)) {
      throw B("IReduce.-reduce", a);
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
function ub(a, b) {
  if(a ? a.G : a) {
    return a.G(a, b)
  }
  var c;
  c = ub[t(null == a ? null : a)];
  if(!c && (c = ub._, !c)) {
    throw B("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function vb(a) {
  if(a ? a.M : a) {
    return a.M(a)
  }
  var b;
  b = vb[t(null == a ? null : a)];
  if(!b && (b = vb._, !b)) {
    throw B("IHash.-hash", a);
  }
  return b.call(null, a)
}
var wb = {};
function xb(a) {
  if(a ? a.A : a) {
    return a.A(a)
  }
  var b;
  b = xb[t(null == a ? null : a)];
  if(!b && (b = xb._, !b)) {
    throw B("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var yb = {};
function I(a, b) {
  if(a ? a.Jd : a) {
    return a.Jd(0, b)
  }
  var c;
  c = I[t(null == a ? null : a)];
  if(!c && (c = I._, !c)) {
    throw B("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
function zb(a) {
  if(a ? a.Se : a) {
    return null
  }
  var b;
  b = zb[t(null == a ? null : a)];
  if(!b && (b = zb._, !b)) {
    throw B("IWriter.-flush", a);
  }
  return b.call(null, a)
}
var Ab = {};
function Bb(a, b, c) {
  if(a ? a.D : a) {
    return a.D(a, b, c)
  }
  var d;
  d = Bb[t(null == a ? null : a)];
  if(!d && (d = Bb._, !d)) {
    throw B("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function Cb(a, b, c) {
  if(a ? a.Id : a) {
    return a.Id(a, b, c)
  }
  var d;
  d = Cb[t(null == a ? null : a)];
  if(!d && (d = Cb._, !d)) {
    throw B("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c)
}
function Db(a) {
  if(a ? a.Zb : a) {
    return a.Zb(a)
  }
  var b;
  b = Db[t(null == a ? null : a)];
  if(!b && (b = Db._, !b)) {
    throw B("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function Eb(a, b) {
  if(a ? a.Cb : a) {
    return a.Cb(a, b)
  }
  var c;
  c = Eb[t(null == a ? null : a)];
  if(!c && (c = Eb._, !c)) {
    throw B("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function Fb(a) {
  if(a ? a.$b : a) {
    return a.$b(a)
  }
  var b;
  b = Fb[t(null == a ? null : a)];
  if(!b && (b = Fb._, !b)) {
    throw B("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function Gb(a, b, c) {
  if(a ? a.jb : a) {
    return a.jb(a, b, c)
  }
  var d;
  d = Gb[t(null == a ? null : a)];
  if(!d && (d = Gb._, !d)) {
    throw B("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function Hb(a) {
  if(a ? a.Bd : a) {
    return a.Bd()
  }
  var b;
  b = Hb[t(null == a ? null : a)];
  if(!b && (b = Hb._, !b)) {
    throw B("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function Ib(a) {
  if(a ? a.Ec : a) {
    return a.Ec(a)
  }
  var b;
  b = Ib[t(null == a ? null : a)];
  if(!b && (b = Ib._, !b)) {
    throw B("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function Jb(a) {
  if(a ? a.Yb : a) {
    return a.Yb(a)
  }
  var b;
  b = Jb[t(null == a ? null : a)];
  if(!b && (b = Jb._, !b)) {
    throw B("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function Kb(a) {
  this.zf = a;
  this.p = 0;
  this.e = 1073741824
}
Kb.prototype.Jd = function(a, b) {
  return this.zf.append(b)
};
Kb.prototype.Se = p(null);
function Lb(a) {
  var b = new Oa, c = new Kb(b);
  a.D(a, c, Qa());
  zb(c);
  return"" + D(b)
}
function J(a, b, c, d, e) {
  this.ab = a;
  this.name = b;
  this.eb = c;
  this.Xa = d;
  this.fb = e;
  this.e = 2154168321;
  this.p = 4096
}
q = J.prototype;
q.D = function(a, b) {
  return I(b, this.eb)
};
q.M = function(a) {
  var b = this.Xa;
  return null != b ? b : this.Xa = a = Mb.a ? Mb.a(K.c ? K.c(a.ab) : K.call(null, a.ab), K.c ? K.c(a.name) : K.call(null, a.name)) : Mb.call(null, K.c ? K.c(a.ab) : K.call(null, a.ab), K.c ? K.c(a.name) : K.call(null, a.name))
};
q.P = function(a, b) {
  return new J(this.ab, this.name, this.eb, this.Xa, b)
};
q.O = g("fb");
q.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return fb.d(c, this, null);
      case 3:
        return fb.d(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  return b instanceof J ? this.eb === b.eb : !1
};
q.toString = g("eb");
function L(a) {
  if(null == a) {
    return null
  }
  var b;
  b = a ? ((b = a.e & 8388608) ? b : a.Wf) ? !0 : !1 : !1;
  if(b) {
    return a.A(a)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Nb(a, 0)
  }
  if(A(wb, a)) {
    return xb(a)
  }
  if(x.n) {
    throw Error([D(a), D("is not ISeqable")].join(""));
  }
  return null
}
function M(a) {
  if(null == a) {
    return null
  }
  var b;
  b = a ? ((b = a.e & 64) ? b : a.Bb) ? !0 : !1 : !1;
  if(b) {
    return a.Z(a)
  }
  a = L(a);
  return null == a ? null : F(a)
}
function N(a) {
  if(null != a) {
    var b;
    b = a ? ((b = a.e & 64) ? b : a.Bb) ? !0 : !1 : !1;
    if(b) {
      return a.aa(a)
    }
    a = L(a);
    return null != a ? H(a) : O
  }
  return O
}
function P(a) {
  if(null == a) {
    a = null
  }else {
    var b;
    b = a ? ((b = a.e & 128) ? b : a.Vf) ? !0 : !1 : !1;
    a = b ? a.ma(a) : L(N(a))
  }
  return a
}
var Ob = function() {
  function a(a, b) {
    var c = a === b;
    return c ? c : ub(a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = Q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(z(b.a(a, d))) {
          if(P(e)) {
            a = d, d = M(e), e = P(e)
          }else {
            return b.a(d, M(e))
          }
        }else {
          return!1
        }
      }
    }
    a.s = 2;
    a.m = function(a) {
      var b = M(a);
      a = P(a);
      var d = M(a);
      a = N(a);
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
        return c.g(b, e, Q(arguments, 2))
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
vb["null"] = p(0);
Ya["null"] = !0;
Za["null"] = p(0);
ub["null"] = function(a, b) {
  return null == b
};
qb["null"] = !0;
rb["null"] = p(null);
ob["null"] = !0;
pb["null"] = p(null);
$a["null"] = p(null);
hb["null"] = !0;
Date.prototype.G = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
vb.number = function(a) {
  return Math.floor(a) % 2147483647
};
ub.number = function(a, b) {
  return a === b
};
vb["boolean"] = function(a) {
  return!0 === a ? 1 : 0
};
ob["function"] = !0;
pb["function"] = p(null);
Xa["function"] = !0;
vb._ = function(a) {
  return ha(a)
};
var Pb = function() {
  function a(a, b, c, d) {
    for(var l = Za(a);;) {
      if(d < l) {
        c = b.a ? b.a(c, E.a(a, d)) : b.call(null, c, E.a(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = Za(a), l = 0;;) {
      if(l < d) {
        c = b.a ? b.a(c, E.a(a, l)) : b.call(null, c, E.a(a, l)), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = Za(a);
    if(0 === c) {
      return b.o ? b.o() : b.call(null)
    }
    for(var d = E.a(a, 0), l = 1;;) {
      if(l < c) {
        d = b.a ? b.a(d, E.a(a, l)) : b.call(null, d, E.a(a, l)), l += 1
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
}(), Qb = function() {
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
function Rb(a) {
  if(a) {
    var b = a.e & 2;
    a = (b ? b : a.Le) ? !0 : a.e ? !1 : A(Ya, a)
  }else {
    a = A(Ya, a)
  }
  return a
}
function Sb(a) {
  if(a) {
    var b = a.e & 16;
    a = (b ? b : a.Fd) ? !0 : a.e ? !1 : A(cb, a)
  }else {
    a = A(cb, a)
  }
  return a
}
function Nb(a, b) {
  this.b = a;
  this.j = b;
  this.p = 0;
  this.e = 166199550
}
q = Nb.prototype;
q.M = function(a) {
  return Ub.c ? Ub.c(a) : Ub.call(null, a)
};
q.ma = function() {
  return this.j + 1 < this.b.length ? new Nb(this.b, this.j + 1) : null
};
q.R = function(a, b) {
  return R.a ? R.a(b, a) : R.call(null, b, a)
};
q.toString = function() {
  return Lb(this)
};
q.X = function(a, b) {
  return Qb.l(this.b, b, this.b[this.j], this.j + 1)
};
q.Y = function(a, b, c) {
  return Qb.l(this.b, b, c, this.j)
};
q.A = aa();
q.L = function() {
  return this.b.length - this.j
};
q.Z = function() {
  return this.b[this.j]
};
q.aa = function() {
  return this.j + 1 < this.b.length ? new Nb(this.b, this.j + 1) : Vb.o ? Vb.o() : Vb.call(null)
};
q.G = function(a, b) {
  return Wb.a ? Wb.a(a, b) : Wb.call(null, a, b)
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
  return O
};
var Xb = function() {
  function a(a, b) {
    return b < a.length ? new Nb(a, b) : null
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
}(), Q = function() {
  function a(a, b) {
    return Xb.a(a, b)
  }
  function b(a) {
    return Xb.a(a, 0)
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
ub._ = function(a, b) {
  return a === b
};
var Yb = function() {
  function a(a, b) {
    return null != a ? bb(a, b) : Vb.c ? Vb.c(b) : Vb.call(null, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = Q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(z(e)) {
          a = b.a(a, d), d = M(e), e = P(e)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.s = 2;
    a.m = function(a) {
      var b = M(a);
      a = P(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a)
    };
    a.g = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, Q(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 2;
  b.m = c.m;
  b.a = a;
  b.g = c.g;
  return b
}();
function T(a) {
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
          if(A(Ya, a)) {
            a = Za(a)
          }else {
            if(x.n) {
              a: {
                a = L(a);
                for(b = 0;;) {
                  if(Rb(a)) {
                    a = b + Za(a);
                    break a
                  }
                  a = P(a);
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
var Zb = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return L(a) ? M(a) : c
      }
      if(Sb(a)) {
        return E.d(a, b, c)
      }
      if(L(a)) {
        a = P(a), b -= 1
      }else {
        return x.n ? c : null
      }
    }
  }
  function b(a, b) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === b) {
        if(L(a)) {
          return M(a)
        }
        throw Error("Index out of bounds");
      }
      if(Sb(a)) {
        return E.a(a, b)
      }
      if(L(a)) {
        var c = P(a), h = b - 1;
        a = c;
        b = h
      }else {
        if(x.n) {
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
}(), $b = function() {
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
      if(A(cb, a)) {
        return E.a(a, b)
      }
      if(x.n) {
        if(function() {
          var b;
          b = a ? ((b = a.e & 64) ? b : a.Bb) ? !0 : a.e ? !1 : A(db, a) : A(db, a);
          return b
        }()) {
          return Zb.d(a, Math.floor(b), c)
        }
        throw Error([D("nth not supported on this type "), D(Ua(Ta(a)))].join(""));
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
    if(A(cb, a)) {
      return E.a(a, b)
    }
    if(x.n) {
      if(function() {
        var b;
        b = a ? ((b = a.e & 64) ? b : a.Bb) ? !0 : a.e ? !1 : A(db, a) : A(db, a);
        return b
      }()) {
        return Zb.a(a, Math.floor(b))
      }
      throw Error([D("nth not supported on this type "), D(Ua(Ta(a)))].join(""));
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
}(), ac = function() {
  function a(a, b, c) {
    if(null != a) {
      var h;
      h = a ? ((h = a.e & 256) ? h : a.Tc) ? !0 : !1 : !1;
      a = h ? a.W(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : A(eb, a) ? fb.d(a, b, c) : x.n ? c : null
    }else {
      a = c
    }
    return a
  }
  function b(a, b) {
    var c;
    null == a ? c = null : (c = a ? ((c = a.e & 256) ? c : a.Tc) ? !0 : !1 : !1, c = c ? a.ea(a, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : A(eb, a) ? fb.a(a, b) : null);
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
}(), cc = function() {
  function a(a, b, c) {
    return null != a ? gb(a, b, c) : bc.a ? bc.a(b, c) : bc.call(null, b, c)
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = Q(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m)
    }
    function c(a, d, e, l) {
      for(;;) {
        if(a = b.d(a, d, e), z(l)) {
          d = M(l), e = M(P(l)), l = P(P(l))
        }else {
          return a
        }
      }
    }
    a.s = 3;
    a.m = function(a) {
      var b = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var l = M(a);
      a = N(a);
      return c(b, d, l, a)
    };
    a.g = c;
    return a
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.g(b, e, f, Q(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 3;
  b.m = c.m;
  b.d = a;
  b.g = c.g;
  return b
}();
function dc(a) {
  var b = fa(a);
  return b ? b : a ? z(z(null) ? null : a.Ke) ? !0 : a.Wc ? !1 : A(Xa, a) : A(Xa, a)
}
var gc = function ec(b, c) {
  return function() {
    var c = dc(b);
    c && (c = b ? ((c = b.e & 262144) ? c : b.Zf) ? !0 : b.e ? !1 : A(qb, b) : A(qb, b), c = !c);
    return c
  }() ? ec(function() {
    "undefined" === typeof Pa && (Pa = {}, Pa = function(b, c, f, h) {
      this.h = b;
      this.ed = c;
      this.Gf = f;
      this.pf = h;
      this.p = 0;
      this.e = 393217
    }, Pa.cc = !0, Pa.bc = "cljs.core/t11999", Pa.Vc = function(b, c) {
      return I(c, "cljs.core/t11999")
    }, Pa.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = Q(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k)
      }
      function c(b, d) {
        return fc.a ? fc.a(b.ed, d) : fc.call(null, b.ed, d)
      }
      b.s = 1;
      b.m = function(b) {
        var d = M(b);
        b = N(b);
        return c(d, b)
      };
      b.g = c;
      return b
    }(), Pa.prototype.apply = function(b, c) {
      b = this;
      return b.call.apply(b, [b].concat(c.slice()))
    }, Pa.prototype.Ke = !0, Pa.prototype.O = g("pf"), Pa.prototype.P = function(b, c) {
      return new Pa(this.h, this.ed, this.Gf, c)
    });
    return new Pa(c, b, ec, null)
  }(), c) : rb(b, c)
};
function hc(a) {
  var b;
  b = a ? ((b = a.e & 131072) ? b : a.Qe) ? !0 : a.e ? !1 : A(ob, a) : A(ob, a);
  return b ? pb(a) : null
}
var ic = {}, jc = 0, K = function() {
  function a(a, b) {
    var c = u(a);
    (c ? b : c) ? (255 < jc && (ic = {}, jc = 0), c = ic[a], "number" !== typeof c && (c = xa(a), ic[a] = c, jc += 1)) : c = vb(a);
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
function kc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.e & 8;
      a = (b ? b : a.Qf) ? !0 : a.e ? !1 : A(ab, a)
    }else {
      a = A(ab, a)
    }
  }
  return a
}
function lc(a) {
  if(a) {
    var b = a.e & 16777216;
    a = (b ? b : a.Xf) ? !0 : a.e ? !1 : A(yb, a)
  }else {
    a = A(yb, a)
  }
  return a
}
function mc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.e & 1024;
      a = (b ? b : a.Tf) ? !0 : a.e ? !1 : A(hb, a)
    }else {
      a = A(hb, a)
    }
  }
  return a
}
function nc(a) {
  if(a) {
    var b = a.e & 16384;
    a = (b ? b : a.Yf) ? !0 : a.e ? !1 : A(lb, a)
  }else {
    a = A(lb, a)
  }
  return a
}
function oc(a) {
  if(a) {
    var b = a.p & 512;
    a = (b ? b : a.Pf) ? !0 : !1
  }else {
    a = !1
  }
  return a
}
function pc(a) {
  var b = [];
  Ja(a, function(a, d) {
    return b.push(d)
  });
  return b
}
function qc(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
function rc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.e & 64;
      a = (b ? b : a.Bb) ? !0 : a.e ? !1 : A(db, a)
    }else {
      a = A(db, a)
    }
  }
  return a
}
function sc(a) {
  return z(a) ? !0 : !1
}
function tc(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(Ta(a) === Ta(b)) {
    var c;
    c = a ? ((c = a.p & 2048) ? c : a.Dd) ? !0 : !1 : !1;
    return c ? a.Ed(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  if(x.n) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var uc = function() {
  function a(a, b, c, h) {
    for(;;) {
      var k = tc($b.a(a, h), $b.a(b, h)), l = 0 === k;
      if(l ? h + 1 < c : l) {
        h += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var f = T(a), h = T(b);
    return f < h ? -1 : f > h ? 1 : x.n ? c.l(a, b, f, 0) : null
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
}(), xc = function() {
  function a(a, b, c) {
    for(c = L(c);;) {
      if(c) {
        b = a.a ? a.a(b, M(c)) : a.call(null, b, M(c)), c = P(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = L(b);
    return c ? wc.d ? wc.d(a, M(c), P(c)) : wc.call(null, a, M(c), P(c)) : a.o ? a.o() : a.call(null)
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
}(), wc = function() {
  function a(a, b, c) {
    var h;
    h = c ? ((h = c.e & 524288) ? h : c.Re) ? !0 : !1 : !1;
    return h ? c.Y(c, a, b) : c instanceof Array ? Qb.d(c, a, b) : "string" === typeof c ? Qb.d(c, a, b) : A(sb, c) ? tb.d(c, a, b) : x.n ? xc.d(a, b, c) : null
  }
  function b(a, b) {
    var c;
    c = b ? ((c = b.e & 524288) ? c : b.Re) ? !0 : !1 : !1;
    return c ? b.X(b, a) : b instanceof Array ? Qb.a(b, a) : "string" === typeof b ? Qb.a(b, a) : A(sb, b) ? tb.a(b, a) : x.n ? xc.a(a, b) : null
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
function yc(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(null, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(null, a)
}
function zc(a) {
  return yc((a - a % 2) / 2)
}
var Ac = function() {
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
function Bc(a) {
  return yc(Ac.c(a))
}
function Cc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var D = function() {
  function a(a) {
    return null == a ? "" : a.toString()
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = Q(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(z(c)) {
            var d = a.append(b.c(M(c))), e = P(c);
            a = d;
            c = e
          }else {
            return a.toString()
          }
        }
      }.call(null, new Oa(b.c(a)), d)
    }
    a.s = 1;
    a.m = function(a) {
      var b = M(a);
      a = N(a);
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
        return c.g(b, Q(arguments, 1))
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
function Wb(a, b) {
  return sc(lc(b) ? function() {
    for(var c = L(a), d = L(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(Ob.a(M(c), M(d))) {
        c = P(c), d = P(d)
      }else {
        return x.n ? !1 : null
      }
    }
  }() : null)
}
function Mb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function Ub(a) {
  return wc.d(function(a, c) {
    return Mb(a, K.a(c, !1))
  }, K.a(M(a), !1), P(a))
}
function Dc(a) {
  var b = 0;
  for(a = L(a);;) {
    if(a) {
      var c = M(a), b = (b + (K.c(Ec.c ? Ec.c(c) : Ec.call(null, c)) ^ K.c(Fc.c ? Fc.c(c) : Fc.call(null, c)))) % 4503599627370496;
      a = P(a)
    }else {
      return b
    }
  }
}
function Gc(a, b, c, d, e) {
  this.h = a;
  this.Gb = b;
  this.Ha = c;
  this.count = d;
  this.k = e;
  this.p = 0;
  this.e = 65937646
}
q = Gc.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Ub(a)
};
q.ma = function() {
  return 1 === this.count ? null : this.Ha
};
q.R = function(a, b) {
  return new Gc(this.h, b, a, this.count + 1, null)
};
q.toString = function() {
  return Lb(this)
};
q.X = function(a, b) {
  return xc.a(b, a)
};
q.Y = function(a, b, c) {
  return xc.d(b, c, a)
};
q.A = aa();
q.L = g("count");
q.Z = g("Gb");
q.aa = function() {
  return 1 === this.count ? O : this.Ha
};
q.G = function(a, b) {
  return Wb(a, b)
};
q.P = function(a, b) {
  return new Gc(b, this.Gb, this.Ha, this.count, this.k)
};
q.O = g("h");
q.T = function() {
  return O
};
function Hc(a) {
  this.h = a;
  this.p = 0;
  this.e = 65937614
}
q = Hc.prototype;
q.M = p(0);
q.ma = p(null);
q.R = function(a, b) {
  return new Gc(this.h, b, null, 1, null)
};
q.toString = function() {
  return Lb(this)
};
q.X = function(a, b) {
  return xc.a(b, a)
};
q.Y = function(a, b, c) {
  return xc.d(b, c, a)
};
q.A = p(null);
q.L = p(0);
q.Z = p(null);
q.aa = function() {
  return O
};
q.G = function(a, b) {
  return Wb(a, b)
};
q.P = function(a, b) {
  return new Hc(b)
};
q.O = g("h");
q.T = aa();
var O = new Hc(null), Vb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(a instanceof Nb) {
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
    for(var e = O;;) {
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
    a = L(a);
    return b(a)
  };
  a.g = b;
  return a
}();
function Ic(a, b, c, d) {
  this.h = a;
  this.Gb = b;
  this.Ha = c;
  this.k = d;
  this.p = 0;
  this.e = 65929452
}
q = Ic.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Ub(a)
};
q.ma = function() {
  return null == this.Ha ? null : xb(this.Ha)
};
q.R = function(a, b) {
  return new Ic(null, b, a, this.k)
};
q.toString = function() {
  return Lb(this)
};
q.X = function(a, b) {
  return xc.a(b, a)
};
q.Y = function(a, b, c) {
  return xc.d(b, c, a)
};
q.A = aa();
q.Z = g("Gb");
q.aa = function() {
  return null == this.Ha ? O : this.Ha
};
q.G = function(a, b) {
  return Wb(a, b)
};
q.P = function(a, b) {
  return new Ic(b, this.Gb, this.Ha, this.k)
};
q.O = g("h");
q.T = function() {
  return gc(O, this.h)
};
function R(a, b) {
  var c = null == b;
  c || (c = b ? ((c = b.e & 64) ? c : b.Bb) ? !0 : !1 : !1);
  return c ? new Ic(null, a, b, null) : new Ic(null, a, L(b), null)
}
vb.string = function(a) {
  return xa(a)
};
function Jc(a, b, c, d) {
  this.ab = a;
  this.name = b;
  this.Pa = c;
  this.Xa = d;
  this.e = 2153775105;
  this.p = 4096
}
q = Jc.prototype;
q.D = function(a, b) {
  return I(b, [D(":"), D(this.Pa)].join(""))
};
q.M = function() {
  null == this.Xa && (this.Xa = Mb(K.c(this.ab), K.c(this.name)) + 2654435769);
  return this.Xa
};
q.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        null == c ? e = null : (e = c ? ((e = c.e & 256) ? e : c.Tc) ? !0 : c.e ? !1 : A(eb, c) : A(eb, c), e = e ? fb.d(c, this, null) : null);
        return e;
      case 3:
        return null == c ? e = d : (e = c ? ((e = c.e & 256) ? e : c.Tc) ? !0 : c.e ? !1 : A(eb, c) : A(eb, c), e = e ? fb.d(c, this, d) : d), e
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
q.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  return b instanceof Jc ? this.Pa === b.Pa : !1
};
q.toString = function() {
  return[D(":"), D(this.Pa)].join("")
};
function Kc(a, b) {
  var c;
  c = a === b ? !0 : ((c = a instanceof Jc) ? b instanceof Jc : c) ? a.Pa === b.Pa : !1;
  return c
}
var Mc = function() {
  function a(a, b) {
    return new Jc(a, b, [D(z(a) ? [D(a), D("/")].join("") : null), D(b)].join(""), null)
  }
  function b(a) {
    return a instanceof Jc ? a : a instanceof J ? new Jc(null, Lc.c ? Lc.c(a) : Lc.call(null, a), Lc.c ? Lc.c(a) : Lc.call(null, a), null) : x.n ? new Jc(null, a, a, null) : null
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
  return null != b ? b : this.k = a = Ub(a)
};
q.ma = function(a) {
  a.A(a);
  return null == this.u ? null : this.u.ma(this.u)
};
q.R = function(a, b) {
  return R(b, a)
};
q.toString = function() {
  return Lb(this)
};
function Oc(a) {
  null != a.pb && (a.u = a.pb.o ? a.pb.o() : a.pb.call(null), a.pb = null);
  return a.u
}
q.X = function(a, b) {
  return xc.a(b, a)
};
q.Y = function(a, b, c) {
  return xc.d(b, c, a)
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
  return null != this.u ? this.u.aa(this.u) : O
};
q.G = function(a, b) {
  return Wb(a, b)
};
q.P = function(a, b) {
  return new Nc(b, this.pb, this.u, this.k)
};
q.O = g("h");
q.T = function() {
  return gc(O, this.h)
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
  return Qb.l(this.b, b, this.b[this.C], this.C + 1)
};
q.Y = function(a, b, c) {
  return Qb.l(this.b, b, c, this.C)
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
  return null != b ? b : this.k = a = Ub(a)
};
q.ma = function() {
  if(1 < Za(this.la)) {
    return new Sc(Hb(this.la), this.wa, this.h, null)
  }
  var a = xb(this.wa);
  return null == a ? null : a
};
q.R = function(a, b) {
  return R(b, a)
};
q.toString = function() {
  return Lb(this)
};
q.A = aa();
q.Z = function() {
  return E.a(this.la, 0)
};
q.aa = function() {
  return 1 < Za(this.la) ? new Sc(Hb(this.la), this.wa, this.h, null) : null == this.wa ? O : this.wa
};
q.Cd = function() {
  return null == this.wa ? null : this.wa
};
q.G = function(a, b) {
  return Wb(a, b)
};
q.P = function(a, b) {
  return new Sc(this.la, this.wa, b, this.k)
};
q.O = g("h");
q.T = function() {
  return gc(O, this.h)
};
q.Ec = g("la");
q.Yb = function() {
  return null == this.wa ? O : this.wa
};
function Tc(a, b) {
  return 0 === Za(a) ? b : new Sc(a, b, null, null)
}
function Uc(a) {
  for(var b = [];;) {
    if(L(a)) {
      b.push(M(a)), a = P(a)
    }else {
      return b
    }
  }
}
function Vc(a, b) {
  if(Rb(a)) {
    return T(a)
  }
  for(var c = a, d = b, e = 0;;) {
    var f;
    f = (f = 0 < d) ? L(c) : f;
    if(z(f)) {
      c = P(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var Xc = function Wc(b) {
  return null == b ? null : null == P(b) ? L(M(b)) : x.n ? R(M(b), Wc(P(b))) : null
}, Yc = function() {
  function a(a, b, c, d) {
    return R(a, R(b, R(c, d)))
  }
  function b(a, b, c) {
    return R(a, R(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var r = null;
      4 < arguments.length && (r = Q(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, r)
    }
    function b(a, c, d, e, f) {
      return R(a, R(c, R(d, R(e, Xc(f)))))
    }
    a.s = 4;
    a.m = function(a) {
      var c = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var e = M(a);
      a = P(a);
      var n = M(a);
      a = N(a);
      return b(c, d, e, n, a)
    };
    a.g = b;
    return a
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return L(c);
      case 2:
        return R(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        return d.g(c, f, h, k, Q(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.s = 4;
  c.m = d.m;
  c.c = function(a) {
    return L(a)
  };
  c.a = function(a, b) {
    return R(a, b)
  };
  c.d = b;
  c.l = a;
  c.g = d.g;
  return c
}();
function Zc(a, b, c) {
  var d = L(c);
  if(0 === b) {
    return a.o ? a.o() : a.call(null)
  }
  c = F(d);
  var e = H(d);
  if(1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(null, c)
  }
  var d = F(e), f = H(e);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d)
  }
  var e = F(f), h = H(f);
  if(3 === b) {
    return a.d ? a.d(c, d, e) : a.d ? a.d(c, d, e) : a.call(null, c, d, e)
  }
  var f = F(h), k = H(h);
  if(4 === b) {
    return a.l ? a.l(c, d, e, f) : a.l ? a.l(c, d, e, f) : a.call(null, c, d, e, f)
  }
  h = F(k);
  k = H(k);
  if(5 === b) {
    return a.S ? a.S(c, d, e, f, h) : a.S ? a.S(c, d, e, f, h) : a.call(null, c, d, e, f, h)
  }
  a = F(k);
  var l = H(k);
  if(6 === b) {
    return a.sa ? a.sa(c, d, e, f, h, a) : a.sa ? a.sa(c, d, e, f, h, a) : a.call(null, c, d, e, f, h, a)
  }
  var k = F(l), m = H(l);
  if(7 === b) {
    return a.ib ? a.ib(c, d, e, f, h, a, k) : a.ib ? a.ib(c, d, e, f, h, a, k) : a.call(null, c, d, e, f, h, a, k)
  }
  var l = F(m), n = H(m);
  if(8 === b) {
    return a.Rc ? a.Rc(c, d, e, f, h, a, k, l) : a.Rc ? a.Rc(c, d, e, f, h, a, k, l) : a.call(null, c, d, e, f, h, a, k, l)
  }
  var m = F(n), r = H(n);
  if(9 === b) {
    return a.Sc ? a.Sc(c, d, e, f, h, a, k, l, m) : a.Sc ? a.Sc(c, d, e, f, h, a, k, l, m) : a.call(null, c, d, e, f, h, a, k, l, m)
  }
  var n = F(r), y = H(r);
  if(10 === b) {
    return a.Gc ? a.Gc(c, d, e, f, h, a, k, l, m, n) : a.Gc ? a.Gc(c, d, e, f, h, a, k, l, m, n) : a.call(null, c, d, e, f, h, a, k, l, m, n)
  }
  var r = F(y), G = H(y);
  if(11 === b) {
    return a.Hc ? a.Hc(c, d, e, f, h, a, k, l, m, n, r) : a.Hc ? a.Hc(c, d, e, f, h, a, k, l, m, n, r) : a.call(null, c, d, e, f, h, a, k, l, m, n, r)
  }
  var y = F(G), C = H(G);
  if(12 === b) {
    return a.Ic ? a.Ic(c, d, e, f, h, a, k, l, m, n, r, y) : a.Ic ? a.Ic(c, d, e, f, h, a, k, l, m, n, r, y) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y)
  }
  var G = F(C), S = H(C);
  if(13 === b) {
    return a.Jc ? a.Jc(c, d, e, f, h, a, k, l, m, n, r, y, G) : a.Jc ? a.Jc(c, d, e, f, h, a, k, l, m, n, r, y, G) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G)
  }
  var C = F(S), Y = H(S);
  if(14 === b) {
    return a.Kc ? a.Kc(c, d, e, f, h, a, k, l, m, n, r, y, G, C) : a.Kc ? a.Kc(c, d, e, f, h, a, k, l, m, n, r, y, G, C) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G, C)
  }
  var S = F(Y), ja = H(Y);
  if(15 === b) {
    return a.Lc ? a.Lc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S) : a.Lc ? a.Lc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G, C, S)
  }
  var Y = F(ja), ta = H(ja);
  if(16 === b) {
    return a.Mc ? a.Mc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y) : a.Mc ? a.Mc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y)
  }
  var ja = F(ta), Wa = H(ta);
  if(17 === b) {
    return a.Nc ? a.Nc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y, ja) : a.Nc ? a.Nc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y, ja) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y, ja)
  }
  var ta = F(Wa), vc = H(Wa);
  if(18 === b) {
    return a.Oc ? a.Oc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y, ja, ta) : a.Oc ? a.Oc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y, ja, ta) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y, ja, ta)
  }
  Wa = F(vc);
  vc = H(vc);
  if(19 === b) {
    return a.Pc ? a.Pc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y, ja, ta, Wa) : a.Pc ? a.Pc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y, ja, ta, Wa) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y, ja, ta, Wa)
  }
  var Tb = F(vc);
  H(vc);
  if(20 === b) {
    return a.Qc ? a.Qc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y, ja, ta, Wa, Tb) : a.Qc ? a.Qc(c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y, ja, ta, Wa, Tb) : a.call(null, c, d, e, f, h, a, k, l, m, n, r, y, G, C, S, Y, ja, ta, Wa, Tb)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var fc = function() {
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
      5 < arguments.length && (C = Q(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, C)
    }
    function b(a, c, d, e, f, h) {
      c = R(c, R(d, R(e, R(f, Xc(h)))));
      d = a.s;
      return a.m ? (e = Vc(c, d + 1), e <= d ? Zc(a, e, c) : a.m(c)) : a.apply(a, Uc(c))
    }
    a.s = 5;
    a.m = function(a) {
      var c = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var e = M(a);
      a = P(a);
      var f = M(a);
      a = P(a);
      var h = M(a);
      a = N(a);
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
        return f.g(e, k, l, m, n, Q(arguments, 5))
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
    if(null == L(b)) {
      return!0
    }
    if(z(a.c ? a.c(M(b)) : a.call(null, M(b)))) {
      var c = a, d = P(b);
      a = c;
      b = d
    }else {
      return x.n ? !1 : null
    }
  }
}
function ad(a) {
  for(var b = bd;;) {
    if(L(a)) {
      var c = b.c ? b.c(M(a)) : b.call(null, M(a));
      if(z(c)) {
        return c
      }
      a = P(a)
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
      0 < arguments.length && Q(Array.prototype.slice.call(arguments, 0), 0);
      return a
    }
    b.s = 0;
    b.m = function(b) {
      L(b);
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
      var m = L(b), n = L(c), r = L(e);
      return(m ? n ? r : n : m) ? R(a.d ? a.d(M(m), M(n), M(r)) : a.call(null, M(m), M(n), M(r)), d.l(a, N(m), N(n), N(r))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new Nc(null, function() {
      var e = L(b), m = L(c);
      return(e ? m : e) ? R(a.a ? a.a(M(e), M(m)) : a.call(null, M(e), M(m)), d.d(a, N(e), N(m))) : null
    }, null, null)
  }
  function c(a, b) {
    return new Nc(null, function() {
      var c = L(b);
      if(c) {
        if(oc(c)) {
          for(var e = Ib(c), m = T(e), n = new Pc(Array(m), 0), r = 0;;) {
            if(r < m) {
              var y = a.c ? a.c(E.a(e, r)) : a.call(null, E.a(e, r));
              n.add(y);
              r += 1
            }else {
              break
            }
          }
          return Tc(n.la(), d.a(a, Jb(c)))
        }
        return R(a.c ? a.c(M(c)) : a.call(null, M(c)), d.a(a, N(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var y = null;
      4 < arguments.length && (y = Q(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, y)
    }
    function b(a, c, e, f, h) {
      return d.a(function(b) {
        return fc.a(a, b)
      }, function G(a) {
        return new Nc(null, function() {
          var b = d.a(L, a);
          return $c(bd, b) ? R(d.a(M, b), G(d.a(N, b))) : null
        }, null, null)
      }(Yb.g(h, f, Q([e, c], 0))))
    }
    a.s = 4;
    a.m = function(a) {
      var c = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var e = M(a);
      a = P(a);
      var f = M(a);
      a = N(a);
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
        return e.g(d, h, k, l, Q(arguments, 4))
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
}(), fd = function ed(b, c) {
  return new Nc(null, function() {
    if(0 < b) {
      var d = L(c);
      return d ? R(M(d), ed(b - 1, N(d))) : null
    }
    return null
  }, null, null)
};
function gd(a, b) {
  var c;
  null != a ? (c = a ? ((c = a.p & 4) ? c : a.Rf) ? !0 : !1 : !1, c ? (c = wc.d(Eb, Db(a), b), c = Fb(c)) : c = wc.d(bb, a, b)) : c = wc.d(Yb, O, b);
  return c
}
function hd(a, b) {
  this.r = a;
  this.b = b
}
function id(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function jd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new hd(a, Array(32));
    d.b[0] = c;
    c = d;
    b -= 5
  }
}
var ld = function kd(b, c, d, e) {
  var f = new hd(d.r, d.b.slice()), h = b.f - 1 >>> c & 31;
  5 === c ? f.b[h] = e : (d = d.b[h], b = null != d ? kd(b, c - 5, d, e) : jd(null, c - 5, e), f.b[h] = b);
  return f
};
function md(a, b) {
  throw Error([D("No item "), D(a), D(" in vector of length "), D(b)].join(""));
}
function nd(a, b) {
  var c = 0 <= b;
  if(c ? b < a.f : c) {
    if(b >= id(a)) {
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
    return md(b, a.f)
  }
}
var pd = function od(b, c, d, e, f) {
  var h = new hd(d.r, d.b.slice());
  if(0 === c) {
    h.b[e & 31] = f
  }else {
    var k = e >>> c & 31;
    b = od(b, c - 5, d.b[k], e, f);
    h.b[k] = b
  }
  return h
};
function qd(a, b, c, d, e, f) {
  this.h = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.t = e;
  this.k = f;
  this.p = 4;
  this.e = 167668511
}
q = qd.prototype;
q.Zb = function() {
  return new rd(this.f, this.shift, sd.c ? sd.c(this.root) : sd.call(null, this.root), td.c ? td.c(this.t) : td.call(null, this.t))
};
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Ub(a)
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
    return id(a) <= b ? (a = this.t.slice(), a[b & 31] = c, new qd(this.h, this.f, this.shift, this.root, a, null)) : new qd(this.h, this.f, this.shift, pd(a, this.shift, this.root, b, c), this.t, null)
  }
  if(b === this.f) {
    return a.R(a, c)
  }
  if(x.n) {
    throw Error([D("Index "), D(b), D(" out of bounds  [0,"), D(this.f), D("]")].join(""));
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
  if(32 > this.f - id(a)) {
    var c = this.t.slice();
    c.push(b);
    return new qd(this.h, this.f + 1, this.shift, this.root, c, null)
  }
  var d = this.f >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new hd(null, Array(32));
    d.b[0] = this.root;
    var e = jd(null, this.shift, new hd(null, this.t));
    d.b[1] = e
  }else {
    d = ld(a, this.shift, this.root, new hd(null, this.t))
  }
  return new qd(this.h, this.f + 1, c, d, [b], null)
};
q.Gd = function(a) {
  return a.N(a, 0)
};
q.Hd = function(a) {
  return a.N(a, 1)
};
q.toString = function() {
  return Lb(this)
};
q.X = function(a, b) {
  return Pb.a(a, b)
};
q.Y = function(a, b, c) {
  return Pb.d(a, b, c)
};
q.A = function(a) {
  return 0 === this.f ? null : 32 > this.f ? Q.c(this.t) : x.n ? U.d ? U.d(a, 0, 0) : U.call(null, a, 0, 0) : null
};
q.L = g("f");
q.Uc = function(a, b, c) {
  return a.za(a, b, c)
};
q.G = function(a, b) {
  return Wb(a, b)
};
q.P = function(a, b) {
  return new qd(b, this.f, this.shift, this.root, this.t, this.k)
};
q.O = g("h");
q.N = function(a, b) {
  return nd(a, b)[b & 31]
};
q.U = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.f : d) ? a.N(a, b) : c
};
q.T = function() {
  return gc(ud, this.h)
};
var vd = new hd(null, Array(32)), ud = new qd(null, 0, 5, vd, [], 0);
function wd(a) {
  var b = a.length;
  if(32 > b) {
    return new qd(null, b, 5, vd, a, null)
  }
  for(var c = a.slice(0, 32), d = 32, e = Db(new qd(null, 32, 5, vd, c, null));;) {
    if(d < b) {
      c = d + 1, e = Eb(e, a[d]), d = c
    }else {
      return Fb(e)
    }
  }
}
function xd(a) {
  return Fb(wc.d(Eb, Db(ud), a))
}
function yd(a, b, c, d, e, f) {
  this.K = a;
  this.ja = b;
  this.j = c;
  this.C = d;
  this.h = e;
  this.k = f;
  this.e = 32243948;
  this.p = 1536
}
q = yd.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Ub(a)
};
q.ma = function(a) {
  return this.C + 1 < this.ja.length ? (a = U.l ? U.l(this.K, this.ja, this.j, this.C + 1) : U.call(null, this.K, this.ja, this.j, this.C + 1), null == a ? null : a) : a.Cd(a)
};
q.R = function(a, b) {
  return R(b, a)
};
q.toString = function() {
  return Lb(this)
};
q.X = function(a, b) {
  return Pb.a(zd.d ? zd.d(this.K, this.j + this.C, T(this.K)) : zd.call(null, this.K, this.j + this.C, T(this.K)), b)
};
q.Y = function(a, b, c) {
  return Pb.d(zd.d ? zd.d(this.K, this.j + this.C, T(this.K)) : zd.call(null, this.K, this.j + this.C, T(this.K)), b, c)
};
q.A = aa();
q.Z = function() {
  return this.ja[this.C]
};
q.aa = function(a) {
  return this.C + 1 < this.ja.length ? (a = U.l ? U.l(this.K, this.ja, this.j, this.C + 1) : U.call(null, this.K, this.ja, this.j, this.C + 1), null == a ? O : a) : a.Yb(a)
};
q.Cd = function() {
  var a = this.ja.length, a = this.j + a < Za(this.K) ? U.d ? U.d(this.K, this.j + a, 0) : U.call(null, this.K, this.j + a, 0) : null;
  return null == a ? null : a
};
q.G = function(a, b) {
  return Wb(a, b)
};
q.P = function(a, b) {
  return U.S ? U.S(this.K, this.ja, this.j, this.C, b) : U.call(null, this.K, this.ja, this.j, this.C, b)
};
q.T = function() {
  return gc(ud, this.h)
};
q.Ec = function() {
  return Rc.a(this.ja, this.C)
};
q.Yb = function() {
  var a = this.ja.length, a = this.j + a < Za(this.K) ? U.d ? U.d(this.K, this.j + a, 0) : U.call(null, this.K, this.j + a, 0) : null;
  return null == a ? O : a
};
var U = function() {
  function a(a, b, c, d, l) {
    return new yd(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new yd(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new yd(a, nd(a, b), b, c, null, null)
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
function Ad(a, b, c, d, e) {
  this.h = a;
  this.ya = b;
  this.start = c;
  this.end = d;
  this.k = e;
  this.p = 0;
  this.e = 32400159
}
q = Ad.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Ub(a)
};
q.ea = function(a, b) {
  return a.U(a, b, null)
};
q.W = function(a, b, c) {
  return a.U(a, b, c)
};
q.za = function(a, b, c) {
  var d = this, e = d.start + b;
  return Bd.S ? Bd.S(d.h, cc.d(d.ya, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : Bd.call(null, d.h, cc.d(d.ya, e, c), d.start, function() {
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
  return Bd.S ? Bd.S(this.h, mb(this.ya, this.end, b), this.start, this.end + 1, null) : Bd.call(null, this.h, mb(this.ya, this.end, b), this.start, this.end + 1, null)
};
q.toString = function() {
  return Lb(this)
};
q.X = function(a, b) {
  return Pb.a(a, b)
};
q.Y = function(a, b, c) {
  return Pb.d(a, b, c)
};
q.A = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : R(E.a(a.ya, d), new Nc(null, function() {
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
  return Wb(a, b)
};
q.P = function(a, b) {
  return Bd.S ? Bd.S(b, this.ya, this.start, this.end, this.k) : Bd.call(null, b, this.ya, this.start, this.end, this.k)
};
q.O = g("h");
q.N = function(a, b) {
  var c = 0 > b;
  return(c ? c : this.end <= this.start + b) ? md(b, this.end - this.start) : E.a(this.ya, this.start + b)
};
q.U = function(a, b, c) {
  return((a = 0 > b) ? a : this.end <= this.start + b) ? c : E.d(this.ya, this.start + b, c)
};
q.T = function() {
  return gc(ud, this.h)
};
function Bd(a, b, c, d, e) {
  for(;;) {
    if(b instanceof Ad) {
      var f = b.start + c, h = b.start + d;
      b = b.ya;
      c = f;
      d = h
    }else {
      var k = T(b);
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
    return c.d(a, b, T(a))
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
function sd(a) {
  return new hd({}, a.b.slice())
}
function td(a) {
  var b = Array(32);
  qc(a, 0, b, 0, a.length);
  return b
}
var Dd = function Cd(b, c, d, e) {
  d = b.root.r === d.r ? d : new hd(b.root.r, d.b.slice());
  var f = b.f - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var h = d.b[f];
    b = null != h ? Cd(b, c - 5, h, e) : jd(b.root.r, c - 5, e)
  }
  d.b[f] = b;
  return d
};
function rd(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.t = d;
  this.e = 275;
  this.p = 88
}
q = rd.prototype;
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
    return nd(a, b)[b & 31]
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
function Ed(a, b, c, d) {
  if(a.root.r) {
    if(function() {
      var b = 0 <= c;
      return b ? c < a.f : b
    }()) {
      if(id(b) <= c) {
        a.t[c & 31] = d
      }else {
        var e = function h(b, e) {
          var m = a.root.r === e.r ? e : new hd(a.root.r, e.b.slice());
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
    if(x.n) {
      throw Error([D("Index "), D(c), D(" out of bounds for TransientVector of length"), D(a.f)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
}
q.jb = function(a, b, c) {
  return Ed(a, a, b, c)
};
q.Cb = function(a, b) {
  if(this.root.r) {
    if(32 > this.f - id(a)) {
      this.t[this.f & 31] = b
    }else {
      var c = new hd(this.root.r, this.t), d = Array(32);
      d[0] = b;
      this.t = d;
      if(this.f >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = jd(this.root.r, this.shift, c);
        this.root = new hd(this.root.r, d);
        this.shift = e
      }else {
        this.root = Dd(a, this.shift, this.root, c)
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
    a = this.f - id(a);
    var b = Array(a);
    qc(this.t, 0, b, 0, a);
    return new qd(null, this.f, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function Fd() {
  this.p = 0;
  this.e = 2097152
}
Fd.prototype.G = p(!1);
var Gd = new Fd;
function Hd(a, b) {
  return sc(mc(b) ? T(a) === T(b) ? $c(bd, dd.a(function(a) {
    return Ob.a(ac.d(b, M(a), Gd), M(P(a)))
  }, a)) : null : null)
}
function Id(a, b) {
  var c = a.b;
  if(b instanceof Jc) {
    a: {
      for(var d = c.length, e = b.Pa, f = 0;;) {
        if(d <= f) {
          c = -1;
          break a
        }
        var h = c[f], k = h instanceof Jc;
        if(k ? e === h.Pa : k) {
          c = f;
          break a
        }
        if(x.n) {
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
          if(x.n) {
            e += 2
          }else {
            c = null;
            break a
          }
        }
        c = void 0
      }
    }else {
      if(b instanceof J) {
        a: {
          d = c.length;
          e = b.eb;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            h = c[f];
            if((k = h instanceof J) ? e === h.eb : k) {
              c = f;
              break a
            }
            if(x.n) {
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
              if(x.n) {
                e += 2
              }else {
                c = null;
                break a
              }
            }
            c = void 0
          }
        }else {
          if(x.n) {
            a: {
              d = c.length;
              for(e = 0;;) {
                if(d <= e) {
                  c = -1;
                  break a
                }
                if(Ob.a(b, c[e])) {
                  c = e;
                  break a
                }
                if(x.n) {
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
  this.b = a;
  this.j = b;
  this.fb = c;
  this.p = 0;
  this.e = 32374990
}
q = Jd.prototype;
q.M = function(a) {
  return Ub(a)
};
q.ma = function() {
  return this.j < this.b.length - 2 ? new Jd(this.b, this.j + 2, this.fb) : null
};
q.R = function(a, b) {
  return R(b, a)
};
q.toString = function() {
  return Lb(this)
};
q.X = function(a, b) {
  return xc.a(b, a)
};
q.Y = function(a, b, c) {
  return xc.d(b, c, a)
};
q.A = aa();
q.L = function() {
  return(this.b.length - this.j) / 2
};
q.Z = function() {
  return wd([this.b[this.j], this.b[this.j + 1]])
};
q.aa = function() {
  return this.j < this.b.length - 2 ? new Jd(this.b, this.j + 2, this.fb) : O
};
q.G = function(a, b) {
  return Wb(a, b)
};
q.P = function(a, b) {
  return new Jd(this.b, this.j, b)
};
q.O = g("fb");
q.T = function() {
  return gc(O, this.fb)
};
function Kd(a, b, c, d) {
  this.h = a;
  this.f = b;
  this.b = c;
  this.k = d;
  this.p = 4;
  this.e = 16123663
}
q = Kd.prototype;
q.Zb = function() {
  return new Ld({}, this.b.length, this.b.slice())
};
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Dc(a)
};
q.ea = function(a, b) {
  return a.W(a, b, null)
};
q.W = function(a, b, c) {
  a = Id(a, b);
  return-1 === a ? c : this.b[a + 1]
};
q.za = function(a, b, c) {
  var d = Id(a, b);
  if(-1 === d) {
    if(this.f < Md) {
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
      return new Kd(this.h, this.f + 1, e, null)
    }
    return rb(gb(gd(Nd, a), b, c), this.h)
  }
  return c === this.b[d + 1] ? a : x.n ? (b = this.b.slice(), b[d + 1] = c, new Kd(this.h, this.f, b, null)) : null
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
  return nc(b) ? a.za(a, E.a(b, 0), E.a(b, 1)) : wc.d(bb, a, b)
};
q.toString = function() {
  return Lb(this)
};
q.A = function() {
  return 0 <= this.b.length - 2 ? new Jd(this.b, 0, null) : null
};
q.L = g("f");
q.G = function(a, b) {
  return Hd(a, b)
};
q.P = function(a, b) {
  return new Kd(b, this.f, this.b, this.k)
};
q.O = g("h");
q.T = function() {
  return rb(Od, this.h)
};
var Od = new Kd(null, 0, [], null), Md = 8;
function Ra(a) {
  return new Kd(null, a.length / 2, a, null)
}
function Ld(a, b, c) {
  this.mb = a;
  this.$a = b;
  this.b = c;
  this.p = 56;
  this.e = 258
}
q = Ld.prototype;
q.jb = function(a, b, c) {
  if(z(this.mb)) {
    var d = Id(a, b);
    if(-1 === d) {
      if(this.$a + 2 <= 2 * Md) {
        return this.$a += 2, this.b.push(b), this.b.push(c), a
      }
      a = Pd.a ? Pd.a(this.$a, this.b) : Pd.call(null, this.$a, this.b);
      return Gb(a, b, c)
    }
    c !== this.b[d + 1] && (this.b[d + 1] = c);
    return a
  }
  throw Error("assoc! after persistent!");
};
q.Cb = function(a, b) {
  if(z(this.mb)) {
    var c;
    c = b ? ((c = b.e & 2048) ? c : b.Pe) ? !0 : b.e ? !1 : A(ib, b) : A(ib, b);
    if(c) {
      return a.jb(a, Ec.c ? Ec.c(b) : Ec.call(null, b), Fc.c ? Fc.c(b) : Fc.call(null, b))
    }
    c = L(b);
    for(var d = a;;) {
      var e = M(c);
      if(z(e)) {
        c = P(c), d = d.jb(d, Ec.c ? Ec.c(e) : Ec.call(null, e), Fc.c ? Fc.c(e) : Fc.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
q.$b = function() {
  if(z(this.mb)) {
    return this.mb = !1, new Kd(null, zc(this.$a), this.b, null)
  }
  throw Error("persistent! called twice");
};
q.ea = function(a, b) {
  return a.W(a, b, null)
};
q.W = function(a, b, c) {
  if(z(this.mb)) {
    return a = Id(a, b), -1 === a ? c : this.b[a + 1]
  }
  throw Error("lookup after persistent!");
};
q.L = function() {
  if(z(this.mb)) {
    return zc(this.$a)
  }
  throw Error("count after persistent!");
};
function Pd(a, b) {
  for(var c = Db(Nd), d = 0;;) {
    if(d < a) {
      c = Gb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Qd() {
  this.J = !1
}
function Rd(a, b) {
  return a === b ? !0 : Kc(a, b) ? !0 : x.n ? Ob.a(a, b) : null
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
  c.S = a;
  return c
}(), Td = function() {
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
function Ud(a, b, c) {
  this.r = a;
  this.I = b;
  this.b = c
}
q = Ud.prototype;
q.oa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Cc(this.I & h - 1);
  if(0 === (this.I & h)) {
    var l = Cc(this.I);
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
      k[c >>> b & 31] = Vd.oa(a, b + 5, c, d, e, f);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.I >>> d & 1) && (k[d] = null != this.b[e] ? Vd.oa(a, b + 5, K.c(this.b[e]), this.b[e], this.b[e + 1], f) : this.b[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new Wd(a, l + 1, k)
    }
    return x.n ? (b = Array(2 * (l + 4)), qc(this.b, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, qc(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.J = !0, a = this.nb(a), a.b = b, a.I |= h, a) : null
  }
  l = this.b[2 * k];
  h = this.b[2 * k + 1];
  return null == l ? (l = h.oa(a, b + 5, c, d, e, f), l === h ? this : Td.l(this, a, 2 * k + 1, l)) : Rd(d, l) ? e === h ? this : Td.l(this, a, 2 * k + 1, e) : x.n ? (f.J = !0, Td.sa(this, a, 2 * k, null, 2 * k + 1, Xd.ib ? Xd.ib(a, b + 5, l, h, c, d, e) : Xd.call(null, a, b + 5, l, h, c, d, e))) : null
};
q.Kb = function() {
  return Yd.c ? Yd.c(this.b) : Yd.call(null, this.b)
};
q.nb = function(a) {
  if(a === this.r) {
    return this
  }
  var b = Cc(this.I), c = Array(0 > b ? 4 : 2 * (b + 1));
  qc(this.b, 0, c, 0, 2 * b);
  return new Ud(a, this.I, c)
};
q.na = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Cc(this.I & f - 1);
  if(0 === (this.I & f)) {
    var k = Cc(this.I);
    if(16 <= k) {
      h = Array(32);
      h[b >>> a & 31] = Vd.na(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.I >>> c & 1) && (h[c] = null != this.b[d] ? Vd.na(a + 5, K.c(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Wd(null, k + 1, h)
    }
    a = Array(2 * (k + 1));
    qc(this.b, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    qc(this.b, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.J = !0;
    return new Ud(null, this.I | f, a)
  }
  k = this.b[2 * h];
  f = this.b[2 * h + 1];
  return null == k ? (k = f.na(a + 5, b, c, d, e), k === f ? this : new Ud(null, this.I, Sd.d(this.b, 2 * h + 1, k))) : Rd(c, k) ? d === f ? this : new Ud(null, this.I, Sd.d(this.b, 2 * h + 1, d)) : x.n ? (e.J = !0, new Ud(null, this.I, Sd.S(this.b, 2 * h, null, 2 * h + 1, Xd.sa ? Xd.sa(a + 5, k, f, b, c, d) : Xd.call(null, a + 5, k, f, b, c, d)))) : null
};
q.Za = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.I & e)) {
    return d
  }
  var f = Cc(this.I & e - 1), e = this.b[2 * f], f = this.b[2 * f + 1];
  return null == e ? f.Za(a + 5, b, c, d) : Rd(c, e) ? f : x.n ? d : null
};
var Vd = new Ud(null, 0, []);
function Wd(a, b, c) {
  this.r = a;
  this.f = b;
  this.b = c
}
q = Wd.prototype;
q.oa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.b[h];
  if(null == k) {
    return a = Td.l(this, a, h, Vd.oa(a, b + 5, c, d, e, f)), a.f += 1, a
  }
  b = k.oa(a, b + 5, c, d, e, f);
  return b === k ? this : Td.l(this, a, h, b)
};
q.Kb = function() {
  return Zd.c ? Zd.c(this.b) : Zd.call(null, this.b)
};
q.nb = function(a) {
  return a === this.r ? this : new Wd(a, this.f, this.b.slice())
};
q.na = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.b[f];
  if(null == h) {
    return new Wd(null, this.f + 1, Sd.d(this.b, f, Vd.na(a + 5, b, c, d, e)))
  }
  a = h.na(a + 5, b, c, d, e);
  return a === h ? this : new Wd(null, this.f, Sd.d(this.b, f, a))
};
q.Za = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
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
  this.r = a;
  this.Ma = b;
  this.f = c;
  this.b = d
}
q = ae.prototype;
q.oa = function(a, b, c, d, e, f) {
  if(c === this.Ma) {
    b = $d(this.b, this.f, d);
    if(-1 === b) {
      if(this.b.length > 2 * this.f) {
        return a = Td.sa(this, a, 2 * this.f, d, 2 * this.f + 1, e), f.J = !0, a.f += 1, a
      }
      c = this.b.length;
      b = Array(c + 2);
      qc(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.J = !0;
      f = this.f + 1;
      a === this.r ? (this.b = b, this.f = f, a = this) : a = new ae(this.r, this.Ma, f, b);
      return a
    }
    return this.b[b + 1] === e ? this : Td.l(this, a, b + 1, e)
  }
  return(new Ud(a, 1 << (this.Ma >>> b & 31), [null, this, null, null])).oa(a, b, c, d, e, f)
};
q.Kb = function() {
  return Yd.c ? Yd.c(this.b) : Yd.call(null, this.b)
};
q.nb = function(a) {
  if(a === this.r) {
    return this
  }
  var b = Array(2 * (this.f + 1));
  qc(this.b, 0, b, 0, 2 * this.f);
  return new ae(a, this.Ma, this.f, b)
};
q.na = function(a, b, c, d, e) {
  return b === this.Ma ? (a = $d(this.b, this.f, c), -1 === a ? (a = this.b.length, b = Array(a + 2), qc(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.J = !0, new ae(null, this.Ma, this.f + 1, b)) : Ob.a(this.b[a], d) ? this : new ae(null, this.Ma, this.f, Sd.d(this.b, a + 1, d))) : (new Ud(null, 1 << (this.Ma >>> a & 31), [null, this])).na(a, b, c, d, e)
};
q.Za = function(a, b, c, d) {
  a = $d(this.b, this.f, c);
  return 0 > a ? d : Rd(c, this.b[a]) ? this.b[a + 1] : x.n ? d : null
};
var Xd = function() {
  function a(a, b, c, h, k, l, m) {
    var n = K.c(c);
    if(n === k) {
      return new ae(null, n, 2, [c, h, l, m])
    }
    var r = new Qd;
    return Vd.oa(a, b, n, c, h, r).oa(a, b, k, l, m, r)
  }
  function b(a, b, c, h, k, l) {
    var m = K.c(b);
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
  this.h = a;
  this.pa = b;
  this.j = c;
  this.u = d;
  this.k = e;
  this.p = 0;
  this.e = 32374860
}
q = be.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Ub(a)
};
q.R = function(a, b) {
  return R(b, a)
};
q.toString = function() {
  return Lb(this)
};
q.X = function(a, b) {
  return xc.a(b, a)
};
q.Y = function(a, b, c) {
  return xc.d(b, c, a)
};
q.A = aa();
q.Z = function() {
  return null == this.u ? wd([this.pa[this.j], this.pa[this.j + 1]]) : M(this.u)
};
q.aa = function() {
  return null == this.u ? Yd.d ? Yd.d(this.pa, this.j + 2, null) : Yd.call(null, this.pa, this.j + 2, null) : Yd.d ? Yd.d(this.pa, this.j, P(this.u)) : Yd.call(null, this.pa, this.j, P(this.u))
};
q.G = function(a, b) {
  return Wb(a, b)
};
q.P = function(a, b) {
  return new be(b, this.pa, this.j, this.u, this.k)
};
q.O = g("h");
q.T = function() {
  return gc(O, this.h)
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
          if(z(h) && (h = h.Kb(), z(h))) {
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
  c.c = b;
  c.d = a;
  return c
}();
function ce(a, b, c, d, e) {
  this.h = a;
  this.pa = b;
  this.j = c;
  this.u = d;
  this.k = e;
  this.p = 0;
  this.e = 32374860
}
q = ce.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Ub(a)
};
q.R = function(a, b) {
  return R(b, a)
};
q.toString = function() {
  return Lb(this)
};
q.X = function(a, b) {
  return xc.a(b, a)
};
q.Y = function(a, b, c) {
  return xc.d(b, c, a)
};
q.A = aa();
q.Z = function() {
  return M(this.u)
};
q.aa = function() {
  return Zd.l ? Zd.l(null, this.pa, this.j, P(this.u)) : Zd.call(null, null, this.pa, this.j, P(this.u))
};
q.G = function(a, b) {
  return Wb(a, b)
};
q.P = function(a, b) {
  return new ce(b, this.pa, this.j, this.u, this.k)
};
q.O = g("h");
q.T = function() {
  return gc(O, this.h)
};
var Zd = function() {
  function a(a, b, c, h) {
    if(null == h) {
      for(h = b.length;;) {
        if(c < h) {
          var k = b[c];
          if(z(k) && (k = k.Kb(), z(k))) {
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
function de(a, b, c, d, e, f) {
  this.h = a;
  this.f = b;
  this.root = c;
  this.ca = d;
  this.ia = e;
  this.k = f;
  this.p = 4;
  this.e = 16123663
}
q = de.prototype;
q.Zb = function() {
  return new ee({}, this.root, this.f, this.ca, this.ia)
};
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Dc(a)
};
q.ea = function(a, b) {
  return a.W(a, b, null)
};
q.W = function(a, b, c) {
  return null == b ? this.ca ? this.ia : c : null == this.root ? c : x.n ? this.root.Za(0, K.c(b), b, c) : null
};
q.za = function(a, b, c) {
  if(null == b) {
    var d = this.ca;
    return(d ? c === this.ia : d) ? a : new de(this.h, this.ca ? this.f : this.f + 1, this.root, !0, c, null)
  }
  d = new Qd;
  c = (null == this.root ? Vd : this.root).na(0, K.c(b), b, c, d);
  return c === this.root ? a : new de(this.h, d.J ? this.f + 1 : this.f, c, this.ca, this.ia, null)
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
  return nc(b) ? a.za(a, E.a(b, 0), E.a(b, 1)) : wc.d(bb, a, b)
};
q.toString = function() {
  return Lb(this)
};
q.A = function() {
  if(0 < this.f) {
    var a = null != this.root ? this.root.Kb() : null;
    return this.ca ? R(wd([null, this.ia]), a) : a
  }
  return null
};
q.L = g("f");
q.G = function(a, b) {
  return Hd(a, b)
};
q.P = function(a, b) {
  return new de(b, this.f, this.root, this.ca, this.ia, this.k)
};
q.O = g("h");
q.T = function() {
  return rb(Nd, this.h)
};
var Nd = new de(null, 0, null, !1, null, 0);
function ee(a, b, c, d, e) {
  this.r = a;
  this.root = b;
  this.count = c;
  this.ca = d;
  this.ia = e;
  this.p = 56;
  this.e = 258
}
q = ee.prototype;
q.jb = function(a, b, c) {
  return fe(a, b, c)
};
q.Cb = function(a, b) {
  var c;
  a: {
    if(a.r) {
      c = b ? ((c = b.e & 2048) ? c : b.Pe) ? !0 : b.e ? !1 : A(ib, b) : A(ib, b);
      if(c) {
        c = fe(a, Ec.c ? Ec.c(b) : Ec.call(null, b), Fc.c ? Fc.c(b) : Fc.call(null, b));
        break a
      }
      c = L(b);
      for(var d = a;;) {
        var e = M(c);
        if(z(e)) {
          c = P(c), d = fe(d, Ec.c ? Ec.c(e) : Ec.call(null, e), Fc.c ? Fc.c(e) : Fc.call(null, e))
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
    a.r = null, a = new de(null, a.count, a.root, a.ca, a.ia, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
q.ea = function(a, b) {
  return null == b ? this.ca ? this.ia : null : null == this.root ? null : this.root.Za(0, K.c(b), b)
};
q.W = function(a, b, c) {
  return null == b ? this.ca ? this.ia : c : null == this.root ? c : this.root.Za(0, K.c(b), b, c)
};
q.L = function() {
  if(this.r) {
    return this.count
  }
  throw Error("count after persistent!");
};
function fe(a, b, c) {
  if(a.r) {
    if(null == b) {
      a.ia !== c && (a.ia = c), a.ca || (a.count += 1, a.ca = !0)
    }else {
      var d = new Qd;
      b = (null == a.root ? Vd : a.root).oa(a.r, 0, K.c(b), b, c, d);
      b !== a.root && (a.root = b);
      d.J && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var bc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = L(a), e = Db(Nd);;) {
      if(b) {
        a = P(P(b));
        var f = M(b), b = M(P(b)), e = Gb(e, f, b), b = a
      }else {
        return Fb(e)
      }
    }
  }
  a.s = 0;
  a.m = function(a) {
    a = L(a);
    return b(a)
  };
  a.g = b;
  return a
}(), ge = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return new Kd(null, zc(T(a)), fc.a(Va, a), null)
  }
  a.s = 0;
  a.m = function(a) {
    a = L(a);
    return b(a)
  };
  a.g = b;
  return a
}();
function Ec(a) {
  return jb(a)
}
function Fc(a) {
  return kb(a)
}
var he = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return z(ad(a)) ? wc.a(function(a, b) {
      return Yb.a(z(a) ? a : Od, b)
    }, a) : null
  }
  a.s = 0;
  a.m = function(a) {
    a = L(a);
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
  throw Error([D("Doesn't support name: "), D(a)].join(""));
}
function ie(a, b, c, d, e) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.k = e;
  this.p = 0;
  this.e = 32375006
}
q = ie.prototype;
q.M = function(a) {
  var b = this.k;
  return null != b ? b : this.k = a = Ub(a)
};
q.ma = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new ie(this.h, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new ie(this.h, this.start + this.step, this.end, this.step, null) : null
};
q.R = function(a, b) {
  return R(b, a)
};
q.toString = function() {
  return Lb(this)
};
q.X = function(a, b) {
  return Pb.a(a, b)
};
q.Y = function(a, b, c) {
  return Pb.d(a, b, c)
};
q.A = function(a) {
  return 0 < this.step ? this.start < this.end ? a : null : this.start > this.end ? a : null
};
q.L = function(a) {
  return Sa(a.A(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
q.Z = g("start");
q.aa = function(a) {
  return null != a.A(a) ? new ie(this.h, this.start + this.step, this.end, this.step, null) : O
};
q.G = function(a, b) {
  return Wb(a, b)
};
q.P = function(a, b) {
  return new ie(b, this.start, this.end, this.step, this.k)
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
  return gc(O, this.h)
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
  e.o = d;
  e.c = c;
  e.a = b;
  e.d = a;
  return e
}(), ke = function() {
  function a(a, b) {
    for(;;) {
      var c = L(b);
      if(z(c ? 0 < a : c)) {
        var c = a - 1, h = P(b);
        a = c;
        b = h
      }else {
        return null
      }
    }
  }
  function b(a) {
    for(;;) {
      if(L(a)) {
        a = P(a)
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
}(), le = function() {
  function a(a, b) {
    ke.a(a, b);
    return b
  }
  function b(a) {
    ke.c(a);
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
  I(a, c);
  L(h) && (b.d ? b.d(M(h), a, f) : b.call(null, M(h), a, f));
  c = L(P(h));
  h = null;
  for(var k = 0, l = 0;;) {
    if(l < k) {
      var m = h.N(h, l);
      I(a, d);
      b.d ? b.d(m, a, f) : b.call(null, m, a, f);
      l += 1
    }else {
      if(c = L(c)) {
        h = c, oc(h) ? (c = Ib(h), l = Jb(h), h = c, k = T(c), c = l) : (c = M(h), I(a, d), b.d ? b.d(c, a, f) : b.call(null, c, a, f), c = P(h), h = null, k = 0), l = 0
      }else {
        break
      }
    }
  }
  return I(a, e)
}
var me = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = Q(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = L(b), f = null, h = 0, k = 0;;) {
      if(k < h) {
        var l = f.N(f, k);
        I(a, l);
        k += 1
      }else {
        if(e = L(e)) {
          f = e, oc(f) ? (e = Ib(f), h = Jb(f), f = e, l = T(e), e = h, h = l) : (l = M(f), I(a, l), e = P(f), f = null, h = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.s = 1;
  a.m = function(a) {
    var d = M(a);
    a = N(a);
    return b(d, a)
  };
  a.g = b;
  return a
}(), ne = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function oe(a) {
  return[D('"'), D(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return ne[a]
  })), D('"')].join("")
}
var W = function pe(b, c, d) {
  if(null == b) {
    return I(c, "nil")
  }
  if(void 0 === b) {
    return I(c, "#\x3cundefined\x3e")
  }
  if(x.n) {
    z(function() {
      var c = ac.a(d, x.Rd);
      return z(c) ? (c = b ? ((c = b.e & 131072) ? c : b.Qe) ? !0 : b.e ? !1 : A(ob, b) : A(ob, b), z(c) ? hc(b) : c) : c
    }()) && (I(c, "^"), pe(hc(b), c, d), I(c, " "));
    if(null == b) {
      return I(c, "nil")
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
      var c = Ta(b) === Boolean;
      return c ? c : "number" === typeof b
    }()) {
      return I(c, "" + D(b))
    }
    if(b instanceof Array) {
      return V(c, pe, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if(u(b)) {
      return z(x.af.call(null, d)) ? I(c, oe(b)) : I(c, b)
    }
    if(dc(b)) {
      return me.g(c, Q(["#\x3c", "" + D(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + D(b);;) {
          if(T(d) < c) {
            d = [D("0"), D(d)].join("")
          }else {
            return d
          }
        }
      };
      return me.g(c, Q(['#inst "', "" + D(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return z(b instanceof RegExp) ? me.g(c, Q(['#"', b.source, '"'], 0)) : function() {
      var c;
      c = b ? ((c = b.e & 2147483648) ? c : b.V) ? !0 : b.e ? !1 : A(Ab, b) : A(Ab, b);
      return c
    }() ? Bb(b, c, d) : x.n ? me.g(c, Q(["#\x3c", "" + D(b), "\x3e"], 0)) : null
  }
  return null
}, qe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = Qa(), e = null == a;
    if(e ? e : Sa(L(a))) {
      b = ""
    }else {
      var e = D, f = new Oa, h = new Kb(f);
      a: {
        W(M(a), h, b);
        a = L(P(a));
        for(var k = null, l = 0, m = 0;;) {
          if(m < l) {
            var n = k.N(k, m);
            I(h, " ");
            W(n, h, b);
            m += 1
          }else {
            if(a = L(a)) {
              k = a, oc(k) ? (a = Ib(k), l = Jb(k), k = a, n = T(a), a = l, l = n) : (n = M(k), I(h, " "), W(n, h, b), a = P(k), k = null, l = 0), m = 0
            }else {
              break a
            }
          }
        }
      }
      zb(h);
      b = "" + e(f)
    }
    return b
  }
  a.s = 0;
  a.m = function(a) {
    a = L(a);
    return b(a)
  };
  a.g = b;
  return a
}();
Nb.prototype.V = !0;
Nb.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
Ad.prototype.V = !0;
Ad.prototype.D = function(a, b, c) {
  return V(b, W, "[", " ", "]", c, a)
};
Sc.prototype.V = !0;
Sc.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
Kd.prototype.V = !0;
Kd.prototype.D = function(a, b, c) {
  return V(b, function(a) {
    return V(b, W, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Nc.prototype.V = !0;
Nc.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
be.prototype.V = !0;
be.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
yd.prototype.V = !0;
yd.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
de.prototype.V = !0;
de.prototype.D = function(a, b, c) {
  return V(b, function(a) {
    return V(b, W, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
qd.prototype.V = !0;
qd.prototype.D = function(a, b, c) {
  return V(b, W, "[", " ", "]", c, a)
};
Gc.prototype.V = !0;
Gc.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
Jd.prototype.V = !0;
Jd.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
Hc.prototype.V = !0;
Hc.prototype.D = function(a, b) {
  return I(b, "()")
};
Ic.prototype.V = !0;
Ic.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
ie.prototype.V = !0;
ie.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
ce.prototype.V = !0;
ce.prototype.D = function(a, b, c) {
  return V(b, W, "(", " ", ")", c, a)
};
qd.prototype.Dd = !0;
qd.prototype.Ed = function(a, b) {
  return uc.a(a, b)
};
Ad.prototype.Dd = !0;
Ad.prototype.Ed = function(a, b) {
  return uc.a(a, b)
};
function re(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.Ef = c;
  this.Ff = d;
  this.e = 2153938944;
  this.p = 2
}
q = re.prototype;
q.M = function(a) {
  return ha(a)
};
q.Id = function(a, b, c) {
  for(var d = L(this.Ff), e = null, f = 0, h = 0;;) {
    if(h < f) {
      var k = e.N(e, h), l = $b.d(k, 0, null), k = $b.d(k, 1, null);
      k.l ? k.l(l, a, b, c) : k.call(null, l, a, b, c);
      h += 1
    }else {
      if(d = L(d)) {
        oc(d) ? (e = Ib(d), d = Jb(d), l = e, f = T(e), e = l) : (e = M(d), l = $b.d(e, 0, null), k = $b.d(e, 1, null), k.l ? k.l(l, a, b, c) : k.call(null, l, a, b, c), d = P(d), e = null, f = 0), h = 0
      }else {
        return null
      }
    }
  }
};
q.D = function(a, b, c) {
  I(b, "#\x3cAtom: ");
  W(this.state, b, c);
  return I(b, "\x3e")
};
q.O = g("h");
q.Fc = g("state");
q.G = function(a, b) {
  return a === b
};
var se = function() {
  function a(a) {
    return new re(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = Q(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d = rc(c) ? fc.a(bc, c) : c, e = ac.a(d, x.ig), d = ac.a(d, x.Rd);
      return new re(a, d, e, null)
    }
    a.s = 1;
    a.m = function(a) {
      var c = M(a);
      a = N(a);
      return b(c, a)
    };
    a.g = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, Q(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 1;
  b.m = c.m;
  b.c = a;
  b.g = c.g;
  return b
}();
function te(a, b) {
  var c = a.Ef;
  if(z(c) && !z(c.c ? c.c(b) : c.call(null, b))) {
    throw Error([D("Assert failed: "), D("Validator rejected reference state"), D("\n"), D(qe.g(Q([Vb(new J(null, "validate", "validate", 1233162959, null), new J(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  Cb(a, c, b);
  return b
}
var ue = function() {
  function a(a, b, c, d, e) {
    return te(a, b.l ? b.l(a.state, c, d, e) : b.call(null, a.state, c, d, e))
  }
  function b(a, b, c, d) {
    return te(a, b.d ? b.d(a.state, c, d) : b.call(null, a.state, c, d))
  }
  function c(a, b, c) {
    return te(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c))
  }
  function d(a, b) {
    return te(a, b.c ? b.c(a.state) : b.call(null, a.state))
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, G) {
      var C = null;
      5 < arguments.length && (C = Q(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, C)
    }
    function b(a, c, d, e, f, h) {
      return te(a, fc.g(c, a.state, d, e, f, Q([h], 0)))
    }
    a.s = 5;
    a.m = function(a) {
      var c = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var e = M(a);
      a = P(a);
      var f = M(a);
      a = P(a);
      var h = M(a);
      a = N(a);
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
        return f.g(e, k, l, m, n, Q(arguments, 5))
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
}(), ve = {};
function we(a) {
  if(a ? a.Oe : a) {
    return a.Oe(a)
  }
  var b;
  b = we[t(null == a ? null : a)];
  if(!b && (b = we._, !b)) {
    throw B("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a)
}
function xe(a) {
  return(a ? z(z(null) ? null : a.Ne) || (a.Wc ? 0 : A(ve, a)) : A(ve, a)) ? we(a) : function() {
    var b = "string" === typeof a;
    return b || (b = "number" === typeof a) ? b : (b = a instanceof Jc) ? b : a instanceof J
  }() ? ye.c ? ye.c(a) : ye.call(null, a) : qe.g(Q([a], 0))
}
var ye = function ze(b) {
  if(null == b) {
    return null
  }
  if(b ? z(z(null) ? null : b.Ne) || (b.Wc ? 0 : A(ve, b)) : A(ve, b)) {
    return we(b)
  }
  if(b instanceof Jc) {
    return Lc(b)
  }
  if(b instanceof J) {
    return"" + D(b)
  }
  if(mc(b)) {
    var c = {};
    b = L(b);
    for(var d = null, e = 0, f = 0;;) {
      if(f < e) {
        var h = d.N(d, f), k = $b.d(h, 0, null), h = $b.d(h, 1, null);
        c[xe(k)] = ze(h);
        f += 1
      }else {
        if(b = L(b)) {
          oc(b) ? (e = Ib(b), b = Jb(b), d = e, e = T(e)) : (e = M(b), d = $b.d(e, 0, null), e = $b.d(e, 1, null), c[xe(d)] = ze(e), b = P(b), d = null, e = 0), f = 0
        }else {
          break
        }
      }
    }
    return c
  }
  return kc(b) ? fc.a(Va, dd.a(ze, b)) : x.n ? b : null
}, Ae = {};
function Be(a, b) {
  if(a ? a.Me : a) {
    return a.Me(a, b)
  }
  var c;
  c = Be[t(null == a ? null : a)];
  if(!c && (c = Be._, !c)) {
    throw B("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b)
}
var Ce = function() {
  function a(a) {
    return b.g(a, Q([Ra([x.$e, !1])], 0))
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = Q(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      if(a ? z(z(null) ? null : a.Sf) || (a.Wc ? 0 : A(Ae, a)) : A(Ae, a)) {
        return Be(a, fc.a(ge, c))
      }
      if(L(c)) {
        var d = rc(c) ? fc.a(bc, c) : c, e = ac.a(d, x.$e);
        return function(a, b, c, d) {
          return function C(e) {
            return rc(e) ? le.c(dd.a(C, e)) : kc(e) ? gd($a(e), dd.a(C, e)) : e instanceof Array ? xd(dd.a(C, e)) : Ta(e) === Object ? gd(Od, function() {
              return function(a, b, c, d) {
                return function Tb(f) {
                  return new Nc(null, function(a, b, c, d) {
                    return function() {
                      for(;;) {
                        var a = L(f);
                        if(a) {
                          if(oc(a)) {
                            var b = Ib(a), c = T(b), h = new Pc(Array(c), 0);
                            a: {
                              for(var k = 0;;) {
                                if(k < c) {
                                  var l = E.a(b, k), l = wd([d.c ? d.c(l) : d.call(null, l), C(e[l])]);
                                  h.add(l);
                                  k += 1
                                }else {
                                  b = !0;
                                  break a
                                }
                              }
                              b = void 0
                            }
                            return b ? Tc(h.la(), Tb(Jb(a))) : Tc(h.la(), null)
                          }
                          h = M(a);
                          return R(wd([d.c ? d.c(h) : d.call(null, h), C(e[h])]), Tb(N(a)))
                        }
                        return null
                      }
                    }
                  }(a, b, c, d), null, null)
                }
              }(a, b, c, d)(pc(e))
            }()) : x.n ? e : null
          }
        }(c, d, e, z(e) ? Mc : D)(a)
      }
      return null
    }
    a.s = 1;
    a.m = function(a) {
      var c = M(a);
      a = N(a);
      return b(c, a)
    };
    a.g = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, Q(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.s = 1;
  b.m = c.m;
  b.c = a;
  b.g = c.g;
  return b
}(), Ac = function() {
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
}(), Bc = function(a) {
  return Math.floor.c ? Math.floor.c((Math.random.o ? Math.random.o() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.o ? Math.random.o() : Math.random.call(null)) * a)
};
var De, Ee, Fe, Ge;
function He() {
  return s.navigator ? s.navigator.userAgent : null
}
Ge = Fe = Ee = De = !1;
var Ie;
if(Ie = He()) {
  var Je = s.navigator;
  De = 0 == Ie.indexOf("Opera");
  Ee = !De && -1 != Ie.indexOf("MSIE");
  Fe = !De && -1 != Ie.indexOf("WebKit");
  Ge = !De && !Fe && "Gecko" == Je.product
}
var Ke = De, X = Ee, Le = Ge, Me = Fe, Ne = s.navigator, Oe = -1 != (Ne && Ne.platform || "").indexOf("Mac");
function Pe() {
  var a = s.document;
  return a ? a.documentMode : void 0
}
var Qe;
a: {
  var Re = "", Se;
  if(Ke && s.opera) {
    var Te = s.opera.version, Re = "function" == typeof Te ? Te() : Te
  }else {
    if(Le ? Se = /rv\:([^\);]+)(\)|;)/ : X ? Se = /MSIE\s+([^\);]+)(\)|;)/ : Me && (Se = /WebKit\/(\S+)/), Se) {
      var Ue = Se.exec(He()), Re = Ue ? Ue[1] : ""
    }
  }
  if(X) {
    var Ve = Pe();
    if(Ve > parseFloat(Re)) {
      Qe = String(Ve);
      break a
    }
  }
  Qe = Re
}
var We = {};
function Xe(a) {
  var b;
  if(!(b = We[a])) {
    b = 0;
    for(var c = String(Qe).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = l.exec(h) || ["", "", ""], r = m.exec(k) || ["", "", ""];
        if(0 == n[0].length && 0 == r[0].length) {
          break
        }
        b = ((0 == n[1].length ? 0 : parseInt(n[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == n[1].length ? 0 : parseInt(n[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == n[2].length) < (0 == r[2].length) ? -1 : (0 == n[2].length) > (0 == r[2].length) ? 1 : 0) || (n[2] < r[2] ? -1 : n[2] > r[2] ? 1 : 0)
      }while(0 == b)
    }
    b = We[a] = 0 <= b
  }
  return b
}
var Ye = s.document, Ze = Ye && X ? Pe() || ("CSS1Compat" == Ye.compatMode ? parseInt(Qe, 10) : 5) : void 0;
function $e() {
  0 != af && (this.jg = Error().stack, bf[ha(this)] = this)
}
var af = 0, bf = {};
$e.prototype.lb = !1;
$e.prototype.Zc = function() {
  if(!this.lb && (this.lb = !0, this.B(), 0 != af)) {
    var a = ha(this);
    delete bf[a]
  }
};
$e.prototype.B = function() {
  if(this.qe) {
    for(;this.qe.length;) {
      this.qe.shift()()
    }
  }
};
function cf(a) {
  a && "function" == typeof a.Zc && a.Zc()
}
;var df = !X || X && 9 <= Ze, ef = X && !Xe("9");
!Me || Xe("528");
Le && Xe("1.9b") || X && Xe("8") || Ke && Xe("9.5") || Me && Xe("528");
Le && !Xe("8") || X && Xe("9");
function ff(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
q = ff.prototype;
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
function gf(a) {
  gf[" "](a);
  return a
}
gf[" "] = ca;
function hf(a, b) {
  try {
    return gf(a[b]), !0
  }catch(c) {
  }
  return!1
}
;function jf(a, b) {
  a && this.jc(a, b)
}
w(jf, ff);
q = jf.prototype;
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
  ff.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  d ? Le && (hf(d, "nodeName") || (d = null)) : "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  this.relatedTarget = d;
  this.offsetX = Me || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = Me || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  this.uf = Oe ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.hc = a;
  a.defaultPrevented && this.preventDefault();
  delete this.wb
};
q.preventDefault = function() {
  jf.ka.preventDefault.call(this);
  var a = this.hc;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, ef) {
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
var kf = 0;
function lf() {
}
q = lf.prototype;
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
  this.key = ++kf;
  this.cb = !1
};
q.handleEvent = function(a) {
  return this.ge ? this.Ra.call(this.rb || this.src, a) : this.Ra.handleEvent.call(this.Ra, a)
};
var mf = {}, nf = {}, of = {}, pf = {};
function qf(a, b, c, d, e) {
  if(da(b)) {
    for(var f = 0;f < b.length;f++) {
      qf(a, b[f], c, d, e)
    }
    return null
  }
  a = rf(a, b, c, !1, d, e);
  b = a.key;
  mf[b] = a;
  return b
}
function rf(a, b, c, d, e, f) {
  if(!b) {
    throw Error("Invalid event type");
  }
  e = !!e;
  var h = nf;
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
  m = sf();
  h = new lf;
  h.jc(c, m, a, b, e, f);
  h.Xb = d;
  m.src = a;
  m.Ra = h;
  l.push(h);
  of[k] || (of[k] = []);
  of[k].push(h);
  a.addEventListener ? a != s && a.Vd || a.addEventListener(b, m, e) : a.attachEvent(b in pf ? pf[b] : pf[b] = "on" + b, m);
  return h
}
function sf() {
  var a = tf, b = df ? function(c) {
    return a.call(b.src, b.Ra, c)
  } : function(c) {
    c = a.call(b.src, b.Ra, c);
    if(!c) {
      return c
    }
  };
  return b
}
function uf(a, b, c, d, e) {
  if(da(b)) {
    for(var f = 0;f < b.length;f++) {
      uf(a, b[f], c, d, e)
    }
    return null
  }
  a = rf(a, b, c, !0, d, e);
  b = a.key;
  mf[b] = a;
  return b
}
function vf(a, b, c, d, e) {
  if(da(b)) {
    for(var f = 0;f < b.length;f++) {
      vf(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = nf;
      if(b in f && (f = f[b], d in f && (f = f[d], a = ha(a), f[a]))) {
        a = f[a];
        break a
      }
      a = null
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].Ra == c && a[f].capture == d && a[f].rb == e) {
          wf(a[f].key);
          break
        }
      }
    }
  }
}
function wf(a) {
  var b = mf[a];
  if(!b || b.cb) {
    return!1
  }
  var c = b.src, d = b.type, e = b.te, f = b.capture;
  c.removeEventListener ? c != s && c.Vd || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in pf ? pf[d] : pf[d] = "on" + d, e);
  c = ha(c);
  of[c] && (e = of[c], Ga(e, b), 0 == e.length && delete of[c]);
  b.cb = !0;
  if(b = nf[d][f][c]) {
    b.me = !0, xf(d, f, c, b)
  }
  delete mf[a];
  return!0
}
function xf(a, b, c, d) {
  if(!d.kc && d.me) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].cb ? d[e].te.src = null : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.me = !1;
    0 == f && (delete nf[a][b][c], nf[a][b].v--, 0 == nf[a][b].v && (delete nf[a][b], nf[a].v--), 0 == nf[a].v && delete nf[a])
  }
}
function yf(a) {
  var b = 0;
  if(null != a) {
    if(a = ha(a), of[a]) {
      a = of[a];
      for(var c = a.length - 1;0 <= c;c--) {
        wf(a[c].key), b++
      }
    }
  }else {
    Ja(mf, function(a, c) {
      wf(c);
      b++
    })
  }
}
function zf(a, b, c, d, e) {
  var f = 1;
  b = ha(b);
  if(a[b]) {
    var h = --a.ba, k = a[b];
    k.kc ? k.kc++ : k.kc = 1;
    try {
      for(var l = k.length, m = 0;m < l;m++) {
        var n = k[m];
        n && !n.cb && (f &= !1 !== Af(n, e))
      }
    }finally {
      a.ba = Math.max(h, a.ba), k.kc--, xf(c, d, b, k)
    }
  }
  return Boolean(f)
}
function Af(a, b) {
  a.Xb && wf(a.key);
  return a.handleEvent(b)
}
function tf(a, b) {
  if(a.cb) {
    return!0
  }
  var c = a.type, d = nf;
  if(!(c in d)) {
    return!0
  }
  var d = d[c], e, f;
  if(!df) {
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
    l = new jf;
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
          l.currentTarget = n[y], e &= zf(f, n[y], c, !0, l)
        }
        if(k) {
          for(f = d[!1], f.ba = f.v, y = 0;!l.wb && y < n.length && f.ba;y++) {
            l.currentTarget = n[y], e &= zf(f, n[y], c, !1, l)
          }
        }
      }else {
        e = Af(a, l)
      }
    }finally {
      n && (n.length = 0)
    }
    return e
  }
  c = new jf(b, this);
  return e = Af(a, c)
}
;function Bf() {
  $e.call(this)
}
w(Bf, $e);
q = Bf.prototype;
q.Vd = !0;
q.gd = null;
q.addEventListener = function(a, b, c, d) {
  qf(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  vf(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = nf;
  if(b in c) {
    if(u(a)) {
      a = new ff(a, this)
    }else {
      if(a instanceof ff) {
        a.target = a.target || this
      }else {
        var d = a;
        a = new ff(b, this);
        Na(a, d)
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
        a.currentTarget = e[h], d &= zf(f, e[h], a.type, !0, a) && !1 != a.sc
      }
    }
    if(!1 in c) {
      if(f = c[!1], f.ba = f.v, b) {
        for(h = 0;!a.wb && h < e.length && f.ba;h++) {
          a.currentTarget = e[h], d &= zf(f, e[h], a.type, !1, a) && !1 != a.sc
        }
      }else {
        for(e = this;!a.wb && e && f.ba;e = e.gd) {
          a.currentTarget = e, d &= zf(f, e, a.type, !1, a) && !1 != a.sc
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
  Bf.ka.B.call(this);
  yf(this);
  this.gd = null
};
var Cf = new Jc(null, "r", "r"), Df = new Jc(null, "recur", "recur"), Ef = new Jc(null, "y", "y"), Ff = new Jc(null, "x", "x"), Gf = new Jc(null, "id", "id");
function Hf(a) {
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
  return Ka(a)
}
function If(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ea(a) || u(a)) {
      Da(a, b, c)
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
            d = La(a)
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
      a instanceof Jf ? (c = a.qb(), d = a.Ba()) : (c = La(a), d = Ka(a));
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
    this.Db(a) && (b = Ha(b, this.H.get(bg(this, a))))
  }else {
    a = this.H.Ba();
    for(var c = 0;c < a.length;c++) {
      b = Ha(b, a[c])
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
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.fa = null, this.H.set(bg(this, d), Ia(a)), this.v += a.length))
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
  return Fa(a.Ia, function(a) {
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
  ya.call(this);
  this.ef = a
}
w(hg, ya);
hg.prototype.message = "Deferred has already fired";
hg.prototype.name = "AlreadyCalledError";
function dg(a) {
  ya.call(this);
  this.ef = a
}
w(dg, ya);
dg.prototype.message = "Deferred was cancelled";
dg.prototype.name = "CancelledError";
function lg(a, b) {
  $e.call(this);
  this.tb = a || 1;
  this.Rb = b || s;
  this.Cc = v(this.Df, this);
  this.ad = oa()
}
w(lg, Bf);
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
  $e.call(this);
  this.bd = a;
  this.tb = b || 0;
  this.Ib = c;
  this.Ie = v(this.hf, this)
}
w(og, $e);
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
var pg, qg = !Le && !X || X && X && 9 <= Ze || Le && Xe("1.9.1");
X && Xe("9");
function rg(a) {
  return a ? new sg(9 == a.nodeType ? a : a.ownerDocument || a.document) : pg || (pg = new sg)
}
function tg(a, b, c) {
  function d(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(var e = 1;e < c.length;e++) {
    var f = c[e];
    !ea(f) || ga(f) && 0 < f.nodeType ? d(f) : Da(ug(f) ? Ia(f) : f, d)
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
  return qg && void 0 != a.children ? a.children : Ea(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
function wg(a) {
  $e.call(this);
  this.Ib = a;
  this.F = []
}
w(wg, $e);
var xg = [];
function yg(a, b, c, d, e, f) {
  if(da(c)) {
    for(var h = 0;h < c.length;h++) {
      yg(a, b, c[h], d, e, f)
    }
  }else {
    b = uf(b, c, d || a, e, f || a.Ib || a), a.F.push(b)
  }
}
wg.prototype.B = function() {
  wg.ka.B.call(this);
  Da(this.F, wf);
  this.F.length = 0
};
wg.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function zg(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
function Ag(a) {
  var b = [];
  Bg(new Cg, a, b);
  return b.join("")
}
function Cg() {
  this.rc = void 0
}
function Bg(a, b, c) {
  switch(typeof b) {
    case "string":
      Dg(b, c);
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
          c.push(e), e = b[f], Bg(a, a.rc ? a.rc.call(b, String(f), e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Dg(f, c), c.push(":"), Bg(a, a.rc ? a.rc.call(b, f, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof b);
  }
}
var Eg = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Fg = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Dg(a, b) {
  b.push('"', a.replace(Fg, function(a) {
    if(a in Eg) {
      return Eg[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Eg[a] = e + b.toString(16)
  }), '"')
}
;function Gg(a) {
  return Hg(a || arguments.callee.caller, [])
}
function Hg(a, b) {
  var c = [];
  if(0 <= Ca(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Ig(a) + "(");
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
            f = (f = Ig(f)) ? f : "[fn]";
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
        c.push(Hg(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Ig(a) {
  if(Jg[a]) {
    return Jg[a]
  }
  a = String(a);
  if(!Jg[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Jg[a] = b ? b[1] : "[Anonymous]"
  }
  return Jg[a]
}
var Jg = {};
function Kg(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Kg.prototype.Af = 0;
Kg.prototype.$d = null;
Kg.prototype.Zd = null;
var Lg = 0;
Kg.prototype.reset = function(a, b, c, d, e) {
  this.Af = "number" == typeof e ? e : Lg++;
  this.pg = d || oa();
  this.Lb = a;
  this.sf = b;
  this.lg = c;
  delete this.$d;
  delete this.Zd
};
Kg.prototype.Ae = function(a) {
  this.Lb = a
};
function Mg(a) {
  this.le = a
}
Mg.prototype.qa = null;
Mg.prototype.Lb = null;
Mg.prototype.Dc = null;
Mg.prototype.de = null;
function Ng(a, b) {
  this.name = a;
  this.value = b
}
Ng.prototype.toString = g("name");
var Og = new Ng("SEVERE", 1E3), Pg = new Ng("WARNING", 900), Qg = new Ng("INFO", 800), Rg = new Ng("CONFIG", 700), Sg = new Ng("FINE", 500), Tg = new Ng("FINEST", 300);
q = Mg.prototype;
q.getName = g("le");
q.getParent = g("qa");
q.ce = function() {
  this.Dc || (this.Dc = {});
  return this.Dc
};
q.Ae = function(a) {
  this.Lb = a
};
function Ug(a) {
  if(a.Lb) {
    return a.Lb
  }
  if(a.qa) {
    return Ug(a.qa)
  }
  Aa("Root logger has no level set.");
  return null
}
q.log = function(a, b, c) {
  if(a.value >= Ug(this).value) {
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
  var d = new Kg(a, String(b), this.le);
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
      e = "Message: " + qa(h.message) + '\nUrl: \x3ca href\x3d"view-source:' + h.fileName + '" target\x3d"_new"\x3e' + h.fileName + "\x3c/a\x3e\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + qa(h.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + qa(Gg(f) + "-\x3e ")
    }catch(G) {
      e = "Exception trying to expose exception! You win, we lose. " + G
    }
    d.Zd = e
  }
  return d
};
q.info = function(a, b) {
  this.log(Qg, a, b)
};
function Vg(a) {
  Z.log(Sg, a, void 0)
}
function Wg(a) {
  Z.log(Tg, a, void 0)
}
var Xg = {}, Yg = null;
function Zg(a) {
  Yg || (Yg = new Mg(""), Xg[""] = Yg, Yg.Ae(Rg));
  var b;
  if(!(b = Xg[a])) {
    b = new Mg(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Zg(a.substr(0, c));
    c.ce()[d] = b;
    b.qa = c;
    Xg[a] = b
  }
  return b
}
;function $g() {
  $e.call(this);
  this.md = {}
}
w($g, $e);
$g.prototype.cd = Zg("goog.messaging.AbstractChannel");
$g.prototype.ta = function(a) {
  a && a()
};
$g.prototype.va = p(!0);
$g.prototype.B = function() {
  $g.ka.B.call(this);
  delete this.cd;
  delete this.md;
  delete this.Xd
};
var ah = {1:"NativeMessagingTransport", 2:"FrameElementMethodTransport", 3:"IframeRelayTransport", 4:"IframePollingTransport", 5:"FlashTransport", 6:"NixTransport"}, $ = {sd:"cn", Ce:"at", Ee:"rat", Ub:"pu", La:"ifrid", Ab:"tp", wc:"lru", Tb:"pru", Va:"lpu", Wa:"ppu", yc:"ph", xc:"osh", zc:"role", De:"nativeProtocolVersion"}, bh = [$.Ub, $.wc, $.Tb, $.Va, $.Wa], ch = {};
function dh(a) {
  for(var b = eh, c = b.length, d = "";0 < a--;) {
    d += b.charAt(Math.floor(Math.random() * c))
  }
  return d
}
var eh = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", Z = Zg("goog.net.xpc");
function fh(a) {
  $e.call(this);
  this.Aa = a || rg()
}
w(fh, $e);
fh.prototype.yb = 0;
fh.prototype.w = function() {
  return this.Aa.w()
};
fh.prototype.getName = function() {
  return ah[this.yb] || ""
};
function gh(a, b) {
  fh.call(this, b);
  this.i = a;
  this.Nb = [];
  this.ff = v(this.gf, this)
}
w(gh, fh);
q = gh.prototype;
q.yb = 2;
q.kd = !1;
q.Ja = 0;
q.ta = function() {
  0 == hh(this.i) ? (this.Ca = this.i.sb, this.Ca.XPC_toOuter = v(this.ee, this)) : this.xd()
};
q.xd = function() {
  var a = !0;
  try {
    this.Ca || (this.Ca = this.w().frameElement), this.Ca && this.Ca.XPC_toOuter && (this.fd = this.Ca.XPC_toOuter, this.Ca.XPC_toOuter.XPC_toInner = v(this.ee, this), a = !1, this.send("tp", "SETUP_ACK"), this.i.Ea())
  }catch(b) {
    Z.log(Og, "exception caught while attempting setup: " + b, void 0)
  }
  a && (this.wd || (this.wd = v(this.xd, this)), this.w().setTimeout(this.wd, 100))
};
q.qd = function(a) {
  if(0 != hh(this.i) || this.i.va() || "SETUP_ACK" != a) {
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
  gh.ka.B.call(this);
  this.Ca = this.fd = null
};
function ih(a, b) {
  fh.call(this, b);
  this.i = a;
  this.Pb = this.i.q[$.Wa];
  this.yf = this.i.q[$.Va];
  this.tc = []
}
var jh, kh;
w(ih, fh);
q = ih.prototype;
q.vf = 5;
q.yb = 4;
q.Ia = 0;
q.zb = !1;
q.Ya = !1;
q.xe = null;
function lh(a) {
  return"googlexpc_" + a.i.name + "_msg"
}
function mh(a) {
  return"googlexpc_" + a.i.name + "_ack"
}
function nh(a) {
  try {
    if(!a.lb && oh(a.i)) {
      return a.i.Fa.frames || {}
    }
  }catch(b) {
    Vg("error retrieving peer frames")
  }
  return{}
}
q.ta = function() {
  if(!this.lb && oh(this.i)) {
    Vg("transport connect called");
    if(!this.Ya) {
      Vg("initializing...");
      var a = lh(this);
      this.vb = ph(this, a);
      this.dd = this.w().frames[a];
      a = mh(this);
      this.gb = ph(this, a);
      this.Ac = this.w().frames[a];
      this.Ya = !0
    }
    if(qh(this, lh(this)) && qh(this, mh(this))) {
      Vg("foreign frames present"), this.ie = new rh(this, nh(this)[lh(this)], v(this.xf, this)), this.td = new rh(this, nh(this)[mh(this)], v(this.wf, this)), this.Ad()
    }else {
      Wg("foreign frames not (yet) present");
      if(1 == hh(this.i)) {
        this.xe || 0 < this.vf-- || (Wg("Inner peer reconnect triggered."), this.i.name = dh(10), Wg("switching channels: " + this.i.name), sh(this), this.Ya = !1, this.xe = ph(this, "googlexpc_reconnect_" + this.i.name))
      }else {
        if(0 == hh(this.i)) {
          Wg("outerPeerReconnect called");
          for(var a = nh(this), b = a.length, c = 0;c < b;c++) {
            var d;
            try {
              a[c] && a[c].name && (d = a[c].name)
            }catch(e) {
            }
            if(d) {
              var f = d.split("_");
              if(3 == f.length && "googlexpc" == f[0] && "reconnect" == f[1]) {
                this.i.name = f[2];
                sh(this);
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
function ph(a, b) {
  Wg("constructing sender frame: " + b);
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
function sh(a) {
  Wg("deconstructSenderFrames called");
  a.vb && (a.vb.parentNode.removeChild(a.vb), a.vb = null, a.dd = null);
  a.gb && (a.gb.parentNode.removeChild(a.gb), a.gb = null, a.Ac = null)
}
function qh(a, b) {
  Wg("checking for receive frame: " + b);
  try {
    var c = nh(a)[b];
    if(!c || 0 != c.location.href.indexOf(a.yf)) {
      return!1
    }
  }catch(d) {
    return!1
  }
  return!0
}
q.Ad = function() {
  var a = nh(this);
  a[mh(this)] && a[lh(this)] ? (this.je = new th(this.Pb, this.dd), this.Vb = new th(this.Pb, this.Ac), Vg("local frames ready"), this.w().setTimeout(v(function() {
    this.je.send("SETUP");
    this.zb = this.og = !0;
    Vg("SETUP sent")
  }, this), 100)) : (this.zd || (this.zd = v(this.Ad, this)), this.w().setTimeout(this.zd, 100), Vg("local frames not (yet) present"))
};
function uh(a) {
  if(a.ld && a.ve) {
    if(a.i.Ea(), a.kb) {
      Vg("delivering queued messages (" + a.kb.length + ")");
      for(var b = 0, c;b < a.kb.length;b++) {
        c = a.kb[b], a.i.Ka(c.Bf, c.jd)
      }
      delete a.kb
    }
  }else {
    Wg("checking if connected: ack sent:" + a.ld + ", ack rcvd: " + a.ve)
  }
}
q.xf = function(a) {
  Wg("msg received: " + a);
  if("SETUP" == a) {
    this.Vb && (this.Vb.send("SETUP_ACK"), Wg("SETUP_ACK sent"), this.ld = !0, uh(this))
  }else {
    if(this.i.va() || this.ld) {
      var b = a.indexOf("|"), c = a.substring(0, b);
      a = a.substring(b + 1);
      b = c.indexOf(",");
      if(-1 == b) {
        var d;
        this.Vb.send("ACK:" + c);
        vh(this, a)
      }else {
        d = c.substring(0, b), this.Vb.send("ACK:" + d), c = c.substring(b + 1).split("/"), b = parseInt(c[0], 10), c = parseInt(c[1], 10), 1 == b && (this.hd = []), this.hd.push(a), b == c && (vh(this, this.hd.join("")), delete this.hd)
      }
    }else {
      Z.log(Pg, "received msg, but channel is not connected", void 0)
    }
  }
};
q.wf = function(a) {
  Wg("ack received: " + a);
  "SETUP_ACK" == a ? (this.zb = !1, this.ve = !0, uh(this)) : this.i.va() ? this.zb ? parseInt(a.split(":")[1], 10) == this.Ia ? (this.zb = !1, wh(this)) : Z.log(Pg, "got ack with wrong sequence", void 0) : Z.log(Pg, "got unexpected ack", void 0) : Z.log(Pg, "received ack, but channel not connected", void 0)
};
function wh(a) {
  if(!a.zb && a.tc.length) {
    var b = a.tc.shift();
    ++a.Ia;
    a.je.send(a.Ia + b);
    Wg("msg sent: " + a.Ia + b);
    a.zb = !0
  }
}
function vh(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), c = b.substring(c + 1);
  a.i.va() ? a.i.Ka(d, c) : ((a.kb || (a.kb = [])).push({Bf:d, jd:c}), Wg("queued delivery"))
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
  wh(this)
};
q.B = function() {
  ih.ka.B.call(this);
  var a = xh;
  Ga(a, this.ie);
  Ga(a, this.td);
  this.ie = this.td = null;
  vg(this.vb);
  vg(this.gb);
  this.dd = this.Ac = this.vb = this.gb = null
};
var xh = [], yh = v(function() {
  var a = xh, b, c = !1;
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
    if(Z.info("receive_() failed: " + l), b = b.$.i, Z.info("Transport Error"), b.close(), !a.length) {
      return
    }
  }
  a = oa();
  c && (jh = a);
  kh = window.setTimeout(yh, 1E3 > a - jh ? 10 : 100)
}, ih);
function zh() {
  Vg("starting receive-timer");
  jh = oa();
  kh && window.clearTimeout(kh);
  kh = window.setTimeout(yh, 10)
}
function th(a, b) {
  this.Pb = a;
  this.ze = b;
  this.Yc = 0
}
th.prototype.send = function(a) {
  this.Yc = ++this.Yc % 2;
  a = this.Pb + "#" + this.Yc + encodeURIComponent(a);
  try {
    Me ? this.ze.location.href = a : this.ze.location.replace(a)
  }catch(b) {
    Z.log(Og, "sending failed", b)
  }
  zh()
};
function rh(a, b, c) {
  this.$ = a;
  this.ue = b;
  this.Je = c;
  this.Ud = this.ue.location.href.split("#")[0] + "#INITIAL";
  xh.push(this);
  zh()
}
;function Ah(a, b) {
  fh.call(this, b);
  this.i = a;
  this.tf = this.i.q[$.Tb];
  this.se = this.i.q[$.La];
  Me && Bh()
}
w(Ah, fh);
if(Me) {
  var Ch = [], Dh = 0, Bh = function() {
    Dh || (Dh = window.setTimeout(function() {
      Eh()
    }, 1E3))
  }, Eh = function(a) {
    var b = oa();
    for(a = a || 3E3;Ch.length && b - Ch[0].timestamp >= a;) {
      var c = Ch.shift().nf;
      vg(c);
      Wg("iframe removed")
    }
    Dh = window.setTimeout(Fh, 1E3)
  }, Fh = function() {
    Eh()
  }
}
var Gh = {};
q = Ah.prototype;
q.yb = 3;
q.ta = function() {
  this.w().xpcRelay || (this.w().xpcRelay = Hh);
  this.send("tp", "SETUP")
};
function Hh(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), e = b.substr(c + 1);
  if(X && -1 != (c = d.indexOf("|"))) {
    var f = d.substr(0, c), d = d.substr(c + 1), c = d.indexOf("+"), h = d.substr(0, c), c = parseInt(d.substr(c + 1), 10), k = Gh[h];
    k || (k = Gh[h] = {be:[], we:0, ae:0});
    -1 != d.indexOf("++") && (k.ae = c + 1);
    k.be[c] = e;
    k.we++;
    if(k.we != k.ae) {
      return
    }
    e = k.be.join("");
    delete Gh[h]
  }else {
    var f = d
  }
  ch[a].Ka(f, decodeURIComponent(e))
}
q.qd = function(a) {
  "SETUP" == a ? (this.send("tp", "SETUP_ACK"), this.i.Ea()) : "SETUP_ACK" == a && this.i.Ea()
};
q.send = function(a, b) {
  var c = encodeURIComponent(b), d = c.length;
  if(X && 1800 < d) {
    for(var e = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ oa()).toString(36), f = 0, h = 0;f < d;h++) {
      var k = c.substr(f, 1800), f = f + 1800;
      Ih(this, a, k, e + (f >= d ? "++" : "+") + h)
    }
  }else {
    Ih(this, a, c)
  }
};
function Ih(a, b, c, d) {
  if(X) {
    var e = a.w().document.createElement("div");
    e.innerHTML = '\x3ciframe onload\x3d"this.xpcOnload()"\x3e\x3c/iframe\x3e';
    e = e.childNodes[0];
    e.xpcOnload = Jh
  }else {
    e = a.w().document.createElement("iframe"), Me ? Ch.push({timestamp:oa(), nf:e}) : qf(e, "load", Jh)
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
  Wg("msg sent: " + f)
}
function Jh() {
  Wg("iframe-load");
  vg(this);
  this.qg = null
}
q.B = function() {
  Ah.ka.B.call(this);
  Me && Eh(0)
};
function Kh(a, b, c, d, e) {
  fh.call(this, c);
  this.i = a;
  this.bb = e || 2;
  this.re = b || "*";
  this.$c = new wg(this);
  this.Mb = new lg(100, this.w());
  this.lc = !!d;
  this.Ta = new cg;
  this.Ua = new cg;
  this.Na = new cg;
  this.jf = dh(10);
  this.nc = null;
  this.lc ? 1 == hh(this.i) ? jg(this.Na, this.Ta) : jg(this.Na, this.Ua) : (jg(this.Na, this.Ta), 2 == this.bb && jg(this.Na, this.Ua));
  ig(this.Na, this.ne, null, this);
  this.Na.ra(!0);
  a = this.$c;
  b = this.Mb;
  c = this.he;
  d = mg;
  da(d) || (xg[0] = d, d = xg);
  for(e = 0;e < d.length;e++) {
    var f = qf(b, d[e], c || a, !1, a.Ib || a);
    a.F.push(f)
  }
  Z.info("NativeMessagingTransport created.  protocolVersion\x3d" + this.bb + ", oneSidedHandshake\x3d" + this.lc + ", role\x3d" + hh(this.i))
}
w(Kh, fh);
Kh.prototype.da = null;
Kh.prototype.Ya = !1;
Kh.prototype.yb = 1;
var Lh = {};
function Mh(a) {
  var b = a.hc.data;
  if(!u(b)) {
    return!1
  }
  var c = b.indexOf("|"), d = b.indexOf(":");
  if(-1 == c || -1 == d) {
    return!1
  }
  var e = b.substring(0, c), c = b.substring(c + 1, d), b = b.substring(d + 1);
  Vg("messageReceived: channel\x3d" + e + ", service\x3d" + c + ", payload\x3d" + b);
  if(d = ch[e]) {
    return d.Ka(c, b, a.hc.origin), !0
  }
  a = Nh(b)[0];
  for(var f in ch) {
    if(d = ch[f], 1 == hh(d) && !d.va() && "tp" == c && ("SETUP" == a || "SETUP_NTPV2" == a)) {
      return Vg("changing channel name to " + e), d.name = e, delete ch[f], ch[e] = d, d.Ka(c, b), !0
    }
  }
  Z.info('channel name mismatch; message ignored"');
  return!1
}
q = Kh.prototype;
q.qd = function(a) {
  var b = Nh(a);
  a = b[1];
  switch(b[0]) {
    case "SETUP_ACK":
      Oh(this, 1);
      this.Ta.ua || this.Ta.ra(!0);
      break;
    case "SETUP_ACK_NTPV2":
      2 == this.bb && (Oh(this, 2), this.Ta.ua || this.Ta.ra(!0));
      break;
    case "SETUP":
      Oh(this, 1);
      Ph(this, 1);
      break;
    case "SETUP_NTPV2":
      2 == this.bb && (b = this.da, Oh(this, 2), Ph(this, 2), 1 != b && null == this.nc || this.nc == a || (Z.info("Sending SETUP and changing peer ID to: " + a), Qh(this)), this.nc = a)
  }
};
function Qh(a) {
  if(2 == a.bb && (null == a.da || 2 == a.da)) {
    var b;
    b = "SETUP_NTPV2," + a.jf;
    a.send("tp", b)
  }
  null != a.da && 1 != a.da || a.send("tp", "SETUP")
}
function Ph(a, b) {
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
function Oh(a, b) {
  b > a.da && (a.da = b);
  1 == a.da && (a.Ua.ua || a.lc || a.Ua.ra(!0), a.nc = null)
}
q.ta = function() {
  var a = this.w(), b = ha(a), c = Lh[b];
  "number" == typeof c || (c = 0);
  0 == c && qf(a.postMessage ? a : a.document, "message", Mh, !1, Kh);
  Lh[b] = c + 1;
  this.Ya = !0;
  this.he()
};
q.he = function() {
  var a = 0 == hh(this.i);
  this.lc && a || this.i.va() || this.lb ? this.Mb.stop() : (this.Mb.start(), Qh(this))
};
q.send = function(a, b) {
  var c = this.i.Fa;
  c ? (this.send = function(a, b) {
    var f = this, h = this.i.name;
    this.uc = ng(function() {
      f.uc = 0;
      try {
        var k = c.postMessage ? c : c.document;
        k.postMessage ? (k.postMessage(h + "|" + a + ":" + b, f.re), Vg("send(): service\x3d" + a + " payload\x3d" + b + " to hostname\x3d" + f.re)) : Z.log(Pg, "Peer window had no postMessage function.", void 0)
      }catch(l) {
        Z.log(Pg, "Error performing postMessage, ignoring.", l)
      }
    }, 0)
  }, this.send(a, b)) : Vg("send(): window not ready")
};
q.ne = function() {
  this.i.Ea(1 == this.bb || 1 == this.da ? 200 : void 0)
};
q.B = function() {
  if(this.Ya) {
    var a = this.w(), b = ha(a), c = Lh[b];
    Lh[b] = c - 1;
    1 == c && vf(a.postMessage ? a : a.document, "message", Mh, !1, Kh)
  }
  this.uc && (s.clearTimeout(this.uc), this.uc = 0);
  cf(this.$c);
  delete this.$c;
  cf(this.Mb);
  delete this.Mb;
  this.Ta.cancel();
  delete this.Ta;
  this.Ua.cancel();
  delete this.Ua;
  this.Na.cancel();
  delete this.Na;
  delete this.send;
  Kh.ka.B.call(this)
};
function Nh(a) {
  a = a.split(",");
  a[1] = a[1] || null;
  return a
}
;function Rh(a, b) {
  fh.call(this, b);
  this.i = a;
  this.yd = a[$.Ce] || "";
  this.ye = a[$.Ee] || "";
  var c = this.w();
  if(!c.nix_setup_complete) {
    var d = "Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport \x3d transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth \x3d auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken \x3d m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport." + Sh + "(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport." + 
    Th + "(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap \x3d New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper \x3d wrap\nEnd Function";
    try {
      c.execScript(d, "vbscript"), c.nix_setup_complete = !0
    }catch(e) {
      Z.log(Og, "exception caught while attempting global setup: " + e, void 0)
    }
  }
  this[Sh] = this.mf;
  this[Th] = this.df
}
w(Rh, fh);
var Sh = "GCXPC____NIXJS_handle_message", Th = "GCXPC____NIXJS_create_channel";
q = Rh.prototype;
q.yb = 6;
q.ub = !1;
q.Sa = null;
q.ta = function() {
  0 == hh(this.i) ? this.vd() : this.ud()
};
q.vd = function() {
  if(!this.ub) {
    var a = this.i.sb;
    try {
      a.contentWindow.opener = (0,this.w().GCXPC____NIXVBS_get_wrapper)(this, this.yd), this.ub = !0
    }catch(b) {
      Z.log(Og, "exception caught while attempting setup: " + b, void 0)
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
          Z.log(Og, "Invalid auth token from other party", void 0);
          return
        }
        this.Sa.CreateChannel((0,this.w().GCXPC____NIXVBS_get_wrapper)(this, this.yd));
        this.ub = !0;
        this.i.Ea()
      }
    }catch(b) {
      Z.log(Og, "exception caught while attempting setup: " + b, void 0);
      return
    }
    this.ub || this.w().setTimeout(v(this.ud, this), 100)
  }
};
q.df = function(a) {
  "unknown" == typeof a && "GCXPC____NIXVBS_container" in a || Z.log(Og, "Invalid NIX channel given to createChannel_", void 0);
  this.Sa = a;
  this.Sa.GetAuthToken() != this.ye ? Z.log(Og, "Invalid auth token from other party", void 0) : this.i.Ea()
};
q.mf = function(a, b) {
  this.w().setTimeout(v(function() {
    this.i.Ka(a, b)
  }, this), 1)
};
q.send = function(a, b) {
  "unknown" !== typeof this.Sa && Z.log(Og, "NIX channel not connected", void 0);
  this.Sa.SendMessage(a, b)
};
q.B = function() {
  Rh.ka.B.call(this);
  this.Sa = null
};
function Uh(a, b) {
  $g.call(this);
  for(var c = 0, d;d = bh[c];c++) {
    if(d in a && !/^https?:\/\//.test(a[d])) {
      throw Error("URI " + a[d] + " is invalid for field " + d);
    }
  }
  this.q = a;
  this.name = this.q[$.sd] || dh(10);
  this.Aa = b || rg();
  this.ec = [];
  this.oc = new wg(this);
  a[$.Va] = a[$.Va] || Nf(this.Aa.w().location.href) + "/robots.txt";
  a[$.Wa] = a[$.Wa] || Nf(a[$.Ub] || "") + "/robots.txt";
  ch[this.name] = this;
  qf(window, "unload", Vh);
  Z.info("CrossPageChannel created: " + this.name)
}
w(Uh, $g);
var Wh = /^%*tp$/, Xh = /^%+tp$/;
q = Uh.prototype;
q.Oa = null;
q.xa = null;
q.$ = null;
q.pd = 1;
q.va = function() {
  return 2 == this.pd
};
q.Fa = null;
q.sb = null;
function oh(a) {
  try {
    return!!a.Fa && !Boolean(a.Fa.closed)
  }catch(b) {
    return!1
  }
}
function Yh(a, b, c) {
  Z.info("createPeerIframe()");
  var d = a.q[$.La];
  d || (d = a.q[$.La] = "xpcpeer" + dh(4));
  var e = rg(b).createElement("IFRAME");
  e.id = e.name = d;
  c ? c(e) : e.style.width = e.style.height = "100%";
  Zh(a);
  a.xa = new cg(void 0, a);
  var f = $h(a);
  yg(a.oc, e, "load", a.xa.ra, !1, a.xa);
  Le || Me ? window.setTimeout(v(function() {
    b.appendChild(e);
    e.src = f.toString();
    Z.info("peer iframe created (" + d + ")")
  }, a), 1) : (e.src = f.toString(), b.appendChild(e), Z.info("peer iframe created (" + d + ")"))
}
function Zh(a) {
  a.xa && (a.xa.cancel(), a.xa = null);
  a.ec.length = 0;
  a = a.oc;
  Da(a.F, wf);
  a.F.length = 0
}
function $h(a) {
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
  c = Ag(c);
  Qf(a);
  a.Ga.set("xpc", c);
  return b
}
q.ta = function(a) {
  this.Xc = a || ca;
  this.xa ? ig(this.xa, this.Sd, null, void 0) : this.Sd()
};
q.Sd = function() {
  Z.info("continueConnection_()");
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
        if(Le) {
          c = 2
        }else {
          if(X && this.q[$.Tb]) {
            c = 3
          }else {
            var d;
            if(d = X) {
              d = !1;
              try {
                c = window.opener, window.opener = {}, d = hf(window, "opener"), window.opener = c
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
        this.$ = new Kh(this, this.q[$.yc], this.Aa, !!this.q[$.xc], this.q[$.De] || 2);
        break;
      case 6:
        this.$ = new Rh(this, this.Aa);
        break;
      case 2:
        this.$ = new gh(this, this.Aa);
        break;
      case 3:
        this.$ = new Ah(this, this.Aa);
        break;
      case 4:
        this.$ = new ih(this, this.Aa)
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
  Zh(this);
  this.pd = 3;
  cf(this.$);
  this.Xc = this.$ = null;
  cf(this.Oa);
  this.Oa = null;
  Z.info('Channel "' + this.name + '" closed')
};
q.Ea = function(a) {
  this.va() || this.Oa && this.Oa.fe() || (this.pd = 2, Z.info('Channel "' + this.name + '" connected'), cf(this.Oa), a ? (this.Oa = new og(this.Xc, a), this.Oa.start()) : (this.Oa = null, this.Xc()))
};
q.ne = Uh.prototype.Ea;
q.send = function(a, b) {
  this.va() ? oh(this) ? (ga(b) && (b = Ag(b)), this.$.send(ai(a), b)) : (Z.log(Og, "Peer has disappeared.", void 0), this.close()) : Z.log(Og, "Can't send. Channel not connected.", void 0)
};
q.Ka = function(a, b, c) {
  if(this.xa) {
    this.ec.push(v(this.Ka, this, a, b, c))
  }else {
    var d = this.q[$.yc];
    if(/^[\s\xa0]*$/.test(null == c ? "" : String(c)) || /^[\s\xa0]*$/.test(null == d ? "" : String(d)) || c == this.q[$.yc]) {
      if(this.lb) {
        Z.log(Pg, "CrossPageChannel::xpcDeliver(): Disposed.", void 0)
      }else {
        if(a && "tp" != a) {
          if(this.va()) {
            if(a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = Xh.test(a) ? a.substring(1) : a, c = this.md[a], c || (this.Xd ? c = {ra:na(this.Xd, a), oe:ga(b)} : (this.cd.log(Pg, 'Unknown service name "' + a + '"', void 0), c = null)), c) {
              var e;
              a: {
                if((d = c.oe) && u(b)) {
                  try {
                    e = zg(b);
                    break a
                  }catch(f) {
                    this.cd.log(Pg, "Expected JSON payload for " + a + ', was "' + b + '"', void 0);
                    e = null;
                    break a
                  }
                }else {
                  if(!d && !u(b)) {
                    e = Ag(b);
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
      Z.log(Pg, 'Message received from unapproved origin "' + c + '" - rejected.', void 0)
    }
  }
};
function ai(a) {
  Wh.test(a) && (a = "%" + a);
  return a.replace(/[%:|]/g, encodeURIComponent)
}
function hh(a) {
  var b = a.q[$.zc];
  return b ? b : window.parent == a.Fa ? 1 : 0
}
q.B = function() {
  this.close();
  this.sb = this.Fa = null;
  delete ch[this.name];
  cf(this.oc);
  delete this.oc;
  Uh.ka.B.call(this)
};
function Vh() {
  for(var a in ch) {
    cf(ch[a])
  }
}
;Zg("goog.net.XhrIo");
gd(Od, dd.a(function(a) {
  var b = $b.d(a, 0, null);
  a = $b.d(a, 1, null);
  return wd([Mc.c(b.toLowerCase()), a])
}, he.g(Q([Ce.c({If:"complete", Of:"success", Jf:"error", Hf:"abort", Mf:"ready", Nf:"readystatechange", TIMEOUT:"timeout", Kf:"incrementaldata", Lf:"progress"})], 0))));
var bi = function() {
  function a(a, b, c, d) {
    if(a ? a.Nd : a) {
      return a.Nd(a, b, c, d)
    }
    var e;
    e = bi[t(null == a ? null : a)];
    if(!e && (e = bi._, !e)) {
      throw B("IConnection.connect", a);
    }
    return e.call(null, a, b, c, d)
  }
  function b(a, b, c) {
    if(a ? a.Md : a) {
      return a.Md(a, b, c)
    }
    var d;
    d = bi[t(null == a ? null : a)];
    if(!d && (d = bi._, !d)) {
      throw B("IConnection.connect", a);
    }
    return d.call(null, a, b, c)
  }
  function c(a, b) {
    if(a ? a.Ld : a) {
      return a.Ld(a, b)
    }
    var c;
    c = bi[t(null == a ? null : a)];
    if(!c && (c = bi._, !c)) {
      throw B("IConnection.connect", a);
    }
    return c.call(null, a, b)
  }
  function d(a) {
    if(a ? a.Kd : a) {
      return a.Kd(a)
    }
    var b;
    b = bi[t(null == a ? null : a)];
    if(!b && (b = bi._, !b)) {
      throw B("IConnection.connect", a);
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
}(), ci = function() {
  function a(a, b, c, d, e, f) {
    if(a ? a.Ze : a) {
      return a.Ze(a, b, c, d, e, f)
    }
    var y;
    y = ci[t(null == a ? null : a)];
    if(!y && (y = ci._, !y)) {
      throw B("IConnection.transmit", a);
    }
    return y.call(null, a, b, c, d, e, f)
  }
  function b(a, b, c, d, e) {
    if(a ? a.Ye : a) {
      return a.Ye(a, b, c, d, e)
    }
    var f;
    f = ci[t(null == a ? null : a)];
    if(!f && (f = ci._, !f)) {
      throw B("IConnection.transmit", a);
    }
    return f.call(null, a, b, c, d, e)
  }
  function c(a, b, c, d) {
    if(a ? a.Xe : a) {
      return a.Xe(a, b, c, d)
    }
    var e;
    e = ci[t(null == a ? null : a)];
    if(!e && (e = ci._, !e)) {
      throw B("IConnection.transmit", a);
    }
    return e.call(null, a, b, c, d)
  }
  function d(a, b, c) {
    if(a ? a.Od : a) {
      return a.Od(a, b, c)
    }
    var d;
    d = ci[t(null == a ? null : a)];
    if(!d && (d = ci._, !d)) {
      throw B("IConnection.transmit", a);
    }
    return d.call(null, a, b, c)
  }
  function e(a, b) {
    if(a ? a.We : a) {
      return a.We(a, b)
    }
    var c;
    c = ci[t(null == a ? null : a)];
    if(!c && (c = ci._, !c)) {
      throw B("IConnection.transmit", a);
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
}(), di = gd(Od, dd.a(function(a) {
  var b = $b.d(a, 0, null);
  a = $b.d(a, 1, null);
  return wd([Mc.c(b.toLowerCase()), a])
}, Ce.c($))), ei = function() {
  function a(a, b, c, h) {
    if(a ? a.Qd : a) {
      return a.Qd(a, b, c, h)
    }
    var k;
    k = ei[t(null == a ? null : a)];
    if(!k && (k = ei._, !k)) {
      throw B("ICrossPageChannel.register-service", a);
    }
    return k.call(null, a, b, c, h)
  }
  function b(a, b, c) {
    if(a ? a.Pd : a) {
      return a.Pd(a, b, c)
    }
    var h;
    h = ei[t(null == a ? null : a)];
    if(!h && (h = ei._, !h)) {
      throw B("ICrossPageChannel.register-service", a);
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
q = Uh.prototype;
q.Kd = function(a) {
  return bi.a(a, null)
};
q.Ld = function(a, b) {
  return a.ta(b)
};
q.Md = function(a, b, c) {
  return bi.l(a, b, c, document.body)
};
q.Nd = function(a, b, c, d) {
  Yh(a, d, c);
  return a.ta(b)
};
q.Od = function(a, b, c) {
  return a.send(Lc(b), c)
};
q.Pd = function(a, b, c) {
  return ei.l(a, b, c, !1)
};
q.Qd = function(a, b, c, d) {
  b = Lc(b);
  a.md[b] = {ra:c, oe:!!d}
};
var fi = function() {
  function a(a) {
    return new Uh(wc.d(function(a, b) {
      var c = $b.d(b, 0, null), d = $b.d(b, 1, null), c = ac.a(di, c);
      z(c) && (a[c] = d);
      return a
    }, {}, a))
  }
  function b() {
    var a;
    a = (new Of(window.location.href)).Ga.get("xpc");
    return z(a) ? new Uh(zg(a)) : null
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
var gi = se.c(null);
function hi(a) {
  var b = function() {
    try {
      return Ra([x.bf, x.dg, x.cf, "" + D(eval(a))])
    }catch(b) {
      if(b instanceof Error) {
        return Ra([x.bf, x.cg, x.cf, qe.g(Q([b], 0)), x.bg, z(b.hasOwnProperty("stack")) ? b.stack : "No stacktrace available."])
      }
      if(x.n) {
        throw b;
      }
      return null
    }
  }();
  return qe.g(Q([b], 0))
}
se.c(0);
(function(a) {
  var b = fi.c(Ra([x.hg, a]));
  ue.a(gi, cd(b));
  ei.d(b, x.eg, function(a) {
    return ci.d(b, x.fg, hi(a))
  });
  return bi.d(b, cd(null), function(a) {
    return a.style.display = "none"
  })
})("http://localhost:9000/repl");
function ii(a) {
  if(a ? a.ac : a) {
    return a.ac()
  }
  var b;
  b = ii[t(null == a ? null : a)];
  if(!b && (b = ii._, !b)) {
    throw B("Channel.close!", a);
  }
  return b.call(null, a)
}
function ji(a) {
  if(a ? a.Te : a) {
    return!0
  }
  var b;
  b = ji[t(null == a ? null : a)];
  if(!b && (b = ji._, !b)) {
    throw B("Handler.active?", a);
  }
  return b.call(null, a)
}
;function ki(a, b, c, d, e) {
  for(var f = 0;;) {
    if(f < e) {
      c[d + f] = a[b + f], f += 1
    }else {
      break
    }
  }
}
function li(a, b, c, d) {
  this.head = a;
  this.t = b;
  this.length = c;
  this.b = d
}
li.prototype.pop = function() {
  if(0 === this.length) {
    return null
  }
  var a = this.b[this.t];
  this.b[this.t] = null;
  this.t = (this.t + 1) % this.b.length;
  this.length -= 1;
  return a
};
li.prototype.unshift = function(a) {
  this.b[this.head] = a;
  this.head = (this.head + 1) % this.b.length;
  this.length += 1;
  return null
};
function mi(a, b) {
  if(a.length + 1 === a.b.length) {
    var c = Array(2 * a.b.length);
    a.t < a.head ? (ki(a.b, a.t, c, 0, a.length), a.t = 0, a.head = a.length, a.b = c) : a.t > a.head ? (ki(a.b, a.t, c, 0, a.b.length - a.t), ki(a.b, 0, c, a.b.length - a.t, a.head), a.t = 0, a.head = a.length, a.b = c) : a.t === a.head && (a.t = 0, a.head = 0, a.b = c)
  }
  a.unshift(b)
}
function ni(a, b) {
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
function oi(a) {
  if(!(0 < a)) {
    throw Error([D("Assert failed: "), D("Can't create a ring buffer of size 0"), D("\n"), D(qe.g(Q([Vb(new J(null, "\x3e", "\x3e", -1640531465, null), new J(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new li(0, 0, 0, Array(a))
}
function pi(a, b) {
  this.Q = a;
  this.ke = b;
  this.p = 0;
  this.e = 2
}
pi.prototype.L = function() {
  return this.Q.length
};
function qi(a, b, c) {
  if(!Sa(b.Q.length === b.ke)) {
    throw Error([D("Assert failed: "), D("Can't add to a full buffer"), D("\n"), D(qe.g(Q([Vb(new J(null, "not", "not", -1640422260, null), Vb(new J("impl", "full?", "impl/full?", -1337857039, null), new J(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  a.Q.unshift(c)
}
;var ri = null, si = oi(32), ti = !1, ui = !1;
function vi() {
  ti = !0;
  ui = !1;
  for(var a = 0;;) {
    var b = si.pop();
    if(null != b && (b.o ? b.o() : b.call(null), 1024 > a)) {
      a += 1;
      continue
    }
    break
  }
  ti = !1;
  return 0 < si.length ? wi.o ? wi.o() : wi.call(null) : null
}
"undefined" !== typeof MessageChannel && (ri = new MessageChannel, ri.port1.onmessage = function() {
  return vi()
});
function wi() {
  var a = ui;
  if(z(z(a) ? ti : a)) {
    return null
  }
  ui = !0;
  return"undefined" !== typeof MessageChannel ? ri.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(vi) : x.n ? setTimeout(vi, 0) : null
}
function xi(a) {
  mi(si, a);
  wi()
}
;var yi, Ai = function zi(b) {
  "undefined" === typeof yi && (yi = {}, yi = function(b, d, e) {
    this.ob = b;
    this.kf = d;
    this.rf = e;
    this.p = 0;
    this.e = 393216
  }, yi.cc = !0, yi.bc = "cljs.core.async.impl.ioc-helpers/t14752", yi.Vc = function(b, d) {
    return I(d, "cljs.core.async.impl.ioc-helpers/t14752")
  }, yi.prototype.Te = p(!0), yi.prototype.O = g("rf"), yi.prototype.P = function(b, d) {
    return new yi(this.ob, this.kf, d)
  });
  return new yi(b, zi, null)
};
function Bi(a) {
  try {
    return a[0].call(null, a)
  }catch(b) {
    if(b instanceof Object) {
      throw a[4].ac(), b;
    }
    if(x.n) {
      throw b;
    }
    return null
  }
}
function Ci(a, b) {
  var c = b.Ue(Ai(function(b) {
    a[2] = b;
    a[1] = 4;
    return Bi(a)
  }));
  return z(c) ? (a[2] = nb(c), a[1] = 4, x.ag) : null
}
function Di(a, b) {
  var c = a[4];
  null != b && c.Ve(b, Ai(p(null)));
  c.ac();
  return c
}
;var Ei, Gi = function Fi(b) {
  "undefined" === typeof Ei && (Ei = {}, Ei = function(b, d, e) {
    this.J = b;
    this.Ge = d;
    this.qf = e;
    this.p = 0;
    this.e = 425984
  }, Ei.cc = !0, Ei.bc = "cljs.core.async.impl.channels/t14741", Ei.Vc = function(b, d) {
    return I(d, "cljs.core.async.impl.channels/t14741")
  }, Ei.prototype.Fc = g("J"), Ei.prototype.O = g("qf"), Ei.prototype.P = function(b, d) {
    return new Ei(this.J, this.Ge, d)
  });
  return new Ei(b, Fi, null)
};
function Hi(a, b) {
  this.rb = a;
  this.J = b
}
function Ii(a) {
  return ji(a.rb)
}
function Ji(a, b, c, d, e, f) {
  this.Qb = a;
  this.gc = b;
  this.qc = c;
  this.fc = d;
  this.Q = e;
  this.closed = f
}
Ji.prototype.ac = function() {
  if(!this.closed) {
    for(this.closed = !0;;) {
      var a = this.Qb.pop();
      if(null != a) {
        xi(function(a) {
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
Ji.prototype.Ue = function(a) {
  var b = null != this.Q;
  if(b ? 0 < T(this.Q) : b) {
    return Gi(this.Q.Q.pop())
  }
  for(;;) {
    b = this.qc.pop();
    if(null != b) {
      return a = b.J, xi(b.rb.ob), Gi(a)
    }
    if(this.closed) {
      return Gi(null)
    }
    64 < this.gc ? (this.gc = 0, ni(this.Qb, ji)) : this.gc += 1;
    if(!(1024 > this.Qb.length)) {
      throw Error([D("Assert failed: "), D([D("No more than "), D(1024), D(" pending takes are allowed on a single channel.")].join("")), D("\n"), D(qe.g(Q([Vb(new J(null, "\x3c", "\x3c", -1640531467, null), Vb(new J(null, ".-length", ".-length", 1395928862, null), new J(null, "takes", "takes", -1530407291, null)), new J("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
    }
    mi(this.Qb, a);
    return null
  }
};
Ji.prototype.Ve = function(a, b) {
  var c = this;
  if(null == a) {
    throw Error([D("Assert failed: "), D("Can't put nil in on a channel"), D("\n"), D(qe.g(Q([Vb(new J(null, "not", "not", -1640422260, null), Vb(new J(null, "nil?", "nil?", -1637150201, null), new J(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  var d = c.closed;
  if(d && d) {
    Gi(null)
  }else {
    for(;;) {
      d = c.Qb.pop();
      if(null != d) {
        var e = b.ob;
        xi(function(b) {
          return function() {
            return b.c ? b.c(a) : b.call(null, a)
          }
        }(d.ob, e, d))
      }else {
        if(function() {
          var a = null == c.Q;
          return a ? a : c.Q.Q.length === c.Q.ke
        }()) {
          64 < c.fc ? (c.fc = 0, ni(c.qc, Ii)) : c.fc += 1;
          if(!(1024 > c.qc.length)) {
            throw Error([D("Assert failed: "), D([D("No more than "), D(1024), D(" pending puts are allowed on a single channel."), D(" Consider using a windowed buffer.")].join("")), D("\n"), D(qe.g(Q([Vb(new J(null, "\x3c", "\x3c", -1640531467, null), Vb(new J(null, ".-length", ".-length", 1395928862, null), new J(null, "puts", "puts", -1637078787, null)), new J("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
          }
          mi(c.qc, new Hi(b, a));
          break
        }
        e = b.ob;
        qi(c.Q, c.Q, a)
      }
      Gi(null);
      break
    }
  }
};
function Ki(a) {
  return new Ji(oi(32), 0, oi(32), 0, a, null)
}
;var Li = function() {
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
function Mi(a, b, c) {
  this.key = a;
  this.J = b;
  this.forward = c;
  this.p = 0;
  this.e = 2155872256
}
Mi.prototype.D = function(a, b, c) {
  return V(b, W, "[", " ", "]", c, a)
};
Mi.prototype.A = function() {
  return Vb.g(Q([this.key, this.J], 0))
};
var Ni = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for(var h = 0;;) {
      if(h < c.length) {
        c[h] = null, h += 1
      }else {
        break
      }
    }
    return new Mi(a, b, c)
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
}(), Oi = function() {
  function a(a, b, c, h) {
    for(;;) {
      if(0 > c) {
        return a
      }
      a: {
        for(;;) {
          var k = a.forward[c];
          if(z(k)) {
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
function Pi(a, b) {
  this.Qa = a;
  this.ha = b;
  this.p = 0;
  this.e = 2155872256
}
Pi.prototype.D = function(a, b, c) {
  return V(b, function(a) {
    return V(b, W, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Pi.prototype.A = function() {
  var a = function c(a) {
    return new Nc(null, function() {
      return null == a ? null : R(wd([a.key, a.J]), c(a.forward[0]))
    }, null, null)
  };
  return a.c ? a.c(this.Qa.forward[0]) : a.call(null, this.Qa.forward[0])
};
Pi.prototype.put = function(a, b) {
  var c = Array(15), d = Oi.l(this.Qa, a, this.ha, c).forward[0], e = null != d;
  if(e ? d.key === a : e) {
    return d.J = b
  }
  d = Li.o();
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
  for(d = Ni.d(a, b, Array(d));;) {
    return 0 <= this.ha ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null
  }
};
Pi.prototype.remove = function(a) {
  var b = this, c = Array(15), d = Oi.l(b.Qa, a, b.ha, c).forward[0];
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
function Qi(a) {
  for(var b = Ri, c = b.Qa, d = b.ha;;) {
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
var Ri = new Pi(Ni.c(0), 0);
function Si() {
  var a = (new Date).valueOf() + 1E3, b = Qi(a), b = z(z(b) ? b.key < a + 10 : b) ? b.J : null;
  if(z(b)) {
    return b
  }
  var c = Ki(null);
  Ri.put(a, c);
  setTimeout(function() {
    Ri.remove(a);
    return ii(c)
  }, 1E3);
  return c
}
;var Ti = function() {
  function a(a) {
    a = Ob.a(a, 0) ? null : a;
    return Ki("number" === typeof a ? new pi(oi(a), a) : a)
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
function Ui(a) {
  return Ra([Gf, a, Ff, Bc(100), Ef, Bc(100), Cf, 1])
}
console.log("Hai6");
function Vi() {
  initWorld(100);
  var a = Ti.c(1);
  xi(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for(;;) {
              var e = a(c);
              if(!Kc(e, Df)) {
                return e
              }
            }
          }
          function c() {
            var a = Array(7);
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
          var b = a[2], c = dd.a(Ui, je.o()), c = drawBirds(ye(dd.a(ye, fd(20, c))));
          a[5] = c;
          a[6] = b;
          a[2] = null;
          a[1] = 2;
          return Df
        }
        return 3 === b ? (b = a[2], Di(a, b)) : 2 === b ? (b = Si(), Ci(a, b)) : 1 === b ? (a[2] = null, a[1] = 2, Df) : null
      })
    }(), c = function() {
      var c = b.o ? b.o() : b.call(null);
      c[4] = a;
      return c
    }();
    return Bi(c)
  })
}
jQuery(document).ng(function() {
  Vi();
  return console.log("here")
});
