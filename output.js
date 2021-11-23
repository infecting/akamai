var _cf = _cf || [];

var bmak = bmak && bmak.hasOwnProperty("ver") && bmak.hasOwnProperty("sed") ? bmak : {
  ver: 1.7,
  ke_cnt_lmt: 150,
  mme_cnt_lmt: 100,
  mduce_cnt_lmt: 75,
  pme_cnt_lmt: 25,
  pduce_cnt_lmt: 25,
  tme_cnt_lmt: 25,
  tduce_cnt_lmt: 25,
  doe_cnt_lmt: 10,
  dme_cnt_lmt: 10,
  vc_cnt_lmt: 100,
  doa_throttle: 0,
  dma_throttle: 0,
  session_id: "default_session",
  js_post: false,
  loc: "",
  cf_url: document.location.protocol === "https:" ? "https://" : "http://",
  params_url: (document.location.protocol === "https:" ? "https://" : "http://") + document.location.hostname + "/get_params",
  auth: "",
  api_public_key: "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq",
  aj_lmt_doact: 1,
  aj_lmt_dmact: 1,
  aj_lmt_tact: 1,
  ce_js_post: 0,
  init_time: 0,
  informinfo: "",
  prevfid: -1,
  fidcnt: 0,
  sensor_data: 0,
  ins: null,
  cns: null,
  enGetLoc: 0,
  enReadDocUrl: 1,
  disFpCalOnTimeout: 0,
  xagg: -1,
  pen: -1,
  brow: "",
  browver: "",
  psub: "-",
  lang: "-",
  prod: "-",
  plen: -1,
  doadma_en: 0,
  sdfn: [],
  d2: 0,
  d3: 0,
  thr: 0,
  cs: "0a46G5m17Vrp4o4c",
  hn: "unk",
  z1: 0,
  o9: 0,
  vc: "",
  y1: 2016,
  ta: 0,
  tst: -1,
  t_tst: 0,
  ckie: "_abck",
  n_ck: "0",
  ckurl: 0,
  bm: false,
  mr: "-1",
  altFonts: false,
  rst: false,
  runFonts: false,
  fsp: false,
  firstLoad: true,
  pstate: false,
  mn_mc_lmt: 10,
  mn_state: 0,
  mn_mc_indx: 0,
  mn_sen: 0,
  mn_tout: 100,
  mn_stout: 1e3,
  mn_ct: 1,
  mn_cc: "",
  mn_cd: 1e4,
  mn_lc: [],
  mn_ld: [],
  mn_lcl: 0,
  mn_al: [],
  mn_il: [],
  mn_tcl: [],
  mn_r: [],
  mn_rt: 0,
  mn_wt: 0,
  mn_abck: "",
  mn_psn: "",
  mn_ts: "",
  mn_lg: [],
  loap: 1,
  dcs: 0,
  ir: function() {
    bmak.start_ts = Date.now ? Date.now() : +new Date();
    bmak.kact = "";
    bmak.ke_cnt = 0;
    bmak.ke_vel = 0;
    bmak.mact = "";
    bmak.mme_cnt = 0;
    bmak.mduce_cnt = 0;
    bmak.me_vel = 0;
    bmak.pact = "";
    bmak.pme_cnt = 0;
    bmak.pduce_cnt = 0;
    bmak.pe_vel = 0;
    bmak.tact = "";
    bmak.tme_cnt = 0;
    bmak.tduce_cnt = 0;
    bmak.te_vel = 0;
    bmak.doact = "";
    bmak.doe_cnt = 0;
    bmak.doe_vel = 0;
    bmak.dmact = "";
    bmak.dme_cnt = 0;
    bmak.dme_vel = 0;
    bmak.vcact = "";
    bmak.vc_cnt = 0;
    bmak.aj_indx = 0;
    bmak.aj_ss = 0;
    bmak.aj_type = -1;
    bmak.aj_indx_doact = 0;
    bmak.aj_indx_dmact = 0;
    bmak.aj_indx_tact = 0;
    bmak.me_cnt = 0;
    bmak.pe_cnt = 0;
    bmak.te_cnt = 0;
    bmak.nav_perm = "";
    bmak.brv = 0;
    bmak.hbCalc = false;
    bmak.fmh = "";
    bmak.fmz = "";
    bmak.ssh = "";
    bmak.wv = "";
    bmak.wr = "";
    bmak.weh = "";
    bmak.wl = 0;
  },
  get_cf_date: function() {
    return Date.now ? Date.now() : +new Date();
  },
  sd_debug: function(t) {
    if (!bmak.js_post) {
      var a = t;

      if ("string" == typeof _sd_trace) {
        _sd_trace += a;
      } else {
        _sd_trace = a;
      }
    }
  },
  pi: function(t) {
    return parseInt(t);
  },
  uar: function() {
    return window.navigator.userAgent.replace(/\\|"/g, "");
  },
  gd: function() {
    var t = bmak.uar();
    var a = bmak.ab(t) + "";
    var e = bmak.start_ts / 2;
    var n = -1;
    var o = -1;
    var m = -1;
    var r = -1;
    var i = -1;
    var c = -1;
    var b = -1;

    try {
      n = window.screen ? window.screen.availWidth : -1;
    } catch (t) {
      n = -1;
    }

    try {
      o = window.screen ? window.screen.availHeight : -1;
    } catch (t) {
      o = -1;
    }

    try {
      m = window.screen ? window.screen.width : -1;
    } catch (t) {
      m = -1;
    }

    try {
      r = window.screen ? window.screen.height : -1;
    } catch (t) {
      r = -1;
    }

    try {
      i = window.innerHeight || (document.body && document.body in "clientHeight" ? document.body.clientHeight : document.documentElement && document.documentElement in "clientHeight" ? document.documentElement.clientHeight : -1);
    } catch (t) {
      i = -1;
    }

    try {
      c = window.innerWidth || (document.body && document.body in "clientWidth" ? document.body.clientWidth : document.documentElement && document.documentElement in "clientWidth" ? document.documentElement.clientWidth : -1);
    } catch (t) {
      c = -1;
    }

    try {
      b = window in "outerWidth" && window.outerWidth !== undefined ? window.outerWidth : -1;
    } catch (t) {
      b = -1;
    }

    bmak.z1 = bmak.pi(bmak.start_ts / (bmak.y1 * bmak.y1));
    var d = Math.random();
    var s = bmak.pi(d * 1e3 / 2);
    var k = d + "";
    return k = k.slice(0, 11) + s, bmak.gbrv(), bmak.get_browser(), bmak.bc(), bmak.bmisc(), t + ",uaend," + bmak.xagg + "," + bmak.psub + "," + bmak.lang + "," + bmak.prod + "," + bmak.plen + "," + bmak.pen + "," + bmak.wen + "," + bmak.den + "," + bmak.z1 + "," + bmak.d3 + "," + n + "," + o + "," + m + "," + r + "," + c + "," + i + "," + b + "," + bmak.bd() + "," + a + "," + k + "," + e + "," + bmak.brv + ",loc:" + bmak.loc;
  },
  get_browser: function() {
    if (navigator.productSub) {
      bmak.psub = navigator.productSub;
    }

    if (navigator.language) {
      bmak.lang = navigator.language;
    }

    if (navigator.product) {
      bmak.prod = navigator.product;
    }

    bmak.plen = navigator.plugins !== undefined ? navigator.plugins.length : -1;
  },
  gbrv: function() {
    if (navigator.brave) {
      navigator.brave.isBrave().then(function(t) {
        bmak.brv = t ? 1 : 0;
      })["catch"](function(t) {
        bmak.brv = 0;
      });
    }
  },
  bc: function() {
    var t = window.addEventListener ? 1 : 0;
    var a = window.XMLHttpRequest ? 1 : 0;
    var e = window.XDomainRequest ? 1 : 0;
    var n = window.emit ? 1 : 0;
    var o = window.DeviceOrientationEvent ? 1 : 0;
    var m = window.DeviceMotionEvent ? 1 : 0;
    var r = window.TouchEvent ? 1 : 0;
    var i = window.spawn ? 1 : 0;
    var c = window.chrome ? 1 : 0;
    var b = Function.prototype.bind ? 1 : 0;
    var d = window.Buffer ? 1 : 0;
    var s = window.PointerEvent ? 1 : 0;

    try {
      var k = window.innerWidth ? 1 : 0;
    } catch (t) {
      var k = 0;
    }

    try {
      var l = window.outerWidth ? 1 : 0;
    } catch (t) {
      var l = 0;
    }

    bmak.xagg = t + (a << 1) + (e << 2) + (n << 3) + (o << 4) + (m << 5) + (r << 6) + (i << 7) + (k << 8) + (l << 9) + (c << 10) + (b << 11) + (d << 12) + (s << 13);
  },
  bmisc: function() {
    bmak.pen = window._phantom ? 1 : 0;
    bmak.wen = window.webdriver ? 1 : 0;
    bmak.den = window.domAutomation ? 1 : 0;
  },
  bd: function() {
    var t = [];
    var a = window.callPhantom ? 1 : 0;
    t.push(a + ",cpen:");
    var e = 0;

    if (window.ActiveXObject && window in "ActiveXObject") {
      e = 1;
    }

    t.push(e + "i1:");
    var n = typeof document.documentMode == "number" ? 1 : 0;
    t.push(n + "dm:");
    var o = window.chrome && window.chrome.webstore ? 1 : 0;
    t.push(o + "cwen:");
    var m = navigator.onLine ? 1 : 0;
    t.push(m + "non:");
    var r = window.opera ? 1 : 0;
    t.push(r + "opc:");
    var i = typeof InstallTrigger != "undefined" ? 1 : 0;
    t.push(i + "fc:");
    var c = window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? 1 : 0;
    t.push(c + "sc:");
    var b = typeof window.RTCPeerConnection == "function" || typeof window.mozRTCPeerConnection == "function" || typeof window.webkitRTCPeerConnection == "function" ? 1 : 0;
    t.push(b + "wrc:");
    var d = window in "mozInnerScreenY" ? window.mozInnerScreenY : 0;
    t.push(d + "isc:");
    bmak.d2 = bmak.pi(bmak.z1 / 23);
    var s = typeof navigator.vibrate == "function" ? 1 : 0;
    t.push(s + "vib:");
    var k = typeof navigator.getBattery == "function" ? 1 : 0;
    t.push(k + "bat:");
    var l = Array.prototype.forEach ? 0 : 1;
    t.push(l + "x11:");
    var u = window in "FileReader" ? 1 : 0;
    return t.push(u + "x12:"), t.join(",");
  },
  fas: function() {
    try {
      return Boolean(navigator.credentials) + (Boolean(navigator.appMinorVersion) << 1) + (Boolean(navigator.bluetooth) << 2) + (Boolean(navigator.storage) << 3) + (Boolean(Math.imul) << 4) + (Boolean(navigator.getGamepads) << 5) + (Boolean(navigator.getStorageUpdates) << 6) + (Boolean(navigator.hardwareConcurrency) << 7) + (Boolean(navigator.mediaDevices) << 8) + (Boolean(navigator.mozAlarms) << 9) + (Boolean(navigator.mozConnection) << 10) + (Boolean(navigator.mozIsLocallyAvailable) << 11) + (Boolean(navigator.mozPhoneNumberService) << 12) + (Boolean(navigator.msManipulationViewsEnabled) << 13) + (Boolean(navigator.permissions) << 14) + (Boolean(navigator.registerProtocolHandler) << 15) + (Boolean(navigator.requestMediaKeySystemAccess) << 16) + (Boolean(navigator.requestWakeLock) << 17) + (Boolean(navigator.sendBeacon) << 18) + (Boolean(navigator.serviceWorker) << 19) + (Boolean(navigator.storeWebWideTrackingException) << 20) + (Boolean(navigator.webkitGetGamepads) << 21) + (Boolean(navigator.webkitTemporaryStorage) << 22) + (Boolean(Number.parseInt) << 23) + (Boolean(Math.hypot) << 24);
    } catch (t) {
      return 0;
    }
  },
  getmr: function() {
    try {
      if (typeof performance == "undefined" || performance.now === undefined || typeof JSON == "undefined") return void(bmak.mr = "undef");

      for (t = "", a = 1e3, e = [Math.abs, Math.acos, Math.asin, Math.atanh, Math.cbrt, Math.exp, Math.random, Math.round, Math.sqrt, isFinite, isNaN, parseFloat, parseInt, JSON.parse], n = 0, undefined; n < e.length; n++) {
        var t;
        var a;
        var e;
        var n;
        var o = [];
        var m = 0;
        var r = performance.now();
        var i = 0;
        var c = 0;

        if (e[n] !== undefined) {
          for (i = 0; i < a && m < .6; i++) {
            for (b = performance.now(), d = 0, undefined; d < 4e3; d++) {
              var b;
              var d;
              e[n](3.14);
            }

            var s = performance.now();
            o.push(Math.round((s - b) * 1e3));
            m = s - r;
          }

          var k = o.sort();
          c = k[Math.floor(k.length / 2)] / 5;
        }

        t = t + c + ",";
      }

      bmak.mr = t;
    } catch (t) {
      bmak.mr = "exception";
    }
  },
  sed: function() {
    var t;
    t = window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_ ? "1" : "0";
    var a;
    a = window.document.documentElement.getAttribute("webdriver") != null ? "1" : "0";
    var e;
    e = navigator.webdriver !== undefined && navigator.webdriver ? "1" : "0";
    var n;
    n = window.webdriver !== undefined ? "1" : "0";
    var o;
    o = window.XPathResult !== undefined || document.XPathResult !== undefined ? "1" : "0";
    var m;
    m = window.document.documentElement.getAttribute("driver") != null ? "1" : "0";
    var r;
    return r = window.document.documentElement.getAttribute("selenium") != null ? "1" : "0", [t, a, e, n, o, m, r].join(",");
  },
  b: function(t, a) {
    try {
      if (a == 1 && bmak.mme_cnt < bmak.mme_cnt_lmt || a != 1 && bmak.mduce_cnt < bmak.mduce_cnt_lmt) {
        var e = t || window.event;
        var n = -1;
        var o = -1;

        if (e && e.pageX && e.pageY) {
          n = Math.floor(e.pageX);
          o = Math.floor(e.pageY);
        } else {
          if (e && e.clientX && e.clientY) {
            n = Math.floor(e.clientX);
            o = Math.floor(e.clientY);
          }
        }

        var m = e.toElement;

        if (m == null) {
          m = e.target;
        }

        var r = bmak.gf(m);
        var i = bmak.get_cf_date() - bmak.start_ts;
        var c = bmak.me_cnt + "," + a + "," + i + "," + n + "," + o;

        if (a != 1) {
          c = c + "," + r;
          var b = e.which !== undefined ? e.which : e.button;

          if (b != null && b != 1) {
            c = c + "," + b;
          }
        }

        if (e.isTrusted !== undefined && e.isTrusted === false) {
          c += ",it0";
        }

        c += ";";
        bmak.me_vel = bmak.me_vel + bmak.me_cnt + a + i + n + o;
        bmak.mact = bmak.mact + c;
        bmak.ta += i;
      }

      if (1 == a) {
        bmak.mme_cnt++;
      } else {
        bmak.mduce_cnt++;
      }

      bmak.me_cnt++;

      if (bmak.js_post && a == 3) {
        bmak.aj_type = 1;
        bmak.bpd();
        bmak.pd(true);
        bmak.ce_js_post = 1;
      }
    } catch (t) {}
  },
  x2: function() {
    var t = bmak.ff;
    var a = t(98) + t(109) + t(97) + t(107);
    var e = t(103) + t(101) + t(116) + t(95) + t(99) + t(102) + t(95) + t(100) + t(97) + t(116) + t(101);
    var n = window[a][e];
    var o = 0;
    return typeof n == "function" && (o = n()), o;
  },
  np: function() {
    var t = [];
    var a = ["geolocation", "notifications", "push", "midi", "camera", "microphone", "speaker", "device-info", "background-sync", "bluetooth", "persistent-storage", "ambient-light-sensor", "accelerometer", "gyroscope", "magnetometer", "clipboard", "accessibility-events", "clipboard-read", "clipboard-write", "payment-handler"];

    try {
      if (!navigator.permissions) return void(bmak.nav_perm = 6);
      bmak.nav_perm = 8;

      var e = function(a, e) {
        return navigator.permissions.query({
          name: a
        }).then(function(a) {
          switch (a.state) {
            case "prompt":
              t[e] = 1;
              break;

            case "granted":
              t[e] = 2;
              break;

            case "denied":
              t[e] = 0;
              break;

            default:
              t[e] = 5;
          }
        })["catch"](function(a) {
          t[e] = -1 !== a.message.indexOf("is not a valid enum value of type PermissionName") ? 4 : 3;
        });
      };

      var n = a.map(function(t, a) {
        return e(t, a);
      });
      Promise.all(n).then(function() {
        bmak.nav_perm = t.join("");
      });
    } catch (t) {
      bmak.nav_perm = 7;
    }
  },
  cpa: function(t, a) {
    try {
      var e = false;

      if (a == 1 && bmak.pme_cnt < bmak.pme_cnt_lmt || a != 1 && bmak.pduce_cnt < bmak.pduce_cnt_lmt) {
        var n = t || window.event;

        if (n && n.pointerType != "mouse") {
          e = true;
          var o = -1;
          var m = -1;

          if (n && n.pageX && n.pageY) {
            o = Math.floor(n.pageX);
            m = Math.floor(n.pageY);
          } else {
            if (n && n.clientX && n.clientY) {
              o = Math.floor(n.clientX);
              m = Math.floor(n.clientY);
            }
          }

          var r = bmak.get_cf_date() - bmak.start_ts;
          var i = bmak.pe_cnt + "," + a + "," + r + "," + o + "," + m;

          if (n.isTrusted !== undefined && n.isTrusted === false) {
            i += ",0";
          }

          bmak.pe_vel = bmak.pe_vel + bmak.pe_cnt + a + r + o + m;
          bmak.pact = bmak.pact + i + ";";
          bmak.ta += r;

          if (1 == a) {
            bmak.pme_cnt++;
          } else {
            bmak.pduce_cnt++;
          }
        }
      }

      if (1 == a) {
        bmak.pme_cnt++;
      } else {
        bmak.pduce_cnt++;
      }

      bmak.pe_cnt++;

      if (bmak.js_post && a == 3 && e) {
        bmak.aj_type = 2;
        bmak.bpd();
        bmak.pd(true);
        bmak.ce_js_post = 1;
      }
    } catch (t) {}
  },
  ab: function(t) {
    if (t == null) return -1;

    try {
      for (a = 0, e = 0, undefined; e < t.length; e++) {
        var a;
        var e;
        var n = t.charCodeAt(e);

        if (n < 128) {
          a += n;
        }
      }

      return a;
    } catch (t) {
      return -2;
    }
  },
  ff: function(t) {
    return String.fromCharCode(t);
  },
  cal_dis: function(t) {
    var a = t[0] - t[1];
    var e = t[2] - t[3];
    var n = t[4] - t[5];
    var o = Math.sqrt(a * a + e * e + n * n);
    return Math.floor(o);
  },
  to: function() {
    var t = bmak.x2() % 1e7;
    bmak.d3 = t;

    for (a = t, e = bmak.pi(bmak.ff(51)), n = 0, undefined; n < 5; n++) {
      var a;
      var e;
      var n;
      var o = bmak.pi(t / Math.pow(10, n)) % 10;
      var m = o + 1;
      op = bmak.cc(o);
      a = op(a, m);
    }

    bmak.o9 = a * e;
  },
  jrs: function(t) {
    for (a = Math.floor(Math.random() * 1e5 + 1e4), e = String(t * a), n = 0, o = [], m = e.length >= 18, undefined; o.length < 6;) {
      var a;
      var e;
      var n;
      var o;
      var m;
      o.push(parseInt(e.slice(n, n + 2)));
      n = m ? n + 3 : n + 2;
    }

    return [a, bmak.cal_dis(o)];
  },
  fm: function() {
    var t = ["Monospace", "Wingdings 2", "ITC Bodoni 72 Bold", "Menlo", "Gill Sans MT", "Lucida Sans", "Bodoni 72", "Serif", "Shree Devanagari 714", "Microsoft Tai Le", "Nimbus Roman No 9 L", "Candara", "Press Start 2P", "Waseem"];
    var a = document.createElement("span");
    a.innerHTML = "mmmmmmmmlli";
    a.style.fontSize = "192px";
    var e = "";
    var n = document.getElementsByTagName("body")[0];

    if (n) {
      for (var o in t) {
        a.style.fontFamily = t[o];
        n.appendChild(a);
        e += t[o] + ":" + a.offsetWidth + "," + a.offsetHeight + ";";
        n.removeChild(a);
      }

      bmak.fmh = bmak.ats(bmak.mn_s(e));
    } else bmak.fmh = "";

    bmak.fmz = window in "devicePixelRatio" && window.devicePixelRatio !== undefined ? window.devicePixelRatio : -1;
  },
  wgl: function() {
    try {
      var t = document.createElement("canvas");
      var a = t.getContext("webgl");
      bmak.wv = "n";
      bmak.wr = "n";
      bmak.weh = "n";
      bmak.wl = 0;

      if (a) {
        bmak.wv = "b";
        bmak.wr = "b";
        bmak.weh = "b";

        if (a.getSupportedExtensions()) {
          bmak.weh = bmak.ats(bmak.mn_s(JSON.stringify(['ANGLE_instanced_arrays', 'EXT_blend_minmax', 'EXT_color_buffer_half_float', 'EXT_disjoint_timer_query', 'EXT_float_blend', 'EXT_frag_depth', 'EXT_shader_texture_lod', 'EXT_texture_compression_rgtc', 'EXT_texture_filter_anisotropic', 'WEBKIT_EXT_texture_filter_anisotropic', 'EXT_sRGB', 'OES_element_index_uint', 'OES_fbo_render_mipmap', 'OES_standard_derivatives', 'OES_texture_float', 'OES_texture_float_linear', 'OES_texture_half_float', 'OES_texture_half_float_linear', 'OES_vertex_array_object', 'WEBGL_color_buffer_float', 'WEBGL_compressed_texture_s3tc', 'WEBKIT_WEBGL_compressed_texture_s3tc', 'WEBGL_compressed_texture_s3tc_srgb', 'WEBGL_debug_renderer_info', 'WEBGL_debug_shaders', 'WEBGL_depth_texture', 'WEBKIT_WEBGL_depth_texture', 'WEBGL_draw_buffers', 'WEBGL_lose_context', 'WEBKIT_WEBGL_lose_context', 'WEBGL_multi_draw'].sort())));
          bmak.wl = a.getSupportedExtensions().length;

          if (a.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0) {
            bmak.wv = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL);
            bmak.wr = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL);
          }
        }
      }
    } catch (t) {
      bmak.wv = "e";
      bmak.wr = "e";
      bmak.weh = "e";
      bmak.wl = 0;
    }
  },
  csh: function() {
    if (window.speechSynthesis) {
      var t = window.speechSynthesis.getVoices();

      if (t.length > 0) {
        for (a = "", e = 0, undefined; e < t.length; e++) {
          var a;
          var e;
          a += t[e].voiceURI + "_" + t[e].lang;
        }

        bmak.ssh = bmak.ats(bmak.mn_s(a));
      } else bmak.ssh = "0";
    } else bmak.ssh = "n";
  },
  hbs: function() {
    try {
      return Boolean(window.__nightmare) + (Boolean(window.cdc_adoQpoasnfa76pfcZLmcfl_Array) << 1) + (Boolean(window.cdc_adoQpoasnfa76pfcZLmcfl_Promise) << 2) + (Boolean(window.cdc_adoQpoasnfa76pfcZLmcfl_Symbol) << 3) + (Boolean(window.OSMJIF) << 4) + (Boolean(window._Selenium_IDE_Recorder) << 5) + (Boolean(window.__$webdriverAsyncExecutor) << 6) + (Boolean(window.__driver_evaluate) << 7) + (Boolean(window.__driver_unwrapped) << 8) + (Boolean(window.__fxdriver_evaluate) << 9) + (Boolean(window.__fxdriver_unwrapped) << 10) + (Boolean(window.__lastWatirAlert) << 11) + (Boolean(window.__lastWatirConfirm) << 12) + (Boolean(window.__lastWatirPrompt) << 13) + (Boolean(window.__phantomas) << 14) + (Boolean(window.__selenium_evaluate) << 15) + (Boolean(window.__selenium_unwrapped) << 16) + (Boolean(window.__webdriverFuncgeb) << 17) + (Boolean(window.__webdriver__chr) << 18) + (Boolean(window.__webdriver_evaluate) << 19) + (Boolean(window.__webdriver_script_fn) << 20) + (Boolean(window.__webdriver_script_func) << 21) + (Boolean(window.__webdriver_script_function) << 22) + (Boolean(window.__webdriver_unwrapped) << 23) + (Boolean(window.awesomium) << 24) + (Boolean(window.callSelenium) << 25) + (Boolean(window.calledPhantom) << 26) + (Boolean(window.calledSelenium) << 27) + (Boolean(window.domAutomationController) << 28) + (Boolean(window.watinExpressionError) << 29) + (Boolean(window.watinExpressionResult) << 30) + (Boolean(window.spynner_additional_js_loaded) << 31) + (Boolean(document.$chrome_asyncScriptInfo) << 32) + (Boolean(window.fmget_targets) << 33) + (Boolean(window.geb) << 34);
    } catch (t) {
      return 0;
    }
  },
  gwd: function() {
    try {
      return navigator.webdriver ? navigator.webdriver : -1;
    } catch (t) {
      return 0;
    }
  },
  gf: function(t) {
    var a;
    if (a = t == null ? document.activeElement : t, document.activeElement == null) return -1;
    var e = a.getAttribute("name");

    if (e == null) {
      var n = a.getAttribute("id");
      return n == null ? -1 : bmak.ab(n);
    }

    return bmak.ab(e);
  },
  cc: function(t) {
    var a = t % 4;

    if (a == 2) {
      a = 3;
    }

    var e = a + 42;

    var n = function(t, a) {
      return 0;
    };

    if (e == 42) var n = function(t, a) {
      return t * a;
    };
    else if (e == 43) var n = function(t, a) {
      return t + a;
    };
    else var n = function(t, a) {
      return t - a;
    };
    return n;
  },
  isIgn: function(t) {
    var a = document.activeElement;
    if (document.activeElement == null) return 0;
    var e = a.getAttribute("type");
    return (e == null ? -1 : bmak.get_type(e)) == 1 && bmak.fidcnt > 12 && -2 == t ? 1 : 0;
  },
  cka: function(t, a) {
    try {
      var e = t || window.event;
      var n = -1;
      var o = 1;

      if (bmak.ke_cnt < bmak.ke_cnt_lmt && e) {
        n = e.keyCode;
        var m = e.charCode;
        var r = e.shiftKey ? 1 : 0;
        var i = e.ctrlKey ? 1 : 0;
        var c = e.metaKey ? 1 : 0;
        var b = e.altKey ? 1 : 0;
        var d = r * 8 + i * 4 + c * 2 + b;
        var s = bmak.get_cf_date() - bmak.start_ts;
        var k = bmak.gf(null);
        var l = 0;

        if (m && n) {
          n = m != 0 && n != 0 && m != n ? -1 : n != 0 ? n : m;
        }

        if (i == 0 && c == 0 && b == 0 && n >= 32) {
          n = a == 3 && n >= 32 && n <= 126 ? -2 : n >= 33 && n <= 47 ? -3 : n >= 112 && n <= 123 ? -4 : -2;
        }

        if (k != bmak.prevfid) {
          bmak.fidcnt = 0;
          bmak.prevfid = k;
        } else {
          bmak.fidcnt = bmak.fidcnt + 1;
        }

        if (bmak.isIgn(n) == 0) {
          var u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;

          if (e.isTrusted !== undefined && e.isTrusted === false) {
            u += ",0";
          }

          u += ";";
          bmak.kact = bmak.kact + u;
          bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k;
          bmak.ta += s;
        } else o = 0;
      }

      o && e && bmak.ke_cnt++;

      if (!bmak.js_post || a != 1 || n != 13 && n != 9) {
        bmak.aj_type = 3;
        bmak.bpd();
        bmak.pd(true);
        bmak.ce_js_post = 1;
      }
    } catch (t) {}
  },
  cta: function(t, a) {
    try {
      if (a == 1 && bmak.tme_cnt < bmak.tme_cnt_lmt || a != 1 && bmak.tduce_cnt < bmak.tduce_cnt_lmt) {
        var e = t || window.event;
        var n = -1;
        var o = -1;

        if (e && e.pageX && e.pageY) {
          n = Math.floor(e.pageX);
          o = Math.floor(e.pageY);
        } else {
          if (e && e.clientX && e.clientY) {
            n = Math.floor(e.clientX);
            o = Math.floor(e.clientY);
          }
        }

        var m = bmak.get_cf_date() - bmak.start_ts;
        var r = bmak.te_cnt + "," + a + "," + m + "," + n + "," + o;

        if (e.isTrusted !== undefined && e.isTrusted === false) {
          r += ",0";
        }

        bmak.tact = bmak.tact + r + ";";
        bmak.ta += m;
        bmak.te_vel = bmak.te_vel + bmak.te_cnt + a + m + n + o;
        bmak.doa_throttle = 0;
        bmak.dma_throttle = 0;
      }

      if (1 == a) {
        bmak.tme_cnt++;
      } else {
        bmak.tduce_cnt++;
      }

      bmak.te_cnt++;

      if (bmak.js_post && a == 2 && bmak.aj_indx_tact < bmak.aj_lmt_tact) {
        bmak.aj_type = 5;
        bmak.bpd();
        bmak.pd(true);
        bmak.ce_js_post = 1;
        bmak.aj_indx_tact++;
      }
    } catch (t) {}
  },
  getFloatVal: function(t) {
    try {
      if (-1 != bmak.chknull(t) && !isNaN(t)) {
        var a = parseFloat(t);
        if (!isNaN(a)) return a.toFixed(2);
      }
    } catch (t) {}

    return -1;
  },
  cdoa: function(t) {
    try {
      if (bmak.doe_cnt < bmak.doe_cnt_lmt && bmak.doa_throttle < 2 && t) {
        var a = bmak.get_cf_date() - bmak.start_ts;
        var e = bmak.getFloatVal(t.alpha);
        var n = bmak.getFloatVal(t.beta);
        var o = bmak.getFloatVal(t.gamma);
        var m = bmak.doe_cnt + "," + a + "," + e + "," + n + "," + o;

        if (t.isTrusted !== undefined && t.isTrusted === false) {
          m += ",0";
        }

        bmak.doact = bmak.doact + m + ";";
        bmak.ta += a;
        bmak.doe_vel = bmak.doe_vel + bmak.doe_cnt + a;
        bmak.doe_cnt++;
      }

      if (bmak.js_post && bmak.doe_cnt > 1 && bmak.aj_indx_doact < bmak.aj_lmt_doact) {
        bmak.aj_type = 6;
        bmak.bpd();
        bmak.pd(true);
        bmak.ce_js_post = 1;
        bmak.aj_indx_doact++;
      }

      bmak.doa_throttle++;
    } catch (t) {}
  },
  cdma: function(t) {
    try {
      if (bmak.dme_cnt < bmak.dme_cnt_lmt && bmak.dma_throttle < 2 && t) {
        var a = bmak.get_cf_date() - bmak.start_ts;
        var e = -1;
        var n = -1;
        var o = -1;

        if (t.acceleration) {
          e = bmak.getFloatVal(t.acceleration.x);
          n = bmak.getFloatVal(t.acceleration.y);
          o = bmak.getFloatVal(t.acceleration.z);
        }

        var m = -1;
        var r = -1;
        var i = -1;

        if (t.accelerationIncludingGravity) {
          m = bmak.getFloatVal(t.accelerationIncludingGravity.x);
          r = bmak.getFloatVal(t.accelerationIncludingGravity.y);
          i = bmak.getFloatVal(t.accelerationIncludingGravity.z);
        }

        var c = -1;
        var b = -1;
        var d = 1;

        if (t.rotationRate) {
          c = bmak.getFloatVal(t.rotationRate.alpha);
          b = bmak.getFloatVal(t.rotationRate.beta);
          d = bmak.getFloatVal(t.rotationRate.gamma);
        }

        var s = bmak.dme_cnt + "," + a + "," + e + "," + n + "," + o + "," + m + "," + r + "," + i + "," + c + "," + b + "," + d;

        if (t.isTrusted !== undefined && t.isTrusted === false) {
          s += ",0";
        }

        bmak.dmact = bmak.dmact + s + ";";
        bmak.ta += a;
        bmak.dme_vel = bmak.dme_vel + bmak.dme_cnt + a;
        bmak.dme_cnt++;
      }

      if (bmak.js_post && bmak.dme_cnt > 1 && bmak.aj_indx_dmact < bmak.aj_lmt_dmact) {
        bmak.aj_type = 7;
        bmak.bpd();
        bmak.pd(true);
        bmak.ce_js_post = 1;
        bmak.aj_indx_dmact++;
      }

      bmak.dma_throttle++;
    } catch (t) {}
  },
  get_type: function(t) {
    return t = t.toLowerCase(), t == "text" || t == "search" || t == "url" || t == "email" || t == "tel" || t == "number" ? 0 : t == "password" ? 1 : 2;
  },
  chknull: function(t) {
    return t == null ? -1 : t;
  },
  getforminfo: function() {
    for (t = "", a = "", e = document.getElementsByTagName("input"), n = -1, o = 0, undefined; o < e.length; o++) {
      var t;
      var a;
      var e;
      var n;
      var o;
      var m = e[o];
      var r = bmak.ab(m.getAttribute("name"));
      var i = bmak.ab(m.getAttribute("id"));
      var c = m.getAttribute("required");
      var b = c == null ? 0 : 1;
      var d = m.getAttribute("type");
      var s = d == null ? -1 : bmak.get_type(d);
      var k = m.getAttribute("autocomplete");

      if (null == k) {
        n = -1;
      } else {
        k = k.toLowerCase();
        n = k == "off" ? 0 : k == "on" ? 1 : 2;
      }

      var l = m.defaultValue;
      var u = m.value;
      var _ = 0;
      var f = 0;

      if (l && l.length != 0) {
        f = 1;
      }

      if (!u || u.length == 0 || f && u == l) {
        _ = 1;
      }

      if (s != 2) {
        t = t + s + "," + n + "," + _ + "," + b + "," + i + "," + r + "," + f + ";";
      }

      a = a + _ + ";";
    }

    return bmak.ins == null && (bmak.ins = a), bmak.cns = a, t;
  },
  startdoadma: function() {
    if (bmak.doadma_en == 0 && window.addEventListener) {
      window.addEventListener("deviceorientation", bmak.cdoa, true);
      window.addEventListener("devicemotion", bmak.cdma, true);
      bmak.doadma_en = 1;
    }

    bmak.doa_throttle = 0;
    bmak.dma_throttle = 0;
  },
  updatet: function() {
    return bmak.get_cf_date() - bmak.start_ts;
  },
  htm: function(t) {
    bmak.cta(t, 1);
  },
  hts: function(t) {
    bmak.cta(t, 2);
  },
  hte: function(t) {
    bmak.cta(t, 3);
  },
  htc: function(t) {
    bmak.cta(t, 4);
  },
  hmm: function(t) {
    bmak.cma(t, 1);
  },
  hc: function(t) {
    bmak.cma(t, 2);
  },
  hmd: function(t) {
    bmak.cma(t, 3);
  },
  hmu: function(t) {
    bmak.cma(t, 4);
  },
  hpd: function(t) {
    bmak.cpa(t, 3);
  },
  hpu: function(t) {
    bmak.cpa(t, 4);
  },
  hkd: function(t) {
    bmak.cka(t, 1);
  },
  hku: function(t) {
    bmak.cka(t, 2);
  },
  hkp: function(t) {
    bmak.cka(t, 3);
  },
  form_submit: function() {
    try {
      if (bmak.bpd(), bmak.sdfn.length == 0) {
        if (document.getElementById("bm-telemetry") && (document.getElementById("bm-telemetry").value = bmak.sensor_data), document.getElementsByName("bm-telemetry") !== undefined)
          for (t = document.getElementsByName("bm-telemetry"), a = 0, undefined; a < t.length; a++) {
            var t;
            var a;
            t[a].value = bmak.sensor_data;
          }
      } else
        for (var a = 0; a < bmak.sdfn.length; a++)
          if (document.getElementById(bmak.sdfn[a])) {
            document.getElementById(bmak.sdfn[a]).value = bmak.sensor_data;
          }
    } catch (t) {
      bmak.sd_debug(t + ",s7:" + "," + bmak.sensor_data);
    }
  },
  get_telemetry: function() {
    return bmak.bpd(), bmak.ir(), bmak.sensor_data;
  },
  getdurl: function() {
    return bmak.enReadDocUrl ? document.URL.replace(/\\|"/g, "") : "";
  },
  x1: function() {
    return Math.floor((Math.random() + 1) * 16777216).toString(36);
  },
  gck: function() {
    var t = bmak.x1() + bmak.x1() + bmak.x1() + bmak.x1();
    return bmak.set_cookie(bmak.ckie, t + "_" + bmak.ab(t)), t;
  },
  set_cookie: function(t, a) {
    if (document.cookie !== undefined) {
      document.cookie = t + "=" + a + "; path=/; expires=Fri, 01 Feb 2025 08:00:00 GMT;";
    }
  },
  get_cookie: function() {
    var t = "0";

    try {
      var t = bmak.cookie_chk_read(bmak.ckie);

      if (t) {
        bmak.n_ck = 1;
        t = bmak.bm ? "2" : "1";
      }
    } catch (t) {}

    return t;
  },
  cookie_chk_read: function(t) {
    if (document.cookie)
      for (a = t + "=", e = document.cookie.split("; "), n = 0, undefined; n < e.length; n++) {
        var a;
        var e;
        var n;
        var o = e[n];

        if (o.indexOf(a) === 0) {
          var m = o.substring(a.length, o.length);
          if (-1 != m.indexOf("~") || -1 != decodeURIComponent(m).indexOf("~")) return m;
        }
      }
    return false;
  },
  bpd: function() {
    bmak.sd_debug("<bpd>");
    var t = 0;

    try {
      t = bmak.get_cf_date();
      var a = bmak.updatet();
      var e = "3";

      if (bmak.ckie) {
        e = bmak.get_cookie();
      }

      var n = bmak.gd();
      var o = window.DeviceOrientationEvent ? "do_en" : "do_dis";
      var m = window.DeviceMotionEvent ? "dm_en" : "dm_dis";
      var r = window.TouchEvent ? "t_en" : "t_dis";
      var i = o + "," + m + "," + r;
      var c = bmak.getforminfo();
      var b = bmak.getdurl();
      var d = bmak.aj_type + "," + bmak.aj_indx;

      if (!bmak.fpcf.fpValCalculated && (bmak.js_post == 0 || bmak.aj_indx > 0)) {
        bmak.fpcf.fpVal();
      }

      var s = bmak.ke_vel + bmak.me_vel + bmak.doe_vel + bmak.dme_vel + bmak.te_vel + bmak.pe_vel;
      var k = bmak.ff;
      var l = k(80) + k(105) + k(90) + k(116) + k(69);
      var u = bmak.jrs(bmak.start_ts);

      var _ = bmak.get_cf_date() - bmak.start_ts;

      var f = bmak.pi(bmak.d2 / 6);
      var p = bmak.fas();
      var v = bmak.hbs();
      var h = bmak.gwd();
      var g = [bmak.ke_vel + 1, bmak.me_vel + 32, bmak.te_vel + 32, bmak.doe_vel, bmak.dme_vel, bmak.pe_vel, s, a, bmak.init_time, bmak.start_ts, bmak.fpcf.td, bmak.d2, bmak.ke_cnt, bmak.me_cnt, f, bmak.pe_cnt, bmak.te_cnt, _, bmak.ta, bmak.n_ck, e, bmak.ab(e), bmak.fpcf.rVal, bmak.fpcf.rCFP, p, l, u[0], u[1], v, h];
      var w = g.join(",");
      var y = bmak.ab(bmak.fpcf.fpValstr) + "";

      if (bmak.firstLoad) {
        bmak.np();
      } else {
        bmak.csh();
      }

      if (!bmak.hbCalc && (bmak.js_post == 0 || bmak.aj_indx > 0)) {
        bmak.fm();
        bmak.wgl();
        bmak.hbCalc = true;
      }

      var E = "";

      if (bmak.hbCalc) {
        E = bmak.fmh + "," + bmak.fmz + "," + bmak.ssh + "," + bmak.wv + "," + bmak.wr + "," + bmak.weh + "," + bmak.wl;
      }

      var S = bmak.sed();
      var C = bmak.mn_get_current_challenges();
      var B = "";
      var x = "";
      var M = "";

      if (C[1] !== undefined) {
        var j = C[1];

        if (bmak.mn_r[j] !== undefined) {
          B = bmak.mn_r[j];
        }
      }

      if (C[2] !== undefined) {
        var A = C[2];

        if (bmak.mn_r[A] !== undefined) {
          x = bmak.mn_r[A];
        }
      }

      if (C[3] !== undefined) {
        var L = C[3];

        if (bmak.mn_r[L] !== undefined) {
          M = bmak.mn_r[L];
        }
      }

      bmak.sensor_data = bmak.ver + "-1,2,-94,-100," + n + "-1,2,-94,-101," + i + "-1,2,-94,-105," + bmak.informinfo + "-1,2,-94,-102," + c + "-1,2,-94,-108," + bmak.kact + "-1,2,-94,-110," + bmak.mact + "-1,2,-94,-117," + bmak.tact + "-1,2,-94,-111," + bmak.doact + "-1,2,-94,-109," + bmak.dmact + "-1,2,-94,-114," + bmak.pact + "-1,2,-94,-103," + bmak.vcact + "-1,2,-94,-112," + b + "-1,2,-94,-115," + w + "-1,2,-94,-106," + d;
      bmak.sensor_data = bmak.sensor_data + "-1,2,-94,-119," + bmak.mr + "-1,2,-94,-122," + S + "-1,2,-94,-123," + B + "-1,2,-94,-124," + x + "-1,2,-94,-126," + M + "-1,2,-94,-127," + bmak.nav_perm;
      var P = bmak.ab(bmak.sensor_data) ^ 24;
      bmak.sensor_data = bmak.sensor_data + "-1,2,-94,-70," + bmak.fpcf.fpValstr + "-1,2,-94,-80," + y + "-1,2,-94,-116," + bmak.o9 + "-1,2,-94,-118," + P + "-1,2,-94,-129," + E + "-1,2,-94,-121,";
      bmak.sd_debug(bmak.sensor_data.slice(0, 10) + ",s1:");
    } catch (t) {
      var T = "";

      try {
        if (t.stack && typeof t.stack == "string") {
          T = t.stack.replace(/\"/g, "\\'");
        } else {
          if (typeof t == "string") {
            T = t.replace(/\"/g, "\\'");
          }
        }

        T = T.slice(0, 1e3);
        bmak.sd_debug(T + ",s2:");
        bmak.sensor_data = bmak.ver + "-1,2,-94,-100," + bmak.uar() + "-1,2,-94,-120," + T;
      } catch (t) {
        if (t.stack && typeof t.stack == "string") {
          T = t.stack.replace(/\"/g, "\\'");
        } else {
          if (typeof t == "string") {
            T = t.replace(/\"/g, "\\'");
          }
        }

        T = T.slice(0, 1e3);
        bmak.sd_debug(T + ",s3:");
        bmak.sensor_data = bmak.ver + bmak.sensor_data + ",s3:" + T;
      }
    }

    try {
      var F = bmak.od(bmak.cs, bmak.api_public_key).slice(0, 16);
      var D = Math.floor(bmak.get_cf_date() / 36e5);
      var R = bmak.get_cf_date();
      var N = F + bmak.od(D, F) + bmak.sensor_data;
      bmak.sensor_data = N + ";" + (bmak.get_cf_date() - t) + ";" + bmak.tst + ";" + (bmak.get_cf_date() - R);
    } catch (t) {}

    bmak.sd_debug("</bpd>");
  },
  od: function(t, a) {
    try {
      t = String(t);
      a = String(a);
      var e = [];
      var n = a.length;

      if (n > 0) {
        for (var o = 0; o < t.length; o++) {
          var m = t.charCodeAt(o);
          var r = t.charAt(o);
          var i = a.charCodeAt(o % n);
          m = bmak.rir(m, 47, 57, i);

          if (m != t.charCodeAt(o)) {
            r = String.fromCharCode(m);
          }

          e.push(r);
        }

        if (e.length > 0) return e.join("");
      }
    } catch (t) {}

    return t;
  },
  rir: function(t, a, e, n) {
    return t > a && t <= e && (t += n % (e - a)) > e && (t = t - e + a), t;
  },
  lvc: function(t) {
    try {
      if (bmak.vc_cnt < bmak.vc_cnt_lmt) {
        var a = bmak.get_cf_date() - bmak.start_ts;
        var e = t + "," + a + ";";
        bmak.vcact = bmak.vcact + e;
      }

      bmak.vc_cnt++;
    } catch (t) {}
  },
  hvc: function() {
    try {
      var t = 1;

      if (document[bmak.hn]) {
        t = 0;
      }

      bmak.lvc(t);
    } catch (t) {}
  },
  hb: function(t) {
    bmak.lvc(2);
  },
  hf: function(t) {
    bmak.lvc(3);
  },
  rve: function() {
    if (undefined !== document.hidden) {
      bmak.hn = "hidden";
      bmak.vc = "visibilitychange";
    } else {
      document.mozHidden !== undefined ? (bmak.hn = "mozHidden", bmak.vc = "mozvisibilitychange") : document.msHidden !== undefined ? (bmak.hn = "msHidden", bmak.vc = "msvisibilitychange") : document.webkitHidden !== undefined && (bmak.hn = "webkitHidden", bmak.vc = "webkitvisibilitychange");
    }

    if (document.addEventListener) {
      if (bmak.hn != "unk") {
        document.addEventListener(bmak.vc, bmak.hvc, true);
      }
    } else {
      if (document.attachEvent && bmak.hn != "unk") {
        document.attachEvent(bmak.vc, bmak.hvc);
      }
    }

    window.onblur = bmak.hb;
    window.onfocus = bmak.hf;
  },
  startTracking: function() {
    bmak.startdoadma();

    try {
      bmak.to();
    } catch (t) {
      bmak.o9 = -654321;
    }

    setInterval(function() {
      bmak.startdoadma();
    }, 3e3);

    if (document.addEventListener) {
      document.addEventListener("touchmove", bmak.htm, true);
      document.addEventListener("touchstart", bmak.hts, true);
      document.addEventListener("touchend", bmak.hte, true);
      document.addEventListener("touchcancel", bmak.htc, true);
      document.addEventListener("mousemove", bmak.hmm, true);
      document.addEventListener("click", bmak.hc, true);
      document.addEventListener("mousedown", bmak.hmd, true);
      document.addEventListener("mouseup", bmak.hmu, true);
      document.addEventListener("pointerdown", bmak.hpd, true);
      document.addEventListener("pointerup", bmak.hpu, true);
      document.addEventListener("keydown", bmak.hkd, true);
      document.addEventListener("keyup", bmak.hku, true);
      document.addEventListener("keypress", bmak.hkp, true);
    } else {
      if (document.attachEvent) {
        document.attachEvent("touchmove", bmak.htm);
        document.attachEvent("touchstart", bmak.hts);
        document.attachEvent("touchend", bmak.hte);
        document.attachEvent("touchcancel", bmak.htc);
        document.attachEvent("onmousemove", bmak.hmm);
        document.attachEvent("onclick", bmak.hc);
        document.attachEvent("onmousedown", bmak.hmd);
        document.attachEvent("onmouseup", bmak.hmu);
        document.attachEvent("onpointerdown", bmak.hpd);
        document.attachEvent("onpointerup", bmak.hpu);
        document.attachEvent("onkeydown", bmak.hkd);
        document.attachEvent("onkeyup", bmak.hku);
        document.attachEvent("onkeypress", bmak.hkp);
      }
    }

    bmak.rve();
    bmak.informinfo = bmak.getforminfo();

    if (bmak.js_post) {
      bmak.aj_type = 0;
      bmak.bpd();
      bmak.pd(true);
    }

    bmak.firstLoad = false;
  },
  gb: function(t, a) {
    var e = t.charCodeAt(a);
    return e = e > 255 ? 0 : e;
  },
  encode: function(t) {
    if (typeof btoa != "undefined") return btoa(t);

    for (c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = "", d = Math.floor(t.length / 3) * 3, s = 0, undefined; s < d; s += 3) {
      var a;
      var e;
      var n;
      var o;
      var m;
      var r;
      var i;
      var c;
      var b;
      var d;
      var s;
      a = bmak.gb(t, s);
      e = bmak.gb(t, s + 1);
      n = bmak.gb(t, s + 2);
      o = a >> 2;
      m = ((a & 3) << 4) + (e >> 4);
      r = ((e & 15) << 2) + (n >> 6);
      i = n & 63;
      b = b + c.charAt(o) + c.charAt(m) + c.charAt(r) + c.charAt(i);
    }

    return t.length % 3 == 1 && (a = bmak.gb(t, s), o = a >> 2, m = (a & 3) << 4, b = b + c.charAt(o) + c.charAt(m) + "=="), t.length % 3 == 2 && (a = bmak.gb(t, s), e = bmak.gb(t, s + 1), o = a >> 2, m = ((a & 3) << 4) + (e >> 4), r = (e & 15) << 2, b = b + c.charAt(o) + c.charAt(m) + c.charAt(r) + "="), b;
  },
  ie9OrLower: function() {
    try {
      if (typeof navigator.appVersion == "string" && -1 != navigator.appVersion.indexOf("MSIE")) {
        if (parseFloat(navigator.appVersion.split("MSIE")[1]) <= 9) return true;
      }
    } catch (t) {}

    return false;
  },
  parse_gp: function(t) {},
  call_gp: function() {
    var t;

    if (undefined !== window.XMLHttpRequest) {
      t = new XMLHttpRequest();
    } else {
      window.XDomainRequest !== undefined ? (t = new XDomainRequest(), t.onload = function() {
        this.readyState = 4;

        if (this.onreadystatechange instanceof Function) {
          this.onreadystatechange();
        }
      }) : t = new ActiveXObject("Microsoft.XMLHTTP");
    }

    t.open("GET", bmak.params_url, true);

    t.onreadystatechange = function() {
      if (t.readyState > 3 && bmak.parse_gp) {
        bmak.parse_gp(t);
      }
    };

    t.send();
  },
  apicall: function(t, a) {
    var e;
    e = window.XDomainRequest ? new XDomainRequest() : window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    e.open("POST", t, a);
    var n = bmak.encode(bmak.api_public_key + ":");
    bmak.auth = n + ",\"auth\" : \"" + "\"";

    if (e.setRequestHeader) {
      e.setRequestHeader("Content-type", "application/json");
      e.setRequestHeader("Authorization", n + "Basic ");
      bmak.auth = "";
    }

    var o = bmak.session_id + "{\"session_id\" : \"" + "\",\"sensor_data\" : \"" + bmak.sensor_data + "\"" + bmak.auth + "}";
    e.send(o);
  },
  apicall_bm: function(t, a, e) {
    var n;

    if (undefined !== window.XMLHttpRequest) {
      n = new XMLHttpRequest();
    } else {
      window.XDomainRequest !== undefined ? (n = new XDomainRequest(), n.onload = function() {
        this.readyState = 4;

        if (this.onreadystatechange instanceof Function) {
          this.onreadystatechange();
        }
      }) : n = new ActiveXObject("Microsoft.XMLHTTP");
    }

    n.open("POST", t, a);

    if (n.withCredentials !== undefined) {
      n.withCredentials = true;
    }

    var o = bmak.sensor_data + "{\"sensor_data\":\"" + "\"}";

    n.onreadystatechange = function() {
      if (n.readyState > 3 && e) {
        e(n);
      }
    };

    n.send(o);
    bmak.dcs = 0;
  },
  pd: function(t) {
    if (bmak.check_stop_protocol()) {
      bmak.apicall_bm(bmak.cf_url, t, bmak.patp);
      bmak.aj_indx = bmak.aj_indx + 1;
    } else {
      if (bmak.loap && bmak.dcs) {
        bmak.apicall_bm(bmak.cf_url, t, bmak.patp);
      }
    }
  },
  check_stop_protocol: function() {
    var t = bmak.get_stop_signals();
    var a = t[0];

    if (!bmak.rst && a > -1) {
      bmak.ir();
      bmak.rst = true;
    }

    var e = t[1];
    return -1 == e || bmak.aj_ss < e;
  },
  get_stop_signals: function() {
    var t = [-1, -1];
    var a = bmak.cookie_chk_read(bmak.ckie);
    if (a !== false) try {
      var e = decodeURIComponent(a).split("~");

      if (e.length >= 4) {
        var n = bmak.pi(e[1]);
        var o = bmak.pi(e[3]);
        n = isNaN(n) ? -1 : n;
        o = isNaN(o) ? -1 : o;
        t = [o, n];
      }
    } catch (t) {}
    return t;
  },
  patp: function(t) {
    bmak.aj_ss++;
    bmak.rst = false;
  },
  get_mn_params_from_abck: function() {
    var t = [
      []
    ];

    try {
      var a = bmak.cookie_chk_read(bmak.ckie);

      if (a !== false) {
        var e = decodeURIComponent(a).split("~");

        if (e.length >= 5) {
          var n = e[0];
          var o = e[4];
          var m = o.split("||");
          if (m.length > 0)
            for (var r = 0; r < m.length; r++) {
              var i = m[r];
              var c = i.split("-");

              if (c.length >= 5) {
                var b = bmak.pi(c[0]);
                var d = c[1];
                var s = bmak.pi(c[2]);
                var k = bmak.pi(c[3]);
                var l = bmak.pi(c[4]);
                var u = 1;

                if (c.length >= 6) {
                  u = bmak.pi(c[5]);
                }

                var _ = [b, n, d, s, k, l, u];

                if (2 == u) {
                  t.splice(0, 0, _);
                } else {
                  t.push(_);
                }
              }
            }
        }
      }
    } catch (t) {}

    return t;
  },
  mn_get_current_challenges: function() {
    var t = bmak.get_mn_params_from_abck();
    var a = [];
    if (t != null)
      for (var e = 0; e < t.length; e++) {
        var n = t[e];

        if (n.length > 0) {
          var o = n[1] + n[2];
          var m = n[6];
          a[m] = o;
        }
      }
    return a;
  },
  mn_update_challenge_details: function(t) {
    bmak.mn_sen = t[0];
    bmak.mn_abck = t[1];
    bmak.mn_psn = t[2];
    bmak.mn_cd = t[3];
    bmak.mn_tout = t[4];
    bmak.mn_stout = t[5];
    bmak.mn_ct = t[6];
    bmak.mn_ts = bmak.start_ts;
    bmak.mn_cc = bmak.mn_abck + bmak.start_ts + bmak.mn_psn;
  },
  mn_get_new_challenge_params: function(t) {
    var a = null;
    var e = null;
    var n = null;
    if (t != null)
      for (var o = 0; o < t.length; o++) {
        var m = t[o];

        if (m.length > 0) {
          for (r = m[0], i = bmak.mn_abck + bmak.start_ts + m[2], c = (m[3], m[6]), b = 0, undefined; b < bmak.mn_lcl && r == 1 && bmak.mn_lc[b] != i; b++) {
            var r;
            var i;
            var c;
            var b;;
          }

          if (b == bmak.mn_lcl) {
            a = o;

            if (c == 2) {
              e = o;
            }

            if (c == 3) {
              n = o;
            }
          }
        }
      }
    return n != null && bmak.pstate ? t[n] : e == null || bmak.pstate ? a == null || bmak.pstate ? null : t[a] : t[e];
  },
  mn_poll: function() {
    if (bmak.mn_state == 0) {
      var t = bmak.get_mn_params_from_abck();
      var a = bmak.mn_get_new_challenge_params(t);

      if (a != null) {
        bmak.mn_update_challenge_details(a);

        if (bmak.mn_sen) {
          bmak.mn_state = 1;
          bmak.mn_mc_indx = 0;
          bmak.mn_al = [];
          bmak.mn_il = [];
          bmak.mn_tcl = [];
          bmak.mn_lg = [];
          bmak.mn_rts = bmak.get_cf_date();
          bmak.mn_rt = bmak.mn_rts - bmak.start_ts;
          bmak.mn_wt = 0;
          setTimeout(bmak.mn_w, bmak.mn_tout);
        }
      }
    }
  },
  rotate_right: function(t, a) {
    return t >>> a | t << a - 32;
  },
  encode_utf8: function(t) {
    return unescape(encodeURIComponent(t));
  },
  mn_s: function(t) {
    var a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
    var e = 1779033703;
    var n = 3144134277;
    var o = 1013904242;
    var m = 2773480762;
    var r = 1359893119;
    var i = 2600822924;
    var c = 528734635;
    var b = 1541459225;
    var d = bmak.encode_utf8(t);
    var s = d.length * 8;
    d += String.fromCharCode(128);

    for (k = d.length / 4 + 2, l = Math.ceil(k / 16), u = new Array(l), _ = 0, undefined; _ < l; _++) {
      var k;
      var l;
      var u;

      var _;

      u[_] = new Array(16);

      for (var f = 0; f < 16; f++) u[_][f] = d.charCodeAt(_ * 64 + f * 4) << 24 | d.charCodeAt(_ * 64 + f * 4 + 1) << 16 | d.charCodeAt(_ * 64 + f * 4 + 2) << 8 | d.charCodeAt(_ * 64 + f * 4 + 3) << 0;
    }

    var p = s / Math.pow(2, 32);
    u[l - 1][14] = Math.floor(p);
    u[l - 1][15] = s;

    for (var v = 0; v < l; v++) {
      for (g = new Array(64), w = e, y = n, E = o, S = m, C = r, h = i, B = c, x = b, _ = 0, undefined; _ < 64; _++) {
        var h;
        var g;
        var w;
        var y;
        var E;
        var S;
        var C;
        var h;
        var B;
        var x;

        var _;

        var M;
        var j;
        var A;
        var L;
        var P;
        var T;

        if (_ < 16) {
          g[_] = u[v][_];
        } else {
          M = bmak.rotate_right(g[_ - 15], 7) ^ bmak.rotate_right(g[_ - 15], 18) ^ g[_ - 15] >>> 3;
          j = bmak.rotate_right(g[_ - 2], 17) ^ bmak.rotate_right(g[_ - 2], 19) ^ g[_ - 2] >>> 10;
          g[_] = g[_ - 16] + M + g[_ - 7] + j;
        }

        j = bmak.rotate_right(C, 6) ^ bmak.rotate_right(C, 11) ^ bmak.rotate_right(C, 25);
        A = C & h ^ ~C & B;
        L = x + j + A + a[_] + g[_];
        M = bmak.rotate_right(w, 2) ^ bmak.rotate_right(w, 13) ^ bmak.rotate_right(w, 22);
        P = w & y ^ w & E ^ y & E;
        T = M + P;
        x = B;
        B = h;
        h = C;
        C = S + L >>> 0;
        S = E;
        E = y;
        y = w;
        w = L + T >>> 0;
      }

      e += w;
      n += y;
      o += E;
      m += S;
      r += C;
      i += h;
      c += B;
      b += x;
    }

    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, o & 255, m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, m & 255, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, r & 255, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, c & 255, b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, b & 255];
  },
  mn_init: function() {
    var t = 200;

    if (bmak.pstate) {
      t = 100;
    }

    setInterval(bmak.mn_poll, t);
  },
  bdm: function(t, a) {
    for (e = 0, n = 0, undefined; n < t.length; ++n) {
      var e;
      var n;
      e = (e << 8 | t[n]) >>> 0;
      e %= a;
    }

    return e;
  },
  mn_w: function() {
    try {
      for (t = 0, a = 0, e = 0, n = "", o = bmak.get_cf_date(), m = bmak.mn_cd + bmak.mn_mc_indx, undefined; t == 0;) {
        var t;
        var a;
        var e;
        var n;
        var o;
        var m;
        n = Math.random().toString(16);
        var r = bmak.mn_cc + m.toString() + n;
        var i = bmak.mn_s(r);

        if (bmak.bdm(i, m) == 0) {
          t = 1;
          e = bmak.get_cf_date() - o;
          bmak.mn_al.push(n);
          bmak.mn_tcl.push(e);
          bmak.mn_il.push(a);

          if (bmak.mn_mc_indx == 0) {
            bmak.mn_lg.push(bmak.mn_abck);
            bmak.mn_lg.push(bmak.mn_ts);
            bmak.mn_lg.push(bmak.mn_psn);
            bmak.mn_lg.push(bmak.mn_cc);
            bmak.mn_lg.push(bmak.mn_cd.toString());
            bmak.mn_lg.push(m.toString());
            bmak.mn_lg.push(n);
            bmak.mn_lg.push(r);
            bmak.mn_lg.push(i);
            bmak.mn_lg.push(bmak.mn_rt);
          }
        } else if ((a += 1) % 1e3 == 0 && (e = bmak.get_cf_date() - o) > bmak.mn_stout) return bmak.mn_wt += e, void setTimeout(bmak.mn_w, bmak.mn_stout);
      }

      bmak.mn_mc_indx += 1;

      if (bmak.mn_mc_indx < bmak.mn_mc_lmt) {
        setTimeout(bmak.mn_w, e);
      } else {
        bmak.mn_mc_indx = 0;
        bmak.mn_lc[bmak.mn_lcl] = bmak.mn_cc;
        bmak.mn_ld[bmak.mn_lcl] = bmak.mn_cd;
        bmak.mn_lcl = bmak.mn_lcl + 1;
        bmak.mn_state = 0;
        bmak.mn_lg.push(bmak.mn_wt);
        bmak.mn_lg.push(bmak.get_cf_date());
        bmak.mn_r[bmak.mn_abck + bmak.mn_psn] = bmak.mn_pr();
        bmak.js_post && (bmak.aj_type = 8, bmak.mn_ct == 2 && (bmak.dcs = 1), bmak.bpd(), bmak.pd(true));
      }
    } catch (t) {
      bmak.sd_debug(t + ",mn_w:");
    }
  },
  mn_pr: function() {
    return bmak.mn_al.join(",") + ";" + bmak.mn_tcl.join(",") + ";" + bmak.mn_il.join(",") + ";" + bmak.mn_lg.join(",") + ";";
  },
  ats: function(t) {
    for (a = "", e = 0, undefined; e < t.length; e++) {
      var a;
      var e;
      a += t[e].toString(16).length == 2 ? t[e].toString(16) : t[e].toString(16) + "0";
    }

    return a;
  },
  calc_fp: function() {
    bmak.fpcf.fpVal();

    if (bmak.js_post) {
      bmak.aj_type = 9;
      bmak.bpd();
      bmak.pd(true);
    }
  },
  listFunctions: {
    _setJsPost: function(t) {
      bmak.js_post = t;

      if (bmak.js_post) {
        bmak.enReadDocUrl = 1;
      }
    },
    _setSessionId: function(t) {
      bmak.session_id = t;
    },
    _setJavaScriptKey: function(t) {
      bmak.api_public_key = t;
    },
    _setEnAddHidden: function(t) {
      bmak.enAddHidden = t;
    },
    _setInitTime: function(t) {
      bmak.init_time = t;
    },
    _setApiUrl: function(t) {
      bmak.cf_url = t;
    },
    _setEnGetLoc: function(t) {
      bmak.enGetLoc = t;
    },
    _setEnReadDocUrl: function(t) {
      bmak.enReadDocUrl = t;
    },
    _setDisFpCalOnTimeout: function(t) {
      bmak.disFpCalOnTimeout = t;
    },
    _setCookie: function(t) {
      bmak.ckie = t;
    },
    _setCS: function(t) {
      bmak.cs = (String(t) + bmak.cs).slice(0, 16);
    },
    _setFsp: function(t) {
      bmak.fsp = t;

      if (bmak.fsp) {
        bmak.cf_url = bmak.cf_url.replace(/^http:\/\//i, "https://");
      }
    },
    _setBm: function(t) {
      bmak.bm = t;

      if (bmak.bm) {
        bmak.cf_url = (bmak.fsp ? "https:" : document.location.protocol) + "//" + document.location.hostname + "/_bm/_data";
        bmak.js_post = true;
      } else {
        bmak.params_url = (bmak.fsp ? "https:" : document.location.protocol) + "//" + document.location.hostname + "/get_params";
      }
    },
    _setAu: function(t) {
      typeof t == "string" && (t.lastIndexOf("/", 0) === 0 ? bmak.cf_url = (bmak.fsp ? "https:" : document.location.protocol) + "//" + document.location.hostname + t : bmak.cf_url = t);
    },
    _setSDFieldNames: function() {
      try {
        var t;

        for (t = 0; t < arguments.length; t += 1) bmak.sdfn.push(arguments[t]);
      } catch (t) {
        bmak.sd_debug(t + ",setSDFN:");
      }
    },
    _setUseAltFonts: function(t) {
      bmak.altFonts = t;
    },
    _setPowState: function(t) {
      bmak.pstate = t;
    },
    _setPow: function(t) {
      bmak.pstate = t;
    },
    _setLOAP: function(t) {
      bmak.loap = t;
    }
  },
  applyFunc: function() {
    var t;
    var a;
    var e;

    for (t = 0; t < arguments.length; t += 1) e = arguments[t];

    a = e.shift();

    if (bmak.listFunctions[a]) {
      bmak.listFunctions[a].apply(bmak.listFunctions, e);
    }
  },
  getStateField: function(t) {
    for (a = "", e = "aeiouy13579", n = 0, o = t.toLowerCase(), undefined; n < o.length;) {
      var a;
      var e;
      var n;
      var o;

      if (e.indexOf(o[n]) >= 0 || e.indexOf(o[n + 1]) >= 0) {
        a += 1;
      } else {
        a += 0;
      }

      n += 2;
    }

    return a;
  }
};

if (function(t) {
    var a = {};
    t.fpcf = a;

    a.sf4 = function() {
      var t = bmak.uar();
      return !(!~t.indexOf("Version/4.0") || !(~t.indexOf("iPad;") || ~t.indexOf("iPhone") || ~t.indexOf("Mac OS X 10_5")));
    };

    a.fpValstr = "-1";
    a.fpValCalculated = false;
    a.rVal = "-1";
    a.rCFP = "-1";
    a.cache = {};
    a.td = -999999;

    a.clearCache = function() {
      a.cache = {};
    };

    a.fpVal = function() {
      a.fpValCalculated = true;

      try {
        var t = 0;
        t = Date.now ? Date.now() : +new Date();
        var e = a.data();
        a.fpValstr = e.replace(/\"/g, "\\\\\"");
        var n = 0;
        n = Date.now ? Date.now() : +new Date();
        a.td = n - t;
      } catch (t) {}
    };

    a.timezoneOffsetKey = function() {
      return new Date().getTimezoneOffset();
    };

    a.data = function() {
      var t = screen.colorDepth ? screen.colorDepth : -1;
      var e = screen.pixelDepth ? screen.pixelDepth : -1;
      var n = navigator.cookieEnabled ? navigator.cookieEnabled : -1;
      var o = navigator.javaEnabled ? navigator.javaEnabled() : -1;
      var m = navigator.doNotTrack ? navigator.doNotTrack : -1;
      var r = "default";
      r = bmak.runFonts ? bmak.altFonts ? a.fonts_optm() : a.fonts() : "dis";
      return [a.canvas("<@nv45. F1n63r,Pr1n71n6!"), a.canvas("m,Ev!xV67BaU> eh2m<f3AG3@"), r, a.pluginInfo(), a.sessionStorageKey(), a.localStorageKey(), a.indexedDbKey(), a.timezoneOffsetKey(), a.webrtcKey(), t, e, n, o, m].join(";");
    };

    a.PLUGINS = ["WebEx64 General Plugin Container", "YouTube Plug-in", "Java Applet Plug-in", "Shockwave Flash", "iPhotoPhotocast", "SharePoint Browser Plug-in", "Chrome Remote Desktop Viewer", "Chrome PDF Viewer", "Native Client", "Unity Player", "WebKit-integrierte PDF", "QuickTime Plug-in", "RealPlayer Version Plugin", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)", "Mozilla Default Plug-in", "Adobe Acrobat", "AdobeAAMDetect", "Google Earth Plug-in", "Java Plug-in 2 for NPAPI Browsers", "Widevine Content Decryption Module", "Microsoft Office Live Plug-in", "Windows Media Player Plug-in Dynamic Link Library", "Google Talk Plugin Video Renderer", "Edge PDF Viewer", "Shockwave for Director", "Default Browser Helper", "Silverlight Plug-In"];

    a.pluginInfo = function() {
      if (navigator.plugins === undefined) return null;

      for (t = a.PLUGINS.length, e = "", n = 0, undefined; n < t; n++) {
        var t;
        var e;
        var n;
        var o = a.PLUGINS[n];

        if (navigator.plugins[o] !== undefined) {
          e = e + "," + n;
        }
      }

      return e;
    };

    a.canvas = function(t) {
      try {
        if (a.cache.canvas !== undefined) return a.cache.canvas;
        var e = -1;

        if (!a.sf4()) {
          var n = document.createElement("canvas");

          if (n.width = 280, n.height = 60, n.style.display = "none", typeof n.getContext == "function") {
            var o = n.getContext("2d");
            o.fillStyle = "rgb(102, 204, 0)";
            o.fillRect(100, 5, 80, 50);
            o.fillStyle = "#f60";
            o.font = "16pt Arial";
            o.fillText(t, 10, 40);
            o.strokeStyle = "rgb(120, 186, 176)";
            o.arc(80, 10, 20, 0, Math.PI, false);
            o.stroke();
            var m = n.toDataURL();
            e = 0;

            for (var r = 0; r < m.length; r++) {
              e = (e << 5) - e + m.charCodeAt(r);
              e &= e;
            }

            e = e.toString();
            var i = document.createElement("canvas");
            i.width = 16;
            i.height = 16;
            var c = i.getContext("2d");
            c.font = "6pt Arial";
            a.rVal = Math.floor(Math.random() * 1e3).toString();
            c.fillText(a.rVal, 1, 12);

            for (b = i.toDataURL(), d = 0, s = 0, undefined; s < b.length; s++) {
              var b;
              var d;
              var s;
              d = (d << 5) - d + b.charCodeAt(s);
              d &= d;
            }

            a.rCFP = d.toString();
          }
        }

        return e;
      } catch (t) {
        return "exception";
      }
    };

    a.fonts_optm = function() {
      var t = 200;
      var e = bmak.get_cf_date();
      var n = [];

      if (!a.sf4() && document.body) {
        var o = ["sans-serif", "monospace"];
        var m = [0, 0];
        var r = [0, 0];
        var i = document.createElement("div");
        i.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";
        var c;

        for (c = 0; c < o.length; c++) {
          var b = document.createElement("span");
          b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.";
          b.style.fontSize = "90px";
          b.style.fontFamily = o[c];
          i.appendChild(b);
        }

        for (document.body.appendChild(i), c = 0; c < i.childNodes.length; c++) {
          b = i.childNodes[c];
          m[c] = b.offsetWidth;
          r[c] = b.offsetHeight;
        }

        if (document.body.removeChild(i), bmak.get_cf_date() - e > t) return "";
        var d = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"];
        var s = document.createElement("div");
        s.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";

        for (k = [], l = 0, undefined; l < d.length; l++) {
          var k;
          var l;
          var u = document.createElement("div");

          for (c = 0; c < o.length; c++) {
            var b = document.createElement("span");
            b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.";
            b.style.fontSize = "90px";
            b.style.fontFamily = d[l] + "," + o[c];
            u.appendChild(b);
          }

          s.appendChild(u);
        }

        if (bmak.get_cf_date() - e > t) return "";
        document.body.appendChild(s);

        for (var l = 0; l < s.childNodes.length; l++) {
          var _ = false;
          var u = s.childNodes[l];

          for (c = 0; c < u.childNodes.length; c++) {
            var b = u.childNodes[c];

            if (b.offsetWidth !== m[c] || b.offsetHeight !== r[c]) {
              _ = true;
              break;
            }
          }

          if (_ && k.push(l), bmak.get_cf_date() - e > t) break;
        }

        document.body.removeChild(s);
        n = k.sort();
      }

      return n.join(",");
    };

    a.fonts = function() {
      var t = [];

      if (!a.sf4() && document.body) {
        var e = ["serif", "sans-serif", "monospace"];
        var n = [0, 0, 0];
        var o = [0, 0, 0];
        var m = document.createElement("span");
        m.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.";
        m.style.fontSize = "90px";
        var r;

        for (r = 0; r < e.length; r++) {
          m.style.fontFamily = e[r];
          document.body.appendChild(m);
          n[r] = m.offsetWidth;
          o[r] = m.offsetHeight;
          document.body.removeChild(m);
        }

        for (i = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"], c = [], b = 0, undefined; b < i.length; b++) {
          var i;
          var c;
          var b;
          var d = false;

          for (r = 0; r < e.length; r++)
            if (m.style.fontFamily = i[b] + "," + e[r], document.body.appendChild(m), m.offsetWidth === n[r] && m.offsetHeight === o[r] || (d = true), document.body.removeChild(m), d) {
              c.push(b);
              break;
            }
        }

        t = c.sort();
      }

      return t.join(",");
    };

    a.webrtcKey = function() {
      return typeof window.RTCPeerConnection == "function" || typeof window.mozRTCPeerConnection == "function" || typeof window.webkitRTCPeerConnection == "function";
    };

    a.indexedDbKey = function() {
      return !!a.hasIndexedDB();
    };

    a.sessionStorageKey = function() {
      return !!a.hasSessionStorage();
    };

    a.localStorageKey = function() {
      return !!a.hasLocalStorage();
    };

    a.hasSessionStorage = function() {
      try {
        return !!window.sessionStorage;
      } catch (t) {
        return false;
      }
    };

    a.hasLocalStorage = function() {
      try {
        return !!window.localStorage;
      } catch (t) {
        return false;
      }
    };

    a.hasIndexedDB = function() {
      return !!window.indexedDB;
    };
  }(bmak), bmak.firstLoad) {
  if (bmak.sd_debug("<init/>"), _cf.length > 0) {
    for (var bm_counter = 0; bm_counter < _cf.length; bm_counter++) bmak.applyFunc(_cf[bm_counter]);

    bmak.sd_debug(bmak.sdfn.join() + "<setSDFN>" + "</setSDFN>");
    _cf = {
      push: bmak.applyFunc
    };
  } else {
    var bm_script;

    if (document.currentScript && (bm_script = document.currentScript), !bm_script) {
      var scripts = document.getElementsByTagName("script");

      if (scripts.length) {
        bm_script = scripts[scripts.length - 1];
      }
    }

    if (bm_script.src) {
      var bm_url = bm_script.src;
      var url_split = bm_url.split("/");
      var obfus_state_field;

      if (url_split.length >= 4 && (obfus_state_field = bm_url.split("/").slice(-4)[0]), obfus_state_field && obfus_state_field.length % 2 == 0) {
        var state_field_str = bmak.getStateField(obfus_state_field);

        if (state_field_str.length >= 3) {
          bmak.listFunctions._setFsp(state_field_str[0] == "1");

          bmak.listFunctions._setBm(state_field_str[1] == "1");

          bmak.listFunctions._setPowState(state_field_str[2] == "1");

          bmak.listFunctions._setAu(bm_url);
        }
      }
    }
  }

  try {
    bmak.ir();
    bmak.t_tst = bmak.get_cf_date();
    bmak.startTracking();
    bmak.tst = bmak.get_cf_date() - bmak.t_tst;

    if (bmak.disFpCalOnTimeout) {
      setTimeout(bmak.calc_fp, 500);
    }

    for (var bm_counter = 0; bm_counter < 3; bm_counter++) setTimeout(bmak.getmr, bm_counter * 5e3 + 400);

    bmak.mn_init();
  } catch (t) {}
}