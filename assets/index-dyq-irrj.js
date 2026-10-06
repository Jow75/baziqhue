(function () {
  const Y = document.createElement("link").relList;
  if (Y && Y.supports && Y.supports("modulepreload")) return;
  for (const N of document.querySelectorAll('link[rel="modulepreload"]')) d(N);
  new MutationObserver((N) => {
    for (const H of N)
      if (H.type === "childList")
        for (const U of H.addedNodes)
          U.tagName === "LINK" && U.rel === "modulepreload" && d(U);
  }).observe(document, { childList: !0, subtree: !0 });
  function q(N) {
    const H = {};
    return (
      N.integrity && (H.integrity = N.integrity),
      N.referrerPolicy && (H.referrerPolicy = N.referrerPolicy),
      N.crossOrigin === "use-credentials"
        ? (H.credentials = "include")
        : N.crossOrigin === "anonymous"
          ? (H.credentials = "omit")
          : (H.credentials = "same-origin"),
      H
    );
  }
  function d(N) {
    if (N.ep) return;
    N.ep = !0;
    const H = q(N);
    fetch(N.href, H);
  }
})();
function Od(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default")
    ? p.default
    : p;
}
var ff = { exports: {} },
  jn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pd;
function lh() {
  if (pd) return jn;
  pd = 1;
  var p = Symbol.for("react.transitional.element"),
    Y = Symbol.for("react.fragment");
  function q(d, N, H) {
    var U = null;
    if (
      (H !== void 0 && (U = "" + H),
      N.key !== void 0 && (U = "" + N.key),
      "key" in N)
    ) {
      H = {};
      for (var ot in N) ot !== "key" && (H[ot] = N[ot]);
    } else H = N;
    return (
      (N = H.ref),
      { $$typeof: p, type: d, key: U, ref: N !== void 0 ? N : null, props: H }
    );
  }
  return ((jn.Fragment = Y), (jn.jsx = q), (jn.jsxs = q), jn);
}
var xd;
function eh() {
  return (xd || ((xd = 1), (ff.exports = lh())), ff.exports);
}
var c = eh(),
  sf = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bd;
