/*! For license information please see keyboard.js.LICENSE.txt */

var kbLanguage = "english";

(() => {
    var e, t = {
            1569: (e, t, r) => {
                "use strict";
                r.d(t, {
                    Bl: () => _.Bl,
                    Co: () => C,
                    Dd: () => l.D,
                    Fs: () => n.Fs,
                    GC: () => M.GC,
                    Ic: () => _.Ic,
                    JR: () => n.JR,
                    Kf: () => M.Kf,
                    Kg: () => M.Kg,
                    LL: () => M.LL,
                    LY: () => n.LY,
                    M9: () => n.M9,
                    Nv: () => s.N,
                    OK: () => h.OK,
                    Op: () => M.Op,
                    Oq: () => n.Oq,
                    Pd: () => n.Pd,
                    Pw: () => M.Pw,
                    QZ: () => M.QZ,
                    Qu: () => M.Qu,
                    Ri: () => k.R,
                    UU: () => n.UU,
                    Uk: () => R.Uk,
                    VW: () => a.V,
                    Vv: () => _.Vv,
                    XX: () => M.XX,
                    Y9: () => o.Y,
                    Z9: () => M.Z9,
                    ZP: () => M.ZP,
                    Zj: () => n.Zj,
                    a0: () => M.a0,
                    at: () => v.a,
                    bt: () => m.b,
                    dq: () => n.dq,
                    eK: () => b.e,
                    eQ: () => n.eQ,
                    gQ: () => p.g,
                    hz: () => i.h,
                    iC: () => y.i,
                    iN: () => h.iN,
                    kH: () => f.k,
                    l0: () => M.l0,
                    lx: () => M.lx,
                    n0: () => u.n,
                    q9: () => n.q9,
                    qA: () => M.qA,
                    qC: () => M.qC,
                    qI: () => h.qI,
                    sH: () => R.sH,
                    sO: () => S.s,
                    s_: () => _.s_,
                    sl: () => d.s,
                    tS: () => n.tS,
                    vS: () => R.vS,
                    wU: () => M.wU,
                    wx: () => c.w,
                    x1: () => g.x,
                    xY: () => M.xY,
                    xj: () => p.x,
                    zA: () => M.zA,
                    zq: () => M.zq
                });
                var s = r(4671),
                    n = r(4727),
                    i = r(7500),
                    o = r(2071),
                    a = r(6626),
                    l = r(751),
                    d = r(8116),
                    c = r(390),
                    h = (r(8257), r(233)),
                    u = (r(7313), r(6765)),
                    p = (r(491), r(171), r(8811)),
                    m = r(5157),
                    g = r(5486),
                    v = (r(5829), r(7973)),
                    _ = r(2214),
                    y = (r(5627), r(3841)),
                    b = (r(2467), r(7996), r(1364), r(5146)),
                    S = r(163),
                    f = r(2109),
                    k = r(684),
                    M = r(5867),
                    R = r(7074);
                const C = VRHTML
            },
            1364: (e, t, r) => {
                "use strict";
                r(7294), r(7313)
            },
            7996: (e, t, r) => {
                "use strict";
                var s = r(7294);
                r(7074), r(390), s.Component
            },
            2071: (e, t, r) => {
                "use strict";
                r.d(t, {
                    Y: () => d
                });
                var s = r(655),
                    n = r(7294),
                    i = r(7313),
                    o = r(7056),
                    a = r(233),
                    l = r(8116);
                class d extends i.Mo {
                    constructor(e) {
                        var t;
                        if (super(e), void 0 !== this.props.iconUri && void 0 !== this.props.iconOverlayKey) throw new Error("DashboardTab cannot have both an explicit iconUri and iconOverlayKey set in props.");
                        super.setBuildNodeOverride(this.buildNode), this.m_sMountableUnqualifiedID = null !== (t = e.mountableUnqualifiedID) && void 0 !== t ? t : this.getSGID() + "_mountable"
                    }
                    getNodeType() {
                        return "dashboardtab"
                    }
                    buildNode(e, t) {
                        var r;
                        const s = this.createSgNode(t);
                        return s.properties.tab_name = null !== (r = this.props.tabName) && void 0 !== r ? r : "", s.properties.mountable_id = (0, a.Hb)(this.m_sMountableUnqualifiedID), s.properties.icon_uri = this.props.iconUri, s.properties.icon_overlay_key = this.props.iconOverlayKey, s.properties.summon_overlay_key = this.props.summonOverlayKey, [e, s]
                    }
                    internalRender() {
                        return n.createElement("vsg-node", {
                            id: this.props.id
                        }, n.createElement(l.C, {
                            id: this.m_sMountableUnqualifiedID
                        }, this.props.children))
                    }
                }(0, s.gn)([o.ZP], d.prototype, "buildNode", null)
            },
            5146: (e, t, r) => {
                "use strict";
                r.d(t, {
                    e: () => o
                });
                var s = r(655),
                    n = r(7313),
                    i = r(7056);
                class o extends n.Mo {
                    constructor(e) {
                        super(e), super.setBuildNodeOverride(this.buildNode)
                    }
                    getNodeType() {
                        return "dashboardtransform"
                    }
                    buildNode(e, t) {
                        var r, s;
                        const n = this.createSgNode(t);
                        return n.properties.continuous_relatch = null !== (r = this.props.bContinuousRelatch) && void 0 !== r && r, n.properties.free_dashboard_transform = null !== (s = this.props.bFreeDashboardTransform) && void 0 !== s && s, [e, n]
                    }
                }(0, s.gn)([i.ZP], o.prototype, "buildNode", null)
            },
            3841: (e, t, r) => {
                "use strict";
                r.d(t, {
                    i: () => o
                });
                var s, n = r(7294),
                    i = r(7313);
                ! function(e) {
                    e[e.LockedToParent = 0] = "LockedToParent", e[e.LockedToWorld = 1] = "LockedToWorld"
                }(s || (s = {}));
                class o extends i.Mo {
                    constructor(e) {
                        super(e)
                    }
                    internalRender() {
                        let e = this.props.start_angle_threshold ? this.props.start_angle_threshold * Math.PI / 180 : null,
                            t = this.props.stop_angle_threshold ? this.props.stop_angle_threshold * Math.PI / 180 : null,
                            r = this.props.ease_out_angle_threshold ? this.props.ease_out_angle_threshold * Math.PI / 180 : null,
                            s = this.props.min_angular_velocity ? this.props.min_angular_velocity * Math.PI / 180 : null,
                            i = this.props.max_angular_velocity ? this.props.max_angular_velocity * Math.PI / 180 : null;
                        return n.createElement("vsg-elastic-head-transform", {
                            "start-angle-threshold": e,
                            "stop-angle-threshold": t,
                            "ease-in-time": this.props.ease_in_time,
                            "ease-in-power": this.props.ease_in_power,
                            "ease-out-angle-threshold": r,
                            "ease-out-power": this.props.ease_out_power,
                            "min-angular-velocity": s,
                            "max-angular-velocity": i,
                            "lock-to-horizon": this.props.lock_to_horizon,
                            "translation-behavior": this.props.translation_behavior
                        }, this.props.children)
                    }
                }
            },
            163: (e, t, r) => {
                "use strict";
                r.d(t, {
                    s: () => i
                });
                var s = r(7294),
                    n = r(7313);
                class i extends n.Mo {
                    constructor(e) {
                        super(e)
                    }
                    internalRender() {
                        let e = (0, n.Kg)(this.props.xfCurrent.translation),
                            t = (0, n.xs)(this.props.xfCurrent.rotation),
                            r = (0, n.Kg)(this.props.xfCurrent.scale);
                        return s.createElement("vsg-grab-transform", {
                            "parent-path": this.props.sParentPath,
                            translation: e,
                            rotation: t,
                            scale: r
                        }, this.props.children)
                    }
                }
            },
            2467: (e, t, r) => {
                "use strict";
                r(7294), r(7313)
            },
            5486: (e, t, r) => {
                "use strict";
                r.d(t, {
                    x: () => i
                });
                var s = r(7294),
                    n = r(7313);
                class i extends n.Mo {
                    constructor(e) {
                        super(e)
                    }
                    internalRender() {
                        return s.createElement("vsg-line", {
                            "target-id": this.props.target_id,
                            thickness: this.props.thickness,
                            "start-buffer": this.props.start_buffer,
                            "end-buffer": this.props.end_buffer
                        })
                    }
                }
            },
            5627: (e, t, r) => {
                "use strict";
                r(7294), r(7313)
            },
            5157: (e, t, r) => {
                "use strict";
                r.d(t, {
                    b: () => o
                });
                var s = r(655),
                    n = r(7313),
                    i = r(7056);
                class o extends n.Mo {
                    constructor(e) {
                        super(e), super.setBuildNodeOverride(this.buildNode)
                    }
                    getNodeType() {
                        return "ltcquad"
                    }
                    buildNode(e, t) {
                        const r = this.createSgNode(t);
                        if (r.properties.width = this.props.width, r.properties.height = this.props.height, r.properties["near-z"] = this.props["near-z"], r.properties["far-z"] = this.props["far-z"], r.properties.debug = this.props.debug, this.props.diffuse) {
                            let e = this.props.diffuse;
                            r.properties["diffuse-resolution"] = e.resolution, r.properties["diffuse-size"] = e.size
                        }
                        if (this.props.specular) {
                            let e = this.props.specular;
                            if ("string" == typeof e.color) r.properties.color = e.color;
                            else {
                                let t = (0, n.kh)(e.color, {
                                    r: 0,
                                    g: 0,
                                    b: 0
                                });
                                r.properties.color = [t.r, t.g, t.b]
                            }
                        }
                        return [e, r]
                    }
                }(0, s.gn)([i.ZP], o.prototype, "buildNode", null)
            },
            2109: (e, t, r) => {
                "use strict";
                r.d(t, {
                    k: () => i
                });
                var s = r(7294),
                    n = r(7313);
                class i extends n.Mo {
                    constructor(e) {
                        super(e)
                    }
                    internalRender() {
                        let e = (0, n.Kg)(this.props.xfCurrent.translation),
                            t = (0, n.xs)(this.props.xfCurrent.rotation),
                            r = (0, n.Kg)(this.props.xfCurrent.scale);
                        return s.createElement("vsg-manipulation-transform", {
                            "is-moving": this.props.bIsMoving,
                            "parent-path": this.props.sParentPath,
                            translation: e,
                            rotation: t,
                            scale: r
                        }, this.props.children)
                    }
                }
            },
            8116: (e, t, r) => {
                "use strict";
                r.d(t, {
                    C: () => a,
                    s: () => l
                });
                var s = r(655),
                    n = r(7313),
                    i = r(7056),
                    o = r(233);
                class a extends n.Mo {
                    constructor(e) {
                        super(e), super.setBuildNodeOverride(this.buildNode)
                    }
                    getNodeType() {
                        return "mountable"
                    }
                    buildNode(e, t) {
                        return [e, this.createSgNode(t)]
                    }
                }(0, s.gn)([i.ZP], a.prototype, "buildNode", null);
                class l extends n.Mo {
                    constructor(e) {
                        super(e), super.setBuildNodeOverride(this.buildNode)
                    }
                    getNodeType() {
                        return "mountedscenegraph"
                    }
                    buildNode(e, t) {
                        const r = this.createSgNode(t);
                        return r.properties.mountable_id = (0, o.Hb)(this.props.mountedId), this.props.fDashboardScale && (r.properties.dashboard_scale = this.props.fDashboardScale), [e, r]
                    }
                }(0, s.gn)([i.ZP], l.prototype, "buildNode", null)
            },
            751: (e, t, r) => {
                "use strict";
                r.d(t, {
                    D: () => o
                });
                var s = r(655),
                    n = r(7313),
                    i = r(7056);
                class o extends n.Mo {
                    constructor(e) {
                        super(e), super.setBuildNodeOverride(this.buildNode)
                    }
                    getNodeType() {
                        return "opacity"
                    }
                    buildNode(e, t) {
                        const r = this.createSgNode(t);
                        return r.properties.opacity = this.props.value, [e, r]
                    }
                }(0, s.gn)([i.ZP], o.prototype, "buildNode", null)
            },
            2214: (e, t, r) => {
                "use strict";
                r.d(t, {
                    Bl: () => o,
                    Ic: () => s,
                    Lb: () => m,
                    Vv: () => n,
                    s_: () => g
                });
                var s, n, i, o, a = r(655),
                    l = r(7294),
                    d = r(7313),
                    c = r(6765),
                    h = r(7056),
                    u = r(233);

                function p(e) {
                    if (e) return [e.u, e.v]
                }

                function m(e) {
                    switch (e) {
                        case s.TopLeft:
                            return {
                                x: -1, y: 1
                            };
                        case s.TopCenter:
                            return {
                                x: 0, y: 1
                            };
                        case s.TopRight:
                            return {
                                x: 1, y: 1
                            };
                        case s.CenterLeft:
                            return {
                                x: -1, y: 0
                            };
                        case s.Center:
                            return {
                                x: 0, y: 0
                            };
                        case s.CenterRight:
                            return {
                                x: 1, y: 0
                            };
                        case s.BottomLeft:
                            return {
                                x: -1, y: -1
                            };
                        case s.BottomCenter:
                            return {
                                x: 0, y: -1
                            };
                        case s.BottomRight:
                            return {
                                x: 1, y: -1
                            }
                    }
                }! function(e) {
                    e[e.TopLeft = 0] = "TopLeft", e[e.TopCenter = 1] = "TopCenter", e[e.TopRight = 2] = "TopRight", e[e.CenterLeft = 3] = "CenterLeft", e[e.Center = 4] = "Center", e[e.CenterRight = 5] = "CenterRight", e[e.BottomLeft = 6] = "BottomLeft", e[e.BottomCenter = 7] = "BottomCenter", e[e.BottomRight = 8] = "BottomRight"
                }(s || (s = {})),
                function(e) {
                    e[e.Auto = 0] = "Auto", e[e.SingleTap = 1] = "SingleTap"
                }(n || (n = {})),
                function(e) {
                    e[e.Mono = 0] = "Mono", e[e.Parallel = 1] = "Parallel", e[e.Crossed = 2] = "Crossed", e[e.Panorama = 3] = "Panorama", e[e.StackedPanorama = 4] = "StackedPanorama"
                }(i || (i = {})),
                function(e) {
                    e[e.Visible = 0] = "Visible", e[e.SkipInSceneGraph = 1] = "SkipInSceneGraph", e[e.Hidden = 2] = "Hidden"
                }(o || (o = {}));
                class g extends d.Mo {
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
                        g.s_bPanelsAreDirty = !0
                    }
                    componentDidMount() {
                        super.componentDidMount(), this.m_resizeObserver = new ResizeObserver(this.onResizeObserved), this.m_resizeObserver.observe(this.getCurrentRootElement()), this.m_nEmbeddedIndex = c.n.Current().addEmbeddedPanelUVs(this), g.s_bPanelsAreDirty = !0, this.getCurrentRootElement().addEventListener("mousedown", this.onPanelMouseDown), this.forceUpdate()
                    }
                    onResizeObserved(e, t) {
                        c.n.Current().forceLayoutUpdate()
                    }
                    componentWillUnmount() {
                        this.m_resizeObserver && (this.m_resizeObserver.disconnect(), this.m_resizeObserver = null), this.stopOverDragBlocking(), this.getCurrentRootElement().removeEventListener("mousedown", this.onPanelMouseDown), g.s_bPanelsAreDirty = !0, c.n.Current().removeEmbeddedPanelUVs(this), super.componentWillUnmount()
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
                        this.m_bOverdragBlocking && (this.m_overdragBlockingElements.forEach((e => {
                            document.body.removeChild(e)
                        })), this.m_overdragBlockingElements = [], window.document.removeEventListener("mouseup", this.onWindowMouseUp), this.m_bOverdragBlocking = !1)
                    }
                    createOverdragBlockingElement(e, t, r, s) {
                        let n = document.createElement("div");
                        n.style.position = "absolute", n.style.top = t + "px", n.style.left = e + "px", n.style.width = r + "px", n.style.height = s + "px", n.style.zIndex = "90019001", this.m_overdragBlockingElements.push(n), document.body.appendChild(n)
                    }
                    onWindowMouseUp(e) {
                        this.stopOverDragBlocking()
                    }
                    getNodeType() {
                        return "panel"
                    }
                    get visibility() {
                        var e;
                        return null !== (e = this.props.visibility) && void 0 !== e ? e : o.Visible
                    }
                    buildNode(e, t) {
                        var r, s, n, i, a;
                        if (this.visibility != o.Visible) return [e, null];
                        let l = Object.assign({}, e),
                            c = this.createSgNode(t),
                            h = {
                                x: 0,
                                y: 0
                            };
                        h = "object" == typeof this.props.origin ? (0, d.QE)(this.props.origin, {
                            x: 0,
                            y: 0
                        }) : m(this.props.origin);
                        const g = this.props.overlay_key,
                            v = (0, u.Gv)();
                        return g && g.length > 0 ? c.properties.key = g : v ? c.properties.key = v : c.properties.overlay_handle = (0, u.Mb)(), c.properties.uv_min = null !== (r = p(this.m_UVsMin)) && void 0 !== r ? r : void 0, c.properties.uv_max = null !== (s = p(this.m_UVsMax)) && void 0 !== s ? s : void 0, c.properties.width = null !== (n = this.props.width) && void 0 !== n ? n : void 0, c.properties.height = null !== (i = this.props.height) && void 0 !== i ? i : void 0, c.properties["min-width"] = null !== (a = this.props.min_width) && void 0 !== a ? a : void 0, c.properties["target-width-anchor-id"] = (0, u.Hb)(this.props.target_width_anchor_id), c.properties["target-dpi-panel-id"] = (0, u.Hb)(this.props.target_dpi_panel_id), c.properties["target-dpi-multiplier"] = this.props.target_dpi_multiplier, c.properties["subview-parent-panel-id"] = (0, u.Hb)(this.props.subview_parent_panel_id), c.properties.curvature = this.props.curvature, c.properties["curvature-origin-id"] = (0, u.Hb)(this.props.curvature_origin_id), c.properties.interactive = this.props.interactive, c.properties.scrollable = this.props.scrollable, c.properties.undocked = this.props.undocked, c.properties.modal = this.props.modal, c.properties["hide-laser-when-clicking"] = this.props.hide_lasermouse_when_clicking, c.properties["embedded-uv-index"] = this.m_nEmbeddedIndex, c.properties.origin = (0, d.D1)(h), c.properties.debug_name = this.props.debug_name, c.properties.sampler = this.props.sampler, c.properties.reflect = this.props.reflect, c.properties.stereoscopy = this.props.stereoscopy, c.properties.rendermodel_component_device_index = this.props.rendermodel_component_device_index, c.properties.rendermodel_component_name = this.props.rendermodel_component_name, c.properties["texture-id"] = (0, u.Hb)(this.props.texture_id), c.properties["sort-order"] = this.props.sort_order, c.properties["sort-depth-bias"] = this.props.sort_depth_bias, l.currentPanel = this, [l, c]
                    }
                    scaleLocalUVToGlobal(e) {
                        const t = this.m_UVsMax.u - this.m_UVsMin.u,
                            r = this.m_UVsMax.v - this.m_UVsMin.v;
                        return {
                            u: this.m_UVsMin.u + t * e.u,
                            v: this.m_UVsMin.v + r * e.v
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
                        return l.createElement("vsg-node", {
                            style: {
                                display: this.visibility == o.Hidden ? "none" : null
                            }
                        }, this.props.children)
                    }
                }
                g.s_bPanelsAreDirty = !1, (0, a.gn)([h.ZP], g.prototype, "onResizeObserved", null), (0, a.gn)([h.ZP], g.prototype, "onPanelMouseDown", null), (0, a.gn)([h.ZP], g.prototype, "onWindowMouseUp", null), (0, a.gn)([h.ZP], g.prototype, "buildNode", null)
            },
            7973: (e, t, r) => {
                "use strict";
                r.d(t, {
                    a: () => a
                });
                var s = r(655),
                    n = r(7313),
                    i = r(2214),
                    o = r(7056);
                class a extends n.Mo {
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
                        let r = null;
                        "object" == typeof this.props.location ? r = (0, n.QE)(this.props.location, {
                            x: 0,
                            y: 0
                        }) : "number" == typeof this.props.location && (r = (0, i.Lb)(this.props.location));
                        let s = this.createSgNode(t);
                        if (this.props.latched && null !== this.m_latchedPosition) s.properties["anchor-u"] = this.m_latchedPosition.u, s.properties["anchor-v"] = this.m_latchedPosition.v;
                        else if (r) {
                            const t = {
                                    u: .5 * r.x + .5,
                                    v: -.5 * r.y + .5
                                },
                                n = e.currentPanel.props.overlay_key ? t : e.currentPanel.scaleLocalUVToGlobal(t);
                            s.properties["anchor-u"] = n.u, s.properties["anchor-v"] = n.v
                        } else {
                            const r = t.ownerDocument,
                                n = t.getBoundingClientRect(),
                                i = n.left + n.width / 2,
                                o = n.top + n.height / 2,
                                a = e.currentPanel.m_Rect;
                            if (i < a.x || i > a.x + a.width || o < a.y || o > a.y + a.height) return [Object.assign(Object.assign({}, e), {
                                bShouldAbort: !0
                            }), null];
                            const l = r.defaultView.innerWidth,
                                d = r.defaultView.innerHeight;
                            if (!(d > 0 && l > 0)) return [Object.assign(Object.assign({}, e), {
                                bShouldAbort: !0
                            }), null];
                            s.properties["anchor-u"] = i / l, s.properties["anchor-v"] = o / d
                        }
                        return this.m_latchedPosition = {
                            u: s.properties["anchor-u"],
                            v: s.properties["anchor-v"]
                        }, [e, s]
                    }
                }(0, s.gn)([o.ZP], a.prototype, "buildNode", null)
            },
            5829: (e, t, r) => {
                "use strict";
                r(7294), r(7313)
            },
            8811: (e, t, r) => {
                "use strict";
                r.d(t, {
                    g: () => l,
                    x: () => s
                });
                var s, n = r(655),
                    i = r(7313),
                    o = r(7056),
                    a = r(233);
                ! function(e) {
                    e[e.None = 0] = "None", e[e.Backface = 1] = "Backface"
                }(s || (s = {}));
                class l extends i.Mo {
                    constructor(e) {
                        super(e), super.setBuildNodeOverride(this.buildNode)
                    }
                    getNodeType() {
                        return "rendermodel"
                    }
                    buildNode(e, t) {
                        const r = this.createSgNode(t);
                        if (r.properties.source = this.props.source, r.properties["texture-id"] = (0, a.Hb)(this.props["texture-id"]), r.properties["input-path"] = this.props["input-path"], this.props.fresnel) {
                            let e = this.props.fresnel;
                            if ("string" == typeof e.color) r.properties.color = e.color;
                            else {
                                let t = (0, i.kh)(e.color, {
                                    r: 0,
                                    g: 0,
                                    b: 0
                                });
                                r.properties.color = [t.r, t.g, t.b]
                            }
                            r.properties.opacity = e.opacity ? e.opacity : 1, r.properties.strength = e.strength ? e.strength : 1
                        }
                        return r.properties.wireframe = this.props.wireframe, r.properties.solid = this.props.solid, r.properties.culling = this.props.culling, r.properties.stencil_mask = this.props.stencil_mask, r.properties["no-depth-write"] = this.props["no-depth-write"], r.properties["no-depth-test"] = this.props["no-depth-test"], [e, r]
                    }
                }(0, n.gn)([o.ZP], l.prototype, "buildNode", null)
            },
            6765: (e, t, r) => {
                "use strict";
                r.d(t, {
                    n: () => d
                });
                var s, n = r(655),
                    i = r(7294),
                    o = r(2214),
                    a = r(7056),
                    l = r(233);
                ! function(e) {
                    e[e.Canvas = 0] = "Canvas", e[e.Image = 1] = "Image"
                }(s || (s = {}));
                class d extends i.Component {
                    constructor(e) {
                        super(e), this.m_DomRef = null, this.m_scalingDomRef = null, this.m_DebugPointerRef = null, this.m_Observer = null, this.m_nEmbeddedDataWidth = 0, this.m_mapPanels = new Map, this.m_rAvailableEmbeddedIndicesQueue = [], this.m_rEmbeddedIndicesToClear = [], this.m_fCurrentScale = 1, this.m_CanvasRef = null, this.m_CanvasContext = null, this.m_Pixels = null, this.m_nDirtyXMin = -1, this.m_nDirtyXMax = -1, this.m_EmbeddedDataImgRef = null, this.m_EmbeddedDataImgRGBBuffer = null, d.s_Current = this, this.state = {
                            bFontsLoaded: !1,
                            nForcedUpdateNumber: 0,
                            bShowDebugPointer: !1,
                            eRenderMode: VRHTML.VRUtil.BSupportsCEFCanvas() ? s.Canvas : s.Image
                        }, this.m_DomRef = i.createRef(), this.m_scalingDomRef = i.createRef(), this.m_CanvasRef = i.createRef(), this.m_EmbeddedDataImgRef = i.createRef(), this.m_DebugPointerRef = i.createRef()
                    }
                    static get IsSceneGraphApp() {
                        return null !== d.Current()
                    }
                    static Current() {
                        return d.s_Current
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
                        o.s_.s_bPanelsAreDirty = !0, this.setState({
                            nForcedUpdateNumber: this.state.nForcedUpdateNumber + 1
                        })
                    }
                    componentDidMount() {
                        let e = this.m_DomRef.current.ownerDocument,
                            t = e.defaultView;
                        e.body.classList.add("SGApp"), document.documentElement.classList.add("VROverlay"), this.m_nEmbeddedDataWidth = t.innerWidth;
                        let r = Math.max(0, Math.floor((this.m_nEmbeddedDataWidth - 1) / 3));
                        for (let e = 0; e < r; e++) this.m_rAvailableEmbeddedIndicesQueue.push(e);
                        e.addEventListener("mousemove", this.onMouseMove), this.m_Observer = new MutationObserver(this.onMutation), this.m_Observer.observe(this.m_DomRef.current, {
                            attributes: !0,
                            attributeFilter: ["sg-forced-update-number", "overlay-key"],
                            childList: !0,
                            subtree: !0
                        }), this.createEmbeddedData(), t.addEventListener("load", this.forceLayoutUpdate), e.fonts.ready.then((() => this.setState({
                            bFontsLoaded: !0
                        }))), t.forceLayoutUpdate = this.forceLayoutUpdate, t.toggleDebugPointer = this.toggleDebugPointer, (this.props.owning_overlay_key || this.props.web_secret) && (0, l.mK)(this.props.owning_overlay_key, this.m_DomRef.current, this.props.web_secret)
                    }
                    componentWillUnmount() {
                        let e = this.m_DomRef.current.ownerDocument;
                        e.body.classList.remove("SGApp"), document.documentElement.classList.remove("VROverlay"), this.m_Observer && this.m_Observer.disconnect(), e.removeEventListener("mousemove", this.onMouseMove)
                    }
                    render() {
                        const e = this.state.eRenderMode == s.Image,
                            t = this.state.eRenderMode == s.Canvas;
                        let r = [];
                        return this.state.bShowDebugPointer && r.push("ShowDebugPointer"), i.createElement("vsg-app", {
                            class: r.join(" "),
                            ref: this.m_DomRef,
                            "sg-forced-update-number": this.state.nForcedUpdateNumber
                        }, i.createElement("div", {
                            className: "DebugPointer",
                            ref: this.m_DebugPointerRef
                        }), e && i.createElement("img", {
                            ref: this.m_EmbeddedDataImgRef,
                            className: "EmbeddedData",
                            height: d.k_EmbeddedDataRows
                        }), t && i.createElement("canvas", {
                            ref: this.m_CanvasRef,
                            className: "EmbeddedData",
                            height: d.k_EmbeddedDataRows
                        }), i.createElement("div", {
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
                        this.state.eRenderMode == s.Image ? (this.m_EmbeddedDataImgRef.current.width = this.m_nEmbeddedDataWidth, this.m_EmbeddedDataImgRGBBuffer || (this.m_EmbeddedDataImgRGBBuffer = VRHTML.VRUtil.CreateEmbeddedRGBScanline(this.m_nEmbeddedDataWidth, 1, 4))) : this.state.eRenderMode == s.Canvas && (this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth, this.m_CanvasContext = this.m_CanvasRef.current.getContext("2d"), this.m_CanvasContext.globalCompositeOperation = "copy", this.m_CanvasContext.imageSmoothingEnabled = !1, null === this.m_Pixels && (this.m_Pixels = this.m_CanvasContext.createImageData(this.m_nEmbeddedDataWidth, d.k_EmbeddedDataRows))), this.updateAllPanelBounds()
                    }
                    updateAllPanelBounds() {
                        let e = this.m_DomRef.current.ownerDocument.defaultView,
                            t = this.m_scalingDomRef.current.getBoundingClientRect(),
                            r = t.width / this.m_fCurrentScale,
                            s = t.height / this.m_fCurrentScale,
                            n = {
                                x: e.innerWidth / r,
                                y: e.innerHeight / s
                            },
                            i = Math.min(n.x, n.y, 1);
                        i != this.m_fCurrentScale && (1 != i ? this.m_scalingDomRef.current.setAttribute("style", "transform: scale(" + i + "); transform-origin: top left") : this.m_scalingDomRef.current.removeAttribute("style"), this.m_fCurrentScale = i, o.s_.s_bPanelsAreDirty = !0), o.s_.s_bPanelsAreDirty && (this.m_mapPanels.forEach((e => e.updateLayoutValues())), (0, l.k7)(), o.s_.s_bPanelsAreDirty = !1, this.updateEmbeddedData())
                    }
                    updateEmbeddedData() {
                        if (this.m_EmbeddedDataImgRef || this.m_CanvasRef)
                            if (this.setPixel(0, "V".charCodeAt(0), "S".charCodeAt(0), "G".charCodeAt(0)), this.m_rEmbeddedIndicesToClear.forEach((e => {
                                    let t = 1 + 3 * e;
                                    for (let e = 0; e < 3; e++) this.setPixel(t + e, 0, 0, 0, 0)
                                })), this.m_rEmbeddedIndicesToClear = [], this.m_mapPanels.forEach(((e, t) => {
                                    let r = e.m_Rect.x,
                                        s = e.m_Rect.x + e.m_Rect.width,
                                        n = e.m_Rect.y,
                                        i = e.m_Rect.y + e.m_Rect.height,
                                        o = 1 + 3 * e.getEmbeddedIndex();
                                    if (e.isExternal() || r >= s || n >= i)
                                        for (let e = 0; e < 3; e++) this.setPixel(o + 1, 0, 0, 0, 0);
                                    else this.setPixel(o, (65280 & r) >> 8, 255 & r, 0), this.setPixel(o + 1, (65280 & s) >> 8, 255 & s, 255 & n), this.setPixel(o + 2, (65280 & i) >> 8, 255 & i, (65280 & n) >> 8)
                                })), this.m_EmbeddedDataImgRef && this.state.eRenderMode == s.Image) {
                                const e = VRHTML.VRUtil.GetEmbeddedScanlineAsURIImage(this.m_nEmbeddedDataWidth, 1, 4);
                                this.m_EmbeddedDataImgRef.current.src = e
                            } else if (this.m_CanvasRef && this.state.eRenderMode == s.Canvas) {
                            let e = this.m_nDirtyXMax - this.m_nDirtyXMin + 1;
                            this.m_CanvasContext.putImageData(this.m_Pixels, 0, 0, this.m_nDirtyXMin, 0, e, this.m_Pixels.height), this.m_nDirtyXMin = -1, this.m_nDirtyXMax = -1
                        }
                    }
                    setPixel(e, t, r, n, i = 255) {
                        if (this.m_EmbeddedDataImgRGBBuffer && this.state.eRenderMode == s.Image) {
                            const s = new DataView(this.m_EmbeddedDataImgRGBBuffer);
                            s.setUint8(4 * e + 0, t), s.setUint8(4 * e + 1, r), s.setUint8(4 * e + 2, n), s.setUint8(4 * e + 3, i)
                        } else this.m_Pixels && this.state.eRenderMode == s.Canvas && (this.m_Pixels.data[4 * e + 0] = t, this.m_Pixels.data[4 * e + 1] = r, this.m_Pixels.data[4 * e + 2] = n, this.m_Pixels.data[4 * e + 3] = i, (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) && (this.m_nDirtyXMin = e), (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) && (this.m_nDirtyXMax = e))
                    }
                }
                d.s_Current = null, d.k_EmbeddedDataRows = 1, (0, n.gn)([a.ak], d.prototype, "toggleDebugPointer", null), (0, n.gn)([a.ak], d.prototype, "onMouseMove", null), (0, n.gn)([a.ak], d.prototype, "forceLayoutUpdate", null), (0, n.gn)([a.ak], d.prototype, "onMutation", null)
            },
            7313: (e, t, r) => {
                "use strict";
                r.d(t, {
                    D1: () => l,
                    Kg: () => d,
                    Mo: () => h,
                    QE: () => i,
                    Uq: () => o,
                    kh: () => a,
                    xs: () => c
                });
                var s = r(7294),
                    n = r(233);

                function i(e, t) {
                    return e ? {
                        x: e.x ? e.x : t.x,
                        y: e.y ? e.y : t.y
                    } : t
                }

                function o(e, t) {
                    return e ? {
                        x: e.x ? e.x : t.x,
                        y: e.y ? e.y : t.y,
                        z: e.z ? e.z : t.z
                    } : t
                }

                function a(e, t) {
                    return e ? {
                        r: e.r ? e.r : t.r,
                        g: e.g ? e.g : t.g,
                        b: e.b ? e.b : t.b
                    } : t
                }

                function l(e) {
                    if (e) return [e.x, e.y]
                }

                function d(e) {
                    var t;
                    return null === (t = function(e) {
                        if (e) return [e.x, e.y, e.z]
                    }(e)) || void 0 === t ? void 0 : t.join(" ")
                }

                function c(e) {
                    if (e) return e.w + " " + e.x + " " + e.y + " " + e.z
                }
                class h extends s.Component {
                    constructor(e) {
                        super(e), this.m_domRef = s.createRef(), this.m_buildNodeOverride = null, this.m_SGID = h.s_NextSGID, h.s_NextSGID = (h.s_NextSGID + 1) % 4294967296
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
                        return (0, n.ac)(this.getNodeType(), e)
                    }
                    getCurrentRootElement() {
                        return this.m_domRef.current
                    }
                    componentDidMount() {
                        this.m_buildNodeOverride && (this.m_domRef.current.buildNode = this.m_buildNodeOverride), (0, n.k7)()
                    }
                    componentDidUpdate() {
                        (0, n.k7)()
                    }
                    componentWillUnmount() {
                        (0, n.sX)(this.m_SGID), this.m_domRef.current && this.m_buildNodeOverride && delete this.m_domRef.current.buildNode
                    }
                    render() {
                        return s.cloneElement(this.internalRender(), {
                            id: this.props.id,
                            "vsg-type": this.getNodeType(),
                            sgid: this.m_SGID,
                            ref: this.m_domRef
                        })
                    }
                    internalRender() {
                        return this.m_buildNodeOverride ? s.createElement("vsg-node", null, this.props.children) : null
                    }
                }
                h.s_NextSGID = 1
            },
            233: (e, t, r) => {
                "use strict";
                r.d(t, {
                    Gv: () => C,
                    Hb: () => R,
                    Mb: () => u,
                    OK: () => D,
                    ac: () => h,
                    iN: () => M,
                    k7: () => E,
                    mK: () => k,
                    qI: () => T,
                    sX: () => w
                });
                var s = r(655),
                    n = r(4671);

                function i(e, t) {
                    let r = e.getAttribute(t);
                    if (r && r.length > 0) {
                        if ("undefined" == r) return;
                        let e = [];
                        for (let t of r.split(" ")) 0 != t.length && e.push(parseFloat(t));
                        if (e.length > 0) return e
                    }
                }

                function o(e, t) {
                    let r = e.getAttribute(t);
                    if (r && r.length > 0) return parseFloat(r)
                }

                function a(e, t) {
                    let r = e.getAttribute(t);
                    if (r && r.length > 0) return parseInt(r)
                }

                function l(e, t) {
                    let r = e.getAttribute(t);
                    if (r && r.length > 0) return "true" == r || r.length > 0 && 0 != parseInt(r) && !isNaN(parseInt(r))
                }

                function d(e, t) {
                    let r = e.getAttribute(t);
                    if (r && r.length > 0) return r
                }

                function c(e, t) {
                    return R(d(e, t))
                }

                function h(e, t) {
                    let r = {
                        type: e,
                        properties: {}
                    };
                    return t.id && (r.properties.id = R(t.id)), r.properties.sgid = a(t, "sgid"), r
                }

                function u() {
                    return null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VROverlay.ThisOverlayHandle()
                }

                function p(e, t) {
                    let [r, s] = function(e, t) {
                        let r = t.buildNode;
                        if (r) return r(e, t);
                        let s = Object.assign({}, e),
                            n = null;
                        switch (t.nodeName.toUpperCase()) {
                            case "VSG-TRANSFORM":
                                n = h("transform", t), n.properties.translation = i(t, "translation"), n.properties.rotation = i(t, "rotation"), n.properties.scale = i(t, "scale"), n.properties["curvature-pitch"] = o(t, "curvature-pitch"), n.properties["transform-path"] = d(t, "transform-path"), n.properties["parent-path"] = d(t, "parent-path"), n.properties["parent-origin"] = d(t, "parent-origin"), n.properties["parent-id"] = c(t, "parent-id");
                                break;
                            case "VSG-TRACKING-STATE-VISIBILITY":
                                n = h("trackingstatevisibility", t), n.properties["visible-0dof"] = l(t, "visible-0dof"), n.properties["visible-3dof"] = l(t, "visible-3dof"), n.properties["visible-6dof"] = l(t, "visible-6dof");
                                break;
                            case "VSG-ELASTIC-HEAD-TRANSFORM":
                                n = h("elasticheadtransform", t), n.properties["start-angle-threshold"] = o(t, "start-angle-threshold"), n.properties["stop-angle-threshold"] = o(t, "stop-angle-threshold"), n.properties["ease-in-time"] = o(t, "ease-in-time"), n.properties["ease-in-power"] = o(t, "ease-in-power"), n.properties["ease-out-angle-threshold"] = o(t, "ease-out-angle-threshold"), n.properties["ease-out-power"] = o(t, "ease-out-power"), n.properties["min-angular-velocity"] = o(t, "min-angular-velocity"), n.properties["max-angular-velocity"] = o(t, "max-angular-velocity"), n.properties["lock-to-horizon"] = l(t, "lock-to-horizon"), n.properties["translation-behavior"] = a(t, "translation-behavior");
                                break;
                            case "VSG-LINE":
                                n = h("line", t), n.properties["target-id"] = c(t, "target-id"), n.properties.thickness = o(t, "thickness"), n.properties["start-buffer"] = o(t, "start-buffer"), n.properties["end-buffer"] = o(t, "end-buffer");
                                break;
                            case "VSG-LINE-CONSTRAINED-TRANSFORM":
                                n = h("line-constrained-transform", t), n.properties["target-id"] = c(t, "target-id"), n.properties["source-id"] = c(t, "source-id"), n.properties["source-distance"] = o(t, "source-distance"), n.properties["target-limit"] = o(t, "target-limit");
                                break;
                            case "VSG-CALLOUT-TRANSFORM":
                                n = h("callout-transform", t), n.properties.offset = i(t, "offset");
                                break;
                            case "VSG-HEAD-FACING-TRANSFORM":
                                n = h("head-facing-transform", t);
                                break;
                            case "VSG-PIN-TO-VIEW-TRANSFORM":
                                n = h("pin-to-view-transform", t), n.properties["offscreen-z-depth"] = o(t, "offscreen-z-depth"), n.properties["off-axis-limit"] = o(t, "off-axis-limit"), n.properties["transition-limit"] = o(t, "transition-limit");
                                break;
                            case "VSG-MANIPULATION-TRANSFORM":
                                n = h("manipulation-transform", t), n.properties["is-moving"] = l(t, "is-moving"), n.properties["parent-path"] = d(t, "parent-path"), n.properties.translation = i(t, "translation"), n.properties.rotation = i(t, "rotation"), n.properties.scale = i(t, "scale");
                                break;
                            case "VSG-GRAB-TRANSFORM":
                                n = h("grab-transform", t), n.properties["parent-path"] = d(t, "parent-path"), n.properties.translation = i(t, "translation"), n.properties.rotation = i(t, "rotation"), n.properties.scale = i(t, "scale")
                        }
                        return [s, n]
                    }(e, t), n = [];
                    for (let e = 0; e < t.children.length; e++) {
                        let s = t.children.item(e);
                        if (s.children) {
                            let e = p(r, s);
                            e && (n = n.concat(e))
                        }
                    }
                    return r.bShouldAbort ? null : s ? (n.length > 0 && (s.children = n), [s]) : n.length > 0 ? 1 == n.length ? n : [{
                        children: n
                    }] : null
                }
                let m, g, v, _, y = [],
                    b = null,
                    S = null,
                    f = null;

                function k(e, t, r) {
                    m = e, g = t, v = r, console.log("Setting owning overlay key to " + e)
                }

                function M(e, t) {
                    return e + "::" + t
                }

                function R(e) {
                    return e ? function(e) {
                        return e && e.includes("::")
                    }(e) ? e : M(C(), e) : null
                }

                function C() {
                    var e;
                    return null !== (e = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e ? e : m
                }

                function w(e) {
                    y.push(e), E()
                }

                function T() {
                    _ = !0
                }

                function D(e) {
                    var t, r;
                    r = e, (null == (t = f) || null == r ? t == r : t.color_mult == r.color_mult && t.reflection_mult == r.reflection_mult && t.roomview_mult.toString() == r.roomview_mult.toString() && t.allow_skydome == r.allow_skydome) || (f = e, E())
                }

                function E() {
                    b || (b = window.setTimeout((() => (0, s.mG)(this, void 0, void 0, (function*() {
                        let e = document.body;
                        g && (e = g);
                        let t = {
                            type: "root",
                            rootproperties: {
                                relatchDashboardTransform: _,
                                allowDismissOnClick: true,
                                sceneColorCorrection: f
                            },
                            children: p({
                                currentPanel: null,
                                bShouldAbort: !1
                            }, e)
                        };
                        S || (console.log("Initializing sg_mailbox"), S = new n.N, yield S.Init("sg_mailbox", v));
                        let r = {
                            type: "update_scene_graph",
                            owning_overlay_key: C(),
                            scene_graph: t,
                            retired_sgids: y
                        };
                        S.SendMessage("vrcompositor_systemlayer", r), b = null, y = [], _ = !1
                    }))), 0))
                }
            },
            491: (e, t, r) => {
                "use strict";
                var s = r(655),
                    n = r(7313),
                    i = r(7056);
                class o extends n.Mo {
                    constructor(e) {
                        super(e), super.setBuildNodeOverride(this.buildNode)
                    }
                    getNodeType() {
                        return "texture"
                    }
                    buildNode(e, t) {
                        const r = this.createSgNode(t);
                        return r.properties.id = this.props.id, r.properties.source = this.props.source, [e, r]
                    }
                }(0, s.gn)([i.ZP], o.prototype, "buildNode", null)
            },
            171: (e, t, r) => {
                "use strict";
                var s = r(655),
                    n = r(7313),
                    i = r(7056);
                class o extends n.Mo {
                    constructor(e) {
                        super(e), super.setBuildNodeOverride(this.buildNode)
                    }
                    getNodeType() {
                        return "tilefloor"
                    }
                    buildNode(e, t) {
                        const r = this.createSgNode(t);
                        if (r.properties["tile-size"] = this.props["tile-size"], r.properties["tile-gap"] = this.props["tile-gap"], r.properties["inner-radius"] = this.props["inner-radius"], r.properties["outer-radius"] = this.props["outer-radius"], r.properties["fade-distance"] = this.props["fade-distance"], r.properties["min-tile-scale-at-periphery"] = this.props["min-tile-scale-at-periphery"], r.properties.height = this.props.height, r.properties.offset = [this.props.offset.x, this.props.offset.y], "string" == typeof this.props.color) r.properties.color = this.props.color;
                        else if (this.props.color) {
                            let e = (0, n.kh)(this.props.color, {
                                r: 0,
                                g: 0,
                                b: 0
                            });
                            r.properties.color = [e.r, e.g, e.b]
                        }
                        return r.properties["center-randomization"] = this.props["center-randomization"], r.properties["luma-randomization-min-gain"] = this.props["luma-randomization"]["min-gain"], r.properties["luma-randomization-max-gain"] = this.props["luma-randomization"]["max-gain"], r.properties["reflection-randomization-min-gain"] = this.props["reflection-randomization"]["min-gain"], r.properties["reflection-randomization-max-gain"] = this.props["reflection-randomization"]["max-gain"], r.properties["normal-randomization-degrees"] = this.props["normal-randomization-degrees"], this.props.chevron && (r.properties["chevron-luma-scale"] = this.props.chevron["luma-scale"], r.properties["chevron-reflection-scale"] = this.props.chevron["reflection-scale"]), r.properties["auto-subdivide"] = this.props["auto-subdivide"], [e, r]
                    }
                }(0, s.gn)([i.ZP], o.prototype, "buildNode", null)
            },
            6626: (e, t, r) => {
                "use strict";
                r.d(t, {
                    V: () => o
                });
                var s = r(655),
                    n = r(7313),
                    i = r(7056);
                class o extends n.Mo {
                    constructor(e) {
                        super(e), super.setBuildNodeOverride(this.buildNode)
                    }
                    getNodeType() {
                        return "tint"
                    }
                    buildNode(e, t) {
                        const r = this.createSgNode(t);
                        if (this.props.color)
                            if ("string" == typeof this.props.color) r.properties.color = this.props.color;
                            else {
                                let e = (0, n.kh)(this.props.color, {
                                    r: 1,
                                    g: 1,
                                    b: 1
                                });
                                r.properties.color = [e.r, e.g, e.b]
                            }
                        else r.properties.color = [1, 1, 1];
                        return [e, r]
                    }
                }(0, s.gn)([i.ZP], o.prototype, "buildNode", null)
            },
            8257: (e, t, r) => {
                "use strict";
                r(7294), r(7313)
            },
            390: (e, t, r) => {
                "use strict";
                r.d(t, {
                    w: () => a
                });
                var s, n = r(7294),
                    i = r(7313),
                    o = r(4727);
                ! function(e) {
                    e[e.Seated = 0] = "Seated", e[e.Standing = 1] = "Standing", e[e.Raw = 2] = "Raw"
                }(s || (s = {}));
                class a extends i.Mo {
                    constructor(e) {
                        if (super(e), (void 0 === e.parent_path ? 0 : 1) + (void 0 === e.parent_origin ? 0 : 1) + (void 0 === e.parent_id ? 0 : 1) > 1) throw new Error("Transform cannot have more than one parent_ property set.")
                    }
                    internalRender() {
                        let e, t, r;
                        this.props.transform ? (e = this.props.transform.translation, t = this.props.transform.rotation, r = this.props.transform.scale) : (e = (0, i.Uq)(this.props.translation, {
                            x: 0,
                            y: 0,
                            z: 0
                        }), t = (0, o.UU)((0, o.mT)((0, i.Uq)(this.props.rotation, {
                            x: 0,
                            y: 0,
                            z: 0
                        }), Math.PI / 180)), r = "number" == typeof this.props.scale ? {
                            x: this.props.scale,
                            y: this.props.scale,
                            z: this.props.scale
                        } : (0, i.Uq)(this.props.scale, {
                            x: 1,
                            y: 1,
                            z: 1
                        }));
                        let a = (0, i.Kg)(e),
                            l = (0, i.xs)(t),
                            d = (0, i.Kg)(r);
                        return n.createElement("vsg-transform", {
                            translation: a,
                            rotation: l,
                            scale: d,
                            "curvature-pitch": this.props.curvature_pitch,
                            "transform-path": this.props.transform_path,
                            "parent-path": this.props.parent_path,
                            "parent-origin": s[this.props.parent_origin],
                            "parent-id": this.props.parent_id
                        }, this.props.children)
                    }
                }
            },
            684: (e, t, r) => {
                "use strict";
                r.d(t, {
                    R: () => o
                });
                var s = r(655),
                    n = r(7313),
                    i = r(7056);
                class o extends n.Mo {
                    constructor(e) {
                        super(e), super.setBuildNodeOverride(this.buildNode)
                    }
                    getNodeType() {
                        return "videocapturequad"
                    }
                    buildNode(e, t) {
                        const r = this.createSgNode(t);
                        return r.properties.width = this.props.width, r.properties.height = this.props.height, r.properties["near-z"] = this.props["near-z"], r.properties["far-z"] = this.props["far-z"], r.properties.debug = this.props.debug, [e, r]
                    }
                }(0, s.gn)([i.ZP], o.prototype, "buildNode", null)
            },
            4727: (e, t, r) => {
                "use strict";

                function s() {
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

                function n(e, t, r) {
                    return {
                        x: t.x + e * (r.x - t.x),
                        y: t.y + e * (r.y - t.y),
                        z: t.z + e * (r.z - t.z)
                    }
                }

                function i(e, t) {
                    return {
                        x: e.x - t.x,
                        y: e.y - t.y
                    }
                }

                function o(e, t) {
                    return {
                        x: e.x - t.x,
                        y: e.y - t.y,
                        z: e.z - t.z
                    }
                }

                function a(e, t) {
                    return {
                        x: e.x * t,
                        y: e.y * t
                    }
                }

                function l(e, t) {
                    return {
                        x: e.x * t,
                        y: e.y * t,
                        z: e.z * t
                    }
                }

                function d(e) {
                    return Math.sqrt(e.x * e.x + e.y * e.y)
                }

                function c(e) {
                    return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z)
                }

                function h(e) {
                    if (void 0 === e) return;
                    let t = .5 * e.x,
                        r = .5 * e.y,
                        s = .5 * e.z,
                        n = Math.cos(t),
                        i = Math.cos(r),
                        o = Math.cos(s),
                        a = Math.sin(t),
                        l = Math.sin(r),
                        d = Math.sin(s);
                    return {
                        w: n * i * o + a * l * d,
                        x: a * i * o + n * l * d,
                        y: n * l * o - a * i * d,
                        z: n * i * d - a * l * o
                    }
                }

                function u(e) {
                    let t = e[0][0] + e[1][1] + e[2][2];
                    if (t > 0) {
                        let r = 2 * Math.sqrt(t + 1);
                        return {
                            w: .25 * r,
                            x: (e[1][2] - e[2][1]) / r,
                            y: (e[2][0] - e[0][2]) / r,
                            z: (e[0][1] - e[1][0]) / r
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

                function p(e, t, r) {
                    return [
                        [e.x, e.y, e.z],
                        [t.x, t.y, t.z],
                        [r.x, r.y, r.z]
                    ]
                }

                function m(e) {
                    let t = c(e);
                    return {
                        x: e.x / t,
                        y: e.y / t,
                        z: e.z / t
                    }
                }

                function g(e, t) {
                    return {
                        x: e.y * t.z - e.z * t.y,
                        y: e.z * t.x - e.x * t.z,
                        z: e.x * t.y - e.y * t.x
                    }
                }
                r.d(t, {
                    Fs: () => a,
                    JR: () => d,
                    LY: () => c,
                    M9: () => m,
                    Oq: () => s,
                    Pd: () => u,
                    UU: () => h,
                    Zj: () => i,
                    dq: () => g,
                    eQ: () => o,
                    mT: () => l,
                    q9: () => n,
                    tS: () => p
                })
            },
            7500: (e, t, r) => {
                "use strict";
                r.d(t, {
                    h: () => i
                });
                var s = r(655),
                    n = r(4671);
                class i {
                    constructor() {
                        this.m_mailbox = new n.N, this.m_mailbox.Init("sgtransformcache")
                    }
                    static getInstance() {
                        return i.instance || (i.instance = new i), i.instance
                    }
                    requestSGTransform(e, t = 0) {
                        return new Promise(((r, n) => (0, s.mG)(this, void 0, void 0, (function*() {
                            let s = {
                                    type: "transform_request",
                                    id: e,
                                    flPushDistance: t
                                },
                                i = yield this.m_mailbox.SendMessageAndWaitForResponse("vrcompositor_systemlayer", s, "transform_response");
                            i.id == e && i.transform ? r(i.transform) : n("requestSGTransform failed")
                        }))))
                    }
                }
            },
            4671: (e, t, r) => {
                "use strict";
                r.d(t, {
                    N: () => i
                });
                var s = r(655),
                    n = r(7056);
                class i {
                    constructor() {
                        this.m_wsWebSocketToServer = void 0, this.m_oHandlers = {}, this.m_oWaits = {}, this.m_oConnectWaits = [], this.m_fnConnectResolve = void 0, this.m_nNextMessageNumber = 1
                    }
                    OpenWebSocketToHost() {
                        return new Promise(((e, t) => {
                            console.log("Connecting vrmailbox " + this.m_sMailboxName + "...");
                            let r = "ws://localhost:27062";
                            this.m_sWebSecret && (r += "?secret=" + this.m_sWebSecret), this.m_fnConnectResolve = e, this.m_wsWebSocketToServer = new WebSocket(r), this.m_wsWebSocketToServer.addEventListener("open", (t => {
                                this.OnWebSocketOpen(t), e()
                            })), this.m_wsWebSocketToServer.addEventListener("message", this.OnWebSocketMessage), this.m_wsWebSocketToServer.addEventListener("close", this.OnWebSocketClose)
                        }))
                    }
                    static EnsureUniqueName(e) {
                        if (e.includes("/")) return e;
                        let t;
                        return t = VRHTML ? VRHTML.GetWebHelperId() : Date.now().toString(), e + "/" + t + "_" + this.s_nNextMailboxNumber++
                    }
                    Init(e, t) {
                        return (0, s.mG)(this, void 0, void 0, (function*() {
                            return this.m_sMailboxName = i.EnsureUniqueName(e), this.m_sWebSecret = t, this.connected = !1, this.OpenWebSocketToHost()
                        }))
                    }
                    get name() {
                        return this.m_sMailboxName
                    }
                    OnWebSocketOpen(e) {
                        this.connected = !0, this.WebSocketSend("mailbox_open " + this.m_sMailboxName), window.addEventListener("beforeunload", (() => {
                            this.WebSocketSend("websocket_close")
                        })), this.m_fnConnectResolve && (this.m_fnConnectResolve(), this.m_fnConnectResolve = void 0);
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
                            r = !1;
                        if (this.m_oHandlers.hasOwnProperty(t.type) && (this.m_oHandlers[t.type](t), r = !0), this.m_oWaits.hasOwnProperty(t.type)) {
                            let e = !1;
                            for (let r of this.m_oWaits[t.type]) r.nMessageId == t.message_id && (r.callback(t), e = !0);
                            e ? this.m_oWaits[t.type] = this.m_oWaits[t.type].filter((e => e.nMessageId == t.message_id)) : console.log(`Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`), r = !0
                        }
                        r || console.log("Received unhandled message: ", t)
                    }
                    RegisterHandler(e, t) {
                        this.m_oHandlers[e] = t
                    }
                    SendMessage(e, t) {
                        this.WebSocketSend("mailbox_send " + e + " " + JSON.stringify(t))
                    }
                    WaitForMessage(e, t) {
                        return new Promise(((r, s) => {
                            this.m_oWaits[e] || (this.m_oWaits[e] = []), this.m_oWaits[e].push({
                                callback: r,
                                nMessageId: t
                            })
                        }))
                    }
                    WaitForConnect() {
                        return new Promise(((e, t) => {
                            this.connected ? e() : this.m_oConnectWaits.push(e)
                        }))
                    }
                    WaitForMailbox(e) {
                        return (0, s.mG)(this, void 0, void 0, (function*() {
                            let t = {
                                type: "request_mailbox_registration_notification",
                                mailbox_name: e
                            };
                            return this.SendMessageAndWaitForResponse("web_server_mailbox", t, "mailbox_registered")
                        }))
                    }
                    SendMessageAndWaitForResponse(e, t, r) {
                        let s = Object.assign({}, t);
                        return null == s.returnAddress && (s.returnAddress = this.m_sMailboxName), s.message_id = this.m_nNextMessageNumber++, this.SendMessage(e, s), this.WaitForMessage(r, s.message_id)
                    }
                    SendResponse(e, t) {
                        if (!e.returnAddress) throw new Error("Missing return address on message");
                        let r = Object.assign(Object.assign({}, t), {
                            message_id: e.message_id
                        });
                        r.message_id = e.message_id, this.SendMessage(e.returnAddress, r)
                    }
                }
                i.s_nNextMailboxNumber = 1, (0, s.gn)([n.ak], i.prototype, "OpenWebSocketToHost", null), (0, s.gn)([n.ak], i.prototype, "OnWebSocketOpen", null), (0, s.gn)([n.ak], i.prototype, "OnWebSocketClose", null), (0, s.gn)([n.ak], i.prototype, "WebSocketSend", null), (0, s.gn)([n.ak], i.prototype, "OnWebSocketMessage", null)
            },
            5867: (e, t, r) => {
                "use strict";
                var s, n, i, o;

                function a() {
                    var e;
                    return null !== (e = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.Environment()) && void 0 !== e ? e : s.Unknown
                }
                r.d(t, {
                        GC: () => M,
                        Kf: () => d,
                        Kg: () => R,
                        LL: () => n,
                        Op: () => a,
                        Pw: () => b,
                        QZ: () => i,
                        Qu: () => T,
                        XX: () => h,
                        Z9: () => u,
                        ZP: () => p,
                        a0: () => C,
                        l0: () => S,
                        lx: () => k,
                        qA: () => s,
                        qC: () => m,
                        wU: () => l,
                        xY: () => _,
                        zA: () => w,
                        zq: () => o
                    }),
                    function(e) {
                        e[e.Desktop = 1] = "Desktop", e[e.Overlay = 2] = "Overlay", e[e.Unknown = 100] = "Unknown"
                    }(s || (s = {})), window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
                    function(e) {
                        e[e.Auto = 0] = "Auto", e[e.Low = 1] = "Low", e[e.Medium = 2] = "Medium", e[e.High = 3] = "High"
                    }(n || (n = {})),
                    function(e) {
                        e[e.TrackingResult_Uninitialized = 1] = "TrackingResult_Uninitialized", e[e.TrackingResult_Calibrating_InProgress = 100] = "TrackingResult_Calibrating_InProgress", e[e.TrackingResult_Calibrating_OutOfRange = 101] = "TrackingResult_Calibrating_OutOfRange", e[e.TrackingResult_Running_OK = 200] = "TrackingResult_Running_OK", e[e.TrackingResult_Running_OutOfRange = 201] = "TrackingResult_Running_OutOfRange", e[e.TrackingResult_Fallback_RotationOnly = 300] = "TrackingResult_Fallback_RotationOnly"
                    }(i || (i = {})),
                    function(e) {
                        e[e.Seated = 0] = "Seated", e[e.Standing = 1] = "Standing", e[e.RawAndUncalibrated = 2] = "RawAndUncalibrated"
                    }(o || (o = {}));
                let l = 0,
                    d = -1;
                var c, h, u, p, m, g, v, _, y, b, S, f, k, M, R, C, w, T;
                ! function(e) {
                    e[e.None = 0] = "None", e[e.Shown = 1] = "Shown", e[e.Hidden = 2] = "Hidden", e[e.Exposed = 3] = "Exposed", e[e.Moved = 4] = "Moved", e[e.Resized = 5] = "Resized", e[e.SizeChanged = 6] = "SizeChanged", e[e.Minimized = 7] = "Minimized", e[e.Maximized = 8] = "Maximized", e[e.Restored = 9] = "Restored", e[e.Enter = 10] = "Enter", e[e.Leave = 11] = "Leave", e[e.FocusGained = 12] = "FocusGained", e[e.FocusLost = 13] = "FocusLost", e[e.Close = 14] = "Close", e[e.TakeFocus = 15] = "TakeFocus", e[e.HitTest = 16] = "HitTest"
                }(c || (c = {})),
                function(e) {
                    e[e.Activated = 0] = "Activated", e[e.Deactivated = 1] = "Deactivated"
                }(h || (h = {})),
                function(e) {
                    e[e.NoDashboardTab = 8] = "NoDashboardTab", e[e.AcceptsGamepadEvents = 16] = "AcceptsGamepadEvents", e[e.ShowGamepadFocus = 32] = "ShowGamepadFocus", e[e.SendVRDiscreteScrollEvents = 64] = "SendVRDiscreteScrollEvents", e[e.SendVRTouchpadEvents = 128] = "SendVRTouchpadEvents", e[e.ShowTouchPadScrollWheel = 256] = "ShowTouchPadScrollWheel", e[e.TransferOwnershipToInternalProcess = 512] = "TransferOwnershipToInternalProcess", e[e.SideBySide_Parallel = 1024] = "SideBySide_Parallel", e[e.SideBySide_Crossed = 2048] = "SideBySide_Crossed", e[e.Panorama = 4096] = "Panorama", e[e.StereoPanorama = 8192] = "StereoPanorama", e[e.SortWithNonSceneOverlays = 16384] = "SortWithNonSceneOverlays", e[e.VisibleInDashboard = 32768] = "VisibleInDashboard", e[e.MakeOverlaysInteractiveIfVisible = 65536] = "MakeOverlaysInteractiveIfVisible", e[e.SendVRSmoothScrollEvents = 131072] = "SendVRSmoothScrollEvents", e[e.ProtectedContent = 262144] = "ProtectedContent", e[e.HideLaserIntersection = 524288] = "HideLaserIntersection", e[e.WantsModalBehavior = 1048576] = "WantsModalBehavior", e[e.IsPremultiplied = 2097152] = "IsPremultiplied", e[e.IgnoreTextureAlpha = 4194304] = "IgnoreTextureAlpha", e[e.EnableControlBar = 8388608] = "EnableControlBar", e[e.EnableControlBarKeyboard = 16777216] = "EnableControlBarKeyboard", e[e.EnableControlBarClose = 33554432] = "EnableControlBarClose", e[e.EnableSteamUIButtons = 67108864] = "EnableSteamUIButtons"
                }(u || (u = {})),
                function(e) {
                    e[e.HomeMenu = 50] = "HomeMenu", e[e.QuickMenu = 51] = "QuickMenu"
                }(p || (p = {})),
                function(e) {
                    e[e.None = 0] = "None", e[e.Mouse = 1] = "Mouse"
                }(m || (m = {})),
                function(e) {
                    e[e.Invalid = 0] = "Invalid", e[e.HMD = 1] = "HMD", e[e.Controller = 2] = "Controller", e[e.GenericTracker = 3] = "GenericTracker", e[e.TrackingReference = 4] = "TrackingReference", e[e.DisplayRedirect = 5] = "DisplayRedirect"
                }(g || (g = {})),
                function(e) {
                    e[e.Unknown = 0] = "Unknown", e[e.NVIDIA = 1] = "NVIDIA", e[e.AMD = 2] = "AMD"
                }(v || (v = {})),
                function(e) {
                    e[e.None = 0] = "None", e[e.Starting = 1] = "Starting", e[e.Quitting = 2] = "Quitting", e[e.Running = 3] = "Running", e[e.Waiting = 4] = "Waiting"
                }(_ || (_ = {})),
                function(e) {
                    e[e.ButtonPress_0 = 0] = "ButtonPress_0", e[e.ButtonPress_1 = 1] = "ButtonPress_1", e[e.ButtonPress_2 = 2] = "ButtonPress_2", e[e.ButtonPress_3 = 3] = "ButtonPress_3", e[e.CouldntFindSystemOverlay = 4] = "CouldntFindSystemOverlay", e[e.CouldntFindOrCreateClientOverlay = 5] = "CouldntFindOrCreateClientOverlay", e[e.ApplicationQuit = 6] = "ApplicationQuit"
                }(y || (y = {})),
                function(e) {
                    e[e.Normal = 0] = "Normal", e[e.Password = 1] = "Password", e[e.Submit = 2] = "Submit"
                }(b || (b = {})),
                function(e) {
                    e[e.SingleLine = 0] = "SingleLine", e[e.MultipleLines = 1] = "MultipleLines"
                }(S || (S = {})),
                function(e) {
                    e[e.LaserMouse = 1] = "LaserMouse", e[e.Keyboard = 2] = "Keyboard", e[e.RoomView = 4] = "RoomView", e[e.DisplaySuppressed = 8] = "DisplaySuppressed", e[e.SystemButtonDown = 16] = "SystemButtonDown", e[e.DriverIsDrawingControllers = 32] = "DriverIsDrawingControllers", e[e.DriverRequestsApplicationPause = 64] = "DriverRequestsApplicationPause", e[e.DriverRequestsReducedRendering = 128] = "DriverRequestsReducedRendering"
                }(f || (f = {})),
                function(e) {
                    e[e.BULK_DEFAULT = 0] = "BULK_DEFAULT", e[e.BULK_64K_DMA = 1] = "BULK_64K_DMA", e[e.BULK_16K_DMA = 2] = "BULK_16K_DMA", e[e.BULK_8K_DMA = 3] = "BULK_8K_DMA", e[e.ISO_52FPS = 4] = "ISO_52FPS", e[e.ISO_50FPS = 5] = "ISO_50FPS", e[e.ISO_48FPS = 6] = "ISO_48FPS", e[e.ISO_46FPS = 7] = "ISO_46FPS", e[e.ISO_44FPS = 8] = "ISO_44FPS", e[e.ISO_42FPS = 9] = "ISO_42FPS", e[e.ISO_40FPS = 10] = "ISO_40FPS", e[e.ISO_35FPS = 11] = "ISO_35FPS", e[e.ISO_30FPS = 12] = "ISO_30FPS", e[e.ISO_15FPS = 13] = "ISO_15FPS", e[e.MAX_CAMERA_COMPAT_MODES = 14] = "MAX_CAMERA_COMPAT_MODES"
                }(k || (k = {})),
                function(e) {
                    e[e.None = 0] = "None", e[e.ThisSteamVR = 1] = "ThisSteamVR", e[e.AnotherSteamVR = 2] = "AnotherSteamVR", e[e.AnotherRuntime = 3] = "AnotherRuntime", e[e.Error = -1] = "Error"
                }(M || (M = {})),
                function(e) {
                    e[e.TrackedControllerRole_Invalid = 0] = "TrackedControllerRole_Invalid", e[e.TrackedControllerRole_LeftHand = 1] = "TrackedControllerRole_LeftHand", e[e.TrackedControllerRole_RightHand = 2] = "TrackedControllerRole_RightHand", e[e.TrackedControllerRole_OptOut = 3] = "TrackedControllerRole_OptOut", e[e.TrackedControllerRole_Treadmill = 4] = "TrackedControllerRole_Treadmill", e[e.TrackedControllerRole_Max = 5] = "TrackedControllerRole_Max"
                }(R || (R = {})),
                function(e) {
                    e[e.Unknown = 0] = "Unknown", e[e.Steam_VRButton = 1] = "Steam_VRButton", e[e.Steam_StartSteamVRApp = 2] = "Steam_StartSteamVRApp", e[e.Watchdog_Unknown = 10] = "Watchdog_Unknown", e[e.Watchdog_Controller = 11] = "Watchdog_Controller", e[e.Watchdog_Hmd = 12] = "Watchdog_Hmd", e[e.AppLaunch_Unknown = 20] = "AppLaunch_Unknown", e[e.AppLaunch_Steam = 21] = "AppLaunch_Steam", e[e.SteamVR_Restart = 30] = "SteamVR_Restart", e[e.SteamVR_VRStartup = 31] = "SteamVR_VRStartup"
                }(C || (C = {})),
                function(e) {
                    e[e.Hostname = 0] = "Hostname", e[e.IP = 1] = "IP", e[e.Version = 2] = "Version", e[e.NetworkConnections = 3] = "NetworkConnections", e[e.XRS_CalibrationDate = 4] = "XRS_CalibrationDate"
                }(w || (w = {})),
                function(e) {
                    e[e.Unavailable = 0] = "Unavailable", e[e.Active = 1] = "Active", e[e.Off = 2] = "Off"
                }(T || (T = {}))
            },
            7074: (e, t, r) => {
                "use strict";
                var s, n, i, o;
                r.d(t, {
                        Uk: () => s,
                        sH: () => i,
                        vS: () => o
                    }),
                    function(e) {
                        e[e.Invalid = 0] = "Invalid", e[e.TrackingSystemName_String = 1e3] = "TrackingSystemName_String", e[e.ModelNumber_String = 1001] = "ModelNumber_String", e[e.SerialNumber_String = 1002] = "SerialNumber_String", e[e.RenderModelName_String = 1003] = "RenderModelName_String", e[e.WillDriftInYaw_Bool = 1004] = "WillDriftInYaw_Bool", e[e.ManufacturerName_String = 1005] = "ManufacturerName_String", e[e.TrackingFirmwareVersion_String = 1006] = "TrackingFirmwareVersion_String", e[e.HardwareRevision_String = 1007] = "HardwareRevision_String", e[e.AllWirelessDongleDescriptions_String = 1008] = "AllWirelessDongleDescriptions_String", e[e.ConnectedWirelessDongle_String = 1009] = "ConnectedWirelessDongle_String", e[e.DeviceIsWireless_Bool = 1010] = "DeviceIsWireless_Bool", e[e.DeviceIsCharging_Bool = 1011] = "DeviceIsCharging_Bool", e[e.DeviceBatteryPercentage_Float = 1012] = "DeviceBatteryPercentage_Float", e[e.StatusDisplayTransform_Matrix34 = 1013] = "StatusDisplayTransform_Matrix34", e[e.Firmware_UpdateAvailable_Bool = 1014] = "Firmware_UpdateAvailable_Bool", e[e.Firmware_ManualUpdate_Bool = 1015] = "Firmware_ManualUpdate_Bool", e[e.Firmware_ManualUpdateURL_String = 1016] = "Firmware_ManualUpdateURL_String", e[e.HardwareRevision_Uint64 = 1017] = "HardwareRevision_Uint64", e[e.FirmwareVersion_Uint64 = 1018] = "FirmwareVersion_Uint64", e[e.FPGAVersion_Uint64 = 1019] = "FPGAVersion_Uint64", e[e.VRCVersion_Uint64 = 1020] = "VRCVersion_Uint64", e[e.RadioVersion_Uint64 = 1021] = "RadioVersion_Uint64", e[e.DongleVersion_Uint64 = 1022] = "DongleVersion_Uint64", e[e.BlockServerShutdown_Bool = 1023] = "BlockServerShutdown_Bool", e[e.CanUnifyCoordinateSystemWithHmd_Bool = 1024] = "CanUnifyCoordinateSystemWithHmd_Bool", e[e.ContainsProximitySensor_Bool = 1025] = "ContainsProximitySensor_Bool", e[e.DeviceProvidesBatteryStatus_Bool = 1026] = "DeviceProvidesBatteryStatus_Bool", e[e.DeviceCanPowerOff_Bool = 1027] = "DeviceCanPowerOff_Bool", e[e.Firmware_ProgrammingTarget_String = 1028] = "Firmware_ProgrammingTarget_String", e[e.DeviceClass_Int32 = 1029] = "DeviceClass_Int32", e[e.HasCamera_Bool = 1030] = "HasCamera_Bool", e[e.DriverVersion_String = 1031] = "DriverVersion_String", e[e.Firmware_ForceUpdateRequired_Bool = 1032] = "Firmware_ForceUpdateRequired_Bool", e[e.ViveSystemButtonFixRequired_Bool = 1033] = "ViveSystemButtonFixRequired_Bool", e[e.ParentDriver_Uint64 = 1034] = "ParentDriver_Uint64", e[e.ResourceRoot_String = 1035] = "ResourceRoot_String", e[e.RegisteredDeviceType_String = 1036] = "RegisteredDeviceType_String", e[e.InputProfilePath_String = 1037] = "InputProfilePath_String", e[e.NeverTracked_Bool = 1038] = "NeverTracked_Bool", e[e.NumCameras_Int32 = 1039] = "NumCameras_Int32", e[e.CameraFrameLayout_Int32 = 1040] = "CameraFrameLayout_Int32", e[e.CameraStreamFormat_Int32 = 1041] = "CameraStreamFormat_Int32", e[e.AdditionalDeviceSettingsPath_String = 1042] = "AdditionalDeviceSettingsPath_String", e[e.DevicePowerUsage_Float = 1052] = "DevicePowerUsage_Float", e[e.ReportsTimeSinceVSync_Bool = 2e3] = "ReportsTimeSinceVSync_Bool", e[e.SecondsFromVsyncToPhotons_Float = 2001] = "SecondsFromVsyncToPhotons_Float", e[e.DisplayFrequency_Float = 2002] = "DisplayFrequency_Float", e[e.UserIpdMeters_Float = 2003] = "UserIpdMeters_Float", e[e.CurrentUniverseId_Uint64 = 2004] = "CurrentUniverseId_Uint64", e[e.PreviousUniverseId_Uint64 = 2005] = "PreviousUniverseId_Uint64", e[e.DisplayFirmwareVersion_Uint64 = 2006] = "DisplayFirmwareVersion_Uint64", e[e.IsOnDesktop_Bool = 2007] = "IsOnDesktop_Bool", e[e.DisplayMCType_Int32 = 2008] = "DisplayMCType_Int32", e[e.DisplayMCOffset_Float = 2009] = "DisplayMCOffset_Float", e[e.DisplayMCScale_Float = 2010] = "DisplayMCScale_Float", e[e.EdidVendorID_Int32 = 2011] = "EdidVendorID_Int32", e[e.DisplayMCImageLeft_String = 2012] = "DisplayMCImageLeft_String", e[e.DisplayMCImageRight_String = 2013] = "DisplayMCImageRight_String", e[e.DisplayGCBlackClamp_Float = 2014] = "DisplayGCBlackClamp_Float", e[e.EdidProductID_Int32 = 2015] = "EdidProductID_Int32", e[e.CameraToHeadTransform_Matrix34 = 2016] = "CameraToHeadTransform_Matrix34", e[e.DisplayGCType_Int32 = 2017] = "DisplayGCType_Int32", e[e.DisplayGCOffset_Float = 2018] = "DisplayGCOffset_Float", e[e.DisplayGCScale_Float = 2019] = "DisplayGCScale_Float", e[e.DisplayGCPrescale_Float = 2020] = "DisplayGCPrescale_Float", e[e.DisplayGCImage_String = 2021] = "DisplayGCImage_String", e[e.LensCenterLeftU_Float = 2022] = "LensCenterLeftU_Float", e[e.LensCenterLeftV_Float = 2023] = "LensCenterLeftV_Float", e[e.LensCenterRightU_Float = 2024] = "LensCenterRightU_Float", e[e.LensCenterRightV_Float = 2025] = "LensCenterRightV_Float", e[e.UserHeadToEyeDepthMeters_Float = 2026] = "UserHeadToEyeDepthMeters_Float", e[e.CameraFirmwareVersion_Uint64 = 2027] = "CameraFirmwareVersion_Uint64", e[e.CameraFirmwareDescription_String = 2028] = "CameraFirmwareDescription_String", e[e.DisplayFPGAVersion_Uint64 = 2029] = "DisplayFPGAVersion_Uint64", e[e.DisplayBootloaderVersion_Uint64 = 2030] = "DisplayBootloaderVersion_Uint64", e[e.DisplayHardwareVersion_Uint64 = 2031] = "DisplayHardwareVersion_Uint64", e[e.AudioFirmwareVersion_Uint64 = 2032] = "AudioFirmwareVersion_Uint64", e[e.CameraCompatibilityMode_Int32 = 2033] = "CameraCompatibilityMode_Int32", e[e.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034] = "ScreenshotHorizontalFieldOfViewDegrees_Float", e[e.ScreenshotVerticalFieldOfViewDegrees_Float = 2035] = "ScreenshotVerticalFieldOfViewDegrees_Float", e[e.DisplaySuppressed_Bool = 2036] = "DisplaySuppressed_Bool", e[e.DisplayAllowNightMode_Bool = 2037] = "DisplayAllowNightMode_Bool", e[e.DisplayMCImageWidth_Int32 = 2038] = "DisplayMCImageWidth_Int32", e[e.DisplayMCImageHeight_Int32 = 2039] = "DisplayMCImageHeight_Int32", e[e.DisplayMCImageNumChannels_Int32 = 2040] = "DisplayMCImageNumChannels_Int32", e[e.DisplayMCImageData_Binary = 2041] = "DisplayMCImageData_Binary", e[e.SecondsFromPhotonsToVblank_Float = 2042] = "SecondsFromPhotonsToVblank_Float", e[e.DriverDirectModeSendsVsyncEvents_Bool = 2043] = "DriverDirectModeSendsVsyncEvents_Bool", e[e.DisplayDebugMode_Bool = 2044] = "DisplayDebugMode_Bool", e[e.GraphicsAdapterLuid_Uint64 = 2045] = "GraphicsAdapterLuid_Uint64", e[e.DriverProvidedChaperonePath_String = 2048] = "DriverProvidedChaperonePath_String", e[e.ExpectedTrackingReferenceCount_Int32 = 2049] = "ExpectedTrackingReferenceCount_Int32", e[e.ExpectedControllerCount_Int32 = 2050] = "ExpectedControllerCount_Int32", e[e.NamedIconPathControllerLeftDeviceOff_String = 2051] = "NamedIconPathControllerLeftDeviceOff_String", e[e.NamedIconPathControllerRightDeviceOff_String = 2052] = "NamedIconPathControllerRightDeviceOff_String", e[e.NamedIconPathTrackingReferenceDeviceOff_String = 2053] = "NamedIconPathTrackingReferenceDeviceOff_String", e[e.DoNotApplyPrediction_Bool = 2054] = "DoNotApplyPrediction_Bool", e[e.CameraToHeadTransforms_Matrix34_Array = 2055] = "CameraToHeadTransforms_Matrix34_Array", e[e.DistortionMeshResolution_Int32 = 2056] = "DistortionMeshResolution_Int32", e[e.DriverIsDrawingControllers_Bool = 2057] = "DriverIsDrawingControllers_Bool", e[e.DriverRequestsApplicationPause_Bool = 2058] = "DriverRequestsApplicationPause_Bool", e[e.DriverRequestsReducedRendering_Bool = 2059] = "DriverRequestsReducedRendering_Bool", e[e.MinimumIpdStepMeters_Float = 2060] = "MinimumIpdStepMeters_Float", e[e.AudioBridgeFirmwareVersion_Uint64 = 2061] = "AudioBridgeFirmwareVersion_Uint64", e[e.ImageBridgeFirmwareVersion_Uint64 = 2062] = "ImageBridgeFirmwareVersion_Uint64", e[e.ImuToHeadTransform_Matrix34 = 2063] = "ImuToHeadTransform_Matrix34", e[e.ImuFactoryGyroBias_Vector3 = 2064] = "ImuFactoryGyroBias_Vector3", e[e.ImuFactoryGyroScale_Vector3 = 2065] = "ImuFactoryGyroScale_Vector3", e[e.ImuFactoryAccelerometerBias_Vector3 = 2066] = "ImuFactoryAccelerometerBias_Vector3", e[e.ImuFactoryAccelerometerScale_Vector3 = 2067] = "ImuFactoryAccelerometerScale_Vector3", e[e.ConfigurationIncludesLighthouse20Features_Bool = 2069] = "ConfigurationIncludesLighthouse20Features_Bool", e[e.Prop_AdditionalRadioFeatures_Uint64 = 2070] = "Prop_AdditionalRadioFeatures_Uint64", e[e.Prop_CameraWhiteBalance_Vector4_Array = 2071] = "Prop_CameraWhiteBalance_Vector4_Array", e[e.Prop_CameraDistortionFunction_Int32_Array = 2072] = "Prop_CameraDistortionFunction_Int32_Array", e[e.Prop_CameraDistortionCoefficients_Float_Array = 2073] = "Prop_CameraDistortionCoefficients_Float_Array", e[e.Prop_ExpectedControllerType_String = 2074] = "Prop_ExpectedControllerType_String", e[e.HmdTrackingStyle_Int32 = 2075] = "HmdTrackingStyle_Int32", e[e.DriverProvidedChaperoneVisibility_Bool = 2076] = "DriverProvidedChaperoneVisibility_Bool", e[e.HmdColumnCorrectionSettingPrefix_String = 2077] = "HmdColumnCorrectionSettingPrefix_String", e[e.CameraSupportsCompatibilityModes_Bool = 2078] = "CameraSupportsCompatibilityModes_Bool", e[e.SupportsRoomViewDepthProjection_Bool = 2079] = "SupportsRoomViewDepthProjection_Bool", e[e.DisplayAvailableFrameRates_Float_Array = 2080] = "DisplayAvailableFrameRates_Float_Array", e[e.DisplaySupportsRuntimeFramerateChange_Bool = 2084] = "DisplaySupportsRuntimeFramerateChange_Bool", e[e.DisplaySupportsAnalogGain_Bool = 2085] = "DisplaySupportsAnalogGain_Bool", e[e.DisplayMinAnalogGain_Float = 2086] = "DisplayMinAnalogGain_Float", e[e.DisplayMaxAnalogGain_Float = 2087] = "DisplayMaxAnalogGain_Float", e[e.DashboardScale_Float = 2091] = "DashboardScale_Float", e[e.PeerButtonInfo_String = 2092] = "PeerButtonInfo_String", e[e.IpdUIRangeMinMeters_Float = 2100] = "IpdUIRangeMinMeters_Float", e[e.IpdUIRangeMaxMeters_Float = 2101] = "IpdUIRangeMaxMeters_Float", e[e.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102] = "Hmd_SupportsHDCP14LegacyCompat_Bool", e[e.Hmd_SupportsMicMonitoring_Bool = 2103] = "Hmd_SupportsMicMonitoring_Bool", e[e.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104] = "Hmd_SupportsDisplayPortTrainingMode_Bool", e[e.Hmd_SupportsRoomViewDirect_Bool = 2105] = "Hmd_SupportsRoomViewDirect_Bool", e[e.Hmd_SupportsAppThrottling_Bool = 2106] = "Hmd_SupportsAppThrottling_Bool", e[e.Hmd_SupportsGpuBusMonitoring_Bool = 2107] = "Hmd_SupportsGpuBusMonitoring_Bool", e[e.DriverRequestedMuraCorrectionMode_Int32 = 2200] = "DriverRequestedMuraCorrectionMode_Int32", e[e.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201] = "DriverRequestedMuraFeather_InnerLeft_Int32", e[e.DriverRequestedMuraFeather_InnerRight_Int32 = 2202] = "DriverRequestedMuraFeather_InnerRight_Int32", e[e.DriverRequestedMuraFeather_InnerTop_Int32 = 2203] = "DriverRequestedMuraFeather_InnerTop_Int32", e[e.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204] = "DriverRequestedMuraFeather_InnerBottom_Int32", e[e.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205] = "DriverRequestedMuraFeather_OuterLeft_Int32", e[e.DriverRequestedMuraFeather_OuterRight_Int32 = 2206] = "DriverRequestedMuraFeather_OuterRight_Int32", e[e.DriverRequestedMuraFeather_OuterTop_Int32 = 2207] = "DriverRequestedMuraFeather_OuterTop_Int32", e[e.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208] = "DriverRequestedMuraFeather_OuterBottom_Int32", e[e.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303] = "Audio_SupportsDualSpeakerAndJackOutput_Bool", e[e.AttachedDeviceId_String = 3e3] = "AttachedDeviceId_String", e[e.SupportedButtons_Uint64 = 3001] = "SupportedButtons_Uint64", e[e.Axis0Type_Int32 = 3002] = "Axis0Type_Int32", e[e.Axis1Type_Int32 = 3003] = "Axis1Type_Int32", e[e.Axis2Type_Int32 = 3004] = "Axis2Type_Int32", e[e.Axis3Type_Int32 = 3005] = "Axis3Type_Int32", e[e.Axis4Type_Int32 = 3006] = "Axis4Type_Int32", e[e.ControllerRoleHint_Int32 = 3007] = "ControllerRoleHint_Int32", e[e.FieldOfViewLeftDegrees_Float = 4e3] = "FieldOfViewLeftDegrees_Float", e[e.FieldOfViewRightDegrees_Float = 4001] = "FieldOfViewRightDegrees_Float", e[e.FieldOfViewTopDegrees_Float = 4002] = "FieldOfViewTopDegrees_Float", e[e.FieldOfViewBottomDegrees_Float = 4003] = "FieldOfViewBottomDegrees_Float", e[e.TrackingRangeMinimumMeters_Float = 4004] = "TrackingRangeMinimumMeters_Float", e[e.TrackingRangeMaximumMeters_Float = 4005] = "TrackingRangeMaximumMeters_Float", e[e.ModeLabel_String = 4006] = "ModeLabel_String", e[e.IconPathName_String = 5e3] = "IconPathName_String", e[e.NamedIconPathDeviceOff_String = 5001] = "NamedIconPathDeviceOff_String", e[e.NamedIconPathDeviceSearching_String = 5002] = "NamedIconPathDeviceSearching_String", e[e.NamedIconPathDeviceSearchingAlert_String = 5003] = "NamedIconPathDeviceSearchingAlert_String", e[e.NamedIconPathDeviceReady_String = 5004] = "NamedIconPathDeviceReady_String", e[e.NamedIconPathDeviceReadyAlert_String = 5005] = "NamedIconPathDeviceReadyAlert_String", e[e.NamedIconPathDeviceNotReady_String = 5006] = "NamedIconPathDeviceNotReady_String", e[e.NamedIconPathDeviceStandby_String = 5007] = "NamedIconPathDeviceStandby_String", e[e.NamedIconPathDeviceAlertLow_String = 5008] = "NamedIconPathDeviceAlertLow_String", e[e.DisplayHiddenArea_Binary_Start = 5100] = "DisplayHiddenArea_Binary_Start", e[e.DisplayHiddenArea_Binary_End = 5150] = "DisplayHiddenArea_Binary_End", e[e.ParentContainer = 5151] = "ParentContainer", e[e.UserConfigPath_String = 6e3] = "UserConfigPath_String", e[e.InstallPath_String = 6001] = "InstallPath_String", e[e.HasDisplayComponent_Bool = 6002] = "HasDisplayComponent_Bool", e[e.HasControllerComponent_Bool = 6003] = "HasControllerComponent_Bool", e[e.HasCameraComponent_Bool = 6004] = "HasCameraComponent_Bool", e[e.HasDriverDirectModeComponent_Bool = 6005] = "HasDriverDirectModeComponent_Bool", e[e.HasVirtualDisplayComponent_Bool = 6006] = "HasVirtualDisplayComponent_Bool", e[e.HasSpatialAnchorsSupport_Bool = 6007] = "HasSpatialAnchorsSupport_Bool", e[e.ControllerType_String = 7e3] = "ControllerType_String", e[e.LegacyInputProfile_String = 7001] = "LegacyInputProfile_String", e[e.VendorSpecific_Reserved_Start = 1e4] = "VendorSpecific_Reserved_Start", e[e.VendorSpecific_Reserved_End = 10999] = "VendorSpecific_Reserved_End", e[e.TrackedDeviceProperty_Max = 1e6] = "TrackedDeviceProperty_Max"
                    }(s || (s = {})),
                    function(e) {
                        e[e.None = 0] = "None", e[e.SecondaryClick = 1] = "SecondaryClick", e[e.PrimaryClick = 2] = "PrimaryClick"
                    }(n || (n = {})),
                    function(e) {
                        e[e.None = 0] = "None", e[e.ButtonEnter = 1] = "ButtonEnter", e[e.ButtonLeave = 2] = "ButtonLeave", e[e.Snap = 3] = "Snap", e[e.Sliding = 4] = "Sliding", e[e.SlidingEdge = 5] = "SlidingEdge"
                    }(i || (i = {})),
                    function(e) {
                        e[e.Minimal = 1] = "Minimal", e[e.Modal = 2] = "Modal", e[e.Rich = 4] = "Rich", e[e.ShowArrowKeys = 8] = "ShowArrowKeys", e[e.ShowDoneKey = 16] = "ShowDoneKey"
                    }(o || (o = {}))
            },
            5928: (e, t, r) => {
                "use strict";
                r.d(t, {
                    L: () => f
                });
                var s, n = r(655),
                    i = r(7294),
                    o = r(7056),
                    a = r(3568),
                    l = r(1569),
                    d = r(9809),
                    c = r(5211),
                    h = r(2893),
                    u = r(7062),
                    p = r(2188),
                    m = r(9595),
                    g = r(3010);
                ! function(e) {
                    e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
                }(s || (s = {}));
                class v extends i.Component {
                    constructor(e) {
                        super(e), this.m_containerRef = null, this.m_nameRef = null, this.m_svgRef = null, this.m_containerRef = i.createRef(), this.m_nameRef = i.createRef(), this.m_svgRef = i.createRef(), this.state = {
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
                    ComponentUpdated(e, t, r) {
                        e == this.props.devicePath && (t == this.props.sourcePath + "/click" && this.setState({
                            click: r
                        }), t == this.props.sourcePath + "/touch" && this.setState({
                            touch: r
                        }), t == this.props.sourcePath + "/x" && this.setState({
                            x: r
                        }), t == this.props.sourcePath + "/y" && this.setState({
                            y: r
                        }), t == this.props.sourcePath + "/value" && this.setState({
                            value: r
                        }), t == this.props.sourcePath + "/force" && this.setState({
                            force: r
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
                        return this.state.click && (e += " Clicked"), this.state.touch && (e += " Touched"), i.createElement("div", {
                            className: "VisualizerButtonContainer"
                        }, i.createElement("div", {
                            className: "VisualizerButtonBase" + e
                        }))
                    }
                    renderBar(e, t, r) {
                        let s = {
                            width: String(100 * r) + "%"
                        };
                        return i.createElement("div", {
                            className: "TriggerBar " + t
                        }, i.createElement("div", {
                            className: "VisualizerLabel"
                        }, (0, a.Xx)(e)), i.createElement("div", {
                            className: "TriggerBarBackground"
                        }, i.createElement("div", {
                            className: "TriggerBarContent",
                            style: s
                        })))
                    }
                    UpdateSVGPath() {
                        if (this.m_nameRef && this.m_nameRef.current && this.m_containerRef && this.m_containerRef.current && this.m_svgRef && this.m_svgRef.current) {
                            let e = this.m_svgRef.current.children.namedItem("SourcePath"),
                                t = this.m_svgRef.current.children.namedItem("SourceLine"),
                                r = this.m_svgRef.current.children.namedItem("SourceCircle"),
                                n = this.props.side == s.Right,
                                i = this.m_nameRef.current.getBoundingClientRect(),
                                o = this.m_containerRef.current.getBoundingClientRect(),
                                a = this.GetPosition(),
                                l = new c.E9(0, i.top + i.height / 2);
                            l.x = n ? o.left - 10 : o.right + 10;
                            let d = n ? -20 : 20,
                                h = l.x + d + "," + l.y + " " + a.x + "," + a.y;
                            e.setAttribute("points", h);
                            let u = l.x + "," + l.y + " " + (l.x + d) + "," + l.y;
                            t.setAttribute("points", u), r.setAttribute("cx", a.x + ""), r.setAttribute("cy", a.y + "")
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
                        return this.props.side == s.Left ? e += " MenuLeftLine" : e += " MenuRightLine", this.IsEngaged() && (e += " MenuSVGVisible"), i.createElement("div", {
                            className: "VisualizerControl",
                            ref: this.m_containerRef
                        }, i.createElement("div", {
                            className: "VisualizerSectionHeader"
                        }, i.createElement("div", {
                            className: "Label Title",
                            ref: this.m_nameRef
                        }, d.I.LocalizeControllerString(this.props.controllerType, this.props.sourcePath)), this.renderHeaderVisualization()), this.renderBodyVisualization(), i.createElement("svg", {
                            className: e,
                            xmlns: "http://www.w3.org/2000/svg",
                            ref: this.m_svgRef
                        }, i.createElement("defs", null, i.createElement("radialGradient", {
                            id: "buttonGradient"
                        }, i.createElement("stop", {
                            offset: "0%",
                            stopColor: "var(--bordercolor)",
                            stopOpacity: "0.8"
                        }), i.createElement("stop", {
                            offset: "100%",
                            stopColor: "var(--bordercolor)",
                            stopOpacity: "0"
                        }))), i.createElement("polyline", {
                            id: "SourceLine",
                            stroke: "var(--bordercolor)",
                            strokeWidth: "0.1rem",
                            fill: "transparent"
                        }), i.createElement("polyline", {
                            id: "SourcePath",
                            stroke: "var(--bordercolor)",
                            strokeWidth: "0.1rem",
                            fill: "transparent"
                        }), i.createElement("circle", {
                            id: "SourceCircle",
                            r: "2rem",
                            fill: "url(#buttonGradient)"
                        })))
                    }
                }(0, n.gn)([o.ak], v.prototype, "ComponentUpdated", null), (0, n.gn)([o.ak], v.prototype, "UpdateSVGPath", null);
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
                        return i.createElement("div", {
                            className: "TriggerVisualizerContainer"
                        }, this.props.source.value && this.renderBar("#SourceInputMode_Pull", "TriggerValue", this.state.value), this.props.source.force && this.renderBar("#SourceInputMode_Force", "TriggerForce", this.state.force))
                    }
                }
                class b extends v {
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
                        }, this.state.click && (t += " Clicked")), i.createElement("div", {
                            className: "TrackpadVisualizerContainer" + (this.state.touch ? " Touched" : "")
                        }, i.createElement("div", {
                            className: "TrackpadPosition"
                        }, i.createElement("div", {
                            className: "VisualizerLabel"
                        }, (0, a.Xx)("#SourceInputMode_Position")), i.createElement("div", {
                            className: "TrackpadVisualizerContainer"
                        }, i.createElement("div", {
                            className: "TrackpadVisualizerBackground"
                        }, e && i.createElement("div", {
                            style: e
                        }, i.createElement("div", {
                            className: "TrackpadVisualizerPipContainer"
                        }, i.createElement("div", {
                            className: t
                        })))))), this.props.source.force && this.renderBar("#SourceInputMode_Force", "TriggerForce", this.state.force))
                    }
                }
                class S extends i.Component {
                    constructor(e) {
                        super(e), this.m_imageRef = i.createRef(), this.state = {
                            imageScale: this.GetPointScale()
                        }
                    }
                    get ControllerTypeInfo() {
                        let e = d.I.GetDeviceInfo(this.props.devicePath);
                        return d.I.GetControllerTypeInfo(e.controller_type)
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
                            default:
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
                                return 0
                        }
                    }
                    renderSource(e, t, r) {
                        let s = e + this.ControllerTypeInfo.controller_type;
                        switch (t.type) {
                            case "button":
                                return i.createElement(_, {
                                    key: s,
                                    side: r,
                                    controllerType: this.ControllerTypeInfo,
                                    devicePath: this.props.devicePath,
                                    sourcePath: e,
                                    source: t,
                                    visualizer: this.props.visualizer,
                                    imageScale: this.GetPointScale()
                                });
                            case "trigger":
                                return i.createElement(y, {
                                    key: s,
                                    side: r,
                                    controllerType: this.ControllerTypeInfo,
                                    devicePath: this.props.devicePath,
                                    sourcePath: e,
                                    source: t,
                                    visualizer: this.props.visualizer,
                                    imageScale: this.GetPointScale()
                                });
                            case "joystick":
                            case "trackpad":
                                return i.createElement(b, {
                                    key: s,
                                    side: r,
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
                                return i.createElement("div", {
                                    key: s
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
                            r = this.ControllerTypeInfo;
                        return "/user/hand/left" == this.props.devicePath ? r.input_bindingui_left && (e = r.input_bindingui_left.uri, t = r.input_bindingui_left.transform ? r.input_bindingui_left.transform : "") : "/user/hand/right" == this.props.devicePath ? r.input_bindingui_right && (e = r.input_bindingui_right.uri, t = r.input_bindingui_right.transform ? r.input_bindingui_right.transform : "") : r.input_bindingui_left ? (e = r.input_bindingui_left.uri, t = r.input_bindingui_left.transform ? r.input_bindingui_left.transform : "") : r.input_bindingui_right && (e = r.input_bindingui_right.uri, t = r.input_bindingui_right.transform ? r.input_bindingui_right.transform : ""), e ? i.createElement("div", {
                            className: "VisualizerImageContainer"
                        }, i.createElement("img", {
                            className: "VisualizerImage",
                            ref: this.m_imageRef,
                            onLoad: this.OnImageLoaded,
                            src: e,
                            style: {
                                transform: t
                            }
                        }), i.createElement(h.Z, {
                            onReflow: this.OnImageReflow
                        })) : null
                    }
                    render() {
                        let e = [],
                            t = [],
                            r = this.ControllerTypeInfo,
                            n = 0,
                            o = [];
                        for (let e in r.input_source) {
                            let t = r.input_source[e];
                            if ("InputValueVisibility_AvailableButHidden" == t.visibility) continue;
                            let s = this.EstimateSourceHeight(t);
                            n += s, o.push({
                                sSourcePath: e,
                                inputSource: t,
                                order: t.order ? t.order : 0,
                                height: s
                            })
                        }
                        let a = 8;
                        n > 16 && (a = n / 2);
                        let l = 0,
                            d = o.sort(((e, t) => e.order - t.order));
                        for (let r of d) {
                            l += r.height;
                            let n = l > a ? s.Right : s.Left,
                                i = this.renderSource(r.sSourcePath, r.inputSource, n);
                            i && (n == s.Left ? e.push(i) : t.push(i))
                        }
                        return i.createElement("div", {
                            className: "ControllerVisualizer"
                        }, i.createElement("div", {
                            className: "VisualizerLeft ControllerVisualizerEntries"
                        }, e), this.renderImage(), i.createElement("div", {
                            className: "VisualizerRight ControllerVisualizerEntries"
                        }, t))
                    }
                }(0, n.gn)([o.ak], S.prototype, "OnImageLoaded", null), (0, n.gn)([o.ak], S.prototype, "OnImageReflow", null);
                let f = class extends i.Component {
                    constructor(e) {
                        super(e), this.m_mailbox = new l.Nv, this.m_componentRegistrations = {}, this.m_observeDisposer = null, this.m_mailbox.RegisterHandler("update_component_states", this.OnUpdateComponentStates), this.m_mailbox.Init("controller_visualizer").then((() => (this.UpdateDeviceInputStateSubscriptions(), this.m_observeDisposer = (0, p.N7)(d.I, "ConnectedDevices", this.OnConnectedDevicesChanged), this.SetDefaultDeviceIfNecessary(), null))), this.state = {
                            devicePath: null
                        }
                    }
                    componentWillUnmount() {
                        this.m_observeDisposer && this.m_observeDisposer();
                        for (let e of d.I.ConnectedDevices) {
                            let t = {
                                type: "cancel_input_state_updates",
                                device_path: e.root_path,
                                returnAddress: this.m_mailbox.name
                            };
                            this.m_mailbox.SendMessage("input_server", t)
                        }
                    }
                    UpdateDeviceInputStateSubscriptions() {
                        for (let e of d.I.ConnectedDevices) {
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
                            let r = e.device + t;
                            this.m_componentRegistrations[r] && this.m_componentRegistrations[r](e.device, t, e.components[t])
                        }
                    }
                    RegisterSourceVisualizer(e, t, r) {
                        this.m_componentRegistrations[e + t] = r
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
                        return d.I.ConnectedDevices.sort(((e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t)))
                    }
                    render() {
                        let e, t = [],
                            r = this.GetSortedDevices();
                        if (!r) return i.createElement(m.TB, {
                            className: "ControllerVisualizerWrapper",
                            header: (0, a.Xx)("#TestControllerTitle", ""),
                            onDismissRequested: this.props.onDismissRequested
                        }, i.createElement("div", {
                            className: "VisualizerLabel"
                        }, (0, a.Xx)("#TestController_NoController")));
                        for (let s of r) "TrackedDeviceClass_HMD" != s.class && (s.root_path == this.state.devicePath && (e = s.serial_number), t.push({
                            value: s.root_path,
                            sLabel: (0, a.Xx)("#" + s.root_path)
                        }));
                        return i.createElement(m.TB, {
                            className: "ControllerVisualizerWrapper",
                            header: (0, a.Xx)("#TestControllerTitle", e),
                            onDismissRequested: this.props.onDismissRequested,
                            footer: i.createElement(m.U5, {
                                leftControls: [i.createElement(g.hu, {
                                    key: "dropdown",
                                    items: t,
                                    value: this.state.devicePath,
                                    defaultLabel: (0, a.Xx)("#" + this.state.devicePath),
                                    onChange: e => {
                                        this.setState({
                                            devicePath: e
                                        })
                                    }
                                })],
                                onDismissRequested: this.props.onDismissRequested
                            })
                        }, this.state.devicePath && i.createElement(S, {
                            devicePath: this.state.devicePath,
                            serialNumber: e,
                            visualizer: this
                        }))
                    }
                };
                (0, n.gn)([o.ak], f.prototype, "OnConnectedDevicesChanged", null), (0, n.gn)([o.ak], f.prototype, "OnUpdateComponentStates", null), f = (0, n.gn)([u.Pi], f)
            },
            9671: (e, t, r) => {
                "use strict";
                r.d(t, {
                    V: () => d
                });
                var s = r(655),
                    n = r(7294),
                    i = r(7056),
                    o = r(3568),
                    a = r(1569);
                class l extends n.Component {
                    constructor(e) {
                        if (super(e), this.m_mailbox = new a.Nv, this.m_mailbox.Init("legacy_debugger"), this.m_mailbox.RegisterHandler("legacy_input_frame", this.OnLegacyInputFrame), VRHTML) {
                            let e = VRHTML.VRApplications.GetCurrentSceneProcessId();
                            VRHTML.VRProperties.SetInt32Path("/legacy_debugger_pid", e)
                        }
                        this.state = {
                            currentState: null
                        }
                    }
                    componentWillUnmount() {
                        null === VRHTML || void 0 === VRHTML || VRHTML.VRProperties.SetInt32Path("/legacy_debugger_pid", 0)
                    }
                    OnLegacyInputFrame(e) {
                        this.setState({
                            currentState: e
                        })
                    }
                    renderController(e) {
                        let t = [];
                        if (t.push(n.createElement("div", {
                                className: "Label LegacyDebuggerGroup"
                            }, "Pressed:")), e.pressed)
                            for (let r of e.pressed) t.push(n.createElement("div", {
                                className: "Label LegacyDebuggerButtonName"
                            }, r));
                        else t.push(n.createElement("div", {
                            className: "Label LegacyDebuggerButtonName"
                        }, "None"));
                        if (t.push(n.createElement("div", {
                                className: "Label LegacyDebuggerGroup"
                            }, "Touched:")), e.touched)
                            for (let r of e.touched) t.push(n.createElement("div", {
                                className: "Label LegacyDebuggerButtonName"
                            }, r));
                        else t.push(n.createElement("div", {
                            className: "Label LegacyDebuggerButtonName"
                        }, "None"));
                        if (t.push(n.createElement("div", {
                                className: "Label LegacyDebuggerGroup"
                            }, "Supported:")), e.supported_buttons)
                            for (let r of e.supported_buttons) t.push(n.createElement("div", {
                                className: "Label LegacyDebuggerButtonName"
                            }, r));
                        else t.push(n.createElement("div", {
                            className: "Label LegacyDebuggerButtonName"
                        }, "None"));
                        t.push(n.createElement("div", {
                            className: "Label LegacyDebuggerGroup"
                        }, "Axis:"));
                        for (let r of e.axis) t.push(n.createElement("div", {
                            className: "Label LegacyDebuggerButtonName"
                        }, "X: ", r.x.toFixed(2), " Y: ", r.y.toFixed(2)));
                        return t
                    }
                    render() {
                        return this.state.currentState ? n.createElement("div", {
                            className: "FlexRow"
                        }, n.createElement("div", {
                            className: "FlexColumn LegacyDebuggerController"
                        }, n.createElement("div", {
                            className: "Label"
                        }, "Left"), this.renderController(this.state.currentState.left)), n.createElement("div", {
                            className: "FlexColumn LegacyDebuggerController"
                        }, n.createElement("div", {
                            className: "Label"
                        }, "Right"), this.renderController(this.state.currentState.right)), n.createElement("div", {
                            className: "FlexColumn LegacyDebuggerController"
                        }, n.createElement("div", {
                            className: "Label"
                        }, "HMD"), this.renderController(this.state.currentState.hmd))) : n.createElement("div", {
                            className: "Label"
                        }, (0, o.Xx)("#LegacyDebugger_NoApp"))
                    }
                }(0, s.gn)([i.ak], l.prototype, "OnLegacyInputFrame", null);
                class d extends n.Component {
                    constructor(e) {
                        super(e)
                    }
                    render() {
                        return n.createElement("div", {
                            className: "FlexRowWithWrap"
                        }, n.createElement("div", {
                            className: "FlexFullWidthRowCentered LegacyDebuggerWrapper"
                        }, n.createElement(l, null)))
                    }
                }
            },
            7726: (e, t, r) => {
                "use strict";
                r.d(t, {
                    A: () => s,
                    X: () => l
                });
                var s, n = r(655),
                    i = r(7294),
                    o = r(7056),
                    a = r(1569);
                ! function(e) {
                    e[e.HorizontalPips = 0] = "HorizontalPips", e[e.VerticalBattery = 1] = "VerticalBattery"
                }(s || (s = {}));
                class l extends i.Component {
                    constructor(e) {
                        super(e), this.m_BatteryStateChangedCallbackHandle = null, this.m_DeviceRoleChangedCallbackHandle = null, this.m_DeviceEventCallbackHandle = null, this.batteryLevelStable = null, this.state = {
                            batteryIconPath: null,
                            roleIconPath: null
                        }
                    }
                    componentDidMount() {
                        this.m_BatteryStateChangedCallbackHandle = null === a.Co || void 0 === a.Co ? void 0 : a.Co.RegisterForBatteryStateChangedEvents(this.OnBatteryStateChanged), this.m_DeviceRoleChangedCallbackHandle = null === a.Co || void 0 === a.Co ? void 0 : a.Co.RegisterForDeviceRoleChangedEvents(this.OnDeviceRoleChanged), this.m_DeviceEventCallbackHandle = null === a.Co || void 0 === a.Co ? void 0 : a.Co.RegisterForDeviceEvents(this.OnDeviceEvent), this.UpdateControllerStatus()
                    }
                    componentWillUnmount() {
                        this.m_BatteryStateChangedCallbackHandle && (this.m_BatteryStateChangedCallbackHandle.unregister(), this.m_BatteryStateChangedCallbackHandle = null), this.m_DeviceRoleChangedCallbackHandle && (this.m_DeviceRoleChangedCallbackHandle.unregister(), this.m_DeviceRoleChangedCallbackHandle = null), this.m_DeviceEventCallbackHandle && (this.m_DeviceEventCallbackHandle.unregister(), this.m_DeviceEventCallbackHandle = null)
                    }
                    UpdateControllerStatus() {
                        var e;
                        if (!a.Co) return;
                        const t = a.Co.VRProperties.GetBoolProperty(this.props.trackedDeviceIndex, a.Uk.DeviceProvidesBatteryStatus_Bool),
                            r = a.Co.VRSystem.GetControllerRoleForTrackedDeviceIndex(this.props.trackedDeviceIndex);
                        let n = !1;
                        if (t) {
                            const t = null !== (e = a.Co.VRProperties.GetFloatProperty(this.props.trackedDeviceIndex, a.Uk.DeviceBatteryPercentage_Float)) && void 0 !== e ? e : 0;
                            n = a.Co.VRProperties.GetBoolProperty(this.props.trackedDeviceIndex, a.Uk.DeviceIsCharging_Bool), null == this.batteryLevelStable || 0 == this.batteryLevelStable ? this.batteryLevelStable = t : (this.batteryLevelStable = Math.min(this.batteryLevelStable, t + l.kBatteryLevelHysteresis, 1), this.batteryLevelStable = Math.max(this.batteryLevelStable, t - l.kBatteryLevelHysteresis, 0))
                        }
                        let i = l.GetBatteryIcon(t, n, this.batteryLevelStable, s.HorizontalPips),
                            o = this.GetRoleIcon(r);
                        i == this.state.batteryIconPath && o == this.state.roleIconPath || this.setState({
                            batteryIconPath: i,
                            roleIconPath: o
                        })
                    }
                    GetRoleIcon(e) {
                        switch (e) {
                            case a.Kg.TrackedControllerRole_RightHand:
                                return "images/icons/controller_model_right.png";
                            case a.Kg.TrackedControllerRole_LeftHand:
                                return "images/icons/controller_model_left.png"
                        }
                        return null
                    }
                    static GetBatteryIcon(e, t, r, n) {
                        if (!e) return null;
                        const i = n == s.VerticalBattery ? "images/icons/vert" : "images/icons/controller_model";
                        return t ? r < .15 ? i + "_charging_red.png" : i + "_charging.png" : 0 == r ? null : r < .15 ? i + "_low.png" : r < .3 ? i + "_battery_1.png" : r < .6 ? i + "_battery_2.png" : r < .9 ? i + "_battery_3.png" : i + "_battery_4.png"
                    }
                    OnBatteryStateChanged(e) {
                        e == this.props.trackedDeviceIndex && this.UpdateControllerStatus()
                    }
                    OnDeviceRoleChanged() {
                        this.UpdateControllerStatus()
                    }
                    OnDeviceEvent(e, t, r) {
                        e == a.XX.Activated && r == this.props.trackedDeviceIndex && this.UpdateControllerStatus()
                    }
                    render() {
                        return i.createElement(a.s_, {
                            width: void 0,
                            height: void 0,
                            interactive: !1,
                            rendermodel_component_device_index: this.props.trackedDeviceIndex,
                            rendermodel_component_name: "status",
                            debug_name: "controllerstatus_" + this.props.trackedDeviceIndex
                        }, i.createElement("div", {
                            className: "ControllerStatusRoot",
                            style: {
                                width: 256,
                                height: 256
                            }
                        }, i.createElement("div", {
                            className: "ControllerStatusFrame"
                        }, i.createElement("div", {
                            className: "ControllerHandFrame",
                            style: {
                                width: 210,
                                marginLeft: 23,
                                height: 110,
                                marginTop: 18
                            }
                        }, i.createElement("img", {
                            className: "ControllerHand",
                            src: this.state.roleIconPath
                        })), i.createElement("div", {
                            className: "ControllerBatteryFrame",
                            style: {
                                width: 210,
                                marginLeft: 23,
                                height: 110,
                                marginTop: 18,
                                opacity: .85
                            }
                        }, i.createElement("img", {
                            className: "ControllerBattery",
                            src: this.state.batteryIconPath
                        })))))
                    }
                }
                l.kBatteryLevelHysteresis = .02, (0, n.gn)([o.ak], l.prototype, "OnBatteryStateChanged", null), (0, n.gn)([o.ak], l.prototype, "OnDeviceRoleChanged", null), (0, n.gn)([o.ak], l.prototype, "OnDeviceEvent", null)
            },
            5365: (e, t, r) => {
                "use strict";
                r.d(t, {
                    g: () => me,
                    _: () => de
                });
                var s, n, i = r(655),
                    o = r(1569),
                    a = r(7056),
                    l = r(2188),
                    d = r(7294),
                    c = r(3081),
                    h = r(5177),
                    u = r(4979),
                    p = r(3107),
                    m = r(7176),
                    g = r(3568),
                    v = r(8495),
                    _ = r(7008),
                    y = r(9942),
                    b = r(8583),
                    S = r(1628),
                    f = r(7062),
                    k = r(7726),
                    M = r(424);

                function R(e) {
                    switch (e) {
                        case n.LeftHand:
                            return "/user/hand/left";
                        case n.RightHand:
                            return "/user/hand/right";
                        default:
                            return ""
                    }
                }! function(e) {
                    e[e.Dashboard = 0] = "Dashboard", e[e.LeftHand = 1] = "LeftHand", e[e.RightHand = 2] = "RightHand", e[e.World = 3] = "World", e[e.Theater = 4] = "Theater"
                }(n || (n = {}));
                let C = s = class extends d.Component {
                    constructor(e) {
                        super(e), this.state = {
                            fOverlayScale: this.getDefaultScaleForLocation(),
                            xfTransform: (0, o.Oq)(),
                            sParent: R(this.props.dockLocation),
                            bIsOutsideMaxDist: !1,
                            destination: this.props.dockLocation,
                            bIsMoving: !1
                        }, this.m_nMoveDeviceIndex = o.Kf, this.m_moveDeviceRole = o.Kg.TrackedControllerRole_Invalid
                    }
                    componentDidMount() {
                        this.setInitialTransformForLocation()
                    }
                    componentDidUpdate(e, t) {
                        e.dockLocation != this.props.dockLocation && this.setState({
                            sParent: R(this.props.dockLocation),
                            xfTransform: (0, o.Oq)(),
                            bIsOutsideMaxDist: !1,
                            destination: this.props.dockLocation
                        }, this.setInitialTransformForLocation)
                    }
                    getDefaultScaleForLocation() {
                        switch (this.props.dockLocation) {
                            case n.Dashboard:
                            case n.LeftHand:
                            case n.RightHand:
                                return .25;
                            case n.World:
                                return .5;
                            case n.Theater:
                                return 1
                        }
                    }
                    setInitialTransformForLocation() {
                        if (this.props.xfInitial) {
                            switch (this.props.dockLocation) {
                                case n.LeftHand:
                                case n.RightHand: {
                                    let e = this.props.xfInitial,
                                        t = this.state.fOverlayScale;
                                    Math.abs(e.scale.x - 2) < .1 && (t = Math.min(2 * t, s.sfOverlayScaleMax)), e.scale = {
                                        x: 1,
                                        y: 1,
                                        z: 1
                                    }, this.setState({
                                        xfTransform: e,
                                        fOverlayScale: t
                                    });
                                    break
                                }
                                case n.World: {
                                    let e = this.props.xfInitial,
                                        t = this.state.fOverlayScale;
                                    Math.abs(e.scale.x - 1) < .1 && (t = Math.max(t / 2, s.sfOverlayScaleMin)), e.scale = {
                                        x: 2,
                                        y: 2,
                                        z: 1
                                    }, this.setState({
                                        xfTransform: e,
                                        fOverlayScale: t
                                    });
                                    break
                                }
                            }
                            return
                        }
                        let e = (0, o.Oq)();
                        switch (e.rotation = (0, o.UU)({
                                x: -45,
                                y: 0,
                                z: 0
                            }), this.props.dockLocation) {
                            case n.Dashboard:
                            case n.LeftHand:
                            case n.RightHand:
                                this.setState({
                                    xfTransform: e
                                });
                                break;
                            case n.World:
                                let t = 0;
                                o.hz.getInstance().requestSGTransform("system.systemui::active_overlay_transform", t).then((t => {
                                    e.rotation = t.rotation, e.scale = {
                                        x: 2,
                                        y: 2,
                                        z: 1
                                    }, e.translation = {
                                        x: t.translation.x,
                                        y: t.translation.y,
                                        z: t.translation.z
                                    }, this.setState({
                                        xfTransform: e
                                    })
                                }));
                                break;
                            case n.Theater:
                                e = (0, o.Oq)(), e.translation.y = .2, e.translation.z = -3, this.setState({
                                    xfTransform: e
                                })
                        }
                    }
                    onOverlayScaleChanged(e) {
                        this.setState({
                            fOverlayScale: e
                        })
                    }
                    computeDestination() {
                        if (!this.state.bIsMoving) return;
                        let e = VRHTML.GetPose(this.m_nMoveDeviceIndex, o.zq.Standing),
                            t = null;
                        VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(o.Kg.TrackedControllerRole_LeftHand) != o.Kf && (t = VRHTML.GetPose("/user/hand/left", o.zq.Standing));
                        let r = null;
                        VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(o.Kg.TrackedControllerRole_RightHand) != o.Kf && (r = VRHTML.GetPose("/user/hand/right", o.zq.Standing));
                        let i = [];
                        switch (this.state.sParent) {
                            case "/user/hand/left":
                                r && i.push({
                                    pose: r,
                                    location: n.RightHand
                                });
                                break;
                            case "/user/hand/right":
                                t && i.push({
                                    pose: t,
                                    location: n.LeftHand
                                });
                                break;
                            case "/user/head":
                                t && i.push({
                                    pose: t,
                                    location: n.LeftHand
                                }), r && i.push({
                                    pose: r,
                                    location: n.RightHand
                                })
                        }
                        if (0 == i.length) return void setTimeout(this.computeDestination, s.sfMovePulseMS);
                        let a = VRHTML.MultiplyTransforms(e.xfDeviceToAbsoluteTracking, this.state.xfTransform);
                        i.forEach((e => {
                            let t = VRHTML.ChangeBasis(a, e.pose.xfDeviceToAbsoluteTracking);
                            (0, o.LY)(t.translation) > s.sfMaxDockDist ? this.state.bIsOutsideMaxDist || (M.L.Instance.triggerHaptic(o.sH.SlidingEdge), this.setState({
                                bIsOutsideMaxDist: !0,
                                destination: n.World
                            })) : (this.state.bIsOutsideMaxDist || this.props.dockLocation == n.World && this.state.destination == n.World) && (M.L.Instance.triggerHaptic(o.sH.SlidingEdge), this.setState({
                                bIsOutsideMaxDist: !1,
                                destination: e.location
                            }))
                        })), setTimeout(this.computeDestination, s.sfMovePulseMS)
                    }
                    startMove() {
                        if (this.state.bIsMoving) return;
                        if (console.log("Starting to move " + this.props.sOverlayKey + "...\n"), this.m_nMoveDeviceIndex = VRHTML.VROverlay.GetPrimaryDashboardDevice(), this.m_nMoveDeviceIndex == o.Kf) return;
                        this.m_moveDeviceRole = VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(this.m_nMoveDeviceIndex);
                        let e, t, r = VRHTML.GetPose(this.m_nMoveDeviceIndex, o.zq.Standing);
                        switch (this.props.dockLocation) {
                            case n.LeftHand:
                                if (VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(o.Kg.TrackedControllerRole_LeftHand) == o.Kf) return;
                                e = VRHTML.GetPose("/user/hand/left", o.zq.Standing);
                                break;
                            case n.RightHand:
                                if (VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(o.Kg.TrackedControllerRole_RightHand) == o.Kf) return;
                                e = VRHTML.GetPose("/user/hand/right", o.zq.Standing);
                                break;
                            default:
                                e = {
                                    xfDeviceToAbsoluteTracking: (0, o.Oq)(),
                                    vVelocity: {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    },
                                    eTrackingResult: o.QZ.TrackingResult_Running_OK,
                                    bPoseIsValid: !0
                                }
                        }
                        switch (this.m_moveDeviceRole) {
                            case o.Kg.TrackedControllerRole_LeftHand:
                                t = "/user/hand/left";
                                break;
                            case o.Kg.TrackedControllerRole_RightHand:
                                t = "/user/hand/right";
                                break;
                            default:
                                t = "/user/head"
                        }
                        let s = VRHTML.MultiplyTransforms(e.xfDeviceToAbsoluteTracking, this.state.xfTransform),
                            i = VRHTML.ChangeBasis(s, r.xfDeviceToAbsoluteTracking);
                        this.setState({
                            xfTransform: i,
                            sParent: t,
                            bIsOutsideMaxDist: this.props.dockLocation == n.World,
                            bIsMoving: !0
                        }, this.computeDestination), window.addEventListener("mouseup", this.endMove)
                    }
                    endMove() {
                        if (!this.state.bIsMoving) return;
                        let e, t;
                        if ("/user/hand/left" == this.state.sParent || this.state.destination == n.LeftHand) {
                            if (VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(o.Kg.TrackedControllerRole_LeftHand) == o.Kf) return;
                            e = VRHTML.GetPose("/user/hand/left", o.zq.Standing)
                        }
                        if ("/user/hand/right" == this.state.sParent || this.state.destination == n.RightHand) {
                            if (VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(o.Kg.TrackedControllerRole_RightHand) == o.Kf) return;
                            t = VRHTML.GetPose("/user/hand/right", o.zq.Standing)
                        }
                        let r, s = {
                            xfDeviceToAbsoluteTracking: (0, o.Oq)(),
                            vVelocity: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            eTrackingResult: o.QZ.TrackingResult_Running_OK,
                            bPoseIsValid: !0
                        };
                        switch (this.state.destination) {
                            case n.LeftHand:
                                r = e;
                                break;
                            case n.RightHand:
                                r = t;
                                break;
                            default:
                                r = s
                        }
                        let i = VRHTML.GetPose(this.m_nMoveDeviceIndex, o.zq.Standing),
                            a = VRHTML.MultiplyTransforms(i.xfDeviceToAbsoluteTracking, this.state.xfTransform),
                            l = VRHTML.ChangeBasis(a, r.xfDeviceToAbsoluteTracking);
                        this.setState({
                            xfTransform: l,
                            sParent: R(this.state.destination),
                            bIsMoving: !1
                        }), this.props.onDockOverlay(this.props.sOverlayKey, this.state.destination, l), window.removeEventListener("mouseup", this.endMove)
                    }
                    render() {
                        var e, t;
                        if ("" == this.props.sOverlayKey || null == this.state.xfTransform) return null;
                        let r = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey);
                        if (!r) return null;
                        let i = {
                            x: 0,
                            y: 0
                        };
                        try {
                            i = VRHTML.VROverlay.GetOverlayMouseScale(r)
                        } catch (e) {
                            return console.log(JSON.stringify(e)), null
                        }
                        let a = (null !== (e = VRHTML.VROverlay.GetWidthInMeters(r)) && void 0 !== e ? e : 1) * this.state.fOverlayScale,
                            l = a * i.y / i.x,
                            c = !this.props.bDashboardShown;
                        if (this.props.dockLocation == n.Theater) {
                            if (this.props.bHasSceneApp) return null;
                            c = !0
                        }
                        if (c) {
                            let e = null !== (t = S.G3.settings.get("/settings/dashboard/enableLTCReflections")) && void 0 !== t && t,
                                r = .05;
                            return d.createElement(o.wx, {
                                parent_path: this.state.sParent,
                                transform: this.state.xfTransform,
                                id: "xf_widget"
                            }, d.createElement(o.s_, {
                                overlay_key: this.props.sOverlayKey,
                                height: l,
                                width: void 0,
                                interactive: !0,
                                undocked: !0,
                                origin: o.Ic.BottomCenter
                            }, d.createElement(o.sl, {
                                mountedId: (0, o.iN)(m.GN, this.props.sOverlayKey + ".cursor")
                            })), this.props.bDarkMode && e && d.createElement(o.wx, {
                                translation: {
                                    y: .5 * l
                                }
                            }, d.createElement(o.bt, {
                                width: a,
                                height: l,
                                "near-z": -.1,
                                "far-z": .1,
                                debug: !1,
                                specular: {
                                    color: {
                                        r,
                                        g: r,
                                        b: r
                                    }
                                },
                                diffuse: {
                                    size: 10,
                                    resolution: 512
                                }
                            })), this.props.bCaptureVideo && d.createElement(o.wx, {
                                translation: {
                                    y: .5 * l
                                }
                            }, d.createElement(o.Ri, {
                                width: a,
                                height: l,
                                "near-z": -.1,
                                "far-z": .1,
                                debug: !1
                            })))
                        }
                        let p = l + s.sfOverlayTrayHeight,
                            g = Math.max(a, .175),
                            v = p / 2 - s.sfOverlayTrayHeight;
                        return d.createElement(o.kH, {
                            sParentPath: this.state.sParent,
                            bIsMoving: this.state.bIsMoving,
                            xfCurrent: this.state.xfTransform,
                            id: "xf_widget"
                        }, d.createElement(o.wx, {
                            translation: {
                                y: v,
                                z: -.005
                            },
                            scale: {
                                x: g,
                                y: p,
                                z: .008
                            }
                        }, d.createElement(o.VW, {
                            color: {
                                r: .016,
                                g: .017,
                                b: .02
                            }
                        }, d.createElement(o.gQ, {
                            solid: !0,
                            source: "unit_cube"
                        }))), d.createElement(o.s_, {
                            overlay_key: this.props.sOverlayKey,
                            height: l,
                            width: void 0,
                            interactive: !0,
                            undocked: !0,
                            origin: o.Ic.BottomCenter
                        }, d.createElement(o.sl, {
                            mountedId: (0, o.iN)(m.GN, this.props.sOverlayKey + ".cursor")
                        })), d.createElement(o.s_, {
                            height: s.sfOverlayTrayHeight,
                            width: void 0,
                            interactive: !0,
                            origin: o.Ic.TopCenter
                        }, d.createElement("div", {
                            className: "WindowTray"
                        }, d.createElement(u.iR, {
                            additionalClassName: "WindowTraySlider",
                            min: s.sfOverlayScaleMin,
                            max: s.sfOverlayScaleMax,
                            value: this.state.fOverlayScale,
                            valueStyleVariant: u.px.OnHandle,
                            onChange: this.onOverlayScaleChanged,
                            detents: [.25, .5, 1],
                            renderValue: e => (100 * e).toFixed(0) + "%"
                        }), d.createElement(h.z, {
                            className: "WindowTrayButton",
                            key: "move",
                            onMouseDown: this.startMove,
                            onMouseUp: this.endMove,
                            style: {
                                padding: "0.5em",
                                paddingBottom: "0.25em"
                            }
                        }, d.createElement("img", {
                            className: "Icon BlackToWhite",
                            src: "/dashboard/images/icons/icon_move.png"
                        })), d.createElement(h.z, {
                            className: "WindowTrayButton",
                            key: "undock",
                            style: {
                                padding: "0.5em",
                                paddingBottom: "0.25em"
                            },
                            title: "Return to Dashboard",
                            onClick: () => {
                                this.props.onDockOverlay(this.props.sOverlayKey, n.Dashboard)
                            }
                        }, d.createElement("img", {
                            className: "Icon",
                            src: "/dashboard/images/icons/icon_return.png"
                        })))), this.state.bIsMoving && !this.state.bIsOutsideMaxDist && d.createElement(d.Fragment, null, d.createElement(o.wx, {
                            parent_path: this.state.destination == n.LeftHand ? "/user/hand/left" : "/user/hand/right"
                        }, d.createElement(o.x1, {
                            target_id: "xf_widget",
                            thickness: .001,
                            start_buffer: .01,
                            end_buffer: .01
                        }))))
                    }
                };
                C.sfMaxDockDist = .4, C.sfMovePulseMS = 100, C.sfOverlayTrayHeight = .025, C.sfOverlayScaleMin = .1, C.sfOverlayScaleMax = 2, (0, i.gn)([a.ZP], C.prototype, "onOverlayScaleChanged", null), (0, i.gn)([a.ZP], C.prototype, "computeDestination", null), (0, i.gn)([a.ZP], C.prototype, "startMove", null), (0, i.gn)([a.ZP], C.prototype, "endMove", null), C = s = (0, i.gn)([f.Pi], C);
                var w, T, D = r(6459),
                    E = r(7475);
                let I = w = class extends d.Component {
                    constructor(e) {
                        super(e), this.m_mailbox = new o.Nv, this.m_refWindowScrollPanel = d.createRef(), this.state = {
                            desktopView: null
                        }, this.m_mailbox.Init(w.k_sMailboxName)
                    }
                    setSiblingReferences(e) {
                        this.setState({
                            desktopView: e
                        })
                    }
                    onWindowViewCreated(e, t) {
                        var r, s;
                        null === (r = this.m_refWindowScrollPanel.current) || void 0 === r || r.scrollTo({
                            left: null === (s = this.m_refWindowScrollPanel.current) || void 0 === s ? void 0 : s.scrollWidth,
                            behavior: "smooth"
                        })
                    }
                    render() {
                        var e, t, r, s;
                        if (!this.state.desktopView || (null === (e = this.state.desktopView) || void 0 === e ? void 0 : e.state.bIsUsingSteamDesktop)) return null;
                        const n = this.props.bWindowViewEnabled || (null === (t = this.state.desktopView) || void 0 === t ? void 0 : t.state.desktopIndices.length) > 1;
                        return d.createElement(D.j4, Object.assign({}, this.props, {
                            additionalClassNames: this.props.bWindowViewEnabled ? "DesktopTray FixedWidth" : "DesktopTray"
                        }), n && d.createElement(E.P, {
                            scrollDirection: E.I.Horizontal,
                            className: "Section Grow",
                            style: {
                                marginRight: 0,
                                marginLeft: "9px"
                            },
                            ref: this.m_refWindowScrollPanel
                        }, d.createElement("div", {
                            style: {
                                paddingRight: "16px",
                                display: "flex",
                                flexDirection: "row",
                                margin: 0
                            }
                        }, null === (r = this.state.desktopView) || void 0 === r ? void 0 : r.state.desktopIndices.map((e => {
                            var t;
                            return d.createElement(D.zN, {
                                additionalClassNames: "ViewButton Fixed",
                                key: e,
                                label: e.toString(),
                                active: (null === (t = this.state.desktopView) || void 0 === t ? void 0 : t.currentDesktopIndex) == e,
                                title: (0, g.Xx)("#Desktop_X", e),
                                onClick: () => {
                                    var t;
                                    return null === (t = this.state.desktopView) || void 0 === t ? void 0 : t.onDesktopChange(e)
                                }
                            })
                        })), Array.from(null === (s = this.state.desktopView) || void 0 === s ? void 0 : s.state.mapWindowInfo.keys()).map((e => {
                            var t, r, s;
                            return d.createElement(D.zN, {
                                additionalClassNames: "ViewButton",
                                iconUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                                key: e,
                                active: (null === (t = this.state.desktopView) || void 0 === t ? void 0 : t.state.sCurrentWindowOverlayKey) == e,
                                title: null === (s = this.props.mapWindows.get(null === (r = this.state.desktopView) || void 0 === r ? void 0 : r.state.mapWindowInfo.get(e).sHwnd)) || void 0 === s ? void 0 : s.title,
                                onClick: () => {
                                    var t;
                                    return null === (t = this.state.desktopView) || void 0 === t ? void 0 : t.onWindowViewChange(e)
                                }
                            })
                        })))), this.props.bWindowViewEnabled && d.createElement("div", {
                            className: "Section",
                            style: {
                                marginRight: 0
                            }
                        }, d.createElement(D.zN, {
                            iconUrl: "/dashboard/images/icons/icon_add.png",
                            additionalClassNames: "AddWindow",
                            title: (0, g.Xx)("#AddView"),
                            onClick: this.props.onToggleWindowList,
                            onMouseEnter: this.props.onClearPopoverMenuTimeout,
                            onMouseLeave: () => this.props.onStartPopoverMenuTimeout(500)
                        })))
                    }
                };
                I.k_sMailboxName = "systemui_desktoptray", I = w = (0, i.gn)([f.Pi], I);
                let P = T = class extends d.Component {
                    constructor(e) {
                        super(e), this.m_mailbox = new o.Nv, this.state = {
                            bIsUsingSteamDesktop: !1,
                            bIsReady: !1,
                            desktopIndices: [],
                            mapWindowInfo: new Map,
                            sCurrentWindowOverlayKey: ""
                        }, this.m_mailbox.Init(T.k_sMailboxName).then((() => {}))
                    }
                    componentDidMount() {
                        null === (null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VROverlay.FindOverlay("valve.steam.desktop")) ? (null === VRHTML || void 0 === VRHTML || VRHTML.RegisterForDesktopViewReadyEvents(this.onDesktopViewReady), null === VRHTML || void 0 === VRHTML || VRHTML.RegisterForDesktopViewUpdatingEvents(this.onDesktopViewUpdating), this.updateDesktopIndices()) : this.setState({
                            bIsUsingSteamDesktop: !0
                        })
                    }
                    get desktopCount() {
                        return this.state.desktopIndices.length
                    }
                    get sCurrentOverlayKey() {
                        return "" != this.state.sCurrentWindowOverlayKey ? this.state.sCurrentWindowOverlayKey : "system.desktop." + this.currentDesktopIndex
                    }
                    get currentDesktopIndex() {
                        var e;
                        return "" != this.state.sCurrentWindowOverlayKey ? -1 : null !== (e = S.G3.settings.get("/settings/dashboard/desktopIndex")) && void 0 !== e ? e : 1
                    }
                    get currentWindowHwnd() {
                        return "" == this.state.sCurrentWindowOverlayKey ? "" : this.state.mapWindowInfo.get(this.state.sCurrentWindowOverlayKey).sHwnd
                    }
                    onDesktopScaleChange(e) {
                        this.currentDesktopIndex > 0 && S.G3.SetSettingsValue("/settings/dashboard/desktopScale" + this.currentDesktopIndex, e)
                    }
                    onDesktopChange(e) {
                        S.G3.SetSettingsValue("/settings/dashboard/desktopIndex", e), this.setState({
                            sCurrentWindowOverlayKey: ""
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
                    onWindowViewCreated(e, t) {
                        this.state.mapWindowInfo.set(e, {
                            sHwnd: t
                        }), this.setState({
                            sCurrentWindowOverlayKey: e
                        })
                    }
                    onWindowViewClosed(e) {
                        this.state.sCurrentWindowOverlayKey == e && this.onDesktopChange(1)
                    }
                    onWindowViewDestroyed(e) {
                        this.state.mapWindowInfo.delete(e)
                    }
                    onWindowViewChange(e) {
                        this.setState({
                            sCurrentWindowOverlayKey: e
                        })
                    }
                    updateDesktopIndices() {
                        var e;
                        let t = 1,
                            r = [];
                        for (; null !== (null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VROverlay.FindOverlay("system.desktop." + t));) r.push(t), t++;
                        (null !== (e = S.G3.settings.get("/settings/dashboard/desktopIndex")) && void 0 !== e ? e : 1) > r.length && S.G3.SetSettingsValue("/settings/dashboard/desktopIndex", 1), this.setState({
                            bIsReady: !0,
                            desktopIndices: r
                        })
                    }
                    ShowDesktop() {
                        this.m_mailbox.SendMessage("desktopview", {
                            type: "request_show_desktop"
                        })
                    }
                    renderControlBarButtons(e) {
                        return d.createElement(d.Fragment, null, "" == this.state.sCurrentWindowOverlayKey && d.createElement(D.zN, {
                            iconUrl: "/dashboard/images/icons/icon_showdesktop.png",
                            title: "Show Desktop",
                            tooltipTranslation: e,
                            onClick: this.ShowDesktop
                        }))
                    }
                    render() {
                        var e;
                        const t = null === (e = S.G3.settings.get("/settings/dashboard/allowCurvature")) || void 0 === e || e ? m.ml : null;
                        return this.props.visible ? this.state.bIsUsingSteamDesktop ? d.createElement(o.sl, {
                            mountedId: (0, o.iN)(m.GN, "valve.steam.desktop")
                        }) : this.state.bIsReady ? 0 === this.state.desktopIndices.length ? d.createElement(D.lL, {
                            visible: !0,
                            summonOverlayKey: m.gB
                        }, d.createElement("div", {
                            className: "NoDesktopFound"
                        }, d.createElement("h2", null, (0, g.Xx)("#NoDesktopFound")))) : -1 == this.currentDesktopIndex ? d.createElement(d.Fragment, null, d.createElement(o.s_, {
                            overlay_key: this.state.sCurrentWindowOverlayKey,
                            height: this.props.fActiveOverlayScale * T.k_nDesktopPanelBaseHeight,
                            curvature_origin_id: t,
                            interactive: !0,
                            origin: o.Ic.BottomCenter,
                            debug_name: "System Desktop"
                        }, d.createElement(D.Yd, {
                            summonOverlayKey: m.gB
                        }), d.createElement(o.sl, {
                            mountedId: (0, o.iN)(m.GN, this.state.sCurrentWindowOverlayKey + ".cursor")
                        }))) : d.createElement(d.Fragment, null, d.createElement(o.s_, {
                            overlay_key: "system.desktop." + this.currentDesktopIndex,
                            height: this.props.fActiveOverlayScale * T.k_nDesktopPanelBaseHeight,
                            curvature_origin_id: t,
                            interactive: !0,
                            origin: o.Ic.BottomCenter,
                            debug_name: "System Desktop"
                        }, d.createElement(D.Yd, {
                            summonOverlayKey: m.gB
                        }), d.createElement(o.sl, {
                            mountedId: (0, o.iN)(m.GN, "system.desktop." + this.currentDesktopIndex + ".cursor")
                        }))) : d.createElement(D.lL, {
                            visible: !0,
                            summonOverlayKey: m.gB
                        }, d.createElement("div", {
                            className: "NoDesktopFound"
                        }, d.createElement("h2", null, (0, g.Xx)("#DesktopViewsUpdating")))) : null
                    }
                };
                P.k_sMailboxName = "systemui_desktopview", P.k_nDesktopPanelBaseHeight = 2, (0, i.gn)([l.Fl], P.prototype, "desktopCount", null), (0, i.gn)([l.Fl], P.prototype, "sCurrentOverlayKey", null), (0, i.gn)([l.Fl], P.prototype, "currentDesktopIndex", null), (0, i.gn)([l.Fl], P.prototype, "currentWindowHwnd", null), (0, i.gn)([a.ZP], P.prototype, "onDesktopScaleChange", null), (0, i.gn)([a.ZP], P.prototype, "onDesktopChange", null), (0, i.gn)([a.ZP], P.prototype, "onDesktopViewUpdating", null), (0, i.gn)([a.ZP], P.prototype, "onDesktopViewReady", null), (0, i.gn)([a.ZP], P.prototype, "onWindowViewChange", null), (0, i.gn)([a.ZP], P.prototype, "ShowDesktop", null), P = T = (0, i.gn)([f.Pi], P);
                var x, V = r(2743),
                    O = r(7095),
                    L = r(8980);
                let H = x = class extends d.Component {
                    constructor(e) {
                        super(e), this.m_imageSources = [], this.m_imageIndex = -1, this.updateImageSources(), this.state = {
                            image: null
                        }
                    }
                    updateImageSources() {
                        let e = [],
                            t = this.props.imageUrl.replace(/header\.jpg$/, "library_600x900.jpg");
                        t !== this.props.imageUrl && (e.push(t), e.push(this.props.imageUrl.replace(/header\.jpg$/, "portrait.png"))), e.push(this.props.imageUrl), this.props.fallbackImageUrl && e.push(this.props.fallbackImageUrl), this.m_imageSources = e.filter((e => !x.s_failedImages.includes(e))), this.m_imageIndex = -1
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
                        this.m_imageIndex >= 0 && this.m_imageIndex < this.m_imageSources.length && x.s_failedImages.push(this.m_imageSources[this.m_imageIndex]), this.m_imageIndex++, this.m_imageIndex < this.m_imageSources.length ? (this.m_loadingImage.onerror = this.loadNextImage, this.m_loadingImage.onload = this.onLoad, this.m_loadingImage.src = this.m_imageSources[this.m_imageIndex]) : this.onError()
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
                            t = d.createElement("div", {
                                className: "Icon",
                                style: e
                            });
                        return this.state.width / this.state.height != 600 / 900 && (t = d.createElement(d.Fragment, null, d.createElement("div", {
                            className: "IconBackgroundBlur",
                            style: e
                        }), t)), d.createElement("div", {
                            className: (0, L.LJ)("PortraitAppImageContainer", ["Fallback", this.state.isFallback])
                        }, this.state.image && t, d.createElement("div", {
                            className: "Title"
                        }, this.props.title), this.props.children && this.props.children)
                    }
                };
                H.defaultProps = {
                    fallbackImageUrl: "images/appimage_default_portrait.png"
                }, H.s_failedImages = [], (0, i.gn)([a.ak], H.prototype, "loadNextImage", null), (0, i.gn)([a.ak], H.prototype, "onLoad", null), (0, i.gn)([a.ak], H.prototype, "onError", null), H = x = (0, i.gn)([f.Pi], H);
                var B, N = r(9595);
                class A extends d.Component {
                        constructor(e) {
                            super(e), this.state = {}
                        }
                        onExitApp() {
                            var e, t;
                            null === VRHTML || void 0 === VRHTML || VRHTML.QuitSceneApp(), null === (t = (e = this.props).onExitGame) || void 0 === t || t.call(e)
                        }
                        onReturnToGame() {
                            null === VRHTML || void 0 === VRHTML || VRHTML.VRDashboardManager.HideDashboard("return_to_game")
                        }
                        onOpenAppControllerBindingSettings() {
                            const e = y.H.Instance.SceneAppKey;
                            O.f.OpenDeepLink(O.P.Name, e)
                        }
                        onOpenAppVideoSettings() {
                            const e = y.H.Instance.SceneAppKey;
                            V.Ux.OpenDeepLink(V.Yw.Name, e)
                        }
                        render() {
                            var e;
                            const t = y.H.Instance.SceneAppKey,
                                r = y.H.Instance.SceneAppName,
                                s = y.H.Instance.SceneApplicationState,
                                n = y.H.Instance.SceneAppIsHome,
                                i = S.G3.settings.get("/settings/dashboard/allowAppQuitting"),
                                a = !(null !== (e = S.G3.settings.get("/settings/dashboard/arcadeMode")) && void 0 !== e && e),
                                l = S.G3.apps && S.G3.apps.find((e => e.key == t));
                            let c = !1;
                            switch (s) {
                                case o.xY.Quitting:
                                case o.xY.Starting:
                                case o.xY.Waiting:
                                    c = !0
                            }
                            const u = (e => {
                                if (null == e) return "";
                                let t = e.image_path;
                                return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
                            })(l);
                            return d.createElement(D.lL, {
                                visible: this.props.visible,
                                debugName: "nowplaying",
                                additionalClassNames: "NowPlaying",
                                summonOverlayKey: m.PF
                            }, d.createElement("div", {
                                className: "ArtworkColumn"
                            }, d.createElement(H, {
                                appkey: t,
                                title: r,
                                imageUrl: u
                            })), d.createElement("div", {
                                className: "InfoColumn"
                            }, d.createElement("div", {
                                className: "NowPlayingAppTitle"
                            }, r), d.createElement(h.z, {
                                className: "ButtonControl Colorful",
                                onClick: this.onReturnToGame
                            }, n ? (0, g.Xx)("#Return_To_Home") : (0, g.Xx)("#Return_To_Game")), a && d.createElement(N.ls, {
                                icon: N.uc.PopOut,
                                onClick: this.onOpenAppControllerBindingSettings
                            }, (0, g.Xx)("#Controller_Bindings")), a && d.createElement(N.ls, {
                                icon: N.uc.PopOut,
                                onClick: this.onOpenAppVideoSettings
                            }, (0, g.Xx)("#App_Video_Settings")), !n && i && d.createElement(h.z, {
                                className: "ButtonControl",
                                onClick: this.onExitApp
                            }, (0, g.Xx)("#Exit_Game"))))
                        }
                    }(0, i.gn)([a.ak], A.prototype, "onExitApp", null), (0, i.gn)([a.ak], A.prototype, "onReturnToGame", null), (0, i.gn)([a.ak], A.prototype, "onOpenAppControllerBindingSettings", null), (0, i.gn)([a.ak], A.prototype, "onOpenAppVideoSettings", null),
                    function(e) {
                        e[e.Left = 0] = "Left", e[e.Right = 1] = "Right"
                    }(B || (B = {}));
                const F = e => d.createElement("div", {
                    className: (0, L.LJ)("ButtonContainer", B[e.side], ["Disabled", !1 === e.enabled])
                }, d.createElement(h.z, {
                    className: "ButtonControl",
                    onClick: e.onClick
                }, e.side == B.Left ? d.createElement(d.Fragment, null, "‹") : d.createElement(d.Fragment, null, "›")));
                class U extends d.Component {
                    constructor(e) {
                        super(e), this.m_refScrollPanel = d.createRef(), this.m_nLastScrollWidth = 0, this.m_nLastScrollLeft = 0, this.m_bScrolling = !1, this.m_nCurrentScrollTarget = null, this.m_animationFrameRequestHandle = 0, this.state = {
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
                        const r = this.m_refScrollPanel.current;
                        if (!r) return;
                        if (r.isThrown) return void r.cancelThrowing((() => {
                            this.m_bScrolling = !1, this.scroll(e)
                        }));
                        const s = r.children;
                        if (!s || 0 == s.length) return;
                        const n = null !== (t = this.props.paginationAlignmentOffset) && void 0 !== t ? t : 0,
                            i = s[0],
                            o = this.m_bScrolling ? this.m_nCurrentScrollTarget : r.scrollLeft,
                            a = i.getBoundingClientRect().left + r.scrollLeft,
                            l = i.clientWidth,
                            d = r.clientWidth,
                            c = Math.floor(d / l) - 1,
                            h = Math.round((o - a + n + 1) / l) + c * e - .4999,
                            u = h > 0 ? h * l + a - n : 0;
                        this.scrollToPosition(u)
                    }
                    scrollToPosition(e) {
                        const t = this.m_refScrollPanel.current;
                        t && (t.scrollTo({
                            left: e,
                            behavior: "smooth"
                        }), this.m_bScrolling = !0, this.m_nCurrentScrollTarget = e)
                    }
                    render() {
                        return d.createElement("div", {
                            className: (0, L.LJ)("PaginatedCarousel", this.props.additionalClassNames)
                        }, d.createElement(E.P, {
                            ref: this.m_refScrollPanel,
                            scrollDirection: E.I.Horizontal,
                            onScroll: this.onScroll
                        }, this.props.children), (!1 === this.state.bScrolledToStart || !1 === this.state.bScrolledToEnd) && d.createElement("div", {
                            className: "PaginationButtons"
                        }, null !== this.state.bScrolledToStart && d.createElement(F, {
                            side: B.Left,
                            enabled: !this.state.bScrolledToStart,
                            onClick: this.onLeftButtonClick
                        }), null !== this.state.bScrolledToEnd && d.createElement(F, {
                            side: B.Right,
                            enabled: !this.state.bScrolledToEnd,
                            onClick: this.onRightButtonClick
                        })))
                    }
                }(0, i.gn)([a.ZP], U.prototype, "onAnimationFrame", null), (0, i.gn)([a.ZP], U.prototype, "onScroll", null), (0, i.gn)([a.ZP], U.prototype, "onLeftButtonClick", null), (0, i.gn)([a.ZP], U.prototype, "onRightButtonClick", null);
                let W = class extends d.Component {
                    constructor(e) {
                        super(e), this.m_scrollWatcher = new L.cB, this.m_refAnchoredParentPortal = d.createRef(), this.m_refButton = d.createRef(), this.state = {
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
                        return delete e.onClick, d.createElement("div", {
                            className: (0, L.LJ)("AppButtonContainer", ["AppOwned", S.G3.probablyOwnedAppkeys.has(this.props.appkey)], ["ShowingPopovers", this.shouldShowHoverContents])
                        }, d.createElement(h.z, {
                            className: "AppButton",
                            ref: this.m_refButton,
                            onMouseEnter: this.buttonMouseEnter,
                            onMouseLeave: this.buttonMouseLeave,
                            onClick: this.props.onClick
                        }, d.createElement(H, Object.assign({}, e), this.props.children)))
                    }
                };
                (0, i.gn)([a.ZP], W.prototype, "buttonMouseEnter", null), (0, i.gn)([a.ZP], W.prototype, "buttonMouseLeave", null), (0, i.gn)([a.ZP], W.prototype, "onParentScrollStop", null), W = (0, i.gn)([f.Pi], W);
                const G = () => d.createElement("div", {
                        className: "AppButton Placeholder"
                    }),
                    z = e => {
                        var t;
                        const r = !!e.loading,
                            s = null !== (t = e.apps) && void 0 !== t ? t : [];
                        let n = "AppCarousel";
                        return e.className && (n += " " + e.className), n += " NoAnimations", d.createElement(U, {
                            additionalClassNames: n,
                            paginationAlignmentOffset: -20
                        }, r && d.createElement(d.Fragment, null, d.createElement(G, null), d.createElement(G, null), d.createElement(G, null), d.createElement(G, null)), !r && s.map((e => d.createElement(W, Object.assign({
                            key: e.appkey
                        }, e)))))
                    };
                var K = r(9669),
                    q = r.n(K);

                function X() {
                    return q().get("https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20").then((e => e.data))
                }
                const Q = () => d.createElement(h.z, {
                    className: "ButtonControl WithIcon PanelTopRight",
                    onClick: () => b.y.Instance.openBigPictureStore(null, b.b.QuickStore)
                }, d.createElement("span", null, (0, g.Xx)("#BrowseAll")), d.createElement("img", {
                    className: "Icon BlackToWhite",
                    src: "/dashboard/images/icons/svr_store.svg"
                }));
                var j;
                ! function(e) {
                    e[e.Free = 0] = "Free", e[e.Singleplayer = 1] = "Singleplayer", e[e.Multiplayer = 2] = "Multiplayer"
                }(j || (j = {}));
                let Z = class extends d.Component {
                    constructor(e) {
                        super(e), this.state = {
                            storeData: null
                        }
                    }
                    componentDidMount() {
                        X().then((e => this.setState({
                            storeData: e
                        })))
                    }
                    openSteamApp(e, t, r) {
                        v.e.instance.RecordUIEvent("QuickStoreAppClick", j[t].toLowerCase() + ":" + r, `steam.app.${e}`), b.y.Instance.openBigPictureStore(e, b.b.QuickStore)
                    }
                    makeAppButtonList() {
                        let e = [];
                        switch (this.props.section) {
                            case j.Free:
                                e = this.state.storeData.apps_free;
                                break;
                            case j.Singleplayer:
                                e = this.state.storeData.apps_singleplayer;
                                break;
                            case j.Multiplayer:
                                e = this.state.storeData.apps_multiplayer
                        }
                        return e.map(((e, t) => {
                            const r = `steam.app.${e.appid}`;
                            return {
                                key: r,
                                appkey: r,
                                title: e.name,
                                imageUrl: e.logo,
                                onClick: () => this.openSteamApp(e.appid, this.props.section, t)
                            }
                        }))
                    }
                    render() {
                        return this.state.storeData ? d.createElement(z, {
                            apps: this.makeAppButtonList()
                        }) : d.createElement(z, {
                            loading: !0
                        })
                    }
                };
                Z = (0, i.gn)([f.Pi], Z);
                class Y extends d.Component {
                    constructor(e) {
                        super(e), this.state = {}
                    }
                    render() {
                        return d.createElement(D.lL, {
                            visible: this.props.visible,
                            additionalClassNames: "QuickStore",
                            summonOverlayKey: m.wB
                        }, d.createElement(Q, null), d.createElement("h2", null, (0, g.Xx)("#StoreSection_TopSingleplayer")), d.createElement(Z, {
                            section: j.Singleplayer
                        }), d.createElement("h2", null, (0, g.Xx)("#StoreSection_TopMultiplayer")), d.createElement(Z, {
                            section: j.Multiplayer
                        }), d.createElement("h2", null, (0, g.Xx)("#StoreSection_TopFree")), d.createElement(Z, {
                            section: j.Free
                        }))
                    }
                }
                var J;
                const $ = () => d.createElement(h.z, {
                        className: "ButtonControl WithIcon PanelTopRight",
                        onClick: () => b.y.Instance.openBigPictureLibrary(null, b.b.QuickLaunch)
                    }, d.createElement("span", null, (0, g.Xx)("#BrowseAll")), d.createElement("img", {
                        className: "Icon BlackToWhite",
                        src: "/dashboard/images/icons/svr_items.svg"
                    })),
                    ee = () => d.createElement(h.z, {
                        className: "ButtonControl Colorful WelcomeBrowseStore",
                        onClick: () => null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VROverlay.ShowDashboard(m.wB)
                    }, d.createElement("span", null, (0, g.Xx)("#WelcomeBrowseStore"))),
                    te = () => d.createElement(h.z, {
                        className: "ButtonControl Colorful WelcomeInstall",
                        onClick: () => b.y.Instance.openBigPictureLibrary(null, b.b.QuickLaunch)
                    }, d.createElement("span", null, (0, g.Xx)("#WelcomeInstall")));
                class re extends d.Component {
                    constructor(e) {
                        super(e), this.state = {
                            storeData: null
                        }
                    }
                    componentDidMount() {
                        X().then((e => this.setState({
                            storeData: e
                        })))
                    }
                    render() {
                        let e = [];
                        if (this.state.storeData) {
                            let t = this.state.storeData.apps_singleplayer.flatMap(((e, t) => [this.state.storeData.apps_singleplayer[t], this.state.storeData.apps_multiplayer[t], this.state.storeData.apps_free[t]])),
                                r = new Set;
                            for (; e.length < 12 && t.length;) {
                                for (; r.has(t[0].appid);) t.shift();
                                let s = t.shift();
                                r.add(s.appid), e.push(d.createElement(h.z, {
                                    key: `appid_${s.appid}`,
                                    className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                                    onClick: () => b.y.Instance.openBigPictureStore(s.appid, b.b.QuickLaunch)
                                }, d.createElement("img", {
                                    src: s.logo
                                })))
                            }
                        }
                        return d.createElement("div", {
                            className: "QuickLaunchWelcome"
                        }, e, d.createElement("div", {
                            className: "QuickLaunchWelcomePrompt"
                        }, d.createElement("div", {
                            className: "QuickLaunchWelcomeHeader"
                        }, (0, g.Xx)("#WelcomeHeader")), d.createElement("div", {
                            className: "QuickLaunchWelcomeMessage"
                        }, (0, g.Xx)("#WelcomeMessage")), d.createElement(ee, null), d.createElement(te, null)))
                    }
                }
                let se = J = class extends d.Component {
                    constructor(e) {
                        super(e), this.m_mailbox = new o.Nv, this.state = {}, this.m_mailbox.Init("systemui_quicklaunch")
                    }
                    launchApplication(e, t, r) {
                        var s, n;
                        v.e.instance.RecordUIEvent("QuickLaunchAppClick", (t ? "top" : "bottom") + ":" + r, e.key), null === (n = (s = this.props).onGameLaunched) || void 0 === n || n.call(s, e), null === VRHTML || void 0 === VRHTML || VRHTML.VRApplications.LaunchApplication(e.key)
                    }
                    makeAppButtonList() {
                        let e = [];
                        if (null != S.G3.apps)
                            for (let t of S.G3.apps) t.is_internal || t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch || t.is_hidden || t.is_instance || J.s_setBlacklistedAppkeys.has(t.key) || e.push(t);
                        e.sort(((e, t) => {
                            let r = t.library_priority - e.library_priority;
                            return 0 == r && (r = t.last_launch - e.last_launch), r
                        }));
                        const t = e => {
                            let t = e.image_path;
                            return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
                        };
                        return e.map(((e, r) => {
                            let s = r;
                            const n = r < J.TOP_ROW_LENGTH;
                            return n || (s -= J.TOP_ROW_LENGTH), {
                                key: e.key,
                                appkey: e.key,
                                title: e.name,
                                imageUrl: t(e),
                                onClick: () => this.launchApplication(e, n, s),
                                children: d.createElement(d.Fragment, null, d.createElement("div", {
                                    className: "PlayIconFade"
                                }), d.createElement("img", {
                                    className: "PlayIcon",
                                    src: "/dashboard/images/icons/svr_play.svg"
                                }))
                            }
                        }))
                    }
                    onRoomSetup() {
                        VRHTML.VRDashboardManager.HideDashboard("RoomSetup"), this.m_mailbox.SendMessage("driver_hmd", {
                            type: "room_setup"
                        })
                    }
                    render() {
                        var e;
                        let t, r = this.makeAppButtonList();
                        const s = 0 == r.length || S.G3.settings.get("/settings/dashboard/forceWelcomeScreen"),
                            n = 0 == r.length || S.G3.settings.get("/settings/dashboard/hideBigPictureLibrary"),
                            i = 0 == r.length || null !== (e = S.G3.settings.get("/settings/dashboard/showRoomSetup")) && void 0 !== e && e;
                        if (s) t = d.createElement(re, null);
                        else {
                            let e = r.slice(0, J.TOP_ROW_LENGTH),
                                s = r.slice(J.TOP_ROW_LENGTH);
                            t = d.createElement(d.Fragment, null, !n && d.createElement($, null), i && d.createElement(h.z, {
                                className: "ButtonControl WithIcon PanelTopRight",
                                onClick: this.onRoomSetup
                            }, d.createElement("span", null, (0, g.Xx)("#RoomSetup")), d.createElement("img", {
                                className: "Icon BlackToWhite",
                                src: "/dashboard/images/icons/svr_recenter.svg"
                            })), d.createElement("h2", null, (0, g.Xx)("#RecentlyPlayed")), d.createElement(z, {
                                className: "TopRow",
                                apps: e
                            }), d.createElement(z, {
                                className: "BottomRow",
                                apps: s
                            }))
                        }
                        return d.createElement(D.lL, {
                            visible: this.props.visible,
                            scrollable: !s,
                            debugName: "homepanel",
                            additionalClassNames: "QuickLaunch",
                            summonOverlayKey: m.O5
                        }, t)
                    }
                };
                se.TOP_ROW_LENGTH = 4, se.s_setBlacklistedAppkeys = new Set(["openvr.tool.steamvr_room_setup", "openvr.tool.steamvr_media_player", "openvr.tool.steamvr_desktop_gametheatre", "openvr.tool.steamvr_tutorial", "openvr.tool.steamvr_environments", "openvr.tool.steamvr_environments_tools", m.W4, m.jW]), (0, i.gn)([a.ak], se.prototype, "onRoomSetup", null), se = J = (0, i.gn)([f.Pi], se);
                var ne = r(16);
                const ie = d.createContext(void 0);
                let oe = class extends d.Component {
                    constructor(e) {
                        super(e), this.state = {
                            xfTransform: (0, o.Oq)(),
                            sParent: ""
                        }
                    }
                    render() {
                        return d.createElement(o.sO, {
                            sParentPath: this.state.sParent,
                            xfCurrent: this.state.xfTransform,
                            id: this.props.id
                        }, d.createElement(ie.Provider, {
                            value: this
                        }, this.props.children))
                    }
                };
                oe = (0, i.gn)([f.Pi], oe);
                let ae = class extends d.Component {
                    constructor(e) {
                        super(e), this.state = {
                            xfTransform: this.props.xfTransform ? this.props.xfTransform : (0, o.Oq)(),
                            bActive: !1
                        }
                    }
                    componentDidUpdate(e, t) {
                        e.bVisible != this.props.bVisible && (this.props.bVisible || this.endMove()), e.xfTransform != this.props.xfTransform && this.setState({
                            xfTransform: this.props.xfTransform ? this.props.xfTransform : (0, o.Oq)()
                        })
                    }
                    startMove() {
                        let e, t = VRHTML.VROverlay.GetPrimaryDashboardDevice();
                        if (t != o.Kf) {
                            switch (VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(t)) {
                                case o.Kg.TrackedControllerRole_LeftHand:
                                    e = "/user/hand/left/pose/tip";
                                    break;
                                case o.Kg.TrackedControllerRole_RightHand:
                                    e = "/user/hand/right/pose/tip";
                                    break;
                                default:
                                    e = "/user/head"
                            }
                            this.context.setState({
                                sParent: e
                            }), this.setState({
                                bActive: !0
                            }), window.addEventListener("mouseup", this.endMove), this.props.onStartMove && this.props.onStartMove()
                        }
                    }
                    endMove() {
                        this.context.setState({
                            sParent: "",
                            nHandleSGID: 0
                        }), this.setState({
                            bActive: !1
                        }), window.removeEventListener("mouseup", this.endMove), this.props.onEndMove && this.props.onEndMove()
                    }
                    render() {
                        return null == this.state.xfTransform ? null : d.createElement(d.Fragment, null, " ", this.props.bVisible && d.createElement(o.wx, null, d.createElement(o.Dd, {
                            value: this.props.opacity
                        }, " ", d.createElement(o.VW, {
                            color: this.props.tint
                        }, d.createElement(o.s_, {
                            width: .25 * me.k_nControlBarWidthMeters,
                            interactive: !0,
                            debug_name: "DashboardGrabHandle",
                            origin: o.Ic.BottomCenter,
                            curvature_origin_id: this.props.curvature_origin_id,
                            hide_lasermouse_when_clicking: !0
                        }, d.createElement(h.z, {
                            className: "GrabHandleButton",
                            key: "move",
                            onMouseDown: this.startMove,
                            onMouseUp: this.endMove
                        }, d.createElement("div", {
                            className: (0, L.LJ)("GrabHandleBar", ["ForceActive", this.state.bActive])
                        })))), " "), " "), " ")
                    }
                };
                ae.contextType = ie, (0, i.gn)([a.ZP], ae.prototype, "startMove", null), (0, i.gn)([a.ZP], ae.prototype, "endMove", null), ae = (0, i.gn)([f.Pi], ae);
                var le, de, ce, he = r(3619),
                    ue = r(4138);
                r(9462),
                    function(e) {
                        e[e.Near = 0] = "Near", e[e.Middle = 1] = "Middle", e[e.Far = 2] = "Far", e[e.Screenshot_Only = 255] = "Screenshot_Only"
                    }(de || (de = {}));
                class pe extends d.Component {
                    componentDidMount() {
                        null === VRHTML || void 0 === VRHTML || VRHTML.VRChaperone.ForceBoundsVisible(!0)
                    }
                    componentWillUnmount() {
                        null === VRHTML || void 0 === VRHTML || VRHTML.VRChaperone.ForceBoundsVisible(!1)
                    }
                    render() {
                        return null
                    }
                }! function(e) {
                    e[e.None = 0] = "None", e[e.Power = 1] = "Power", e[e.ExternalOverlays = 2] = "ExternalOverlays", e[e.Volume = 3] = "Volume", e[e.Windows = 4] = "Windows"
                }(ce || (ce = {}));
                let me = le = class extends d.Component {
                    constructor(e) {
                        super(e), this.m_mapExternalOverlays = {}, this.m_setSuppressingFade = new Set, this.m_mailbox = new o.Nv, this.m_timeoutPopoverMenuHide = 0, this.m_refPopoverMenu = d.createRef(), this.m_appStateChangedAutorunDisposer = null, this.m_refDesktopView = d.createRef(), this.m_refDesktopTray = d.createRef(), this.m_refOverlayTransform = d.createRef(), this.m_refVolumeTray = d.createRef(), this.m_activeOverlayThatVanished = void 0, this.m_bUserManuallySwitchToOldLibrary = !1, this.m_bWaitingOnInitialOverlayToAutoShow = !1, this.m_bQuickLaunchShouldReturnToBigPicture = !1, this.m_bQuickStoreShouldReturnToBigPicture = !1, this.m_roomViewChangedEventHandle = null, this.m_linkStreamActiveEventHandle = null, this.m_dashboardThumbnailsChangedEventHandle = null, this.m_miscEventHandles = [], this.state = {
                            bShown: !1,
                            sActiveOverlayID: null,
                            bDarkMode: !1,
                            bMuted: !1,
                            bGrabbed: !1,
                            sLastShownAppKey: "",
                            eIncognitoMode: o.Qu.Unavailable,
                            bStreamVideo: !1,
                            eShowPopoverMenu: ce.None,
                            setForcingBoundsVisible: {},
                            mapWindows: new Map,
                            desktopViewDebugInfo: {
                                inputFrameTime: 0,
                                mapOverlayFrameTimes: new Map
                            },
                            bWindowViewEnabled: !1,
                            mapOverlayState: new Map,
                            bLaserMouseSuppressionActive: !1,
                            bPlacementModeActive: !1,
                            bLinkStreamActive: !1,
                            mapPortals: new Map
                        }, window.setDashboardScale = e => le.s_dashboardUserScale = e, window.setDashboardDistance = e => le.s_dashboardUserDistance = e, S.G3.Init(!1), o.hz.getInstance(), this.m_mailbox.Init(le.k_sDashboardMailboxName).then((() => {
                            this.m_mailbox.RegisterHandler(le.k_sSetDashboardFadeSupressionMessage, this.onSetDashboardFadeSuppression), this.m_mailbox.RegisterHandler(le.k_sDashboardOverlayCreatedMessage, this.onDashboardOverlayCreated), this.m_mailbox.RegisterHandler(le.k_sDashboardOverlayDestroyedMessage, this.onDashboardOverlayDestroyed), this.m_mailbox.RegisterHandler(le.k_sUpdateDashboardTabsMessage, this.onUpdateDashboardTabs), this.m_mailbox.RegisterHandler(le.k_sWindowViewCreatedMessage, this.onWindowViewCreated), this.m_mailbox.RegisterHandler(le.k_sWindowViewDestroyedMessage, this.onWindowViewDestroyed), this.m_mailbox.RegisterHandler(le.k_sUpdateWindowListMessage, this.onUpdateWindowList), this.m_mailbox.RegisterHandler(le.k_sUpdateDebugInfoMessage, this.onUpdateDebugInfo), this.m_mailbox.RegisterHandler(le.k_sSetDashboardForceBoundsVisible, this.onSetDashboardForceBoundsVisible), this.m_mailbox.RegisterHandler(le.k_sLaserMouseSuppressionUpdate, this.onLaserMouseSuppressionUpdate), this.m_mailbox.RegisterHandler("show_dashboard_requested", this.onShowDashboardRequested), this.m_mailbox.RegisterHandler("hide_dashboard_requested", this.onHideDashboardRequested), this.m_mailbox.RegisterHandler("hide_theater_mode", this.onHideTheaterMode)
                        }))
                    }
                    componentDidMount() {
                        window.Dashboard = this, this.m_roomViewChangedEventHandle = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VRCompositor.RegisterForRoomViewChangedEvents(this.onRoomViewChanged), this.m_linkStreamActiveEventHandle = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.RegisterForLinkStreamActiveEvents(this.onLinkStreamActiveEvents), this.m_dashboardThumbnailsChangedEventHandle = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.RegisterForOverlayThumbnailsChanged((() => this.forceUpdate()));
                        const e = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.GetVRStartupReason(),
                            t = e == o.a0.AppLaunch_Unknown || e == o.a0.AppLaunch_Steam || e == o.a0.Unknown,
                            r = S.G3.settings.get("/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome"),
                            s = S.G3.settings.get("/settings/steamvr/enableHomeApp"),
                            n = S.G3.settings.get(m.y3);
                        (t || !r && s) && !n || (this.m_bWaitingOnInitialOverlayToAutoShow = !0, setTimeout((() => null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VROverlay.ShowDashboard(null != n ? n : "")), 500)), this.m_appStateChangedAutorunDisposer = (0, l.EH)((() => {
                            const e = y.H.Instance.SceneApplicationState != o.xY.None;
                            this.isOverlayActive(m.PF) && !e && this.switchToHomeOverlay()
                        })), VRHTML.VRDashboardManager.GetDashboardOverlayKeys().forEach((e => {
                            this.initializeOverlayState(e)
                        })), this.updateSiblingReferences()
                    }
                    componentDidUpdate(e, t) {
                        var r;
                        const s = this.getActiveOverlaySummonKey();
                        let n = !1;
                        if (t.bShown !== this.state.bShown && (p.G.Instance.playSound(this.state.bShown ? p.y.DashboardOpen : p.y.DashboardClose), n = !0), this.state.bShown && !n && t.sActiveOverlayID != this.state.sActiveOverlayID) switch (s) {
                            case m.A4:
                                p.G.Instance.playSound(p.y.ThemeSettings);
                                break;
                            case m.gB:
                                p.G.Instance.playSound(p.y.ThemeDesktop);
                                break;
                            case m.O5:
                                p.G.Instance.playSound(p.y.ThemeLibrary);
                                break;
                            case m.wB:
                                p.G.Instance.playSound(p.y.ThemeStore);
                                break;
                            case m.PF:
                                p.G.Instance.playSound(p.y.ThemeNowPlaying)
                        }
                        const i = this.getActiveOverlayKey(),
                            o = i ? this.state.mapOverlayState.get(i) : null,
                            a = i ? t.mapOverlayState.get(i) : null,
                            l = o && a && o.fScale != a.fScale;
                        if ((t.sActiveOverlayID != this.state.sActiveOverlayID || l) && o && this.isDesktopOverlayActive() && (null === (r = this.m_refDesktopView.current) || void 0 === r || r.onDesktopScaleChange(o.fScale)), t.sActiveOverlayID != this.state.sActiveOverlayID && this.isOverlayActive(m.Y8)) switch (b.y.Instance.lastBigPictureEntryPoint) {
                            case b.b.QuickLaunch:
                                this.m_bQuickLaunchShouldReturnToBigPicture = !0;
                                break;
                            case b.b.QuickStore:
                                this.m_bQuickStoreShouldReturnToBigPicture = !0
                        }
                        t.bLinkStreamActive, this.state.bLinkStreamActive, this.updateSiblingReferences()
                    }
                    initializeOverlayState(e) {
                        S.G3.GetAppInfo(e).then((t => {
                            var r;
                            let s = 1;
                            if (e.startsWith("system.desktop.")) {
                                let t = "/settings/dashboard/desktopScale" + e.split(".")[2];
                                s = null !== (r = S.G3.settings.get(t)) && void 0 !== r ? r : 1
                            }
                            let i = {
                                dockLocation: n.Dashboard,
                                refOverlayWidget: d.createRef(),
                                xfInitial: null,
                                fScale: s
                            };
                            ((null == t ? void 0 : t.starts_theater_mode) || "steamlink_openvr-overlay" == e) && (this.state.mapOverlayState.forEach(((e, t) => {
                                e.dockLocation == n.Theater && (e.dockLocation = n.Dashboard)
                            })), i.dockLocation = n.Theater, "steamlink_openvr-overlay" == e && (null === VRHTML || void 0 === VRHTML || VRHTML.VRDashboardManager.HideDashboard("theater_mode"))), this.state.mapOverlayState.set(e, i)
                        }))
                    }
                    updateSiblingReferences() {
                        var e;
                        null === (e = this.m_refDesktopTray.current) || void 0 === e || e.setSiblingReferences(this.m_refDesktopView.current)
                    }
                    componentWillUnmount() {
                        var e, t;
                        clearTimeout(this.m_timeoutHoverStateEnd), clearTimeout(this.m_timeoutPopoverMenuHide), this.m_appStateChangedAutorunDisposer && (this.m_appStateChangedAutorunDisposer(), this.m_appStateChangedAutorunDisposer = null), (0, o.OK)({
                            color_mult: 1,
                            reflection_mult: 1,
                            roomview_mult: [1, 1, 1],
                            allow_skydome: !0
                        }), this.m_roomViewChangedEventHandle && (this.m_roomViewChangedEventHandle.unregister(), this.m_roomViewChangedEventHandle = null), null === (e = this.m_linkStreamActiveEventHandle) || void 0 === e || e.unregister(), this.m_linkStreamActiveEventHandle = null, null === (t = this.m_dashboardThumbnailsChangedEventHandle) || void 0 === t || t.unregister(), this.m_dashboardThumbnailsChangedEventHandle = null
                    }
                    static getDashboardDistance() {
                        if (le.s_dashboardUserDistance) return le.s_dashboardUserDistance;
                        const e = S.G3.settings.get(m.o1);
                        return e == de.Near ? .925 : e == de.Screenshot_Only ? 5 : e == de.Middle ? 1.05 : 1.2
                    }
                    static getDashboardVerticalPosition() {
                        var e;
                        const t = .01 * (null !== (e = S.G3.settings.get("/settings/dashboard/verticalOffsetCm_2")) && void 0 !== e ? e : 0),
                            r = S.G3.settings.get(m.o1);
                        return r == de.Screenshot_Only ? -.57 : r == de.Near ? -.07 + t : r == de.Middle ? -.08 + t : -.09 + t
                    }
                    static getDashboardScale() {
                        var e;
                        if (le.s_dashboardUserScale) return le.s_dashboardUserScale;
                        let t = 1;
                        const r = S.G3.settings.get(m.o1),
                            s = r == de.Screenshot_Only;
                        return t = s ? 2 : r == de.Near ? .36 : r == de.Middle ? .41 : .47, s || (t *= null !== (e = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VRProperties.GetFloatProperty(o.wU, o.Uk.DashboardScale_Float)) && void 0 !== e ? e : 1), t
                    }
                    onSetDashboardFadeSuppression(e) {
                        e.suppress_dashboard_fade ? this.m_setSuppressingFade.add(e.for_id) : this.m_setSuppressingFade.delete(e.for_id), this.forceUpdate()
                    }
                    onRoomViewChanged() {
                        this.forceUpdate()
                    }
                    onLinkStreamActiveEvents(e) {
                        this.setState({
                            bLinkStreamActive: e
                        })
                    }
                    onGrabStart() {
                        this.setState({
                            bGrabbed: !0
                        })
                    }
                    onGrabEnd() {
                        this.setState({
                            bGrabbed: !1
                        })
                    }
                    onSetDashboardForceBoundsVisible(e) {
                        this.setState(((t, r) => {
                            let s = Object.assign({}, t.setForcingBoundsVisible);
                            return s[e.for_overlay_key] = new Set(s[e.for_overlay_key]), e.force_bounds_visible ? s[e.for_overlay_key].add(e.for_id) : s[e.for_overlay_key].delete(e.for_id), {
                                setForcingBoundsVisible: s
                            }
                        }))
                    }
                    onLaserMouseSuppressionUpdate(e) {
                        this.setState({
                            bLaserMouseSuppressionActive: e.suppression_active
                        })
                    }
                    onDashboardOverlayCreated(e) {
                        this.initializeOverlayState(e.overlay_key)
                    }
                    onDashboardOverlayDestroyed(e) {
                        var t;
                        e.overlay_key.startsWith("system.window.") ? null === (t = this.m_refDesktopView.current) || void 0 === t || t.onWindowViewDestroyed(e.overlay_key) : e.overlay_key == this.getActiveOverlayKey() && this.switchToHomeOverlay(), this.state.mapOverlayState.has(e.overlay_key) && this.state.mapOverlayState.delete(e.overlay_key)
                    }
                    onUpdateDashboardTabs(e) {
                        const t = this.getActiveOverlaySummonKey();
                        this.m_mapExternalOverlays = {}, e.tabs.forEach((e => {
                            e.mountable_id && (this.m_mapExternalOverlays[e.mountable_id] = e)
                        })), this.autoSwitchOverlayIfNeeded(), this.m_activeOverlayThatVanished && this.hasDashboardOverlay(this.m_activeOverlayThatVanished.sSummonKey) && (this.m_activeOverlayThatVanished = null);
                        const r = S.G3.settings.get(m.y3);
                        this.m_bWaitingOnInitialOverlayToAutoShow && this.hasDashboardOverlay(r) && (this.m_bWaitingOnInitialOverlayToAutoShow = !1), t && !this.hasDashboardOverlay(t) && (this.switchToHomeOverlay(), this.m_activeOverlayThatVanished = {
                            sSummonKey: t,
                            timeVanished: new Date
                        }), this.forceUpdate()
                    }
                    onWindowViewCreated(e) {
                        var t, r;
                        this.switchToOverlayInternal(m.gB), null === (t = this.m_refDesktopView.current) || void 0 === t || t.onWindowViewCreated(e.overlay_key, e.hwnd), null === (r = this.m_refDesktopTray.current) || void 0 === r || r.onWindowViewCreated(e.overlay_key, e.hwnd)
                    }
                    onWindowViewDestroyed(e) {}
                    onUpdateWindowList(e) {
                        var t;
                        let r = new Map;
                        e.windows.forEach((e => {
                            r.set(e.hwnd, e)
                        })), this.setState({
                            mapWindows: r,
                            bWindowViewEnabled: null === (t = S.G3.settings.get(m.fj)) || void 0 === t || t
                        })
                    }
                    onUpdateDebugInfo(e) {}
                    onDockOverlay(e, t, r) {
                        var s, i;
                        if (t != n.LeftHand && t != n.RightHand && t != n.Theater || this.state.mapOverlayState.forEach(((e, r) => {
                                e.dockLocation == t && (e.dockLocation = n.Dashboard)
                            })), this.state.mapOverlayState.get(e).dockLocation = t, this.state.mapOverlayState.get(e).xfInitial = r, t === n.Dashboard)
                            if (e.startsWith(m.r4)) {
                                const t = Number.parseInt(e.substring(m.r4.length + 1));
                                null === (s = this.m_refDesktopView.current) || void 0 === s || s.onDesktopChange(t)
                            } else e.startsWith(m.Vq) && (null === (i = this.m_refDesktopView.current) || void 0 === i || i.onWindowViewChange(e));
                        this.forceUpdate()
                    }
                    renderActiveOverlay() {
                        if (null === this.state.sActiveOverlayID) return null;
                        const e = this.getActiveOverlayKey(),
                            t = this.hasVRGamepadUIOverlay(),
                            r = this.getActiveOverlay();
                        if (!r) return null;
                        const s = this.state.mapOverlayState.get(e),
                            n = s ? s.fScale : 1;
                        return d.createElement(d.Fragment, null, d.createElement(o.sl, {
                            mountedId: r.mountable_id,
                            fDashboardScale: n
                        }), t && this.renderVRGamepadUIPanels())
                    }
                    computeFilteredOverlayTabs() {
                        if (this.isScreenshotMode) return [];
                        let e = [];
                        for (let s in this.m_mapExternalOverlays) {
                            const n = this.m_mapExternalOverlays[s];
                            void 0 === n.icon_overlay_key && null == n.icon_uri || n.summon_overlay_key && n.summon_overlay_key != m.A4 && n.summon_overlay_key != m.Y8 && n.summon_overlay_key != m.Xl && (n.summon_overlay_key.startsWith(m.r4) || n.summon_overlay_key.startsWith(m.Vq) || n.summon_overlay_key.startsWith(m.MZ) || (void 0, null !== (r = null == (t = n.summon_overlay_key) ? void 0 : t.startsWith(m.MI)) && void 0 !== r && r || e.push(n)))
                        }
                        var t, r;
                        return e = e.sort(((e, t) => e.tab_name.localeCompare(t.tab_name))), e
                    }
                    findDashboardTab(e) {
                        for (let t in this.m_mapExternalOverlays) {
                            let r = this.m_mapExternalOverlays[t];
                            if (r.summon_overlay_key == e) return r
                        }
                        return null
                    }
                    hasTenfootOverlay() {
                        return this.hasDashboardOverlay(m.Y8)
                    }
                    hasVRGamepadUIOverlay() {
                        return this.hasDashboardOverlay(m.T2)
                    }
                    switchToHomeOverlay() {
                        let e;
                        e = this.hasVRGamepadUIOverlay() ? m.T2 : m.O5, this.switchToOverlayInternal(e, "switchToDashboardLibrary")
                    }
                    switchToSteamOverlay() {
                        let e = "";
                        if (this.hasVRGamepadUIOverlay()) e = m.T2;
                        else {
                            if (!this.hasTenfootOverlay()) return;
                            e = m.Y8
                        }
                        this.switchToOverlayInternal(e, "switchToSteamOverlay")
                    }
                    switchToOverlayInternal(e, t) {
                        var r, s;
                        switch (e) {
                            case m.Y8:
                                b.y.Instance.latchBigPictureEntryPoint();
                                break;
                            case m.O5:
                                this.m_bQuickLaunchShouldReturnToBigPicture = !1;
                                break;
                            case m.wB:
                                this.m_bQuickStoreShouldReturnToBigPicture = !1;
                                break;
                            case m.Us:
                                let t = {
                                        type: "show_app_binding",
                                        app_key: null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VRApplications.GetSceneApplicationKey()
                                    },
                                    r = "bindingui/" + o.qA[(0, o.Op)()];
                                this.m_mailbox.SendMessage(r, t), this.m_bQuickStoreShouldReturnToBigPicture = !1, e = m.RM
                        }
                        if (e.startsWith(m.r4)) {
                            const t = Number.parseInt(e.substring(m.r4.length + 1));
                            Number.isSafeInteger(t) && (null === (r = this.m_refDesktopView.current) || void 0 === r || r.onDesktopChange(t)), e = m.gB
                        }
                        let n = this.findDashboardTab(e);
                        return !!n && (this.computeFilteredOverlayTabs().includes(n) && S.G3.SetSettingsValue(m.nf, null !== (s = n.summon_overlay_key) && void 0 !== s ? s : ""), this.m_activeOverlayThatVanished = null, this.setState({
                            sActiveOverlayID: n.mountable_id
                        }), v.e.instance.RecordUIEvent("SetDashboardOverlay", null != t ? t : "Button", e), !0)
                    }
                    autoSwitchOverlayIfNeeded() {
                        const e = [],
                            t = this.getActiveOverlaySummonKey();
                        this.m_bWaitingOnInitialOverlayToAutoShow && e.push(S.G3.settings.get(m.y3)), this.m_activeOverlayThatVanished && ((new Date).getTime() - this.m_activeOverlayThatVanished.timeVanished.getTime()) / 1e3 < le.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds && e.push(this.m_activeOverlayThatVanished.sSummonKey), (null == t || t == m.O5 && !this.m_bUserManuallySwitchToOldLibrary || t == m.wB) && e.push(m.T2), null == t && e.push(m.O5);
                        const r = e.find(this.hasDashboardOverlay);
                        r && this.switchToOverlayInternal(r)
                    }
                    getActiveOverlay() {
                        var e;
                        return this.state.sActiveOverlayID && null !== (e = this.m_mapExternalOverlays[this.state.sActiveOverlayID]) && void 0 !== e ? e : null
                    }
                    getActiveOverlaySummonKey() {
                        var e, t;
                        return null !== (t = null === (e = this.getActiveOverlay()) || void 0 === e ? void 0 : e.summon_overlay_key) && void 0 !== t ? t : null
                    }
                    getActiveOverlayKey() {
                        var e;
                        let t = this.getActiveOverlaySummonKey();
                        return t == m.gB ? null === (e = this.m_refDesktopView.current) || void 0 === e ? void 0 : e.sCurrentOverlayKey : t
                    }
                    hideMessageOverlay() {
                        this.getActiveOverlaySummonKey() == m.f8 && this.switchToHomeOverlay()
                    }
                    onShowDashboardRequested(e) {
                        var t;
                        S.G3.settings.get("/settings/dashboard/enableDashboard") && (e.overlay_key && this.state.mapOverlayState.has(e.overlay_key) && this.state.mapOverlayState.get(e.overlay_key).dockLocation == n.Theater || (this.show(null !== (t = e.reason) && void 0 !== t ? t : "unknown"), e.overlay_key ? this.switchToOverlayInternal(e.overlay_key) : this.autoSwitchOverlayIfNeeded(), this.setDashboardVisibility(!0, e.tracked_device_index, e.reason)))
                    }
                    onHideTheaterMode() {
                        let e = this.getActiveOverlayKey();
                        this.onDockOverlay(e, n.Theater), null === VRHTML || void 0 === VRHTML || VRHTML.VRDashboardManager.HideDashboard("theater_mode");
                        let t = this.getActiveOverlayKey();
                        this.onDockOverlay(t, n.Dashboard)
                    }
                    onHideDashboardRequested(e) {
                        VRHTML.VRDashboardManager.HasMessageOverlay() ? this.switchToOverlayInternal(m.f8) : (this.hideMessageOverlay(), VRHTML.VRDashboardManager.CloseKeyboard(), this.hide(e.reason), this.setDashboardVisibility(!1, void 0, e.reason))
                    }
                    setDashboardVisibility(e, t, r) {
                        let s = {
                            type: "set_dashboard_visibility",
                            tracked_device_index: t,
                            visible: e,
                            reason: r
                        };
                        this.m_mailbox.SendMessage("vrcompositor_systemlayer", s)
                    }
                    show(e) {
                        if (this.isShown()) return;
                        v.e.instance.StartDashboardSession(e), this.m_mailbox.SendMessage("desktopview", {
                            type: "request_window_list_update"
                        });
                        const t = y.H.Instance.SceneAppKey,
                            r = y.H.Instance.SceneAppIsHome;
                        t && t != this.state.sLastShownAppKey && (this.setState({
                            sLastShownAppKey: t
                        }), r ? this.switchToHomeOverlay() : this.switchToOverlayInternal(m.PF)), this.m_activeOverlayThatVanished = null, this.setState({
                            bShown: !0
                        });
                        let s = {
                            type: le.k_sRequestDashboardTabsMessage
                        };
                        this.m_mailbox.SendMessage("vrcompositor_systemlayer", s), (0, o.qI)()
                    }
                    hide(e) {
                        this.isShown() && (this.m_activeOverlayThatVanished = null, this.setState({
                            bShown: !1,
                            eShowPopoverMenu: ce.None
                        }), v.e.instance.EndDashboardSession(e))
                    }
                    isShown() {
                        return this.state.bShown
                    }
                    setPlacementModeActive(e) {
                        this.setState({
                            bPlacementModeActive: e
                        })
                    }
                    onToggleRoomView() {
                        const e = VRHTML.VRControlPanel.GetCameraRoomViewVisible();
                        null === VRHTML || void 0 === VRHTML || VRHTML.VRControlPanel.SetCameraRoomViewVisible(!e)
                    }
                    onQuickLaunchButtonClick() {
                        this.m_bQuickLaunchShouldReturnToBigPicture && b.y.Instance.lastBigPictureEntryPoint == b.b.QuickLaunch && !this.isOverlayActive(m.Y8) ? b.y.Instance.openBigPictureThroughLastEntryPoint() : this.switchToOverlayInternal(m.O5)
                    }
                    onQuickStoreButtonClick() {
                        this.m_bQuickStoreShouldReturnToBigPicture && b.y.Instance.lastBigPictureEntryPoint == b.b.QuickStore && !this.isOverlayActive(m.Y8) ? b.y.Instance.openBigPictureThroughLastEntryPoint() : this.switchToOverlayInternal(m.wB)
                    }
                    onRecenterClick() {
                        this.state.bLinkStreamActive && VRHTML.BIsLinkServer() ? (this.m_mailbox.SendMessage("svl", {
                            type: "handle_recenter"
                        }), VRHTML.VRDashboardManager.HideDashboard("onRecenterClick stream active")) : this.m_mailbox.SendMessage(ne.BB, {
                            type: ne.KU,
                            countdown_seconds: 3
                        })
                    }
                    onImmersiveRoomSetupClick() {
                        this.m_mailbox.SendMessage("driver_hmd", {
                            type: "room_setup"
                        })
                    }
                    onToggleGamepadFocus() {}
                    getDashboardIconUri(e) {
                        try {
                            if ("turn_signal_menu.thumb" == e.icon_overlay_key) return "/dashboard/images/icons/turnsignal.svg";
                            if (e.icon_uri) return e.icon_uri;
                            if (e.icon_overlay_key) return null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VRDashboardManager.GetOverlayImage(e.icon_overlay_key)
                        } catch (e) {}
                        return null
                    }
                    renderPowerMenu() {
                        const e = !!(null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.SceneAppRunning()),
                            t = S.G3.settings.get("/settings/dashboard/allowAppQuitting"),
                            r = S.G3.settings.get("/settings/dashboard/allowSystemShutdown");
                        let s = !1;
                        VRHTML && VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 && (s = VRHTML.VRProperties.GetBoolProperty(VRHTML.VROverlay.GetPrimaryDashboardDevice(), o.Uk.DeviceCanPowerOff_Bool));
                        const n = y.H.Instance.SceneAppName,
                            i = y.H.Instance.SceneAppIsHome;
                        let a, l;
                        return a = i ? (0, g.Xx)("#Exit_SteamVR_Home") : n ? (0, g.Xx)("#PowerMenuQuitSceneApp", n) : (0, g.Xx)("#PowerMenuQuitSceneApp_NoApp"), l = i ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg" : "/dashboard/images/icons/svr_app_quit.svg", this.renderPopoverMenu(d.createElement(d.Fragment, null, !!this.hasVRGamepadUIOverlay() && d.createElement(D.dy, {
                            label: "Old Library",
                            lineBelow: !0,
                            onClick: () => {
                                this.m_bUserManuallySwitchToOldLibrary = !0, this.switchToOverlayInternal(m.O5), this.showPopoverMenu(ce.None)
                            }
                        }), this.hasTenfootOverlay() && d.createElement(D.dy, {
                            label: (0, g.Xx)("#PowerMenuSteamOverlay"),
                            lineBelow: !0,
                            onClick: () => {
                                this.switchToOverlayInternal(m.Y8), this.showPopoverMenu(ce.None)
                            }
                        }), s && d.createElement(D.dy, {
                            label: (0, g.Xx)("#PowerMenuTurnOffController"),
                            imageUrl: "/dashboard/images/icons/svr_controller_power.svg",
                            onClick: () => {
                                null === VRHTML || void 0 === VRHTML || VRHTML.TurnOffVRController(), this.showPopoverMenu(ce.None)
                            }
                        }), t && e && d.createElement(D.dy, {
                            label: a,
                            imageUrl: l,
                            onClick: () => {
                                null === VRHTML || void 0 === VRHTML || VRHTML.QuitSceneApp(), this.showPopoverMenu(ce.None)
                            }
                        }), d.createElement(D.dy, {
                            label: (0, g.Xx)("#PowerMenuExitVR"),
                            imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                            onClick: () => null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.QuitOpenVR()
                        }), r && d.createElement(D.dy, {
                            label: (0, g.Xx)("#PowerMenuShutdown"),
                            imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                            onClick: () => null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.ShutdownSystem()
                        })))
                    }
                    startPopoverMenuTimeout(e) {
                        this.m_timeoutPopoverMenuHide = window.setTimeout((() => {
                            this.setState({
                                eShowPopoverMenu: ce.None
                            })
                        }), e)
                    }
                    clearPopoverMenuTimeout() {
                        this.m_timeoutPopoverMenuHide && (clearTimeout(this.m_timeoutPopoverMenuHide), this.m_timeoutPopoverMenuHide = 0)
                    }
                    showPopoverMenu(e) {
                        this.setState({
                            eShowPopoverMenu: e
                        }), this.clearPopoverMenuTimeout()
                    }
                    renderPopoverMenu(e) {
                        return d.createElement("div", {
                            className: "PowerMenuContainer",
                            onMouseLeave: this.popoverMenuMouseLeave,
                            onMouseEnter: this.clearPopoverMenuTimeout,
                            ref: this.m_refPopoverMenu
                        }, d.createElement(h.q, {
                            className: "PowerMenuPanel"
                        }, e))
                    }
                    popoverMenuMouseLeave(e) {
                        0 == e.buttons ? this.startPopoverMenuTimeout(100) : window.document.addEventListener("mouseup", this.popoverMenuMouseUp)
                    }
                    popoverMenuMouseUp(e) {
                        window.document.removeEventListener("mouseup", this.popoverMenuMouseUp), this.m_refPopoverMenu.current && ! function(e, t, r) {
                            let s = r.getBoundingClientRect();
                            return e >= s.left && e <= s.right && t >= s.top && t <= s.bottom
                        }(e.clientX, e.clientY, this.m_refPopoverMenu.current) && this.startPopoverMenuTimeout(100)
                    }
                    renderStatusBarTitle() {
                        var e, t, r, s;
                        let n = this.getActiveOverlay();
                        if (!n) return null;
                        if (n.summon_overlay_key == m.Y8 && (b.y.Instance.lastBigPictureEntryPoint == b.b.QuickLaunch ? n = this.findDashboardTab(m.O5) : b.y.Instance.lastBigPictureEntryPoint == b.b.QuickStore && (n = this.findDashboardTab(m.wB))), n.summon_overlay_key == m.gB) {
                            if (-1 == (null === (e = this.m_refDesktopView.current) || void 0 === e ? void 0 : e.currentDesktopIndex)) {
                                let e = null === (t = this.m_refDesktopView.current) || void 0 === t ? void 0 : t.currentWindowHwnd;
                                return d.createElement(D.Rk, {
                                    name: null === (r = this.state.mapWindows.get(e)) || void 0 === r ? void 0 : r.title,
                                    iconUrl: this.getDashboardIconUri(n)
                                })
                            }
                            return d.createElement(D.Rk, {
                                name: "Desktop " + (null === (s = this.m_refDesktopView.current) || void 0 === s ? void 0 : s.currentDesktopIndex),
                                iconUrl: this.getDashboardIconUri(n)
                            })
                        }
                        if (n.summon_overlay_key == m.RM) return d.createElement(D.Rk, {
                            name: (0, g.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                            iconUrl: "/dashboard/images/icons/svr_settings.svg"
                        });
                        let i = n.tab_name;
                        return d.createElement(D.Rk, {
                            name: i,
                            iconUrl: this.getDashboardIconUri(n)
                        })
                    }
                    get isDarkMode() {
                        return this.state.bDarkMode
                    }
                    get isScreenshotMode() {
                        return S.G3.settings.get(m.o1) == de.Screenshot_Only
                    }
                    get isGroupMode() {
                        return !1
                    }
                    getCollisionBoundsFadeVisualizationElements() {
                        var e;
                        const t = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VRChaperoneSetup.GetLiveCollisionBoundsInfo();
                        if (!t) return [];
                        let r = [];
                        const s = null !== (e = S.G3.settings.get(m.yQ)) && void 0 !== e ? e : .7;
                        for (let e of t) {
                            let t = (0, o.M9)((0, o.eQ)(e[3], e[0])),
                                n = (0, o.M9)((0, o.eQ)(e[1], e[0])),
                                i = (0, o.dq)(t, n),
                                a = (0, o.Pd)((0, o.tS)(t, n, i)),
                                l = (0, o.LY)((0, o.eQ)(e[0], e[3]));
                            if (l < .4) continue;
                            let c = Math.max(1, Math.floor(l));
                            for (let t = 0; t < c; t++) {
                                let n = (t + 1) / (c + 1),
                                    i = (0, o.Oq)();
                                i.rotation = a, i.translation = (0, o.q9)(n, e[0], e[3]), i.scale = {
                                    x: .005,
                                    y: .005,
                                    z: s
                                };
                                let l = d.createElement(o.wx, {
                                    transform: i
                                }, d.createElement(o.Dd, {
                                    value: .25
                                }, d.createElement(o.VW, {
                                    color: {
                                        r: .2,
                                        g: .2,
                                        b: .2
                                    }
                                }, d.createElement(o.gQ, {
                                    source: "laser_pointer",
                                    wireframe: !1,
                                    culling: o.xj.Backface
                                }))));
                                r.push(l)
                            }
                            if (r.length > 20) break
                        }
                        return r
                    }
                    render() {
                        var e, t;
                        const r = y.H.Instance.SceneApplicationState !== o.xY.None;
                        if (this.isDarkMode && !r) {
                            const r = null !== (e = S.G3.settings.get("/settings/dashboard/theaterModeBrightness")) && void 0 !== e ? e : 1,
                                s = null !== (t = S.G3.settings.get("/settings/dashboard/theaterModeReflection")) && void 0 !== t ? t : 1;
                            (0, o.OK)({
                                color_mult: Math.pow(r, 2.2),
                                reflection_mult: Math.pow(s, 2.2),
                                roomview_mult: [.12, .16, .6],
                                allow_skydome: !1
                            })
                        } else if (this.state.bShown) {
                            const e = this.m_setSuppressingFade.size > 0 && this.getActiveOverlaySummonKey() == m.A4,
                                t = S.G3.settings.get("/settings/dashboard/omitDashboardFadeWithSteamVRHome"),
                                s = !y.H.Instance.SceneAppIsHome || !t;
                            this.isScreenshotMode ? (0, o.OK)({
                                color_mult: 0,
                                reflection_mult: 0,
                                roomview_mult: [1, 1, 1],
                                allow_skydome: !0
                            }) : s && !e && r ? (0, o.OK)({
                                color_mult: .15,
                                reflection_mult: 1,
                                roomview_mult: [1, 1, 1],
                                allow_skydome: !0
                            }) : (0, o.OK)({
                                color_mult: 1,
                                reflection_mult: 1,
                                roomview_mult: [1, 1, 1],
                                allow_skydome: !0
                            })
                        } else(0, o.OK)({
                            color_mult: 1,
                            reflection_mult: 1,
                            roomview_mult: [1, 1, 1],
                            allow_skydome: !0
                        });
                        const s = this.getActiveOverlaySummonKey(),
                            n = this.state.bShown && this.state.setForcingBoundsVisible[s],
                            i = n && n.size > 0;
                        let a = [];
                        return i && (a = this.getCollisionBoundsFadeVisualizationElements()), d.createElement("div", {
                            className: "DashboardMain"
                        }, i && d.createElement(pe, null), i && d.createElement("span", null, a), this.state.bShown && this.renderDashboard(), this.renderInternalOverlays(), this.renderOverlayWidgets(), !1)
                    }
                    hasDashboardOverlay(e) {
                        return Object.values(this.m_mapExternalOverlays).some((t => t.summon_overlay_key == e))
                    }
                    isOverlayActive(e) {
                        return !!this.state.sActiveOverlayID && this.getActiveOverlaySummonKey() == e
                    }
                    GetActiveOverlayAnchorIDs() {
                        const e = this.getActiveOverlayKey(),
                            t = (this.state.mapOverlayState.has(e) && (this.state.mapOverlayState.get(e).dockLocation == n.LeftHand || (this.state.mapOverlayState.get(e).dockLocation, n.RightHand)), this.getActiveOverlaySummonKey());
                        return D.Eu.has(t) ? D.Eu.get(t) : {
                            strTopCenterAnchorID: this.state.sActiveOverlayID + "_TopCenter",
                            strCenterLeftAnchorID: this.state.sActiveOverlayID + "_CenterLeft",
                            strCenterRightAnchorID: this.state.sActiveOverlayID + "_CenterRight",
                            strBottomCenterAnchorID: this.state.sActiveOverlayID + "_BottomCenter"
                        }
                    }
                    renderExternalOverlayControlBarButton(e) {
                        const t = this.getDashboardIconUri(e),
                            r = D.IO.Center;
                        return d.createElement(D.B8, {
                            key: e.mountable_id,
                            label: e.tab_name,
                            imageUrl: t,
                            imageStyle: r,
                            active: this.isOverlayActive(e.summon_overlay_key),
                            onClick: () => this.switchToOverlayInternal(e.summon_overlay_key)
                        })
                    }
                    isDesktopTrayActive() {
                        var e;
                        return (this.isOverlayActive(m.gB) || (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e ? void 0 : e.startsWith("system.window"))) && (this.state.eShowPopoverMenu == ce.None || this.state.eShowPopoverMenu == ce.Windows)
                    }
                    isSteamOverlayActive() {
                        return (this.isOverlayActive(m.Y8) || this.isOverlayActive(m.T2)) && this.state.eShowPopoverMenu == ce.None
                    }
                    isDesktopOverlayActive() {
                        var e;
                        return this.isOverlayActive(m.gB) || (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e ? void 0 : e.startsWith("system.window"))
                    }
                    showIncognitoMode() {
                        var e;
                        return this.state.eIncognitoMode != o.Qu.Unavailable && null !== (e = S.G3.settings.get("/settings/dashboard/allowIncognitoMode")) && void 0 !== e && e
                    }
                    getPeerButtonInfo() {
                        const e = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VRProperties.GetStringProperty(0, o.Uk.PeerButtonInfo_String);
                        if (e) return JSON.parse(e)
                    }
                    handlePeerButton() {
                        const e = this.getPeerButtonInfo();
                        if (!e) return;
                        let t = {
                            type: e.sMessageType
                        };
                        t.whichDevice = VRHTML.VROverlay.GetPrimaryDashboardDevice(), this.m_mailbox.SendMessage(e.sMailbox, t)
                    }
                    ToggleIncognitoMode() {
                        this.m_mailbox.SendMessage("web_steam_mailbox", {
                            type: "toggle_voicechat"
                        })
                    }
                    ToggleVideoStream() {
                        this.m_mailbox.SendMessage("web_steam_mailbox", {
                            type: "toggle_videostream"
                        })
                    }
                    renderVRGamepadUIPanels() {
                        var e;
                        const t = null === (e = S.G3.settings.get("/settings/dashboard/allowCurvature")) || void 0 === e || e ? m.ml : null,
                            r = S.G3.settings.get("/settings/dashboard/theaterPosition");
                        let s = le.k_nControlBarWidthMeters / 2;
                        r == de.Near || (r == de.Middle ? s *= 1.5 : r == de.Far && (s *= 1.85));
                        const n = le.k_nControlBarWidthMeters / 1920 * 400,
                            i = this.GetActiveOverlayAnchorIDs();
                        return d.createElement(d.Fragment, null, d.createElement(o.wx, {
                            parent_id: i.strTopCenterAnchorID,
                            translation: {
                                y: .01
                            }
                        }, d.createElement(o.Dd, {
                            value: this.state.bLaserMouseSuppressionActive ? .1 : 1
                        }, d.createElement(o.s_, {
                            id: "VRGamepadUI-Header-Panel",
                            debug_name: "VRGamepadUI-Header-Panel",
                            interactive: !0,
                            curvature_origin_id: t,
                            overlay_key: m.rl,
                            origin: o.Ic.BottomCenter,
                            width: 2.667
                        }, d.createElement(o.at, {
                            id: "VRGamepadUI-Header-Panel-TopCenter",
                            location: o.Ic.TopCenter
                        })))), !this.state.bLaserMouseSuppressionActive && d.createElement(o.wx, {
                            parent_id: i.strCenterLeftAnchorID,
                            translation: {
                                x: -.08
                            },
                            rotation: {
                                y: 20
                            }
                        }, d.createElement(o.s_, {
                            id: "VRGamepadUI-MainMenu-Panel",
                            debug_name: "VRGamepadUI-MainMenu-Panel",
                            interactive: !0,
                            curvature_origin_id: t,
                            overlay_key: m.v2,
                            origin: o.Ic.CenterRight,
                            width: n
                        })), !this.state.bLaserMouseSuppressionActive && d.createElement(o.wx, {
                            parent_id: i.strCenterRightAnchorID,
                            translation: {
                                x: .08
                            },
                            rotation: {
                                y: -20
                            }
                        }, d.createElement(o.s_, {
                            id: "VRGamepadUI-QuickAccessMenu-Panel",
                            debug_name: "VRGamepadUI-QuickAccessMenu-Panel",
                            interactive: !0,
                            curvature_origin_id: t,
                            overlay_key: m.Tn,
                            origin: o.Ic.CenterLeft,
                            width: n
                        })))
                    }
                    renderControlBar(e, t) {
                        var r, s, n, i, a, l, c, u;
                        const p = this.state.bLaserMouseSuppressionActive ? .1 : 1,
                            v = this.isDarkMode ? {
                                r: .05,
                                g: .05,
                                b: .05
                            } : null,
                            f = this.isDarkMode ? {
                                r: .25,
                                g: .25,
                                b: .25
                            } : null,
                            k = this.isDarkMode ? .02 : .05,
                            M = le.k_nControlBarWidthMeters,
                            R = null === (r = S.G3.settings.get("/settings/dashboard/showPowerOptions")) || void 0 === r || r,
                            C = null === (s = S.G3.settings.get("/settings/dashboard/showDesktop")) || void 0 === s || s,
                            w = this.hasVRGamepadUIOverlay(),
                            T = !this.hasVRGamepadUIOverlay() && !0,
                            E = !this.hasVRGamepadUIOverlay() && (null === (n = S.G3.settings.get("/settings/dashboard/showQuickStore")) || void 0 === n || n),
                            P = !(null !== (i = S.G3.settings.get("/settings/dashboard/arcadeMode")) && void 0 !== i && i),
                            x = this.getPeerButtonInfo(),
                            V = VRHTML.BIsLinkServer(),
                            O = VRHTML.BIsLinkClient(),
                            L = y.H.Instance.SceneApplicationState,
                            H = y.H.Instance.SceneAppIsHome,
                            B = null === (a = S.G3.settings.get("/settings/dashboard/allowCurvature")) || void 0 === a || a ? m.ml : null,
                            N = y.H.Instance.SceneAppKey;
                        let A = "images/appimage_default.png";
                        N && (A = "/app/image?app_key=" + N);
                        const F = null !== (l = S.G3.settings.get(m.Av)) && void 0 !== l && l,
                            U = null !== (c = S.G3.settings.get(m.k_)) && void 0 !== c ? c : 0;
                        let W = F && U > 0,
                            G = null !== (u = S.G3.settings.get("/settings/dashboard/allowTheaterMode")) && void 0 !== u && u,
                            z = O || this.state.bLinkStreamActive;
                        this.state.bLinkStreamActive && (G = !1, V && (W = !1));
                        let K = {
                            y: -.25,
                            z: 0
                        };
                        return this.isOverlayActive(m.gB) && (K = {
                            y: -.4,
                            z: 0
                        }), d.createElement(o.Dd, {
                            value: p
                        }, d.createElement(o.VW, {
                            color: v
                        }, d.createElement(o.s_, {
                            curvature_origin_id: B,
                            width: M,
                            interactive: !1,
                            debug_name: "ControlBarBackground",
                            sampler: o.Vv.SingleTap,
                            reflect: k
                        }, d.createElement("div", {
                            className: "ControlBarBackground"
                        })), d.createElement(o.wx, {
                            translation: {
                                z: 1e-5
                            }
                        }, d.createElement(o.s_, {
                            curvature_origin_id: B,
                            width: M,
                            interactive: !0,
                            id: m.WR,
                            debug_name: "Controls"
                        }, d.createElement(h.q, {
                            className: "ControlBar MainControlBar"
                        }, d.createElement("div", {
                            className: "Section Left"
                        }, R && d.createElement(D.NT, {
                            imageUrl: "/dashboard/images/icons/svr_menu_c.svg",
                            label: (0, g.Xx)("#Menu"),
                            style: D.zk.Small,
                            onClick: () => this.showPopoverMenu(ce.Power),
                            onMouseEnter: this.clearPopoverMenuTimeout,
                            onMouseLeave: () => this.startPopoverMenuTimeout(500)
                        }), d.createElement(D.dw, {
                            style: D.zk.Small
                        }, w && d.createElement(D.B8, {
                            imageUrl: "/dashboard/images/icons/vr_steam.svg",
                            label: (0, g.Xx)("#Steam"),
                            active: this.isSteamOverlayActive(),
                            onClick: () => this.switchToSteamOverlay()
                        }), !1), C && d.createElement(D.NT, {
                            style: D.zk.Small,
                            imageUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                            label: (0, g.Xx)("#Desktops"),
                            active: this.isDesktopTrayActive(),
                            onClick: () => this.switchToOverlayInternal(m.gB)
                        }), d.createElement(D.dw, {
                            style: D.zk.Small
                        }, d.createElement(d.Fragment, null, e.map(this.renderExternalOverlayControlBarButton), t.length > 0 && d.createElement(D.B8, {
                            imageUrl: "/dashboard/images/icons/svr_more.svg",
                            label: (0, g.Xx)("#X_More_Overlays", t.length),
                            active: this.state.eShowPopoverMenu == ce.ExternalOverlays,
                            onClick: () => this.showPopoverMenu(ce.ExternalOverlays),
                            onMouseEnter: this.clearPopoverMenuTimeout,
                            onMouseLeave: () => this.startPopoverMenuTimeout(500)
                        })))), d.createElement("div", {
                            className: "Section Center"
                        }, T && d.createElement(D.NT, {
                            label: (0, g.Xx)("#Library"),
                            imageUrl: "/dashboard/images/icons/svr_items.svg",
                            active: this.isOverlayActive(m.O5) || this.isOverlayActive(m.Y8) && b.y.Instance.lastBigPictureEntryPoint == b.b.QuickLaunch,
                            style: D.zk.Large,
                            onClick: this.onQuickLaunchButtonClick
                        }), L != o.xY.None && d.createElement("div", {
                            className: "NowPlayingSpacer"
                        }, d.createElement(_.d, {
                            allowableParentSelectors: [".DashboardMain"]
                        }, d.createElement(o.VW, {
                            color: v
                        }, d.createElement(o.wx, {
                            translation: {
                                z: .02
                            }
                        }, d.createElement(o.s_, {
                            debug_name: "NowPlayingButton",
                            interactive: !0,
                            target_dpi_panel_id: m.WR,
                            curvature_origin_id: B
                        }, d.createElement("div", {
                            className: "ControlBar"
                        }, d.createElement(D.NT, {
                            label: H ? (0, g.Xx)("#SteamVR_Home") : (0, g.Xx)("#Now_Playing"),
                            active: this.isOverlayActive(m.PF),
                            style: D.zk.App,
                            imageUrl: A,
                            onClick: () => this.switchToOverlayInternal(m.PF)
                        }))))))), E && d.createElement(D.NT, {
                            label: (0, g.Xx)("#Store"),
                            imageUrl: "/dashboard/images/icons/svr_store.svg",
                            additionalClassNames: "Store",
                            active: this.isOverlayActive(m.wB) || this.isOverlayActive(m.Y8) && b.y.Instance.lastBigPictureEntryPoint == b.b.QuickStore,
                            style: D.zk.Large,
                            onClick: this.onQuickStoreButtonClick
                        })), d.createElement("div", {
                            className: "Section Right"
                        }, d.createElement(D.dw, {
                            style: D.zk.Small
                        }, !1, !1, G && d.createElement(D.B8, {
                            imageUrl: this.state.bDarkMode ? "/dashboard/images/icons/svr_nightmode.svg" : "/dashboard/images/icons/svr_lightmode.svg",
                            label: (0, g.Xx)("#Settings_ToggleDarkMode"),
                            onClick: () => this.setState({
                                bDarkMode: !this.state.bDarkMode
                            }),
                            active: this.state.bDarkMode
                        }), d.createElement(D.B8, {
                            imageUrl: "/dashboard/images/icons/svr_recenter.svg",
                            additionalClassNames: "CenterImageLarge",
                            label: (0, g.Xx)("#Button_Recenter"),
                            onClick: this.onRecenterClick
                        }), z && d.createElement(D.B8, {
                            imageUrl: "/dashboard/images/icons/svr_room_setup.svg",
                            additionalClassNames: "CenterImageLarge",
                            label: "Room Setup",
                            onClick: this.onImmersiveRoomSetupClick
                        }), W && d.createElement(D.B8, {
                            imageUrl: "/dashboard/images/icons/svr_eye.svg",
                            label: (0, g.Xx)("#Toggle_Room_View"),
                            onClick: this.onToggleRoomView,
                            active: null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VRControlPanel.GetCameraRoomViewVisible(),
                            enabled: null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VROverlayInternal.HasCameraRoomViewCapability()
                        }), d.createElement(D.D6, {
                            active: this.state.eShowPopoverMenu == ce.Volume,
                            refVolumeTray: this.m_refVolumeTray,
                            onShowTray: () => this.showPopoverMenu(ce.Volume),
                            onHideTray: () => this.showPopoverMenu(ce.None),
                            onMouseEnter: this.clearPopoverMenuTimeout,
                            onMouseLeave: () => this.startPopoverMenuTimeout(500)
                        })), P && d.createElement(D.NT, {
                            imageUrl: "/dashboard/images/icons/svr_settings.svg",
                            active: this.isOverlayActive(m.A4),
                            enabled: this.hasDashboardOverlay(m.A4),
                            label: (0, g.Xx)("#Settings"),
                            style: D.zk.Small,
                            centerPanelAnchorID: "VolumeButton",
                            onClick: () => this.switchToOverlayInternal(m.A4)
                        }), this.state.bLinkStreamActive && x && d.createElement(D.NT, {
                            imageUrl: x.sIcon,
                            active: !1,
                            enabled: !0,
                            label: (0, g.Xx)(x.sButtonName),
                            style: D.zk.Small,
                            centerPanelAnchorID: "VolumeButton",
                            onClick: () => this.handlePeerButton()
                        }))), d.createElement(I, {
                            ref: this.m_refDesktopTray,
                            position: 0,
                            visible: this.isDesktopTrayActive() && !this.state.bLaserMouseSuppressionActive,
                            tintColor: f,
                            onToggleWindowList: () => this.showPopoverMenu(ce.Windows),
                            onClearPopoverMenuTimeout: () => this.clearPopoverMenuTimeout(),
                            onStartPopoverMenuTimeout: e => this.startPopoverMenuTimeout(e),
                            mapWindows: this.state.mapWindows,
                            sort_depth_bias: .2,
                            bWindowViewEnabled: this.state.bWindowViewEnabled
                        }), d.createElement(D.z, {
                            ref: this.m_refVolumeTray,
                            position: .337,
                            visible: this.state.eShowPopoverMenu == ce.Volume && !this.state.bLaserMouseSuppressionActive,
                            tintColor: f,
                            onFinalChangeMouseOutside: () => {
                                this.startPopoverMenuTimeout(800)
                            },
                            onMouseMove: this.clearPopoverMenuTimeout,
                            onMouseLeave: this.popoverMenuMouseLeave,
                            sort_depth_bias: .4
                        })))), d.createElement(o.wx, {
                            translation: K,
                            scale: {
                                y: 1.5,
                                x: 1.5
                            }
                        }, d.createElement(o.sl, {
                            mountedId: (0, o.iN)(m.GN, m.gC)
                        }), d.createElement(o.sl, {
                            mountedId: (0, o.iN)(m.GN, m.jw)
                        })))
                    }
                    renderOverlayWidgets() {
                        let e = Array.from(this.state.mapOverlayState, (([e, t]) => ({
                            sOverlayKey: e,
                            overlayState: t
                        }))).filter((e => e.overlayState.dockLocation != n.Dashboard));
                        return d.createElement(d.Fragment, null, e.map((e => d.createElement(C, {
                            bDashboardShown: this.state.bShown,
                            bHasSceneApp: y.H.Instance.SceneApplicationState !== o.xY.None,
                            bCaptureVideo: !1,
                            bDarkMode: this.state.bDarkMode,
                            bGroupMode: !1,
                            dockLocation: e.overlayState.dockLocation,
                            onDockOverlay: this.onDockOverlay,
                            sOverlayKey: e.sOverlayKey,
                            xfInitial: e.overlayState.xfInitial,
                            key: e.sOverlayKey,
                            ref: e.overlayState.refOverlayWidget
                        }))))
                    }
                    getRenderModelForShape(e) {
                        return ""
                    }
                    renderPassthroughPortals() {
                        return null
                    }
                    isDesktopViewVisible() {
                        let e = this.getActiveOverlayKey(),
                            t = !this.state.mapOverlayState.has(e) || this.state.mapOverlayState.get(e).dockLocation == n.Dashboard;
                        return this.state.bShown && this.isOverlayActive(m.gB) && t
                    }
                    onGameLaunched(e) {
                        (!e.is_dashboard_overlay || e.is_dashboard_overlay && !e.show_overlay_in_quicklaunch) && (null === VRHTML || void 0 === VRHTML || VRHTML.VRDashboardManager.HideDashboard("game_launched"))
                    }
                    renderInternalOverlays() {
                        var e, t, r, s;
                        const n = null !== (t = null === (e = this.m_refDesktopView.current) || void 0 === e ? void 0 : e.currentDesktopIndex) && void 0 !== t ? t : 1,
                            i = null !== (s = null === (r = this.m_refDesktopView.current) || void 0 === r ? void 0 : r.desktopCount) && void 0 !== s ? s : 1;
                        return d.createElement(d.Fragment, null, d.createElement(o.Y9, {
                            tabName: (0, g.Xx)("#Library"),
                            iconUri: "/dashboard/images/icons/svr_items.svg",
                            summonOverlayKey: m.O5
                        }, d.createElement(se, {
                            visible: this.state.bShown && this.isOverlayActive(m.O5),
                            onGameLaunched: this.onGameLaunched
                        })), d.createElement(o.Y9, {
                            tabName: (0, g.Xx)("#Store"),
                            iconUri: "/dashboard/images/icons/svr_store.svg",
                            summonOverlayKey: m.wB
                        }, d.createElement(Y, {
                            visible: this.state.bShown && this.isOverlayActive(m.wB)
                        })), d.createElement(o.Y9, {
                            tabName: (0, g.Xx)("#Now_Playing"),
                            summonOverlayKey: m.PF
                        }, d.createElement(A, {
                            visible: this.state.bShown && this.isOverlayActive(m.PF),
                            onExitGame: () => this.switchToHomeOverlay()
                        })), d.createElement(o.Y9, {
                            summonOverlayKey: m.gB,
                            tabName: i > 1 ? (0, g.Xx)("#Desktop_X", n) : (0, g.Xx)("#Desktop"),
                            iconUri: "/dashboard/images/icons/svr_desktop_alt.svg"
                        }, d.createElement(P, {
                            visible: this.isDesktopViewVisible(),
                            fActiveOverlayScale: this.activeOverlayScale,
                            mapWindows: this.state.mapWindows,
                            bWindowViewEnabled: this.state.bWindowViewEnabled,
                            ref: this.m_refDesktopView
                        })), d.createElement(c._, {
                            visible: this.state.bShown && this.isOverlayActive(m.A4)
                        }), !1)
                    }
                    onAddPortal(e, t) {}
                    onRemovePortal(e) {}
                    get activeOverlayScale() {
                        let e = 1;
                        if (this.getActiveOverlayKey()) {
                            let t = this.state.mapOverlayState.get(this.getActiveOverlayKey());
                            t && (e = t.fScale)
                        }
                        return e
                    }
                    onActiveOverlayScaleChange(e) {
                        this.setState((t => {
                            const r = new Map(t.mapOverlayState),
                                s = Object.assign(Object.assign({}, r.get(this.getActiveOverlayKey())), {
                                    fScale: e
                                });
                            return {
                                mapOverlayState: r.set(this.getActiveOverlayKey(), s)
                            }
                        }))
                    }
                    onActiveOverlayClosed() {
                        var e;
                        const t = this.getActiveOverlayKey();
                        t && (t.startsWith("system.window.") ? null === (e = this.m_refDesktopView.current) || void 0 === e || e.onWindowViewClosed(t) : this.switchToHomeOverlay(), VRHTML.VRDashboardManager.SendOverlayClosed(t))
                    }
                    onSteamButtonPressed(e) {
                        const t = this.getActiveOverlayKey();
                        t && (VRHTML.VRDashboardManager.SendOverlayButtonPress(t, e), VRHTML.VRDashboardManager.SendOverlayButtonUnpress(t, e))
                    }
                    renderOverlayControlBar() {
                        var e, t, r, s, i;
                        const a = this.isDarkMode ? {
                                r: .1,
                                g: .1,
                                b: .1
                            } : null,
                            l = this.isDarkMode ? 0 : .1;
                        let c = !1,
                            h = !1,
                            p = !1,
                            v = this.getActiveOverlayKey();
                        if (v) {
                            let e = VRHTML.VROverlay.FindOverlay(v);
                            c = !!e && VRHTML.VROverlay.GetFlag(e, o.Z9.EnableControlBarKeyboard), h = !!e && VRHTML.VROverlay.GetFlag(e, o.Z9.EnableControlBarClose), p = !!e && VRHTML.VROverlay.GetFlag(e, o.Z9.EnableSteamUIButtons)
                        }
                        const _ = null !== (e = S.G3.settings.get("/settings/dashboard/scaleSliderMin")) && void 0 !== e ? e : .75,
                            y = null !== (t = S.G3.settings.get("/settings/dashboard/scaleSliderMax")) && void 0 !== t ? t : 1.5,
                            b = null === (r = S.G3.settings.get("/settings/dashboard/allowCurvature")) || void 0 === r || r,
                            f = null !== (s = S.G3.settings.get("/settings/dashboard/allowTheaterMode")) && void 0 !== s && s,
                            k = b ? m.ml : null,
                            M = {
                                x: 0,
                                y: -.15,
                                z: .1
                            },
                            R = this.GetActiveOverlayAnchorIDs();
                        return d.createElement(d.Fragment, null, d.createElement(o.wx, {
                            parent_id: R.strBottomCenterAnchorID,
                            translation: {
                                y: .003
                            }
                        }, d.createElement(o.VW, {
                            color: a
                        }, d.createElement(o.s_, {
                            curvature_origin_id: k,
                            origin: o.Ic.TopCenter,
                            interactive: !1,
                            target_width_anchor_id: R.strBottomCenterAnchorID,
                            height: .15,
                            min_width: 1.66,
                            debug_name: "ActiveOverlayControlBarBackground",
                            sampler: o.Vv.SingleTap,
                            reflect: l
                        }, d.createElement("div", {
                            className: "OverlayControlBarBackground"
                        })))), d.createElement(o.wx, {
                            parent_id: R.strBottomCenterAnchorID,
                            translation: {
                                y: .003,
                                z: .001
                            }
                        }, d.createElement(o.VW, {
                            color: a
                        }, d.createElement(o.s_, {
                            curvature_origin_id: k,
                            origin: o.Ic.TopCenter,
                            interactive: !0,
                            target_dpi_panel_id: m.WR,
                            debug_name: "ActiveOverlayControlBar"
                        }, d.createElement("div", {
                            className: "OverlayControlBar"
                        }, d.createElement("div", {
                            className: "Section"
                        }, d.createElement("div", {
                            className: "Label"
                        }, (0, g.Xx)("#Size")), d.createElement(u.iR, {
                            additionalClassName: "OverlayControlBarSlider",
                            min: _,
                            max: y,
                            value: this.activeOverlayScale,
                            valueStyleVariant: u.px.OnHandle,
                            onChange: this.onActiveOverlayScaleChange,
                            detents: [1],
                            renderValue: e => (100 * e).toFixed(0) + "%"
                        }), p && d.createElement(D.zN, {
                            icon: d.createElement(he.VC, {
                                button: ue.F.HomeMenu,
                                type: he.yV.Knockout,
                                size: he.iM.Medium,
                                additionalClassName: "DashboardActionGlyph"
                            }),
                            title: (0, g.Xx)("#ShowSteamUI_Steam"),
                            tooltipTranslation: M,
                            onClick: () => {
                                this.onSteamButtonPressed(o.ZP.HomeMenu)
                            },
                            additionalClassNames: "ButtonControlFixedHeight"
                        }), p && d.createElement(D.zN, {
                            icon: d.createElement(he.VC, {
                                button: ue.F.QuickMenu,
                                type: he.yV.Knockout,
                                size: he.iM.Medium,
                                additionalClassName: "DashboardActionGlyph"
                            }),
                            title: (0, g.Xx)("#ShowSteamUI_QAM"),
                            tooltipTranslation: M,
                            onClick: () => {
                                this.onSteamButtonPressed(o.ZP.QuickMenu)
                            },
                            additionalClassNames: "ButtonControlFixedHeight"
                        }), !1, c && d.createElement(D.CS, {
                            tooltipTranslation: M,
                            activeOverlayKey: this.getActiveOverlayKey()
                        }), d.createElement(D.zN, {
                            iconUrl: "/dashboard/images/icons/mirror_left.png",
                            title: (0, g.Xx)("#DockOnLeftController"),
                            tooltipTranslation: M,
                            onClick: () => {
                                let e = this.getActiveOverlayKey();
                                this.state.mapOverlayState.has(e) && this.state.mapOverlayState.get(e).dockLocation == n.LeftHand ? this.onDockOverlay(e, n.Dashboard) : this.onDockOverlay(e, n.LeftHand)
                            },
                            enabled: VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(o.Kg.TrackedControllerRole_LeftHand) != o.Kf,
                            active: this.state.mapOverlayState.has(this.getActiveOverlayKey()) && this.state.mapOverlayState.get(this.getActiveOverlayKey()).dockLocation == n.LeftHand
                        }), d.createElement(D.zN, {
                            iconUrl: "/dashboard/images/icons/mirror_right.png",
                            title: (0, g.Xx)("#DockOnRightController"),
                            tooltipTranslation: M,
                            onClick: () => {
                                let e = this.getActiveOverlayKey();
                                this.state.mapOverlayState.has(e) && this.state.mapOverlayState.get(e).dockLocation == n.RightHand ? this.onDockOverlay(e, n.Dashboard) : this.onDockOverlay(e, n.RightHand)
                            },
                            enabled: VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(o.Kg.TrackedControllerRole_RightHand) != o.Kf,
                            active: this.state.mapOverlayState.has(this.getActiveOverlayKey()) && this.state.mapOverlayState.get(this.getActiveOverlayKey()).dockLocation == n.RightHand
                        }), d.createElement(D.zN, {
                            iconUrl: "/dashboard/images/icons/icon_move.png",
                            title: (0, g.Xx)("#FloatInWorld"),
                            tooltipTranslation: M,
                            onClick: () => {
                                let e = this.getActiveOverlayKey();
                                this.state.mapOverlayState.has(e) && this.state.mapOverlayState.get(e).dockLocation == n.World ? this.onDockOverlay(e, n.Dashboard) : this.onDockOverlay(e, n.World)
                            },
                            active: this.state.mapOverlayState.has(this.getActiveOverlayKey()) && this.state.mapOverlayState.get(this.getActiveOverlayKey()).dockLocation == n.World
                        }), f && d.createElement(D.zN, {
                            iconUrl: "/dashboard/images/icons/svr_theater.svg",
                            title: "Toggle Theater Mode",
                            tooltipTranslation: M,
                            onClick: () => {
                                let e = this.getActiveOverlayKey();
                                this.state.mapOverlayState.has(e) && this.state.mapOverlayState.get(e).dockLocation == n.Theater ? this.onDockOverlay(e, n.Dashboard) : (this.onDockOverlay(e, n.Theater), null === VRHTML || void 0 === VRHTML || VRHTML.VRDashboardManager.HideDashboard("theater_mode"))
                            },
                            active: this.state.mapOverlayState.has(this.getActiveOverlayKey()) && this.state.mapOverlayState.get(this.getActiveOverlayKey()).dockLocation == n.Theater
                        }), h && d.createElement(D.zN, {
                            iconUrl: "/dashboard/images/icons/icon_close_black.png",
                            title: (0, g.Xx)("#CloseOverlay"),
                            tooltipTranslation: M,
                            onClick: this.onActiveOverlayClosed
                        }), this.isDesktopOverlayActive() && (null === (i = this.m_refDesktopView.current) || void 0 === i ? void 0 : i.renderControlBarButtons(M))))))))
                    }
                    renderDashboard() {
                        var e, t, r, s;
                        const i = this.computeFilteredOverlayTabs(),
                            a = this.hasVRGamepadUIOverlay(),
                            l = this.isDarkMode ? {
                                r: .02,
                                g: .02,
                                b: .02
                            } : null,
                            c = this.isDarkMode ? 0 : .1,
                            u = !a && !this.isDarkMode,
                            p = !a && !this.isDarkMode,
                            v = !a;
                        let _ = [],
                            y = [],
                            b = null !== (e = S.G3.settings.get(m.FM)) && void 0 !== e ? e : 2;
                        if (i.length > b) {
                            const e = S.G3.settings.get(m.nf);
                            _ = [null !== (t = i.find((t => t.summon_overlay_key == e))) && void 0 !== t ? t : i[0]], y = i.filter((e => !_.includes(e)))
                        } else _ = i;
                        let f = null;
                        this.isDesktopOverlayActive() && (f = 2048);
                        let M = [];
                        this.state.mapWindows.forEach((e => {
                            "" == e.overlay_key && M.push(e)
                        }));
                        const R = this.isScreenshotMode,
                            C = R ? 2.5 : 1.8;
                        let w = !1,
                            T = !0,
                            E = !1,
                            I = this.getActiveOverlayKey();
                        if (I) {
                            let e = VRHTML.VROverlay.FindOverlay(I);
                            E = !!e && VRHTML.VROverlay.GetFlag(e, o.Z9.EnableControlBar), T = !this.state.mapOverlayState.has(I) || this.state.mapOverlayState.get(I).dockLocation == n.Dashboard, w = this.state.mapOverlayState.has(I) && this.state.mapOverlayState.get(I).dockLocation == n.World
                        }
                        this.state.bLaserMouseSuppressionActive && (E = !1);
                        let P = 2,
                            x = 2.5;
                        const V = S.G3.settings.get("/settings/dashboard/theaterPosition");
                        V == de.Near ? (P *= .5, x *= .5) : V == de.Middle ? (P *= 1, x *= 1) : V == de.Far && (P *= 4, x *= 2.5), S.G3.settings.get("/settings/dashboard/theaterVerticalOffsetCm");
                        const O = null === (r = S.G3.settings.get("/settings/dashboard/allowCurvature")) || void 0 === r || r,
                            L = O ? m.ml : null;
                        let H = {
                                y: E ? -.9 : -1.03375,
                                z: .05
                            },
                            B = {
                                y: -1.2,
                                z: .15
                            };
                        const N = this.state.bLaserMouseSuppressionActive ? .1 : 1,
                            A = this.isDarkMode ? {
                                r: .05,
                                g: .05,
                                b: .05
                            } : null;
                        let F = O ? 1 : 0;
                        const U = null !== (s = S.G3.settings.get("/settings/dashboard/allowFreeTransform")) && void 0 !== s && s,
                            W = this.GetActiveOverlayAnchorIDs(),
                            G = a ? "VRGamepadUI-Header-Panel-TopCenter" : W.strTopCenterAnchorID;
                        return d.createElement(o.eK, {
                            bContinuousRelatch: this.state.bPlacementModeActive,
                            bFreeDashboardTransform: U && this.state.bPlacementModeActive
                        }, d.createElement(o.wx, {
                            translation: {},
                            parent_path: undefined
                        }, d.createElement(oe, null, !1, d.createElement(o.wx, {
                            id: L,
                            translation: {
                                z: C
                            }
                        }), d.createElement(o.wx, {
                            translation: {
                                x: R ? .1 : 0,
                                y: le.getDashboardVerticalPosition(),
                                z: -le.getDashboardDistance() * (R ? 1.1 : 1)
                            },
                            rotation: {
                                x: R ? -20 : 0
                            },
                            scale: le.getDashboardScale()
                        }, !a && d.createElement(o.wx, {
                            parent_id: G,
                            translation: {
                                y: .008
                            }
                        }, d.createElement(o.VW, {
                            color: l
                        }, d.createElement(o.s_, {
                            curvature_origin_id: L,
                            origin: o.Ic.BottomCenter,
                            interactive: !1,
                            target_dpi_panel_id: m.WR,
                            debug_name: "StatusBar",
                            reflect: c
                        }, d.createElement("div", {
                            className: "StatusBar",
                            style: {
                                width: f
                            }
                        }, d.createElement("div", {
                            className: "Section Left"
                        }, u && this.renderStatusBarTitle(), d.createElement(D.j6, {
                            role: o.Kg.TrackedControllerRole_LeftHand,
                            style: k.A.HorizontalPips
                        })), d.createElement("div", {
                            className: "Section Center"
                        }, d.createElement(D.j6, {
                            deviceIndex: o.wU,
                            style: k.A.VerticalBattery
                        }), v && d.createElement(D.M3, null)), d.createElement("div", {
                            className: "Section Right"
                        }, d.createElement(D.j6, {
                            role: o.Kg.TrackedControllerRole_RightHand,
                            style: k.A.HorizontalPips
                        }), p && d.createElement("div", {
                            className: "SteamLogo"
                        }, d.createElement("img", {
                            src: "/dashboard/images/icons/vr_steam.svg"
                        }))))))), d.createElement(o.wx, {
                            id: "active_overlay_transform",
                            translation: H,
                            ref: this.m_refOverlayTransform
                        }, !w && T && this.renderActiveOverlay(), !w && !T && d.createElement(D.lL, {
                            additionalClassNames: E ? "WithControlBar" : "",
                            visible: !0
                        }, d.createElement("div", {
                            className: "NoDesktopFound"
                        }, d.createElement("h2", null, this.state.mapOverlayState.get(I).dockLocation == n.LeftHand && (0, g.Xx)("#DockedOnLeftController"), this.state.mapOverlayState.get(I).dockLocation == n.RightHand && (0, g.Xx)("#DockedOnRightController")), d.createElement(h.z, {
                            className: "ButtonControl",
                            onClick: () => {
                                this.onDockOverlay(I, n.Dashboard)
                            }
                        }, (0, g.Xx)("#DockHere"))))), E && T && this.renderOverlayControlBar(), !1, d.createElement(o.wx, {
                            translation: {
                                x: B.x,
                                y: B.y + .08,
                                z: B.z - .12
                            }
                        }, d.createElement(ae, {
                            bVisible: !0,
                            curvature_origin_id: L,
                            tint: A,
                            opacity: N,
                            onStartMove: this.onGrabStart,
                            onEndMove: this.onGrabEnd
                        })), d.createElement(o.wx, {
                            translation: B,
                            scale: {
                                x: 1,
                                y: 1,
                                z: 1
                            },
                            id: m.Qg
                        }, d.createElement(o.wx, {
                            rotation: {
                                x: -35
                            },
                            curvature_pitch: -35
                        }, this.renderControlBar(_, y)), this.state.eShowPopoverMenu == ce.Power && d.createElement(o.wx, {
                            translation: {
                                x: -.4,
                                y: .15,
                                z: .05
                            },
                            rotation: {
                                y: 19 * F
                            }
                        }, d.createElement(o.s_, {
                            curvature_origin_id: L,
                            height: void 0,
                            width: .925,
                            interactive: !0,
                            origin: o.Ic.BottomRight,
                            debug_name: "Power Menu",
                            sort_depth_bias: -.1
                        }, this.renderPowerMenu())), this.state.eShowPopoverMenu == ce.ExternalOverlays && d.createElement(o.wx, {
                            translation: {
                                x: .2,
                                y: .15,
                                z: .05
                            },
                            rotation: {
                                y: 6 * F
                            }
                        }, d.createElement(o.s_, {
                            curvature_origin_id: L,
                            height: void 0,
                            width: .925,
                            interactive: !0,
                            origin: o.Ic.BottomRight,
                            debug_name: "OverlaysList",
                            sort_depth_bias: -.1
                        }, this.renderPopoverMenu(d.createElement(d.Fragment, null, " ", y.map((e => d.createElement(D.dy, {
                            key: e.mountable_id,
                            imageUrl: this.getDashboardIconUri(e),
                            label: e.tab_name,
                            onClick: () => {
                                this.switchToOverlayInternal(e.summon_overlay_key), this.showPopoverMenu(ce.None)
                            }
                        }))), " ")))), this.state.eShowPopoverMenu == ce.Windows && d.createElement(o.wx, {
                            translation: {
                                x: 1.25,
                                y: -.1,
                                z: .35
                            },
                            rotation: {
                                y: -16 * F
                            }
                        }, d.createElement(o.s_, {
                            curvature_origin_id: L,
                            height: void 0,
                            width: .925,
                            interactive: !0,
                            origin: o.Ic.BottomRight,
                            debug_name: "WindowList",
                            sort_depth_bias: -.1
                        }, this.renderPopoverMenu(d.createElement(d.Fragment, null, " ", M.map((e => d.createElement(D.dy, {
                            key: e.hwnd,
                            imageUrl: "/dashboard/images/icons/icon_add.png",
                            label: e.title,
                            onClick: () => {
                                let t = {
                                    type: "request_spawn_window_view",
                                    hwnd: e.hwnd
                                };
                                this.m_mailbox.SendMessage("desktopview", t), this.showPopoverMenu(ce.None)
                            }
                        }))), " ")))))))))
                    }
                };
                me.k_sDashboardMailboxName = "systemui_dashboard", me.k_sSetDashboardFadeSupressionMessage = "set_dashboard_fade_suppression", me.k_sDashboardOverlayCreatedMessage = "dashboard_overlay_created", me.k_sDashboardOverlayDestroyedMessage = "dashboard_overlay_destroyed", me.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs", me.k_sRequestDashboardTabsMessage = "request_dashboard_tabs", me.k_sWindowViewCreatedMessage = "window_view_created", me.k_sWindowViewDestroyedMessage = "window_view_destroyed", me.k_sUpdateWindowListMessage = "update_window_list", me.k_sUpdateDebugInfoMessage = "update_debug_info", me.k_sSetDashboardForceBoundsVisible = "set_dashboard_force_bounds_visible", me.k_sLaserMouseSuppressionUpdate = "laser_mouse_suppression_update", me.k_nControlBarWidthMeters = 2.667, me.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds = 3, me.s_dashboardUserDistance = void 0, me.s_dashboardUserScale = void 0, (0, i.gn)([a.ak], me.prototype, "onSetDashboardFadeSuppression", null), (0, i.gn)([a.ak], me.prototype, "onRoomViewChanged", null), (0, i.gn)([a.ak], me.prototype, "onLinkStreamActiveEvents", null), (0, i.gn)([a.ak], me.prototype, "onGrabStart", null), (0, i.gn)([a.ak], me.prototype, "onGrabEnd", null), (0, i.gn)([a.ak], me.prototype, "onSetDashboardForceBoundsVisible", null), (0, i.gn)([a.ak], me.prototype, "onLaserMouseSuppressionUpdate", null), (0, i.gn)([a.ak], me.prototype, "onDashboardOverlayCreated", null), (0, i.gn)([a.ak], me.prototype, "onDashboardOverlayDestroyed", null), (0, i.gn)([a.ak], me.prototype, "onUpdateDashboardTabs", null), (0, i.gn)([a.ak], me.prototype, "onWindowViewCreated", null), (0, i.gn)([a.ak], me.prototype, "onWindowViewDestroyed", null), (0, i.gn)([a.ak], me.prototype, "onUpdateWindowList", null), (0, i.gn)([a.ak], me.prototype, "onUpdateDebugInfo", null), (0, i.gn)([a.ak], me.prototype, "onDockOverlay", null), (0, i.gn)([a.ak], me.prototype, "onShowDashboardRequested", null), (0, i.gn)([a.ak], me.prototype, "onHideTheaterMode", null), (0, i.gn)([a.ak], me.prototype, "onHideDashboardRequested", null), (0, i.gn)([a.ak], me.prototype, "show", null), (0, i.gn)([a.ak], me.prototype, "hide", null), (0, i.gn)([a.ak], me.prototype, "setPlacementModeActive", null), (0, i.gn)([a.ak], me.prototype, "onToggleRoomView", null), (0, i.gn)([a.ak], me.prototype, "onQuickLaunchButtonClick", null), (0, i.gn)([a.ak], me.prototype, "onQuickStoreButtonClick", null), (0, i.gn)([a.ak], me.prototype, "onRecenterClick", null), (0, i.gn)([a.ak], me.prototype, "onImmersiveRoomSetupClick", null), (0, i.gn)([a.ak], me.prototype, "onToggleGamepadFocus", null), (0, i.gn)([a.ak], me.prototype, "renderPowerMenu", null), (0, i.gn)([a.ak], me.prototype, "startPopoverMenuTimeout", null), (0, i.gn)([a.ak], me.prototype, "clearPopoverMenuTimeout", null), (0, i.gn)([a.ak], me.prototype, "showPopoverMenu", null), (0, i.gn)([a.ak], me.prototype, "popoverMenuMouseLeave", null), (0, i.gn)([a.ak], me.prototype, "popoverMenuMouseUp", null), (0, i.gn)([l.Fl], me.prototype, "isScreenshotMode", null), (0, i.gn)([a.ak], me.prototype, "hasDashboardOverlay", null), (0, i.gn)([a.ak], me.prototype, "renderExternalOverlayControlBarButton", null), (0, i.gn)([a.ak], me.prototype, "isDesktopTrayActive", null), (0, i.gn)([a.ak], me.prototype, "isSteamOverlayActive", null), (0, i.gn)([a.ak], me.prototype, "isDesktopOverlayActive", null), (0, i.gn)([a.ak], me.prototype, "showIncognitoMode", null), (0, i.gn)([a.ak], me.prototype, "handlePeerButton", null), (0, i.gn)([a.ak], me.prototype, "ToggleIncognitoMode", null), (0, i.gn)([a.ak], me.prototype, "ToggleVideoStream", null), (0, i.gn)([a.ak], me.prototype, "getRenderModelForShape", null), (0, i.gn)([a.ak], me.prototype, "isDesktopViewVisible", null), (0, i.gn)([a.ak], me.prototype, "onGameLaunched", null), (0, i.gn)([a.ak], me.prototype, "onAddPortal", null), (0, i.gn)([a.ak], me.prototype, "onRemovePortal", null), (0, i.gn)([l.Fl], me.prototype, "activeOverlayScale", null), (0, i.gn)([a.ak], me.prototype, "onActiveOverlayScaleChange", null), (0, i.gn)([a.ak], me.prototype, "onActiveOverlayClosed", null), (0, i.gn)([a.ak], me.prototype, "onSteamButtonPressed", null), (0, i.gn)([l.LO], me, "s_dashboardUserDistance", void 0), (0, i.gn)([l.LO], me, "s_dashboardUserScale", void 0), me = le = (0, i.gn)([f.Pi], me)
            },
            6459: (e, t, r) => {
                "use strict";
                r.d(t, {
                    B8: () => H,
                    CS: () => q,
                    D6: () => z,
                    Eu: () => w,
                    IO: () => O,
                    M3: () => E,
                    NT: () => B,
                    Rk: () => A,
                    Yd: () => T,
                    dw: () => L,
                    dy: () => I,
                    j4: () => F,
                    j6: () => N,
                    lL: () => D,
                    z: () => U,
                    zN: () => K,
                    zk: () => V
                });
                var s, n, i = r(655),
                    o = r(1569),
                    a = r(7056),
                    l = r(2188),
                    d = r(7062),
                    c = r(7294),
                    h = r(5177),
                    u = r(9755),
                    p = r(7475),
                    m = r(4979),
                    g = r(3107),
                    v = r(2749),
                    _ = r(7176),
                    y = r(3568),
                    b = r(7008),
                    S = r(8980),
                    f = r(9897),
                    k = r(1628),
                    M = r(8322),
                    R = r.n(M),
                    C = r(7726);
                const w = new l.vP;

                function T(e) {
                    const {
                        summonOverlayKey: t
                    } = e, {
                        ids: r,
                        anchors: s
                    } = c.useMemo((() => {
                        const e = "DashboardPanel_" + t,
                            r = {
                                strTopCenterAnchorID: e + "_TopCenter",
                                strCenterLeftAnchorID: e + "_CenterLeft",
                                strCenterRightAnchorID: e + "_CenterRight",
                                strBottomCenterAnchorID: e + "_BottomCenter"
                            };
                        return {
                            ids: r,
                            anchors: c.createElement(c.Fragment, null, c.createElement(o.at, {
                                id: r.strTopCenterAnchorID,
                                location: o.Ic.TopCenter
                            }), c.createElement(o.at, {
                                id: r.strCenterLeftAnchorID,
                                location: o.Ic.CenterLeft
                            }), c.createElement(o.at, {
                                id: r.strCenterRightAnchorID,
                                location: o.Ic.CenterRight
                            }), c.createElement(o.at, {
                                id: r.strBottomCenterAnchorID,
                                location: o.Ic.BottomCenter
                            }))
                        }
                    }), [t]);
                    return c.useEffect((() => (w.set(t, r), () => {
                        w.get(t) === r && w.delete(t)
                    })), [t, r]), t ? s : null
                }
                const D = e => {
                    var t, r, s;
                    const n = c.useRef(null),
                        i = c.useRef(null);
                    c.useEffect((() => {
                        var e, t;
                        return null === (e = n.current) || void 0 === e ? void 0 : e.setFloatingViewStack(null === (t = i.current) || void 0 === t ? void 0 : t.viewStack)
                    }));
                    const a = null === (t = e.scrollable) || void 0 === t || t,
                        l = null !== (r = e.foregroundReflectMultiplier) && void 0 !== r ? r : 1,
                        d = null === (s = k.G3.settings.get("/settings/dashboard/allowCurvature")) || void 0 === s || s ? _.ml : null;
                    return c.createElement(c.Fragment, null, c.createElement(o.s_, {
                        visibility: e.visible ? o.Bl.Visible : o.Bl.Hidden,
                        debug_name: "homepanelbackground",
                        curvature_origin_id: d,
                        origin: o.Ic.BottomCenter,
                        interactive: !1,
                        scrollable: !1,
                        target_dpi_panel_id: _.WR,
                        target_dpi_multiplier: 2,
                        reflect: .01,
                        sampler: o.Vv.SingleTap
                    }, c.createElement(T, {
                        summonOverlayKey: e.summonOverlayKey
                    }), c.createElement(u.vz, {
                        ref: n
                    }, c.createElement("div", {
                        className: (0, S.LJ)("DashboardPanelBackground", e.additionalClassNames),
                        style: e.additionalStyle
                    }))), c.createElement(o.wx, {
                        translation: {
                            z: 1e-5
                        }
                    }, c.createElement(o.s_, {
                        visibility: e.visible ? o.Bl.Visible : o.Bl.Hidden,
                        debug_name: e.debugName,
                        curvature_origin_id: d,
                        origin: o.Ic.BottomCenter,
                        interactive: !0,
                        scrollable: a,
                        target_dpi_panel_id: _.WR,
                        reflect: .2 * l
                    }, c.createElement(u.sC, {
                        ref: i
                    }, c.createElement(h.q, null, c.createElement(p.P, {
                        scrollDirection: a ? p.I.Vertical : p.I.None,
                        className: (0, S.LJ)("DashboardPanel", e.additionalClassNames),
                        style: e.additionalStyle
                    }, e.children))))))
                };
                class E extends c.Component {
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
                        const e = y.LJ.GetLocale();
                        let t = this.state.time.toLocaleTimeString(e, {
                                hour: "numeric",
                                minute: "2-digit"
                            }),
                            r = null;
                        const s = t.toLowerCase(),
                            n = Math.max(s.lastIndexOf("am"), s.lastIndexOf("pm"));
                        return n >= 0 && (r = t.substring(n), t = t.substring(0, n - 1)), c.createElement("div", {
                            className: "ClockContainer"
                        }, c.createElement("div", {
                            className: "Clock"
                        }, t, " ", c.createElement("span", {
                            className: "Suffix"
                        }, r)))
                    }
                }

                function I(e) {
                    return c.createElement(h.z, {
                        className: "PowerMenuButton",
                        onClick: e.onClick
                    }, c.createElement("div", {
                        className: "HoverGradient"
                    }), c.createElement("div", {
                        className: "ClickGradient"
                    }), c.createElement("span", null, e.label), e.lineBelow && c.createElement("div", {
                        className: "LineBelow"
                    }))
                }(0, i.gn)([a.ak], E.prototype, "updateTime", null);
                let P = s = class extends c.Component {
                    get isShowingTooltip() {
                        return s.s_CurrentlyShownTooltip === this
                    }
                    show() {
                        s.s_CurrentlyShownTooltip = this
                    }
                    hide() {
                        this.isShowingTooltip && (s.s_CurrentlyShownTooltip = null)
                    }
                    render() {
                        var e;
                        const t = this.props.text && (this.props.shown || this.isShowingTooltip),
                            r = this.props.translation ? this.props.translation : {
                                x: 0,
                                y: -.2,
                                z: .05
                            },
                            s = null === (e = k.G3.settings.get("/settings/dashboard/allowCurvature")) || void 0 === e || e ? _.ml : null;
                        return c.createElement("div", {
                            style: {
                                position: "absolute",
                                left: "50%",
                                top: "50%"
                            }
                        }, c.createElement(b.d, {
                            allowableParentSelectors: [".DashboardMain"]
                        }, c.createElement(o.wx, {
                            translation: r
                        }, c.createElement(o.s_, {
                            visibility: t ? o.Bl.Visible : o.Bl.SkipInSceneGraph,
                            target_dpi_panel_id: _.WR,
                            curvature_origin_id: s
                        }, c.createElement("div", {
                            className: "ControlBarButtonTooltip"
                        }, this.props.text)))))
                    }
                };
                P.s_CurrentlyShownTooltip = null, (0, i.gn)([l.Fl], P.prototype, "isShowingTooltip", null), (0, i.gn)([l.aD.bound], P.prototype, "show", null), (0, i.gn)([l.aD.bound], P.prototype, "hide", null), (0, i.gn)([l.LO], P, "s_CurrentlyShownTooltip", void 0), P = s = (0, i.gn)([d.Pi], P);
                class x extends c.Component {
                    static ShouldInvertThumbnail(e) {
                        if (!e) return !1;
                        if (e = e.toLowerCase(), !x.s_mapShouldInvertThumbnail.has(e)) {
                            let t = !1;
                            e.endsWith(".svg") && (t = !0), e.startsWith("data:") && x.k_rsThumbnailHashesToInvert.indexOf(R().hash(e)) >= 0 && (t = !0), x.s_mapShouldInvertThumbnail.set(e, t)
                        }
                        return x.s_mapShouldInvertThumbnail.get(e)
                    }
                    render() {
                        var e;
                        const t = null !== (e = this.props.shadow) && void 0 !== e && e,
                            r = x.ShouldInvertThumbnail(this.props.src);
                        return c.createElement("div", {
                            className: "Icon"
                        }, t && c.createElement("img", {
                            className: "Shadow",
                            src: this.props.src
                        }), c.createElement("img", {
                            className: (0, S.LJ)(["BlackToWhite", r]),
                            src: this.props.src
                        }))
                    }
                }
                var V, O;
                x.k_rsThumbnailHashesToInvert = ["5cbd0ebd6459cdaf75fdcafc5051f4e0", "c77452e60fc29227b33773ff6e74f8a1", "44b62220b39ba717fbfc65e3b4225491", "0ea4aa3d9529b716f0f1957684247dee", "86bbab56235b55f6e5e7d288342931d7"], x.s_mapShouldInvertThumbnail = new Map,
                    function(e) {
                        e[e.Large = 0] = "Large", e[e.Small = 1] = "Small", e[e.App = 2] = "App"
                    }(V || (V = {})),
                    function(e) {
                        e[e.Center = 0] = "Center", e[e.Fill = 1] = "Fill"
                    }(O || (O = {}));
                const L = e => c.createElement("div", {
                    className: (0, S.LJ)("ControlBarGroup", V[e.style])
                }, e.children);
                let H = class extends c.Component {
                    constructor(e) {
                        super(e), this.m_refTooltip = c.createRef()
                    }
                    onMouseEnter() {
                        var e, t, r;
                        null === (e = this.m_refTooltip.current) || void 0 === e || e.show(), null === (r = (t = this.props).onMouseEnter) || void 0 === r || r.call(t)
                    }
                    onMouseLeave() {
                        var e, t, r;
                        null === (e = this.m_refTooltip.current) || void 0 === e || e.hide(), null === (r = (t = this.props).onMouseLeave) || void 0 === r || r.call(t)
                    }
                    render() {
                        var e;
                        return c.createElement(h.z, {
                            className: (0, S.LJ)("ControlBarButton", this.props.additionalClassNames, O[null !== (e = this.props.imageStyle) && void 0 !== e ? e : O.Center] + "Image", ["Disabled", !1 === this.props.enabled], ["Active", !!this.props.active]),
                            style: {
                                "--image-url": this.props.imageUrl ? "url('" + this.props.imageUrl + "')" : void 0
                            },
                            onClick: this.props.onClick,
                            onMouseDown: this.props.onMouseDown,
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            pressSoundEffect: g.y.ControlBarButtonPress,
                            releaseSoundEffect: g.y.ControlBarButtonRelease
                        }, this.props.centerPanelAnchorID && c.createElement("div", {
                            style: {
                                position: "absolute",
                                left: "50%",
                                top: "50%"
                            }
                        }, c.createElement(b.d, {
                            allowableParentSelectors: [".DashboardMain"],
                            panelAnchorID: this.props.centerPanelAnchorID
                        })), c.createElement(P, {
                            text: this.props.label,
                            ref: this.m_refTooltip
                        }), c.createElement(x, {
                            src: this.props.imageUrl
                        }))
                    }
                };
                (0, i.gn)([a.ak], H.prototype, "onMouseEnter", null), (0, i.gn)([a.ak], H.prototype, "onMouseLeave", null), H = (0, i.gn)([d.Pi], H);
                const B = e => c.createElement(L, {
                    style: e.style
                }, c.createElement(H, Object.assign({}, e)));
                class N extends c.Component {
                    constructor(e) {
                        super(e), this.m_BatteryStateChangedCallbackHandle = null, this.m_DeviceRoleChangedCallbackHandle = null, this.m_DeviceEventCallbackHandle = null, this.deviceIndex = o.Kf, this.batteryLevelStable = null, this.devicePowerUsage = null, this.state = {
                            batteryIconPath: null
                        }
                    }
                    componentDidMount() {
                        this.m_BatteryStateChangedCallbackHandle = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.RegisterForBatteryStateChangedEvents(this.onBatteryStateChanged), this.m_DeviceRoleChangedCallbackHandle = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.RegisterForDeviceRoleChangedEvents(this.onDeviceRoleChanged), this.m_DeviceEventCallbackHandle = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.RegisterForDeviceEvents(this.onDeviceEvent), this.update()
                    }
                    componentWillUnmount() {
                        this.m_BatteryStateChangedCallbackHandle && (this.m_BatteryStateChangedCallbackHandle.unregister(), this.m_BatteryStateChangedCallbackHandle = null), this.m_DeviceRoleChangedCallbackHandle && (this.m_DeviceRoleChangedCallbackHandle.unregister(), this.m_DeviceRoleChangedCallbackHandle = null), this.m_DeviceEventCallbackHandle && (this.m_DeviceEventCallbackHandle.unregister(), this.m_DeviceEventCallbackHandle = null)
                    }
                    updateControllerStatus() {
                        if (!VRHTML) return;
                        let e = !1,
                            t = !1,
                            r = o.Kf;
                        if (void 0 !== this.props.role ? r = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(this.props.role) : void 0 !== this.props.deviceIndex && (r = this.props.deviceIndex), r != this.deviceIndex && (this.batteryLevelStable = null, this.devicePowerUsage = null, this.deviceIndex = r), r != o.Kf) {
                            if (e = VRHTML.VRProperties.GetBoolProperty(r, o.Uk.DeviceProvidesBatteryStatus_Bool), e) {
                                const e = VRHTML.VRProperties.GetFloatProperty(r, o.Uk.DeviceBatteryPercentage_Float);
                                t = VRHTML.VRProperties.GetBoolProperty(r, o.Uk.DeviceIsCharging_Bool), null == this.batteryLevelStable || 0 == this.batteryLevelStable ? this.batteryLevelStable = e : (this.batteryLevelStable = Math.min(this.batteryLevelStable, e + N.kBatteryLevelHysteresis, 1), this.batteryLevelStable = Math.max(this.batteryLevelStable, e - N.kBatteryLevelHysteresis, 0))
                            }
                            this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(r, o.Uk.DevicePowerUsage_Float)
                        }
                        let s = C.X.GetBatteryIcon(e, t, this.batteryLevelStable, this.props.style);
                        s != this.state.batteryIconPath && this.setState({
                            batteryIconPath: s
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
                    onDeviceEvent(e, t, r) {
                        e != o.XX.Activated && e != o.XX.Deactivated || this.update()
                    }
                    render() {
                        return c.createElement("div", {
                            className: "BatteryStatus"
                        }, this.devicePowerUsage && c.createElement("div", {
                            className: "Label"
                        }, " ", Math.round(10 * this.devicePowerUsage) / 10, " W "), c.createElement("img", {
                            src: this.state.batteryIconPath
                        }))
                    }
                }
                N.kBatteryLevelHysteresis = .02, (0, i.gn)([a.ak], N.prototype, "updateControllerStatus", null), (0, i.gn)([a.ak], N.prototype, "onBatteryStateChanged", null), (0, i.gn)([a.ak], N.prototype, "onDeviceRoleChanged", null), (0, i.gn)([a.ak], N.prototype, "onDeviceEvent", null), c.Component;
                const A = e => c.createElement("div", {
                    className: "Title"
                }, c.createElement(x, {
                    src: e.iconUrl,
                    shadow: !0
                }), c.createElement("span", {
                    className: "NoWrapText"
                }, e.name));
                class F extends c.Component {
                    constructor() {
                        super(...arguments), this.m_sAnchorID = Math.round(1e7 * Math.random()).toString(), this.m_resizeObserver = null, this.m_refPanelElem = c.createRef(), this.m_refBackgroundElem = c.createRef()
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
                        var e;
                        const t = this.props.position,
                            r = Math.asin(t) / Math.PI,
                            s = null === (e = k.G3.settings.get("/settings/dashboard/allowCurvature")) || void 0 === e || e ? _.ml : null;
                        return c.createElement(c.Fragment, null, c.createElement(o.at, {
                            location: {
                                x: t,
                                y: -1
                            }
                        }, c.createElement(o.wx, {
                            id: this.m_sAnchorID,
                            translation: {
                                y: .01 * Math.abs(r),
                                z: -.03 * Math.abs(r)
                            },
                            rotation: {
                                y: 15 * r,
                                z: 2 * r
                            }
                        })), c.createElement(b.R, {
                            allowableParentSelectors: [".DashboardMain"],
                            onPortalDidMount: this.onPortalDidMount
                        }, c.createElement(o.VW, {
                            color: this.props.tintColor
                        }, c.createElement(v.Ti, {
                            additionalClassName: "ControlBarTrayAnimation",
                            visible: this.props.visible,
                            duration: .25,
                            onStartShowing: this.updateBackgroundSize,
                            onShown: this.updateBackgroundSize
                        }, c.createElement(o.wx, {
                            parent_id: this.m_sAnchorID,
                            translation: {
                                y: .04,
                                z: -.01
                            }
                        }, c.createElement(o.s_, {
                            curvature_origin_id: s,
                            origin: o.Ic.TopCenter,
                            interactive: !0,
                            scrollable: !0,
                            target_dpi_panel_id: _.WR,
                            sort_depth_bias: this.props.sort_depth_bias
                        }, c.createElement("div", {
                            className: (0, S.LJ)("ControlBarTray", this.props.additionalClassNames),
                            onMouseEnter: this.props.onMouseEnter,
                            onMouseMove: this.props.onMouseMove,
                            onMouseLeave: this.props.onMouseLeave,
                            ref: this.m_refPanelElem
                        }, this.props.children)), c.createElement(o.wx, {
                            translation: {
                                z: -1e-5
                            }
                        }, c.createElement(o.s_, {
                            curvature_origin_id: s,
                            origin: o.Ic.TopCenter,
                            interactive: !1,
                            scrollable: !1,
                            target_dpi_panel_id: _.WR,
                            target_dpi_multiplier: 2,
                            reflect: .04,
                            sampler: o.Vv.SingleTap,
                            sort_depth_bias: this.props.sort_depth_bias
                        }, c.createElement("div", {
                            className: "ControlBarTrayBackground",
                            ref: this.m_refBackgroundElem
                        }))))))))
                    }
                }(0, i.gn)([a.ak], F.prototype, "onResizeObserved", null), (0, i.gn)([a.ak], F.prototype, "updateBackgroundSize", null), (0, i.gn)([a.ak], F.prototype, "onPortalDidMount", null);
                let U = class extends c.Component {
                    constructor() {
                        super(...arguments), this.m_refSlider = c.createRef(), this.m_refTray = c.createRef(), this.m_bMouseInSlider = !1
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
                        return k.G3.settings.get("/settings/audio/enablePlaybackMirrorIndependentVolume") && k.G3.settings.get("/settings/audio/enablePlaybackMirror")
                    }
                    get enableAudioMirrorControls() {
                        return !!k.G3.settings.get("/settings/audio/activePlaybackMirrorDevice")
                    }
                    render() {
                        const e = (this.showAudioMirrorControls ? 3 : 2) >= 3 ? 0 : this.props.position;
                        return c.createElement(F, Object.assign({}, this.props, {
                            position: e,
                            ref: this.m_refTray,
                            additionalClassNames: "VolumeTray"
                        }), c.createElement("div", {
                            className: "Section"
                        }, c.createElement(G, {
                            onClick: f.f.Instance.toggleMicrophoneMute,
                            title: f.f.Instance.microphoneMuted ? (0, y.Xx)("#UnmuteMicrophone") : (0, y.Xx)("#MuteMicrophone")
                        }, c.createElement("img", {
                            className: "BlackToWhite",
                            src: f.f.Instance.microphoneMuted ? "/dashboard/images/icons/svr_mic_mute.svg" : "/dashboard/images/icons/svr_mic_active.svg"
                        })), c.createElement(W, {
                            title: (0, y.Xx)("#MicrophoneVolume"),
                            value: f.f.Instance.microphoneVolume,
                            onChange: f.f.Instance.setMicrophoneVolume,
                            onMouseEnter: this.onSliderMouseEnter,
                            onMouseLeave: this.onSliderMouseLeave,
                            onFinalChange: this.onSliderFinalChange,
                            renderValue: e => Math.round(100 * e) + "%",
                            valueStyleVariant: m.px.OnHandle,
                            additionalClassName: (0, S.LJ)(["Muted", f.f.Instance.microphoneMuted]),
                            interactionEndSoundEffect: g.y.VolumePreview
                        })), this.showAudioMirrorControls && c.createElement("div", {
                            className: "Section"
                        }, c.createElement(G, {
                            onClick: f.f.Instance.toggleMirrorMute,
                            enabled: this.enableAudioMirrorControls,
                            title: f.f.Instance.mirrorMuted ? (0, y.Xx)("#UnmuteAudioMirror") : (0, y.Xx)("#MuteAudioMirror")
                        }, c.createElement("img", {
                            className: "BlackToWhite",
                            src: f.f.Instance.mirrorMuted ? "/dashboard/images/icons/svr_volume_mirror_mute.svg" : "/dashboard/images/icons/svr_volume_mirror.svg"
                        })), c.createElement(W, {
                            title: (0, y.Xx)("#AudioMirrorVolume"),
                            value: f.f.Instance.mirrorVolume,
                            enabled: this.enableAudioMirrorControls,
                            onChange: f.f.Instance.setMirrorVolume,
                            onMouseEnter: this.onSliderMouseEnter,
                            onMouseLeave: this.onSliderMouseLeave,
                            onFinalChange: this.onSliderFinalChange,
                            renderValue: e => Math.round(100 * e) + "%",
                            valueStyleVariant: m.px.OnHandle,
                            additionalClassName: (0, S.LJ)(["Muted", f.f.Instance.mirrorMuted]),
                            interactionEndSoundEffect: g.y.VolumePreview
                        })), c.createElement("div", {
                            className: "Section"
                        }, c.createElement(G, {
                            onClick: f.f.Instance.toggleMute,
                            title: f.f.Instance.muted ? (0, y.Xx)("#Unmute_Headset") : (0, y.Xx)("#Mute_Headset")
                        }, c.createElement("img", {
                            className: "BlackToWhite",
                            src: f.f.Instance.muted ? "/dashboard/images/icons/svr_volume_mute.svg" : "/dashboard/images/icons/svr_volume.svg"
                        })), c.createElement(W, {
                            title: (0, y.Xx)("#HeadsetVolume"),
                            sliderRef: this.m_refSlider,
                            value: f.f.Instance.volume,
                            onChange: f.f.Instance.setVolume,
                            onMouseEnter: this.onSliderMouseEnter,
                            onMouseLeave: this.onSliderMouseLeave,
                            onFinalChange: this.onSliderFinalChange,
                            renderValue: e => Math.round(100 * e) + "%",
                            valueStyleVariant: m.px.OnHandle,
                            additionalClassName: (0, S.LJ)(["Muted", f.f.Instance.muted]),
                            interactionEndSoundEffect: g.y.VolumePreview
                        })))
                    }
                };
                (0, i.gn)([a.ak], U.prototype, "onSliderMouseEnter", null), (0, i.gn)([a.ak], U.prototype, "onSliderMouseLeave", null), (0, i.gn)([a.ak], U.prototype, "onSliderFinalChange", null), (0, i.gn)([l.Fl], U.prototype, "showAudioMirrorControls", null), (0, i.gn)([l.Fl], U.prototype, "enableAudioMirrorControls", null), U = (0, i.gn)([d.Pi], U);
                let W = class extends c.Component {
                    constructor(e) {
                        super(e), this.state = {
                            bSliding: !1,
                            bHover: !1
                        }
                    }
                    onMouseEnter(e) {
                        var t, r;
                        this.setState({
                            bHover: !0
                        }), null === (r = (t = this.props).onMouseEnter) || void 0 === r || r.call(t, e)
                    }
                    onMouseLeave(e) {
                        var t, r;
                        this.setState({
                            bHover: !1
                        }), null === (r = (t = this.props).onMouseLeave) || void 0 === r || r.call(t, e)
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
                        return c.createElement("div", {
                            className: "SliderContainer"
                        }, this.props.title && c.createElement(P, {
                            text: this.props.title,
                            shown: this.state.bHover || this.state.bSliding
                        }), c.createElement(m.iR, Object.assign({}, e, {
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave,
                            onInteractionStart: this.onInteractionStart,
                            onInteractionEnd: this.onInteractionEnd,
                            ref: this.props.sliderRef
                        })))
                    }
                };
                (0, i.gn)([a.ak], W.prototype, "onMouseEnter", null), (0, i.gn)([a.ak], W.prototype, "onMouseLeave", null), (0, i.gn)([a.ak], W.prototype, "onInteractionStart", null), (0, i.gn)([a.ak], W.prototype, "onInteractionEnd", null), W = (0, i.gn)([d.Pi], W);
                let G = class extends c.Component {
                    constructor(e) {
                        super(e), this.m_refTooltip = c.createRef()
                    }
                    onMouseEnter(e) {
                        var t, r, s;
                        null === (t = this.m_refTooltip.current) || void 0 === t || t.show(), null === (s = (r = this.props).onMouseEnter) || void 0 === s || s.call(r, e)
                    }
                    onMouseLeave(e) {
                        var t, r, s;
                        null === (t = this.m_refTooltip.current) || void 0 === t || t.hide(), null === (s = (r = this.props).onMouseLeave) || void 0 === s || s.call(r, e)
                    }
                    render() {
                        return c.createElement(h.z, Object.assign({}, this.props, {
                            className: (0, S.LJ)("ButtonControl", "Round", this.props.className),
                            onMouseEnter: this.onMouseEnter,
                            onMouseLeave: this.onMouseLeave
                        }), this.props.title && c.createElement(P, {
                            text: this.props.title,
                            ref: this.m_refTooltip
                        }), this.props.children)
                    }
                };
                (0, i.gn)([a.ak], G.prototype, "onMouseEnter", null), (0, i.gn)([a.ak], G.prototype, "onMouseLeave", null), G = (0, i.gn)([d.Pi], G);
                let z = n = class extends c.Component {
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
                        var t, r;
                        this.m_vecOriginalMousePosition = {
                            x: e.clientX,
                            y: e.clientY
                        }, window.document.addEventListener("mouseup", this.onWindowMouseUp), window.document.addEventListener("mousemove", this.onWindowMouseMove), null === (r = (t = this.props).onShowTray) || void 0 === r || r.call(t)
                    }
                    onWindowMouseMove(e) {
                        if (!this.slider || this.slider.isSliding) return;
                        const t = {
                            x: e.clientX,
                            y: e.clientY
                        };
                        (0, o.JR)((0, o.Zj)(t, this.m_vecOriginalMousePosition)) > n.MIN_DRAG_THRESHOLD && this.startSliding(t)
                    }
                    onWindowMouseUp(e) {
                        this.stopSliding()
                    }
                    startSliding(e) {
                        var t;
                        null === (t = this.slider) || void 0 === t || t.startExternalSliding(e)
                    }
                    stopSliding() {
                        var e, t, r, s;
                        window.document.removeEventListener("mouseup", this.onWindowMouseUp), window.document.removeEventListener("mousemove", this.onWindowMouseMove), (null === (e = this.slider) || void 0 === e ? void 0 : e.isSliding) && (null === (r = (t = this.props).onHideTray) || void 0 === r || r.call(t)), null === (s = this.slider) || void 0 === s || s.stopExternalSliding()
                    }
                    render() {
                        return c.createElement(H, {
                            imageUrl: f.f.Instance.muted ? "/dashboard/images/icons/svr_volume_mute.svg" : "/dashboard/images/icons/svr_volume.svg",
                            active: this.props.active,
                            label: this.props.active ? null : (0, y.Xx)("#Volume"),
                            onMouseDown: this.onButtonMouseDown,
                            onMouseEnter: this.props.onMouseEnter,
                            onMouseLeave: this.props.onMouseLeave
                        })
                    }
                };
                z.MIN_DRAG_THRESHOLD = 35, (0, i.gn)([a.ak], z.prototype, "onButtonMouseDown", null), (0, i.gn)([a.ak], z.prototype, "onWindowMouseMove", null), (0, i.gn)([a.ak], z.prototype, "onWindowMouseUp", null), z = n = (0, i.gn)([d.Pi], z);
                const K = e => {
                    const t = c.useRef();
                    return c.createElement(h.z, {
                        className: (0, S.LJ)("ButtonControl", ["Active", e.active], ["WithIcon", !!e.iconUrl], e.additionalClassNames),
                        onClick: e.onClick,
                        onMouseDown: e.onMouseDown,
                        onMouseUp: e.onMouseUp,
                        onMouseEnter: () => {
                            var r;
                            null === (r = t.current) || void 0 === r || r.show(), e.onMouseEnter && e.onMouseEnter()
                        },
                        onMouseLeave: () => {
                            var r;
                            null === (r = t.current) || void 0 === r || r.hide(), e.onMouseLeave && e.onMouseLeave()
                        },
                        enabled: e.enabled
                    }, e.title && c.createElement(P, {
                        text: e.title,
                        translation: e.tooltipTranslation,
                        ref: t
                    }), e.label && c.createElement("span", null, e.label), e.iconUrl && c.createElement("img", {
                        className: "Icon BlackToWhite",
                        src: e.iconUrl
                    }), e.icon)
                };

                function q(e) {
                    var t;
                    const r = (0, S.aB)(),
                        s = null !== (t = null == r ? void 0 : r.visible) && void 0 !== t && t,
                        n = c.useRef(!1);
                    return c.createElement(K, Object.assign({
                        iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                        title: s ? (0, y.Xx)("#HideKeyboardTooltip") : (0, y.Xx)("#ShowKeyboardTooltip"),
                        additionalClassNames: "Keyboard",
                        onMouseDown: () => {
                            n.current = s
                        },
                        onClick: () => {
                            n.current ? VRHTML.VROverlay.HideKeyboard() : (VRHTML.VROverlay.ShowKeyboardForOverlay(e.activeOverlayKey, o.Pw.Normal, o.l0.SingleLine, o.vS.Minimal, "Desktop Text", 1024, "", 0), VRHTML.VROverlay.SetKeyboardPositionForOverlay(e.activeOverlayKey, {}))
                        },
                        active: s
                    }, e))
                }
            },
            5103: (e, t, r) => {
                "use strict";
                var s = r(655),
                    n = r(7294),
                    i = r(3935),
                    o = r(9669),
                    a = r.n(o),
                    l = r(7056),
                    d = r(1569),
                    c = r(3568),
                    h = r(1628),
                    u = r(9809),
                    p = r(1380),
                    m = r(5177),
                    g = r(3107);
                class v extends n.Component {
                    constructor(e) {
                        super(e), this.m_genid = 0, this.m_language = null, this.m_languageToLayout = new Map, this.m_keyTypeToHandler = null, this.m_curShiftPlane = null, this.m_keyElements = null, this.m_mailbox = new d.Nv, this.m_mailbox.Init("keyboard_vrwebui").then((() => {
                            this.m_mailbox.RegisterHandler("keyboard_shown", this.OnKeyboardShown), this.m_mailbox.RegisterHandler("keyboard_hidden", this.OnKeyboardHidden)
                        })), this.initializeKeyHandlers(), this.state = {
                            bFading: !1,
                            bVisible: !1,
                            bMinimalMode: !1,
                            bMultilinePreview: !1,
                            inputMode: d.Pw.Normal,
                            activeKey: {
                                nCol: -1,
                                nRow: -1
                            },
                            presentation: "overlay",
                            shiftPlaneName: "normal",
                            layout: null,
                            langLayout: null,
                            text: "",
                            textPos: 0,
                            suggestions: []
                        }, null === VRHTML || void 0 === VRHTML || VRHTML.VRKeyboard.LoadSuggestionsForLanguage(this.language()), h.G3.Init(!1)
                    }
                    OnKeyboardHidden(e) {
                        this.setState({
                            bVisible: !1
                        })
                    }
                    OnKeyboardShown(e) {
                        const t = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VRDashboardManager.GetKeyboardInputInfo();
                        this.setState({
                            bVisible: !0,
                            inputMode: t.inputMode,
                            bMinimalMode: !!(d.vS.Minimal & t.keyboardFlags),
                            bMultilinePreview: t.lineMode == d.l0.MultipleLines,
                            text: t.keyboardBuffer,
                            textPos: t.keyboardBuffer.length
                        }), this.updateSuggestions(t.keyboardBuffer), this.getLayout("base"), this.getLayout(this.language())
                    }
                    startClose() {
                        this.setState({
                            bVisible: !1
                        }), null === VRHTML || void 0 === VRHTML || VRHTML.VRDashboardManager.CloseKeyboard()
                    }
                    genid() {
                        return this.m_genid += 1, "vk" + this.m_genid
                    }
                    language() {
                        return kbLanguage
                    }
                    bShowPasswordPreview() {
                        return this.state.inputMode == d.Pw.Password
                    }
                    getLayoutFile(e) {
                        return (0, s.mG)(this, void 0, void 0, (function*() {
                            let t = `/dashboard/keyboards/layout_${e}_${this.state.presentation}.json`;
                            return a().get(t).then((e => 200 != e.status ? null : e.data)).catch((t => "english" != e ? this.getLayoutFile("english") : null))
                        }))
                    }
                    getLayout(e) {
                        this.m_languageToLayout.has(e) ? this.onLayoutLoaded() : this.getLayoutFile(e).then((t => {
                            t && (this.m_languageToLayout.set(e, t), this.onLayoutLoaded())
                        }))
                    }
                    onLayoutLoaded() {
                        this.m_languageToLayout.has("base") && this.m_languageToLayout.has(this.language()) && (this.m_keyElements = null, this.setState({
                            layout: this.m_languageToLayout.get("base"),
                            langLayout: this.m_languageToLayout.get(this.language()),
                            shiftPlaneName: "normal"
                        }), this.toggleShiftPlaneWith("normal"))
                    }
                    initializeKeyHandlers() {
                        let there = this; this.m_keyTypeToHandler = new Map, this.m_keyTypeToHandler.set("key", this.handleKey), this.m_keyTypeToHandler.set("del", this.handleDel), this.m_keyTypeToHandler.set("shift", this.handleShift), this.m_keyTypeToHandler.set("symbols", this.handleSymbols), this.m_keyTypeToHandler.set("done", this.handleDone), this.m_keyTypeToHandler.set("cancel", this.handleCancel), this.m_keyTypeToHandler.set("clear", this.handleClear), this.m_keyTypeToHandler.set("return", this.handleReturn), this.m_keyTypeToHandler.set("langen", this.handleLang(there, "english")), this.m_keyTypeToHandler.set("langpt", this.handleLang(there, "portuguese")), this.m_keyTypeToHandler.set("langda", this.handleLang(there, "danish")), this.m_keyTypeToHandler.set("langnl", this.handleLang(there, "dutch")), this.m_keyTypeToHandler.set("langfi", this.handleLang(there, "finnish")), this.m_keyTypeToHandler.set("langfr", this.handleLang(there, "french")), this.m_keyTypeToHandler.set("langde", this.handleLang(there, "german")), this.m_keyTypeToHandler.set("langhu", this.handleLang(there, "hungarian")), this.m_keyTypeToHandler.set("langit", this.handleLang(there, "italian")), this.m_keyTypeToHandler.set("langnb", this.handleLang(there, "norwegian")), this.m_keyTypeToHandler.set("langpl", this.handleLang(there, "polish")), this.m_keyTypeToHandler.set("langro", this.handleLang(there, "romanian")), this.m_keyTypeToHandler.set("langru", this.handleLang(there, "russian")), this.m_keyTypeToHandler.set("langes", this.handleLang(there, "spanish")), this.m_keyTypeToHandler.set("langsv", this.handleLang(there, "swedish")), this.m_keyTypeToHandler.set("langtr", this.handleLang(there, "turkish")), this.m_keyTypeToHandler.set("languk", this.handleLang(there, "ukranian"))
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
                            let r = this.state.layout.geometry[e].keys[t];
                            if ("string" == typeof r);
                            else if ("key" != r.type) return void this.m_keyTypeToHandler.get(r.type)(r)
                        }
                        if (e < this.m_curShiftPlane.rows.length && t < this.m_curShiftPlane.rows[e].length) {
                            let r = this.m_curShiftPlane.rows[e][t];
                            "string" == typeof r ? this.m_keyTypeToHandler.get("key")(r) : this.m_keyTypeToHandler.has(r.type) && this.m_keyTypeToHandler.get(r.type)(r)
                        }
                    }
                    handleKey(e) {
                        let t;
                        if (t = "string" == typeof e ? e : e.value, this.state.bMinimalMode) this.UpdateText(t, 1);
                        else {
                            let e = this.state.text.substr(0, this.state.textPos) + t + this.state.text.substr(this.state.textPos),
                                r = this.state.textPos + t.length;
                            this.UpdateText(e, r)
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
                                let r = e.substr(0, e.length - 1) + t,
                                    s = this.state.textPos - 1;
                                this.UpdateText(r, s)
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
                        this.setState({
                            text: e,
                            textPos: t
                        }), null === VRHTML || void 0 === VRHTML || VRHTML.VRKeyboard.SetKeyboardText(e), this.updateSuggestions(this.getSuggestionBase(e, t))
                    }
                    handleDone(e) {
                        null === VRHTML || void 0 === VRHTML || VRHTML.VRDashboardManager.SendKeyboardDone(), this.startClose()
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
                    handleLang(k, lang) {
                        return function(e) {
                            kbLanguage = lang
                            k.m_languageToLayout = new Map
                            k.getLayout("base")
                            k.getLayout(lang)
                            k.onLayoutLoaded()
                        }
                    }
                    isWhite(e) {
                        return " " == e
                    }
                    findWordLimits(e, t) {
                        if (t < e.length && this.isWhite(e[t]) && (0 == t || t > 1 && this.isWhite(e[t - 1]))) return null;
                        let r = t;
                        for (; r > 0 && !this.isWhite(e[r]);) r -= 1;
                        r < e.length && this.isWhite(e[r]) && (r += 1);
                        let s = r;
                        for (; s < e.length && !this.isWhite(e[s]);) s += 1;
                        return [r, s]
                    }
                    getSuggestionBase(e, t) {
                        let r = this.findWordLimits(e, t);
                        return r ? e.substr(r[0], r[1] - r[0]) : null
                    }
                    updateSuggestions(e) {
                        var t;
                        if (null != this.state.layout)
                            if (this.bShowPasswordPreview()) this.setState({
                                suggestions: []
                            });
                            else if (null == e && (e = this.getSuggestionBase(this.state.text, this.state.textPos)), null != e && e.length > 0) {
                            new Array(this.state.layout.previewSuggestionCount);
                            let r = null !== (t = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.VRKeyboard.GetSuggestions(e, this.state.layout.previewSuggestionCount)) && void 0 !== t ? t : [];
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
                            r = this.findWordLimits(this.state.text, this.state.textPos);
                        if (r) {
                            let e = this.state.text.substr(0, r[0]);
                            t += " ";
                            let s = e + t + this.state.text.substr(r[1]),
                                n = e.length + t.length;
                            this.UpdateText(s, n)
                        }
                    }
                    onMouseEnter(e, t) {}
                    makeKeyFaceElement(e, t) {
                        let r = "VRKBKeyFace";
                        if (t && (r += ` VRKBShift_${t.name}`), "string" == typeof e) return n.createElement("span", {
                            key: this.genid(),
                            className: r
                        }, e);
                        {
                            let t = e.text;
                            switch (e.value ? e.value : e.text, e.img && (t = n.createElement("img", {
                                    src: `/dashboard/images/vrkeyboard/${e.img}.png`
                                })), "string" == typeof t && t.startsWith("#") && (t = (0, c.Xx)(t)), e.type) {
                                case "key":
                                case "symbols":
                                case "del":
                                case "cancel":
                                case "shift":
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
                                    return n.createElement("span", {
                                        key: this.genid(),
                                        className: r
                                    }, t);
                                case "done":
                                    return n.createElement("span", {
                                        key: this.genid(),
                                        className: r + " VRKBDone"
                                    }, t);
                                case "hole":
                                    return n.createElement("span", {
                                        key: this.genid(),
                                        className: r
                                    });
                                default:
                                    return console.log("unknown key type ", e.type, " in keyboard layout"), null
                            }
                        }
                    }
                    getKeyFaces(e, t) {
                        let r = [];
                        if (e < this.state.layout.geometry.length && t < this.state.layout.geometry[e].keys.length && "key" != this.state.layout.geometry[e].keys[t].type && r.push(this.makeKeyFaceElement(this.state.layout.geometry[e].keys[t], null)), 0 == r.length)
                            for (let s of this.state.langLayout.shiftPlanes) e < s.rows.length && t < s.rows[e].length && r.push(this.makeKeyFaceElement(s.rows[e][t], s));
                        return r
                    }
                    getKeyElements() {
                        let e = [];
                        for (let t = 0; t < this.state.layout.geometry.length; ++t) {
                            let r = this.state.layout.geometry[t],
                                s = [];
                            for (let e = 0; e < r.keys.length; ++e) {
                                let i = r.keys[e],
                                    o = {};
                                i.flexGrow && (o.flexGrow = i.flexGrow), i.flexShrink && (o.flexShrink = i.flexShrink), this.state.shiftPlaneName == i.type && (o.background = "#000"), this.state.activeKey.nCol == e && this.state.activeKey.nRow == t && (o.background = "#000");
                                let a = this.getKeyFaces(t, e),
                                    l = () => {
                                        "done" == i.type && this.onKey(t, e)
                                    },
                                    d = () => {
                                        "done" != i.type && (this.setState({
                                            activeKey: {
                                                nRow: t,
                                                nCol: e
                                            }
                                        }), this.onKey(t, e))
                                    },
                                    c = () => {
                                        "done" != i.type && this.setState({
                                            activeKey: {
                                                nRow: -1,
                                                nCol: -1
                                            }
                                        })
                                    };
                                s.push(n.createElement(m.z, {
                                    key: this.genid(),
                                    className: "VRKBKey",
                                    pressSoundEffect: g.y.KeyboardClick,
                                    releaseSoundEffect: null,
                                    onClick: l,
                                    onMouseDown: d,
                                    onMouseUp: c,
                                    style: o
                                }, a))
                            }
                            let i = {};
                            r.height && (i.height = r.height), e.push(n.createElement("div", {
                                key: this.genid(),
                                className: "VRKBRow",
                                style: i
                            }, s))
                        }
                        return n.createElement("div", {
                            className: "VRKBRows"
                        }, e)
                    }
                    makeCursor() {
                        return n.createElement("span", {
                            key: this.genid(),
                            className: "VRKBPreviewTextCursor"
                        }, "|")
                    }
                    makePreviewText() {
                        let e = this.state.text.substr(0, this.state.textPos),
                            t = this.state.text.substr(this.state.textPos);
                        return this.bShowPasswordPreview() ? (e = v.kPasswordChar.repeat(e.length), t = v.kPasswordChar.repeat(t.length), [n.createElement("span", {
                            key: this.genid(),
                            className: "VRKBPreviewTextPart"
                        }, v.kPasswordChar.repeat(e.length)), this.makeCursor(), n.createElement("span", {
                            key: this.genid(),
                            className: "VRKBPreviewTextPart"
                        }, v.kPasswordChar.repeat(t.length))]) : [n.createElement("span", {
                            key: this.genid(),
                            className: "VRKBPreviewTextPart"
                        }, e), this.makeCursor(), n.createElement("span", {
                            key: this.genid(),
                            className: "VRKBPreviewTextPart"
                        }, t)]
                    }
                    makeSuggestionElements() {
                        let e = [];
                        if (this.state.suggestions)
                            for (let t = 0; t < this.state.suggestions.length; ++t) e.push(n.createElement("div", {
                                key: this.genid(),
                                className: "VRKBSuggestion",
                                onClick: () => this.handleSuggestionClick(t)
                            }, this.state.suggestions[t]));
                        for (let t = e.length; t < this.state.layout.previewSuggestionCount; ++t) e.push(n.createElement("div", {
                            key: this.genid(),
                            className: "VRKBSuggestion"
                        }));
                        return e
                    }
                    renderFlatPreview() {
                        return this.state.bMinimalMode ? null : n.createElement("div", {
                            className: "VRKBPreviewWrapper"
                        }, n.createElement("div", {
                            key: this.genid(),
                            className: "VRKBPreviewText"
                        }, this.makePreviewText()), n.createElement("div", {
                            key: this.genid(),
                            className: "VRKBSuggestionWrapper"
                        }, this.makeSuggestionElements()))
                    }
                    render_flat() {
                        return n.createElement(d.wx, {
                            parent_path: "/user/head"
                        }, n.createElement(d.iC, null, n.createElement(d.wx, {
                            translation: this.state.layout.translation
                        }, n.createElement(d.s_, {
                            width: void 0,
                            height: 1,
                            interactive: !0,
                            sort_depth_bias: .2
                        }, n.createElement("div", {
                            className: `VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`
                        }, n.createElement("div", {
                            className: "VRKBBackground"
                        }, this.renderFlatPreview(), this.m_keyElements))))))
                    }
                    render_overlay() {
                        return n.createElement("div", {
                            className: `VRKBContainer VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`
                        }, n.createElement("div", {
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
                        switch (this.m_keyElements = this.getKeyElements(), this.state.presentation) {
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
                v.kPasswordChar = "●", (0, s.gn)([l.ak], v.prototype, "OnKeyboardHidden", null), (0, s.gn)([l.ak], v.prototype, "OnKeyboardShown", null), (0, s.gn)([l.ak], v.prototype, "handleKey", null), (0, s.gn)([l.ak], v.prototype, "handleReturn", null), (0, s.gn)([l.ak], v.prototype, "handleDel", null), (0, s.gn)([l.ak], v.prototype, "handleShift", null), (0, s.gn)([l.ak], v.prototype, "handleSymbols", null), (0, s.gn)([l.ak], v.prototype, "handleDone", null), (0, s.gn)([l.ak], v.prototype, "handleCancel", null), (0, s.gn)([l.ak], v.prototype, "handleClear", null), (0, s.gn)([l.ak], v.prototype, "handleSuggestionClick", null), (0, s.gn)([l.ak], v.prototype, "onMouseEnter", null);
                const _ = null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.GetSteamVRLanguage();
                null === VRHTML || void 0 === VRHTML || VRHTML.VROverlay.SetFlag(VRHTML.VROverlay.ThisOverlayHandle(), d.Z9.MakeOverlaysInteractiveIfVisible, !0), null === VRHTML || void 0 === VRHTML || VRHTML.VROverlay.SetInputMethod(VRHTML.VROverlay.ThisOverlayHandle(), d.qC.Mouse), null === VRHTML || void 0 === VRHTML || VRHTML.VRDashboardManager.SetKeyboardOverlayToThis(), (0, c.CK)(["systemui"], _).then((() => u.I.Init())).then((() => p.S.Init())).then((() => {
                    i.render(n.createElement(v, {
                        language: _
                    }), document.getElementById("root"))
                }))
            },
            16: (e, t, r) => {
                "use strict";
                r.d(t, {
                    BB: () => u,
                    KU: () => p
                });
                var s, n = r(655),
                    i = r(7294),
                    o = r(7056),
                    a = r(1569),
                    l = r(3568),
                    d = r(7062),
                    c = r(8980),
                    h = r(1628);
                const u = "resetuniverseorigincountdown",
                    p = "begin_reset_universe_origin_countdown";
                let m = s = class extends i.Component {
                    constructor(e) {
                        super(e), this.m_countdownTimeout = 0, this.m_fadeFinishTimeout = 0, this.m_mailbox = new a.Nv, this.m_mailbox.Init(u).then((() => {
                            this.m_mailbox.RegisterHandler(p, this.OnBeginResetUniverseOriginCountdown)
                        })), this.state = {
                            visible: !1,
                            fading: !1,
                            countdown_seconds: 0,
                            bDashboardPlacementActive: !1
                        }
                    }
                    componentWillUnmount() {
                        clearTimeout(this.m_countdownTimeout), this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3), clearTimeout(this.m_fadeFinishTimeout), this.m_fadeFinishTimeout = 0
                    }
                    OnBeginResetUniverseOriginCountdown(e) {
                        clearTimeout(this.m_countdownTimeout), this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3), clearTimeout(this.m_fadeFinishTimeout), this.m_fadeFinishTimeout = 0;
                        let t = !1;
                        if (h.G3.settings.get("/settings/dashboard/allowPlacementDuringRecenter")) {
                            const e = null === a.Co || void 0 === a.Co ? void 0 : a.Co.VRApplications.GetSceneApplicationKey();
                            t = !e || "system.generated.xrservice" == e
                        }
                        t ? this.props.dashboardRef.current && this.props.dashboardRef.current.setPlacementModeActive(!0) : null === a.Co || void 0 === a.Co || a.Co.VRDashboardManager.HideDashboard("reset_universe_origin"), this.setState({
                            visible: !0,
                            fading: !1,
                            countdown_seconds: e.countdown_seconds,
                            bDashboardPlacementActive: t
                        })
                    }
                    CountdownTick() {
                        clearTimeout(this.m_countdownTimeout), 1 == this.state.countdown_seconds ? (this.m_countdownTimeout = 0, this.state.bDashboardPlacementActive && this.props.dashboardRef.current && this.props.dashboardRef.current.setPlacementModeActive(!1), null === a.Co || void 0 === a.Co || a.Co.VRChaperone.ResetZeroPose(a.zq.Seated), null === a.Co || void 0 === a.Co || a.Co.VRChaperone.ResetZeroPose(a.zq.Standing), clearTimeout(this.m_fadeFinishTimeout), this.m_fadeFinishTimeout = setTimeout(this.HideOverlay, s.kFadeDurationMs), this.setState({
                            visible: !0,
                            fading: !0,
                            countdown_seconds: 0,
                            bDashboardPlacementActive: !1
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
                    renderPanel() {
                        return i.createElement(a.s_, {
                            width: void 0,
                            height: s.kPanelHeight,
                            interactive: !1,
                            sort_order: 1e3
                        }, i.createElement("div", {
                            className: (0, c.LJ)("ResetSeatedCountdownParent", ["Fading", this.state.fading]),
                            style: {
                                width: s.kPixelWidth
                            }
                        }, i.createElement("div", {
                            className: "FlexColumn"
                        }, i.createElement("div", {
                            className: "ResetSeatedCountdownRow"
                        }, i.createElement("div", {
                            className: "ResetSeatedCountdownText"
                        }, this.state.countdown_seconds)), i.createElement("div", {
                            className: "ResetSeatedCountdownTextDesc"
                        }, (0, l.Xx)("#Recentering_Countdown")))))
                    }
                    render() {
                        var e, t;
                        if (!this.state.visible) return null;
                        let r = .8 * (null !== (e = null === a.Co || void 0 === a.Co ? void 0 : a.Co.VRProperties.GetFloatProperty(a.wU, a.Uk.DashboardScale_Float)) && void 0 !== e ? e : 1),
                            s = null !== (t = h.G3.settings.get("/settings/dashboard/allowFreeTransform")) && void 0 !== t && t;
                        return this.state.bDashboardPlacementActive ? i.createElement(a.eK, {
                            bContinuousRelatch: !0,
                            bFreeDashboardTransform: s
                        }, i.createElement(a.wx, {
                            translation: {
                                y: -.05,
                                z: -.9
                            },
                            scale: r
                        }, this.renderPanel())) : i.createElement(a.wx, {
                            parent_path: "/user/head"
                        }, i.createElement(a.wx, {
                            translation: {
                                y: -.05,
                                z: -.9
                            },
                            scale: r
                        }, this.renderPanel()))
                    }
                };
                m.kPanelHeight = .2, m.kPixelWidth = 400, m.kFadeDurationMs = 1e3, (0, n.gn)([o.ak], m.prototype, "OnBeginResetUniverseOriginCountdown", null), (0, n.gn)([o.ak], m.prototype, "CountdownTick", null), (0, n.gn)([o.ak], m.prototype, "HideOverlay", null), m = s = (0, n.gn)([d.Pi], m)
            },
            1283: (e, t, r) => {
                "use strict";
                r.d(t, {
                    s: () => v
                });
                var s = r(655),
                    n = r(7294),
                    i = r(7062),
                    o = r(7056),
                    a = r(3568),
                    l = r(5211),
                    d = r(4285),
                    c = r(2188),
                    h = r(9809),
                    u = r(5177),
                    p = r(8980),
                    m = r(9595);
                let g = class extends n.Component {
                    constructor(e) {
                        super(e), this.state = {
                            deviceStatus: null
                        }
                    }
                    get trackerConfig() {
                        return l.c6.GetTrackerBinding(this.props.trackerPath)
                    }
                    OnTrackerRoleChanged(e) {
                        l.c6.SetTrackerBinding(this.props.trackerPath, e, this.trackerConfig.controller_role)
                    }
                    OnControllerRoleChanged(e) {
                        l.c6.SetTrackerBinding(this.props.trackerPath, this.trackerConfig.role, e)
                    }
                    BuzzTracker() {
                        l.c6.PulseHaptics(this.trackerConfig.device_path_handle)
                    }
                    get deviceInfo() {
                        return h.I.GetDeviceInfo(this.props.trackerPath)
                    }
                    IsConnected() {
                        return !(!this.deviceInfo || !this.deviceInfo.is_connected)
                    }
                    IsIdentifiable() {
                        return !(!this.IsConnected() || !this.deviceInfo.is_identifiable)
                    }
                    render() {
                        let e = [];
                        "TrackerRole_Handed" == this.trackerConfig.role && (e = ["TrackedControllerRole_Invalid", "TrackedControllerRole_LeftHand", "TrackedControllerRole_RightHand"].map((e => ({
                            value: e,
                            sLabel: (0, a.Xx)("#" + e)
                        }))));
                        const t = this.trackerConfig.device_path_string;
                        let r = t;
                        const s = "vive_tracker";
                        r.includes(s) && (r = r.substring(r.indexOf(s) + s.length, r.length));
                        let i = null;
                        return this.IsConnected() ? this.IsIdentifiable() || (i = (0, a.Xx)("#Settings_ViveTracker_Identify_NotIdentifiable")) : i = (0, a.Xx)("#Settings_ViveTracker_Identify_NotConnected"), n.createElement(m.GV, {
                            className: "SettingsItem TrackerEntry"
                        }, n.createElement("div", {
                            className: "Label",
                            title: t
                        }, n.createElement("span", null, r), n.createElement("div", {
                            title: (0, a.Xx)(this.IsConnected() ? "#Settings_ViveTracker_Connected" : "#Settings_ViveTracker_Disconnected"),
                            className: (0, p.LJ)("TrackerConnectionIndicator", ["Connected", d.E.connected && this.IsConnected()], ["Disconnected", d.E.connected && !this.IsConnected()])
                        })), n.createElement("div", {
                            className: (0, p.LJ)("SubsectionStem")
                        }, n.createElement(m.GV, {
                            title: i
                        }, n.createElement(u.z, {
                            className: "ButtonControl",
                            enabled: this.IsIdentifiable(),
                            onClick: this.BuzzTracker
                        }, (0, a.Xx)("#TrackerEditor_BuzzTracker")))), n.createElement("div", {
                            className: "Subsection WithStem"
                        }, n.createElement(m.Xp, {
                            label: (0, a.Xx)("#Settings_ViveTracker_Role"),
                            items: this.props.validTrackerRoles.map((e => ({
                                value: e,
                                sLabel: (0, a.Xx)("#" + e)
                            }))),
                            value: this.trackerConfig.role,
                            onChange: this.OnTrackerRoleChanged
                        }), e.length > 0 && n.createElement(m.Xp, {
                            label: (0, a.Xx)("#Settings_ViveTracker_Hand"),
                            items: e,
                            value: this.trackerConfig.controller_role,
                            onChange: this.OnControllerRoleChanged
                        })))
                    }
                };
                (0, s.gn)([c.Fl], g.prototype, "trackerConfig", null), (0, s.gn)([o.ak], g.prototype, "OnTrackerRoleChanged", null), (0, s.gn)([o.ak], g.prototype, "OnControllerRoleChanged", null), (0, s.gn)([o.ak], g.prototype, "BuzzTracker", null), (0, s.gn)([c.Fl], g.prototype, "deviceInfo", null), g = (0, s.gn)([i.Pi], g);
                let v = class extends n.Component {
                    constructor(e) {
                        super(e), this.m_nGetInputStateIntervalHandle = 0
                    }
                    componentDidMount() {
                        this.m_nGetInputStateIntervalHandle = window.setInterval((() => h.I.GetInputState()), 2e3), h.I.GetInputState()
                    }
                    componentWillUnmount() {
                        window.clearInterval(this.m_nGetInputStateIntervalHandle)
                    }
                    render() {
                        let e, t = l.c6.TrackerBindings;
                        return t && t.trackers && (e = t.trackers.map(((e, r) => n.createElement(g, {
                            key: r,
                            trackerPath: e.device_path_string,
                            validTrackerRoles: t.valid_roles
                        })))), n.createElement("div", {
                            className: "TrackerEditorModal"
                        }, e)
                    }
                };
                v = (0, s.gn)([i.Pi], v)
            },
            6698: (e, t, r) => {
                "use strict";
                r.d(t, {
                    u: () => n
                });
                var s = r(7294);

                function n(e) {
                    return s.createElement("svg", Object.assign({
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 100 100",
                        xmlSpace: "preserve"
                    }, e), s.createElement("g", null, s.createElement("path", {
                        d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z"
                    })))
                }
            },
            9462: () => {}
        },
        r = {};

    function s(e) {
        var n = r[e];
        if (void 0 !== n) return n.exports;
        var i = r[e] = {
            id: e,
            exports: {}
        };
        return t[e](i, i.exports, s), i.exports
    }
    s.m = t, e = [], s.O = (t, r, n, i) => {
        if (!r) {
            var o = 1 / 0;
            for (c = 0; c < e.length; c++) {
                for (var [r, n, i] = e[c], a = !0, l = 0; l < r.length; l++)(!1 & i || o >= i) && Object.keys(s.O).every((e => s.O[e](r[l]))) ? r.splice(l--, 1) : (a = !1, i < o && (o = i));
                if (a) {
                    e.splice(c--, 1);
                    var d = n();
                    void 0 !== d && (t = d)
                }
            }
            return t
        }
        i = i || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > i; c--) e[c] = e[c - 1];
        e[c] = [r, n, i]
    }, s.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return s.d(t, {
            a: t
        }), t
    }, s.d = (e, t) => {
        for (var r in t) s.o(t, r) && !s.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, s.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), s.j = 987, (() => {
        var e = {
            987: 0
        };
        s.O.j = t => 0 === e[t];
        var t = (t, r) => {
                var n, i, [o, a, l] = r,
                    d = 0;
                if (o.some((t => 0 !== e[t]))) {
                    for (n in a) s.o(a, n) && (s.m[n] = a[n]);
                    if (l) var c = l(s)
                }
                for (t && t(r); d < o.length; d++) i = o[d], s.o(e, i) && e[i] && e[i][0](), e[i] = 0;
                return s.O(c)
            },
            r = self.webpackChunkvrwebui = self.webpackChunkvrwebui || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })(), s.nc = void 0;
    var n = s.O(void 0, [968, 683], (() => s(5103)));
    n = s.O(n)
})();
//# sourceMappingURL=keyboard.js.map?v=9519a48b9aec4c37f821