// This is the integration code for notify_visitors vendor
// Do not make unnecessary changes here

function initNv() {
  var nv =
    nv ||
    function () {
      (window.nv.q = window.nv.q || []).push(arguments);
    };
  nv.l = new Date();
  var notify_visitors =
    notify_visitors ||
    (function () {
      var t = {
        initialize: !1,
        ab_overlay: !1,
        async: !0,
        on_load: !1,
        auth: { bid_e: '5A5D8805D8ED7BF9F341C8FD1170601F', bid: '9596', t: '420' },
      };

      return (
        (t.data = {
          bid_e: t.auth.bid_e,
          bid: t.auth.bid,
          t: t.auth.t,
          iFrame: window !== window.parent,
          trafficSource: document.referrer,
          link_referrer: document.referrer,
          pageUrl: document.location,
          path: location.pathname,
          domain: location.origin,
          gmOffset: 60 * new Date().getTimezoneOffset() * -1,
          screenWidth: screen.width,
          screenHeight: screen.height,
          isPwa:
            window.matchMedia && window.matchMedia('(display-mode: standalone)').matches ? 1 : 0,
        }),
        (t.options = function (e) {
          if (
            ((t._option = { ab_overlay: !1, async: !0, on_load: !1, cookie_domain: null }),
            e && 'object' == typeof e)
          )
            for (var n in t._option) void 0 !== e[n] && (t[n] = e[n]);
          else console.log('Not a valid option');
        }),
        (t.tokens = function (e) {
          t.data.tokens = e && 'object' == typeof e ? JSON.stringify(e) : '';
        }),
        (t.ruleData = function (e) {
          t.data.ruleData = e && 'object' == typeof e ? JSON.stringify(e) : '';
        }),
        (t.cookies = function (e) {
          t.data.cookies = e && (Array.isArray(e) || 'all' === e) ? e : [];
        }),
        (t.getParams = function (e) {
          var url = window.location.href.toLowerCase(),
            e = e.replace(/[\[\]]/g, '\\$&').toLowerCase();
          var t = new RegExp('[?&]' + e + '(=([^&#]*)|&|#|$)').exec(url);
          return t && t[2] ? decodeURIComponent(t[2].replace(/\+/g, ' ')) : '';
        }),
        (t.init = function () {
          if ('complete' != document.readyState && t.on_load) {
            if (window.addEventListener) window.addEventListener('load', t._init);
            else if (window.attachEvent) return window.attachEvent('onload', t._init);
          } else t._init();
        }),
        (t._init = function () {
          if (
            t.auth &&
            !t.initialize &&
            ((t.data.storage = t.browserStorage()),
            (t.data.cookieData = t.filterCookies(t.data.cookies)),
            t.cookie_domain && (t.data.cookieDomain = t.cookie_domain),
            (t.js_callback = 'nv_json1'),
            !t.data.iFrame && 'noapi' !== t.getParams('nvcheck'))
          ) {
            var n = '?';
            if (t.ab_overlay) {
              var o = document.createElement('style'),
                i =
                  'body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',
                a = document.getElementsByTagName('head')[0];
              o.setAttribute('id', '_nv_hm_hidden_element'),
                o.setAttribute('type', 'text/css'),
                o.styleSheet
                  ? (o.styleSheet.cssText = i)
                  : o.appendChild(document.createTextNode(i)),
                a.appendChild(o),
                setTimeout(function () {
                  var t = this.document.getElementById('_nv_hm_hidden_element');
                  if (t)
                    try {
                      t.parentNode.removeChild(e);
                    } catch (e) {
                      t.remove();
                    }
                }, 2e3);
            }
            for (var r in t.data)
              t.data.hasOwnProperty(r) &&
                (n += encodeURIComponent(r) + '=' + encodeURIComponent(t.data[r]) + '&');
            t.load('https://www.notifyvisitors.com/ext/v1/settings' + n), (t.initialize = !0);
          }
        }),
        (t.browserStorage = function () {
          var e = { session: t.storage('sessionStorage'), local: t.storage('localStorage') };
          return JSON.stringify(e);
        }),
        (t.storage = function (e) {
          var t = {};
          return (
            window[e] &&
              window[e].length > 0 &&
              Object.keys(window[e]).forEach(function (n) {
                -1 !== n.indexOf('_nv_') && (t[n] = window[e][n]);
              }),
            t
          );
        }),
        (t.filterCookies = function (e) {
          e = e || [];
          var t = [];
          if (document && document.cookie) {
            var n = document.cookie.split(';');
            'all' === e && (t = n),
              Array.isArray(e) &&
                n &&
                n.length > 0 &&
                (t = n.filter(function (t) {
                  var n = t.trim().split('=')[0];
                  return -1 !== e.indexOf(n) || 0 === n.indexOf('_nv_');
                }));
          }
          return t.join(';');
        }),
        (t.load = function (e) {
          var n = document,
            o = n.createElement('script');
          (o.type = 'text/javascript'),
            (o.async = t.async),
            (o.src = e),
            n.body ? n.body.appendChild(o) : n.head.appendChild(o);
        }),
        t
      );
    })();

  notify_visitors.options({
    ab_overlay: false,
    on_load: false,
  });

  notify_visitors.init();
}

if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
  initNv();
}