function ah() {
  if (bd) return G;
  bd = 1;
  var p = Symbol.for("react.transitional.element"),
    Y = Symbol.for("react.portal"),
    q = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    N = Symbol.for("react.profiler"),
    H = Symbol.for("react.consumer"),
    U = Symbol.for("react.context"),
    ot = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    F = Symbol.for("react.lazy"),
    B = Symbol.for("react.activity"),
    rt = Symbol.iterator;
  function Bt(r) {
    return r === null || typeof r != "object"
      ? null
      : ((r = (rt && r[rt]) || r["@@iterator"]),
        typeof r == "function" ? r : null);
  }
  var Ut = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    wt = Object.assign,
    Ol = {};
  function Ft(r, j, A) {
    ((this.props = r),
      (this.context = j),
      (this.refs = Ol),
      (this.updater = A || Ut));
  }
  ((Ft.prototype.isReactComponent = {}),
    (Ft.prototype.setState = function (r, j) {
      if (typeof r != "object" && typeof r != "function" && r != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, r, j, "setState");
    }),
    (Ft.prototype.forceUpdate = function (r) {
      this.updater.enqueueForceUpdate(this, r, "forceUpdate");
    }));
  function $l() {}
  $l.prototype = Ft.prototype;
  function Ct(r, j, A) {
    ((this.props = r),
      (this.context = j),
      (this.refs = Ol),
      (this.updater = A || Ut));
  }
  var fl = (Ct.prototype = new $l());
  ((fl.constructor = Ct), wt(fl, Ft.prototype), (fl.isPureReactComponent = !0));
  var jl = Array.isArray;
  function Qt() {}
  var W = { H: null, A: null, T: null, S: null },
    Xt = Object.prototype.hasOwnProperty;
  function El(r, j, A) {
    var M = A.ref;
    return {
      $$typeof: p,
      type: r,
      key: j,
      ref: M !== void 0 ? M : null,
      props: A,
    };
  }
  function Le(r, j) {
    return El(r.type, j, r.props);
  }
  function Tl(r) {
    return typeof r == "object" && r !== null && r.$$typeof === p;
  }
  function Zt(r) {
    var j = { "=": "=0", ":": "=2" };
    return (
      "$" +
      r.replace(/[=:]/g, function (A) {
        return j[A];
      })
    );
  }
  var je = /\/+/g;
  function Dl(r, j) {
    return typeof r == "object" && r !== null && r.key != null
      ? Zt("" + r.key)
      : j.toString(36);
  }
  function xl(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (
          (typeof r.status == "string"
            ? r.then(Qt, Qt)
            : ((r.status = "pending"),
              r.then(
                function (j) {
                  r.status === "pending" &&
                    ((r.status = "fulfilled"), (r.value = j));
                },
                function (j) {
                  r.status === "pending" &&
                    ((r.status = "rejected"), (r.reason = j));
                },
              )),
          r.status)
        ) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
        }
    }
    throw r;
  }
  function b(r, j, A, M, Q) {
    var L = typeof r;
    (L === "undefined" || L === "boolean") && (r = null);
    var lt = !1;
    if (r === null) lt = !0;
    else
      switch (L) {
        case "bigint":
        case "string":
        case "number":
          lt = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case p:
            case Y:
              lt = !0;
              break;
            case F:
              return ((lt = r._init), b(lt(r._payload), j, A, M, Q));
          }
      }
    if (lt)
      return (
        (Q = Q(r)),
        (lt = M === "" ? "." + Dl(r, 0) : M),
        jl(Q)
          ? ((A = ""),
            lt != null && (A = lt.replace(je, "$&/") + "/"),
            b(Q, j, A, "", function (Ma) {
              return Ma;
            }))
          : Q != null &&
            (Tl(Q) &&
              (Q = Le(
                Q,
                A +
                  (Q.key == null || (r && r.key === Q.key)
                    ? ""
                    : ("" + Q.key).replace(je, "$&/") + "/") +
                  lt,
              )),
            j.push(Q)),
        1
      );
    lt = 0;
    var qt = M === "" ? "." : M + ":";
    if (jl(r))
      for (var gt = 0; gt < r.length; gt++)
        ((M = r[gt]), (L = qt + Dl(M, gt)), (lt += b(M, j, A, L, Q)));
    else if (((gt = Bt(r)), typeof gt == "function"))
      for (r = gt.call(r), gt = 0; !(M = r.next()).done;)
        ((M = M.value), (L = qt + Dl(M, gt++)), (lt += b(M, j, A, L, Q)));
    else if (L === "object") {
      if (typeof r.then == "function") return b(xl(r), j, A, M, Q);
      throw (
        (j = String(r)),
        Error(
          "Objects are not valid as a React child (found: " +
            (j === "[object Object]"
              ? "object with keys {" + Object.keys(r).join(", ") + "}"
              : j) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return lt;
  }
  function T(r, j, A) {
    if (r == null) return r;
    var M = [],
      Q = 0;
    return (
      b(r, M, "", "", function (L) {
        return j.call(A, L, Q++);
      }),
      M
    );
  }
  function w(r) {
    if (r._status === -1) {
      var j = r._result;
      ((j = j()),
        j.then(
          function (A) {
            (r._status === 0 || r._status === -1) &&
              ((r._status = 1), (r._result = A));
          },
          function (A) {
            (r._status === 0 || r._status === -1) &&
              ((r._status = 2), (r._result = A));
          },
        ),
        r._status === -1 && ((r._status = 0), (r._result = j)));
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var nt =
      typeof reportError == "function"
        ? reportError
        : function (r) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var j = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof r == "object" &&
                  r !== null &&
                  typeof r.message == "string"
                    ? String(r.message)
                    : String(r),
                error: r,
              });
              if (!window.dispatchEvent(j)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", r);
              return;
            }
            console.error(r);
          },
    ft = {
      map: T,
      forEach: function (r, j, A) {
        T(
          r,
          function () {
            j.apply(this, arguments);
          },
          A,
        );
      },
      count: function (r) {
        var j = 0;
        return (
          T(r, function () {
            j++;
          }),
          j
        );
      },
      toArray: function (r) {
        return (
          T(r, function (j) {
            return j;
          }) || []
        );
      },
      only: function (r) {
        if (!Tl(r))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return r;
      },
    };
  return (
    (G.Activity = B),
    (G.Children = ft),
    (G.Component = Ft),
    (G.Fragment = q),
    (G.Profiler = N),
    (G.PureComponent = Ct),
    (G.StrictMode = d),
    (G.Suspense = D),
    (G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
    (G.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (r) {
        return W.H.useMemoCache(r);
      },
    }),
    (G.cache = function (r) {
      return function () {
        return r.apply(null, arguments);
      };
    }),
    (G.cacheSignal = function () {
      return null;
    }),
    (G.cloneElement = function (r, j, A) {
      if (r == null)
        throw Error(
          "The argument must be a React element, but you passed " + r + ".",
        );
      var M = wt({}, r.props),
        Q = r.key;
      if (j != null)
        for (L in (j.key !== void 0 && (Q = "" + j.key), j))
          !Xt.call(j, L) ||
            L === "key" ||
            L === "__self" ||
            L === "__source" ||
            (L === "ref" && j.ref === void 0) ||
            (M[L] = j[L]);
      var L = arguments.length - 2;
      if (L === 1) M.children = A;
      else if (1 < L) {
        for (var lt = Array(L), qt = 0; qt < L; qt++)
          lt[qt] = arguments[qt + 2];
        M.children = lt;
      }
      return El(r.type, Q, M);
    }),
    (G.createContext = function (r) {
      return (
        (r = {
          $$typeof: U,
          _currentValue: r,
          _currentValue2: r,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (r.Provider = r),
        (r.Consumer = { $$typeof: H, _context: r }),
        r
      );
    }),
    (G.createElement = function (r, j, A) {
      var M,
        Q = {},
        L = null;
      if (j != null)
        for (M in (j.key !== void 0 && (L = "" + j.key), j))
          Xt.call(j, M) &&
            M !== "key" &&
            M !== "__self" &&
            M !== "__source" &&
            (Q[M] = j[M]);
      var lt = arguments.length - 2;
      if (lt === 1) Q.children = A;
      else if (1 < lt) {
        for (var qt = Array(lt), gt = 0; gt < lt; gt++)
          qt[gt] = arguments[gt + 2];
        Q.children = qt;
      }
      if (r && r.defaultProps)
        for (M in ((lt = r.defaultProps), lt))
          Q[M] === void 0 && (Q[M] = lt[M]);
      return El(r, L, Q);
    }),
    (G.createRef = function () {
      return { current: null };
    }),
    (G.forwardRef = function (r) {
      return { $$typeof: ot, render: r };
    }),
    (G.isValidElement = Tl),
    (G.lazy = function (r) {
      return { $$typeof: F, _payload: { _status: -1, _result: r }, _init: w };
    }),
    (G.memo = function (r, j) {
      return { $$typeof: E, type: r, compare: j === void 0 ? null : j };
    }),
    (G.startTransition = function (r) {
      var j = W.T,
        A = {};
      W.T = A;
      try {
        var M = r(),
          Q = W.S;
        (Q !== null && Q(A, M),
          typeof M == "object" &&
            M !== null &&
            typeof M.then == "function" &&
            M.then(Qt, nt));
      } catch (L) {
        nt(L);
      } finally {
        (j !== null && A.types !== null && (j.types = A.types), (W.T = j));
      }
    }),
    (G.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    (G.use = function (r) {
      return W.H.use(r);
    }),
    (G.useActionState = function (r, j, A) {
      return W.H.useActionState(r, j, A);
    }),
    (G.useCallback = function (r, j) {
      return W.H.useCallback(r, j);
    }),
    (G.useContext = function (r) {
      return W.H.useContext(r);
    }),
    (G.useDebugValue = function () {}),
    (G.useDeferredValue = function (r, j) {
      return W.H.useDeferredValue(r, j);
    }),
    (G.useEffect = function (r, j) {
      return W.H.useEffect(r, j);
    }),
    (G.useEffectEvent = function (r) {
      return W.H.useEffectEvent(r);
    }),
    (G.useId = function () {
      return W.H.useId();
    }),
    (G.useImperativeHandle = function (r, j, A) {
      return W.H.useImperativeHandle(r, j, A);
    }),
    (G.useInsertionEffect = function (r, j) {
      return W.H.useInsertionEffect(r, j);
    }),
    (G.useLayoutEffect = function (r, j) {
      return W.H.useLayoutEffect(r, j);
    }),
    (G.useMemo = function (r, j) {
      return W.H.useMemo(r, j);
    }),
    (G.useOptimistic = function (r, j) {
      return W.H.useOptimistic(r, j);
    }),
    (G.useReducer = function (r, j, A) {
      return W.H.useReducer(r, j, A);
    }),
    (G.useRef = function (r) {
      return W.H.useRef(r);
    }),
    (G.useState = function (r) {
      return W.H.useState(r);
    }),
    (G.useSyncExternalStore = function (r, j, A) {
      return W.H.useSyncExternalStore(r, j, A);
    }),
    (G.useTransition = function () {
      return W.H.useTransition();
    }),
    (G.version = "19.2.3"),
    G
  );
}
var Sd;
function hf() {
  return (Sd || ((Sd = 1), (sf.exports = ah())), sf.exports);
}
var Gt = hf();
const nh = Od(Gt);
var of = { exports: {} },
  En = {},
  rf = { exports: {} },
  df = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd;
function uh() {
  return (
    zd ||
      ((zd = 1),
      (function (p) {
        function Y(b, T) {
          var w = b.length;
          b.push(T);
          t: for (; 0 < w;) {
            var nt = (w - 1) >>> 1,
              ft = b[nt];
            if (0 < N(ft, T)) ((b[nt] = T), (b[w] = ft), (w = nt));
            else break t;
          }
        }
        function q(b) {
          return b.length === 0 ? null : b[0];
        }
        function d(b) {
          if (b.length === 0) return null;
          var T = b[0],
            w = b.pop();
          if (w !== T) {
            b[0] = w;
            t: for (var nt = 0, ft = b.length, r = ft >>> 1; nt < r;) {
              var j = 2 * (nt + 1) - 1,
                A = b[j],
                M = j + 1,
                Q = b[M];
              if (0 > N(A, w))
                M < ft && 0 > N(Q, A)
                  ? ((b[nt] = Q), (b[M] = w), (nt = M))
                  : ((b[nt] = A), (b[j] = w), (nt = j));
              else if (M < ft && 0 > N(Q, w))
                ((b[nt] = Q), (b[M] = w), (nt = M));
              else break t;
            }
          }
          return T;
        }
        function N(b, T) {
          var w = b.sortIndex - T.sortIndex;
          return w !== 0 ? w : b.id - T.id;
        }
        if (
          ((p.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var H = performance;
          p.unstable_now = function () {
            return H.now();
          };
        } else {
          var U = Date,
            ot = U.now();
          p.unstable_now = function () {
            return U.now() - ot;
          };
        }
        var D = [],
          E = [],
          F = 1,
          B = null,
          rt = 3,
          Bt = !1,
          Ut = !1,
          wt = !1,
          Ol = !1,
          Ft = typeof setTimeout == "function" ? setTimeout : null,
          $l = typeof clearTimeout == "function" ? clearTimeout : null,
          Ct = typeof setImmediate < "u" ? setImmediate : null;
        function fl(b) {
          for (var T = q(E); T !== null;) {
            if (T.callback === null) d(E);
            else if (T.startTime <= b)
              (d(E), (T.sortIndex = T.expirationTime), Y(D, T));
            else break;
            T = q(E);
          }
        }
        function jl(b) {
          if (((wt = !1), fl(b), !Ut))
            if (q(D) !== null) ((Ut = !0), Qt || ((Qt = !0), Zt()));
            else {
              var T = q(E);
              T !== null && xl(jl, T.startTime - b);
            }
        }
        var Qt = !1,
          W = -1,
          Xt = 5,
          El = -1;
        function Le() {
          return Ol ? !0 : !(p.unstable_now() - El < Xt);
        }
        function Tl() {
          if (((Ol = !1), Qt)) {
            var b = p.unstable_now();
            El = b;
            var T = !0;
            try {
              t: {
                ((Ut = !1), wt && ((wt = !1), $l(W), (W = -1)), (Bt = !0));
                var w = rt;
                try {
                  l: {
                    for (
                      fl(b), B = q(D);
                      B !== null && !(B.expirationTime > b && Le());
                    ) {
                      var nt = B.callback;
                      if (typeof nt == "function") {
                        ((B.callback = null), (rt = B.priorityLevel));
                        var ft = nt(B.expirationTime <= b);
                        if (((b = p.unstable_now()), typeof ft == "function")) {
                          ((B.callback = ft), fl(b), (T = !0));
                          break l;
                        }
                        (B === q(D) && d(D), fl(b));
                      } else d(D);
                      B = q(D);
                    }
                    if (B !== null) T = !0;
                    else {
                      var r = q(E);
                      (r !== null && xl(jl, r.startTime - b), (T = !1));
                    }
                  }
                  break t;
                } finally {
                  ((B = null), (rt = w), (Bt = !1));
                }
                T = void 0;
              }
            } finally {
              T ? Zt() : (Qt = !1);
            }
          }
        }
        var Zt;
        if (typeof Ct == "function")
          Zt = function () {
            Ct(Tl);
          };
        else if (typeof MessageChannel < "u") {
          var je = new MessageChannel(),
            Dl = je.port2;
          ((je.port1.onmessage = Tl),
            (Zt = function () {
              Dl.postMessage(null);
            }));
        } else
          Zt = function () {
            Ft(Tl, 0);
          };
        function xl(b, T) {
          W = Ft(function () {
            b(p.unstable_now());
          }, T);
        }
        ((p.unstable_IdlePriority = 5),
          (p.unstable_ImmediatePriority = 1),
          (p.unstable_LowPriority = 4),
          (p.unstable_NormalPriority = 3),
          (p.unstable_Profiling = null),
          (p.unstable_UserBlockingPriority = 2),
          (p.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (p.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Xt = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (p.unstable_getCurrentPriorityLevel = function () {
            return rt;
          }),
          (p.unstable_next = function (b) {
            switch (rt) {
              case 1:
              case 2:
              case 3:
                var T = 3;
                break;
              default:
                T = rt;
            }
            var w = rt;
            rt = T;
            try {
              return b();
            } finally {
              rt = w;
            }
          }),
          (p.unstable_requestPaint = function () {
            Ol = !0;
          }),
          (p.unstable_runWithPriority = function (b, T) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var w = rt;
            rt = b;
            try {
              return T();
            } finally {
              rt = w;
            }
          }),
          (p.unstable_scheduleCallback = function (b, T, w) {
            var nt = p.unstable_now();
            switch (
              (typeof w == "object" && w !== null
                ? ((w = w.delay),
                  (w = typeof w == "number" && 0 < w ? nt + w : nt))
                : (w = nt),
              b)
            ) {
              case 1:
                var ft = -1;
                break;
              case 2:
                ft = 250;
                break;
              case 5:
                ft = 1073741823;
                break;
              case 4:
                ft = 1e4;
                break;
              default:
                ft = 5e3;
            }
            return (
              (ft = w + ft),
              (b = {
                id: F++,
                callback: T,
                priorityLevel: b,
                startTime: w,
                expirationTime: ft,
                sortIndex: -1,
              }),
              w > nt
                ? ((b.sortIndex = w),
                  Y(E, b),
                  q(D) === null &&
                    b === q(E) &&
                    (wt ? ($l(W), (W = -1)) : (wt = !0), xl(jl, w - nt)))
                : ((b.sortIndex = ft),
                  Y(D, b),
                  Ut || Bt || ((Ut = !0), Qt || ((Qt = !0), Zt()))),
              b
            );
          }),
          (p.unstable_shouldYield = Le),
          (p.unstable_wrapCallback = function (b) {
            var T = rt;
            return function () {
              var w = rt;
              rt = T;
              try {
                return b.apply(this, arguments);
              } finally {
                rt = w;
              }
            };
          }));
      })(df)),
    df
  );
}
var jd;
function ih() {
  return (jd || ((jd = 1), (rf.exports = uh())), rf.exports);
}
var mf = { exports: {} },
  Ht = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ed;
function ch() {
  if (Ed) return Ht;
  Ed = 1;
  var p = hf();
  function Y(D) {
    var E = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var F = 2; F < arguments.length; F++)
        E += "&args[]=" + encodeURIComponent(arguments[F]);
    }
    return (
      "Minified React error #" +
      D +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function q() {}
  var d = {
      d: {
        f: q,
        r: function () {
          throw Error(Y(522));
        },
        D: q,
        C: q,
        L: q,
        m: q,
        X: q,
        S: q,
        M: q,
      },
      p: 0,
      findDOMNode: null,
    },
    N = Symbol.for("react.portal");
  function H(D, E, F) {
    var B =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: N,
      key: B == null ? null : "" + B,
      children: D,
      containerInfo: E,
      implementation: F,
    };
  }
  var U = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ot(D, E) {
    if (D === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d),
    (Ht.createPortal = function (D, E) {
      var F =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(Y(299));
      return H(D, E, null, F);
    }),
    (Ht.flushSync = function (D) {
      var E = U.T,
        F = d.p;
      try {
        if (((U.T = null), (d.p = 2), D)) return D();
      } finally {
        ((U.T = E), (d.p = F), d.d.f());
      }
    }),
    (Ht.preconnect = function (D, E) {
      typeof D == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        d.d.C(D, E));
    }),
    (Ht.prefetchDNS = function (D) {
      typeof D == "string" && d.d.D(D);
    }),
    (Ht.preinit = function (D, E) {
      if (typeof D == "string" && E && typeof E.as == "string") {
        var F = E.as,
          B = ot(F, E.crossOrigin),
          rt = typeof E.integrity == "string" ? E.integrity : void 0,
          Bt = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        F === "style"
          ? d.d.S(D, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: B,
              integrity: rt,
              fetchPriority: Bt,
            })
          : F === "script" &&
            d.d.X(D, {
              crossOrigin: B,
              integrity: rt,
              fetchPriority: Bt,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (Ht.preinitModule = function (D, E) {
      if (typeof D == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var F = ot(E.as, E.crossOrigin);
            d.d.M(D, {
              crossOrigin: F,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && d.d.M(D);
    }),
    (Ht.preload = function (D, E) {
      if (
        typeof D == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var F = E.as,
          B = ot(F, E.crossOrigin);
        d.d.L(D, F, {
          crossOrigin: B,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (Ht.preloadModule = function (D, E) {
      if (typeof D == "string")
        if (E) {
          var F = ot(E.as, E.crossOrigin);
          d.d.m(D, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: F,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else d.d.m(D);
    }),
    (Ht.requestFormReset = function (D) {
      d.d.r(D);
    }),
    (Ht.unstable_batchedUpdates = function (D, E) {
      return D(E);
    }),
    (Ht.useFormState = function (D, E, F) {
      return U.H.useFormState(D, E, F);
    }),
    (Ht.useFormStatus = function () {
      return U.H.useHostTransitionStatus();
    }),
    (Ht.version = "19.2.3"),
    Ht
  );
}
var Td;
function fh() {
  if (Td) return mf.exports;
  Td = 1;
  function p() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (Y) {
        console.error(Y);
      }
  }
  return (p(), (mf.exports = ch()), mf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ad;
function sh() {
  if (Ad) return En;
  Ad = 1;
  var p = ih(),
    Y = hf(),
    q = fh();
  function d(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        l += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      l +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function N(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function H(t) {
    var l = t,
      e = t;
    if (t.alternate) for (; l.return;) l = l.return;
    else {
      t = l;
      do ((l = t), (l.flags & 4098) !== 0 && (e = l.return), (t = l.return));
      while (t);
    }
    return l.tag === 3 ? e : null;
  }
  function U(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (
        (l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
        l !== null)
      )
        return l.dehydrated;
    }
    return null;
  }
  function ot(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (
        (l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
        l !== null)
      )
        return l.dehydrated;
    }
    return null;
  }
  function D(t) {
    if (H(t) !== t) throw Error(d(188));
  }
  function E(t) {
    var l = t.alternate;
    if (!l) {
      if (((l = H(t)), l === null)) throw Error(d(188));
      return l !== t ? null : t;
    }
    for (var e = t, a = l; ;) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u;) {
          if (u === e) return (D(n), t);
          if (u === a) return (D(n), l);
          u = u.sibling;
        }
        throw Error(d(188));
      }
      if (e.return !== a.return) ((e = n), (a = u));
      else {
        for (var i = !1, f = n.child; f;) {
          if (f === e) {
            ((i = !0), (e = n), (a = u));
            break;
          }
          if (f === a) {
            ((i = !0), (a = n), (e = u));
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = u.child; f;) {
            if (f === e) {
              ((i = !0), (e = u), (a = n));
              break;
            }
            if (f === a) {
              ((i = !0), (a = u), (e = n));
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(d(189));
        }
      }
      if (e.alternate !== a) throw Error(d(190));
    }
    if (e.tag !== 3) throw Error(d(188));
    return e.stateNode.current === e ? t : l;
  }
  function F(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null;) {
      if (((l = F(t)), l !== null)) return l;
      t = t.sibling;
    }
    return null;
  }
  var B = Object.assign,
    rt = Symbol.for("react.element"),
    Bt = Symbol.for("react.transitional.element"),
    Ut = Symbol.for("react.portal"),
    wt = Symbol.for("react.fragment"),
    Ol = Symbol.for("react.strict_mode"),
    Ft = Symbol.for("react.profiler"),
    $l = Symbol.for("react.consumer"),
    Ct = Symbol.for("react.context"),
    fl = Symbol.for("react.forward_ref"),
    jl = Symbol.for("react.suspense"),
    Qt = Symbol.for("react.suspense_list"),
    W = Symbol.for("react.memo"),
    Xt = Symbol.for("react.lazy"),
    El = Symbol.for("react.activity"),
    Le = Symbol.for("react.memo_cache_sentinel"),
    Tl = Symbol.iterator;
  function Zt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Tl && t[Tl]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var je = Symbol.for("react.client.reference");
  function Dl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === je ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case wt:
        return "Fragment";
      case Ft:
        return "Profiler";
      case Ol:
        return "StrictMode";
      case jl:
        return "Suspense";
      case Qt:
        return "SuspenseList";
      case El:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Ut:
          return "Portal";
        case Ct:
          return t.displayName || "Context";
        case $l:
          return (t._context.displayName || "Context") + ".Consumer";
        case fl:
          var l = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = l.displayName || l.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case W:
          return (
            (l = t.displayName || null),
            l !== null ? l : Dl(t.type) || "Memo"
          );
        case Xt:
          ((l = t._payload), (t = t._init));
          try {
            return Dl(t(l));
          } catch {}
      }
    return null;
  }
  var xl = Array.isArray,
    b = Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    T = q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    w = { pending: !1, data: null, method: null, action: null },
    nt = [],
    ft = -1;
  function r(t) {
    return { current: t };
  }
  function j(t) {
    0 > ft || ((t.current = nt[ft]), (nt[ft] = null), ft--);
  }
  function A(t, l) {
    (ft++, (nt[ft] = t.current), (t.current = l));
  }
  var M = r(null),
    Q = r(null),
    L = r(null),
    lt = r(null);
  function qt(t, l) {
    switch ((A(L, l), A(Q, t), A(M, null), l.nodeType)) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Qr(t) : 0;
        break;
      default:
        if (((t = l.tagName), (l = l.namespaceURI)))
          ((l = Qr(l)), (t = Xr(l, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (j(M), A(M, t));
  }
  function gt() {
    (j(M), j(Q), j(L));
  }
  function Ma(t) {
    t.memoizedState !== null && A(lt, t);
    var l = M.current,
      e = Xr(l, t.type);
    l !== e && (A(Q, t), A(M, e));
  }
  function Tn(t) {
    (Q.current === t && (j(M), j(Q)),
      lt.current === t && (j(lt), (xn._currentValue = w)));
  }
  var Zu, yf;
  function Ee(t) {
    if (Zu === void 0)
      try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        ((Zu = (l && l[1]) || ""),
          (yf =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Zu +
      t +
      yf
    );
  }
  var Lu = !1;
  function Vu(t, l) {
    if (!t || Lu) return "";
    Lu = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (l) {
              var z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(z, []);
                } catch (g) {
                  var y = g;
                }
                Reflect.construct(t, [], z);
              } else {
                try {
                  z.call();
                } catch (g) {
                  y = g;
                }
                t.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                y = g;
              }
              (z = t()) &&
                typeof z.catch == "function" &&
                z.catch(function () {});
            }
          } catch (g) {
            if (g && y && typeof g.stack == "string") return [g.stack, y.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        f = u[1];
      if (i && f) {
        var s = i.split(`
`),
          v = f.split(`
`);
        for (
          n = a = 0;
          a < s.length && !s[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < v.length && !v[n].includes("DetermineComponentFrameRoot");)
          n++;
        if (a === s.length || n === v.length)
          for (
            a = s.length - 1, n = v.length - 1;
            1 <= a && 0 <= n && s[a] !== v[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (s[a] !== v[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || s[a] !== v[n])) {
                  var x =
                    `
` + s[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      x.includes("<anonymous>") &&
                      (x = x.replace("<anonymous>", t.displayName)),
                    x
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((Lu = !1), (Error.prepareStackTrace = e));
    }
    return (e = t ? t.displayName || t.name : "") ? Ee(e) : "";
  }
  function Ud(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ee(t.type);
      case 16:
        return Ee("Lazy");
      case 13:
        return t.child !== l && l !== null
          ? Ee("Suspense Fallback")
          : Ee("Suspense");
      case 19:
        return Ee("SuspenseList");
      case 0:
      case 15:
        return Vu(t.type, !1);
      case 11:
        return Vu(t.type.render, !1);
      case 1:
        return Vu(t.type, !0);
      case 31:
        return Ee("Activity");
      default:
        return "";
    }
  }
  function gf(t) {
    try {
      var l = "",
        e = null;
      do ((l += Ud(t, e)), (e = t), (t = t.return));
      while (t);
      return l;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Ku = Object.prototype.hasOwnProperty,
    Ju = p.unstable_scheduleCallback,
    ku = p.unstable_cancelCallback,
    Cd = p.unstable_shouldYield,
    Hd = p.unstable_requestPaint,
    It = p.unstable_now,
    Rd = p.unstable_getCurrentPriorityLevel,
    pf = p.unstable_ImmediatePriority,
    xf = p.unstable_UserBlockingPriority,
    An = p.unstable_NormalPriority,
    Bd = p.unstable_LowPriority,
    bf = p.unstable_IdlePriority,
    wd = p.log,
    qd = p.unstable_setDisableYieldValue,
    Oa = null,
    Pt = null;
  function Fl(t) {
    if (
      (typeof wd == "function" && qd(t),
      Pt && typeof Pt.setStrictMode == "function")
    )
      try {
        Pt.setStrictMode(Oa, t);
      } catch {}
  }
  var tl = Math.clz32 ? Math.clz32 : Qd,
    Yd = Math.log,
    Gd = Math.LN2;
  function Qd(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Yd(t) / Gd) | 0)) | 0);
  }
  var Nn = 256,
    _n = 262144,
    Mn = 4194304;
  function Te(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function On(t, l, e) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~u),
          a !== 0
            ? (n = Te(a))
            : ((i &= f),
              i !== 0
                ? (n = Te(i))
                : e || ((e = f & ~t), e !== 0 && (n = Te(e)))))
        : ((f = a & ~u),
          f !== 0
            ? (n = Te(f))
            : i !== 0
              ? (n = Te(i))
              : e || ((e = a & ~t), e !== 0 && (n = Te(e)))),
      n === 0
        ? 0
        : l !== 0 &&
            l !== n &&
            (l & u) === 0 &&
            ((u = n & -n),
            (e = l & -l),
            u >= e || (u === 32 && (e & 4194048) !== 0))
          ? l
          : n
    );
  }
  function Da(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function Xd(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Sf() {
    var t = Mn;
    return ((Mn <<= 1), (Mn & 62914560) === 0 && (Mn = 4194304), t);
  }
  function Wu(t) {
    for (var l = [], e = 0; 31 > e; e++) l.push(t);
    return l;
  }
  function Ua(t, l) {
    ((t.pendingLanes |= l),
      l !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Zd(t, l, e, a, n, u) {
    var i = t.pendingLanes;
    ((t.pendingLanes = e),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= e),
      (t.entangledLanes &= e),
      (t.errorRecoveryDisabledLanes &= e),
      (t.shellSuspendCounter = 0));
    var f = t.entanglements,
      s = t.expirationTimes,
      v = t.hiddenUpdates;
    for (e = i & ~e; 0 < e;) {
      var x = 31 - tl(e),
        z = 1 << x;
      ((f[x] = 0), (s[x] = -1));
      var y = v[x];
      if (y !== null)
        for (v[x] = null, x = 0; x < y.length; x++) {
          var g = y[x];
          g !== null && (g.lane &= -536870913);
        }
      e &= ~z;
    }
    (a !== 0 && zf(t, a, 0),
      u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~l)));
  }
  function zf(t, l, e) {
    ((t.pendingLanes |= l), (t.suspendedLanes &= ~l));
    var a = 31 - tl(l);
    ((t.entangledLanes |= l),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (e & 261930)));
  }
  function jf(t, l) {
    var e = (t.entangledLanes |= l);
    for (t = t.entanglements; e;) {
      var a = 31 - tl(e),
        n = 1 << a;
      ((n & l) | (t[a] & l) && (t[a] |= l), (e &= ~n));
    }
  }
  function Ef(t, l) {
    var e = l & -l;
    return (
      (e = (e & 42) !== 0 ? 1 : $u(e)),
      (e & (t.suspendedLanes | l)) !== 0 ? 0 : e
    );
  }
  function $u(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Fu(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Tf() {
    var t = T.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : rd(t.type));
  }
  function Af(t, l) {
    var e = T.p;
    try {
      return ((T.p = t), l());
    } finally {
      T.p = e;
    }
  }
  var Il = Math.random().toString(36).slice(2),
    Nt = "__reactFiber$" + Il,
    Lt = "__reactProps$" + Il,
    Ve = "__reactContainer$" + Il,
    Iu = "__reactEvents$" + Il,
    Ld = "__reactListeners$" + Il,
    Vd = "__reactHandles$" + Il,
    Nf = "__reactResources$" + Il,
    Ca = "__reactMarker$" + Il;
  function Pu(t) {
    (delete t[Nt], delete t[Lt], delete t[Iu], delete t[Ld], delete t[Vd]);
  }
  function Ke(t) {
    var l = t[Nt];
    if (l) return l;
    for (var e = t.parentNode; e;) {
      if ((l = e[Ve] || e[Nt])) {
        if (
          ((e = l.alternate),
          l.child !== null || (e !== null && e.child !== null))
        )
          for (t = Wr(t); t !== null;) {
            if ((e = t[Nt])) return e;
            t = Wr(t);
          }
        return l;
      }
      ((t = e), (e = t.parentNode));
    }
    return null;
  }
  function Je(t) {
    if ((t = t[Nt] || t[Ve])) {
      var l = t.tag;
      if (
        l === 5 ||
        l === 6 ||
        l === 13 ||
        l === 31 ||
        l === 26 ||
        l === 27 ||
        l === 3
      )
        return t;
    }
    return null;
  }
  function Ha(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(d(33));
  }
  function ke(t) {
    var l = t[Nf];
    return (
      l ||
        (l = t[Nf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      l
    );
  }
  function Tt(t) {
    t[Ca] = !0;
  }
  var _f = new Set(),
    Mf = {};
  function Ae(t, l) {
    (We(t, l), We(t + "Capture", l));
  }
  function We(t, l) {
    for (Mf[t] = l, t = 0; t < l.length; t++) _f.add(l[t]);
  }
  var Kd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Of = {},
    Df = {};
  function Jd(t) {
    return Ku.call(Df, t)
      ? !0
      : Ku.call(Of, t)
        ? !1
        : Kd.test(t)
          ? (Df[t] = !0)
          : ((Of[t] = !0), !1);
  }
  function Dn(t, l, e) {
    if (Jd(l))
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
  }
  function Un(t, l, e) {
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + e);
    }
  }
  function Ul(t, l, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttributeNS(l, e, "" + a);
    }
  }
  function sl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Uf(t) {
    var l = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (l === "checkbox" || l === "radio")
    );
  }
  function kd(t, l, e) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, l);
    if (
      !t.hasOwnProperty(l) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(t, l, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            ((e = "" + i), u.call(this, i));
          },
        }),
        Object.defineProperty(t, l, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (i) {
            e = "" + i;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[l]);
          },
        }
      );
    }
  }
  function ti(t) {
    if (!t._valueTracker) {
      var l = Uf(t) ? "checked" : "value";
      t._valueTracker = kd(t, l, "" + t[l]);
    }
  }
  function Cf(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var e = l.getValue(),
      a = "";
    return (
      t && (a = Uf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== e ? (l.setValue(t), !0) : !1
    );
  }
  function Cn(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Wd = /[\n"\\]/g;
  function ol(t) {
    return t.replace(Wd, function (l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function li(t, l, e, a, n, u, i, f) {
    ((t.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (t.type = i)
        : t.removeAttribute("type"),
      l != null
        ? i === "number"
          ? ((l === 0 && t.value === "") || t.value != l) &&
            (t.value = "" + sl(l))
          : t.value !== "" + sl(l) && (t.value = "" + sl(l))
        : (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
      l != null
        ? ei(t, i, sl(l))
        : e != null
          ? ei(t, i, sl(e))
          : a != null && t.removeAttribute("value"),
      n == null && u != null && (t.defaultChecked = !!u),
      n != null &&
        (t.checked = n && typeof n != "function" && typeof n != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.name = "" + sl(f))
        : t.removeAttribute("name"));
  }
  function Hf(t, l, e, a, n, u, i, f) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.type = u),
      l != null || e != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || l != null)) {
        ti(t);
        return;
      }
      ((e = e != null ? "" + sl(e) : ""),
        (l = l != null ? "" + sl(l) : e),
        f || l === t.value || (t.value = l),
        (t.defaultValue = l));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = f ? t.checked : !!a),
      (t.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.name = i),
      ti(t));
  }
  function ei(t, l, e) {
    (l === "number" && Cn(t.ownerDocument) === t) ||
      t.defaultValue === "" + e ||
      (t.defaultValue = "" + e);
  }
  function $e(t, l, e, a) {
    if (((t = t.options), l)) {
      l = {};
      for (var n = 0; n < e.length; n++) l["$" + e[n]] = !0;
      for (e = 0; e < t.length; e++)
        ((n = l.hasOwnProperty("$" + t[e].value)),
          t[e].selected !== n && (t[e].selected = n),
          n && a && (t[e].defaultSelected = !0));
    } else {
      for (e = "" + sl(e), l = null, n = 0; n < t.length; n++) {
        if (t[n].value === e) {
          ((t[n].selected = !0), a && (t[n].defaultSelected = !0));
          return;
        }
        l !== null || t[n].disabled || (l = t[n]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Rf(t, l, e) {
    if (
      l != null &&
      ((l = "" + sl(l)), l !== t.value && (t.value = l), e == null)
    ) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = e != null ? "" + sl(e) : "";
  }
  function Bf(t, l, e, a) {
    if (l == null) {
      if (a != null) {
        if (e != null) throw Error(d(92));
        if (xl(a)) {
          if (1 < a.length) throw Error(d(93));
          a = a[0];
        }
        e = a;
      }
      (e == null && (e = ""), (l = e));
    }
    ((e = sl(l)),
      (t.defaultValue = e),
      (a = t.textContent),
      a === e && a !== "" && a !== null && (t.value = a),
      ti(t));
  }
  function Fe(t, l) {
    if (l) {
      var e = t.firstChild;
      if (e && e === t.lastChild && e.nodeType === 3) {
        e.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var $d = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function wf(t, l, e) {
    var a = l.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? t.setProperty(l, "")
        : l === "float"
          ? (t.cssFloat = "")
          : (t[l] = "")
      : a
        ? t.setProperty(l, e)
        : typeof e != "number" || e === 0 || $d.has(l)
          ? l === "float"
            ? (t.cssFloat = e)
            : (t[l] = ("" + e).trim())
          : (t[l] = e + "px");
  }
  function qf(t, l, e) {
    if (l != null && typeof l != "object") throw Error(d(62));
    if (((t = t.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (l != null && l.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var n in l)
        ((a = l[n]), l.hasOwnProperty(n) && e[n] !== a && wf(t, n, a));
    } else for (var u in l) l.hasOwnProperty(u) && wf(t, u, l[u]);
  }
  function ai(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fd = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Id =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hn(t) {
    return Id.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Cl() {}
  var ni = null;
  function ui(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ie = null,
    Pe = null;
  function Yf(t) {
    var l = Je(t);
    if (l && (t = l.stateNode)) {
      var e = t[Lt] || null;
      t: switch (((t = l.stateNode), l.type)) {
        case "input":
          if (
            (li(
              t,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name,
            ),
            (l = e.name),
            e.type === "radio" && l != null)
          ) {
            for (e = t; e.parentNode;) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + ol("" + l) + '"][type="radio"]',
              ),
                l = 0;
              l < e.length;
              l++
            ) {
              var a = e[l];
              if (a !== t && a.form === t.form) {
                var n = a[Lt] || null;
                if (!n) throw Error(d(90));
                li(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (l = 0; l < e.length; l++)
              ((a = e[l]), a.form === t.form && Cf(a));
          }
          break t;
        case "textarea":
          Rf(t, e.value, e.defaultValue);
          break t;
        case "select":
          ((l = e.value), l != null && $e(t, !!e.multiple, l, !1));
      }
    }
  }
  var ii = !1;
  function Gf(t, l, e) {
    if (ii) return t(l, e);
    ii = !0;
    try {
      var a = t(l);
      return a;
    } finally {
      if (
        ((ii = !1),
        (Ie !== null || Pe !== null) &&
          (Su(), Ie && ((l = Ie), (t = Pe), (Pe = Ie = null), Yf(l), t)))
      )
        for (l = 0; l < t.length; l++) Yf(t[l]);
    }
  }
  function Ra(t, l) {
    var e = t.stateNode;
    if (e === null) return null;
    var a = e[Lt] || null;
    if (a === null) return null;
    e = a[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (e && typeof e != "function") throw Error(d(231, l, typeof e));
    return e;
  }
  var Hl = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ci = !1;
  if (Hl)
    try {
      var Ba = {};
      (Object.defineProperty(Ba, "passive", {
        get: function () {
          ci = !0;
        },
      }),
        window.addEventListener("test", Ba, Ba),
        window.removeEventListener("test", Ba, Ba));
    } catch {
      ci = !1;
    }
  var Pl = null,
    fi = null,
    Rn = null;
  function Qf() {
    if (Rn) return Rn;
    var t,
      l = fi,
      e = l.length,
      a,
      n = "value" in Pl ? Pl.value : Pl.textContent,
      u = n.length;
    for (t = 0; t < e && l[t] === n[t]; t++);
    var i = e - t;
    for (a = 1; a <= i && l[e - a] === n[u - a]; a++);
    return (Rn = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Bn(t) {
    var l = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && l === 13 && (t = 13))
        : (t = l),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function wn() {
    return !0;
  }
  function Xf() {
    return !1;
  }
  function Vt(t) {
    function l(e, a, n, u, i) {
      ((this._reactName = e),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var f in t)
        t.hasOwnProperty(f) && ((e = t[f]), (this[f] = e ? e(u) : u[f]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? wn
          : Xf),
        (this.isPropagationStopped = Xf),
        this
      );
    }
    return (
      B(l.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = wn));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = wn));
        },
        persist: function () {},
        isPersistent: wn,
      }),
      l
    );
  }
  var Ne = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    qn = Vt(Ne),
    wa = B({}, Ne, { view: 0, detail: 0 }),
    Pd = Vt(wa),
    si,
    oi,
    qa,
    Yn = B({}, wa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: di,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== qa &&
              (qa && t.type === "mousemove"
                ? ((si = t.screenX - qa.screenX), (oi = t.screenY - qa.screenY))
                : (oi = si = 0),
              (qa = t)),
            si);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : oi;
      },
    }),
    Zf = Vt(Yn),
    t0 = B({}, Yn, { dataTransfer: 0 }),
    l0 = Vt(t0),
    e0 = B({}, wa, { relatedTarget: 0 }),
    ri = Vt(e0),
    a0 = B({}, Ne, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    n0 = Vt(a0),
    u0 = B({}, Ne, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    i0 = Vt(u0),
    c0 = B({}, Ne, { data: 0 }),
    Lf = Vt(c0),
    f0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    s0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    o0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function r0(t) {
    var l = this.nativeEvent;
    return l.getModifierState
      ? l.getModifierState(t)
      : (t = o0[t])
        ? !!l[t]
        : !1;
  }
  function di() {
    return r0;
  }
  var d0 = B({}, wa, {
      key: function (t) {
        if (t.key) {
          var l = f0[t.key] || t.key;
          if (l !== "Unidentified") return l;
        }
        return t.type === "keypress"
          ? ((t = Bn(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? s0[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: di,
      charCode: function (t) {
        return t.type === "keypress" ? Bn(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Bn(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    m0 = Vt(d0),
    h0 = B({}, Yn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Vf = Vt(h0),
    v0 = B({}, wa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: di,
    }),
    y0 = Vt(v0),
    g0 = B({}, Ne, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    p0 = Vt(g0),
    x0 = B({}, Yn, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    b0 = Vt(x0),
    S0 = B({}, Ne, { newState: 0, oldState: 0 }),
    z0 = Vt(S0),
    j0 = [9, 13, 27, 32],
    mi = Hl && "CompositionEvent" in window,
    Ya = null;
  Hl && "documentMode" in document && (Ya = document.documentMode);
  var E0 = Hl && "TextEvent" in window && !Ya,
    Kf = Hl && (!mi || (Ya && 8 < Ya && 11 >= Ya)),
    Jf = " ",
    kf = !1;
  function Wf(t, l) {
    switch (t) {
      case "keyup":
        return j0.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function $f(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var ta = !1;
  function T0(t, l) {
    switch (t) {
      case "compositionend":
        return $f(l);
      case "keypress":
        return l.which !== 32 ? null : ((kf = !0), Jf);
      case "textInput":
        return ((t = l.data), t === Jf && kf ? null : t);
      default:
        return null;
    }
  }
  function A0(t, l) {
    if (ta)
      return t === "compositionend" || (!mi && Wf(t, l))
        ? ((t = Qf()), (Rn = fi = Pl = null), (ta = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || (l.ctrlKey && l.altKey)) {
          if (l.char && 1 < l.char.length) return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Kf && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var N0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ff(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!N0[t.type] : l === "textarea";
  }
  function If(t, l, e, a) {
    (Ie ? (Pe ? Pe.push(a) : (Pe = [a])) : (Ie = a),
      (l = _u(l, "onChange")),
      0 < l.length &&
        ((e = new qn("onChange", "change", null, e, a)),
        t.push({ event: e, listeners: l })));
  }
  var Ga = null,
    Qa = null;
  function _0(t) {
    Rr(t, 0);
  }
  function Gn(t) {
    var l = Ha(t);
    if (Cf(l)) return t;
  }
  function Pf(t, l) {
    if (t === "change") return l;
  }
  var ts = !1;
  if (Hl) {
    var hi;
    if (Hl) {
      var vi = "oninput" in document;
      if (!vi) {
        var ls = document.createElement("div");
        (ls.setAttribute("oninput", "return;"),
          (vi = typeof ls.oninput == "function"));
      }
      hi = vi;
    } else hi = !1;
    ts = hi && (!document.documentMode || 9 < document.documentMode);
  }
  function es() {
    Ga && (Ga.detachEvent("onpropertychange", as), (Qa = Ga = null));
  }
  function as(t) {
    if (t.propertyName === "value" && Gn(Qa)) {
      var l = [];
      (If(l, Qa, t, ui(t)), Gf(_0, l));
    }
  }
  function M0(t, l, e) {
    t === "focusin"
      ? (es(), (Ga = l), (Qa = e), Ga.attachEvent("onpropertychange", as))
      : t === "focusout" && es();
  }
  function O0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Gn(Qa);
  }
  function D0(t, l) {
    if (t === "click") return Gn(l);
  }
  function U0(t, l) {
    if (t === "input" || t === "change") return Gn(l);
  }
  function C0(t, l) {
    return (t === l && (t !== 0 || 1 / t === 1 / l)) || (t !== t && l !== l);
  }
  var ll = typeof Object.is == "function" ? Object.is : C0;
  function Xa(t, l) {
    if (ll(t, l)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof l != "object" ||
      l === null
    )
      return !1;
    var e = Object.keys(t),
      a = Object.keys(l);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!Ku.call(l, n) || !ll(t[n], l[n])) return !1;
    }
    return !0;
  }
  function ns(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t;
  }
  function us(t, l) {
    var e = ns(t);
    t = 0;
    for (var a; e;) {
      if (e.nodeType === 3) {
        if (((a = t + e.textContent.length), t <= l && a >= l))
          return { node: e, offset: l - t };
        t = a;
      }
      t: {
        for (; e;) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break t;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = ns(e);
    }
  }
  function is(t, l) {
    return t && l
      ? t === l
        ? !0
        : t && t.nodeType === 3
          ? !1
          : l && l.nodeType === 3
            ? is(t, l.parentNode)
            : "contains" in t
              ? t.contains(l)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(l) & 16)
                : !1
      : !1;
  }
  function cs(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var l = Cn(t.document); l instanceof t.HTMLIFrameElement;) {
      try {
        var e = typeof l.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) t = l.contentWindow;
      else break;
      l = Cn(t.document);
    }
    return l;
  }
  function yi(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      l &&
      ((l === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        l === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var H0 = Hl && "documentMode" in document && 11 >= document.documentMode,
    la = null,
    gi = null,
    Za = null,
    pi = !1;
  function fs(t, l, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    pi ||
      la == null ||
      la !== Cn(a) ||
      ((a = la),
      "selectionStart" in a && yi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Za && Xa(Za, a)) ||
        ((Za = a),
        (a = _u(gi, "onSelect")),
        0 < a.length &&
          ((l = new qn("onSelect", "select", null, l, e)),
          t.push({ event: l, listeners: a }),
          (l.target = la))));
  }
  function _e(t, l) {
    var e = {};
    return (
      (e[t.toLowerCase()] = l.toLowerCase()),
      (e["Webkit" + t] = "webkit" + l),
      (e["Moz" + t] = "moz" + l),
      e
    );
  }
  var ea = {
      animationend: _e("Animation", "AnimationEnd"),
      animationiteration: _e("Animation", "AnimationIteration"),
      animationstart: _e("Animation", "AnimationStart"),
      transitionrun: _e("Transition", "TransitionRun"),
      transitionstart: _e("Transition", "TransitionStart"),
      transitioncancel: _e("Transition", "TransitionCancel"),
      transitionend: _e("Transition", "TransitionEnd"),
    },
    xi = {},
    ss = {};
  Hl &&
    ((ss = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ea.animationend.animation,
      delete ea.animationiteration.animation,
      delete ea.animationstart.animation),
    "TransitionEvent" in window || delete ea.transitionend.transition);
  function Me(t) {
    if (xi[t]) return xi[t];
    if (!ea[t]) return t;
    var l = ea[t],
      e;
    for (e in l) if (l.hasOwnProperty(e) && e in ss) return (xi[t] = l[e]);
    return t;
  }
  var os = Me("animationend"),
    rs = Me("animationiteration"),
    ds = Me("animationstart"),
    R0 = Me("transitionrun"),
    B0 = Me("transitionstart"),
    w0 = Me("transitioncancel"),
    ms = Me("transitionend"),
    hs = new Map(),
    bi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  bi.push("scrollEnd");
  function bl(t, l) {
    (hs.set(t, l), Ae(l, [t]));
  }
  var Qn =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var l = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(l)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    rl = [],
    aa = 0,
    Si = 0;
  function Xn() {
    for (var t = aa, l = (Si = aa = 0); l < t;) {
      var e = rl[l];
      rl[l++] = null;
      var a = rl[l];
      rl[l++] = null;
      var n = rl[l];
      rl[l++] = null;
      var u = rl[l];
      if (((rl[l++] = null), a !== null && n !== null)) {
        var i = a.pending;
        (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n));
      }
      u !== 0 && vs(e, n, u);
    }
  }
  function Zn(t, l, e, a) {
    ((rl[aa++] = t),
      (rl[aa++] = l),
      (rl[aa++] = e),
      (rl[aa++] = a),
      (Si |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function zi(t, l, e, a) {
    return (Zn(t, l, e, a), Ln(t));
  }
  function Oe(t, l) {
    return (Zn(t, null, null, l), Ln(t));
  }
  function vs(t, l, e) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = t.return; u !== null;)
      ((u.childLanes |= e),
        (a = u.alternate),
        a !== null && (a.childLanes |= e),
        u.tag === 22 &&
          ((t = u.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = u),
        (u = u.return));
    return t.tag === 3
      ? ((u = t.stateNode),
        n &&
          l !== null &&
          ((n = 31 - tl(e)),
          (t = u.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [l]) : a.push(l),
          (l.lane = e | 536870912)),
        u)
      : null;
  }
  function Ln(t) {
    if (50 < dn) throw ((dn = 0), (Dc = null), Error(d(185)));
    for (var l = t.return; l !== null;) ((t = l), (l = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var na = {};
  function q0(t, l, e, a) {
    ((this.tag = t),
      (this.key = e),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = l),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function el(t, l, e, a) {
    return new q0(t, l, e, a);
  }
  function ji(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Rl(t, l) {
    var e = t.alternate;
    return (
      e === null
        ? ((e = el(t.tag, l, t.key, t.mode)),
          (e.elementType = t.elementType),
          (e.type = t.type),
          (e.stateNode = t.stateNode),
          (e.alternate = t),
          (t.alternate = e))
        : ((e.pendingProps = l),
          (e.type = t.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = t.flags & 65011712),
      (e.childLanes = t.childLanes),
      (e.lanes = t.lanes),
      (e.child = t.child),
      (e.memoizedProps = t.memoizedProps),
      (e.memoizedState = t.memoizedState),
      (e.updateQueue = t.updateQueue),
      (l = t.dependencies),
      (e.dependencies =
        l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }),
      (e.sibling = t.sibling),
      (e.index = t.index),
      (e.ref = t.ref),
      (e.refCleanup = t.refCleanup),
      e
    );
  }
  function ys(t, l) {
    t.flags &= 65011714;
    var e = t.alternate;
    return (
      e === null
        ? ((t.childLanes = 0),
          (t.lanes = l),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = e.childLanes),
          (t.lanes = e.lanes),
          (t.child = e.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = e.memoizedProps),
          (t.memoizedState = e.memoizedState),
          (t.updateQueue = e.updateQueue),
          (t.type = e.type),
          (l = e.dependencies),
          (t.dependencies =
            l === null
              ? null
              : { lanes: l.lanes, firstContext: l.firstContext })),
      t
    );
  }
  function Vn(t, l, e, a, n, u) {
    var i = 0;
    if (((a = t), typeof t == "function")) ji(t) && (i = 1);
    else if (typeof t == "string")
      i = Zm(t, e, M.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case El:
          return (
            (t = el(31, e, l, n)),
            (t.elementType = El),
            (t.lanes = u),
            t
          );
        case wt:
          return De(e.children, n, u, l);
        case Ol:
          ((i = 8), (n |= 24));
          break;
        case Ft:
          return (
            (t = el(12, e, l, n | 2)),
            (t.elementType = Ft),
            (t.lanes = u),
            t
          );
        case jl:
          return (
            (t = el(13, e, l, n)),
            (t.elementType = jl),
            (t.lanes = u),
            t
          );
        case Qt:
          return (
            (t = el(19, e, l, n)),
            (t.elementType = Qt),
            (t.lanes = u),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Ct:
                i = 10;
                break t;
              case $l:
                i = 9;
                break t;
              case fl:
                i = 11;
                break t;
              case W:
                i = 14;
                break t;
              case Xt:
                ((i = 16), (a = null));
                break t;
            }
          ((i = 29),
            (e = Error(d(130, t === null ? "null" : typeof t, ""))),
            (a = null));
      }
    return (
      (l = el(i, e, l, n)),
      (l.elementType = t),
      (l.type = a),
      (l.lanes = u),
      l
    );
  }
  function De(t, l, e, a) {
    return ((t = el(7, t, a, l)), (t.lanes = e), t);
  }
  function Ei(t, l, e) {
    return ((t = el(6, t, null, l)), (t.lanes = e), t);
  }
  function gs(t) {
    var l = el(18, null, null, 0);
    return ((l.stateNode = t), l);
  }
  function Ti(t, l, e) {
    return (
      (l = el(4, t.children !== null ? t.children : [], t.key, l)),
      (l.lanes = e),
      (l.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      l
    );
  }
  var ps = new WeakMap();
  function dl(t, l) {
    if (typeof t == "object" && t !== null) {
      var e = ps.get(t);
      return e !== void 0
        ? e
        : ((l = { value: t, source: l, stack: gf(l) }), ps.set(t, l), l);
    }
    return { value: t, source: l, stack: gf(l) };
  }
  var ua = [],
    ia = 0,
    Kn = null,
    La = 0,
    ml = [],
    hl = 0,
    te = null,
    Al = 1,
    Nl = "";
  function Bl(t, l) {
    ((ua[ia++] = La), (ua[ia++] = Kn), (Kn = t), (La = l));
  }
  function xs(t, l, e) {
    ((ml[hl++] = Al), (ml[hl++] = Nl), (ml[hl++] = te), (te = t));
    var a = Al;
    t = Nl;
    var n = 32 - tl(a) - 1;
    ((a &= ~(1 << n)), (e += 1));
    var u = 32 - tl(l) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (Al = (1 << (32 - tl(l) + n)) | (e << n) | a),
        (Nl = u + t));
    } else ((Al = (1 << u) | (e << n) | a), (Nl = t));
  }
  function Ai(t) {
    t.return !== null && (Bl(t, 1), xs(t, 1, 0));
  }
  function Ni(t) {
    for (; t === Kn;)
      ((Kn = ua[--ia]), (ua[ia] = null), (La = ua[--ia]), (ua[ia] = null));
    for (; t === te;)
      ((te = ml[--hl]),
        (ml[hl] = null),
        (Nl = ml[--hl]),
        (ml[hl] = null),
        (Al = ml[--hl]),
        (ml[hl] = null));
  }
  function bs(t, l) {
    ((ml[hl++] = Al),
      (ml[hl++] = Nl),
      (ml[hl++] = te),
      (Al = l.id),
      (Nl = l.overflow),
      (te = t));
  }
  var _t = null,
    dt = null,
    $ = !1,
    le = null,
    vl = !1,
    _i = Error(d(519));
  function ee(t) {
    var l = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Va(dl(l, t)), _i);
  }
  function Ss(t) {
    var l = t.stateNode,
      e = t.type,
      a = t.memoizedProps;
    switch (((l[Nt] = t), (l[Lt] = a), e)) {
      case "dialog":
        (K("cancel", l), K("close", l));
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < hn.length; e++) K(hn[e], l);
        break;
      case "source":
        K("error", l);
        break;
      case "img":
      case "image":
      case "link":
        (K("error", l), K("load", l));
        break;
      case "details":
        K("toggle", l);
        break;
      case "input":
        (K("invalid", l),
          Hf(
            l,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        K("invalid", l);
        break;
      case "textarea":
        (K("invalid", l), Bf(l, a.value, a.defaultValue, a.children));
    }
    ((e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      l.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      Yr(l.textContent, e)
        ? (a.popover != null && (K("beforetoggle", l), K("toggle", l)),
          a.onScroll != null && K("scroll", l),
          a.onScrollEnd != null && K("scrollend", l),
          a.onClick != null && (l.onclick = Cl),
          (l = !0))
        : (l = !1),
      l || ee(t, !0));
  }
  function zs(t) {
    for (_t = t.return; _t;)
      switch (_t.tag) {
        case 5:
        case 31:
        case 13:
          vl = !1;
          return;
        case 27:
        case 3:
          vl = !0;
          return;
        default:
          _t = _t.return;
      }
  }
  function ca(t) {
    if (t !== _t) return !1;
    if (!$) return (zs(t), ($ = !0), !1);
    var l = t.tag,
      e;
    if (
      ((e = l !== 3 && l !== 27) &&
        ((e = l === 5) &&
          ((e = t.type),
          (e =
            !(e !== "form" && e !== "button") || Kc(t.type, t.memoizedProps))),
        (e = !e)),
      e && dt && ee(t),
      zs(t),
      l === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(d(317));
      dt = kr(t);
    } else if (l === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(d(317));
      dt = kr(t);
    } else
      l === 27
        ? ((l = dt), ye(t.type) ? ((t = Fc), (Fc = null), (dt = t)) : (dt = l))
        : (dt = _t ? gl(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ue() {
    ((dt = _t = null), ($ = !1));
  }
  function Mi() {
    var t = le;
    return (
      t !== null &&
        (Wt === null ? (Wt = t) : Wt.push.apply(Wt, t), (le = null)),
      t
    );
  }
  function Va(t) {
    le === null ? (le = [t]) : le.push(t);
  }
  var Oi = r(null),
    Ce = null,
    wl = null;
  function ae(t, l, e) {
    (A(Oi, l._currentValue), (l._currentValue = e));
  }
  function ql(t) {
    ((t._currentValue = Oi.current), j(Oi));
  }
  function Di(t, l, e) {
    for (; t !== null;) {
      var a = t.alternate;
      if (
        ((t.childLanes & l) !== l
          ? ((t.childLanes |= l), a !== null && (a.childLanes |= l))
          : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l),
        t === e)
      )
        break;
      t = t.return;
    }
  }
  function Ui(t, l, e, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null;) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null;) {
          var f = u;
          u = n;
          for (var s = 0; s < l.length; s++)
            if (f.context === l[s]) {
              ((u.lanes |= e),
                (f = u.alternate),
                f !== null && (f.lanes |= e),
                Di(u.return, e, t),
                a || (i = null));
              break t;
            }
          u = f.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(d(341));
        ((i.lanes |= e),
          (u = i.alternate),
          u !== null && (u.lanes |= e),
          Di(i, e, t),
          (i = null));
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null;) {
          if (i === t) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (i = n));
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function fa(t, l, e, a) {
    t = null;
    for (var n = l, u = !1; n !== null;) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(d(387));
        if (((i = i.memoizedProps), i !== null)) {
          var f = n.type;
          ll(n.pendingProps.value, i.value) ||
            (t !== null ? t.push(f) : (t = [f]));
        }
      } else if (n === lt.current) {
        if (((i = n.alternate), i === null)) throw Error(d(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(xn) : (t = [xn]));
      }
      n = n.return;
    }
    (t !== null && Ui(l, t, e, a), (l.flags |= 262144));
  }
  function Jn(t) {
    for (t = t.firstContext; t !== null;) {
      if (!ll(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function He(t) {
    ((Ce = t),
      (wl = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function Mt(t) {
    return js(Ce, t);
  }
  function kn(t, l) {
    return (Ce === null && He(t), js(t, l));
  }
  function js(t, l) {
    var e = l._currentValue;
    if (((l = { context: l, memoizedValue: e, next: null }), wl === null)) {
      if (t === null) throw Error(d(308));
      ((wl = l),
        (t.dependencies = { lanes: 0, firstContext: l }),
        (t.flags |= 524288));
    } else wl = wl.next = l;
    return e;
  }
  var Y0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              l = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              ((l.aborted = !0),
                t.forEach(function (e) {
                  return e();
                }));
            };
          },
    G0 = p.unstable_scheduleCallback,
    Q0 = p.unstable_NormalPriority,
    bt = {
      $$typeof: Ct,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ci() {
    return { controller: new Y0(), data: new Map(), refCount: 0 };
  }
  function Ka(t) {
    (t.refCount--,
      t.refCount === 0 &&
        G0(Q0, function () {
          t.controller.abort();
        }));
  }
  var Ja = null,
    Hi = 0,
    sa = 0,
    oa = null;
  function X0(t, l) {
    if (Ja === null) {
      var e = (Ja = []);
      ((Hi = 0),
        (sa = wc()),
        (oa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        }));
    }
    return (Hi++, l.then(Es, Es), l);
  }
  function Es() {
    if (--Hi === 0 && Ja !== null) {
      oa !== null && (oa.status = "fulfilled");
      var t = Ja;
      ((Ja = null), (sa = 0), (oa = null));
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Z0(t, l) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          e.push(n);
        },
      };
    return (
      t.then(
        function () {
          ((a.status = "fulfilled"), (a.value = l));
          for (var n = 0; n < e.length; n++) (0, e[n])(l);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
            (0, e[n])(void 0);
        },
      ),
      a
    );
  }
  var Ts = b.S;
  b.S = function (t, l) {
    ((sr = It()),
      typeof l == "object" &&
        l !== null &&
        typeof l.then == "function" &&
        X0(t, l),
      Ts !== null && Ts(t, l));
  };
  var Re = r(null);
  function Ri() {
    var t = Re.current;
    return t !== null ? t : st.pooledCache;
  }
  function Wn(t, l) {
    l === null ? A(Re, Re.current) : A(Re, l.pool);
  }
  function As() {
    var t = Ri();
    return t === null ? null : { parent: bt._currentValue, pool: t };
  }
  var ra = Error(d(460)),
    Bi = Error(d(474)),
    $n = Error(d(542)),
    Fn = { then: function () {} };
  function Ns(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function _s(t, l, e) {
    switch (
      ((e = t[e]),
      e === void 0 ? t.push(l) : e !== l && (l.then(Cl, Cl), (l = e)),
      l.status)
    ) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw ((t = l.reason), Os(t), t);
      default:
        if (typeof l.status == "string") l.then(Cl, Cl);
        else {
          if (((t = st), t !== null && 100 < t.shellSuspendCounter))
            throw Error(d(482));
          ((t = l),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (l.status === "pending") {
                  var n = l;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (l.status === "pending") {
                  var n = l;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw ((t = l.reason), Os(t), t);
        }
        throw ((we = l), ra);
    }
  }
  function Be(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function"
        ? ((we = e), ra)
        : e;
    }
  }
  var we = null;
  function Ms() {
    if (we === null) throw Error(d(459));
    var t = we;
    return ((we = null), t);
  }
  function Os(t) {
    if (t === ra || t === $n) throw Error(d(483));
  }
  var da = null,
    ka = 0;
  function In(t) {
    var l = ka;
    return ((ka += 1), da === null && (da = []), _s(da, t, l));
  }
  function Wa(t, l) {
    ((l = l.props.ref), (t.ref = l !== void 0 ? l : null));
  }
  function Pn(t, l) {
    throw l.$$typeof === rt
      ? Error(d(525))
      : ((t = Object.prototype.toString.call(l)),
        Error(
          d(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(l).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Ds(t) {
    function l(m, o) {
      if (t) {
        var h = m.deletions;
        h === null ? ((m.deletions = [o]), (m.flags |= 16)) : h.push(o);
      }
    }
    function e(m, o) {
      if (!t) return null;
      for (; o !== null;) (l(m, o), (o = o.sibling));
      return null;
    }
    function a(m) {
      for (var o = new Map(); m !== null;)
        (m.key !== null ? o.set(m.key, m) : o.set(m.index, m), (m = m.sibling));
      return o;
    }
    function n(m, o) {
      return ((m = Rl(m, o)), (m.index = 0), (m.sibling = null), m);
    }
    function u(m, o, h) {
      return (
        (m.index = h),
        t
          ? ((h = m.alternate),
            h !== null
              ? ((h = h.index), h < o ? ((m.flags |= 67108866), o) : h)
              : ((m.flags |= 67108866), o))
          : ((m.flags |= 1048576), o)
      );
    }
    function i(m) {
      return (t && m.alternate === null && (m.flags |= 67108866), m);
    }
    function f(m, o, h, S) {
      return o === null || o.tag !== 6
        ? ((o = Ei(h, m.mode, S)), (o.return = m), o)
        : ((o = n(o, h)), (o.return = m), o);
    }
    function s(m, o, h, S) {
      var C = h.type;
      return C === wt
        ? x(m, o, h.props.children, S, h.key)
        : o !== null &&
            (o.elementType === C ||
              (typeof C == "object" &&
                C !== null &&
                C.$$typeof === Xt &&
                Be(C) === o.type))
          ? ((o = n(o, h.props)), Wa(o, h), (o.return = m), o)
          : ((o = Vn(h.type, h.key, h.props, null, m.mode, S)),
            Wa(o, h),
            (o.return = m),
            o);
    }
    function v(m, o, h, S) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== h.containerInfo ||
        o.stateNode.implementation !== h.implementation
        ? ((o = Ti(h, m.mode, S)), (o.return = m), o)
        : ((o = n(o, h.children || [])), (o.return = m), o);
    }
    function x(m, o, h, S, C) {
      return o === null || o.tag !== 7
        ? ((o = De(h, m.mode, S, C)), (o.return = m), o)
        : ((o = n(o, h)), (o.return = m), o);
    }
    function z(m, o, h) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return ((o = Ei("" + o, m.mode, h)), (o.return = m), o);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Bt:
            return (
              (h = Vn(o.type, o.key, o.props, null, m.mode, h)),
              Wa(h, o),
              (h.return = m),
              h
            );
          case Ut:
            return ((o = Ti(o, m.mode, h)), (o.return = m), o);
          case Xt:
            return ((o = Be(o)), z(m, o, h));
        }
        if (xl(o) || Zt(o))
          return ((o = De(o, m.mode, h, null)), (o.return = m), o);
        if (typeof o.then == "function") return z(m, In(o), h);
        if (o.$$typeof === Ct) return z(m, kn(m, o), h);
        Pn(m, o);
      }
      return null;
    }
    function y(m, o, h, S) {
      var C = o !== null ? o.key : null;
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return C !== null ? null : f(m, o, "" + h, S);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Bt:
            return h.key === C ? s(m, o, h, S) : null;
          case Ut:
            return h.key === C ? v(m, o, h, S) : null;
          case Xt:
            return ((h = Be(h)), y(m, o, h, S));
        }
        if (xl(h) || Zt(h)) return C !== null ? null : x(m, o, h, S, null);
        if (typeof h.then == "function") return y(m, o, In(h), S);
        if (h.$$typeof === Ct) return y(m, o, kn(m, h), S);
        Pn(m, h);
      }
      return null;
    }
    function g(m, o, h, S, C) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return ((m = m.get(h) || null), f(o, m, "" + S, C));
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Bt:
            return (
              (m = m.get(S.key === null ? h : S.key) || null),
              s(o, m, S, C)
            );
          case Ut:
            return (
              (m = m.get(S.key === null ? h : S.key) || null),
              v(o, m, S, C)
            );
          case Xt:
            return ((S = Be(S)), g(m, o, h, S, C));
        }
        if (xl(S) || Zt(S))
          return ((m = m.get(h) || null), x(o, m, S, C, null));
        if (typeof S.then == "function") return g(m, o, h, In(S), C);
        if (S.$$typeof === Ct) return g(m, o, h, kn(o, S), C);
        Pn(o, S);
      }
      return null;
    }
    function _(m, o, h, S) {
      for (
        var C = null, I = null, O = o, Z = (o = 0), k = null;
        O !== null && Z < h.length;
        Z++
      ) {
        O.index > Z ? ((k = O), (O = null)) : (k = O.sibling);
        var P = y(m, O, h[Z], S);
        if (P === null) {
          O === null && (O = k);
          break;
        }
        (t && O && P.alternate === null && l(m, O),
          (o = u(P, o, Z)),
          I === null ? (C = P) : (I.sibling = P),
          (I = P),
          (O = k));
      }
      if (Z === h.length) return (e(m, O), $ && Bl(m, Z), C);
      if (O === null) {
        for (; Z < h.length; Z++)
          ((O = z(m, h[Z], S)),
            O !== null &&
              ((o = u(O, o, Z)),
              I === null ? (C = O) : (I.sibling = O),
              (I = O)));
        return ($ && Bl(m, Z), C);
      }
      for (O = a(O); Z < h.length; Z++)
        ((k = g(O, m, Z, h[Z], S)),
          k !== null &&
            (t && k.alternate !== null && O.delete(k.key === null ? Z : k.key),
            (o = u(k, o, Z)),
            I === null ? (C = k) : (I.sibling = k),
            (I = k)));
      return (
        t &&
          O.forEach(function (Se) {
            return l(m, Se);
          }),
        $ && Bl(m, Z),
        C
      );
    }
    function R(m, o, h, S) {
      if (h == null) throw Error(d(151));
      for (
        var C = null, I = null, O = o, Z = (o = 0), k = null, P = h.next();
        O !== null && !P.done;
        Z++, P = h.next()
      ) {
        O.index > Z ? ((k = O), (O = null)) : (k = O.sibling);
        var Se = y(m, O, P.value, S);
        if (Se === null) {
          O === null && (O = k);
          break;
        }
        (t && O && Se.alternate === null && l(m, O),
          (o = u(Se, o, Z)),
          I === null ? (C = Se) : (I.sibling = Se),
          (I = Se),
          (O = k));
      }
      if (P.done) return (e(m, O), $ && Bl(m, Z), C);
      if (O === null) {
        for (; !P.done; Z++, P = h.next())
          ((P = z(m, P.value, S)),
            P !== null &&
              ((o = u(P, o, Z)),
              I === null ? (C = P) : (I.sibling = P),
              (I = P)));
        return ($ && Bl(m, Z), C);
      }
      for (O = a(O); !P.done; Z++, P = h.next())
        ((P = g(O, m, Z, P.value, S)),
          P !== null &&
            (t && P.alternate !== null && O.delete(P.key === null ? Z : P.key),
            (o = u(P, o, Z)),
            I === null ? (C = P) : (I.sibling = P),
            (I = P)));
      return (
        t &&
          O.forEach(function (th) {
            return l(m, th);
          }),
        $ && Bl(m, Z),
        C
      );
    }
    function ct(m, o, h, S) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === wt &&
          h.key === null &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case Bt:
            t: {
              for (var C = h.key; o !== null;) {
                if (o.key === C) {
                  if (((C = h.type), C === wt)) {
                    if (o.tag === 7) {
                      (e(m, o.sibling),
                        (S = n(o, h.props.children)),
                        (S.return = m),
                        (m = S));
                      break t;
                    }
                  } else if (
                    o.elementType === C ||
                    (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === Xt &&
                      Be(C) === o.type)
                  ) {
                    (e(m, o.sibling),
                      (S = n(o, h.props)),
                      Wa(S, h),
                      (S.return = m),
                      (m = S));
                    break t;
                  }
                  e(m, o);
                  break;
                } else l(m, o);
                o = o.sibling;
              }
              h.type === wt
                ? ((S = De(h.props.children, m.mode, S, h.key)),
                  (S.return = m),
                  (m = S))
                : ((S = Vn(h.type, h.key, h.props, null, m.mode, S)),
                  Wa(S, h),
                  (S.return = m),
                  (m = S));
            }
            return i(m);
          case Ut:
            t: {
              for (C = h.key; o !== null;) {
                if (o.key === C)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === h.containerInfo &&
                    o.stateNode.implementation === h.implementation
                  ) {
                    (e(m, o.sibling),
                      (S = n(o, h.children || [])),
                      (S.return = m),
                      (m = S));
                    break t;
                  } else {
                    e(m, o);
                    break;
                  }
                else l(m, o);
                o = o.sibling;
              }
              ((S = Ti(h, m.mode, S)), (S.return = m), (m = S));
            }
            return i(m);
          case Xt:
            return ((h = Be(h)), ct(m, o, h, S));
        }
        if (xl(h)) return _(m, o, h, S);
        if (Zt(h)) {
          if (((C = Zt(h)), typeof C != "function")) throw Error(d(150));
          return ((h = C.call(h)), R(m, o, h, S));
        }
        if (typeof h.then == "function") return ct(m, o, In(h), S);
        if (h.$$typeof === Ct) return ct(m, o, kn(m, h), S);
        Pn(m, h);
      }
      return (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
        ? ((h = "" + h),
          o !== null && o.tag === 6
            ? (e(m, o.sibling), (S = n(o, h)), (S.return = m), (m = S))
            : (e(m, o), (S = Ei(h, m.mode, S)), (S.return = m), (m = S)),
          i(m))
        : e(m, o);
    }
    return function (m, o, h, S) {
      try {
        ka = 0;
        var C = ct(m, o, h, S);
        return ((da = null), C);
      } catch (O) {
        if (O === ra || O === $n) throw O;
        var I = el(29, O, null, m.mode);
        return ((I.lanes = S), (I.return = m), I);
      } finally {
      }
    };
  }
  var qe = Ds(!0),
    Us = Ds(!1),
    ne = !1;
  function wi(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function qi(t, l) {
    ((t = t.updateQueue),
      l.updateQueue === t &&
        (l.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function ue(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ie(t, l, e) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (tt & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (l.next = l) : ((l.next = n.next), (n.next = l)),
        (a.pending = l),
        (l = Ln(t)),
        vs(t, null, e),
        l
      );
    }
    return (Zn(t, a, l, e), Ln(t));
  }
  function $a(t, l, e) {
    if (
      ((l = l.updateQueue), l !== null && ((l = l.shared), (e & 4194048) !== 0))
    ) {
      var a = l.lanes;
      ((a &= t.pendingLanes), (e |= a), (l.lanes = e), jf(t, e));
    }
  }
  function Yi(t, l) {
    var e = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var n = null,
        u = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = i) : (u = u.next = i), (e = e.next));
        } while (e !== null);
        u === null ? (n = u = l) : (u = u.next = l);
      } else n = u = l;
      ((e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = e));
      return;
    }
    ((t = e.lastBaseUpdate),
      t === null ? (e.firstBaseUpdate = l) : (t.next = l),
      (e.lastBaseUpdate = l));
  }
  var Gi = !1;
  function Fa() {
    if (Gi) {
      var t = oa;
      if (t !== null) throw t;
    }
  }
  function Ia(t, l, e, a) {
    Gi = !1;
    var n = t.updateQueue;
    ne = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      f = n.shared.pending;
    if (f !== null) {
      n.shared.pending = null;
      var s = f,
        v = s.next;
      ((s.next = null), i === null ? (u = v) : (i.next = v), (i = s));
      var x = t.alternate;
      x !== null &&
        ((x = x.updateQueue),
        (f = x.lastBaseUpdate),
        f !== i &&
          (f === null ? (x.firstBaseUpdate = v) : (f.next = v),
          (x.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var z = n.baseState;
      ((i = 0), (x = v = s = null), (f = u));
      do {
        var y = f.lane & -536870913,
          g = y !== f.lane;
        if (g ? (J & y) === y : (a & y) === y) {
          (y !== 0 && y === sa && (Gi = !0),
            x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var _ = t,
              R = f;
            y = l;
            var ct = e;
            switch (R.tag) {
              case 1:
                if (((_ = R.payload), typeof _ == "function")) {
                  z = _.call(ct, z, y);
                  break t;
                }
                z = _;
                break t;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = R.payload),
                  (y = typeof _ == "function" ? _.call(ct, z, y) : _),
                  y == null)
                )
                  break t;
                z = B({}, z, y);
                break t;
              case 2:
                ne = !0;
            }
          }
          ((y = f.callback),
            y !== null &&
              ((t.flags |= 64),
              g && (t.flags |= 8192),
              (g = n.callbacks),
              g === null ? (n.callbacks = [y]) : g.push(y)));
        } else
          ((g = {
            lane: y,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            x === null ? ((v = x = g), (s = z)) : (x = x.next = g),
            (i |= y));
        if (((f = f.next), f === null)) {
          if (((f = n.shared.pending), f === null)) break;
          ((g = f),
            (f = g.next),
            (g.next = null),
            (n.lastBaseUpdate = g),
            (n.shared.pending = null));
        }
      } while (!0);
      (x === null && (s = z),
        (n.baseState = s),
        (n.firstBaseUpdate = v),
        (n.lastBaseUpdate = x),
        u === null && (n.shared.lanes = 0),
        (re |= i),
        (t.lanes = i),
        (t.memoizedState = z));
    }
  }
  function Cs(t, l) {
    if (typeof t != "function") throw Error(d(191, t));
    t.call(l);
  }
  function Hs(t, l) {
    var e = t.callbacks;
    if (e !== null)
      for (t.callbacks = null, t = 0; t < e.length; t++) Cs(e[t], l);
  }
  var ma = r(null),
    tu = r(0);
  function Rs(t, l) {
    ((t = Jl), A(tu, t), A(ma, l), (Jl = t | l.baseLanes));
  }
  function Qi() {
    (A(tu, Jl), A(ma, ma.current));
  }
  function Xi() {
    ((Jl = tu.current), j(ma), j(tu));
  }
  var al = r(null),
    yl = null;
  function ce(t) {
    var l = t.alternate;
    (A(pt, pt.current & 1),
      A(al, t),
      yl === null &&
        (l === null || ma.current !== null || l.memoizedState !== null) &&
        (yl = t));
  }
  function Zi(t) {
    (A(pt, pt.current), A(al, t), yl === null && (yl = t));
  }
  function Bs(t) {
    t.tag === 22
      ? (A(pt, pt.current), A(al, t), yl === null && (yl = t))
      : fe();
  }
  function fe() {
    (A(pt, pt.current), A(al, al.current));
  }
  function nl(t) {
    (j(al), yl === t && (yl = null), j(pt));
  }
  var pt = r(0);
  function lu(t) {
    for (var l = t; l !== null;) {
      if (l.tag === 13) {
        var e = l.memoizedState;
        if (e !== null && ((e = e.dehydrated), e === null || Wc(e) || $c(e)))
          return l;
      } else if (
        l.tag === 19 &&
        (l.memoizedProps.revealOrder === "forwards" ||
          l.memoizedProps.revealOrder === "backwards" ||
          l.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          l.memoizedProps.revealOrder === "together")
      ) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        ((l.child.return = l), (l = l.child));
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null;) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      ((l.sibling.return = l.return), (l = l.sibling));
    }
    return null;
  }
  var Yl = 0,
    X = null,
    ut = null,
    St = null,
    eu = !1,
    ha = !1,
    Ye = !1,
    au = 0,
    Pa = 0,
    va = null,
    L0 = 0;
  function vt() {
    throw Error(d(321));
  }
  function Li(t, l) {
    if (l === null) return !1;
    for (var e = 0; e < l.length && e < t.length; e++)
      if (!ll(t[e], l[e])) return !1;
    return !0;
  }
  function Vi(t, l, e, a, n, u) {
    return (
      (Yl = u),
      (X = l),
      (l.memoizedState = null),
      (l.updateQueue = null),
      (l.lanes = 0),
      (b.H = t === null || t.memoizedState === null ? bo : ic),
      (Ye = !1),
      (u = e(a, n)),
      (Ye = !1),
      ha && (u = qs(l, e, a, n)),
      ws(t),
      u
    );
  }
  function ws(t) {
    b.H = en;
    var l = ut !== null && ut.next !== null;
    if (((Yl = 0), (St = ut = X = null), (eu = !1), (Pa = 0), (va = null), l))
      throw Error(d(300));
    t === null ||
      zt ||
      ((t = t.dependencies), t !== null && Jn(t) && (zt = !0));
  }
  function qs(t, l, e, a) {
    X = t;
    var n = 0;
    do {
      if ((ha && (va = null), (Pa = 0), (ha = !1), 25 <= n))
        throw Error(d(301));
      if (((n += 1), (St = ut = null), t.updateQueue != null)) {
        var u = t.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((b.H = So), (u = l(e, a)));
    } while (ha);
    return u;
  }
  function V0() {
    var t = b.H,
      l = t.useState()[0];
    return (
      (l = typeof l.then == "function" ? tn(l) : l),
      (t = t.useState()[0]),
      (ut !== null ? ut.memoizedState : null) !== t && (X.flags |= 1024),
      l
    );
  }
  function Ki() {
    var t = au !== 0;
    return ((au = 0), t);
  }
  function Ji(t, l, e) {
    ((l.updateQueue = t.updateQueue), (l.flags &= -2053), (t.lanes &= ~e));
  }
  function ki(t) {
    if (eu) {
      for (t = t.memoizedState; t !== null;) {
        var l = t.queue;
        (l !== null && (l.pending = null), (t = t.next));
      }
      eu = !1;
    }
    ((Yl = 0), (St = ut = X = null), (ha = !1), (Pa = au = 0), (va = null));
  }
  function Yt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (St === null ? (X.memoizedState = St = t) : (St = St.next = t), St);
  }
  function xt() {
    if (ut === null) {
      var t = X.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ut.next;
    var l = St === null ? X.memoizedState : St.next;
    if (l !== null) ((St = l), (ut = t));
    else {
      if (t === null)
        throw X.alternate === null ? Error(d(467)) : Error(d(310));
      ((ut = t),
        (t = {
          memoizedState: ut.memoizedState,
          baseState: ut.baseState,
          baseQueue: ut.baseQueue,
          queue: ut.queue,
          next: null,
        }),
        St === null ? (X.memoizedState = St = t) : (St = St.next = t));
    }
    return St;
  }
  function nu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function tn(t) {
    var l = Pa;
    return (
      (Pa += 1),
      va === null && (va = []),
      (t = _s(va, t, l)),
      (l = X),
      (St === null ? l.memoizedState : St.next) === null &&
        ((l = l.alternate),
        (b.H = l === null || l.memoizedState === null ? bo : ic)),
      t
    );
  }
  function uu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return tn(t);
      if (t.$$typeof === Ct) return Mt(t);
    }
    throw Error(d(438, String(t)));
  }
  function Wi(t) {
    var l = null,
      e = X.updateQueue;
    if ((e !== null && (l = e.memoCache), l == null)) {
      var a = X.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (l = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (l == null && (l = { data: [], index: 0 }),
      e === null && ((e = nu()), (X.updateQueue = e)),
      (e.memoCache = l),
      (e = l.data[l.index]),
      e === void 0)
    )
      for (e = l.data[l.index] = Array(t), a = 0; a < t; a++) e[a] = Le;
    return (l.index++, e);
  }
  function Gl(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function iu(t) {
    var l = xt();
    return $i(l, ut, t);
  }
  function $i(t, l, e) {
    var a = t.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = e;
    var n = t.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        ((n.next = u.next), (u.next = i));
      }
      ((l.baseQueue = n = u), (a.pending = null));
    }
    if (((u = t.baseState), n === null)) t.memoizedState = u;
    else {
      l = n.next;
      var f = (i = null),
        s = null,
        v = l,
        x = !1;
      do {
        var z = v.lane & -536870913;
        if (z !== v.lane ? (J & z) === z : (Yl & z) === z) {
          var y = v.revertLane;
          if (y === 0)
            (s !== null &&
              (s = s.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: v.action,
                  hasEagerState: v.hasEagerState,
                  eagerState: v.eagerState,
                  next: null,
                }),
              z === sa && (x = !0));
          else if ((Yl & y) === y) {
            ((v = v.next), y === sa && (x = !0));
            continue;
          } else
            ((z = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null,
            }),
              s === null ? ((f = s = z), (i = u)) : (s = s.next = z),
              (X.lanes |= y),
              (re |= y));
          ((z = v.action),
            Ye && e(u, z),
            (u = v.hasEagerState ? v.eagerState : e(u, z)));
        } else
          ((y = {
            lane: z,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          }),
            s === null ? ((f = s = y), (i = u)) : (s = s.next = y),
            (X.lanes |= z),
            (re |= z));
        v = v.next;
      } while (v !== null && v !== l);
      if (
        (s === null ? (i = u) : (s.next = f),
        !ll(u, t.memoizedState) && ((zt = !0), x && ((e = oa), e !== null)))
      )
        throw e;
      ((t.memoizedState = u),
        (t.baseState = i),
        (t.baseQueue = s),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function Fi(t) {
    var l = xt(),
      e = l.queue;
    if (e === null) throw Error(d(311));
    e.lastRenderedReducer = t;
    var a = e.dispatch,
      n = e.pending,
      u = l.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = (n = n.next);
      do ((u = t(u, i.action)), (i = i.next));
      while (i !== n);
      (ll(u, l.memoizedState) || (zt = !0),
        (l.memoizedState = u),
        l.baseQueue === null && (l.baseState = u),
        (e.lastRenderedState = u));
    }
    return [u, a];
  }
  function Ys(t, l, e) {
    var a = X,
      n = xt(),
      u = $;
    if (u) {
      if (e === void 0) throw Error(d(407));
      e = e();
    } else e = l();
    var i = !ll((ut || n).memoizedState, e);
    if (
      (i && ((n.memoizedState = e), (zt = !0)),
      (n = n.queue),
      tc(Xs.bind(null, a, n, t), [t]),
      n.getSnapshot !== l || i || (St !== null && St.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ya(9, { destroy: void 0 }, Qs.bind(null, a, n, e, l), null),
        st === null)
      )
        throw Error(d(349));
      u || (Yl & 127) !== 0 || Gs(a, l, e);
    }
    return e;
  }
  function Gs(t, l, e) {
    ((t.flags |= 16384),
      (t = { getSnapshot: l, value: e }),
      (l = X.updateQueue),
      l === null
        ? ((l = nu()), (X.updateQueue = l), (l.stores = [t]))
        : ((e = l.stores), e === null ? (l.stores = [t]) : e.push(t)));
  }
  function Qs(t, l, e, a) {
    ((l.value = e), (l.getSnapshot = a), Zs(l) && Ls(t));
  }
  function Xs(t, l, e) {
    return e(function () {
      Zs(l) && Ls(t);
    });
  }
  function Zs(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var e = l();
      return !ll(t, e);
    } catch {
      return !0;
    }
  }
  function Ls(t) {
    var l = Oe(t, 2);
    l !== null && $t(l, t, 2);
  }
  function Ii(t) {
    var l = Yt();
    if (typeof t == "function") {
      var e = t;
      if (((t = e()), Ye)) {
        Fl(!0);
        try {
          e();
        } finally {
          Fl(!1);
        }
      }
    }
    return (
      (l.memoizedState = l.baseState = t),
      (l.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gl,
        lastRenderedState: t,
      }),
      l
    );
  }
  function Vs(t, l, e, a) {
    return ((t.baseState = e), $i(t, ut, typeof a == "function" ? a : Gl));
  }
  function K0(t, l, e, a, n) {
    if (su(t)) throw Error(d(485));
    if (((t = l.action), t !== null)) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (b.T !== null ? e(!0) : (u.isTransition = !1),
        a(u),
        (e = l.pending),
        e === null
          ? ((u.next = l.pending = u), Ks(l, u))
          : ((u.next = e.next), (l.pending = e.next = u)));
    }
  }
  function Ks(t, l) {
    var e = l.action,
      a = l.payload,
      n = t.state;
    if (l.isTransition) {
      var u = b.T,
        i = {};
      b.T = i;
      try {
        var f = e(n, a),
          s = b.S;
        (s !== null && s(i, f), Js(t, l, f));
      } catch (v) {
        Pi(t, l, v);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (b.T = u));
      }
    } else
      try {
        ((u = e(n, a)), Js(t, l, u));
      } catch (v) {
        Pi(t, l, v);
      }
  }
  function Js(t, l, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            ks(t, l, a);
          },
          function (a) {
            return Pi(t, l, a);
          },
        )
      : ks(t, l, e);
  }
  function ks(t, l, e) {
    ((l.status = "fulfilled"),
      (l.value = e),
      Ws(l),
      (t.state = e),
      (l = t.pending),
      l !== null &&
        ((e = l.next),
        e === l ? (t.pending = null) : ((e = e.next), (l.next = e), Ks(t, e))));
  }
  function Pi(t, l, e) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((l.status = "rejected"), (l.reason = e), Ws(l), (l = l.next));
      while (l !== a);
    }
    t.action = null;
  }
  function Ws(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function $s(t, l) {
    return l;
  }
  function Fs(t, l) {
    if ($) {
      var e = st.formState;
      if (e !== null) {
        t: {
          var a = X;
          if ($) {
            if (dt) {
              l: {
                for (var n = dt, u = vl; n.nodeType !== 8;) {
                  if (!u) {
                    n = null;
                    break l;
                  }
                  if (((n = gl(n.nextSibling)), n === null)) {
                    n = null;
                    break l;
                  }
                }
                ((u = n.data), (n = u === "F!" || u === "F" ? n : null));
              }
              if (n) {
                ((dt = gl(n.nextSibling)), (a = n.data === "F!"));
                break t;
              }
            }
            ee(a);
          }
          a = !1;
        }
        a && (l = e[0]);
      }
    }
    return (
      (e = Yt()),
      (e.memoizedState = e.baseState = l),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $s,
        lastRenderedState: l,
      }),
      (e.queue = a),
      (e = go.bind(null, X, a)),
      (a.dispatch = e),
      (a = Ii(!1)),
      (u = uc.bind(null, X, !1, a.queue)),
      (a = Yt()),
      (n = { state: l, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (e = K0.bind(null, X, n, u, e)),
      (n.dispatch = e),
      (a.memoizedState = t),
      [l, e, !1]
    );
  }
  function Is(t) {
    var l = xt();
    return Ps(l, ut, t);
  }
  function Ps(t, l, e) {
    if (
      ((l = $i(t, l, $s)[0]),
      (t = iu(Gl)[0]),
      typeof l == "object" && l !== null && typeof l.then == "function")
    )
      try {
        var a = tn(l);
      } catch (i) {
        throw i === ra ? $n : i;
      }
    else a = l;
    l = xt();
    var n = l.queue,
      u = n.dispatch;
    return (
      e !== l.memoizedState &&
        ((X.flags |= 2048),
        ya(9, { destroy: void 0 }, J0.bind(null, n, e), null)),
      [a, u, t]
    );
  }
  function J0(t, l) {
    t.action = l;
  }
  function to(t) {
    var l = xt(),
      e = ut;
    if (e !== null) return Ps(l, e, t);
    (xt(), (l = l.memoizedState), (e = xt()));
    var a = e.queue.dispatch;
    return ((e.memoizedState = t), [l, a, !1]);
  }
  function ya(t, l, e, a) {
    return (
      (t = { tag: t, create: e, deps: a, inst: l, next: null }),
      (l = X.updateQueue),
      l === null && ((l = nu()), (X.updateQueue = l)),
      (e = l.lastEffect),
      e === null
        ? (l.lastEffect = t.next = t)
        : ((a = e.next), (e.next = t), (t.next = a), (l.lastEffect = t)),
      t
    );
  }
  function lo() {
    return xt().memoizedState;
  }
  function cu(t, l, e, a) {
    var n = Yt();
    ((X.flags |= t),
      (n.memoizedState = ya(
        1 | l,
        { destroy: void 0 },
        e,
        a === void 0 ? null : a,
      )));
  }
  function fu(t, l, e, a) {
    var n = xt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    ut !== null && a !== null && Li(a, ut.memoizedState.deps)
      ? (n.memoizedState = ya(l, u, e, a))
      : ((X.flags |= t), (n.memoizedState = ya(1 | l, u, e, a)));
  }
  function eo(t, l) {
    cu(8390656, 8, t, l);
  }
  function tc(t, l) {
    fu(2048, 8, t, l);
  }
  function k0(t) {
    X.flags |= 4;
    var l = X.updateQueue;
    if (l === null) ((l = nu()), (X.updateQueue = l), (l.events = [t]));
    else {
      var e = l.events;
      e === null ? (l.events = [t]) : e.push(t);
    }
  }
  function ao(t) {
    var l = xt().memoizedState;
    return (
      k0({ ref: l, nextImpl: t }),
      function () {
        if ((tt & 2) !== 0) throw Error(d(440));
        return l.impl.apply(void 0, arguments);
      }
    );
  }
  function no(t, l) {
    return fu(4, 2, t, l);
  }
  function uo(t, l) {
    return fu(4, 4, t, l);
  }
  function io(t, l) {
    if (typeof l == "function") {
      t = t();
      var e = l(t);
      return function () {
        typeof e == "function" ? e() : l(null);
      };
    }
    if (l != null)
      return (
        (t = t()),
        (l.current = t),
        function () {
          l.current = null;
        }
      );
  }
  function co(t, l, e) {
    ((e = e != null ? e.concat([t]) : null), fu(4, 4, io.bind(null, l, t), e));
  }
  function lc() {}
  function fo(t, l) {
    var e = xt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    return l !== null && Li(l, a[1]) ? a[0] : ((e.memoizedState = [t, l]), t);
  }
  function so(t, l) {
    var e = xt();
    l = l === void 0 ? null : l;
    var a = e.memoizedState;
    if (l !== null && Li(l, a[1])) return a[0];
    if (((a = t()), Ye)) {
      Fl(!0);
      try {
        t();
      } finally {
        Fl(!1);
      }
    }
    return ((e.memoizedState = [a, l]), a);
  }
  function ec(t, l, e) {
    return e === void 0 || ((Yl & 1073741824) !== 0 && (J & 261930) === 0)
      ? (t.memoizedState = l)
      : ((t.memoizedState = e), (t = rr()), (X.lanes |= t), (re |= t), e);
  }
  function oo(t, l, e, a) {
    return ll(e, l)
      ? e
      : ma.current !== null
        ? ((t = ec(t, e, a)), ll(t, l) || (zt = !0), t)
        : (Yl & 42) === 0 || ((Yl & 1073741824) !== 0 && (J & 261930) === 0)
          ? ((zt = !0), (t.memoizedState = e))
          : ((t = rr()), (X.lanes |= t), (re |= t), l);
  }
  function ro(t, l, e, a, n) {
    var u = T.p;
    T.p = u !== 0 && 8 > u ? u : 8;
    var i = b.T,
      f = {};
    ((b.T = f), uc(t, !1, l, e));
    try {
      var s = n(),
        v = b.S;
      if (
        (v !== null && v(f, s),
        s !== null && typeof s == "object" && typeof s.then == "function")
      ) {
        var x = Z0(s, a);
        ln(t, l, x, cl(t));
      } else ln(t, l, a, cl(t));
    } catch (z) {
      ln(t, l, { then: function () {}, status: "rejected", reason: z }, cl());
    } finally {
      ((T.p = u),
        i !== null && f.types !== null && (i.types = f.types),
        (b.T = i));
    }
  }
  function W0() {}
  function ac(t, l, e, a) {
    if (t.tag !== 5) throw Error(d(476));
    var n = mo(t).queue;
    ro(
      t,
      n,
      l,
      w,
      e === null
        ? W0
        : function () {
            return (ho(t), e(a));
          },
    );
  }
  function mo(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: w,
      baseState: w,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gl,
        lastRenderedState: w,
      },
      next: null,
    };
    var e = {};
    return (
      (l.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Gl,
          lastRenderedState: e,
        },
        next: null,
      }),
      (t.memoizedState = l),
      (t = t.alternate),
      t !== null && (t.memoizedState = l),
      l
    );
  }
  function ho(t) {
    var l = mo(t);
    (l.next === null && (l = t.alternate.memoizedState),
      ln(t, l.next.queue, {}, cl()));
  }
  function nc() {
    return Mt(xn);
  }
  function vo() {
    return xt().memoizedState;
  }
  function yo() {
    return xt().memoizedState;
  }
  function $0(t) {
    for (var l = t.return; l !== null;) {
      switch (l.tag) {
        case 24:
        case 3:
          var e = cl();
          t = ue(e);
          var a = ie(l, t, e);
          (a !== null && ($t(a, l, e), $a(a, l, e)),
            (l = { cache: Ci() }),
            (t.payload = l));
          return;
      }
      l = l.return;
    }
  }
  function F0(t, l, e) {
    var a = cl();
    ((e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      su(t)
        ? po(l, e)
        : ((e = zi(t, l, e, a)), e !== null && ($t(e, t, a), xo(e, l, a))));
  }
  function go(t, l, e) {
    var a = cl();
    ln(t, l, e, a);
  }
  function ln(t, l, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (su(t)) po(l, n);
    else {
      var u = t.alternate;
      if (
        t.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = l.lastRenderedReducer), u !== null)
      )
        try {
          var i = l.lastRenderedState,
            f = u(i, e);
          if (((n.hasEagerState = !0), (n.eagerState = f), ll(f, i)))
            return (Zn(t, l, n, 0), st === null && Xn(), !1);
        } catch {
        } finally {
        }
      if (((e = zi(t, l, n, a)), e !== null))
        return ($t(e, t, a), xo(e, l, a), !0);
    }
    return !1;
  }
  function uc(t, l, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: wc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      su(t))
    ) {
      if (l) throw Error(d(479));
    } else ((l = zi(t, e, a, 2)), l !== null && $t(l, t, 2));
  }
  function su(t) {
    var l = t.alternate;
    return t === X || (l !== null && l === X);
  }
  function po(t, l) {
    ha = eu = !0;
    var e = t.pending;
    (e === null ? (l.next = l) : ((l.next = e.next), (e.next = l)),
      (t.pending = l));
  }
  function xo(t, l, e) {
    if ((e & 4194048) !== 0) {
      var a = l.lanes;
      ((a &= t.pendingLanes), (e |= a), (l.lanes = e), jf(t, e));
    }
  }
  var en = {
    readContext: Mt,
    use: uu,
    useCallback: vt,
    useContext: vt,
    useEffect: vt,
    useImperativeHandle: vt,
    useLayoutEffect: vt,
    useInsertionEffect: vt,
    useMemo: vt,
    useReducer: vt,
    useRef: vt,
    useState: vt,
    useDebugValue: vt,
    useDeferredValue: vt,
    useTransition: vt,
    useSyncExternalStore: vt,
    useId: vt,
    useHostTransitionStatus: vt,
    useFormState: vt,
    useActionState: vt,
    useOptimistic: vt,
    useMemoCache: vt,
    useCacheRefresh: vt,
  };
  en.useEffectEvent = vt;
  var bo = {
      readContext: Mt,
      use: uu,
      useCallback: function (t, l) {
        return ((Yt().memoizedState = [t, l === void 0 ? null : l]), t);
      },
      useContext: Mt,
      useEffect: eo,
      useImperativeHandle: function (t, l, e) {
        ((e = e != null ? e.concat([t]) : null),
          cu(4194308, 4, io.bind(null, l, t), e));
      },
      useLayoutEffect: function (t, l) {
        return cu(4194308, 4, t, l);
      },
      useInsertionEffect: function (t, l) {
        cu(4, 2, t, l);
      },
      useMemo: function (t, l) {
        var e = Yt();
        l = l === void 0 ? null : l;
        var a = t();
        if (Ye) {
          Fl(!0);
          try {
            t();
          } finally {
            Fl(!1);
          }
        }
        return ((e.memoizedState = [a, l]), a);
      },
      useReducer: function (t, l, e) {
        var a = Yt();
        if (e !== void 0) {
          var n = e(l);
          if (Ye) {
            Fl(!0);
            try {
              e(l);
            } finally {
              Fl(!1);
            }
          }
        } else n = l;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = F0.bind(null, X, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var l = Yt();
        return ((t = { current: t }), (l.memoizedState = t));
      },
      useState: function (t) {
        t = Ii(t);
        var l = t.queue,
          e = go.bind(null, X, l);
        return ((l.dispatch = e), [t.memoizedState, e]);
      },
      useDebugValue: lc,
      useDeferredValue: function (t, l) {
        var e = Yt();
        return ec(e, t, l);
      },
      useTransition: function () {
        var t = Ii(!1);
        return (
          (t = ro.bind(null, X, t.queue, !0, !1)),
          (Yt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, l, e) {
        var a = X,
          n = Yt();
        if ($) {
          if (e === void 0) throw Error(d(407));
          e = e();
        } else {
          if (((e = l()), st === null)) throw Error(d(349));
          (J & 127) !== 0 || Gs(a, l, e);
        }
        n.memoizedState = e;
        var u = { value: e, getSnapshot: l };
        return (
          (n.queue = u),
          eo(Xs.bind(null, a, u, t), [t]),
          (a.flags |= 2048),
          ya(9, { destroy: void 0 }, Qs.bind(null, a, u, e, l), null),
          e
        );
      },
      useId: function () {
        var t = Yt(),
          l = st.identifierPrefix;
        if ($) {
          var e = Nl,
            a = Al;
          ((e = (a & ~(1 << (32 - tl(a) - 1))).toString(32) + e),
            (l = "_" + l + "R_" + e),
            (e = au++),
            0 < e && (l += "H" + e.toString(32)),
            (l += "_"));
        } else ((e = L0++), (l = "_" + l + "r_" + e.toString(32) + "_"));
        return (t.memoizedState = l);
      },
      useHostTransitionStatus: nc,
      useFormState: Fs,
      useActionState: Fs,
      useOptimistic: function (t) {
        var l = Yt();
        l.memoizedState = l.baseState = t;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (l.queue = e),
          (l = uc.bind(null, X, !0, e)),
          (e.dispatch = l),
          [t, l]
        );
      },
      useMemoCache: Wi,
      useCacheRefresh: function () {
        return (Yt().memoizedState = $0.bind(null, X));
      },
      useEffectEvent: function (t) {
        var l = Yt(),
          e = { impl: t };
        return (
          (l.memoizedState = e),
          function () {
            if ((tt & 2) !== 0) throw Error(d(440));
            return e.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ic = {
      readContext: Mt,
      use: uu,
      useCallback: fo,
      useContext: Mt,
      useEffect: tc,
      useImperativeHandle: co,
      useInsertionEffect: no,
      useLayoutEffect: uo,
      useMemo: so,
      useReducer: iu,
      useRef: lo,
      useState: function () {
        return iu(Gl);
      },
      useDebugValue: lc,
      useDeferredValue: function (t, l) {
        var e = xt();
        return oo(e, ut.memoizedState, t, l);
      },
      useTransition: function () {
        var t = iu(Gl)[0],
          l = xt().memoizedState;
        return [typeof t == "boolean" ? t : tn(t), l];
      },
      useSyncExternalStore: Ys,
      useId: vo,
      useHostTransitionStatus: nc,
      useFormState: Is,
      useActionState: Is,
      useOptimistic: function (t, l) {
        var e = xt();
        return Vs(e, ut, t, l);
      },
      useMemoCache: Wi,
      useCacheRefresh: yo,
    };
  ic.useEffectEvent = ao;
  var So = {
    readContext: Mt,
    use: uu,
    useCallback: fo,
    useContext: Mt,
    useEffect: tc,
    useImperativeHandle: co,
    useInsertionEffect: no,
    useLayoutEffect: uo,
    useMemo: so,
    useReducer: Fi,
    useRef: lo,
    useState: function () {
      return Fi(Gl);
    },
    useDebugValue: lc,
    useDeferredValue: function (t, l) {
      var e = xt();
      return ut === null ? ec(e, t, l) : oo(e, ut.memoizedState, t, l);
    },
    useTransition: function () {
      var t = Fi(Gl)[0],
        l = xt().memoizedState;
      return [typeof t == "boolean" ? t : tn(t), l];
    },
    useSyncExternalStore: Ys,
    useId: vo,
    useHostTransitionStatus: nc,
    useFormState: to,
    useActionState: to,
    useOptimistic: function (t, l) {
      var e = xt();
      return ut !== null
        ? Vs(e, ut, t, l)
        : ((e.baseState = t), [t, e.queue.dispatch]);
    },
    useMemoCache: Wi,
    useCacheRefresh: yo,
  };
  So.useEffectEvent = ao;
  function cc(t, l, e, a) {
    ((l = t.memoizedState),
      (e = e(a, l)),
      (e = e == null ? l : B({}, l, e)),
      (t.memoizedState = e),
      t.lanes === 0 && (t.updateQueue.baseState = e));
  }
  var fc = {
    enqueueSetState: function (t, l, e) {
      t = t._reactInternals;
      var a = cl(),
        n = ue(a);
      ((n.payload = l),
        e != null && (n.callback = e),
        (l = ie(t, n, a)),
        l !== null && ($t(l, t, a), $a(l, t, a)));
    },
    enqueueReplaceState: function (t, l, e) {
      t = t._reactInternals;
      var a = cl(),
        n = ue(a);
      ((n.tag = 1),
        (n.payload = l),
        e != null && (n.callback = e),
        (l = ie(t, n, a)),
        l !== null && ($t(l, t, a), $a(l, t, a)));
    },
    enqueueForceUpdate: function (t, l) {
      t = t._reactInternals;
      var e = cl(),
        a = ue(e);
      ((a.tag = 2),
        l != null && (a.callback = l),
        (l = ie(t, a, e)),
        l !== null && ($t(l, t, e), $a(l, t, e)));
    },
  };
  function zo(t, l, e, a, n, u, i) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, u, i)
        : l.prototype && l.prototype.isPureReactComponent
          ? !Xa(e, a) || !Xa(n, u)
          : !0
    );
  }
  function jo(t, l, e, a) {
    ((t = l.state),
      typeof l.componentWillReceiveProps == "function" &&
        l.componentWillReceiveProps(e, a),
      typeof l.UNSAFE_componentWillReceiveProps == "function" &&
        l.UNSAFE_componentWillReceiveProps(e, a),
      l.state !== t && fc.enqueueReplaceState(l, l.state, null));
  }
  function Ge(t, l) {
    var e = l;
    if ("ref" in l) {
      e = {};
      for (var a in l) a !== "ref" && (e[a] = l[a]);
    }
    if ((t = t.defaultProps)) {
      e === l && (e = B({}, e));
      for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    }
    return e;
  }
  function Eo(t) {
    Qn(t);
  }
  function To(t) {
    console.error(t);
  }
  function Ao(t) {
    Qn(t);
  }
  function ou(t, l) {
    try {
      var e = t.onUncaughtError;
      e(l.value, { componentStack: l.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function No(t, l, e) {
    try {
      var a = t.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function sc(t, l, e) {
    return (
      (e = ue(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        ou(t, l);
      }),
      e
    );
  }
  function _o(t) {
    return ((t = ue(t)), (t.tag = 3), t);
  }
  function Mo(t, l, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      ((t.payload = function () {
        return n(u);
      }),
        (t.callback = function () {
          No(l, e, a);
        }));
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        (No(l, e, a),
          typeof n != "function" &&
            (de === null ? (de = new Set([this])) : de.add(this)));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function I0(t, l, e, a, n) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((l = e.alternate),
        l !== null && fa(l, e, n, !0),
        (e = al.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 31:
          case 13:
            return (
              yl === null ? zu() : e.alternate === null && yt === 0 && (yt = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = n),
              a === Fn
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null ? (e.updateQueue = new Set([a])) : l.add(a),
                  Hc(t, a, n)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === Fn
                ? (e.flags |= 16384)
                : ((l = e.updateQueue),
                  l === null
                    ? ((l = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = l))
                    : ((e = l.retryQueue),
                      e === null ? (l.retryQueue = new Set([a])) : e.add(a)),
                  Hc(t, a, n)),
              !1
            );
        }
        throw Error(d(435, e.tag));
      }
      return (Hc(t, a, n), zu(), !1);
    }
    if ($)
      return (
        (l = al.current),
        l !== null
          ? ((l.flags & 65536) === 0 && (l.flags |= 256),
            (l.flags |= 65536),
            (l.lanes = n),
            a !== _i && ((t = Error(d(422), { cause: a })), Va(dl(t, e))))
          : (a !== _i && ((l = Error(d(423), { cause: a })), Va(dl(l, e))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = dl(a, e)),
            (n = sc(t.stateNode, a, n)),
            Yi(t, n),
            yt !== 4 && (yt = 2)),
        !1
      );
    var u = Error(d(520), { cause: a });
    if (
      ((u = dl(u, e)),
      rn === null ? (rn = [u]) : rn.push(u),
      yt !== 4 && (yt = 2),
      l === null)
    )
      return !0;
    ((a = dl(a, e)), (e = l));
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (t = n & -n),
            (e.lanes |= t),
            (t = sc(e.stateNode, a, t)),
            Yi(e, t),
            !1
          );
        case 1:
          if (
            ((l = e.type),
            (u = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof l.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (de === null || !de.has(u)))))
          )
            return (
              (e.flags |= 65536),
              (n &= -n),
              (e.lanes |= n),
              (n = _o(n)),
              Mo(n, t, e, a),
              Yi(e, n),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var oc = Error(d(461)),
    zt = !1;
  function Ot(t, l, e, a) {
    l.child = t === null ? Us(l, null, e, a) : qe(l, t.child, e, a);
  }
  function Oo(t, l, e, a, n) {
    e = e.render;
    var u = l.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a) f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return (
      He(l),
      (a = Vi(t, l, e, i, u, n)),
      (f = Ki()),
      t !== null && !zt
        ? (Ji(t, l, n), Ql(t, l, n))
        : ($ && f && Ai(l), (l.flags |= 1), Ot(t, l, a, n), l.child)
    );
  }
  function Do(t, l, e, a, n) {
    if (t === null) {
      var u = e.type;
      return typeof u == "function" &&
        !ji(u) &&
        u.defaultProps === void 0 &&
        e.compare === null
        ? ((l.tag = 15), (l.type = u), Uo(t, l, u, a, n))
        : ((t = Vn(e.type, null, a, l, l.mode, n)),
          (t.ref = l.ref),
          (t.return = l),
          (l.child = t));
    }
    if (((u = t.child), !pc(t, n))) {
      var i = u.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : Xa), e(i, a) && t.ref === l.ref)
      )
        return Ql(t, l, n);
    }
    return (
      (l.flags |= 1),
      (t = Rl(u, a)),
      (t.ref = l.ref),
      (t.return = l),
      (l.child = t)
    );
  }
  function Uo(t, l, e, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Xa(u, a) && t.ref === l.ref)
        if (((zt = !1), (l.pendingProps = a = u), pc(t, n)))
          (t.flags & 131072) !== 0 && (zt = !0);
        else return ((l.lanes = t.lanes), Ql(t, l, n));
    }
    return rc(t, l, e, a, n);
  }
  function Co(t, l, e, a) {
    var n = a.children,
      u = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        l.stateNode === null &&
        (l.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((l.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | e : e), t !== null)) {
          for (a = l.child = t.child, n = 0; a !== null;)
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (l.child = null));
        return Ho(t, l, u, e, a);
      }
      if ((e & 536870912) !== 0)
        ((l.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Wn(l, u !== null ? u.cachePool : null),
          u !== null ? Rs(l, u) : Qi(),
          Bs(l));
      else
        return (
          (a = l.lanes = 536870912),
          Ho(t, l, u !== null ? u.baseLanes | e : e, e, a)
        );
    } else
      u !== null
        ? (Wn(l, u.cachePool), Rs(l, u), fe(), (l.memoizedState = null))
        : (t !== null && Wn(l, null), Qi(), fe());
    return (Ot(t, l, n, e), l.child);
  }
  function an(t, l) {
    return (
      (t !== null && t.tag === 22) ||
        l.stateNode !== null ||
        (l.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.sibling
    );
  }
  function Ho(t, l, e, a, n) {
    var u = Ri();
    return (
      (u = u === null ? null : { parent: bt._currentValue, pool: u }),
      (l.memoizedState = { baseLanes: e, cachePool: u }),
      t !== null && Wn(l, null),
      Qi(),
      Bs(l),
      t !== null && fa(t, l, a, !0),
      (l.childLanes = n),
      null
    );
  }
  function ru(t, l) {
    return (
      (l = mu({ mode: l.mode, children: l.children }, t.mode)),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function Ro(t, l, e) {
    return (
      qe(l, t.child, null, e),
      (t = ru(l, l.pendingProps)),
      (t.flags |= 2),
      nl(l),
      (l.memoizedState = null),
      t
    );
  }
  function P0(t, l, e) {
    var a = l.pendingProps,
      n = (l.flags & 128) !== 0;
    if (((l.flags &= -129), t === null)) {
      if ($) {
        if (a.mode === "hidden")
          return ((t = ru(l, a)), (l.lanes = 536870912), an(null, t));
        if (
          (Zi(l),
          (t = dt)
            ? ((t = Jr(t, vl)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((l.memoizedState = {
                  dehydrated: t,
                  treeContext: te !== null ? { id: Al, overflow: Nl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = gs(t)),
                (e.return = l),
                (l.child = e),
                (_t = l),
                (dt = null)))
            : (t = null),
          t === null)
        )
          throw ee(l);
        return ((l.lanes = 536870912), null);
      }
      return ru(l, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((Zi(l), n))
        if (l.flags & 256) ((l.flags &= -257), (l = Ro(t, l, e)));
        else if (l.memoizedState !== null)
          ((l.child = t.child), (l.flags |= 128), (l = null));
        else throw Error(d(558));
      else if (
        (zt || fa(t, l, e, !1), (n = (e & t.childLanes) !== 0), zt || n)
      ) {
        if (
          ((a = st),
          a !== null && ((i = Ef(a, e)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), Oe(t, i), $t(a, t, i), oc);
        (zu(), (l = Ro(t, l, e)));
      } else
        ((t = u.treeContext),
          (dt = gl(i.nextSibling)),
          (_t = l),
          ($ = !0),
          (le = null),
          (vl = !1),
          t !== null && bs(l, t),
          (l = ru(l, a)),
          (l.flags |= 4096));
      return l;
    }
    return (
      (t = Rl(t.child, { mode: a.mode, children: a.children })),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function du(t, l) {
    var e = l.ref;
    if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(d(284));
      (t === null || t.ref !== e) && (l.flags |= 4194816);
    }
  }
  function rc(t, l, e, a, n) {
    return (
      He(l),
      (e = Vi(t, l, e, a, void 0, n)),
      (a = Ki()),
      t !== null && !zt
        ? (Ji(t, l, n), Ql(t, l, n))
        : ($ && a && Ai(l), (l.flags |= 1), Ot(t, l, e, n), l.child)
    );
  }
  function Bo(t, l, e, a, n, u) {
    return (
      He(l),
      (l.updateQueue = null),
      (e = qs(l, a, e, n)),
      ws(t),
      (a = Ki()),
      t !== null && !zt
        ? (Ji(t, l, u), Ql(t, l, u))
        : ($ && a && Ai(l), (l.flags |= 1), Ot(t, l, e, u), l.child)
    );
  }
  function wo(t, l, e, a, n) {
    if ((He(l), l.stateNode === null)) {
      var u = na,
        i = e.contextType;
      (typeof i == "object" && i !== null && (u = Mt(i)),
        (u = new e(a, u)),
        (l.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = fc),
        (l.stateNode = u),
        (u._reactInternals = l),
        (u = l.stateNode),
        (u.props = a),
        (u.state = l.memoizedState),
        (u.refs = {}),
        wi(l),
        (i = e.contextType),
        (u.context = typeof i == "object" && i !== null ? Mt(i) : na),
        (u.state = l.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (cc(l, e, i, a), (u.state = l.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && fc.enqueueReplaceState(u, u.state, null),
          Ia(l, a, u, n),
          Fa(),
          (u.state = l.memoizedState)),
        typeof u.componentDidMount == "function" && (l.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      u = l.stateNode;
      var f = l.memoizedProps,
        s = Ge(e, f);
      u.props = s;
      var v = u.context,
        x = e.contextType;
      ((i = na), typeof x == "object" && x !== null && (i = Mt(x)));
      var z = e.getDerivedStateFromProps;
      ((x =
        typeof z == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (f = l.pendingProps !== f),
        x ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((f || v !== i) && jo(l, u, a, i)),
        (ne = !1));
      var y = l.memoizedState;
      ((u.state = y),
        Ia(l, a, u, n),
        Fa(),
        (v = l.memoizedState),
        f || y !== v || ne
          ? (typeof z == "function" && (cc(l, e, z, a), (v = l.memoizedState)),
            (s = ne || zo(l, e, s, a, y, v, i))
              ? (x ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (l.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (l.flags |= 4194308),
                (l.memoizedProps = a),
                (l.memoizedState = v)),
            (u.props = a),
            (u.state = v),
            (u.context = i),
            (a = s))
          : (typeof u.componentDidMount == "function" && (l.flags |= 4194308),
            (a = !1)));
    } else {
      ((u = l.stateNode),
        qi(t, l),
        (i = l.memoizedProps),
        (x = Ge(e, i)),
        (u.props = x),
        (z = l.pendingProps),
        (y = u.context),
        (v = e.contextType),
        (s = na),
        typeof v == "object" && v !== null && (s = Mt(v)),
        (f = e.getDerivedStateFromProps),
        (v =
          typeof f == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== z || y !== s) && jo(l, u, a, s)),
        (ne = !1),
        (y = l.memoizedState),
        (u.state = y),
        Ia(l, a, u, n),
        Fa());
      var g = l.memoizedState;
      i !== z ||
      y !== g ||
      ne ||
      (t !== null && t.dependencies !== null && Jn(t.dependencies))
        ? (typeof f == "function" && (cc(l, e, f, a), (g = l.memoizedState)),
          (x =
            ne ||
            zo(l, e, x, a, y, g, s) ||
            (t !== null && t.dependencies !== null && Jn(t.dependencies)))
            ? (v ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, g, s),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, g, s)),
              typeof u.componentDidUpdate == "function" && (l.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (l.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === t.memoizedProps && y === t.memoizedState) ||
                (l.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === t.memoizedProps && y === t.memoizedState) ||
                (l.flags |= 1024),
              (l.memoizedProps = a),
              (l.memoizedState = g)),
          (u.props = a),
          (u.state = g),
          (u.context = s),
          (a = x))
        : (typeof u.componentDidUpdate != "function" ||
            (i === t.memoizedProps && y === t.memoizedState) ||
            (l.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === t.memoizedProps && y === t.memoizedState) ||
            (l.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      du(t, l),
      (a = (l.flags & 128) !== 0),
      u || a
        ? ((u = l.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (l.flags |= 1),
          t !== null && a
            ? ((l.child = qe(l, t.child, null, n)),
              (l.child = qe(l, null, e, n)))
            : Ot(t, l, e, n),
          (l.memoizedState = u.state),
          (t = l.child))
        : (t = Ql(t, l, n)),
      t
    );
  }
  function qo(t, l, e, a) {
    return (Ue(), (l.flags |= 256), Ot(t, l, e, a), l.child);
  }
  var dc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function mc(t) {
    return { baseLanes: t, cachePool: As() };
  }
  function hc(t, l, e) {
    return ((t = t !== null ? t.childLanes & ~e : 0), l && (t |= il), t);
  }
  function Yo(t, l, e) {
    var a = l.pendingProps,
      n = !1,
      u = (l.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          t !== null && t.memoizedState === null ? !1 : (pt.current & 2) !== 0),
      i && ((n = !0), (l.flags &= -129)),
      (i = (l.flags & 32) !== 0),
      (l.flags &= -33),
      t === null)
    ) {
      if ($) {
        if (
          (n ? ce(l) : fe(),
          (t = dt)
            ? ((t = Jr(t, vl)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((l.memoizedState = {
                  dehydrated: t,
                  treeContext: te !== null ? { id: Al, overflow: Nl } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = gs(t)),
                (e.return = l),
                (l.child = e),
                (_t = l),
                (dt = null)))
            : (t = null),
          t === null)
        )
          throw ee(l);
        return ($c(t) ? (l.lanes = 32) : (l.lanes = 536870912), null);
      }
      var f = a.children;
      return (
        (a = a.fallback),
        n
          ? (fe(),
            (n = l.mode),
            (f = mu({ mode: "hidden", children: f }, n)),
            (a = De(a, n, e, null)),
            (f.return = l),
            (a.return = l),
            (f.sibling = a),
            (l.child = f),
            (a = l.child),
            (a.memoizedState = mc(e)),
            (a.childLanes = hc(t, i, e)),
            (l.memoizedState = dc),
            an(null, a))
          : (ce(l), vc(l, f))
      );
    }
    var s = t.memoizedState;
    if (s !== null && ((f = s.dehydrated), f !== null)) {
      if (u)
        l.flags & 256
          ? (ce(l), (l.flags &= -257), (l = yc(t, l, e)))
          : l.memoizedState !== null
            ? (fe(), (l.child = t.child), (l.flags |= 128), (l = null))
            : (fe(),
              (f = a.fallback),
              (n = l.mode),
              (a = mu({ mode: "visible", children: a.children }, n)),
              (f = De(f, n, e, null)),
              (f.flags |= 2),
              (a.return = l),
              (f.return = l),
              (a.sibling = f),
              (l.child = a),
              qe(l, t.child, null, e),
              (a = l.child),
              (a.memoizedState = mc(e)),
              (a.childLanes = hc(t, i, e)),
              (l.memoizedState = dc),
              (l = an(null, a)));
      else if ((ce(l), $c(f))) {
        if (((i = f.nextSibling && f.nextSibling.dataset), i)) var v = i.dgst;
        ((i = v),
          (a = Error(d(419))),
          (a.stack = ""),
          (a.digest = i),
          Va({ value: a, source: null, stack: null }),
          (l = yc(t, l, e)));
      } else if (
        (zt || fa(t, l, e, !1), (i = (e & t.childLanes) !== 0), zt || i)
      ) {
        if (
          ((i = st),
          i !== null && ((a = Ef(i, e)), a !== 0 && a !== s.retryLane))
        )
          throw ((s.retryLane = a), Oe(t, a), $t(i, t, a), oc);
        (Wc(f) || zu(), (l = yc(t, l, e)));
      } else
        Wc(f)
          ? ((l.flags |= 192), (l.child = t.child), (l = null))
          : ((t = s.treeContext),
            (dt = gl(f.nextSibling)),
            (_t = l),
            ($ = !0),
            (le = null),
            (vl = !1),
            t !== null && bs(l, t),
            (l = vc(l, a.children)),
            (l.flags |= 4096));
      return l;
    }
    return n
      ? (fe(),
        (f = a.fallback),
        (n = l.mode),
        (s = t.child),
        (v = s.sibling),
        (a = Rl(s, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = s.subtreeFlags & 65011712),
        v !== null ? (f = Rl(v, f)) : ((f = De(f, n, e, null)), (f.flags |= 2)),
        (f.return = l),
        (a.return = l),
        (a.sibling = f),
        (l.child = a),
        an(null, a),
        (a = l.child),
        (f = t.child.memoizedState),
        f === null
          ? (f = mc(e))
          : ((n = f.cachePool),
            n !== null
              ? ((s = bt._currentValue),
                (n = n.parent !== s ? { parent: s, pool: s } : n))
              : (n = As()),
            (f = { baseLanes: f.baseLanes | e, cachePool: n })),
        (a.memoizedState = f),
        (a.childLanes = hc(t, i, e)),
        (l.memoizedState = dc),
        an(t.child, a))
      : (ce(l),
        (e = t.child),
        (t = e.sibling),
        (e = Rl(e, { mode: "visible", children: a.children })),
        (e.return = l),
        (e.sibling = null),
        t !== null &&
          ((i = l.deletions),
          i === null ? ((l.deletions = [t]), (l.flags |= 16)) : i.push(t)),
        (l.child = e),
        (l.memoizedState = null),
        e);
  }
  function vc(t, l) {
    return (
      (l = mu({ mode: "visible", children: l }, t.mode)),
      (l.return = t),
      (t.child = l)
    );
  }
  function mu(t, l) {
    return ((t = el(22, t, null, l)), (t.lanes = 0), t);
  }
  function yc(t, l, e) {
    return (
      qe(l, t.child, null, e),
      (t = vc(l, l.pendingProps.children)),
      (t.flags |= 2),
      (l.memoizedState = null),
      t
    );
  }
  function Go(t, l, e) {
    t.lanes |= l;
    var a = t.alternate;
    (a !== null && (a.lanes |= l), Di(t.return, l, e));
  }
  function gc(t, l, e, a, n, u) {
    var i = t.memoizedState;
    i === null
      ? (t.memoizedState = {
          isBackwards: l,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = l),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = e),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function Qo(t, l, e) {
    var a = l.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = pt.current,
      f = (i & 2) !== 0;
    if (
      (f ? ((i = (i & 1) | 2), (l.flags |= 128)) : (i &= 1),
      A(pt, i),
      Ot(t, l, a, e),
      (a = $ ? La : 0),
      !f && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = l.child; t !== null;) {
        if (t.tag === 13) t.memoizedState !== null && Go(t, e, l);
        else if (t.tag === 19) Go(t, e, l);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === l) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (n) {
      case "forwards":
        for (e = l.child, n = null; e !== null;)
          ((t = e.alternate),
            t !== null && lu(t) === null && (n = e),
            (e = e.sibling));
        ((e = n),
          e === null
            ? ((n = l.child), (l.child = null))
            : ((n = e.sibling), (e.sibling = null)),
          gc(l, !1, n, e, u, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, n = l.child, l.child = null; n !== null;) {
          if (((t = n.alternate), t !== null && lu(t) === null)) {
            l.child = n;
            break;
          }
          ((t = n.sibling), (n.sibling = e), (e = n), (n = t));
        }
        gc(l, !0, e, null, u, a);
        break;
      case "together":
        gc(l, !1, null, null, void 0, a);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Ql(t, l, e) {
    if (
      (t !== null && (l.dependencies = t.dependencies),
      (re |= l.lanes),
      (e & l.childLanes) === 0)
    )
      if (t !== null) {
        if ((fa(t, l, e, !1), (e & l.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && l.child !== t.child) throw Error(d(153));
    if (l.child !== null) {
      for (
        t = l.child, e = Rl(t, t.pendingProps), l.child = e, e.return = l;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (e = e.sibling = Rl(t, t.pendingProps)),
          (e.return = l));
      e.sibling = null;
    }
    return l.child;
  }
  function pc(t, l) {
    return (t.lanes & l) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Jn(t)));
  }
  function tm(t, l, e) {
    switch (l.tag) {
      case 3:
        (qt(l, l.stateNode.containerInfo),
          ae(l, bt, t.memoizedState.cache),
          Ue());
        break;
      case 27:
      case 5:
        Ma(l);
        break;
      case 4:
        qt(l, l.stateNode.containerInfo);
        break;
      case 10:
        ae(l, l.type, l.memoizedProps.value);
        break;
      case 31:
        if (l.memoizedState !== null) return ((l.flags |= 128), Zi(l), null);
        break;
      case 13:
        var a = l.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ce(l), (l.flags |= 128), null)
            : (e & l.child.childLanes) !== 0
              ? Yo(t, l, e)
              : (ce(l), (t = Ql(t, l, e)), t !== null ? t.sibling : null);
        ce(l);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (e & l.childLanes) !== 0),
          a || (fa(t, l, e, !1), (a = (e & l.childLanes) !== 0)),
          n)
        ) {
          if (a) return Qo(t, l, e);
          l.flags |= 128;
        }
        if (
          ((n = l.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          A(pt, pt.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((l.lanes = 0), Co(t, l, e, l.pendingProps));
      case 24:
        ae(l, bt, t.memoizedState.cache);
    }
    return Ql(t, l, e);
  }
  function Xo(t, l, e) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps) zt = !0;
      else {
        if (!pc(t, e) && (l.flags & 128) === 0) return ((zt = !1), tm(t, l, e));
        zt = (t.flags & 131072) !== 0;
      }
    else ((zt = !1), $ && (l.flags & 1048576) !== 0 && xs(l, La, l.index));
    switch (((l.lanes = 0), l.tag)) {
      case 16:
        t: {
          var a = l.pendingProps;
          if (((t = Be(l.elementType)), (l.type = t), typeof t == "function"))
            ji(t)
              ? ((a = Ge(t, a)), (l.tag = 1), (l = wo(null, l, t, a, e)))
              : ((l.tag = 0), (l = rc(null, l, t, a, e)));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === fl) {
                ((l.tag = 11), (l = Oo(null, l, t, a, e)));
                break t;
              } else if (n === W) {
                ((l.tag = 14), (l = Do(null, l, t, a, e)));
                break t;
              }
            }
            throw ((l = Dl(t) || t), Error(d(306, l, "")));
          }
        }
        return l;
      case 0:
        return rc(t, l, l.type, l.pendingProps, e);
      case 1:
        return ((a = l.type), (n = Ge(a, l.pendingProps)), wo(t, l, a, n, e));
      case 3:
        t: {
          if ((qt(l, l.stateNode.containerInfo), t === null))
            throw Error(d(387));
          a = l.pendingProps;
          var u = l.memoizedState;
          ((n = u.element), qi(t, l), Ia(l, a, null, e));
          var i = l.memoizedState;
          if (
            ((a = i.cache),
            ae(l, bt, a),
            a !== u.cache && Ui(l, [bt], e, !0),
            Fa(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (l.updateQueue.baseState = u),
              (l.memoizedState = u),
              l.flags & 256)
            ) {
              l = qo(t, l, a, e);
              break t;
            } else if (a !== n) {
              ((n = dl(Error(d(424)), l)), Va(n), (l = qo(t, l, a, e)));
              break t;
            } else {
              switch (((t = l.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                dt = gl(t.firstChild),
                  _t = l,
                  $ = !0,
                  le = null,
                  vl = !0,
                  e = Us(l, null, a, e),
                  l.child = e;
                e;
              )
                ((e.flags = (e.flags & -3) | 4096), (e = e.sibling));
            }
          else {
            if ((Ue(), a === n)) {
              l = Ql(t, l, e);
              break t;
            }
            Ot(t, l, a, e);
          }
          l = l.child;
        }
        return l;
      case 26:
        return (
          du(t, l),
          t === null
            ? (e = Pr(l.type, null, l.pendingProps, null))
              ? (l.memoizedState = e)
              : $ ||
                ((e = l.type),
                (t = l.pendingProps),
                (a = Mu(L.current).createElement(e)),
                (a[Nt] = l),
                (a[Lt] = t),
                Dt(a, e, t),
                Tt(a),
                (l.stateNode = a))
            : (l.memoizedState = Pr(
                l.type,
                t.memoizedProps,
                l.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Ma(l),
          t === null &&
            $ &&
            ((a = l.stateNode = $r(l.type, l.pendingProps, L.current)),
            (_t = l),
            (vl = !0),
            (n = dt),
            ye(l.type) ? ((Fc = n), (dt = gl(a.firstChild))) : (dt = n)),
          Ot(t, l, l.pendingProps.children, e),
          du(t, l),
          t === null && (l.flags |= 4194304),
          l.child
        );
      case 5:
        return (
          t === null &&
            $ &&
            ((n = a = dt) &&
              ((a = Om(a, l.type, l.pendingProps, vl)),
              a !== null
                ? ((l.stateNode = a),
                  (_t = l),
                  (dt = gl(a.firstChild)),
                  (vl = !1),
                  (n = !0))
                : (n = !1)),
            n || ee(l)),
          Ma(l),
          (n = l.type),
          (u = l.pendingProps),
          (i = t !== null ? t.memoizedProps : null),
          (a = u.children),
          Kc(n, u) ? (a = null) : i !== null && Kc(n, i) && (l.flags |= 32),
          l.memoizedState !== null &&
            ((n = Vi(t, l, V0, null, null, e)), (xn._currentValue = n)),
          du(t, l),
          Ot(t, l, a, e),
          l.child
        );
      case 6:
        return (
          t === null &&
            $ &&
            ((t = e = dt) &&
              ((e = Dm(e, l.pendingProps, vl)),
              e !== null
                ? ((l.stateNode = e), (_t = l), (dt = null), (t = !0))
                : (t = !1)),
            t || ee(l)),
          null
        );
      case 13:
        return Yo(t, l, e);
      case 4:
        return (
          qt(l, l.stateNode.containerInfo),
          (a = l.pendingProps),
          t === null ? (l.child = qe(l, null, a, e)) : Ot(t, l, a, e),
          l.child
        );
      case 11:
        return Oo(t, l, l.type, l.pendingProps, e);
      case 7:
        return (Ot(t, l, l.pendingProps, e), l.child);
      case 8:
        return (Ot(t, l, l.pendingProps.children, e), l.child);
      case 12:
        return (Ot(t, l, l.pendingProps.children, e), l.child);
      case 10:
        return (
          (a = l.pendingProps),
          ae(l, l.type, a.value),
          Ot(t, l, a.children, e),
          l.child
        );
      case 9:
        return (
          (n = l.type._context),
          (a = l.pendingProps.children),
          He(l),
          (n = Mt(n)),
          (a = a(n)),
          (l.flags |= 1),
          Ot(t, l, a, e),
          l.child
        );
      case 14:
        return Do(t, l, l.type, l.pendingProps, e);
      case 15:
        return Uo(t, l, l.type, l.pendingProps, e);
      case 19:
        return Qo(t, l, e);
      case 31:
        return P0(t, l, e);
      case 22:
        return Co(t, l, e, l.pendingProps);
      case 24:
        return (
          He(l),
          (a = Mt(bt)),
          t === null
            ? ((n = Ri()),
              n === null &&
                ((n = st),
                (u = Ci()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= e),
                (n = u)),
              (l.memoizedState = { parent: a, cache: n }),
              wi(l),
              ae(l, bt, n))
            : ((t.lanes & e) !== 0 && (qi(t, l), Ia(l, null, null, e), Fa()),
              (n = t.memoizedState),
              (u = l.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (l.memoizedState = n),
                  l.lanes === 0 &&
                    (l.memoizedState = l.updateQueue.baseState = n),
                  ae(l, bt, a))
                : ((a = u.cache),
                  ae(l, bt, a),
                  a !== n.cache && Ui(l, [bt], e, !0))),
          Ot(t, l, l.pendingProps.children, e),
          l.child
        );
      case 29:
        throw l.pendingProps;
    }
    throw Error(d(156, l.tag));
  }
  function Xl(t) {
    t.flags |= 4;
  }
  function xc(t, l, e, a, n) {
    if (((l = (t.mode & 32) !== 0) && (l = !1), l)) {
      if (((t.flags |= 16777216), (n & 335544128) === n))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (vr()) t.flags |= 8192;
        else throw ((we = Fn), Bi);
    } else t.flags &= -16777217;
  }
  function Zo(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !nd(l)))
      if (vr()) t.flags |= 8192;
      else throw ((we = Fn), Bi);
  }
  function hu(t, l) {
    (l !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((l = t.tag !== 22 ? Sf() : 536870912), (t.lanes |= l), (ba |= l)));
  }
  function nn(t, l) {
    if (!$)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null;)
            (l.alternate !== null && (e = l), (l = l.sibling));
          e === null ? (t.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null;)
            (e.alternate !== null && (a = e), (e = e.sibling));
          a === null
            ? l || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function mt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child,
      e = 0,
      a = 0;
    if (l)
      for (var n = t.child; n !== null;)
        ((e |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling));
    else
      for (n = t.child; n !== null;)
        ((e |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = e), l);
  }
  function lm(t, l, e) {
    var a = l.pendingProps;
    switch ((Ni(l), l.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (mt(l), null);
      case 1:
        return (mt(l), null);
      case 3:
        return (
          (e = l.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          l.memoizedState.cache !== a && (l.flags |= 2048),
          ql(bt),
          gt(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (t === null || t.child === null) &&
            (ca(l)
              ? Xl(l)
              : t === null ||
                (t.memoizedState.isDehydrated && (l.flags & 256) === 0) ||
                ((l.flags |= 1024), Mi())),
          mt(l),
          null
        );
      case 26:
        var n = l.type,
          u = l.memoizedState;
        return (
          t === null
            ? (Xl(l),
              u !== null ? (mt(l), Zo(l, u)) : (mt(l), xc(l, n, null, a, e)))
            : u
              ? u !== t.memoizedState
                ? (Xl(l), mt(l), Zo(l, u))
                : (mt(l), (l.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== a && Xl(l),
                mt(l),
                xc(l, n, t, a, e)),
          null
        );
      case 27:
        if (
          (Tn(l),
          (e = L.current),
          (n = l.type),
          t !== null && l.stateNode != null)
        )
          t.memoizedProps !== a && Xl(l);
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(d(166));
            return (mt(l), null);
          }
          ((t = M.current),
            ca(l) ? Ss(l) : ((t = $r(n, a, e)), (l.stateNode = t), Xl(l)));
        }
        return (mt(l), null);
      case 5:
        if ((Tn(l), (n = l.type), t !== null && l.stateNode != null))
          t.memoizedProps !== a && Xl(l);
        else {
          if (!a) {
            if (l.stateNode === null) throw Error(d(166));
            return (mt(l), null);
          }
          if (((u = M.current), ca(l))) Ss(l);
          else {
            var i = Mu(L.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((u = i.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            ((u[Nt] = l), (u[Lt] = a));
            t: for (i = l.child; i !== null;) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === l) break t;
              for (; i.sibling === null;) {
                if (i.return === null || i.return === l) break t;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            l.stateNode = u;
            t: switch ((Dt(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Xl(l);
          }
        }
        return (
          mt(l),
          xc(l, l.type, t === null ? null : t.memoizedProps, l.pendingProps, e),
          null
        );
      case 6:
        if (t && l.stateNode != null) t.memoizedProps !== a && Xl(l);
        else {
          if (typeof a != "string" && l.stateNode === null) throw Error(d(166));
          if (((t = L.current), ca(l))) {
            if (
              ((t = l.stateNode),
              (e = l.memoizedProps),
              (a = null),
              (n = _t),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((t[Nt] = l),
              (t = !!(
                t.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Yr(t.nodeValue, e)
              )),
              t || ee(l, !0));
          } else
            ((t = Mu(t).createTextNode(a)), (t[Nt] = l), (l.stateNode = t));
        }
        return (mt(l), null);
      case 31:
        if (((e = l.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = ca(l)), e !== null)) {
            if (t === null) {
              if (!a) throw Error(d(318));
              if (
                ((t = l.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(d(557));
              t[Nt] = l;
            } else
              (Ue(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4));
            (mt(l), (t = !1));
          } else
            ((e = Mi()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = e),
              (t = !0));
          if (!t) return l.flags & 256 ? (nl(l), l) : (nl(l), null);
          if ((l.flags & 128) !== 0) throw Error(d(558));
        }
        return (mt(l), null);
      case 13:
        if (
          ((a = l.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = ca(l)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(d(318));
              if (
                ((n = l.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(d(317));
              n[Nt] = l;
            } else
              (Ue(),
                (l.flags & 128) === 0 && (l.memoizedState = null),
                (l.flags |= 4));
            (mt(l), (n = !1));
          } else
            ((n = Mi()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return l.flags & 256 ? (nl(l), l) : (nl(l), null);
        }
        return (
          nl(l),
          (l.flags & 128) !== 0
            ? ((l.lanes = e), l)
            : ((e = a !== null),
              (t = t !== null && t.memoizedState !== null),
              e &&
                ((a = l.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              e !== t && e && (l.child.flags |= 8192),
              hu(l, l.updateQueue),
              mt(l),
              null)
        );
      case 4:
        return (gt(), t === null && Qc(l.stateNode.containerInfo), mt(l), null);
      case 10:
        return (ql(l.type), mt(l), null);
      case 19:
        if ((j(pt), (a = l.memoizedState), a === null)) return (mt(l), null);
        if (((n = (l.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) nn(a, !1);
          else {
            if (yt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = l.child; t !== null;) {
                if (((u = lu(t)), u !== null)) {
                  for (
                    l.flags |= 128,
                      nn(a, !1),
                      t = u.updateQueue,
                      l.updateQueue = t,
                      hu(l, t),
                      l.subtreeFlags = 0,
                      t = e,
                      e = l.child;
                    e !== null;
                  )
                    (ys(e, t), (e = e.sibling));
                  return (
                    A(pt, (pt.current & 1) | 2),
                    $ && Bl(l, a.treeForkCount),
                    l.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              It() > xu &&
              ((l.flags |= 128), (n = !0), nn(a, !1), (l.lanes = 4194304));
          }
        else {
          if (!n)
            if (((t = lu(u)), t !== null)) {
              if (
                ((l.flags |= 128),
                (n = !0),
                (t = t.updateQueue),
                (l.updateQueue = t),
                hu(l, t),
                nn(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !u.alternate &&
                  !$)
              )
                return (mt(l), null);
            } else
              2 * It() - a.renderingStartTime > xu &&
                e !== 536870912 &&
                ((l.flags |= 128), (n = !0), nn(a, !1), (l.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = l.child), (l.child = u))
            : ((t = a.last),
              t !== null ? (t.sibling = u) : (l.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = It()),
            (t.sibling = null),
            (e = pt.current),
            A(pt, n ? (e & 1) | 2 : e & 1),
            $ && Bl(l, a.treeForkCount),
            t)
          : (mt(l), null);
      case 22:
      case 23:
        return (
          nl(l),
          Xi(),
          (a = l.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (l.flags |= 8192)
            : a && (l.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (l.flags & 128) === 0 &&
              (mt(l), l.subtreeFlags & 6 && (l.flags |= 8192))
            : mt(l),
          (e = l.updateQueue),
          e !== null && hu(l, e.retryQueue),
          (e = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          (a = null),
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          a !== e && (l.flags |= 2048),
          t !== null && j(Re),
          null
        );
      case 24:
        return (
          (e = null),
          t !== null && (e = t.memoizedState.cache),
          l.memoizedState.cache !== e && (l.flags |= 2048),
          ql(bt),
          mt(l),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, l.tag));
  }
  function em(t, l) {
    switch ((Ni(l), l.tag)) {
      case 1:
        return (
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 3:
        return (
          ql(bt),
          gt(),
          (t = l.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((l.flags = (t & -65537) | 128), l)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Tn(l), null);
      case 31:
        if (l.memoizedState !== null) {
          if ((nl(l), l.alternate === null)) throw Error(d(340));
          Ue();
        }
        return (
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 13:
        if (
          (nl(l), (t = l.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (l.alternate === null) throw Error(d(340));
          Ue();
        }
        return (
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 19:
        return (j(pt), null);
      case 4:
        return (gt(), null);
      case 10:
        return (ql(l.type), null);
      case 22:
      case 23:
        return (
          nl(l),
          Xi(),
          t !== null && j(Re),
          (t = l.flags),
          t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
        );
      case 24:
        return (ql(bt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Lo(t, l) {
    switch ((Ni(l), l.tag)) {
      case 3:
        (ql(bt), gt());
        break;
      case 26:
      case 27:
      case 5:
        Tn(l);
        break;
      case 4:
        gt();
        break;
      case 31:
        l.memoizedState !== null && nl(l);
        break;
      case 13:
        nl(l);
        break;
      case 19:
        j(pt);
        break;
      case 10:
        ql(l.type);
        break;
      case 22:
      case 23:
        (nl(l), Xi(), t !== null && j(Re));
        break;
      case 24:
        ql(bt);
    }
  }
  function un(t, l) {
    try {
      var e = l.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & t) === t) {
            a = void 0;
            var u = e.create,
              i = e.inst;
            ((a = u()), (i.destroy = a));
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (f) {
      at(l, l.return, f);
    }
  }
  function se(t, l, e) {
    try {
      var a = l.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              f = i.destroy;
            if (f !== void 0) {
              ((i.destroy = void 0), (n = l));
              var s = e,
                v = f;
              try {
                v();
              } catch (x) {
                at(n, s, x);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (x) {
      at(l, l.return, x);
    }
  }
  function Vo(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var e = t.stateNode;
      try {
        Hs(l, e);
      } catch (a) {
        at(t, t.return, a);
      }
    }
  }
  function Ko(t, l, e) {
    ((e.props = Ge(t.type, t.memoizedProps)), (e.state = t.memoizedState));
    try {
      e.componentWillUnmount();
    } catch (a) {
      at(t, l, a);
    }
  }
  function cn(t, l) {
    try {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof e == "function" ? (t.refCleanup = e(a)) : (e.current = a);
      }
    } catch (n) {
      at(t, l, n);
    }
  }
  function _l(t, l) {
    var e = t.ref,
      a = t.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          at(t, l, n);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          at(t, l, n);
        }
      else e.current = null;
  }
  function Jo(t) {
    var l = t.type,
      e = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break t;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      at(t, t.return, n);
    }
  }
  function bc(t, l, e) {
    try {
      var a = t.stateNode;
      (Em(a, t.type, e, l), (a[Lt] = l));
    } catch (n) {
      at(t, t.return, n);
    }
  }
  function ko(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ye(t.type)) ||
      t.tag === 4
    );
  }
  function Sc(t) {
    t: for (;;) {
      for (; t.sibling === null;) {
        if (t.return === null || ko(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && ye(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function zc(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode),
        l
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e
            ).insertBefore(t, l)
          : ((l =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e),
            l.appendChild(t),
            (e = e._reactRootContainer),
            e != null || l.onclick !== null || (l.onclick = Cl)));
    else if (
      a !== 4 &&
      (a === 27 && ye(t.type) && ((e = t.stateNode), (l = null)),
      (t = t.child),
      t !== null)
    )
      for (zc(t, l, e), t = t.sibling; t !== null;)
        (zc(t, l, e), (t = t.sibling));
  }
  function vu(t, l, e) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode), l ? e.insertBefore(t, l) : e.appendChild(t));
    else if (
      a !== 4 &&
      (a === 27 && ye(t.type) && (e = t.stateNode), (t = t.child), t !== null)
    )
      for (vu(t, l, e), t = t.sibling; t !== null;)
        (vu(t, l, e), (t = t.sibling));
  }
  function Wo(t) {
    var l = t.stateNode,
      e = t.memoizedProps;
    try {
      for (var a = t.type, n = l.attributes; n.length;)
        l.removeAttributeNode(n[0]);
      (Dt(l, a, e), (l[Nt] = t), (l[Lt] = e));
    } catch (u) {
      at(t, t.return, u);
    }
  }
  var Zl = !1,
    jt = !1,
    jc = !1,
    $o = typeof WeakSet == "function" ? WeakSet : Set,
    At = null;
  function am(t, l) {
    if (((t = t.containerInfo), (Lc = Bu), (t = cs(t)), yi(t))) {
      if ("selectionStart" in t)
        var e = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          e = ((e = t.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (e.nodeType, u.nodeType);
            } catch {
              e = null;
              break t;
            }
            var i = 0,
              f = -1,
              s = -1,
              v = 0,
              x = 0,
              z = t,
              y = null;
            l: for (;;) {
              for (
                var g;
                z !== e || (n !== 0 && z.nodeType !== 3) || (f = i + n),
                  z !== u || (a !== 0 && z.nodeType !== 3) || (s = i + a),
                  z.nodeType === 3 && (i += z.nodeValue.length),
                  (g = z.firstChild) !== null;
              )
                ((y = z), (z = g));
              for (;;) {
                if (z === t) break l;
                if (
                  (y === e && ++v === n && (f = i),
                  y === u && ++x === a && (s = i),
                  (g = z.nextSibling) !== null)
                )
                  break;
                ((z = y), (y = z.parentNode));
              }
              z = g;
            }
            e = f === -1 || s === -1 ? null : { start: f, end: s };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      Vc = { focusedElem: t, selectionRange: e }, Bu = !1, At = l;
      At !== null;
    )
      if (
        ((l = At), (t = l.child), (l.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = l), (At = t));
      else
        for (; At !== null;) {
          switch (((l = At), (u = l.alternate), (t = l.flags), l.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = l.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (e = 0; e < t.length; e++)
                  ((n = t[e]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                ((t = void 0),
                  (e = l),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = e.stateNode));
                try {
                  var _ = Ge(e.type, n);
                  ((t = a.getSnapshotBeforeUpdate(_, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = t));
                } catch (R) {
                  at(e, e.return, R);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = l.stateNode.containerInfo), (e = t.nodeType), e === 9)
                )
                  kc(t);
                else if (e === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      kc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(d(163));
          }
          if (((t = l.sibling), t !== null)) {
            ((t.return = l.return), (At = t));
            break;
          }
          At = l.return;
        }
  }
  function Fo(t, l, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Vl(t, e), a & 4 && un(5, e));
        break;
      case 1:
        if ((Vl(t, e), a & 4))
          if (((t = e.stateNode), l === null))
            try {
              t.componentDidMount();
            } catch (i) {
              at(e, e.return, i);
            }
          else {
            var n = Ge(e.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              t.componentDidUpdate(n, l, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              at(e, e.return, i);
            }
          }
        (a & 64 && Vo(e), a & 512 && cn(e, e.return));
        break;
      case 3:
        if ((Vl(t, e), a & 64 && ((t = e.updateQueue), t !== null))) {
          if (((l = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
          try {
            Hs(t, l);
          } catch (i) {
            at(e, e.return, i);
          }
        }
        break;
      case 27:
        l === null && a & 4 && Wo(e);
      case 26:
      case 5:
        (Vl(t, e), l === null && a & 4 && Jo(e), a & 512 && cn(e, e.return));
        break;
      case 12:
        Vl(t, e);
        break;
      case 31:
        (Vl(t, e), a & 4 && tr(t, e));
        break;
      case 13:
        (Vl(t, e),
          a & 4 && lr(t, e),
          a & 64 &&
            ((t = e.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((e = dm.bind(null, e)), Um(t, e)))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || Zl), !a)) {
          ((l = (l !== null && l.memoizedState !== null) || jt), (n = Zl));
          var u = jt;
          ((Zl = a),
            (jt = l) && !u ? Kl(t, e, (e.subtreeFlags & 8772) !== 0) : Vl(t, e),
            (Zl = n),
            (jt = u));
        }
        break;
      case 30:
        break;
      default:
        Vl(t, e);
    }
  }
  function Io(t) {
    var l = t.alternate;
    (l !== null && ((t.alternate = null), Io(l)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((l = t.stateNode), l !== null && Pu(l)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var ht = null,
    Kt = !1;
  function Ll(t, l, e) {
    for (e = e.child; e !== null;) (Po(t, l, e), (e = e.sibling));
  }
  function Po(t, l, e) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function")
      try {
        Pt.onCommitFiberUnmount(Oa, e);
      } catch {}
    switch (e.tag) {
      case 26:
        (jt || _l(e, l),
          Ll(t, l, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e)));
        break;
      case 27:
        jt || _l(e, l);
        var a = ht,
          n = Kt;
        (ye(e.type) && ((ht = e.stateNode), (Kt = !1)),
          Ll(t, l, e),
          yn(e.stateNode),
          (ht = a),
          (Kt = n));
        break;
      case 5:
        jt || _l(e, l);
      case 6:
        if (
          ((a = ht),
          (n = Kt),
          (ht = null),
          Ll(t, l, e),
          (ht = a),
          (Kt = n),
          ht !== null)
        )
          if (Kt)
            try {
              (ht.nodeType === 9
                ? ht.body
                : ht.nodeName === "HTML"
                  ? ht.ownerDocument.body
                  : ht
              ).removeChild(e.stateNode);
            } catch (u) {
              at(e, l, u);
            }
          else
            try {
              ht.removeChild(e.stateNode);
            } catch (u) {
              at(e, l, u);
            }
        break;
      case 18:
        ht !== null &&
          (Kt
            ? ((t = ht),
              Vr(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                e.stateNode,
              ),
              _a(t))
            : Vr(ht, e.stateNode));
        break;
      case 4:
        ((a = ht),
          (n = Kt),
          (ht = e.stateNode.containerInfo),
          (Kt = !0),
          Ll(t, l, e),
          (ht = a),
          (Kt = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (se(2, e, l), jt || se(4, e, l), Ll(t, l, e));
        break;
      case 1:
        (jt ||
          (_l(e, l),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && Ko(e, l, a)),
          Ll(t, l, e));
        break;
      case 21:
        Ll(t, l, e);
        break;
      case 22:
        ((jt = (a = jt) || e.memoizedState !== null), Ll(t, l, e), (jt = a));
        break;
      default:
        Ll(t, l, e);
    }
  }
  function tr(t, l) {
    if (
      l.memoizedState === null &&
      ((t = l.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        _a(t);
      } catch (e) {
        at(l, l.return, e);
      }
    }
  }
  function lr(t, l) {
    if (
      l.memoizedState === null &&
      ((t = l.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        _a(t);
      } catch (e) {
        at(l, l.return, e);
      }
  }
  function nm(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return (l === null && (l = t.stateNode = new $o()), l);
      case 22:
        return (
          (t = t.stateNode),
          (l = t._retryCache),
          l === null && (l = t._retryCache = new $o()),
          l
        );
      default:
        throw Error(d(435, t.tag));
    }
  }
  function yu(t, l) {
    var e = nm(t);
    l.forEach(function (a) {
      if (!e.has(a)) {
        e.add(a);
        var n = mm.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function Jt(t, l) {
    var e = l.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a],
          u = t,
          i = l,
          f = i;
        t: for (; f !== null;) {
          switch (f.tag) {
            case 27:
              if (ye(f.type)) {
                ((ht = f.stateNode), (Kt = !1));
                break t;
              }
              break;
            case 5:
              ((ht = f.stateNode), (Kt = !1));
              break t;
            case 3:
            case 4:
              ((ht = f.stateNode.containerInfo), (Kt = !0));
              break t;
          }
          f = f.return;
        }
        if (ht === null) throw Error(d(160));
        (Po(u, i, n),
          (ht = null),
          (Kt = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (l.subtreeFlags & 13886)
      for (l = l.child; l !== null;) (er(l, t), (l = l.sibling));
  }
  var Sl = null;
  function er(t, l) {
    var e = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Jt(l, t),
          kt(t),
          a & 4 && (se(3, t, t.return), un(3, t), se(5, t, t.return)));
        break;
      case 1:
        (Jt(l, t),
          kt(t),
          a & 512 && (jt || e === null || _l(e, e.return)),
          a & 64 &&
            Zl &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((e = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = e === null ? a : e.concat(a))))));
        break;
      case 26:
        var n = Sl;
        if (
          (Jt(l, t),
          kt(t),
          a & 512 && (jt || e === null || _l(e, e.return)),
          a & 4)
        ) {
          var u = e !== null ? e.memoizedState : null;
          if (((a = t.memoizedState), e === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ((a = t.type),
                    (e = t.memoizedProps),
                    (n = n.ownerDocument || n));
                  l: switch (a) {
                    case "title":
                      ((u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Ca] ||
                          u[Nt] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title"),
                          )),
                        Dt(u, a, e),
                        (u[Nt] = t),
                        Tt(u),
                        (a = u));
                      break t;
                    case "link":
                      var i = ed("link", "href", n).get(a + (e.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (
                            ((u = i[f]),
                            u.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              u.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              u.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              u.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      ((u = n.createElement(a)),
                        Dt(u, a, e),
                        n.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (i = ed("meta", "content", n).get(
                          a + (e.content || ""),
                        ))
                      ) {
                        for (f = 0; f < i.length; f++)
                          if (
                            ((u = i[f]),
                            u.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              u.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              u.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              u.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      ((u = n.createElement(a)),
                        Dt(u, a, e),
                        n.head.appendChild(u));
                      break;
                    default:
                      throw Error(d(468, a));
                  }
                  ((u[Nt] = t), Tt(u), (a = u));
                }
                t.stateNode = a;
              } else ad(n, t.type, t.stateNode);
            else t.stateNode = ld(n, a, t.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : u.count--,
                a === null
                  ? ad(n, t.type, t.stateNode)
                  : ld(n, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                bc(t, t.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        (Jt(l, t),
          kt(t),
          a & 512 && (jt || e === null || _l(e, e.return)),
          e !== null && a & 4 && bc(t, t.memoizedProps, e.memoizedProps));
        break;
      case 5:
        if (
          (Jt(l, t),
          kt(t),
          a & 512 && (jt || e === null || _l(e, e.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            Fe(n, "");
          } catch (_) {
            at(t, t.return, _);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), bc(t, n, e !== null ? e.memoizedProps : n)),
          a & 1024 && (jc = !0));
        break;
      case 6:
        if ((Jt(l, t), kt(t), a & 4)) {
          if (t.stateNode === null) throw Error(d(162));
          ((a = t.memoizedProps), (e = t.stateNode));
          try {
            e.nodeValue = a;
          } catch (_) {
            at(t, t.return, _);
          }
        }
        break;
      case 3:
        if (
          ((Uu = null),
          (n = Sl),
          (Sl = Ou(l.containerInfo)),
          Jt(l, t),
          (Sl = n),
          kt(t),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            _a(l.containerInfo);
          } catch (_) {
            at(t, t.return, _);
          }
        jc && ((jc = !1), ar(t));
        break;
      case 4:
        ((a = Sl),
          (Sl = Ou(t.stateNode.containerInfo)),
          Jt(l, t),
          kt(t),
          (Sl = a));
        break;
      case 12:
        (Jt(l, t), kt(t));
        break;
      case 31:
        (Jt(l, t),
          kt(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), yu(t, a))));
        break;
      case 13:
        (Jt(l, t),
          kt(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (pu = It()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), yu(t, a))));
        break;
      case 22:
        n = t.memoizedState !== null;
        var s = e !== null && e.memoizedState !== null,
          v = Zl,
          x = jt;
        if (
          ((Zl = v || n),
          (jt = x || s),
          Jt(l, t),
          (jt = x),
          (Zl = v),
          kt(t),
          a & 8192)
        )
          t: for (
            l = t.stateNode,
              l._visibility = n ? l._visibility & -2 : l._visibility | 1,
              n && (e === null || s || Zl || jt || Qe(t)),
              e = null,
              l = t;
            ;
          ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                s = e = l;
                try {
                  if (((u = s.stateNode), n))
                    ((i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    f = s.stateNode;
                    var z = s.memoizedProps.style,
                      y =
                        z != null && z.hasOwnProperty("display")
                          ? z.display
                          : null;
                    f.style.display =
                      y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                  }
                } catch (_) {
                  at(s, s.return, _);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                s = l;
                try {
                  s.stateNode.nodeValue = n ? "" : s.memoizedProps;
                } catch (_) {
                  at(s, s.return, _);
                }
              }
            } else if (l.tag === 18) {
              if (e === null) {
                s = l;
                try {
                  var g = s.stateNode;
                  n ? Kr(g, !0) : Kr(s.stateNode, !1);
                } catch (_) {
                  at(s, s.return, _);
                }
              }
            } else if (
              ((l.tag !== 22 && l.tag !== 23) ||
                l.memoizedState === null ||
                l === t) &&
              l.child !== null
            ) {
              ((l.child.return = l), (l = l.child));
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null;) {
              if (l.return === null || l.return === t) break t;
              (e === l && (e = null), (l = l.return));
            }
            (e === l && (e = null),
              (l.sibling.return = l.return),
              (l = l.sibling));
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), yu(t, e))));
        break;
      case 19:
        (Jt(l, t),
          kt(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), yu(t, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Jt(l, t), kt(t));
    }
  }
  function kt(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var e, a = t.return; a !== null;) {
          if (ko(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(d(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode,
              u = Sc(t);
            vu(t, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Fe(i, ""), (e.flags &= -33));
            var f = Sc(t);
            vu(t, f, i);
            break;
          case 3:
          case 4:
            var s = e.stateNode.containerInfo,
              v = Sc(t);
            zc(t, v, s);
            break;
          default:
            throw Error(d(161));
        }
      } catch (x) {
        at(t, t.return, x);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function ar(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null;) {
        var l = t;
        (ar(l),
          l.tag === 5 && l.flags & 1024 && l.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function Vl(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null;) (Fo(t, l.alternate, l), (l = l.sibling));
  }
  function Qe(t) {
    for (t = t.child; t !== null;) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (se(4, l, l.return), Qe(l));
          break;
        case 1:
          _l(l, l.return);
          var e = l.stateNode;
          (typeof e.componentWillUnmount == "function" && Ko(l, l.return, e),
            Qe(l));
          break;
        case 27:
          yn(l.stateNode);
        case 26:
        case 5:
          (_l(l, l.return), Qe(l));
          break;
        case 22:
          l.memoizedState === null && Qe(l);
          break;
        case 30:
          Qe(l);
          break;
        default:
          Qe(l);
      }
      t = t.sibling;
    }
  }
  function Kl(t, l, e) {
    for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null;) {
      var a = l.alternate,
        n = t,
        u = l,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Kl(n, u, e), un(4, u));
          break;
        case 1:
          if (
            (Kl(n, u, e),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (v) {
              at(a, a.return, v);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var f = a.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++)
                  Cs(s[n], f);
            } catch (v) {
              at(a, a.return, v);
            }
          }
          (e && i & 64 && Vo(u), cn(u, u.return));
          break;
        case 27:
          Wo(u);
        case 26:
        case 5:
          (Kl(n, u, e), e && a === null && i & 4 && Jo(u), cn(u, u.return));
          break;
        case 12:
          Kl(n, u, e);
          break;
        case 31:
          (Kl(n, u, e), e && i & 4 && tr(n, u));
          break;
        case 13:
          (Kl(n, u, e), e && i & 4 && lr(n, u));
          break;
        case 22:
          (u.memoizedState === null && Kl(n, u, e), cn(u, u.return));
          break;
        case 30:
          break;
        default:
          Kl(n, u, e);
      }
      l = l.sibling;
    }
  }
  function Ec(t, l) {
    var e = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
      (t = null),
      l.memoizedState !== null &&
        l.memoizedState.cachePool !== null &&
        (t = l.memoizedState.cachePool.pool),
      t !== e && (t != null && t.refCount++, e != null && Ka(e)));
  }
  function Tc(t, l) {
    ((t = null),
      l.alternate !== null && (t = l.alternate.memoizedState.cache),
      (l = l.memoizedState.cache),
      l !== t && (l.refCount++, t != null && Ka(t)));
  }
  function zl(t, l, e, a) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null;) (nr(t, l, e, a), (l = l.sibling));
  }
  function nr(t, l, e, a) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (zl(t, l, e, a), n & 2048 && un(9, l));
        break;
      case 1:
        zl(t, l, e, a);
        break;
      case 3:
        (zl(t, l, e, a),
          n & 2048 &&
            ((t = null),
            l.alternate !== null && (t = l.alternate.memoizedState.cache),
            (l = l.memoizedState.cache),
            l !== t && (l.refCount++, t != null && Ka(t))));
        break;
      case 12:
        if (n & 2048) {
          (zl(t, l, e, a), (t = l.stateNode));
          try {
            var u = l.memoizedProps,
              i = u.id,
              f = u.onPostCommit;
            typeof f == "function" &&
              f(
                i,
                l.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (s) {
            at(l, l.return, s);
          }
        } else zl(t, l, e, a);
        break;
      case 31:
        zl(t, l, e, a);
        break;
      case 13:
        zl(t, l, e, a);
        break;
      case 23:
        break;
      case 22:
        ((u = l.stateNode),
          (i = l.alternate),
          l.memoizedState !== null
            ? u._visibility & 2
              ? zl(t, l, e, a)
              : fn(t, l)
            : u._visibility & 2
              ? zl(t, l, e, a)
              : ((u._visibility |= 2),
                ga(t, l, e, a, (l.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Ec(i, l));
        break;
      case 24:
        (zl(t, l, e, a), n & 2048 && Tc(l.alternate, l));
        break;
      default:
        zl(t, l, e, a);
    }
  }
  function ga(t, l, e, a, n) {
    for (
      n = n && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child;
      l !== null;
    ) {
      var u = t,
        i = l,
        f = e,
        s = a,
        v = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (ga(u, i, f, s, n), un(8, i));
          break;
        case 23:
          break;
        case 22:
          var x = i.stateNode;
          (i.memoizedState !== null
            ? x._visibility & 2
              ? ga(u, i, f, s, n)
              : fn(u, i)
            : ((x._visibility |= 2), ga(u, i, f, s, n)),
            n && v & 2048 && Ec(i.alternate, i));
          break;
        case 24:
          (ga(u, i, f, s, n), n && v & 2048 && Tc(i.alternate, i));
          break;
        default:
          ga(u, i, f, s, n);
      }
      l = l.sibling;
    }
  }
  function fn(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null;) {
        var e = t,
          a = l,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (fn(e, a), n & 2048 && Ec(a.alternate, a));
            break;
          case 24:
            (fn(e, a), n & 2048 && Tc(a.alternate, a));
            break;
          default:
            fn(e, a);
        }
        l = l.sibling;
      }
  }
  var sn = 8192;
  function pa(t, l, e) {
    if (t.subtreeFlags & sn)
      for (t = t.child; t !== null;) (ur(t, l, e), (t = t.sibling));
  }
  function ur(t, l, e) {
    switch (t.tag) {
      case 26:
        (pa(t, l, e),
          t.flags & sn &&
            t.memoizedState !== null &&
            Lm(e, Sl, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        pa(t, l, e);
        break;
      case 3:
      case 4:
        var a = Sl;
        ((Sl = Ou(t.stateNode.containerInfo)), pa(t, l, e), (Sl = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = sn), (sn = 16777216), pa(t, l, e), (sn = a))
            : pa(t, l, e));
        break;
      default:
        pa(t, l, e);
    }
  }
  function ir(t) {
    var l = t.alternate;
    if (l !== null && ((t = l.child), t !== null)) {
      l.child = null;
      do ((l = t.sibling), (t.sibling = null), (t = l));
      while (t !== null);
    }
  }
  function on(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          ((At = a), fr(a, t));
        }
      ir(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) (cr(t), (t = t.sibling));
  }
  function cr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (on(t), t.flags & 2048 && se(9, t, t.return));
        break;
      case 3:
        on(t);
        break;
      case 12:
        on(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null &&
        l._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((l._visibility &= -3), gu(t))
          : on(t);
        break;
      default:
        on(t);
    }
  }
  function gu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var e = 0; e < l.length; e++) {
          var a = l[e];
          ((At = a), fr(a, t));
        }
      ir(t);
    }
    for (t = t.child; t !== null;) {
      switch (((l = t), l.tag)) {
        case 0:
        case 11:
        case 15:
          (se(8, l, l.return), gu(l));
          break;
        case 22:
          ((e = l.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), gu(l)));
          break;
        default:
          gu(l);
      }
      t = t.sibling;
    }
  }
  function fr(t, l) {
    for (; At !== null;) {
      var e = At;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          se(8, e, l);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ka(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) ((a.return = e), (At = a));
      else
        t: for (e = t; At !== null;) {
          a = At;
          var n = a.sibling,
            u = a.return;
          if ((Io(a), a === e)) {
            At = null;
            break t;
          }
          if (n !== null) {
            ((n.return = u), (At = n));
            break t;
          }
          At = u;
        }
    }
  }
  var um = {
      getCacheForType: function (t) {
        var l = Mt(bt),
          e = l.data.get(t);
        return (e === void 0 && ((e = t()), l.data.set(t, e)), e);
      },
      cacheSignal: function () {
        return Mt(bt).controller.signal;
      },
    },
    im = typeof WeakMap == "function" ? WeakMap : Map,
    tt = 0,
    st = null,
    V = null,
    J = 0,
    et = 0,
    ul = null,
    oe = !1,
    xa = !1,
    Ac = !1,
    Jl = 0,
    yt = 0,
    re = 0,
    Xe = 0,
    Nc = 0,
    il = 0,
    ba = 0,
    rn = null,
    Wt = null,
    _c = !1,
    pu = 0,
    sr = 0,
    xu = 1 / 0,
    bu = null,
    de = null,
    Et = 0,
    me = null,
    Sa = null,
    kl = 0,
    Mc = 0,
    Oc = null,
    or = null,
    dn = 0,
    Dc = null;
  function cl() {
    return (tt & 2) !== 0 && J !== 0 ? J & -J : b.T !== null ? wc() : Tf();
  }
  function rr() {
    if (il === 0)
      if ((J & 536870912) === 0 || $) {
        var t = _n;
        ((_n <<= 1), (_n & 3932160) === 0 && (_n = 262144), (il = t));
      } else il = 536870912;
    return ((t = al.current), t !== null && (t.flags |= 32), il);
  }
  function $t(t, l, e) {
    (((t === st && (et === 2 || et === 9)) || t.cancelPendingCommit !== null) &&
      (za(t, 0), he(t, J, il, !1)),
      Ua(t, e),
      ((tt & 2) === 0 || t !== st) &&
        (t === st &&
          ((tt & 2) === 0 && (Xe |= e), yt === 4 && he(t, J, il, !1)),
        Ml(t)));
  }
  function dr(t, l, e) {
    if ((tt & 6) !== 0) throw Error(d(327));
    var a = (!e && (l & 127) === 0 && (l & t.expiredLanes) === 0) || Da(t, l),
      n = a ? sm(t, l) : Cc(t, l, !0),
      u = a;
    do {
      if (n === 0) {
        xa && !a && he(t, l, 0, !1);
        break;
      } else {
        if (((e = t.current.alternate), u && !cm(e))) {
          ((n = Cc(t, l, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = l), t.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            ((i = t.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            l = i;
            t: {
              var f = t;
              n = rn;
              var s = f.current.memoizedState.isDehydrated;
              if ((s && (za(f, i).flags |= 256), (i = Cc(f, i, !1)), i !== 2)) {
                if (Ac && !s) {
                  ((f.errorRecoveryDisabledLanes |= u), (Xe |= u), (n = 4));
                  break t;
                }
                ((u = Wt),
                  (Wt = n),
                  u !== null &&
                    (Wt === null ? (Wt = u) : Wt.push.apply(Wt, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (za(t, 0), he(t, l, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (u = n), u)) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              he(a, l, il, !oe);
              break t;
            case 2:
              Wt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((l & 62914560) === l && ((n = pu + 300 - It()), 10 < n)) {
            if ((he(a, l, il, !oe), On(a, 0, !0) !== 0)) break t;
            ((kl = l),
              (a.timeoutHandle = Zr(
                mr.bind(
                  null,
                  a,
                  e,
                  Wt,
                  bu,
                  _c,
                  l,
                  il,
                  Xe,
                  ba,
                  oe,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              )));
            break t;
          }
          mr(a, e, Wt, bu, _c, l, il, Xe, ba, oe, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ml(t);
  }
  function mr(t, l, e, a, n, u, i, f, s, v, x, z, y, g) {
    if (
      ((t.timeoutHandle = -1),
      (z = l.subtreeFlags),
      z & 8192 || (z & 16785408) === 16785408)
    ) {
      ((z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Cl,
      }),
        ur(l, u, z));
      var _ =
        (u & 62914560) === u ? pu - It() : (u & 4194048) === u ? sr - It() : 0;
      if (((_ = Vm(z, _)), _ !== null)) {
        ((kl = u),
          (t.cancelPendingCommit = _(
            Sr.bind(null, t, l, u, e, a, n, i, f, s, x, z, null, y, g),
          )),
          he(t, u, i, !v));
        return;
      }
    }
    Sr(t, l, u, e, a, n, i, f, s);
  }
  function cm(t) {
    for (var l = t; ;) {
      var e = l.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        l.flags & 16384 &&
        ((e = l.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var n = e[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!ll(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = l.child), l.subtreeFlags & 16384 && e !== null))
        ((e.return = l), (l = e));
      else {
        if (l === t) break;
        for (; l.sibling === null;) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    }
    return !0;
  }
  function he(t, l, e, a) {
    ((l &= ~Nc),
      (l &= ~Xe),
      (t.suspendedLanes |= l),
      (t.pingedLanes &= ~l),
      a && (t.warmLanes |= l),
      (a = t.expirationTimes));
    for (var n = l; 0 < n;) {
      var u = 31 - tl(n),
        i = 1 << u;
      ((a[u] = -1), (n &= ~i));
    }
    e !== 0 && zf(t, e, l);
  }
  function Su() {
    return (tt & 6) === 0 ? (mn(0), !1) : !0;
  }
  function Uc() {
    if (V !== null) {
      if (et === 0) var t = V.return;
      else ((t = V), (wl = Ce = null), ki(t), (da = null), (ka = 0), (t = V));
      for (; t !== null;) (Lo(t.alternate, t), (t = t.return));
      V = null;
    }
  }
  function za(t, l) {
    var e = t.timeoutHandle;
    (e !== -1 && ((t.timeoutHandle = -1), Nm(e)),
      (e = t.cancelPendingCommit),
      e !== null && ((t.cancelPendingCommit = null), e()),
      (kl = 0),
      Uc(),
      (st = t),
      (V = e = Rl(t.current, null)),
      (J = l),
      (et = 0),
      (ul = null),
      (oe = !1),
      (xa = Da(t, l)),
      (Ac = !1),
      (ba = il = Nc = Xe = re = yt = 0),
      (Wt = rn = null),
      (_c = !1),
      (l & 8) !== 0 && (l |= l & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= l; 0 < a;) {
        var n = 31 - tl(a),
          u = 1 << n;
        ((l |= t[n]), (a &= ~u));
      }
    return ((Jl = l), Xn(), e);
  }
  function hr(t, l) {
    ((X = null),
      (b.H = en),
      l === ra || l === $n
        ? ((l = Ms()), (et = 3))
        : l === Bi
          ? ((l = Ms()), (et = 4))
          : (et =
              l === oc
                ? 8
                : l !== null &&
                    typeof l == "object" &&
                    typeof l.then == "function"
                  ? 6
                  : 1),
      (ul = l),
      V === null && ((yt = 1), ou(t, dl(l, t.current))));
  }
  function vr() {
    var t = al.current;
    return t === null
      ? !0
      : (J & 4194048) === J
        ? yl === null
        : (J & 62914560) === J || (J & 536870912) !== 0
          ? t === yl
          : !1;
  }
  function yr() {
    var t = b.H;
    return ((b.H = en), t === null ? en : t);
  }
  function gr() {
    var t = b.A;
    return ((b.A = um), t);
  }
  function zu() {
    ((yt = 4),
      oe || ((J & 4194048) !== J && al.current !== null) || (xa = !0),
      ((re & 134217727) === 0 && (Xe & 134217727) === 0) ||
        st === null ||
        he(st, J, il, !1));
  }
  function Cc(t, l, e) {
    var a = tt;
    tt |= 2;
    var n = yr(),
      u = gr();
    ((st !== t || J !== l) && ((bu = null), za(t, l)), (l = !1));
    var i = yt;
    t: do
      try {
        if (et !== 0 && V !== null) {
          var f = V,
            s = ul;
          switch (et) {
            case 8:
              (Uc(), (i = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              al.current === null && (l = !0);
              var v = et;
              if (((et = 0), (ul = null), ja(t, f, s, v), e && xa)) {
                i = 0;
                break t;
              }
              break;
            default:
              ((v = et), (et = 0), (ul = null), ja(t, f, s, v));
          }
        }
        (fm(), (i = yt));
        break;
      } catch (x) {
        hr(t, x);
      }
    while (!0);
    return (
      l && t.shellSuspendCounter++,
      (wl = Ce = null),
      (tt = a),
      (b.H = n),
      (b.A = u),
      V === null && ((st = null), (J = 0), Xn()),
      i
    );
  }
  function fm() {
    for (; V !== null;) pr(V);
  }
  function sm(t, l) {
    var e = tt;
    tt |= 2;
    var a = yr(),
      n = gr();
    st !== t || J !== l
      ? ((bu = null), (xu = It() + 500), za(t, l))
      : (xa = Da(t, l));
    t: do
      try {
        if (et !== 0 && V !== null) {
          l = V;
          var u = ul;
          l: switch (et) {
            case 1:
              ((et = 0), (ul = null), ja(t, l, u, 1));
              break;
            case 2:
            case 9:
              if (Ns(u)) {
                ((et = 0), (ul = null), xr(l));
                break;
              }
              ((l = function () {
                ((et !== 2 && et !== 9) || st !== t || (et = 7), Ml(t));
              }),
                u.then(l, l));
              break t;
            case 3:
              et = 7;
              break t;
            case 4:
              et = 5;
              break t;
            case 7:
              Ns(u)
                ? ((et = 0), (ul = null), xr(l))
                : ((et = 0), (ul = null), ja(t, l, u, 7));
              break;
            case 5:
              var i = null;
              switch (V.tag) {
                case 26:
                  i = V.memoizedState;
                case 5:
                case 27:
                  var f = V;
                  if (i ? nd(i) : f.stateNode.complete) {
                    ((et = 0), (ul = null));
                    var s = f.sibling;
                    if (s !== null) V = s;
                    else {
                      var v = f.return;
                      v !== null ? ((V = v), ju(v)) : (V = null);
                    }
                    break l;
                  }
              }
              ((et = 0), (ul = null), ja(t, l, u, 5));
              break;
            case 6:
              ((et = 0), (ul = null), ja(t, l, u, 6));
              break;
            case 8:
              (Uc(), (yt = 6));
              break t;
            default:
              throw Error(d(462));
          }
        }
        om();
        break;
      } catch (x) {
        hr(t, x);
      }
    while (!0);
    return (
      (wl = Ce = null),
      (b.H = a),
      (b.A = n),
      (tt = e),
      V !== null ? 0 : ((st = null), (J = 0), Xn(), yt)
    );
  }
  function om() {
    for (; V !== null && !Cd();) pr(V);
  }
  function pr(t) {
    var l = Xo(t.alternate, t, Jl);
    ((t.memoizedProps = t.pendingProps), l === null ? ju(t) : (V = l));
  }
  function xr(t) {
    var l = t,
      e = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Bo(e, l, l.pendingProps, l.type, void 0, J);
        break;
      case 11:
        l = Bo(e, l, l.pendingProps, l.type.render, l.ref, J);
        break;
      case 5:
        ki(l);
      default:
        (Lo(e, l), (l = V = ys(l, Jl)), (l = Xo(e, l, Jl)));
    }
    ((t.memoizedProps = t.pendingProps), l === null ? ju(t) : (V = l));
  }
  function ja(t, l, e, a) {
    ((wl = Ce = null), ki(l), (da = null), (ka = 0));
    var n = l.return;
    try {
      if (I0(t, n, l, e, J)) {
        ((yt = 1), ou(t, dl(e, t.current)), (V = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((V = n), u);
      ((yt = 1), ou(t, dl(e, t.current)), (V = null));
      return;
    }
    l.flags & 32768
      ? ($ || a === 1
          ? (t = !0)
          : xa || (J & 536870912) !== 0
            ? (t = !1)
            : ((oe = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = al.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        br(l, t))
      : ju(l);
  }
  function ju(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        br(l, oe);
        return;
      }
      t = l.return;
      var e = lm(l.alternate, l, Jl);
      if (e !== null) {
        V = e;
        return;
      }
      if (((l = l.sibling), l !== null)) {
        V = l;
        return;
      }
      V = l = t;
    } while (l !== null);
    yt === 0 && (yt = 5);
  }
  function br(t, l) {
    do {
      var e = em(t.alternate, t);
      if (e !== null) {
        ((e.flags &= 32767), (V = e));
        return;
      }
      if (
        ((e = t.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !l && ((t = t.sibling), t !== null))
      ) {
        V = t;
        return;
      }
      V = t = e;
    } while (t !== null);
    ((yt = 6), (V = null));
  }
  function Sr(t, l, e, a, n, u, i, f, s) {
    t.cancelPendingCommit = null;
    do Eu();
    while (Et !== 0);
    if ((tt & 6) !== 0) throw Error(d(327));
    if (l !== null) {
      if (l === t.current) throw Error(d(177));
      if (
        ((u = l.lanes | l.childLanes),
        (u |= Si),
        Zd(t, e, u, i, f, s),
        t === st && ((V = st = null), (J = 0)),
        (Sa = l),
        (me = t),
        (kl = e),
        (Mc = u),
        (Oc = n),
        (or = a),
        (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            hm(An, function () {
              return (Ar(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (l.flags & 13878) !== 0),
        (l.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = b.T), (b.T = null), (n = T.p), (T.p = 2), (i = tt), (tt |= 4));
        try {
          am(t, l, e);
        } finally {
          ((tt = i), (T.p = n), (b.T = a));
        }
      }
      ((Et = 1), zr(), jr(), Er());
    }
  }
  function zr() {
    if (Et === 1) {
      Et = 0;
      var t = me,
        l = Sa,
        e = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || e) {
        ((e = b.T), (b.T = null));
        var a = T.p;
        T.p = 2;
        var n = tt;
        tt |= 4;
        try {
          er(l, t);
          var u = Vc,
            i = cs(t.containerInfo),
            f = u.focusedElem,
            s = u.selectionRange;
          if (
            i !== f &&
            f &&
            f.ownerDocument &&
            is(f.ownerDocument.documentElement, f)
          ) {
            if (s !== null && yi(f)) {
              var v = s.start,
                x = s.end;
              if ((x === void 0 && (x = v), "selectionStart" in f))
                ((f.selectionStart = v),
                  (f.selectionEnd = Math.min(x, f.value.length)));
              else {
                var z = f.ownerDocument || document,
                  y = (z && z.defaultView) || window;
                if (y.getSelection) {
                  var g = y.getSelection(),
                    _ = f.textContent.length,
                    R = Math.min(s.start, _),
                    ct = s.end === void 0 ? R : Math.min(s.end, _);
                  !g.extend && R > ct && ((i = ct), (ct = R), (R = i));
                  var m = us(f, R),
                    o = us(f, ct);
                  if (
                    m &&
                    o &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== m.node ||
                      g.anchorOffset !== m.offset ||
                      g.focusNode !== o.node ||
                      g.focusOffset !== o.offset)
                  ) {
                    var h = z.createRange();
                    (h.setStart(m.node, m.offset),
                      g.removeAllRanges(),
                      R > ct
                        ? (g.addRange(h), g.extend(o.node, o.offset))
                        : (h.setEnd(o.node, o.offset), g.addRange(h)));
                  }
                }
              }
            }
            for (z = [], g = f; (g = g.parentNode);)
              g.nodeType === 1 &&
                z.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < z.length;
              f++
            ) {
              var S = z[f];
              ((S.element.scrollLeft = S.left), (S.element.scrollTop = S.top));
            }
          }
          ((Bu = !!Lc), (Vc = Lc = null));
        } finally {
          ((tt = n), (T.p = a), (b.T = e));
        }
      }
      ((t.current = l), (Et = 2));
    }
  }
  function jr() {
    if (Et === 2) {
      Et = 0;
      var t = me,
        l = Sa,
        e = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || e) {
        ((e = b.T), (b.T = null));
        var a = T.p;
        T.p = 2;
        var n = tt;
        tt |= 4;
        try {
          Fo(t, l.alternate, l);
        } finally {
          ((tt = n), (T.p = a), (b.T = e));
        }
      }
      Et = 3;
    }
  }
  function Er() {
    if (Et === 4 || Et === 3) {
      ((Et = 0), Hd());
      var t = me,
        l = Sa,
        e = kl,
        a = or;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0
        ? (Et = 5)
        : ((Et = 0), (Sa = me = null), Tr(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (de = null),
        Fu(e),
        (l = l.stateNode),
        Pt && typeof Pt.onCommitFiberRoot == "function")
      )
        try {
          Pt.onCommitFiberRoot(Oa, l, void 0, (l.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((l = b.T), (n = T.p), (T.p = 2), (b.T = null));
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            u(f.value, { componentStack: f.stack });
          }
        } finally {
          ((b.T = l), (T.p = n));
        }
      }
      ((kl & 3) !== 0 && Eu(),
        Ml(t),
        (n = t.pendingLanes),
        (e & 261930) !== 0 && (n & 42) !== 0
          ? t === Dc
            ? dn++
            : ((dn = 0), (Dc = t))
          : (dn = 0),
        mn(0));
    }
  }
  function Tr(t, l) {
    (t.pooledCacheLanes &= l) === 0 &&
      ((l = t.pooledCache), l != null && ((t.pooledCache = null), Ka(l)));
  }
  function Eu() {
    return (zr(), jr(), Er(), Ar());
  }
  function Ar() {
    if (Et !== 5) return !1;
    var t = me,
      l = Mc;
    Mc = 0;
    var e = Fu(kl),
      a = b.T,
      n = T.p;
    try {
      ((T.p = 32 > e ? 32 : e), (b.T = null), (e = Oc), (Oc = null));
      var u = me,
        i = kl;
      if (((Et = 0), (Sa = me = null), (kl = 0), (tt & 6) !== 0))
        throw Error(d(331));
      var f = tt;
      if (
        ((tt |= 4),
        cr(u.current),
        nr(u, u.current, i, e),
        (tt = f),
        mn(0, !1),
        Pt && typeof Pt.onPostCommitFiberRoot == "function")
      )
        try {
          Pt.onPostCommitFiberRoot(Oa, u);
        } catch {}
      return !0;
    } finally {
      ((T.p = n), (b.T = a), Tr(t, l));
    }
  }
  function Nr(t, l, e) {
    ((l = dl(e, l)),
      (l = sc(t.stateNode, l, 2)),
      (t = ie(t, l, 2)),
      t !== null && (Ua(t, 2), Ml(t)));
  }
  function at(t, l, e) {
    if (t.tag === 3) Nr(t, t, e);
    else
      for (; l !== null;) {
        if (l.tag === 3) {
          Nr(l, t, e);
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (
            typeof l.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (de === null || !de.has(a)))
          ) {
            ((t = dl(e, t)),
              (e = _o(2)),
              (a = ie(l, e, 2)),
              a !== null && (Mo(e, a, l, t), Ua(a, 2), Ml(a)));
            break;
          }
        }
        l = l.return;
      }
  }
  function Hc(t, l, e) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new im();
      var n = new Set();
      a.set(l, n);
    } else ((n = a.get(l)), n === void 0 && ((n = new Set()), a.set(l, n)));
    n.has(e) ||
      ((Ac = !0), n.add(e), (t = rm.bind(null, t, l, e)), l.then(t, t));
  }
  function rm(t, l, e) {
    var a = t.pingCache;
    (a !== null && a.delete(l),
      (t.pingedLanes |= t.suspendedLanes & e),
      (t.warmLanes &= ~e),
      st === t &&
        (J & e) === e &&
        (yt === 4 || (yt === 3 && (J & 62914560) === J && 300 > It() - pu)
          ? (tt & 2) === 0 && za(t, 0)
          : (Nc |= e),
        ba === J && (ba = 0)),
      Ml(t));
  }
  function _r(t, l) {
    (l === 0 && (l = Sf()), (t = Oe(t, l)), t !== null && (Ua(t, l), Ml(t)));
  }
  function dm(t) {
    var l = t.memoizedState,
      e = 0;
    (l !== null && (e = l.retryLane), _r(t, e));
  }
  function mm(t, l) {
    var e = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    (a !== null && a.delete(l), _r(t, e));
  }
  function hm(t, l) {
    return Ju(t, l);
  }
  var Tu = null,
    Ea = null,
    Rc = !1,
    Au = !1,
    Bc = !1,
    ve = 0;
  function Ml(t) {
    (t !== Ea &&
      t.next === null &&
      (Ea === null ? (Tu = Ea = t) : (Ea = Ea.next = t)),
      (Au = !0),
      Rc || ((Rc = !0), ym()));
  }
  function mn(t, l) {
    if (!Bc && Au) {
      Bc = !0;
      do
        for (var e = !1, a = Tu; a !== null;) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                f = a.pingedLanes;
              ((u = (1 << (31 - tl(42 | t) + 1)) - 1),
                (u &= n & ~(i & ~f)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((e = !0), Ur(a, u));
          } else
            ((u = J),
              (u = On(
                a,
                a === st ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || Da(a, u) || ((e = !0), Ur(a, u)));
          a = a.next;
        }
      while (e);
      Bc = !1;
    }
  }
  function vm() {
    Mr();
  }
  function Mr() {
    Au = Rc = !1;
    var t = 0;
    ve !== 0 && Am() && (t = ve);
    for (var l = It(), e = null, a = Tu; a !== null;) {
      var n = a.next,
        u = Or(a, l);
      (u === 0
        ? ((a.next = null),
          e === null ? (Tu = n) : (e.next = n),
          n === null && (Ea = e))
        : ((e = a), (t !== 0 || (u & 3) !== 0) && (Au = !0)),
        (a = n));
    }
    ((Et !== 0 && Et !== 5) || mn(t), ve !== 0 && (ve = 0));
  }
  function Or(t, l) {
    for (
      var e = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        u = t.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - tl(u),
        f = 1 << i,
        s = n[i];
      (s === -1
        ? ((f & e) === 0 || (f & a) !== 0) && (n[i] = Xd(f, l))
        : s <= l && (t.expiredLanes |= f),
        (u &= ~f));
    }
    if (
      ((l = st),
      (e = J),
      (e = On(
        t,
        t === l ? e : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      e === 0 ||
        (t === l && (et === 2 || et === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && ku(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((e & 3) === 0 || Da(t, e)) {
      if (((l = e & -e), l === t.callbackPriority)) return l;
      switch ((a !== null && ku(a), Fu(e))) {
        case 2:
        case 8:
          e = xf;
          break;
        case 32:
          e = An;
          break;
        case 268435456:
          e = bf;
          break;
        default:
          e = An;
      }
      return (
        (a = Dr.bind(null, t)),
        (e = Ju(e, a)),
        (t.callbackPriority = l),
        (t.callbackNode = e),
        l
      );
    }
    return (
      a !== null && a !== null && ku(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Dr(t, l) {
    if (Et !== 0 && Et !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var e = t.callbackNode;
    if (Eu() && t.callbackNode !== e) return null;
    var a = J;
    return (
      (a = On(
        t,
        t === st ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (dr(t, a, l),
          Or(t, It()),
          t.callbackNode != null && t.callbackNode === e
            ? Dr.bind(null, t)
            : null)
    );
  }
  function Ur(t, l) {
    if (Eu()) return null;
    dr(t, l, !0);
  }
  function ym() {
    _m(function () {
      (tt & 6) !== 0 ? Ju(pf, vm) : Mr();
    });
  }
  function wc() {
    if (ve === 0) {
      var t = sa;
      (t === 0 && ((t = Nn), (Nn <<= 1), (Nn & 261888) === 0 && (Nn = 256)),
        (ve = t));
    }
    return ve;
  }
  function Cr(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Hn("" + t);
  }
  function Hr(t, l) {
    var e = l.ownerDocument.createElement("input");
    return (
      (e.name = l.name),
      (e.value = l.value),
      t.id && e.setAttribute("form", t.id),
      l.parentNode.insertBefore(e, l),
      (t = new FormData(t)),
      e.parentNode.removeChild(e),
      t
    );
  }
  function gm(t, l, e, a, n) {
    if (l === "submit" && e && e.stateNode === n) {
      var u = Cr((n[Lt] || null).action),
        i = a.submitter;
      i &&
        ((l = (l = i[Lt] || null)
          ? Cr(l.formAction)
          : i.getAttribute("formAction")),
        l !== null && ((u = l), (i = null)));
      var f = new qn("action", "action", null, a, n);
      t.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (ve !== 0) {
                  var s = i ? Hr(n, i) : new FormData(n);
                  ac(
                    e,
                    { pending: !0, data: s, method: n.method, action: u },
                    null,
                    s,
                  );
                }
              } else
                typeof u == "function" &&
                  (f.preventDefault(),
                  (s = i ? Hr(n, i) : new FormData(n)),
                  ac(
                    e,
                    { pending: !0, data: s, method: n.method, action: u },
                    u,
                    s,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var qc = 0; qc < bi.length; qc++) {
    var Yc = bi[qc],
      pm = Yc.toLowerCase(),
      xm = Yc[0].toUpperCase() + Yc.slice(1);
    bl(pm, "on" + xm);
  }
  (bl(os, "onAnimationEnd"),
    bl(rs, "onAnimationIteration"),
    bl(ds, "onAnimationStart"),
    bl("dblclick", "onDoubleClick"),
    bl("focusin", "onFocus"),
    bl("focusout", "onBlur"),
    bl(R0, "onTransitionRun"),
    bl(B0, "onTransitionStart"),
    bl(w0, "onTransitionCancel"),
    bl(ms, "onTransitionEnd"),
    We("onMouseEnter", ["mouseout", "mouseover"]),
    We("onMouseLeave", ["mouseout", "mouseover"]),
    We("onPointerEnter", ["pointerout", "pointerover"]),
    We("onPointerLeave", ["pointerout", "pointerover"]),
    Ae(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ae(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ae("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ae(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ae(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ae(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var hn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    bm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(hn),
    );
  function Rr(t, l) {
    l = (l & 4) !== 0;
    for (var e = 0; e < t.length; e++) {
      var a = t[e],
        n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (l)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i],
              s = f.instance,
              v = f.currentTarget;
            if (((f = f.listener), s !== u && n.isPropagationStopped()))
              break t;
            ((u = f), (n.currentTarget = v));
            try {
              u(n);
            } catch (x) {
              Qn(x);
            }
            ((n.currentTarget = null), (u = s));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((f = a[i]),
              (s = f.instance),
              (v = f.currentTarget),
              (f = f.listener),
              s !== u && n.isPropagationStopped())
            )
              break t;
            ((u = f), (n.currentTarget = v));
            try {
              u(n);
            } catch (x) {
              Qn(x);
            }
            ((n.currentTarget = null), (u = s));
          }
      }
    }
  }
  function K(t, l) {
    var e = l[Iu];
    e === void 0 && (e = l[Iu] = new Set());
    var a = t + "__bubble";
    e.has(a) || (Br(l, t, 2, !1), e.add(a));
  }
  function Gc(t, l, e) {
    var a = 0;
    (l && (a |= 4), Br(e, t, a, l));
  }
  var Nu = "_reactListening" + Math.random().toString(36).slice(2);
  function Qc(t) {
    if (!t[Nu]) {
      ((t[Nu] = !0),
        _f.forEach(function (e) {
          e !== "selectionchange" && (bm.has(e) || Gc(e, !1, t), Gc(e, !0, t));
        }));
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Nu] || ((l[Nu] = !0), Gc("selectionchange", !1, l));
    }
  }
  function Br(t, l, e, a) {
    switch (rd(l)) {
      case 2:
        var n = km;
        break;
      case 8:
        n = Wm;
        break;
      default:
        n = ef;
    }
    ((e = n.bind(null, l, e, t)),
      (n = void 0),
      !ci ||
        (l !== "touchstart" && l !== "touchmove" && l !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(l, e, { capture: !0, passive: n })
          : t.addEventListener(l, e, !0)
        : n !== void 0
          ? t.addEventListener(l, e, { passive: n })
          : t.addEventListener(l, e, !1));
  }
  function Xc(t, l, e, a, n) {
    var u = a;
    if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === n) break;
          if (i === 4)
            for (i = a.return; i !== null;) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; f !== null;) {
            if (((i = Ke(f)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              a = u = i;
              continue t;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    Gf(function () {
      var v = u,
        x = ui(e),
        z = [];
      t: {
        var y = hs.get(t);
        if (y !== void 0) {
          var g = qn,
            _ = t;
          switch (t) {
            case "keypress":
              if (Bn(e) === 0) break t;
            case "keydown":
            case "keyup":
              g = m0;
              break;
            case "focusin":
              ((_ = "focus"), (g = ri));
              break;
            case "focusout":
              ((_ = "blur"), (g = ri));
              break;
            case "beforeblur":
            case "afterblur":
              g = ri;
              break;
            case "click":
              if (e.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Zf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = l0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = y0;
              break;
            case os:
            case rs:
            case ds:
              g = n0;
              break;
            case ms:
              g = p0;
              break;
            case "scroll":
            case "scrollend":
              g = Pd;
              break;
            case "wheel":
              g = b0;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = i0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Vf;
              break;
            case "toggle":
            case "beforetoggle":
              g = z0;
          }
          var R = (l & 4) !== 0,
            ct = !R && (t === "scroll" || t === "scrollend"),
            m = R ? (y !== null ? y + "Capture" : null) : y;
          R = [];
          for (var o = v, h; o !== null;) {
            var S = o;
            if (
              ((h = S.stateNode),
              (S = S.tag),
              (S !== 5 && S !== 26 && S !== 27) ||
                h === null ||
                m === null ||
                ((S = Ra(o, m)), S != null && R.push(vn(o, S, h))),
              ct)
            )
              break;
            o = o.return;
          }
          0 < R.length &&
            ((y = new g(y, _, null, e, x)), z.push({ event: y, listeners: R }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (
            ((y = t === "mouseover" || t === "pointerover"),
            (g = t === "mouseout" || t === "pointerout"),
            y &&
              e !== ni &&
              (_ = e.relatedTarget || e.fromElement) &&
              (Ke(_) || _[Ve]))
          )
            break t;
          if (
            (g || y) &&
            ((y =
              x.window === x
                ? x
                : (y = x.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            g
              ? ((_ = e.relatedTarget || e.toElement),
                (g = v),
                (_ = _ ? Ke(_) : null),
                _ !== null &&
                  ((ct = H(_)),
                  (R = _.tag),
                  _ !== ct || (R !== 5 && R !== 27 && R !== 6)) &&
                  (_ = null))
              : ((g = null), (_ = v)),
            g !== _)
          ) {
            if (
              ((R = Zf),
              (S = "onMouseLeave"),
              (m = "onMouseEnter"),
              (o = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((R = Vf),
                (S = "onPointerLeave"),
                (m = "onPointerEnter"),
                (o = "pointer")),
              (ct = g == null ? y : Ha(g)),
              (h = _ == null ? y : Ha(_)),
              (y = new R(S, o + "leave", g, e, x)),
              (y.target = ct),
              (y.relatedTarget = h),
              (S = null),
              Ke(x) === v &&
                ((R = new R(m, o + "enter", _, e, x)),
                (R.target = h),
                (R.relatedTarget = ct),
                (S = R)),
              (ct = S),
              g && _)
            )
              l: {
                for (R = Sm, m = g, o = _, h = 0, S = m; S; S = R(S)) h++;
                S = 0;
                for (var C = o; C; C = R(C)) S++;
                for (; 0 < h - S;) ((m = R(m)), h--);
                for (; 0 < S - h;) ((o = R(o)), S--);
                for (; h--;) {
                  if (m === o || (o !== null && m === o.alternate)) {
                    R = m;
                    break l;
                  }
                  ((m = R(m)), (o = R(o)));
                }
                R = null;
              }
            else R = null;
            (g !== null && wr(z, y, g, R, !1),
              _ !== null && ct !== null && wr(z, ct, _, R, !0));
          }
        }
        t: {
          if (
            ((y = v ? Ha(v) : window),
            (g = y.nodeName && y.nodeName.toLowerCase()),
            g === "select" || (g === "input" && y.type === "file"))
          )
            var I = Pf;
          else if (Ff(y))
            if (ts) I = U0;
            else {
              I = O0;
              var O = M0;
            }
          else
            ((g = y.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (y.type !== "checkbox" && y.type !== "radio")
                ? v && ai(v.elementType) && (I = Pf)
                : (I = D0));
          if (I && (I = I(t, v))) {
            If(z, I, e, x);
            break t;
          }
          (O && O(t, y, v),
            t === "focusout" &&
              v &&
              y.type === "number" &&
              v.memoizedProps.value != null &&
              ei(y, "number", y.value));
        }
        switch (((O = v ? Ha(v) : window), t)) {
          case "focusin":
            (Ff(O) || O.contentEditable === "true") &&
              ((la = O), (gi = v), (Za = null));
            break;
          case "focusout":
            Za = gi = la = null;
            break;
          case "mousedown":
            pi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((pi = !1), fs(z, e, x));
            break;
          case "selectionchange":
            if (H0) break;
          case "keydown":
          case "keyup":
            fs(z, e, x);
        }
        var Z;
        if (mi)
          t: {
            switch (t) {
              case "compositionstart":
                var k = "onCompositionStart";
                break t;
              case "compositionend":
                k = "onCompositionEnd";
                break t;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break t;
            }
            k = void 0;
          }
        else
          ta
            ? Wf(t, e) && (k = "onCompositionEnd")
            : t === "keydown" &&
              e.keyCode === 229 &&
              (k = "onCompositionStart");
        (k &&
          (Kf &&
            e.locale !== "ko" &&
            (ta || k !== "onCompositionStart"
              ? k === "onCompositionEnd" && ta && (Z = Qf())
              : ((Pl = x),
                (fi = "value" in Pl ? Pl.value : Pl.textContent),
                (ta = !0))),
          (O = _u(v, k)),
          0 < O.length &&
            ((k = new Lf(k, t, null, e, x)),
            z.push({ event: k, listeners: O }),
            Z ? (k.data = Z) : ((Z = $f(e)), Z !== null && (k.data = Z)))),
          (Z = E0 ? T0(t, e) : A0(t, e)) &&
            ((k = _u(v, "onBeforeInput")),
            0 < k.length &&
              ((O = new Lf("onBeforeInput", "beforeinput", null, e, x)),
              z.push({ event: O, listeners: k }),
              (O.data = Z))),
          gm(z, t, v, e, x));
      }
      Rr(z, l);
    });
  }
  function vn(t, l, e) {
    return { instance: t, listener: l, currentTarget: e };
  }
  function _u(t, l) {
    for (var e = l + "Capture", a = []; t !== null;) {
      var n = t,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Ra(t, e)),
          n != null && a.unshift(vn(t, n, u)),
          (n = Ra(t, l)),
          n != null && a.push(vn(t, n, u))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Sm(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function wr(t, l, e, a, n) {
    for (var u = l._reactName, i = []; e !== null && e !== a;) {
      var f = e,
        s = f.alternate,
        v = f.stateNode;
      if (((f = f.tag), s !== null && s === a)) break;
      ((f !== 5 && f !== 26 && f !== 27) ||
        v === null ||
        ((s = v),
        n
          ? ((v = Ra(e, u)), v != null && i.unshift(vn(e, v, s)))
          : n || ((v = Ra(e, u)), v != null && i.push(vn(e, v, s)))),
        (e = e.return));
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var zm = /\r\n?/g,
    jm = /\u0000|\uFFFD/g;
  function qr(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        zm,
        `
`,
      )
      .replace(jm, "");
  }
  function Yr(t, l) {
    return ((l = qr(l)), qr(t) === l);
  }
  function it(t, l, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? l === "body" || (l === "textarea" && a === "") || Fe(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            l !== "body" &&
            Fe(t, "" + a);
        break;
      case "className":
        Un(t, "class", a);
        break;
      case "tabIndex":
        Un(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Un(t, e, a);
        break;
      case "style":
        qf(t, a, u);
        break;
      case "data":
        if (l !== "object") {
          Un(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (l !== "a" || e !== "href")) {
          t.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(e);
          break;
        }
        ((a = Hn("" + a)), t.setAttribute(e, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (e === "formAction"
              ? (l !== "input" && it(t, l, "name", n.name, n, null),
                it(t, l, "formEncType", n.formEncType, n, null),
                it(t, l, "formMethod", n.formMethod, n, null),
                it(t, l, "formTarget", n.formTarget, n, null))
              : (it(t, l, "encType", n.encType, n, null),
                it(t, l, "method", n.method, n, null),
                it(t, l, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(e);
          break;
        }
        ((a = Hn("" + a)), t.setAttribute(e, a));
        break;
      case "onClick":
        a != null && (t.onclick = Cl);
        break;
      case "onScroll":
        a != null && K("scroll", t);
        break;
      case "onScrollEnd":
        a != null && K("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
          if (((e = a.__html), e != null)) {
            if (n.children != null) throw Error(d(60));
            t.innerHTML = e;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((e = Hn("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(e, "" + a)
          : t.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(e, "")
          : t.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(e, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(e, a)
            : t.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(e, a)
          : t.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(e)
          : t.setAttribute(e, a);
        break;
      case "popover":
        (K("beforetoggle", t), K("toggle", t), Dn(t, "popover", a));
        break;
      case "xlinkActuate":
        Ul(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ul(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ul(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ul(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ul(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ul(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ul(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ul(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ul(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Dn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = Fd.get(e) || e), Dn(t, e, a));
    }
  }
  function Zc(t, l, e, a, n, u) {
    switch (e) {
      case "style":
        qf(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
          if (((e = a.__html), e != null)) {
            if (n.children != null) throw Error(d(60));
            t.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Fe(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Fe(t, "" + a);
        break;
      case "onScroll":
        a != null && K("scroll", t);
        break;
      case "onScrollEnd":
        a != null && K("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Cl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Mf.hasOwnProperty(e))
          t: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((n = e.endsWith("Capture")),
              (l = e.slice(2, n ? e.length - 7 : void 0)),
              (u = t[Lt] || null),
              (u = u != null ? u[e] : null),
              typeof u == "function" && t.removeEventListener(l, u, n),
              typeof a == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (e in t
                  ? (t[e] = null)
                  : t.hasAttribute(e) && t.removeAttribute(e)),
                t.addEventListener(l, a, n));
              break t;
            }
            e in t
              ? (t[e] = a)
              : a === !0
                ? t.setAttribute(e, "")
                : Dn(t, e, a);
          }
    }
  }
  function Dt(t, l, e) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (K("error", t), K("load", t));
        var a = !1,
          n = !1,
          u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var i = e[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(d(137, l));
                default:
                  it(t, l, u, i, e, null);
              }
          }
        (n && it(t, l, "srcSet", e.srcSet, e, null),
          a && it(t, l, "src", e.src, e, null));
        return;
      case "input":
        K("invalid", t);
        var f = (u = i = n = null),
          s = null,
          v = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var x = e[a];
            if (x != null)
              switch (a) {
                case "name":
                  n = x;
                  break;
                case "type":
                  i = x;
                  break;
                case "checked":
                  s = x;
                  break;
                case "defaultChecked":
                  v = x;
                  break;
                case "value":
                  u = x;
                  break;
                case "defaultValue":
                  f = x;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (x != null) throw Error(d(137, l));
                  break;
                default:
                  it(t, l, a, x, e, null);
              }
          }
        Hf(t, u, f, s, v, i, n, !1);
        return;
      case "select":
        (K("invalid", t), (a = i = u = null));
        for (n in e)
          if (e.hasOwnProperty(n) && ((f = e[n]), f != null))
            switch (n) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                it(t, l, n, f, e, null);
            }
        ((l = u),
          (e = i),
          (t.multiple = !!a),
          l != null ? $e(t, !!a, l, !1) : e != null && $e(t, !!a, e, !0));
        return;
      case "textarea":
        (K("invalid", t), (u = n = a = null));
        for (i in e)
          if (e.hasOwnProperty(i) && ((f = e[i]), f != null))
            switch (i) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                n = f;
                break;
              case "children":
                u = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(d(91));
                break;
              default:
                it(t, l, i, f, e, null);
            }
        Bf(t, a, n, u);
        return;
      case "option":
        for (s in e)
          if (e.hasOwnProperty(s) && ((a = e[s]), a != null))
            switch (s) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                it(t, l, s, a, e, null);
            }
        return;
      case "dialog":
        (K("beforetoggle", t), K("toggle", t), K("cancel", t), K("close", t));
        break;
      case "iframe":
      case "object":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < hn.length; a++) K(hn[a], t);
        break;
      case "image":
        (K("error", t), K("load", t));
        break;
      case "details":
        K("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (K("error", t), K("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in e)
          if (e.hasOwnProperty(v) && ((a = e[v]), a != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, l));
              default:
                it(t, l, v, a, e, null);
            }
        return;
      default:
        if (ai(l)) {
          for (x in e)
            e.hasOwnProperty(x) &&
              ((a = e[x]), a !== void 0 && Zc(t, l, x, a, e, void 0));
          return;
        }
    }
    for (f in e)
      e.hasOwnProperty(f) && ((a = e[f]), a != null && it(t, l, f, a, e, null));
  }
  function Em(t, l, e, a) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          f = null,
          s = null,
          v = null,
          x = null;
        for (g in e) {
          var z = e[g];
          if (e.hasOwnProperty(g) && z != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = z;
              default:
                a.hasOwnProperty(g) || it(t, l, g, null, a, z);
            }
        }
        for (var y in a) {
          var g = a[y];
          if (((z = e[y]), a.hasOwnProperty(y) && (g != null || z != null)))
            switch (y) {
              case "type":
                u = g;
                break;
              case "name":
                n = g;
                break;
              case "checked":
                v = g;
                break;
              case "defaultChecked":
                x = g;
                break;
              case "value":
                i = g;
                break;
              case "defaultValue":
                f = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(d(137, l));
                break;
              default:
                g !== z && it(t, l, y, g, a, z);
            }
        }
        li(t, i, f, s, v, x, u, n);
        return;
      case "select":
        g = i = f = y = null;
        for (u in e)
          if (((s = e[u]), e.hasOwnProperty(u) && s != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                g = s;
              default:
                a.hasOwnProperty(u) || it(t, l, u, null, a, s);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (s = e[n]),
            a.hasOwnProperty(n) && (u != null || s != null))
          )
            switch (n) {
              case "value":
                y = u;
                break;
              case "defaultValue":
                f = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== s && it(t, l, n, u, a, s);
            }
        ((l = f),
          (e = i),
          (a = g),
          y != null
            ? $e(t, !!e, y, !1)
            : !!a != !!e &&
              (l != null ? $e(t, !!e, l, !0) : $e(t, !!e, e ? [] : "", !1)));
        return;
      case "textarea":
        g = y = null;
        for (f in e)
          if (
            ((n = e[f]),
            e.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                it(t, l, f, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = e[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                y = n;
                break;
              case "defaultValue":
                g = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(d(91));
                break;
              default:
                n !== u && it(t, l, i, n, a, u);
            }
        Rf(t, y, g);
        return;
      case "option":
        for (var _ in e)
          if (
            ((y = e[_]),
            e.hasOwnProperty(_) && y != null && !a.hasOwnProperty(_))
          )
            switch (_) {
              case "selected":
                t.selected = !1;
                break;
              default:
                it(t, l, _, null, a, y);
            }
        for (s in a)
          if (
            ((y = a[s]),
            (g = e[s]),
            a.hasOwnProperty(s) && y !== g && (y != null || g != null))
          )
            switch (s) {
              case "selected":
                t.selected =
                  y && typeof y != "function" && typeof y != "symbol";
                break;
              default:
                it(t, l, s, y, a, g);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var R in e)
          ((y = e[R]),
            e.hasOwnProperty(R) &&
              y != null &&
              !a.hasOwnProperty(R) &&
              it(t, l, R, null, a, y));
        for (v in a)
          if (
            ((y = a[v]),
            (g = e[v]),
            a.hasOwnProperty(v) && y !== g && (y != null || g != null))
          )
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(d(137, l));
                break;
              default:
                it(t, l, v, y, a, g);
            }
        return;
      default:
        if (ai(l)) {
          for (var ct in e)
            ((y = e[ct]),
              e.hasOwnProperty(ct) &&
                y !== void 0 &&
                !a.hasOwnProperty(ct) &&
                Zc(t, l, ct, void 0, a, y));
          for (x in a)
            ((y = a[x]),
              (g = e[x]),
              !a.hasOwnProperty(x) ||
                y === g ||
                (y === void 0 && g === void 0) ||
                Zc(t, l, x, y, a, g));
          return;
        }
    }
    for (var m in e)
      ((y = e[m]),
        e.hasOwnProperty(m) &&
          y != null &&
          !a.hasOwnProperty(m) &&
          it(t, l, m, null, a, y));
    for (z in a)
      ((y = a[z]),
        (g = e[z]),
        !a.hasOwnProperty(z) ||
          y === g ||
          (y == null && g == null) ||
          it(t, l, z, y, a, g));
  }
  function Gr(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Tm() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0;
        a < e.length;
        a++
      ) {
        var n = e[a],
          u = n.transferSize,
          i = n.initiatorType,
          f = n.duration;
        if (u && f && Gr(i)) {
          for (i = 0, f = n.responseEnd, a += 1; a < e.length; a++) {
            var s = e[a],
              v = s.startTime;
            if (v > f) break;
            var x = s.transferSize,
              z = s.initiatorType;
            x &&
              Gr(z) &&
              ((s = s.responseEnd), (i += x * (s < f ? 1 : (f - v) / (s - v))));
          }
          if ((--a, (l += (8 * (u + i)) / (n.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Lc = null,
    Vc = null;
  function Mu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Qr(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Xr(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function Kc(t, l) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof l.children == "string" ||
      typeof l.children == "number" ||
      typeof l.children == "bigint" ||
      (typeof l.dangerouslySetInnerHTML == "object" &&
        l.dangerouslySetInnerHTML !== null &&
        l.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Jc = null;
  function Am() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Jc
        ? !1
        : ((Jc = t), !0)
      : ((Jc = null), !1);
  }
  var Zr = typeof setTimeout == "function" ? setTimeout : void 0,
    Nm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Lr = typeof Promise == "function" ? Promise : void 0,
    _m =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Lr < "u"
          ? function (t) {
              return Lr.resolve(null).then(t).catch(Mm);
            }
          : Zr;
  function Mm(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ye(t) {
    return t === "head";
  }
  function Vr(t, l) {
    var e = l,
      a = 0;
    do {
      var n = e.nextSibling;
      if ((t.removeChild(e), n && n.nodeType === 8))
        if (((e = n.data), e === "/$" || e === "/&")) {
          if (a === 0) {
            (t.removeChild(n), _a(l));
            return;
          }
          a--;
        } else if (
          e === "$" ||
          e === "$?" ||
          e === "$~" ||
          e === "$!" ||
          e === "&"
        )
          a++;
        else if (e === "html") yn(t.ownerDocument.documentElement);
        else if (e === "head") {
          ((e = t.ownerDocument.head), yn(e));
          for (var u = e.firstChild; u;) {
            var i = u.nextSibling,
              f = u.nodeName;
            (u[Ca] ||
              f === "SCRIPT" ||
              f === "STYLE" ||
              (f === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              e.removeChild(u),
              (u = i));
          }
        } else e === "body" && yn(t.ownerDocument.body);
      e = n;
    } while (e);
    _a(l);
  }
  function Kr(t, l) {
    var e = t;
    t = 0;
    do {
      var a = e.nextSibling;
      if (
        (e.nodeType === 1
          ? l
            ? ((e._stashedDisplay = e.style.display),
              (e.style.display = "none"))
            : ((e.style.display = e._stashedDisplay || ""),
              e.getAttribute("style") === "" && e.removeAttribute("style"))
          : e.nodeType === 3 &&
            (l
              ? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
              : (e.nodeValue = e._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((e = a.data), e === "/$")) {
          if (t === 0) break;
          t--;
        } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || t++;
      e = a;
    } while (e);
  }
  function kc(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l;) {
      var e = l;
      switch (((l = l.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (kc(e), Pu(e));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(e);
    }
  }
  function Om(t, l, e, a) {
    for (; t.nodeType === 1;) {
      var n = e;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Ca])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((u = t.getAttribute("rel")),
                u === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                t.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                t.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((u = t.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  t.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  t.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u) return t;
      } else return t;
      if (((t = gl(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Dm(t, l, e) {
    if (l === "") return null;
    for (; t.nodeType !== 3;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = gl(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Jr(t, l) {
    for (; t.nodeType !== 8;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = gl(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Wc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function $c(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Um(t, l) {
    var e = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || e.readyState !== "loading") l();
    else {
      var a = function () {
        (l(), e.removeEventListener("DOMContentLoaded", a));
      };
      (e.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
    }
  }
  function gl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (
          ((l = t.data),
          l === "$" ||
            l === "$!" ||
            l === "$?" ||
            l === "$~" ||
            l === "&" ||
            l === "F!" ||
            l === "F")
        )
          break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return t;
  }
  var Fc = null;
  function kr(t) {
    t = t.nextSibling;
    for (var l = 0; t;) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "/$" || e === "/&") {
          if (l === 0) return gl(t.nextSibling);
          l--;
        } else
          (e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") ||
            l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Wr(t) {
    t = t.previousSibling;
    for (var l = 0; t;) {
      if (t.nodeType === 8) {
        var e = t.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (l === 0) return t;
          l--;
        } else (e !== "/$" && e !== "/&") || l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function $r(t, l, e) {
    switch (((l = Mu(e)), t)) {
      case "html":
        if (((t = l.documentElement), !t)) throw Error(d(452));
        return t;
      case "head":
        if (((t = l.head), !t)) throw Error(d(453));
        return t;
      case "body":
        if (((t = l.body), !t)) throw Error(d(454));
        return t;
      default:
        throw Error(d(451));
    }
  }
  function yn(t) {
    for (var l = t.attributes; l.length;) t.removeAttributeNode(l[0]);
    Pu(t);
  }
  var pl = new Map(),
    Fr = new Set();
  function Ou(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Wl = T.d;
  T.d = { f: Cm, r: Hm, D: Rm, C: Bm, L: wm, m: qm, X: Gm, S: Ym, M: Qm };
  function Cm() {
    var t = Wl.f(),
      l = Su();
    return t || l;
  }
  function Hm(t) {
    var l = Je(t);
    l !== null && l.tag === 5 && l.type === "form" ? ho(l) : Wl.r(t);
  }
  var Ta = typeof document > "u" ? null : document;
  function Ir(t, l, e) {
    var a = Ta;
    if (a && typeof l == "string" && l) {
      var n = ol(l);
      ((n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof e == "string" && (n += '[crossorigin="' + e + '"]'),
        Fr.has(n) ||
          (Fr.add(n),
          (t = { rel: t, crossOrigin: e, href: l }),
          a.querySelector(n) === null &&
            ((l = a.createElement("link")),
            Dt(l, "link", t),
            Tt(l),
            a.head.appendChild(l))));
    }
  }
  function Rm(t) {
    (Wl.D(t), Ir("dns-prefetch", t, null));
  }
  function Bm(t, l) {
    (Wl.C(t, l), Ir("preconnect", t, l));
  }
  function wm(t, l, e) {
    Wl.L(t, l, e);
    var a = Ta;
    if (a && t && l) {
      var n = 'link[rel="preload"][as="' + ol(l) + '"]';
      l === "image" && e && e.imageSrcSet
        ? ((n += '[imagesrcset="' + ol(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (n += '[imagesizes="' + ol(e.imageSizes) + '"]'))
        : (n += '[href="' + ol(t) + '"]');
      var u = n;
      switch (l) {
        case "style":
          u = Aa(t);
          break;
        case "script":
          u = Na(t);
      }
      pl.has(u) ||
        ((t = B(
          {
            rel: "preload",
            href: l === "image" && e && e.imageSrcSet ? void 0 : t,
            as: l,
          },
          e,
        )),
        pl.set(u, t),
        a.querySelector(n) !== null ||
          (l === "style" && a.querySelector(gn(u))) ||
          (l === "script" && a.querySelector(pn(u))) ||
          ((l = a.createElement("link")),
          Dt(l, "link", t),
          Tt(l),
          a.head.appendChild(l)));
    }
  }
  function qm(t, l) {
    Wl.m(t, l);
    var e = Ta;
    if (e && t) {
      var a = l && typeof l.as == "string" ? l.as : "script",
        n =
          'link[rel="modulepreload"][as="' + ol(a) + '"][href="' + ol(t) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Na(t);
      }
      if (
        !pl.has(u) &&
        ((t = B({ rel: "modulepreload", href: t }, l)),
        pl.set(u, t),
        e.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(pn(u))) return;
        }
        ((a = e.createElement("link")),
          Dt(a, "link", t),
          Tt(a),
          e.head.appendChild(a));
      }
    }
  }
  function Ym(t, l, e) {
    Wl.S(t, l, e);
    var a = Ta;
    if (a && t) {
      var n = ke(a).hoistableStyles,
        u = Aa(t);
      l = l || "default";
      var i = n.get(u);
      if (!i) {
        var f = { loading: 0, preload: null };
        if ((i = a.querySelector(gn(u)))) f.loading = 5;
        else {
          ((t = B({ rel: "stylesheet", href: t, "data-precedence": l }, e)),
            (e = pl.get(u)) && Ic(t, e));
          var s = (i = a.createElement("link"));
          (Tt(s),
            Dt(s, "link", t),
            (s._p = new Promise(function (v, x) {
              ((s.onload = v), (s.onerror = x));
            })),
            s.addEventListener("load", function () {
              f.loading |= 1;
            }),
            s.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Du(i, l, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: f }),
          n.set(u, i));
      }
    }
  }
  function Gm(t, l) {
    Wl.X(t, l);
    var e = Ta;
    if (e && t) {
      var a = ke(e).hoistableScripts,
        n = Na(t),
        u = a.get(n);
      u ||
        ((u = e.querySelector(pn(n))),
        u ||
          ((t = B({ src: t, async: !0 }, l)),
          (l = pl.get(n)) && Pc(t, l),
          (u = e.createElement("script")),
          Tt(u),
          Dt(u, "link", t),
          e.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Qm(t, l) {
    Wl.M(t, l);
    var e = Ta;
    if (e && t) {
      var a = ke(e).hoistableScripts,
        n = Na(t),
        u = a.get(n);
      u ||
        ((u = e.querySelector(pn(n))),
        u ||
          ((t = B({ src: t, async: !0, type: "module" }, l)),
          (l = pl.get(n)) && Pc(t, l),
          (u = e.createElement("script")),
          Tt(u),
          Dt(u, "link", t),
          e.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Pr(t, l, e, a) {
    var n = (n = L.current) ? Ou(n) : null;
    if (!n) throw Error(d(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((l = Aa(e.href)),
            (e = ke(n).hoistableStyles),
            (a = e.get(l)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(l, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          t = Aa(e.href);
          var u = ke(n).hoistableStyles,
            i = u.get(t);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(t, i),
              (u = n.querySelector(gn(t))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              pl.has(t) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                pl.set(t, e),
                u || Xm(n, t, e, i.state))),
            l && a === null)
          )
            throw Error(d(528, ""));
          return i;
        }
        if (l && a !== null) throw Error(d(529, ""));
        return null;
      case "script":
        return (
          (l = e.async),
          (e = e.src),
          typeof e == "string" &&
          l &&
          typeof l != "function" &&
          typeof l != "symbol"
            ? ((l = Na(e)),
              (e = ke(n).hoistableScripts),
              (a = e.get(l)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(l, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(d(444, t));
    }
  }
  function Aa(t) {
    return 'href="' + ol(t) + '"';
  }
  function gn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function td(t) {
    return B({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Xm(t, l, e, a) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]")
      ? (a.loading = 1)
      : ((l = t.createElement("link")),
        (a.preload = l),
        l.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        l.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Dt(l, "link", e),
        Tt(l),
        t.head.appendChild(l));
  }
  function Na(t) {
    return '[src="' + ol(t) + '"]';
  }
  function pn(t) {
    return "script[async]" + t;
  }
  function ld(t, l, e) {
    if ((l.count++, l.instance === null))
      switch (l.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + ol(e.href) + '"]');
          if (a) return ((l.instance = a), Tt(a), a);
          var n = B({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Tt(a),
            Dt(a, "style", n),
            Du(a, e.precedence, t),
            (l.instance = a)
          );
        case "stylesheet":
          n = Aa(e.href);
          var u = t.querySelector(gn(n));
          if (u) return ((l.state.loading |= 4), (l.instance = u), Tt(u), u);
          ((a = td(e)),
            (n = pl.get(n)) && Ic(a, n),
            (u = (t.ownerDocument || t).createElement("link")),
            Tt(u));
          var i = u;
          return (
            (i._p = new Promise(function (f, s) {
              ((i.onload = f), (i.onerror = s));
            })),
            Dt(u, "link", a),
            (l.state.loading |= 4),
            Du(u, e.precedence, t),
            (l.instance = u)
          );
        case "script":
          return (
            (u = Na(e.src)),
            (n = t.querySelector(pn(u)))
              ? ((l.instance = n), Tt(n), n)
              : ((a = e),
                (n = pl.get(u)) && ((a = B({}, e)), Pc(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement("script")),
                Tt(n),
                Dt(n, "link", a),
                t.head.appendChild(n),
                (l.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(d(443, l.type));
      }
    else
      l.type === "stylesheet" &&
        (l.state.loading & 4) === 0 &&
        ((a = l.instance), (l.state.loading |= 4), Du(a, e.precedence, t));
    return l.instance;
  }
  function Du(t, l, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var f = a[i];
      if (f.dataset.precedence === l) u = f;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(t, u.nextSibling)
      : ((l = e.nodeType === 9 ? e.head : e), l.insertBefore(t, l.firstChild));
  }
  function Ic(t, l) {
    (t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.title == null && (t.title = l.title));
  }
  function Pc(t, l) {
    (t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
      t.integrity == null && (t.integrity = l.integrity));
  }
  var Uu = null;
  function ed(t, l, e) {
    if (Uu === null) {
      var a = new Map(),
        n = (Uu = new Map());
      n.set(e, a);
    } else ((n = Uu), (a = n.get(e)), a || ((a = new Map()), n.set(e, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), e = e.getElementsByTagName(t), n = 0;
      n < e.length;
      n++
    ) {
      var u = e[n];
      if (
        !(
          u[Ca] ||
          u[Nt] ||
          (t === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(l) || "";
        i = t + i;
        var f = a.get(i);
        f ? f.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function ad(t, l, e) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        e,
        l === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function Zm(t, l, e) {
    if (e === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof l.precedence != "string" ||
          typeof l.href != "string" ||
          l.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof l.rel != "string" ||
          typeof l.href != "string" ||
          l.href === "" ||
          l.onLoad ||
          l.onError
        )
          break;
        switch (l.rel) {
          case "stylesheet":
            return (
              (t = l.disabled),
              typeof l.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          l.async &&
          typeof l.async != "function" &&
          typeof l.async != "symbol" &&
          !l.onLoad &&
          !l.onError &&
          l.src &&
          typeof l.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function nd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Lm(t, l, e, a) {
    if (
      e.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var n = Aa(a.href),
          u = l.querySelector(gn(n));
        if (u) {
          ((l = u._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (t.count++, (t = Cu.bind(t)), l.then(t, t)),
            (e.state.loading |= 4),
            (e.instance = u),
            Tt(u));
          return;
        }
        ((u = l.ownerDocument || l),
          (a = td(a)),
          (n = pl.get(n)) && Ic(a, n),
          (u = u.createElement("link")),
          Tt(u));
        var i = u;
        ((i._p = new Promise(function (f, s) {
          ((i.onload = f), (i.onerror = s));
        })),
          Dt(u, "link", a),
          (e.instance = u));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(e, l),
        (l = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (t.count++,
          (e = Cu.bind(t)),
          l.addEventListener("load", e),
          l.addEventListener("error", e)));
    }
  }
  var tf = 0;
  function Vm(t, l) {
    return (
      t.stylesheets && t.count === 0 && Ru(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (e) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Ru(t, t.stylesheets), t.unsuspend)) {
                var u = t.unsuspend;
                ((t.unsuspend = null), u());
              }
            }, 6e4 + l);
            0 < t.imgBytes && tf === 0 && (tf = 62500 * Tm());
            var n = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Ru(t, t.stylesheets), t.unsuspend))
                ) {
                  var u = t.unsuspend;
                  ((t.unsuspend = null), u());
                }
              },
              (t.imgBytes > tf ? 50 : 800) + l,
            );
            return (
              (t.unsuspend = e),
              function () {
                ((t.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function Cu() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Ru(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Hu = null;
  function Ru(t, l) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Hu = new Map()),
        l.forEach(Km, t),
        (Hu = null),
        Cu.call(t)));
  }
  function Km(t, l) {
    if (!(l.state.loading & 4)) {
      var e = Hu.get(t);
      if (e) var a = e.get(null);
      else {
        ((e = new Map()), Hu.set(t, e));
        for (
          var n = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      ((n = l.instance),
        (i = n.getAttribute("data-precedence")),
        (u = e.get(i) || a),
        u === a && e.set(null, n),
        e.set(i, n),
        this.count++,
        (a = Cu.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(n, t.firstChild)),
        (l.state.loading |= 4));
    }
  }
  var xn = {
    $$typeof: Ct,
    Provider: null,
    Consumer: null,
    _currentValue: w,
    _currentValue2: w,
    _threadCount: 0,
  };
  function Jm(t, l, e, a, n, u, i, f, s) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Wu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wu(0)),
      (this.hiddenUpdates = Wu(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map()));
  }
  function ud(t, l, e, a, n, u, i, f, s, v, x, z) {
    return (
      (t = new Jm(t, l, e, i, s, v, x, z, f)),
      (l = 1),
      u === !0 && (l |= 24),
      (u = el(3, null, null, l)),
      (t.current = u),
      (u.stateNode = t),
      (l = Ci()),
      l.refCount++,
      (t.pooledCache = l),
      l.refCount++,
      (u.memoizedState = { element: a, isDehydrated: e, cache: l }),
      wi(u),
      t
    );
  }
  function id(t) {
    return t ? ((t = na), t) : na;
  }
  function cd(t, l, e, a, n, u) {
    ((n = id(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = ue(l)),
      (a.payload = { element: e }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (e = ie(t, a, l)),
      e !== null && ($t(e, t, l), $a(e, t, l)));
  }
  function fd(t, l) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var e = t.retryLane;
      t.retryLane = e !== 0 && e < l ? e : l;
    }
  }
  function lf(t, l) {
    (fd(t, l), (t = t.alternate) && fd(t, l));
  }
  function sd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Oe(t, 67108864);
      (l !== null && $t(l, t, 67108864), lf(t, 67108864));
    }
  }
  function od(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = cl();
      l = $u(l);
      var e = Oe(t, l);
      (e !== null && $t(e, t, l), lf(t, l));
    }
  }
  var Bu = !0;
  function km(t, l, e, a) {
    var n = b.T;
    b.T = null;
    var u = T.p;
    try {
      ((T.p = 2), ef(t, l, e, a));
    } finally {
      ((T.p = u), (b.T = n));
    }
  }
  function Wm(t, l, e, a) {
    var n = b.T;
    b.T = null;
    var u = T.p;
    try {
      ((T.p = 8), ef(t, l, e, a));
    } finally {
      ((T.p = u), (b.T = n));
    }
  }
  function ef(t, l, e, a) {
    if (Bu) {
      var n = af(a);
      if (n === null) (Xc(t, l, a, wu, e), dd(t, a));
      else if (Fm(n, t, l, e, a)) a.stopPropagation();
      else if ((dd(t, a), l & 4 && -1 < $m.indexOf(t))) {
        for (; n !== null;) {
          var u = Je(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Te(u.pendingLanes);
                  if (i !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i;) {
                      var s = 1 << (31 - tl(i));
                      ((f.entanglements[1] |= s), (i &= ~s));
                    }
                    (Ml(u), (tt & 6) === 0 && ((xu = It() + 500), mn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((f = Oe(u, 2)), f !== null && $t(f, u, 2), Su(), lf(u, 2));
            }
          if (((u = af(a)), u === null && Xc(t, l, a, wu, e), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Xc(t, l, a, null, e);
    }
  }
  function af(t) {
    return ((t = ui(t)), nf(t));
  }
  var wu = null;
  function nf(t) {
    if (((wu = null), (t = Ke(t)), t !== null)) {
      var l = H(t);
      if (l === null) t = null;
      else {
        var e = l.tag;
        if (e === 13) {
          if (((t = U(l)), t !== null)) return t;
          t = null;
        } else if (e === 31) {
          if (((t = ot(l)), t !== null)) return t;
          t = null;
        } else if (e === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return ((wu = t), null);
  }
  function rd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Rd()) {
          case pf:
            return 2;
          case xf:
            return 8;
          case An:
          case Bd:
            return 32;
          case bf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var uf = !1,
    ge = null,
    pe = null,
    xe = null,
    bn = new Map(),
    Sn = new Map(),
    be = [],
    $m =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function dd(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        ge = null;
        break;
      case "dragenter":
      case "dragleave":
        pe = null;
        break;
      case "mouseover":
      case "mouseout":
        xe = null;
        break;
      case "pointerover":
      case "pointerout":
        bn.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sn.delete(l.pointerId);
    }
  }
  function zn(t, l, e, a, n, u) {
    return t === null || t.nativeEvent !== u
      ? ((t = {
          blockedOn: l,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        l !== null && ((l = Je(l)), l !== null && sd(l)),
        t)
      : ((t.eventSystemFlags |= a),
        (l = t.targetContainers),
        n !== null && l.indexOf(n) === -1 && l.push(n),
        t);
  }
  function Fm(t, l, e, a, n) {
    switch (l) {
      case "focusin":
        return ((ge = zn(ge, t, l, e, a, n)), !0);
      case "dragenter":
        return ((pe = zn(pe, t, l, e, a, n)), !0);
      case "mouseover":
        return ((xe = zn(xe, t, l, e, a, n)), !0);
      case "pointerover":
        var u = n.pointerId;
        return (bn.set(u, zn(bn.get(u) || null, t, l, e, a, n)), !0);
      case "gotpointercapture":
        return (
          (u = n.pointerId),
          Sn.set(u, zn(Sn.get(u) || null, t, l, e, a, n)),
          !0
        );
    }
    return !1;
  }
  function md(t) {
    var l = Ke(t.target);
    if (l !== null) {
      var e = H(l);
      if (e !== null) {
        if (((l = e.tag), l === 13)) {
          if (((l = U(e)), l !== null)) {
            ((t.blockedOn = l),
              Af(t.priority, function () {
                od(e);
              }));
            return;
          }
        } else if (l === 31) {
          if (((l = ot(e)), l !== null)) {
            ((t.blockedOn = l),
              Af(t.priority, function () {
                od(e);
              }));
            return;
          }
        } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function qu(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length;) {
      var e = af(t.nativeEvent);
      if (e === null) {
        e = t.nativeEvent;
        var a = new e.constructor(e.type, e);
        ((ni = a), e.target.dispatchEvent(a), (ni = null));
      } else return ((l = Je(e)), l !== null && sd(l), (t.blockedOn = e), !1);
      l.shift();
    }
    return !0;
  }
  function hd(t, l, e) {
    qu(t) && e.delete(l);
  }
  function Im() {
    ((uf = !1),
      ge !== null && qu(ge) && (ge = null),
      pe !== null && qu(pe) && (pe = null),
      xe !== null && qu(xe) && (xe = null),
      bn.forEach(hd),
      Sn.forEach(hd));
  }
  function Yu(t, l) {
    t.blockedOn === l &&
      ((t.blockedOn = null),
      uf ||
        ((uf = !0),
        p.unstable_scheduleCallback(p.unstable_NormalPriority, Im)));
  }
  var Gu = null;
  function vd(t) {
    Gu !== t &&
      ((Gu = t),
      p.unstable_scheduleCallback(p.unstable_NormalPriority, function () {
        Gu === t && (Gu = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l],
            a = t[l + 1],
            n = t[l + 2];
          if (typeof a != "function") {
            if (nf(a || e) === null) continue;
            break;
          }
          var u = Je(e);
          u !== null &&
            (t.splice(l, 3),
            (l -= 3),
            ac(u, { pending: !0, data: n, method: e.method, action: a }, a, n));
        }
      }));
  }
  function _a(t) {
    function l(s) {
      return Yu(s, t);
    }
    (ge !== null && Yu(ge, t),
      pe !== null && Yu(pe, t),
      xe !== null && Yu(xe, t),
      bn.forEach(l),
      Sn.forEach(l));
    for (var e = 0; e < be.length; e++) {
      var a = be[e];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < be.length && ((e = be[0]), e.blockedOn === null);)
      (md(e), e.blockedOn === null && be.shift());
    if (((e = (t.ownerDocument || t).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var n = e[a],
          u = e[a + 1],
          i = n[Lt] || null;
        if (typeof u == "function") i || vd(e);
        else if (i) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[Lt] || null))) f = i.formAction;
            else if (nf(n) !== null) continue;
          } else f = i.action;
          (typeof f == "function" ? (e[a + 1] = f) : (e.splice(a, 3), (a -= 3)),
            vd(e));
        }
      }
  }
  function yd() {
    function t(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function l() {
      (n !== null && (n(), (n = null)), a || setTimeout(e, 20));
    }
    function e() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", l),
        navigation.addEventListener("navigateerror", l),
        setTimeout(e, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", l),
            navigation.removeEventListener("navigateerror", l),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function cf(t) {
    this._internalRoot = t;
  }
  ((Qu.prototype.render = cf.prototype.render =
    function (t) {
      var l = this._internalRoot;
      if (l === null) throw Error(d(409));
      var e = l.current,
        a = cl();
      cd(e, a, t, l, null, null);
    }),
    (Qu.prototype.unmount = cf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var l = t.containerInfo;
          (cd(t.current, 2, null, t, null, null), Su(), (l[Ve] = null));
        }
      }));
  function Qu(t) {
    this._internalRoot = t;
  }
  Qu.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var l = Tf();
      t = { blockedOn: null, target: t, priority: l };
      for (var e = 0; e < be.length && l !== 0 && l < be[e].priority; e++);
      (be.splice(e, 0, t), e === 0 && md(t));
    }
  };
  var gd = Y.version;
  if (gd !== "19.2.3") throw Error(d(527, gd, "19.2.3"));
  T.findDOMNode = function (t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function"
        ? Error(d(188))
        : ((t = Object.keys(t).join(",")), Error(d(268, t)));
    return (
      (t = E(l)),
      (t = t !== null ? F(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Pm = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xu.isDisabled && Xu.supportsFiber)
      try {
        ((Oa = Xu.inject(Pm)), (Pt = Xu));
      } catch {}
  }
  return (
    (En.createRoot = function (t, l) {
      if (!N(t)) throw Error(d(299));
      var e = !1,
        a = "",
        n = Eo,
        u = To,
        i = Ao;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (e = !0),
          l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (n = l.onUncaughtError),
          l.onCaughtError !== void 0 && (u = l.onCaughtError),
          l.onRecoverableError !== void 0 && (i = l.onRecoverableError)),
        (l = ud(t, 1, !1, null, null, e, a, null, n, u, i, yd)),
        (t[Ve] = l.current),
        Qc(t),
        new cf(l)
      );
    }),
    (En.hydrateRoot = function (t, l, e) {
      if (!N(t)) throw Error(d(299));
      var a = !1,
        n = "",
        u = Eo,
        i = To,
        f = Ao,
        s = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError),
          e.formState !== void 0 && (s = e.formState)),
        (l = ud(t, 1, !0, l, e ?? null, a, n, s, u, i, f, yd)),
        (l.context = id(null)),
        (e = l.current),
        (a = cl()),
        (a = $u(a)),
        (n = ue(a)),
        (n.callback = null),
        ie(e, n, a),
        (e = a),
        (l.current.lanes = e),
        Ua(l, e),
        Ml(l),
        (t[Ve] = l.current),
        Qc(t),
        new Qu(l)
      );
    }),
    (En.version = "19.2.3"),
    En
  );
}
var Nd;
function oh() {
  if (Nd) return of.exports;
  Nd = 1;
  function p() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (Y) {
        console.error(Y);
      }
  }
  return (p(), (of.exports = sh()), of.exports);
}
var rh = oh();
const dh = Od(rh),
  mh = () => {
    const [p, Y] = Gt.useState(!1);
    Gt.useEffect(() => {
      const N = () => {
        Y(window.scrollY > 10);
      };
      return (
        window.addEventListener("scroll", N),
        () => window.removeEventListener("scroll", N)
      );
    }, []);
    const q = [
        { href: "#home", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#process", label: "Process" },
        { href: "#work", label: "Work" },
        { href: "#clients", label: "Clients" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
      ],
      d = (N) => {
        N.preventDefault();
        const H = N.currentTarget.getAttribute("href");
        if (H) {
          const U = H.substring(1),
            ot = document.getElementById(U);
          ot && ot.scrollIntoView({ behavior: "smooth" });
        }
      };
    return c.jsx("header", {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${p ? "bg-background/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5" : "bg-transparent py-6"}`,
      children: c.jsxs("div", {
        className: "container mx-auto px-6 flex justify-between items-center",
        children: [
          c.jsx("a", {
            href: "#home",
            onClick: d,
            className: "flex items-center space-x-2 group",
            children: c.jsx("div", {
              className: "relative",
              children: c.jsxs("h1", {
                className:
                  "text-2xl md:text-3xl font-bold tracking-tighter text-white",
                children: [
                  "BAZIQ",
                  c.jsx("span", { className: "text-primary", children: "HUE" }),
                ],
              }),
            }),
          }),
          c.jsx("nav", {
            className: "hidden md:flex items-center space-x-8",
            children: q.map((N) =>
              c.jsxs(
                "a",
                {
                  href: N.href,
                  onClick: d,
                  className:
                    "text-sm uppercase tracking-wider text-gray-300 hover:text-primary transition-colors duration-300 font-medium relative group",
                  children: [
                    N.label,
                    c.jsx("span", {
                      className:
                        "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                    }),
                  ],
                },
                N.href,
              ),
            ),
          }),
          c.jsx("a", {
            href: "#contact",
            onClick: d,
            className:
              "hidden md:inline-block px-6 py-2 border border-primary text-primary font-bold text-xs uppercase tracking-wider hover:bg-primary hover:text-black hover:shadow-neon transition-all duration-300 rounded",
            children: "Hire Me",
          }),
        ],
      }),
    });
  },
  hh = () => {
    const [p, Y] = Gt.useState(0),
      [q, d] = Gt.useState(!1),
      N = () => Y(window.pageYOffset);
    Gt.useEffect(
      () => (
        window.addEventListener("scroll", N),
        () => window.removeEventListener("scroll", N)
      ),
      [],
    );
    const H = (U) => {
      U.preventDefault();
      const ot = U.currentTarget.getAttribute("href");
      if (ot) {
        const D = ot.substring(1),
          E = document.getElementById(D);
        E && E.scrollIntoView({ behavior: "smooth" });
      }
    };
    return c.jsxs("section", {
      id: "home",
      className:
        "relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black",
      children: [
        c.jsxs("div", {
          className: "absolute inset-0 z-0 pointer-events-none",
          children: [
            c.jsx("div", {
              className:
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full animate-pulse-slow",
            }),
            c.jsx("div", {
              className:
                "absolute top-1/4 left-1/4 w-64 h-64 bg-blue-900/20 blur-[80px] rounded-full animate-float",
            }),
            c.jsx("div", {
              className:
                "absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 blur-[100px] rounded-full animate-float",
              style: { animationDelay: "2s" },
            }),
          ],
        }),
        c.jsx("div", {
          className:
            "absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden",
          children: c.jsxs("div", {
            className:
              "relative w-full flex flex-col items-center justify-center transform scale-125 md:scale-110",
            children: [
              c.jsx("div", {
                class:
                  "text-[8rem] md:text-[13rem] font-black text-stroke-subtle leading-[0.8] tracking-tighter transform -translate-x-12 md:-translate-x-32 opacity-30 blur-[1px]",
                children: "BAZIQ HUE",
              }),
              c.jsx("div", {
                class:
                  "text-[8rem] md:text-[13rem] font-black text-stroke-medium leading-[0.8] tracking-tighter transform translate-x-0 opacity-50",
                children: "BAZIQ HUE",
              }),
              c.jsx("div", {
                class:
                  "text-[8rem] md:text-[13rem] font-black text-stroke-primary leading-[0.8] tracking-tighter transform translate-x-12 md:translate-x-32 opacity-70",
                children: "BAZIQ HUE",
              }),
            ],
          }),
        }),
        c.jsx("div", {
          className:
            "absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none",
          children: c.jsx("div", {
            className: "absolute inset-0 bg-cover bg-center",
            style: {
              backgroundImage: "url('https://i.imgur.com/xuTxEYN.png')",
              transform: `translateY(${p * 0.1}px)`,
            },
          }),
        }),
        c.jsxs("div", {
          className:
            "relative z-20 px-6 animate-fade-in-slow max-w-6xl mx-auto mt-10",
          children: [
            c.jsxs("div", {
              className:
                "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-black/50 backdrop-blur-md mb-10 hover:border-primary transition-colors duration-300 shadow-neon",
              children: [
                c.jsxs("span", {
                  className: "relative flex h-2 w-2",
                  children: [
                    c.jsx("span", {
                      className:
                        "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75",
                    }),
                    c.jsx("span", {
                      className:
                        "relative inline-flex rounded-full h-2 w-2 bg-primary",
                    }),
                  ],
                }),
                c.jsx("span", {
                  className:
                    "text-primary font-mono text-xs font-bold uppercase tracking-widest",
                  children: "Motion Design & Brand Strategy",
                }),
              ],
            }),
            c.jsxs("h1", {
              className:
                "text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tight drop-shadow-2xl",
              children: [
                "WHERE IDEAS TURN INTO ",
                c.jsx("br", {}),
                c.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-[#00a3cc] drop-shadow-glow-text",
                  children: "VISUAL MASTERPIECES",
                }),
              ],
            }),
            c.jsx("p", {
              className:
                "text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide",
              children:
                "We craft award-winning motion graphics and digital experiences for tech startups and luxury brands. Our work defines brands and captivates audiences.",
            }),
            c.jsxs("div", {
              className:
                "flex flex-col sm:flex-row items-center justify-center gap-6",
              children: [
                c.jsxs("button", {
                  onClick: () => d(!0),
                  className:
                    "min-w-[200px] px-8 py-4 bg-primary text-black text-sm font-black uppercase tracking-widest hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 rounded flex items-center justify-center gap-3 group",
                  children: [
                    c.jsx("span", {
                      className:
                        "w-8 h-8 rounded-full bg-black text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors",
                      children: c.jsx("svg", {
                        className: "w-4 h-4 ml-0.5",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: c.jsx("path", { d: "M8 5v14l11-7z" }),
                      }),
                    }),
                    "Watch Reel",
                  ],
                }),
                c.jsx("button", {
                  onClick: () => {
                    var U;
                    return (U = window.openBrandPresentation) == null
                      ? void 0
                      : U.call(window);
                  },
                  className:
                    "min-w-[200px] px-8 py-4 border border-primary/50 text-primary text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300 rounded backdrop-blur-sm shadow-neon",
                  children: "Portfolio",
                }),
                c.jsx("a", {
                  href: "#contact",
                  onClick: H,
                  className:
                    "min-w-[200px] px-8 py-4 border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 rounded backdrop-blur-sm",
                  children: "Hire Me",
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className:
            "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-pulse z-20",
          children: [
            c.jsx("span", {
              className:
                "text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2",
              children: "Scroll",
            }),
            c.jsx("div", {
              className:
                "w-[1px] h-12 bg-gradient-to-b from-primary via-transparent to-transparent",
            }),
          ],
        }),
        q &&
          c.jsx("div", {
            className:
              "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-fade-in backdrop-blur-xl",
            style: { backgroundColor: "rgba(0,0,0,0.8)" },
            onClick: () => d(!1),
            children: c.jsxs("div", {
              className:
                "relative w-full max-w-6xl bg-black rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,240,255,0.15)]",
              onClick: (U) => U.stopPropagation(),
              children: [
                c.jsx("button", {
                  onClick: () => d(!1),
                  className:
                    "absolute top-4 right-4 z-20 text-white/70 hover:text-primary bg-black/50 hover:bg-black rounded-full p-2 transition-all duration-300",
                  "aria-label": "Close Modal",
                  children: c.jsx("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M6 18L18 6M6 6l12 12",
                    }),
                  }),
                }),
                c.jsx("div", {
                  style: { padding: "56.25% 0 0 0", position: "relative" },
                  children: c.jsx("iframe", {
                    src: "https://player.vimeo.com/video/1139694578?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1",
                    frameBorder: "0",
                    allow:
                      "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",
                    referrerPolicy: "strict-origin-when-cross-origin",
                    style: {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    },
                    title: "Abstract Motion Graphics - George Muraguri",
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  Ze = {
    className:
      "w-8 h-8 text-gray-400 group-hover:text-primary transition-colors duration-300",
  },
  vh = () =>
    c.jsx("svg", {
      ...Ze,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: c.jsx("path", {
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12h4v2h-4zm0 4h4v2h-4zm0 4h4v2h-4z",
        fill: "currentColor",
      }),
    }),
  yh = () =>
    c.jsx("svg", {
      ...Ze,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: c.jsx("path", {
        d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    }),
  gh = () =>
    c.jsxs("svg", {
      ...Ze,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        c.jsx("path", {
          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
          fill: "currentColor",
        }),
        c.jsx("path", { d: "M10 10h4v4h-4z", fill: "currentColor" }),
      ],
    }),
  ph = () =>
    c.jsxs("svg", {
      ...Ze,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        c.jsx("path", {
          d: "M4 4h16v16H4z",
          stroke: "currentColor",
          strokeWidth: "1.5",
        }),
        c.jsx("path", {
          d: "M8 16l3-8 3 8M9 13h4M16.5 13v3M16.5 11.5v.5",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  xh = () =>
    c.jsx("svg", {
      ...Ze,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: c.jsx("path", {
        d: "M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.24L19.5 8 12 11.76 4.5 8 12 4.24zM3 8.5v7l9 4.5v-8L3 8.5zm18 0l-9 3.5v8l9-4.5v-7z",
        fill: "currentColor",
      }),
    }),
  bh = () =>
    c.jsx("svg", {
      ...Ze,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: c.jsx("path", {
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V6h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V6h2v2z",
        fill: "currentColor",
      }),
    }),
  Sh = () =>
    c.jsx("svg", {
      ...Ze,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      children: c.jsx("path", {
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15.5l-5-2.88v-5.64l5-2.88 5 2.88v5.64l-5 2.88z",
      }),
    }),
  vf = { className: "w-6 h-6 fill-current" },
  zh = () =>
    c.jsx("svg", {
      ...vf,
      viewBox: "0 0 24 24",
      children: c.jsx("path", {
        d: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.013 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.013-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.013-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6.406-11.845a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z",
      }),
    }),
  jh = () =>
    c.jsx("svg", {
      ...vf,
      viewBox: "0 0 24 24",
      children: c.jsx("path", {
        d: "M21.582 7.234c-.23.822-.87 1.46-1.692 1.692-1.55.433-7.89.433-7.89.433s-6.34 0-7.89-.433c-.822-.23-1.462-.87-1.692-1.692C2 5.684 2 12 2 12s0 6.316.418 7.766c.23.822.87 1.46 1.692 1.692 1.55.433 7.89.433 7.89.433s6.34 0 7.89-.433c.822-.23 1.462-.87 1.692-1.692C22 18.316 22 12 22 12s0-6.316-.418-4.766zM10 15.464V8.536l6 3.464-6 3.464z",
      }),
    }),
  Eh = () =>
    c.jsxs("svg", {
      ...vf,
      viewBox: "0 0 24 24",
      children: [
        c.jsx("path", {
          d: "M19.94,7.39a4.8,4.8,0,0,0-4.4-2.42H8.87V17.6h6.42a5,5,0,0,0,4.65-5.63A4.75,4.75,0,0,0,19.94,7.39ZM15.8,12.6a2.5,2.5,0,0,1-2.4,1.83H11.12V9.89h2.25a2.41,2.41,0,0,1,2.43,2.71ZM15,7.3a1.8,1.8,0,0,1-1.76,1.4H11.12V5.2h2.1A1.78,1.78,0,0,1,15,7.06V7.3Zm-4.14-3h3.58V3.12H10.83Z",
        }),
        c.jsx("path", {
          d: "M21.13,2.88H2.87A.87.87,0,0,0,2,3.75V20.25a.87.87,0,0,0,.87.87H21.13a.87.87,0,0,0,.87-.87V3.75A.87.87,0,0,0,21.13,2.88ZM20.25,19.38H3.75V4.62h16.5Z",
        }),
      ],
    }),
  Th = () =>
    c.jsx("svg", {
      className: "w-32 h-12 text-gray-500 hover:text-white transition-colors",
      viewBox: "0 0 120 40",
      fill: "currentColor",
      children: c.jsx("text", {
        x: "10",
        y: "30",
        fontFamily: "sans-serif",
        fontSize: "24",
        fontWeight: "900",
        letterSpacing: "2",
        children: "NEXUS",
      }),
    }),
  Ah = () =>
    c.jsx("svg", {
      className: "w-32 h-12 text-gray-500 hover:text-white transition-colors",
      viewBox: "0 0 120 40",
      fill: "currentColor",
      children: c.jsx("text", {
        x: "15",
        y: "30",
        fontFamily: "sans-serif",
        fontSize: "24",
        fontWeight: "900",
        letterSpacing: "2",
        children: "VORTEX",
      }),
    }),
  Nh = () =>
    c.jsx("svg", {
      className: "w-32 h-12 text-gray-500 hover:text-white transition-colors",
      viewBox: "0 0 120 40",
      fill: "currentColor",
      children: c.jsx("text", {
        x: "5",
        y: "30",
        fontFamily: "sans-serif",
        fontSize: "24",
        fontWeight: "900",
        letterSpacing: "2",
        children: "ZENITH",
      }),
    }),
  _h = () =>
    c.jsx("svg", {
      className: "w-32 h-12 text-gray-500 hover:text-white transition-colors",
      viewBox: "0 0 120 40",
      fill: "currentColor",
      children: c.jsx("text", {
        x: "20",
        y: "30",
        fontFamily: "sans-serif",
        fontSize: "24",
        fontWeight: "900",
        letterSpacing: "2",
        children: "ORION",
      }),
    }),
  Mh = () =>
    c.jsx("svg", {
      className: "w-32 h-12 text-gray-500 hover:text-white transition-colors",
      viewBox: "0 0 120 40",
      fill: "currentColor",
      children: c.jsx("text", {
        x: "12",
        y: "30",
        fontFamily: "sans-serif",
        fontSize: "24",
        fontWeight: "900",
        letterSpacing: "2",
        children: "AEGIS",
      }),
    }),
  Oh = () =>
    c.jsx("svg", {
      className: "w-32 h-12 text-gray-500 hover:text-white transition-colors",
      viewBox: "0 0 120 40",
      fill: "currentColor",
      children: c.jsx("text", {
        x: "10",
        y: "30",
        fontFamily: "sans-serif",
        fontSize: "24",
        fontWeight: "900",
        letterSpacing: "2",
        children: "IGNITE",
      }),
    }),
  ze = {
    className: "w-8 h-8",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  Dh = () =>
    c.jsxs("svg", {
      ...ze,
      children: [
        c.jsx("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "0",
          ry: "0",
        }),
        c.jsx("line", { x1: "3", y1: "9", x2: "21", y2: "9" }),
        c.jsx("line", { x1: "3", y1: "15", x2: "21", y2: "15" }),
        c.jsx("line", { x1: "9", y1: "3", x2: "9", y2: "21" }),
        c.jsx("line", { x1: "15", y1: "3", x2: "15", y2: "21" }),
      ],
    }),
  Uh = () =>
    c.jsxs("svg", {
      ...ze,
      children: [
        c.jsx("path", { d: "M3 10v3a9 9 0 0 0 18 0v-3" }),
        c.jsx("path", {
          d: "M21 8a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3Z",
        }),
        c.jsx("path", {
          d: "M3 11V8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",
        }),
        c.jsx("path", { d: "M12 19l-2 2-2-2" }),
        c.jsx("path", { d: "M12 15v6" }),
      ],
    }),
  Ch = () =>
    c.jsxs("svg", {
      ...ze,
      children: [
        c.jsx("path", { d: "M12 6v6l4 2" }),
        c.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        c.jsx("path", { d: "m16 2.05.9.95-2.8 2.8" }),
      ],
    }),
  Hh = () =>
    c.jsxs("svg", {
      ...ze,
      children: [
        c.jsx("path", {
          d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
        }),
        c.jsx("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
        c.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "22" }),
      ],
    }),
  Rh = () =>
    c.jsxs("svg", {
      ...ze,
      children: [
        c.jsx("rect", {
          x: "2",
          y: "2",
          width: "20",
          height: "20",
          rx: "0",
          ry: "0",
        }),
        c.jsx("line", { x1: "7", y1: "2", x2: "7", y2: "22" }),
        c.jsx("line", { x1: "17", y1: "2", x2: "17", y2: "22" }),
        c.jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
        c.jsx("line", { x1: "2", y1: "7", x2: "7", y2: "7" }),
        c.jsx("line", { x1: "2", y1: "17", x2: "7", y2: "17" }),
        c.jsx("line", { x1: "17", y1: "17", x2: "22", y2: "17" }),
        c.jsx("line", { x1: "17", y1: "7", x2: "22", y2: "7" }),
      ],
    }),
  Bh = () =>
    c.jsxs("svg", {
      ...ze,
      children: [
        c.jsx("path", {
          d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
        }),
        c.jsx("circle", { cx: "12", cy: "13", r: "3" }),
      ],
    }),
  _d = () =>
    c.jsxs("svg", {
      ...ze,
      children: [
        c.jsx("path", { d: "M3 3v18h18" }),
        c.jsx("path", { d: "M7 16V7h9" }),
        c.jsx("path", { d: "M11 16v-4h4" }),
      ],
    }),
  wh = () =>
    c.jsxs("svg", {
      ...ze,
      children: [
        c.jsx("path", {
          d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        }),
        c.jsx("polyline", { points: "14 2 14 8 20 8" }),
        c.jsx("path", { d: "m9 15 2 2 4-4" }),
      ],
    }),
    qh = [
    {
      id: 1,
      title: "Lumina Pay Redesign",
      client: "FinTech Sector",
      tagline: "A comprehensive UI/UX and brand overhaul for a mobile wallet.",
      images: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
      ],
      description: {
        problem: "The existing app felt outdated and struggled with user retention.",
        idea: "Implement a modern, clean, and intuitive interface with seamless micro-animations.",
        solution: "A complete redesign of the user journey, paired with a fresh visual identity and promotional motion graphics.",
        result: "User retention increased by 45%, and the app saw a 200% surge in daily active users.",
      },
      tools: ["Figma", "After Effects", "Illustrator"],
    },
    {
      id: 2,
      title: "Aura Luxury Beauty",
      client: "E-Commerce",
      tagline: "High-end product visuals and motion campaigns.",
      images: [
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1200&auto=format&fit=crop"
      ],
      description: {
        problem: "The brand needed to communicate premium quality exclusively through digital channels.",
        idea: "Use fluid, slow-motion 3D product renders and a refined typography system.",
        solution: "Created a series of cinematic motion graphics and high-fidelity social assets.",
        result: "The social campaign generated $120k in sales within the first two weeks of launch.",
      },
      tools: ["Cinema 4D", "After Effects", "Photoshop"],
    },
    {
      id: 3,
      title: "Zenith Workspace",
      client: "Real Estate",
      tagline: "A brand refresh that attracted a premium clientele.",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop"
      ],
      description: {
        problem: "An established co-working space wanted to reposition itself as a luxury destination.",
        idea: "Create a sophisticated, minimal identity that communicates exclusivity.",
        solution: "Implemented a refined logo, muted color palette with gold accents, and high-end marketing collateral.",
        result: "Led to a 60% increase in private office inquiries and the first-ever membership waitlist.",
      },
      tools: ["Illustrator", "Photoshop", "InDesign"],
    }
  ],
  Yh = [
    {
      id: 1,
      quote: "George elevated our brand identity with an incredible eye for minimalism. The motion graphics delivered for our campaign were flawless and professional.",
      author: "Sarah Jenkins",
      role: "CMO, TechFlow Solutions",
      image: "https://i.pravatar.cc/150?u=sarah&w=150"
    },
    {
      id: 2,
      quote: "A true creative partner. He bridged the gap between our strategic needs and stunning visual execution. Our client engagement skyrocketed after the rebrand.",
      author: "David Ochieng",
      role: "Founder, Nova Labs Kenya",
      image: "https://i.pravatar.cc/150?u=david&w=150"
    },
    {
      id: 3,
      quote: "His attention to detail and ability to remove the unnecessary really let our core message shine. The visual storytelling was cinematic and powerful.",
      author: "Elena Rossi",
      role: "Director, Luxe Aesthetics",
      image: "https://i.pravatar.cc/150?u=elena&w=150"
    }
  ],
  Gh = [
    { id: 1, name: "Nexus", icon: c.jsx(Th, {}) },
    { id: 2, name: "Vortex", icon: c.jsx(Ah, {}) },
    { id: 3, name: "Zenith", icon: c.jsx(Nh, {}) },
    { id: 4, name: "Orion", icon: c.jsx(_h, {}) },
    { id: 5, name: "Aegis", icon: c.jsx(Mh, {}) },
    { id: 6, name: "Ignite", icon: c.jsx(Oh, {}) },
  ],
  Qh = [
    { name: "After Effects", icon: c.jsx(xh, {}) },
    { name: "Photoshop", icon: c.jsx(gh, {}) },
    { name: "Illustrator", icon: c.jsx(ph, {}) },
    { name: "CapCut", icon: c.jsx(bh, {}) },
    { name: "Gemini AI", icon: c.jsx(Sh, {}) },
    { name: "Canva", icon: c.jsx(vh, {}) },
    { name: "Renderforest", icon: c.jsx(yh, {}) },
  ],
  Xh = [
    { name: "Instagram", icon: c.jsx(zh, {}), url: "https://instagram.com" },
    { name: "YouTube", icon: c.jsx(jh, {}), url: "https://youtube.com" },
    { name: "Behance", icon: c.jsx(Eh, {}), url: "https://behance.net" },
  ],
  Zh = [
    {
      name: "Brand Identity & Motion Graphics",
      description: "Dynamic visual identities that move.",
      icon: c.jsx(_d, {}),
      externalLink: "brand-presentation.html",
    },
    {
      name: "Video Editing & Post-Production",
      description: "High-end editing and visual effects.",
      icon: c.jsx(Rh, {}),
      demoType: "video-editing",
    },
    {
      name: "Photo Editing & Carousel Design",
      description: "Retouching and social media layouts.",
      icon: c.jsx(Bh, {}),
      demoType: "photo-editing",
    },
    {
      name: "Brand & Account Management",
      description: "Strategic oversight for digital channels.",
      icon: c.jsx(_d, {}),
      externalLink: "brand-presentation.html",
    },
  ],
  Lh = [
    {
      name: "Virtual Assistance",
      description: "Executive support and organization.",
      icon: c.jsx(Ch, {}),
    },
    {
      name: "Data Entry & Organization",
      description: "Accurate data management.",
      icon: c.jsx(Dh, {}),
      demoType: "data-entry",
    },
    {
      name: "Transcription & Captioning",
      description: "Audio-to-text and subtitle services.",
      icon: c.jsx(Uh, {}),
      demoType: "transcription",
    },
    {
      name: "Voiceovers",
      description: "AI-powered voice synthesis (ElevenLabs).",
      icon: c.jsx(Hh, {}),
      demoType: "voiceovers",
    },
    {
      name: "Proofreading & Support",
      description: "Quality assurance and customer care.",
      icon: c.jsx(wh, {}),
      demoType: "proofreading",
    },
  ],
  Rt = ({ children: p, className: Y = "" }) => {
    const [q, d] = Gt.useState(!1),
      N = Gt.useRef(null);
    return (
      Gt.useEffect(() => {
        const H = new IntersectionObserver(
          ([U]) => {
            U.isIntersecting && (d(!0), H.unobserve(U.target));
          },
          { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
        );
        return (
          N.current && H.observe(N.current),
          () => {
            N.current && H.unobserve(N.current);
          }
        );
      }, []),
      c.jsx("div", {
        ref: N,
        className: `${Y} transition-all duration-1000 ease-out transform ${q ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
        children: p,
      })
    );
  },
  Md = ({
    icon: p,
    title: Y,
    description: q,
    demoType: d,
    externalLink: N,
    onOpenDemo: H,
  }) =>
    c.jsxs("div", {
      className:
        "flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300 group relative",
      children: [
        c.jsx("div", {
          className:
            "mt-1 text-gray-500 group-hover:text-primary transition-colors duration-300 shrink-0",
          children: p,
        }),
        c.jsxs("div", {
          children: [
            c.jsx("h4", {
              className:
                "text-white font-bold text-base mb-1 group-hover:text-white transition-colors",
              children: Y,
            }),
            c.jsx("p", {
              className:
                "text-gray-500 text-sm leading-relaxed group-hover:text-gray-400",
              children: q,
            }),
            d &&
              H &&
              c.jsxs("button", {
                onClick: (U) => {
                  (U.preventDefault(), H(d));
                },
                className:
                  "mt-4 inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-black hover:border-primary hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 rounded-sm cursor-pointer",
                children: [
                  c.jsx("span", { className: "text-xs", children: "▷" }),
                  " ",
                  d === "transcription"
                    ? "Open Video & Transcript"
                    : "Watch Demo",
                ],
              }),
            N &&
              (N === "brand-presentation.html"
                ? c.jsxs("div", {
                    className: "flex flex-wrap gap-2 mt-4",
                    children: [
                      c.jsxs("button", {
                        onClick: (U) => {
                          (U.preventDefault(),
                            window.openBrandPresentation &&
                              window.openBrandPresentation());
                        },
                        className:
                          "inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-black hover:border-primary hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 rounded-sm cursor-pointer",
                        children: [
                          c.jsx("span", {
                            className: "text-xs",
                            children: "▷",
                          }),
                          " Launch Interactive Demo",
                        ],
                      }),
                      c.jsxs("button", {
                        onClick: (U) => {
                          (U.preventDefault(),
                            window.openAbstractDemo &&
                              window.openAbstractDemo());
                        },
                        className:
                          "inline-flex items-center gap-2 px-4 py-2 border border-purple-500/30 bg-purple-500/5 text-purple-400 text-[10px] font-bold uppercase tracking-widest hover:bg-purple-500 hover:text-white hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 rounded-sm cursor-pointer",
                        children: [
                          c.jsx("span", {
                            className: "text-xs",
                            children: "▷",
                          }),
                          " Launch Abstract 3D",
                        ],
                      }),
                    ],
                  })
                : c.jsxs("a", {
                    href: N,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "mt-4 inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-black hover:border-primary hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 rounded-sm cursor-pointer",
                    children: [
                      c.jsx("span", { className: "text-xs", children: "▷" }),
                      " Launch Interactive Demo",
                    ],
                  })),
          ],
        }),
      ],
    }),
  Vh = () => {
    const [p, Y] = Gt.useState(null);
    Gt.useEffect(
      () => (
        p
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "auto"),
        () => {
          document.body.style.overflow = "auto";
        }
      ),
      [p],
    );
    const q = (d) => {
      d === "transcription"
        ? window.openSonixDemo && window.openSonixDemo()
        : Y(d);
    };
    return c.jsxs("section", {
      id: "services",
      className: "relative py-32 bg-black",
      children: [
        c.jsxs("div", {
          className: "container mx-auto px-6 relative z-10",
          children: [
            c.jsx(Rt, {
              children: c.jsxs("div", {
                className: "text-center mb-24",
                children: [
                  c.jsx("h2", {
                    className:
                      "text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight",
                    children: "Our Expertise",
                  }),
                  c.jsx("div", { className: "w-24 h-1 bg-white/20 mx-auto" }),
                ],
              }),
            }),
            c.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24",
              children: [
                c.jsx(Rt, {
                  className: "transition-delay-100",
                  children: c.jsxs("div", {
                    className: "h-full",
                    children: [
                      c.jsxs("div", {
                        className: "mb-10 border-b border-white/10 pb-6",
                        children: [
                          c.jsx("h3", {
                            className: "text-2xl font-bold text-white mb-2",
                            children: "CORE CREATIVE",
                          }),
                          c.jsx("p", {
                            className:
                              "text-primary text-sm uppercase tracking-widest font-medium",
                            children: "The Masterpiece Work",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          Zh.map((d) =>
                            c.jsx(
                              Md,
                              {
                                icon: d.icon,
                                title: d.name,
                                description: d.description,
                                demoType: d.demoType,
                                externalLink: d.externalLink,
                                onOpenDemo: q,
                              },
                              d.name,
                            ),
                          ),
                          c.jsxs("a", {
                            href: "https://subtleworks-studio.netlify.app/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label":
                              "Explore SubtleWorks Studio: Digital tools & Chrome extensions (opens in new tab)",
                            className:
                              "flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group relative subtleworks-card block cursor-pointer no-underline",
                            children: [
                              c.jsx("div", {
                                className:
                                  "mt-1 text-gray-500 group-hover:text-primary transition-colors duration-300 shrink-0",
                                children: c.jsxs("svg", {
                                  ...ze,
                                  children: [
                                    c.jsx("rect", {
                                      width: "20",
                                      height: "16",
                                      x: "2",
                                      y: "4",
                                      rx: "3",
                                    }),
                                    c.jsx("path", { d: "M6 8h.01" }),
                                    c.jsx("path", { d: "M10 8h.01" }),
                                    c.jsx("path", { d: "M14 8h.01" }),
                                    c.jsx("path", { d: "m8 14 2.5-2.5L8 9" }),
                                    c.jsx("path", { d: "M13 14h3" }),
                                  ],
                                }),
                              }),
                              c.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  c.jsxs("div", {
                                    className:
                                      "flex items-center gap-2 mb-1 flex-wrap",
                                    children: [
                                      c.jsx("h4", {
                                        className:
                                          "text-white font-bold text-base group-hover:text-primary transition-colors",
                                        children: "SubtleWorks Studio",
                                      }),
                                      c.jsx("span", {
                                        className:
                                          "text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20",
                                        children: "Digital Tools",
                                      }),
                                    ],
                                  }),
                                  c.jsx("p", {
                                    className:
                                      "text-gray-400 text-sm leading-relaxed group-hover:text-gray-300",
                                    children:
                                      "Digital tools, Chrome extensions & creative technology. Explore Phantom Typer Simulator & Invisible Selection.",
                                  }),
                                  c.jsx("div", {
                                    className: "mt-4",
                                    children: c.jsxs("span", {
                                      className:
                                        "subtleworks-btn inline-flex items-center gap-2 px-4 py-2 border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest group-hover:bg-primary group-hover:text-black group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300 rounded-sm",
                                      children: [
                                        c.jsx("span", {
                                          className: "text-xs",
                                          children: "▷",
                                        }),
                                        " Explore SubtleWorks Studio →",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                c.jsx(Rt, {
                  className: "transition-delay-200",
                  children: c.jsxs("div", {
                    className: "h-full relative",
                    children: [
                      c.jsx("div", {
                        className:
                          "hidden lg:block absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent",
                      }),
                      c.jsxs("div", {
                        className: "mb-10 border-b border-white/10 pb-6",
                        children: [
                          c.jsx("h3", {
                            className: "text-2xl font-bold text-white mb-2",
                            children: "PROFESSIONAL SUPPORT",
                          }),
                          c.jsx("p", {
                            className:
                              "text-gray-500 text-sm uppercase tracking-widest font-medium",
                            children: "Reliability & Operations",
                          }),
                        ],
                      }),
                      c.jsx("div", {
                        className: "space-y-2",
                        children: Lh.map((d) =>
                          c.jsx(
                            Md,
                            {
                              icon: d.icon,
                              title: d.name,
                              description: d.description,
                              demoType: d.demoType,
                              externalLink: d.externalLink,
                              onOpenDemo: q,
                            },
                            d.name,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        p &&
          c.jsx("div", {
            className:
              "fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-fade-in backdrop-blur-sm",
            style: { backgroundColor: "rgba(0,0,0,0.8)" },
            onClick: () => Y(null),
            children: c.jsxs("div", {
              className:
                "relative w-full max-w-6xl bg-black rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]",
              onClick: (d) => d.stopPropagation(),
              children: [
                c.jsx("button", {
                  onClick: () => Y(null),
                  className:
                    "absolute top-4 right-4 z-20 text-white/70 hover:text-primary bg-black/50 hover:bg-black rounded-full p-2 transition-all duration-300",
                  "aria-label": "Close Modal",
                  children: c.jsx("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: c.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M6 18L18 6M6 6l12 12",
                    }),
                  }),
                }),
                p === "video-editing" &&
                  c.jsxs("div", {
                    style: { padding: "56.25% 0 0 0", position: "relative" },
                    children: [
                      c.jsx("iframe", {
                        src: "https://player.vimeo.com/video/1139699672?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1",
                        frameBorder: "0",
                        allow:
                          "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",
                        referrerPolicy: "strict-origin-when-cross-origin",
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        },
                        title: "Video Editor Showreel",
                      }),
                      c.jsx("script", {
                        src: "https://player.vimeo.com/api/player.js",
                      }),
                    ],
                  }),
                p === "photo-editing" &&
                  c.jsxs("div", {
                    style: { padding: "56.25% 0 0 0", position: "relative" },
                    children: [
                      c.jsx("iframe", {
                        src: "https://player.vimeo.com/video/1139699620?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1",
                        frameBorder: "0",
                        allow:
                          "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",
                        referrerPolicy: "strict-origin-when-cross-origin",
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        },
                        title: "High End Retouching",
                      }),
                      c.jsx("script", {
                        src: "https://player.vimeo.com/api/player.js",
                      }),
                    ],
                  }),
                p === "data-entry" &&
                  c.jsxs("div", {
                    style: { padding: "56.25% 0 0 0", position: "relative" },
                    children: [
                      c.jsx("iframe", {
                        src: "https://player.vimeo.com/video/1139726917?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1",
                        frameBorder: "0",
                        allow:
                          "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",
                        referrerPolicy: "strict-origin-when-cross-origin",
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        },
                        title: "Data Entry Portfolio",
                      }),
                      c.jsx("script", {
                        src: "https://player.vimeo.com/api/player.js",
                      }),
                    ],
                  }),
                p === "proofreading" &&
                  c.jsxs("div", {
                    style: { padding: "56.25% 0 0 0", position: "relative" },
                    children: [
                      c.jsx("iframe", {
                        src: "https://player.vimeo.com/video/1139726842?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1",
                        frameBorder: "0",
                        allow:
                          "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",
                        referrerPolicy: "strict-origin-when-cross-origin",
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        },
                        title: "Proofreading Portfolio",
                      }),
                      c.jsx("script", {
                        src: "https://player.vimeo.com/api/player.js",
                      }),
                    ],
                  }),
                p === "voiceovers" &&
                  c.jsxs("div", {
                    style: { padding: "56.25% 0 0 0", position: "relative" },
                    children: [
                      c.jsx("iframe", {
                        src: "https://player.vimeo.com/video/1139742703?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1",
                        frameBorder: "0",
                        allow:
                          "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",
                        referrerPolicy: "strict-origin-when-cross-origin",
                        style: {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                        },
                        title: "Voice Profile Executive Narrator",
                      }),
                      c.jsx("script", {
                        src: "https://player.vimeo.com/api/player.js",
                      }),
                    ],
                  }),
              ],
            }),
          }),
      ],
    });
  },
  Kh = [
    {
      number: "01",
      title: "Discovery",
      desc: "We analyze your goals & audience.",
    },
    { number: "02", title: "Strategy", desc: "We build the visual plan." },
    { number: "03", title: "Creation", desc: "Design & Animation phase." },
    { number: "04", title: "Launch", desc: "Delivery & Handoff." },
  ],
  Jh = () =>
    c.jsx("section", {
      id: "process",
      className: "py-24 bg-[#080808] border-y border-white/5",
      children: c.jsxs("div", {
        className: "container mx-auto px-6",
        children: [
          c.jsx(Rt, {
            children: c.jsxs("div", {
              className: "mb-16 text-center md:text-left",
              children: [
                c.jsx("span", {
                  className:
                    "text-primary text-xs font-bold uppercase tracking-widest",
                  children: "Workflow",
                }),
                c.jsx("h2", {
                  className: "text-3xl md:text-4xl font-bold text-white mt-2",
                  children: "The Process",
                }),
              ],
            }),
          }),
          c.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: Kh.map((p, Y) =>
              c.jsx(
                Rt,
                {
                  className: `transition-delay-${Y * 100}`,
                  children: c.jsxs("div", {
                    className:
                      "relative p-6 border border-white/5 bg-black hover:border-primary/30 transition-colors duration-300 group h-full",
                    children: [
                      c.jsx("span", {
                        className:
                          "text-5xl font-black text-white/5 group-hover:text-primary/10 transition-colors absolute top-4 right-4 select-none",
                        children: p.number,
                      }),
                      c.jsxs("div", {
                        className: "relative z-10 mt-4",
                        children: [
                          c.jsx("div", {
                            className:
                              "w-2 h-2 bg-primary mb-6 rounded-full shadow-neon",
                          }),
                          c.jsx("h3", {
                            className: "text-xl font-bold text-white mb-3",
                            children: p.title,
                          }),
                          c.jsx("p", {
                            className: "text-gray-500 text-sm",
                            children: p.desc,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                p.number,
              ),
            ),
          }),
        ],
      }),
    }),
  kh = ({ project: p, onClose: Y }) => {
    const [q, d] = Gt.useState(0);
    Gt.useEffect(() => {
      const U = (ot) => {
        (ot.key === "Escape" && Y(),
          ot.key === "ArrowRight" && N(),
          ot.key === "ArrowLeft" && H());
      };
      return (
        window.addEventListener("keydown", U),
        () => window.removeEventListener("keydown", U)
      );
    }, [p]);
    const N = () => {
        d((U) => (U + 1) % p.images.length);
      },
      H = () => {
        d((U) => (U - 1 + p.images.length) % p.images.length);
      };
    return c.jsx("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop",
      onClick: Y,
      children: c.jsxs("div", {
        className:
          "bg-[#0f0f0f] border border-white/10 w-full max-w-6xl max-h-[90vh] overflow-y-auto flex flex-col lg:flex-row relative animate-fade-in rounded-lg shadow-2xl",
        onClick: (U) => U.stopPropagation(),
        children: [
          c.jsx("button", {
            onClick: Y,
            className:
              "absolute top-4 right-4 text-white hover:text-primary transition-colors z-20 p-2 bg-black/50 rounded-full",
            children: c.jsx("svg", {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: c.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M6 18L18 6M6 6l12 12",
              }),
            }),
          }),
          c.jsxs("div", {
            className:
              "w-full lg:w-3/5 relative bg-black flex items-center justify-center",
            children: [
              c.jsx("img", {
                src: p.images[q],
                alt: `${p.title} screenshot ${q + 1}`,
                className:
                  "max-w-full max-h-[60vh] lg:max-h-full object-contain",
              }),
              p.images.length > 1 &&
                c.jsxs(c.Fragment, {
                  children: [
                    c.jsx("button", {
                      onClick: H,
                      className:
                        "absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 hover:bg-primary hover:text-black transition duration-300",
                      children: "‹",
                    }),
                    c.jsx("button", {
                      onClick: N,
                      className:
                        "absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 hover:bg-primary hover:text-black transition duration-300",
                      children: "›",
                    }),
                  ],
                }),
            ],
          }),
          c.jsxs("div", {
            className: "w-full lg:w-2/5 p-10 flex flex-col bg-surface",
            children: [
              c.jsx("p", {
                className:
                  "text-primary text-xs font-bold uppercase tracking-widest mb-2",
                children: p.client,
              }),
              c.jsx("h2", {
                className: "text-4xl font-bold text-white mb-8",
                children: p.title,
              }),
              c.jsxs("div", {
                className:
                  "space-y-8 text-gray-300 font-light text-sm leading-relaxed border-t border-white/5 pt-6",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("strong", {
                        className:
                          "text-white font-medium uppercase text-xs tracking-wider block mb-1",
                        children: "The Challenge",
                      }),
                      c.jsx("p", { children: p.description.problem }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("strong", {
                        className:
                          "text-white font-medium uppercase text-xs tracking-wider block mb-1",
                        children: "The Approach",
                      }),
                      c.jsx("p", { children: p.description.solution }),
                    ],
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("strong", {
                        className:
                          "text-white font-medium uppercase text-xs tracking-wider block mb-1",
                        children: "The Outcome",
                      }),
                      c.jsx("p", {
                        className: "text-primary",
                        children: p.description.result,
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "mt-auto pt-8 border-t border-white/5",
                children: [
                  c.jsx("h4", {
                    className:
                      "text-xs font-bold text-white uppercase tracking-widest mb-3",
                    children: "Tools & Tech",
                  }),
                  c.jsx("div", {
                    className: "flex flex-wrap gap-2",
                    children: p.tools.map((U) =>
                      c.jsx(
                        "span",
                        {
                          className:
                            "bg-white/5 border border-white/10 text-gray-300 text-[10px] uppercase tracking-wider px-3 py-1 rounded hover:border-primary hover:text-primary transition-colors",
                          children: U,
                        },
                        U,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Wh = ({ project: p, onClick: Y }) => {
    const [q, d] = Gt.useState(""),
      N = (U) => {
        const D = U.currentTarget.getBoundingClientRect(),
          E = U.clientX - D.left,
          F = U.clientY - D.top,
          B = E / D.width,
          rt = F / D.height,
          Bt = (B - 0.5) * -30,
          Ut = (rt - 0.5) * -30;
        d(`scale(1.1) translate(${Bt}px, ${Ut}px)`);
      },
      H = () => {
        d("");
      };
    return c.jsxs("div", {
      className:
        "group relative block w-full cursor-pointer overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col md:flex-row h-auto md:h-[400px]",
      onClick: Y,
      onMouseMove: N,
      onMouseLeave: H,
      children: [
        c.jsx("div", {
          className: "w-full md:w-1/2 h-64 md:h-full overflow-hidden relative",
          children: c.jsx("img", {
            src: p.images[0],
            alt: p.title,
            className:
              "w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform",
            style: q ? { transform: q } : {},
          }),
        }),
        c.jsxs("div", {
          className:
            "w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center relative bg-[#0a0a0a] z-10",
          children: [
            c.jsxs("div", {
              className: "mb-6",
              children: [
                c.jsx("p", {
                  className:
                    "text-primary text-xs font-bold uppercase tracking-widest mb-2",
                  children: p.client,
                }),
                c.jsx("h3", {
                  className: "text-3xl font-bold text-white mb-1",
                  children: p.title,
                }),
              ],
            }),
            c.jsxs("div", {
              className:
                "space-y-4 text-sm border-l-2 border-white/10 pl-6 group-hover:border-primary transition-colors duration-300",
              children: [
                c.jsxs("div", {
                  children: [
                    c.jsx("span", {
                      className:
                        "block text-gray-500 text-[10px] uppercase tracking-wider font-bold mb-1",
                      children: "The Challenge",
                    }),
                    c.jsx("p", {
                      className: "text-gray-300 leading-snug line-clamp-2",
                      children: p.description.problem,
                    }),
                  ],
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("span", {
                      className:
                        "block text-gray-500 text-[10px] uppercase tracking-wider font-bold mb-1",
                      children: "The Solution",
                    }),
                    c.jsx("p", {
                      className: "text-gray-300 leading-snug line-clamp-2",
                      children: p.description.solution,
                    }),
                  ],
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("span", {
                      className:
                        "block text-primary text-[10px] uppercase tracking-wider font-bold mb-1",
                      children: "The Result",
                    }),
                    c.jsx("p", {
                      className: "text-white leading-snug font-medium",
                      children: p.description.result,
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className:
                "mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors",
              children: [
                "View Project Details ",
                c.jsx("span", { className: "text-lg", children: "→" }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  $h = () => {
    const [p, Y] = Gt.useState(null),
      q = (H) => {
        (Y(H), (document.body.style.overflow = "hidden"));
      },
      d = () => {
        (Y(null), (document.body.style.overflow = "auto"));
      },
      N = "https://vimeo.com/user250972723";
    return c.jsxs("section", {
      id: "work",
      className: "py-32 relative bg-black",
      children: [
        c.jsxs("div", {
          className: "container mx-auto px-6",
          children: [
            c.jsx(Rt, {
              children: c.jsxs("div", {
                className:
                  "mb-20 flex flex-col md:flex-row justify-between items-end",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("span", {
                        className:
                          "text-primary text-sm font-bold uppercase tracking-wider block mb-2",
                        children: "Selected Works",
                      }),
                      c.jsx("h2", {
                        className: "text-4xl md:text-5xl font-black text-white",
                        children: "Case Studies",
                      }),
                    ],
                  }),
                  c.jsx("a", {
                    href: N,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "hidden md:inline-block text-gray-400 hover:text-white transition-colors border-b border-gray-700 hover:border-white pb-1",
                    children: "View All Projects →",
                  }),
                ],
              }),
            }),
            c.jsx("div", {
              className: "flex flex-col gap-12",
              children: qh
                .slice(0, 3)
                .map((H, U) =>
                  c.jsx(
                    Rt,
                    {
                      className: `transition-delay-${U * 100}`,
                      children: c.jsx(Wh, { project: H, onClick: () => q(H) }),
                    },
                    H.id,
                  ),
                ),
            }),
            c.jsx(Rt, {
              children: c.jsx("div", {
                className: "mt-12 text-center md:hidden",
                children: c.jsx("a", {
                  href: N,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-block px-8 py-3 border border-gray-700 rounded-full text-white font-medium hover:border-primary hover:text-primary transition-all duration-300",
                  children: "View All Projects",
                }),
              }),
            }),
          ],
        }),
        p && c.jsx(kh, { project: p, onClose: d }),
      ],
    });
  },
  Fh = () =>
    c.jsx("section", {
      id: "clients",
      className: "relative py-24",
      children: c.jsxs("div", {
        className: "container mx-auto px-6 relative z-10",
        children: [
          c.jsx(Rt, {
            children: c.jsxs("div", {
              className: "text-center mb-20",
              children: [
                c.jsxs("h2", {
                  className: "text-3xl md:text-4xl font-bold text-white mb-4",
                  children: [
                    "Trusted by ",
                    c.jsx("span", {
                      className: "text-primary",
                      children: "Industry Leaders",
                    }),
                  ],
                }),
                c.jsx("div", {
                  className:
                    "w-16 h-1 bg-primary mx-auto rounded-full shadow-neon",
                }),
              ],
            }),
          }),
          c.jsx(Rt, {
            children: c.jsx("div", {
              className:
                "flex flex-wrap items-center justify-center gap-x-16 gap-y-12 mb-24 opacity-60 hover:opacity-100 transition-opacity duration-500",
              children: Gh.map((p) =>
                c.jsx(
                  "div",
                  {
                    className:
                      "grayscale hover:grayscale-0 hover:text-primary transition-all duration-300 transform hover:scale-105",
                    children: p.icon,
                  },
                  p.id,
                ),
              ),
            }),
          }),
          c.jsx("div", {
            className:
              "grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16",
            children: Yh.map((p, Y) =>
              c.jsx(
                Rt,
                {
                  className: `transition-delay-${Y * 150}`,
                  children: c.jsxs("div", {
                    className:
                      "bg-[#0a0a0a]/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 h-full flex flex-col hover:border-primary/50 hover:shadow-lg transition-all duration-300",
                    children: [
                      c.jsx("div", {
                        className: "mb-6 text-primary text-5xl font-serif",
                        children: '"',
                      }),
                      c.jsx("p", {
                        className:
                          "text-gray-300 text-lg mb-8 flex-grow leading-relaxed italic",
                        children: p.quote,
                      }),
                                            c.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          c.jsx("img", {
                            src: p.image || "https://i.pravatar.cc/150?u=" + p.id,
                            alt: p.author,
                            className: "w-12 h-12 rounded-full object-cover border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all duration-300"
                          }),
                          c.jsxs("div", {
                            children: [
                              c.jsx("p", {
                                className: "font-bold text-white text-sm uppercase tracking-wider",
                                children: p.author,
                              }),
                              c.jsx("p", {
                                className: "text-xs text-primary mt-1",
                                children: p.role,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                p.id,
              ),
            ),
          }),
        ],
      }),
    }),
  Ih = () =>
    c.jsx("section", {
      id: "about",
      className: "relative py-24 overflow-hidden bg-black",
      children: c.jsx("div", {
        className: "container mx-auto px-6 relative z-10",
        children: c.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
          children: [
            c.jsx("div", {
              className: "lg:col-span-5",
              children: c.jsx(Rt, {
                children: c.jsxs("div", {
                  className: "relative group",
                  children: [
                    c.jsx("div", {
                      className:
                        "absolute top-4 -left-4 w-full h-full border-2 border-white/10 rounded-none z-0 group-hover:border-primary transition-colors duration-300",
                    }),
                    c.jsx("img", {
                      src: "https://i.imgur.com/QVUkQX8.jpeg",
                      alt: "George Muraguri",
                      className:
                        "relative z-10 w-full h-auto object-cover transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-1 group-hover:scale-[1.03]",
                    }),
                  ],
                }),
              }),
            }),
            c.jsx("div", {
              className: "lg:col-span-7 lg:pl-12",
              children: c.jsxs(Rt, {
                children: [
                  c.jsx("p", {
                    className:
                      "text-primary font-bold text-xs uppercase tracking-widest mb-4",
                    children: "The Designer",
                  }),
                  c.jsxs("h2", {
                    className:
                      "text-4xl md:text-5xl font-bold text-white mb-8 leading-tight",
                    children: [
                      "Crafting Visuals with ",
                      c.jsx("br", {}),
                      c.jsx("span", {
                        className: "text-gray-500",
                        children: "Precision & Purpose.",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "space-y-6 text-gray-300 font-light leading-relaxed text-lg",
                    children: [
                      c.jsx("p", {
                        children:
                          "I’m George Muraguri, a creative partner for brands that demand distinction. Based in Kenya and working globally, I bridge the gap between strategic thinking and artistic execution.",
                      }),
                      c.jsx("p", {
                        children:
                          "Specializing in minimalist branding and high-impact motion graphics, my approach is rooted in removing the unnecessary to let the essential speak.",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "mt-12 pt-12 border-t border-white/10",
                    children: [
                      c.jsx("h3", {
                        className:
                          "text-sm font-bold text-white uppercase tracking-widest mb-6",
                        children: "Technical Proficiency",
                      }),
                      c.jsx("div", {
                        className: "flex flex-wrap gap-8",
                        children: Qh.map((p) =>
                          c.jsxs(
                            "div",
                            {
                              className: "flex items-center gap-3 group",
                              children: [
                                c.jsx("div", {
                                  className:
                                    "text-gray-600 group-hover:text-primary transition-colors duration-300",
                                  children: p.icon,
                                }),
                                c.jsx("span", {
                                  className:
                                    "text-xs text-gray-500 group-hover:text-white transition-colors duration-300 font-medium uppercase tracking-wider",
                                  children: p.name,
                                }),
                              ],
                            },
                            p.name,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  Ph = () =>
    c.jsxs("section", {
      id: "contact",
      className: "py-24 relative overflow-hidden",
      children: [
        c.jsx("div", {
          className:
            "absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none",
        }),
        c.jsxs("div", {
          className: "container mx-auto px-6",
          children: [
            c.jsx(Rt, {
              children: c.jsxs("div", {
                className: "text-center mb-16",
                children: [
                  c.jsx("h2", {
                    className:
                      "text-4xl md:text-6xl font-black text-white mb-6",
                    children: "Start a Project",
                  }),
                  c.jsx("p", {
                    className:
                      "text-gray-400 text-lg max-w-2xl mx-auto font-light mb-4",
                    children:
                      "Ready to elevate your brand? Fill out the form below or contact me directly.",
                  }),
                  null,
                ],
              }),
            }),
            c.jsx(Rt, {
              children: c.jsxs("div", {
                className:
                  "max-w-3xl mx-auto bg-[#0a0a0a]/60 backdrop-blur-md border border-white/5 p-2 rounded-xl shadow-2xl relative",
                children: [
                  c.jsx("div", {
                    className:
                      "absolute -inset-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-xl opacity-50 blur-sm pointer-events-none",
                  }),
                  c.jsx("iframe", {
                    src: "https://docs.google.com/forms/d/e/1FAIpQLScArcsL8GD9r45_dLN8jrdYej_H-o_TdjkqBjF7VmLVS_yuUw/viewform?embedded=true",
                    width: "100%",
                    height: "1000",
                    frameBorder: "0",
                    marginHeight: 0,
                    marginWidth: 0,
                    className:
                      "block bg-transparent filter invert-[0.93] hue-rotate-180 contrast-90 rounded-lg",
                    title: "Contact Form",
                    children: "Loading…",
                  }),
                ],
              }),
            }),
            c.jsx(Rt, {
              children: c.jsx("div", {
                className: "mt-20 border-t border-white/5 pt-12",
                children: c.jsxs("div", {
                  className:
                    "flex flex-col md:flex-row items-center justify-center gap-12",
                  children: [
                    c.jsxs("a", {
                      href: "mailto:georgemuraguri19@gmail.com",
                      className:
                        "text-base text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group",
                      children: [
                        c.jsx("span", {
                          className:
                            "text-primary font-bold group-hover:shadow-neon transition-all",
                          children: "EMAIL",
                        }),
                        " georgemuraguri19@gmail.com",
                      ],
                    }),
                    c.jsxs("a", {
                      href: "https://www.upwork.com/freelancers/~018adabc1e2a7601e1?mp_source=share",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-base text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group",
                      children: [
                        c.jsx("span", {
                          className:
                            "text-primary font-bold group-hover:shadow-neon transition-all",
                          children: "UPWORK",
                        }),
                        " View Profile",
                      ],
                    }),
                    c.jsxs("a", {
                      href: "https://wa.me/254799553292",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-base text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group",
                      children: [
                        c.jsx("span", {
                          className:
                            "text-primary font-bold group-hover:shadow-neon transition-all",
                          children: "WHATSAPP",
                        }),
                        " +254 799 553 292",
                      ],
                    }),
                    c.jsxs("button", {
                      onClick: () => window.openCoffee && window.openCoffee(),
                      className:
                        "text-base text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group cursor-pointer",
                      children: [
                        c.jsx("span", {
                          className:
                            "text-orange-500 font-bold group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all",
                          children: "BUY ME COFFEE",
                        }),
                        " \u2615",
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  t1 = () =>
    c.jsx("footer", {
      className: "py-16 border-t border-white/5 relative",
      children: c.jsxs("div", {
        className:
          "container mx-auto px-6 flex flex-col items-center text-center",
        children: [
          c.jsx("div", {
            className: "mb-8",
            children: c.jsxs("a", {
              href: "#home",
              className: "group block",
              children: [
                c.jsxs("h2", {
                  className:
                    "text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight",
                  children: [
                    "BAZIQ",
                    c.jsx("span", {
                      className: "font-light text-primary",
                      children: "HUE",
                    }),
                  ],
                }),
                c.jsx("p", {
                  className:
                    "text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500 mt-2",
                  children: "Brand & Motion Studio",
                }),
              ],
            }),
          }),
          c.jsx("div", {
            className: "flex items-center space-x-8 mb-10",
            children: Xh.map((p) =>
              c.jsx(
                "a",
                {
                  href: p.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": p.name,
                  className:
                    "text-gray-500 hover:text-primary transition-colors duration-300 transform hover:scale-110",
                  children: p.icon,
                },
                p.name,
              ),
            ),
          }),
          c.jsx("p", {
            className: "text-gray-600 text-xs tracking-wide",
            children: "© 2025 BAZIQ HUE. All Rights Reserved.",
          }),
        ],
      }),
    });
function l1() {
  return c.jsxs("div", {
    className:
      "relative min-h-screen text-white font-inter selection:bg-primary selection:text-black overflow-x-hidden bg-black",
    children: [
      c.jsx("div", {
        className:
          "fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40",
      }),
      c.jsx("div", {
        className:
          "fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)] pointer-events-none z-0",
      }),
      c.jsxs("div", {
        className: "relative z-10",
        children: [
          c.jsx(mh, {}),
          c.jsxs("main", {
            children: [
              c.jsx(hh, {}),
              c.jsx(Vh, {}),
              c.jsx(Jh, {}),
              c.jsx($h, {}),
              c.jsx(Fh, {}),
              c.jsx(Ih, {}),
              c.jsx(Ph, {}),
            ],
          }),
          c.jsx(t1, {}),
        ],
      }),
    ],
  });
}
const Dd = document.getElementById("root");
if (!Dd) throw new Error("Could not find root element to mount to");
const e1 = dh.createRoot(Dd);
e1.render(c.jsx(nh.StrictMode, { children: c.jsx(l1, {}) }));

