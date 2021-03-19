/*!
 * (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/. 
 * 
 */
 
var kbLanguage = "english";
 
! function(e) {
   function t(t) {
       for (var r, s, a = t[0], l = t[1], c = t[2], u = 0, h = []; u < a.length; u++) s = a[u], Object.prototype.hasOwnProperty.call(i, s) && i[s] && h.push(i[s][0]), i[s] = 0;
       for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
       for (d && d(t); h.length;) h.shift()();
       return o.push.apply(o, c || []), n()
   }

   function n() {
       for (var e, t = 0; t < o.length; t++) {
           for (var n = o[t], r = !0, a = 1; a < n.length; a++) {
               var l = n[a];
               0 !== i[l] && (r = !1)
           }
           r && (o.splice(t--, 1), e = s(s.s = n[0]))
       }
       return e
   }
   var r = {},
       i = {
           6: 0
       },
       o = [];

   function s(t) {
       if (r[t]) return r[t].exports;
       var n = r[t] = {
           i: t,
           l: !1,
           exports: {}
       };
       return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
   }
   s.m = e, s.c = r, s.d = function(e, t, n) {
       s.o(e, t) || Object.defineProperty(e, t, {
           enumerable: !0,
           get: n
       })
   }, s.r = function(e) {
       "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
           value: "Module"
       }), Object.defineProperty(e, "__esModule", {
           value: !0
       })
   }, s.t = function(e, t) {
       if (1 & t && (e = s(e)), 8 & t) return e;
       if (4 & t && "object" == typeof e && e && e.__esModule) return e;
       var n = Object.create(null);
       if (s.r(n), Object.defineProperty(n, "default", {
               enumerable: !0,
               value: e
           }), 2 & t && "string" != typeof e)
           for (var r in e) s.d(n, r, function(t) {
               return e[t]
           }.bind(null, r));
       return n
   }, s.n = function(e) {
       var t = e && e.__esModule ? function() {
           return e.default
       } : function() {
           return e
       };
       return s.d(t, "a", t), t
   }, s.o = function(e, t) {
       return Object.prototype.hasOwnProperty.call(e, t)
   }, s.p = "";
   var a = window.webpackJsonp = window.webpackJsonp || [],
       l = a.push.bind(a);
   a.push = t, a = a.slice();
   for (var c = 0; c < a.length; c++) t(a[c]);
   var d = l;
   o.push(["xCzn", 0, 1]), n()
}({
   "/i/y": function(e, t, n) {
       "use strict";
       var r = n("mrSG"),
           i = n("7wIv"),
           o = n.n(i);
       class s {
           constructor() {
               this.m_wsWebSocketToServer = void 0, this.m_oHandlers = {}, this.m_oWaits = {}, this.m_oConnectWaits = [], this.m_fnConnectResolve = void 0, this.m_nNextMessageNumber = 1
           }
           OpenWebSocketToHost() {
               return new Promise((e, t) => {
                   console.log("Connecting vrmailbox " + this.m_sMailboxName + "...");
                   let n = "ws://localhost:27062";
                   this.m_sWebSecret && (n += "?secret=" + this.m_sWebSecret), this.m_fnConnectResolve = e, this.m_wsWebSocketToServer = new WebSocket(n), this.m_wsWebSocketToServer.addEventListener("open", t => {
                       this.OnWebSocketOpen(t), e()
                   }), this.m_wsWebSocketToServer.addEventListener("message", this.OnWebSocketMessage), this.m_wsWebSocketToServer.addEventListener("close", this.OnWebSocketClose)
               })
           }
           static EnsureUniqueName(e) {
               if (e.includes("/")) return e;
               let t;
               return t = VRHTML ? VRHTML.GetWebHelperId() : Date.now().toString(), e + "/" + t + "_" + this.s_nNextMailboxNumber++
           }
           Init(e, t) {
               return Object(r.a)(this, void 0, void 0, (function*() {
                   return this.m_sMailboxName = s.EnsureUniqueName(e), this.m_sWebSecret = t, this.connected = !1, this.OpenWebSocketToHost()
               }))
           }
           get name() {
               return this.m_sMailboxName
           }
           OnWebSocketOpen(e) {
               this.connected = !0, this.WebSocketSend("mailbox_open " + this.m_sMailboxName), window.addEventListener("beforeunload", () => {
                   this.WebSocketSend("websocket_close")
               }), this.m_fnConnectResolve && (this.m_fnConnectResolve(), this.m_fnConnectResolve = void 0);
               for (let e of this.m_oConnectWaits) e();
               this.m_oConnectWaits = []
           }
           OnWebSocketClose(e) {
               console.log("Lost connection to host..."), this.connected = !1, this.OpenWebSocketToHost()
           }
           WebSocketSend(e) {
               null != this.m_wsWebSocketToServer && 1 == this.m_wsWebSocketToServer.readyState && this.m_wsWebSocketToServer.send(e)
           }
           OnWebSocketMessage(e) {
               let t = JSON.parse(e.data),
                   n = !1;
               if (this.m_oHandlers.hasOwnProperty(t.type) && (this.m_oHandlers[t.type](t), n = !0), this.m_oWaits.hasOwnProperty(t.type)) {
                   let e = !1;
                   for (let n of this.m_oWaits[t.type]) n.nMessageId == t.message_id && (n.callback(t), e = !0);
                   e ? this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(e => e.nMessageId == t.message_id) : console.log(`Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`), n = !0
               }
               n || console.log("Received unhandled message: ", t)
           }
           RegisterHandler(e, t) {
               this.m_oHandlers[e] = t
           }
           SendMessage(e, t) {
               this.WebSocketSend("mailbox_send " + e + " " + JSON.stringify(t))
           }
           WaitForMessage(e, t) {
               return new Promise((n, r) => {
                   this.m_oWaits[e] || (this.m_oWaits[e] = []), this.m_oWaits[e].push({
                       callback: n,
                       nMessageId: t
                   })
               })
           }
           WaitForConnect() {
               return new Promise((e, t) => {
                   this.connected ? e() : this.m_oConnectWaits.push(e)
               })
           }
           WaitForMailbox(e) {
               return Object(r.a)(this, void 0, void 0, (function*() {
                   let t = {
                       type: "request_mailbox_registration_notification",
                       mailbox_name: e
                   };
                   return this.SendMessageAndWaitForResponse("web_server_mailbox", t, "mailbox_registered")
               }))
           }
           SendMessageAndWaitForResponse(e, t, n) {
               let r = Object.assign({}, t);
               return null == r.returnAddress && (r.returnAddress = this.m_sMailboxName), r.message_id = this.m_nNextMessageNumber++, this.SendMessage(e, r), this.WaitForMessage(n, r.message_id)
           }
           SendResponse(e, t) {
               if (!e.returnAddress) throw new Error("Missing return address on message");
               let n = Object.assign(Object.assign({}, t), {
                   message_id: e.message_id
               });
               n.message_id = e.message_id, this.SendMessage(e.returnAddress, n)
           }
       }

       function a() {
           return {
               translation: {
                   x: 0,
                   y: 0,
                   z: 0
               },
               rotation: {
                   w: 1,
                   x: 0,
                   y: 0,
                   z: 0
               },
               scale: {
                   x: 1,
                   y: 1,
                   z: 1
               }
           }
       }

       function l(e, t) {
           return {
               x: e.x + t.x,
               y: e.y + t.y,
               z: e.z + t.z
           }
       }

       function c(e, t, n) {
           return {
               x: t.x + e * (n.x - t.x),
               y: t.y + e * (n.y - t.y),
               z: t.z + e * (n.z - t.z)
           }
       }

       function d(e, t) {
           return {
               x: e.x - t.x,
               y: e.y - t.y
           }
       }

       function u(e, t) {
           return {
               x: e.x - t.x,
               y: e.y - t.y,
               z: e.z - t.z
           }
       }

       function h(e, t) {
           return {
               x: e.x * t,
               y: e.y * t
           }
       }

       function p(e, t) {
           return {
               x: e.x * t,
               y: e.y * t,
               z: e.z * t
           }
       }

       function m(e) {
           return Math.sqrt(e.x * e.x + e.y * e.y)
       }

       function g(e) {
           return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z)
       }

       function b(e) {
           if (void 0 === e) return;
           let t = .5 * e.x,
               n = .5 * e.y,
               r = .5 * e.z,
               i = Math.cos(t),
               o = Math.cos(n),
               s = Math.cos(r),
               a = Math.sin(t),
               l = Math.sin(n),
               c = Math.sin(r);
           return {
               w: i * o * s + a * l * c,
               x: a * o * s + i * l * c,
               y: i * l * s - a * o * c,
               z: i * o * c - a * l * s
           }
       }

       function v(e) {
           let t = e[0][0] + e[1][1] + e[2][2];
           if (t > 0) {
               let n = 2 * Math.sqrt(t + 1);
               return {
                   w: .25 * n,
                   x: (e[1][2] - e[2][1]) / n,
                   y: (e[2][0] - e[0][2]) / n,
                   z: (e[0][1] - e[1][0]) / n
               }
           }
           if (e[0][0] > e[1][1] && e[0][0] > e[2][2]) {
               let t = 2 * Math.sqrt(1 + e[0][0] - e[1][1] - e[2][2]);
               return {
                   w: (e[1][2] - e[2][1]) / t,
                   x: .25 * t,
                   y: (e[1][0] + e[0][1]) / t,
                   z: (e[2][2] + e[0][2]) / t
               }
           }
           if (e[1][1] > e[2][2]) {
               let t = 2 * Math.sqrt(1 + e[1][1] - e[0][0] - e[2][2]);
               return {
                   w: (e[2][0] - e[0][2]) / t,
                   x: (e[1][0] + e[0][1]) / t,
                   y: .25 * t,
                   z: (e[2][1] + e[1][2]) / t
               }
           } {
               let t = 2 * Math.sqrt(1 + e[2][2] - e[0][0] - e[1][1]);
               return {
                   w: (e[0][1] - e[1][0]) / t,
                   x: (e[2][0] + e[0][2]) / t,
                   y: (e[2][1] + e[1][2]) / t,
                   z: .25 * t
               }
           }
       }

       function _(e, t) {
           let n = 2 * (e.y * t.z - e.z * t.y),
               r = 2 * (e.z * t.x - e.x * t.z),
               i = 2 * (e.x * t.y - e.y * t.x);
           return {
               x: t.x + e.w * n + e.y * i - e.z * r,
               y: t.y + e.w * r + e.z * n - e.x * i,
               z: t.z + e.w * i + e.x * r - e.y * n
           }
       }

       function y(e, t, n) {
           return [
               [e.x, e.y, e.z],
               [t.x, t.y, t.z],
               [n.x, n.y, n.z]
           ]
       }

       function f(e) {
           return _(e.rotation, {
               x: 0,
               y: 0,
               z: 1
           })
       }

       function S(e) {
           let t = g(e);
           return {
               x: e.x / t,
               y: e.y / t,
               z: e.z / t
           }
       }

       function k(e, t) {
           return {
               x: e.y * t.z - e.z * t.y,
               y: e.z * t.x - e.x * t.z,
               z: e.x * t.y - e.y * t.x
           }
       }

       function C(e) {
           let t = e.w * e.w + e.x * e.x + e.y * e.y + e.z * e.z;
           return {
               w: e.w / t,
               x: -e.x / t,
               y: -e.y / t,
               z: -e.z / t
           }
       }
       s.s_nNextMailboxNumber = 1, Object(r.b)([i.bind], s.prototype, "OpenWebSocketToHost", null), Object(r.b)([i.bind], s.prototype, "OnWebSocketOpen", null), Object(r.b)([i.bind], s.prototype, "OnWebSocketClose", null), Object(r.b)([i.bind], s.prototype, "WebSocketSend", null), Object(r.b)([i.bind], s.prototype, "OnWebSocketMessage", null);
       var w = n("q1tI");

       function O(e, t) {
           let n = e.getAttribute(t);
           if (n && n.length > 0) {
               if ("undefined" == n) return;
               let e = [];
               for (let t of n.split(" ")) 0 != t.length && e.push(parseFloat(t));
               if (e.length > 0) return e
           }
       }

       function D(e, t) {
           let n = e.getAttribute(t);
           if (n && n.length > 0) return parseFloat(n)
       }

       function R(e, t) {
           let n = e.getAttribute(t);
           if (n && n.length > 0) return parseInt(n)
       }

       function M(e, t) {
           let n = e.getAttribute(t);
           if (n && n.length > 0) return "true" == n || n.length > 0 && 0 != parseInt(n) && !isNaN(parseInt(n))
       }

       function E(e, t) {
           let n = e.getAttribute(t);
           if (n && n.length > 0) return n
       }

       function T(e, t) {
           return U(E(e, t))
       }

       function I(e, t) {
           let n = {
               type: e,
               properties: {}
           };
           return t.id && (n.properties.id = U(t.id)), n.properties.sgid = R(t, "sgid"), n
       }

       function P(e, t) {
           let [n, r] = function(e, t) {
               let n = t.buildNode;
               if (n) return n(e, t);
               let r = Object.assign({}, e),
                   i = null;
               switch (t.nodeName.toUpperCase()) {
                   case "VSG-TRANSFORM":
                       i = I("transform", t), i.properties.translation = O(t, "translation"), i.properties.rotation = O(t, "rotation"), i.properties.scale = O(t, "scale"), i.properties["parent-path"] = E(t, "parent-path"), i.properties["parent-origin"] = E(t, "parent-origin"), i.properties["parent-id"] = T(t, "parent-id");
                       break;
                   case "VSG-TRACKING-STATE-VISIBILITY":
                       i = I("trackingstatevisibility", t), i.properties["visible-0dof"] = M(t, "visible-0dof"), i.properties["visible-3dof"] = M(t, "visible-3dof"), i.properties["visible-6dof"] = M(t, "visible-6dof");
                       break;
                   case "VSG-ELASTIC-HEAD-TRANSFORM":
                       i = I("elasticheadtransform", t), i.properties["start-angle-threshold"] = D(t, "start-angle-threshold"), i.properties["stop-angle-threshold"] = D(t, "stop-angle-threshold"), i.properties["ease-in-time"] = D(t, "ease-in-time"), i.properties["ease-in-power"] = D(t, "ease-in-power"), i.properties["ease-out-angle-threshold"] = D(t, "ease-out-angle-threshold"), i.properties["ease-out-power"] = D(t, "ease-out-power"), i.properties["min-angular-velocity"] = D(t, "min-angular-velocity"), i.properties["max-angular-velocity"] = D(t, "max-angular-velocity"), i.properties["lock-to-horizon"] = M(t, "lock-to-horizon"), i.properties["translation-behavior"] = R(t, "translation-behavior");
                       break;
                   case "VSG-LINE":
                       i = I("line", t), i.properties["target-id"] = T(t, "target-id"), i.properties.thickness = D(t, "thickness"), i.properties["start-buffer"] = D(t, "start-buffer"), i.properties["end-buffer"] = D(t, "end-buffer");
                       break;
                   case "VSG-LINE-CONSTRAINED-TRANSFORM":
                       i = I("line-constrained-transform", t), i.properties["target-id"] = T(t, "target-id"), i.properties["source-id"] = T(t, "source-id"), i.properties["source-distance"] = D(t, "source-distance"), i.properties["target-limit"] = D(t, "target-limit");
                       break;
                   case "VSG-CALLOUT-TRANSFORM":
                       i = I("callout-transform", t), i.properties.offset = O(t, "offset");
                       break;
                   case "VSG-HEAD-FACING-TRANSFORM":
                       i = I("head-facing-transform", t);
                       break;
                   case "VSG-PIN-TO-VIEW-TRANSFORM":
                       i = I("pin-to-view-transform", t), i.properties["offscreen-z-depth"] = D(t, "offscreen-z-depth"), i.properties["off-axis-limit"] = D(t, "off-axis-limit"), i.properties["transition-limit"] = D(t, "transition-limit")
               }
               return [r, i]
           }(e, t), i = [];
           for (let e = 0; e < t.children.length; e++) {
               let r = t.children.item(e);
               if (r.children) {
                   let e = P(n, r);
                   e && (i = i.concat(e))
               }
           }
           return n.bShouldAbort ? null : r ? (i.length > 0 && (r.children = i), [r]) : i.length > 0 ? 1 == i.length ? i : [{
               children: i
           }] : null
       }
       let V, x, L, B, N = [],
           F = null,
           H = null,
           A = null;

       function j(e, t) {
           return e + "::" + t
       }

       function U(e) {
           return e ? function(e) {
               return e && e.includes("::")
           }(e) ? e : j(W(), e) : null
       }

       function W() {
           var e, t;
           return null != (t = null === (e = VRHTML) || void 0 === e ? void 0 : e.VROverlay.ThisOverlayKey()) ? t : V
       }

       function z() {
           B = !0
       }

       function G(e) {
           e != A && (A = e, K())
       }

       function K() {
           F || (F = window.setTimeout(() => Object(r.a)(this, void 0, void 0, (function*() {
               let e = document.body;
               x && (e = x);
               let t = {
                   type: "root",
                   rootproperties: {
                       relatchDashboardTransform: B,
                       sceneCompositeMult: A
                   },
                   children: P({
                       currentPanel: null,
                       bShouldAbort: !1
                   }, e)
               };
               H || (console.log("Initializing sg_mailbox"), H = new s, yield H.Init("sg_mailbox", L));
               let n = {
                   type: "update_scene_graph",
                   owning_overlay_key: W(),
                   scene_graph: t,
                   retired_sgids: N
               };
               H.SendMessage("vrcompositor_systemlayer", n), F = null, N = [], B = !1
           })), 0))
       }

       function q(e, t) {
           return e ? {
               x: e.x ? e.x : t.x,
               y: e.y ? e.y : t.y
           } : t
       }

       function Q(e, t) {
           return e ? {
               x: e.x ? e.x : t.x,
               y: e.y ? e.y : t.y,
               z: e.z ? e.z : t.z
           } : t
       }

       function X(e, t) {
           return e ? {
               r: e.r ? e.r : t.r,
               g: e.g ? e.g : t.g,
               b: e.b ? e.b : t.b
           } : t
       }

       function Y(e) {
           if (e) return [e.x, e.y]
       }

       function Z(e) {
           var t;
           return null === (t = function(e) {
               if (e) return [e.x, e.y, e.z]
           }(e)) || void 0 === t ? void 0 : t.join(" ")
       }
       class J extends w.Component {
           constructor(e) {
               super(e), this.m_domRef = w.createRef(), this.m_buildNodeOverride = null, this.m_SGID = J.s_NextSGID, J.s_NextSGID = (J.s_NextSGID + 1) % 4294967296
           }
           setBuildNodeOverride(e) {
               this.m_buildNodeOverride = e
           }
           getSGID() {
               return this.m_SGID
           }
           getNodeType() {
               return "base"
           }
           createSgNode(e) {
               return I(this.getNodeType(), e)
           }
           getCurrentRootElement() {
               return this.m_domRef.current
           }
           componentDidMount() {
               this.m_buildNodeOverride && (this.m_domRef.current.buildNode = this.m_buildNodeOverride), K()
           }
           componentDidUpdate() {
               K()
           }
           componentWillUnmount() {
               var e;
               e = this.m_SGID, N.push(e), K(), this.m_domRef.current && this.m_buildNodeOverride && delete this.m_domRef.current.buildNode
           }
           render() {
               return w.cloneElement(this.internalRender(), {
                   id: this.props.id,
                   "vsg-type": this.getNodeType(),
                   sgid: this.m_SGID,
                   ref: this.m_domRef
               })
           }
           internalRender() {
               return this.m_buildNodeOverride ? w.createElement("vsg-node", null, this.props.children) : null
           }
       }
       J.s_NextSGID = 1;
       class $ extends J {
           constructor(e) {
               super(e), super.setBuildNodeOverride(this.buildNode)
           }
           getNodeType() {
               return "mountable"
           }
           buildNode(e, t) {
               return [e, this.createSgNode(t)]
           }
       }
       Object(r.b)([o.a], $.prototype, "buildNode", null);
       class ee extends J {
           constructor(e) {
               super(e), super.setBuildNodeOverride(this.buildNode)
           }
           getNodeType() {
               return "mountedscenegraph"
           }
           buildNode(e, t) {
               const n = this.createSgNode(t);
               return n.properties.mountable_id = U(this.props.mountedId), [e, n]
           }
       }
       Object(r.b)([o.a], ee.prototype, "buildNode", null);
       class te extends J {
           constructor(e) {
               var t;
               if (super(e), void 0 !== this.props.iconUri && void 0 !== this.props.iconOverlayKey) throw new Error("DashboardTab cannot have both an explicit iconUri and iconOverlayKey set in props.");
               super.setBuildNodeOverride(this.buildNode), this.m_sMountableUnqualifiedID = null != (t = e.mountableUnqualifiedID) ? t : this.getSGID() + "_mountable"
           }
           getNodeType() {
               return "dashboardtab"
           }
           buildNode(e, t) {
               var n;
               const r = this.createSgNode(t);
               return r.properties.tab_name = null != (n = this.props.tabName) ? n : "", r.properties.mountable_id = U(this.m_sMountableUnqualifiedID), r.properties.icon_uri = this.props.iconUri, r.properties.icon_overlay_key = this.props.iconOverlayKey, r.properties.summon_overlay_key = this.props.summonOverlayKey, [e, r]
           }
           internalRender() {
               return w.createElement("vsg-node", {
                   id: this.props.id
               }, w.createElement($, {
                   id: this.m_sMountableUnqualifiedID
               }, this.props.children))
           }
       }
       Object(r.b)([o.a], te.prototype, "buildNode", null);
       class ne extends J {
           constructor(e) {
               super(e), super.setBuildNodeOverride(this.buildNode)
           }
           getNodeType() {
               return "tint"
           }
           buildNode(e, t) {
               const n = this.createSgNode(t);
               if (this.props.color)
                   if ("string" == typeof this.props.color) n.properties.color = this.props.color;
                   else {
                       let e = X(this.props.color, {
                           r: 1,
                           g: 1,
                           b: 1
                       });
                       n.properties.color = [e.r, e.g, e.b]
                   }
               else n.properties.color = [1, 1, 1];
               return [e, n]
           }
       }
       Object(r.b)([o.a], ne.prototype, "buildNode", null);
       class re extends J {
           constructor(e) {
               super(e), super.setBuildNodeOverride(this.buildNode)
           }
           getNodeType() {
               return "opacity"
           }
           buildNode(e, t) {
               const n = this.createSgNode(t);
               return n.properties.opacity = this.props.value, [e, n]
           }
       }
       var ie, oe, se, ae, le, ce, de, ue, he, pe, me;
       Object(r.b)([o.a], re.prototype, "buildNode", null),
           function(e) {
               e[e.Seated = 0] = "Seated", e[e.Standing = 1] = "Standing", e[e.Raw = 2] = "Raw"
           }(ie || (ie = {}));
       class ge extends J {
           constructor(e) {
               super(e);
               if ((void 0 === e.parent_path ? 0 : 1) + (void 0 === e.parent_origin ? 0 : 1) + (void 0 === e.parent_id ? 0 : 1) > 1) throw new Error("Transform cannot have more than one parent_ property set.")
           }
           internalRender() {
               let e, t, n;
               this.props.transform ? (e = this.props.transform.translation, t = this.props.transform.rotation, n = this.props.transform.scale) : (e = Q(this.props.translation, {
                   x: 0,
                   y: 0,
                   z: 0
               }), t = b(p(Q(this.props.rotation, {
                   x: 0,
                   y: 0,
                   z: 0
               }), Math.PI / 180)), n = "number" == typeof this.props.scale ? {
                   x: this.props.scale,
                   y: this.props.scale,
                   z: this.props.scale
               } : Q(this.props.scale, {
                   x: 1,
                   y: 1,
                   z: 1
               }));
               let r = Z(e),
                   i = function(e) {
                       if (e) return e.w + " " + e.x + " " + e.y + " " + e.z
                   }(t),
                   o = Z(n);
               return w.createElement("vsg-transform", {
                   translation: r,
                   rotation: i,
                   scale: o,
                   "parent-path": this.props.parent_path,
                   "parent-origin": ie[this.props.parent_origin],
                   "parent-id": this.props.parent_id
               }, this.props.children)
           }
       }
       class be extends J {
           constructor(e) {
               super(e)
           }
           internalRender() {
               return w.createElement("vsg-tracking-state-visibility", {
                   "visible-0dof": this.props.visibleIn0DOF,
                   "visible-3dof": this.props.visibleIn3DOF,
                   "visible-6dof": this.props.visibleIn6DOF
               }, this.props.children)
           }
       }

       function ve(e) {
           if (e) return [e.u, e.v]
       }

       function _e(e) {
           switch (e) {
               case oe.TopLeft:
                   return {
                       x: -1, y: 1
                   };
               case oe.TopCenter:
                   return {
                       x: 0, y: 1
                   };
               case oe.TopRight:
                   return {
                       x: 1, y: 1
                   };
               case oe.CenterLeft:
                   return {
                       x: -1, y: 0
                   };
               case oe.Center:
                   return {
                       x: 0, y: 0
                   };
               case oe.CenterRight:
                   return {
                       x: 1, y: 0
                   };
               case oe.BottomLeft:
                   return {
                       x: -1, y: -1
                   };
               case oe.BottomCenter:
                   return {
                       x: 0, y: -1
                   };
               case oe.BottomRight:
                   return {
                       x: 1, y: -1
                   }
           }
       }! function(e) {
           e[e.TopLeft = 0] = "TopLeft", e[e.TopCenter = 1] = "TopCenter", e[e.TopRight = 2] = "TopRight", e[e.CenterLeft = 3] = "CenterLeft", e[e.Center = 4] = "Center", e[e.CenterRight = 5] = "CenterRight", e[e.BottomLeft = 6] = "BottomLeft", e[e.BottomCenter = 7] = "BottomCenter", e[e.BottomRight = 8] = "BottomRight"
       }(oe || (oe = {})),
       function(e) {
           e[e.Auto = 0] = "Auto", e[e.SingleTap = 1] = "SingleTap"
       }(se || (se = {})),
       function(e) {
           e[e.Mono = 0] = "Mono", e[e.Parallel = 1] = "Parallel", e[e.Crossed = 2] = "Crossed", e[e.Panorama = 3] = "Panorama", e[e.StackedPanorama = 4] = "StackedPanorama"
       }(ae || (ae = {})),
       function(e) {
           e[e.Visible = 0] = "Visible", e[e.SkipInSceneGraph = 1] = "SkipInSceneGraph", e[e.Hidden = 2] = "Hidden"
       }(le || (le = {}));
       class ye extends J {
           constructor(e) {
               super(e), this.m_Rect = {
                   x: 0,
                   y: 0,
                   width: 0,
                   height: 0
               }, this.m_nEmbeddedIndex = null, this.m_resizeObserver = null, this.m_UVsMin = void 0, this.m_UVsMax = void 0, this.m_bOverdragBlocking = !1, this.m_overdragBlockingElements = [];
               const t = void 0 !== this.props.rendermodel_component_device_index || void 0 !== this.props.rendermodel_component_name;
               if (t && (void 0 === this.props.rendermodel_component_device_index || void 0 === this.props.rendermodel_component_name)) throw new Error("Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.");
               if (void 0 === this.props.width && void 0 === this.props.height && void 0 === this.props.target_dpi_panel_id && !t) throw new Error("Panel requires either an explicit width, an explicit height, both an explicit width and height, a target_panel_dpi, or be a rendermodel panel.");
               if ((void 0 !== this.props.width || void 0 !== this.props.height) && void 0 !== this.props.target_dpi_panel_id) throw new Error("Panel cannot have both an explicit width/height and target_panel_dpi.");
               super.setBuildNodeOverride(this.buildNode)
           }
           isExternal() {
               return !!this.props.overlay_key
           }
           getEmbeddedIndex() {
               return this.m_nEmbeddedIndex
           }
           componentWillReceiveProps_UNSAFE() {
               ye.s_bPanelsAreDirty = !0
           }
           componentDidMount() {
               super.componentDidMount(), this.m_resizeObserver = new ResizeObserver(this.onResizeObserved), this.m_resizeObserver.observe(this.getCurrentRootElement()), this.m_nEmbeddedIndex = fe.Current().addEmbeddedPanelUVs(this), ye.s_bPanelsAreDirty = !0, this.getCurrentRootElement().addEventListener("mousedown", this.onPanelMouseDown), this.forceUpdate()
           }
           onResizeObserved(e, t) {
               fe.Current().forceLayoutUpdate()
           }
           componentWillUnmount() {
               this.m_resizeObserver && (this.m_resizeObserver.disconnect(), this.m_resizeObserver = null), this.stopOverDragBlocking(), this.getCurrentRootElement().removeEventListener("mousedown", this.onPanelMouseDown), ye.s_bPanelsAreDirty = !0, fe.Current().removeEmbeddedPanelUVs(this), super.componentWillUnmount()
           }
           onPanelMouseDown() {
               this.startOverDragBlocking()
           }
           startOverDragBlocking() {
               if (this.m_bOverdragBlocking) return;
               const e = document.body.getBoundingClientRect(),
                   t = this.getCurrentRootElement().getBoundingClientRect();
               this.createOverdragBlockingElement(0, 0, e.width, t.y), this.createOverdragBlockingElement(0, t.y + t.height, e.width, e.height - t.height - t.y), this.createOverdragBlockingElement(0, t.y, t.x, t.height), this.createOverdragBlockingElement(t.x + t.width, t.y, e.width - t.width - t.x, t.height), window.document.addEventListener("mouseup", this.onWindowMouseUp), this.m_bOverdragBlocking = !0
           }
           stopOverDragBlocking() {
               this.m_bOverdragBlocking && (this.m_overdragBlockingElements.forEach(e => {
                   document.body.removeChild(e)
               }), this.m_overdragBlockingElements = [], window.document.removeEventListener("mouseup", this.onWindowMouseUp), this.m_bOverdragBlocking = !1)
           }
           createOverdragBlockingElement(e, t, n, r) {
               let i = document.createElement("div");
               i.style.position = "absolute", i.style.top = t + "px", i.style.left = e + "px", i.style.width = n + "px", i.style.height = r + "px", i.style.zIndex = "90019001", this.m_overdragBlockingElements.push(i), document.body.appendChild(i)
           }
           onWindowMouseUp(e) {
               this.stopOverDragBlocking()
           }
           getNodeType() {
               return "panel"
           }
           get visibility() {
               var e;
               return null != (e = this.props.visibility) ? e : le.Visible
           }
           buildNode(e, t) {
               var n, r, i, o;
               if (this.visibility != le.Visible) return [e, null];
               let s = Object.assign({}, e),
                   a = this.createSgNode(t),
                   l = {
                       x: 0,
                       y: 0
                   };
               l = "object" == typeof this.props.origin ? q(this.props.origin, {
                   x: 0,
                   y: 0
               }) : _e(this.props.origin);
               const c = this.props.overlay_key,
                   d = W();
               return c && c.length > 0 ? a.properties.key = c : d ? a.properties.key = d : a.properties.overlay_handle = function() {
                   var e;
                   return null === (e = VRHTML) || void 0 === e ? void 0 : e.VROverlay.ThisOverlayHandle()
               }(), a.properties.uv_min = null != (n = ve(this.m_UVsMin)) ? n : void 0, a.properties.uv_max = null != (r = ve(this.m_UVsMax)) ? r : void 0, a.properties.width = null != (i = this.props.width) ? i : void 0, a.properties.height = null != (o = this.props.height) ? o : void 0, a.properties["target-dpi-panel-id"] = U(this.props.target_dpi_panel_id), a.properties["target-dpi-multiplier"] = this.props.target_dpi_multiplier, a.properties.curvature = this.props.curvature, a.properties["curvature-origin-id"] = U(this.props.curvature_origin_id), a.properties.interactive = this.props.interactive, a.properties.scrollable = this.props.scrollable, a.properties.modal = this.props.modal, a.properties["embedded-uv-index"] = this.m_nEmbeddedIndex, a.properties.origin = Y(l), a.properties.debug_name = this.props.debug_name, a.properties.sampler = this.props.sampler, a.properties.reflect = this.props.reflect, a.properties.stereoscopy = this.props.stereoscopy, a.properties.rendermodel_component_device_index = this.props.rendermodel_component_device_index, a.properties.rendermodel_component_name = this.props.rendermodel_component_name, a.properties["texture-id"] = U(this.props.texture_id), a.properties["sort-order"] = this.props.sort_order, a.properties["sort-depth-bias"] = this.props.sort_depth_bias, s.currentPanel = this, [s, a]
           }
           scaleLocalUVToGlobal(e) {
               const t = this.m_UVsMax.u - this.m_UVsMin.u,
                   n = this.m_UVsMax.v - this.m_UVsMin.v;
               return {
                   u: this.m_UVsMin.u + t * e.u,
                   v: this.m_UVsMin.v + n * e.v
               }
           }
           updateLayoutValues() {
               if (this.props.overlay_key) return this.m_UVsMin = this.props.uv_min, void(this.m_UVsMax = this.props.uv_max);
               this.m_Rect = this.getCurrentRootElement().getBoundingClientRect();
               let e = this.getCurrentRootElement().ownerDocument.defaultView;
               this.m_UVsMin = {
                   u: this.m_Rect.x / e.innerWidth,
                   v: this.m_Rect.y / e.innerHeight
               }, this.m_UVsMax = {
                   u: (this.m_Rect.x + this.m_Rect.width) / e.innerWidth,
                   v: (this.m_Rect.y + this.m_Rect.height) / e.innerHeight
               }
           }
           internalRender() {
               return w.createElement("vsg-node", {
                   style: {
                       display: this.visibility == le.Hidden ? "none" : null
                   }
               }, this.props.children)
           }
       }
       ye.s_bPanelsAreDirty = !1, Object(r.b)([o.a], ye.prototype, "onResizeObserved", null), Object(r.b)([o.a], ye.prototype, "onPanelMouseDown", null), Object(r.b)([o.a], ye.prototype, "onWindowMouseUp", null), Object(r.b)([o.a], ye.prototype, "buildNode", null);
       class fe extends w.Component {
           constructor(e) {
               super(e), this.m_DomRef = null, this.m_scalingDomRef = null, this.m_CanvasRef = null, this.m_DebugPointerRef = null, this.m_Observer = null, this.m_nEmbeddedDataWidth = 0, this.m_nPixelX = 0, this.m_CanvasContext = null, this.m_Pixels = null, this.m_mapPanels = new Map, this.m_rAvailableEmbeddedIndicesQueue = [], this.m_rEmbeddedIndicesToClear = [], this.m_nDirtyXMin = -1, this.m_nDirtyXMax = -1, this.m_fCurrentScale = 1, fe.s_Current = this, this.state = {
                   bFontsLoaded: !1,
                   nForcedUpdateNumber: 0,
                   bShowDebugPointer: !1
               }, this.m_DomRef = w.createRef(), this.m_scalingDomRef = w.createRef(), this.m_CanvasRef = w.createRef(), this.m_DebugPointerRef = w.createRef()
           }
           static get IsSceneGraphApp() {
               return null !== fe.Current()
           }
           static Current() {
               return fe.s_Current
           }
           toggleDebugPointer() {
               this.setState({
                   bShowDebugPointer: !this.state.bShowDebugPointer
               })
           }
           onMouseMove(e) {
               this.state.bShowDebugPointer && this.m_DebugPointerRef.current && (this.m_DebugPointerRef.current.style.transform = "translateX( " + e.clientX + "px ) translateY( " + e.clientY + "px )")
           }
           forceLayoutUpdate() {
               ye.s_bPanelsAreDirty = !0, this.setState({
                   nForcedUpdateNumber: this.state.nForcedUpdateNumber + 1
               })
           }
           componentDidMount() {
               let e = this.m_DomRef.current.ownerDocument,
                   t = e.defaultView;
               e.body.classList.add("SGApp"), document.documentElement.classList.add("VROverlay"), this.m_nEmbeddedDataWidth = t.innerWidth;
               let n = Math.max(0, Math.floor((this.m_nEmbeddedDataWidth - 1) / 3));
               for (let e = 0; e < n; e++) this.m_rAvailableEmbeddedIndicesQueue.push(e);
               var r, i, o;
               e.addEventListener("mousemove", this.onMouseMove), this.m_Observer = new MutationObserver(this.onMutation), this.m_Observer.observe(this.m_DomRef.current, {
                   attributes: !0,
                   attributeFilter: ["sg-forced-update-number", "overlay-key"],
                   childList: !0,
                   subtree: !0
               }), this.createEmbeddedData(), t.addEventListener("load", this.forceLayoutUpdate), e.fonts.ready.then(() => this.setState({
                   bFontsLoaded: !0
               })), t.forceLayoutUpdate = this.forceLayoutUpdate, t.toggleDebugPointer = this.toggleDebugPointer, (this.props.owning_overlay_key || this.props.web_secret) && (r = this.props.owning_overlay_key, i = this.m_DomRef.current, o = this.props.web_secret, V = r, x = i, L = o, console.log("Setting owning overlay key to " + r))
           }
           componentWillUnmount() {
               let e = this.m_DomRef.current.ownerDocument;
               e.body.classList.remove("SGApp"), document.documentElement.classList.remove("VROverlay"), this.m_Observer && this.m_Observer.disconnect(), e.removeEventListener("mousemove", this.onMouseMove)
           }
           render() {
               let e = [];
               return this.state.bShowDebugPointer && e.push("ShowDebugPointer"), w.createElement("vsg-app", {
                   class: e.join(" "),
                   ref: this.m_DomRef,
                   "sg-forced-update-number": this.state.nForcedUpdateNumber
               }, w.createElement("div", {
                   className: "DebugPointer",
                   ref: this.m_DebugPointerRef
               }), w.createElement("canvas", {
                   ref: this.m_CanvasRef,
                   className: "EmbeddedData",
                   height: fe.k_EmbeddedDataRows
               }), w.createElement("div", {
                   className: "AppSceneGraph",
                   ref: this.m_scalingDomRef
               }, this.state.bFontsLoaded && this.props.children))
           }
           addEmbeddedPanelUVs(e) {
               return 0 === this.m_rAvailableEmbeddedIndicesQueue.length ? null : (this.m_mapPanels.set(e.getSGID(), e), this.m_rAvailableEmbeddedIndicesQueue.shift())
           }
           removeEmbeddedPanelUVs(e) {
               this.m_mapPanels.has(e.getSGID()) && (this.m_mapPanels.delete(e.getSGID()), this.m_rAvailableEmbeddedIndicesQueue.push(e.getEmbeddedIndex()), this.m_rEmbeddedIndicesToClear.push(e.getEmbeddedIndex()))
           }
           onMutation(e, t) {
               this.updateAllPanelBounds()
           }
           createEmbeddedData() {
               this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth, this.m_CanvasContext = this.m_CanvasRef.current.getContext("2d"), this.m_CanvasContext.globalCompositeOperation = "copy", this.m_CanvasContext.imageSmoothingEnabled = !1, null === this.m_Pixels && (this.m_Pixels = this.m_CanvasContext.createImageData(this.m_nEmbeddedDataWidth, fe.k_EmbeddedDataRows)), this.updateAllPanelBounds()
           }
           updateAllPanelBounds() {
               let e = this.m_DomRef.current.ownerDocument.defaultView,
                   t = this.m_scalingDomRef.current.getBoundingClientRect(),
                   n = t.width / this.m_fCurrentScale,
                   r = t.height / this.m_fCurrentScale,
                   i = {
                       x: e.innerWidth / n,
                       y: e.innerHeight / r
                   },
                   o = Math.min(i.x, i.y, 1);
               o != this.m_fCurrentScale && (1 != o ? this.m_scalingDomRef.current.setAttribute("style", "transform: scale(" + o + "); transform-origin: top left") : this.m_scalingDomRef.current.removeAttribute("style"), this.m_fCurrentScale = o, ye.s_bPanelsAreDirty = !0), ye.s_bPanelsAreDirty && (this.m_mapPanels.forEach(e => e.updateLayoutValues()), K(), ye.s_bPanelsAreDirty = !1, this.updateEmbeddedData())
           }
           updateEmbeddedData() {
               if (!this.m_CanvasRef) return;
               this.m_nPixelX = 0, this.setPixel(0, "V".charCodeAt(0), "S".charCodeAt(0), "G".charCodeAt(0)), this.m_rEmbeddedIndicesToClear.forEach(e => {
                   let t = 1 + 3 * e;
                   for (let e = 0; e < 3; e++) this.setPixel(t + e, 0, 0, 0, 0)
               }), this.m_rEmbeddedIndicesToClear = [], this.m_mapPanels.forEach((e, t) => {
                   let n = e.m_Rect.x,
                       r = e.m_Rect.x + e.m_Rect.width,
                       i = e.m_Rect.y,
                       o = e.m_Rect.y + e.m_Rect.height,
                       s = 1 + 3 * e.getEmbeddedIndex();
                   if (e.isExternal() || n >= r || i >= o)
                       for (let e = 0; e < 3; e++) this.setPixel(s + 1, 0, 0, 0, 0);
                   else this.setPixel(s, (65280 & n) >> 8, 255 & n, 0), this.setPixel(s + 1, (65280 & r) >> 8, 255 & r, 255 & i), this.setPixel(s + 2, (65280 & o) >> 8, 255 & o, (65280 & i) >> 8)
               });
               let e = this.m_nDirtyXMax - this.m_nDirtyXMin + 1;
               this.m_CanvasContext.putImageData(this.m_Pixels, 0, 0, this.m_nDirtyXMin, 0, e, this.m_Pixels.height), this.m_nDirtyXMin = -1, this.m_nDirtyXMax = -1
           }
           setPixel(e, t, n, r, i = 255) {
               this.m_Pixels.data[4 * e + 0] = t, this.m_Pixels.data[4 * e + 1] = n, this.m_Pixels.data[4 * e + 2] = r, this.m_Pixels.data[4 * e + 3] = i, (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) && (this.m_nDirtyXMin = e), (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) && (this.m_nDirtyXMax = e)
           }
       }
       fe.s_Current = null, fe.k_EmbeddedDataRows = 1, Object(r.b)([i.bind], fe.prototype, "toggleDebugPointer", null), Object(r.b)([i.bind], fe.prototype, "onMouseMove", null), Object(r.b)([i.bind], fe.prototype, "forceLayoutUpdate", null), Object(r.b)([i.bind], fe.prototype, "onMutation", null);
       Object(r.b)([o.a], class extends J {
               constructor(e) {
                   super(e), super.setBuildNodeOverride(this.buildNode)
               }
               getNodeType() {
                   return "texture"
               }
               buildNode(e, t) {
                   const n = this.createSgNode(t);
                   return n.properties.id = this.props.id, n.properties.source = this.props.source, [e, n]
               }
           }.prototype, "buildNode", null),
           function(e) {
               e[e.None = 0] = "None", e[e.Backface = 1] = "Backface"
           }(ce || (ce = {}));
       class Se extends J {
           constructor(e) {
               super(e), super.setBuildNodeOverride(this.buildNode)
           }
           getNodeType() {
               return "rendermodel"
           }
           buildNode(e, t) {
               const n = this.createSgNode(t);
               if (n.properties.source = this.props.source, n.properties["texture-id"] = U(this.props["texture-id"]), this.props.fresnel) {
                   let e = this.props.fresnel;
                   if ("string" == typeof e.color) n.properties.color = e.color;
                   else {
                       let t = X(e.color, {
                           r: 0,
                           g: 0,
                           b: 0
                       });
                       n.properties.color = [t.r, t.g, t.b]
                   }
                   n.properties.opacity = e.opacity ? e.opacity : 1, n.properties.strength = e.strength ? e.strength : 1
               }
               return n.properties.wireframe = this.props.wireframe, n.properties.solid = this.props.solid, n.properties.culling = this.props.culling, n.properties["no-depth-write"] = this.props["no-depth-write"], n.properties["no-depth-test"] = this.props["no-depth-test"], [e, n]
           }
       }
       Object(r.b)([o.a], Se.prototype, "buildNode", null);
       class ke extends J {
           constructor(e) {
               super(e)
           }
           internalRender() {
               return w.createElement("vsg-line", {
                   "target-id": this.props.target_id,
                   thickness: this.props.thickness,
                   "start-buffer": this.props.start_buffer,
                   "end-buffer": this.props.end_buffer
               })
           }
       }
       class Ce extends J {
           constructor(e) {
               super(e)
           }
           internalRender() {
               return w.createElement("vsg-pin-to-view-transform", {
                   "offscreen-z-depth": this.props.fOffscreenZDepth,
                   "off-axis-limit": this.props.fOffAxisLimit,
                   "transition-limit": this.props.fTransitionLimit
               }, this.props.children)
           }
       }
       class we extends J {
           constructor(e) {
               super(e), this.m_latchedPosition = null, super.setBuildNodeOverride(this.buildNode)
           }
           getNodeType() {
               return "panel-anchor"
           }
           relatch() {
               this.m_latchedPosition = null
           }
           buildNode(e, t) {
               if (!e.currentPanel) return [Object.assign(Object.assign({}, e), {
                   bShouldAbort: !0
               }), null];
               let n = null;
               "object" == typeof this.props.location ? n = q(this.props.location, {
                   x: 0,
                   y: 0
               }) : "number" == typeof this.props.location && (n = _e(this.props.location));
               let r = this.createSgNode(t);
               if (this.props.latched && null !== this.m_latchedPosition) r.properties["anchor-u"] = this.m_latchedPosition.u, r.properties["anchor-v"] = this.m_latchedPosition.v;
               else if (n) {
                   const t = {
                           u: .5 * n.x + .5,
                           v: -.5 * n.y + .5
                       },
                       i = e.currentPanel.props.overlay_key ? t : e.currentPanel.scaleLocalUVToGlobal(t);
                   r.properties["anchor-u"] = i.u, r.properties["anchor-v"] = i.v
               } else {
                   const n = t.ownerDocument,
                       i = t.getBoundingClientRect(),
                       o = i.left + i.width / 2,
                       s = i.top + i.height / 2,
                       a = e.currentPanel.m_Rect;
                   if (o < a.x || o > a.x + a.width || s < a.y || s > a.y + a.height) return [Object.assign(Object.assign({}, e), {
                       bShouldAbort: !0
                   }), null];
                   const l = n.defaultView.innerWidth,
                       c = n.defaultView.innerHeight;
                   if (!(c > 0 && l > 0)) return [Object.assign(Object.assign({}, e), {
                       bShouldAbort: !0
                   }), null];
                   r.properties["anchor-u"] = o / l, r.properties["anchor-v"] = s / c
               }
               return this.m_latchedPosition = {
                   u: r.properties["anchor-u"],
                   v: r.properties["anchor-v"]
               }, [e, r]
           }
       }
       Object(r.b)([o.a], we.prototype, "buildNode", null);
       ! function(e) {
           e[e.LockedToParent = 0] = "LockedToParent", e[e.LockedToWorld = 1] = "LockedToWorld"
       }(de || (de = {}));
       class Oe extends J {
           constructor(e) {
               super(e)
           }
           internalRender() {
               let e = this.props.start_angle_threshold ? this.props.start_angle_threshold * Math.PI / 180 : null,
                   t = this.props.stop_angle_threshold ? this.props.stop_angle_threshold * Math.PI / 180 : null,
                   n = this.props.ease_out_angle_threshold ? this.props.ease_out_angle_threshold * Math.PI / 180 : null,
                   r = this.props.min_angular_velocity ? this.props.min_angular_velocity * Math.PI / 180 : null,
                   i = this.props.max_angular_velocity ? this.props.max_angular_velocity * Math.PI / 180 : null;
               return w.createElement("vsg-elastic-head-transform", {
                   "start-angle-threshold": e,
                   "stop-angle-threshold": t,
                   "ease-in-time": this.props.ease_in_time,
                   "ease-in-power": this.props.ease_in_power,
                   "ease-out-angle-threshold": n,
                   "ease-out-power": this.props.ease_out_power,
                   "min-angular-velocity": r,
                   "max-angular-velocity": i,
                   "lock-to-horizon": this.props.lock_to_horizon,
                   "translation-behavior": this.props.translation_behavior
               }, this.props.children)
           }
       }
       class De extends J {
           constructor(e) {
               super(e)
           }
           internalRender() {
               return w.createElement("vsg-head-facing-transform", null, this.props.children)
           }
       }

       function Re() {
           var e, t;
           return null != (t = null === (e = VRHTML) || void 0 === e ? void 0 : e.Environment()) ? t : ue.Unknown
       }! function(e) {
           e[e.Desktop = 1] = "Desktop", e[e.Overlay = 2] = "Overlay", e[e.Unknown = 100] = "Unknown"
       }(ue || (ue = {})), window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
           function(e) {
               e[e.Auto = 0] = "Auto", e[e.Low = 1] = "Low", e[e.Medium = 2] = "Medium", e[e.High = 3] = "High"
           }(he || (he = {})),
           function(e) {
               e[e.TrackingResult_Uninitialized = 1] = "TrackingResult_Uninitialized", e[e.TrackingResult_Calibrating_InProgress = 100] = "TrackingResult_Calibrating_InProgress", e[e.TrackingResult_Calibrating_OutOfRange = 101] = "TrackingResult_Calibrating_OutOfRange", e[e.TrackingResult_Running_OK = 200] = "TrackingResult_Running_OK", e[e.TrackingResult_Running_OutOfRange = 201] = "TrackingResult_Running_OutOfRange", e[e.TrackingResult_Fallback_RotationOnly = 300] = "TrackingResult_Fallback_RotationOnly"
           }(pe || (pe = {})),
           function(e) {
               e[e.Seated = 0] = "Seated", e[e.Standing = 1] = "Standing", e[e.RawAndUncalibrated = 2] = "RawAndUncalibrated"
           }(me || (me = {}));
       var Me, Ee, Te, Ie, Pe, Ve, xe, Le, Be, Ne, Fe, He, Ae, je, Ue, We, ze;
       ! function(e) {
           e[e.None = 0] = "None", e[e.Shown = 1] = "Shown", e[e.Hidden = 2] = "Hidden", e[e.Exposed = 3] = "Exposed", e[e.Moved = 4] = "Moved", e[e.Resized = 5] = "Resized", e[e.SizeChanged = 6] = "SizeChanged", e[e.Minimized = 7] = "Minimized", e[e.Maximized = 8] = "Maximized", e[e.Restored = 9] = "Restored", e[e.Enter = 10] = "Enter", e[e.Leave = 11] = "Leave", e[e.FocusGained = 12] = "FocusGained", e[e.FocusLost = 13] = "FocusLost", e[e.Close = 14] = "Close", e[e.TakeFocus = 15] = "TakeFocus", e[e.HitTest = 16] = "HitTest"
       }(Me || (Me = {})),
       function(e) {
           e[e.Activated = 0] = "Activated", e[e.Deactivated = 1] = "Deactivated"
       }(Ee || (Ee = {})),
       function(e) {
           e[e.NoDashboardTab = 8] = "NoDashboardTab", e[e.AcceptsGamepadEvents = 16] = "AcceptsGamepadEvents", e[e.ShowGamepadFocus = 32] = "ShowGamepadFocus", e[e.SendVRDiscreteScrollEvents = 64] = "SendVRDiscreteScrollEvents", e[e.SendVRTouchpadEvents = 128] = "SendVRTouchpadEvents", e[e.ShowTouchPadScrollWheel = 256] = "ShowTouchPadScrollWheel", e[e.TransferOwnershipToInternalProcess = 512] = "TransferOwnershipToInternalProcess", e[e.SideBySide_Parallel = 1024] = "SideBySide_Parallel", e[e.SideBySide_Crossed = 2048] = "SideBySide_Crossed", e[e.Panorama = 4096] = "Panorama", e[e.StereoPanorama = 8192] = "StereoPanorama", e[e.SortWithNonSceneOverlays = 16384] = "SortWithNonSceneOverlays", e[e.VisibleInDashboard = 32768] = "VisibleInDashboard", e[e.MakeOverlaysInteractiveIfVisible = 65536] = "MakeOverlaysInteractiveIfVisible", e[e.SendVRSmoothScrollEvents = 131072] = "SendVRSmoothScrollEvents", e[e.ProtectedContent = 262144] = "ProtectedContent", e[e.HideLaserIntersection = 524288] = "HideLaserIntersection", e[e.WantsModalBehavior = 1048576] = "WantsModalBehavior"
       }(Te || (Te = {})),
       function(e) {
           e[e.None = 0] = "None", e[e.Mouse = 1] = "Mouse"
       }(Ie || (Ie = {})),
       function(e) {
           e[e.Invalid = 0] = "Invalid", e[e.TrackingSystemName_String = 1e3] = "TrackingSystemName_String", e[e.ModelNumber_String = 1001] = "ModelNumber_String", e[e.SerialNumber_String = 1002] = "SerialNumber_String", e[e.RenderModelName_String = 1003] = "RenderModelName_String", e[e.WillDriftInYaw_Bool = 1004] = "WillDriftInYaw_Bool", e[e.ManufacturerName_String = 1005] = "ManufacturerName_String", e[e.TrackingFirmwareVersion_String = 1006] = "TrackingFirmwareVersion_String", e[e.HardwareRevision_String = 1007] = "HardwareRevision_String", e[e.AllWirelessDongleDescriptions_String = 1008] = "AllWirelessDongleDescriptions_String", e[e.ConnectedWirelessDongle_String = 1009] = "ConnectedWirelessDongle_String", e[e.DeviceIsWireless_Bool = 1010] = "DeviceIsWireless_Bool", e[e.DeviceIsCharging_Bool = 1011] = "DeviceIsCharging_Bool", e[e.DeviceBatteryPercentage_Float = 1012] = "DeviceBatteryPercentage_Float", e[e.StatusDisplayTransform_Matrix34 = 1013] = "StatusDisplayTransform_Matrix34", e[e.Firmware_UpdateAvailable_Bool = 1014] = "Firmware_UpdateAvailable_Bool", e[e.Firmware_ManualUpdate_Bool = 1015] = "Firmware_ManualUpdate_Bool", e[e.Firmware_ManualUpdateURL_String = 1016] = "Firmware_ManualUpdateURL_String", e[e.HardwareRevision_Uint64 = 1017] = "HardwareRevision_Uint64", e[e.FirmwareVersion_Uint64 = 1018] = "FirmwareVersion_Uint64", e[e.FPGAVersion_Uint64 = 1019] = "FPGAVersion_Uint64", e[e.VRCVersion_Uint64 = 1020] = "VRCVersion_Uint64", e[e.RadioVersion_Uint64 = 1021] = "RadioVersion_Uint64", e[e.DongleVersion_Uint64 = 1022] = "DongleVersion_Uint64", e[e.BlockServerShutdown_Bool = 1023] = "BlockServerShutdown_Bool", e[e.CanUnifyCoordinateSystemWithHmd_Bool = 1024] = "CanUnifyCoordinateSystemWithHmd_Bool", e[e.ContainsProximitySensor_Bool = 1025] = "ContainsProximitySensor_Bool", e[e.DeviceProvidesBatteryStatus_Bool = 1026] = "DeviceProvidesBatteryStatus_Bool", e[e.DeviceCanPowerOff_Bool = 1027] = "DeviceCanPowerOff_Bool", e[e.Firmware_ProgrammingTarget_String = 1028] = "Firmware_ProgrammingTarget_String", e[e.DeviceClass_Int32 = 1029] = "DeviceClass_Int32", e[e.HasCamera_Bool = 1030] = "HasCamera_Bool", e[e.DriverVersion_String = 1031] = "DriverVersion_String", e[e.Firmware_ForceUpdateRequired_Bool = 1032] = "Firmware_ForceUpdateRequired_Bool", e[e.ViveSystemButtonFixRequired_Bool = 1033] = "ViveSystemButtonFixRequired_Bool", e[e.ParentDriver_Uint64 = 1034] = "ParentDriver_Uint64", e[e.ResourceRoot_String = 1035] = "ResourceRoot_String", e[e.RegisteredDeviceType_String = 1036] = "RegisteredDeviceType_String", e[e.InputProfilePath_String = 1037] = "InputProfilePath_String", e[e.NeverTracked_Bool = 1038] = "NeverTracked_Bool", e[e.NumCameras_Int32 = 1039] = "NumCameras_Int32", e[e.CameraFrameLayout_Int32 = 1040] = "CameraFrameLayout_Int32", e[e.CameraStreamFormat_Int32 = 1041] = "CameraStreamFormat_Int32", e[e.AdditionalDeviceSettingsPath_String = 1042] = "AdditionalDeviceSettingsPath_String", e[e.ReportsTimeSinceVSync_Bool = 2e3] = "ReportsTimeSinceVSync_Bool", e[e.SecondsFromVsyncToPhotons_Float = 2001] = "SecondsFromVsyncToPhotons_Float", e[e.DisplayFrequency_Float = 2002] = "DisplayFrequency_Float", e[e.UserIpdMeters_Float = 2003] = "UserIpdMeters_Float", e[e.CurrentUniverseId_Uint64 = 2004] = "CurrentUniverseId_Uint64", e[e.PreviousUniverseId_Uint64 = 2005] = "PreviousUniverseId_Uint64", e[e.DisplayFirmwareVersion_Uint64 = 2006] = "DisplayFirmwareVersion_Uint64", e[e.IsOnDesktop_Bool = 2007] = "IsOnDesktop_Bool", e[e.DisplayMCType_Int32 = 2008] = "DisplayMCType_Int32", e[e.DisplayMCOffset_Float = 2009] = "DisplayMCOffset_Float", e[e.DisplayMCScale_Float = 2010] = "DisplayMCScale_Float", e[e.EdidVendorID_Int32 = 2011] = "EdidVendorID_Int32", e[e.DisplayMCImageLeft_String = 2012] = "DisplayMCImageLeft_String", e[e.DisplayMCImageRight_String = 2013] = "DisplayMCImageRight_String", e[e.DisplayGCBlackClamp_Float = 2014] = "DisplayGCBlackClamp_Float", e[e.EdidProductID_Int32 = 2015] = "EdidProductID_Int32", e[e.CameraToHeadTransform_Matrix34 = 2016] = "CameraToHeadTransform_Matrix34", e[e.DisplayGCType_Int32 = 2017] = "DisplayGCType_Int32", e[e.DisplayGCOffset_Float = 2018] = "DisplayGCOffset_Float", e[e.DisplayGCScale_Float = 2019] = "DisplayGCScale_Float", e[e.DisplayGCPrescale_Float = 2020] = "DisplayGCPrescale_Float", e[e.DisplayGCImage_String = 2021] = "DisplayGCImage_String", e[e.LensCenterLeftU_Float = 2022] = "LensCenterLeftU_Float", e[e.LensCenterLeftV_Float = 2023] = "LensCenterLeftV_Float", e[e.LensCenterRightU_Float = 2024] = "LensCenterRightU_Float", e[e.LensCenterRightV_Float = 2025] = "LensCenterRightV_Float", e[e.UserHeadToEyeDepthMeters_Float = 2026] = "UserHeadToEyeDepthMeters_Float", e[e.CameraFirmwareVersion_Uint64 = 2027] = "CameraFirmwareVersion_Uint64", e[e.CameraFirmwareDescription_String = 2028] = "CameraFirmwareDescription_String", e[e.DisplayFPGAVersion_Uint64 = 2029] = "DisplayFPGAVersion_Uint64", e[e.DisplayBootloaderVersion_Uint64 = 2030] = "DisplayBootloaderVersion_Uint64", e[e.DisplayHardwareVersion_Uint64 = 2031] = "DisplayHardwareVersion_Uint64", e[e.AudioFirmwareVersion_Uint64 = 2032] = "AudioFirmwareVersion_Uint64", e[e.CameraCompatibilityMode_Int32 = 2033] = "CameraCompatibilityMode_Int32", e[e.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034] = "ScreenshotHorizontalFieldOfViewDegrees_Float", e[e.ScreenshotVerticalFieldOfViewDegrees_Float = 2035] = "ScreenshotVerticalFieldOfViewDegrees_Float", e[e.DisplaySuppressed_Bool = 2036] = "DisplaySuppressed_Bool", e[e.DisplayAllowNightMode_Bool = 2037] = "DisplayAllowNightMode_Bool", e[e.DisplayMCImageWidth_Int32 = 2038] = "DisplayMCImageWidth_Int32", e[e.DisplayMCImageHeight_Int32 = 2039] = "DisplayMCImageHeight_Int32", e[e.DisplayMCImageNumChannels_Int32 = 2040] = "DisplayMCImageNumChannels_Int32", e[e.DisplayMCImageData_Binary = 2041] = "DisplayMCImageData_Binary", e[e.SecondsFromPhotonsToVblank_Float = 2042] = "SecondsFromPhotonsToVblank_Float", e[e.DriverDirectModeSendsVsyncEvents_Bool = 2043] = "DriverDirectModeSendsVsyncEvents_Bool", e[e.DisplayDebugMode_Bool = 2044] = "DisplayDebugMode_Bool", e[e.GraphicsAdapterLuid_Uint64 = 2045] = "GraphicsAdapterLuid_Uint64", e[e.DriverProvidedChaperonePath_String = 2048] = "DriverProvidedChaperonePath_String", e[e.ExpectedTrackingReferenceCount_Int32 = 2049] = "ExpectedTrackingReferenceCount_Int32", e[e.ExpectedControllerCount_Int32 = 2050] = "ExpectedControllerCount_Int32", e[e.NamedIconPathControllerLeftDeviceOff_String = 2051] = "NamedIconPathControllerLeftDeviceOff_String", e[e.NamedIconPathControllerRightDeviceOff_String = 2052] = "NamedIconPathControllerRightDeviceOff_String", e[e.NamedIconPathTrackingReferenceDeviceOff_String = 2053] = "NamedIconPathTrackingReferenceDeviceOff_String", e[e.DoNotApplyPrediction_Bool = 2054] = "DoNotApplyPrediction_Bool", e[e.CameraToHeadTransforms_Matrix34_Array = 2055] = "CameraToHeadTransforms_Matrix34_Array", e[e.DistortionMeshResolution_Int32 = 2056] = "DistortionMeshResolution_Int32", e[e.DriverIsDrawingControllers_Bool = 2057] = "DriverIsDrawingControllers_Bool", e[e.DriverRequestsApplicationPause_Bool = 2058] = "DriverRequestsApplicationPause_Bool", e[e.DriverRequestsReducedRendering_Bool = 2059] = "DriverRequestsReducedRendering_Bool", e[e.MinimumIpdStepMeters_Float = 2060] = "MinimumIpdStepMeters_Float", e[e.AudioBridgeFirmwareVersion_Uint64 = 2061] = "AudioBridgeFirmwareVersion_Uint64", e[e.ImageBridgeFirmwareVersion_Uint64 = 2062] = "ImageBridgeFirmwareVersion_Uint64", e[e.ImuToHeadTransform_Matrix34 = 2063] = "ImuToHeadTransform_Matrix34", e[e.ImuFactoryGyroBias_Vector3 = 2064] = "ImuFactoryGyroBias_Vector3", e[e.ImuFactoryGyroScale_Vector3 = 2065] = "ImuFactoryGyroScale_Vector3", e[e.ImuFactoryAccelerometerBias_Vector3 = 2066] = "ImuFactoryAccelerometerBias_Vector3", e[e.ImuFactoryAccelerometerScale_Vector3 = 2067] = "ImuFactoryAccelerometerScale_Vector3", e[e.ConfigurationIncludesLighthouse20Features_Bool = 2069] = "ConfigurationIncludesLighthouse20Features_Bool", e[e.Prop_AdditionalRadioFeatures_Uint64 = 2070] = "Prop_AdditionalRadioFeatures_Uint64", e[e.Prop_CameraWhiteBalance_Vector4_Array = 2071] = "Prop_CameraWhiteBalance_Vector4_Array", e[e.Prop_CameraDistortionFunction_Int32_Array = 2072] = "Prop_CameraDistortionFunction_Int32_Array", e[e.Prop_CameraDistortionCoefficients_Float_Array = 2073] = "Prop_CameraDistortionCoefficients_Float_Array", e[e.Prop_ExpectedControllerType_String = 2074] = "Prop_ExpectedControllerType_String", e[e.HmdTrackingStyle_Int32 = 2075] = "HmdTrackingStyle_Int32", e[e.DriverProvidedChaperoneVisibility_Bool = 2076] = "DriverProvidedChaperoneVisibility_Bool", e[e.HmdColumnCorrectionSettingPrefix_String = 2077] = "HmdColumnCorrectionSettingPrefix_String", e[e.CameraSupportsCompatibilityModes_Bool = 2078] = "CameraSupportsCompatibilityModes_Bool", e[e.SupportsRoomViewDepthProjection_Bool = 2079] = "SupportsRoomViewDepthProjection_Bool", e[e.DisplayAvailableFrameRates_Float_Array = 2080] = "DisplayAvailableFrameRates_Float_Array", e[e.DisplaySupportsRuntimeFramerateChange_Bool = 2084] = "DisplaySupportsRuntimeFramerateChange_Bool", e[e.DisplaySupportsAnalogGain_Bool = 2085] = "DisplaySupportsAnalogGain_Bool", e[e.DisplayMinAnalogGain_Float = 2086] = "DisplayMinAnalogGain_Float", e[e.DisplayMaxAnalogGain_Float = 2087] = "DisplayMaxAnalogGain_Float", e[e.DashboardScale_Float = 2091] = "DashboardScale_Float", e[e.IpdUIRangeMinMeters_Float = 2100] = "IpdUIRangeMinMeters_Float", e[e.IpdUIRangeMaxMeters_Float = 2101] = "IpdUIRangeMaxMeters_Float", e[e.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102] = "Hmd_SupportsHDCP14LegacyCompat_Bool", e[e.Hmd_SupportsMicMonitoring_Bool = 2103] = "Hmd_SupportsMicMonitoring_Bool", e[e.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303] = "Audio_SupportsDualSpeakerAndJackOutput_Bool", e[e.DriverRequestedMuraCorrectionMode_Int32 = 2200] = "DriverRequestedMuraCorrectionMode_Int32", e[e.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201] = "DriverRequestedMuraFeather_InnerLeft_Int32", e[e.DriverRequestedMuraFeather_InnerRight_Int32 = 2202] = "DriverRequestedMuraFeather_InnerRight_Int32", e[e.DriverRequestedMuraFeather_InnerTop_Int32 = 2203] = "DriverRequestedMuraFeather_InnerTop_Int32", e[e.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204] = "DriverRequestedMuraFeather_InnerBottom_Int32", e[e.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205] = "DriverRequestedMuraFeather_OuterLeft_Int32", e[e.DriverRequestedMuraFeather_OuterRight_Int32 = 2206] = "DriverRequestedMuraFeather_OuterRight_Int32", e[e.DriverRequestedMuraFeather_OuterTop_Int32 = 2207] = "DriverRequestedMuraFeather_OuterTop_Int32", e[e.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208] = "DriverRequestedMuraFeather_OuterBottom_Int32", e[e.AttachedDeviceId_String = 3e3] = "AttachedDeviceId_String", e[e.SupportedButtons_Uint64 = 3001] = "SupportedButtons_Uint64", e[e.Axis0Type_Int32 = 3002] = "Axis0Type_Int32", e[e.Axis1Type_Int32 = 3003] = "Axis1Type_Int32", e[e.Axis2Type_Int32 = 3004] = "Axis2Type_Int32", e[e.Axis3Type_Int32 = 3005] = "Axis3Type_Int32", e[e.Axis4Type_Int32 = 3006] = "Axis4Type_Int32", e[e.ControllerRoleHint_Int32 = 3007] = "ControllerRoleHint_Int32", e[e.FieldOfViewLeftDegrees_Float = 4e3] = "FieldOfViewLeftDegrees_Float", e[e.FieldOfViewRightDegrees_Float = 4001] = "FieldOfViewRightDegrees_Float", e[e.FieldOfViewTopDegrees_Float = 4002] = "FieldOfViewTopDegrees_Float", e[e.FieldOfViewBottomDegrees_Float = 4003] = "FieldOfViewBottomDegrees_Float", e[e.TrackingRangeMinimumMeters_Float = 4004] = "TrackingRangeMinimumMeters_Float", e[e.TrackingRangeMaximumMeters_Float = 4005] = "TrackingRangeMaximumMeters_Float", e[e.ModeLabel_String = 4006] = "ModeLabel_String", e[e.IconPathName_String = 5e3] = "IconPathName_String", e[e.NamedIconPathDeviceOff_String = 5001] = "NamedIconPathDeviceOff_String", e[e.NamedIconPathDeviceSearching_String = 5002] = "NamedIconPathDeviceSearching_String", e[e.NamedIconPathDeviceSearchingAlert_String = 5003] = "NamedIconPathDeviceSearchingAlert_String", e[e.NamedIconPathDeviceReady_String = 5004] = "NamedIconPathDeviceReady_String", e[e.NamedIconPathDeviceReadyAlert_String = 5005] = "NamedIconPathDeviceReadyAlert_String", e[e.NamedIconPathDeviceNotReady_String = 5006] = "NamedIconPathDeviceNotReady_String", e[e.NamedIconPathDeviceStandby_String = 5007] = "NamedIconPathDeviceStandby_String", e[e.NamedIconPathDeviceAlertLow_String = 5008] = "NamedIconPathDeviceAlertLow_String", e[e.DisplayHiddenArea_Binary_Start = 5100] = "DisplayHiddenArea_Binary_Start", e[e.DisplayHiddenArea_Binary_End = 5150] = "DisplayHiddenArea_Binary_End", e[e.ParentContainer = 5151] = "ParentContainer", e[e.UserConfigPath_String = 6e3] = "UserConfigPath_String", e[e.InstallPath_String = 6001] = "InstallPath_String", e[e.HasDisplayComponent_Bool = 6002] = "HasDisplayComponent_Bool", e[e.HasControllerComponent_Bool = 6003] = "HasControllerComponent_Bool", e[e.HasCameraComponent_Bool = 6004] = "HasCameraComponent_Bool", e[e.HasDriverDirectModeComponent_Bool = 6005] = "HasDriverDirectModeComponent_Bool", e[e.HasVirtualDisplayComponent_Bool = 6006] = "HasVirtualDisplayComponent_Bool", e[e.HasSpatialAnchorsSupport_Bool = 6007] = "HasSpatialAnchorsSupport_Bool", e[e.ControllerType_String = 7e3] = "ControllerType_String", e[e.LegacyInputProfile_String = 7001] = "LegacyInputProfile_String", e[e.VendorSpecific_Reserved_Start = 1e4] = "VendorSpecific_Reserved_Start", e[e.VendorSpecific_Reserved_End = 10999] = "VendorSpecific_Reserved_End", e[e.TrackedDeviceProperty_Max = 1e6] = "TrackedDeviceProperty_Max"
       }(Pe || (Pe = {})),
       function(e) {
           e[e.Invalid = 0] = "Invalid", e[e.HMD = 1] = "HMD", e[e.Controller = 2] = "Controller", e[e.GenericTracker = 3] = "GenericTracker", e[e.TrackingReference = 4] = "TrackingReference", e[e.DisplayRedirect = 5] = "DisplayRedirect"
       }(Ve || (Ve = {})),
       function(e) {
           e[e.Unknown = 0] = "Unknown", e[e.NVIDIA = 1] = "NVIDIA", e[e.AMD = 2] = "AMD"
       }(xe || (xe = {})),
       function(e) {
           e[e.None = 0] = "None", e[e.Starting = 1] = "Starting", e[e.Quitting = 2] = "Quitting", e[e.Running = 3] = "Running", e[e.Waiting = 4] = "Waiting"
       }(Le || (Le = {})),
       function(e) {
           e[e.ButtonPress_0 = 0] = "ButtonPress_0", e[e.ButtonPress_1 = 1] = "ButtonPress_1", e[e.ButtonPress_2 = 2] = "ButtonPress_2", e[e.ButtonPress_3 = 3] = "ButtonPress_3", e[e.CouldntFindSystemOverlay = 4] = "CouldntFindSystemOverlay", e[e.CouldntFindOrCreateClientOverlay = 5] = "CouldntFindOrCreateClientOverlay", e[e.ApplicationQuit = 6] = "ApplicationQuit"
       }(Be || (Be = {})),
       function(e) {
           e[e.Normal = 0] = "Normal", e[e.Password = 1] = "Password", e[e.Submit = 2] = "Submit"
       }(Ne || (Ne = {})),
       function(e) {
           e[e.SingleLine = 0] = "SingleLine", e[e.MultipleLines = 1] = "MultipleLines"
       }(Fe || (Fe = {})),
       function(e) {
           e[e.LaserMouse = 1] = "LaserMouse", e[e.Keyboard = 2] = "Keyboard", e[e.RoomView = 4] = "RoomView", e[e.DisplaySuppressed = 8] = "DisplaySuppressed", e[e.SystemButtonDown = 16] = "SystemButtonDown", e[e.DriverIsDrawingControllers = 32] = "DriverIsDrawingControllers", e[e.DriverRequestsApplicationPause = 64] = "DriverRequestsApplicationPause", e[e.DriverRequestsReducedRendering = 128] = "DriverRequestsReducedRendering"
       }(He || (He = {})),
       function(e) {
           e[e.BULK_DEFAULT = 0] = "BULK_DEFAULT", e[e.BULK_64K_DMA = 1] = "BULK_64K_DMA", e[e.BULK_16K_DMA = 2] = "BULK_16K_DMA", e[e.BULK_8K_DMA = 3] = "BULK_8K_DMA", e[e.ISO_52FPS = 4] = "ISO_52FPS", e[e.ISO_50FPS = 5] = "ISO_50FPS", e[e.ISO_48FPS = 6] = "ISO_48FPS", e[e.ISO_46FPS = 7] = "ISO_46FPS", e[e.ISO_44FPS = 8] = "ISO_44FPS", e[e.ISO_42FPS = 9] = "ISO_42FPS", e[e.ISO_40FPS = 10] = "ISO_40FPS", e[e.ISO_35FPS = 11] = "ISO_35FPS", e[e.ISO_30FPS = 12] = "ISO_30FPS", e[e.ISO_15FPS = 13] = "ISO_15FPS", e[e.MAX_CAMERA_COMPAT_MODES = 14] = "MAX_CAMERA_COMPAT_MODES"
       }(Ae || (Ae = {})),
       function(e) {
           e[e.None = 0] = "None", e[e.ThisSteamVR = 1] = "ThisSteamVR", e[e.AnotherSteamVR = 2] = "AnotherSteamVR", e[e.AnotherRuntime = 3] = "AnotherRuntime", e[e.Error = -1] = "Error"
       }(je || (je = {})),
       function(e) {
           e[e.TrackedControllerRole_Invalid = 0] = "TrackedControllerRole_Invalid", e[e.TrackedControllerRole_LeftHand = 1] = "TrackedControllerRole_LeftHand", e[e.TrackedControllerRole_RightHand = 2] = "TrackedControllerRole_RightHand", e[e.TrackedControllerRole_OptOut = 3] = "TrackedControllerRole_OptOut", e[e.TrackedControllerRole_Treadmill = 4] = "TrackedControllerRole_Treadmill", e[e.TrackedControllerRole_Max = 5] = "TrackedControllerRole_Max"
       }(Ue || (Ue = {})),
       function(e) {
           e[e.Unknown = 0] = "Unknown", e[e.Steam_VRButton = 1] = "Steam_VRButton", e[e.Steam_StartSteamVRApp = 2] = "Steam_StartSteamVRApp", e[e.Watchdog_Unknown = 10] = "Watchdog_Unknown", e[e.Watchdog_Controller = 11] = "Watchdog_Controller", e[e.Watchdog_Hmd = 12] = "Watchdog_Hmd", e[e.AppLaunch_Unknown = 20] = "AppLaunch_Unknown", e[e.AppLaunch_Steam = 21] = "AppLaunch_Steam", e[e.SteamVR_Restart = 30] = "SteamVR_Restart", e[e.SteamVR_VRStartup = 31] = "SteamVR_VRStartup"
       }(We || (We = {})),
       function(e) {
           e[e.Minimal = 1] = "Minimal", e[e.Modal = 2] = "Modal"
       }(ze || (ze = {}));
       class Ge extends w.Component {
           constructor(e) {
               super(e);
               let t = {};
               if (VRHTML) try {
                   let e = VRHTML.VRProperties.GetStringProperty(this.props.sDevicePath, Pe.RenderModelName_String);
                   if (e) {
                       let n = VRHTML.VRRenderModelsInternal.FindComponentForInputSource(e, this.props.sInputPath);
                       if (n) {
                           let r = VRHTML.VRRenderModels.GetComponentStateForDevicePath(e, n, this.props.sDevicePath);
                           r && (t.xfTransform = r.xfTrackingToComponentLocal)
                       }
                   }
               } catch (e) {
                   console.log("Component transform invalid for ", this.props.sDevicePath)
               }
               this.state = t
           }
           render() {
               return w.createElement(ge, {
                   id: this.props.id,
                   parent_path: this.props.sDevicePath,
                   transform: this.state.xfTransform
               }, this.props.children)
           }
       }
       class Ke extends J {
           constructor(e) {
               super(e)
           }
           internalRender() {
               return w.createElement("vsg-callout-transform", {
                   offset: Z(this.props.vOffset)
               }, this.props.children)
           }
       }
       class qe extends J {
           constructor(e) {
               super(e), super.setBuildNodeOverride(this.buildNode)
           }
           getNodeType() {
               return "dashboardtransform"
           }
           buildNode(e, t) {
               return [e, this.createSgNode(t)]
           }
       }
       Object(r.b)([o.a], qe.prototype, "buildNode", null), n.d(t, "c", (function() {
           return s
       })), n.d(t, "g", (function() {
           return a
       })), n.d(t, "a", (function() {
           return l
       })), n.d(t, "O", (function() {
           return c
       })), n.d(t, "gb", (function() {
           return d
       })), n.d(t, "hb", (function() {
           return u
       })), n.d(t, "U", (function() {
           return h
       })), n.d(t, "V", (function() {
           return p
       })), n.d(t, "M", (function() {
           return m
       })), n.d(t, "N", (function() {
           return g
       })), n.d(t, "H", (function() {
           return b
       })), n.d(t, "R", (function() {
           return v
       })), n.d(t, "T", (function() {
           return _
       })), n.d(t, "b", (function() {
           return y
       })), n.d(t, "I", (function() {
           return f
       })), n.d(t, "W", (function() {
           return S
       })), n.d(t, "h", (function() {
           return k
       })), n.d(t, "L", (function() {
           return C
       })), n.d(t, "j", (function() {
           return te
       })), n.d(t, "ib", (function() {
           return ne
       })), n.d(t, "X", (function() {
           return re
       })), n.d(t, "S", (function() {
           return ee
       })), n.d(t, "A", (function() {
           return ie
       })), n.d(t, "kb", (function() {
           return ge
       })), n.d(t, "jb", (function() {
           return be
       })), n.d(t, "f", (function() {
           return j
       })), n.d(t, "cb", (function() {
           return z
       })), n.d(t, "fb", (function() {
           return G
       })), n.d(t, "Q", (function() {
           return K
       })), n.d(t, "eb", (function() {
           return fe
       })), n.d(t, "u", (function() {
           return ce
       })), n.d(t, "db", (function() {
           return Se
       })), n.d(t, "P", (function() {
           return ke
       })), n.d(t, "bb", (function() {
           return Ce
       })), n.d(t, "Z", (function() {
           return we
       })), n.d(t, "s", (function() {
           return oe
       })), n.d(t, "t", (function() {
           return se
       })), n.d(t, "ab", (function() {
           return le
       })), n.d(t, "Y", (function() {
           return ye
       })), n.d(t, "F", (function() {
           return Oe
       })), n.d(t, "K", (function() {
           return De
       })), n.d(t, "e", (function() {
           return Ge
       })), n.d(t, "d", (function() {
           return Ke
       })), n.d(t, "k", (function() {
           return qe
       })), n.d(t, "G", (function() {
           return ue
       })), n.d(t, "i", (function() {
           return Re
       })), n.d(t, "q", (function() {
           return he
       })), n.d(t, "z", (function() {
           return me
       })), n.d(t, "nb", (function() {
           return 0
       })), n.d(t, "mb", (function() {
           return -1
       })), n.d(t, "m", (function() {
           return Ee
       })), n.d(t, "C", (function() {
           return Te
       })), n.d(t, "D", (function() {
           return Ie
       })), n.d(t, "y", (function() {
           return Pe
       })), n.d(t, "x", (function() {
           return Ve
       })), n.d(t, "J", (function() {
           return xe
       })), n.d(t, "v", (function() {
           return Le
       })), n.d(t, "B", (function() {
           return Be
       })), n.d(t, "p", (function() {
           return Ne
       })), n.d(t, "o", (function() {
           return Fe
       })), n.d(t, "l", (function() {
           return Ae
       })), n.d(t, "r", (function() {
           return je
       })), n.d(t, "w", (function() {
           return Ue
       })), n.d(t, "E", (function() {
           return We
       })), n.d(t, "n", (function() {
           return ze
       }));
       t.lb = VRHTML
   },
   "8GAN": function(e, t, n) {
       "use strict";
       n.d(t, "b", (function() {
           return u
       })), n.d(t, "a", (function() {
           return h
       })), n.d(t, "c", (function() {
           return p
       }));
       var r, i = n("mrSG"),
           o = n("q1tI"),
           s = n("7wIv"),
           a = n("/i/y"),
           l = n("GXif"),
           c = n("okNM"),
           d = n("hcOo");
       const u = "resetuniverseorigincountdown",
           h = "begin_reset_universe_origin_countdown";
       let p = r = class extends o.Component {
           constructor(e) {
               super(e), this.m_countdownTimeout = 0, this.m_fadeFinishTimeout = 0, this.m_mailbox = new a.c, this.m_mailbox.Init(u).then(() => {
                   this.m_mailbox.RegisterHandler(h, this.OnBeginResetUniverseOriginCountdown)
               }), this.state = {
                   visible: !1,
                   fading: !1,
                   countdown_seconds: 0
               }
           }
           componentWillUnmount() {
               clearTimeout(this.m_countdownTimeout), this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3), clearTimeout(this.m_fadeFinishTimeout), this.m_fadeFinishTimeout = 0
           }
           OnBeginResetUniverseOriginCountdown(e) {
               clearTimeout(this.m_countdownTimeout), this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3), clearTimeout(this.m_fadeFinishTimeout), this.m_fadeFinishTimeout = 0, this.setState({
                   visible: !0,
                   fading: !1,
                   countdown_seconds: e.countdown_seconds,
                   universe: e.universe
               })
           }
           CountdownTick() {
               var e;
               clearTimeout(this.m_countdownTimeout), 1 == this.state.countdown_seconds ? (this.m_countdownTimeout = 0, null === (e = a.lb) || void 0 === e || e.VRChaperone.ResetZeroPose(this.state.universe), clearTimeout(this.m_fadeFinishTimeout), this.m_fadeFinishTimeout = setTimeout(this.HideOverlay, r.kFadeDurationMs), this.setState({
                   visible: !0,
                   fading: !0,
                   countdown_seconds: 0
               })) : (this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3), this.setState({
                   visible: !0,
                   fading: !1,
                   countdown_seconds: this.state.countdown_seconds - 1
               }))
           }
           HideOverlay() {
               clearTimeout(this.m_fadeFinishTimeout), this.m_fadeFinishTimeout = 0, this.setState({
                   visible: !1,
                   fading: !1,
                   countdown_seconds: 0
               })
           }
           render() {
               var e, t;
               if (!this.state.visible) return null;
               let n = .8 * (null != (t = null === (e = a.lb) || void 0 === e ? void 0 : e.VRProperties.GetFloatProperty(a.nb, a.y.DashboardScale_Float)) ? t : 1);
               return o.createElement(a.kb, {
                   parent_path: "/user/head"
               }, o.createElement(a.kb, {
                   translation: {
                       y: -.05,
                       z: -.9
                   },
                   scale: n
               }, o.createElement(a.Y, {
                   width: void 0,
                   height: r.kPanelHeight,
                   interactive: !1,
                   sort_order: 1e3
               }, o.createElement("div", {
                   className: Object(d.a)("ResetSeatedCountdownParent", ["Fading", this.state.fading]),
                   style: {
                       width: r.kPixelWidth
                   }
               }, o.createElement("div", {
                   className: "FlexColumn"
               }, o.createElement("div", {
                   className: "ResetSeatedCountdownRow"
               }, o.createElement("div", {
                   className: "ResetSeatedCountdownText"
               }, this.state.countdown_seconds)), o.createElement("div", {
                   className: "ResetSeatedCountdownTextDesc"
               }, Object(l.c)("#Resetting_Countdown")))))))
           }
       };
       p.kPanelHeight = .2, p.kPixelWidth = 400, p.kFadeDurationMs = 1e3, Object(i.b)([s.bind], p.prototype, "OnBeginResetUniverseOriginCountdown", null), Object(i.b)([s.bind], p.prototype, "CountdownTick", null), Object(i.b)([s.bind], p.prototype, "HideOverlay", null), p = r = Object(i.b)([c.a], p)
   },
   Ck0r: function(e, t, n) {
       "use strict";
       n.d(t, "a", (function() {
           return i
       }));
       var r = n("q1tI");

       function i(e) {
           return r.createElement("svg", Object.assign({
               version: "1.1",
               xmlns: "http://www.w3.org/2000/svg",
               x: "0px",
               y: "0px",
               viewBox: "0 0 100 100",
               xmlSpace: "preserve"
           }, e), r.createElement("g", null, r.createElement("path", {
               d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z"
           })))
       }
   },
   Gmup: function(e, t, n) {
       "use strict";
       var r, i = n("mrSG"),
           o = n("/i/y"),
           s = n("7wIv"),
           a = n.n(s),
           l = n("q1tI"),
           c = n("6YgL"),
           d = n("7uy8"),
           u = n("GXif"),
           h = n("Q+Z6"),
           p = n("okNM"),
           m = n("YRJX"),
           g = n("2vnA"),
           b = n("X3sx"),
           v = n("p9CI");
       var _;
       ! function(e) {
           e[e.Dashboard = 0] = "Dashboard", e[e.LeftHand = 1] = "LeftHand", e[e.RightHand = 2] = "RightHand"
       }(_ || (_ = {}));
       let y = r = class extends l.Component {
           constructor(e) {
               super(e), this.m_mailbox = new o.c, this.state = {
                   desktopView: null,
                   leftHandDock: null,
                   rightHandDock: null,
                   bKeyboardVisible: !1
               }, this.m_mailbox.Init(r.k_sMailboxName).then(() => {})
           }
           setSiblingReferences(e, t, n) {
               this.setState({
                   desktopView: e,
                   leftHandDock: t,
                   rightHandDock: n
               })
           }
           componentDidUpdate(e, t) {
               var n;
               if (!this.props.visible && this.state.bKeyboardVisible && this.setState({
                       bKeyboardVisible: !1
                   }), t.bKeyboardVisible != this.state.bKeyboardVisible)
                   if (this.state.bKeyboardVisible) {
                       let e = "" != this.state.desktopView.state.currentWindowOverlayKey ? this.state.desktopView.state.currentWindowOverlayKey : "system.desktop." + (null === (n = this.state.desktopView) || void 0 === n ? void 0 : n.currentDesktopIndex);
                       VRHTML.VROverlay.ShowKeyboardForOverlay(e, o.p.Normal, o.o.SingleLine, o.n.Minimal, "Desktop Text", 1024, "", 0), VRHTML.VROverlay.SetKeyboardPositionForOverlay(e, {})
                   } else VRHTML.VROverlay.HideKeyboard()
           }
           CloseWindow() {
               let e = "";
               this.props.mapWindows.forEach(t => {
                   var n;
                   t.overlay_key == (null === (n = this.state.desktopView) || void 0 === n ? void 0 : n.state.currentWindowOverlayKey) && (e = t.hwnd)
               });
               let t = {
                   type: "request_destroy_window_view",
                   hwnd: e
               };
               this.m_mailbox.SendMessage("desktopview", t)
           }
           ToggleKeyboard() {
               this.setState(e => ({
                   bKeyboardVisible: !e.bKeyboardVisible
               }))
           }
           render() {
               var e, t, n, r, i, s, a, c, p, g;
               if (!this.state.desktopView || (null === (e = this.state.desktopView) || void 0 === e ? void 0 : e.state.bIsUsingSteamDesktop)) return null;
               const y = h.d.settings.get(d.v) || (null === (t = this.state.desktopView) || void 0 === t ? void 0 : t.state.desktopIndices.length) > 1;
               return l.createElement(m.f, Object.assign({}, this.props, {
                   additionalClassNames: h.d.settings.get(d.v) ? "DesktopTray FixedWidth" : "DesktopTray"
               }), y && l.createElement(v.b, {
                   scrollDirection: v.a.Horizontal,
                   className: "Section Grow",
                   style: {
                       marginRight: 0
                   }
               }, null === (n = this.state.desktopView) || void 0 === n ? void 0 : n.state.desktopIndices.map(e => {
                   var t;
                   return l.createElement(m.n, {
                       key: e,
                       label: e.toString(),
                       active: (null === (t = this.state.desktopView) || void 0 === t ? void 0 : t.currentDesktopIndex) == e,
                       title: Object(u.c)("#Desktop_X", e),
                       onClick: () => {
                           var t;
                           return null === (t = this.state.desktopView) || void 0 === t ? void 0 : t.onDesktopChange(e)
                       }
                   })
               }), Array.from(null === (r = this.state.desktopView) || void 0 === r ? void 0 : r.state.mapWindowInfo.keys()).map(e => {
                   var t, n;
                   return l.createElement(m.n, {
                       iconUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                       key: e,
                       active: (null === (t = this.state.desktopView) || void 0 === t ? void 0 : t.state.currentWindowOverlayKey) == e,
                       title: null === (n = this.state.desktopView) || void 0 === n ? void 0 : n.state.mapWindowInfo.get(e).sTitle,
                       onClick: () => {
                           var t;
                           return null === (t = this.state.desktopView) || void 0 === t ? void 0 : t.onWindowViewChange(e)
                       }
                   })
               })), h.d.settings.get(d.v) && l.createElement("div", {
                   className: "Section",
                   style: {
                       marginRight: 0
                   }
               }, l.createElement(m.n, {
                   iconUrl: "/dashboard/images/icons/icon_add.png",
                   additionalClassNames: "AddWindow",
                   title: Object(u.c)("#AddWindow"),
                   onClick: this.props.onToggleWindowList,
                   onMouseEnter: this.props.onClearPopupMenuTimeout,
                   onMouseLeave: () => this.props.onStartPopupMenuTimeout(500)
               })), l.createElement("div", {
                   className: "Section"
               }, l.createElement("div", {
                   className: "Label"
               }, Object(u.c)("#Size")), l.createElement(b.a, {
                   min: .75,
                   max: 1.5,
                   value: null === (i = this.state.desktopView) || void 0 === i ? void 0 : i.desktopViewScale,
                   onChange: null === (s = this.state.desktopView) || void 0 === s ? void 0 : s.onDesktopScaleChange,
                   valueStyleVariant: b.c.OnHandle,
                   detents: [1],
                   renderValue: e => (100 * e).toFixed(0) + "%",
                   enabled: (null === (a = this.state.desktopView) || void 0 === a ? void 0 : a.state.currentOverlayDockLocation) == _.Dashboard
               }), h.d.settings.get(d.v) && l.createElement(m.n, {
                   additionalClassNames: "CloseWindow",
                   iconUrl: "/dashboard/images/icons/icon_close_black.png",
                   title: "Close Window",
                   onClick: this.CloseWindow,
                   enabled: "" != (null === (c = this.state.desktopView) || void 0 === c ? void 0 : c.state.currentWindowOverlayKey)
               }), l.createElement(m.n, {
                   iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                   title: this.state.bKeyboardVisible ? Object(u.c)("#HideKeyboardTooltip") : Object(u.c)("#ShowKeyboardTooltip"),
                   additionalClassNames: "Keyboard",
                   onClick: this.ToggleKeyboard
               }), h.d.settings.get(d.v) && l.createElement(m.n, {
                   iconUrl: "/dashboard/images/icons/mirror_left.png",
                   title: this.state.desktopView.state.currentOverlayDockLocation != _.LeftHand ? "Dock on Left Controller" : "Undock from Left Controller",
                   onClick: () => {
                       this.state.desktopView.state.currentOverlayDockLocation != _.LeftHand ? this.props.onDockOverlay(this.state.desktopView.currentOverlayKey, _.LeftHand) : this.props.onDockOverlay(this.state.leftHandDock.state.currentOverlayKey, _.Dashboard)
                   },
                   enabled: VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(o.w.TrackedControllerRole_LeftHand) != o.mb,
                   active: (null === (p = this.state.desktopView) || void 0 === p ? void 0 : p.state.currentOverlayDockLocation) == _.LeftHand
               }), h.d.settings.get(d.v) && l.createElement(m.n, {
                   iconUrl: "/dashboard/images/icons/mirror_right.png",
                   title: this.state.desktopView.state.currentOverlayDockLocation != _.RightHand ? "Dock on Right Controller" : "Undock from Right Controller",
                   onClick: () => {
                       this.state.desktopView.state.currentOverlayDockLocation != _.RightHand ? this.props.onDockOverlay(this.state.desktopView.currentOverlayKey, _.RightHand) : this.props.onDockOverlay(this.state.rightHandDock.state.currentOverlayKey, _.Dashboard)
                   },
                   enabled: VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(o.w.TrackedControllerRole_RightHand) != o.mb,
                   active: (null === (g = this.state.desktopView) || void 0 === g ? void 0 : g.state.currentOverlayDockLocation) == _.RightHand
               }), l.createElement(m.n, {
                   iconUrl: this.props.darkMode ? "/dashboard/images/icons/svr_nightmode.svg" : "/dashboard/images/icons/svr_lightmode.svg",
                   title: Object(u.c)("#Settings_ToggleDarkMode"),
                   onClick: this.props.onToggleDarkMode
               })))
           }
       };
       y.k_sMailboxName = "systemui_desktoptray", Object(i.b)([a.a], y.prototype, "CloseWindow", null), Object(i.b)([a.a], y.prototype, "ToggleKeyboard", null), y = r = Object(i.b)([p.a], y);
       let f = class extends l.Component {
           constructor(e) {
               super(e), this.state = {
                   bIsUsingSteamDesktop: !1,
                   bIsReady: !1,
                   desktopIndices: [],
                   mapWindowInfo: new Map,
                   mapDesktopInfo: new Map,
                   currentWindowOverlayKey: "",
                   currentOverlayDockLocation: _.Dashboard
               }
           }
           componentDidMount() {
               var e, t, n;
               null === (null === (e = VRHTML) || void 0 === e ? void 0 : e.VROverlay.FindOverlay("valve.steam.desktop")) ? (null === (t = VRHTML) || void 0 === t || t.RegisterForDesktopViewReadyEvents(this.onDesktopViewReady), null === (n = VRHTML) || void 0 === n || n.RegisterForDesktopViewUpdatingEvents(this.onDesktopViewUpdating), this.updateDesktopIndices()) : this.setState({
                   bIsUsingSteamDesktop: !0
               })
           }
           get desktopViewScaleSettingKey() {
               return "/settings/dashboard/desktopScale" + this.currentDesktopIndex
           }
           get desktopCount() {
               return this.state.desktopIndices.length
           }
           get currentOverlayKey() {
               return "" != this.state.currentWindowOverlayKey ? this.state.currentWindowOverlayKey : "system.desktop." + this.currentDesktopIndex
           }
           get currentDesktopIndex() {
               var e;
               return "" != this.state.currentWindowOverlayKey ? -1 : null != (e = h.d.settings.get("/settings/dashboard/desktopIndex")) ? e : 1
           }
           get desktopViewScale() {
               var e;
               return null != (e = h.d.settings.get(this.desktopViewScaleSettingKey)) ? e : 1
           }
           get statusBarTitle() {
               return "" != this.state.currentWindowOverlayKey ? this.state.mapWindowInfo.get(this.state.currentWindowOverlayKey).sTitle : "Desktop " + this.currentDesktopIndex
           }
           dockOverlay(e, t) {
               this.state.mapDesktopInfo.forEach(e => {
                   e.dockLocation == t && (e.dockLocation = _.Dashboard)
               }), this.state.mapWindowInfo.forEach(e => {
                   e.dockLocation == t && (e.dockLocation = _.Dashboard)
               }), e.startsWith("system.desktop.") ? this.state.mapDesktopInfo.get(parseInt(e.charAt(e.length - 1))).dockLocation = t : this.state.mapWindowInfo.get(e).dockLocation = t, this.currentDesktopIndex != parseInt(e.charAt(e.length - 1)) && this.state.currentWindowOverlayKey != e || this.setState({
                   currentOverlayDockLocation: t
               })
           }
           onDesktopScaleChange(e) {
               h.d.SetSettingsValue(this.desktopViewScaleSettingKey, e)
           }
           onDesktopChange(e) {
               h.d.SetSettingsValue("/settings/dashboard/desktopIndex", e), this.setState({
                   currentWindowOverlayKey: "",
                   currentOverlayDockLocation: this.state.mapDesktopInfo.get(e).dockLocation
               })
           }
           onDesktopViewUpdating() {
               this.setState({
                   bIsReady: !1,
                   desktopIndices: []
               })
           }
           onDesktopViewReady() {
               this.updateDesktopIndices()
           }
           onWindowViewCreated(e, t, n) {
               this.state.mapWindowInfo.set(e, {
                   sTitle: t,
                   sProductName: n,
                   dockLocation: _.Dashboard
               }), this.setState({
                   currentWindowOverlayKey: e,
                   currentOverlayDockLocation: _.Dashboard
               })
           }
           onWindowViewDestroyed(e) {
               this.state.currentWindowOverlayKey == e && this.onDesktopChange(1), this.state.mapWindowInfo.delete(e)
           }
           onWindowViewChange(e) {
               this.setState({
                   currentWindowOverlayKey: e,
                   currentOverlayDockLocation: this.state.mapWindowInfo.get(e).dockLocation
               })
           }
           updateDesktopIndices() {
               var e, t;
               let n = 1,
                   r = [];
               for (this.state.mapDesktopInfo.clear(); null !== (null === (e = VRHTML) || void 0 === e ? void 0 : e.VROverlay.FindOverlay("system.desktop." + n));) r.push(n), this.state.mapDesktopInfo.set(n, {
                   dockLocation: _.Dashboard
               }), n++;
               (null != (t = h.d.settings.get("/settings/dashboard/desktopIndex")) ? t : 1) > r.length && h.d.SetSettingsValue("/settings/dashboard/desktopIndex", 1), this.setState({
                   bIsReady: !0,
                   desktopIndices: r
               })
           }
           render() {
               var e;
               if (!this.props.visible) return null;
               if (this.state.bIsUsingSteamDesktop) return l.createElement(o.S, {
                   mountedId: Object(o.f)(d.E, "valve.steam.desktop")
               });
               if (!this.state.bIsReady) return l.createElement(m.h, {
                   visible: !0
               }, l.createElement("div", {
                   className: "NoDesktopFound"
               }, l.createElement("h2", null, "Desktop views updating...")));
               if (0 === this.state.desktopIndices.length) return l.createElement(m.h, {
                   visible: !0
               }, l.createElement("div", {
                   className: "NoDesktopFound"
               }, l.createElement("h2", null, "No desktop found.")));
               if (this.state.currentOverlayDockLocation != _.Dashboard) return l.createElement(m.h, {
                   visible: !0
               }, l.createElement("div", {
                   className: "NoDesktopFound"
               }, l.createElement("h2", null, this.state.currentOverlayDockLocation == _.LeftHand && "Docked on left controller.", this.state.currentOverlayDockLocation == _.RightHand && "Docked on right controller."), l.createElement(c.a, {
                   className: "ButtonControl",
                   onClick: () => {
                       this.props.onDockOverlay(this.currentOverlayKey, _.Dashboard)
                   }
               }, "Dock Here")));
               let t = null != (e = h.d.settings.get(this.desktopViewScaleSettingKey)) ? e : 1;
               return -1 == this.currentDesktopIndex ? l.createElement(l.Fragment, null, l.createElement(o.Y, {
                   overlay_key: this.state.currentWindowOverlayKey,
                   height: 2 * t,
                   curvature_origin_id: d.j,
                   interactive: !0,
                   origin: o.s.BottomCenter,
                   debug_name: "System Desktop"
               }, l.createElement(o.Z, {
                   id: m.r,
                   location: o.s.TopCenter
               }), l.createElement(o.S, {
                   mountedId: Object(o.f)(d.E, "windowcursor")
               }))) : l.createElement(l.Fragment, null, l.createElement(o.Y, {
                   overlay_key: "system.desktop." + this.currentDesktopIndex,
                   height: 2 * t,
                   curvature_origin_id: d.j,
                   interactive: !0,
                   origin: o.s.BottomCenter,
                   debug_name: "System Desktop"
               }, l.createElement(o.Z, {
                   id: m.r,
                   location: o.s.TopCenter
               }), l.createElement(o.S, {
                   mountedId: Object(o.f)(d.E, "desktopcursor" + this.currentDesktopIndex)
               })))
           }
       };
       Object(i.b)([g.f], f.prototype, "desktopCount", null), Object(i.b)([g.f], f.prototype, "currentOverlayKey", null), Object(i.b)([g.f], f.prototype, "currentDesktopIndex", null), Object(i.b)([g.f], f.prototype, "desktopViewScale", null), Object(i.b)([g.f], f.prototype, "statusBarTitle", null), Object(i.b)([a.a], f.prototype, "dockOverlay", null), Object(i.b)([a.a], f.prototype, "onDesktopScaleChange", null), Object(i.b)([a.a], f.prototype, "onDesktopChange", null), Object(i.b)([a.a], f.prototype, "onDesktopViewUpdating", null), Object(i.b)([a.a], f.prototype, "onDesktopViewReady", null), Object(i.b)([a.a], f.prototype, "onWindowViewChange", null), f = Object(i.b)([p.a], f);
       let S = class extends l.Component {
           constructor(e) {
               super(e), this.state = {
                   currentOverlayKey: "",
                   fWindowScale: .25
               }
           }
           onWindowViewDestroyed(e) {
               this.state.currentOverlayKey == e && this.setState({
                   currentOverlayKey: ""
               })
           }
           onWindowScaleChanged(e) {
               this.setState({
                   fWindowScale: e
               })
           }
           dockOverlay(e, t) {
               t == this.props.dockLocation ? this.setState({
                   currentOverlayKey: e
               }) : e == this.state.currentOverlayKey && this.setState({
                   currentOverlayKey: ""
               })
           }
           render() {
               return "" == this.state.currentOverlayKey ? null : this.props.visible ? l.createElement(o.kb, {
                   parent_path: this.props.dockLocation == _.LeftHand ? "/user/hand/left" : "/user/hand/right",
                   translation: {
                       y: .1,
                       z: .1
                   }
               }, l.createElement(o.kb, {
                   rotation: this.props.dockLocation == _.LeftHand ? {
                       x: -60,
                       y: 90
                   } : {
                       x: -60,
                       y: -90
                   }
               }, l.createElement(o.kb, null, l.createElement(o.kb, {
                   translation: {
                       y: -.125
                   }
               }, l.createElement(o.Y, {
                   overlay_key: this.state.currentOverlayKey,
                   height: this.state.fWindowScale,
                   width: void 0,
                   interactive: !0,
                   origin: o.s.BottomCenter
               }, l.createElement(o.S, {
                   mountedId: Object(o.f)(d.E, "windowcursor")
               }))), l.createElement(o.kb, {
                   translation: {
                       y: -.15
                   }
               }, l.createElement(o.Y, {
                   height: .025,
                   width: void 0,
                   interactive: !0,
                   origin: o.s.BottomCenter
               }, l.createElement("div", {
                   className: "WindowTray"
               }, l.createElement(b.a, {
                   additionalClassName: "WindowTraySlider",
                   min: .25,
                   max: 1,
                   value: this.state.fWindowScale,
                   valueStyleVariant: b.c.OnHandle,
                   onChange: this.onWindowScaleChanged,
                   detents: [.5],
                   renderValue: e => (100 * e).toFixed(0) + "%"
               }), l.createElement(c.a, {
                   className: "WindowTrayButton",
                   key: "undock",
                   onClick: () => {
                       this.props.onDockOverlay(this.state.currentOverlayKey, _.Dashboard)
                   }
               }, "Undock"))))))) : l.createElement(o.kb, {
                   parent_path: this.props.dockLocation == _.LeftHand ? "/user/hand/left" : "/user/hand/right",
                   translation: {
                       y: .1,
                       z: .1
                   }
               }, l.createElement(o.kb, {
                   rotation: this.props.dockLocation == _.LeftHand ? {
                       x: -60,
                       y: 90
                   } : {
                       x: -60,
                       y: -90
                   }
               }, l.createElement(o.kb, {
                   translation: {
                       y: -.125
                   }
               }, l.createElement(o.Y, {
                   overlay_key: this.state.currentOverlayKey,
                   height: this.state.fWindowScale,
                   width: void 0,
                   interactive: !0,
                   origin: o.s.BottomCenter
               }, l.createElement(o.S, {
                   mountedId: Object(o.f)(d.E, "windowcursor")
               })))))
           }
       };
       Object(i.b)([a.a], S.prototype, "onWindowViewDestroyed", null), Object(i.b)([a.a], S.prototype, "onWindowScaleChanged", null), Object(i.b)([a.a], S.prototype, "dockOverlay", null), S = Object(i.b)([p.a], S);
       var k, C = n("hcOo");
       let w = k = class extends l.Component {
           constructor(e) {
               super(e), this.m_imageSources = [], this.m_imageIndex = -1, this.updateImageSources(), this.state = {
                   image: null
               }
           }
           updateImageSources() {
               let e = [],
                   t = this.props.imageUrl.replace(/header\.jpg$/, "library_600x900.jpg");
               t !== this.props.imageUrl && (e.push(t), e.push(this.props.imageUrl.replace(/header\.jpg$/, "portrait.png"))), e.push(this.props.imageUrl), this.props.fallbackImageUrl && e.push(this.props.fallbackImageUrl), this.m_imageSources = e.filter(e => !k.s_failedImages.includes(e)), this.m_imageIndex = -1
           }
           componentDidMount() {
               this.m_imageIndex < 0 && (this.m_loadingImage = new window.Image, this.loadNextImage())
           }
           componentWillUnmount() {
               this.m_loadingImage && (this.m_loadingImage.onerror = null, this.m_loadingImage.onload = null, this.m_loadingImage = null)
           }
           componentDidUpdate(e) {
               this.props.imageUrl != e.imageUrl && (this.setState({
                   image: null
               }), this.updateImageSources(), this.loadNextImage())
           }
           loadNextImage() {
               this.m_imageIndex >= 0 && this.m_imageIndex < this.m_imageSources.length && k.s_failedImages.push(this.m_imageSources[this.m_imageIndex]), this.m_imageIndex++, this.m_imageIndex < this.m_imageSources.length ? (this.m_loadingImage.onerror = this.loadNextImage, this.m_loadingImage.onload = this.onLoad, this.m_loadingImage.src = this.m_imageSources[this.m_imageIndex]) : this.onError()
           }
           onLoad() {
               this.setState({
                   image: this.m_loadingImage.src,
                   width: this.m_loadingImage.width,
                   height: this.m_loadingImage.height,
                   isFallback: this.props.fallbackImageUrl && this.m_imageIndex == this.m_imageSources.length - 1
               })
           }
           onError() {
               this.setState({
                   isFallback: !0
               })
           }
           render() {
               let e = {
                       backgroundImage: `url(${this.state.image})`
                   },
                   t = l.createElement("div", {
                       className: "Icon",
                       style: e
                   });
               return this.state.width / this.state.height != 600 / 900 && (t = l.createElement(l.Fragment, null, l.createElement("div", {
                   className: "IconBackgroundBlur",
                   style: e
               }), t)), l.createElement("div", {
                   className: Object(C.a)("PortraitAppImageContainer", ["Fallback", this.state.isFallback])
               }, this.state.image && t, l.createElement("div", {
                   className: "Title"
               }, this.props.title), this.props.children && this.props.children)
           }
       };
       var O;
       w.defaultProps = {
               fallbackImageUrl: "images/appimage_default_portrait.png"
           }, w.s_failedImages = [], Object(i.b)([s.bind], w.prototype, "loadNextImage", null), Object(i.b)([s.bind], w.prototype, "onLoad", null), Object(i.b)([s.bind], w.prototype, "onError", null), w = k = Object(i.b)([p.a], w),
           function(e) {
               e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
           }(O || (O = {}));
       const D = e => l.createElement("div", {
           className: Object(C.a)("ButtonContainer", O[e.side], ["Disabled", !1 === e.enabled])
       }, l.createElement(c.a, {
           className: "ButtonControl",
           onClick: e.onClick
       }, e.side == O.Left ? l.createElement(l.Fragment, null, "‹") : l.createElement(l.Fragment, null, "›")));
       class R extends l.Component {
           constructor(e) {
               super(e), this.m_refScrollPanel = l.createRef(), this.m_nLastScrollWidth = 0, this.m_nLastScrollLeft = 0, this.m_bScrolling = !1, this.m_nCurrentScrollTarget = null, this.m_animationFrameRequestHandle = 0, this.state = {
                   bScrolledToStart: null,
                   bScrolledToEnd: null
               }
           }
           componentDidMount() {
               this.updateButtonVisibilities(), this.requestAnimationFrame()
           }
           componentWillUnmount() {
               window.cancelAnimationFrame(this.m_animationFrameRequestHandle)
           }
           requestAnimationFrame() {
               this.m_animationFrameRequestHandle = window.requestAnimationFrame(this.onAnimationFrame)
           }
           onAnimationFrame() {
               if (this.m_refScrollPanel.current) {
                   const e = this.m_refScrollPanel.current.scrollWidth;
                   e != this.m_nLastScrollWidth && (this.updateButtonVisibilities(), this.m_nLastScrollWidth = e);
                   const t = this.m_refScrollPanel.current.scrollLeft;
                   this.m_bScrolling = t != this.m_nLastScrollLeft, this.m_bScrolling && (this.m_nLastScrollLeft = t)
               }
               this.requestAnimationFrame()
           }
           onScroll(e) {
               this.updateButtonVisibilities()
           }
           updateButtonVisibilities() {
               const e = this.m_refScrollPanel.current;
               e && this.setState({
                   bScrolledToStart: 0 == e.scrollLeft,
                   bScrolledToEnd: e.scrollLeft + e.clientWidth == e.scrollWidth
               })
           }
           onLeftButtonClick() {
               this.scroll(-1)
           }
           onRightButtonClick() {
               this.scroll(1)
           }
           scroll(e) {
               var t;
               const n = this.m_refScrollPanel.current;
               if (!n) return;
               if (n.isThrown) return void n.cancelThrowing(() => {
                   this.m_bScrolling = !1, this.scroll(e)
               });
               const r = n.children;
               if (!r || 0 == r.length) return;
               const i = null != (t = this.props.paginationAlignmentOffset) ? t : 0,
                   o = r[0],
                   s = this.m_bScrolling ? this.m_nCurrentScrollTarget : n.scrollLeft,
                   a = o.getBoundingClientRect().left + n.scrollLeft,
                   l = o.clientWidth,
                   c = n.clientWidth,
                   d = Math.floor(c / l) - 1,
                   u = Math.round((s - a + i + 1) / l) + d * e - .4999,
                   h = u > 0 ? u * l + a - i : 0;
               this.scrollToPosition(h)
           }
           scrollToPosition(e) {
               const t = this.m_refScrollPanel.current;
               t && (t.scrollTo({
                   left: e,
                   behavior: "smooth"
               }), this.m_bScrolling = !0, this.m_nCurrentScrollTarget = e)
           }
           render() {
               return l.createElement("div", {
                   className: Object(C.a)("PaginatedCarousel", this.props.additionalClassNames)
               }, l.createElement(v.b, {
                   ref: this.m_refScrollPanel,
                   scrollDirection: v.a.Horizontal,
                   onScroll: this.onScroll
               }, this.props.children), (!1 === this.state.bScrolledToStart || !1 === this.state.bScrolledToEnd) && l.createElement("div", {
                   className: "PaginationButtons"
               }, null !== this.state.bScrolledToStart && l.createElement(D, {
                   side: O.Left,
                   enabled: !this.state.bScrolledToStart,
                   onClick: this.onLeftButtonClick
               }), null !== this.state.bScrolledToEnd && l.createElement(D, {
                   side: O.Right,
                   enabled: !this.state.bScrolledToEnd,
                   onClick: this.onRightButtonClick
               })))
           }
       }
       Object(i.b)([a.a], R.prototype, "onAnimationFrame", null), Object(i.b)([a.a], R.prototype, "onScroll", null), Object(i.b)([a.a], R.prototype, "onLeftButtonClick", null), Object(i.b)([a.a], R.prototype, "onRightButtonClick", null);
       let M = class extends l.Component {
           constructor(e) {
               super(e), this.m_scrollWatcher = new C.e, this.m_refAnchoredParentPortal = l.createRef(), this.m_refButton = l.createRef(), this.state = {
                   bShowPlay: !1
               }, this.m_scrollWatcher.onScrollStop = this.onParentScrollStop
           }
           componentDidUpdate() {
               this.m_scrollWatcher.updateScrollableParents()
           }
           componentWillUnmount() {
               this.m_scrollWatcher.cleanup()
           }
           buttonMouseEnter() {
               var e, t;
               this.setState({
                   bShowPlay: !0
               }), null === (t = null === (e = this.m_refAnchoredParentPortal.current) || void 0 === e ? void 0 : e.panelAnchor) || void 0 === t || t.relatch()
           }
           buttonMouseLeave() {
               this.setState({
                   bShowPlay: !1
               })
           }
           onParentScrollStop() {
               var e, t;
               null === (t = null === (e = this.m_refAnchoredParentPortal.current) || void 0 === e ? void 0 : e.panelAnchor) || void 0 === t || t.relatch()
           }
           get shouldShowHoverContents() {
               return !this.m_scrollWatcher.isScrolling && this.state.bShowPlay
           }
           render() {
               let e = Object.assign({}, this.props);
               return delete e.onClick, l.createElement("div", {
                   className: Object(C.a)("AppButtonContainer", ["AppOwned", h.d.probablyOwnedAppkeys.has(this.props.appkey)], ["ShowingPopovers", this.shouldShowHoverContents])
               }, l.createElement(c.a, {
                   className: "AppButton",
                   ref: this.m_refButton,
                   onMouseEnter: this.buttonMouseEnter,
                   onMouseLeave: this.buttonMouseLeave,
                   onClick: this.props.onClick
               }, l.createElement(w, Object.assign({}, e), this.props.children)))
           }
       };
       Object(i.b)([a.a], M.prototype, "buttonMouseEnter", null), Object(i.b)([a.a], M.prototype, "buttonMouseLeave", null), Object(i.b)([a.a], M.prototype, "onParentScrollStop", null), M = Object(i.b)([p.a], M);
       const E = () => l.createElement("div", {
               className: "AppButton Placeholder"
           }),
           T = e => {
               var t;
               const n = !!e.loading,
                   r = null != (t = e.apps) ? t : [];
               let i = "AppCarousel";
               return e.className && (i += " " + e.className), i += " NoAnimations", l.createElement(R, {
                   additionalClassNames: i,
                   paginationAlignmentOffset: -20
               }, n && l.createElement(l.Fragment, null, l.createElement(E, null), l.createElement(E, null), l.createElement(E, null), l.createElement(E, null)), !n && r.map(e => l.createElement(M, Object.assign({
                   key: e.appkey
               }, e))))
           };
       var I = n("Ibgz"),
           P = n("vDqi"),
           V = n.n(P),
           x = n("uTck");

       function L() {
           return V.a.get("https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20").then(e => e.data)
       }
       const B = () => l.createElement(c.a, {
           className: "ButtonControl WithIcon PanelTopRight",
           onClick: () => I.b.Instance.openBigPictureStore(null, I.a.QuickStore)
       }, l.createElement("span", null, Object(u.c)("#BrowseAll")), l.createElement("img", {
           className: "Icon BlackToWhite",
           src: "/dashboard/images/icons/svr_store.svg"
       }));
       var N;
       ! function(e) {
           e[e.Free = 0] = "Free", e[e.Singleplayer = 1] = "Singleplayer", e[e.Multiplayer = 2] = "Multiplayer"
       }(N || (N = {}));
       let F = class extends l.Component {
           constructor(e) {
               super(e), this.state = {
                   storeData: null
               }
           }
           componentDidMount() {
               L().then(e => this.setState({
                   storeData: e
               }))
           }
           openSteamApp(e, t, n) {
               x.a.instance.RecordUIEvent("QuickStoreAppClick", N[t].toLowerCase() + ":" + n, "steam.app." + e), I.b.Instance.openBigPictureStore(e, I.a.QuickStore)
           }
           makeAppButtonList() {
               let e = [];
               switch (this.props.section) {
                   case N.Free:
                       e = this.state.storeData.apps_free;
                       break;
                   case N.Singleplayer:
                       e = this.state.storeData.apps_singleplayer;
                       break;
                   case N.Multiplayer:
                       e = this.state.storeData.apps_multiplayer
               }
               return e.map((e, t) => {
                   const n = "steam.app." + e.appid;
                   return {
                       key: n,
                       appkey: n,
                       title: e.name,
                       imageUrl: e.logo,
                       onClick: () => this.openSteamApp(e.appid, this.props.section, t)
                   }
               })
           }
           render() {
               return this.state.storeData ? l.createElement(T, {
                   apps: this.makeAppButtonList()
               }) : l.createElement(T, {
                   loading: !0
               })
           }
       };
       F = Object(i.b)([p.a], F);
       class H extends l.Component {
           constructor(e) {
               super(e), this.state = {}
           }
           render() {
               return l.createElement(m.h, {
                   visible: this.props.visible,
                   additionalClassNames: "QuickStore"
               }, l.createElement(B, null), l.createElement("h2", null, Object(u.c)("#StoreSection_TopSingleplayer")), l.createElement(F, {
                   section: N.Singleplayer
               }), l.createElement("h2", null, Object(u.c)("#StoreSection_TopMultiplayer")), l.createElement(F, {
                   section: N.Multiplayer
               }), l.createElement("h2", null, Object(u.c)("#StoreSection_TopFree")), l.createElement(F, {
                   section: N.Free
               }))
           }
       }
       var A;
       const j = () => l.createElement(c.a, {
               className: "ButtonControl WithIcon PanelTopRight",
               onClick: () => I.b.Instance.openBigPictureLibrary(null, I.a.QuickLaunch)
           }, l.createElement("span", null, Object(u.c)("#BrowseAll")), l.createElement("img", {
               className: "Icon BlackToWhite",
               src: "/dashboard/images/icons/svr_items.svg"
           })),
           U = () => l.createElement(c.a, {
               className: "ButtonControl Colorful WelcomeBrowseStore",
               onClick: () => {
                   var e;
                   return null === (e = VRHTML) || void 0 === e ? void 0 : e.VROverlay.ShowDashboard(d.r)
               }
           }, l.createElement("span", null, Object(u.c)("#WelcomeBrowseStore"))),
           W = () => l.createElement(c.a, {
               className: "ButtonControl Colorful WelcomeInstall",
               onClick: () => I.b.Instance.openBigPictureLibrary(null, I.a.QuickLaunch)
           }, l.createElement("span", null, Object(u.c)("#WelcomeInstall")));
       class z extends l.Component {
           constructor(e) {
               super(e), this.state = {
                   storeData: null
               }
           }
           componentDidMount() {
               L().then(e => this.setState({
                   storeData: e
               }))
           }
           render() {
               let e = [];
               if (this.state.storeData) {
                   let t = this.state.storeData.apps_singleplayer.flatMap((e, t) => [this.state.storeData.apps_singleplayer[t], this.state.storeData.apps_multiplayer[t], this.state.storeData.apps_free[t]]),
                       n = new Set;
                   for (; e.length < 12 && t.length;) {
                       for (; n.has(t[0].appid);) t.shift();
                       let r = t.shift();
                       n.add(r.appid), e.push(l.createElement(c.a, {
                           key: "appid_" + r.appid,
                           className: "WelcomeFloatingApp WelcomeFloatingApp" + e.length,
                           onClick: () => I.b.Instance.openBigPictureStore(r.appid, I.a.QuickLaunch)
                       }, l.createElement("img", {
                           src: r.logo
                       })))
                   }
               }
               return l.createElement("div", {
                   className: "QuickLaunchWelcome"
               }, e, l.createElement("div", {
                   className: "QuickLaunchWelcomePrompt"
               }, l.createElement("div", {
                   className: "QuickLaunchWelcomeHeader"
               }, Object(u.c)("#WelcomeHeader")), l.createElement("div", {
                   className: "QuickLaunchWelcomeMessage"
               }, Object(u.c)("#WelcomeMessage")), l.createElement(U, null), l.createElement(W, null)))
           }
       }
       let G = A = class extends l.Component {
           constructor(e) {
               super(e), this.state = {}
           }
           launchApplication(e, t, n) {
               var r, i, o;
               x.a.instance.RecordUIEvent("QuickLaunchAppClick", (t ? "top" : "bottom") + ":" + n, e), null === (i = (r = this.props).onGameLaunched) || void 0 === i || i.call(r), null === (o = VRHTML) || void 0 === o || o.VRApplications.LaunchApplication(e)
           }
           makeAppButtonList() {
               let e = [];
               if (null != h.d.apps)
                   for (let t of h.d.apps) t.is_internal || t.is_dashboard_overlay || t.is_hidden || t.is_instance || A.s_setBlacklistedAppkeys.has(t.key) || e.push(t);
               e.sort((e, t) => t.last_launch - e.last_launch);
               const t = e => {
                   let t = e.image_path;
                   return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
               };
               return e.map((e, n) => {
                   let r = n;
                   const i = n < A.TOP_ROW_LENGTH;
                   return i || (r -= A.TOP_ROW_LENGTH), {
                       key: e.key,
                       appkey: e.key,
                       title: e.name,
                       imageUrl: t(e),
                       onClick: () => this.launchApplication(e.key, i, r),
                       children: l.createElement(l.Fragment, null, l.createElement("div", {
                           className: "PlayIconFade"
                       }), l.createElement("img", {
                           className: "PlayIcon",
                           src: "/dashboard/images/icons/svr_play.svg"
                       }))
                   }
               })
           }
           render() {
               let e, t = this.makeAppButtonList();
               const n = 0 == t.length || h.d.settings.get("/settings/dashboard/forceWelcomeScreen");
               if (n) e = l.createElement(z, null);
               else {
                   let n = t.slice(0, A.TOP_ROW_LENGTH),
                       r = t.slice(A.TOP_ROW_LENGTH);
                   e = l.createElement(l.Fragment, null, l.createElement(j, null), l.createElement("h2", null, Object(u.c)("#RecentlyPlayed")), l.createElement(T, {
                       className: "TopRow",
                       apps: n
                   }), l.createElement(T, {
                       className: "BottomRow",
                       apps: r
                   }))
               }
               return l.createElement(m.h, {
                   visible: this.props.visible,
                   scrollable: !n,
                   debugName: "homepanel",
                   additionalClassNames: "QuickLaunch"
               }, e)
           }
       };
       G.TOP_ROW_LENGTH = 4, G.s_setBlacklistedAppkeys = new Set(["openvr.tool.steamvr_room_setup", "openvr.tool.steamvr_media_player", "openvr.tool.steamvr_desktop_gametheatre", "openvr.tool.steamvr_tutorial", "openvr.tool.steamvr_environments", "openvr.tool.steamvr_environments_tools", d.J, d.L]), G = A = Object(i.b)([p.a], G);
       var K = n("vzqD"),
           q = n("tALH"),
           Q = n("TbT/"),
           X = n("P8UO");
       class Y extends l.Component {
           constructor(e) {
               super(e), this.state = {}
           }
           onExitApp() {
               var e, t, n;
               null === (e = VRHTML) || void 0 === e || e.QuitSceneApp(), null === (n = (t = this.props).onExitGame) || void 0 === n || n.call(t)
           }
           onReturnToGame() {
               var e;
               null === (e = VRHTML) || void 0 === e || e.VRDashboardManager.HideDashboard("return_to_game")
           }
           onOpenAppControllerBindingSettings() {
               const e = X.a.Instance.SceneAppKey;
               q.b.OpenDeepLink(q.a.Name, e)
           }
           onOpenAppVideoSettings() {
               const e = X.a.Instance.SceneAppKey;
               K.b.OpenDeepLink(K.c.Name, e)
           }
           render() {
               var e;
               const t = X.a.Instance.SceneAppKey,
                   n = X.a.Instance.SceneAppName,
                   r = X.a.Instance.SceneApplicationState,
                   i = X.a.Instance.SceneAppIsHome,
                   s = h.d.settings.get("/settings/dashboard/allowAppQuitting"),
                   a = !(null != (e = h.d.settings.get("/settings/dashboard/arcadeMode")) && e),
                   d = h.d.apps && h.d.apps.find(e => e.key == t);
               let p = !1;
               switch (r) {
                   case o.v.Quitting:
                   case o.v.Starting:
                   case o.v.Waiting:
                       p = !0
               }
               const g = (e => {
                   if (null == e) return "";
                   let t = e.image_path;
                   return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
               })(d);
               return l.createElement(m.h, {
                   visible: this.props.visible,
                   debugName: "nowplaying",
                   additionalClassNames: "NowPlaying"
               }, l.createElement("div", {
                   className: "ArtworkColumn"
               }, l.createElement(w, {
                   appkey: t,
                   title: n,
                   imageUrl: g
               })), l.createElement("div", {
                   className: "InfoColumn"
               }, l.createElement("div", {
                   className: "NowPlayingAppTitle"
               }, n), l.createElement(c.a, {
                   className: "ButtonControl Colorful",
                   onClick: this.onReturnToGame
               }, i ? Object(u.c)("#Return_To_Home") : Object(u.c)("#Return_To_Game")), a && l.createElement(Q.e, {
                   icon: Q.f.PopOut,
                   onClick: this.onOpenAppControllerBindingSettings
               }, Object(u.c)("#Controller_Bindings")), a && l.createElement(Q.e, {
                   icon: Q.f.PopOut,
                   onClick: this.onOpenAppVideoSettings
               }, Object(u.c)("#App_Video_Settings")), !i && s && l.createElement(c.a, {
                   className: "ButtonControl",
                   onClick: this.onExitApp
               }, Object(u.c)("#Exit_Game"))))
           }
       }
       Object(i.b)([s.bind], Y.prototype, "onExitApp", null), Object(i.b)([s.bind], Y.prototype, "onReturnToGame", null), Object(i.b)([s.bind], Y.prototype, "onOpenAppControllerBindingSettings", null), Object(i.b)([s.bind], Y.prototype, "onOpenAppVideoSettings", null);
       var Z, J, $, ee = n("Vp/w"),
           te = n("CzjV"),
           ne = n("5/du"),
           re = n("vvDA");
       n.d(t, "b", (function() {
               return J
           })), n.d(t, "a", (function() {
               return se
           })),
           function(e) {
               e[e.Near = 0] = "Near", e[e.Middle = 1] = "Middle", e[e.Far = 2] = "Far", e[e.Screenshot_Only = 255] = "Screenshot_Only"
           }(J || (J = {}));
       class ie extends l.Component {
           componentDidMount() {
               var e;
               null === (e = VRHTML) || void 0 === e || e.VRChaperone.ForceBoundsVisible(!0)
           }
           componentWillUnmount() {
               var e;
               null === (e = VRHTML) || void 0 === e || e.VRChaperone.ForceBoundsVisible(!1)
           }
           render() {
               return null
           }
       }

       function oe(e) {
           var t, n;
           return null != (n = null === (t = e) || void 0 === t ? void 0 : t.startsWith(d.n)) && n
       }! function(e) {
           e[e.None = 0] = "None", e[e.Power = 1] = "Power", e[e.ExternalOverlays = 2] = "ExternalOverlays", e[e.Volume = 3] = "Volume", e[e.Windows = 4] = "Windows"
       }($ || ($ = {}));
       let se = Z = class extends l.Component {
           constructor(e) {
               super(e), this.m_mapExternalOverlays = {}, this.m_setSuppressingFade = new Set, this.m_mailbox = new o.c, this.m_timeoutPopupMenuHide = 0, this.m_refPopupMenu = l.createRef(), this.m_appStateChangedAutorunDisposer = null, this.m_refDesktopView = l.createRef(), this.m_refLeftHandDock = l.createRef(), this.m_refRightHandDock = l.createRef(), this.m_refDesktopTray = l.createRef(), this.m_refVolumeTray = l.createRef(), this.m_sOverlayToSwitchToOnLoad = d.q, this.m_bQuickLaunchShouldReturnToBigPicture = !1, this.m_bQuickStoreShouldReturnToBigPicture = !1, this.m_roomViewChangedEventHandle = null, this.state = {
                   bShown: !1,
                   sActiveOverlayID: null,
                   bDesktopDarkMode: !1,
                   bMuted: !1,
                   sLastShownAppKey: "",
                   eShowPopupMenu: $.None,
                   setForcingBoundsVisible: {},
                   mapWindows: new Map,
                   desktopViewDebugInfo: {
                       inputFrameTime: 0,
                       mapOverlayFrameTimes: new Map
                   }
               }, window.setDashboardScale = e => Z.s_dashboardUserScale = e, window.setDashboardDistance = e => Z.s_dashboardUserDistance = e, h.d.Init(!1), this.m_mailbox.Init(Z.k_sDashboardMailboxName).then(() => {
                   this.m_mailbox.RegisterHandler(Z.k_sSetDashboardFadeSupressionMessage, this.OnSetDashboardFadeSuppression), this.m_mailbox.RegisterHandler(Z.k_sUpdateDashboardTabsMessage, this.onUpdateDashboardTabs), this.m_mailbox.RegisterHandler(Z.k_sWindowViewCreatedMessage, this.onWindowViewCreated), this.m_mailbox.RegisterHandler(Z.k_sWindowViewDestroyedMessage, this.onWindowViewDestroyed), this.m_mailbox.RegisterHandler(Z.k_sUpdateWindowListMessage, this.onUpdateWindowList), this.m_mailbox.RegisterHandler(Z.k_sUpdateDebugInfoMessage, this.onUpdateDebugInfo), this.m_mailbox.RegisterHandler(Z.k_sSetDashboardForceBoundsVisible, this.OnSetDashboardForceBoundsVisible)
               })
           }
           componentDidMount() {
               var e, t;
               window.Dashboard = this, this.m_roomViewChangedEventHandle = null === (e = VRHTML) || void 0 === e ? void 0 : e.VRCompositor.RegisterForRoomViewChangedEvents(this.onRoomViewChanged);
               const n = null === (t = VRHTML) || void 0 === t ? void 0 : t.GetVRStartupReason(),
                   r = n == o.E.AppLaunch_Unknown || n == o.E.AppLaunch_Steam || n == o.E.Unknown,
                   i = h.d.settings.get("/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome"),
                   s = h.d.settings.get("/settings/steamvr/enableHomeApp"),
                   a = h.d.settings.get(d.m);
               (r || !i && s) && !a || setTimeout(() => {
                   var e;
                   return null === (e = VRHTML) || void 0 === e ? void 0 : e.VROverlay.ShowDashboard(null != a ? a : "")
               }, 500), this.m_appStateChangedAutorunDisposer = Object(g.e)(() => {
                   const e = X.a.Instance.SceneApplicationState != o.v.None;
                   this.isOverlayActive(d.o) && !e && this.switchToOverlay(d.q)
               }), this.updateSiblingReferences()
           }
           componentDidUpdate(e, t) {
               const n = this.getActiveOverlaySummonKey();
               let r = !1;
               t.bShown !== this.state.bShown && (te.b.Instance.playSound(this.state.bShown ? te.a.DashboardOpen : te.a.DashboardClose), r = !0);
               if (this.state.bShown && !r && t.sActiveOverlayID != this.state.sActiveOverlayID) switch (n) {
                   case d.C:
                       te.b.Instance.playSound(te.a.ThemeSettings);
                       break;
                   case d.k:
                       te.b.Instance.playSound(te.a.ThemeDesktop);
                       break;
                   case d.q:
                       te.b.Instance.playSound(te.a.ThemeLibrary);
                       break;
                   case d.r:
                       te.b.Instance.playSound(te.a.ThemeStore);
                       break;
                   case d.o:
                       te.b.Instance.playSound(te.a.ThemeNowPlaying)
               }
               if (t.sActiveOverlayID != this.state.sActiveOverlayID && this.isOverlayActive(d.G)) switch (I.b.Instance.lastBigPictureEntryPoint) {
                   case I.a.QuickLaunch:
                       this.m_bQuickLaunchShouldReturnToBigPicture = !0;
                       break;
                   case I.a.QuickStore:
                       this.m_bQuickStoreShouldReturnToBigPicture = !0
               }
               this.updateSiblingReferences()
           }
           updateSiblingReferences() {
               var e;
               null === (e = this.m_refDesktopTray.current) || void 0 === e || e.setSiblingReferences(this.m_refDesktopView.current, this.m_refLeftHandDock.current, this.m_refRightHandDock.current)
           }
           componentWillUnmount() {
               clearTimeout(this.m_timeoutHoverStateEnd), clearTimeout(this.m_timeoutPopupMenuHide), this.m_appStateChangedAutorunDisposer && (this.m_appStateChangedAutorunDisposer(), this.m_appStateChangedAutorunDisposer = null), Object(o.fb)(1), this.m_roomViewChangedEventHandle && (this.m_roomViewChangedEventHandle.unregister(), this.m_roomViewChangedEventHandle = null)
           }
           static getDashboardDistance() {
               if (Z.s_dashboardUserDistance) return Z.s_dashboardUserDistance;
               const e = h.d.settings.get(d.p);
               return e == J.Near ? .925 : e == J.Screenshot_Only ? 5 : e == J.Middle ? 1.05 : 1.2
           }
           static getDashboardVerticalPosition() {
               var e;
               const t = .01 * (null != (e = h.d.settings.get("/settings/dashboard/verticalOffsetCm_2")) ? e : 0),
                   n = h.d.settings.get(d.p);
               return n == J.Screenshot_Only ? -.57 : n == J.Near ? -.07 + t : n == J.Middle ? -.08 + t : -.09 + t
           }
           static getDashboardScale() {
               var e, t;
               if (Z.s_dashboardUserScale) return Z.s_dashboardUserScale;
               let n = 1;
               const r = h.d.settings.get(d.p),
                   i = r == J.Screenshot_Only;
               return n = i ? 2 : r == J.Near ? .36 : r == J.Middle ? .41 : .47, i || (n *= null != (t = null === (e = VRHTML) || void 0 === e ? void 0 : e.VRProperties.GetFloatProperty(o.nb, o.y.DashboardScale_Float)) ? t : 1), n
           }
           OnSetDashboardFadeSuppression(e) {
               e.suppress_dashboard_fade ? this.m_setSuppressingFade.add(e.for_id) : this.m_setSuppressingFade.delete(e.for_id), this.forceUpdate()
           }
           onRoomViewChanged() {
               this.forceUpdate()
           }
           OnSetDashboardForceBoundsVisible(e) {
               this.setState((t, n) => {
                   let r = Object.assign({}, t.setForcingBoundsVisible);
                   return r[e.for_overlay_key] = new Set(r[e.for_overlay_key]), e.force_bounds_visible ? r[e.for_overlay_key].add(e.for_id) : r[e.for_overlay_key].delete(e.for_id), {
                       setForcingBoundsVisible: r
                   }
               })
           }
           onUpdateDashboardTabs(e) {
               this.m_mapExternalOverlays = {}, e.tabs.forEach(e => {
                   e.mountable_id && (this.m_mapExternalOverlays[e.mountable_id] = e)
               }), this.m_sOverlayToSwitchToOnLoad && this.hasOverlay(this.m_sOverlayToSwitchToOnLoad) && (this.switchToOverlay(this.m_sOverlayToSwitchToOnLoad), this.m_sOverlayToSwitchToOnLoad = null), this.forceUpdate()
           }
           onWindowViewCreated(e) {
               var t;
               this.switchToOverlay(d.k), null === (t = this.m_refDesktopView.current) || void 0 === t || t.onWindowViewCreated(e.overlay_key, this.state.mapWindows.get(e.hwnd).title, this.state.mapWindows.get(e.hwnd).product_name)
           }
           onWindowViewDestroyed(e) {
               var t, n, r;
               null === (t = this.m_refDesktopView.current) || void 0 === t || t.onWindowViewDestroyed(e.overlay_key), null === (n = this.m_refLeftHandDock.current) || void 0 === n || n.onWindowViewDestroyed(e.overlay_key), null === (r = this.m_refRightHandDock.current) || void 0 === r || r.onWindowViewDestroyed(e.overlay_key)
           }
           onUpdateWindowList(e) {
               let t = new Map;
               e.windows.forEach(e => {
                   t.set(e.hwnd, e)
               }), this.setState({
                   mapWindows: t
               })
           }
           onUpdateDebugInfo(e) {
               let t = {
                   inputFrameTime: e.input_frame_time,
                   mapOverlayFrameTimes: new Map
               };
               e.overlay_frame_times.forEach(e => {
                   t.mapOverlayFrameTimes.set(e.overlay_key, e.frame_time)
               }), this.setState({
                   desktopViewDebugInfo: t
               })
           }
           onDockOverlay(e, t) {
               var n, r, i;
               null === (n = this.m_refDesktopView.current) || void 0 === n || n.dockOverlay(e, t), null === (r = this.m_refLeftHandDock.current) || void 0 === r || r.dockOverlay(e, t), null === (i = this.m_refRightHandDock.current) || void 0 === i || i.dockOverlay(e, t)
           }
           renderActiveOverlay() {
               if (null === this.state.sActiveOverlayID) return null;
               const e = this.getActiveOverlay();
               if (!e) return null;
               return l.createElement(o.kb, {
                   scale: {
                       x: 1,
                       y: 1
                   }
               }, l.createElement(o.S, {
                   mountedId: e.mountable_id
               }))
           }
           computeFilteredOverlayTabs() {
               if (this.screenshotMode) return [];
               let e = [];
               for (let t in this.m_mapExternalOverlays) {
                   const n = this.m_mapExternalOverlays[t];
                   void 0 === n.icon_overlay_key && null == n.icon_uri || n.summon_overlay_key && n.summon_overlay_key != d.C && n.summon_overlay_key != d.G && n.summon_overlay_key != d.H && (n.summon_overlay_key.startsWith(d.K) || n.summon_overlay_key.startsWith(d.M) || n.summon_overlay_key.startsWith(d.I) || oe(n.summon_overlay_key) || e.push(n))
               }
               return e = e.sort((e, t) => e.tab_name.localeCompare(t.tab_name)), e
           }
           findDashboardTab(e) {
               for (let t in this.m_mapExternalOverlays) {
                   let n = this.m_mapExternalOverlays[t];
                   if (n.summon_overlay_key == e) return n
               }
               return null
           }
           switchToOverlay(e, t) {
               var n, r, i;
               switch (e) {
                   case d.G:
                       I.b.Instance.latchBigPictureEntryPoint();
                       break;
                   case d.q:
                       this.m_bQuickLaunchShouldReturnToBigPicture = !1;
                       break;
                   case d.r:
                       this.m_bQuickStoreShouldReturnToBigPicture = !1;
                       break;
                   case d.h:
                       let t = {
                               type: "show_app_binding",
                               app_key: null === (n = VRHTML) || void 0 === n ? void 0 : n.VRApplications.GetSceneApplicationKey()
                           },
                           r = "bindingui/" + o.G[Object(o.i)()];
                       this.m_mailbox.SendMessage(r, t), this.m_bQuickStoreShouldReturnToBigPicture = !1, e = d.c
               }
               if (e.startsWith(d.K)) {
                   const t = Number.parseInt(e.substring(d.K.length + 1));
                   Number.isSafeInteger(t) && (null === (r = this.m_refDesktopView.current) || void 0 === r || r.onDesktopChange(t)), e = d.k
               }
               let s = this.findDashboardTab(e);
               return s ? (this.computeFilteredOverlayTabs().includes(s) && h.d.SetSettingsValue(d.z, null != (i = s.summon_overlay_key) ? i : ""), this.setState({
                   sActiveOverlayID: s.mountable_id
               }), x.a.instance.RecordUIEvent("SetDashboardOverlay", null != t ? t : "Button", e), !0) : (this.m_sOverlayToSwitchToOnLoad = e, !1)
           }
           getActiveOverlay() {
               var e;
               return this.state.sActiveOverlayID ? null != (e = this.m_mapExternalOverlays[this.state.sActiveOverlayID]) ? e : null : null
           }
           getActiveOverlaySummonKey() {
               var e, t;
               return null != (t = null === (e = this.getActiveOverlay()) || void 0 === e ? void 0 : e.summon_overlay_key) ? t : null
           }
           hideMessageOverlay() {
               this.getActiveOverlaySummonKey() == d.A && this.switchToOverlay(d.q)
           }
           show(e) {
               if (this.isShown()) return;
               x.a.instance.StartDashboardSession(e);
               this.m_mailbox.SendMessage("desktopview", {
                   type: "request_window_list_update"
               });
               const t = X.a.Instance.SceneAppKey,
                   n = X.a.Instance.SceneAppIsHome;
               t && t != this.state.sLastShownAppKey && (this.setState({
                   sLastShownAppKey: t
               }), this.switchToOverlay(n ? d.q : d.o)), this.setState({
                   bShown: !0
               });
               let r = {
                   type: Z.k_sRequestDashboardTabsMessage
               };
               this.m_mailbox.SendMessage("vrcompositor_systemlayer", r), Object(o.cb)()
           }
           hide(e) {
               this.isShown() && (this.setState({
                   bShown: !1,
                   eShowPopupMenu: $.None
               }), x.a.instance.EndDashboardSession(e))
           }
           isShown() {
               return this.state.bShown
           }
           onToggleRoomView() {
               var e;
               null === (e = VRHTML) || void 0 === e || e.VRControlPanel.SetCameraRoomViewVisible(!VRHTML.VRControlPanel.GetCameraRoomViewVisible())
           }
           onQuickLaunchButtonClick() {
               this.m_bQuickLaunchShouldReturnToBigPicture && I.b.Instance.lastBigPictureEntryPoint == I.a.QuickLaunch && !this.isOverlayActive(d.G) ? I.b.Instance.openBigPictureThroughLastEntryPoint() : this.switchToOverlay(d.q)
           }
           onQuickStoreButtonClick() {
               this.m_bQuickStoreShouldReturnToBigPicture && I.b.Instance.lastBigPictureEntryPoint == I.a.QuickStore && !this.isOverlayActive(d.G) ? I.b.Instance.openBigPictureThroughLastEntryPoint() : this.switchToOverlay(d.r)
           }
           getDashboardIconUri(e) {
               var t;
               try {
                   if ("turn_signal_menu.thumb" == e.icon_overlay_key) return "/dashboard/images/icons/turnsignal.svg";
                   if (e.icon_uri) return e.icon_uri;
                   if (e.icon_overlay_key) return null === (t = VRHTML) || void 0 === t ? void 0 : t.VRDashboardManager.GetOverlayImage(e.icon_overlay_key)
               } catch (e) {}
               return null
           }
           renderPowerMenu() {
               var e;
               const t = !!(null === (e = VRHTML) || void 0 === e ? void 0 : e.SceneAppRunning()),
                   n = h.d.settings.get("/settings/dashboard/allowAppQuitting");
               let r = !1;
               if (VRHTML) {
                   VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 && (r = VRHTML.VRProperties.GetBoolProperty(VRHTML.VROverlay.GetPrimaryDashboardDevice(), o.y.DeviceCanPowerOff_Bool))
               }
               const i = X.a.Instance.SceneAppName,
                   s = X.a.Instance.SceneAppIsHome;
               let a, c;
               a = s ? Object(u.c)("#Exit_SteamVR_Home") : i ? Object(u.c)("#PowerMenuQuitSceneApp", i) : Object(u.c)("#PowerMenuQuitSceneApp_NoApp"), c = s ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg" : "/dashboard/images/icons/svr_app_quit.svg";
               const p = this.findDashboardTab(d.G);
               return this.renderPopupMenu(l.createElement(l.Fragment, null, p && l.createElement(m.i, {
                   label: Object(u.c)("#PowerMenuSteamOverlay"),
                   lineBelow: !0,
                   onClick: () => {
                       this.switchToOverlay(d.G), this.showPopupMenu($.None)
                   }
               }), r && l.createElement(m.i, {
                   label: Object(u.c)("#PowerMenuTurnOffController"),
                   imageUrl: "/dashboard/images/icons/svr_controller_power.svg",
                   onClick: () => {
                       var e;
                       null === (e = VRHTML) || void 0 === e || e.TurnOffVRController(), this.showPopupMenu($.None)
                   }
               }), n && t && l.createElement(m.i, {
                   label: a,
                   imageUrl: c,
                   onClick: () => {
                       var e;
                       null === (e = VRHTML) || void 0 === e || e.QuitSceneApp(), this.showPopupMenu($.None)
                   }
               }), l.createElement(m.i, {
                   label: Object(u.c)("#PowerMenuExitVR"),
                   imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                   onClick: () => {
                       var e;
                       return null === (e = VRHTML) || void 0 === e ? void 0 : e.QuitOpenVR()
                   }
               })))
           }
           startPopupMenuTimeout(e) {
               this.m_timeoutPopupMenuHide = window.setTimeout(() => {
                   this.setState({
                       eShowPopupMenu: $.None
                   })
               }, e)
           }
           clearPopupMenuTimeout() {
               this.m_timeoutPopupMenuHide && (clearTimeout(this.m_timeoutPopupMenuHide), this.m_timeoutPopupMenuHide = 0)
           }
           showPopupMenu(e) {
               this.setState({
                   eShowPopupMenu: e
               }), this.clearPopupMenuTimeout()
           }
           renderPopupMenu(e) {
               return l.createElement("div", {
                   className: "PowerMenuContainer",
                   onMouseLeave: this.popupMenuMouseLeave,
                   onMouseEnter: this.clearPopupMenuTimeout,
                   ref: this.m_refPopupMenu
               }, l.createElement(c.b, {
                   className: "PowerMenuPanel"
               }, e))
           }
           popupMenuMouseLeave(e) {
               0 == e.buttons ? this.startPopupMenuTimeout(100) : window.document.addEventListener("mouseup", this.popupMenuMouseUp)
           }
           popupMenuMouseUp(e) {
               window.document.removeEventListener("mouseup", this.popupMenuMouseUp), this.m_refPopupMenu.current && ! function(e, t, n) {
                   let r = n.getBoundingClientRect();
                   return e >= r.left && e <= r.right && t >= r.top && t <= r.bottom
               }(e.clientX, e.clientY, this.m_refPopupMenu.current) && this.startPopupMenuTimeout(100)
           }
           renderStatusBarTitle() {
               var e;
               let t = this.getActiveOverlay();
               return t ? (t.summon_overlay_key == d.G && (I.b.Instance.lastBigPictureEntryPoint == I.a.QuickLaunch ? t = this.findDashboardTab(d.q) : I.b.Instance.lastBigPictureEntryPoint == I.a.QuickStore && (t = this.findDashboardTab(d.r))), t.summon_overlay_key == d.k ? l.createElement(m.m, {
                   name: null === (e = this.m_refDesktopView.current) || void 0 === e ? void 0 : e.statusBarTitle,
                   iconUrl: this.getDashboardIconUri(t)
               }) : l.createElement(m.m, {
                   name: t.tab_name,
                   iconUrl: this.getDashboardIconUri(t)
               })) : null
           }
           get isDarkMode() {
               return this.state.bDesktopDarkMode && this.isOverlayActive(d.k)
           }
           get screenshotMode() {
               return h.d.settings.get(d.p) == J.Screenshot_Only
           }
           getCollisionBoundsFadeVisualizationElements() {
               var e, t;
               const n = null === (e = VRHTML) || void 0 === e ? void 0 : e.VRChaperoneSetup.GetLiveCollisionBoundsInfo();
               if (!n) return [];
               let r = [];
               const i = null != (t = h.d.settings.get(d.g)) ? t : .7;
               for (let e of n) {
                   let t = Object(o.W)(Object(o.hb)(e[3], e[0])),
                       n = Object(o.W)(Object(o.hb)(e[1], e[0])),
                       s = Object(o.h)(t, n),
                       a = Object(o.R)(Object(o.b)(t, n, s)),
                       c = Object(o.N)(Object(o.hb)(e[0], e[3]));
                   if (c < .4) continue;
                   let d = Math.max(1, Math.floor(c));
                   for (let t = 0; t < d; t++) {
                       let n = (t + 1) / (d + 1),
                           s = Object(o.g)();
                       s.rotation = a, s.translation = Object(o.O)(n, e[0], e[3]), s.scale = {
                           x: .005,
                           y: .005,
                           z: i
                       };
                       let c = l.createElement(o.kb, {
                           transform: s
                       }, l.createElement(o.X, {
                           value: .25
                       }, l.createElement(o.ib, {
                           color: {
                               r: .2,
                               g: .2,
                               b: .2
                           }
                       }, l.createElement(o.db, {
                           source: "laser_pointer",
                           wireframe: !1,
                           culling: o.u.Backface
                       }))));
                       r.push(c)
                   }
                   if (r.length > 20) break
               }
               return r
           }
           render() {
               if (this.state.bShown) {
                   const e = this.m_setSuppressingFade.size > 0 && this.getActiveOverlaySummonKey() == d.C,
                       t = h.d.settings.get("/settings/dashboard/omitDashboardFadeWithSteamVRHome"),
                       n = !X.a.Instance.SceneAppIsHome || !t;
                   this.screenshotMode ? Object(o.fb)(0) : n && !e ? Object(o.fb)(this.isDarkMode ? .02 : .15) : Object(o.fb)(1)
               } else Object(o.fb)(1);
               const e = this.getActiveOverlaySummonKey(),
                   t = this.state.bShown && this.state.setForcingBoundsVisible[e],
                   n = t && t.size > 0;
               let r = [];
               return n && (r = this.getCollisionBoundsFadeVisualizationElements()), l.createElement("div", {
                   className: "DashboardMain"
               }, n && l.createElement(ie, null), n && l.createElement("span", null, r), this.state.bShown && this.renderDashboard(), this.renderInternalOverlays())
           }
           hasOverlay(e) {
               return Object.values(this.m_mapExternalOverlays).some(t => t.summon_overlay_key == e)
           }
           isOverlayActive(e) {
               return !!this.state.sActiveOverlayID && this.getActiveOverlaySummonKey() == e
           }
           get statusBarAnchorID() {
               return oe(this.getActiveOverlaySummonKey()) ? m.r : this.state.sActiveOverlayID + "_TopCenter"
           }
           renderExternalOverlayControlBarButton(e) {
               const t = this.getDashboardIconUri(e),
                   n = m.c.Center;
               return l.createElement(m.b, {
                   key: e.mountable_id,
                   label: e.tab_name,
                   imageUrl: t,
                   imageStyle: n,
                   active: this.isOverlayActive(e.summon_overlay_key),
                   onClick: () => this.switchToOverlay(e.summon_overlay_key)
               })
           }
           isDesktopTrayActive() {
               var e;
               return (this.isOverlayActive(d.k) || (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e ? void 0 : e.startsWith("system.window"))) && (this.state.eShowPopupMenu == $.None || this.state.eShowPopupMenu == $.Windows)
           }
           renderControlBar(e, t) {
               var n, r, i, s, a, p, g, b;
               const v = this.isDarkMode ? {
                       r: .05,
                       g: .05,
                       b: .05
                   } : null,
                   _ = this.isDarkMode ? {
                       r: .25,
                       g: .25,
                       b: .25
                   } : null,
                   f = Z.k_nControlBarWidthMeters,
                   S = null == (n = h.d.settings.get("/settings/dashboard/showPowerOptions")) || n,
                   k = null == (r = h.d.settings.get("/settings/dashboard/showDesktop")) || r,
                   C = null == (i = h.d.settings.get("/settings/dashboard/showQuickStore")) || i,
                   w = !(null != (s = h.d.settings.get("/settings/dashboard/arcadeMode")) && s),
                   O = X.a.Instance.SceneApplicationState,
                   D = X.a.Instance.SceneAppIsHome,
                   R = X.a.Instance.SceneAppKey;
               let M = "images/appimage_default.png";
               R && (M = "/app/image?app_key=" + R);
               const E = null != (a = h.d.settings.get(d.d)) && a,
                   T = null != (p = h.d.settings.get(d.e)) ? p : 0,
                   P = E && T > 0;
               let V = {
                   y: -.25,
                   z: 0
               };
               return this.isOverlayActive(d.k) && (V = {
                   y: -.4,
                   z: 0
               }), l.createElement(o.ib, {
                   color: v
               }, l.createElement(o.Y, {
                   curvature_origin_id: d.j,
                   width: f,
                   interactive: !1,
                   debug_name: "ControlBarBackground",
                   sampler: o.t.SingleTap,
                   reflect: .05
               }, l.createElement("div", {
                   className: "ControlBarBackground"
               })), l.createElement(o.kb, {
                   translation: {
                       z: 1e-5
                   }
               }, l.createElement(o.Y, {
                   curvature_origin_id: d.j,
                   width: f,
                   interactive: !0,
                   id: m.q,
                   debug_name: "Controls"
               }, l.createElement(c.b, {
                   className: "ControlBar MainControlBar"
               }, l.createElement("div", {
                   className: "Section Left"
               }, S && l.createElement(m.k, {
                   imageUrl: "/dashboard/images/icons/svr_menu_c.svg",
                   label: Object(u.c)("#Menu"),
                   style: m.d.Small,
                   onClick: () => this.showPopupMenu($.Power),
                   onMouseEnter: this.clearPopupMenuTimeout,
                   onMouseLeave: () => this.startPopupMenuTimeout(500)
               }), k && l.createElement(m.k, {
                   style: m.d.Small,
                   imageUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                   label: Object(u.c)("#Desktops"),
                   active: this.isDesktopTrayActive(),
                   onClick: () => this.switchToOverlay(d.k)
               }), l.createElement(m.e, {
                   style: m.d.Small
               }, l.createElement(l.Fragment, null, e.map(this.renderExternalOverlayControlBarButton), t.length > 0 && l.createElement(m.b, {
                   imageUrl: "/dashboard/images/icons/svr_more.svg",
                   label: Object(u.c)("#X_More_Overlays", t.length),
                   active: this.state.eShowPopupMenu == $.ExternalOverlays,
                   onClick: () => this.showPopupMenu($.ExternalOverlays),
                   onMouseEnter: this.clearPopupMenuTimeout,
                   onMouseLeave: () => this.startPopupMenuTimeout(500)
               })))), l.createElement("div", {
                   className: "Section Center"
               }, l.createElement(m.k, {
                   label: Object(u.c)("#Library"),
                   imageUrl: "/dashboard/images/icons/svr_items.svg",
                   active: this.isOverlayActive(d.q) || this.isOverlayActive(d.G) && I.b.Instance.lastBigPictureEntryPoint == I.a.QuickLaunch,
                   style: m.d.Large,
                   onClick: this.onQuickLaunchButtonClick
               }), O != o.v.None && l.createElement("div", {
                   className: "NowPlayingSpacer"
               }, l.createElement(ee.a, {
                   allowableParentSelectors: [".DashboardMain"]
               }, l.createElement(o.ib, {
                   color: v
               }, l.createElement(o.kb, {
                   translation: {
                       z: .02
                   }
               }, l.createElement(o.Y, {
                   debug_name: "NowPlayingButton",
                   interactive: !0,
                   target_dpi_panel_id: m.q,
                   curvature_origin_id: d.j
               }, l.createElement("div", {
                   className: "ControlBar"
               }, l.createElement(m.k, {
                   label: D ? Object(u.c)("#SteamVR_Home") : Object(u.c)("#Now_Playing"),
                   active: this.isOverlayActive(d.o),
                   style: m.d.App,
                   imageUrl: M,
                   onClick: () => this.switchToOverlay(d.o)
               }))))))), C && l.createElement(m.k, {
                   label: Object(u.c)("#Store"),
                   imageUrl: "/dashboard/images/icons/svr_store.svg",
                   additionalClassNames: "Store",
                   active: this.isOverlayActive(d.r) || this.isOverlayActive(d.G) && I.b.Instance.lastBigPictureEntryPoint == I.a.QuickStore,
                   style: m.d.Large,
                   onClick: this.onQuickStoreButtonClick
               })), l.createElement("div", {
                   className: "Section Right"
               }, l.createElement(m.e, {
                   style: m.d.Small
               }, l.createElement(m.j, null), P && l.createElement(m.b, {
                   imageUrl: "/dashboard/images/icons/svr_eye.svg",
                   label: Object(u.c)("#Toggle_Room_View"),
                   onClick: this.onToggleRoomView,
                   active: null === (g = VRHTML) || void 0 === g ? void 0 : g.VRControlPanel.GetCameraRoomViewVisible(),
                   enabled: null === (b = VRHTML) || void 0 === b ? void 0 : b.VROverlayInternal.HasCameraRoomViewCapability()
               }), l.createElement(m.o, {
                   active: this.state.eShowPopupMenu == $.Volume,
                   refVolumeTray: this.m_refVolumeTray,
                   onShowTray: () => this.showPopupMenu($.Volume),
                   onHideTray: () => this.showPopupMenu($.None),
                   onMouseEnter: this.clearPopupMenuTimeout,
                   onMouseLeave: () => this.startPopupMenuTimeout(500)
               })), w && l.createElement(m.k, {
                   imageUrl: "/dashboard/images/icons/svr_settings.svg",
                   active: this.isOverlayActive(d.C),
                   enabled: this.hasOverlay(d.C),
                   label: Object(u.c)("#Settings"),
                   style: m.d.Small,
                   centerPanelAnchorID: "VolumeButton",
                   onClick: () => this.switchToOverlay(d.C)
               }))), l.createElement(y, {
                   ref: this.m_refDesktopTray,
                   position: 0,
                   visible: this.isDesktopTrayActive(),
                   tintColor: _,
                   darkMode: this.state.bDesktopDarkMode,
                   onToggleDarkMode: () => this.setState({
                       bDesktopDarkMode: !this.state.bDesktopDarkMode
                   }),
                   onToggleWindowList: () => this.showPopupMenu($.Windows),
                   onClearPopupMenuTimeout: () => this.clearPopupMenuTimeout(),
                   onStartPopupMenuTimeout: e => this.startPopupMenuTimeout(e),
                   onDockOverlay: this.onDockOverlay,
                   mapWindows: this.state.mapWindows,
                   sort_depth_bias: .2
               }), l.createElement(m.p, {
                   ref: this.m_refVolumeTray,
                   position: .337,
                   visible: this.state.eShowPopupMenu == $.Volume,
                   onFinalChangeMouseOutside: () => {
                       this.startPopupMenuTimeout(800)
                   },
                   onMouseMove: this.clearPopupMenuTimeout,
                   onMouseLeave: this.popupMenuMouseLeave,
                   sort_depth_bias: .4
               }))), l.createElement(o.kb, {
                   translation: V,
                   scale: {
                       y: 1.5,
                       x: 1.5
                   }
               }, l.createElement(o.S, {
                   mountedId: Object(o.f)(d.E, "system.keyboard")
               })))
           }
           renderInternalOverlays() {
               var e, t, n, r, i;
               const s = null != (t = null === (e = this.m_refDesktopView.current) || void 0 === e ? void 0 : e.currentDesktopIndex) ? t : 1,
                   a = null != (r = null === (n = this.m_refDesktopView.current) || void 0 === n ? void 0 : n.desktopCount) ? r : 1,
                   c = null == (i = h.d.settings.get("/settings/dashboard/enableWindowView")) || i;
               return l.createElement(l.Fragment, null, l.createElement(o.j, {
                   tabName: Object(u.c)("#Library"),
                   iconUri: "/dashboard/images/icons/svr_items.svg",
                   summonOverlayKey: d.q
               }, l.createElement(G, {
                   visible: this.state.bShown && this.isOverlayActive(d.q),
                   onGameLaunched: () => {
                       var e;
                       null === (e = VRHTML) || void 0 === e || e.VRDashboardManager.HideDashboard("game_launched")
                   }
               })), l.createElement(o.j, {
                   tabName: Object(u.c)("#Store"),
                   iconUri: "/dashboard/images/icons/svr_store.svg",
                   summonOverlayKey: d.r
               }, l.createElement(H, {
                   visible: this.state.bShown && this.isOverlayActive(d.r)
               })), l.createElement(o.j, {
                   tabName: Object(u.c)("#Now_Playing"),
                   summonOverlayKey: d.o
               }, l.createElement(Y, {
                   visible: this.state.bShown && this.isOverlayActive(d.o),
                   onExitGame: () => this.switchToOverlay(d.q)
               })), l.createElement(o.j, {
                   summonOverlayKey: d.k,
                   tabName: a > 1 ? Object(u.c)("#Desktop_X", s) : Object(u.c)("#Desktop"),
                   iconUri: "/dashboard/images/icons/svr_desktop_alt.svg"
               }, l.createElement(f, {
                   visible: this.state.bShown && this.isOverlayActive(d.k),
                   onDockOverlay: this.onDockOverlay,
                   ref: this.m_refDesktopView
               })), l.createElement(ne.a, {
                   visible: this.state.bShown && this.isOverlayActive(d.C)
               }), c && l.createElement(S, {
                   visible: this.state.bShown && VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(o.w.TrackedControllerRole_LeftHand) != o.mb,
                   dockLocation: _.LeftHand,
                   onDockOverlay: this.onDockOverlay,
                   ref: this.m_refLeftHandDock
               }), c && l.createElement(S, {
                   visible: this.state.bShown && VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(o.w.TrackedControllerRole_RightHand) != o.mb,
                   dockLocation: _.RightHand,
                   onDockOverlay: this.onDockOverlay,
                   ref: this.m_refRightHandDock
               }))
           }
           renderDashboard() {
               var e;
               const t = this.computeFilteredOverlayTabs(),
                   n = this.isDarkMode ? {
                       r: .02,
                       g: .02,
                       b: .02
                   } : null;
               let r = [],
                   i = [];
               if (t.length > 2) {
                   const n = h.d.settings.get(d.z);
                   r = [(e = t.find(e => e.summon_overlay_key == n), null != e ? e : t[0])], i = t.filter(e => !r.includes(e))
               } else r = t;
               let s = null;
               this.isDesktopTrayActive() && (s = 2048);
               let a = [];
               this.state.mapWindows.forEach(e => {
                   "" == e.overlay_key && a.push(e)
               });
               const c = this.screenshotMode,
                   u = c ? 2.5 : 1.8;
               return l.createElement(o.k, null, l.createElement(o.kb, {
                   id: d.j,
                   translation: {
                       z: u
                   }
               }), l.createElement(o.kb, {
                   translation: {
                       x: c ? .1 : 0,
                       y: Z.getDashboardVerticalPosition(),
                       z: -Z.getDashboardDistance() * (c ? 1.1 : 1)
                   },
                   rotation: {
                       x: c ? -20 : 0
                   },
                   scale: Z.getDashboardScale()
               }, l.createElement(o.kb, {
                   parent_id: this.statusBarAnchorID,
                   translation: {
                       y: .008
                   }
               }, l.createElement(o.ib, {
                   color: n
               }, l.createElement(o.Y, {
                   curvature_origin_id: d.j,
                   origin: o.s.BottomCenter,
                   interactive: !1,
                   target_dpi_panel_id: m.q,
                   debug_name: "StatusBar",
                   reflect: .1
               }, l.createElement("div", {
                   className: "StatusBar",
                   style: {
                       width: s
                   }
               }, l.createElement("div", {
                   className: "Section Left"
               }, this.renderStatusBarTitle(), l.createElement(m.l, {
                   role: o.w.TrackedControllerRole_LeftHand,
                   style: re.b.HorizontalPips
               })), l.createElement("div", {
                   className: "Section Center"
               }, l.createElement(m.l, {
                   deviceIndex: o.nb,
                   style: re.b.VerticalBattery
               }), l.createElement(m.g, null)), l.createElement("div", {
                   className: "Section Right"
               }, l.createElement(m.l, {
                   role: o.w.TrackedControllerRole_RightHand,
                   style: re.b.HorizontalPips
               }), l.createElement("div", {
                   className: "SteamLogo"
               }, l.createElement("img", {
                   src: "/dashboard/images/icons/vr_steam.svg"
               }))))))), l.createElement(o.kb, {
                   translation: {
                       y: -1.03375,
                       z: .05
                   }
               }, this.renderActiveOverlay()), l.createElement(o.kb, {
                   translation: {
                       y: -1.2,
                       z: .15
                   }
               }, l.createElement(o.kb, {
                   rotation: {
                       x: -35
                   }
               }, this.renderControlBar(r, i)), this.state.eShowPopupMenu == $.Power && l.createElement(o.kb, {
                   translation: {
                       x: -.4,
                       y: .15,
                       z: .05
                   },
                   rotation: {
                       y: 19
                   }
               }, l.createElement(o.Y, {
                   curvature_origin_id: d.j,
                   height: void 0,
                   width: .925,
                   interactive: !0,
                   origin: o.s.BottomRight,
                   debug_name: "Power Menu",
                   sort_depth_bias: -.1
               }, this.renderPowerMenu())), this.state.eShowPopupMenu == $.ExternalOverlays && l.createElement(o.kb, {
                   translation: {
                       x: .2,
                       y: .15,
                       z: .05
                   },
                   rotation: {
                       y: 6
                   }
               }, l.createElement(o.Y, {
                   curvature_origin_id: d.j,
                   height: void 0,
                   width: .925,
                   interactive: !0,
                   origin: o.s.BottomRight,
                   debug_name: "OverlaysList",
                   sort_depth_bias: -.1
               }, this.renderPopupMenu(l.createElement(l.Fragment, null, " ", i.map(e => l.createElement(m.i, {
                   key: e.mountable_id,
                   imageUrl: this.getDashboardIconUri(e),
                   label: e.tab_name,
                   onClick: () => {
                       this.switchToOverlay(e.summon_overlay_key), this.showPopupMenu($.None)
                   }
               })), " ")))), this.state.eShowPopupMenu == $.Windows && l.createElement(o.kb, {
                   translation: {
                       x: .3,
                       y: -.06,
                       z: .1
                   },
                   rotation: {
                       y: 4
                   }
               }, l.createElement(o.Y, {
                   curvature_origin_id: d.j,
                   height: void 0,
                   width: .925,
                   interactive: !0,
                   origin: o.s.BottomRight,
                   debug_name: "WindowList",
                   sort_depth_bias: -.1
               }, this.renderPopupMenu(l.createElement(l.Fragment, null, " ", a.map(e => l.createElement(m.i, {
                   key: e.hwnd,
                   imageUrl: "/dashboard/images/icons/icon_add.png",
                   label: e.title,
                   onClick: () => {
                       let t = {
                           type: "request_spawn_window_view",
                           hwnd: e.hwnd
                       };
                       this.m_mailbox.SendMessage("desktopview", t), this.showPopupMenu($.None)
                   }
               })), " ")))))))
           }
       };
       se.k_sDashboardMailboxName = "systemui_dashboard", se.k_sSetDashboardFadeSupressionMessage = "set_dashboard_fade_suppression", se.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs", se.k_sRequestDashboardTabsMessage = "request_dashboard_tabs", se.k_sWindowViewCreatedMessage = "window_view_created", se.k_sWindowViewDestroyedMessage = "window_view_destroyed", se.k_sUpdateWindowListMessage = "update_window_list", se.k_sUpdateDebugInfoMessage = "update_debug_info", se.k_sSetDashboardForceBoundsVisible = "set_dashboard_force_bounds_visible", se.k_nControlBarWidthMeters = 2.667, se.s_dashboardUserDistance = void 0, se.s_dashboardUserScale = void 0, Object(i.b)([s.bind], se.prototype, "OnSetDashboardFadeSuppression", null), Object(i.b)([s.bind], se.prototype, "onRoomViewChanged", null), Object(i.b)([s.bind], se.prototype, "OnSetDashboardForceBoundsVisible", null), Object(i.b)([s.bind], se.prototype, "onUpdateDashboardTabs", null), Object(i.b)([s.bind], se.prototype, "onWindowViewCreated", null), Object(i.b)([s.bind], se.prototype, "onWindowViewDestroyed", null), Object(i.b)([s.bind], se.prototype, "onUpdateWindowList", null), Object(i.b)([s.bind], se.prototype, "onUpdateDebugInfo", null), Object(i.b)([s.bind], se.prototype, "onDockOverlay", null), Object(i.b)([s.bind], se.prototype, "show", null), Object(i.b)([s.bind], se.prototype, "hide", null), Object(i.b)([s.bind], se.prototype, "onToggleRoomView", null), Object(i.b)([s.bind], se.prototype, "onQuickLaunchButtonClick", null), Object(i.b)([s.bind], se.prototype, "onQuickStoreButtonClick", null), Object(i.b)([s.bind], se.prototype, "renderPowerMenu", null), Object(i.b)([s.bind], se.prototype, "startPopupMenuTimeout", null), Object(i.b)([s.bind], se.prototype, "clearPopupMenuTimeout", null), Object(i.b)([s.bind], se.prototype, "showPopupMenu", null), Object(i.b)([s.bind], se.prototype, "popupMenuMouseLeave", null), Object(i.b)([s.bind], se.prototype, "popupMenuMouseUp", null), Object(i.b)([g.f], se.prototype, "isDarkMode", null), Object(i.b)([g.f], se.prototype, "screenshotMode", null), Object(i.b)([s.bind], se.prototype, "renderExternalOverlayControlBarButton", null), Object(i.b)([s.bind], se.prototype, "isDesktopTrayActive", null), Object(i.b)([g.m], se, "s_dashboardUserDistance", void 0), Object(i.b)([g.m], se, "s_dashboardUserScale", void 0), se = Z = Object(i.b)([p.a], se)
   },
   N46P: function(e, t, n) {
       "use strict";
       n.d(t, "a", (function() {
           return c
       }));
       var r = n("mrSG"),
           i = n("q1tI"),
           o = n("7wIv"),
           s = n("GXif"),
           a = n("/i/y");
       class l extends i.Component {
           constructor(e) {
               if (super(e), this.m_mailbox = new a.c, this.m_mailbox.Init("legacy_debugger"), this.m_mailbox.RegisterHandler("legacy_input_frame", this.OnLegacyInputFrame), VRHTML) {
                   let e = VRHTML.VRApplications.GetCurrentSceneProcessId();
                   VRHTML.VRProperties.SetInt32Path("/legacy_debugger_pid", e)
               }
               this.state = {
                   currentState: null
               }
           }
           componentWillUnmount() {
               var e;
               null === (e = VRHTML) || void 0 === e || e.VRProperties.SetInt32Path("/legacy_debugger_pid", 0)
           }
           OnLegacyInputFrame(e) {
               this.setState({
                   currentState: e
               })
           }
           renderController(e) {
               let t = [];
               if (t.push(i.createElement("div", {
                       className: "Label LegacyDebuggerGroup"
                   }, "Pressed:")), e.pressed)
                   for (let n of e.pressed) t.push(i.createElement("div", {
                       className: "Label LegacyDebuggerButtonName"
                   }, n));
               else t.push(i.createElement("div", {
                   className: "Label LegacyDebuggerButtonName"
               }, "None"));
               if (t.push(i.createElement("div", {
                       className: "Label LegacyDebuggerGroup"
                   }, "Touched:")), e.touched)
                   for (let n of e.touched) t.push(i.createElement("div", {
                       className: "Label LegacyDebuggerButtonName"
                   }, n));
               else t.push(i.createElement("div", {
                   className: "Label LegacyDebuggerButtonName"
               }, "None"));
               if (t.push(i.createElement("div", {
                       className: "Label LegacyDebuggerGroup"
                   }, "Supported:")), e.supported_buttons)
                   for (let n of e.supported_buttons) t.push(i.createElement("div", {
                       className: "Label LegacyDebuggerButtonName"
                   }, n));
               else t.push(i.createElement("div", {
                   className: "Label LegacyDebuggerButtonName"
               }, "None"));
               t.push(i.createElement("div", {
                   className: "Label LegacyDebuggerGroup"
               }, "Axis:"));
               for (let n of e.axis) t.push(i.createElement("div", {
                   className: "Label LegacyDebuggerButtonName"
               }, "X: ", n.x.toFixed(2), " Y: ", n.y.toFixed(2)));
               return t
           }
           render() {
               return this.state.currentState ? i.createElement("div", {
                   className: "FlexRow"
               }, i.createElement("div", {
                   className: "FlexColumn LegacyDebuggerController"
               }, i.createElement("div", {
                   className: "Label"
               }, "Left"), this.renderController(this.state.currentState.left)), i.createElement("div", {
                   className: "FlexColumn LegacyDebuggerController"
               }, i.createElement("div", {
                   className: "Label"
               }, "Right"), this.renderController(this.state.currentState.right)), i.createElement("div", {
                   className: "FlexColumn LegacyDebuggerController"
               }, i.createElement("div", {
                   className: "Label"
               }, "HMD"), this.renderController(this.state.currentState.hmd))) : i.createElement("div", {
                   className: "Label"
               }, Object(s.c)("#LegacyDebugger_NoApp"))
           }
       }
       Object(r.b)([o.bind], l.prototype, "OnLegacyInputFrame", null);
       class c extends i.Component {
           constructor(e) {
               super(e)
           }
           render() {
               return i.createElement("div", {
                   className: "FlexRowWithWrap"
               }, i.createElement("div", {
                   className: "FlexFullWidthRowCentered LegacyDebuggerWrapper"
               }, i.createElement(l, null)))
           }
       }
   },
   V1oe: function(e, t, n) {
       "use strict";
       n.d(t, "a", (function() {
           return k
       }));
       var r, i = n("mrSG"),
           o = n("q1tI"),
           s = n("7wIv"),
           a = n("GXif"),
           l = n("/i/y"),
           c = n("uFkT"),
           d = n("MYgy"),
           u = n("Yd4P"),
           h = n.n(u),
           p = n("okNM"),
           m = n("2vnA"),
           g = n("TbT/"),
           b = n("GxMB");
       ! function(e) {
           e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
       }(r || (r = {}));
       class v extends o.Component {
           constructor(e) {
               super(e), this.m_containerRef = null, this.m_nameRef = null, this.m_svgRef = null, this.m_containerRef = o.createRef(), this.m_nameRef = o.createRef(), this.m_svgRef = o.createRef(), this.state = {
                   click: !1,
                   touch: !1,
                   x: 0,
                   y: 0,
                   value: 0,
                   force: 0
               }
           }
           componentDidMount() {
               this.RegisterForSourceUpdates()
           }
           componentWillUnmount() {
               this.UnregisterForSourceUpdates()
           }
           componentWillUpdate() {
               this.RegisterForSourceUpdates()
           }
           GetHeightEstimate() {
               return 1
           }
           RegisterForSourceUpdates() {
               this.props.source.click && this.props.visualizer.RegisterSourceVisualizer(this.props.devicePath, this.props.sourcePath + "/click", this.ComponentUpdated), this.props.source.touch && this.props.visualizer.RegisterSourceVisualizer(this.props.devicePath, this.props.sourcePath + "/touch", this.ComponentUpdated), this.props.source.value && this.props.visualizer.RegisterSourceVisualizer(this.props.devicePath, this.props.sourcePath + "/value", this.ComponentUpdated), "joystick" != this.props.source.type && "trackpad" != this.props.source.type || (this.props.visualizer.RegisterSourceVisualizer(this.props.devicePath, this.props.sourcePath + "/x", this.ComponentUpdated), this.props.visualizer.RegisterSourceVisualizer(this.props.devicePath, this.props.sourcePath + "/y", this.ComponentUpdated)), this.props.source.force && this.props.visualizer.RegisterSourceVisualizer(this.props.devicePath, this.props.sourcePath + "/force", this.ComponentUpdated)
           }
           UnregisterForSourceUpdates() {
               this.props.source.click && this.props.visualizer.UnregisterSourceVisualizer(this.props.devicePath, this.props.sourcePath + "/click"), this.props.source.touch && this.props.visualizer.UnregisterSourceVisualizer(this.props.devicePath, this.props.sourcePath + "/touch"), this.props.source.value && this.props.visualizer.UnregisterSourceVisualizer(this.props.devicePath, this.props.sourcePath + "/value"), "joystick" != this.props.source.type && "trackpad" != this.props.source.type || (this.props.visualizer.UnregisterSourceVisualizer(this.props.devicePath, this.props.sourcePath), this.props.visualizer.UnregisterSourceVisualizer(this.props.devicePath, this.props.sourcePath)), this.props.source.force && this.props.visualizer.UnregisterSourceVisualizer(this.props.devicePath, this.props.sourcePath + "/force")
           }
           ComponentUpdated(e, t, n) {
               e == this.props.devicePath && (t == this.props.sourcePath + "/click" && this.setState({
                   click: n
               }), t == this.props.sourcePath + "/touch" && this.setState({
                   touch: n
               }), t == this.props.sourcePath + "/x" && this.setState({
                   x: n
               }), t == this.props.sourcePath + "/y" && this.setState({
                   y: n
               }), t == this.props.sourcePath + "/value" && this.setState({
                   value: n
               }), t == this.props.sourcePath + "/force" && this.setState({
                   force: n
               }))
           }
           GetPositionStyle() {
               let e;
               return e = "/user/hand/left" == this.props.devicePath ? this.props.imageScale.right - this.props.imageScale.scale * this.props.source.binding_image_point[0] : this.props.imageScale.left + this.props.imageScale.scale * this.props.source.binding_image_point[0], {
                   position: "absolute",
                   left: e,
                   top: this.props.imageScale.scale * this.props.source.binding_image_point[1] + this.props.imageScale.top
               }
           }
           GetPosition() {
               let e;
               return e = "/user/hand/left" == this.props.devicePath ? this.props.imageScale.right - this.props.imageScale.scale * this.props.source.binding_image_point[0] : this.props.imageScale.left + this.props.imageScale.scale * this.props.source.binding_image_point[0], {
                   x: e,
                   y: this.props.imageScale.scale * this.props.source.binding_image_point[1] + this.props.imageScale.top
               }
           }
           renderHeaderVisualization() {
               return this.props.source.touch || this.props.source.click ? this.renderTouchClickVisualization() : null
           }
           renderBodyVisualization() {
               return null
           }
           renderTouchClickVisualization() {
               let e = "";
               return this.state.click && (e += " Clicked"), this.state.touch && (e += " Touched"), o.createElement("div", {
                   className: "VisualizerButtonContainer"
               }, o.createElement("div", {
                   className: "VisualizerButtonBase" + e
               }))
           }
           renderBar(e, t, n) {
               let r = {
                   width: String(100 * n) + "%"
               };
               return o.createElement("div", {
                   className: "TriggerBar " + t
               }, o.createElement("div", {
                   className: "VisualizerLabel"
               }, Object(a.c)(e)), o.createElement("div", {
                   className: "TriggerBarBackground"
               }, o.createElement("div", {
                   className: "TriggerBarContent",
                   style: r
               })))
           }
           UpdateSVGPath() {
               if (this.m_nameRef && this.m_nameRef.current && this.m_containerRef && this.m_containerRef.current && this.m_svgRef && this.m_svgRef.current) {
                   let e = this.m_svgRef.current.children.namedItem("SourcePath"),
                       t = this.m_svgRef.current.children.namedItem("SourceLine"),
                       n = this.m_svgRef.current.children.namedItem("SourceCircle"),
                       i = this.props.side == r.Right,
                       o = this.m_nameRef.current.getBoundingClientRect(),
                       s = this.m_containerRef.current.getBoundingClientRect(),
                       a = this.GetPosition(),
                       l = new d.e(0, o.top + o.height / 2);
                   l.x = i ? s.left - 10 : s.right + 10;
                   let c = i ? -20 : 20,
                       u = l.x + c + "," + l.y + " " + a.x + "," + a.y;
                   e.setAttribute("points", u);
                   let h = l.x + "," + l.y + " " + (l.x + c) + "," + l.y;
                   t.setAttribute("points", h), n.setAttribute("cx", a.x + ""), n.setAttribute("cy", a.y + "")
               }
           }
           componentDidUpdate() {
               this.UpdateSVGPath()
           }
           IsEngaged() {
               return this.state.touch || this.state.click || this.state.value && this.state.value > .1 || this.state.force && this.state.force > .1 || this.state.x && Math.abs(this.state.x) > .1 || this.state.y && Math.abs(this.state.x) > .1
           }
           render() {
               let e = "MenuSVG";
               return this.props.side == r.Left ? e += " MenuLeftLine" : e += " MenuRightLine", this.IsEngaged() && (e += " MenuSVGVisible"), o.createElement("div", {
                   className: "VisualizerControl",
                   ref: this.m_containerRef
               }, o.createElement("div", {
                   className: "VisualizerSectionHeader"
               }, o.createElement("div", {
                   className: "Label Title",
                   ref: this.m_nameRef
               }, c.a.LocalizeControllerString(this.props.controllerType, this.props.sourcePath)), this.renderHeaderVisualization()), this.renderBodyVisualization(), o.createElement("svg", {
                   className: e,
                   xmlns: "http://www.w3.org/2000/svg",
                   ref: this.m_svgRef
               }, o.createElement("defs", null, o.createElement("radialGradient", {
                   id: "buttonGradient"
               }, o.createElement("stop", {
                   offset: "0%",
                   stopColor: "var(--bordercolor)",
                   stopOpacity: "0.8"
               }), o.createElement("stop", {
                   offset: "100%",
                   stopColor: "var(--bordercolor)",
                   stopOpacity: "0"
               }))), o.createElement("polyline", {
                   id: "SourceLine",
                   stroke: "var(--bordercolor)",
                   strokeWidth: "0.1rem",
                   fill: "transparent"
               }), o.createElement("polyline", {
                   id: "SourcePath",
                   stroke: "var(--bordercolor)",
                   strokeWidth: "0.1rem",
                   fill: "transparent"
               }), o.createElement("circle", {
                   id: "SourceCircle",
                   r: "2rem",
                   fill: "url(#buttonGradient)"
               })))
           }
       }
       Object(i.b)([s.bind], v.prototype, "ComponentUpdated", null), Object(i.b)([s.bind], v.prototype, "UpdateSVGPath", null);
       class _ extends v {
           constructor(e) {
               super(e)
           }
       }
       class y extends v {
           constructor(e) {
               super(e)
           }
           GetHeightEstimate() {
               let e = 1;
               return this.props.source.value && e++, this.props.source.force && e++, e
           }
           renderBodyVisualization() {
               return o.createElement("div", {
                   className: "TriggerVisualizerContainer"
               }, this.props.source.value && this.renderBar("#SourceInputMode_Pull", "TriggerValue", this.state.value), this.props.source.force && this.renderBar("#SourceInputMode_Force", "TriggerForce", this.state.force))
           }
       }
       class f extends v {
           constructor(e) {
               super(e)
           }
           renderBodyVisualization() {
               let e = null,
                   t = "TrackpadVisualizerPip";
               return !this.state.touch && (this.props.source.touch || 0 == this.state.x && 0 == this.state.y) || (e = {
                   position: "absolute",
                   top: String(2 * (1 - this.state.y)) + "rem",
                   left: String(2 * (1 + this.state.x)) + "rem"
               }, this.state.click && (t += " Clicked")), o.createElement("div", {
                   className: "TrackpadVisualizerContainer" + (this.state.touch ? " Touched" : "")
               }, o.createElement("div", {
                   className: "TrackpadPosition"
               }, o.createElement("div", {
                   className: "VisualizerLabel"
               }, Object(a.c)("#SourceInputMode_Position")), o.createElement("div", {
                   className: "TrackpadVisualizerContainer"
               }, o.createElement("div", {
                   className: "TrackpadVisualizerBackground"
               }, e && o.createElement("div", {
                   style: e
               }, o.createElement("div", {
                   className: "TrackpadVisualizerPipContainer"
               }, o.createElement("div", {
                   className: t
               })))))), this.props.source.force && this.renderBar("#SourceInputMode_Force", "TriggerForce", this.state.force))
           }
       }
       class S extends o.Component {
           constructor(e) {
               super(e), this.m_imageRef = o.createRef(), this.state = {
                   imageScale: this.GetPointScale()
               }
           }
           get ControllerTypeInfo() {
               let e = c.a.GetDeviceInfo(this.props.devicePath);
               return c.a.GetControllerTypeInfo(e.controller_type)
           }
           componentDidMount() {
               this.setState({
                   imageScale: this.GetPointScale()
               })
           }
           EstimateSourceHeight(e) {
               let t;
               switch (e.type) {
                   case "button":
                       return 1;
                   case "trigger":
                       return t = 1, e.force && t++, e.value && t++, t;
                   case "joystick":
                   case "trackpad":
                       return t = 3, e.force && t++, t;
                   case "pose":
                   case "pinch":
                   case "skeleton":
                   case "vibration":
                       return 0;
                   default:
                       return 1
               }
           }
           renderSource(e, t, n) {
               let r = e + this.ControllerTypeInfo.controller_type;
               switch (t.type) {
                   case "button":
                       return o.createElement(_, {
                           key: r,
                           side: n,
                           controllerType: this.ControllerTypeInfo,
                           devicePath: this.props.devicePath,
                           sourcePath: e,
                           source: t,
                           visualizer: this.props.visualizer,
                           imageScale: this.GetPointScale()
                       });
                   case "trigger":
                       return o.createElement(y, {
                           key: r,
                           side: n,
                           controllerType: this.ControllerTypeInfo,
                           devicePath: this.props.devicePath,
                           sourcePath: e,
                           source: t,
                           visualizer: this.props.visualizer,
                           imageScale: this.GetPointScale()
                       });
                   case "joystick":
                   case "trackpad":
                       return o.createElement(f, {
                           key: r,
                           side: n,
                           controllerType: this.ControllerTypeInfo,
                           devicePath: this.props.devicePath,
                           sourcePath: e,
                           source: t,
                           visualizer: this.props.visualizer,
                           imageScale: this.GetPointScale()
                       });
                   case "pose":
                   case "pinch":
                   case "skeleton":
                   case "vibration":
                       return null;
                   default:
                       return o.createElement("div", {
                           key: r
                       }, "Need to add visualizer for ", t.type)
               }
           }
           GetPointScale() {
               let e = {
                   scale: 1,
                   left: 0,
                   right: 0,
                   top: 0
               };
               if (this.m_imageRef.current && this.m_imageRef.current.naturalWidth > 0) {
                   let t = this.m_imageRef.current.getBoundingClientRect();
                   e.scale = t.height / this.m_imageRef.current.naturalHeight, e.left = t.left + window.scrollX, e.right = t.right + window.scrollX, e.top = t.top + window.scrollY
               }
               return e
           }
           OnImageLoaded() {
               this.setState({
                   imageScale: this.GetPointScale()
               })
           }
           OnImageReflow() {
               this.setState({
                   imageScale: this.GetPointScale()
               })
           }
           renderImage() {
               let e = null,
                   t = null,
                   n = this.ControllerTypeInfo;
               return "/user/hand/left" == this.props.devicePath ? n.input_bindingui_left && (e = n.input_bindingui_left.uri, t = n.input_bindingui_left.transform ? n.input_bindingui_left.transform : "") : "/user/hand/right" == this.props.devicePath ? n.input_bindingui_right && (e = n.input_bindingui_right.uri, t = n.input_bindingui_right.transform ? n.input_bindingui_right.transform : "") : n.input_bindingui_left ? (e = n.input_bindingui_left.uri, t = n.input_bindingui_left.transform ? n.input_bindingui_left.transform : "") : n.input_bindingui_right && (e = n.input_bindingui_right.uri, t = n.input_bindingui_right.transform ? n.input_bindingui_right.transform : ""), e ? o.createElement("div", {
                   className: "VisualizerImageContainer"
               }, o.createElement("img", {
                   className: "VisualizerImage",
                   ref: this.m_imageRef,
                   onLoad: this.OnImageLoaded,
                   src: e,
                   style: {
                       transform: t
                   }
               }), o.createElement(h.a, {
                   onReflow: this.OnImageReflow
               })) : null
           }
           render() {
               let e = [],
                   t = [],
                   n = this.ControllerTypeInfo,
                   i = 0,
                   s = [];
               for (let e in n.input_source) {
                   let t = n.input_source[e];
                   if ("InputValueVisibility_AvailableButHidden" == t.visibility) continue;
                   let r = this.EstimateSourceHeight(t);
                   i += r, s.push({
                       sSourcePath: e,
                       inputSource: t,
                       order: t.order ? t.order : 0,
                       height: r
                   })
               }
               let a = 8;
               i > 16 && (a = i / 2);
               let l = 0,
                   c = s.sort((e, t) => e.order - t.order);
               for (let n of c) {
                   l += n.height;
                   let i = l > a ? r.Right : r.Left,
                       o = this.renderSource(n.sSourcePath, n.inputSource, i);
                   o && (i == r.Left ? e.push(o) : t.push(o))
               }
               return o.createElement("div", {
                   className: "ControllerVisualizer"
               }, o.createElement("div", {
                   className: "VisualizerLeft ControllerVisualizerEntries"
               }, e), this.renderImage(), o.createElement("div", {
                   className: "VisualizerRight ControllerVisualizerEntries"
               }, t))
           }
       }
       Object(i.b)([s.bind], S.prototype, "OnImageLoaded", null), Object(i.b)([s.bind], S.prototype, "OnImageReflow", null);
       let k = class extends o.Component {
           constructor(e) {
               super(e), this.m_mailbox = new l.c, this.m_componentRegistrations = {}, this.m_observeDisposer = null, this.m_mailbox.RegisterHandler("update_component_states", this.OnUpdateComponentStates), this.m_mailbox.Init("controller_visualizer").then(() => (this.UpdateDeviceInputStateSubscriptions(), this.m_observeDisposer = Object(m.n)(c.a, "ConnectedDevices", this.OnConnectedDevicesChanged), this.SetDefaultDeviceIfNecessary(), null)), this.state = {
                   devicePath: null
               }
           }
           componentWillUnmount() {
               this.m_observeDisposer && this.m_observeDisposer();
               for (let e of c.a.ConnectedDevices) {
                   let t = {
                       type: "cancel_input_state_updates",
                       device_path: e.root_path,
                       returnAddress: this.m_mailbox.name
                   };
                   this.m_mailbox.SendMessage("input_server", t)
               }
           }
           UpdateDeviceInputStateSubscriptions() {
               for (let e of c.a.ConnectedDevices) {
                   let t = {
                       type: "request_input_state_updates",
                       device_path: e.root_path,
                       returnAddress: this.m_mailbox.name
                   };
                   this.m_mailbox.SendMessage("input_server", t)
               }
           }
           SetDefaultDeviceIfNecessary() {
               let e = this.GetSortedDevices();
               !this.state.devicePath && e && this.setState({
                   devicePath: e[0].root_path
               })
           }
           OnConnectedDevicesChanged() {
               this.UpdateDeviceInputStateSubscriptions()
           }
           OnUpdateComponentStates(e) {
               for (let t in e.components) {
                   let n = e.device + t;
                   this.m_componentRegistrations[n] && this.m_componentRegistrations[n](e.device, t, e.components[t])
               }
           }
           RegisterSourceVisualizer(e, t, n) {
               this.m_componentRegistrations[e + t] = n
           }
           UnregisterSourceVisualizer(e, t) {
               delete this.m_componentRegistrations[e + t]
           }
           GetDeviceSortOrder(e) {
               switch (e.root_path) {
                   case "/user/hand/left":
                       return 0;
                   case "/user/hand/right":
                       return 1;
                   default:
                       return 2
               }
           }
           GetSortedDevices() {
               return c.a.ConnectedDevices.sort((e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t))
           }
           render() {
               let e, t = [],
                   n = this.GetSortedDevices();
               if (!n) return o.createElement(g.i, {
                   className: "ControllerVisualizerWrapper",
                   header: Object(a.c)("#TestControllerTitle", ""),
                   onDismissRequested: this.props.onDismissRequested
               }, o.createElement("div", {
                   className: "VisualizerLabel"
               }, Object(a.c)("#TestController_NoController")));
               for (let r of n) "TrackedDeviceClass_HMD" != r.class && (r.root_path == this.state.devicePath && (e = r.serial_number), t.push({
                   value: r.root_path,
                   sLabel: Object(a.c)("#" + r.root_path)
               }));
               return o.createElement(g.i, {
                   className: "ControllerVisualizerWrapper",
                   header: Object(a.c)("#TestControllerTitle", e),
                   onDismissRequested: this.props.onDismissRequested,
                   footer: o.createElement(g.j, {
                       leftControls: [o.createElement(b.c, {
                           key: "dropdown",
                           items: t,
                           value: this.state.devicePath,
                           defaultLabel: Object(a.c)("#" + this.state.devicePath),
                           onChange: e => {
                               this.setState({
                                   devicePath: e
                               })
                           }
                       })],
                       onDismissRequested: this.props.onDismissRequested
                   })
               }, this.state.devicePath && o.createElement(S, {
                   devicePath: this.state.devicePath,
                   serialNumber: e,
                   visualizer: this
               }))
           }
       };
       Object(i.b)([s.bind], k.prototype, "OnConnectedDevicesChanged", null), Object(i.b)([s.bind], k.prototype, "OnUpdateComponentStates", null), k = Object(i.b)([p.a], k)
   },
   YRJX: function(e, t, n) {
       "use strict";
       n.d(t, "r", (function() {
           return R
       })), n.d(t, "q", (function() {
           return M
       })), n.d(t, "h", (function() {
           return E
       })), n.d(t, "a", (function() {
           return T
       })), n.d(t, "g", (function() {
           return I
       })), n.d(t, "i", (function() {
           return P
       })), n.d(t, "d", (function() {
           return L
       })), n.d(t, "c", (function() {
           return B
       })), n.d(t, "e", (function() {
           return N
       })), n.d(t, "b", (function() {
           return F
       })), n.d(t, "k", (function() {
           return H
       })), n.d(t, "l", (function() {
           return A
       })), n.d(t, "m", (function() {
           return j
       })), n.d(t, "j", (function() {
           return U
       })), n.d(t, "f", (function() {
           return W
       })), n.d(t, "p", (function() {
           return z
       })), n.d(t, "o", (function() {
           return q
       })), n.d(t, "n", (function() {
           return Q
       }));
       var r, i, o = n("mrSG"),
           s = n("q1tI"),
           a = n("7wIv"),
           l = n("GXif"),
           c = n("6YgL"),
           d = n("CzjV"),
           u = n("hcOo"),
           h = n("/i/y"),
           p = n("7uy8"),
           m = n("2vnA"),
           g = n("Vp/w"),
           b = n("okNM"),
           v = n("p9CI"),
           _ = n("X3sx"),
           y = n("39GS"),
           f = n("nsy5"),
           S = n("8GAN"),
           k = n("vvDA"),
           C = n("Q+Z6"),
           w = n("/CXA"),
           O = n("aaBP"),
           D = n.n(O);
       const R = "DashboardPanelTopCenter",
           M = "DashboardControlStrip",
           E = e => {
               var t, n;
               const r = s.useRef(null),
                   i = s.useRef(null);
               s.useEffect(() => {
                   var e, t;
                   return null === (e = r.current) || void 0 === e ? void 0 : e.setFloatingViewStack(null === (t = i.current) || void 0 === t ? void 0 : t.viewStack)
               });
               const o = null == (t = e.scrollable) || t,
                   a = null != (n = e.foregroundReflectMultiplier) ? n : 1;
               return s.createElement(s.Fragment, null, s.createElement(h.Y, {
                   visibility: e.visible ? h.ab.Visible : h.ab.Hidden,
                   debug_name: "homepanelbackground",
                   curvature_origin_id: p.j,
                   origin: h.s.BottomCenter,
                   interactive: !1,
                   scrollable: !1,
                   target_dpi_panel_id: M,
                   target_dpi_multiplier: 2,
                   reflect: .01,
                   sampler: h.t.SingleTap
               }, s.createElement(h.Z, {
                   id: R,
                   location: h.s.TopCenter
               }), s.createElement(w.a, {
                   ref: r
               }, s.createElement("div", {
                   className: Object(u.a)("DashboardPanelBackground", e.additionalClassNames),
                   style: e.additionalStyle
               }))), s.createElement(h.kb, {
                   translation: {
                       z: 1e-5
                   }
               }, s.createElement(h.Y, {
                   visibility: e.visible ? h.ab.Visible : h.ab.Hidden,
                   debug_name: e.debugName,
                   curvature_origin_id: p.j,
                   origin: h.s.BottomCenter,
                   interactive: !0,
                   scrollable: o,
                   target_dpi_panel_id: M,
                   reflect: .2 * a
               }, s.createElement(w.c, {
                   ref: i
               }, s.createElement(c.b, null, s.createElement(v.b, {
                   scrollDirection: o ? v.a.Vertical : v.a.None,
                   className: Object(u.a)("DashboardPanel", e.additionalClassNames),
                   style: e.additionalStyle
               }, e.children))))))
           };

       function T() {
           return s.createElement("div", {
               className: "ActivitySpinner"
           }, s.createElement("div", {
               className: "Bar"
           }), s.createElement("div", {
               className: "Bar"
           }), s.createElement("div", {
               className: "Bar"
           }))
       }
       class I extends s.Component {
           constructor(e) {
               super(e), this.state = {
                   time: new Date
               }
           }
           componentDidMount() {
               let e = 60 - (new Date).getSeconds() % 60 + .01;
               this.m_clockUpdateTimeout = window.setTimeout(this.updateTime, 1e3 * e)
           }
           componentWillUnmount() {
               clearTimeout(this.m_clockUpdateTimeout)
           }
           updateTime() {
               this.setState({
                   time: new Date
               }), this.m_clockUpdateTimeout = window.setTimeout(this.updateTime, 6e4)
           }
           render() {
               const e = l.a.GetLocale();
               let t = this.state.time.toLocaleTimeString(e, {
                       hour: "numeric",
                       minute: "2-digit"
                   }),
                   n = null;
               const r = t.toLowerCase(),
                   i = Math.max(r.lastIndexOf("am"), r.lastIndexOf("pm"));
               return i >= 0 && (n = t.substring(i), t = t.substring(0, i - 1)), s.createElement("div", {
                   className: "ClockContainer"
               }, s.createElement("div", {
                   className: "Clock"
               }, t, " ", s.createElement("span", {
                   className: "Suffix"
               }, n)))
           }
       }

       function P(e) {
           return s.createElement(c.a, {
               className: "PowerMenuButton",
               onClick: e.onClick
           }, s.createElement("div", {
               className: "HoverGradient"
           }), s.createElement("div", {
               className: "ClickGradient"
           }), s.createElement("span", null, e.label), e.lineBelow && s.createElement("div", {
               className: "LineBelow"
           }))
       }
       Object(o.b)([a.bind], I.prototype, "updateTime", null);
       let V = r = class extends s.Component {
           get isShowingTooltip() {
               return r.s_CurrentlyShownTooltip === this
           }
           show() {
               r.s_CurrentlyShownTooltip = this
           }
           hide() {
               this.isShowingTooltip && (r.s_CurrentlyShownTooltip = null)
           }
           render() {
               const e = this.props.text && (this.props.shown || this.isShowingTooltip);
               return s.createElement("div", {
                   style: {
                       position: "absolute",
                       left: "50%",
                       top: "50%"
                   }
               }, s.createElement(g.a, {
                   allowableParentSelectors: [".DashboardMain"]
               }, s.createElement(h.kb, {
                   translation: {
                       y: -.2,
                       z: .05
                   }
               }, s.createElement(h.Y, {
                   visibility: e ? h.ab.Visible : h.ab.SkipInSceneGraph,
                   target_dpi_panel_id: M,
                   curvature_origin_id: p.j
               }, s.createElement("div", {
                   className: "ControlBarButtonTooltip"
               }, this.props.text)))))
           }
       };
       V.s_CurrentlyShownTooltip = null, Object(o.b)([m.f], V.prototype, "isShowingTooltip", null), Object(o.b)([m.d.bound], V.prototype, "show", null), Object(o.b)([m.d.bound], V.prototype, "hide", null), Object(o.b)([m.m], V, "s_CurrentlyShownTooltip", void 0), V = r = Object(o.b)([b.a], V);
       class x extends s.Component {
           static ShouldInvertThumbnail(e) {
               if (!e) return !1;
               if (e = e.toLowerCase(), !x.s_mapShouldInvertThumbnail.has(e)) {
                   let t = !1;
                   e.endsWith(".svg") && (t = !0), e.startsWith("data:") && x.k_rsThumbnailHashesToInvert.indexOf(D.a.hash(e)) >= 0 && (t = !0), x.s_mapShouldInvertThumbnail.set(e, t)
               }
               return x.s_mapShouldInvertThumbnail.get(e)
           }
           render() {
               var e;
               const t = null != (e = this.props.shadow) && e,
                   n = x.ShouldInvertThumbnail(this.props.src);
               return s.createElement("div", {
                   className: "Icon"
               }, t && s.createElement("img", {
                   className: "Shadow",
                   src: this.props.src
               }), s.createElement("img", {
                   className: Object(u.a)(["BlackToWhite", n]),
                   src: this.props.src
               }))
           }
       }
       var L, B;
       x.k_rsThumbnailHashesToInvert = ["5cbd0ebd6459cdaf75fdcafc5051f4e0", "c77452e60fc29227b33773ff6e74f8a1", "44b62220b39ba717fbfc65e3b4225491", "0ea4aa3d9529b716f0f1957684247dee", "86bbab56235b55f6e5e7d288342931d7"], x.s_mapShouldInvertThumbnail = new Map,
           function(e) {
               e[e.Large = 0] = "Large", e[e.Small = 1] = "Small", e[e.App = 2] = "App"
           }(L || (L = {})),
           function(e) {
               e[e.Center = 0] = "Center", e[e.Fill = 1] = "Fill"
           }(B || (B = {}));
       const N = e => s.createElement("div", {
           className: Object(u.a)("ControlBarGroup", L[e.style])
       }, e.children);
       let F = class extends s.Component {
           constructor(e) {
               super(e), this.m_refTooltip = s.createRef()
           }
           onMouseEnter() {
               var e, t, n;
               null === (e = this.m_refTooltip.current) || void 0 === e || e.show(), null === (n = (t = this.props).onMouseEnter) || void 0 === n || n.call(t)
           }
           onMouseLeave() {
               var e, t, n;
               null === (e = this.m_refTooltip.current) || void 0 === e || e.hide(), null === (n = (t = this.props).onMouseLeave) || void 0 === n || n.call(t)
           }
           render() {
               var e;
               return s.createElement(c.a, {
                   className: Object(u.a)("ControlBarButton", this.props.additionalClassNames, B[(e = this.props.imageStyle, null != e ? e : B.Center)] + "Image", ["Disabled", !1 === this.props.enabled], ["Active", !!this.props.active]),
                   style: {
                       "--image-url": this.props.imageUrl ? "url('" + this.props.imageUrl + "')" : void 0
                   },
                   onClick: this.props.onClick,
                   onMouseDown: this.props.onMouseDown,
                   onMouseEnter: this.onMouseEnter,
                   onMouseLeave: this.onMouseLeave,
                   pressSoundEffect: d.a.ControlBarButtonPress,
                   releaseSoundEffect: d.a.ControlBarButtonRelease
               }, this.props.centerPanelAnchorID && s.createElement("div", {
                   style: {
                       position: "absolute",
                       left: "50%",
                       top: "50%"
                   }
               }, s.createElement(g.a, {
                   allowableParentSelectors: [".DashboardMain"],
                   panelAnchorID: this.props.centerPanelAnchorID
               })), s.createElement(V, {
                   text: this.props.label,
                   ref: this.m_refTooltip
               }), s.createElement(x, {
                   src: this.props.imageUrl
               }))
           }
       };
       Object(o.b)([a.bind], F.prototype, "onMouseEnter", null), Object(o.b)([a.bind], F.prototype, "onMouseLeave", null), F = Object(o.b)([b.a], F);
       const H = e => s.createElement(N, {
           style: e.style
       }, s.createElement(F, Object.assign({}, e)));
       class A extends s.Component {
           constructor(e) {
               super(e), this.m_BatteryStateChangedCallbackHandle = null, this.m_DeviceRoleChangedCallbackHandle = null, this.m_DeviceEventCallbackHandle = null, this.deviceIndex = h.mb, this.batteryLevelStable = null, this.state = {
                   batteryIconPath: null
               }
           }
           componentDidMount() {
               var e, t, n;
               this.m_BatteryStateChangedCallbackHandle = null === (e = VRHTML) || void 0 === e ? void 0 : e.RegisterForBatteryStateChangedEvents(this.onBatteryStateChanged), this.m_DeviceRoleChangedCallbackHandle = null === (t = VRHTML) || void 0 === t ? void 0 : t.RegisterForDeviceRoleChangedEvents(this.onDeviceRoleChanged), this.m_DeviceEventCallbackHandle = null === (n = VRHTML) || void 0 === n ? void 0 : n.RegisterForDeviceEvents(this.onDeviceEvent), this.update()
           }
           componentWillUnmount() {
               this.m_BatteryStateChangedCallbackHandle && (this.m_BatteryStateChangedCallbackHandle.unregister(), this.m_BatteryStateChangedCallbackHandle = null), this.m_DeviceRoleChangedCallbackHandle && (this.m_DeviceRoleChangedCallbackHandle.unregister(), this.m_DeviceRoleChangedCallbackHandle = null), this.m_DeviceEventCallbackHandle && (this.m_DeviceEventCallbackHandle.unregister(), this.m_DeviceEventCallbackHandle = null)
           }
           updateControllerStatus() {
               if (!VRHTML) return;
               let e = !1,
                   t = !1,
                   n = h.mb;
               if (void 0 !== this.props.role ? n = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(this.props.role) : void 0 !== this.props.deviceIndex && (n = this.props.deviceIndex), n != this.deviceIndex && (this.batteryLevelStable = null, this.deviceIndex = n), n != h.mb && (e = VRHTML.VRProperties.GetBoolProperty(n, h.y.DeviceProvidesBatteryStatus_Bool), e)) {
                   const e = VRHTML.VRProperties.GetFloatProperty(n, h.y.DeviceBatteryPercentage_Float);
                   t = VRHTML.VRProperties.GetBoolProperty(n, h.y.DeviceIsCharging_Bool), null == this.batteryLevelStable || 0 == this.batteryLevelStable ? this.batteryLevelStable = e : (this.batteryLevelStable = Math.min(this.batteryLevelStable, e + A.kBatteryLevelHysteresis, 1), this.batteryLevelStable = Math.max(this.batteryLevelStable, e - A.kBatteryLevelHysteresis, 0))
               }
               let r = k.a.GetBatteryIcon(e, t, this.batteryLevelStable, this.props.style);
               r != this.state.batteryIconPath && this.setState({
                   batteryIconPath: r
               })
           }
           update() {
               window.setTimeout(this.updateControllerStatus, 0)
           }
           onBatteryStateChanged(e) {
               this.update()
           }
           onDeviceRoleChanged() {
               this.update()
           }
           onDeviceEvent(e, t, n) {
               e != h.m.Activated && e != h.m.Deactivated || this.update()
           }
           render() {
               return s.createElement("div", {
                   className: "BatteryStatus"
               }, s.createElement("img", {
                   src: this.state.batteryIconPath
               }))
           }
       }
       A.kBatteryLevelHysteresis = .02, Object(o.b)([a.bind], A.prototype, "updateControllerStatus", null), Object(o.b)([a.bind], A.prototype, "onBatteryStateChanged", null), Object(o.b)([a.bind], A.prototype, "onDeviceRoleChanged", null), Object(o.b)([a.bind], A.prototype, "onDeviceEvent", null);
       s.Component;
       const j = e => s.createElement("div", {
           className: "Title"
       }, s.createElement(x, {
           src: e.iconUrl,
           shadow: !0
       }), s.createElement("span", {
           className: "NoWrapText"
       }, e.name));
       class U extends s.Component {
           constructor(e) {
               var t, n;
               super(e), this.m_trackingStateChangedEventHandle = null, this.m_mailbox = new h.c, this.m_mailbox.Init("dashboard_resetseatedbutton"), this.state = {
                   eTrackingUniverseOrigin: (n = null === (t = VRHTML) || void 0 === t ? void 0 : t.VRCompositor.GetTrackingSpace(), null != n ? n : h.z.Standing)
               }
           }
           componentDidMount() {
               var e;
               this.m_trackingStateChangedEventHandle = null === (e = VRHTML) || void 0 === e ? void 0 : e.VRCompositor.RegisterForTrackingSpaceChangedEvents(this.onTrackingSpaceChanged), this.onTrackingSpaceChanged()
           }
           componentWillUnmount() {
               this.m_trackingStateChangedEventHandle && (this.m_trackingStateChangedEventHandle.unregister(), this.m_trackingStateChangedEventHandle = null)
           }
           onTrackingSpaceChanged() {
               var e, t;
               this.setState({
                   eTrackingUniverseOrigin: (t = null === (e = VRHTML) || void 0 === e ? void 0 : e.VRCompositor.GetTrackingSpace(), null != t ? t : h.z.Standing)
               })
           }
           onResetUniverseOrigin() {
               var e;
               null === (e = VRHTML) || void 0 === e || e.VRDashboardManager.HideDashboard("reset_universe_origin");
               let t = {
                   type: S.a,
                   countdown_seconds: 3,
                   universe: this.state.eTrackingUniverseOrigin
               };
               this.m_mailbox.SendMessage(S.b, t)
           }
           render() {
               switch (this.state.eTrackingUniverseOrigin) {
                   case h.z.Seated:
                       return s.createElement(F, {
                           imageUrl: "/dashboard/images/icons/svr_reset_tracking.svg",
                           label: Object(l.c)("#PowerMenuResetSeatedPosition"),
                           onClick: this.onResetUniverseOrigin
                       });
                   case h.z.Standing:
                       return s.createElement(F, {
                           imageUrl: "/dashboard/images/icons/svr_reset_tracking.svg",
                           label: Object(l.c)("#PowerMenuResetStandingPosition"),
                           onClick: this.onResetUniverseOrigin
                       });
                   default:
                       return null
               }
           }
       }
       Object(o.b)([a.bind], U.prototype, "onTrackingSpaceChanged", null), Object(o.b)([a.bind], U.prototype, "onResetUniverseOrigin", null);
       class W extends s.Component {
           constructor() {
               super(...arguments), this.m_sAnchorID = Math.round(1e7 * Math.random()).toString(), this.m_resizeObserver = null, this.m_refPanelElem = s.createRef(), this.m_refBackgroundElem = s.createRef()
           }
           componentWillUnmount() {
               this.m_resizeObserver && (this.m_resizeObserver.disconnect(), this.m_resizeObserver = null)
           }
           componentDidUpdate() {
               this.updateBackgroundSize()
           }
           onResizeObserved(e, t) {
               this.updateBackgroundSize()
           }
           updateBackgroundSize() {
               this.m_refPanelElem.current && this.m_refBackgroundElem.current && (this.m_refBackgroundElem.current.style.width = this.m_refPanelElem.current.clientWidth / 2 + "px", this.m_refBackgroundElem.current.style.height = this.m_refPanelElem.current.clientHeight / 2 + "px")
           }
           onPortalDidMount() {
               this.m_refPanelElem.current && (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved), this.m_resizeObserver.observe(this.m_refPanelElem.current), this.updateBackgroundSize())
           }
           render() {
               const e = this.props.position,
                   t = Math.asin(e) / Math.PI;
               return s.createElement(s.Fragment, null, s.createElement(h.Z, {
                   location: {
                       x: e,
                       y: -1
                   }
               }, s.createElement(h.kb, {
                   id: this.m_sAnchorID,
                   translation: {
                       y: .01 * Math.abs(t),
                       z: -.03 * Math.abs(t)
                   },
                   rotation: {
                       y: 15 * t,
                       z: 2 * t
                   }
               })), s.createElement(g.b, {
                   allowableParentSelectors: [".DashboardMain"],
                   onPortalDidMount: this.onPortalDidMount
               }, s.createElement(h.ib, {
                   color: this.props.tintColor
               }, s.createElement(f.a, {
                   additionalClassName: "ControlBarTrayAnimation",
                   visible: this.props.visible,
                   duration: .25,
                   onStartShowing: this.updateBackgroundSize,
                   onShown: this.updateBackgroundSize
               }, s.createElement(h.kb, {
                   parent_id: this.m_sAnchorID,
                   translation: {
                       y: .04,
                       z: -.01
                   }
               }, s.createElement(h.Y, {
                   curvature_origin_id: p.j,
                   origin: h.s.TopCenter,
                   interactive: !0,
                   scrollable: !1,
                   target_dpi_panel_id: M,
                   sort_depth_bias: this.props.sort_depth_bias
               }, s.createElement("div", {
                   className: Object(u.a)("ControlBarTray", this.props.additionalClassNames),
                   onMouseEnter: this.props.onMouseEnter,
                   onMouseMove: this.props.onMouseMove,
                   onMouseLeave: this.props.onMouseLeave,
                   ref: this.m_refPanelElem
               }, this.props.children)), s.createElement(h.kb, {
                   translation: {
                       z: -1e-5
                   }
               }, s.createElement(h.Y, {
                   curvature_origin_id: p.j,
                   origin: h.s.TopCenter,
                   interactive: !1,
                   scrollable: !1,
                   target_dpi_panel_id: M,
                   target_dpi_multiplier: 2,
                   reflect: .04,
                   sampler: h.t.SingleTap,
                   sort_depth_bias: this.props.sort_depth_bias
               }, s.createElement("div", {
                   className: "ControlBarTrayBackground",
                   ref: this.m_refBackgroundElem
               }))))))))
           }
       }
       Object(o.b)([a.bind], W.prototype, "onResizeObserved", null), Object(o.b)([a.bind], W.prototype, "updateBackgroundSize", null), Object(o.b)([a.bind], W.prototype, "onPortalDidMount", null);
       let z = class extends s.Component {
           constructor() {
               super(...arguments), this.m_refSlider = s.createRef(), this.m_refTray = s.createRef(), this.m_bMouseInSlider = !1
           }
           get slider() {
               return this.m_refSlider.current
           }
           onSliderMouseEnter() {
               this.m_bMouseInSlider = !0
           }
           onSliderMouseLeave() {
               this.m_bMouseInSlider = !1
           }
           onSliderFinalChange() {
               var e, t;
               this.m_bMouseInSlider || null === (t = (e = this.props).onFinalChangeMouseOutside) || void 0 === t || t.call(e)
           }
           get showAudioMirrorControls() {
               return C.d.settings.get("/settings/audio/enablePlaybackMirrorIndependentVolume") && C.d.settings.get("/settings/audio/enablePlaybackMirror")
           }
           get enableAudioMirrorControls() {
               return !!C.d.settings.get("/settings/audio/activePlaybackMirrorDevice")
           }
           render() {
               const e = (this.showAudioMirrorControls ? 3 : 2) >= 3 ? 0 : this.props.position;
               return s.createElement(W, Object.assign({}, this.props, {
                   position: e,
                   ref: this.m_refTray,
                   additionalClassNames: "VolumeTray"
               }), s.createElement("div", {
                   className: "Section"
               }, s.createElement(K, {
                   onClick: y.a.Instance.toggleMicrophoneMute,
                   title: y.a.Instance.microphoneMuted ? Object(l.c)("#UnmuteMicrophone") : Object(l.c)("#MuteMicrophone")
               }, s.createElement("img", {
                   className: "BlackToWhite",
                   src: y.a.Instance.microphoneMuted ? "/dashboard/images/icons/svr_mic_mute.svg" : "/dashboard/images/icons/svr_mic_active.svg"
               })), s.createElement(G, {
                   title: Object(l.c)("#MicrophoneVolume"),
                   value: y.a.Instance.microphoneVolume,
                   onChange: y.a.Instance.setMicrophoneVolume,
                   onMouseEnter: this.onSliderMouseEnter,
                   onMouseLeave: this.onSliderMouseLeave,
                   onFinalChange: this.onSliderFinalChange,
                   renderValue: e => Math.round(100 * e) + "%",
                   valueStyleVariant: _.c.OnHandle,
                   additionalClassName: Object(u.a)(["Muted", y.a.Instance.microphoneMuted]),
                   interactionEndSoundEffect: d.a.VolumePreview
               })), this.showAudioMirrorControls && s.createElement("div", {
                   className: "Section"
               }, s.createElement(K, {
                   onClick: y.a.Instance.toggleMirrorMute,
                   enabled: this.enableAudioMirrorControls,
                   title: y.a.Instance.mirrorMuted ? Object(l.c)("#UnmuteAudioMirror") : Object(l.c)("#MuteAudioMirror")
               }, s.createElement("img", {
                   className: "BlackToWhite",
                   src: y.a.Instance.mirrorMuted ? "/dashboard/images/icons/svr_volume_mirror_mute.svg" : "/dashboard/images/icons/svr_volume_mirror.svg"
               })), s.createElement(G, {
                   title: Object(l.c)("#AudioMirrorVolume"),
                   value: y.a.Instance.mirrorVolume,
                   enabled: this.enableAudioMirrorControls,
                   onChange: y.a.Instance.setMirrorVolume,
                   onMouseEnter: this.onSliderMouseEnter,
                   onMouseLeave: this.onSliderMouseLeave,
                   onFinalChange: this.onSliderFinalChange,
                   renderValue: e => Math.round(100 * e) + "%",
                   valueStyleVariant: _.c.OnHandle,
                   additionalClassName: Object(u.a)(["Muted", y.a.Instance.mirrorMuted]),
                   interactionEndSoundEffect: d.a.VolumePreview
               })), s.createElement("div", {
                   className: "Section"
               }, s.createElement(K, {
                   onClick: y.a.Instance.toggleMute,
                   title: y.a.Instance.muted ? Object(l.c)("#Unmute_Headset") : Object(l.c)("#Mute_Headset")
               }, s.createElement("img", {
                   className: "BlackToWhite",
                   src: y.a.Instance.muted ? "/dashboard/images/icons/svr_volume_mute.svg" : "/dashboard/images/icons/svr_volume.svg"
               })), s.createElement(G, {
                   title: Object(l.c)("#HeadsetVolume"),
                   sliderRef: this.m_refSlider,
                   value: y.a.Instance.volume,
                   onChange: y.a.Instance.setVolume,
                   onMouseEnter: this.onSliderMouseEnter,
                   onMouseLeave: this.onSliderMouseLeave,
                   onFinalChange: this.onSliderFinalChange,
                   renderValue: e => Math.round(100 * e) + "%",
                   valueStyleVariant: _.c.OnHandle,
                   additionalClassName: Object(u.a)(["Muted", y.a.Instance.muted]),
                   interactionEndSoundEffect: d.a.VolumePreview
               })))
           }
       };
       Object(o.b)([a.bind], z.prototype, "onSliderMouseEnter", null), Object(o.b)([a.bind], z.prototype, "onSliderMouseLeave", null), Object(o.b)([a.bind], z.prototype, "onSliderFinalChange", null), Object(o.b)([m.f], z.prototype, "showAudioMirrorControls", null), Object(o.b)([m.f], z.prototype, "enableAudioMirrorControls", null), z = Object(o.b)([b.a], z);
       let G = class extends s.Component {
           constructor(e) {
               super(e), this.state = {
                   bSliding: !1,
                   bHover: !1
               }
           }
           onMouseEnter(e) {
               var t, n;
               this.setState({
                   bHover: !0
               }), null === (n = (t = this.props).onMouseEnter) || void 0 === n || n.call(t, e)
           }
           onMouseLeave(e) {
               var t, n;
               this.setState({
                   bHover: !1
               }), null === (n = (t = this.props).onMouseLeave) || void 0 === n || n.call(t, e)
           }
           onInteractionStart() {
               var e, t;
               this.setState({
                   bSliding: !0
               }), null === (t = (e = this.props).onInteractionStart) || void 0 === t || t.call(e)
           }
           onInteractionEnd() {
               var e, t;
               this.setState({
                   bSliding: !1
               }), null === (t = (e = this.props).onInteractionEnd) || void 0 === t || t.call(e)
           }
           render() {
               let e = Object.assign({}, this.props);
               return s.createElement("div", {
                   className: "SliderContainer"
               }, this.props.title && s.createElement(V, {
                   text: this.props.title,
                   shown: this.state.bHover || this.state.bSliding
               }), s.createElement(_.a, Object.assign({}, e, {
                   onMouseEnter: this.onMouseEnter,
                   onMouseLeave: this.onMouseLeave,
                   onInteractionStart: this.onInteractionStart,
                   onInteractionEnd: this.onInteractionEnd,
                   ref: this.props.sliderRef
               })))
           }
       };
       Object(o.b)([a.bind], G.prototype, "onMouseEnter", null), Object(o.b)([a.bind], G.prototype, "onMouseLeave", null), Object(o.b)([a.bind], G.prototype, "onInteractionStart", null), Object(o.b)([a.bind], G.prototype, "onInteractionEnd", null), G = Object(o.b)([b.a], G);
       let K = class extends s.Component {
           constructor(e) {
               super(e), this.m_refTooltip = s.createRef()
           }
           onMouseEnter(e) {
               var t, n, r;
               null === (t = this.m_refTooltip.current) || void 0 === t || t.show(), null === (r = (n = this.props).onMouseEnter) || void 0 === r || r.call(n, e)
           }
           onMouseLeave(e) {
               var t, n, r;
               null === (t = this.m_refTooltip.current) || void 0 === t || t.hide(), null === (r = (n = this.props).onMouseLeave) || void 0 === r || r.call(n, e)
           }
           render() {
               return s.createElement(c.a, Object.assign({}, this.props, {
                   className: Object(u.a)("ButtonControl", "Round", this.props.className),
                   onMouseEnter: this.onMouseEnter,
                   onMouseLeave: this.onMouseLeave
               }), this.props.title && s.createElement(V, {
                   text: this.props.title,
                   ref: this.m_refTooltip
               }), this.props.children)
           }
       };
       Object(o.b)([a.bind], K.prototype, "onMouseEnter", null), Object(o.b)([a.bind], K.prototype, "onMouseLeave", null), K = Object(o.b)([b.a], K);
       let q = i = class extends s.Component {
           constructor() {
               super(...arguments), this.m_vecOriginalMousePosition = null
           }
           componentWillUnmount() {
               this.stopSliding()
           }
           get slider() {
               var e;
               return null === (e = this.props.refVolumeTray.current) || void 0 === e ? void 0 : e.slider
           }
           onButtonMouseDown(e) {
               var t, n;
               this.m_vecOriginalMousePosition = {
                   x: e.clientX,
                   y: e.clientY
               }, window.document.addEventListener("mouseup", this.onWindowMouseUp), window.document.addEventListener("mousemove", this.onWindowMouseMove), null === (n = (t = this.props).onShowTray) || void 0 === n || n.call(t)
           }
           onWindowMouseMove(e) {
               if (!this.slider || this.slider.isSliding) return;
               const t = {
                   x: e.clientX,
                   y: e.clientY
               };
               Object(h.M)(Object(h.gb)(t, this.m_vecOriginalMousePosition)) > i.MIN_DRAG_THRESHOLD && this.startSliding(t)
           }
           onWindowMouseUp(e) {
               this.stopSliding()
           }
           startSliding(e) {
               var t;
               null === (t = this.slider) || void 0 === t || t.startExternalSliding(e)
           }
           stopSliding() {
               var e, t, n, r;
               window.document.removeEventListener("mouseup", this.onWindowMouseUp), window.document.removeEventListener("mousemove", this.onWindowMouseMove), (null === (e = this.slider) || void 0 === e ? void 0 : e.isSliding) && (null === (n = (t = this.props).onHideTray) || void 0 === n || n.call(t)), null === (r = this.slider) || void 0 === r || r.stopExternalSliding()
           }
           render() {
               return s.createElement(F, {
                   imageUrl: y.a.Instance.muted ? "/dashboard/images/icons/svr_volume_mute.svg" : "/dashboard/images/icons/svr_volume.svg",
                   active: this.props.active,
                   label: this.props.active ? null : Object(l.c)("#Volume"),
                   onMouseDown: this.onButtonMouseDown,
                   onMouseEnter: this.props.onMouseEnter,
                   onMouseLeave: this.props.onMouseLeave
               })
           }
       };
       q.MIN_DRAG_THRESHOLD = 35, Object(o.b)([a.bind], q.prototype, "onButtonMouseDown", null), Object(o.b)([a.bind], q.prototype, "onWindowMouseMove", null), Object(o.b)([a.bind], q.prototype, "onWindowMouseUp", null), q = i = Object(o.b)([b.a], q);
       const Q = e => {
           const t = s.useRef();
           return s.createElement(c.a, {
               className: Object(u.a)("ButtonControl", ["Active", e.active], ["WithIcon", !!e.iconUrl], e.additionalClassNames),
               onClick: e.onClick,
               onMouseEnter: () => {
                   var n;
                   null === (n = t.current) || void 0 === n || n.show(), e.onMouseEnter && e.onMouseEnter()
               },
               onMouseLeave: () => {
                   var n;
                   null === (n = t.current) || void 0 === n || n.hide(), e.onMouseLeave && e.onMouseLeave()
               },
               enabled: e.enabled
           }, e.title && s.createElement(V, {
               text: e.title,
               ref: t
           }), e.label && s.createElement("span", null, e.label), e.iconUrl && s.createElement("img", {
               className: "Icon BlackToWhite",
               src: e.iconUrl
           }))
       }
   },
   "ru2+": function(e, t, n) {
       "use strict";
       n.d(t, "a", (function() {
           return b
       }));
       var r = n("mrSG"),
           i = n("q1tI"),
           o = n("okNM"),
           s = n("7wIv"),
           a = n("GXif"),
           l = n("MYgy"),
           c = n("Z0gP"),
           d = n("2vnA"),
           u = n("uFkT"),
           h = n("6YgL"),
           p = n("hcOo"),
           m = n("TbT/");
       let g = class extends i.Component {
           constructor(e) {
               super(e), this.state = {
                   deviceStatus: null
               }
           }
           get trackerConfig() {
               return l.a.GetTrackerBinding(this.props.trackerPath)
           }
           OnTrackerRoleChanged(e) {
               l.a.SetTrackerBinding(this.props.trackerPath, e, this.trackerConfig.controller_role)
           }
           OnControllerRoleChanged(e) {
               l.a.SetTrackerBinding(this.props.trackerPath, this.trackerConfig.role, e)
           }
           BuzzTracker() {
               l.a.PulseHaptics(this.trackerConfig.device_path_handle)
           }
           get deviceInfo() {
               return u.a.GetDeviceInfo(this.props.trackerPath)
           }
           IsConnected() {
               return !(!this.deviceInfo || !this.deviceInfo.is_connected)
           }
           IsIdentifiable() {
               return !(!this.IsConnected() || !this.deviceInfo.is_identifiable)
           }
           render() {
               let e = [];
               if ("TrackerRole_Handed" == this.trackerConfig.role) {
                   e = ["TrackedControllerRole_Invalid", "TrackedControllerRole_LeftHand", "TrackedControllerRole_RightHand"].map(e => ({
                       value: e,
                       sLabel: Object(a.c)("#" + e)
                   }))
               }
               const t = this.trackerConfig.device_path_string;
               let n = t;
               n.includes("vive_tracker") && (n = n.substring(n.indexOf("vive_tracker") + "vive_tracker".length, n.length));
               let r = null;
               return this.IsConnected() ? this.IsIdentifiable() || (r = Object(a.c)("#Settings_ViveTracker_Identify_NotIdentifiable")) : r = Object(a.c)("#Settings_ViveTracker_Identify_NotConnected"), i.createElement(m.c, {
                   className: "SettingsItem TrackerEntry"
               }, i.createElement("div", {
                   className: "Label",
                   title: t
               }, i.createElement("span", null, n), i.createElement("div", {
                   title: Object(a.c)(this.IsConnected() ? "#Settings_ViveTracker_Connected" : "#Settings_ViveTracker_Disconnected"),
                   className: Object(p.a)("TrackerConnectionIndicator", ["Connected", c.a.connected && this.IsConnected()], ["Disconnected", c.a.connected && !this.IsConnected()])
               })), i.createElement("div", {
                   className: Object(p.a)("SubsectionStem")
               }, i.createElement(m.c, {
                   title: r
               }, i.createElement(h.a, {
                   className: "ButtonControl",
                   enabled: this.IsIdentifiable(),
                   onClick: this.BuzzTracker
               }, Object(a.c)("#TrackerEditor_BuzzTracker")))), i.createElement("div", {
                   className: "Subsection WithStem"
               }, i.createElement(m.h, {
                   label: Object(a.c)("#Settings_ViveTracker_Role"),
                   items: this.props.validTrackerRoles.map(e => ({
                       value: e,
                       sLabel: Object(a.c)("#" + e)
                   })),
                   value: this.trackerConfig.role,
                   onChange: this.OnTrackerRoleChanged
               }), e.length > 0 && i.createElement(m.h, {
                   label: Object(a.c)("#Settings_ViveTracker_Hand"),
                   items: e,
                   value: this.trackerConfig.controller_role,
                   onChange: this.OnControllerRoleChanged
               })))
           }
       };
       Object(r.b)([d.f], g.prototype, "trackerConfig", null), Object(r.b)([s.bind], g.prototype, "OnTrackerRoleChanged", null), Object(r.b)([s.bind], g.prototype, "OnControllerRoleChanged", null), Object(r.b)([s.bind], g.prototype, "BuzzTracker", null), Object(r.b)([d.f], g.prototype, "deviceInfo", null), g = Object(r.b)([o.a], g);
       let b = class extends i.Component {
           constructor(e) {
               super(e), this.m_nGetInputStateIntervalHandle = 0
           }
           componentDidMount() {
               this.m_nGetInputStateIntervalHandle = window.setInterval(() => u.a.GetInputState(), 2e3), u.a.GetInputState()
           }
           componentWillUnmount() {
               window.clearInterval(this.m_nGetInputStateIntervalHandle)
           }
           render() {
               let e = l.a.TrackerBindings,
                   t = void 0;
               return e && e.trackers && (t = e.trackers.map((t, n) => i.createElement(g, {
                   key: n,
                   trackerPath: t.device_path_string,
                   validTrackerRoles: e.valid_roles
               }))), i.createElement("div", {
                   className: "TrackerEditorModal"
               }, t)
           }
       };
       b = Object(r.b)([o.a], b)
   },
   vvDA: function(e, t, n) {
       "use strict";
       n.d(t, "b", (function() {
           return r
       })), n.d(t, "a", (function() {
           return l
       }));
       var r, i = n("mrSG"),
           o = n("q1tI"),
           s = n("7wIv"),
           a = n("/i/y");
       ! function(e) {
           e[e.HorizontalPips = 0] = "HorizontalPips", e[e.VerticalBattery = 1] = "VerticalBattery"
       }(r || (r = {}));
       class l extends o.Component {
           constructor(e) {
               super(e), this.m_BatteryStateChangedCallbackHandle = null, this.m_DeviceRoleChangedCallbackHandle = null, this.m_DeviceEventCallbackHandle = null, this.batteryLevelStable = null, this.state = {
                   batteryIconPath: null,
                   roleIconPath: null
               }
           }
           componentDidMount() {
               var e, t, n;
               this.m_BatteryStateChangedCallbackHandle = null === (e = a.lb) || void 0 === e ? void 0 : e.RegisterForBatteryStateChangedEvents(this.OnBatteryStateChanged), this.m_DeviceRoleChangedCallbackHandle = null === (t = a.lb) || void 0 === t ? void 0 : t.RegisterForDeviceRoleChangedEvents(this.OnDeviceRoleChanged), this.m_DeviceEventCallbackHandle = null === (n = a.lb) || void 0 === n ? void 0 : n.RegisterForDeviceEvents(this.OnDeviceEvent), this.UpdateControllerStatus()
           }
           componentWillUnmount() {
               this.m_BatteryStateChangedCallbackHandle && (this.m_BatteryStateChangedCallbackHandle.unregister(), this.m_BatteryStateChangedCallbackHandle = null), this.m_DeviceRoleChangedCallbackHandle && (this.m_DeviceRoleChangedCallbackHandle.unregister(), this.m_DeviceRoleChangedCallbackHandle = null), this.m_DeviceEventCallbackHandle && (this.m_DeviceEventCallbackHandle.unregister(), this.m_DeviceEventCallbackHandle = null)
           }
           UpdateControllerStatus() {
               var e;
               if (!a.lb) return;
               const t = a.lb.VRProperties.GetBoolProperty(this.props.trackedDeviceIndex, a.y.DeviceProvidesBatteryStatus_Bool),
                   n = a.lb.VRSystem.GetControllerRoleForTrackedDeviceIndex(this.props.trackedDeviceIndex);
               let i = !1;
               if (t) {
                   const t = null != (e = a.lb.VRProperties.GetFloatProperty(this.props.trackedDeviceIndex, a.y.DeviceBatteryPercentage_Float)) ? e : 0;
                   i = a.lb.VRProperties.GetBoolProperty(this.props.trackedDeviceIndex, a.y.DeviceIsCharging_Bool), null == this.batteryLevelStable || 0 == this.batteryLevelStable ? this.batteryLevelStable = t : (this.batteryLevelStable = Math.min(this.batteryLevelStable, t + l.kBatteryLevelHysteresis, 1), this.batteryLevelStable = Math.max(this.batteryLevelStable, t - l.kBatteryLevelHysteresis, 0))
               }
               let o = l.GetBatteryIcon(t, i, this.batteryLevelStable, r.HorizontalPips),
                   s = this.GetRoleIcon(n);
               o == this.state.batteryIconPath && s == this.state.roleIconPath || this.setState({
                   batteryIconPath: o,
                   roleIconPath: s
               })
           }
           GetRoleIcon(e) {
               switch (e) {
                   case a.w.TrackedControllerRole_RightHand:
                       return "images/icons/controller_model_right.png";
                   case a.w.TrackedControllerRole_LeftHand:
                       return "images/icons/controller_model_left.png"
               }
               return null
           }
           static GetBatteryIcon(e, t, n, i) {
               if (!e) return null;
               const o = i == r.VerticalBattery ? "images/icons/vert" : "images/icons/controller_model";
               return t ? n < .15 ? o + "_charging_red.png" : o + "_charging.png" : 0 == n ? null : n < .15 ? o + "_low.png" : n < .3 ? o + "_battery_1.png" : n < .6 ? o + "_battery_2.png" : n < .9 ? o + "_battery_3.png" : o + "_battery_4.png"
           }
           OnBatteryStateChanged(e) {
               e == this.props.trackedDeviceIndex && this.UpdateControllerStatus()
           }
           OnDeviceRoleChanged() {
               this.UpdateControllerStatus()
           }
           OnDeviceEvent(e, t, n) {
               e == a.m.Activated && n == this.props.trackedDeviceIndex && this.UpdateControllerStatus()
           }
           render() {
               return o.createElement(a.Y, {
                   width: void 0,
                   height: void 0,
                   interactive: !1,
                   rendermodel_component_device_index: this.props.trackedDeviceIndex,
                   rendermodel_component_name: "status",
                   debug_name: "controllerstatus_" + this.props.trackedDeviceIndex
               }, o.createElement("div", {
                   className: "ControllerStatusRoot",
                   style: {
                       width: 256,
                       height: 256
                   }
               }, o.createElement("div", {
                   className: "ControllerStatusFrame"
               }, o.createElement("div", {
                   className: "ControllerHandFrame",
                   style: {
                       width: 210,
                       marginLeft: 23,
                       height: 110,
                       marginTop: 18
                   }
               }, o.createElement("img", {
                   className: "ControllerHand",
                   src: this.state.roleIconPath
               })), o.createElement("div", {
                   className: "ControllerBatteryFrame",
                   style: {
                       width: 210,
                       marginLeft: 23,
                       height: 110,
                       marginTop: 18,
                       opacity: .85
                   }
               }, o.createElement("img", {
                   className: "ControllerBattery",
                   src: this.state.batteryIconPath
               })))))
           }
       }
       l.kBatteryLevelHysteresis = .02, Object(i.b)([s.bind], l.prototype, "OnBatteryStateChanged", null), Object(i.b)([s.bind], l.prototype, "OnDeviceRoleChanged", null), Object(i.b)([s.bind], l.prototype, "OnDeviceEvent", null)
   },
   xCzn: function(e, t, n) {
       "use strict";
       n.r(t), n.d(t, "VRKeyboard", (function() {
           return f
       }));
       var r, i, o, s, a = n("mrSG"),
           l = n("q1tI"),
           c = n("i8i4"),
           d = n("vDqi"),
           u = n.n(d),
           h = n("7wIv"),
           p = n("/i/y"),
           m = n("GXif"),
           g = n("Q+Z6"),
           b = n("uFkT"),
           v = n("Kysl"),
           _ = n("6YgL"),
           y = n("CzjV");
       class f extends l.Component {
           constructor(e) {
               var t, n;
               super(e), this.m_genid = 0, this.m_language = null, this.m_languageToLayout = new Map, this.m_keyTypeToHandler = null, this.m_curShiftPlane = null, this.m_keyElements = null, this.m_mailbox = new p.c, this.m_mailbox.Init("keyboard").then(() => {
                   this.m_mailbox.RegisterHandler("show_keyboard", this.OnRequestShowKeyboard), this.m_mailbox.RegisterHandler("hide_keyboard", this.OnRequestHideKeyboard)
               }), this.initializeKeyHandlers(), this.state = {
                   bFading: !1,
                   bVisible: !1,
                   bMinimalMode: !1,
                   bMultilinePreview: !1,
                   inputMode: p.p.Normal,
                   presentation: "overlay",
                   shiftPlaneName: "normal",
                   layout: null,
                   langLayout: null,
                   text: "",
                   textPos: 0,
                   suggestions: []
               }, null === (t = VRHTML) || void 0 === t || t.VRKeyboard.LoadSuggestionsForLanguage(this.language()), null === (n = VRHTML) || void 0 === n || n.RegisterForModalCancel(this.OnModalCancel), g.d.Init(!1)
           }
           OnModalCancel() {
               this.startClose()
           }
           OnRequestShowKeyboard(e) {
               var t;
               let n = null === (t = VRHTML) || void 0 === t ? void 0 : t.VRDashboardManager.GetKeyboardInputInfo();
               this.onShowKeyboard(n)
           }
           OnRequestHideKeyboard(e) {
               var t, n;
               null === (t = VRHTML) || void 0 === t || t.VROverlay.Hide(), null === (n = VRHTML) || void 0 === n || n.VRDashboardManager.CloseKeyboard()
           }
           onShowKeyboard(e) {
               var t, n;
               let r = !!(p.n.Modal & e.keyboardFlags);
               null === (t = VRHTML) || void 0 === t || t.VROverlay.SetFlag(VRHTML.VROverlay.ThisOverlayHandle(), p.C.WantsModalBehavior, r), this.setState({
                   bVisible: !0,
                   inputMode: e.inputMode,
                   bMinimalMode: !!(p.n.Minimal & e.keyboardFlags),
                   bMultilinePreview: e.lineMode == p.o.MultipleLines,
                   text: e.keyboardBuffer,
                   textPos: e.keyboardBuffer.length
               }), this.updateSuggestions(e.keyboardBuffer), this.getLayout("base"), this.getLayout(this.language()), "overlay" == this.state.presentation && (null === (n = VRHTML) || void 0 === n || n.VROverlay.Show())
           }
           startClose() {
               var e, t;
               this.setState({
                   bVisible: !1
               }), null === (e = VRHTML) || void 0 === e || e.VRDashboardManager.CloseKeyboard(), null === (t = VRHTML) || void 0 === t || t.VROverlay.Hide()
           }
           genid() {
               return this.m_genid += 1, "vk" + this.m_genid
           }
           language() {
               return kbLanguage
           }
           bShowPasswordPreview() {
               return this.state.inputMode == p.p.Password
           }
           getLayoutFile(e) {
               return Object(a.a)(this, void 0, void 0, (function*() {
                   let t = `/dashboard/keyboards/layout_${e}_${this.state.presentation}.json`;
                   return u.a.get(t).then(e => 200 != e.status ? null : e.data).catch(t => "english" != e ? this.getLayoutFile("english") : null)
               }))
           }
           getLayout(e) {
               this.m_languageToLayout.has(e) ? this.onLayoutLoaded() : this.getLayoutFile(e).then(t => {
                   t && (this.m_languageToLayout.set(e, t), this.onLayoutLoaded())
               })
           }
           onLayoutLoaded() {
               this.m_languageToLayout.has("base") && this.m_languageToLayout.has(this.language()) && (this.m_keyElements = null, this.setState({
                   layout: this.m_languageToLayout.get("base"),
                   langLayout: this.m_languageToLayout.get(this.language()),
                   shiftPlaneName: "normal"
               }), this.toggleShiftPlaneWith("normal"))
           }
           initializeKeyHandlers() {
               this.m_keyTypeToHandler = new Map,
               this.m_keyTypeToHandler.set("key", this.handleKey),
               this.m_keyTypeToHandler.set("del", this.handleDel),
               this.m_keyTypeToHandler.set("shift", this.handleShift),
               this.m_keyTypeToHandler.set("symbols", this.handleSymbols),
               this.m_keyTypeToHandler.set("done", this.handleDone),
               this.m_keyTypeToHandler.set("cancel", this.handleCancel),
               this.m_keyTypeToHandler.set("clear", this.handleClear),
               this.m_keyTypeToHandler.set("return", this.handleReturn),
               this.m_keyTypeToHandler.set("lang", this.handleLang),
               this.m_keyTypeToHandler.set("langen", this.getLangHandler("english")),
               this.m_keyTypeToHandler.set("langpt", this.getLangHandler("portuguese")),
               this.m_keyTypeToHandler.set("langda", this.getLangHandler("danish")),
               this.m_keyTypeToHandler.set("langnl", this.getLangHandler("dutch")),
               this.m_keyTypeToHandler.set("langfi", this.getLangHandler("finnish")),
               this.m_keyTypeToHandler.set("langfr", this.getLangHandler("french")),
               this.m_keyTypeToHandler.set("langde", this.getLangHandler("german")),
               this.m_keyTypeToHandler.set("langhu", this.getLangHandler("hungarian")),
               this.m_keyTypeToHandler.set("langit", this.getLangHandler("italian")),
               this.m_keyTypeToHandler.set("langnb", this.getLangHandler("norwegian")),
               this.m_keyTypeToHandler.set("langpl", this.getLangHandler("polish")),
               this.m_keyTypeToHandler.set("langro", this.getLangHandler("romanian")),
               this.m_keyTypeToHandler.set("langru", this.getLangHandler("russian")),
               this.m_keyTypeToHandler.set("langes", this.getLangHandler("spanish")),
               this.m_keyTypeToHandler.set("langsv", this.getLangHandler("swedish")),
               this.m_keyTypeToHandler.set("langtr", this.getLangHandler("turkish")),
               this.m_keyTypeToHandler.set("languk", this.getLangHandler("ukranian"))
           }
           findShiftPlane(e) {
               for (let t of this.state.langLayout.shiftPlanes)
                   if (t.name == e) return t;
               return null
           }
           toggleShiftPlaneWith(e) {
               this.m_curShiftPlane && this.m_curShiftPlane.name != e || (e = "normal");
               let t = this.findShiftPlane(e);
               t && (this.m_curShiftPlane = t, this.setState({
                   shiftPlaneName: e
               }))
           }
           onKey(e, t) {
               if (e < this.state.layout.geometry.length && t < this.state.layout.geometry[e].keys.length) {
                   let n = this.state.layout.geometry[e].keys[t];
                   if ("string" == typeof n);
                   else if ("key" != n.type) return void this.m_keyTypeToHandler.get(n.type)(n)
               }
               if (e < this.m_curShiftPlane.rows.length && t < this.m_curShiftPlane.rows[e].length) {
                   let n = this.m_curShiftPlane.rows[e][t];
                   "string" == typeof n ? this.m_keyTypeToHandler.get("key")(n) : this.m_keyTypeToHandler.has(n.type) && this.m_keyTypeToHandler.get(n.type)(n)
               }
           }
           handleKey(e) {
               let t;
               if (t = "string" == typeof e ? e : e.value, this.state.bMinimalMode) this.UpdateText(t, 1);
               else {
                   let e = this.state.text.substr(0, this.state.textPos) + t + this.state.text.substr(this.state.textPos),
                       n = this.state.textPos + t.length;
                   this.UpdateText(e, n)
               }
           }
           handleReturn() {
               this.handleKey("\n")
           }
           handleDel() {
               if (this.state.bMinimalMode) this.handleKey("\b");
               else {
                   let e = this.state.text.substr(0, this.state.textPos),
                       t = this.state.text.substr(this.state.textPos);
                   if (e.length > 0) {
                       let n = e.substr(0, e.length - 1) + t,
                           r = this.state.textPos - 1;
                       this.UpdateText(n, r)
                   }
               }
           }
           handleShift() {
               this.toggleShiftPlaneWith("shift")
           }
           handleSymbols() {
               this.toggleShiftPlaneWith("symbols")
           }
           UpdateText(e, t) {
               var n;
               this.setState({
                   text: e,
                   textPos: t
               }), null === (n = VRHTML) || void 0 === n || n.VRKeyboard.SetKeyboardText(e), this.updateSuggestions(this.getSuggestionBase(e, t))
           }
           handleDone(e) {
               var t;
               null === (t = VRHTML) || void 0 === t || t.VRDashboardManager.SendKeyboardDone(), this.startClose()
           }
           handleCancel(e) {
               this.startClose()
           }
           handleClear(e) {
               this.setState({
                   text: "",
                   textPos: 0
               }), this.updateSuggestions("")
           }
           getLangHandler(lang) {
               return function(e) {
                   kbLanguage = lang
               }
           }
           isWhite(e) {
               return " " == e
           }
           findWordLimits(e, t) {
               if (t < e.length && this.isWhite(e[t]) && (0 == t || t > 1 && this.isWhite(e[t - 1]))) return null;
               let n = t;
               for (; n > 0 && !this.isWhite(e[n]);) n -= 1;
               n < e.length && this.isWhite(e[n]) && (n += 1);
               let r = n;
               for (; r < e.length && !this.isWhite(e[r]);) r += 1;
               return [n, r]
           }
           getSuggestionBase(e, t) {
               let n = this.findWordLimits(e, t);
               return n ? e.substr(n[0], n[1] - n[0]) : null
           }
           updateSuggestions(e) {
               var t, n;
               if (null != this.state.layout)
                   if (this.bShowPasswordPreview()) this.setState({
                       suggestions: []
                   });
                   else if (null == e && (e = this.getSuggestionBase(this.state.text, this.state.textPos)), null != e && e.length > 0) {
                   new Array(this.state.layout.previewSuggestionCount);
                   let r = null != (n = null === (t = VRHTML) || void 0 === t ? void 0 : t.VRKeyboard.GetSuggestions(e, this.state.layout.previewSuggestionCount)) ? n : [];
                   this.setState({
                       suggestions: r
                   })
               } else this.setState({
                   suggestions: []
               })
           }
           handleSuggestionClick(e) {
               if (e >= this.state.suggestions.length) return;
               let t = this.state.suggestions[e],
                   n = this.findWordLimits(this.state.text, this.state.textPos);
               if (n) {
                   let e = this.state.text.substr(0, n[0]);
                   t += " ";
                   let r = e + t + this.state.text.substr(n[1]),
                       i = e.length + t.length;
                   this.UpdateText(r, i)
               }
           }
           onMouseEnter(e, t) {}
           makeKeyFaceElement(e, t) {
               let n = "VRKBKeyFace";
               if (t && (n += " VRKBShift_" + t.name), "string" == typeof e) return l.createElement("span", {
                   key: this.genid(),
                   className: n
               }, e); {
                   let t = e.text;
                   e.value ? e.value : e.text;
                   switch (e.img && (t = l.createElement("img", {
                           src: `/dashboard/images/vrkeyboard/${e.img}.png`
                       })), "string" == typeof t && t.startsWith("#") && (t = Object(m.c)(t)), e.type) {
                       case "key":
                       case "symbols":
                       case "del":
                       case "cancel":
                       case "shift":
                       case "symbols":
                       case "langen":
                       case "langpt":
                       case "langda":
                       case "langnl":
                       case "langfi":
                       case "langfr":
                       case "langde":
                       case "langhu":
                       case "langit":
                       case "langnb":
                       case "langpl":
                       case "langro":
                       case "langru":
                       case "langes":
                       case "langsv":
                       case "langtr":
                       case "languk":
                       case "return":
                           return l.createElement("span", {
                               key: this.genid(),
                               className: n
                           }, t);
                       case "done":
                           return l.createElement("span", {
                               key: this.genid(),
                               className: n + " VRKBDone"
                           }, t);
                       case "hole":
                           return l.createElement("span", {
                               key: this.genid(),
                               className: n
                           });
                       default:
                           return console.log("unknown key type ", e.type, " in keyboard layout"), null
                   }
               }
           }
           getKeyFaces(e, t) {
               let n = [];
               if (e < this.state.layout.geometry.length && t < this.state.layout.geometry[e].keys.length) {
                   "key" != this.state.layout.geometry[e].keys[t].type && n.push(this.makeKeyFaceElement(this.state.layout.geometry[e].keys[t], null))
               }
               if (0 == n.length)
                   for (let r of this.state.langLayout.shiftPlanes) e < r.rows.length && t < r.rows[e].length && n.push(this.makeKeyFaceElement(r.rows[e][t], r));
               return n
           }
           getKeyElements() {
               let e = [];
               for (let t = 0; t < this.state.layout.geometry.length; ++t) {
                   let n = this.state.layout.geometry[t],
                       r = [];
                   for (let e = 0; e < n.keys.length; ++e) {
                       let i = n.keys[e],
                           o = null;
                       i.flexGrow && (o || (o = {}), o.flexGrow = i.flexGrow), i.flexShrink && (o || (o = {}), o.flexShrink = i.flexShrink);
                       let s = this.getKeyFaces(t, e),
                           a = "done" == i.type,
                           c = () => {
                               this.onKey(t, e)
                           };
                       r.push(l.createElement(_.a, {
                           key: this.genid(),
                           className: "VRKBKey",
                           pressSoundEffect: y.a.KeyboardClick,
                           releaseSoundEffect: null,
                           onClick: a ? c : null,
                           onMouseDown: a ? null : c,
                           style: o
                       }, s))
                   }
                   let i = {};
                   n.height && (i.height = n.height), e.push(l.createElement("div", {
                       key: this.genid(),
                       className: "VRKBRow",
                       style: i
                   }, r))
               }
               return l.createElement("div", {
                   className: "VRKBRows"
               }, e)
           }
           makeCursor() {
               return l.createElement("span", {
                   key: this.genid(),
                   className: "VRKBPreviewTextCursor"
               }, "|")
           }
           makePreviewText() {
               let e = this.state.text.substr(0, this.state.textPos),
                   t = this.state.text.substr(this.state.textPos);
               return this.bShowPasswordPreview() ? (e = f.kPasswordChar.repeat(e.length), t = f.kPasswordChar.repeat(t.length), [l.createElement("span", {
                   key: this.genid(),
                   className: "VRKBPreviewTextPart"
               }, f.kPasswordChar.repeat(e.length)), this.makeCursor(), l.createElement("span", {
                   key: this.genid(),
                   className: "VRKBPreviewTextPart"
               }, f.kPasswordChar.repeat(t.length))]) : [l.createElement("span", {
                   key: this.genid(),
                   className: "VRKBPreviewTextPart"
               }, e), this.makeCursor(), l.createElement("span", {
                   key: this.genid(),
                   className: "VRKBPreviewTextPart"
               }, t)]
           }
           makeSuggestionElements() {
               let e = [];
               if (this.state.suggestions)
                   for (let t = 0; t < this.state.suggestions.length; ++t) e.push(l.createElement("div", {
                       key: this.genid(),
                       className: "VRKBSuggestion",
                       onClick: () => this.handleSuggestionClick(t)
                   }, this.state.suggestions[t]));
               for (let t = e.length; t < this.state.layout.previewSuggestionCount; ++t) e.push(l.createElement("div", {
                   key: this.genid(),
                   className: "VRKBSuggestion"
               }));
               return e
           }
           renderFlatPreview() {
               return this.state.bMinimalMode ? null : l.createElement("div", {
                   className: "VRKBPreviewWrapper"
               }, l.createElement("div", {
                   key: this.genid(),
                   className: "VRKBPreviewText"
               }, this.makePreviewText()), l.createElement("div", {
                   key: this.genid(),
                   className: "VRKBSuggestionWrapper"
               }, this.makeSuggestionElements()))
           }
           render_flat() {
               return l.createElement(p.kb, {
                   parent_path: "/user/head"
               }, l.createElement(p.F, null, l.createElement(p.kb, {
                   translation: this.state.layout.translation
               }, l.createElement(p.Y, {
                   width: void 0,
                   height: 1,
                   interactive: !0
               }, l.createElement("div", {
                   className: "VRKBShiftState VRKBChooseShift_" + this.state.shiftPlaneName
               }, l.createElement("div", {
                   className: "VRKBBackground"
               }, this.renderFlatPreview(), this.m_keyElements))))))
           }
           render_overlay() {
               return l.createElement("div", {
                   className: "VRKBContainer VRKBShiftState VRKBChooseShift_" + this.state.shiftPlaneName
               }, l.createElement("div", {
                   className: "VRKBBackground"
               }, this.renderFlatPreview(), this.m_keyElements))
           }
           render3dPreview() {
               return null
           }
           render_3d() {
               return null
           }
           render() {
               if (!this.state.layout) return console.log("xxx render layout==null, bailing"), null;
               if (!this.state.bVisible) return console.log("xxx render !visible, so bailing"), null;
               switch (this.m_keyElements || (this.m_keyElements = this.getKeyElements()), this.state.presentation) {
                   case "flat":
                       return this.render_flat();
                   case "3d":
                       return this.render_3d();
                   case "overlay":
                       return this.render_overlay();
                   default:
                       return console.log("bad keyboard presentation:", this.state.presentation), null
               }
           }
       }
       f.kPasswordChar = "●", Object(a.b)([h.bind], f.prototype, "OnModalCancel", null), Object(a.b)([h.bind], f.prototype, "OnRequestShowKeyboard", null), Object(a.b)([h.bind], f.prototype, "OnRequestHideKeyboard", null), Object(a.b)([h.bind], f.prototype, "onShowKeyboard", null), Object(a.b)([h.bind], f.prototype, "handleKey", null), Object(a.b)([h.bind], f.prototype, "handleReturn", null), Object(a.b)([h.bind], f.prototype, "handleDel", null), Object(a.b)([h.bind], f.prototype, "handleShift", null), Object(a.b)([h.bind], f.prototype, "handleSymbols", null), Object(a.b)([h.bind], f.prototype, "handleDone", null), Object(a.b)([h.bind], f.prototype, "handleCancel", null), Object(a.b)([h.bind], f.prototype, "handleClear", null), Object(a.b)([h.bind], f.prototype, "handleSuggestionClick", null), Object(a.b)([h.bind], f.prototype, "onMouseEnter", null);
       const S = null === (r = VRHTML) || void 0 === r ? void 0 : r.GetSteamVRLanguage();
       null === (i = VRHTML) || void 0 === i || i.VROverlay.SetFlag(VRHTML.VROverlay.ThisOverlayHandle(), p.C.MakeOverlaysInteractiveIfVisible, !0), null === (o = VRHTML) || void 0 === o || o.VROverlay.SetInputMethod(VRHTML.VROverlay.ThisOverlayHandle(), p.D.Mouse), null === (s = VRHTML) || void 0 === s || s.VRDashboardManager.SetKeyboardOverlayToThis(), Object(m.b)(["systemui"], S).then(() => b.a.Init()).then(() => v.a.Init()).then(() => {
           c.render(l.createElement(f, {
               language: S
           }), document.getElementById("root"))
       })
   }
});
//# sourceMappingURL=keyboard.js.map?v=33f9d7b9ccc720f1b207
