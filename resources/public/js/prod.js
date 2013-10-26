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
function n(a) {
  return function() {
    return a
  }
}
var r, s = this;
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
function fa(a) {
  var b = t(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function v(a) {
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
function w(a, b, c) {
  w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return w.apply(null, arguments)
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
function qa(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.la = b.prototype;
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
  -1 != a.indexOf("\x3c") && (a = a.replace(wa, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(xa, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(za, "\x26quot;"));
  return a
}
var va = /&/g, wa = /</g, xa = />/g, za = /\"/g, ua = /[&<>\"]/;
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
  if(v(a)) {
    return v(b) && 1 == b.length ? a.indexOf(b, c) : -1
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
  for(var d = a.length, e = v(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
}, Ga = Da.filter ? function(a, b, c) {
  return Da.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, h = v(a) ? a.split("") : a, k = 0;k < d;k++) {
    if(k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (e[f++] = l)
    }
  }
  return e
}, Ha = Da.some ? function(a, b, c) {
  return Da.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, f = 0;f < d;f++) {
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
  return Ta([x.$f, !0, x.af, !0, x.Rd, !1, x.fg, !1])
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
var Ya = {}, Za = {};
function $a(a) {
  if(a ? a.M : a) {
    return a.M(a)
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
  c.b = a;
  return c
}(), fb = {};
function F(a) {
  if(a ? a.Z : a) {
    return a.Z(a)
  }
  var b;
  b = F[t(null == a ? null : a)];
  if(!b && (b = F._, !b)) {
    throw A("ISeq.-first", a);
  }
  return b.call(null, a)
}
function G(a) {
  if(a ? a.aa : a) {
    return a.aa(a)
  }
  var b;
  b = G[t(null == a ? null : a)];
  if(!b && (b = G._, !b)) {
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
    if(a ? a.fa : a) {
      return a.fa(a, b)
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
  c.b = a;
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
  c.b = a;
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
  if(a ? a.B : a) {
    return a.B(a)
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
  this.g = 1073741824
}
Mb.prototype.Jd = function(a, b) {
  return this.zf.append(b)
};
Mb.prototype.Se = n(null);
function Nb(a) {
  var b = new Qa, c = new Mb(b);
  a.F(a, c, Sa());
  Bb(c);
  return"" + B(b)
}
function J(a, b, c, d, e) {
  this.ab = a;
  this.name = b;
  this.eb = c;
  this.Xa = d;
  this.fb = e;
  this.g = 2154168321;
  this.q = 4096
}
r = J.prototype;
r.F = function(a, b) {
  return H(b, this.eb)
};
r.N = function(a) {
  var b = this.Xa;
  return null != b ? b : this.Xa = a = Ob.a ? Ob.a(K.c ? K.c(a.ab) : K.call(null, a.ab), K.c ? K.c(a.name) : K.call(null, a.name)) : Ob.call(null, K.c ? K.c(a.ab) : K.call(null, a.ab), K.c ? K.c(a.name) : K.call(null, a.name))
};
r.Q = function(a, b) {
  return new J(this.ab, this.name, this.eb, this.Xa, b)
};
r.P = g("fb");
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return hb.b(c, this, null);
      case 3:
        return hb.b(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.H = function(a, b) {
  return b instanceof J ? this.eb === b.eb : !1
};
r.toString = g("eb");
function L(a) {
  if(null == a) {
    return null
  }
  var b;
  b = a ? ((b = a.g & 8388608) ? b : a.Wf) ? !0 : !1 : !1;
  if(b) {
    return a.B(a)
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
function M(a) {
  if(null == a) {
    return null
  }
  var b;
  b = a ? ((b = a.g & 64) ? b : a.Bb) ? !0 : !1 : !1;
  if(b) {
    return a.Z(a)
  }
  a = L(a);
  return null == a ? null : F(a)
}
function N(a) {
  if(null != a) {
    var b;
    b = a ? ((b = a.g & 64) ? b : a.Bb) ? !0 : !1 : !1;
    if(b) {
      return a.aa(a)
    }
    a = L(a);
    return null != a ? G(a) : O
  }
  return O
}
function P(a) {
  if(null == a) {
    a = null
  }else {
    var b;
    b = a ? ((b = a.g & 128) ? b : a.Vf) ? !0 : !1 : !1;
    a = b ? a.na(a) : L(N(a))
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
      2 < arguments.length && (l = Q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(y(b.a(a, d))) {
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
    a.j = 2;
    a.f = function(a) {
      var b = M(a);
      a = P(a);
      var d = M(a);
      a = N(a);
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
        return c.e(b, e, Q(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 2;
  b.f = c.f;
  b.c = n(!0);
  b.a = a;
  b.e = c.e;
  return b
}();
xb["null"] = n(0);
Za["null"] = !0;
$a["null"] = n(0);
wb["null"] = function(a, b) {
  return null == b
};
sb["null"] = !0;
tb["null"] = n(null);
qb["null"] = !0;
rb["null"] = n(null);
ab["null"] = n(null);
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
rb["function"] = n(null);
Ya["function"] = !0;
xb._ = function(a) {
  return ia(a)
};
var Rb = function() {
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
      return b.l ? b.l() : b.call(null)
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
  d.b = b;
  d.k = a;
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
      return b.l ? b.l() : b.call(null)
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
  d.b = b;
  d.k = a;
  return d
}();
function Tb(a) {
  if(a) {
    var b = a.g & 2;
    a = (b ? b : a.Le) ? !0 : a.g ? !1 : z(Za, a)
  }else {
    a = z(Za, a)
  }
  return a
}
function Ub(a) {
  if(a) {
    var b = a.g & 16;
    a = (b ? b : a.Fd) ? !0 : a.g ? !1 : z(eb, a)
  }else {
    a = z(eb, a)
  }
  return a
}
function Pb(a, b) {
  this.d = a;
  this.n = b;
  this.q = 0;
  this.g = 166199550
}
r = Pb.prototype;
r.N = function(a) {
  return Vb.c ? Vb.c(a) : Vb.call(null, a)
};
r.na = function() {
  return this.n + 1 < this.d.length ? new Pb(this.d, this.n + 1) : null
};
r.S = function(a, b) {
  return R.a ? R.a(b, a) : R.call(null, b, a)
};
r.toString = function() {
  return Nb(this)
};
r.X = function(a, b) {
  return Sb.k(this.d, b, this.d[this.n], this.n + 1)
};
r.Y = function(a, b, c) {
  return Sb.k(this.d, b, c, this.n)
};
r.B = aa();
r.M = function() {
  return this.d.length - this.n
};
r.Z = function() {
  return this.d[this.n]
};
r.aa = function() {
  return this.n + 1 < this.d.length ? new Pb(this.d, this.n + 1) : Wb.l ? Wb.l() : Wb.call(null)
};
r.H = function(a, b) {
  return Xb.a ? Xb.a(a, b) : Xb.call(null, a, b)
};
r.O = function(a, b) {
  var c = b + this.n;
  return c < this.d.length ? this.d[c] : null
};
r.U = function(a, b, c) {
  a = b + this.n;
  return a < this.d.length ? this.d[a] : c
};
r.T = function() {
  return O
};
var Yb = function() {
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
  c.c = b;
  c.a = a;
  return c
}(), Q = function() {
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
wb._ = function(a, b) {
  return a === b
};
var $b = function() {
  function a(a, b) {
    return null != a ? db(a, b) : Wb.c ? Wb.c(b) : Wb.call(null, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = Q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(y(e)) {
          a = b.a(a, d), d = M(e), e = P(e)
        }else {
          return b.a(a, d)
        }
      }
    }
    a.j = 2;
    a.f = function(a) {
      var b = M(a);
      a = P(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, Q(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 2;
  b.f = c.f;
  b.a = a;
  b.e = c.e;
  return b
}();
function S(a) {
  if(null != a) {
    var b;
    b = a ? ((b = a.g & 2) ? b : a.Le) ? !0 : !1 : !1;
    if(b) {
      a = a.M(a)
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
            if(x.p) {
              a: {
                a = L(a);
                for(b = 0;;) {
                  if(Tb(a)) {
                    a = b + $a(a);
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
var ac = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return L(a) ? M(a) : c
      }
      if(Ub(a)) {
        return D.b(a, b, c)
      }
      if(L(a)) {
        a = P(a), b -= 1
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
        if(L(a)) {
          return M(a)
        }
        throw Error("Index out of bounds");
      }
      if(Ub(a)) {
        return D.a(a, b)
      }
      if(L(a)) {
        var c = P(a), h = b - 1;
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
  c.b = a;
  return c
}(), T = function() {
  function a(a, b, c) {
    if(null != a) {
      if(function() {
        var b;
        b = a ? ((b = a.g & 16) ? b : a.Fd) ? !0 : !1 : !1;
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
          b = a ? ((b = a.g & 64) ? b : a.Bb) ? !0 : a.g ? !1 : z(fb, a) : z(fb, a);
          return b
        }()) {
          return ac.b(a, Math.floor(b), c)
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
      b = a ? ((b = a.g & 16) ? b : a.Fd) ? !0 : !1 : !1;
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
        b = a ? ((b = a.g & 64) ? b : a.Bb) ? !0 : a.g ? !1 : z(fb, a) : z(fb, a);
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
  c.b = a;
  return c
}(), U = function() {
  function a(a, b, c) {
    if(null != a) {
      var h;
      h = a ? ((h = a.g & 256) ? h : a.Tc) ? !0 : !1 : !1;
      a = h ? a.W(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : z(gb, a) ? hb.b(a, b, c) : x.p ? c : null
    }else {
      a = c
    }
    return a
  }
  function b(a, b) {
    var c;
    null == a ? c = null : (c = a ? ((c = a.g & 256) ? c : a.Tc) ? !0 : !1 : !1, c = c ? a.fa(a, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : z(gb, a) ? hb.a(a, b) : null);
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
  c.b = a;
  return c
}(), cc = function() {
  function a(a, b, c) {
    return null != a ? ib(a, b, c) : bc.a ? bc.a(b, c) : bc.call(null, b, c)
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = Q(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m)
    }
    function c(a, d, e, l) {
      for(;;) {
        if(a = b.b(a, d, e), y(l)) {
          d = M(l), e = M(P(l)), l = P(P(l))
        }else {
          return a
        }
      }
    }
    a.j = 3;
    a.f = function(a) {
      var b = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var l = M(a);
      a = N(a);
      return c(b, d, l, a)
    };
    a.e = c;
    return a
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, Q(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 3;
  b.f = c.f;
  b.b = a;
  b.e = c.e;
  return b
}();
function dc(a) {
  var b = ga(a);
  return b ? b : a ? y(y(null) ? null : a.Ke) ? !0 : a.Wc ? !1 : z(Ya, a) : z(Ya, a)
}
var fc = function ec(b, c) {
  return function() {
    var c = dc(b);
    c && (c = b ? ((c = b.g & 262144) ? c : b.Zf) ? !0 : b.g ? !1 : z(sb, b) : z(sb, b), c = !c);
    return c
  }() ? ec(function() {
    "undefined" === typeof Ra && (Ra = {}, Ra = function(b, c, f, h) {
      this.i = b;
      this.ed = c;
      this.Gf = f;
      this.pf = h;
      this.q = 0;
      this.g = 393217
    }, Ra.cc = !0, Ra.bc = "cljs.core/t12181", Ra.Vc = function(b, c) {
      return H(c, "cljs.core/t12181")
    }, Ra.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = Q(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k)
      }
      function c(b, d) {
        return V.a ? V.a(b.ed, d) : V.call(null, b.ed, d)
      }
      b.j = 1;
      b.f = function(b) {
        var d = M(b);
        b = N(b);
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
    return new Ra(c, b, ec, null)
  }(), c) : tb(b, c)
};
function gc(a) {
  var b;
  b = a ? ((b = a.g & 131072) ? b : a.Qe) ? !0 : a.g ? !1 : z(qb, a) : z(qb, a);
  return b ? rb(a) : null
}
var hc = {}, ic = 0, K = function() {
  function a(a, b) {
    var c = v(a);
    (c ? b : c) ? (255 < ic && (hc = {}, ic = 0), c = hc[a], "number" !== typeof c && (c = Aa(a), hc[a] = c, ic += 1)) : c = xb(a);
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
function jc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.g & 8;
      a = (b ? b : a.Qf) ? !0 : a.g ? !1 : z(cb, a)
    }else {
      a = z(cb, a)
    }
  }
  return a
}
function kc(a) {
  if(a) {
    var b = a.g & 16777216;
    a = (b ? b : a.Xf) ? !0 : a.g ? !1 : z(Ab, a)
  }else {
    a = z(Ab, a)
  }
  return a
}
function lc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.g & 1024;
      a = (b ? b : a.Tf) ? !0 : a.g ? !1 : z(jb, a)
    }else {
      a = z(jb, a)
    }
  }
  return a
}
function mc(a) {
  if(a) {
    var b = a.g & 16384;
    a = (b ? b : a.Yf) ? !0 : a.g ? !1 : z(nb, a)
  }else {
    a = z(nb, a)
  }
  return a
}
function nc(a) {
  if(a) {
    var b = a.q & 512;
    a = (b ? b : a.Pf) ? !0 : !1
  }else {
    a = !1
  }
  return a
}
function oc(a) {
  var b = [];
  La(a, function(a, d) {
    return b.push(d)
  });
  return b
}
function pc(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
function qc(a) {
  if(null == a) {
    a = !1
  }else {
    if(a) {
      var b = a.g & 64;
      a = (b ? b : a.Bb) ? !0 : a.g ? !1 : z(fb, a)
    }else {
      a = z(fb, a)
    }
  }
  return a
}
function rc(a) {
  return y(a) ? !0 : !1
}
function sc(a, b) {
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
var tc = function() {
  function a(a, b, c, h) {
    for(;;) {
      var k = sc(T.a(a, h), T.a(b, h)), l = 0 === k;
      if(l ? h + 1 < c : l) {
        h += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var f = S(a), h = S(b);
    return f < h ? -1 : f > h ? 1 : x.p ? c.k(a, b, f, 0) : null
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
  c.k = a;
  return c
}(), vc = function() {
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
    return c ? uc.b ? uc.b(a, M(c), P(c)) : uc.call(null, a, M(c), P(c)) : a.l ? a.l() : a.call(null)
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
  c.b = a;
  return c
}(), uc = function() {
  function a(a, b, c) {
    var h;
    h = c ? ((h = c.g & 524288) ? h : c.Re) ? !0 : !1 : !1;
    return h ? c.Y(c, a, b) : c instanceof Array ? Sb.b(c, a, b) : "string" === typeof c ? Sb.b(c, a, b) : z(ub, c) ? vb.b(c, a, b) : x.p ? vc.b(a, b, c) : null
  }
  function b(a, b) {
    var c;
    c = b ? ((c = b.g & 524288) ? c : b.Re) ? !0 : !1 : !1;
    return c ? b.X(b, a) : b instanceof Array ? Sb.a(b, a) : "string" === typeof b ? Sb.a(b, a) : z(ub, b) ? vb.a(b, a) : x.p ? vc.a(a, b) : null
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
  c.b = a;
  return c
}(), wc = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = Q(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k)
    }
    function d(b, c, d) {
      return uc.b(a, b + c, d)
    }
    b.j = 2;
    b.f = function(a) {
      var b = M(a);
      a = P(a);
      var c = M(a);
      a = N(a);
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
        return b.e(a, d, Q(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.j = 2;
  a.f = b.f;
  a.l = n(0);
  a.c = aa();
  a.a = function(a, b) {
    return a + b
  };
  a.e = b.e;
  return a
}(), xc = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = Q(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k)
    }
    function d(b, c, d) {
      return uc.b(a, b - c, d)
    }
    b.j = 2;
    b.f = function(a) {
      var b = M(a);
      a = P(a);
      var c = M(a);
      a = N(a);
      return d(b, c, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return-a;
      case 2:
        return a - d;
      default:
        return b.e(a, d, Q(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.j = 2;
  a.f = b.f;
  a.c = function(a) {
    return-a
  };
  a.a = function(a, b) {
    return a - b
  };
  a.e = b.e;
  return a
}();
function yc(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(null, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(null, a)
}
function zc(a, b) {
  return yc((a - a % b) / b)
}
var Ac = function() {
  function a(a) {
    return a * c.l()
  }
  function b() {
    return Math.random.l ? Math.random.l() : Math.random.call(null)
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
  c.l = b;
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
function Dc(a) {
  var b = 1;
  for(a = L(a);;) {
    var c = a;
    if(y(c ? 0 < b : c)) {
      b -= 1, a = P(a)
    }else {
      return a
    }
  }
}
var B = function() {
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
          if(y(c)) {
            var d = a.append(b.c(M(c))), e = P(c);
            a = d;
            c = e
          }else {
            return a.toString()
          }
        }
      }.call(null, new Qa(b.c(a)), d)
    }
    a.j = 1;
    a.f = function(a) {
      var b = M(a);
      a = N(a);
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
        return c.e(b, Q(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 1;
  b.f = c.f;
  b.l = n("");
  b.c = a;
  b.e = c.e;
  return b
}();
function Xb(a, b) {
  return rc(kc(b) ? function() {
    for(var c = L(a), d = L(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(Qb.a(M(c), M(d))) {
        c = P(c), d = P(d)
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
  return uc.b(function(a, c) {
    return Ob(a, K.a(c, !1))
  }, K.a(M(a), !1), P(a))
}
function Ec(a) {
  var b = 0;
  for(a = L(a);;) {
    if(a) {
      var c = M(a), b = (b + (K.c(Fc.c ? Fc.c(c) : Fc.call(null, c)) ^ K.c(Hc.c ? Hc.c(c) : Hc.call(null, c)))) % 4503599627370496;
      a = P(a)
    }else {
      return b
    }
  }
}
function Ic(a, b, c, d, e) {
  this.i = a;
  this.Gb = b;
  this.Ha = c;
  this.count = d;
  this.o = e;
  this.q = 0;
  this.g = 65937646
}
r = Ic.prototype;
r.N = function(a) {
  var b = this.o;
  return null != b ? b : this.o = a = Vb(a)
};
r.na = function() {
  return 1 === this.count ? null : this.Ha
};
r.S = function(a, b) {
  return new Ic(this.i, b, a, this.count + 1, null)
};
r.toString = function() {
  return Nb(this)
};
r.X = function(a, b) {
  return vc.a(b, a)
};
r.Y = function(a, b, c) {
  return vc.b(b, c, a)
};
r.B = aa();
r.M = g("count");
r.Z = g("Gb");
r.aa = function() {
  return 1 === this.count ? O : this.Ha
};
r.H = function(a, b) {
  return Xb(a, b)
};
r.Q = function(a, b) {
  return new Ic(b, this.Gb, this.Ha, this.count, this.o)
};
r.P = g("i");
r.T = function() {
  return O
};
function Jc(a) {
  this.i = a;
  this.q = 0;
  this.g = 65937614
}
r = Jc.prototype;
r.N = n(0);
r.na = n(null);
r.S = function(a, b) {
  return new Ic(this.i, b, null, 1, null)
};
r.toString = function() {
  return Nb(this)
};
r.X = function(a, b) {
  return vc.a(b, a)
};
r.Y = function(a, b, c) {
  return vc.b(b, c, a)
};
r.B = n(null);
r.M = n(0);
r.Z = n(null);
r.aa = function() {
  return O
};
r.H = function(a, b) {
  return Xb(a, b)
};
r.Q = function(a, b) {
  return new Jc(b)
};
r.P = g("i");
r.T = aa();
var O = new Jc(null), Wb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(a instanceof Pb) {
      b = a.d
    }else {
      a: {
        for(b = [];;) {
          if(null != a) {
            b.push(a.Z(a)), a = a.na(a)
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
        var f = a - 1, e = e.S(e, b[a - 1]);
        a = f
      }else {
        return e
      }
    }
  }
  a.j = 0;
  a.f = function(a) {
    a = L(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function Kc(a, b, c, d) {
  this.i = a;
  this.Gb = b;
  this.Ha = c;
  this.o = d;
  this.q = 0;
  this.g = 65929452
}
r = Kc.prototype;
r.N = function(a) {
  var b = this.o;
  return null != b ? b : this.o = a = Vb(a)
};
r.na = function() {
  return null == this.Ha ? null : zb(this.Ha)
};
r.S = function(a, b) {
  return new Kc(null, b, a, this.o)
};
r.toString = function() {
  return Nb(this)
};
r.X = function(a, b) {
  return vc.a(b, a)
};
r.Y = function(a, b, c) {
  return vc.b(b, c, a)
};
r.B = aa();
r.Z = g("Gb");
r.aa = function() {
  return null == this.Ha ? O : this.Ha
};
r.H = function(a, b) {
  return Xb(a, b)
};
r.Q = function(a, b) {
  return new Kc(b, this.Gb, this.Ha, this.o)
};
r.P = g("i");
r.T = function() {
  return fc(O, this.i)
};
function R(a, b) {
  var c = null == b;
  c || (c = b ? ((c = b.g & 64) ? c : b.Bb) ? !0 : !1 : !1);
  return c ? new Kc(null, a, b, null) : new Kc(null, a, L(b), null)
}
xb.string = function(a) {
  return Aa(a)
};
function W(a, b, c, d) {
  this.ab = a;
  this.name = b;
  this.Pa = c;
  this.Xa = d;
  this.g = 2153775105;
  this.q = 4096
}
r = W.prototype;
r.F = function(a, b) {
  return H(b, [B(":"), B(this.Pa)].join(""))
};
r.N = function() {
  null == this.Xa && (this.Xa = Ob(K.c(this.ab), K.c(this.name)) + 2654435769);
  return this.Xa
};
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        null == c ? e = null : (e = c ? ((e = c.g & 256) ? e : c.Tc) ? !0 : c.g ? !1 : z(gb, c) : z(gb, c), e = e ? hb.b(c, this, null) : null);
        return e;
      case 3:
        return null == c ? e = d : (e = c ? ((e = c.g & 256) ? e : c.Tc) ? !0 : c.g ? !1 : z(gb, c) : z(gb, c), e = e ? hb.b(c, this, d) : d), e
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.H = function(a, b) {
  return b instanceof W ? this.Pa === b.Pa : !1
};
r.toString = function() {
  return[B(":"), B(this.Pa)].join("")
};
function Lc(a, b) {
  var c;
  c = a === b ? !0 : ((c = a instanceof W) ? b instanceof W : c) ? a.Pa === b.Pa : !1;
  return c
}
var Nc = function() {
  function a(a, b) {
    return new W(a, b, [B(y(a) ? [B(a), B("/")].join("") : null), B(b)].join(""), null)
  }
  function b(a) {
    return a instanceof W ? a : a instanceof J ? new W(null, Mc.c ? Mc.c(a) : Mc.call(null, a), Mc.c ? Mc.c(a) : Mc.call(null, a), null) : x.p ? new W(null, a, a, null) : null
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
function Oc(a, b, c, d) {
  this.i = a;
  this.pb = b;
  this.u = c;
  this.o = d;
  this.q = 0;
  this.g = 32374988
}
r = Oc.prototype;
r.N = function(a) {
  var b = this.o;
  return null != b ? b : this.o = a = Vb(a)
};
r.na = function(a) {
  a.B(a);
  return null == this.u ? null : this.u.na(this.u)
};
r.S = function(a, b) {
  return R(b, a)
};
r.toString = function() {
  return Nb(this)
};
function Pc(a) {
  null != a.pb && (a.u = a.pb.l ? a.pb.l() : a.pb.call(null), a.pb = null);
  return a.u
}
r.X = function(a, b) {
  return vc.a(b, a)
};
r.Y = function(a, b, c) {
  return vc.b(b, c, a)
};
r.B = function(a) {
  Pc(a);
  if(null == this.u) {
    return null
  }
  for(a = this.u;;) {
    if(a instanceof Oc) {
      a = Pc(a)
    }else {
      return this.u = a, null == this.u ? null : this.u.B(this.u)
    }
  }
};
r.Z = function(a) {
  a.B(a);
  return null == this.u ? null : this.u.Z(this.u)
};
r.aa = function(a) {
  a.B(a);
  return null != this.u ? this.u.aa(this.u) : O
};
r.H = function(a, b) {
  return Xb(a, b)
};
r.Q = function(a, b) {
  return new Oc(b, this.pb, this.u, this.o)
};
r.P = g("i");
r.T = function() {
  return fc(O, this.i)
};
function Qc(a, b) {
  this.R = a;
  this.end = b;
  this.q = 0;
  this.g = 2
}
Qc.prototype.M = g("end");
Qc.prototype.add = function(a) {
  this.R[this.end] = a;
  return this.end += 1
};
Qc.prototype.ma = function() {
  var a = new Rc(this.R, 0, this.end);
  this.R = null;
  return a
};
function Rc(a, b, c) {
  this.d = a;
  this.D = b;
  this.end = c;
  this.q = 0;
  this.g = 524306
}
r = Rc.prototype;
r.X = function(a, b) {
  return Sb.k(this.d, b, this.d[this.D], this.D + 1)
};
r.Y = function(a, b, c) {
  return Sb.k(this.d, b, c, this.D)
};
r.Bd = function() {
  if(this.D === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Rc(this.d, this.D + 1, this.end)
};
r.O = function(a, b) {
  return this.d[this.D + b]
};
r.U = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.D : a) ? this.d[this.D + b] : c
};
r.M = function() {
  return this.end - this.D
};
var Sc = function() {
  function a(a, b, c) {
    return new Rc(a, b, c)
  }
  function b(a, b) {
    return new Rc(a, b, a.length)
  }
  function c(a) {
    return new Rc(a, 0, a.length)
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
  d.b = a;
  return d
}();
function Tc(a, b, c, d) {
  this.ma = a;
  this.wa = b;
  this.i = c;
  this.o = d;
  this.g = 31850732;
  this.q = 1536
}
r = Tc.prototype;
r.N = function(a) {
  var b = this.o;
  return null != b ? b : this.o = a = Vb(a)
};
r.na = function() {
  if(1 < $a(this.ma)) {
    return new Tc(Jb(this.ma), this.wa, this.i, null)
  }
  var a = zb(this.wa);
  return null == a ? null : a
};
r.S = function(a, b) {
  return R(b, a)
};
r.toString = function() {
  return Nb(this)
};
r.B = aa();
r.Z = function() {
  return D.a(this.ma, 0)
};
r.aa = function() {
  return 1 < $a(this.ma) ? new Tc(Jb(this.ma), this.wa, this.i, null) : null == this.wa ? O : this.wa
};
r.Cd = function() {
  return null == this.wa ? null : this.wa
};
r.H = function(a, b) {
  return Xb(a, b)
};
r.Q = function(a, b) {
  return new Tc(this.ma, this.wa, b, this.o)
};
r.P = g("i");
r.T = function() {
  return fc(O, this.i)
};
r.Ec = g("ma");
r.Yb = function() {
  return null == this.wa ? O : this.wa
};
function Uc(a, b) {
  return 0 === $a(a) ? b : new Tc(a, b, null, null)
}
function Vc(a) {
  for(var b = [];;) {
    if(L(a)) {
      b.push(M(a)), a = P(a)
    }else {
      return b
    }
  }
}
function Wc(a, b) {
  if(Tb(a)) {
    return S(a)
  }
  for(var c = a, d = b, e = 0;;) {
    var f;
    f = (f = 0 < d) ? L(c) : f;
    if(y(f)) {
      c = P(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var Yc = function Xc(b) {
  return null == b ? null : null == P(b) ? L(M(b)) : x.p ? R(M(b), Xc(P(b))) : null
}, Zc = function() {
  function a(a, b) {
    return new Oc(null, function() {
      var c = L(a);
      return c ? nc(c) ? Uc(Kb(c), d.a(Lb(c), b)) : R(M(c), d.a(N(c), b)) : b
    }, null, null)
  }
  function b(a) {
    return new Oc(null, function() {
      return a
    }, null, null)
  }
  function c() {
    return new Oc(null, n(null), null, null)
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = Q(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f)
    }
    function b(a, c, e) {
      return function q(a, b) {
        return new Oc(null, function() {
          var c = L(a);
          return c ? nc(c) ? Uc(Kb(c), q(Lb(c), b)) : R(M(c), q(N(c), b)) : y(b) ? q(M(b), P(b)) : null
        }, null, null)
      }(d.a(a, c), e)
    }
    a.j = 2;
    a.f = function(a) {
      var c = M(a);
      a = P(a);
      var d = M(a);
      a = N(a);
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.e(d, h, Q(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = 2;
  d.f = e.f;
  d.l = c;
  d.c = b;
  d.a = a;
  d.e = e.e;
  return d
}(), $c = function() {
  function a(a, b, c, d) {
    return R(a, R(b, R(c, d)))
  }
  function b(a, b, c) {
    return R(a, R(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, m, p) {
      var q = null;
      4 < arguments.length && (q = Q(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, q)
    }
    function b(a, c, d, e, f) {
      return R(a, R(c, R(d, R(e, Yc(f)))))
    }
    a.j = 4;
    a.f = function(a) {
      var c = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var e = M(a);
      a = P(a);
      var p = M(a);
      a = N(a);
      return b(c, d, e, p, a)
    };
    a.e = b;
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
        return d.e(c, f, h, k, Q(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = 4;
  c.f = d.f;
  c.c = function(a) {
    return L(a)
  };
  c.a = function(a, b) {
    return R(a, b)
  };
  c.b = b;
  c.k = a;
  c.e = d.e;
  return c
}();
function ad(a, b, c) {
  var d = L(c);
  if(0 === b) {
    return a.l ? a.l() : a.call(null)
  }
  c = F(d);
  var e = G(d);
  if(1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(null, c)
  }
  var d = F(e), f = G(e);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d)
  }
  var e = F(f), h = G(f);
  if(3 === b) {
    return a.b ? a.b(c, d, e) : a.b ? a.b(c, d, e) : a.call(null, c, d, e)
  }
  var f = F(h), k = G(h);
  if(4 === b) {
    return a.k ? a.k(c, d, e, f) : a.k ? a.k(c, d, e, f) : a.call(null, c, d, e, f)
  }
  h = F(k);
  k = G(k);
  if(5 === b) {
    return a.w ? a.w(c, d, e, f, h) : a.w ? a.w(c, d, e, f, h) : a.call(null, c, d, e, f, h)
  }
  a = F(k);
  var l = G(k);
  if(6 === b) {
    return a.ea ? a.ea(c, d, e, f, h, a) : a.ea ? a.ea(c, d, e, f, h, a) : a.call(null, c, d, e, f, h, a)
  }
  var k = F(l), m = G(l);
  if(7 === b) {
    return a.ib ? a.ib(c, d, e, f, h, a, k) : a.ib ? a.ib(c, d, e, f, h, a, k) : a.call(null, c, d, e, f, h, a, k)
  }
  var l = F(m), p = G(m);
  if(8 === b) {
    return a.Rc ? a.Rc(c, d, e, f, h, a, k, l) : a.Rc ? a.Rc(c, d, e, f, h, a, k, l) : a.call(null, c, d, e, f, h, a, k, l)
  }
  var m = F(p), q = G(p);
  if(9 === b) {
    return a.Sc ? a.Sc(c, d, e, f, h, a, k, l, m) : a.Sc ? a.Sc(c, d, e, f, h, a, k, l, m) : a.call(null, c, d, e, f, h, a, k, l, m)
  }
  var p = F(q), u = G(q);
  if(10 === b) {
    return a.Gc ? a.Gc(c, d, e, f, h, a, k, l, m, p) : a.Gc ? a.Gc(c, d, e, f, h, a, k, l, m, p) : a.call(null, c, d, e, f, h, a, k, l, m, p)
  }
  var q = F(u), E = G(u);
  if(11 === b) {
    return a.Hc ? a.Hc(c, d, e, f, h, a, k, l, m, p, q) : a.Hc ? a.Hc(c, d, e, f, h, a, k, l, m, p, q) : a.call(null, c, d, e, f, h, a, k, l, m, p, q)
  }
  var u = F(E), C = G(E);
  if(12 === b) {
    return a.Ic ? a.Ic(c, d, e, f, h, a, k, l, m, p, q, u) : a.Ic ? a.Ic(c, d, e, f, h, a, k, l, m, p, q, u) : a.call(null, c, d, e, f, h, a, k, l, m, p, q, u)
  }
  var E = F(C), I = G(C);
  if(13 === b) {
    return a.Jc ? a.Jc(c, d, e, f, h, a, k, l, m, p, q, u, E) : a.Jc ? a.Jc(c, d, e, f, h, a, k, l, m, p, q, u, E) : a.call(null, c, d, e, f, h, a, k, l, m, p, q, u, E)
  }
  var C = F(I), ea = G(I);
  if(14 === b) {
    return a.Kc ? a.Kc(c, d, e, f, h, a, k, l, m, p, q, u, E, C) : a.Kc ? a.Kc(c, d, e, f, h, a, k, l, m, p, q, u, E, C) : a.call(null, c, d, e, f, h, a, k, l, m, p, q, u, E, C)
  }
  var I = F(ea), pa = G(ea);
  if(15 === b) {
    return a.Lc ? a.Lc(c, d, e, f, h, a, k, l, m, p, q, u, E, C, I) : a.Lc ? a.Lc(c, d, e, f, h, a, k, l, m, p, q, u, E, C, I) : a.call(null, c, d, e, f, h, a, k, l, m, p, q, u, E, C, I)
  }
  var ea = F(pa), ya = G(pa);
  if(16 === b) {
    return a.Mc ? a.Mc(c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea) : a.Mc ? a.Mc(c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea) : a.call(null, c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea)
  }
  var pa = F(ya), bb = G(ya);
  if(17 === b) {
    return a.Nc ? a.Nc(c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea, pa) : a.Nc ? a.Nc(c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea, pa) : a.call(null, c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea, pa)
  }
  var ya = F(bb), Gc = G(bb);
  if(18 === b) {
    return a.Oc ? a.Oc(c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea, pa, ya) : a.Oc ? a.Oc(c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea, pa, ya) : a.call(null, c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea, pa, ya)
  }
  bb = F(Gc);
  Gc = G(Gc);
  if(19 === b) {
    return a.Pc ? a.Pc(c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea, pa, ya, bb) : a.Pc ? a.Pc(c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea, pa, ya, bb) : a.call(null, c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea, pa, ya, bb)
  }
  var Zb = F(Gc);
  G(Gc);
  if(20 === b) {
    return a.Qc ? a.Qc(c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea, pa, ya, bb, Zb) : a.Qc ? a.Qc(c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea, pa, ya, bb, Zb) : a.call(null, c, d, e, f, h, a, k, l, m, p, q, u, E, C, I, ea, pa, ya, bb, Zb)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var V = function() {
  function a(a, b, c, d, e) {
    b = $c.k(b, c, d, e);
    c = a.j;
    return a.f ? (d = Wc(b, c + 1), d <= c ? ad(a, d, b) : a.f(b)) : a.apply(a, Vc(b))
  }
  function b(a, b, c, d) {
    b = $c.b(b, c, d);
    c = a.j;
    return a.f ? (d = Wc(b, c + 1), d <= c ? ad(a, d, b) : a.f(b)) : a.apply(a, Vc(b))
  }
  function c(a, b, c) {
    b = $c.a(b, c);
    c = a.j;
    if(a.f) {
      var d = Wc(b, c + 1);
      return d <= c ? ad(a, d, b) : a.f(b)
    }
    return a.apply(a, Vc(b))
  }
  function d(a, b) {
    var c = a.j;
    if(a.f) {
      var d = Wc(b, c + 1);
      return d <= c ? ad(a, d, b) : a.f(b)
    }
    return a.apply(a, Vc(b))
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, E) {
      var C = null;
      5 < arguments.length && (C = Q(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, C)
    }
    function b(a, c, d, e, f, h) {
      c = R(c, R(d, R(e, R(f, Yc(h)))));
      d = a.j;
      return a.f ? (e = Wc(c, d + 1), e <= d ? ad(a, e, c) : a.f(c)) : a.apply(a, Vc(c))
    }
    a.j = 5;
    a.f = function(a) {
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
    a.e = b;
    return a
  }(), e = function(e, k, l, m, p, q) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, p);
      default:
        return f.e(e, k, l, m, p, Q(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.j = 5;
  e.f = f.f;
  e.a = d;
  e.b = c;
  e.k = b;
  e.w = a;
  e.e = f.e;
  return e
}();
function bd(a, b) {
  for(;;) {
    if(null == L(b)) {
      return!0
    }
    if(y(a.c ? a.c(M(b)) : a.call(null, M(b)))) {
      var c = a, d = P(b);
      a = c;
      b = d
    }else {
      return x.p ? !1 : null
    }
  }
}
function cd(a) {
  for(var b = dd;;) {
    if(L(a)) {
      var c = b.c ? b.c(M(a)) : b.call(null, M(a));
      if(y(c)) {
        return c
      }
      a = P(a)
    }else {
      return null
    }
  }
}
function dd(a) {
  return a
}
function ed(a) {
  return function() {
    function b(b) {
      0 < arguments.length && Q(Array.prototype.slice.call(arguments, 0), 0);
      return a
    }
    b.j = 0;
    b.f = function(b) {
      L(b);
      return a
    };
    b.e = function() {
      return a
    };
    return b
  }()
}
var fd = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = Q(Array.prototype.slice.call(arguments, 0), 0));
        return p.call(this, b)
      }
      function p(e) {
        return V.w(a, b, c, d, e)
      }
      e.j = 0;
      e.f = function(a) {
        a = L(a);
        return p(a)
      };
      e.e = p;
      return e
    }()
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = Q(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b)
      }
      function e(d) {
        return V.k(a, b, c, d)
      }
      d.j = 0;
      d.f = function(a) {
        a = L(a);
        return e(a)
      };
      d.e = e;
      return d
    }()
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = Q(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b)
      }
      function d(c) {
        return V.b(a, b, c)
      }
      c.j = 0;
      c.f = function(a) {
        a = L(a);
        return d(a)
      };
      c.e = d;
      return c
    }()
  }
  var d = null, e = function() {
    function a(c, d, e, f, q) {
      var u = null;
      4 < arguments.length && (u = Q(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, u)
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = Q(Array.prototype.slice.call(arguments, 0), 0));
          return h.call(this, c)
        }
        function h(b) {
          return V.w(a, c, d, e, Zc.a(f, b))
        }
        b.j = 0;
        b.f = function(a) {
          a = L(a);
          return h(a)
        };
        b.e = h;
        return b
      }()
    }
    a.j = 4;
    a.f = function(a) {
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
        return e.e(d, h, k, l, Q(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = 4;
  d.f = e.f;
  d.a = c;
  d.b = b;
  d.k = a;
  d.e = e.e;
  return d
}(), X = function() {
  function a(a, b, c, e) {
    return new Oc(null, function() {
      var m = L(b), p = L(c), q = L(e);
      return(m ? p ? q : p : m) ? R(a.b ? a.b(M(m), M(p), M(q)) : a.call(null, M(m), M(p), M(q)), d.k(a, N(m), N(p), N(q))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new Oc(null, function() {
      var e = L(b), m = L(c);
      return(e ? m : e) ? R(a.a ? a.a(M(e), M(m)) : a.call(null, M(e), M(m)), d.b(a, N(e), N(m))) : null
    }, null, null)
  }
  function c(a, b) {
    return new Oc(null, function() {
      var c = L(b);
      if(c) {
        if(nc(c)) {
          for(var e = Kb(c), m = S(e), p = new Qc(Array(m), 0), q = 0;;) {
            if(q < m) {
              var u = a.c ? a.c(D.a(e, q)) : a.call(null, D.a(e, q));
              p.add(u);
              q += 1
            }else {
              break
            }
          }
          return Uc(p.ma(), d.a(a, Lb(c)))
        }
        return R(a.c ? a.c(M(c)) : a.call(null, M(c)), d.a(a, N(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, f, q) {
      var u = null;
      4 < arguments.length && (u = Q(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, u)
    }
    function b(a, c, e, f, h) {
      return d.a(function(b) {
        return V.a(a, b)
      }, function E(a) {
        return new Oc(null, function() {
          var b = d.a(L, a);
          return bd(dd, b) ? R(d.a(M, b), E(d.a(N, b))) : null
        }, null, null)
      }($b.e(h, f, Q([e, c], 0))))
    }
    a.j = 4;
    a.f = function(a) {
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
        return e.e(d, h, k, l, Q(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = 4;
  d.f = e.f;
  d.a = c;
  d.b = b;
  d.k = a;
  d.e = e.e;
  return d
}(), hd = function gd(b, c) {
  return R(c, new Oc(null, function() {
    return gd(b, b.c ? b.c(c) : b.call(null, c))
  }, null, null))
};
function id(a, b) {
  var c;
  null != a ? (c = a ? ((c = a.q & 4) ? c : a.Rf) ? !0 : !1 : !1, c ? (c = uc.b(Gb, Fb(a), b), c = Hb(c)) : c = uc.b(db, a, b)) : c = uc.b($b, O, b);
  return c
}
var jd = function() {
  function a(a, b, c, d, f, q) {
    var u = T.b(b, 0, null);
    b = Dc(b);
    return y(b) ? cc.b(a, u, e.ea(U.a(a, u), b, c, d, f, q)) : cc.b(a, u, c.k ? c.k(U.a(a, u), d, f, q) : c.call(null, U.a(a, u), d, f, q))
  }
  function b(a, b, c, d, f) {
    var q = T.b(b, 0, null);
    b = Dc(b);
    return y(b) ? cc.b(a, q, e.w(U.a(a, q), b, c, d, f)) : cc.b(a, q, c.b ? c.b(U.a(a, q), d, f) : c.call(null, U.a(a, q), d, f))
  }
  function c(a, b, c, d) {
    var f = T.b(b, 0, null);
    b = Dc(b);
    return y(b) ? cc.b(a, f, e.k(U.a(a, f), b, c, d)) : cc.b(a, f, c.a ? c.a(U.a(a, f), d) : c.call(null, U.a(a, f), d))
  }
  function d(a, b, c) {
    var d = T.b(b, 0, null);
    b = Dc(b);
    return y(b) ? cc.b(a, d, e.b(U.a(a, d), b, c)) : cc.b(a, d, c.c ? c.c(U.a(a, d)) : c.call(null, U.a(a, d)))
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, E, C) {
      var I = null;
      6 < arguments.length && (I = Q(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, h, E, I)
    }
    function b(a, c, d, f, h, k, C) {
      var I = T.b(c, 0, null);
      c = Dc(c);
      return y(c) ? cc.b(a, I, V.e(e, U.a(a, I), c, d, f, Q([h, k, C], 0))) : cc.b(a, I, V.e(d, U.a(a, I), f, h, k, Q([C], 0)))
    }
    a.j = 6;
    a.f = function(a) {
      var c = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var e = M(a);
      a = P(a);
      var f = M(a);
      a = P(a);
      var h = M(a);
      a = P(a);
      var C = M(a);
      a = N(a);
      return b(c, d, e, f, h, C, a)
    };
    a.e = b;
    return a
  }(), e = function(e, k, l, m, p, q, u) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, k, l);
      case 4:
        return c.call(this, e, k, l, m);
      case 5:
        return b.call(this, e, k, l, m, p);
      case 6:
        return a.call(this, e, k, l, m, p, q);
      default:
        return f.e(e, k, l, m, p, q, Q(arguments, 6))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.j = 6;
  e.f = f.f;
  e.b = d;
  e.k = c;
  e.w = b;
  e.ea = a;
  e.e = f.e;
  return e
}();
function kd(a, b) {
  this.s = a;
  this.d = b
}
function ld(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function md(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new kd(a, Array(32));
    d.d[0] = c;
    c = d;
    b -= 5
  }
}
var od = function nd(b, c, d, e) {
  var f = new kd(d.s, d.d.slice()), h = b.h - 1 >>> c & 31;
  5 === c ? f.d[h] = e : (d = d.d[h], b = null != d ? nd(b, c - 5, d, e) : md(null, c - 5, e), f.d[h] = b);
  return f
};
function pd(a, b) {
  throw Error([B("No item "), B(a), B(" in vector of length "), B(b)].join(""));
}
function qd(a, b) {
  var c = 0 <= b;
  if(c ? b < a.h : c) {
    if(b >= ld(a)) {
      return a.t
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      }else {
        return c.d
      }
    }
  }else {
    return pd(b, a.h)
  }
}
var sd = function rd(b, c, d, e, f) {
  var h = new kd(d.s, d.d.slice());
  if(0 === c) {
    h.d[e & 31] = f
  }else {
    var k = e >>> c & 31;
    b = rd(b, c - 5, d.d[k], e, f);
    h.d[k] = b
  }
  return h
};
function td(a, b, c, d, e, f) {
  this.i = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.t = e;
  this.o = f;
  this.q = 4;
  this.g = 167668511
}
r = td.prototype;
r.Zb = function() {
  return new ud(this.h, this.shift, vd.c ? vd.c(this.root) : vd.call(null, this.root), wd.c ? wd.c(this.t) : wd.call(null, this.t))
};
r.N = function(a) {
  var b = this.o;
  return null != b ? b : this.o = a = Vb(a)
};
r.fa = function(a, b) {
  return a.U(a, b, null)
};
r.W = function(a, b, c) {
  return a.U(a, b, c)
};
r.za = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.h : d) {
    return ld(a) <= b ? (a = this.t.slice(), a[b & 31] = c, new td(this.i, this.h, this.shift, this.root, a, null)) : new td(this.i, this.h, this.shift, sd(a, this.shift, this.root, b, c), this.t, null)
  }
  if(b === this.h) {
    return a.S(a, c)
  }
  if(x.p) {
    throw Error([B("Index "), B(b), B(" out of bounds  [0,"), B(this.h), B("]")].join(""));
  }
  return null
};
r.call = function() {
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
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.S = function(a, b) {
  if(32 > this.h - ld(a)) {
    var c = this.t.slice();
    c.push(b);
    return new td(this.i, this.h + 1, this.shift, this.root, c, null)
  }
  var d = this.h >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new kd(null, Array(32));
    d.d[0] = this.root;
    var e = md(null, this.shift, new kd(null, this.t));
    d.d[1] = e
  }else {
    d = od(a, this.shift, this.root, new kd(null, this.t))
  }
  return new td(this.i, this.h + 1, c, d, [b], null)
};
r.Gd = function(a) {
  return a.O(a, 0)
};
r.Hd = function(a) {
  return a.O(a, 1)
};
r.toString = function() {
  return Nb(this)
};
r.X = function(a, b) {
  return Rb.a(a, b)
};
r.Y = function(a, b, c) {
  return Rb.b(a, b, c)
};
r.B = function(a) {
  return 0 === this.h ? null : 32 > this.h ? Q.c(this.t) : x.p ? xd.b ? xd.b(a, 0, 0) : xd.call(null, a, 0, 0) : null
};
r.M = g("h");
r.Uc = function(a, b, c) {
  return a.za(a, b, c)
};
r.H = function(a, b) {
  return Xb(a, b)
};
r.Q = function(a, b) {
  return new td(b, this.h, this.shift, this.root, this.t, this.o)
};
r.P = g("i");
r.O = function(a, b) {
  return qd(a, b)[b & 31]
};
r.U = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.h : d) ? a.O(a, b) : c
};
r.T = function() {
  return fc(yd, this.i)
};
var zd = new kd(null, Array(32)), yd = new td(null, 0, 5, zd, [], 0);
function Ad(a) {
  var b = a.length;
  if(32 > b) {
    return new td(null, b, 5, zd, a, null)
  }
  for(var c = a.slice(0, 32), d = 32, e = Fb(new td(null, 32, 5, zd, c, null));;) {
    if(d < b) {
      c = d + 1, e = Gb(e, a[d]), d = c
    }else {
      return Hb(e)
    }
  }
}
function Bd(a) {
  return Hb(uc.b(Gb, Fb(yd), a))
}
var Cd = function() {
  function a(a) {
    var c = null;
    0 < arguments.length && (c = Q(Array.prototype.slice.call(arguments, 0), 0));
    return Bd(c)
  }
  a.j = 0;
  a.f = function(a) {
    a = L(a);
    return Bd(a)
  };
  a.e = function(a) {
    return Bd(a)
  };
  return a
}();
function Dd(a, b, c, d, e, f) {
  this.L = a;
  this.ka = b;
  this.n = c;
  this.D = d;
  this.i = e;
  this.o = f;
  this.g = 32243948;
  this.q = 1536
}
r = Dd.prototype;
r.N = function(a) {
  var b = this.o;
  return null != b ? b : this.o = a = Vb(a)
};
r.na = function(a) {
  return this.D + 1 < this.ka.length ? (a = xd.k ? xd.k(this.L, this.ka, this.n, this.D + 1) : xd.call(null, this.L, this.ka, this.n, this.D + 1), null == a ? null : a) : a.Cd(a)
};
r.S = function(a, b) {
  return R(b, a)
};
r.toString = function() {
  return Nb(this)
};
r.X = function(a, b) {
  return Rb.a(Ed.b ? Ed.b(this.L, this.n + this.D, S(this.L)) : Ed.call(null, this.L, this.n + this.D, S(this.L)), b)
};
r.Y = function(a, b, c) {
  return Rb.b(Ed.b ? Ed.b(this.L, this.n + this.D, S(this.L)) : Ed.call(null, this.L, this.n + this.D, S(this.L)), b, c)
};
r.B = aa();
r.Z = function() {
  return this.ka[this.D]
};
r.aa = function(a) {
  return this.D + 1 < this.ka.length ? (a = xd.k ? xd.k(this.L, this.ka, this.n, this.D + 1) : xd.call(null, this.L, this.ka, this.n, this.D + 1), null == a ? O : a) : a.Yb(a)
};
r.Cd = function() {
  var a = this.ka.length, a = this.n + a < $a(this.L) ? xd.b ? xd.b(this.L, this.n + a, 0) : xd.call(null, this.L, this.n + a, 0) : null;
  return null == a ? null : a
};
r.H = function(a, b) {
  return Xb(a, b)
};
r.Q = function(a, b) {
  return xd.w ? xd.w(this.L, this.ka, this.n, this.D, b) : xd.call(null, this.L, this.ka, this.n, this.D, b)
};
r.T = function() {
  return fc(yd, this.i)
};
r.Ec = function() {
  return Sc.a(this.ka, this.D)
};
r.Yb = function() {
  var a = this.ka.length, a = this.n + a < $a(this.L) ? xd.b ? xd.b(this.L, this.n + a, 0) : xd.call(null, this.L, this.n + a, 0) : null;
  return null == a ? O : a
};
var xd = function() {
  function a(a, b, c, d, l) {
    return new Dd(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new Dd(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new Dd(a, qd(a, b), b, c, null, null)
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
  d.b = c;
  d.k = b;
  d.w = a;
  return d
}();
function Fd(a, b, c, d, e) {
  this.i = a;
  this.ya = b;
  this.start = c;
  this.end = d;
  this.o = e;
  this.q = 0;
  this.g = 32400159
}
r = Fd.prototype;
r.N = function(a) {
  var b = this.o;
  return null != b ? b : this.o = a = Vb(a)
};
r.fa = function(a, b) {
  return a.U(a, b, null)
};
r.W = function(a, b, c) {
  return a.U(a, b, c)
};
r.za = function(a, b, c) {
  var d = this, e = d.start + b;
  return Gd.w ? Gd.w(d.i, cc.b(d.ya, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : Gd.call(null, d.i, cc.b(d.ya, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
r.call = function() {
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
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.S = function(a, b) {
  return Gd.w ? Gd.w(this.i, ob(this.ya, this.end, b), this.start, this.end + 1, null) : Gd.call(null, this.i, ob(this.ya, this.end, b), this.start, this.end + 1, null)
};
r.toString = function() {
  return Nb(this)
};
r.X = function(a, b) {
  return Rb.a(a, b)
};
r.Y = function(a, b, c) {
  return Rb.b(a, b, c)
};
r.B = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : R(D.a(a.ya, d), new Oc(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
r.M = function() {
  return this.end - this.start
};
r.Uc = function(a, b, c) {
  return a.za(a, b, c)
};
r.H = function(a, b) {
  return Xb(a, b)
};
r.Q = function(a, b) {
  return Gd.w ? Gd.w(b, this.ya, this.start, this.end, this.o) : Gd.call(null, b, this.ya, this.start, this.end, this.o)
};
r.P = g("i");
r.O = function(a, b) {
  var c = 0 > b;
  return(c ? c : this.end <= this.start + b) ? pd(b, this.end - this.start) : D.a(this.ya, this.start + b)
};
r.U = function(a, b, c) {
  return((a = 0 > b) ? a : this.end <= this.start + b) ? c : D.b(this.ya, this.start + b, c)
};
r.T = function() {
  return fc(yd, this.i)
};
function Gd(a, b, c, d, e) {
  for(;;) {
    if(b instanceof Fd) {
      var f = b.start + c, h = b.start + d;
      b = b.ya;
      c = f;
      d = h
    }else {
      var k = S(b);
      if(function() {
        var a = 0 > c;
        return a || (a = 0 > d) ? a : (a = c > k) ? a : d > k
      }()) {
        throw Error("Index out of bounds");
      }
      return new Fd(a, b, c, d, e)
    }
  }
}
var Ed = function() {
  function a(a, b, c) {
    return Gd(null, a, b, c, null)
  }
  function b(a, b) {
    return c.b(a, b, S(a))
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
  c.b = a;
  return c
}();
function vd(a) {
  return new kd({}, a.d.slice())
}
function wd(a) {
  var b = Array(32);
  pc(a, 0, b, 0, a.length);
  return b
}
var Id = function Hd(b, c, d, e) {
  d = b.root.s === d.s ? d : new kd(b.root.s, d.d.slice());
  var f = b.h - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var h = d.d[f];
    b = null != h ? Hd(b, c - 5, h, e) : md(b.root.s, c - 5, e)
  }
  d.d[f] = b;
  return d
};
function ud(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.t = d;
  this.g = 275;
  this.q = 88
}
r = ud.prototype;
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.fa(this, c);
      case 3:
        return this.W(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.fa = function(a, b) {
  return a.U(a, b, null)
};
r.W = function(a, b, c) {
  return a.U(a, b, c)
};
r.O = function(a, b) {
  if(this.root.s) {
    return qd(a, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
r.U = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.h : d) ? a.O(a, b) : c
};
r.M = function() {
  if(this.root.s) {
    return this.h
  }
  throw Error("count after persistent!");
};
function Jd(a, b, c, d) {
  if(a.root.s) {
    if(function() {
      var b = 0 <= c;
      return b ? c < a.h : b
    }()) {
      if(ld(b) <= c) {
        a.t[c & 31] = d
      }else {
        var e = function h(b, e) {
          var m = a.root.s === e.s ? e : new kd(a.root.s, e.d.slice());
          if(0 === b) {
            m.d[c & 31] = d
          }else {
            var p = c >>> b & 31, q = h(b - 5, m.d[p]);
            m.d[p] = q
          }
          return m
        }.call(null, a.shift, a.root);
        a.root = e
      }
      return b
    }
    if(c === a.h) {
      return b.Cb(b, d)
    }
    if(x.p) {
      throw Error([B("Index "), B(c), B(" out of bounds for TransientVector of length"), B(a.h)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
}
r.jb = function(a, b, c) {
  return Jd(a, a, b, c)
};
r.Cb = function(a, b) {
  if(this.root.s) {
    if(32 > this.h - ld(a)) {
      this.t[this.h & 31] = b
    }else {
      var c = new kd(this.root.s, this.t), d = Array(32);
      d[0] = b;
      this.t = d;
      if(this.h >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = md(this.root.s, this.shift, c);
        this.root = new kd(this.root.s, d);
        this.shift = e
      }else {
        this.root = Id(a, this.shift, this.root, c)
      }
    }
    this.h += 1;
    return a
  }
  throw Error("conj! after persistent!");
};
r.$b = function(a) {
  if(this.root.s) {
    this.root.s = null;
    a = this.h - ld(a);
    var b = Array(a);
    pc(this.t, 0, b, 0, a);
    return new td(null, this.h, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function Kd() {
  this.q = 0;
  this.g = 2097152
}
Kd.prototype.H = n(!1);
var Ld = new Kd;
function Md(a, b) {
  return rc(lc(b) ? S(a) === S(b) ? bd(dd, X.a(function(a) {
    return Qb.a(U.b(b, M(a), Ld), M(P(a)))
  }, a)) : null : null)
}
function Nd(a, b) {
  var c = a.d;
  if(b instanceof W) {
    a: {
      for(var d = c.length, e = b.Pa, f = 0;;) {
        if(d <= f) {
          c = -1;
          break a
        }
        var h = c[f], k = h instanceof W;
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
    if((d = v(b)) ? d : "number" === typeof b) {
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
function Od(a, b, c) {
  this.d = a;
  this.n = b;
  this.fb = c;
  this.q = 0;
  this.g = 32374990
}
r = Od.prototype;
r.N = function(a) {
  return Vb(a)
};
r.na = function() {
  return this.n < this.d.length - 2 ? new Od(this.d, this.n + 2, this.fb) : null
};
r.S = function(a, b) {
  return R(b, a)
};
r.toString = function() {
  return Nb(this)
};
r.X = function(a, b) {
  return vc.a(b, a)
};
r.Y = function(a, b, c) {
  return vc.b(b, c, a)
};
r.B = aa();
r.M = function() {
  return(this.d.length - this.n) / 2
};
r.Z = function() {
  return Ad([this.d[this.n], this.d[this.n + 1]])
};
r.aa = function() {
  return this.n < this.d.length - 2 ? new Od(this.d, this.n + 2, this.fb) : O
};
r.H = function(a, b) {
  return Xb(a, b)
};
r.Q = function(a, b) {
  return new Od(this.d, this.n, b)
};
r.P = g("fb");
r.T = function() {
  return fc(O, this.fb)
};
function Pd(a, b, c, d) {
  this.i = a;
  this.h = b;
  this.d = c;
  this.o = d;
  this.q = 4;
  this.g = 16123663
}
r = Pd.prototype;
r.Zb = function() {
  return new Qd({}, this.d.length, this.d.slice())
};
r.N = function(a) {
  var b = this.o;
  return null != b ? b : this.o = a = Ec(a)
};
r.fa = function(a, b) {
  return a.W(a, b, null)
};
r.W = function(a, b, c) {
  a = Nd(a, b);
  return-1 === a ? c : this.d[a + 1]
};
r.za = function(a, b, c) {
  var d = Nd(a, b);
  if(-1 === d) {
    if(this.h < Rd) {
      d = a.d;
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
      return new Pd(this.i, this.h + 1, e, null)
    }
    return tb(ib(id(Sd, a), b, c), this.i)
  }
  return c === this.d[d + 1] ? a : x.p ? (b = this.d.slice(), b[d + 1] = c, new Pd(this.i, this.h, b, null)) : null
};
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.fa(this, c);
      case 3:
        return this.W(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.S = function(a, b) {
  return mc(b) ? a.za(a, D.a(b, 0), D.a(b, 1)) : uc.b(db, a, b)
};
r.toString = function() {
  return Nb(this)
};
r.B = function() {
  return 0 <= this.d.length - 2 ? new Od(this.d, 0, null) : null
};
r.M = g("h");
r.H = function(a, b) {
  return Md(a, b)
};
r.Q = function(a, b) {
  return new Pd(b, this.h, this.d, this.o)
};
r.P = g("i");
r.T = function() {
  return tb(Td, this.i)
};
var Td = new Pd(null, 0, [], null), Rd = 8;
function Ta(a) {
  return new Pd(null, a.length / 2, a, null)
}
function Qd(a, b, c) {
  this.mb = a;
  this.$a = b;
  this.d = c;
  this.q = 56;
  this.g = 258
}
r = Qd.prototype;
r.jb = function(a, b, c) {
  if(y(this.mb)) {
    var d = Nd(a, b);
    if(-1 === d) {
      if(this.$a + 2 <= 2 * Rd) {
        return this.$a += 2, this.d.push(b), this.d.push(c), a
      }
      a = Ud.a ? Ud.a(this.$a, this.d) : Ud.call(null, this.$a, this.d);
      return Ib(a, b, c)
    }
    c !== this.d[d + 1] && (this.d[d + 1] = c);
    return a
  }
  throw Error("assoc! after persistent!");
};
r.Cb = function(a, b) {
  if(y(this.mb)) {
    var c;
    c = b ? ((c = b.g & 2048) ? c : b.Pe) ? !0 : b.g ? !1 : z(kb, b) : z(kb, b);
    if(c) {
      return a.jb(a, Fc.c ? Fc.c(b) : Fc.call(null, b), Hc.c ? Hc.c(b) : Hc.call(null, b))
    }
    c = L(b);
    for(var d = a;;) {
      var e = M(c);
      if(y(e)) {
        c = P(c), d = d.jb(d, Fc.c ? Fc.c(e) : Fc.call(null, e), Hc.c ? Hc.c(e) : Hc.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
r.$b = function() {
  if(y(this.mb)) {
    return this.mb = !1, new Pd(null, zc(this.$a, 2), this.d, null)
  }
  throw Error("persistent! called twice");
};
r.fa = function(a, b) {
  return a.W(a, b, null)
};
r.W = function(a, b, c) {
  if(y(this.mb)) {
    return a = Nd(a, b), -1 === a ? c : this.d[a + 1]
  }
  throw Error("lookup after persistent!");
};
r.M = function() {
  if(y(this.mb)) {
    return zc(this.$a, 2)
  }
  throw Error("count after persistent!");
};
function Ud(a, b) {
  for(var c = Fb(Sd), d = 0;;) {
    if(d < a) {
      c = Ib(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Vd() {
  this.K = !1
}
function Wd(a, b) {
  return a === b ? !0 : Lc(a, b) ? !0 : x.p ? Qb.a(a, b) : null
}
var Xd = function() {
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
  c.b = b;
  c.w = a;
  return c
}(), Yd = function() {
  function a(a, b, c, h, k, l) {
    a = a.nb(b);
    a.d[c] = h;
    a.d[k] = l;
    return a
  }
  function b(a, b, c, h) {
    a = a.nb(b);
    a.d[c] = h;
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
  c.k = b;
  c.ea = a;
  return c
}();
function Zd(a, b, c) {
  this.s = a;
  this.J = b;
  this.d = c
}
r = Zd.prototype;
r.pa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Cc(this.J & h - 1);
  if(0 === (this.J & h)) {
    var l = Cc(this.J);
    if(2 * l < this.d.length) {
      a = this.nb(a);
      b = a.d;
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
      k[c >>> b & 31] = $d.pa(a, b + 5, c, d, e, f);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.J >>> d & 1) && (k[d] = null != this.d[e] ? $d.pa(a, b + 5, K.c(this.d[e]), this.d[e], this.d[e + 1], f) : this.d[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new ae(a, l + 1, k)
    }
    return x.p ? (b = Array(2 * (l + 4)), pc(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, pc(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.K = !0, a = this.nb(a), a.d = b, a.J |= h, a) : null
  }
  l = this.d[2 * k];
  h = this.d[2 * k + 1];
  return null == l ? (l = h.pa(a, b + 5, c, d, e, f), l === h ? this : Yd.k(this, a, 2 * k + 1, l)) : Wd(d, l) ? e === h ? this : Yd.k(this, a, 2 * k + 1, e) : x.p ? (f.K = !0, Yd.ea(this, a, 2 * k, null, 2 * k + 1, be.ib ? be.ib(a, b + 5, l, h, c, d, e) : be.call(null, a, b + 5, l, h, c, d, e))) : null
};
r.Kb = function() {
  return ce.c ? ce.c(this.d) : ce.call(null, this.d)
};
r.nb = function(a) {
  if(a === this.s) {
    return this
  }
  var b = Cc(this.J), c = Array(0 > b ? 4 : 2 * (b + 1));
  pc(this.d, 0, c, 0, 2 * b);
  return new Zd(a, this.J, c)
};
r.oa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Cc(this.J & f - 1);
  if(0 === (this.J & f)) {
    var k = Cc(this.J);
    if(16 <= k) {
      h = Array(32);
      h[b >>> a & 31] = $d.oa(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.J >>> c & 1) && (h[c] = null != this.d[d] ? $d.oa(a + 5, K.c(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new ae(null, k + 1, h)
    }
    a = Array(2 * (k + 1));
    pc(this.d, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    pc(this.d, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.K = !0;
    return new Zd(null, this.J | f, a)
  }
  k = this.d[2 * h];
  f = this.d[2 * h + 1];
  return null == k ? (k = f.oa(a + 5, b, c, d, e), k === f ? this : new Zd(null, this.J, Xd.b(this.d, 2 * h + 1, k))) : Wd(c, k) ? d === f ? this : new Zd(null, this.J, Xd.b(this.d, 2 * h + 1, d)) : x.p ? (e.K = !0, new Zd(null, this.J, Xd.w(this.d, 2 * h, null, 2 * h + 1, be.ea ? be.ea(a + 5, k, f, b, c, d) : be.call(null, a + 5, k, f, b, c, d)))) : null
};
r.Za = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.J & e)) {
    return d
  }
  var f = Cc(this.J & e - 1), e = this.d[2 * f], f = this.d[2 * f + 1];
  return null == e ? f.Za(a + 5, b, c, d) : Wd(c, e) ? f : x.p ? d : null
};
var $d = new Zd(null, 0, []);
function ae(a, b, c) {
  this.s = a;
  this.h = b;
  this.d = c
}
r = ae.prototype;
r.pa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.d[h];
  if(null == k) {
    return a = Yd.k(this, a, h, $d.pa(a, b + 5, c, d, e, f)), a.h += 1, a
  }
  b = k.pa(a, b + 5, c, d, e, f);
  return b === k ? this : Yd.k(this, a, h, b)
};
r.Kb = function() {
  return de.c ? de.c(this.d) : de.call(null, this.d)
};
r.nb = function(a) {
  return a === this.s ? this : new ae(a, this.h, this.d.slice())
};
r.oa = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.d[f];
  if(null == h) {
    return new ae(null, this.h + 1, Xd.b(this.d, f, $d.oa(a + 5, b, c, d, e)))
  }
  a = h.oa(a + 5, b, c, d, e);
  return a === h ? this : new ae(null, this.h, Xd.b(this.d, f, a))
};
r.Za = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.Za(a + 5, b, c, d) : d
};
function ee(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(Wd(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function fe(a, b, c, d) {
  this.s = a;
  this.Ma = b;
  this.h = c;
  this.d = d
}
r = fe.prototype;
r.pa = function(a, b, c, d, e, f) {
  if(c === this.Ma) {
    b = ee(this.d, this.h, d);
    if(-1 === b) {
      if(this.d.length > 2 * this.h) {
        return a = Yd.ea(this, a, 2 * this.h, d, 2 * this.h + 1, e), f.K = !0, a.h += 1, a
      }
      c = this.d.length;
      b = Array(c + 2);
      pc(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.K = !0;
      f = this.h + 1;
      a === this.s ? (this.d = b, this.h = f, a = this) : a = new fe(this.s, this.Ma, f, b);
      return a
    }
    return this.d[b + 1] === e ? this : Yd.k(this, a, b + 1, e)
  }
  return(new Zd(a, 1 << (this.Ma >>> b & 31), [null, this, null, null])).pa(a, b, c, d, e, f)
};
r.Kb = function() {
  return ce.c ? ce.c(this.d) : ce.call(null, this.d)
};
r.nb = function(a) {
  if(a === this.s) {
    return this
  }
  var b = Array(2 * (this.h + 1));
  pc(this.d, 0, b, 0, 2 * this.h);
  return new fe(a, this.Ma, this.h, b)
};
r.oa = function(a, b, c, d, e) {
  return b === this.Ma ? (a = ee(this.d, this.h, c), -1 === a ? (a = this.d.length, b = Array(a + 2), pc(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.K = !0, new fe(null, this.Ma, this.h + 1, b)) : Qb.a(this.d[a], d) ? this : new fe(null, this.Ma, this.h, Xd.b(this.d, a + 1, d))) : (new Zd(null, 1 << (this.Ma >>> a & 31), [null, this])).oa(a, b, c, d, e)
};
r.Za = function(a, b, c, d) {
  a = ee(this.d, this.h, c);
  return 0 > a ? d : Wd(c, this.d[a]) ? this.d[a + 1] : x.p ? d : null
};
var be = function() {
  function a(a, b, c, h, k, l, m) {
    var p = K.c(c);
    if(p === k) {
      return new fe(null, p, 2, [c, h, l, m])
    }
    var q = new Vd;
    return $d.pa(a, b, p, c, h, q).pa(a, b, k, l, m, q)
  }
  function b(a, b, c, h, k, l) {
    var m = K.c(b);
    if(m === h) {
      return new fe(null, m, 2, [b, c, k, l])
    }
    var p = new Vd;
    return $d.oa(a, m, b, c, p).oa(a, h, k, l, p)
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
  c.ea = b;
  c.ib = a;
  return c
}();
function ge(a, b, c, d, e) {
  this.i = a;
  this.qa = b;
  this.n = c;
  this.u = d;
  this.o = e;
  this.q = 0;
  this.g = 32374860
}
r = ge.prototype;
r.N = function(a) {
  var b = this.o;
  return null != b ? b : this.o = a = Vb(a)
};
r.S = function(a, b) {
  return R(b, a)
};
r.toString = function() {
  return Nb(this)
};
r.X = function(a, b) {
  return vc.a(b, a)
};
r.Y = function(a, b, c) {
  return vc.b(b, c, a)
};
r.B = aa();
r.Z = function() {
  return null == this.u ? Ad([this.qa[this.n], this.qa[this.n + 1]]) : M(this.u)
};
r.aa = function() {
  return null == this.u ? ce.b ? ce.b(this.qa, this.n + 2, null) : ce.call(null, this.qa, this.n + 2, null) : ce.b ? ce.b(this.qa, this.n, P(this.u)) : ce.call(null, this.qa, this.n, P(this.u))
};
r.H = function(a, b) {
  return Xb(a, b)
};
r.Q = function(a, b) {
  return new ge(b, this.qa, this.n, this.u, this.o)
};
r.P = g("i");
r.T = function() {
  return fc(O, this.i)
};
var ce = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new ge(null, a, b, null, null)
          }
          var h = a[b + 1];
          if(y(h) && (h = h.Kb(), y(h))) {
            return new ge(null, a, b + 2, h, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new ge(null, a, b, c, null)
    }
  }
  function b(a) {
    return c.b(a, 0, null)
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
  c.b = a;
  return c
}();
function he(a, b, c, d, e) {
  this.i = a;
  this.qa = b;
  this.n = c;
  this.u = d;
  this.o = e;
  this.q = 0;
  this.g = 32374860
}
r = he.prototype;
r.N = function(a) {
  var b = this.o;
  return null != b ? b : this.o = a = Vb(a)
};
r.S = function(a, b) {
  return R(b, a)
};
r.toString = function() {
  return Nb(this)
};
r.X = function(a, b) {
  return vc.a(b, a)
};
r.Y = function(a, b, c) {
  return vc.b(b, c, a)
};
r.B = aa();
r.Z = function() {
  return M(this.u)
};
r.aa = function() {
  return de.k ? de.k(null, this.qa, this.n, P(this.u)) : de.call(null, null, this.qa, this.n, P(this.u))
};
r.H = function(a, b) {
  return Xb(a, b)
};
r.Q = function(a, b) {
  return new he(b, this.qa, this.n, this.u, this.o)
};
r.P = g("i");
r.T = function() {
  return fc(O, this.i)
};
var de = function() {
  function a(a, b, c, h) {
    if(null == h) {
      for(h = b.length;;) {
        if(c < h) {
          var k = b[c];
          if(y(k) && (k = k.Kb(), y(k))) {
            return new he(a, b, c + 1, k, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new he(a, b, c, h, null)
    }
  }
  function b(a) {
    return c.k(null, a, 0, null)
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
  c.k = a;
  return c
}();
function ie(a, b, c, d, e, f) {
  this.i = a;
  this.h = b;
  this.root = c;
  this.ca = d;
  this.ja = e;
  this.o = f;
  this.q = 4;
  this.g = 16123663
}
r = ie.prototype;
r.Zb = function() {
  return new je({}, this.root, this.h, this.ca, this.ja)
};
r.N = function(a) {
  var b = this.o;
  return null != b ? b : this.o = a = Ec(a)
};
r.fa = function(a, b) {
  return a.W(a, b, null)
};
r.W = function(a, b, c) {
  return null == b ? this.ca ? this.ja : c : null == this.root ? c : x.p ? this.root.Za(0, K.c(b), b, c) : null
};
r.za = function(a, b, c) {
  if(null == b) {
    var d = this.ca;
    return(d ? c === this.ja : d) ? a : new ie(this.i, this.ca ? this.h : this.h + 1, this.root, !0, c, null)
  }
  d = new Vd;
  c = (null == this.root ? $d : this.root).oa(0, K.c(b), b, c, d);
  return c === this.root ? a : new ie(this.i, d.K ? this.h + 1 : this.h, c, this.ca, this.ja, null)
};
r.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.fa(this, c);
      case 3:
        return this.W(this, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.S = function(a, b) {
  return mc(b) ? a.za(a, D.a(b, 0), D.a(b, 1)) : uc.b(db, a, b)
};
r.toString = function() {
  return Nb(this)
};
r.B = function() {
  if(0 < this.h) {
    var a = null != this.root ? this.root.Kb() : null;
    return this.ca ? R(Ad([null, this.ja]), a) : a
  }
  return null
};
r.M = g("h");
r.H = function(a, b) {
  return Md(a, b)
};
r.Q = function(a, b) {
  return new ie(b, this.h, this.root, this.ca, this.ja, this.o)
};
r.P = g("i");
r.T = function() {
  return tb(Sd, this.i)
};
var Sd = new ie(null, 0, null, !1, null, 0);
function je(a, b, c, d, e) {
  this.s = a;
  this.root = b;
  this.count = c;
  this.ca = d;
  this.ja = e;
  this.q = 56;
  this.g = 258
}
r = je.prototype;
r.jb = function(a, b, c) {
  return ke(a, b, c)
};
r.Cb = function(a, b) {
  var c;
  a: {
    if(a.s) {
      c = b ? ((c = b.g & 2048) ? c : b.Pe) ? !0 : b.g ? !1 : z(kb, b) : z(kb, b);
      if(c) {
        c = ke(a, Fc.c ? Fc.c(b) : Fc.call(null, b), Hc.c ? Hc.c(b) : Hc.call(null, b));
        break a
      }
      c = L(b);
      for(var d = a;;) {
        var e = M(c);
        if(y(e)) {
          c = P(c), d = ke(d, Fc.c ? Fc.c(e) : Fc.call(null, e), Hc.c ? Hc.c(e) : Hc.call(null, e))
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
r.$b = function(a) {
  if(a.s) {
    a.s = null, a = new ie(null, a.count, a.root, a.ca, a.ja, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
r.fa = function(a, b) {
  return null == b ? this.ca ? this.ja : null : null == this.root ? null : this.root.Za(0, K.c(b), b)
};
r.W = function(a, b, c) {
  return null == b ? this.ca ? this.ja : c : null == this.root ? c : this.root.Za(0, K.c(b), b, c)
};
r.M = function() {
  if(this.s) {
    return this.count
  }
  throw Error("count after persistent!");
};
function ke(a, b, c) {
  if(a.s) {
    if(null == b) {
      a.ja !== c && (a.ja = c), a.ca || (a.count += 1, a.ca = !0)
    }else {
      var d = new Vd;
      b = (null == a.root ? $d : a.root).pa(a.s, 0, K.c(b), b, c, d);
      b !== a.root && (a.root = b);
      d.K && (a.count += 1)
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
    for(var b = L(a), e = Fb(Sd);;) {
      if(b) {
        a = P(P(b));
        var f = M(b), b = M(P(b)), e = Ib(e, f, b), b = a
      }else {
        return Hb(e)
      }
    }
  }
  a.j = 0;
  a.f = function(a) {
    a = L(a);
    return b(a)
  };
  a.e = b;
  return a
}(), le = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return new Pd(null, zc(S(a), 2), V.a(Xa, a), null)
  }
  a.j = 0;
  a.f = function(a) {
    a = L(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function Fc(a) {
  return lb(a)
}
function Hc(a) {
  return mb(a)
}
var me = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return y(cd(a)) ? uc.a(function(a, b) {
      return $b.a(y(a) ? a : Td, b)
    }, a) : null
  }
  a.j = 0;
  a.f = function(a) {
    a = L(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function Mc(a) {
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
var oe = function ne(b, c) {
  return new Oc(null, function() {
    var d = L(c);
    return d ? y(b.c ? b.c(M(d)) : b.call(null, M(d))) ? R(M(d), ne(b, N(d))) : null : null
  }, null, null)
};
function pe(a, b, c, d, e) {
  this.i = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.o = e;
  this.q = 0;
  this.g = 32375006
}
r = pe.prototype;
r.N = function(a) {
  var b = this.o;
  return null != b ? b : this.o = a = Vb(a)
};
r.na = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new pe(this.i, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new pe(this.i, this.start + this.step, this.end, this.step, null) : null
};
r.S = function(a, b) {
  return R(b, a)
};
r.toString = function() {
  return Nb(this)
};
r.X = function(a, b) {
  return Rb.a(a, b)
};
r.Y = function(a, b, c) {
  return Rb.b(a, b, c)
};
r.B = function(a) {
  return 0 < this.step ? this.start < this.end ? a : null : this.start > this.end ? a : null
};
r.M = function(a) {
  return Ua(a.B(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
r.Z = g("start");
r.aa = function(a) {
  return null != a.B(a) ? new pe(this.i, this.start + this.step, this.end, this.step, null) : O
};
r.H = function(a, b) {
  return Xb(a, b)
};
r.Q = function(a, b) {
  return new pe(b, this.start, this.end, this.step, this.o)
};
r.P = g("i");
r.O = function(a, b) {
  if(b < a.M(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  throw Error("Index out of bounds");
};
r.U = function(a, b, c) {
  c = b < a.M(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
r.T = function() {
  return fc(O, this.i)
};
var qe = function() {
  function a(a, b, c) {
    return new pe(null, a, b, c, null)
  }
  function b(a, b) {
    return e.b(a, b, 1)
  }
  function c(a) {
    return e.b(0, a, 1)
  }
  function d() {
    return e.b(0, Number.MAX_VALUE, 1)
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
  e.l = d;
  e.c = c;
  e.a = b;
  e.b = a;
  return e
}(), re = function() {
  function a(a, b, c) {
    return function() {
      var d = null, e = function() {
        function d(a, b, c, f) {
          var h = null;
          3 < arguments.length && (h = Q(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, h)
        }
        function e(d, l, m, p) {
          return Cd.e(Q([V.w(a, d, l, m, p), V.w(b, d, l, m, p), V.w(c, d, l, m, p)], 0))
        }
        d.j = 3;
        d.f = function(a) {
          var b = M(a);
          a = P(a);
          var c = M(a);
          a = P(a);
          var d = M(a);
          a = N(a);
          return e(b, c, d, a)
        };
        d.e = e;
        return d
      }(), d = function(d, l, u, E) {
        switch(arguments.length) {
          case 0:
            return Cd.e(Q([a.l ? a.l() : a.call(null), b.l ? b.l() : b.call(null), c.l ? c.l() : c.call(null)], 0));
          case 1:
            return Cd.e(Q([a.c ? a.c(d) : a.call(null, d), b.c ? b.c(d) : b.call(null, d), c.c ? c.c(d) : c.call(null, d)], 0));
          case 2:
            return Cd.e(Q([a.a ? a.a(d, l) : a.call(null, d, l), b.a ? b.a(d, l) : b.call(null, d, l), c.a ? c.a(d, l) : c.call(null, d, l)], 0));
          case 3:
            return Cd.e(Q([a.b ? a.b(d, l, u) : a.call(null, d, l, u), b.b ? b.b(d, l, u) : b.call(null, d, l, u), c.b ? c.b(d, l, u) : c.call(null, d, l, u)], 0));
          default:
            return e.e(d, l, u, Q(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.j = 3;
      d.f = e.f;
      return d
    }()
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, f) {
          var h = null;
          3 < arguments.length && (h = Q(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, h)
        }
        function d(c, e, k, l) {
          return Cd.e(Q([V.w(a, c, e, k, l), V.w(b, c, e, k, l)], 0))
        }
        c.j = 3;
        c.f = function(a) {
          var b = M(a);
          a = P(a);
          var c = M(a);
          a = P(a);
          var e = M(a);
          a = N(a);
          return d(b, c, e, a)
        };
        c.e = d;
        return c
      }(), c = function(c, e, k, u) {
        switch(arguments.length) {
          case 0:
            return Cd.e(Q([a.l ? a.l() : a.call(null), b.l ? b.l() : b.call(null)], 0));
          case 1:
            return Cd.e(Q([a.c ? a.c(c) : a.call(null, c), b.c ? b.c(c) : b.call(null, c)], 0));
          case 2:
            return Cd.e(Q([a.a ? a.a(c, e) : a.call(null, c, e), b.a ? b.a(c, e) : b.call(null, c, e)], 0));
          case 3:
            return Cd.e(Q([a.b ? a.b(c, e, k) : a.call(null, c, e, k), b.b ? b.b(c, e, k) : b.call(null, c, e, k)], 0));
          default:
            return d.e(c, e, k, Q(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.j = 3;
      c.f = d.f;
      return c
    }()
  }
  function c(a) {
    return function() {
      var b = null, c = function() {
        function b(a, d, e, f) {
          var h = null;
          3 < arguments.length && (h = Q(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, d, e, h)
        }
        function c(b, d, e, h) {
          return Cd.e(Q([V.w(a, b, d, e, h)], 0))
        }
        b.j = 3;
        b.f = function(a) {
          var b = M(a);
          a = P(a);
          var d = M(a);
          a = P(a);
          var e = M(a);
          a = N(a);
          return c(b, d, e, a)
        };
        b.e = c;
        return b
      }(), b = function(b, d, e, h) {
        switch(arguments.length) {
          case 0:
            return Cd.e(Q([a.l ? a.l() : a.call(null)], 0));
          case 1:
            return Cd.e(Q([a.c ? a.c(b) : a.call(null, b)], 0));
          case 2:
            return Cd.e(Q([a.a ? a.a(b, d) : a.call(null, b, d)], 0));
          case 3:
            return Cd.e(Q([a.b ? a.b(b, d, e) : a.call(null, b, d, e)], 0));
          default:
            return c.e(b, d, e, Q(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      b.j = 3;
      b.f = c.f;
      return b
    }()
  }
  var d = null, e = function() {
    function a(c, d, e, f) {
      var q = null;
      3 < arguments.length && (q = Q(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, q)
    }
    function b(a, c, d, e) {
      var f = $c.k(a, c, d, e);
      return function() {
        function a(b, c, d) {
          return uc.b(function(a, e) {
            return $b.a(a, e.b ? e.b(b, c, d) : e.call(null, b, c, d))
          }, yd, f)
        }
        function b(a, c) {
          return uc.b(function(b, d) {
            return $b.a(b, d.a ? d.a(a, c) : d.call(null, a, c))
          }, yd, f)
        }
        function c(a) {
          return uc.b(function(b, c) {
            return $b.a(b, c.c ? c.c(a) : c.call(null, a))
          }, yd, f)
        }
        function d() {
          return uc.b(function(a, b) {
            return $b.a(a, b.l ? b.l() : b.call(null))
          }, yd, f)
        }
        var e = null, h = function() {
          function a(c, d, e, f) {
            var h = null;
            3 < arguments.length && (h = Q(Array.prototype.slice.call(arguments, 3), 0));
            return b.call(this, c, d, e, h)
          }
          function b(a, c, d, e) {
            return uc.b(function(b, f) {
              return $b.a(b, V.w(f, a, c, d, e))
            }, yd, f)
          }
          a.j = 3;
          a.f = function(a) {
            var c = M(a);
            a = P(a);
            var d = M(a);
            a = P(a);
            var e = M(a);
            a = N(a);
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
              return h.e(e, f, k, Q(arguments, 3))
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        e.j = 3;
        e.f = h.f;
        return e
      }()
    }
    a.j = 3;
    a.f = function(a) {
      var c = M(a);
      a = P(a);
      var d = M(a);
      a = P(a);
      var e = M(a);
      a = N(a);
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
        return e.e(d, h, k, Q(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = 3;
  d.f = e.f;
  d.c = c;
  d.a = b;
  d.b = a;
  d.e = e.e;
  return d
}(), se = function() {
  function a(a, b) {
    for(;;) {
      var c = L(b);
      if(y(c ? 0 < a : c)) {
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
}(), te = function() {
  function a(a, b) {
    se.a(a, b);
    return b
  }
  function b(a) {
    se.c(a);
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
function Y(a, b, c, d, e, f, h) {
  H(a, c);
  L(h) && (b.b ? b.b(M(h), a, f) : b.call(null, M(h), a, f));
  c = L(P(h));
  h = null;
  for(var k = 0, l = 0;;) {
    if(l < k) {
      var m = h.O(h, l);
      H(a, d);
      b.b ? b.b(m, a, f) : b.call(null, m, a, f);
      l += 1
    }else {
      if(c = L(c)) {
        h = c, nc(h) ? (c = Kb(h), l = Lb(h), h = c, k = S(c), c = l) : (c = M(h), H(a, d), b.b ? b.b(c, a, f) : b.call(null, c, a, f), c = P(h), h = null, k = 0), l = 0
      }else {
        break
      }
    }
  }
  return H(a, e)
}
var ue = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = Q(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = L(b), f = null, h = 0, k = 0;;) {
      if(k < h) {
        var l = f.O(f, k);
        H(a, l);
        k += 1
      }else {
        if(e = L(e)) {
          f = e, nc(f) ? (e = Kb(f), h = Lb(f), f = e, l = S(e), e = h, h = l) : (l = M(f), H(a, l), e = P(f), f = null, h = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.j = 1;
  a.f = function(a) {
    var d = M(a);
    a = N(a);
    return b(d, a)
  };
  a.e = b;
  return a
}(), ve = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function we(a) {
  return[B('"'), B(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return ve[a]
  })), B('"')].join("")
}
var ye = function xe(b, c, d) {
  if(null == b) {
    return H(c, "nil")
  }
  if(void 0 === b) {
    return H(c, "#\x3cundefined\x3e")
  }
  if(x.p) {
    y(function() {
      var c = U.a(d, x.Rd);
      return y(c) ? (c = b ? ((c = b.g & 131072) ? c : b.Qe) ? !0 : b.g ? !1 : z(qb, b) : z(qb, b), y(c) ? gc(b) : c) : c
    }()) && (H(c, "^"), xe(gc(b), c, d), H(c, " "));
    if(null == b) {
      return H(c, "nil")
    }
    if(b.cc) {
      return b.Vc(b, c, d)
    }
    if(function() {
      var c;
      c = b ? ((c = b.g & 2147483648) ? c : b.V) ? !0 : !1 : !1;
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
      return Y(c, xe, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if(v(b)) {
      return y(x.af.call(null, d)) ? H(c, we(b)) : H(c, b)
    }
    if(dc(b)) {
      return ue.e(c, Q(["#\x3c", "" + B(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + B(b);;) {
          if(S(d) < c) {
            d = [B("0"), B(d)].join("")
          }else {
            return d
          }
        }
      };
      return ue.e(c, Q(['#inst "', "" + B(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return y(b instanceof RegExp) ? ue.e(c, Q(['#"', b.source, '"'], 0)) : function() {
      var c;
      c = b ? ((c = b.g & 2147483648) ? c : b.V) ? !0 : b.g ? !1 : z(Cb, b) : z(Cb, b);
      return c
    }() ? Db(b, c, d) : x.p ? ue.e(c, Q(["#\x3c", "" + B(b), "\x3e"], 0)) : null
  }
  return null
}, ze = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = Sa(), e = null == a;
    if(e ? e : Ua(L(a))) {
      b = ""
    }else {
      var e = B, f = new Qa, h = new Mb(f);
      a: {
        ye(M(a), h, b);
        a = L(P(a));
        for(var k = null, l = 0, m = 0;;) {
          if(m < l) {
            var p = k.O(k, m);
            H(h, " ");
            ye(p, h, b);
            m += 1
          }else {
            if(a = L(a)) {
              k = a, nc(k) ? (a = Kb(k), l = Lb(k), k = a, p = S(a), a = l, l = p) : (p = M(k), H(h, " "), ye(p, h, b), a = P(k), k = null, l = 0), m = 0
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
  a.j = 0;
  a.f = function(a) {
    a = L(a);
    return b(a)
  };
  a.e = b;
  return a
}();
Pb.prototype.V = !0;
Pb.prototype.F = function(a, b, c) {
  return Y(b, ye, "(", " ", ")", c, a)
};
Fd.prototype.V = !0;
Fd.prototype.F = function(a, b, c) {
  return Y(b, ye, "[", " ", "]", c, a)
};
Tc.prototype.V = !0;
Tc.prototype.F = function(a, b, c) {
  return Y(b, ye, "(", " ", ")", c, a)
};
Pd.prototype.V = !0;
Pd.prototype.F = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, ye, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Oc.prototype.V = !0;
Oc.prototype.F = function(a, b, c) {
  return Y(b, ye, "(", " ", ")", c, a)
};
ge.prototype.V = !0;
ge.prototype.F = function(a, b, c) {
  return Y(b, ye, "(", " ", ")", c, a)
};
Dd.prototype.V = !0;
Dd.prototype.F = function(a, b, c) {
  return Y(b, ye, "(", " ", ")", c, a)
};
ie.prototype.V = !0;
ie.prototype.F = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, ye, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
td.prototype.V = !0;
td.prototype.F = function(a, b, c) {
  return Y(b, ye, "[", " ", "]", c, a)
};
Ic.prototype.V = !0;
Ic.prototype.F = function(a, b, c) {
  return Y(b, ye, "(", " ", ")", c, a)
};
Od.prototype.V = !0;
Od.prototype.F = function(a, b, c) {
  return Y(b, ye, "(", " ", ")", c, a)
};
Jc.prototype.V = !0;
Jc.prototype.F = function(a, b) {
  return H(b, "()")
};
Kc.prototype.V = !0;
Kc.prototype.F = function(a, b, c) {
  return Y(b, ye, "(", " ", ")", c, a)
};
pe.prototype.V = !0;
pe.prototype.F = function(a, b, c) {
  return Y(b, ye, "(", " ", ")", c, a)
};
he.prototype.V = !0;
he.prototype.F = function(a, b, c) {
  return Y(b, ye, "(", " ", ")", c, a)
};
td.prototype.Dd = !0;
td.prototype.Ed = function(a, b) {
  return tc.a(a, b)
};
Fd.prototype.Dd = !0;
Fd.prototype.Ed = function(a, b) {
  return tc.a(a, b)
};
function Ae(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.Ef = c;
  this.Ff = d;
  this.g = 2153938944;
  this.q = 2
}
r = Ae.prototype;
r.N = function(a) {
  return ia(a)
};
r.Id = function(a, b, c) {
  for(var d = L(this.Ff), e = null, f = 0, h = 0;;) {
    if(h < f) {
      var k = e.O(e, h), l = T.b(k, 0, null), k = T.b(k, 1, null);
      k.k ? k.k(l, a, b, c) : k.call(null, l, a, b, c);
      h += 1
    }else {
      if(d = L(d)) {
        nc(d) ? (e = Kb(d), d = Lb(d), l = e, f = S(e), e = l) : (e = M(d), l = T.b(e, 0, null), k = T.b(e, 1, null), k.k ? k.k(l, a, b, c) : k.call(null, l, a, b, c), d = P(d), e = null, f = 0), h = 0
      }else {
        return null
      }
    }
  }
};
r.F = function(a, b, c) {
  H(b, "#\x3cAtom: ");
  ye(this.state, b, c);
  return H(b, "\x3e")
};
r.P = g("i");
r.Fc = g("state");
r.H = function(a, b) {
  return a === b
};
var Be = function() {
  function a(a) {
    return new Ae(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = Q(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d = qc(c) ? V.a(bc, c) : c, e = U.a(d, x.ig), d = U.a(d, x.Rd);
      return new Ae(a, d, e, null)
    }
    a.j = 1;
    a.f = function(a) {
      var c = M(a);
      a = N(a);
      return b(c, a)
    };
    a.e = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, Q(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 1;
  b.f = c.f;
  b.c = a;
  b.e = c.e;
  return b
}();
function Ce(a, b) {
  var c = a.Ef;
  if(y(c) && !y(c.c ? c.c(b) : c.call(null, b))) {
    throw Error([B("Assert failed: "), B("Validator rejected reference state"), B("\n"), B(ze.e(Q([Wb(new J(null, "validate", "validate", 1233162959, null), new J(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  Eb(a, c, b);
  return b
}
var De = function() {
  function a(a, b, c, d, e) {
    return Ce(a, b.k ? b.k(a.state, c, d, e) : b.call(null, a.state, c, d, e))
  }
  function b(a, b, c, d) {
    return Ce(a, b.b ? b.b(a.state, c, d) : b.call(null, a.state, c, d))
  }
  function c(a, b, c) {
    return Ce(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c))
  }
  function d(a, b) {
    return Ce(a, b.c ? b.c(a.state) : b.call(null, a.state))
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, E) {
      var C = null;
      5 < arguments.length && (C = Q(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, C)
    }
    function b(a, c, d, e, f, h) {
      return Ce(a, V.e(c, a.state, d, e, f, Q([h], 0)))
    }
    a.j = 5;
    a.f = function(a) {
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
    a.e = b;
    return a
  }(), e = function(e, k, l, m, p, q) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, p);
      default:
        return f.e(e, k, l, m, p, Q(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.j = 5;
  e.f = f.f;
  e.a = d;
  e.b = c;
  e.k = b;
  e.w = a;
  e.e = f.e;
  return e
}(), Ee = {};
function Fe(a) {
  if(a ? a.Oe : a) {
    return a.Oe(a)
  }
  var b;
  b = Fe[t(null == a ? null : a)];
  if(!b && (b = Fe._, !b)) {
    throw A("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a)
}
function Ge(a) {
  return(a ? y(y(null) ? null : a.Ne) || (a.Wc ? 0 : z(Ee, a)) : z(Ee, a)) ? Fe(a) : function() {
    var b = "string" === typeof a;
    return b || (b = "number" === typeof a) ? b : (b = a instanceof W) ? b : a instanceof J
  }() ? He.c ? He.c(a) : He.call(null, a) : ze.e(Q([a], 0))
}
var He = function Ie(b) {
  if(null == b) {
    return null
  }
  if(b ? y(y(null) ? null : b.Ne) || (b.Wc ? 0 : z(Ee, b)) : z(Ee, b)) {
    return Fe(b)
  }
  if(b instanceof W) {
    return Mc(b)
  }
  if(b instanceof J) {
    return"" + B(b)
  }
  if(lc(b)) {
    var c = {};
    b = L(b);
    for(var d = null, e = 0, f = 0;;) {
      if(f < e) {
        var h = d.O(d, f), k = T.b(h, 0, null), h = T.b(h, 1, null);
        c[Ge(k)] = Ie(h);
        f += 1
      }else {
        if(b = L(b)) {
          nc(b) ? (e = Kb(b), b = Lb(b), d = e, e = S(e)) : (e = M(b), d = T.b(e, 0, null), e = T.b(e, 1, null), c[Ge(d)] = Ie(e), b = P(b), d = null, e = 0), f = 0
        }else {
          break
        }
      }
    }
    return c
  }
  return jc(b) ? V.a(Xa, X.a(Ie, b)) : x.p ? b : null
}, Je = {};
function Ke(a, b) {
  if(a ? a.Me : a) {
    return a.Me(a, b)
  }
  var c;
  c = Ke[t(null == a ? null : a)];
  if(!c && (c = Ke._, !c)) {
    throw A("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b)
}
var Le = function() {
  function a(a) {
    return b.e(a, Q([Ta([x.$e, !1])], 0))
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = Q(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      if(a ? y(y(null) ? null : a.Sf) || (a.Wc ? 0 : z(Je, a)) : z(Je, a)) {
        return Ke(a, V.a(le, c))
      }
      if(L(c)) {
        var d = qc(c) ? V.a(bc, c) : c, e = U.a(d, x.$e);
        return function(a, b, c, d) {
          return function C(e) {
            return qc(e) ? te.c(X.a(C, e)) : jc(e) ? id(ab(e), X.a(C, e)) : e instanceof Array ? Bd(X.a(C, e)) : Va(e) === Object ? id(Td, function() {
              return function(a, b, c, d) {
                return function Zb(f) {
                  return new Oc(null, function(a, b, c, d) {
                    return function() {
                      for(;;) {
                        var a = L(f);
                        if(a) {
                          if(nc(a)) {
                            var b = Kb(a), c = S(b), h = new Qc(Array(c), 0);
                            a: {
                              for(var k = 0;;) {
                                if(k < c) {
                                  var l = D.a(b, k), l = Ad([d.c ? d.c(l) : d.call(null, l), C(e[l])]);
                                  h.add(l);
                                  k += 1
                                }else {
                                  b = !0;
                                  break a
                                }
                              }
                              b = void 0
                            }
                            return b ? Uc(h.ma(), Zb(Lb(a))) : Uc(h.ma(), null)
                          }
                          h = M(a);
                          return R(Ad([d.c ? d.c(h) : d.call(null, h), C(e[h])]), Zb(N(a)))
                        }
                        return null
                      }
                    }
                  }(a, b, c, d), null, null)
                }
              }(a, b, c, d)(oc(e))
            }()) : x.p ? e : null
          }
        }(c, d, e, y(e) ? Nc : B)(a)
      }
      return null
    }
    a.j = 1;
    a.f = function(a) {
      var c = M(a);
      a = N(a);
      return b(c, a)
    };
    a.e = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, Q(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 1;
  b.f = c.f;
  b.c = a;
  b.e = c.e;
  return b
}(), Ac = function() {
  function a(a) {
    return(Math.random.l ? Math.random.l() : Math.random.call(null)) * a
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
  c.l = b;
  c.c = a;
  return c
}(), Bc = function(a) {
  return Math.floor.c ? Math.floor.c((Math.random.l ? Math.random.l() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.l ? Math.random.l() : Math.random.call(null)) * a)
};
var Me, Ne, Oe, Pe;
function Qe() {
  return s.navigator ? s.navigator.userAgent : null
}
Pe = Oe = Ne = Me = !1;
var Re;
if(Re = Qe()) {
  var Se = s.navigator;
  Me = 0 == Re.indexOf("Opera");
  Ne = !Me && -1 != Re.indexOf("MSIE");
  Oe = !Me && -1 != Re.indexOf("WebKit");
  Pe = !Me && !Oe && "Gecko" == Se.product
}
var Te = Me, Ue = Ne, Ve = Pe, We = Oe, Xe = s.navigator, Ye = -1 != (Xe && Xe.platform || "").indexOf("Mac");
function Ze() {
  var a = s.document;
  return a ? a.documentMode : void 0
}
var $e;
a: {
  var af = "", bf;
  if(Te && s.opera) {
    var cf = s.opera.version, af = "function" == typeof cf ? cf() : cf
  }else {
    if(Ve ? bf = /rv\:([^\);]+)(\)|;)/ : Ue ? bf = /MSIE\s+([^\);]+)(\)|;)/ : We && (bf = /WebKit\/(\S+)/), bf) {
      var df = bf.exec(Qe()), af = df ? df[1] : ""
    }
  }
  if(Ue) {
    var ef = Ze();
    if(ef > parseFloat(af)) {
      $e = String(ef);
      break a
    }
  }
  $e = af
}
var ff = {};
function gf(a) {
  var b;
  if(!(b = ff[a])) {
    b = 0;
    for(var c = String($e).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
      do {
        var p = l.exec(h) || ["", "", ""], q = m.exec(k) || ["", "", ""];
        if(0 == p[0].length && 0 == q[0].length) {
          break
        }
        b = ((0 == p[1].length ? 0 : parseInt(p[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == p[1].length ? 0 : parseInt(p[1], 10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == p[2].length) < (0 == q[2].length) ? -1 : (0 == p[2].length) > (0 == q[2].length) ? 1 : 0) || (p[2] < q[2] ? -1 : p[2] > q[2] ? 1 : 0)
      }while(0 == b)
    }
    b = ff[a] = 0 <= b
  }
  return b
}
var hf = s.document, jf = hf && Ue ? Ze() || ("CSS1Compat" == hf.compatMode ? parseInt($e, 10) : 5) : void 0;
function kf() {
  0 != lf && (this.jg = Error().stack, mf[ia(this)] = this)
}
var lf = 0, mf = {};
kf.prototype.lb = !1;
kf.prototype.Zc = function() {
  if(!this.lb && (this.lb = !0, this.C(), 0 != lf)) {
    var a = ia(this);
    delete mf[a]
  }
};
kf.prototype.C = function() {
  if(this.qe) {
    for(;this.qe.length;) {
      this.qe.shift()()
    }
  }
};
function nf(a) {
  a && "function" == typeof a.Zc && a.Zc()
}
;var of = !Ue || Ue && 9 <= jf, pf = Ue && !gf("9");
!We || gf("528");
Ve && gf("1.9b") || Ue && gf("8") || Te && gf("9.5") || We && gf("528");
Ve && !gf("8") || Ue && gf("9");
function qf(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
r = qf.prototype;
r.C = function() {
};
r.Zc = function() {
};
r.wb = !1;
r.defaultPrevented = !1;
r.sc = !0;
r.preventDefault = function() {
  this.defaultPrevented = !0;
  this.sc = !1
};
function rf(a) {
  rf[" "](a);
  return a
}
rf[" "] = ca;
function sf(a, b) {
  try {
    return rf(a[b]), !0
  }catch(c) {
  }
  return!1
}
;function tf(a, b) {
  a && this.jc(a, b)
}
qa(tf, qf);
r = tf.prototype;
r.target = null;
r.relatedTarget = null;
r.offsetX = 0;
r.offsetY = 0;
r.clientX = 0;
r.clientY = 0;
r.screenX = 0;
r.screenY = 0;
r.button = 0;
r.keyCode = 0;
r.charCode = 0;
r.ctrlKey = !1;
r.altKey = !1;
r.shiftKey = !1;
r.metaKey = !1;
r.uf = !1;
r.hc = null;
r.jc = function(a, b) {
  var c = this.type = a.type;
  qf.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  d ? Ve && (sf(d, "nodeName") || (d = null)) : "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  this.relatedTarget = d;
  this.offsetX = We || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = We || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  this.uf = Ye ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.hc = a;
  a.defaultPrevented && this.preventDefault();
  delete this.wb
};
r.preventDefault = function() {
  tf.la.preventDefault.call(this);
  var a = this.hc;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, pf) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
r.C = function() {
};
var uf = 0;
function vf() {
}
r = vf.prototype;
r.key = 0;
r.cb = !1;
r.Xb = !1;
r.jc = function(a, b, c, d, e, f) {
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
  this.key = ++uf;
  this.cb = !1
};
r.handleEvent = function(a) {
  return this.ge ? this.Ra.call(this.rb || this.src, a) : this.Ra.handleEvent.call(this.Ra, a)
};
var wf = {}, xf = {}, yf = {}, zf = {};
function Af(a, b, c, d, e) {
  if(da(b)) {
    for(var f = 0;f < b.length;f++) {
      Af(a, b[f], c, d, e)
    }
    return null
  }
  a = Bf(a, b, c, !1, d, e);
  b = a.key;
  wf[b] = a;
  return b
}
function Bf(a, b, c, d, e, f) {
  if(!b) {
    throw Error("Invalid event type");
  }
  e = !!e;
  var h = xf;
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
  m = Cf();
  h = new vf;
  h.jc(c, m, a, b, e, f);
  h.Xb = d;
  m.src = a;
  m.Ra = h;
  l.push(h);
  yf[k] || (yf[k] = []);
  yf[k].push(h);
  a.addEventListener ? a != s && a.Vd || a.addEventListener(b, m, e) : a.attachEvent(b in zf ? zf[b] : zf[b] = "on" + b, m);
  return h
}
function Cf() {
  var a = Df, b = of ? function(c) {
    return a.call(b.src, b.Ra, c)
  } : function(c) {
    c = a.call(b.src, b.Ra, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Ef(a, b, c, d, e) {
  if(da(b)) {
    for(var f = 0;f < b.length;f++) {
      Ef(a, b[f], c, d, e)
    }
    return null
  }
  a = Bf(a, b, c, !0, d, e);
  b = a.key;
  wf[b] = a;
  return b
}
function Ff(a, b, c, d, e) {
  if(da(b)) {
    for(var f = 0;f < b.length;f++) {
      Ff(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = xf;
      if(b in f && (f = f[b], d in f && (f = f[d], a = ia(a), f[a]))) {
        a = f[a];
        break a
      }
      a = null
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].Ra == c && a[f].capture == d && a[f].rb == e) {
          Gf(a[f].key);
          break
        }
      }
    }
  }
}
function Gf(a) {
  var b = wf[a];
  if(!b || b.cb) {
    return!1
  }
  var c = b.src, d = b.type, e = b.te, f = b.capture;
  c.removeEventListener ? c != s && c.Vd || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in zf ? zf[d] : zf[d] = "on" + d, e);
  c = ia(c);
  yf[c] && (e = yf[c], Ia(e, b), 0 == e.length && delete yf[c]);
  b.cb = !0;
  if(b = xf[d][f][c]) {
    b.me = !0, Hf(d, f, c, b)
  }
  delete wf[a];
  return!0
}
function Hf(a, b, c, d) {
  if(!d.kc && d.me) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].cb ? d[e].te.src = null : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.me = !1;
    0 == f && (delete xf[a][b][c], xf[a][b].v--, 0 == xf[a][b].v && (delete xf[a][b], xf[a].v--), 0 == xf[a].v && delete xf[a])
  }
}
function If(a) {
  var b = 0;
  if(null != a) {
    if(a = ia(a), yf[a]) {
      a = yf[a];
      for(var c = a.length - 1;0 <= c;c--) {
        Gf(a[c].key), b++
      }
    }
  }else {
    La(wf, function(a, c) {
      Gf(c);
      b++
    })
  }
}
function Jf(a, b, c, d, e) {
  var f = 1;
  b = ia(b);
  if(a[b]) {
    var h = --a.ba, k = a[b];
    k.kc ? k.kc++ : k.kc = 1;
    try {
      for(var l = k.length, m = 0;m < l;m++) {
        var p = k[m];
        p && !p.cb && (f &= !1 !== Kf(p, e))
      }
    }finally {
      a.ba = Math.max(h, a.ba), k.kc--, Hf(c, d, b, k)
    }
  }
  return Boolean(f)
}
function Kf(a, b) {
  a.Xb && Gf(a.key);
  return a.handleEvent(b)
}
function Df(a, b) {
  if(a.cb) {
    return!0
  }
  var c = a.type, d = xf;
  if(!(c in d)) {
    return!0
  }
  var d = d[c], e, f;
  if(!of) {
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
    l = new tf;
    l.jc(e, this);
    e = !0;
    try {
      if(h) {
        for(var p = [], q = l.currentTarget;q;q = q.parentNode) {
          p.push(q)
        }
        f = d[!0];
        f.ba = f.v;
        for(var u = p.length - 1;!l.wb && 0 <= u && f.ba;u--) {
          l.currentTarget = p[u], e &= Jf(f, p[u], c, !0, l)
        }
        if(k) {
          for(f = d[!1], f.ba = f.v, u = 0;!l.wb && u < p.length && f.ba;u++) {
            l.currentTarget = p[u], e &= Jf(f, p[u], c, !1, l)
          }
        }
      }else {
        e = Kf(a, l)
      }
    }finally {
      p && (p.length = 0)
    }
    return e
  }
  c = new tf(b, this);
  return e = Kf(a, c)
}
;function Lf() {
  kf.call(this)
}
qa(Lf, kf);
r = Lf.prototype;
r.Vd = !0;
r.gd = null;
r.addEventListener = function(a, b, c, d) {
  Af(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  Ff(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = xf;
  if(b in c) {
    if(v(a)) {
      a = new qf(a, this)
    }else {
      if(a instanceof qf) {
        a.target = a.target || this
      }else {
        var d = a;
        a = new qf(b, this);
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
        a.currentTarget = e[h], d &= Jf(f, e[h], a.type, !0, a) && !1 != a.sc
      }
    }
    if(!1 in c) {
      if(f = c[!1], f.ba = f.v, b) {
        for(h = 0;!a.wb && h < e.length && f.ba;h++) {
          a.currentTarget = e[h], d &= Jf(f, e[h], a.type, !1, a) && !1 != a.sc
        }
      }else {
        for(e = this;!a.wb && e && f.ba;e = e.gd) {
          a.currentTarget = e, d &= Jf(f, e, a.type, !1, a) && !1 != a.sc
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
r.C = function() {
  Lf.la.C.call(this);
  If(this);
  this.gd = null
};
function Mf(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
function Nf(a) {
  var b = [];
  Of(new Pf, a, b);
  return b.join("")
}
function Pf() {
  this.rc = void 0
}
function Of(a, b, c) {
  switch(typeof b) {
    case "string":
      Qf(b, c);
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
          c.push(e), e = b[f], Of(a, a.rc ? a.rc.call(b, String(f), e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), Qf(f, c), c.push(":"), Of(a, a.rc ? a.rc.call(b, f, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof b);
  }
}
var Rf = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Sf = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Qf(a, b) {
  b.push('"', a.replace(Sf, function(a) {
    if(a in Rf) {
      return Rf[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Rf[a] = e + b.toString(16)
  }), '"')
}
;function Tf(a) {
  if("function" == typeof a.Ba) {
    return a.Ba()
  }
  if(v(a)) {
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
function Uf(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(fa(a) || v(a)) {
      Fa(a, b, c)
    }else {
      var d;
      if("function" == typeof a.qb) {
        d = a.qb()
      }else {
        if("function" != typeof a.Ba) {
          if(fa(a) || v(a)) {
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
      for(var e = Tf(a), f = e.length, h = 0;h < f;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
;function Vf(a, b) {
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
      a instanceof Vf ? (c = a.qb(), d = a.Ba()) : (c = Na(a), d = Ma(a));
      for(var e = 0;e < c.length;e++) {
        this.set(c[e], d[e])
      }
    }
  }
}
r = Vf.prototype;
r.v = 0;
r.Be = 0;
r.Ba = function() {
  Wf(this);
  for(var a = [], b = 0;b < this.G.length;b++) {
    a.push(this.Da[this.G[b]])
  }
  return a
};
r.qb = function() {
  Wf(this);
  return this.G.concat()
};
r.Db = function(a) {
  return Xf(this.Da, a)
};
r.remove = function(a) {
  return Xf(this.Da, a) ? (delete this.Da[a], this.v--, this.Be++, this.G.length > 2 * this.v && Wf(this), !0) : !1
};
function Wf(a) {
  if(a.v != a.G.length) {
    for(var b = 0, c = 0;b < a.G.length;) {
      var d = a.G[b];
      Xf(a.Da, d) && (a.G[c++] = d);
      b++
    }
    a.G.length = c
  }
  if(a.v != a.G.length) {
    for(var e = {}, c = b = 0;b < a.G.length;) {
      d = a.G[b], Xf(e, d) || (a.G[c++] = d, e[d] = 1), b++
    }
    a.G.length = c
  }
}
r.get = function(a, b) {
  return Xf(this.Da, a) ? this.Da[a] : b
};
r.set = function(a, b) {
  Xf(this.Da, a) || (this.v++, this.G.push(a), this.Be++);
  this.Da[a] = b
};
r.dc = function() {
  return new Vf(this)
};
function Xf(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;var Yf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Zf(a) {
  var b = a.match(Yf);
  a = b[1];
  var c = b[2], d = b[3], b = b[4], e = "";
  a && (e += a + ":");
  d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
  return e
}
;function $f(a, b) {
  var c;
  if(a instanceof $f) {
    this.ha = void 0 !== b ? b : a.ha, ag(this, a.xb), c = a.vc, bg(this), this.vc = c, c = a.Fb, bg(this), this.Fb = c, cg(this, a.pc), c = a.mc, bg(this), this.mc = c, dg(this, a.Ga.dc()), c = a.ic, bg(this), this.ic = c
  }else {
    if(a && (c = String(a).match(Yf))) {
      this.ha = !!b;
      ag(this, c[1] || "", !0);
      var d = c[2] || "";
      bg(this);
      this.vc = d ? decodeURIComponent(d) : "";
      d = c[3] || "";
      bg(this);
      this.Fb = d ? decodeURIComponent(d) : "";
      cg(this, c[4]);
      d = c[5] || "";
      bg(this);
      this.mc = d ? decodeURIComponent(d) : "";
      dg(this, c[6] || "", !0);
      c = c[7] || "";
      bg(this);
      this.ic = c ? decodeURIComponent(c) : ""
    }else {
      this.ha = !!b, this.Ga = new eg(null, 0, this.ha)
    }
  }
}
r = $f.prototype;
r.xb = "";
r.vc = "";
r.Fb = "";
r.pc = null;
r.mc = "";
r.ic = "";
r.of = !1;
r.ha = !1;
r.toString = function() {
  var a = [], b = this.xb;
  b && a.push(fg(b, gg), ":");
  if(b = this.Fb) {
    a.push("//");
    var c = this.vc;
    c && a.push(fg(c, gg), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.pc;
    null != b && a.push(":", String(b))
  }
  if(b = this.mc) {
    this.Fb && "/" != b.charAt(0) && a.push("/"), a.push(fg(b, "/" == b.charAt(0) ? hg : ig))
  }
  (b = this.Ga.toString()) && a.push("?", b);
  (b = this.ic) && a.push("#", fg(b, jg));
  return a.join("")
};
r.dc = function() {
  return new $f(this)
};
function ag(a, b, c) {
  bg(a);
  a.xb = c ? b ? decodeURIComponent(b) : "" : b;
  a.xb && (a.xb = a.xb.replace(/:$/, ""))
}
function cg(a, b) {
  bg(a);
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
function dg(a, b, c) {
  bg(a);
  b instanceof eg ? (a.Ga = b, a.Ga.nd(a.ha)) : (c || (b = fg(b, kg)), a.Ga = new eg(b, 0, a.ha))
}
function bg(a) {
  if(a.of) {
    throw Error("Tried to modify a read-only Uri");
  }
}
r.nd = function(a) {
  this.ha = a;
  this.Ga && this.Ga.nd(a);
  return this
};
function fg(a, b) {
  return v(a) ? encodeURI(a).replace(b, lg) : null
}
function lg(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var gg = /[#\/\?@]/g, ig = /[\#\?:]/g, hg = /[\#\?]/g, kg = /[\#\?@]/g, jg = /#/g;
function eg(a, b, c) {
  this.ga = a || null;
  this.ha = !!c
}
function mg(a) {
  if(!a.I && (a.I = new Vf, a.v = 0, a.ga)) {
    for(var b = a.ga.split("\x26"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("\x3d"), e = null, f = null;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = ng(a, e);
      a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
  }
}
r = eg.prototype;
r.I = null;
r.v = null;
r.add = function(a, b) {
  mg(this);
  this.ga = null;
  a = ng(this, a);
  var c = this.I.get(a);
  c || this.I.set(a, c = []);
  c.push(b);
  this.v++;
  return this
};
r.remove = function(a) {
  mg(this);
  a = ng(this, a);
  return this.I.Db(a) ? (this.ga = null, this.v -= this.I.get(a).length, this.I.remove(a)) : !1
};
r.Db = function(a) {
  mg(this);
  a = ng(this, a);
  return this.I.Db(a)
};
r.qb = function() {
  mg(this);
  for(var a = this.I.Ba(), b = this.I.qb(), c = [], d = 0;d < b.length;d++) {
    for(var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d])
    }
  }
  return c
};
r.Ba = function(a) {
  mg(this);
  var b = [];
  if(a) {
    this.Db(a) && (b = Ja(b, this.I.get(ng(this, a))))
  }else {
    a = this.I.Ba();
    for(var c = 0;c < a.length;c++) {
      b = Ja(b, a[c])
    }
  }
  return b
};
r.set = function(a, b) {
  mg(this);
  this.ga = null;
  a = ng(this, a);
  this.Db(a) && (this.v -= this.I.get(a).length);
  this.I.set(a, [b]);
  this.v++;
  return this
};
r.get = function(a, b) {
  var c = a ? this.Ba(a) : [];
  return 0 < c.length ? String(c[0]) : b
};
r.toString = function() {
  if(this.ga) {
    return this.ga
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
  return this.ga = a.join("\x26")
};
r.dc = function() {
  var a = new eg;
  a.ga = this.ga;
  this.I && (a.I = this.I.dc(), a.v = this.v);
  return a
};
function ng(a, b) {
  var c = String(b);
  a.ha && (c = c.toLowerCase());
  return c
}
r.nd = function(a) {
  a && !this.ha && (mg(this), this.ga = null, Uf(this.I, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.ga = null, this.I.set(ng(this, d), Ka(a)), this.v += a.length))
  }, this));
  this.ha = a
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function og(a, b) {
  this.Ia = [];
  this.pe = a;
  this.Wd = b || null
}
r = og.prototype;
r.ua = !1;
r.Hb = !1;
r.Bc = !1;
r.Fe = !1;
r.od = !1;
r.Wb = 0;
r.cancel = function(a) {
  if(this.ua) {
    this.Ob instanceof og && this.Ob.cancel()
  }else {
    if(this.ra) {
      var b = this.ra;
      delete this.ra;
      a ? b.cancel(a) : (b.Wb--, 0 >= b.Wb && b.cancel())
    }
    this.pe ? this.pe.call(this.Wd, this) : this.od = !0;
    this.ua || this.Yd(new pg(this))
  }
};
r.Td = function(a, b) {
  this.Bc = !1;
  qg(this, a, b)
};
function qg(a, b, c) {
  a.ua = !0;
  a.Ob = c;
  a.Hb = !b;
  rg(a)
}
function sg(a) {
  if(a.ua) {
    if(!a.od) {
      throw new tg(a);
    }
    a.od = !1
  }
}
r.sa = function(a) {
  sg(this);
  qg(this, !0, a)
};
r.Yd = function(a) {
  sg(this);
  qg(this, !1, a)
};
function ug(a, b, c, d) {
  a.Ia.push([b, c, d]);
  a.ua && rg(a)
}
function vg(a, b) {
  var c = w(b.He, b);
  ug(a, c, null, void 0)
}
r.He = function(a) {
  var b = new og;
  ug(this, b.sa, b.Yd, b);
  a && (b.ra = this, this.Wb++);
  return b
};
function wg(a) {
  return Ha(a.Ia, function(a) {
    return ga(a[1])
  })
}
function rg(a) {
  a.rd && (a.ua && wg(a)) && (s.clearTimeout(a.rd), delete a.rd);
  a.ra && (a.ra.Wb--, delete a.ra);
  for(var b = a.Ob, c = !1, d = !1;a.Ia.length && !a.Bc;) {
    var e = a.Ia.shift(), f = e[0], h = e[1], e = e[2];
    if(f = a.Hb ? h : f) {
      try {
        var k = f.call(e || a.Wd, b);
        void 0 !== k && (a.Hb = a.Hb && (k == b || k instanceof Error), a.Ob = b = k);
        b instanceof og && (d = !0, a.Bc = !0)
      }catch(l) {
        b = l, a.Hb = !0, wg(a) || (c = !0)
      }
    }
  }
  a.Ob = b;
  d && (ug(b, w(a.Td, a, !0), w(a.Td, a, !1)), b.Fe = !0);
  c && (a.rd = s.setTimeout(function() {
    throw b;
  }, 0))
}
function tg(a) {
  ra.call(this);
  this.ef = a
}
qa(tg, ra);
tg.prototype.message = "Deferred has already fired";
tg.prototype.name = "AlreadyCalledError";
function pg(a) {
  ra.call(this);
  this.ef = a
}
qa(pg, ra);
pg.prototype.message = "Deferred was cancelled";
pg.prototype.name = "CancelledError";
function xg(a, b) {
  kf.call(this);
  this.tb = a || 1;
  this.Rb = b || s;
  this.Cc = w(this.Df, this);
  this.ad = oa()
}
qa(xg, Lf);
r = xg.prototype;
r.enabled = !1;
r.Ja = null;
r.Df = function() {
  if(this.enabled) {
    var a = oa() - this.ad;
    0 < a && a < 0.8 * this.tb ? this.Ja = this.Rb.setTimeout(this.Cc, this.tb - a) : (this.dispatchEvent(yg), this.enabled && (this.Ja = this.Rb.setTimeout(this.Cc, this.tb), this.ad = oa()))
  }
};
r.start = function() {
  this.enabled = !0;
  this.Ja || (this.Ja = this.Rb.setTimeout(this.Cc, this.tb), this.ad = oa())
};
r.stop = function() {
  this.enabled = !1;
  this.Ja && (this.Rb.clearTimeout(this.Ja), this.Ja = null)
};
r.C = function() {
  xg.la.C.call(this);
  this.stop();
  delete this.Rb
};
var yg = "tick";
function zg(a, b) {
  if(!ga(a)) {
    if(a && "function" == typeof a.handleEvent) {
      a = w(a.handleEvent, a)
    }else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : s.setTimeout(a, b || 0)
}
;function Ag(a, b, c) {
  kf.call(this);
  this.bd = a;
  this.tb = b || 0;
  this.Ib = c;
  this.Ie = w(this.hf, this)
}
qa(Ag, kf);
r = Ag.prototype;
r.Jb = 0;
r.C = function() {
  Ag.la.C.call(this);
  this.stop();
  delete this.bd;
  delete this.Ib
};
r.start = function(a) {
  this.stop();
  this.Jb = zg(this.Ie, void 0 !== a ? a : this.tb)
};
r.stop = function() {
  this.fe() && s.clearTimeout(this.Jb);
  this.Jb = 0
};
r.fe = function() {
  return 0 != this.Jb
};
r.hf = function() {
  this.Jb = 0;
  this.bd && this.bd.call(this.Ib)
};
var Bg, Cg = !Ve && !Ue || Ue && Ue && 9 <= jf || Ve && gf("1.9.1");
Ue && gf("9");
function Dg(a) {
  return a ? new Eg(9 == a.nodeType ? a : a.ownerDocument || a.document) : Bg || (Bg = new Eg)
}
function Fg(a, b, c) {
  function d(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(var e = 1;e < c.length;e++) {
    var f = c[e];
    !fa(f) || ha(f) && 0 < f.nodeType ? d(f) : Fa(Gg(f) ? Ka(f) : f, d)
  }
}
function Hg(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Gg(a) {
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
function Eg(a) {
  this.Eb = a || s.document || document
}
r = Eg.prototype;
r.createElement = function(a) {
  return this.Eb.createElement(a)
};
r.createTextNode = function(a) {
  return this.Eb.createTextNode(String(a))
};
r.A = function() {
  return this.Eb.parentWindow || this.Eb.defaultView
};
r.appendChild = function(a, b) {
  a.appendChild(b)
};
r.append = function(a, b) {
  Fg(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
};
r.ce = function(a) {
  return Cg && void 0 != a.children ? a.children : Ga(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
function Ig(a) {
  kf.call(this);
  this.Ib = a;
  this.G = []
}
qa(Ig, kf);
var Jg = [];
function Kg(a, b, c, d, e, f) {
  if(da(c)) {
    for(var h = 0;h < c.length;h++) {
      Kg(a, b, c[h], d, e, f)
    }
  }else {
    b = Ef(b, c, d || a, e, f || a.Ib || a), a.G.push(b)
  }
}
Ig.prototype.C = function() {
  Ig.la.C.call(this);
  Fa(this.G, Gf);
  this.G.length = 0
};
Ig.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function Lg(a) {
  return Mg(a || arguments.callee.caller, [])
}
function Mg(a, b) {
  var c = [];
  if(0 <= Ea(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Ng(a) + "(");
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
            f = (f = Ng(f)) ? f : "[fn]";
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
        c.push(Mg(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Ng(a) {
  if(Og[a]) {
    return Og[a]
  }
  a = String(a);
  if(!Og[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Og[a] = b ? b[1] : "[Anonymous]"
  }
  return Og[a]
}
var Og = {};
function Pg(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Pg.prototype.Af = 0;
Pg.prototype.$d = null;
Pg.prototype.Zd = null;
var Qg = 0;
Pg.prototype.reset = function(a, b, c, d, e) {
  this.Af = "number" == typeof e ? e : Qg++;
  this.pg = d || oa();
  this.Lb = a;
  this.sf = b;
  this.lg = c;
  delete this.$d;
  delete this.Zd
};
Pg.prototype.Ae = function(a) {
  this.Lb = a
};
function Rg(a) {
  this.le = a
}
Rg.prototype.ra = null;
Rg.prototype.Lb = null;
Rg.prototype.Dc = null;
Rg.prototype.de = null;
function Sg(a, b) {
  this.name = a;
  this.value = b
}
Sg.prototype.toString = g("name");
var Tg = new Sg("SEVERE", 1E3), Ug = new Sg("WARNING", 900), Vg = new Sg("INFO", 800), Wg = new Sg("CONFIG", 700), Xg = new Sg("FINE", 500), Yg = new Sg("FINEST", 300);
r = Rg.prototype;
r.getName = g("le");
r.getParent = g("ra");
r.ce = function() {
  this.Dc || (this.Dc = {});
  return this.Dc
};
r.Ae = function(a) {
  this.Lb = a
};
function Zg(a) {
  if(a.Lb) {
    return a.Lb
  }
  if(a.ra) {
    return Zg(a.ra)
  }
  Ca("Root logger has no level set.");
  return null
}
r.log = function(a, b, c) {
  if(a.value >= Zg(this).value) {
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
r.lf = function(a, b, c) {
  var d = new Pg(a, String(b), this.le);
  if(c) {
    d.$d = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var h;
      var k = ba("window.location.href");
      if(v(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"}
      }else {
        var l, m, p = !1;
        try {
          l = c.lineNumber || c.kg || "Not available"
        }catch(q) {
          l = "Not available", p = !0
        }
        try {
          m = c.fileName || c.filename || c.sourceURL || s.$googDebugFname || k
        }catch(u) {
          m = "Not available", p = !0
        }
        h = !p && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:l, fileName:m, stack:c.stack || "Not available"}
      }
      e = "Message: " + ta(h.message) + '\nUrl: \x3ca href\x3d"view-source:' + h.fileName + '" target\x3d"_new"\x3e' + h.fileName + "\x3c/a\x3e\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + ta(h.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + ta(Lg(f) + "-\x3e ")
    }catch(E) {
      e = "Exception trying to expose exception! You win, we lose. " + E
    }
    d.Zd = e
  }
  return d
};
r.info = function(a, b) {
  this.log(Vg, a, b)
};
function $g(a) {
  Z.log(Xg, a, void 0)
}
function ah(a) {
  Z.log(Yg, a, void 0)
}
var bh = {}, ch = null;
function dh(a) {
  ch || (ch = new Rg(""), bh[""] = ch, ch.Ae(Wg));
  var b;
  if(!(b = bh[a])) {
    b = new Rg(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = dh(a.substr(0, c));
    c.ce()[d] = b;
    b.ra = c;
    bh[a] = b
  }
  return b
}
;function eh() {
  kf.call(this);
  this.md = {}
}
qa(eh, kf);
eh.prototype.cd = dh("goog.messaging.AbstractChannel");
eh.prototype.ta = function(a) {
  a && a()
};
eh.prototype.va = n(!0);
eh.prototype.C = function() {
  eh.la.C.call(this);
  delete this.cd;
  delete this.md;
  delete this.Xd
};
var fh = {1:"NativeMessagingTransport", 2:"FrameElementMethodTransport", 3:"IframeRelayTransport", 4:"IframePollingTransport", 5:"FlashTransport", 6:"NixTransport"}, $ = {sd:"cn", Ce:"at", Ee:"rat", Ub:"pu", La:"ifrid", Ab:"tp", wc:"lru", Tb:"pru", Va:"lpu", Wa:"ppu", yc:"ph", xc:"osh", zc:"role", De:"nativeProtocolVersion"}, gh = [$.Ub, $.wc, $.Tb, $.Va, $.Wa], hh = {};
function ih(a) {
  for(var b = jh, c = b.length, d = "";0 < a--;) {
    d += b.charAt(Math.floor(Math.random() * c))
  }
  return d
}
var jh = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", Z = dh("goog.net.xpc");
function kh(a) {
  kf.call(this);
  this.Aa = a || Dg()
}
qa(kh, kf);
kh.prototype.yb = 0;
kh.prototype.A = function() {
  return this.Aa.A()
};
kh.prototype.getName = function() {
  return fh[this.yb] || ""
};
function lh(a, b) {
  kh.call(this, b);
  this.m = a;
  this.Nb = [];
  this.ff = w(this.gf, this)
}
qa(lh, kh);
r = lh.prototype;
r.yb = 2;
r.kd = !1;
r.Ja = 0;
r.ta = function() {
  0 == mh(this.m) ? (this.Ca = this.m.sb, this.Ca.XPC_toOuter = w(this.ee, this)) : this.xd()
};
r.xd = function() {
  var a = !0;
  try {
    this.Ca || (this.Ca = this.A().frameElement), this.Ca && this.Ca.XPC_toOuter && (this.fd = this.Ca.XPC_toOuter, this.Ca.XPC_toOuter.XPC_toInner = w(this.ee, this), a = !1, this.send("tp", "SETUP_ACK"), this.m.Ea())
  }catch(b) {
    Z.log(Tg, "exception caught while attempting setup: " + b, void 0)
  }
  a && (this.wd || (this.wd = w(this.xd, this)), this.A().setTimeout(this.wd, 100))
};
r.qd = function(a) {
  if(0 != mh(this.m) || this.m.va() || "SETUP_ACK" != a) {
    throw Error("Got unexpected transport message.");
  }
  this.fd = this.Ca.XPC_toOuter.XPC_toInner;
  this.m.Ea()
};
r.ee = function(a, b) {
  this.kd || 0 != this.Nb.length ? (this.Nb.push({Cf:a, jd:b}), 1 == this.Nb.length && (this.Ja = this.A().setTimeout(this.ff, 1))) : this.m.Ka(a, b)
};
r.gf = function() {
  for(;this.Nb.length;) {
    var a = this.Nb.shift();
    this.m.Ka(a.Cf, a.jd)
  }
};
r.send = function(a, b) {
  this.kd = !0;
  this.fd(a, b);
  this.kd = !1
};
r.C = function() {
  lh.la.C.call(this);
  this.Ca = this.fd = null
};
function nh(a, b) {
  kh.call(this, b);
  this.m = a;
  this.Pb = this.m.r[$.Wa];
  this.yf = this.m.r[$.Va];
  this.tc = []
}
var oh, ph;
qa(nh, kh);
r = nh.prototype;
r.vf = 5;
r.yb = 4;
r.Ia = 0;
r.zb = !1;
r.Ya = !1;
r.xe = null;
function qh(a) {
  return"googlexpc_" + a.m.name + "_msg"
}
function rh(a) {
  return"googlexpc_" + a.m.name + "_ack"
}
function sh(a) {
  try {
    if(!a.lb && th(a.m)) {
      return a.m.Fa.frames || {}
    }
  }catch(b) {
    $g("error retrieving peer frames")
  }
  return{}
}
r.ta = function() {
  if(!this.lb && th(this.m)) {
    $g("transport connect called");
    if(!this.Ya) {
      $g("initializing...");
      var a = qh(this);
      this.vb = uh(this, a);
      this.dd = this.A().frames[a];
      a = rh(this);
      this.gb = uh(this, a);
      this.Ac = this.A().frames[a];
      this.Ya = !0
    }
    if(vh(this, qh(this)) && vh(this, rh(this))) {
      $g("foreign frames present"), this.ie = new wh(this, sh(this)[qh(this)], w(this.xf, this)), this.td = new wh(this, sh(this)[rh(this)], w(this.wf, this)), this.Ad()
    }else {
      ah("foreign frames not (yet) present");
      if(1 == mh(this.m)) {
        this.xe || 0 < this.vf-- || (ah("Inner peer reconnect triggered."), this.m.name = ih(10), ah("switching channels: " + this.m.name), xh(this), this.Ya = !1, this.xe = uh(this, "googlexpc_reconnect_" + this.m.name))
      }else {
        if(0 == mh(this.m)) {
          ah("outerPeerReconnect called");
          for(var a = sh(this), b = a.length, c = 0;c < b;c++) {
            var d;
            try {
              a[c] && a[c].name && (d = a[c].name)
            }catch(e) {
            }
            if(d) {
              var f = d.split("_");
              if(3 == f.length && "googlexpc" == f[0] && "reconnect" == f[1]) {
                this.m.name = f[2];
                xh(this);
                this.Ya = !1;
                break
              }
            }
          }
        }
      }
      this.A().setTimeout(w(this.ta, this), 100)
    }
  }
};
function uh(a, b) {
  ah("constructing sender frame: " + b);
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
  a.A().document.body.appendChild(c);
  return c
}
function xh(a) {
  ah("deconstructSenderFrames called");
  a.vb && (a.vb.parentNode.removeChild(a.vb), a.vb = null, a.dd = null);
  a.gb && (a.gb.parentNode.removeChild(a.gb), a.gb = null, a.Ac = null)
}
function vh(a, b) {
  ah("checking for receive frame: " + b);
  try {
    var c = sh(a)[b];
    if(!c || 0 != c.location.href.indexOf(a.yf)) {
      return!1
    }
  }catch(d) {
    return!1
  }
  return!0
}
r.Ad = function() {
  var a = sh(this);
  a[rh(this)] && a[qh(this)] ? (this.je = new yh(this.Pb, this.dd), this.Vb = new yh(this.Pb, this.Ac), $g("local frames ready"), this.A().setTimeout(w(function() {
    this.je.send("SETUP");
    this.zb = this.og = !0;
    $g("SETUP sent")
  }, this), 100)) : (this.zd || (this.zd = w(this.Ad, this)), this.A().setTimeout(this.zd, 100), $g("local frames not (yet) present"))
};
function zh(a) {
  if(a.ld && a.ve) {
    if(a.m.Ea(), a.kb) {
      $g("delivering queued messages (" + a.kb.length + ")");
      for(var b = 0, c;b < a.kb.length;b++) {
        c = a.kb[b], a.m.Ka(c.Bf, c.jd)
      }
      delete a.kb
    }
  }else {
    ah("checking if connected: ack sent:" + a.ld + ", ack rcvd: " + a.ve)
  }
}
r.xf = function(a) {
  ah("msg received: " + a);
  if("SETUP" == a) {
    this.Vb && (this.Vb.send("SETUP_ACK"), ah("SETUP_ACK sent"), this.ld = !0, zh(this))
  }else {
    if(this.m.va() || this.ld) {
      var b = a.indexOf("|"), c = a.substring(0, b);
      a = a.substring(b + 1);
      b = c.indexOf(",");
      if(-1 == b) {
        var d;
        this.Vb.send("ACK:" + c);
        Ah(this, a)
      }else {
        d = c.substring(0, b), this.Vb.send("ACK:" + d), c = c.substring(b + 1).split("/"), b = parseInt(c[0], 10), c = parseInt(c[1], 10), 1 == b && (this.hd = []), this.hd.push(a), b == c && (Ah(this, this.hd.join("")), delete this.hd)
      }
    }else {
      Z.log(Ug, "received msg, but channel is not connected", void 0)
    }
  }
};
r.wf = function(a) {
  ah("ack received: " + a);
  "SETUP_ACK" == a ? (this.zb = !1, this.ve = !0, zh(this)) : this.m.va() ? this.zb ? parseInt(a.split(":")[1], 10) == this.Ia ? (this.zb = !1, Bh(this)) : Z.log(Ug, "got ack with wrong sequence", void 0) : Z.log(Ug, "got unexpected ack", void 0) : Z.log(Ug, "received ack, but channel not connected", void 0)
};
function Bh(a) {
  if(!a.zb && a.tc.length) {
    var b = a.tc.shift();
    ++a.Ia;
    a.je.send(a.Ia + b);
    ah("msg sent: " + a.Ia + b);
    a.zb = !0
  }
}
function Ah(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), c = b.substring(c + 1);
  a.m.va() ? a.m.Ka(d, c) : ((a.kb || (a.kb = [])).push({Bf:d, jd:c}), ah("queued delivery"))
}
r.Sb = 3800;
r.send = function(a, b) {
  var c = a + ":" + b;
  if(!Ue || b.length <= this.Sb) {
    this.tc.push("|" + c)
  }else {
    for(var d = b.length, e = Math.ceil(d / this.Sb), f = 0, h = 1;f < d;) {
      this.tc.push("," + h + "/" + e + "|" + c.substr(f, this.Sb)), h++, f += this.Sb
    }
  }
  Bh(this)
};
r.C = function() {
  nh.la.C.call(this);
  var a = Ch;
  Ia(a, this.ie);
  Ia(a, this.td);
  this.ie = this.td = null;
  Hg(this.vb);
  Hg(this.gb);
  this.dd = this.Ac = this.vb = this.gb = null
};
var Ch = [], Dh = w(function() {
  var a = Ch, b, c = !1;
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
    if(Z.info("receive_() failed: " + l), b = b.$.m, Z.info("Transport Error"), b.close(), !a.length) {
      return
    }
  }
  a = oa();
  c && (oh = a);
  ph = window.setTimeout(Dh, 1E3 > a - oh ? 10 : 100)
}, nh);
function Eh() {
  $g("starting receive-timer");
  oh = oa();
  ph && window.clearTimeout(ph);
  ph = window.setTimeout(Dh, 10)
}
function yh(a, b) {
  this.Pb = a;
  this.ze = b;
  this.Yc = 0
}
yh.prototype.send = function(a) {
  this.Yc = ++this.Yc % 2;
  a = this.Pb + "#" + this.Yc + encodeURIComponent(a);
  try {
    We ? this.ze.location.href = a : this.ze.location.replace(a)
  }catch(b) {
    Z.log(Tg, "sending failed", b)
  }
  Eh()
};
function wh(a, b, c) {
  this.$ = a;
  this.ue = b;
  this.Je = c;
  this.Ud = this.ue.location.href.split("#")[0] + "#INITIAL";
  Ch.push(this);
  Eh()
}
;function Fh(a, b) {
  kh.call(this, b);
  this.m = a;
  this.tf = this.m.r[$.Tb];
  this.se = this.m.r[$.La];
  We && Gh()
}
qa(Fh, kh);
if(We) {
  var Hh = [], Ih = 0, Gh = function() {
    Ih || (Ih = window.setTimeout(function() {
      Jh()
    }, 1E3))
  }, Jh = function(a) {
    var b = oa();
    for(a = a || 3E3;Hh.length && b - Hh[0].timestamp >= a;) {
      var c = Hh.shift().nf;
      Hg(c);
      ah("iframe removed")
    }
    Ih = window.setTimeout(Kh, 1E3)
  }, Kh = function() {
    Jh()
  }
}
var Lh = {};
r = Fh.prototype;
r.yb = 3;
r.ta = function() {
  this.A().xpcRelay || (this.A().xpcRelay = Mh);
  this.send("tp", "SETUP")
};
function Mh(a, b) {
  var c = b.indexOf(":"), d = b.substr(0, c), e = b.substr(c + 1);
  if(Ue && -1 != (c = d.indexOf("|"))) {
    var f = d.substr(0, c), d = d.substr(c + 1), c = d.indexOf("+"), h = d.substr(0, c), c = parseInt(d.substr(c + 1), 10), k = Lh[h];
    k || (k = Lh[h] = {be:[], we:0, ae:0});
    -1 != d.indexOf("++") && (k.ae = c + 1);
    k.be[c] = e;
    k.we++;
    if(k.we != k.ae) {
      return
    }
    e = k.be.join("");
    delete Lh[h]
  }else {
    var f = d
  }
  hh[a].Ka(f, decodeURIComponent(e))
}
r.qd = function(a) {
  "SETUP" == a ? (this.send("tp", "SETUP_ACK"), this.m.Ea()) : "SETUP_ACK" == a && this.m.Ea()
};
r.send = function(a, b) {
  var c = encodeURIComponent(b), d = c.length;
  if(Ue && 1800 < d) {
    for(var e = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ oa()).toString(36), f = 0, h = 0;f < d;h++) {
      var k = c.substr(f, 1800), f = f + 1800;
      Nh(this, a, k, e + (f >= d ? "++" : "+") + h)
    }
  }else {
    Nh(this, a, c)
  }
};
function Nh(a, b, c, d) {
  if(Ue) {
    var e = a.A().document.createElement("div");
    e.innerHTML = '\x3ciframe onload\x3d"this.xpcOnload()"\x3e\x3c/iframe\x3e';
    e = e.childNodes[0];
    e.xpcOnload = Oh
  }else {
    e = a.A().document.createElement("iframe"), We ? Hh.push({timestamp:oa(), nf:e}) : Af(e, "load", Oh)
  }
  var f = e.style;
  f.visibility = "hidden";
  f.width = e.style.height = "0px";
  f.position = "absolute";
  f = a.tf;
  f += "#" + a.m.name;
  a.se && (f += "," + a.se);
  f += "|" + b;
  d && (f += "|" + d);
  f += ":" + c;
  e.src = f;
  a.A().document.body.appendChild(e);
  ah("msg sent: " + f)
}
function Oh() {
  ah("iframe-load");
  Hg(this);
  this.qg = null
}
r.C = function() {
  Fh.la.C.call(this);
  We && Jh(0)
};
function Ph(a, b, c, d, e) {
  kh.call(this, c);
  this.m = a;
  this.bb = e || 2;
  this.re = b || "*";
  this.$c = new Ig(this);
  this.Mb = new xg(100, this.A());
  this.lc = !!d;
  this.Ta = new og;
  this.Ua = new og;
  this.Na = new og;
  this.jf = ih(10);
  this.nc = null;
  this.lc ? 1 == mh(this.m) ? vg(this.Na, this.Ta) : vg(this.Na, this.Ua) : (vg(this.Na, this.Ta), 2 == this.bb && vg(this.Na, this.Ua));
  ug(this.Na, this.ne, null, this);
  this.Na.sa(!0);
  a = this.$c;
  b = this.Mb;
  c = this.he;
  d = yg;
  da(d) || (Jg[0] = d, d = Jg);
  for(e = 0;e < d.length;e++) {
    var f = Af(b, d[e], c || a, !1, a.Ib || a);
    a.G.push(f)
  }
  Z.info("NativeMessagingTransport created.  protocolVersion\x3d" + this.bb + ", oneSidedHandshake\x3d" + this.lc + ", role\x3d" + mh(this.m))
}
qa(Ph, kh);
Ph.prototype.da = null;
Ph.prototype.Ya = !1;
Ph.prototype.yb = 1;
var Qh = {};
function Rh(a) {
  var b = a.hc.data;
  if(!v(b)) {
    return!1
  }
  var c = b.indexOf("|"), d = b.indexOf(":");
  if(-1 == c || -1 == d) {
    return!1
  }
  var e = b.substring(0, c), c = b.substring(c + 1, d), b = b.substring(d + 1);
  $g("messageReceived: channel\x3d" + e + ", service\x3d" + c + ", payload\x3d" + b);
  if(d = hh[e]) {
    return d.Ka(c, b, a.hc.origin), !0
  }
  a = Sh(b)[0];
  for(var f in hh) {
    if(d = hh[f], 1 == mh(d) && !d.va() && "tp" == c && ("SETUP" == a || "SETUP_NTPV2" == a)) {
      return $g("changing channel name to " + e), d.name = e, delete hh[f], hh[e] = d, d.Ka(c, b), !0
    }
  }
  Z.info('channel name mismatch; message ignored"');
  return!1
}
r = Ph.prototype;
r.qd = function(a) {
  var b = Sh(a);
  a = b[1];
  switch(b[0]) {
    case "SETUP_ACK":
      Th(this, 1);
      this.Ta.ua || this.Ta.sa(!0);
      break;
    case "SETUP_ACK_NTPV2":
      2 == this.bb && (Th(this, 2), this.Ta.ua || this.Ta.sa(!0));
      break;
    case "SETUP":
      Th(this, 1);
      Uh(this, 1);
      break;
    case "SETUP_NTPV2":
      2 == this.bb && (b = this.da, Th(this, 2), Uh(this, 2), 1 != b && null == this.nc || this.nc == a || (Z.info("Sending SETUP and changing peer ID to: " + a), Vh(this)), this.nc = a)
  }
};
function Vh(a) {
  if(2 == a.bb && (null == a.da || 2 == a.da)) {
    var b;
    b = "SETUP_NTPV2," + a.jf;
    a.send("tp", b)
  }
  null != a.da && 1 != a.da || a.send("tp", "SETUP")
}
function Uh(a, b) {
  if(2 != a.bb || null != a.da && 2 != a.da || 2 != b) {
    if(null != a.da && 1 != a.da || 1 != b) {
      return
    }
    a.send("tp", "SETUP_ACK")
  }else {
    a.send("tp", "SETUP_ACK_NTPV2")
  }
  a.Ua.ua || a.Ua.sa(!0)
}
function Th(a, b) {
  b > a.da && (a.da = b);
  1 == a.da && (a.Ua.ua || a.lc || a.Ua.sa(!0), a.nc = null)
}
r.ta = function() {
  var a = this.A(), b = ia(a), c = Qh[b];
  "number" == typeof c || (c = 0);
  0 == c && Af(a.postMessage ? a : a.document, "message", Rh, !1, Ph);
  Qh[b] = c + 1;
  this.Ya = !0;
  this.he()
};
r.he = function() {
  var a = 0 == mh(this.m);
  this.lc && a || this.m.va() || this.lb ? this.Mb.stop() : (this.Mb.start(), Vh(this))
};
r.send = function(a, b) {
  var c = this.m.Fa;
  c ? (this.send = function(a, b) {
    var f = this, h = this.m.name;
    this.uc = zg(function() {
      f.uc = 0;
      try {
        var k = c.postMessage ? c : c.document;
        k.postMessage ? (k.postMessage(h + "|" + a + ":" + b, f.re), $g("send(): service\x3d" + a + " payload\x3d" + b + " to hostname\x3d" + f.re)) : Z.log(Ug, "Peer window had no postMessage function.", void 0)
      }catch(l) {
        Z.log(Ug, "Error performing postMessage, ignoring.", l)
      }
    }, 0)
  }, this.send(a, b)) : $g("send(): window not ready")
};
r.ne = function() {
  this.m.Ea(1 == this.bb || 1 == this.da ? 200 : void 0)
};
r.C = function() {
  if(this.Ya) {
    var a = this.A(), b = ia(a), c = Qh[b];
    Qh[b] = c - 1;
    1 == c && Ff(a.postMessage ? a : a.document, "message", Rh, !1, Ph)
  }
  this.uc && (s.clearTimeout(this.uc), this.uc = 0);
  nf(this.$c);
  delete this.$c;
  nf(this.Mb);
  delete this.Mb;
  this.Ta.cancel();
  delete this.Ta;
  this.Ua.cancel();
  delete this.Ua;
  this.Na.cancel();
  delete this.Na;
  delete this.send;
  Ph.la.C.call(this)
};
function Sh(a) {
  a = a.split(",");
  a[1] = a[1] || null;
  return a
}
;function Wh(a, b) {
  kh.call(this, b);
  this.m = a;
  this.yd = a[$.Ce] || "";
  this.ye = a[$.Ee] || "";
  var c = this.A();
  if(!c.nix_setup_complete) {
    var d = "Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport \x3d transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth \x3d auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken \x3d m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport." + Xh + "(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport." + 
    Yh + "(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap \x3d New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper \x3d wrap\nEnd Function";
    try {
      c.execScript(d, "vbscript"), c.nix_setup_complete = !0
    }catch(e) {
      Z.log(Tg, "exception caught while attempting global setup: " + e, void 0)
    }
  }
  this[Xh] = this.mf;
  this[Yh] = this.df
}
qa(Wh, kh);
var Xh = "GCXPC____NIXJS_handle_message", Yh = "GCXPC____NIXJS_create_channel";
r = Wh.prototype;
r.yb = 6;
r.ub = !1;
r.Sa = null;
r.ta = function() {
  0 == mh(this.m) ? this.vd() : this.ud()
};
r.vd = function() {
  if(!this.ub) {
    var a = this.m.sb;
    try {
      a.contentWindow.opener = (0,this.A().GCXPC____NIXVBS_get_wrapper)(this, this.yd), this.ub = !0
    }catch(b) {
      Z.log(Tg, "exception caught while attempting setup: " + b, void 0)
    }
    this.ub || this.A().setTimeout(w(this.vd, this), 100)
  }
};
r.ud = function() {
  if(!this.ub) {
    try {
      var a = this.A().opener;
      if(a && "GCXPC____NIXVBS_container" in a) {
        this.Sa = a;
        if(this.Sa.GetAuthToken() != this.ye) {
          Z.log(Tg, "Invalid auth token from other party", void 0);
          return
        }
        this.Sa.CreateChannel((0,this.A().GCXPC____NIXVBS_get_wrapper)(this, this.yd));
        this.ub = !0;
        this.m.Ea()
      }
    }catch(b) {
      Z.log(Tg, "exception caught while attempting setup: " + b, void 0);
      return
    }
    this.ub || this.A().setTimeout(w(this.ud, this), 100)
  }
};
r.df = function(a) {
  "unknown" == typeof a && "GCXPC____NIXVBS_container" in a || Z.log(Tg, "Invalid NIX channel given to createChannel_", void 0);
  this.Sa = a;
  this.Sa.GetAuthToken() != this.ye ? Z.log(Tg, "Invalid auth token from other party", void 0) : this.m.Ea()
};
r.mf = function(a, b) {
  this.A().setTimeout(w(function() {
    this.m.Ka(a, b)
  }, this), 1)
};
r.send = function(a, b) {
  "unknown" !== typeof this.Sa && Z.log(Tg, "NIX channel not connected", void 0);
  this.Sa.SendMessage(a, b)
};
r.C = function() {
  Wh.la.C.call(this);
  this.Sa = null
};
function Zh(a, b) {
  eh.call(this);
  for(var c = 0, d;d = gh[c];c++) {
    if(d in a && !/^https?:\/\//.test(a[d])) {
      throw Error("URI " + a[d] + " is invalid for field " + d);
    }
  }
  this.r = a;
  this.name = this.r[$.sd] || ih(10);
  this.Aa = b || Dg();
  this.ec = [];
  this.oc = new Ig(this);
  a[$.Va] = a[$.Va] || Zf(this.Aa.A().location.href) + "/robots.txt";
  a[$.Wa] = a[$.Wa] || Zf(a[$.Ub] || "") + "/robots.txt";
  hh[this.name] = this;
  Af(window, "unload", $h);
  Z.info("CrossPageChannel created: " + this.name)
}
qa(Zh, eh);
var ai = /^%*tp$/, bi = /^%+tp$/;
r = Zh.prototype;
r.Oa = null;
r.xa = null;
r.$ = null;
r.pd = 1;
r.va = function() {
  return 2 == this.pd
};
r.Fa = null;
r.sb = null;
function th(a) {
  try {
    return!!a.Fa && !Boolean(a.Fa.closed)
  }catch(b) {
    return!1
  }
}
function ci(a, b, c) {
  Z.info("createPeerIframe()");
  var d = a.r[$.La];
  d || (d = a.r[$.La] = "xpcpeer" + ih(4));
  var e = Dg(b).createElement("IFRAME");
  e.id = e.name = d;
  c ? c(e) : e.style.width = e.style.height = "100%";
  di(a);
  a.xa = new og(void 0, a);
  var f = ei(a);
  Kg(a.oc, e, "load", a.xa.sa, !1, a.xa);
  Ve || We ? window.setTimeout(w(function() {
    b.appendChild(e);
    e.src = f.toString();
    Z.info("peer iframe created (" + d + ")")
  }, a), 1) : (e.src = f.toString(), b.appendChild(e), Z.info("peer iframe created (" + d + ")"))
}
function di(a) {
  a.xa && (a.xa.cancel(), a.xa = null);
  a.ec.length = 0;
  a = a.oc;
  Fa(a.G, Gf);
  a.G.length = 0
}
function ei(a) {
  var b = a.r[$.Ub];
  v(b) && (b = a.r[$.Ub] = new $f(b));
  var c = {};
  c[$.sd] = a.name;
  c[$.Ab] = a.r[$.Ab];
  c[$.xc] = a.r[$.xc];
  a.r[$.wc] && (c[$.Tb] = a.r[$.wc]);
  a.r[$.Va] && (c[$.Wa] = a.r[$.Va]);
  a.r[$.Wa] && (c[$.Va] = a.r[$.Wa]);
  (a = a.r[$.zc]) && (c[$.zc] = 1 == a ? 0 : 1);
  a = b;
  c = Nf(c);
  bg(a);
  a.Ga.set("xpc", c);
  return b
}
r.ta = function(a) {
  this.Xc = a || ca;
  this.xa ? ug(this.xa, this.Sd, null, void 0) : this.Sd()
};
r.Sd = function() {
  Z.info("continueConnection_()");
  this.xa = null;
  this.r[$.La] && (this.sb = v(this.r[$.La]) ? this.Aa.Eb.getElementById(this.r[$.La]) : this.r[$.La]);
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
      if(ga(document.postMessage) || ga(window.postMessage) || Ue && window.postMessage) {
        c = 1
      }else {
        if(Ve) {
          c = 2
        }else {
          if(Ue && this.r[$.Tb]) {
            c = 3
          }else {
            var d;
            if(d = Ue) {
              d = !1;
              try {
                c = window.opener, window.opener = {}, d = sf(window, "opener"), window.opener = c
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
        this.$ = new Ph(this, this.r[$.yc], this.Aa, !!this.r[$.xc], this.r[$.De] || 2);
        break;
      case 6:
        this.$ = new Wh(this, this.Aa);
        break;
      case 2:
        this.$ = new lh(this, this.Aa);
        break;
      case 3:
        this.$ = new Fh(this, this.Aa);
        break;
      case 4:
        this.$ = new nh(this, this.Aa)
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
r.close = function() {
  di(this);
  this.pd = 3;
  nf(this.$);
  this.Xc = this.$ = null;
  nf(this.Oa);
  this.Oa = null;
  Z.info('Channel "' + this.name + '" closed')
};
r.Ea = function(a) {
  this.va() || this.Oa && this.Oa.fe() || (this.pd = 2, Z.info('Channel "' + this.name + '" connected'), nf(this.Oa), a ? (this.Oa = new Ag(this.Xc, a), this.Oa.start()) : (this.Oa = null, this.Xc()))
};
r.ne = Zh.prototype.Ea;
r.send = function(a, b) {
  this.va() ? th(this) ? (ha(b) && (b = Nf(b)), this.$.send(fi(a), b)) : (Z.log(Tg, "Peer has disappeared.", void 0), this.close()) : Z.log(Tg, "Can't send. Channel not connected.", void 0)
};
r.Ka = function(a, b, c) {
  if(this.xa) {
    this.ec.push(w(this.Ka, this, a, b, c))
  }else {
    var d = this.r[$.yc];
    if(/^[\s\xa0]*$/.test(null == c ? "" : String(c)) || /^[\s\xa0]*$/.test(null == d ? "" : String(d)) || c == this.r[$.yc]) {
      if(this.lb) {
        Z.log(Ug, "CrossPageChannel::xpcDeliver(): Disposed.", void 0)
      }else {
        if(a && "tp" != a) {
          if(this.va()) {
            if(a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = bi.test(a) ? a.substring(1) : a, c = this.md[a], c || (this.Xd ? c = {sa:na(this.Xd, a), oe:ha(b)} : (this.cd.log(Ug, 'Unknown service name "' + a + '"', void 0), c = null)), c) {
              var e;
              a: {
                if((d = c.oe) && v(b)) {
                  try {
                    e = Mf(b);
                    break a
                  }catch(f) {
                    this.cd.log(Ug, "Expected JSON payload for " + a + ', was "' + b + '"', void 0);
                    e = null;
                    break a
                  }
                }else {
                  if(!d && !v(b)) {
                    e = Nf(b);
                    break a
                  }
                }
                e = b
              }
              null != e && c.sa(e)
            }
          }else {
            Z.info("CrossPageChannel::xpcDeliver(): Not connected.")
          }
        }else {
          this.$.qd(b)
        }
      }
    }else {
      Z.log(Ug, 'Message received from unapproved origin "' + c + '" - rejected.', void 0)
    }
  }
};
function fi(a) {
  ai.test(a) && (a = "%" + a);
  return a.replace(/[%:|]/g, encodeURIComponent)
}
function mh(a) {
  var b = a.r[$.zc];
  return b ? b : window.parent == a.Fa ? 1 : 0
}
r.C = function() {
  this.close();
  this.sb = this.Fa = null;
  delete hh[this.name];
  nf(this.oc);
  delete this.oc;
  Zh.la.C.call(this)
};
function $h() {
  for(var a in hh) {
    nf(hh[a])
  }
}
;dh("goog.net.XhrIo");
id(Td, X.a(function(a) {
  var b = T.b(a, 0, null);
  a = T.b(a, 1, null);
  return Ad([Nc.c(b.toLowerCase()), a])
}, me.e(Q([Le.c({If:"complete", Of:"success", Jf:"error", Hf:"abort", Mf:"ready", Nf:"readystatechange", TIMEOUT:"timeout", Kf:"incrementaldata", Lf:"progress"})], 0))));
var gi = function() {
  function a(a, b, c, d) {
    if(a ? a.Nd : a) {
      return a.Nd(a, b, c, d)
    }
    var e;
    e = gi[t(null == a ? null : a)];
    if(!e && (e = gi._, !e)) {
      throw A("IConnection.connect", a);
    }
    return e.call(null, a, b, c, d)
  }
  function b(a, b, c) {
    if(a ? a.Md : a) {
      return a.Md(a, b, c)
    }
    var d;
    d = gi[t(null == a ? null : a)];
    if(!d && (d = gi._, !d)) {
      throw A("IConnection.connect", a);
    }
    return d.call(null, a, b, c)
  }
  function c(a, b) {
    if(a ? a.Ld : a) {
      return a.Ld(a, b)
    }
    var c;
    c = gi[t(null == a ? null : a)];
    if(!c && (c = gi._, !c)) {
      throw A("IConnection.connect", a);
    }
    return c.call(null, a, b)
  }
  function d(a) {
    if(a ? a.Kd : a) {
      return a.Kd(a)
    }
    var b;
    b = gi[t(null == a ? null : a)];
    if(!b && (b = gi._, !b)) {
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
  e.b = b;
  e.k = a;
  return e
}(), hi = function() {
  function a(a, b, c, d, e, f) {
    if(a ? a.Ze : a) {
      return a.Ze(a, b, c, d, e, f)
    }
    var u;
    u = hi[t(null == a ? null : a)];
    if(!u && (u = hi._, !u)) {
      throw A("IConnection.transmit", a);
    }
    return u.call(null, a, b, c, d, e, f)
  }
  function b(a, b, c, d, e) {
    if(a ? a.Ye : a) {
      return a.Ye(a, b, c, d, e)
    }
    var f;
    f = hi[t(null == a ? null : a)];
    if(!f && (f = hi._, !f)) {
      throw A("IConnection.transmit", a);
    }
    return f.call(null, a, b, c, d, e)
  }
  function c(a, b, c, d) {
    if(a ? a.Xe : a) {
      return a.Xe(a, b, c, d)
    }
    var e;
    e = hi[t(null == a ? null : a)];
    if(!e && (e = hi._, !e)) {
      throw A("IConnection.transmit", a);
    }
    return e.call(null, a, b, c, d)
  }
  function d(a, b, c) {
    if(a ? a.Od : a) {
      return a.Od(a, b, c)
    }
    var d;
    d = hi[t(null == a ? null : a)];
    if(!d && (d = hi._, !d)) {
      throw A("IConnection.transmit", a);
    }
    return d.call(null, a, b, c)
  }
  function e(a, b) {
    if(a ? a.We : a) {
      return a.We(a, b)
    }
    var c;
    c = hi[t(null == a ? null : a)];
    if(!c && (c = hi._, !c)) {
      throw A("IConnection.transmit", a);
    }
    return c.call(null, a, b)
  }
  var f = null, f = function(f, k, l, m, p, q) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, k);
      case 3:
        return d.call(this, f, k, l);
      case 4:
        return c.call(this, f, k, l, m);
      case 5:
        return b.call(this, f, k, l, m, p);
      case 6:
        return a.call(this, f, k, l, m, p, q)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  f.a = e;
  f.b = d;
  f.k = c;
  f.w = b;
  f.ea = a;
  return f
}(), ii = id(Td, X.a(function(a) {
  var b = T.b(a, 0, null);
  a = T.b(a, 1, null);
  return Ad([Nc.c(b.toLowerCase()), a])
}, Le.c($))), ji = function() {
  function a(a, b, c, h) {
    if(a ? a.Qd : a) {
      return a.Qd(a, b, c, h)
    }
    var k;
    k = ji[t(null == a ? null : a)];
    if(!k && (k = ji._, !k)) {
      throw A("ICrossPageChannel.register-service", a);
    }
    return k.call(null, a, b, c, h)
  }
  function b(a, b, c) {
    if(a ? a.Pd : a) {
      return a.Pd(a, b, c)
    }
    var h;
    h = ji[t(null == a ? null : a)];
    if(!h && (h = ji._, !h)) {
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
  c.b = b;
  c.k = a;
  return c
}();
r = Zh.prototype;
r.Kd = function(a) {
  return gi.a(a, null)
};
r.Ld = function(a, b) {
  return a.ta(b)
};
r.Md = function(a, b, c) {
  return gi.k(a, b, c, document.body)
};
r.Nd = function(a, b, c, d) {
  ci(a, d, c);
  return a.ta(b)
};
r.Od = function(a, b, c) {
  return a.send(Mc(b), c)
};
r.Pd = function(a, b, c) {
  return ji.k(a, b, c, !1)
};
r.Qd = function(a, b, c, d) {
  b = Mc(b);
  a.md[b] = {sa:c, oe:!!d}
};
var ki = function() {
  function a(a) {
    return new Zh(uc.b(function(a, b) {
      var c = T.b(b, 0, null), d = T.b(b, 1, null), c = U.a(ii, c);
      y(c) && (a[c] = d);
      return a
    }, {}, a))
  }
  function b() {
    var a;
    a = (new $f(window.location.href)).Ga.get("xpc");
    return y(a) ? new Zh(Mf(a)) : null
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
  c.l = b;
  c.c = a;
  return c
}();
var li = Be.c(null);
function mi(a) {
  var b = function() {
    try {
      return Ta([x.bf, x.dg, x.cf, "" + B(eval(a))])
    }catch(b) {
      if(b instanceof Error) {
        return Ta([x.bf, x.cg, x.cf, ze.e(Q([b], 0)), x.bg, y(b.hasOwnProperty("stack")) ? b.stack : "No stacktrace available."])
      }
      if(x.p) {
        throw b;
      }
      return null
    }
  }();
  return ze.e(Q([b], 0))
}
Be.c(0);
(function(a) {
  var b = ki.c(Ta([x.hg, a]));
  De.a(li, ed(b));
  ji.b(b, x.eg, function(a) {
    return hi.b(b, x.gg, mi(a))
  });
  return gi.b(b, ed(null), function(a) {
    return a.style.display = "none"
  })
})("http://localhost:9000/repl");
function ni(a) {
  if(a ? a.ac : a) {
    return a.ac()
  }
  var b;
  b = ni[t(null == a ? null : a)];
  if(!b && (b = ni._, !b)) {
    throw A("Channel.close!", a);
  }
  return b.call(null, a)
}
function oi(a) {
  if(a ? a.Te : a) {
    return!0
  }
  var b;
  b = oi[t(null == a ? null : a)];
  if(!b && (b = oi._, !b)) {
    throw A("Handler.active?", a);
  }
  return b.call(null, a)
}
;function pi(a, b, c, d, e) {
  for(var f = 0;;) {
    if(f < e) {
      c[d + f] = a[b + f], f += 1
    }else {
      break
    }
  }
}
function qi(a, b, c, d) {
  this.head = a;
  this.t = b;
  this.length = c;
  this.d = d
}
qi.prototype.pop = function() {
  if(0 === this.length) {
    return null
  }
  var a = this.d[this.t];
  this.d[this.t] = null;
  this.t = (this.t + 1) % this.d.length;
  this.length -= 1;
  return a
};
qi.prototype.unshift = function(a) {
  this.d[this.head] = a;
  this.head = (this.head + 1) % this.d.length;
  this.length += 1;
  return null
};
function ri(a, b) {
  if(a.length + 1 === a.d.length) {
    var c = Array(2 * a.d.length);
    a.t < a.head ? (pi(a.d, a.t, c, 0, a.length), a.t = 0, a.head = a.length, a.d = c) : a.t > a.head ? (pi(a.d, a.t, c, 0, a.d.length - a.t), pi(a.d, 0, c, a.d.length - a.t, a.head), a.t = 0, a.head = a.length, a.d = c) : a.t === a.head && (a.t = 0, a.head = 0, a.d = c)
  }
  a.unshift(b)
}
function si(a, b) {
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
function ti(a) {
  if(!(0 < a)) {
    throw Error([B("Assert failed: "), B("Can't create a ring buffer of size 0"), B("\n"), B(ze.e(Q([Wb(new J(null, "\x3e", "\x3e", -1640531465, null), new J(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new qi(0, 0, 0, Array(a))
}
function ui(a, b) {
  this.R = a;
  this.ke = b;
  this.q = 0;
  this.g = 2
}
ui.prototype.M = function() {
  return this.R.length
};
function vi(a, b, c) {
  if(!Ua(b.R.length === b.ke)) {
    throw Error([B("Assert failed: "), B("Can't add to a full buffer"), B("\n"), B(ze.e(Q([Wb(new J(null, "not", "not", -1640422260, null), Wb(new J("impl", "full?", "impl/full?", -1337857039, null), new J(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  a.R.unshift(c)
}
;var wi = null, xi = ti(32), yi = !1, zi = !1;
function Ai() {
  yi = !0;
  zi = !1;
  for(var a = 0;;) {
    var b = xi.pop();
    if(null != b && (b.l ? b.l() : b.call(null), 1024 > a)) {
      a += 1;
      continue
    }
    break
  }
  yi = !1;
  return 0 < xi.length ? Bi.l ? Bi.l() : Bi.call(null) : null
}
"undefined" !== typeof MessageChannel && (wi = new MessageChannel, wi.port1.onmessage = function() {
  return Ai()
});
function Bi() {
  var a = zi;
  if(y(y(a) ? yi : a)) {
    return null
  }
  zi = !0;
  return"undefined" !== typeof MessageChannel ? wi.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(Ai) : x.p ? setTimeout(Ai, 0) : null
}
function Ci(a) {
  ri(xi, a);
  Bi()
}
;var Di, Fi = function Ei(b) {
  "undefined" === typeof Di && (Di = {}, Di = function(b, d, e) {
    this.ob = b;
    this.kf = d;
    this.rf = e;
    this.q = 0;
    this.g = 393216
  }, Di.cc = !0, Di.bc = "cljs.core.async.impl.ioc-helpers/t14934", Di.Vc = function(b, d) {
    return H(d, "cljs.core.async.impl.ioc-helpers/t14934")
  }, Di.prototype.Te = n(!0), Di.prototype.P = g("rf"), Di.prototype.Q = function(b, d) {
    return new Di(this.ob, this.kf, d)
  });
  return new Di(b, Ei, null)
};
function Gi(a) {
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
function Hi(a, b) {
  var c = b.Ue(Fi(function(b) {
    a[2] = b;
    a[1] = 4;
    return Gi(a)
  }));
  return y(c) ? (a[2] = pb(c), a[1] = 4, x.ag) : null
}
function Ii(a, b) {
  var c = a[4];
  null != b && c.Ve(b, Fi(n(null)));
  c.ac();
  return c
}
;var Ji, Li = function Ki(b) {
  "undefined" === typeof Ji && (Ji = {}, Ji = function(b, d, e) {
    this.K = b;
    this.Ge = d;
    this.qf = e;
    this.q = 0;
    this.g = 425984
  }, Ji.cc = !0, Ji.bc = "cljs.core.async.impl.channels/t14923", Ji.Vc = function(b, d) {
    return H(d, "cljs.core.async.impl.channels/t14923")
  }, Ji.prototype.Fc = g("K"), Ji.prototype.P = g("qf"), Ji.prototype.Q = function(b, d) {
    return new Ji(this.K, this.Ge, d)
  });
  return new Ji(b, Ki, null)
};
function Mi(a, b) {
  this.rb = a;
  this.K = b
}
function Ni(a) {
  return oi(a.rb)
}
function Oi(a, b, c, d, e, f) {
  this.Qb = a;
  this.gc = b;
  this.qc = c;
  this.fc = d;
  this.R = e;
  this.closed = f
}
Oi.prototype.ac = function() {
  if(!this.closed) {
    for(this.closed = !0;;) {
      var a = this.Qb.pop();
      if(null != a) {
        Ci(function(a) {
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
Oi.prototype.Ue = function(a) {
  var b = null != this.R;
  if(b ? 0 < S(this.R) : b) {
    return Li(this.R.R.pop())
  }
  for(;;) {
    b = this.qc.pop();
    if(null != b) {
      return a = b.K, Ci(b.rb.ob), Li(a)
    }
    if(this.closed) {
      return Li(null)
    }
    64 < this.gc ? (this.gc = 0, si(this.Qb, oi)) : this.gc += 1;
    if(!(1024 > this.Qb.length)) {
      throw Error([B("Assert failed: "), B([B("No more than "), B(1024), B(" pending takes are allowed on a single channel.")].join("")), B("\n"), B(ze.e(Q([Wb(new J(null, "\x3c", "\x3c", -1640531467, null), Wb(new J(null, ".-length", ".-length", 1395928862, null), new J(null, "takes", "takes", -1530407291, null)), new J("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
    }
    ri(this.Qb, a);
    return null
  }
};
Oi.prototype.Ve = function(a, b) {
  var c = this;
  if(null == a) {
    throw Error([B("Assert failed: "), B("Can't put nil in on a channel"), B("\n"), B(ze.e(Q([Wb(new J(null, "not", "not", -1640422260, null), Wb(new J(null, "nil?", "nil?", -1637150201, null), new J(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  var d = c.closed;
  if(d && d) {
    Li(null)
  }else {
    for(;;) {
      d = c.Qb.pop();
      if(null != d) {
        var e = b.ob;
        Ci(function(b) {
          return function() {
            return b.c ? b.c(a) : b.call(null, a)
          }
        }(d.ob, e, d))
      }else {
        if(function() {
          var a = null == c.R;
          return a ? a : c.R.R.length === c.R.ke
        }()) {
          64 < c.fc ? (c.fc = 0, si(c.qc, Ni)) : c.fc += 1;
          if(!(1024 > c.qc.length)) {
            throw Error([B("Assert failed: "), B([B("No more than "), B(1024), B(" pending puts are allowed on a single channel."), B(" Consider using a windowed buffer.")].join("")), B("\n"), B(ze.e(Q([Wb(new J(null, "\x3c", "\x3c", -1640531467, null), Wb(new J(null, ".-length", ".-length", 1395928862, null), new J(null, "puts", "puts", -1637078787, null)), new J("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
          }
          ri(c.qc, new Mi(b, a));
          break
        }
        e = b.ob;
        vi(c.R, c.R, a)
      }
      Li(null);
      break
    }
  }
};
function Pi(a) {
  return new Oi(ti(32), 0, ti(32), 0, a, null)
}
;var Qi = function() {
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
  c.l = b;
  c.c = a;
  return c
}();
function Ri(a, b, c) {
  this.key = a;
  this.K = b;
  this.forward = c;
  this.q = 0;
  this.g = 2155872256
}
Ri.prototype.F = function(a, b, c) {
  return Y(b, ye, "[", " ", "]", c, a)
};
Ri.prototype.B = function() {
  return Wb.e(Q([this.key, this.K], 0))
};
var Si = function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for(var h = 0;;) {
      if(h < c.length) {
        c[h] = null, h += 1
      }else {
        break
      }
    }
    return new Ri(a, b, c)
  }
  function b(a) {
    return c.b(null, null, a)
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
  c.b = a;
  return c
}(), Ti = function() {
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
    return c.k(a, b, f, null)
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
  c.b = b;
  c.k = a;
  return c
}();
function Ui(a, b) {
  this.Qa = a;
  this.ia = b;
  this.q = 0;
  this.g = 2155872256
}
Ui.prototype.F = function(a, b, c) {
  return Y(b, function(a) {
    return Y(b, ye, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Ui.prototype.B = function() {
  var a = function c(a) {
    return new Oc(null, function() {
      return null == a ? null : R(Ad([a.key, a.K]), c(a.forward[0]))
    }, null, null)
  };
  return a.c ? a.c(this.Qa.forward[0]) : a.call(null, this.Qa.forward[0])
};
Ui.prototype.put = function(a, b) {
  var c = Array(15), d = Ti.k(this.Qa, a, this.ia, c).forward[0], e = null != d;
  if(e ? d.key === a : e) {
    return d.K = b
  }
  d = Qi.l();
  if(d > this.ia) {
    for(e = this.ia + 1;;) {
      if(e <= d + 1) {
        c[e] = this.Qa, e += 1
      }else {
        break
      }
    }
    this.ia = d
  }
  for(d = Si.b(a, b, Array(d));;) {
    return 0 <= this.ia ? (c = c[0].forward, d.forward[0] = c[0], c[0] = d) : null
  }
};
Ui.prototype.remove = function(a) {
  var b = this, c = Array(15), d = Ti.k(b.Qa, a, b.ia, c).forward[0];
  if(function() {
    var b = null != d;
    return b ? d.key === a : b
  }()) {
    for(var e = 0;;) {
      if(e <= b.ia) {
        var f = c[e].forward;
        f[e] === d && (f[e] = d.forward[e]);
        e += 1
      }else {
        break
      }
    }
    for(;;) {
      if(function() {
        var a = 0 < b.ia;
        return a ? null == b.Qa.forward[b.ia] : a
      }()) {
        b.ia -= 1
      }else {
        return null
      }
    }
  }else {
    return null
  }
};
function Vi(a) {
  for(var b = Wi, c = b.Qa, d = b.ia;;) {
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
var Wi = new Ui(Si.c(0), 0);
function Xi() {
  var a = (new Date).valueOf() + 50, b = Vi(a), b = y(y(b) ? b.key < a + 10 : b) ? b.K : null;
  if(y(b)) {
    return b
  }
  var c = Pi(null);
  Wi.put(a, c);
  setTimeout(function() {
    Wi.remove(a);
    return ni(c)
  }, 50);
  return c
}
;var Yi = function() {
  function a(a) {
    a = Qb.a(a, 0) ? null : a;
    return Pi("number" === typeof a ? new ui(ti(a), a) : a)
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
  c.l = b;
  c.c = a;
  return c
}();
var Zi = new W(null, "r", "r"), $i = new W(null, "recur", "recur"), aj = new W(null, "col", "col"), bj = new W(null, "heading", "heading"), cj = new W(null, "coords", "coords"), dj = new W(null, "else", "else"), ej = new W(null, "delta", "delta"), fj = new W(null, "id", "id");
var gj = 0.0010 * Math.PI;
function hj() {
  return Ta([cj, Ad([Bc(1E3), Bc(1E3)])])
}
function ij(a) {
  return Ta([ej, 50 * (0.05 + 0.1 * Ac.l()), bj, 2 * Ac.l() * Math.PI, Zi, 1, fj, a])
}
function jj(a) {
  return 1E3 <= a ? a - 1E3 : 0 > a ? 1E3 - -1 * a : dj ? a : null
}
var kj = re.a(Math.sin, Math.cos);
function lj(a, b) {
  var c = qc(a) ? V.a(bc, a) : a, d = U.a(c, bj), e = U.a(c, ej), c = qc(b) ? V.a(bc, b) : b, f = U.a(c, cj), d = X.a(function(a) {
    return e * a
  }, kj.c ? kj.c(d) : kj.call(null, d)), d = X.a(jj, X.b(wc, d, f));
  return cc.b(c, cj, d)
}
(function(a) {
  var b = Be.c(Td);
  return function() {
    function c(a) {
      var b = null;
      0 < arguments.length && (b = Q(Array.prototype.slice.call(arguments, 0), 0));
      return d.call(this, b)
    }
    function d(c) {
      var d = U.a(pb(b), c);
      if(y(d)) {
        return d
      }
      d = V.a(a, c);
      De.k(b, cc, c, d);
      return d
    }
    c.j = 0;
    c.f = function(a) {
      a = L(a);
      return d(a)
    };
    c.e = d;
    return c
  }()
})(function(a, b) {
  return Math.sqrt.c ? Math.sqrt.c(V.a(wc, X.a(function(a) {
    return Math.pow.a ? Math.pow.a(a, 2) : Math.pow.call(null, a, 2)
  }, X.b(xc, cj.call(null, a), cj.call(null, b))))) : Math.sqrt.call(null, V.a(wc, X.a(function(a) {
    return Math.pow.a ? Math.pow.a(a, 2) : Math.pow.call(null, a, 2)
  }, X.b(xc, cj.call(null, a), cj.call(null, b)))))
});
function mj(a) {
  var b = function(a) {
    return function(b) {
      return zc(M(b), a)
    }
  }(80), b = re.a(b, function(a) {
    return function(b) {
      a: {
        for(;;) {
          var e = P(b);
          if(null != e) {
            b = e
          }else {
            b = M(b);
            break a
          }
        }
        b = void 0
      }
      return zc(b, a)
    }
  }(80, b));
  return X.a(b, X.a(cj, a))
}
function nj(a, b, c) {
  return jd.b(cc.b(a, aj, c), Ad([bj]), fd.a(wc, gj))
}
function oj() {
  initWorld(1E3, He(oe(function(a) {
    return 1E3 >= a
  }, hd(function(a) {
    return a + 80
  }, 0))))
}
function pj() {
  oj();
  var a = Yi.c(1);
  Ci(function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for(;;) {
              var e = a(c);
              if(!Lc(e, $i)) {
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
          h.l = c;
          h.c = b;
          return h
        }()
      }(function(a) {
        var b = a[1];
        if(4 === b) {
          var c = a[5], h = a[6], b = a[2], k = c, l = mj(c), k = X.k(nj, h, k, l), c = X.b(lj, h, c);
          a[5] = c;
          a[6] = k;
          a[7] = b;
          a[2] = null;
          a[1] = 2;
          return $i
        }
        return 3 === b ? (b = a[2], Ii(a, b)) : 2 === b ? (c = a[5], h = a[6], b = X.b(me, c, h), b = drawBirds(He(X.a(He, b))), c = Xi(), a[8] = b, Hi(a, c)) : 1 === b ? (b = qe.c(1E3), b = X.a(ij, b), b = Bd(b), c = X.a(hj, b), a[5] = c, a[6] = b, a[2] = null, a[1] = 2, $i) : null
      })
    }(), c = function() {
      var c = b.l ? b.l() : b.call(null);
      c[4] = a;
      return c
    }();
    return Gi(c)
  });
  return a
}
jQuery(document).ng(function() {
  return pj()
});
